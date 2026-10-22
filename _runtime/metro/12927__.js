// _runtime/metro/12927__.js
import ANGLE_ORDER from "../12918_ANGLE_ORDER.js";

let fn = function _typeof(ANGLE_ORDER) {
  if (typeof Symbol === "function") {
    let _Symbol = Symbol;
    if (typeof Symbol.iterator === "symbol") {
      fn = (arg0) => typeof arg0;
    }
    return fn(ANGLE_ORDER);
  }
  fn = (ANGLE_ORDER) => {
    if (ANGLE_ORDER) {
      const _Symbol = Symbol;
      if (typeof Symbol === "function") {
        const _Symbol3 = Symbol;
        if (ANGLE_ORDER.constructor === Symbol) {
          const _Symbol2 = Symbol;
          let str = "symbol";
        }
        return str;
      }
    }
    str = typeof ANGLE_ORDER;
  };
};
function subtract(arg0, arg1, arg2) {
  arg0[0] = arg1[0] - arg2[0];
  arg0[1] = arg1[1] - arg2[1];
  return arg0;
}
function multiply(arg0, arg1, arg2) {
  arg0[0] = arg1[0] * arg2[0];
  arg0[1] = arg1[1] * arg2[1];
  return arg0;
}
function divide(arg0, arg1, arg2) {
  arg0[0] = arg1[0] / arg2[0];
  arg0[1] = arg1[1] / arg2[1];
  return arg0;
}
function distance(arg0, arg1) {
  const diff = arg1[0] - arg0[0];
  const diff1 = arg1[1] - arg0[1];
  return Math.sqrt(diff * diff + diff1 * diff1);
}
function squaredDistance(arg0, arg1) {
  const diff = arg1[0] - arg0[0];
  const diff1 = arg1[1] - arg0[1];
  return diff * diff + diff1 * diff1;
}
function length(arg0) {
  [tmp, tmp2] = arg0;
  return Math.sqrt(tmp * tmp + tmp2 * tmp2);
}
function squaredLength(arg0) {
  [tmp, tmp2] = arg0;
  return tmp * tmp + tmp2 * tmp2;
}
if (typeof WeakMap === "function") {
  const _WeakMap = WeakMap;
  const weakMap = new WeakMap();
  const _WeakMap2 = WeakMap;
  const weakMap1 = new WeakMap();
}
if (!ANGLE_ORDER) {
  const merged = Object.assign({ default: null });
  merged[0] = ANGLE_ORDER;
  let value = merged;
  if (null !== ANGLE_ORDER) {
    if ("object" == fn(ANGLE_ORDER)) {
      if (!weakMap) {
        value = merged;
        const keys = Object.keys();
        if (keys !== undefined) {
          value = merged;
          while (keys[tmp] !== undefined) {
            let tmp21 = "default" !== tmp10;
            if (!tmp21) {
              if (!tmp21) {
                continue;
              } else {
                let _Object = Object;
                let ownPropertyDescriptor = defineProperty;
                if (defineProperty) {
                  let _Object2 = Object;
                  ownPropertyDescriptor = Object.getOwnPropertyDescriptor(ANGLE_ORDER, tmp10);
                }
                if (!ownPropertyDescriptor) {
                  merged[tmp10] = ANGLE_ORDER[tmp10];
                  continue;
                } else {
                  let definePropertyResult1 = defineProperty(merged, tmp10, ownPropertyDescriptor);
                  continue;
                }
                continue;
              }
              continue;
            } else {
              let hasOwnProperty = {}.hasOwnProperty;
              let call = hasOwnProperty.call;
              let tmp11 = typeof call === "unknown" ? hasOwnProperty(tmp10) : call(ANGLE_ORDER, tmp10);
            }
          }
        }
      } else if (weakMap.has(ANGLE_ORDER)) {
        value = weakMap.get(ANGLE_ORDER);
      } else {
        let result = weakMap.set(ANGLE_ORDER, merged);
      }
    } else {
      value = merged;
    }
  }
} else {
  value = ANGLE_ORDER;
}
let closure_1 = value;
let aRRAY_TYPE = new value.ARRAY_TYPE(2);
if (value.ARRAY_TYPE != Float32Array) {
  aRRAY_TYPE[0] = 0;
  aRRAY_TYPE[1] = 0;
}

