// === Module 13320: BoostingUnavailablePill ===

// Module 13320 (BoostingUnavailablePill)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import _modDef3205 from "module_3205" /* 3205 */;
import PremiumGroupConstants from "PremiumGroupConstants" /* 4542 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let style;

let c3;
let closure_4;
let obj2;
function handlePress() {
  let formatToPlainString;
  let obj2;
  let prop;
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  const obj = { aboutText: formatToPlainString(prop, obj2) };
  ActionSheetActionCreatorsDefault;
  const tmp2 = asyncRequire(13321, dependencyMap.paths);
  const intl = intl2.intl;
  formatToPlainString = intl.formatToPlainString;
  obj2 = { premiumGroupProductName: closure_5() };
  prop = _modDef3205["5xN/C1"];
  openLazy(tmp2, "PremiumGroupEducationActionSheet", obj);
}
({ TouchableOpacity: c3, View: closure_4 } = react_native);
let closure_5 = PremiumGroupConstants.getPremiumGroupProductName;
const jsx = Fragment.jsx;
let obj = { premiumGroupBanner: obj2, pgUnavailable: { flex: 1, justifyContent: "center" }, pgUnavailableText: { textAlign: "center" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flexDirection: "row", gap: 12, padding: 12, justifyContent: "center", borderColor: nativeDefault.colors.STATUS_WARNING, borderWidth: 1, borderRadius: nativeDefault.radii.lg, marginBottom: 12 };
let closure_7 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  let pgUnavailable;
  let pgUnavailableText;
  const obj = react;
  const cResult = obj.c(12);
  style = style.style;
  const tmp4 = closure_7();
  if (cResult[0] === style) {
    let tmp5;
    let tmp7;
    let tmp9;
    if (cResult[1] === tmp4.premiumGroupBanner) {
      tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    ({ pgUnavailable, pgUnavailableText } = tmp4);
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = intl2.intl;
      const stringResult = intl.string(intl2.t["5nrJDO"]);
      cResult[3] = stringResult;
      tmp7 = stringResult;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] !== tmp4.pgUnavailableText) {
      const tmp11 = jsx(Text_Text.Text, { variant: "text-md/normal", color: "interactive-text-active", style: pgUnavailableText, children: tmp7 });
      cResult[4] = tmp4.pgUnavailableText;
      cResult[5] = tmp11;
      tmp9 = tmp11;
    } else {
      tmp9 = cResult[5];
    }
    if (cResult[6] === tmp4.pgUnavailable) {
      let tmp12;
      if (cResult[7] === tmp9) {
        tmp12 = cResult[8];
      }
      if (cResult[9] === tmp5) {
        let tmp16;
        if (cResult[10] === tmp12) {
          tmp16 = cResult[11];
        }
        return tmp16;
      }
      const tmp21 = <_false activeOpacity={0.7} onPress={handlePress}>{null}</_false>;
      cResult[9] = tmp5;
      cResult[10] = tmp12;
      cResult[11] = tmp21;
      tmp16 = tmp21;
    }
    const tmp15 = <React3 style={pgUnavailable}>{tmp9}</React3>;
    cResult[6] = tmp4.pgUnavailable;
    cResult[7] = tmp9;
    cResult[8] = tmp15;
    tmp12 = tmp15;
  }
  const items = [tmp4.premiumGroupBanner, style];
  cResult[0] = style;
  cResult[1] = tmp4.premiumGroupBanner;
  cResult[2] = items;
  tmp5 = items;
}) : ((style) => {
  let intl;
  style = style.style;
  const tmp = closure_7();
  const items = [tmp.premiumGroupBanner, style];
  ({ variant: "text-md/normal", color: "interactive-text-active", style: tmp.pgUnavailableText, children: intl.string(intl2.t["5nrJDO"]) });
  const Text = Text_Text.Text;
  intl = intl2.intl;
  return <_false activeOpacity={0.7} onPress={handlePress}>{null}</_false>;
});
const result = size.fileFinishedImporting("modules/premium/premium_group/native/BoostingUnavailablePill.tsx");

export default tmp3;