// === Module 15386: PremiumPlanSelect ===

// Module 15386 (PremiumPlanSelect)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import native from "native" /* 1188 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1377 */;
import PremiumUtils from "PremiumUtils" /* 2048 */;
import PremiumSubscription from "PremiumSubscription" /* 2059 */;
import LinearGradientDefault from "LinearGradient" /* 5582 */;
import Text_Text from "Text/Text" /* 5619 */;
import Stack_Stack from "Stack/Stack" /* 6022 */;
import actions_BillingActionCreators from "actions/BillingActionCreators" /* 6529 */;
import TextStylesDefault from "TextStyles" /* 6717 */;
import SubscriptionPlanActionCreators from "SubscriptionPlanActionCreators" /* 7425 */;
import PremiumBundledPlansUtils from "PremiumBundledPlansUtils" /* 7585 */;
import ProductIds from "ProductIds" /* 7586 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9506 */;
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils" /* 10540 */;
import PaymentFlowStartedTriggerPoint from "PaymentFlowStartedTriggerPoint" /* 10657 */;
import openPremiumPlanWhatYouLoseActionSheetDefault from "openPremiumPlanWhatYouLoseActionSheet" /* 15220 */;
import PremiumPlanWhatYouLoseActionSheet from "PremiumPlanWhatYouLoseActionSheet" /* 15221 */;
import TreasureChestBannerSpotIllustration from "TreasureChestBannerSpotIllustration" /* 15388 */;
import _modDef15392 from "module_15392" /* 15392 */;
import _modDef15393 from "module_15393" /* 15393 */;
import _modDef15394 from "module_15394" /* 15394 */;
import _modDef15395 from "module_15395" /* 15395 */;
import _modDef15396 from "module_15396" /* 15396 */;
import _modDef15397 from "module_15397" /* 15397 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 4880 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 2052 */;
import SubscriptionStore from "SubscriptionStore" /* 2053 */;
import IAPStore from "IAPStore" /* 7590 */;

const require = globalThis.__r;
const PremiumUtilsDefault = PremiumUtils;

