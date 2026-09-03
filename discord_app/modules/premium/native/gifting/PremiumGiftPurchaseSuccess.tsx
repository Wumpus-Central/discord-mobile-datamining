// discord_app/modules/premium/native/gifting/PremiumGiftPurchaseSuccess.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../../stores/game_store/SKUStore.tsx";
import { SubscriptionIntervalTypes } from "../../PremiumConstants.tsx";
import { AnalyticsSections } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ jsx: closure_8, Fragment: c9, jsxs: c10 } = jsxProd);
createCacheKey = { disclaimer: null, title: null, description: null, input: null, inputLabel: null };
createCacheKey = { marginTop: ThemesDefault.space.PX_4, marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: ThemesDefault.space.PX_24, textAlign: "center" };
let obj1 = { marginTop: ThemesDefault.space.PX_24, textAlign: "center" };
createCacheKey[2] = { marginTop: ThemesDefault.space.PX_8, textAlign: "center" };
let obj2 = { marginTop: ThemesDefault.space.PX_8, textAlign: "center" };
createCacheKey[3] = { marginTop: ThemesDefault.space.PX_24 };
let obj3 = { marginTop: ThemesDefault.space.PX_24 };
createCacheKey[4] = { marginBottom: ThemesDefault.space.PX_4 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let obj4 = { marginBottom: ThemesDefault.space.PX_4 };
let result = require("set").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftPurchaseSuccess.tsx");

export default function PremiumGiftSuccessBody(giftCodeRecord) {
  giftCodeRecord = giftCodeRecord.giftCodeRecord;
  let giftCodeURL;
  let tmp = callback3();
  let obj = giftCodeRecord(10702);
  const nativeGiftContext = obj.useNativeGiftContext();
  ({ giftStyle, premiumType, planInterval } = nativeGiftContext);
  obj1 = giftCodeRecord(4753);
  giftCodeURL = obj1.getGiftCodeURL(giftCodeRecord.code);
  if (null != giftCodeRecord.giftStyle) {
    giftStyle = giftCodeRecord.giftStyle;
  }
  if (null != giftCodeRecord.subscriptionPlanId) {
    let subscriptionPlanId = giftCodeRecord.subscriptionPlanId;
  } else {
    subscriptionPlanId = tmp2(4139).getPlanIdForPremiumType(premiumType, planInterval);
    const tmp2Result = tmp2(4139);
  }
  let obj3 = giftCodeURL(4139);
  const tierDisplayNameByPlanId = obj3.getTierDisplayNameByPlanId(subscriptionPlanId);
  let obj4 = giftCodeURL(4139);
  const items = [giftCodeRecord, giftCodeURL];
  obj = { children: null };
  const callback = React.useCallback(() => {
    const value = closure_1_5.get(giftCodeRecord.skuId);
    if (null != value) {
      giftCodeRecord(closure_1_2[11]).trackGiftCodeCopy(tmp, value);
      const obj = giftCodeRecord(closure_1_2[11]);
    }
    giftCodeRecord(closure_1_2[17]).copy(giftCodeURL);
    const obj2 = giftCodeRecord(closure_1_2[17]);
    tmp = giftCodeRecord;
    const result = giftCodeRecord(closure_1_2[18]).presentCopiedToClipboard();
  }, items);
  obj[0] = callback(giftCodeURL(10827), { giftStyle });
  const items1 = [callback(View, obj), , , ,];
  obj = { style: tmp.title, variant: "heading-lg/bold", children: null };
  const intl = tmp2(1233).intl;
  obj[2] = intl.string(giftCodeRecord(1233).t["/s1xR7"]);
  items1[1] = callback(giftCodeRecord(4474).Text, obj);
  obj1 = { style: tmp.description, variant: "text-md/medium", children: null };
  const intl2 = tmp2(1233).intl;
  if (obj4.getInterval(subscriptionPlanId).intervalType === SubscriptionIntervalTypes.YEAR) {
    let bUdTqI = tmp2(1233).t.rli5ey;
  } else {
    bUdTqI = tmp2(1233).t.bUdTqI;
  }
  let obj2 = { children: null };
  obj1[2] = intl2.format(bUdTqI, { intervalCount: 1, name: tierDisplayNameByPlanId });
  items1[2] = callback(giftCodeRecord(4474).Text, obj1);
  obj3 = { style: tmp.input, children: null };
  obj4 = { style: tmp.inputLabel, variant: "heading-md/bold", children: null };
  const intl3 = tmp2(1233).intl;
  obj4[2] = intl3.string(giftCodeRecord(1233).t["qS+yMo"]);
  const items2 = [
    callback(giftCodeRecord(4474).Text, obj4),
    callback(giftCodeRecord(9002).InputButton, {
      text: giftCodeURL,
      icon: giftCodeURL(4426),
      iconPosition: "end",
      onPress: callback,
    }),
  ];
  obj3[1] = items2;
  items1[3] = closure_10(View, obj3);
  const obj6 = { style: tmp.disclaimer, variant: "text-xs/normal", children: null };
  const intl4 = tmp2(1233).intl;
  obj6[2] = intl4.string(giftCodeRecord(1233).t.As9eLl);
  items1[4] = callback(giftCodeRecord(4474).Text, obj6);
  obj2[0] = items1;
  return closure_10(closure_9, obj2);
}
export const PremiumGiftSuccessActions = function PremiumGiftSuccessActions(giftCodeRecord) {
  let onClose;
  let prePurchaseGiftingBadgeProgress;
  let navigation;
  let enabled;
  let giftCodeURL;
  let obj = onClose(navigation[8]);
  const nativeGiftContext = obj.useNativeGiftContext();
  onClose = nativeGiftContext.onClose;
  prePurchaseGiftingBadgeProgress = nativeGiftContext.prePurchaseGiftingBadgeProgress;
  obj1 = onClose(navigation[9]);
  navigation = obj1.useNavigation();
  const GiftingBadgeExperiment = onClose(navigation[10]).GiftingBadgeExperiment;
  enabled = GiftingBadgeExperiment.useConfig({ location: "PremiumGiftSuccessActions" }).enabled;
  giftCodeURL = onClose(navigation[11]).getGiftCodeURL(giftCodeRecord.giftCodeRecord.code);
  const items = [enabled, prePurchaseGiftingBadgeProgress, navigation, onClose];
  const items1 = [giftCodeURL, enabled, prePurchaseGiftingBadgeProgress, navigation];
  const callback = enabled.useCallback(() => {
    if (enabled) {
      if (null != prePurchaseGiftingBadgeProgress) {
        const obj = { currentProgress: null };
        obj[0] = tmp;
        navigation.navigate(onClose(navigation[12]).PremiumGiftScreens.GIFTING_BADGE, obj);
      }
    }
    onClose();
  }, items);
  obj = { children: null };
  const callback1 = enabled.useCallback(() => {
    let obj = onClose(navigation[13]);
    obj = { url: giftCodeURL };
    obj.showShareActionSheet(obj, closure_1_7.PREMIUM_GIFT_SUCCESS_MODAL);
    let tmp4 = enabled;
    if (enabled) {
      tmp4 = null != prePurchaseGiftingBadgeProgress;
    }
    if (tmp4) {
      obj = { currentProgress: null };
      obj[0] = prePurchaseGiftingBadgeProgress;
      navigation.navigate(onClose(navigation[12]).PremiumGiftScreens.GIFTING_BADGE, obj);
    }
  }, items1);
  obj = { variant: "primary", text: null, onPress: null };
  const intl = onClose(navigation[15]).intl;
  obj[1] = intl.string(onClose(navigation[15]).t.RDE0Sc);
  obj[2] = callback1;
  const items2 = [callback(onClose(navigation[14]).Button, obj)];
  obj1 = { variant: "secondary", text: null, onPress: null };
  const intl2 = onClose(navigation[15]).intl;
  obj1[1] = intl2.string(onClose(navigation[15]).t.cpT0Cq);
  obj1[2] = callback;
  items2[1] = callback(onClose(navigation[14]).Button, obj1);
  obj[0] = items2;
  return callback2(closure_9, obj);
};
