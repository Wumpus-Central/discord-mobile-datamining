// === Module 9983: FavoritesGuildUpsellSheet ===

// Module 9983 (FavoritesGuildUpsellSheet)
import messagesProxyDefault from "messagesProxy" /* 3079 */;
import useTrackFavoritesGuildUpsellModalOpenedDefault from "useTrackFavoritesGuildUpsellModalOpened" /* 9984 */;
import noop from "noop" /* 19 */;
import { MAX_FAVORITE_CHANNELS } from "date" /* 1429 */;
import { FAVORITES } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;

const require = fn;
({ jsx: closure_6, jsxs: error } = jsxProd);
let result = require("obj132").fileFinishedImporting("modules/favorites/native/FavoritesGuildUpsellSheet.tsx");

export default function FavoritesGuildUpsellSheet(limit) {
  let FREE_FAVORITE_LIMIT = limit.limit;
  if (FREE_FAVORITE_LIMIT === undefined) {
    FREE_FAVORITE_LIMIT = analyticsLocations(9980).FREE_FAVORITE_LIMIT;
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
  importDefault = React.useCallback(() => {
    callback(4342).hideActionSheet(analyticsLocations(9982).FAVORITES_UPSELL_SHEET_KEY);
  }, []);
  const intl = analyticsLocations(1236).intl;
  const tmp8 = messagesProxyDefault;
  let obj = { title: intl.string(tmp5 ? tmp8.hINqUs : tmp8.aA0vO8), description: null, illustration: null, actions: null };
  const intl2 = tmp7(1236).intl;
  if ("limit_reached" === str2) {
    obj = { count: null, maxCount: null };
    obj[0] = FREE_FAVORITE_LIMIT;
    obj[1] = MAX_FAVORITE_CHANNELS;
    let formatToPlainStringResult = intl2.formatToPlainString(tmp3(3079).D7S0Zo, obj);
  } else {
    formatToPlainStringResult = intl2.string(tmp3(3079)["WaP/lz"]);
  }
  obj[1] = formatToPlainStringResult;
  obj[2] = callback(analyticsLocations(5696).FavoritesSpotIllustration, {});
  obj = { size: "lg", variant: "primary", text: null, onPress: null };
  const intl3 = tmp7(1236).intl;
  obj[2] = intl3.string(analyticsLocations(1236).t.pj0XBN);
  obj[3] = function onPress() {
    callback();
    const obj = { analyticsLocations, premiumFeatureCardOrder: analyticsLocations(dependencyMap[15]).PremiumFeatureCardOrder.TIER_2_LEADING };
    callback(dependencyMap[14])(obj);
  };
  const items = [callback(analyticsLocations(4745).Button, obj), ];
  const intl4 = tmp7(1236).intl;
  const tmp3Result = messagesProxyDefault;
  obj1 = { children: null };
  items[1] = callback(analyticsLocations(4745).Button, {
    size: "lg",
    variant: "secondary",
    text: intl4.string("limit_reached" === str2 ? tmp3Result.PprSsy : tmp3Result["+dSwhE"]),
    onPress() {
      callback();
      const result = analyticsLocations(dependencyMap[16]).setNextFavoritesGuildViewSource("upsell_modal");
      const obj = analyticsLocations(dependencyMap[16]);
      analyticsLocations(dependencyMap[17]).transitionToGuild(FAVORITES);
    }
  });
  obj1[0] = items;
  obj[3] = callback2(analyticsLocations(6687).ButtonGroup, obj1);
  return callback(analyticsLocations(8017).PromoSheet, obj);
};