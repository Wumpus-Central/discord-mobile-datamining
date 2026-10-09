// === Module 13614: PremiumReferralTrialPill ===

// Module 13614 (PremiumReferralTrialPill)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5087 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const jsx = jsxProd.jsx;
let obj = { pillParent: { display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "center" }, pillParentExtraMargin: { display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "center", marginTop: 36, marginBottom: 20 }, pillContainer: { backgroundColor: nativeDefault.colors.WHITE, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", margin: 8, paddingHorizontal: 8, overflow: "visible" }, text: { color: "#AC46C3", paddingHorizontal: 1, paddingBottom: 2, textAlign: "center" } };
let closure_4 = createStyles.createStyles(obj);
let obj2 = { backgroundColor: nativeDefault.colors.WHITE, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", margin: 8, paddingHorizontal: 8, overflow: "visible" };
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumReferralTrialPill.tsx");

export const PremiumReferralTrialPill = ReactCompilerGating.isReactCompilerEnabled() ? ((hasExtraMargin) => {
  const cResult = c.c(9);
  const tmp4 = closure_4();
  const tmp5 = hasExtraMargin.hasExtraMargin ? tmp4.pillParentExtraMargin : tmp4.pillParent;
  ({ pillContainer, text } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const formatted = intl.string(util.t.Y1q7js).toUpperCase();
    cResult[0] = formatted;
    let first = formatted;
    const str = intl.string(util.t.Y1q7js);
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.text) {
    const obj2 = { variant: "text-xs/bold", style: text, children: first };
    const tmp10 = jsx(Text_Text.Text, { variant: "text-xs/bold", style: text, children: first });
    cResult[1] = tmp4.text;
    cResult[2] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === tmp4.pillContainer) {
    if (cResult[4] === tmp8) {
      let tmp11 = cResult[5];
    }
    if (cResult[6] === tmp5) {
      if (cResult[7] === tmp11) {
        let tmp13 = cResult[8];
      }
      return tmp13;
    }
    const obj3 = { style: tmp5, children: tmp11 };
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
  const tmp = closure_4();
  const obj = { style: hasExtraMargin.hasExtraMargin ? tmp.pillParentExtraMargin : tmp.pillParent, children: null };
  const obj2 = { style: tmp.pillContainer, children: null };
  const obj3 = { variant: "text-xs/bold", style: tmp.text, children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t.Y1q7js).toUpperCase();
  obj2.children = jsx(Text_Text.Text, { variant: "text-xs/bold", style: tmp.text, children: null });
  obj.children = <View style={tmp.pillContainer}>{null}</View>;
  return <View style={hasExtraMargin.hasExtraMargin ? tmp.pillParentExtraMargin : tmp.pillParent}>{null}</View>;
});