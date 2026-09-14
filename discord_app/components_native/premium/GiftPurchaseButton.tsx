// discord_app/components_native/premium/GiftPurchaseButton.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../_runtime/metro/00019__.js";
import SubscriptionStore from "../../stores/billing/SubscriptionStore.tsx";
import IAPStore from "../../stores/native/IAPStore.android.tsx";

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
  const buttonTextColorStyles = planId(recipientUserId[6]).useButtonTextColorStyles(str);
  const merged = Object.assign(planId(recipientUserId[7]).TextStyleSheet["text-sm/semibold"]);
  const merged1 = Object.assign(buttonTextColorStyles);
  const obj = {};
  const obj2 = planId(recipientUserId[6]);
  const items = [SubscriptionStore];
  const stateFromStores = planId(recipientUserId[8]).useStateFromStores(items, () =>
    premiumSubscription.getPremiumSubscription(),
  );
  const obj4 = planId(recipientUserId[8]);
  const productIdForGift = planId(recipientUserId[9]).getProductIdForGift(planId);
  const obj5 = planId(recipientUserId[9]);
  const canPurchaseIAP = planId(recipientUserId[10]).useCanPurchaseIAP(productIdForGift);
  const obj6 = planId(recipientUserId[10]);
  const items1 = [IAPStore];
  const stateFromStores1 = planId(recipientUserId[8]).useStateFromStores(items1, () =>
    IAPStore.isPurchasingProduct(productIdForGift),
  );
  let obj7 = planId(recipientUserId[8]);
  const items2 = [IAPStore];
  let tmp11 = null != stateFromStores;
  const stateFromStores2 = planId(recipientUserId[8]).useStateFromStores(items2, () =>
    IAPStore.getProduct(productIdForGift),
  );
  if (tmp11) {
    tmp11 = stateFromStores.planId === planId;
  }
  analyticsLocations = analyticsLocation(tmp2[11])().analyticsLocations;
  const obj8 = planId(recipientUserId[8]);
  createOrReuseGiftOrder = planId(recipientUserId[12]).useCreateOrReuseGiftOrder("GiftPurchaseButton");
  const items3 = [
    planId,
    recipientUserId,
    analyticsLocation,
    analyticsLocations,
    createOrReuseGiftOrder,
    productIdForGift,
  ];
  const obj3 = { style: style.style, children: null };
  const callback = analyticsLocations.useCallback(
    productIdForGift(function* () {
      yield createOrReuseGiftOrder({ planId, recipientUserId, productId: productIdForGift });
      closure_128_0 = value;
      const premiumTypeFromPlanId = planId(4294).getPremiumTypeFromPlanId(closure_129_0);
      const premiumType = premiumTypeFromPlanId.premiumType;
      const planInterval = premiumTypeFromPlanId.planInterval;
      planId(10790).openGiftModal({
        recipientUserId: closure_129_2,
        premiumType,
        planInterval,
        analyticsLocation: closure_129_1,
        analyticsLocations: closure_129_4,
        order: closure_128_0,
      });
      yield "HermesInternal";
      const obj7 = { title: null, body: null };
      const intl = planId(1114).intl;
      obj7.title = intl.string(planId(1114).t.R0RpRX);
      const intl2 = planId(1114).intl;
      obj7.body = intl2.string(planId(1114).t.CKsXk3);
      tmp3(4981).show(obj7);
    }),
    items3,
  );
  const tmpResult = planId(recipientUserId[12]);
  obj3.children = jsx(planId(recipientUserId[17]).BaseTextButton, {
    textElement: analyticsLocation(recipientUserId[18])({
      style: obj,
      basePlanId: planId,
      isCurrentPlan: tmp11,
      isGift: true,
      product: stateFromStores2,
    }),
    variant: str,
    size: "sm",
    onPress: callback,
    loading: stateFromStores1,
    disabled: !canPurchaseIAP,
    grow: true,
  });
  return <createOrReuseGiftOrder style={style.style}>{null}</createOrReuseGiftOrder>;
}
