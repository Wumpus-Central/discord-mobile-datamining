// discord_app/utils/PremiumUtils.tsx
import LoggerDefault from "../modules/debug/Logger.tsx";
import _modDef38 from "../../_runtime/metro/00038__.js";
import get_initialized from "../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../_runtime/00576_react.js";
import DurationsDefault from "Durations.tsx";
import intl30 from "../intl/index.native.tsx";
import PerksStateUtils from "../modules/premium/perks_state/PerksStateUtils.tsx";
import user2 from "../../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx";
import PremiumTypeUtils from "PremiumTypeUtils.tsx";
import _modDef3205 from "../modules/premium/premium_group/PremiumGroup.messages.js";
import _modDef4461 from "../../_runtime/metro/04461__.js";
import SubscriptionPlanRecord from "../records/SubscriptionPlanRecord.tsx";
import PremiumSubscription from "../modules/premium/PremiumSubscription.tsx";
import PremiumGroupConstants from "../modules/premium/premium_group/PremiumGroupConstants.tsx";
import BillingUtils from "BillingUtils.tsx";
import DateUtils from "DateUtils.tsx";
import openURLDefault from "../lib/openURL.tsx";
import FileSizeUtils from "FileSizeUtils.tsx";
import PriceUtils from "PriceUtils.tsx";
import NitroFileUploadExperiments from "../modules/premium/experiments/NitroFileUploadExperiments.tsx";
import PremiumFeatureUtils from "PremiumFeatureUtils.tsx";
import CheckoutError from "../modules/checkout/CheckoutError.tsx";
import useFPDurationLeft from "../modules/billing/hooks/useFPDurationLeft.tsx";
import ProductCatalog from "../modules/premium/ProductCatalog.tsx";
import _slicedToArray from "../../_runtime/metro/00032__slicedToArray.js";
import react from "../../_runtime/00019_react.js";
import UserStore from "../stores/UserStore.tsx";
import BillingInfoStore from "../stores/billing/BillingInfoStore.tsx";
import PaymentSourceStore from "../stores/billing/PaymentSourceStore.tsx";
import SubscriptionPlanStore from "../stores/billing/SubscriptionPlanStore.tsx";
import SubscriptionStore from "../stores/billing/SubscriptionStore.tsx";
import Constants_mod from "../Constants.tsx";
import PremiumConstants from "../modules/premium/PremiumConstants.tsx";
import Constants_mod2 from "../../discord_common/js/shared/Constants.tsx";
import ReactCompilerGating_mod from "../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../_runtime/metro/00002__.js";

let importDefault, obj, subscriptionPlanId;

