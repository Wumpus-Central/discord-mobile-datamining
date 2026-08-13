// discord_app/modules/premium/native/PremiumBundledPlansUtils.tsx
import _slicedToArray from "_slicedToArray";
import GuildFeatures from "GuildFeatures";
import { SubscriptionPlans } from "ProductIds.android.tsx";

let c3;
let c4;
let c5;
let closure_6;
let require = arg1;
function getPremiumBundledItemsFromProductId(productId) {
  if (productId in SubscriptionPlans.AppStorePremiumProductIdsToPremiumBundledItems) {
    return tmp(5902).AppStorePremiumProductIdsToPremiumBundledItems[productId];
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Invalid bundled product ID " + productId);
    throw error;
  }
  tmp = require;
}
function isValidBundleProductId(productIdFromSubscription) {
  let tmp = null != productIdFromSubscription;
  if (tmp) {
    tmp = productIdFromSubscription in SubscriptionPlans.AppStorePremiumProductIdsToPremiumBundledItems;
  }
  return tmp;
}
function getSubscriptionItemsForProduct(productId) {
  if (isValidBundleProductId(productId)) {
    const tmp7 = getPremiumBundledItemsFromProductId(productId);
    const items = [];
    if (tmp7.basePlanId !== constants2.NONE_MONTH) {
      let obj = { planId: null, quantity: 1 };
      obj[0] = tmp7.basePlanId;
      items.push(obj);
    }
    const additionalPlans = tmp7.additionalPlans;
    for (const item10028 of additionalPlans) {
      obj = { planId: null, quantity: null };
      ({ planId: obj2[0], quantity: obj2[1] } = item10028);
      let arr = items.push(obj);
      continue;
    }
    return items;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Invalid product " + productId);
    throw error;
  }
}
function aggregateQuantitiesByPlanId(subscriptionItemsForProduct) {
  let planId;
  let quantity;
  const map = new Map();
  const iter = subscriptionItemsForProduct[Symbol.iterator]();
  while (iter !== undefined) {
    ({ planId, quantity } = nextResult);
    let num = map.get(planId);
    if (num == null) {
      num = 0;
    }
    let tmp2 = quantity;
    let result = map.set(planId, num + quantity);
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
      let tmp5 = callback;
      let tmp6 = callback(tmp3, 2);
      if (size2.get(tmp6[0]) !== tmp6[1]) {
        let tmp7 = obj;
        obj.return();
        let flag = false;
        return false;
      }
    }
    return true;
  }
}
function getProductIdFromSubscriptionItems(subscriptionItemsForProduct) {
  const keys = Object.keys(SubscriptionPlans.AppStorePremiumProductIdsToPremiumBundledItems);
  for (const item10018 of keys) {
    let tmp3 = item10018;
    let tmp4 = planQuantityMapsEqual;
    let tmp5 = aggregateQuantitiesByPlanId;
    let tmp6 = getSubscriptionItemsForProduct;
    if (planQuantityMapsEqual(tmp, aggregateQuantitiesByPlanId(getSubscriptionItemsForProduct(item10018)))) {
      let tmp7 = obj;
      obj.return();
      return item10018;
    }
  }
  const error = new Error("No App Store bundled product matches the subscription items");
  throw error;
}
({ PREMIUM_GUILD_SUBSCRIPTION_PLANS: c3, PremiumTypes: c4, SubscriptionIntervalTypes: c5, SubscriptionPlans: closure_6 } = GuildFeatures);
let result = require("SubscriptionPlans").fileFinishedImporting("modules/premium/native/PremiumBundledPlansUtils.tsx");

