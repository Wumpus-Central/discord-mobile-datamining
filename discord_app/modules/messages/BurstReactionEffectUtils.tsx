// discord_app/modules/messages/BurstReactionEffectUtils.tsx
import apply from "apply";

const memoizeResult = apply.memoize((str) => {
  let length;
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  if (0 < str.length) {
    do {
      num2 = (num2 << 5) - num2 + str.charCodeAt(num);
      num = num + 1;
      num3 = num2;
      length = str.length;
    } while (num < length);
  }
  return Math.abs(num3);
});
const result = require("set").fileFinishedImporting("modules/messages/BurstReactionEffectUtils.tsx");

export const replaceAnimationColors = function replaceAnimationColors(c5, arg1) {
  const items = [, , ];
  ({ r: arr[0], g: arr[1], b: arr[2] } = arg1);
  const complimentaryPaletteForColor = require("../../utils/ColorUtils.tsx") /* hexToRgba */.getComplimentaryPaletteForColor(items, 2);
  const obj = require("../../utils/ColorUtils.tsx") /* hexToRgba */;
  return c5.replace(/(\[1,0,0,)/g, "[" + complimentaryPaletteForColor[0][0] / 255 + "," + complimentaryPaletteForColor[0][1] / 255 + "," + complimentaryPaletteForColor[0][2] / 255 + ",").replace(/\[0,0,1,/g, "[" + complimentaryPaletteForColor[1][0] / 255 + "," + complimentaryPaletteForColor[1][1] / 255 + "," + complimentaryPaletteForColor[1][2] / 255 + ",");
};
export const getBurstAnimationHash = memoizeResult;