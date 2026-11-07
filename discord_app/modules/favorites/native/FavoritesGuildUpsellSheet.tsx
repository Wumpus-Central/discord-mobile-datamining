// === Module 10954: FavoritesGuildUpsellSheet ===

// Module 10954 (FavoritesGuildUpsellSheet)
import router_utils from "router_utils" /* 1099 */;
import _modDef3608 from "module_3608" /* 3608 */;
import openPremiumModalDefault from "openPremiumModal" /* 10027 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 10028 */;
import useTrackFavoritesGuildUpsellModalOpenedDefault from "useTrackFavoritesGuildUpsellModalOpened" /* 10955 */;
import FavoritesGuildAnalytics from "FavoritesGuildAnalytics" /* 10961 */;
import noop from "module_19" /* 19 */;

require = fn;
const MAX_FAVORITE_CHANNELS = fn(5002).MAX_FAVORITE_CHANNELS;
const FAVORITES = fn(1072).FAVORITES;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildUpsellSheet.tsx");

export default function FavoritesGuildUpsellSheet(limit) {
  let FREE_FAVORITE_LIMIT = limit.limit;
  if (FREE_FAVORITE_LIMIT === undefined) {
    FREE_FAVORITE_LIMIT = analyticsLocations(10952).FREE_FAVORITE_LIMIT;
  }
  analyticsLocations = useTrackFavoritesGuildUpsellModalOpenedDefault().analyticsLocations;
  importDefault = noop.useCallback(() => {
    closure_1(5374).hideActionSheet(analyticsLocations(10953).FAVORITES_UPSELL_SHEET_KEY);
  }, []);
  let obj = { title: null, description: null, illustration: null, actions: null };
  const intl = analyticsLocations(1113).intl;
  obj.title = intl.string(_modDef3608.hINqUs);
  const intl2 = analyticsLocations(1113).intl;
  obj.description = intl2.formatToPlainString(_modDef3608.D7S0Zo, { count: FREE_FAVORITE_LIMIT, maxCount: MAX_FAVORITE_CHANNELS });
  obj.illustration = closure_6(analyticsLocations(10957).FavoritesSpotIllustration, {});
  const obj3 = { children: null };
  const obj4 = { size: "lg", variant: "primary", text: null, onPress: null };
  const intl3 = analyticsLocations(1113).intl;
  obj4.text = intl3.string(analyticsLocations(1113).t.pj0XBN);
  obj4.onPress = function onPress() {
    closure_1();
    const obj = { analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
    openPremiumModalDefault(obj);
  };
  items = [closure_6(analyticsLocations(5758).Button, obj4), ];
  const obj5 = { size: "lg", variant: "secondary", text: null, onPress: null };
  const intl4 = analyticsLocations(1113).intl;
  obj5.text = intl4.string(_modDef3608.PprSsy);
  obj5.onPress = function onPress() {
    closure_1();
    const result = FavoritesGuildAnalytics.setNextFavoritesGuildViewSource("upsell_modal");
    router_utils.transitionToGuild(FAVORITES);
  };
  items[1] = closure_6(analyticsLocations(5758).Button, obj5);
  obj3.children = items;
  obj.actions = closure_7(analyticsLocations(6822).ButtonGroup, obj3);
  return closure_6(analyticsLocations(10956).PromoSheet, obj);
};