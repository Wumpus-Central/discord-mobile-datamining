// === Module 13009: ? ===

// Module 13009
import ANGLE_ORDER from "ANGLE_ORDER" /* 13003 */;

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
function length(arg0) {
  [tmp, tmp2, tmp3] = arg0;
  return Math.sqrt(tmp * tmp + tmp2 * tmp2 + tmp3 * tmp3);
}
function subtract(arg0, arg1, arg2) {
  arg0[0] = arg1[0] - arg2[0];
  arg0[1] = arg1[1] - arg2[1];
  arg0[2] = arg1[2] - arg2[2];
  return arg0;
}
function multiply(arg0, arg1, arg2) {
  arg0[0] = arg1[0] * arg2[0];
  arg0[1] = arg1[1] * arg2[1];
  arg0[2] = arg1[2] * arg2[2];
  return arg0;
}
function divide(arg0, arg1, arg2) {
  arg0[0] = arg1[0] / arg2[0];
  arg0[1] = arg1[1] / arg2[1];
  arg0[2] = arg1[2] / arg2[2];
  return arg0;
}
function distance(arg0, arg1) {
  const diff = arg1[0] - arg0[0];
  const diff1 = arg1[1] - arg0[1];
  const diff2 = arg1[2] - arg0[2];
  return Math.sqrt(diff * diff + diff1 * diff1 + diff2 * diff2);
}
function squaredDistance(arg0, arg1) {
  const diff = arg1[0] - arg0[0];
  const diff1 = arg1[1] - arg0[1];
  const diff2 = arg1[2] - arg0[2];
  return diff * diff + diff1 * diff1 + diff2 * diff2;
}
function squaredLength(arg0) {
  [tmp, tmp2, tmp3] = arg0;
  return tmp * tmp + tmp2 * tmp2 + tmp3 * tmp3;
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
let aRRAY_TYPE = new value.ARRAY_TYPE(3);
if (value.ARRAY_TYPE != Float32Array) {
  aRRAY_TYPE[0] = 0;
  aRRAY_TYPE[1] = 0;
  aRRAY_TYPE[2] = 0;
}

export const add = function add(arg0, arg1, arg2) {
  arg0[0] = arg1[0] + arg2[0];
  arg0[1] = arg1[1] + arg2[1];
  arg0[2] = arg1[2] + arg2[2];
  return arg0;
};
export const angle = function angle(arg0, arg1) {
  [tmp, tmp2, tmp3] = arg0;
  [tmp4, tmp5, tmp6] = arg1;
  const sqrtResult = Math.sqrt((tmp * tmp + tmp2 * tmp2 + tmp3 * tmp3) * (tmp4 * tmp4 + tmp5 * tmp5 + tmp6 * tmp6));
  let result = sqrtResult;
  if (sqrtResult) {
    result = (arg0[0] * arg1[0] + arg0[1] * arg1[1] + arg0[2] * arg1[2]) / sqrtResult;
  }
  return Math.acos(Math.min(Math.max(result, -1), 1));
};
export const bezier = function bezier(arg0, arg1, arg2, arg3, arg4, arg5) {
  const diff = 1 - arg5;
  const result = diff * diff;
  const result1 = arg5 * arg5;
  const result2 = result * diff;
  const result3 = 3 * arg5 * result;
  const result4 = 3 * result1 * diff;
  const result5 = result1 * arg5;
  arg0[0] = arg1[0] * result2 + arg2[0] * result3 + arg3[0] * result4 + arg4[0] * result5;
  arg0[1] = arg1[1] * result2 + arg2[1] * result3 + arg3[1] * result4 + arg4[1] * result5;
  arg0[2] = arg1[2] * result2 + arg2[2] * result3 + arg3[2] * result4 + arg4[2] * result5;
  return arg0;
};
export const ceil = function ceil(arg0, arg1) {
  arg0[0] = Math.ceil(arg1[0]);
  arg0[1] = Math.ceil(arg1[1]);
  arg0[2] = Math.ceil(arg1[2]);
  return arg0;
};
export const clone = function clone(arg0) {
  aRRAY_TYPE = new value.ARRAY_TYPE(3);
  aRRAY_TYPE[0] = arg0[0];
  aRRAY_TYPE[1] = arg0[1];
  aRRAY_TYPE[2] = arg0[2];
  return aRRAY_TYPE;
};
export const copy = function copy(arg0, arg1) {
  arg0[0] = arg1[0];
  arg0[1] = arg1[1];
  arg0[2] = arg1[2];
  return arg0;
};
export const create = function create() {
  aRRAY_TYPE = new value.ARRAY_TYPE(3);
  if (value.ARRAY_TYPE != Float32Array) {
    aRRAY_TYPE[0] = 0;
    aRRAY_TYPE[1] = 0;
    aRRAY_TYPE[2] = 0;
  }
  return aRRAY_TYPE;
};
export const cross = function cross(arg0, arg1, arg2) {
  [tmp, tmp2, tmp3] = arg1;
  [tmp4, tmp5, tmp6] = arg2;
  arg0[0] = tmp2 * tmp6 - tmp3 * tmp5;
  arg0[1] = tmp3 * tmp4 - tmp * tmp6;
  arg0[2] = tmp * tmp5 - tmp2 * tmp4;
  return arg0;
};
export { distance };
export { divide };
export const dot = function dot(arg0, arg1) {
  return arg0[0] * arg1[0] + arg0[1] * arg1[1] + arg0[2] * arg1[2];
};
export const equals = function equals(arg0, arg1) {
  [tmp, tmp2, tmp3] = arg0;
  [tmp4, tmp5, tmp6] = arg1;
  const absolute = Math.abs(tmp - tmp4);
  const absolute1 = Math.abs(tmp);
  let tmp10 = absolute <= value.EPSILON * Math.max(1, absolute1, Math.abs(tmp4));
  if (tmp10) {
    const _Math = Math;
    const _Math2 = Math;
    const _Math3 = Math;
    const absolute2 = Math.abs(tmp2 - tmp5);
    const _Math4 = Math;
    const absolute3 = Math.abs(tmp2);
    tmp10 = absolute2 <= value.EPSILON * Math.max(1, absolute3, Math.abs(tmp5));
  }
  if (tmp10) {
    const _Math5 = Math;
    const _Math6 = Math;
    const _Math7 = Math;
    const absolute4 = Math.abs(tmp3 - tmp6);
    const _Math8 = Math;
    const absolute5 = Math.abs(tmp3);
    tmp10 = absolute4 <= value.EPSILON * Math.max(1, absolute5, Math.abs(tmp6));
  }
  return tmp10;
};
export const exactEquals = function exactEquals(arg0, arg1) {
  return arg0[0] === arg1[0] && arg0[1] === arg1[1] && arg0[2] === arg1[2];
};
export const floor = function floor(arg0, arg1) {
  arg0[0] = Math.floor(arg1[0]);
  arg0[1] = Math.floor(arg1[1]);
  arg0[2] = Math.floor(arg1[2]);
  return arg0;
};
export const fromValues = function fromValues(arg0, arg1, arg2) {
  aRRAY_TYPE = new value.ARRAY_TYPE(3);
  aRRAY_TYPE[0] = arg0;
  aRRAY_TYPE[1] = arg1;
  aRRAY_TYPE[2] = arg2;
  return aRRAY_TYPE;
};
export const hermite = function hermite(arg0, arg1, arg2, arg3, arg4, arg5) {
  const result = arg5 * arg5;
  const sum = result * (2 * arg5 - 3) + 1;
  const sum1 = result * (arg5 - 2) + arg5;
  const result1 = result * (arg5 - 1);
  const result2 = result * (3 - 2 * arg5);
  arg0[0] = arg1[0] * sum + arg2[0] * sum1 + arg3[0] * result1 + arg4[0] * result2;
  arg0[1] = arg1[1] * sum + arg2[1] * sum1 + arg3[1] * result1 + arg4[1] * result2;
  arg0[2] = arg1[2] * sum + arg2[2] * sum1 + arg3[2] * result1 + arg4[2] * result2;
  return arg0;
};
export const inverse = function inverse(arg0, arg1) {
  arg0[0] = 1 / arg1[0];
  arg0[1] = 1 / arg1[1];
  arg0[2] = 1 / arg1[2];
  return arg0;
};
export { length };
export const lerp = function lerp(arg0, arg1, arg2, arg3) {
  [tmp, tmp2, tmp3] = arg1;
  arg0[0] = tmp + arg3 * (arg2[0] - tmp);
  arg0[1] = tmp2 + arg3 * (arg2[1] - tmp2);
  arg0[2] = tmp3 + arg3 * (arg2[2] - tmp3);
  return arg0;
};
export const max = function max(arg0, arg1, arg2) {
  arg0[0] = Math.max(arg1[0], arg2[0]);
  arg0[1] = Math.max(arg1[1], arg2[1]);
  arg0[2] = Math.max(arg1[2], arg2[2]);
  return arg0;
};
export const min = function min(arg0, arg1, arg2) {
  arg0[0] = Math.min(arg1[0], arg2[0]);
  arg0[1] = Math.min(arg1[1], arg2[1]);
  arg0[2] = Math.min(arg1[2], arg2[2]);
  return arg0;
};
export { multiply };
export const negate = function negate(arg0, arg1) {
  arg0[0] = -arg1[0];
  arg0[1] = -arg1[1];
  arg0[2] = -arg1[2];
  return arg0;
};
export const normalize = function normalize(arg0, arg1) {
  [tmp, tmp2, tmp3] = arg1;
  const sum = tmp * tmp + tmp2 * tmp2 + tmp3 * tmp3;
  let result = sum;
  if (sum > 0) {
    const _Math = Math;
    result = 1 / Math.sqrt(sum);
  }
  arg0[0] = arg1[0] * result;
  arg0[1] = arg1[1] * result;
  arg0[2] = arg1[2] * result;
  return arg0;
};
export const random = function random(arg0, arg1) {
  let num = 1;
  if (undefined !== arg1) {
    num = arg1;
  }
  const result = 2 * value.RANDOM() * Math.PI;
  const diff = 2 * value.RANDOM() - 1;
  const result1 = Math.sqrt(1 - diff * diff) * num;
  arg0[0] = Math.cos(result) * result1;
  arg0[1] = Math.sin(result) * result1;
  arg0[2] = diff * num;
  return arg0;
};
export const rotateX = function rotateX(arg0, arg1, arg2, sharedValue) {
  const items = [];
  const items1 = [];
  items[0] = arg1[0] - arg2[0];
  items[1] = arg1[1] - arg2[1];
  items[2] = arg1[2] - arg2[2];
  items1[0] = items[0];
  const result = items[1] * Math.cos(sharedValue);
  items1[1] = result - items[2] * Math.sin(sharedValue);
  const result1 = items[1] * Math.sin(sharedValue);
  items1[2] = result1 + items[2] * Math.cos(sharedValue);
  arg0[0] = items1[0] + arg2[0];
  arg0[1] = items1[1] + arg2[1];
  arg0[2] = items1[2] + arg2[2];
  return arg0;
};
export const rotateY = function rotateY(arg0, arg1, arg2, sharedValue) {
  const items = [];
  const items1 = [];
  items[0] = arg1[0] - arg2[0];
  items[1] = arg1[1] - arg2[1];
  items[2] = arg1[2] - arg2[2];
  const result = items[2] * Math.sin(sharedValue);
  items1[0] = result + items[0] * Math.cos(sharedValue);
  items1[1] = items[1];
  const result1 = items[2] * Math.cos(sharedValue);
  items1[2] = result1 - items[0] * Math.sin(sharedValue);
  arg0[0] = items1[0] + arg2[0];
  arg0[1] = items1[1] + arg2[1];
  arg0[2] = items1[2] + arg2[2];
  return arg0;
};
export const rotateZ = function rotateZ(arg0, arg1, arg2, sharedValue) {
  const items = [];
  const items1 = [];
  items[0] = arg1[0] - arg2[0];
  items[1] = arg1[1] - arg2[1];
  items[2] = arg1[2] - arg2[2];
  const result = items[0] * Math.cos(sharedValue);
  items1[0] = result - items[1] * Math.sin(sharedValue);
  const result1 = items[0] * Math.sin(sharedValue);
  items1[1] = result1 + items[1] * Math.cos(sharedValue);
  items1[2] = items[2];
  arg0[0] = items1[0] + arg2[0];
  arg0[1] = items1[1] + arg2[1];
  arg0[2] = items1[2] + arg2[2];
  return arg0;
};
export const round = function round(arg0, arg1) {
  arg0[0] = value.round(arg1[0]);
  arg0[1] = value.round(arg1[1]);
  arg0[2] = value.round(arg1[2]);
  return arg0;
};
export const scale = function scale(arg0, arg1, arg2) {
  arg0[0] = arg1[0] * arg2;
  arg0[1] = arg1[1] * arg2;
  arg0[2] = arg1[2] * arg2;
  return arg0;
};
export const scaleAndAdd = function scaleAndAdd(arg0, arg1, arg2, arg3) {
  arg0[0] = arg1[0] + arg2[0] * arg3;
  arg0[1] = arg1[1] + arg2[1] * arg3;
  arg0[2] = arg1[2] + arg2[2] * arg3;
  return arg0;
};
export const set = function set(arg0, arg1, arg2, arg3) {
  arg0[0] = arg1;
  arg0[1] = arg2;
  arg0[2] = arg3;
  return arg0;
};
export const slerp = function slerp(arg0, arg1, arg2, arg3) {
  const acosResult = Math.acos(Math.min(Math.max(arg1[0] * arg2[0] + arg1[1] * arg2[1] + arg1[2] * arg2[2], -1), 1));
  const sinResult = Math.sin(acosResult);
  const result = Math.sin((1 - arg3) * acosResult) / sinResult;
  const result1 = Math.sin(arg3 * acosResult) / sinResult;
  arg0[0] = result * arg1[0] + result1 * arg2[0];
  arg0[1] = result * arg1[1] + result1 * arg2[1];
  arg0[2] = result * arg1[2] + result1 * arg2[2];
  return arg0;
};
export { squaredDistance };
export { squaredLength };
export const str = function str(arg0) {
  return "vec3(" + arg0[0] + ", " + arg0[1] + ", " + arg0[2] + ")";
};
export { subtract };
export const transformMat3 = function transformMat3(arg0, arg1, arg2) {
  [tmp, tmp2, tmp3] = arg1;
  arg0[0] = tmp * arg2[0] + tmp2 * arg2[3] + tmp3 * arg2[6];
  arg0[1] = tmp * arg2[1] + tmp2 * arg2[4] + tmp3 * arg2[7];
  arg0[2] = tmp * arg2[2] + tmp2 * arg2[5] + tmp3 * arg2[8];
  return arg0;
};
export const transformMat4 = function transformMat4(arg0, arg1, arg2) {
  [tmp, tmp2, tmp3] = arg1;
  const tmp4 = arg2[3] * tmp + arg2[7] * tmp2 + arg2[11] * tmp3 + arg2[15] || 1;
  arg0[0] = (arg2[0] * tmp + arg2[4] * tmp2 + arg2[8] * tmp3 + arg2[12]) / tmp4;
  arg0[1] = (arg2[1] * tmp + arg2[5] * tmp2 + arg2[9] * tmp3 + arg2[13]) / tmp4;
  arg0[2] = (arg2[2] * tmp + arg2[6] * tmp2 + arg2[10] * tmp3 + arg2[14]) / tmp4;
  return arg0;
};
export const transformQuat = function transformQuat(arg0, arg1, arg2) {
  [tmp, tmp2, tmp3, tmp4] = arg2;
  [tmp5, tmp6, tmp7] = arg1;
  const diff = tmp2 * tmp7 - tmp3 * tmp6;
  const diff1 = tmp3 * tmp5 - tmp * tmp7;
  const diff2 = tmp * tmp6 - tmp2 * tmp5;
  const sum = diff + diff;
  const sum1 = diff1 + diff1;
  const sum2 = diff2 + diff2;
  arg0[0] = tmp5 + tmp4 * sum + tmp2 * sum2 - tmp3 * sum1;
  arg0[1] = tmp6 + tmp4 * sum1 + tmp3 * sum - tmp * sum2;
  arg0[2] = tmp7 + tmp4 * sum2 + tmp * sum1 - tmp2 * sum;
  return arg0;
};
export const zero = function zero(arg0) {
  arg0[0] = 0;
  arg0[1] = 0;
  arg0[2] = 0;
  return arg0;
};
export const sub = subtract;
export const mul = multiply;
export const div = divide;
export const dist = distance;
export const sqrDist = squaredDistance;
export const len = length;
export const sqrLen = squaredLength;
export const forEach = (arg0, arg1, arg2, arg3, fn, arr) => {
  let num = arg1;
  if (!arg1) {
    num = 3;
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
      aRRAY_TYPE[2] = arg0[num2 + 2];
      let tmp3 = fn(aRRAY_TYPE, aRRAY_TYPE, arr);
      arg0[num2] = aRRAY_TYPE[0];
      arg0[num2 + 1] = aRRAY_TYPE[1];
      arg0[num2 + 2] = aRRAY_TYPE[2];
      num2 = num2 + num;
    } while (num2 < length);
  }
  return arg0;
};