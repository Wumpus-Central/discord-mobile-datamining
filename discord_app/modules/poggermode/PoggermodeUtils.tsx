// discord_app/modules/poggermode/PoggermodeUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import unsafe_getRawColor from "../../../discord_common/js/packages/tokens/shims.native.tsx";
import ConfettiLocation from "PoggermodeConstants.tsx";

({ ShakeLevel: obj1, SHAKE_STEPS: c3, SHAKE_STEP_DIVIDER: c4 } = ConfettiLocation);
let items = [[1, 0.001], [25, 0.3], [100, 0.5], [250, 0.8], [500, 0.9], [2500, 0.95], [9001, 1]];
let closure_5 = items.map((item, index) => {
  [tmp] = item;
  return tmp;
});
let closure_6 = items.map((item, index) => {
  [, tmp] = item;
  return tmp;
});
let result = obj132.fileFinishedImporting("modules/poggermode/PoggermodeUtils.tsx");

export const getComboShakeIntensity = function getComboShakeIntensity(userCombo, LEVEL_4) {
  let LEVEL_3 = LEVEL_4;
  if (LEVEL_4 === undefined) {
    LEVEL_3 = LEVEL_3.LEVEL_3;
  }
  const items = [table[LEVEL_3], table2[LEVEL_3]];
  c0 = undefined;
  c1 = undefined;
  [arr2, ] = items;
  const result = userCombo.value * userCombo.multiplier;
  LEVEL_3 = result;
  let num = 0;
  if (result > 0) {
    const _Math = Math;
    num = Math.min(100000, arr2.reduce((acc, item, index) => {
      if (c2 > item) {
        if (index + 1 === length.length) {
          return dependencyMap[index];
        } else {
          return (c2 - item) / (tmp6[index + 1] - item) * (dependencyMap[index + 1] - tmp5) + tmp5;
        }
      } else {
        let tmp2 = acc;
        if (c2 === item) {
          tmp2 = dependencyMap[index];
        }
        return tmp2;
      }
    }, 0));
  }
  return num;
};
export const getComboPercentage = function getComboPercentage(value) {
  const items = [closure_5, closure_6];
  [arr2, ] = items;
  const result = value.value * value.multiplier;
  c2 = result;
  let num = 0;
  if (result > 0) {
    const _Math = Math;
    num = Math.min(1, arr2.reduce((acc, item, index) => {
      if (c2 > item) {
        if (index + 1 === length.length) {
          return dependencyMap[index];
        } else {
          return (c2 - item) / (tmp6[index + 1] - item) * (dependencyMap[index + 1] - tmp5) + tmp5;
        }
      } else {
        let tmp2 = acc;
        if (c2 === item) {
          tmp2 = dependencyMap[index];
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
    obj[0] = unsafe_getRawColor.unsafe_getRawColor("BRAND_500");
  } else {
    if (2 !== arg0) {
      if (3 !== arg0) {
        if (4 !== arg0) {
          if (5 !== arg0) {
            if (6 === arg0) {
              obj = { color: null, square: true };
              obj[0] = unsafe_getRawColor.unsafe_getRawColor("RED_400");
            } else {
              obj = { color: null, flair: true };
              obj1 = unsafe_getRawColor;
              obj[0] = obj1.unsafe_getRawColor("ORANGE_345");
            }
          }
        }
        obj1 = { color: null, square: true };
        obj1[0] = unsafe_getRawColor.unsafe_getRawColor("YELLOW_300");
        obj = obj1;
      }
    }
    const obj2 = { color: null };
    obj2[0] = unsafe_getRawColor.unsafe_getRawColor("GREEN_360");
    obj = obj2;
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