// === Module 9801: PremiumGiftSuccessBody ===

// Module 9801 (PremiumGiftSuccessBody)
import PremiumGiftBackgroundAnimation from "PremiumGiftBackgroundAnimation";
import { View } from "_copy";
import addSku from "addSku";
import { SubscriptionIntervalTypes } from "GuildFeatures";
import { AnalyticsSections } from "ME";
import jsxProd from "TwinButtons";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let metroImportAll;
const require = arg1;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = jsxProd);
createCacheKey = { disclaimer: null, title: null, description: null, input: null, inputLabel: null };
createCacheKey = { marginTop: require("Themes").space.PX_4, marginBottom: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: require("Themes").space.PX_24, textAlign: "center" };
let obj1 = { marginTop: require("Themes").space.PX_24, textAlign: "center" };
createCacheKey[2] = { marginTop: require("Themes").space.PX_8, textAlign: "center" };
let obj2 = { marginTop: require("Themes").space.PX_8, textAlign: "center" };
createCacheKey[3] = { marginTop: require("Themes").space.PX_24 };
let obj3 = { marginTop: require("Themes").space.PX_24 };
createCacheKey[4] = { marginBottom: require("Themes").space.PX_4 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj4 = { marginBottom: require("Themes").space.PX_4 };
let result = require("addSku").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftPurchaseSuccess.tsx");

export default function PremiumGiftSuccessBody(giftCodeRecord) {
  let giftStyle;
  let planInterval;
  let premiumType;
  giftCodeRecord = giftCodeRecord.giftCodeRecord;
  let giftCodeURL;
  let tmp = createCacheKey();
  let obj = giftCodeRecord(8813);
  const nativeGiftContext = obj.useNativeGiftContext();
  ({ giftStyle, premiumType, planInterval } = nativeGiftContext);
  let obj1 = giftCodeRecord(4428);
  giftCodeURL = obj1.getGiftCodeURL(giftCodeRecord.code);
  if (null != giftCodeRecord.giftStyle) {
    giftStyle = giftCodeRecord.giftStyle;
  }
  if (null != giftCodeRecord.subscriptionPlanId) {
    let subscriptionPlanId = giftCodeRecord.subscriptionPlanId;
  } else {
    subscriptionPlanId = tmp2(3839).getPlanIdForPremiumType(premiumType, planInterval);
    const tmp2Result = tmp2(3839);
  }
  let obj3 = giftCodeURL(3839);
  const tierDisplayNameByPlanId = obj3.getTierDisplayNameByPlanId(subscriptionPlanId);
  let obj4 = giftCodeURL(3839);
  const items = [giftCodeRecord, giftCodeURL];
  obj = { children: null };
  const callback = React.useCallback(() => {
    const value = outer1_5.get(giftCodeRecord.skuId);
    if (null != value) {
      giftCodeRecord(outer1_2[11]).trackGiftCodeCopy(tmp, value);
      const obj = giftCodeRecord(outer1_2[11]);
    }
    giftCodeRecord(outer1_2[17]).copy(giftCodeURL);
    const obj2 = giftCodeRecord(outer1_2[17]);
    tmp = giftCodeRecord;
    const result = giftCodeRecord(outer1_2[18]).presentCopiedToClipboard();
  }, items);
  obj[0] = callback(giftCodeURL(8787), { giftStyle });
  const items1 = [callback(View, obj), , , , ];
  obj = { style: tmp.title, variant: "heading-lg/bold", children: null };
  const intl = tmp2(1236).intl;
  obj[2] = intl.string(giftCodeRecord(1236).t["/s1xR7"]);
  items1[1] = callback(giftCodeRecord(4189).Text, obj);
  obj1 = { style: tmp.description, variant: "text-md/medium", children: null };
  const intl2 = tmp2(1236).intl;
  if (obj4.getInterval(subscriptionPlanId).intervalType === SubscriptionIntervalTypes.YEAR) {
    let bUdTqI = tmp2(1236).t.rli5ey;
  } else {
    bUdTqI = tmp2(1236).t.bUdTqI;
  }
  let obj2 = { children: null };
  obj1[2] = intl2.format(bUdTqI, { intervalCount: 1, name: tierDisplayNameByPlanId });
  items1[2] = callback(giftCodeRecord(4189).Text, obj1);
  obj3 = { style: tmp.input, children: null };
  obj4 = { style: tmp.inputLabel, variant: "heading-md/bold", children: null };
  const intl3 = tmp2(1236).intl;
  obj4[2] = intl3.string(giftCodeRecord(1236).t["qS+yMo"]);
  const items2 = [callback(giftCodeRecord(4189).Text, obj4), ];
  const obj5 = { text: giftCodeURL, icon: null, iconPosition: "end", onPress: null };
  obj5[1] = giftCodeURL(4142);
  obj5[3] = callback;
  items2[1] = callback(giftCodeRecord(8240).InputButton, obj5);
  obj3[1] = items2;
  items1[3] = closure_10(View, obj3);
  const obj6 = { style: tmp.disclaimer, variant: "text-xs/normal", children: null };
  const intl4 = tmp2(1236).intl;
  obj6[2] = intl4.string(giftCodeRecord(1236).t.As9eLl);
  items1[4] = callback(giftCodeRecord(4189).Text, obj6);
  obj2[0] = items1;
  return closure_10(closure_9, obj2);
};
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
  let obj1 = onClose(navigation[9]);
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
    obj.showShareActionSheet(obj, outer1_7.PREMIUM_GIFT_SUCCESS_MODAL);
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
  const items2 = [callback(onClose(navigation[14]).Button, obj), ];
  obj1 = { variant: "secondary", text: null, onPress: null };
  const intl2 = onClose(navigation[15]).intl;
  obj1[1] = intl2.string(onClose(navigation[15]).t.cpT0Cq);
  obj1[2] = callback;
  items2[1] = callback(onClose(navigation[14]).Button, obj1);
  obj[0] = items2;
  return callback2(closure_9, obj);
};