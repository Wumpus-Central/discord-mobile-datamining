// === Module 13629: PremiumPlanSelect ===

// Module 13629 (PremiumPlanSelect)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1176 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1240 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1364 */;
import PremiumUtils from "PremiumUtils" /* 4294 */;
import PremiumSubscription from "PremiumSubscription" /* 4306 */;
import Text_Text from "Text/Text" /* 4632 */;
import actions_BillingActionCreators from "actions/BillingActionCreators" /* 4960 */;
import Stack_Stack from "Stack/Stack" /* 5054 */;
import LinearGradientDefault from "LinearGradient" /* 5068 */;
import TextStylesDefault from "TextStyles" /* 5605 */;
import native2 from "native" /* 5773 */;
import ProductIds from "ProductIds" /* 7343 */;
import SubscriptionPlanActionCreators from "SubscriptionPlanActionCreators" /* 7360 */;
import PremiumBundledPlansUtils from "PremiumBundledPlansUtils" /* 7512 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8785 */;
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils" /* 10792 */;
import PaymentFlowStartedTriggerPoint from "PaymentFlowStartedTriggerPoint" /* 10937 */;
import openPremiumPlanWhatYouLoseActionSheetDefault from "openPremiumPlanWhatYouLoseActionSheet" /* 13464 */;
import PremiumPlanWhatYouLoseActionSheet from "PremiumPlanWhatYouLoseActionSheet" /* 13465 */;
import _modDef13631 from "module_13631" /* 13631 */;
import _modDef13632 from "module_13632" /* 13632 */;
import _modDef13633 from "module_13633" /* 13633 */;
import _modDef13634 from "module_13634" /* 13634 */;
import _modDef13635 from "module_13635" /* 13635 */;
import _modDef13636 from "module_13636" /* 13636 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4299 */;
import SubscriptionStore from "SubscriptionStore" /* 4300 */;
import IAPStore from "IAPStore" /* 7340 */;

const require = globalThis.__r;
const PremiumUtilsDefault = PremiumUtils;

