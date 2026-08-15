// discord_app/modules/favorites/FavoritesGuildSuggestionsStore.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import withContent from "withContent";
import { NOOP } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import keys from "keys";
import { useSelectedDismissibleContent } from "../dismissible_content/hooks/useSelectedDismissibleContent.tsx";
import { useFavoritesAccess } from "FavoritesHooks.tsx";

let require = arg1;
let items = [];
let closure_8 = keys.create(() => ({ suggestions: items, dismiss: NOOP }));
const result = require("withContent").fileFinishedImporting("modules/favorites/FavoritesGuildSuggestionsStore.tsx");

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
  let obj = useFavoritesAccess;
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
    const items = [tmp(1377).DismissibleContent.FAVORITES_GUILD_SUGGESTIONS];
    let items1 = items;
  } else {
    items1 = [];
  }
  const tmp5 = callback(useSelectedDismissibleContent.useSelectedDismissibleContent(items1), 2);
  require = tmp6;
  const items2 = [tmp5[1]];
  const layoutEffect = React.useLayoutEffect(() => {
    outer1_8.setState({
      dismiss() {
        callback(outer1_6.USER_DISMISS);
        outer1_8.setState({ suggestions: outer1_7 });
      }
    });
  }, items2);
  const layoutEffect1 = React.useLayoutEffect(() => () => state.setState({ dismiss: closure_5 }), []);
  obj = { isEligible: isFreemium, isSelected: tmp5[0] === tmp(1377).DismissibleContent.FAVORITES_GUILD_SUGGESTIONS };
  return obj;
};
export const useFavoritesGuildSuggestionsDismissal = function useFavoritesGuildSuggestionsDismissal() {
  return state((dismiss) => dismiss.dismiss);
};