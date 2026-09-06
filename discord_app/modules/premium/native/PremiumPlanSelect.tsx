// discord_app/modules/premium/native/PremiumPlanSelect.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import utils_PlatformUtils from "../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import native from "../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import PremiumUtils from "../../../utils/PremiumUtils.tsx";
import PremiumSubscription from "../PremiumSubscription.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import actions_BillingActionCreators from "../../billing/actions/BillingActionCreators.tsx";
import Stack_Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import LinearGradientDefault from "../../../../_runtime/04987_LinearGradient.js";
import TextStylesDefault from "../../rebrand/native/TextStyles.tsx";
import native2 from "../../../design/assets/native.tsx";
import ProductIds from "ProductIds.android.tsx";
import SubscriptionPlanActionCreators from "../../../actions/SubscriptionPlanActionCreators.tsx";
import PremiumBundledPlansUtils from "PremiumBundledPlansUtils.tsx";
import NitroWheelIcon from "../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils.tsx";
import PaymentFlowStartedTriggerPoint from "../../experiments/trigger_points/PaymentFlowStartedTriggerPoint.tsx";
import openPremiumPlanWhatYouLoseActionSheetDefault from "openPremiumPlanWhatYouLoseActionSheet.tsx";
import PremiumPlanWhatYouLoseActionSheet from "PremiumPlanWhatYouLoseActionSheet.tsx";
import _modDef13544 from "../../../../_runtime/metro/13544__.js";
import _modDef13545 from "../../../../_runtime/metro/13545__.js";
import _modDef13546 from "../../../../_runtime/metro/13546__.js";
import _modDef13547 from "../../../../_runtime/metro/13547__.js";
import _modDef13548 from "../../../../_runtime/metro/13548__.js";
import _modDef13549 from "../../../../_runtime/metro/13549__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import SubscriptionPlanStore from "../../../stores/billing/SubscriptionPlanStore.tsx";
import SubscriptionStore from "../../../stores/billing/SubscriptionStore.tsx";
import IAPStore from "../../../stores/native/IAPStore.android.tsx";

const PremiumUtilsDefault = PremiumUtils;

