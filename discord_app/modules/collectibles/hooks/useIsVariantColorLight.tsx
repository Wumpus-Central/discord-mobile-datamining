// discord_app/modules/collectibles/hooks/useIsVariantColorLight.tsx
import closure_2 from "../../../../_runtime/00019_noop.js";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useIsVariantColorLight.tsx");

export default function useIsVariantColorLight(variantValue) {
  closure_0 = variantValue;
  const items = [variantValue.variantValue];
  return React.useMemo(() => {
    let isValidHexResult = variantValue(closure_1_1[1]).isValidHex(variantValue.variantValue);
    if (isValidHexResult) {
      let tmpResult = tmp(tmp2[1]);
      tmpResult = tmp(tmp2[1]);
      isValidHexResult = tmpResult.getDarkness(tmpResult.hex2int(variantValue.variantValue)) < 0.3;
    }
    return isValidHexResult;
  }, items);
};