import _slicedToArray from "_slicedToArray";
import noop from "noop";
import GuildFeatures from "GuildFeatures";

const require = arg1;
const PremiumTypes = GuildFeatures.PremiumTypes;
const SubscriptionIntervalTypes = GuildFeatures.SubscriptionIntervalTypes;
let items = [, ];
({ TIER_2: arr[0], TIER_0: arr[1] } = PremiumTypes);
let result = require("GuildFeatures").fileFinishedImporting("modules/premium_marketing/native/hooks/useBuyNitroPlanSelection.tsx");

export const NITRO_PLAN_TIERS = items;
export const useBuyNitroPlanSelection = function useBuyNitroPlanSelection(tier) {
  let TIER_2;
  let discountedPriceString;
  let discountedProduct;
  let memo2;
  let obj = memo2(memo[4]);
  const premiumTrialOfferPremiumType = obj.usePremiumTrialOfferPremiumType();
  const NitroACOMSubscriptionExperiment = memo2(memo[5]).NitroACOMSubscriptionExperiment;
  let obj1 = memo2(memo[6]);
  tier = undefined;
  if (tier != null) {
    tier = tier.tier;
  }
  if (tier == null) {
    tier = null;
  }
  [TIER_2, memo2] = found(found1.useState(tier), 2);
  if (TIER_2 == null) {
    TIER_2 = tmp4;
  }
  if (TIER_2 == null) {
    TIER_2 = priceString.TIER_2;
  }
  const items = [TIER_2];
  memo = obj3.useMemo(() => {
    let closure_0 = TIER_2;
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
  const tmp9 = found(found1.useState(tier), 2);
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
      num2 = discount.userUsageLimit;
    }
  }
  if (num2 == null) {
    num2 = 1;
  }
  obj[2] = num2;
  let tmp16 = null;
  if (!Number.isNaN(num)) {
    tmp16 = num;
  }
  obj[3] = tmp16;
  found = memo.find((interval) => interval.interval === priceString1.MONTH);
  found1 = memo.find((interval) => interval.interval === priceString1.YEAR);
  let basePlanId;
  let tmp19 = TIER_2;
  const tmpResult1 = memo2(memo[9]);
  if (found != null) {
    basePlanId = found.basePlanId;
  }
  const tmp20Result = TIER_2(memo[10])(basePlanId);
  priceString = undefined;
  if (tmp20Result != null) {
    priceString = tmp20Result.priceString;
  }
  if (priceString == null) {
    priceString = null;
  }
  let basePlanId1;
  let tmp20 = TIER_2(memo[10]);
  if (found1 != null) {
    basePlanId1 = found1.basePlanId;
  }
  const tmp19ResultResult = tmp19(memo[10])(basePlanId1);
  let priceString1;
  if (tmp19ResultResult != null) {
    priceString1 = tmp19ResultResult.priceString;
  }
  if (priceString1 == null) {
    priceString1 = null;
  }
  let tmp8Result = tmp8(obj3.useState(() => new Map()), 2);
  const first = tmp8Result[0];
  let closure_8 = tmp8Result[1];
  const items1 = [found, found1, priceString, priceString1, first];
  const callback = obj3.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    callback((get) => {
      if (get.get(closure_0) === closure_1) {
        return get;
      } else {
        const _Map = Map;
        const map = new Map(get);
        const result = map.set(tmp, tmp2);
        return map;
      }
      tmp = closure_0;
    });
  }, []);
  const memo1 = obj3.useMemo(() => {
    let tmp16;
    let tmp18;
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
  memo2 = obj3.useMemo(() => {
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
  tmp8Result = tmp8(obj3.useState(productId), 2);
  let first1 = tmp8Result[0];
  let closure_11 = tmp8Result[1];
  const items3 = [TIER_2];
  [][0] = TIER_2;
  const callback1 = obj3.useCallback((arg0) => {
    if (arg0 !== TIER_2) {
      memo2(arg0);
      callback2(null);
    }
  }, items3);
  if (null != first1) {
    const found2 = memo.find((productId) => productId.productId === first1);
    let tmp42 = null != tmp4;
    if (tmp42) {
      let premiumTier;
      if (found2 != null) {
        premiumTier = found2.premiumTier;
      }
      tmp42 = premiumTier === tmp4;
    }
    obj = { tier: null, setTier: null, productId: null, setProductId: null, item: null, priceString: null, isDiscounted: null, isTrial: null };
    obj[0] = TIER_2;
    obj[1] = callback1;
    obj[2] = first1;
    obj[3] = tmp37;
    obj[4] = found2;
    let tmp44 = null;
    if (null != found2) {
      if (!tmp41) {
        let value = memo1.get(found2.productId);
        if (value == null) {
          value = null;
        }
        discountedPriceString = value;
      }
      tmp44 = discountedPriceString;
    }
    obj1 = { selection: null, items: null, priceStringByProductId: null, unavailableProductIds: null, bogoEligible: null, hasDiscountOffer: null, trialTier: null, discounted: null, applyOrderPriceOverride: null };
    obj[5] = tmp44;
    obj[6] = null != found2 && found2.productId === obj.id && null != discountedPriceString;
    obj[7] = tmp42;
    obj1[0] = obj;
    obj1[1] = memo;
    obj1[2] = memo1;
    obj1[3] = memo2;
    obj1[4] = isEligibleForBogoOffer;
    obj1[5] = null != premiumDiscountOffer;
    obj1[6] = tmp4;
    obj1[7] = obj;
    obj1[8] = callback;
    return obj1;
  }
  TIER_2 = isEligibleForBogoOffer ? priceString1.MONTH : priceString1.YEAR;
  const found3 = memo.filter((productId) => !memo2.has(productId.productId));
  let arr7 = memo;
  if (found3.length > 0) {
    arr7 = found3;
  }
  let found4 = arr7.find((interval) => interval.interval === TIER_2);
  if (found4 == null) {
    found4 = arr7[0];
  }
  let productId1;
  if (found4 != null) {
    productId1 = found4.productId;
  }
  first1 = productId1;
};