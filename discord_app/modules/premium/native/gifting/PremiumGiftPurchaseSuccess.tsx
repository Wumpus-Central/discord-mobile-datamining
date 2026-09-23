// === Module 11424: PremiumGiftPurchaseSuccess ===

// Module 11424 (PremiumGiftPurchaseSuccess)
import nativeDefault from "native" /* 576 */;
import ToastUtils from "ToastUtils" /* 4520 */;
import GiftCodeUtils from "GiftCodeUtils" /* 5079 */;
import ClipboardUtils from "ClipboardUtils" /* 7520 */;
import showShareActionSheet from "showShareActionSheet" /* 8707 */;
import PremiumGiftModal from "PremiumGiftModal" /* 11004 */;
import noop from "module_19" /* 19 */;
import SKUStore from "SKUStore" /* 5813 */;

require = fn;
const View = fn(17).View;
const SubscriptionIntervalTypes = fn(1374).SubscriptionIntervalTypes;
const AnalyticsSections = fn(1074).AnalyticsSections;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4827);
let obj2 = { disclaimer: { marginTop: nativeDefault.space.PX_4, marginBottom: nativeDefault.space.PX_16 }, title: null, description: null, input: null, inputLabel: null };
let obj3 = { marginTop: nativeDefault.space.PX_4, marginBottom: nativeDefault.space.PX_16 };
obj2.title = { marginTop: nativeDefault.space.PX_24, textAlign: "center" };
let obj4 = { marginTop: nativeDefault.space.PX_24, textAlign: "center" };
obj2.description = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
let obj5 = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
obj2.input = { marginTop: nativeDefault.space.PX_24 };
let obj6 = { marginTop: nativeDefault.space.PX_24 };
obj2.inputLabel = { marginBottom: nativeDefault.space.PX_4 };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftPurchaseSuccess.tsx");

