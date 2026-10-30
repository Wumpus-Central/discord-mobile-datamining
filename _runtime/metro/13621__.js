// === Module 13621: ? ===

// Module 13621
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
  [tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = arg1;
  [tmp17, tmp18, tmp19, tmp20] = arg2;
  arg0[0] = tmp17 * tmp + tmp18 * tmp5 + tmp19 * tmp9 + tmp20 * tmp13;
  arg0[1] = tmp17 * tmp2 + tmp18 * tmp6 + tmp19 * tmp10 + tmp20 * tmp14;
  arg0[2] = tmp17 * tmp3 + tmp18 * tmp7 + tmp19 * tmp11 + tmp20 * tmp15;
  arg0[3] = tmp17 * tmp4 + tmp18 * tmp8 + tmp19 * tmp12 + tmp20 * tmp16;
  arg0[4] = arg2[4] * tmp + arg2[5] * tmp5 + arg2[6] * tmp9 + arg2[7] * tmp13;
  arg0[5] = arg2[4] * tmp2 + arg2[5] * tmp6 + arg2[6] * tmp10 + arg2[7] * tmp14;
  arg0[6] = arg2[4] * tmp3 + arg2[5] * tmp7 + arg2[6] * tmp11 + arg2[7] * tmp15;
  arg0[7] = arg2[4] * tmp4 + arg2[5] * tmp8 + arg2[6] * tmp12 + arg2[7] * tmp16;
  arg0[8] = arg2[8] * tmp + arg2[9] * tmp5 + arg2[10] * tmp9 + arg2[11] * tmp13;
  arg0[9] = arg2[8] * tmp2 + arg2[9] * tmp6 + arg2[10] * tmp10 + arg2[11] * tmp14;
  arg0[10] = arg2[8] * tmp3 + arg2[9] * tmp7 + arg2[10] * tmp11 + arg2[11] * tmp15;
  arg0[11] = arg2[8] * tmp4 + arg2[9] * tmp8 + arg2[10] * tmp12 + arg2[11] * tmp16;
  arg0[12] = arg2[12] * tmp + arg2[13] * tmp5 + arg2[14] * tmp9 + arg2[15] * tmp13;
  arg0[13] = arg2[12] * tmp2 + arg2[13] * tmp6 + arg2[14] * tmp10 + arg2[15] * tmp14;
  arg0[14] = arg2[12] * tmp3 + arg2[13] * tmp7 + arg2[14] * tmp11 + arg2[15] * tmp15;
  arg0[15] = arg2[12] * tmp4 + arg2[13] * tmp8 + arg2[14] * tmp12 + arg2[15] * tmp16;
  return arg0;
}
function perspectiveNO(arg0, arg1, arg2, arg3, arg4) {
  const result = 1 / Math.tan(arg1 / 2);
  arg0[0] = result / arg2;
  arg0[1] = 0;
  arg0[2] = 0;
  arg0[3] = 0;
  arg0[4] = 0;
  arg0[5] = result;
  arg0[6] = 0;
  arg0[7] = 0;
  arg0[8] = 0;
  arg0[9] = 0;
  arg0[11] = -1;
  arg0[12] = 0;
  arg0[13] = 0;
  arg0[15] = 0;
  if (null != arg4) {
    if (arg4 !== Infinity) {
      const result1 = 1 / (arg3 - arg4);
      arg0[10] = (arg4 + arg3) * result1;
      arg0[14] = 2 * arg4 * arg3 * result1;
    }
    return arg0;
  }
  arg0[10] = -1;
  arg0[14] = -2 * arg3;
}
function orthoNO(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
  const result = 1 / (arg1 - arg2);
  const result1 = 1 / (arg3 - arg4);
  const result2 = 1 / (arg5 - arg6);
  arg0[0] = -2 * result;
  arg0[1] = 0;
  arg0[2] = 0;
  arg0[3] = 0;
  arg0[4] = 0;
  arg0[5] = -2 * result1;
  arg0[6] = 0;
  arg0[7] = 0;
  arg0[8] = 0;
  arg0[9] = 0;
  arg0[10] = 2 * result2;
  arg0[11] = 0;
  arg0[12] = (arg1 + arg2) * result;
  arg0[13] = (arg4 + arg3) * result1;
  arg0[14] = (arg6 + arg5) * result2;
  arg0[15] = 1;
  return arg0;
}
function subtract(arg0, arg1, arg2) {
  arg0[0] = arg1[0] - arg2[0];
  arg0[1] = arg1[1] - arg2[1];
  arg0[2] = arg1[2] - arg2[2];
  arg0[3] = arg1[3] - arg2[3];
  arg0[4] = arg1[4] - arg2[4];
  arg0[5] = arg1[5] - arg2[5];
  arg0[6] = arg1[6] - arg2[6];
  arg0[7] = arg1[7] - arg2[7];
  arg0[8] = arg1[8] - arg2[8];
  arg0[9] = arg1[9] - arg2[9];
  arg0[10] = arg1[10] - arg2[10];
  arg0[11] = arg1[11] - arg2[11];
  arg0[12] = arg1[12] - arg2[12];
  arg0[13] = arg1[13] - arg2[13];
  arg0[14] = arg1[14] - arg2[14];
  arg0[15] = arg1[15] - arg2[15];
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
  arg0[6] = arg1[6] + arg2[6];
  arg0[7] = arg1[7] + arg2[7];
  arg0[8] = arg1[8] + arg2[8];
  arg0[9] = arg1[9] + arg2[9];
  arg0[10] = arg1[10] + arg2[10];
  arg0[11] = arg1[11] + arg2[11];
  arg0[12] = arg1[12] + arg2[12];
  arg0[13] = arg1[13] + arg2[13];
  arg0[14] = arg1[14] + arg2[14];
  arg0[15] = arg1[15] + arg2[15];
  return arg0;
}
export function adjoint(arg0, arg1) {
  [tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = arg1;
  const diff = tmp * tmp6 - tmp2 * tmp5;
  const diff1 = tmp * tmp7 - tmp3 * tmp5;
  const diff2 = tmp * tmp8 - tmp4 * tmp5;
  const diff3 = tmp2 * tmp7 - tmp3 * tmp6;
  const diff4 = tmp2 * tmp8 - tmp4 * tmp6;
  const diff5 = tmp3 * tmp8 - tmp4 * tmp7;
  const diff6 = tmp9 * tmp14 - tmp10 * tmp13;
  const diff7 = tmp9 * tmp15 - tmp11 * tmp13;
  const diff8 = tmp9 * tmp16 - tmp12 * tmp13;
  const diff9 = tmp10 * tmp15 - tmp11 * tmp14;
  const diff10 = tmp10 * tmp16 - tmp12 * tmp14;
  const diff11 = tmp11 * tmp16 - tmp12 * tmp15;
  arg0[0] = tmp6 * diff11 - tmp7 * diff10 + tmp8 * diff9;
  arg0[1] = tmp3 * diff10 - tmp2 * diff11 - tmp4 * diff9;
  arg0[2] = tmp14 * diff5 - tmp15 * diff4 + tmp16 * diff3;
  arg0[3] = tmp11 * diff4 - tmp10 * diff5 - tmp12 * diff3;
  arg0[4] = tmp7 * diff8 - tmp5 * diff11 - tmp8 * diff7;
  arg0[5] = tmp * diff11 - tmp3 * diff8 + tmp4 * diff7;
  arg0[6] = tmp15 * diff2 - tmp13 * diff5 - tmp16 * diff1;
  arg0[7] = tmp9 * diff5 - tmp11 * diff2 + tmp12 * diff1;
  arg0[8] = tmp5 * diff10 - tmp6 * diff8 + tmp8 * diff6;
  arg0[9] = tmp2 * diff8 - tmp * diff10 - tmp4 * diff6;
  arg0[10] = tmp13 * diff4 - tmp14 * diff2 + tmp16 * diff;
  arg0[11] = tmp10 * diff2 - tmp9 * diff4 - tmp12 * diff;
  arg0[12] = tmp6 * diff7 - tmp5 * diff9 - tmp7 * diff6;
  arg0[13] = tmp * diff9 - tmp2 * diff7 + tmp3 * diff6;
  arg0[14] = tmp14 * diff1 - tmp13 * diff3 - tmp15 * diff;
  arg0[15] = tmp9 * diff3 - tmp10 * diff1 + tmp11 * diff;
  return arg0;
}
export function clone(arg0) {
  const aRRAY_TYPE = new value.ARRAY_TYPE(16);
  aRRAY_TYPE[0] = arg0[0];
  aRRAY_TYPE[1] = arg0[1];
  aRRAY_TYPE[2] = arg0[2];
  aRRAY_TYPE[3] = arg0[3];
  aRRAY_TYPE[4] = arg0[4];
  aRRAY_TYPE[5] = arg0[5];
  aRRAY_TYPE[6] = arg0[6];
  aRRAY_TYPE[7] = arg0[7];
  aRRAY_TYPE[8] = arg0[8];
  aRRAY_TYPE[9] = arg0[9];
  aRRAY_TYPE[10] = arg0[10];
  aRRAY_TYPE[11] = arg0[11];
  aRRAY_TYPE[12] = arg0[12];
  aRRAY_TYPE[13] = arg0[13];
  aRRAY_TYPE[14] = arg0[14];
  aRRAY_TYPE[15] = arg0[15];
  return aRRAY_TYPE;
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
  arg0[8] = arg1[8];
  arg0[9] = arg1[9];
  arg0[10] = arg1[10];
  arg0[11] = arg1[11];
  arg0[12] = arg1[12];
  arg0[13] = arg1[13];
  arg0[14] = arg1[14];
  arg0[15] = arg1[15];
  return arg0;
}
export function create() {
  const aRRAY_TYPE = new value.ARRAY_TYPE(16);
  if (value.ARRAY_TYPE != Float32Array) {
    aRRAY_TYPE[1] = 0;
    aRRAY_TYPE[2] = 0;
    aRRAY_TYPE[3] = 0;
    aRRAY_TYPE[4] = 0;
    aRRAY_TYPE[6] = 0;
    aRRAY_TYPE[7] = 0;
    aRRAY_TYPE[8] = 0;
    aRRAY_TYPE[9] = 0;
    aRRAY_TYPE[11] = 0;
    aRRAY_TYPE[12] = 0;
    aRRAY_TYPE[13] = 0;
    aRRAY_TYPE[14] = 0;
  }
  aRRAY_TYPE[0] = 1;
  aRRAY_TYPE[5] = 1;
  aRRAY_TYPE[10] = 1;
  aRRAY_TYPE[15] = 1;
  return aRRAY_TYPE;
}
export function decompose(arg0, arg1, arg2, arg3) {
  arg1[0] = arg3[12];
  arg1[1] = arg3[13];
  arg1[2] = arg3[14];
  const first = arg3[0];
  arg2[0] = Math.sqrt(first * first + arg3[1] * arg3[1] + arg3[2] * arg3[2]);
  arg2[1] = Math.sqrt(arg3[4] * arg3[4] + arg3[5] * arg3[5] + arg3[6] * arg3[6]);
  arg2[2] = Math.sqrt(arg3[8] * arg3[8] + arg3[9] * arg3[9] + arg3[10] * arg3[10]);
  const result = 1 / arg2[0];
  const result1 = 1 / arg2[1];
  const result2 = 1 / arg2[2];
  const result3 = first * result;
  const result4 = tmp2 * result1;
  const result5 = tmp3 * result2;
  const result6 = tmp4 * result;
  const result7 = tmp5 * result1;
  const result8 = tmp6 * result2;
  const result9 = tmp7 * result;
  const result10 = tmp8 * result1;
  const result11 = tmp9 * result2;
  const sum = result3 + result7 + result11;
  if (0 < sum) {
    const _Math4 = Math;
    const result12 = 2 * Math.sqrt(sum + 1);
    arg0[3] = 0.25 * result12;
    arg0[0] = (result8 - result10) / result12;
    arg0[1] = (result9 - result5) / result12;
    arg0[2] = (result4 - result6) / result12;
  } else {
    if (result7 < result3) {
      if (result11 < result3) {
        const _Math3 = Math;
        const result13 = 2 * Math.sqrt(1 + result3 - result7 - result11);
        arg0[3] = (result8 - result10) / result13;
        arg0[0] = 0.25 * result13;
        arg0[1] = (result4 + result6) / result13;
        arg0[2] = (result9 + result5) / result13;
      }
    }
    if (result11 < result7) {
      const _Math2 = Math;
      const result14 = 2 * Math.sqrt(1 + result7 - result3 - result11);
      arg0[3] = (result9 - result5) / result14;
      arg0[0] = (result4 + result6) / result14;
      arg0[1] = 0.25 * result14;
      arg0[2] = (result8 + result10) / result14;
    } else {
      const _Math = Math;
      const result15 = 2 * Math.sqrt(1 + result11 - result3 - result7);
      arg0[3] = (result4 - result6) / result15;
      arg0[0] = (result9 + result5) / result15;
      arg0[1] = (result8 + result10) / result15;
      arg0[2] = 0.25 * result15;
    }
  }
  return arg0;
}
export function determinant(arg0) {
  const first = arg0[0];
  const diff = first * tmp5 - tmp2 * tmp4;
  const diff1 = first * tmp6 - tmp3 * tmp4;
  const diff2 = tmp2 * tmp6 - tmp3 * tmp5;
  const diff3 = tmp7 * tmp11 - tmp8 * tmp10;
  const diff4 = tmp7 * tmp12 - tmp9 * tmp10;
  const diff5 = tmp8 * tmp12 - tmp9 * tmp11;
  return arg0[7] * (first * diff5 - arg0[1] * diff4 + arg0[2] * diff3) - arg0[3] * (arg0[4] * diff5 - arg0[5] * diff4 + arg0[6] * diff3) + arg0[15] * (arg0[8] * diff2 - arg0[9] * diff1 + arg0[10] * diff) - arg0[11] * (arg0[12] * diff2 - arg0[13] * diff1 + arg0[14] * diff);
}
export function equals(arg0, arg1) {
  [tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = arg0;
  [tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32] = arg1;
  const absolute = Math.abs(tmp - tmp17);
  const absolute1 = Math.abs(tmp);
  let tmp36 = absolute <= value.EPSILON * Math.max(1, absolute1, Math.abs(tmp17));
  if (tmp36) {
    const _Math = Math;
    const _Math2 = Math;
    const _Math3 = Math;
    const absolute2 = Math.abs(tmp2 - tmp18);
    const _Math4 = Math;
    const absolute3 = Math.abs(tmp2);
    tmp36 = absolute2 <= value.EPSILON * Math.max(1, absolute3, Math.abs(tmp18));
  }
  if (tmp36) {
    const _Math5 = Math;
    const _Math6 = Math;
    const _Math7 = Math;
    const absolute4 = Math.abs(tmp3 - tmp19);
    const _Math8 = Math;
    const absolute5 = Math.abs(tmp3);
    tmp36 = absolute4 <= value.EPSILON * Math.max(1, absolute5, Math.abs(tmp19));
  }
  if (tmp36) {
    const _Math9 = Math;
    const _Math10 = Math;
    const _Math11 = Math;
    const absolute6 = Math.abs(tmp4 - tmp20);
    const _Math12 = Math;
    const absolute7 = Math.abs(tmp4);
    tmp36 = absolute6 <= value.EPSILON * Math.max(1, absolute7, Math.abs(tmp20));
  }
  if (tmp36) {
    const _Math13 = Math;
    const _Math14 = Math;
    const _Math15 = Math;
    const absolute8 = Math.abs(tmp5 - tmp21);
    const _Math16 = Math;
    const absolute9 = Math.abs(tmp5);
    tmp36 = absolute8 <= value.EPSILON * Math.max(1, absolute9, Math.abs(tmp21));
  }
  if (tmp36) {
    const _Math17 = Math;
    const _Math18 = Math;
    const _Math19 = Math;
    const absolute10 = Math.abs(tmp6 - tmp22);
    const _Math20 = Math;
    const absolute11 = Math.abs(tmp6);
    tmp36 = absolute10 <= value.EPSILON * Math.max(1, absolute11, Math.abs(tmp22));
  }
  if (tmp36) {
    const _Math21 = Math;
    const _Math22 = Math;
    const _Math23 = Math;
    const absolute12 = Math.abs(tmp7 - tmp23);
    const _Math24 = Math;
    const absolute13 = Math.abs(tmp7);
    tmp36 = absolute12 <= value.EPSILON * Math.max(1, absolute13, Math.abs(tmp23));
  }
  if (tmp36) {
    const _Math25 = Math;
    const _Math26 = Math;
    const _Math27 = Math;
    const absolute14 = Math.abs(tmp8 - tmp24);
    const _Math28 = Math;
    const absolute15 = Math.abs(tmp8);
    tmp36 = absolute14 <= value.EPSILON * Math.max(1, absolute15, Math.abs(tmp24));
  }
  if (tmp36) {
    const _Math29 = Math;
    const _Math30 = Math;
    const _Math31 = Math;
    const absolute16 = Math.abs(tmp9 - tmp25);
    const _Math32 = Math;
    const absolute17 = Math.abs(tmp9);
    tmp36 = absolute16 <= value.EPSILON * Math.max(1, absolute17, Math.abs(tmp25));
  }
  if (tmp36) {
    const _Math33 = Math;
    const _Math34 = Math;
    const _Math35 = Math;
    const absolute18 = Math.abs(tmp10 - tmp26);
    const _Math36 = Math;
    const absolute19 = Math.abs(tmp10);
    tmp36 = absolute18 <= value.EPSILON * Math.max(1, absolute19, Math.abs(tmp26));
  }
  if (tmp36) {
    const _Math37 = Math;
    const _Math38 = Math;
    const _Math39 = Math;
    const absolute20 = Math.abs(tmp11 - tmp27);
    const _Math40 = Math;
    const absolute21 = Math.abs(tmp11);
    tmp36 = absolute20 <= value.EPSILON * Math.max(1, absolute21, Math.abs(tmp27));
  }
  if (tmp36) {
    const _Math41 = Math;
    const _Math42 = Math;
    const _Math43 = Math;
    const absolute22 = Math.abs(tmp12 - tmp28);
    const _Math44 = Math;
    const absolute23 = Math.abs(tmp12);
    tmp36 = absolute22 <= value.EPSILON * Math.max(1, absolute23, Math.abs(tmp28));
  }
  if (tmp36) {
    const _Math45 = Math;
    const _Math46 = Math;
    const _Math47 = Math;
    const absolute24 = Math.abs(tmp13 - tmp29);
    const _Math48 = Math;
    const absolute25 = Math.abs(tmp13);
    tmp36 = absolute24 <= value.EPSILON * Math.max(1, absolute25, Math.abs(tmp29));
  }
  if (tmp36) {
    const _Math49 = Math;
    const _Math50 = Math;
    const _Math51 = Math;
    const absolute26 = Math.abs(tmp14 - tmp30);
    const _Math52 = Math;
    const absolute27 = Math.abs(tmp14);
    tmp36 = absolute26 <= value.EPSILON * Math.max(1, absolute27, Math.abs(tmp30));
  }
  if (tmp36) {
    const _Math53 = Math;
    const _Math54 = Math;
    const _Math55 = Math;
    const absolute28 = Math.abs(tmp15 - tmp31);
    const _Math56 = Math;
    const absolute29 = Math.abs(tmp15);
    tmp36 = absolute28 <= value.EPSILON * Math.max(1, absolute29, Math.abs(tmp31));
  }
  if (tmp36) {
    const _Math57 = Math;
    const _Math58 = Math;
    const _Math59 = Math;
    const absolute30 = Math.abs(tmp16 - tmp32);
    const _Math60 = Math;
    const absolute31 = Math.abs(tmp16);
    tmp36 = absolute30 <= value.EPSILON * Math.max(1, absolute31, Math.abs(tmp32));
  }
  return tmp36;
}
export function exactEquals(arg0, arg1) {
  return arg0[0] === arg1[0] && arg0[1] === arg1[1] && arg0[2] === arg1[2] && arg0[3] === arg1[3] && arg0[4] === arg1[4] && arg0[5] === arg1[5] && arg0[6] === arg1[6] && arg0[7] === arg1[7] && arg0[8] === arg1[8] && arg0[9] === arg1[9] && arg0[10] === arg1[10] && arg0[11] === arg1[11] && arg0[12] === arg1[12] && arg0[13] === arg1[13] && arg0[14] === arg1[14] && arg0[15] === arg1[15];
}
export function frob(arg0) {
  return Math.sqrt(arg0[0] * arg0[0] + arg0[1] * arg0[1] + arg0[2] * arg0[2] + arg0[3] * arg0[3] + arg0[4] * arg0[4] + arg0[5] * arg0[5] + arg0[6] * arg0[6] + arg0[7] * arg0[7] + arg0[8] * arg0[8] + arg0[9] * arg0[9] + arg0[10] * arg0[10] + arg0[11] * arg0[11] + arg0[12] * arg0[12] + arg0[13] * arg0[13] + arg0[14] * arg0[14] + arg0[15] * arg0[15]);
}
export function fromQuat(arg0, arg1) {
  [tmp, tmp2, tmp3, tmp4] = arg1;
  const sum = tmp + tmp;
  const sum1 = tmp2 + tmp2;
  const sum2 = tmp3 + tmp3;
  const result = tmp * sum;
  const result1 = tmp2 * sum;
  const result2 = tmp2 * sum1;
  const result3 = tmp3 * sum;
  const result4 = tmp3 * sum1;
  const result5 = tmp3 * sum2;
  const result6 = tmp4 * sum;
  const result7 = tmp4 * sum1;
  const result8 = tmp4 * sum2;
  arg0[0] = 1 - result2 - result5;
  arg0[1] = result1 + result8;
  arg0[2] = result3 - result7;
  arg0[3] = 0;
  arg0[4] = result1 - result8;
  arg0[5] = 1 - result - result5;
  arg0[6] = result4 + result6;
  arg0[7] = 0;
  arg0[8] = result3 + result7;
  arg0[9] = result4 - result6;
  arg0[10] = 1 - result - result2;
  arg0[11] = 0;
  arg0[12] = 0;
  arg0[13] = 0;
  arg0[14] = 0;
  arg0[15] = 1;
  return arg0;
}
export function fromQuat2(arg0, arg1) {
  const aRRAY_TYPE = new value.ARRAY_TYPE(3);
  const sum = tmp2 * tmp2 + tmp3 * tmp3 + tmp4 * tmp4 + tmp5 * tmp5;
  if (sum > 0) {
    aRRAY_TYPE[0] = 2 * (tmp6 * tmp5 + tmp9 * tmp2 + tmp7 * tmp4 - tmp8 * tmp3) / sum;
    aRRAY_TYPE[1] = 2 * (tmp7 * tmp5 + tmp9 * tmp3 + tmp8 * tmp2 - tmp6 * tmp4) / sum;
    aRRAY_TYPE[2] = 2 * (tmp8 * tmp5 + tmp9 * tmp4 + tmp6 * tmp3 - tmp7 * tmp2) / sum;
  } else {
    aRRAY_TYPE[0] = 2 * (tmp6 * tmp5 + tmp9 * tmp2 + tmp7 * tmp4 - tmp8 * tmp3);
    aRRAY_TYPE[1] = 2 * (tmp7 * tmp5 + tmp9 * tmp3 + tmp8 * tmp2 - tmp6 * tmp4);
    aRRAY_TYPE[2] = 2 * (tmp8 * tmp5 + tmp9 * tmp4 + tmp6 * tmp3 - tmp7 * tmp2);
  }
  [tmp11, tmp12, tmp13, tmp14] = arg1;
  const sum1 = tmp11 + tmp11;
  const sum2 = tmp12 + tmp12;
  const sum3 = tmp13 + tmp13;
  const result = tmp11 * sum1;
  const result1 = tmp11 * sum2;
  const result2 = tmp11 * sum3;
  const result3 = tmp12 * sum2;
  const result4 = tmp12 * sum3;
  const result5 = tmp13 * sum3;
  const result6 = tmp14 * sum1;
  const result7 = tmp14 * sum2;
  const result8 = tmp14 * sum3;
  arg0[0] = 1 - (result3 + result5);
  arg0[1] = result1 + result8;
  arg0[2] = result2 - result7;
  arg0[3] = 0;
  arg0[4] = result1 - result8;
  arg0[5] = 1 - (result + result5);
  arg0[6] = result4 + result6;
  arg0[7] = 0;
  arg0[8] = result2 + result7;
  arg0[9] = result4 - result6;
  arg0[10] = 1 - (result + result3);
  arg0[11] = 0;
  arg0[12] = aRRAY_TYPE[0];
  arg0[13] = aRRAY_TYPE[1];
  arg0[14] = aRRAY_TYPE[2];
  arg0[15] = 1;
  return arg0;
}
export function fromRotation(arg0, result1, arg2) {
  [tmp, tmp2, tmp3] = arg2;
  const sqrtResult = Math.sqrt(tmp * tmp + tmp2 * tmp2 + tmp3 * tmp3);
  if (sqrtResult < value.EPSILON) {
    return null;
  } else {
    const result = 1 / sqrtResult;
    result1 = tmp * result;
    const result2 = tmp2 * result;
    const result3 = tmp3 * result;
    const _Math = Math;
    const sinResult = Math.sin(result1);
    const _Math2 = Math;
    const cosResult = Math.cos(result1);
    const diff = 1 - cosResult;
    arg0[0] = result1 * result1 * diff + cosResult;
    arg0[1] = result2 * result1 * diff + result3 * sinResult;
    arg0[2] = result3 * result1 * diff - result2 * sinResult;
    arg0[3] = 0;
    arg0[4] = result1 * result2 * diff - result3 * sinResult;
    arg0[5] = result2 * result2 * diff + cosResult;
    arg0[6] = result3 * result2 * diff + result1 * sinResult;
    arg0[7] = 0;
    arg0[8] = result1 * result3 * diff + result2 * sinResult;
    arg0[9] = result2 * result3 * diff - result1 * sinResult;
    arg0[10] = result3 * result3 * diff + cosResult;
    arg0[11] = 0;
    arg0[12] = 0;
    arg0[13] = 0;
    arg0[14] = 0;
    arg0[15] = 1;
    return arg0;
  }
}
export function fromRotationTranslation(arg0, arg1, arg2) {
  [tmp, tmp2, tmp3, tmp4] = arg1;
  const sum = tmp + tmp;
  const sum1 = tmp2 + tmp2;
  const sum2 = tmp3 + tmp3;
  const result = tmp * sum;
  const result1 = tmp * sum1;
  const result2 = tmp * sum2;
  const result3 = tmp2 * sum1;
  const result4 = tmp2 * sum2;
  const result5 = tmp3 * sum2;
  const result6 = tmp4 * sum;
  const result7 = tmp4 * sum1;
  const result8 = tmp4 * sum2;
  arg0[0] = 1 - (result3 + result5);
  arg0[1] = result1 + result8;
  arg0[2] = result2 - result7;
  arg0[3] = 0;
  arg0[4] = result1 - result8;
  arg0[5] = 1 - (result + result5);
  arg0[6] = result4 + result6;
  arg0[7] = 0;
  arg0[8] = result2 + result7;
  arg0[9] = result4 - result6;
  arg0[10] = 1 - (result + result3);
  arg0[11] = 0;
  arg0[12] = arg2[0];
  arg0[13] = arg2[1];
  arg0[14] = arg2[2];
  arg0[15] = 1;
  return arg0;
}
export function fromRotationTranslationScale(arg0, arg1, arg2, arg3) {
  [tmp, tmp2, tmp3, tmp4] = arg1;
  const sum = tmp + tmp;
  const sum1 = tmp2 + tmp2;
  const sum2 = tmp3 + tmp3;
  const result = tmp * sum;
  const result1 = tmp * sum1;
  const result2 = tmp * sum2;
  const result3 = tmp2 * sum1;
  const result4 = tmp2 * sum2;
  const result5 = tmp3 * sum2;
  const result6 = tmp4 * sum;
  const result7 = tmp4 * sum1;
  const result8 = tmp4 * sum2;
  [tmp17, tmp18, tmp19] = arg3;
  arg0[0] = (1 - (result3 + result5)) * tmp17;
  arg0[1] = (result1 + result8) * tmp17;
  arg0[2] = (result2 - result7) * tmp17;
  arg0[3] = 0;
  arg0[4] = (result1 - result8) * tmp18;
  arg0[5] = (1 - (result + result5)) * tmp18;
  arg0[6] = (result4 + result6) * tmp18;
  arg0[7] = 0;
  arg0[8] = (result2 + result7) * tmp19;
  arg0[9] = (result4 - result6) * tmp19;
  arg0[10] = (1 - (result + result3)) * tmp19;
  arg0[11] = 0;
  arg0[12] = arg2[0];
  arg0[13] = arg2[1];
  arg0[14] = arg2[2];
  arg0[15] = 1;
  return arg0;
}
export function fromRotationTranslationScaleOrigin(arg0, arg1, arg2, arg3, arg4) {
  [tmp, tmp2, tmp3, tmp4] = arg1;
  const sum = tmp + tmp;
  const sum1 = tmp2 + tmp2;
  const sum2 = tmp3 + tmp3;
  const result = tmp * sum;
  const result1 = tmp * sum1;
  const result2 = tmp * sum2;
  const result3 = tmp2 * sum1;
  const result4 = tmp2 * sum2;
  const result5 = tmp3 * sum2;
  const result6 = tmp4 * sum;
  const result7 = tmp4 * sum1;
  const result8 = tmp4 * sum2;
  [tmp17, tmp18, tmp19] = arg3;
  [tmp20, tmp21, tmp22] = arg4;
  const result9 = (1 - (result3 + result5)) * tmp17;
  const result10 = (result1 + result8) * tmp17;
  const result11 = (result2 - result7) * tmp17;
  const result12 = (result1 - result8) * tmp18;
  const result13 = (1 - (result + result5)) * tmp18;
  const result14 = (result4 + result6) * tmp18;
  const result15 = (result2 + result7) * tmp19;
  const result16 = (result4 - result6) * tmp19;
  const result17 = (1 - (result + result3)) * tmp19;
  arg0[0] = result9;
  arg0[1] = result10;
  arg0[2] = result11;
  arg0[3] = 0;
  arg0[4] = result12;
  arg0[5] = result13;
  arg0[6] = result14;
  arg0[7] = 0;
  arg0[8] = result15;
  arg0[9] = result16;
  arg0[10] = result17;
  arg0[11] = 0;
  arg0[12] = arg2[0] + tmp20 - (result9 * tmp20 + result12 * tmp21 + result15 * tmp22);
  arg0[13] = arg2[1] + tmp21 - (result10 * tmp20 + result13 * tmp21 + result16 * tmp22);
  arg0[14] = arg2[2] + tmp22 - (result11 * tmp20 + result14 * tmp21 + result17 * tmp22);
  arg0[15] = 1;
  return arg0;
}
export function fromScaling(arg0, arg1) {
  arg0[0] = arg1[0];
  arg0[1] = 0;
  arg0[2] = 0;
  arg0[3] = 0;
  arg0[4] = 0;
  arg0[5] = arg1[1];
  arg0[6] = 0;
  arg0[7] = 0;
  arg0[8] = 0;
  arg0[9] = 0;
  arg0[10] = arg1[2];
  arg0[11] = 0;
  arg0[12] = 0;
  arg0[13] = 0;
  arg0[14] = 0;
  arg0[15] = 1;
  return arg0;
}
export function fromTranslation(arg0, arg1) {
  arg0[0] = 1;
  arg0[1] = 0;
  arg0[2] = 0;
  arg0[3] = 0;
  arg0[4] = 0;
  arg0[5] = 1;
  arg0[6] = 0;
  arg0[7] = 0;
  arg0[8] = 0;
  arg0[9] = 0;
  arg0[10] = 1;
  arg0[11] = 0;
  arg0[12] = arg1[0];
  arg0[13] = arg1[1];
  arg0[14] = arg1[2];
  arg0[15] = 1;
  return arg0;
}
export function fromValues(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15) {
  const aRRAY_TYPE = new value.ARRAY_TYPE(16);
  aRRAY_TYPE[0] = arg0;
  aRRAY_TYPE[1] = arg1;
  aRRAY_TYPE[2] = arg2;
  aRRAY_TYPE[3] = arg3;
  aRRAY_TYPE[4] = arg4;
  aRRAY_TYPE[5] = arg5;
  aRRAY_TYPE[6] = arg6;
  aRRAY_TYPE[7] = arg7;
  aRRAY_TYPE[8] = arg8;
  aRRAY_TYPE[9] = arg9;
  aRRAY_TYPE[10] = arg10;
  aRRAY_TYPE[11] = arg11;
  aRRAY_TYPE[12] = arg12;
  aRRAY_TYPE[13] = arg13;
  aRRAY_TYPE[14] = arg14;
  aRRAY_TYPE[15] = arg15;
  return aRRAY_TYPE;
}
export function fromXRotation(arg0, result1) {
  const sinResult = Math.sin(result1);
  const cosResult = Math.cos(result1);
  arg0[0] = 1;
  arg0[1] = 0;
  arg0[2] = 0;
  arg0[3] = 0;
  arg0[4] = 0;
  arg0[5] = cosResult;
  arg0[6] = sinResult;
  arg0[7] = 0;
  arg0[8] = 0;
  arg0[9] = -sinResult;
  arg0[10] = cosResult;
  arg0[11] = 0;
  arg0[12] = 0;
  arg0[13] = 0;
  arg0[14] = 0;
  arg0[15] = 1;
  return arg0;
}
export function fromYRotation(arg0, result1) {
  const sinResult = Math.sin(result1);
  const cosResult = Math.cos(result1);
  arg0[0] = cosResult;
  arg0[1] = 0;
  arg0[2] = -sinResult;
  arg0[3] = 0;
  arg0[4] = 0;
  arg0[5] = 1;
  arg0[6] = 0;
  arg0[7] = 0;
  arg0[8] = sinResult;
  arg0[9] = 0;
  arg0[10] = cosResult;
  arg0[11] = 0;
  arg0[12] = 0;
  arg0[13] = 0;
  arg0[14] = 0;
  arg0[15] = 1;
  return arg0;
}
export function fromZRotation(arg0, result1) {
  const sinResult = Math.sin(result1);
  const cosResult = Math.cos(result1);
  arg0[0] = cosResult;
  arg0[1] = sinResult;
  arg0[2] = 0;
  arg0[3] = 0;
  arg0[4] = -sinResult;
  arg0[5] = cosResult;
  arg0[6] = 0;
  arg0[7] = 0;
  arg0[8] = 0;
  arg0[9] = 0;
  arg0[10] = 1;
  arg0[11] = 0;
  arg0[12] = 0;
  arg0[13] = 0;
  arg0[14] = 0;
  arg0[15] = 1;
  return arg0;
}
export function frustum(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
  const result = 1 / (arg2 - arg1);
  const result1 = 1 / (arg4 - arg3);
  const result2 = 1 / (arg5 - arg6);
  arg0[0] = 2 * arg5 * result;
  arg0[1] = 0;
  arg0[2] = 0;
  arg0[3] = 0;
  arg0[4] = 0;
  arg0[5] = 2 * arg5 * result1;
  arg0[6] = 0;
  arg0[7] = 0;
  arg0[8] = (arg2 + arg1) * result;
  arg0[9] = (arg4 + arg3) * result1;
  arg0[10] = (arg6 + arg5) * result2;
  arg0[11] = -1;
  arg0[12] = 0;
  arg0[13] = 0;
  arg0[14] = arg6 * arg5 * 2 * result2;
  arg0[15] = 0;
  return arg0;
}
export function getRotation(_typeof, arg1) {
  const aRRAY_TYPE = new value.ARRAY_TYPE(3);
  const first = arg1[0];
  aRRAY_TYPE[0] = Math.sqrt(first * first + arg1[1] * arg1[1] + arg1[2] * arg1[2]);
  aRRAY_TYPE[1] = Math.sqrt(arg1[4] * arg1[4] + arg1[5] * arg1[5] + arg1[6] * arg1[6]);
  aRRAY_TYPE[2] = Math.sqrt(arg1[8] * arg1[8] + arg1[9] * arg1[9] + arg1[10] * arg1[10]);
  const result = 1 / aRRAY_TYPE[0];
  const result1 = 1 / aRRAY_TYPE[1];
  const result2 = 1 / aRRAY_TYPE[2];
  const result3 = arg1[0] * result;
  const result4 = arg1[1] * result1;
  const result5 = arg1[2] * result2;
  const result6 = arg1[4] * result;
  const result7 = arg1[5] * result1;
  const result8 = arg1[6] * result2;
  const result9 = arg1[8] * result;
  const result10 = arg1[9] * result1;
  const result11 = arg1[10] * result2;
  const sum = result3 + result7 + result11;
  if (0 < sum) {
    const _Math4 = Math;
    const result12 = 2 * Math.sqrt(sum + 1);
    _typeof[3] = 0.25 * result12;
    _typeof[0] = (result8 - result10) / result12;
    _typeof[1] = (result9 - result5) / result12;
    _typeof[2] = (result4 - result6) / result12;
  } else {
    if (result7 < result3) {
      if (result11 < result3) {
        const _Math3 = Math;
        const result13 = 2 * Math.sqrt(1 + result3 - result7 - result11);
        _typeof[3] = (result8 - result10) / result13;
        _typeof[0] = 0.25 * result13;
        _typeof[1] = (result4 + result6) / result13;
        _typeof[2] = (result9 + result5) / result13;
      }
    }
    if (result11 < result7) {
      const _Math2 = Math;
      const result14 = 2 * Math.sqrt(1 + result7 - result3 - result11);
      _typeof[3] = (result9 - result5) / result14;
      _typeof[0] = (result4 + result6) / result14;
      _typeof[1] = 0.25 * result14;
      _typeof[2] = (result8 + result10) / result14;
    } else {
      const _Math = Math;
      const result15 = 2 * Math.sqrt(1 + result11 - result3 - result7);
      _typeof[3] = (result4 - result6) / result15;
      _typeof[0] = (result9 + result5) / result15;
      _typeof[1] = (result8 + result10) / result15;
      _typeof[2] = 0.25 * result15;
    }
  }
  return _typeof;
}
export function getScaling(arg0, arg1) {
  const first = arg1[0];
  arg0[0] = Math.sqrt(first * first + arg1[1] * arg1[1] + arg1[2] * arg1[2]);
  arg0[1] = Math.sqrt(arg1[4] * arg1[4] + arg1[5] * arg1[5] + arg1[6] * arg1[6]);
  arg0[2] = Math.sqrt(arg1[8] * arg1[8] + arg1[9] * arg1[9] + arg1[10] * arg1[10]);
  return arg0;
}
export function getTranslation(arg0, arg1) {
  arg0[0] = arg1[12];
  arg0[1] = arg1[13];
  arg0[2] = arg1[14];
  return arg0;
}
export function identity(arg0) {
  arg0[0] = 1;
  arg0[1] = 0;
  arg0[2] = 0;
  arg0[3] = 0;
  arg0[4] = 0;
  arg0[5] = 1;
  arg0[6] = 0;
  arg0[7] = 0;
  arg0[8] = 0;
  arg0[9] = 0;
  arg0[10] = 1;
  arg0[11] = 0;
  arg0[12] = 0;
  arg0[13] = 0;
  arg0[14] = 0;
  arg0[15] = 1;
  return arg0;
}
export function invert(arg0, arg1) {
  [tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = arg1;
  const diff = tmp * tmp6 - tmp2 * tmp5;
  const diff1 = tmp * tmp7 - tmp3 * tmp5;
  const diff2 = tmp * tmp8 - tmp4 * tmp5;
  const diff3 = tmp2 * tmp7 - tmp3 * tmp6;
  const diff4 = tmp2 * tmp8 - tmp4 * tmp6;
  const diff5 = tmp3 * tmp8 - tmp4 * tmp7;
  const diff6 = tmp9 * tmp14 - tmp10 * tmp13;
  const diff7 = tmp9 * tmp15 - tmp11 * tmp13;
  const diff8 = tmp9 * tmp16 - tmp12 * tmp13;
  const diff9 = tmp10 * tmp15 - tmp11 * tmp14;
  const diff10 = tmp10 * tmp16 - tmp12 * tmp14;
  const diff11 = tmp11 * tmp16 - tmp12 * tmp15;
  const sum = diff * diff11 - diff1 * diff10 + diff2 * diff9 + diff3 * diff8 - diff4 * diff7 + diff5 * diff6;
  if (sum) {
    const result = 1 / sum;
    arg0[0] = (tmp6 * diff11 - tmp7 * diff10 + tmp8 * diff9) * result;
    arg0[1] = (tmp3 * diff10 - tmp2 * diff11 - tmp4 * diff9) * result;
    arg0[2] = (tmp14 * diff5 - tmp15 * diff4 + tmp16 * diff3) * result;
    arg0[3] = (tmp11 * diff4 - tmp10 * diff5 - tmp12 * diff3) * result;
    arg0[4] = (tmp7 * diff8 - tmp5 * diff11 - tmp8 * diff7) * result;
    arg0[5] = (tmp * diff11 - tmp3 * diff8 + tmp4 * diff7) * result;
    arg0[6] = (tmp15 * diff2 - tmp13 * diff5 - tmp16 * diff1) * result;
    arg0[7] = (tmp9 * diff5 - tmp11 * diff2 + tmp12 * diff1) * result;
    arg0[8] = (tmp5 * diff10 - tmp6 * diff8 + tmp8 * diff6) * result;
    arg0[9] = (tmp2 * diff8 - tmp * diff10 - tmp4 * diff6) * result;
    arg0[10] = (tmp13 * diff4 - tmp14 * diff2 + tmp16 * diff) * result;
    arg0[11] = (tmp10 * diff2 - tmp9 * diff4 - tmp12 * diff) * result;
    arg0[12] = (tmp6 * diff7 - tmp5 * diff9 - tmp7 * diff6) * result;
    arg0[13] = (tmp * diff9 - tmp2 * diff7 + tmp3 * diff6) * result;
    arg0[14] = (tmp14 * diff1 - tmp13 * diff3 - tmp15 * diff) * result;
    arg0[15] = (tmp9 * diff3 - tmp10 * diff1 + tmp11 * diff) * result;
    return arg0;
  } else {
    return null;
  }
}
export function lookAt(arg0, arg1, arg2, arg3) {
  [tmp, tmp2, tmp3] = arg1;
  [tmp4, tmp5, tmp6] = arg3;
  [tmp7, tmp8, tmp9] = arg2;
  if (Math.abs(tmp - tmp7) < value.EPSILON) {
    const _Math = Math;
    if (Math.abs(tmp2 - tmp8) < value.EPSILON) {
      const _Math2 = Math;
      if (Math.abs(tmp3 - tmp9) < value.EPSILON) {
        arg0[0] = 1;
        arg0[1] = 0;
        arg0[2] = 0;
        arg0[3] = 0;
        arg0[4] = 0;
        arg0[5] = 1;
        arg0[6] = 0;
        arg0[7] = 0;
        arg0[8] = 0;
        arg0[9] = 0;
        arg0[10] = 1;
        arg0[11] = 0;
        arg0[12] = 0;
        arg0[13] = 0;
        arg0[14] = 0;
        arg0[15] = 1;
        return arg0;
      }
    }
  }
  const diff = tmp - tmp7;
  const diff1 = tmp2 - tmp8;
  const diff2 = tmp3 - tmp9;
  const result = 1 / Math.sqrt(diff * diff + diff1 * diff1 + diff2 * diff2);
  const result1 = diff2 * result;
  const result2 = diff1 * result;
  const diff3 = tmp5 * result1 - tmp6 * result2;
  const result3 = diff * result;
  const diff4 = tmp6 * result3 - tmp4 * result1;
  const diff5 = tmp4 * result2 - tmp5 * result3;
  const sqrtResult = Math.sqrt(diff3 * diff3 + diff4 * diff4 + diff5 * diff5);
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  if (sqrtResult) {
    const result4 = 1 / sqrtResult;
    num3 = diff3 * result4;
    num2 = diff4 * result4;
    num = diff5 * result4;
  }
  const diff6 = result2 * num - result1 * num2;
  const diff7 = result1 * num3 - result3 * num;
  const diff8 = result3 * num2 - result2 * num3;
  const sqrtResult1 = Math.sqrt(diff6 * diff6 + diff7 * diff7 + diff8 * diff8);
  let num4 = 0;
  let num5 = 0;
  let num6 = 0;
  if (sqrtResult1) {
    const result5 = 1 / sqrtResult1;
    num6 = diff6 * result5;
    num5 = diff7 * result5;
    num4 = diff8 * result5;
  }
  arg0[0] = num3;
  arg0[1] = num6;
  arg0[2] = result3;
  arg0[3] = 0;
  arg0[4] = num2;
  arg0[5] = num5;
  arg0[6] = result2;
  arg0[7] = 0;
  arg0[8] = num;
  arg0[9] = num4;
  arg0[10] = result1;
  arg0[11] = 0;
  arg0[12] = -num3 * tmp + num2 * tmp2 + num * tmp3;
  arg0[13] = -num6 * tmp + num5 * tmp2 + num4 * tmp3;
  arg0[14] = -result3 * tmp + result2 * tmp2 + result1 * tmp3;
  arg0[15] = 1;
  return arg0;
}
export { multiply };
export function multiplyScalar(arg0, arg1, arg2) {
  arg0[0] = arg1[0] * arg2;
  arg0[1] = arg1[1] * arg2;
  arg0[2] = arg1[2] * arg2;
  arg0[3] = arg1[3] * arg2;
  arg0[4] = arg1[4] * arg2;
  arg0[5] = arg1[5] * arg2;
  arg0[6] = arg1[6] * arg2;
  arg0[7] = arg1[7] * arg2;
  arg0[8] = arg1[8] * arg2;
  arg0[9] = arg1[9] * arg2;
  arg0[10] = arg1[10] * arg2;
  arg0[11] = arg1[11] * arg2;
  arg0[12] = arg1[12] * arg2;
  arg0[13] = arg1[13] * arg2;
  arg0[14] = arg1[14] * arg2;
  arg0[15] = arg1[15] * arg2;
  return arg0;
}
export function multiplyScalarAndAdd(arg0, arg1, arg2, arg3) {
  arg0[0] = arg1[0] + arg2[0] * arg3;
  arg0[1] = arg1[1] + arg2[1] * arg3;
  arg0[2] = arg1[2] + arg2[2] * arg3;
  arg0[3] = arg1[3] + arg2[3] * arg3;
  arg0[4] = arg1[4] + arg2[4] * arg3;
  arg0[5] = arg1[5] + arg2[5] * arg3;
  arg0[6] = arg1[6] + arg2[6] * arg3;
  arg0[7] = arg1[7] + arg2[7] * arg3;
  arg0[8] = arg1[8] + arg2[8] * arg3;
  arg0[9] = arg1[9] + arg2[9] * arg3;
  arg0[10] = arg1[10] + arg2[10] * arg3;
  arg0[11] = arg1[11] + arg2[11] * arg3;
  arg0[12] = arg1[12] + arg2[12] * arg3;
  arg0[13] = arg1[13] + arg2[13] * arg3;
  arg0[14] = arg1[14] + arg2[14] * arg3;
  arg0[15] = arg1[15] + arg2[15] * arg3;
  return arg0;
}
export { orthoNO };
export function orthoZO(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
  const result = 1 / (arg1 - arg2);
  const result1 = 1 / (arg3 - arg4);
  const result2 = 1 / (arg5 - arg6);
  arg0[0] = -2 * result;
  arg0[1] = 0;
  arg0[2] = 0;
  arg0[3] = 0;
  arg0[4] = 0;
  arg0[5] = -2 * result1;
  arg0[6] = 0;
  arg0[7] = 0;
  arg0[8] = 0;
  arg0[9] = 0;
  arg0[10] = result2;
  arg0[11] = 0;
  arg0[12] = (arg1 + arg2) * result;
  arg0[13] = (arg4 + arg3) * result1;
  arg0[14] = arg5 * result2;
  arg0[15] = 1;
  return arg0;
}
export function perspectiveFromFieldOfView(arg0, upDegrees, arg2, arg3) {
  const tanResult = Math.tan(upDegrees.upDegrees * Math.PI / 180);
  const tanResult1 = Math.tan(upDegrees.downDegrees * Math.PI / 180);
  const tanResult2 = Math.tan(upDegrees.leftDegrees * Math.PI / 180);
  const tanResult3 = Math.tan(upDegrees.rightDegrees * Math.PI / 180);
  const result = 2 / (tanResult2 + tanResult3);
  const result1 = 2 / (tanResult + tanResult1);
  arg0[0] = result;
  arg0[1] = 0;
  arg0[2] = 0;
  arg0[3] = 0;
  arg0[4] = 0;
  arg0[5] = result1;
  arg0[6] = 0;
  arg0[7] = 0;
  arg0[8] = -tanResult2 - tanResult3 * result * 0.5;
  arg0[9] = (tanResult - tanResult1) * result1 * 0.5;
  arg0[10] = arg3 / (arg2 - arg3);
  arg0[11] = -1;
  arg0[12] = 0;
  arg0[13] = 0;
  arg0[14] = arg3 * arg2 / (arg2 - arg3);
  arg0[15] = 0;
  return arg0;
}
export { perspectiveNO };
export function perspectiveZO(arg0, arg1, arg2, arg3, arg4) {
  const result = 1 / Math.tan(arg1 / 2);
  arg0[0] = result / arg2;
  arg0[1] = 0;
  arg0[2] = 0;
  arg0[3] = 0;
  arg0[4] = 0;
  arg0[5] = result;
  arg0[6] = 0;
  arg0[7] = 0;
  arg0[8] = 0;
  arg0[9] = 0;
  arg0[11] = -1;
  arg0[12] = 0;
  arg0[13] = 0;
  arg0[15] = 0;
  if (null != arg4) {
    if (arg4 !== Infinity) {
      const result1 = 1 / (arg3 - arg4);
      arg0[10] = arg4 * result1;
      arg0[14] = arg4 * arg3 * result1;
    }
    return arg0;
  }
  arg0[10] = -1;
  arg0[14] = -arg3;
}
export function rotate(arg0, arg1, result1, arg3) {
  [tmp, tmp2, tmp3] = arg3;
  const sqrtResult = Math.sqrt(tmp * tmp + tmp2 * tmp2 + tmp3 * tmp3);
  if (sqrtResult < value.EPSILON) {
    return null;
  } else {
    const result = 1 / sqrtResult;
    result1 = tmp * result;
    const result2 = tmp2 * result;
    const result3 = tmp3 * result;
    const _Math = Math;
    const sinResult = Math.sin(result1);
    const _Math2 = Math;
    const cosResult = Math.cos(result1);
    const diff = 1 - cosResult;
    [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27] = arg1;
    const sum = result1 * result1 * diff + cosResult;
    const sum1 = result2 * result1 * diff + result3 * sinResult;
    const diff1 = result3 * result1 * diff - result2 * sinResult;
    const diff2 = result1 * result2 * diff - result3 * sinResult;
    const sum2 = result2 * result2 * diff + cosResult;
    const sum3 = result3 * result2 * diff + result1 * sinResult;
    const sum4 = result1 * result3 * diff + result2 * sinResult;
    const diff3 = result2 * result3 * diff - result1 * sinResult;
    const sum5 = result3 * result3 * diff + cosResult;
    arg0[0] = tmp16 * sum + tmp20 * sum1 + tmp24 * diff1;
    arg0[1] = tmp17 * sum + tmp21 * sum1 + tmp25 * diff1;
    arg0[2] = tmp18 * sum + tmp22 * sum1 + tmp26 * diff1;
    arg0[3] = tmp19 * sum + tmp23 * sum1 + tmp27 * diff1;
    arg0[4] = tmp16 * diff2 + tmp20 * sum2 + tmp24 * sum3;
    arg0[5] = tmp17 * diff2 + tmp21 * sum2 + tmp25 * sum3;
    arg0[6] = tmp18 * diff2 + tmp22 * sum2 + tmp26 * sum3;
    arg0[7] = tmp19 * diff2 + tmp23 * sum2 + tmp27 * sum3;
    arg0[8] = tmp16 * sum4 + tmp20 * diff3 + tmp24 * sum5;
    arg0[9] = tmp17 * sum4 + tmp21 * diff3 + tmp25 * sum5;
    arg0[10] = tmp18 * sum4 + tmp22 * diff3 + tmp26 * sum5;
    arg0[11] = tmp19 * sum4 + tmp23 * diff3 + tmp27 * sum5;
    if (arg1 !== arg0) {
      arg0[12] = arg1[12];
      arg0[13] = arg1[13];
      arg0[14] = arg1[14];
      arg0[15] = arg1[15];
    }
    return arg0;
  }
}
export function rotateX(arg0, arg1, result1) {
  const sinResult = Math.sin(result1);
  const cosResult = Math.cos(result1);
  if (arg1 !== arg0) {
    arg0[0] = arg1[0];
    arg0[1] = arg1[1];
    arg0[2] = arg1[2];
    arg0[3] = arg1[3];
    arg0[12] = arg1[12];
    arg0[13] = arg1[13];
    arg0[14] = arg1[14];
    arg0[15] = arg1[15];
  }
  arg0[4] = arg1[4] * cosResult + arg1[8] * sinResult;
  arg0[5] = arg1[5] * cosResult + arg1[9] * sinResult;
  arg0[6] = arg1[6] * cosResult + arg1[10] * sinResult;
  arg0[7] = arg1[7] * cosResult + arg1[11] * sinResult;
  arg0[8] = arg1[8] * cosResult - arg1[4] * sinResult;
  arg0[9] = arg1[9] * cosResult - arg1[5] * sinResult;
  arg0[10] = arg1[10] * cosResult - arg1[6] * sinResult;
  arg0[11] = arg1[11] * cosResult - arg1[7] * sinResult;
  return arg0;
}
export function rotateY(arg0, arg1, result1) {
  const sinResult = Math.sin(result1);
  const cosResult = Math.cos(result1);
  const first = arg1[0];
  if (arg1 !== arg0) {
    arg0[4] = arg1[4];
    arg0[5] = arg1[5];
    arg0[6] = arg1[6];
    arg0[7] = arg1[7];
    arg0[12] = arg1[12];
    arg0[13] = arg1[13];
    arg0[14] = arg1[14];
    arg0[15] = arg1[15];
  }
  arg0[0] = first * cosResult - arg1[8] * sinResult;
  arg0[1] = arg1[1] * cosResult - arg1[9] * sinResult;
  arg0[2] = arg1[2] * cosResult - arg1[10] * sinResult;
  arg0[3] = arg1[3] * cosResult - arg1[11] * sinResult;
  arg0[8] = first * sinResult + arg1[8] * cosResult;
  arg0[9] = arg1[1] * sinResult + arg1[9] * cosResult;
  arg0[10] = arg1[2] * sinResult + arg1[10] * cosResult;
  arg0[11] = arg1[3] * sinResult + arg1[11] * cosResult;
  return arg0;
}
export function rotateZ(arg0, arg1, result1) {
  const sinResult = Math.sin(result1);
  const cosResult = Math.cos(result1);
  [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = arg1;
  if (arg1 !== arg0) {
    arg0[8] = arg1[8];
    arg0[9] = arg1[9];
    arg0[10] = arg1[10];
    arg0[11] = arg1[11];
    arg0[12] = arg1[12];
    arg0[13] = arg1[13];
    arg0[14] = arg1[14];
    arg0[15] = arg1[15];
  }
  arg0[0] = tmp3 * cosResult + tmp7 * sinResult;
  arg0[1] = tmp4 * cosResult + tmp8 * sinResult;
  arg0[2] = tmp5 * cosResult + tmp9 * sinResult;
  arg0[3] = tmp6 * cosResult + tmp10 * sinResult;
  arg0[4] = tmp7 * cosResult - tmp3 * sinResult;
  arg0[5] = tmp8 * cosResult - tmp4 * sinResult;
  arg0[6] = tmp9 * cosResult - tmp5 * sinResult;
  arg0[7] = tmp10 * cosResult - tmp6 * sinResult;
  return arg0;
}
export function scale(arg0, arg1, arg2) {
  [tmp, tmp2, tmp3] = arg2;
  arg0[0] = arg1[0] * tmp;
  arg0[1] = arg1[1] * tmp;
  arg0[2] = arg1[2] * tmp;
  arg0[3] = arg1[3] * tmp;
  arg0[4] = arg1[4] * tmp2;
  arg0[5] = arg1[5] * tmp2;
  arg0[6] = arg1[6] * tmp2;
  arg0[7] = arg1[7] * tmp2;
  arg0[8] = arg1[8] * tmp3;
  arg0[9] = arg1[9] * tmp3;
  arg0[10] = arg1[10] * tmp3;
  arg0[11] = arg1[11] * tmp3;
  arg0[12] = arg1[12];
  arg0[13] = arg1[13];
  arg0[14] = arg1[14];
  arg0[15] = arg1[15];
  return arg0;
}
export function set(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16) {
  arg0[0] = arg1;
  arg0[1] = arg2;
  arg0[2] = arg3;
  arg0[3] = arg4;
  arg0[4] = arg5;
  arg0[5] = arg6;
  arg0[6] = arg7;
  arg0[7] = arg8;
  arg0[8] = arg9;
  arg0[9] = arg10;
  arg0[10] = arg11;
  arg0[11] = arg12;
  arg0[12] = arg13;
  arg0[13] = arg14;
  arg0[14] = arg15;
  arg0[15] = arg16;
  return arg0;
}
export function str(arg0) {
  return "mat4(" + arg0[0] + ", " + arg0[1] + ", " + arg0[2] + ", " + arg0[3] + ", " + arg0[4] + ", " + arg0[5] + ", " + arg0[6] + ", " + arg0[7] + ", " + arg0[8] + ", " + arg0[9] + ", " + arg0[10] + ", " + arg0[11] + ", " + arg0[12] + ", " + arg0[13] + ", " + arg0[14] + ", " + arg0[15] + ")";
}
export { subtract };
export function targetTo(arg0, arg1, arg2, arg3) {
  [tmp, tmp2, tmp3] = arg1;
  [tmp4, tmp5, tmp6] = arg3;
  const diff = tmp - arg2[0];
  const diff1 = tmp2 - arg2[1];
  const diff2 = tmp3 - arg2[2];
  const sum = diff * diff + diff1 * diff1 + diff2 * diff2;
  let result3 = diff2;
  let result2 = diff1;
  let result1 = diff;
  if (sum > 0) {
    const _Math = Math;
    const result = 1 / Math.sqrt(sum);
    result1 = diff * result;
    result2 = diff1 * result;
    result3 = diff2 * result;
  }
  const diff3 = tmp5 * result3 - tmp6 * result2;
  const diff4 = tmp6 * result1 - tmp4 * result3;
  const diff5 = tmp4 * result2 - tmp5 * result1;
  const sum1 = diff3 * diff3 + diff4 * diff4 + diff5 * diff5;
  let result7 = diff5;
  let result6 = diff4;
  let result5 = diff3;
  if (sum1 > 0) {
    const _Math2 = Math;
    const result4 = 1 / Math.sqrt(sum1);
    result5 = diff3 * result4;
    result6 = diff4 * result4;
    result7 = diff5 * result4;
  }
  arg0[0] = result5;
  arg0[1] = result6;
  arg0[2] = result7;
  arg0[3] = 0;
  arg0[4] = result2 * result7 - result3 * result6;
  arg0[5] = result3 * result5 - result1 * result7;
  arg0[6] = result1 * result6 - result2 * result5;
  arg0[7] = 0;
  arg0[8] = result1;
  arg0[9] = result2;
  arg0[10] = result3;
  arg0[11] = 0;
  arg0[12] = tmp;
  arg0[13] = tmp2;
  arg0[14] = tmp3;
  arg0[15] = 1;
  return arg0;
}
export function translate(arg0, arg1, arg2) {
  [tmp, tmp2, tmp3] = arg2;
  if (arg1 === arg0) {
    arg0[12] = arg1[0] * tmp + arg1[4] * tmp2 + arg1[8] * tmp3 + arg1[12];
    arg0[13] = arg1[1] * tmp + arg1[5] * tmp2 + arg1[9] * tmp3 + arg1[13];
    arg0[14] = arg1[2] * tmp + arg1[6] * tmp2 + arg1[10] * tmp3 + arg1[14];
    arg0[15] = arg1[3] * tmp + arg1[7] * tmp2 + arg1[11] * tmp3 + arg1[15];
  } else {
    [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15] = arg1;
    arg0[0] = tmp4;
    arg0[1] = tmp5;
    arg0[2] = tmp6;
    arg0[3] = tmp7;
    arg0[4] = tmp8;
    arg0[5] = tmp9;
    arg0[6] = tmp10;
    arg0[7] = tmp11;
    arg0[8] = tmp12;
    arg0[9] = tmp13;
    arg0[10] = tmp14;
    arg0[11] = tmp15;
    arg0[12] = tmp4 * tmp + tmp8 * tmp2 + tmp12 * tmp3 + arg1[12];
    arg0[13] = tmp5 * tmp + tmp9 * tmp2 + tmp13 * tmp3 + arg1[13];
    arg0[14] = tmp6 * tmp + tmp10 * tmp2 + tmp14 * tmp3 + arg1[14];
    arg0[15] = tmp7 * tmp + tmp11 * tmp2 + tmp15 * tmp3 + arg1[15];
  }
  return arg0;
}
export function transpose(arg0, arg1) {
  if (arg0 === arg1) {
    arg0[1] = arg1[4];
    arg0[2] = arg1[8];
    arg0[3] = arg1[12];
    arg0[4] = arg1[1];
    arg0[6] = arg1[9];
    arg0[7] = arg1[13];
    arg0[8] = arg1[2];
    arg0[9] = arg1[6];
    arg0[11] = arg1[14];
    arg0[12] = arg1[3];
    arg0[13] = arg1[7];
    arg0[14] = arg1[11];
  } else {
    arg0[0] = arg1[0];
    arg0[1] = arg1[4];
    arg0[2] = arg1[8];
    arg0[3] = arg1[12];
    arg0[4] = arg1[1];
    arg0[5] = arg1[5];
    arg0[6] = arg1[9];
    arg0[7] = arg1[13];
    arg0[8] = arg1[2];
    arg0[9] = arg1[6];
    arg0[10] = arg1[10];
    arg0[11] = arg1[14];
    arg0[12] = arg1[3];
    arg0[13] = arg1[7];
    arg0[14] = arg1[11];
    arg0[15] = arg1[15];
  }
  return arg0;
}
export const perspective = perspectiveNO;
export const ortho = orthoNO;
export const mul = multiply;
export const sub = subtract;