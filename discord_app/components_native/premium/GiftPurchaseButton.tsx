// === Module 13373: GiftPurchaseButton ===

// Module 13373 (GiftPurchaseButton)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import SubscriptionStore from "SubscriptionStore" /* 4534 */;
import IAPStore from "IAPStore" /* 6739 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/GiftPurchaseButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(30);
  ({ style, variant, planId } = arg0);
  _require = planId;
  ({ analyticsLocation, recipientUserId } = arg0);
  let str = "primary";
  if (undefined !== variant) {
    str = variant;
  }
  if (cResult[0] !== analyticsLocation) {
    let obj2 = analyticsLocation;
    if (undefined === analyticsLocation) {
      obj2 = {};
    }
    cResult[0] = analyticsLocation;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  dependencyMap = tmp4;
  const obj = require("c");
  const buttonTextColorStyles = require("ButtonHooks").useButtonTextColorStyles(str);
  const merged = Object.assign(tmp(4886).TextStyleSheet["text-sm/semibold"]);
  const merged1 = Object.assign(buttonTextColorStyles);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SubscriptionStore];
    const fn = function b() {
      return premiumSubscription.getPremiumSubscription();
    };
    cResult[2] = items;
    cResult[3] = fn;
    let tmp9 = fn;
    let tmp8 = items;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = require("ButtonHooks");
  const stateFromStores = require("initialize").useStateFromStores(tmp8, tmp9);
  if (cResult[4] !== planId) {
    const productIdForGift = tmp(6742).getProductIdForGift(planId);
    cResult[4] = planId;
    cResult[5] = productIdForGift;
    let tmp12 = productIdForGift;
    const tmpResult8 = tmp(6742);
  } else {
    tmp12 = cResult[5];
  }
  asyncGeneratorStep = tmp12;
  const tmpResult7 = require("initialize");
  const canPurchaseIAP = require("IAPUtils").useCanPurchaseIAP(tmp12);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [IAPStore];
    cResult[6] = items1;
    let tmp15 = items1;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] !== tmp12) {
    class B {
      constructor() {
        return closure_7.isPurchasingProduct(closure_3);
      }
    }
    cResult[7] = tmp12;
    cResult[8] = B;
  } else {
    class B {
      constructor() {
        return closure_7.isPurchasingProduct(closure_3);
      }
    }
  }
  const tmpResult9 = require("IAPUtils");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp15, B);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
      constructor() {
        return closure_7.isPurchasingProduct(closure_3);
      }
    }
    const items2 = [IAPStore];
    cResult[9] = items2;
    const tmp19 = items2;
  } else {
    class B {
      constructor() {
        return closure_7.isPurchasingProduct(closure_3);
      }
    }
  }
  if (cResult[10] !== tmp12) {
    class B {
      constructor() {
        return closure_7.isPurchasingProduct(closure_3);
      }
    }
    cResult[10] = tmp12;
    cResult[11] = tmp21;
  } else {
    class B {
      constructor() {
        return closure_7.isPurchasingProduct(closure_3);
      }
    }
  }
  const tmpResult10 = require("initialize");
  const stateFromStores2 = require("initialize").useStateFromStores(tmp19, tmp21);
  if (tmp23) {
    class B {
      constructor() {
        return closure_7.isPurchasingProduct(closure_3);
      }
    }
  }
  const analyticsLocations = recipientUserId(6657)().analyticsLocations;
  tmp23 = null != stateFromStores;
  const tmpResult11 = require("initialize");
  const createOrReuseGiftOrder = require("createOrReuseGiftOrder").useCreateOrReuseGiftOrder("GiftPurchaseButton");
  if (cResult[12] === tmp4) {
    class B {
      constructor() {
        return closure_7.isPurchasingProduct(closure_3);
      }
    }
  }
  _require = asyncGeneratorStep(async () => {
    recipientUserId = tmp3;
    await createOrReuseGiftOrder({ planId, recipientUserId, productId });
    closure_128_0 = value;
    let analyticsLocation = 0;
    const premiumTypeFromPlanId = planId(analyticsLocation[17]).getPremiumTypeFromPlanId(planId);
    const premiumType = premiumTypeFromPlanId.premiumType;
    const planInterval = premiumTypeFromPlanId.planInterval;
    planId(analyticsLocation[17]);
    planId(analyticsLocation[18]).openGiftModal({ recipientUserId, premiumType, planInterval, analyticsLocation, analyticsLocations, order: closure_128_0 });
    await "IconComponent";
    analyticsLocation = 0;
    const obj7 = { title: null, body: null };
    const intl = planId(analyticsLocation[16]).intl;
    obj7.title = intl.string(planId(analyticsLocation[16]).t.R0RpRX);
    const intl2 = planId(analyticsLocation[16]).intl;
    obj7.body = intl2.string(planId(analyticsLocation[16]).t.CKsXk3);
    recipientUserId(analyticsLocation[15]).show(obj7);
  });
  const fn2 = function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  cResult[12] = tmp4;
  cResult[13] = analyticsLocations;
  cResult[14] = createOrReuseGiftOrder;
  cResult[15] = planId;
  cResult[16] = tmp12;
  cResult[17] = recipientUserId;
  cResult[18] = fn2;
  const tmpResult12 = require("createOrReuseGiftOrder");
}) : ((style) => {
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
  const buttonTextColorStyles = planId(recipientUserId[8]).useButtonTextColorStyles(str);
  const merged = Object.assign(planId(recipientUserId[9]).TextStyleSheet["text-sm/semibold"]);
  const merged1 = Object.assign(buttonTextColorStyles);
  const obj = {};
  const obj2 = planId(recipientUserId[8]);
  const items = [SubscriptionStore];
  const stateFromStores = planId(recipientUserId[10]).useStateFromStores(items, () => premiumSubscription.getPremiumSubscription());
  const obj4 = planId(recipientUserId[10]);
  const productIdForGift = planId(recipientUserId[11]).getProductIdForGift(planId);
  const obj5 = planId(recipientUserId[11]);
  const canPurchaseIAP = planId(recipientUserId[12]).useCanPurchaseIAP(productIdForGift);
  const obj6 = planId(recipientUserId[12]);
  const items1 = [IAPStore];
  const stateFromStores1 = planId(recipientUserId[10]).useStateFromStores(items1, () => IAPStore.isPurchasingProduct(productIdForGift));
  let obj7 = planId(recipientUserId[10]);
  const items2 = [IAPStore];
  let tmp11 = null != stateFromStores;
  const stateFromStores2 = planId(recipientUserId[10]).useStateFromStores(items2, () => IAPStore.getProduct(productIdForGift));
  if (tmp11) {
    tmp11 = stateFromStores.planId === planId;
  }
  analyticsLocations = analyticsLocation(tmp2[13])().analyticsLocations;
  const obj8 = planId(recipientUserId[10]);
  createOrReuseGiftOrder = planId(recipientUserId[14]).useCreateOrReuseGiftOrder("GiftPurchaseButton");
  const items3 = [planId, recipientUserId, analyticsLocation, analyticsLocations, createOrReuseGiftOrder, productIdForGift];
  const obj3 = { style: style.style, children: null };
  const callback = analyticsLocations.useCallback(productIdForGift(function*() {
    yield createOrReuseGiftOrder({ planId, recipientUserId, productId: productIdForGift });
    closure_128_0 = value;
    const premiumTypeFromPlanId = planId(4528).getPremiumTypeFromPlanId(closure_129_0);
    const premiumType = premiumTypeFromPlanId.premiumType;
    const planInterval = premiumTypeFromPlanId.planInterval;
    planId(10392).openGiftModal({ recipientUserId: closure_129_2, premiumType, planInterval, analyticsLocation: closure_129_1, analyticsLocations: closure_129_4, order: closure_128_0 });
    yield "IconComponent";
    const obj7 = { title: null, body: null };
    const intl = planId(1126).intl;
    obj7.title = intl.string(planId(1126).t.R0RpRX);
    const intl2 = planId(1126).intl;
    obj7.body = intl2.string(planId(1126).t.CKsXk3);
    tmp3(5708).show(obj7);
  }), items3);
  const tmpResult = planId(recipientUserId[14]);
  obj3.children = jsx(planId(recipientUserId[19]).BaseTextButton, { textElement: analyticsLocation(recipientUserId[20])({ style: obj, basePlanId: planId, isCurrentPlan: tmp11, isGift: true, product: stateFromStores2 }), variant: str, size: "sm", onPress: callback, loading: stateFromStores1, disabled: !canPurchaseIAP, grow: true });
  return <createOrReuseGiftOrder style={style.style}>{null}</createOrReuseGiftOrder>;
});