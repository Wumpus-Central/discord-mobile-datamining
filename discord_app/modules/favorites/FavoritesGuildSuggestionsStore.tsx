// === Module 15755: items ===

// Module 15755 (items)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "withContent" /* 1379 */;
import { NOOP } from "ME" /* 676 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1384 */;
import keys from "keys" /* 644 */;

const require = arg1;
let items = [];
let closure_8 = keys.create(() => ({ suggestions: items, dismiss: NOOP }));
const result = require("set").fileFinishedImporting("modules/favorites/FavoritesGuildSuggestionsStore.tsx");

export const NO_SUGGESTIONS = items;
export const useFavoritesGuildSuggestions = function useFavoritesGuildSuggestions() {
  return state((suggestions) => suggestions.suggestions);
};
export const useFavoritesGuildSuggestionCount = function useFavoritesGuildSuggestionCount() {
  return state((suggestions) => suggestions.suggestions.length);
};
export const useHasFavoritesGuildSuggestions = function useHasFavoritesGuildSuggestions() {
  return state((suggestions) => suggestions.suggestions.length > 0);
};
export const setFavoritesGuildSuggestions = function setFavoritesGuildSuggestions(suggestions) {
  state.setState({ suggestions });
};
export const useFavoritesGuildSuggestionsVisibility = function useFavoritesGuildSuggestionsVisibility() {
  let obj = _require(10268);
  const favoritesAccess = obj.useFavoritesAccess();
  let isFreemium = favoritesAccess.hasAccess;
  if (isFreemium) {
    isFreemium = favoritesAccess.isFreemium;
  }
  if (isFreemium) {
    isFreemium = tmp4;
  }
  tmp4 = callback2((postConnectionOpen) => postConnectionOpen.postConnectionOpen);
  if (isFreemium) {
    items = [tmp(1373).DismissibleContent.FAVORITES_GUILD_SUGGESTIONS];
    let items1 = items;
  } else {
    items1 = [];
  }
  const tmp5 = callback(_require(6219).useSelectedDismissibleContent(items1), 2);
  _require = tmp6;
  const items2 = [tmp5[1]];
  const layoutEffect = React.useLayoutEffect(() => {
    closure_1_8.setState({
      dismiss() {
        callback(closure_1_6.USER_DISMISS);
        closure_1_8.setState({ suggestions: closure_1_7 });
      }
    });
  }, items2);
  const layoutEffect1 = React.useLayoutEffect(() => () => state.setState({ dismiss: closure_5 }), []);
  obj = { isEligible: isFreemium, isSelected: tmp5[0] === tmp(1373).DismissibleContent.FAVORITES_GUILD_SUGGESTIONS };
  return obj;
};
export const useFavoritesGuildSuggestionsDismissal = function useFavoritesGuildSuggestionsDismissal() {
  return state((dismiss) => dismiss.dismiss);
};