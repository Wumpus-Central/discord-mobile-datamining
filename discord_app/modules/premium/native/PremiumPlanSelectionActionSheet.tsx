// discord_app/modules/premium/native/PremiumPlanSelectionActionSheet.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import getPremiumPlanItemDefault from "../../../utils/PremiumUtils.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import Button from "../../../design/components/Button/native/Button.native.tsx";
import PremiumPlanActionSheetHeaderDefault from "PremiumPlanActionSheetHeader.tsx";
import NativeCheckoutStoreProviderDefault from "../../checkout/native/stores/NativeCheckoutStoreProvider.tsx";
import closure_4 from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import closure_5 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_6 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_7 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { useNativeCheckoutStore } from "../../checkout/native/NativeCheckoutStore.tsx";
import closure_11 from "../../user_settings/LocaleStore.tsx";
import closure_12 from "../../../stores/native/IAPStore.android.tsx";
import usePremiumPlanPurchasedStore from "PremiumPlanPurchasedStore.tsx";
import GuildFeatures from "../PremiumConstants.tsx";
import ME from "../../../Constants.tsx";
import { TitleStyleType } from "../../../design/void/Form/native/FormConstants.tsx";
import CustomCheckoutFlow from "../../payments/PaymentConstants.tsx";
import sum from "../../../../discord_common/js/shared/Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function Header(arg0) {
  ({ premiumType, isPaymentSuccess, trialOffer } = arg0);
  ({ selectedPremiumType, discountOffer } = arg0);
  const tmp = callback4();
  ({ orderRequired, orderRecord } = useNativeCheckoutStore((orderRequired) => ({
    orderRequired: orderRequired.orderRequired,
    orderRecord: orderRequired.orderRecord,
  })));
  if (null == premiumType) {
    if (!isPaymentSuccess) {
      const obj = {
        style: null,
        variant: "text-md/semibold",
        color: "text-default",
        accessibilityRole: "header",
        children: null,
      };
      obj[0] = tmp.headerText;
      const intl = getSystemLocale.intl;
      obj[4] = intl.string(getSystemLocale.t.vLz3Zs);
      return callback3(Text.Text, obj);
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
    tmp9 = skuId === tmp6(4218).getSkuIdForPremiumType(premiumType);
    const tmp6Result = tmp6(4218);
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
  return callback3(PremiumPlanActionSheetHeaderDefault, { premiumType, trialOffer, discountOffer });
}
function PlanOptionBadgeComponent(backgroundColorType) {
  let str = backgroundColorType.backgroundColorType;
  if (str === undefined) {
    str = "green";
  }
  const tmp = callback4();
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
  obj[2] = str2;
  obj[3] = backgroundColorType.text;
  obj[1] = closure_35(Text.Text, obj);
  return closure_35(closure_8, obj);
}
function PlanOption(premiumItem) {
  premiumItem = premiumItem.premiumItem;
  ({ customBadgeComponent, trialOffer, discountOffer, userIsEligibleForBogoPromotion } = premiumItem);
  ({ selectedProductId, optionNeedsProductNameLabel, discountedPriceString } = premiumItem);
  if (userIsEligibleForBogoPromotion === undefined) {
    userIsEligibleForBogoPromotion = false;
  }
  let first;
  dependencyMap = undefined;
  const tmp = callback4();
  const tmp2 = callback2(React.useState(0), 2);
  first = tmp2[0];
  dependencyMap = tmp2[1];
  let obj = premiumItem(504);
  const items = [closure_12];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_12.getProduct(premiumItem.productId));
  obj1 = premiumItem(13299);
  let checkoutPlanPriceString = obj1.useCheckoutPlanPriceString(premiumItem.productId, stateFromStores);
  let obj2 = premiumItem(13299);
  obj = { discountedPriceString, regularPriceString: null };
  let priceString;
  if (stateFromStores != null) {
    priceString = stateFromStores.priceString;
  }
  obj[1] = priceString;
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
    tmp22 = table[premiumItem.basePlanId];
  }
  if (userIsEligibleForBogoPromotion) {
    userIsEligibleForBogoPromotion = premiumItem.basePlanId === tmp19.PREMIUM_MONTH_TIER_2;
  }
  if (null == stateFromStores) {
    let USD = constants4.USD;
  } else {
    if (str.toLowerCase() in constants4) {
      USD = stateFromStores.currencyCode.toLowerCase();
      const str2 = stateFromStores.currencyCode;
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
    obj = { price: null };
    obj[0] = tmp4(7234).formatPrice(0, USD, { minimumFractionDigits: 0, maximumFractionDigits: 0 });
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
  tmp19 = closure_21;
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
    obj2 = { translateY: null };
    obj2[0] = first / 2;
    const items2 = [obj2];
    obj1[0] = items2;
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
  obj4[1] = str5;
  let combined = intervalString;
  if (optionNeedsProductNameLabel) {
    const _HermesInternal = HermesInternal;
    combined = "" + tierDisplayNameByPlanId + " " + intervalString;
  }
  obj4[2] = combined;
  const items3 = [closure_35(premiumItem(4556).Text, obj4)];
  const obj5 = { style: planOptionPriceContainer, children: null };
  obj6 = { style: tmp.planOptionDiscountContainer, children: null };
  if (null == customBadgeComponent) {
    if (tmp20) {
      customBadgeComponent = null;
    } else if (userIsEligibleForBogoPromotion) {
      const obj7 = { text: null };
      const intl3 = tmp4(1114).intl;
      obj7[0] = intl3.string(tmp4(1114).t.iQTfWx);
      let tmp33Result = tmp33(PlanOptionBadgeComponent, obj7);
    } else {
      tmp33Result = null;
      if (null != tmp22) {
        const obj8 = { text: null };
        const intl2 = tmp4(1114).intl;
        const obj9 = { discount: null };
        obj9[0] = tmp4(1880).formatPercent(locale.locale, tmp22 / 100);
        obj8[0] = intl2.format(tmp4(1114).t.IAybsG, obj9);
        tmp33Result = tmp33(PlanOptionBadgeComponent, obj8);
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
  obj10[2] = str8;
  obj10[3] = formatToPlainStringResult;
  items4[1] = closure_35(premiumItem(4556).Text, obj10);
  obj6[1] = items4;
  const items5 = [closure_36(closure_8, obj6), ,];
  if (!tmp14) {
    items5[1] = null;
    const obj11 = { style: null, onLayout: null, children: null };
    obj11[0] = tmp.discountSubTextContainer;
    obj11[1] = function onLayout(nativeEvent) {
      const height = nativeEvent.nativeEvent.layout.height;
      if (height !== first) {
        callback(height);
      }
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
          const obj12 = { variant: "text-sm/medium", color: null, children: null };
          obj12[1] = str10;
          const intl6 = tmp4(1114).intl;
          const obj13 = { discountedPrice: null, numMonths: null };
          obj13[0] = formatRateResult;
          const discount = discountOffer.discount;
          let num2;
          if (discount != null) {
            num2 = discount.intervalCount;
          }
          if (num2 == null) {
            num2 = 1;
          }
          obj13[1] = num2;
          obj12[2] = intl6.formatToPlainString(tmp4(1114).t["02Gmgm"], obj13);
          tmp33Result = tmp33(tmp4(4556).Text, obj12);
        }
      }
    }
    const items6 = [tmp33Result];
    let tmp33Result1 = null != checkoutPlanDiscountPrices && null != discountOffer;
    if (tmp33Result1) {
      if (tmp34) {
        str4 = "text-default";
      }
      const obj14 = { variant: "text-sm/medium", color: null, children: null };
      obj14[1] = str4;
      const intl7 = tmp4(1114).intl;
      const obj15 = { regularPrice: null, numMonths: null };
      obj15[0] = formatRateResult1;
      const discount2 = discountOffer.discount;
      let num3;
      if (discount2 != null) {
        num3 = discount2.intervalCount;
      }
      if (num3 == null) {
        num3 = 1;
      }
      obj15[1] = num3;
      obj14[2] = intl7.formatToPlainString(tmp4(1114).t["vZk+c/"], obj15);
      tmp33Result1 = tmp33(tmp4(4556).Text, obj14);
    }
    items6[1] = tmp33Result1;
    obj11[2] = items6;
    items5[2] = tmp31(tmp32, obj11);
    obj5[1] = items5;
    items3[1] = tmp31(tmp32, obj5);
    obj3[1] = items3;
    return tmp31(tmp32, obj3);
  } else {
    let str9 = str4;
    if (tmp34) {
      str9 = "text-default";
    }
    const obj16 = { variant: "text-xs/medium", color: null, children: null };
    obj16[1] = str9;
    if (premiumItem.interval === constants.YEAR) {
      const intl5 = tmp4(1114).intl;
      if (checkoutPlanPriceString == null) {
        checkoutPlanPriceString = closure_18;
      }
      const obj17 = { price: null };
      obj17[0] = checkoutPlanPriceString;
      let formatToPlainStringResult1 = intl5.formatToPlainString(tmp4(1114).t.ECT4A5, obj17);
    } else {
      const intl4 = tmp4(1114).intl;
      let tmp42 = checkoutPlanPriceString;
      if (checkoutPlanPriceString == null) {
        tmp42 = closure_18;
      }
      const obj18 = { price: null };
      obj18[0] = tmp42;
      formatToPlainStringResult1 = intl4.formatToPlainString(tmp4(1114).t.v9QeON, obj18);
    }
    obj16[2] = formatToPlainStringResult1;
    tmp33(tmp4(4556).Text, obj16);
  }
}
function PremiumPlanSelectionActionSheetCTA(isPaymentSuccess) {
  ({ onStartPayment: require, shouldUseMobileWebRedirectCheckout } = isPaymentSuccess);
  if (isPaymentSuccess.isPaymentSuccess) {
    let obj = { text: null, size: "md", grow: true, onPress: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t.WAI6xu);
    obj[3] = tmp;
    return callback3(Button.Button, obj);
  } else {
    const tmp5 = shouldUseMobileWebRedirectCheckout
      ? { size: "lg", variant: "primary" }
      : { size: "md", variant: "active" };
    obj = { text: null };
    obj[0] = tmp2;
    const merged = Object.assign(tmp5);
    obj.grow = true;
    obj.onPress = function onPress() {
      return callback({ shouldRedirectToMobileWeb: shouldUseMobileWebRedirectCheckout });
    };
    obj.loading = tmp4;
    obj.disabled = tmp3;
    return callback3(Button.Button, obj);
  }
}
function PremiumPlanSelectionActionSheet(premiumItems) {
  ({ applicationId: productId2, analyticsLocation, premiumType } = premiumItems);
  let premiumTrialOffer = premiumType;
  premiumItems = premiumItems.premiumItems;
  let premiumDiscountOffer = premiumItems;
  const onPaymentSuccess = premiumItems.onPaymentSuccess;
  let identifier = onPaymentSuccess;
  const onPaymentDismiss = premiumItems.onPaymentDismiss;
  discountedPriceString = onPaymentDismiss;
  let flag = premiumItems.showFormTitle;
  ({ analyticsLocations, userIsEligibleForBogoPromotion, initialSelectedItem } = premiumItems);
  if (flag === undefined) {
    flag = true;
  }
  userIsEligibleForBogoPromotion = undefined;
  premiumType = undefined;
  let React;
  let ref;
  let handlePremiumPurchase;
  useNativeCheckoutStore = undefined;
  c11 = undefined;
  orderRequired = undefined;
  closure_13 = undefined;
  discountedPriceString = undefined;
  let first;
  closure_16 = undefined;
  let analyticsLocations2;
  closure_18 = undefined;
  let memo;
  let basePurchaseFlowAnalyticsFields;
  let basePlanId;
  c22 = undefined;
  let memo1;
  function _onPlanSelectionChange() {
    const self = this;
    const tmp = userIsEligibleForBogoPromotion((arg0) => {
      closure_0 = arg0;
      c3 = 0;
      c4 = 0;
      return (function* (arg0) {
        if (c4 === 2) {
          c4 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp5 === 3) {
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
            c4 = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_2 = tmp2;
                let found = tmp3;
                found = undefined;
                found = closure_1_2.find((productId) => productId.productId === closure_0);
                if (null != found) {
                  if (found !== closure_1_15) {
                    obj1 = callback(closure_1_2[50]);
                    const subscriptionItemsForProduct = obj1.getSubscriptionItemsForProduct(callback);
                    if (closure_1_12) {
                      c3 = 1;
                      c4 = 1;
                      obj1 = { value: null, done: false };
                      obj1[0] = closure_1_11(
                        subscriptionItemsForProduct.map((planId) => {
                          const obj = { sku_id: null, subscription_plan_id: null, quantity: null, purchase_type: null };
                          const obj2 = callback(tmp2[17]);
                          obj[0] = obj2.castPremiumSubscriptionAsSkuId(found(tmp2[17]).getSkuIdForPlan(planId.planId));
                          ({ planId: obj[1], quantity: obj[2] } = planId);
                          obj[3] = constants.SUBSCRIPTION;
                          return obj;
                        }),
                      );
                      return obj1;
                    }
                  }
                }
                c4 = 3;
                return { value: "HermesInternal", done: null };
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else if (null == arg1) {
              c4 = 3;
              return { value: "HermesInternal", done: null };
            }
            callback2(found);
          } catch (tmp18) {
            c4 = tmp;
            throw tmp18;
          }
        }
      })();
    });
    closure_23 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback4();
  userIsEligibleForBogoPromotion = tmp;
  const tmp2 = first((isPaymentSuccess) => isPaymentSuccess.isPaymentSuccess);
  premiumType = tmp2;
  const tmp5 = premiumDiscountOffer;
  let obj = productId2(premiumDiscountOffer[23]);
  const items = [orderRequired];
  let stateFromStores = obj.useStateFromStores(items, () => orderRequired.isBusy());
  obj1 = productId2(premiumDiscountOffer[27]);
  const isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  React = isScreenReaderEnabled;
  let obj2 = React;
  ref = React.useRef(null);
  const items1 = [tmp2, isScreenReaderEnabled];
  const effect = React.useEffect(() => {
    let tmp = premiumType;
    if (premiumType) {
      tmp = closure_7;
    }
    if (tmp) {
      let obj = productId2(premiumDiscountOffer[28]);
      obj = { ref: null, delay: 100 };
      obj[0] = ref;
      const result = obj.setAccessibilityFocus(obj);
    }
  }, items1);
  let obj3 = productId2(premiumDiscountOffer[29]);
  handlePremiumPurchase = obj3.useHandlePremiumPurchase();
  let obj4 = productId2(premiumDiscountOffer[30]);
  const isPaymentsBlocked = obj4.useIsPaymentsBlocked();
  const tmp14 = premiumTrialOffer(premiumDiscountOffer[31])();
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
  let tmp4Result = tmp4(tmp5[32]);
  premiumTrialOffer = tmp4Result.usePremiumTrialOffer();
  tmp4Result = tmp4(tmp5[33]);
  premiumDiscountOffer = tmp4Result.usePremiumDiscountOffer();
  let tmp19 = null != premiumTrialOffer && null != premiumType;
  if (tmp19) {
    const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
    let skuId;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
    let tmp13Result = tmp13(tmp5[17]);
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
  const discountedPremiumProductInfo = productId2(tmp5[34]).useDiscountedPremiumProductInfo(
    premiumDiscountOffer,
    premiumItems,
  );
  ({ discountedPlan, discountedProduct, discountedPriceString } = discountedPremiumProductInfo);
  const tmp4Result1 = productId2(tmp5[34]);
  let productId;
  if (discountedPlan != null) {
    productId = discountedPlan.productId;
  }
  obj = { discountedPriceString, regularPriceString: null };
  let priceString;
  if (discountedProduct != null) {
    priceString = discountedProduct.priceString;
  }
  obj[1] = priceString;
  const checkoutPlanDiscountPrices = productId2(tmp5[24]).useCheckoutPlanDiscountPrices(productId, obj);
  const tmp28 = premiumType(obj2.useState(initialSelectedItem), 2);
  first = tmp28[0];
  closure_16 = tmp28[1];
  const tmp4Result2 = productId2(tmp5[24]);
  const items2 = [tmp6];
  const stateFromStores1 = productId2(tmp5[23]).useStateFromStores(items2, () => {
    let product = null;
    if (null != first) {
      product = orderRequired.getProduct(tmp.productId);
    }
    return product;
  });
  const tmp4Result3 = productId2(tmp5[23]);
  tmp13Result = tmp13(tmp5[36]);
  analyticsLocations2 = tmp13Result(
    analyticsLocations,
    tmp13(tmp5[37]).PREMIUM_PAYMENT_ACTION_SHEET,
  ).analyticsLocations;
  const tmp32 = premiumTrialOffer(tmp5[38])(() => productId2(premiumDiscountOffer[39]).getNewAnalyticsLoadId());
  closure_18 = tmp32;
  const items3 = [premiumType];
  memo = obj2.useMemo(() => {
    const obj = productId2(premiumDiscountOffer[17]);
    return obj.castPremiumSubscriptionAsSkuId(
      premiumTrialOffer(premiumDiscountOffer[17]).getSkuIdForPremiumType(premiumTrialOffer),
    );
  }, items3);
  const tmp4Result4 = productId2(tmp5[35]);
  obj = { analyticsLoadId: tmp32, analyticsLocation: null, analyticsLocations: null };
  obj1 = { object: constants2.BUTTON_CTA, object_type: constants3.BUY };
  let merged = Object.assign(analyticsLocation);
  obj[1] = obj1;
  obj[2] = analyticsLocations2;
  basePurchaseFlowAnalyticsFields = productId2(tmp5[39]).getBasePurchaseFlowAnalyticsFields(obj);
  basePlanId = null;
  if (null != first) {
    basePlanId = first.basePlanId;
  }
  function onClose() {
    callback();
    premiumTrialOffer(premiumDiscountOffer[43]).hideActionSheet();
  }
  const tmp4Result5 = productId2(tmp5[39]);
  let result = productId2(tmp5[40]).isMobileWebRedirectCheckoutEnabled();
  c22 = result;
  premiumTrialOffer(tmp5[41])(() => {
    let obj = productId2(premiumDiscountOffer[42]);
    obj = {};
    const merged = Object.assign(basePurchaseFlowAnalyticsFields);
    obj.application_id = productId2;
    obj.subscription_plan_id = basePlanId;
    obj.sku_id = memo;
    let customCheckoutFlowForAnalytics;
    if (c22) {
      customCheckoutFlowForAnalytics = productId2(premiumDiscountOffer[40]).getCustomCheckoutFlowForAnalytics();
      const tmpResult = productId2(premiumDiscountOffer[40]);
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
    userIsEligibleForBogoPromotion(() => {
      closure_0 = arg0;
      c5 = 0;
      c6 = 0;
      closure_4 = 0;
      const iter = (function* () {
        if (c6 === 2) {
          c6 = 3;
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
            c6 = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                c2 = tmp3;
                basePlanId = tmp7;
                let shouldRedirectToMobileWeb;
                obj1 = shouldRedirectToMobileWeb;
                if (shouldRedirectToMobileWeb === undefined) {
                  obj1 = { shouldRedirectToMobileWeb: false };
                }
                shouldRedirectToMobileWeb = obj1.shouldRedirectToMobileWeb;
                basePlanId = undefined;
                c2 = undefined;
                c3 = undefined;
                c4 = undefined;
                c5 = 1;
                c6 = 1;
                return { value: "PX_16", done: true };
              }
            } else {
              if (1 === tmp7) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c6 = 3;
                  let obj2 = { value: null, done: true };
                  obj2[0] = arg1;
                  return obj2;
                } else {
                  closure_1_1(38)(null != closure_1_15, "cannot start payment without a selectedItem");
                  basePlanId = closure_1_15.basePlanId;
                  let tmp33 = closure_1_22;
                  if (closure_1_22) {
                    tmp33 = callback;
                  }
                  dependencyMap = tmp33;
                  const PaymentFlowStep = callback(10663).PaymentFlowStep;
                  if (dependencyMap) {
                    EXTERNAL_PAYMENT = PaymentFlowStep.MOBILE_WEB_REDIRECT_CHECKOUT;
                  } else {
                    EXTERNAL_PAYMENT = PaymentFlowStep.EXTERNAL_PAYMENT;
                  }
                  let obj4 = callback(10663);
                  let obj3 = { from_step: null, to_step: null, subscription_plan_gateway_plan_id: null, sku_id: null };
                  obj3[0] = callback(10663).PaymentFlowStep.PLAN_SELECT;
                  obj3[1] = EXTERNAL_PAYMENT;
                  obj3[2] = closure_15.productId;
                  obj3[3] = closure_19;
                  const paymentFlowStepAnalyticsFields = obj4.getPaymentFlowStepAnalyticsFields(_location, obj3);
                  if (!dependencyMap) {
                    let obj6 = closure_1_1(1242);
                    obj6.track(closure_1_25.PAYMENT_FLOW_STEP, paymentFlowStepAnalyticsFields);
                  }
                  obj4 = { productId: null, onPaymentSuccess: null, onPaymentDismiss: null };
                  obj4[0] = closure_1_15.productId;
                  obj4[1] = EXTERNAL_PAYMENT;
                  obj4[2] = paymentFlowStepAnalyticsFields;
                  closure_1_13(obj4);
                  if (dependencyMap) {
                    const obj11 = callback(7405);
                    const obj5 = { planId: null, isGift: false, loadId: null };
                    obj5[0] = closure_1_1;
                    obj5[2] = closure_1_18;
                    const result = obj11.goToStandalonePremiumCheckoutFromMobileApp(
                      "premium_plan_selection_action_sheet",
                      obj5,
                      () => {
                        if (obj.isMetaQuest()) {
                          closure_1_16();
                          basePlanId(_undefined[43]).hideActionSheet();
                          const obj3 = basePlanId(_undefined[43]);
                        } else {
                          closure_2_14("in_mobile_web");
                          closure_2_1(_undefined[44]).track(closure_2_25.PAYMENT_FLOW_STEP, c4);
                          const obj2 = closure_2_1(_undefined[44]);
                        }
                      },
                      () => {
                        let obj = basePlanId(_undefined[47]);
                        obj = { title: null, body: null, hideActionSheet: true };
                        const intl = shouldRedirectToMobileWeb(_undefined[19]).intl;
                        obj[0] = intl.string(shouldRedirectToMobileWeb(_undefined[19]).t.NrBVjw);
                        const intl2 = shouldRedirectToMobileWeb(_undefined[19]).intl;
                        obj[1] = intl2.string(shouldRedirectToMobileWeb(_undefined[19]).t["gD+grx"]);
                        obj.show(obj);
                      },
                    );
                  } else {
                    c4 = 1;
                    obj6 = {
                      productId: null,
                      analyticsLocation: null,
                      analyticsLoadId: null,
                      analyticsLocations: null,
                      orderId: null,
                    };
                    obj6[0] = closure_15.productId;
                    obj6[1] = _location.location;
                    obj6[2] = closure_18;
                    obj6[3] = closure_17;
                    let id;
                    if (id != null) {
                      id = id.id;
                    }
                    obj6[4] = id;
                    c5 = 3;
                    c6 = 1;
                    const obj7 = { value: null, done: false };
                    obj7[0] = closure_9(obj6);
                    return obj7;
                  }
                }
              } else {
                if (2 === tmp7) {
                  c4 = 0;
                  c5 = c3;
                  if (c5 instanceof closure_1_1(10704)) {
                    obj1 = callback(4884);
                    const subscriptions = obj1.fetchSubscriptions();
                    obj2 = closure_1_1(4905);
                    const obj8 = { title: null, body: null, hideActionSheet: true };
                    let intl = callback(1114).intl;
                    obj8[0] = intl.string(callback(1114).t["U+H+kd"]);
                    let intl2 = callback(1114).intl;
                    obj8[1] = intl2.string(callback(1114).t.F9ktNa);
                    obj2.show(obj8);
                  } else {
                    throw c5;
                  }
                } else if (arg0 === 1) {
                  c6 = 3;
                  throw arg1;
                } else if (arg0 !== 2) {
                  c4 = 0;
                }
                c4 = 0;
                c6 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
              c6 = 3;
            }
          } catch (tmp81) {
            c3 = tmp81;
            if (tmp4 === c4) {
              c6 = tmp2;
              throw tmp81;
            } else {
              c5 = tmp;
            }
          }
        }
      })();
      iter.next();
      return iter;
    }),
    items4,
  );
  memo1 = obj2.useMemo(() => {
    if (c22) {
      const intl3 = productId2(premiumDiscountOffer[19]).intl;
      let stringResult = intl3.string(productId2(premiumDiscountOffer[19]).t.rylrdY);
    } else if (closure_13) {
      const tmp2Result = tmp2(tmp3[58]);
      const intl2 = productId2(premiumDiscountOffer[19]).intl;
      const string = intl2.string;
      let rKD72m = productId2(premiumDiscountOffer[19]).t;
      if (isAndroidResult) {
        rKD72m = rKD72m.rKD72m;
        let stringResult1 = string(rKD72m);
      } else {
        stringResult1 = string(rKD72m.bboTul);
      }
      isAndroidResult = tmp2(tmp3[58]).isAndroid();
    } else {
      const intl = tmp2(tmp3[19]).intl;
      stringResult = intl.string(productId2(premiumDiscountOffer[19]).t.nIlrxd);
    }
    return stringResult;
  }, items5);
  const items6 = [tmp2, first, tmp21, discountedPriceString, memo1, tmp.legalDisclaimerText];
  const memo2 = obj2.useMemo(() => {
    if (premiumType) {
      return null;
    } else {
      let interval;
      if (first != null) {
        interval = first.interval;
      }
      if (null == interval) {
        return null;
      } else if (closure_13) {
        let obj = { style: null, variant: "text-xxs/medium", children: null };
        obj[0] = userIsEligibleForBogoPromotion.legalDisclaimerText;
        const intl3 = productId2(premiumDiscountOffer[19]).intl;
        const obj10 = productId2(premiumDiscountOffer[58]);
        const tmp31 = closure_1_35;
        const t = productId2(premiumDiscountOffer[19]).t;
        obj = { paidURL: null, interval: null, cancelURL: null };
        obj[0] = closure_1_28.PAID_TERMS;
        const isAndroidResult = productId2(premiumDiscountOffer[58]).isAndroid();
        const tmp42 = productId2(premiumDiscountOffer[58]).isAndroid() ? t.tINI9V : t.ZWXtAj;
        obj[1] = premiumTrialOffer(premiumDiscountOffer[17]).getIntervalStringAsNoun(interval);
        const obj12 = premiumTrialOffer(premiumDiscountOffer[17]);
        obj[2] = premiumTrialOffer(premiumDiscountOffer[59]).getArticleURL(closure_1_29.PREMIUM_DETAILS_CANCEL_SUB);
        obj[2] = intl3.format(tmp42, obj);
        return tmp31(productId2(premiumDiscountOffer[18]).Text, obj);
      } else if (null != discountedPriceString) {
        obj1 = { style: null, variant: "text-xxs/medium", children: null };
        obj1[0] = userIsEligibleForBogoPromotion.legalDisclaimerText;
        const intl2 = productId2(premiumDiscountOffer[19]).intl;
        let obj2 = { buttonText: null, interval: null, cancelSubscriptionArticle: null, paidServiceTermsArticle: null };
        obj2[0] = memo1;
        obj2[1] = premiumTrialOffer(premiumDiscountOffer[17]).formatInterval(interval);
        const obj6 = premiumTrialOffer(premiumDiscountOffer[17]);
        obj2[2] = premiumTrialOffer(premiumDiscountOffer[59]).getArticleURL(closure_1_29.PREMIUM_DETAILS_CANCEL_SUB);
        const obj7 = premiumTrialOffer(premiumDiscountOffer[59]);
        obj2[3] = premiumTrialOffer(premiumDiscountOffer[59]).getArticleURL(closure_1_29.PAID_TERMS);
        obj1[2] = intl2.format(productId2(premiumDiscountOffer[19]).t["3uC7vj"], obj2);
        return closure_1_35(productId2(premiumDiscountOffer[18]).Text, obj1);
      } else {
        const obj14 = productId2(premiumDiscountOffer[58]);
        const t2 = productId2(premiumDiscountOffer[19]).t;
        const isAndroidResult1 = productId2(premiumDiscountOffer[58]).isAndroid();
        obj = { style: null, variant: "text-xxs/medium", children: null };
        obj[0] = userIsEligibleForBogoPromotion.legalDisclaimerText;
        const intl = productId2(premiumDiscountOffer[19]).intl;
        const obj3 = { paidURL: null, interval: null, ctaText: null };
        obj3[0] = closure_1_28.PAID_TERMS;
        obj2 = premiumTrialOffer(premiumDiscountOffer[17]);
        obj3[1] = obj2.getIntervalStringAsNoun(interval);
        obj3[2] = memo1;
        obj[2] = intl.format(productId2(premiumDiscountOffer[58]).isAndroid() ? t2.COObWR : t2["7wpqfj"], obj3);
        return closure_1_35(productId2(premiumDiscountOffer[18]).Text, obj);
      }
    }
  }, items6);
  obj2 = {
    ref: tmp4Result4.useBottomSheetRef().bottomSheetRef,
    handleDisabled: true,
    onDismiss: closure_16,
    startExpanded: true,
    children: null,
  };
  if (isPaymentsBlocked) {
    obj3 = { style: null, children: null };
    obj3[0] = tmp.blockedPaymentContainer;
    const items7 = [tmp42(tmp13(tmp5[61]), {})];
    obj4 = { variant: "floating", onPress: null };
    obj4[1] = onClose;
    items7[1] = tmp42(tmp4(tmp5[62]).ActionSheetHeaderBar, obj4);
    obj3[1] = items7;
    let tmp43Result = tmp43(ref, obj3);
  } else {
    let obj5 = {
      premiumType: null,
      isPaymentSuccess: null,
      selectedPremiumType: null,
      trialOffer: null,
      discountOffer: null,
    };
    obj5[0] = premiumType;
    obj5[1] = tmp2;
    let premiumTier;
    if (first != null) {
      premiumTier = first.premiumTier;
    }
    obj5[2] = premiumTier;
    obj5[3] = premiumTrialOffer;
    let tmp47 = null;
    if (null != discountedPriceString) {
      tmp47 = premiumDiscountOffer;
    }
    obj5[4] = tmp47;
    const items8 = [tmp42(Header, obj5), ,];
    let obj6 = { style: null, children: null };
    obj6[0] = tmp.body;
    if ("in_mobile_web" === tmp3) {
      let obj7 = { size: "large", style: null };
      obj7[1] = tmp.loadingIndicator;
      let tmp43Result1 = tmp42(handlePremiumPurchase, obj7);
    } else if (tmp2) {
      let obj8 = { style: null, children: null };
      obj8[0] = tmp.contentActivated;
      const obj9 = {
        ref: null,
        accessible: true,
        accessibilityRole: "image",
        accessibilityLabel: null,
        children: null,
      };
      obj9[0] = ref;
      const intl5 = tmp4(tmp5[19]).intl;
      obj9[3] = intl5.string(tmp4(tmp5[19]).t["Q+BB2w"]);
      let premiumTier1;
      if (first != null) {
        premiumTier1 = first.premiumTier;
      }
      if (memo.TIER_0 === premiumTier1) {
        if (tmp4Result7.isThemeDark(tmp14)) {
          let tmp13Result2 = tmp13(tmp5[52]);
        } else {
          tmp13Result2 = tmp13(tmp5[53]);
        }
        tmp4Result7 = tmp4(tmp5[51]);
      } else {
        if (tmp69.TIER_1 === premiumTier1) {
          if (tmp4Result8.isThemeDark(tmp14)) {
            let tmp13Result3 = tmp13(tmp5[54]);
          } else {
            tmp13Result3 = tmp13(tmp5[55]);
          }
          let tmp70 = tmp13Result3;
          tmp4Result8 = tmp4(tmp5[51]);
        } else if (tmp69.TIER_2 === premiumTier1) {
          if (tmp4Result9.isThemeDark(tmp14)) {
            let tmp13Result4 = tmp13(tmp5[56]);
          } else {
            tmp13Result4 = tmp13(tmp5[57]);
          }
          tmp70 = tmp13Result4;
          tmp4Result9 = tmp4(tmp5[51]);
        }
        let obj10 = { source: null };
        obj10[0] = tmp70;
        obj9[4] = tmp42(tmp13Result1, obj10);
        const items9 = [tmp42(tmp48, obj9)];
        let obj11 = { style: null, variant: "text-md/semibold", children: null };
        obj11[0] = tmp.contentActivatedText;
        let premiumTier2;
        if (first != null) {
          premiumTier2 = first.premiumTier;
        }
        if (tmp69.TIER_0 === premiumTier2) {
          const intl7 = tmp4(tmp5[19]).intl;
          let stringResult = intl7.string(tmp4(tmp5[19]).t["6WWrVM"]);
          obj11[2] = stringResult;
          obj11 = tmp42(tmp4(tmp5[18]).Text, obj11);
          items9[1] = obj11;
          obj8[1] = items9;
          tmp43Result = tmp43(tmp48, obj8);
        } else if (tmp69.TIER_1 !== premiumTier2) {
          if (tmp69.TIER_2 === premiumTier2) {
            const intl8 = tmp4(tmp5[19]).intl;
            stringResult = intl8.string(tmp4(tmp5[19]).t.I7xNzI);
          }
        }
        const intl6 = tmp4(tmp5[19]).intl;
        stringResult = intl6.string(tmp4(tmp5[19]).t.LAAgsy);
      }
      tmp13Result1 = tmp13(tmp5[63]);
    } else {
      let obj12 = { convertToMajorUnits: null };
      obj12[0] = tmp4(tmp5[58]).isAndroid();
      if (flag) {
        flag = !tmp21;
      }
      const obj13 = { style: null, children: null };
      obj13[0] = tmp.contentSelectPlan;
      if (tmp21) {
        let obj14 = { variant: "text-md/normal", color: "text-strong", style: null, children: null };
        obj14[2] = tmp.trialDisclaimer;
        let intl2 = tmp4(tmp5[19]).intl;
        obj14[3] = intl2.string(tmp4(tmp5[19]).t.u95Dt4);
        let tmp42Result = tmp42(tmp4(tmp5[18]).Text, obj14);
      } else {
        tmp42Result = null;
        if (null != checkoutPlanDiscountPrices) {
          tmp42Result = null;
          if (null != premiumType) {
            const obj15 = { children: null };
            const obj16 = { variant: "text-md/normal", color: "text-strong", style: null, children: null };
            obj16[2] = tmp.discountDisclaimer;
            let intl = tmp4(tmp5[19]).intl;
            obj16[3] = intl.format(tmp4(tmp5[19]).t.yBn7uz, checkoutPlanDiscountPrices);
            const items10 = [tmp42(tmp4(tmp5[18]).Text, obj16)];
            const obj17 = { style: null };
            const items11 = [,];
            ({ divider: arr11[0], offerDividerMargin: arr11[1] } = tmp);
            obj17[0] = items11;
            items10[1] = tmp42(tmp48, obj17);
            obj15[0] = items10;
            tmp42Result = tmp43(tmp48, obj15);
          }
        }
      }
      const items12 = [tmp42Result];
      let stringResult1;
      const tmp4Result10 = tmp4(tmp5[58]);
      if (flag) {
        let intl3 = tmp4(tmp5[19]).intl;
        stringResult1 = intl3.string(tmp4(tmp5[19]).t.u95Dt4);
      }
      const obj18 = {
        title: null,
        titleStyleType: null,
        titleViewStyle: null,
        sectionBodyStyle: null,
        inset: true,
        children: null,
      };
      obj18[0] = stringResult1;
      obj18[1] = TitleStyleType.NO_BORDER_OR_MARGIN;
      obj18[2] = tmp.formTitle;
      const items13 = [tmp.formSectionBody];
      let formSectionBodyWithNoTitle = !flag;
      if (!flag) {
        formSectionBodyWithNoTitle = tmp.formSectionBodyWithNoTitle;
      }
      items13[1] = formSectionBodyWithNoTitle;
      obj18[3] = items13;
      let tmp42Result1 = null != stateFromStores1;
      if (tmp42Result1) {
        tmp42Result1 = "HR" === stateFromStores1.countryCode;
      }
      if (tmp42Result1) {
        tmp42Result1 = stateFromStores1.currencyCode.toLowerCase() === constants4.EUR;
        const str3 = stateFromStores1.currencyCode;
      }
      if (tmp42Result1) {
        const obj19 = { message: null };
        const intl4 = tmp4(tmp5[19]).intl;
        const obj20 = { kunaPriceWithCurrency: null };
        const tmp13Result6 = tmp13(tmp5[65]);
        obj20[0] = tmp4(tmp5[25]).formatPrice(stateFromStores1.price * closure_31, constants4.HRK, obj12);
        obj19[0] = intl4.formatToPlainString(tmp4(tmp5[19]).t["9hnZoK"], obj20);
        tmp42Result1 = tmp42(tmp13Result6, obj19);
        const tmp4Result11 = tmp4(tmp5[25]);
      }
      const items14 = [tmp42Result1];
      let productId1;
      if (first != null) {
        productId1 = first.productId;
      }
      const obj21 = {
        value: null,
        options: null,
        onChange: null,
        withDividers: false,
        style: null,
        disabled: null,
        indicatorLeft: true,
      };
      obj21[0] = productId1;
      productId2 = undefined;
      if (first != null) {
        productId2 = first.productId;
      }
      identifier = undefined;
      if (discountedProduct != null) {
        identifier = discountedProduct.identifier;
      }
      const _Set = Set;
      const set = new Set(premiumItems.map((premiumTier) => premiumTier.premiumTier));
      React = set.size > 1;
      obj21[1] = premiumItems.map((premiumItem) => {
        let obj = {
          premiumItem,
          selectedProductId: productId2,
          optionNeedsProductNameLabel: closure_7,
          trialOffer: premiumTrialOffer,
          discountOffer: premiumDiscountOffer,
          discountedPriceString: null,
          userIsEligibleForBogoPromotion: null,
          selectedPremiumType: null,
        };
        let tmp3 = null;
        if (premiumItem.productId === identifier) {
          tmp3 = discountedPriceString;
        }
        obj = { name: closure_1_35(closure_1_41, obj), value: premiumItem.productId };
        obj[5] = tmp3;
        obj[6] = userIsEligibleForBogoPromotion;
        obj[7] = premiumType;
        return obj;
      });
      obj21[2] = function onChange(value) {
        return (function onPlanSelectionChange(value) {
          const self = this;
          const apply = closure_23.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })(value.value);
      };
      obj21[4] = tmp.planOptionRowContainer;
      let tmp66 = stateFromStores;
      if (!stateFromStores) {
        tmp66 = isPatchOrderLoading;
      }
      obj21[5] = tmp66;
      items14[1] = tmp42(tmp4(tmp5[66]).RadioGroup, obj21);
      obj18[5] = items14;
      items12[1] = tmp43(tmp13(tmp5[64]), obj18);
      obj13[1] = items12;
      const items15 = [tmp43(tmp48, obj13)];
      const obj22 = {
        isPaymentSuccess: null,
        onClose: null,
        ctaText: null,
        onStartPayment: null,
        shouldUseMobileWebRedirectCheckout: null,
        disabled: null,
        loading: null,
      };
      obj22[0] = tmp2;
      obj22[1] = onClose;
      obj22[2] = memo1;
      obj22[3] = callback;
      obj22[4] = result;
      let tmp79 = stateFromStores;
      if (!stateFromStores) {
        tmp79 = isPatchOrderLoading;
      }
      obj22[5] = tmp79;
      if (!stateFromStores) {
        stateFromStores = isPatchOrderLoading;
      }
      const obj23 = { children: null };
      obj22[6] = stateFromStores;
      items15[1] = tmp42(PremiumPlanSelectionActionSheetCTA, obj22);
      obj23[0] = items15;
      tmp43Result1 = tmp43(tmp44, obj23);
      const tmp13Result5 = tmp13(tmp5[64]);
      const tmp78 = PremiumPlanSelectionActionSheetCTA;
    }
    const items16 = [tmp43Result1];
    let tmp82 = !result;
    if (!result) {
      tmp82 = memo2;
    }
    const obj24 = { children: null };
    items16[1] = tmp82;
    obj6[1] = items16;
    items8[1] = tmp43(ref, obj6);
    const obj25 = { variant: "floating", onPress: null };
    obj25[1] = onClose;
    items8[2] = tmp42(tmp4(tmp5[62]).ActionSheetHeaderBar, obj25);
    obj24[0] = items8;
    tmp43Result = tmp43(tmp44, obj24);
    const tmp45 = Header;
  }
  obj2[4] = tmp43Result;
  return closure_35(productId2(tmp5[60]).BottomSheet, obj2);
}
let closure_3 = ["predicate", "initialSelectedCriteria", "sortFn"];
({ View: closure_8, ActivityIndicator: c9 } = get_ActivityIndicator);
({
  setInitiatedPurchaseFromNewFlow: map1,
  setMobileWebRedirectCheckoutStatus: closure_14,
  usePremiumPlanPurchasedStore: closure_15,
  reset: closure_16,
} = usePremiumPlanPurchasedStore);
({
  DISCOUNTS: closure_17,
  PRICE_PLACEHOLDER: closure_18,
  PremiumTypes: closure_19,
  SubscriptionIntervalTypes: closure_20,
  SubscriptionPlans: closure_21,
  SubscriptionPlanInfo: closure_22,
  PremiumSubscriptionSKUs: closure_23,
  PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY: closure_24,
} = GuildFeatures);
({
  AnalyticEvents: closure_25,
  AnalyticsObjects: closure_26,
  AnalyticsObjectTypes: closure_27,
  MarketingURLs: closure_28,
  HelpdeskArticles: closure_29,
} = ME);
({ EUR_TO_HRK_CONVERSION_RATE: closure_31, ItemPurchaseType: closure_32 } = CustomCheckoutFlow);
({ CurrencyCodes: closure_33, PaymentGateways: closure_34 } = sum);
({ jsx: closure_35, jsxs: closure_36, Fragment: closure_37 } = jsxProd);
createCacheKey = {
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
createCacheKey = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: ThemesDefault.radii.lg,
  backgroundColor: ThemesDefault.unsafe_rawColors.GREEN_360,
  paddingVertical: 2,
  paddingHorizontal: 8,
  marginRight: 8,
};
createCacheKey[12] = createCacheKey;
createCacheKey[13] = { backgroundColor: ThemesDefault.colors.WHITE };
createCacheKey[14] = { textTransform: "uppercase" };
createCacheKey[15] = { marginVertical: 40 };
createCacheKey[16] = { marginTop: 16 };
let obj1 = { backgroundColor: ThemesDefault.colors.WHITE };
createCacheKey[17] = { height: 1, width: "100%", backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[18] = { marginBottom: 8 };
createCacheKey[19] = { marginBottom: 8 };
createCacheKey[20] = { marginBottom: 20 };
createCacheKey[21] = { marginVertical: 30 };
createCacheKey[22] = { alignItems: "flex-end" };
createCacheKey[23] = { flexShrink: 1 };
let closure_38 = createCacheKey.createStyles(createCacheKey);
let obj2 = { height: 1, width: "100%", backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
let result = require("set").fileFinishedImporting("modules/premium/native/PremiumPlanSelectionActionSheet.tsx");

export default function PremiumPlanSelectionActionSheetWithOrderCTX(predicate) {
  const NitroACOMSubscriptionExperiment = TIER_2(9365).NitroACOMSubscriptionExperiment;
  let obj = TIER_2(1115);
  if (obj.isIOS()) {
    if (
      NitroACOMSubscriptionExperiment.useConfig({ location: "PremiumPlanSelectionActionSheetWithOrderCTX" }).enabled
    ) {
      let APPLE = tmp3.APPLE_ADVANCED_COMMERCE;
      let tmp5 = tmp3;
    } else {
      APPLE = tmp3.APPLE;
      tmp5 = tmp3;
    }
  } else {
    const GOOGLE = tmp3.GOOGLE;
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
    const tmp13 = callback(predicate, closure_3);
    let tmpResult = tmp(7447);
    const premiumTrialOffer = tmpResult.usePremiumTrialOffer();
    const premiumType = predicate.premiumType;
    let tmp16 = null != premiumTrialOffer && null != premiumType;
    if (tmp16) {
      const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
      let skuId;
      if (subscriptionTrial != null) {
        skuId = subscriptionTrial.skuId;
      }
      let obj2 = getPremiumPlanItemDefault;
      tmp16 = skuId === obj2.getSkuIdForPremiumType(premiumType);
    }
    let tmp19;
    if (tmp16) {
      obj = { subscription_preview: null };
      obj = { subscription_trial_id: null };
      obj[0] = premiumTrialOffer.trialId;
      obj[0] = obj;
      tmp19 = obj;
    }
    tmpResult = tmp(10707);
    const isEligibleForBogoOffer = tmpResult.useIsEligibleForBogoOffer();
    if (null == fn3) {
      let premiumBundlesWithPredicate = tmp(7409).getPremiumBundlesWithPredicate(fn);
      const tmpResult1 = tmp(7409);
    } else {
      const premiumBundlesWithPredicate1 = tmp(7409).getPremiumBundlesWithPredicate(fn);
      premiumBundlesWithPredicate = premiumBundlesWithPredicate1.sort(fn3);
      const tmpResult2 = tmp(7409);
    }
    if (isEligibleForBogoOffer) {
      fn2 = (interval) => interval.interval === constants.MONTH;
    }
    const found = premiumBundlesWithPredicate.find(fn2);
    if (null != found) {
      const subscriptionItemsForProduct = tmp(7409).getSubscriptionItemsForProduct(found.productId);
      let mapped = subscriptionItemsForProduct.map((planId) => {
        const obj = { subscriptionPlanId: planId.planId, skuId: null, quantity: null };
        const obj2 = TIER_2(4218);
        obj[1] = obj2.castPremiumSubscriptionAsSkuId(callback(4218).getSkuIdForPlan(planId.planId));
        obj[2] = planId.quantity;
        return obj;
      });
      const tmpResult3 = tmp(7409);
    } else {
      obj1 = { subscriptionPlanId: null, skuId: null, quantity: 1 };
      obj1[0] = closure_21.PREMIUM_YEAR_TIER_2;
      obj1[1] = tmp(4218).castPremiumSubscriptionAsSkuId(TIER_22.TIER_2);
      mapped = [obj1];
      const tmpResult4 = tmp(4218);
    }
    obj2 = {
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
    obj2[0] = GOOGLE;
    obj2[1] = GOOGLE === tmp3.APPLE_ADVANCED_COMMERCE;
    obj2[2] = [];
    obj2[3] = mapped;
    obj2[6] = tmp19;
    obj2[7] = function onOrderRetryCancellation() {
      return callback(4527).hideActionSheet(closure_24);
    };
    const obj3 = {};
    const merged = Object.assign(tmp13);
    obj3.premiumItems = premiumBundlesWithPredicate;
    obj3.userIsEligibleForBogoPromotion = isEligibleForBogoOffer;
    obj3.initialSelectedItem = found;
    obj2[8] = callback3(PremiumPlanSelectionActionSheet, obj3);
    return callback3(NativeCheckoutStoreProviderDefault, obj2);
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
