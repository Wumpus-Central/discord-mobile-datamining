// discord_app/modules/emojis/utils/EmojiColorUtils.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import nDefault from "../../../../_runtime/00689_n.js";
import hexToRgba from "../../../utils/ColorUtils.tsx";
import hslToRgbDefault from "../../../utils/Color.tsx";
import getURLDefault from "../../../utils/EmojiUtilsPlatformed.native.tsx";

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
      const color = obj1.parseString(findColorByHsvResult);
      palette = null;
      if (null != color) {
        let tmp2Result = hexToRgba;
        const rawRgbToHslResult = tmp2Result.rawRgbToHsl(color.red, color.blue, color.green);
        tmp2Result = hexToRgba;
        obj = { foreground: null, background: null, ratio: 3, saturationFactor: null };
        let tmp5Result = nDefault;
        const colorLightnessAdjusted = hexToRgba.getColorLightnessAdjusted(color, 0.6, true);
        obj[0] = tmp5Result(colorLightnessAdjusted.toHexString());
        obj[1] = nDefault(c3);
        obj[3] = saturationFactor;
        let accessibleForegroundColor = tmp2Result.getAccessibleForegroundColor(obj);
        if (accessibleForegroundColor == null) {
          accessibleForegroundColor = color;
        }
        const tmp2Result1 = hexToRgba;
        obj = { foreground: null, background: null, ratio: 5, saturationFactor: null };
        tmp5Result = nDefault;
        const tmp2Result2 = hexToRgba;
        const colorLightnessAdjusted1 = hexToRgba.getColorLightnessAdjusted(color, 0.6, false);
        obj[0] = tmp5Result(colorLightnessAdjusted1.toHexString());
        obj[1] = nDefault(c4);
        obj[3] = saturationFactor;
        let accessibleForegroundColor1 = tmp2Result2.getAccessibleForegroundColor(obj);
        if (accessibleForegroundColor1 == null) {
          accessibleForegroundColor1 = color;
        }
        const tmp2Result3 = hexToRgba;
        obj1 = { foreground: null, background: null, ratio: 7, saturationFactor: null };
        obj1[0] = nDefault(findColorByHsvResult);
        obj1[1] = nDefault(c3);
        obj1[3] = saturationFactor;
        const accessibleForegroundColor2 = hexToRgba.getAccessibleForegroundColor(obj1);
        const tmp2Result4 = hexToRgba;
        const obj2 = { foreground: null, background: null, ratio: 7, saturationFactor: null };
        obj2[0] = nDefault(findColorByHsvResult);
        obj2[1] = nDefault(c4);
        obj2[3] = saturationFactor;
        const accessibleForegroundColor3 = hexToRgba.getAccessibleForegroundColor(obj2);
        let hexResult;
        if (accessibleForegroundColor2 != null) {
          hexResult = accessibleForegroundColor2.hex();
        }
        const obj3 = { accentColor: null, backgroundColor: null, highlightColor: null, opacity: null };
        obj3[0] = hexResult;
        const tmp2Result5 = hexToRgba;
        const obj4 = { colorRGB: null, saturationFactor: null };
        obj4[0] = accessibleForegroundColor;
        obj4[1] = saturationFactor;
        obj3[1] = hexToRgba.getSaturatedColorHex(obj4);
        let toHexStringResult;
        if (color != null) {
          toHexStringResult = color.toHexString();
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
        const tmp2Result6 = hexToRgba;
        const obj7 = { colorRGB: null, saturationFactor: null };
        obj7[0] = accessibleForegroundColor1;
        obj7[1] = saturationFactor;
        obj6[1] = hexToRgba.getSaturatedColorHex(obj7);
        let toHexStringResult1;
        if (color != null) {
          toHexStringResult1 = color.toHexString();
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
        const tmp2Result7 = hexToRgba;
      }
    }
  }
  return getURLDefault.applyPlatformToThemedEmojiColorPalette({ palette, shouldProcessMobileColors });
}
let c3 = "#ffffff";
let c4 = "#36393e";
const result = obj132.fileFinishedImporting("modules/emojis/utils/EmojiColorUtils.tsx");

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