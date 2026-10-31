// === Module 17330: useCustomSwatchA11y ===

// Module 17330 (useCustomSwatchA11y)
import utils_ColorUtils from "utils/ColorUtils" /* 1090 */;
import util from "util" /* 1113 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useCustomSwatchA11y.tsx");

export default function useCustomSwatchA11y(selectedColors) {
  selectedColors = selectedColors.selectedColors;
  ({ hasCustomPalette, hasCustomSwatchSelected } = selectedColors);
  let tmp2 = null;
  const id = noop.useId();
  if (hasCustomPalette) {
    const _Math = Math;
    const items = [];
    HermesBuiltin.arraySpread(selectedColors.map((item) => utils_ColorUtils.getContrast(item, 0)), 0);
    const _Math2 = Math;
    const applyResult = HermesBuiltin.apply(items, Math);
    const _Math3 = Math;
    const items1 = [];
    HermesBuiltin.arraySpread(selectedColors.map((item) => utils_ColorUtils.getContrast(item, 16777215)), 0);
    const _Math4 = Math;
    const applyResult1 = HermesBuiltin.apply(items1, Math);
    const _Math5 = Math;
    const tmp14 = Math.max(applyResult, applyResult1) < 3;
    let tmp15 = tmp14;
    if (!tmp14) {
      tmp15 = applyResult >= applyResult1;
    }
    const obj = { useDarkIcon: tmp15, needsBacking: tmp14 };
    tmp2 = obj;
  }
  const obj2 = { customColorDescriptionId: id, customColorDescription: null, iconContrast: null };
  let formatToPlainStringResult;
  if (hasCustomSwatchSelected) {
    const intl = util.intl;
    const obj3 = { color: null };
    const mapped = selectedColors.map(utils_ColorUtils.int2hex);
    obj3.color = mapped.join(", ");
    formatToPlainStringResult = intl.formatToPlainString(util.t["7BFCRR"], obj3);
  }
  obj2.customColorDescription = formatToPlainStringResult;
  obj2.iconContrast = tmp2;
  return obj2;
};