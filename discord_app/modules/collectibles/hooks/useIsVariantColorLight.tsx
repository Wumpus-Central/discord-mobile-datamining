// === Module 9261: useIsVariantColorLight ===

// Module 9261 (useIsVariantColorLight)
import noop from "noop" /* 19 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/collectibles/hooks/useIsVariantColorLight.tsx");

export default function useIsVariantColorLight(variantValue) {
  closure_0 = variantValue;
  const items = [variantValue.variantValue];
  return React.useMemo(() => {
    let isValidHexResult = variantValue(dependencyMap[1]).isValidHex(variantValue.variantValue);
    if (isValidHexResult) {
      variantValue(dependencyMap[1]);
      const tmpResult = variantValue(dependencyMap[1]);
      isValidHexResult = tmpResult.getDarkness(tmpResult.hex2int(variantValue.variantValue)) < 0.3;
    }
    return isValidHexResult;
  }, items);
};