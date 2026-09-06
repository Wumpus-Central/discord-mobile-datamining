// discord_app/modules/virtual_currency/checkout/OrbCheckoutUtils.tsx
import CollectiblesShopConstants from "../../collectibles/CollectiblesShopConstants.tsx";
import util from "../../../intl/index.native.tsx";
import OrderConstants from "../../payments/OrderConstants.tsx";
import OrderActionCreators from "../../payments/OrderActionCreators.tsx";
import Constants from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ CurrencyCodes: c2, MarketingURLs: c3, PriceSetAssignmentPurchaseTypes: closure_4 } = Constants);
const EXTERNAL_PRODUCT_SKU_IDS = CollectiblesShopConstants.EXTERNAL_PRODUCT_SKU_IDS;
const ConstraintReasonCode = OrderConstants.ConstraintReasonCode;
const result = size.fileFinishedImporting("modules/virtual_currency/checkout/OrbCheckoutUtils.tsx");

export const getOrbPriceFromPrices = function getOrbPriceFromPrices(prices, memo1) {
  if (memo1) {
    if (null != prices[React4.PREMIUM_TIER_2]) {
      let tmp2 = prices[React4.PREMIUM_TIER_2];
    }
    let substr;
    if (tmp2 != null) {
      const countryPrices = tmp2.countryPrices;
      if (countryPrices != null) {
        prices = countryPrices.prices;
        if (prices != null) {
          substr = prices.slice(0, 2);
        }
      }
    }
    if (substr == null) {
      substr = [];
    }
    let found = substr.find((currency) => currency.currency === constants.DISCORD_ORB);
    if (found == null) {
      found = null;
    }
    return found;
  }
  tmp2 = prices[React4.DEFAULT];
};
export const getOrbCheckoutDisclaimerMessage = function getOrbCheckoutDisclaimerMessage(skuId) {
  const intl = util.intl;
  const obj = { buyButtonLabel: null, paidServiceTermURL: null, virtualGoodsURL: null };
  const intl2 = util.intl;
  obj.buyButtonLabel = intl2.string(util.t["zLch/S"]);
  ({ PAID_TERMS: obj.paidServiceTermURL, PAID_TERMS_VIRTUAL_GOODS: obj.virtualGoodsURL } = React3);
  const intl3 = util.intl;
  let stringResult = intl3.string(util.t["Sxed/G"]);
  if (skuId === EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
    const intl5 = tmp(1114).intl;
    stringResult = intl5.string(tmp(1114).t.APcKRo);
  } else if (skuId === tmp5.FRACTIONAL_PREMIUM) {
    const intl4 = tmp(1114).intl;
    stringResult = intl4.string(tmp(1114).t.FhJ74j);
  }
  const items = [intl.format(util.t["5qdUrO"], obj), " ", stringResult];
  return items;
};
export const resolveOrbCheckoutErrorMessage = function resolveOrbCheckoutErrorMessage(code, arg1) {
  if (null == code) {
    return null;
  } else {
    let keFvXM = dependencyMap;
    let OrderSigningFailedWithConstraintsError = OrderActionCreators.OrderSigningFailedWithConstraintsError;
    if (!(code instanceof OrderSigningFailedWithConstraintsError)) {
      if (code instanceof tmp(7243).OrderProcessingPendingError) {
        const intl5 = tmp(1114).intl;
        let stringResult = intl5.string(tmp(1114).t["2BmwgV"]);
      } else if (code.code === tmp(4240).ErrorCodes.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE) {
        const intl4 = tmp(1114).intl;
        stringResult = intl4.string(tmp(1114).t.keFvXM);
      } else if (code.code === tmp(4240).ErrorCodes.ALREADY_PURCHASED) {
        const intl3 = tmp(1114).intl;
        stringResult = intl3.string(tmp(1114).t.m371Mx);
      } else if (code.code === tmp(4240).ErrorCodes.BILLING_ORDER_NOT_SIGNABLE) {
        const intl2 = tmp(1114).intl;
        stringResult = intl2.string(tmp(1114).t.ZHgEG7);
      } else {
        const intl = tmp(1114).intl;
        stringResult = intl.string(tmp(1114).t.fqJZ11);
      }
    } else {
      OrderSigningFailedWithConstraintsError = arg1;
    }
    if (ConstraintReasonCode.INSUFFICIENT_ORB_BALANCE === OrderSigningFailedWithConstraintsError) {
      const intl9 = tmp(1114).intl;
      keFvXM = tmp(1114).t.keFvXM;
      let stringResult1 = intl9.string(keFvXM);
    } else {
      if (tmp3.SKU_ALREADY_OWNED === OrderSigningFailedWithConstraintsError) {
        const intl8 = tmp(1114).intl;
        stringResult1 = intl8.string(tmp(1114).t.m371Mx);
      } else if (tmp3.BUNDLE_PARTIALLY_OWNED !== OrderSigningFailedWithConstraintsError) {
        const intl6 = tmp(1114).intl;
        stringResult1 = intl6.string(tmp(1114).t.fqJZ11);
      }
      const intl7 = tmp(1114).intl;
      stringResult1 = intl7.string(tmp(1114).t.v9oC0p);
    }
  }
};
