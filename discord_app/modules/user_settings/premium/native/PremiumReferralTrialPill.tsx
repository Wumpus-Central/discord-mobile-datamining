// discord_app/modules/user_settings/premium/native/PremiumReferralTrialPill.tsx
import set from "../../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const View = get_ActivityIndicator.View;
const jsx = jsxProd.jsx;
let obj = {
  pillParent: { display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "center" },
  pillParentExtraMargin: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 36,
    marginBottom: 20,
  },
  pillContainer: null,
  text: null,
};
obj = {
  backgroundColor: ThemesDefault.colors.WHITE,
  borderRadius: ThemesDefault.radii.round,
  alignItems: "center",
  justifyContent: "center",
  margin: 8,
  paddingHorizontal: 8,
  overflow: "visible",
};
obj[2] = obj;
obj[3] = { color: "#AC46C3", paddingHorizontal: 1, paddingBottom: 2, textAlign: "center" };
let closure_4 = createCacheKey.createStyles(obj);
const result = set.fileFinishedImporting("modules/user_settings/premium/native/PremiumReferralTrialPill.tsx");

export const PremiumReferralTrialPill = (hasExtraMargin) => {
  const tmp = callback();
  let obj = { style: hasExtraMargin.hasExtraMargin ? tmp.pillParentExtraMargin : tmp.pillParent, children: null };
  obj = { style: tmp.pillContainer, children: null };
  obj = { variant: "text-xs/bold", style: tmp.text, children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.Y1q7js).toUpperCase();
  obj[1] = jsx(Text.Text, { variant: "text-xs/bold", style: tmp.text, children: null });
  obj[1] = (
    <View variant="text-xs/bold" style={tmp.text}>
      {null}
    </View>
  );
  return (
    <View variant="text-xs/bold" style={tmp.text}>
      {null}
    </View>
  );
};
