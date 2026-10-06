// === Module 15181: useColorPresetsWithA11yLabels ===

// Module 15181 (useColorPresetsWithA11yLabels)
import react2 from "react" /* 576 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1103 */;
import intl2 from "intl" /* 1126 */;
import DisplayNameStylesConstants from "DisplayNameStylesConstants" /* 1395 */;
import _modDef2911 from "module_2911" /* 2911 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const getColorPresetsForEffect = DisplayNameStylesConstants.getColorPresetsForEffect;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((selectedEffectId) => {
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
}) : ((arg0) => {
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
});
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useColorPresetsWithA11yLabels.tsx");

export default tmp2;