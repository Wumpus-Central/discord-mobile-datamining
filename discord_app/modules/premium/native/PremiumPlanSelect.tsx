// discord_app/modules/premium/native/PremiumPlanSelect.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import initialize from "initialize";
import importAllResult from "Stack";
import get_ActivityIndicator from "result";
import { useNativeCheckoutStore } from "context";
import closure_10 from "createGuildRecordFromRust";
import addSubscriptionPlan from "addSubscriptionPlan";
import reset from "reset";
import updateProduct from "updateProduct";
import usePremiumPlanSelectStore from "usePremiumPlanSelectStore";
import GuildFeatures from "GuildFeatures";
import ME from "ME";
import items from "items";
import { ItemPurchaseType } from "CustomCheckoutFlow";
import jsxProd from "Text";
import createCacheKey from "createCacheKey";
import { LinearGradient } from "../../../../_runtime/04723_LinearGradient.js";
import { registerAsset } from "../../../../_runtime/12744_registerAsset.js";
import { registerAsset } from "../../../../_runtime/12745_registerAsset.js";
import { registerAsset } from "../../../../_runtime/12746_registerAsset.js";
import { registerAsset } from "../../../../_runtime/12747_registerAsset.js";
import { registerAsset } from "../../../../_runtime/12748_registerAsset.js";
import { registerAsset } from "../../../../_runtime/12749_registerAsset.js";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { AccountAgeTier10LargeBadge } from "../../../design/assets/native.tsx";
import { NitroWheelIcon } from "../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import { Stack } from "../../../design/components/Stack/native/Stack.native.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { Button } from "../../../design/void/native.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { getPremiumPlanItem } from "../../../utils/PremiumUtils.tsx";

