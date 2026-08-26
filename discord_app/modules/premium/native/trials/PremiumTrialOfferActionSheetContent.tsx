// discord_app/modules/premium/native/trials/PremiumTrialOfferActionSheetContent.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import Button from "../../../../design/components/Button/native/Button.native.tsx";
import FolderIcon from "../../../../design/components/Icon/native/redesign/generated/FolderIcon.tsx";
import AccountAgeTier10LargeBadge from "../../../../design/assets/native.tsx";
import NitroWheelIcon from "../../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import ChatSmileIcon from "../../../../design/components/Icon/native/redesign/generated/ChatSmileIcon.tsx";
import UserIcon from "../../../../design/components/Icon/native/redesign/generated/UserIcon.tsx";
import PremiumPerksListDefault from "../../../../components_native/premium/PremiumPerksList.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";

require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { contentContainer: null, buttonContainer: null, title: null, heroIllustrationContainer: null };
obj = { paddingHorizontal: 36, paddingTop: 18, paddingBottom: 36, width: "100%", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, alignItems: "flex-start", display: "flex", flexDirection: "column", gap: 0 };
obj[0] = obj;
obj[1] = { marginVertical: 6, width: "100%", height: 48 };
obj[2] = { width: "100%", textAlign: "center" };
obj[3] = { alignItems: "center", justifyContent: "center", height: 188, width: "100%" };
let closure_6 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function PremiumTrialOfferActionSheetContent(onConfirm) {
  ({ trialOffer, intervalDuration } = onConfirm);
  const tmp = callback2();
  let subscriptionTrial;
  if (trialOffer != null) {
    subscriptionTrial = trialOffer.subscriptionTrial;
  }
  let obj = { IconComponent: UserIcon.UserIcon, label: null, description: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.kpMomJ);
  const intl2 = getSystemLocale.intl;
  obj[2] = intl2.string(getSystemLocale.t.uVUtPw);
  const items = [obj, , ];
  obj = { IconComponent: ChatSmileIcon.ChatSmileIcon, label: null, description: null };
  const intl3 = getSystemLocale.intl;
  obj[1] = intl3.string(getSystemLocale.t["R2IV/Q"]);
  const intl4 = getSystemLocale.intl;
  obj[2] = intl4.string(getSystemLocale.t["3SUJLd"]);
  items[1] = obj;
  obj = { IconComponent: FolderIcon.FolderIcon, label: null, description: null };
  const intl5 = getSystemLocale.intl;
  obj[1] = intl5.string(getSystemLocale.t["u/NJKc"]);
  const intl6 = getSystemLocale.intl;
  obj[2] = intl6.string(getSystemLocale.t.i1UuMk);
  items[2] = obj;
  obj1 = { style: tmp.contentContainer, children: null };
  const items1 = [callback(View, { style: tmp.heroIllustrationContainer, children: callback(AccountAgeTier10LargeBadge.NitroWumpusFlightRight3dIllustration, { width: 180, height: 180 }) }), , , ];
  const obj3 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, children: null };
  const intl7 = getSystemLocale.intl;
  let skuId;
  if (subscriptionTrial != null) {
    skuId = subscriptionTrial.skuId;
  }
  let displayNameFromSku = null;
  if (null != skuId) {
    let skuId1;
    if (subscriptionTrial != null) {
      skuId1 = subscriptionTrial.skuId;
    }
    displayNameFromSku = tmp3(4107).getDisplayNameFromSku(skuId1);
    const tmp3Result = tmp3(4107);
  }
  obj3[3] = intl7.formatToPlainString(getSystemLocale.t.q8eMc0, { displayName: displayNameFromSku, duration: intervalDuration });
  items1[1] = callback(Text.Text, obj3);
  items1[2] = callback(PremiumPerksListDefault, { perks: items });
  const obj4 = { style: tmp.buttonContainer, children: null };
  const obj5 = { size: "lg", text: null, onPress: null, grow: true, icon: null };
  const intl8 = tmp3(1236).intl;
  obj5[1] = intl8.formatToPlainString(getSystemLocale.t.xASjq5, { duration: intervalDuration });
  obj5[2] = onConfirm.onConfirm;
  const obj2 = { style: tmp.heroIllustrationContainer, children: callback(AccountAgeTier10LargeBadge.NitroWumpusFlightRight3dIllustration, { width: 180, height: 180 }) };
  const tmp5 = closure_5;
  obj5[4] = callback(NitroWheelIcon.NitroWheelIcon, { size: "md", color: ThemesDefault.unsafe_rawColors.WHITE });
  obj4[1] = callback(Button.Button, obj5);
  items1[3] = callback(View, obj4);
  obj1[1] = items1;
  return tmp5(View, obj1);
});
const result = require("set").fileFinishedImporting("modules/premium/native/trials/PremiumTrialOfferActionSheetContent.tsx");

export default memoResult;