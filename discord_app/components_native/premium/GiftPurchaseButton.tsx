// discord_app/components_native/premium/GiftPurchaseButton.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../_runtime/00019_noop.js";
import { View } from "../../../_runtime/00017_get_ActivityIndicator.js";
import reset from "../../stores/billing/SubscriptionStore.tsx";
import updateProduct from "../../stores/native/IAPStore.android.tsx";
import { jsx } from "../../../_runtime/react/00021_jsxProd.js";

const require = fn;
const result = require("obj132").fileFinishedImporting("components_native/premium/GiftPurchaseButton.tsx");

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
  obj1 = planId(recipientUserId[6]);
  const buttonTextColorStyles = obj1.useButtonTextColorStyles(str);
  let obj = {};
  const merged = Object.assign(planId(recipientUserId[7]).TextStyleSheet["text-sm/semibold"]);
  const merged1 = Object.assign(buttonTextColorStyles);
  const items = [closure_6];
  const stateFromStores = planId(recipientUserId[8]).useStateFromStores(items, () => premiumSubscription.getPremiumSubscription());
  let obj4 = planId(recipientUserId[8]);
  const productIdForGift = planId(recipientUserId[9]).getProductIdForGift(planId);
  let obj5 = planId(recipientUserId[9]);
  const canPurchaseIAP = planId(recipientUserId[10]).useCanPurchaseIAP(productIdForGift);
  const obj6 = planId(recipientUserId[10]);
  const items1 = [closure_7];
  const stateFromStores1 = planId(recipientUserId[8]).useStateFromStores(items1, () => closure_1_7.isPurchasingProduct(productIdForGift));
  const obj7 = planId(recipientUserId[8]);
  const items2 = [closure_7];
  let tmp11 = null != stateFromStores;
  const stateFromStores2 = planId(recipientUserId[8]).useStateFromStores(items2, () => closure_1_7.getProduct(productIdForGift));
  if (tmp11) {
    tmp11 = stateFromStores.planId === planId;
  }
  analyticsLocations = analyticsLocation(tmp2[11])().analyticsLocations;
  const obj8 = planId(recipientUserId[8]);
  createOrReuseGiftOrder = planId(recipientUserId[12]).useCreateOrReuseGiftOrder("GiftPurchaseButton");
  const items3 = [planId, recipientUserId, analyticsLocation, analyticsLocations, createOrReuseGiftOrder, productIdForGift];
  obj = { style: style.style, children: null };
  const callback = analyticsLocations.useCallback(productIdForGift(function*() {
    if (c4 === 2) {
      c4 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c4 = 2;
        if (0 === planInterval) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let premiumTypeFromPlanId = tmp3;
            closure_0 = tmp7;
            closure_0 = undefined;
            premiumTypeFromPlanId = undefined;
            let premiumType;
            planInterval = undefined;
            premiumType = 1;
            obj1 = { planId: null, recipientUserId: null, productId: null };
            obj1[0] = planId;
            obj1[1] = dependencyMap;
            obj1[2] = c3;
            planInterval = 2;
            c4 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = createOrReuseGiftOrder(obj1);
            return obj2;
          }
        } else if (1 === tmp7) {
          premiumType = 0;
          obj1 = analyticsLocation(4656);
          const obj3 = { title: null, body: null };
          const intl = planId(1236).intl;
          obj3[0] = intl.string(planId(1236).t.R0RpRX);
          const intl2 = planId(1236).intl;
          obj3[1] = intl2.string(planId(1236).t.CKsXk3);
          obj1.show(obj3);
          c4 = 3;
          const obj4 = { value: null, done: true };
          obj4[0] = undefined;
          return obj4;
        } else if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          premiumType = 0;
          c4 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          closure_0 = arg1;
          premiumType = 0;
          premiumTypeFromPlanId = planId(4039).getPremiumTypeFromPlanId(closure_0);
          premiumType = premiumTypeFromPlanId.premiumType;
          planInterval = premiumTypeFromPlanId.planInterval;
          const obj9 = planId(4039);
          const obj5 = { recipientUserId: null, premiumType: null, planInterval: null, analyticsLocation: null, analyticsLocations: null, order: null };
          obj5[0] = premiumType;
          obj5[1] = premiumType;
          obj5[2] = planInterval;
          obj5[3] = premiumTypeFromPlanId;
          obj5[4] = c4;
          obj5[5] = closure_0;
          planId(10295).openGiftModal(obj5);
          c4 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp24) {
        if (tmp4 === premiumType) {
          c4 = tmp2;
          throw tmp24;
        } else {
          planInterval = tmp;
        }
      }
    }
  }), items3);
  obj1 = { textElement: analyticsLocation(tmp2[18])({ style: obj, basePlanId: planId, isCurrentPlan: tmp11, isGift: true, product: stateFromStores2 }), variant: str, size: "sm", onPress: callback, loading: stateFromStores1, disabled: !canPurchaseIAP, grow: true };
  obj[1] = jsx(planId(recipientUserId[17]).BaseTextButton, { textElement: analyticsLocation(tmp2[18])({ style: obj, basePlanId: planId, isCurrentPlan: tmp11, isGift: true, product: stateFromStores2 }), variant: str, size: "sm", onPress: callback, loading: stateFromStores1, disabled: !canPurchaseIAP, grow: true });
  return <createOrReuseGiftOrder style={style.style}>{null}</createOrReuseGiftOrder>;
};