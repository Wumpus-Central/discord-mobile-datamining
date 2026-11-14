// discord_app/modules/collectibles/utils/CollectiblesPromoPriceUtils.tsx
import StorefrontTypes from "../../storefront/StorefrontTypes.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import SKUPricesStore from "../../storefront/SKUPricesStore.tsx";
import StorefrontPromotionStore from "../../storefront/StorefrontPromotionStore.tsx";

require = fn;
function getListedPromotions(pricingPromotionIds, promotions) {
  items = pricingPromotionIds;
  closure_0 = promotions;
  if (pricingPromotionIds == null) {
    items = [];
  }
  return items.map((item) => {
    closure_0 = item;
    let found;
    if (stateFromStores2 != null) {
      found = stateFromStores2.find((id) => id.id === closure_0);
    }
    return found;
  });
}
function getNextStorefrontPromotionBoundary(pricingPromotionIds) {
  let tmp2 = null;
  for (const item10015 of tmp3) {
    let time;
    if (item10015 != null) {
      let startsAt = item10015.startsAt;
      if (startsAt != null) {
        time = startsAt.getTime();
      }
    }
    items = [time];
    let time1;
    if (item10015 != null) {
      let endsAt = item10015.endsAt;
      if (endsAt != null) {
        time1 = endsAt.getTime();
      }
    }
    items[1] = time1;
    for (const item10033 of items) {
      let tmp11 = null != item10033;
      if (tmp11) {
        tmp11 = item10033 > tmp;
      }
      if (tmp11) {
        let tmp14 = null == tmp2;
        if (!tmp14) {
          tmp14 = item10033 < tmp2;
        }
        tmp11 = tmp14;
      }
      if (tmp11) {
        tmp2 = item10033;
      }
      continue;
    }
    continue;
  }
  return tmp2;
}
const Constants = fn(1072);
({ COLLECTIBLES_APPLICATION_ID: closure_6, CurrencyCodes: metroImportDefault, PriceTypes: closure_8 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/utils/CollectiblesPromoPriceUtils.tsx");

export function getCollectiblesPromoPrice(arg0) {
  ({ storefrontPrices, nonPromoPrice } = arg0);
  if (storefrontPrices != null) {
    const tmp3 = storefrontPrices[StorefrontTypes.StorefrontPurchaseType.SELF_PURCHASE];
    if (tmp3 != null) {
      const userPrice = tmp3.userPrice;
    }
  }
  let tmp4 = null;
  if (null != nonPromoPrice) {
    tmp4 = null;
    if (nonPromoPrice.currency !== constants.DISCORD_ORB) {
      let found;
      if (userPrice != null) {
        found = userPrice.find((currency) => currency.currency === premiumPrice.currency);
      }
      let tmp7 = null;
      if (null != found) {
        tmp7 = null;
        if (found.amount < nonPromoPrice.amount) {
          const obj = {};
          const merged = Object.assign(nonPromoPrice);
          obj.amount = found.amount;
          tmp7 = obj;
        }
      }
      tmp4 = tmp7;
    }
  }
  return tmp4;
}
export function getCollectiblesPremiumPromoPrice(arg0) {
  ({ storefrontPrices, premiumPrice } = arg0);
  if (storefrontPrices != null) {
    const tmp3 = storefrontPrices[StorefrontTypes.StorefrontPurchaseType.SELF_PURCHASE];
    if (tmp3 != null) {
      if (tmp3.prices[PREMIUM_TIER_2.PREMIUM_TIER_2] != null) {
        const arr = tmp5[StorefrontTypes.StorefrontPriceVariant.DISCOUNTED];
      }
    }
  }
  let tmp6 = null;
  if (null != premiumPrice) {
    tmp6 = null;
    if (premiumPrice.currency !== constants.DISCORD_ORB) {
      let found;
      if (arr != null) {
        found = arr.find((currency) => currency.currency === premiumPrice.currency);
      }
      let tmp9 = null;
      if (null != found) {
        tmp9 = null;
        if (found.amount < premiumPrice.amount) {
          const obj = {};
          const merged = Object.assign(premiumPrice);
          obj.amount = found.amount;
          tmp9 = obj;
        }
      }
      tmp6 = tmp9;
    }
  }
  return tmp6;
}
export function isStorefrontPromotionActive(startsAt, now) {
  let tmp = null == startsAt.startsAt;
  if (!tmp) {
    startsAt = startsAt.startsAt;
    tmp = startsAt.getTime() <= now;
  }
  let tmp2 = null != startsAt.endsAt;
  if (tmp2) {
    const endsAt = startsAt.endsAt;
    tmp2 = endsAt.getTime() <= now;
  }
  if (tmp) {
    tmp = !tmp2;
  }
  return tmp;
}
export function areStorefrontPricingPromotionsActive(arg0) {
  ({ pricingPromotionIds, now: require, promotions: closure_129_0 } = arg0);
  if (pricingPromotionIds == null) {
    pricingPromotionIds = [];
  }
  const mapped = pricingPromotionIds.map((item) => {
    closure_0 = item;
    let found;
    if (stateFromStores2 != null) {
      found = stateFromStores2.find((id) => id.id === closure_0);
    }
    return found;
  });
  return (
    mapped.length > 0 &&
    mapped.every((startsAt) => {
      let tmp = null != startsAt;
      if (tmp) {
        let tmp3 = null == startsAt.startsAt;
        if (!tmp3) {
          startsAt = startsAt.startsAt;
          tmp3 = startsAt.getTime() <= stateFromStores2;
        }
        let tmp4 = null != startsAt.endsAt;
        if (tmp4) {
          const endsAt = startsAt.endsAt;
          tmp4 = endsAt.getTime() <= stateFromStores2;
        }
        if (tmp3) {
          tmp3 = !tmp4;
        }
        tmp = tmp3;
      }
      return tmp;
    })
  );
}
export { getNextStorefrontPromotionBoundary };
export function useCollectiblesStorefrontPrices(skuId, c7) {
  stateFromStores2 = skuId;
  stateFromStores2(9448).useCollectiblesStorefrontPricingIntegrationEnabled(c7);
  const obj = stateFromStores2(9448);
  items = [SKUPricesStore];
  const stateFromStores = stateFromStores2(504).useStateFromStores(items, () => {
    let pricesForSkuId;
    if (closure_1) {
      pricesForSkuId = SKUPricesStore.getPricesForSkuId(stateFromStores2);
    }
    return pricesForSkuId;
  });
  const obj2 = stateFromStores2(504);
  const items1 = [SKUPricesStore];
  const stateFromStores1 = stateFromStores2(504).useStateFromStores(items1, () => {
    let promotionIdsForSkuId;
    if (closure_1) {
      promotionIdsForSkuId = SKUPricesStore.getPromotionIdsForSkuId(stateFromStores2);
    }
    return promotionIdsForSkuId;
  });
  const obj3 = stateFromStores2(504);
  const items2 = [StorefrontPromotionStore];
  stateFromStores2(504).useStateFromStores(items2, () => {
    let promotionsForApplication = null;
    if (closure_1) {
      promotionsForApplication = StorefrontPromotionStore.getPromotionsForApplication(timestampProducer);
    }
    return promotionsForApplication;
  });
  stateFromStores2 = undefined;
  const obj4 = stateFromStores2(504);
  [tmp5, stateFromStores2] = noop.useState(Date.now);
  const tmp6 = getNextStorefrontPromotionBoundary({
    pricingPromotionIds: stateFromStores1,
    promotions: stateFromStores2,
    now: tmp5,
  });
  dependencyMap = tmp6;
  const items3 = [tmp6, tmp5];
  const effect = noop.useEffect(() => {
    if (null != closure_1) {
      const _Math = Math;
      const _Math2 = Math;
      const _Date = Date;
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => closure_0(Date.now()), Math.min(Math.max(tmp - Date.now(), 0), 2147483647));
      return () => clearTimeout(closure_0);
    }
  }, items3);
  let items4 = stateFromStores1;
  if (stateFromStores1 == null) {
    items4 = [];
  }
  const mapped = items4.map((item) => {
    closure_0 = item;
    let found;
    if (stateFromStores2 != null) {
      found = stateFromStores2.find((id) => id.id === closure_0);
    }
    return found;
  });
  let tmp4 = _slicedToArray(noop.useState(Date.now), 2);
  let tmp9;
  if (tmp8) {
    tmp9 = stateFromStores;
  }
  return tmp9;
}
