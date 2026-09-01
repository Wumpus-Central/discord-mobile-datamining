// discord_app/modules/premium/premium_group/native/PremiumGroupEducationActionSheet.tsx
import set from "../../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import messagesProxyDefault from "../PremiumGroup.messages.js";
import SubscriptionStatusTypes from "../PremiumGroupConstants.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import Background from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import CircleErrorIcon from "../../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const View = get_ActivityIndicator.View;
const HELP_CENTER_LINK = SubscriptionStatusTypes.HELP_CENTER_LINK;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = {
  container: { marginTop: 32, marginHorizontal: 30 },
  aboutContainer: null,
  warningIcon: null,
  aboutTextContainer: null,
  helpdeskText: null,
};
obj = {
  flexDirection: "row",
  backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE,
  justifyContent: "center",
  borderRadius: ThemesDefault.radii.lg,
  marginBottom: 12,
};
obj[1] = obj;
obj[2] = { margin: 16 };
obj[3] = { justifyContent: "center", flex: 1, marginRight: 30 };
obj[4] = { textAlign: "center", marginBottom: 24 };
let closure_7 = createCacheKey.createStyles(obj);
const result = set.fileFinishedImporting("modules/premium/premium_group/native/PremiumGroupEducationActionSheet.tsx");

export default function PremiumGroupEducationActionSheet(children) {
  const tmp = callback3();
  let obj = { children: null };
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.aboutContainer, children: null };
  const items = [
    callback(CircleErrorIcon.CircleErrorIcon, { size: "lg", style: tmp.warningIcon }),
    callback(View, {
      style: tmp.aboutTextContainer,
      children: callback(Text.Text, {
        variant: "text-sm/medium",
        color: "text-overlay-light",
        children: children.aboutText,
      }),
    }),
  ];
  obj[1] = items;
  const items1 = [callback2(View, obj)];
  const obj3 = { variant: "text-sm/medium", color: "text-overlay-light", style: tmp.helpdeskText, children: null };
  const intl = getSystemLocale.intl;
  obj3[3] = intl.format(messagesProxyDefault.ah1Ecm, { helpCenterLink: HELP_CENTER_LINK });
  items1[1] = callback(Text.Text, obj3);
  obj[1] = items1;
  obj[0] = callback2(View, obj);
  return callback(Background.BottomSheet, obj);
}
