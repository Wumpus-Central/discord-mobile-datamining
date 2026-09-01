// === Module 15288: ? ===

// Module 15288
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4474 */;
import Button from "Button" /* 4928 */;
import FolderIcon from "FolderIcon" /* 5023 */;
import AccountAgeTier10LargeBadge from "AccountAgeTier10LargeBadge" /* 6256 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8096 */;
import ChatSmileIcon from "ChatSmileIcon" /* 9359 */;
import UserIcon from "UserIcon" /* 11398 */;
import PremiumPerksListDefault from "PremiumPerksList" /* 15289 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import importAllResult from "noop" /* 19 */;

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
    displayNameFromSku = tmp3(4139).getDisplayNameFromSku(skuId1);
    const tmp3Result = tmp3(4139);
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