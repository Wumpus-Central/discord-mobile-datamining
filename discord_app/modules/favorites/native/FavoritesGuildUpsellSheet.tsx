// === Module 10228: FavoritesGuildUpsellSheet ===

// Module 10228 (FavoritesGuildUpsellSheet)
import messagesProxyDefault from "messagesProxy" /* 3225 */;
import useTrackFavoritesGuildUpsellModalOpenedDefault from "useTrackFavoritesGuildUpsellModalOpened" /* 10229 */;
import closure_3 from "noop" /* 19 */;
import { MAX_FAVORITE_CHANNELS } from "date" /* 1970 */;
import { FAVORITES } from "ME" /* 1074 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
let result = require("set").fileFinishedImporting("modules/favorites/native/FavoritesGuildUpsellSheet.tsx");

export default function FavoritesGuildUpsellSheet(limit) {
  let FREE_FAVORITE_LIMIT = limit.limit;
  if (FREE_FAVORITE_LIMIT === undefined) {
    FREE_FAVORITE_LIMIT = analyticsLocations(10225).FREE_FAVORITE_LIMIT;
  }
  let str = limit.source;
  if (str === undefined) {
    str = "channel_context_menu";
  }
  let str2 = limit.variant;
  if (str2 === undefined) {
    str2 = "no_access";
  }
  analyticsLocations = undefined;
  importDefault = undefined;
  analyticsLocations = useTrackFavoritesGuildUpsellModalOpenedDefault(str).analyticsLocations;
  importDefault = React.useCallback(() => {
    callback(4527).hideActionSheet(analyticsLocations(10227).FAVORITES_UPSELL_SHEET_KEY);
  }, []);
  const intl = analyticsLocations(1114).intl;
  const tmp8 = messagesProxyDefault;
  let obj = { title: intl.string(tmp5 ? tmp8.hINqUs : tmp8.aA0vO8), description: null, illustration: null, actions: null };
  const intl2 = tmp7(1114).intl;
  if ("limit_reached" === str2) {
    obj = { count: null, maxCount: null };
    obj[0] = FREE_FAVORITE_LIMIT;
    obj[1] = MAX_FAVORITE_CHANNELS;
    let formatToPlainStringResult = intl2.formatToPlainString(tmp3(3225).D7S0Zo, obj);
  } else {
    formatToPlainStringResult = intl2.string(tmp3(3225)["WaP/lz"]);
  }
  obj[1] = formatToPlainStringResult;
  obj[2] = closure_6(analyticsLocations(5989).FavoritesSpotIllustration, {});
  obj = { size: "lg", variant: "primary", text: null, onPress: null };
  const intl3 = tmp7(1114).intl;
  obj[2] = intl3.string(analyticsLocations(1114).t.pj0XBN);
  obj[3] = function onPress() {
    callback();
    const obj = { analyticsLocations, premiumFeatureCardOrder: analyticsLocations(closure_1_2[15]).PremiumFeatureCardOrder.TIER_2_LEADING };
    callback(closure_1_2[14])(obj);
  };
  const items = [closure_6(analyticsLocations(4975).Button, obj), ];
  const intl4 = tmp7(1114).intl;
  const tmp3Result = messagesProxyDefault;
  obj1 = { children: null };
  items[1] = closure_6(analyticsLocations(4975).Button, {
    size: "lg",
    variant: "secondary",
    text: intl4.string("limit_reached" === str2 ? tmp3Result.PprSsy : tmp3Result["+dSwhE"]),
    onPress() {
      callback();
      const result = analyticsLocations(closure_1_2[16]).setNextFavoritesGuildViewSource("upsell_modal");
      const obj = analyticsLocations(closure_1_2[16]);
      analyticsLocations(closure_1_2[17]).transitionToGuild(closure_1_5);
    }
  });
  obj1[0] = items;
  obj[3] = closure_7(analyticsLocations(5433).ButtonGroup, obj1);
  return closure_6(analyticsLocations(10230).PromoSheet, obj);
};