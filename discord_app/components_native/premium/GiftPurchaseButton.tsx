// discord_app/components_native/premium/GiftPurchaseButton.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../_runtime/metro/00019__.js";
import SubscriptionStore from "../../stores/billing/SubscriptionStore.tsx";
import IAPStore from "../../stores/native/IAPStore.android.tsx";

const require = fn;
const View = fn(17).View;
const PRICE_PLACEHOLDER = fn(1390).PRICE_PLACEHOLDER;
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
  const buttonTextColorStyles = planId(recipientUserId[7]).useButtonTextColorStyles(str);
  const merged = Object.assign(planId(recipientUserId[8]).TextStyleSheet["body-sm/semibold"]);
  const merged1 = Object.assign(buttonTextColorStyles);
  const obj = {};
  const obj2 = planId(recipientUserId[7]);
  items = [SubscriptionStore];
  const stateFromStores = planId(recipientUserId[9]).useStateFromStores(items, () =>
    premiumSubscription.getPremiumSubscription(),
  );
  const obj4 = planId(recipientUserId[9]);
  const productIdForGift = planId(recipientUserId[10]).getProductIdForGift(planId);
  const obj5 = planId(recipientUserId[10]);
  const canPurchaseIAP = planId(recipientUserId[11]).useCanPurchaseIAP(productIdForGift);
  const obj6 = planId(recipientUserId[11]);
  const items1 = [IAPStore];
  const stateFromStores1 = planId(recipientUserId[9]).useStateFromStores(items1, () =>
    IAPStore.isPurchasingProduct(productIdForGift),
  );
  let obj7 = planId(recipientUserId[9]);
  const items2 = [IAPStore];
  const stateFromStores2 = planId(recipientUserId[9]).useStateFromStores(items2, () =>
    IAPStore.getProduct(productIdForGift),
  );
  const tmp12 = analyticsLocation(recipientUserId[12])(planId, { isGift: true });
  const analyticsLocations = tmp11(tmp2[13])().analyticsLocations;
  const obj8 = planId(recipientUserId[9]);
  const tmp13 = null != stateFromStores && stateFromStores.planId === planId;
  const createOrReuseGiftOrder = planId(recipientUserId[14]).useCreateOrReuseGiftOrder("GiftPurchaseButton");
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
      const premiumTypeFromPlanId = planId(2174).getPremiumTypeFromPlanId(closure_129_0);
      const premiumType = premiumTypeFromPlanId.premiumType;
      const planInterval = premiumTypeFromPlanId.planInterval;
      planId(11661).openGiftModal({
        recipientUserId: closure_129_2,
        premiumType,
        planInterval,
        analyticsLocation: closure_129_1,
        analyticsLocations: closure_129_4,
        order: closure_128_0,
      });
      yield "HermesInternal";
      const obj7 = { title: null, body: null };
      const intl = planId(1113).intl;
      obj7.title = intl.string(planId(1113).t.R0RpRX);
      const intl2 = planId(1113).intl;
      obj7.body = intl2.string(planId(1113).t.CKsXk3);
      tmp3(6269).show(obj7);
    }),
    items3,
  );
  const obj9 = {
    style: obj,
    basePlanId: planId,
    isCurrentPlan: tmp13,
    isGift: true,
    product: stateFromStores2,
    priceString: null,
  };
  let priceString;
  const tmpResult = planId(recipientUserId[14]);
  if (tmp12 != null) {
    priceString = tmp12.priceString;
  }
  if (priceString == null) {
    priceString = PRICE_PLACEHOLDER;
  }
  const tmp11Result = analyticsLocation(recipientUserId[20]);
  obj9.priceString = priceString;
  obj3.children = jsx(planId(recipientUserId[19]).BaseTextButton, {
    textElement: analyticsLocation(recipientUserId[20])(obj9),
    variant: str,
    size: "sm",
    onPress: callback,
    loading: stateFromStores1,
    disabled: !canPurchaseIAP,
    grow: true,
  });
  return <tmp17 style={style.style}>{null}</tmp17>;
}
