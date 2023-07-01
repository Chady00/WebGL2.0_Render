"use strict";

// Vertex shader source code
const vs = `#version 300 es
in vec4 a_position;
in vec2 a_texcoord;

uniform mat4 u_projection;
uniform mat4 u_view;
uniform mat4 u_world;

out vec2 v_texcoord;

void main() {
  gl_Position = u_projection * u_view * u_world * a_position;
  v_texcoord = a_texcoord;
}
`;

// Fragment shader source code
const fs = `#version 300 es
precision highp float;

in vec2 v_texcoord;

uniform vec4 u_colorMult;
uniform sampler2D u_texture;

uniform vec3 u_lightPosition;  // Position of the light source
uniform vec3 u_lightColor;     // Color of the light source

out vec4 outColor;

void main() {
  vec4 texColor = texture(u_texture, v_texcoord);
  vec3 ambientColor = vec3(0.4, 0.9, 0.9);  // Ambient light color

  vec3 lightDirection = normalize(u_lightPosition - vec3(gl_FragCoord.xy, 0.0));
  vec3 normal = normalize(vec3(0.1, 0.1, 1.0));  // Surface normal (assuming it's pointing up)

  float diffuseIntensity = max(dot(normal, lightDirection), 0.0);
  vec3 diffuseColor = u_lightColor * diffuseIntensity;

  vec3 finalColor = (ambientColor + diffuseColor) * texColor.rgb;
  outColor = vec4(finalColor, texColor.a) * u_colorMult;
}
`;

// Array to store global heights
let global_heights = [];

