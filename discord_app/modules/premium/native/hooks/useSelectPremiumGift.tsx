// === Module 10739: useSelectPremiumGift ===

// Module 10739 (useSelectPremiumGift)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "noop" /* 19 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/native/hooks/useSelectPremiumGift.tsx");

export const useSelectPremiumGift = function useSelectPremiumGift(PremiumGiftPlanSelect) {
  let navigation = _require(recipientUserId[2]).useNavigation();
  _require = navigation;
  let obj = _require(recipientUserId[2]);
  const nativeGiftContext = _require(recipientUserId[3]).useNativeGiftContext();
  const setPremiumType = nativeGiftContext.setPremiumType;
  recipientUserId = nativeGiftContext.recipientUserId;
  const planInterval = nativeGiftContext.planInterval;
  const setOrder = nativeGiftContext.setOrder;
  let obj2 = _require(recipientUserId[3]);
  const createOrReuseGiftOrder = _require(recipientUserId[4]).useCreateOrReuseGiftOrder(PremiumGiftPlanSelect);
  _require = undefined;
  _require = planInterval((arg0) => {
    closure_0 = arg0;
    c4 = 0;
    c5 = 0;
    c3 = 0;
    return (function*(arg0) {
      if (v02 === 2) {
        v02 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v02 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              v02 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v02 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp3;
              closure_1 = tmp7;
              let navigation;
              v0(undefined);
              closure_1_1(navigation);
              const planIdForPremiumType = navigation(recipientUserId[5]).getPlanIdForPremiumType(navigation, c3);
              const obj8 = navigation(recipientUserId[5]);
              c3 = 1;
              obj1 = { planId: null, recipientUserId: null, productId: null };
              obj1[0] = planIdForPremiumType;
              obj1[1] = closure_1_2;
              obj1[2] = navigation(recipientUserId[6]).getProductIdForGift(planIdForPremiumType);
              v0 = 2;
              v02 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = v02(obj1);
              return obj2;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            obj1 = setPremiumType(recipientUserId[7]);
            const obj3 = { title: null, body: null };
            const intl = navigation(recipientUserId[8]).intl;
            obj3[0] = intl.string(navigation(recipientUserId[8]).t.R0RpRX);
            const intl2 = navigation(recipientUserId[8]).intl;
            obj3[1] = intl2.string(navigation(recipientUserId[8]).t.CKsXk3);
            obj1.show(obj3);
            v02 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = undefined;
            return obj4;
          } else if (arg0 === 1) {
            v02 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            v02 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            navigation = arg1;
            c3 = 0;
            v0(navigation);
            navigation.navigate(navigation(recipientUserId[9]).PremiumGiftScreens.CUSTOMIZATION);
            v02 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp29) {
          if (tmp4 === c3) {
            v02 = tmp2;
            throw tmp29;
          } else {
            v0 = tmp;
          }
        }
      }
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
};