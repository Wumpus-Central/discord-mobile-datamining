// discord_app/utils/PremiumUtils.tsx
import create from "create";
import closure_4 from "t";
import { isNoneSubscription } from "createFromServer";
import mergeGuildAvatar from "mergeGuildAvatar";
import handlePaymentSourceCreateEnd from "handlePaymentSourceCreateEnd";
import handlePaymentSourceUpdate from "handlePaymentSourceUpdate";
import addSubscriptionPlan from "addSubscriptionPlan";
import reset from "reset";
import ME from "ME";
import GuildFeatures from "GuildFeatures";
import { getPremiumGroupProductName as closure_47 } from "SubscriptionStatusTypes";
import sum from "sum";
import set from "createFromServer";
import { t } from "../../_runtime/03883_t.js";
import { 00038__ } from "../../_runtime/metro/00038__.js";
import { initialize } from "../../discord_common/js/packages/flux/index.tsx";
import { getSystemLocale } from "../intl/index.native.tsx";
import { roundFPCountdownUnits } from "../modules/billing/hooks/useFPDurationLeft.tsx";
import { prototype } from "../modules/checkout/CheckoutError.tsx";
import { apexExperiment } from "../modules/croissant/crepe/CrepeExperiment.tsx";
import { messagesProxy } from "../modules/premium/premium_group/PremiumGroup.messages.js";
import { getNonePlanIdForIntervalType } from "../modules/premium/PremiumSubscription.tsx";
import { ProductCatalogFeature } from "../modules/premium/ProductCatalog.tsx";
import { _createGatewayCheckoutContext } from "BillingUtils.tsx";
import { resetCache } from "DateUtils.tsx";
import { set } from "Durations.tsx";
import { formatSize } from "FileSizeUtils.tsx";
import { isPremiumAtLeast } from "PremiumTypeUtils.tsx";
import { formatSingleCurrencyPrice } from "PriceUtils.tsx";

