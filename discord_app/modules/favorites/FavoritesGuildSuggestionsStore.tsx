// discord_app/modules/favorites/FavoritesGuildSuggestionsStore.tsx
import closure_2 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_3 from "../../../_runtime/00019_noop.js";
import closure_4 from "../dismissible_content/DismissibleContentShownStateStore.tsx";
import { NOOP } from "../../Constants.tsx";
import { ContentDismissActionType } from "../dismissible_content/DismissibleContentConstants.tsx";
import keys from "../../../_runtime/00641_keys.js";
import { useFavoritesAccess } from "FavoritesHooks.tsx";

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
    items = [tmp(1372).DismissibleContent.FAVORITES_GUILD_SUGGESTIONS];
    let items1 = items;
  } else {
    items1 = [];
  }
  const tmp5 = callback(
    require("../dismissible_content/hooks/useSelectedDismissibleContent.tsx").useSelectedDismissibleContent(items1),
    2,
  );
  _require = tmp6;
  const items2 = [tmp5[1]];
  const layoutEffect = React.useLayoutEffect(() => {
    closure_1_8.setState({
      dismiss() {
        callback(closure_1_6.USER_DISMISS);
        closure_1_8.setState({ suggestions: closure_1_7 });
      },
    });
  }, items2);
  const layoutEffect1 = React.useLayoutEffect(() => () => state.setState({ dismiss: closure_5 }), []);
  obj = { isEligible: isFreemium, isSelected: tmp5[0] === tmp(1372).DismissibleContent.FAVORITES_GUILD_SUGGESTIONS };
  return obj;
};
export const useFavoritesGuildSuggestionsDismissal = function useFavoritesGuildSuggestionsDismissal() {
  return state((dismiss) => dismiss.dismiss);
};
