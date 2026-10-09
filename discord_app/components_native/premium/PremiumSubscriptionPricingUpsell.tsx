// === Module 13752: PremiumSubscriptionPricingUpsell ===

// Module 13752 (PremiumSubscriptionPricingUpsell)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5087 */;
import useSubscriptionPlansLoaded from "useSubscriptionPlansLoaded" /* 13616 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2128 */;
import UserStore from "UserStore" /* 1390 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4733 */;
import SubscriptionStore from "SubscriptionStore" /* 4734 */;
import IAPStore from "IAPStore" /* 7125 */;

require = fn;
const View = fn(17).View;
const CurrencyCodes = fn(1085).CurrencyCodes;
const PremiumConstants = fn(1392);
({ SubscriptionPlans: closure_12, SubscriptionPlanInfo: map1, PremiumTypes: closure_14, SubscriptionIntervalTypes: closure_15, NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_16, GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT: closure_17 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_18, Fragment: closure_19, jsxs: closure_20 } = jsxProd);
const createStyles = fn(5091);
let closure_21 = createStyles.createStyles({ title: { marginTop: 16 }, pricingSection: { alignItems: "center" }, originalPrice: { textDecorationLine: "line-through" }, cardText: { lineHeight: 20, marginTop: 8, textAlign: "center" } });
let ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function PricingSubheadingCopy() {
  const cResult = require("c").c(45);
  const tmp4 = closure_21();
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserStore];
    class T {
      constructor() {
        return closure_1_7.getCurrentUser();
      }
    }
    cResult[0] = items;
    cResult[1] = T;
    tmp5 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp5, T);
  if (cResult[2] !== stateFromStores) {
    const hasBoostDiscountResult = stateFromStores2(4728).hasBoostDiscount(stateFromStores);
    class T {
      constructor() {
        return closure_1_7.getCurrentUser();
      }
    }
    cResult[2] = stateFromStores;
    cResult[3] = hasBoostDiscountResult;
    const obj3 = stateFromStores2(4728);
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [LocaleStore];
    class D {
      constructor() {
        return closure_1_6.locale;
      }
    }
    cResult[4] = items1;
    cResult[5] = D;
    let tmp13 = D;
    let tmp12 = items1;
  } else {
    tmp12 = cResult[4];
    tmp13 = cResult[5];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp12, tmp13);
  const tmpResult6 = require("initialize");
  const subscriptionPlansLoaded = require("useSubscriptionPlansLoaded").useSubscriptionPlansLoaded();
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [SubscriptionStore];
    class Y {
      constructor() {
        return closure_1_9.getPremiumTypeSubscription();
      }
    }
    cResult[6] = items2;
    cResult[7] = Y;
    let tmp18 = Y;
    let tmp17 = items2;
  } else {
    tmp17 = cResult[6];
    tmp18 = cResult[7];
  }
  const tmpResult7 = require("useSubscriptionPlansLoaded");
  stateFromStores2 = require("initialize").useStateFromStores(tmp17, tmp18);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [SubscriptionPlanStore];
    class Y {
      constructor() {
        return closure_1_9.getPremiumTypeSubscription();
      }
    }
    cResult[8] = items3;
    let tmp21 = items3;
  } else {
    tmp21 = cResult[8];
  }
  if (cResult[9] !== stateFromStores2) {
    class N {
      constructor() {
        value = undefined;
        if (null != closure_1) {
          tmp3 = closure_8;
          value = closure_8.get(tmp.planId);
        }
        return value;
      }
    }
    cResult[9] = stateFromStores2;
    class Y {
      constructor() {
        return closure_1_9.getPremiumTypeSubscription();
      }
    }
    cResult[10] = N;
  } else {
    class N {
      constructor() {
        value = undefined;
        if (null != closure_1) {
          tmp3 = closure_8;
          value = closure_8.get(tmp.planId);
        }
        return value;
      }
    }
  }
  const tmpResult8 = require("initialize");
  let stateFromStores3 = require("initialize").useStateFromStores(tmp21, N);
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
      constructor() {
        if (!closure_1_10.isReady()) {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[17]);
          waitResult = obj.wait(() => { ... });
        }
        return;
      }
    }
    const items4 = [];
    class Y {
      constructor() {
        return closure_1_9.getPremiumTypeSubscription();
      }
    }
    cResult[12] = B;
    let tmp26 = B;
    const tmp25 = items4;
  } else {
    class B {
      constructor() {
        if (!closure_1_10.isReady()) {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[17]);
          waitResult = obj.wait(() => { ... });
        }
        return;
      }
    }
    tmp26 = cResult[12];
  }
  const effect = noop.useEffect(tmp26, tmp25);
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
      constructor() {
        if (!closure_1_10.isReady()) {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[17]);
          waitResult = obj.wait(() => { ... });
        }
        return;
      }
    }
    const items5 = [IAPStore];
    class V {
      constructor() {
        items = [, , , , ];
        items[0] = closure_1_10.getProduct(closure_0(closure_2[19]).ProductIds.PREMIUM_GUILD_1_MONTHLY);
        items[1] = closure_1_10.getProduct(closure_0(closure_2[19]).ProductIds.PREMIUM_TIER_2_MONTHLY);
        items[2] = closure_1_10.getProduct(closure_0(closure_2[19]).ProductIds.PREMIUM_TIER_2_PREMIUM_GUILD_1_MONTHLY);
        items[3] = closure_1_10.getProduct(closure_0(closure_2[19]).ProductIds.PREMIUM_TIER_2_YEARLY);
        items[4] = closure_1_10.getProduct(closure_0(closure_2[19]).ProductIds.PREMIUM_TIER_2_PREMIUM_GUILD_1_YEARLY);
        return items;
      }
    }
    cResult[13] = items5;
    cResult[14] = V;
    let tmp29 = V;
    const tmp28 = items5;
  } else {
    class B {
      constructor() {
        if (!closure_1_10.isReady()) {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[17]);
          waitResult = obj.wait(() => { ... });
        }
        return;
      }
    }
    tmp29 = cResult[14];
  }
  const tmpResult9 = require("initialize");
  const tmpResult10 = require("initialize");
  [r10118, r10119, r10120, r10121, r10122] = require("initialize").useStateFromStoresArray(tmp28, tmp29);
  if (stateFromStores3 == null) {
    class B {
      constructor() {
        if (!closure_1_10.isReady()) {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[17]);
          waitResult = obj.wait(() => { ... });
        }
        return;
      }
    }
    stateFromStores3 = dependencyMap2[constants.PREMIUM_MONTH_GUILD];
  }
  ({ interval, intervalCount } = stateFromStores3);
  if (subscriptionPlansLoaded) {
    class B {
      constructor() {
        if (!closure_1_10.isReady()) {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[17]);
          waitResult = obj.wait(() => { ... });
        }
        return;
      }
    }
    if (IAPStore.isReady()) {
      class B {
        constructor() {
          if (!closure_1_10.isReady()) {
            tmp = closure_1;
            tmp2 = closure_2;
            obj = closure_1(closure_2[17]);
            waitResult = obj.wait(() => { ... });
          }
          return;
        }
      }
    }
  }
  if (cResult[15] !== tmp4.cardText) {
    class B {
      constructor() {
        if (!closure_1_10.isReady()) {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[17]);
          waitResult = obj.wait(() => { ... });
        }
        return;
      }
    }
    { style: null, variant: "text-md/medium", children: "..." }.style = tmp4.cardText;
    class V {
      constructor() {
        items = [, , , , ];
        items[0] = closure_1_10.getProduct(closure_0(closure_2[19]).ProductIds.PREMIUM_GUILD_1_MONTHLY);
        items[1] = closure_1_10.getProduct(closure_0(closure_2[19]).ProductIds.PREMIUM_TIER_2_MONTHLY);
        items[2] = closure_1_10.getProduct(closure_0(closure_2[19]).ProductIds.PREMIUM_TIER_2_PREMIUM_GUILD_1_MONTHLY);
        items[3] = closure_1_10.getProduct(closure_0(closure_2[19]).ProductIds.PREMIUM_TIER_2_YEARLY);
        items[4] = closure_1_10.getProduct(closure_0(closure_2[19]).ProductIds.PREMIUM_TIER_2_PREMIUM_GUILD_1_YEARLY);
        return items;
      }
    }
    cResult[15] = tmp4.cardText;
    cResult[16] = tmp33;
    const obj2 = { style: null, variant: "text-md/medium", children: "..." };
  } else {
    class B {
      constructor() {
        if (!closure_1_10.isReady()) {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[17]);
          waitResult = obj.wait(() => { ... });
        }
        return;
      }
    }
  }
  return tmp33;
}) : (function PricingSubheadingCopy() {
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
      closure_1(str3[17]).wait(() => closure_1_1(str3[18]).loadProducts());
      const obj = closure_1(str3[17]);
    }
  }, []);
  const obj6 = require("initialize");
  const items4 = [IAPStore];
  const obj7 = require("initialize");
  [tmp12, tmp13, tmp14, tmp15, tmp16] = str2(require("initialize").useStateFromStoresArray(items4, () => {
    const items = [IAPStore.getProduct(closure_0(str3[19]).ProductIds.PREMIUM_GUILD_1_MONTHLY), IAPStore.getProduct(closure_0(str3[19]).ProductIds.PREMIUM_TIER_2_MONTHLY), IAPStore.getProduct(closure_0(str3[19]).ProductIds.PREMIUM_TIER_2_PREMIUM_GUILD_1_MONTHLY), IAPStore.getProduct(closure_0(str3[19]).ProductIds.PREMIUM_TIER_2_YEARLY), IAPStore.getProduct(closure_0(str3[19]).ProductIds.PREMIUM_TIER_2_PREMIUM_GUILD_1_YEARLY)];
    return items;
  }), 5);
  if (stateFromStores2 == null) {
    stateFromStores2 = dependencyMap2[constants.PREMIUM_MONTH_GUILD];
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
        const tmp2Result = tmp2(tmp3[21]);
        let result = diff1;
        if (tmp25) {
          result = tmp2(tmp3[22]).convertToMajorCurrencyUnits(diff1, CurrencyCodes.USD);
          const tmp2Result10 = tmp2(tmp3[22]);
        }
        tmp25 = tmp2(tmp3[21]).isAndroid() && null != diff1;
        const tmp2Result11 = tmp2(tmp3[21]);
        let result1 = tmp22;
        if (tmp28) {
          result1 = tmp2(tmp3[22]).convertToMajorCurrencyUnits(tmp22, CurrencyCodes.USD);
          const tmp2Result12 = tmp2(tmp3[22]);
        }
        str2 = "...";
        str3 = "...";
        if (null != result) {
          const tmp2Result13 = tmp2(tmp3[23]);
          str3 = tmp2Result13.formatRate(tmp2(tmp3[23]).formatPrice(result, formatted, { convertToMajorUnits: false }), interval, intervalCount);
          const tmp2Result14 = tmp2(tmp3[23]);
        }
        if (null != result1) {
          const tmp2Result15 = tmp2(tmp3[23]);
          str2 = tmp2Result15.formatRate(tmp2(tmp3[23]).formatPrice(result1, formatted, { convertToMajorUnits: false }), interval, intervalCount);
          const tmp2Result16 = tmp2(tmp3[23]);
        }
        if (result !== result1) {
          const obj9 = { style: tmp.cardText, accessibilityLabel: null, variant: "text-md/medium", children: null };
          const intl2 = tmp2(tmp3[24]).intl;
          const obj10 = { price: str3, originalPrice: str2 };
          obj9.accessibilityLabel = intl2.formatToPlainString(tmp2(tmp3[24]).t.lEIwDw, obj10);
          const intl3 = tmp2(tmp3[24]).intl;
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
          obj9.children = intl3.format(tmp2(tmp3[24]).t.eRSsbf, obj11);
          let obj12 = obj9;
        } else {
          obj12 = { style: tmp.cardText, variant: "text-md/medium", children: null };
          const intl = tmp2(tmp3[24]).intl;
          const obj13 = { price: str3 };
          obj12.children = intl.format(tmp2(tmp3[24]).t.Mmf63F, obj13);
        }
        const tmp31Result = closure_18(tmp2(tmp3[20]).Text, obj12);
        tmp28 = tmp2(tmp3[21]).isAndroid() && null != tmp22;
        if (tmp5Result.hasFreeBoosts(stateFromStores)) {
          if (hasBoostDiscountResult) {
            if (tmp5Result3.isPremium(stateFromStores, closure_14.TIER_2)) {
              const obj14 = { children: null };
              const obj15 = { style: tmp.cardText, variant: "text-md/medium", children: null };
              const intl5 = tmp2(tmp3[24]).intl;
              const obj16 = { freeSubscriptionCount, discountPercent: tmp2(tmp3[25]).formatPercent(stateFromStores1, closure_17 / 100) };
              obj15.children = intl5.format(tmp2(tmp3[24]).t["ZikTt+"], obj16);
              const items5 = [closure_18(tmp2(tmp3[20]).Text, obj15), tmp31Result];
              obj14.children = items5;
              let tmp34 = closure_20(closure_19, obj14);
              const tmp2Result17 = tmp2(tmp3[25]);
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
            const intl4 = tmp2(tmp3[24]).intl;
            const obj19 = { discountPercent: tmp2(tmp3[25]).formatPercent(stateFromStores1, closure_17 / 100) };
            obj18.children = intl4.format(tmp2(tmp3[24]).t.XVMAKU, obj19);
            const items6 = [closure_18(tmp2(tmp3[20]).Text, obj18), tmp31Result];
            obj17.children = items6;
            tmp34 = closure_20(closure_19, obj17);
            const tmp2Result18 = tmp2(tmp3[25]);
          }
          tmp5Result4 = tmp5(tmp3[15]);
        }
        tmp5Result = tmp5(tmp3[15]);
      }
    }
  }
  return closure_18(require("Text/Text").Text, { style: tmp.cardText, variant: "text-md/medium", children: "..." });
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("components_native/premium/PremiumSubscriptionPricingUpsell.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumSubscriptionPricingUpsell() {
  const cResult = c.c(9);
  const tmp4 = closure_21();
  const subscriptionPlansLoaded = useSubscriptionPlansLoaded.useSubscriptionPlansLoaded();
  ({ pricingSection, title } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["3x1PFE"]);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.title) {
    const obj3 = { style: title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: first };
    const tmp10 = collapsedCategories(Text_Text.Text, obj3);
    cResult[1] = tmp4.title;
    cResult[2] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== subscriptionPlansLoaded) {
    let tmp12 = null;
    if (subscriptionPlansLoaded) {
      tmp12 = collapsedCategories(closure_22, {});
    }
    cResult[3] = subscriptionPlansLoaded;
    cResult[4] = tmp12;
    let tmp11 = tmp12;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] === tmp4.pricingSection) {
    if (cResult[6] === tmp8) {
      if (cResult[7] === tmp11) {
        let tmp15 = cResult[8];
      }
      return tmp15;
    }
  }
  const obj4 = { style: pricingSection, children: null };
  const items = [tmp8, tmp11];
  obj4.children = items;
  const tmp16 = constants2(View, obj4);
  cResult[5] = tmp4.pricingSection;
  cResult[6] = tmp8;
  cResult[7] = tmp11;
  cResult[8] = tmp16;
  tmp15 = tmp16;
}) : (function PremiumSubscriptionPricingUpsell() {
  const tmp = closure_21();
  const obj2 = { style: tmp.pricingSection, children: null };
  const subscriptionPlansLoaded = useSubscriptionPlansLoaded.useSubscriptionPlansLoaded();
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t["3x1PFE"]);
  const items = [collapsedCategories(Text_Text.Text, obj3), ];
  let tmp5Result = null;
  if (subscriptionPlansLoaded) {
    tmp5Result = collapsedCategories(closure_22, {});
  }
  items[1] = tmp5Result;
  obj2.children = items;
  return constants2(View, obj2);
});