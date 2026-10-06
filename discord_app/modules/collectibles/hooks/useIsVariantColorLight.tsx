// === Module 8561: useIsVariantColorLight ===

// Module 8561 (useIsVariantColorLight)
import react2 from "react" /* 576 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1103 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((variantValue) => {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] !== variantValue.variantValue) {
    const tmpResult = utils_ColorUtils;
    let isValidHexResult = tmpResult.isValidHex(variantValue.variantValue);
    if (isValidHexResult) {
      const getDarkness = utils_ColorUtils.getDarkness;
      utils_ColorUtils;
      const tmpResult4 = utils_ColorUtils;
      isValidHexResult = getDarkness(tmpResult4.hex2int(variantValue.variantValue)) < 0.3;
    }
    cResult[0] = variantValue.variantValue;
    cResult[1] = isValidHexResult;
    tmp4 = isValidHexResult;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : ((variantValue) => {
  const items = [variantValue.variantValue];
  return react.useMemo(() => {
    const obj = utils_ColorUtils;
    let isValidHexResult = obj.isValidHex(variantValue.variantValue);
    if (isValidHexResult) {
      const getDarkness = utils_ColorUtils.getDarkness;
      utils_ColorUtils;
      const tmpResult2 = utils_ColorUtils;
      isValidHexResult = getDarkness(tmpResult2.hex2int(variantValue.variantValue)) < 0.3;
    }
    return isValidHexResult;
  }, items);
});
const result = size.fileFinishedImporting("modules/collectibles/hooks/useIsVariantColorLight.tsx");

export default tmp2;