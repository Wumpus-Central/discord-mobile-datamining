// === Module 9045: useIsVariantColorLight ===

// Module 9045 (useIsVariantColorLight)
import c from "c" /* 576 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1103 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useIsVariantColorLight.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useIsVariantColorLight(variantValue) {
  const cResult = c.c(2);
  if (cResult[0] !== variantValue.variantValue) {
    let isValidHexResult = utils_ColorUtils.isValidHex(variantValue.variantValue);
    if (isValidHexResult) {
      const tmpResult3 = utils_ColorUtils;
      isValidHexResult = tmpResult3.getDarkness(utils_ColorUtils.hex2int(variantValue.variantValue)) < 0.3;
      const tmpResult4 = utils_ColorUtils;
    }
    cResult[0] = variantValue.variantValue;
    cResult[1] = isValidHexResult;
    let tmp4 = isValidHexResult;
    const tmpResult = utils_ColorUtils;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function useIsVariantColorLight(variantValue) {
  const items = [variantValue.variantValue];
  return noop.useMemo(() => {
    let isValidHexResult = utils_ColorUtils.isValidHex(variantValue.variantValue);
    if (isValidHexResult) {
      const tmpResult = utils_ColorUtils;
      isValidHexResult = tmpResult.getDarkness(utils_ColorUtils.hex2int(variantValue.variantValue)) < 0.3;
      const tmpResult2 = utils_ColorUtils;
    }
    return isValidHexResult;
  }, items);
});