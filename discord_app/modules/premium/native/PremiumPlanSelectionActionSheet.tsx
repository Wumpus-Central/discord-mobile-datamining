// === Module 6929: PremiumPlanSelectionActionSheet ===

// Module 6929 (PremiumPlanSelectionActionSheet)
import _modDef38 from "module_38" /* 38 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import NumberUtils from "NumberUtils" /* 1888 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import PremiumUtils from "PremiumUtils" /* 4528 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import setAccessibilityFocus from "setAccessibilityFocus" /* 5779 */;
import MobileWebRedirectCheckoutUtils from "MobileWebRedirectCheckoutUtils" /* 6912 */;
import PremiumBundledPlansUtils from "PremiumBundledPlansUtils" /* 6915 */;
import PremiumPlanActionSheetHeaderDefault from "PremiumPlanActionSheetHeader" /* 6937 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 6956 */;
import ACOMExperiments from "ACOMExperiments" /* 8870 */;
import useIsEligibleForBogoOffer from "useIsEligibleForBogoOffer" /* 10439 */;
import NativeCheckoutStoreProviderDefault from "NativeCheckoutStoreProvider" /* 10538 */;
import PaymentFlowStartedTriggerPoint from "PaymentFlowStartedTriggerPoint" /* 10539 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import IAPStore from "IAPStore" /* 6739 */;

const PremiumUtilsDefault = PremiumUtils;

