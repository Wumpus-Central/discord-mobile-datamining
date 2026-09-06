// discord_app/modules/favorites/FavoritesGuildSuggestionsStore.tsx
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import DismissibleContentShownStateStore from "../dismissible_content/DismissibleContentShownStateStore.tsx";

const require = fn;
const NOOP = fn(1074).NOOP;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
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
  let obj = require("FavoritesHooks");
  const favoritesAccess = obj.useFavoritesAccess();
  let isFreemium = favoritesAccess.hasAccess;
  if (isFreemium) {
    isFreemium = favoritesAccess.isFreemium;
  }
  if (isFreemium) {
    isFreemium = tmp4;
  }
  tmp4 = DismissibleContentShownStateStore((postConnectionOpen) => postConnectionOpen.postConnectionOpen);
  if (isFreemium) {
    items = [tmp(1943).DismissibleContent.FAVORITES_GUILD_SUGGESTIONS];
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
      },
    });
  }, items2);
  const layoutEffect1 = noop.useLayoutEffect(() => () => state.setState({ dismiss }), []);
  obj = { isEligible: isFreemium, isSelected: tmp5[0] === tmp(1943).DismissibleContent.FAVORITES_GUILD_SUGGESTIONS };
  return obj;
};
export const useFavoritesGuildSuggestionsDismissal = function useFavoritesGuildSuggestionsDismissal() {
  return state((dismiss) => dismiss.dismiss);
};