let Fonts;
let USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING;
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
let closure_30;
let closure_32;
let closure_33;
let closure_34;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function BoostPurchaseNitroBanner() {
  const tmp = callback5();
  let obj = { align: "center", spacing: null, style: null, children: null };
  obj[1] = Themes.space.PX_12;
  obj[2] = tmp.nitroBanner;
  const items = [callback3(AccountAgeTier10LargeBadge.TreasureChestBannerSpotIllustration, { width: 117, height: 93, accessible: false }), ];
  obj = { align: "center", spacing: null, children: null };
  obj[1] = Themes.space.PX_4;
  obj = { variant: "text-md/semibold", color: "text-default", style: tmp.nitroBannerText, children: null };
  const intl = getSystemLocale.intl;
  const obj1 = { discount: null };
  const obj2 = { variant: "text-md/semibold", color: "text-feedback-positive", children: null };
  const intl2 = getSystemLocale.intl;
  obj2[2] = intl2.format(getSystemLocale.t.RmVM19, { percentageOff: closure_16 });
  obj1[0] = callback3(Text.Text, obj2, "discount");
  obj[3] = intl.format(getSystemLocale.t.jbrHpT, obj1);
  const items1 = [callback3(Text.Text, obj), ];
  const obj4 = { variant: "text-sm/medium", color: "text-muted", style: tmp.nitroBannerText, children: null };
  const intl3 = getSystemLocale.intl;
  obj4[3] = intl3.format(getSystemLocale.t.HYpETY, { boostCount: closure_17 });
  items1[1] = callback3(Text.Text, obj4);
  obj[2] = items1;
  items[1] = callback4(Stack.Stack, obj);
  obj[3] = items;
  return callback4(Stack.Stack, obj);
}
function getPlanDescription(premiumTier) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (null == premiumTier.premiumTier) {
    const intl = getSystemLocale.intl;
    let obj = { numSubscriptions: null };
    obj[0] = premiumTier.numPremiumGuild;
    let formatToPlainStringResult = intl.formatToPlainString(getSystemLocale.t.gDsyB9, obj);
  } else if (0 === premiumTier.numPremiumGuild) {
    formatToPlainStringResult = getPremiumPlanItem.getPremiumTypeDisplayName(premiumTier.premiumTier);
    const obj3 = getPremiumPlanItem;
  } else {
    const intl2 = getSystemLocale.intl;
    const formatToPlainString = intl2.formatToPlainString;
    if (flag) {
      obj = { numSubscriptions: null };
      obj[0] = premiumTier.numPremiumGuild;
      formatToPlainStringResult = formatToPlainString(tmp7(1236).t.gDsyB9, obj);
    } else {
      if (premiumTier.premiumTier === closure_20.TIER_1) {
        let u6dBsN = tmp7(1236).t.sexoHq;
      } else {
        u6dBsN = tmp7(1236).t.u6dBsN;
      }
      obj = { num: null };
      obj[0] = premiumTier.numPremiumGuild;
      formatToPlainStringResult = formatToPlainString(u6dBsN, obj);
    }
  }
  return formatToPlainStringResult;
}
function BoostDeltaPriceTrailing(arg0) {
  let interval;
  let price;
  ({ price, interval } = arg0);
  let obj = { direction: "horizontal", align: "center", spacing: null, children: null };
  obj[2] = Themes.space.PX_4;
  obj = { size: "xs", color: null };
  obj[1] = Themes.colors.ICON_FEEDBACK_POSITIVE;
  const items = [callback3(NitroWheelIcon.NitroWheelIcon, obj), ];
  const intl = getSystemLocale.intl;
  if (interval === constants.MONTH) {
    rS8FA_ = tmp2(1236).t.AbOLNu;
  } else {
    rS8FA_ = tmp2(1236).t["rS8FA+"];
  }
  obj = { variant: "text-sm/medium", color: "text-muted", children: null };
  obj[2] = intl.format(rS8FA_, { price: callback3(Text.Text, { variant: "text-sm/semibold", color: "text-feedback-positive", children: price }, "price") });
  items[1] = callback3(Text.Text, obj);
  obj[3] = items;
  return closure_33(Stack.Stack, obj);
}
function PlanRow(plan) {
  let importDefault;
  let subscription;
  plan = plan.plan;
  ({ purchase: importDefault, subscription } = plan);
  let flag = plan.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = plan.hasBackground;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = plan.shouldShowModernBoostFlow;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = plan.showBoostOnlyLabels;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let prop = plan.recommendedBoostCount;
  if (prop === undefined) {
    prop = null;
  }
  let flag5 = plan.isBoostPurchaseFlow;
  if (flag5 === undefined) {
    flag5 = false;
  }
  const analyticsLoadId = plan.analyticsLoadId;
  let premiumTypeFromSubscription;
  flag = undefined;
  let c7;
  const tmp2 = callback5();
  const tmp4 = callback((purchasingProductId) => purchasingProductId.purchasingProductId === plan.productId);
  let obj = plan(subscription[31]);
  const token = obj.useToken(importDefault(subscription[18]).colors.ACTIVITY_TIMEBAR_PROGRESS_BACKGROUND);
  let obj1 = plan(subscription[32]);
  let items = [updateProduct];
  const tmp9 = analyticsLoadId(obj1.useStateFromStoresArray(items, () => {
    const items = [outer1_13.getProduct(plan.productId), outer1_13.isBusy()];
    return items;
  }), 2);
  const first = tmp9[0];
  const tmp3 = callback((isPurchasing) => isPurchasing.isPurchasing);
  let obj2 = plan(subscription[33]);
  const premiumTier2DeltaPriceString = obj2.usePremiumTier2DeltaPriceString(plan, subscription, first, flag3);
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
    obj[0] = items1;
    const intl = tmp5(tmp6[22]).intl;
    obj = { num: null };
    obj[0] = closure_17;
    obj[1] = intl.format(tmp5(tmp6[22]).t.he52LA, obj);
    tmp17 = callback3(tmp5(tmp6[36]).LegacyText, obj);
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
    rS8FA_ = tmp5(tmp6[22]).t.AbOLNu;
  } else {
    rS8FA_ = tmp5(tmp6[22]).t["rS8FA+"];
  }
  let tmp22 = premiumTier2DeltaPriceString;
  if (premiumTier2DeltaPriceString == null) {
    tmp22 = checkoutPlanPriceString;
  }
  if (tmp22 == null) {
    tmp22 = closure_18;
  }
  const formatToPlainStringResult = intl2.formatToPlainString(rS8FA_, { price: tmp22 });
  if (tmp16) {
    const intl3 = tmp5(tmp6[22]).intl;
    obj1 = { num: null };
    obj1[0] = closure_17;
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
    if (!flag) {
      if (flag5) {
        let obj = outer1_1(subscription[37]);
        obj = { boost_count: null, is_recommended: null, load_id: null };
        obj[0] = plan.numPremiumGuild;
        obj[1] = c7;
        obj[2] = analyticsLoadId;
        obj.track(outer1_23.BOOST_PLAN_ROW_SELECTED, obj);
      }
      if (null != subscription) {
        if (premiumTypeFromSubscription === outer1_20.TIER_2) {
          if (plan.premiumTier === tmp22.TIER_0) {
            obj = { subscription: null, mode: null, onContinue: null };
            obj[0] = tmp9;
            obj[1] = plan(subscription[39]).WhatYouLoseMode.DOWNGRADE;
            obj[2] = function onContinue() {
              return callback(productId.productId);
            };
            outer1_1(subscription[38])(obj);
            const tmp14 = outer1_1(subscription[38]);
          }
        }
      }
      callback(plan.productId);
    }
  }
  c7 = tmp27;
  if (flag3) {
    if (tmp20) {
      let tmp28Result = tmp28(tmp7(tmp6[41]), { width: 32, height: 32 });
    } else if (tmp16) {
      obj2 = { size: "lg", color: null };
      obj2[1] = tmp7(tmp6[18]).colors.ICON_DEFAULT;
      tmp28Result = tmp28(tmp5(tmp6[30]).NitroWheelIcon, obj2);
    } else {
      obj3 = { style: null, source: null };
      obj3[0] = tmp2.boostRowIcon;
      obj3[1] = tmp7Result;
      tmp28Result = tmp28(flag, obj3);
    }
    const obj4 = { icon: null, label: null, subLabel: null, trailing: null, arrow: true, disabled: null, onPress: null };
    obj4[0] = tmp28Result;
    obj4[1] = getPlanDescription(plan, flag4);
    if (tmp27) {
      const obj5 = { variant: "text-xs/semibold", color: "none", style: null, children: null };
      obj5[2] = tmp2.recommendedText;
      const intl4 = tmp5(tmp6[22]).intl;
      obj5[3] = intl4.string(tmp5(tmp6[22]).t.WThgAR);
      formatToPlainStringResult1 = tmp28(tmp5(tmp6[21]).Text, obj5);
    }
    obj4[2] = formatToPlainStringResult1;
    if (tmp4) {
      const obj6 = { animating: true, size: "small", color: null };
      obj6[2] = token;
      tmp28Result = tmp28(tmp5(tmp6[42]).ActivityIndicator, obj6);
    } else if (null != premiumTier2DeltaPriceString) {
      const obj7 = { price: null, interval: null };
      obj7[0] = premiumTier2DeltaPriceString;
      obj7[1] = plan.interval;
      tmp28Result = tmp28(BoostDeltaPriceTrailing, obj7);
    } else {
      const obj8 = { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: null };
      obj8[3] = formatToPlainStringResult;
      tmp28Result = tmp28(tmp5(tmp6[21]).Text, obj8);
    }
    obj4[3] = tmp28Result;
    if (flag) {
      flag = !tmp4;
    }
    obj4[5] = flag;
    obj4[6] = onPress;
    let tmp28Result1 = tmp28(tmp5(tmp6[40]).TableRow, obj4);
  } else {
    tmp5Result = tmp5(tmp6[44]);
    let str2 = "none";
    if (!tmp5Result.isThemeDark(tmp14)) {
      str2 = "none";
      if (flag2) {
        str2 = tmp7(tmp6[18]).unsafe_rawColors.PRIMARY_230;
      }
    }
    const obj9 = { activeOpacity: 0.6, underlayColor: null, accessibilityRole: "button", disabled: null, onPress: null, children: null };
    obj9[1] = str2;
    obj9[3] = flag;
    obj9[4] = onPress;
    const items2 = [tmp2.row, plan.style, ];
    let rowDisabled = flag;
    if (flag) {
      rowDisabled = !tmp4;
    }
    if (rowDisabled) {
      rowDisabled = tmp2.rowDisabled;
    }
    const obj10 = { style: null, children: null };
    items2[2] = rowDisabled;
    obj10[0] = items2;
    const obj11 = { style: null, source: null };
    obj11[0] = tmp2[table[tmp7Result]];
    obj11[1] = tmp7Result;
    const items3 = [tmp28(flag, obj11), , , , ];
    const obj12 = { style: null, children: null };
    const items4 = [, ];
    ({ rowText: arr5[0], rowPlanDescription: arr5[1] } = tmp2);
    obj12[0] = items4;
    obj12[1] = getPlanDescription(plan, flag4);
    items3[1] = tmp28(tmp5(tmp6[36]).LegacyText, obj12);
    items3[2] = tmp17;
    const obj13 = { style: null, children: null };
    const items5 = [, ];
    ({ rowText: arr6[0], rowPrice: arr6[1] } = tmp2);
    obj13[0] = items5;
    obj13[1] = formatToPlainStringResult;
    items3[3] = tmp28(tmp5(tmp6[36]).LegacyText, obj13);
    let tmp28Result2 = null;
    if (tmp4) {
      const obj14 = { animating: true, size: "small", style: null, color: null };
      obj14[2] = tmp2.purchasingSpinner;
      obj14[3] = token;
      tmp28Result2 = tmp28(tmp5(tmp6[42]).ActivityIndicator, obj14);
    }
    items3[4] = tmp28Result2;
    obj10[1] = items3;
    obj9[5] = closure_33(c7, obj10);
    tmp28Result1 = tmp28(tmp5(tmp6[43]).TouchableHighlight, obj9);
    const tmp29 = closure_33;
    const tmp30 = c7;
  }
  return tmp28Result1;
}
function PlanSection(showBoostOnlyLabels) {
  let createGuildRecordFromRust;
  let initialize;
  let closure_5;
  let closure_6;
  let closure_7;
  let closure_8;
  let dependencyMap;
  let plans;
  let shouldShowModernBoostFlow;
  let useNativeCheckoutStore;
  ({ plans, shouldShowModernBoostFlow } = showBoostOnlyLabels);
  if (shouldShowModernBoostFlow === undefined) {
    shouldShowModernBoostFlow = false;
  }
  let flag = showBoostOnlyLabels.showBoostOnlyLabels;
  if (flag === undefined) {
    flag = false;
  }
  ({ recommendedBoostCount: dependencyMap, isBoostPurchaseFlow: createGuildRecordFromRust, purchase: initialize, analyticsLoadId: closure_5, trackNewPaymentFlow: closure_6, trackPaymentFlowStep: closure_7, subscription: closure_8, shouldRemoveYearlyUpsell: useNativeCheckoutStore } = showBoostOnlyLabels);
  let c10;
  let c11;
  const tmp = useNativeCheckoutStore((getCheckoutContextRecord) => getCheckoutContextRecord.getCheckoutContextRecord());
  c10 = tmp;
  let obj = shouldShowModernBoostFlow(501);
  let isIOSResult = obj.isIOS();
  if (isIOSResult) {
    isIOSResult = null != tmp;
  }
  c11 = isIOSResult;
  const mapped = plans.map((plan) => outer1_32(outer1_40, {
    plan,
    subscription: closure_8,
    shouldShowModernBoostFlow,
    showBoostOnlyLabels: flag,
    recommendedBoostCount: closure_2,
    isBoostPurchaseFlow: createGuildRecordFromRust,
    analyticsLoadId: closure_5,
    purchase(productId) {
      let closure_0 = productId;
      let obj = outer1_0(outer1_2[46]);
      const toggledIntervalProduct = obj.getToggledIntervalProduct(productId);
      let tmp5 = null;
      if (addSubscriptionPlan) {
        tmp5 = null;
        if (null != toggledIntervalProduct) {
          let obj1 = closure_10;
          let availablePlanForItems;
          if (closure_10 != null) {
            let tmpResult = tmp(tmp2[46]);
            availablePlanForItems = obj1.getAvailablePlanForItems(tmpResult.getSubscriptionItemsForProduct(toggledIntervalProduct));
          }
          if (availablePlanForItems == null) {
            availablePlanForItems = null;
          }
          tmp5 = availablePlanForItems;
        }
      }
      let closure_2 = tmp5;
      if (addSubscriptionPlan) {
        let tmp7 = null != tmp5;
      } else {
        tmp7 = null != toggledIntervalProduct;
        if (tmp7) {
          tmp7 = null != outer1_13.getProduct(toggledIntervalProduct);
        }
      }
      tmpResult = tmp(tmp2[46]);
      if (null != toggledIntervalProduct) {
        if (tmp7) {
          if (!closure_9) {
            if (tmp10 !== tmp11) {
              obj = { fromStep: null, toStep: null, productId: null };
              obj[0] = tmp(tmp2[47]).PaymentFlowStep.PLAN_SELECT;
              obj[1] = tmp(tmp2[47]).PaymentFlowStep.YEARLY_UPSELL;
              obj[2] = productId;
              callback2(obj);
              obj = { importer: null, hideActionSheet: true, isDismissable: true };
              obj[0] = function importer() {
                return outer2_0(outer2_2[50])(outer2_2[49], outer2_2.paths).then((arg0) => {
                  let closure_0 = arg0.default;
                  return () => { ... };
                });
              };
              outer1_1(tmp2[48]).openLazy(obj);
            }
          }
        }
      }
      obj1 = { fromStep: tmp(tmp2[47]).PaymentFlowStep.PLAN_SELECT, toStep: tmp(tmp2[47]).PaymentFlowStep.EXTERNAL_PAYMENT, productId };
      callback2(obj1);
      return callback(productId, closure_5);
    }
  }, plan.productId));
  if (shouldShowModernBoostFlow) {
    obj = { title: null, hasIcons: true, children: null };
    obj[0] = showBoostOnlyLabels.label;
    obj[2] = mapped;
    let tmp7Result = tmp7(shouldShowModernBoostFlow(5707).TableRowGroup, obj);
  } else {
    obj = { children: null };
    obj[0] = mapped;
    tmp7Result = tmp7(closure_7, obj);
  }
  return tmp7Result;
}
function CurrentPlanRow(subscription) {
  let analyticsLoadId;
  let createGuildRecordFromRust;
  let dependencyMap;
  let importDefault;
  subscription = subscription.subscription;
  ({ trackPaymentFlowStep: importDefault, trackNewPaymentFlow: dependencyMap, purchase: createGuildRecordFromRust, analyticsLoadId } = subscription);
  const shouldRemoveYearlyUpsell = subscription.shouldRemoveYearlyUpsell;
  let productIdFromSubscription;
  let toggledIntervalProduct;
  const tmp = callback5();
  if (subscription.showCurrentPlan) {
    if (null != subscription) {
      productIdFromSubscription = subscription(6811).getProductIdFromSubscription(subscription, true);
      let obj4 = subscription(6811);
      const tmp13 = subscription;
      const premiumBundledItemsFromProductId = subscription(6811).getPremiumBundledItemsFromProductId(productIdFromSubscription);
      const premiumTier = premiumBundledItemsFromProductId.premiumTier;
      if (null != premiumTier) {
        let PREMIUM_GUILD = callback2(premiumTier);
      } else {
        PREMIUM_GUILD = constants5.PREMIUM_GUILD;
      }
      const obj5 = subscription(6811);
      toggledIntervalProduct = tmp13(6811).getToggledIntervalProduct(productIdFromSubscription);
      let obj = { style: null, colors: null, start: null, end: null, children: null };
      obj[0] = tmp.currentPlanGradient;
      obj[1] = PREMIUM_GUILD;
      ({ START: obj2[2], END: obj2[3] } = closure_26);
      obj = { plan: null, subscription: null, analyticsLoadId: null, disabled: null, hasBackground: true, purchase: null, style: null };
      obj[0] = premiumBundledItemsFromProductId;
      obj[1] = subscription;
      obj[2] = analyticsLoadId;
      let tmp11 = null == toggledIntervalProduct;
      const tmp13Result = tmp13(6811);
      if (tmp11) {
        tmp11 = subscription.status !== constants4.CANCELED;
      }
      obj[3] = tmp11;
      obj[5] = function purchase() {
        let subscription;
        let yearly;
        let EXTERNAL_PAYMENT = outer1_2;
        let obj = subscription(outer1_2[46]);
        const productIdsForBothIntervals = obj.getProductIdsForBothIntervals(productIdFromSubscription);
        ({ monthly: subscription, yearly } = productIdsForBothIntervals);
        let status;
        if (subscription != null) {
          status = subscription.status;
        }
        if (status === outer1_28.CANCELED) {
          if (null != yearly) {
            if (!shouldRemoveYearlyUpsell) {
              obj = { fromStep: null, toStep: null, productId: null };
              obj[0] = tmp(EXTERNAL_PAYMENT[47]).PaymentFlowStep.PLAN_SELECT;
              obj[1] = tmp(EXTERNAL_PAYMENT[47]).PaymentFlowStep.YEARLY_UPSELL;
              obj[2] = tmp2;
              yearly(obj);
              obj = { importer: null, hideActionSheet: true, isDismissable: true };
              obj[0] = function importer() {
                return subscription(outer2_2[50])(outer2_2[49], outer2_2.paths).then((arg0) => {
                  let closure_0 = arg0.default;
                  return (arg0) => {
                    let obj = {};
                    const merged = Object.assign(arg0);
                    obj.productId = outer1_1;
                    obj.continueWithUpsell = outer3_3(/* F119784 */ function() { ... });
                    obj.continueWithDefault = outer3_3(/* F119785 */ function() { ... });
                    return outer3_32(closure_0, obj);
                  };
                });
              };
              outer1_1(EXTERNAL_PAYMENT[48]).openLazy(obj);
              const obj4 = outer1_1(EXTERNAL_PAYMENT[48]);
            }
          }
          let obj1 = { fromStep: null, toStep: null, productId: null };
          obj1[0] = tmp(EXTERNAL_PAYMENT[47]).PaymentFlowStep.PLAN_SELECT;
          EXTERNAL_PAYMENT = tmp(EXTERNAL_PAYMENT[47]).PaymentFlowStep.EXTERNAL_PAYMENT;
          obj1[1] = EXTERNAL_PAYMENT;
          obj1[2] = tmp2;
          yearly(obj1);
          const tmp15 = callback(tmp2, analyticsLoadId);
        } else {
          let tmp6;
          if (null != toggledIntervalProduct) {
            if (null != outer1_13.getProduct(tmp21)) {
              let obj2 = { fromStep: null, toStep: null, productId: null };
              obj2[0] = tmp(EXTERNAL_PAYMENT[47]).PaymentFlowStep.PLAN_SELECT;
              obj2[1] = tmp(EXTERNAL_PAYMENT[47]).PaymentFlowStep.EXTERNAL_PAYMENT;
              obj2[2] = tmp21;
              yearly(obj2);
              tmp6 = callback(tmp21, analyticsLoadId);
            }
          }
          return tmp6;
        }
      };
      obj[6] = tmp.currentPlanRow;
      obj[4] = closure_32(PlanRow, obj);
      return closure_32(LinearGradient, obj);
    }
  }
  return null;
}
function PlanSectionHeader(children) {
  const tmp = callback5();
  return callback3(Button.LegacyText, { style: callback5().header, accessibilityRole: "header", children: children.string });
}
function PlanSections(showCurrentPlan) {
  let plans;
  let subscription;
  ({ plans, subscription } = showCurrentPlan);
  let boostContainer = showCurrentPlan.isBoostPurchaseFlow;
  const analyticsLoadId = showCurrentPlan.analyticsLoadId;
  const trackPaymentFlowStep = showCurrentPlan.trackPaymentFlowStep;
  const trackNewPaymentFlow = showCurrentPlan.trackNewPaymentFlow;
  const purchase = showCurrentPlan.purchase;
  let closure_6;
  let productIdFromSubscription;
  let shouldRemoveYearlyUpsell;
  boostContainer = undefined;
  let c10;
  let recommendedBoostCount;
  let reset;
  const tmp = callback5();
  closure_6 = boostContainer((getCheckoutContextRecord) => getCheckoutContextRecord.getCheckoutContextRecord());
  productIdFromSubscription = null;
  if (null != subscription) {
    let obj = subscription(analyticsLoadId[46]);
    productIdFromSubscription = obj.getProductIdFromSubscription(subscription, false);
  }
  shouldRemoveYearlyUpsell = boostContainer;
  if (boostContainer) {
    shouldRemoveYearlyUpsell = subscription(analyticsLoadId[53]).getShouldRemoveYearlyUpsell("PremiumPlanSelect");
    let obj2 = subscription(analyticsLoadId[53]);
  }
  if (boostContainer) {
    boostContainer = subscription(analyticsLoadId[53]).getMobileBoostingEnabled("PremiumPlanSelect");
    let obj3 = subscription(analyticsLoadId[53]);
  }
  let tmp10 = null != subscription;
  if (tmp10) {
    tmp10 = subscription(analyticsLoadId[23]).getPremiumTypeFromSubscription(subscription) === closure_20.TIER_2;
    const obj4 = subscription(analyticsLoadId[23]);
  }
  let tmp14 = boostContainer;
  if (boostContainer) {
    tmp14 = tmp10;
  }
  c10 = tmp14;
  recommendedBoostCount = null;
  if (boostContainer) {
    recommendedBoostCount = null;
    if (!tmp10) {
      recommendedBoostCount = subscription(analyticsLoadId[53]).getRecommendedBoostCount("PremiumPlanSelect");
      const obj5 = subscription(analyticsLoadId[53]);
    }
  }
  reset = plans.map((interval) => {
    if (interval.interval === outer1_21.YEAR) {
      const isIOSResult = subscription(analyticsLoadId[45]).isIOS();
      let tmp3 = !isIOSResult;
      if (isIOSResult) {
        tmp3 = null == store;
      }
      if (!tmp3) {
        let tmp14Result = tmp14(tmp15[46]);
        tmp3 = null != store.getAvailablePlanForItems(tmp14Result.getSubscriptionItemsForProduct(interval.productId));
      }
      if (!tmp3) {
        tmp14Result = tmp14(tmp15[46]);
        const toggledIntervalProduct = tmp14Result.getToggledIntervalProduct(interval.productId);
        let premiumBundledItemsFromProductId = null;
        if (null != toggledIntervalProduct) {
          premiumBundledItemsFromProductId = tmp14(tmp15[46]).getPremiumBundledItemsFromProductId(toggledIntervalProduct);
          const tmp14Result1 = tmp14(tmp15[46]);
        }
        let tmp9 = interval;
        if (null != premiumBundledItemsFromProductId) {
          const isIOSResult1 = tmp14(tmp15[45]).isIOS();
          let tmp11 = !isIOSResult1;
          if (isIOSResult1) {
            tmp11 = null == store;
          }
          if (!tmp11) {
            tmp11 = null != store.getAvailablePlanForItems(tmp14(tmp15[46]).getSubscriptionItemsForProduct(premiumBundledItemsFromProductId.productId));
            const tmp14Result3 = tmp14(tmp15[46]);
          }
          tmp9 = interval;
          if (tmp11) {
            tmp9 = premiumBundledItemsFromProductId;
          }
          const tmp14Result2 = tmp14(tmp15[45]);
        }
        return tmp9;
      }
      const obj6 = subscription(analyticsLoadId[45]);
    }
    return interval;
  });
  const mapped = items.map((section) => {
    let closure_0 = section;
    return {
      section,
      plansInSection: reset.filter((productId) => {
        let predicateResult = productId.productId !== outer1_7;
        if (predicateResult) {
          predicateResult = !subscription(analyticsLoadId[46]).productsHaveSamePerks(productId.productId, tmp);
          const obj = subscription(analyticsLoadId[46]);
        }
        if (predicateResult) {
          predicateResult = section.predicate(productId);
        }
        if (predicateResult) {
          predicateResult = productId.premiumTier !== outer2_20.TIER_1;
        }
        if (predicateResult) {
          const isIOSResult = section(outer1_2[45]).isIOS();
          let tmp10 = !isIOSResult;
          if (isIOSResult) {
            tmp10 = null == outer1_6;
          }
          if (!tmp10) {
            tmp10 = null != outer1_6.getAvailablePlanForItems(section(outer1_2[46]).getSubscriptionItemsForProduct(productId.productId));
            const obj3 = section(outer1_2[46]);
          }
          predicateResult = tmp10;
          const obj2 = section(outer1_2[45]);
        }
        if (predicateResult) {
          let flag = true;
          if (null != tmp) {
            const tmp20 = subscription(analyticsLoadId[54]).AppStorePremiumProductIdsToPremiumBundledItems[tmp];
            flag = null != tmp20.premiumTier || productId.numPremiumGuild >= tmp20.numPremiumGuild;
            const tmp21 = null != tmp20.premiumTier || productId.numPremiumGuild >= tmp20.numPremiumGuild;
          }
          predicateResult = flag;
        }
        return predicateResult;
      })
    };
  });
  const found = mapped.filter((plansInSection) => plansInSection.plansInSection.length > 0);
  let found1 = found;
  if (tmp14) {
    found1 = found;
    if (tmp18) {
      found1 = found.filter((section) => "premium-guild" !== section.section.id);
    }
  }
  items = [tmp.container, ];
  if (boostContainer) {
    boostContainer = tmp.boostContainer;
  }
  obj = { style: items, children: null };
  items[1] = boostContainer;
  if (tmp14) {
    tmp14 = callback3(BoostPurchaseNitroBanner, {});
  }
  const items1 = [
    tmp14,
    callback3(CurrentPlanRow, { subscription, analyticsLoadId, purchase, trackPaymentFlowStep, trackNewPaymentFlow, showCurrentPlan: showCurrentPlan.showCurrentPlan, shouldRemoveYearlyUpsell }),
    found1.map((plans) => {
      const section = plans.section;
      const label = section.getLabel(c10);
      let tmp6 = !boostContainer;
      if (!boostContainer) {
        let obj = { string: null };
        obj[0] = label;
        tmp6 = outer1_32(outer1_44, obj);
      }
      obj = { children: null };
      const items = [tmp6, ];
      obj = { trackPaymentFlowStep, trackNewPaymentFlow, analyticsLoadId, plans: plans.plansInSection, label, shouldShowModernBoostFlow: boostContainer, showBoostOnlyLabels: c10, recommendedBoostCount, isBoostPurchaseFlow: boostContainer, purchase, subscription, shouldRemoveYearlyUpsell };
      items[1] = outer1_32(outer1_41, obj);
      obj[0] = items;
      return outer1_33(productIdFromSubscription, obj, section.id);
    })
  ];
  obj[1] = items1;
  return closure_33(productIdFromSubscription, obj);
}
let c5 = importAllResult;
({ Image: closure_6, View: error, ScrollView: metroImportAll } = get_ActivityIndicator);
({ setIsPurchasing: closure_14, usePremiumPlanSelectStore: closure_15 } = usePremiumPlanSelectStore);
({ GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT: closure_16, NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_17, PRICE_PLACEHOLDER: closure_18, PremiumSubscriptionSKUs: closure_19, PremiumTypes: closure_20, SubscriptionIntervalTypes: closure_21, SubscriptionPlans: closure_22 } = GuildFeatures);
({ AnalyticEvents: closure_23, AnalyticsObjects: closure_24, AnalyticsObjectTypes: closure_25, Fonts, HorizontalGradient: closure_26, PaymentGateways: closure_27, SubscriptionStatusTypes: closure_28, USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } = ME);
({ getPremiumGradientColor: closure_29, Gradients: closure_30 } = items);
({ jsx: closure_32, jsxs: closure_33, Fragment: closure_34 } = jsxProd);
let obj = { header: null, row: null, rowDisabled: null, imgWumpusNitro: null, imgBoost: null, imgWumpusNitroBoost: null, imgWumpusNitroClassic: null, imgWumpusNitroClassicBoost: null, imgWumpusNitroTier0: null, rowText: null, rowPlanDescription: null, rowPlanDescriptionSubtext: null, rowPrice: null, purchasingSpinner: null, container: null, currentPlanGradient: null, currentPlanRow: null, loadingSpinnerContainer: null, offPlatformSubscriptionMessage: null, premiumHeaderLabel: null, boostContainer: null, boostRowIcon: null, nitroBanner: null, nitroBannerText: null, recommendedText: null };
obj = {};
let merged = Object.assign(require("createTextStyle")(Fonts.DISPLAY_EXTRABOLD, undefined, 24));
obj.marginTop = 16;
obj.color = require("result").DARK_WHITE_500_LIGHT_BLACK_500;
obj[0] = obj;
createCacheKey = { marginTop: 7, borderRadius: require("Themes").radii.sm, flexDirection: "row", alignItems: "center", paddingVertical: 12, paddingHorizontal: 12, flexWrap: "wrap", backgroundColor: require("result").DARK_PRIMARY_630_LIGHT_PRIMARY_230 };
obj[1] = createCacheKey;
obj[2] = { opacity: 0.5 };
obj[3] = { height: 40, width: 40 };
obj[4] = { height: 40, width: 40 };
obj[5] = { width: 32, height: 32 };
obj[6] = { width: 40, height: 40 };
obj[7] = { width: 32, height: 32 };
obj[8] = { width: 40, height: 40 };
obj[9] = { fontSize: 16, color: require("result").DARK_WHITE_500_LIGHT_BLACK_500 };
obj[10] = { marginLeft: 12, fontFamily: Fonts.PRIMARY_SEMIBOLD, lineHeight: 20 };
obj[11] = { fontSize: 12, marginLeft: 5, fontFamily: Fonts.PRIMARY_MEDIUM, fontWeight: "400" };
obj[12] = { marginLeft: "auto" };
obj[13] = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, alignItems: "center", justifyContent: "center" };
obj[14] = { marginHorizontal: 14.5, paddingBottom: 10 };
let obj2 = { fontSize: 16, color: require("result").DARK_WHITE_500_LIGHT_BLACK_500 };
obj[15] = { marginTop: 20, borderRadius: require("Themes").radii.sm };
obj[16] = { marginTop: 0.5, marginRight: 0.5, marginLeft: 0.5, marginBottom: 0.5 };
obj[17] = { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" };
obj[18] = { lineHeight: 20, marginTop: 40, margin: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING };
obj[19] = { paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING, marginTop: 8 };
let obj3 = { marginTop: 20, borderRadius: require("Themes").radii.sm };
obj[20] = { rowGap: require("Themes").space.PX_24 };
obj[21] = { width: 32, height: 32 };
let obj4 = { rowGap: require("Themes").space.PX_24 };
obj[22] = { alignItems: "center", paddingTop: require("Themes").space.PX_16, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING };
obj[23] = { textAlign: "center" };
let obj5 = { alignItems: "center", paddingTop: require("Themes").space.PX_16, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING };
obj[24] = { color: require("Themes").unsafe_rawColors.GUILD_BOOSTING_PINK };
let closure_35 = createCacheKey.createStyles(obj);
let closure_38 = { [registerAsset]: "imgWumpusNitro", [registerAsset]: "imgWumpusNitroBoost", [registerAsset]: "imgWumpusNitroClassic", [registerAsset]: "imgWumpusNitroClassicBoost", [registerAsset]: "imgWumpusNitroTier0", [registerAsset]: "imgBoost" };
items = [
  {
    id: "premium",
    getLabel() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.A4BfLn);
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
      const intl = getSystemLocale.intl;
      const t = getSystemLocale.t;
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
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.rPoOQW);
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
let closure_46 = importAllResult.forwardRef(function PremiumPlanSelect(isBoostPurchaseFlow) {
  let analyticsLocation;
  let applicationId;
  let planId;
  let predicate;
  let showCurrentPlan;
  ({ predicate, showCurrentPlan } = isBoostPurchaseFlow);
  if (showCurrentPlan === undefined) {
    showCurrentPlan = true;
  }
  let flag = isBoostPurchaseFlow.isBoostPurchaseFlow;
  if (flag === undefined) {
    flag = false;
  }
  ({ analyticsLocation, planId, applicationId } = isBoostPurchaseFlow);
  let _require = applicationId;
  let importDefault;
  let basePurchaseFlowAnalyticsFields;
  let obj2;
  let handlePremiumPurchase;
  let navigation;
  let patchOrderLineItems;
  let orderRequired;
  let stateFromStores;
  const tmp = callback5();
  let tmp2 = importDefault;
  let tmp3 = basePurchaseFlowAnalyticsFields;
  const analyticsLocations = importDefault(basePurchaseFlowAnalyticsFields[59])().analyticsLocations;
  let obj = _require(basePurchaseFlowAnalyticsFields[32]);
  let items = [reset, addSubscriptionPlan];
  const tmp7 = handlePremiumPurchase(obj.useStateFromStoresArray(items, () => {
    const items = [reset.hasFetchedSubscriptions(), loadedForPremiumSKUs.isLoadedForPremiumSKUs()];
    return items;
  }), 2);
  importDefault = tmp8;
  const items1 = [tmp7[1]];
  const effect = navigation.useEffect(() => {
    if (!c1) {
      const premiumSubscriptionPlans = callback(basePurchaseFlowAnalyticsFields[60]).fetchPremiumSubscriptionPlans();
      const obj = callback(basePurchaseFlowAnalyticsFields[60]);
    }
  }, items1);
  const tmp11 = importDefault(basePurchaseFlowAnalyticsFields[61])(() => callback(basePurchaseFlowAnalyticsFields[47]).getNewAnalyticsLoadId());
  let obj1 = _require(basePurchaseFlowAnalyticsFields[47]);
  obj = { analyticsLoadId: tmp11, analyticsLocation: null, analyticsLocations: null };
  obj = { object: constants2.BUTTON_CTA, object_type: constants3.BUY };
  let merged = Object.assign(analyticsLocation);
  obj[1] = obj;
  obj[2] = analyticsLocations;
  basePurchaseFlowAnalyticsFields = obj1.getBasePurchaseFlowAnalyticsFields(obj);
  if (null != planId) {
    obj1 = { subscription_plan_id: null };
    obj1[0] = planId;
    obj2 = obj1;
  } else {
    obj2 = {};
  }
  tmp2(tmp3[62])(() => {
    let obj = callback(basePurchaseFlowAnalyticsFields[63]);
    obj = {};
    const merged = Object.assign(basePurchaseFlowAnalyticsFields);
    const merged1 = Object.assign(obj2);
    obj.application_id = callback;
    const result = obj.trackPaymentFlowStartedAnalyticsAndCTP(obj);
  });
  const activeSubscription = useNativeCheckoutStore((activeSubscription) => ({ activeSubscription: activeSubscription.checkoutInitParameters.activeSubscription, order: activeSubscription.orderRecord })).activeSubscription;
  let tmp4Result = tmp4(tmp3[64]);
  handlePremiumPurchase = tmp4Result.useHandlePremiumPurchase();
  tmp4Result = tmp4(tmp3[65]);
  navigation = tmp4Result.useNavigation();
  const isPaymentsBlocked = _require(tmp3[66]).useIsPaymentsBlocked();
  const tmp15 = useNativeCheckoutStore;
  const tmp4Result1 = _require(tmp3[66]);
  const tmp5 = reset;
  const tmp6 = handlePremiumPurchase;
  if (null != activeSubscription) {
    let obj3 = { subscriptionId: null, renewal: true, analyticsLocations: null, analyticsLocation: null };
    obj3[0] = activeSubscription.id;
    obj3[2] = analyticsLocations;
    obj3[3] = tmp2(tmp3[68]).PREMIUM_PLAN_SELECT;
    let obj4 = obj3;
  } else {
    obj4 = {};
  }
  const first = tmp6(_require(tmp3[67]).useFetchSubscriptionInvoicePreview(obj4), 1)[0];
  const tmp15Result = tmp15((patchOrderLineItems) => ({ patchOrderLineItems: patchOrderLineItems.patchOrderLineItems, isPatchOrderLoading: patchOrderLineItems.isPatchOrderLoading, orderRequired: patchOrderLineItems.orderRequired }));
  patchOrderLineItems = tmp15Result.patchOrderLineItems;
  orderRequired = tmp15Result.orderRequired;
  const tmp4Result2 = _require(tmp3[67]);
  const items2 = [tmp5];
  stateFromStores = _require(tmp3[32]).useStateFromStores(items2, () => reset.getPremiumTypeSubscription());
  _require = undefined;
  _require = obj2((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let createGuildRecordFromRust = tmp3;
              let id = tmp7;
              id = undefined;
              outer2_14(true, callback);
              if (null != outer1_8) {
                let modifySubscriptionItemsForProduct = callback(basePurchaseFlowAnalyticsFields[46]).getModifySubscriptionItemsForProduct(tmp70, tmp74);
                const obj9 = callback(basePurchaseFlowAnalyticsFields[46]);
              } else {
                modifySubscriptionItemsForProduct = callback(basePurchaseFlowAnalyticsFields[46]).getSubscriptionItemsForProduct(tmp70);
                const obj8 = callback(basePurchaseFlowAnalyticsFields[46]);
              }
              id = undefined;
              if (c7) {
                v0 = 2;
                c7 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = v0(modifySubscriptionItemsForProduct.map((planId) => {
                  const obj = { sku_id: null, subscription_plan_id: null, quantity: null, purchase_type: null };
                  const obj2 = callback(3947);
                  obj[0] = obj2.castPremiumSubscriptionAsSkuId(callback2(3947).getSkuIdForPlan(planId.planId));
                  ({ planId: obj[1], quantity: obj[2] } = planId);
                  obj[3] = constants.SUBSCRIPTION;
                  return obj;
                }));
                return obj1;
              }
            }
          } else {
            if (1 === tmp7) {
              let c5 = 0;
              if (initialize instanceof callback2(basePurchaseFlowAnalyticsFields[69])) {
                let obj4 = callback(basePurchaseFlowAnalyticsFields[70]);
                const subscriptions = obj4.fetchSubscriptions();
                let obj5 = callback2(basePurchaseFlowAnalyticsFields[48]);
                let obj2 = { title: null, body: null };
                const intl3 = callback(basePurchaseFlowAnalyticsFields[22]).intl;
                obj2[0] = intl3.string(callback(basePurchaseFlowAnalyticsFields[22]).t["U+H+kd"]);
                const intl4 = callback(basePurchaseFlowAnalyticsFields[22]).intl;
                obj2[1] = intl4.string(callback(basePurchaseFlowAnalyticsFields[22]).t.yyDkbE);
                obj5.show(obj2);
              } else {
                obj2 = callback2(basePurchaseFlowAnalyticsFields[48]);
                const obj3 = { title: null, body: null, isDismissable: true };
                const intl = callback(basePurchaseFlowAnalyticsFields[22]).intl;
                obj3[0] = intl.string(callback(basePurchaseFlowAnalyticsFields[22]).t.zrhHH3);
                const intl2 = callback(basePurchaseFlowAnalyticsFields[22]).intl;
                obj3[1] = intl2.string(callback(basePurchaseFlowAnalyticsFields[22]).t.PjfUXe);
                obj2.show(obj3);
              }
              outer2_14(false);
            } else if (2 === tmp7) {
              if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else {
                if (arg0 !== 2) {
                  id = arg1;
                  if (null == arg1) {
                    outer2_14(false);
                    c7 = 3;
                  }
                }
                c7 = 3;
                obj4 = { value: null, done: true };
                obj4[0] = arg1;
                return obj4;
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              c5 = 0;
            }
            c5 = 0;
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c5 = 1;
          obj5 = { productId: null, analyticsLocation: null, analyticsLoadId: null, applicationId: null, orderId: null, onPurchaseComplete: null };
          obj5[0] = callback;
          obj5[1] = outer1_2.location;
          obj5[2] = closure_1;
          obj5[3] = callback;
          id = undefined;
          if (id != null) {
            id = id.id;
          }
          obj5[4] = id;
          obj5[5] = function onPurchaseComplete(paymentGateway) {
            let obj = callback2(outer2_2[48]);
            obj.close();
            if (paymentGateway.paymentGateway === outer2_27.APPLE_ADVANCED_COMMERCE) {
              const premiumTypeSubscription = outer2_12.getPremiumTypeSubscription();
              if (null == premiumTypeSubscription) {
                const _Error = Error;
                const error = new Error("PremiumActivatedAlert: no premium subscription in store post-activation");
                obj = { tags: null };
                obj[0] = { source: "showPremiumActivatedAlert.nullSubscription" };
                const result = callback(tmp2[55]).captureBillingException(error, obj);
                let tmpResult = tmp(tmp2[56]);
                tmpResult.popWithKey(callback(tmp2[57]).PREMIUM_KEY);
                if (c5.canGoBack()) {
                  obj7.goBack();
                }
                const obj4 = callback(tmp2[55]);
                obj7 = c5;
              } else {
                tmpResult = tmp(tmp2[48]);
                obj = { importer: null };
                obj[0] = function importer() {
                  return premiumTypeSubscription(outer3_2[50])(outer3_2[58], outer3_2.paths).then(() => { ... });
                };
                tmpResult.openLazy(obj);
              }
            }
          };
          v0 = 3;
          c7 = 1;
          const obj6 = { value: null, done: false };
          obj6[0] = outer1_4(obj5);
          return obj6;
        } catch (tmp58) {
          initialize = tmp58;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp58;
          } else {
            v0 = tmp;
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
      let obj5 = { style: null, children: null };
      obj5[0] = tmp.loadingSpinnerContainer;
      obj5[1] = callback3(tmp4(tmp3[42]).ActivityIndicator, { animating: true, size: "large" });
      callback3(orderRequired, obj5);
    }
    let obj7 = arg1;
    if (isPaymentsBlocked) {
      let obj6 = { ref: null, contentInset: null, children: null };
      obj6[0] = obj7;
      obj7 = { top: 40 };
      obj6[1] = obj7;
      tmp2 = tmp2(tmp3[71]);
      tmp3 = callback3(tmp2, {});
      obj6[2] = tmp3;
      let tmp25Result = callback3(stateFromStores, obj6);
    } else {
      if (null != activeSubscription) {
        if (activeSubscription.isOnPlatformMatchingExternalPaymentGateway) {
          const tmp4Result4 = tmp4(tmp3[46]);
          const tmp4Result5 = tmp4(tmp3[46]);
        }
        tmp25Result = null != first;
        if (tmp25Result) {
          let obj8 = { children: null };
          let obj9 = { style: null, variant: "eyebrow", color: "text-default", accessibilityRole: "header", children: null };
          obj9[0] = tmp.premiumHeaderLabel;
          let intl = tmp4(tmp3[22]).intl;
          obj9[4] = intl.string(tmp4(tmp3[22]).t.ITurwY);
          const items4 = [callback3(tmp4(tmp3[21]).Text, obj9), ];
          const obj10 = { subscription: null, renewalInvoicePreview: null };
          obj10[0] = activeSubscription;
          obj10[1] = first;
          items4[1] = callback3(tmp4(tmp3[72]).PremiumSubscriptionHeader, obj10);
          obj8[0] = items4;
          tmp25Result = tmp25(closure_34, obj8);
        }
        const obj11 = { children: null };
        const items5 = [tmp25Result, ];
        const obj12 = { style: null, variant: "text-md/semibold", children: null };
        obj12[0] = tmp.offPlatformSubscriptionMessage;
        obj12[2] = tmp4(tmp3[73]).getExternalManagementMessage(activeSubscription, { shouldAllowExternalManagement: true });
        items5[1] = callback3(tmp4(tmp3[21]).Text, obj12);
        obj11[0] = items5;
        tmp25Result = tmp25(stateFromStores, obj11);
        const tmp26 = stateFromStores;
        const tmp4Result6 = tmp4(tmp3[73]);
      }
      const obj13 = { ref: null, children: null };
      obj13[0] = obj7;
      const obj14 = { subscription: null, plans: null, showCurrentPlan: null, isBoostPurchaseFlow: null, analyticsLoadId: null, trackPaymentFlowStep: null, trackNewPaymentFlow: null, purchase: null };
      obj14[0] = activeSubscription;
      obj14[1] = tmp4(tmp3[46]).getPremiumBundlesWithPredicate(predicate);
      obj14[2] = showCurrentPlan;
      obj14[3] = flag;
      obj14[4] = tmp11;
      obj14[5] = function trackPaymentFlowStep(arg0) {
        let fromStep;
        let productId;
        let toStep;
        ({ productId, fromStep, toStep } = arg0);
        let obj = _undefined(basePurchaseFlowAnalyticsFields[37]);
        obj = { application_id: callback };
        const merged = Object.assign(callback(basePurchaseFlowAnalyticsFields[47]).getPaymentFlowStepAnalyticsFields(basePurchaseFlowAnalyticsFields, { from_step: fromStep, to_step: toStep, subscription_plan_gateway_plan_id: productId }));
        obj.track(outer1_23.PAYMENT_FLOW_STEP, obj);
      };
      obj14[6] = function trackNewPaymentFlow(arg0) {
        let newFlowAnalyticsLoadId;
        let productId;
        ({ newFlowAnalyticsLoadId, productId } = arg0);
        let obj = callback(basePurchaseFlowAnalyticsFields[63]);
        obj = {};
        const merged = Object.assign(basePurchaseFlowAnalyticsFields);
        obj.subscription_plan_gateway_plan_id = productId;
        obj.load_id = newFlowAnalyticsLoadId;
        obj.application_id = callback;
        const result = obj.trackPaymentFlowStartedAnalyticsAndCTP(obj);
      };
      obj14[7] = tmp22;
      obj13[1] = callback3(PlanSections, obj14);
      tmp25Result = callback3(stateFromStores, obj13);
      const tmp4Result7 = tmp4(tmp3[46]);
    }
  }
});
let obj6 = { color: require("Themes").unsafe_rawColors.GUILD_BOOSTING_PINK };
let obj7 = {
  id: "premium",
  getLabel() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.A4BfLn);
  },
  predicate(premiumTier) {
    let tmp = null != premiumTier.premiumTier;
    if (tmp) {
      tmp = 0 === premiumTier.numPremiumGuild;
    }
    return tmp;
  }
};
let result = require("noop").fileFinishedImporting("modules/premium/native/PremiumPlanSelect.tsx");

