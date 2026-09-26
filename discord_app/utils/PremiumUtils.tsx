// === Module 4488: PremiumUtils ===

// Module 4488 (PremiumUtils)
import LoggerDefault from "Logger" /* 3 */;
import _modDef38 from "module_38" /* 38 */;
import initialize from "initialize" /* 504 */;
import DurationsDefault from "Durations" /* 1091 */;
import util from "util" /* 1115 */;
import PerksStateUtils from "PerksStateUtils" /* 1378 */;
import user2 from "user" /* 1380 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1970 */;
import _modDef3199 from "module_3199" /* 3199 */;
import _modDef4421 from "module_4421" /* 4421 */;
import PremiumSubscription from "PremiumSubscription" /* 4500 */;
import BillingUtils from "BillingUtils" /* 4503 */;
import DateUtils from "DateUtils" /* 4512 */;
import openURLDefault from "openURL" /* 4519 */;
import FileSizeUtils from "FileSizeUtils" /* 4731 */;
import NitroFileUploadExperiments from "NitroFileUploadExperiments" /* 5442 */;
import PriceUtils from "PriceUtils" /* 6655 */;
import CheckoutError from "CheckoutError" /* 10986 */;
import useFPDurationLeft from "useFPDurationLeft" /* 13002 */;
import ProductCatalog from "ProductCatalog" /* 13527 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import BillingInfoStore from "BillingInfoStore" /* 4490 */;
import PaymentSourceStore from "PaymentSourceStore" /* 4491 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4493 */;
import SubscriptionStore from "SubscriptionStore" /* 4494 */;

