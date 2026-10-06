// discord_app/modules/display_name_styles/hooks/useColorPresetsWithA11yLabels.tsx
import react2 from "../../../../_runtime/00576_react.js";
import utils_ColorUtils from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import intl2 from "../../../intl/index.native.tsx";
import DisplayNameStylesConstants from "../DisplayNameStylesConstants.tsx";
import _modDef2911 from "../intl/DisplayNameStyles.messages.js";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const getColorPresetsForEffect = DisplayNameStylesConstants.getColorPresetsForEffect;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (selectedEffectId) => {
      let tmp2;
      let obj = react2;
      const cResult = obj.c(3);
      if (cResult[0] !== selectedEffectId) {
        let tmp4;
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function s(colors, arg1) {
            let FHfTsV;
            let formatToPlainString;
            let mapped;
            let obj2;
            const obj = { colors, a11yLabel: formatToPlainString(FHfTsV, obj2) };
            const intl = intl2.intl;
            formatToPlainString = intl.formatToPlainString;
            obj2 = { number: arg1 + 1, hexList: mapped.join(", ") };
            FHfTsV = _modDef2911.FHfTsV;
            mapped = colors.map(utils_ColorUtils.int2hex);
            return obj;
          };
          cResult[2] = fn;
          tmp4 = fn;
        } else {
          tmp4 = cResult[2];
        }
        const arr = getColorPresetsForEffect(selectedEffectId);
        let mapped = arr.map(tmp4);
        cResult[0] = selectedEffectId;
        cResult[1] = mapped;
        tmp2 = mapped;
      } else {
        tmp2 = cResult[1];
      }
      return tmp2;
    }
  : (arg0) => {
      let closure_0 = arg0;
      const items = [arg0];
      return react.useMemo(() => {
        const arr = getColorPresetsForEffect(closure_0);
        return arr.map((colors, index) => {
          let FHfTsV;
          let formatToPlainString;
          let mapped;
          let obj2;
          const obj = { colors, a11yLabel: formatToPlainString(FHfTsV, obj2) };
          const intl = closure_1_0(closure_1_2[4]).intl;
          formatToPlainString = intl.formatToPlainString;
          obj2 = { number: index + 1, hexList: mapped.join(", ") };
          FHfTsV = closure_1_1(closure_1_2[5]).FHfTsV;
          mapped = colors.map(closure_1_0(closure_1_2[6]).int2hex);
          return obj;
        });
      }, items);
    };
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useColorPresetsWithA11yLabels.tsx");

export default tmp2;
