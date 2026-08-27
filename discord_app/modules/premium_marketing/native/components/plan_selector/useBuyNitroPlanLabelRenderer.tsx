// === Module 12979: useBuyNitroPlanLabelRenderer ===

// Module 12979 (useBuyNitroPlanLabelRenderer)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "_getSystemLocale" /* 1996 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const require = arg1;
({ DISCOUNTS: closure_6, SubscriptionPlans: error } = GuildFeatures);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { labelRow: null, discountBadge: null, discountBadgeText: null };
createCacheKey = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderRadius: ThemesDefault.radii.lg, backgroundColor: ThemesDefault.unsafe_rawColors.GREEN_360, paddingVertical: 2, paddingHorizontal: ThemesDefault.space.PX_8 };
createCacheKey[2] = { textTransform: "uppercase" };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj1 = { borderRadius: ThemesDefault.radii.lg, backgroundColor: ThemesDefault.unsafe_rawColors.GREEN_360, paddingVertical: 2, paddingHorizontal: ThemesDefault.space.PX_8 };
const result = require("set").fileFinishedImporting("modules/premium_marketing/native/components/plan_selector/useBuyNitroPlanLabelRenderer.tsx");

export const useBuyNitroPlanLabelRenderer = function useBuyNitroPlanLabelRenderer() {
  const tmp = callback();
  const _require = tmp;
  token = _require(token1[7]).useToken(token(token1[6]).modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  let obj = _require(token1[7]);
  token1 = _require(token1[7]).useToken(token(token1[6]).modules.mobile.TABLE_ROW_LABEL_COLOR);
  let items = [tmp, token, token1];
  return React.useCallback((hasDiscountOffer, productId) => {
    ({ bogoEligible, trialTier, discounted } = hasDiscountOffer);
    let tmp2 = productId.productId === discounted.id;
    if (tmp2) {
      tmp2 = null != discounted.priceString;
    }
    let tmp5 = null == tmp || hasDiscountOffer.hasDiscountOffer || null != trialTier && productId.premiumTier === trialTier;
    if (!tmp5) {
      let tmp6 = bogoEligible;
      if (bogoEligible) {
        tmp6 = productId.basePlanId === closure_1_7.PREMIUM_YEAR_TIER_2;
      }
      tmp5 = tmp6;
    }
    if (bogoEligible) {
      if (productId.basePlanId === closure_1_7.PREMIUM_MONTH_TIER_2) {
        const intl3 = lib(token1[8]).intl;
        let stringResult = intl3.string(lib(token1[8]).t.iQTfWx);
      }
      let obj = { style: null, children: null };
      obj[0] = lib.labelRow;
      obj = { variant: null, color: null, children: null };
      obj[0] = token;
      obj[1] = token1;
      obj[2] = lib(token1[11]).getIntervalString(productId.interval, false);
      const items = [closure_1_8(lib(token1[10]).Text, obj), ];
      let tmp21Result = null != stringResult;
      if (tmp21Result) {
        obj1 = { style: null, children: null };
        obj1[0] = tmp20.discountBadge;
        const obj2 = { variant: "text-xs/bold", color: "text-overlay-light", style: null, children: null };
        obj2[2] = tmp20.discountBadgeText;
        obj2[3] = stringResult;
        obj1[1] = tmp21(lib(token1[10]).Text, obj2);
        tmp21Result = tmp21(tmp19, obj1);
      }
      items[1] = tmp21Result;
      obj[1] = items;
      return closure_1_9(closure_1_4, obj);
    }
    if (tmp2) {
      if (null != discounted.percentOff) {
        const intl2 = lib(token1[8]).intl;
        let obj3 = { discount: null };
        obj3 = lib(token1[9]);
        obj3[0] = obj3.formatPercent(closure_1_5.locale, discounted.percentOff / 100);
        stringResult = intl2.format(lib(token1[8]).t.IAybsG, obj3);
      }
    }
    stringResult = null;
    if (!tmp5) {
      const intl = lib(token1[8]).intl;
      obj = { discount: null };
      obj1 = lib(token1[9]);
      obj[0] = obj1.formatPercent(closure_1_5.locale, tmp / 100);
      stringResult = intl.format(lib(token1[8]).t.IAybsG, obj);
    }
  }, items);
};