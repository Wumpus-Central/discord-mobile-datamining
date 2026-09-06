// === Module 13415: PremiumReferralTrialPill ===

// Module 13415 (PremiumReferralTrialPill)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const jsx = jsxProd.jsx;
let obj = { pillParent: { display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "center" }, pillParentExtraMargin: { display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "center", marginTop: 36, marginBottom: 20 }, pillContainer: null, text: null };
obj = { backgroundColor: nativeDefault.colors.WHITE, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", margin: 8, paddingHorizontal: 8, overflow: "visible" };
obj.pillContainer = obj;
obj.text = { color: "#AC46C3", paddingHorizontal: 1, paddingBottom: 2, textAlign: "center" };
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumReferralTrialPill.tsx");

export const PremiumReferralTrialPill = (hasExtraMargin) => {
  const tmp = closure_4();
  let obj = { style: hasExtraMargin.hasExtraMargin ? tmp.pillParentExtraMargin : tmp.pillParent, children: null };
  obj = { style: tmp.pillContainer, children: null };
  obj = { variant: "text-xs/bold", style: tmp.text, children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.Y1q7js).toUpperCase();
  obj.children = jsx(Text_Text.Text, { variant: "text-xs/bold", style: tmp.text, children: null });
  obj.children = <View variant="text-xs/bold" style={tmp.text}>{null}</View>;
  return <View variant="text-xs/bold" style={tmp.text}>{null}</View>;
};