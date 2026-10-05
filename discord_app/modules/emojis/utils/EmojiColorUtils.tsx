// === Module 7616: EmojiColorUtils ===

// Module 7616 (EmojiColorUtils)
import _modDef683 from "module_683" /* 683 */;
import ColorUtils from "ColorUtils" /* 4727 */;
import utils_ColorDefault from "utils/Color" /* 4728 */;
import EmojiUtilsPlatformedDefault from "EmojiUtilsPlatformed" /* 7411 */;
import size from "module_2" /* 2 */;

function buildPlatformedThemedEmojiColorPalette(shouldProcessMobileColors) {
  let colorLightnessAdjusted;
  let colorLightnessAdjusted1;
  let colors;
  let num4;
  let num5;
  let obj10;
  let obj11;
  let obj8;
  let saturationFactor;
  let tmp2Result15;
  let tmp2Result16;
  let tmp5Result;
  let tmp5Result2;
  let toHexStringResult;
  let toHexStringResult1;
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
      const obj = ColorUtils;
      const findColorByHsvResult = obj.findColorByHsv(colors);
      const obj2 = utils_ColorDefault;
      const color = obj2.parseString(findColorByHsvResult);
      palette = null;
      if (null != color) {
        const tmp2Result = ColorUtils;
        const rawRgbToHslResult = tmp2Result.rawRgbToHsl(color.red, color.blue, color.green);
        const obj3 = { foreground: tmp5Result(colorLightnessAdjusted.toHexString()), background: _modDef683(c3), ratio: 3, saturationFactor };
        const getAccessibleForegroundColor = ColorUtils.getAccessibleForegroundColor;
        ColorUtils;
        tmp5Result = _modDef683;
        const tmp2Result10 = ColorUtils;
        colorLightnessAdjusted = tmp2Result10.getColorLightnessAdjusted(color, 0.6, true);
        let accessibleForegroundColor = getAccessibleForegroundColor(obj3);
        if (accessibleForegroundColor == null) {
          accessibleForegroundColor = color;
        }
        const obj4 = { foreground: tmp5Result2(colorLightnessAdjusted1.toHexString()), background: _modDef683(c4), ratio: 5, saturationFactor };
        const getAccessibleForegroundColor2 = ColorUtils.getAccessibleForegroundColor;
        ColorUtils;
        tmp5Result2 = _modDef683;
        const tmp2Result12 = ColorUtils;
        colorLightnessAdjusted1 = tmp2Result12.getColorLightnessAdjusted(color, 0.6, false);
        let accessibleForegroundColor2 = getAccessibleForegroundColor2(obj4);
        if (accessibleForegroundColor2 == null) {
          accessibleForegroundColor2 = color;
        }
        const obj5 = { foreground: _modDef683(findColorByHsvResult), background: _modDef683(c3), ratio: 7, saturationFactor };
        const getAccessibleForegroundColor3 = ColorUtils.getAccessibleForegroundColor;
        ColorUtils;
        const accessibleForegroundColor3 = getAccessibleForegroundColor3(obj5);
        const obj6 = { foreground: _modDef683(findColorByHsvResult), background: _modDef683(c4), ratio: 7, saturationFactor };
        const getAccessibleForegroundColor4 = ColorUtils.getAccessibleForegroundColor;
        ColorUtils;
        const accessibleForegroundColor4 = getAccessibleForegroundColor4(obj6);
        let hexResult;
        if (accessibleForegroundColor3 != null) {
          hexResult = accessibleForegroundColor3.hex();
        }
        const obj7 = { accentColor: hexResult, backgroundColor: tmp2Result15.getSaturatedColorHex(obj8), highlightColor: toHexStringResult, opacity: num4 };
        obj8 = { colorRGB: accessibleForegroundColor, saturationFactor };
        toHexStringResult = undefined;
        tmp2Result15 = ColorUtils;
        if (color != null) {
          toHexStringResult = color.toHexString();
        }
        let saturation;
        if (rawRgbToHslResult != null) {
          saturation = rawRgbToHslResult.saturation;
        }
        num4 = 0.1;
        if (saturation < 0.1) {
          num4 = 0.35;
        }
        let hexResult1;
        const obj9 = { LIGHT: obj7, DARK: obj10 };
        if (accessibleForegroundColor4 != null) {
          hexResult1 = accessibleForegroundColor4.hex();
        }
        obj10 = { accentColor: hexResult1, backgroundColor: tmp2Result16.getSaturatedColorHex(obj11), highlightColor: toHexStringResult1, opacity: num5 };
        obj11 = { colorRGB: accessibleForegroundColor2, saturationFactor };
        toHexStringResult1 = undefined;
        tmp2Result16 = ColorUtils;
        if (color != null) {
          toHexStringResult1 = color.toHexString();
        }
        let saturation1;
        if (rawRgbToHslResult != null) {
          saturation1 = rawRgbToHslResult.saturation;
        }
        num5 = 0.2;
        if (saturation1 < 0.1) {
          num5 = 0.5;
        }
        palette = obj9;
      }
    }
  }
  const obj21 = EmojiUtilsPlatformedDefault;
  return obj21.applyPlatformToThemedEmojiColorPalette({ palette, shouldProcessMobileColors });
}
let c3 = "#ffffff";
let c4 = "#36393e";
const result = size.fileFinishedImporting("modules/emojis/utils/EmojiColorUtils.tsx");

export { buildPlatformedThemedEmojiColorPalette };
export const buildEmojiColorPalette = function buildEmojiColorPalette(colors, stateFromStores, stateFromStores1) {
  let accentColor;
  let highlightColor;
  let num;
  if (null != colors) {
    if (colors.length >= 1) {
      let LIGHT;
      const obj2 = { colors, saturationFactor: stateFromStores };
      const tmp8 = buildPlatformedThemedEmojiColorPalette(obj2);
      if (stateFromStores1) {
        let DARK;
        if (tmp8 != null) {
          DARK = tmp8.DARK;
        }
        LIGHT = DARK;
      } else if (tmp8 != null) {
        LIGHT = tmp8.LIGHT;
      }
      let backgroundColor;
      if (LIGHT != null) {
        backgroundColor = LIGHT.backgroundColor;
      }
      const obj = { backgroundColor, accentColor, highlightColor, opacity: num };
      accentColor = undefined;
      if (LIGHT != null) {
        accentColor = LIGHT.accentColor;
      }
      highlightColor = undefined;
      if (LIGHT != null) {
        highlightColor = LIGHT.highlightColor;
      }
      num = undefined;
      if (LIGHT != null) {
        num = LIGHT.opacity;
      }
      if (num == null) {
        num = 0.15;
      }
      return obj;
    }
  }
  return null;
};