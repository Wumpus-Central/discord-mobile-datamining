// discord_app/modules/premium/native/hooks/useSelectPremiumGift.tsx
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/hooks/useSelectPremiumGift.tsx");

export const useSelectPremiumGift = ReactCompilerGating.isReactCompilerEnabled() ? (function useSelectPremiumGift(GiftPurchaseButton) {
  const cResult = require("c").c(7);
  const obj = require("c");
  let navigation = require("useNavigation").useNavigation();
  _require = navigation;
  const obj2 = require("useNavigation");
  const nativeGiftContext = require("NativeGiftContext").useNativeGiftContext();
  const setPremiumType = nativeGiftContext.setPremiumType;
  recipientUserId = nativeGiftContext.recipientUserId;
  const planInterval = nativeGiftContext.planInterval;
  const setOrder = nativeGiftContext.setOrder;
  const obj3 = require("NativeGiftContext");
  const createOrReuseGiftOrder = require("createOrReuseGiftOrder").useCreateOrReuseGiftOrder(GiftPurchaseButton);
  if (cResult[0] === createOrReuseGiftOrder) {
    if (cResult[1] === navigation) {
      if (cResult[2] === planInterval) {
        if (cResult[3] === recipientUserId) {
          if (cResult[4] === setOrder) {
            if (cResult[5] === setPremiumType) {
              let tmp5 = cResult[6];
            }
            return tmp5;
          }
        }
      }
    }
  }
  _require = planInterval((arg0) => {
    const navigation = arg0;
    c4 = 0;
    c5 = 0;
    c3 = 0;
    return (function*(arg0) {
      recipientUserId = tmp3;
      v2(undefined);
      closure_1(navigation);
      const planIdForPremiumType = navigation(recipientUserId[7]).getPlanIdForPremiumType(navigation, c3);
      navigation(recipientUserId[7]);
      yield v3({ planId: planIdForPremiumType, recipientUserId, productId: navigation(recipientUserId[8]).getProductIdForGift(planIdForPremiumType) });
      closure_129_0 = value;
      v2(closure_129_0);
      navigation.navigate(navigation(recipientUserId[11]).PremiumGiftScreens.CUSTOMIZATION);
      yield "IconComponent";
      c3 = 0;
      const obj7 = { title: null, body: null };
      const intl = navigation(recipientUserId[10]).intl;
      obj7.title = intl.string(navigation(recipientUserId[10]).t.R0RpRX);
      const intl2 = navigation(recipientUserId[10]).intl;
      obj7.body = intl2.string(navigation(recipientUserId[10]).t.CKsXk3);
      setPremiumType(recipientUserId[9]).show(obj7);
      { planId: planIdForPremiumType, recipientUserId, productId: navigation(recipientUserId[8]).getProductIdForGift(planIdForPremiumType) };
    })();
  });
  function t0() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  cResult[0] = createOrReuseGiftOrder;
  cResult[1] = navigation;
  cResult[2] = planInterval;
  cResult[3] = recipientUserId;
  cResult[4] = setOrder;
  cResult[5] = setPremiumType;
  cResult[6] = t0;
  tmp5 = t0;
}) : (function useSelectPremiumGift(GiftPurchaseButton) {
  let navigation = require("useNavigation").useNavigation();
  _require = navigation;
  const obj = require("useNavigation");
  const nativeGiftContext = require("NativeGiftContext").useNativeGiftContext();
  const setPremiumType = nativeGiftContext.setPremiumType;
  recipientUserId = nativeGiftContext.recipientUserId;
  const planInterval = nativeGiftContext.planInterval;
  const setOrder = nativeGiftContext.setOrder;
  const obj2 = require("NativeGiftContext");
  const createOrReuseGiftOrder = require("createOrReuseGiftOrder").useCreateOrReuseGiftOrder(GiftPurchaseButton);
  _require = planInterval((arg0) => {
    const navigation = arg0;
    c4 = 0;
    c5 = 0;
    c3 = 0;
    return (function*(arg0) {
      recipientUserId = tmp3;
      v2(undefined);
      closure_1(navigation);
      const planIdForPremiumType = navigation(recipientUserId[7]).getPlanIdForPremiumType(navigation, c3);
      navigation(recipientUserId[7]);
      yield v3({ planId: planIdForPremiumType, recipientUserId, productId: navigation(recipientUserId[8]).getProductIdForGift(planIdForPremiumType) });
      closure_129_0 = value;
      v2(closure_129_0);
      navigation.navigate(navigation(recipientUserId[11]).PremiumGiftScreens.CUSTOMIZATION);
      yield "IconComponent";
      c3 = 0;
      const obj7 = { title: null, body: null };
      const intl = navigation(recipientUserId[10]).intl;
      obj7.title = intl.string(navigation(recipientUserId[10]).t.R0RpRX);
      const intl2 = navigation(recipientUserId[10]).intl;
      obj7.body = intl2.string(navigation(recipientUserId[10]).t.CKsXk3);
      setPremiumType(recipientUserId[9]).show(obj7);
      { planId: planIdForPremiumType, recipientUserId, productId: navigation(recipientUserId[8]).getProductIdForGift(planIdForPremiumType) };
    })();
  });
  const items = [setPremiumType, planInterval, createOrReuseGiftOrder, recipientUserId, setOrder, navigation];
  return setOrder.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
});