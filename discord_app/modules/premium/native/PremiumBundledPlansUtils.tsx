// === Module 7409: PremiumBundledPlansUtils ===

// Module 7409 (PremiumBundledPlansUtils)
import ProductIds from "ProductIds" /* 7240 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
function getPremiumBundledItemsFromProductId(toggledIntervalProduct) {
  if (toggledIntervalProduct in ProductIds.AppStorePremiumProductIdsToPremiumBundledItems) {
    return ProductIds.AppStorePremiumProductIdsToPremiumBundledItems[toggledIntervalProduct];
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Invalid bundled product ID " + toggledIntervalProduct);
    throw error;
  }
}
function isValidBundleProductId(productIdFromSubscription) {
  let tmp = null != productIdFromSubscription;
  if (tmp) {
    tmp = productIdFromSubscription in ProductIds.AppStorePremiumProductIdsToPremiumBundledItems;
  }
  return tmp;
}
function getSubscriptionItemsForProduct(productId) {
  if (isValidBundleProductId(productId)) {
    const tmp7 = getPremiumBundledItemsFromProductId(productId);
    const items = [];
    if (tmp7.basePlanId !== constants2.NONE_MONTH) {
      let obj = { planId: tmp7.basePlanId, quantity: 1 };
      items.push(obj);
    }
    const additionalPlans = tmp7.additionalPlans;
    for (const item10028 of additionalPlans) {
      obj = { planId: null, quantity: null };
      ({ planId: obj2.planId, quantity: obj2.quantity } = item10028);
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
  const map = new Map();
  const iter = subscriptionItemsForProduct[Symbol.iterator]();
  while (iter !== undefined) {
    ({ planId, quantity } = nextResult);
    let num = map.get(planId);
    if (num == null) {
      num = 0;
    }
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
const PremiumConstants = fn(1373);
({ PREMIUM_GUILD_SUBSCRIPTION_PLANS: c3, PremiumTypes: closure_4, SubscriptionIntervalTypes: hasOwnProperty, SubscriptionPlans: metroRequire } = PremiumConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/PremiumBundledPlansUtils.tsx");

export const getPremiumBundlesWithPredicate = function getPremiumBundlesWithPredicate(fn) {
  const values = Object.values(ProductIds.AppStorePremiumProductIdsToPremiumBundledItems);
  return values.filter(fn);
};
export const getPremiumBundleWithPredicate = function getPremiumBundleWithPredicate(_messages) {
  const values = Object.values(ProductIds.AppStorePremiumProductIdsToPremiumBundledItems);
  return values.find(_messages);
};
export { getPremiumBundledItemsFromProductId };
export const getToggledIntervalProduct = function getToggledIntervalProduct(productId) {
  if (productId in ProductIds.AppStorePremiumProductIdsToPremiumBundledItems) {
    const tmp8 = ProductIds.AppStorePremiumProductIdsToPremiumBundledItems[productId];
    closure_0 = tmp8;
    let tmp11 = null;
    if (tmp8.premiumTier !== React4.TIER_1) {
      const _Object = Object;
      const values = Object.values(ProductIds.AppStorePremiumProductIdsToPremiumBundledItems);
      const found = values.find((numPremiumGuild) => numPremiumGuild.numPremiumGuild === numPremiumGuild.numPremiumGuild && numPremiumGuild.premiumTier === numPremiumGuild.premiumTier && numPremiumGuild.interval !== numPremiumGuild.interval && !numPremiumGuild.isDeprecated);
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
export const getProductIdsForBothIntervals = function getProductIdsForBothIntervals(monthly) {
  if (monthly in ProductIds.AppStorePremiumProductIdsToPremiumBundledItems) {
    const tmp8 = ProductIds.AppStorePremiumProductIdsToPremiumBundledItems[monthly];
    let numPremiumGuild;
    if (monthly in ProductIds.AppStorePremiumProductIdsToPremiumBundledItems) {
      const tmp14 = ProductIds.AppStorePremiumProductIdsToPremiumBundledItems[monthly];
      numPremiumGuild = tmp14;
      let tmp17 = null;
      if (tmp14.premiumTier !== React4.TIER_1) {
        const _Object = Object;
        const values = Object.values(ProductIds.AppStorePremiumProductIdsToPremiumBundledItems);
        const found = values.find((numPremiumGuild) => numPremiumGuild.numPremiumGuild === numPremiumGuild.numPremiumGuild && numPremiumGuild.premiumTier === numPremiumGuild.premiumTier && numPremiumGuild.interval !== numPremiumGuild.interval && !numPremiumGuild.isDeprecated);
        let productId;
        if (found != null) {
          productId = found.productId;
        }
        tmp17 = productId;
      }
      if (null == tmp17) {
        let obj = { monthly, yearly: null };
      } else {
        let tmp22 = tmp17;
        if (tmp8.interval === constants.MONTH) {
          tmp22 = monthly;
        }
        obj = { monthly: tmp22, yearly: null };
        if (tmp8.interval === constants.YEAR) {
          tmp17 = monthly;
        }
        obj.yearly = tmp17;
      }
      return obj;
    } else {
      const _Error2 = Error;
      const _HermesInternal2 = HermesInternal;
      const error = new Error("Invalid bundled product ID " + monthly);
      throw error;
    }
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error1 = new Error("Invalid bundled product ID " + monthly);
    throw error1;
  }
};
export const productsHaveSamePerks = function productsHaveSamePerks(productId, productIdFromSubscription) {
  let tmp = null != productId;
  if (tmp) {
    tmp = productId in ProductIds.AppStorePremiumProductIdsToPremiumBundledItems;
  }
  if (tmp) {
    let tmp4 = null != productIdFromSubscription;
    if (tmp4) {
      tmp4 = productIdFromSubscription in ProductIds.AppStorePremiumProductIdsToPremiumBundledItems;
    }
    if (tmp4) {
      if (null != productId) {
        if (null != productIdFromSubscription) {
          if (productId === productIdFromSubscription) {
            return true;
          } else if (productId in ProductIds.AppStorePremiumProductIdsToPremiumBundledItems) {
            const tmp12 = ProductIds.AppStorePremiumProductIdsToPremiumBundledItems[productId];
            if (productIdFromSubscription in ProductIds.AppStorePremiumProductIdsToPremiumBundledItems) {
              const tmp18 = ProductIds.AppStorePremiumProductIdsToPremiumBundledItems[productIdFromSubscription];
              return tmp12.numPremiumGuild === tmp18.numPremiumGuild && tmp12.premiumTier === tmp18.premiumTier;
            } else {
              const _Error2 = Error;
              const _HermesInternal2 = HermesInternal;
              const error = new Error("Invalid bundled product ID " + productIdFromSubscription);
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
export const getModifySubscriptionItemsForProduct = function getModifySubscriptionItemsForProduct(productId, subscription) {
  if (productId in found(7240).AppStorePremiumProductIdsToPremiumBundledItems) {
    const tmp8 = tmp(7240).AppStorePremiumProductIdsToPremiumBundledItems[productId];
    if (null != tmp8.premiumTier) {
      let tmpResult = tmp(4218);
      if (tmpResult.isBoostOnlySubscription(subscription)) {
        tmpResult = tmp(4218);
        const itemsWithUpsertedPremiumPlanId = tmpResult.getItemsWithUpsertedPremiumPlanId(subscription, tmp8.basePlanId);
        const reversed = itemsWithUpsertedPremiumPlanId.reverse();
        const additionalPlans = tmp8.additionalPlans;
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
      tmp3 = arg0 in ProductIds.AppStorePremiumProductIdsToPremiumBundledItems;
    }
    if (tmp3) {
      return arg0;
    } else {
      const text = `${arg0}.1`;
      if (`${arg0}.1` in ProductIds.AppStorePremiumProductIdsToPremiumBundledItems) {
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
        tmp5 = paymentGatewayPlanId1 in ProductIds.AppStorePremiumProductIdsToPremiumBundledItems;
      }
      tmp20Result = paymentGatewayPlanId1;
      if (!tmp5) {
        const text = `${tmp}.1`;
        tmp20Result = text;
        if (!(`${tmp}.1` in ProductIds.AppStorePremiumProductIdsToPremiumBundledItems)) {
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