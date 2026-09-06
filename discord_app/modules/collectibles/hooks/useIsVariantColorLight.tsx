// === Module 8866: useIsVariantColorLight ===

// Module 8866 (useIsVariantColorLight)
import utils_ColorUtils from "utils/ColorUtils" /* 1091 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useIsVariantColorLight.tsx");

export default function useIsVariantColorLight(variantValue) {
  const items = [variantValue.variantValue];
  return noop.useMemo(() => {
    let isValidHexResult = utils_ColorUtils.isValidHex(variantValue.variantValue);
    if (isValidHexResult) {
      tmp(1091);
      const tmpResult = tmp(1091);
      isValidHexResult = tmpResult.getDarkness(tmpResult.hex2int(variantValue.variantValue)) < 0.3;
    }
    return isValidHexResult;
  }, items);
};