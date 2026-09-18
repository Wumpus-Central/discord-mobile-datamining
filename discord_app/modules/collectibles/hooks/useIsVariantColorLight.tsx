// === Module 9105: useIsVariantColorLight ===

// Module 9105 (useIsVariantColorLight)
import utils_ColorUtils from "utils/ColorUtils" /* 1092 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useIsVariantColorLight.tsx");

export default function useIsVariantColorLight(variantValue) {
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
};