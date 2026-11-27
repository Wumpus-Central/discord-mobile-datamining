// discord_app/modules/premium/native/PremiumPlanSelectionActionSheet.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import PremiumUtils from "../../../utils/PremiumUtils.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import MobileWebRedirectCheckoutUtils from "../../payments/utils/MobileWebRedirectCheckoutUtils.tsx";
import setAccessibilityFocus from "../../a11y/native/setAccessibilityFocus.android.tsx";
import PremiumPlanActionSheetHeaderDefault from "PremiumPlanActionSheetHeader.tsx";
import PaymentFlowStartedTriggerPoint from "../../experiments/trigger_points/PaymentFlowStartedTriggerPoint.tsx";
import NativeCheckoutStoreProviderDefault from "../../checkout/native/stores/NativeCheckoutStoreProvider.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import IAPStore from "../../../stores/native/IAPStore.android.tsx";

const PremiumUtilsDefault = PremiumUtils;

require = fn;
function Header(arg0) {
  ({ premiumType, isPaymentSuccess, trialOffer } = arg0);
  ({ selectedPremiumType, discountOffer } = arg0);
  const tmp = closure_38();
  ({ orderRequired, orderRecord } = useNativeCheckoutStore((orderRequired) => ({
    orderRequired: orderRequired.orderRequired,
    orderRecord: orderRequired.orderRecord,
  })));
  if (null == premiumType) {
    if (!isPaymentSuccess) {
      const obj = {
        style: tmp.headerText,
        variant: "body-md/semibold",
        color: "text-default",
        accessibilityRole: "header",
        children: null,
      };
      const intl = util.intl;
      obj.children = intl.string(util.t.vLz3Zs);
      return keyExtractor(Text_Text.Text, obj);
    }
  }
  if (isPaymentSuccess) {
    premiumType = selectedPremiumType;
  }
  _modDef38(
    null != premiumType,
    "If isPaymentSuccess is true, a value must be given for selectedPremiumType. Or premiumType must be given.",
  );
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
  return keyExtractor(PremiumPlanActionSheetHeaderDefault, { premiumType, trialOffer: trialOffer2, discountOffer });
}
function PlanOptionBadgeComponent(backgroundColorType) {
  let str = backgroundColorType.backgroundColorType;
  if (str === undefined) {
    str = "green";
  }
  const tmp = closure_38();
  items = [tmp.planOptionDiscount];
  let prop = null;
  if ("white" === str) {
    prop = tmp.planOptionDiscountWhite;
  }
  const obj = { style: items, children: null };
  items[1] = prop;
  const obj2 = { style: tmp.planOptionDiscountText, variant: "body-xs/semibold", color: null, children: null };
  let str2 = "text-overlay-light";
  if ("white" === str) {
    str2 = "text-overlay-dark";
  }
  obj2.color = str2;
  obj2.children = backgroundColorType.text;
  obj.children = keyExtractor(Text_Text.Text, obj2);
  return keyExtractor(React5, obj);
}
function PlanOption(premiumItem) {
  premiumItem = premiumItem.premiumItem;
  ({ customBadgeComponent, trialOffer, discountOffer, userIsEligibleForBogoPromotion } = premiumItem);
  ({ selectedProductId, optionNeedsProductNameLabel, discountedPriceString } = premiumItem);
  if (userIsEligibleForBogoPromotion === undefined) {
    userIsEligibleForBogoPromotion = false;
  }
  first = undefined;
  dependencyMap = undefined;
  const tmp = closure_38();
  [first, dependencyMap] = noop.useState(0);
  items = [IAPStore];
  const stateFromStores = premiumItem(504).useStateFromStores(items, () => IAPStore.getProduct(premiumItem.productId));
  const obj = premiumItem(504);
  let checkoutPlanPriceString = premiumItem(9151).useCheckoutPlanPriceString(premiumItem.productId, stateFromStores);
  const obj2 = premiumItem(9151);
  const obj4 = { discountedPriceString, regularPriceString: null };
  let priceString;
  if (stateFromStores != null) {
    priceString = stateFromStores.priceString;
  }
  obj4.regularPriceString = priceString;
  const checkoutPlanDiscountPrices = premiumItem(9151).useCheckoutPlanDiscountPrices(premiumItem.productId, obj4);
  const obj3 = premiumItem(9151);
  ({ orderRequired, orderRecord } = useNativeCheckoutStore((orderRequired) => ({
    orderRequired: orderRequired.orderRequired,
    orderRecord: orderRequired.orderRecord,
  })));
  const premiumTier = premiumItem.premiumTier;
  let tmp11 = null != trialOffer && null != premiumTier;
  if (tmp11) {
    const subscriptionTrial = trialOffer.subscriptionTrial;
    let skuId;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
    tmp11 = skuId === first(2174).getSkuIdForPremiumType(premiumTier);
    const obj5 = first(2174);
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
  const tmp10 = useNativeCheckoutStore((orderRequired) => ({
    orderRequired: orderRequired.orderRequired,
    orderRecord: orderRequired.orderRecord,
  }));
  const tierDisplayNameByPlanId = premiumItem(2174).getTierDisplayNameByPlanId(premiumItem.basePlanId);
  const tmp4Result = premiumItem(2174);
  const intervalString = first(2174).getIntervalString(premiumItem.interval, false);
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
    tmp22 = closure_17[premiumItem.basePlanId];
  }
  if (userIsEligibleForBogoPromotion) {
    userIsEligibleForBogoPromotion = premiumItem.basePlanId === closure_21.PREMIUM_MONTH_TIER_2;
  }
  if (null == stateFromStores) {
    let USD = constants5.USD;
  } else {
    if (str.toLowerCase() in constants5) {
      USD = stateFromStores.currencyCode.toLowerCase();
    } else {
      USD = tmp24.USD;
    }
    str = stateFromStores.currencyCode;
  }
  let formatRateResult = null;
  if (null != checkoutPlanDiscountPrices) {
    formatRateResult = tmp4(6325).formatRate(
      checkoutPlanDiscountPrices.discountedPrice,
      tmp26.interval,
      tmp26.intervalCount,
    );
    const tmp4Result5 = tmp4(6325);
  }
  if (tmp14) {
    const intl = tmp4(1112).intl;
    const obj6 = { price: tmp4(6325).formatPrice(0, USD, { minimumFractionDigits: 0, maximumFractionDigits: 0 }) };
    let formatToPlainStringResult = intl.formatToPlainString(tmp4(1112).t.hXcaLT, obj6);
    const tmp4Result6 = tmp4(6325);
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
  const obj7 = first(2174);
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
  const tmp4Result7 = premiumItem(6325);
  if (first > 0) {
    const items1 = [tmp.planOptionPriceContainer];
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
    let str3 = "body-lg/medium";
  } else {
    str3 = "body-md/medium";
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
  const items3 = [closure_35(premiumItem(5634).Text, obj11)];
  const obj12 = { style: planOptionPriceContainer, children: null };
  const obj13 = { style: tmp.planOptionDiscountContainer, children: null };
  if (null == customBadgeComponent) {
    if (tmp20) {
      customBadgeComponent = null;
    } else if (userIsEligibleForBogoPromotion) {
      const obj14 = { text: null };
      const intl3 = tmp4(1112).intl;
      obj14.text = intl3.string(tmp4(1112).t.iQTfWx);
      let tmp33Result = closure_35(PlanOptionBadgeComponent, obj14);
    } else {
      tmp33Result = null;
      if (null != tmp22) {
        const obj15 = { text: null };
        const intl2 = tmp4(1112).intl;
        const obj16 = { discount: tmp4(2026).formatPercent(LocaleStore.locale, tmp22 / 100) };
        obj15.text = intl2.format(tmp4(1112).t.IAybsG, obj16);
        tmp33Result = closure_35(PlanOptionBadgeComponent, obj15);
        const tmp4Result8 = tmp4(2026);
      }
    }
  }
  const items4 = [customBadgeComponent];
  const obj17 = { style: tmp.priceText, variant: "body-lg/medium", color: null, children: null };
  let str8 = str4;
  if (premiumItem.productId === selectedProductId) {
    str8 = "interactive-text-active";
  }
  obj17.color = str8;
  obj17.children = formatToPlainStringResult;
  items4[1] = closure_35(premiumItem(5634).Text, obj17);
  obj13.children = items4;
  const items5 = [closure_36(closure_8, obj13), ,];
  if (!tmp14) {
    items5[1] = null;
    const obj18 = {
      style: tmp.discountSubTextContainer,
      onLayout(nativeEvent) {
        const height = nativeEvent.nativeEvent.layout.height;
        if (height !== first) {
          closure_2(height);
        }
      },
      children: null,
    };
    let tmp33Result4 = null;
    if (null != formatRateResult) {
      tmp33Result4 = null;
      if (null != discountOffer) {
        tmp33Result4 = null;
        if (null == premiumItem.selectedPremiumType) {
          let str10 = str4;
          if (tmp34) {
            str10 = "text-default";
          }
          const obj19 = { variant: "body-sm/medium", color: str10, children: null };
          const intl6 = tmp4(1112).intl;
          const obj20 = { discountedPrice: formatRateResult, numMonths: null };
          const discount = discountOffer.discount;
          let num2;
          if (discount != null) {
            num2 = discount.intervalCount;
          }
          if (num2 == null) {
            num2 = 1;
          }
          obj20.numMonths = num2;
          obj19.children = intl6.formatToPlainString(tmp4(1112).t["02Gmgm"], obj20);
          tmp33Result4 = closure_35(tmp4(5634).Text, obj19);
        }
      }
    }
    const items6 = [tmp33Result4];
    let tmp33Result5 = null != checkoutPlanDiscountPrices && null != discountOffer;
    if (tmp33Result5) {
      if (tmp34) {
        str4 = "text-default";
      }
      const obj21 = { variant: "body-sm/medium", color: str4, children: null };
      const intl7 = tmp4(1112).intl;
      const obj22 = { regularPrice: formatRateResult1, numMonths: null };
      const discount2 = discountOffer.discount;
      let num3;
      if (discount2 != null) {
        num3 = discount2.intervalCount;
      }
      if (num3 == null) {
        num3 = 1;
      }
      obj22.numMonths = num3;
      obj21.children = intl7.formatToPlainString(tmp4(1112).t["vZk+c/"], obj22);
      tmp33Result5 = closure_35(tmp4(5634).Text, obj21);
    }
    items6[1] = tmp33Result5;
    obj18.children = items6;
    items5[2] = closure_36(closure_8, obj18);
    obj12.children = items5;
    items3[1] = closure_36(closure_8, obj12);
    obj10.children = items3;
    return closure_36(closure_8, obj10);
  } else {
    let str9 = str4;
    if (tmp34) {
      str9 = "text-default";
    }
    const obj23 = { variant: "body-xs/medium", color: str9, children: null };
    if (premiumItem.interval === constants.YEAR) {
      const intl5 = tmp4(1112).intl;
      if (checkoutPlanPriceString == null) {
        checkoutPlanPriceString = closure_18;
      }
      const obj24 = { price: checkoutPlanPriceString };
      let formatToPlainStringResult1 = intl5.formatToPlainString(tmp4(1112).t.ECT4A5, obj24);
    } else {
      const intl4 = tmp4(1112).intl;
      let tmp42 = checkoutPlanPriceString;
      if (checkoutPlanPriceString == null) {
        tmp42 = closure_18;
      }
      const obj25 = { price: tmp42 };
      formatToPlainStringResult1 = intl4.formatToPlainString(tmp4(1112).t.v9QeON, obj25);
    }
    obj23.children = formatToPlainStringResult1;
    closure_35(tmp4(5634).Text, obj23);
  }
  formatRateResult1 = premiumItem(6325).formatRate(
    regularPrice,
    dependencyMap[premiumItem.basePlanId].interval,
    dependencyMap[premiumItem.basePlanId].intervalCount,
  );
}
function PremiumPlanSelectionActionSheetCTA(isPaymentSuccess) {
  ({ onStartPayment: require, shouldUseMobileWebRedirectCheckout } = isPaymentSuccess);
  if (isPaymentSuccess.isPaymentSuccess) {
    const obj2 = { text: null, size: "md", grow: true, onPress: null };
    const intl = util.intl;
    obj2.text = intl.string(util.t.WAI6xu);
    obj2.onPress = tmp;
    return keyExtractor(components_Button_Button.Button, obj2);
  } else {
    const tmp5 = shouldUseMobileWebRedirectCheckout
      ? { size: "lg", variant: "primary" }
      : { size: "md", variant: "active" };
    const obj = { text: tmp2 };
    const merged = Object.assign(tmp5);
    obj.grow = true;
    obj.onPress = function onPress() {
      return require({ shouldRedirectToMobileWeb: shouldUseMobileWebRedirectCheckout });
    };
    obj.loading = tmp4;
    obj.disabled = tmp3;
    return keyExtractor(components_Button_Button.Button, obj);
  }
}
function PremiumPlanSelectionActionSheet(premiumItems) {
  ({ applicationId: require, analyticsLocation, analyticsLocations, premiumType } = premiumItems);
  premiumItems = premiumItems.premiumItems;
  ({ onSwitchPremiumType: closure_3, onPaymentStart } = premiumItems);
  const onPaymentSuccess = premiumItems.onPaymentSuccess;
  const onPaymentDismiss = premiumItems.onPaymentDismiss;
  let flag = premiumItems.showFormTitle;
  ({ userIsEligibleForBogoPromotion, initialSelectedItem } = premiumItems);
  if (flag === undefined) {
    flag = true;
  }
  let ref;
  closure_15 = undefined;
  c16 = undefined;
  orderRequired = undefined;
  isPatchOrderLoading = undefined;
  closure_19 = undefined;
  discountedPriceString = undefined;
  let first;
  closure_22 = undefined;
  closure_23 = undefined;
  let analyticsLocations2;
  closure_25 = undefined;
  let memo;
  let basePurchaseFlowAnalyticsFields;
  let basePlanId;
  c29 = undefined;
  let onDismiss;
  let callback1;
  let memo1;
  closure_32 = async function _onPlanSelectionChange(arg0) {
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
        return { value: "HermesInternal", done: null };
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
                    find = closure_0(tmp3[51]).getSubscriptionItemsForProduct(tmp35);
                    ref.current = true;
                    c4 = 1;
                    const obj5 = closure_0(tmp3[51]);
                  }
                  c5 = 2;
                  c6 = 1;
                  const obj4 = {
                    value: closure_2_16(
                      find.map((planId) => {
                        const obj = { sku_id: null, subscription_plan_id: null, quantity: null, purchase_type: null };
                        const obj2 = closure_1_0(2174);
                        obj.sku_id = obj2.castPremiumSubscriptionAsSkuId(
                          closure_1_1(2174).getSkuIdForPlan(planId.planId),
                        );
                        ({ planId: obj.subscription_plan_id, quantity: obj.quantity } = planId);
                        obj.purchase_type = constants.SUBSCRIPTION;
                        return obj;
                      }),
                    ),
                    done: false,
                  };
                  return obj4;
                }
              }
            }
            c6 = 3;
          }
        } else if (1 === tmp7) {
          c4 = 0;
          closure_130_23.current = false;
          throw closure_3;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          closure_130_23.current = false;
          c6 = 3;
          let obj = { value, done: true };
          return obj;
        } else if (null == value) {
          c4 = 0;
          closure_130_23.current = false;
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
        closure_130_22(closure_129_1);
        c4 = 0;
        closure_130_23.current = false;
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
  noop = tmp;
  let tmp3 = premiumItems;
  const hasItem = analyticsLocations.includes(premiumType(premiumItems[27]).USER_SETTINGS_TRY_OUT_PREMIUM);
  const showNitroBasicPurchaseWarning =
    require("UserProfilePremiumTryItOutMobileRefreshExperiment").useTryItOutMobileRefreshConfig(
      "PremiumPlanSelectionActionSheet",
      hasItem,
    ).showNitroBasicPurchaseWarning;
  let tmp48Result6 = undefined !== showNitroBasicPurchaseWarning && showNitroBasicPurchaseWarning && hasItem;
  closure_8 = tmp48Result6;
  const tmp7 = closure_15((isPaymentSuccess) => isPaymentSuccess.isPaymentSuccess);
  closure_9 = tmp7;
  const tmp8 = closure_15((productId) => productId.productId);
  useNativeCheckoutStore = tmp8;
  let obj = require("UserProfilePremiumTryItOutMobileRefreshExperiment");
  const tmp9 = closure_15(
    (mobileWebRedirectCheckoutStatus) => mobileWebRedirectCheckoutStatus.mobileWebRedirectCheckoutStatus,
  );
  items = [ref];
  let stateFromStores = require("initialize").useStateFromStores(items, () => ref.isBusy());
  const tmp10 = ref;
  const tmp5Result = require("initialize");
  const isScreenReaderEnabled = require("useIsScreenReaderEnabled").useIsScreenReaderEnabled();
  noop.useRef(null);
  ref = noop.useRef(null);
  const items1 = [tmp7];
  const effect = noop.useEffect(() => {
    if (closure_9) {
      const _Date = Date;
      closure_13.current = Date.now();
    }
  }, items1);
  const items2 = [tmp7, isScreenReaderEnabled];
  const effect1 = noop.useEffect(() => {
    let tmp = closure_9;
    if (closure_9) {
      tmp = isScreenReaderEnabled;
    }
    if (tmp) {
      const obj2 = { ref, delay: 100 };
      const result = setAccessibilityFocus.setAccessibilityFocus(obj2);
    }
  }, items2);
  const tmp5Result17 = require("useIsScreenReaderEnabled");
  const handlePremiumPurchase = require("handlePremiumPurchase").useHandlePremiumPurchase();
  const tmp5Result18 = require("handlePremiumPurchase");
  const isPaymentsBlocked = require("BlockedPaymentsCountryExperiment").useIsPaymentsBlocked();
  const tmp18 = premiumType(tmp3[33])();
  const tmp19 = useNativeCheckoutStore((orderRecord) => orderRecord.orderRecord);
  closure_15 = tmp19;
  const tmp5Result19 = require("BlockedPaymentsCountryExperiment");
  ({
    patchOrderLineItems: c16,
    isPatchOrderLoading,
    orderRequired,
  } = useNativeCheckoutStore((patchOrderLineItems) => ({
    patchOrderLineItems: patchOrderLineItems.patchOrderLineItems,
    isPatchOrderLoading: patchOrderLineItems.isPatchOrderLoading,
    orderRequired: patchOrderLineItems.orderRequired,
  })));
  if (!isPatchOrderLoading) {
    isPatchOrderLoading = useNativeCheckoutStore((isCreateOrderLoading) => isCreateOrderLoading.isCreateOrderLoading);
  }
  const tmp20 = useNativeCheckoutStore((patchOrderLineItems) => ({
    patchOrderLineItems: patchOrderLineItems.patchOrderLineItems,
    isPatchOrderLoading: patchOrderLineItems.isPatchOrderLoading,
    orderRequired: patchOrderLineItems.orderRequired,
  }));
  const premiumTrialOffer = require("usePremiumTrialOffer").usePremiumTrialOffer();
  const tmp5Result20 = require("usePremiumTrialOffer");
  const premiumDiscountOffer = require("hooks/usePremiumDiscountOffer").usePremiumDiscountOffer();
  let tmp23 = null != premiumTrialOffer && null != premiumType;
  if (tmp23) {
    const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
    let skuId;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
    tmp23 = skuId === premiumType(tmp3[17]).getSkuIdForPremiumType(premiumType);
    const tmp2Result = premiumType(tmp3[17]);
  }
  let tmp25 = tmp23;
  if (tmp25) {
    let tmp26 = !orderRequired;
    if (orderRequired) {
      let subscriptionTrialId;
      if (tmp19 != null) {
        const subscriptionFacet = tmp19.subscriptionFacet;
        if (subscriptionFacet != null) {
          const subscriptionPreview = subscriptionFacet.subscriptionPreview;
          if (subscriptionPreview != null) {
            subscriptionTrialId = subscriptionPreview.subscriptionTrialId;
          }
        }
      }
      tmp26 = premiumTrialOffer.trialId === subscriptionTrialId;
    }
    tmp25 = tmp26;
  }
  closure_19 = tmp25;
  const tmp5Result21 = require("hooks/usePremiumDiscountOffer");
  const discountedPremiumProductInfo = require("useDiscountedPremiumProductInfo").useDiscountedPremiumProductInfo(
    premiumDiscountOffer,
    premiumItems,
  );
  ({ discountedPlan, discountedProduct, discountedPriceString } = discountedPremiumProductInfo);
  const tmp5Result22 = require("useDiscountedPremiumProductInfo");
  let productId;
  if (discountedPlan != null) {
    productId = discountedPlan.productId;
  }
  let obj2 = { discountedPriceString, regularPriceString: null };
  let priceString;
  if (discountedProduct != null) {
    priceString = discountedProduct.priceString;
  }
  obj2.regularPriceString = priceString;
  const checkoutPlanDiscountPrices = require("useCheckoutPlanPriceString").useCheckoutPlanDiscountPrices(
    productId,
    obj2,
  );
  const tmp32 = onPaymentDismiss(noop.useState(initialSelectedItem), 2);
  first = tmp32[0];
  closure_22 = tmp32[1];
  closure_23 = obj4.useRef(false);
  const tmp5Result23 = require("useCheckoutPlanPriceString");
  const items3 = [tmp10];
  const stateFromStores1 = require("initialize").useStateFromStores(items3, () => {
    let product = null;
    if (null != first) {
      product = IAPStore.getProduct(tmp.productId);
    }
    return product;
  });
  const tmp5Result24 = require("initialize");
  const tmp5Result25 = require("useBottomSheetRef");
  analyticsLocations2 = premiumType(tmp3[38])(
    analyticsLocations,
    premiumType(tmp3[27]).PREMIUM_PAYMENT_ACTION_SHEET,
  ).analyticsLocations;
  const tmp36 = premiumType(tmp3[39])(() => require("PremiumAnalyticsUtils").getNewAnalyticsLoadId());
  closure_25 = tmp36;
  const items4 = [premiumType];
  memo = obj4.useMemo(() => {
    const obj = PremiumUtils;
    return obj.castPremiumSubscriptionAsSkuId(PremiumUtilsDefault.getSkuIdForPremiumType(premiumType));
  }, items4);
  const tmp2Result8 = premiumType(tmp3[38]);
  let obj3 = { analyticsLoadId: tmp36, analyticsLocation: null, analyticsLocations: null };
  let merged = Object.assign(analyticsLocation);
  obj3.analyticsLocation = { object: memo.BUTTON_CTA, object_type: basePurchaseFlowAnalyticsFields.BUY };
  obj3.analyticsLocations = analyticsLocations2;
  basePurchaseFlowAnalyticsFields = require("PremiumAnalyticsUtils").getBasePurchaseFlowAnalyticsFields(obj3);
  basePlanId = null;
  if (null != first) {
    basePlanId = first.basePlanId;
  }
  let obj5 = { object: memo.BUTTON_CTA, object_type: basePurchaseFlowAnalyticsFields.BUY };
  const tmp5Result26 = require("PremiumAnalyticsUtils");
  let result = require("MobileWebRedirectCheckoutUtils").isMobileWebRedirectCheckoutEnabled();
  c29 = result;
  premiumType(tmp3[42])(() => {
    const obj2 = {};
    const merged = Object.assign(basePurchaseFlowAnalyticsFields);
    obj2.application_id = application_id;
    obj2.subscription_plan_id = basePlanId;
    obj2.sku_id = memo;
    let customCheckoutFlowForAnalytics;
    if (c29) {
      customCheckoutFlowForAnalytics = MobileWebRedirectCheckoutUtils.getCustomCheckoutFlowForAnalytics();
      const tmpResult = MobileWebRedirectCheckoutUtils;
    }
    obj2.custom_checkout_flow = customCheckoutFlowForAnalytics;
    const result = PaymentFlowStartedTriggerPoint.trackPaymentFlowStartedAnalyticsAndCTP(obj2);
  });
  const items5 = [tmp7, tmp8];
  onDismiss = obj4.useCallback(() => {
    let tmp = closure_9;
    if (closure_9) {
      tmp = null != ref.current;
    }
    if (tmp) {
      const obj2 = { product_id, duration_ms: null };
      const _Date = Date;
      obj2.duration_ms = Date.now() - ref.current;
      AnalyticsUtilsDefault.track(constants2.PREMIUM_ACTIVATED_SHEET_DISMISSED, obj2);
    }
    closure_2_16();
  }, items5);
  const items6 = [onDismiss];
  callback1 = obj4.useCallback(() => {
    callback();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items6);
  const items7 = [
    memo,
    basePurchaseFlowAnalyticsFields,
    tmp36,
    analyticsLocations2,
    handlePremiumPurchase,
    result,
    callback1,
    onPaymentDismiss,
    onPaymentStart,
    onPaymentSuccess,
    tmp19,
    first,
  ];
  const items8 = [tmp25, tmp48Result6, result, premiumType];
  const callback2 = obj4.useCallback(
    onPaymentSuccess(function* () {
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
          return { value: "HermesInternal", done: null };
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
              return { value: "Path", done: true };
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
                premiumType(tmp3[20])(null != closure_130_21, "cannot start payment without a selectedItem");
                basePlanId = closure_130_21.basePlanId;
                let tmp33 = closure_130_29;
                if (closure_130_29) {
                  tmp33 = closure_129_0;
                }
                closure_129_2 = tmp33;
                const PaymentFlowStep = closure_0(tmp3[40]).PaymentFlowStep;
                if (closure_129_2) {
                  let EXTERNAL_PAYMENT = PaymentFlowStep.MOBILE_WEB_REDIRECT_CHECKOUT;
                } else {
                  EXTERNAL_PAYMENT = PaymentFlowStep.EXTERNAL_PAYMENT;
                }
                closure_129_3 = EXTERNAL_PAYMENT;
                const obj10 = {
                  from_step: closure_0(tmp3[40]).PaymentFlowStep.PLAN_SELECT,
                  to_step: closure_129_3,
                  subscription_plan_gateway_plan_id: closure_130_21.productId,
                  sku_id: closure_130_26,
                };
                paymentFlowStepAnalyticsFields = closure_0(tmp3[40]).getPaymentFlowStepAnalyticsFields(
                  closure_130_27,
                  obj10,
                );
                if (!closure_129_2) {
                  premiumType(tmp3[44]).track(constants.PAYMENT_FLOW_STEP, paymentFlowStepAnalyticsFields);
                  const obj7 = premiumType(tmp3[44]);
                }
                const obj12 = {
                  productId: closure_130_21.productId,
                  onPaymentStart: closure_130_4,
                  onPaymentSuccess: closure_130_5,
                  onPaymentDismiss: closure_130_6,
                };
                ref(obj12);
                if (closure_129_2) {
                  const obj11 = closure_0(tmp3[46]);
                  const obj13 = { planId: basePlanId, isGift: false, loadId: closure_130_25 };
                  const result = obj11.goToStandalonePremiumCheckoutFromMobileApp(
                    "premium_plan_selection_action_sheet",
                    obj13,
                    () => {
                      if (obj.isMetaQuest()) {
                        callback1();
                      } else {
                        handlePremiumPurchase("in_mobile_web");
                        premiumType(premiumItems[44]).track(constants.PAYMENT_FLOW_STEP, closure_1_4);
                        const obj2 = premiumType(premiumItems[44]);
                      }
                      obj = require("MetaQuestUtils");
                    },
                    () => {
                      const obj2 = { title: null, body: null, hideActionSheet: true };
                      const intl = closure_1_0(1112).intl;
                      obj2.title = intl.string(closure_1_0(1112).t.NrBVjw);
                      const intl2 = closure_1_0(1112).intl;
                      obj2.body = intl2.string(closure_1_0(1112).t["gD+grx"]);
                      closure_1_1(6047).show(obj2);
                    },
                  );
                } else {
                  c4 = 1;
                  const obj14 = {
                    productId: closure_130_21.productId,
                    analyticsLocation: closure_130_27.location,
                    analyticsLoadId: closure_130_25,
                    analyticsLocations: closure_130_24,
                    orderId: null,
                  };
                  let id;
                  if (closure_130_15 != null) {
                    id = closure_130_15.id;
                  }
                  obj14.orderId = id;
                  c5 = 3;
                  c6 = 1;
                  const obj15 = { value: closure_130_14(obj14), done: false };
                  return obj15;
                }
                const obj5 = closure_0(tmp3[40]);
              }
            } else {
              if (2 === tmp7) {
                c4 = 0;
                closure_129_5 = closure_3;
                if (closure_129_5 instanceof premiumType(tmp3[49])) {
                  const subscriptions = closure_0(tmp3[50]).fetchSubscriptions();
                  let obj2 = closure_0(tmp3[50]);
                  const obj16 = { title: null, body: null, hideActionSheet: true };
                  let intl = closure_0(tmp3[19]).intl;
                  obj16.title = intl.string(closure_0(tmp3[19]).t["U+H+kd"]);
                  let intl2 = closure_0(tmp3[19]).intl;
                  obj16.body = intl2.string(closure_0(tmp3[19]).t.F9ktNa);
                  premiumType(tmp3[48]).show(obj16);
                  const obj3 = premiumType(tmp3[48]);
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
    }),
    items7,
  );
  memo1 = obj4.useMemo(() => {
    if (c29) {
      const intl4 = util.intl;
      let stringResult = intl4.string(util.t.rylrdY);
    } else if (closure_19) {
      const intl3 = util.intl;
      const string = intl3.string;
      let rKD72m = util.t;
      if (isAndroidResult) {
        rKD72m = rKD72m.rKD72m;
        let stringResult1 = string(rKD72m);
      } else {
        stringResult1 = string(rKD72m.bboTul);
      }
      isAndroidResult = PlatformUtils.isAndroid();
    } else {
      if (closure_8) {
        if (null != premiumType) {
          const intl2 = util.intl;
          const obj = { planName: PremiumUtils.getPremiumTypeDisplayName(tmp3) };
          stringResult = intl2.formatToPlainString(util.t["4UNoeD"], obj);
        }
      }
      const intl = util.intl;
      stringResult = intl.string(util.t.nIlrxd);
    }
    return stringResult;
  }, items8);
  const items9 = [tmp7, first, tmp25, discountedPriceString, memo1, tmp.legalDisclaimerText];
  const memo2 = obj4.useMemo(() => {
    if (closure_9) {
      return null;
    } else {
      let interval;
      if (first != null) {
        interval = first.interval;
      }
      if (null == interval) {
        return null;
      } else if (closure_19) {
        const obj2 = {
          style: optionNeedsProductNameLabel.legalDisclaimerText,
          variant: "footnote/medium",
          children: null,
        };
        const intl3 = util.intl;
        const t = util.t;
        const obj4 = { paidURL: constants3.PAID_TERMS, interval: null, cancelURL: null };
        const isAndroidResult = PlatformUtils.isAndroid();
        const tmp42 = PlatformUtils.isAndroid() ? t.tINI9V : t.ZWXtAj;
        obj4.interval = PremiumUtilsDefault.getIntervalStringAsNoun(interval);
        obj4.cancelURL = HelpdeskUtilsDefault.getArticleURL(constants4.PREMIUM_DETAILS_CANCEL_SUB);
        obj2.children = intl3.format(tmp42, obj4);
        return keyExtractor(Text_Text.Text, obj2);
      } else if (null != discountedPriceString) {
        const obj5 = {
          style: optionNeedsProductNameLabel.legalDisclaimerText,
          variant: "footnote/medium",
          children: null,
        };
        const intl2 = util.intl;
        const obj9 = {
          buttonText: memo1,
          interval: PremiumUtilsDefault.formatInterval(interval),
          cancelSubscriptionArticle: null,
          paidServiceTermsArticle: null,
        };
        obj9.cancelSubscriptionArticle = HelpdeskUtilsDefault.getArticleURL(constants4.PREMIUM_DETAILS_CANCEL_SUB);
        obj9.paidServiceTermsArticle = HelpdeskUtilsDefault.getArticleURL(constants4.PAID_TERMS);
        obj5.children = intl2.format(util.t["3uC7vj"], obj9);
        return keyExtractor(Text_Text.Text, obj5);
      } else {
        const t2 = util.t;
        const isAndroidResult1 = PlatformUtils.isAndroid();
        const obj = {
          style: optionNeedsProductNameLabel.legalDisclaimerText,
          variant: "footnote/medium",
          children: null,
        };
        const intl = util.intl;
        const obj11 = { paidURL: constants3.PAID_TERMS, interval: null, ctaText: null };
        const tmp3 = PlatformUtils.isAndroid() ? t2.COObWR : t2["7wpqfj"];
        obj11.interval = PremiumUtilsDefault.getIntervalStringAsNoun(interval);
        obj11.ctaText = memo1;
        obj.children = intl.format(tmp3, obj11);
        return keyExtractor(Text_Text.Text, obj);
      }
    }
  }, items9);
  let obj6 = {
    ref: tmp5Result25.useBottomSheetRef().bottomSheetRef,
    handleDisabled: true,
    onDismiss,
    startExpanded: true,
    children: null,
  };
  if (isPaymentsBlocked) {
    let obj7 = { style: tmp.blockedPaymentContainer, children: null };
    const items10 = [closure_35(premiumType(tmp3[62]), {})];
    let obj8 = { variant: "floating", onPress: callback1 };
    items10[1] = closure_35(require("ActionSheetHeaderBar").ActionSheetHeaderBar, obj8);
    obj7.children = items10;
    let tmp49Result = closure_36(closure_8, obj7);
  } else {
    let obj9 = {
      premiumType,
      isPaymentSuccess: tmp7,
      selectedPremiumType: null,
      trialOffer: null,
      discountOffer: null,
    };
    let premiumTier;
    if (first != null) {
      premiumTier = first.premiumTier;
    }
    obj9.selectedPremiumType = premiumTier;
    obj9.trialOffer = premiumTrialOffer;
    let tmp53 = null;
    if (null != discountedPriceString) {
      tmp53 = premiumDiscountOffer;
    }
    obj9.discountOffer = tmp53;
    const items11 = [closure_35(Header, obj9), ,];
    let obj10 = { style: tmp.body, children: null };
    if ("in_mobile_web" === tmp9) {
      let obj11 = { size: "large", style: tmp.loadingIndicator };
      let tmp49Result3 = closure_35(closure_9, obj11);
    } else if (tmp7) {
      let obj12 = { style: tmp.contentActivated, children: null };
      let obj13 = { ref, accessible: true, accessibilityRole: "image", accessibilityLabel: null, children: null };
      const intl8 = require("util").intl;
      obj13.accessibilityLabel = intl8.string(require("util").t["Q+BB2w"]);
      let premiumTier1;
      if (first != null) {
        premiumTier1 = first.premiumTier;
      }
      if (closure_19.TIER_0 === premiumTier1) {
        if (tmp5Result28.isThemeDark(tmp18)) {
          let tmp2Result10 = premiumType(tmp3[53]);
        } else {
          tmp2Result10 = premiumType(tmp3[54]);
        }
        tmp5Result28 = require("shared");
      } else {
        if (tmp77.TIER_1 === premiumTier1) {
          if (tmp5Result29.isThemeDark(tmp18)) {
            let tmp2Result11 = premiumType(tmp3[55]);
          } else {
            tmp2Result11 = premiumType(tmp3[56]);
          }
          let tmp78 = tmp2Result11;
          tmp5Result29 = require("shared");
        } else if (tmp77.TIER_2 === premiumTier1) {
          if (tmp5Result30.isThemeDark(tmp18)) {
            let tmp2Result12 = premiumType(tmp3[57]);
          } else {
            tmp2Result12 = premiumType(tmp3[58]);
          }
          tmp78 = tmp2Result12;
          tmp5Result30 = require("shared");
        }
        let obj14 = { source: tmp78 };
        obj13.children = closure_35(tmp2Result9, obj14);
        const items12 = [closure_35(tmp54, obj13)];
        let obj15 = { style: tmp.contentActivatedText, variant: "body-md/semibold", children: null };
        let premiumTier2;
        if (first != null) {
          premiumTier2 = first.premiumTier;
        }
        if (tmp77.TIER_0 === premiumTier2) {
          const intl10 = require("util").intl;
          let stringResult = intl10.string(require("util").t["6WWrVM"]);
          obj15.children = stringResult;
          obj15 = closure_35(require("Text/Text").Text, obj15);
          items12[1] = obj15;
          obj12.children = items12;
          closure_36(tmp54, obj12);
        } else if (tmp77.TIER_1 !== premiumTier2) {
          if (tmp77.TIER_2 === premiumTier2) {
            const intl11 = require("util").intl;
            stringResult = intl11.string(require("util").t.I7xNzI);
          }
        }
        const intl9 = require("util").intl;
        stringResult = intl9.string(require("util").t.LAAgsy);
      }
      tmp2Result9 = premiumType(tmp3[64]);
    } else {
      let obj16 = { convertToMajorUnits: require("PlatformUtils").isAndroid() };
      if (flag) {
        flag = !tmp25;
      }
      const obj17 = { style: tmp.contentSelectPlan, children: null };
      if (tmp25) {
        const obj18 = { variant: "body-md/normal", color: "text-strong", style: tmp.trialDisclaimer, children: null };
        let intl2 = require("util").intl;
        obj18.children = intl2.string(require("util").t.u95Dt4);
        let tmp48Result4 = closure_35(require("Text/Text").Text, obj18);
      } else {
        tmp48Result4 = null;
        if (null != checkoutPlanDiscountPrices) {
          tmp48Result4 = null;
          if (null != premiumType) {
            const obj19 = { children: null };
            const obj20 = {
              variant: "body-md/normal",
              color: "text-strong",
              style: tmp.discountDisclaimer,
              children: null,
            };
            let intl = require("util").intl;
            obj20.children = intl.format(require("util").t.yBn7uz, checkoutPlanDiscountPrices);
            const items13 = [closure_35(require("Text/Text").Text, obj20)];
            const obj21 = { style: null };
            const items14 = [,];
            ({ divider: arr14[0], offerDividerMargin: arr14[1] } = tmp);
            obj21.style = items14;
            items13[1] = closure_35(tmp54, obj21);
            obj19.children = items13;
            tmp48Result4 = closure_36(tmp54, obj19);
          }
        }
      }
      const items15 = [tmp48Result4, ,];
      let stringResult1;
      const tmp5Result31 = require("PlatformUtils");
      if (flag) {
        let intl3 = require("util").intl;
        stringResult1 = intl3.string(require("util").t.u95Dt4);
      }
      const obj22 = {
        title: stringResult1,
        titleStyleType: onDismiss.NO_BORDER_OR_MARGIN,
        titleViewStyle: tmp.formTitle,
        sectionBodyStyle: null,
        inset: true,
        children: null,
      };
      const items16 = [tmp.formSectionBody];
      let formSectionBodyWithNoTitle = !flag;
      if (!flag) {
        formSectionBodyWithNoTitle = tmp.formSectionBodyWithNoTitle;
      }
      items16[1] = formSectionBodyWithNoTitle;
      obj22.sectionBodyStyle = items16;
      let tmp48Result5 = null != stateFromStores1;
      if (tmp48Result5) {
        tmp48Result5 = "HR" === stateFromStores1.countryCode;
      }
      if (tmp48Result5) {
        tmp48Result5 = stateFromStores1.currencyCode.toLowerCase() === memo1.EUR;
      }
      if (tmp48Result5) {
        const obj23 = { message: null };
        let intl4 = require("util").intl;
        const obj24 = { kunaPriceWithCurrency: null };
        const tmp2Result14 = premiumType(tmp3[66]);
        obj24.kunaPriceWithCurrency = require("PriceUtils").formatPrice(
          stateFromStores1.price * callback1,
          memo1.HRK,
          obj16,
        );
        obj23.message = intl4.formatToPlainString(require("util").t["9hnZoK"], obj24);
        tmp48Result5 = closure_35(tmp2Result14, obj23);
        const tmp5Result32 = require("PriceUtils");
      }
      const items17 = [tmp48Result5];
      let str4 = "auto";
      let str5 = "auto";
      if (isPatchOrderLoading) {
        str5 = "none";
      }
      const obj25 = {
        pointerEvents: str5,
        accessibilityElementsHidden: isPatchOrderLoading,
        importantForAccessibility: null,
        style: null,
        children: null,
      };
      if (isPatchOrderLoading) {
        str4 = "no-hide-descendants";
      }
      obj25.importantForAccessibility = str4;
      let planOptionsBusy = null;
      if (isPatchOrderLoading) {
        planOptionsBusy = tmp.planOptionsBusy;
      }
      obj25.style = planOptionsBusy;
      let productId1;
      if (first != null) {
        productId1 = first.productId;
      }
      const obj26 = {
        value: productId1,
        options: null,
        onChange: null,
        withDividers: false,
        style: null,
        disabled: null,
        indicatorLeft: true,
      };
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
      set = new Set(premiumItems.map((premiumTier) => premiumTier.premiumTier));
      closure_129_7 = set.size > 1;
      obj26.options = premiumItems.map((premiumItem) => {
        const obj = {
          premiumItem,
          selectedProductId,
          optionNeedsProductNameLabel,
          trialOffer: premiumType,
          discountOffer: premiumItems,
          discountedPriceString: null,
          userIsEligibleForBogoPromotion: null,
          selectedPremiumType: null,
        };
        let tmp3 = null;
        if (premiumItem.productId === closure_1_3) {
          tmp3 = onPaymentStart;
        }
        obj.discountedPriceString = tmp3;
        obj.userIsEligibleForBogoPromotion = onPaymentSuccess;
        obj.selectedPremiumType = onPaymentDismiss;
        return { name: keyExtractor(PlanOption, obj), value: premiumItem.productId };
      });
      obj26.onChange = function onChange(value) {
        return (function onPlanSelectionChange(value) {
          const self = this;
          const apply = closure_1_32.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })(value.value);
      };
      obj26.style = tmp.planOptionRowContainer;
      obj26.disabled = stateFromStores;
      obj25.children = closure_35(require("native").RadioGroup, obj26);
      items17[1] = closure_35(tmp54, obj25);
      obj22.children = items17;
      items15[1] = closure_36(premiumType(tmp3[65]), obj22);
      if (tmp48Result6) {
        tmp48Result6 = premiumType === closure_19.TIER_0;
      }
      if (tmp48Result6) {
        const obj27 = { style: tmp.profileWarning, children: null };
        const obj28 = { type: "warning", role: "none", title: null, message: null, action: null };
        const intl5 = require("util").intl;
        obj28.title = intl5.string(require("util").t.INiT2j);
        const intl6 = require("util").intl;
        obj28.message = intl6.string(require("util").t.HdDf7r);
        const obj29 = { text: null, onPress: null, loading: null };
        const intl7 = require("util").intl;
        obj29.text = intl7.string(require("util").t.NQWezR);
        obj29.onPress = function onPress() {
          let interval;
          if (first != null) {
            interval = first.interval;
          }
          return closure_1_3(closure_2_19.TIER_2, interval);
        };
        let tmp74 = stateFromStores;
        if (!stateFromStores) {
          tmp74 = isPatchOrderLoading;
        }
        obj29.loading = tmp74;
        obj28.action = obj29;
        obj27.children = closure_35(require("InlineNotice").InlineNotice, obj28);
        tmp48Result6 = closure_35(tmp54, obj27);
      }
      items15[2] = tmp48Result6;
      obj17.children = items15;
      const items18 = [closure_36(tmp54, obj17)];
      const obj30 = {
        isPaymentSuccess: tmp7,
        onClose: callback1,
        ctaText: memo1,
        onStartPayment: callback2,
        shouldUseMobileWebRedirectCheckout: result,
        disabled: null,
        loading: null,
      };
      let tmp87 = stateFromStores;
      if (!stateFromStores) {
        tmp87 = isPatchOrderLoading;
      }
      obj30.disabled = tmp87;
      if (!stateFromStores) {
        stateFromStores = isPatchOrderLoading;
      }
      const obj31 = { children: null };
      obj30.loading = stateFromStores;
      items18[1] = closure_35(PremiumPlanSelectionActionSheetCTA, obj30);
      obj31.children = items18;
      tmp49Result3 = closure_36(closure_37, obj31);
      const tmp2Result13 = premiumType(tmp3[65]);
    }
    const items19 = [tmp49Result3];
    let tmp90 = !result;
    if (!result) {
      tmp90 = memo2;
    }
    const obj32 = { children: null };
    items19[1] = tmp90;
    obj10.children = items19;
    items11[1] = closure_36(closure_8, obj10);
    const obj33 = { variant: "floating", onPress: callback1 };
    items11[2] = closure_35(require("ActionSheetHeaderBar").ActionSheetHeaderBar, obj33);
    obj32.children = items11;
    tmp49Result = closure_36(closure_37, obj32);
  }
  obj6.children = tmp49Result;
  return closure_35(require("Sheet/BottomSheet").BottomSheet, obj6);
}
let closure_3 = ["predicate", "initialSelectedCriteria", "initialSelectedInterval", "sortFn"];
get_ActivityIndicator = fn(17);
({ View: closure_8, ActivityIndicator: closure_9 } = get_ActivityIndicator);
let useNativeCheckoutStore = fn(9119).useNativeCheckoutStore;
const PremiumPlanPurchasedStore = fn(9116);
({
  setInitiatedPurchaseFromNewFlow: map1,
  setMobileWebRedirectCheckoutStatus: closure_14,
  usePremiumPlanPurchasedStore: closure_15,
  reset: closure_16,
} = PremiumPlanPurchasedStore);
const PremiumConstants = fn(1389);
({
  DISCOUNTS: closure_17,
  PRICE_PLACEHOLDER: closure_18,
  PremiumTypes: closure_19,
  SubscriptionIntervalTypes: closure_20,
  SubscriptionPlans: closure_21,
  SubscriptionPlanInfo: closure_22,
  PremiumSubscriptionSKUs: closure_23,
  PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY: closure_24,
} = PremiumConstants);
let Constants = fn(1071);
({
  AnalyticEvents: closure_25,
  AnalyticsObjects: closure_26,
  AnalyticsObjectTypes: closure_27,
  MarketingURLs: closure_28,
  HelpdeskArticles: closure_29,
} = Constants);
const TitleStyleType = fn(1190).TitleStyleType;
const PaymentConstants = fn(5760);
({ EUR_TO_HRK_CONVERSION_RATE: closure_31, ItemPurchaseType: closure_32 } = PaymentConstants);
Constants = fn(1082);
({ CurrencyCodes: items, PaymentGateways: closure_34 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_35, jsxs: closure_36, Fragment: closure_37 } = jsxProd);
const createStyles = fn(5043);
let obj2 = {
  body: { padding: 16 },
  headerText: { paddingTop: 30, paddingHorizontal: 20 },
  contentSelectPlan: { marginBottom: 16 },
  profileWarning: { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_8 },
  contentActivated: { alignItems: "center", paddingTop: 40, paddingBottom: 56 },
  contentActivatedText: { width: 328, marginTop: 16, textAlign: "center" },
  formTitle: { paddingTop: 0, paddingLeft: 0 },
  formSectionBody: { backgroundColor: "none" },
  formSectionBodyWithNoTitle: { marginTop: -24 },
  planOptionRowContainer: { paddingHorizontal: 10 },
  planOptionsBusy: { opacity: 0.5 },
  planOptionContainer: { display: "flex", flexDirection: "row", alignItems: "center" },
  planOptionPriceContainer: {
    flexGrow: 1,
    flexShrink: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  planOptionDiscountContainer: { display: "flex", flexDirection: "row", flexShrink: 1 },
  planOptionDiscount: null,
  planOptionDiscountWhite: null,
  planOptionDiscountText: null,
  blockedPaymentContainer: null,
  legalDisclaimerText: null,
  divider: null,
  offerDividerMargin: null,
  trialDisclaimer: null,
  discountDisclaimer: null,
  loadingIndicator: null,
  discountSubTextContainer: null,
  priceText: null,
};
let obj3 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_8 };
obj2.planOptionDiscount = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360,
  paddingVertical: 2,
  paddingHorizontal: 8,
  marginRight: 8,
};
let obj4 = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360,
  paddingVertical: 2,
  paddingHorizontal: 8,
  marginRight: 8,
};
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
class PremiumPlanSelectionActionSheetWithOrderCTX {
  constructor(arg0) {
    TIER_2 = global;
    tmp = TIER_2;
    tmp2 = initialSelectedInterval;
    NitroACOMSubscriptionExperiment = TIER_2(initialSelectedInterval[69]).NitroACOMSubscriptionExperiment;
    obj = TIER_2(initialSelectedInterval[59]);
    tmp3 = PaymentGateways;
    if (obj.isIOS()) {
      if (
        NitroACOMSubscriptionExperiment.useConfig({ location: "PremiumPlanSelectionActionSheetWithOrderCTX" }).enabled
      ) {
        APPLE = tmp3.APPLE_ADVANCED_COMMERCE;
        tmp5 = tmp3;
      } else {
        APPLE = tmp3.APPLE;
        tmp5 = tmp3;
      }
      tmp6 = tmp5;
      tmp7 = APPLE;
    } else {
      GOOGLE = tmp3.GOOGLE;
      tmp4 = tmp3;
      tmp8 = closure_7;
      tmp9 = null;
      closure_1 = closure_7.useRef(null);
      effect = closure_7.useEffect(
        () => () => {
          const current = ref.current;
          if (null != current) {
            ref(5257).openLazy(() => Promise.resolve(closure_1_44), closure_2_24, current);
            const obj = ref(5257);
          }
        },
        [],
      );
      fn = global.predicate;
      if (undefined === fn) {
        TIER_2 = global.premiumType;
        if (TIER_2 == null) {
          tmp11 = PremiumTypes;
          TIER_2 = PremiumTypes.TIER_2;
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
      fn2 = global.initialSelectedCriteria;
      if (undefined === fn2) {
        fn2 = (interval) => interval.interval === constants.YEAR;
      }
      ({ initialSelectedInterval, sortFn } = global);
      if (undefined === sortFn) {
        sortFn = (interval, interval2) => interval2.interval - interval.interval;
      }
      tmp12 = closure_4;
      tmp13 = closure_3;
      tmp14 = closure_4(global, closure_3);
      tmpResult = tmp(tmp2[34]);
      premiumTrialOffer = tmpResult.usePremiumTrialOffer();
      premiumType = global.premiumType;
      tmp16 = null != premiumTrialOffer && null != premiumType;
      if (tmp16) {
        subscriptionTrial = premiumTrialOffer.subscriptionTrial;
        skuId = undefined;
        if (subscriptionTrial != null) {
          skuId = subscriptionTrial.skuId;
        }
        tmp18 = closure_1;
        obj3 = closure_1(tmp2[17]);
        tmp16 = skuId === obj3.getSkuIdForPremiumType(premiumType);
      }
      tmp19 = undefined;
      if (tmp16) {
        obj1 = { subscription_preview: null };
        obj15 = { subscription_trial_id: null };
        obj15.subscription_trial_id = premiumTrialOffer.trialId;
        obj1.subscription_preview = obj15;
        tmp19 = obj1;
      }
      tmpResult1 = tmp(tmp2[70]);
      isEligibleForBogoOffer = tmpResult1.useIsEligibleForBogoOffer();
      if (null == sortFn) {
        tmpResult2 = tmp(tmp2[51]);
        premiumBundlesWithPredicate = tmpResult2.getPremiumBundlesWithPredicate(fn);
      } else {
        tmpResult3 = tmp(tmp2[51]);
        premiumBundlesWithPredicate1 = tmpResult3.getPremiumBundlesWithPredicate(fn);
        premiumBundlesWithPredicate = premiumBundlesWithPredicate1.sort(sortFn);
      }
      if (isEligibleForBogoOffer) {
        fn2 = (interval) => interval.interval === constants.MONTH;
      }
      found = premiumBundlesWithPredicate.find((interval) => interval.interval === dependencyMap);
      if (found == null) {
        found = premiumBundlesWithPredicate.find(fn2);
      }
      if (null != found) {
        tmpResult4 = tmp(tmp2[51]);
        subscriptionItemsForProduct = tmpResult4.getSubscriptionItemsForProduct(found.productId);
        mapped = subscriptionItemsForProduct.map((planId) => {
          const obj = { subscriptionPlanId: planId.planId, skuId: null, quantity: null };
          const obj2 = TIER_2(2174);
          obj.skuId = obj2.castPremiumSubscriptionAsSkuId(closure_1(2174).getSkuIdForPlan(planId.planId));
          obj.quantity = planId.quantity;
          return obj;
        });
      } else {
        obj16 = { subscriptionPlanId: null, skuId: null, quantity: 1 };
        tmp22 = SubscriptionPlans;
        obj16.subscriptionPlanId = SubscriptionPlans.PREMIUM_YEAR_TIER_2;
        tmpResult5 = tmp(tmp2[17]);
        tmp23 = PremiumSubscriptionSKUs;
        obj16.skuId = tmpResult5.castPremiumSubscriptionAsSkuId(PremiumSubscriptionSKUs.TIER_2);
        mapped = [];
        mapped[0] = obj16;
      }
      tmp24 = jsx;
      tmp25 = closure_1;
      obj17 = {
        paymentGateway: null,
        orderRequired: null,
        skuIds: null,
        defaultPlans: null,
        isGift: false,
        activeSubscription: null,
        initialSubscriptionFacet: null,
        onOrderRetryCancellation: null,
        children: null,
      };
      obj17.paymentGateway = GOOGLE;
      obj17.orderRequired = GOOGLE === tmp3.APPLE_ADVANCED_COMMERCE;
      obj17.skuIds = [];
      obj17.defaultPlans = mapped;
      obj17.initialSubscriptionFacet = tmp19;
      obj17.onOrderRetryCancellation = function onOrderRetryCancellation() {
        return closure_1(5257).hideActionSheet(closure_1_24);
      };
      tmp27 = PremiumPlanSelectionActionSheet;
      obj18 = {};
      tmp28 = obj18;
      tmp29 = tmp14;
      tmp26 = closure_1(tmp2[71]);
      merged = Object.assign(tmp14);
      obj18.onSwitchPremiumType = function onSwitchPremiumType(premiumType, initialSelectedInterval) {
        const obj = {};
        const merged = Object.assign(TIER_2);
        obj.premiumType = premiumType;
        obj.predicate = undefined;
        obj.initialSelectedInterval = initialSelectedInterval;
        closure_1.current = obj;
        ActionSheetActionCreatorsDefault.hideActionSheet(dependencyMap);
      };
      obj18.premiumItems = premiumBundlesWithPredicate;
      obj18.userIsEligibleForBogoPromotion = isEligibleForBogoOffer;
      obj18.initialSelectedItem = found;
      obj17.children = jsx(PremiumPlanSelectionActionSheet, obj18);
      return jsx(tmp26, obj17);
    }
    return;
  }
}
size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/PremiumPlanSelectionActionSheet.tsx");

export default PremiumPlanSelectionActionSheetWithOrderCTX;
export function getItemsByPremiumTypePredicate(arg0) {
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
