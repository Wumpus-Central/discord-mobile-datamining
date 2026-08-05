// discord_app/modules/user_settings/premium/native/PremiumReferralTrialPill.tsx
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";

let obj = { pillParent: { display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "center" }, pillParentExtraMargin: { display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "center", marginTop: 36, marginBottom: 20 }, pillContainer: null, text: null };
obj = { backgroundColor: require("Themes").colors.WHITE, borderRadius: require("Themes").radii.round, alignItems: "center", justifyContent: "center", margin: 8, paddingHorizontal: 8, overflow: "visible" };
obj[2] = obj;
obj[3] = { color: "#AC46C3", paddingHorizontal: 1, paddingBottom: 2, textAlign: "center" };
let closure_4 = createCacheKey.createStyles(obj);
const result = require("createCacheKey").fileFinishedImporting("modules/user_settings/premium/native/PremiumReferralTrialPill.tsx");

export const PremiumReferralTrialPill = (hasExtraMargin) => {
  const tmp = callback();
  let obj = { style: hasExtraMargin.hasExtraMargin ? tmp.pillParentExtraMargin : tmp.pillParent, children: null };
  obj = { style: tmp.pillContainer, children: null };
  obj = { variant: "text-xs/bold", style: tmp.text, children: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[2] = intl.string(getSystemLocale /* getSystemLocale */.t.Y1q7js).toUpperCase();
  obj[1] = jsx(Text /* Text */.Text, { variant: "text-xs/bold", style: tmp.text, children: null });
  obj[1] = <View variant="text-xs/bold" style={tmp.text}>{null}</View>;
  return <View variant="text-xs/bold" style={tmp.text}>{null}</View>;
};