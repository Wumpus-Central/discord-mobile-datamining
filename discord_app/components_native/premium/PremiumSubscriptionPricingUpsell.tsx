// === Module 13108: PricingSubheadingCopy ===

// Module 13108 (PricingSubheadingCopy)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4441 */;
import getSubscriptionPlansLoaded from "getSubscriptionPlansLoaded" /* 12992 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "_getSystemLocale" /* 1996 */;
import closure_7 from "mergeGuildAvatar" /* 1922 */;
import closure_8 from "addSubscriptionPlan" /* 4112 */;
import closure_9 from "reset" /* 4113 */;
import closure_10 from "updateProduct" /* 6036 */;
import { CurrencyCodes } from "ME" /* 676 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

require = arg1;
function PricingSubheadingCopy() {
  let tmp = callback3();
  const _require = tmp;
  let obj = _require(str3[12]);
  let items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  obj1 = importDefault(str3[13]);
  const hasBoostDiscountResult = obj1.hasBoostDiscount(stateFromStores);
  let obj2 = _require(str3[12]);
  const items1 = [closure_6];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => locale.locale);
  let obj3 = _require(str3[14]);
  const subscriptionPlansLoaded = obj3.useSubscriptionPlansLoaded();
  let obj4 = _require(str3[12]);
  const items2 = [closure_9];
  importDefault = obj4.useStateFromStores(items2, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let obj5 = _require(str3[12]);
  const items3 = [closure_8];
  let stateFromStores2 = obj5.useStateFromStores(items3, () => {
    let value;
    if (null != closure_1) {
      value = closure_1_8.get(tmp.planId);
    }
    return value;
  });
  const effect = React.useEffect(() => {
    if (!store.isReady()) {
      callback(str3[15]).wait(() => callback(table[16]).loadProducts());
      const obj = callback(str3[15]);
    }
  }, []);
  let obj6 = _require(str3[12]);
  let obj7 = closure_10;
  const items4 = [closure_10];
  [tmp12, tmp13, tmp14, tmp15, tmp16] = str2(obj6.useStateFromStoresArray(items4, () => {
    const items = [store.getProduct(lib(str3[17]).ProductIds.PREMIUM_GUILD_1_MONTHLY), store.getProduct(lib(str3[17]).ProductIds.PREMIUM_TIER_2_MONTHLY), store.getProduct(lib(str3[17]).ProductIds.PREMIUM_TIER_2_PREMIUM_GUILD_1_MONTHLY), store.getProduct(lib(str3[17]).ProductIds.PREMIUM_TIER_2_YEARLY), store.getProduct(lib(str3[17]).ProductIds.PREMIUM_TIER_2_PREMIUM_GUILD_1_YEARLY)];
    return items;
  }), 5);
  if (stateFromStores2 == null) {
    stateFromStores2 = table[constants.PREMIUM_MONTH_GUILD];
  }
  ({ interval, intervalCount } = stateFromStores2);
  if (subscriptionPlansLoaded) {
    if (obj7.isReady()) {
      if (null != tmp12) {
        if (tmp12 != null) {
          const formatted = tmp12.currencyCode.toLowerCase();
          const str = tmp12.currencyCode;
        }
        if (tmp12 != null) {
          const price = tmp12.price;
        }
        if (interval === constants2.YEAR) {
          let diff = null;
          if (null != tmp16) {
            diff = null;
            if (null != tmp15) {
              diff = tmp16.price - tmp15.price;
            }
          }
          let tmp22 = diff;
          let diff1 = diff;
        } else {
          let tmp21 = hasBoostDiscountResult;
          if (hasBoostDiscountResult) {
            tmp21 = null != price;
          }
          tmp22 = price;
          diff1 = price;
          if (tmp21) {
            let num;
            if (tmp14 != null) {
              num = tmp14.price;
            }
            if (num == null) {
              num = 0;
            }
            let num2;
            if (tmp13 != null) {
              num2 = tmp13.price;
            }
            if (num2 == null) {
              num2 = 0;
            }
            diff1 = num - num2;
            tmp22 = price;
          }
        }
        let tmp2Result = tmp2(tmp3[19]);
        let result = diff1;
        if (tmp25) {
          tmp2Result = tmp2(tmp3[20]);
          result = tmp2Result.convertToMajorCurrencyUnits(diff1, CurrencyCodes.USD);
        }
        tmp25 = tmp2Result.isAndroid() && null != diff1;
        const tmp2Result1 = tmp2(tmp3[19]);
        let result1 = tmp22;
        if (tmp28) {
          result1 = tmp2(tmp3[20]).convertToMajorCurrencyUnits(tmp22, CurrencyCodes.USD);
          const tmp2Result2 = tmp2(tmp3[20]);
        }
        str2 = "...";
        str3 = "...";
        if (null != result) {
          const tmp2Result3 = tmp2(tmp3[21]);
          str3 = tmp2Result3.formatRate(tmp2(tmp3[21]).formatPrice(result, formatted, { convertToMajorUnits: false }), interval, intervalCount);
          const tmp2Result4 = tmp2(tmp3[21]);
        }
        if (null != result1) {
          const tmp2Result5 = tmp2(tmp3[21]);
          str2 = tmp2Result5.formatRate(tmp2(tmp3[21]).formatPrice(result1, formatted, { convertToMajorUnits: false }), interval, intervalCount);
          const tmp2Result6 = tmp2(tmp3[21]);
        }
        if (result !== result1) {
          obj = { style: null, accessibilityLabel: null, variant: "text-md/medium", children: null };
          obj[0] = tmp.cardText;
          const intl2 = tmp2(tmp3[22]).intl;
          obj = { price: null, originalPrice: null };
          obj[0] = str3;
          obj[1] = str2;
          obj[1] = intl2.formatToPlainString(tmp2(tmp3[22]).t.lEIwDw, obj);
          const intl3 = tmp2(tmp3[22]).intl;
          obj1 = { price: null, originalPrice: null, originalPriceHook: null };
          obj1[0] = str3;
          obj1[1] = str2;
          obj1[2] = function originalPriceHook(arg0, arg1) {
            let tmp = null;
            if (str3 !== str2) {
              const obj = { style: null, variant: "text-sm/medium", color: "text-muted", children: null };
              obj[0] = lib.originalPrice;
              obj[3] = arg0;
              tmp = closure_1_18(lib(str3[18]).Text, obj, arg1);
            }
            return tmp;
          };
          obj[3] = intl3.format(tmp2(tmp3[22]).t.eRSsbf, obj1);
          obj2 = obj;
        } else {
          obj2 = { style: null, variant: "text-md/medium", children: null };
          obj2[0] = tmp.cardText;
          const intl = tmp2(tmp3[22]).intl;
          obj3 = { price: null };
          obj3[0] = str3;
          obj2[2] = intl.format(tmp2(tmp3[22]).t.Mmf63F, obj3);
        }
        const tmp31Result = callback(tmp2(tmp3[18]).Text, obj2);
        let tmp5Result = tmp5(tmp3[13]);
        if (tmp5Result.hasFreeBoosts(stateFromStores)) {
          if (hasBoostDiscountResult) {
            tmp5Result = tmp5(tmp3[13]);
            if (tmp5Result.isPremium(stateFromStores, closure_14.TIER_2)) {
              obj4 = { children: null };
              obj5 = { style: null, variant: "text-md/medium", children: null };
              obj5[0] = tmp.cardText;
              const intl5 = tmp2(tmp3[22]).intl;
              obj6 = { freeSubscriptionCount: null, discountPercent: null };
              obj6[0] = closure_16;
              obj6[1] = tmp2(tmp3[23]).formatPercent(stateFromStores1, closure_17 / 100);
              obj5[2] = intl5.format(tmp2(tmp3[22]).t["ZikTt+"], obj6);
              const items5 = [tmp31(tmp2(tmp3[18]).Text, obj5), tmp31Result];
              obj4[0] = items5;
              let tmp34 = callback2(closure_19, obj4);
              const tmp2Result7 = tmp2(tmp3[23]);
            }
            return tmp34;
          }
        }
        tmp34 = tmp31Result;
        if (hasBoostDiscountResult) {
          tmp34 = tmp31Result;
          if (tmp5Result1.isPremium(stateFromStores, closure_14.TIER_1)) {
            obj7 = { children: null };
            const obj8 = { style: null, variant: "text-md/medium", children: null };
            obj8[0] = tmp.cardText;
            const intl4 = tmp2(tmp3[22]).intl;
            const obj9 = { discountPercent: null };
            obj9[0] = tmp2(tmp3[23]).formatPercent(stateFromStores1, closure_17 / 100);
            obj8[2] = intl4.format(tmp2(tmp3[22]).t.XVMAKU, obj9);
            const items6 = [tmp31(tmp2(tmp3[18]).Text, obj8), tmp31Result];
            obj7[0] = items6;
            tmp34 = callback2(closure_19, obj7);
            const tmp2Result8 = tmp2(tmp3[23]);
          }
          tmp5Result1 = tmp5(tmp3[13]);
        }
        tmp28 = tmp2(tmp3[19]).isAndroid() && null != tmp22;
      }
    }
  }
  return callback(_require(str3[18]).Text, { style: tmp.cardText, variant: "text-md/medium", children: "..." });
}
({ SubscriptionPlans: closure_12, SubscriptionPlanInfo: map1, PremiumTypes: closure_14, SubscriptionIntervalTypes: closure_15, NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_16, GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT: closure_17 } = GuildFeatures);
({ jsx: closure_18, Fragment: closure_19, jsxs: closure_20 } = jsxProd);
let closure_21 = createCacheKey.createStyles({ title: { marginTop: 16 }, pricingSection: { alignItems: "center" }, originalPrice: { textDecorationLine: "line-through" }, cardText: { lineHeight: 20, marginTop: 8, textAlign: "center" } });
let result = require("set").fileFinishedImporting("components_native/premium/PremiumSubscriptionPricingUpsell.tsx");

export default function PremiumSubscriptionPricingUpsell() {
  const tmp = callback3();
  let obj = getSubscriptionPlansLoaded;
  obj = { style: tmp.pricingSection, children: null };
  const subscriptionPlansLoaded = obj.useSubscriptionPlansLoaded();
  obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale.intl;
  obj[4] = intl.string(getSystemLocale.t["3x1PFE"]);
  const items = [callback(Text.Text, obj), ];
  let tmp5Result = null;
  if (subscriptionPlansLoaded) {
    tmp5Result = callback(PricingSubheadingCopy, {});
  }
  items[1] = tmp5Result;
  obj[1] = items;
  return closure_20(View, obj);
};