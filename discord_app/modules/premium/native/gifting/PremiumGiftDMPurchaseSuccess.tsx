// discord_app/modules/premium/native/gifting/PremiumGiftDMPurchaseSuccess.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import PremiumGiftBackgroundAnimationDefault from "PremiumGiftBackgroundAnimation.android.tsx";
import NativeGiftContextProvider from "../../../payments/native/NativeGiftContext.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
createCacheKey = { title: null, description: null };
createCacheKey = { marginTop: ThemesDefault.space.PX_24, textAlign: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: ThemesDefault.space.PX_8, textAlign: "center" };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj1 = { marginTop: ThemesDefault.space.PX_8, textAlign: "center" };
const result = require("set").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftDMPurchaseSuccess.tsx");

export default function PremiumGiftDMSuccessBody() {
  const tmp = callback3();
  let obj = NativeGiftContextProvider;
  obj = { children: null };
  obj = { children: callback(PremiumGiftBackgroundAnimationDefault, { giftStyle: obj.useNativeGiftContext().giftStyle }) };
  const items = [callback(View, obj), , ];
  obj1 = { style: tmp.title, variant: "heading-lg/bold", children: null };
  const intl = getSystemLocale.intl;
  obj1[2] = intl.string(getSystemLocale.t.MqZXbv);
  items[1] = callback(Text.Text, obj1);
  const obj2 = { style: tmp.description, variant: "text-md/medium", children: null };
  const intl2 = getSystemLocale.intl;
  obj2[2] = intl2.string(getSystemLocale.t.Y1keV0);
  items[2] = callback(Text.Text, obj2);
  obj[0] = items;
  return callback2(closure_6, obj);
};
export const PremiumGiftDMSuccessActions = function PremiumGiftDMSuccessActions() {
  let obj = onClose(navigation[5]);
  const nativeGiftContext = obj.useNativeGiftContext();
  onClose = nativeGiftContext.onClose;
  const prePurchaseGiftingBadgeProgress = nativeGiftContext.prePurchaseGiftingBadgeProgress;
  navigation = onClose(navigation[6]).useNavigation();
  const GiftingBadgeExperiment = onClose(navigation[7]).GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig({ location: "PremiumGiftDMSuccessActions" }).enabled;
  const items = [enabled, prePurchaseGiftingBadgeProgress, navigation, onClose];
  const callback = enabled.useCallback(() => {
    if (enabled) {
      if (null != prePurchaseGiftingBadgeProgress) {
        const obj = { currentProgress: null };
        obj[0] = tmp;
        navigation.navigate(onClose(navigation[8]).PremiumGiftScreens.GIFTING_BADGE, obj);
      }
    }
    onClose();
  }, items);
  obj = { text: null, variant: "primary", onPress: null };
  const intl = onClose(navigation[10]).intl;
  obj[0] = intl.string(prePurchaseGiftingBadgeProgress(navigation[11]).bGKjmg);
  obj[2] = callback;
  return callback(onClose(navigation[9]).Button, obj);
};