// === Module 15168: BadgeUnlockColorUtils ===

// Module 15168 (BadgeUnlockColorUtils)
import ColorUtils from "ColorUtils" /* 5240 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/BadgeUnlockColorUtils.tsx");

export function pickBadgeColor(arr) {
  const found = arr.filter((item) => {
    [tmp, tmp2, tmp3] = item;
    const lightness = ColorUtils.rawRgbToHsl(tmp, tmp2, tmp3).lightness;
    let tmp4 = lightness > 0.15;
    if (tmp4) {
      tmp4 = lightness < 0.85;
    }
    return tmp4;
  });
  let found1 = found.find((item) => {
    [tmp, tmp2, tmp3] = item;
    return ColorUtils.rawRgbToHsl(tmp, tmp2, tmp3).saturation > 0.3;
  });
  if (found1 == null) {
    found1 = found[0];
  }
  let rgbToHexResult = null;
  if (null != found1) {
    rgbToHexResult = ColorUtils.rgbToHex(found1[0], found1[1], found1[2]);
  }
  return rgbToHexResult;
}
export function getBadgeHaloColor(PRIMARY_800) {
  ({ r, g, b } = ColorUtils.hexToRgb(PRIMARY_800));
  const hexToRgbResult = ColorUtils.hexToRgb(PRIMARY_800);
  ({ hue, saturation } = ColorUtils.rawRgbToHsl(r, g, b));
  const rawRgbToHslResult = ColorUtils.rawRgbToHsl(r, g, b);
  return ColorUtils.hslToHex(hue, 100 * saturation, 70);
}