export const add = function add(arg0, arg1, arg2) {
  arg0[0] = arg1[0] + arg2[0];
  arg0[1] = arg1[1] + arg2[1];
  return arg0;
};
export const angle = function angle(arg0, arg1) {
  [tmp, tmp2] = arg0;
  [tmp3, tmp4] = arg1;
  return Math.abs(Math.atan2(tmp2 * tmp3 - tmp * tmp4, tmp * tmp3 + tmp2 * tmp4));
};
export const ceil = function ceil(arg0, arg1) {
  arg0[0] = Math.ceil(arg1[0]);
  arg0[1] = Math.ceil(arg1[1]);
  return arg0;
};
export const clone = function clone(arg0) {
  aRRAY_TYPE = new value.ARRAY_TYPE(2);
  aRRAY_TYPE[0] = arg0[0];
  aRRAY_TYPE[1] = arg0[1];
  return aRRAY_TYPE;
};
export const copy = function copy(arg0, arg1) {
  arg0[0] = arg1[0];
  arg0[1] = arg1[1];
  return arg0;
};
export const create = function create() {
  aRRAY_TYPE = new value.ARRAY_TYPE(2);
  if (value.ARRAY_TYPE != Float32Array) {
    aRRAY_TYPE[0] = 0;
    aRRAY_TYPE[1] = 0;
  }
  return aRRAY_TYPE;
};
export const cross = function cross(arg0, arg1, arg2) {
  arg0[1] = 0;
  arg0[0] = 0;
  arg0[2] = arg1[0] * arg2[1] - arg1[1] * arg2[0];
  return arg0;
};
export { distance };
export { divide };
export const dot = function dot(arg0, arg1) {
  return arg0[0] * arg1[0] + arg0[1] * arg1[1];
};
export const equals = function equals(arg0, arg1) {
  [tmp, tmp2] = arg0;
  [tmp3, tmp4] = arg1;
  const absolute = Math.abs(tmp - tmp3);
  const absolute1 = Math.abs(tmp);
  let tmp8 = absolute <= value.EPSILON * Math.max(1, absolute1, Math.abs(tmp3));
  if (tmp8) {
    const _Math = Math;
    const _Math2 = Math;
    const _Math3 = Math;
    const absolute2 = Math.abs(tmp2 - tmp4);
    const _Math4 = Math;
    const absolute3 = Math.abs(tmp2);
    tmp8 = absolute2 <= value.EPSILON * Math.max(1, absolute3, Math.abs(tmp4));
  }
  return tmp8;
};
export const exactEquals = function exactEquals(arg0, arg1) {
  return arg0[0] === arg1[0] && arg0[1] === arg1[1];
};
export const floor = function floor(arg0, arg1) {
  arg0[0] = Math.floor(arg1[0]);
  arg0[1] = Math.floor(arg1[1]);
  return arg0;
};
export const fromValues = function fromValues(arg0, arg1) {
  aRRAY_TYPE = new value.ARRAY_TYPE(2);
  aRRAY_TYPE[0] = arg0;
  aRRAY_TYPE[1] = arg1;
  return aRRAY_TYPE;
};
export const inverse = function inverse(arg0, arg1) {
  arg0[0] = 1 / arg1[0];
  arg0[1] = 1 / arg1[1];
  return arg0;
};
export { length };
export const lerp = function lerp(arg0, arg1, arg2, arg3) {
  [tmp, tmp2] = arg1;
  arg0[0] = tmp + arg3 * (arg2[0] - tmp);
  arg0[1] = tmp2 + arg3 * (arg2[1] - tmp2);
  return arg0;
};
export const max = function max(arg0, arg1, arg2) {
  arg0[0] = Math.max(arg1[0], arg2[0]);
  arg0[1] = Math.max(arg1[1], arg2[1]);
  return arg0;
};
export const min = function min(arg0, arg1, arg2) {
  arg0[0] = Math.min(arg1[0], arg2[0]);
  arg0[1] = Math.min(arg1[1], arg2[1]);
  return arg0;
};
export { multiply };
export const negate = function negate(arg0, arg1) {
  arg0[0] = -arg1[0];
  arg0[1] = -arg1[1];
  return arg0;
};
export const normalize = function normalize(arg0, arg1) {
  [tmp, tmp2] = arg1;
  const sum = tmp * tmp + tmp2 * tmp2;
  let result = sum;
  if (sum > 0) {
    const _Math = Math;
    result = 1 / Math.sqrt(sum);
  }
  arg0[0] = arg1[0] * result;
  arg0[1] = arg1[1] * result;
  return arg0;
};
export const random = function random(arg0, arg1) {
  let num = 1;
  if (undefined !== arg1) {
    num = arg1;
  }
  const result = 2 * value.RANDOM() * Math.PI;
  arg0[0] = Math.cos(result) * num;
  arg0[1] = Math.sin(result) * num;
  return arg0;
};
export const rotate = function rotate(arg0, arg1, arg2, sharedValue) {
  const diff = arg1[0] - arg2[0];
  const diff1 = arg1[1] - arg2[1];
  const sinResult = Math.sin(sharedValue);
  const cosResult = Math.cos(sharedValue);
  arg0[0] = diff * cosResult - diff1 * sinResult + arg2[0];
  arg0[1] = diff * sinResult + diff1 * cosResult + arg2[1];
  return arg0;
};
export const round = function round(arg0, arg1) {
  arg0[0] = value.round(arg1[0]);
  arg0[1] = value.round(arg1[1]);
  return arg0;
};
export const scale = function scale(arg0, arg1, arg2) {
  arg0[0] = arg1[0] * arg2;
  arg0[1] = arg1[1] * arg2;
  return arg0;
};
export const scaleAndAdd = function scaleAndAdd(arg0, arg1, arg2, arg3) {
  arg0[0] = arg1[0] + arg2[0] * arg3;
  arg0[1] = arg1[1] + arg2[1] * arg3;
  return arg0;
};
export const set = function set(arg0, arg1, arg2) {
  arg0[0] = arg1;
  arg0[1] = arg2;
  return arg0;
};
export const signedAngle = function signedAngle(arg0, arg1) {
  [tmp, tmp2] = arg0;
  [tmp3, tmp4] = arg1;
  return Math.atan2(tmp * tmp4 - tmp2 * tmp3, tmp * tmp3 + tmp2 * tmp4);
};
export { squaredDistance };
export { squaredLength };
export const str = function str(arg0) {
  return "vec2(" + arg0[0] + ", " + arg0[1] + ")";
};
export { subtract };
export const transformMat2 = function transformMat2(arg0, arg1, arg2) {
  [tmp, tmp2] = arg1;
  arg0[0] = arg2[0] * tmp + arg2[2] * tmp2;
  arg0[1] = arg2[1] * tmp + arg2[3] * tmp2;
  return arg0;
};
export const transformMat2d = function transformMat2d(arg0, arg1, arg2) {
  [tmp, tmp2] = arg1;
  arg0[0] = arg2[0] * tmp + arg2[2] * tmp2 + arg2[4];
  arg0[1] = arg2[1] * tmp + arg2[3] * tmp2 + arg2[5];
  return arg0;
};
export const transformMat3 = function transformMat3(arg0, arg1, arg2) {
  [tmp, tmp2] = arg1;
  arg0[0] = arg2[0] * tmp + arg2[3] * tmp2 + arg2[6];
  arg0[1] = arg2[1] * tmp + arg2[4] * tmp2 + arg2[7];
  return arg0;
};
export const transformMat4 = function transformMat4(arg0, arg1, arg2) {
  [tmp, tmp2] = arg1;
  arg0[0] = arg2[0] * tmp + arg2[4] * tmp2 + arg2[12];
  arg0[1] = arg2[1] * tmp + arg2[5] * tmp2 + arg2[13];
  return arg0;
};
export const zero = function zero(arg0) {
  arg0[0] = 0;
  arg0[1] = 0;
  return arg0;
};
export const len = length;
export const sub = subtract;
export const mul = multiply;
export const div = divide;
export const dist = distance;
export const sqrDist = squaredDistance;
export const sqrLen = squaredLength;
export const forEach = (arg0, arg1, arg2, arg3, fn, arg5) => {
  let num = arg1;
  if (!arg1) {
    num = 2;
  }
  let num2 = arg2;
  if (!arg2) {
    num2 = 0;
  }
  if (arg3) {
    const _Math = Math;
    let length = Math.min(arg3 * num + num2, arg0.length);
  } else {
    length = arg0.length;
  }
  if (num2 < length) {
    do {
      aRRAY_TYPE[0] = arg0[num2];
      aRRAY_TYPE[1] = arg0[num2 + 1];
      let tmp3 = fn(aRRAY_TYPE, aRRAY_TYPE, arg5);
      arg0[num2] = aRRAY_TYPE[0];
      arg0[num2 + 1] = aRRAY_TYPE[1];
      num2 = num2 + num;
    } while (num2 < length);
  }
  return arg0;
};