let SubscriptionPlans;
let canUseCollectibles;
let canUseQuestOrbMultiplier;
let closure_12;
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
let closure_31;
let closure_32;
let closure_33;
let closure_34;
let closure_35;
let closure_36;
let closure_37;
let closure_38;
let closure_39;
let closure_40;
let closure_41;
let closure_42;
let closure_44;
let closure_45;
let closure_46;
let closure_48;
let closure_49;
let closure_50;
let getSkuIdForPlan;
let map1;
let unpackModuleId;
const f88594 = (item) => {
  const items = [,];
  ({ id: arr[0], price: arr[1] } = item);
  return items;
};
const f88606 = (planId) => set.has(planId.planId);
const f88608 = (planId) => !set.has(planId.planId);
const f88612 = (planId) => set.has(planId.planId);
const f88613 = (skuId) => skuId.skuId;
const f88614 = (acc, item) => {
  let first;
  let tmp3;
  [first, tmp3] = closure_1_23[item];
  let num = 1;
  if (constants.HOUR !== first) {
    num = 1;
    if (constants.DAY === first) {
      num = 24;
    }
  }
  return acc + num * tmp3;
};
function getDefaultPrice(PREMIUM_MONTH_TIER_2, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let flag2 = flag;
  if (flag === undefined) {
    flag2 = false;
  }
  let flag3 = flag2;
  const tmp = currency;
  if (flag2 === undefined) {
    flag3 = true;
  }
  let paymentSourceId = PaymentSourceStore.defaultPaymentSourceId;
  const premiumTypeSubscription = SubscriptionStore.getPremiumTypeSubscription();
  const tmp3 = null != premiumTypeSubscription && null != premiumTypeSubscription.paymentSourceId;
  if (tmp3) {
    paymentSourceId = premiumTypeSubscription.paymentSourceId;
  }
  obj = { paymentSourceId, currency: tmp };
  return getPrice(PREMIUM_MONTH_TIER_2, flag, flag2, obj, flag3);
}
function getPrice(planId) {
  let contextPlanPrices;
  let currency;
  let currency2;
  let obj21;
  let obj8;
  let obj9;
  let paymentSourceId;
  let paymentSourceId2;
  let purchaseType;
  let str;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let flag2 = arg2;
  if (arg2 === undefined) {
    flag2 = false;
  }
  obj = arg3;
  if (arg3 === undefined) {
    obj = {};
  }
  let flag3 = arg4;
  if (arg4 === undefined) {
    flag3 = true;
  }
  ({ paymentSourceId, currency, contextPlanPrices } = obj);
  if (null != contextPlanPrices) {
    const tmp2 =
      null != currency && null != contextPlanPrices[planId] && contextPlanPrices[planId].currency !== currency;
    if (null != contextPlanPrices[planId]) {
      if (!tmp2) {
        const obj3 = { amount: null, currency: null, exponent: null, tax: 0, taxInclusive: false };
        ({ amount: obj2.amount, currency: obj2.currency, exponent: obj2.exponent } = contextPlanPrices[planId]);
        return obj3;
      }
    }
  }
  if (null != SubscriptionPlanStore.get(planId)) {
    let first;
    let str2 = map1.DEFAULT;
    if (flag2) {
      str2 = map1.GIFT;
    } else if (flag) {
      str2 = map1.PREMIUM_TIER_1;
    }
    const obj4 = { paymentSourceId, purchaseType: str2, currency };
    ({ paymentSourceId: paymentSourceId2, purchaseType, currency: currency2 } = obj4);
    const obj5 = { paymentSourceId: paymentSourceId2, purchaseType };
    const arr = experimentalGetPrices(planId, obj5);
    if (0 === arr.length) {
      const _HermesInternal = HermesInternal;
      logger.warn(
        "No prices found for planId: " +
          planId +
          ", paymentSourceId: " +
          paymentSourceId2 +
          ", purchaseType: " +
          purchaseType,
      );
    }
    if (null != currency2) {
      let found = arr.find((currency) => currency.currency === currency.toLowerCase());
      if (null == found) {
        let found1;
        if (null != paymentSourceId2) {
          const obj6 = { purchaseType };
          const tmp11Result = experimentalGetPrices(planId, obj6);
          found1 = tmp11Result.find((currency) => currency.currency === currency.toLowerCase());
        }
        found = found1;
      }
      first = found;
    } else {
      first = arr[0];
    }
    if (null == first) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Couldn't find price");
      if (flag3) {
        const obj7 = { extra: obj8, tags: obj9 };
        obj8 = { paymentSourceId };
        obj9 = { purchaseType: str2.toString(), planId, currency };
        const captureBillingException2 = BillingUtils.captureBillingException;
        BillingUtils;
        if (currency == null) {
          currency = "unknown";
        }
        const result = captureBillingException2(error, obj7);
      }
      throw error;
    } else {
      return first;
    }
  } else {
    const _Error2 = Error;
    const self3 = this;
    const self4 = this;
    const error1 = new Error("Plan not found");
    if (flag3) {
      const obj10 = { planId, currency: str };
      str = currency;
      const captureBillingException = BillingUtils.captureBillingException;
      BillingUtils;
      if (currency == null) {
        str = "unknown";
      }
      const obj11 = { tags: obj10, extra: obj21 };
      obj21 = { isGift: flag2 };
      const merged = Object.assign(obj);
      const result1 = captureBillingException(error1, obj11);
    }
    throw error1;
  }
}
function getPurchaseTypePrices(planId, DEFAULT) {
  const value = SubscriptionPlanStore.get(planId);
  if (null == value) {
    const _Error3 = Error;
    const self5 = this;
    const self6 = this;
    const error = new Error("Plan not found");
    obj = { tags: obj2 };
    obj2 = { planId, purchaseType: DEFAULT.toString() };
    const captureBillingException = BillingUtils.captureBillingException;
    BillingUtils;
    const result = captureBillingException(error, obj);
    throw error;
  } else if (null == value.prices) {
    const _Error2 = Error;
    const _HermesInternal3 = HermesInternal;
    const self3 = this;
    const self4 = this;
    const error1 = new Error("No prices returned for " + planId + ", is your user in the experiment?");
    throw error1;
  } else if (null == value.prices[DEFAULT]) {
    const _JSON = JSON;
    const _Object = Object;
    const _HermesInternal = HermesInternal;
    logger.info("Purchase types: " + JSON.stringify(Object.keys(value.prices)));
    const _Error = Error;
    const _HermesInternal2 = HermesInternal;
    const self = this;
    const self2 = this;
    const error2 = new Error("No prices returned for purchase type " + DEFAULT + " for plan " + planId);
    throw error2;
  } else {
    return value.prices[DEFAULT];
  }
}
function experimentalGetPrices(planId, arg1) {
  let obj3;
  let obj4;
  let obj7;
  let paymentSourceId;
  let purchaseType;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = { purchaseType: map1.DEFAULT };
    obj = { purchaseType: map1.DEFAULT };
  }
  ({ paymentSourceId, purchaseType } = tmp);
  const tmp3 = getPurchaseTypePrices(planId, purchaseType);
  if (null != paymentSourceId) {
    if (null == tmp3.paymentSourcePrices[paymentSourceId]) {
      const _JSON = JSON;
      const _Object = Object;
      const _HermesInternal = HermesInternal;
      logger.info("Payment sources IDs: " + JSON.stringify(Object.keys(tmp3.paymentSourcePrices)));
      const _HermesInternal2 = HermesInternal;
      logger.info("prices: " + tmp3.paymentSourcePrices[paymentSourceId]);
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Missing prices for payment source on subscription plan");
      obj2 = { extra: obj3, tags: obj4 };
      obj3 = { paymentSourceId };
      obj4 = { purchaseType: purchaseType.toString(), planId };
      const captureBillingException = BillingUtils.captureBillingException;
      BillingUtils;
      const result = captureBillingException(error, obj2);
    } else if (0 !== tmp3.paymentSourcePrices[paymentSourceId].length) {
      return tmp3.paymentSourcePrices[paymentSourceId];
    }
  }
  if (null == tmp3.countryPrices.prices) {
    const _JSON2 = JSON;
    const _HermesInternal3 = HermesInternal;
    logger.info("countryPrices: " + JSON.stringify(tmp3.countryPrices));
    const _Error2 = Error;
    const self3 = this;
    const self4 = this;
    const error1 = new Error("Missing prices for country");
    const obj6 = { tags: obj7 };
    obj7 = { countryCode: tmp3.countryPrices.countryCode, planId };
    const obj5 = BillingUtils;
    const result1 = obj5.captureBillingException(error1, obj6);
    throw error1;
  } else {
    return tmp3.countryPrices.prices;
  }
}
function getServerPriceFromClientPrice(amount) {
  return { amount: amount.amount, currency: amount.currency, exponent: amount.exponent };
}
function getItemPlansTotalServerPrice(items, currency, id) {
  obj = { currency, amount: 0, tax: 0, taxInclusive: false };
  obj2 = PremiumSubscription;
  const baseSubscriptionItemForSubscriptionItems = obj2.getBaseSubscriptionItemForSubscriptionItems(items);
  let premiumType;
  if (null != baseSubscriptionItemForSubscriptionItems) {
    premiumType = closure_42[baseSubscriptionItemForSubscriptionItems.planId].premiumType;
  }
  const tmpResult = PremiumTypeUtils;
  const isPremiumAtLeastResult = tmpResult.isPremiumAtLeast(premiumType, closure_39.TIER_0);
  const tmpResult2 = PremiumTypeUtils;
  const isPremiumAtLeastResult1 = tmpResult2.isPremiumAtLeast(premiumType, closure_39.TIER_2);
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp21;
    let tmp9 = nextResult;
    let tmp11 = isPremiumAtLeastResult1;
    if (!set.has(nextResult.planId)) {
      let hasItem = set2.has(tmp9.planId);
      let tmp15 = !hasItem && isPremiumAtLeastResult;
      tmp11 = tmp15;
    }
    let tmp16 = tmp11;
    if (undefined === id) {
      let flag2 = false;
      tmp21 = getDefaultPrice(tmp9.planId, tmp16, false, currency);
    } else {
      let obj3 = { paymentSourceId: id, currency };
      let flag = false;
      tmp21 = getPrice(tmp9.planId, tmp16, false, obj3);
    }
    obj.amount = obj.amount + tmp21.amount * tmp9.quantity;
    continue;
  }
  return getServerPriceFromClientPrice(obj);
}
function getDisplayName(planId, arg1, arg2) {
  let obj8;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let flag2 = arg2;
  if (arg2 === undefined) {
    flag2 = false;
  }
  if (SubscriptionPlans.PREMIUM_MONTH_TIER_0 === planId) {
    let formatResult;
    const intl15 = intl30.intl;
    if (flag) {
      obj2 = { duration };
      formatResult = intl15.format(intl30.t.TZXHNj, obj2);
    } else {
      const string8 = intl15.string;
      const t8 = intl30.t;
      if (flag2) {
        formatResult = string8(t8["81iAgs"]);
      } else {
        formatResult = string8(t8["0efVPy"]);
      }
    }
    return formatResult;
  } else if (SubscriptionPlans.PREMIUM_YEAR_TIER_0 === planId) {
    let formatResult1;
    const intl14 = intl30.intl;
    if (flag) {
      const obj3 = { duration };
      formatResult1 = intl14.format(intl30.t.eqRhC7, obj3);
    } else {
      const string7 = intl14.string;
      const t7 = intl30.t;
      if (flag2) {
        formatResult1 = string7(t7.UvzqY1);
      } else {
        formatResult1 = string7(t7.eoVuBn);
      }
    }
    return formatResult1;
  } else if (SubscriptionPlans.PREMIUM_MONTH_TIER_1 === planId) {
    let string6Result;
    const intl13 = intl30.intl;
    const string6 = intl13.string;
    const t6 = intl30.t;
    if (flag2) {
      string6Result = string6(t6["g/dH5g"]);
    } else {
      string6Result = string6(t6["7O6qSq"]);
    }
    return string6Result;
  } else if (SubscriptionPlans.PREMIUM_YEAR_TIER_1 === planId) {
    let string5Result;
    const intl12 = intl30.intl;
    const string5 = intl12.string;
    const t5 = intl30.t;
    if (flag2) {
      string5Result = string5(t5.pdZJaq);
    } else {
      string5Result = string5(t5.Md5xbi);
    }
    return string5Result;
  } else if (SubscriptionPlans.PREMIUM_MONTH_TIER_2 === planId) {
    let formatResult2;
    const intl11 = intl30.intl;
    if (flag) {
      const obj4 = { duration };
      formatResult2 = intl11.format(intl30.t.aI6QXz, obj4);
    } else {
      const string4 = intl11.string;
      const t4 = intl30.t;
      if (flag2) {
        formatResult2 = string4(t4.SmVbHc);
      } else {
        formatResult2 = string4(t4.FKYNC6);
      }
    }
    return formatResult2;
  } else if (SubscriptionPlans.PREMIUM_GROUP_MONTH === planId) {
    let stringResult;
    const intl10 = intl30.intl;
    if (flag2) {
      stringResult = intl10.string(intl30.t.SmVbHc);
    } else {
      const formatToPlainString = intl10.formatToPlainString;
      const obj5 = { premiumGroupProductName: closure_47() };
      const v8bPDtb = _modDef3205["8bPDtb"];
      stringResult = formatToPlainString(v8bPDtb, obj5);
    }
    return stringResult;
  } else if (SubscriptionPlans.PREMIUM_YEAR_TIER_2 === planId) {
    let formatResult3;
    const intl9 = intl30.intl;
    if (flag) {
      const obj6 = { duration };
      formatResult3 = intl9.format(intl30.t["1wBcPi"], obj6);
    } else {
      const string3 = intl9.string;
      const t3 = intl30.t;
      if (flag2) {
        formatResult3 = string3(t3.JIq4O1);
      } else {
        formatResult3 = string3(t3["cfu/5d"]);
      }
    }
    return formatResult3;
  } else if (SubscriptionPlans.PREMIUM_3_MONTH_TIER_2 === planId) {
    const intl8 = intl30.intl;
    return intl8.string(intl30.t.wCbINr);
  } else if (SubscriptionPlans.PREMIUM_6_MONTH_TIER_2 === planId) {
    const intl7 = intl30.intl;
    return intl7.string(intl30.t["e3/ArU"]);
  } else if (SubscriptionPlans.PREMIUM_MONTH_GUILD === planId) {
    let string2Result;
    const intl6 = intl30.intl;
    const string2 = intl6.string;
    const t2 = intl30.t;
    if (flag2) {
      string2Result = string2(t2["6ZR3By"]);
    } else {
      string2Result = string2(t2["h80cx/"]);
    }
    return string2Result;
  } else if (SubscriptionPlans.PREMIUM_YEAR_GUILD === planId) {
    let stringResult1;
    const intl5 = intl30.intl;
    const string = intl5.string;
    const t = intl30.t;
    if (flag2) {
      stringResult1 = string(t.YDpAzZ);
    } else {
      stringResult1 = string(t.ZHkls0);
    }
    return stringResult1;
  } else if (SubscriptionPlans.PREMIUM_3_MONTH_GUILD === planId) {
    const intl4 = intl30.intl;
    return intl4.string(intl30.t.EZHHB6);
  } else if (SubscriptionPlans.PREMIUM_6_MONTH_GUILD === planId) {
    const intl3 = intl30.intl;
    return intl3.string(intl30.t.X2KDO2);
  } else if (SubscriptionPlans.PREMIUM_MONTH_LEGACY === planId) {
    const intl2 = intl30.intl;
    return intl2.string(intl30.t.PD6k79);
  } else if (SubscriptionPlans.PREMIUM_YEAR_LEGACY === planId) {
    const intl = intl30.intl;
    return intl.string(intl30.t.LtJgTC);
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Unsupported plan");
    const obj7 = { tags: obj8 };
    obj8 = { planId };
    obj = BillingUtils;
    const result = obj.captureBillingException(error, obj7);
    throw error;
  }
}
function getPlanDescription(arg0) {
  let CANCELED;
  let activeDiscountInfo;
  let addResult;
  let duration;
  let duration1;
  let format3Result1;
  let fractionalPremiumInfo;
  let hasDiscountApplied;
  let hasFractionalPremiumWithSub;
  let includePremiumGuilds;
  let planId;
  let price;
  let renewalInvoiceWithEntitlementsPreview;
  let renewalInvoiceWithoutEntitlementsPreview;
  let stringResult;
  let stringResult1;
  let stringResult2;
  let subscription;
  let tmp5Result;
  let tmp5Result3;
  let tmp5Result4;
  ({
    subscription,
    planId,
    price,
    activeDiscountInfo,
    renewalInvoiceWithoutEntitlementsPreview,
    renewalInvoiceWithEntitlementsPreview,
    hasFractionalPremiumWithSub,
  } = arg0);
  const id = tmp.id;
  let paymentSourceId = PaymentSourceStore.defaultPaymentSourceId;
  ({ includePremiumGuilds, hasDiscountApplied, fractionalPremiumInfo } = arg0);
  const premiumTypeSubscription = SubscriptionStore.getPremiumTypeSubscription();
  const tmp3 = null != premiumTypeSubscription && null != premiumTypeSubscription.paymentSourceId;
  if (tmp3) {
    paymentSourceId = premiumTypeSubscription.paymentSourceId;
  }
  obj = { paymentSourceId, currency: undefined };
  const tmp4 = getPrice(id, false, false, obj, true);
  const interval = tmp.interval;
  obj2 = PriceUtils;
  const formatPriceResult = obj2.formatPrice(tmp4.amount, tmp4.currency);
  if (constants7.MONTH === interval) {
    const intl2 = intl30.intl;
    stringResult = intl2.string(intl30.t.FPybU7);
  } else if (tmp8.YEAR === interval) {
    const intl = intl30.intl;
    stringResult = intl.string(intl30.t.tfqrhj);
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Unexpected interval");
    throw error;
  }
  const combined = "" + formatPriceResult + "/" + stringResult;
  const renewalMutations = subscription.renewalMutations;
  let tmp16 = subscription.status === constants4.CANCELED;
  const tmp14 = null != renewalInvoiceWithEntitlementsPreview && 0 === renewalInvoiceWithEntitlementsPreview.subtotal;
  if (!tmp16) {
    tmp16 =
      null != renewalMutations && isNoneSubscription(renewalMutations.planId) && !subscription.isPurchasedExternally;
    const tmp17 =
      null != renewalMutations && isNoneSubscription(renewalMutations.planId) && !subscription.isPurchasedExternally;
  }
  if (!tmp16) {
    let tmp19 = null == subscription.paymentSourceId && !subscription.isPurchasedExternally;
    if (tmp19) {
      const currentUser = UserStore.getCurrentUser();
      let hasFreePremiumResult;
      if (currentUser != null) {
        hasFreePremiumResult = currentUser.hasFreePremium();
      }
      tmp19 = !hasFreePremiumResult;
    }
    if (tmp19) {
      tmp19 = !tmp14;
    }
    tmp16 = tmp19;
  }
  let tmp23 = subscription.status === constants4.UNPAID && null !== subscription.latestInvoice;
  if (tmp23) {
    const latestInvoice = subscription.latestInvoice;
    let status;
    if (latestInvoice != null) {
      status = latestInvoice.status;
    }
    tmp23 = status === unpackModuleId.OPEN;
  }
  if (tmp16) {
    CANCELED = constants4.CANCELED;
  } else {
    CANCELED = tmp23 ? constants4.UNPAID : subscription.status;
  }
  let flag;
  if (renewalInvoiceWithoutEntitlementsPreview != null) {
    flag = renewalInvoiceWithoutEntitlementsPreview.taxInclusive;
  }
  if (flag == null) {
    const latestInvoice2 = subscription.latestInvoice;
    let taxInclusive;
    if (latestInvoice2 != null) {
      taxInclusive = latestInvoice2.taxInclusive;
    }
    flag = taxInclusive;
  }
  if (flag == null) {
    flag = true;
  }
  let num2 = 0;
  if (includePremiumGuilds) {
    const additionalPlans = subscription.additionalPlans;
    const items = [__initData5.GUILD];
    const planIdsForSkus = SubscriptionPlanStore.getPlanIdsForSkus(items);
    _modDef38(null != planIdsForSkus, "Missing guildSubscriptionPlanIds");
    const found = additionalPlans.find((planId) => planIdsForSkus.includes(planId.planId));
    let num3 = 0;
    if (null != found) {
      num3 = found.quantity;
    }
    num2 = num3;
  }
  const sum = closure_28 + num2;
  const intl3 = intl30.intl;
  if (null != price && null == subscription.paymentGateway) {
    let formatResult;
    const format = intl3.format;
    const t = intl30.t;
    if (flag) {
      const obj3 = { price };
      formatResult = format(t["cd+hqB"], obj3);
    } else {
      const obj4 = { price };
      formatResult = format(t.NUkcpF, obj4);
    }
    stringResult1 = formatResult;
  } else {
    stringResult1 = intl3.string(intl30.t.zYx3Y6);
  }
  const intl4 = intl30.intl;
  if (null != price && null == subscription.paymentGateway) {
    let format2Result;
    const format2 = intl4.format;
    const t2 = intl30.t;
    if (flag) {
      const obj5 = { price };
      format2Result = format2(t2.VsKcFB, obj5);
    } else {
      const obj6 = { price };
      format2Result = format2(t2.hJ5xEX, obj6);
    }
    stringResult2 = format2Result;
  } else {
    stringResult2 = intl4.string(intl30.t["8rSipI"]);
  }
  const intl5 = intl30.intl;
  const format3 = intl5.format;
  const t3 = intl30.t;
  if (null != price && null == subscription.paymentGateway) {
    let format3Result;
    if (flag) {
      const obj7 = { price, num: sum };
      format3Result = format3(t3["jRy6/J"], obj7);
    } else {
      const obj8 = { price, num: sum };
      format3Result = format3(t3.tTNE8M, obj8);
    }
    format3Result1 = format3Result;
  } else {
    const obj9 = { num: sum };
    format3Result1 = format3(t3["U+z/HJ"], obj9);
  }
  if (SubscriptionPlans.PREMIUM_MONTH_TIER_0 !== planId) {
    if (SubscriptionPlans.PREMIUM_YEAR_TIER_0 !== planId) {
      if (SubscriptionPlans.PREMIUM_MONTH_TIER_1 !== planId) {
        if (SubscriptionPlans.PREMIUM_YEAR_TIER_1 !== planId) {
          if (SubscriptionPlans.PREMIUM_MONTH_TIER_2 !== planId) {
            if (SubscriptionPlans.PREMIUM_YEAR_TIER_2 !== planId) {
              if (SubscriptionPlans.PREMIUM_3_MONTH_TIER_2 !== planId) {
                if (SubscriptionPlans.PREMIUM_6_MONTH_TIER_2 !== planId) {
                  if (SubscriptionPlans.PREMIUM_GROUP_MONTH !== planId) {
                    const _Error2 = Error;
                    const _HermesInternal = HermesInternal;
                    const self3 = this;
                    const self4 = this;
                    const error1 = new Error("Invalid planId " + planId);
                    throw error1;
                  }
                }
              }
            }
          }
          if (constants4.CANCELED === CANCELED) {
            let format8Result1;
            const intl14 = intl30.intl;
            const format8 = intl14.format;
            const t5 = intl30.t;
            if (null != price && null == subscription.paymentGateway) {
              let format8Result;
              if (flag) {
                const obj10 = { price, num: sum };
                format8Result = format8(t5.xoFgRh, obj10);
              } else {
                const obj11 = { price, num: sum };
                format8Result = format8(t5.nXdbKo, obj11);
              }
              format8Result1 = format8Result;
            } else {
              const obj12 = { num: sum };
              format8Result1 = format8(t5.EcSdRH, obj12);
            }
            return format8Result1;
          } else if (constants4.ACCOUNT_HOLD === CANCELED) {
            let format7Result1;
            const intl13 = intl30.intl;
            const format7 = intl13.format;
            const t4 = intl30.t;
            if (null != price && null == subscription.paymentGateway) {
              let format7Result;
              if (flag) {
                const obj13 = { price, num: sum };
                format7Result = format7(t4["5C/0QG"], obj13);
              } else {
                const obj14 = { price, num: sum };
                format7Result = format7(t4.xfYkhu, obj14);
              }
              format7Result1 = format7Result;
            } else {
              const obj15 = { num: sum };
              format7Result1 = format7(t4.ivjxcn, obj15);
            }
            return format7Result1;
          } else if (constants4.UNPAID === CANCELED) {
            const intl12 = intl30.intl;
            const obj16 = { num: sum };
            return intl12.format(intl30.t["0HopYf"], obj16);
          } else if (constants4.PAUSE_PENDING === CANCELED) {
            let formatResult1;
            let diffResult = null;
            if (null != subscription.pauseEndsAt) {
              const obj20 = _modDef4461(subscription.pauseEndsAt);
              diffResult = obj20.diff(subscription.currentPeriodEnd, "days");
            }
            if (null != diffResult) {
              const intl11 = intl30.intl;
              const obj18 = { pauseDate: subscription.currentPeriodEnd, pauseDuration: diffResult };
              formatResult1 = intl11.format(intl30.t.WUfOD5, obj18);
            } else {
              const intl10 = intl30.intl;
              const obj19 = { pauseDate: subscription.currentPeriodEnd };
              formatResult1 = intl10.format(intl30.t.VlWufv, obj19);
            }
            return formatResult1;
          } else if (constants4.PAUSED === CANCELED) {
            if (!hasFractionalPremiumWithSub) {
              const intl9 = intl30.intl;
              const obj21 = { resumeDate: subscription.pauseEndsAt };
              format3Result1 = intl9.format(intl30.t["6RTdZA"], obj21);
            }
            return format3Result1;
          } else if (constants4.BILLING_RETRY === CANCELED) {
            const intl8 = intl30.intl;
            const format6 = intl8.format;
            const obj22 = { endDate: addResult.toDate() };
            const prop = intl30.t["IlJ/HV"];
            const obj17 = _modDef4461(subscription.currentPeriodStart);
            addResult = obj17.add(set, "days");
            return format6(prop, obj22);
          } else if (constants4.PAST_DUE === CANCELED) {
            const intl7 = intl30.intl;
            const format5 = intl7.format;
            const obj23 = {
              endDate: tmp5Result.dateFormat(getBillingGracePeriodDaysAndExpiresDate(subscription).expiresDate, "LL"),
              onClick() {
                openURLDefault("https://support.discord.com/hc/articles/23082866222871");
              },
            };
            const prop1 = intl30.t["d+0vwo"];
            tmp5Result = DateUtils;
            return format5(prop1, obj23);
          } else {
            let tmp53 = format3Result1;
            if (hasDiscountApplied) {
              let format4Result;
              if (planId === SubscriptionPlans.PREMIUM_YEAR_TIER_2) {
                const intl6 = intl30.intl;
                const format4 = intl6.format;
                let percentage;
                const z2oQtA = intl30.t.z2oQtA;
                if (activeDiscountInfo != null) {
                  percentage = activeDiscountInfo.percentage;
                }
                if (percentage == null) {
                  percentage = authStore3;
                }
                const obj24 = {
                  percent: percentage,
                  regularPrice: combined,
                  renewalDate: getExpectedRenewalDate(subscription, fractionalPremiumInfo),
                };
                format4Result = format4(z2oQtA, obj24);
              } else {
                const intl29 = intl30.intl;
                const formatToPlainString = intl29.formatToPlainString;
                const t10 = intl30.t;
                if (flag) {
                  let percentage1;
                  const v3ZiutU = t10["3ZiutU"];
                  if (activeDiscountInfo != null) {
                    percentage1 = activeDiscountInfo.percentage;
                  }
                  if (percentage1 == null) {
                    percentage1 = closure_21;
                  }
                  const obj25 = { percent: percentage1, regularPrice: combined, numMonths: duration };
                  duration = undefined;
                  if (activeDiscountInfo != null) {
                    duration = activeDiscountInfo.duration;
                  }
                  if (duration == null) {
                    duration = closure_20;
                  }
                  format4Result = formatToPlainString(v3ZiutU, obj25);
                } else {
                  let percentage2;
                  const prop2 = t10["G6+XOT"];
                  if (activeDiscountInfo != null) {
                    percentage2 = activeDiscountInfo.percentage;
                  }
                  if (percentage2 == null) {
                    percentage2 = closure_21;
                  }
                  const obj26 = { percent: percentage2, regularPrice: combined, numMonths: duration1 };
                  duration1 = undefined;
                  if (activeDiscountInfo != null) {
                    duration1 = activeDiscountInfo.duration;
                  }
                  if (duration1 == null) {
                    duration1 = closure_20;
                  }
                  format4Result = formatToPlainString(prop2, obj26);
                }
              }
              tmp53 = format4Result;
            }
            return tmp53;
          }
        }
      }
      if (constants4.CANCELED === CANCELED) {
        let stringResult3;
        const intl21 = intl30.intl;
        if (null != price && null == subscription.paymentGateway) {
          let format11Result;
          const format11 = intl21.format;
          const t7 = intl30.t;
          if (flag) {
            const obj27 = { price };
            format11Result = format11(t7.cXy8Bp, obj27);
          } else {
            const obj28 = { price };
            format11Result = format11(t7["C/XsHt"], obj28);
          }
          stringResult3 = format11Result;
        } else {
          stringResult3 = intl21.string(intl30.t.K6tYFa);
        }
        return stringResult3;
      } else if (constants4.ACCOUNT_HOLD === CANCELED) {
        let format10Result1;
        const intl20 = intl30.intl;
        const format10 = intl20.format;
        const t6 = intl30.t;
        if (null != price && null == subscription.paymentGateway) {
          let format10Result;
          if (flag) {
            const obj29 = { price };
            format10Result = format10(t6.HBkIBi, obj29);
          } else {
            const obj30 = { price };
            format10Result = format10(t6.ZsO1Sx, obj30);
          }
          format10Result1 = format10Result;
        } else {
          format10Result1 = format10(t6["0+/WH7"], {});
        }
        return format10Result1;
      } else if (constants4.UNPAID === CANCELED) {
        const intl19 = intl30.intl;
        return intl19.format(intl30.t.McIzwj, {});
      } else if (constants4.PAUSE_PENDING === CANCELED) {
        let formatResult2;
        let diffResult1 = null;
        if (null != subscription.pauseEndsAt) {
          const obj33 = _modDef4461(subscription.pauseEndsAt);
          diffResult1 = obj33.diff(subscription.currentPeriodEnd, "days");
        }
        if (null != diffResult1) {
          const intl18 = intl30.intl;
          const obj31 = { pauseDate: subscription.currentPeriodEnd, pauseDuration: diffResult1 };
          formatResult2 = intl18.format(intl30.t.WUfOD5, obj31);
        } else {
          const intl17 = intl30.intl;
          const obj32 = { pauseDate: subscription.currentPeriodEnd };
          formatResult2 = intl17.format(intl30.t.VlWufv, obj32);
        }
        return formatResult2;
      } else if (constants4.PAUSED === CANCELED) {
        if (!hasFractionalPremiumWithSub) {
          const intl16 = intl30.intl;
          const obj34 = { resumeDate: subscription.pauseEndsAt };
          stringResult2 = intl16.format(intl30.t["6RTdZA"], obj34);
        }
        return stringResult2;
      } else if (constants4.PAST_DUE === CANCELED) {
        const intl15 = intl30.intl;
        const format9 = intl15.format;
        const obj35 = {
          endDate: tmp5Result3.dateFormat(getBillingGracePeriodDaysAndExpiresDate(subscription).expiresDate, "LL"),
          onClick() {
            openURLDefault("https://support.discord.com/hc/articles/23082866222871");
          },
        };
        const prop3 = intl30.t["d+0vwo"];
        tmp5Result3 = DateUtils;
        return format9(prop3, obj35);
      } else {
        return stringResult2;
      }
    }
  }
  if (constants4.CANCELED === CANCELED) {
    let stringResult4;
    const intl28 = intl30.intl;
    if (null != price && null == subscription.paymentGateway) {
      let format14Result;
      const format14 = intl28.format;
      const t9 = intl30.t;
      if (flag) {
        const obj36 = { price };
        format14Result = format14(t9["USi/nc"], obj36);
      } else {
        const obj37 = { price };
        format14Result = format14(t9["FS//l2"], obj37);
      }
      stringResult4 = format14Result;
    } else {
      stringResult4 = intl28.string(intl30.t.JshLzq);
    }
    return stringResult4;
  } else if (constants4.ACCOUNT_HOLD === CANCELED) {
    let format13Result1;
    const intl27 = intl30.intl;
    const format13 = intl27.format;
    const t8 = intl30.t;
    if (null != price && null == subscription.paymentGateway) {
      let format13Result;
      if (flag) {
        const obj38 = { price };
        format13Result = format13(t8["5mv+2i"], obj38);
      } else {
        const obj39 = { price };
        format13Result = format13(t8.nkAEfZ, obj39);
      }
      format13Result1 = format13Result;
    } else {
      format13Result1 = format13(t8.SsLIXS, {});
    }
    return format13Result1;
  } else if (constants4.UNPAID === CANCELED) {
    const intl26 = intl30.intl;
    return intl26.format(intl30.t.cmkbFB, {});
  } else if (constants4.PAUSE_PENDING === CANCELED) {
    let formatResult3;
    let diffResult2 = null;
    if (null != subscription.pauseEndsAt) {
      const obj43 = _modDef4461(subscription.pauseEndsAt);
      diffResult2 = obj43.diff(subscription.currentPeriodEnd, "days");
    }
    if (null != diffResult2) {
      const intl25 = intl30.intl;
      const obj40 = { pauseDate: subscription.currentPeriodEnd, pauseDuration: diffResult2 };
      formatResult3 = intl25.format(intl30.t.WUfOD5, obj40);
    } else {
      const intl24 = intl30.intl;
      const obj41 = { pauseDate: subscription.currentPeriodEnd };
      formatResult3 = intl24.format(intl30.t.VlWufv, obj41);
    }
    return formatResult3;
  } else if (constants4.PAUSED === CANCELED) {
    if (!hasFractionalPremiumWithSub) {
      const intl23 = intl30.intl;
      const obj42 = { resumeDate: subscription.pauseEndsAt };
      stringResult1 = intl23.format(intl30.t["6RTdZA"], obj42);
    }
    return stringResult1;
  } else if (constants4.PAST_DUE === CANCELED) {
    const intl22 = intl30.intl;
    const format12 = intl22.format;
    const obj44 = {
      endDate: tmp5Result4.dateFormat(getBillingGracePeriodDaysAndExpiresDate(subscription).expiresDate, "LL"),
      onClick() {
        openURLDefault("https://support.discord.com/hc/articles/23082866222871");
      },
    };
    const prop4 = intl30.t["d+0vwo"];
    tmp5Result4 = DateUtils;
    return format12(prop4, obj44);
  } else {
    return stringResult1;
  }
}
function getNumPremiumGuildSubscriptions(additionalPlans) {
  const items = [__initData5.GUILD];
  const planIdsForSkus = SubscriptionPlanStore.getPlanIdsForSkus(items);
  _modDef38(null != planIdsForSkus, "Missing guildSubscriptionPlanIds");
  const found = additionalPlans.find((planId) => planIdsForSkus.includes(planId.planId));
  let num = 0;
  if (null != found) {
    num = found.quantity;
  }
  return num;
}
function getBillingGracePeriodDaysAndExpiresDate(subscription) {
  let durationResult;
  let durationResult1;
  let obj6;
  let tmp13Result;
  if (subscription.isPurchasedViaApple) {
    const metadata = subscription.metadata;
    let prop;
    if (metadata != null) {
      prop = metadata.apple_grace_period_expires_date;
    }
    if (null != prop) {
      const obj11 = _modDef4461(subscription.metadata.apple_grace_period_expires_date);
      const obj3 = { days: durationResult.days(), expiresDate: obj11 };
      const obj13 = _modDef4461;
      durationResult = obj13.duration(obj11.diff(subscription.currentPeriodStart));
      return obj3;
    }
  }
  if (subscription.isPurchasedViaGoogle) {
    const metadata2 = subscription.metadata;
    let prop1;
    if (metadata2 != null) {
      prop1 = metadata2.google_grace_period_expires_date;
    }
    if (null != prop1) {
      const metadata3 = subscription.metadata;
      let prop2;
      if (metadata3 != null) {
        prop2 = metadata3.google_original_expires_date;
      }
      if (null != prop2) {
        const obj7 = _modDef4461(subscription.metadata.google_grace_period_expires_date);
        const obj4 = { days: durationResult1.days(), expiresDate: obj7 };
        const tmp20 = _modDef4461(subscription.metadata.google_original_expires_date);
        const obj9 = _modDef4461;
        durationResult1 = obj9.duration(obj7.diff(tmp20));
        return obj4;
      }
    }
  }
  if (subscription.isPurchasedExternally) {
    const tmp15 = subscription.isPurchasedViaApple ? closure_17 : authStore4;
    const obj5 = { days: tmp15, expiresDate: obj6.add(tmp15, "days") };
    obj6 = _modDef4461(subscription.currentPeriodStart);
    return obj5;
  } else {
    const metadata4 = subscription.metadata;
    let prop3;
    if (metadata4 != null) {
      prop3 = metadata4.grace_period_expires_date;
    }
    if (null != prop3) {
      const metadata5 = subscription.metadata;
      let prop4;
      const tmp13 = _modDef4461;
      if (metadata5 != null) {
        prop4 = metadata5.grace_period_expires_date;
      }
      const obj8 = {
        days: tmp13Result.diff(subscription.currentPeriodStart, "days"),
        expiresDate: _modDef4461(subscription.metadata.grace_period_expires_date),
      };
      tmp13Result = tmp13(prop4);
      return obj8;
    } else {
      const tmp8 = null == subscription.paymentSourceId ? closure_19 : __initData;
      obj = { days: tmp8, expiresDate: obj2.add(tmp8, "days") };
      obj2 = _modDef4461(subscription.currentPeriodStart);
      return obj;
    }
  }
}
function getExpectedRenewalDate(premiumSubscription, fractionalPremiumInfo) {
  const date = new Date(premiumSubscription.currentPeriodEnd);
  let toDateResult = date;
  const tmp2 =
    null == fractionalPremiumInfo || premiumSubscription.isBoostOnly || premiumSubscription.hasAnyPremiumGroup;
  if (!tmp2) {
    const unactivatedUnits = fractionalPremiumInfo.unactivatedUnits;
    obj = _modDef4461(date);
    let addResult = obj;
    if (unactivatedUnits.length > 0) {
      const mapped = unactivatedUnits.map(f88613);
      addResult = obj.add(mapped.reduce(f88614, 0), "hours");
    }
    toDateResult = addResult.toDate();
  }
  return toDateResult;
}
function getCoercedPremiumGuildSubscriptionStatus(subscription) {
  let additionalPlans;
  let renewalMutations;
  let status;
  ({ renewalMutations, additionalPlans, status } = subscription);
  const items = [__initData5.GUILD];
  const planIdsForSkus = SubscriptionPlanStore.getPlanIdsForSkus(items);
  _modDef38(null != planIdsForSkus, "Missing guildSubscriptionPlanIds");
  const found = additionalPlans.find((planId) => planIdsForSkus.includes(planId.planId));
  let num = 0;
  if (null != found) {
    num = found.quantity;
  }
  let tmp7 = null;
  if (null != renewalMutations) {
    const additionalPlans1 = renewalMutations.additionalPlans;
    const items1 = [__initData5.GUILD];
    const planIdsForSkus1 = SubscriptionPlanStore.getPlanIdsForSkus(items1);
    _modDef38(null != planIdsForSkus1, "Missing guildSubscriptionPlanIds");
    const found1 = additionalPlans1.find((planId) => planIdsForSkus.includes(planId.planId));
    let num2 = 0;
    if (null != found1) {
      num2 = found1.quantity;
    }
    tmp7 = num2;
  }
  let CANCELED = status;
  if (0 === tmp7) {
    CANCELED = status;
    if (0 !== num) {
      CANCELED = constants4.CANCELED;
    }
  }
  return CANCELED;
}
function isPremiumGuildSubscriptionCanceled(subscription) {
  let tmp3;
  if (subscription.isPurchasedExternally) {
    tmp3 = subscription.status === constants4.CANCELED;
  } else {
    tmp3 = getCoercedPremiumGuildSubscriptionStatus(subscription) === constants4.CANCELED;
  }
  return tmp3;
}
function getFormattedPriceForPlan(id, arg1, arg2) {
  let tmp4;
  if (null != arg1) {
    try {
      tmp4 = getPrice(id.id, false, flag, arg1, flag2);
    } catch (err) {
      tmp4 = getDefaultPrice(id.id, false, flag, undefined, flag2);
    }
  } else {
    tmp4 = getDefaultPrice(id.id, false, flag, undefined, flag2);
  }
  obj = PriceUtils;
  const formatPriceResult = obj.formatPrice(tmp4.amount, tmp4.currency);
  let combined = formatPriceResult;
  const tmp12 = id.currency !== constants8.USD && true === arg2;
  if (tmp12) {
    combined = formatPriceResult.concat("*");
  }
  return combined;
}
function getPremiumGuildIntervalPrice(planId, paymentSourceId, currency, user) {
  let obj10;
  let obj7;
  if (null != paymentSourceId) {
    obj = { paymentSourceId, currency };
    obj2 = { paymentSourceId, currency };
  } else {
    obj = { country: BillingInfoStore.ipCountryCodeWithFallback, currency };
  }
  const value = SubscriptionPlanStore.get(planId);
  if (null == value) {
    const _Error2 = Error;
    const self3 = this;
    const self4 = this;
    const error = new Error("Unsupported plan");
    const obj6 = { tags: obj7 };
    obj7 = { planId };
    const obj8 = BillingUtils;
    const result = obj8.captureBillingException(error, obj6);
    throw error;
  } else {
    const forSkuAndInterval = SubscriptionPlanStore.getForSkuAndInterval(
      __initData5.GUILD,
      value.interval,
      value.intervalCount,
    );
    if (null == forSkuAndInterval) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error1 = new Error("Unsupported plan");
      const obj9 = { tags: obj10 };
      obj10 = { planId };
      const obj5 = BillingUtils;
      const result1 = obj5.captureBillingException(error1, obj9);
      throw error1;
    } else {
      const id = forSkuAndInterval.id;
      const obj4 = PremiumTypeUtils;
      return getPrice(id, obj4.isPremium(user), false, obj);
    }
  }
}
function getDefaultCurrency() {
  let currency = constants8.USD;
  try {
    currency = getDefaultPrice(SubscriptionPlans.PREMIUM_MONTH_TIER_2, false, false, undefined, false).currency;
  } catch (err) {}
  return currency;
}
function formatTrialCtaIntervalDuration(intervalType) {
  let MONTH = intervalType.intervalType;
  if (MONTH === undefined) {
    MONTH = constants7.MONTH;
  }
  let num = intervalType.intervalCount;
  if (num === undefined) {
    num = 1;
  }
  const tmp2 = getDefaultCurrency();
  obj = PriceUtils;
  const formatPriceResult = obj.formatPrice(0, tmp2, { maximumFractionDigits: 0, minimumFractionDigits: 0 });
  if (constants7.DAY === MONTH) {
    if (num >= 7) {
      let formatToPlainStringResult;
      if (num % 7 === 0) {
        const intl4 = intl30.intl;
        obj2 = { weeks: num / 7, price: formatPriceResult };
        formatToPlainStringResult = intl4.formatToPlainString(intl30.t.C6i5Jt, obj2);
      }
      return formatToPlainStringResult;
    }
    const intl3 = intl30.intl;
    const obj3 = { days: num, price: formatPriceResult };
    formatToPlainStringResult = intl3.formatToPlainString(intl30.t.cR9ifw, obj3);
  } else if (constants7.MONTH === MONTH) {
    const intl2 = intl30.intl;
    const obj4 = { months: num, price: formatPriceResult };
    return intl2.formatToPlainString(intl30.t["8FZfNo"], obj4);
  } else if (constants7.YEAR === MONTH) {
    const intl = intl30.intl;
    const obj5 = { years: num, price: formatPriceResult };
    return intl.formatToPlainString(intl30.t.xzAcST, obj5);
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Unsupported interval duration.");
    throw error;
  }
}
function getItemsWithUpsertedPlanIdForGroup(renewalMutations, planId, quantity, has) {
  let obj3;
  let closure_0 = planId;
  let closure_1 = quantity;
  let closure_2 = has;
  if (has.has(planId)) {
    let c3 = false;
    renewalMutations = renewalMutations.renewalMutations;
    let items;
    if (renewalMutations != null) {
      items = renewalMutations.items;
    }
    if (items == null) {
      items = renewalMutations.items;
    }
    const mapped = items.map((planId) => {
      let tmp = planId;
      if (set.has(planId.planId)) {
        c3 = true;
        obj = { quantity, planId };
        const merged = Object.assign(planId);
        tmp = obj;
      }
      return tmp;
    });
    const tmp9 = c3;
    if (!tmp9) {
      obj2 = { planId, quantity };
      const items1 = renewalMutations.items;
      const found = items1.find((planId) => planId.planId === planId);
      if (null != found) {
        obj2.id = found.id;
      }
      mapped.push(obj2);
    }
    return mapped.filter((quantity) => 0 !== quantity.quantity);
  } else {
    obj = { message: "Expected planId in group", extraSentryInformation: obj3 };
    const self = this;
    const self2 = this;
    obj3 = { newPlanId: planId, planGroup: has };
    const checkoutError = new CheckoutError.CheckoutError(obj);
    throw checkoutError;
  }
}
function getMonthlyPrice(isGift) {
  let flag = isGift.isGift;
  const subscriptionPlan = isGift.subscriptionPlan;
  if (flag === undefined) {
    flag = false;
  }
  let priceOptions = isGift.priceOptions;
  if (priceOptions === undefined) {
    priceOptions = {};
  }
  let tmp2 = null;
  if (null != closure_33[subscriptionPlan.skuId]) {
    tmp2 = getPrice(tmp, false, flag, priceOptions);
  }
  return tmp2;
}
function calculateMonthlyPriceEquivalentTotal(priceOptions) {
  let isGift;
  let subscriptionPlan;
  ({ subscriptionPlan, isGift } = priceOptions);
  if (isGift === undefined) {
    isGift = false;
  }
  priceOptions = priceOptions.priceOptions;
  if (priceOptions === undefined) {
    priceOptions = {};
  }
  if (subscriptionPlan.interval === constants7.DAY) {
    return null;
  } else {
    if (subscriptionPlan.interval === constants7.MONTH) {
      if (1 === subscriptionPlan.intervalCount) {
        return null;
      }
    }
    if (isGift === undefined) {
      isGift = false;
    }
    if (priceOptions === undefined) {
      priceOptions = {};
    }
    let tmp5 = null;
    if (null != closure_33[subscriptionPlan.skuId]) {
      tmp5 = getPrice(tmp3, false, isGift, priceOptions);
    }
    if (null == tmp5) {
      return null;
    } else {
      let intervalCount;
      if (subscriptionPlan.interval === constants7.MONTH) {
        intervalCount = subscriptionPlan.intervalCount;
      } else {
        intervalCount = 12 * subscriptionPlan.intervalCount;
      }
      return tmp5.amount * intervalCount;
    }
  }
}
function calculateDiscountPercentageForYearlyPlan(subscriptionPlan, arg1, arg2) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let priceOptions = arg2;
  if (arg2 === undefined) {
    priceOptions = {};
  }
  if (subscriptionPlan.interval === constants7.YEAR) {
    try {
      obj2 = { subscriptionPlan, isGift: flag, priceOptions };
      const tmp2 = getMonthlyPrice(obj2);
      if (null != tmp2) {
        if (0 !== tmp3.amount) {
          const _Math = Math;
          return Math.floor(
            100 * (1 - getPrice(subscriptionPlan.id, false, flag, priceOptions).amount / (12 * tmp2.amount)),
          );
        }
      }
    } catch (err) {}
  }
}
const isNoneSubscription = SubscriptionPlanRecord.isNoneSubscription;
let Constants = Constants_mod2;
({
  InvoiceStatusTypes: unpackModuleId,
  PaymentGateways: closure_12,
  PriceSetAssignmentPurchaseTypes: map1,
  SubscriptionStatusTypes: closure_14,
} = Constants);
({
  DISCOUNTS: closure_15,
  ANNUAL_DISCOUNT_PERCENTAGE_FALLBACK: closure_16,
  DEFAULT_APPLE_GRACE_PERIOD_DAYS: closure_17,
  DEFAULT_GOOGLE_GRACE_PERIOD_DAYS: closure_18,
  DEFAULT_MAX_GRACE_PERIOD_DAYS: closure_19,
  DISCOUNT_DURATION_FALLBACK: closure_20,
  DISCOUNT_PERCENTAGE_FALLBACK: closure_21,
  DiscountUserUsageLimitIntervalTypes: closure_22,
  FRACTIONAL_PREMIUM_SKU_INTERVAL_COUNTS: closure_23,
  FractionalPremiumIntervalTypes: closure_24,
  FractionalPremiumStates: closure_25,
  MAX_ACCOUNT_HOLD_DAYS: closure_26,
  MAX_PAYMENT_PROCESSING_TIME_DAYS: closure_27,
  NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_28,
  PAID_SUBSCRIPTION_MAX_BILLING_RETRY_DAYS: closure_29,
  PAID_SUBSCRIPTION_MAX_GRACE_PERIOD_DAYS: closure_30,
  PREMIUM_GUILD_SUBSCRIPTION_PLANS: closure_31,
  PREMIUM_PLANS: closure_32,
  PREMIUM_SKU_TO_MONTHLY_PLAN: closure_33,
  PREMIUM_TIER_2_PLANS: closure_34,
  PREMIUM_TIER_2_REVERSE_FOLLOWUP_TRIAL_ID: closure_35,
  PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID: closure_36,
  PREMIUM_TYPE_DISPLAY_NAME: closure_37,
  PremiumSubscriptionSKUs: closure_38,
  PremiumTypes: closure_39,
  PremiumUserLimits: closure_40,
  SubscriptionIntervalTypes: closure_41,
  SubscriptionPlanInfo: closure_42,
  SubscriptionPlans,
} = PremiumConstants);
({
  TRIAL_FOR_EVERYONE_OFFER_EXPIRES_APPROACHING_THRESHOLD: closure_44,
  USER_PREMIUM_OFFER_EXPIRES_APPROACHING_4_DAY_THRESHOLD: closure_45,
  USER_PREMIUM_OFFER_EXPIRES_APPROACHING_7_DAY_THRESHOLD: closure_46,
} = PremiumConstants);
let closure_47 = PremiumGroupConstants.getPremiumGroupProductName;
Constants = Constants_mod2;
({
  CurrencyCodes: closure_48,
  PaymentGatewayToFriendlyName: closure_49,
  PREPAID_PAYMENT_SOURCES: closure_50,
} = Constants);
const constants9 = {
  PAYMENT_SOURCE_MANAGEMENT: "https://support.apple.com/HT201266",
  BILLING_HISTORY: "https://support.apple.com/HT201266",
  SUBSCRIPTION_MANAGEMENT: "https://support.apple.com/HT202039",
};
const constants10 = {
  SUBSCRIPTION_MANAGEMENT: "https://play.google.com/store/account/subscriptions",
  PAYMENT_SOURCE_MANAGEMENT: "https://play.google.com/store/paymentmethods",
  BILLING_HISTORY: "https://play.google.com/store/account/orderhistory",
};
let tmp5 = new LoggerDefault("PremiumUtils.tsx");
const logger = tmp5;
const Branding = {
  BUNDLE: "bundle",
  TIER_0: "tier_0",
  TIER_1: "tier_1",
  TIER_2: "tier_2",
  PREMIUM_GUILD: "premium_guild",
};
let obj2 = { MID: "mid", HIGH: "high" };
let ReactCompilerGating = ReactCompilerGating_mod;
let items = [, , , , , , , , , , , ,];
({
  NONE_MONTH: arr[0],
  NONE_3_MONTH: arr[1],
  NONE_6_MONTH: arr[2],
  NONE_YEAR: arr[3],
  PREMIUM_MONTH_TIER_0: arr[4],
  PREMIUM_MONTH_TIER_1: arr[5],
  PREMIUM_MONTH_TIER_2: arr[6],
  PREMIUM_YEAR_TIER_0: arr[7],
  PREMIUM_YEAR_TIER_1: arr[8],
  PREMIUM_YEAR_TIER_2: arr[9],
  PREMIUM_3_MONTH_TIER_2: arr[10],
  PREMIUM_6_MONTH_TIER_2: arr[11],
  PREMIUM_GROUP_MONTH: arr[12],
} = SubscriptionPlans);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (currency, checkoutContext, arg2) => {
      obj = react2;
      const cResult = obj.c(6);
      let available_plans = null;
      if (null != checkoutContext) {
        available_plans = null;
        if (null != checkoutContext.checkoutContext) {
          available_plans = null;
          if (null != checkoutContext.checkoutContext.available_plans) {
            available_plans = checkoutContext.checkoutContext.available_plans;
          }
        }
      }
      if (cResult[0] === available_plans) {
        let tmp3;
        if (cResult[1] === currency) {
          tmp3 = cResult[2];
        }
        const tmp9 =
          null != currency.currency &&
          null != checkoutContext &&
          checkoutContext.currency !== currency.currency &&
          null == arg2;
        if (cResult[3] === tmp3) {
          let tmp11;
          if (cResult[4] === tmp9) {
            tmp11 = cResult[5];
          }
          return tmp11;
        }
        obj2 = { priceOptions: tmp3, planPricesLoading: tmp9 };
        cResult[3] = tmp3;
        cResult[4] = tmp9;
        cResult[5] = obj2;
        tmp11 = obj2;
      }
      let tmp4 = currency;
      if (null != available_plans) {
        const obj3 = { contextPlanPrices: Object.fromEntries(available_plans.map(f88594)) };
        const merged = Object.assign(currency);
        const _Object = Object;
        tmp4 = obj3;
      }
      cResult[0] = available_plans;
      cResult[1] = currency;
      cResult[2] = tmp4;
      tmp3 = tmp4;
    }
  : (arg0, arg1, arg2) => {
      let closure_0 = arg0;
      const currency = arg1;
      let closure_2 = arg2;
      let items = [arg1];
      const memo = react.useMemo(() => {
        let available_plans = null;
        if (null != currency) {
          available_plans = null;
          if (null != currency.checkoutContext) {
            available_plans = null;
            if (null != currency.checkoutContext.available_plans) {
              available_plans = currency.checkoutContext.available_plans;
            }
          }
        }
        return available_plans;
      }, items);
      const items1 = [arg0, arg1, memo, arg2];
      return react.useMemo(() => {
        let tmp2 = closure_0;
        if (null != memo) {
          obj = { contextPlanPrices: Object.fromEntries(memo.map(f88594)) };
          const merged = Object.assign(closure_0);
          const _Object = Object;
          tmp2 = obj;
        }
        obj2 = { priceOptions: tmp2, planPricesLoading: tmp7 };
        return obj2;
      }, items1);
    };
