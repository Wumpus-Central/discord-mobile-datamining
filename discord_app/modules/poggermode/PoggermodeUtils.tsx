// === Module 7460: PoggermodeUtils ===

// Module 7460 (PoggermodeUtils)
import shims from "shims" /* 586 */;
import PoggermodeConstants from "PoggermodeConstants" /* 7163 */;
import size from "module_2" /* 2 */;

let LEVEL_3;

let c2;
let c3;
let closure_4;
({ ShakeLevel: c2, SHAKE_STEPS: c3, SHAKE_STEP_DIVIDER: closure_4 } = PoggermodeConstants);
let items = [[1, 0.001], [25, 0.3], [100, 0.5], [250, 0.8], [500, 0.9], [2500, 0.95], [9001, 1]];
let closure_5 = items.map((item) => {
  let tmp;
  [tmp] = item;
  return tmp;
});
let closure_6 = items.map((item) => {
  let tmp;
  [, tmp] = item;
  return tmp;
});
let result = size.fileFinishedImporting("modules/poggermode/PoggermodeUtils.tsx");

export const getComboShakeIntensity = function getComboShakeIntensity(userCombo) {
  let arr2;
  LEVEL_3 = LEVEL_4;
  if (LEVEL_4 === undefined) {
    LEVEL_3 = LEVEL_3.LEVEL_3;
  }
  const items = [_false[LEVEL_3], React3[LEVEL_3]];
  let c0;
  let c1;
  [arr2, ] = items;
  const result = userCombo.value * userCombo.multiplier;
  let c2 = result;
  let num = 0;
  if (result > 0) {
    const _Math = Math;
    num = Math.min(100000, arr2.reduce((acc, item, index) => {
      if (c2 > item) {
        if (index + 1 === length.length) {
          return closure_1_1[index];
        } else {
          return (c2 - item) / (tmp6[index + 1] - item) * (closure_1_1[index + 1] - closure_1_1[index]) + closure_1_1[index];
        }
      } else {
        let tmp2 = acc;
        if (c2 === item) {
          tmp2 = closure_1_1[index];
        }
        return tmp2;
      }
    }, 0));
  }
  return num;
};
export const getComboPercentage = function getComboPercentage(value) {
  let arr2;
  const items = [closure_5, closure_6];
  [arr2, ] = items;
  const result = value.value * value.multiplier;
  let c2 = result;
  let num = 0;
  if (result > 0) {
    let tmp2 = globalThis;
    const _Math = Math;
    num = Math.min(1, arr2.reduce((acc, item, index) => {
      if (c2 > item) {
        if (index + 1 === length.length) {
          return closure_1_1[index];
        } else {
          return (c2 - item) / (tmp6[index + 1] - item) * (closure_1_1[index + 1] - closure_1_1[index]) + closure_1_1[index];
        }
      } else {
        let tmp2 = acc;
        if (c2 === item) {
          tmp2 = closure_1_1[index];
        }
        return tmp2;
      }
    }, 0));
  }
  return num;
};
export const getComboStyles = function getComboStyles(arg0) {
  let obj;
  let obj10;
  let obj2;
  let obj4;
  let obj6;
  let obj8;
  if (1 === arg0) {
    const obj3 = { color: obj10.unsafe_getRawColor("BRAND_500") };
    obj = obj3;
    obj10 = shims;
  } else {
    if (2 !== arg0) {
      if (3 !== arg0) {
        if (4 !== arg0) {
          if (5 !== arg0) {
            if (6 === arg0) {
              const obj5 = { color: obj4.unsafe_getRawColor("RED_400"), square: true };
              obj = obj5;
              obj4 = shims;
            } else {
              obj = { color: obj2.unsafe_getRawColor("ORANGE_345"), flair: true };
              obj2 = shims;
            }
          }
        }
        const obj7 = { color: obj6.unsafe_getRawColor("YELLOW_300"), square: true };
        obj = obj7;
        obj6 = shims;
      }
    }
    const obj9 = { color: obj8.unsafe_getRawColor("GREEN_360") };
    obj = obj9;
    obj8 = shims;
  }
  return obj;
};
export const getComboScore = function getComboScore(multiplier) {
  let num = multiplier.multiplier;
  const value = multiplier.value;
  if (num == null) {
    num = 1;
  }
  return value * num;
};