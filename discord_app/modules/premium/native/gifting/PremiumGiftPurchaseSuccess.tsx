// discord_app/modules/premium/native/gifting/PremiumGiftPurchaseSuccess.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import GiftCodeUtils from "../../../../utils/GiftCodeUtils.tsx";
import ClipboardUtils from "../../../../utils/ClipboardUtils.native.tsx";
import showShareActionSheet from "../../../action_sheet/native/showShareActionSheet.tsx";
import PremiumGiftModal from "PremiumGiftModal.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import SKUStore from "../../../../stores/game_store/SKUStore.tsx";

require = fn;
const View = fn(17).View;
const SubscriptionIntervalTypes = fn(1373).SubscriptionIntervalTypes;
const AnalyticsSections = fn(1074).AnalyticsSections;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { disclaimer: null, title: null, description: null, input: null, inputLabel: null };
createStyles = { marginTop: nativeDefault.space.PX_4, marginBottom: nativeDefault.space.PX_16 };
createStyles.disclaimer = createStyles;
createStyles.title = { marginTop: nativeDefault.space.PX_24, textAlign: "center" };
let obj1 = { marginTop: nativeDefault.space.PX_24, textAlign: "center" };
createStyles.description = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
let obj2 = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
createStyles.input = { marginTop: nativeDefault.space.PX_24 };
let obj3 = { marginTop: nativeDefault.space.PX_24 };
createStyles.inputLabel = { marginBottom: nativeDefault.space.PX_4 };
let closure_11 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftPurchaseSuccess.tsx");

export default function PremiumGiftSuccessBody(giftCodeRecord) {
  giftCodeRecord = giftCodeRecord.giftCodeRecord;
  const tmp = closure_11();
  let obj = giftCodeRecord(10699);
  const nativeGiftContext = obj.useNativeGiftContext();
  ({ giftStyle, premiumType, planInterval } = nativeGiftContext);
  let obj1 = giftCodeRecord(4799);
  const giftCodeURL = obj1.getGiftCodeURL(giftCodeRecord.code);
  if (null != giftCodeRecord.giftStyle) {
    giftStyle = giftCodeRecord.giftStyle;
  }
  if (null != giftCodeRecord.subscriptionPlanId) {
    let subscriptionPlanId = giftCodeRecord.subscriptionPlanId;
  } else {
    subscriptionPlanId = tmp2(4218).getPlanIdForPremiumType(premiumType, planInterval);
    const tmp2Result = tmp2(4218);
  }
  let obj3 = giftCodeURL(4218);
  const tierDisplayNameByPlanId = obj3.getTierDisplayNameByPlanId(subscriptionPlanId);
  let obj4 = giftCodeURL(4218);
  const items = [giftCodeRecord, giftCodeURL];
  obj = { children: null };
  const callback = noop.useCallback(() => {
    value = SKUStore.get(giftCodeRecord.skuId);
    if (null != value) {
      GiftCodeUtils.trackGiftCodeCopy(giftCodeRecord, value);
    }
    ClipboardUtils.copy(giftCodeURL);
    const result = ToastUtils.presentCopiedToClipboard();
  }, items);
  obj.children = closure_8(giftCodeURL(10830), { giftStyle });
  const items1 = [closure_8(View, obj), , , ,];
  obj = { style: tmp.title, variant: "heading-lg/bold", children: null };
  const intl = tmp2(1114).intl;
  obj.children = intl.string(giftCodeRecord(1114).t["/s1xR7"]);
  items1[1] = closure_8(giftCodeRecord(4556).Text, obj);
  obj1 = { style: tmp.description, variant: "text-md/medium", children: null };
  const intl2 = tmp2(1114).intl;
  if (obj4.getInterval(subscriptionPlanId).intervalType === SubscriptionIntervalTypes.YEAR) {
    let bUdTqI = tmp2(1114).t.rli5ey;
  } else {
    bUdTqI = tmp2(1114).t.bUdTqI;
  }
  let obj2 = { children: null };
  obj1.children = intl2.format(bUdTqI, { intervalCount: 1, name: tierDisplayNameByPlanId });
  items1[2] = closure_8(giftCodeRecord(4556).Text, obj1);
  obj3 = { style: tmp.input, children: null };
  obj4 = { style: tmp.inputLabel, variant: "heading-md/bold", children: null };
  const intl3 = tmp2(1114).intl;
  obj4.children = intl3.string(giftCodeRecord(1114).t["qS+yMo"]);
  const items2 = [
    closure_8(giftCodeRecord(4556).Text, obj4),
    closure_8(giftCodeRecord(8902).InputButton, {
      text: giftCodeURL,
      icon: giftCodeURL(4508),
      iconPosition: "end",
      onPress: callback,
    }),
  ];
  obj3.children = items2;
  items1[3] = closure_10(View, obj3);
  const obj6 = { style: tmp.disclaimer, variant: "text-xs/normal", children: null };
  const intl4 = tmp2(1114).intl;
  obj6.children = intl4.string(giftCodeRecord(1114).t.As9eLl);
  items1[4] = closure_8(giftCodeRecord(4556).Text, obj6);
  obj2.children = items1;
  return closure_10(closure_9, obj2);
}
export const PremiumGiftSuccessActions = function PremiumGiftSuccessActions(giftCodeRecord) {
  let onClose;
  let navigation;
  let obj = onClose(navigation[8]);
  const nativeGiftContext = obj.useNativeGiftContext();
  onClose = nativeGiftContext.onClose;
  const prePurchaseGiftingBadgeProgress = nativeGiftContext.prePurchaseGiftingBadgeProgress;
  let obj1 = onClose(navigation[9]);
  navigation = obj1.useNavigation();
  const GiftingBadgeExperiment = onClose(navigation[10]).GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig({ location: "PremiumGiftSuccessActions" }).enabled;
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
  obj = { children: null };
  const callback1 = enabled.useCallback(() => {
    let obj = { url: giftCodeURL };
    obj.showShareActionSheet(obj, AnalyticsSections.PREMIUM_GIFT_SUCCESS_MODAL);
    let tmp4 = enabled;
    if (enabled) {
      tmp4 = null != prePurchaseGiftingBadgeProgress;
    }
    if (tmp4) {
      obj = { currentProgress: prePurchaseGiftingBadgeProgress };
      navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj);
    }
  }, items1);
  obj = { variant: "primary", text: null, onPress: null };
  const intl = onClose(navigation[15]).intl;
  obj.text = intl.string(onClose(navigation[15]).t.RDE0Sc);
  obj.onPress = callback1;
  const items2 = [closure_8(onClose(navigation[14]).Button, obj)];
  obj1 = { variant: "secondary", text: null, onPress: null };
  const intl2 = onClose(navigation[15]).intl;
  obj1.text = intl2.string(onClose(navigation[15]).t.cpT0Cq);
  obj1.onPress = callback;
  items2[1] = closure_8(onClose(navigation[14]).Button, obj1);
  obj.children = items2;
  return closure_10(closure_9, obj);
};
