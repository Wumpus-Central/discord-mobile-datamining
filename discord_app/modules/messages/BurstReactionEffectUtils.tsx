// discord_app/modules/messages/BurstReactionEffectUtils.tsx
import ColorUtils from "../../utils/ColorUtils.tsx";
import apply from "../../../_runtime/metro/00012__.js";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/messages/BurstReactionEffectUtils.tsx");

export const replaceAnimationColors = function replaceAnimationColors(str, arg1) {
  const items = [, ,];
  ({ r: arr[0], g: arr[1], b: arr[2] } = arg1);
  const complimentaryPaletteForColor = ColorUtils.getComplimentaryPaletteForColor(items, 2);
  return str
    .replace(
      /(\[1,0,0,)/g,
      "[" +
        complimentaryPaletteForColor[0][0] / 255 +
        "," +
        complimentaryPaletteForColor[0][1] / 255 +
        "," +
        complimentaryPaletteForColor[0][2] / 255 +
        ",",
    )
    .replace(
      /\[0,0,1,/g,
      "[" +
        complimentaryPaletteForColor[1][0] / 255 +
        "," +
        complimentaryPaletteForColor[1][1] / 255 +
        "," +
        complimentaryPaletteForColor[1][2] / 255 +
        ",",
    );
};
export const getBurstAnimationHash = apply.memoize((str) => {
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
