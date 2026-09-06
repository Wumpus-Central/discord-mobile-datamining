// === Module 7957: EmojiColorUtils ===

// Module 7957 (EmojiColorUtils)
import _modDef672 from "module_672" /* 672 */;
import ColorUtils from "ColorUtils" /* 4409 */;
import utils_ColorDefault from "utils/Color" /* 4410 */;
import EmojiUtilsPlatformedDefault from "EmojiUtilsPlatformed" /* 7783 */;
import size from "module_2" /* 2 */;

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
      let obj = ColorUtils;
      const findColorByHsvResult = obj.findColorByHsv(colors);
      let obj1 = utils_ColorDefault;
      const color = obj1.parseString(findColorByHsvResult);
      palette = null;
      if (null != color) {
        let tmp2Result = ColorUtils;
        const rawRgbToHslResult = tmp2Result.rawRgbToHsl(color.red, color.blue, color.green);
        tmp2Result = ColorUtils;
        obj = { foreground: null, background: null, ratio: 3, saturationFactor: null };
        let tmp5Result = _modDef672;
        const colorLightnessAdjusted = ColorUtils.getColorLightnessAdjusted(color, 0.6, true);
        obj.foreground = tmp5Result(colorLightnessAdjusted.toHexString());
        obj.background = _modDef672(c3);
        obj.saturationFactor = saturationFactor;
        let accessibleForegroundColor = tmp2Result.getAccessibleForegroundColor(obj);
        if (accessibleForegroundColor == null) {
          accessibleForegroundColor = color;
        }
        const tmp2Result1 = ColorUtils;
        obj = { foreground: null, background: null, ratio: 5, saturationFactor: null };
        tmp5Result = _modDef672;
        const tmp2Result2 = ColorUtils;
        const colorLightnessAdjusted1 = ColorUtils.getColorLightnessAdjusted(color, 0.6, false);
        obj.foreground = tmp5Result(colorLightnessAdjusted1.toHexString());
        obj.background = _modDef672(c4);
        obj.saturationFactor = saturationFactor;
        let accessibleForegroundColor1 = tmp2Result2.getAccessibleForegroundColor(obj);
        if (accessibleForegroundColor1 == null) {
          accessibleForegroundColor1 = color;
        }
        const tmp2Result3 = ColorUtils;
        obj1 = { foreground: _modDef672(findColorByHsvResult), background: _modDef672(c3), ratio: 7, saturationFactor };
        const accessibleForegroundColor2 = ColorUtils.getAccessibleForegroundColor(obj1);
        const tmp2Result4 = ColorUtils;
        const obj2 = { foreground: _modDef672(findColorByHsvResult), background: _modDef672(c4), ratio: 7, saturationFactor };
        const accessibleForegroundColor3 = ColorUtils.getAccessibleForegroundColor(obj2);
        let hexResult;
        if (accessibleForegroundColor2 != null) {
          hexResult = accessibleForegroundColor2.hex();
        }
        const obj3 = { accentColor: hexResult, backgroundColor: null, highlightColor: null, opacity: null };
        const tmp2Result5 = ColorUtils;
        const obj4 = { colorRGB: accessibleForegroundColor, saturationFactor };
        obj3.backgroundColor = ColorUtils.getSaturatedColorHex(obj4);
        let toHexStringResult;
        if (color != null) {
          toHexStringResult = color.toHexString();
        }
        obj3.highlightColor = toHexStringResult;
        let saturation;
        if (rawRgbToHslResult != null) {
          saturation = rawRgbToHslResult.saturation;
        }
        let num4 = 0.1;
        if (saturation < 0.1) {
          num4 = 0.35;
        }
        const obj5 = { LIGHT: null, DARK: null };
        obj3.opacity = num4;
        obj5.LIGHT = obj3;
        let hexResult1;
        if (accessibleForegroundColor3 != null) {
          hexResult1 = accessibleForegroundColor3.hex();
        }
        const obj6 = { accentColor: hexResult1, backgroundColor: null, highlightColor: null, opacity: null };
        const tmp2Result6 = ColorUtils;
        const obj7 = { colorRGB: accessibleForegroundColor1, saturationFactor };
        obj6.backgroundColor = ColorUtils.getSaturatedColorHex(obj7);
        let toHexStringResult1;
        if (color != null) {
          toHexStringResult1 = color.toHexString();
        }
        obj6.highlightColor = toHexStringResult1;
        let saturation1;
        if (rawRgbToHslResult != null) {
          saturation1 = rawRgbToHslResult.saturation;
        }
        let num5 = 0.2;
        if (saturation1 < 0.1) {
          num5 = 0.5;
        }
        obj6.opacity = num5;
        obj5.DARK = obj6;
        palette = obj5;
        const tmp2Result7 = ColorUtils;
      }
    }
  }
  return EmojiUtilsPlatformedDefault.applyPlatformToThemedEmojiColorPalette({ palette, shouldProcessMobileColors });
}
let c3 = "#ffffff";
let c4 = "#36393e";
const result = size.fileFinishedImporting("modules/emojis/utils/EmojiColorUtils.tsx");

export { buildPlatformedThemedEmojiColorPalette };
export const buildEmojiColorPalette = function buildEmojiColorPalette(colors, stateFromStores, stateFromStores1) {
  if (null != colors) {
    if (colors.length >= 1) {
      let obj = { colors, saturationFactor: stateFromStores };
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
      obj = { backgroundColor, accentColor: null, highlightColor: null, opacity: null };
      let accentColor;
      if (LIGHT != null) {
        accentColor = LIGHT.accentColor;
      }
      obj.accentColor = accentColor;
      let highlightColor;
      if (LIGHT != null) {
        highlightColor = LIGHT.highlightColor;
      }
      obj.highlightColor = highlightColor;
      let num;
      if (LIGHT != null) {
        num = LIGHT.opacity;
      }
      if (num == null) {
        num = 0.15;
      }
      obj.opacity = num;
      return obj;
    }
  }
  return null;
};