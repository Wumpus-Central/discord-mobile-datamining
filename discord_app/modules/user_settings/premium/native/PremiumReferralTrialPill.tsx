// === Module 12851: PremiumReferralTrialPill ===

// Module 12851 (PremiumReferralTrialPill)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4734 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const View = get_ActivityIndicator.View;
const jsx = jsxProd.jsx;
let obj = { backgroundColor: ThemesDefault.colors.WHITE, borderRadius: ThemesDefault.radii.round, alignItems: "center", justifyContent: "center", margin: 8, paddingHorizontal: 8, overflow: "visible" };
obj[2] = obj;
obj[3] = { color: "#AC46C3", paddingHorizontal: 1, paddingBottom: 2, textAlign: "center" };
let closure_4 = createCacheKey.createStyles(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/premium/native/PremiumReferralTrialPill.tsx");

export const PremiumReferralTrialPill = (hasExtraMargin) => {
  const tmp = callback();
  const obj = { variant: "text-xs/bold", style: tmp.text, children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.Y1q7js).toUpperCase();
  obj[1] = jsx(Text.Text, { variant: "text-xs/bold", style: tmp.text, children: null });
  obj[1] = <View variant="text-xs/bold" style={tmp.text}>{null}</View>;
  return <View variant="text-xs/bold" style={tmp.text}>{null}</View>;
};