// discord_app/modules/premium/native/PremiumPlanSelectionActionSheet.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import PremiumUtils from "../../../utils/PremiumUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import setAccessibilityFocus from "../../a11y/native/setAccessibilityFocus.android.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import MobileWebRedirectCheckoutUtils from "../../payments/utils/MobileWebRedirectCheckoutUtils.tsx";
import PremiumBundledPlansUtils from "PremiumBundledPlansUtils.tsx";
import PremiumPlanActionSheetHeaderDefault from "PremiumPlanActionSheetHeader.tsx";
import usePremiumTrialOffer from "../hooks/usePremiumTrialOffer.android.tsx";
import ACOMExperiments from "../../billing/native/ACOMExperiments.tsx";
import useIsEligibleForBogoOffer from "hooks/useIsEligibleForBogoOffer.android.tsx";
import NativeCheckoutStoreProviderDefault from "../../checkout/native/stores/NativeCheckoutStoreProvider.tsx";
import PaymentFlowStartedTriggerPoint from "../../experiments/trigger_points/PaymentFlowStartedTriggerPoint.tsx";
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
        variant: "text-md/semibold",
        color: "text-default",
        accessibilityRole: "header",
        children: null,
      };
      const intl = util.intl;
      obj.children = intl.string(util.t.vLz3Zs);
      return __initData13(Text_Text.Text, obj);
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
  trialOffer = null;
  return __initData13(PremiumPlanActionSheetHeaderDefault, { premiumType, trialOffer, discountOffer });
}
function PlanOptionBadgeComponent(backgroundColorType) {
  let str = backgroundColorType.backgroundColorType;
  if (str === undefined) {
    str = "green";
  }
  const tmp = closure_38();
  const items = [tmp.planOptionDiscount];
  let prop = null;
  if ("white" === str) {
    prop = tmp.planOptionDiscountWhite;
  }
  let obj = { style: items, children: null };
  items[1] = prop;
  obj = { style: tmp.planOptionDiscountText, variant: "text-xs/bold", color: null, children: null };
  let str2 = "text-overlay-light";
  if ("white" === str) {
    str2 = "text-overlay-dark";
  }
  obj.color = str2;
  obj.children = backgroundColorType.text;
  obj.children = __initData13(Text_Text.Text, obj);
  return __initData13(React6, obj);
}
function PlanOption(premiumItem) {
  premiumItem = premiumItem.premiumItem;
  ({ customBadgeComponent, trialOffer, discountOffer, userIsEligibleForBogoPromotion } = premiumItem);
  ({ selectedProductId, optionNeedsProductNameLabel, discountedPriceString } = premiumItem);
  if (userIsEligibleForBogoPromotion === undefined) {
    userIsEligibleForBogoPromotion = false;
  }
  const tmp = closure_38();
  const tmp2 = _slicedToArray(noop.useState(0), 2);
  const first = tmp2[0];
  dependencyMap = tmp2[1];
  let obj = premiumItem(504);
  const items = [IAPStore];
  const stateFromStores = obj.useStateFromStores(items, () => IAPStore.getProduct(premiumItem.productId));
  let obj1 = premiumItem(13299);
  let checkoutPlanPriceString = obj1.useCheckoutPlanPriceString(premiumItem.productId, stateFromStores);
  let obj2 = premiumItem(13299);
  obj = { discountedPriceString, regularPriceString: null };
  let priceString;
  if (stateFromStores != null) {
    priceString = stateFromStores.priceString;
  }
  obj.regularPriceString = priceString;
  const checkoutPlanDiscountPrices = obj2.useCheckoutPlanDiscountPrices(premiumItem.productId, obj);
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
    let obj4 = first(4218);
    tmp11 = skuId === obj4.getSkuIdForPremiumType(premiumTier);
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
  let tmp4Result = tmp4(4218);
  const tierDisplayNameByPlanId = tmp4Result.getTierDisplayNameByPlanId(premiumItem.basePlanId);
  let obj6 = first(4218);
  const intervalString = obj6.getIntervalString(premiumItem.interval, false);
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
    tmp4Result = tmp4(7234);
    formatRateResult = tmp4Result.formatRate(
      checkoutPlanDiscountPrices.discountedPrice,
      tmp26.interval,
      tmp26.intervalCount,
    );
  }
  if (tmp14) {
    const intl = tmp4(1114).intl;
    obj = { price: tmp4(7234).formatPrice(0, USD, { minimumFractionDigits: 0, maximumFractionDigits: 0 }) };
    let formatToPlainStringResult = intl.formatToPlainString(tmp4(1114).t.hXcaLT, obj);
    const tmp4Result1 = tmp4(7234);
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
  const tmp10 = useNativeCheckoutStore((orderRequired) => ({
    orderRequired: orderRequired.orderRequired,
    orderRecord: orderRequired.orderRecord,
  }));
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
  const tmp4Result2 = premiumItem(7234);
  if (first > 0) {
    const items1 = [tmp.planOptionPriceContainer];
    obj1 = { transform: null };
    obj2 = { translateY: first / 2 };
    const items2 = [obj2];
    obj1.transform = items2;
    items1[1] = obj1;
    let planOptionPriceContainer = items1;
  } else {
    planOptionPriceContainer = tmp.planOptionPriceContainer;
  }
  const obj3 = { style: tmp.planOptionContainer, children: null };
  if (null != discountOffer) {
    let str3 = "text-lg/medium";
  } else {
    str3 = "text-md/medium";
  }
  obj4 = { variant: str3, color: null, children: null };
  let str4 = "interactive-text-default";
  let str5 = "interactive-text-default";
  if (premiumItem.productId === selectedProductId) {
    str5 = "interactive-text-active";
  }
  obj4.color = str5;
  let combined = intervalString;
  if (optionNeedsProductNameLabel) {
    const _HermesInternal = HermesInternal;
    combined = "" + tierDisplayNameByPlanId + " " + intervalString;
  }
  obj4.children = combined;
  const items3 = [closure_35(premiumItem(4556).Text, obj4)];
  const obj5 = { style: planOptionPriceContainer, children: null };
  obj6 = { style: tmp.planOptionDiscountContainer, children: null };
  if (null == customBadgeComponent) {
    if (tmp20) {
      customBadgeComponent = null;
    } else if (userIsEligibleForBogoPromotion) {
      const obj7 = { text: null };
      const intl3 = tmp4(1114).intl;
      obj7.text = intl3.string(tmp4(1114).t.iQTfWx);
      let tmp33Result = closure_35(PlanOptionBadgeComponent, obj7);
    } else {
      tmp33Result = null;
      if (null != tmp22) {
        const obj8 = { text: null };
        const intl2 = tmp4(1114).intl;
        const obj9 = { discount: tmp4(1880).formatPercent(LocaleStore.locale, tmp22 / 100) };
        obj8.text = intl2.format(tmp4(1114).t.IAybsG, obj9);
        tmp33Result = closure_35(PlanOptionBadgeComponent, obj8);
        const tmp4Result3 = tmp4(1880);
      }
    }
  }
  const items4 = [customBadgeComponent];
  const obj10 = { style: tmp.priceText, variant: "text-lg/medium", color: null, children: null };
  let str8 = str4;
  if (premiumItem.productId === selectedProductId) {
    str8 = "interactive-text-active";
  }
  obj10.color = str8;
  obj10.children = formatToPlainStringResult;
  items4[1] = closure_35(premiumItem(4556).Text, obj10);
  obj6.children = items4;
  const items5 = [closure_36(closure_8, obj6), ,];
  if (!tmp14) {
    items5[1] = null;
    const obj11 = {
      style: tmp.discountSubTextContainer,
      onLayout(nativeEvent) {
        const height = nativeEvent.nativeEvent.layout.height;
        if (height !== first) {
          closure_2(height);
        }
      },
      children: null,
    };
    tmp33Result = null;
    if (null != formatRateResult) {
      tmp33Result = null;
      if (null != discountOffer) {
        tmp33Result = null;
        if (null == premiumItem.selectedPremiumType) {
          let str10 = str4;
          if (tmp34) {
            str10 = "text-default";
          }
          const obj12 = { variant: "text-sm/medium", color: str10, children: null };
          const intl6 = tmp4(1114).intl;
          const obj13 = { discountedPrice: formatRateResult, numMonths: null };
          const discount = discountOffer.discount;
          let num2;
          if (discount != null) {
            num2 = discount.intervalCount;
          }
          if (num2 == null) {
            num2 = 1;
          }
          obj13.numMonths = num2;
          obj12.children = intl6.formatToPlainString(tmp4(1114).t["02Gmgm"], obj13);
          tmp33Result = closure_35(tmp4(4556).Text, obj12);
        }
      }
    }
    const items6 = [tmp33Result];
    let tmp33Result1 = null != checkoutPlanDiscountPrices && null != discountOffer;
    if (tmp33Result1) {
      if (tmp34) {
        str4 = "text-default";
      }
      const obj14 = { variant: "text-sm/medium", color: str4, children: null };
      const intl7 = tmp4(1114).intl;
      const obj15 = { regularPrice: formatRateResult1, numMonths: null };
      const discount2 = discountOffer.discount;
      let num3;
      if (discount2 != null) {
        num3 = discount2.intervalCount;
      }
      if (num3 == null) {
        num3 = 1;
      }
      obj15.numMonths = num3;
      obj14.children = intl7.formatToPlainString(tmp4(1114).t["vZk+c/"], obj15);
      tmp33Result1 = closure_35(tmp4(4556).Text, obj14);
    }
    items6[1] = tmp33Result1;
    obj11.children = items6;
    items5[2] = closure_36(closure_8, obj11);
    obj5.children = items5;
    items3[1] = closure_36(closure_8, obj5);
    obj3.children = items3;
    return closure_36(closure_8, obj3);
  } else {
    let str9 = str4;
    if (tmp34) {
      str9 = "text-default";
    }
    const obj16 = { variant: "text-xs/medium", color: str9, children: null };
    if (premiumItem.interval === constants.YEAR) {
      const intl5 = tmp4(1114).intl;
      if (checkoutPlanPriceString == null) {
        checkoutPlanPriceString = closure_18;
      }
      const obj17 = { price: checkoutPlanPriceString };
      let formatToPlainStringResult1 = intl5.formatToPlainString(tmp4(1114).t.ECT4A5, obj17);
    } else {
      const intl4 = tmp4(1114).intl;
      let tmp42 = checkoutPlanPriceString;
      if (checkoutPlanPriceString == null) {
        tmp42 = closure_18;
      }
      const obj18 = { price: tmp42 };
      formatToPlainStringResult1 = intl4.formatToPlainString(tmp4(1114).t.v9QeON, obj18);
    }
    obj16.children = formatToPlainStringResult1;
    closure_35(tmp4(4556).Text, obj16);
  }
  formatRateResult1 = premiumItem(7234).formatRate(
    regularPrice,
    dependencyMap[premiumItem.basePlanId].interval,
    dependencyMap[premiumItem.basePlanId].intervalCount,
  );
}
function PremiumPlanSelectionActionSheetCTA(isPaymentSuccess) {
  ({ onStartPayment: require, shouldUseMobileWebRedirectCheckout } = isPaymentSuccess);
  if (isPaymentSuccess.isPaymentSuccess) {
    let obj = { text: null, size: "md", grow: true, onPress: null };
    const intl = util.intl;
    obj.text = intl.string(util.t.WAI6xu);
    obj.onPress = tmp;
    return __initData13(components_Button_Button.Button, obj);
  } else {
    const tmp5 = shouldUseMobileWebRedirectCheckout
      ? { size: "lg", variant: "primary" }
      : { size: "md", variant: "active" };
    obj = { text: tmp2 };
    const merged = Object.assign(tmp5);
    obj.grow = true;
    obj.onPress = function onPress() {
      return require({ shouldRedirectToMobileWeb: shouldUseMobileWebRedirectCheckout });
    };
    obj.loading = tmp4;
    obj.disabled = tmp3;
    return __initData13(components_Button_Button.Button, obj);
  }
}
function PremiumPlanSelectionActionSheet(premiumItems) {
  ({ applicationId: require, analyticsLocation, premiumType } = premiumItems);
  premiumItems = premiumItems.premiumItems;
  const onPaymentSuccess = premiumItems.onPaymentSuccess;
  const onPaymentDismiss = premiumItems.onPaymentDismiss;
  let flag = premiumItems.showFormTitle;
  ({ analyticsLocations, userIsEligibleForBogoPromotion, initialSelectedItem } = premiumItems);
  if (flag === undefined) {
    flag = true;
  }
  useNativeCheckoutStore = undefined;
  c11 = undefined;
  orderRequired = undefined;
  closure_13 = undefined;
  discountedPriceString = undefined;
  let first;
  onDismiss = undefined;
  let analyticsLocations2;
  closure_18 = undefined;
  let memo;
  let basePurchaseFlowAnalyticsFields;
  let basePlanId;
  c22 = undefined;
  let memo1;
  closure_23 = async function _onPlanSelectionChange(arg0) {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
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
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp3;
            closure_129_0 = closure_0;
            closure_129_1 = undefined;
            const found = premiumItems.find((productId) => productId.productId === closure_1_0);
            closure_129_1 = found;
            if (null != found) {
              if (found !== first) {
                let obj1 = closure_0(tmp2[50]);
                const subscriptionItemsForProduct = obj1.getSubscriptionItemsForProduct(closure_0);
                if (orderRequired) {
                  c3 = 1;
                  c4 = 1;
                  obj1 = {
                    value: LocaleStore(
                      subscriptionItemsForProduct.map((planId) => {
                        const obj = { sku_id: null, subscription_plan_id: null, quantity: null, purchase_type: null };
                        const obj2 = closure_1_0(4218);
                        obj.sku_id = obj2.castPremiumSubscriptionAsSkuId(
                          closure_1_1(4218).getSkuIdForPlan(planId.planId),
                        );
                        ({ planId: obj.subscription_plan_id, quantity: obj.quantity } = planId);
                        obj.purchase_type = constants.SUBSCRIPTION;
                        return obj;
                      }),
                    ),
                    done: false,
                  };
                  return obj1;
                }
              }
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else if (null == value) {
          c4 = 3;
          return { value: "HermesInternal", done: null };
        }
        closure_130_16(closure_129_1);
      } catch (tmp18) {
        c4 = tmp;
        throw tmp18;
      }
    }
  };
  let tmp = closure_38();
  asyncGeneratorStep = tmp;
  const tmp2 = first((isPaymentSuccess) => isPaymentSuccess.isPaymentSuccess);
  _slicedToArray = tmp2;
  const tmp5 = premiumItems;
  let obj = require("initialize");
  const items = [orderRequired];
  let stateFromStores = obj.useStateFromStores(items, () => orderRequired.isBusy());
  let obj1 = require("useIsScreenReaderEnabled");
  const isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  let obj2 = isScreenReaderEnabled;
  const ref = isScreenReaderEnabled.useRef(null);
  const items1 = [tmp2, isScreenReaderEnabled];
  const effect = isScreenReaderEnabled.useEffect(() => {
    let tmp = closure_6;
    if (closure_6) {
      tmp = isScreenReaderEnabled;
    }
    if (tmp) {
      const obj = { ref, delay: 100 };
      const result = obj.setAccessibilityFocus(obj);
    }
  }, items1);
  let obj3 = require("handlePremiumPurchase");
  const handlePremiumPurchase = obj3.useHandlePremiumPurchase();
  let obj4 = require("BlockedPaymentsCountryExperiment");
  const isPaymentsBlocked = obj4.useIsPaymentsBlocked();
  const tmp14 = premiumType(premiumItems[31])();
  const tmp15 = useNativeCheckoutStore((orderRecord) => orderRecord.orderRecord);
  useNativeCheckoutStore = tmp15;
  let tmp3 = first(
    (mobileWebRedirectCheckoutStatus) => mobileWebRedirectCheckoutStatus.mobileWebRedirectCheckoutStatus,
  );
  const tmp6 = orderRequired;
  ({
    patchOrderLineItems: c11,
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
  let tmp4Result = require("usePremiumTrialOffer");
  const premiumTrialOffer = tmp4Result.usePremiumTrialOffer();
  tmp4Result = require("usePremiumDiscountOffer");
  const premiumDiscountOffer = tmp4Result.usePremiumDiscountOffer();
  let tmp19 = null != premiumTrialOffer && null != premiumType;
  if (tmp19) {
    const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
    let skuId;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
    let tmp13Result = premiumType(tmp5[17]);
    tmp19 = skuId === tmp13Result.getSkuIdForPremiumType(premiumType);
  }
  let tmp21 = tmp19;
  if (tmp21) {
    let tmp22 = !orderRequired;
    if (orderRequired) {
      let subscriptionTrialId;
      if (tmp15 != null) {
        const subscriptionFacet = tmp15.subscriptionFacet;
        if (subscriptionFacet != null) {
          const subscriptionPreview = subscriptionFacet.subscriptionPreview;
          if (subscriptionPreview != null) {
            subscriptionTrialId = subscriptionPreview.subscriptionTrialId;
          }
        }
      }
      tmp22 = premiumTrialOffer.trialId === subscriptionTrialId;
    }
    tmp21 = tmp22;
  }
  closure_13 = tmp21;
  const tmp16 = useNativeCheckoutStore((patchOrderLineItems) => ({
    patchOrderLineItems: patchOrderLineItems.patchOrderLineItems,
    isPatchOrderLoading: patchOrderLineItems.isPatchOrderLoading,
    orderRequired: patchOrderLineItems.orderRequired,
  }));
  const discountedPremiumProductInfo = require("useDiscountedPremiumProductInfo").useDiscountedPremiumProductInfo(
    premiumDiscountOffer,
    premiumItems,
  );
  ({ discountedPlan, discountedProduct, discountedPriceString } = discountedPremiumProductInfo);
  const tmp4Result1 = require("useDiscountedPremiumProductInfo");
  let productId;
  if (discountedPlan != null) {
    productId = discountedPlan.productId;
  }
  obj = { discountedPriceString, regularPriceString: null };
  let priceString;
  if (discountedProduct != null) {
    priceString = discountedProduct.priceString;
  }
  obj.regularPriceString = priceString;
  const checkoutPlanDiscountPrices = require("useCheckoutPlanPriceString").useCheckoutPlanDiscountPrices(
    productId,
    obj,
  );
  const tmp28 = _slicedToArray(obj2.useState(initialSelectedItem), 2);
  first = tmp28[0];
  onDismiss = tmp28[1];
  const tmp4Result2 = require("useCheckoutPlanPriceString");
  const items2 = [tmp6];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => {
    let product = null;
    if (null != first) {
      product = IAPStore.getProduct(tmp.productId);
    }
    return product;
  });
  const tmp4Result3 = require("initialize");
  tmp13Result = premiumType(tmp5[36]);
  analyticsLocations2 = tmp13Result(
    analyticsLocations,
    premiumType(tmp5[37]).PREMIUM_PAYMENT_ACTION_SHEET,
  ).analyticsLocations;
  const tmp32 = premiumType(tmp5[38])(() => require("PremiumAnalyticsUtils").getNewAnalyticsLoadId());
  closure_18 = tmp32;
  const items3 = [premiumType];
  memo = obj2.useMemo(() => {
    const obj = PremiumUtils;
    return obj.castPremiumSubscriptionAsSkuId(PremiumUtilsDefault.getSkuIdForPremiumType(premiumType));
  }, items3);
  const tmp4Result4 = require("useBottomSheetRef");
  obj = { analyticsLoadId: tmp32, analyticsLocation: null, analyticsLocations: null };
  obj1 = { object: constants2.BUTTON_CTA, object_type: constants3.BUY };
  let merged = Object.assign(analyticsLocation);
  obj.analyticsLocation = obj1;
  obj.analyticsLocations = analyticsLocations2;
  basePurchaseFlowAnalyticsFields = require("PremiumAnalyticsUtils").getBasePurchaseFlowAnalyticsFields(obj);
  basePlanId = null;
  if (null != first) {
    basePlanId = first.basePlanId;
  }
  function onClose() {
    closure_16();
    premiumType(premiumItems[43]).hideActionSheet();
  }
  const tmp4Result5 = require("PremiumAnalyticsUtils");
  let result = require("MobileWebRedirectCheckoutUtils").isMobileWebRedirectCheckoutEnabled();
  c22 = result;
  premiumType(tmp5[41])(() => {
    const obj = {};
    const merged = Object.assign(basePurchaseFlowAnalyticsFields);
    obj.application_id = application_id;
    obj.subscription_plan_id = basePlanId;
    obj.sku_id = memo;
    let customCheckoutFlowForAnalytics;
    if (c22) {
      customCheckoutFlowForAnalytics = MobileWebRedirectCheckoutUtils.getCustomCheckoutFlowForAnalytics();
      const tmpResult = MobileWebRedirectCheckoutUtils;
    }
    obj.custom_checkout_flow = customCheckoutFlowForAnalytics;
    const result = obj.trackPaymentFlowStartedAnalyticsAndCTP(obj);
  });
  const items4 = [
    memo,
    basePurchaseFlowAnalyticsFields,
    tmp32,
    analyticsLocations2,
    handlePremiumPurchase,
    result,
    onPaymentDismiss,
    onPaymentSuccess,
    tmp15,
    first,
  ];
  const items5 = [tmp21, result];
  const callback = obj2.useCallback(
    asyncGeneratorStep(async () => {
      if (c6 === 2) {
        c6 = 3;
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              premiumType = tmp7;
              closure_129_0 = undefined;
              let obj1 = closure_0;
              if (closure_0 === undefined) {
                obj1 = { shouldRedirectToMobileWeb: false };
              }
              closure_129_0 = obj1.shouldRedirectToMobileWeb;
              basePlanId = undefined;
              closure_129_2 = undefined;
              closure_129_3 = undefined;
              let paymentFlowStepAnalyticsFields;
              c5 = 1;
              c6 = 1;
              return { value: "PX_16", done: true };
            }
          } else {
            if (1 === tmp7) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                let obj2 = { value, done: true };
                return obj2;
              } else {
                premiumType(tmp3[20])(null != closure_130_15, "cannot start payment without a selectedItem");
                basePlanId = closure_130_15.basePlanId;
                let tmp33 = closure_130_22;
                if (closure_130_22) {
                  tmp33 = closure_129_0;
                }
                closure_129_2 = tmp33;
                const PaymentFlowStep = closure_0(tmp3[39]).PaymentFlowStep;
                if (closure_129_2) {
                  let EXTERNAL_PAYMENT = PaymentFlowStep.MOBILE_WEB_REDIRECT_CHECKOUT;
                } else {
                  EXTERNAL_PAYMENT = PaymentFlowStep.EXTERNAL_PAYMENT;
                }
                closure_129_3 = EXTERNAL_PAYMENT;
                let obj4 = closure_0(tmp3[39]);
                let obj3 = {
                  from_step: closure_0(tmp3[39]).PaymentFlowStep.PLAN_SELECT,
                  to_step: closure_129_3,
                  subscription_plan_gateway_plan_id: closure_130_15.productId,
                  sku_id: closure_130_19,
                };
                paymentFlowStepAnalyticsFields = obj4.getPaymentFlowStepAnalyticsFields(closure_130_20, obj3);
                if (!closure_129_2) {
                  let obj6 = premiumType(tmp3[44]);
                  obj6.track(constants.PAYMENT_FLOW_STEP, paymentFlowStepAnalyticsFields);
                }
                obj4 = {
                  productId: closure_130_15.productId,
                  onPaymentSuccess: closure_130_3,
                  onPaymentDismiss: closure_130_4,
                };
                closure_1_13(obj4);
                if (closure_129_2) {
                  const obj11 = closure_0(tmp3[45]);
                  const obj5 = { planId: basePlanId, isGift: false, loadId: closure_130_18 };
                  const result = obj11.goToStandalonePremiumCheckoutFromMobileApp(
                    "premium_plan_selection_action_sheet",
                    obj5,
                    () => {
                      if (obj.isMetaQuest()) {
                        closure_1_16();
                        closure_1_1(4527).hideActionSheet();
                        const obj3 = closure_1_1(4527);
                      } else {
                        discountedPriceString("in_mobile_web");
                        premiumType(premiumItems[44]).track(constants.PAYMENT_FLOW_STEP, closure_1_4);
                        const obj2 = premiumType(premiumItems[44]);
                      }
                      obj = require("MetaQuestUtils");
                    },
                    () => {
                      closure_1_1(4905);
                      const obj = { title: null, body: null, hideActionSheet: true };
                      const intl = closure_1_0(1114).intl;
                      obj.title = intl.string(closure_1_0(1114).t.NrBVjw);
                      const intl2 = closure_1_0(1114).intl;
                      obj.body = intl2.string(closure_1_0(1114).t["gD+grx"]);
                      obj.show(obj);
                    },
                  );
                } else {
                  c4 = 1;
                  obj6 = {
                    productId: closure_130_15.productId,
                    analyticsLocation: closure_130_20.location,
                    analyticsLoadId: closure_130_18,
                    analyticsLocations: closure_130_17,
                    orderId: null,
                  };
                  let id;
                  if (closure_130_10 != null) {
                    id = closure_130_10.id;
                  }
                  obj6.orderId = id;
                  c5 = 3;
                  c6 = 1;
                  const obj7 = { value: closure_130_9(obj6), done: false };
                  return obj7;
                }
              }
            } else {
              if (2 === tmp7) {
                c4 = 0;
                closure_129_5 = closure_3;
                if (closure_129_5 instanceof premiumType(tmp3[48])) {
                  obj1 = closure_0(tmp3[49]);
                  const subscriptions = obj1.fetchSubscriptions();
                  obj2 = premiumType(tmp3[47]);
                  const obj8 = { title: null, body: null, hideActionSheet: true };
                  let intl = closure_0(tmp3[19]).intl;
                  obj8.title = intl.string(closure_0(tmp3[19]).t["U+H+kd"]);
                  let intl2 = closure_0(tmp3[19]).intl;
                  obj8.body = intl2.string(closure_0(tmp3[19]).t.F9ktNa);
                  obj2.show(obj8);
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
              obj = { value, done: true };
              return obj;
            }
            c6 = 3;
          }
        } catch (tmp81) {
          closure_3 = tmp81;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp81;
          } else {
            c5 = tmp;
          }
        }
      }
    }),
    items4,
  );
  memo1 = obj2.useMemo(() => {
    if (c22) {
      const intl3 = util.intl;
      let stringResult = intl3.string(util.t.rylrdY);
    } else if (closure_13) {
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
  }, items5);
  const items6 = [tmp2, first, tmp21, discountedPriceString, memo1, tmp.legalDisclaimerText];
  const memo2 = obj2.useMemo(() => {
    if (closure_6) {
      return null;
    } else {
      let interval;
      if (first != null) {
        interval = first.interval;
      }
      if (null == interval) {
        return null;
      } else if (closure_13) {
        let obj = {
          style: userIsEligibleForBogoPromotion.legalDisclaimerText,
          variant: "text-xxs/medium",
          children: null,
        };
        const intl3 = util.intl;
        const t = util.t;
        obj = { paidURL: constants4.PAID_TERMS, interval: null, cancelURL: null };
        const isAndroidResult = PlatformUtils.isAndroid();
        const tmp42 = PlatformUtils.isAndroid() ? t.tINI9V : t.ZWXtAj;
        obj.interval = PremiumUtilsDefault.getIntervalStringAsNoun(interval);
        obj.cancelURL = HelpdeskUtilsDefault.getArticleURL(constants5.PREMIUM_DETAILS_CANCEL_SUB);
        obj.children = intl3.format(tmp42, obj);
        return __initData13(Text_Text.Text, obj);
      } else if (null != discountedPriceString) {
        const obj1 = {
          style: userIsEligibleForBogoPromotion.legalDisclaimerText,
          variant: "text-xxs/medium",
          children: null,
        };
        const intl2 = util.intl;
        let obj2 = {
          buttonText: memo1,
          interval: PremiumUtilsDefault.formatInterval(interval),
          cancelSubscriptionArticle: null,
          paidServiceTermsArticle: null,
        };
        obj2.cancelSubscriptionArticle = HelpdeskUtilsDefault.getArticleURL(constants5.PREMIUM_DETAILS_CANCEL_SUB);
        obj2.paidServiceTermsArticle = HelpdeskUtilsDefault.getArticleURL(constants5.PAID_TERMS);
        obj1.children = intl2.format(util.t["3uC7vj"], obj2);
        return __initData13(Text_Text.Text, obj1);
      } else {
        const t2 = util.t;
        const isAndroidResult1 = PlatformUtils.isAndroid();
        obj = { style: userIsEligibleForBogoPromotion.legalDisclaimerText, variant: "text-xxs/medium", children: null };
        const intl = util.intl;
        const obj3 = { paidURL: constants4.PAID_TERMS, interval: null, ctaText: null };
        obj2 = PremiumUtilsDefault;
        obj3.interval = obj2.getIntervalStringAsNoun(interval);
        obj3.ctaText = memo1;
        obj.children = intl.format(PlatformUtils.isAndroid() ? t2.COObWR : t2["7wpqfj"], obj3);
        return __initData13(Text_Text.Text, obj);
      }
    }
  }, items6);
  obj2 = {
    ref: tmp4Result4.useBottomSheetRef().bottomSheetRef,
    handleDisabled: true,
    onDismiss,
    startExpanded: true,
    children: null,
  };
  if (isPaymentsBlocked) {
    obj3 = { style: tmp.blockedPaymentContainer, children: null };
    const items7 = [closure_35(premiumType(tmp5[61]), {})];
    obj4 = { variant: "floating", onPress: onClose };
    items7[1] = closure_35(require("ActionSheetHeaderBar").ActionSheetHeaderBar, obj4);
    obj3.children = items7;
    let tmp43Result = closure_36(ref, obj3);
  } else {
    let obj5 = {
      premiumType,
      isPaymentSuccess: tmp2,
      selectedPremiumType: null,
      trialOffer: null,
      discountOffer: null,
    };
    let premiumTier;
    if (first != null) {
      premiumTier = first.premiumTier;
    }
    obj5.selectedPremiumType = premiumTier;
    obj5.trialOffer = premiumTrialOffer;
    let tmp47 = null;
    if (null != discountedPriceString) {
      tmp47 = premiumDiscountOffer;
    }
    obj5.discountOffer = tmp47;
    const items8 = [closure_35(Header, obj5), ,];
    let obj6 = { style: tmp.body, children: null };
    if ("in_mobile_web" === tmp3) {
      let obj7 = { size: "large", style: tmp.loadingIndicator };
      let tmp43Result1 = closure_35(handlePremiumPurchase, obj7);
    } else if (tmp2) {
      let obj8 = { style: tmp.contentActivated, children: null };
      const obj9 = { ref, accessible: true, accessibilityRole: "image", accessibilityLabel: null, children: null };
      const intl5 = require("util").intl;
      obj9.accessibilityLabel = intl5.string(require("util").t["Q+BB2w"]);
      let premiumTier1;
      if (first != null) {
        premiumTier1 = first.premiumTier;
      }
      if (memo.TIER_0 === premiumTier1) {
        if (tmp4Result7.isThemeDark(tmp14)) {
          let tmp13Result2 = premiumType(tmp5[52]);
        } else {
          tmp13Result2 = premiumType(tmp5[53]);
        }
        tmp4Result7 = require("shared");
      } else {
        if (tmp69.TIER_1 === premiumTier1) {
          if (tmp4Result8.isThemeDark(tmp14)) {
            let tmp13Result3 = premiumType(tmp5[54]);
          } else {
            tmp13Result3 = premiumType(tmp5[55]);
          }
          let tmp70 = tmp13Result3;
          tmp4Result8 = require("shared");
        } else if (tmp69.TIER_2 === premiumTier1) {
          if (tmp4Result9.isThemeDark(tmp14)) {
            let tmp13Result4 = premiumType(tmp5[56]);
          } else {
            tmp13Result4 = premiumType(tmp5[57]);
          }
          tmp70 = tmp13Result4;
          tmp4Result9 = require("shared");
        }
        let obj10 = { source: tmp70 };
        obj9.children = closure_35(tmp13Result1, obj10);
        const items9 = [closure_35(tmp48, obj9)];
        let obj11 = { style: tmp.contentActivatedText, variant: "text-md/semibold", children: null };
        let premiumTier2;
        if (first != null) {
          premiumTier2 = first.premiumTier;
        }
        if (tmp69.TIER_0 === premiumTier2) {
          const intl7 = require("util").intl;
          let stringResult = intl7.string(require("util").t["6WWrVM"]);
          obj11.children = stringResult;
          obj11 = closure_35(require("Text/Text").Text, obj11);
          items9[1] = obj11;
          obj8.children = items9;
          tmp43Result = closure_36(tmp48, obj8);
        } else if (tmp69.TIER_1 !== premiumTier2) {
          if (tmp69.TIER_2 === premiumTier2) {
            const intl8 = require("util").intl;
            stringResult = intl8.string(require("util").t.I7xNzI);
          }
        }
        const intl6 = require("util").intl;
        stringResult = intl6.string(require("util").t.LAAgsy);
      }
      tmp13Result1 = premiumType(tmp5[63]);
    } else {
      let obj12 = { convertToMajorUnits: require("PlatformUtils").isAndroid() };
      if (flag) {
        flag = !tmp21;
      }
      const obj13 = { style: tmp.contentSelectPlan, children: null };
      if (tmp21) {
        let obj14 = { variant: "text-md/normal", color: "text-strong", style: tmp.trialDisclaimer, children: null };
        let intl2 = require("util").intl;
        obj14.children = intl2.string(require("util").t.u95Dt4);
        let tmp42Result = closure_35(require("Text/Text").Text, obj14);
      } else {
        tmp42Result = null;
        if (null != checkoutPlanDiscountPrices) {
          tmp42Result = null;
          if (null != premiumType) {
            const obj15 = { children: null };
            const obj16 = {
              variant: "text-md/normal",
              color: "text-strong",
              style: tmp.discountDisclaimer,
              children: null,
            };
            let intl = require("util").intl;
            obj16.children = intl.format(require("util").t.yBn7uz, checkoutPlanDiscountPrices);
            const items10 = [closure_35(require("Text/Text").Text, obj16)];
            const obj17 = { style: null };
            const items11 = [,];
            ({ divider: arr11[0], offerDividerMargin: arr11[1] } = tmp);
            obj17.style = items11;
            items10[1] = closure_35(tmp48, obj17);
            obj15.children = items10;
            tmp42Result = closure_36(tmp48, obj15);
          }
        }
      }
      const items12 = [tmp42Result];
      let stringResult1;
      const tmp4Result10 = require("PlatformUtils");
      if (flag) {
        let intl3 = require("util").intl;
        stringResult1 = intl3.string(require("util").t.u95Dt4);
      }
      const obj18 = {
        title: stringResult1,
        titleStyleType: TitleStyleType.NO_BORDER_OR_MARGIN,
        titleViewStyle: tmp.formTitle,
        sectionBodyStyle: null,
        inset: true,
        children: null,
      };
      const items13 = [tmp.formSectionBody];
      let formSectionBodyWithNoTitle = !flag;
      if (!flag) {
        formSectionBodyWithNoTitle = tmp.formSectionBodyWithNoTitle;
      }
      items13[1] = formSectionBodyWithNoTitle;
      obj18.sectionBodyStyle = items13;
      let tmp42Result1 = null != stateFromStores1;
      if (tmp42Result1) {
        tmp42Result1 = "HR" === stateFromStores1.countryCode;
      }
      if (tmp42Result1) {
        tmp42Result1 = stateFromStores1.currencyCode.toLowerCase() === constants6.EUR;
      }
      if (tmp42Result1) {
        const obj19 = { message: null };
        const intl4 = require("util").intl;
        const obj20 = { kunaPriceWithCurrency: null };
        const tmp13Result6 = premiumType(tmp5[65]);
        obj20.kunaPriceWithCurrency = require("PriceUtils").formatPrice(
          stateFromStores1.price * closure_31,
          constants6.HRK,
          obj12,
        );
        obj19.message = intl4.formatToPlainString(require("util").t["9hnZoK"], obj20);
        tmp42Result1 = closure_35(tmp13Result6, obj19);
        const tmp4Result11 = require("PriceUtils");
      }
      const items14 = [tmp42Result1];
      let productId1;
      if (first != null) {
        productId1 = first.productId;
      }
      const obj21 = {
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
      const set = new Set(premiumItems.map((premiumTier) => premiumTier.premiumTier));
      closure_129_7 = set.size > 1;
      obj21.options = premiumItems.map((premiumItem) => {
        let obj = {
          premiumItem,
          selectedProductId,
          optionNeedsProductNameLabel: isScreenReaderEnabled,
          trialOffer: premiumType,
          discountOffer: premiumItems,
          discountedPriceString: null,
          userIsEligibleForBogoPromotion: null,
          selectedPremiumType: null,
        };
        let tmp3 = null;
        if (premiumItem.productId === onPaymentSuccess) {
          tmp3 = onPaymentDismiss;
        }
        obj = {
          name: __initData13(PlanOption, obj),
          value: premiumItem.productId,
          discountedPriceString: tmp3,
          userIsEligibleForBogoPromotion,
          selectedPremiumType,
        };
        return obj;
      });
      obj21.onChange = function onChange(value) {
        return (function onPlanSelectionChange(value) {
          const self = this;
          const apply = closure_1_23.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })(value.value);
      };
      obj21.style = tmp.planOptionRowContainer;
      let tmp66 = stateFromStores;
      if (!stateFromStores) {
        tmp66 = isPatchOrderLoading;
      }
      obj21.disabled = tmp66;
      items14[1] = closure_35(require("native").RadioGroup, obj21);
      obj18.children = items14;
      items12[1] = closure_36(premiumType(tmp5[64]), obj18);
      obj13.children = items12;
      const items15 = [closure_36(tmp48, obj13)];
      const obj22 = {
        isPaymentSuccess: tmp2,
        onClose,
        ctaText: memo1,
        onStartPayment: callback,
        shouldUseMobileWebRedirectCheckout: result,
        disabled: null,
        loading: null,
      };
      let tmp79 = stateFromStores;
      if (!stateFromStores) {
        tmp79 = isPatchOrderLoading;
      }
      obj22.disabled = tmp79;
      if (!stateFromStores) {
        stateFromStores = isPatchOrderLoading;
      }
      const obj23 = { children: null };
      obj22.loading = stateFromStores;
      items15[1] = closure_35(PremiumPlanSelectionActionSheetCTA, obj22);
      obj23.children = items15;
      tmp43Result1 = closure_36(closure_37, obj23);
      const tmp13Result5 = premiumType(tmp5[64]);
    }
    const items16 = [tmp43Result1];
    let tmp82 = !result;
    if (!result) {
      tmp82 = memo2;
    }
    const obj24 = { children: null };
    items16[1] = tmp82;
    obj6.children = items16;
    items8[1] = closure_36(ref, obj6);
    const obj25 = { variant: "floating", onPress: onClose };
    items8[2] = closure_35(require("ActionSheetHeaderBar").ActionSheetHeaderBar, obj25);
    obj24.children = items8;
    tmp43Result = closure_36(closure_37, obj24);
  }
  obj2.children = tmp43Result;
  return closure_35(require("Sheet/BottomSheet").BottomSheet, obj2);
}
let closure_3 = ["predicate", "initialSelectedCriteria", "sortFn"];
get_ActivityIndicator = fn(17);
({ View: closure_8, ActivityIndicator: closure_9 } = get_ActivityIndicator);
let useNativeCheckoutStore = fn(7424).useNativeCheckoutStore;
const PremiumPlanPurchasedStore = fn(7421);
({
  setInitiatedPurchaseFromNewFlow: map1,
  setMobileWebRedirectCheckoutStatus: closure_14,
  usePremiumPlanPurchasedStore: closure_15,
  reset: closure_16,
} = PremiumPlanPurchasedStore);
const PremiumConstants = fn(1373);
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
let Constants = fn(1074);
({
  AnalyticEvents: closure_25,
  AnalyticsObjects: closure_26,
  AnalyticsObjectTypes: closure_27,
  MarketingURLs: closure_28,
  HelpdeskArticles: closure_29,
} = Constants);
const TitleStyleType = fn(1182).TitleStyleType;
const PaymentConstants = fn(4542);
({ EUR_TO_HRK_CONVERSION_RATE: items, ItemPurchaseType: closure_32 } = PaymentConstants);
Constants = fn(1085);
({ CurrencyCodes: closure_33, PaymentGateways: closure_34 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_35, jsxs: closure_36, Fragment: closure_37 } = jsxProd);
fn(4560);
let createStyles = {
  body: { padding: 16 },
  headerText: { paddingTop: 30, paddingHorizontal: 20 },
  contentSelectPlan: { marginBottom: 16 },
  contentActivated: { alignItems: "center", paddingTop: 40, paddingBottom: 56 },
  contentActivatedText: { width: 328, marginTop: 16, textAlign: "center" },
  formTitle: { paddingTop: 0, paddingLeft: 0 },
  formSectionBody: { backgroundColor: "none" },
  formSectionBodyWithNoTitle: { marginTop: -24 },
  planOptionRowContainer: { paddingHorizontal: 10 },
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
createStyles = {
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
createStyles.planOptionDiscount = createStyles;
createStyles.planOptionDiscountWhite = { backgroundColor: nativeDefault.colors.WHITE };
createStyles.planOptionDiscountText = { textTransform: "uppercase" };
createStyles.blockedPaymentContainer = { marginVertical: 40 };
createStyles.legalDisclaimerText = { marginTop: 16 };
let size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles.divider = size;
createStyles.offerDividerMargin = { marginBottom: 8 };
createStyles.trialDisclaimer = { marginBottom: 8 };
createStyles.discountDisclaimer = { marginBottom: 20 };
createStyles.loadingIndicator = { marginVertical: 30 };
createStyles.discountSubTextContainer = { alignItems: "flex-end" };
createStyles.priceText = { flexShrink: 1 };
let closure_38 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/PremiumPlanSelectionActionSheet.tsx");

export default function PremiumPlanSelectionActionSheetWithOrderCTX(predicate) {
  const NitroACOMSubscriptionExperiment = ACOMExperiments.NitroACOMSubscriptionExperiment;
  let obj = PlatformUtils;
  if (obj.isIOS()) {
    if (
      NitroACOMSubscriptionExperiment.useConfig({ location: "PremiumPlanSelectionActionSheetWithOrderCTX" }).enabled
    ) {
      let APPLE = __initData12.APPLE_ADVANCED_COMMERCE;
    } else {
      APPLE = __initData12.APPLE;
    }
  } else {
    const GOOGLE = __initData12.GOOGLE;
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
    let tmpResult = usePremiumTrialOffer;
    const premiumTrialOffer = tmpResult.usePremiumTrialOffer();
    const premiumType = predicate.premiumType;
    let tmp16 = null != premiumTrialOffer && null != premiumType;
    if (tmp16) {
      const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
      let skuId;
      if (subscriptionTrial != null) {
        skuId = subscriptionTrial.skuId;
      }
      let obj2 = PremiumUtilsDefault;
      tmp16 = skuId === obj2.getSkuIdForPremiumType(premiumType);
    }
    let tmp19;
    if (tmp16) {
      obj = { subscription_preview: null };
      obj = { subscription_trial_id: premiumTrialOffer.trialId };
      obj.subscription_preview = obj;
      tmp19 = obj;
    }
    tmpResult = useIsEligibleForBogoOffer;
    const isEligibleForBogoOffer = tmpResult.useIsEligibleForBogoOffer();
    if (null == fn3) {
      let premiumBundlesWithPredicate = PremiumBundledPlansUtils.getPremiumBundlesWithPredicate(fn);
      const tmpResult1 = PremiumBundledPlansUtils;
    } else {
      const premiumBundlesWithPredicate1 = PremiumBundledPlansUtils.getPremiumBundlesWithPredicate(fn);
      premiumBundlesWithPredicate = premiumBundlesWithPredicate1.sort(fn3);
      const tmpResult2 = PremiumBundledPlansUtils;
    }
    if (isEligibleForBogoOffer) {
      fn2 = (interval) => interval.interval === constants.MONTH;
    }
    const found = premiumBundlesWithPredicate.find(fn2);
    if (null != found) {
      const subscriptionItemsForProduct = PremiumBundledPlansUtils.getSubscriptionItemsForProduct(found.productId);
      let mapped = subscriptionItemsForProduct.map((planId) => {
        const obj = { subscriptionPlanId: planId.planId, skuId: null, quantity: null };
        const obj2 = TIER_2(4218);
        obj.skuId = obj2.castPremiumSubscriptionAsSkuId(PremiumUtilsDefault.getSkuIdForPlan(planId.planId));
        obj.quantity = planId.quantity;
        return obj;
      });
      const tmpResult3 = PremiumBundledPlansUtils;
    } else {
      const obj1 = {
        subscriptionPlanId: __initData.PREMIUM_YEAR_TIER_2,
        skuId: PremiumUtils.castPremiumSubscriptionAsSkuId(TIER_22.TIER_2),
        quantity: 1,
      };
      mapped = [obj1];
      const tmpResult4 = PremiumUtils;
    }
    obj2 = {
      paymentGateway: GOOGLE,
      orderRequired: GOOGLE === __initData12.APPLE_ADVANCED_COMMERCE,
      skuIds: [],
      defaultPlans: mapped,
      isGift: false,
      activeSubscription: null,
      initialSubscriptionFacet: tmp19,
      onOrderRetryCancellation() {
        return ActionSheetActionCreatorsDefault.hideActionSheet(closure_1_24);
      },
      children: null,
    };
    const obj3 = {};
    const merged = Object.assign(tmp13);
    obj3.premiumItems = premiumBundlesWithPredicate;
    obj3.userIsEligibleForBogoPromotion = isEligibleForBogoOffer;
    obj3.initialSelectedItem = found;
    obj2.children = __initData13(PremiumPlanSelectionActionSheet, obj3);
    return __initData13(NativeCheckoutStoreProviderDefault, obj2);
  }
}
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
