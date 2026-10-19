// === Module 10642: FavoritesGuildUpsellSheet ===

// Module 10642 (FavoritesGuildUpsellSheet)
import router_utils from "router_utils" /* 1114 */;
import _modDef3402 from "module_3402" /* 3402 */;
import openPremiumModalDefault from "openPremiumModal" /* 9707 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9708 */;
import useTrackFavoritesGuildUpsellModalOpenedDefault from "useTrackFavoritesGuildUpsellModalOpened" /* 10643 */;
import FavoritesGuildAnalytics from "FavoritesGuildAnalytics" /* 10648 */;
import noop from "module_19" /* 19 */;

require = fn;
const MAX_FAVORITE_CHANNELS = fn(4813).MAX_FAVORITE_CHANNELS;
const FAVORITES = fn(1087).FAVORITES;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildUpsellSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FavoritesGuildUpsellSheet(limit) {
  const cResult = analyticsLocations(576).c(14);
  let FREE_FAVORITE_LIMIT = limit.limit;
  if (undefined === FREE_FAVORITE_LIMIT) {
    FREE_FAVORITE_LIMIT = tmp(10640).FREE_FAVORITE_LIMIT;
  }
  analyticsLocations = first(10643)().analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      first(5171).hideActionSheet(analyticsLocations(10641).FAVORITES_UPSELL_SHEET_KEY);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1128).intl;
    const stringResult = intl.string(tmp4(3402).hINqUs);
    cResult[1] = stringResult;
    let tmp6 = stringResult;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== FREE_FAVORITE_LIMIT) {
    const intl2 = tmp(1128).intl;
    const obj2 = { count: FREE_FAVORITE_LIMIT, maxCount: MAX_FAVORITE_CHANNELS };
    const formatToPlainStringResult = intl2.formatToPlainString(tmp4(3402).D7S0Zo, obj2);
    cResult[2] = FREE_FAVORITE_LIMIT;
    cResult[3] = formatToPlainStringResult;
    let tmp8 = formatToPlainStringResult;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp13 = closure_6(tmp(10644).FavoritesSpotIllustration, {});
    cResult[4] = tmp13;
    let tmp11 = tmp13;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1128).intl;
    const stringResult1 = intl3.string(tmp(1128).t.pj0XBN);
    cResult[5] = stringResult1;
    let tmp14 = stringResult1;
  } else {
    tmp14 = cResult[5];
  }
  if (cResult[6] !== analyticsLocations) {
    const obj3 = {
      size: "lg",
      variant: "primary",
      text: tmp14,
      onPress() {
          first();
          const obj = { analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
          openPremiumModalDefault(obj);
        }
    };
    const tmp18 = closure_6(tmp(5205).Button, obj3);
    cResult[6] = analyticsLocations;
    cResult[7] = tmp18;
    let tmp16 = tmp18;
  } else {
    tmp16 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { size: "lg", variant: "secondary", text: null, onPress: null };
    const intl4 = tmp(1128).intl;
    obj4.text = intl4.string(tmp4(3402).PprSsy);
    obj4.onPress = function onPress() {
      first();
      const result = FavoritesGuildAnalytics.setNextFavoritesGuildViewSource("upsell_modal");
      router_utils.transitionToGuild(FAVORITES);
    };
    const tmp21 = closure_6(tmp(5205).Button, obj4);
    cResult[8] = tmp21;
    let tmp19 = tmp21;
  } else {
    tmp19 = cResult[8];
  }
  if (cResult[9] !== tmp16) {
    const obj5 = { children: null };
    const items = [tmp16, tmp19];
    obj5.children = items;
    const tmp24 = closure_7(tmp(6644).ButtonGroup, obj5);
    cResult[9] = tmp16;
    cResult[10] = tmp24;
    let tmp22 = tmp24;
  } else {
    tmp22 = cResult[10];
  }
  if (cResult[11] === tmp8) {
    if (cResult[12] === tmp22) {
      let tmp25 = cResult[13];
    }
    return tmp25;
  }
  const tmp26 = closure_6(analyticsLocations(10649).PromoSheet, { title: tmp6, description: tmp8, illustration: tmp11, actions: tmp22 });
  cResult[11] = tmp8;
  cResult[12] = tmp22;
  cResult[13] = tmp26;
  tmp25 = tmp26;
  let obj = analyticsLocations(576);
}) : (function FavoritesGuildUpsellSheet(limit) {
  let FREE_FAVORITE_LIMIT = limit.limit;
  if (FREE_FAVORITE_LIMIT === undefined) {
    FREE_FAVORITE_LIMIT = analyticsLocations(10640).FREE_FAVORITE_LIMIT;
  }
  analyticsLocations = useTrackFavoritesGuildUpsellModalOpenedDefault().analyticsLocations;
  importDefault = noop.useCallback(() => {
    closure_1(5171).hideActionSheet(analyticsLocations(10641).FAVORITES_UPSELL_SHEET_KEY);
  }, []);
  let obj = { title: null, description: null, illustration: null, actions: null };
  const intl = analyticsLocations(1128).intl;
  obj.title = intl.string(_modDef3402.hINqUs);
  const intl2 = analyticsLocations(1128).intl;
  obj.description = intl2.formatToPlainString(_modDef3402.D7S0Zo, { count: FREE_FAVORITE_LIMIT, maxCount: MAX_FAVORITE_CHANNELS });
  obj.illustration = closure_6(analyticsLocations(10644).FavoritesSpotIllustration, {});
  const obj3 = { children: null };
  const obj4 = { size: "lg", variant: "primary", text: null, onPress: null };
  const intl3 = analyticsLocations(1128).intl;
  obj4.text = intl3.string(analyticsLocations(1128).t.pj0XBN);
  obj4.onPress = function onPress() {
    closure_1();
    const obj = { analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
    openPremiumModalDefault(obj);
  };
  const items = [closure_6(analyticsLocations(5205).Button, obj4), ];
  const obj5 = { size: "lg", variant: "secondary", text: null, onPress: null };
  const intl4 = analyticsLocations(1128).intl;
  obj5.text = intl4.string(_modDef3402.PprSsy);
  obj5.onPress = function onPress() {
    closure_1();
    const result = FavoritesGuildAnalytics.setNextFavoritesGuildViewSource("upsell_modal");
    router_utils.transitionToGuild(FAVORITES);
  };
  items[1] = closure_6(analyticsLocations(5205).Button, obj5);
  obj3.children = items;
  obj.actions = closure_7(analyticsLocations(6644).ButtonGroup, obj3);
  return closure_6(analyticsLocations(10649).PromoSheet, obj);
});