export default function PremiumGiftSuccessBody(giftCodeRecord) {
  giftCodeRecord = giftCodeRecord.giftCodeRecord;
  const tmp = closure_11();
  const nativeGiftContext = giftCodeRecord(11041).useNativeGiftContext();
  ({ giftStyle, premiumType, planInterval } = nativeGiftContext);
  let obj = giftCodeRecord(11041);
  const giftCodeURL = giftCodeRecord(5079).getGiftCodeURL(giftCodeRecord.code);
  if (null != giftCodeRecord.giftStyle) {
    giftStyle = giftCodeRecord.giftStyle;
  }
  if (null != giftCodeRecord.subscriptionPlanId) {
    let subscriptionPlanId = giftCodeRecord.subscriptionPlanId;
  } else {
    subscriptionPlanId = tmp2(4481).getPlanIdForPremiumType(premiumType, planInterval);
    const tmp2Result = tmp2(4481);
  }
  let obj2 = giftCodeRecord(5079);
  const tmp6 = giftCodeURL;
  const tierDisplayNameByPlanId = giftCodeURL(4481).getTierDisplayNameByPlanId(subscriptionPlanId);
  const obj4 = giftCodeURL(4481);
  const items = [giftCodeRecord, giftCodeURL];
  let obj3 = { children: null };
  const callback = noop.useCallback(() => {
    value = SKUStore.get(giftCodeRecord.skuId);
    if (null != value) {
      GiftCodeUtils.trackGiftCodeCopy(giftCodeRecord, value);
    }
    ClipboardUtils.copy(giftCodeURL);
    const result = ToastUtils.presentCopiedToClipboard();
  }, items);
  obj3.children = closure_8(giftCodeURL(11174), { giftStyle });
  const items1 = [closure_8(View, obj3), , , , ];
  const obj6 = { style: tmp.title, variant: "heading-lg/bold", children: null };
  const intl = tmp2(1115).intl;
  obj6.children = intl.string(giftCodeRecord(1115).t["/s1xR7"]);
  items1[1] = closure_8(giftCodeRecord(4823).Text, obj6);
  const obj7 = { style: tmp.description, variant: "text-md/medium", children: null };
  const intl2 = tmp2(1115).intl;
  if (obj5.getInterval(subscriptionPlanId).intervalType === SubscriptionIntervalTypes.YEAR) {
    let bUdTqI = tmp2(1115).t.rli5ey;
  } else {
    bUdTqI = tmp2(1115).t.bUdTqI;
  }
  const obj8 = { children: null };
  obj7.children = intl2.format(bUdTqI, { intervalCount: 1, name: tierDisplayNameByPlanId });
  items1[2] = closure_8(giftCodeRecord(4823).Text, obj7);
  const obj9 = { style: tmp.input, children: null };
  const obj10 = { style: tmp.inputLabel, variant: "heading-md/bold", children: null };
  const intl3 = tmp2(1115).intl;
  obj10.children = intl3.string(giftCodeRecord(1115).t["qS+yMo"]);
  const items2 = [closure_8(giftCodeRecord(4823).Text, obj10), ];
  obj5 = giftCodeURL(4481);
  items2[1] = closure_8(giftCodeRecord(9260).InputButton, { text: giftCodeURL, icon: tmp6(4774), iconPosition: "end", onPress: callback });
  obj9.children = items2;
  items1[3] = closure_10(View, obj9);
  const obj12 = { style: tmp.disclaimer, variant: "text-xs/normal", children: null };
  const intl4 = tmp2(1115).intl;
  obj12.children = intl4.string(giftCodeRecord(1115).t.As9eLl);
  items1[4] = closure_8(giftCodeRecord(4823).Text, obj12);
  obj8.children = items1;
  return closure_10(closure_9, obj8);
};
export const PremiumGiftSuccessActions = function PremiumGiftSuccessActions(giftCodeRecord) {
  let onClose;
  let navigation;
  const nativeGiftContext = onClose(navigation[8]).useNativeGiftContext();
  onClose = nativeGiftContext.onClose;
  const prePurchaseGiftingBadgeProgress = nativeGiftContext.prePurchaseGiftingBadgeProgress;
  let obj = onClose(navigation[8]);
  navigation = onClose(navigation[9]).useNavigation();
  const GiftingBadgeExperiment = onClose(navigation[10]).GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig({ location: "PremiumGiftSuccessActions" }).enabled;
  let obj2 = onClose(navigation[9]);
  const giftCodeURL = onClose(navigation[11]).getGiftCodeURL(giftCodeRecord.giftCodeRecord.code);
  const items = [enabled, prePurchaseGiftingBadgeProgress, navigation, onClose];
  const items1 = [giftCodeURL, enabled, prePurchaseGiftingBadgeProgress, navigation];
  const callback = enabled.useCallback(() => {
    if (enabled) {
      if (null != prePurchaseGiftingBadgeProgress) {
        const obj = { currentProgress: tmp };
        navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj);
      }
    }
    onClose();
  }, items);
  const obj4 = { children: null };
  const callback1 = enabled.useCallback(() => {
    showShareActionSheet.showShareActionSheet({ url: giftCodeURL }, AnalyticsSections.PREMIUM_GIFT_SUCCESS_MODAL);
    let tmp4 = enabled;
    if (enabled) {
      tmp4 = null != prePurchaseGiftingBadgeProgress;
    }
    if (tmp4) {
      const obj3 = { currentProgress: prePurchaseGiftingBadgeProgress };
      navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj3);
    }
    const obj2 = { url: giftCodeURL };
  }, items1);
  const obj5 = { variant: "primary", text: null, onPress: null };
  const intl = onClose(navigation[15]).intl;
  obj5.text = intl.string(onClose(navigation[15]).t.RDE0Sc);
  obj5.onPress = callback1;
  const items2 = [closure_8(onClose(navigation[14]).Button, obj5), ];
  const obj6 = { variant: "secondary", text: null, onPress: null };
  const intl2 = onClose(navigation[15]).intl;
  obj6.text = intl2.string(onClose(navigation[15]).t.cpT0Cq);
  obj6.onPress = callback;
  items2[1] = closure_8(onClose(navigation[14]).Button, obj6);
  obj4.children = items2;
  return closure_10(closure_9, obj4);
};