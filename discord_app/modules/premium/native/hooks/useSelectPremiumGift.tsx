// === Module 10486: useSelectPremiumGift ===

// Module 10486 (useSelectPremiumGift)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_1, navigation;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((GiftPurchaseButton) => {
  let recipientUserId;
  const obj = navigation(recipientUserId[3]);
  const cResult = obj.c(7);
  const obj2 = navigation(recipientUserId[4]);
  navigation = obj2.useNavigation();
  const obj3 = navigation(recipientUserId[5]);
  const nativeGiftContext = obj3.useNativeGiftContext();
  const setPremiumType = nativeGiftContext.setPremiumType;
  recipientUserId = nativeGiftContext.recipientUserId;
  const planInterval = nativeGiftContext.planInterval;
  const setOrder = nativeGiftContext.setOrder;
  let obj4 = navigation(recipientUserId[6]);
  const createOrReuseGiftOrder = obj4.useCreateOrReuseGiftOrder(GiftPurchaseButton);
  if (cResult[0] === createOrReuseGiftOrder) {
    if (cResult[1] === navigation) {
      if (cResult[2] === planInterval) {
        if (cResult[3] === recipientUserId) {
          if (cResult[4] === setOrder) {
            let tmp5;
            if (cResult[5] === setPremiumType) {
              tmp5 = cResult[6];
            }
            return tmp5;
          }
        }
      }
    }
  }
  let closure_0 = planInterval((arg0) => {
    let v1;
    let v3;
    navigation = arg0;
    let c4 = 0;
    let c5 = 0;
    let c3 = 0;
    return (function*(arg0) {
      let intl;
      let intl2;
      let obj8;
      recipientUserId = tmp;
      closure_1 = tmp4;
      v1(undefined);
      closure_1(navigation);
      const obj7 = navigation(closure_2_2[7]);
      const planIdForPremiumType = obj7.getPlanIdForPremiumType(navigation, c3);
      const obj4 = { planId: planIdForPremiumType, recipientUserId, productId: obj8.getProductIdForGift(planIdForPremiumType) };
      obj8 = navigation(closure_2_2[8]);
      yield v3(obj4);
      navigation = value;
      v1(navigation);
      navigation.navigate(navigation(closure_2_2[11]).PremiumGiftScreens.CUSTOMIZATION);
      yield "IconComponent";
      const obj6 = { title: intl.string(navigation(closure_2_2[10]).t.R0RpRX), body: intl2.string(navigation(closure_2_2[10]).t.CKsXk3) };
      const show = setPremiumType(closure_2_2[9]).show;
      setPremiumType(closure_2_2[9]);
      intl = navigation(closure_2_2[10]).intl;
      intl2 = navigation(closure_2_2[10]).intl;
      show(obj6);
    })();
  });
  const fn = function() {
    return closure_0(...arguments);
  };
  cResult[0] = createOrReuseGiftOrder;
  cResult[1] = navigation;
  cResult[2] = planInterval;
  cResult[3] = recipientUserId;
  cResult[4] = setOrder;
  cResult[5] = setPremiumType;
  cResult[6] = fn;
  tmp5 = fn;
}) : ((GiftPurchaseButton) => {
  let recipientUserId;
  const obj = navigation(recipientUserId[4]);
  navigation = obj.useNavigation();
  const obj2 = navigation(recipientUserId[5]);
  const nativeGiftContext = obj2.useNativeGiftContext();
  const setPremiumType = nativeGiftContext.setPremiumType;
  recipientUserId = nativeGiftContext.recipientUserId;
  const planInterval = nativeGiftContext.planInterval;
  const setOrder = nativeGiftContext.setOrder;
  const obj3 = navigation(recipientUserId[6]);
  const createOrReuseGiftOrder = obj3.useCreateOrReuseGiftOrder(GiftPurchaseButton);
  const useCallback = setOrder.useCallback;
  let closure_0 = planInterval((arg0) => {
    let v1;
    let v3;
    navigation = arg0;
    let c4 = 0;
    let c5 = 0;
    let c3 = 0;
    return (function*(arg0) {
      let intl;
      let intl2;
      let obj8;
      recipientUserId = tmp;
      closure_1 = tmp4;
      v1(undefined);
      closure_1(navigation);
      const obj7 = navigation(closure_2_2[7]);
      const planIdForPremiumType = obj7.getPlanIdForPremiumType(navigation, c3);
      const obj4 = { planId: planIdForPremiumType, recipientUserId, productId: obj8.getProductIdForGift(planIdForPremiumType) };
      obj8 = navigation(closure_2_2[8]);
      yield v3(obj4);
      navigation = value;
      v1(navigation);
      navigation.navigate(navigation(closure_2_2[11]).PremiumGiftScreens.CUSTOMIZATION);
      yield "IconComponent";
      const obj6 = { title: intl.string(navigation(closure_2_2[10]).t.R0RpRX), body: intl2.string(navigation(closure_2_2[10]).t.CKsXk3) };
      const show = setPremiumType(closure_2_2[9]).show;
      setPremiumType(closure_2_2[9]);
      intl = navigation(closure_2_2[10]).intl;
      intl2 = navigation(closure_2_2[10]).intl;
      show(obj6);
    })();
  });
  const items = [setPremiumType, planInterval, createOrReuseGiftOrder, recipientUserId, setOrder, navigation];
  return useCallback(function() {
    return closure_0(...arguments);
  }, items);
});
const result = size.fileFinishedImporting("modules/premium/native/hooks/useSelectPremiumGift.tsx");

export const useSelectPremiumGift = tmp2;