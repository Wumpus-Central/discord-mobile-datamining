// === Module 13801: PremiumSubscriptionPricingUpsell ===

// Module 13801 (PremiumSubscriptionPricingUpsell)
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4752 */;
import useSubscriptionPlansLoaded from "useSubscriptionPlansLoaded" /* 13667 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2109 */;
import UserStore from "UserStore" /* 1372 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4419 */;
import SubscriptionStore from "SubscriptionStore" /* 4420 */;
import IAPStore from "IAPStore" /* 7482 */;

require = fn;
function PricingSubheadingCopy() {
  let tmp = closure_21();
  _require = tmp;
  let items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj = require("initialize");
  const hasBoostDiscountResult = require("PremiumUtils").hasBoostDiscount(stateFromStores);
  const obj2 = require("PremiumUtils");
  const items1 = [LocaleStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => locale.locale);
  const obj3 = require("initialize");
  const subscriptionPlansLoaded = require("useSubscriptionPlansLoaded").useSubscriptionPlansLoaded();
  const obj4 = require("useSubscriptionPlansLoaded");
  const items2 = [SubscriptionStore];
  importDefault = require("initialize").useStateFromStores(items2, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const obj5 = require("initialize");
  const items3 = [SubscriptionPlanStore];
  let stateFromStores2 = require("initialize").useStateFromStores(items3, () => {
    value = undefined;
    if (null != closure_1) {
      value = SubscriptionPlanStore.get(tmp.planId);
    }
    return value;
  });
  const effect = noop.useEffect(() => {
    if (!IAPStore.isReady()) {
      closure_1(str3[15]).wait(() => closure_1_1(str3[16]).loadProducts());
      const obj = closure_1(str3[15]);
    }
  }, []);
  const obj6 = require("initialize");
  const items4 = [IAPStore];
  const obj7 = require("initialize");
  [tmp12, tmp13, tmp14, tmp15, tmp16] = str2(require("initialize").useStateFromStoresArray(items4, () => {
    const items = [IAPStore.getProduct(closure_0(str3[17]).ProductIds.PREMIUM_GUILD_1_MONTHLY), IAPStore.getProduct(closure_0(str3[17]).ProductIds.PREMIUM_TIER_2_MONTHLY), IAPStore.getProduct(closure_0(str3[17]).ProductIds.PREMIUM_TIER_2_PREMIUM_GUILD_1_MONTHLY), IAPStore.getProduct(closure_0(str3[17]).ProductIds.PREMIUM_TIER_2_YEARLY), IAPStore.getProduct(closure_0(str3[17]).ProductIds.PREMIUM_TIER_2_PREMIUM_GUILD_1_YEARLY)];
    return items;
  }), 5);
  if (stateFromStores2 == null) {
    stateFromStores2 = closure_13[constants.PREMIUM_MONTH_GUILD];
  }
  ({ interval, intervalCount } = stateFromStores2);
  if (subscriptionPlansLoaded) {
    if (IAPStore.isReady()) {
      if (null != tmp12) {
        if (tmp12 != null) {
          const formatted = tmp12.currencyCode.toLowerCase();
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
        const tmp2Result = tmp2(tmp3[19]);
        let result = diff1;
        if (tmp25) {
          result = tmp2(tmp3[20]).convertToMajorCurrencyUnits(diff1, CurrencyCodes.USD);
          const tmp2Result10 = tmp2(tmp3[20]);
        }
        tmp25 = tmp2(tmp3[19]).isAndroid() && null != diff1;
        const tmp2Result11 = tmp2(tmp3[19]);
        let result1 = tmp22;
        if (tmp28) {
          result1 = tmp2(tmp3[20]).convertToMajorCurrencyUnits(tmp22, CurrencyCodes.USD);
          const tmp2Result12 = tmp2(tmp3[20]);
        }
        str2 = "...";
        str3 = "...";
        if (null != result) {
          const tmp2Result13 = tmp2(tmp3[21]);
          str3 = tmp2Result13.formatRate(tmp2(tmp3[21]).formatPrice(result, formatted, { convertToMajorUnits: false }), interval, intervalCount);
          const tmp2Result14 = tmp2(tmp3[21]);
        }
        if (null != result1) {
          const tmp2Result15 = tmp2(tmp3[21]);
          str2 = tmp2Result15.formatRate(tmp2(tmp3[21]).formatPrice(result1, formatted, { convertToMajorUnits: false }), interval, intervalCount);
          const tmp2Result16 = tmp2(tmp3[21]);
        }
        if (result !== result1) {
          const obj9 = { style: tmp.cardText, accessibilityLabel: null, variant: "text-md/medium", children: null };
          const intl2 = tmp2(tmp3[22]).intl;
          const obj10 = { price: str3, originalPrice: str2 };
          obj9.accessibilityLabel = intl2.formatToPlainString(tmp2(tmp3[22]).t.lEIwDw, obj10);
          const intl3 = tmp2(tmp3[22]).intl;
          const obj11 = {
            price: str3,
            originalPrice: str2,
            originalPriceHook(children, arg1) {
                      let tmp = null;
                      if (str3 !== str2) {
                        const obj = { style: closure_0.originalPrice, variant: "text-sm/medium", color: "text-muted", children };
                        tmp = collapsedCategories(Text_Text.Text, obj, arg1);
                      }
                      return tmp;
                    }
          };
          obj9.children = intl3.format(tmp2(tmp3[22]).t.eRSsbf, obj11);
          let obj12 = obj9;
        } else {
          obj12 = { style: tmp.cardText, variant: "text-md/medium", children: null };
          const intl = tmp2(tmp3[22]).intl;
          const obj13 = { price: str3 };
          obj12.children = intl.format(tmp2(tmp3[22]).t.Mmf63F, obj13);
        }
        const tmp31Result = closure_18(tmp2(tmp3[18]).Text, obj12);
        tmp28 = tmp2(tmp3[19]).isAndroid() && null != tmp22;
        if (tmp5Result.hasFreeBoosts(stateFromStores)) {
          if (hasBoostDiscountResult) {
            if (tmp5Result3.isPremium(stateFromStores, closure_14.TIER_2)) {
              const obj14 = { children: null };
              const obj15 = { style: tmp.cardText, variant: "text-md/medium", children: null };
              const intl5 = tmp2(tmp3[22]).intl;
              const obj16 = { freeSubscriptionCount, discountPercent: tmp2(tmp3[23]).formatPercent(stateFromStores1, closure_17 / 100) };
              obj15.children = intl5.format(tmp2(tmp3[22]).t["ZikTt+"], obj16);
              const items5 = [closure_18(tmp2(tmp3[18]).Text, obj15), tmp31Result];
              obj14.children = items5;
              let tmp34 = closure_20(closure_19, obj14);
              const tmp2Result17 = tmp2(tmp3[23]);
            }
            return tmp34;
          }
        }
        tmp34 = tmp31Result;
        if (hasBoostDiscountResult) {
          tmp34 = tmp31Result;
          if (tmp5Result4.isPremium(stateFromStores, closure_14.TIER_1)) {
            const obj17 = { children: null };
            const obj18 = { style: tmp.cardText, variant: "text-md/medium", children: null };
            const intl4 = tmp2(tmp3[22]).intl;
            const obj19 = { discountPercent: tmp2(tmp3[23]).formatPercent(stateFromStores1, closure_17 / 100) };
            obj18.children = intl4.format(tmp2(tmp3[22]).t.XVMAKU, obj19);
            const items6 = [closure_18(tmp2(tmp3[18]).Text, obj18), tmp31Result];
            obj17.children = items6;
            tmp34 = closure_20(closure_19, obj17);
            const tmp2Result18 = tmp2(tmp3[23]);
          }
          tmp5Result4 = tmp5(tmp3[13]);
        }
        tmp5Result = tmp5(tmp3[13]);
      }
    }
  }
  return closure_18(require("Text/Text").Text, { style: tmp.cardText, variant: "text-md/medium", children: "..." });
}
const View = fn(17).View;
const CurrencyCodes = fn(1074).CurrencyCodes;
const PremiumConstants = fn(1374);
({ SubscriptionPlans: closure_12, SubscriptionPlanInfo: map1, PremiumTypes: closure_14, SubscriptionIntervalTypes: closure_15, NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_16, GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT: closure_17 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_18, Fragment: closure_19, jsxs: closure_20 } = jsxProd);
const createStyles = fn(4756);
let closure_21 = createStyles.createStyles({ title: { marginTop: 16 }, pricingSection: { alignItems: "center" }, originalPrice: { textDecorationLine: "line-through" }, cardText: { lineHeight: 20, marginTop: 8, textAlign: "center" } });
const size = fn(2);
let result = size.fileFinishedImporting("components_native/premium/PremiumSubscriptionPricingUpsell.tsx");

export default function PremiumSubscriptionPricingUpsell() {
  const tmp = closure_21();
  const obj2 = { style: tmp.pricingSection, children: null };
  const subscriptionPlansLoaded = useSubscriptionPlansLoaded.useSubscriptionPlansLoaded();
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t["3x1PFE"]);
  const items = [collapsedCategories(Text_Text.Text, obj3), ];
  let tmp5Result = null;
  if (subscriptionPlansLoaded) {
    tmp5Result = collapsedCategories(PricingSubheadingCopy, {});
  }
  items[1] = tmp5Result;
  obj2.children = items;
  return closure_1_20(View, obj2);
};