// Main function
function main() {
  const canvas = document.querySelector("#canvas");
  const gl = canvas.getContext("webgl2");

  if (!gl) {
    return;
  }

  const textureProgramInfo = twgl.createProgramInfo(gl, [vs, fs]);

  twgl.setAttributePrefix("a_");

  // Function to resize the canvas to fullscreen
  function resizeCanvasToFullscreen() {
    //   canvas.width = 700;
    //   canvas.height = 700;
    // Fullscreen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, canvas.width, canvas.height);
  }
  resizeCanvasToFullscreen();
  window.addEventListener("resize", resizeCanvasToFullscreen);

  // Function to create polygons
  function createPolygons(
    width,
    height,
    subdivisionsX,
    subdivisionsY,
    y_start
  ) {
    const positions = [];
    const texcoords = [];
    const indices = [];

    const xStep = width / subdivisionsX;
    const yStep = height / subdivisionsY;
    const depthStep = y_start / subdivisionsY; // Calculate the depth step

    for (let y = 0; y <= subdivisionsY; y++) {
      for (let x = 0; x <= subdivisionsX; x++) {
        const xPos = x * xStep - width / 2;
        const yPos = y * yStep - height / 2;
        const zPos = y_start - y * depthStep; // Calculate the zPos based on the depth step

        positions.push(xPos, yPos, zPos);
        texcoords.push(x / subdivisionsX, y / subdivisionsY, 5);

        if (x < subdivisionsX && y < subdivisionsY) {
          const i = x + y * (subdivisionsX + 1);
          indices.push(i, i + 1, i + subdivisionsX + 1);
          indices.push(i + subdivisionsX + 1, i + 1, i + subdivisionsX + 2);
        }
      }
    }

    return {
      position: positions,
      texcoord: texcoords,
      indices: indices,
    };
  }

  //******************************************/ create clouds for the background ******************************************/

  const cloudBufferInfo = twgl.primitives.createSphereBufferInfo(
    gl,
    0.5,
    32, // Set the number of divisions to 3 for a triangle
    10
  );
  const cloudVAO = twgl.createVAOFromBufferInfo(
    gl,
    textureProgramInfo,
    cloudBufferInfo
  );

  const cloudTexture = gl.createTexture();
  const cloudImage = new Image();

  cloudImage.onload = function () {
    gl.bindTexture(gl.TEXTURE_2D, cloudTexture);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      cloudImage
    );
    gl.generateMipmap(gl.TEXTURE_2D);
  };

  cloudImage.src = "textures/cloud.png";

  const cloudUniforms = {
    u_colorMult: [1, 1, 1, 1], // white
    u_texture: cloudTexture,
  };

  //******************************************/ create moon ******************************************/

  const moonBufferInfo = twgl.primitives.createSphereBufferInfo(
    gl,
    2.0, // Radius of the moon
    32,
    24
  );
  const moonVAO = twgl.createVAOFromBufferInfo(
    gl,
    textureProgramInfo,
    moonBufferInfo
  );

  const moonTexture = gl.createTexture();
  const moonImage = new Image();

  moonImage.onload = function () {
    gl.bindTexture(gl.TEXTURE_2D, moonTexture);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      moonImage
    );
    gl.generateMipmap(gl.TEXTURE_2D);
  };

  moonImage.src = "textures/moon.png";

  const moonUniforms = {
    u_colorMult: [1, 1, 1, 1], // white
    u_texture: moonTexture,
  };


  //******************************************/ End of create clouds for the background ******************************************/

  const planeData = createPolygons(20, 20, 7, 7, 0);
  const planeBufferInfo = twgl.createBufferInfoFromArrays(gl, planeData);
  const planeVAO = twgl.createVAOFromBufferInfo(
    gl,
    textureProgramInfo,
    planeBufferInfo
  );

  const checkerboardTexture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, checkerboardTexture);
  gl.texImage2D(
    gl.TEXTURE_2D,
    0,
    gl.LUMINANCE,
    8,
    8,
    0,
    gl.LUMINANCE,
    gl.UNSIGNED_BYTE,
    new Uint8Array([
      0xff, 0xcc, 0xff, 0xcc, 0xff, 0xcc, 0xff, 0xcc, 0xcc, 0xff, 0xcc, 0xff,
      0xcc, 0xff, 0xcc, 0xff, 0xff, 0xcc, 0xff, 0xcc, 0xff, 0xcc, 0xff, 0xcc,
      0xcc, 0xff, 0xcc, 0xff, 0xcc, 0xff, 0xcc, 0xff, 0xff, 0xcc, 0xff, 0xcc,
      0xff, 0xcc, 0xff, 0xcc, 0xcc, 0xff, 0xcc, 0xff, 0xcc, 0xff, 0xcc, 0xff,
      0xff, 0xcc, 0xff, 0xcc, 0xff, 0xcc, 0xff, 0xcc, 0xcc, 0xff, 0xcc, 0xff,
      0xcc, 0xff, 0xcc, 0xff,
    ])
  );
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(
    gl.TEXTURE_2D,
    gl.TEXTURE_MIN_FILTER,
    gl.LINEAR_MIPMAP_LINEAR
  );
  gl.generateMipmap(gl.TEXTURE_2D);

  function degToRad(d) {
    return (d * Math.PI) / 180;
  }

  const settings = {
    cameraX: 2.75,
    cameraY: 5,
    cameraZ: 7, // Add a cameraZ property to the settings object
  };

  const fieldOfViewRadians = degToRad(90);

  const cubeBufferInfo = twgl.primitives.createCubeBufferInfo(gl, 0, 0, 2.6, 0);
  const cubeVAO = twgl.createVAOFromBufferInfo(
    gl,
    textureProgramInfo,
    cubeBufferInfo
  );

// Function to handle key down events

  function handleKeyDown(event) {
    // console.log(event.key);
    // Update camera position or rotation based on the key pressed
    switch (event.key) {
      case "ArrowUp":
        if (event.shiftKey) {
          // Rotate camera up
          settings.cameraY += 0.7;
        } else {
          // Move camera up
          settings.cameraZ -= 0.7;
        }
        break;
      case "ArrowDown":
        if (event.shiftKey) {
          // Rotate camera down
          settings.cameraY -= 0.7;
        } else {
          // Move camera down
          settings.cameraZ += 0.7;
        }
        break;
      case "ArrowLeft":
        // Move camera left
        settings.cameraX -= 0.7;
        break;
      case "ArrowRight":
        // Move camera right
        settings.cameraX += 0.7;
        break;
    }
    // Print camera position to console
    // console.log(
    //   "camera position: " +
    //     settings.cameraX +
    //     ", " +
    //     settings.cameraY +
    //     ", " +
    //     settings.cameraZ
    // );
    // render(); // Call render after updating camera position
  }
