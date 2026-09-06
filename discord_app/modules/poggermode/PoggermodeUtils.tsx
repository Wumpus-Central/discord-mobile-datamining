// discord_app/modules/poggermode/PoggermodeUtils.tsx
import shims from "../../../discord_common/js/packages/tokens/shims.native.tsx";
import PoggermodeConstants from "PoggermodeConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

({ ShakeLevel: c2, SHAKE_STEPS: c3, SHAKE_STEP_DIVIDER: closure_4 } = PoggermodeConstants);
let items = [
  [1, 0.001],
  [25, 0.3],
  [100, 0.5],
  [250, 0.8],
  [500, 0.9],
  [2500, 0.95],
  [9001, 1],
];
let closure_5 = items.map((item) => {
  [tmp] = item;
  return tmp;
});
let closure_6 = items.map((item) => {
  [, tmp] = item;
  return tmp;
});
let result = size.fileFinishedImporting("modules/poggermode/PoggermodeUtils.tsx");

export const getComboShakeIntensity = function getComboShakeIntensity(userCombo, LEVEL_4) {
  LEVEL_3 = LEVEL_4;
  if (LEVEL_4 === undefined) {
    LEVEL_3 = LEVEL_3.LEVEL_3;
  }
  const items = [React3[LEVEL_3], React4[LEVEL_3]];
  c0 = undefined;
  c1 = undefined;
  [arr2] = items;
  const result = userCombo.value * userCombo.multiplier;
  c2 = result;
  let num = 0;
  if (result > 0) {
    const _Math = Math;
    num = Math.min(
      100000,
      arr2.reduce((acc, item, index) => {
        if (c2 > item) {
          if (index + 1 === length.length) {
            return tmp4[index];
          } else {
            return ((tmp - item) / (tmp6[index + 1] - item)) * (tmp4[index + 1] - tmp5) + tmp5;
          }
        } else {
          let tmp2 = acc;
          if (tmp === item) {
            tmp2 = dependencyMap[index];
          }
          return tmp2;
        }
      }, 0),
    );
  }
  return num;
};
export const getComboPercentage = function getComboPercentage(value) {
  const items = [closure_5, closure_6];
  [arr2] = items;
  const result = value.value * value.multiplier;
  c2 = result;
  let num = 0;
  if (result > 0) {
    const _Math = Math;
    num = Math.min(
      1,
      arr2.reduce((acc, item, index) => {
        if (c2 > item) {
          if (index + 1 === length.length) {
            return tmp4[index];
          } else {
            return ((tmp - item) / (tmp6[index + 1] - item)) * (tmp4[index + 1] - tmp5) + tmp5;
          }
        } else {
          let tmp2 = acc;
          if (tmp === item) {
            tmp2 = dependencyMap[index];
          }
          return tmp2;
        }
      }, 0),
    );
  }
  return num;
};
export const getComboStyles = function getComboStyles(arg0) {
  if (1 === arg0) {
    let obj = { color: shims.unsafe_getRawColor("BRAND_500") };
  } else {
    if (2 !== arg0) {
      if (3 !== arg0) {
        if (4 !== arg0) {
          if (5 !== arg0) {
            if (6 === arg0) {
              obj = { color: shims.unsafe_getRawColor("RED_400"), square: true };
            } else {
              obj = { color: null, flair: true };
              let obj1 = shims;
              obj.color = obj1.unsafe_getRawColor("ORANGE_345");
            }
          }
        }
        obj1 = { color: shims.unsafe_getRawColor("YELLOW_300"), square: true };
        obj = obj1;
      }
    }
    const obj2 = { color: shims.unsafe_getRawColor("GREEN_360") };
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