require = fn;
function BoostPurchaseNitroBanner() {
  const tmp = closure_34();
  const obj = { align: "center", spacing: nativeDefault.space.PX_12, style: tmp.nitroBanner, children: null };
  items = [__initData9(native2.TreasureChestBannerSpotIllustration, { width: 117, height: 93, accessible: false }), ];
  const obj2 = { align: "center", spacing: nativeDefault.space.PX_4, children: null };
  const obj3 = { variant: "text-md/semibold", color: "text-default", style: tmp.nitroBannerText, children: null };
  const intl = util.intl;
  const obj4 = { discount: null };
  const obj5 = { variant: "text-md/semibold", color: "text-feedback-positive", children: null };
  const intl2 = util.intl;
  obj5.children = intl2.format(util.t.RmVM19, { percentageOff });
  obj4.discount = __initData9(Text_Text.Text, obj5, "discount");
  obj3.children = intl.format(util.t.jbrHpT, obj4);
  const items1 = [__initData9(Text_Text.Text, obj3), ];
  const obj7 = { variant: "text-sm/medium", color: "text-muted", style: tmp.nitroBannerText, children: null };
  const intl3 = util.intl;
  obj7.children = intl3.format(util.t.HYpETY, { boostCount });
  items1[1] = __initData9(Text_Text.Text, obj7);
  obj2.children = items1;
  items[1] = __initData10(Stack_Stack.Stack, obj2);
  obj.children = items;
  return __initData10(Stack_Stack.Stack, obj);
}
function getPlanDescription(premiumTier) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (null == premiumTier.premiumTier) {
    const intl = util.intl;
    const obj2 = { numSubscriptions: premiumTier.numPremiumGuild };
    let formatToPlainStringResult = intl.formatToPlainString(util.t.gDsyB9, obj2);
  } else if (0 === premiumTier.numPremiumGuild) {
    formatToPlainStringResult = PremiumUtils.getPremiumTypeDisplayName(premiumTier.premiumTier);
  } else {
    const intl2 = util.intl;
    const formatToPlainString = intl2.formatToPlainString;
    if (flag) {
      const obj4 = { numSubscriptions: premiumTier.numPremiumGuild };
      formatToPlainStringResult = formatToPlainString(util.t.gDsyB9, obj4);
    } else {
      if (premiumTier.premiumTier === closure_1_20.TIER_1) {
        let u6dBsN = util.t.sexoHq;
      } else {
        u6dBsN = util.t.u6dBsN;
      }
      const obj = { num: premiumTier.numPremiumGuild };
      formatToPlainStringResult = formatToPlainString(u6dBsN, obj);
    }
  }
  return formatToPlainStringResult;
}
function BoostDeltaPriceTrailing(arg0) {
  ({ price, interval } = arg0);
  const obj = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_4, children: null };
  items = [__initData9(NitroWheelIcon.NitroWheelIcon, { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE }), ];
  const intl = util.intl;
  if (interval === constants.MONTH) {
    let AbOLNu = util.t.AbOLNu;
  } else {
    AbOLNu = util.t["rS8FA+"];
  }
  const obj3 = { variant: "text-sm/medium", color: "text-muted", children: null };
  const obj2 = { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
  obj3.children = intl.format(AbOLNu, { price: __initData9(Text_Text.Text, { variant: "text-sm/semibold", color: "text-feedback-positive", children: price }, "price") });
  items[1] = __initData9(Text_Text.Text, obj3);
  obj.children = items;
  return __initData10(Stack_Stack.Stack, obj);
}
function PlanRow(plan) {
  plan = plan.plan;
  ({ purchase: importDefault, subscription } = plan);
  let flag = plan.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = plan.interactive;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let flag3 = plan.hasBackground;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = plan.shouldShowModernBoostFlow;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let flag5 = plan.showBoostOnlyLabels;
  if (flag5 === undefined) {
    flag5 = false;
  }
  let prop = plan.recommendedBoostCount;
  if (prop === undefined) {
    prop = null;
  }
  let flag6 = plan.isBoostPurchaseFlow;
  if (flag6 === undefined) {
    flag6 = false;
  }
  const analyticsLoadId = plan.analyticsLoadId;
  let premiumTypeFromSubscription;
  flag = undefined;
  let is_recommended;
  const tmp2 = closure_34();
  const tmp4 = closure_15((purchasingProductId) => purchasingProductId.purchasingProductId === plan.productId);
  const tmp3 = closure_15((isPurchasing) => isPurchasing.isPurchasing);
  const token = plan(subscription[31]).useToken(require("native").colors.ACTIVITY_TIMEBAR_PROGRESS_BACKGROUND);
  let obj = plan(subscription[31]);
  items = [IAPStore];
  const tmp9 = flag6(plan(subscription[32]).useStateFromStoresArray(items, () => {
    items = [IAPStore.getProduct(plan.productId), IAPStore.isBusy()];
    return items;
  }), 2);
  const first = tmp9[0];
  let obj2 = plan(subscription[32]);
  const tmp11 = useNativeCheckoutStore((isPatchOrderLoading) => isPatchOrderLoading.isPatchOrderLoading || isPatchOrderLoading.isCreateOrderLoading);
  const premiumTier2DeltaPriceString = plan(subscription[33]).usePremiumTier2DeltaPriceString(plan, subscription, first, flag4);
  let obj3 = plan(subscription[33]);
  const checkoutPlanPriceString = plan(subscription[34]).useCheckoutPlanPriceString(plan.productId, first);
  let tmp16 = plan.premiumTier === closure_20.TIER_2;
  const obj4 = plan(subscription[34]);
  if (tmp16) {
    tmp16 = 0 === plan.numPremiumGuild;
  }
  let tmp17 = null;
  if (tmp16) {
    const obj5 = { style: null, children: null };
    const items1 = [, ];
    ({ rowText: arr2[0], rowPlanDescriptionSubtext: arr2[1] } = tmp2);
    obj5.style = items1;
    const intl = tmp5(subscription[22]).intl;
    const obj6 = { num };
    obj5.children = intl.format(tmp5(subscription[22]).t.he52LA, obj6);
    tmp17 = closure_31(tmp5(subscription[36]).LegacyText, obj5);
  }
  let tmp20 = null == plan.premiumTier;
  if (!tmp20) {
    tmp20 = 0 !== plan.numPremiumGuild;
  }
  if (null == plan.premiumTier) {
    let tmp7Result = require("module_13631");
  } else if (0 !== plan.numPremiumGuild) {
    if (plan.premiumTier === closure_20.TIER_1) {
      tmp7Result = require("module_13635");
    } else {
      tmp7Result = require("module_13636");
    }
  } else {
    const premiumTier = plan.premiumTier;
    if (closure_20.TIER_0 === premiumTier) {
      tmp7Result = require("module_13632");
    } else if (closure_20.TIER_1 === premiumTier) {
      tmp7Result = require("module_13633");
    } else if (closure_20.TIER_2 === premiumTier) {
      tmp7Result = require("module_13634");
    }
  }
  const intl2 = tmp5(subscription[22]).intl;
  if (plan.interval === constants.MONTH) {
    let AbOLNu = tmp5(subscription[22]).t.AbOLNu;
  } else {
    AbOLNu = tmp5(subscription[22]).t["rS8FA+"];
  }
  let tmp23 = premiumTier2DeltaPriceString;
  if (premiumTier2DeltaPriceString == null) {
    tmp23 = checkoutPlanPriceString;
  }
  if (tmp23 == null) {
    tmp23 = closure_18;
  }
  const formatToPlainStringResult = intl2.formatToPlainString(AbOLNu, { price: tmp23 });
  if (tmp16) {
    const intl3 = tmp5(subscription[22]).intl;
    const obj7 = { num };
    let formatToPlainStringResult1 = intl3.formatToPlainString(tmp5(subscription[22]).t.RTaZb4, obj7);
  }
  premiumTypeFromSubscription = null;
  if (null != subscription) {
    premiumTypeFromSubscription = tmp5(subscription[23]).getPremiumTypeFromSubscription(subscription);
    const tmp5Result = tmp5(subscription[23]);
  }
  if (!flag) {
    flag = tmp3;
  }
  if (!flag) {
    flag = tmp9[1];
  }
  if (!flag) {
    flag = tmp11;
  }
  function onPress() {
    let tmp = !flag;
    if (!flag) {
      tmp = flag2;
    }
    if (tmp) {
      if (flag6) {
        const obj2 = { boost_count: plan.numPremiumGuild, is_recommended, load_id: analyticsLoadId };
        AnalyticsUtilsDefault.track(constants2.BOOST_PLAN_ROW_SELECTED, obj2);
      }
      if (null != subscription) {
        if (premiumTypeFromSubscription === closure_2_20.TIER_2) {
          if (plan.premiumTier === closure_2_20.TIER_0) {
            const obj3 = {
              subscription: tmp10,
              mode: PremiumPlanWhatYouLoseActionSheet.WhatYouLoseMode.DOWNGRADE,
              onContinue() {
                        return closure_1_1(productId.productId);
                      }
            };
            openPremiumPlanWhatYouLoseActionSheetDefault(obj3);
          }
        }
      }
      closure_1_1(plan.productId);
    }
  }
  is_recommended = tmp28;
  if (flag4) {
    if (tmp20) {
      let tmp38Result = closure_31(require("BoostGemPixel"), { width: 32, height: 32 });
    } else if (tmp16) {
      const obj8 = { size: "lg", color: require("native").colors.ICON_DEFAULT };
      tmp38Result = closure_31(tmp5(subscription[30]).NitroWheelIcon, obj8);
    } else {
      const obj9 = { style: tmp2.boostRowIcon, source: tmp7Result };
      tmp38Result = closure_31(premiumTypeFromSubscription, obj9);
    }
    const obj10 = { icon: tmp38Result, label: getPlanDescription(plan, flag5), subLabel: null, trailing: null, arrow: null, disabled: null, onPress: null };
    if (tmp28) {
      const obj11 = { variant: "text-xs/semibold", color: "none", style: tmp2.recommendedText, children: null };
      const intl4 = tmp5(subscription[22]).intl;
      obj11.children = intl4.string(tmp5(subscription[22]).t.WThgAR);
      formatToPlainStringResult1 = closure_31(tmp5(subscription[21]).Text, obj11);
    }
    obj10.subLabel = formatToPlainStringResult1;
    if (tmp4) {
      const obj12 = { animating: true, size: "small", color: token };
      let tmp38Result2 = closure_31(tmp5(subscription[42]).ActivityIndicator, obj12);
    } else if (null != premiumTier2DeltaPriceString) {
      const obj13 = { price: premiumTier2DeltaPriceString, interval: plan.interval };
      tmp38Result2 = closure_31(BoostDeltaPriceTrailing, obj13);
    } else {
      const obj14 = { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: formatToPlainStringResult };
      tmp38Result2 = closure_31(tmp5(subscription[21]).Text, obj14);
    }
    obj10.trailing = tmp38Result2;
    obj10.arrow = flag2;
    if (flag) {
      flag = !tmp4;
    }
    if (!flag) {
      flag = !flag2;
    }
    obj10.disabled = flag;
    let tmp44;
    if (flag2) {
      tmp44 = onPress;
    }
    obj10.onPress = tmp44;
    return closure_31(tmp5(subscription[40]).TableRow, obj10);
  } else {
    const items2 = [tmp2.row, plan.style, ];
    let rowDisabled = flag;
    if (flag) {
      rowDisabled = !tmp4;
    }
    if (rowDisabled) {
      rowDisabled = tmp2.rowDisabled;
    }
    const obj15 = { style: null, children: null };
    items2[2] = rowDisabled;
    obj15.style = items2;
    const obj16 = { style: tmp2[closure_37[tmp7Result]], source: tmp7Result };
    const items3 = [closure_31(premiumTypeFromSubscription, obj16), , , , ];
    const obj17 = { style: null, children: null };
    const items4 = [, ];
    ({ rowText: arr5[0], rowPlanDescription: arr5[1] } = tmp2);
    obj17.style = items4;
    obj17.children = getPlanDescription(plan, flag5);
    items3[1] = closure_31(tmp5(subscription[36]).LegacyText, obj17);
    items3[2] = tmp17;
    const obj18 = { style: null, children: null };
    const items5 = [, ];
    ({ rowText: arr6[0], rowPrice: arr6[1] } = tmp2);
    obj18.style = items5;
    obj18.children = formatToPlainStringResult;
    items3[3] = closure_31(tmp5(subscription[36]).LegacyText, obj18);
    let tmp31Result = null;
    if (tmp4) {
      const obj19 = { animating: true, size: "small", style: tmp2.purchasingSpinner, color: token };
      tmp31Result = closure_31(tmp5(subscription[42]).ActivityIndicator, obj19);
    }
    items3[4] = tmp31Result;
    obj15.children = items3;
    const tmp29Result = closure_32(flag, obj15);
    let tmp31Result2 = tmp29Result;
    if (flag2) {
      let str2 = "none";
      if (!tmp5Result2.isThemeDark(tmp14)) {
        str2 = "none";
        if (flag3) {
          str2 = require("native").unsafe_rawColors.PRIMARY_230;
        }
      }
      const obj20 = { activeOpacity: 0.6, underlayColor: str2, accessibilityRole: "button", disabled: flag, onPress, children: tmp29Result };
      tmp31Result2 = closure_31(tmp5(subscription[43]).TouchableHighlight, obj20);
      tmp5Result2 = tmp5(subscription[44]);
    }
    return tmp31Result2;
  }
  tmp14 = require("useTheme")();
}
function PlanSection(showBoostOnlyLabels) {
  ({ plans, shouldShowModernBoostFlow } = showBoostOnlyLabels);
  if (shouldShowModernBoostFlow === undefined) {
    shouldShowModernBoostFlow = false;
  }
  let flag = showBoostOnlyLabels.showBoostOnlyLabels;
  if (flag === undefined) {
    flag = false;
  }
  ({ recommendedBoostCount: dependencyMap, isBoostPurchaseFlow: asyncGeneratorStep, purchase: _slicedToArray, analyticsLoadId: noop, trackNewPaymentFlow: closure_6, trackPaymentFlowStep: closure_7, subscription: closure_8, currentPaymentGatewayPlanId: useNativeCheckoutStore, shouldRemoveYearlyUpsell: GuildStore } = showBoostOnlyLabels);
  c12 = undefined;
  const tmp = useNativeCheckoutStore((getCheckoutContextRecord) => getCheckoutContextRecord.getCheckoutContextRecord());
  closure_11 = tmp;
  let isIOSResult = shouldShowModernBoostFlow(1364).isIOS();
  if (isIOSResult) {
    isIOSResult = null != tmp;
  }
  c12 = isIOSResult;
  const mapped = plans.map((plan) => __initData9(PlanRow, {
    plan,
    subscription,
    shouldShowModernBoostFlow,
    showBoostOnlyLabels: flag,
    recommendedBoostCount,
    isBoostPurchaseFlow,
    analyticsLoadId,
    purchase(productId) {
      closure_0 = productId;
      const toggledIntervalProduct = shouldShowModernBoostFlow(recommendedBoostCount[46]).getToggledIntervalProduct(productId);
      let tmp5 = null;
      if (closure_12) {
        tmp5 = null;
        if (null != toggledIntervalProduct) {
          availablePlanForItems = undefined;
          if (availablePlanForItems != null) {
            availablePlanForItems = availablePlanForItems.getAvailablePlanForItems(shouldShowModernBoostFlow(recommendedBoostCount[46]).getSubscriptionItemsForProduct(toggledIntervalProduct));
            const tmpResult = shouldShowModernBoostFlow(recommendedBoostCount[46]);
          }
          if (availablePlanForItems == null) {
            availablePlanForItems = null;
          }
          tmp5 = availablePlanForItems;
        }
      }
      availablePlanForItems = tmp5;
      if (closure_12) {
        let tmp7 = null != tmp5;
      } else {
        tmp7 = null != toggledIntervalProduct;
        if (tmp7) {
          tmp7 = null != product.getProduct(toggledIntervalProduct);
        }
      }
      let obj = shouldShowModernBoostFlow(recommendedBoostCount[46]);
      shouldShowModernBoostFlow(recommendedBoostCount[46]);
      if (null != toggledIntervalProduct) {
        if (tmp7) {
          if (!closure_10) {
            if (tmpResult3.getPremiumBundledItemsFromProductId(productId).interval !== constants.YEAR) {
              if (!tmp10) {
                let obj3 = { fromStep: shouldShowModernBoostFlow(recommendedBoostCount[47]).PaymentFlowStep.PLAN_SELECT, toStep: shouldShowModernBoostFlow(recommendedBoostCount[47]).PaymentFlowStep.YEARLY_UPSELL, productId };
                closure_7(obj3);
                let obj4 = {
                  importer() {
                              return shouldShowModernBoostFlow(recommendedBoostCount[50])(recommendedBoostCount[49], recommendedBoostCount.paths).then((result) => {
                                closure_0 = result.default;
                                return () => { ... };
                              });
                            },
                  hideActionSheet: true,
                  isDismissable: true
                };
                flag(recommendedBoostCount[48]).openLazy(obj4);
                let obj6 = flag(recommendedBoostCount[48]);
              }
            }
          }
        }
      }
      tmpResult3 = shouldShowModernBoostFlow(recommendedBoostCount[46]);
      closure_7({ fromStep: shouldShowModernBoostFlow(recommendedBoostCount[47]).PaymentFlowStep.PLAN_SELECT, toStep: shouldShowModernBoostFlow(recommendedBoostCount[47]).PaymentFlowStep.EXTERNAL_PAYMENT, productId });
      return closure_4(productId, closure_5);
    }
  }, plan.productId));
  if (shouldShowModernBoostFlow) {
    let obj2 = { title: showBoostOnlyLabels.label, hasIcons: true, children: mapped };
    let tmp7Result = closure_31(shouldShowModernBoostFlow(5768).TableRowGroup, obj2);
  } else {
    let obj3 = { children: mapped };
    tmp7Result = closure_31(closure_7, obj3);
  }
  return tmp7Result;
}
function CurrentPlanRow(arg0) {
  ({ subscription, paymentGatewayPlanId } = arg0);
  ({ analyticsLoadId, showCurrentPlan } = arg0);
  const tmp = closure_34();
  if (showCurrentPlan) {
    if (null != subscription) {
      if (null != paymentGatewayPlanId) {
        const premiumBundledItemsFromProductId = PremiumBundledPlansUtils.getPremiumBundledItemsFromProductId(paymentGatewayPlanId);
        const premiumTier = premiumBundledItemsFromProductId.premiumTier;
        if (null != premiumTier) {
          let PREMIUM_GUILD = __initData6(premiumTier);
        } else {
          PREMIUM_GUILD = constants6.PREMIUM_GUILD;
        }
        const obj = { style: tmp.currentPlanGradient, colors: PREMIUM_GUILD, start: null, end: null, children: null };
        ({ START: obj.start, END: obj.end } = dependencyMap);
        const obj2 = {
          plan: premiumBundledItemsFromProductId,
          subscription,
          analyticsLoadId,
          interactive: false,
          hasBackground: true,
          purchase() {

                },
          style: tmp.currentPlanRow
        };
        obj.children = __initData9(PlanRow, obj2);
        return __initData9(LinearGradientDefault, obj);
      }
    }
  }
  return null;
}
function PlanSectionHeader(children) {
  const tmp = closure_34();
  return __initData9(native.LegacyText, { style: closure_34().header, accessibilityRole: "header", children: children.string });
}
function PlanSections(showCurrentPlan) {
  ({ plans, subscription } = showCurrentPlan);
  const isBoostPurchaseFlow = showCurrentPlan.isBoostPurchaseFlow;
  const analyticsLoadId = showCurrentPlan.analyticsLoadId;
  ({ trackPaymentFlowStep: asyncGeneratorStep, trackNewPaymentFlow: _slicedToArray, purchase: noop } = showCurrentPlan);
  let shouldRemoveYearlyUpsell;
  let boostContainer;
  let showBoostOnlyLabels;
  let recommendedBoostCount;
  closure_12 = undefined;
  const tmp = closure_34();
  closure_6 = boostContainer((getCheckoutContextRecord) => getCheckoutContextRecord.getCheckoutContextRecord());
  let productIdFromSubscription = null;
  if (null != subscription) {
    productIdFromSubscription = subscription(analyticsLoadId[46]).getProductIdFromSubscription(subscription, false);
    let obj = subscription(analyticsLoadId[46]);
  }
  let productIdFromSubscription1 = productIdFromSubscription;
  if (!isBoostPurchaseFlow) {
    if (null != subscription) {
      try {
        productIdFromSubscription1 = subscription(analyticsLoadId[46]).getProductIdFromSubscription(subscription, true);
        let obj2 = subscription(analyticsLoadId[46]);
      } catch (err) {
      }
    }
  }
  shouldRemoveYearlyUpsell = isBoostPurchaseFlow;
  if (isBoostPurchaseFlow) {
    shouldRemoveYearlyUpsell = subscription(analyticsLoadId[53]).getShouldRemoveYearlyUpsell("PremiumPlanSelect");
    let obj3 = subscription(analyticsLoadId[53]);
  }
  if (!shouldRemoveYearlyUpsell) {
    let hasActiveTrial;
    if (subscription != null) {
      hasActiveTrial = subscription.hasActiveTrial;
    }
    let tmp12 = true === hasActiveTrial;
    if (tmp12) {
      tmp12 = subscription.paymentGateway === constants5.APPLE_ADVANCED_COMMERCE;
    }
    shouldRemoveYearlyUpsell = tmp12;
  }
  boostContainer = isBoostPurchaseFlow;
  if (isBoostPurchaseFlow) {
    boostContainer = subscription(analyticsLoadId[53]).getMobileBoostingEnabled("PremiumPlanSelect");
    let obj4 = subscription(analyticsLoadId[53]);
  }
  let tmp16 = null != subscription;
  if (tmp16) {
    tmp16 = subscription(analyticsLoadId[23]).getPremiumTypeFromSubscription(subscription) === closure_20.TIER_2;
    let obj5 = subscription(analyticsLoadId[23]);
  }
  let tmp20 = boostContainer;
  if (boostContainer) {
    tmp20 = tmp16;
  }
  showBoostOnlyLabels = tmp20;
  recommendedBoostCount = null;
  if (boostContainer) {
    recommendedBoostCount = null;
    if (!tmp16) {
      recommendedBoostCount = subscription(analyticsLoadId[53]).getRecommendedBoostCount("PremiumPlanSelect");
      const obj6 = subscription(analyticsLoadId[53]);
    }
  }
  let tmp24 = plans;
  if (!isBoostPurchaseFlow) {
    let hasActiveTrial1;
    if (subscription != null) {
      hasActiveTrial1 = subscription.hasActiveTrial;
    }
    tmp24 = plans;
    if (true !== hasActiveTrial1) {
      tmp24 = (function withCurrentPlanAlternative(plans, productIdFromSubscription, productIdFromSubscription1) {
        if (null != productIdFromSubscription) {
          if (obj3.isValidBundleProductId(productIdFromSubscription)) {
            if (null == productIdFromSubscription1) {
              let toggledIntervalProduct = tmp7(analyticsLoadId[46]).getToggledIntervalProduct(productIdFromSubscription);
              let tmp7Result = tmp7(analyticsLoadId[46]);
            } else {
              toggledIntervalProduct = productIdFromSubscription;
            }
            let tmp3 = plans;
            if (null != toggledIntervalProduct) {
              tmp3 = plans;
              if (!plans.some((productId) => {
                let tmp2 = null == toggledIntervalProduct;
                if (!tmp2) {
                  tmp2 = !subscription(analyticsLoadId[46]).isValidBundleProductId(toggledIntervalProduct);
                  const obj = subscription(analyticsLoadId[46]);
                }
                let tmp5 = !tmp2;
                if (!tmp2) {
                  let result = subscription(analyticsLoadId[46]).productsHaveSamePerks(productId.productId, toggledIntervalProduct);
                  if (result) {
                    result = productId.interval === subscription(analyticsLoadId[46]).getPremiumBundledItemsFromProductId(toggledIntervalProduct).interval;
                    const tmp7Result = subscription(analyticsLoadId[46]);
                  }
                  tmp5 = result;
                  const obj2 = subscription(analyticsLoadId[46]);
                }
                return tmp5;
              })) {
                items = [];
                const arraySpreadResult = HermesBuiltin.arraySpread(plans, 0);
                items[arraySpreadResult] = tmp7(analyticsLoadId[46]).getPremiumBundledItemsFromProductId(toggledIntervalProduct);
                tmp3 = items;
                const tmp7Result2 = tmp7(analyticsLoadId[46]);
              }
            }
            return tmp3;
          }
          obj3 = toggledIntervalProduct(analyticsLoadId[46]);
        }
        return plans;
      })(plans, productIdFromSubscription, productIdFromSubscription1);
    }
  }
  closure_12 = tmp24;
  if (!isBoostPurchaseFlow) {
    productIdFromSubscription = productIdFromSubscription1;
  }
  const mapped = items.map((section) => ({
    section,
    plansInSection: closure_12.filter((productId) => {
      let predicateResult = productId.productId !== productIdFromSubscription;
      if (predicateResult) {
        let tmp4 = null == productIdFromSubscription;
        if (!tmp4) {
          tmp4 = !PremiumBundledPlansUtils.isValidBundleProductId(productIdFromSubscription);
        }
        let tmp7 = !tmp4;
        if (!tmp4) {
          let result = PremiumBundledPlansUtils.productsHaveSamePerks(productId.productId, productIdFromSubscription);
          if (result) {
            result = productId.interval === PremiumBundledPlansUtils.getPremiumBundledItemsFromProductId(productIdFromSubscription).interval;
            const tmp8Result = PremiumBundledPlansUtils;
          }
          tmp7 = result;
        }
        predicateResult = !tmp7;
      }
      if (predicateResult) {
        predicateResult = section.predicate(productId);
      }
      if (predicateResult) {
        predicateResult = productId.premiumTier !== closure_3_20.TIER_1;
      }
      if (predicateResult) {
        const isIOSResult = utils_PlatformUtils.isIOS();
        let tmp16 = !isIOSResult;
        if (isIOSResult) {
          tmp16 = null == availablePlanForItems;
        }
        if (!tmp16) {
          tmp16 = null != availablePlanForItems.getAvailablePlanForItems(PremiumBundledPlansUtils.getSubscriptionItemsForProduct(productId.productId));
        }
        predicateResult = tmp16;
      }
      if (predicateResult) {
        let flag = true;
        if (null != productIdFromSubscription) {
          const tmp27 = ProductIds.AppStorePremiumProductIdsToPremiumBundledItems[tmp23];
          flag = null != tmp27.premiumTier || productId.numPremiumGuild >= tmp27.numPremiumGuild;
          const tmp28 = null != tmp27.premiumTier || productId.numPremiumGuild >= tmp27.numPremiumGuild;
        }
        predicateResult = flag;
      }
      return predicateResult;
    })
  }));
  const found = mapped.filter((plansInSection) => plansInSection.plansInSection.length > 0);
  let found1 = found;
  if (tmp20) {
    found1 = found;
    if (tmp27) {
      found1 = found.filter((section) => "premium-guild" !== section.section.id);
    }
  }
  items = [tmp.container, ];
  if (boostContainer) {
    boostContainer = tmp.boostContainer;
  }
  const obj7 = { style: items, children: null };
  items[1] = boostContainer;
  if (tmp20) {
    tmp20 = closure_31(BoostPurchaseNitroBanner, {});
  }
  const items1 = [
    tmp20,
    closure_31(CurrentPlanRow, { subscription, paymentGatewayPlanId: productIdFromSubscription1, analyticsLoadId, showCurrentPlan: showCurrentPlan.showCurrentPlan }),
    found1.map((plans) => {
      const section = plans.section;
      const label = section.getLabel(showBoostOnlyLabels);
      let tmp6 = !boostContainer;
      if (!boostContainer) {
        const obj = { string: label };
        tmp6 = __initData9(PlanSectionHeader, obj);
      }
      const obj2 = { children: null };
      items = [tmp6, __initData9(PlanSection, { trackPaymentFlowStep, trackNewPaymentFlow, analyticsLoadId, plans: plans.plansInSection, label, shouldShowModernBoostFlow: boostContainer, showBoostOnlyLabels, recommendedBoostCount, isBoostPurchaseFlow, purchase, subscription, currentPaymentGatewayPlanId: productIdFromSubscription, shouldRemoveYearlyUpsell })];
      obj2.children = items;
      return __initData10(React5, obj2, section.id);
    })
  ];
  obj7.children = items1;
  return closure_32(productIdFromSubscription, obj7);
}
get_ActivityIndicator = fn(17);
({ Image: metroRequire, View: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
const useNativeCheckoutStore = fn(7527).useNativeCheckoutStore;
const PremiumPlanSelectStore = fn(13630);
({ setIsPurchasing: closure_14, usePremiumPlanSelectStore: closure_15 } = PremiumPlanSelectStore);
const PremiumConstants = fn(1373);
({ GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT: closure_16, NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_17, PRICE_PLACEHOLDER: closure_18, PremiumSubscriptionSKUs: closure_19, PremiumTypes: closure_20, SubscriptionIntervalTypes: closure_21, SubscriptionPlans: closure_22 } = PremiumConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_23, AnalyticsObjects: closure_24, AnalyticsObjectTypes: closure_25, Fonts, HorizontalGradient: closure_26, PaymentGateways: closure_27, USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } = Constants);
const ColorConstants = fn(7535);
({ getPremiumGradientColor: closure_28, Gradients: closure_29 } = ColorConstants);
const ItemPurchaseType = fn(4618).ItemPurchaseType;
const jsxProd = fn(21);
({ jsx: items, jsxs: closure_32, Fragment: closure_33 } = jsxProd);
const createStyles = fn(4636);
let obj = { header: null, row: null, rowDisabled: null, imgWumpusNitro: null, imgBoost: null, imgWumpusNitroBoost: null, imgWumpusNitroClassic: null, imgWumpusNitroClassicBoost: null, imgWumpusNitroTier0: null, rowText: null, rowPlanDescription: null, rowPlanDescriptionSubtext: null, rowPrice: null, purchasingSpinner: null, container: null, currentPlanGradient: null, currentPlanRow: null, loadingSpinnerContainer: null, offPlatformSubscriptionMessage: null, premiumHeaderLabel: null, boostContainer: null, boostRowIcon: null, nitroBanner: null, nitroBannerText: null, recommendedText: null };
let obj3 = {};
let merged = Object.assign(TextStylesDefault(Fonts.DISPLAY_EXTRABOLD, undefined, 24));
obj3.marginTop = 16;
obj3.color = fn(5522).DARK_WHITE_500_LIGHT_BLACK_500;
obj.header = obj3;
obj.row = { marginTop: 7, borderRadius: nativeDefault.radii.sm, flexDirection: "row", alignItems: "center", paddingVertical: 12, paddingHorizontal: 12, flexWrap: "wrap", backgroundColor: fn(5522).DARK_PRIMARY_630_LIGHT_PRIMARY_230 };
obj.rowDisabled = { opacity: 0.5 };
obj.imgWumpusNitro = { height: 40, width: 40 };
obj.imgBoost = { height: 40, width: 40 };
obj.imgWumpusNitroBoost = { width: 32, height: 32 };
obj.imgWumpusNitroClassic = { width: 40, height: 40 };
obj.imgWumpusNitroClassicBoost = { width: 32, height: 32 };
obj.imgWumpusNitroTier0 = { width: 40, height: 40 };
let obj4 = { marginTop: 7, borderRadius: nativeDefault.radii.sm, flexDirection: "row", alignItems: "center", paddingVertical: 12, paddingHorizontal: 12, flexWrap: "wrap", backgroundColor: fn(5522).DARK_PRIMARY_630_LIGHT_PRIMARY_230 };
obj.rowText = { fontSize: 16, color: fn(5522).DARK_WHITE_500_LIGHT_BLACK_500 };
obj.rowPlanDescription = { marginLeft: 12, fontFamily: Fonts.PRIMARY_SEMIBOLD, lineHeight: 20 };
obj.rowPlanDescriptionSubtext = { fontSize: 12, marginLeft: 5, fontFamily: Fonts.PRIMARY_MEDIUM, fontWeight: "400" };
obj.rowPrice = { marginLeft: "auto" };
obj.purchasingSpinner = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, alignItems: "center", justifyContent: "center" };
obj.container = { marginHorizontal: 14.5, paddingBottom: 10 };
let obj5 = { fontSize: 16, color: fn(5522).DARK_WHITE_500_LIGHT_BLACK_500 };
obj.currentPlanGradient = { marginTop: 20, borderRadius: nativeDefault.radii.sm };
obj.currentPlanRow = { marginTop: 0.5, marginRight: 0.5, marginLeft: 0.5, marginBottom: 0.5 };
obj.loadingSpinnerContainer = { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" };
obj.offPlatformSubscriptionMessage = { lineHeight: 20, marginTop: 40, margin: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING };
obj.premiumHeaderLabel = { paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING, marginTop: 8 };
let obj6 = { marginTop: 20, borderRadius: nativeDefault.radii.sm };
obj.boostContainer = { rowGap: nativeDefault.space.PX_24 };
obj.boostRowIcon = { width: 32, height: 32 };
let obj7 = { rowGap: nativeDefault.space.PX_24 };
obj.nitroBanner = { alignItems: "center", paddingTop: nativeDefault.space.PX_16, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING };
obj.nitroBannerText = { textAlign: "center" };
let obj8 = { alignItems: "center", paddingTop: nativeDefault.space.PX_16, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING };
obj.recommendedText = { color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
let closure_34 = createStyles.createStyles(obj);
let closure_37 = { [_modDef13634]: "imgWumpusNitro", [_modDef13636]: "imgWumpusNitroBoost", [_modDef13633]: "imgWumpusNitroClassic", [_modDef13635]: "imgWumpusNitroClassicBoost", [_modDef13632]: "imgWumpusNitroTier0", [_modDef13631]: "imgBoost" };
items = [
  {
    id: "premium",
    getLabel() {
      const intl = util.intl;
      return intl.string(util.t.A4BfLn);
    },
    predicate(premiumTier) {
      let tmp = null != premiumTier.premiumTier;
      if (tmp) {
        tmp = 0 === premiumTier.numPremiumGuild;
      }
      return tmp;
    }
  },
  {
    id: "premium-and-premium-guild",
    getLabel(arg0) {
      const intl = util.intl;
      const t = util.t;
      return intl.string(arg0 ? t.rPoOQW : t.lyXyD0);
    },
    predicate(premiumTier) {
      let tmp = null != premiumTier.premiumTier;
      if (tmp) {
        tmp = 0 !== premiumTier.numPremiumGuild;
      }
      return tmp;
    }
  },
  {
    id: "premium-guild",
    getLabel() {
      const intl = util.intl;
      return intl.string(util.t.rPoOQW);
    },
    predicate(premiumTier) {
      let tmp = null == premiumTier.premiumTier;
      if (tmp) {
        tmp = 0 !== premiumTier.numPremiumGuild;
      }
      return tmp;
    }
  }
];
let closure_45 = noop.forwardRef(function PremiumPlanSelect(isBoostPurchaseFlow, arg1) {
  ({ predicate, showCurrentPlan } = isBoostPurchaseFlow);
  if (showCurrentPlan === undefined) {
    showCurrentPlan = true;
  }
  let flag = isBoostPurchaseFlow.isBoostPurchaseFlow;
  if (flag === undefined) {
    flag = false;
  }
  ({ analyticsLocation, planId, applicationId } = isBoostPurchaseFlow);
  _require = applicationId;
  importDefault = undefined;
  let basePurchaseFlowAnalyticsFields;
  let obj6;
  let handlePremiumPurchase;
  let navigation;
  let patchOrderLineItems;
  let orderRequired;
  let stateFromStores;
  const tmp = closure_34();
  let tmp2 = importDefault;
  let tmp3 = basePurchaseFlowAnalyticsFields;
  const analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  items = [SubscriptionStore, SubscriptionPlanStore];
  const tmp7 = handlePremiumPurchase(require("initialize").useStateFromStoresArray(items, () => {
    items = [SubscriptionStore.hasFetchedSubscriptions(), loadedForPremiumSKUs.isLoadedForPremiumSKUs()];
    return items;
  }), 2);
  importDefault = tmp8;
  const items1 = [tmp7[1]];
  const effect = navigation.useEffect(() => {
    if (!closure_1) {
      const premiumSubscriptionPlans = SubscriptionPlanActionCreators.fetchPremiumSubscriptionPlans();
    }
  }, items1);
  const tmp11 = require("useInitialValue")(() => application_id(basePurchaseFlowAnalyticsFields[47]).getNewAnalyticsLoadId());
  let obj = require("initialize");
  const tmp6 = handlePremiumPurchase;
  let obj3 = { analyticsLoadId: tmp11, analyticsLocation: null, analyticsLocations: null };
  let merged = Object.assign(analyticsLocation);
  obj3.analyticsLocation = { object: constants3.BUTTON_CTA, object_type: constants4.BUY };
  obj3.analyticsLocations = analyticsLocations;
  basePurchaseFlowAnalyticsFields = require("PremiumAnalyticsUtils").getBasePurchaseFlowAnalyticsFields(obj3);
  if (null != planId) {
    let obj5 = { subscription_plan_id: planId };
    obj6 = obj5;
  } else {
    obj6 = {};
  }
  tmp2(tmp3[62])(() => {
    const obj2 = {};
    const merged = Object.assign(basePurchaseFlowAnalyticsFields);
    const merged1 = Object.assign(obj6);
    obj2.application_id = application_id;
    const result = PaymentFlowStartedTriggerPoint.trackPaymentFlowStartedAnalyticsAndCTP(obj2);
  });
  const activeSubscription = useNativeCheckoutStore((activeSubscription) => ({ activeSubscription: activeSubscription.checkoutInitParameters.activeSubscription, order: activeSubscription.orderRecord })).activeSubscription;
  let obj2 = require("PremiumAnalyticsUtils");
  let obj4 = { object: constants3.BUTTON_CTA, object_type: constants4.BUY };
  handlePremiumPurchase = require("handlePremiumPurchase").useHandlePremiumPurchase();
  const tmp4Result = require("handlePremiumPurchase");
  navigation = require("useNavigation").useNavigation();
  const tmp4Result9 = require("useNavigation");
  const isPaymentsBlocked = require("BlockedPaymentsCountryExperiment").useIsPaymentsBlocked();
  const tmp4Result10 = require("BlockedPaymentsCountryExperiment");
  if (null != activeSubscription) {
    let obj7 = { subscriptionId: activeSubscription.id, renewal: true, analyticsLocations, analyticsLocation: tmp2(tmp3[68]).PREMIUM_PLAN_SELECT };
    let obj8 = obj7;
  } else {
    obj8 = {};
  }
  const first = tmp6(require("PremiumSubscriptionInvoice").useFetchSubscriptionInvoicePreview(obj8), 1)[0];
  const tmp15Result = useNativeCheckoutStore((patchOrderLineItems) => ({ patchOrderLineItems: patchOrderLineItems.patchOrderLineItems, isPatchOrderLoading: patchOrderLineItems.isPatchOrderLoading, orderRequired: patchOrderLineItems.orderRequired }));
  patchOrderLineItems = tmp15Result.patchOrderLineItems;
  orderRequired = tmp15Result.orderRequired;
  const tmp4Result11 = require("PremiumSubscriptionInvoice");
  const items2 = [SubscriptionStore];
  stateFromStores = require("initialize").useStateFromStores(items2, () => SubscriptionStore.getPremiumTypeSubscription());
  _require = obj6((applicationId, arg1) => {
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, value) {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === v3) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              let obj4 = { value, done: true };
              return obj4;
            } else {
              closure_3 = tmp3;
              _location = tmp7;
              closure_130_0 = applicationId;
              closure_130_1 = closure_1;
              closure_130_2 = undefined;
              closure_2_14(true, applicationId);
              if (null != stateFromStores) {
                let modifySubscriptionItemsForProduct = applicationId(basePurchaseFlowAnalyticsFields[46]).getModifySubscriptionItemsForProduct(applicationId, tmp73);
                const obj9 = applicationId(basePurchaseFlowAnalyticsFields[46]);
              } else {
                modifySubscriptionItemsForProduct = applicationId(basePurchaseFlowAnalyticsFields[46]).getSubscriptionItemsForProduct(applicationId);
                const obj8 = applicationId(basePurchaseFlowAnalyticsFields[46]);
              }
              closure_130_2 = undefined;
              if (c7) {
                v3 = 2;
                c7 = 1;
                const obj7 = {
                  value: v3(modifySubscriptionItemsForProduct.map((planId) => {
                              const obj = { sku_id: null, subscription_plan_id: null, quantity: null, purchase_type: null };
                              const obj2 = applicationId(4294);
                              obj.sku_id = obj2.castPremiumSubscriptionAsSkuId(closure_1_1(4294).getSkuIdForPlan(planId.planId));
                              ({ planId: obj.subscription_plan_id, quantity: obj.quantity } = planId);
                              obj.purchase_type = constants.SUBSCRIPTION;
                              return obj;
                            })),
                  done: false
                };
                return obj7;
              }
            }
          } else {
            if (1 === tmp7) {
              c5 = 0;
              if (tmp58 instanceof closure_1(basePurchaseFlowAnalyticsFields[69])) {
                const subscriptions = applicationId(basePurchaseFlowAnalyticsFields[70]).fetchSubscriptions();
                const obj5 = applicationId(basePurchaseFlowAnalyticsFields[70]);
                const obj10 = { title: null, body: null };
                const intl3 = applicationId(basePurchaseFlowAnalyticsFields[22]).intl;
                obj10.title = intl3.string(applicationId(basePurchaseFlowAnalyticsFields[22]).t["U+H+kd"]);
                const intl4 = applicationId(basePurchaseFlowAnalyticsFields[22]).intl;
                obj10.body = intl4.string(applicationId(basePurchaseFlowAnalyticsFields[22]).t.yyDkbE);
                closure_1(basePurchaseFlowAnalyticsFields[48]).show(obj10);
                obj6 = closure_1(basePurchaseFlowAnalyticsFields[48]);
              } else {
                const obj11 = { title: null, body: null, isDismissable: true };
                const intl = applicationId(basePurchaseFlowAnalyticsFields[22]).intl;
                obj11.title = intl.string(applicationId(basePurchaseFlowAnalyticsFields[22]).t.zrhHH3);
                const intl2 = applicationId(basePurchaseFlowAnalyticsFields[22]).intl;
                obj11.body = intl2.string(applicationId(basePurchaseFlowAnalyticsFields[22]).t.PjfUXe);
                closure_1(basePurchaseFlowAnalyticsFields[48]).show(obj11);
                let obj3 = closure_1(basePurchaseFlowAnalyticsFields[48]);
              }
              closure_2_14(false);
            } else if (2 === tmp7) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else {
                if (arg0 !== 2) {
                  closure_130_2 = value;
                  if (null == value) {
                    closure_2_14(false);
                    c7 = 3;
                  }
                }
                c7 = 3;
                const obj12 = { value, done: true };
                return obj12;
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 !== 2) {
              c5 = 0;
            }
            c5 = 0;
            c7 = 3;
            let obj = { value, done: true };
            return obj;
          }
          c5 = 1;
          const obj13 = { productId: closure_130_0, analyticsLocation: _location.location, analyticsLoadId: closure_130_1, applicationId, orderId: null, onPurchaseComplete: null };
          let id;
          if (closure_130_2 != null) {
            id = closure_130_2.id;
          }
          obj13.orderId = id;
          obj13.onPurchaseComplete = function onPurchaseComplete(paymentGateway) {
            closure_1(4981).close();
            if (paymentGateway.paymentGateway === constants.APPLE_ADVANCED_COMMERCE) {
              premiumTypeSubscription = premiumTypeSubscription.getPremiumTypeSubscription();
              if (null == premiumTypeSubscription) {
                const _Error = Error;
                const error = new Error("PremiumActivatedAlert: no premium subscription in store post-activation");
                const obj2 = { tags: { source: "showPremiumActivatedAlert.nullSubscription" } };
                const result = premiumTypeSubscription(4309).captureBillingException(error, obj2);
                const obj4 = premiumTypeSubscription(4309);
                closure_1(4839).popWithKey(premiumTypeSubscription(7515).PREMIUM_KEY);
                if (navigation.canGoBack()) {
                  navigation.goBack();
                }
                const tmpResult = closure_1(4839);
              } else {
                const obj3 = {
                  importer() {
                        return premiumTypeSubscription(basePurchaseFlowAnalyticsFields[50])(basePurchaseFlowAnalyticsFields[58], basePurchaseFlowAnalyticsFields.paths).then(() => { ... });
                      }
                };
                closure_1(4981).openLazy(obj3);
                const tmpResult2 = closure_1(4981);
              }
            }
            let obj = closure_1(4981);
          };
          v3 = 3;
          c7 = 1;
          const obj14 = { value: tmp58(obj13), done: false };
          return obj14;
        } catch (tmp58) {
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp58;
          } else {
            v3 = tmp;
          }
        }
      }
    })();
  });
  const items3 = [basePurchaseFlowAnalyticsFields.location, applicationId, handlePremiumPurchase, navigation, patchOrderLineItems, orderRequired, stateFromStores];
  if (null == predicate) {
    return null;
  } else {
    if (!tmp7[0]) {
      let obj9 = { style: tmp.loadingSpinnerContainer, children: closure_31(tmp4(tmp3[42]).ActivityIndicator, { animating: true, size: "large" }) };
      closure_31(orderRequired, obj9);
    }
    let obj11 = arg1;
    if (isPaymentsBlocked) {
      let obj10 = { ref: obj11, contentInset: null, children: null };
      obj11 = { top: 40 };
      obj10.contentInset = obj11;
      tmp2 = tmp2(tmp3[71]);
      tmp3 = closure_31(tmp2, {});
      obj10.children = tmp3;
      let tmp25Result2 = closure_31(stateFromStores, obj10);
    } else {
      if (null != activeSubscription) {
        if (activeSubscription.isOnPlatformMatchingExternalPaymentGateway) {
          tmp4(tmp3[46]);
          tmp4(tmp3[46]);
        }
        let tmp25Result = null != first;
        if (tmp25Result) {
          let obj12 = { children: null };
          let obj13 = { style: tmp.premiumHeaderLabel, variant: "eyebrow", color: "text-default", accessibilityRole: "header", children: null };
          let intl = tmp4(tmp3[22]).intl;
          obj13.children = intl.string(tmp4(tmp3[22]).t.ITurwY);
          const items4 = [closure_31(tmp4(tmp3[21]).Text, obj13), ];
          let obj14 = { subscription: activeSubscription, renewalInvoicePreview: first };
          items4[1] = closure_31(tmp4(tmp3[72]).PremiumSubscriptionHeader, obj14);
          obj12.children = items4;
          tmp25Result = closure_32(closure_33, obj12);
        }
        const obj15 = { children: null };
        const items5 = [tmp25Result, ];
        const obj16 = { style: tmp.offPlatformSubscriptionMessage, variant: "text-md/semibold", children: tmp4(tmp3[73]).getExternalManagementMessage(activeSubscription, { shouldAllowExternalManagement: true }) };
        items5[1] = closure_31(tmp4(tmp3[21]).Text, obj16);
        obj15.children = items5;
        tmp25Result2 = closure_32(stateFromStores, obj15);
        const tmp4Result15 = tmp4(tmp3[73]);
      }
      const obj17 = { ref: obj11, children: null };
      const obj18 = {
        subscription: activeSubscription,
        plans: tmp4(tmp3[46]).getPremiumBundlesWithPredicate(predicate),
        showCurrentPlan,
        isBoostPurchaseFlow: flag,
        analyticsLoadId: tmp11,
        trackPaymentFlowStep(arg0) {
              ({ productId, fromStep, toStep } = arg0);
              const obj = AnalyticsUtilsDefault;
              const obj2 = { application_id };
              const merged = Object.assign(PremiumAnalyticsUtils.getPaymentFlowStepAnalyticsFields(basePurchaseFlowAnalyticsFields, { from_step: fromStep, to_step: toStep, subscription_plan_gateway_plan_id: productId }));
              obj.track(constants2.PAYMENT_FLOW_STEP, obj2);
            },
        trackNewPaymentFlow(arg0) {
              ({ newFlowAnalyticsLoadId, productId } = arg0);
              const obj2 = {};
              const merged = Object.assign(basePurchaseFlowAnalyticsFields);
              obj2.subscription_plan_gateway_plan_id = productId;
              obj2.load_id = newFlowAnalyticsLoadId;
              obj2.application_id = application_id;
              const result = PaymentFlowStartedTriggerPoint.trackPaymentFlowStartedAnalyticsAndCTP(obj2);
            },
        purchase: tmp22
      };
      obj17.children = closure_31(PlanSections, obj18);
      tmp25Result2 = closure_31(stateFromStores, obj17);
      const tmp4Result16 = tmp4(tmp3[46]);
    }
  }
  const tmp4Result12 = require("initialize");
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/PremiumPlanSelect.tsx");

