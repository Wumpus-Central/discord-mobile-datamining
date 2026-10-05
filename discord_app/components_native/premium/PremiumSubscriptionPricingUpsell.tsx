// === Module 13342: PremiumSubscriptionPricingUpsell ===

// Module 13342 (PremiumSubscriptionPricingUpsell)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl6 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import useSubscriptionPlansLoaded from "useSubscriptionPlansLoaded" /* 13205 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import UserStore from "UserStore" /* 1377 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4533 */;
import SubscriptionStore from "SubscriptionStore" /* 4534 */;
import IAPStore from "IAPStore" /* 6739 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, tmp2, tmp3, waitResult;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let map1;
const View = react_native.View;
const CurrencyCodes = Constants.CurrencyCodes;
({ SubscriptionPlans: closure_12, SubscriptionPlanInfo: map1, PremiumTypes: closure_14, SubscriptionIntervalTypes: closure_15, NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_16, GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT: closure_17 } = PremiumConstants);
({ jsx: closure_18, Fragment: closure_19, jsxs: closure_20 } = Fragment);
let closure_21 = createStyles.createStyles({ title: { marginTop: 16 }, pricingSection: { alignItems: "center" }, originalPrice: { textDecorationLine: "line-through" }, cardText: { lineHeight: 20, marginTop: 8, textAlign: "center" } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_0;
  let currentUser;
  let interval;
  let intervalCount;
  let locale;
  let premiumTypeSubscription;
  let stateFromStores2;
  let tmp12;
  let tmp13;
  let tmp17;
  let tmp18;
  let tmp21;
  let tmp25;
  let tmp26;
  let tmp29;
  let tmp5;
  let tmp6;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(45);
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
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, T);
  if (cResult[2] !== stateFromStores) {
    const obj3 = stateFromStores2(4528);
    const hasBoostDiscountResult = obj3.hasBoostDiscount(stateFromStores);
    class T {
      constructor() {
        return closure_1_7.getCurrentUser();
      }
    }
    cResult[2] = stateFromStores;
    cResult[3] = hasBoostDiscountResult;
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
    tmp13 = D;
    tmp12 = items1;
  } else {
    tmp12 = cResult[4];
    tmp13 = cResult[5];
  }
  const tmpResult6 = tmp(504);
  const stateFromStores1 = tmpResult6.useStateFromStores(tmp12, tmp13);
  const tmpResult7 = tmp(13205);
  const subscriptionPlansLoaded = tmpResult7.useSubscriptionPlansLoaded();
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [SubscriptionStore];
    class Y {
      constructor() {
        return closure_1_9.getPremiumTypeSubscription();
      }
    }
    cResult[6] = items2;
    cResult[7] = Y;
    tmp18 = Y;
    tmp17 = items2;
  } else {
    tmp17 = cResult[6];
    tmp18 = cResult[7];
  }
  const tmpResult8 = tmp(504);
  stateFromStores2 = tmpResult8.useStateFromStores(tmp17, tmp18);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [SubscriptionPlanStore];
    class Y {
      constructor() {
        return closure_1_9.getPremiumTypeSubscription();
      }
    }
    cResult[8] = items3;
    tmp21 = items3;
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
  const tmpResult9 = tmp(504);
  let stateFromStores3 = tmpResult9.useStateFromStores(tmp21, N);
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
      constructor() {
        if (!closure_1_10.isReady()) {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[17]);
          waitResult = obj.wait(() => { /* body not rendered: F143228 */ });
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
    tmp26 = B;
    tmp25 = items4;
  } else {
    class B {
      constructor() {
        if (!closure_1_10.isReady()) {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[17]);
          waitResult = obj.wait(() => { /* body not rendered: F143228 */ });
        }
        return;
      }
    }
    tmp26 = cResult[12];
  }
  const effect = react.useEffect(tmp26, tmp25);
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
      constructor() {
        if (!closure_1_10.isReady()) {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[17]);
          waitResult = obj.wait(() => { /* body not rendered: F143228 */ });
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
    tmp29 = V;
  } else {
    class B {
      constructor() {
        if (!closure_1_10.isReady()) {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[17]);
          waitResult = obj.wait(() => { /* body not rendered: F143228 */ });
        }
        return;
      }
    }
    tmp29 = cResult[14];
  }
  const tmpResult10 = tmp(504);
  [r10118, r10119, r10120, r10121, r10122] = tmpResult10.useStateFromStoresArray(tmp28, tmp29);
  _slicedToArray(tmpResult10.useStateFromStoresArray(tmp28, tmp29), 5);
  if (stateFromStores3 == null) {
    class B {
      constructor() {
        if (!closure_1_10.isReady()) {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[17]);
          waitResult = obj.wait(() => { /* body not rendered: F143228 */ });
        }
        return;
      }
    }
    stateFromStores3 = closure_13[constants.PREMIUM_MONTH_GUILD];
  }
  ({ interval, intervalCount } = stateFromStores3);
  if (subscriptionPlansLoaded) {
    class B {
      constructor() {
        if (!closure_1_10.isReady()) {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[17]);
          waitResult = obj.wait(() => { /* body not rendered: F143228 */ });
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
            waitResult = obj.wait(() => { /* body not rendered: F143228 */ });
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
          waitResult = obj.wait(() => { /* body not rendered: F143228 */ });
        }
        return;
      }
    }
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
  } else {
    class B {
      constructor() {
        if (!closure_1_10.isReady()) {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[17]);
          waitResult = obj.wait(() => { /* body not rendered: F143228 */ });
        }
        return;
      }
    }
  }
  return tmp33;
}) : (() => {
  let XVMAKU;
  let closure_0;
  let closure_1;
  let currentUser;
  let format;
  let format2;
  let interval;
  let intervalCount;
  let intl;
  let intl2;
  let intl3;
  let items5;
  let items6;
  let locale;
  let obj10;
  let obj11;
  let obj13;
  let obj16;
  let obj19;
  let premiumTypeSubscription;
  let prop;
  let str2;
  let str3;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp2Result17;
  let tmp2Result18;
  const f114493 = () => {
    const items = [IAPStore.getProduct(closure_0(str3[19]).ProductIds.PREMIUM_GUILD_1_MONTHLY), IAPStore.getProduct(closure_0(str3[19]).ProductIds.PREMIUM_TIER_2_MONTHLY), IAPStore.getProduct(closure_0(str3[19]).ProductIds.PREMIUM_TIER_2_PREMIUM_GUILD_1_MONTHLY), IAPStore.getProduct(closure_0(str3[19]).ProductIds.PREMIUM_TIER_2_YEARLY), IAPStore.getProduct(closure_0(str3[19]).ProductIds.PREMIUM_TIER_2_PREMIUM_GUILD_1_YEARLY)];
    return items;
  };
  let tmp = closure_21();
  _require = tmp;
  let obj = require("get initialized");
  let items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = require("PremiumUtils");
  const hasBoostDiscountResult = obj2.hasBoostDiscount(stateFromStores);
  const items1 = [LocaleStore];
  const obj3 = require("get initialized");
  const stateFromStores1 = obj3.useStateFromStores(items1, () => locale.locale);
  const obj4 = require("useSubscriptionPlansLoaded");
  const subscriptionPlansLoaded = obj4.useSubscriptionPlansLoaded();
  const items2 = [SubscriptionStore];
  const obj5 = require("get initialized");
  importDefault = obj5.useStateFromStores(items2, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const items3 = [SubscriptionPlanStore];
  const obj6 = require("get initialized");
  let stateFromStores2 = obj6.useStateFromStores(items3, () => {
    let value;
    if (null != closure_1) {
      value = SubscriptionPlanStore.get(tmp.planId);
    }
    return value;
  });
  const effect = react.useEffect(() => {
    if (!IAPStore.isReady()) {
      let obj = closure_1(str3[17]);
      obj.wait(() => {
        const obj = closure_1_1(str3[18]);
        return obj.loadProducts();
      });
    }
  }, []);
  const items4 = [IAPStore];
  const obj7 = require("get initialized");
  [tmp12, tmp13, tmp14, tmp15, tmp16] = str2(obj7.useStateFromStoresArray(items4, f114493), 5);
  str2(obj7.useStateFromStoresArray(items4, f114493), 5);
  if (stateFromStores2 == null) {
    stateFromStores2 = closure_13[constants.PREMIUM_MONTH_GUILD];
  }
  ({ interval, intervalCount } = stateFromStores2);
  if (subscriptionPlansLoaded) {
    if (IAPStore.isReady()) {
      if (null != tmp12) {
        let formatted;
        let price;
        let tmp22;
        let diff1;
        let obj12;
        let tmp36;
        if (tmp12 != null) {
          const str = tmp12.currencyCode;
          formatted = str.toLowerCase();
        }
        if (tmp12 != null) {
          price = tmp12.price;
        }
        if (interval === constants2.YEAR) {
          let diff = null;
          if (null != tmp16) {
            diff = null;
            if (null != tmp15) {
              diff = tmp16.price - tmp15.price;
            }
          }
          tmp22 = diff;
          diff1 = diff;
        } else {
          tmp22 = price;
          diff1 = price;
          const tmp21 = hasBoostDiscountResult && null != price;
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
        let result = diff1;
        const tmp2Result = require("PlatformUtils");
        const tmp25 = tmp2Result.isAndroid() && null != diff1;
        if (tmp25) {
          const tmp2Result10 = require("utils/PriceUtils");
          result = tmp2Result10.convertToMajorCurrencyUnits(diff1, CurrencyCodes.USD);
        }
        let result1 = tmp22;
        const tmp2Result11 = require("PlatformUtils");
        const tmp28 = tmp2Result11.isAndroid() && null != tmp22;
        if (tmp28) {
          const tmp2Result12 = require("utils/PriceUtils");
          result1 = tmp2Result12.convertToMajorCurrencyUnits(tmp22, CurrencyCodes.USD);
        }
        str2 = "...";
        str3 = "...";
        if (null != result) {
          const formatRate = tmp2(tmp3[23]).formatRate;
          require("PriceUtils");
          const tmp2Result14 = require("PriceUtils");
          str3 = formatRate(tmp2Result14.formatPrice(result, formatted, { convertToMajorUnits: false }), interval, intervalCount);
        }
        if (null != result1) {
          const formatRate2 = tmp2(tmp3[23]).formatRate;
          require("PriceUtils");
          const tmp2Result16 = require("PriceUtils");
          str2 = formatRate2(tmp2Result16.formatPrice(result1, formatted, { convertToMajorUnits: false }), interval, intervalCount);
        }
        const Text = tmp2(tmp3[20]).Text;
        if (result !== result1) {
          const obj9 = { style: tmp.cardText, accessibilityLabel: intl2.formatToPlainString(require("intl").t.lEIwDw, obj10), variant: "text-md/medium", children: intl3.format(require("intl").t.eRSsbf, obj11) };
          intl2 = tmp2(tmp3[24]).intl;
          obj10 = { price: str3, originalPrice: str2 };
          intl3 = tmp2(tmp3[24]).intl;
          obj12 = obj9;
          obj11 = {
            price: str3,
            originalPrice: str2,
            originalPriceHook(children, arg1) {
                      let tmp = null;
                      if (str3 !== str2) {
                        const obj = { style: closure_0.originalPrice, variant: "text-sm/medium", color: "text-muted", children };
                        tmp = authStore4(Text_Text.Text, obj, arg1);
                      }
                      return tmp;
                    }
          };
        } else {
          obj12 = { style: tmp.cardText, variant: "text-md/medium", children: intl.format(tmp2(tmp3[24]).t.Mmf63F, obj13) };
          intl = tmp2(tmp3[24]).intl;
          obj13 = { price: str3 };
        }
        const tmp33Result = closure_18(Text, obj12);
        const tmp5Result = require("PremiumUtils");
        if (tmp5Result.hasFreeBoosts(stateFromStores)) {
          if (hasBoostDiscountResult) {
            const tmp5Result3 = require("PremiumUtils");
            if (tmp5Result3.isPremium(stateFromStores, closure_14.TIER_2)) {
              const obj14 = { children: items5 };
              const obj15 = { style: tmp.cardText, variant: "text-md/medium", children: format2(prop, obj16) };
              const Text3 = tmp2(tmp3[20]).Text;
              const intl5 = tmp2(tmp3[24]).intl;
              format2 = intl5.format;
              obj16 = { freeSubscriptionCount, discountPercent: tmp2Result17.formatPercent(stateFromStores1, closure_17 / 100) };
              prop = tmp2(tmp3[24]).t["ZikTt+"];
              tmp2Result17 = require("NumberUtils");
              items5 = [closure_18(Text3, obj15), tmp33Result];
              tmp36 = closure_20(closure_19, obj14);
            }
            return tmp36;
          }
        }
        tmp36 = tmp33Result;
        if (hasBoostDiscountResult) {
          tmp36 = tmp33Result;
          const tmp5Result4 = require("PremiumUtils");
          if (tmp5Result4.isPremium(stateFromStores, closure_14.TIER_1)) {
            const obj17 = { children: items6 };
            const obj18 = { style: tmp.cardText, variant: "text-md/medium", children: format(XVMAKU, obj19) };
            const Text2 = tmp2(tmp3[20]).Text;
            const intl4 = tmp2(tmp3[24]).intl;
            format = intl4.format;
            obj19 = { discountPercent: tmp2Result18.formatPercent(stateFromStores1, closure_17 / 100) };
            XVMAKU = tmp2(tmp3[24]).t.XVMAKU;
            tmp2Result18 = require("NumberUtils");
            items6 = [closure_18(Text2, obj18), tmp33Result];
            tmp36 = closure_20(closure_19, obj17);
          }
        }
      }
    }
  }
  const obj20 = { style: tmp.cardText, variant: "text-md/medium", children: "..." };
  return closure_18(require("Text/Text").Text, obj20);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let items;
  let pricingSection;
  let title;
  let tmp11;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(9);
  const tmp4 = closure_21();
  const obj2 = useSubscriptionPlansLoaded;
  const subscriptionPlansLoaded = obj2.useSubscriptionPlansLoaded();
  ({ pricingSection, title } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl6.intl;
    const stringResult = intl.string(intl6.t["3x1PFE"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.title) {
    const obj3 = { style: title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: first };
    const tmp10 = authStore4(Text_Text.Text, obj3);
    cResult[1] = tmp4.title;
    cResult[2] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== subscriptionPlansLoaded) {
    let tmp12 = null;
    if (subscriptionPlansLoaded) {
      tmp12 = authStore4(closure_22, {});
    }
    cResult[3] = subscriptionPlansLoaded;
    cResult[4] = tmp12;
    tmp11 = tmp12;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] === tmp4.pricingSection) {
    if (cResult[6] === tmp8) {
      let tmp15;
      if (cResult[7] === tmp11) {
        tmp15 = cResult[8];
      }
      return tmp15;
    }
  }
  const obj4 = { style: pricingSection, children: items };
  items = [tmp8, tmp11];
  const tmp16 = closure_20(View, obj4);
  cResult[5] = tmp4.pricingSection;
  cResult[6] = tmp8;
  cResult[7] = tmp11;
  cResult[8] = tmp16;
  tmp15 = tmp16;
}) : (() => {
  let intl;
  let items;
  const tmp = closure_21();
  const obj2 = { style: tmp.pricingSection, children: items };
  const obj = useSubscriptionPlansLoaded;
  const subscriptionPlansLoaded = obj.useSubscriptionPlansLoaded();
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl.string(intl6.t["3x1PFE"]) };
  const Text = Text_Text.Text;
  intl = intl6.intl;
  items = [authStore4(Text, obj3), ];
  let tmp5Result = null;
  if (subscriptionPlansLoaded) {
    tmp5Result = authStore4(closure_22, {});
  }
  items[1] = tmp5Result;
  return closure_20(View, obj2);
});
let result = size.fileFinishedImporting("components_native/premium/PremiumSubscriptionPricingUpsell.tsx");

export default tmp4;