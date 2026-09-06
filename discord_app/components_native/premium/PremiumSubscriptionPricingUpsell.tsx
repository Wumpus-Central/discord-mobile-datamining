// discord_app/components_native/premium/PremiumSubscriptionPricingUpsell.tsx
import util from "../../intl/index.native.tsx";
import Text_Text from "../../design/components/Text/native/Text.tsx";
import useSubscriptionPlansLoaded from "../../modules/billing/hooks/useSubscriptionPlansLoaded.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import LocaleStore from "../../modules/user_settings/LocaleStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import SubscriptionPlanStore from "../../stores/billing/SubscriptionPlanStore.tsx";
import SubscriptionStore from "../../stores/billing/SubscriptionStore.tsx";
import IAPStore from "../../stores/native/IAPStore.android.tsx";

require = fn;
function PricingSubheadingCopy() {
  let tmp = closure_21();
  _require = tmp;
  let obj = require("initialize");
  let items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj1 = require("PremiumUtils");
  const hasBoostDiscountResult = obj1.hasBoostDiscount(stateFromStores);
  let obj2 = require("initialize");
  const items1 = [LocaleStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => locale.locale);
  let obj3 = require("useSubscriptionPlansLoaded");
  const subscriptionPlansLoaded = obj3.useSubscriptionPlansLoaded();
  let obj4 = require("initialize");
  const items2 = [SubscriptionStore];
  importDefault = obj4.useStateFromStores(items2, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let obj5 = require("initialize");
  const items3 = [SubscriptionPlanStore];
  let stateFromStores2 = obj5.useStateFromStores(items3, () => {
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
  let obj6 = require("initialize");
  let obj7 = IAPStore;
  const items4 = [IAPStore];
  [tmp12, tmp13, tmp14, tmp15, tmp16] = str2(
    obj6.useStateFromStoresArray(items4, () => {
      const items = [
        IAPStore.getProduct(closure_0(str3[17]).ProductIds.PREMIUM_GUILD_1_MONTHLY),
        IAPStore.getProduct(closure_0(str3[17]).ProductIds.PREMIUM_TIER_2_MONTHLY),
        IAPStore.getProduct(closure_0(str3[17]).ProductIds.PREMIUM_TIER_2_PREMIUM_GUILD_1_MONTHLY),
        IAPStore.getProduct(closure_0(str3[17]).ProductIds.PREMIUM_TIER_2_YEARLY),
        IAPStore.getProduct(closure_0(str3[17]).ProductIds.PREMIUM_TIER_2_PREMIUM_GUILD_1_YEARLY),
      ];
      return items;
    }),
    5,
  );
  if (stateFromStores2 == null) {
    stateFromStores2 = closure_13[constants.PREMIUM_MONTH_GUILD];
  }
  ({ interval, intervalCount } = stateFromStores2);
  if (subscriptionPlansLoaded) {
    if (obj7.isReady()) {
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
          str3 = tmp2Result3.formatRate(
            tmp2(tmp3[21]).formatPrice(result, formatted, { convertToMajorUnits: false }),
            interval,
            intervalCount,
          );
          const tmp2Result4 = tmp2(tmp3[21]);
        }
        if (null != result1) {
          const tmp2Result5 = tmp2(tmp3[21]);
          str2 = tmp2Result5.formatRate(
            tmp2(tmp3[21]).formatPrice(result1, formatted, { convertToMajorUnits: false }),
            interval,
            intervalCount,
          );
          const tmp2Result6 = tmp2(tmp3[21]);
        }
        if (result !== result1) {
          obj = { style: tmp.cardText, accessibilityLabel: null, variant: "text-md/medium", children: null };
          const intl2 = tmp2(tmp3[22]).intl;
          obj = { price: str3, originalPrice: str2 };
          obj.accessibilityLabel = intl2.formatToPlainString(tmp2(tmp3[22]).t.lEIwDw, obj);
          const intl3 = tmp2(tmp3[22]).intl;
          obj1 = {
            price: str3,
            originalPrice: str2,
            originalPriceHook(children, arg1) {
              let tmp = null;
              if (str3 !== str2) {
                const obj = {
                  style: closure_0.originalPrice,
                  variant: "text-sm/medium",
                  color: "text-muted",
                  children,
                };
                tmp = collapsedCategories(Text_Text.Text, obj, arg1);
              }
              return tmp;
            },
          };
          obj.children = intl3.format(tmp2(tmp3[22]).t.eRSsbf, obj1);
          obj2 = obj;
        } else {
          obj2 = { style: tmp.cardText, variant: "text-md/medium", children: null };
          const intl = tmp2(tmp3[22]).intl;
          obj3 = { price: str3 };
          obj2.children = intl.format(tmp2(tmp3[22]).t.Mmf63F, obj3);
        }
        const tmp31Result = closure_18(tmp2(tmp3[18]).Text, obj2);
        let tmp5Result = tmp5(tmp3[13]);
        if (tmp5Result.hasFreeBoosts(stateFromStores)) {
          if (hasBoostDiscountResult) {
            tmp5Result = tmp5(tmp3[13]);
            if (tmp5Result.isPremium(stateFromStores, closure_14.TIER_2)) {
              obj4 = { children: null };
              obj5 = { style: tmp.cardText, variant: "text-md/medium", children: null };
              const intl5 = tmp2(tmp3[22]).intl;
              obj6 = {
                freeSubscriptionCount,
                discountPercent: tmp2(tmp3[23]).formatPercent(stateFromStores1, closure_17 / 100),
              };
              obj5.children = intl5.format(tmp2(tmp3[22]).t["ZikTt+"], obj6);
              const items5 = [closure_18(tmp2(tmp3[18]).Text, obj5), tmp31Result];
              obj4.children = items5;
              let tmp34 = closure_20(closure_19, obj4);
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
            const obj8 = { style: tmp.cardText, variant: "text-md/medium", children: null };
            const intl4 = tmp2(tmp3[22]).intl;
            const obj9 = { discountPercent: tmp2(tmp3[23]).formatPercent(stateFromStores1, closure_17 / 100) };
            obj8.children = intl4.format(tmp2(tmp3[22]).t.XVMAKU, obj9);
            const items6 = [closure_18(tmp2(tmp3[18]).Text, obj8), tmp31Result];
            obj7.children = items6;
            tmp34 = closure_20(closure_19, obj7);
            const tmp2Result8 = tmp2(tmp3[23]);
          }
          tmp5Result1 = tmp5(tmp3[13]);
        }
        tmp28 = tmp2(tmp3[19]).isAndroid() && null != tmp22;
      }
    }
  }
  return closure_18(require("Text/Text").Text, { style: tmp.cardText, variant: "text-md/medium", children: "..." });
}
const View = fn(17).View;
const CurrencyCodes = fn(1074).CurrencyCodes;
const PremiumConstants = fn(1373);
({
  SubscriptionPlans: closure_12,
  SubscriptionPlanInfo: map1,
  PremiumTypes: closure_14,
  SubscriptionIntervalTypes: closure_15,
  NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_16,
  GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT: closure_17,
} = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_18, Fragment: closure_19, jsxs: closure_20 } = jsxProd);
const createStyles = fn(4560);
let closure_21 = createStyles.createStyles({
  title: { marginTop: 16 },
  pricingSection: { alignItems: "center" },
  originalPrice: { textDecorationLine: "line-through" },
  cardText: { lineHeight: 20, marginTop: 8, textAlign: "center" },
});
const size = fn(2);
let result = size.fileFinishedImporting("components_native/premium/PremiumSubscriptionPricingUpsell.tsx");

export default function PremiumSubscriptionPricingUpsell() {
  const tmp = closure_21();
  let obj = { style: tmp.pricingSection, children: null };
  const subscriptionPlansLoaded = obj.useSubscriptionPlansLoaded();
  obj = {
    style: tmp.title,
    accessibilityRole: "header",
    variant: "heading-lg/semibold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = util.intl;
  obj.children = intl.string(util.t["3x1PFE"]);
  const items = [collapsedCategories(Text_Text.Text, obj)];
  let tmp5Result = null;
  if (subscriptionPlansLoaded) {
    tmp5Result = collapsedCategories(PricingSubheadingCopy, {});
  }
  items[1] = tmp5Result;
  obj.children = items;
  return closure_1_20(View, obj);
}
