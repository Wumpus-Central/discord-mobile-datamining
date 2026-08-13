// discord_app/modules/favorites/FavoritesGuildSuggestionsLoader.tsx
import importAllResult from "noop";
import items from "items";
import { jsx } from "jsxProd";

let c4;
let c5;
let closure_6;
const require = arg1;
function FavoritesGuildSuggestionsLoaderInner() {
  let tmp = memo(12199)();
  results = results(11131).useShareSearchResults({ channelFilter: tmp, includeFrecency: false }).results;
  let items = [results];
  memo = importAllResult.useMemo(() => {
    let items = [];
    for (const item10007 of results) {
      let tmp = item10007;
      let tmp2 = results;
      let tmp3 = outer1_2;
      if (items.length >= results(outer1_2[5]).FREE_FAVORITE_LIMIT) {
        let tmp7 = obj;
        obj.return();
        break;
      } else {
        let tmp4 = item10007;
        if (tmp.type !== tmp2(tmp3[6]).AutocompleterResultTypes.HEADER) {
          let tmp5 = item10007;
          let arr = items.push(tmp);
        }
        continue;
      }
      let num = 0;
      if (items.length <= 0) {
        items = outer1_4;
      }
      return items;
    }
  }, items);
  const items1 = [memo];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    outer1_5(memo);
  }, items1);
  const layoutEffect1 = importAllResult.useLayoutEffect(() => () => callback(closure_4), []);
  return null;
}
let c3 = importAllResult;
({ NO_SUGGESTIONS: c4, setFavoritesGuildSuggestions: c5, useFavoritesGuildShouldShowSuggestions: closure_6 } = items);
const memoResult = importAllResult.memo(function FavoritesGuildSuggestionsLoader() {
  let tmp = null;
  if (callback()) {
    tmp = <FavoritesGuildSuggestionsLoaderInner />;
  }
  return tmp;
});
const result = require("jsxProd").fileFinishedImporting("modules/favorites/FavoritesGuildSuggestionsLoader.tsx");

export default memoResult;