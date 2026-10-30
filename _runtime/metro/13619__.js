// === Module 13619: ? ===

// Module 13619
import ANGLE_ORDER from "ANGLE_ORDER" /* 13617 */;

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
function multiply(arg0, arg1, arg2) {
  [tmp, tmp2, tmp3, tmp4] = arg1;
  [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = arg2;
  arg0[0] = tmp * tmp5 + tmp3 * tmp6;
  arg0[1] = tmp2 * tmp5 + tmp4 * tmp6;
  arg0[2] = tmp * tmp7 + tmp3 * tmp8;
  arg0[3] = tmp2 * tmp7 + tmp4 * tmp8;
  arg0[4] = tmp * tmp9 + tmp3 * tmp10 + arg1[4];
  arg0[5] = tmp2 * tmp9 + tmp4 * tmp10 + arg1[5];
  return arg0;
}
function subtract(arg0, arg1, arg2) {
  arg0[0] = arg1[0] - arg2[0];
  arg0[1] = arg1[1] - arg2[1];
  arg0[2] = arg1[2] - arg2[2];
  arg0[3] = arg1[3] - arg2[3];
  arg0[4] = arg1[4] - arg2[4];
  arg0[5] = arg1[5] - arg2[5];
  return arg0;
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
            let tmp20 = "default" !== tmp10;
            if (!tmp20) {
              if (!tmp20) {
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

export function add(arg0, arg1, arg2) {
  arg0[0] = arg1[0] + arg2[0];
  arg0[1] = arg1[1] + arg2[1];
  arg0[2] = arg1[2] + arg2[2];
  arg0[3] = arg1[3] + arg2[3];
  arg0[4] = arg1[4] + arg2[4];
  arg0[5] = arg1[5] + arg2[5];
  return arg0;
}
export function clone(arg0) {
  const aRRAY_TYPE = new value.ARRAY_TYPE(6);
  aRRAY_TYPE[0] = arg0[0];
  aRRAY_TYPE[1] = arg0[1];
  aRRAY_TYPE[2] = arg0[2];
  aRRAY_TYPE[3] = arg0[3];
  aRRAY_TYPE[4] = arg0[4];
  aRRAY_TYPE[5] = arg0[5];
  return aRRAY_TYPE;
}
export function copy(arg0, arg1) {
  arg0[0] = arg1[0];
  arg0[1] = arg1[1];
  arg0[2] = arg1[2];
  arg0[3] = arg1[3];
  arg0[4] = arg1[4];
  arg0[5] = arg1[5];
  return arg0;
}
export function create() {
  const aRRAY_TYPE = new value.ARRAY_TYPE(6);
  if (value.ARRAY_TYPE != Float32Array) {
    aRRAY_TYPE[1] = 0;
    aRRAY_TYPE[2] = 0;
    aRRAY_TYPE[4] = 0;
    aRRAY_TYPE[5] = 0;
  }
  aRRAY_TYPE[0] = 1;
  aRRAY_TYPE[3] = 1;
  return aRRAY_TYPE;
}
export function determinant(arg0) {
  return arg0[0] * arg0[3] - arg0[1] * arg0[2];
}
export function equals(arg0, arg1) {
  [tmp, tmp2, tmp3, tmp4, tmp5, tmp6] = arg0;
  [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = arg1;
  const absolute = Math.abs(tmp - tmp7);
  const absolute1 = Math.abs(tmp);
  let tmp16 = absolute <= value.EPSILON * Math.max(1, absolute1, Math.abs(tmp7));
  if (tmp16) {
    const _Math = Math;
    const _Math2 = Math;
    const _Math3 = Math;
    const absolute2 = Math.abs(tmp2 - tmp8);
    const _Math4 = Math;
    const absolute3 = Math.abs(tmp2);
    tmp16 = absolute2 <= value.EPSILON * Math.max(1, absolute3, Math.abs(tmp8));
  }
  if (tmp16) {
    const _Math5 = Math;
    const _Math6 = Math;
    const _Math7 = Math;
    const absolute4 = Math.abs(tmp3 - tmp9);
    const _Math8 = Math;
    const absolute5 = Math.abs(tmp3);
    tmp16 = absolute4 <= value.EPSILON * Math.max(1, absolute5, Math.abs(tmp9));
  }
  if (tmp16) {
    const _Math9 = Math;
    const _Math10 = Math;
    const _Math11 = Math;
    const absolute6 = Math.abs(tmp4 - tmp10);
    const _Math12 = Math;
    const absolute7 = Math.abs(tmp4);
    tmp16 = absolute6 <= value.EPSILON * Math.max(1, absolute7, Math.abs(tmp10));
  }
  if (tmp16) {
    const _Math13 = Math;
    const _Math14 = Math;
    const _Math15 = Math;
    const absolute8 = Math.abs(tmp5 - tmp11);
    const _Math16 = Math;
    const absolute9 = Math.abs(tmp5);
    tmp16 = absolute8 <= value.EPSILON * Math.max(1, absolute9, Math.abs(tmp11));
  }
  if (tmp16) {
    const _Math17 = Math;
    const _Math18 = Math;
    const _Math19 = Math;
    const absolute10 = Math.abs(tmp6 - tmp12);
    const _Math20 = Math;
    const absolute11 = Math.abs(tmp6);
    tmp16 = absolute10 <= value.EPSILON * Math.max(1, absolute11, Math.abs(tmp12));
  }
  return tmp16;
}
export function exactEquals(arg0, arg1) {
  return arg0[0] === arg1[0] && arg0[1] === arg1[1] && arg0[2] === arg1[2] && arg0[3] === arg1[3] && arg0[4] === arg1[4] && arg0[5] === arg1[5];
}
export function frob(arg0) {
  return Math.sqrt(arg0[0] * arg0[0] + arg0[1] * arg0[1] + arg0[2] * arg0[2] + arg0[3] * arg0[3] + arg0[4] * arg0[4] + arg0[5] * arg0[5] + 1);
}
export function fromRotation(arg0, result1) {
  const sinResult = Math.sin(result1);
  const cosResult = Math.cos(result1);
  arg0[0] = cosResult;
  arg0[1] = sinResult;
  arg0[2] = -sinResult;
  arg0[3] = cosResult;
  arg0[4] = 0;
  arg0[5] = 0;
  return arg0;
}
export function fromScaling(arg0, arg1) {
  arg0[0] = arg1[0];
  arg0[1] = 0;
  arg0[2] = 0;
  arg0[3] = arg1[1];
  arg0[4] = 0;
  arg0[5] = 0;
  return arg0;
}
export function fromTranslation(arg0, arg1) {
  arg0[0] = 1;
  arg0[1] = 0;
  arg0[2] = 0;
  arg0[3] = 1;
  arg0[4] = arg1[0];
  arg0[5] = arg1[1];
  return arg0;
}
export function fromValues(arg0, arg1, arg2, arg3, arg4, arg5) {
  const aRRAY_TYPE = new value.ARRAY_TYPE(6);
  aRRAY_TYPE[0] = arg0;
  aRRAY_TYPE[1] = arg1;
  aRRAY_TYPE[2] = arg2;
  aRRAY_TYPE[3] = arg3;
  aRRAY_TYPE[4] = arg4;
  aRRAY_TYPE[5] = arg5;
  return aRRAY_TYPE;
}
export function identity(arg0) {
  arg0[0] = 1;
  arg0[1] = 0;
  arg0[2] = 0;
  arg0[3] = 1;
  arg0[4] = 0;
  arg0[5] = 0;
  return arg0;
}
export function invert(arg0, arg1) {
  [tmp, tmp2, tmp3, tmp4, tmp5, tmp6] = arg1;
  const diff = tmp * tmp4 - tmp2 * tmp3;
  if (diff) {
    const result = 1 / diff;
    arg0[0] = tmp4 * result;
    arg0[1] = -tmp2 * result;
    arg0[2] = -tmp3 * result;
    arg0[3] = tmp * result;
    arg0[4] = (tmp3 * tmp6 - tmp4 * tmp5) * result;
    arg0[5] = (tmp2 * tmp5 - tmp * tmp6) * result;
    return arg0;
  } else {
    return null;
  }
}
export { multiply };
export function multiplyScalar(arg0, arg1, arg2) {
  arg0[0] = arg1[0] * arg2;
  arg0[1] = arg1[1] * arg2;
  arg0[2] = arg1[2] * arg2;
  arg0[3] = arg1[3] * arg2;
  arg0[4] = arg1[4] * arg2;
  arg0[5] = arg1[5] * arg2;
  return arg0;
}
export function multiplyScalarAndAdd(arg0, arg1, arg2, arg3) {
  arg0[0] = arg1[0] + arg2[0] * arg3;
  arg0[1] = arg1[1] + arg2[1] * arg3;
  arg0[2] = arg1[2] + arg2[2] * arg3;
  arg0[3] = arg1[3] + arg2[3] * arg3;
  arg0[4] = arg1[4] + arg2[4] * arg3;
  arg0[5] = arg1[5] + arg2[5] * arg3;
  return arg0;
}
export function rotate(arg0, arg1, result1) {
  [tmp, tmp2, tmp3, tmp4] = arg1;
  const sinResult = Math.sin(result1);
  const cosResult = Math.cos(result1);
  arg0[0] = tmp * cosResult + tmp3 * sinResult;
  arg0[1] = tmp2 * cosResult + tmp4 * sinResult;
  arg0[2] = tmp * -sinResult + tmp3 * cosResult;
  arg0[3] = tmp2 * -sinResult + tmp4 * cosResult;
  arg0[4] = arg1[4];
  arg0[5] = arg1[5];
  return arg0;
}
export function scale(arg0, arg1, arg2) {
  [tmp, tmp2] = arg2;
  arg0[0] = arg1[0] * tmp;
  arg0[1] = arg1[1] * tmp;
  arg0[2] = arg1[2] * tmp2;
  arg0[3] = arg1[3] * tmp2;
  arg0[4] = arg1[4];
  arg0[5] = arg1[5];
  return arg0;
}
export function set(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
  arg0[0] = arg1;
  arg0[1] = arg2;
  arg0[2] = arg3;
  arg0[3] = arg4;
  arg0[4] = arg5;
  arg0[5] = arg6;
  return arg0;
}
export function str(arg0) {
  return "mat2d(" + arg0[0] + ", " + arg0[1] + ", " + arg0[2] + ", " + arg0[3] + ", " + arg0[4] + ", " + arg0[5] + ")";
}
export { subtract };
export function translate(arg0, arg1, arg2) {
  [tmp, tmp2, tmp3, tmp4] = arg1;
  [tmp5, tmp6] = arg2;
  arg0[0] = tmp;
  arg0[1] = tmp2;
  arg0[2] = tmp3;
  arg0[3] = tmp4;
  arg0[4] = tmp * tmp5 + tmp3 * tmp6 + arg1[4];
  arg0[5] = tmp2 * tmp5 + tmp4 * tmp6 + arg1[5];
  return arg0;
}
export const mul = multiply;
export const sub = subtract;