require = fn;
function BoostPurchaseNitroBanner() {
  const tmp = closure_33();
  const obj = { align: "center", spacing: nativeDefault.space.PX_12, style: tmp.nitroBanner, children: null };
  items = [__initData8(TreasureChestBannerSpotIllustration.TreasureChestBannerSpotIllustration, { width: 117, height: 93, accessible: false }), ];
  const obj2 = { align: "center", spacing: nativeDefault.space.PX_4, children: null };
  const obj3 = { variant: "text-md/semibold", color: "text-default", style: tmp.nitroBannerText, children: null };
  const intl = util.intl;
  const obj4 = { discount: null };
  const obj5 = { variant: "text-md/semibold", color: "text-feedback-positive", children: null };
  const intl2 = util.intl;
  obj5.children = intl2.format(util.t.RmVM19, { percentageOff });
  obj4.discount = __initData8(Text_Text.Text, obj5, "discount");
  obj3.children = intl.format(util.t.jbrHpT, obj4);
  const items1 = [__initData8(Text_Text.Text, obj3), ];
  const obj7 = { variant: "text-sm/medium", color: "text-muted", style: tmp.nitroBannerText, children: null };
  const intl3 = util.intl;
  obj7.children = intl3.format(util.t.HYpETY, { boostCount });
  items1[1] = __initData8(Text_Text.Text, obj7);
  obj2.children = items1;
  items[1] = __initData9(Stack_Stack.Stack, obj2);
  obj.children = items;
  return __initData9(Stack_Stack.Stack, obj);
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
      if (premiumTier.premiumTier === closure_1_19.TIER_1) {
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
  items = [__initData8(NitroWheelIcon.NitroWheelIcon, { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE }), ];
  const intl = util.intl;
  if (interval === constants.MONTH) {
    let AbOLNu = util.t.AbOLNu;
  } else {
    AbOLNu = util.t["rS8FA+"];
  }
  const obj3 = { variant: "text-sm/medium", color: "text-muted", children: null };
  const obj2 = { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
  obj3.children = intl.format(AbOLNu, { price: __initData8(Text_Text.Text, { variant: "text-sm/semibold", color: "text-feedback-positive", children: price }, "price") });
  items[1] = __initData8(Text_Text.Text, obj3);
  obj.children = items;
  return __initData9(Stack_Stack.Stack, obj);
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
  useNativeCheckoutStore = undefined;
  const tmp2 = closure_33();
  const tmp4 = closure_14((purchasingProductId) => purchasingProductId.purchasingProductId === plan.productId);
  const tmp3 = closure_14((isPurchasing) => isPurchasing.isPurchasing);
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
  let tmp16 = plan.premiumTier === closure_19.TIER_2;
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
    tmp17 = closure_30(tmp5(subscription[36]).LegacyText, obj5);
  }
  let tmp20 = null == plan.premiumTier;
  if (!tmp20) {
    tmp20 = 0 !== plan.numPremiumGuild;
  }
  if (null == plan.premiumTier) {
    let tmp7Result = require("module_15392");
  } else if (0 !== plan.numPremiumGuild) {
    if (plan.premiumTier === closure_19.TIER_1) {
      tmp7Result = require("module_15396");
    } else {
      tmp7Result = require("module_15397");
    }
  } else {
    const premiumTier = plan.premiumTier;
    if (closure_19.TIER_0 === premiumTier) {
      tmp7Result = require("module_15393");
    } else if (closure_19.TIER_1 === premiumTier) {
      tmp7Result = require("module_15394");
    } else if (closure_19.TIER_2 === premiumTier) {
      tmp7Result = require("module_15395");
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
    tmp23 = closure_17;
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
        if (premiumTypeFromSubscription === closure_2_19.TIER_2) {
          if (plan.premiumTier === closure_2_19.TIER_0) {
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
  useNativeCheckoutStore = tmp28;
  if (flag4) {
    if (tmp20) {
      let tmp37Result = closure_30(require("BoostGemPixel"), { width: 32, height: 32 });
    } else if (tmp16) {
      const obj8 = { size: "lg", color: require("native").colors.ICON_DEFAULT };
      tmp37Result = closure_30(tmp5(subscription[30]).NitroWheelIcon, obj8);
    } else {
      const obj9 = { style: tmp2.boostRowIcon, source: tmp7Result };
      tmp37Result = closure_30(require("FastImage"), obj9);
    }
    const obj10 = { icon: tmp37Result, label: getPlanDescription(plan, flag5), subLabel: null, trailing: null, arrow: null, disabled: null, onPress: null };
    if (tmp28) {
      const obj11 = { variant: "text-xs/semibold", color: "none", style: tmp2.recommendedText, children: null };
      const intl4 = tmp5(subscription[22]).intl;
      obj11.children = intl4.string(tmp5(subscription[22]).t.WThgAR);
      formatToPlainStringResult1 = closure_30(tmp5(subscription[21]).Text, obj11);
    }
    obj10.subLabel = formatToPlainStringResult1;
    if (tmp4) {
      const obj12 = { animating: true, size: "small", color: token };
      let tmp37Result2 = closure_30(tmp5(subscription[43]).ActivityIndicator, obj12);
    } else if (null != premiumTier2DeltaPriceString) {
      const obj13 = { price: premiumTier2DeltaPriceString, interval: plan.interval };
      tmp37Result2 = closure_30(BoostDeltaPriceTrailing, obj13);
    } else {
      const obj14 = { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: formatToPlainStringResult };
      tmp37Result2 = closure_30(tmp5(subscription[21]).Text, obj14);
    }
    obj10.trailing = tmp37Result2;
    obj10.arrow = flag2;
    if (flag) {
      flag = !tmp4;
    }
    if (!flag) {
      flag = !flag2;
    }
    obj10.disabled = flag;
    let tmp42;
    if (flag2) {
      tmp42 = onPress;
    }
    obj10.onPress = tmp42;
    return closure_30(tmp5(subscription[40]).TableRow, obj10);
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
    const obj16 = { style: tmp2[closure_36[tmp7Result]], source: tmp7Result };
    const items3 = [closure_30(require("FastImage"), obj16), , , , ];
    const obj17 = { style: null, children: null };
    const items4 = [, ];
    ({ rowText: arr5[0], rowPlanDescription: arr5[1] } = tmp2);
    obj17.style = items4;
    obj17.children = getPlanDescription(plan, flag5);
    items3[1] = closure_30(tmp5(subscription[36]).LegacyText, obj17);
    items3[2] = tmp17;
    const obj18 = { style: null, children: null };
    const items5 = [, ];
    ({ rowText: arr6[0], rowPrice: arr6[1] } = tmp2);
    obj18.style = items5;
    obj18.children = formatToPlainStringResult;
    items3[3] = closure_30(tmp5(subscription[36]).LegacyText, obj18);
    let tmp31Result = null;
    if (tmp4) {
      const obj19 = { animating: true, size: "small", style: tmp2.purchasingSpinner, color: token };
      tmp31Result = closure_30(tmp5(subscription[43]).ActivityIndicator, obj19);
    }
    items3[4] = tmp31Result;
    obj15.children = items3;
    const tmp29Result = closure_31(premiumTypeFromSubscription, obj15);
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
      tmp31Result2 = closure_30(tmp5(subscription[44]).TouchableHighlight, obj20);
      tmp5Result2 = tmp5(subscription[45]);
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
  ({ recommendedBoostCount: dependencyMap, isBoostPurchaseFlow: asyncGeneratorStep, purchase: _slicedToArray, analyticsLoadId: noop, trackNewPaymentFlow: closure_6, trackPaymentFlowStep: closure_7, subscription: useNativeCheckoutStore, currentPaymentGatewayPlanId: GuildStore, shouldRemoveYearlyUpsell: SubscriptionPlanStore } = showBoostOnlyLabels);
  c12 = undefined;
  const tmp = useNativeCheckoutStore((getCheckoutContextRecord) => getCheckoutContextRecord.getCheckoutContextRecord());
  closure_11 = tmp;
  let isIOSResult = shouldShowModernBoostFlow(1377).isIOS();
  if (isIOSResult) {
    isIOSResult = null != tmp;
  }
  c12 = isIOSResult;
  const mapped = plans.map((plan) => __initData8(PlanRow, {
    plan,
    subscription,
    shouldShowModernBoostFlow,
    showBoostOnlyLabels: flag,
    recommendedBoostCount,
    isBoostPurchaseFlow,
    analyticsLoadId,
    purchase(productId) {
      closure_0 = productId;
      const toggledIntervalProduct = shouldShowModernBoostFlow(recommendedBoostCount[47]).getToggledIntervalProduct(productId);
      let tmp5 = null;
      if (closure_12) {
        tmp5 = null;
        if (null != toggledIntervalProduct) {
          availablePlanForItems = undefined;
          if (availablePlanForItems != null) {
            availablePlanForItems = availablePlanForItems.getAvailablePlanForItems(shouldShowModernBoostFlow(recommendedBoostCount[47]).getSubscriptionItemsForProduct(toggledIntervalProduct));
            const tmpResult = shouldShowModernBoostFlow(recommendedBoostCount[47]);
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
      let obj = shouldShowModernBoostFlow(recommendedBoostCount[47]);
      shouldShowModernBoostFlow(recommendedBoostCount[47]);
      if (null != toggledIntervalProduct) {
        if (tmp7) {
          if (!closure_10) {
            if (tmpResult3.getPremiumBundledItemsFromProductId(productId).interval !== constants.YEAR) {
              if (!tmp10) {
                let obj3 = { fromStep: shouldShowModernBoostFlow(recommendedBoostCount[48]).PaymentFlowStep.PLAN_SELECT, toStep: shouldShowModernBoostFlow(recommendedBoostCount[48]).PaymentFlowStep.YEARLY_UPSELL, productId };
                closure_7(obj3);
                let obj4 = {
                  importer() {
                              return shouldShowModernBoostFlow(recommendedBoostCount[51])(recommendedBoostCount[50], recommendedBoostCount.paths).then((result) => {
                                closure_0 = result.default;
                                return /* F139732 */ function() { ... };
                              });
                            },
                  hideActionSheet: true,
                  isDismissable: true
                };
                flag(recommendedBoostCount[49]).openLazy(obj4);
                let obj6 = flag(recommendedBoostCount[49]);
              }
            }
          }
        }
      }
      tmpResult3 = shouldShowModernBoostFlow(recommendedBoostCount[47]);
      closure_7({ fromStep: shouldShowModernBoostFlow(recommendedBoostCount[48]).PaymentFlowStep.PLAN_SELECT, toStep: shouldShowModernBoostFlow(recommendedBoostCount[48]).PaymentFlowStep.EXTERNAL_PAYMENT, productId });
      return closure_4(productId, closure_5);
    }
  }, plan.productId));
  if (shouldShowModernBoostFlow) {
    let obj2 = { title: showBoostOnlyLabels.label, hasIcons: true, children: mapped };
    let tmp7Result = closure_30(shouldShowModernBoostFlow(7054).TableRowGroup, obj2);
  } else {
    let obj3 = { children: mapped };
    tmp7Result = closure_30(closure_6, obj3);
  }
  return tmp7Result;
}
function CurrentPlanRow(arg0) {
  ({ subscription, paymentGatewayPlanId } = arg0);
  ({ analyticsLoadId, showCurrentPlan } = arg0);
  const tmp = closure_33();
  if (showCurrentPlan) {
    if (null != subscription) {
      if (null != paymentGatewayPlanId) {
        const premiumBundledItemsFromProductId = PremiumBundledPlansUtils.getPremiumBundledItemsFromProductId(paymentGatewayPlanId);
        const premiumTier = premiumBundledItemsFromProductId.premiumTier;
        if (null != premiumTier) {
          let PREMIUM_GUILD = __initData5(premiumTier);
        } else {
          PREMIUM_GUILD = constants6.PREMIUM_GUILD;
        }
        const obj = { style: tmp.currentPlanGradient, colors: PREMIUM_GUILD, start: null, end: null, children: null };
        ({ START: obj.start, END: obj.end } = __initData4);
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
        obj.children = __initData8(PlanRow, obj2);
        return __initData8(LinearGradientDefault, obj);
      }
    }
  }
  return null;
}
function PlanSectionHeader(children) {
  const tmp = closure_33();
  return __initData8(native.LegacyText, { style: closure_33().header, accessibilityRole: "header", children: children.string });
}
function PlanSections(showCurrentPlan) {
  ({ plans, subscription } = showCurrentPlan);
  const analyticsLoadId = showCurrentPlan.analyticsLoadId;
  ({ trackPaymentFlowStep: asyncGeneratorStep, trackNewPaymentFlow: _slicedToArray, purchase: noop } = showCurrentPlan);
  useNativeCheckoutStore = undefined;
  let boostContainer;
  let showBoostOnlyLabels;
  closure_12 = undefined;
  const tmp = closure_33();
  closure_6 = useNativeCheckoutStore((getCheckoutContextRecord) => getCheckoutContextRecord.getCheckoutContextRecord());
  let productIdFromSubscription = null;
  if (null != subscription) {
    productIdFromSubscription = subscription(analyticsLoadId[47]).getProductIdFromSubscription(subscription, false);
    let obj = subscription(analyticsLoadId[47]);
  }
  let productIdFromSubscription1 = productIdFromSubscription;
  if (!boostContainer) {
    if (null != subscription) {
      try {
        productIdFromSubscription1 = subscription(analyticsLoadId[47]).getProductIdFromSubscription(subscription, true);
        let obj2 = subscription(analyticsLoadId[47]);
      } catch (err) {
      }
    }
  }
  let tmp8 = boostContainer;
  if (!boostContainer) {
    let hasActiveTrial;
    if (subscription != null) {
      hasActiveTrial = subscription.hasActiveTrial;
    }
    let tmp10 = true === hasActiveTrial;
    if (tmp10) {
      tmp10 = subscription.paymentGateway === constants5.APPLE_ADVANCED_COMMERCE;
    }
    tmp8 = tmp10;
  }
  useNativeCheckoutStore = tmp8;
  let tmp12 = null != subscription;
  if (tmp12) {
    tmp12 = subscription(analyticsLoadId[23]).getPremiumTypeFromSubscription(subscription) === closure_19.TIER_2;
    let obj3 = subscription(analyticsLoadId[23]);
  }
  let tmp16 = boostContainer;
  if (boostContainer) {
    tmp16 = tmp12;
  }
  showBoostOnlyLabels = tmp16;
  let tmp17 = plans;
  if (!boostContainer) {
    let hasActiveTrial1;
    if (subscription != null) {
      hasActiveTrial1 = subscription.hasActiveTrial;
    }
    tmp17 = plans;
    if (true !== hasActiveTrial1) {
      tmp17 = (function withCurrentPlanAlternative(plans, productIdFromSubscription, productIdFromSubscription1) {
        if (null != productIdFromSubscription) {
          if (obj3.isValidBundleProductId(productIdFromSubscription)) {
            if (null == productIdFromSubscription1) {
              let toggledIntervalProduct = tmp7(analyticsLoadId[47]).getToggledIntervalProduct(productIdFromSubscription);
              let tmp7Result = tmp7(analyticsLoadId[47]);
            } else {
              toggledIntervalProduct = productIdFromSubscription;
            }
            let tmp3 = plans;
            if (null != toggledIntervalProduct) {
              tmp3 = plans;
              if (!plans.some((productId) => {
                let tmp2 = null == toggledIntervalProduct;
                if (!tmp2) {
                  tmp2 = !subscription(analyticsLoadId[47]).isValidBundleProductId(toggledIntervalProduct);
                  const obj = subscription(analyticsLoadId[47]);
                }
                let tmp5 = !tmp2;
                if (!tmp2) {
                  let result = subscription(analyticsLoadId[47]).productsHaveSamePerks(productId.productId, toggledIntervalProduct);
                  if (result) {
                    result = productId.interval === subscription(analyticsLoadId[47]).getPremiumBundledItemsFromProductId(toggledIntervalProduct).interval;
                    const tmp7Result = subscription(analyticsLoadId[47]);
                  }
                  tmp5 = result;
                  const obj2 = subscription(analyticsLoadId[47]);
                }
                return tmp5;
              })) {
                items = [];
                const arraySpreadResult = HermesBuiltin.arraySpread(plans, 0);
                items[arraySpreadResult] = tmp7(analyticsLoadId[47]).getPremiumBundledItemsFromProductId(toggledIntervalProduct);
                tmp3 = items;
                const tmp7Result2 = tmp7(analyticsLoadId[47]);
              }
            }
            return tmp3;
          }
          obj3 = toggledIntervalProduct(analyticsLoadId[47]);
        }
        return plans;
      })(plans, productIdFromSubscription, productIdFromSubscription1);
    }
  }
  closure_12 = tmp17;
  if (!boostContainer) {
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
        predicateResult = productId.premiumTier !== closure_3_19.TIER_1;
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
  if (tmp16) {
    found1 = found;
    if (tmp20) {
      found1 = found.filter((section) => "premium-guild" !== section.section.id);
    }
  }
  items = [tmp.container, ];
  if (boostContainer) {
    boostContainer = tmp.boostContainer;
  }
  let obj4 = { style: items, children: null };
  items[1] = boostContainer;
  if (tmp16) {
    tmp16 = closure_30(BoostPurchaseNitroBanner, {});
  }
  const items1 = [
    tmp16,
    closure_30(CurrentPlanRow, { subscription, paymentGatewayPlanId: productIdFromSubscription1, analyticsLoadId, showCurrentPlan: showCurrentPlan.showCurrentPlan }),
    found1.map((plans) => {
      const section = plans.section;
      const label = section.getLabel(showBoostOnlyLabels);
      let tmp6 = !boostContainer;
      if (!boostContainer) {
        const obj = { string: label };
        tmp6 = __initData8(PlanSectionHeader, obj);
      }
      const obj2 = { children: null };
      items = [tmp6, __initData8(PlanSection, { trackPaymentFlowStep, trackNewPaymentFlow, analyticsLoadId, plans: plans.plansInSection, label, shouldShowModernBoostFlow: boostContainer, showBoostOnlyLabels, recommendedBoostCount: num, isBoostPurchaseFlow: boostContainer, purchase, subscription, currentPaymentGatewayPlanId: productIdFromSubscription, shouldRemoveYearlyUpsell })];
      obj2.children = items;
      return __initData9(timestampProducer, obj2, section.id);
    })
  ];
  obj4.children = items1;
  return closure_31(closure_6, obj4);
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
let useNativeCheckoutStore = fn(7602).useNativeCheckoutStore;
const PremiumPlanSelectStore = fn(15387);
({ setIsPurchasing: map1, usePremiumPlanSelectStore: closure_14 } = PremiumPlanSelectStore);
const PremiumConstants = fn(1386);
({ GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT: closure_15, NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_16, PRICE_PLACEHOLDER: closure_17, PremiumSubscriptionSKUs: closure_18, PremiumTypes: closure_19, SubscriptionIntervalTypes: closure_20, SubscriptionPlans: closure_21 } = PremiumConstants);
const Constants = fn(1072);
({ AnalyticEvents: closure_22, AnalyticsObjects: closure_23, AnalyticsObjectTypes: closure_24, Fonts, HorizontalGradient: closure_25, PaymentGateways: closure_26, USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } = Constants);
const ColorConstants = fn(7610);
({ getPremiumGradientColor: closure_27, Gradients: closure_28 } = ColorConstants);
const ItemPurchaseType = fn(5742).ItemPurchaseType;
const jsxProd = fn(21);
({ jsx: closure_30, jsxs: closure_31, Fragment: closure_32 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { header: null, row: null, rowDisabled: null, imgWumpusNitro: null, imgBoost: null, imgWumpusNitroBoost: null, imgWumpusNitroClassic: null, imgWumpusNitroClassicBoost: null, imgWumpusNitroTier0: null, rowText: null, rowPlanDescription: null, rowPlanDescriptionSubtext: null, rowPrice: null, purchasingSpinner: null, container: null, currentPlanGradient: null, currentPlanRow: null, loadingSpinnerContainer: null, offPlatformSubscriptionMessage: null, premiumHeaderLabel: null, boostContainer: null, boostRowIcon: null, nitroBanner: null, nitroBannerText: null, recommendedText: null };
let obj3 = {};
let merged = Object.assign(TextStylesDefault(Fonts.DISPLAY_EXTRABOLD, undefined, 24));
obj3.marginTop = 16;
obj3.color = fn(6772).DARK_WHITE_500_LIGHT_BLACK_500;
obj2.header = obj3;
obj2.row = { marginTop: 7, borderRadius: nativeDefault.radii.sm, flexDirection: "row", alignItems: "center", paddingVertical: 12, paddingHorizontal: 12, flexWrap: "wrap", backgroundColor: fn(6772).DARK_PRIMARY_630_LIGHT_PRIMARY_230 };
obj2.rowDisabled = { opacity: 0.5 };
obj2.imgWumpusNitro = { height: 40, width: 40 };
obj2.imgBoost = { height: 40, width: 40 };
obj2.imgWumpusNitroBoost = { width: 32, height: 32 };
obj2.imgWumpusNitroClassic = { width: 40, height: 40 };
obj2.imgWumpusNitroClassicBoost = { width: 32, height: 32 };
obj2.imgWumpusNitroTier0 = { width: 40, height: 40 };
let obj4 = { marginTop: 7, borderRadius: nativeDefault.radii.sm, flexDirection: "row", alignItems: "center", paddingVertical: 12, paddingHorizontal: 12, flexWrap: "wrap", backgroundColor: fn(6772).DARK_PRIMARY_630_LIGHT_PRIMARY_230 };
obj2.rowText = { fontSize: 16, color: fn(6772).DARK_WHITE_500_LIGHT_BLACK_500 };
obj2.rowPlanDescription = { marginLeft: 12, fontFamily: Fonts.PRIMARY_SEMIBOLD, lineHeight: 20 };
obj2.rowPlanDescriptionSubtext = { fontSize: 12, marginLeft: 5, fontFamily: Fonts.PRIMARY_MEDIUM, fontWeight: "400" };
obj2.rowPrice = { marginLeft: "auto" };
obj2.purchasingSpinner = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, alignItems: "center", justifyContent: "center" };
obj2.container = { marginHorizontal: 14.5, paddingBottom: 10 };
let obj5 = { fontSize: 16, color: fn(6772).DARK_WHITE_500_LIGHT_BLACK_500 };
obj2.currentPlanGradient = { marginTop: 20, borderRadius: nativeDefault.radii.sm };
obj2.currentPlanRow = { marginTop: 0.5, marginRight: 0.5, marginLeft: 0.5, marginBottom: 0.5 };
obj2.loadingSpinnerContainer = { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" };
obj2.offPlatformSubscriptionMessage = { lineHeight: 20, marginTop: 40, margin: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING };
obj2.premiumHeaderLabel = { paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING, marginTop: 8 };
let obj6 = { marginTop: 20, borderRadius: nativeDefault.radii.sm };
obj2.boostContainer = { rowGap: nativeDefault.space.PX_24 };
obj2.boostRowIcon = { width: 32, height: 32 };
let obj7 = { rowGap: nativeDefault.space.PX_24 };
obj2.nitroBanner = { alignItems: "center", paddingTop: nativeDefault.space.PX_16, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING };
obj2.nitroBannerText = { textAlign: "center" };
let obj8 = { alignItems: "center", paddingTop: nativeDefault.space.PX_16, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING };
obj2.recommendedText = { color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
let closure_33 = createStyles.createStyles(obj2);
let closure_36 = { [_modDef15395]: "imgWumpusNitro", [_modDef15397]: "imgWumpusNitroBoost", [_modDef15394]: "imgWumpusNitroClassic", [_modDef15396]: "imgWumpusNitroClassicBoost", [_modDef15393]: "imgWumpusNitroTier0", [_modDef15392]: "imgBoost" };
let items = [
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
function PremiumPlanSelect(isBoostPurchaseFlow) {
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
  let ref = isBoostPurchaseFlow.ref;
  importDefault = undefined;
  let basePurchaseFlowAnalyticsFields;
  let obj6;
  let handlePremiumPurchase;
  let navigation;
  let patchOrderLineItems;
  let orderRequired;
  let stateFromStores;
  const tmp = closure_33();
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
  const tmp11 = require("useInitialValue")(() => application_id(basePurchaseFlowAnalyticsFields[48]).getNewAnalyticsLoadId());
  let obj2 = require("initialize");
  const tmp6 = handlePremiumPurchase;
  let obj = { analyticsLoadId: tmp11, analyticsLocation: null, analyticsLocations: null };
  let merged = Object.assign(analyticsLocation);
  obj.analyticsLocation = { object: constants3.BUTTON_CTA, object_type: constants4.BUY };
  obj.analyticsLocations = analyticsLocations;
  basePurchaseFlowAnalyticsFields = require("PremiumAnalyticsUtils").getBasePurchaseFlowAnalyticsFields(obj);
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
  const activeSubscription = stateFromStores((activeSubscription) => ({ activeSubscription: activeSubscription.checkoutInitParameters.activeSubscription, order: activeSubscription.orderRecord })).activeSubscription;
  let obj3 = require("PremiumAnalyticsUtils");
  let obj4 = { object: constants3.BUTTON_CTA, object_type: constants4.BUY };
  const tmp15 = stateFromStores;
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
  const tmp15Result = tmp15((patchOrderLineItems) => ({ patchOrderLineItems: patchOrderLineItems.patchOrderLineItems, isPatchOrderLoading: patchOrderLineItems.isPatchOrderLoading, orderRequired: patchOrderLineItems.orderRequired }));
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
              closure_2_13(true, applicationId);
              if (null != stateFromStores) {
                let modifySubscriptionItemsForProduct = applicationId(basePurchaseFlowAnalyticsFields[47]).getModifySubscriptionItemsForProduct(applicationId, tmp73);
                const obj9 = applicationId(basePurchaseFlowAnalyticsFields[47]);
              } else {
                modifySubscriptionItemsForProduct = applicationId(basePurchaseFlowAnalyticsFields[47]).getSubscriptionItemsForProduct(applicationId);
                const obj8 = applicationId(basePurchaseFlowAnalyticsFields[47]);
              }
              closure_130_2 = undefined;
              if (c7) {
                v3 = 2;
                c7 = 1;
                const obj7 = {
                  value: v3(modifySubscriptionItemsForProduct.map((planId) => {
                              const obj = { sku_id: null, subscription_plan_id: null, quantity: null, purchase_type: null };
                              const obj2 = applicationId(2048);
                              obj.sku_id = obj2.castPremiumSubscriptionAsSkuId(closure_1_1(2048).getSkuIdForPlan(planId.planId));
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
                closure_1(basePurchaseFlowAnalyticsFields[49]).show(obj10);
                obj6 = closure_1(basePurchaseFlowAnalyticsFields[49]);
              } else {
                const obj11 = { title: null, body: null, isDismissable: true };
                const intl = applicationId(basePurchaseFlowAnalyticsFields[22]).intl;
                obj11.title = intl.string(applicationId(basePurchaseFlowAnalyticsFields[22]).t.zrhHH3);
                const intl2 = applicationId(basePurchaseFlowAnalyticsFields[22]).intl;
                obj11.body = intl2.string(applicationId(basePurchaseFlowAnalyticsFields[22]).t.PjfUXe);
                closure_1(basePurchaseFlowAnalyticsFields[49]).show(obj11);
                let obj3 = closure_1(basePurchaseFlowAnalyticsFields[49]);
              }
              closure_2_13(false);
            } else if (2 === tmp7) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else {
                if (arg0 !== 2) {
                  closure_130_2 = value;
                  if (null == value) {
                    closure_2_13(false);
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
            closure_1(5954).close();
            if (paymentGateway.paymentGateway === constants.APPLE_ADVANCED_COMMERCE) {
              premiumTypeSubscription = premiumTypeSubscription.getPremiumTypeSubscription();
              if (null == premiumTypeSubscription) {
                const _Error = Error;
                const error = new Error("PremiumActivatedAlert: no premium subscription in store post-activation");
                const obj2 = { tags: { source: "showPremiumActivatedAlert.nullSubscription" } };
                const result = premiumTypeSubscription(4822).captureBillingException(error, obj2);
                const obj4 = premiumTypeSubscription(4822);
                closure_1(6738).popWithKey(premiumTypeSubscription(7588).PREMIUM_KEY);
                if (navigation.canGoBack()) {
                  navigation.goBack();
                }
                const tmpResult = closure_1(6738);
              } else {
                const obj3 = {
                  importer() {
                        return premiumTypeSubscription(basePurchaseFlowAnalyticsFields[51])(basePurchaseFlowAnalyticsFields[58], basePurchaseFlowAnalyticsFields.paths).then(/* F139957 */ function() { ... });
                      },
                  isDismissable: false
                };
                closure_1(5954).openLazy(obj3);
                const tmpResult2 = closure_1(5954);
              }
            }
            let obj = closure_1(5954);
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
      let obj9 = { style: tmp.loadingSpinnerContainer, children: closure_30(tmp4(tmp3[43]).ActivityIndicator, { animating: true, size: "large" }) };
      closure_30(patchOrderLineItems, obj9);
    }
    if (isPaymentsBlocked) {
      let obj10 = { ref, contentInset: null, children: null };
      ref = { top: 40 };
      obj10.contentInset = ref;
      tmp2 = tmp2(tmp3[71]);
      tmp3 = closure_30(tmp2, {});
      obj10.children = tmp3;
      let tmp25Result2 = closure_30(orderRequired, obj10);
    } else {
      if (null != activeSubscription) {
        if (activeSubscription.isOnPlatformMatchingExternalPaymentGateway) {
          tmp4(tmp3[47]);
          tmp4(tmp3[47]);
        }
        let tmp25Result = null != first;
        if (tmp25Result) {
          let obj11 = { children: null };
          let obj12 = { style: tmp.premiumHeaderLabel, variant: "eyebrow", color: "text-default", accessibilityRole: "header", children: null };
          let intl = tmp4(tmp3[22]).intl;
          obj12.children = intl.string(tmp4(tmp3[22]).t.ITurwY);
          const items4 = [closure_30(tmp4(tmp3[21]).Text, obj12), ];
          let obj13 = { subscription: activeSubscription, renewalInvoicePreview: first };
          items4[1] = closure_30(tmp4(tmp3[72]).PremiumSubscriptionHeader, obj13);
          obj11.children = items4;
          tmp25Result = closure_31(closure_32, obj11);
        }
        let obj14 = { children: null };
        const items5 = [tmp25Result, ];
        const obj15 = { style: tmp.offPlatformSubscriptionMessage, variant: "text-md/semibold", children: tmp4(tmp3[73]).getExternalManagementMessage(activeSubscription, { shouldAllowExternalManagement: true }) };
        items5[1] = closure_30(tmp4(tmp3[21]).Text, obj15);
        obj14.children = items5;
        tmp25Result2 = closure_31(orderRequired, obj14);
        const tmp4Result15 = tmp4(tmp3[73]);
      }
      const obj16 = { ref, children: null };
      const obj17 = {
        subscription: activeSubscription,
        plans: tmp4(tmp3[47]).getPremiumBundlesWithPredicate(predicate),
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
      obj16.children = closure_30(PlanSections, obj17);
      tmp25Result2 = closure_30(orderRequired, obj16);
      const tmp4Result16 = tmp4(tmp3[47]);
    }
  }
  const tmp4Result12 = require("initialize");
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/PremiumPlanSelect.tsx");

export default function PremiumPlanSelectWithOrderCTX(isBoostPurchaseFlow) {
  _require = isBoostPurchaseFlow;
  const tmp = closure_33();
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
    const memo = noop.useMemo(() => {
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
    const effect = noop.useEffect(() => {
      if (!stateFromStores1) {
        const subscriptions = actions_BillingActionCreators.fetchSubscriptions();
      }
    }, items3);
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
    noop = tmp19;
    const items5 = [navigation, true === isBoostPurchaseFlow.isBoostPurchaseFlow, stateFromStores2];
    const layoutEffect = noop.useLayoutEffect(() => {
      if (closure_5) {
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
        let obj4 = {
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
        let obj5 = {};
        const merged = Object.assign(isBoostPurchaseFlow);
        obj4.children = closure_30(PremiumPlanSelect, obj5);
        return closure_30(navigation(tmp3[76]), obj4);
      }
      let str = "Android";
      if (tmp2Result4.isIOS()) {
        str = "iOS";
      }
      let obj6 = { children: null };
      const obj7 = { variant: "display-md", children: null };
      let intl = tmp2(tmp3[22]).intl;
      const obj8 = { mobilePlatform: str };
      obj7.children = intl.format(tmp2(tmp3[22]).t.CnoyAN, obj8);
      obj6.children = closure_30(tmp2(tmp3[21]).Text, obj7);
      return closure_30(closure_6, obj6);
    } else {
      const obj9 = { style: tmp.loadingSpinnerContainer, children: closure_30(tmp2(tmp3[43]).ActivityIndicator, { animating: true, size: "large" }) };
      return closure_30(closure_6, obj9);
    }
    const tmp2Result3 = tmp2(tmp3[32]);
  }
  obj3 = require("utils/PlatformUtils");
};