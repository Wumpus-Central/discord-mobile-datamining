// === Module 13567: GiftPurchaseButton ===

// Module 13567 (GiftPurchaseButton)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import SubscriptionStore from "SubscriptionStore" /* 4224 */;
import IAPStore from "IAPStore" /* 7237 */;

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/GiftPurchaseButton.tsx");

export default function GiftPurchaseButton(style) {
  let str = style.variant;
  if (str === undefined) {
    str = "primary";
  }
  const planId = style.planId;
  let analyticsLocation = style.analyticsLocation;
  if (analyticsLocation === undefined) {
    analyticsLocation = {};
  }
  const recipientUserId = style.recipientUserId;
  let analyticsLocations;
  let createOrReuseGiftOrder;
  let obj1 = planId(recipientUserId[6]);
  const buttonTextColorStyles = obj1.useButtonTextColorStyles(str);
  let obj = {};
  const merged = Object.assign(planId(recipientUserId[7]).TextStyleSheet["text-sm/semibold"]);
  const merged1 = Object.assign(buttonTextColorStyles);
  const items = [SubscriptionStore];
  const stateFromStores = planId(recipientUserId[8]).useStateFromStores(items, () => premiumSubscription.getPremiumSubscription());
  const obj4 = planId(recipientUserId[8]);
  const productIdForGift = planId(recipientUserId[9]).getProductIdForGift(planId);
  const obj5 = planId(recipientUserId[9]);
  const canPurchaseIAP = planId(recipientUserId[10]).useCanPurchaseIAP(productIdForGift);
  const obj6 = planId(recipientUserId[10]);
  const items1 = [IAPStore];
  const stateFromStores1 = planId(recipientUserId[8]).useStateFromStores(items1, () => IAPStore.isPurchasingProduct(productIdForGift));
  const obj7 = planId(recipientUserId[8]);
  const items2 = [IAPStore];
  let tmp11 = null != stateFromStores;
  const stateFromStores2 = planId(recipientUserId[8]).useStateFromStores(items2, () => IAPStore.getProduct(productIdForGift));
  if (tmp11) {
    tmp11 = stateFromStores.planId === planId;
  }
  analyticsLocations = analyticsLocation(tmp2[11])().analyticsLocations;
  const obj8 = planId(recipientUserId[8]);
  createOrReuseGiftOrder = planId(recipientUserId[12]).useCreateOrReuseGiftOrder("GiftPurchaseButton");
  const items3 = [planId, recipientUserId, analyticsLocation, analyticsLocations, createOrReuseGiftOrder, productIdForGift];
  obj = { style: style.style, children: null };
  const callback = analyticsLocations.useCallback(productIdForGift(function*() {
    let obj1 = { planId, recipientUserId, productId: productIdForGift };
    yield createOrReuseGiftOrder(obj1);
    closure_128_0 = value;
    const premiumTypeFromPlanId = planId(4218).getPremiumTypeFromPlanId(closure_129_0);
    const premiumType = premiumTypeFromPlanId.premiumType;
    const planInterval = premiumTypeFromPlanId.planInterval;
    planId(10661).openGiftModal({ recipientUserId: closure_129_2, premiumType, planInterval, analyticsLocation: closure_129_1, analyticsLocations: closure_129_4, order: closure_128_0 });
    yield "HermesInternal";
    obj1 = tmp3(4905);
    const obj3 = { title: null, body: null };
    const intl = planId(1114).intl;
    obj3.title = intl.string(planId(1114).t.R0RpRX);
    const intl2 = planId(1114).intl;
    obj3.body = intl2.string(planId(1114).t.CKsXk3);
    obj1.show(obj3);
  }), items3);
  obj1 = { textElement: analyticsLocation(tmp2[18])({ style: obj, basePlanId: planId, isCurrentPlan: tmp11, isGift: true, product: stateFromStores2 }), variant: str, size: "sm", onPress: callback, loading: stateFromStores1, disabled: !canPurchaseIAP, grow: true };
  obj.children = jsx(planId(recipientUserId[17]).BaseTextButton, { textElement: analyticsLocation(tmp2[18])({ style: obj, basePlanId: planId, isCurrentPlan: tmp11, isGift: true, product: stateFromStores2 }), variant: str, size: "sm", onPress: callback, loading: stateFromStores1, disabled: !canPurchaseIAP, grow: true });
  return <createOrReuseGiftOrder style={style.style}>{null}</createOrReuseGiftOrder>;
};