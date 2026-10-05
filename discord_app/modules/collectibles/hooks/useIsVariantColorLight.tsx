// discord_app/modules/collectibles/hooks/useIsVariantColorLight.tsx
import react2 from "../../../../_runtime/00576_react.js";
import utils_ColorUtils from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (variantValue) => {
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
    }
  : (variantValue) => {
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
    };
const result = size.fileFinishedImporting("modules/collectibles/hooks/useIsVariantColorLight.tsx");

export default tmp2;
