// === Module 7875: buildPlatformedThemedEmojiColorPalette ===

// Module 7875 (buildPlatformedThemedEmojiColorPalette)
import set from "set" /* 2 */;
import hexToRgba from "hexToRgba" /* 4326 */;
import hslToRgbDefault from "hslToRgb" /* 4327 */;
import getURLDefault from "getURL" /* 7537 */;

function buildPlatformedThemedEmojiColorPalette(shouldProcessMobileColors) {
  ({ colors, saturationFactor } = shouldProcessMobileColors);
  if (saturationFactor === undefined) {
    saturationFactor = 1;
  }
  shouldProcessMobileColors = shouldProcessMobileColors.shouldProcessMobileColors;
  if (shouldProcessMobileColors === undefined) {
    shouldProcessMobileColors = false;
  }
  if (saturationFactor === undefined) {
    saturationFactor = 1;
  }
  let palette = null;
  if (null != colors) {
    palette = null;
    if (colors.length >= 1) {
      let obj = hexToRgba;
      const findColorByHsvResult = obj.findColorByHsv(colors);
      obj1 = hslToRgbDefault;
      const parseStringResult = obj1.parseString(findColorByHsvResult);
      palette = null;
      if (null != parseStringResult) {
        let tmp2Result = tmp2(4326);
        const rawRgbToHslResult = tmp2Result.rawRgbToHsl(parseStringResult.red, parseStringResult.blue, parseStringResult.green);
        tmp2Result = tmp2(4326);
        obj = { foreground: null, background: null, ratio: 3, saturationFactor: null };
        let tmp5Result = tmp5(686);
        const colorLightnessAdjusted = tmp2(4326).getColorLightnessAdjusted(parseStringResult, 0.6, true);
        obj[0] = tmp5Result(colorLightnessAdjusted.toHexString());
        obj[1] = tmp5(686)(c3);
        obj[3] = saturationFactor;
        let accessibleForegroundColor = tmp2Result.getAccessibleForegroundColor(obj);
        if (accessibleForegroundColor == null) {
          accessibleForegroundColor = parseStringResult;
        }
        const tmp2Result1 = tmp2(4326);
        const tmp8 = c3;
        obj = { foreground: null, background: null, ratio: 5, saturationFactor: null };
        tmp5Result = tmp5(686);
        const tmp2Result2 = tmp2(4326);
        const colorLightnessAdjusted1 = tmp2(4326).getColorLightnessAdjusted(parseStringResult, 0.6, false);
        obj[0] = tmp5Result(colorLightnessAdjusted1.toHexString());
        obj[1] = tmp5(686)(c4);
        obj[3] = saturationFactor;
        let accessibleForegroundColor1 = tmp2Result2.getAccessibleForegroundColor(obj);
        if (accessibleForegroundColor1 == null) {
          accessibleForegroundColor1 = parseStringResult;
        }
        const tmp11 = c4;
        const tmp2Result3 = tmp2(4326);
        obj1 = { foreground: null, background: null, ratio: 7, saturationFactor: null };
        obj1[0] = tmp5(686)(findColorByHsvResult);
        obj1[1] = tmp5(686)(tmp8);
        obj1[3] = saturationFactor;
        const accessibleForegroundColor2 = tmp2(4326).getAccessibleForegroundColor(obj1);
        const tmp2Result4 = tmp2(4326);
        const obj2 = { foreground: null, background: null, ratio: 7, saturationFactor: null };
        obj2[0] = tmp5(686)(findColorByHsvResult);
        obj2[1] = tmp5(686)(tmp11);
        obj2[3] = saturationFactor;
        const accessibleForegroundColor3 = tmp2(4326).getAccessibleForegroundColor(obj2);
        let hexResult;
        if (accessibleForegroundColor2 != null) {
          hexResult = accessibleForegroundColor2.hex();
        }
        const obj3 = { accentColor: null, backgroundColor: null, highlightColor: null, opacity: null };
        obj3[0] = hexResult;
        const tmp2Result5 = tmp2(4326);
        const obj4 = { colorRGB: null, saturationFactor: null };
        obj4[0] = accessibleForegroundColor;
        obj4[1] = saturationFactor;
        obj3[1] = tmp2(4326).getSaturatedColorHex(obj4);
        let toHexStringResult;
        if (parseStringResult != null) {
          toHexStringResult = parseStringResult.toHexString();
        }
        obj3[2] = toHexStringResult;
        let saturation;
        if (rawRgbToHslResult != null) {
          saturation = rawRgbToHslResult.saturation;
        }
        let num4 = 0.1;
        if (saturation < 0.1) {
          num4 = 0.35;
        }
        const obj5 = { LIGHT: null, DARK: null };
        obj3[3] = num4;
        obj5[0] = obj3;
        let hexResult1;
        if (accessibleForegroundColor3 != null) {
          hexResult1 = accessibleForegroundColor3.hex();
        }
        const obj6 = { accentColor: null, backgroundColor: null, highlightColor: null, opacity: null };
        obj6[0] = hexResult1;
        const tmp2Result6 = tmp2(4326);
        const obj7 = { colorRGB: null, saturationFactor: null };
        obj7[0] = accessibleForegroundColor1;
        obj7[1] = saturationFactor;
        obj6[1] = tmp2(4326).getSaturatedColorHex(obj7);
        let toHexStringResult1;
        if (parseStringResult != null) {
          toHexStringResult1 = parseStringResult.toHexString();
        }
        obj6[2] = toHexStringResult1;
        let saturation1;
        if (rawRgbToHslResult != null) {
          saturation1 = rawRgbToHslResult.saturation;
        }
        let num5 = 0.2;
        if (saturation1 < 0.1) {
          num5 = 0.5;
        }
        obj6[3] = num5;
        obj5[1] = obj6;
        palette = obj5;
        const tmp2Result7 = tmp2(4326);
      }
    }
  }
  return getURLDefault.applyPlatformToThemedEmojiColorPalette({ palette, shouldProcessMobileColors });
}
let c3 = "#ffffff";
let c4 = "#36393e";
const result = set.fileFinishedImporting("modules/emojis/utils/EmojiColorUtils.tsx");

export { buildPlatformedThemedEmojiColorPalette };
export const buildEmojiColorPalette = function buildEmojiColorPalette(burst_colors, stateFromStores, stateFromStores1) {
  if (null != burst_colors) {
    if (burst_colors.length >= 1) {
      let obj = { colors: null, saturationFactor: null };
      obj[0] = burst_colors;
      obj[1] = stateFromStores;
      const tmp8 = buildPlatformedThemedEmojiColorPalette(obj);
      if (stateFromStores1) {
        let DARK;
        if (!tmp9) {
          DARK = tmp8.DARK;
        }
        let LIGHT = DARK;
      } else if (!tmp9) {
        LIGHT = tmp8.LIGHT;
      }
      let backgroundColor;
      if (LIGHT != null) {
        backgroundColor = LIGHT.backgroundColor;
      }
      obj = { backgroundColor: null, accentColor: null, highlightColor: null, opacity: null };
      obj[0] = backgroundColor;
      let accentColor;
      if (LIGHT != null) {
        accentColor = LIGHT.accentColor;
      }
      obj[1] = accentColor;
      let highlightColor;
      if (LIGHT != null) {
        highlightColor = LIGHT.highlightColor;
      }
      obj[2] = highlightColor;
      let num;
      if (LIGHT != null) {
        num = LIGHT.opacity;
      }
      if (num == null) {
        num = 0.15;
      }
      obj[3] = num;
      return obj;
    }
  }
  return null;
};