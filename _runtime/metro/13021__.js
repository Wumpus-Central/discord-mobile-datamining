// _runtime/metro/13021__.js
import ANGLE_ORDER2 from "../13016_ANGLE_ORDER.js";
import _mod13019 from "13019__.js";
import _mod13022 from "13022__.js";
import _mod13023 from "13023__.js";

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
  [tmp5, tmp6, tmp7, tmp8] = arg2;
  arg0[0] = tmp * tmp8 + tmp4 * tmp5 + tmp2 * tmp7 - tmp3 * tmp6;
  arg0[1] = tmp2 * tmp8 + tmp4 * tmp6 + tmp3 * tmp5 - tmp * tmp7;
  arg0[2] = tmp3 * tmp8 + tmp4 * tmp7 + tmp * tmp6 - tmp2 * tmp5;
  arg0[3] = tmp4 * tmp8 - tmp * tmp5 - tmp2 * tmp6 - tmp3 * tmp7;
  return arg0;
}
function slerp(arg0, arg1, arg2, arg3) {
  [tmp, tmp2, tmp3, tmp4] = arg1;
  [tmp5, tmp6, tmp7, tmp8] = arg2;
  const sum = tmp * tmp5 + tmp2 * tmp6 + tmp3 * tmp7 + tmp4 * tmp8;
  let tmp10 = tmp8;
  let tmp11 = tmp7;
  let tmp12 = tmp6;
  let tmp13 = tmp5;
  let tmp14 = sum;
  if (sum < 0) {
    tmp14 = -sum;
    tmp13 = -tmp5;
    tmp12 = -tmp6;
    tmp11 = -tmp7;
    tmp10 = -tmp8;
  }
  if (1 - tmp14 > ANGLE_ORDER.EPSILON) {
    const _Math = Math;
    const acosResult = Math.acos(tmp14);
    const _Math2 = Math;
    const sinResult = Math.sin(acosResult);
    const _Math3 = Math;
    let result = Math.sin((1 - arg3) * acosResult) / sinResult;
    const _Math4 = Math;
    let result1 = Math.sin(arg3 * acosResult) / sinResult;
  } else {
    result = 1 - arg3;
    result1 = arg3;
  }
  arg0[0] = result * tmp + result1 * tmp13;
  arg0[1] = result * tmp2 + result1 * tmp12;
  arg0[2] = result * tmp3 + result1 * tmp11;
  arg0[3] = result * tmp4 + result1 * tmp10;
  return arg0;
}
function fromMat3(arg0, arg1) {
  const sum = arg1[0] + arg1[4] + arg1[8];
  if (sum > 0) {
    const _Math2 = Math;
    const sqrtResult = Math.sqrt(sum + 1);
    arg0[3] = 0.5 * sqrtResult;
    const result = 0.5 / sqrtResult;
    arg0[0] = (arg1[5] - arg1[7]) * result;
    arg0[1] = (arg1[6] - arg1[2]) * result;
    arg0[2] = (arg1[1] - arg1[3]) * result;
  } else {
    let num = 0;
    if (arg1[4] > arg1[0]) {
      num = 1;
    }
    if (arg1[8] > arg1[3 * num + num]) {
      num = 2;
    }
    const result1 = (num + 1) % 3;
    const result2 = (num + 2) % 3;
    const _Math = Math;
    const result3 = 3 * num;
    const result4 = 3 * result1;
    const result5 = 3 * result2;
    const sqrtResult1 = Math.sqrt(arg1[result3 + num] - arg1[result4 + result1] - arg1[result5 + result2] + 1);
    arg0[num] = 0.5 * sqrtResult1;
    const result6 = 0.5 / sqrtResult1;
    arg0[3] = (arg1[result4 + result2] - arg1[result5 + result1]) * result6;
    arg0[result1] = (arg1[result4 + num] + arg1[result3 + result1]) * result6;
    arg0[result2] = (arg1[result5 + num] + arg1[result3 + result2]) * result6;
  }
  return arg0;
}
let ANGLE_ORDER = _interopRequireWildcard(ANGLE_ORDER2);
_interopRequireWildcard(_mod13019);
_interopRequireWildcard(_mod13022);
const _typeof = _interopRequireWildcard(_mod13023);
({
  clone: exports.clone,
  fromValues: exports.fromValues,
  copy: exports.copy,
  set: exports.set,
  add: exports.add,
} = _typeof);
const scale = _typeof.scale;
const dot = _typeof.dot;
({ lerp: exports.lerp, length } = _typeof);
const squaredLength = _typeof.squaredLength;
const normalize = _typeof.normalize;
const dependencyMap = _typeof.create();
let closure_11 = _typeof.fromValues(1, 0, 0);
let closure_12 = _typeof.fromValues(0, 1, 0);
let aRRAY_TYPE = new ANGLE_ORDER.ARRAY_TYPE(4);
if (ANGLE_ORDER.ARRAY_TYPE != Float32Array) {
  aRRAY_TYPE[0] = 0;
  aRRAY_TYPE[1] = 0;
  aRRAY_TYPE[2] = 0;
}
aRRAY_TYPE[3] = 1;
const aRRAY_TYPE1 = new ANGLE_ORDER.ARRAY_TYPE(4);
if (ANGLE_ORDER.ARRAY_TYPE != Float32Array) {
  aRRAY_TYPE1[0] = 0;
  aRRAY_TYPE1[1] = 0;
  aRRAY_TYPE1[2] = 0;
}
aRRAY_TYPE1[3] = 1;
let closure_15 = _typeof.create();

