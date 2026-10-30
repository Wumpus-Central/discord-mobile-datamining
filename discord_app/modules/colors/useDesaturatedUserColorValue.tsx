// === Module 16503: useDesaturatedUserColorValue ===

// Module 16503 (useDesaturatedUserColorValue)
import _mod19 from "module_19" /* 19 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1091 */;
import tinycolorDefault from "tinycolor" /* 7723 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const useMemo = _mod19.useMemo;
const result = size.fileFinishedImporting("modules/colors/useDesaturatedUserColorValue.tsx");

export default function useDesaturatedUserColorValue(arg0) {
  _require = arg0;
  const items = [AccessibilityStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let num = 1;
    if (AccessibilityStore.desaturateUserColors) {
      num = AccessibilityStore.saturation;
    }
    return num;
  });
  const items1 = [arg0, stateFromStores];
  return useMemo(() => {
    const tmp = tinycolorDefault;
    const tmpResult = tmp(utils_ColorUtils.int2hex(closure_0));
    ({ h, s, l } = tmp(utils_ColorUtils.int2hex(closure_0)).toHsl());
    const obj4 = tinycolorDefault({ h, s: s * stateFromStores, l });
    const obj2 = { h, s: s * stateFromStores, l };
    const toHslResult = tmp(utils_ColorUtils.int2hex(closure_0)).toHsl();
    return { hex: obj4.toHexString(), hsl: obj4.toHslString() };
  }, items1);
};