import ConfettiLocation from "ConfettiLocation";

let c3;
let c4;
let obj1;
({ ShakeLevel: obj1, SHAKE_STEPS: c3, SHAKE_STEP_DIVIDER: c4 } = ConfettiLocation);
let items = [[1, 0.001], [25, 0.3], [100, 0.5], [250, 0.8], [500, 0.9], [2500, 0.95], [9001, 1]];
let closure_5 = items.map((arg0) => {
  let tmp;
  [tmp] = arg0;
  return tmp;
});
let closure_6 = items.map((arg0) => {
  let tmp;
  [, tmp] = arg0;
  return tmp;
});
let result = require("set").fileFinishedImporting("modules/poggermode/PoggermodeUtils.tsx");

export const getComboShakeIntensity = function getComboShakeIntensity(userCombo, LEVEL_4) {
  let arr2;
  let LEVEL_3 = LEVEL_4;
  if (LEVEL_4 === undefined) {
    LEVEL_3 = LEVEL_3.LEVEL_3;
  }
  const items = [table[LEVEL_3], table2[LEVEL_3]];
  let c0;
  let c1;
  [arr2, ] = items;
  LEVEL_3 = undefined;
  const result = userCombo.value * userCombo.multiplier;
  LEVEL_3 = result;
  let num = 0;
  if (result > 0) {
    const _Math = Math;
    num = Math.min(100000, arr2.reduce((arg0, arg1, arg2) => {
      if (c2 > arg1) {
        if (arg2 + 1 === length.length) {
          return tmp4[arg2];
        } else {
          return (tmp - arg1) / (tmp6[arg2 + 1] - arg1) * (tmp4[arg2 + 1] - tmp5) + tmp5;
        }
      } else {
        let tmp2 = arg0;
        if (tmp === arg1) {
          tmp2 = dependencyMap[arg2];
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
  let c2;
  const result = value.value * value.multiplier;
  c2 = result;
  let num = 0;
  if (result > 0) {
    const _Math = Math;
    num = Math.min(1, arr2.reduce((arg0, arg1, arg2) => {
      if (c2 > arg1) {
        if (arg2 + 1 === length.length) {
          return tmp4[arg2];
        } else {
          return (tmp - arg1) / (tmp6[arg2 + 1] - arg1) * (tmp4[arg2 + 1] - tmp5) + tmp5;
        }
      } else {
        let tmp2 = arg0;
        if (tmp === arg1) {
          tmp2 = dependencyMap[arg2];
        }
        return tmp2;
      }
    }, 0));
  }
  return num;
};
export const getComboStyles = function getComboStyles(arg0) {
  if (1 === arg0) {
    let obj = { color: null };
    obj[0] = require(711) /* unsafe_getRawColor */.unsafe_getRawColor("BRAND_500");
    const obj10 = require(711) /* unsafe_getRawColor */;
  } else {
    if (2 !== arg0) {
      if (3 !== arg0) {
        if (4 !== arg0) {
          if (5 !== arg0) {
            if (6 === arg0) {
              obj = { color: null, square: true };
              obj[0] = require(711) /* unsafe_getRawColor */.unsafe_getRawColor("RED_400");
              const obj4 = require(711) /* unsafe_getRawColor */;
            } else {
              obj = { color: null, flair: true };
              let obj1 = require(711) /* unsafe_getRawColor */;
              obj[0] = obj1.unsafe_getRawColor("ORANGE_345");
            }
          }
        }
        obj1 = { color: null, square: true };
        obj1[0] = require(711) /* unsafe_getRawColor */.unsafe_getRawColor("YELLOW_300");
        obj = obj1;
        const obj6 = require(711) /* unsafe_getRawColor */;
      }
    }
    const obj2 = { color: null };
    obj2[0] = require(711) /* unsafe_getRawColor */.unsafe_getRawColor("GREEN_360");
    obj = obj2;
    const obj8 = require(711) /* unsafe_getRawColor */;
  }
  return obj;
};
export const getComboScore = function getComboScore(multiplier) {
  let num = multiplier.multiplier;
  if (num == null) {
    num = 1;
  }
  return multiplier.value * num;
};