// Function to handle key up events


  function handleKeyUp(event) {
    // Reset camera position or rotation when the key is released (optional)
    switch (event.key) {
      case "ArrowUp":
      case "ArrowDown":
        cameraPosition[1] = 5; // reset camera height
        break;
      case "ArrowLeft":
      case "ArrowRight":
        cameraRotation[1] = 0; // reset camera rotation
        break;
    }
  }
// Mouse event handling

  const mouse = {
    startX: 0,
    startY: 0,
    isDragging: false,
  };

  canvas.addEventListener("mousedown", handleMouseDown);
  canvas.addEventListener("mousemove", handleMouseMove);
  canvas.addEventListener("mouseup", handleMouseUp);
  canvas.addEventListener("mouseout", handleMouseUp);

  function handleMouseDown(event) {
    mouse.startX = event.clientX;
    mouse.startY = event.clientY;
    mouse.isDragging = true;
  }

  function handleMouseMove(event) {
    if (!mouse.isDragging) return;

  const sensitivity = 0.005; // Adjust the mouse sensitivity here

    const deltaX = event.clientX - mouse.startX;
    const deltaY = event.clientY - mouse.startY;

    settings.cameraX += deltaX * sensitivity;
    settings.cameraY += deltaY * sensitivity;

    mouse.startX = event.clientX;
    mouse.startY = event.clientY;
  }

  function handleMouseUp() {
    mouse.isDragging = false;
  }

  /// load my crate model :
  const glassTexture = gl.createTexture();
  const glassImage = new Image();

  glassImage.onload = function () {
    gl.bindTexture(gl.TEXTURE_2D, glassTexture);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      glassImage
    );
    gl.generateMipmap(gl.TEXTURE_2D);
  };

  glassImage.src = "textures/glass.png";
// Uniforms for cube rendering

  const cubeUniforms = {
    u_colorMult: [1, 1, 1, 1], // gray
    u_texture: glassTexture,
    u_world: m4.translation(0, 0.5, 0),
  };
  // apply wood texture for plan
  const woodTexture = gl.createTexture();
  const woodImage = new Image();

  woodImage.onload = function () {
    gl.bindTexture(gl.TEXTURE_2D, woodTexture);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      woodImage
    );
    gl.generateMipmap(gl.TEXTURE_2D);
  };
// Uniforms for plane rendering

  woodImage.src = "textures/wood.png";
  const planeUniforms = {
    u_colorMult: [1, 1, 1, 1], // lightblue
    u_texture: woodTexture,
    u_world: m4.translation(1, 1, 0),
    // make it rotated a bit
    u_world: m4.xRotation(degToRad(-90)),
  };

  let cameraPosition = [settings.cameraX, settings.cameraY, settings.cameraZ];
  let cameraRotation = [0.5, 0.5, 0.5]; // initial rotation

  document.addEventListener("keydown", handleKeyDown);
  document.addEventListener("keyup", handleKeyUp);
