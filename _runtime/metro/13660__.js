// _runtime/metro/13660__.js
import ANGLE_ORDER2 from "../13652_ANGLE_ORDER.js";
import _mod13656 from "13656__.js";
import _mod13657 from "13657__.js";

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
function multiply(arg0, arg1, arg2) {
  [tmp, tmp2, tmp3, tmp4] = arg1;
  [tmp13, tmp14, tmp15, tmp16] = arg2;
  arg0[0] = tmp * tmp16 + tmp4 * tmp13 + tmp2 * tmp15 - tmp3 * tmp14;
  arg0[1] = tmp2 * tmp16 + tmp4 * tmp14 + tmp3 * tmp13 - tmp * tmp15;
  arg0[2] = tmp3 * tmp16 + tmp4 * tmp15 + tmp * tmp14 - tmp2 * tmp13;
  arg0[3] = tmp4 * tmp16 - tmp * tmp13 - tmp2 * tmp14 - tmp3 * tmp15;
  arg0[4] =
    tmp * arg2[7] +
    tmp4 * arg2[4] +
    tmp2 * arg2[6] -
    tmp3 * arg2[5] +
    arg1[4] * tmp16 +
    arg1[7] * tmp13 +
    arg1[5] * tmp15 -
    arg1[6] * tmp14;
  arg0[5] =
    tmp2 * arg2[7] +
    tmp4 * arg2[5] +
    tmp3 * arg2[4] -
    tmp * arg2[6] +
    arg1[5] * tmp16 +
    arg1[7] * tmp14 +
    arg1[6] * tmp13 -
    arg1[4] * tmp15;
  arg0[6] =
    tmp3 * arg2[7] +
    tmp4 * arg2[6] +
    tmp * arg2[5] -
    tmp2 * arg2[4] +
    arg1[6] * tmp16 +
    arg1[7] * tmp15 +
    arg1[4] * tmp14 -
    arg1[5] * tmp13;
  arg0[7] =
    tmp4 * arg2[7] -
    tmp * arg2[4] -
    tmp2 * arg2[5] -
    tmp3 * arg2[6] +
    arg1[7] * tmp16 -
    arg1[4] * tmp13 -
    arg1[5] * tmp14 -
    arg1[6] * tmp15;
  return arg0;
}
const ANGLE_ORDER = _interopRequireWildcard(ANGLE_ORDER2);
_interopRequireWildcard(_mod13657);
const _typeof = _interopRequireWildcard(_mod13656);
({ copy: exports.getReal, copy: exports.setReal } = _typeof);
const dot = _typeof.dot;
const squaredLength = _typeof.squaredLength;

