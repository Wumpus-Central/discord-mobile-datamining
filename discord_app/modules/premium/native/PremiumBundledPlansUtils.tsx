// discord_app/modules/premium/native/PremiumBundledPlansUtils.tsx
import ProductIds from "ProductIds.android.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import PremiumConstants from "../PremiumConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let map, set;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
const f93595 = (numPremiumGuild) =>
  numPremiumGuild.numPremiumGuild === numPremiumGuild.numPremiumGuild &&
  numPremiumGuild.premiumTier === numPremiumGuild.premiumTier &&
  numPremiumGuild.interval !== numPremiumGuild.interval &&
  !numPremiumGuild.isDeprecated;
function getPremiumBundledItemsFromProductId(paymentGatewayPlanId) {
  if (paymentGatewayPlanId in ProductIds.AppStorePremiumProductIdsToPremiumBundledItems) {
    return ProductIds.AppStorePremiumProductIdsToPremiumBundledItems[paymentGatewayPlanId];
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("Invalid bundled product ID " + paymentGatewayPlanId);
    throw error;
  }
}
function isValidBundleProductId(productIdFromSubscription) {
  const tmp =
    null != productIdFromSubscription &&
    productIdFromSubscription in ProductIds.AppStorePremiumProductIdsToPremiumBundledItems;
  return tmp;
}
function getSubscriptionItemsForProduct(productId) {
  if (isValidBundleProductId(productId)) {
    const tmp5 = getPremiumBundledItemsFromProductId(productId);
    const items = [];
    if (tmp5.basePlanId !== metroRequire.NONE_MONTH) {
      const obj = { planId: tmp5.basePlanId, quantity: 1 };
      items.push(obj);
    }
    const additionalPlans = tmp5.additionalPlans;
    for (const item10028 of additionalPlans) {
      let obj3 = { planId: null, quantity: null };
      ({ planId: obj2.planId, quantity: obj2.quantity } = item10028);
      let arr3 = items.push(obj3);
      continue;
    }
    return items;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("Invalid product " + productId);
    throw error;
  }
}
function aggregateQuantitiesByPlanId(subscriptionItemsForProduct) {
  let planId;
  let quantity;
  map = new Map();
  const iter = subscriptionItemsForProduct[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    ({ planId, quantity } = nextResult);
    set = map.set;
    let num = map.get(planId);
    if (num == null) {
      num = 0;
    }
    let result = set(planId, num + quantity);
    continue;
  }
  return map;
}
function planQuantityMapsEqual(size, size2) {
  if (size.size !== size2.size) {
    return false;
  } else {
    const obj = size[Symbol.iterator]();
    while (obj !== undefined) {
      let tmp6 = _slicedToArray(tmp3, 2);
      if (size2.get(tmp6[0]) !== tmp6[1]) {
        obj.return();
        let flag = false;
        return false;
      }
    }
    return true;
  }
}
function getProductIdFromSubscriptionItems(subscriptionItemsForProduct) {
  const tmp = aggregateQuantitiesByPlanId(subscriptionItemsForProduct);
  const keys = Object.keys(ProductIds.AppStorePremiumProductIdsToPremiumBundledItems);
  for (const item10018 of keys) {
    if (planQuantityMapsEqual(tmp, aggregateQuantitiesByPlanId(getSubscriptionItemsForProduct(item10018)))) {
      obj.return();
      return item10018;
    }
  }
  const error = new Error("No App Store bundled product matches the subscription items");
  throw error;
}
({
  PREMIUM_GUILD_SUBSCRIPTION_PLANS: c3,
  PremiumTypes: closure_4,
  SubscriptionIntervalTypes: hasOwnProperty,
  SubscriptionPlans: metroRequire,
} = PremiumConstants);
let result = size.fileFinishedImporting("modules/premium/native/PremiumBundledPlansUtils.tsx");

