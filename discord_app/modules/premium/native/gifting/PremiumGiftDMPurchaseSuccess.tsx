// === Module 9802: PremiumGiftDMSuccessBody ===

// Module 9802 (PremiumGiftDMSuccessBody)
import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
let error;
const require = arg1;
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
createCacheKey = { title: null, description: null };
createCacheKey = { marginTop: require("Themes").space.PX_24, textAlign: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: require("Themes").space.PX_8, textAlign: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { marginTop: require("Themes").space.PX_8, textAlign: "center" };
const result = require("jsxProd").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftDMPurchaseSuccess.tsx");

export default function PremiumGiftDMSuccessBody() {
  const tmp = createCacheKey();
  let obj = require(8813) /* NativeGiftContextProvider */;
  obj = { children: null };
  obj = { children: null };
  obj[0] = callback(importDefault(8787), { giftStyle: obj.useNativeGiftContext().giftStyle });
  const items = [callback(View, obj), , ];
  const obj1 = { style: tmp.title, variant: "heading-lg/bold", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj1[2] = intl.string(require(1236) /* getSystemLocale */.t.MqZXbv);
  items[1] = callback(require(4189) /* Text */.Text, obj1);
  const obj2 = { style: tmp.description, variant: "text-md/medium", children: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj2[2] = intl2.string(require(1236) /* getSystemLocale */.t.Y1keV0);
  items[2] = callback(require(4189) /* Text */.Text, obj2);
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