require = fn;
function getPremiumPlanItem(subscription) {
  const items = subscription.items;
  return items.find((planId) => set.has(planId.planId));
}
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
  if (flag2 === undefined) {
    flag3 = true;
  }
  let paymentSourceId = PaymentSourceStore.defaultPaymentSourceId;
  const premiumTypeSubscription = SubscriptionStore.getPremiumTypeSubscription();
  if (tmp3) {
    paymentSourceId = premiumTypeSubscription.paymentSourceId;
  }
  return getPrice(PREMIUM_MONTH_TIER_2, flag, flag2, { paymentSourceId, currency }, flag3);
}
function getPrice(planId) {
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
    if (null != contextPlanPrices[planId]) {
      if (!tmp2) {
        ({ amount: obj2.amount, currency: obj2.currency, exponent: obj2.exponent } = tmp);
        return { amount: null, currency: null, exponent: null, tax: 0, taxInclusive: false };
      }
    }
    tmp2 = null != currency && null != contextPlanPrices[planId] && contextPlanPrices[planId].currency !== currency;
  }
  if (null != SubscriptionPlanStore.get(planId)) {
    let str2 = constants3.DEFAULT;
    if (flag2) {
      str2 = constants3.GIFT;
    } else if (flag) {
      str2 = constants3.PREMIUM_TIER_1;
    }
    const obj5 = { paymentSourceId, purchaseType: str2, currency };
    ({ paymentSourceId: paymentSourceId2, purchaseType, currency: currency2 } = obj5);
    const obj6 = { paymentSourceId: paymentSourceId2, purchaseType };
    const arr = experimentalGetPrices(planId, obj6);
    if (0 === arr.length) {
      const _HermesInternal = HermesInternal;
      logger.warn("No prices found for planId: " + planId + ", paymentSourceId: " + paymentSourceId2 + ", purchaseType: " + purchaseType);
    }
    if (null != currency2) {
      let found = arr.find((currency) => currency.currency === currency.toLowerCase());
      if (null == found) {
        let found1;
        if (null != paymentSourceId2) {
          const obj7 = { purchaseType };
          found1 = experimentalGetPrices(planId, obj7).find((currency) => currency.currency === currency.toLowerCase());
          const tmp10Result = experimentalGetPrices(planId, obj7);
        }
        found = found1;
      }
      let first = found;
    } else {
      first = arr[0];
    }
    if (null == first) {
      const _Error = Error;
      const error = new Error("Couldn't find price");
      if (flag3) {
        const obj8 = { extra: null, tags: null };
        const obj9 = { paymentSourceId };
        obj8.extra = obj9;
        const obj11 = { purchaseType: str2.toString(), planId, currency: null };
        if (currency == null) {
          currency = "unknown";
        }
        obj11.currency = currency;
        obj8.tags = obj11;
        const result = BillingUtils.captureBillingException(error, obj8);
      }
      throw error;
    } else {
      return first;
    }
  } else {
    const _Error2 = Error;
    const error1 = new Error("Plan not found");
    if (flag3) {
      const obj12 = { planId, currency: null };
      let str = currency;
      if (currency == null) {
        str = "unknown";
      }
      const obj13 = { tags: null, extra: null };
      obj12.currency = str;
      obj13.tags = obj12;
      const obj23 = {};
      const merged = Object.assign(obj);
      obj23.isGift = flag2;
      obj13.extra = obj23;
      const result1 = BillingUtils.captureBillingException(error1, obj13);
    }
    throw error1;
  }
}
function getPurchaseTypePrices(planId, DEFAULT) {
  value = SubscriptionPlanStore.get(planId);
  if (null == value) {
    const _Error3 = Error;
    const error = new Error("Plan not found");
    obj2 = { tags: null };
    const obj3 = { planId, purchaseType: DEFAULT.toString() };
    obj2.tags = obj3;
    const result = BillingUtils.captureBillingException(error, obj2);
    throw error;
  } else if (null == value.prices) {
    const _Error2 = Error;
    const _HermesInternal3 = HermesInternal;
    const error1 = new Error("No prices returned for " + planId + ", is your user in the experiment?");
    throw error1;
  } else if (null == value.prices[DEFAULT]) {
    const _JSON = JSON;
    const _Object = Object;
    const _HermesInternal = HermesInternal;
    logger.info("Purchase types: " + JSON.stringify(Object.keys(value.prices)));
    const _Error = Error;
    const _HermesInternal2 = HermesInternal;
    const error2 = new Error("No prices returned for purchase type " + DEFAULT + " for plan " + planId);
    throw error2;
  } else {
    return tmp22;
  }
}
function experimentalGetPrices(planId, arg1) {
  let tmp = arg1;
  if (arg1 === undefined) {
    obj = { purchaseType: constants3.DEFAULT };
    tmp = obj;
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
      logger.info("prices: " + arr);
      const _Error = Error;
      const error = new Error("Missing prices for payment source on subscription plan");
      const obj3 = { extra: null, tags: null };
      const obj4 = { paymentSourceId };
      obj3.extra = obj4;
      const obj5 = { purchaseType: purchaseType.toString(), planId };
      obj3.tags = obj5;
      const result = BillingUtils.captureBillingException(error, obj3);
    } else if (0 !== arr.length) {
      return arr;
    }
  }
  if (null == tmp3.countryPrices.prices) {
    const _JSON2 = JSON;
    const _HermesInternal3 = HermesInternal;
    logger.info("countryPrices: " + JSON.stringify(tmp3.countryPrices));
    const _Error2 = Error;
    const error1 = new Error("Missing prices for country");
    const obj7 = { tags: null };
    const obj8 = { countryCode: tmp3.countryPrices.countryCode, planId };
    obj7.tags = obj8;
    const result1 = BillingUtils.captureBillingException(error1, obj7);
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
  const baseSubscriptionItemForSubscriptionItems = PremiumSubscription.getBaseSubscriptionItemForSubscriptionItems(items);
  let premiumType;
  if (null != baseSubscriptionItemForSubscriptionItems) {
    premiumType = dependencyMap2[baseSubscriptionItemForSubscriptionItems.planId].premiumType;
  }
  const tmpResult = PremiumTypeUtils;
  const isPremiumAtLeastResult = PremiumTypeUtils.isPremiumAtLeast(premiumType, __initData17.TIER_0);
  const tmpResult2 = PremiumTypeUtils;
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp9 = nextResult;
    let tmp11 = isPremiumAtLeastResult1;
    if (!set.has(nextResult.planId)) {
      let hasItem = set2.has(tmp9.planId);
      let tmp15 = !hasItem;
      if (!hasItem) {
        tmp15 = isPremiumAtLeastResult;
      }
      tmp11 = tmp15;
    }
    let tmp16 = tmp11;
    if (undefined === id) {
      let flag2 = false;
      let tmp21 = getDefaultPrice(tmp9.planId, tmp16, false, currency);
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
function getInterval(basePlanId) {
  if (null != dependencyMap2[basePlanId]) {
    ({ interval: obj4.intervalType, intervalCount: obj4.intervalCount } = tmp);
    return { intervalType: null, intervalCount: null };
  } else {
    const _Error = Error;
    const error = new Error("Unsupported plan");
    const obj3 = { tags: null };
    const obj7 = { planId: basePlanId };
    obj3.tags = obj7;
    const result = BillingUtils.captureBillingException(error, obj3);
    throw error;
  }
}
function getIntervalString(interval, arg1, arg2) {
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
    TIER_2 = __initData17.TIER_2;
  }
  if (!arg1) {
    if (!arg2) {
      if (constants7.MONTH === interval) {
        if (1 !== num) {
          const intl3 = util.intl;
          obj = { intervalCount: num };
          let formatToPlainStringResult = intl3.formatToPlainString(util.t["0UlZnH"], obj);
        } else {
          const intl2 = util.intl;
          formatToPlainStringResult = intl2.string(util.t.DKzs96);
        }
        return formatToPlainStringResult;
      } else if (tmp3.YEAR === interval) {
        const intl = util.intl;
        return intl.string(util.t["/Q4HRN"]);
      } else {
        const _Error = Error;
        const error = new Error("Unexpected interval");
        throw error;
      }
    }
  }
  if (constants7.MONTH === interval) {
    const intl7 = util.intl;
    if (TIER_2 === __initData17.TIER_0) {
      let poEovT2 = util.t.NPKsLz;
    } else {
      poEovT2 = util.t.poEovT;
    }
    obj2 = { timeInterval: null };
    const intl8 = util.intl;
    obj2.timeInterval = intl8.string(util.t.FPybU7);
    let formatToPlainStringResult1 = intl7.formatToPlainString(poEovT2, obj2);
    if (!flag) {
      const intl9 = util.intl;
      formatToPlainStringResult1 = intl9.string(util.t.Mh9bTt);
    }
    return formatToPlainStringResult1;
  } else if (tmp16.YEAR === interval) {
    const intl4 = util.intl;
    if (TIER_2 === __initData17.TIER_0) {
      let poEovT = util.t.NPKsLz;
    } else {
      poEovT = util.t.poEovT;
    }
    const obj3 = { timeInterval: null };
    const intl5 = util.intl;
    obj3.timeInterval = intl5.string(util.t.tfqrhj);
    let formatToPlainStringResult2 = intl4.formatToPlainString(poEovT, obj3);
    if (!flag) {
      const intl6 = util.intl;
      formatToPlainStringResult2 = intl6.string(util.t.DRgqMo);
    }
    return formatToPlainStringResult2;
  } else {
    const _Error2 = Error;
    const error1 = new Error("Unexpected interval");
    throw error1;
  }
}
function getIntervalStringAsNoun(interval) {
  if (constants7.MONTH === interval) {
    const intl2 = util.intl;
    return intl2.string(util.t.FPybU7);
  } else if (tmp.YEAR === interval) {
    const intl = util.intl;
    return intl.string(util.t.tfqrhj);
  } else {
    const _Error = Error;
    const error = new Error("Unexpected interval");
    throw error;
  }
}
function getPremiumType(planIdFromItems) {
  if (null != dependencyMap2[planIdFromItems]) {
    return tmp.premiumType;
  } else {
    const _Error = Error;
    const error = new Error("Unsupported plan");
    obj2 = { tags: null };
    const obj3 = { planId: planIdFromItems };
    obj2.tags = obj3;
    const result = BillingUtils.captureBillingException(error, obj2);
    throw error;
  }
}
function getDisplayName(planId, arg1, arg2) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let flag2 = arg2;
  if (arg2 === undefined) {
    flag2 = false;
  }
  if (SubscriptionPlans.PREMIUM_MONTH_TIER_0 === planId) {
    const intl15 = util.intl;
    if (flag) {
      obj2 = { duration };
      let formatResult = intl15.format(util.t.TZXHNj, obj2);
    } else {
      const string8 = intl15.string;
      const t8 = util.t;
      if (flag2) {
        formatResult = string8(t8["81iAgs"]);
      } else {
        formatResult = string8(t8["0efVPy"]);
      }
    }
    return formatResult;
  } else if (SubscriptionPlans.PREMIUM_YEAR_TIER_0 === planId) {
    const intl14 = util.intl;
    if (flag) {
      const obj3 = { duration };
      let formatResult1 = intl14.format(util.t.eqRhC7, obj3);
    } else {
      const string7 = intl14.string;
      const t7 = util.t;
      if (flag2) {
        formatResult1 = string7(t7.UvzqY1);
      } else {
        formatResult1 = string7(t7.eoVuBn);
      }
    }
    return formatResult1;
  } else if (SubscriptionPlans.PREMIUM_MONTH_TIER_1 === planId) {
    const intl13 = util.intl;
    const string6 = intl13.string;
    const t6 = util.t;
    if (flag2) {
      let string6Result = string6(t6["g/dH5g"]);
    } else {
      string6Result = string6(t6["7O6qSq"]);
    }
    return string6Result;
  } else if (SubscriptionPlans.PREMIUM_YEAR_TIER_1 === planId) {
    const intl12 = util.intl;
    const string5 = intl12.string;
    const t5 = util.t;
    if (flag2) {
      let string5Result = string5(t5.pdZJaq);
    } else {
      string5Result = string5(t5.Md5xbi);
    }
    return string5Result;
  } else if (SubscriptionPlans.PREMIUM_MONTH_TIER_2 === planId) {
    const intl11 = util.intl;
    if (flag) {
      const obj4 = { duration };
      let formatResult2 = intl11.format(util.t.aI6QXz, obj4);
    } else {
      const string4 = intl11.string;
      const t4 = util.t;
      if (flag2) {
        formatResult2 = string4(t4.SmVbHc);
      } else {
        formatResult2 = string4(t4.FKYNC6);
      }
    }
    return formatResult2;
  } else if (SubscriptionPlans.PREMIUM_GROUP_MONTH === planId) {
    const intl10 = util.intl;
    if (flag2) {
      let stringResult = intl10.string(util.t.SmVbHc);
    } else {
      const obj5 = { premiumGroupProductName: closure_47() };
      stringResult = intl10.formatToPlainString(_modDef3199["8bPDtb"], obj5);
    }
    return stringResult;
  } else if (SubscriptionPlans.PREMIUM_YEAR_TIER_2 === planId) {
    const intl9 = util.intl;
    if (flag) {
      const obj6 = { duration };
      let formatResult3 = intl9.format(util.t["1wBcPi"], obj6);
    } else {
      const string3 = intl9.string;
      const t3 = util.t;
      if (flag2) {
        formatResult3 = string3(t3.JIq4O1);
      } else {
        formatResult3 = string3(t3["cfu/5d"]);
      }
    }
    return formatResult3;
  } else if (SubscriptionPlans.PREMIUM_3_MONTH_TIER_2 === planId) {
    const intl8 = util.intl;
    return intl8.string(util.t.wCbINr);
  } else if (SubscriptionPlans.PREMIUM_6_MONTH_TIER_2 === planId) {
    const intl7 = util.intl;
    return intl7.string(util.t["e3/ArU"]);
  } else if (SubscriptionPlans.PREMIUM_MONTH_GUILD === planId) {
    const intl6 = util.intl;
    const string2 = intl6.string;
    const t2 = util.t;
    if (flag2) {
      let string2Result = string2(t2["6ZR3By"]);
    } else {
      string2Result = string2(t2["h80cx/"]);
    }
    return string2Result;
  } else if (SubscriptionPlans.PREMIUM_YEAR_GUILD === planId) {
    const intl5 = util.intl;
    const string = intl5.string;
    const t = util.t;
    if (flag2) {
      let stringResult1 = string(t.YDpAzZ);
    } else {
      stringResult1 = string(t.ZHkls0);
    }
    return stringResult1;
  } else if (SubscriptionPlans.PREMIUM_3_MONTH_GUILD === planId) {
    const intl4 = util.intl;
    return intl4.string(util.t.EZHHB6);
  } else if (SubscriptionPlans.PREMIUM_6_MONTH_GUILD === planId) {
    const intl3 = util.intl;
    return intl3.string(util.t.X2KDO2);
  } else if (SubscriptionPlans.PREMIUM_MONTH_LEGACY === planId) {
    const intl2 = util.intl;
    return intl2.string(util.t.PD6k79);
  } else if (SubscriptionPlans.PREMIUM_YEAR_LEGACY === planId) {
    const intl = util.intl;
    return intl.string(util.t.LtJgTC);
  } else {
    const _Error = Error;
    const error = new Error("Unsupported plan");
    const obj7 = { tags: null };
    const obj8 = { planId };
    obj7.tags = obj8;
    const result = BillingUtils.captureBillingException(error, obj7);
    throw error;
  }
}
function getTierDisplayNameByPlanId(PREMIUM_MONTH_TIER_0) {
  let premiumType;
  if (dependencyMap2[PREMIUM_MONTH_TIER_0] != null) {
    premiumType = tmp.premiumType;
  }
  let tmp3 = null;
  if (null != premiumType) {
    tmp3 = __initData15[premiumType];
  }
  if (null != tmp3) {
    const intl = util.intl;
    return intl.string(tmp3);
  } else {
    const _Error = Error;
    const error = new Error("Unsupported plan");
    obj2 = { tags: null };
    const obj3 = { planId: PREMIUM_MONTH_TIER_0 };
    obj2.tags = obj3;
    const result = BillingUtils.captureBillingException(error, obj2);
    throw error;
  }
}
function getPlanDescription(arg0) {
  ({ subscription, planId, price, activeDiscountInfo, renewalInvoiceWithoutEntitlementsPreview, renewalInvoiceWithEntitlementsPreview, hasFractionalPremiumWithSub } = arg0);
  let paymentSourceId = PaymentSourceStore.defaultPaymentSourceId;
  ({ includePremiumGuilds, hasDiscountApplied, fractionalPremiumInfo } = arg0);
  const premiumTypeSubscription = SubscriptionStore.getPremiumTypeSubscription();
  if (tmp3) {
    paymentSourceId = premiumTypeSubscription.paymentSourceId;
  }
  const tmp4 = getPrice(dependencyMap2[planId].id, false, false, { paymentSourceId, currency: undefined }, true);
  const interval = tmp.interval;
  obj = { paymentSourceId, currency: undefined };
  tmp3 = null != premiumTypeSubscription && null != premiumTypeSubscription.paymentSourceId;
  if (constants7.MONTH === interval) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.FPybU7);
  } else if (tmp8.YEAR === interval) {
    const intl = util.intl;
    stringResult = intl.string(util.t.tfqrhj);
  } else {
    const _Error = Error;
    const error = new Error("Unexpected interval");
    throw error;
  }
  let combined = "" + PriceUtils.formatPrice(tmp4.amount, tmp4.currency) + "/" + stringResult;
  let tmp16 = null != renewalInvoiceWithEntitlementsPreview;
  if (tmp16) {
    tmp16 = 0 === renewalInvoiceWithEntitlementsPreview.subtotal;
  }
  const renewalMutations = subscription.renewalMutations;
  let tmp18 = subscription.status === constants4.CANCELED;
  if (!tmp18) {
    let tmp19 = null != renewalMutations;
    if (tmp19) {
      tmp19 = isNoneSubscription(renewalMutations.planId);
    }
    if (tmp19) {
      tmp19 = !subscription.isPurchasedExternally;
    }
    tmp18 = tmp19;
  }
  if (!tmp18) {
    let tmp21 = null == subscription.paymentSourceId && !subscription.isPurchasedExternally;
    if (tmp21) {
      const currentUser = UserStore.getCurrentUser();
      let hasFreePremiumResult;
      if (currentUser != null) {
        hasFreePremiumResult = currentUser.hasFreePremium();
      }
      tmp21 = !hasFreePremiumResult;
    }
    if (tmp21) {
      tmp21 = !tmp16;
    }
    tmp18 = tmp21;
  }
  let tmp25 = subscription.status === constants4.UNPAID && null !== subscription.latestInvoice;
  if (tmp25) {
    const latestInvoice = subscription.latestInvoice;
    let status;
    if (latestInvoice != null) {
      status = latestInvoice.status;
    }
    tmp25 = status === constants.OPEN;
  }
  if (tmp18) {
    let CANCELED = constants4.CANCELED;
  } else {
    CANCELED = tmp25 ? constants4.UNPAID : subscription.status;
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
    const items = [__initData16.GUILD];
    const planIdsForSkus = SubscriptionPlanStore.getPlanIdsForSkus(items);
    _modDef38(null != planIdsForSkus, "Missing guildSubscriptionPlanIds");
    const found = additionalPlans.find((planId) => planIdsForSkus.includes(planId.planId));
    let num3 = 0;
    if (null != found) {
      num3 = found.quantity;
    }
    num2 = num3;
  }
  const sum = __initData6 + num2;
  const intl3 = util.intl;
  if (null != price && null == subscription.paymentGateway) {
    const format = intl3.format;
    let t1 = util.t;
    if (flag) {
      t1 = { price };
      let formatResult = format(t1["cd+hqB"], t1);
    } else {
      const obj3 = { price };
      formatResult = format(t1.NUkcpF, obj3);
    }
  } else {
    let stringResult1 = intl3.string(util.t.zYx3Y6);
    const intl4 = util.intl;
    if (tmp24) {
      const format2 = intl4.format;
      let t2 = util.t;
      if (flag) {
        t2 = { price };
        let format2Result = format2(t2.VsKcFB, t2);
      } else {
        const obj4 = { price };
        format2Result = format2(t2.hJ5xEX, obj4);
      }
    } else {
      let stringResult2 = intl4.string(util.t["8rSipI"]);
      const intl5 = util.intl;
      const format3 = intl5.format;
      let t3 = util.t;
      if (tmp24) {
        if (flag) {
          t3 = { price, num: sum };
          let format3Result = format3(t3["jRy6/J"], t3);
        } else {
          const obj5 = { price, num: sum };
          format3Result = format3(t3.tTNE8M, obj5);
        }
      } else {
        const obj6 = { num: sum };
        let format3Result1 = format3(t3["U+z/HJ"], obj6);
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
                          const error1 = new Error("Invalid planId " + planId);
                          throw error1;
                        }
                      }
                    }
                  }
                }
                if (constants4.CANCELED === CANCELED) {
                  const intl14 = util.intl;
                  const format5 = intl14.format;
                  let t4 = util.t;
                  if (tmp24) {
                    if (flag) {
                      t4 = { price, num: sum };
                      let format5Result = format5(t4.xoFgRh, t4);
                    } else {
                      const obj7 = { price, num: sum };
                      format5Result = format5(t4.nXdbKo, obj7);
                    }
                  } else {
                    const obj8 = { num: sum };
                    return format5(t4.EcSdRH, obj8);
                  }
                } else if (constants4.ACCOUNT_HOLD === CANCELED) {
                  const intl13 = util.intl;
                  const format4 = intl13.format;
                  let t5 = util.t;
                  if (tmp24) {
                    if (flag) {
                      t5 = { price, num: sum };
                      let format4Result = format4(t5["5C/0QG"], t5);
                    } else {
                      const obj9 = { price, num: sum };
                      format4Result = format4(t5.xfYkhu, obj9);
                    }
                  } else {
                    const obj10 = { num: sum };
                    return format4(t5.ivjxcn, obj10);
                  }
                } else if (constants4.UNPAID === CANCELED) {
                  const intl12 = util.intl;
                  const obj11 = { num: sum };
                  return intl12.format(util.t["0HopYf"], obj11);
                } else if (constants4.PAUSE_PENDING === CANCELED) {
                  let diffResult = null;
                  if (null != subscription.pauseEndsAt) {
                    diffResult = _modDef4421(subscription.pauseEndsAt).diff(subscription.currentPeriodEnd, "days");
                    const obj19 = _modDef4421(subscription.pauseEndsAt);
                  }
                  if (null != diffResult) {
                    const intl11 = util.intl;
                    const obj12 = { pauseDate: subscription.currentPeriodEnd, pauseDuration: diffResult };
                    let formatResult1 = intl11.format(util.t.WUfOD5, obj12);
                  } else {
                    const intl10 = util.intl;
                    const obj13 = { pauseDate: subscription.currentPeriodEnd };
                    formatResult1 = intl10.format(util.t.VlWufv, obj13);
                  }
                  return formatResult1;
                } else if (constants4.PAUSED === CANCELED) {
                  if (!hasFractionalPremiumWithSub) {
                    const intl9 = util.intl;
                    const obj14 = { resumeDate: subscription.pauseEndsAt };
                    format3Result1 = intl9.format(util.t["6RTdZA"], obj14);
                  }
                  return format3Result1;
                } else if (constants4.BILLING_RETRY === CANCELED) {
                  const intl8 = util.intl;
                  const obj15 = { endDate: null };
                  const obj16 = _modDef4421(subscription.currentPeriodStart);
                  obj15.endDate = _modDef4421(subscription.currentPeriodStart).add(__initData7, "days").toDate();
                  return intl8.format(util.t["IlJ/HV"], obj15);
                } else if (constants4.PAST_DUE === CANCELED) {
                  const intl7 = util.intl;
                  const obj17 = {
                    endDate: DateUtils.dateFormat(getBillingGracePeriodDaysAndExpiresDate(subscription).expiresDate, "LL"),
                    onClick() {
                                      openURLDefault("https://support.discord.com/hc/articles/23082866222871");
                                    }
                  };
                  return intl7.format(util.t["d+0vwo"], obj17);
                } else if (!hasDiscountApplied) {
                  return format3Result1;
                } else if (planId === SubscriptionPlans.PREMIUM_YEAR_TIER_2) {
                  const intl6 = util.intl;
                  let percentage;
                  if (activeDiscountInfo != null) {
                    percentage = activeDiscountInfo.percentage;
                  }
                  if (percentage == null) {
                    percentage = value2;
                  }
                  activeDiscountInfo = { percent: percentage, regularPrice: combined, renewalDate: null };
                  combined = getExpectedRenewalDate(subscription, fractionalPremiumInfo);
                  activeDiscountInfo.renewalDate = combined;
                  let formatResult2 = intl6.format(util.t.z2oQtA, activeDiscountInfo);
                } else {
                  const intl29 = util.intl;
                  const formatToPlainString = intl29.formatToPlainString;
                  const t = util.t;
                  if (flag) {
                    let percentage1;
                    if (activeDiscountInfo != null) {
                      percentage1 = activeDiscountInfo.percentage;
                    }
                    if (percentage1 == null) {
                      percentage1 = __initData;
                    }
                    const obj18 = { percent: percentage1, regularPrice: combined, numMonths: null };
                    let duration;
                    if (activeDiscountInfo != null) {
                      duration = activeDiscountInfo.duration;
                    }
                    if (duration == null) {
                      duration = closure_1_20;
                    }
                    obj18.numMonths = duration;
                    formatResult2 = formatToPlainString(t["3ZiutU"], obj18);
                  } else {
                    let percentage2;
                    if (activeDiscountInfo != null) {
                      percentage2 = activeDiscountInfo.percentage;
                    }
                    if (percentage2 == null) {
                      percentage2 = __initData;
                    }
                    const obj20 = { percent: percentage2, regularPrice: combined, numMonths: null };
                    let duration1;
                    if (activeDiscountInfo != null) {
                      duration1 = activeDiscountInfo.duration;
                    }
                    if (duration1 == null) {
                      duration1 = closure_1_20;
                    }
                    obj20.numMonths = duration1;
                    formatResult2 = formatToPlainString(t["G6+XOT"], obj20);
                  }
                }
              }
            }
            if (constants4.CANCELED === CANCELED) {
              const intl21 = util.intl;
              if (tmp24) {
                const format7 = intl21.format;
                let t6 = util.t;
                if (flag) {
                  t6 = { price };
                  let format7Result = format7(t6.cXy8Bp, t6);
                } else {
                  const obj21 = { price };
                  format7Result = format7(t6["C/XsHt"], obj21);
                }
              } else {
                return intl21.string(util.t.K6tYFa);
              }
            } else if (constants4.ACCOUNT_HOLD === CANCELED) {
              const intl20 = util.intl;
              const format6 = intl20.format;
              let t7 = util.t;
              if (tmp24) {
                if (flag) {
                  t7 = { price };
                  let format6Result = format6(t7.HBkIBi, t7);
                } else {
                  const obj22 = { price };
                  format6Result = format6(t7.ZsO1Sx, obj22);
                }
              } else {
                return format6(t7["0+/WH7"], {});
              }
            } else if (constants4.UNPAID === CANCELED) {
              const intl19 = util.intl;
              return intl19.format(util.t.McIzwj, {});
            } else if (constants4.PAUSE_PENDING === CANCELED) {
              let diffResult1 = null;
              if (null != subscription.pauseEndsAt) {
                diffResult1 = _modDef4421(subscription.pauseEndsAt).diff(subscription.currentPeriodEnd, "days");
                const obj32 = _modDef4421(subscription.pauseEndsAt);
              }
              if (null != diffResult1) {
                const intl18 = util.intl;
                const obj23 = { pauseDate: subscription.currentPeriodEnd, pauseDuration: diffResult1 };
                let formatResult3 = intl18.format(util.t.WUfOD5, obj23);
              } else {
                const intl17 = util.intl;
                const obj24 = { pauseDate: subscription.currentPeriodEnd };
                formatResult3 = intl17.format(util.t.VlWufv, obj24);
              }
              return formatResult3;
            } else if (constants4.PAUSED === CANCELED) {
              if (!hasFractionalPremiumWithSub) {
                const intl16 = util.intl;
                const obj25 = { resumeDate: subscription.pauseEndsAt };
                stringResult2 = intl16.format(util.t["6RTdZA"], obj25);
              }
              return stringResult2;
            } else if (constants4.PAST_DUE === CANCELED) {
              const intl15 = util.intl;
              const obj26 = {
                endDate: DateUtils.dateFormat(getBillingGracePeriodDaysAndExpiresDate(subscription).expiresDate, "LL"),
                onClick() {
                              openURLDefault("https://support.discord.com/hc/articles/23082866222871");
                            }
              };
              return intl15.format(util.t["d+0vwo"], obj26);
            } else {
              return stringResult2;
            }
          }
        }
        if (constants4.CANCELED === CANCELED) {
          const intl28 = util.intl;
          if (tmp24) {
            const format9 = intl28.format;
            let t8 = util.t;
            if (flag) {
              t8 = { price };
              let format9Result = format9(t8["USi/nc"], t8);
            } else {
              const obj27 = { price };
              format9Result = format9(t8["FS//l2"], obj27);
            }
          } else {
            return intl28.string(util.t.JshLzq);
          }
        } else if (constants4.ACCOUNT_HOLD === CANCELED) {
          const intl27 = util.intl;
          const format8 = intl27.format;
          let t9 = util.t;
          if (tmp24) {
            if (flag) {
              t9 = { price };
              let format8Result = format8(t9["5mv+2i"], t9);
            } else {
              const obj28 = { price };
              format8Result = format8(t9.nkAEfZ, obj28);
            }
          } else {
            return format8(t9.SsLIXS, {});
          }
        } else if (constants4.UNPAID === CANCELED) {
          const intl26 = util.intl;
          return intl26.format(util.t.cmkbFB, {});
        } else if (constants4.PAUSE_PENDING === CANCELED) {
          let diffResult2 = null;
          if (null != subscription.pauseEndsAt) {
            diffResult2 = _modDef4421(subscription.pauseEndsAt).diff(subscription.currentPeriodEnd, "days");
            const obj42 = _modDef4421(subscription.pauseEndsAt);
          }
          if (null != diffResult2) {
            const intl25 = util.intl;
            const obj29 = { pauseDate: subscription.currentPeriodEnd, pauseDuration: diffResult2 };
            let formatResult4 = intl25.format(util.t.WUfOD5, obj29);
          } else {
            const intl24 = util.intl;
            const obj30 = { pauseDate: subscription.currentPeriodEnd };
            formatResult4 = intl24.format(util.t.VlWufv, obj30);
          }
          return formatResult4;
        } else if (constants4.PAUSED === CANCELED) {
          if (!hasFractionalPremiumWithSub) {
            const intl23 = util.intl;
            const obj31 = { resumeDate: subscription.pauseEndsAt };
            stringResult1 = intl23.format(util.t["6RTdZA"], obj31);
          }
          return stringResult1;
        } else if (constants4.PAST_DUE === CANCELED) {
          const intl22 = util.intl;
          const obj33 = {
            endDate: DateUtils.dateFormat(getBillingGracePeriodDaysAndExpiresDate(subscription).expiresDate, "LL"),
            onClick() {
                      openURLDefault("https://support.discord.com/hc/articles/23082866222871");
                    }
          };
          return intl22.format(util.t["d+0vwo"], obj33);
        } else {
          return stringResult1;
        }
      }
    }
  }
  const formatPriceResult = PriceUtils.formatPrice(tmp4.amount, tmp4.currency);
}
function getPremiumPlanOptions(isPremium) {
  ({ skuId, defaultPlanId } = isPremium);
  if (null != skuId) {
    if (isPremium.isPremium) {
      let tmp;
      if (undefined !== defaultPlanId) {
        if (skuId === dependencyMap2[defaultPlanId].skuId) {
          tmp = defaultPlanId;
        }
      }
      if (__initData16.TIER_0 === skuId) {
        const items = [, ];
        ({ PREMIUM_YEAR_TIER_0: arr3[0], PREMIUM_MONTH_TIER_0: arr3[1] } = SubscriptionPlans);
        let items2 = items;
      } else if (__initData16.TIER_1 === skuId) {
        const items1 = [SubscriptionPlans.PREMIUM_MONTH_TIER_1];
        items2 = items1;
      } else if (__initData16.TIER_2 === skuId) {
        items2 = [, ];
        ({ PREMIUM_YEAR_TIER_2: arr[0], PREMIUM_MONTH_TIER_2: arr[1] } = SubscriptionPlans);
      } else if (__initData16.GUILD === skuId) {
        return [];
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
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
function getNumPremiumGuildSubscriptions(additionalPlans) {
  const items = [__initData16.GUILD];
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
  if (subscription.isPurchasedViaApple) {
    const metadata = subscription.metadata;
    let prop;
    if (metadata != null) {
      prop = metadata.apple_grace_period_expires_date;
    }
    if (null != prop) {
      const obj11 = _modDef4421(subscription.metadata.apple_grace_period_expires_date);
      const obj3 = { days: null, expiresDate: null };
      obj3.days = _modDef4421.duration(obj11.diff(subscription.currentPeriodStart)).days();
      obj3.expiresDate = obj11;
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
        const obj7 = _modDef4421(subscription.metadata.google_grace_period_expires_date);
        const obj4 = { days: null, expiresDate: null };
        const tmp20 = _modDef4421(subscription.metadata.google_original_expires_date);
        obj4.days = _modDef4421.duration(obj7.diff(tmp20)).days();
        obj4.expiresDate = obj7;
        return obj4;
      }
    }
  }
  if (subscription.isPurchasedExternally) {
    const tmp15 = subscription.isPurchasedViaApple ? closure_1_17 : collapsedCategories;
    const obj5 = { days: tmp15, expiresDate: _modDef4421(subscription.currentPeriodStart).add(tmp15, "days") };
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
      if (metadata5 != null) {
        prop4 = metadata5.grace_period_expires_date;
      }
      const obj8 = { days: null, expiresDate: null };
      obj8.days = _modDef4421(prop4).diff(subscription.currentPeriodStart, "days");
      obj8.expiresDate = _modDef4421(subscription.metadata.grace_period_expires_date);
      return obj8;
    } else {
      const tmp8 = null == subscription.paymentSourceId ? closure_1_19 : __initData8;
      obj = { days: tmp8, expiresDate: _modDef4421(subscription.currentPeriodStart).add(tmp8, "days") };
      return obj;
    }
  }
}
function getExpectedRenewalDate(premiumSubscription, fractionalPremiumInfo) {
  const date = new Date(premiumSubscription.currentPeriodEnd);
  let toDateResult = date;
  if (!tmp2) {
    const unactivatedUnits = fractionalPremiumInfo.unactivatedUnits;
    obj = _modDef4421(date);
    let addResult = obj;
    if (unactivatedUnits.length > 0) {
      const mapped = unactivatedUnits.map((skuId) => skuId.skuId);
      addResult = obj.add(mapped.reduce((acc, item) => {
        const tmp = _slicedToArray(closure_1_23[item], 2);
        const first = tmp[0];
        let num = 1;
        if (constants.HOUR !== first) {
          num = 1;
          if (constants.DAY === first) {
            num = 24;
          }
        }
        return acc + num * tmp[1];
      }, 0), "hours");
    }
    toDateResult = addResult.toDate();
  }
  return toDateResult;
}
function getBillingInformationString(status, subscriptionPeriodStart, arg2) {
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = null;
  }
  if (flag === undefined) {
    flag = false;
  }
  let tmp2 = fractionalPremiumInfo;
  if (fractionalPremiumInfo === undefined) {
    obj = { isFractionalPremiumActive: false, fetched: true, fractionalState: constants6.NONE, startsAt: _modDef4421(0), endsAt: _modDef4421(0), currentEntitlementId: "", currentEntitlementEndsAt: _modDef4421(0), unactivatedUnits: [] };
    tmp2 = obj;
  }
  let tmp6 = subscriptionPeriodStart;
  if (null !== tmp) {
    tmp6 = subscriptionPeriodStart;
    if (status.status === constants4.PAST_DUE) {
      tmp6 = tmp;
    }
  }
  const formatPrice = PriceUtils.formatPrice;
  if (flag) {
    const invoiceItems = tmp6.invoiceItems;
    const found = invoiceItems.filter((subscriptionPlanId) => set.has(subscriptionPlanId.subscriptionPlanId));
    const mapped = found.map((amount) => amount.amount);
    let formatPriceResult = formatPrice(mapped.reduce((acc, item) => item + acc, 0), tmp6.currency);
    let tmp14 = require;
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
    if (null != tmp2.currentEntitlementEndsAt) {
      const currentEntitlementEndsAt = tmp2.currentEntitlementEndsAt;
      let currentPeriodEnd = currentEntitlementEndsAt.toDate();
    } else {
      currentPeriodEnd = status.currentPeriodEnd;
    }
    const intl16 = tmp14(1115).intl;
    obj2 = { trialEnd: currentPeriodEnd };
    return intl16.format(tmp14(1115).t["7ZS2m1"], obj2);
  } else if (status.status === constants4.CANCELED) {
    const intl15 = tmp14(1115).intl;
    const obj4 = { endDate: subscriptionPeriodStart.subscriptionPeriodStart };
    return intl15.format(tmp14(1115).t["Whp/qk"], obj4);
  } else if (status.status === constants4.PAUSE_PENDING) {
    const intl14 = tmp14(1115).intl;
    ({ currentPeriodEnd: obj26.pauseDate, pauseEndsAt: obj26.resumeDate } = status);
    return intl14.format(tmp14(1115).t.uBLUGU, { pauseDate: null, resumeDate: null });
  } else if (status.status === constants4.PAUSED) {
    if (tmp2.fractionalState !== constants6.NONE) {
      const intl13 = tmp14(1115).intl;
      const obj6 = { renewalDate: null, price: null };
      const endsAt = tmp2.endsAt;
      obj6.renewalDate = endsAt.toDate();
      obj6.price = formatPriceResult;
      let formatResult = intl13.format(tmp14(1115).t.Q18lRK, obj6);
    } else if (null == status.pauseEndsAt) {
      const intl11 = tmp14(1115).intl;
      if (flag) {
        const obj7 = { planName: null, price: null };
        const intl12 = tmp14(1115).intl;
        obj7.planName = intl12.string(tmp14(1115).t.Ipxkog);
        obj7.price = formatPriceResult;
        let formatResult1 = intl11.format(tmp14(1115).t.KTYQCg, obj7);
      } else {
        formatResult1 = intl11.string(tmp14(1115).t.fMz6Lg);
      }
    } else {
      const intl17 = tmp14(1115).intl;
      const format3 = intl17.format;
      const t3 = tmp14(1115).t;
      if (flag) {
        const obj8 = { planName: null, resumeDate: null, price: null };
        const intl10 = tmp14(1115).intl;
        obj8.planName = intl10.string(tmp14(1115).t.Ipxkog);
        obj8.resumeDate = status.pauseEndsAt;
        obj8.price = formatPriceResult;
        formatResult = format3(t3.zcgtzf, obj8);
      } else {
        const obj9 = { resumeDate: status.pauseEndsAt };
        formatResult = format3(t3["V8+l6k"], obj9);
      }
    }
    return formatResult;
  } else if (status.status === constants4.PAST_DUE) {
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
      expiresDate = _modDef4421(status.metadata.google_grace_period_expires_date);
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
      expiresDate = _modDef4421(status.metadata.apple_grace_period_expires_date);
    }
    const intl9 = tmp14(1115).intl;
    const format2 = intl9.format;
    const t2 = tmp14(1115).t;
    if (status.isPurchasedExternally) {
      const obj10 = { endDate: expiresDate.toDate(), paymentGatewayName: dependencyMap3[status.paymentGateway], paymentSourceLink: null };
      const paymentGateway3 = status.paymentGateway;
      if (constants2.APPLE_PARTNER !== paymentGateway3) {
        if (constants2.APPLE_ADVANCED_COMMERCE !== paymentGateway3) {
          if (constants2.APPLE !== paymentGateway3) {
            if (constants2.GOOGLE === paymentGateway3) {
              let PAYMENT_SOURCE_MANAGEMENT2 = constants10.PAYMENT_SOURCE_MANAGEMENT;
            } else {
              const _Error3 = Error;
              const _HermesInternal3 = HermesInternal;
              const error = new Error("Invalid external payment gateway " + paymentGateway3);
              throw error;
            }
          }
          obj10.paymentSourceLink = PAYMENT_SOURCE_MANAGEMENT2;
          format2(t2.U2hb3W, obj10);
        }
      }
      PAYMENT_SOURCE_MANAGEMENT2 = constants9.PAYMENT_SOURCE_MANAGEMENT;
    } else {
      const obj11 = { endDate: expiresDate.toDate(), price: formatPriceResult };
      return format2(t2.qEIzyi, obj11);
    }
  } else if (status.status === constants4.BILLING_RETRY) {
    const intl8 = tmp14(1115).intl;
    const obj13 = { endDate: null, price: null };
    const obj18 = _modDef4421(status.currentPeriodStart);
    obj13.endDate = _modDef4421(status.currentPeriodStart).add(__initData7, "days").toDate();
    obj13.price = formatPriceResult;
    return intl8.format(tmp14(1115).t.EMTLOT, obj13);
  } else if (status.status === constants4.ACCOUNT_HOLD) {
    if (status.isPurchasedViaGoogle) {
      if (!tmp14Result.isGooglePlayBillingSupported()) {
        const intl6 = tmp14(1115).intl;
        const obj14 = { endDate: null, paymentGatewayName: null, paymentSourceLink: null };
        const obj12 = _modDef4421(status.currentPeriodStart);
        obj14.endDate = _modDef4421(status.currentPeriodStart).add(dependencyMap, "days").toDate();
        obj14.paymentGatewayName = dependencyMap3[status.paymentGateway];
        const paymentGateway2 = status.paymentGateway;
        if (constants2.APPLE_PARTNER !== paymentGateway2) {
          if (constants2.APPLE_ADVANCED_COMMERCE !== paymentGateway2) {
            if (constants2.APPLE !== paymentGateway2) {
              if (constants2.GOOGLE === paymentGateway2) {
                let PAYMENT_SOURCE_MANAGEMENT = constants10.PAYMENT_SOURCE_MANAGEMENT;
              } else {
                const _Error2 = Error;
                const _HermesInternal2 = HermesInternal;
                const error1 = new Error("Invalid external payment gateway " + paymentGateway2);
                throw error1;
              }
            }
            obj14.paymentSourceLink = PAYMENT_SOURCE_MANAGEMENT;
            let formatResult2 = intl6.format(tmp14(1115).t["dtcxw+"], obj14);
          }
        }
        PAYMENT_SOURCE_MANAGEMENT = constants9.PAYMENT_SOURCE_MANAGEMENT;
        const addResult1 = _modDef4421(status.currentPeriodStart).add(dependencyMap, "days");
      }
      return formatResult2;
    }
    const intl7 = tmp14(1115).intl;
    const obj16 = { endDate: null, price: null };
    const obj15 = _modDef4421(status.currentPeriodStart);
    obj16.endDate = _modDef4421(status.currentPeriodStart).add(dependencyMap, "days").toDate();
    obj16.price = formatPriceResult;
    formatResult2 = intl7.format(tmp14(1115).t.EMTLOT, obj16);
    const addResult2 = _modDef4421(status.currentPeriodStart).add(dependencyMap, "days");
  } else {
    let tmp21 = null != status.paymentSourceId;
    if (tmp21) {
      const paymentSourceId = status.paymentSourceId;
      let flag2 = false;
      if (null != paymentSourceId) {
        const paymentSource = PaymentSourceStore.getPaymentSource(paymentSourceId);
        let hasItem = null != paymentSource;
        if (hasItem) {
          hasItem = set3.has(paymentSource.type);
        }
        flag2 = hasItem;
      }
      tmp21 = flag2;
    }
    if (tmp21) {
      const intl5 = tmp14(1115).intl;
      const obj17 = { prepaidEndDate: status.currentPeriodEnd };
      return intl5.format(tmp14(1115).t.awpB0C, obj17);
    } else if (status.status === constants4.UNPAID) {
      const intl4 = tmp14(1115).intl;
      const obj19 = { maxProcessingTimeInDays };
      return intl4.format(tmp14(1115).t.CzTKom, obj19);
    } else if (status.isPurchasedExternally) {
      const intl3 = tmp14(1115).intl;
      const obj20 = { renewalDate: subscriptionPeriodStart.subscriptionPeriodStart, paymentGatewayName: dependencyMap3[status.paymentGateway], subscriptionManagementLink: null };
      const paymentGateway = status.paymentGateway;
      if (constants2.APPLE_PARTNER !== paymentGateway) {
        if (constants2.APPLE_ADVANCED_COMMERCE !== paymentGateway) {
          if (constants2.APPLE !== paymentGateway) {
            if (constants2.GOOGLE === paymentGateway) {
              let SUBSCRIPTION_MANAGEMENT = constants10.SUBSCRIPTION_MANAGEMENT;
            } else {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const error2 = new Error("Invalid external payment gateway " + paymentGateway);
              throw error2;
            }
          }
          obj20.subscriptionManagementLink = SUBSCRIPTION_MANAGEMENT;
          return intl3.format(tmp31, obj20);
        }
      }
      SUBSCRIPTION_MANAGEMENT = constants9.SUBSCRIPTION_MANAGEMENT;
    } else {
      const _Date = Date;
      const date = new Date(subscriptionPeriodStart.subscriptionPeriodStart);
      let toDateResult = date;
      if (!tmp26) {
        const unactivatedUnits = tmp2.unactivatedUnits;
        const obj3 = _modDef4421(date);
        let addResult3 = obj3;
        if (unactivatedUnits.length > 0) {
          const mapped1 = unactivatedUnits.map((skuId) => skuId.skuId);
          addResult3 = obj3.add(mapped1.reduce((acc, item) => {
            const tmp = _slicedToArray(closure_1_23[item], 2);
            const first = tmp[0];
            let num = 1;
            if (constants.HOUR !== first) {
              num = 1;
              if (constants.DAY === first) {
                num = 24;
              }
            }
            return acc + num * tmp[1];
          }, 0), "hours");
        }
        toDateResult = addResult3.toDate();
      }
      const intl = tmp14(1115).intl;
      const format = intl.format;
      const t = tmp14(1115).t;
      if (flag) {
        const obj21 = { planName: null, renewalDate: null, price: null };
        const intl2 = tmp14(1115).intl;
        obj21.planName = intl2.string(tmp14(1115).t.Ipxkog);
        obj21.renewalDate = toDateResult;
        obj21.price = formatPriceResult;
        let formatResult3 = format(t.Vl3cED, obj21);
      } else {
        const obj22 = { renewalDate: toDateResult, price: formatPriceResult };
        formatResult3 = format(t.Q18lRK, obj22);
      }
      return formatResult3;
    }
  }
}
function extendDateWithUnconsumedFractionalPremium(date, unactivatedFractionalPremiumUnits, diff, excludeReverseTrialFromCountdown) {
  let tmp4;
  if (!excludeReverseTrialFromCountdown) {
    tmp4 = date;
  }
  const tmp3Result = _modDef4421(tmp4);
  let addResult = tmp3Result;
  if (unactivatedFractionalPremiumUnits.length > 0) {
    const mapped = unactivatedFractionalPremiumUnits.map((skuId) => skuId.skuId);
    addResult = tmp3Result.add(mapped.reduce((acc, item) => {
      const tmp = _slicedToArray(closure_1_23[item], 2);
      const first = tmp[0];
      let num = 1;
      if (constants.HOUR !== first) {
        num = 1;
        if (constants.DAY === first) {
          num = 24;
        }
      }
      return acc + num * tmp[1];
    }, 0), "hours");
  }
  let addResult1 = addResult;
  if (!excludeReverseTrialFromCountdown) {
    addResult1 = addResult;
    if (undefined !== diff) {
      const diffResult = diff.diff(_modDef4421(), "hours", true);
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
  const mapped = unactivatedUnits.map((skuId) => skuId.skuId);
  const reduced = mapped.reduce((acc, item) => {
    const tmp = _slicedToArray(closure_1_23[item], 2);
    const first = tmp[0];
    let num = 1;
    if (constants.HOUR !== first) {
      num = 1;
      if (constants.DAY === first) {
        num = 24;
      }
    }
    return acc + num * tmp[1];
  }, 0);
  if (reduced > 0) {
    if (unactivatedUnits.fractionalState === constants6.NONE) {
      const time = { days: util.t.fYmirx, hours: util.t["C3RO+g"], minutes: util.t.r77oHc };
      obj2 = useFPDurationLeft;
      const result = obj2.roundFPCountdownUnits(DateUtils.diffAsUnits(0, reduced * DurationsDefault.Millis.HOUR));
      return DateUtils.unitsAsStrings(result, time);
    }
  }
  return "";
}
function isSwitchingPlansDisabled(renewalMutations) {
  let tmp = null != renewalMutations.renewalMutations || null != renewalMutations.trialEndsAt;
  if (!tmp) {
    tmp = renewalMutations.status === constants4.PAST_DUE;
  }
  return tmp;
}
function getSwitchingPlansDisabledMessage(renewalMutations) {
  let stringResult = null;
  if (null == renewalMutations.renewalMutations) {
    if (null != renewalMutations.trialEndsAt) {
      const intl3 = util.intl;
      stringResult = intl3.string(util.t.a9Mdb3);
    }
    return stringResult;
  } else if (renewalMutations.renewalMutations.planId !== renewalMutations.planId) {
    const intl2 = util.intl;
    let stringResult1 = intl2.string(util.t["0rzJ4J"]);
  } else {
    const intl = util.intl;
    stringResult1 = intl.string(util.t["9dLQ0/"]);
  }
}
function getCoercedPremiumGuildSubscriptionStatus(subscription) {
  ({ renewalMutations, additionalPlans, status } = subscription);
  const items = [__initData16.GUILD];
  const planIdsForSkus = SubscriptionPlanStore.getPlanIdsForSkus(items);
  let planIdsForSkus1 = planIdsForSkus;
  _modDef38(null != planIdsForSkus, "Missing guildSubscriptionPlanIds");
  const found = additionalPlans.find((planId) => planIdsForSkus.includes(planId.planId));
  let num = 0;
  if (null != found) {
    num = found.quantity;
  }
  let tmp7 = null;
  if (null != renewalMutations) {
    const additionalPlans1 = renewalMutations.additionalPlans;
    const items1 = [__initData16.GUILD];
    planIdsForSkus1 = SubscriptionPlanStore.getPlanIdsForSkus(items1);
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
  if (subscription.isPurchasedExternally) {
    let tmp3 = subscription.status === constants4.CANCELED;
  } else {
    tmp3 = getCoercedPremiumGuildSubscriptionStatus(subscription) === constants4.CANCELED;
  }
  return tmp3;
}
function getFormattedPriceForPlan(id, arg1, arg2) {
  if (flag === undefined) {
    flag = false;
  }
  if (flag2 === undefined) {
    flag2 = true;
  }
  if (null != arg1) {
    try {
      let tmp7 = getPrice(id.id, false, flag, arg1, flag2);
    } catch (err) {
      tmp7 = getDefaultPrice(tmp.id, false, tmp3, undefined, tmp2);
    }
  } else {
    tmp7 = getDefaultPrice(id.id, false, flag, undefined, flag2);
  }
  const formatPriceResult = PriceUtils.formatPrice(tmp7.amount, tmp7.currency);
  let tmp15 = id.currency !== constants8.USD;
  if (tmp15) {
    tmp15 = true === arg2;
  }
  let combined = formatPriceResult;
  if (tmp15) {
    combined = formatPriceResult.concat("*");
  }
  return combined;
}
function getPlanIdFromInvoice(subscription, renewalInvoicePreview) {
  if (subscription.status !== constants4.CANCELED) {
    if (subscription.status !== tmp.PAUSE_PENDING) {
      _modDef38(null != renewalInvoicePreview, "Expected invoicePreview");
      const invoiceItems = renewalInvoicePreview.invoiceItems;
      const found = invoiceItems.find((subscriptionPlanId) => set.has(subscriptionPlanId.subscriptionPlanId));
      if (null != found) {
        if (!isNoneSubscription(found.subscriptionPlanId)) {
          let planId = found.subscriptionPlanId;
        }
        return planId;
      }
      planId = subscription.planId;
    }
  }
  return subscription.planId;
}
function getStatusFromInvoice(subscription, renewalInvoicePreview) {
  const status = subscription.status;
  if (subscription.status !== constants4.CANCELED) {
    if (subscription.status !== constants4.PAUSE_PENDING) {
      _modDef38(null != renewalInvoicePreview, "Expected invoicePreview");
      const invoiceItems = renewalInvoicePreview.invoiceItems;
      const found = invoiceItems.find((subscriptionPlanId) => set.has(subscriptionPlanId.subscriptionPlanId));
      let tmp8 = null == found;
      if (!tmp8) {
        tmp8 = isNoneSubscription(found.subscriptionPlanId);
      }
      let CANCELED = status;
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
    let tmp3 = null != renewalMutations;
    if (tmp3) {
      tmp3 = isNoneSubscription(renewalMutations.planId);
    }
    if (tmp3) {
      tmp3 = !renewalMutations.isPurchasedExternally;
    }
    tmp = tmp3;
  }
  return tmp;
}
function getPremiumGuildIntervalPrice(planId, paymentSourceId, currency, user) {
  if (null != paymentSourceId) {
    obj2 = { paymentSourceId, currency };
    obj = obj2;
  } else {
    obj = { country: BillingInfoStore.ipCountryCodeWithFallback, currency };
  }
  value = SubscriptionPlanStore.get(planId);
  if (null == value) {
    const _Error2 = Error;
    const error = new Error("Unsupported plan");
    const obj6 = { tags: null };
    const obj7 = { planId };
    obj6.tags = obj7;
    const result = BillingUtils.captureBillingException(error, obj6);
    throw error;
  } else {
    const forSkuAndInterval = SubscriptionPlanStore.getForSkuAndInterval(__initData16.GUILD, value.interval, value.intervalCount);
    if (null == forSkuAndInterval) {
      const _Error = Error;
      const error1 = new Error("Unsupported plan");
      const obj9 = { tags: null };
      const obj10 = { planId };
      obj9.tags = obj10;
      const result1 = BillingUtils.captureBillingException(error1, obj9);
      throw error1;
    } else {
      const id = forSkuAndInterval.id;
      return getPrice(id, PremiumTypeUtils.isPremium(user), false, obj);
    }
  }
}
function getBillingReviewSubheader(arg0, id, arg2) {
  id = id.id;
  if (null != arg0) {
    if (SubscriptionPlans.PREMIUM_MONTH_TIER_0 === id) {
      const intl15 = util.intl;
      return intl15.string(util.t["0ggVqN"]);
    } else if (SubscriptionPlans.PREMIUM_YEAR_TIER_0 === id) {
      const intl14 = util.intl;
      return intl14.string(util.t["jm+ZQw"]);
    } else if (SubscriptionPlans.PREMIUM_MONTH_TIER_1 === id) {
      const intl13 = util.intl;
      return intl13.string(util.t.uph4Jx);
    } else if (SubscriptionPlans.PREMIUM_YEAR_TIER_1 === id) {
      const intl12 = util.intl;
      return intl12.string(util.t["D/l7Yt"]);
    } else {
      if (SubscriptionPlans.PREMIUM_MONTH_TIER_2 !== id) {
        if (SubscriptionPlans.PREMIUM_GROUP_MONTH !== id) {
          if (SubscriptionPlans.PREMIUM_YEAR_TIER_2 === id) {
            const intl10 = util.intl;
            return intl10.string(util.t.G0mISV);
          }
        }
      }
      const intl11 = util.intl;
      return intl11.string(util.t["5l1MuV"]);
    }
  }
  if (SubscriptionPlans.PREMIUM_MONTH_TIER_0 === id) {
    const intl9 = util.intl;
    const string6 = intl9.string;
    const t6 = util.t;
    if (arg2) {
      let string6Result = string6(t6.cRCCJ3);
    } else {
      string6Result = string6(t6["/G3aKw"]);
    }
    return string6Result;
  } else if (SubscriptionPlans.PREMIUM_YEAR_TIER_0 === id) {
    const intl8 = util.intl;
    const string5 = intl8.string;
    const t5 = util.t;
    if (arg2) {
      let string5Result = string5(t5.cRCCJ3);
    } else {
      string5Result = string5(t5["2eQpsL"]);
    }
    return string5Result;
  } else if (SubscriptionPlans.PREMIUM_MONTH_TIER_1 === id) {
    const intl7 = util.intl;
    const string4 = intl7.string;
    const t4 = util.t;
    if (arg2) {
      let string4Result = string4(t4.cRCCJ3);
    } else {
      string4Result = string4(t4.gueLg5);
    }
    return string4Result;
  } else if (SubscriptionPlans.PREMIUM_YEAR_TIER_1 === id) {
    const intl6 = util.intl;
    const string3 = intl6.string;
    const t3 = util.t;
    if (arg2) {
      let string3Result = string3(t3.cRCCJ3);
    } else {
      string3Result = string3(t3["MhH/vW"]);
    }
    return string3Result;
  } else if (SubscriptionPlans.PREMIUM_MONTH_TIER_2 === id) {
    const intl5 = util.intl;
    const string2 = intl5.string;
    const t2 = util.t;
    if (arg2) {
      let string2Result = string2(t2.cRCCJ3);
    } else {
      string2Result = string2(t2.LQVQIq);
    }
    return string2Result;
  } else if (SubscriptionPlans.PREMIUM_GROUP_MONTH === id) {
    const intl4 = util.intl;
    obj2 = { premiumGroupProductName: closure_47() };
    return intl4.formatToPlainString(_modDef3199.LwdrNi, obj2);
  } else if (SubscriptionPlans.PREMIUM_YEAR_TIER_2 === id) {
    const intl3 = util.intl;
    const string = intl3.string;
    const t = util.t;
    if (arg2) {
      let stringResult = string(t.cRCCJ3);
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
                        const error = new Error("User is purchasing an unsupported plan");
                        const obj3 = { tags: null };
                        const obj4 = { planId: id };
                        obj3.tags = obj4;
                        const result = BillingUtils.captureBillingException(error, obj3);
                        throw error;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const intl = util.intl;
        return intl.string(util.t.eUEeCt);
      }
    }
    const intl2 = util.intl;
    const obj5 = { intervalCount: id.intervalCount };
    return intl2.formatToPlainString(util.t.BCD4fT, obj5);
  }
}
function getIntervalForInvoice(arg0) {
  value = SubscriptionPlanStore.get(arg0.invoiceItems[0].subscriptionPlanId);
  _modDef38(null != value, "Missing subscriptionPlan");
  return { intervalType: value.interval, intervalCount: value.intervalCount };
}
function getDefaultCurrency() {
  try {
    return getDefaultPrice(SubscriptionPlans.PREMIUM_MONTH_TIER_2, false, false, undefined, false).currency;
  } catch (err) {
  }
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
  const formatPriceResult = PriceUtils.formatPrice(0, tmp2, { maximumFractionDigits: 0, minimumFractionDigits: 0 });
  if (constants7.DAY === MONTH) {
    if (num >= 7) {
      if (num % 7 === 0) {
        const intl4 = util.intl;
        obj2 = { weeks: num / 7, price: formatPriceResult };
        let formatToPlainStringResult = intl4.formatToPlainString(util.t.C6i5Jt, obj2);
      }
      return formatToPlainStringResult;
    }
    const intl3 = util.intl;
    const obj3 = { days: num, price: formatPriceResult };
    formatToPlainStringResult = intl3.formatToPlainString(util.t.cR9ifw, obj3);
  } else if (constants7.MONTH === MONTH) {
    const intl2 = util.intl;
    const obj4 = { months: num, price: formatPriceResult };
    return intl2.formatToPlainString(util.t["8FZfNo"], obj4);
  } else if (constants7.YEAR === MONTH) {
    const intl = util.intl;
    const obj5 = { years: num, price: formatPriceResult };
    return intl.formatToPlainString(util.t.xzAcST, obj5);
  } else {
    const _Error = Error;
    const error = new Error("Unsupported interval duration.");
    throw error;
  }
}
function getItemsWithUpsertedPlanIdForGroup(renewalMutations, planId, quantity, has) {
  if (has.has(planId)) {
    c3 = false;
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
      if (has.has(planId.planId)) {
        c3 = true;
        obj = {};
        const merged = Object.assign(planId);
        obj.quantity = quantity;
        obj.planId = planId;
        tmp = obj;
      }
      return tmp;
    });
    if (!c3) {
      obj2 = { planId, quantity };
      const items1 = renewalMutations.items;
      const found = items1.find((planId) => planId.planId === closure_0);
      if (null != found) {
        obj2.id = found.id;
      }
      mapped.push(obj2);
    }
    return mapped.filter((quantity) => 0 !== quantity.quantity);
  } else {
    obj = { message: "Expected planId in group", extraSentryInformation: null };
    const obj3 = { newPlanId: planId, planGroup: has };
    obj.extraSentryInformation = obj3;
    const checkoutError = new CheckoutError.CheckoutError(obj);
    throw checkoutError;
  }
}
function getGuildBoostPlanItem(items) {
  let found = null;
  if (null != items) {
    items = items.items;
    found = items.find((planId) => set.has(planId.planId));
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
      found = items1.find((planId) => set.has(planId.planId));
    }
    tmp = null != found;
  }
  return tmp;
}
function getPremiumSkuIdForSubscription(items) {
  let found = null;
  if (null != items) {
    items = items.items;
    found = items.find((planId) => set.has(planId.planId));
  }
  let skuId = null;
  if (null != found) {
    const planId = found.planId;
    if (null == dependencyMap2[planId]) {
      const _Error = Error;
      const error = new Error("Unsupported plan");
      obj2 = { tags: null };
      const obj3 = { planId };
      obj2.tags = obj3;
      const result = BillingUtils.captureBillingException(error, obj2);
      throw error;
    } else {
      skuId = tmp4.skuId;
    }
  }
  return skuId;
}
function getPremiumTypeFromSubscription(subscription) {
  if (null != subscription) {
    const items = subscription.items;
    const found = items.find((planId) => set.has(planId.planId));
    if (null != found) {
      const planId = found.planId;
      if (null != dependencyMap2[planId]) {
        return tmp3.premiumType;
      } else {
        const _Error = Error;
        const error = new Error("Unsupported plan");
        obj2 = { tags: null };
        const obj3 = { planId };
        obj2.tags = obj3;
        const result = BillingUtils.captureBillingException(error, obj2);
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
  if (constants7.MONTH === arg1) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.FPybU7);
  } else if (tmp4.YEAR === arg1) {
    const intl = util.intl;
    stringResult = intl.string(util.t.tfqrhj);
  } else {
    const _Error = Error;
    const error = new Error("Unexpected interval");
    throw error;
  }
  return "" + PriceUtils.formatPrice(amount.amount, amount.currency) + "/" + stringResult;
}
function castPremiumSubscriptionAsSkuId(skuIdForPlan) {
  return skuIdForPlan;
}
function formatInterval(interval) {
  if (interval === constants7.YEAR) {
    const intl2 = util.intl;
    return intl2.string(util.t.tfqrhj);
  } else if (interval === tmp.MONTH) {
    const intl = util.intl;
    return intl.string(util.t.FPybU7);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Invalid interval type: " + interval);
    throw error;
  }
}
function isPremiumEligible(isProvisional) {
  return null != isProvisional && !isProvisional.isProvisional && !isProvisional.bot;
}
function getFractionalPremiumUnitsHours(arr) {
  const mapped = arr.map((skuId) => skuId.skuId);
  return mapped.reduce((acc, item) => {
    const tmp = _slicedToArray(closure_1_23[item], 2);
    const first = tmp[0];
    let num = 1;
    if (constants.HOUR !== first) {
      num = 1;
      if (constants.DAY === first) {
        num = 24;
      }
    }
    return acc + num * tmp[1];
  }, 0);
}
function getMonthlyPrice(isGift) {
  let flag = isGift.isGift;
  if (flag === undefined) {
    flag = false;
  }
  let priceOptions = isGift.priceOptions;
  if (priceOptions === undefined) {
    priceOptions = {};
  }
  let tmp2 = null;
  if (null != dependencyMap[isGift.subscriptionPlan.skuId]) {
    tmp2 = getPrice(tmp, false, flag, priceOptions);
  }
  return tmp2;
}
function calculateMonthlyPriceEquivalentTotal(priceOptions) {
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
    if (null != dependencyMap[subscriptionPlan.skuId]) {
      tmp5 = getPrice(tmp3, false, isGift, priceOptions);
    }
    if (null == tmp5) {
      return null;
    } else {
      if (subscriptionPlan.interval === constants7.MONTH) {
        let intervalCount = subscriptionPlan.intervalCount;
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
      const tmp3 = getMonthlyPrice(obj2);
      if (null != tmp3) {
        if (0 !== tmp4.amount) {
          const _Math = Math;
          return Math.floor(100 * (1 - getPrice(subscriptionPlan.id, false, flag, priceOptions).amount / (12 * tmp3.amount)));
        }
      }
    } catch (err) {
      return tmp;
    }
  }
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
  const tmp = calculateMonthlyPriceEquivalentTotal({ subscriptionPlan, isGift: flag, priceOptions });
  if (null != tmp) {
    if (tmp > 0) {
      const tmp5 = getPrice(subscriptionPlan.id, false, flag, priceOptions);
      const diff = tmp - tmp5.amount;
      let tmp7 = null;
      if (diff > 0) {
        const obj3 = { amount: diff, currency: tmp5.currency };
        tmp7 = obj3;
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
      obj2 = { amount: null, currency: null };
      const _Math = Math;
      obj2.amount = Math.round(tmp4.amount / 12);
      obj2.currency = tmp4.currency;
      tmp5 = obj2;
    }
    return tmp5;
  }
}
function getDaysSincePremium(arg0) {
  let num = 0;
  if (null != arg0) {
    const _Math = Math;
    const _Date = Date;
    const date = new Date();
    const _Date2 = Date;
    const date1 = new Date(arg0);
    num = Math.max(DateUtils.differenceInCalendarDays(date, date1), 0);
  }
  return num;
}
function getDaysRemainingUntilSubscriptionCurrentPeriodEnds(currentPeriodEnd) {
  obj = DateUtils;
  const date = new Date(currentPeriodEnd.currentPeriodEnd);
  return Math.max(1, Math.ceil(obj.differenceInDays(date, new Date())));
}
const isNoneSubscription = fn(4489).isNoneSubscription;
let Constants = fn(1074);
({ InvoiceStatusTypes: closure_11, PaymentGateways: closure_12, PriceSetAssignmentPurchaseTypes: map1, SubscriptionStatusTypes: closure_14 } = Constants);
const PremiumConstants = fn(1374);
({ DISCOUNTS: closure_15, ANNUAL_DISCOUNT_PERCENTAGE_FALLBACK: closure_16, DEFAULT_APPLE_GRACE_PERIOD_DAYS: closure_17, DEFAULT_GOOGLE_GRACE_PERIOD_DAYS: closure_18, DEFAULT_MAX_GRACE_PERIOD_DAYS: closure_19, DISCOUNT_DURATION_FALLBACK: closure_20, DISCOUNT_PERCENTAGE_FALLBACK: closure_21, DiscountUserUsageLimitIntervalTypes: closure_22, FRACTIONAL_PREMIUM_SKU_INTERVAL_COUNTS: closure_23, FractionalPremiumIntervalTypes: closure_24, FractionalPremiumStates: closure_25, MAX_ACCOUNT_HOLD_DAYS: closure_26, MAX_PAYMENT_PROCESSING_TIME_DAYS: closure_27, NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_28, PAID_SUBSCRIPTION_MAX_BILLING_RETRY_DAYS: closure_29, PAID_SUBSCRIPTION_MAX_GRACE_PERIOD_DAYS: closure_30, PREMIUM_GUILD_SUBSCRIPTION_PLANS: items, PREMIUM_PLANS: closure_32, PREMIUM_SKU_TO_MONTHLY_PLAN: closure_33, PREMIUM_TIER_2_PLANS: closure_34, PREMIUM_TIER_2_REVERSE_FOLLOWUP_TRIAL_ID: closure_35, PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID: closure_36, PREMIUM_TYPE_DISPLAY_NAME: closure_37, PremiumSubscriptionSKUs: closure_38, PremiumTypes: closure_39, PremiumUserLimits: closure_40, SubscriptionIntervalTypes: closure_41, SubscriptionPlanInfo: closure_42, SubscriptionPlans } = PremiumConstants);
({ TRIAL_FOR_EVERYONE_OFFER_EXPIRES_APPROACHING_THRESHOLD: closure_44, USER_PREMIUM_OFFER_EXPIRES_APPROACHING_4_DAY_THRESHOLD: closure_45, USER_PREMIUM_OFFER_EXPIRES_APPROACHING_7_DAY_THRESHOLD: closure_46 } = PremiumConstants);
let closure_47 = fn(4502).getPremiumGroupProductName;
Constants = fn(1085);
({ CurrencyCodes: closure_48, PaymentGatewayToFriendlyName: closure_49, PREPAID_PAYMENT_SOURCES: closure_50 } = Constants);
const constants9 = { PAYMENT_SOURCE_MANAGEMENT: "https://support.apple.com/HT201266", BILLING_HISTORY: "https://support.apple.com/HT201266", SUBSCRIPTION_MANAGEMENT: "https://support.apple.com/HT202039" };
const constants10 = { SUBSCRIPTION_MANAGEMENT: "https://play.google.com/store/account/subscriptions", PAYMENT_SOURCE_MANAGEMENT: "https://play.google.com/store/paymentmethods", BILLING_HISTORY: "https://play.google.com/store/account/orderhistory" };
const logger = new LoggerDefault("PremiumUtils.tsx");
const Branding = { BUNDLE: "bundle", TIER_0: "tier_0", TIER_1: "tier_1", TIER_2: "tier_2", PREMIUM_GUILD: "premium_guild" };
let obj2 = { MID: "mid", HIGH: "high" };
items = [, , , , , , , , , , , , ];
({ NONE_MONTH: arr[0], NONE_3_MONTH: arr[1], NONE_6_MONTH: arr[2], NONE_YEAR: arr[3], PREMIUM_MONTH_TIER_0: arr[4], PREMIUM_MONTH_TIER_1: arr[5], PREMIUM_MONTH_TIER_2: arr[6], PREMIUM_YEAR_TIER_0: arr[7], PREMIUM_YEAR_TIER_1: arr[8], PREMIUM_YEAR_TIER_2: arr[9], PREMIUM_3_MONTH_TIER_2: arr[10], PREMIUM_6_MONTH_TIER_2: arr[11], PREMIUM_GROUP_MONTH: arr[12] } = SubscriptionPlans);
let set = new Set(items);
let tmp5 = new LoggerDefault("PremiumUtils.tsx");
const frozen = Object.freeze({
  isNewUser,
  isPremiumAtLeast: fn(1970).isPremiumAtLeast,
  isPremium: fn(1970).isPremium,
  isPremiumExactly: fn(1970).isPremiumExactly,
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
    return skuId === __initData16.TIER_0 || skuId === __initData16.TIER_1 || skuId === __initData16.TIER_2;
  },
  getIntervalMonths(arg0, arg1) {
    if (arg0 === constants7.MONTH) {
      return arg1;
    } else if (arg0 === tmp.YEAR) {
      return 12 * arg1;
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("" + arg0 + " interval subscription period not implemented");
      throw error;
    }
  },
  getUserMaxFileSize: fn(8660).getUserMaxFileSize,
  getSkuIdForPlan(planId) {
    if (null == dependencyMap2[planId]) {
      const _Error = Error;
      const error = new Error("Unsupported plan");
      obj2 = { tags: null };
      const obj3 = { planId };
      obj2.tags = obj3;
      const result = BillingUtils.captureBillingException(error, obj2);
      throw error;
    } else {
      return tmp.skuId;
    }
  },
  getSkuIdForPremiumType(premiumType) {
    if (__initData17.TIER_0 === premiumType) {
      return __initData16.TIER_0;
    } else if (__initData17.TIER_1 === premiumType) {
      return __initData16.TIER_1;
    } else if (__initData17.TIER_2 === premiumType) {
      return __initData16.TIER_2;
    }
  },
  getNumIncludedPremiumGuildSubscriptionSlots(planId) {
    if (null != dependencyMap2[planId]) {
      let num = 0;
      if (tmp.premiumType === __initData17.TIER_2) {
        num = __initData6;
      }
      return num;
    } else {
      const _Error = Error;
      const error = new Error("Unsupported plan");
      obj2 = { tags: null };
      const obj3 = { planId };
      obj2.tags = obj3;
      const result = BillingUtils.captureBillingException(error, obj2);
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
    let someResult = null != entitlements;
    if (someResult) {
      someResult = 0 !== entitlements.size;
    }
    if (someResult) {
      const _Array = Array;
      someResult = Array.from(entitlements).some((subscriptionPlanId) => {
        let tmp = null != subscriptionPlanId.subscriptionPlanId;
        if (tmp) {
          tmp = null != subscriptionPlanId.parentId;
        }
        if (tmp) {
          tmp = !subscriptionPlanId.consumed;
        }
        return tmp;
      });
      const arr = Array.from(entitlements);
    }
    return someResult;
  },
  hasUnconsumedGiftForSubscriptionPlan(size, arg1) {
    closure_0 = arg1;
    let someResult = null != size;
    if (someResult) {
      someResult = 0 !== size.size;
    }
    if (someResult) {
      someResult = null != arg1;
    }
    if (someResult) {
      const _Array = Array;
      someResult = Array.from(size).some((subscriptionPlanId) => {
        subscriptionPlanId = subscriptionPlanId.subscriptionPlanId;
        let tmp = null != subscriptionPlanId;
        if (tmp) {
          tmp = null != subscriptionPlanId.parentId;
        }
        if (tmp) {
          tmp = !subscriptionPlanId.consumed;
        }
        if (tmp) {
          tmp = subscriptionPlanId === closure_0;
        }
        return tmp;
      });
      const arr = Array.from(size);
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
    return ProductCatalog.canUserUse(ProductCatalog.ANIMATED_EMOJIS, currentUser);
  },
  canUseEmojisEverywhere(currentUser) {
    return ProductCatalog.canUserUse(ProductCatalog.EMOJIS_EVERYWHERE, currentUser);
  },
  canUseSoundboardEverywhere(currentUser) {
    return ProductCatalog.canUserUse(ProductCatalog.SOUNDBOARD_EVERYWHERE, currentUser);
  },
  canUseCustomCallSounds(currentUser) {
    return ProductCatalog.canUserUse(ProductCatalog.CUSTOM_CALL_SOUNDS, currentUser);
  },
  canUploadLargeFiles(currentUser) {
    return ProductCatalog.canUserUse(ProductCatalog.UPLOAD_LARGE_FILES, currentUser);
  },
  canUseBadges(currentUser) {
    return ProductCatalog.canUserUse(ProductCatalog.PROFILE_BADGES, currentUser);
  },
  canUseHighVideoUploadQuality(currentUser) {
    return ProductCatalog.canUserUse(ProductCatalog.INCREASED_VIDEO_UPLOAD_QUALITY, currentUser);
  },
  canEditDiscriminator(stateFromStores) {
    return ProductCatalog.canUserUse(ProductCatalog.CUSTOM_DISCRIMINATOR, stateFromStores);
  },
  hasBoostDiscount(stateFromStores) {
    return ProductCatalog.canUserUse(ProductCatalog.BOOST_DISCOUNT, stateFromStores);
  },
  canUseAnimatedAvatar(currentUser) {
    return ProductCatalog.canUserUse(ProductCatalog.ANIMATED_AVATAR, currentUser);
  },
  canInstallPremiumApplications(isPremiumWithFractionalPremiumOnly) {
    return ProductCatalog.canUserUse(ProductCatalog.INSTALL_PREMIUM_APPLICATIONS, isPremiumWithFractionalPremiumOnly);
  },
  canUseIncreasedMessageLength(currentUser) {
    return ProductCatalog.canUserUse(ProductCatalog.INCREASED_MESSAGE_LENGTH, currentUser);
  },
  canUseIncreasedGuildCap(currentUser) {
    return ProductCatalog.canUserUse(ProductCatalog.INCREASED_GUILD_LIMIT, currentUser);
  },
  canRedeemPremiumPerks(isPremiumWithFractionalPremiumOnly) {
    return ProductCatalog.canUserUse(ProductCatalog.REDEEM_PREMIUM_PERKS, isPremiumWithFractionalPremiumOnly);
  },
  canUsePremiumProfileCustomization(isPremiumWithFractionalPremiumOnly) {
    return ProductCatalog.canUserUse(ProductCatalog.PROFILE_PREMIUM_FEATURES, isPremiumWithFractionalPremiumOnly);
  },
  canUsePremiumAppIcons(currentUser) {
    return ProductCatalog.canUserUse(ProductCatalog.APP_ICONS, currentUser);
  },
  canUsePremiumGuildMemberProfile(currentUser) {
    return ProductCatalog.canUserUse(ProductCatalog.PREMIUM_GUILD_MEMBER_PROFILE, currentUser);
  },
  canUseClientThemes(currentUser) {
    return ProductCatalog.canUserUse(ProductCatalog.CLIENT_THEMES, currentUser);
  },
  canStreamQuality(MID, currentUser) {
    if (MID === obj2.HIGH) {
      obj2 = ProductCatalog;
      let canUserUseResult = obj2.canUserUse(ProductCatalog.STREAM_HIGH_QUALITY, currentUser);
    } else {
      canUserUseResult = ProductCatalog.canUserUse(ProductCatalog.STREAM_MID_QUALITY, currentUser);
    }
    return canUserUseResult;
  },
  canUseQuestOrbMultiplier(perks) {
    return ProductCatalog.canUserUse(ProductCatalog.QUEST_ORB_MULTIPLIER, perks);
  },
  hasFreeBoosts(stateFromStores) {
    return ProductCatalog.canUserUse(ProductCatalog.FREE_BOOSTS, stateFromStores);
  },
  canUseCustomStickersEverywhere(currentUser) {
    return ProductCatalog.canUserUse(ProductCatalog.STICKERS_EVERYWHERE, currentUser);
  },
  canUseCustomBackgrounds(currentUser) {
    return ProductCatalog.canUserUse(ProductCatalog.VIDEO_FILTER_ASSETS, currentUser);
  },
  canUseCollectibles(user) {
    return ProductCatalog.canUserUse(ProductCatalog.COLLECTIBLES, user);
  },
  canUseMonthlyOrbs(stateFromStores) {
    let perks;
    if (stateFromStores != null) {
      perks = stateFromStores.perks;
    }
    return PerksStateUtils.hasPerk(perks, user2.Perk.MONTHLY_ORBS);
  },
  canUseShopDiscounts(currentUser) {
    let perks;
    if (currentUser != null) {
      perks = currentUser.perks;
    }
    let hasPerkResult = PerksStateUtils.hasPerk(perks, user2.Perk.SHOP_DISCOUNTS);
    if (!hasPerkResult) {
      hasPerkResult = ProductCatalog.canUserUse(ProductCatalog.COLLECTIBLES, currentUser);
      const tmpResult = ProductCatalog;
    }
    return hasPerkResult;
  },
  canUseMoreQuestOrbs(perks) {
    perks = undefined;
    if (perks != null) {
      perks = perks.perks;
    }
    let hasPerkResult = PerksStateUtils.hasPerk(perks, user2.Perk.MORE_QUEST_ORBS);
    if (!hasPerkResult) {
      hasPerkResult = ProductCatalog.canUserUse(ProductCatalog.QUEST_ORB_MULTIPLIER, perks);
      const tmpResult = ProductCatalog;
    }
    return hasPerkResult;
  },
  formatPriceString,
  StreamQuality: obj2
});
const size = fn(2);
let result = size.fileFinishedImporting("utils/PremiumUtils.tsx");

export default frozen;
export { Branding };
export const StreamQuality = obj2;
export const getPremiumBranding = function getPremiumBranding(renewalMutations) {
  const planId = renewalMutations.planId;
  if (set2.has(planId)) {
    const additionalPlans = renewalMutations.additionalPlans;
    const items = [__initData16.GUILD];
    const planIdsForSkus = SubscriptionPlanStore.getPlanIdsForSkus(items);
    _modDef38(null != planIdsForSkus, "Missing guildSubscriptionPlanIds");
    const found = additionalPlans.find((planId) => planIdsForSkus.includes(planId.planId));
    let num2 = 0;
    if (null != found) {
      num2 = found.quantity;
    }
    if (num2 > 0) {
      let TIER_0 = obj.BUNDLE;
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
export const withContextPlanPrices = function withContextPlanPrices(arg0, arr) {
  let tmp = arg0;
  if (null != arr) {
    obj = {};
    const merged = Object.assign(arg0);
    const _Object = Object;
    obj.contextPlanPrices = Object.fromEntries(arr.map((item) => {
      const items = [, ];
      ({ id: arr[0], price: arr[1] } = item);
      return items;
    }));
    tmp = obj;
  }
  return tmp;
};
export const usePlanSelectPriceState = function usePlanSelectPriceState(arg0, arg1, arg2) {
  closure_0 = arg0;
  const currency = arg1;
  closure_2 = arg2;
  let items = [arg1];
  const memo = noop.useMemo(() => {
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
  return noop.useMemo(() => {
    let tmp2 = closure_0;
    if (null != memo) {
      obj = {};
      const merged = Object.assign(closure_0);
      const _Object = Object;
      obj.contextPlanPrices = Object.fromEntries(memo.map((item) => {
        const items = [, ];
        ({ id: arr[0], price: arr[1] } = item);
        return items;
      }));
      tmp2 = obj;
    }
    obj2 = { priceOptions: tmp2, planPricesLoading: null };
    let tmp7 = null != closure_0.currency;
    if (tmp7) {
      tmp7 = null != currency;
    }
    if (tmp7) {
      tmp7 = currency.currency !== closure_0.currency;
    }
    if (tmp7) {
      tmp7 = null == closure_2;
    }
    obj2.planPricesLoading = tmp7;
    return obj2;
  }, items1);
};
export { getPrice };
export const getCountryPrices = function getCountryPrices(planId) {
  if (DEFAULT === undefined) {
    DEFAULT = constants3.DEFAULT;
  }
  return getPurchaseTypePrices(planId, DEFAULT).countryPrices;
};
export { experimentalGetPrices };
export const experimentalGetPrice = function experimentalGetPrice(id, arg1) {
  let tmp = arg1;
  if (arg1 === undefined) {
    obj = { purchaseType: constants3.DEFAULT };
    tmp = obj;
  }
  ({ paymentSourceId, purchaseType, currency } = tmp);
  const arr = experimentalGetPrices(id, { paymentSourceId, purchaseType });
  if (0 === arr.length) {
    const _HermesInternal = HermesInternal;
    logger.warn("No prices found for planId: " + id + ", paymentSourceId: " + paymentSourceId + ", purchaseType: " + purchaseType);
  }
  if (null != currency) {
    let found = arr.find((currency) => currency.currency === currency.toLowerCase());
    if (null == found) {
      let found1;
      if (null != paymentSourceId) {
        obj2 = { purchaseType };
        found1 = experimentalGetPrices(id, obj2).find((currency) => currency.currency === currency.toLowerCase());
        const tmp3Result = experimentalGetPrices(id, obj2);
      }
      found = found1;
    }
    return found;
  } else {
    return arr[0];
  }
};
export { getServerPriceFromClientPrice };
export { getItemPlansTotalServerPrice };
export const getSubscriptionWithNewPlansTotalServerPrice = function getSubscriptionWithNewPlansTotalServerPrice(renewalMutations, arg1, currency, id) {
  let items = arg1;
  if (null === arg1) {
    _modDef38(null !== renewalMutations, "Subscription can't be null");
    items = [];
  }
  if (null !== renewalMutations) {
    closure_0 = renewalMutations;
    renewalMutations = renewalMutations.renewalMutations;
    let items1;
    if (renewalMutations != null) {
      items1 = renewalMutations.items;
    }
    if (items1 == null) {
      items1 = renewalMutations.items;
    }
    const items2 = [];
    const found = items1.find((planId) => set.has(planId.planId));
    if (null != found) {
      items2.push(found);
    }
    const push = items2.push;
    const items3 = [];
    HermesBuiltin.arraySpread(items, 0);
    HermesBuiltin.apply(items3, items2);
    let mapped = items2.map((planId) => {
      for (const item10008 of tmp) {
        if (arg0.planId === item10008.planId) {
          obj2 = {};
          let merged = Object.assign(tmp2);
          let merged1 = Object.assign(arg0);
          obj.return();
          return obj2;
        }
      }
      return planId;
    });
  } else {
    mapped = items.filter((planId) => !set.has(planId.planId));
  }
  return getItemPlansTotalServerPrice(mapped, currency, id);
};
export { getInterval };
export const getDiscountIntervalString = function getDiscountIntervalString(arg0) {
  if (constants5.MONTH === arg0) {
    const intl2 = util.intl;
    return intl2.string(util.t.FPybU7);
  } else if (constants5.YEAR === arg0) {
    const intl = util.intl;
    return intl.string(util.t.tfqrhj);
  } else {
    if (constants5.DAY !== arg0) {
      const WEEK = constants5.WEEK;
    }
    const _Error = Error;
    const error = new Error("Unexpected interval");
    throw error;
  }
};
export { getIntervalString };
export { getIntervalStringAsNoun };
export { getPremiumType };
export { getDisplayName };
export const getDisplayNameFromSku = function getDisplayNameFromSku(skuId1) {
  if (__initData16.TIER_0 === skuId1) {
    const intl3 = util.intl;
    return intl3.string(util.t["t9uG/o"]);
  } else if (__initData16.TIER_1 === skuId1) {
    const intl2 = util.intl;
    return intl2.string(util.t.FSOz78);
  } else if (__initData16.TIER_2 === skuId1) {
    const intl = util.intl;
    return intl.string(util.t.lG6a5x);
  } else {
    const _Error = Error;
    const error = new Error("Unsupported sku");
    obj2 = { tags: null };
    const obj3 = { skuId: skuId1 };
    obj2.tags = obj3;
    const result = BillingUtils.captureBillingException(error, obj2);
    throw error;
  }
};
export { getTierDisplayNameByPlanId };
export const getPremiumTypeDisplayName = function getPremiumTypeDisplayName(TIER_0, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (__initData17.TIER_0 === TIER_0) {
    let str2 = "Basic";
    if (!flag) {
      const intl3 = util.intl;
      str2 = intl3.string(util.t["t9uG/o"]);
    }
    return str2;
  } else if (__initData17.TIER_1 === TIER_0) {
    let str = "Classic";
    if (!flag) {
      const intl2 = util.intl;
      str = intl2.string(util.t.FSOz78);
    }
    return str;
  } else if (__initData17.TIER_2 === TIER_0) {
    const intl = util.intl;
    return intl.string(util.t.lG6a5x);
  }
};
export const getPlanDescriptionFromInvoice = function getPlanDescriptionFromInvoice(hasDiscountApplied) {
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
  value = SubscriptionPlanStore.get(planId);
  _modDef38(null != value, "Missing plan");
  obj = { subscription, planId: value.id, price: null, includePremiumGuilds: null, hasDiscountApplied: null, activeDiscountInfo: null, renewalInvoiceWithoutEntitlementsPreview: null, renewalInvoiceWithEntitlementsPreview: null, hasFractionalPremiumWithSub: null, fractionalPremiumInfo: null };
  const result = renewalInvoicePreview.findInvoiceItemByPlanId(value.id);
  if (null == result) {
    const obj5 = { paymentSourceId: null, currency: null };
    ({ paymentSourceId: obj2.paymentSourceId, currency: obj2.currency } = subscription);
    let amount = getPrice(value.id, false, false, obj5).amount;
  } else {
    amount = result.amount;
  }
  const obj3 = PriceUtils;
  obj.price = obj3.formatRate(PriceUtils.formatPrice(amount, renewalInvoicePreview.currency), value.interval, value.intervalCount);
  obj.includePremiumGuilds = includePremiumGuilds;
  obj.hasDiscountApplied = flag;
  obj.activeDiscountInfo = activeDiscountInfo;
  obj.renewalInvoiceWithoutEntitlementsPreview = renewalInvoicePreview;
  obj.renewalInvoiceWithEntitlementsPreview = renewalInvoiceWithEntitlementsPreview;
  obj.hasFractionalPremiumWithSub = hasFractionalPremiumWithSub;
  obj.fractionalPremiumInfo = hasDiscountApplied.fractionalPremiumInfo;
  return getPlanDescription(obj);
};
export const getExternalPlanDisplayName = function getExternalPlanDisplayName(renewalMutations) {
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
    let Pi5yMJ = util.t.Pi5yMJ;
  } else {
    let planId2;
    if (found != null) {
      planId2 = found.planId;
    }
    Pi5yMJ = null;
    if (planId2 === tmp5.PREMIUM_YEAR_GUILD) {
      Pi5yMJ = util.t.H4KPuV;
    }
  }
  if (null != Pi5yMJ) {
    const intl = util.intl;
    let quantity;
    if (found != null) {
      quantity = found.quantity;
    }
    obj = { num: quantity };
    const formatToPlainStringResult = intl.formatToPlainString(Pi5yMJ, obj);
  }
  if (null != tmp) {
    if (null != formatToPlainStringResult) {
      const intl2 = util.intl;
      obj2 = { premiumDescription: tmp, premiumGuildDescription: formatToPlainStringResult };
      return intl2.formatToPlainString(util.t.FN5T9r, obj2);
    }
  }
  if (null != tmp) {
    return tmp;
  } else if (null != formatToPlainStringResult) {
    return formatToPlainStringResult;
  } else {
    const _Error = Error;
    const error = new Error("Subscription without premium or premium guild subscription");
    throw error;
  }
};
export { getPremiumPlanOptions };
export const getPlanIdForPremiumType = function getPlanIdForPremiumType(premiumType, YEAR) {
  const items = [, ];
  ({ MONTH: arr[0], YEAR: arr[1] } = constants7);
  if (set.has(YEAR)) {
    if (__initData17.TIER_0 === premiumType) {
      if (YEAR === constants7.MONTH) {
        let PREMIUM_YEAR_TIER_0 = SubscriptionPlans.PREMIUM_MONTH_TIER_0;
      } else {
        PREMIUM_YEAR_TIER_0 = SubscriptionPlans.PREMIUM_YEAR_TIER_0;
      }
      return PREMIUM_YEAR_TIER_0;
    } else if (__initData17.TIER_1 === premiumType) {
      if (YEAR === constants7.MONTH) {
        let PREMIUM_YEAR_TIER_1 = SubscriptionPlans.PREMIUM_MONTH_TIER_1;
      } else {
        PREMIUM_YEAR_TIER_1 = SubscriptionPlans.PREMIUM_YEAR_TIER_1;
      }
      return PREMIUM_YEAR_TIER_1;
    } else if (__initData17.TIER_2 === premiumType) {
      if (YEAR === constants7.MONTH) {
        let PREMIUM_YEAR_TIER_2 = SubscriptionPlans.PREMIUM_MONTH_TIER_2;
      } else {
        PREMIUM_YEAR_TIER_2 = SubscriptionPlans.PREMIUM_YEAR_TIER_2;
      }
      return PREMIUM_YEAR_TIER_2;
    } else {
      const _Error2 = Error;
      const _HermesInternal2 = HermesInternal;
      const error = new Error("Unsupported premium type: " + premiumType);
      throw error;
    }
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error1 = new Error("Unsupported plan interval for premium type: " + YEAR);
    throw error1;
  }
  set = new Set(items);
};
export { getNumPremiumGuildSubscriptions };
export const subscriptionHasPremiumGuildPlan = function subscriptionHasPremiumGuildPlan(subscription) {
  const additionalPlans = subscription.additionalPlans;
  const items = [__initData16.GUILD];
  const planIdsForSkus = SubscriptionPlanStore.getPlanIdsForSkus(items);
  _modDef38(null != planIdsForSkus, "Missing guildSubscriptionPlanIds");
  const found = additionalPlans.find((planId) => planIdsForSkus.includes(planId.planId));
  let num = 0;
  if (null != found) {
    num = found.quantity;
  }
  return num > 0;
};
export const isPremiumBaseSubscriptionPlan = function isPremiumBaseSubscriptionPlan(arg0) {
  return set.has(arg0);
};
export const isPremiumGuildSubscriptionPlan = function isPremiumGuildSubscriptionPlan(planId) {
  return set.has(planId);
};
export const isPremiumSubscriptionPlan = function isPremiumSubscriptionPlan(arg0) {
  let hasItem = set.has(arg0);
  if (!hasItem) {
    hasItem = set.has(arg0);
  }
  return hasItem;
};
export const isPremiumGroupSubscriptionPlan = function isPremiumGroupSubscriptionPlan(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = arg0 === SubscriptionPlans.PREMIUM_GROUP_MONTH;
  }
  return tmp;
};
export { getBillingGracePeriodDaysAndExpiresDate };
export { getExpectedRenewalDate };
export { getBillingInformationString };
export { extendDateWithUnconsumedFractionalPremium };
export { getUnactivatedFractionalPremiumDurationString };
export { isSwitchingPlansDisabled };
export { getSwitchingPlansDisabledMessage };
export const isSubscriptionPrepaidPaymentSource = function isSubscriptionPrepaidPaymentSource(paymentSourceId) {
  let tmp = null != paymentSourceId.paymentSourceId;
  if (tmp) {
    paymentSourceId = paymentSourceId.paymentSourceId;
    let flag = false;
    if (null != paymentSourceId) {
      const paymentSource = PaymentSourceStore.getPaymentSource(paymentSourceId);
      let hasItem = null != paymentSource;
      if (hasItem) {
        hasItem = set3.has(paymentSource.type);
      }
      flag = hasItem;
    }
    tmp = flag;
  }
  return tmp;
};
export const isPrepaidPaymentSource = function isPrepaidPaymentSource(paymentSourceId) {
  if (null == paymentSourceId) {
    return false;
  } else {
    const paymentSource = PaymentSourceStore.getPaymentSource(paymentSourceId);
    let hasItem = null != paymentSource;
    if (hasItem) {
      hasItem = set3.has(paymentSource.type);
    }
    return hasItem;
  }
};
export { getCoercedPremiumGuildSubscriptionStatus };
export { isPremiumGuildSubscriptionCanceled };
export const getPremiumGuildHeaderDescription = function getPremiumGuildHeaderDescription(arg0) {
  ({ subscription, user, price, renewalInvoicePreview, fractionalPremiumInfo } = arg0);
  const renewalMutations = subscription.renewalMutations;
  value = SubscriptionPlanStore.get(subscription.planId);
  _modDef38(null != value, "Missing plan");
  const tmp5 = getNumPremiumGuildSubscriptions(subscription.additionalPlans);
  let additionalPlans;
  if (renewalMutations != null) {
    additionalPlans = renewalMutations.additionalPlans;
  }
  let tmp4Result = tmp5;
  if (null != additionalPlans) {
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
        if (tmp9) {
          tmp14 = tmp4Result;
        }
        try {
          amount = getPremiumGuildIntervalPrice(subscription.planId, subscription.paymentSourceId, subscription.currency, user).amount * tmp14;
          flag2 = false;
        } catch (err) {
          flag2 = true;
        }
      }
      let formatPriceResult;
      if (null != amount) {
        formatPriceResult = PriceUtils.formatPrice(amount, subscription.currency);
      }
      tmp10 = formatPriceResult;
      flag = flag2;
    }
  }
  let str = "";
  if (null != tmp10) {
    str = PriceUtils.formatRate(tmp10, value.interval, value.intervalCount);
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
    const intl8 = util.intl;
    const format3 = intl8.format;
    const t4 = util.t;
    if (tmp21) {
      const obj3 = { quantity: tmp5 };
      let format3Result = format3(t4["3/WTrI"], obj3);
    } else if (flag3) {
      const obj4 = { quantity: tmp5, rate: str };
      format3Result = format3(t4["0ozBSB"], obj4);
    } else {
      const obj5 = { quantity: tmp5, rate: str };
      format3Result = format3(t4["yjsv/s"], obj5);
    }
    return format3Result;
  } else {
    const status = subscription.status;
    if (constants4.ACCOUNT_HOLD === status) {
      const intl7 = util.intl;
      const format2 = intl7.format;
      const t3 = util.t;
      if (tmp21) {
        const obj6 = { quantity: tmp5, boostQuantity: tmp5 };
        let format2Result = format2(t3.Nlf3nc, obj6);
      } else if (flag3) {
        const obj7 = { quantity: tmp5, boostQuantity: tmp5, rate: str };
        format2Result = format2(t3.oiRy7v, obj7);
      } else {
        const obj8 = { quantity: tmp5, boostQuantity: tmp5, rate: str };
        format2Result = format2(t3["0QxOAi"], obj8);
      }
      return format2Result;
    } else {
      if (constants4.PAUSE_PENDING !== status) {
        if (constants4.PAUSED !== status) {
          if (constants4.PAST_DUE === status) {
            if (subscription.isBoostOnly) {
              const intl4 = util.intl;
              const obj10 = {
                endDate: DateUtils.dateFormat(getBillingGracePeriodDaysAndExpiresDate(subscription).expiresDate, "LL"),
                onClick() {
                              openURLDefault("https://support.discord.com/hc/articles/23082866222871");
                            }
              };
              return intl4.format(util.t["d+0vwo"], obj10);
            }
          }
          const tmp26 = util;
          if (tmp9) {
            if (tmp21) {
              const intl3 = tmp26.intl;
              const obj11 = { activeQuantity: tmp4Result, pendingQuantity: bound };
              return intl3.format(util.t["krRy+d"], obj11);
            } else {
              const t2 = tmp26.t;
              if (flag3) {
                let BmaudS = t2["4nc7+E"];
                let tmp28 = require;
              } else {
                BmaudS = t2.BmaudS;
                tmp28 = require;
              }
              const intl2 = tmp28(1115).intl;
              const obj12 = { activeQuantity: tmp4Result, pendingQuantity: bound, rate: str };
              return intl2.format(BmaudS, obj12);
            }
          } else {
            const intl = tmp26.intl;
            const format = intl.format;
            const t = util.t;
            if (tmp21) {
              const obj13 = { quantity: tmp5 };
              let formatResult = format(t["5iud9s"], obj13);
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
        if (!fractionalPremiumInfo.isFractionalPremiumActive) {
          const intl5 = util.intl;
          let stringResult = intl5.string(util.t.CduWAm);
        }
        return stringResult;
      }
      const intl6 = util.intl;
      const obj16 = { quantity: tmp5 };
      stringResult = intl6.format(util.t["5iud9s"], obj16);
    }
  }
};
export { getFormattedPriceForPlan };
export const getFormattedRateForPlan = function getFormattedRateForPlan(interval, arg1, arg2) {
  const tmp = getFormattedPriceForPlan(interval, arg1, arg2);
  return PriceUtils.formatRate(tmp, interval.interval, interval.intervalCount);
};
export { getPlanIdFromInvoice };
export { getStatusFromInvoice };
export { isBaseSubscriptionCanceled };
export const isSubscriptionStatusFailedPayment = function isSubscriptionStatusFailedPayment(arg0) {
  return arg0 === constants4.PAST_DUE || arg0 === constants4.ACCOUNT_HOLD || arg0 === constants4.BILLING_RETRY;
};
export const getFormattedPlanPriceFromInvoice = function getFormattedPlanPriceFromInvoice(findInvoiceItemByPlanId, arg1, id) {
  const result = findInvoiceItemByPlanId.findInvoiceItemByPlanId(id.id);
  if (null == result) {
    obj = { paymentSourceId: null, currency: null };
    ({ paymentSourceId: obj.paymentSourceId, currency: obj.currency } = arg1);
    let amount = getPrice(id.id, false, false, obj).amount;
  } else {
    amount = result.amount;
  }
  obj2 = PriceUtils;
  return obj2.formatRate(PriceUtils.formatPrice(amount, findInvoiceItemByPlanId.currency), id.interval, id.intervalCount);
};
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
    let num2 = 7;
    if (num >= 7) {
      if (num % num2 === 0) {
        const intl4 = util.intl;
        const formatToPlainString4 = intl4.formatToPlainString;
        let t1 = util.t;
        if (flag) {
          t1 = { weeks: null };
          num2 = num / num2;
          t1.weeks = num2;
          let formatToPlainString4Result = formatToPlainString4(t1.fRNBRX, t1);
        } else {
          obj2 = { weeks: num / num2 };
          formatToPlainString4Result = formatToPlainString4(t1.EIpHEj, obj2);
        }
      }
    }
    const intl3 = util.intl;
    const formatToPlainString3 = intl3.formatToPlainString;
    const t3 = util.t;
    if (flag) {
      const obj3 = { days: num };
      let formatToPlainString3Result = formatToPlainString3(t3["6Cdzoy"], obj3);
    } else {
      const obj4 = { days: num };
      formatToPlainString3Result = formatToPlainString3(t3["kbBj/h"], obj4);
    }
    return formatToPlainString3Result;
  } else if (constants7.MONTH === MONTH) {
    const intl2 = util.intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    const t2 = util.t;
    if (flag) {
      const obj5 = { months: num };
      let formatToPlainString2Result = formatToPlainString2(t2.x5MgxS, obj5);
    } else {
      const obj6 = { months: num };
      formatToPlainString2Result = formatToPlainString2(t2["4SEnCZ"], obj6);
    }
    return formatToPlainString2Result;
  } else if (constants7.YEAR === MONTH) {
    const intl = util.intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = util.t;
    if (flag) {
      const obj7 = { years: num };
      let formatToPlainStringResult = formatToPlainString(t["h+63yl"], obj7);
    } else {
      obj = { years: num };
      formatToPlainStringResult = formatToPlainString(t["9DFiHk"], obj);
    }
    return formatToPlainStringResult;
  } else {
    const _Error = Error;
    const error = new Error("Unsupported interval duration.");
    throw error;
  }
};
export { formatTrialCtaIntervalDuration };
export const formatTrialCtaIntervalDurationFromTrialOffer = function formatTrialCtaIntervalDurationFromTrialOffer(subscriptionTrial, TIER_2) {
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
    let num2 = 7;
    if (num >= 7) {
      if (num % num2 === 0) {
        const intl4 = util.intl;
        const formatToPlainString4 = intl4.formatToPlainString;
        let t1 = util.t;
        if (flag) {
          t1 = { weeks: null };
          num2 = num / num2;
          t1.weeks = num2;
          let formatToPlainString4Result = formatToPlainString4(t1.iVZYyl, t1);
        } else {
          obj2 = { weeks: num / num2 };
          formatToPlainString4Result = formatToPlainString4(t1.EmoBD2, obj2);
        }
      }
    }
    const intl3 = util.intl;
    const formatToPlainString3 = intl3.formatToPlainString;
    const t3 = util.t;
    if (flag) {
      const obj3 = { days: num };
      let formatToPlainString3Result = formatToPlainString3(t3.jzH70Z, obj3);
    } else {
      const obj4 = { days: num };
      formatToPlainString3Result = formatToPlainString3(t3["k2UNz+"], obj4);
    }
    return formatToPlainString3Result;
  } else if (constants7.MONTH === MONTH) {
    const intl2 = util.intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    const t2 = util.t;
    if (flag) {
      const obj5 = { months: num };
      let formatToPlainString2Result = formatToPlainString2(t2.erUSmA, obj5);
    } else {
      const obj6 = { months: num };
      formatToPlainString2Result = formatToPlainString2(t2.kridzK, obj6);
    }
    return formatToPlainString2Result;
  } else if (constants7.YEAR === MONTH) {
    const intl = util.intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = util.t;
    if (flag) {
      const obj7 = { years: num };
      let formatToPlainStringResult = formatToPlainString(t.IfYQVC, obj7);
    } else {
      obj = { years: num };
      formatToPlainStringResult = formatToPlainString(t.PClsrw, obj);
    }
    return formatToPlainStringResult;
  } else {
    const _Error = Error;
    const error = new Error("Unsupported interval duration.");
    throw error;
  }
};
export const getExternalSubscriptionMethodUrl = function getExternalSubscriptionMethodUrl(paymentGateway, PAYMENT_SOURCE_MANAGEMENT) {
  if (constants2.APPLE_PARTNER !== paymentGateway) {
    if (constants2.APPLE_ADVANCED_COMMERCE !== paymentGateway) {
      if (constants2.APPLE !== paymentGateway) {
        if (constants2.GOOGLE === paymentGateway) {
          return constants10[PAYMENT_SOURCE_MANAGEMENT];
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("Invalid external payment gateway " + paymentGateway);
          throw error;
        }
      }
    }
  }
  return constants9[PAYMENT_SOURCE_MANAGEMENT];
};
export const hasPremiumSubscriptionToDisplay = function hasPremiumSubscriptionToDisplay(currentUser, premiumTypeSubscription) {
  let isPremiumResult = PremiumTypeUtils.isPremium(currentUser);
  if (!isPremiumResult) {
    let status;
    if (premiumTypeSubscription != null) {
      status = premiumTypeSubscription.status;
    }
    isPremiumResult = status === constants4.PAST_DUE || status === constants4.ACCOUNT_HOLD || status === constants4.BILLING_RETRY;
    const tmp6 = status === constants4.PAST_DUE || status === constants4.ACCOUNT_HOLD || status === constants4.BILLING_RETRY;
  }
  return isPremiumResult;
};
export const useHasPremiumSubscriptionToDisplay = function useHasPremiumSubscriptionToDisplay() {
  const items = [SubscriptionStore];
  const stateFromStores = initialize.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const items1 = [UserStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => currentUser.getCurrentUser());
  let isPremiumResult = PremiumTypeUtils.isPremium(stateFromStores1);
  if (!isPremiumResult) {
    let status;
    if (stateFromStores != null) {
      status = stateFromStores.status;
    }
    isPremiumResult = status === constants4.PAST_DUE || status === constants4.ACCOUNT_HOLD || status === constants4.BILLING_RETRY;
    const tmp7 = status === constants4.PAST_DUE || status === constants4.ACCOUNT_HOLD || status === constants4.BILLING_RETRY;
  }
  return isPremiumResult;
};
export const getItemsFromNewAdditionalPlans = function getItemsFromNewAdditionalPlans(renewalMutations, arg1) {
  closure_0 = renewalMutations;
  renewalMutations = renewalMutations.renewalMutations;
  let items;
  if (renewalMutations != null) {
    items = renewalMutations.items;
  }
  if (items == null) {
    items = renewalMutations.items;
  }
  const items1 = [];
  const found = items.find((planId) => set.has(planId.planId));
  if (null != found) {
    items1.push(found);
  }
  const items2 = [...arg1];
  items1.push.apply(items2);
  return items1.map((planId) => {
    for (const item10008 of tmp) {
      if (arg0.planId === item10008.planId) {
        obj2 = {};
        let merged = Object.assign(tmp2);
        let merged1 = Object.assign(arg0);
        obj.return();
        return obj2;
      }
    }
    return planId;
  });
};
export const getItemsWithoutPremiumPlanItem = function getItemsWithoutPremiumPlanItem(arr) {
  return arr.filter((planId) => !set.has(planId.planId));
};
export { getItemsWithUpsertedPlanIdForGroup };
export const getItemsWithUpsertedPremiumPlanId = function getItemsWithUpsertedPremiumPlanId(renewalMutations, basePlanId) {
  return getItemsWithUpsertedPlanIdForGroup(renewalMutations, basePlanId, 1, set2);
};
export const getItemsWithUpsertedPremiumGuildPlan = function getItemsWithUpsertedPremiumGuildPlan(renewalMutations, quantity, planId) {
  return getItemsWithUpsertedPlanIdForGroup(renewalMutations, planId, quantity, set);
};
export const coerceExistingItemsToNewItemInterval = function coerceExistingItemsToNewItemInterval(items) {
  let found = items.find((item) => !("id" in item));
  if (found == null) {
    found = items.find((planId) => set.has(planId.planId));
  }
  let mapped = items;
  if (null != found) {
    value = SubscriptionPlanStore.get(found.planId);
    importDefault = value;
    _modDef38(null != value, "Missing plan");
    mapped = items.map((planId) => {
      if (planId === found) {
        return planId;
      } else {
        value = SubscriptionPlanStore.get(planId.planId);
        _modDef38(null != value, "Missing plan");
        if (value.interval === value.interval) {
          if (tmp11.intervalCount === value.intervalCount) {
            return planId;
          }
        }
        const forSkuAndInterval = SubscriptionPlanStore.getForSkuAndInterval(value.skuId, tmp11.interval, tmp11.intervalCount);
        _modDef38(null != forSkuAndInterval, "Missing planForInterval");
        obj = {};
        const merged = Object.assign(planId);
        obj.planId = forSkuAndInterval.id;
        return obj;
      }
    });
  }
  return mapped;
};
export const getMaxFileSizeForPremiumType = function getMaxFileSizeForPremiumType(TIER_2, arg1) {
  obj = arg1;
  if (arg1 === undefined) {
    obj = { useSpace: true };
  }
  if (TIER_2 === __initData17.TIER_2) {
    let fileSize = NitroFileUploadExperiments.getNitroFileUploadLimitBytes({ location: "getMaxFileSizeForPremiumType" });
  } else {
    fileSize = BottomSheet[TIER_2].fileSize;
  }
  return FileSizeUtils.formatSize(fileSize / 1024, { useKibibytes: true, useSpace: obj.useSpace });
};
export { getGuildBoostPlanItem };
export { isBoostOnlySubscription };
export { getPremiumSkuIdForSubscription };
export { getPremiumTypeFromSubscription };
export { isNewUser };
export { formatPriceString };
export { castPremiumSubscriptionAsSkuId };
export const getPremiumTypeFromPlanId = function getPremiumTypeFromPlanId(arg0) {
  if (SubscriptionPlans.PREMIUM_MONTH_TIER_0 === arg0) {
    obj2 = { premiumType: __initData17.TIER_0, planInterval: constants7.MONTH };
    return obj2;
  } else if (SubscriptionPlans.PREMIUM_YEAR_TIER_0 === arg0) {
    const obj3 = { premiumType: __initData17.TIER_0, planInterval: constants7.YEAR };
    return obj3;
  } else {
    if (SubscriptionPlans.PREMIUM_MONTH_TIER_2 !== arg0) {
      if (SubscriptionPlans.PREMIUM_GROUP_MONTH !== arg0) {
        if (SubscriptionPlans.PREMIUM_YEAR_TIER_2 === arg0) {
          obj = { premiumType: __initData17.TIER_2, planInterval: constants7.YEAR };
          return obj;
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("Unsupported gifting planId: " + arg0);
          throw error;
        }
      }
    }
    const obj4 = { premiumType: __initData17.TIER_2, planInterval: constants7.MONTH };
    return obj4;
  }
};
export const isNitroLockedState = function isNitroLockedState(arg0) {
  return "isNitroLocked" in arg0;
};
export const isPremiumAtLeast = fn(1970).isPremiumAtLeast;
export const isPremiumAtMost = fn(1970).isPremiumAtMost;
export const isPremium = fn(1970).isPremium;
export const isPremiumExactly = fn(1970).isPremiumExactly;
export const useHasTier2Premium = function useHasTier2Premium() {
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  return PremiumTypeUtils.isPremiumExactly(stateFromStores, __initData17.TIER_2);
};
export const getOfferNoticeThreshold = function getOfferNoticeThreshold(trialId) {
  let tmp2 = null != trialId;
  if (tmp2) {
    tmp2 = "trialId" in trialId;
  }
  if (tmp2) {
    trialId = trialId.trialId;
    if (__initData13 === trialId) {
      return closure_1_45;
    } else if (__initData14 === trialId) {
      return closure_1_44;
    } else {
      return closure_1_46;
    }
  } else {
    let tmp3 = null != trialId;
    if (tmp3) {
      tmp3 = "discountId" in trialId;
    }
    return closure_1_46;
  }
};
export const isTrialOffer = function isTrialOffer(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = "trialId" in arg0;
  }
  return tmp;
};
export const isDiscountOffer = function isDiscountOffer(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = "discountId" in arg0;
  }
  return tmp;
};
export { formatInterval };
export { isPremiumEligible };
export { getFractionalPremiumUnitsHours };
export const getFractionalPremiumUnitsHoursFromSkuIds = function getFractionalPremiumUnitsHoursFromSkuIds(flatMapResult) {
  return flatMapResult.reduce((acc, item) => {
    const tmp = _slicedToArray(closure_1_23[item], 2);
    const first = tmp[0];
    let num = 1;
    if (constants.HOUR !== first) {
      num = 1;
      if (constants.DAY === first) {
        num = 24;
      }
    }
    return acc + num * tmp[1];
  }, 0);
};
export { getMonthlyPrice };
export const getSavingsPercent = function getSavingsPercent(subscriptionPlan) {
  subscriptionPlan = subscriptionPlan.subscriptionPlan;
  let tmp3 = __initData[subscriptionPlan.planId];
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