require = fn;
function BoostPurchaseNitroBanner() {
  const tmp = closure_34();
  let obj = { align: "center", spacing: nativeDefault.space.PX_12, style: tmp.nitroBanner, children: null };
  items = [__initData9(native2.TreasureChestBannerSpotIllustration, { width: 117, height: 93, accessible: false }), ];
  obj = { align: "center", spacing: nativeDefault.space.PX_4, children: null };
  obj = { variant: "text-md/semibold", color: "text-default", style: tmp.nitroBannerText, children: null };
  const intl = util.intl;
  const obj1 = { discount: null };
  const obj2 = { variant: "text-md/semibold", color: "text-feedback-positive", children: null };
  const intl2 = util.intl;
  obj2.children = intl2.format(util.t.RmVM19, { percentageOff });
  obj1.discount = __initData9(Text_Text.Text, obj2, "discount");
  obj.children = intl.format(util.t.jbrHpT, obj1);
  const items1 = [__initData9(Text_Text.Text, obj), ];
  const obj4 = { variant: "text-sm/medium", color: "text-muted", style: tmp.nitroBannerText, children: null };
  const intl3 = util.intl;
  obj4.children = intl3.format(util.t.HYpETY, { boostCount });
  items1[1] = __initData9(Text_Text.Text, obj4);
  obj.children = items1;
  items[1] = __initData10(Stack_Stack.Stack, obj);
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
    let obj = { numSubscriptions: premiumTier.numPremiumGuild };
    let formatToPlainStringResult = intl.formatToPlainString(util.t.gDsyB9, obj);
  } else if (0 === premiumTier.numPremiumGuild) {
    formatToPlainStringResult = PremiumUtils.getPremiumTypeDisplayName(premiumTier.premiumTier);
  } else {
    const intl2 = util.intl;
    const formatToPlainString = intl2.formatToPlainString;
    if (flag) {
      obj = { numSubscriptions: premiumTier.numPremiumGuild };
      formatToPlainStringResult = formatToPlainString(tmp7(1114).t.gDsyB9, obj);
    } else {
      if (premiumTier.premiumTier === closure_1_20.TIER_1) {
        let u6dBsN = tmp7(1114).t.sexoHq;
      } else {
        u6dBsN = tmp7(1114).t.u6dBsN;
      }
      obj = { num: premiumTier.numPremiumGuild };
      formatToPlainStringResult = formatToPlainString(u6dBsN, obj);
    }
  }
  return formatToPlainStringResult;
}
function BoostDeltaPriceTrailing(arg0) {
  ({ price, interval } = arg0);
  let obj = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_4, children: null };
  obj = { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
  items = [__initData9(NitroWheelIcon.NitroWheelIcon, obj), ];
  const intl = util.intl;
  if (interval === constants.MONTH) {
    let AbOLNu = tmp2(1114).t.AbOLNu;
  } else {
    AbOLNu = tmp2(1114).t["rS8FA+"];
  }
  obj = { variant: "text-sm/medium", color: "text-muted", children: intl.format(AbOLNu, { price: __initData9(Text_Text.Text, { variant: "text-sm/semibold", color: "text-feedback-positive", children: price }, "price") }) };
  items[1] = __initData9(Text_Text.Text, obj);
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
  let obj = plan(subscription[31]);
  const token = obj.useToken(require("native").colors.ACTIVITY_TIMEBAR_PROGRESS_BACKGROUND);
  let obj1 = plan(subscription[32]);
  items = [IAPStore];
  const tmp9 = flag6(obj1.useStateFromStoresArray(items, () => {
    items = [IAPStore.getProduct(plan.productId), IAPStore.isBusy()];
    return items;
  }), 2);
  const first = tmp9[0];
  const tmp3 = closure_15((isPurchasing) => isPurchasing.isPurchasing);
  let obj2 = plan(subscription[33]);
  const premiumTier2DeltaPriceString = obj2.usePremiumTier2DeltaPriceString(plan, subscription, first, flag4);
  let obj3 = plan(subscription[34]);
  const checkoutPlanPriceString = obj3.useCheckoutPlanPriceString(plan.productId, first);
  let tmp16 = plan.premiumTier === closure_20.TIER_2;
  const tmp11 = useNativeCheckoutStore((isPatchOrderLoading) => isPatchOrderLoading.isPatchOrderLoading || isPatchOrderLoading.isCreateOrderLoading);
  if (tmp16) {
    tmp16 = 0 === plan.numPremiumGuild;
  }
  let tmp17 = null;
  if (tmp16) {
    obj = { style: null, children: null };
    const items1 = [, ];
    ({ rowText: arr2[0], rowPlanDescriptionSubtext: arr2[1] } = tmp2);
    obj.style = items1;
    const intl = tmp5(tmp6[22]).intl;
    obj = { num };
    obj.children = intl.format(tmp5(tmp6[22]).t.he52LA, obj);
    tmp17 = closure_31(tmp5(tmp6[36]).LegacyText, obj);
  }
  let tmp20 = null == plan.premiumTier;
  if (!tmp20) {
    tmp20 = 0 !== plan.numPremiumGuild;
  }
  if (null == plan.premiumTier) {
    let tmp7Result = tmp7(tmp6[24]);
  } else if (0 !== plan.numPremiumGuild) {
    if (plan.premiumTier === tmp15.TIER_1) {
      tmp7Result = tmp7(tmp6[28]);
    } else {
      tmp7Result = tmp7(tmp6[29]);
    }
  } else {
    const premiumTier = plan.premiumTier;
    if (tmp15.TIER_0 === premiumTier) {
      tmp7Result = tmp7(tmp6[25]);
    } else if (tmp15.TIER_1 === premiumTier) {
      tmp7Result = tmp7(tmp6[26]);
    } else if (tmp15.TIER_2 === premiumTier) {
      tmp7Result = tmp7(tmp6[27]);
    }
  }
  const intl2 = tmp5(tmp6[22]).intl;
  if (plan.interval === constants.MONTH) {
    let AbOLNu = tmp5(tmp6[22]).t.AbOLNu;
  } else {
    AbOLNu = tmp5(tmp6[22]).t["rS8FA+"];
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
    const intl3 = tmp5(tmp6[22]).intl;
    obj1 = { num };
    let formatToPlainStringResult1 = intl3.formatToPlainString(tmp5(tmp6[22]).t.RTaZb4, obj1);
  }
  premiumTypeFromSubscription = null;
  if (null != subscription) {
    let tmp5Result = tmp5(tmp6[23]);
    premiumTypeFromSubscription = tmp5Result.getPremiumTypeFromSubscription(subscription);
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
        let obj = { boost_count: plan.numPremiumGuild, is_recommended, load_id: analyticsLoadId };
        obj.track(constants2.BOOST_PLAN_ROW_SELECTED, obj);
      }
      if (null != subscription) {
        if (premiumTypeFromSubscription === closure_2_20.TIER_2) {
          if (plan.premiumTier === tmp23.TIER_0) {
            obj = {
              subscription: tmp10,
              mode: PremiumPlanWhatYouLoseActionSheet.WhatYouLoseMode.DOWNGRADE,
              onContinue() {
                        return closure_1_1(productId.productId);
                      }
            };
            openPremiumPlanWhatYouLoseActionSheetDefault(obj);
          }
        }
      }
      closure_1_1(plan.productId);
    }
  }
  is_recommended = tmp28;
  if (flag4) {
    if (tmp20) {
      let tmp38Result = tmp38(tmp7(tmp6[41]), { width: 32, height: 32 });
    } else if (tmp16) {
      obj2 = { size: "lg", color: tmp7(tmp6[18]).colors.ICON_DEFAULT };
      tmp38Result = tmp38(tmp5(tmp6[30]).NitroWheelIcon, obj2);
    } else {
      obj3 = { style: tmp2.boostRowIcon, source: tmp7Result };
      tmp38Result = tmp38(premiumTypeFromSubscription, obj3);
    }
    const obj4 = { icon: tmp38Result, label: getPlanDescription(plan, flag5), subLabel: null, trailing: null, arrow: null, disabled: null, onPress: null };
    if (tmp28) {
      const obj5 = { variant: "text-xs/semibold", color: "none", style: tmp2.recommendedText, children: null };
      const intl4 = tmp5(tmp6[22]).intl;
      obj5.children = intl4.string(tmp5(tmp6[22]).t.WThgAR);
      formatToPlainStringResult1 = tmp38(tmp5(tmp6[21]).Text, obj5);
    }
    obj4.subLabel = formatToPlainStringResult1;
    if (tmp4) {
      const obj6 = { animating: true, size: "small", color: token };
      tmp38Result = tmp38(tmp5(tmp6[42]).ActivityIndicator, obj6);
    } else if (null != premiumTier2DeltaPriceString) {
      const obj7 = { price: premiumTier2DeltaPriceString, interval: plan.interval };
      tmp38Result = tmp38(BoostDeltaPriceTrailing, obj7);
    } else {
      const obj8 = { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: formatToPlainStringResult };
      tmp38Result = tmp38(tmp5(tmp6[21]).Text, obj8);
    }
    obj4.trailing = tmp38Result;
    obj4.arrow = flag2;
    if (flag) {
      flag = !tmp4;
    }
    if (!flag) {
      flag = !flag2;
    }
    obj4.disabled = flag;
    let tmp44;
    if (flag2) {
      tmp44 = onPress;
    }
    obj4.onPress = tmp44;
    return closure_31(tmp5(tmp6[40]).TableRow, obj4);
  } else {
    const items2 = [tmp2.row, plan.style, ];
    let rowDisabled = flag;
    if (flag) {
      rowDisabled = !tmp4;
    }
    if (rowDisabled) {
      rowDisabled = tmp2.rowDisabled;
    }
    const obj9 = { style: null, children: null };
    items2[2] = rowDisabled;
    obj9.style = items2;
    const obj10 = { style: tmp2[closure_37[tmp7Result]], source: tmp7Result };
    const items3 = [closure_31(premiumTypeFromSubscription, obj10), , , , ];
    const obj11 = { style: null, children: null };
    const items4 = [, ];
    ({ rowText: arr5[0], rowPlanDescription: arr5[1] } = tmp2);
    obj11.style = items4;
    obj11.children = getPlanDescription(plan, flag5);
    items3[1] = closure_31(tmp5(tmp6[36]).LegacyText, obj11);
    items3[2] = tmp17;
    const obj12 = { style: null, children: null };
    const items5 = [, ];
    ({ rowText: arr6[0], rowPrice: arr6[1] } = tmp2);
    obj12.style = items5;
    obj12.children = formatToPlainStringResult;
    items3[3] = closure_31(tmp5(tmp6[36]).LegacyText, obj12);
    let tmp31Result = null;
    if (tmp4) {
      const obj13 = { animating: true, size: "small", style: tmp2.purchasingSpinner, color: token };
      tmp31Result = tmp31(tmp5(tmp6[42]).ActivityIndicator, obj13);
    }
    items3[4] = tmp31Result;
    obj9.children = items3;
    const tmp29Result = closure_32(flag, obj9);
    tmp31Result = tmp29Result;
    if (flag2) {
      tmp5Result = tmp5(tmp6[44]);
      let str2 = "none";
      if (!tmp5Result.isThemeDark(tmp14)) {
        str2 = "none";
        if (flag3) {
          str2 = tmp7(tmp6[18]).unsafe_rawColors.PRIMARY_230;
        }
      }
      const obj14 = { activeOpacity: 0.6, underlayColor: str2, accessibilityRole: "button", disabled: flag, onPress, children: tmp29Result };
      tmp31Result = tmp31(tmp5(tmp6[43]).TouchableHighlight, obj14);
    }
    return tmp31Result;
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
  let obj = shouldShowModernBoostFlow(1116);
  let isIOSResult = obj.isIOS();
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
      let obj = shouldShowModernBoostFlow(recommendedBoostCount[46]);
      const toggledIntervalProduct = obj.getToggledIntervalProduct(productId);
      let tmp5 = null;
      if (closure_12) {
        tmp5 = null;
        if (null != toggledIntervalProduct) {
          let obj1 = closure_11;
          let availablePlanForItems;
          if (closure_11 != null) {
            let tmpResult = tmp(tmp2[46]);
            availablePlanForItems = obj1.getAvailablePlanForItems(tmpResult.getSubscriptionItemsForProduct(toggledIntervalProduct));
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
      tmpResult = tmp(tmp2[46]);
      shouldShowModernBoostFlow(recommendedBoostCount[46]);
      if (null != toggledIntervalProduct) {
        if (tmp7) {
          if (!closure_10) {
            if (tmpResult.getPremiumBundledItemsFromProductId(productId).interval !== constants.YEAR) {
              if (!tmp10) {
                obj = { fromStep: tmp(tmp2[47]).PaymentFlowStep.PLAN_SELECT, toStep: tmp(tmp2[47]).PaymentFlowStep.YEARLY_UPSELL, productId };
                closure_7(obj);
                obj = {
                  importer() {
                              return shouldShowModernBoostFlow(recommendedBoostCount[50])(recommendedBoostCount[49], recommendedBoostCount.paths).then((result) => {
                                closure_0 = result.default;
                                return () => { ... };
                              });
                            },
                  hideActionSheet: true,
                  isDismissable: true
                };
                flag(tmp2[48]).openLazy(obj);
              }
            }
          }
        }
      }
      obj1 = { fromStep: tmp(tmp2[47]).PaymentFlowStep.PLAN_SELECT, toStep: tmp(tmp2[47]).PaymentFlowStep.EXTERNAL_PAYMENT, productId };
      closure_7(obj1);
      return closure_4(productId, closure_5);
    }
  }, plan.productId));
  if (shouldShowModernBoostFlow) {
    obj = { title: showBoostOnlyLabels.label, hasIcons: true, children: mapped };
    let tmp7Result = tmp7(shouldShowModernBoostFlow(5687).TableRowGroup, obj);
  } else {
    obj = { children: mapped };
    tmp7Result = tmp7(closure_7, obj);
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
        let obj = { style: tmp.currentPlanGradient, colors: PREMIUM_GUILD, start: null, end: null, children: null };
        ({ START: obj.start, END: obj.end } = dependencyMap);
        obj = {
          plan: premiumBundledItemsFromProductId,
          subscription,
          analyticsLoadId,
          interactive: false,
          hasBackground: true,
          purchase() {

                },
          style: tmp.currentPlanRow
        };
        obj.children = __initData9(PlanRow, obj);
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
    let obj = subscription(analyticsLoadId[46]);
    productIdFromSubscription = obj.getProductIdFromSubscription(subscription, false);
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
              let tmp7Result = tmp7(tmp8[46]);
              let toggledIntervalProduct = tmp7Result.getToggledIntervalProduct(productIdFromSubscription);
            } else {
              toggledIntervalProduct = productIdFromSubscription;
            }
            let tmp3 = plans;
            if (null != toggledIntervalProduct) {
              tmp3 = plans;
              if (!plans.some((productId) => {
                let tmp2 = null == toggledIntervalProduct;
                if (!tmp2) {
                  tmp2 = !subscription(analyticsLoadId[46]).isValidBundleProductId(tmp);
                  const obj = subscription(analyticsLoadId[46]);
                }
                let tmp5 = !tmp2;
                if (!tmp2) {
                  let result = subscription(analyticsLoadId[46]).productsHaveSamePerks(productId.productId, tmp);
                  if (result) {
                    result = productId.interval === tmp7(tmp8[46]).getPremiumBundledItemsFromProductId(tmp).interval;
                    const tmp7Result = tmp7(tmp8[46]);
                  }
                  tmp5 = result;
                  const obj2 = subscription(analyticsLoadId[46]);
                  tmp7 = subscription;
                  tmp8 = analyticsLoadId;
                }
                return tmp5;
              })) {
                items = [];
                tmp7Result = tmp7(tmp8[46]);
                items[HermesBuiltin.arraySpread(plans, 0)] = tmp7Result.getPremiumBundledItemsFromProductId(toggledIntervalProduct);
                tmp3 = items;
                const arraySpreadResult = HermesBuiltin.arraySpread(plans, 0);
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
        let tmp4 = null == tmp;
        if (!tmp4) {
          tmp4 = !PremiumBundledPlansUtils.isValidBundleProductId(tmp);
        }
        let tmp7 = !tmp4;
        if (!tmp4) {
          let result = PremiumBundledPlansUtils.productsHaveSamePerks(productId.productId, tmp);
          if (result) {
            result = productId.interval === tmp8(7409).getPremiumBundledItemsFromProductId(tmp).interval;
            const tmp8Result = tmp8(7409);
          }
          tmp7 = result;
          tmp8 = require;
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
  obj = { style: items, children: null };
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
        let obj = { string: label };
        tmp6 = __initData9(PlanSectionHeader, obj);
      }
      obj = { children: null };
      items = [tmp6, ];
      obj = { trackPaymentFlowStep, trackNewPaymentFlow, analyticsLoadId, plans: plans.plansInSection, label, shouldShowModernBoostFlow: boostContainer, showBoostOnlyLabels, recommendedBoostCount, isBoostPurchaseFlow, purchase, subscription, currentPaymentGatewayPlanId: productIdFromSubscription, shouldRemoveYearlyUpsell };
      items[1] = __initData9(PlanSection, obj);
      obj.children = items;
      return __initData10(React5, obj, section.id);
    })
  ];
  obj.children = items1;
  return closure_32(productIdFromSubscription, obj);
}
get_ActivityIndicator = fn(17);
({ Image: metroRequire, View: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
const useNativeCheckoutStore = fn(7424).useNativeCheckoutStore;
const PremiumPlanSelectStore = fn(13543);
({ setIsPurchasing: closure_14, usePremiumPlanSelectStore: closure_15 } = PremiumPlanSelectStore);
const PremiumConstants = fn(1373);
({ GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT: closure_16, NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_17, PRICE_PLACEHOLDER: closure_18, PremiumSubscriptionSKUs: closure_19, PremiumTypes: closure_20, SubscriptionIntervalTypes: closure_21, SubscriptionPlans: closure_22 } = PremiumConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_23, AnalyticsObjects: closure_24, AnalyticsObjectTypes: closure_25, Fonts, HorizontalGradient: closure_26, PaymentGateways: closure_27, USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } = Constants);
const ColorConstants = fn(7432);
({ getPremiumGradientColor: closure_28, Gradients: closure_29 } = ColorConstants);
const ItemPurchaseType = fn(4542).ItemPurchaseType;
const jsxProd = fn(21);
({ jsx: items, jsxs: closure_32, Fragment: closure_33 } = jsxProd);
fn(4560);
let obj = { header: null, row: null, rowDisabled: null, imgWumpusNitro: null, imgBoost: null, imgWumpusNitroBoost: null, imgWumpusNitroClassic: null, imgWumpusNitroClassicBoost: null, imgWumpusNitroTier0: null, rowText: null, rowPlanDescription: null, rowPlanDescriptionSubtext: null, rowPrice: null, purchasingSpinner: null, container: null, currentPlanGradient: null, currentPlanRow: null, loadingSpinnerContainer: null, offPlatformSubscriptionMessage: null, premiumHeaderLabel: null, boostContainer: null, boostRowIcon: null, nitroBanner: null, nitroBannerText: null, recommendedText: null };
obj = {};
let merged = Object.assign(TextStylesDefault(Fonts.DISPLAY_EXTRABOLD, undefined, 24));
obj.marginTop = 16;
obj.color = fn(5441).DARK_WHITE_500_LIGHT_BLACK_500;
obj.header = obj;
const createStyles = { marginTop: 7, borderRadius: nativeDefault.radii.sm, flexDirection: "row", alignItems: "center", paddingVertical: 12, paddingHorizontal: 12, flexWrap: "wrap", backgroundColor: fn(5441).DARK_PRIMARY_630_LIGHT_PRIMARY_230 };
obj.row = createStyles;
obj.rowDisabled = { opacity: 0.5 };
obj.imgWumpusNitro = { height: 40, width: 40 };
obj.imgBoost = { height: 40, width: 40 };
obj.imgWumpusNitroBoost = { width: 32, height: 32 };
obj.imgWumpusNitroClassic = { width: 40, height: 40 };
obj.imgWumpusNitroClassicBoost = { width: 32, height: 32 };
obj.imgWumpusNitroTier0 = { width: 40, height: 40 };
obj.rowText = { fontSize: 16, color: fn(5441).DARK_WHITE_500_LIGHT_BLACK_500 };
obj.rowPlanDescription = { marginLeft: 12, fontFamily: Fonts.PRIMARY_SEMIBOLD, lineHeight: 20 };
obj.rowPlanDescriptionSubtext = { fontSize: 12, marginLeft: 5, fontFamily: Fonts.PRIMARY_MEDIUM, fontWeight: "400" };
obj.rowPrice = { marginLeft: "auto" };
obj.purchasingSpinner = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, alignItems: "center", justifyContent: "center" };
obj.container = { marginHorizontal: 14.5, paddingBottom: 10 };
let obj2 = { fontSize: 16, color: fn(5441).DARK_WHITE_500_LIGHT_BLACK_500 };
obj.currentPlanGradient = { marginTop: 20, borderRadius: nativeDefault.radii.sm };
obj.currentPlanRow = { marginTop: 0.5, marginRight: 0.5, marginLeft: 0.5, marginBottom: 0.5 };
obj.loadingSpinnerContainer = { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" };
obj.offPlatformSubscriptionMessage = { lineHeight: 20, marginTop: 40, margin: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING };
obj.premiumHeaderLabel = { paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING, marginTop: 8 };
let obj3 = { marginTop: 20, borderRadius: nativeDefault.radii.sm };
obj.boostContainer = { rowGap: nativeDefault.space.PX_24 };
obj.boostRowIcon = { width: 32, height: 32 };
let obj4 = { rowGap: nativeDefault.space.PX_24 };
obj.nitroBanner = { alignItems: "center", paddingTop: nativeDefault.space.PX_16, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING };
obj.nitroBannerText = { textAlign: "center" };
let obj5 = { alignItems: "center", paddingTop: nativeDefault.space.PX_16, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING };
obj.recommendedText = { color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
let closure_34 = createStyles.createStyles(obj);
let closure_37 = { [_modDef13547]: "imgWumpusNitro", [_modDef13549]: "imgWumpusNitroBoost", [_modDef13546]: "imgWumpusNitroClassic", [_modDef13548]: "imgWumpusNitroClassicBoost", [_modDef13545]: "imgWumpusNitroTier0", [_modDef13544]: "imgBoost" };
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
  let obj2;
  let handlePremiumPurchase;
  let navigation;
  let patchOrderLineItems;
  let orderRequired;
  let stateFromStores;
  const tmp = closure_34();
  let tmp2 = importDefault;
  let tmp3 = basePurchaseFlowAnalyticsFields;
  const analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  let obj = require("initialize");
  items = [SubscriptionStore, SubscriptionPlanStore];
  const tmp7 = handlePremiumPurchase(obj.useStateFromStoresArray(items, () => {
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
  let obj1 = require("PremiumAnalyticsUtils");
  obj = { analyticsLoadId: tmp11, analyticsLocation: null, analyticsLocations: null };
  obj = { object: constants3.BUTTON_CTA, object_type: constants4.BUY };
  let merged = Object.assign(analyticsLocation);
  obj.analyticsLocation = obj;
  obj.analyticsLocations = analyticsLocations;
  basePurchaseFlowAnalyticsFields = obj1.getBasePurchaseFlowAnalyticsFields(obj);
  if (null != planId) {
    obj1 = { subscription_plan_id: planId };
    obj2 = obj1;
  } else {
    obj2 = {};
  }
  tmp2(tmp3[62])(() => {
    const obj = {};
    const merged = Object.assign(basePurchaseFlowAnalyticsFields);
    const merged1 = Object.assign(obj2);
    obj.application_id = application_id;
    const result = obj.trackPaymentFlowStartedAnalyticsAndCTP(obj);
  });
  const activeSubscription = useNativeCheckoutStore((activeSubscription) => ({ activeSubscription: activeSubscription.checkoutInitParameters.activeSubscription, order: activeSubscription.orderRecord })).activeSubscription;
  let tmp4Result = tmp4(tmp3[64]);
  handlePremiumPurchase = tmp4Result.useHandlePremiumPurchase();
  tmp4Result = tmp4(tmp3[65]);
  navigation = tmp4Result.useNavigation();
  const isPaymentsBlocked = require("BlockedPaymentsCountryExperiment").useIsPaymentsBlocked();
  const tmp15 = useNativeCheckoutStore;
  const tmp4Result1 = require("BlockedPaymentsCountryExperiment");
  const tmp5 = SubscriptionStore;
  const tmp6 = handlePremiumPurchase;
  if (null != activeSubscription) {
    let obj3 = { subscriptionId: activeSubscription.id, renewal: true, analyticsLocations, analyticsLocation: tmp2(tmp3[68]).PREMIUM_PLAN_SELECT };
    let obj4 = obj3;
  } else {
    obj4 = {};
  }
  const first = tmp6(require("PremiumSubscriptionInvoice").useFetchSubscriptionInvoicePreview(obj4), 1)[0];
  const tmp15Result = tmp15((patchOrderLineItems) => ({ patchOrderLineItems: patchOrderLineItems.patchOrderLineItems, isPatchOrderLoading: patchOrderLineItems.isPatchOrderLoading, orderRequired: patchOrderLineItems.orderRequired }));
  patchOrderLineItems = tmp15Result.patchOrderLineItems;
  orderRequired = tmp15Result.orderRequired;
  const tmp4Result2 = require("PremiumSubscriptionInvoice");
  const items2 = [tmp5];
  stateFromStores = require("initialize").useStateFromStores(items2, () => SubscriptionStore.getPremiumTypeSubscription());
  _require = obj2((applicationId, arg1) => {
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
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else {
              closure_3 = tmp3;
              _location = tmp7;
              closure_130_0 = applicationId;
              closure_130_1 = closure_1;
              closure_130_2 = undefined;
              closure_2_14(true, applicationId);
              if (null != stateFromStores) {
                let modifySubscriptionItemsForProduct = applicationId(basePurchaseFlowAnalyticsFields[46]).getModifySubscriptionItemsForProduct(tmp69, tmp73);
                const obj9 = applicationId(basePurchaseFlowAnalyticsFields[46]);
              } else {
                modifySubscriptionItemsForProduct = applicationId(basePurchaseFlowAnalyticsFields[46]).getSubscriptionItemsForProduct(tmp69);
                const obj8 = applicationId(basePurchaseFlowAnalyticsFields[46]);
              }
              closure_130_2 = undefined;
              if (c7) {
                v3 = 2;
                c7 = 1;
                const obj1 = {
                  value: v3(modifySubscriptionItemsForProduct.map((planId) => {
                              const obj = { sku_id: null, subscription_plan_id: null, quantity: null, purchase_type: null };
                              obj2 = applicationId(4218);
                              obj.sku_id = obj2.castPremiumSubscriptionAsSkuId(closure_1_1(4218).getSkuIdForPlan(planId.planId));
                              ({ planId: obj.subscription_plan_id, quantity: obj.quantity } = planId);
                              obj.purchase_type = constants.SUBSCRIPTION;
                              return obj;
                            })),
                  done: false
                };
                return obj1;
              }
            }
          } else {
            if (1 === tmp7) {
              c5 = 0;
              if (tmp58 instanceof closure_1(basePurchaseFlowAnalyticsFields[69])) {
                let obj4 = applicationId(basePurchaseFlowAnalyticsFields[70]);
                const subscriptions = obj4.fetchSubscriptions();
                let obj5 = closure_1(basePurchaseFlowAnalyticsFields[48]);
                obj2 = { title: null, body: null };
                const intl3 = applicationId(basePurchaseFlowAnalyticsFields[22]).intl;
                obj2.title = intl3.string(applicationId(basePurchaseFlowAnalyticsFields[22]).t["U+H+kd"]);
                const intl4 = applicationId(basePurchaseFlowAnalyticsFields[22]).intl;
                obj2.body = intl4.string(applicationId(basePurchaseFlowAnalyticsFields[22]).t.yyDkbE);
                obj5.show(obj2);
              } else {
                obj2 = closure_1(basePurchaseFlowAnalyticsFields[48]);
                const obj3 = { title: null, body: null, isDismissable: true };
                const intl = applicationId(basePurchaseFlowAnalyticsFields[22]).intl;
                obj3.title = intl.string(applicationId(basePurchaseFlowAnalyticsFields[22]).t.zrhHH3);
                const intl2 = applicationId(basePurchaseFlowAnalyticsFields[22]).intl;
                obj3.body = intl2.string(applicationId(basePurchaseFlowAnalyticsFields[22]).t.PjfUXe);
                obj2.show(obj3);
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
                obj4 = { value, done: true };
                return obj4;
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 !== 2) {
              c5 = 0;
            }
            c5 = 0;
            c7 = 3;
            obj = { value, done: true };
            return obj;
          }
          c5 = 1;
          obj5 = { productId: closure_130_0, analyticsLocation: _location.location, analyticsLoadId: closure_130_1, applicationId, orderId: null, onPurchaseComplete: null };
          let id;
          if (closure_130_2 != null) {
            id = closure_130_2.id;
          }
          obj5.orderId = id;
          obj5.onPurchaseComplete = function onPurchaseComplete(paymentGateway) {
            let obj = closure_1(4905);
            obj.close();
            if (paymentGateway.paymentGateway === constants.APPLE_ADVANCED_COMMERCE) {
              premiumTypeSubscription = premiumTypeSubscription.getPremiumTypeSubscription();
              if (null == premiumTypeSubscription) {
                const _Error = Error;
                const error = new Error("PremiumActivatedAlert: no premium subscription in store post-activation");
                obj = { tags: { source: "showPremiumActivatedAlert.nullSubscription" } };
                const result = premiumTypeSubscription(4233).captureBillingException(error, obj);
                let tmpResult = tmp(4763);
                tmpResult.popWithKey(premiumTypeSubscription(7412).PREMIUM_KEY);
                if (closure_1_5.canGoBack()) {
                  obj7.goBack();
                }
                const obj4 = premiumTypeSubscription(4233);
                obj7 = closure_1_5;
              } else {
                tmpResult = tmp(4905);
                obj = {
                  importer() {
                        return premiumTypeSubscription(basePurchaseFlowAnalyticsFields[50])(basePurchaseFlowAnalyticsFields[58], basePurchaseFlowAnalyticsFields.paths).then(() => { ... });
                      }
                };
                tmpResult.openLazy(obj);
              }
            }
          };
          v3 = 3;
          c7 = 1;
          const obj6 = { value: tmp58(obj5), done: false };
          return obj6;
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
      let obj5 = { style: tmp.loadingSpinnerContainer, children: closure_31(tmp4(tmp3[42]).ActivityIndicator, { animating: true, size: "large" }) };
      closure_31(orderRequired, obj5);
    }
    let obj7 = arg1;
    if (isPaymentsBlocked) {
      let obj6 = { ref: obj7, contentInset: null, children: null };
      obj7 = { top: 40 };
      obj6.contentInset = obj7;
      tmp2 = tmp2(tmp3[71]);
      tmp3 = closure_31(tmp2, {});
      obj6.children = tmp3;
      let tmp25Result = closure_31(stateFromStores, obj6);
    } else {
      if (null != activeSubscription) {
        if (activeSubscription.isOnPlatformMatchingExternalPaymentGateway) {
          const tmp4Result4 = tmp4(tmp3[46]);
          const tmp4Result5 = tmp4(tmp3[46]);
        }
        tmp25Result = null != first;
        if (tmp25Result) {
          let obj8 = { children: null };
          let obj9 = { style: tmp.premiumHeaderLabel, variant: "eyebrow", color: "text-default", accessibilityRole: "header", children: null };
          let intl = tmp4(tmp3[22]).intl;
          obj9.children = intl.string(tmp4(tmp3[22]).t.ITurwY);
          const items4 = [closure_31(tmp4(tmp3[21]).Text, obj9), ];
          const obj10 = { subscription: activeSubscription, renewalInvoicePreview: first };
          items4[1] = closure_31(tmp4(tmp3[72]).PremiumSubscriptionHeader, obj10);
          obj8.children = items4;
          tmp25Result = tmp25(closure_33, obj8);
        }
        const obj11 = { children: null };
        const items5 = [tmp25Result, ];
        const obj12 = { style: tmp.offPlatformSubscriptionMessage, variant: "text-md/semibold", children: tmp4(tmp3[73]).getExternalManagementMessage(activeSubscription, { shouldAllowExternalManagement: true }) };
        items5[1] = closure_31(tmp4(tmp3[21]).Text, obj12);
        obj11.children = items5;
        tmp25Result = tmp25(stateFromStores, obj11);
        const tmp4Result6 = tmp4(tmp3[73]);
      }
      const obj13 = { ref: obj7, children: null };
      const obj14 = {
        subscription: activeSubscription,
        plans: tmp4(tmp3[46]).getPremiumBundlesWithPredicate(predicate),
        showCurrentPlan,
        isBoostPurchaseFlow: flag,
        analyticsLoadId: tmp11,
        trackPaymentFlowStep(arg0) {
              ({ productId, fromStep, toStep } = arg0);
              const obj = { application_id };
              const merged = Object.assign(PremiumAnalyticsUtils.getPaymentFlowStepAnalyticsFields(basePurchaseFlowAnalyticsFields, { from_step: fromStep, to_step: toStep, subscription_plan_gateway_plan_id: productId }));
              obj.track(constants2.PAYMENT_FLOW_STEP, obj);
            },
        trackNewPaymentFlow(arg0) {
              ({ newFlowAnalyticsLoadId, productId } = arg0);
              const obj = {};
              const merged = Object.assign(basePurchaseFlowAnalyticsFields);
              obj.subscription_plan_gateway_plan_id = productId;
              obj.load_id = newFlowAnalyticsLoadId;
              obj.application_id = application_id;
              const result = obj.trackPaymentFlowStartedAnalyticsAndCTP(obj);
            },
        purchase: tmp22
      };
      obj13.children = closure_31(PlanSections, obj14);
      tmp25Result = closure_31(stateFromStores, obj13);
      const tmp4Result7 = tmp4(tmp3[46]);
    }
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/PremiumPlanSelect.tsx");

export default function PremiumPlanSelectWithOrderCTX(isBoostPurchaseFlow) {
  _require = isBoostPurchaseFlow;
  let obj = require("useNavigation");
  const navigation = obj.useNavigation();
  let obj1 = require("initialize");
  items = [SubscriptionStore];
  stateFromStores = obj1.useStateFromStores(items, () => SubscriptionStore.getPremiumTypeSubscription());
  const NitroACOMSubscriptionExperiment = require("ACOMExperiments").NitroACOMSubscriptionExperiment;
  let obj2 = require("utils/PlatformUtils");
  if (obj2.isIOS()) {
    if (NitroACOMSubscriptionExperiment.useConfig({ location: "PremiumPlanSelectWithOrderCTX" }).enabled) {
      let APPLE = tmp7.APPLE_ADVANCED_COMMERCE;
    } else {
      APPLE = tmp7.APPLE;
    }
  } else {
    let paymentGateway = tmp7.GOOGLE;
    if (null != stateFromStores) {
      paymentGateway = stateFromStores.paymentGateway;
    }
    let obj3 = mobileBoostingEnabled;
    let items1 = [stateFromStores];
    const memo = mobileBoostingEnabled.useMemo(() => {
      let baseSubscriptionItemForSubscriptionItems = null;
      if (null != stateFromStores) {
        let obj = PremiumSubscription;
        baseSubscriptionItemForSubscriptionItems = obj.getBaseSubscriptionItemForSubscriptionItems(tmp.items);
      }
      if (null != baseSubscriptionItemForSubscriptionItems) {
        obj = { subscriptionPlanId: baseSubscriptionItemForSubscriptionItems.planId, skuId: null, quantity: null };
        const obj5 = PremiumUtils;
        obj.skuId = obj5.castPremiumSubscriptionAsSkuId(PremiumUtilsDefault.getSkuIdForPlan(baseSubscriptionItemForSubscriptionItems.planId));
        obj.quantity = baseSubscriptionItemForSubscriptionItems.quantity;
        items = [obj];
        let items1 = items;
      } else {
        obj = { subscriptionPlanId: PREMIUM_YEAR_TIER_2.PREMIUM_YEAR_TIER_2, skuId: PremiumUtils.castPremiumSubscriptionAsSkuId(TIER_2.TIER_2), quantity: 1 };
        items1 = [obj];
      }
      return items1;
    }, items1);
    let tmp2Result = tmp2(tmp3[32]);
    const items2 = [SubscriptionStore];
    const stateFromStores1 = tmp2Result.useStateFromStores(items2, () => SubscriptionStore.hasFetchedSubscriptions());
    const items3 = [stateFromStores1];
    const effect = mobileBoostingEnabled.useEffect(() => {
      if (!stateFromStores1) {
        const subscriptions = actions_BillingActionCreators.fetchSubscriptions();
      }
    }, items3);
    tmp2Result = tmp2(tmp3[32]);
    const items4 = [GuildStore];
    const stateFromStores2 = tmp2Result.useStateFromStores(items4, () => {
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
      const tmp2Result1 = tmp2(tmp3[53]);
    }
    const items5 = [navigation, mobileBoostingEnabled, stateFromStores2];
    const layoutEffect = obj3.useLayoutEffect(() => {
      if (mobileBoostingEnabled) {
        if (null != stateFromStores2) {
          const intl2 = util.intl;
          let obj = { server: tmp3 };
          let formatToPlainStringResult = intl2.formatToPlainString(util.t.LcefAL, obj);
        }
        obj = { title: formatToPlainStringResult };
        tmp2(obj);
      }
      const intl = util.intl;
      formatToPlainStringResult = intl.string(util.t.u95Dt4);
    }, items5);
    if (stateFromStores1) {
      if (null != paymentGateway) {
        obj = {
          paymentGateway,
          orderRequired: paymentGateway === tmp7.APPLE_ADVANCED_COMMERCE,
          skuIds: [],
          defaultPlans: memo,
          isGift: false,
          activeSubscription: stateFromStores,
          onOrderRetryCancellation() {
                  let arr = navigation;
                  if (navigation.canGoBack()) {
                    arr.goBack();
                  } else {
                    arr = arr.pop();
                  }
                },
          children: null
        };
        obj = {};
        const merged = Object.assign(isBoostPurchaseFlow);
        obj.children = closure_31(closure_45, obj);
        return closure_31(navigation(tmp3[76]), obj);
      }
      let str2 = "Android";
      if (tmp2Result2.isIOS()) {
        str2 = "iOS";
      }
      obj1 = { children: null };
      obj2 = { variant: "display-md", children: null };
      let intl = tmp2(tmp3[22]).intl;
      obj3 = { mobilePlatform: str2 };
      obj2.children = intl.format(tmp2(tmp3[22]).t.CnoyAN, obj3);
      obj1.children = closure_31(tmp2(tmp3[21]).Text, obj2);
      return closure_31(closure_7, obj1);
    } else {
      const obj4 = { style: tmp.loadingSpinnerContainer, children: closure_31(tmp2(tmp3[42]).ActivityIndicator, { animating: true, size: "large" }) };
      return closure_31(closure_7, obj4);
    }
  }
};