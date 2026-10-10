// discord_app/modules/display_name_styles/hooks/useColorPresetsWithA11yLabels.tsx
import c from "../../../../_runtime/00576_c.js";
import utils_ColorUtils from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef2958 from "../intl/DisplayNameStyles.messages.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const getColorPresetsForEffect = fn(1408).getColorPresetsForEffect;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useColorPresetsWithA11yLabels.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useColorPresetsWithA11yLabels(selectedEffectId) {
      const cResult = c.c(3);
      if (cResult[0] !== selectedEffectId) {
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function n(colors, arg1) {
            const obj = { colors, a11yLabel: null };
            const intl = util.intl;
            const obj2 = { number: arg1 + 1, hexList: null };
            const mapped = colors.map(utils_ColorUtils.int2hex);
            obj2.hexList = mapped.join(", ");
            obj.a11yLabel = intl.formatToPlainString(_modDef2958.FHfTsV, obj2);
            return obj;
          };
          cResult[2] = fn;
          let tmp3 = fn;
        } else {
          tmp3 = cResult[2];
        }
        let mapped = getColorPresetsForEffect(selectedEffectId).map(tmp3);
        cResult[0] = selectedEffectId;
        cResult[1] = mapped;
        const arr = getColorPresetsForEffect(selectedEffectId);
      } else {
        return cResult[1];
      }
    }
  : function useColorPresetsWithA11yLabels(arg0) {
      closure_0 = arg0;
      const items = [arg0];
      return noop.useMemo(
        () =>
          getColorPresetsForEffect(closure_0).map((colors, index) => {
            const obj = { colors, a11yLabel: null };
            const intl = closure_1_0(1126).intl;
            const obj2 = { number: index + 1, hexList: null };
            const mapped = colors.map(closure_1_0(1103).int2hex);
            obj2.hexList = mapped.join(", ");
            obj.a11yLabel = intl.formatToPlainString(closure_1_1(2958).FHfTsV, obj2);
            return obj;
          }),
        items,
      );
    };
