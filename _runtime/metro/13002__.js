// _runtime/metro/13002__.js
import ANGLE_ORDER from "../13003_ANGLE_ORDER.js";
import _mod13004 from "13004__.js";
import _mod13005 from "13005__.js";
import _mod13006 from "13006__.js";
import _mod13007 from "13007__.js";
import _mod13008 from "13008__.js";
import _mod13009 from "13009__.js";
import _mod13010 from "13010__.js";
import _mod13011 from "13011__.js";
import _mod13012 from "13012__.js";

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
export const mat2 = _interopRequireWildcard(_mod13004);
export const mat2d = _interopRequireWildcard(_mod13005);
export const mat3 = _interopRequireWildcard(_mod13006);
export const mat4 = _interopRequireWildcard(_mod13007);
export const quat = _interopRequireWildcard(_mod13008);
export const quat2 = _interopRequireWildcard(_mod13011);
export const vec2 = _interopRequireWildcard(_mod13012);
export const vec3 = _interopRequireWildcard(_mod13009);
export const vec4 = _interopRequireWildcard(_mod13010);
