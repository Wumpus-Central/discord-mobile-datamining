// === Module 16459: FavoritesGuildSuggestionsStore ===

// Module 16459 (FavoritesGuildSuggestionsStore)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import DismissibleContentShownStateStore from "DismissibleContentShownStateStore" /* 1950 */;

const require = globalThis.__r;

const require = fn;
const NOOP = fn(1074).NOOP;
const ContentDismissActionType = fn(1955).ContentDismissActionType;
let items = [];
const module_560 = fn(560);
const state = module_560.create(() => ({ suggestions: items, dismiss: NOOP }));
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/FavoritesGuildSuggestionsStore.tsx");

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
  const favoritesAccess = require("FavoritesHooks").useFavoritesAccess();
  let isFreemium = favoritesAccess.hasAccess;
  const obj = require("FavoritesHooks");
  if (isFreemium) {
    isFreemium = favoritesAccess.isFreemium;
  }
  if (isFreemium) {
    isFreemium = tmp4;
  }
  tmp4 = DismissibleContentShownStateStore((postConnectionOpen) => postConnectionOpen.postConnectionOpen);
  if (isFreemium) {
    items = [tmp(1944).DismissibleContent.FAVORITES_GUILD_SUGGESTIONS];
    let items1 = items;
  } else {
    items1 = [];
  }
  const tmp5 = _slicedToArray(require("useSelectedDismissibleContent").useSelectedDismissibleContent(items1), 2);
  _require = tmp6;
  const items2 = [tmp5[1]];
  const layoutEffect = noop.useLayoutEffect(() => {
    state.setState({
      dismiss() {
        closure_1_0(constants.USER_DISMISS);
        state.setState({ suggestions });
      }
    });
  }, items2);
  const layoutEffect1 = noop.useLayoutEffect(() => () => state.setState({ dismiss }), []);
  const tmpResult = require("useSelectedDismissibleContent");
  return { isEligible: isFreemium, isSelected: tmp5[0] === require("dismissible_content").DismissibleContent.FAVORITES_GUILD_SUGGESTIONS };
};
export const useFavoritesGuildSuggestionsDismissal = function useFavoritesGuildSuggestionsDismissal() {
  return state((dismiss) => dismiss.dismiss);
};