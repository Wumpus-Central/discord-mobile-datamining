// === Module 10485: FavoritesGuildUpsellSheet ===

// Module 10485 (FavoritesGuildUpsellSheet)
import router_utils from "router_utils" /* 1101 */;
import _modDef3324 from "module_3324" /* 3324 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9475 */;
import openPremiumModalDefault from "openPremiumModal" /* 9505 */;
import useTrackFavoritesGuildUpsellModalOpenedDefault from "useTrackFavoritesGuildUpsellModalOpened" /* 10486 */;
import FavoritesGuildAnalytics from "FavoritesGuildAnalytics" /* 10490 */;
import noop from "module_19" /* 19 */;

require = fn;
const MAX_FAVORITE_CHANNELS = fn(2054).MAX_FAVORITE_CHANNELS;
const FAVORITES = fn(1074).FAVORITES;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildUpsellSheet.tsx");

export default function FavoritesGuildUpsellSheet(limit) {
  let FREE_FAVORITE_LIMIT = limit.limit;
  if (FREE_FAVORITE_LIMIT === undefined) {
    FREE_FAVORITE_LIMIT = analyticsLocations(10482).FREE_FAVORITE_LIMIT;
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
  importDefault = noop.useCallback(() => {
    closure_1(4723).hideActionSheet(analyticsLocations(10484).FAVORITES_UPSELL_SHEET_KEY);
  }, []);
  const intl = analyticsLocations(1115).intl;
  const tmp8 = _modDef3324;
  let obj = { title: intl.string("limit_reached" === str2 ? tmp8.hINqUs : tmp8.aA0vO8), description: null, illustration: null, actions: null };
  const intl2 = tmp7(1115).intl;
  if ("limit_reached" === str2) {
    const obj2 = { count: FREE_FAVORITE_LIMIT, maxCount: MAX_FAVORITE_CHANNELS };
    let formatToPlainStringResult = intl2.formatToPlainString(tmp3(3324).D7S0Zo, obj2);
  } else {
    formatToPlainStringResult = intl2.string(tmp3(3324)["WaP/lz"]);
  }
  obj.description = formatToPlainStringResult;
  obj.illustration = closure_6(analyticsLocations(6223).FavoritesSpotIllustration, {});
  const obj3 = { size: "lg", variant: "primary", text: null, onPress: null };
  const intl3 = tmp7(1115).intl;
  obj3.text = intl3.string(analyticsLocations(1115).t.pj0XBN);
  obj3.onPress = function onPress() {
    closure_1();
    const obj = { analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
    openPremiumModalDefault(obj);
  };
  const items = [closure_6(analyticsLocations(5186).Button, obj3), ];
  const intl4 = tmp7(1115).intl;
  const tmp3Result = _modDef3324;
  const obj4 = { children: null };
  items[1] = closure_6(analyticsLocations(5186).Button, {
    size: "lg",
    variant: "secondary",
    text: intl4.string("limit_reached" === str2 ? tmp3Result.PprSsy : tmp3Result["+dSwhE"]),
    onPress() {
      closure_1();
      const result = FavoritesGuildAnalytics.setNextFavoritesGuildViewSource("upsell_modal");
      router_utils.transitionToGuild(FAVORITES);
    }
  });
  obj4.children = items;
  obj.actions = closure_7(analyticsLocations(5645).ButtonGroup, obj4);
  return closure_6(analyticsLocations(10487).PromoSheet, obj);
};