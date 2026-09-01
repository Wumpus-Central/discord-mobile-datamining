// discord_app/modules/premium_marketing/native/hooks/useBuyNitroPlanSelection.tsx
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import GuildFeatures from "../../../premium/PremiumConstants.tsx";

const require = arg1;
const PremiumTypes = GuildFeatures.PremiumTypes;
const SubscriptionIntervalTypes = GuildFeatures.SubscriptionIntervalTypes;
let items = [,];
({ TIER_2: arr[0], TIER_0: arr[1] } = PremiumTypes);
let result = require("set").fileFinishedImporting(
  "modules/premium_marketing/native/hooks/useBuyNitroPlanSelection.tsx",
);

export const NITRO_PLAN_TIERS = items;
export const useBuyNitroPlanSelection = function useBuyNitroPlanSelection(tier) {
  let obj = memo2(memo[4]);
  const premiumTrialOffer = obj.usePremiumTrialOffer();
  obj1 = memo2(memo[5]);
  const premiumTrialOfferPremiumType = obj1.usePremiumTrialOfferPremiumType();
  const buyNitroTrialUnavailableTiers = memo2(memo[6]).useBuyNitroTrialUnavailableTiers();
  let tmp5;
  if (null != premiumTrialOfferPremiumType) {
    if (buyNitroOrderPriceOverrides.includes(premiumTrialOfferPremiumType)) {
      tmp5 = premiumTrialOfferPremiumType;
    }
  }
  let tmp7;
  if (null != tmp5) {
    if (!buyNitroTrialUnavailableTiers.has(tmp5)) {
      tmp7 = tmp5;
    }
  }
  if (null != tmp7) {
    let trialId;
    if (premiumTrialOffer != null) {
      trialId = premiumTrialOffer.trialId;
    }
    const tmp8 = trialId;
  }
  tier = undefined;
  if (tier != null) {
    tier = tier.tier;
  }
  if (tier == null) {
    tier = null;
  }
  const obj3 = memo2(memo[6]);
  const tmp11 = found;
  [TIER_2, memo2] = found(found1.useState(tier), 2);
  if (TIER_2 == null) {
    TIER_2 = tmp5;
  }
  if (TIER_2 == null) {
    TIER_2 = priceString.TIER_2;
  }
  importDefault = TIER_2;
  items = [TIER_2];
  memo = obj5.useMemo(() => {
    closure_0 = closure_1;
    const premiumBundlesWithPredicate = memo2(memo[3]).getPremiumBundlesWithPredicate((additionalPlans) => {
      let tmp = 0 === additionalPlans.additionalPlans.length;
      if (tmp) {
        tmp = true !== additionalPlans.isDeprecated;
      }
      if (tmp) {
        tmp = 0 === additionalPlans.numPremiumGuild;
      }
      if (tmp) {
        tmp = additionalPlans.premiumTier === closure_0;
      }
      return tmp;
    });
    return premiumBundlesWithPredicate.sort((interval, interval2) => interval2.interval - interval.interval);
  }, items);
  let tmpResult = tmp(tmp2[7]);
  const premiumDiscountOffer = tmpResult.usePremiumDiscountOffer();
  tmpResult = tmp(tmp2[8]);
  const isEligibleForBogoOffer = tmpResult.useIsEligibleForBogoOffer();
  const tmp12 = found(found1.useState(tier), 2);
  const discountedPremiumProductInfo = memo2(memo[9]).useDiscountedPremiumProductInfo(premiumDiscountOffer, memo);
  ({ discountedProduct, discountedPriceString } = discountedPremiumProductInfo);
  let num = NaN;
  if (null != premiumDiscountOffer) {
    const _parseFloat = parseFloat;
    num = parseFloat(premiumDiscountOffer.discount.amount);
  }
  let identifier;
  if (discountedProduct != null) {
    identifier = discountedProduct.identifier;
  }
  obj = { id: identifier, priceString: discountedPriceString, numMonths: null, percentOff: null };
  let num2;
  if (premiumDiscountOffer != null) {
    const discount = premiumDiscountOffer.discount;
    if (discount != null) {
      num2 = discount.intervalCount;
    }
  }
  if (num2 == null) {
    num2 = 1;
  }
  obj[2] = num2;
  let tmp19 = null;
  if (!Number.isNaN(num)) {
    tmp19 = num;
  }
  obj[3] = tmp19;
  found = memo.find((interval) => interval.interval === priceString1.MONTH);
  found1 = memo.find((interval) => interval.interval === priceString1.YEAR);
  let basePlanId;
  const tmp22 = importDefault;
  const tmpResult1 = memo2(memo[9]);
  if (found != null) {
    basePlanId = found.basePlanId;
  }
  const tmp23Result = importDefault(memo[10])(basePlanId);
  priceString = undefined;
  if (tmp23Result != null) {
    priceString = tmp23Result.priceString;
  }
  if (priceString == null) {
    priceString = null;
  }
  let basePlanId1;
  const tmp23 = importDefault(memo[10]);
  if (found1 != null) {
    basePlanId1 = found1.basePlanId;
  }
  const tmp22ResultResult = tmp22(memo[10])(basePlanId1);
  let priceString1;
  if (tmp22ResultResult != null) {
    priceString1 = tmp22ResultResult.priceString;
  }
  if (priceString1 == null) {
    priceString1 = null;
  }
  const tmp22Result = tmp22(memo[10]);
  buyNitroOrderPriceOverrides = memo2(memo[6]).useBuyNitroOrderPriceOverrides();
  const items1 = [found, found1, priceString, priceString1, buyNitroOrderPriceOverrides];
  const memo1 = obj5.useMemo(() => {
    const map = new Map();
    let tmp2 = null != found;
    if (tmp2) {
      tmp2 = null != priceString;
    }
    if (tmp2) {
      const result = map.set(found.productId, priceString);
    }
    let tmp7 = null != found1;
    if (tmp7) {
      tmp7 = null != priceString1;
    }
    if (tmp7) {
      const result1 = map.set(found1.productId, priceString1);
    }
    while (tmp12 !== undefined) {
      let tmp14 = found;
      let tmp15 = found(tmp13, 2);
      [tmp16, tmp18] = tmp15;
      let tmp17 = tmp16;
      if (map.has(tmp16)) {
        let tmp19 = tmp16;
        let tmp20 = tmp18;
        let result2 = map.set(tmp17, tmp18);
      }
      continue;
    }
    return map;
  }, items1);
  const items2 = [memo, memo1];
  memo2 = obj5.useMemo(() => {
    const set = new Set();
    if (memo1.size > 0) {
      for (const item10015 of memo) {
        let tmp4 = memo1;
        let tmp3 = item10015;
        if (!memo1.has(item10015.productId)) {
          let tmp5 = item10015;
          let addResult = set.add(tmp3.productId);
        }
        continue;
      }
    }
    return set;
  }, items2);
  let productId;
  if (tier != null) {
    productId = tier.productId;
  }
  if (productId == null) {
    productId = null;
  }
  const tmp11Result = tmp11(found1.useState(productId), 2);
  let first = tmp11Result[0];
  closure_10 = tmp11Result[1];
  const items3 = [TIER_2];
  [][0] = TIER_2;
  const callback = obj5.useCallback((arg0) => {
    if (arg0 !== closure_1) {
      memo2(arg0);
      callback(null);
    }
  }, items3);
  if (null != first) {
    const found2 = memo.find((productId) => productId.productId === first);
    let tmp43 = null != tmp7;
    if (tmp43) {
      let premiumTier;
      if (found2 != null) {
        premiumTier = found2.premiumTier;
      }
      tmp43 = premiumTier === tmp7;
    }
    obj = {
      tier: null,
      setTier: null,
      productId: null,
      setProductId: null,
      item: null,
      priceString: null,
      isDiscounted: null,
      isTrial: null,
    };
    obj[0] = TIER_2;
    obj[1] = callback;
    obj[2] = first;
    obj[3] = tmp38;
    obj[4] = found2;
    let tmp45 = null;
    if (null != found2) {
      if (!tmp42) {
        let value = memo1.get(found2.productId);
        if (value == null) {
          value = null;
        }
        discountedPriceString = value;
      }
      tmp45 = discountedPriceString;
    }
    obj1 = {
      selection: null,
      items: null,
      priceStringByProductId: null,
      unavailableProductIds: null,
      bogoEligible: null,
      hasDiscountOffer: null,
      trialTier: null,
      trialId: null,
      discounted: null,
    };
    obj[5] = tmp45;
    obj[6] = null != found2 && found2.productId === obj.id && null != discountedPriceString;
    obj[7] = tmp43;
    obj1[0] = obj;
    obj1[1] = memo;
    obj1[2] = memo1;
    obj1[3] = memo2;
    obj1[4] = isEligibleForBogoOffer;
    obj1[5] = null != premiumDiscountOffer;
    obj1[6] = tmp7;
    obj1[7] = tmp8;
    obj1[8] = obj;
    return obj1;
  }
  importDefault = isEligibleForBogoOffer ? priceString1.MONTH : priceString1.YEAR;
  const found3 = memo.filter((productId) => !memo2.has(productId.productId));
  let arr7 = memo;
  if (found3.length > 0) {
    arr7 = found3;
  }
  let found4 = arr7.find((interval) => interval.interval === closure_1);
  if (found4 == null) {
    found4 = arr7[0];
  }
  let productId1;
  if (found4 != null) {
    productId1 = found4.productId;
  }
  first = productId1;
};
