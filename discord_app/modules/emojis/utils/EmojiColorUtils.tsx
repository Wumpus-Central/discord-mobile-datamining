// === Module 8064: EmojiColorUtils ===

// Module 8064 (EmojiColorUtils)
import _modDef672 from "module_672" /* 672 */;
import ColorUtils from "ColorUtils" /* 4489 */;
import utils_ColorDefault from "utils/Color" /* 4490 */;
import EmojiUtilsPlatformedDefault from "EmojiUtilsPlatformed" /* 7888 */;
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
      const findColorByHsvResult = ColorUtils.findColorByHsv(colors);
      const color = utils_ColorDefault.parseString(findColorByHsvResult);
      palette = null;
      if (null != color) {
        const rawRgbToHslResult = ColorUtils.rawRgbToHsl(color.red, color.blue, color.green);
        const tmp2Result = ColorUtils;
        const obj3 = { foreground: null, background: null, ratio: 3, saturationFactor: null };
        const tmp2Result9 = ColorUtils;
        const tmp5Result = _modDef672;
        const colorLightnessAdjusted = ColorUtils.getColorLightnessAdjusted(color, 0.6, true);
        obj3.foreground = tmp5Result(colorLightnessAdjusted.toHexString());
        obj3.background = _modDef672(c3);
        obj3.saturationFactor = saturationFactor;
        let accessibleForegroundColor = tmp2Result9.getAccessibleForegroundColor(obj3);
        if (accessibleForegroundColor == null) {
          accessibleForegroundColor = color;
        }
        const tmp2Result10 = ColorUtils;
        const obj4 = { foreground: null, background: null, ratio: 5, saturationFactor: null };
        const tmp2Result11 = ColorUtils;
        const tmp5Result2 = _modDef672;
        const colorLightnessAdjusted1 = ColorUtils.getColorLightnessAdjusted(color, 0.6, false);
        obj4.foreground = tmp5Result2(colorLightnessAdjusted1.toHexString());
        obj4.background = _modDef672(c4);
        obj4.saturationFactor = saturationFactor;
        let accessibleForegroundColor1 = tmp2Result11.getAccessibleForegroundColor(obj4);
        if (accessibleForegroundColor1 == null) {
          accessibleForegroundColor1 = color;
        }
        const tmp2Result12 = ColorUtils;
        const obj5 = { foreground: _modDef672(findColorByHsvResult), background: _modDef672(c3), ratio: 7, saturationFactor };
        const accessibleForegroundColor2 = ColorUtils.getAccessibleForegroundColor(obj5);
        const tmp2Result13 = ColorUtils;
        const obj6 = { foreground: _modDef672(findColorByHsvResult), background: _modDef672(c4), ratio: 7, saturationFactor };
        const accessibleForegroundColor3 = ColorUtils.getAccessibleForegroundColor(obj6);
        let hexResult;
        if (accessibleForegroundColor2 != null) {
          hexResult = accessibleForegroundColor2.hex();
        }
        const obj7 = { accentColor: hexResult, backgroundColor: null, highlightColor: null, opacity: null };
        const tmp2Result14 = ColorUtils;
        const obj8 = { colorRGB: accessibleForegroundColor, saturationFactor };
        obj7.backgroundColor = ColorUtils.getSaturatedColorHex(obj8);
        let toHexStringResult;
        if (color != null) {
          toHexStringResult = color.toHexString();
        }
        obj7.highlightColor = toHexStringResult;
        let saturation;
        if (rawRgbToHslResult != null) {
          saturation = rawRgbToHslResult.saturation;
        }
        let num4 = 0.1;
        if (saturation < 0.1) {
          num4 = 0.35;
        }
        const obj9 = { LIGHT: null, DARK: null };
        obj7.opacity = num4;
        obj9.LIGHT = obj7;
        let hexResult1;
        if (accessibleForegroundColor3 != null) {
          hexResult1 = accessibleForegroundColor3.hex();
        }
        const obj10 = { accentColor: hexResult1, backgroundColor: null, highlightColor: null, opacity: null };
        const tmp2Result15 = ColorUtils;
        const obj11 = { colorRGB: accessibleForegroundColor1, saturationFactor };
        obj10.backgroundColor = ColorUtils.getSaturatedColorHex(obj11);
        let toHexStringResult1;
        if (color != null) {
          toHexStringResult1 = color.toHexString();
        }
        obj10.highlightColor = toHexStringResult1;
        let saturation1;
        if (rawRgbToHslResult != null) {
          saturation1 = rawRgbToHslResult.saturation;
        }
        let num5 = 0.2;
        if (saturation1 < 0.1) {
          num5 = 0.5;
        }
        obj10.opacity = num5;
        obj9.DARK = obj10;
        palette = obj9;
        const tmp2Result16 = ColorUtils;
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
      const obj2 = { colors, saturationFactor: stateFromStores };
      const tmp8 = buildPlatformedThemedEmojiColorPalette(obj2);
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
      const obj = { backgroundColor, accentColor: null, highlightColor: null, opacity: null };
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