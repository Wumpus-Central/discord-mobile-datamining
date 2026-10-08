// === Module 14748: useDesaturatedUserColorValue ===

// Module 14748 (useDesaturatedUserColorValue)
import _mod19 from "module_19" /* 19 */;
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1103 */;
import tinycolorDefault from "tinycolor" /* 7262 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const useMemo = _mod19.useMemo;
const result = size.fileFinishedImporting("modules/colors/useDesaturatedUserColorValue.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useDesaturatedUserColorValue(color) {
  const cResult = c.c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function l() {
      let num = 1;
      if (AccessibilityStore.desaturateUserColors) {
        num = AccessibilityStore.saturation;
      }
      return num;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === color) {
    if (cResult[3] === stateFromStores) {
      let tmp8 = cResult[4];
      let tmp9 = cResult[5];
    }
    if (cResult[6] === tmp8) {
      if (cResult[7] === tmp9) {
        let tmp14 = cResult[8];
      }
      return tmp14;
    }
    const obj2 = { hex: tmp8, hsl: tmp9 };
    cResult[6] = tmp8;
    cResult[7] = tmp9;
    cResult[8] = obj2;
    tmp14 = obj2;
  }
  const tmpResult = initialize;
  const tmp10 = tinycolorDefault;
  const tmpResult2 = utils_ColorUtils;
  const tmp10Result = tmp10(utils_ColorUtils.int2hex(color));
  ({ h, s, l } = tmp10(utils_ColorUtils.int2hex(color)).toHsl());
  const obj6 = tinycolorDefault({ h, s: s * stateFromStores, l });
  const toHexStringResult = obj6.toHexString();
  const toHslStringResult = obj6.toHslString();
  cResult[2] = color;
  cResult[3] = stateFromStores;
  cResult[4] = toHexStringResult;
  cResult[5] = toHslStringResult;
  tmp9 = toHslStringResult;
  tmp8 = toHexStringResult;
  const obj3 = { h, s: s * stateFromStores, l };
  const toHslResult = tmp10(utils_ColorUtils.int2hex(color)).toHsl();
}) : (function useDesaturatedUserColorValue(arg0) {
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
});