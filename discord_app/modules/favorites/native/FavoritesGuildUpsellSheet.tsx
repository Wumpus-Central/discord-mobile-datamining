// === Module 10053: FavoritesGuildUpsellSheet ===

// Module 10053 (FavoritesGuildUpsellSheet)
import Constants from "Constants" /* 1085 */;
import router_utils from "router_utils" /* 1112 */;
import FavoritesConstants from "FavoritesConstants" /* 2065 */;
import _modDef3395 from "module_3395" /* 3395 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 8896 */;
import openPremiumModalDefault from "openPremiumModal" /* 8943 */;
import useTrackFavoritesGuildUpsellModalOpenedDefault from "useTrackFavoritesGuildUpsellModalOpened" /* 10054 */;
import FavoritesGuildAnalytics from "FavoritesGuildAnalytics" /* 10057 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault;

let metroImportDefault;
let metroRequire;
const MAX_FAVORITE_CHANNELS = FavoritesConstants.MAX_FAVORITE_CHANNELS;
const FAVORITES = Constants.FAVORITES;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let analyticsLocations;
  let first;
  let formatToPlainStringResult;
  let items;
  let limit;
  let source;
  let tmp7;
  let variant;
  let obj = analyticsLocations(576);
  const cResult = obj.c(22);
  ({ limit, source, variant } = arg0);
  if (undefined === limit) {
    limit = tmp(10050).FREE_FAVORITE_LIMIT;
  }
  let str = "channel_context_menu";
  if (undefined !== source) {
    str = source;
  }
  let str2 = "no_access";
  if (undefined !== variant) {
    str2 = variant;
  }
  analyticsLocations = first(10054)(str).analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      const obj = first(dependencyMap[8]);
      obj.hideActionSheet(analyticsLocations(dependencyMap[9]).FAVORITES_UPSELL_SHEET_KEY);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== ("limit_reached" === str2)) {
    const intl = tmp(1126).intl;
    const string = intl.string;
    const tmp4Result = first(3395);
    const stringResult = string("limit_reached" === str2 ? tmp4Result.hINqUs : tmp4Result.aA0vO8);
    cResult[1] = "limit_reached" === str2;
    cResult[2] = stringResult;
    tmp7 = stringResult;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === "limit_reached" === str2) {
    let tmp10;
    let tmp13;
    let tmp16;
    let tmp18;
    let tmp21;
    let tmp24;
    let tmp25;
    if (cResult[4] === limit) {
      tmp10 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp15 = closure_6(analyticsLocations(10055).FavoritesSpotIllustration, {});
      cResult[6] = tmp15;
      tmp13 = tmp15;
    } else {
      tmp13 = cResult[6];
    }
    const _Symbol2 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(1126).intl;
      const stringResult1 = intl3.string(analyticsLocations(1126).t.pj0XBN);
      cResult[7] = stringResult1;
      tmp16 = stringResult1;
    } else {
      tmp16 = cResult[7];
    }
    if (cResult[8] !== analyticsLocations) {
      let obj2 = {
        size: "lg",
        variant: "primary",
        text: tmp16,
        onPress() {
              first();
              const obj = { analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
              const tmp2 = openPremiumModalDefault;
              tmp2(obj);
            }
      };
      const tmp20 = closure_6(analyticsLocations(5601).Button, obj2);
      cResult[8] = analyticsLocations;
      cResult[9] = tmp20;
      tmp18 = tmp20;
    } else {
      tmp18 = cResult[9];
    }
    if (cResult[10] !== ("limit_reached" === str2)) {
      const intl4 = tmp(1126).intl;
      const string2 = intl4.string;
      const tmp4Result2 = first(3395);
      const string2Result = string2("limit_reached" === str2 ? tmp4Result2.PprSsy : tmp4Result2["+dSwhE"]);
      cResult[10] = "limit_reached" === str2;
      cResult[11] = string2Result;
      tmp21 = string2Result;
    } else {
      tmp21 = cResult[11];
    }
    const _Symbol3 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function x() {
        first();
        const obj = FavoritesGuildAnalytics;
        const result = obj.setNextFavoritesGuildViewSource("upsell_modal");
        const obj2 = router_utils;
        obj2.transitionToGuild(FAVORITES);
      };
      cResult[12] = fn2;
      tmp24 = fn2;
    } else {
      tmp24 = cResult[12];
    }
    if (cResult[13] !== tmp21) {
      const obj3 = { size: "lg", variant: "secondary", text: tmp21, onPress: tmp24 };
      const tmp27 = closure_6(analyticsLocations(5601).Button, obj3);
      cResult[13] = tmp21;
      cResult[14] = tmp27;
      tmp25 = tmp27;
    } else {
      tmp25 = cResult[14];
    }
    if (cResult[15] === tmp25) {
      let tmp28;
      if (cResult[16] === tmp18) {
        tmp28 = cResult[17];
      }
      if (cResult[18] === tmp28) {
        if (cResult[19] === tmp7) {
          let tmp31;
          if (cResult[20] === tmp10) {
            tmp31 = cResult[21];
          }
          return tmp31;
        }
      }
      const obj4 = { title: tmp7, description: tmp10, illustration: tmp13, actions: tmp28 };
      const tmp33 = closure_6(analyticsLocations(10058).PromoSheet, obj4);
      cResult[18] = tmp28;
      cResult[19] = tmp7;
      cResult[20] = tmp10;
      cResult[21] = tmp33;
      tmp31 = tmp33;
    }
    const obj5 = { children: items };
    items = [tmp18, tmp25];
    const tmp30 = closure_7(analyticsLocations(5599).ButtonGroup, obj5);
    cResult[15] = tmp25;
    cResult[16] = tmp18;
    cResult[17] = tmp30;
    tmp28 = tmp30;
  }
  const intl2 = tmp(1126).intl;
  if ("limit_reached" === str2) {
    const obj6 = { count: limit, maxCount: MAX_FAVORITE_CHANNELS };
    formatToPlainStringResult = intl2.formatToPlainString(tmp4(3395).D7S0Zo, obj6);
  } else {
    formatToPlainStringResult = intl2.string(tmp4(3395)["WaP/lz"]);
  }
  cResult[3] = "limit_reached" === str2;
  cResult[4] = limit;
  cResult[5] = formatToPlainStringResult;
  tmp10 = formatToPlainStringResult;
}) : ((limit) => {
  let ButtonGroup;
  let analyticsLocations;
  let closure_1;
  let formatToPlainStringResult;
  let intl3;
  let obj4;
  let FREE_FAVORITE_LIMIT = limit.limit;
  if (FREE_FAVORITE_LIMIT === undefined) {
    FREE_FAVORITE_LIMIT = analyticsLocations(10050).FREE_FAVORITE_LIMIT;
  }
  let str = limit.source;
  if (str === undefined) {
    str = "channel_context_menu";
  }
  let str2 = limit.variant;
  if (str2 === undefined) {
    str2 = "no_access";
  }
  analyticsLocations = useTrackFavoritesGuildUpsellModalOpenedDefault(str).analyticsLocations;
  importDefault = react.useCallback(() => {
    const obj = closure_1(dependencyMap[8]);
    obj.hideActionSheet(analyticsLocations(dependencyMap[9]).FAVORITES_UPSELL_SHEET_KEY);
  }, []);
  const PromoSheet = analyticsLocations(10058).PromoSheet;
  const intl = analyticsLocations(1126).intl;
  const string = intl.string;
  const tmp8 = _modDef3395;
  let obj = { title: string(tmp5 ? tmp8.hINqUs : tmp8.aA0vO8), description: formatToPlainStringResult, illustration: closure_6(analyticsLocations(10055).FavoritesSpotIllustration, {}), actions: closure_7(ButtonGroup, obj4) };
  const intl2 = tmp7(1126).intl;
  if ("limit_reached" === str2) {
    let obj2 = { count: FREE_FAVORITE_LIMIT, maxCount: MAX_FAVORITE_CHANNELS };
    formatToPlainStringResult = intl2.formatToPlainString(tmp3(3395).D7S0Zo, obj2);
  } else {
    formatToPlainStringResult = intl2.string(tmp3(3395)["WaP/lz"]);
  }
  ButtonGroup = tmp7(5599).ButtonGroup;
  const obj3 = {
    size: "lg",
    variant: "primary",
    text: intl3.string(analyticsLocations(1126).t.pj0XBN),
    onPress() {
      closure_1();
      const obj = { analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
      const tmp2 = openPremiumModalDefault;
      tmp2(obj);
    }
  };
  const Button = tmp7(5601).Button;
  intl3 = tmp7(1126).intl;
  const items = [closure_6(Button, obj3), ];
  const Button2 = tmp7(5601).Button;
  const intl4 = tmp7(1126).intl;
  const string2 = intl4.string;
  const tmp3Result = _modDef3395;
  obj4 = { children: items };
  const obj5 = {
    size: "lg",
    variant: "secondary",
    text: string2("limit_reached" === str2 ? tmp3Result.PprSsy : tmp3Result["+dSwhE"]),
    onPress() {
      closure_1();
      const obj = FavoritesGuildAnalytics;
      const result = obj.setNextFavoritesGuildViewSource("upsell_modal");
      const obj2 = router_utils;
      obj2.transitionToGuild(FAVORITES);
    }
  };
  items[1] = closure_6(Button2, obj5);
  return closure_6(PromoSheet, obj);
});
let result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildUpsellSheet.tsx");

export default tmp3;