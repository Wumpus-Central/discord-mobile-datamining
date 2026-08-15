// discord_app/modules/favorites/FavoritesGuildSuggestionsLoader.tsx
import importAllResult from "noop";
import items from "items";
import { jsx } from "jsxProd";
import { getAffineChannelId } from "hooks/useFavoritesGuildSuggestionCandidates.tsx";

let c3;
let c4;
let c5;
function FavoritesGuildSuggestionsLoaderInner() {
  const tmp = getAffineChannelId(4);
  importDefault = tmp;
  const items = [tmp];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    outer1_4(closure_0);
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
        outer1_4(outer1_3);
      }
    }
  }, items);
  let tmp3 = null;
  if (isSelected) {
    tmp3 = <FavoritesGuildSuggestionsLoaderInner />;
  }
  return tmp3;
});
const result = require("jsxProd").fileFinishedImporting("modules/favorites/FavoritesGuildSuggestionsLoader.tsx");

export default memoResult;