export const calculateW = function calculateW(arg0, arg1) {
  [tmp, tmp2, tmp3] = arg1;
  arg0[0] = tmp;
  arg0[1] = tmp2;
  arg0[2] = tmp3;
  arg0[3] = Math.sqrt(Math.abs(1 - tmp * tmp - tmp2 * tmp2 - tmp3 * tmp3));
  return arg0;
};
export const conjugate = function conjugate(arg0, arg1) {
  arg0[0] = -arg1[0];
  arg0[1] = -arg1[1];
  arg0[2] = -arg1[2];
  arg0[3] = arg1[3];
  return arg0;
};
export const create = function create() {
  aRRAY_TYPE = new ANGLE_ORDER.ARRAY_TYPE(4);
  if (ANGLE_ORDER.ARRAY_TYPE != Float32Array) {
    aRRAY_TYPE[0] = 0;
    aRRAY_TYPE[1] = 0;
    aRRAY_TYPE[2] = 0;
  }
  aRRAY_TYPE[3] = 1;
  return aRRAY_TYPE;
};
export const equals = function equals(arg0, arg1) {
  return Math.abs(_typeof.dot(arg0, arg1)) >= 1 - ANGLE_ORDER.EPSILON;
};
export const exp = function exp(arg0, arg1) {
  [tmp, tmp2, tmp3] = arg1;
  const sqrtResult = Math.sqrt(tmp * tmp + tmp2 * tmp2 + tmp3 * tmp3);
  const expResult = Math.exp(arg1[3]);
  let num = 0;
  if (sqrtResult > 0) {
    const _Math = Math;
    num = (expResult * Math.sin(sqrtResult)) / sqrtResult;
  }
  arg0[0] = tmp * num;
  arg0[1] = tmp2 * num;
  arg0[2] = tmp3 * num;
  arg0[3] = expResult * Math.cos(sqrtResult);
  return arg0;
};
export const fromEuler = function fromEuler(arg0, arg1, arg2, arg3) {
  if (arguments.length > 4) {
    if (undefined !== arguments[4]) {
      ANGLE_ORDER = arguments[4];
    }
    const _Math = Math;
    const result = Math.PI / 360;
    const result1 = arg1 * result;
    const result2 = arg3 * result;
    const result3 = arg2 * result;
    const _Math2 = Math;
    const sinResult = Math.sin(result1);
    const _Math3 = Math;
    const cosResult = Math.cos(result1);
    const _Math4 = Math;
    const sinResult1 = Math.sin(result3);
    const _Math5 = Math;
    const cosResult1 = Math.cos(result3);
    const _Math6 = Math;
    const sinResult2 = Math.sin(result2);
    const _Math7 = Math;
    const cosResult2 = Math.cos(result2);
    if ("xyz" === ANGLE_ORDER) {
      arg0[0] = sinResult * cosResult1 * cosResult2 + cosResult * sinResult1 * sinResult2;
      arg0[1] = cosResult * sinResult1 * cosResult2 - sinResult * cosResult1 * sinResult2;
      arg0[2] = cosResult * cosResult1 * sinResult2 + sinResult * sinResult1 * cosResult2;
      arg0[3] = cosResult * cosResult1 * cosResult2 - sinResult * sinResult1 * sinResult2;
    } else if ("xzy" === ANGLE_ORDER) {
      arg0[0] = sinResult * cosResult1 * cosResult2 - cosResult * sinResult1 * sinResult2;
      arg0[1] = cosResult * sinResult1 * cosResult2 - sinResult * cosResult1 * sinResult2;
      arg0[2] = cosResult * cosResult1 * sinResult2 + sinResult * sinResult1 * cosResult2;
      arg0[3] = cosResult * cosResult1 * cosResult2 + sinResult * sinResult1 * sinResult2;
    } else if ("yxz" === ANGLE_ORDER) {
      arg0[0] = sinResult * cosResult1 * cosResult2 + cosResult * sinResult1 * sinResult2;
      arg0[1] = cosResult * sinResult1 * cosResult2 - sinResult * cosResult1 * sinResult2;
      arg0[2] = cosResult * cosResult1 * sinResult2 - sinResult * sinResult1 * cosResult2;
      arg0[3] = cosResult * cosResult1 * cosResult2 + sinResult * sinResult1 * sinResult2;
    } else if ("yzx" === ANGLE_ORDER) {
      arg0[0] = sinResult * cosResult1 * cosResult2 + cosResult * sinResult1 * sinResult2;
      arg0[1] = cosResult * sinResult1 * cosResult2 + sinResult * cosResult1 * sinResult2;
      arg0[2] = cosResult * cosResult1 * sinResult2 - sinResult * sinResult1 * cosResult2;
      arg0[3] = cosResult * cosResult1 * cosResult2 - sinResult * sinResult1 * sinResult2;
    } else if ("zxy" === ANGLE_ORDER) {
      arg0[0] = sinResult * cosResult1 * cosResult2 - cosResult * sinResult1 * sinResult2;
      arg0[1] = cosResult * sinResult1 * cosResult2 + sinResult * cosResult1 * sinResult2;
      arg0[2] = cosResult * cosResult1 * sinResult2 + sinResult * sinResult1 * cosResult2;
      arg0[3] = cosResult * cosResult1 * cosResult2 - sinResult * sinResult1 * sinResult2;
    } else if ("zyx" === ANGLE_ORDER) {
      arg0[0] = sinResult * cosResult1 * cosResult2 - cosResult * sinResult1 * sinResult2;
      arg0[1] = cosResult * sinResult1 * cosResult2 + sinResult * cosResult1 * sinResult2;
      arg0[2] = cosResult * cosResult1 * sinResult2 - sinResult * sinResult1 * cosResult2;
      arg0[3] = cosResult * cosResult1 * cosResult2 + sinResult * sinResult1 * sinResult2;
    } else {
      const _Error = Error;
      const error = new Error("Unknown angle order " + ANGLE_ORDER);
      throw error;
    }
    return arg0;
  }
  ANGLE_ORDER = ANGLE_ORDER.ANGLE_ORDER;
};
export { fromMat3 };
export const getAngle = function getAngle(arg0, arg1) {
  const tmp = dot(arg0, arg1);
  return Math.acos(2 * tmp * tmp - 1);
};
export const getAxisAngle = function getAxisAngle(arg0, arg1) {
  const result = 2 * Math.acos(arg1[3]);
  const sinResult = Math.sin(result / 2);
  if (sinResult > ANGLE_ORDER.EPSILON) {
    arg0[0] = arg1[0] / sinResult;
    arg0[1] = arg1[1] / sinResult;
    arg0[2] = arg1[2] / sinResult;
  } else {
    arg0[0] = 1;
    arg0[1] = 0;
    arg0[2] = 0;
  }
  return result;
};
export const identity = function identity(arg0) {
  arg0[0] = 0;
  arg0[1] = 0;
  arg0[2] = 0;
  arg0[3] = 1;
  return arg0;
};
export const invert = function invert(arg0, arg1) {
  [tmp, tmp2, tmp3, tmp4] = arg1;
  const sum = tmp * tmp + tmp2 * tmp2 + tmp3 * tmp3 + tmp4 * tmp4;
  let num = 0;
  if (sum) {
    num = 1 / sum;
  }
  arg0[0] = -tmp * num;
  arg0[1] = -tmp2 * num;
  arg0[2] = -tmp3 * num;
  arg0[3] = tmp4 * num;
  return arg0;
};
export const ln = function ln(arg0, arg1) {
  [tmp, tmp2, tmp3, tmp4] = arg1;
  const sqrtResult = Math.sqrt(tmp * tmp + tmp2 * tmp2 + tmp3 * tmp3);
  let num = 0;
  if (sqrtResult > 0) {
    const _Math = Math;
    num = Math.atan2(sqrtResult, tmp4) / sqrtResult;
  }
  arg0[0] = tmp * num;
  arg0[1] = tmp2 * num;
  arg0[2] = tmp3 * num;
  arg0[3] = 0.5 * Math.log(tmp * tmp + tmp2 * tmp2 + tmp3 * tmp3 + tmp4 * tmp4);
  return arg0;
};
export { multiply };
export const pow = function pow(arg0, arg1, arg2) {
  [tmp, tmp2, tmp3, tmp4] = arg1;
  const sqrtResult = Math.sqrt(tmp * tmp + tmp2 * tmp2 + tmp3 * tmp3);
  let num = 0;
  if (sqrtResult > 0) {
    const _Math = Math;
    num = Math.atan2(sqrtResult, tmp4) / sqrtResult;
  }
  arg0[0] = tmp * num;
  arg0[1] = tmp2 * num;
  arg0[2] = tmp3 * num;
  arg0[3] = 0.5 * Math.log(tmp * tmp + tmp2 * tmp2 + tmp3 * tmp3 + tmp4 * tmp4);
  scale(arg0, arg0, arg2);
  [tmp7, tmp8, tmp9] = arg0;
  const sqrtResult1 = Math.sqrt(tmp7 * tmp7 + tmp8 * tmp8 + tmp9 * tmp9);
  const expResult = Math.exp(arg0[3]);
  let num2 = 0;
  if (sqrtResult1 > 0) {
    const _Math2 = Math;
    num2 = (expResult * Math.sin(sqrtResult1)) / sqrtResult1;
  }
  arg0[0] = tmp7 * num2;
  arg0[1] = tmp8 * num2;
  arg0[2] = tmp9 * num2;
  arg0[3] = expResult * Math.cos(sqrtResult1);
  return arg0;
};
export const random = function random(arg0) {
  const RANDOMResult = ANGLE_ORDER.RANDOM();
  const RANDOMResult1 = ANGLE_ORDER.RANDOM();
  const RANDOMResult2 = ANGLE_ORDER.RANDOM();
  const sqrtResult = Math.sqrt(1 - RANDOMResult);
  const sqrtResult1 = Math.sqrt(RANDOMResult);
  arg0[0] = sqrtResult * Math.sin(2 * Math.PI * RANDOMResult1);
  arg0[1] = sqrtResult * Math.cos(2 * Math.PI * RANDOMResult1);
  arg0[2] = sqrtResult1 * Math.sin(2 * Math.PI * RANDOMResult2);
  arg0[3] = sqrtResult1 * Math.cos(2 * Math.PI * RANDOMResult2);
  return arg0;
};
export const rotateX = function rotateX(arg0, arg1, arg2) {
  const result = arg2 * 0.5;
  [tmp2, tmp3, tmp4, tmp5] = arg1;
  const sinResult = Math.sin(result);
  const cosResult = Math.cos(result);
  arg0[0] = tmp2 * cosResult + tmp5 * sinResult;
  arg0[1] = tmp3 * cosResult + tmp4 * sinResult;
  arg0[2] = tmp4 * cosResult - tmp3 * sinResult;
  arg0[3] = tmp5 * cosResult - tmp2 * sinResult;
  return arg0;
};
export const rotateY = function rotateY(arg0, arg1, arg2) {
  const result = arg2 * 0.5;
  [tmp2, tmp3, tmp4, tmp5] = arg1;
  const sinResult = Math.sin(result);
  const cosResult = Math.cos(result);
  arg0[0] = tmp2 * cosResult - tmp4 * sinResult;
  arg0[1] = tmp3 * cosResult + tmp5 * sinResult;
  arg0[2] = tmp4 * cosResult + tmp2 * sinResult;
  arg0[3] = tmp5 * cosResult - tmp3 * sinResult;
  return arg0;
};
export const rotateZ = function rotateZ(arg0, arg1, arg2) {
  const result = arg2 * 0.5;
  [tmp2, tmp3, tmp4, tmp5] = arg1;
  const sinResult = Math.sin(result);
  const cosResult = Math.cos(result);
  arg0[0] = tmp2 * cosResult + tmp3 * sinResult;
  arg0[1] = tmp3 * cosResult - tmp2 * sinResult;
  arg0[2] = tmp4 * cosResult + tmp5 * sinResult;
  arg0[3] = tmp5 * cosResult - tmp4 * sinResult;
  return arg0;
};
export const setAxisAngle = function setAxisAngle(arg0, arg1, arg2) {
  const result = arg2 * 0.5;
  const sinResult = Math.sin(result);
  arg0[0] = sinResult * arg1[0];
  arg0[1] = sinResult * arg1[1];
  arg0[2] = sinResult * arg1[2];
  arg0[3] = Math.cos(result);
  return arg0;
};
export { slerp };
export const str = function str(arg0) {
  return "quat(" + arg0[0] + ", " + arg0[1] + ", " + arg0[2] + ", " + arg0[3] + ")";
};
export const mul = multiply;
export { scale };
export { dot };
export { length };
export const len = length;
export { squaredLength };
export const sqrLen = squaredLength;
export { normalize };
export const exactEquals = _typeof.exactEquals;
export const rotationTo = (arg0, arg1, arg2) => {
  const normalizer = _typeof;
  const dotResult = _typeof.dot(arg1, arg2);
  if (dotResult < -0.999999) {
    normalizer.cross(dependencyMap, closure_11, arg1);
    if (normalizer.len(dependencyMap) < 0.000001) {
      normalizer.cross(dependencyMap, closure_12, arg1);
    }
    normalizer.normalize(dependencyMap, dependencyMap);
    const _Math = Math;
    const result = Math.PI * 0.5;
    const _Math2 = Math;
    const sinResult = Math.sin(result);
    arg0[0] = sinResult * 13016;
    arg0[1] = sinResult * 13019;
    arg0[2] = sinResult * 13022;
    const _Math3 = Math;
    arg0[3] = Math.cos(result);
    let tmp5 = arg0;
  } else if (dotResult > 0.999999) {
    arg0[0] = 0;
    arg0[1] = 0;
    arg0[2] = 0;
    arg0[3] = 1;
    tmp5 = arg0;
  } else {
    normalizer.cross(dependencyMap, arg1, arg2);
    arg0[0] = 13016;
    arg0[1] = 13019;
    arg0[2] = 13022;
    arg0[3] = 1 + dotResult;
    tmp5 = normalize(arg0, arg0);
  }
  return tmp5;
};
export const sqlerp = (arg0, arg1, arg2, arg3, arg4, arg5) => {
  slerp(aRRAY_TYPE, arg1, arg4, arg5);
  slerp(aRRAY_TYPE1, arg2, arg3, arg5);
  slerp(arg0, aRRAY_TYPE, aRRAY_TYPE1, 2 * arg5 * (1 - arg5));
  return arg0;
};
export const setAxes = (arg0, arg1, arg2, arg3) => {
  closure_15[0] = arg2[0];
  closure_15[3] = arg2[1];
  closure_15[6] = arg2[2];
  closure_15[1] = arg3[0];
  closure_15[4] = arg3[1];
  closure_15[7] = arg3[2];
  closure_15[2] = -arg1[0];
  closure_15[5] = -arg1[1];
  closure_15[8] = -arg1[2];
  fromMat3(arg0, closure_15);
  return normalize(arg0, arg0);
};