require = fn;
function renderPlanOptionBadge(arg0) {
  ({ customBadgeComponent, discount } = arg0);
  if (null == customBadgeComponent) {
    if (tmp3) {
      customBadgeComponent = null;
    } else if (tmp2) {
      const obj2 = { text: null };
      const intl2 = util.intl;
      obj2.text = intl2.string(util.t.iQTfWx);
      let tmp4 = __initData8(closure_40, obj2);
    } else if (null != discount) {
      const obj = { text: null };
      const intl = util.intl;
      const obj4 = { discount: NumberUtils.formatPercent(tmp, discount / 100) };
      obj.text = intl.format(util.t.IAybsG, obj4);
      tmp4 = __initData8(closure_40, obj);
    }
  }
  return customBadgeComponent;
}
function PremiumPlanSelectionActionSheet(premiumItems) {
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
  closure_17 = undefined;
  discountedPriceString = undefined;
  first = undefined;
  closure_20 = undefined;
  closure_21 = undefined;
  let analyticsLocations2;
  closure_23 = undefined;
  let memo;
  let basePurchaseFlowAnalyticsFields;
  let basePlanId;
  constants3 = undefined;
  let onDismiss;
  let callback1;
  let memo1;
  TitleStyleType = async function _onPlanSelectionChange(arg0) {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
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
            closure_1 = tmp7;
            closure_129_0 = closure_0;
            closure_129_1 = undefined;
            if (!ref.current) {
              if (!isPatchOrderLoading) {
                find = find.find;
                const found = find((productId) => productId.productId === closure_1_0);
                closure_129_1 = found;
                if (null != found) {
                  if (found !== first) {
                    find = closure_0(tmp3[52]).getSubscriptionItemsForProduct(tmp35);
                    ref.current = true;
                    c4 = 1;
                    const obj5 = closure_0(tmp3[52]);
                  }
                  c5 = 2;
                  c6 = 1;
                  const obj4 = {
                    value: state(find.map((planId) => {
                                    const obj = { sku_id: null, subscription_plan_id: null, quantity: null, purchase_type: null };
                                    const obj2 = closure_1_0(4528);
                                    obj.sku_id = obj2.castPremiumSubscriptionAsSkuId(closure_1_1(4528).getSkuIdForPlan(planId.planId));
                                    ({ planId: obj.subscription_plan_id, quantity: obj.quantity } = planId);
                                    obj.purchase_type = constants.SUBSCRIPTION;
                                    return obj;
                                  })),
                    done: false
                  };
                  return obj4;
                }
              }
            }
            c6 = 3;
          }
        } else if (1 === tmp7) {
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
          let obj = { value, done: true };
          return obj;
        } else if (null == value) {
          c4 = 0;
          closure_130_21.current = false;
          c6 = 3;
          return { value: "IconComponent", done: "IconComponent" };
        }
        closure_130_20(closure_129_1);
        c4 = 0;
        closure_130_21.current = false;
      } catch (tmp25) {
        closure_3 = tmp25;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp25;
        } else {
          c5 = tmp;
        }
      }
    }
  };
  let tmp = closure_38();
  _slicedToArray = tmp;
  const tmp2 = orderRequired((isPaymentSuccess) => isPaymentSuccess.isPaymentSuccess);
  noop = tmp2;
  let tmp3 = orderRequired((productId) => productId.productId);
  const product_id = tmp3;
  const tmp6 = premiumItems;
  const tmp4 = orderRequired((mobileWebRedirectCheckoutStatus) => mobileWebRedirectCheckoutStatus.mobileWebRedirectCheckoutStatus);
  const items = [handlePremiumPurchase];
  let stateFromStores = require("initialize").useStateFromStores(items, () => handlePremiumPurchase.isBusy());
  let obj = require("initialize");
  const tmp7 = handlePremiumPurchase;
  const isScreenReaderEnabled = require("useIsScreenReaderEnabled").useIsScreenReaderEnabled();
  noop.useRef(null);
  const ref = noop.useRef(null);
  const items1 = [tmp2];
  const effect = noop.useEffect(() => {
    if (closure_7) {
      const _Date = Date;
      closure_11.current = Date.now();
    }
  }, items1);
  const items2 = [tmp2, isScreenReaderEnabled];
  const effect1 = noop.useEffect(() => {
    let tmp = closure_7;
    if (closure_7) {
      tmp = isScreenReaderEnabled;
    }
    if (tmp) {
      const obj2 = { ref, delay: 100 };
      const result = setAccessibilityFocus.setAccessibilityFocus(obj2);
    }
  }, items2);
  let obj2 = require("useIsScreenReaderEnabled");
  handlePremiumPurchase = require("handlePremiumPurchase").useHandlePremiumPurchase();
  let obj4 = require("handlePremiumPurchase");
  const isPaymentsBlocked = require("BlockedPaymentsCountryExperiment").useIsPaymentsBlocked();
  const tmp16 = premiumType(premiumItems[33])();
  const tmp17 = ref((orderRecord) => orderRecord.orderRecord);
  closure_13 = tmp17;
  let obj5 = require("BlockedPaymentsCountryExperiment");
  ({ patchOrderLineItems: c14, isPatchOrderLoading, orderRequired } = ref((patchOrderLineItems) => ({ patchOrderLineItems: patchOrderLineItems.patchOrderLineItems, isPatchOrderLoading: patchOrderLineItems.isPatchOrderLoading, orderRequired: patchOrderLineItems.orderRequired })));
  if (!isPatchOrderLoading) {
    isPatchOrderLoading = ref((isCreateOrderLoading) => isCreateOrderLoading.isCreateOrderLoading);
  }
  const tmp18 = ref((patchOrderLineItems) => ({ patchOrderLineItems: patchOrderLineItems.patchOrderLineItems, isPatchOrderLoading: patchOrderLineItems.isPatchOrderLoading, orderRequired: patchOrderLineItems.orderRequired }));
  const premiumTrialOffer = require("usePremiumTrialOffer").usePremiumTrialOffer();
  const tmp5Result = require("usePremiumTrialOffer");
  const premiumDiscountOffer = require("usePremiumDiscountOffer").usePremiumDiscountOffer();
  let tmp21 = null != premiumTrialOffer && null != premiumType;
  if (tmp21) {
    const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
    let skuId;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
    tmp21 = skuId === premiumType(tmp6[17]).getSkuIdForPremiumType(premiumType);
    const tmp15Result = premiumType(tmp6[17]);
  }
  let tmp23 = tmp21;
  if (tmp23) {
    let tmp24 = !orderRequired;
    if (orderRequired) {
      let subscriptionTrialId;
      if (tmp17 != null) {
        const subscriptionFacet = tmp17.subscriptionFacet;
        if (subscriptionFacet != null) {
          const subscriptionPreview = subscriptionFacet.subscriptionPreview;
          if (subscriptionPreview != null) {
            subscriptionTrialId = subscriptionPreview.subscriptionTrialId;
          }
        }
      }
      tmp24 = premiumTrialOffer.trialId === subscriptionTrialId;
    }
    tmp23 = tmp24;
  }
  closure_17 = tmp23;
  const tmp5Result13 = require("usePremiumDiscountOffer");
  const discountedPremiumProductInfo = require("useDiscountedPremiumProductInfo").useDiscountedPremiumProductInfo(premiumDiscountOffer, premiumItems);
  ({ discountedPlan, discountedProduct, discountedPriceString } = discountedPremiumProductInfo);
  const tmp5Result14 = require("useDiscountedPremiumProductInfo");
  let productId;
  if (discountedPlan != null) {
    productId = discountedPlan.productId;
  }
  let obj6 = { discountedPriceString, regularPriceString: null };
  let priceString;
  if (discountedProduct != null) {
    priceString = discountedProduct.priceString;
  }
  obj6.regularPriceString = priceString;
  const checkoutPlanDiscountPrices = require("useCheckoutPlanPriceString").useCheckoutPlanDiscountPrices(productId, obj6);
  [first, closure_20] = noop.useState(initialSelectedItem);
  closure_21 = obj3.useRef(false);
  const tmp5Result15 = require("useCheckoutPlanPriceString");
  const items3 = [tmp7];
  const stateFromStores1 = require("initialize").useStateFromStores(items3, () => {
    let product = null;
    if (null != first) {
      product = IAPStore.getProduct(tmp.productId);
    }
    return product;
  });
  const tmp5Result16 = require("initialize");
  const tmp5Result17 = require("useBottomSheetRef");
  analyticsLocations2 = premiumType(tmp6[38])(analyticsLocations, premiumType(tmp6[39]).PREMIUM_PAYMENT_ACTION_SHEET).analyticsLocations;
  const tmp34 = premiumType(tmp6[40])(() => require("PremiumAnalyticsUtils").getNewAnalyticsLoadId());
  closure_23 = tmp34;
  const items4 = [premiumType];
  memo = obj3.useMemo(() => {
    const obj = PremiumUtils;
    return obj.castPremiumSubscriptionAsSkuId(PremiumUtilsDefault.getSkuIdForPremiumType(premiumType));
  }, items4);
  const tmp15Result8 = premiumType(tmp6[38]);
  let obj7 = { analyticsLoadId: tmp34, analyticsLocation: null, analyticsLocations: null };
  let merged = Object.assign(analyticsLocation);
  obj7.analyticsLocation = { object: basePlanId.BUTTON_CTA, object_type: constants3.BUY };
  obj7.analyticsLocations = analyticsLocations2;
  basePurchaseFlowAnalyticsFields = require("PremiumAnalyticsUtils").getBasePurchaseFlowAnalyticsFields(obj7);
  basePlanId = null;
  if (null != first) {
    basePlanId = first.basePlanId;
  }
  let obj8 = { object: basePlanId.BUTTON_CTA, object_type: constants3.BUY };
  const tmp5Result18 = require("PremiumAnalyticsUtils");
  let result = require("MobileWebRedirectCheckoutUtils").isMobileWebRedirectCheckoutEnabled();
  constants3 = result;
  premiumType(tmp6[43])(() => {
    const obj2 = {};
    const merged = Object.assign(basePurchaseFlowAnalyticsFields);
    obj2.application_id = application_id;
    obj2.subscription_plan_id = basePlanId;
    obj2.sku_id = memo;
    let customCheckoutFlowForAnalytics;
    if (c27) {
      customCheckoutFlowForAnalytics = MobileWebRedirectCheckoutUtils.getCustomCheckoutFlowForAnalytics();
      const tmpResult = MobileWebRedirectCheckoutUtils;
    }
    obj2.custom_checkout_flow = customCheckoutFlowForAnalytics;
    const result = PaymentFlowStartedTriggerPoint.trackPaymentFlowStartedAnalyticsAndCTP(obj2);
  });
  const items5 = [tmp2, tmp3];
  onDismiss = obj3.useCallback(() => {
    let tmp = closure_7;
    if (closure_7) {
      tmp = null != ref.current;
    }
    if (tmp) {
      const obj2 = { product_id, duration_ms: null };
      const _Date = Date;
      obj2.duration_ms = Date.now() - ref.current;
      AnalyticsUtilsDefault.track(constants2.PREMIUM_ACTIVATED_SHEET_DISMISSED, obj2);
    }
    value2();
  }, items5);
  const items6 = [onDismiss];
  callback1 = obj3.useCallback(() => {
    callback();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items6);
  const items7 = [memo, basePurchaseFlowAnalyticsFields, tmp34, analyticsLocations2, handlePremiumPurchase, result, callback1, onPaymentDismiss, onPaymentStart, onPaymentSuccess, tmp17, first];
  const items8 = [tmp23, result];
  const callback2 = obj3.useCallback(onPaymentDismiss(function*() {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            premiumType = tmp7;
            closure_129_0 = undefined;
            let obj8 = closure_0;
            if (closure_0 === undefined) {
              obj8 = { shouldRedirectToMobileWeb: false };
            }
            closure_129_0 = obj8.shouldRedirectToMobileWeb;
            basePlanId = undefined;
            closure_129_2 = undefined;
            closure_129_3 = undefined;
            let paymentFlowStepAnalyticsFields;
            c5 = 1;
            c6 = 1;
            return { value: "Reflect", done: true };
          }
        } else {
          if (1 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              premiumType(tmp3[22])(null != closure_130_19, "cannot start payment without a selectedItem");
              basePlanId = closure_130_19.basePlanId;
              let tmp33 = closure_130_27;
              if (closure_130_27) {
                tmp33 = closure_129_0;
              }
              closure_129_2 = tmp33;
              const PaymentFlowStep = closure_0(tmp3[41]).PaymentFlowStep;
              if (closure_129_2) {
                let EXTERNAL_PAYMENT = PaymentFlowStep.MOBILE_WEB_REDIRECT_CHECKOUT;
              } else {
                EXTERNAL_PAYMENT = PaymentFlowStep.EXTERNAL_PAYMENT;
              }
              closure_129_3 = EXTERNAL_PAYMENT;
              const obj10 = { from_step: closure_0(tmp3[41]).PaymentFlowStep.PLAN_SELECT, to_step: closure_129_3, subscription_plan_gateway_plan_id: closure_130_19.productId, sku_id: closure_130_24 };
              paymentFlowStepAnalyticsFields = closure_0(tmp3[41]).getPaymentFlowStepAnalyticsFields(closure_130_25, obj10);
              if (!closure_129_2) {
                premiumType(tmp3[45]).track(constants.PAYMENT_FLOW_STEP, paymentFlowStepAnalyticsFields);
                const obj7 = premiumType(tmp3[45]);
              }
              const obj12 = { productId: closure_130_19.productId, onPaymentStart: closure_130_3, onPaymentSuccess: closure_130_4, onPaymentDismiss: closure_130_5 };
              closure_1_13(obj12);
              if (closure_129_2) {
                const obj11 = closure_0(tmp3[47]);
                const obj13 = { planId: basePlanId, isGift: false, loadId: closure_130_23 };
                const result = obj11.goToStandalonePremiumCheckoutFromMobileApp("premium_plan_selection_action_sheet", obj13, () => {
                  if (obj.isMetaQuest()) {
                    callback1();
                  } else {
                    c14("in_mobile_web");
                    premiumType(premiumItems[45]).track(basePurchaseFlowAnalyticsFields.PAYMENT_FLOW_STEP, closure_1_4);
                    const obj2 = premiumType(premiumItems[45]);
                  }
                  obj = require("MetaQuestUtils");
                }, () => {
                  const obj2 = { title: null, body: null, hideActionSheet: true };
                  const intl = closure_1_0(1126).intl;
                  obj2.title = intl.string(closure_1_0(1126).t.NrBVjw);
                  const intl2 = closure_1_0(1126).intl;
                  obj2.body = intl2.string(closure_1_0(1126).t["gD+grx"]);
                  closure_1_1(5708).show(obj2);
                });
              } else {
                c4 = 1;
                const obj14 = { productId: closure_130_19.productId, analyticsLocation: closure_130_25.location, analyticsLoadId: closure_130_23, analyticsLocations: closure_130_22, orderId: null };
                let id;
                if (closure_130_13 != null) {
                  id = closure_130_13.id;
                }
                obj14.orderId = id;
                c5 = 3;
                c6 = 1;
                const obj15 = { value: closure_130_12(obj14), done: false };
                return obj15;
              }
              const obj5 = closure_0(tmp3[41]);
            }
          } else {
            if (2 === tmp7) {
              c4 = 0;
              closure_129_5 = closure_3;
              if (closure_129_5 instanceof premiumType(tmp3[50])) {
                const subscriptions = closure_0(tmp3[51]).fetchSubscriptions();
                let obj2 = closure_0(tmp3[51]);
                const obj16 = { title: null, body: null, hideActionSheet: true };
                let intl = closure_0(tmp3[20]).intl;
                obj16.title = intl.string(closure_0(tmp3[20]).t["U+H+kd"]);
                let intl2 = closure_0(tmp3[20]).intl;
                obj16.body = intl2.string(closure_0(tmp3[20]).t.F9ktNa);
                premiumType(tmp3[49]).show(obj16);
                const obj3 = premiumType(tmp3[49]);
              } else {
                throw closure_129_5;
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 !== 2) {
              c4 = 0;
            }
            c4 = 0;
            c6 = 3;
            let obj = { value, done: true };
            return obj;
          }
          c6 = 3;
        }
      } catch (tmp82) {
        closure_3 = tmp82;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp82;
        } else {
          c5 = tmp;
        }
      }
    }
  }), items7);
  memo1 = obj3.useMemo(() => {
    if (c27) {
      const intl3 = util.intl;
      let stringResult = intl3.string(util.t.rylrdY);
    } else if (closure_17) {
      const tmp2Result = PlatformUtils;
      const intl2 = util.intl;
      const string = intl2.string;
      let rKD72m = util.t;
      if (isAndroidResult) {
        rKD72m = rKD72m.rKD72m;
        let stringResult1 = string(rKD72m);
      } else {
        stringResult1 = string(rKD72m.bboTul);
      }
      isAndroidResult = PlatformUtils.isAndroid();
    } else {
      const intl = util.intl;
      stringResult = intl.string(util.t.nIlrxd);
    }
    return stringResult;
  }, items8);
  const items9 = [tmp2, first, tmp23, discountedPriceString, memo1, tmp.legalDisclaimerText];
  const memo2 = obj3.useMemo(() => {
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
        const obj2 = { style: selectedPremiumType.legalDisclaimerText, variant: "text-xxs/medium", children: null };
        const intl3 = util.intl;
        const t = util.t;
        const obj4 = { paidURL: constants4.PAID_TERMS, interval: null, cancelURL: null };
        const isAndroidResult = PlatformUtils.isAndroid();
        const tmp42 = PlatformUtils.isAndroid() ? t.tINI9V : t.ZWXtAj;
        obj4.interval = PremiumUtilsDefault.getIntervalStringAsNoun(interval);
        obj4.cancelURL = HelpdeskUtilsDefault.getArticleURL(constants5.PREMIUM_DETAILS_CANCEL_SUB);
        obj2.children = intl3.format(tmp42, obj4);
        return __initData8(Text_Text.Text, obj2);
      } else if (null != discountedPriceString) {
        const obj5 = { style: selectedPremiumType.legalDisclaimerText, variant: "text-xxs/medium", children: null };
        const intl2 = util.intl;
        const obj9 = { buttonText: memo1, interval: PremiumUtilsDefault.formatInterval(interval), cancelSubscriptionArticle: null, paidServiceTermsArticle: null };
        obj9.cancelSubscriptionArticle = HelpdeskUtilsDefault.getArticleURL(constants5.PREMIUM_DETAILS_CANCEL_SUB);
        obj9.paidServiceTermsArticle = HelpdeskUtilsDefault.getArticleURL(constants5.PAID_TERMS);
        obj5.children = intl2.format(util.t["3uC7vj"], obj9);
        return __initData8(Text_Text.Text, obj5);
      } else {
        const t2 = util.t;
        const isAndroidResult1 = PlatformUtils.isAndroid();
        const obj = { style: selectedPremiumType.legalDisclaimerText, variant: "text-xxs/medium", children: null };
        const intl = util.intl;
        const obj11 = { paidURL: constants4.PAID_TERMS, interval: null, ctaText: null };
        const tmp3 = PlatformUtils.isAndroid() ? t2.COObWR : t2["7wpqfj"];
        obj11.interval = PremiumUtilsDefault.getIntervalStringAsNoun(interval);
        obj11.ctaText = memo1;
        obj.children = intl.format(tmp3, obj11);
        return __initData8(Text_Text.Text, obj);
      }
    }
  }, items9);
  let obj9 = { ref: tmp5Result17.useBottomSheetRef().bottomSheetRef, handleDisabled: true, onDismiss, startExpanded: true, children: null };
  if (isPaymentsBlocked) {
    let obj10 = { style: tmp.blockedPaymentContainer, children: null };
    const items10 = [closure_35(premiumType(tmp6[63]), {}), ];
    let obj11 = { variant: "floating", onPress: callback1 };
    items10[1] = closure_35(require("ActionSheetHeaderBar").ActionSheetHeaderBar, obj11);
    obj10.children = items10;
    let tmp47Result = closure_36(product_id, obj10);
  } else {
    let obj12 = { premiumType, isPaymentSuccess: tmp2, selectedPremiumType: null, trialOffer: null, discountOffer: null };
    let premiumTier;
    if (first != null) {
      premiumTier = first.premiumTier;
    }
    obj12.selectedPremiumType = premiumTier;
    obj12.trialOffer = premiumTrialOffer;
    let tmp51 = null;
    if (null != discountedPriceString) {
      tmp51 = premiumDiscountOffer;
    }
    obj12.discountOffer = tmp51;
    const items11 = [closure_35(closure_39, obj12), , ];
    let obj13 = { style: tmp.body, children: null };
    if ("in_mobile_web" === tmp4) {
      let obj14 = { size: "large", style: tmp.loadingIndicator };
      let tmp47Result3 = closure_35(isScreenReaderEnabled, obj14);
    } else if (tmp2) {
      let obj15 = { style: tmp.contentActivated, children: null };
      let obj16 = { ref, accessible: true, accessibilityRole: "image", accessibilityLabel: null, children: null };
      const intl5 = require("util").intl;
      obj16.accessibilityLabel = intl5.string(require("util").t["Q+BB2w"]);
      let premiumTier1;
      if (first != null) {
        premiumTier1 = first.premiumTier;
      }
      if (first.TIER_0 === premiumTier1) {
        if (tmp5Result20.isThemeDark(tmp16)) {
          let tmp15Result10 = premiumType(tmp6[54]);
        } else {
          tmp15Result10 = premiumType(tmp6[55]);
        }
        tmp5Result20 = require("shared");
      } else {
        if (tmp73.TIER_1 === premiumTier1) {
          if (tmp5Result21.isThemeDark(tmp16)) {
            let tmp15Result11 = premiumType(tmp6[56]);
          } else {
            tmp15Result11 = premiumType(tmp6[57]);
          }
          let tmp74 = tmp15Result11;
          tmp5Result21 = require("shared");
        } else if (tmp73.TIER_2 === premiumTier1) {
          if (tmp5Result22.isThemeDark(tmp16)) {
            let tmp15Result12 = premiumType(tmp6[58]);
          } else {
            tmp15Result12 = premiumType(tmp6[59]);
          }
          tmp74 = tmp15Result12;
          tmp5Result22 = require("shared");
        }
        const obj17 = { source: tmp74 };
        obj16.children = closure_35(tmp15Result9, obj17);
        const items12 = [closure_35(tmp52, obj16), ];
        let obj18 = { style: tmp.contentActivatedText, variant: "text-md/semibold", children: null };
        let premiumTier2;
        if (first != null) {
          premiumTier2 = first.premiumTier;
        }
        if (tmp73.TIER_0 === premiumTier2) {
          const intl7 = require("util").intl;
          let stringResult = intl7.string(require("util").t["6WWrVM"]);
          obj18.children = stringResult;
          obj18 = closure_35(require("Text/Text").Text, obj18);
          items12[1] = obj18;
          obj15.children = items12;
          closure_36(tmp52, obj15);
        } else if (tmp73.TIER_1 !== premiumTier2) {
          if (tmp73.TIER_2 === premiumTier2) {
            const intl8 = require("util").intl;
            stringResult = intl8.string(require("util").t.I7xNzI);
          }
        }
        const intl6 = require("util").intl;
        stringResult = intl6.string(require("util").t.LAAgsy);
      }
      tmp15Result9 = premiumType(tmp6[65]);
    } else {
      const obj19 = { convertToMajorUnits: require("PlatformUtils").isAndroid() };
      if (flag) {
        flag = !tmp23;
      }
      const obj20 = { style: tmp.contentSelectPlan, children: null };
      if (tmp23) {
        const obj21 = { variant: "text-md/normal", color: "text-strong", style: tmp.trialDisclaimer, children: null };
        let intl2 = require("util").intl;
        obj21.children = intl2.string(require("util").t.u95Dt4);
        let tmp46Result3 = closure_35(require("Text/Text").Text, obj21);
      } else {
        tmp46Result3 = null;
        if (null != checkoutPlanDiscountPrices) {
          tmp46Result3 = null;
          if (null != premiumType) {
            const obj22 = { children: null };
            const obj23 = { variant: "text-md/normal", color: "text-strong", style: tmp.discountDisclaimer, children: null };
            let intl = require("util").intl;
            obj23.children = intl.format(require("util").t.yBn7uz, checkoutPlanDiscountPrices);
            const items13 = [closure_35(require("Text/Text").Text, obj23), ];
            const obj24 = { style: null };
            const items14 = [, ];
            ({ divider: arr14[0], offerDividerMargin: arr14[1] } = tmp);
            obj24.style = items14;
            items13[1] = closure_35(tmp52, obj24);
            obj22.children = items13;
            tmp46Result3 = closure_36(tmp52, obj22);
          }
        }
      }
      const items15 = [tmp46Result3, ];
      let stringResult1;
      const tmp5Result23 = require("PlatformUtils");
      if (flag) {
        let intl3 = require("util").intl;
        stringResult1 = intl3.string(require("util").t.u95Dt4);
      }
      const obj25 = { title: stringResult1, titleStyleType: TitleStyleType.NO_BORDER_OR_MARGIN, titleViewStyle: tmp.formTitle, sectionBodyStyle: null, inset: true, children: null };
      const items16 = [tmp.formSectionBody, ];
      let formSectionBodyWithNoTitle = !flag;
      if (!flag) {
        formSectionBodyWithNoTitle = tmp.formSectionBodyWithNoTitle;
      }
      items16[1] = formSectionBodyWithNoTitle;
      obj25.sectionBodyStyle = items16;
      let tmp46Result4 = null != stateFromStores1;
      if (tmp46Result4) {
        tmp46Result4 = "HR" === stateFromStores1.countryCode;
      }
      if (tmp46Result4) {
        tmp46Result4 = stateFromStores1.currencyCode.toLowerCase() === constants6.EUR;
      }
      if (tmp46Result4) {
        const obj26 = { message: null };
        const intl4 = require("util").intl;
        const obj27 = { kunaPriceWithCurrency: null };
        const tmp15Result14 = premiumType(tmp6[67]);
        obj27.kunaPriceWithCurrency = require("PriceUtils").formatPrice(stateFromStores1.price * memo1, constants6.HRK, obj19);
        obj26.message = intl4.formatToPlainString(require("util").t["9hnZoK"], obj27);
        tmp46Result4 = closure_35(tmp15Result14, obj26);
        const tmp5Result24 = require("PriceUtils");
      }
      const items17 = [tmp46Result4, ];
      let str4 = "auto";
      let str5 = "auto";
      if (isPatchOrderLoading) {
        str5 = "none";
      }
      const obj28 = { pointerEvents: str5, accessibilityElementsHidden: isPatchOrderLoading, importantForAccessibility: null, style: null, children: null };
      if (isPatchOrderLoading) {
        str4 = "no-hide-descendants";
      }
      obj28.importantForAccessibility = str4;
      let planOptionsBusy = null;
      if (isPatchOrderLoading) {
        planOptionsBusy = tmp.planOptionsBusy;
      }
      obj28.style = planOptionsBusy;
      let productId1;
      if (first != null) {
        productId1 = first.productId;
      }
      const obj29 = { value: productId1, options: null, onChange: null, withDividers: false, style: null, disabled: null, indicatorLeft: true };
      let productId2;
      if (first != null) {
        productId2 = first.productId;
      }
      let identifier;
      if (discountedProduct != null) {
        identifier = discountedProduct.identifier;
      }
      closure_129_0 = productId2;
      closure_129_1 = premiumTrialOffer;
      closure_129_2 = premiumDiscountOffer;
      closure_129_3 = identifier;
      closure_129_4 = discountedPriceString;
      closure_129_5 = userIsEligibleForBogoPromotion;
      closure_129_6 = premiumType;
      const _Set = Set;
      const set = new Set(premiumItems.map((premiumTier) => premiumTier.premiumTier));
      closure_129_7 = set.size > 1;
      obj29.options = premiumItems.map((premiumItem) => {
        const obj = { premiumItem, selectedProductId, optionNeedsProductNameLabel, trialOffer: premiumType, discountOffer: premiumItems, discountedPriceString: null, userIsEligibleForBogoPromotion: null, selectedPremiumType: null };
        let tmp3 = null;
        if (premiumItem.productId === onPaymentStart) {
          tmp3 = onPaymentSuccess;
        }
        obj.discountedPriceString = tmp3;
        obj.userIsEligibleForBogoPromotion = onPaymentDismiss;
        obj.selectedPremiumType = selectedPremiumType;
        return { name: __initData8(closure_42, obj), value: premiumItem.productId };
      });
      obj29.onChange = function onChange(value) {
        return (function onPlanSelectionChange(value) {
          const self = this;
          const apply = closure_1_30.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })(value.value);
      };
      obj29.style = tmp.planOptionRowContainer;
      obj29.disabled = stateFromStores;
      obj28.children = closure_35(require("native").RadioGroup, obj29);
      items17[1] = closure_35(tmp52, obj28);
      obj25.children = items17;
      items15[1] = closure_36(premiumType(tmp6[66]), obj25);
      obj20.children = items15;
      const items18 = [closure_36(tmp52, obj20), ];
      const obj30 = { isPaymentSuccess: tmp2, onClose: callback1, ctaText: memo1, onStartPayment: callback2, shouldUseMobileWebRedirectCheckout: result, disabled: null, loading: null };
      let tmp83 = stateFromStores;
      if (!stateFromStores) {
        tmp83 = isPatchOrderLoading;
      }
      obj30.disabled = tmp83;
      if (!stateFromStores) {
        stateFromStores = isPatchOrderLoading;
      }
      const obj31 = { children: null };
      obj30.loading = stateFromStores;
      items18[1] = closure_35(closure_43, obj30);
      obj31.children = items18;
      tmp47Result3 = closure_36(closure_37, obj31);
      const tmp15Result13 = premiumType(tmp6[66]);
    }
    const items19 = [tmp47Result3, ];
    let tmp86 = !result;
    if (!result) {
      tmp86 = memo2;
    }
    const obj32 = { children: null };
    items19[1] = tmp86;
    obj13.children = items19;
    items11[1] = closure_36(product_id, obj13);
    const obj33 = { variant: "floating", onPress: callback1 };
    items11[2] = closure_35(require("ActionSheetHeaderBar").ActionSheetHeaderBar, obj33);
    obj32.children = items11;
    tmp47Result = closure_36(closure_37, obj32);
  }
  obj9.children = tmp47Result;
  return closure_35(require("Sheet/BottomSheet").BottomSheet, obj9);
}
let closure_3 = ["predicate", "initialSelectedCriteria", "sortFn"];
get_ActivityIndicator = fn(17);
({ View: closure_8, ActivityIndicator: closure_9 } = get_ActivityIndicator);
const useNativeCheckoutStore = fn(6930).useNativeCheckoutStore;
const PremiumPlanPurchasedStore = fn(6927);
({ setInitiatedPurchaseFromNewFlow: map1, setMobileWebRedirectCheckoutStatus: closure_14, usePremiumPlanPurchasedStore: closure_15, reset: closure_16 } = PremiumPlanPurchasedStore);
const PremiumConstants = fn(1379);
({ DISCOUNTS: closure_17, PRICE_PLACEHOLDER: closure_18, PremiumTypes: closure_19, SubscriptionIntervalTypes: closure_20, SubscriptionPlans: closure_21, SubscriptionPlanInfo: closure_22, PremiumSubscriptionSKUs: closure_23, PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY: closure_24 } = PremiumConstants);
let Constants = fn(1085);
({ AnalyticEvents: closure_25, AnalyticsObjects: closure_26, AnalyticsObjectTypes: closure_27, MarketingURLs: closure_28, HelpdeskArticles: closure_29 } = Constants);
let TitleStyleType = fn(1192).TitleStyleType;
const PaymentConstants = fn(4869);
({ EUR_TO_HRK_CONVERSION_RATE: items, ItemPurchaseType: closure_32 } = PaymentConstants);
Constants = fn(1096);
({ CurrencyCodes: closure_33, PaymentGateways: closure_34 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_35, jsxs: closure_36, Fragment: closure_37 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { body: { padding: 16 }, headerText: { paddingTop: 30, paddingHorizontal: 20 }, contentSelectPlan: { marginBottom: 16 }, contentActivated: { alignItems: "center", paddingTop: 40, paddingBottom: 56 }, contentActivatedText: { width: 328, marginTop: 16, textAlign: "center" }, formTitle: { paddingTop: 0, paddingLeft: 0 }, formSectionBody: { backgroundColor: "none" }, formSectionBodyWithNoTitle: { marginTop: -24 }, planOptionRowContainer: { paddingHorizontal: 10 }, planOptionsBusy: { opacity: 0.5 }, planOptionContainer: { display: "flex", flexDirection: "row", alignItems: "center" }, planOptionPriceContainer: { flexGrow: 1, flexShrink: 1, display: "flex", flexDirection: "column", alignItems: "flex-end" }, planOptionDiscountContainer: { display: "flex", flexDirection: "row", flexShrink: 1 }, planOptionDiscount: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360, paddingVertical: 2, paddingHorizontal: 8, marginRight: 8 }, planOptionDiscountWhite: null, planOptionDiscountText: null, blockedPaymentContainer: null, legalDisclaimerText: null, divider: null, offerDividerMargin: null, trialDisclaimer: null, discountDisclaimer: null, loadingIndicator: null, discountSubTextContainer: null, priceText: null };
let obj3 = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360, paddingVertical: 2, paddingHorizontal: 8, marginRight: 8 };
obj2.planOptionDiscountWhite = { backgroundColor: nativeDefault.colors.WHITE };
obj2.planOptionDiscountText = { textTransform: "uppercase" };
obj2.blockedPaymentContainer = { marginVertical: 40 };
obj2.legalDisclaimerText = { marginTop: 16 };
let size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.divider = size;
obj2.offerDividerMargin = { marginBottom: 8 };
obj2.trialDisclaimer = { marginBottom: 8 };
obj2.discountDisclaimer = { marginBottom: 20 };
obj2.loadingIndicator = { marginVertical: 30 };
obj2.discountSubTextContainer = { alignItems: "flex-end" };
obj2.priceText = { flexShrink: 1 };
let closure_38 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_39 = ReactCompilerGating.isReactCompilerEnabled() ? ((selectedPremiumType) => {
  const cResult = c.c(8);
  ({ premiumType, isPaymentSuccess, trialOffer, discountOffer } = selectedPremiumType);
  const tmp4 = closure_38();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(orderRequired) {
      return { orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord };
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  ({ orderRequired, orderRecord } = useNativeCheckoutStore(first));
  if (null == premiumType) {
    if (!isPaymentSuccess) {
      const _Symbol = Symbol;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.vLz3Zs);
        cResult[1] = stringResult;
        let tmp7 = stringResult;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] !== tmp4.headerText) {
        const obj2 = { style: tmp4.headerText, variant: "text-md/semibold", color: "text-default", accessibilityRole: "header", children: tmp7 };
        const tmp11 = __initData8(Text_Text.Text, obj2);
        cResult[2] = tmp4.headerText;
        cResult[3] = tmp11;
        let tmp9 = tmp11;
      } else {
        tmp9 = cResult[3];
      }
      return tmp9;
    }
  }
  if (isPaymentSuccess) {
    premiumType = selectedPremiumType.selectedPremiumType;
  }
  _modDef38(null != premiumType, "If isPaymentSuccess is true, a value must be given for selectedPremiumType. Or premiumType must be given.");
  let tmp14 = null != trialOffer && null != premiumType;
  if (tmp14) {
    const subscriptionTrial = trialOffer.subscriptionTrial;
    let skuId;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
    tmp14 = skuId === PremiumUtilsDefault.getSkuIdForPremiumType(premiumType);
    const tmp12Result = PremiumUtilsDefault;
  }
  let tmp16 = tmp14;
  if (tmp16) {
    let tmp17 = !orderRequired;
    if (orderRequired) {
      let subscriptionTrialId;
      if (orderRecord != null) {
        const subscriptionFacet = orderRecord.subscriptionFacet;
        if (subscriptionFacet != null) {
          const subscriptionPreview = subscriptionFacet.subscriptionPreview;
          if (subscriptionPreview != null) {
            subscriptionTrialId = subscriptionPreview.subscriptionTrialId;
          }
        }
      }
      tmp17 = trialOffer.trialId === subscriptionTrialId;
    }
    tmp16 = tmp17;
  }
  let tmp19 = null;
  if (tmp16) {
    tmp19 = trialOffer;
  }
  if (cResult[4] === discountOffer) {
    if (cResult[5] === tmp19) {
      if (cResult[6] === premiumType) {
        let tmp20 = cResult[7];
      }
      return tmp20;
    }
  }
  const tmp21 = __initData8(PremiumPlanActionSheetHeaderDefault, { premiumType, trialOffer: tmp19, discountOffer });
  cResult[4] = discountOffer;
  cResult[5] = tmp19;
  cResult[6] = premiumType;
  cResult[7] = tmp21;
  tmp20 = tmp21;
  const tmp6 = useNativeCheckoutStore(first);
}) : ((arg0) => {
  ({ premiumType, isPaymentSuccess, trialOffer } = arg0);
  ({ selectedPremiumType, discountOffer } = arg0);
  const tmp = closure_38();
  ({ orderRequired, orderRecord } = useNativeCheckoutStore((orderRequired) => ({ orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord })));
  if (null == premiumType) {
    if (!isPaymentSuccess) {
      const obj = { style: tmp.headerText, variant: "text-md/semibold", color: "text-default", accessibilityRole: "header", children: null };
      const intl = util.intl;
      obj.children = intl.string(util.t.vLz3Zs);
      return __initData8(Text_Text.Text, obj);
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
    tmp9 = skuId === PremiumUtilsDefault.getSkuIdForPremiumType(premiumType);
    const tmp6Result = PremiumUtilsDefault;
  }
  let tmp11 = tmp9;
  if (tmp11) {
    let tmp12 = !orderRequired;
    if (orderRequired) {
      let subscriptionTrialId;
      if (orderRecord != null) {
        const subscriptionFacet = orderRecord.subscriptionFacet;
        if (subscriptionFacet != null) {
          const subscriptionPreview = subscriptionFacet.subscriptionPreview;
          if (subscriptionPreview != null) {
            subscriptionTrialId = subscriptionPreview.subscriptionTrialId;
          }
        }
      }
      tmp12 = trialOffer.trialId === subscriptionTrialId;
    }
    tmp11 = tmp12;
  }
  let trialOffer2 = null;
  if (tmp11) {
    trialOffer2 = trialOffer;
  }
  return __initData8(PremiumPlanActionSheetHeaderDefault, { premiumType, trialOffer: trialOffer2, discountOffer });
});
ReactCompilerGating = fn(558);
let closure_40 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(10);
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
    if (cResult[1] === prop) {
      let tmp7 = cResult[2];
    }
    let str2 = "text-overlay-light";
    if (tmp5) {
      str2 = "text-overlay-dark";
    }
    if (cResult[3] === tmp4.planOptionDiscountText) {
      if (cResult[4] === str2) {
        if (cResult[5] === text) {
          let tmp8 = cResult[6];
        }
        if (cResult[7] === tmp7) {
          if (cResult[8] === tmp8) {
            let tmp11 = cResult[9];
          }
          return tmp11;
        }
        const obj2 = { style: tmp7, children: tmp8 };
        const tmp14 = __initData8(closure_1_8, obj2);
        cResult[7] = tmp7;
        cResult[8] = tmp8;
        cResult[9] = tmp14;
        tmp11 = tmp14;
      }
    }
    const obj3 = { style: tmp4.planOptionDiscountText, variant: "text-xs/bold", color: str2, children: text };
    const tmp10 = __initData8(Text_Text.Text, obj3);
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
  let str = backgroundColorType.backgroundColorType;
  if (str === undefined) {
    str = "green";
  }
  const tmp = closure_38();
  const items = [tmp.planOptionDiscount, ];
  let prop = null;
  if ("white" === str) {
    prop = tmp.planOptionDiscountWhite;
  }
  const obj = { style: items, children: null };
  items[1] = prop;
  const obj2 = { style: tmp.planOptionDiscountText, variant: "text-xs/bold", color: null, children: null };
  let str2 = "text-overlay-light";
  if ("white" === str) {
    str2 = "text-overlay-dark";
  }
  obj2.color = str2;
  obj2.children = backgroundColorType.text;
  obj.children = __initData8(Text_Text.Text, obj2);
  return __initData8(closure_1_8, obj);
});
ReactCompilerGating = fn(558);
let closure_42 = ReactCompilerGating.isReactCompilerEnabled() ? ((premiumItem) => {
  const cResult = premiumItem(576).c(84);
  premiumItem = premiumItem.premiumItem;
  ({ selectedProductId, optionNeedsProductNameLabel, customBadgeComponent, trialOffer, discountOffer, discountedPriceString, userIsEligibleForBogoPromotion, selectedPremiumType } = premiumItem);
  const tmp5 = closure_38();
  let num = 2;
  [first, dependencyMap] = noop.useState(0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [IAPStore];
    cResult[0] = items;
    let first1 = items;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] !== premiumItem.productId) {
    const fn = function n() {
      return IAPStore.getProduct(premiumItem.productId);
    };
    cResult[1] = premiumItem.productId;
    cResult[num] = fn;
    let tmp10 = fn;
  } else {
    tmp10 = cResult[2];
  }
  const obj = premiumItem(576);
  const stateFromStores = premiumItem(504).useStateFromStores(first1, tmp10);
  const tmpResult = premiumItem(504);
  const checkoutPlanPriceString = premiumItem(13141).useCheckoutPlanPriceString(premiumItem.productId, stateFromStores);
  let priceString;
  if (stateFromStores != null) {
    priceString = stateFromStores.priceString;
  }
  if (cResult[3] === discountedPriceString) {
    if (cResult[4] === priceString) {
      let tmp14 = cResult[5];
    }
    const checkoutPlanDiscountPrices = tmp(13141).useCheckoutPlanDiscountPrices(premiumItem.productId, tmp14);
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
      cResult[6] = W;
    } else {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
    }
    const tmpResult6 = tmp(13141);
    ({ orderRequired, orderRecord } = useNativeCheckoutStore(W));
    if (cResult[7] === customBadgeComponent) {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
    }
    const premiumTier = premiumItem.premiumTier;
    let tmp19 = null != trialOffer && null != premiumTier;
    if (tmp19) {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
      if (tmp20 != null) {
        class W {
          constructor(arg0) {
            obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
            return obj;
          }
        }
      }
      tmp19 = tmp21 === first(4528).getSkuIdForPremiumType(premiumTier);
      const obj6 = first(4528);
    }
    let tmp23 = tmp19;
    if (tmp23) {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
      if (orderRequired) {
        class W {
          constructor(arg0) {
            obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
            return obj;
          }
        }
        if (orderRecord != null) {
          class W {
            constructor(arg0) {
              obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
              return obj;
            }
          }
          if (tmp26 != null) {
            class W {
              constructor(arg0) {
                obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
                return obj;
              }
            }
            if (tmp27 != null) {
              class W {
                constructor(arg0) {
                  obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
                  return obj;
                }
              }
            }
          }
        }
        const tmp24 = trialOffer.trialId === tmp25;
      }
      tmp23 = tmp24;
    }
    if (cResult[41] !== premiumItem.basePlanId) {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
      const tierDisplayNameByPlanId = obj7.getTierDisplayNameByPlanId(premiumItem.basePlanId);
      cResult[41] = premiumItem.basePlanId;
      cResult[42] = tierDisplayNameByPlanId;
    } else {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
    }
    if (cResult[43] !== premiumItem.interval) {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
      const intervalString = first(4528).getIntervalString(premiumItem.interval, false);
      cResult[43] = premiumItem.interval;
      cResult[44] = intervalString;
      const obj8 = first(4528);
    } else {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
    }
    let tmp33 = tmp23;
    const basePlanId = premiumItem.basePlanId;
    const PREMIUM_YEAR_TIER_2 = closure_21.PREMIUM_YEAR_TIER_2;
    if (!tmp23) {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
    }
    if (!tmp33) {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
      if (tmp4) {
        class W {
          constructor(arg0) {
            obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
            return obj;
          }
        }
      }
      tmp33 = tmp34;
    }
    if (!tmp33) {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
    }
    if (tmp4) {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
    }
    const productId = premiumItem.productId;
    if (null == stateFromStores) {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
      let USD = constants6.USD;
    } else {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
      if (str.toLowerCase() in constants6) {
        class W {
          constructor(arg0) {
            obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
            return obj;
          }
        }
        USD = str2.toLowerCase();
      } else {
        class W {
          constructor(arg0) {
            obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
            return obj;
          }
        }
      }
    }
    if (null != checkoutPlanDiscountPrices) {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
      obj9.formatRate(checkoutPlanDiscountPrices.discountedPrice, tmp38.interval, tmp38.intervalCount);
    }
    if (tmp23) {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
      const obj2 = { price: tmp(6736).formatPrice(0, USD, { minimumFractionDigits: 0, maximumFractionDigits: 0 }) };
      const formatToPlainStringResult = obj10.formatToPlainString(tmp(1126).t.hXcaLT, obj2);
      const tmpResult7 = tmp(6736);
    } else {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
      if (checkoutPlanDiscountPrices != null) {
        class W {
          constructor(arg0) {
            obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
            return obj;
          }
        }
      }
      if (formatToPlainStringResult == null) {
        class W {
          constructor(arg0) {
            obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
            return obj;
          }
        }
      }
      if (formatToPlainStringResult == null) {
        class W {
          constructor(arg0) {
            obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
            return obj;
          }
        }
      }
    }
    const tmp18 = useNativeCheckoutStore(W);
    const formatRate = tmp(6736).formatRate;
    if (checkoutPlanDiscountPrices != null) {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
    }
    if (undefined == null) {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
    }
    if (undefined == null) {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
    }
    if (cResult[45] === tmp5.planOptionPriceContainer) {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
    }
    if (first > 0) {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
      tmp44[0] = tmp5.planOptionPriceContainer;
      const obj3 = { transform: null };
      const obj4 = { translateY: first / num };
      const items1 = [obj4];
      obj3.transform = items1;
      tmp44[1] = obj3;
    } else {
      class W {
        constructor(arg0) {
          obj = { orderRequired: premiumItem.orderRequired, orderRecord: premiumItem.orderRecord };
          return obj;
        }
      }
    }
    cResult[45] = tmp5.planOptionPriceContainer;
    cResult[46] = first;
    num = 47;
    cResult[47] = tmp44;
    const tmpResult8 = tmp(6736);
  }
  const obj5 = { discountedPriceString, regularPriceString: priceString };
  cResult[3] = discountedPriceString;
  cResult[4] = priceString;
  cResult[5] = obj5;
  tmp14 = obj5;
  const tmpResult5 = premiumItem(13141);
}) : ((premiumItem) => {
  premiumItem = premiumItem.premiumItem;
  ({ trialOffer, discountOffer, userIsEligibleForBogoPromotion } = premiumItem);
  ({ selectedProductId, optionNeedsProductNameLabel, customBadgeComponent, discountedPriceString } = premiumItem);
  if (userIsEligibleForBogoPromotion === undefined) {
    userIsEligibleForBogoPromotion = false;
  }
  first = undefined;
  dependencyMap = undefined;
  const tmp = closure_38();
  [first, dependencyMap] = noop.useState(0);
  const items = [IAPStore];
  const stateFromStores = premiumItem(504).useStateFromStores(items, () => IAPStore.getProduct(premiumItem.productId));
  const obj = premiumItem(504);
  let checkoutPlanPriceString = premiumItem(13141).useCheckoutPlanPriceString(premiumItem.productId, stateFromStores);
  const obj2 = premiumItem(13141);
  const obj4 = { discountedPriceString, regularPriceString: null };
  let priceString;
  if (stateFromStores != null) {
    priceString = stateFromStores.priceString;
  }
  obj4.regularPriceString = priceString;
  const checkoutPlanDiscountPrices = premiumItem(13141).useCheckoutPlanDiscountPrices(premiumItem.productId, obj4);
  const obj3 = premiumItem(13141);
  ({ orderRequired, orderRecord } = useNativeCheckoutStore((orderRequired) => ({ orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord })));
  const premiumTier = premiumItem.premiumTier;
  let tmp11 = null != trialOffer && null != premiumTier;
  if (tmp11) {
    const subscriptionTrial = trialOffer.subscriptionTrial;
    let skuId;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
    tmp11 = skuId === first(4528).getSkuIdForPremiumType(premiumTier);
    const obj5 = first(4528);
  }
  let tmp14 = tmp11;
  if (tmp14) {
    let tmp15 = !orderRequired;
    if (orderRequired) {
      let subscriptionTrialId;
      if (orderRecord != null) {
        const subscriptionFacet = orderRecord.subscriptionFacet;
        if (subscriptionFacet != null) {
          const subscriptionPreview = subscriptionFacet.subscriptionPreview;
          if (subscriptionPreview != null) {
            subscriptionTrialId = subscriptionPreview.subscriptionTrialId;
          }
        }
      }
      tmp15 = trialOffer.trialId === subscriptionTrialId;
    }
    tmp14 = tmp15;
  }
  const tmp10 = useNativeCheckoutStore((orderRequired) => ({ orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord }));
  const tierDisplayNameByPlanId = premiumItem(4528).getTierDisplayNameByPlanId(premiumItem.basePlanId);
  const tmp4Result = premiumItem(4528);
  const intervalString = first(4528).getIntervalString(premiumItem.interval, false);
  let tmp20 = tmp14;
  if (!tmp14) {
    tmp20 = null != discountOffer;
  }
  if (!tmp20) {
    let tmp21 = userIsEligibleForBogoPromotion;
    if (userIsEligibleForBogoPromotion) {
      tmp21 = premiumItem.basePlanId === closure_21.PREMIUM_YEAR_TIER_2;
    }
    tmp20 = tmp21;
  }
  let tmp22 = null;
  if (!tmp20) {
    tmp22 = dependencyMap2[premiumItem.basePlanId];
  }
  if (userIsEligibleForBogoPromotion) {
    userIsEligibleForBogoPromotion = premiumItem.basePlanId === closure_21.PREMIUM_MONTH_TIER_2;
  }
  if (null == stateFromStores) {
    let USD = constants6.USD;
  } else {
    if (str.toLowerCase() in constants6) {
      USD = stateFromStores.currencyCode.toLowerCase();
    } else {
      USD = tmp24.USD;
    }
    str = stateFromStores.currencyCode;
  }
  let formatRateResult = null;
  if (null != checkoutPlanDiscountPrices) {
    formatRateResult = tmp4(6736).formatRate(checkoutPlanDiscountPrices.discountedPrice, tmp26.interval, tmp26.intervalCount);
    const tmp4Result4 = tmp4(6736);
  }
  if (tmp14) {
    const intl = tmp4(1126).intl;
    const obj6 = { price: tmp4(6736).formatPrice(0, USD, { minimumFractionDigits: 0, maximumFractionDigits: 0 }) };
    let formatToPlainStringResult = intl.formatToPlainString(tmp4(1126).t.hXcaLT, obj6);
    const tmp4Result5 = tmp4(6736);
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
  const obj7 = first(4528);
  let regularPrice;
  if (checkoutPlanDiscountPrices != null) {
    regularPrice = checkoutPlanDiscountPrices.regularPrice;
  }
  if (regularPrice == null) {
    regularPrice = checkoutPlanPriceString;
  }
  if (regularPrice == null) {
    regularPrice = closure_18;
  }
  const tmp4Result6 = premiumItem(6736);
  if (first > 0) {
    const items1 = [tmp.planOptionPriceContainer, ];
    const obj8 = { transform: null };
    const obj9 = { translateY: first / 2 };
    const items2 = [obj9];
    obj8.transform = items2;
    items1[1] = obj8;
    let planOptionPriceContainer = items1;
  } else {
    planOptionPriceContainer = tmp.planOptionPriceContainer;
  }
  const obj10 = { style: tmp.planOptionContainer, children: null };
  if (null != discountOffer) {
    let str3 = "text-lg/medium";
  } else {
    str3 = "text-md/medium";
  }
  const obj11 = { variant: str3, color: null, children: null };
  let str4 = "interactive-text-default";
  let str5 = "interactive-text-default";
  if (premiumItem.productId === selectedProductId) {
    str5 = "interactive-text-active";
  }
  obj11.color = str5;
  let combined = intervalString;
  if (optionNeedsProductNameLabel) {
    const _HermesInternal = HermesInternal;
    combined = "" + tierDisplayNameByPlanId + " " + intervalString;
  }
  obj11.children = combined;
  const items3 = [closure_35(premiumItem(4886).Text, obj11), ];
  const obj12 = { style: planOptionPriceContainer, children: null };
  const obj13 = { style: tmp.planOptionDiscountContainer, children: null };
  const items4 = [renderPlanOptionBadge({ userLocale: LocaleStore.locale, discount: tmp22, hideDefaultDiscountBadges: tmp20, customBadgeComponent, showBogoPromotionBadge: userIsEligibleForBogoPromotion }), ];
  const obj14 = { style: tmp.priceText, variant: "text-lg/medium", color: null, children: null };
  let str8 = str4;
  if (premiumItem.productId === selectedProductId) {
    str8 = "interactive-text-active";
  }
  obj14.color = str8;
  obj14.children = formatToPlainStringResult;
  items4[1] = closure_35(premiumItem(4886).Text, obj14);
  obj13.children = items4;
  const items5 = [closure_36(closure_8, obj13), , ];
  if (!tmp14) {
    items5[1] = null;
    const obj15 = {
      style: tmp.discountSubTextContainer,
      onLayout(nativeEvent) {
          const height = nativeEvent.nativeEvent.layout.height;
          if (height !== first) {
            closure_2(height);
          }
        },
      children: null
    };
    let tmp33Result = null;
    if (null != formatRateResult) {
      tmp33Result = null;
      if (null != discountOffer) {
        tmp33Result = null;
        if (null == premiumItem.selectedPremiumType) {
          let str10 = str4;
          if (tmp34) {
            str10 = "text-default";
          }
          const obj16 = { variant: "text-sm/medium", color: str10, children: null };
          const intl4 = tmp4(1126).intl;
          const obj17 = { discountedPrice: formatRateResult, numMonths: null };
          const discount = discountOffer.discount;
          let num;
          if (discount != null) {
            num = discount.intervalCount;
          }
          if (num == null) {
            num = 1;
          }
          obj17.numMonths = num;
          obj16.children = intl4.formatToPlainString(tmp4(1126).t["02Gmgm"], obj17);
          tmp33Result = closure_35(tmp4(4886).Text, obj16);
        }
      }
    }
    const items6 = [tmp33Result, ];
    let tmp33Result3 = null != checkoutPlanDiscountPrices && null != discountOffer;
    if (tmp33Result3) {
      if (tmp34) {
        str4 = "text-default";
      }
      const obj18 = { variant: "text-sm/medium", color: str4, children: null };
      const intl5 = tmp4(1126).intl;
      const obj19 = { regularPrice: formatRateResult1, numMonths: null };
      const discount2 = discountOffer.discount;
      let num2;
      if (discount2 != null) {
        num2 = discount2.intervalCount;
      }
      if (num2 == null) {
        num2 = 1;
      }
      obj19.numMonths = num2;
      obj18.children = intl5.formatToPlainString(tmp4(1126).t["vZk+c/"], obj19);
      tmp33Result3 = closure_35(tmp4(4886).Text, obj18);
    }
    items6[1] = tmp33Result3;
    obj15.children = items6;
    items5[2] = closure_36(closure_8, obj15);
    obj12.children = items5;
    items3[1] = closure_36(closure_8, obj12);
    obj10.children = items3;
    return closure_36(closure_8, obj10);
  } else {
    let str9 = str4;
    if (tmp34) {
      str9 = "text-default";
    }
    const obj20 = { variant: "text-xs/medium", color: str9, children: null };
    if (premiumItem.interval === constants.YEAR) {
      const intl3 = tmp4(1126).intl;
      if (checkoutPlanPriceString == null) {
        checkoutPlanPriceString = closure_18;
      }
      const obj21 = { price: checkoutPlanPriceString };
      let formatToPlainStringResult1 = intl3.formatToPlainString(tmp4(1126).t.ECT4A5, obj21);
    } else {
      const intl2 = tmp4(1126).intl;
      let tmp38 = checkoutPlanPriceString;
      if (checkoutPlanPriceString == null) {
        tmp38 = closure_18;
      }
      const obj22 = { price: tmp38 };
      formatToPlainStringResult1 = intl2.formatToPlainString(tmp4(1126).t.v9QeON, obj22);
    }
    obj20.children = formatToPlainStringResult1;
    closure_35(tmp4(4886).Text, obj20);
  }
  formatRateResult1 = premiumItem(6736).formatRate(regularPrice, dependencyMap3[premiumItem.basePlanId].interval, dependencyMap3[premiumItem.basePlanId].intervalCount);
});
ReactCompilerGating = fn(558);
let closure_43 = ReactCompilerGating.isReactCompilerEnabled() ? ((shouldUseMobileWebRedirectCheckout) => {
  const cResult = c.c(14);
  ({ onClose, ctaText, onStartPayment } = shouldUseMobileWebRedirectCheckout);
  shouldUseMobileWebRedirectCheckout = shouldUseMobileWebRedirectCheckout.shouldUseMobileWebRedirectCheckout;
  ({ disabled, loading } = shouldUseMobileWebRedirectCheckout);
  if (shouldUseMobileWebRedirectCheckout.isPaymentSuccess) {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t.WAI6xu);
      cResult[0] = stringResult;
      let first = stringResult;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== onClose) {
      const obj2 = { text: first, size: "md", grow: true, onPress: onClose };
      const tmp18 = __initData8(components_Button_Button.Button, obj2);
      cResult[1] = onClose;
      cResult[2] = tmp18;
      let tmp16 = tmp18;
    } else {
      tmp16 = cResult[2];
    }
    return tmp16;
  } else if (cResult[3] !== shouldUseMobileWebRedirectCheckout) {
    const tmp5 = shouldUseMobileWebRedirectCheckout ? { size: "lg", variant: "primary" } : { size: "md", variant: "active" };
    cResult[3] = shouldUseMobileWebRedirectCheckout;
    cResult[4] = tmp5;
  } else {
    if (cResult[5] === onStartPayment) {
      if (cResult[6] === shouldUseMobileWebRedirectCheckout) {
        let tmp7 = cResult[7];
      }
      if (cResult[8] === ctaText) {
        if (cResult[9] === tmp4) {
          if (cResult[10] === disabled) {
            if (cResult[11] === loading) {
              if (cResult[12] === tmp7) {
                let tmp8 = cResult[13];
              }
              return tmp8;
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
      const obj3 = { text: ctaText };
      const merged = Object.assign(tmp4);
      obj3.grow = true;
      obj3.onPress = tmp7;
      obj3.loading = loading;
      obj3.disabled = disabled;
      const tmp12 = __initData8(components_Button_Button.Button, obj3);
      cResult[8] = ctaText;
      cResult[9] = tmp4;
      cResult[10] = disabled;
      cResult[11] = loading;
      cResult[12] = tmp7;
      cResult[13] = tmp12;
      tmp8 = tmp12;
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
    tmp7 = T;
  }
}) : ((isPaymentSuccess) => {
  ({ onStartPayment: require, shouldUseMobileWebRedirectCheckout } = isPaymentSuccess);
  if (isPaymentSuccess.isPaymentSuccess) {
    const obj2 = { text: null, size: "md", grow: true, onPress: null };
    const intl = util.intl;
    obj2.text = intl.string(util.t.WAI6xu);
    obj2.onPress = tmp;
    return __initData8(components_Button_Button.Button, obj2);
  } else {
    const tmp5 = shouldUseMobileWebRedirectCheckout ? { size: "lg", variant: "primary" } : { size: "md", variant: "active" };
    const obj = { text: tmp2 };
    const merged = Object.assign(tmp5);
    obj.grow = true;
    obj.onPress = function onPress() {
      return require({ shouldRedirectToMobileWeb: shouldUseMobileWebRedirectCheckout });
    };
    obj.loading = tmp4;
    obj.disabled = tmp3;
    return __initData8(components_Button_Button.Button, obj);
  }
});
function getItemsByPremiumTypePredicate(arg0) {
  closure_0 = arg0;
  return (additionalPlans) => {
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
size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/PremiumPlanSelectionActionSheet.tsx");

export default function PremiumPlanSelectionActionSheetWithOrderCTX(predicate) {
  const NitroACOMSubscriptionExperiment = ACOMExperiments.NitroACOMSubscriptionExperiment;
  if (obj.isIOS()) {
    if (NitroACOMSubscriptionExperiment.useConfig({ location: "PremiumPlanSelectionActionSheetWithOrderCTX" }).enabled) {
      let APPLE = __initData7.APPLE_ADVANCED_COMMERCE;
    } else {
      APPLE = __initData7.APPLE;
    }
  } else {
    const GOOGLE = __initData7.GOOGLE;
    let fn = predicate.predicate;
    if (undefined === fn) {
      TIER_2 = predicate.premiumType;
      if (TIER_2 == null) {
        TIER_2 = TIER_2.TIER_2;
      }
      fn = (additionalPlans) => {
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
    const tmp13 = _objectWithoutProperties(predicate, closure_3);
    const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
    const premiumType = predicate.premiumType;
    let tmp16 = null != premiumTrialOffer && null != premiumType;
    if (tmp16) {
      const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
      let skuId;
      if (subscriptionTrial != null) {
        skuId = subscriptionTrial.skuId;
      }
      tmp16 = skuId === PremiumUtilsDefault.getSkuIdForPremiumType(premiumType);
    }
    let tmp19;
    if (tmp16) {
      let obj2 = { subscription_preview: null };
      const obj4 = { subscription_trial_id: premiumTrialOffer.trialId };
      obj2.subscription_preview = obj4;
      tmp19 = obj2;
    }
    const tmpResult = usePremiumTrialOffer;
    const isEligibleForBogoOffer = useIsEligibleForBogoOffer.useIsEligibleForBogoOffer();
    if (null == fn3) {
      let premiumBundlesWithPredicate = PremiumBundledPlansUtils.getPremiumBundlesWithPredicate(fn);
      const tmpResult7 = PremiumBundledPlansUtils;
    } else {
      const premiumBundlesWithPredicate1 = PremiumBundledPlansUtils.getPremiumBundlesWithPredicate(fn);
      premiumBundlesWithPredicate = premiumBundlesWithPredicate1.sort(fn3);
      const tmpResult8 = PremiumBundledPlansUtils;
    }
    if (isEligibleForBogoOffer) {
      fn2 = (interval) => interval.interval === constants.MONTH;
    }
    const found = premiumBundlesWithPredicate.find(fn2);
    if (null != found) {
      const subscriptionItemsForProduct = PremiumBundledPlansUtils.getSubscriptionItemsForProduct(found.productId);
      let mapped = subscriptionItemsForProduct.map((planId) => {
        const obj = { subscriptionPlanId: planId.planId, skuId: null, quantity: null };
        const obj2 = TIER_2(4528);
        obj.skuId = obj2.castPremiumSubscriptionAsSkuId(PremiumUtilsDefault.getSkuIdForPlan(planId.planId));
        obj.quantity = planId.quantity;
        return obj;
      });
      const tmpResult9 = PremiumBundledPlansUtils;
    } else {
      const obj5 = { subscriptionPlanId: guild.PREMIUM_YEAR_TIER_2, skuId: PremiumUtils.castPremiumSubscriptionAsSkuId(TIER_22.TIER_2), quantity: 1 };
      mapped = [obj5];
      const tmpResult10 = PremiumUtils;
    }
    const obj6 = {
      paymentGateway: GOOGLE,
      orderRequired: GOOGLE === __initData7.APPLE_ADVANCED_COMMERCE,
      skuIds: [],
      defaultPlans: mapped,
      isGift: false,
      activeSubscription: null,
      initialSubscriptionFacet: tmp19,
      onOrderRetryCancellation() {
          return ActionSheetActionCreatorsDefault.hideActionSheet(closure_1_24);
        },
      children: null
    };
    const obj7 = {};
    const tmpResult6 = useIsEligibleForBogoOffer;
    const merged = Object.assign(tmp13);
    obj7.premiumItems = premiumBundlesWithPredicate;
    obj7.userIsEligibleForBogoPromotion = isEligibleForBogoOffer;
    obj7.initialSelectedItem = found;
    obj6.children = __initData8(PremiumPlanSelectionActionSheet, obj7);
    return __initData8(NativeCheckoutStoreProviderDefault, obj6);
  }
  obj = PlatformUtils;
};
export { getItemsByPremiumTypePredicate };