export default function PremiumPlanSelectWithOrderCTX(isBoostPurchaseFlow) {
  const _require = isBoostPurchaseFlow;
  let obj = _require(stateFromStores1[65]);
  const navigation = obj.useNavigation();
  let obj1 = _require(stateFromStores1[32]);
  const items = [reset];
  const stateFromStores = obj1.useStateFromStores(items, () => reset.getPremiumTypeSubscription());
  const NitroACOMSubscriptionExperiment = _require(stateFromStores1[74]).NitroACOMSubscriptionExperiment;
  let obj2 = _require(stateFromStores1[45]);
  if (obj2.isIOS()) {
    if (NitroACOMSubscriptionExperiment.useConfig({ location: "PremiumPlanSelectWithOrderCTX" }).enabled) {
      let APPLE = tmp7.APPLE_ADVANCED_COMMERCE;
      let tmp9 = tmp7;
    } else {
      APPLE = tmp7.APPLE;
      tmp9 = tmp7;
    }
  } else {
    let paymentGateway = tmp7.GOOGLE;
    if (null != stateFromStores) {
      paymentGateway = stateFromStores.paymentGateway;
    }
    obj = { subscriptionPlanId: null, skuId: null, quantity: 1 };
    obj[0] = PREMIUM_YEAR_TIER_2.PREMIUM_YEAR_TIER_2;
    let tmp2Result = tmp2(tmp3[23]);
    obj[1] = tmp2Result.castPremiumSubscriptionAsSkuId(TIER_2.TIER_2);
    const items1 = [obj];
    tmp2Result = tmp2(tmp3[32]);
    const items2 = [reset];
    stateFromStores1 = tmp2Result.useStateFromStores(items2, () => reset.hasFetchedSubscriptions());
    const items3 = [stateFromStores1];
    const effect = importAllResult.useEffect(() => {
      if (!stateFromStores1) {
        const subscriptions = isBoostPurchaseFlow(stateFromStores1[70]).fetchSubscriptions();
        const obj = isBoostPurchaseFlow(stateFromStores1[70]);
      }
    }, items3);
    const items4 = [closure_10];
    const stateFromStores2 = tmp2(tmp3[32]).useStateFromStores(items4, () => {
      let tmp2;
      if (null != isBoostPurchaseFlow.guildId) {
        const guild = outer1_10.getGuild(tmp.guildId);
        let name;
        if (guild != null) {
          name = guild.name;
        }
        tmp2 = name;
      }
      return tmp2;
    });
    let mobileBoostingEnabled = true === isBoostPurchaseFlow.isBoostPurchaseFlow;
    if (mobileBoostingEnabled) {
      mobileBoostingEnabled = tmp2(tmp3[53]).getMobileBoostingEnabled("PremiumPlanSelect");
      const tmp2Result2 = tmp2(tmp3[53]);
    }
    const items5 = [navigation, mobileBoostingEnabled, stateFromStores2];
    const layoutEffect = importAllResult.useLayoutEffect(() => {
      if (mobileBoostingEnabled) {
        if (null != stateFromStores2) {
          const intl2 = isBoostPurchaseFlow(stateFromStores1[22]).intl;
          let obj = { server: null };
          obj[0] = tmp3;
          let formatToPlainStringResult = intl2.formatToPlainString(isBoostPurchaseFlow(stateFromStores1[22]).t.LcefAL, obj);
        }
        obj = { title: null };
        obj[0] = formatToPlainStringResult;
        tmp2(obj);
      }
      const intl = isBoostPurchaseFlow(stateFromStores1[22]).intl;
      formatToPlainStringResult = intl.string(isBoostPurchaseFlow(stateFromStores1[22]).t.u95Dt4);
    }, items5);
    if (stateFromStores1) {
      if (null != paymentGateway) {
        obj = { paymentGateway: null, orderRequired: null, skuIds: null, defaultPlans: null, isGift: false, activeSubscription: null, onOrderRetryCancellation: null, children: null };
        obj[0] = paymentGateway;
        obj[1] = paymentGateway === tmp7.APPLE_ADVANCED_COMMERCE;
        obj[2] = [];
        obj[3] = items1;
        obj[5] = stateFromStores;
        obj[6] = function onOrderRetryCancellation() {
          let arr = navigation;
          if (navigation.canGoBack()) {
            arr.goBack();
          } else {
            arr = arr.pop();
          }
        };
        obj1 = {};
        const merged = Object.assign(isBoostPurchaseFlow);
        obj[7] = callback3(closure_46, obj1);
        return callback3(navigation(tmp3[75]), obj);
      }
      let str2 = "Android";
      if (tmp2Result3.isIOS()) {
        str2 = "iOS";
      }
      obj2 = { children: null };
      const obj3 = { variant: "display-md", children: null };
      let intl = tmp2(tmp3[22]).intl;
      const obj4 = { mobilePlatform: null };
      obj4[0] = str2;
      obj3[1] = intl.format(tmp2(tmp3[22]).t.CnoyAN, obj4);
      obj2[0] = callback3(tmp2(tmp3[21]).Text, obj3);
      return callback3(closure_7, obj2);
    } else {
      const obj5 = { style: null, children: null };
      obj5[0] = tmp.loadingSpinnerContainer;
      obj5[1] = callback3(tmp2(tmp3[42]).ActivityIndicator, { animating: true, size: "large" });
      return callback3(closure_7, obj5);
    }
    const obj7 = importAllResult;
    const tmp2Result1 = tmp2(tmp3[32]);
  }
};