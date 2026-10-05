// === Module 13203: PremiumReferralTrialPill ===

// Module 13203 (PremiumReferralTrialPill)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasExtraMargin;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { pillParent: { display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "center" }, pillParentExtraMargin: { display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "center", marginTop: 36, marginBottom: 20 }, pillContainer: obj2, text: { color: "#AC46C3", paddingHorizontal: 1, paddingBottom: 2, textAlign: "center" } };
obj2 = { backgroundColor: nativeDefault.colors.WHITE, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", margin: 8, paddingHorizontal: 8, overflow: "visible" };
let closure_4 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((hasExtraMargin) => {
  let first;
  let pillContainer;
  let text;
  let tmp8;
  const obj = react;
  const cResult = obj.c(9);
  hasExtraMargin = hasExtraMargin.hasExtraMargin;
  const tmp4 = closure_4();
  const tmp5 = hasExtraMargin ? tmp4.pillParentExtraMargin : tmp4.pillParent;
  ({ pillContainer, text } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl2.intl;
    const str = intl.string(intl2.t.Y1q7js);
    const formatted = str.toUpperCase();
    cResult[0] = formatted;
    first = formatted;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.text) {
    const tmp10 = jsx(Text_Text.Text, { variant: "text-xs/bold", style: text, children: first });
    cResult[1] = tmp4.text;
    cResult[2] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === tmp4.pillContainer) {
    let tmp11;
    if (cResult[4] === tmp8) {
      tmp11 = cResult[5];
    }
    if (cResult[6] === tmp5) {
      let tmp13;
      if (cResult[7] === tmp11) {
        tmp13 = cResult[8];
      }
      return tmp13;
    }
    const tmp16 = <View style={tmp5}>{tmp11}</View>;
    cResult[6] = tmp5;
    cResult[7] = tmp11;
    cResult[8] = tmp16;
    tmp13 = tmp16;
  }
  const tmp12 = <View style={pillContainer}>{tmp8}</View>;
  cResult[3] = tmp4.pillContainer;
  cResult[4] = tmp8;
  cResult[5] = tmp12;
  tmp11 = tmp12;
}) : ((hasExtraMargin) => {
  let str;
  hasExtraMargin = hasExtraMargin.hasExtraMargin;
  const tmp = closure_4();
  ({ variant: "text-xs/bold", style: tmp.text, children: str.toUpperCase() });
  const Text = Text_Text.Text;
  const intl = intl2.intl;
  str = intl.string(intl2.t.Y1q7js);
  return <View style={hasExtraMargin ? tmp.pillParentExtraMargin : tmp.pillParent}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumReferralTrialPill.tsx");

export const PremiumReferralTrialPill = tmp2;