export const getPremiumBundlesWithPredicate = function getPremiumBundlesWithPredicate(fn) {
  const values = Object.values(SubscriptionPlans.AppStorePremiumProductIdsToPremiumBundledItems);
  return values.filter(fn);
};
export const getPremiumBundleWithPredicate = function getPremiumBundleWithPredicate(closure_4) {
  const values = Object.values(SubscriptionPlans.AppStorePremiumProductIdsToPremiumBundledItems);
  return values.find(closure_4);
};
export { getPremiumBundledItemsFromProductId };
export const getToggledIntervalProduct = function getToggledIntervalProduct(productId) {
  if (productId in SubscriptionPlans.AppStorePremiumProductIdsToPremiumBundledItems) {
    const tmp8 = tmp(5902).AppStorePremiumProductIdsToPremiumBundledItems[productId];
    require = tmp8;
    let tmp11 = null;
    if (tmp8.premiumTier !== closure_4.TIER_1) {
      const _Object = Object;
      const values = Object.values(tmp(5902).AppStorePremiumProductIdsToPremiumBundledItems);
      const found = values.find((numPremiumGuild) => numPremiumGuild.numPremiumGuild === _undefined.numPremiumGuild && numPremiumGuild.premiumTier === _undefined.premiumTier && numPremiumGuild.interval !== _undefined.interval && !numPremiumGuild.isDeprecated);
      productId = undefined;
      if (found != null) {
        productId = found.productId;
      }
      tmp11 = productId;
    }
    return tmp11;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Invalid bundled product ID " + productId);
    throw error;
  }
};
export const getProductIdsForBothIntervals = function getProductIdsForBothIntervals(productIdFromSubscription) {
  if (productIdFromSubscription in _SubscriptionPlans.AppStorePremiumProductIdsToPremiumBundledItems) {
    const tmp8 = tmp(5902).AppStorePremiumProductIdsToPremiumBundledItems[productIdFromSubscription];
    _require = undefined;
    if (productIdFromSubscription in tmp(5902).AppStorePremiumProductIdsToPremiumBundledItems) {
      const tmp14 = tmp(5902).AppStorePremiumProductIdsToPremiumBundledItems[productIdFromSubscription];
      _require = tmp14;
      let tmp17 = null;
      if (tmp14.premiumTier !== closure_4.TIER_1) {
        const _Object = Object;
        const values = Object.values(tmp(5902).AppStorePremiumProductIdsToPremiumBundledItems);
        const found = values.find((numPremiumGuild) => numPremiumGuild.numPremiumGuild === _undefined.numPremiumGuild && numPremiumGuild.premiumTier === _undefined.premiumTier && numPremiumGuild.interval !== _undefined.interval && !numPremiumGuild.isDeprecated);
        let productId;
        if (found != null) {
          productId = found.productId;
        }
        tmp17 = productId;
      }
      if (null == tmp17) {
        let obj = { monthly: null, yearly: null };
        obj[0] = productIdFromSubscription;
      } else {
        let tmp22 = tmp17;
        if (tmp8.interval === constants.MONTH) {
          tmp22 = productIdFromSubscription;
        }
        obj = { monthly: null, yearly: null };
        obj[0] = tmp22;
        if (tmp8.interval === tmp21.YEAR) {
          tmp17 = productIdFromSubscription;
        }
        obj[1] = tmp17;
        tmp21 = constants;
      }
      return obj;
    } else {
      const _Error2 = Error;
      const _HermesInternal2 = HermesInternal;
      const error = new Error("Invalid bundled product ID " + productIdFromSubscription);
      throw error;
    }
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error1 = new Error("Invalid bundled product ID " + productIdFromSubscription);
    throw error1;
  }
};
export const productsHaveSamePerks = function productsHaveSamePerks(productId, arg1) {
  let tmp = null != productId;
  if (tmp) {
    tmp = productId in SubscriptionPlans.AppStorePremiumProductIdsToPremiumBundledItems;
  }
  if (tmp) {
    let tmp4 = null != arg1;
    if (tmp4) {
      tmp4 = arg1 in SubscriptionPlans.AppStorePremiumProductIdsToPremiumBundledItems;
    }
    if (tmp4) {
      if (null != productId) {
        if (null != arg1) {
          if (productId === arg1) {
            return true;
          } else if (productId in SubscriptionPlans.AppStorePremiumProductIdsToPremiumBundledItems) {
            const tmp12 = tmp20(5902).AppStorePremiumProductIdsToPremiumBundledItems[productId];
            if (arg1 in tmp20(5902).AppStorePremiumProductIdsToPremiumBundledItems) {
              const tmp18 = tmp20(5902).AppStorePremiumProductIdsToPremiumBundledItems[arg1];
              return tmp12.numPremiumGuild === tmp18.numPremiumGuild && tmp12.premiumTier === tmp18.premiumTier;
            } else {
              const _Error2 = Error;
              const _HermesInternal2 = HermesInternal;
              const error = new Error("Invalid bundled product ID " + arg1);
              throw error;
            }
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error1 = new Error("Invalid bundled product ID " + productId);
            throw error1;
          }
        }
      }
      return productId === arg1;
    }
  }
  return productId === arg1;
};
export { isValidBundleProductId };
export const shouldAlwaysExcludeFromPlanSelect = function shouldAlwaysExcludeFromPlanSelect(isDeprecated, flag2) {
  let flag = flag2;
  if (flag2 === undefined) {
    flag = false;
  }
  isDeprecated = isDeprecated.isDeprecated;
  if (!isDeprecated) {
    let tmp2 = !flag;
    if (!flag) {
      tmp2 = isDeprecated.interval === constants.YEAR;
    }
    isDeprecated = tmp2;
  }
  return isDeprecated;
};
export const excludeNitroOnlyPlansForActiveTrial = function excludeNitroOnlyPlansForActiveTrial(premiumTier) {
  let tmp = null != premiumTier.premiumTier;
  if (tmp) {
    tmp = 0 === premiumTier.numPremiumGuild;
  }
  return !tmp;
};
export { getSubscriptionItemsForProduct };
export const getModifySubscriptionItemsForProduct = function getModifySubscriptionItemsForProduct(productId, closure_0) {
  if (productId in found(5902).AppStorePremiumProductIdsToPremiumBundledItems) {
    const tmp8 = tmp(5902).AppStorePremiumProductIdsToPremiumBundledItems[productId];
    if (null != tmp8.premiumTier) {
      let tmpResult = tmp(4007);
      if (tmpResult.isBoostOnlySubscription(closure_0)) {
        tmpResult = tmp(4007);
        const itemsWithUpsertedPremiumPlanId = tmpResult.getItemsWithUpsertedPremiumPlanId(closure_0, tmp8.basePlanId);
        const reversed = itemsWithUpsertedPremiumPlanId.reverse();
        const additionalPlans = tmp8.additionalPlans;
        found = additionalPlans.find((planId) => set.has(planId.planId));
        let mapped = reversed;
        if (null != found) {
          mapped = reversed.map((planId) => {
            let tmp = planId;
            if (outer1_3.has(planId.planId)) {
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
    const error = new Error("Invalid bundled product ID " + productId);
    throw error;
  }
};
export const makeExternalPaymentGatewayPlanIdOrThrow = function makeExternalPaymentGatewayPlanIdOrThrow(arg0) {
  if (null == arg0) {
    const _Error2 = Error;
    const error = new Error("Invalid null plan ID");
    throw error;
  } else {
    let tmp3 = null != arg0;
    if (tmp3) {
      tmp3 = arg0 in SubscriptionPlans.AppStorePremiumProductIdsToPremiumBundledItems;
    }
    if (tmp3) {
      return arg0;
    } else {
      const text = `${arg0}.1`;
      if (`${arg0}.1` in SubscriptionPlans.AppStorePremiumProductIdsToPremiumBundledItems) {
        return `${arg0}.1`;
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error1 = new Error("Invalid plan ID " + arg0);
        throw error1;
      }
    }
  }
};
export { getProductIdFromSubscriptionItems };
export const getProductIdFromSubscription = function getProductIdFromSubscription(subscription, arg1) {
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
    let tmp20Result = getProductIdFromSubscriptionItems(items1);
    const tmp20 = getProductIdFromSubscriptionItems;
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
      const error = new Error("Invalid null plan ID");
      throw error;
    } else {
      let tmp5 = null != paymentGatewayPlanId1;
      if (tmp5) {
        tmp5 = paymentGatewayPlanId1 in SubscriptionPlans.AppStorePremiumProductIdsToPremiumBundledItems;
      }
      tmp20Result = paymentGatewayPlanId1;
      if (!tmp5) {
        const text = `${tmp}.1`;
        tmp20Result = text;
        if (!(`${tmp}.1` in SubscriptionPlans.AppStorePremiumProductIdsToPremiumBundledItems)) {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error1 = new Error("Invalid plan ID " + paymentGatewayPlanId1);
          throw error1;
        }
      }
    }
  }
  return tmp20Result;
};