let set = new Set(items);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let currentUser;
      let premiumTypeSubscription;
      let tmp4;
      let tmp5;
      let tmp8;
      let tmp9;
      obj = react2;
      const cResult = obj.c(7);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SubscriptionStore];
        const fn = function e() {
          return premiumTypeSubscription.getPremiumTypeSubscription();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserStore];
        const fn2 = function s() {
          return currentUser.getCurrentUser();
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        tmp9 = fn2;
        tmp8 = items1;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult3 = get_initialized;
      const stateFromStores1 = tmpResult3.useStateFromStores(tmp8, tmp9);
      let status;
      const tmp12 = cResult[4];
      if (stateFromStores != null) {
        status = stateFromStores.status;
      }
      if (tmp12 === status) {
        let tmp14;
        if (cResult[5] === stateFromStores1) {
          tmp14 = cResult[6];
        }
        return tmp14;
      }
      const tmpResult4 = PremiumTypeUtils;
      let isPremiumResult = tmpResult4.isPremium(stateFromStores1);
      if (!isPremiumResult) {
        let status1;
        if (stateFromStores != null) {
          status1 = stateFromStores.status;
        }
        isPremiumResult =
          status1 === constants4.PAST_DUE ||
          status1 === constants4.ACCOUNT_HOLD ||
          status1 === constants4.BILLING_RETRY;
      }
      let status2;
      if (stateFromStores != null) {
        status2 = stateFromStores.status;
      }
      cResult[4] = status2;
      cResult[5] = stateFromStores1;
      cResult[6] = isPremiumResult;
      tmp14 = isPremiumResult;
    }
  : () => {
      let currentUser;
      let premiumTypeSubscription;
      const items = [SubscriptionStore];
      obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
      const items1 = [UserStore];
      obj2 = get_initialized;
      const stateFromStores1 = obj2.useStateFromStores(items1, () => currentUser.getCurrentUser());
      const obj3 = PremiumTypeUtils;
      let isPremiumResult = obj3.isPremium(stateFromStores1);
      if (!isPremiumResult) {
        let status;
        if (stateFromStores != null) {
          status = stateFromStores.status;
        }
        isPremiumResult =
          status === constants4.PAST_DUE || status === constants4.ACCOUNT_HOLD || status === constants4.BILLING_RETRY;
      }
      return isPremiumResult;
    };