// Create cube positions randomly

  function createRandomCubePositions(numBuildings, planeWidth, planeHeight) {
    const buildings = [];
    const buildingSize = 10; // Size of each building
    const minDistance = 2; // Minimum distance between buildings
    const filledPositions = {}; // Object to store filled positions

    for (let i = 0; i < numBuildings; i++) {
      let position;
      let colliding = true;
      let key;
      let x;
      let z;
      let y;
      // Keep generating positions until a non-colliding position is found
      while (colliding) {
        x = (Math.random() - 0.5) * ((planeWidth - 1) * 2);
        z = (Math.random() - 0.5) * ((planeHeight - 1) * 2);

        key = `${x}_${z}`;

        if (filledPositions[key]) {
          y = filledPositions[key] + 1; // Set y to the current value + 1
        } else {
          y = 0.5; // Random height for the first building
          filledPositions[key] = y;
        }

        position = [x, y, z];
        colliding = checkCollision(
          position,
          buildings,
          buildingSize,
          minDistance
        );
      }
      let randa = ((Math.random() * 100) % 5) + 1;

      randa = Math.floor(randa);
      // console.log(randa);
      for (let j = 0; j < randa; j++) {
        buildings.push(position);
        y += 1; // Increment the height
        position = [x, y, z];
      }
      filledPositions[`${position[0]}_${position[2]}`] = position[1]; // Add the current y position to the filledPositions object
      // push [x,y,z] to global_heights
      global_heights.push([x, y, z]);
      // console.log(global_heights);
    }

    return buildings;
  }

  // Function to check for collisions between buildings
  function checkCollision(position, buildings, buildingSize, minDistance) {
    for (const existingPosition of buildings) {
      // Check if the distance between the positions is less than the minimum distance
      if (!(Math.abs(position[0] == existingPosition[0]) < buildingSize)) {
        return true;
      } else if (
        Math.abs(position[0] - existingPosition[0]) < minDistance &&
        Math.abs(position[2] - existingPosition[2]) < minDistance
      ) {
        return true; // Collision detected
      }
    }

    return false; // No collision
  }
  // console.log(city);

  const cubePositions = createRandomCubePositions(40, 10, 10);
// Draw the scene

  function drawScene(projectionMatrix, cameraMatrix) {
    const viewMatrix = m4.inverse(cameraMatrix);

    gl.useProgram(textureProgramInfo.program);

    twgl.setUniforms(textureProgramInfo, {
      u_view: viewMatrix,
      u_projection: projectionMatrix,
    });
    //draw the clouds
    const cloudPositions = global_heights;
    gl.bindVertexArray(cloudVAO);
    twgl.setUniforms(textureProgramInfo, cloudUniforms);
    cloudPositions.forEach((position) => {
      const worldMatrix = m4.translation(position[0], position[1], position[2]);
      twgl.setUniforms(textureProgramInfo, { u_world: worldMatrix });
      twgl.drawBufferInfo(gl, cloudBufferInfo);
    });
    // draw moon:
    const moonPositions = [[-10, 10, -10]];
    gl.bindVertexArray(moonVAO);
    twgl.setUniforms(textureProgramInfo, moonUniforms);
    moonPositions.forEach((position) => {
      const worldMatrix = m4.translation(position[0], position[1], position[2]);
      twgl.setUniforms(textureProgramInfo, { u_world: worldMatrix });
      twgl.drawBufferInfo(gl, moonBufferInfo);
    });
    // Draw the cubes
    gl.bindVertexArray(cubeVAO);
    twgl.setUniforms(textureProgramInfo, cubeUniforms);
    twgl.drawBufferInfo(gl, cubeBufferInfo);
    cubePositions.forEach((position) => {
      const worldMatrix = m4.translation(position[0], position[1], position[2]);
      twgl.setUniforms(textureProgramInfo, { u_world: worldMatrix });
      twgl.drawBufferInfo(gl, cubeBufferInfo);
    });
    // Draw the plane
    gl.bindVertexArray(planeVAO);
    twgl.setUniforms(textureProgramInfo, planeUniforms);
    twgl.drawBufferInfo(gl, planeBufferInfo);
  }
// Render function

  function render() {
    twgl.resizeCanvasToDisplaySize(gl.canvas);

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    gl.enable(gl.CULL_FACE);
    gl.enable(gl.DEPTH_TEST);
    gl.clearColor(0 / 255, 0 / 255, 50 / 255, 1.0); // Dark blue color: #000033 (R: 0, G: 0, B: 51)
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    const projectionMatrix = m4.perspective(
      fieldOfViewRadians,
      aspect,
      1,
      2000
    );

    cameraPosition = [settings.cameraX, settings.cameraY, settings.cameraZ];
    const target = [0, 0, 0];
    const up = [0, 0.5, 0];
    const cameraMatrix = m4.lookAt(cameraPosition, target, up);

    requestAnimationFrame(render);

    drawScene(projectionMatrix, cameraMatrix);
  }
// Call the render function to start the animation loop

  render();
}

main();
