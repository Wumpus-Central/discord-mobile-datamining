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
    tmp9 = skuId === tmp6(4139).getSkuIdForPremiumType(premiumType);
    const tmp6Result = tmp6(4139);
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
  ({ customBadgeComponent, trialOffer, discountOffer, discountedPriceString, userIsEligibleForBogoPromotion } =
    premiumItem);
  ({ selectedProductId, optionNeedsProductNameLabel } = premiumItem);
  if (userIsEligibleForBogoPromotion === undefined) {
    userIsEligibleForBogoPromotion = false;
  }
  let first;
  dependencyMap = undefined;
  const tmp = callback4();
  const tmp2 = callback2(React.useState(0), 2);
  first = tmp2[0];
  dependencyMap = tmp2[1];
  let obj = premiumItem(586);
  const items = [closure_12];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_12.getProduct(premiumItem.productId));
  obj1 = premiumItem(13182);
  let checkoutPlanPriceString = obj1.useCheckoutPlanPriceString(premiumItem.productId, stateFromStores);
  ({ orderRequired, orderRecord } = useNativeCheckoutStore((orderRequired) => ({
    orderRequired: orderRequired.orderRequired,
    orderRecord: orderRequired.orderRecord,
  })));
  const premiumTier = premiumItem.premiumTier;
  let tmp9 = null != trialOffer && null != premiumTier;
  if (tmp9) {
    const subscriptionTrial = trialOffer.subscriptionTrial;
    let skuId;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
    let obj2 = first(4139);
    tmp9 = skuId === obj2.getSkuIdForPremiumType(premiumTier);
  }
  let tmp12 = tmp9;
  if (tmp12) {
    let tmp13 = !orderRequired;
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
      tmp13 = trialOffer.trialId === subscriptionTrialId;
    }
    tmp12 = tmp13;
  }
  let tmp4Result = tmp4(4139);
  const tierDisplayNameByPlanId = tmp4Result.getTierDisplayNameByPlanId(premiumItem.basePlanId);
  let obj4 = first(4139);
  const intervalString = obj4.getIntervalString(premiumItem.interval, false);
  let tmp18 = tmp12;
  if (!tmp12) {
    tmp18 = null != discountOffer;
  }
  if (!tmp18) {
    let tmp19 = userIsEligibleForBogoPromotion;
    if (userIsEligibleForBogoPromotion) {
      tmp19 = premiumItem.basePlanId === closure_21.PREMIUM_YEAR_TIER_2;
    }
    tmp18 = tmp19;
  }
  let tmp20 = null;
  if (!tmp18) {
    tmp20 = table[premiumItem.basePlanId];
  }
  if (userIsEligibleForBogoPromotion) {
    userIsEligibleForBogoPromotion = premiumItem.basePlanId === tmp17.PREMIUM_MONTH_TIER_2;
  }
  if (null == stateFromStores) {
    let USD = constants4.USD;
  } else {
    if (str.toLowerCase() in constants4) {
      USD = stateFromStores.currencyCode.toLowerCase();
      const str2 = stateFromStores.currencyCode;
    } else {
      USD = tmp22.USD;
    }
    str = stateFromStores.currencyCode;
  }
  let formatRateResult = null;
  if (null != discountedPriceString) {
    tmp4Result = tmp4(6089);
    formatRateResult = tmp4Result.formatRate(discountedPriceString, tmp24.interval, tmp24.intervalCount);
  }
  if (tmp12) {
    const intl = tmp4(1233).intl;
    obj = { price: null };
    obj[0] = tmp4(6089).formatPrice(0, USD, { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    let formatToPlainStringResult = intl.formatToPlainString(tmp4(1233).t.hXcaLT, obj);
    const tmp4Result1 = tmp4(6089);
  } else {
    formatToPlainStringResult = discountedPriceString;
    if (null == discountedPriceString) {
      let tmp27 = checkoutPlanPriceString;
      if (checkoutPlanPriceString == null) {
        tmp27 = closure_18;
      }
      formatToPlainStringResult = tmp27;
    }
  }
  tmp17 = closure_21;
  const tmp8 = useNativeCheckoutStore((orderRequired) => ({
    orderRequired: orderRequired.orderRequired,
    orderRecord: orderRequired.orderRecord,
  }));
  let tmp28 = checkoutPlanPriceString;
  if (checkoutPlanPriceString == null) {
    tmp28 = closure_18;
  }
  const tmp4Result2 = premiumItem(6089);
  if (first > 0) {
    const items1 = [tmp.planOptionPriceContainer];
    obj = { transform: null };
    obj1 = { translateY: null };
    obj1[0] = first / 2;
    const items2 = [obj1];
    obj[0] = items2;
    items1[1] = obj;
    let planOptionPriceContainer = items1;
  } else {
    planOptionPriceContainer = tmp.planOptionPriceContainer;
  }
  obj2 = { style: tmp.planOptionContainer, children: null };
  if (null != discountOffer) {
    let str3 = "text-lg/medium";
  } else {
    str3 = "text-md/medium";
  }
  const obj3 = { variant: str3, color: null, children: null };
  let str4 = "interactive-text-default";
  let str5 = "interactive-text-default";
  if (premiumItem.productId === selectedProductId) {
    str5 = "interactive-text-active";
  }
  obj3[1] = str5;
  let combined = intervalString;
  if (optionNeedsProductNameLabel) {
    const _HermesInternal = HermesInternal;
    combined = "" + tierDisplayNameByPlanId + " " + intervalString;
  }
  obj3[2] = combined;
  const items3 = [closure_35(premiumItem(4474).Text, obj3)];
  obj4 = { style: planOptionPriceContainer, children: null };
  const obj5 = { style: tmp.planOptionDiscountContainer, children: null };
  if (null == customBadgeComponent) {
    if (tmp18) {
      customBadgeComponent = null;
    } else if (userIsEligibleForBogoPromotion) {
      const obj6 = { text: null };
      const intl3 = tmp4(1233).intl;
      obj6[0] = intl3.string(tmp4(1233).t.iQTfWx);
      let tmp32Result = tmp32(PlanOptionBadgeComponent, obj6);
    } else {
      tmp32Result = null;
      if (null != tmp20) {
        const obj7 = { text: null };
        const intl2 = tmp4(1233).intl;
        const obj8 = { discount: null };
        obj8[0] = tmp4(1896).formatPercent(locale.locale, tmp20 / 100);
        obj7[0] = intl2.format(tmp4(1233).t.IAybsG, obj8);
        tmp32Result = tmp32(PlanOptionBadgeComponent, obj7);
        const tmp4Result3 = tmp4(1896);
      }
    }
  }
  const items4 = [customBadgeComponent];
  const obj9 = { style: tmp.priceText, variant: "text-lg/medium", color: null, children: null };
  let str8 = str4;
  if (premiumItem.productId === selectedProductId) {
    str8 = "interactive-text-active";
  }
  obj9[2] = str8;
  obj9[3] = formatToPlainStringResult;
  items4[1] = closure_35(premiumItem(4474).Text, obj9);
  obj5[1] = items4;
  const items5 = [closure_36(closure_8, obj5), ,];
  if (!tmp12) {
    items5[1] = null;
    const obj10 = { style: null, onLayout: null, children: null };
    obj10[0] = tmp.discountSubTextContainer;
    obj10[1] = function onLayout(nativeEvent) {
      const height = nativeEvent.nativeEvent.layout.height;
      if (height !== first) {
        callback(height);
      }
    };
    tmp32Result = null;
    if (null != formatRateResult) {
      tmp32Result = null;
      if (null != discountOffer) {
        tmp32Result = null;
        if (null == premiumItem.selectedPremiumType) {
          let str10 = str4;
          if (tmp33) {
            str10 = "text-default";
          }
          const obj11 = { variant: "text-sm/medium", color: null, children: null };
          obj11[1] = str10;
          const intl6 = tmp4(1233).intl;
          const obj12 = { discountedPrice: null, numMonths: null };
          obj12[0] = formatRateResult;
          const discount = discountOffer.discount;
          let num2;
          if (discount != null) {
            num2 = discount.intervalCount;
          }
          if (num2 == null) {
            num2 = 1;
          }
          obj12[1] = num2;
          obj11[2] = intl6.formatToPlainString(tmp4(1233).t["02Gmgm"], obj12);
          tmp32Result = tmp32(tmp4(4474).Text, obj11);
        }
      }
    }
    const items6 = [tmp32Result];
    let tmp32Result1 = null != discountedPriceString && null != discountOffer;
    if (tmp32Result1) {
      if (tmp33) {
        str4 = "text-default";
      }
      const obj13 = { variant: "text-sm/medium", color: null, children: null };
      obj13[1] = str4;
      const intl7 = tmp4(1233).intl;
      const obj14 = { regularPrice: null, numMonths: null };
      obj14[0] = formatRateResult1;
      const discount2 = discountOffer.discount;
      let num3;
      if (discount2 != null) {
        num3 = discount2.intervalCount;
      }
      if (num3 == null) {
        num3 = 1;
      }
      obj14[1] = num3;
      obj13[2] = intl7.formatToPlainString(tmp4(1233).t["vZk+c/"], obj14);
      tmp32Result1 = tmp32(tmp4(4474).Text, obj13);
    }
    items6[1] = tmp32Result1;
    obj10[2] = items6;
    items5[2] = tmp30(tmp31, obj10);
    obj4[1] = items5;
    items3[1] = tmp30(tmp31, obj4);
    obj2[1] = items3;
    return tmp30(tmp31, obj2);
  } else {
    let str9 = str4;
    if (tmp33) {
      str9 = "text-default";
    }
    const obj15 = { variant: "text-xs/medium", color: null, children: null };
    obj15[1] = str9;
    if (premiumItem.interval === constants.YEAR) {
      const intl5 = tmp4(1233).intl;
      if (checkoutPlanPriceString == null) {
        checkoutPlanPriceString = closure_18;
      }
      const obj16 = { price: null };
      obj16[0] = checkoutPlanPriceString;
      let formatToPlainStringResult1 = intl5.formatToPlainString(tmp4(1233).t.ECT4A5, obj16);
    } else {
      const intl4 = tmp4(1233).intl;
      let tmp41 = checkoutPlanPriceString;
      if (checkoutPlanPriceString == null) {
        tmp41 = closure_18;
      }
      const obj17 = { price: null };
      obj17[0] = tmp41;
      formatToPlainStringResult1 = intl4.formatToPlainString(tmp4(1233).t.v9QeON, obj17);
    }
    obj15[2] = formatToPlainStringResult1;
    tmp32(tmp4(4474).Text, obj15);
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
  ({ applicationId: productId1, analyticsLocation, premiumType } = premiumItems);
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
  let obj = productId1(premiumDiscountOffer[23]);
  const items = [orderRequired];
  let stateFromStores = obj.useStateFromStores(items, () => orderRequired.isBusy());
  obj1 = productId1(premiumDiscountOffer[27]);
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
      let obj = productId1(premiumDiscountOffer[28]);
      obj = { ref: null, delay: 100 };
      obj[0] = ref;
      const result = obj.setAccessibilityFocus(obj);
    }
  }, items1);
  let obj3 = productId1(premiumDiscountOffer[29]);
  handlePremiumPurchase = obj3.useHandlePremiumPurchase();
  let obj4 = productId1(premiumDiscountOffer[30]);
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
  const discountedPremiumProductInfo = productId1(tmp5[34]).useDiscountedPremiumProductInfo(
    premiumDiscountOffer,
    premiumItems,
  );
  ({ discountedProduct, discountedPriceString } = discountedPremiumProductInfo);
  const tmp25 = premiumType(obj2.useState(initialSelectedItem), 2);
  first = tmp25[0];
  closure_16 = tmp25[1];
  const tmp4Result1 = productId1(tmp5[34]);
  const items2 = [tmp6];
  const stateFromStores1 = productId1(tmp5[23]).useStateFromStores(items2, () => {
    let product = null;
    if (null != first) {
      product = orderRequired.getProduct(tmp.productId);
    }
    return product;
  });
  const tmp4Result2 = productId1(tmp5[23]);
  tmp13Result = tmp13(tmp5[36]);
  analyticsLocations2 = tmp13Result(
    analyticsLocations,
    tmp13(tmp5[37]).PREMIUM_PAYMENT_ACTION_SHEET,
  ).analyticsLocations;
  const tmp29 = premiumTrialOffer(tmp5[38])(() => productId1(premiumDiscountOffer[39]).getNewAnalyticsLoadId());
  closure_18 = tmp29;
  const items3 = [premiumType];
  memo = obj2.useMemo(() => {
    const obj = productId1(premiumDiscountOffer[17]);
    return obj.castPremiumSubscriptionAsSkuId(
      premiumTrialOffer(premiumDiscountOffer[17]).getSkuIdForPremiumType(premiumTrialOffer),
    );
  }, items3);
  const tmp4Result3 = productId1(tmp5[35]);
  obj = { analyticsLoadId: tmp29, analyticsLocation: null, analyticsLocations: null };
  obj = { object: constants2.BUTTON_CTA, object_type: constants3.BUY };
  let merged = Object.assign(analyticsLocation);
  obj[1] = obj;
  obj[2] = analyticsLocations2;
  basePurchaseFlowAnalyticsFields = productId1(tmp5[39]).getBasePurchaseFlowAnalyticsFields(obj);
  basePlanId = null;
  if (null != first) {
    basePlanId = first.basePlanId;
  }
  function onClose() {
    callback();
    premiumTrialOffer(premiumDiscountOffer[43]).hideActionSheet();
  }
  const tmp4Result4 = productId1(tmp5[39]);
  let result = productId1(tmp5[40]).isMobileWebRedirectCheckoutEnabled();
  c22 = result;
  premiumTrialOffer(tmp5[41])(() => {
    let obj = productId1(premiumDiscountOffer[42]);
    obj = {};
    const merged = Object.assign(basePurchaseFlowAnalyticsFields);
    obj.application_id = productId1;
    obj.subscription_plan_id = basePlanId;
    obj.sku_id = memo;
    let customCheckoutFlowForAnalytics;
    if (c22) {
      customCheckoutFlowForAnalytics = productId1(premiumDiscountOffer[40]).getCustomCheckoutFlowForAnalytics();
      const tmpResult = productId1(premiumDiscountOffer[40]);
    }
    obj.custom_checkout_flow = customCheckoutFlowForAnalytics;
    const result = obj.trackPaymentFlowStartedAnalyticsAndCTP(obj);
  });
  const items4 = [
    memo,
    basePurchaseFlowAnalyticsFields,
    tmp29,
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
                  const PaymentFlowStep = callback(10677).PaymentFlowStep;
                  if (dependencyMap) {
                    EXTERNAL_PAYMENT = PaymentFlowStep.MOBILE_WEB_REDIRECT_CHECKOUT;
                  } else {
                    EXTERNAL_PAYMENT = PaymentFlowStep.EXTERNAL_PAYMENT;
                  }
                  let obj4 = callback(10677);
                  let obj3 = { from_step: null, to_step: null, subscription_plan_gateway_plan_id: null, sku_id: null };
                  obj3[0] = callback(10677).PaymentFlowStep.PLAN_SELECT;
                  obj3[1] = EXTERNAL_PAYMENT;
                  obj3[2] = closure_15.productId;
                  obj3[3] = closure_19;
                  const paymentFlowStepAnalyticsFields = obj4.getPaymentFlowStepAnalyticsFields(_location, obj3);
                  if (!dependencyMap) {
                    let obj6 = closure_1_1(695);
                    obj6.track(closure_1_25.PAYMENT_FLOW_STEP, paymentFlowStepAnalyticsFields);
                  }
                  obj4 = { productId: null, onPaymentSuccess: null, onPaymentDismiss: null };
                  obj4[0] = closure_1_15.productId;
                  obj4[1] = EXTERNAL_PAYMENT;
                  obj4[2] = paymentFlowStepAnalyticsFields;
                  closure_1_13(obj4);
                  if (dependencyMap) {
                    const obj11 = callback(7157);
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
                  if (c5 instanceof closure_1_1(10702)) {
                    obj1 = callback(4837);
                    const subscriptions = obj1.fetchSubscriptions();
                    obj2 = closure_1_1(4858);
                    const obj8 = { title: null, body: null, hideActionSheet: true };
                    let intl = callback(1233).intl;
                    obj8[0] = intl.string(callback(1233).t["U+H+kd"]);
                    let intl2 = callback(1233).intl;
                    obj8[1] = intl2.string(callback(1233).t.F9ktNa);
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
      const intl3 = productId1(premiumDiscountOffer[19]).intl;
      let stringResult = intl3.string(productId1(premiumDiscountOffer[19]).t.rylrdY);
    } else if (closure_13) {
      const tmp2Result = tmp2(tmp3[58]);
      const intl2 = productId1(premiumDiscountOffer[19]).intl;
      const string = intl2.string;
      let rKD72m = productId1(premiumDiscountOffer[19]).t;
      if (isAndroidResult) {
        rKD72m = rKD72m.rKD72m;
        let stringResult1 = string(rKD72m);
      } else {
        stringResult1 = string(rKD72m.bboTul);
      }
      isAndroidResult = tmp2(tmp3[58]).isAndroid();
    } else {
      const intl = tmp2(tmp3[19]).intl;
      stringResult = intl.string(productId1(premiumDiscountOffer[19]).t.nIlrxd);
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
        const intl3 = productId1(premiumDiscountOffer[19]).intl;
        const obj10 = productId1(premiumDiscountOffer[58]);
        const tmp31 = closure_1_35;
        const t = productId1(premiumDiscountOffer[19]).t;
        obj = { paidURL: null, interval: null, cancelURL: null };
        obj[0] = closure_1_28.PAID_TERMS;
        const isAndroidResult = productId1(premiumDiscountOffer[58]).isAndroid();
        const tmp42 = productId1(premiumDiscountOffer[58]).isAndroid() ? t.tINI9V : t.ZWXtAj;
        obj[1] = premiumTrialOffer(premiumDiscountOffer[17]).getIntervalStringAsNoun(interval);
        const obj12 = premiumTrialOffer(premiumDiscountOffer[17]);
        obj[2] = premiumTrialOffer(premiumDiscountOffer[59]).getArticleURL(closure_1_29.PREMIUM_DETAILS_CANCEL_SUB);
        obj[2] = intl3.format(tmp42, obj);
        return tmp31(productId1(premiumDiscountOffer[18]).Text, obj);
      } else if (null != discountedPriceString) {
        obj1 = { style: null, variant: "text-xxs/medium", children: null };
        obj1[0] = userIsEligibleForBogoPromotion.legalDisclaimerText;
        const intl2 = productId1(premiumDiscountOffer[19]).intl;
        let obj2 = { buttonText: null, interval: null, cancelSubscriptionArticle: null, paidServiceTermsArticle: null };
        obj2[0] = memo1;
        obj2[1] = premiumTrialOffer(premiumDiscountOffer[17]).formatInterval(interval);
        const obj6 = premiumTrialOffer(premiumDiscountOffer[17]);
        obj2[2] = premiumTrialOffer(premiumDiscountOffer[59]).getArticleURL(closure_1_29.PREMIUM_DETAILS_CANCEL_SUB);
        const obj7 = premiumTrialOffer(premiumDiscountOffer[59]);
        obj2[3] = premiumTrialOffer(premiumDiscountOffer[59]).getArticleURL(closure_1_29.PAID_TERMS);
        obj1[2] = intl2.format(productId1(premiumDiscountOffer[19]).t["3uC7vj"], obj2);
        return closure_1_35(productId1(premiumDiscountOffer[18]).Text, obj1);
      } else {
        const obj14 = productId1(premiumDiscountOffer[58]);
        const t2 = productId1(premiumDiscountOffer[19]).t;
        const isAndroidResult1 = productId1(premiumDiscountOffer[58]).isAndroid();
        obj = { style: null, variant: "text-xxs/medium", children: null };
        obj[0] = userIsEligibleForBogoPromotion.legalDisclaimerText;
        const intl = productId1(premiumDiscountOffer[19]).intl;
        const obj3 = { paidURL: null, interval: null, ctaText: null };
        obj3[0] = closure_1_28.PAID_TERMS;
        obj2 = premiumTrialOffer(premiumDiscountOffer[17]);
        obj3[1] = obj2.getIntervalStringAsNoun(interval);
        obj3[2] = memo1;
        obj[2] = intl.format(productId1(premiumDiscountOffer[58]).isAndroid() ? t2.COObWR : t2["7wpqfj"], obj3);
        return closure_1_35(productId1(premiumDiscountOffer[18]).Text, obj);
      }
    }
  }, items6);
  obj1 = {
    ref: tmp4Result3.useBottomSheetRef().bottomSheetRef,
    handleDisabled: true,
    onDismiss: closure_16,
    startExpanded: true,
    children: null,
  };
  if (isPaymentsBlocked) {
    obj2 = { style: null, children: null };
    obj2[0] = tmp.blockedPaymentContainer;
    const items7 = [tmp39(tmp13(tmp5[61]), {})];
    obj3 = { variant: "floating", onPress: null };
    obj3[1] = onClose;
    items7[1] = tmp39(tmp4(tmp5[62]).ActionSheetHeaderBar, obj3);
    obj2[1] = items7;
    let tmp40Result = tmp40(ref, obj2);
  } else {
    obj4 = {
      premiumType: null,
      isPaymentSuccess: null,
      selectedPremiumType: null,
      trialOffer: null,
      discountOffer: null,
    };
    obj4[0] = premiumType;
    obj4[1] = tmp2;
    let premiumTier;
    if (first != null) {
      premiumTier = first.premiumTier;
    }
    obj4[2] = premiumTier;
    obj4[3] = premiumTrialOffer;
    let tmp44 = null;
    if (null != discountedPriceString) {
      tmp44 = premiumDiscountOffer;
    }
    obj4[4] = tmp44;
    const items8 = [tmp39(Header, obj4), ,];
    let obj5 = { style: null, children: null };
    obj5[0] = tmp.body;
    if ("in_mobile_web" === tmp3) {
      let obj6 = { size: "large", style: null };
      obj6[1] = tmp.loadingIndicator;
      let tmp40Result1 = tmp39(handlePremiumPurchase, obj6);
    } else if (tmp2) {
      let obj7 = { style: null, children: null };
      obj7[0] = tmp.contentActivated;
      let obj8 = { ref: null, accessible: true, accessibilityRole: "image", accessibilityLabel: null, children: null };
      obj8[0] = ref;
      const intl5 = tmp4(tmp5[19]).intl;
      obj8[3] = intl5.string(tmp4(tmp5[19]).t["Q+BB2w"]);
      let premiumTier1;
      if (first != null) {
        premiumTier1 = first.premiumTier;
      }
      if (memo.TIER_0 === premiumTier1) {
        if (tmp4Result6.isThemeDark(tmp14)) {
          let tmp13Result2 = tmp13(tmp5[52]);
        } else {
          tmp13Result2 = tmp13(tmp5[53]);
        }
        tmp4Result6 = tmp4(tmp5[51]);
      } else {
        if (tmp66.TIER_1 === premiumTier1) {
          if (tmp4Result7.isThemeDark(tmp14)) {
            let tmp13Result3 = tmp13(tmp5[54]);
          } else {
            tmp13Result3 = tmp13(tmp5[55]);
          }
          let tmp67 = tmp13Result3;
          tmp4Result7 = tmp4(tmp5[51]);
        } else if (tmp66.TIER_2 === premiumTier1) {
          if (tmp4Result8.isThemeDark(tmp14)) {
            let tmp13Result4 = tmp13(tmp5[56]);
          } else {
            tmp13Result4 = tmp13(tmp5[57]);
          }
          tmp67 = tmp13Result4;
          tmp4Result8 = tmp4(tmp5[51]);
        }
        const obj9 = { source: null };
        obj9[0] = tmp67;
        obj8[4] = tmp39(tmp13Result1, obj9);
        const items9 = [tmp39(tmp45, obj8)];
        let obj10 = { style: null, variant: "text-md/semibold", children: null };
        obj10[0] = tmp.contentActivatedText;
        let premiumTier2;
        if (first != null) {
          premiumTier2 = first.premiumTier;
        }
        if (tmp66.TIER_0 === premiumTier2) {
          const intl7 = tmp4(tmp5[19]).intl;
          let stringResult = intl7.string(tmp4(tmp5[19]).t["6WWrVM"]);
          obj10[2] = stringResult;
          obj10 = tmp39(tmp4(tmp5[18]).Text, obj10);
          items9[1] = obj10;
          obj7[1] = items9;
          tmp40Result = tmp40(tmp45, obj7);
        } else if (tmp66.TIER_1 !== premiumTier2) {
          if (tmp66.TIER_2 === premiumTier2) {
            const intl8 = tmp4(tmp5[19]).intl;
            stringResult = intl8.string(tmp4(tmp5[19]).t.I7xNzI);
          }
        }
        const intl6 = tmp4(tmp5[19]).intl;
        stringResult = intl6.string(tmp4(tmp5[19]).t.LAAgsy);
      }
      tmp13Result1 = tmp13(tmp5[63]);
    } else {
      let obj11 = { convertToMajorUnits: null };
      obj11[0] = tmp4(tmp5[58]).isAndroid();
      if (flag) {
        flag = !tmp21;
      }
      let obj12 = { style: null, children: null };
      obj12[0] = tmp.contentSelectPlan;
      if (tmp21) {
        const obj13 = { variant: "text-md/normal", color: "text-strong", style: null, children: null };
        obj13[2] = tmp.trialDisclaimer;
        let intl2 = tmp4(tmp5[19]).intl;
        obj13[3] = intl2.string(tmp4(tmp5[19]).t.u95Dt4);
        let tmp39Result = tmp39(tmp4(tmp5[18]).Text, obj13);
      } else {
        tmp39Result = null;
        if (null != discountedPriceString) {
          tmp39Result = null;
          if (null != discountedProduct) {
            tmp39Result = null;
            if (null != premiumType) {
              let obj14 = { children: null };
              const obj15 = { variant: "text-md/normal", color: "text-strong", style: null, children: null };
              obj15[2] = tmp.discountDisclaimer;
              let intl = tmp4(tmp5[19]).intl;
              const obj16 = { regularPrice: null, discountedPrice: null };
              obj16[0] = discountedProduct.priceString;
              obj16[1] = discountedPriceString;
              obj15[3] = intl.format(tmp4(tmp5[19]).t.yBn7uz, obj16);
              const items10 = [tmp39(tmp4(tmp5[18]).Text, obj15)];
              const obj17 = { style: null };
              const items11 = [,];
              ({ divider: arr11[0], offerDividerMargin: arr11[1] } = tmp);
              obj17[0] = items11;
              items10[1] = tmp39(tmp45, obj17);
              obj14[0] = items10;
              tmp39Result = tmp40(tmp45, obj14);
            }
          }
        }
      }
      const items12 = [tmp39Result];
      let stringResult1;
      const tmp4Result9 = tmp4(tmp5[58]);
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
      let tmp39Result1 = null != stateFromStores1;
      if (tmp39Result1) {
        tmp39Result1 = "HR" === stateFromStores1.countryCode;
      }
      if (tmp39Result1) {
        tmp39Result1 = stateFromStores1.currencyCode.toLowerCase() === constants4.EUR;
        const str3 = stateFromStores1.currencyCode;
      }
      if (tmp39Result1) {
        const obj19 = { message: null };
        const intl4 = tmp4(tmp5[19]).intl;
        const obj20 = { kunaPriceWithCurrency: null };
        const tmp13Result6 = tmp13(tmp5[65]);
        obj20[0] = tmp4(tmp5[25]).formatPrice(stateFromStores1.price * closure_31, constants4.HRK, obj11);
        obj19[0] = intl4.formatToPlainString(tmp4(tmp5[19]).t["9hnZoK"], obj20);
        tmp39Result1 = tmp39(tmp13Result6, obj19);
        const tmp4Result10 = tmp4(tmp5[25]);
      }
      const items14 = [tmp39Result1];
      let productId;
      if (first != null) {
        productId = first.productId;
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
      obj21[0] = productId;
      productId1 = undefined;
      if (first != null) {
        productId1 = first.productId;
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
          selectedProductId: productId1,
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
      let tmp63 = stateFromStores;
      if (!stateFromStores) {
        tmp63 = isPatchOrderLoading;
      }
      obj21[5] = tmp63;
      items14[1] = tmp39(tmp4(tmp5[66]).RadioGroup, obj21);
      obj18[5] = items14;
      items12[1] = tmp40(tmp13(tmp5[64]), obj18);
      obj12[1] = items12;
      const items15 = [tmp40(tmp45, obj12)];
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
      let tmp76 = stateFromStores;
      if (!stateFromStores) {
        tmp76 = isPatchOrderLoading;
      }
      obj22[5] = tmp76;
      if (!stateFromStores) {
        stateFromStores = isPatchOrderLoading;
      }
      const obj23 = { children: null };
      obj22[6] = stateFromStores;
      items15[1] = tmp39(PremiumPlanSelectionActionSheetCTA, obj22);
      obj23[0] = items15;
      tmp40Result1 = tmp40(tmp41, obj23);
      const tmp13Result5 = tmp13(tmp5[64]);
      const tmp75 = PremiumPlanSelectionActionSheetCTA;
    }
    const items16 = [tmp40Result1];
    let tmp79 = !result;
    if (!result) {
      tmp79 = memo2;
    }
    const obj24 = { children: null };
    items16[1] = tmp79;
    obj5[1] = items16;
    items8[1] = tmp40(ref, obj5);
    const obj25 = { variant: "floating", onPress: null };
    obj25[1] = onClose;
    items8[2] = tmp39(tmp4(tmp5[62]).ActionSheetHeaderBar, obj25);
    obj24[0] = items8;
    tmp40Result = tmp40(tmp41, obj24);
    let tmp42 = Header;
  }
  obj1[4] = tmp40Result;
  return closure_35(productId1(tmp5[60]).BottomSheet, obj1);
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
  const NitroACOMSubscriptionExperiment = TIER_2(8229).NitroACOMSubscriptionExperiment;
  let obj = TIER_2(1234);
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
    let tmpResult = tmp(7201);
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
    tmpResult = tmp(10705);
    const isEligibleForBogoOffer = tmpResult.useIsEligibleForBogoOffer();
    if (null == fn3) {
      let premiumBundlesWithPredicate = tmp(7161).getPremiumBundlesWithPredicate(fn);
      const tmpResult1 = tmp(7161);
    } else {
      const premiumBundlesWithPredicate1 = tmp(7161).getPremiumBundlesWithPredicate(fn);
      premiumBundlesWithPredicate = premiumBundlesWithPredicate1.sort(fn3);
      const tmpResult2 = tmp(7161);
    }
    if (isEligibleForBogoOffer) {
      fn2 = (interval) => interval.interval === constants.MONTH;
    }
    const found = premiumBundlesWithPredicate.find(fn2);
    if (null != found) {
      const subscriptionItemsForProduct = tmp(7161).getSubscriptionItemsForProduct(found.productId);
      let mapped = subscriptionItemsForProduct.map((planId) => {
        const obj = { subscriptionPlanId: planId.planId, skuId: null, quantity: null };
        const obj2 = TIER_2(4139);
        obj[1] = obj2.castPremiumSubscriptionAsSkuId(callback(4139).getSkuIdForPlan(planId.planId));
        obj[2] = planId.quantity;
        return obj;
      });
      const tmpResult3 = tmp(7161);
    } else {
      obj1 = { subscriptionPlanId: null, skuId: null, quantity: 1 };
      obj1[0] = closure_21.PREMIUM_YEAR_TIER_2;
      obj1[1] = tmp(4139).castPremiumSubscriptionAsSkuId(TIER_22.TIER_2);
      mapped = [obj1];
      const tmpResult4 = tmp(4139);
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
      return callback(4445).hideActionSheet(closure_24);
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