export function add(arg0, arg1, arg2) {
  arg0[0] = arg1[0] + arg2[0];
  arg0[1] = arg1[1] + arg2[1];
  arg0[2] = arg1[2] + arg2[2];
  arg0[3] = arg1[3] + arg2[3];
  arg0[4] = arg1[4] + arg2[4];
  arg0[5] = arg1[5] + arg2[5];
  arg0[6] = arg1[6] + arg2[6];
  arg0[7] = arg1[7] + arg2[7];
  return arg0;
}
export function clone(arg0) {
  const aRRAY_TYPE = new ANGLE_ORDER.ARRAY_TYPE(8);
  aRRAY_TYPE[0] = arg0[0];
  aRRAY_TYPE[1] = arg0[1];
  aRRAY_TYPE[2] = arg0[2];
  aRRAY_TYPE[3] = arg0[3];
  aRRAY_TYPE[4] = arg0[4];
  aRRAY_TYPE[5] = arg0[5];
  aRRAY_TYPE[6] = arg0[6];
  aRRAY_TYPE[7] = arg0[7];
  return aRRAY_TYPE;
}
export function conjugate(arg0, arg1) {
  arg0[0] = -arg1[0];
  arg0[1] = -arg1[1];
  arg0[2] = -arg1[2];
  arg0[3] = arg1[3];
  arg0[4] = -arg1[4];
  arg0[5] = -arg1[5];
  arg0[6] = -arg1[6];
  arg0[7] = arg1[7];
  return arg0;
}
export function copy(arg0, arg1) {
  arg0[0] = arg1[0];
  arg0[1] = arg1[1];
  arg0[2] = arg1[2];
  arg0[3] = arg1[3];
  arg0[4] = arg1[4];
  arg0[5] = arg1[5];
  arg0[6] = arg1[6];
  arg0[7] = arg1[7];
  return arg0;
}
export function create() {
  const aRRAY_TYPE = new ANGLE_ORDER.ARRAY_TYPE(8);
  if (ANGLE_ORDER.ARRAY_TYPE != Float32Array) {
    aRRAY_TYPE[0] = 0;
    aRRAY_TYPE[1] = 0;
    aRRAY_TYPE[2] = 0;
    aRRAY_TYPE[4] = 0;
    aRRAY_TYPE[5] = 0;
    aRRAY_TYPE[6] = 0;
    aRRAY_TYPE[7] = 0;
  }
  aRRAY_TYPE[3] = 1;
  return aRRAY_TYPE;
}
export function equals(arg0, arg1) {
  [tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8] = arg0;
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = arg1;
  const absolute = Math.abs(tmp - tmp9);
  const absolute1 = Math.abs(tmp);
  let tmp20 = absolute <= ANGLE_ORDER.EPSILON * Math.max(1, absolute1, Math.abs(tmp9));
  if (tmp20) {
    const _Math = Math;
    const _Math2 = Math;
    const _Math3 = Math;
    const absolute2 = Math.abs(tmp2 - tmp10);
    const _Math4 = Math;
    const absolute3 = Math.abs(tmp2);
    tmp20 = absolute2 <= ANGLE_ORDER.EPSILON * Math.max(1, absolute3, Math.abs(tmp10));
  }
  if (tmp20) {
    const _Math5 = Math;
    const _Math6 = Math;
    const _Math7 = Math;
    const absolute4 = Math.abs(tmp3 - tmp11);
    const _Math8 = Math;
    const absolute5 = Math.abs(tmp3);
    tmp20 = absolute4 <= ANGLE_ORDER.EPSILON * Math.max(1, absolute5, Math.abs(tmp11));
  }
  if (tmp20) {
    const _Math9 = Math;
    const _Math10 = Math;
    const _Math11 = Math;
    const absolute6 = Math.abs(tmp4 - tmp12);
    const _Math12 = Math;
    const absolute7 = Math.abs(tmp4);
    tmp20 = absolute6 <= ANGLE_ORDER.EPSILON * Math.max(1, absolute7, Math.abs(tmp12));
  }
  if (tmp20) {
    const _Math13 = Math;
    const _Math14 = Math;
    const _Math15 = Math;
    const absolute8 = Math.abs(tmp5 - tmp13);
    const _Math16 = Math;
    const absolute9 = Math.abs(tmp5);
    tmp20 = absolute8 <= ANGLE_ORDER.EPSILON * Math.max(1, absolute9, Math.abs(tmp13));
  }
  if (tmp20) {
    const _Math17 = Math;
    const _Math18 = Math;
    const _Math19 = Math;
    const absolute10 = Math.abs(tmp6 - tmp14);
    const _Math20 = Math;
    const absolute11 = Math.abs(tmp6);
    tmp20 = absolute10 <= ANGLE_ORDER.EPSILON * Math.max(1, absolute11, Math.abs(tmp14));
  }
  if (tmp20) {
    const _Math21 = Math;
    const _Math22 = Math;
    const _Math23 = Math;
    const absolute12 = Math.abs(tmp7 - tmp15);
    const _Math24 = Math;
    const absolute13 = Math.abs(tmp7);
    tmp20 = absolute12 <= ANGLE_ORDER.EPSILON * Math.max(1, absolute13, Math.abs(tmp15));
  }
  if (tmp20) {
    const _Math25 = Math;
    const _Math26 = Math;
    const _Math27 = Math;
    const absolute14 = Math.abs(tmp8 - tmp16);
    const _Math28 = Math;
    const absolute15 = Math.abs(tmp8);
    tmp20 = absolute14 <= ANGLE_ORDER.EPSILON * Math.max(1, absolute15, Math.abs(tmp16));
  }
  return tmp20;
}
export function exactEquals(arg0, arg1) {
  return (
    arg0[0] === arg1[0] &&
    arg0[1] === arg1[1] &&
    arg0[2] === arg1[2] &&
    arg0[3] === arg1[3] &&
    arg0[4] === arg1[4] &&
    arg0[5] === arg1[5] &&
    arg0[6] === arg1[6] &&
    arg0[7] === arg1[7]
  );
}
export function fromMat4(arg0, arg1) {
  const obj = _typeof.create();
  const rotation = _typeof.getRotation(obj, arg1);
  const aRRAY_TYPE = new ANGLE_ORDER.ARRAY_TYPE(3);
  const translation = _typeof.getTranslation(aRRAY_TYPE, arg1);
  const result = 0.5 * aRRAY_TYPE[0];
  const result1 = 0.5 * aRRAY_TYPE[1];
  const result2 = 0.5 * aRRAY_TYPE[2];
  [tmp8, tmp9, tmp10, tmp11] = obj;
  arg0[0] = tmp8;
  arg0[1] = tmp9;
  arg0[2] = tmp10;
  arg0[3] = tmp11;
  arg0[4] = result * tmp11 + result1 * tmp10 - result2 * tmp9;
  arg0[5] = result1 * tmp11 + result2 * tmp8 - result * tmp10;
  arg0[6] = result2 * tmp11 + result * tmp9 - result1 * tmp8;
  arg0[7] = -result * tmp8 - result1 * tmp9 - result2 * tmp10;
  return arg0;
}
export function fromRotation(arg0, arg1) {
  arg0[0] = arg1[0];
  arg0[1] = arg1[1];
  arg0[2] = arg1[2];
  arg0[3] = arg1[3];
  arg0[4] = 0;
  arg0[5] = 0;
  arg0[6] = 0;
  arg0[7] = 0;
  return arg0;
}
export function fromRotationTranslation(arg0, arg1, arg2) {
  const result = 0.5 * arg2[0];
  const result1 = 0.5 * arg2[1];
  const result2 = 0.5 * arg2[2];
  [tmp4, tmp5, tmp6, tmp7] = arg1;
  arg0[0] = tmp4;
  arg0[1] = tmp5;
  arg0[2] = tmp6;
  arg0[3] = tmp7;
  arg0[4] = result * tmp7 + result1 * tmp6 - result2 * tmp5;
  arg0[5] = result1 * tmp7 + result2 * tmp4 - result * tmp6;
  arg0[6] = result2 * tmp7 + result * tmp5 - result1 * tmp4;
  arg0[7] = -result * tmp4 - result1 * tmp5 - result2 * tmp6;
  return arg0;
}
export function fromRotationTranslationValues(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
  const aRRAY_TYPE = new ANGLE_ORDER.ARRAY_TYPE(8);
  aRRAY_TYPE[0] = arg0;
  aRRAY_TYPE[1] = arg1;
  aRRAY_TYPE[2] = arg2;
  aRRAY_TYPE[3] = arg3;
  const result = 0.5 * arg4;
  const result1 = 0.5 * arg5;
  const result2 = 0.5 * arg6;
  aRRAY_TYPE[4] = result * arg3 + result1 * arg2 - result2 * arg1;
  aRRAY_TYPE[5] = result1 * arg3 + result2 * arg0 - result * arg2;
  aRRAY_TYPE[6] = result2 * arg3 + result * arg1 - result1 * arg0;
  aRRAY_TYPE[7] = -result * arg0 - result1 * arg1 - result2 * arg2;
  return aRRAY_TYPE;
}
export function fromTranslation(arg0, arg1) {
  arg0[0] = 0;
  arg0[1] = 0;
  arg0[2] = 0;
  arg0[3] = 1;
  arg0[4] = 0.5 * arg1[0];
  arg0[5] = 0.5 * arg1[1];
  arg0[6] = 0.5 * arg1[2];
  arg0[7] = 0;
  return arg0;
}
export function fromValues(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
  const aRRAY_TYPE = new ANGLE_ORDER.ARRAY_TYPE(8);
  aRRAY_TYPE[0] = arg0;
  aRRAY_TYPE[1] = arg1;
  aRRAY_TYPE[2] = arg2;
  aRRAY_TYPE[3] = arg3;
  aRRAY_TYPE[4] = arg4;
  aRRAY_TYPE[5] = arg5;
  aRRAY_TYPE[6] = arg6;
  aRRAY_TYPE[7] = arg7;
  return aRRAY_TYPE;
}
export function getDual(arg0, arg1) {
  arg0[0] = arg1[4];
  arg0[1] = arg1[5];
  arg0[2] = arg1[6];
  arg0[3] = arg1[7];
  return arg0;
}
export function getTranslation(arg0, arg1) {
  arg0[0] = 2 * (arg1[4] * arg1[3] + arg1[7] * -arg1[0] + arg1[5] * -arg1[2] - arg1[6] * -arg1[1]);
  arg0[1] = 2 * (arg1[5] * arg1[3] + arg1[7] * -arg1[1] + arg1[6] * -arg1[0] - arg1[4] * -arg1[2]);
  arg0[2] = 2 * (arg1[6] * arg1[3] + arg1[7] * -arg1[2] + arg1[4] * -arg1[1] - arg1[5] * -arg1[0]);
  return arg0;
}
export function identity(arg0) {
  arg0[0] = 0;
  arg0[1] = 0;
  arg0[2] = 0;
  arg0[3] = 1;
  arg0[4] = 0;
  arg0[5] = 0;
  arg0[6] = 0;
  arg0[7] = 0;
  return arg0;
}
export function invert(arg0, arg1) {
  const tmp = squaredLength(arg1);
  arg0[0] = -arg1[0] / tmp;
  arg0[1] = -arg1[1] / tmp;
  arg0[2] = -arg1[2] / tmp;
  arg0[3] = arg1[3] / tmp;
  arg0[4] = -arg1[4] / tmp;
  arg0[5] = -arg1[5] / tmp;
  arg0[6] = -arg1[6] / tmp;
  arg0[7] = arg1[7] / tmp;
  return arg0;
}
export function lerp(arg0, arg1, arg2, arg3) {
  const diff = 1 - arg3;
  let tmp2 = arg3;
  if (dot(arg1, arg2) < 0) {
    tmp2 = -arg3;
  }
  arg0[0] = arg1[0] * diff + arg2[0] * tmp2;
  arg0[1] = arg1[1] * diff + arg2[1] * tmp2;
  arg0[2] = arg1[2] * diff + arg2[2] * tmp2;
  arg0[3] = arg1[3] * diff + arg2[3] * tmp2;
  arg0[4] = arg1[4] * diff + arg2[4] * tmp2;
  arg0[5] = arg1[5] * diff + arg2[5] * tmp2;
  arg0[6] = arg1[6] * diff + arg2[6] * tmp2;
  arg0[7] = arg1[7] * diff + arg2[7] * tmp2;
  return arg0;
}
export { multiply };
export function normalize(arg0, arg1) {
  const tmp = squaredLength(arg1);
  if (tmp > 0) {
    const _Math = Math;
    const sqrtResult = Math.sqrt(tmp);
    const result = arg1[0] / sqrtResult;
    const result1 = arg1[1] / sqrtResult;
    const result2 = arg1[2] / sqrtResult;
    const result3 = arg1[3] / sqrtResult;
    const sum = result * tmp8 + result1 * tmp9 + result2 * tmp10 + result3 * tmp11;
    arg0[0] = result;
    arg0[1] = result1;
    arg0[2] = result2;
    arg0[3] = result3;
    arg0[4] = (arg1[4] - result * sum) / sqrtResult;
    arg0[5] = (arg1[5] - result1 * sum) / sqrtResult;
    arg0[6] = (arg1[6] - result2 * sum) / sqrtResult;
    arg0[7] = (arg1[7] - result3 * sum) / sqrtResult;
  }
  return arg0;
}
export function rotateAroundAxis(arg0, arg1, arg2, arg3) {
  if (Math.abs(arg3) < ANGLE_ORDER.EPSILON) {
    arg0[0] = arg1[0];
    arg0[1] = arg1[1];
    arg0[2] = arg1[2];
    arg0[3] = arg1[3];
    arg0[4] = arg1[4];
    arg0[5] = arg1[5];
    arg0[6] = arg1[6];
    arg0[7] = arg1[7];
    return arg0;
  } else {
    const _Math = Math;
    const sqrtResult = Math.sqrt(arg2[0] * arg2[0] + arg2[1] * arg2[1] + arg2[2] * arg2[2]);
    const result = arg3 * 0.5;
    const _Math2 = Math;
    const sinResult = Math.sin(result);
    const result1 = (sinResult * arg2[0]) / sqrtResult;
    const result2 = (sinResult * arg2[1]) / sqrtResult;
    const result3 = (sinResult * arg2[2]) / sqrtResult;
    const _Math3 = Math;
    const cosResult = Math.cos(result);
    [tmp9, tmp10, tmp11, tmp12] = arg1;
    arg0[0] = tmp9 * cosResult + tmp12 * result1 + tmp10 * result3 - tmp11 * result2;
    arg0[1] = tmp10 * cosResult + tmp12 * result2 + tmp11 * result1 - tmp9 * result3;
    arg0[2] = tmp11 * cosResult + tmp12 * result3 + tmp9 * result2 - tmp10 * result1;
    arg0[3] = tmp12 * cosResult - tmp9 * result1 - tmp10 * result2 - tmp11 * result3;
    arg0[4] = arg1[4] * cosResult + arg1[7] * result1 + arg1[5] * result3 - arg1[6] * result2;
    arg0[5] = arg1[5] * cosResult + arg1[7] * result2 + arg1[6] * result1 - arg1[4] * result3;
    arg0[6] = arg1[6] * cosResult + arg1[7] * result3 + arg1[4] * result2 - arg1[5] * result1;
    arg0[7] = arg1[7] * cosResult - arg1[4] * result1 - arg1[5] * result2 - arg1[6] * result3;
    return arg0;
  }
}
export function rotateByQuatAppend(arg0, arg1, arg2) {
  [tmp, tmp2, tmp3, tmp4] = arg2;
  [tmp5, tmp6, tmp7, tmp8] = arg1;
  arg0[0] = tmp5 * tmp4 + tmp8 * tmp + tmp6 * tmp3 - tmp7 * tmp2;
  arg0[1] = tmp6 * tmp4 + tmp8 * tmp2 + tmp7 * tmp - tmp5 * tmp3;
  arg0[2] = tmp7 * tmp4 + tmp8 * tmp3 + tmp5 * tmp2 - tmp6 * tmp;
  arg0[3] = tmp8 * tmp4 - tmp5 * tmp - tmp6 * tmp2 - tmp7 * tmp3;
  arg0[4] = arg1[4] * tmp4 + arg1[7] * tmp + arg1[5] * tmp3 - arg1[6] * tmp2;
  arg0[5] = arg1[5] * tmp4 + arg1[7] * tmp2 + arg1[6] * tmp - arg1[4] * tmp3;
  arg0[6] = arg1[6] * tmp4 + arg1[7] * tmp3 + arg1[4] * tmp2 - arg1[5] * tmp;
  arg0[7] = arg1[7] * tmp4 - arg1[4] * tmp - arg1[5] * tmp2 - arg1[6] * tmp3;
  return arg0;
}
export function rotateByQuatPrepend(arg0, arg1, arg2) {
  [tmp, tmp2, tmp3, tmp4] = arg1;
  [tmp5, tmp6, tmp7, tmp8] = arg2;
  arg0[0] = tmp * tmp8 + tmp4 * tmp5 + tmp2 * tmp7 - tmp3 * tmp6;
  arg0[1] = tmp2 * tmp8 + tmp4 * tmp6 + tmp3 * tmp5 - tmp * tmp7;
  arg0[2] = tmp3 * tmp8 + tmp4 * tmp7 + tmp * tmp6 - tmp2 * tmp5;
  arg0[3] = tmp4 * tmp8 - tmp * tmp5 - tmp2 * tmp6 - tmp3 * tmp7;
  arg0[4] = tmp * arg2[7] + tmp4 * arg2[4] + tmp2 * arg2[6] - tmp3 * arg2[5];
  arg0[5] = tmp2 * arg2[7] + tmp4 * arg2[5] + tmp3 * arg2[4] - tmp * arg2[6];
  arg0[6] = tmp3 * arg2[7] + tmp4 * arg2[6] + tmp * arg2[5] - tmp2 * arg2[4];
  arg0[7] = tmp4 * arg2[7] - tmp * arg2[4] - tmp2 * arg2[5] - tmp3 * arg2[6];
  return arg0;
}
export function rotateX(arg0, arg1, arg2) {
  const diff = tmp5 * tmp4 + tmp8 * tmp + tmp6 * tmp3 - tmp7 * tmp2;
  const diff1 = tmp6 * tmp4 + tmp8 * tmp2 + tmp7 * tmp - tmp5 * tmp3;
  const diff2 = tmp7 * tmp4 + tmp8 * tmp3 + tmp5 * tmp2 - tmp6 * tmp;
  const diff3 = tmp8 * tmp4 - tmp5 * tmp - tmp6 * tmp2 - tmp7 * tmp3;
  _typeof.rotateX(arg0, arg1, arg2);
  [tmp14, tmp15, tmp16, tmp17] = arg0;
  arg0[4] = diff * tmp17 + diff3 * tmp14 + diff1 * tmp16 - diff2 * tmp15;
  arg0[5] = diff1 * tmp17 + diff3 * tmp15 + diff2 * tmp14 - diff * tmp16;
  arg0[6] = diff2 * tmp17 + diff3 * tmp16 + diff * tmp15 - diff1 * tmp14;
  arg0[7] = diff3 * tmp17 - diff * tmp14 - diff1 * tmp15 - diff2 * tmp16;
  return arg0;
}
export function rotateY(arg0, arg1, arg2) {
  const diff = tmp5 * tmp4 + tmp8 * tmp + tmp6 * tmp3 - tmp7 * tmp2;
  const diff1 = tmp6 * tmp4 + tmp8 * tmp2 + tmp7 * tmp - tmp5 * tmp3;
  const diff2 = tmp7 * tmp4 + tmp8 * tmp3 + tmp5 * tmp2 - tmp6 * tmp;
  const diff3 = tmp8 * tmp4 - tmp5 * tmp - tmp6 * tmp2 - tmp7 * tmp3;
  _typeof.rotateY(arg0, arg1, arg2);
  [tmp14, tmp15, tmp16, tmp17] = arg0;
  arg0[4] = diff * tmp17 + diff3 * tmp14 + diff1 * tmp16 - diff2 * tmp15;
  arg0[5] = diff1 * tmp17 + diff3 * tmp15 + diff2 * tmp14 - diff * tmp16;
  arg0[6] = diff2 * tmp17 + diff3 * tmp16 + diff * tmp15 - diff1 * tmp14;
  arg0[7] = diff3 * tmp17 - diff * tmp14 - diff1 * tmp15 - diff2 * tmp16;
  return arg0;
}
export function rotateZ(arg0, arg1, arg2) {
  const diff = tmp5 * tmp4 + tmp8 * tmp + tmp6 * tmp3 - tmp7 * tmp2;
  const diff1 = tmp6 * tmp4 + tmp8 * tmp2 + tmp7 * tmp - tmp5 * tmp3;
  const diff2 = tmp7 * tmp4 + tmp8 * tmp3 + tmp5 * tmp2 - tmp6 * tmp;
  const diff3 = tmp8 * tmp4 - tmp5 * tmp - tmp6 * tmp2 - tmp7 * tmp3;
  _typeof.rotateZ(arg0, arg1, arg2);
  [tmp14, tmp15, tmp16, tmp17] = arg0;
  arg0[4] = diff * tmp17 + diff3 * tmp14 + diff1 * tmp16 - diff2 * tmp15;
  arg0[5] = diff1 * tmp17 + diff3 * tmp15 + diff2 * tmp14 - diff * tmp16;
  arg0[6] = diff2 * tmp17 + diff3 * tmp16 + diff * tmp15 - diff1 * tmp14;
  arg0[7] = diff3 * tmp17 - diff * tmp14 - diff1 * tmp15 - diff2 * tmp16;
  return arg0;
}
export function scale(arg0, arg1, arg2) {
  arg0[0] = arg1[0] * arg2;
  arg0[1] = arg1[1] * arg2;
  arg0[2] = arg1[2] * arg2;
  arg0[3] = arg1[3] * arg2;
  arg0[4] = arg1[4] * arg2;
  arg0[5] = arg1[5] * arg2;
  arg0[6] = arg1[6] * arg2;
  arg0[7] = arg1[7] * arg2;
  return arg0;
}
export function set(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
  arg0[0] = arg1;
  arg0[1] = arg2;
  arg0[2] = arg3;
  arg0[3] = arg4;
  arg0[4] = arg5;
  arg0[5] = arg6;
  arg0[6] = arg7;
  arg0[7] = arg8;
  return arg0;
}
export function setDual(arg0, arg1) {
  arg0[4] = arg1[0];
  arg0[5] = arg1[1];
  arg0[6] = arg1[2];
  arg0[7] = arg1[3];
  return arg0;
}
export function str(arg0) {
  return (
    "quat2(" +
    arg0[0] +
    ", " +
    arg0[1] +
    ", " +
    arg0[2] +
    ", " +
    arg0[3] +
    ", " +
    arg0[4] +
    ", " +
    arg0[5] +
    ", " +
    arg0[6] +
    ", " +
    arg0[7] +
    ")"
  );
}
export function translate(arg0, arg1, arg2) {
  [tmp, tmp2, tmp3, tmp4] = arg1;
  const result = 0.5 * arg2[0];
  const result1 = 0.5 * arg2[1];
  const result2 = 0.5 * arg2[2];
  arg0[0] = tmp;
  arg0[1] = tmp2;
  arg0[2] = tmp3;
  arg0[3] = tmp4;
  arg0[4] = tmp4 * result + tmp2 * result2 - tmp3 * result1 + arg1[4];
  arg0[5] = tmp4 * result1 + tmp3 * result - tmp * result2 + arg1[5];
  arg0[6] = tmp4 * result2 + tmp * result1 - tmp2 * result + arg1[6];
  arg0[7] = -tmp * result - tmp2 * result1 - tmp3 * result2 + arg1[7];
  return arg0;
}
export const mul = multiply;
export { dot };
export const length = _typeof.length;
export const len = _typeof.length;
export { squaredLength };
export const sqrLen = squaredLength;
