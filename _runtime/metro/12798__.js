// === Module 12798: ? ===

// Module 12798
import ANGLE_ORDER from "ANGLE_ORDER" /* 12799 */;
import _mod12800 from "module_12800" /* 12800 */;
import _mod12801 from "module_12801" /* 12801 */;
import _mod12802 from "module_12802" /* 12802 */;
import _mod12803 from "module_12803" /* 12803 */;
import _mod12804 from "module_12804" /* 12804 */;
import _mod12805 from "module_12805" /* 12805 */;
import _mod12806 from "module_12806" /* 12806 */;
import _mod12807 from "module_12807" /* 12807 */;
import _mod12808 from "module_12808" /* 12808 */;

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
export const mat2 = _interopRequireWildcard(_mod12800);
export const mat2d = _interopRequireWildcard(_mod12801);
export const mat3 = _interopRequireWildcard(_mod12802);
export const mat4 = _interopRequireWildcard(_mod12803);
export const quat = _interopRequireWildcard(_mod12804);
export const quat2 = _interopRequireWildcard(_mod12807);
export const vec2 = _interopRequireWildcard(_mod12808);
export const vec3 = _interopRequireWildcard(_mod12805);
export const vec4 = _interopRequireWildcard(_mod12806);