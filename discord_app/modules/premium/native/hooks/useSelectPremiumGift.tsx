// discord_app/modules/premium/native/hooks/useSelectPremiumGift.tsx
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/hooks/useSelectPremiumGift.tsx");

export const useSelectPremiumGift = function useSelectPremiumGift(PremiumGiftPlanSelect) {
  let navigation = require("useNavigation").useNavigation();
  _require = navigation;
  const obj = require("useNavigation");
  const nativeGiftContext = require("NativeGiftContext").useNativeGiftContext();
  const setPremiumType = nativeGiftContext.setPremiumType;
  recipientUserId = nativeGiftContext.recipientUserId;
  const planInterval = nativeGiftContext.planInterval;
  const setOrder = nativeGiftContext.setOrder;
  const obj2 = require("NativeGiftContext");
  const createOrReuseGiftOrder = require("createOrReuseGiftOrder").useCreateOrReuseGiftOrder(PremiumGiftPlanSelect);
  _require = planInterval((arg0) => {
    const navigation = arg0;
    c4 = 0;
    c5 = 0;
    c3 = 0;
    return (function* (arg0) {
      recipientUserId = tmp3;
      v2(undefined);
      closure_1(navigation);
      const planIdForPremiumType = navigation(recipientUserId[5]).getPlanIdForPremiumType(navigation, c3);
      navigation(recipientUserId[5]);
      let obj1 = {
        planId: planIdForPremiumType,
        recipientUserId,
        productId: navigation(recipientUserId[6]).getProductIdForGift(planIdForPremiumType),
      };
      closure_129_0 = yield v3(obj1);
      v2(closure_129_0);
      navigation.navigate(navigation(recipientUserId[9]).PremiumGiftScreens.CUSTOMIZATION);
      yield "HermesInternal";
      c3 = 0;
      obj1 = setPremiumType(recipientUserId[7]);
      const obj3 = { title: null, body: null };
      const intl = navigation(recipientUserId[8]).intl;
      obj3.title = intl.string(navigation(recipientUserId[8]).t.R0RpRX);
      const intl2 = navigation(recipientUserId[8]).intl;
      obj3.body = intl2.string(navigation(recipientUserId[8]).t.CKsXk3);
      obj1.show(obj3);
    })();
  });
  const items = [setPremiumType, planInterval, createOrReuseGiftOrder, recipientUserId, setOrder, navigation];
  return setOrder.useCallback(function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
};
