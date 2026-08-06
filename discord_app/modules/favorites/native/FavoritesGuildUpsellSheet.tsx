// discord_app/modules/favorites/native/FavoritesGuildUpsellSheet.tsx
import noop from "noop";
import { MAX_FAVORITE_CHANNELS } from "date";
import { FAVORITES } from "ME";
import jsxProd from "jsxProd";

let closure_6;
let error;
const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
let result = require("ME").fileFinishedImporting("modules/favorites/native/FavoritesGuildUpsellSheet.tsx");

export default function FavoritesGuildUpsellSheet(limit) {
  let FREE_FAVORITE_LIMIT = limit.limit;
  if (FREE_FAVORITE_LIMIT === undefined) {
    FREE_FAVORITE_LIMIT = str(9631).FREE_FAVORITE_LIMIT;
  }
  str = limit.source;
  if (str === undefined) {
    str = "channel_context_menu";
  }
  let str2 = limit.variant;
  if (str2 === undefined) {
    str2 = "no_access";
  }
  let analyticsLocations;
  let dependencyMap;
  analyticsLocations = analyticsLocations(5649)(analyticsLocations(5669).FAVORITES_GUILD_UPSELL_MODAL).analyticsLocations;
  const items = [str];
  const effect = React.useEffect(() => {
    const result = str(9635).trackFavoritesGuildUpsellModalOpened(str);
  }, items);
  dependencyMap = React.useCallback(() => {
    analyticsLocations(4253).hideActionSheet(str(9633).FAVORITES_UPSELL_SHEET_KEY);
  }, []);
  const intl = str(1236).intl;
  const tmp10 = analyticsLocations(3030);
  let obj = { title: intl.string(tmp7 ? tmp10.hINqUs : tmp10.aA0vO8), description: null, illustration: null, actions: null };
  const intl2 = tmp9(1236).intl;
  if ("limit_reached" === str2) {
    obj = { count: null, maxCount: null };
    obj[0] = FREE_FAVORITE_LIMIT;
    obj[1] = MAX_FAVORITE_CHANNELS;
    let formatToPlainStringResult = intl2.formatToPlainString(tmp3(3030).D7S0Zo, obj);
  } else {
    formatToPlainStringResult = intl2.string(tmp3(3030)["WaP/lz"]);
  }
  obj[1] = formatToPlainStringResult;
  obj[2] = closure_6(str(6195).FavoritesSpotIllustration, {});
  obj = { size: "lg", variant: "primary", text: null, onPress: null };
  const intl3 = tmp9(1236).intl;
  obj[2] = intl3.string(str(1236).t.pj0XBN);
  obj[3] = function onPress() {
    dependencyMap();
    analyticsLocations(8545)({ analyticsLocations });
  };
  const items1 = [closure_6(str(4695).Button, obj), ];
  const intl4 = tmp9(1236).intl;
  const tmp3Result = analyticsLocations(3030);
  const obj1 = { children: null };
  const tmp13 = closure_7;
  const tmp5 = analyticsLocations(5649);
  items1[1] = closure_6(str(4695).Button, {
    size: "lg",
    variant: "secondary",
    text: intl4.string("limit_reached" === str2 ? tmp3Result.PprSsy : tmp3Result["+dSwhE"]),
    onPress() {
      dependencyMap();
      const result = str(9635).setNextFavoritesGuildViewSource("upsell_modal");
      const obj = str(9635);
      str(1222).transitionToGuild(outer1_5);
    }
  });
  obj1[0] = items1;
  obj[3] = tmp13(str(5132).ButtonGroup, obj1);
  return closure_6(str(7654).PromoSheet, obj);
};