ReactCompilerGating = ReactCompilerGating_mod;
function getPremiumPlanItem(subscription) {
  const items = subscription.items;
  return items.find((planId) => set.has(planId.planId));
}
function getInterval(basePlanId) {
  let obj7;
  if (null != closure_42[basePlanId]) {
    obj2 = { intervalType: null, intervalCount: null };
    ({ interval: obj4.intervalType, intervalCount: obj4.intervalCount } = closure_42[basePlanId]);
    return obj2;
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Unsupported plan");
    const obj3 = { tags: obj7 };
    obj7 = { planId: basePlanId };
    obj = BillingUtils;
    const result = obj.captureBillingException(error, obj3);
    throw error;
  }
}
function getIntervalString(interval, arg1, arg2) {
  let intl5;
  let intl8;
  let num = arg3;
  if (arg3 === undefined) {
    num = 1;
  }
  let flag = arg4;
  if (arg4 === undefined) {
    flag = false;
  }
  let TIER_2 = arg5;
  if (arg5 === undefined) {
    TIER_2 = closure_39.TIER_2;
  }
  const tmp2 = arg1;
  if (!tmp2) {
    const tmp3 = arg2;
    if (!tmp3) {
      if (constants7.MONTH === interval) {
        let formatToPlainStringResult;
        if (1 !== num) {
          const intl3 = intl30.intl;
          obj = { intervalCount: num };
          formatToPlainStringResult = intl3.formatToPlainString(intl30.t["0UlZnH"], obj);
        } else {
          const intl2 = intl30.intl;
          formatToPlainStringResult = intl2.string(intl30.t.DKzs96);
        }
        return formatToPlainStringResult;
      } else if (tmp4.YEAR === interval) {
        const intl = intl30.intl;
        return intl.string(intl30.t["/Q4HRN"]);
      } else {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("Unexpected interval");
        throw error;
      }
    }
  }
  if (constants7.MONTH === interval) {
    let poEovT2;
    const intl7 = intl30.intl;
    const formatToPlainString2 = intl7.formatToPlainString;
    if (TIER_2 === closure_39.TIER_0) {
      poEovT2 = intl30.t.NPKsLz;
    } else {
      poEovT2 = intl30.t.poEovT;
    }
    obj2 = { timeInterval: intl8.string(intl30.t.FPybU7) };
    intl8 = intl30.intl;
    let formatToPlainString2Result = formatToPlainString2(poEovT2, obj2);
    if (!flag) {
      const intl9 = intl30.intl;
      formatToPlainString2Result = intl9.string(intl30.t.Mh9bTt);
    }
    return formatToPlainString2Result;
  } else if (tmp15.YEAR === interval) {
    let poEovT;
    const intl4 = intl30.intl;
    const formatToPlainString = intl4.formatToPlainString;
    if (TIER_2 === closure_39.TIER_0) {
      poEovT = intl30.t.NPKsLz;
    } else {
      poEovT = intl30.t.poEovT;
    }
    const obj3 = { timeInterval: intl5.string(intl30.t.tfqrhj) };
    intl5 = intl30.intl;
    let formatToPlainStringResult1 = formatToPlainString(poEovT, obj3);
    if (!flag) {
      const intl6 = intl30.intl;
      formatToPlainStringResult1 = intl6.string(intl30.t.DRgqMo);
    }
    return formatToPlainStringResult1;
  } else {
    const _Error2 = Error;
    const self3 = this;
    const self4 = this;
    const error1 = new Error("Unexpected interval");
    throw error1;
  }
}
function getIntervalStringAsNoun(interval) {
  if (constants7.MONTH === interval) {
    const intl2 = intl30.intl;
    return intl2.string(intl30.t.FPybU7);
  } else if (tmp.YEAR === interval) {
    const intl = intl30.intl;
    return intl.string(intl30.t.tfqrhj);
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Unexpected interval");
    throw error;
  }
}
function getPremiumType(planIdFromItems) {
  let obj3;
  if (null != closure_42[planIdFromItems]) {
    return closure_42[planIdFromItems].premiumType;
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Unsupported plan");
    obj2 = { tags: obj3 };
    obj3 = { planId: planIdFromItems };
    obj = BillingUtils;
    const result = obj.captureBillingException(error, obj2);
    throw error;
  }
}
function getTierDisplayNameByPlanId(PREMIUM_MONTH_TIER_0) {
  let obj3;
  let premiumType;
  if (closure_42[PREMIUM_MONTH_TIER_0] != null) {
    premiumType = tmp.premiumType;
  }
  let tmp3 = null;
  if (null != premiumType) {
    tmp3 = closure_37[premiumType];
  }
  if (null != tmp3) {
    const intl = intl30.intl;
    return intl.string(tmp3);
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Unsupported plan");
    obj2 = { tags: obj3 };
    obj3 = { planId: PREMIUM_MONTH_TIER_0 };
    obj = BillingUtils;
    const result = obj.captureBillingException(error, obj2);
    throw error;
  }
}
function getPremiumPlanOptions(isPremium) {
  let defaultPlanId;
  let skuId;
  ({ skuId, defaultPlanId } = isPremium);
  if (null != skuId) {
    if (isPremium.isPremium) {
      let items2;
      let tmp;
      if (undefined !== defaultPlanId) {
        if (skuId === closure_42[defaultPlanId].skuId) {
          tmp = defaultPlanId;
        }
      }
      if (__initData5.TIER_0 === skuId) {
        const items = [,];
        ({ PREMIUM_YEAR_TIER_0: arr3[0], PREMIUM_MONTH_TIER_0: arr3[1] } = SubscriptionPlans);
        items2 = items;
      } else if (__initData5.TIER_1 === skuId) {
        const items1 = [SubscriptionPlans.PREMIUM_MONTH_TIER_1];
        items2 = items1;
      } else if (__initData5.TIER_2 === skuId) {
        items2 = [,];
        ({ PREMIUM_YEAR_TIER_2: arr[0], PREMIUM_MONTH_TIER_2: arr[1] } = SubscriptionPlans);
      } else if (__initData5.GUILD === skuId) {
        return [];
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const error = new Error("Unexpected SKU: " + skuId);
        throw error;
      }
      if (undefined !== tmp) {
        items2.splice(items2.indexOf(tmp), 1);
        items2.unshift(tmp);
      }
      return items2;
    }
  }
  return [];
}
function getBillingInformationString(status, subscriptionPeriodStart, arg2) {
  let addResult;
  let addResult1;
  let addResult2;
  let endsAt;
  let formatPriceResult;
  let intl10;
  let intl12;
  let intl2;
  let tmp14;
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = null;
  }
  let tmp2 = fractionalPremiumInfo;
  if (fractionalPremiumInfo === undefined) {
    tmp2 = {
      isFractionalPremiumActive: false,
      fetched: true,
      fractionalState: constants6.NONE,
      startsAt: _modDef4461(0),
      endsAt: _modDef4461(0),
      currentEntitlementId: "",
      currentEntitlementEndsAt: _modDef4461(0),
      unactivatedUnits: [],
    };
    obj = {
      isFractionalPremiumActive: false,
      fetched: true,
      fractionalState: constants6.NONE,
      startsAt: _modDef4461(0),
      endsAt: _modDef4461(0),
      currentEntitlementId: "",
      currentEntitlementEndsAt: _modDef4461(0),
      unactivatedUnits: [],
    };
  }
  let tmp6 = subscriptionPeriodStart;
  if (null !== tmp) {
    tmp6 = subscriptionPeriodStart;
    if (status.status === constants4.PAST_DUE) {
      tmp6 = tmp;
    }
  }
  const formatPrice = PriceUtils.formatPrice;
  PriceUtils;
  if (flag) {
    const invoiceItems = tmp6.invoiceItems;
    const found = invoiceItems.filter((subscriptionPlanId) => set.has(subscriptionPlanId.subscriptionPlanId));
    const mapped = found.map((amount) => amount.amount);
    formatPriceResult = formatPrice(
      mapped.reduce((acc, item) => item + acc, 0),
      tmp6.currency,
    );
    tmp14 = require;
  } else {
    formatPriceResult = formatPrice(tmp6.total, tmp6.currency);
    tmp14 = require;
  }
  const currentUser = UserStore.getCurrentUser();
  let isOnReverseTrialResult;
  if (currentUser != null) {
    isOnReverseTrialResult = currentUser.isOnReverseTrial();
  }
  if (isOnReverseTrialResult) {
    let currentPeriodEnd;
    if (null != tmp2.currentEntitlementEndsAt) {
      const currentEntitlementEndsAt = tmp2.currentEntitlementEndsAt;
      currentPeriodEnd = currentEntitlementEndsAt.toDate();
    } else {
      currentPeriodEnd = status.currentPeriodEnd;
    }
    const intl16 = tmp14(1126).intl;
    obj2 = { trialEnd: currentPeriodEnd };
    return intl16.format(tmp14(1126).t["7ZS2m1"], obj2);
  } else if (status.status === constants4.CANCELED) {
    const intl15 = tmp14(1126).intl;
    const obj4 = { endDate: subscriptionPeriodStart.subscriptionPeriodStart };
    return intl15.format(tmp14(1126).t["Whp/qk"], obj4);
  } else if (status.status === constants4.PAUSE_PENDING) {
    const intl14 = tmp14(1126).intl;
    const obj5 = { pauseDate: null, resumeDate: null };
    ({ currentPeriodEnd: obj26.pauseDate, pauseEndsAt: obj26.resumeDate } = status);
    return intl14.format(tmp14(1126).t.uBLUGU, obj5);
  } else if (status.status === constants4.PAUSED) {
    let format8Result;
    if (tmp2.fractionalState !== constants6.NONE) {
      const intl13 = tmp14(1126).intl;
      const format8 = intl13.format;
      const obj6 = { renewalDate: endsAt.toDate(), price: formatPriceResult };
      endsAt = tmp2.endsAt;
      const Q18lRK = tmp14(1126).t.Q18lRK;
      format8Result = format8(Q18lRK, obj6);
    } else if (null == status.pauseEndsAt) {
      let format7Result;
      const intl11 = tmp14(1126).intl;
      if (flag) {
        const format7 = intl11.format;
        const obj7 = { planName: intl12.string(tmp14(1126).t.Ipxkog), price: formatPriceResult };
        const KTYQCg = tmp14(1126).t.KTYQCg;
        intl12 = tmp14(1126).intl;
        format7Result = format7(KTYQCg, obj7);
      } else {
        format7Result = intl11.string(tmp14(1126).t.fMz6Lg);
      }
      format8Result = format7Result;
    } else {
      const intl17 = tmp14(1126).intl;
      const format9 = intl17.format;
      const t3 = tmp14(1126).t;
      if (flag) {
        const zcgtzf = t3.zcgtzf;
        const obj8 = {
          planName: intl10.string(tmp14(1126).t.Ipxkog),
          resumeDate: status.pauseEndsAt,
          price: formatPriceResult,
        };
        intl10 = tmp14(1126).intl;
        format8Result = format9(zcgtzf, obj8);
      } else {
        const obj9 = { resumeDate: status.pauseEndsAt };
        format8Result = format9(t3["V8+l6k"], obj9);
      }
    }
    return format8Result;
  } else if (status.status === constants4.PAST_DUE) {
    let format6Result;
    let expiresDate = getBillingGracePeriodDaysAndExpiresDate(status).expiresDate;
    let isPurchasedViaGoogle = status.isPurchasedViaGoogle;
    if (isPurchasedViaGoogle) {
      const metadata = status.metadata;
      let prop;
      if (metadata != null) {
        prop = metadata.google_grace_period_expires_date;
      }
      isPurchasedViaGoogle = null != prop;
    }
    if (isPurchasedViaGoogle) {
      expiresDate = _modDef4461(status.metadata.google_grace_period_expires_date);
    }
    let isPurchasedViaApple = status.isPurchasedViaApple;
    if (isPurchasedViaApple) {
      const metadata2 = status.metadata;
      let prop1;
      if (metadata2 != null) {
        prop1 = metadata2.apple_grace_period_expires_date;
      }
      isPurchasedViaApple = null != prop1;
    }
    if (isPurchasedViaApple) {
      expiresDate = _modDef4461(status.metadata.apple_grace_period_expires_date);
    }
    const isPurchasedExternally = status.isPurchasedExternally;
    const intl9 = tmp14(1126).intl;
    const format6 = intl9.format;
    const t2 = tmp14(1126).t;
    if (isPurchasedExternally) {
      const obj10 = {
        endDate: expiresDate.toDate(),
        paymentGatewayName: lastJoinedRecommendedGuild[status.paymentGateway],
        paymentSourceLink: null,
      };
      const U2hb3W = t2.U2hb3W;
      const paymentGateway3 = status.paymentGateway;
      if (constants2.APPLE_PARTNER !== paymentGateway3) {
        if (constants2.APPLE_ADVANCED_COMMERCE !== paymentGateway3) {
          let PAYMENT_SOURCE_MANAGEMENT2;
          if (constants2.APPLE !== paymentGateway3) {
            if (constants2.GOOGLE === paymentGateway3) {
              PAYMENT_SOURCE_MANAGEMENT2 = constants10.PAYMENT_SOURCE_MANAGEMENT;
            } else {
              const _Error3 = Error;
              const _HermesInternal3 = HermesInternal;
              const self7 = this;
              const self8 = this;
              const error = new Error("Invalid external payment gateway " + paymentGateway3);
              throw error;
            }
          }
          obj10.paymentSourceLink = PAYMENT_SOURCE_MANAGEMENT2;
          format6Result = format6(U2hb3W, obj10);
        }
      }
      PAYMENT_SOURCE_MANAGEMENT2 = constants9.PAYMENT_SOURCE_MANAGEMENT;
    } else {
      const qEIzyi = t2.qEIzyi;
      const obj11 = { endDate: expiresDate.toDate(), price: formatPriceResult };
      format6Result = format6(qEIzyi, obj11);
    }
    return format6Result;
  } else if (status.status === constants4.BILLING_RETRY) {
    const intl8 = tmp14(1126).intl;
    const format5 = intl8.format;
    const obj13 = { endDate: addResult.toDate(), price: formatPriceResult };
    const EMTLOT2 = tmp14(1126).t.EMTLOT;
    const obj18 = _modDef4461(status.currentPeriodStart);
    addResult = obj18.add(set, "days");
    return format5(EMTLOT2, obj13);
  } else if (status.status === constants4.ACCOUNT_HOLD) {
    if (status.isPurchasedViaGoogle) {
      let format3Result;
      const tmp14Result = tmp14(4541);
      if (!tmp14Result.isGooglePlayBillingSupported()) {
        const intl6 = tmp14(1126).intl;
        const format3 = intl6.format;
        const obj14 = {
          endDate: addResult1.toDate(),
          paymentGatewayName: lastJoinedRecommendedGuild[status.paymentGateway],
          paymentSourceLink: null,
        };
        const prop2 = tmp14(1126).t["dtcxw+"];
        const obj12 = _modDef4461(status.currentPeriodStart);
        const paymentGateway2 = status.paymentGateway;
        addResult1 = obj12.add(prioritySpeakerDucking, "days");
        if (constants2.APPLE_PARTNER !== paymentGateway2) {
          if (constants2.APPLE_ADVANCED_COMMERCE !== paymentGateway2) {
            let PAYMENT_SOURCE_MANAGEMENT;
            if (constants2.APPLE !== paymentGateway2) {
              if (constants2.GOOGLE === paymentGateway2) {
                PAYMENT_SOURCE_MANAGEMENT = constants10.PAYMENT_SOURCE_MANAGEMENT;
              } else {
                const _Error2 = Error;
                const _HermesInternal2 = HermesInternal;
                const self5 = this;
                const self6 = this;
                const error1 = new Error("Invalid external payment gateway " + paymentGateway2);
                throw error1;
              }
            }
            obj14.paymentSourceLink = PAYMENT_SOURCE_MANAGEMENT;
            format3Result = format3(prop2, obj14);
          }
        }
        PAYMENT_SOURCE_MANAGEMENT = constants9.PAYMENT_SOURCE_MANAGEMENT;
      }
      return format3Result;
    }
    const intl7 = tmp14(1126).intl;
    const format4 = intl7.format;
    const obj16 = { endDate: addResult2.toDate(), price: formatPriceResult };
    const EMTLOT = tmp14(1126).t.EMTLOT;
    const obj15 = _modDef4461(status.currentPeriodStart);
    addResult2 = obj15.add(prioritySpeakerDucking, "days");
    format3Result = format4(EMTLOT, obj16);
  } else {
    let tmp21 = null != status.paymentSourceId;
    if (tmp21) {
      const paymentSourceId = status.paymentSourceId;
      let flag2 = false;
      if (null != paymentSourceId) {
        const paymentSource = PaymentSourceStore.getPaymentSource(paymentSourceId);
        const hasItem = null != paymentSource && set3.has(paymentSource.type);
        flag2 = hasItem;
      }
      tmp21 = flag2;
    }
    if (tmp21) {
      const intl5 = tmp14(1126).intl;
      const obj17 = { prepaidEndDate: status.currentPeriodEnd };
      return intl5.format(tmp14(1126).t.awpB0C, obj17);
    } else if (status.status === constants4.UNPAID) {
      const intl4 = tmp14(1126).intl;
      const obj19 = { maxProcessingTimeInDays };
      return intl4.format(tmp14(1126).t.CzTKom, obj19);
    } else if (status.isPurchasedExternally) {
      const intl3 = tmp14(1126).intl;
      const format2 = intl3.format;
      const obj20 = {
        renewalDate: subscriptionPeriodStart.subscriptionPeriodStart,
        paymentGatewayName: lastJoinedRecommendedGuild[status.paymentGateway],
        subscriptionManagementLink: null,
      };
      const paymentGateway = status.paymentGateway;
      if (constants2.APPLE_PARTNER !== paymentGateway) {
        if (constants2.APPLE_ADVANCED_COMMERCE !== paymentGateway) {
          let SUBSCRIPTION_MANAGEMENT;
          if (constants2.APPLE !== paymentGateway) {
            if (constants2.GOOGLE === paymentGateway) {
              SUBSCRIPTION_MANAGEMENT = constants10.SUBSCRIPTION_MANAGEMENT;
            } else {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const self3 = this;
              const self4 = this;
              const error2 = new Error("Invalid external payment gateway " + paymentGateway);
              throw error2;
            }
          }
          obj20.subscriptionManagementLink = SUBSCRIPTION_MANAGEMENT;
          return format2(tmp29, obj20);
        }
      }
      SUBSCRIPTION_MANAGEMENT = constants9.SUBSCRIPTION_MANAGEMENT;
    } else {
      let formatResult;
      const _Date = Date;
      const self = this;
      const self2 = this;
      const date = new Date(subscriptionPeriodStart.subscriptionPeriodStart);
      let toDateResult = date;
      const tmp24 = status.isBoostOnly || status.hasAnyPremiumGroup;
      if (!tmp24) {
        const unactivatedUnits = tmp2.unactivatedUnits;
        const obj3 = _modDef4461(date);
        let addResult3 = obj3;
        if (unactivatedUnits.length > 0) {
          const mapped1 = unactivatedUnits.map(f88613);
          addResult3 = obj3.add(mapped1.reduce(f88614, 0), "hours");
        }
        toDateResult = addResult3.toDate();
      }
      const intl = tmp14(1126).intl;
      const format = intl.format;
      const t = tmp14(1126).t;
      if (flag) {
        const Vl3cED = t.Vl3cED;
        const obj21 = {
          planName: intl2.string(tmp14(1126).t.Ipxkog),
          renewalDate: toDateResult,
          price: formatPriceResult,
        };
        intl2 = tmp14(1126).intl;
        formatResult = format(Vl3cED, obj21);
      } else {
        const obj22 = { renewalDate: toDateResult, price: formatPriceResult };
        formatResult = format(t.Q18lRK, obj22);
      }
      return formatResult;
    }
  }
}
function extendDateWithUnconsumedFractionalPremium(
  date,
  unconsumedFractionalPremiumUnits,
  diff,
  excludeReverseTrialFromCountdown,
) {
  let tmp4;
  const tmp3 = _modDef4461;
  if (!excludeReverseTrialFromCountdown) {
    tmp4 = date;
  }
  const tmp3Result = tmp3(tmp4);
  let addResult = tmp3Result;
  if (unconsumedFractionalPremiumUnits.length > 0) {
    const mapped = unconsumedFractionalPremiumUnits.map(f88613);
    addResult = tmp3Result.add(mapped.reduce(f88614, 0), "hours");
  }
  let addResult1 = addResult;
  if (!excludeReverseTrialFromCountdown) {
    addResult1 = addResult;
    if (undefined !== diff) {
      const diffResult = diff.diff(_modDef4461(), "hours", true);
      addResult1 = addResult;
      if (diffResult > 0) {
        addResult1 = addResult.add(diffResult, "hours");
      }
    }
  }
  return addResult1.toDate();
}
function getUnactivatedFractionalPremiumDurationString(unactivatedUnits) {
  unactivatedUnits = unactivatedUnits.unactivatedUnits;
  const mapped = unactivatedUnits.map(f88613);
  const reduced = mapped.reduce(f88614, 0);
  if (reduced > 0) {
    if (unactivatedUnits.fractionalState === constants6.NONE) {
      const time = { days: intl30.t.fYmirx, hours: intl30.t["C3RO+g"], minutes: intl30.t.r77oHc };
      const roundFPCountdownUnits = useFPDurationLeft.roundFPCountdownUnits;
      useFPDurationLeft;
      obj2 = DateUtils;
      const result = roundFPCountdownUnits(obj2.diffAsUnits(0, reduced * DurationsDefault.Millis.HOUR));
      const obj3 = DateUtils;
      return obj3.unitsAsStrings(result, time);
    }
  }
  return "";
}
function isSwitchingPlansDisabled(renewalMutations) {
  return (
    null != renewalMutations.renewalMutations ||
    null != renewalMutations.trialEndsAt ||
    renewalMutations.status === constants4.PAST_DUE
  );
}
function getSwitchingPlansDisabledMessage(renewalMutations) {
  let stringResult1 = null;
  if (null != renewalMutations.renewalMutations) {
    let stringResult;
    if (renewalMutations.renewalMutations.planId !== renewalMutations.planId) {
      const intl2 = intl30.intl;
      stringResult = intl2.string(intl30.t["0rzJ4J"]);
    } else {
      const intl = intl30.intl;
      stringResult = intl.string(intl30.t["9dLQ0/"]);
    }
    stringResult1 = stringResult;
  }
  if (null != renewalMutations.trialEndsAt) {
    const intl3 = intl30.intl;
    stringResult1 = intl3.string(intl30.t.a9Mdb3);
  }
  return stringResult1;
}
function getPlanIdFromInvoice(subscription, renewalInvoicePreview) {
  const planId = subscription.planId;
  if (subscription.status !== constants4.CANCELED) {
    if (subscription.status !== tmp.PAUSE_PENDING) {
      _modDef38(null != renewalInvoicePreview, "Expected invoicePreview");
      const invoiceItems = renewalInvoicePreview.invoiceItems;
      const found = invoiceItems.find((subscriptionPlanId) => set.has(subscriptionPlanId.subscriptionPlanId));
      if (null != found) {
        let planId2;
        if (!isNoneSubscription(found.subscriptionPlanId)) {
          planId2 = found.subscriptionPlanId;
        }
        return planId2;
      }
      planId2 = subscription.planId;
    }
  }
  return planId;
}
function getStatusFromInvoice(subscription, renewalInvoicePreview) {
  const status = subscription.status;
  if (subscription.status !== constants4.CANCELED) {
    if (subscription.status !== constants4.PAUSE_PENDING) {
      _modDef38(null != renewalInvoicePreview, "Expected invoicePreview");
      const invoiceItems = renewalInvoicePreview.invoiceItems;
      const found = invoiceItems.find((subscriptionPlanId) => set.has(subscriptionPlanId.subscriptionPlanId));
      let CANCELED = status;
      const tmp8 = null == found || isNoneSubscription(found.subscriptionPlanId);
      if (tmp8) {
        CANCELED = constants4.CANCELED;
      }
      return CANCELED;
    }
  }
  return status;
}
function isBaseSubscriptionCanceled(renewalMutations) {
  renewalMutations = renewalMutations.renewalMutations;
  let tmp = renewalMutations.status === constants4.CANCELED;
  if (!tmp) {
    tmp =
      null != renewalMutations &&
      isNoneSubscription(renewalMutations.planId) &&
      !renewalMutations.isPurchasedExternally;
    const tmp3 =
      null != renewalMutations &&
      isNoneSubscription(renewalMutations.planId) &&
      !renewalMutations.isPurchasedExternally;
  }
  return tmp;
}
function getBillingReviewSubheader(arg0, id, arg2) {
  let obj4;
  id = id.id;
  if (null != arg0) {
    if (SubscriptionPlans.PREMIUM_MONTH_TIER_0 === id) {
      const intl15 = intl30.intl;
      return intl15.string(intl30.t["0ggVqN"]);
    } else if (SubscriptionPlans.PREMIUM_YEAR_TIER_0 === id) {
      const intl14 = intl30.intl;
      return intl14.string(intl30.t["jm+ZQw"]);
    } else if (SubscriptionPlans.PREMIUM_MONTH_TIER_1 === id) {
      const intl13 = intl30.intl;
      return intl13.string(intl30.t.uph4Jx);
    } else if (SubscriptionPlans.PREMIUM_YEAR_TIER_1 === id) {
      const intl12 = intl30.intl;
      return intl12.string(intl30.t["D/l7Yt"]);
    } else {
      if (SubscriptionPlans.PREMIUM_MONTH_TIER_2 !== id) {
        if (SubscriptionPlans.PREMIUM_GROUP_MONTH !== id) {
          if (SubscriptionPlans.PREMIUM_YEAR_TIER_2 === id) {
            const intl10 = intl30.intl;
            return intl10.string(intl30.t.G0mISV);
          }
        }
      }
      const intl11 = intl30.intl;
      return intl11.string(intl30.t["5l1MuV"]);
    }
  }
  if (SubscriptionPlans.PREMIUM_MONTH_TIER_0 === id) {
    let string6Result;
    const intl9 = intl30.intl;
    const string6 = intl9.string;
    const t6 = intl30.t;
    if (arg2) {
      string6Result = string6(t6.cRCCJ3);
    } else {
      string6Result = string6(t6["/G3aKw"]);
    }
    return string6Result;
  } else if (SubscriptionPlans.PREMIUM_YEAR_TIER_0 === id) {
    let string5Result;
    const intl8 = intl30.intl;
    const string5 = intl8.string;
    const t5 = intl30.t;
    if (arg2) {
      string5Result = string5(t5.cRCCJ3);
    } else {
      string5Result = string5(t5["2eQpsL"]);
    }
    return string5Result;
  } else if (SubscriptionPlans.PREMIUM_MONTH_TIER_1 === id) {
    let string4Result;
    const intl7 = intl30.intl;
    const string4 = intl7.string;
    const t4 = intl30.t;
    if (arg2) {
      string4Result = string4(t4.cRCCJ3);
    } else {
      string4Result = string4(t4.gueLg5);
    }
    return string4Result;
  } else if (SubscriptionPlans.PREMIUM_YEAR_TIER_1 === id) {
    let string3Result;
    const intl6 = intl30.intl;
    const string3 = intl6.string;
    const t3 = intl30.t;
    if (arg2) {
      string3Result = string3(t3.cRCCJ3);
    } else {
      string3Result = string3(t3["MhH/vW"]);
    }
    return string3Result;
  } else if (SubscriptionPlans.PREMIUM_MONTH_TIER_2 === id) {
    let string2Result;
    const intl5 = intl30.intl;
    const string2 = intl5.string;
    const t2 = intl30.t;
    if (arg2) {
      string2Result = string2(t2.cRCCJ3);
    } else {
      string2Result = string2(t2.LQVQIq);
    }
    return string2Result;
  } else if (SubscriptionPlans.PREMIUM_GROUP_MONTH === id) {
    const intl4 = intl30.intl;
    const formatToPlainString = intl4.formatToPlainString;
    obj2 = { premiumGroupProductName: closure_47() };
    const LwdrNi = _modDef3205.LwdrNi;
    return formatToPlainString(LwdrNi, obj2);
  } else if (SubscriptionPlans.PREMIUM_YEAR_TIER_2 === id) {
    let stringResult;
    const intl3 = intl30.intl;
    const string = intl3.string;
    const t = intl30.t;
    if (arg2) {
      stringResult = string(t.cRCCJ3);
    } else {
      stringResult = string(t["0nfg1x"]);
    }
    return stringResult;
  } else {
    if (SubscriptionPlans.PREMIUM_3_MONTH_TIER_2 !== id) {
      if (SubscriptionPlans.PREMIUM_6_MONTH_TIER_2 !== id) {
        if (SubscriptionPlans.NONE_MONTH !== id) {
          if (SubscriptionPlans.NONE_YEAR !== id) {
            if (SubscriptionPlans.NONE_3_MONTH !== id) {
              if (SubscriptionPlans.NONE_6_MONTH !== id) {
                if (SubscriptionPlans.PREMIUM_MONTH_GUILD !== id) {
                  if (SubscriptionPlans.PREMIUM_YEAR_GUILD !== id) {
                    if (SubscriptionPlans.PREMIUM_3_MONTH_GUILD !== id) {
                      if (SubscriptionPlans.PREMIUM_6_MONTH_GUILD !== id) {
                        const _Error = Error;
                        const self = this;
                        const self2 = this;
                        const error = new Error("User is purchasing an unsupported plan");
                        const obj3 = { tags: obj4 };
                        obj4 = { planId: id };
                        obj = BillingUtils;
                        const result = obj.captureBillingException(error, obj3);
                        throw error;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const intl = intl30.intl;
        return intl.string(intl30.t.eUEeCt);
      }
    }
    const intl2 = intl30.intl;
    const obj5 = { intervalCount: id.intervalCount };
    return intl2.formatToPlainString(intl30.t.BCD4fT, obj5);
  }
}
function getIntervalForInvoice(arg0) {
  const value = SubscriptionPlanStore.get(arg0.invoiceItems[0].subscriptionPlanId);
  _modDef38(null != value, "Missing subscriptionPlan");
  return { intervalType: value.interval, intervalCount: value.intervalCount };
}
function getGuildBoostPlanItem(items) {
  let found = null;
  if (null != items) {
    items = items.items;
    found = items.find(f88612);
  }
  return found;
}
function isBoostOnlySubscription(subscription) {
  let tmp = null != subscription;
  if (tmp) {
    const items = subscription.items;
    tmp = null == items.find((planId) => set.has(planId.planId));
  }
  if (tmp) {
    let found = null;
    if (null != subscription) {
      const items1 = subscription.items;
      found = items1.find(f88612);
    }
    tmp = null != found;
  }
  return tmp;
}
function getPremiumSkuIdForSubscription(items) {
  let obj3;
  let found = null;
  if (null != items) {
    items = items.items;
    found = items.find((planId) => set.has(planId.planId));
  }
  let skuId = null;
  if (null != found) {
    const planId = found.planId;
    if (null == closure_42[planId]) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Unsupported plan");
      obj2 = { tags: obj3 };
      obj3 = { planId };
      obj = BillingUtils;
      const result = obj.captureBillingException(error, obj2);
      throw error;
    } else {
      skuId = tmp4.skuId;
    }
  }
  return skuId;
}
function getPremiumTypeFromSubscription(subscription) {
  let obj3;
  if (null != subscription) {
    const items = subscription.items;
    const found = items.find((planId) => set.has(planId.planId));
    if (null != found) {
      const planId = found.planId;
      if (null != closure_42[planId]) {
        return closure_42[planId].premiumType;
      } else {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("Unsupported plan");
        obj2 = { tags: obj3 };
        obj3 = { planId };
        obj = BillingUtils;
        const result = obj.captureBillingException(error, obj2);
        throw error;
      }
    }
  }
}
function isNewUser(createdAt) {
  let tmp = null != createdAt;
  if (tmp) {
    const _Date = Date;
    createdAt = createdAt.createdAt;
    const timestamp = Date.now();
    tmp = timestamp - createdAt.getTime() < 2592000000;
  }
  return tmp;
}
function formatPriceString(amount, arg1) {
  let stringResult;
  obj = PriceUtils;
  const formatPriceResult = obj.formatPrice(amount.amount, amount.currency);
  if (constants7.MONTH === arg1) {
    const intl2 = intl30.intl;
    stringResult = intl2.string(intl30.t.FPybU7);
  } else if (tmp4.YEAR === arg1) {
    const intl = intl30.intl;
    stringResult = intl.string(intl30.t.tfqrhj);
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Unexpected interval");
    throw error;
  }
  return "" + formatPriceResult + "/" + stringResult;
}
function castPremiumSubscriptionAsSkuId(skuIdForPlan) {
  return skuIdForPlan;
}
function formatInterval(interval) {
  if (interval === constants7.YEAR) {
    const intl2 = intl30.intl;
    return intl2.string(intl30.t.tfqrhj);
  } else if (interval === tmp.MONTH) {
    const intl = intl30.intl;
    return intl.string(intl30.t.FPybU7);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("Invalid interval type: " + interval);
    throw error;
  }
}
function isPremiumEligible(isProvisional) {
  return null != isProvisional && !isProvisional.isProvisional && !isProvisional.bot;
}
function getFractionalPremiumUnitsHours(arr) {
  const mapped = arr.map(f88613);
  return mapped.reduce(f88614, 0);
}
function calculateYearlyPlanDollarSavingsAmount(subscriptionPlan) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let priceOptions = arg2;
  if (arg2 === undefined) {
    priceOptions = {};
  }
  obj2 = { subscriptionPlan, isGift: flag, priceOptions };
  const tmp = calculateMonthlyPriceEquivalentTotal(obj2);
  if (null != tmp) {
    if (tmp > 0) {
      const tmp5 = getPrice(subscriptionPlan.id, false, flag, priceOptions);
      const diff = tmp - tmp5.amount;
      let tmp7 = null;
      if (diff > 0) {
        tmp7 = { amount: diff, currency: tmp5.currency };
        const obj3 = { amount: diff, currency: tmp5.currency };
      }
      return tmp7;
    }
  }
  return null;
}
function calculateYearlyPlanMonthlyRateAmount(interval) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  if (interval.interval !== constants7.YEAR) {
    return null;
  } else {
    const tmp4 = getPrice(interval.id, false, flag, obj);
    let tmp5 = null;
    if (0 !== tmp4.amount) {
      const _Math = Math;
      tmp5 = { amount: Math.round(tmp4.amount / 12), currency: tmp4.currency };
      obj2 = { amount: Math.round(tmp4.amount / 12), currency: tmp4.currency };
    }
    return tmp5;
  }
}
function getDaysSincePremium(arg0) {
  let num = 0;
  if (null != arg0) {
    const _Math = Math;
    const _Date = Date;
    const self = this;
    const self2 = this;
    const differenceInCalendarDays = DateUtils.differenceInCalendarDays;
    DateUtils;
    const _Date2 = Date;
    const self3 = this;
    const self4 = this;
    const date = new Date();
    const date1 = new Date(arg0);
    num = max(differenceInCalendarDays(date, date1), 0);
  }
  return num;
}
function getDaysRemainingUntilSubscriptionCurrentPeriodEnds(currentPeriodEnd) {
  const differenceInDays = DateUtils.differenceInDays;
  DateUtils;
  const date = new Date(currentPeriodEnd.currentPeriodEnd);
  const date1 = new Date();
  return max(1, ceil(differenceInDays(date, date1)));
}
let obj3 = {
  isNewUser,
  isPremiumAtLeast: PremiumTypeUtils.isPremiumAtLeast,
  isPremium: PremiumTypeUtils.isPremium,
  isPremiumExactly: PremiumTypeUtils.isPremiumExactly,
  isPremiumEligible,
  getPrice,
  getDefaultPrice,
  getInterval,
  getIntervalString,
  getIntervalStringAsNoun,
  getPremiumType,
  getTierDisplayNameByPlanId,
  getDisplayName,
  getPremiumPlanOptions,
  formatInterval,
  getPlanDescription,
  isPremiumSku(skuId) {
    return skuId === __initData5.TIER_0 || skuId === __initData5.TIER_1 || skuId === __initData5.TIER_2;
  },
  getIntervalMonths(arg0, arg1) {
    if (arg0 === constants7.MONTH) {
      return arg1;
    } else if (arg0 === tmp.YEAR) {
      return 12 * arg1;
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error("" + arg0 + " interval subscription period not implemented");
      throw error;
    }
  },
  getUserMaxFileSize: PremiumFeatureUtils.getUserMaxFileSize,
  getSkuIdForPlan,
  getSkuIdForPremiumType(premiumType) {
    if (closure_39.TIER_0 === premiumType) {
      return __initData5.TIER_0;
    } else if (closure_39.TIER_1 === premiumType) {
      return __initData5.TIER_1;
    } else if (closure_39.TIER_2 === premiumType) {
      return __initData5.TIER_2;
    }
  },
  getNumIncludedPremiumGuildSubscriptionSlots(planId) {
    let obj3;
    if (null != closure_42[planId]) {
      let num = 0;
      if (closure_42[planId].premiumType === closure_39.TIER_2) {
        num = closure_28;
      }
      return num;
    } else {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Unsupported plan");
      obj2 = { tags: obj3 };
      obj3 = { planId };
      obj = BillingUtils;
      const result = obj.captureBillingException(error, obj2);
      throw error;
    }
  },
  getBillingInformationString,
  getExpectedRenewalDate,
  extendDateWithUnconsumedFractionalPremium,
  getUnactivatedFractionalPremiumDurationString,
  isSwitchingPlansDisabled,
  getSwitchingPlansDisabledMessage,
  isNoneSubscription,
  getPlanIdFromInvoice,
  getStatusFromInvoice,
  isBaseSubscriptionCanceled,
  getPremiumGuildIntervalPrice,
  hasAccountCredit(entitlements) {
    let someResult = null != entitlements && 0 !== entitlements.size;
    if (someResult) {
      const _Array = Array;
      const arr = Array.from(entitlements);
      someResult = arr.some((subscriptionPlanId) => {
        let tmp = null != subscriptionPlanId.subscriptionPlanId;
        const consumed = subscriptionPlanId.consumed;
        if (tmp) {
          tmp = null != subscriptionPlanId.parentId;
        }
        if (tmp) {
          tmp = !consumed;
        }
        return tmp;
      });
    }
    return someResult;
  },
  hasUnconsumedGiftForSubscriptionPlan(size, arg1) {
    let closure_0 = arg1;
    let someResult = null != size && 0 !== size.size && null != arg1;
    if (someResult) {
      const _Array = Array;
      const arr = Array.from(size);
      someResult = arr.some((subscriptionPlanId) => {
        subscriptionPlanId = subscriptionPlanId.subscriptionPlanId;
        let tmp = null != subscriptionPlanId;
        const consumed = subscriptionPlanId.consumed;
        if (tmp) {
          tmp = null != subscriptionPlanId.parentId;
        }
        if (tmp) {
          tmp = !consumed;
        }
        if (tmp) {
          tmp = subscriptionPlanId === closure_0;
        }
        return tmp;
      });
    }
    return someResult;
  },
  getBillingReviewSubheader,
  getIntervalForInvoice,
  getPremiumPlanItem,
  getGuildBoostPlanItem,
  isBoostOnlySubscription,
  getPremiumSkuIdForSubscription,
  getPremiumTypeFromSubscription,
  getUnactivatedFractionalPremiumHours: getFractionalPremiumUnitsHours,
  castPremiumSubscriptionAsSkuId,
  calculateDiscountPercentageForYearlyPlan,
  calculateYearlyPlanDollarSavingsAmount,
  calculateYearlyPlanMonthlyRateAmount,
  getDaysSincePremium,
  getDaysRemainingUntilSubscriptionCurrentPeriodEnds,
  canUseAnimatedEmojis(currentUser) {
    obj = ProductCatalog;
    return obj.canUserUse(ProductCatalog.ANIMATED_EMOJIS, currentUser);
  },
  canUseEmojisEverywhere(currentUser) {
    obj = ProductCatalog;
    return obj.canUserUse(ProductCatalog.EMOJIS_EVERYWHERE, currentUser);
  },
  canUseSoundboardEverywhere(currentUser) {
    obj = ProductCatalog;
    return obj.canUserUse(ProductCatalog.SOUNDBOARD_EVERYWHERE, currentUser);
  },
  canUseCustomCallSounds(stateFromStores) {
    obj = ProductCatalog;
    return obj.canUserUse(ProductCatalog.CUSTOM_CALL_SOUNDS, stateFromStores);
  },
  canUploadLargeFiles(currentUser) {
    obj = ProductCatalog;
    return obj.canUserUse(ProductCatalog.UPLOAD_LARGE_FILES, currentUser);
  },
  canUseBadges(currentUser) {
    obj = ProductCatalog;
    return obj.canUserUse(ProductCatalog.PROFILE_BADGES, currentUser);
  },
  canUseHighVideoUploadQuality(currentUser) {
    obj = ProductCatalog;
    return obj.canUserUse(ProductCatalog.INCREASED_VIDEO_UPLOAD_QUALITY, currentUser);
  },
  canEditDiscriminator(stateFromStores) {
    obj = ProductCatalog;
    return obj.canUserUse(ProductCatalog.CUSTOM_DISCRIMINATOR, stateFromStores);
  },
  hasBoostDiscount(stateFromStores) {
    obj = ProductCatalog;
    return obj.canUserUse(ProductCatalog.BOOST_DISCOUNT, stateFromStores);
  },
  canUseAnimatedAvatar(c3) {
    obj = ProductCatalog;
    return obj.canUserUse(ProductCatalog.ANIMATED_AVATAR, c3);
  },
  canInstallPremiumApplications(isPremiumWithFractionalPremiumOnly) {
    obj = ProductCatalog;
    return obj.canUserUse(ProductCatalog.INSTALL_PREMIUM_APPLICATIONS, isPremiumWithFractionalPremiumOnly);
  },
  canUseIncreasedMessageLength(currentUser) {
    obj = ProductCatalog;
    return obj.canUserUse(ProductCatalog.INCREASED_MESSAGE_LENGTH, currentUser);
  },
  canUseIncreasedGuildCap(currentUser) {
    obj = ProductCatalog;
    return obj.canUserUse(ProductCatalog.INCREASED_GUILD_LIMIT, currentUser);
  },
  canRedeemPremiumPerks(isPremiumWithFractionalPremiumOnly) {
    obj = ProductCatalog;
    return obj.canUserUse(ProductCatalog.REDEEM_PREMIUM_PERKS, isPremiumWithFractionalPremiumOnly);
  },
  canUsePremiumProfileCustomization(isPremiumWithFractionalPremiumOnly) {
    obj = ProductCatalog;
    return obj.canUserUse(ProductCatalog.PROFILE_PREMIUM_FEATURES, isPremiumWithFractionalPremiumOnly);
  },
  canUsePremiumAppIcons(currentUser) {
    obj = ProductCatalog;
    return obj.canUserUse(ProductCatalog.APP_ICONS, currentUser);
  },
  canUsePremiumGuildMemberProfile(currentUser) {
    obj = ProductCatalog;
    return obj.canUserUse(ProductCatalog.PREMIUM_GUILD_MEMBER_PROFILE, currentUser);
  },
  canUseClientThemes(currentUser) {
    obj = ProductCatalog;
    return obj.canUserUse(ProductCatalog.CLIENT_THEMES, currentUser);
  },
  canStreamQuality(MID, user) {
    let canUserUseResult;
    if (MID === obj2.HIGH) {
      obj2 = ProductCatalog;
      canUserUseResult = obj2.canUserUse(ProductCatalog.STREAM_HIGH_QUALITY, user);
    } else {
      obj = ProductCatalog;
      canUserUseResult = obj.canUserUse(ProductCatalog.STREAM_MID_QUALITY, user);
    }
    return canUserUseResult;
  },
  canUseQuestOrbMultiplier,
  hasFreeBoosts(stateFromStores) {
    obj = ProductCatalog;
    return obj.canUserUse(ProductCatalog.FREE_BOOSTS, stateFromStores);
  },
  canUseCustomStickersEverywhere(currentUser) {
    obj = ProductCatalog;
    return obj.canUserUse(ProductCatalog.STICKERS_EVERYWHERE, currentUser);
  },
  canUseCustomBackgrounds(stateFromStores2) {
    obj = ProductCatalog;
    return obj.canUserUse(ProductCatalog.VIDEO_FILTER_ASSETS, stateFromStores2);
  },
  canUseCollectibles,
  canUseMonthlyOrbs(stateFromStores) {
    let perks;
    const hasPerk = PerksStateUtils.hasPerk;
    PerksStateUtils;
    if (stateFromStores != null) {
      perks = stateFromStores.perks;
    }
    return hasPerk(perks, user2.Perk.MONTHLY_ORBS);
  },
  canUseShopDiscounts(currentUser) {
    let perks;
    const hasPerk = PerksStateUtils.hasPerk;
    PerksStateUtils;
    if (currentUser != null) {
      perks = currentUser.perks;
    }
    let hasPerkResult = hasPerk(perks, user2.Perk.SHOP_DISCOUNTS);
    if (!hasPerkResult) {
      const tmpResult = ProductCatalog;
      hasPerkResult = tmpResult.canUserUse(ProductCatalog.COLLECTIBLES, currentUser);
    }
    return hasPerkResult;
  },
  canUseMoreQuestOrbs(perks) {
    perks = undefined;
    const hasPerk = PerksStateUtils.hasPerk;
    PerksStateUtils;
    if (perks != null) {
      perks = perks.perks;
    }
    let hasPerkResult = hasPerk(perks, user2.Perk.MORE_QUEST_ORBS);
    if (!hasPerkResult) {
      const tmpResult = ProductCatalog;
      hasPerkResult = tmpResult.canUserUse(ProductCatalog.QUEST_ORB_MULTIPLIER, perks);
    }
    return hasPerkResult;
  },
  formatPriceString,
  StreamQuality: obj2,
};
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let currentUser;
      let tmp4;
      let tmp5;
      let tmp8;
      obj = react2;
      const cResult = obj.c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function e() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] !== stateFromStores) {
        const tmpResult2 = PremiumTypeUtils;
        const isPremiumExactlyResult = tmpResult2.isPremiumExactly(stateFromStores, closure_39.TIER_2);
        cResult[2] = stateFromStores;
        cResult[3] = isPremiumExactlyResult;
        tmp8 = isPremiumExactlyResult;
      } else {
        tmp8 = cResult[3];
      }
      return tmp8;
    }
  : () => {
      let currentUser;
      const items = [UserStore];
      obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      obj2 = PremiumTypeUtils;
      return obj2.isPremiumExactly(stateFromStores, closure_39.TIER_2);
    };
function withContextPlanPrices(arg0, arr) {
  let tmp = arg0;
  if (null != arr) {
    obj = { contextPlanPrices: Object.fromEntries(arr.map(f88594)) };
    const merged = Object.assign(arg0);
    const _Object = Object;
    tmp = obj;
  }
  return tmp;
}
function experimentalGetPrice(id, arg1) {
  let currency;
  let paymentSourceId;
  let purchaseType;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = { purchaseType: map1.DEFAULT };
    obj = { purchaseType: map1.DEFAULT };
  }
  ({ paymentSourceId, purchaseType, currency } = tmp);
  const arr = experimentalGetPrices(id, { paymentSourceId, purchaseType });
  if (0 === arr.length) {
    const _HermesInternal = HermesInternal;
    logger.warn(
      "No prices found for planId: " + id + ", paymentSourceId: " + paymentSourceId + ", purchaseType: " + purchaseType,
    );
  }
  if (null != currency) {
    let found = arr.find((currency) => currency.currency === currency.toLowerCase());
    if (null == found) {
      let found1;
      if (null != paymentSourceId) {
        obj2 = { purchaseType };
        const tmp3Result = experimentalGetPrices(id, obj2);
        found1 = tmp3Result.find((currency) => currency.currency === currency.toLowerCase());
      }
      found = found1;
    }
    return found;
  } else {
    return arr[0];
  }
}
getSkuIdForPlan = function getSkuIdForPlan(planId) {
  let obj3;
  if (null == closure_42[planId]) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Unsupported plan");
    obj2 = { tags: obj3 };
    obj3 = { planId };
    obj = BillingUtils;
    const result = obj.captureBillingException(error, obj2);
    throw error;
  } else {
    return closure_42[planId].skuId;
  }
};
function subscriptionHasPremiumGuildPlan(subscription) {
  const additionalPlans = subscription.additionalPlans;
  const items = [__initData5.GUILD];
  const planIdsForSkus = SubscriptionPlanStore.getPlanIdsForSkus(items);
  _modDef38(null != planIdsForSkus, "Missing guildSubscriptionPlanIds");
  const found = additionalPlans.find((planId) => planIdsForSkus.includes(planId.planId));
  let num = 0;
  if (null != found) {
    num = found.quantity;
  }
  return num > 0;
}
function isPremiumBaseSubscriptionPlan(arg0) {
  return set.has(arg0);
}
function isPremiumGuildSubscriptionPlan(planId) {
  return set.has(planId);
}
function isSubscriptionPrepaidPaymentSource(paymentSourceId) {
  let tmp = null != paymentSourceId.paymentSourceId;
  if (tmp) {
    paymentSourceId = paymentSourceId.paymentSourceId;
    let flag = false;
    if (null != paymentSourceId) {
      const paymentSource = PaymentSourceStore.getPaymentSource(paymentSourceId);
      const hasItem = null != paymentSource && set3.has(paymentSource.type);
      flag = hasItem;
    }
    tmp = flag;
  }
  return tmp;
}
function isPrepaidPaymentSource(paymentSourceId) {
  if (null == paymentSourceId) {
    return false;
  } else {
    const paymentSource = PaymentSourceStore.getPaymentSource(paymentSourceId);
    const hasItem = null != paymentSource && set3.has(paymentSource.type);
    return hasItem;
  }
}
function isSubscriptionStatusFailedPayment(arg0) {
  return arg0 === constants4.PAST_DUE || arg0 === constants4.ACCOUNT_HOLD || arg0 === constants4.BILLING_RETRY;
}
function getFormattedPlanPriceFromInvoice(findInvoiceItemByPlanId, arg1, id) {
  let amount;
  const result = findInvoiceItemByPlanId.findInvoiceItemByPlanId(id.id);
  if (null == result) {
    obj = { paymentSourceId: null, currency: null };
    ({ paymentSourceId: obj.paymentSourceId, currency: obj.currency } = arg1);
    amount = getPrice(id.id, false, false, obj).amount;
  } else {
    amount = result.amount;
  }
  const formatRate = PriceUtils.formatRate;
  PriceUtils;
  obj2 = PriceUtils;
  return formatRate(obj2.formatPrice(amount, findInvoiceItemByPlanId.currency), id.interval, id.intervalCount);
}
function getExternalSubscriptionMethodUrl(paymentGateway, PAYMENT_SOURCE_MANAGEMENT) {
  if (constants2.APPLE_PARTNER !== paymentGateway) {
    if (constants2.APPLE_ADVANCED_COMMERCE !== paymentGateway) {
      if (constants2.APPLE !== paymentGateway) {
        if (constants2.GOOGLE === paymentGateway) {
          return constants10[PAYMENT_SOURCE_MANAGEMENT];
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const self = this;
          const self2 = this;
          const error = new Error("Invalid external payment gateway " + paymentGateway);
          throw error;
        }
      }
    }
  }
  return constants9[PAYMENT_SOURCE_MANAGEMENT];
}
function getItemsFromNewAdditionalPlans(renewalMutations, arg1) {
  let closure_0 = renewalMutations;
  renewalMutations = renewalMutations.renewalMutations;
  let items;
  if (renewalMutations != null) {
    items = renewalMutations.items;
  }
  if (items == null) {
    items = renewalMutations.items;
  }
  const items1 = [];
  const found = items.find(f88606);
  if (null != found) {
    items1.push(found);
  }
  const items2 = [...arg1];
  items1.push.apply(items2);
  return items1.map((planId) => {
    const items = renewalMutations.items;
    for (const item10008 of items) {
      if (planId.planId === item10008.planId) {
        obj2 = {};
        let merged = Object.assign(tmp);
        let merged1 = Object.assign(planId);
        obj.return();
        return obj2;
      }
    }
    return planId;
  });
}
function getItemsWithoutPremiumPlanItem(arr) {
  return arr.filter(f88608);
}
canUseQuestOrbMultiplier = function canUseQuestOrbMultiplier(perks) {
  obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.QUEST_ORB_MULTIPLIER, perks);
};
canUseCollectibles = function canUseCollectibles(user) {
  obj = ProductCatalog;
  return obj.canUserUse(ProductCatalog.COLLECTIBLES, user);
};
function isTrialOffer(arg0) {
  return null != arg0 && "trialId" in arg0;
}
function isDiscountOffer(arg0) {
  return null != arg0 && "discountId" in arg0;
}
function getFractionalPremiumUnitsHoursFromSkuIds(flatMapResult) {
  return flatMapResult.reduce(f88614, 0);
}
const freezeResult = freeze(obj3);
let result = size.fileFinishedImporting("utils/PremiumUtils.tsx");

