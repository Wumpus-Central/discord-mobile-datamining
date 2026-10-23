// === Module 12958: ? ===

// Module 12958
import ANGLE_ORDER from "ANGLE_ORDER" /* 12959 */;
import _mod12960 from "module_12960" /* 12960 */;
import _mod12961 from "module_12961" /* 12961 */;
import _mod12962 from "module_12962" /* 12962 */;
import _mod12963 from "module_12963" /* 12963 */;
import _mod12964 from "module_12964" /* 12964 */;
import _mod12965 from "module_12965" /* 12965 */;
import _mod12966 from "module_12966" /* 12966 */;
import _mod12967 from "module_12967" /* 12967 */;
import _mod12968 from "module_12968" /* 12968 */;

let fn = function _typeof(arg0) {
  if (typeof Symbol === "function") {
    let _Symbol = Symbol;
    if (typeof Symbol.iterator === "symbol") {
      fn = (arg0) => typeof arg0;
    }
    return fn(arg0);
  }
  fn = (arg0) => {
    if (arg0) {
      const _Symbol = Symbol;
      if (typeof Symbol === "function") {
        const _Symbol3 = Symbol;
        if (arg0.constructor === Symbol) {
          const _Symbol2 = Symbol;
          let str = "symbol";
        }
        return str;
      }
    }
    str = typeof arg0;
  };
};

export const glMatrix = _interopRequireWildcard(ANGLE_ORDER);
export const mat2 = _interopRequireWildcard(_mod12960);
export const mat2d = _interopRequireWildcard(_mod12961);
export const mat3 = _interopRequireWildcard(_mod12962);
export const mat4 = _interopRequireWildcard(_mod12963);
export const quat = _interopRequireWildcard(_mod12964);
export const quat2 = _interopRequireWildcard(_mod12967);
export const vec2 = _interopRequireWildcard(_mod12968);
export const vec3 = _interopRequireWildcard(_mod12965);
export const vec4 = _interopRequireWildcard(_mod12966);