export const getPremiumBundlesWithPredicate = function getPremiumBundlesWithPredicate(fn) {
  const values = Object.values(ProductIds.AppStorePremiumProductIdsToPremiumBundledItems);
  return values.filter(fn);
};
export const getPremiumBundleWithPredicate = function getPremiumBundleWithPredicate(cResult) {
  const values = Object.values(ProductIds.AppStorePremiumProductIdsToPremiumBundledItems);
  return values.find(cResult);
};
export { getPremiumBundledItemsFromProductId };
export const getToggledIntervalProduct = function getToggledIntervalProduct(productId) {
  if (productId in ProductIds.AppStorePremiumProductIdsToPremiumBundledItems) {
    const tmp6 = ProductIds.AppStorePremiumProductIdsToPremiumBundledItems[productId];
    let closure_0 = tmp6;
    let tmp9 = null;
    if (tmp6.premiumTier !== React3.TIER_1) {
      const _Object = Object;
      const values = Object.values(ProductIds.AppStorePremiumProductIdsToPremiumBundledItems);
      const found = values.find(f93595);
      productId = undefined;
      if (found != null) {
        productId = found.productId;
      }
      tmp9 = productId;
    }
    return tmp9;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("Invalid bundled product ID " + productId);
    throw error;
  }
};
export const getProductIdsForBothIntervals = function getProductIdsForBothIntervals(monthly) {
  if (monthly in ProductIds.AppStorePremiumProductIdsToPremiumBundledItems) {
    const tmp6 = ProductIds.AppStorePremiumProductIdsToPremiumBundledItems[monthly];
    let closure_0;
    if (monthly in ProductIds.AppStorePremiumProductIdsToPremiumBundledItems) {
      let obj;
      const tmp10 = ProductIds.AppStorePremiumProductIdsToPremiumBundledItems[monthly];
      closure_0 = tmp10;
      let tmp13 = null;
      if (tmp10.premiumTier !== React3.TIER_1) {
        const _Object = Object;
        const values = Object.values(ProductIds.AppStorePremiumProductIdsToPremiumBundledItems);
        const found = values.find(f93595);
        let productId;
        if (found != null) {
          productId = found.productId;
        }
        tmp13 = productId;
      }
      if (null == tmp13) {
        obj = { monthly, yearly: null };
        const obj2 = { monthly, yearly: null };
      } else {
        let tmp18 = tmp13;
        if (tmp6.interval === hasOwnProperty.MONTH) {
          tmp18 = monthly;
        }
        obj = { monthly: tmp18, yearly: tmp13 };
        if (tmp6.interval === hasOwnProperty.YEAR) {
          tmp13 = monthly;
        }
      }
      return obj;
    } else {
      const _Error2 = Error;
      const _HermesInternal2 = HermesInternal;
      const self3 = this;
      const self4 = this;
      const error = new Error("Invalid bundled product ID " + monthly);
      throw error;
    }
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error1 = new Error("Invalid bundled product ID " + monthly);
    throw error1;
  }
};
export const productsHaveSamePerks = function productsHaveSamePerks(productId, productIdFromSubscription) {
  const tmp = null != productId && productId in ProductIds.AppStorePremiumProductIdsToPremiumBundledItems;
  if (tmp) {
    const tmp4 =
      null != productIdFromSubscription &&
      productIdFromSubscription in ProductIds.AppStorePremiumProductIdsToPremiumBundledItems;
    if (tmp4) {
      if (null != productId) {
        if (null != productIdFromSubscription) {
          if (productId === productIdFromSubscription) {
            return true;
          } else if (productId in ProductIds.AppStorePremiumProductIdsToPremiumBundledItems) {
            const tmp10 = ProductIds.AppStorePremiumProductIdsToPremiumBundledItems[productId];
            if (productIdFromSubscription in ProductIds.AppStorePremiumProductIdsToPremiumBundledItems) {
              const tmp14 = ProductIds.AppStorePremiumProductIdsToPremiumBundledItems[productIdFromSubscription];
              return tmp10.numPremiumGuild === tmp14.numPremiumGuild && tmp10.premiumTier === tmp14.premiumTier;
            } else {
              const _Error2 = Error;
              const _HermesInternal2 = HermesInternal;
              const self3 = this;
              const self4 = this;
              const error = new Error("Invalid bundled product ID " + productIdFromSubscription);
              throw error;
            }
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const self = this;
            const self2 = this;
            const error1 = new Error("Invalid bundled product ID " + productId);
            throw error1;
          }
        }
      }
      return productId === productIdFromSubscription;
    }
  }
  return productId === productIdFromSubscription;
};
export { isValidBundleProductId };
export const shouldAlwaysExcludeFromPlanSelect = function shouldAlwaysExcludeFromPlanSelect(isDeprecated) {
  let flag = flag2;
  if (flag2 === undefined) {
    flag = false;
  }
  isDeprecated = isDeprecated.isDeprecated;
  if (!isDeprecated) {
    const tmp2 = !flag && isDeprecated.interval === hasOwnProperty.YEAR;
    isDeprecated = tmp2;
  }
  return isDeprecated;
};
export const excludeNitroOnlyPlansForActiveTrial = function excludeNitroOnlyPlansForActiveTrial(premiumTier) {
  return !(null != premiumTier.premiumTier && 0 === premiumTier.numPremiumGuild);
};
export { getSubscriptionItemsForProduct };
export const getModifySubscriptionItemsForProduct = function getModifySubscriptionItemsForProduct(
  productId,
  subscription,
) {
  let found;
  let tmp = found;
  if (productId in found(6742).AppStorePremiumProductIdsToPremiumBundledItems) {
    const tmp6 = tmp(6742).AppStorePremiumProductIdsToPremiumBundledItems[productId];
    if (null != tmp6.premiumTier) {
      const tmpResult = tmp(4528);
      if (tmpResult.isBoostOnlySubscription(subscription)) {
        const tmpResult2 = tmp(4528);
        const itemsWithUpsertedPremiumPlanId = tmpResult2.getItemsWithUpsertedPremiumPlanId(
          subscription,
          tmp6.basePlanId,
        );
        const reversed = itemsWithUpsertedPremiumPlanId.reverse();
        const additionalPlans = tmp6.additionalPlans;
        found = additionalPlans.find((planId) => set.has(planId.planId));
        let mapped = reversed;
        if (null != found) {
          mapped = reversed.map((planId) => {
            let tmp = planId;
            if (set.has(planId.planId)) {
              const obj = {};
              const merged = Object.assign(planId);
              ({ planId: obj.planId, quantity: obj.quantity } = found);
              tmp = obj;
            }
            return tmp;
          });
        }
        return mapped;
      }
    }
    return getSubscriptionItemsForProduct(productId);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("Invalid bundled product ID " + productId);
    throw error;
  }
};
export const makeExternalPaymentGatewayPlanIdOrThrow = function makeExternalPaymentGatewayPlanIdOrThrow(arg0) {
  if (null == arg0) {
    const _Error2 = Error;
    const self3 = this;
    const self4 = this;
    const error = new Error("Invalid null plan ID");
    throw error;
  } else {
    const tmp3 = null != arg0 && arg0 in ProductIds.AppStorePremiumProductIdsToPremiumBundledItems;
    if (tmp3) {
      return arg0;
    } else {
      const text = `${arg0}.1`;
      if (`${arg0}.1` in ProductIds.AppStorePremiumProductIdsToPremiumBundledItems) {
        return `${arg0}.1`;
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const error1 = new Error("Invalid plan ID " + arg0);
        throw error1;
      }
    }
  }
};
export { getProductIdFromSubscriptionItems };
export const getProductIdFromSubscription = function getProductIdFromSubscription(subscription, arg1) {
  let tmp16Result;
  if (subscription.isACOM) {
    let items1 = null;
    if (arg1) {
      const renewalMutations2 = subscription.renewalMutations;
      let items;
      if (renewalMutations2 != null) {
        items = renewalMutations2.items;
      }
      items1 = items;
    }
    if (items1 == null) {
      items1 = subscription.items;
    }
    tmp16Result = getProductIdFromSubscriptionItems(items1);
  } else {
    let paymentGatewayPlanId1 = null;
    if (arg1) {
      const renewalMutations = subscription.renewalMutations;
      let paymentGatewayPlanId;
      if (renewalMutations != null) {
        paymentGatewayPlanId = renewalMutations.paymentGatewayPlanId;
      }
      paymentGatewayPlanId1 = paymentGatewayPlanId;
    }
    if (paymentGatewayPlanId1 == null) {
      paymentGatewayPlanId1 = subscription.paymentGatewayPlanId;
    }
    if (null == paymentGatewayPlanId1) {
      const _Error2 = Error;
      const self3 = this;
      const self4 = this;
      const error = new Error("Invalid null plan ID");
      throw error;
    } else {
      tmp16Result = paymentGatewayPlanId1;
      const tmp5 =
        null != paymentGatewayPlanId1 &&
        paymentGatewayPlanId1 in ProductIds.AppStorePremiumProductIdsToPremiumBundledItems;
      if (!tmp5) {
        const text = `${tmp}.1`;
        tmp16Result = text;
        if (!(`${tmp}.1` in ProductIds.AppStorePremiumProductIdsToPremiumBundledItems)) {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const self = this;
          const self2 = this;
          const error1 = new Error("Invalid plan ID " + paymentGatewayPlanId1);
          throw error1;
        }
      }
    }
  }
  return tmp16Result;
};
