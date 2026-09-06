// discord_app/modules/collectibles/hooks/useIsVariantColorLight.tsx
import utils_ColorUtils from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useIsVariantColorLight.tsx");

export default function useIsVariantColorLight(variantValue) {
  const items = [variantValue.variantValue];
  return noop.useMemo(() => {
    let isValidHexResult = utils_ColorUtils.isValidHex(variantValue.variantValue);
    if (isValidHexResult) {
      const tmpResult = utils_ColorUtils;
      isValidHexResult = tmpResult.getDarkness(tmpResult.hex2int(variantValue.variantValue)) < 0.3;
    }
    return isValidHexResult;
  }, items);
}