let SubscriptionPlans;
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
let map1;
let unpackModuleId;
const require = arg1;
function getPremiumPlanItem(subscription) {
  const items = subscription.items;
  return items.find((planId) => set.has(planId.planId));
}
function getDefaultPrice(PREMIUM_MONTH_TIER_2, arg1, flag, currency, arg4) {
  flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let flag2 = flag;
  if (flag === undefined) {
    flag2 = false;
  }
  let flag3 = arg4;
  if (arg4 === undefined) {
    flag3 = true;
  }
  let paymentSourceId = store.defaultPaymentSourceId;
  const premiumTypeSubscription = store3.getPremiumTypeSubscription();
  if (tmp3) {
    paymentSourceId = premiumTypeSubscription.paymentSourceId;
  }
  return getPrice(PREMIUM_MONTH_TIER_2, flag, flag2, { paymentSourceId, currency }, flag3);
}
function getPrice(id) {
  let contextPlanPrices;
  let currency;
  let currency2;
  let paymentSourceId;
  let paymentSourceId2;
  let purchaseType;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let flag2 = arg2;
  if (arg2 === undefined) {
    flag2 = false;
  }
  let obj = arg3;
  if (arg3 === undefined) {
    obj = {};
  }
  let flag3 = arg4;
  if (arg4 === undefined) {
    flag3 = true;
  }
  ({ paymentSourceId, currency, contextPlanPrices } = obj);
  if (null != contextPlanPrices) {
    if (null != contextPlanPrices[id]) {
      if (!tmp2) {
        obj = { amount: null, currency: null, exponent: null, tax: 0, taxInclusive: false };
        ({ amount: obj2[0], currency: obj2[1], exponent: obj2[2] } = tmp);
        return obj;
      }
    }
    tmp2 = null != currency && null != contextPlanPrices[id] && contextPlanPrices[id].currency !== currency;
  }
  if (null != store2.get(id)) {
    let str2 = constants3.DEFAULT;
    if (flag2) {
      str2 = tmp9.GIFT;
    } else if (flag) {
      str2 = tmp9.PREMIUM_TIER_1;
    }
    obj = { paymentSourceId: null, purchaseType: null, currency: null };
    obj[0] = paymentSourceId;
    obj[1] = str2;
    obj[2] = currency;
    ({ paymentSourceId: paymentSourceId2, purchaseType, currency: currency2 } = obj);
    const obj1 = { paymentSourceId: null, purchaseType: null };
    obj1[0] = paymentSourceId2;
    obj1[1] = purchaseType;
    const arr = experimentalGetPrices(id, obj1);
    if (0 === arr.length) {
      const _HermesInternal = HermesInternal;
      tmp5.warn("No prices found for planId: " + id + ", paymentSourceId: " + paymentSourceId2 + ", purchaseType: " + purchaseType);
    }
    if (null != currency2) {
      let found = arr.find((currency) => currency.currency === currency.toLowerCase());
      if (null == found) {
        let found1;
        if (null != paymentSourceId2) {
          let obj2 = { purchaseType: null };
          obj2[0] = purchaseType;
          found1 = tmp10(id, obj2).find((currency) => currency.currency === currency.toLowerCase());
          const tmp10Result = tmp10(id, obj2);
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
        const obj3 = { extra: null, tags: null };
        const obj4 = { paymentSourceId: null };
        obj4[0] = paymentSourceId;
        obj3[0] = obj4;
        const obj5 = { purchaseType: null, planId: null, currency: null };
        obj5[0] = str2.toString();
        obj5[1] = id;
        if (currency == null) {
          currency = "unknown";
        }
        obj5[2] = currency;
        obj3[1] = obj5;
        const result = currency2(3962).captureBillingException(error, obj3);
        const obj10 = currency2(3962);
      }
      throw error;
    } else {
      return first;
    }
    tmp10 = experimentalGetPrices;
  } else {
    const _Error2 = Error;
    const error1 = new Error("Plan not found");
    if (flag3) {
      obj2 = currency2(3962);
      const obj6 = { planId: null, currency: null };
      obj6[0] = id;
      let str = currency;
      if (currency == null) {
        str = "unknown";
      }
      const obj7 = { tags: null, extra: null };
      obj6[1] = str;
      obj7[0] = obj6;
      const obj8 = {};
      const merged = Object.assign(obj);
      obj8.isGift = flag2;
      obj7[1] = obj8;
      const result1 = obj2.captureBillingException(error1, obj7);
    }
    throw error1;
  }
}
function getPurchaseTypePrices(id, DEFAULT) {
  const value = store2.get(id);
  if (null == value) {
    const _Error3 = Error;
    const error = new Error("Plan not found");
    let obj = _createGatewayCheckoutContext;
    obj = { tags: null };
    obj = { planId: null, purchaseType: null };
    obj[0] = id;
    obj[1] = DEFAULT.toString();
    obj[0] = obj;
    const result = obj.captureBillingException(error, obj);
    throw error;
  } else if (null == value.prices) {
    const _Error2 = Error;
    const _HermesInternal3 = HermesInternal;
    const error1 = new Error("No prices returned for " + id + ", is your user in the experiment?");
    throw error1;
  } else if (null == value.prices[DEFAULT]) {
    const _JSON = JSON;
    const _Object = Object;
    const _HermesInternal = HermesInternal;
    tmp5.info("Purchase types: " + JSON.stringify(Object.keys(value.prices)));
    const _Error = Error;
    const _HermesInternal2 = HermesInternal;
    const error2 = new Error("No prices returned for purchase type " + DEFAULT + " for plan " + id);
    throw error2;
  } else {
    return tmp22;
  }
}
function experimentalGetPrices(id, arg1) {
  let paymentSourceId;
  let purchaseType;
  let tmp = arg1;
  if (arg1 === undefined) {
    let obj = { purchaseType: null };
    obj[0] = constants3.DEFAULT;
    tmp = obj;
  }
  ({ paymentSourceId, purchaseType } = tmp);
  const tmp3 = getPurchaseTypePrices(id, purchaseType);
  if (null != paymentSourceId) {
    if (null == tmp3.paymentSourcePrices[paymentSourceId]) {
      const _JSON = JSON;
      const _Object = Object;
      const _HermesInternal = HermesInternal;
      globalThis.info("Payment sources IDs: " + JSON.stringify(Object.keys(tmp3.paymentSourcePrices)));
      const _HermesInternal2 = HermesInternal;
      globalThis.info("prices: " + arr);
      const _Error = Error;
      const error = new Error("Missing prices for payment source on subscription plan");
      let obj1 = _createGatewayCheckoutContext;
      obj = { extra: null, tags: null };
      obj = { paymentSourceId: null };
      obj[0] = paymentSourceId;
      obj[0] = obj;
      obj1 = { purchaseType: null, planId: null };
      obj1[0] = purchaseType.toString();
      obj1[1] = id;
      obj[1] = obj1;
      const result = obj1.captureBillingException(error, obj);
    } else if (0 !== arr.length) {
      return arr;
    }
  }
  if (null == tmp3.countryPrices.prices) {
    const _JSON2 = JSON;
    const _HermesInternal3 = HermesInternal;
    tmp5.info("countryPrices: " + JSON.stringify(tmp3.countryPrices));
    const _Error2 = Error;
    const error1 = new Error("Missing prices for country");
    const obj2 = { tags: null };
    const obj3 = { countryCode: null, planId: null };
    obj3[0] = tmp3.countryPrices.countryCode;
    obj3[1] = id;
    obj2[0] = obj3;
    const result1 = _createGatewayCheckoutContext.captureBillingException(error1, obj2);
    throw error1;
  } else {
    return tmp3.countryPrices.prices;
  }
}
function getServerPriceFromClientPrice(amount) {
  return { amount: amount.amount, currency: amount.currency, exponent: amount.exponent };
}
function getItemPlansTotalServerPrice(items, currency, id) {
  let obj = { currency, amount: 0, tax: 0, taxInclusive: false };
  const baseSubscriptionItemForSubscriptionItems = getNonePlanIdForIntervalType.getBaseSubscriptionItemForSubscriptionItems(items);
  let premiumType;
  if (null != baseSubscriptionItemForSubscriptionItems) {
    premiumType = dependencyMap3[baseSubscriptionItemForSubscriptionItems.planId].premiumType;
  }
  let tmpResult = tmp(1926);
  const obj2 = getNonePlanIdForIntervalType;
  tmpResult = tmp(1926);
  const isPremiumAtLeastResult = tmpResult.isPremiumAtLeast(premiumType, closure_39.TIER_0);
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp9 = nextResult;
    let tmp10 = set;
    let tmp11 = isPremiumAtLeastResult1;
    if (!set.has(nextResult.planId)) {
      let tmp12 = set2;
      let tmp13 = nextResult;
      let hasItem = set2.has(tmp9.planId);
      let tmp15 = !hasItem;
      if (!hasItem) {
        tmp15 = isPremiumAtLeastResult;
      }
      tmp11 = tmp15;
    }
    let tmp16 = tmp11;
    if (undefined === id) {
      let tmp22 = getDefaultPrice;
      let tmp23 = nextResult;
      let tmp24 = tmp11;
      let flag2 = false;
      let tmp25 = currency;
      let tmp21 = getDefaultPrice(tmp9.planId, tmp16, false, currency);
    } else {
      let tmp17 = getPrice;
      let tmp18 = nextResult;
      let tmp19 = tmp11;
      obj = { paymentSourceId: null, currency: null };
      obj[0] = id;
      obj[1] = currency;
      let flag = false;
      let tmp20 = obj;
      tmp21 = getPrice(tmp9.planId, tmp16, false, obj);
    }
    let tmp26 = nextResult;
    obj.amount = obj.amount + tmp21.amount * tmp9.quantity;
    continue;
  }
  return getServerPriceFromClientPrice(obj);
}
function getInterval(basePlanId) {
  if (null != dependencyMap3[basePlanId]) {
    let obj = { intervalType: null, intervalCount: null };
    ({ interval: obj4[0], intervalCount: obj4[1] } = tmp);
    return obj;
  } else {
    const _Error = Error;
    const error = new Error("Unsupported plan");
    obj = _createGatewayCheckoutContext;
    obj = { tags: null };
    const obj1 = { planId: null };
    obj1[0] = basePlanId;
    obj[0] = obj1;
    const result = obj.captureBillingException(error, obj);
    throw error;
  }
}
function getIntervalString(interval, arg1) {
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
  if (!arg1) {
    if (!arg2) {
      if (constants7.MONTH === interval) {
        if (1 !== num) {
          const intl3 = getSystemLocale.intl;
          let obj = { intervalCount: null };
          obj[0] = num;
          let formatToPlainStringResult = intl3.formatToPlainString(getSystemLocale.t["0UlZnH"], obj);
        } else {
          const intl2 = getSystemLocale.intl;
          formatToPlainStringResult = intl2.string(getSystemLocale.t.DKzs96);
        }
        return formatToPlainStringResult;
      } else if (tmp3.YEAR === interval) {
        const intl = getSystemLocale.intl;
        return intl.string(getSystemLocale.t["/Q4HRN"]);
      } else {
        const _Error = Error;
        const error = new Error("Unexpected interval");
        throw error;
      }
    }
  }
  if (constants7.MONTH === interval) {
    const intl7 = getSystemLocale.intl;
    if (TIER_2 === closure_39.TIER_0) {
      let poEovT2 = tmp26(1236).t.NPKsLz;
    } else {
      poEovT2 = tmp26(1236).t.poEovT;
    }
    obj = { timeInterval: null };
    const intl8 = tmp26(1236).intl;
    obj[0] = intl8.string(getSystemLocale.t.FPybU7);
    let formatToPlainStringResult1 = intl7.formatToPlainString(poEovT2, obj);
    if (!flag) {
      const intl9 = tmp26(1236).intl;
      formatToPlainStringResult1 = intl9.string(tmp26(1236).t.Mh9bTt);
    }
    return formatToPlainStringResult1;
  } else if (tmp16.YEAR === interval) {
    const intl4 = getSystemLocale.intl;
    if (TIER_2 === closure_39.TIER_0) {
      let poEovT = tmp22(1236).t.NPKsLz;
    } else {
      poEovT = tmp22(1236).t.poEovT;
    }
    obj = { timeInterval: null };
    const intl5 = tmp22(1236).intl;
    obj[0] = intl5.string(getSystemLocale.t.tfqrhj);
    let formatToPlainStringResult2 = intl4.formatToPlainString(poEovT, obj);
    if (!flag) {
      const intl6 = tmp22(1236).intl;
      formatToPlainStringResult2 = intl6.string(tmp22(1236).t.DRgqMo);
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
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.FPybU7);
  } else if (tmp.YEAR === interval) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.tfqrhj);
  } else {
    const _Error = Error;
    const error = new Error("Unexpected interval");
    throw error;
  }
}
function getPremiumType(planIdFromItems) {
  if (null != dependencyMap3[planIdFromItems]) {
    return tmp.premiumType;
  } else {
    const _Error = Error;
    const error = new Error("Unsupported plan");
    let obj = _createGatewayCheckoutContext;
    obj = { tags: null };
    obj = { planId: null };
    obj[0] = planIdFromItems;
    obj[0] = obj;
    const result = obj.captureBillingException(error, obj);
    throw error;
  }
}
function getDisplayName(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let flag2 = arg2;
  if (arg2 === undefined) {
    flag2 = false;
  }
  if (SubscriptionPlans.PREMIUM_MONTH_TIER_0 === arg0) {
    const intl15 = getSystemLocale.intl;
    if (flag) {
      let obj = { duration: null };
      obj[0] = arg3;
      let formatResult = intl15.format(tmp48(1236).t.TZXHNj, obj);
    } else {
      const string8 = intl15.string;
      const t8 = tmp48(1236).t;
      if (flag2) {
        formatResult = string8(t8["81iAgs"]);
      } else {
        formatResult = string8(t8["0efVPy"]);
      }
    }
    return formatResult;
  } else if (tmp.PREMIUM_YEAR_TIER_0 === arg0) {
    const intl14 = getSystemLocale.intl;
    if (flag) {
      obj = { duration: null };
      obj[0] = arg3;
      let formatResult1 = intl14.format(tmp45(1236).t.eqRhC7, obj);
    } else {
      const string7 = intl14.string;
      const t7 = tmp45(1236).t;
      if (flag2) {
        formatResult1 = string7(t7.UvzqY1);
      } else {
        formatResult1 = string7(t7.eoVuBn);
      }
    }
    return formatResult1;
  } else if (tmp.PREMIUM_MONTH_TIER_1 === arg0) {
    const intl13 = getSystemLocale.intl;
    const string6 = intl13.string;
    const t6 = getSystemLocale.t;
    if (flag2) {
      let string6Result = string6(t6["g/dH5g"]);
    } else {
      string6Result = string6(t6["7O6qSq"]);
    }
    return string6Result;
  } else if (tmp.PREMIUM_YEAR_TIER_1 === arg0) {
    const intl12 = getSystemLocale.intl;
    const string5 = intl12.string;
    const t5 = getSystemLocale.t;
    if (flag2) {
      let string5Result = string5(t5.pdZJaq);
    } else {
      string5Result = string5(t5.Md5xbi);
    }
    return string5Result;
  } else if (tmp.PREMIUM_MONTH_TIER_2 === arg0) {
    const intl11 = getSystemLocale.intl;
    if (flag) {
      const obj1 = { duration: null };
      obj1[0] = arg3;
      let formatResult2 = intl11.format(tmp36(1236).t.aI6QXz, obj1);
    } else {
      const string4 = intl11.string;
      const t4 = tmp36(1236).t;
      if (flag2) {
        formatResult2 = string4(t4.SmVbHc);
      } else {
        formatResult2 = string4(t4.FKYNC6);
      }
    }
    return formatResult2;
  } else if (tmp.PREMIUM_GROUP_MONTH === arg0) {
    const intl10 = getSystemLocale.intl;
    if (flag2) {
      let stringResult = intl10.string(getSystemLocale.t.SmVbHc);
    } else {
      const obj2 = { premiumGroupProductName: null };
      obj2[0] = callback();
      stringResult = intl10.formatToPlainString(messagesProxy["8bPDtb"], obj2);
    }
    return stringResult;
  } else if (tmp.PREMIUM_YEAR_TIER_2 === arg0) {
    const intl9 = getSystemLocale.intl;
    if (flag) {
      const obj3 = { duration: null };
      obj3[0] = arg3;
      let formatResult3 = intl9.format(tmp28(1236).t["1wBcPi"], obj3);
    } else {
      const string3 = intl9.string;
      const t3 = tmp28(1236).t;
      if (flag2) {
        formatResult3 = string3(t3.JIq4O1);
      } else {
        formatResult3 = string3(t3["cfu/5d"]);
      }
    }
    return formatResult3;
  } else if (tmp.PREMIUM_3_MONTH_TIER_2 === arg0) {
    const intl8 = getSystemLocale.intl;
    return intl8.string(getSystemLocale.t.wCbINr);
  } else if (tmp.PREMIUM_6_MONTH_TIER_2 === arg0) {
    const intl7 = getSystemLocale.intl;
    return intl7.string(getSystemLocale.t["e3/ArU"]);
  } else if (tmp.PREMIUM_MONTH_GUILD === arg0) {
    const intl6 = getSystemLocale.intl;
    const string2 = intl6.string;
    const t2 = getSystemLocale.t;
    if (flag2) {
      let string2Result = string2(t2["6ZR3By"]);
    } else {
      string2Result = string2(t2["h80cx/"]);
    }
    return string2Result;
  } else if (tmp.PREMIUM_YEAR_GUILD === arg0) {
    const intl5 = getSystemLocale.intl;
    const string = intl5.string;
    const t = getSystemLocale.t;
    if (flag2) {
      let stringResult1 = string(t.YDpAzZ);
    } else {
      stringResult1 = string(t.ZHkls0);
    }
    return stringResult1;
  } else if (tmp.PREMIUM_3_MONTH_GUILD === arg0) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t.EZHHB6);
  } else if (tmp.PREMIUM_6_MONTH_GUILD === arg0) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.X2KDO2);
  } else if (tmp.PREMIUM_MONTH_LEGACY === arg0) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.PD6k79);
  } else if (tmp.PREMIUM_YEAR_LEGACY === arg0) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.LtJgTC);
  } else {
    const _Error = Error;
    const error = new Error("Unsupported plan");
    obj = _createGatewayCheckoutContext;
    const obj4 = { tags: null };
    const obj5 = { planId: null };
    obj5[0] = arg0;
    obj4[0] = obj5;
    const result = obj.captureBillingException(error, obj4);
    throw error;
  }
}
function getTierDisplayNameByPlanId(PREMIUM_MONTH_TIER_0) {
  let premiumType;
  if (dependencyMap3[PREMIUM_MONTH_TIER_0] != null) {
    premiumType = tmp.premiumType;
  }
  let tmp3 = null;
  if (null != premiumType) {
    tmp3 = table2[premiumType];
  }
  if (null != tmp3) {
    const intl = getSystemLocale.intl;
    return intl.string(tmp3);
  } else {
    const _Error = Error;
    const error = new Error("Unsupported plan");
    let obj = _createGatewayCheckoutContext;
    obj = { tags: null };
    obj = { planId: null };
    obj[0] = PREMIUM_MONTH_TIER_0;
    obj[0] = obj;
    const result = obj.captureBillingException(error, obj);
    throw error;
  }
}
function getPlanDescription(arg0) {
  let activeDiscountInfo;
  let fractionalPremiumInfo;
  let hasDiscountApplied;
  let hasFractionalPremiumWithSub;
  let includePremiumGuilds;
  let planId;
  let price;
  let renewalInvoiceWithEntitlementsPreview;
  let renewalInvoiceWithoutEntitlementsPreview;
  let subscription;
  ({ subscription, planId, price, activeDiscountInfo, renewalInvoiceWithoutEntitlementsPreview, renewalInvoiceWithEntitlementsPreview, hasFractionalPremiumWithSub } = arg0);
  let paymentSourceId = store.defaultPaymentSourceId;
  ({ includePremiumGuilds, hasDiscountApplied, fractionalPremiumInfo } = arg0);
  const premiumTypeSubscription = store3.getPremiumTypeSubscription();
  if (tmp3) {
    paymentSourceId = premiumTypeSubscription.paymentSourceId;
  }
  let obj = { paymentSourceId, currency: undefined };
  const tmp4 = getPrice(dependencyMap3[planId].id, false, false, obj, true);
  const interval = tmp.interval;
  const tmp5 = planIdsForSkus;
  let obj1 = planIdsForSkus(5855);
  if (constants7.MONTH === interval) {
    const intl2 = tmp5(1236).intl;
    let stringResult = intl2.string(tmp5(1236).t.FPybU7);
  } else if (tmp8.YEAR === interval) {
    const intl = tmp5(1236).intl;
    stringResult = intl.string(tmp5(1236).t.tfqrhj);
  } else {
    const _Error = Error;
    const error = new Error("Unexpected interval");
    throw error;
  }
  let combined = "" + obj1.formatPrice(tmp4.amount, tmp4.currency) + "/" + stringResult;
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
      const currentUser = authStore.getCurrentUser();
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
  let tmp25 = subscription.status === tmp17.UNPAID && null !== subscription.latestInvoice;
  if (tmp25) {
    const latestInvoice = subscription.latestInvoice;
    let status;
    if (latestInvoice != null) {
      status = latestInvoice.status;
    }
    tmp25 = status === constants.OPEN;
  }
  if (tmp18) {
    let CANCELED = tmp17.CANCELED;
  } else {
    CANCELED = tmp25 ? tmp17.UNPAID : subscription.status;
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
    planIdsForSkus = undefined;
    const items = [closure_38.GUILD];
    planIdsForSkus = store2.getPlanIdsForSkus(items);
    00038__(null != planIdsForSkus, "Missing guildSubscriptionPlanIds");
    const found = additionalPlans.find((planId) => planIdsForSkus.includes(planId.planId));
    let num3 = 0;
    if (null != found) {
      num3 = found.quantity;
    }
    num2 = num3;
  }
  const sum = closure_28 + num2;
  const intl3 = tmp5(1236).intl;
  if (null != price && null == subscription.paymentGateway) {
    const format = intl3.format;
    let t = tmp5(1236).t;
    if (flag) {
      t = { price: null };
      t[0] = price;
      let formatResult = format(t["cd+hqB"], t);
    } else {
      obj = { price: null };
      obj[0] = price;
      formatResult = format(t.NUkcpF, obj);
    }
  } else {
    let stringResult1 = intl3.string(tmp5(1236).t.zYx3Y6);
    const intl4 = tmp5(1236).intl;
    if (tmp24) {
      const format2 = intl4.format;
      let t1 = tmp5(1236).t;
      if (flag) {
        t1 = { price: null };
        t1[0] = price;
        let format2Result = format2(t1.VsKcFB, t1);
      } else {
        obj = { price: null };
        obj[0] = price;
        format2Result = format2(t1.hJ5xEX, obj);
      }
    } else {
      let stringResult2 = intl4.string(tmp5(1236).t["8rSipI"]);
      const intl5 = tmp5(1236).intl;
      const format3 = intl5.format;
      let t2 = tmp5(1236).t;
      if (tmp24) {
        if (flag) {
          t2 = { price: null, num: null };
          t2[0] = price;
          t2[1] = sum;
          let format3Result = format3(t2["jRy6/J"], t2);
        } else {
          obj1 = { price: null, num: null };
          obj1[0] = price;
          obj1[1] = sum;
          format3Result = format3(t2.tTNE8M, obj1);
        }
      } else {
        const obj2 = { num: null };
        obj2[0] = sum;
        let format3Result1 = format3(t2["U+z/HJ"], obj2);
        if (SubscriptionPlans.PREMIUM_MONTH_TIER_0 !== planId) {
          if (tmp46.PREMIUM_YEAR_TIER_0 !== planId) {
            if (tmp46.PREMIUM_MONTH_TIER_1 !== planId) {
              if (tmp46.PREMIUM_YEAR_TIER_1 !== planId) {
                if (tmp46.PREMIUM_MONTH_TIER_2 !== planId) {
                  if (tmp46.PREMIUM_YEAR_TIER_2 !== planId) {
                    if (tmp46.PREMIUM_3_MONTH_TIER_2 !== planId) {
                      if (tmp46.PREMIUM_6_MONTH_TIER_2 !== planId) {
                        if (tmp46.PREMIUM_GROUP_MONTH !== planId) {
                          const _Error2 = Error;
                          const _HermesInternal = HermesInternal;
                          const error1 = new Error("Invalid planId " + planId);
                          throw error1;
                        }
                      }
                    }
                  }
                }
                if (tmp17.CANCELED === CANCELED) {
                  const intl14 = tmp5(1236).intl;
                  const format5 = intl14.format;
                  let t3 = tmp5(1236).t;
                  if (tmp24) {
                    if (flag) {
                      t3 = { price: null, num: null };
                      t3[0] = price;
                      t3[1] = sum;
                      let format5Result = format5(t3.xoFgRh, t3);
                    } else {
                      const obj3 = { price: null, num: null };
                      obj3[0] = price;
                      obj3[1] = sum;
                      format5Result = format5(t3.nXdbKo, obj3);
                    }
                  } else {
                    const obj4 = { num: null };
                    obj4[0] = sum;
                    return format5(t3.EcSdRH, obj4);
                  }
                } else if (tmp17.ACCOUNT_HOLD === CANCELED) {
                  const intl13 = tmp5(1236).intl;
                  const format4 = intl13.format;
                  let t4 = tmp5(1236).t;
                  if (tmp24) {
                    if (flag) {
                      t4 = { price: null, num: null };
                      t4[0] = price;
                      t4[1] = sum;
                      let format4Result = format4(t4["5C/0QG"], t4);
                    } else {
                      const obj5 = { price: null, num: null };
                      obj5[0] = price;
                      obj5[1] = sum;
                      format4Result = format4(t4.xfYkhu, obj5);
                    }
                  } else {
                    const obj6 = { num: null };
                    obj6[0] = sum;
                    return format4(t4.ivjxcn, obj6);
                  }
                } else if (tmp17.UNPAID === CANCELED) {
                  const intl12 = tmp5(1236).intl;
                  const obj7 = { num: null };
                  obj7[0] = sum;
                  return intl12.format(tmp5(1236).t["0HopYf"], obj7);
                } else if (tmp17.PAUSE_PENDING === CANCELED) {
                  let diffResult = null;
                  if (null != subscription.pauseEndsAt) {
                    let obj18 = t(subscription.pauseEndsAt);
                    diffResult = obj18.diff(subscription.currentPeriodEnd, "days");
                  }
                  if (null != diffResult) {
                    const intl11 = tmp5(1236).intl;
                    const obj8 = { pauseDate: null, pauseDuration: null };
                    obj8[0] = subscription.currentPeriodEnd;
                    obj8[1] = diffResult;
                    let formatResult1 = intl11.format(tmp5(1236).t.WUfOD5, obj8);
                  } else {
                    const intl10 = tmp5(1236).intl;
                    const obj9 = { pauseDate: null };
                    obj9[0] = subscription.currentPeriodEnd;
                    formatResult1 = intl10.format(tmp5(1236).t.VlWufv, obj9);
                  }
                  return formatResult1;
                } else if (tmp17.PAUSED === CANCELED) {
                  if (!hasFractionalPremiumWithSub) {
                    const intl9 = tmp5(1236).intl;
                    const obj10 = { resumeDate: null };
                    obj10[0] = subscription.pauseEndsAt;
                    format3Result1 = intl9.format(tmp5(1236).t["6RTdZA"], obj10);
                  }
                  return format3Result1;
                } else if (tmp17.BILLING_RETRY === CANCELED) {
                  const intl8 = tmp5(1236).intl;
                  const obj11 = { endDate: null };
                  let obj15 = t(subscription.currentPeriodStart);
                  obj11[0] = obj15.add(closure_29, "days").toDate();
                  return intl8.format(tmp5(1236).t["IlJ/HV"], obj11);
                } else if (tmp17.PAST_DUE === CANCELED) {
                  const intl7 = tmp5(1236).intl;
                  const obj12 = { endDate: null, onClick: null };
                  let tmp5Result = tmp5(3971);
                  obj12[0] = tmp5Result.dateFormat(getBillingGracePeriodDaysAndExpiresDate(subscription).expiresDate, "LL");
                  obj12[1] = function onClick() {
                    callback(3992)("https://support.discord.com/hc/articles/23082866222871");
                  };
                  return intl7.format(tmp5(1236).t["d+0vwo"], obj12);
                } else if (!hasDiscountApplied) {
                  return format3Result1;
                } else if (planId === tmp46.PREMIUM_YEAR_TIER_2) {
                  const intl6 = tmp5(1236).intl;
                  let percentage;
                  if (activeDiscountInfo != null) {
                    percentage = activeDiscountInfo.percentage;
                  }
                  if (percentage == null) {
                    percentage = closure_16;
                  }
                  activeDiscountInfo = { percent: null, regularPrice: null, renewalDate: null };
                  activeDiscountInfo[0] = percentage;
                  activeDiscountInfo[1] = combined;
                  combined = getExpectedRenewalDate(subscription, fractionalPremiumInfo);
                  activeDiscountInfo[2] = combined;
                  let formatResult2 = intl6.format(tmp5(1236).t.z2oQtA, activeDiscountInfo);
                } else {
                  const intl29 = tmp5(1236).intl;
                  const formatToPlainString = intl29.formatToPlainString;
                  t = tmp5(1236).t;
                  if (flag) {
                    let percentage1;
                    if (activeDiscountInfo != null) {
                      percentage1 = activeDiscountInfo.percentage;
                    }
                    if (percentage1 == null) {
                      percentage1 = closure_21;
                    }
                    const obj13 = { percent: null, regularPrice: null, numMonths: null };
                    obj13[0] = percentage1;
                    obj13[1] = combined;
                    let duration;
                    if (activeDiscountInfo != null) {
                      duration = activeDiscountInfo.duration;
                    }
                    if (duration == null) {
                      duration = closure_20;
                    }
                    obj13[2] = duration;
                    formatResult2 = formatToPlainString(t["3ZiutU"], obj13);
                  } else {
                    let percentage2;
                    if (activeDiscountInfo != null) {
                      percentage2 = activeDiscountInfo.percentage;
                    }
                    if (percentage2 == null) {
                      percentage2 = closure_21;
                    }
                    const obj14 = { percent: null, regularPrice: null, numMonths: null };
                    obj14[0] = percentage2;
                    obj14[1] = combined;
                    let duration1;
                    if (activeDiscountInfo != null) {
                      duration1 = activeDiscountInfo.duration;
                    }
                    if (duration1 == null) {
                      duration1 = closure_20;
                    }
                    obj14[2] = duration1;
                    formatResult2 = formatToPlainString(t["G6+XOT"], obj14);
                  }
                }
              }
            }
            if (tmp17.CANCELED === CANCELED) {
              const intl21 = tmp5(1236).intl;
              if (tmp24) {
                const format7 = intl21.format;
                let t5 = tmp5(1236).t;
                if (flag) {
                  t5 = { price: null };
                  t5[0] = price;
                  let format7Result = format7(t5.cXy8Bp, t5);
                } else {
                  obj15 = { price: null };
                  obj15[0] = price;
                  format7Result = format7(t5["C/XsHt"], obj15);
                }
              } else {
                return intl21.string(tmp5(1236).t.K6tYFa);
              }
            } else if (tmp17.ACCOUNT_HOLD === CANCELED) {
              const intl20 = tmp5(1236).intl;
              const format6 = intl20.format;
              let t6 = tmp5(1236).t;
              if (tmp24) {
                if (flag) {
                  t6 = { price: null };
                  t6[0] = price;
                  let format6Result = format6(t6.HBkIBi, t6);
                } else {
                  const obj16 = { price: null };
                  obj16[0] = price;
                  format6Result = format6(t6.ZsO1Sx, obj16);
                }
              } else {
                return format6(t6["0+/WH7"], {});
              }
            } else if (tmp17.UNPAID === CANCELED) {
              const intl19 = tmp5(1236).intl;
              return intl19.format(tmp5(1236).t.McIzwj, {});
            } else if (tmp17.PAUSE_PENDING === CANCELED) {
              let diffResult1 = null;
              if (null != subscription.pauseEndsAt) {
                diffResult1 = t(subscription.pauseEndsAt).diff(subscription.currentPeriodEnd, "days");
                const obj32 = t(subscription.pauseEndsAt);
              }
              if (null != diffResult1) {
                const intl18 = tmp5(1236).intl;
                const obj17 = { pauseDate: null, pauseDuration: null };
                obj17[0] = subscription.currentPeriodEnd;
                obj17[1] = diffResult1;
                let formatResult3 = intl18.format(tmp5(1236).t.WUfOD5, obj17);
              } else {
                const intl17 = tmp5(1236).intl;
                obj18 = { pauseDate: null };
                obj18[0] = subscription.currentPeriodEnd;
                formatResult3 = intl17.format(tmp5(1236).t.VlWufv, obj18);
              }
              return formatResult3;
            } else if (tmp17.PAUSED === CANCELED) {
              if (!hasFractionalPremiumWithSub) {
                const intl16 = tmp5(1236).intl;
                const obj19 = { resumeDate: null };
                obj19[0] = subscription.pauseEndsAt;
                stringResult2 = intl16.format(tmp5(1236).t["6RTdZA"], obj19);
              }
              return stringResult2;
            } else if (tmp17.PAST_DUE === CANCELED) {
              const intl15 = tmp5(1236).intl;
              const obj20 = { endDate: null, onClick: null };
              tmp5Result = tmp5(3971);
              obj20[0] = tmp5Result.dateFormat(getBillingGracePeriodDaysAndExpiresDate(subscription).expiresDate, "LL");
              obj20[1] = function onClick() {
                callback(3992)("https://support.discord.com/hc/articles/23082866222871");
              };
              return intl15.format(tmp5(1236).t["d+0vwo"], obj20);
            } else {
              return stringResult2;
            }
          }
        }
        if (tmp17.CANCELED === CANCELED) {
          const intl28 = tmp5(1236).intl;
          if (tmp24) {
            const format9 = intl28.format;
            let t7 = tmp5(1236).t;
            if (flag) {
              t7 = { price: null };
              t7[0] = price;
              let format9Result = format9(t7["USi/nc"], t7);
            } else {
              const obj21 = { price: null };
              obj21[0] = price;
              format9Result = format9(t7["FS//l2"], obj21);
            }
          } else {
            return intl28.string(tmp5(1236).t.JshLzq);
          }
        } else if (tmp17.ACCOUNT_HOLD === CANCELED) {
          const intl27 = tmp5(1236).intl;
          const format8 = intl27.format;
          let t8 = tmp5(1236).t;
          if (tmp24) {
            if (flag) {
              t8 = { price: null };
              t8[0] = price;
              let format8Result = format8(t8["5mv+2i"], t8);
            } else {
              const obj22 = { price: null };
              obj22[0] = price;
              format8Result = format8(t8.nkAEfZ, obj22);
            }
          } else {
            return format8(t8.SsLIXS, {});
          }
        } else if (tmp17.UNPAID === CANCELED) {
          const intl26 = tmp5(1236).intl;
          return intl26.format(tmp5(1236).t.cmkbFB, {});
        } else if (tmp17.PAUSE_PENDING === CANCELED) {
          let diffResult2 = null;
          if (null != subscription.pauseEndsAt) {
            diffResult2 = t(subscription.pauseEndsAt).diff(subscription.currentPeriodEnd, "days");
            const obj42 = t(subscription.pauseEndsAt);
          }
          if (null != diffResult2) {
            const intl25 = tmp5(1236).intl;
            const obj23 = { pauseDate: null, pauseDuration: null };
            obj23[0] = subscription.currentPeriodEnd;
            obj23[1] = diffResult2;
            let formatResult4 = intl25.format(tmp5(1236).t.WUfOD5, obj23);
          } else {
            const intl24 = tmp5(1236).intl;
            const obj24 = { pauseDate: null };
            obj24[0] = subscription.currentPeriodEnd;
            formatResult4 = intl24.format(tmp5(1236).t.VlWufv, obj24);
          }
          return formatResult4;
        } else if (tmp17.PAUSED === CANCELED) {
          if (!hasFractionalPremiumWithSub) {
            const intl23 = tmp5(1236).intl;
            const obj25 = { resumeDate: null };
            obj25[0] = subscription.pauseEndsAt;
            stringResult1 = intl23.format(tmp5(1236).t["6RTdZA"], obj25);
          }
          return stringResult1;
        } else if (tmp17.PAST_DUE === CANCELED) {
          const intl22 = tmp5(1236).intl;
          const obj26 = { endDate: null, onClick: null };
          obj26[0] = tmp5(3971).dateFormat(getBillingGracePeriodDaysAndExpiresDate(subscription).expiresDate, "LL");
          obj26[1] = function onClick() {
            callback(3992)("https://support.discord.com/hc/articles/23082866222871");
          };
          return intl22.format(tmp5(1236).t["d+0vwo"], obj26);
        } else {
          return stringResult1;
        }
      }
    }
  }
}
function getPremiumPlanOptions(isPremium) {
  let defaultPlanId;
  let skuId;
  ({ skuId, defaultPlanId } = isPremium);
  if (null != skuId) {
    if (isPremium.isPremium) {
      let tmp;
      if (undefined !== defaultPlanId) {
        if (skuId === dependencyMap3[defaultPlanId].skuId) {
          tmp = defaultPlanId;
        }
      }
      if (closure_38.TIER_0 === skuId) {
        const items = [, ];
        ({ PREMIUM_YEAR_TIER_0: arr3[0], PREMIUM_MONTH_TIER_0: arr3[1] } = SubscriptionPlans);
        let items2 = items;
      } else if (tmp3.TIER_1 === skuId) {
        const items1 = [SubscriptionPlans.PREMIUM_MONTH_TIER_1];
        items2 = items1;
      } else if (tmp3.TIER_2 === skuId) {
        items2 = [, ];
        ({ PREMIUM_YEAR_TIER_2: arr[0], PREMIUM_MONTH_TIER_2: arr[1] } = SubscriptionPlans);
      } else if (tmp3.GUILD === skuId) {
        return [];
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("Unexpected SKU: " + skuId);
        throw error;
      }
      if (undefined !== tmp) {
        items2.splice(items2.indexOf(tmp), 1);
        const arr = items2.unshift(tmp);
      }
      return items2;
    }
  }
  return [];
}
function getNumPremiumGuildSubscriptions(additionalPlans) {
  const items = [closure_38.GUILD];
  const planIdsForSkus = store2.getPlanIdsForSkus(items);
  00038__(null != planIdsForSkus, "Missing guildSubscriptionPlanIds");
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
      const obj11 = t(subscription.metadata.apple_grace_period_expires_date);
      let obj = { days: null, expiresDate: null };
      const obj13 = t;
      obj[0] = t.duration(obj11.diff(subscription.currentPeriodStart)).days();
      obj[1] = obj11;
      return obj;
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
        const obj7 = t(subscription.metadata.google_grace_period_expires_date);
        obj = { days: null, expiresDate: null };
        const tmp20 = t(subscription.metadata.google_original_expires_date);
        const obj9 = t;
        obj[0] = t.duration(obj7.diff(tmp20)).days();
        obj[1] = obj7;
        return obj;
      }
    }
  }
  if (subscription.isPurchasedExternally) {
    const tmp15 = subscription.isPurchasedViaApple ? closure_17 : closure_18;
    let obj1 = { days: null, expiresDate: null };
    obj1[0] = tmp15;
    obj1[1] = t(subscription.currentPeriodStart).add(tmp15, "days");
    return obj1;
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
      const obj2 = { days: null, expiresDate: null };
      const tmp11 = importDefault;
      const tmp13 = t;
      obj2[0] = t(prop4).diff(subscription.currentPeriodStart, "days");
      obj2[1] = tmp11(3883)(subscription.metadata.grace_period_expires_date);
      return obj2;
    } else {
      const tmp8 = null == subscription.paymentSourceId ? closure_19 : closure_30;
      obj = { days: null, expiresDate: null };
      obj[0] = tmp8;
      obj1 = t(subscription.currentPeriodStart);
      obj[1] = obj1.add(tmp8, "days");
      return obj;
    }
  }
}
function getExpectedRenewalDate(premiumSubscription, fractionalPremiumInfo) {
  const date = new Date(premiumSubscription.currentPeriodEnd);
  let toDateResult = date;
  if (!tmp2) {
    const unactivatedUnits = fractionalPremiumInfo.unactivatedUnits;
    const obj = t(date);
    let addResult = obj;
    if (unactivatedUnits.length > 0) {
      const mapped = unactivatedUnits.map((skuId) => skuId.skuId);
      addResult = obj.add(mapped.reduce((arg0, arg1) => {
        const tmp = callback(table[arg1], 2);
        const first = tmp[0];
        let num = 1;
        if (constants.HOUR !== first) {
          num = 1;
          if (constants.DAY === first) {
            num = 24;
          }
        }
        return arg0 + num * tmp[1];
      }, 0), "hours");
    }
    toDateResult = addResult.toDate();
  }
  return toDateResult;
}
function getBillingInformationString(status, subscriptionPeriodStart, first1, flag, fractionalPremiumInfo) {
  let tmp = first1;
  if (first1 === undefined) {
    tmp = null;
  }
  if (flag === undefined) {
    flag = false;
  }
  let tmp2 = fractionalPremiumInfo;
  if (fractionalPremiumInfo === undefined) {
    let obj = { isFractionalPremiumActive: false, fetched: true, fractionalState: null, startsAt: null, endsAt: null, currentEntitlementId: "", currentEntitlementEndsAt: null, unactivatedUnits: null };
    obj[2] = constants6.NONE;
    obj[3] = t(0);
    obj[4] = t(0);
    obj[6] = t(0);
    obj[7] = [];
    tmp2 = obj;
  }
  let tmp6 = subscriptionPeriodStart;
  if (null !== tmp) {
    tmp6 = subscriptionPeriodStart;
    if (status.status === constants4.PAST_DUE) {
      tmp6 = tmp;
    }
  }
  const formatPrice = formatSingleCurrencyPrice.formatPrice;
  if (flag) {
    const invoiceItems = tmp6.invoiceItems;
    const found = invoiceItems.filter((subscriptionPlanId) => set.has(subscriptionPlanId.subscriptionPlanId));
    const mapped = found.map((amount) => amount.amount);
    let formatPriceResult = formatPrice(mapped.reduce((arg0, arg1) => arg1 + arg0, 0), tmp6.currency);
    let tmp14 = tmp8;
  } else {
    formatPriceResult = formatPrice(tmp6.total, tmp6.currency);
    tmp14 = tmp8;
  }
  const currentUser = authStore.getCurrentUser();
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
    const intl16 = tmp14(1236).intl;
    obj = { trialEnd: null };
    obj[0] = currentPeriodEnd;
    return intl16.format(tmp14(1236).t["7ZS2m1"], obj);
  } else if (status.status === constants4.CANCELED) {
    const intl15 = tmp14(1236).intl;
    obj = { endDate: null };
    obj[0] = subscriptionPeriodStart.subscriptionPeriodStart;
    return intl15.format(tmp14(1236).t["Whp/qk"], obj);
  } else if (status.status === tmp16.PAUSE_PENDING) {
    const intl14 = tmp14(1236).intl;
    ({ currentPeriodEnd: obj26[0], pauseEndsAt: obj26[1] } = status);
    return intl14.format(tmp14(1236).t.uBLUGU, { pauseDate: null, resumeDate: null });
  } else if (status.status === tmp16.PAUSED) {
    if (tmp2.fractionalState !== constants6.NONE) {
      const intl13 = tmp14(1236).intl;
      let obj2 = { renewalDate: null, price: null };
      const endsAt = tmp2.endsAt;
      obj2[0] = endsAt.toDate();
      obj2[1] = formatPriceResult;
      let formatResult = intl13.format(tmp14(1236).t.Q18lRK, obj2);
    } else if (null == status.pauseEndsAt) {
      const intl11 = tmp14(1236).intl;
      if (flag) {
        const obj3 = { planName: null, price: null };
        const intl12 = tmp14(1236).intl;
        obj3[0] = intl12.string(tmp14(1236).t.Ipxkog);
        obj3[1] = formatPriceResult;
        let formatResult1 = intl11.format(tmp14(1236).t.KTYQCg, obj3);
      } else {
        formatResult1 = intl11.string(tmp14(1236).t.fMz6Lg);
      }
    } else {
      const intl17 = tmp14(1236).intl;
      const format3 = intl17.format;
      const t3 = tmp14(1236).t;
      if (flag) {
        const obj4 = { planName: null, resumeDate: null, price: null };
        const intl10 = tmp14(1236).intl;
        obj4[0] = intl10.string(tmp14(1236).t.Ipxkog);
        obj4[1] = status.pauseEndsAt;
        obj4[2] = formatPriceResult;
        formatResult = format3(t3.zcgtzf, obj4);
      } else {
        const obj5 = { resumeDate: null };
        obj5[0] = status.pauseEndsAt;
        formatResult = format3(t3["V8+l6k"], obj5);
      }
    }
    return formatResult;
  } else if (status.status === tmp16.PAST_DUE) {
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
      expiresDate = t(status.metadata.google_grace_period_expires_date);
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
      expiresDate = t(status.metadata.apple_grace_period_expires_date);
    }
    const intl9 = tmp14(1236).intl;
    const format2 = intl9.format;
    const t2 = tmp14(1236).t;
    if (status.isPurchasedExternally) {
      const obj6 = { endDate: null, paymentGatewayName: null, paymentSourceLink: null };
      obj6[0] = expiresDate.toDate();
      obj6[1] = dependencyMap4[status.paymentGateway];
      const paymentGateway3 = status.paymentGateway;
      if (constants2.APPLE_PARTNER !== paymentGateway3) {
        if (tmp64.APPLE_ADVANCED_COMMERCE !== paymentGateway3) {
          if (tmp64.APPLE !== paymentGateway3) {
            if (tmp64.GOOGLE === paymentGateway3) {
              let PAYMENT_SOURCE_MANAGEMENT2 = constants10.PAYMENT_SOURCE_MANAGEMENT;
            } else {
              const _Error3 = Error;
              const _HermesInternal3 = HermesInternal;
              const error = new Error("Invalid external payment gateway " + paymentGateway3);
              throw error;
            }
          }
          obj6[2] = PAYMENT_SOURCE_MANAGEMENT2;
          format2(t2.U2hb3W, obj6);
        }
      }
      PAYMENT_SOURCE_MANAGEMENT2 = constants9.PAYMENT_SOURCE_MANAGEMENT;
    } else {
      const obj7 = { endDate: null, price: null };
      obj7[0] = expiresDate.toDate();
      obj7[1] = formatPriceResult;
      return format2(t2.qEIzyi, obj7);
    }
  } else if (status.status === tmp16.BILLING_RETRY) {
    const intl8 = tmp14(1236).intl;
    const obj8 = { endDate: null, price: null };
    const obj18 = t(status.currentPeriodStart);
    obj8[0] = t(status.currentPeriodStart).add(closure_29, "days").toDate();
    obj8[1] = formatPriceResult;
    return intl8.format(tmp14(1236).t.EMTLOT, obj8);
  } else if (status.status === tmp16.ACCOUNT_HOLD) {
    if (status.isPurchasedViaGoogle) {
      if (!tmp14Result.isGooglePlayBillingSupported()) {
        const intl6 = tmp14(1236).intl;
        const obj9 = { endDate: null, paymentGatewayName: null, paymentSourceLink: null };
        let obj11 = t(status.currentPeriodStart);
        obj9[0] = obj11.add(closure_26, "days").toDate();
        obj9[1] = dependencyMap4[status.paymentGateway];
        const paymentGateway2 = status.paymentGateway;
        if (constants2.APPLE_PARTNER !== paymentGateway2) {
          if (tmp45.APPLE_ADVANCED_COMMERCE !== paymentGateway2) {
            if (tmp45.APPLE !== paymentGateway2) {
              if (tmp45.GOOGLE === paymentGateway2) {
                let PAYMENT_SOURCE_MANAGEMENT = constants10.PAYMENT_SOURCE_MANAGEMENT;
              } else {
                const _Error2 = Error;
                const _HermesInternal2 = HermesInternal;
                const error1 = new Error("Invalid external payment gateway " + paymentGateway2);
                throw error1;
              }
            }
            obj9[2] = PAYMENT_SOURCE_MANAGEMENT;
            let formatResult2 = intl6.format(tmp14(1236).t["dtcxw+"], obj9);
          }
        }
        PAYMENT_SOURCE_MANAGEMENT = constants9.PAYMENT_SOURCE_MANAGEMENT;
        const addResult1 = obj11.add(closure_26, "days");
      }
      return formatResult2;
    }
    const intl7 = tmp14(1236).intl;
    const obj10 = { endDate: null, price: null };
    let obj14 = t(status.currentPeriodStart);
    obj10[0] = obj14.add(closure_26, "days").toDate();
    obj10[1] = formatPriceResult;
    formatResult2 = intl7.format(tmp14(1236).t.EMTLOT, obj10);
    const addResult2 = obj14.add(closure_26, "days");
  } else {
    let tmp21 = null != status.paymentSourceId;
    if (tmp21) {
      const paymentSourceId = status.paymentSourceId;
      let flag2 = false;
      if (null != paymentSourceId) {
        const paymentSource = store.getPaymentSource(paymentSourceId);
        let hasItem = null != paymentSource;
        if (hasItem) {
          hasItem = set3.has(paymentSource.type);
        }
        flag2 = hasItem;
      }
      tmp21 = flag2;
    }
    if (tmp21) {
      const intl5 = tmp14(1236).intl;
      obj11 = { prepaidEndDate: null };
      obj11[0] = status.currentPeriodEnd;
      return intl5.format(tmp14(1236).t.awpB0C, obj11);
    } else if (status.status === tmp16.UNPAID) {
      const intl4 = tmp14(1236).intl;
      const obj12 = { maxProcessingTimeInDays: null };
      obj12[0] = closure_27;
      return intl4.format(tmp14(1236).t.CzTKom, obj12);
    } else if (status.isPurchasedExternally) {
      const intl3 = tmp14(1236).intl;
      const obj13 = { renewalDate: null, paymentGatewayName: null, subscriptionManagementLink: null };
      obj13[0] = subscriptionPeriodStart.subscriptionPeriodStart;
      obj13[1] = dependencyMap4[status.paymentGateway];
      const paymentGateway = status.paymentGateway;
      if (constants2.APPLE_PARTNER !== paymentGateway) {
        if (tmp33.APPLE_ADVANCED_COMMERCE !== paymentGateway) {
          if (tmp33.APPLE !== paymentGateway) {
            if (tmp33.GOOGLE === paymentGateway) {
              let SUBSCRIPTION_MANAGEMENT = constants10.SUBSCRIPTION_MANAGEMENT;
            } else {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const error2 = new Error("Invalid external payment gateway " + paymentGateway);
              throw error2;
            }
          }
          obj13[2] = SUBSCRIPTION_MANAGEMENT;
          return intl3.format(tmp31, obj13);
        }
      }
      SUBSCRIPTION_MANAGEMENT = constants9.SUBSCRIPTION_MANAGEMENT;
    } else {
      const _Date = Date;
      const date = new Date(subscriptionPeriodStart.subscriptionPeriodStart);
      let toDateResult = date;
      if (!tmp26) {
        const unactivatedUnits = tmp2.unactivatedUnits;
        obj2 = t(date);
        let addResult3 = obj2;
        if (unactivatedUnits.length > 0) {
          const mapped1 = unactivatedUnits.map((skuId) => skuId.skuId);
          addResult3 = obj2.add(mapped1.reduce((arg0, arg1) => {
            const tmp = callback(table[arg1], 2);
            const first = tmp[0];
            let num = 1;
            if (constants.HOUR !== first) {
              num = 1;
              if (constants.DAY === first) {
                num = 24;
              }
            }
            return arg0 + num * tmp[1];
          }, 0), "hours");
        }
        toDateResult = addResult3.toDate();
      }
      const intl = tmp14(1236).intl;
      const format = intl.format;
      const t = tmp14(1236).t;
      if (flag) {
        obj14 = { planName: null, renewalDate: null, price: null };
        const intl2 = tmp14(1236).intl;
        obj14[0] = intl2.string(tmp14(1236).t.Ipxkog);
        obj14[1] = toDateResult;
        obj14[2] = formatPriceResult;
        let formatResult3 = format(t.Vl3cED, obj14);
      } else {
        const obj15 = { renewalDate: null, price: null };
        obj15[0] = toDateResult;
        obj15[1] = formatPriceResult;
        formatResult3 = format(t.Q18lRK, obj15);
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
  const tmp3Result = t(tmp4);
  let addResult = tmp3Result;
  if (unactivatedFractionalPremiumUnits.length > 0) {
    const mapped = unactivatedFractionalPremiumUnits.map((skuId) => skuId.skuId);
    addResult = tmp3Result.add(mapped.reduce((arg0, arg1) => {
      const tmp = callback(table[arg1], 2);
      const first = tmp[0];
      let num = 1;
      if (constants.HOUR !== first) {
        num = 1;
        if (constants.DAY === first) {
          num = 24;
        }
      }
      return arg0 + num * tmp[1];
    }, 0), "hours");
  }
  let addResult1 = addResult;
  if (!excludeReverseTrialFromCountdown) {
    addResult1 = addResult;
    if (undefined !== diff) {
      const diffResult = diff.diff(t(), "hours", true);
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
  const reduced = mapped.reduce((arg0, arg1) => {
    const tmp = callback(table[arg1], 2);
    const first = tmp[0];
    let num = 1;
    if (constants.HOUR !== first) {
      num = 1;
      if (constants.DAY === first) {
        num = 24;
      }
    }
    return arg0 + num * tmp[1];
  }, 0);
  if (reduced > 0) {
    if (unactivatedUnits.fractionalState === constants6.NONE) {
      const obj = { days: null, hours: null, minutes: null };
      obj[0] = getSystemLocale.t.fYmirx;
      obj[1] = getSystemLocale.t["C3RO+g"];
      obj[2] = getSystemLocale.t.r77oHc;
      const obj2 = roundFPCountdownUnits;
      const result = obj2.roundFPCountdownUnits(resetCache.diffAsUnits(0, reduced * set.Millis.HOUR));
      const obj3 = resetCache;
      return resetCache.unitsAsStrings(result, obj);
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
      const intl3 = getSystemLocale.intl;
      stringResult = intl3.string(getSystemLocale.t.a9Mdb3);
    }
    return stringResult;
  } else if (renewalMutations.renewalMutations.planId !== renewalMutations.planId) {
    const intl2 = getSystemLocale.intl;
    let stringResult1 = intl2.string(getSystemLocale.t["0rzJ4J"]);
  } else {
    const intl = getSystemLocale.intl;
    stringResult1 = intl.string(getSystemLocale.t["9dLQ0/"]);
  }
}
function getCoercedPremiumGuildSubscriptionStatus(subscription) {
  let additionalPlans;
  let renewalMutations;
  let status;
  ({ renewalMutations, additionalPlans, status } = subscription);
  let planIdsForSkus1;
  const items = [closure_38.GUILD];
  const planIdsForSkus = store2.getPlanIdsForSkus(items);
  planIdsForSkus1 = planIdsForSkus;
  00038__(null != planIdsForSkus, "Missing guildSubscriptionPlanIds");
  const found = additionalPlans.find((planId) => planIdsForSkus.includes(planId.planId));
  let num = 0;
  if (null != found) {
    num = found.quantity;
  }
  let tmp7 = null;
  if (null != renewalMutations) {
    additionalPlans = renewalMutations.additionalPlans;
    planIdsForSkus1 = undefined;
    const items1 = [closure_38.GUILD];
    planIdsForSkus1 = store2.getPlanIdsForSkus(items1);
    00038__(null != planIdsForSkus1, "Missing guildSubscriptionPlanIds");
    const found1 = additionalPlans.find((planId) => planIdsForSkus.includes(planId.planId));
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
function getFormattedPriceForPlan(id, arg1, arg2, flag) {
  if (flag === undefined) {
    flag = false;
  }
  if (null != arg1) {
    try {
      let tmp5 = getPrice(id.id, false, flag, arg1);
    } catch (err) {
      tmp5 = getDefaultPrice(tmp.id, false, tmp3);
    }
  } else {
    tmp5 = getDefaultPrice(id.id, false, flag);
  }
  const formatPriceResult = formatSingleCurrencyPrice.formatPrice(tmp5.amount, tmp5.currency);
  let tmp10 = id.currency !== constants8.USD;
  if (tmp10) {
    tmp10 = true === arg2;
  }
  let combined = formatPriceResult;
  if (tmp10) {
    combined = formatPriceResult.concat("*");
  }
  return combined;
}
function getPlanIdFromInvoice(subscription, first) {
  if (subscription.status !== constants4.CANCELED) {
    if (subscription.status !== tmp.PAUSE_PENDING) {
      00038__(null != first, "Expected invoicePreview");
      const invoiceItems = first.invoiceItems;
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
function getStatusFromInvoice(subscription, first) {
  const status = subscription.status;
  if (subscription.status !== constants4.CANCELED) {
    if (subscription.status !== tmp.PAUSE_PENDING) {
      00038__(null != first, "Expected invoicePreview");
      const invoiceItems = first.invoiceItems;
      const found = invoiceItems.find((subscriptionPlanId) => set.has(subscriptionPlanId.subscriptionPlanId));
      let tmp8 = null == found;
      if (!tmp8) {
        tmp8 = isNoneSubscription(found.subscriptionPlanId);
      }
      let CANCELED = status;
      if (tmp8) {
        CANCELED = tmp.CANCELED;
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
    let obj = { paymentSourceId: null, currency: null };
    obj[0] = paymentSourceId;
    obj[1] = currency;
  } else {
    obj = { country: null, currency: null };
    obj[0] = obj.ipCountryCodeWithFallback;
    obj[1] = currency;
  }
  let obj2 = store2;
  const value = store2.get(planId);
  if (null == value) {
    const _Error2 = Error;
    const error = new Error("Unsupported plan");
    obj = { tags: null };
    const obj1 = { planId: null };
    obj1[0] = planId;
    obj[0] = obj1;
    const result = _createGatewayCheckoutContext.captureBillingException(error, obj);
    throw error;
  } else {
    const forSkuAndInterval = obj2.getForSkuAndInterval(closure_38.GUILD, value.interval, value.intervalCount);
    if (null == forSkuAndInterval) {
      const _Error = Error;
      const error1 = new Error("Unsupported plan");
      obj2 = { tags: null };
      let obj3 = { planId: null };
      obj3[0] = planId;
      obj2[0] = obj3;
      const result1 = _createGatewayCheckoutContext.captureBillingException(error1, obj2);
      throw error1;
    } else {
      const id = forSkuAndInterval.id;
      obj3 = isPremiumAtLeast;
      return getPrice(id, obj3.isPremium(user), false, obj);
    }
  }
}
function getBillingReviewSubheader(arg0, id) {
  id = id.id;
  if (null != arg0) {
    if (SubscriptionPlans.PREMIUM_MONTH_TIER_0 === id) {
      const intl15 = getSystemLocale.intl;
      return intl15.string(getSystemLocale.t["0ggVqN"]);
    } else if (tmp.PREMIUM_YEAR_TIER_0 === id) {
      const intl14 = getSystemLocale.intl;
      return intl14.string(getSystemLocale.t["jm+ZQw"]);
    } else if (tmp.PREMIUM_MONTH_TIER_1 === id) {
      const intl13 = getSystemLocale.intl;
      return intl13.string(getSystemLocale.t.uph4Jx);
    } else if (tmp.PREMIUM_YEAR_TIER_1 === id) {
      const intl12 = getSystemLocale.intl;
      return intl12.string(getSystemLocale.t["D/l7Yt"]);
    } else {
      if (tmp.PREMIUM_MONTH_TIER_2 !== id) {
        if (tmp.PREMIUM_GROUP_MONTH !== id) {
          if (tmp.PREMIUM_YEAR_TIER_2 === id) {
            const intl10 = getSystemLocale.intl;
            return intl10.string(getSystemLocale.t.G0mISV);
          }
        }
      }
      const intl11 = getSystemLocale.intl;
      return intl11.string(getSystemLocale.t["5l1MuV"]);
    }
  }
  if (SubscriptionPlans.PREMIUM_MONTH_TIER_0 === id) {
    const intl9 = getSystemLocale.intl;
    const string6 = intl9.string;
    const t6 = getSystemLocale.t;
    if (arg2) {
      let string6Result = string6(t6.cRCCJ3);
    } else {
      string6Result = string6(t6["/G3aKw"]);
    }
    return string6Result;
  } else if (tmp2.PREMIUM_YEAR_TIER_0 === id) {
    const intl8 = getSystemLocale.intl;
    const string5 = intl8.string;
    const t5 = getSystemLocale.t;
    if (arg2) {
      let string5Result = string5(t5.cRCCJ3);
    } else {
      string5Result = string5(t5["2eQpsL"]);
    }
    return string5Result;
  } else if (tmp2.PREMIUM_MONTH_TIER_1 === id) {
    const intl7 = getSystemLocale.intl;
    const string4 = intl7.string;
    const t4 = getSystemLocale.t;
    if (arg2) {
      let string4Result = string4(t4.cRCCJ3);
    } else {
      string4Result = string4(t4.gueLg5);
    }
    return string4Result;
  } else if (tmp2.PREMIUM_YEAR_TIER_1 === id) {
    const intl6 = getSystemLocale.intl;
    const string3 = intl6.string;
    const t3 = getSystemLocale.t;
    if (arg2) {
      let string3Result = string3(t3.cRCCJ3);
    } else {
      string3Result = string3(t3["MhH/vW"]);
    }
    return string3Result;
  } else if (tmp2.PREMIUM_MONTH_TIER_2 === id) {
    const intl5 = getSystemLocale.intl;
    const string2 = intl5.string;
    const t2 = getSystemLocale.t;
    if (arg2) {
      let string2Result = string2(t2.cRCCJ3);
    } else {
      string2Result = string2(t2.LQVQIq);
    }
    return string2Result;
  } else if (tmp2.PREMIUM_GROUP_MONTH === id) {
    const intl4 = getSystemLocale.intl;
    let obj = { premiumGroupProductName: null };
    obj[0] = callback();
    return intl4.formatToPlainString(messagesProxy.LwdrNi, obj);
  } else if (tmp2.PREMIUM_YEAR_TIER_2 === id) {
    const intl3 = getSystemLocale.intl;
    const string = intl3.string;
    const t = getSystemLocale.t;
    if (arg2) {
      let stringResult = string(t.cRCCJ3);
    } else {
      stringResult = string(t["0nfg1x"]);
    }
    return stringResult;
  } else {
    if (tmp2.PREMIUM_3_MONTH_TIER_2 !== id) {
      if (tmp2.PREMIUM_6_MONTH_TIER_2 !== id) {
        if (tmp2.NONE_MONTH !== id) {
          if (tmp2.NONE_YEAR !== id) {
            if (tmp2.NONE_3_MONTH !== id) {
              if (tmp2.NONE_6_MONTH !== id) {
                if (tmp2.PREMIUM_MONTH_GUILD !== id) {
                  if (tmp2.PREMIUM_YEAR_GUILD !== id) {
                    if (tmp2.PREMIUM_3_MONTH_GUILD !== id) {
                      if (tmp2.PREMIUM_6_MONTH_GUILD !== id) {
                        const _Error = Error;
                        const error = new Error("User is purchasing an unsupported plan");
                        obj = _createGatewayCheckoutContext;
                        obj = { tags: null };
                        const obj1 = { planId: null };
                        obj1[0] = id;
                        obj[0] = obj1;
                        const result = obj.captureBillingException(error, obj);
                        throw error;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const intl = getSystemLocale.intl;
        return intl.string(getSystemLocale.t.eUEeCt);
      }
    }
    const intl2 = getSystemLocale.intl;
    const obj2 = { intervalCount: null };
    obj2[0] = id.intervalCount;
    return intl2.formatToPlainString(getSystemLocale.t.BCD4fT, obj2);
  }
}
function getIntervalForInvoice(arg0) {
  const value = store2.get(arg0.invoiceItems[0].subscriptionPlanId);
  00038__(null != value, "Missing subscriptionPlan");
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
  let obj = formatSingleCurrencyPrice;
  const formatPriceResult = obj.formatPrice(0, getDefaultCurrency(), { maximumFractionDigits: 0, minimumFractionDigits: 0 });
  if (constants7.DAY === MONTH) {
    if (num >= 7) {
      if (num % 7 === 0) {
        const intl4 = tmp3(1236).intl;
        obj = { weeks: null, price: null };
        obj[0] = num / 7;
        obj[1] = formatPriceResult;
        let formatToPlainStringResult = intl4.formatToPlainString(tmp3(1236).t.C6i5Jt, obj);
      }
      return formatToPlainStringResult;
    }
    const intl3 = tmp3(1236).intl;
    obj = { days: null, price: null };
    obj[0] = num;
    obj[1] = formatPriceResult;
    formatToPlainStringResult = intl3.formatToPlainString(tmp3(1236).t.cR9ifw, obj);
  } else if (tmp6.MONTH === MONTH) {
    const intl2 = tmp3(1236).intl;
    const obj1 = { months: null, price: null };
    obj1[0] = num;
    obj1[1] = formatPriceResult;
    return intl2.formatToPlainString(tmp3(1236).t["8FZfNo"], obj1);
  } else if (tmp6.YEAR === MONTH) {
    const intl = tmp3(1236).intl;
    const obj2 = { years: null, price: null };
    obj2[0] = num;
    obj2[1] = formatPriceResult;
    return intl.formatToPlainString(tmp3(1236).t.xzAcST, obj2);
  } else {
    const _Error = Error;
    const error = new Error("Unsupported interval duration.");
    throw error;
  }
}
function getItemsWithUpsertedPlanIdForGroup(renewalMutations, basePlanId, arg2, closure_31) {
  const _require = basePlanId;
  let closure_1 = arg2;
  const dependencyMap = closure_31;
  if (closure_31.has(basePlanId)) {
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
        let c3 = true;
        const obj = {};
        const merged = Object.assign(planId);
        obj.quantity = closure_1;
        obj.planId = closure_0;
        tmp = obj;
      }
      return tmp;
    });
    if (!c3) {
      let obj = { planId: null, quantity: null };
      obj[0] = basePlanId;
      obj[1] = arg2;
      const items1 = renewalMutations.items;
      const found = items1.find((planId) => planId.planId === closure_0);
      if (null != found) {
        obj.id = found.id;
      }
      mapped.push(obj);
    }
    return mapped.filter((quantity) => 0 !== quantity.quantity);
  } else {
    obj = { message: "Expected planId in group", extraSentryInformation: null };
    obj = { newPlanId: null, planGroup: null };
    obj[0] = basePlanId;
    obj[1] = closure_31;
    obj[1] = obj;
    const checkoutError = new _prototype.CheckoutError(obj);
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
function isBoostOnlySubscription(closure_0) {
  let tmp = null != closure_0;
  if (tmp) {
    const items = closure_0.items;
    tmp = null == items.find((planId) => set.has(planId.planId));
  }
  if (tmp) {
    let found = null;
    if (null != closure_0) {
      const items1 = closure_0.items;
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
    if (null == dependencyMap3[planId]) {
      const _Error = Error;
      const error = new Error("Unsupported plan");
      let obj = _createGatewayCheckoutContext;
      obj = { tags: null };
      obj = { planId: null };
      obj[0] = planId;
      obj[0] = obj;
      const result = obj.captureBillingException(error, obj);
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
      if (null != dependencyMap3[planId]) {
        return tmp3.premiumType;
      } else {
        const _Error = Error;
        const error = new Error("Unsupported plan");
        let obj = _createGatewayCheckoutContext;
        obj = { tags: null };
        obj = { planId: null };
        obj[0] = planId;
        obj[0] = obj;
        const result = obj.captureBillingException(error, obj);
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
function formatPriceString(amount) {
  const obj = formatSingleCurrencyPrice;
  if (constants7.MONTH === arg1) {
    const intl2 = tmp(1236).intl;
    let stringResult = intl2.string(tmp(1236).t.FPybU7);
  } else if (tmp4.YEAR === arg1) {
    const intl = tmp(1236).intl;
    stringResult = intl.string(tmp(1236).t.tfqrhj);
  } else {
    const _Error = Error;
    const error = new Error("Unexpected interval");
    throw error;
  }
  return "" + formatSingleCurrencyPrice.formatPrice(amount.amount, amount.currency) + "/" + stringResult;
}
function castPremiumSubscriptionAsSkuId(skuIdForPlan) {
  return skuIdForPlan;
}
function formatInterval(interval) {
  if (interval === constants7.YEAR) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.tfqrhj);
  } else if (interval === tmp.MONTH) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.FPybU7);
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
  return mapped.reduce((arg0, arg1) => {
    const tmp = callback(table[arg1], 2);
    const first = tmp[0];
    let num = 1;
    if (constants.HOUR !== first) {
      num = 1;
      if (constants.DAY === first) {
        num = 24;
      }
    }
    return arg0 + num * tmp[1];
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
  if (null != dependencyMap2[isGift.subscriptionPlan.skuId]) {
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
    if (subscriptionPlan.interval === tmp.MONTH) {
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
    if (null != dependencyMap2[subscriptionPlan.skuId]) {
      tmp5 = getPrice(tmp3, false, isGift, priceOptions);
    }
    if (null == tmp5) {
      return null;
    } else {
      if (subscriptionPlan.interval === tmp.MONTH) {
        let intervalCount = subscriptionPlan.intervalCount;
      } else {
        intervalCount = 12 * subscriptionPlan.intervalCount;
      }
      return tmp5.amount * intervalCount;
    }
  }
}
function calculateDiscountPercentageForYearlyPlan(subscriptionPlan, arg1, isGift) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = isGift;
  if (isGift === undefined) {
    obj = {};
  }
  if (subscriptionPlan.interval === constants7.YEAR) {
    try {
      obj = { subscriptionPlan: null, isGift: null, priceOptions: null };
      obj[0] = subscriptionPlan;
      obj[1] = flag;
      obj[2] = obj;
      const tmp3 = getMonthlyPrice(obj);
      if (null != tmp3) {
        if (0 !== tmp4.amount) {
          const _Math = Math;
          return Math.floor(100 * (1 - getPrice(subscriptionPlan.id, false, flag, obj).amount / (12 * tmp3.amount)));
        }
      }
    } catch (err) {
      return tmp;
    }
  }
}
function calculateYearlyPlanDollarSavingsAmount(id, arg1, priceOptions) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = priceOptions;
  if (priceOptions === undefined) {
    obj = {};
  }
  obj = { subscriptionPlan: id, isGift: flag, priceOptions: obj };
  const tmp = calculateMonthlyPriceEquivalentTotal(obj);
  if (null != tmp) {
    if (tmp > 0) {
      const tmp5 = getPrice(id.id, false, flag, obj);
      const diff = tmp - tmp5.amount;
      let tmp7 = null;
      if (diff > 0) {
        obj = { amount: null, currency: null };
        obj[0] = diff;
        obj[1] = tmp5.currency;
        tmp7 = obj;
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
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  if (interval.interval !== constants7.YEAR) {
    return null;
  } else {
    const tmp4 = getPrice(interval.id, false, flag, obj);
    let tmp5 = null;
    if (0 !== tmp4.amount) {
      obj = { amount: null, currency: null };
      const _Math = Math;
      obj[0] = Math.round(tmp4.amount / 12);
      obj[1] = tmp4.currency;
      tmp5 = obj;
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
    num = Math.max(resetCache.differenceInCalendarDays(date, date1), 0);
    const obj = resetCache;
  }
  return num;
}
function getDaysRemainingUntilSubscriptionCurrentPeriodEnds(currentPeriodEnd) {
  const obj = resetCache;
  const date = new Date(currentPeriodEnd.currentPeriodEnd);
  return Math.max(1, Math.ceil(obj.differenceInDays(date, new Date())));
}
({ InvoiceStatusTypes: unpackModuleId, PaymentGateways: closure_12, PriceSetAssignmentPurchaseTypes: map1, SubscriptionStatusTypes: closure_14 } = ME);
({ DISCOUNTS: closure_15, ANNUAL_DISCOUNT_PERCENTAGE_FALLBACK: closure_16, DEFAULT_APPLE_GRACE_PERIOD_DAYS: closure_17, DEFAULT_GOOGLE_GRACE_PERIOD_DAYS: closure_18, DEFAULT_MAX_GRACE_PERIOD_DAYS: closure_19, DISCOUNT_DURATION_FALLBACK: closure_20, DISCOUNT_PERCENTAGE_FALLBACK: closure_21, DiscountUserUsageLimitIntervalTypes: closure_22, FRACTIONAL_PREMIUM_SKU_INTERVAL_COUNTS: closure_23, FractionalPremiumIntervalTypes: closure_24, FractionalPremiumStates: closure_25, MAX_ACCOUNT_HOLD_DAYS: closure_26, MAX_PAYMENT_PROCESSING_TIME_DAYS: closure_27, NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_28, PAID_SUBSCRIPTION_MAX_BILLING_RETRY_DAYS: closure_29, PAID_SUBSCRIPTION_MAX_GRACE_PERIOD_DAYS: closure_30, PREMIUM_GUILD_SUBSCRIPTION_PLANS: closure_31, PREMIUM_PLANS: closure_32, PREMIUM_SKU_TO_MONTHLY_PLAN: closure_33, PREMIUM_TIER_2_PLANS: closure_34, PREMIUM_TIER_2_REVERSE_FOLLOWUP_TRIAL_ID: closure_35, PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID: closure_36, PREMIUM_TYPE_DISPLAY_NAME: closure_37, PremiumSubscriptionSKUs: closure_38, PremiumTypes: closure_39, PremiumUserLimits: closure_40, SubscriptionIntervalTypes: closure_41, SubscriptionPlanInfo: closure_42, SubscriptionPlans } = GuildFeatures);
({ TRIAL_FOR_EVERYONE_OFFER_EXPIRES_APPROACHING_THRESHOLD: closure_44, USER_PREMIUM_OFFER_EXPIRES_APPROACHING_4_DAY_THRESHOLD: closure_45, USER_PREMIUM_OFFER_EXPIRES_APPROACHING_7_DAY_THRESHOLD: closure_46 } = GuildFeatures);
({ CurrencyCodes: closure_48, PaymentGatewayToFriendlyName: closure_49, PREPAID_PAYMENT_SOURCES: closure_50 } = sum);
let closure_51 = { PAYMENT_SOURCE_MANAGEMENT: "https://support.apple.com/HT201266", BILLING_HISTORY: "https://support.apple.com/HT201266", SUBSCRIPTION_MANAGEMENT: "https://support.apple.com/HT202039" };
let closure_52 = { SUBSCRIPTION_MANAGEMENT: "https://play.google.com/store/account/subscriptions", PAYMENT_SOURCE_MANAGEMENT: "https://play.google.com/store/paymentmethods", BILLING_HISTORY: "https://play.google.com/store/account/orderhistory" };
let closure_53 = new require("mergeGuildAvatar")("PremiumUtils.tsx");
let obj = { BUNDLE: "bundle", TIER_0: "tier_0", TIER_1: "tier_1", TIER_2: "tier_2", PREMIUM_GUILD: "premium_guild" };
obj = { MID: "mid", HIGH: "high" };
let items = [, , , , , , , , , , , , ];
({ NONE_MONTH: arr[0], NONE_3_MONTH: arr[1], NONE_6_MONTH: arr[2], NONE_YEAR: arr[3], PREMIUM_MONTH_TIER_0: arr[4], PREMIUM_MONTH_TIER_1: arr[5], PREMIUM_MONTH_TIER_2: arr[6], PREMIUM_YEAR_TIER_0: arr[7], PREMIUM_YEAR_TIER_1: arr[8], PREMIUM_YEAR_TIER_2: arr[9], PREMIUM_3_MONTH_TIER_2: arr[10], PREMIUM_6_MONTH_TIER_2: arr[11], PREMIUM_GROUP_MONTH: arr[12] } = SubscriptionPlans);
let set = new Set(items);
obj = {
  isNewUser,
  isPremiumAtLeast: require("isPremiumAtLeast").isPremiumAtLeast,
  isPremium: require("isPremiumAtLeast").isPremium,
  isPremiumExactly: require("isPremiumAtLeast").isPremiumExactly,
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
    return skuId === closure_38.TIER_0 || skuId === closure_38.TIER_1 || skuId === closure_38.TIER_2;
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
  getUserMaxFileSize: require("getUserMaxFileSize").getUserMaxFileSize,
  getSkuIdForPlan(planId) {
    if (null == dependencyMap3[planId]) {
      const _Error = Error;
      const error = new Error("Unsupported plan");
      let obj = _createGatewayCheckoutContext;
      obj = { tags: null };
      obj = { planId: null };
      obj[0] = planId;
      obj[0] = obj;
      const result = obj.captureBillingException(error, obj);
      throw error;
    } else {
      return tmp.skuId;
    }
  },
  getSkuIdForPremiumType(premiumType) {
    if (closure_39.TIER_0 === premiumType) {
      return closure_38.TIER_0;
    } else if (tmp.TIER_1 === premiumType) {
      return closure_38.TIER_1;
    } else if (tmp.TIER_2 === premiumType) {
      return closure_38.TIER_2;
    }
  },
  getNumIncludedPremiumGuildSubscriptionSlots(planId) {
    if (null != dependencyMap3[planId]) {
      let num = 0;
      if (tmp.premiumType === closure_39.TIER_2) {
        num = closure_28;
      }
      return num;
    } else {
      const _Error = Error;
      const error = new Error("Unsupported plan");
      let obj = _createGatewayCheckoutContext;
      obj = { tags: null };
      obj = { planId: null };
      obj[0] = planId;
      obj[0] = obj;
      const result = obj.captureBillingException(error, obj);
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
  hasUnconsumedGiftForSubscriptionPlan(size) {
    let closure_0 = arg1;
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
    return ProductCatalogFeature.canUserUse(ProductCatalogFeature.ANIMATED_EMOJIS, currentUser);
  },
  canUseEmojisEverywhere(currentUser) {
    return ProductCatalogFeature.canUserUse(ProductCatalogFeature.EMOJIS_EVERYWHERE, currentUser);
  },
  canUseSoundboardEverywhere(currentUser) {
    return ProductCatalogFeature.canUserUse(ProductCatalogFeature.SOUNDBOARD_EVERYWHERE, currentUser);
  },
  canUseCustomCallSounds(currentUser) {
    return ProductCatalogFeature.canUserUse(ProductCatalogFeature.CUSTOM_CALL_SOUNDS, currentUser);
  },
  canUploadLargeFiles(currentUser) {
    return ProductCatalogFeature.canUserUse(ProductCatalogFeature.UPLOAD_LARGE_FILES, currentUser);
  },
  canUseBadges(currentUser) {
    return ProductCatalogFeature.canUserUse(ProductCatalogFeature.PROFILE_BADGES, currentUser);
  },
  canUseHighVideoUploadQuality(currentUser) {
    return ProductCatalogFeature.canUserUse(ProductCatalogFeature.INCREASED_VIDEO_UPLOAD_QUALITY, currentUser);
  },
  canEditDiscriminator(stateFromStores) {
    return ProductCatalogFeature.canUserUse(ProductCatalogFeature.CUSTOM_DISCRIMINATOR, stateFromStores);
  },
  hasBoostDiscount(stateFromStores) {
    return ProductCatalogFeature.canUserUse(ProductCatalogFeature.BOOST_DISCOUNT, stateFromStores);
  },
  canUseAnimatedAvatar(c3) {
    return ProductCatalogFeature.canUserUse(ProductCatalogFeature.ANIMATED_AVATAR, c3);
  },
  canInstallPremiumApplications(isPremiumWithFractionalPremiumOnly) {
    return ProductCatalogFeature.canUserUse(ProductCatalogFeature.INSTALL_PREMIUM_APPLICATIONS, isPremiumWithFractionalPremiumOnly);
  },
  canUseIncreasedMessageLength(currentUser) {
    return ProductCatalogFeature.canUserUse(ProductCatalogFeature.INCREASED_MESSAGE_LENGTH, currentUser);
  },
  canUseIncreasedGuildCap(currentUser) {
    return ProductCatalogFeature.canUserUse(ProductCatalogFeature.INCREASED_GUILD_LIMIT, currentUser);
  },
  canRedeemPremiumPerks(isPremiumWithFractionalPremiumOnly) {
    return ProductCatalogFeature.canUserUse(ProductCatalogFeature.REDEEM_PREMIUM_PERKS, isPremiumWithFractionalPremiumOnly);
  },
  canUsePremiumProfileCustomization(isPremiumWithFractionalPremiumOnly) {
    return ProductCatalogFeature.canUserUse(ProductCatalogFeature.PROFILE_PREMIUM_FEATURES, isPremiumWithFractionalPremiumOnly);
  },
  canUsePremiumAppIcons(c0) {
    return ProductCatalogFeature.canUserUse(ProductCatalogFeature.APP_ICONS, c0);
  },
  canUsePremiumGuildMemberProfile(currentUser) {
    return ProductCatalogFeature.canUserUse(ProductCatalogFeature.PREMIUM_GUILD_MEMBER_PROFILE, currentUser);
  },
  canUseClientThemes(currentUser) {
    return ProductCatalogFeature.canUserUse(ProductCatalogFeature.CLIENT_THEMES, currentUser);
  },
  canStreamQuality(HIGH, user) {
    if (HIGH === obj.HIGH) {
      let canUserUseResult = ProductCatalogFeature.canUserUse(ProductCatalogFeature.STREAM_HIGH_QUALITY, user);
      const obj2 = ProductCatalogFeature;
    } else {
      obj = ProductCatalogFeature;
      canUserUseResult = obj.canUserUse(ProductCatalogFeature.STREAM_MID_QUALITY, user);
    }
    return canUserUseResult;
  },
  canUseQuestOrbMultiplier(perks) {
    return ProductCatalogFeature.canUserUse(ProductCatalogFeature.QUEST_ORB_MULTIPLIER, perks);
  },
  hasFreeBoosts(stateFromStores) {
    return ProductCatalogFeature.canUserUse(ProductCatalogFeature.FREE_BOOSTS, stateFromStores);
  },
  canUseCustomStickersEverywhere(currentUser) {
    return ProductCatalogFeature.canUserUse(ProductCatalogFeature.STICKERS_EVERYWHERE, currentUser);
  },
  canUseCustomBackgrounds(currentUser) {
    return ProductCatalogFeature.canUserUse(ProductCatalogFeature.VIDEO_FILTER_ASSETS, currentUser);
  },
  canUseCollectibles(user) {
    return ProductCatalogFeature.canUserUse(ProductCatalogFeature.COLLECTIBLES, user);
  },
  canUseMonthlyOrbs(stateFromStores) {
    let hasPerkResult = apexExperiment.getIsCrepeEnabled("canUseMonthlyOrbs");
    if (hasPerkResult) {
      let perks;
      if (stateFromStores != null) {
        perks = stateFromStores.perks;
      }
      hasPerkResult = tmp(1919).hasPerk(perks, tmp(1921).Perk.MONTHLY_ORBS);
      const tmpResult = tmp(1919);
    }
    return hasPerkResult;
  },
  canUseShopDiscounts(currentUser) {
    let isCrepeEnabled = apexExperiment.getIsCrepeEnabled("canUseShopDiscounts");
    if (isCrepeEnabled) {
      let tmpResult = tmp(1919);
      let perks;
      if (currentUser != null) {
        perks = currentUser.perks;
      }
      isCrepeEnabled = tmpResult.hasPerk(perks, tmp(1921).Perk.SHOP_DISCOUNTS);
    }
    if (!isCrepeEnabled) {
      tmpResult = tmp(13329);
      isCrepeEnabled = tmpResult.canUserUse(tmp(13329).COLLECTIBLES, currentUser);
    }
    return isCrepeEnabled;
  },
  canUseMoreQuestOrbs(perks) {
    let isCrepeEnabled = apexExperiment.getIsCrepeEnabled("canUseMoreQuestOrbs");
    if (isCrepeEnabled) {
      let tmpResult = tmp(1919);
      perks = undefined;
      if (perks != null) {
        perks = perks.perks;
      }
      isCrepeEnabled = tmpResult.hasPerk(perks, tmp(1921).Perk.MORE_QUEST_ORBS);
    }
    if (!isCrepeEnabled) {
      tmpResult = tmp(13329);
      isCrepeEnabled = tmpResult.canUserUse(tmp(13329).QUEST_ORB_MULTIPLIER, perks);
    }
    return isCrepeEnabled;
  },
  formatPriceString,
  StreamQuality: obj
};
const frozen = Object.freeze(obj);
let result = set.fileFinishedImporting("utils/PremiumUtils.tsx");

export default frozen;
export const Branding = obj;
export const StreamQuality = obj;
export const getPremiumBranding = function getPremiumBranding(renewalMutations) {
  const planId = renewalMutations.planId;
  if (set2.has(planId)) {
    const additionalPlans = renewalMutations.additionalPlans;
    let planIdsForSkus;
    const items = [closure_38.GUILD];
    planIdsForSkus = store2.getPlanIdsForSkus(items);
    00038__(null != planIdsForSkus, "Missing guildSubscriptionPlanIds");
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
    if (planId !== tmp9.PREMIUM_YEAR_TIER_0) {
      if (planId !== tmp9.PREMIUM_MONTH_TIER_1) {
        if (planId !== tmp9.PREMIUM_YEAR_TIER_1) {
          if (planId !== tmp9.PREMIUM_MONTH_TIER_2) {
            if (planId !== tmp9.PREMIUM_YEAR_TIER_2) {
              if (planId !== tmp9.PREMIUM_3_MONTH_TIER_2) {
                if (planId !== tmp9.PREMIUM_6_MONTH_TIER_2) {
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
    const obj = {};
    const merged = Object.assign(arg0);
    const _Object = Object;
    obj.contextPlanPrices = Object.fromEntries(arr.map((arg0) => {
      const items = [, ];
      ({ id: arr[0], price: arr[1] } = arg0);
      return items;
    }));
    tmp = obj;
  }
  return tmp;
};
export const usePlanSelectPriceState = function usePlanSelectPriceState(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  let items = [arg1];
  const memo = React.useMemo(() => {
    let available_plans = null;
    if (null != closure_1) {
      available_plans = null;
      if (null != tmp.checkoutContext) {
        available_plans = null;
        if (null != tmp.checkoutContext.available_plans) {
          available_plans = tmp.checkoutContext.available_plans;
        }
      }
    }
    return available_plans;
  }, items);
  const items1 = [arg0, arg1, memo, arg2];
  return React.useMemo(() => {
    let tmp2 = closure_0;
    if (null != memo) {
      let obj = {};
      const merged = Object.assign(tmp);
      const _Object = Object;
      obj.contextPlanPrices = Object.fromEntries(memo.map((arg0) => {
        const items = [, ];
        ({ id: arr[0], price: arr[1] } = arg0);
        return items;
      }));
      tmp2 = obj;
    }
    obj = { priceOptions: tmp2, planPricesLoading: null };
    let tmp7 = null != tmp.currency;
    if (tmp7) {
      tmp7 = null != currency;
    }
    if (tmp7) {
      tmp7 = currency.currency !== tmp.currency;
    }
    if (tmp7) {
      tmp7 = null == closure_2;
    }
    obj[1] = tmp7;
    return obj;
  }, items1);
};
export { getPrice };
export const getCountryPrices = function getCountryPrices(id, DEFAULT) {
  if (DEFAULT === undefined) {
    DEFAULT = constants3.DEFAULT;
  }
  return getPurchaseTypePrices(id, DEFAULT).countryPrices;
};
export { experimentalGetPrices };
export const experimentalGetPrice = function experimentalGetPrice(id, arg1) {
  let currency;
  let paymentSourceId;
  let purchaseType;
  let tmp = arg1;
  if (arg1 === undefined) {
    let obj = { purchaseType: null };
    obj[0] = constants3.DEFAULT;
    tmp = obj;
  }
  ({ paymentSourceId, purchaseType, currency } = tmp);
  const arr = experimentalGetPrices(id, { paymentSourceId, purchaseType });
  if (0 === arr.length) {
    const _HermesInternal = HermesInternal;
    globalThis.warn("No prices found for planId: " + id + ", paymentSourceId: " + paymentSourceId + ", purchaseType: " + purchaseType);
  }
  if (null != currency) {
    let found = arr.find((currency) => currency.currency === currency.toLowerCase());
    if (null == found) {
      let found1;
      if (null != paymentSourceId) {
        obj = { purchaseType: null };
        obj[0] = purchaseType;
        found1 = tmp3(id, obj).find((currency) => currency.currency === currency.toLowerCase());
        const tmp3Result = tmp3(id, obj);
      }
      found = found1;
    }
    return found;
  } else {
    return arr[0];
  }
  tmp3 = experimentalGetPrices;
};
export { getServerPriceFromClientPrice };
export { getItemPlansTotalServerPrice };
export const getSubscriptionWithNewPlansTotalServerPrice = function getSubscriptionWithNewPlansTotalServerPrice(renewalMutations) {
  let items = arg1;
  if (null === arg1) {
    00038__(null !== renewalMutations, "Subscription can't be null");
    items = [];
  }
  if (null !== renewalMutations) {
    let closure_0 = renewalMutations;
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
          let obj = {};
          let tmp3 = item10008;
          let tmp4 = obj;
          let merged = Object.assign(tmp2);
          let tmp6 = obj;
          let tmp7 = arg0;
          let merged1 = Object.assign(arg0);
          let tmp9 = obj;
          obj.return();
          return obj;
        }
      }
      return planId;
    });
  } else {
    mapped = items.filter((planId) => !set.has(planId.planId));
  }
  return getItemPlansTotalServerPrice(mapped, arg2, arg3);
};
export { getInterval };
export const getDiscountIntervalString = function getDiscountIntervalString(arg0) {
  if (constants5.MONTH === arg0) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.FPybU7);
  } else if (tmp.YEAR === arg0) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.tfqrhj);
  } else {
    if (tmp.DAY !== arg0) {
      const WEEK = tmp.WEEK;
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
export const getDisplayNameFromSku = function getDisplayNameFromSku(sku_id1) {
  if (closure_38.TIER_0 === sku_id1) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t["t9uG/o"]);
  } else if (tmp.TIER_1 === sku_id1) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.FSOz78);
  } else if (tmp.TIER_2 === sku_id1) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.lG6a5x);
  } else {
    const _Error = Error;
    const error = new Error("Unsupported sku");
    let obj = _createGatewayCheckoutContext;
    obj = { tags: null };
    obj = { skuId: null };
    obj[0] = sku_id1;
    obj[0] = obj;
    const result = obj.captureBillingException(error, obj);
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
      const intl3 = getSystemLocale.intl;
      str2 = intl3.string(getSystemLocale.t["t9uG/o"]);
    }
    return str2;
  } else if (tmp.TIER_1 === TIER_0) {
    let str = "Classic";
    if (!flag) {
      const intl2 = getSystemLocale.intl;
      str = intl2.string(getSystemLocale.t.FSOz78);
    }
    return str;
  } else if (tmp.TIER_2 === TIER_0) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.lG6a5x);
  }
};
export const getPlanDescriptionFromInvoice = function getPlanDescriptionFromInvoice(hasDiscountApplied) {
  let activeDiscountInfo;
  let hasFractionalPremiumWithSub;
  let includePremiumGuilds;
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
  const value = store2.get(planId);
  00038__(null != value, "Missing plan");
  let obj = { subscription, planId: value.id, price: null, includePremiumGuilds: null, hasDiscountApplied: null, activeDiscountInfo: null, renewalInvoiceWithoutEntitlementsPreview: null, renewalInvoiceWithEntitlementsPreview: null, hasFractionalPremiumWithSub: null, fractionalPremiumInfo: null };
  const result = renewalInvoicePreview.findInvoiceItemByPlanId(value.id);
  if (null == result) {
    obj = { paymentSourceId: null, currency: null };
    ({ paymentSourceId: obj2[0], currency: obj2[1] } = subscription);
    let amount = getPrice(value.id, false, false, obj).amount;
  } else {
    amount = result.amount;
  }
  const obj3 = formatSingleCurrencyPrice;
  const tmp4 = getPlanDescription;
  obj[2] = obj3.formatRate(formatSingleCurrencyPrice.formatPrice(amount, renewalInvoicePreview.currency), value.interval, value.intervalCount);
  obj[3] = includePremiumGuilds;
  obj[4] = flag;
  obj[5] = activeDiscountInfo;
  obj[6] = renewalInvoicePreview;
  obj[7] = renewalInvoiceWithEntitlementsPreview;
  obj[8] = hasFractionalPremiumWithSub;
  obj[9] = hasDiscountApplied.fractionalPremiumInfo;
  return tmp4(obj);
};
export const getExternalPlanDisplayName = function getExternalPlanDisplayName(renewalMutations) {
  let additionalPlans;
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
  planId = undefined;
  if (found != null) {
    planId = found.planId;
  }
  if (planId === SubscriptionPlans.PREMIUM_MONTH_GUILD) {
    let Pi5yMJ = getSystemLocale.t.Pi5yMJ;
  } else {
    let planId1;
    if (found != null) {
      planId1 = found.planId;
    }
    Pi5yMJ = null;
  }
  if (null != Pi5yMJ) {
    const intl = getSystemLocale.intl;
    let quantity;
    if (found != null) {
      quantity = found.quantity;
    }
    let obj = { num: null };
    obj[0] = quantity;
    const formatToPlainStringResult = intl.formatToPlainString(Pi5yMJ, obj);
  }
  if (null != tmp) {
    if (null != formatToPlainStringResult) {
      const intl2 = getSystemLocale.intl;
      obj = { premiumDescription: null, premiumGuildDescription: null };
      obj[0] = tmp;
      obj[1] = formatToPlainStringResult;
      return intl2.formatToPlainString(getSystemLocale.t.FN5T9r, obj);
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
export const getPlanIdForPremiumType = function getPlanIdForPremiumType(closure_0, c3) {
  const items = [, ];
  ({ MONTH: arr[0], YEAR: arr[1] } = closure_41);
  if (set.has(c3)) {
    if (closure_39.TIER_0 === closure_0) {
      if (c3 === tmp.MONTH) {
        let PREMIUM_YEAR_TIER_0 = SubscriptionPlans.PREMIUM_MONTH_TIER_0;
      } else {
        PREMIUM_YEAR_TIER_0 = SubscriptionPlans.PREMIUM_YEAR_TIER_0;
      }
      return PREMIUM_YEAR_TIER_0;
    } else if (tmp7.TIER_1 === closure_0) {
      if (c3 === tmp.MONTH) {
        let PREMIUM_YEAR_TIER_1 = SubscriptionPlans.PREMIUM_MONTH_TIER_1;
      } else {
        PREMIUM_YEAR_TIER_1 = SubscriptionPlans.PREMIUM_YEAR_TIER_1;
      }
      return PREMIUM_YEAR_TIER_1;
    } else if (tmp7.TIER_2 === closure_0) {
      if (c3 === tmp.MONTH) {
        let PREMIUM_YEAR_TIER_2 = SubscriptionPlans.PREMIUM_MONTH_TIER_2;
      } else {
        PREMIUM_YEAR_TIER_2 = SubscriptionPlans.PREMIUM_YEAR_TIER_2;
      }
      return PREMIUM_YEAR_TIER_2;
    } else {
      const _Error2 = Error;
      const _HermesInternal2 = HermesInternal;
      const error = new Error("Unsupported premium type: " + closure_0);
      throw error;
    }
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error1 = new Error("Unsupported plan interval for premium type: " + c3);
    throw error1;
  }
  set = new Set(items);
};
export { getNumPremiumGuildSubscriptions };
export const subscriptionHasPremiumGuildPlan = function subscriptionHasPremiumGuildPlan(subscription) {
  const additionalPlans = subscription.additionalPlans;
  let planIdsForSkus;
  const items = [closure_38.GUILD];
  planIdsForSkus = store2.getPlanIdsForSkus(items);
  00038__(null != planIdsForSkus, "Missing guildSubscriptionPlanIds");
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
export const isPremiumGuildSubscriptionPlan = function isPremiumGuildSubscriptionPlan(arg0) {
  return set.has(arg0);
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
      const paymentSource = store.getPaymentSource(paymentSourceId);
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
    const paymentSource = store.getPaymentSource(paymentSourceId);
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
  let fractionalPremiumInfo;
  let price;
  let renewalInvoicePreview;
  let subscription;
  let user;
  ({ subscription, user, price, renewalInvoicePreview, fractionalPremiumInfo } = arg0);
  const renewalMutations = subscription.renewalMutations;
  const value = store2.get(subscription.planId);
  00038__(null != value, "Missing plan");
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
        let obj = formatSingleCurrencyPrice;
        formatPriceResult = obj.formatPrice(amount, subscription.currency);
      }
      tmp10 = formatPriceResult;
      flag = flag2;
    }
  }
  let str = "";
  if (null != tmp10) {
    let obj1 = formatSingleCurrencyPrice;
    str = obj1.formatRate(tmp10, value.interval, value.intervalCount);
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
    const intl8 = getSystemLocale.intl;
    const format3 = intl8.format;
    const t4 = getSystemLocale.t;
    if (tmp21) {
      obj = { quantity: null };
      obj[0] = tmp5;
      let format3Result = format3(t4["3/WTrI"], obj);
    } else if (flag3) {
      obj = { quantity: null, rate: null };
      obj[0] = tmp5;
      obj[1] = str;
      format3Result = format3(t4["0ozBSB"], obj);
    } else {
      obj1 = { quantity: null, rate: null };
      obj1[0] = tmp5;
      obj1[1] = str;
      format3Result = format3(t4["yjsv/s"], obj1);
    }
    return format3Result;
  } else {
    const status = subscription.status;
    if (constants4.ACCOUNT_HOLD === status) {
      const intl7 = getSystemLocale.intl;
      const format2 = intl7.format;
      const t3 = getSystemLocale.t;
      if (tmp21) {
        const obj2 = { quantity: null, boostQuantity: null };
        obj2[0] = tmp5;
        obj2[1] = tmp5;
        let format2Result = format2(t3.Nlf3nc, obj2);
      } else if (flag3) {
        const obj3 = { quantity: null, boostQuantity: null, rate: null };
        obj3[0] = tmp5;
        obj3[1] = tmp5;
        obj3[2] = str;
        format2Result = format2(t3.oiRy7v, obj3);
      } else {
        const obj4 = { quantity: null, boostQuantity: null, rate: null };
        obj4[0] = tmp5;
        obj4[1] = tmp5;
        obj4[2] = str;
        format2Result = format2(t3["0QxOAi"], obj4);
      }
      return format2Result;
    } else {
      if (tmp24.PAUSE_PENDING !== status) {
        if (tmp24.PAUSED !== status) {
          if (tmp24.PAST_DUE === status) {
            if (subscription.isBoostOnly) {
              const intl4 = getSystemLocale.intl;
              const obj5 = { endDate: null, onClick: null };
              let obj8 = resetCache;
              obj5[0] = obj8.dateFormat(getBillingGracePeriodDaysAndExpiresDate(subscription).expiresDate, "LL");
              obj5[1] = function onClick() {
                callback(table[21])("https://support.discord.com/hc/articles/23082866222871");
              };
              return intl4.format(getSystemLocale.t["d+0vwo"], obj5);
            }
          }
          const tmp26 = getSystemLocale;
          if (tmp9) {
            if (tmp21) {
              const intl3 = tmp26.intl;
              const obj6 = { activeQuantity: null, pendingQuantity: null };
              obj6[0] = tmp4Result;
              obj6[1] = bound;
              return intl3.format(tmp25(1236).t["krRy+d"], obj6);
            } else {
              const t2 = tmp26.t;
              if (flag3) {
                let BmaudS = t2["4nc7+E"];
                let tmp28 = tmp25;
              } else {
                BmaudS = t2.BmaudS;
                tmp28 = tmp25;
              }
              const intl2 = tmp28(1236).intl;
              const obj7 = { activeQuantity: null, pendingQuantity: null, rate: null };
              obj7[0] = tmp4Result;
              obj7[1] = bound;
              obj7[2] = str;
              return intl2.format(BmaudS, obj7);
            }
          } else {
            const intl = tmp26.intl;
            const format = intl.format;
            const t = tmp25(1236).t;
            if (tmp21) {
              obj8 = { quantity: null };
              obj8[0] = tmp5;
              let formatResult = format(t["5iud9s"], obj8);
            } else if (flag3) {
              const obj9 = { quantity: null, rate: null };
              obj9[0] = tmp5;
              obj9[1] = str;
              formatResult = format(t.eDwrLA, obj9);
            } else {
              const obj10 = { quantity: null, rate: null };
              obj10[0] = tmp5;
              obj10[1] = str;
              formatResult = format(t.ijSDcI, obj10);
            }
            return formatResult;
          }
        }
      }
      if (null != fractionalPremiumInfo) {
        if (!fractionalPremiumInfo.isFractionalPremiumActive) {
          const intl5 = getSystemLocale.intl;
          let stringResult = intl5.string(getSystemLocale.t.CduWAm);
        }
        return stringResult;
      }
      const intl6 = getSystemLocale.intl;
      const obj11 = { quantity: null };
      obj11[0] = tmp5;
      stringResult = intl6.format(getSystemLocale.t["5iud9s"], obj11);
    }
  }
};
export { getFormattedPriceForPlan };
export const getFormattedRateForPlan = function getFormattedRateForPlan(interval) {
  const tmp = getFormattedPriceForPlan(interval, arg1, arg2);
  return formatSingleCurrencyPrice.formatRate(tmp, interval.interval, interval.intervalCount);
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
    const obj = { paymentSourceId: null, currency: null };
    ({ paymentSourceId: obj[0], currency: obj[1] } = arg1);
    let amount = getPrice(id.id, false, false, obj).amount;
  } else {
    amount = result.amount;
  }
  const obj2 = formatSingleCurrencyPrice;
  return obj2.formatRate(formatSingleCurrencyPrice.formatPrice(amount, findInvoiceItemByPlanId.currency), id.interval, id.intervalCount);
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
        const intl4 = getSystemLocale.intl;
        const formatToPlainString4 = intl4.formatToPlainString;
        let t = getSystemLocale.t;
        if (flag) {
          t = { weeks: null };
          num2 = num / num2;
          t[0] = num2;
          let formatToPlainString4Result = formatToPlainString4(t.fRNBRX, t);
        } else {
          let obj = { weeks: null };
          obj[0] = num / num2;
          formatToPlainString4Result = formatToPlainString4(t.EIpHEj, obj);
        }
      }
    }
    const intl3 = getSystemLocale.intl;
    const formatToPlainString3 = intl3.formatToPlainString;
    const t3 = getSystemLocale.t;
    if (flag) {
      obj = { days: null };
      obj[0] = num;
      let formatToPlainString3Result = formatToPlainString3(t3["6Cdzoy"], obj);
    } else {
      const obj1 = { days: null };
      obj1[0] = num;
      formatToPlainString3Result = formatToPlainString3(t3["kbBj/h"], obj1);
    }
    return formatToPlainString3Result;
  } else if (tmp2.MONTH === MONTH) {
    const intl2 = getSystemLocale.intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    const t2 = getSystemLocale.t;
    if (flag) {
      const obj2 = { months: null };
      obj2[0] = num;
      let formatToPlainString2Result = formatToPlainString2(t2.x5MgxS, obj2);
    } else {
      const obj3 = { months: null };
      obj3[0] = num;
      formatToPlainString2Result = formatToPlainString2(t2["4SEnCZ"], obj3);
    }
    return formatToPlainString2Result;
  } else if (tmp2.YEAR === MONTH) {
    const intl = getSystemLocale.intl;
    const formatToPlainString = intl.formatToPlainString;
    t = getSystemLocale.t;
    if (flag) {
      const obj4 = { years: null };
      obj4[0] = num;
      let formatToPlainStringResult = formatToPlainString(t["h+63yl"], obj4);
    } else {
      obj = { years: null };
      obj[0] = num;
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
export const formatTrialCtaIntervalDurationFromTrialOffer = function formatTrialCtaIntervalDurationFromTrialOffer(subscription_trial) {
  if (null != subscription_trial) {
    if (null != subscription_trial.subscription_trial) {
      if (subscription_trial.subscription_trial.sku_id === arg1) {
        const obj = { intervalType: null, intervalCount: null };
        ({ interval: obj[0], interval_count: obj[1] } = subscription_trial.subscription_trial);
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
        const intl4 = getSystemLocale.intl;
        const formatToPlainString4 = intl4.formatToPlainString;
        let t = getSystemLocale.t;
        if (flag) {
          t = { weeks: null };
          num2 = num / num2;
          t[0] = num2;
          let formatToPlainString4Result = formatToPlainString4(t.iVZYyl, t);
        } else {
          let obj = { weeks: null };
          obj[0] = num / num2;
          formatToPlainString4Result = formatToPlainString4(t.EmoBD2, obj);
        }
      }
    }
    const intl3 = getSystemLocale.intl;
    const formatToPlainString3 = intl3.formatToPlainString;
    const t3 = getSystemLocale.t;
    if (flag) {
      obj = { days: null };
      obj[0] = num;
      let formatToPlainString3Result = formatToPlainString3(t3.jzH70Z, obj);
    } else {
      const obj1 = { days: null };
      obj1[0] = num;
      formatToPlainString3Result = formatToPlainString3(t3["k2UNz+"], obj1);
    }
    return formatToPlainString3Result;
  } else if (tmp2.MONTH === MONTH) {
    const intl2 = getSystemLocale.intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    const t2 = getSystemLocale.t;
    if (flag) {
      const obj2 = { months: null };
      obj2[0] = num;
      let formatToPlainString2Result = formatToPlainString2(t2.erUSmA, obj2);
    } else {
      const obj3 = { months: null };
      obj3[0] = num;
      formatToPlainString2Result = formatToPlainString2(t2.kridzK, obj3);
    }
    return formatToPlainString2Result;
  } else if (tmp2.YEAR === MONTH) {
    const intl = getSystemLocale.intl;
    const formatToPlainString = intl.formatToPlainString;
    t = getSystemLocale.t;
    if (flag) {
      const obj4 = { years: null };
      obj4[0] = num;
      let formatToPlainStringResult = formatToPlainString(t.IfYQVC, obj4);
    } else {
      obj = { years: null };
      obj[0] = num;
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
    if (tmp.APPLE_ADVANCED_COMMERCE !== paymentGateway) {
      if (tmp.APPLE !== paymentGateway) {
        if (tmp.GOOGLE === paymentGateway) {
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
  let isPremiumResult = isPremiumAtLeast.isPremium(currentUser);
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
  const items = [reset];
  const stateFromStores = initialize.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const obj = initialize;
  const items1 = [mergeGuildAvatar];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => currentUser.getCurrentUser());
  const obj2 = initialize;
  let isPremiumResult = isPremiumAtLeast.isPremium(stateFromStores1);
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
export const getItemsFromNewAdditionalPlans = function getItemsFromNewAdditionalPlans(renewalMutations) {
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
  const found = items.find((planId) => set.has(planId.planId));
  if (null != found) {
    items1.push(found);
  }
  const items2 = [...arg1];
  items1.push.apply(items2);
  return items1.map((planId) => {
    for (const item10008 of tmp) {
      if (arg0.planId === item10008.planId) {
        let obj = {};
        let tmp3 = item10008;
        let tmp4 = obj;
        let merged = Object.assign(tmp2);
        let tmp6 = obj;
        let tmp7 = arg0;
        let merged1 = Object.assign(arg0);
        let tmp9 = obj;
        obj.return();
        return obj;
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
  return getItemsWithUpsertedPlanIdForGroup(renewalMutations, basePlanId, 1, closure_32);
};
export const getItemsWithUpsertedPremiumGuildPlan = function getItemsWithUpsertedPremiumGuildPlan(renewalMutations, arg1, basePlanId) {
  return getItemsWithUpsertedPlanIdForGroup(renewalMutations, basePlanId, arg1, closure_31);
};
export const coerceExistingItemsToNewItemInterval = function coerceExistingItemsToNewItemInterval(c0) {
  let found = c0.find((arg0) => !("id" in arg0));
  if (found == null) {
    found = c0.find((planId) => set.has(planId.planId));
  }
  let mapped = c0;
  if (null != found) {
    let value = store2.get(found.planId);
    const importDefault = value;
    00038__(null != value, "Missing plan");
    mapped = c0.map((planId) => {
      if (planId === found) {
        return planId;
      } else {
        const value = outer1_9.get(planId.planId);
        value(outer1_2[16])(null != value, "Missing plan");
        if (value.interval === value.interval) {
          if (tmp11.intervalCount === value.intervalCount) {
            return planId;
          }
        }
        const forSkuAndInterval = outer1_9.getForSkuAndInterval(value.skuId, tmp11.interval, tmp11.intervalCount);
        value(outer1_2[16])(null != forSkuAndInterval, "Missing planForInterval");
        const obj = {};
        const merged = Object.assign(planId);
        obj.planId = forSkuAndInterval.id;
        return obj;
      }
    });
  }
  return mapped;
};
export const getMaxFileSizeForPremiumType = function getMaxFileSizeForPremiumType(TIER_0, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = { useSpace: true };
  }
  obj = { useKibibytes: true, useSpace: obj.useSpace };
  return formatSize.formatSize(table3[TIER_0].fileSize / 1024, obj);
};
export { getGuildBoostPlanItem };
export { isBoostOnlySubscription };
export { getPremiumSkuIdForSubscription };
export { getPremiumTypeFromSubscription };
export { isNewUser };
export { formatPriceString };
export { castPremiumSubscriptionAsSkuId };
export const getPremiumTypeFromPlanId = function getPremiumTypeFromPlanId(closure_0) {
  if (SubscriptionPlans.PREMIUM_MONTH_TIER_0 === closure_0) {
    let obj = { premiumType: null, planInterval: null };
    obj[0] = closure_39.TIER_0;
    obj[1] = constants7.MONTH;
    return obj;
  } else if (tmp.PREMIUM_YEAR_TIER_0 === closure_0) {
    obj = { premiumType: null, planInterval: null };
    obj[0] = closure_39.TIER_0;
    obj[1] = constants7.YEAR;
    return obj;
  } else {
    if (tmp.PREMIUM_MONTH_TIER_2 !== closure_0) {
      if (tmp.PREMIUM_GROUP_MONTH !== closure_0) {
        if (tmp.PREMIUM_YEAR_TIER_2 === closure_0) {
          obj = { premiumType: null, planInterval: null };
          obj[0] = closure_39.TIER_2;
          obj[1] = constants7.YEAR;
          return obj;
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("Unsupported gifting planId: " + closure_0);
          throw error;
        }
      }
    }
    const obj1 = { premiumType: null, planInterval: null };
    obj1[0] = closure_39.TIER_2;
    obj1[1] = constants7.MONTH;
    return obj1;
  }
};
export const isNitroLockedState = function isNitroLockedState(arg0) {
  return "isNitroLocked" in arg0;
};
export const isPremiumAtLeast = require("isPremiumAtLeast").isPremiumAtLeast;
export const isPremiumAtMost = require("isPremiumAtLeast").isPremiumAtMost;
export const isPremium = require("isPremiumAtLeast").isPremium;
export const isPremiumExactly = require("isPremiumAtLeast").isPremiumExactly;
export const useHasTier2Premium = function useHasTier2Premium() {
  const items = [mergeGuildAvatar];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = initialize;
  return isPremiumAtLeast.isPremiumExactly(stateFromStores, closure_39.TIER_2);
};
export const getOfferNoticeThreshold = function getOfferNoticeThreshold(trial_id) {
  let tmp2 = null != trial_id;
  if (tmp2) {
    tmp2 = "trial_id" in trial_id;
  }
  if (tmp2) {
    trial_id = trial_id.trial_id;
    if (closure_35 === trial_id) {
      return closure_45;
    } else if (closure_36 === trial_id) {
      return closure_44;
    } else {
      return tmp;
    }
  } else {
    let tmp3 = null != trial_id;
    if (tmp3) {
      tmp3 = "discountId" in trial_id;
    }
    return tmp;
  }
};
export const isTrialOffer = function isTrialOffer(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = "trial_id" in arg0;
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
  return flatMapResult.reduce((arg0, arg1) => {
    const tmp = callback(table[arg1], 2);
    const first = tmp[0];
    let num = 1;
    if (constants.HOUR !== first) {
      num = 1;
      if (constants.DAY === first) {
        num = 24;
      }
    }
    return arg0 + num * tmp[1];
  }, 0);
};
export { getMonthlyPrice };
export const getSavingsPercent = function getSavingsPercent(subscriptionPlan) {
  subscriptionPlan = subscriptionPlan.subscriptionPlan;
  let tmp3 = table[subscriptionPlan.planId];
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