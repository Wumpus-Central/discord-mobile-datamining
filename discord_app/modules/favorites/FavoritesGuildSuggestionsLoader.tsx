// === Module 15794: FavoritesGuildSuggestionsLoaderInner ===

// Module 15794 (FavoritesGuildSuggestionsLoaderInner)
import getAffineChannelIdDefault from "getAffineChannelId" /* 15795 */;
import importAllResult from "noop" /* 19 */;
import items from "items" /* 15721 */;
import { jsx } from "jsxProd" /* 21 */;

function FavoritesGuildSuggestionsLoaderInner() {
  const tmp = getAffineChannelIdDefault(4);
  importDefault = tmp;
  const items = [tmp];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    closure_1_4(closure_0);
  }, items);
  return null;
}
({ NO_SUGGESTIONS: c3, setFavoritesGuildSuggestions: c4, useFavoritesGuildSuggestionsVisibility: c5 } = items);
const memoResult = importAllResult.memo(function FavoritesGuildSuggestionsLoader() {
  const tmp = callback();
  const isEligible = tmp.isEligible;
  const isSelected = tmp.isSelected;
  importAllResult = importAllResult.useRef(false);
  const items = [isEligible, isSelected];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    if (isSelected) {
      tmp.current = true;
    } else {
      const current = tmp.current;
      let tmp2 = !current;
      if (!current) {
        tmp2 = isEligible;
      }
      if (!tmp2) {
        tmp.current = false;
        closure_1_4(closure_1_3);
      }
    }
  }, items);
  let tmp3 = null;
  if (isSelected) {
    tmp3 = <FavoritesGuildSuggestionsLoaderInner />;
  }
  return tmp3;
});
const result = require("set").fileFinishedImporting("modules/favorites/FavoritesGuildSuggestionsLoader.tsx");

export default memoResult;