export default freezeResult;
export { Branding };
export const StreamQuality = obj2;
export const getPremiumBranding = function getPremiumBranding(renewalMutations) {
  let TIER_0;
  const planId = renewalMutations.planId;
  if (set2.has(planId)) {
    const additionalPlans = renewalMutations.additionalPlans;
    const items = [__initData5.GUILD];
    const planIdsForSkus = SubscriptionPlanStore.getPlanIdsForSkus(items);
    _modDef38(null != planIdsForSkus, "Missing guildSubscriptionPlanIds");
    const found = additionalPlans.find((planId) => planIdsForSkus.includes(planId.planId));
    let num2 = 0;
    if (null != found) {
      num2 = found.quantity;
    }
    if (num2 > 0) {
      TIER_0 = obj.BUNDLE;
    }
    return TIER_0;
  }
  if (planId !== SubscriptionPlans.PREMIUM_MONTH_TIER_0) {
    if (planId !== SubscriptionPlans.PREMIUM_YEAR_TIER_0) {
      if (planId !== SubscriptionPlans.PREMIUM_MONTH_TIER_1) {
        if (planId !== SubscriptionPlans.PREMIUM_YEAR_TIER_1) {
          if (planId !== SubscriptionPlans.PREMIUM_MONTH_TIER_2) {
            if (planId !== SubscriptionPlans.PREMIUM_YEAR_TIER_2) {
              if (planId !== SubscriptionPlans.PREMIUM_3_MONTH_TIER_2) {
                if (planId !== SubscriptionPlans.PREMIUM_6_MONTH_TIER_2) {
                  TIER_0 = obj.PREMIUM_GUILD;
                }
              }
            }
          }
          TIER_0 = obj.TIER_2;
        }
      }
      TIER_0 = obj.TIER_1;
    }
  }
  TIER_0 = obj.TIER_0;
};
export { getPremiumPlanItem };
export { getDefaultPrice };
export { withContextPlanPrices };
export const usePlanSelectPriceState = tmp6;
export { getPrice };
export const getCountryPrices = function getCountryPrices(planId) {
  let DEFAULT;
  if (DEFAULT === undefined) {
    DEFAULT = map1.DEFAULT;
  }
  return getPurchaseTypePrices(planId, DEFAULT).countryPrices;
};
export { experimentalGetPrices };
export { experimentalGetPrice };
export { getServerPriceFromClientPrice };
export { getItemPlansTotalServerPrice };
export const getSubscriptionWithNewPlansTotalServerPrice = function getSubscriptionWithNewPlansTotalServerPrice(
  renewalMutations,
  arg1,
  currency,
  id,
) {
  let mapped;
  let items = arg1;
  if (null === arg1) {
    _modDef38(null !== renewalMutations, "Subscription can't be null");
    items = [];
  }
  if (null !== renewalMutations) {
    renewalMutations = renewalMutations.renewalMutations;
    let items1;
    if (renewalMutations != null) {
      items1 = renewalMutations.items;
    }
    if (items1 == null) {
      items1 = renewalMutations.items;
    }
    const items2 = [];
    const found = items1.find(f88606);
    if (null != found) {
      items2.push(found);
    }
    const push = items2.push;
    const items3 = [];
    HermesBuiltin.arraySpread(items3, items, 0);
    HermesBuiltin.apply(push, items3, items2);
    mapped = items2.map((planId) => {
      const items = renewalMutations.items;
      for (const item10008 of items) {
        if (planId.planId === item10008.planId) {
          obj2 = {};
          let merged = Object.assign(tmp);
          let merged1 = Object.assign(planId);
          obj.return();
          return obj2;
        }
      }
      return planId;
    });
  } else {
    mapped = items.filter(f88608);
  }
  return getItemPlansTotalServerPrice(mapped, currency, id);
};
export { getInterval };
export const getDiscountIntervalString = function getDiscountIntervalString(arg0) {
  if (constants5.MONTH === arg0) {
    const intl2 = intl30.intl;
    return intl2.string(intl30.t.FPybU7);
  } else if (constants5.YEAR === arg0) {
    const intl = intl30.intl;
    return intl.string(intl30.t.tfqrhj);
  } else {
    if (constants5.DAY !== arg0) {
      const WEEK = constants5.WEEK;
    }
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Unexpected interval");
    throw error;
  }
};
export { getIntervalString };
export { getIntervalStringAsNoun };
export { getPremiumType };
export { getDisplayName };
export const getDisplayNameFromSku = function getDisplayNameFromSku(skuId1) {
  let obj3;
  if (__initData5.TIER_0 === skuId1) {
    const intl3 = intl30.intl;
    return intl3.string(intl30.t["t9uG/o"]);
  } else if (__initData5.TIER_1 === skuId1) {
    const intl2 = intl30.intl;
    return intl2.string(intl30.t.FSOz78);
  } else if (__initData5.TIER_2 === skuId1) {
    const intl = intl30.intl;
    return intl.string(intl30.t.lG6a5x);
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Unsupported sku");
    obj2 = { tags: obj3 };
    obj3 = { skuId: skuId1 };
    obj = BillingUtils;
    const result = obj.captureBillingException(error, obj2);
    throw error;
  }
};
export { getTierDisplayNameByPlanId };
export const getPremiumTypeDisplayName = function getPremiumTypeDisplayName(TIER_0, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (closure_39.TIER_0 === TIER_0) {
    let str2 = "Basic";
    if (!flag) {
      const intl3 = intl30.intl;
      str2 = intl3.string(intl30.t["t9uG/o"]);
    }
    return str2;
  } else if (closure_39.TIER_1 === TIER_0) {
    let str = "Classic";
    if (!flag) {
      const intl2 = intl30.intl;
      str = intl2.string(intl30.t.FSOz78);
    }
    return str;
  } else if (closure_39.TIER_2 === TIER_0) {
    const intl = intl30.intl;
    return intl.string(intl30.t.lG6a5x);
  }
};
export const getPlanDescriptionFromInvoice = function getPlanDescriptionFromInvoice(hasDiscountApplied) {
  let activeDiscountInfo;
  let amount;
  let formatRate;
  let hasFractionalPremiumWithSub;
  let includePremiumGuilds;
  let obj3;
  let planId;
  let renewalInvoicePreview;
  let renewalInvoiceWithEntitlementsPreview;
  let subscription;
  ({ renewalInvoicePreview, subscription, includePremiumGuilds } = hasDiscountApplied);
  ({ renewalInvoiceWithEntitlementsPreview, planId } = hasDiscountApplied);
  if (includePremiumGuilds === undefined) {
    includePremiumGuilds = false;
  }
  let flag = hasDiscountApplied.hasDiscountApplied;
  if (flag === undefined) {
    flag = false;
  }
  ({ hasFractionalPremiumWithSub, activeDiscountInfo } = hasDiscountApplied);
  if (hasFractionalPremiumWithSub === undefined) {
    hasFractionalPremiumWithSub = false;
  }
  const fractionalPremiumInfo = hasDiscountApplied.fractionalPremiumInfo;
  const value = SubscriptionPlanStore.get(planId);
  _modDef38(null != value, "Missing plan");
  obj = {
    subscription,
    planId: value.id,
    price: formatRate(obj3.formatPrice(amount, renewalInvoicePreview.currency), value.interval, value.intervalCount),
    includePremiumGuilds,
    hasDiscountApplied: flag,
    activeDiscountInfo,
    renewalInvoiceWithoutEntitlementsPreview: renewalInvoicePreview,
    renewalInvoiceWithEntitlementsPreview,
    hasFractionalPremiumWithSub,
    fractionalPremiumInfo,
  };
  const result = renewalInvoicePreview.findInvoiceItemByPlanId(value.id);
  if (null == result) {
    const obj4 = { paymentSourceId: null, currency: null };
    ({ paymentSourceId: obj2.paymentSourceId, currency: obj2.currency } = subscription);
    amount = getPrice(value.id, false, false, obj4).amount;
  } else {
    amount = result.amount;
  }
  formatRate = PriceUtils.formatRate;
  PriceUtils;
  obj3 = PriceUtils;
  return getPlanDescription(obj);
};
export const getExternalPlanDisplayName = function getExternalPlanDisplayName(renewalMutations) {
  let Pi5yMJ;
  let additionalPlans;
  let formatToPlainStringResult;
  let planId;
  ({ planId, additionalPlans } = renewalMutations);
  let tmp = null;
  if (!isNoneSubscription(planId)) {
    tmp = getDisplayName(planId);
  }
  let found;
  if (additionalPlans != null) {
    found = additionalPlans.find((planId) => set.has(planId.planId));
  }
  let planId1;
  if (found != null) {
    planId1 = found.planId;
  }
  if (planId1 === SubscriptionPlans.PREMIUM_MONTH_GUILD) {
    Pi5yMJ = intl30.t.Pi5yMJ;
  } else {
    let planId2;
    if (found != null) {
      planId2 = found.planId;
    }
    Pi5yMJ = null;
    if (planId2 === tmp5.PREMIUM_YEAR_GUILD) {
      Pi5yMJ = intl30.t.H4KPuV;
    }
  }
  if (null != Pi5yMJ) {
    const intl = intl30.intl;
    let quantity;
    const formatToPlainString = intl.formatToPlainString;
    if (found != null) {
      quantity = found.quantity;
    }
    obj = { num: quantity };
    formatToPlainStringResult = formatToPlainString(Pi5yMJ, obj);
  }
  if (null != tmp) {
    if (null != formatToPlainStringResult) {
      const intl2 = intl30.intl;
      obj2 = { premiumDescription: tmp, premiumGuildDescription: formatToPlainStringResult };
      return intl2.formatToPlainString(intl30.t.FN5T9r, obj2);
    }
  }
  if (null != tmp) {
    return tmp;
  } else if (null != formatToPlainStringResult) {
    return formatToPlainStringResult;
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Subscription without premium or premium guild subscription");
    throw error;
  }
};
export { getPremiumPlanOptions };
export const getPlanIdForPremiumType = function getPlanIdForPremiumType(premiumType, c3) {
  const items = [,];
  ({ MONTH: arr[0], YEAR: arr[1] } = constants7);
  set = new Set(items);
  if (set.has(c3)) {
    if (closure_39.TIER_0 === premiumType) {
      let PREMIUM_YEAR_TIER_0;
      if (c3 === constants7.MONTH) {
        PREMIUM_YEAR_TIER_0 = SubscriptionPlans.PREMIUM_MONTH_TIER_0;
      } else {
        PREMIUM_YEAR_TIER_0 = SubscriptionPlans.PREMIUM_YEAR_TIER_0;
      }
      return PREMIUM_YEAR_TIER_0;
    } else if (closure_39.TIER_1 === premiumType) {
      let PREMIUM_YEAR_TIER_1;
      if (c3 === constants7.MONTH) {
        PREMIUM_YEAR_TIER_1 = SubscriptionPlans.PREMIUM_MONTH_TIER_1;
      } else {
        PREMIUM_YEAR_TIER_1 = SubscriptionPlans.PREMIUM_YEAR_TIER_1;
      }
      return PREMIUM_YEAR_TIER_1;
    } else if (closure_39.TIER_2 === premiumType) {
      let PREMIUM_YEAR_TIER_2;
      if (c3 === constants7.MONTH) {
        PREMIUM_YEAR_TIER_2 = SubscriptionPlans.PREMIUM_MONTH_TIER_2;
      } else {
        PREMIUM_YEAR_TIER_2 = SubscriptionPlans.PREMIUM_YEAR_TIER_2;
      }
      return PREMIUM_YEAR_TIER_2;
    } else {
      const _Error2 = Error;
      const _HermesInternal2 = HermesInternal;
      const self3 = this;
      const self4 = this;
      const error = new Error("Unsupported premium type: " + premiumType);
      throw error;
    }
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error1 = new Error("Unsupported plan interval for premium type: " + c3);
    throw error1;
  }
};
export { getNumPremiumGuildSubscriptions };
export { subscriptionHasPremiumGuildPlan };
export { isPremiumBaseSubscriptionPlan };
export { isPremiumGuildSubscriptionPlan };
export const isPremiumSubscriptionPlan = function isPremiumSubscriptionPlan(arg0) {
  const hasItem = set.has(arg0) || set.has(arg0);
  return hasItem;
};
export const isPremiumGroupSubscriptionPlan = function isPremiumGroupSubscriptionPlan(arg0) {
  return null != arg0 && arg0 === SubscriptionPlans.PREMIUM_GROUP_MONTH;
};
export { getBillingGracePeriodDaysAndExpiresDate };
export { getExpectedRenewalDate };
export { getBillingInformationString };
export { extendDateWithUnconsumedFractionalPremium };
export { getUnactivatedFractionalPremiumDurationString };
export { isSwitchingPlansDisabled };
export { getSwitchingPlansDisabledMessage };
export { isSubscriptionPrepaidPaymentSource };
export { isPrepaidPaymentSource };
export { getCoercedPremiumGuildSubscriptionStatus };
export { isPremiumGuildSubscriptionCanceled };
export const getPremiumGuildHeaderDescription = function getPremiumGuildHeaderDescription(arg0) {
  let fractionalPremiumInfo;
  let obj9;
  let price;
  let renewalInvoicePreview;
  let subscription;
  let user;
  ({ subscription, user, price, renewalInvoicePreview, fractionalPremiumInfo } = arg0);
  const renewalMutations = subscription.renewalMutations;
  const additionalPlans = subscription.additionalPlans;
  const value = SubscriptionPlanStore.get(subscription.planId);
  _modDef38(null != value, "Missing plan");
  const tmp5 = getNumPremiumGuildSubscriptions(additionalPlans);
  let additionalPlans1;
  if (renewalMutations != null) {
    additionalPlans1 = renewalMutations.additionalPlans;
  }
  let tmp4Result = tmp5;
  if (null != additionalPlans1) {
    tmp4Result = getNumPremiumGuildSubscriptions(renewalMutations.additionalPlans);
  }
  const bound = Math.max(0, tmp5 - tmp4Result);
  let flag = false;
  let tmp10;
  if (!subscription.isPurchasedExternally) {
    flag = false;
    tmp10 = price;
    if (null == price) {
      let amount = null;
      if (null != renewalInvoicePreview) {
        const invoiceItems = renewalInvoicePreview.invoiceItems;
        const found = invoiceItems.find((subscriptionPlanId) => set.has(subscriptionPlanId.subscriptionPlanId));
        if (null != found) {
          amount = found.amount;
        }
      }
      let flag2 = false;
      if (null == amount) {
        let tmp14 = tmp5;
        if (tmp4Result > 0 && bound > 0) {
          tmp14 = tmp4Result;
        }
        try {
          amount =
            getPremiumGuildIntervalPrice(subscription.planId, subscription.paymentSourceId, subscription.currency, user)
              .amount * tmp14;
          flag2 = false;
        } catch (err) {
          flag2 = true;
        }
      }
      let formatPriceResult;
      if (null != amount) {
        obj = PriceUtils;
        formatPriceResult = obj.formatPrice(amount, subscription.currency);
      }
      tmp10 = formatPriceResult;
      flag = flag2;
    }
  }
  let str = "";
  if (null != tmp10) {
    obj2 = PriceUtils;
    str = obj2.formatRate(tmp10, value.interval, value.intervalCount);
  }
  let flag3;
  if (renewalInvoicePreview != null) {
    flag3 = renewalInvoicePreview.taxInclusive;
  }
  if (flag3 == null) {
    const latestInvoice = subscription.latestInvoice;
    let taxInclusive;
    if (latestInvoice != null) {
      taxInclusive = latestInvoice.taxInclusive;
    }
    flag3 = taxInclusive;
  }
  if (flag3 == null) {
    flag3 = true;
  }
  if (isPremiumGuildSubscriptionCanceled(subscription)) {
    let format4Result;
    const intl8 = intl30.intl;
    const format4 = intl8.format;
    const t4 = intl30.t;
    if (subscription.isPurchasedExternally || flag) {
      const obj3 = { quantity: tmp5 };
      format4Result = format4(t4["3/WTrI"], obj3);
    } else if (flag3) {
      const obj4 = { quantity: tmp5, rate: str };
      format4Result = format4(t4["0ozBSB"], obj4);
    } else {
      const obj5 = { quantity: tmp5, rate: str };
      format4Result = format4(t4["yjsv/s"], obj5);
    }
    return format4Result;
  } else {
    const status = subscription.status;
    if (constants4.ACCOUNT_HOLD === status) {
      let format3Result;
      const intl7 = intl30.intl;
      const format3 = intl7.format;
      const t3 = intl30.t;
      if (subscription.isPurchasedExternally || flag) {
        const obj6 = { quantity: tmp5, boostQuantity: tmp5 };
        format3Result = format3(t3.Nlf3nc, obj6);
      } else if (flag3) {
        const obj7 = { quantity: tmp5, boostQuantity: tmp5, rate: str };
        format3Result = format3(t3.oiRy7v, obj7);
      } else {
        const obj8 = { quantity: tmp5, boostQuantity: tmp5, rate: str };
        format3Result = format3(t3["0QxOAi"], obj8);
      }
      return format3Result;
    } else {
      if (constants4.PAUSE_PENDING !== status) {
        if (constants4.PAUSED !== status) {
          if (constants4.PAST_DUE === status) {
            if (subscription.isBoostOnly) {
              const intl4 = intl30.intl;
              const format2 = intl4.format;
              const obj10 = {
                endDate: obj9.dateFormat(getBillingGracePeriodDaysAndExpiresDate(subscription).expiresDate, "LL"),
                onClick() {
                  openURLDefault("https://support.discord.com/hc/articles/23082866222871");
                },
              };
              const prop = intl30.t["d+0vwo"];
              obj9 = DateUtils;
              return format2(prop, obj10);
            }
          }
          const tmp26 = intl30;
          if (tmp4Result > 0 && bound > 0) {
            if (subscription.isPurchasedExternally || flag) {
              const intl3 = tmp26.intl;
              const obj11 = { activeQuantity: tmp4Result, pendingQuantity: bound };
              return intl3.format(intl30.t["krRy+d"], obj11);
            } else {
              let BmaudS;
              let tmp28;
              const t2 = tmp26.t;
              if (flag3) {
                BmaudS = t2["4nc7+E"];
                tmp28 = require;
              } else {
                BmaudS = t2.BmaudS;
                tmp28 = require;
              }
              const intl2 = tmp28(1126).intl;
              const obj12 = { activeQuantity: tmp4Result, pendingQuantity: bound, rate: str };
              return intl2.format(BmaudS, obj12);
            }
          } else {
            let formatResult;
            const intl = tmp26.intl;
            const format = intl.format;
            const t = intl30.t;
            if (subscription.isPurchasedExternally || flag) {
              const obj13 = { quantity: tmp5 };
              formatResult = format(t["5iud9s"], obj13);
            } else if (flag3) {
              const obj14 = { quantity: tmp5, rate: str };
              formatResult = format(t.eDwrLA, obj14);
            } else {
              const obj15 = { quantity: tmp5, rate: str };
              formatResult = format(t.ijSDcI, obj15);
            }
            return formatResult;
          }
        }
      }
      if (null != fractionalPremiumInfo) {
        let stringResult;
        if (!fractionalPremiumInfo.isFractionalPremiumActive) {
          const intl5 = intl30.intl;
          stringResult = intl5.string(intl30.t.CduWAm);
        }
        return stringResult;
      }
      const intl6 = intl30.intl;
      const obj16 = { quantity: tmp5 };
      stringResult = intl6.format(intl30.t["5iud9s"], obj16);
    }
  }
};
export { getFormattedPriceForPlan };
export const getFormattedRateForPlan = function getFormattedRateForPlan(interval, arg1, arg2) {
  const tmp = getFormattedPriceForPlan(interval, arg1, arg2);
  obj = PriceUtils;
  return obj.formatRate(tmp, interval.interval, interval.intervalCount);
};
export { getPlanIdFromInvoice };
export { getStatusFromInvoice };
export { isBaseSubscriptionCanceled };
export { isSubscriptionStatusFailedPayment };
export { getFormattedPlanPriceFromInvoice };
export { getPremiumGuildIntervalPrice };
export { getBillingReviewSubheader };
export { getIntervalForInvoice };
export { getDefaultCurrency };
export const formatTrialOfferIntervalDuration = function formatTrialOfferIntervalDuration(intervalType) {
  let MONTH = intervalType.intervalType;
  if (MONTH === undefined) {
    MONTH = constants7.MONTH;
  }
  let num = intervalType.intervalCount;
  if (num === undefined) {
    num = 1;
  }
  let flag = intervalType.capitalize;
  if (flag === undefined) {
    flag = false;
  }
  if (constants7.DAY === MONTH) {
    let formatToPlainString3Result;
    if (num >= 7) {
      if (num % 7 === 0) {
        let formatToPlainString4Result;
        const intl4 = intl30.intl;
        const formatToPlainString4 = intl4.formatToPlainString;
        const t4 = intl30.t;
        if (flag) {
          obj2 = { weeks: num / 7 };
          formatToPlainString4Result = formatToPlainString4(t4.fRNBRX, obj2);
        } else {
          const obj3 = { weeks: num / 7 };
          formatToPlainString4Result = formatToPlainString4(t4.EIpHEj, obj3);
        }
        formatToPlainString3Result = formatToPlainString4Result;
      }
      return formatToPlainString3Result;
    }
    const intl3 = intl30.intl;
    const formatToPlainString3 = intl3.formatToPlainString;
    const t3 = intl30.t;
    if (flag) {
      const obj4 = { days: num };
      formatToPlainString3Result = formatToPlainString3(t3["6Cdzoy"], obj4);
    } else {
      const obj5 = { days: num };
      formatToPlainString3Result = formatToPlainString3(t3["kbBj/h"], obj5);
    }
  } else if (constants7.MONTH === MONTH) {
    let formatToPlainString2Result;
    const intl2 = intl30.intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    const t2 = intl30.t;
    if (flag) {
      const obj6 = { months: num };
      formatToPlainString2Result = formatToPlainString2(t2.x5MgxS, obj6);
    } else {
      const obj7 = { months: num };
      formatToPlainString2Result = formatToPlainString2(t2["4SEnCZ"], obj7);
    }
    return formatToPlainString2Result;
  } else if (constants7.YEAR === MONTH) {
    let formatToPlainStringResult;
    const intl = intl30.intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = intl30.t;
    if (flag) {
      const obj8 = { years: num };
      formatToPlainStringResult = formatToPlainString(t["h+63yl"], obj8);
    } else {
      obj = { years: num };
      formatToPlainStringResult = formatToPlainString(t["9DFiHk"], obj);
    }
    return formatToPlainStringResult;
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Unsupported interval duration.");
    throw error;
  }
};
export { formatTrialCtaIntervalDuration };
export const formatTrialCtaIntervalDurationFromTrialOffer = function formatTrialCtaIntervalDurationFromTrialOffer(
  subscriptionTrial,
  TIER_2,
) {
  if (null != subscriptionTrial) {
    if (null != subscriptionTrial.subscriptionTrial) {
      if (subscriptionTrial.subscriptionTrial.skuId === TIER_2) {
        obj = { intervalType: null, intervalCount: null };
        ({ interval: obj.intervalType, intervalCount: obj.intervalCount } = subscriptionTrial.subscriptionTrial);
        return formatTrialCtaIntervalDuration(obj);
      }
    }
  }
  return null;
};
export const formatIntervalDuration = function formatIntervalDuration(intervalType) {
  let MONTH = intervalType.intervalType;
  if (MONTH === undefined) {
    MONTH = constants7.MONTH;
  }
  let num = intervalType.intervalCount;
  if (num === undefined) {
    num = 1;
  }
  let flag = intervalType.capitalize;
  if (flag === undefined) {
    flag = false;
  }
  if (constants7.DAY === MONTH) {
    let formatToPlainString3Result;
    if (num >= 7) {
      if (num % 7 === 0) {
        let formatToPlainString4Result;
        const intl4 = intl30.intl;
        const formatToPlainString4 = intl4.formatToPlainString;
        const t4 = intl30.t;
        if (flag) {
          obj2 = { weeks: num / 7 };
          formatToPlainString4Result = formatToPlainString4(t4.iVZYyl, obj2);
        } else {
          const obj3 = { weeks: num / 7 };
          formatToPlainString4Result = formatToPlainString4(t4.EmoBD2, obj3);
        }
        formatToPlainString3Result = formatToPlainString4Result;
      }
      return formatToPlainString3Result;
    }
    const intl3 = intl30.intl;
    const formatToPlainString3 = intl3.formatToPlainString;
    const t3 = intl30.t;
    if (flag) {
      const obj4 = { days: num };
      formatToPlainString3Result = formatToPlainString3(t3.jzH70Z, obj4);
    } else {
      const obj5 = { days: num };
      formatToPlainString3Result = formatToPlainString3(t3["k2UNz+"], obj5);
    }
  } else if (constants7.MONTH === MONTH) {
    let formatToPlainString2Result;
    const intl2 = intl30.intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    const t2 = intl30.t;
    if (flag) {
      const obj6 = { months: num };
      formatToPlainString2Result = formatToPlainString2(t2.erUSmA, obj6);
    } else {
      const obj7 = { months: num };
      formatToPlainString2Result = formatToPlainString2(t2.kridzK, obj7);
    }
    return formatToPlainString2Result;
  } else if (constants7.YEAR === MONTH) {
    let formatToPlainStringResult;
    const intl = intl30.intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = intl30.t;
    if (flag) {
      const obj8 = { years: num };
      formatToPlainStringResult = formatToPlainString(t.IfYQVC, obj8);
    } else {
      obj = { years: num };
      formatToPlainStringResult = formatToPlainString(t.PClsrw, obj);
    }
    return formatToPlainStringResult;
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Unsupported interval duration.");
    throw error;
  }
};
export { getExternalSubscriptionMethodUrl };
export const hasPremiumSubscriptionToDisplay = function hasPremiumSubscriptionToDisplay(
  currentUser,
  premiumTypeSubscription,
) {
  obj = PremiumTypeUtils;
  let isPremiumResult = obj.isPremium(currentUser);
  if (!isPremiumResult) {
    let status;
    if (premiumTypeSubscription != null) {
      status = premiumTypeSubscription.status;
    }
    isPremiumResult =
      status === constants4.PAST_DUE || status === constants4.ACCOUNT_HOLD || status === constants4.BILLING_RETRY;
  }
  return isPremiumResult;
};
export const useHasPremiumSubscriptionToDisplay = tmp8;
export { getItemsFromNewAdditionalPlans };
export { getItemsWithoutPremiumPlanItem };
export { getItemsWithUpsertedPlanIdForGroup };
export const getItemsWithUpsertedPremiumPlanId = function getItemsWithUpsertedPremiumPlanId(
  renewalMutations,
  basePlanId,
) {
  return getItemsWithUpsertedPlanIdForGroup(renewalMutations, basePlanId, 1, closure_32);
};
export const getItemsWithUpsertedPremiumGuildPlan = function getItemsWithUpsertedPremiumGuildPlan(
  renewalMutations,
  quantity,
  planId,
) {
  return getItemsWithUpsertedPlanIdForGroup(renewalMutations, planId, quantity, closure_31);
};
export const coerceExistingItemsToNewItemInterval = function coerceExistingItemsToNewItemInterval(c0) {
  let found = _require.find((item) => !("id" in item));
  if (found == null) {
    found = _require.find((planId) => set.has(planId.planId));
  }
  let mapped = _require;
  if (null != found) {
    const value = SubscriptionPlanStore.get(found.planId);
    importDefault = value;
    let tmp7 = _modDef38(null != value, "Missing plan");
    mapped = _require.map((planId) => {
      if (planId === found) {
        return planId;
      } else {
        importDefault = SubscriptionPlanStore.get(planId.planId);
        _modDef38(null != importDefault, "Missing plan");
        const tmp7 = importDefault;
        if (importDefault.interval === importDefault.interval) {
          if (importDefault.intervalCount === importDefault.intervalCount) {
            return planId;
          }
        }
        const forSkuAndInterval = SubscriptionPlanStore.getForSkuAndInterval(
          importDefault.skuId,
          tmp11.interval,
          tmp11.intervalCount,
        );
        tmp7(38)(null != forSkuAndInterval, "Missing planForInterval");
        obj = { planId: forSkuAndInterval.id };
        const merged = Object.assign(planId);
        return obj;
      }
    });
  }
  return mapped;
};
export const getMaxFileSizeForPremiumType = function getMaxFileSizeForPremiumType(TIER_2, arg1) {
  let fileSize;
  obj = arg1;
  if (arg1 === undefined) {
    obj = { useSpace: true };
  }
  if (TIER_2 === closure_39.TIER_2) {
    obj2 = NitroFileUploadExperiments;
    fileSize = obj2.getNitroFileUploadLimitBytes({ location: "getMaxFileSizeForPremiumType" });
  } else {
    fileSize = BottomSheet[TIER_2].fileSize;
  }
  const obj3 = FileSizeUtils;
  const obj4 = { useKibibytes: true, useSpace: obj.useSpace };
  return obj3.formatSize(fileSize / 1024, obj4);
};
export { getGuildBoostPlanItem };
export { isBoostOnlySubscription };
export { getPremiumSkuIdForSubscription };
export { getPremiumTypeFromSubscription };
export { isNewUser };
export { formatPriceString };
export { castPremiumSubscriptionAsSkuId };
export const getPremiumTypeFromPlanId = function getPremiumTypeFromPlanId(value) {
  if (SubscriptionPlans.PREMIUM_MONTH_TIER_0 === value) {
    return { premiumType: closure_39.TIER_0, planInterval: constants7.MONTH };
  } else if (SubscriptionPlans.PREMIUM_YEAR_TIER_0 === value) {
    return { premiumType: closure_39.TIER_0, planInterval: constants7.YEAR };
  } else {
    if (SubscriptionPlans.PREMIUM_MONTH_TIER_2 !== value) {
      if (SubscriptionPlans.PREMIUM_GROUP_MONTH !== value) {
        if (SubscriptionPlans.PREMIUM_YEAR_TIER_2 === value) {
          return { premiumType: closure_39.TIER_2, planInterval: constants7.YEAR };
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const self = this;
          const self2 = this;
          const error = new Error("Unsupported gifting planId: " + value);
          throw error;
        }
      }
    }
    return { premiumType: closure_39.TIER_2, planInterval: constants7.MONTH };
  }
};
export const isNitroLockedState = function isNitroLockedState(arg0) {
  return "isNitroLocked" in arg0;
};
export const isPremiumAtLeast = PremiumTypeUtils.isPremiumAtLeast;
export const isPremiumAtMost = PremiumTypeUtils.isPremiumAtMost;
export const isPremium = PremiumTypeUtils.isPremium;
export const isPremiumExactly = PremiumTypeUtils.isPremiumExactly;
export const useHasTier2Premium = tmp9;
export const getOfferNoticeThreshold = function getOfferNoticeThreshold(trialId) {
  const tmp2 = null != trialId && "trialId" in trialId;
  if (tmp2) {
    trialId = trialId.trialId;
    if (__initData4 === trialId) {
      return closure_45;
    } else if (closure_36 === trialId) {
      return numOpens;
    } else {
      return closure_46;
    }
  } else {
    return closure_46;
  }
};
export { isTrialOffer };
export { isDiscountOffer };
export { formatInterval };
export { isPremiumEligible };
export { getFractionalPremiumUnitsHours };
export { getFractionalPremiumUnitsHoursFromSkuIds };
export { getMonthlyPrice };
export const getSavingsPercent = function getSavingsPercent(subscriptionPlan) {
  subscriptionPlan = subscriptionPlan.subscriptionPlan;
  let tmp3 = closure_15[subscriptionPlan.planId];
  if (null != subscriptionPlan) {
    tmp3 = calculateDiscountPercentageForYearlyPlan(subscriptionPlan, tmp, tmp2);
  }
  return tmp3;
};
export { calculateMonthlyPriceEquivalentTotal };
export { calculateDiscountPercentageForYearlyPlan };
export { calculateYearlyPlanDollarSavingsAmount };
export { calculateYearlyPlanMonthlyRateAmount };
export { getDaysSincePremium };
export { getDaysRemainingUntilSubscriptionCurrentPeriodEnds };
