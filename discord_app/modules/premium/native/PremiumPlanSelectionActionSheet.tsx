// === Module 6942: PremiumPlanSelectionActionSheet ===

// Module 6942 (PremiumPlanSelectionActionSheet)
import _modDef38 from "module_38" /* 38 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl9 from "intl" /* 1126 */;
import FormConstants from "FormConstants" /* 1192 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import NumberUtils from "NumberUtils" /* 1888 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import PremiumUtils from "PremiumUtils" /* 4534 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import Text_Text from "Text/Text" /* 4892 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import react_native from "react-native" /* 5786 */;
import MobileWebRedirectCheckoutUtils from "MobileWebRedirectCheckoutUtils" /* 6922 */;
import PremiumBundledPlansUtils from "PremiumBundledPlansUtils" /* 6925 */;
import NativeCheckoutStore from "NativeCheckoutStore" /* 6943 */;
import PremiumPlanActionSheetHeaderDefault from "PremiumPlanActionSheetHeader" /* 6950 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 6969 */;
import ACOMExperiments from "ACOMExperiments" /* 8899 */;
import useIsEligibleForBogoOffer from "useIsEligibleForBogoOffer" /* 10452 */;
import NativeCheckoutStoreProviderDefault from "NativeCheckoutStoreProvider" /* 10551 */;
import PaymentFlowStartedTriggerPoint from "PaymentFlowStartedTriggerPoint" /* 10552 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import IAPStore from "IAPStore" /* 6931 */;
import PremiumPlanPurchasedStore from "PremiumPlanPurchasedStore" /* 6940 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import Constants_mod from "Constants" /* 1085 */;
import PaymentConstants from "PaymentConstants" /* 4875 */;
import Constants_mod2 from "Constants" /* 1096 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const PremiumUtilsDefault = PremiumUtils;
let BottomSheet, TIER_2, application_id, c5, constants3, dependencyMap, premiumItem, set;

let c9;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_25;
let closure_26;
let closure_27;
let closure_28;
let closure_29;
let closure_31;
let closure_32;
let closure_33;
let closure_34;
let closure_35;
let closure_36;
let closure_37;
let map1;
let metroImportAll;
let obj2;
let obj3;
let size;
function renderPlanOptionBadge(arg0) {
  let IAybsG;
  let customBadgeComponent;
  let discount;
  let format;
  let intl2;
  let obj3;
  let obj4;
  ({ customBadgeComponent, discount } = arg0);
  if (null == customBadgeComponent) {
    let tmp13 = null;
    if (!tmp3) {
      let tmp4;
      if (tmp2) {
        const obj2 = { text: intl2.string(intl9.t.iQTfWx) };
        intl2 = intl9.intl;
        tmp4 = __initData4(closure_40, obj2);
      } else {
        tmp4 = null;
        if (null != discount) {
          const obj = { text: format(IAybsG, obj4) };
          const intl = intl9.intl;
          format = intl.format;
          obj4 = { discount: obj3.formatPercent(tmp, discount / 100) };
          IAybsG = intl9.t.IAybsG;
          obj3 = NumberUtils;
          tmp4 = __initData4(closure_40, obj);
        }
      }
      tmp13 = tmp4;
    }
    customBadgeComponent = tmp13;
  }
  return customBadgeComponent;
}
function PremiumPlanSelectionActionSheet(premiumItems) {
  let RadioGroup;
  let _undefined;
  let analyticsLocation;
  let analyticsLocations;
  let c14;
  let c27;
  let closure_20;
  let closure_6;
  let closure_7;
  let discountedPlan;
  let discountedPriceString;
  let discountedProduct;
  let first;
  let formatToPlainString;
  let initialSelectedItem;
  let intl;
  let intl2;
  let intl5;
  let isPatchOrderLoading;
  let items10;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items19;
  let obj17;
  let obj27;
  let obj29;
  let obj8;
  let orderRequired;
  let planOptionsBusy;
  let premiumTier;
  let premiumType;
  let priceString;
  let stringResult;
  let tmp15Result9;
  let tmp49Result;
  let tmp53;
  let tmp5Result23;
  let tmp5Result24;
  let tmp83;
  let userIsEligibleForBogoPromotion;
  let v9hnZoK;
  const f93798 = (premiumTier) => premiumTier.premiumTier;
  const f93808 = (patchOrderLineItems) => ({ patchOrderLineItems: patchOrderLineItems.patchOrderLineItems, isPatchOrderLoading: patchOrderLineItems.isPatchOrderLoading, orderRequired: patchOrderLineItems.orderRequired });
  ({ applicationId: require, analyticsLocation, premiumType } = premiumItems);
  premiumItems = premiumItems.premiumItems;
  const onPaymentStart = premiumItems.onPaymentStart;
  const onPaymentSuccess = premiumItems.onPaymentSuccess;
  const onPaymentDismiss = premiumItems.onPaymentDismiss;
  let flag = premiumItems.showFormTitle;
  ({ analyticsLocations, userIsEligibleForBogoPromotion, initialSelectedItem } = premiumItems);
  if (flag === undefined) {
    flag = true;
  }
  let handlePremiumPurchase;
  c14 = undefined;
  orderRequired = undefined;
  isPatchOrderLoading = undefined;
  let closure_17;
  discountedPriceString = undefined;
  first = undefined;
  closure_20 = undefined;
  let closure_21;
  let analyticsLocations2;
  let closure_23;
  let memo;
  let basePurchaseFlowAnalyticsFields;
  let basePlanId;
  constants3 = undefined;
  let onDismiss;
  let callback1;
  let memo1;
  let obj = function _onPlanSelectionChange() {
    obj = _asyncToGenerator(async (arg0) => {
      let closure_0 = arg0;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c4;
        try {
          let found;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_2 = tmp;
              let closure_1 = tmp4;
              found = undefined;
              if (!ref.current) {
                if (!isPatchOrderLoading) {
                  found = premiumItems.find((productId) => productId.productId === closure_0);
                  if (null != found) {
                    if (found !== first) {
                      const obj5 = closure_0(closure_2[52]);
                      const subscriptionItemsForProduct = obj5.getSubscriptionItemsForProduct(tmp31);
                      ref.current = true;
                      c4 = 1;
                      if (orderRequired) {
                        c5 = 2;
                        c6 = 1;
                        const obj4 = {
                          value: _undefined(subscriptionItemsForProduct.map((planId) => {
                                              let castPremiumSubscriptionAsSkuId;
                                              let obj2;
                                              obj = { sku_id: castPremiumSubscriptionAsSkuId(obj2.getSkuIdForPlan(planId.planId)), subscription_plan_id: null, quantity: null, purchase_type: constants.SUBSCRIPTION };
                                              castPremiumSubscriptionAsSkuId = closure_1_0(closure_1_2[17]).castPremiumSubscriptionAsSkuId;
                                              closure_1_0(closure_1_2[17]);
                                              ({ planId: obj.subscription_plan_id, quantity: obj.quantity } = planId);
                                              obj2 = closure_1_1(closure_1_2[17]);
                                              return obj;
                                            })),
                          done: false
                        };
                        return obj4;
                      }
                    }
                  }
                }
              }
              c6 = 3;
              return { value: "IconComponent", done: null };
            }
          } else if (1 === c5) {
            c4 = 0;
            closure_130_21.current = false;
            throw closure_3;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            closure_130_21.current = false;
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else if (null == value) {
            c4 = 0;
            closure_130_21.current = false;
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
          closure_130_20(found);
          c4 = 0;
          closure_130_21.current = false;
        } catch (tmp22) {
          closure_3 = tmp22;
          if (0 === c4) {
            c6 = 3;
            throw tmp22;
          } else {
            c5 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  let tmp = closure_38();
  _slicedToArray = tmp;
  const tmp2 = orderRequired((isPaymentSuccess) => isPaymentSuccess.isPaymentSuccess);
  react = tmp2;
  let tmp3 = orderRequired((productId) => productId.productId);
  const product_id = tmp3;
  const tmp6 = premiumItems;
  const tmp4 = orderRequired((mobileWebRedirectCheckoutStatus) => mobileWebRedirectCheckoutStatus.mobileWebRedirectCheckoutStatus);
  obj = require("get initialized");
  const items = [handlePremiumPurchase];
  let stateFromStores = obj.useStateFromStores(items, () => handlePremiumPurchase.isBusy());
  let obj2 = require("useIsScreenReaderEnabled");
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  let obj3 = react;
  react.useRef(null);
  const ref = react.useRef(null);
  const items1 = [tmp2];
  const effect = react.useEffect(() => {
    if (closure_7) {
      const _Date = Date;
      ref.current = Date.now();
    }
  }, items1);
  const items2 = [tmp2, isScreenReaderEnabled];
  const effect1 = react.useEffect(() => {
    const tmp = closure_7 && isScreenReaderEnabled;
    if (tmp) {
      const obj2 = { ref, delay: 100 };
      obj = react_native;
      const result = obj.setAccessibilityFocus(obj2);
    }
  }, items2);
  let obj4 = require("handlePremiumPurchase");
  const tmp7 = handlePremiumPurchase;
  handlePremiumPurchase = obj4.useHandlePremiumPurchase();
  let obj5 = require("BlockedPaymentsCountryExperiment");
  const isPaymentsBlocked = obj5.useIsPaymentsBlocked();
  const tmp16 = premiumType(premiumItems[33])();
  const tmp17 = ref((orderRecord) => orderRecord.orderRecord);
  let closure_13 = tmp17;
  ({ patchOrderLineItems: c14, isPatchOrderLoading, orderRequired } = ref(f93808));
  const tmp18 = ref(f93808);
  if (!isPatchOrderLoading) {
    isPatchOrderLoading = ref((isCreateOrderLoading) => isCreateOrderLoading.isCreateOrderLoading);
  }
  const tmp5Result = require("usePremiumTrialOffer");
  const premiumTrialOffer = tmp5Result.usePremiumTrialOffer();
  const tmp5Result13 = require("usePremiumDiscountOffer");
  const premiumDiscountOffer = tmp5Result13.usePremiumDiscountOffer();
  let tmp21 = null != premiumTrialOffer && null != premiumType;
  if (tmp21) {
    const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
    let skuId;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
    const tmp15Result = premiumType(tmp6[17]);
    tmp21 = skuId === tmp15Result.getSkuIdForPremiumType(premiumType);
  }
  let tmp23 = tmp21;
  if (tmp23) {
    let tmp24 = !orderRequired;
    if (orderRequired) {
      let subscriptionTrialId;
      const trialId = premiumTrialOffer.trialId;
      if (tmp17 != null) {
        const subscriptionFacet = tmp17.subscriptionFacet;
        if (subscriptionFacet != null) {
          const subscriptionPreview = subscriptionFacet.subscriptionPreview;
          if (subscriptionPreview != null) {
            subscriptionTrialId = subscriptionPreview.subscriptionTrialId;
          }
        }
      }
      tmp24 = trialId === subscriptionTrialId;
    }
    tmp23 = tmp24;
  }
  closure_17 = tmp23;
  const tmp5Result14 = require("useDiscountedPremiumProductInfo");
  const discountedPremiumProductInfo = tmp5Result14.useDiscountedPremiumProductInfo(premiumDiscountOffer, premiumItems);
  ({ discountedPlan, discountedProduct, discountedPriceString } = discountedPremiumProductInfo);
  let productId;
  const useCheckoutPlanDiscountPrices = require("useCheckoutPlanPriceString").useCheckoutPlanDiscountPrices;
  require("useCheckoutPlanPriceString");
  if (discountedPlan != null) {
    productId = discountedPlan.productId;
  }
  let obj6 = { discountedPriceString, regularPriceString: priceString };
  priceString = undefined;
  if (discountedProduct != null) {
    priceString = discountedProduct.priceString;
  }
  const checkoutPlanDiscountPrices = useCheckoutPlanDiscountPrices(productId, obj6);
  [first, closure_20] = obj3.useState(initialSelectedItem);
  closure_21 = obj3.useRef(false);
  const items3 = [tmp7];
  const tmp5Result16 = require("get initialized");
  const stateFromStores1 = tmp5Result16.useStateFromStores(items3, () => {
    let product = null;
    if (null != first) {
      product = IAPStore.getProduct(tmp.productId);
    }
    return product;
  });
  const tmp5Result17 = require("useBottomSheetRef");
  const bottomSheetRef = tmp5Result17.useBottomSheetRef().bottomSheetRef;
  const tmp15Result8 = premiumType(tmp6[38]);
  analyticsLocations2 = tmp15Result8(analyticsLocations, premiumType(tmp6[39]).PREMIUM_PAYMENT_ACTION_SHEET).analyticsLocations;
  const tmp35 = premiumType(tmp6[40])(() => {
    obj = require("PremiumAnalyticsUtils");
    return obj.getNewAnalyticsLoadId();
  });
  closure_23 = tmp35;
  const items4 = [premiumType];
  memo = obj3.useMemo(() => {
    const castPremiumSubscriptionAsSkuId = PremiumUtils.castPremiumSubscriptionAsSkuId;
    PremiumUtils;
    obj = PremiumUtilsDefault;
    return castPremiumSubscriptionAsSkuId(obj.getSkuIdForPremiumType(premiumType));
  }, items4);
  let obj7 = { analyticsLoadId: tmp35, analyticsLocation: obj8, analyticsLocations: analyticsLocations2 };
  obj8 = { object: basePlanId.BUTTON_CTA, object_type: constants3.BUY };
  const getBasePurchaseFlowAnalyticsFields = require("PremiumAnalyticsUtils").getBasePurchaseFlowAnalyticsFields;
  require("PremiumAnalyticsUtils");
  let merged = Object.assign(analyticsLocation);
  basePurchaseFlowAnalyticsFields = getBasePurchaseFlowAnalyticsFields(obj7);
  basePlanId = null;
  if (null != first) {
    basePlanId = first.basePlanId;
  }
  const tmp5Result19 = require("MobileWebRedirectCheckoutUtils");
  let result = tmp5Result19.isMobileWebRedirectCheckoutEnabled();
  constants3 = result;
  premiumType(tmp6[43])(() => {
    let customCheckoutFlowForAnalytics;
    obj = { application_id: require, subscription_plan_id: basePlanId, sku_id: memo, custom_checkout_flow: customCheckoutFlowForAnalytics };
    const trackPaymentFlowStartedAnalyticsAndCTP = PaymentFlowStartedTriggerPoint.trackPaymentFlowStartedAnalyticsAndCTP;
    PaymentFlowStartedTriggerPoint;
    const merged = Object.assign(basePurchaseFlowAnalyticsFields);
    customCheckoutFlowForAnalytics = undefined;
    if (c27) {
      const tmpResult = MobileWebRedirectCheckoutUtils;
      customCheckoutFlowForAnalytics = tmpResult.getCustomCheckoutFlowForAnalytics();
    }
    const result = trackPaymentFlowStartedAnalyticsAndCTP(obj);
  });
  const items5 = [tmp2, tmp3];
  onDismiss = obj3.useCallback(() => {
    const tmp = closure_7 && null != ref.current;
    if (tmp) {
      const _Date = Date;
      obj = { product_id, duration_ms: Date.now() - ref.current };
      const track = AnalyticsUtilsDefault.track;
      const PREMIUM_ACTIVATED_SHEET_DISMISSED = basePurchaseFlowAnalyticsFields.PREMIUM_ACTIVATED_SHEET_DISMISSED;
      AnalyticsUtilsDefault;
      track(PREMIUM_ACTIVATED_SHEET_DISMISSED, obj);
    }
    authStore3();
  }, items5);
  const items6 = [onDismiss];
  callback1 = obj3.useCallback(() => {
    callback();
    obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
  }, items6);
  const items7 = [memo, basePurchaseFlowAnalyticsFields, tmp35, analyticsLocations2, handlePremiumPurchase, result, callback1, onPaymentDismiss, onPaymentStart, onPaymentSuccess, tmp17, first];
  const items8 = [tmp23, result];
  const callback2 = obj3.useCallback(onPaymentDismiss(function*() {
    let closure_0;
    let closure_1;
    let closure_2;
    let id;
    let intl;
    let intl2;
    let shouldRedirectToMobileWeb;
    application_id = arg0;
    if (1 === c5) {
      if (arg0 === 1) {
        let c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        let EXTERNAL_PAYMENT;
        premiumType(premiumItems[22])(null != closure_130_19, "cannot start payment without a selectedItem");
        basePlanId = closure_130_19.basePlanId;
        const tmp31 = closure_130_27 && shouldRedirectToMobileWeb;
        premiumItems = tmp31;
        const PaymentFlowStep = application_id(premiumItems[41]).PaymentFlowStep;
        if (premiumItems) {
          EXTERNAL_PAYMENT = PaymentFlowStep.MOBILE_WEB_REDIRECT_CHECKOUT;
        } else {
          EXTERNAL_PAYMENT = PaymentFlowStep.EXTERNAL_PAYMENT;
        }
        const obj8 = { from_step: application_id(premiumItems[41]).PaymentFlowStep.PLAN_SELECT, to_step: EXTERNAL_PAYMENT, subscription_plan_gateway_plan_id: closure_130_19.productId, sku_id: closure_130_24 };
        const getPaymentFlowStepAnalyticsFields = application_id(premiumItems[41]).getPaymentFlowStepAnalyticsFields;
        const tmp41 = application_id(premiumItems[41]);
        let closure_4 = getPaymentFlowStepAnalyticsFields(closure_130_25, obj8);
        const tmp48 = premiumItems;
        if (!tmp48) {
          const obj5 = premiumType(premiumItems[45]);
          const trackResult = obj5.track(constants.PAYMENT_FLOW_STEP, closure_4);
        }
        const obj10 = { productId: closure_130_19.productId, onPaymentStart: closure_130_3, onPaymentSuccess: closure_130_4, onPaymentDismiss: closure_130_5 };
        closure_1_13(obj10);
        const tmp64 = premiumItems;
        if (tmp64) {
          const obj9 = application_id(premiumItems[47]);
          const obj11 = { planId: basePlanId, isGift: false, loadId: closure_130_23 };
          const str = "premium_plan_selection_action_sheet";
          const result = obj9.goToStandalonePremiumCheckoutFromMobileApp("premium_plan_selection_action_sheet", obj11, () => {
            obj = require("MetaQuestUtils");
            if (obj.isMetaQuest()) {
              callback1();
            } else {
              c14("in_mobile_web");
              const obj2 = premiumType(premiumItems[45]);
              obj2.track(basePurchaseFlowAnalyticsFields.PAYMENT_FLOW_STEP, closure_1_4);
            }
          }, () => {
            let intl;
            let intl2;
            obj = { title: intl.string(closure_1_0(closure_1_2[20]).t.NrBVjw), body: intl2.string(closure_1_0(closure_1_2[20]).t["gD+grx"]), hideActionSheet: true };
            const show = closure_1_1(closure_1_2[49]).show;
            closure_1_1(closure_1_2[49]);
            intl = closure_1_0(closure_1_2[20]).intl;
            intl2 = closure_1_0(closure_1_2[20]).intl;
            show(obj);
          });
        } else {
          let c4 = 1;
          const obj12 = { productId: closure_130_19.productId, analyticsLocation: closure_130_25.location, analyticsLoadId: closure_130_23, analyticsLocations: closure_130_22, orderId: id };
          id = undefined;
          if (closure_130_13 != null) {
            id = closure_130_13.id;
          }
          c5 = 3;
          c6 = 1;
          const obj13 = { value: closure_130_12(obj12), done: false };
          return obj13;
        }
      }
    } else if (2 === c5) {
      c4 = 0;
      let closure_5 = closure_3;
      if (closure_5 instanceof premiumType(premiumItems[50])) {
        let obj2 = application_id(premiumItems[51]);
        const subscriptions = obj2.fetchSubscriptions();
        const obj14 = { title: intl.string(application_id(premiumItems[20]).t["U+H+kd"]), body: intl2.string(application_id(premiumItems[20]).t.F9ktNa), hideActionSheet: true };
        let show = premiumType(premiumItems[49]).show;
        const tmp20 = premiumType(premiumItems[49]);
        intl = application_id(premiumItems[20]).intl;
        intl2 = application_id(premiumItems[20]).intl;
        const showResult = show(obj14);
      } else {
        throw closure_5;
      }
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 0;
      c6 = 3;
      obj = { value, done: true };
      return obj;
    } else {
      c4 = 0;
    }
    yield "IconComponent";
    premiumItems = tmp;
    premiumType = tmp4;
    let obj6 = application_id;
    if (application_id === undefined) {
      obj6 = { shouldRedirectToMobileWeb: false };
    }
    shouldRedirectToMobileWeb = obj6.shouldRedirectToMobileWeb;
    return "Reflect";
  }), items7);
  memo1 = obj3.useMemo(() => {
    let stringResult;
    if (c27) {
      const intl3 = intl9.intl;
      stringResult = intl3.string(intl9.t.rylrdY);
    } else if (closure_17) {
      let stringResult1;
      const tmp3Result = PlatformUtils;
      const isAndroidResult = tmp3Result.isAndroid();
      const intl2 = intl9.intl;
      const string = intl2.string;
      const t = intl9.t;
      if (isAndroidResult) {
        stringResult1 = string(t.rKD72m);
      } else {
        stringResult1 = string(t.bboTul);
      }
      stringResult = stringResult1;
    } else {
      const intl = intl9.intl;
      stringResult = intl.string(intl9.t.nIlrxd);
    }
    return stringResult;
  }, items8);
  const items9 = [tmp2, first, tmp23, discountedPriceString, memo1, tmp.legalDisclaimerText];
  const memo2 = obj3.useMemo(() => {
    let format;
    let format2;
    let format3;
    let obj11;
    let obj12;
    let obj13;
    let obj3;
    let obj4;
    let obj6;
    let obj7;
    let obj8;
    let obj9;
    let tmp3;
    let tmp43;
    let v3uC7vj;
    if (closure_7) {
      return null;
    } else {
      let interval;
      if (first != null) {
        interval = first.interval;
      }
      if (null == interval) {
        return null;
      } else if (closure_17) {
        const obj2 = { style: closure_6.legalDisclaimerText, variant: "text-xxs/medium", children: format3(tmp43, obj4) };
        const Text3 = Text_Text.Text;
        const intl3 = intl9.intl;
        format3 = intl3.format;
        const obj10 = PlatformUtils;
        const isAndroidResult = obj10.isAndroid();
        const t = intl9.t;
        obj4 = { paidURL: onDismiss.PAID_TERMS, interval: obj12.getIntervalStringAsNoun(interval), cancelURL: obj13.getArticleURL(callback1.PREMIUM_DETAILS_CANCEL_SUB) };
        tmp43 = isAndroidResult ? t.tINI9V : t.ZWXtAj;
        obj12 = PremiumUtilsDefault;
        obj13 = HelpdeskUtilsDefault;
        return __initData4(Text3, obj2);
      } else if (null != discountedPriceString) {
        const obj5 = { style: closure_6.legalDisclaimerText, variant: "text-xxs/medium", children: format2(v3uC7vj, obj9) };
        const Text2 = Text_Text.Text;
        const intl2 = intl9.intl;
        format2 = intl2.format;
        obj9 = { buttonText: memo1, interval: obj6.formatInterval(interval), cancelSubscriptionArticle: obj7.getArticleURL(callback1.PREMIUM_DETAILS_CANCEL_SUB), paidServiceTermsArticle: obj8.getArticleURL(callback1.PAID_TERMS) };
        v3uC7vj = intl9.t["3uC7vj"];
        obj6 = PremiumUtilsDefault;
        obj7 = HelpdeskUtilsDefault;
        obj8 = HelpdeskUtilsDefault;
        return __initData4(Text2, obj5);
      } else {
        const obj14 = PlatformUtils;
        const isAndroidResult1 = obj14.isAndroid();
        const t2 = intl9.t;
        obj = { style: closure_6.legalDisclaimerText, variant: "text-xxs/medium", children: format(tmp3, obj11) };
        tmp3 = isAndroidResult1 ? t2.COObWR : t2["7wpqfj"];
        const Text = Text_Text.Text;
        const intl = intl9.intl;
        format = intl.format;
        obj11 = { paidURL: onDismiss.PAID_TERMS, interval: obj3.getIntervalStringAsNoun(interval), ctaText: memo1 };
        obj3 = PremiumUtilsDefault;
        return __initData4(Text, obj);
      }
    }
  }, items9);
  let obj9 = { ref: bottomSheetRef, handleDisabled: true, onDismiss, startExpanded: true, children: tmp49Result };
  BottomSheet = require("Sheet/BottomSheet").BottomSheet;
  if (isPaymentsBlocked) {
    let obj10 = { style: tmp.blockedPaymentContainer, children: items10 };
    items10 = [closure_35(premiumType(tmp6[63]), {}), ];
    let obj11 = { variant: "floating", onPress: callback1 };
    items10[1] = closure_35(require("ActionSheetHeaderBar").ActionSheetHeaderBar, obj11);
    tmp49Result = closure_36(product_id, obj10);
  } else {
    let tmp49Result3;
    let obj12 = { premiumType, isPaymentSuccess: tmp2, selectedPremiumType: premiumTier, trialOffer: premiumTrialOffer, discountOffer: tmp53 };
    premiumTier = undefined;
    if (first != null) {
      premiumTier = first.premiumTier;
    }
    tmp53 = null;
    if (null != discountedPriceString) {
      tmp53 = premiumDiscountOffer;
    }
    const items11 = [closure_35(closure_39, obj12), , ];
    let obj13 = { style: tmp.body, children: items19 };
    let str = "in_mobile_web";
    if ("in_mobile_web" === tmp4) {
      let obj14 = { size: "large", style: tmp.loadingIndicator };
      tmp49Result3 = closure_35(isScreenReaderEnabled, obj14);
    } else {
      let tmp49Result2;
      if (tmp2) {
        let tmp76;
        const obj15 = { style: tmp.contentActivated, children: items12 };
        const obj16 = { ref, accessible: true, accessibilityRole: "image", accessibilityLabel: intl5.string(require("intl").t["Q+BB2w"]), children: closure_35(tmp15Result9, obj17) };
        intl5 = require("intl").intl;
        let premiumTier1;
        tmp15Result9 = premiumType(tmp6[65]);
        if (first != null) {
          premiumTier1 = first.premiumTier;
        }
        if (first.TIER_0 === premiumTier1) {
          let tmp15Result10;
          const tmp5Result20 = require("shared");
          if (tmp5Result20.isThemeDark(tmp16)) {
            tmp15Result10 = premiumType(tmp6[54]);
          } else {
            tmp15Result10 = premiumType(tmp6[55]);
          }
          tmp76 = tmp15Result10;
        } else if (first.TIER_1 === premiumTier1) {
          let tmp15Result11;
          const tmp5Result21 = require("shared");
          if (tmp5Result21.isThemeDark(tmp16)) {
            tmp15Result11 = premiumType(tmp6[56]);
          } else {
            tmp15Result11 = premiumType(tmp6[57]);
          }
          tmp76 = tmp15Result11;
        } else if (first.TIER_2 === premiumTier1) {
          let tmp15Result12;
          const tmp5Result22 = require("shared");
          if (tmp5Result22.isThemeDark(tmp16)) {
            tmp15Result12 = premiumType(tmp6[58]);
          } else {
            tmp15Result12 = premiumType(tmp6[59]);
          }
          tmp76 = tmp15Result12;
        }
        obj17 = { source: tmp76 };
        items12 = [closure_35(tmp54, obj16), ];
        let premiumTier2;
        const obj18 = { style: tmp.contentActivatedText, variant: "text-md/semibold", children: stringResult };
        let Text3 = require("Text/Text").Text;
        if (first != null) {
          premiumTier2 = first.premiumTier;
        }
        if (first.TIER_0 === premiumTier2) {
          const intl7 = require("intl").intl;
          stringResult = intl7.string(require("intl").t["6WWrVM"]);
        } else if (first.TIER_1 === premiumTier2) {
          const intl6 = require("intl").intl;
          stringResult = intl6.string(require("intl").t.LAAgsy);
        } else if (first.TIER_2 === premiumTier2) {
          const intl8 = require("intl").intl;
          stringResult = intl8.string(require("intl").t.I7xNzI);
        }
        items12[1] = closure_35(Text3, obj18);
        tmp49Result2 = closure_36(tmp54, obj15);
      } else {
        let tmp48Result3;
        const obj19 = { convertToMajorUnits: tmp5Result23.isAndroid() };
        tmp5Result23 = require("PlatformUtils");
        if (flag) {
          flag = !tmp23;
        }
        const obj20 = { style: tmp.contentSelectPlan, children: items15 };
        if (tmp23) {
          const obj21 = { variant: "text-md/normal", color: "text-strong", style: tmp.trialDisclaimer, children: intl2.string(require("intl").t.u95Dt4) };
          let Text2 = require("Text/Text").Text;
          intl2 = require("intl").intl;
          tmp48Result3 = closure_35(Text2, obj21);
        } else {
          tmp48Result3 = null;
          if (null != checkoutPlanDiscountPrices) {
            tmp48Result3 = null;
            if (null != premiumType) {
              const obj22 = { children: items13 };
              const obj23 = { variant: "text-md/normal", color: "text-strong", style: tmp.discountDisclaimer, children: intl.format(require("intl").t.yBn7uz, checkoutPlanDiscountPrices) };
              let Text = require("Text/Text").Text;
              intl = require("intl").intl;
              items13 = [closure_35(Text, obj23), ];
              const obj24 = { style: items14 };
              items14 = [, ];
              ({ divider: arr14[0], offerDividerMargin: arr14[1] } = tmp);
              items13[1] = closure_35(product_id, obj24);
              tmp48Result3 = closure_36(tmp54, obj22);
            }
          }
        }
        items15 = [tmp48Result3, ];
        let stringResult1;
        const tmp15Result13 = premiumType(tmp6[66]);
        if (flag) {
          let intl3 = require("intl").intl;
          stringResult1 = intl3.string(require("intl").t.u95Dt4);
        }
        const obj25 = { title: stringResult1, titleStyleType: obj.NO_BORDER_OR_MARGIN, titleViewStyle: tmp.formTitle, sectionBodyStyle: items16, inset: true, children: items17 };
        items16 = [tmp.formSectionBody, !flag && tmp.formSectionBodyWithNoTitle];
        let tmp48Result4 = null != stateFromStores1;
        if (tmp48Result4) {
          tmp48Result4 = "HR" === stateFromStores1.countryCode;
        }
        if (tmp48Result4) {
          const str3 = stateFromStores1.currencyCode;
          tmp48Result4 = str3.toLowerCase() === constants6.EUR;
        }
        if (tmp48Result4) {
          const obj26 = { message: formatToPlainString(v9hnZoK, obj27) };
          const tmp15Result14 = premiumType(tmp6[67]);
          const intl4 = require("intl").intl;
          formatToPlainString = intl4.formatToPlainString;
          obj27 = { kunaPriceWithCurrency: tmp5Result24.formatPrice(stateFromStores1.price * memo1, constants6.HRK, obj19) };
          v9hnZoK = require("intl").t["9hnZoK"];
          tmp5Result24 = require("PriceUtils");
          tmp48Result4 = closure_35(tmp15Result14, obj26);
        }
        items17 = [tmp48Result4, ];
        let str4 = "auto";
        let str5 = "auto";
        if (isPatchOrderLoading) {
          str5 = "none";
        }
        const obj28 = { pointerEvents: str5, accessibilityElementsHidden: isPatchOrderLoading, importantForAccessibility: str4, style: planOptionsBusy, children: closure_35(RadioGroup, obj29) };
        if (isPatchOrderLoading) {
          str4 = "no-hide-descendants";
        }
        planOptionsBusy = null;
        if (isPatchOrderLoading) {
          planOptionsBusy = tmp.planOptionsBusy;
        }
        let productId1;
        RadioGroup = require("native").RadioGroup;
        if (first != null) {
          productId1 = first.productId;
        }
        let productId2;
        obj29 = {
          value: productId1,
          options: premiumItems.map((premiumItem) => {
                  let tmp3;
                  obj = { premiumItem, selectedProductId: productId2, optionNeedsProductNameLabel, trialOffer: premiumTrialOffer, discountOffer: premiumDiscountOffer, discountedPriceString: tmp3, userIsEligibleForBogoPromotion, selectedPremiumType: premiumType };
                  tmp3 = null;
                  if (premiumItem.productId === identifier) {
                    tmp3 = discountedPriceString;
                  }
                  const obj2 = { name: closure_2_35(closure_2_42, obj), value: premiumItem.productId };
                  return obj2;
                }),
          onChange(value) {
                  function onPlanSelectionChange(value) {
                    return obj(...arguments);
                  }
                  return onPlanSelectionChange(value.value);
                },
          withDividers: false,
          style: tmp.planOptionRowContainer,
          disabled: stateFromStores,
          indicatorLeft: true
        };
        if (first != null) {
          productId2 = first.productId;
        }
        let identifier;
        if (discountedProduct != null) {
          identifier = discountedProduct.identifier;
        }
        const _Set = Set;
        const self = this;
        const self2 = this;
        react = new Set(premiumItems.map(f93798)).size > 1;
        set = new Set(premiumItems.map(f93798));
        items17[1] = closure_35(product_id, obj28);
        items15[1] = closure_36(tmp15Result13, obj25);
        tmp49Result2 = closure_36(tmp54, obj20);
      }
      const items18 = [tmp49Result2, ];
      const obj30 = { isPaymentSuccess: tmp2, onClose: callback1, ctaText: memo1, onStartPayment: callback2, shouldUseMobileWebRedirectCheckout: result, disabled: tmp83, loading: stateFromStores };
      tmp83 = stateFromStores || isPatchOrderLoading;
      if (!stateFromStores) {
        stateFromStores = isPatchOrderLoading;
      }
      const obj31 = { children: items18 };
      items18[1] = closure_35(closure_43, obj30);
      tmp49Result3 = closure_36(closure_37, obj31);
    }
    items19 = [tmp49Result3, ];
    const obj32 = { children: items11 };
    const tmp86 = !result && memo2;
    items19[1] = tmp86;
    items11[1] = closure_36(product_id, obj13);
    const obj33 = { variant: "floating", onPress: callback1 };
    items11[2] = closure_35(require("ActionSheetHeaderBar").ActionSheetHeaderBar, obj33);
    tmp49Result = closure_36(closure_37, obj32);
  }
  return closure_35(BottomSheet, obj9);
}
let closure_3 = ["predicate", "initialSelectedCriteria", "sortFn"];
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ View: metroImportAll, ActivityIndicator: c9 } = react_native2);
const useNativeCheckoutStore = NativeCheckoutStore.useNativeCheckoutStore;
({ setInitiatedPurchaseFromNewFlow: map1, setMobileWebRedirectCheckoutStatus: closure_14, usePremiumPlanPurchasedStore: closure_15, reset: closure_16 } = PremiumPlanPurchasedStore);
({ DISCOUNTS: closure_17, PRICE_PLACEHOLDER: closure_18, PremiumTypes: closure_19, SubscriptionIntervalTypes: closure_20, SubscriptionPlans: closure_21, SubscriptionPlanInfo: closure_22, PremiumSubscriptionSKUs: closure_23, PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY: closure_24 } = PremiumConstants);
let Constants = Constants_mod2;
({ AnalyticEvents: closure_25, AnalyticsObjects: closure_26, AnalyticsObjectTypes: closure_27, MarketingURLs: closure_28, HelpdeskArticles: closure_29 } = Constants);
const TitleStyleType = FormConstants.TitleStyleType;
({ EUR_TO_HRK_CONVERSION_RATE: closure_31, ItemPurchaseType: closure_32 } = PaymentConstants);
Constants = Constants_mod2;
({ CurrencyCodes: closure_33, PaymentGateways: closure_34 } = Constants);
({ jsx: closure_35, jsxs: closure_36, Fragment: closure_37 } = Fragment);
let createStyles = createStyles_mod;
let obj = { body: { padding: 16 }, headerText: { paddingTop: 30, paddingHorizontal: 20 }, contentSelectPlan: { marginBottom: 16 }, contentActivated: { alignItems: "center", paddingTop: 40, paddingBottom: 56 }, contentActivatedText: { width: 328, marginTop: 16, textAlign: "center" }, formTitle: { paddingTop: 0, paddingLeft: 0 }, formSectionBody: { backgroundColor: "none" }, formSectionBodyWithNoTitle: { marginTop: -24 }, planOptionRowContainer: { paddingHorizontal: 10 }, planOptionsBusy: { opacity: 0.5 }, planOptionContainer: { display: "flex", flexDirection: "row", alignItems: "center" }, planOptionPriceContainer: { flexGrow: 1, flexShrink: 1, display: "flex", flexDirection: "column", alignItems: "flex-end" }, planOptionDiscountContainer: { display: "flex", flexDirection: "row", flexShrink: 1 }, planOptionDiscount: obj2, planOptionDiscountWhite: obj3, planOptionDiscountText: { textTransform: "uppercase" }, blockedPaymentContainer: { marginVertical: 40 }, legalDisclaimerText: { marginTop: 16 }, divider: size, offerDividerMargin: { marginBottom: 8 }, trialDisclaimer: { marginBottom: 8 }, discountDisclaimer: { marginBottom: 20 }, loadingIndicator: { marginVertical: 30 }, discountSubTextContainer: { alignItems: "flex-end" }, priceText: { flexShrink: 1 } };
obj2 = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360, paddingVertical: 2, paddingHorizontal: 8, marginRight: 8 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.WHITE };
size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_38 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_39 = ReactCompilerGating.isReactCompilerEnabled() ? ((selectedPremiumType) => {
  let discountOffer;
  let first;
  let isPaymentSuccess;
  let orderRecord;
  let orderRequired;
  let premiumType;
  let trialOffer;
  const obj = react2;
  const cResult = obj.c(8);
  ({ premiumType, isPaymentSuccess, trialOffer, discountOffer } = selectedPremiumType);
  selectedPremiumType = selectedPremiumType.selectedPremiumType;
  const tmp4 = closure_38();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(orderRequired) {
      return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  ({ orderRequired, orderRecord } = useNativeCheckoutStore(first));
  useNativeCheckoutStore(first);
  if (null == premiumType) {
    if (!isPaymentSuccess) {
      let tmp7;
      let tmp9;
      const _Symbol = Symbol;
      const headerText = tmp4.headerText;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl9.intl;
        const stringResult = intl.string(intl9.t.vLz3Zs);
        cResult[1] = stringResult;
        tmp7 = stringResult;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] !== tmp4.headerText) {
        const obj2 = { style: headerText, variant: "text-md/semibold", color: "text-default", accessibilityRole: "header", children: tmp7 };
        const tmp11 = __initData4(Text_Text.Text, obj2);
        cResult[2] = tmp4.headerText;
        cResult[3] = tmp11;
        tmp9 = tmp11;
      } else {
        tmp9 = cResult[3];
      }
      return tmp9;
    }
  }
  if (isPaymentSuccess) {
    premiumType = selectedPremiumType;
  }
  _modDef38(null != premiumType, "If isPaymentSuccess is true, a value must be given for selectedPremiumType. Or premiumType must be given.");
  let tmp14 = null != trialOffer && null != premiumType;
  if (tmp14) {
    const subscriptionTrial = trialOffer.subscriptionTrial;
    let skuId;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
    const tmp12Result = PremiumUtilsDefault;
    tmp14 = skuId === tmp12Result.getSkuIdForPremiumType(premiumType);
  }
  let tmp16 = tmp14;
  if (tmp16) {
    let tmp17 = !orderRequired;
    if (orderRequired) {
      let subscriptionTrialId;
      const trialId = trialOffer.trialId;
      if (orderRecord != null) {
        const subscriptionFacet = orderRecord.subscriptionFacet;
        if (subscriptionFacet != null) {
          const subscriptionPreview = subscriptionFacet.subscriptionPreview;
          if (subscriptionPreview != null) {
            subscriptionTrialId = subscriptionPreview.subscriptionTrialId;
          }
        }
      }
      tmp17 = trialId === subscriptionTrialId;
    }
    tmp16 = tmp17;
  }
  let tmp19 = null;
  if (tmp16) {
    tmp19 = trialOffer;
  }
  if (cResult[4] === discountOffer) {
    if (cResult[5] === tmp19) {
      let tmp20;
      if (cResult[6] === premiumType) {
        tmp20 = cResult[7];
      }
      return tmp20;
    }
  }
  const tmp21 = __initData4(PremiumPlanActionSheetHeaderDefault, { premiumType, trialOffer: tmp19, discountOffer });
  cResult[4] = discountOffer;
  cResult[5] = tmp19;
  cResult[6] = premiumType;
  cResult[7] = tmp21;
  tmp20 = tmp21;
}) : ((arg0) => {
  let discountOffer;
  let intl;
  let isPaymentSuccess;
  let orderRecord;
  let orderRequired;
  let premiumType;
  let selectedPremiumType;
  let trialOffer;
  const f93821 = (orderRequired) => ({ orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord });
  ({ premiumType, isPaymentSuccess, trialOffer } = arg0);
  ({ selectedPremiumType, discountOffer } = arg0);
  const tmp = closure_38();
  ({ orderRequired, orderRecord } = useNativeCheckoutStore(f93821));
  useNativeCheckoutStore(f93821);
  if (null == premiumType) {
    if (!isPaymentSuccess) {
      const obj = { style: tmp.headerText, variant: "text-md/semibold", color: "text-default", accessibilityRole: "header", children: intl.string(intl9.t.vLz3Zs) };
      const Text = Text_Text.Text;
      intl = intl9.intl;
      return __initData4(Text, obj);
    }
  }
  if (isPaymentSuccess) {
    premiumType = selectedPremiumType;
  }
  _modDef38(null != premiumType, "If isPaymentSuccess is true, a value must be given for selectedPremiumType. Or premiumType must be given.");
  let tmp9 = null != trialOffer && null != premiumType;
  if (tmp9) {
    const subscriptionTrial = trialOffer.subscriptionTrial;
    let skuId;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
    const tmp6Result = PremiumUtilsDefault;
    tmp9 = skuId === tmp6Result.getSkuIdForPremiumType(premiumType);
  }
  let tmp11 = tmp9;
  if (tmp11) {
    let tmp12 = !orderRequired;
    if (orderRequired) {
      let subscriptionTrialId;
      const trialId = trialOffer.trialId;
      if (orderRecord != null) {
        const subscriptionFacet = orderRecord.subscriptionFacet;
        if (subscriptionFacet != null) {
          const subscriptionPreview = subscriptionFacet.subscriptionPreview;
          if (subscriptionPreview != null) {
            subscriptionTrialId = subscriptionPreview.subscriptionTrialId;
          }
        }
      }
      tmp12 = trialId === subscriptionTrialId;
    }
    tmp11 = tmp12;
  }
  let trialOffer2 = null;
  if (tmp11) {
    trialOffer2 = trialOffer;
  }
  return __initData4(PremiumPlanActionSheetHeaderDefault, { premiumType, trialOffer: trialOffer2, discountOffer });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_40 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let backgroundColorType;
  let text;
  const obj = react2;
  const cResult = obj.c(10);
  ({ text, backgroundColorType } = arg0);
  let str = "green";
  if (undefined !== backgroundColorType) {
    str = backgroundColorType;
  }
  const tmp4 = closure_38();
  let prop = null;
  if ("white" === str) {
    prop = tmp4.planOptionDiscountWhite;
  }
  if (cResult[0] === tmp4.planOptionDiscount) {
    let tmp7;
    if (cResult[1] === prop) {
      tmp7 = cResult[2];
    }
    let str2 = "text-overlay-light";
    if ("white" === str) {
      str2 = "text-overlay-dark";
    }
    if (cResult[3] === tmp4.planOptionDiscountText) {
      if (cResult[4] === str2) {
        let tmp8;
        if (cResult[5] === text) {
          tmp8 = cResult[6];
        }
        if (cResult[7] === tmp7) {
          let tmp11;
          if (cResult[8] === tmp8) {
            tmp11 = cResult[9];
          }
          return tmp11;
        }
        const obj2 = { style: tmp7, children: tmp8 };
        const tmp14 = __initData4(metroImportAll, obj2);
        cResult[7] = tmp7;
        cResult[8] = tmp8;
        cResult[9] = tmp14;
        tmp11 = tmp14;
      }
    }
    const obj3 = { style: tmp4.planOptionDiscountText, variant: "text-xs/bold", color: str2, children: text };
    const tmp10 = __initData4(Text_Text.Text, obj3);
    cResult[3] = tmp4.planOptionDiscountText;
    cResult[4] = str2;
    cResult[5] = text;
    cResult[6] = tmp10;
    tmp8 = tmp10;
  }
  const items = [tmp4.planOptionDiscount, prop];
  cResult[0] = tmp4.planOptionDiscount;
  cResult[1] = prop;
  cResult[2] = items;
  tmp7 = items;
}) : ((backgroundColorType) => {
  let Text;
  let obj2;
  let str2;
  let str = backgroundColorType.backgroundColorType;
  const text = backgroundColorType.text;
  if (str === undefined) {
    str = "green";
  }
  const tmp = closure_38();
  const items = [tmp.planOptionDiscount, ];
  let prop = null;
  if ("white" === str) {
    prop = tmp.planOptionDiscountWhite;
  }
  items[1] = prop;
  const obj = { style: items, children: __initData4(Text, obj2) };
  obj2 = { style: tmp.planOptionDiscountText, variant: "text-xs/bold", color: str2, children: text };
  str2 = "text-overlay-light";
  Text = Text_Text.Text;
  if ("white" === str) {
    str2 = "text-overlay-dark";
  }
  return __initData4(metroImportAll, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_42 = ReactCompilerGating.isReactCompilerEnabled() ? ((premiumItem) => {
  let closure_2;
  let customBadgeComponent;
  let discountOffer;
  let discountedPriceString;
  let first;
  let first1;
  let items1;
  let optionNeedsProductNameLabel;
  let orderRecord;
  let orderRequired;
  let selectedPremiumType;
  let selectedProductId;
  let tmp10;
  let tmpResult7;
  let trialOffer;
  let userIsEligibleForBogoPromotion;
  const obj = premiumItem(576);
  const cResult = obj.c(84);
  premiumItem = premiumItem.premiumItem;
  ({ selectedProductId, optionNeedsProductNameLabel, customBadgeComponent, trialOffer, discountOffer, discountedPriceString, userIsEligibleForBogoPromotion, selectedPremiumType } = premiumItem);
  const tmp5 = closure_38();
  [first, dependencyMap] = react.useState(0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [IAPStore];
    cResult[0] = items;
    first1 = items;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] !== premiumItem.productId) {
    const fn = function n() {
      return IAPStore.getProduct(premiumItem.productId);
    };
    cResult[1] = premiumItem.productId;
    cResult[2] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[2];
  }
  const tmpResult = premiumItem(504);
  const stateFromStores = tmpResult.useStateFromStores(first1, tmp10);
  const tmpResult5 = premiumItem(13162);
  const checkoutPlanPriceString = tmpResult5.useCheckoutPlanPriceString(premiumItem.productId, stateFromStores);
  let priceString;
  if (stateFromStores != null) {
    priceString = stateFromStores.priceString;
  }
  if (cResult[3] === discountedPriceString) {
    let tmp14;
    let tmp28;
    let USD;
    let formatToPlainStringResult;
    if (cResult[4] === priceString) {
      tmp14 = cResult[5];
    }
    const tmpResult6 = premiumItem(13162);
    const checkoutPlanDiscountPrices = tmpResult6.useCheckoutPlanDiscountPrices(premiumItem.productId, tmp14);
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class W {
        constructor(orderRequired) {
          return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
        }
      }
      cResult[6] = W;
    } else {
      class W {
        constructor(orderRequired) {
          return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
        }
      }
    }
    ({ orderRequired, orderRecord } = useNativeCheckoutStore(W));
    useNativeCheckoutStore(W);
    if (cResult[7] === customBadgeComponent) {
      class W {
        constructor(orderRequired) {
          return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
        }
      }
    }
    const premiumTier = premiumItem.premiumTier;
    let tmp19 = null != trialOffer && null != premiumTier;
    if (tmp19) {
      class W {
        constructor(orderRequired) {
          return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
        }
      }
      if (tmp20 != null) {
        class W {
          constructor(orderRequired) {
            return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
          }
        }
      }
      const obj6 = first(4534);
      tmp19 = tmp21 === obj6.getSkuIdForPremiumType(premiumTier);
    }
    let tmp23 = tmp19;
    if (tmp23) {
      let tmp24;
      class W {
        constructor(orderRequired) {
          return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
        }
      }
      if (orderRequired) {
        class W {
          constructor(orderRequired) {
            return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
          }
        }
        const trialId = trialOffer.trialId;
        if (orderRecord != null) {
          class W {
            constructor(orderRequired) {
              return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
            }
          }
          if (tmp26 != null) {
            class W {
              constructor(orderRequired) {
                return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
              }
            }
            if (tmp27 != null) {
              class W {
                constructor(orderRequired) {
                  return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
                }
              }
            }
          }
        }
        tmp24 = trialId === tmp25;
      }
      tmp23 = tmp24;
    }
    if (cResult[41] !== premiumItem.basePlanId) {
      class W {
        constructor(orderRequired) {
          return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
        }
      }
      const tierDisplayNameByPlanId = obj7.getTierDisplayNameByPlanId(premiumItem.basePlanId);
      cResult[41] = premiumItem.basePlanId;
      cResult[42] = tierDisplayNameByPlanId;
      tmp28 = tierDisplayNameByPlanId;
    } else {
      class W {
        constructor(orderRequired) {
          return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
        }
      }
    }
    if (cResult[43] !== premiumItem.interval) {
      class W {
        constructor(orderRequired) {
          return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
        }
      }
      const obj8 = first(4534);
      const intervalString = obj8.getIntervalString(premiumItem.interval, false);
      cResult[43] = premiumItem.interval;
      cResult[44] = intervalString;
    } else {
      class W {
        constructor(orderRequired) {
          return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
        }
      }
    }
    let tmp33 = tmp23;
    const basePlanId = premiumItem.basePlanId;
    const PREMIUM_YEAR_TIER_2 = closure_21.PREMIUM_YEAR_TIER_2;
    if (!tmp23) {
      class W {
        constructor(orderRequired) {
          return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
        }
      }
    }
    if (!tmp33) {
      class W {
        constructor(orderRequired) {
          return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
        }
      }
      tmp33 = tmp34;
    }
    if (!tmp33) {
      class W {
        constructor(orderRequired) {
          return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
        }
      }
    }
    const productId = premiumItem.productId;
    if (null == stateFromStores) {
      class W {
        constructor(orderRequired) {
          return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
        }
      }
      USD = constants6.USD;
    } else {
      class W {
        constructor(orderRequired) {
          return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
        }
      }
      if (str.toLowerCase() in constants6) {
        class W {
          constructor(orderRequired) {
            return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
          }
        }
        USD = str2.toLowerCase();
      } else {
        class W {
          constructor(orderRequired) {
            return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
          }
        }
      }
    }
    if (null != checkoutPlanDiscountPrices) {
      class W {
        constructor(orderRequired) {
          return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
        }
      }
      obj9.formatRate(checkoutPlanDiscountPrices.discountedPrice, closure_22[premiumItem.basePlanId].interval, closure_22[premiumItem.basePlanId].intervalCount);
    }
    if (tmp23) {
      class W {
        constructor(orderRequired) {
          return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
        }
      }
      const formatToPlainString = tmp41.formatToPlainString;
      const obj2 = { price: tmpResult7.formatPrice(0, USD, { minimumFractionDigits: 0, maximumFractionDigits: 0 }) };
      const hXcaLT = tmp(1126).t.hXcaLT;
      tmpResult7 = premiumItem(6750);
      formatToPlainStringResult = formatToPlainString(hXcaLT, obj2);
    } else {
      class W {
        constructor(orderRequired) {
          return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
        }
      }
      if (checkoutPlanDiscountPrices != null) {
        class W {
          constructor(orderRequired) {
            return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
          }
        }
      }
      if (formatToPlainStringResult == null) {
        class W {
          constructor(orderRequired) {
            return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
          }
        }
      }
      if (formatToPlainStringResult == null) {
        class W {
          constructor(orderRequired) {
            return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
          }
        }
      }
    }
    const formatRate = premiumItem(6750).formatRate;
    premiumItem(6750);
    if (checkoutPlanDiscountPrices != null) {
      class W {
        constructor(orderRequired) {
          return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
        }
      }
    }
    if (undefined == null) {
      class W {
        constructor(orderRequired) {
          return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
        }
      }
    }
    if (undefined == null) {
      class W {
        constructor(orderRequired) {
          return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
        }
      }
    }
    if (cResult[45] === tmp5.planOptionPriceContainer) {
      class W {
        constructor(orderRequired) {
          return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
        }
      }
      const planOptionContainer = tmp5.planOptionContainer;
      if (null != discountOffer) {
        class W {
          constructor(orderRequired) {
            return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
          }
        }
      } else {
        class W {
          constructor(orderRequired) {
            return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
          }
        }
      }
      const tmp49 = productId === selectedProductId;
      if (tmp49) {
        class W {
          constructor(orderRequired) {
            return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
          }
        }
      }
      let combined = tmp30;
      if (optionNeedsProductNameLabel) {
        class W {
          constructor(orderRequired) {
            return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
          }
        }
        combined = "" + tmp28 + " " + tmp30;
      }
      if (cResult[48] === tmp48) {
        class W {
          constructor(orderRequired) {
            return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
          }
        }
      }
      const obj3 = { variant: tmp48, color: "interactive-text-default", children: combined };
      cResult[48] = tmp48;
      cResult[49] = "interactive-text-default";
      cResult[50] = combined;
      cResult[51] = closure_35(premiumItem(4892).Text, obj3);
      const tmp53 = closure_35(premiumItem(4892).Text, obj3);
    }
    if (first > 0) {
      class W {
        constructor(orderRequired) {
          return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
        }
      }
      tmp46[0] = tmp5.planOptionPriceContainer;
      const obj4 = { transform: items1 };
      items1 = [{ translateY: first / 2 }];
      const obj5 = { translateY: first / 2 };
      tmp46[1] = obj4;
    } else {
      class W {
        constructor(orderRequired) {
          return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
        }
      }
    }
    cResult[45] = tmp5.planOptionPriceContainer;
    cResult[46] = first;
    cResult[47] = tmp46;
  }
  const obj10 = { discountedPriceString, regularPriceString: priceString };
  cResult[3] = discountedPriceString;
  cResult[4] = priceString;
  cResult[5] = obj10;
  tmp14 = obj10;
}) : ((premiumItem) => {
  let USD;
  let closure_2;
  let combined;
  let customBadgeComponent;
  let discountOffer;
  let discountedPriceString;
  let first;
  let formatToPlainString3Result;
  let formatToPlainString4;
  let formatToPlainString5;
  let formatToPlainStringResult;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let num;
  let num2;
  let obj19;
  let obj21;
  let optionNeedsProductNameLabel;
  let orderRecord;
  let orderRequired;
  let planOptionPriceContainer;
  let priceString;
  let prop;
  let selectedProductId;
  let str3;
  let str5;
  let str8;
  let tmp4Result5;
  let trialOffer;
  let userIsEligibleForBogoPromotion;
  let v02Gmgm;
  const f93826 = (orderRequired) => ({ orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord });
  premiumItem = premiumItem.premiumItem;
  ({ trialOffer, discountOffer, userIsEligibleForBogoPromotion } = premiumItem);
  ({ selectedProductId, optionNeedsProductNameLabel, customBadgeComponent, discountedPriceString } = premiumItem);
  if (userIsEligibleForBogoPromotion === undefined) {
    userIsEligibleForBogoPromotion = false;
  }
  first = undefined;
  dependencyMap = undefined;
  const selectedPremiumType = premiumItem.selectedPremiumType;
  const tmp = closure_38();
  const locale = LocaleStore.locale;
  [first, dependencyMap] = react.useState(0);
  const items = [IAPStore];
  const obj = premiumItem(504);
  const stateFromStores = obj.useStateFromStores(items, () => IAPStore.getProduct(premiumItem.productId));
  const obj2 = premiumItem(13162);
  let checkoutPlanPriceString = obj2.useCheckoutPlanPriceString(premiumItem.productId, stateFromStores);
  const obj3 = { discountedPriceString, regularPriceString: priceString };
  priceString = undefined;
  const useCheckoutPlanDiscountPrices = premiumItem(13162).useCheckoutPlanDiscountPrices;
  const productId = premiumItem.productId;
  premiumItem(13162);
  if (stateFromStores != null) {
    priceString = stateFromStores.priceString;
  }
  const checkoutPlanDiscountPrices = useCheckoutPlanDiscountPrices(productId, obj3);
  ({ orderRequired, orderRecord } = useNativeCheckoutStore(f93826));
  const premiumTier = premiumItem.premiumTier;
  let tmp12 = null != trialOffer && null != premiumTier;
  useNativeCheckoutStore(f93826);
  if (tmp12) {
    const subscriptionTrial = trialOffer.subscriptionTrial;
    let skuId;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
    const obj4 = first(4534);
    tmp12 = skuId === obj4.getSkuIdForPremiumType(premiumTier);
  }
  let tmp15 = tmp12;
  if (tmp15) {
    let tmp16 = !orderRequired;
    if (orderRequired) {
      let subscriptionTrialId;
      const trialId = trialOffer.trialId;
      if (orderRecord != null) {
        const subscriptionFacet = orderRecord.subscriptionFacet;
        if (subscriptionFacet != null) {
          const subscriptionPreview = subscriptionFacet.subscriptionPreview;
          if (subscriptionPreview != null) {
            subscriptionTrialId = subscriptionPreview.subscriptionTrialId;
          }
        }
      }
      tmp16 = trialId === subscriptionTrialId;
    }
    tmp15 = tmp16;
  }
  const tmp4Result = premiumItem(4534);
  const tierDisplayNameByPlanId = tmp4Result.getTierDisplayNameByPlanId(premiumItem.basePlanId);
  const obj6 = first(4534);
  const intervalString = obj6.getIntervalString(premiumItem.interval, false);
  let tmp21 = tmp15;
  const basePlanId = premiumItem.basePlanId;
  const PREMIUM_YEAR_TIER_2 = closure_21.PREMIUM_YEAR_TIER_2;
  if (!tmp15) {
    tmp21 = null != discountOffer;
  }
  if (!tmp21) {
    tmp21 = userIsEligibleForBogoPromotion && basePlanId === PREMIUM_YEAR_TIER_2;
  }
  let tmp23 = null;
  if (!tmp21) {
    tmp23 = closure_17[premiumItem.basePlanId];
  }
  if (userIsEligibleForBogoPromotion) {
    userIsEligibleForBogoPromotion = premiumItem.basePlanId === closure_21.PREMIUM_MONTH_TIER_2;
  }
  const productId2 = premiumItem.productId;
  if (null == stateFromStores) {
    USD = constants6.USD;
  } else {
    const str = stateFromStores.currencyCode;
    if (str.toLowerCase() in constants6) {
      const str2 = stateFromStores.currencyCode;
      USD = str2.toLowerCase();
    } else {
      USD = tmp25.USD;
    }
  }
  let formatRateResult = null;
  if (null != checkoutPlanDiscountPrices) {
    const tmp4Result4 = premiumItem(6750);
    formatRateResult = tmp4Result4.formatRate(checkoutPlanDiscountPrices.discountedPrice, tmp27.interval, tmp27.intervalCount);
  }
  if (tmp15) {
    const intl = tmp4(1126).intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj5 = { price: tmp4Result5.formatPrice(0, USD, { minimumFractionDigits: 0, maximumFractionDigits: 0 }) };
    const hXcaLT = tmp4(1126).t.hXcaLT;
    tmp4Result5 = premiumItem(6750);
    formatToPlainStringResult = formatToPlainString(hXcaLT, obj5);
  } else {
    formatToPlainStringResult = undefined;
    if (checkoutPlanDiscountPrices != null) {
      formatToPlainStringResult = checkoutPlanDiscountPrices.discountedPrice;
    }
    if (formatToPlainStringResult == null) {
      formatToPlainStringResult = checkoutPlanPriceString;
    }
    if (formatToPlainStringResult == null) {
      formatToPlainStringResult = closure_18;
    }
  }
  let regularPrice;
  const formatRate = premiumItem(6750).formatRate;
  premiumItem(6750);
  if (checkoutPlanDiscountPrices != null) {
    regularPrice = checkoutPlanDiscountPrices.regularPrice;
  }
  if (regularPrice == null) {
    regularPrice = checkoutPlanPriceString;
  }
  if (regularPrice == null) {
    regularPrice = closure_18;
  }
  const formatRateResult1 = formatRate(regularPrice, closure_22[premiumItem.basePlanId].interval, closure_22[premiumItem.basePlanId].intervalCount);
  if (first > 0) {
    const items1 = [tmp.planOptionPriceContainer, ];
    const obj7 = { transform: items2 };
    items2 = [{ translateY: first / 2 }];
    const obj8 = { translateY: first / 2 };
    items1[1] = obj7;
    planOptionPriceContainer = items1;
  } else {
    planOptionPriceContainer = tmp.planOptionPriceContainer;
  }
  const obj9 = { style: tmp.planOptionContainer, children: items3 };
  const Text = tmp4(4892).Text;
  if (null != discountOffer) {
    str3 = "text-lg/medium";
  } else {
    str3 = "text-md/medium";
  }
  let str4 = "interactive-text-default";
  const obj10 = { variant: str3, color: str5, children: combined };
  str5 = "interactive-text-default";
  if (productId2 === selectedProductId) {
    str5 = "interactive-text-active";
  }
  combined = intervalString;
  if (optionNeedsProductNameLabel) {
    const _HermesInternal = HermesInternal;
    combined = "" + tierDisplayNameByPlanId + " " + intervalString;
  }
  items3 = [closure_35(Text, obj10), ];
  const obj11 = { style: planOptionPriceContainer, children: items5 };
  const obj12 = { style: tmp.planOptionDiscountContainer, children: items4 };
  items4 = [renderPlanOptionBadge({ userLocale: locale, discount: tmp23, hideDefaultDiscountBadges: tmp21, customBadgeComponent, showBogoPromotionBadge: userIsEligibleForBogoPromotion }), ];
  const obj13 = { style: tmp.priceText, variant: "text-lg/medium", color: str8, children: formatToPlainStringResult };
  str8 = str4;
  const Text2 = tmp4(4892).Text;
  if (productId2 === selectedProductId) {
    str8 = "interactive-text-active";
  }
  items4[1] = closure_35(Text2, obj13);
  items5 = [closure_36(closure_8, obj12), , ];
  let tmp35Result = null;
  if (tmp15) {
    let str9 = str4;
    const Text3 = tmp4(4892).Text;
    if (productId2 === selectedProductId) {
      str9 = "text-default";
    }
    const obj14 = { variant: "text-xs/medium", color: str9, children: formatToPlainString3Result };
    if (premiumItem.interval === constants.YEAR) {
      const intl3 = tmp4(1126).intl;
      const formatToPlainString3 = intl3.formatToPlainString;
      const ECT4A5 = tmp4(1126).t.ECT4A5;
      if (checkoutPlanPriceString == null) {
        checkoutPlanPriceString = closure_18;
      }
      const obj15 = { price: checkoutPlanPriceString };
      formatToPlainString3Result = formatToPlainString3(ECT4A5, obj15);
    } else {
      const intl2 = tmp4(1126).intl;
      const formatToPlainString2 = intl2.formatToPlainString;
      let tmp41 = checkoutPlanPriceString;
      const v9QeON = tmp4(1126).t.v9QeON;
      if (checkoutPlanPriceString == null) {
        tmp41 = closure_18;
      }
      const obj16 = { price: tmp41 };
      formatToPlainString3Result = formatToPlainString2(v9QeON, obj16);
    }
    tmp35Result = closure_35(Text3, obj14);
  }
  items5[1] = tmp35Result;
  let tmp35Result3 = null;
  const obj17 = {
    style: tmp.discountSubTextContainer,
    onLayout(nativeEvent) {
      const height = nativeEvent.nativeEvent.layout.height;
      if (height !== first) {
        closure_2(height);
      }
    },
    children: items6
  };
  if (null != formatRateResult) {
    tmp35Result3 = null;
    if (null != discountOffer) {
      tmp35Result3 = null;
      if (null == selectedPremiumType) {
        let str10 = str4;
        const Text4 = tmp4(4892).Text;
        if (productId2 === selectedProductId) {
          str10 = "text-default";
        }
        const obj18 = { variant: "text-sm/medium", color: str10, children: formatToPlainString4(v02Gmgm, obj19) };
        const intl4 = tmp4(1126).intl;
        formatToPlainString4 = intl4.formatToPlainString;
        const discount = discountOffer.discount;
        obj19 = { discountedPrice: formatRateResult, numMonths: num };
        num = undefined;
        v02Gmgm = tmp4(1126).t["02Gmgm"];
        if (discount != null) {
          num = discount.intervalCount;
        }
        if (num == null) {
          num = 1;
        }
        tmp35Result3 = closure_35(Text4, obj18);
      }
    }
  }
  items6 = [tmp35Result3, ];
  let tmp35Result4 = null != checkoutPlanDiscountPrices && null != discountOffer;
  if (tmp35Result4) {
    const Text5 = tmp4(4892).Text;
    if (productId2 === selectedProductId) {
      str4 = "text-default";
    }
    const obj20 = { variant: "text-sm/medium", color: str4, children: formatToPlainString5(prop, obj21) };
    const intl5 = tmp4(1126).intl;
    formatToPlainString5 = intl5.formatToPlainString;
    const discount2 = discountOffer.discount;
    obj21 = { regularPrice: formatRateResult1, numMonths: num2 };
    num2 = undefined;
    prop = tmp4(1126).t["vZk+c/"];
    if (discount2 != null) {
      num2 = discount2.intervalCount;
    }
    if (num2 == null) {
      num2 = 1;
    }
    tmp35Result4 = closure_35(Text5, obj20);
  }
  items6[1] = tmp35Result4;
  items5[2] = closure_36(closure_8, obj17);
  items3[1] = closure_36(closure_8, obj11);
  return closure_36(closure_8, obj9);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_43 = ReactCompilerGating.isReactCompilerEnabled() ? ((shouldUseMobileWebRedirectCheckout) => {
  let ctaText;
  let disabled;
  let loading;
  let onClose;
  let onStartPayment;
  let obj = react2;
  const cResult = obj.c(14);
  ({ onClose, ctaText, onStartPayment } = shouldUseMobileWebRedirectCheckout);
  shouldUseMobileWebRedirectCheckout = shouldUseMobileWebRedirectCheckout.shouldUseMobileWebRedirectCheckout;
  ({ disabled, loading } = shouldUseMobileWebRedirectCheckout);
  if (shouldUseMobileWebRedirectCheckout.isPaymentSuccess) {
    let first;
    let tmp15;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = intl9.intl;
      const stringResult = intl.string(intl9.t.WAI6xu);
      cResult[0] = stringResult;
      first = stringResult;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== onClose) {
      const obj2 = { text: first, size: "md", grow: true, onPress: onClose };
      const tmp17 = __initData4(components_Button_Button.Button, obj2);
      cResult[1] = onClose;
      cResult[2] = tmp17;
      tmp15 = tmp17;
    } else {
      tmp15 = cResult[2];
    }
    return tmp15;
  } else {
    let tmp4;
    if (cResult[3] !== shouldUseMobileWebRedirectCheckout) {
      const tmp5 = shouldUseMobileWebRedirectCheckout ? { size: "lg", variant: "primary" } : { size: "md", variant: "active" };
      class T {
        constructor() {
          obj = { shouldRedirectToMobileWeb: closure_1 };
          return onStartPayment(obj);
        }
      }
      cResult[4] = tmp5;
      tmp4 = tmp5;
    } else {
      tmp4 = cResult[4];
    }
    if (cResult[5] === onStartPayment) {
      let tmp6;
      if (cResult[6] === shouldUseMobileWebRedirectCheckout) {
        tmp6 = cResult[7];
      }
      if (cResult[8] === ctaText) {
        if (cResult[9] === tmp4) {
          if (cResult[10] === disabled) {
            if (cResult[11] === loading) {
              let tmp7;
              if (cResult[12] === tmp6) {
                tmp7 = cResult[13];
              }
              return tmp7;
            }
          }
        }
      }
      class T {
        constructor() {
          obj = { shouldRedirectToMobileWeb: closure_1 };
          return onStartPayment(obj);
        }
      }
      const obj3 = { text: ctaText, grow: true, onPress: tmp6, loading, disabled };
      const Button = components_Button_Button.Button;
      const merged = Object.assign(tmp4);
      const tmp11 = __initData4(Button, obj3);
      cResult[8] = ctaText;
      cResult[9] = tmp4;
      cResult[10] = disabled;
      cResult[11] = loading;
      cResult[12] = tmp6;
      cResult[13] = tmp11;
      tmp7 = tmp11;
    }
    class T {
      constructor() {
        obj = { shouldRedirectToMobileWeb: closure_1 };
        return onStartPayment(obj);
      }
    }
    cResult[5] = onStartPayment;
    cResult[6] = shouldUseMobileWebRedirectCheckout;
    cResult[7] = T;
    tmp6 = T;
  }
}) : ((isPaymentSuccess) => {
  let closure_129_0;
  let intl;
  let shouldUseMobileWebRedirectCheckout;
  ({ onStartPayment: closure_129_0, shouldUseMobileWebRedirectCheckout } = isPaymentSuccess);
  if (isPaymentSuccess.isPaymentSuccess) {
    const obj2 = { text: intl.string(intl9.t.WAI6xu), size: "md", grow: true, onPress: tmp };
    const Button2 = components_Button_Button.Button;
    intl = intl9.intl;
    return __initData4(Button2, obj2);
  } else {
    let obj = {
      text: tmp2,
      grow: true,
      onPress() {
          const obj = { shouldRedirectToMobileWeb: shouldUseMobileWebRedirectCheckout };
          return closure_1_0(obj);
        },
      loading: tmp4,
      disabled: tmp3
    };
    const tmp5 = shouldUseMobileWebRedirectCheckout ? { size: "lg", variant: "primary" } : { size: "md", variant: "active" };
    const Button = components_Button_Button.Button;
    const merged = Object.assign(tmp5);
    return __initData4(Button, obj);
  }
});
function getItemsByPremiumTypePredicate(arg0) {
  let closure_0 = arg0;
  return (additionalPlans) => {
    let numPremiumGuild;
    let premiumTier;
    let tmp = 0 === additionalPlans.additionalPlans.length;
    ({ numPremiumGuild, premiumTier } = additionalPlans);
    if (tmp) {
      tmp = !additionalPlans.isDeprecated;
    }
    if (tmp) {
      tmp = 0 === numPremiumGuild;
    }
    if (tmp) {
      tmp = premiumTier === TIER_2;
    }
    return tmp;
  };
}
size = size_mod;
let result = size.fileFinishedImporting("modules/premium/native/PremiumPlanSelectionActionSheet.tsx");

export default function PremiumPlanSelectionActionSheetWithOrderCTX(predicate) {
  let GOOGLE;
  let mapped;
  let obj4;
  let obj7;
  let premiumBundlesWithPredicate;
  let tmp4;
  let tmpResult10;
  const NitroACOMSubscriptionExperiment = ACOMExperiments.NitroACOMSubscriptionExperiment;
  const enabled = NitroACOMSubscriptionExperiment.useConfig({ location: "PremiumPlanSelectionActionSheetWithOrderCTX" }).enabled;
  let obj = PlatformUtils;
  if (obj.isIOS()) {
    let APPLE;
    let tmp5;
    if (enabled) {
      APPLE = __initData3.APPLE_ADVANCED_COMMERCE;
      tmp5 = __initData3;
    } else {
      APPLE = __initData3.APPLE;
      tmp5 = __initData3;
    }
    tmp4 = tmp5;
    GOOGLE = APPLE;
  } else {
    GOOGLE = __initData3.GOOGLE;
    tmp4 = __initData3;
  }
  let fn = predicate.predicate;
  if (undefined === fn) {
    TIER_2 = predicate.premiumType;
    if (TIER_2 == null) {
      TIER_2 = TIER_2.TIER_2;
    }
    fn = (additionalPlans) => {
      let numPremiumGuild;
      let premiumTier;
      let tmp = 0 === additionalPlans.additionalPlans.length;
      ({ numPremiumGuild, premiumTier } = additionalPlans);
      if (tmp) {
        tmp = !additionalPlans.isDeprecated;
      }
      if (tmp) {
        tmp = 0 === numPremiumGuild;
      }
      if (tmp) {
        tmp = premiumTier === TIER_2;
      }
      return tmp;
    };
  }
  let fn2 = predicate.initialSelectedCriteria;
  if (undefined === fn2) {
    fn2 = (interval) => interval.interval === constants.YEAR;
  }
  let fn3 = predicate.sortFn;
  if (undefined === fn3) {
    fn3 = (interval, interval2) => interval2.interval - interval.interval;
  }
  const tmp8 = _objectWithoutProperties(predicate, closure_3);
  const tmpResult = usePremiumTrialOffer;
  const premiumTrialOffer = tmpResult.usePremiumTrialOffer();
  const premiumType = predicate.premiumType;
  let tmp10 = null != premiumTrialOffer && null != premiumType;
  if (tmp10) {
    const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
    let skuId;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
    const obj3 = PremiumUtilsDefault;
    tmp10 = skuId === obj3.getSkuIdForPremiumType(premiumType);
  }
  let tmp13;
  if (tmp10) {
    let obj2 = { subscription_preview: obj4 };
    tmp13 = obj2;
    obj4 = { subscription_trial_id: premiumTrialOffer.trialId };
  }
  const tmpResult6 = useIsEligibleForBogoOffer;
  const isEligibleForBogoOffer = tmpResult6.useIsEligibleForBogoOffer();
  if (null == fn3) {
    const tmpResult7 = PremiumBundledPlansUtils;
    premiumBundlesWithPredicate = tmpResult7.getPremiumBundlesWithPredicate(fn);
  } else {
    const tmpResult8 = PremiumBundledPlansUtils;
    const premiumBundlesWithPredicate1 = tmpResult8.getPremiumBundlesWithPredicate(fn);
    premiumBundlesWithPredicate = premiumBundlesWithPredicate1.sort(fn3);
  }
  if (isEligibleForBogoOffer) {
    fn2 = (interval) => interval.interval === constants.MONTH;
  }
  const found = premiumBundlesWithPredicate.find(fn2);
  if (null != found) {
    const tmpResult9 = PremiumBundledPlansUtils;
    const subscriptionItemsForProduct = tmpResult9.getSubscriptionItemsForProduct(found.productId);
    mapped = subscriptionItemsForProduct.map((planId) => {
      let castPremiumSubscriptionAsSkuId;
      let obj2;
      const obj = { subscriptionPlanId: planId.planId, skuId: castPremiumSubscriptionAsSkuId(obj2.getSkuIdForPlan(planId.planId)), quantity: planId.quantity };
      castPremiumSubscriptionAsSkuId = PremiumUtils.castPremiumSubscriptionAsSkuId;
      PremiumUtils;
      obj2 = PremiumUtilsDefault;
      return obj;
    });
  } else {
    const obj5 = { subscriptionPlanId: closure_21.PREMIUM_YEAR_TIER_2, skuId: tmpResult10.castPremiumSubscriptionAsSkuId(TIER_22.TIER_2), quantity: 1 };
    mapped = [obj5];
    tmpResult10 = PremiumUtils;
  }
  const obj6 = {
    paymentGateway: GOOGLE,
    orderRequired: GOOGLE === tmp4.APPLE_ADVANCED_COMMERCE,
    skuIds: [],
    defaultPlans: mapped,
    isGift: false,
    activeSubscription: null,
    initialSubscriptionFacet: tmp13,
    onOrderRetryCancellation() {
      const obj = ActionSheetActionCreatorsDefault;
      return obj.hideActionSheet(closure_1_24);
    },
    children: __initData4(PremiumPlanSelectionActionSheet, obj7)
  };
  obj7 = { premiumItems: premiumBundlesWithPredicate, userIsEligibleForBogoPromotion: isEligibleForBogoOffer, initialSelectedItem: found };
  const tmp18 = NativeCheckoutStoreProviderDefault;
  const merged = Object.assign(tmp8);
  return __initData4(tmp18, obj6);
};
export { getItemsByPremiumTypePredicate };