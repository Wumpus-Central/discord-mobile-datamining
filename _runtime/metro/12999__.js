// === Module 12999: ? ===

// Module 12999
import ANGLE_ORDER from "ANGLE_ORDER" /* 13000 */;
import _mod13001 from "module_13001" /* 13001 */;
import _mod13002 from "module_13002" /* 13002 */;
import _mod13003 from "module_13003" /* 13003 */;
import _mod13004 from "module_13004" /* 13004 */;
import _mod13005 from "module_13005" /* 13005 */;
import _mod13006 from "module_13006" /* 13006 */;
import _mod13007 from "module_13007" /* 13007 */;
import _mod13008 from "module_13008" /* 13008 */;
import _mod13009 from "module_13009" /* 13009 */;

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
export const mat2 = _interopRequireWildcard(_mod13001);
export const mat2d = _interopRequireWildcard(_mod13002);
export const mat3 = _interopRequireWildcard(_mod13003);
export const mat4 = _interopRequireWildcard(_mod13004);
export const quat = _interopRequireWildcard(_mod13005);
export const quat2 = _interopRequireWildcard(_mod13008);
export const vec2 = _interopRequireWildcard(_mod13009);
export const vec3 = _interopRequireWildcard(_mod13006);
export const vec4 = _interopRequireWildcard(_mod13007);