export default function PremiumPlanSelectWithOrderCTX(isBoostPurchaseFlow) {
  _require = isBoostPurchaseFlow;
  const tmp = closure_34();
  const navigation = require("useNavigation").useNavigation();
  let obj = require("useNavigation");
  items = [SubscriptionStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => SubscriptionStore.getPremiumTypeSubscription());
  const NitroACOMSubscriptionExperiment = require("ACOMExperiments").NitroACOMSubscriptionExperiment;
  let obj2 = require("initialize");
  if (obj3.isIOS()) {
    if (NitroACOMSubscriptionExperiment.useConfig({ location: "PremiumPlanSelectWithOrderCTX" }).enabled) {
      let APPLE = constants.APPLE_ADVANCED_COMMERCE;
    } else {
      APPLE = constants.APPLE;
    }
  } else {
    let paymentGateway = constants.GOOGLE;
    if (null != stateFromStores) {
      paymentGateway = stateFromStores.paymentGateway;
    }
    let items1 = [stateFromStores];
    const memo = mobileBoostingEnabled.useMemo(() => {
      let baseSubscriptionItemForSubscriptionItems = null;
      if (null != stateFromStores) {
        baseSubscriptionItemForSubscriptionItems = PremiumSubscription.getBaseSubscriptionItemForSubscriptionItems(tmp.items);
      }
      if (null != baseSubscriptionItemForSubscriptionItems) {
        const obj2 = { subscriptionPlanId: baseSubscriptionItemForSubscriptionItems.planId, skuId: null, quantity: null };
        const obj5 = PremiumUtils;
        obj2.skuId = obj5.castPremiumSubscriptionAsSkuId(PremiumUtilsDefault.getSkuIdForPlan(baseSubscriptionItemForSubscriptionItems.planId));
        obj2.quantity = baseSubscriptionItemForSubscriptionItems.quantity;
        items = [obj2];
        let items1 = items;
      } else {
        const obj4 = { subscriptionPlanId: PREMIUM_YEAR_TIER_2.PREMIUM_YEAR_TIER_2, skuId: PremiumUtils.castPremiumSubscriptionAsSkuId(TIER_2.TIER_2), quantity: 1 };
        items1 = [obj4];
      }
      return items1;
    }, items1);
    const items2 = [SubscriptionStore];
    const stateFromStores1 = tmp2(tmp3[32]).useStateFromStores(items2, () => SubscriptionStore.hasFetchedSubscriptions());
    const items3 = [stateFromStores1];
    const effect = mobileBoostingEnabled.useEffect(() => {
      if (!stateFromStores1) {
        const subscriptions = actions_BillingActionCreators.fetchSubscriptions();
      }
    }, items3);
    let obj4 = mobileBoostingEnabled;
    const tmp2Result = tmp2(tmp3[32]);
    const items4 = [GuildStore];
    const stateFromStores2 = tmp2(tmp3[32]).useStateFromStores(items4, () => {
      let tmp2;
      if (null != isBoostPurchaseFlow.guildId) {
        const guild = GuildStore.getGuild(tmp.guildId);
        let name;
        if (guild != null) {
          name = guild.name;
        }
        tmp2 = name;
      }
      return tmp2;
    });
    mobileBoostingEnabled = true === isBoostPurchaseFlow.isBoostPurchaseFlow;
    if (mobileBoostingEnabled) {
      mobileBoostingEnabled = tmp2(tmp3[53]).getMobileBoostingEnabled("PremiumPlanSelect");
      const tmp2Result5 = tmp2(tmp3[53]);
    }
    const items5 = [navigation, mobileBoostingEnabled, stateFromStores2];
    const layoutEffect = obj4.useLayoutEffect(() => {
      if (mobileBoostingEnabled) {
        if (null != stateFromStores2) {
          const intl2 = util.intl;
          const obj = { server: tmp3 };
          let formatToPlainStringResult = intl2.formatToPlainString(util.t.LcefAL, obj);
        }
        const obj2 = { title: formatToPlainStringResult };
        tmp2(obj2);
      }
      const intl = util.intl;
      formatToPlainStringResult = intl.string(util.t.u95Dt4);
    }, items5);
    if (stateFromStores1) {
      if (null != paymentGateway) {
        let obj5 = {
          paymentGateway,
          orderRequired: paymentGateway === constants.APPLE_ADVANCED_COMMERCE,
          skuIds: [],
          defaultPlans: memo,
          isGift: false,
          activeSubscription: stateFromStores,
          onOrderRetryCancellation() {
                  if (navigation.canGoBack()) {
                    navigation.goBack();
                  } else {
                    navigation.pop();
                  }
                },
          children: null
        };
        let obj6 = {};
        const merged = Object.assign(isBoostPurchaseFlow);
        obj5.children = closure_31(closure_45, obj6);
        return closure_31(navigation(tmp3[76]), obj5);
      }
      let str2 = "Android";
      if (tmp2Result6.isIOS()) {
        str2 = "iOS";
      }
      const obj7 = { children: null };
      const obj8 = { variant: "display-md", children: null };
      let intl = tmp2(tmp3[22]).intl;
      const obj9 = { mobilePlatform: str2 };
      obj8.children = intl.format(tmp2(tmp3[22]).t.CnoyAN, obj9);
      obj7.children = closure_31(tmp2(tmp3[21]).Text, obj8);
      return closure_31(closure_7, obj7);
    } else {
      const obj10 = { style: tmp.loadingSpinnerContainer, children: closure_31(tmp2(tmp3[42]).ActivityIndicator, { animating: true, size: "large" }) };
      return closure_31(closure_7, obj10);
    }
    const tmp2Result4 = tmp2(tmp3[32]);
  }
  obj3 = require("utils/PlatformUtils");
};