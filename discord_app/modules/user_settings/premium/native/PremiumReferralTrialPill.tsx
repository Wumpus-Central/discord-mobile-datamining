// discord_app/modules/user_settings/premium/native/PremiumReferralTrialPill.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
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
  backgroundColor: nativeDefault.colors.WHITE,
  borderRadius: nativeDefault.radii.round,
  alignItems: "center",
  justifyContent: "center",
  margin: 8,
  paddingHorizontal: 8,
  overflow: "visible",
};
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
  obj.children = (
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
