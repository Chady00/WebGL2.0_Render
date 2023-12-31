!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.twgl = t())
    : (e.twgl = t());
})("undefined" != typeof self ? self : this, function () {
  return (function (e) {
    var t = {};

    function r(n) {
      if (t[n]) return t[n].exports;
      var o = (t[n] = {
        i: n,
        l: !1,
        exports: {},
      });
      return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
    }
    return (
      (r.m = e),
      (r.c = t),
      (r.d = function (e, t, n) {
        r.o(e, t) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: n,
          });
      }),
      (r.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module",
          }),
          Object.defineProperty(e, "__esModule", {
            value: !0,
          });
      }),
      (r.t = function (e, t) {
        if ((1 & t && (e = r(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (
          (r.r(n),
          Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e,
          }),
          2 & t && "string" != typeof e)
        )
          for (var o in e)
            r.d(
              n,
              o,
              function (t) {
                return e[t];
              }.bind(null, o)
            );
        return n;
      }),
      (r.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return r.d(t, "a", t), t;
      }),
      (r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (r.p = ""),
      r((r.s = 8))
    );
  })([
    function (e, t, r) {
      "use strict";
      (t.__esModule = !0),
        (t.copyExistingProperties = function (e, t) {
          Object.keys(t).forEach(function (r) {
            t.hasOwnProperty(r) && e.hasOwnProperty(r) && (t[r] = e[r]);
          });
        }),
        (t.copyNamedProperties = function (e, t, r) {
          e.forEach(function (e) {
            var n = t[e];
            void 0 !== n && (r[e] = n);
          });
        }),
        (t.error = function () {
          var e;
          (e = console).error.apply(e, arguments);
        }),
        (t.warn = function () {
          var e;
          (e = console).warn.apply(e, arguments);
        }),
        (t.isBuffer = function (e, t) {
          return "undefined" != typeof WebGLBuffer && t instanceof WebGLBuffer;
        }),
        (t.isRenderbuffer = function (e, t) {
          return (
            "undefined" != typeof WebGLRenderbuffer &&
            t instanceof WebGLRenderbuffer
          );
        }),
        (t.isShader = function (e, t) {
          return "undefined" != typeof WebGLShader && t instanceof WebGLShader;
        }),
        (t.isTexture = function (e, t) {
          return (
            "undefined" != typeof WebGLTexture && t instanceof WebGLTexture
          );
        }),
        (t.isSampler = function (e, t) {
          return (
            "undefined" != typeof WebGLSampler && t instanceof WebGLSampler
          );
        });
    },
    function (e, t, r) {
      "use strict";
      (t.__esModule = !0),
        (t.getGLTypeForTypedArray = function (e) {
          if (e instanceof Int8Array) return n;
          if (e instanceof Uint8Array) return o;
          if (e instanceof Uint8ClampedArray) return o;
          if (e instanceof Int16Array) return u;
          if (e instanceof Uint16Array) return i;
          if (e instanceof Int32Array) return a;
          if (e instanceof Uint32Array) return f;
          if (e instanceof Float32Array) return c;
          throw new Error("unsupported typed array type");
        }),
        (t.getGLTypeForTypedArrayType = function (e) {
          if (e === Int8Array) return n;
          if (e === Uint8Array) return o;
          if (e === Uint8ClampedArray) return o;
          if (e === Int16Array) return u;
          if (e === Uint16Array) return i;
          if (e === Int32Array) return a;
          if (e === Uint32Array) return f;
          if (e === Float32Array) return c;
          throw new Error("unsupported typed array type");
        }),
        (t.getTypedArrayTypeForGLType = function (e) {
          var t = l[e];
          if (!t) throw new Error("unknown gl type");
          return t;
        }),
        (t.isArrayBuffer = void 0);
      var n = 5120,
        o = 5121,
        u = 5122,
        i = 5123,
        a = 5124,
        f = 5125,
        c = 5126,
        l = {},
        s = l;
      (s[n] = Int8Array),
        (s[5121] = Uint8Array),
        (s[5122] = Int16Array),
        (s[5123] = Uint16Array),
        (s[a] = Int32Array),
        (s[5125] = Uint32Array),
        (s[5126] = Float32Array),
        (s[32819] = Uint16Array),
        (s[32820] = Uint16Array),
        (s[33635] = Uint16Array),
        (s[5131] = Uint16Array),
        (s[33640] = Uint32Array),
        (s[35899] = Uint32Array),
        (s[35902] = Uint32Array),
        (s[36269] = Uint32Array),
        (s[34042] = Uint32Array);
      var y =
        "undefined" != typeof SharedArrayBuffer
          ? function (e) {
              return (
                e &&
                e.buffer &&
                (e.buffer instanceof ArrayBuffer ||
                  e.buffer instanceof SharedArrayBuffer)
              );
            }
          : function (e) {
              return e && e.buffer && e.buffer instanceof ArrayBuffer;
            };
      t.isArrayBuffer = y;
    },
    function (e, t, r) {
      "use strict";
      (t.__esModule = !0),
        (t.add = function (e, t, r) {
          return (
            ((r = r || new n(3))[0] = e[0] + t[0]),
            (r[1] = e[1] + t[1]),
            (r[2] = e[2] + t[2]),
            r
          );
        }),
        (t.copy = function (e, t) {
          return (
            ((t = t || new n(3))[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), t
          );
        }),
        (t.create = function (e, t, r) {
          var o = new n(3);
          e && (o[0] = e);
          t && (o[1] = t);
          r && (o[2] = r);
          return o;
        }),
        (t.cross = function (e, t, r) {
          r = r || new n(3);
          var o = e[2] * t[0] - e[0] * t[2],
            u = e[0] * t[1] - e[1] * t[0];
          return (r[0] = e[1] * t[2] - e[2] * t[1]), (r[1] = o), (r[2] = u), r;
        }),
        (t.distance = function (e, t) {
          var r = e[0] - t[0],
            n = e[1] - t[1],
            o = e[2] - t[2];
          return Math.sqrt(r * r + n * n + o * o);
        }),
        (t.distanceSq = function (e, t) {
          var r = e[0] - t[0],
            n = e[1] - t[1],
            o = e[2] - t[2];
          return r * r + n * n + o * o;
        }),
        (t.divide = function (e, t, r) {
          return (
            ((r = r || new n(3))[0] = e[0] / t[0]),
            (r[1] = e[1] / t[1]),
            (r[2] = e[2] / t[2]),
            r
          );
        }),
        (t.divScalar = function (e, t, r) {
          return (
            ((r = r || new n(3))[0] = e[0] / t),
            (r[1] = e[1] / t),
            (r[2] = e[2] / t),
            r
          );
        }),
        (t.dot = function (e, t) {
          return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
        }),
        (t.lerp = function (e, t, r, o) {
          return (
            ((o = o || new n(3))[0] = e[0] + r * (t[0] - e[0])),
            (o[1] = e[1] + r * (t[1] - e[1])),
            (o[2] = e[2] + r * (t[2] - e[2])),
            o
          );
        }),
        (t.lerpV = function (e, t, r, o) {
          return (
            ((o = o || new n(3))[0] = e[0] + r[0] * (t[0] - e[0])),
            (o[1] = e[1] + r[1] * (t[1] - e[1])),
            (o[2] = e[2] + r[2] * (t[2] - e[2])),
            o
          );
        }),
        (t.length = function (e) {
          return Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
        }),
        (t.lengthSq = function (e) {
          return e[0] * e[0] + e[1] * e[1] + e[2] * e[2];
        }),
        (t.max = function (e, t, r) {
          return (
            ((r = r || new n(3))[0] = Math.max(e[0], t[0])),
            (r[1] = Math.max(e[1], t[1])),
            (r[2] = Math.max(e[2], t[2])),
            r
          );
        }),
        (t.min = function (e, t, r) {
          return (
            ((r = r || new n(3))[0] = Math.min(e[0], t[0])),
            (r[1] = Math.min(e[1], t[1])),
            (r[2] = Math.min(e[2], t[2])),
            r
          );
        }),
        (t.mulScalar = function (e, t, r) {
          return (
            ((r = r || new n(3))[0] = e[0] * t),
            (r[1] = e[1] * t),
            (r[2] = e[2] * t),
            r
          );
        }),
        (t.multiply = function (e, t, r) {
          return (
            ((r = r || new n(3))[0] = e[0] * t[0]),
            (r[1] = e[1] * t[1]),
            (r[2] = e[2] * t[2]),
            r
          );
        }),
        (t.negate = function (e, t) {
          return (
            ((t = t || new n(3))[0] = -e[0]), (t[1] = -e[1]), (t[2] = -e[2]), t
          );
        }),
        (t.normalize = function (e, t) {
          t = t || new n(3);
          var r = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
            o = Math.sqrt(r);
          o > 1e-5
            ? ((t[0] = e[0] / o), (t[1] = e[1] / o), (t[2] = e[2] / o))
            : ((t[0] = 0), (t[1] = 0), (t[2] = 0));
          return t;
        }),
        (t.setDefaultType = function (e) {
          var t = n;
          return (n = e), t;
        }),
        (t.subtract = function (e, t, r) {
          return (
            ((r = r || new n(3))[0] = e[0] - t[0]),
            (r[1] = e[1] - t[1]),
            (r[2] = e[2] - t[2]),
            r
          );
        });
      var n = Float32Array;
    },
    function (e, t, r) {
      "use strict";
      (t.__esModule = !0),
        (t.isWebGL1 = function (e) {
          return !e.texStorage2D;
        }),
        (t.isWebGL2 = function (e) {
          return !!e.texStorage2D;
        }),
        (t.glEnumToString = void 0);
      var n,
        o,
        u =
          ((n = {}),
          (o = {}),
          function (e, t) {
            return (
              (function (e) {
                var t = e.constructor.name;
                if (!n[t]) {
                  for (var r in e)
                    if ("number" == typeof e[r]) {
                      var u = o[e[r]];
                      o[e[r]] = u ? "".concat(u, " | ").concat(r) : r;
                    }
                  n[t] = !0;
                }
              })(e),
              o[t] || "0x" + t.toString(16)
            );
          });
      t.glEnumToString = u;
    },
    function (e, t, r) {
      "use strict";

      function n(e) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      (t.__esModule = !0),
        (t.createAttributeSetters = oe),
        (t.createProgram = H),
        (t.createProgramFromScripts = function (e, t, r, n, o) {
          for (var u = G(r, n, o), i = [], a = 0; a < t.length; ++a) {
            var f = q(e, t[a], e[X[a]], u.errorCallback);
            if (!f) return null;
            i.push(f);
          }
          return H(e, i, u);
        }),
        (t.createProgramFromSources = V),
        (t.createProgramInfo = function (e, t, r, n, o) {
          var u = G(r, n, o),
            i = !0;
          if (
            ((t = t.map(function (e) {
              if (e.indexOf("\n") < 0) {
                var t = y(e);
                t
                  ? (e = t.text)
                  : (u.errorCallback("no element with id: " + e), (i = !1));
              }
              return e;
            })),
            !i)
          )
            return null;
          var a = V(e, t, u);
          if (!a) return null;
          return ie(e, a);
        }),
        (t.createProgramInfoFromProgram = ie),
        (t.createUniformSetters = $),
        (t.createUniformBlockSpecFromProgram = J),
        (t.createUniformBlockInfoFromProgram = ee),
        (t.createUniformBlockInfo = function (e, t, r) {
          return ee(e, t.program, t.uniformBlockSpec, r);
        }),
        (t.createTransformFeedback = function (e, t, r) {
          var n = e.createTransformFeedback();
          return (
            e.bindTransformFeedback(36386, n),
            e.useProgram(t.program),
            Z(e, t, r),
            e.bindTransformFeedback(36386, null),
            n
          );
        }),
        (t.createTransformFeedbackInfo = K),
        (t.bindTransformFeedbackInfo = Z),
        (t.setAttributes = ue),
        (t.setBuffersAndAttributes = function (e, t, r) {
          r.vertexArrayObject
            ? e.bindVertexArray(r.vertexArrayObject)
            : (ue(t.attribSetters || t, r.attribs),
              r.indices && e.bindBuffer(34963, r.indices));
        }),
        (t.setUniforms = re),
        (t.setUniformBlock = function (e, t, r) {
          te(e, t, r) && e.bufferData(m, r.array, 35048);
        }),
        (t.setBlockUniforms = function (e, t) {
          var r = e.uniforms;
          for (var n in t) {
            var o = r[n];
            if (o) {
              var u = t[n];
              u.length ? o.set(u) : (o[0] = u);
            }
          }
        }),
        (t.bindUniformBlock = te),
        (t.setUniformsAndBindTextures = void 0);
      var o = a(r(3)),
        u = a(r(0));

      function i() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (i = function () {
            return e;
          }),
          e
        );
      }

      function a(e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" !== n(e) && "function" != typeof e))
          return {
            default: e,
          };
        var t = i();
        if (t && t.has(e)) return t.get(e);
        var r = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var u in e)
          if (Object.prototype.hasOwnProperty.call(e, u)) {
            var a = o ? Object.getOwnPropertyDescriptor(e, u) : null;
            a && (a.get || a.set)
              ? Object.defineProperty(r, u, a)
              : (r[u] = e[u]);
          }
        return (r.default = e), t && t.set(e, r), r;
      }

      function f(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return c(e);
          })(e) ||
          (function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return c(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return c(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }

      function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var l = u.error,
        s = u.warn;

      function y(e) {
        return "undefined" != typeof document && document.getElementById
          ? document.getElementById(e)
          : null;
      }
      var v = 33984,
        b = 34962,
        m = 35345,
        p = 5126,
        d = 5124,
        x = 5125,
        w = 3553,
        h = 34067,
        F = 32879,
        E = 35866,
        A = {};

      function j(e, t) {
        return A[t].bindPoint;
      }

      function O(e, t) {
        return function (r) {
          e.uniform1i(t, r);
        };
      }

      function _(e, t) {
        return function (r) {
          e.uniform1iv(t, r);
        };
      }

      function S(e, t) {
        return function (r) {
          e.uniform2iv(t, r);
        };
      }

      function M(e, t) {
        return function (r) {
          e.uniform3iv(t, r);
        };
      }

      function R(e, t) {
        return function (r) {
          e.uniform4iv(t, r);
        };
      }

      function P(e, t, r, n) {
        var i = j(0, t);
        return o.isWebGL2(e)
          ? function (t) {
              var o, a;
              u.isTexture(e, t)
                ? ((o = t), (a = null))
                : ((o = t.texture), (a = t.sampler)),
                e.uniform1i(n, r),
                e.activeTexture(v + r),
                e.bindTexture(i, o),
                e.bindSampler(r, a);
            }
          : function (t) {
              e.uniform1i(n, r), e.activeTexture(v + r), e.bindTexture(i, t);
            };
      }

      function T(e, t, r, n, i) {
        for (var a = j(0, t), f = new Int32Array(i), c = 0; c < i; ++c)
          f[c] = r + c;
        return o.isWebGL2(e)
          ? function (t) {
              e.uniform1iv(n, f),
                t.forEach(function (t, n) {
                  var o, i;
                  e.activeTexture(v + f[n]),
                    u.isTexture(e, t)
                      ? ((o = t), (i = null))
                      : ((o = t.texture), (i = t.sampler)),
                    e.bindSampler(r, i),
                    e.bindTexture(a, o);
                });
            }
          : function (t) {
              e.uniform1iv(n, f),
                t.forEach(function (t, r) {
                  e.activeTexture(v + f[r]), e.bindTexture(a, t);
                });
            };
      }

      function g(e, t) {
        return function (r) {
          if (r.value)
            switch ((e.disableVertexAttribArray(t), r.value.length)) {
              case 4:
                e.vertexAttrib4fv(t, r.value);
                break;
              case 3:
                e.vertexAttrib3fv(t, r.value);
                break;
              case 2:
                e.vertexAttrib2fv(t, r.value);
                break;
              case 1:
                e.vertexAttrib1fv(t, r.value);
                break;
              default:
                throw new Error(
                  "the length of a float constant value must be between 1 and 4!"
                );
            }
          else
            e.bindBuffer(b, r.buffer),
              e.enableVertexAttribArray(t),
              e.vertexAttribPointer(
                t,
                r.numComponents || r.size,
                r.type || p,
                r.normalize || !1,
                r.stride || 0,
                r.offset || 0
              ),
              void 0 !== r.divisor && e.vertexAttribDivisor(t, r.divisor);
        };
      }

      function z(e, t) {
        return function (r) {
          if (r.value) {
            if ((e.disableVertexAttribArray(t), 4 !== r.value.length))
              throw new Error(
                "The length of an integer constant value must be 4!"
              );
            e.vertexAttrib4iv(t, r.value);
          } else
            e.bindBuffer(b, r.buffer),
              e.enableVertexAttribArray(t),
              e.vertexAttribIPointer(
                t,
                r.numComponents || r.size,
                r.type || d,
                r.stride || 0,
                r.offset || 0
              ),
              void 0 !== r.divisor && e.vertexAttribDivisor(t, r.divisor);
        };
      }

      function U(e, t) {
        return function (r) {
          if (r.value) {
            if ((e.disableVertexAttribArray(t), 4 !== r.value.length))
              throw new Error(
                "The length of an unsigned integer constant value must be 4!"
              );
            e.vertexAttrib4uiv(t, r.value);
          } else
            e.bindBuffer(b, r.buffer),
              e.enableVertexAttribArray(t),
              e.vertexAttribIPointer(
                t,
                r.numComponents || r.size,
                r.type || x,
                r.stride || 0,
                r.offset || 0
              ),
              void 0 !== r.divisor && e.vertexAttribDivisor(t, r.divisor);
        };
      }

      function C(e, t, r) {
        var n = r.size,
          o = r.count;
        return function (r) {
          e.bindBuffer(b, r.buffer);
          for (
            var u = r.size || r.numComponents || n,
              i = u / o,
              a = r.type || p,
              f = A[a].size * u,
              c = r.normalize || !1,
              l = r.offset || 0,
              s = f / o,
              y = 0;
            y < o;
            ++y
          )
            e.enableVertexAttribArray(t + y),
              e.vertexAttribPointer(t + y, i, a, c, f, l + s * y),
              void 0 !== r.divisor && e.vertexAttribDivisor(t + y, r.divisor);
        };
      }
      (A[5126] = {
        Type: Float32Array,
        size: 4,
        setter: function (e, t) {
          return function (r) {
            e.uniform1f(t, r);
          };
        },
        arraySetter: function (e, t) {
          return function (r) {
            e.uniform1fv(t, r);
          };
        },
      }),
        (A[35664] = {
          Type: Float32Array,
          size: 8,
          setter: function (e, t) {
            return function (r) {
              e.uniform2fv(t, r);
            };
          },
        }),
        (A[35665] = {
          Type: Float32Array,
          size: 12,
          setter: function (e, t) {
            return function (r) {
              e.uniform3fv(t, r);
            };
          },
        }),
        (A[35666] = {
          Type: Float32Array,
          size: 16,
          setter: function (e, t) {
            return function (r) {
              e.uniform4fv(t, r);
            };
          },
        }),
        (A[d] = {
          Type: Int32Array,
          size: 4,
          setter: O,
          arraySetter: _,
        }),
        (A[35667] = {
          Type: Int32Array,
          size: 8,
          setter: S,
        }),
        (A[35668] = {
          Type: Int32Array,
          size: 12,
          setter: M,
        }),
        (A[35669] = {
          Type: Int32Array,
          size: 16,
          setter: R,
        }),
        (A[5125] = {
          Type: Uint32Array,
          size: 4,
          setter: function (e, t) {
            return function (r) {
              e.uniform1ui(t, r);
            };
          },
          arraySetter: function (e, t) {
            return function (r) {
              e.uniform1uiv(t, r);
            };
          },
        }),
        (A[36294] = {
          Type: Uint32Array,
          size: 8,
          setter: function (e, t) {
            return function (r) {
              e.uniform2uiv(t, r);
            };
          },
        }),
        (A[36295] = {
          Type: Uint32Array,
          size: 12,
          setter: function (e, t) {
            return function (r) {
              e.uniform3uiv(t, r);
            };
          },
        }),
        (A[36296] = {
          Type: Uint32Array,
          size: 16,
          setter: function (e, t) {
            return function (r) {
              e.uniform4uiv(t, r);
            };
          },
        }),
        (A[35670] = {
          Type: Uint32Array,
          size: 4,
          setter: O,
          arraySetter: _,
        }),
        (A[35671] = {
          Type: Uint32Array,
          size: 8,
          setter: S,
        }),
        (A[35672] = {
          Type: Uint32Array,
          size: 12,
          setter: M,
        }),
        (A[35673] = {
          Type: Uint32Array,
          size: 16,
          setter: R,
        }),
        (A[35674] = {
          Type: Float32Array,
          size: 16,
          setter: function (e, t) {
            return function (r) {
              e.uniformMatrix2fv(t, !1, r);
            };
          },
        }),
        (A[35675] = {
          Type: Float32Array,
          size: 36,
          setter: function (e, t) {
            return function (r) {
              e.uniformMatrix3fv(t, !1, r);
            };
          },
        }),
        (A[35676] = {
          Type: Float32Array,
          size: 64,
          setter: function (e, t) {
            return function (r) {
              e.uniformMatrix4fv(t, !1, r);
            };
          },
        }),
        (A[35685] = {
          Type: Float32Array,
          size: 24,
          setter: function (e, t) {
            return function (r) {
              e.uniformMatrix2x3fv(t, !1, r);
            };
          },
        }),
        (A[35686] = {
          Type: Float32Array,
          size: 32,
          setter: function (e, t) {
            return function (r) {
              e.uniformMatrix2x4fv(t, !1, r);
            };
          },
        }),
        (A[35687] = {
          Type: Float32Array,
          size: 24,
          setter: function (e, t) {
            return function (r) {
              e.uniformMatrix3x2fv(t, !1, r);
            };
          },
        }),
        (A[35688] = {
          Type: Float32Array,
          size: 48,
          setter: function (e, t) {
            return function (r) {
              e.uniformMatrix3x4fv(t, !1, r);
            };
          },
        }),
        (A[35689] = {
          Type: Float32Array,
          size: 32,
          setter: function (e, t) {
            return function (r) {
              e.uniformMatrix4x2fv(t, !1, r);
            };
          },
        }),
        (A[35690] = {
          Type: Float32Array,
          size: 48,
          setter: function (e, t) {
            return function (r) {
              e.uniformMatrix4x3fv(t, !1, r);
            };
          },
        }),
        (A[35678] = {
          Type: null,
          size: 0,
          setter: P,
          arraySetter: T,
          bindPoint: w,
        }),
        (A[35680] = {
          Type: null,
          size: 0,
          setter: P,
          arraySetter: T,
          bindPoint: h,
        }),
        (A[35679] = {
          Type: null,
          size: 0,
          setter: P,
          arraySetter: T,
          bindPoint: F,
        }),
        (A[35682] = {
          Type: null,
          size: 0,
          setter: P,
          arraySetter: T,
          bindPoint: w,
        }),
        (A[36289] = {
          Type: null,
          size: 0,
          setter: P,
          arraySetter: T,
          bindPoint: E,
        }),
        (A[36292] = {
          Type: null,
          size: 0,
          setter: P,
          arraySetter: T,
          bindPoint: E,
        }),
        (A[36293] = {
          Type: null,
          size: 0,
          setter: P,
          arraySetter: T,
          bindPoint: h,
        }),
        (A[36298] = {
          Type: null,
          size: 0,
          setter: P,
          arraySetter: T,
          bindPoint: w,
        }),
        (A[36299] = {
          Type: null,
          size: 0,
          setter: P,
          arraySetter: T,
          bindPoint: F,
        }),
        (A[36300] = {
          Type: null,
          size: 0,
          setter: P,
          arraySetter: T,
          bindPoint: h,
        }),
        (A[36303] = {
          Type: null,
          size: 0,
          setter: P,
          arraySetter: T,
          bindPoint: E,
        }),
        (A[36306] = {
          Type: null,
          size: 0,
          setter: P,
          arraySetter: T,
          bindPoint: w,
        }),
        (A[36307] = {
          Type: null,
          size: 0,
          setter: P,
          arraySetter: T,
          bindPoint: F,
        }),
        (A[36308] = {
          Type: null,
          size: 0,
          setter: P,
          arraySetter: T,
          bindPoint: h,
        }),
        (A[36311] = {
          Type: null,
          size: 0,
          setter: P,
          arraySetter: T,
          bindPoint: E,
        });
      var k = {};
      (k[5126] = {
        size: 4,
        setter: g,
      }),
        (k[35664] = {
          size: 8,
          setter: g,
        }),
        (k[35665] = {
          size: 12,
          setter: g,
        }),
        (k[35666] = {
          size: 16,
          setter: g,
        }),
        (k[d] = {
          size: 4,
          setter: z,
        }),
        (k[35667] = {
          size: 8,
          setter: z,
        }),
        (k[35668] = {
          size: 12,
          setter: z,
        }),
        (k[35669] = {
          size: 16,
          setter: z,
        }),
        (k[5125] = {
          size: 4,
          setter: U,
        }),
        (k[36294] = {
          size: 8,
          setter: U,
        }),
        (k[36295] = {
          size: 12,
          setter: U,
        }),
        (k[36296] = {
          size: 16,
          setter: U,
        }),
        (k[35670] = {
          size: 4,
          setter: z,
        }),
        (k[35671] = {
          size: 8,
          setter: z,
        }),
        (k[35672] = {
          size: 12,
          setter: z,
        }),
        (k[35673] = {
          size: 16,
          setter: z,
        }),
        (k[35674] = {
          size: 4,
          setter: C,
          count: 2,
        }),
        (k[35675] = {
          size: 9,
          setter: C,
          count: 3,
        }),
        (k[35676] = {
          size: 16,
          setter: C,
          count: 4,
        });
      var W = /ERROR:\s*\d+:(\d+)/gi;

      function I(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          n = f(t.matchAll(W)),
          o = new Map(
            n.map(function (e, r) {
              var o = parseInt(e[1]),
                u = n[r + 1],
                i = u ? u.index : t.length;
              return [o - 1, t.substring(e.index, i)];
            })
          );
        return e
          .split("\n")
          .map(function (e, t) {
            var n = o.get(t);
            return ""
              .concat(t + 1 + r, ": ")
              .concat(e)
              .concat(n ? "\n\n^^^ ".concat(n) : "");
          })
          .join("\n");
      }
      var B = /^[ \t]*\n/;

      function L(e, t, r, n) {
        var u = n || l,
          i = e.createShader(r),
          a = 0;
        if (
          (B.test(t) && ((a = 1), (t = t.replace(B, ""))),
          e.shaderSource(i, t),
          e.compileShader(i),
          !e.getShaderParameter(i, 35713))
        ) {
          var f = e.getShaderInfoLog(i);
          return (
            u(
              ""
                .concat(I(t, f, a), "\nError compiling ")
                .concat(o.glEnumToString(e, r), ": ")
                .concat(f)
            ),
            e.deleteShader(i),
            null
          );
        }
        return i;
      }

      function G(e, t, r) {
        var n, o;
        if (
          ("function" == typeof t && ((r = t), (t = void 0)),
          "function" == typeof e)
        )
          (r = e), (e = void 0);
        else if (e && !Array.isArray(e)) {
          if (e.errorCallback) return e;
          var u = e;
          (r = u.errorCallback),
            (e = u.attribLocations),
            (n = u.transformFeedbackVaryings),
            (o = u.transformFeedbackMode);
        }
        var i = {
          errorCallback: r || l,
          transformFeedbackVaryings: n,
          transformFeedbackMode: o,
        };
        if (e) {
          var a = {};
          Array.isArray(e)
            ? e.forEach(function (e, r) {
                a[e] = t ? t[r] : r;
              })
            : (a = e),
            (i.attribLocations = a);
        }
        return i;
      }
      var X = ["VERTEX_SHADER", "FRAGMENT_SHADER"];

      function D(e, t) {
        return t.indexOf("frag") >= 0
          ? 35632
          : t.indexOf("vert") >= 0
          ? 35633
          : void 0;
      }

      function N(e, t) {
        t.forEach(function (t) {
          e.deleteShader(t);
        });
      }

      function H(e, t, r, n, i) {
        for (var a = G(r, n, i), f = [], c = [], l = 0; l < t.length; ++l) {
          var s = t[l];
          if ("string" == typeof s) {
            var v = y(s),
              b = v ? v.text : s,
              m = e[X[l]];
            v && v.type && (m = D(0, v.type) || m),
              (s = L(e, b, m, a.errorCallback)),
              c.push(s);
          }
          u.isShader(e, s) && f.push(s);
        }
        if (f.length !== t.length)
          return (
            a.errorCallback("not enough shaders for program"), N(e, c), null
          );
        var p = e.createProgram();
        f.forEach(function (t) {
          e.attachShader(p, t);
        }),
          a.attribLocations &&
            Object.keys(a.attribLocations).forEach(function (t) {
              e.bindAttribLocation(p, a.attribLocations[t], t);
            });
        var d = a.transformFeedbackVaryings;
        if (
          (d &&
            (d.attribs && (d = d.attribs),
            Array.isArray(d) || (d = Object.keys(d)),
            e.transformFeedbackVaryings(
              p,
              d,
              a.transformFeedbackMode || 35981
            )),
          e.linkProgram(p),
          !e.getProgramParameter(p, 35714))
        ) {
          var x = e.getProgramInfoLog(p);
          return (
            a.errorCallback(
              ""
                .concat(
                  f
                    .map(function (t) {
                      var r = I(e.getShaderSource(t), "", 0),
                        n = e.getShaderParameter(t, e.SHADER_TYPE);
                      return ""
                        .concat(o.glEnumToString(e, n), "\n")
                        .concat(r, "}");
                    })
                    .join("\n"),
                  "\nError in program linking: "
                )
                .concat(x)
            ),
            e.deleteProgram(p),
            N(e, c),
            null
          );
        }
        return p;
      }

      function q(e, t, r, n) {
        var o,
          u = y(t);
        if (!u) throw new Error("unknown script element: ".concat(t));
        o = u.text;
        var i = r || D(0, u.type);
        if (!i) throw new Error("unknown shader type");
        return L(e, o, i, n);
      }

      function V(e, t, r, n, o) {
        for (var u = G(r, n, o), i = [], a = 0; a < t.length; ++a) {
          var f = L(e, t[a], e[X[a]], u.errorCallback);
          if (!f) return null;
          i.push(f);
        }
        return H(e, i, u);
      }

      function Y(e) {
        var t = e.name;
        return t.startsWith("gl_") || t.startsWith("webgl_");
      }

      function $(e, t) {
        var r = 0;

        function n(t, n, o) {
          var u,
            i = n.name.endsWith("[0]"),
            a = n.type,
            f = A[a];
          if (!f) throw new Error("unknown type: 0x".concat(a.toString(16)));
          if (f.bindPoint) {
            var c = r;
            (r += n.size),
              (u = i
                ? f.arraySetter(e, a, c, o, n.size)
                : f.setter(e, a, c, o, n.size));
          } else u = f.arraySetter && i ? f.arraySetter(e, o) : f.setter(e, o);
          return (u.location = o), u;
        }
        for (
          var o = {}, u = e.getProgramParameter(t, 35718), i = 0;
          i < u;
          ++i
        ) {
          var a = e.getActiveUniform(t, i);
          if (!Y(a)) {
            var f = a.name;
            f.endsWith("[0]") && (f = f.substr(0, f.length - 3));
            var c = e.getUniformLocation(t, a.name);
            c && (o[f] = n(0, a, c));
          }
        }
        return o;
      }

      function K(e, t) {
        for (
          var r = {}, n = e.getProgramParameter(t, 35971), o = 0;
          o < n;
          ++o
        ) {
          var u = e.getTransformFeedbackVarying(t, o);
          r[u.name] = {
            index: o,
            type: u.type,
            size: u.size,
          };
        }
        return r;
      }

      function Z(e, t, r) {
        for (var n in (t.transformFeedbackInfo && (t = t.transformFeedbackInfo),
        r.attribs && (r = r.attribs),
        r)) {
          var o = t[n];
          if (o) {
            var u = r[n];
            u.offset
              ? e.bindBufferRange(35982, o.index, u.buffer, u.offset, u.size)
              : e.bindBufferBase(35982, o.index, u.buffer);
          }
        }
      }

      function J(e, t) {
        for (
          var r = e.getProgramParameter(t, 35718), n = [], o = [], u = 0;
          u < r;
          ++u
        ) {
          o.push(u), n.push({});
          var i = e.getActiveUniform(t, u);
          if (Y(i)) break;
          n[u].name = i.name;
        }
        [
          ["UNIFORM_TYPE", "type"],
          ["UNIFORM_SIZE", "size"],
          ["UNIFORM_BLOCK_INDEX", "blockNdx"],
          ["UNIFORM_OFFSET", "offset"],
        ].forEach(function (r) {
          var u = r[0],
            i = r[1];
          e.getActiveUniforms(t, o, e[u]).forEach(function (e, t) {
            n[t][i] = e;
          });
        });
        for (
          var a = {}, f = e.getProgramParameter(t, 35382), c = 0;
          c < f;
          ++c
        ) {
          var l = e.getActiveUniformBlockName(t, c),
            s = {
              index: e.getUniformBlockIndex(t, l),
              usedByVertexShader: e.getActiveUniformBlockParameter(t, c, 35396),
              usedByFragmentShader: e.getActiveUniformBlockParameter(
                t,
                c,
                35398
              ),
              size: e.getActiveUniformBlockParameter(t, c, 35392),
              uniformIndices: e.getActiveUniformBlockParameter(t, c, 35395),
            };
          (s.used = s.usedByVertexShader || s.usedByFragmentShader), (a[l] = s);
        }
        return {
          blockSpecs: a,
          uniformData: n,
        };
      }
      var Q = /\[\d+\]\.$/;

      function ee(e, t, r, n) {
        var o = r.blockSpecs,
          u = r.uniformData,
          i = o[n];
        if (!i)
          return (
            s("no uniform block object named:", n),
            {
              name: n,
              uniforms: {},
            }
          );
        var a = new ArrayBuffer(i.size),
          f = e.createBuffer(),
          c = i.index;
        e.bindBuffer(m, f), e.uniformBlockBinding(t, i.index, c);
        var l = n + ".";
        Q.test(l) && (l = l.replace(Q, "."));
        var y = {};
        return (
          i.uniformIndices.forEach(function (e) {
            var t = u[e],
              r = A[t.type],
              n = r.Type,
              o = t.size * r.size,
              i = t.name;
            i.substr(0, l.length) === l && (i = i.substr(l.length)),
              (y[i] = new n(a, t.offset, o / n.BYTES_PER_ELEMENT));
          }),
          {
            name: n,
            array: a,
            asFloat: new Float32Array(a),
            buffer: f,
            uniforms: y,
          }
        );
      }

      function te(e, t, r) {
        var n = (t.uniformBlockSpec || t).blockSpecs[r.name];
        if (n) {
          var o = n.index;
          return (
            e.bindBufferRange(
              m,
              o,
              r.buffer,
              r.offset || 0,
              r.array.byteLength
            ),
            !0
          );
        }
        return !1;
      }

      function re(e, t) {
        for (
          var r = e.uniformSetters || e, n = arguments.length, o = 1;
          o < n;
          ++o
        ) {
          var u = arguments[o];
          if (Array.isArray(u))
            for (var i = u.length, a = 0; a < i; ++a) re(r, u[a]);
          else
            for (var f in u) {
              var c = r[f];
              c && c(u[f]);
            }
        }
      }
      var ne = re;

      function oe(e, t) {
        for (
          var r = {}, n = e.getProgramParameter(t, 35721), o = 0;
          o < n;
          ++o
        ) {
          var u = e.getActiveAttrib(t, o);
          if (!Y(u)) {
            var i = e.getAttribLocation(t, u.name),
              a = k[u.type],
              f = a.setter(e, i, a);
            (f.location = i), (r[u.name] = f);
          }
        }
        return r;
      }

      function ue(e, t) {
        for (var r in t) {
          var n = e[r];
          n && n(t[r]);
        }
      }

      function ie(e, t) {
        var r = {
          program: t,
          uniformSetters: $(e, t),
          attribSetters: oe(e, t),
        };
        return (
          o.isWebGL2(e) &&
            ((r.uniformBlockSpec = J(e, t)),
            (r.transformFeedbackInfo = K(e, t))),
          r
        );
      }
      t.setUniformsAndBindTextures = ne;
    },
    function (e, t, r) {
      "use strict";

      function n(e) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      (t.__esModule = !0),
        (t.axisRotate = function (e, t, r, n) {
          n = n || new c(16);
          var o = t[0],
            u = t[1],
            i = t[2],
            a = Math.sqrt(o * o + u * u + i * i),
            f = (o /= a) * o,
            l = (u /= a) * u,
            s = (i /= a) * i,
            y = Math.cos(r),
            v = Math.sin(r),
            b = 1 - y,
            m = f + (1 - f) * y,
            p = o * u * b + i * v,
            d = o * i * b - u * v,
            x = o * u * b - i * v,
            w = l + (1 - l) * y,
            h = u * i * b + o * v,
            F = o * i * b + u * v,
            E = u * i * b - o * v,
            A = s + (1 - s) * y,
            j = e[0],
            O = e[1],
            _ = e[2],
            S = e[3],
            M = e[4],
            R = e[5],
            P = e[6],
            T = e[7],
            g = e[8],
            z = e[9],
            U = e[10],
            C = e[11];
          (n[0] = m * j + p * M + d * g),
            (n[1] = m * O + p * R + d * z),
            (n[2] = m * _ + p * P + d * U),
            (n[3] = m * S + p * T + d * C),
            (n[4] = x * j + w * M + h * g),
            (n[5] = x * O + w * R + h * z),
            (n[6] = x * _ + w * P + h * U),
            (n[7] = x * S + w * T + h * C),
            (n[8] = F * j + E * M + A * g),
            (n[9] = F * O + E * R + A * z),
            (n[10] = F * _ + E * P + A * U),
            (n[11] = F * S + E * T + A * C),
            e !== n &&
              ((n[12] = e[12]),
              (n[13] = e[13]),
              (n[14] = e[14]),
              (n[15] = e[15]));
          return n;
        }),
        (t.axisRotation = function (e, t, r) {
          r = r || new c(16);
          var n = e[0],
            o = e[1],
            u = e[2],
            i = Math.sqrt(n * n + o * o + u * u),
            a = (n /= i) * n,
            f = (o /= i) * o,
            l = (u /= i) * u,
            s = Math.cos(t),
            y = Math.sin(t),
            v = 1 - s;
          return (
            (r[0] = a + (1 - a) * s),
            (r[1] = n * o * v + u * y),
            (r[2] = n * u * v - o * y),
            (r[3] = 0),
            (r[4] = n * o * v - u * y),
            (r[5] = f + (1 - f) * s),
            (r[6] = o * u * v + n * y),
            (r[7] = 0),
            (r[8] = n * u * v + o * y),
            (r[9] = o * u * v - n * y),
            (r[10] = l + (1 - l) * s),
            (r[11] = 0),
            (r[12] = 0),
            (r[13] = 0),
            (r[14] = 0),
            (r[15] = 1),
            r
          );
        }),
        (t.copy = l),
        (t.frustum = function (e, t, r, n, o, u, i) {
          i = i || new c(16);
          var a = t - e,
            f = n - r,
            l = o - u;
          return (
            (i[0] = (2 * o) / a),
            (i[1] = 0),
            (i[2] = 0),
            (i[3] = 0),
            (i[4] = 0),
            (i[5] = (2 * o) / f),
            (i[6] = 0),
            (i[7] = 0),
            (i[8] = (e + t) / a),
            (i[9] = (n + r) / f),
            (i[10] = u / l),
            (i[11] = -1),
            (i[12] = 0),
            (i[13] = 0),
            (i[14] = (o * u) / l),
            (i[15] = 0),
            i
          );
        }),
        (t.getAxis = function (e, t, r) {
          r = r || o.create();
          var n = 4 * t;
          return (r[0] = e[n + 0]), (r[1] = e[n + 1]), (r[2] = e[n + 2]), r;
        }),
        (t.getTranslation = function (e, t) {
          return (
            ((t = t || o.create())[0] = e[12]),
            (t[1] = e[13]),
            (t[2] = e[14]),
            t
          );
        }),
        (t.identity = s),
        (t.inverse = y),
        (t.lookAt = function (e, t, r, n) {
          return (
            (n = n || new c(16)),
            (i = i || o.create()),
            (a = a || o.create()),
            (f = f || o.create()),
            o.normalize(o.subtract(e, t, f), f),
            o.normalize(o.cross(r, f, i), i),
            o.normalize(o.cross(f, i, a), a),
            (n[0] = i[0]),
            (n[1] = i[1]),
            (n[2] = i[2]),
            (n[3] = 0),
            (n[4] = a[0]),
            (n[5] = a[1]),
            (n[6] = a[2]),
            (n[7] = 0),
            (n[8] = f[0]),
            (n[9] = f[1]),
            (n[10] = f[2]),
            (n[11] = 0),
            (n[12] = e[0]),
            (n[13] = e[1]),
            (n[14] = e[2]),
            (n[15] = 1),
            n
          );
        }),
        (t.multiply = function (e, t, r) {
          r = r || new c(16);
          var n = e[0],
            o = e[1],
            u = e[2],
            i = e[3],
            a = e[4],
            f = e[5],
            l = e[6],
            s = e[7],
            y = e[8],
            v = e[9],
            b = e[10],
            m = e[11],
            p = e[12],
            d = e[13],
            x = e[14],
            w = e[15],
            h = t[0],
            F = t[1],
            E = t[2],
            A = t[3],
            j = t[4],
            O = t[5],
            _ = t[6],
            S = t[7],
            M = t[8],
            R = t[9],
            P = t[10],
            T = t[11],
            g = t[12],
            z = t[13],
            U = t[14],
            C = t[15];
          return (
            (r[0] = n * h + a * F + y * E + p * A),
            (r[1] = o * h + f * F + v * E + d * A),
            (r[2] = u * h + l * F + b * E + x * A),
            (r[3] = i * h + s * F + m * E + w * A),
            (r[4] = n * j + a * O + y * _ + p * S),
            (r[5] = o * j + f * O + v * _ + d * S),
            (r[6] = u * j + l * O + b * _ + x * S),
            (r[7] = i * j + s * O + m * _ + w * S),
            (r[8] = n * M + a * R + y * P + p * T),
            (r[9] = o * M + f * R + v * P + d * T),
            (r[10] = u * M + l * R + b * P + x * T),
            (r[11] = i * M + s * R + m * P + w * T),
            (r[12] = n * g + a * z + y * U + p * C),
            (r[13] = o * g + f * z + v * U + d * C),
            (r[14] = u * g + l * z + b * U + x * C),
            (r[15] = i * g + s * z + m * U + w * C),
            r
          );
        }),
        (t.negate = function (e, t) {
          return (
            ((t = t || new c(16))[0] = -e[0]),
            (t[1] = -e[1]),
            (t[2] = -e[2]),
            (t[3] = -e[3]),
            (t[4] = -e[4]),
            (t[5] = -e[5]),
            (t[6] = -e[6]),
            (t[7] = -e[7]),
            (t[8] = -e[8]),
            (t[9] = -e[9]),
            (t[10] = -e[10]),
            (t[11] = -e[11]),
            (t[12] = -e[12]),
            (t[13] = -e[13]),
            (t[14] = -e[14]),
            (t[15] = -e[15]),
            t
          );
        }),
        (t.ortho = function (e, t, r, n, o, u, i) {
          return (
            ((i = i || new c(16))[0] = 2 / (t - e)),
            (i[1] = 0),
            (i[2] = 0),
            (i[3] = 0),
            (i[4] = 0),
            (i[5] = 2 / (n - r)),
            (i[6] = 0),
            (i[7] = 0),
            (i[8] = 0),
            (i[9] = 0),
            (i[10] = 2 / (o - u)),
            (i[11] = 0),
            (i[12] = (t + e) / (e - t)),
            (i[13] = (n + r) / (r - n)),
            (i[14] = (u + o) / (o - u)),
            (i[15] = 1),
            i
          );
        }),
        (t.perspective = function (e, t, r, n, o) {
          o = o || new c(16);
          var u = Math.tan(0.5 * Math.PI - 0.5 * e),
            i = 1 / (r - n);
          return (
            (o[0] = u / t),
            (o[1] = 0),
            (o[2] = 0),
            (o[3] = 0),
            (o[4] = 0),
            (o[5] = u),
            (o[6] = 0),
            (o[7] = 0),
            (o[8] = 0),
            (o[9] = 0),
            (o[10] = (r + n) * i),
            (o[11] = -1),
            (o[12] = 0),
            (o[13] = 0),
            (o[14] = r * n * i * 2),
            (o[15] = 0),
            o
          );
        }),
        (t.rotateX = function (e, t, r) {
          r = r || new c(16);
          var n = e[4],
            o = e[5],
            u = e[6],
            i = e[7],
            a = e[8],
            f = e[9],
            l = e[10],
            s = e[11],
            y = Math.cos(t),
            v = Math.sin(t);
          (r[4] = y * n + v * a),
            (r[5] = y * o + v * f),
            (r[6] = y * u + v * l),
            (r[7] = y * i + v * s),
            (r[8] = y * a - v * n),
            (r[9] = y * f - v * o),
            (r[10] = y * l - v * u),
            (r[11] = y * s - v * i),
            e !== r &&
              ((r[0] = e[0]),
              (r[1] = e[1]),
              (r[2] = e[2]),
              (r[3] = e[3]),
              (r[12] = e[12]),
              (r[13] = e[13]),
              (r[14] = e[14]),
              (r[15] = e[15]));
          return r;
        }),
        (t.rotateY = function (e, t, r) {
          r = r || new c(16);
          var n = e[0],
            o = e[1],
            u = e[2],
            i = e[3],
            a = e[8],
            f = e[9],
            l = e[10],
            s = e[11],
            y = Math.cos(t),
            v = Math.sin(t);
          (r[0] = y * n - v * a),
            (r[1] = y * o - v * f),
            (r[2] = y * u - v * l),
            (r[3] = y * i - v * s),
            (r[8] = y * a + v * n),
            (r[9] = y * f + v * o),
            (r[10] = y * l + v * u),
            (r[11] = y * s + v * i),
            e !== r &&
              ((r[4] = e[4]),
              (r[5] = e[5]),
              (r[6] = e[6]),
              (r[7] = e[7]),
              (r[12] = e[12]),
              (r[13] = e[13]),
              (r[14] = e[14]),
              (r[15] = e[15]));
          return r;
        }),
        (t.rotateZ = function (e, t, r) {
          r = r || new c(16);
          var n = e[0],
            o = e[1],
            u = e[2],
            i = e[3],
            a = e[4],
            f = e[5],
            l = e[6],
            s = e[7],
            y = Math.cos(t),
            v = Math.sin(t);
          (r[0] = y * n + v * a),
            (r[1] = y * o + v * f),
            (r[2] = y * u + v * l),
            (r[3] = y * i + v * s),
            (r[4] = y * a - v * n),
            (r[5] = y * f - v * o),
            (r[6] = y * l - v * u),
            (r[7] = y * s - v * i),
            e !== r &&
              ((r[8] = e[8]),
              (r[9] = e[9]),
              (r[10] = e[10]),
              (r[11] = e[11]),
              (r[12] = e[12]),
              (r[13] = e[13]),
              (r[14] = e[14]),
              (r[15] = e[15]));
          return r;
        }),
        (t.rotationX = function (e, t) {
          t = t || new c(16);
          var r = Math.cos(e),
            n = Math.sin(e);
          return (
            (t[0] = 1),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 0),
            (t[4] = 0),
            (t[5] = r),
            (t[6] = n),
            (t[7] = 0),
            (t[8] = 0),
            (t[9] = -n),
            (t[10] = r),
            (t[11] = 0),
            (t[12] = 0),
            (t[13] = 0),
            (t[14] = 0),
            (t[15] = 1),
            t
          );
        }),
        (t.rotationY = function (e, t) {
          t = t || new c(16);
          var r = Math.cos(e),
            n = Math.sin(e);
          return (
            (t[0] = r),
            (t[1] = 0),
            (t[2] = -n),
            (t[3] = 0),
            (t[4] = 0),
            (t[5] = 1),
            (t[6] = 0),
            (t[7] = 0),
            (t[8] = n),
            (t[9] = 0),
            (t[10] = r),
            (t[11] = 0),
            (t[12] = 0),
            (t[13] = 0),
            (t[14] = 0),
            (t[15] = 1),
            t
          );
        }),
        (t.rotationZ = function (e, t) {
          t = t || new c(16);
          var r = Math.cos(e),
            n = Math.sin(e);
          return (
            (t[0] = r),
            (t[1] = n),
            (t[2] = 0),
            (t[3] = 0),
            (t[4] = -n),
            (t[5] = r),
            (t[6] = 0),
            (t[7] = 0),
            (t[8] = 0),
            (t[9] = 0),
            (t[10] = 1),
            (t[11] = 0),
            (t[12] = 0),
            (t[13] = 0),
            (t[14] = 0),
            (t[15] = 1),
            t
          );
        }),
        (t.scale = function (e, t, r) {
          r = r || new c(16);
          var n = t[0],
            o = t[1],
            u = t[2];
          (r[0] = n * e[0]),
            (r[1] = n * e[1]),
            (r[2] = n * e[2]),
            (r[3] = n * e[3]),
            (r[4] = o * e[4]),
            (r[5] = o * e[5]),
            (r[6] = o * e[6]),
            (r[7] = o * e[7]),
            (r[8] = u * e[8]),
            (r[9] = u * e[9]),
            (r[10] = u * e[10]),
            (r[11] = u * e[11]),
            e !== r &&
              ((r[12] = e[12]),
              (r[13] = e[13]),
              (r[14] = e[14]),
              (r[15] = e[15]));
          return r;
        }),
        (t.scaling = function (e, t) {
          return (
            ((t = t || new c(16))[0] = e[0]),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 0),
            (t[4] = 0),
            (t[5] = e[1]),
            (t[6] = 0),
            (t[7] = 0),
            (t[8] = 0),
            (t[9] = 0),
            (t[10] = e[2]),
            (t[11] = 0),
            (t[12] = 0),
            (t[13] = 0),
            (t[14] = 0),
            (t[15] = 1),
            t
          );
        }),
        (t.setAxis = function (e, t, r, n) {
          n !== e && (n = l(e, n));
          var o = 4 * r;
          return (n[o + 0] = t[0]), (n[o + 1] = t[1]), (n[o + 2] = t[2]), n;
        }),
        (t.setDefaultType = function (e) {
          var t = c;
          return (c = e), t;
        }),
        (t.setTranslation = function (e, t, r) {
          (r = r || s()),
            e !== r &&
              ((r[0] = e[0]),
              (r[1] = e[1]),
              (r[2] = e[2]),
              (r[3] = e[3]),
              (r[4] = e[4]),
              (r[5] = e[5]),
              (r[6] = e[6]),
              (r[7] = e[7]),
              (r[8] = e[8]),
              (r[9] = e[9]),
              (r[10] = e[10]),
              (r[11] = e[11]));
          return (r[12] = t[0]), (r[13] = t[1]), (r[14] = t[2]), (r[15] = 1), r;
        }),
        (t.transformDirection = function (e, t, r) {
          r = r || o.create();
          var n = t[0],
            u = t[1],
            i = t[2];
          return (
            (r[0] = n * e[0] + u * e[4] + i * e[8]),
            (r[1] = n * e[1] + u * e[5] + i * e[9]),
            (r[2] = n * e[2] + u * e[6] + i * e[10]),
            r
          );
        }),
        (t.transformNormal = function (e, t, r) {
          r = r || o.create();
          var n = y(e),
            u = t[0],
            i = t[1],
            a = t[2];
          return (
            (r[0] = u * n[0] + i * n[1] + a * n[2]),
            (r[1] = u * n[4] + i * n[5] + a * n[6]),
            (r[2] = u * n[8] + i * n[9] + a * n[10]),
            r
          );
        }),
        (t.transformPoint = function (e, t, r) {
          r = r || o.create();
          var n = t[0],
            u = t[1],
            i = t[2],
            a = n * e[3] + u * e[7] + i * e[11] + e[15];
          return (
            (r[0] = (n * e[0] + u * e[4] + i * e[8] + e[12]) / a),
            (r[1] = (n * e[1] + u * e[5] + i * e[9] + e[13]) / a),
            (r[2] = (n * e[2] + u * e[6] + i * e[10] + e[14]) / a),
            r
          );
        }),
        (t.translate = function (e, t, r) {
          r = r || new c(16);
          var n = t[0],
            o = t[1],
            u = t[2],
            i = e[0],
            a = e[1],
            f = e[2],
            l = e[3],
            s = e[4],
            y = e[5],
            v = e[6],
            b = e[7],
            m = e[8],
            p = e[9],
            d = e[10],
            x = e[11],
            w = e[12],
            h = e[13],
            F = e[14],
            E = e[15];
          e !== r &&
            ((r[0] = i),
            (r[1] = a),
            (r[2] = f),
            (r[3] = l),
            (r[4] = s),
            (r[5] = y),
            (r[6] = v),
            (r[7] = b),
            (r[8] = m),
            (r[9] = p),
            (r[10] = d),
            (r[11] = x));
          return (
            (r[12] = i * n + s * o + m * u + w),
            (r[13] = a * n + y * o + p * u + h),
            (r[14] = f * n + v * o + d * u + F),
            (r[15] = l * n + b * o + x * u + E),
            r
          );
        }),
        (t.translation = function (e, t) {
          return (
            ((t = t || new c(16))[0] = 1),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 0),
            (t[4] = 0),
            (t[5] = 1),
            (t[6] = 0),
            (t[7] = 0),
            (t[8] = 0),
            (t[9] = 0),
            (t[10] = 1),
            (t[11] = 0),
            (t[12] = e[0]),
            (t[13] = e[1]),
            (t[14] = e[2]),
            (t[15] = 1),
            t
          );
        }),
        (t.transpose = function (e, t) {
          if ((t = t || new c(16)) === e) {
            var r;
            return (
              (r = e[1]),
              (e[1] = e[4]),
              (e[4] = r),
              (r = e[2]),
              (e[2] = e[8]),
              (e[8] = r),
              (r = e[3]),
              (e[3] = e[12]),
              (e[12] = r),
              (r = e[6]),
              (e[6] = e[9]),
              (e[9] = r),
              (r = e[7]),
              (e[7] = e[13]),
              (e[13] = r),
              (r = e[11]),
              (e[11] = e[14]),
              (e[14] = r),
              t
            );
          }
          var n = e[0],
            o = e[1],
            u = e[2],
            i = e[3],
            a = e[4],
            f = e[5],
            l = e[6],
            s = e[7],
            y = e[8],
            v = e[9],
            b = e[10],
            m = e[11],
            p = e[12],
            d = e[13],
            x = e[14],
            w = e[15];
          return (
            (t[0] = n),
            (t[1] = a),
            (t[2] = y),
            (t[3] = p),
            (t[4] = o),
            (t[5] = f),
            (t[6] = v),
            (t[7] = d),
            (t[8] = u),
            (t[9] = l),
            (t[10] = b),
            (t[11] = x),
            (t[12] = i),
            (t[13] = s),
            (t[14] = m),
            (t[15] = w),
            t
          );
        });
      var o = (function (e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" !== n(e) && "function" != typeof e))
          return {
            default: e,
          };
        var t = u();
        if (t && t.has(e)) return t.get(e);
        var r = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in e)
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
            a && (a.get || a.set)
              ? Object.defineProperty(r, i, a)
              : (r[i] = e[i]);
          }
        (r.default = e), t && t.set(e, r);
        return r;
      })(r(2));

      function u() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      var i,
        a,
        f,
        c = Float32Array;

      function l(e, t) {
        return (
          ((t = t || new c(16))[0] = e[0]),
          (t[1] = e[1]),
          (t[2] = e[2]),
          (t[3] = e[3]),
          (t[4] = e[4]),
          (t[5] = e[5]),
          (t[6] = e[6]),
          (t[7] = e[7]),
          (t[8] = e[8]),
          (t[9] = e[9]),
          (t[10] = e[10]),
          (t[11] = e[11]),
          (t[12] = e[12]),
          (t[13] = e[13]),
          (t[14] = e[14]),
          (t[15] = e[15]),
          t
        );
      }

      function s(e) {
        return (
          ((e = e || new c(16))[0] = 1),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = 0),
          (e[5] = 1),
          (e[6] = 0),
          (e[7] = 0),
          (e[8] = 0),
          (e[9] = 0),
          (e[10] = 1),
          (e[11] = 0),
          (e[12] = 0),
          (e[13] = 0),
          (e[14] = 0),
          (e[15] = 1),
          e
        );
      }

      function y(e, t) {
        t = t || new c(16);
        var r = e[0],
          n = e[1],
          o = e[2],
          u = e[3],
          i = e[4],
          a = e[5],
          f = e[6],
          l = e[7],
          s = e[8],
          y = e[9],
          v = e[10],
          b = e[11],
          m = e[12],
          p = e[13],
          d = e[14],
          x = e[15],
          w = v * x,
          h = d * b,
          F = f * x,
          E = d * l,
          A = f * b,
          j = v * l,
          O = o * x,
          _ = d * u,
          S = o * b,
          M = v * u,
          R = o * l,
          P = f * u,
          T = s * p,
          g = m * y,
          z = i * p,
          U = m * a,
          C = i * y,
          k = s * a,
          W = r * p,
          I = m * n,
          B = r * y,
          L = s * n,
          G = r * a,
          X = i * n,
          D = w * a + E * y + A * p - (h * a + F * y + j * p),
          N = h * n + O * y + M * p - (w * n + _ * y + S * p),
          H = F * n + _ * a + R * p - (E * n + O * a + P * p),
          q = j * n + S * a + P * y - (A * n + M * a + R * y),
          V = 1 / (r * D + i * N + s * H + m * q);
        return (
          (t[0] = V * D),
          (t[1] = V * N),
          (t[2] = V * H),
          (t[3] = V * q),
          (t[4] = V * (h * i + F * s + j * m - (w * i + E * s + A * m))),
          (t[5] = V * (w * r + _ * s + S * m - (h * r + O * s + M * m))),
          (t[6] = V * (E * r + O * i + P * m - (F * r + _ * i + R * m))),
          (t[7] = V * (A * r + M * i + R * s - (j * r + S * i + P * s))),
          (t[8] = V * (T * l + U * b + C * x - (g * l + z * b + k * x))),
          (t[9] = V * (g * u + W * b + L * x - (T * u + I * b + B * x))),
          (t[10] = V * (z * u + I * l + G * x - (U * u + W * l + X * x))),
          (t[11] = V * (k * u + B * l + X * b - (C * u + L * l + G * b))),
          (t[12] = V * (z * v + k * d + g * f - (C * d + T * f + U * v))),
          (t[13] = V * (B * d + T * o + I * v - (W * v + L * d + g * o))),
          (t[14] = V * (W * f + X * d + U * o - (G * d + z * o + I * f))),
          (t[15] = V * (G * v + C * o + L * f - (B * f + X * v + k * o))),
          t
        );
      }
    },
    function (e, t, r) {
      "use strict";

      function n(e) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      (t.__esModule = !0),
        (t.createAttribsFromArrays = w),
        (t.createBuffersFromArrays = function (e, t) {
          var r = {};
          Object.keys(t).forEach(function (n) {
            r[n] = F(e, t[n], n);
          }),
            t.indices
              ? ((r.numElements = t.indices.length),
                (r.elementType = o.getGLTypeForTypedArray(
                  x(t.indices),
                  "indices"
                )))
              : (r.numElements = (function (e) {
                  var t, r;
                  for (r = 0; r < h.length && !((t = h[r]) in e); ++r);
                  r === h.length && (t = Object.keys(e)[0]);
                  var n = e[t],
                    o = v(n).length,
                    u = d(n, t),
                    i = o / u;
                  if (o % u > 0)
                    throw new Error(
                      "numComponents "
                        .concat(u, " not correct for length ")
                        .concat(o)
                    );
                  return i;
                })(t));
          return r;
        }),
        (t.createBufferFromArray = F),
        (t.createBufferFromTypedArray = s),
        (t.createBufferInfoFromArrays = function (e, t, r) {
          var n = w(e, t),
            u = Object.assign({}, r || {});
          u.attribs = Object.assign({}, r ? r.attribs : {}, n);
          var i = t.indices;
          if (i) {
            var a = x(i, "indices");
            (u.indices = s(e, a, 34963)),
              (u.numElements = a.length),
              (u.elementType = o.getGLTypeForTypedArray(a));
          } else
            u.numElements ||
              (u.numElements = (function (e, t) {
                var r, n;
                for (
                  n = 0;
                  n < h.length &&
                  !((r = h[n]) in t) &&
                  !((r = c.attribPrefix + r) in t);
                  ++n
                );
                n === h.length && (r = Object.keys(t)[0]);
                var o = t[r];
                e.bindBuffer(f, o.buffer);
                var u = e.getBufferParameter(f, 34660);
                e.bindBuffer(f, null);
                var i =
                    ((y = o.type),
                    5120 === y || 5121 === y
                      ? 1
                      : 5122 === y || 5123 === y
                      ? 2
                      : 5124 === y || 5125 === y || 5126 === y
                      ? 4
                      : 0),
                  a = u / i,
                  l = o.numComponents || o.size,
                  s = a / l;
                var y;
                if (s % 1 != 0)
                  throw new Error(
                    "numComponents "
                      .concat(l, " not correct for length ")
                      .concat(length)
                  );
                return s;
              })(e, u.attribs));
          return u;
        }),
        (t.setAttribInfoBufferFromArray = function (e, t, r, n) {
          (r = x(r)),
            void 0 !== n
              ? (e.bindBuffer(f, t.buffer), e.bufferSubData(f, n, r))
              : l(e, f, t.buffer, r, t.drawType);
        }),
        (t.setAttributePrefix = function (e) {
          c.attribPrefix = e;
        }),
        (t.setAttributeDefaults_ = function (e) {
          u.copyExistingProperties(e, c);
        }),
        (t.getNumComponents_ = d),
        (t.getArray_ = v);
      var o = a(r(1)),
        u = a(r(0));

      function i() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (i = function () {
            return e;
          }),
          e
        );
      }

      function a(e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" !== n(e) && "function" != typeof e))
          return {
            default: e,
          };
        var t = i();
        if (t && t.has(e)) return t.get(e);
        var r = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var u in e)
          if (Object.prototype.hasOwnProperty.call(e, u)) {
            var a = o ? Object.getOwnPropertyDescriptor(e, u) : null;
            a && (a.get || a.set)
              ? Object.defineProperty(r, u, a)
              : (r[u] = e[u]);
          }
        return (r.default = e), t && t.set(e, r), r;
      }
      var f = 34962,
        c = {
          attribPrefix: "",
        };

      function l(e, t, r, n, o) {
        e.bindBuffer(t, r), e.bufferData(t, n, o || 35044);
      }

      function s(e, t, r, n) {
        if (u.isBuffer(e, t)) return t;
        r = r || f;
        var o = e.createBuffer();
        return l(e, r, o, t, n), o;
      }

      function y(e) {
        return "indices" === e;
      }

      function v(e) {
        return e.length ? e : e.data;
      }
      var b = /coord|texture/i,
        m = /color|colour/i;

      function p(e, t) {
        var r;
        if (t % (r = b.test(e) ? 2 : m.test(e) ? 4 : 3) > 0)
          throw new Error(
            "Can not guess numComponents for attribute '"
              .concat(e, "'. Tried ")
              .concat(r, " but ")
              .concat(t, " values is not evenly divisible by ")
              .concat(r, ". You should specify it.")
          );
        return r;
      }

      function d(e, t) {
        return e.numComponents || e.size || p(t, v(e).length);
      }

      function x(e, t) {
        if (o.isArrayBuffer(e)) return e;
        if (o.isArrayBuffer(e.data)) return e.data;
        Array.isArray(e) &&
          (e = {
            data: e,
          });
        var r = e.type;
        return r || (r = y(t) ? Uint16Array : Float32Array), new r(e.data);
      }

      function w(e, t) {
        var r = {};
        return (
          Object.keys(t).forEach(function (n) {
            if (!y(n)) {
              var u = t[n],
                i = u.attrib || u.name || u.attribName || c.attribPrefix + n;
              if (u.value) {
                if (!Array.isArray(u.value) && !o.isArrayBuffer(u.value))
                  throw new Error("array.value is not array or typedarray");
                r[i] = {
                  value: u.value,
                };
              } else {
                var a, l, v, b;
                if (u.buffer && u.buffer instanceof WebGLBuffer)
                  (a = u.buffer),
                    (b = u.numComponents || u.size),
                    (l = u.type),
                    (v = u.normalize);
                else if ("number" == typeof u || "number" == typeof u.data) {
                  var m = u.data || u,
                    w = u.type || Float32Array,
                    h = m * w.BYTES_PER_ELEMENT;
                  (l = o.getGLTypeForTypedArrayType(w)),
                    (v =
                      void 0 !== u.normalize
                        ? u.normalize
                        : (E = w) === Int8Array || E === Uint8Array),
                    (b = u.numComponents || u.size || p(n, m)),
                    (a = e.createBuffer()),
                    e.bindBuffer(f, a),
                    e.bufferData(f, h, u.drawType || 35044);
                } else {
                  var F = x(u, n);
                  (a = s(e, F, void 0, u.drawType)),
                    (l = o.getGLTypeForTypedArray(F)),
                    (v =
                      void 0 !== u.normalize
                        ? u.normalize
                        : (function (e) {
                            return (
                              e instanceof Int8Array || e instanceof Uint8Array
                            );
                          })(F)),
                    (b = d(u, n));
                }
                r[i] = {
                  buffer: a,
                  numComponents: b,
                  type: l,
                  normalize: v,
                  stride: u.stride || 0,
                  offset: u.offset || 0,
                  divisor: void 0 === u.divisor ? void 0 : u.divisor,
                  drawType: u.drawType,
                };
              }
            }
            var E;
          }),
          e.bindBuffer(f, null),
          r
        );
      }
      var h = ["position", "positions", "a_position"];

      function F(e, t, r) {
        var n = "indices" === r ? 34963 : f;
        return s(e, x(t, r), n);
      }
    },
    function (e, t, r) {
      "use strict";

      function n(e) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      (t.__esModule = !0),
        (t.setTextureDefaults_ = function (e) {
          i.copyExistingProperties(e, s), e.textureColor && ye(e.textureColor);
        }),
        (t.createSampler = Fe),
        (t.createSamplers = function (e, t) {
          var r = {};
          return (
            Object.keys(t).forEach(function (n) {
              r[n] = Fe(e, t[n]);
            }),
            r
          );
        }),
        (t.setSamplerParameters = he),
        (t.createTexture = We),
        (t.setEmptyTexture = ke),
        (t.setTextureFromArray = Ce),
        (t.loadTextureFromUrl = ge),
        (t.setTextureFromElement = _e),
        (t.setTextureFilteringForSize = Ee),
        (t.setTextureParameters = we),
        (t.setDefaultTextureColor = ye),
        (t.createTextures = function (e, t, r) {
          r = r || Se;
          var n = 0,
            o = [],
            u = {},
            i = {};

          function a() {
            0 === n &&
              setTimeout(function () {
                r(o.length ? o : void 0, u, i);
              }, 0);
          }
          return (
            Object.keys(t).forEach(function (r) {
              var f,
                c,
                l = t[r];
              ("string" == typeof (c = l.src) ||
                (Array.isArray(c) && "string" == typeof c[0])) &&
                ((f = function (e, t, u) {
                  (i[r] = u), --n, e && o.push(e), a();
                }),
                ++n),
                (u[r] = We(e, l, f));
            }),
            a(),
            u
          );
        }),
        (t.resizeTexture = function (e, t, r, n, o, u) {
          (n = n || r.width), (o = o || r.height), (u = u || r.depth);
          var i = r.target || E;
          e.bindTexture(i, t);
          var a,
            f = r.level || 0,
            c = r.internalFormat || r.format || p,
            l = ie(c),
            s = r.format || l.format,
            v = r.src;
          a =
            v && (y(v) || (Array.isArray(v) && "number" == typeof v[0]))
              ? r.type || le(e, v, l.type)
              : r.type || l.type;
          if (i === A)
            for (var b = 0; b < 6; ++b)
              e.texImage2D(_ + b, f, c, n, o, 0, s, a, null);
          else
            i === j || i === O
              ? e.texImage3D(i, f, c, n, o, u, 0, s, a, null)
              : e.texImage2D(i, f, c, n, o, 0, s, a, null);
        }),
        (t.canGenerateMipmap = fe),
        (t.canFilter = ce),
        (t.getNumComponentsForFormat = function (e) {
          var t = re[e];
          if (!t) throw "unknown format: " + e;
          return t.u;
        }),
        (t.getBytesPerElementForInternalFormat = ue),
        (t.getFormatAndTypeForInternalFormat = ie);
      var o = f(r(3)),
        u = f(r(1)),
        i = f(r(0));

      function a() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }

      function f(e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" !== n(e) && "function" != typeof e))
          return {
            default: e,
          };
        var t = a();
        if (t && t.has(e)) return t.get(e);
        var r = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var u in e)
          if (Object.prototype.hasOwnProperty.call(e, u)) {
            var i = o ? Object.getOwnPropertyDescriptor(e, u) : null;
            i && (i.get || i.set)
              ? Object.defineProperty(r, u, i)
              : (r[u] = e[u]);
          }
        return (r.default = e), t && t.set(e, r), r;
      }
      var c,
        l,
        s = {
          textureColor: new Uint8Array([128, 192, 255, 255]),
          textureOptions: {},
          crossOrigin: void 0,
        },
        y = u.isArrayBuffer,
        v = function () {
          return (c =
            c ||
            ("undefined" != typeof document && document.createElement
              ? document.createElement("canvas").getContext("2d")
              : null));
        },
        b = 6406,
        m = 6407,
        p = 6408,
        d = 6409,
        x = 6410,
        w = 6402,
        h = 34041,
        F = 33071,
        E = 3553,
        A = 34067,
        j = 32879,
        O = 35866,
        _ = 34069,
        S = 10241,
        M = 10240,
        R = 10242,
        P = 10243,
        T = 3317,
        g = 3314,
        z = 32878,
        U = 3316,
        C = 3315,
        k = 32877,
        W = 37443,
        I = 37441,
        B = 37440,
        L = 5120,
        G = 5121,
        X = 5122,
        D = 5123,
        N = 5124,
        H = 5125,
        q = 5126,
        V = 5131,
        Y = 36193,
        $ = 33640,
        K = 33319,
        Z = 33320,
        J = 6403,
        Q = 36244,
        ee = 36248,
        te = 36249,
        re = {},
        ne = re;

      function oe(e) {
        if (!l) {
          var t = {};
          (t[6406] = {
            v: b,
            h: !0,
            F: !0,
            A: [1, 2, 2, 4],
            type: [G, V, Y, q],
          }),
            (t[6409] = {
              v: d,
              h: !0,
              F: !0,
              A: [1, 2, 2, 4],
              type: [G, V, Y, q],
            }),
            (t[6410] = {
              v: x,
              h: !0,
              F: !0,
              A: [2, 4, 4, 8],
              type: [G, V, Y, q],
            }),
            (t[m] = {
              v: m,
              h: !0,
              F: !0,
              A: [3, 6, 6, 12, 2],
              type: [G, V, Y, q, 33635],
            }),
            (t[p] = {
              v: p,
              h: !0,
              F: !0,
              A: [4, 8, 8, 16, 2, 2],
              type: [G, V, Y, q, 32819, 32820],
            }),
            (t[6402] = {
              v: w,
              h: !0,
              F: !1,
              A: [2, 4],
              type: [H, D],
            }),
            (t[33321] = {
              v: J,
              h: !0,
              F: !0,
              A: [1],
              type: [G],
            }),
            (t[36756] = {
              v: J,
              h: !1,
              F: !0,
              A: [1],
              type: [L],
            }),
            (t[33325] = {
              v: J,
              h: !1,
              F: !0,
              A: [4, 2],
              type: [q, V],
            }),
            (t[33326] = {
              v: J,
              h: !1,
              F: !1,
              A: [4],
              type: [q],
            }),
            (t[33330] = {
              v: Q,
              h: !0,
              F: !1,
              A: [1],
              type: [G],
            }),
            (t[33329] = {
              v: Q,
              h: !0,
              F: !1,
              A: [1],
              type: [L],
            }),
            (t[33332] = {
              v: Q,
              h: !0,
              F: !1,
              A: [2],
              type: [D],
            }),
            (t[33331] = {
              v: Q,
              h: !0,
              F: !1,
              A: [2],
              type: [X],
            }),
            (t[33334] = {
              v: Q,
              h: !0,
              F: !1,
              A: [4],
              type: [H],
            }),
            (t[33333] = {
              v: Q,
              h: !0,
              F: !1,
              A: [4],
              type: [N],
            }),
            (t[33323] = {
              v: K,
              h: !0,
              F: !0,
              A: [2],
              type: [G],
            }),
            (t[36757] = {
              v: K,
              h: !1,
              F: !0,
              A: [2],
              type: [L],
            }),
            (t[33327] = {
              v: K,
              h: !1,
              F: !0,
              A: [8, 4],
              type: [q, V],
            }),
            (t[33328] = {
              v: K,
              h: !1,
              F: !1,
              A: [8],
              type: [q],
            }),
            (t[33336] = {
              v: Z,
              h: !0,
              F: !1,
              A: [2],
              type: [G],
            }),
            (t[33335] = {
              v: Z,
              h: !0,
              F: !1,
              A: [2],
              type: [L],
            }),
            (t[33338] = {
              v: Z,
              h: !0,
              F: !1,
              A: [4],
              type: [D],
            }),
            (t[33337] = {
              v: Z,
              h: !0,
              F: !1,
              A: [4],
              type: [X],
            }),
            (t[33340] = {
              v: Z,
              h: !0,
              F: !1,
              A: [8],
              type: [H],
            }),
            (t[33339] = {
              v: Z,
              h: !0,
              F: !1,
              A: [8],
              type: [N],
            }),
            (t[32849] = {
              v: m,
              h: !0,
              F: !0,
              A: [3],
              type: [G],
            }),
            (t[35905] = {
              v: m,
              h: !1,
              F: !0,
              A: [3],
              type: [G],
            }),
            (t[36194] = {
              v: m,
              h: !0,
              F: !0,
              A: [3, 2],
              type: [G, 33635],
            }),
            (t[36758] = {
              v: m,
              h: !1,
              F: !0,
              A: [3],
              type: [L],
            }),
            (t[35898] = {
              v: m,
              h: !1,
              F: !0,
              A: [12, 6, 4],
              type: [q, V, 35899],
            }),
            (t[35901] = {
              v: m,
              h: !1,
              F: !0,
              A: [12, 6, 4],
              type: [q, V, 35902],
            }),
            (t[34843] = {
              v: m,
              h: !1,
              F: !0,
              A: [12, 6],
              type: [q, V],
            }),
            (t[34837] = {
              v: m,
              h: !1,
              F: !1,
              A: [12],
              type: [q],
            }),
            (t[36221] = {
              v: ee,
              h: !1,
              F: !1,
              A: [3],
              type: [G],
            }),
            (t[36239] = {
              v: ee,
              h: !1,
              F: !1,
              A: [3],
              type: [L],
            }),
            (t[36215] = {
              v: ee,
              h: !1,
              F: !1,
              A: [6],
              type: [D],
            }),
            (t[36233] = {
              v: ee,
              h: !1,
              F: !1,
              A: [6],
              type: [X],
            }),
            (t[36209] = {
              v: ee,
              h: !1,
              F: !1,
              A: [12],
              type: [H],
            }),
            (t[36227] = {
              v: ee,
              h: !1,
              F: !1,
              A: [12],
              type: [N],
            }),
            (t[32856] = {
              v: p,
              h: !0,
              F: !0,
              A: [4],
              type: [G],
            }),
            (t[35907] = {
              v: p,
              h: !0,
              F: !0,
              A: [4],
              type: [G],
            }),
            (t[36759] = {
              v: p,
              h: !1,
              F: !0,
              A: [4],
              type: [L],
            }),
            (t[32855] = {
              v: p,
              h: !0,
              F: !0,
              A: [4, 2, 4],
              type: [G, 32820, $],
            }),
            (t[32854] = {
              v: p,
              h: !0,
              F: !0,
              A: [4, 2],
              type: [G, 32819],
            }),
            (t[32857] = {
              v: p,
              h: !0,
              F: !0,
              A: [4],
              type: [$],
            }),
            (t[34842] = {
              v: p,
              h: !1,
              F: !0,
              A: [16, 8],
              type: [q, V],
            }),
            (t[34836] = {
              v: p,
              h: !1,
              F: !1,
              A: [16],
              type: [q],
            }),
            (t[36220] = {
              v: te,
              h: !0,
              F: !1,
              A: [4],
              type: [G],
            }),
            (t[36238] = {
              v: te,
              h: !0,
              F: !1,
              A: [4],
              type: [L],
            }),
            (t[36975] = {
              v: te,
              h: !0,
              F: !1,
              A: [4],
              type: [$],
            }),
            (t[36214] = {
              v: te,
              h: !0,
              F: !1,
              A: [8],
              type: [D],
            }),
            (t[36232] = {
              v: te,
              h: !0,
              F: !1,
              A: [8],
              type: [X],
            }),
            (t[36226] = {
              v: te,
              h: !0,
              F: !1,
              A: [16],
              type: [N],
            }),
            (t[36208] = {
              v: te,
              h: !0,
              F: !1,
              A: [16],
              type: [H],
            }),
            (t[33189] = {
              v: w,
              h: !0,
              F: !1,
              A: [2, 4],
              type: [D, H],
            }),
            (t[33190] = {
              v: w,
              h: !0,
              F: !1,
              A: [4],
              type: [H],
            }),
            (t[36012] = {
              v: w,
              h: !0,
              F: !1,
              A: [4],
              type: [q],
            }),
            (t[35056] = {
              v: h,
              h: !0,
              F: !1,
              A: [4],
              type: [34042],
            }),
            (t[36013] = {
              v: h,
              h: !0,
              F: !1,
              A: [4],
              type: [36269],
            }),
            Object.keys(t).forEach(function (e) {
              var r = t[e];
              (r.bytesPerElementMap = {}),
                r.A.forEach(function (e, t) {
                  var n = r.type[t];
                  r.bytesPerElementMap[n] = e;
                });
            }),
            (l = t);
        }
        return l[e];
      }

      function ue(e, t) {
        var r = oe(e);
        if (!r) throw "unknown internal format";
        var n = r.bytesPerElementMap[t];
        if (void 0 === n) throw "unknown internal format";
        return n;
      }

      function ie(e) {
        var t = oe(e);
        if (!t) throw "unknown internal format";
        return {
          format: t.v,
          type: t.type[0],
        };
      }

      function ae(e) {
        return 0 == (e & (e - 1));
      }

      function fe(e, t, r, n) {
        if (!o.isWebGL2(e)) return ae(t) && ae(r);
        var u = oe(n);
        if (!u) throw "unknown internal format";
        return u.h && u.F;
      }

      function ce(e) {
        var t = oe(e);
        if (!t) throw "unknown internal format";
        return t.F;
      }

      function le(e, t, r) {
        return y(t) ? u.getGLTypeForTypedArray(t) : r || G;
      }

      function se(e, t, r, n, o) {
        if (o % 1 != 0) throw "can't guess dimensions";
        if (r || n) {
          if (n) {
            if (!r && (r = o / n) % 1) throw "can't guess dimensions";
          } else if ((n = o / r) % 1) throw "can't guess dimensions";
        } else {
          var u = Math.sqrt(o / (t === A ? 6 : 1));
          u % 1 == 0 ? ((r = u), (n = u)) : ((r = o), (n = 1));
        }
        return {
          width: r,
          height: n,
        };
      }

      function ye(e) {
        s.textureColor = new Uint8Array([
          255 * e[0],
          255 * e[1],
          255 * e[2],
          255 * e[3],
        ]);
      }
      (ne[6406] = {
        u: 1,
      }),
        (ne[6409] = {
          u: 1,
        }),
        (ne[6410] = {
          u: 2,
        }),
        (ne[m] = {
          u: 3,
        }),
        (ne[p] = {
          u: 4,
        }),
        (ne[J] = {
          u: 1,
        }),
        (ne[36244] = {
          u: 1,
        }),
        (ne[K] = {
          u: 2,
        }),
        (ne[33320] = {
          u: 2,
        }),
        (ne[m] = {
          u: 3,
        }),
        (ne[36248] = {
          u: 3,
        }),
        (ne[p] = {
          u: 4,
        }),
        (ne[36249] = {
          u: 4,
        }),
        (ne[6402] = {
          u: 1,
        }),
        (ne[34041] = {
          u: 2,
        });
      var ve = {};

      function be(e, t) {
        void 0 !== t.colorspaceConversion &&
          ((ve.colorspaceConversion = e.getParameter(W)),
          e.pixelStorei(W, t.colorspaceConversion)),
          void 0 !== t.premultiplyAlpha &&
            ((ve.premultiplyAlpha = e.getParameter(I)),
            e.pixelStorei(I, t.premultiplyAlpha)),
          void 0 !== t.flipY &&
            ((ve.flipY = e.getParameter(B)), e.pixelStorei(B, t.flipY));
      }

      function me(e, t) {
        void 0 !== t.colorspaceConversion &&
          e.pixelStorei(W, ve.colorspaceConversion),
          void 0 !== t.premultiplyAlpha &&
            e.pixelStorei(I, ve.premultiplyAlpha),
          void 0 !== t.flipY && e.pixelStorei(B, ve.flipY);
      }

      function pe(e) {
        (ve.unpackAlignment = e.getParameter(T)),
          o.isWebGL2(e) &&
            ((ve.unpackRowLength = e.getParameter(g)),
            (ve.unpackImageHeight = e.getParameter(z)),
            (ve.unpackSkipPixels = e.getParameter(U)),
            (ve.unpackSkipRows = e.getParameter(C)),
            (ve.unpackSkipImages = e.getParameter(k)));
      }

      function de(e) {
        e.pixelStorei(T, ve.unpackAlignment),
          o.isWebGL2(e) &&
            (e.pixelStorei(g, ve.unpackRowLength),
            e.pixelStorei(z, ve.unpackImageHeight),
            e.pixelStorei(U, ve.unpackSkipPixels),
            e.pixelStorei(C, ve.unpackSkipRows),
            e.pixelStorei(k, ve.unpackSkipImages));
      }

      function xe(e, t, r, n) {
        n.minMag && (r.call(e, t, S, n.minMag), r.call(e, t, M, n.minMag)),
          n.min && r.call(e, t, S, n.min),
          n.mag && r.call(e, t, M, n.mag),
          n.wrap &&
            (r.call(e, t, R, n.wrap),
            r.call(e, t, P, n.wrap),
            (t === j || i.isSampler(e, t)) && r.call(e, t, 32882, n.wrap)),
          n.wrapR && r.call(e, t, 32882, n.wrapR),
          n.wrapS && r.call(e, t, R, n.wrapS),
          n.wrapT && r.call(e, t, P, n.wrapT),
          n.minLod && r.call(e, t, 33082, n.minLod),
          n.maxLod && r.call(e, t, 33083, n.maxLod),
          n.baseLevel && r.call(e, t, 33084, n.baseLevel),
          n.maxLevel && r.call(e, t, 33085, n.maxLevel);
      }

      function we(e, t, r) {
        var n = r.target || E;
        e.bindTexture(n, t), xe(e, n, e.texParameteri, r);
      }

      function he(e, t, r) {
        xe(e, t, e.samplerParameteri, r);
      }

      function Fe(e, t) {
        var r = e.createSampler();
        return he(e, r, t), r;
      }

      function Ee(e, t, r, n, o, u) {
        (r = r || s.textureOptions), (u = u || p);
        var i = r.target || E;
        if (
          ((n = n || r.width),
          (o = o || r.height),
          e.bindTexture(i, t),
          fe(e, n, o, u))
        )
          e.generateMipmap(i);
        else {
          var a = ce(u) ? 9729 : 9728;
          e.texParameteri(i, S, a),
            e.texParameteri(i, M, a),
            e.texParameteri(i, R, F),
            e.texParameteri(i, P, F);
        }
      }

      function Ae(e) {
        return !0 === e.auto || (void 0 === e.auto && void 0 === e.level);
      }

      function je(e, t) {
        return (
          (t = t || {}).cubeFaceOrder || [_, 34070, 34071, 34072, 34073, 34074]
        );
      }

      function Oe(e, t) {
        var r = je(0, t).map(function (e, t) {
          return {
            face: e,
            ndx: t,
          };
        });
        return (
          r.sort(function (e, t) {
            return e.face - t.face;
          }),
          r
        );
      }

      function _e(e, t, r, n) {
        var o = (n = n || s.textureOptions).target || E,
          u = n.level || 0,
          i = r.width,
          a = r.height,
          f = n.internalFormat || n.format || p,
          c = ie(f),
          l = n.format || c.format,
          y = n.type || c.type;
        if ((be(e, n), e.bindTexture(o, t), o === A)) {
          var b,
            m,
            d = r.width,
            x = r.height;
          if (d / 6 === x) (b = x), (m = [0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0]);
          else if (x / 6 === d)
            (b = d), (m = [0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5]);
          else if (d / 3 == x / 2)
            (b = d / 3), (m = [0, 0, 1, 0, 2, 0, 0, 1, 1, 1, 2, 1]);
          else {
            if (d / 2 != x / 3)
              throw (
                "can't figure out cube map from element: " +
                (r.src ? r.src : r.nodeName)
              );
            (b = d / 2), (m = [0, 0, 1, 0, 0, 1, 1, 1, 0, 2, 1, 2]);
          }
          var w = v();
          w
            ? ((w.canvas.width = b),
              (w.canvas.height = b),
              (i = b),
              (a = b),
              Oe(0, n).forEach(function (t) {
                var n = m[2 * t.ndx + 0] * b,
                  o = m[2 * t.ndx + 1] * b;
                w.drawImage(r, n, o, b, b, 0, 0, b, b),
                  e.texImage2D(t.face, u, f, l, y, w.canvas);
              }),
              (w.canvas.width = 1),
              (w.canvas.height = 1))
            : "undefined" != typeof createImageBitmap &&
              ((i = b),
              (a = b),
              Oe(0, n).forEach(function (c) {
                var s = m[2 * c.ndx + 0] * b,
                  v = m[2 * c.ndx + 1] * b;
                e.texImage2D(c.face, u, f, b, b, 0, l, y, null),
                  createImageBitmap(r, s, v, b, b, {
                    premultiplyAlpha: "none",
                    colorSpaceConversion: "none",
                  }).then(function (r) {
                    be(e, n),
                      e.bindTexture(o, t),
                      e.texImage2D(c.face, u, f, l, y, r),
                      me(e, n),
                      Ae(n) && Ee(e, t, n, i, a, f);
                  });
              }));
        } else if (o === j || o === O) {
          var h = Math.min(r.width, r.height),
            F = Math.max(r.width, r.height),
            _ = F / h;
          if (_ % 1 != 0) throw "can not compute 3D dimensions of element";
          var S = r.width === F ? 1 : 0,
            M = r.height === F ? 1 : 0;
          pe(e),
            e.pixelStorei(T, 1),
            e.pixelStorei(g, r.width),
            e.pixelStorei(z, 0),
            e.pixelStorei(k, 0),
            e.texImage3D(o, u, f, h, h, h, 0, l, y, null);
          for (var R = 0; R < _; ++R) {
            var P = R * h * S,
              W = R * h * M;
            e.pixelStorei(U, P),
              e.pixelStorei(C, W),
              e.texSubImage3D(o, u, 0, 0, R, h, h, 1, l, y, r);
          }
          de(e);
        } else e.texImage2D(o, u, f, l, y, r);
        me(e, n), Ae(n) && Ee(e, t, n, i, a, f), we(e, t, n);
      }

      function Se() {}

      function Me(e, t) {
        return void 0 !== t ||
          (function (e) {
            if ("undefined" != typeof document) {
              var t = document.createElement("a");
              return (
                (t.href = e),
                t.hostname === location.hostname &&
                  t.port === location.port &&
                  t.protocol === location.protocol
              );
            }
            var r = new URL(location.href).origin;
            return new URL(e, location.href).origin === r;
          })(e)
          ? t
          : "anonymous";
      }

      function Re(e) {
        return (
          ("undefined" != typeof ImageBitmap && e instanceof ImageBitmap) ||
          ("undefined" != typeof ImageData && e instanceof ImageData) ||
          ("undefined" != typeof HTMLElement && e instanceof HTMLElement)
        );
      }

      function Pe(e, t, r) {
        return Re(e)
          ? (setTimeout(function () {
              r(null, e);
            }),
            e)
          : (function (e, t, r) {
              var n;
              if (
                ((r = r || Se),
                (t = void 0 !== t ? t : s.crossOrigin),
                (t = Me(e, t)),
                "undefined" != typeof Image)
              ) {
                (n = new Image()), void 0 !== t && (n.crossOrigin = t);
                var o = function () {
                    n.removeEventListener("error", u),
                      n.removeEventListener("load", a),
                      (n = null);
                  },
                  u = function () {
                    var t = "couldn't load image: " + e;
                    i.error(t), r(t, n), o();
                  },
                  a = function () {
                    r(null, n), o();
                  };
                return (
                  n.addEventListener("error", u),
                  n.addEventListener("load", a),
                  (n.src = e),
                  n
                );
              }
              if ("undefined" != typeof ImageBitmap) {
                var f,
                  c,
                  l = function () {
                    r(f, c);
                  },
                  y = {};
                t && (y.mode = "cors"),
                  fetch(e, y)
                    .then(function (e) {
                      if (!e.ok) throw e;
                      return e.blob();
                    })
                    .then(function (e) {
                      return createImageBitmap(e, {
                        premultiplyAlpha: "none",
                        colorSpaceConversion: "none",
                      });
                    })
                    .then(function (e) {
                      (c = e), setTimeout(l);
                    })
                    .catch(function (e) {
                      (f = e), setTimeout(l);
                    }),
                  (n = null);
              }
              return n;
            })(e, t, r);
      }

      function Te(e, t, r) {
        var n = (r = r || s.textureOptions).target || E;
        if ((e.bindTexture(n, t), !1 !== r.color)) {
          var o = (function (e) {
            return (
              (e = e || s.textureColor),
              y(e)
                ? e
                : new Uint8Array([
                    255 * e[0],
                    255 * e[1],
                    255 * e[2],
                    255 * e[3],
                  ])
            );
          })(r.color);
          if (n === A)
            for (var u = 0; u < 6; ++u)
              e.texImage2D(_ + u, 0, p, 1, 1, 0, p, G, o);
          else
            n === j || n === O
              ? e.texImage3D(n, 0, p, 1, 1, 1, 0, p, G, o)
              : e.texImage2D(n, 0, p, 1, 1, 0, p, G, o);
        }
      }

      function ge(e, t, r, n) {
        return (
          (n = n || Se),
          (r = r || s.textureOptions),
          Te(e, t, r),
          Pe((r = Object.assign({}, r)).src, r.crossOrigin, function (o, u) {
            o ? n(o, t, u) : (_e(e, t, u, r), n(null, t, u));
          })
        );
      }

      function ze(e, t, r, n) {
        n = n || Se;
        var o = r.src;
        if (6 !== o.length) throw "there must be 6 urls for a cubemap";
        var u = r.level || 0,
          i = r.internalFormat || r.format || p,
          a = ie(i),
          f = r.format || a.format,
          c = r.type || G,
          l = r.target || E;
        if (l !== A) throw "target must be TEXTURE_CUBE_MAP";
        Te(e, t, r), (r = Object.assign({}, r));
        var s,
          y = 6,
          v = [],
          b = je(0, r);
        s = o.map(function (o, a) {
          return Pe(
            o,
            r.crossOrigin,
            ((m = b[a]),
            function (o, a) {
              --y,
                o
                  ? v.push(o)
                  : a.width !== a.height
                  ? v.push("cubemap face img is not a square: " + a.src)
                  : (be(e, r),
                    e.bindTexture(l, t),
                    5 === y
                      ? je().forEach(function (t) {
                          e.texImage2D(t, u, i, f, c, a);
                        })
                      : e.texImage2D(m, u, i, f, c, a),
                    me(e, r),
                    Ae(r) && e.generateMipmap(l)),
                0 === y && n(v.length ? v : void 0, t, s);
            })
          );
          var m;
        });
      }

      function Ue(e, t, r, n) {
        n = n || Se;
        var o = r.src,
          u = r.internalFormat || r.format || p,
          i = ie(u),
          a = r.format || i.format,
          f = r.type || G,
          c = r.target || O;
        if (c !== j && c !== O)
          throw "target must be TEXTURE_3D or TEXTURE_2D_ARRAY";
        Te(e, t, r), (r = Object.assign({}, r));
        var l,
          s = o.length,
          y = [],
          b = r.level || 0,
          m = r.width,
          d = r.height,
          x = o.length,
          w = !0;
        l = o.map(function (o, i) {
          return Pe(
            o,
            r.crossOrigin,
            ((p = i),
            function (o, i) {
              if ((--s, o)) y.push(o);
              else {
                if ((be(e, r), e.bindTexture(c, t), w)) {
                  (w = !1),
                    (m = r.width || i.width),
                    (d = r.height || i.height),
                    e.texImage3D(c, b, u, m, d, x, 0, a, f, null);
                  for (var h = 0; h < x; ++h)
                    e.texSubImage3D(c, b, 0, 0, h, m, d, 1, a, f, i);
                } else {
                  var F,
                    E = i;
                  (i.width === m && i.height === d) ||
                    ((E = (F = v()).canvas),
                    (F.canvas.width = m),
                    (F.canvas.height = d),
                    F.drawImage(i, 0, 0, m, d)),
                    e.texSubImage3D(c, b, 0, 0, p, m, d, 1, a, f, E),
                    F &&
                      E === F.canvas &&
                      ((F.canvas.width = 0), (F.canvas.height = 0));
                }
                me(e, r), Ae(r) && e.generateMipmap(c);
              }
              0 === s && n(y.length ? y : void 0, t, l);
            })
          );
          var p;
        });
      }

      function Ce(e, t, r, n) {
        var i = (n = n || s.textureOptions).target || E;
        e.bindTexture(i, t);
        var a = n.width,
          f = n.height,
          c = n.depth,
          l = n.level || 0,
          v = n.internalFormat || n.format || p,
          b = ie(v),
          m = n.format || b.format,
          d = n.type || le(0, r, b.type);
        if (y(r))
          r instanceof Uint8ClampedArray && (r = new Uint8Array(r.buffer));
        else {
          var x = u.getTypedArrayTypeForGLType(d);
          r = new x(r);
        }
        var w,
          h = ue(v, d),
          F = r.byteLength / h;
        if (F % 1)
          throw "length wrong size for format: " + o.glEnumToString(e, m);
        if (i === j || i === O)
          if (a || f || c)
            !a || (f && c)
              ? !f || (a && c)
                ? ((w = se(0, i, a, f, F / c)), (a = w.width), (f = w.height))
                : ((w = se(0, i, a, c, F / f)), (a = w.width), (c = w.height))
              : ((w = se(0, i, f, c, F / a)), (f = w.width), (c = w.height));
          else {
            var _ = Math.cbrt(F);
            if (_ % 1 != 0)
              throw "can't guess cube size of array of numElements: " + F;
            (a = _), (f = _), (c = _);
          }
        else (w = se(0, i, a, f, F)), (a = w.width), (f = w.height);
        if (
          (pe(e), e.pixelStorei(T, n.unpackAlignment || 1), be(e, n), i === A)
        ) {
          var S = (F / 6) * (h / r.BYTES_PER_ELEMENT);
          Oe(0, n).forEach(function (t) {
            var n = S * t.ndx,
              o = r.subarray(n, n + S);
            e.texImage2D(t.face, l, v, a, f, 0, m, d, o);
          });
        } else
          i === j || i === O
            ? e.texImage3D(i, l, v, a, f, c, 0, m, d, r)
            : e.texImage2D(i, l, v, a, f, 0, m, d, r);
        return (
          me(e, n),
          de(e),
          {
            width: a,
            height: f,
            depth: c,
            type: d,
          }
        );
      }

      function ke(e, t, r) {
        var n = r.target || E;
        e.bindTexture(n, t);
        var o = r.level || 0,
          u = r.internalFormat || r.format || p,
          i = ie(u),
          a = r.format || i.format,
          f = r.type || i.type;
        if ((be(e, r), n === A))
          for (var c = 0; c < 6; ++c)
            e.texImage2D(_ + c, o, u, r.width, r.height, 0, a, f, null);
        else
          n === j || n === O
            ? e.texImage3D(n, o, u, r.width, r.height, r.depth, 0, a, f, null)
            : e.texImage2D(n, o, u, r.width, r.height, 0, a, f, null);
        me(e, r);
      }

      function We(e, t, r) {
        (r = r || Se), (t = t || s.textureOptions);
        var n = e.createTexture(),
          o = t.target || E,
          u = t.width || 1,
          i = t.height || 1,
          a = t.internalFormat || p;
        e.bindTexture(o, n),
          o === A && (e.texParameteri(o, R, F), e.texParameteri(o, P, F));
        var f = t.src;
        if (f)
          if (("function" == typeof f && (f = f(e, t)), "string" == typeof f))
            ge(e, n, t, r);
          else if (
            y(f) ||
            (Array.isArray(f) &&
              ("number" == typeof f[0] || Array.isArray(f[0]) || y(f[0])))
          ) {
            var c = Ce(e, n, f, t);
            (u = c.width), (i = c.height);
          } else
            Array.isArray(f) && ("string" == typeof f[0] || Re(f[0]))
              ? o === A
                ? ze(e, n, t, r)
                : Ue(e, n, t, r)
              : (_e(e, n, f, t), (u = f.width), (i = f.height));
        else ke(e, n, t);
        return Ae(t) && Ee(e, n, t, u, i, a), we(e, n, t), n;
      }
    },
    function (e, t, r) {
      "use strict";

      function n(e) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      t.__esModule = !0;
      var o = {
        m4: !0,
        v3: !0,
        primitives: !0,
      };
      t.primitives = t.v3 = t.m4 = void 0;
      var u = l(r(5));
      t.m4 = u;
      var i = l(r(2));
      t.v3 = i;
      var a = l(r(9));
      t.primitives = a;
      var f = r(10);

      function c() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }

      function l(e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" !== n(e) && "function" != typeof e))
          return {
            default: e,
          };
        var t = c();
        if (t && t.has(e)) return t.get(e);
        var r = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var u in e)
          if (Object.prototype.hasOwnProperty.call(e, u)) {
            var i = o ? Object.getOwnPropertyDescriptor(e, u) : null;
            i && (i.get || i.set)
              ? Object.defineProperty(r, u, i)
              : (r[u] = e[u]);
          }
        return (r.default = e), t && t.set(e, r), r;
      }
      Object.keys(f).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(o, e) || (t[e] = f[e]));
      });
    },
    function (e, t, r) {
      "use strict";

      function n(e) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      (t.__esModule = !0),
        (t.create3DFVertices = R),
        (t.createAugmentedTypedArray = b),
        (t.createCubeVertices = _),
        (t.createPlaneVertices = A),
        (t.createSphereVertices = j),
        (t.createTruncatedConeVertices = S),
        (t.createXYQuadVertices = E),
        (t.createCrescentVertices = P),
        (t.createCylinderVertices = T),
        (t.createTorusVertices = g),
        (t.createDiscVertices = z),
        (t.deindexVertices = function (e) {
          var t = e.indices,
            r = {},
            n = t.length;
          return (
            Object.keys(e)
              .filter(m)
              .forEach(function (o) {
                for (
                  var u = e[o],
                    i = u.numComponents,
                    a = b(i, n, u.constructor),
                    f = 0;
                  f < n;
                  ++f
                )
                  for (var c = t[f] * i, l = 0; l < i; ++l) a.push(u[c + l]);
                r[o] = a;
              }),
            r
          );
        }),
        (t.flattenNormals = function (e) {
          if (e.indices)
            throw new Error(
              "can not flatten normals of indexed vertices. deindex them first"
            );
          for (var t = e.normal, r = t.length, n = 0; n < r; n += 9) {
            var o = t[n + 0],
              u = t[n + 1],
              i = t[n + 2],
              a = t[n + 3],
              f = t[n + 4],
              c = t[n + 5],
              l = t[n + 6],
              s = t[n + 7],
              y = t[n + 8],
              v = o + a + l,
              b = u + f + s,
              m = i + c + y,
              p = Math.sqrt(v * v + b * b + m * m);
            (v /= p),
              (b /= p),
              (m /= p),
              (t[n + 0] = v),
              (t[n + 1] = b),
              (t[n + 2] = m),
              (t[n + 3] = v),
              (t[n + 4] = b),
              (t[n + 5] = m),
              (t[n + 6] = v),
              (t[n + 7] = b),
              (t[n + 8] = m);
          }
          return e;
        }),
        (t.makeRandomVertexColors = function (e, t) {
          t = t || {};
          var r = e.position.numElements,
            n = b(4, r, Uint8Array),
            o =
              t.rand ||
              function (e, t) {
                return t < 3 ? ((r = 256), (Math.random() * r) | 0) : 255;
                var r;
              };
          if (((e.color = n), e.indices))
            for (var u = 0; u < r; ++u)
              n.push(o(u, 0), o(u, 1), o(u, 2), o(u, 3));
          else
            for (var i = t.vertsPerColor || 3, a = r / i, f = 0; f < a; ++f)
              for (
                var c = [o(f, 0), o(f, 1), o(f, 2), o(f, 3)], l = 0;
                l < i;
                ++l
              )
                n.push(c);
          return e;
        }),
        (t.reorientDirections = x),
        (t.reorientNormals = w),
        (t.reorientPositions = h),
        (t.reorientVertices = F),
        (t.concatVertices = function (e) {
          for (
            var t,
              r = {},
              n = function (n) {
                var o = e[n];
                Object.keys(o).forEach(function (e) {
                  r[e] || (r[e] = []), t || "indices" === e || (t = e);
                  var n = o[e],
                    u = y(n, e),
                    i = s(n).length / u;
                  r[e].push(i);
                });
              },
              o = 0;
            o < e.length;
            ++o
          )
            n(o);
          var u = r[t],
            i = {};
          return (
            Object.keys(r).forEach(function (t) {
              var r = (function (t) {
                  for (var r, n = 0, o = 0; o < e.length; ++o) {
                    var u = e[o][t];
                    (n += s(u).length), (r && !u.data) || (r = u);
                  }
                  return {
                    length: n,
                    spec: r,
                  };
                })(t),
                n = I(r.spec, r.length);
              !(function (t, r, n) {
                for (var o = 0, u = 0, i = 0; i < e.length; ++i) {
                  var a = e[i][t],
                    f = s(a);
                  "indices" === t ? (W(f, n, u, o), (o += r[i])) : W(f, n, u),
                    (u += f.length);
                }
              })(t, u, s(n)),
                (i[t] = n);
            }),
            i
          );
        }),
        (t.duplicateVertices = function (e) {
          var t = {};
          return (
            Object.keys(e).forEach(function (r) {
              var n = e[r],
                o = s(n),
                u = I(n, o.length);
              W(o, s(u), 0), (t[r] = u);
            }),
            t
          );
        }),
        (t.createDiscBuffers =
          t.createDiscBufferInfo =
          t.createTorusBuffers =
          t.createTorusBufferInfo =
          t.createCylinderBuffers =
          t.createCylinderBufferInfo =
          t.createCrescentBuffers =
          t.createCrescentBufferInfo =
          t.createCresentVertices =
          t.createCresentBuffers =
          t.createCresentBufferInfo =
          t.createXYQuadBuffers =
          t.createXYQuadBufferInfo =
          t.createTruncatedConeBuffers =
          t.createTruncatedConeBufferInfo =
          t.createSphereBuffers =
          t.createSphereBufferInfo =
          t.createPlaneBuffers =
          t.createPlaneBufferInfo =
          t.createCubeBuffers =
          t.createCubeBufferInfo =
          t.create3DFBuffers =
          t.create3DFBufferInfo =
            void 0);
      var o = l(r(6)),
        u = l(r(0)),
        i = l(r(1)),
        a = l(r(5)),
        f = l(r(2));

      function c() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }

      function l(e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" !== n(e) && "function" != typeof e))
          return {
            default: e,
          };
        var t = c();
        if (t && t.has(e)) return t.get(e);
        var r = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var u in e)
          if (Object.prototype.hasOwnProperty.call(e, u)) {
            var i = o ? Object.getOwnPropertyDescriptor(e, u) : null;
            i && (i.get || i.set)
              ? Object.defineProperty(r, u, i)
              : (r[u] = e[u]);
          }
        return (r.default = e), t && t.set(e, r), r;
      }
      var s = o.getArray_,
        y = o.getNumComponents_;

      function v(e, t) {
        var r = 0;
        return (
          (e.push = function () {
            for (var t = 0; t < arguments.length; ++t) {
              var n = arguments[t];
              if (n instanceof Array || i.isArrayBuffer(n))
                for (var o = 0; o < n.length; ++o) e[r++] = n[o];
              else e[r++] = n;
            }
          }),
          (e.reset = function (e) {
            r = e || 0;
          }),
          (e.numComponents = t),
          Object.defineProperty(e, "numElements", {
            get: function () {
              return (this.length / this.numComponents) | 0;
            },
          }),
          e
        );
      }

      function b(e, t, r) {
        return v(new (r || Float32Array)(e * t), e);
      }

      function m(e) {
        return "indices" !== e;
      }

      function p(e, t, r) {
        for (var n = e.length, o = new Float32Array(3), u = 0; u < n; u += 3)
          r(t, [e[u], e[u + 1], e[u + 2]], o),
            (e[u] = o[0]),
            (e[u + 1] = o[1]),
            (e[u + 2] = o[2]);
      }

      function d(e, t, r) {
        r = r || f.create();
        var n = t[0],
          o = t[1],
          u = t[2];
        return (
          (r[0] = n * e[0] + o * e[1] + u * e[2]),
          (r[1] = n * e[4] + o * e[5] + u * e[6]),
          (r[2] = n * e[8] + o * e[9] + u * e[10]),
          r
        );
      }

      function x(e, t) {
        return p(e, t, a.transformDirection), e;
      }

      function w(e, t) {
        return p(e, a.inverse(t), d), e;
      }

      function h(e, t) {
        return p(e, t, a.transformPoint), e;
      }

      function F(e, t) {
        return (
          Object.keys(e).forEach(function (r) {
            var n = e[r];
            r.indexOf("pos") >= 0
              ? h(n, t)
              : r.indexOf("tan") >= 0 || r.indexOf("binorm") >= 0
              ? x(n, t)
              : r.indexOf("norm") >= 0 && w(n, t);
          }),
          e
        );
      }

      function E(e, t, r) {
        return (
          (e = e || 2),
          {
            position: {
              numComponents: 2,
              data: [
                (t = t || 0) + -1 * (e *= 0.5),
                (r = r || 0) + -1 * e,
                t + 1 * e,
                r + -1 * e,
                t + -1 * e,
                r + 1 * e,
                t + 1 * e,
                r + 1 * e,
              ],
            },
            normal: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
            texcoord: [0, 0, 1, 0, 0, 1, 1, 1],
            indices: [0, 1, 2, 2, 1, 3],
          }
        );
      }

      function A(e, t, r, n, o) {
        (e = e || 1),
          (t = t || 1),
          (r = r || 1),
          (n = n || 1),
          (o = o || a.identity());
        for (
          var u = (r + 1) * (n + 1),
            i = b(3, u),
            f = b(3, u),
            c = b(2, u),
            l = 0;
          l <= n;
          l++
        )
          for (var s = 0; s <= r; s++) {
            var y = s / r,
              v = l / n;
            i.push(e * y - 0.5 * e, 0, t * v - 0.5 * t),
              f.push(0, 1, 0),
              c.push(y, v);
          }
        for (var m = r + 1, p = b(3, r * n * 2, Uint16Array), d = 0; d < n; d++)
          for (var x = 0; x < r; x++)
            p.push((d + 0) * m + x, (d + 1) * m + x, (d + 0) * m + x + 1),
              p.push((d + 1) * m + x, (d + 1) * m + x + 1, (d + 0) * m + x + 1);
        return F(
          {
            position: i,
            normal: f,
            texcoord: c,
            indices: p,
          },
          o
        );
      }

      function j(e, t, r, n, o, u, i) {
        if (t <= 0 || r <= 0)
          throw new Error("subdivisionAxis and subdivisionHeight must be > 0");
        (n = n || 0), (u = u || 0);
        for (
          var a = (o = o || Math.PI) - n,
            f = (i = i || 2 * Math.PI) - u,
            c = (t + 1) * (r + 1),
            l = b(3, c),
            s = b(3, c),
            y = b(2, c),
            v = 0;
          v <= r;
          v++
        )
          for (var m = 0; m <= t; m++) {
            var p = m / t,
              d = v / r,
              x = f * p + u,
              w = a * d + n,
              h = Math.sin(x),
              F = Math.cos(x),
              E = Math.sin(w),
              A = F * E,
              j = Math.cos(w),
              O = h * E;
            l.push(e * A, e * j, e * O), s.push(A, j, O), y.push(1 - p, d);
          }
        for (var _ = t + 1, S = b(3, t * r * 2, Uint16Array), M = 0; M < t; M++)
          for (var R = 0; R < r; R++)
            S.push((R + 0) * _ + M, (R + 0) * _ + M + 1, (R + 1) * _ + M),
              S.push((R + 1) * _ + M, (R + 0) * _ + M + 1, (R + 1) * _ + M + 1);
        return {
          position: l,
          normal: s,
          texcoord: y,
          indices: S,
        };
      }
      var O = [
        [3, 7, 5, 1],
        [6, 2, 0, 4],
        [6, 7, 3, 2],
        [0, 1, 5, 4],
        [7, 6, 4, 5],
        [2, 3, 1, 0],
      ];

      function _(e) {
        for (
          var t = (e = e || 1) / 2,
            r = [
              [-t, -t, -t],
              [+t, -t, -t],
              [-t, +t, -t],
              [+t, +t, -t],
              [-t, -t, +t],
              [+t, -t, +t],
              [-t, +t, +t],
              [+t, +t, +t],
            ],
            n = [
              [1, 0, 0],
              [-1, 0, 0],
              [0, 1, 0],
              [0, -1, 0],
              [0, 0, 1],
              [0, 0, -1],
            ],
            o = [
              [1, 0],
              [0, 0],
              [0, 1],
              [1, 1],
            ],
            u = b(3, 24),
            i = b(3, 24),
            a = b(2, 24),
            f = b(3, 12, Uint16Array),
            c = 0;
          c < 6;
          ++c
        ) {
          for (var l = O[c], s = 0; s < 4; ++s) {
            var y = r[l[s]],
              v = n[c],
              m = o[s];
            u.push(y), i.push(v), a.push(m);
          }
          var p = 4 * c;
          f.push(p + 0, p + 1, p + 2), f.push(p + 0, p + 2, p + 3);
        }
        return {
          position: u,
          normal: i,
          texcoord: a,
          indices: f,
        };
      }

      function S(e, t, r, n, o, u, i) {
        if (n < 3) throw new Error("radialSubdivisions must be 3 or greater");
        if (o < 1) throw new Error("verticalSubdivisions must be 1 or greater");
        for (
          var a = void 0 === u || u,
            f = void 0 === i || i,
            c = (a ? 2 : 0) + (f ? 2 : 0),
            l = (n + 1) * (o + 1 + c),
            s = b(3, l),
            y = b(3, l),
            v = b(2, l),
            m = b(3, n * (o + c / 2) * 2, Uint16Array),
            p = n + 1,
            d = Math.atan2(e - t, r),
            x = Math.cos(d),
            w = Math.sin(d),
            h = o + (f ? 2 : 0),
            F = a ? -2 : 0;
          F <= h;
          ++F
        ) {
          var E = F / o,
            A = r * E,
            j = void 0;
          F < 0
            ? ((A = 0), (E = 1), (j = e))
            : F > o
            ? ((A = r), (E = 1), (j = t))
            : (j = e + (F / o) * (t - e)),
            (-2 !== F && F !== o + 2) || ((j = 0), (E = 0)),
            (A -= r / 2);
          for (var O = 0; O < p; ++O) {
            var _ = Math.sin((O * Math.PI * 2) / n),
              S = Math.cos((O * Math.PI * 2) / n);
            s.push(_ * j, A, S * j),
              F < 0
                ? y.push(0, -1, 0)
                : F > o
                ? y.push(0, 1, 0)
                : 0 === j
                ? y.push(0, 0, 0)
                : y.push(_ * x, w, S * x),
              v.push(O / n, 1 - E);
          }
        }
        for (var M = 0; M < o + c; ++M)
          if (!((1 === M && a) || (M === o + c - 2 && f)))
            for (var R = 0; R < n; ++R)
              m.push(
                p * (M + 0) + 0 + R,
                p * (M + 0) + 1 + R,
                p * (M + 1) + 1 + R
              ),
                m.push(
                  p * (M + 0) + 0 + R,
                  p * (M + 1) + 1 + R,
                  p * (M + 1) + 0 + R
                );
        return {
          position: s,
          normal: y,
          texcoord: v,
          indices: m,
        };
      }

      function M(e, t) {
        t = t || [];
        for (var r = [], n = 0; n < e.length; n += 4) {
          var o = e[n],
            u = e.slice(n + 1, n + 4);
          u.push.apply(u, t);
          for (var i = 0; i < o; ++i) r.push.apply(r, u);
        }
        return r;
      }

      function R() {
        var e = [
            0, 0, 0, 0, 150, 0, 30, 0, 0, 0, 150, 0, 30, 150, 0, 30, 0, 0, 30,
            0, 0, 30, 30, 0, 100, 0, 0, 30, 30, 0, 100, 30, 0, 100, 0, 0, 30,
            60, 0, 30, 90, 0, 67, 60, 0, 30, 90, 0, 67, 90, 0, 67, 60, 0, 0, 0,
            30, 30, 0, 30, 0, 150, 30, 0, 150, 30, 30, 0, 30, 30, 150, 30, 30,
            0, 30, 100, 0, 30, 30, 30, 30, 30, 30, 30, 100, 0, 30, 100, 30, 30,
            30, 60, 30, 67, 60, 30, 30, 90, 30, 30, 90, 30, 67, 60, 30, 67, 90,
            30, 0, 0, 0, 100, 0, 0, 100, 0, 30, 0, 0, 0, 100, 0, 30, 0, 0, 30,
            100, 0, 0, 100, 30, 0, 100, 30, 30, 100, 0, 0, 100, 30, 30, 100, 0,
            30, 30, 30, 0, 30, 30, 30, 100, 30, 30, 30, 30, 0, 100, 30, 30, 100,
            30, 0, 30, 30, 0, 30, 60, 30, 30, 30, 30, 30, 30, 0, 30, 60, 0, 30,
            60, 30, 30, 60, 0, 67, 60, 30, 30, 60, 30, 30, 60, 0, 67, 60, 0, 67,
            60, 30, 67, 60, 0, 67, 90, 30, 67, 60, 30, 67, 60, 0, 67, 90, 0, 67,
            90, 30, 30, 90, 0, 30, 90, 30, 67, 90, 30, 30, 90, 0, 67, 90, 30,
            67, 90, 0, 30, 90, 0, 30, 150, 30, 30, 90, 30, 30, 90, 0, 30, 150,
            0, 30, 150, 30, 0, 150, 0, 0, 150, 30, 30, 150, 30, 0, 150, 0, 30,
            150, 30, 30, 150, 0, 0, 0, 0, 0, 0, 30, 0, 150, 30, 0, 0, 0, 0, 150,
            30, 0, 150, 0,
          ],
          t = M([
            18, 0, 0, 1, 18, 0, 0, -1, 6, 0, 1, 0, 6, 1, 0, 0, 6, 0, -1, 0, 6,
            1, 0, 0, 6, 0, 1, 0, 6, 1, 0, 0, 6, 0, -1, 0, 6, 1, 0, 0, 6, 0, -1,
            0, 6, -1, 0, 0,
          ]),
          r = M(
            [
              18, 200, 70, 120, 18, 80, 70, 200, 6, 70, 200, 210, 6, 200, 200,
              70, 6, 210, 100, 70, 6, 210, 160, 70, 6, 70, 180, 210, 6, 100, 70,
              210, 6, 76, 210, 100, 6, 140, 210, 80, 6, 90, 130, 110, 6, 160,
              160, 220,
            ],
            [255]
          ),
          n = e.length / 3,
          o = {
            position: b(3, n),
            texcoord: b(2, n),
            normal: b(3, n),
            color: b(4, n, Uint8Array),
            indices: b(3, n / 3, Uint16Array),
          };
        o.position.push(e),
          o.texcoord.push([
            0.22, 0.19, 0.22, 0.79, 0.34, 0.19, 0.22, 0.79, 0.34, 0.79, 0.34,
            0.19, 0.34, 0.19, 0.34, 0.31, 0.62, 0.19, 0.34, 0.31, 0.62, 0.31,
            0.62, 0.19, 0.34, 0.43, 0.34, 0.55, 0.49, 0.43, 0.34, 0.55, 0.49,
            0.55, 0.49, 0.43, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0,
            1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0,
            1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0,
            1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0,
            1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0,
            0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1,
            0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1,
            0,
          ]),
          o.normal.push(t),
          o.color.push(r);
        for (var u = 0; u < n; ++u) o.indices.push(u);
        return o;
      }

      function P(e, t, r, n, o, u, i) {
        if (o <= 0) throw new Error("subdivisionDown must be > 0");
        var a = (i = i || 1) - (u = u || 0),
          c = 2 * (o + 1) * 4,
          l = b(3, c),
          s = b(3, c),
          y = b(2, c);

        function v(e, t, r) {
          return e + (t - e) * r;
        }

        function m(t, r, i, c, b, m) {
          for (var p = 0; p <= o; p++) {
            var d = r / 1,
              x = p / o,
              w = 2 * (d - 0.5),
              h = (u + x * a) * Math.PI,
              F = Math.sin(h),
              E = Math.cos(h),
              A = v(e, t, F),
              j = w * n,
              O = E * e,
              _ = F * A;
            l.push(j, O, _);
            var S = f.add(f.multiply([0, F, E], i), c);
            s.push(S), y.push(d * b + m, x);
          }
        }
        for (var p = 0; p < 2; p++) {
          var d = 2 * (p / 1 - 0.5);
          m(t, p, [1, 1, 1], [0, 0, 0], 1, 0),
            m(t, p, [0, 0, 0], [d, 0, 0], 0, 0),
            m(r, p, [1, 1, 1], [0, 0, 0], 1, 0),
            m(r, p, [0, 0, 0], [d, 0, 0], 0, 1);
        }
        var x = b(3, 2 * o * 4, Uint16Array);

        function w(e, t) {
          for (var r = 0; r < o; ++r)
            x.push(e + r + 0, e + r + 1, t + r + 0),
              x.push(e + r + 1, t + r + 1, t + r + 0);
        }
        var h = o + 1;
        return (
          w(0 * h, 4 * h),
          w(5 * h, 7 * h),
          w(6 * h, 2 * h),
          w(3 * h, 1 * h),
          {
            position: l,
            normal: s,
            texcoord: y,
            indices: x,
          }
        );
      }

      function T(e, t, r, n, o, u) {
        return S(e, e, t, r, n, o, u);
      }

      function g(e, t, r, n, o, u) {
        if (r < 3) throw new Error("radialSubdivisions must be 3 or greater");
        if (n < 3) throw new Error("verticalSubdivisions must be 3 or greater");
        o = o || 0;
        for (
          var i = (u = u || 2 * Math.PI) - o,
            a = r + 1,
            f = n + 1,
            c = a * f,
            l = b(3, c),
            s = b(3, c),
            y = b(2, c),
            v = b(3, r * n * 2, Uint16Array),
            m = 0;
          m < f;
          ++m
        )
          for (
            var p = m / n,
              d = p * Math.PI * 2,
              x = Math.sin(d),
              w = e + x * t,
              h = Math.cos(d),
              F = h * t,
              E = 0;
            E < a;
            ++E
          ) {
            var A = E / r,
              j = o + A * i,
              O = Math.sin(j),
              _ = Math.cos(j),
              S = O * w,
              M = _ * w,
              R = O * x,
              P = _ * x;
            l.push(S, F, M), s.push(R, h, P), y.push(A, 1 - p);
          }
        for (var T = 0; T < n; ++T)
          for (var g = 0; g < r; ++g) {
            var z = 1 + g,
              U = 1 + T;
            v.push(a * T + g, a * U + g, a * T + z),
              v.push(a * U + g, a * U + z, a * T + z);
          }
        return {
          position: l,
          normal: s,
          texcoord: y,
          indices: v,
        };
      }

      function z(e, t, r, n, o) {
        if (t < 3) throw new Error("divisions must be at least 3");
        (o = o || 1), (n = n || 0);
        for (
          var u = (t + 1) * ((r = r || 1) + 1),
            i = b(3, u),
            a = b(3, u),
            f = b(2, u),
            c = b(3, r * t * 2, Uint16Array),
            l = 0,
            s = e - n,
            y = t + 1,
            v = 0;
          v <= r;
          ++v
        ) {
          for (var m = n + s * Math.pow(v / r, o), p = 0; p <= t; ++p) {
            var d = (2 * Math.PI * p) / t,
              x = m * Math.cos(d),
              w = m * Math.sin(d);
            if (
              (i.push(x, 0, w),
              a.push(0, 1, 0),
              f.push(1 - p / t, v / r),
              v > 0 && p !== t)
            ) {
              var h = l + (p + 1),
                F = l + p,
                E = l + p - y,
                A = l + (p + 1) - y;
              c.push(h, F, E), c.push(h, E, A);
            }
          }
          l += t + 1;
        }
        return {
          position: i,
          normal: a,
          texcoord: f,
          indices: c,
        };
      }

      function U(e) {
        return function (t) {
          var r = e.apply(this, Array.prototype.slice.call(arguments, 1));
          return o.createBuffersFromArrays(t, r);
        };
      }

      function C(e) {
        return function (t) {
          var r = e.apply(null, Array.prototype.slice.call(arguments, 1));
          return o.createBufferInfoFromArrays(t, r);
        };
      }
      var k = [
        "numComponents",
        "size",
        "type",
        "normalize",
        "stride",
        "offset",
        "attrib",
        "name",
        "attribName",
      ];

      function W(e, t, r, n) {
        n = n || 0;
        for (var o = e.length, u = 0; u < o; ++u) t[r + u] = e[u] + n;
      }

      function I(e, t) {
        var r = s(e),
          n = new r.constructor(t),
          o = n;
        return (
          r.numComponents && r.numElements && v(n, r.numComponents),
          e.data &&
            ((o = {
              data: n,
            }),
            u.copyNamedProperties(k, e, o)),
          o
        );
      }
      var B = C(R);
      t.create3DFBufferInfo = B;
      var L = U(R);
      t.create3DFBuffers = L;
      var G = C(_);
      t.createCubeBufferInfo = G;
      var X = U(_);
      t.createCubeBuffers = X;
      var D = C(A);
      t.createPlaneBufferInfo = D;
      var N = U(A);
      t.createPlaneBuffers = N;
      var H = C(j);
      t.createSphereBufferInfo = H;
      var q = U(j);
      t.createSphereBuffers = q;
      var V = C(S);
      t.createTruncatedConeBufferInfo = V;
      var Y = U(S);
      t.createTruncatedConeBuffers = Y;
      var $ = C(E);
      t.createXYQuadBufferInfo = $;
      var K = U(E);
      t.createXYQuadBuffers = K;
      var Z = C(P);
      t.createCrescentBufferInfo = Z;
      var J = U(P);
      t.createCrescentBuffers = J;
      var Q = C(T);
      t.createCylinderBufferInfo = Q;
      var ee = U(T);
      t.createCylinderBuffers = ee;
      var te = C(g);
      t.createTorusBufferInfo = te;
      var re = U(g);
      t.createTorusBuffers = re;
      var ne = C(z);
      t.createDiscBufferInfo = ne;
      var oe = U(z);
      t.createDiscBuffers = oe;
      var ue = Z;
      t.createCresentBufferInfo = ue;
      var ie = J;
      t.createCresentBuffers = ie;
      var ae = P;
      t.createCresentVertices = ae;
    },
    function (e, t, r) {
      "use strict";

      function n(e) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      t.__esModule = !0;
      var o = {
        addExtensionsToContext: !0,
        getContext: !0,
        getWebGLContext: !0,
        resizeCanvasToDisplaySize: !0,
        setDefaults: !0,
        attributes: !0,
        textures: !0,
        utils: !0,
        draw: !0,
        framebuffers: !0,
        programs: !0,
        typedarrays: !0,
        vertexArrays: !0,
      };
      (t.addExtensionsToContext = h),
        (t.getContext = function (e, t) {
          return (function (e, t) {
            for (
              var r = ["webgl2", "webgl", "experimental-webgl"],
                n = null,
                o = 0;
              o < r.length;
              ++o
            )
              if ((n = e.getContext(r[o], t))) {
                p.addExtensionsToContext && h(n);
                break;
              }
            return n;
          })(e, t);
        }),
        (t.getWebGLContext = function (e, t) {
          return (function (e, t) {
            for (
              var r = ["webgl", "experimental-webgl"], n = null, o = 0;
              o < r.length;
              ++o
            )
              if ((n = e.getContext(r[o], t))) {
                p.addExtensionsToContext && h(n);
                break;
              }
            return n;
          })(e, t);
        }),
        (t.resizeCanvasToDisplaySize = function (e, t) {
          (t = t || 1), (t = Math.max(0, t));
          var r = (e.clientWidth * t) | 0,
            n = (e.clientHeight * t) | 0;
          if (e.width !== r || e.height !== n)
            return (e.width = r), (e.height = n), !0;
          return !1;
        }),
        (t.setDefaults = function (e) {
          a.copyExistingProperties(e, p),
            u.setAttributeDefaults_(e),
            i.setTextureDefaults_(e);
        }),
        (t.vertexArrays =
          t.typedarrays =
          t.programs =
          t.framebuffers =
          t.draw =
          t.utils =
          t.textures =
          t.attributes =
            void 0);
      var u = m(r(6));
      (t.attributes = u),
        Object.keys(u).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            (Object.prototype.hasOwnProperty.call(o, e) || (t[e] = u[e]));
        });
      var i = m(r(7));
      (t.textures = i),
        Object.keys(i).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            (Object.prototype.hasOwnProperty.call(o, e) || (t[e] = i[e]));
        });
      var a = m(r(0)),
        f = m(r(3));
      (t.utils = f),
        Object.keys(f).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            (Object.prototype.hasOwnProperty.call(o, e) || (t[e] = f[e]));
        });
      var c = m(r(11));
      (t.draw = c),
        Object.keys(c).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            (Object.prototype.hasOwnProperty.call(o, e) || (t[e] = c[e]));
        });
      var l = m(r(12));
      (t.framebuffers = l),
        Object.keys(l).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            (Object.prototype.hasOwnProperty.call(o, e) || (t[e] = l[e]));
        });
      var s = m(r(4));
      (t.programs = s),
        Object.keys(s).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            (Object.prototype.hasOwnProperty.call(o, e) || (t[e] = s[e]));
        });
      var y = m(r(1));
      (t.typedarrays = y),
        Object.keys(y).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            (Object.prototype.hasOwnProperty.call(o, e) || (t[e] = y[e]));
        });
      var v = m(r(13));

      function b() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (b = function () {
            return e;
          }),
          e
        );
      }

      function m(e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" !== n(e) && "function" != typeof e))
          return {
            default: e,
          };
        var t = b();
        if (t && t.has(e)) return t.get(e);
        var r = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var u in e)
          if (Object.prototype.hasOwnProperty.call(e, u)) {
            var i = o ? Object.getOwnPropertyDescriptor(e, u) : null;
            i && (i.get || i.set)
              ? Object.defineProperty(r, u, i)
              : (r[u] = e[u]);
          }
        return (r.default = e), t && t.set(e, r), r;
      }
      (t.vertexArrays = v),
        Object.keys(v).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            (Object.prototype.hasOwnProperty.call(o, e) || (t[e] = v[e]));
        });
      var p = {
        addExtensionsToContext: !0,
      };
      var d = /^(.*?)_/;

      function x(e, t) {
        f.glEnumToString(e, 0);
        var r = e.getExtension(t);
        if (r) {
          var n = {},
            o = d.exec(t)[1],
            u = "_" + o;
          for (var i in r) {
            var c = r[i],
              l = "function" == typeof c,
              s = l ? o : u,
              y = i;
            i.endsWith(s) && (y = i.substring(0, i.length - s.length)),
              void 0 !== e[y]
                ? l || e[y] === c || a.warn(y, e[y], c, i)
                : l
                ? (e[y] = (function (e) {
                    return function () {
                      return e.apply(r, arguments);
                    };
                  })(c))
                : ((e[y] = c), (n[y] = c));
          }
          (n.constructor = {
            name: r.constructor.name,
          }),
            f.glEnumToString(n, 0);
        }
        return r;
      }
      var w = [
        "ANGLE_instanced_arrays",
        "EXT_blend_minmax",
        "EXT_color_buffer_float",
        "EXT_color_buffer_half_float",
        "EXT_disjoint_timer_query",
        "EXT_disjoint_timer_query_webgl2",
        "EXT_frag_depth",
        "EXT_sRGB",
        "EXT_shader_texture_lod",
        "EXT_texture_filter_anisotropic",
        "OES_element_index_uint",
        "OES_standard_derivatives",
        "OES_texture_float",
        "OES_texture_float_linear",
        "OES_texture_half_float",
        "OES_texture_half_float_linear",
        "OES_vertex_array_object",
        "WEBGL_color_buffer_float",
        "WEBGL_compressed_texture_atc",
        "WEBGL_compressed_texture_etc1",
        "WEBGL_compressed_texture_pvrtc",
        "WEBGL_compressed_texture_s3tc",
        "WEBGL_compressed_texture_s3tc_srgb",
        "WEBGL_depth_texture",
        "WEBGL_draw_buffers",
      ];

      function h(e) {
        for (var t = 0; t < w.length; ++t) x(e, w[t]);
      }
    },
    function (e, t, r) {
      "use strict";

      function n(e) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      (t.__esModule = !0),
        (t.drawBufferInfo = i),
        (t.drawObjectList = function (e, t) {
          var r = null,
            n = null;
          t.forEach(function (t) {
            if (!1 !== t.active) {
              var u = t.programInfo,
                a = t.vertexArrayInfo || t.bufferInfo,
                f = !1,
                c = void 0 === t.type ? 4 : t.type;
              u !== r && ((r = u), e.useProgram(u.program), (f = !0)),
                (f || a !== n) &&
                  (n &&
                    n.vertexArrayObject &&
                    !a.vertexArrayObject &&
                    e.bindVertexArray(null),
                  (n = a),
                  o.setBuffersAndAttributes(e, u, a)),
                o.setUniforms(u, t.uniforms),
                i(e, a, c, t.count, t.offset, t.instanceCount);
            }
          }),
            n && n.vertexArrayObject && e.bindVertexArray(null);
        });
      var o = (function (e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" !== n(e) && "function" != typeof e))
          return {
            default: e,
          };
        var t = u();
        if (t && t.has(e)) return t.get(e);
        var r = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in e)
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
            a && (a.get || a.set)
              ? Object.defineProperty(r, i, a)
              : (r[i] = e[i]);
          }
        (r.default = e), t && t.set(e, r);
        return r;
      })(r(4));

      function u() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }

      function i(e, t, r, n, o, u) {
        r = void 0 === r ? 4 : r;
        var i = t.indices,
          a = t.elementType,
          f = void 0 === n ? t.numElements : n;
        (o = void 0 === o ? 0 : o),
          a || i
            ? void 0 !== u
              ? e.drawElementsInstanced(
                  r,
                  f,
                  void 0 === a ? 5123 : t.elementType,
                  o,
                  u
                )
              : e.drawElements(r, f, void 0 === a ? 5123 : t.elementType, o)
            : void 0 !== u
            ? e.drawArraysInstanced(r, o, f, u)
            : e.drawArrays(r, o, f);
      }
    },
    function (e, t, r) {
      "use strict";

      function n(e) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      (t.__esModule = !0),
        (t.bindFramebufferInfo = function (e, t, r) {
          (r = r || 36160),
            t
              ? (e.bindFramebuffer(r, t.framebuffer),
                e.viewport(0, 0, t.width, t.height))
              : (e.bindFramebuffer(r, null),
                e.viewport(0, 0, e.drawingBufferWidth, e.drawingBufferHeight));
        }),
        (t.createFramebufferInfo = function (e, t, r, n) {
          var i = 36160,
            a = e.createFramebuffer();
          e.bindFramebuffer(i, a),
            (r = r || e.drawingBufferWidth),
            (n = n || e.drawingBufferHeight);
          var c = 0,
            m = {
              framebuffer: a,
              attachments: [],
              width: r,
              height: n,
            };
          return (
            (t = t || y).forEach(function (t) {
              var a = t.attachment,
                y = t.format,
                p = (function (e) {
                  return v[e];
                })(y);
              if ((p || (p = 36064 + c++), !a))
                if (
                  (function (e) {
                    return b[e];
                  })(y)
                )
                  (a = e.createRenderbuffer()),
                    e.bindRenderbuffer(f, a),
                    e.renderbufferStorage(f, y, r, n);
                else {
                  var d = Object.assign({}, t);
                  (d.width = r),
                    (d.height = n),
                    void 0 === d.auto &&
                      ((d.auto = !1),
                      (d.min = d.min || d.minMag || s),
                      (d.mag = d.mag || d.minMag || s),
                      (d.wrapS = d.wrapS || d.wrap || l),
                      (d.wrapT = d.wrapT || d.wrap || l)),
                    (a = o.createTexture(e, d));
                }
              if (u.isRenderbuffer(e, a)) e.framebufferRenderbuffer(i, p, f, a);
              else {
                if (!u.isTexture(e, a))
                  throw new Error("unknown attachment type");
                void 0 !== t.layer
                  ? e.framebufferTextureLayer(i, p, a, t.level || 0, t.layer)
                  : e.framebufferTexture2D(
                      i,
                      p,
                      t.target || 3553,
                      a,
                      t.level || 0
                    );
              }
              m.attachments.push(a);
            }),
            m
          );
        }),
        (t.resizeFramebufferInfo = function (e, t, r, n, i) {
          (n = n || e.drawingBufferWidth),
            (i = i || e.drawingBufferHeight),
            (t.width = n),
            (t.height = i),
            (r = r || y).forEach(function (r, a) {
              var c = t.attachments[a],
                l = r.format;
              if (u.isRenderbuffer(e, c))
                e.bindRenderbuffer(f, c), e.renderbufferStorage(f, l, n, i);
              else {
                if (!u.isTexture(e, c))
                  throw new Error("unknown attachment type");
                o.resizeTexture(e, c, r, n, i);
              }
            });
        });
      var o = a(r(7)),
        u = a(r(0));

      function i() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (i = function () {
            return e;
          }),
          e
        );
      }

      function a(e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" !== n(e) && "function" != typeof e))
          return {
            default: e,
          };
        var t = i();
        if (t && t.has(e)) return t.get(e);
        var r = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var u in e)
          if (Object.prototype.hasOwnProperty.call(e, u)) {
            var a = o ? Object.getOwnPropertyDescriptor(e, u) : null;
            a && (a.get || a.set)
              ? Object.defineProperty(r, u, a)
              : (r[u] = e[u]);
          }
        return (r.default = e), t && t.set(e, r), r;
      }
      var f = 36161,
        c = 34041,
        l = 33071,
        s = 9729,
        y = [
          {
            format: 6408,
            type: 5121,
            min: s,
            wrap: l,
          },
          {
            format: c,
          },
        ],
        v = {};
      (v[34041] = 33306),
        (v[6401] = 36128),
        (v[36168] = 36128),
        (v[6402] = 36096),
        (v[33189] = 36096);
      var b = {};
      (b[32854] = !0),
        (b[32855] = !0),
        (b[36194] = !0),
        (b[34041] = !0),
        (b[33189] = !0),
        (b[6401] = !0),
        (b[36168] = !0);
    },
    function (e, t, r) {
      "use strict";

      function n(e) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      (t.__esModule = !0),
        (t.createVertexArrayInfo = function (e, t, r) {
          var n = e.createVertexArray();
          e.bindVertexArray(n), t.length || (t = [t]);
          return (
            t.forEach(function (t) {
              o.setBuffersAndAttributes(e, t, r);
            }),
            e.bindVertexArray(null),
            {
              numElements: r.numElements,
              elementType: r.elementType,
              vertexArrayObject: n,
            }
          );
        }),
        (t.createVAOAndSetAttributes = i),
        (t.createVAOFromBufferInfo = function (e, t, r) {
          return i(e, t.attribSetters || t, r.attribs, r.indices);
        });
      var o = (function (e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" !== n(e) && "function" != typeof e))
          return {
            default: e,
          };
        var t = u();
        if (t && t.has(e)) return t.get(e);
        var r = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in e)
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
            a && (a.get || a.set)
              ? Object.defineProperty(r, i, a)
              : (r[i] = e[i]);
          }
        (r.default = e), t && t.set(e, r);
        return r;
      })(r(4));

      function u() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }

      function i(e, t, r, n) {
        var u = e.createVertexArray();
        return (
          e.bindVertexArray(u),
          o.setAttributes(t, r),
          n && e.bindBuffer(34963, n),
          e.bindVertexArray(null),
          u
        );
      }
    },
  ]);
});
