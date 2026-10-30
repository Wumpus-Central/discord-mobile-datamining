// === Module 10815: FavoritesGuildUpsellSheet ===

// Module 10815 (FavoritesGuildUpsellSheet)
import router_utils from "router_utils" /* 1100 */;
import _modDef3447 from "module_3447" /* 3447 */;
import openPremiumModalDefault from "openPremiumModal" /* 9884 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9885 */;
import useTrackFavoritesGuildUpsellModalOpenedDefault from "useTrackFavoritesGuildUpsellModalOpened" /* 10816 */;
import FavoritesGuildAnalytics from "FavoritesGuildAnalytics" /* 10822 */;
import noop from "module_19" /* 19 */;

require = fn;
const MAX_FAVORITE_CHANNELS = fn(4871).MAX_FAVORITE_CHANNELS;
const FAVORITES = fn(1072).FAVORITES;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildUpsellSheet.tsx");

export default function FavoritesGuildUpsellSheet(limit) {
  let FREE_FAVORITE_LIMIT = limit.limit;
  if (FREE_FAVORITE_LIMIT === undefined) {
    FREE_FAVORITE_LIMIT = analyticsLocations(10813).FREE_FAVORITE_LIMIT;
  }
  analyticsLocations = useTrackFavoritesGuildUpsellModalOpenedDefault().analyticsLocations;
  importDefault = noop.useCallback(() => {
    closure_1(5253).hideActionSheet(analyticsLocations(10814).FAVORITES_UPSELL_SHEET_KEY);
  }, []);
  let obj = { title: null, description: null, illustration: null, actions: null };
  const intl = analyticsLocations(1114).intl;
  obj.title = intl.string(_modDef3447.hINqUs);
  const intl2 = analyticsLocations(1114).intl;
  obj.description = intl2.formatToPlainString(_modDef3447.D7S0Zo, { count: FREE_FAVORITE_LIMIT, maxCount: MAX_FAVORITE_CHANNELS });
  obj.illustration = closure_6(analyticsLocations(10818).FavoritesSpotIllustration, {});
  const obj3 = { children: null };
  const obj4 = { size: "lg", variant: "primary", text: null, onPress: null };
  const intl3 = analyticsLocations(1114).intl;
  obj4.text = intl3.string(analyticsLocations(1114).t.pj0XBN);
  obj4.onPress = function onPress() {
    closure_1();
    const obj = { analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
    openPremiumModalDefault(obj);
  };
  const items = [closure_6(analyticsLocations(5629).Button, obj4), ];
  const obj5 = { size: "lg", variant: "secondary", text: null, onPress: null };
  const intl4 = analyticsLocations(1114).intl;
  obj5.text = intl4.string(_modDef3447.PprSsy);
  obj5.onPress = function onPress() {
    closure_1();
    const result = FavoritesGuildAnalytics.setNextFavoritesGuildViewSource("upsell_modal");
    router_utils.transitionToGuild(FAVORITES);
  };
  items[1] = closure_6(analyticsLocations(5629).Button, obj5);
  obj3.children = items;
  obj.actions = closure_7(analyticsLocations(6761).ButtonGroup, obj3);
  return closure_6(analyticsLocations(10817).PromoSheet, obj);
};