// === Module 12453: useBuyNitroPlanLabelRenderer ===

// Module 12453 (useBuyNitroPlanLabelRenderer)
import noop from "noop";
import { View } from "get ActivityIndicator";
import _getSystemLocale from "_getSystemLocale";
import GuildFeatures from "GuildFeatures";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c9;
let closure_6;
let error;
let metroImportAll;
let require = arg1;
({ DISCOUNTS: closure_6, SubscriptionPlans: error } = GuildFeatures);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { labelRow: null, discountBadge: null, discountBadgeText: null };
createCacheKey = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderRadius: require("Themes").radii.lg, backgroundColor: require("Themes").unsafe_rawColors.GREEN_360, paddingVertical: 2, paddingHorizontal: require("Themes").space.PX_8 };
createCacheKey[2] = { textTransform: "uppercase" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { borderRadius: require("Themes").radii.lg, backgroundColor: require("Themes").unsafe_rawColors.GREEN_360, paddingVertical: 2, paddingHorizontal: require("Themes").space.PX_8 };
const result = require("_getSystemLocale").fileFinishedImporting("modules/premium_marketing/native/components/plan_selector/useBuyNitroPlanLabelRenderer.tsx");

export const useBuyNitroPlanLabelRenderer = function useBuyNitroPlanLabelRenderer() {
  const tmp = createCacheKey();
  const require = tmp;
  token = require(token1[7]).useToken(token(token1[6]).modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  let obj = require(token1[7]);
  token1 = require(token1[7]).useToken(token(token1[6]).modules.mobile.TABLE_ROW_LABEL_COLOR);
  let items = [tmp, token, token1];
  return React.useCallback((hasDiscountOffer, productId) => {
    let bogoEligible;
    let discounted;
    let trialTier;
    ({ bogoEligible, trialTier, discounted } = hasDiscountOffer);
    let tmp2 = productId.productId === discounted.id;
    if (tmp2) {
      tmp2 = null != discounted.priceString;
    }
    let tmp5 = null == tmp || hasDiscountOffer.hasDiscountOffer || null != trialTier && productId.premiumTier === trialTier;
    if (!tmp5) {
      let tmp6 = bogoEligible;
      if (bogoEligible) {
        tmp6 = productId.basePlanId === outer1_7.PREMIUM_YEAR_TIER_2;
      }
      tmp5 = tmp6;
    }
    if (bogoEligible) {
      if (productId.basePlanId === outer1_7.PREMIUM_MONTH_TIER_2) {
        const intl3 = tmp(token1[8]).intl;
        let stringResult = intl3.string(tmp(token1[8]).t.iQTfWx);
      }
      let obj = { style: null, children: null };
      obj[0] = tmp.labelRow;
      obj = { variant: null, color: null, children: null };
      obj[0] = token;
      obj[1] = token1;
      obj[2] = tmp(token1[11]).getIntervalString(productId.interval, false);
      const items = [outer1_8(tmp(token1[10]).Text, obj), ];
      let tmp21Result = null != stringResult;
      if (tmp21Result) {
        let obj1 = { style: null, children: null };
        obj1[0] = tmp20.discountBadge;
        const obj2 = { variant: "text-xs/bold", color: "text-overlay-light", style: null, children: null };
        obj2[2] = tmp20.discountBadgeText;
        obj2[3] = stringResult;
        obj1[1] = tmp21(tmp(token1[10]).Text, obj2);
        tmp21Result = tmp21(tmp19, obj1);
      }
      items[1] = tmp21Result;
      obj[1] = items;
      return outer1_9(outer1_4, obj);
    }
    if (tmp2) {
      if (null != discounted.percentOff) {
        const intl2 = tmp(token1[8]).intl;
        let obj3 = { discount: null };
        obj3 = tmp(token1[9]);
        obj3[0] = obj3.formatPercent(outer1_5.locale, discounted.percentOff / 100);
        stringResult = intl2.format(tmp(token1[8]).t.IAybsG, obj3);
      }
    }
    stringResult = null;
    if (!tmp5) {
      const intl = tmp(token1[8]).intl;
      obj = { discount: null };
      obj1 = tmp(token1[9]);
      obj[0] = obj1.formatPercent(outer1_5.locale, tmp / 100);
      stringResult = intl.format(tmp(token1[8]).t.IAybsG, obj);
    }
  }, items);
};