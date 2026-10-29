// === Module 1410: ColorPaletteUtils ===

// Module 1410 (ColorPaletteUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/color_picker/ColorPaletteUtils.tsx");

export function isCustomColorPalette(gummyColors, arr) {
  closure_0 = gummyColors;
  let tmp = null != gummyColors;
  if (tmp) {
    tmp = 0 !== gummyColors.length;
  }
  if (tmp) {
    tmp = !arr.some((arr) => arr.length === arr2.length && arr.every((item, index) => item === closure_0[index]));
  }
  return tmp;
}
export function getPresetPalettesWithCustom(arr, arr2) {
  const substr = arr.slice();
  if (null != arr2) {
    if (0 !== substr.length) {
      if (tmp) {
        substr[0] = arr2.slice();
      }
      tmp = null != arr2 && 0 !== arr2.length && !arr.some((arr) => arr.length === arr2.length && arr.every((item, index) => item === closure_0[index]));
    }
  }
  return substr;
}