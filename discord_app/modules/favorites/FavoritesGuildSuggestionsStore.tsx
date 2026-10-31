// === Module 18249: FavoritesGuildSuggestionsStore ===

// Module 18249 (FavoritesGuildSuggestionsStore)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import DismissibleContentShownStateStore from "DismissibleContentShownStateStore" /* 4855 */;

const require = globalThis.__r;

const require = fn;
const NOOP = fn(1072).NOOP;
const ContentDismissActionType = fn(4860).ContentDismissActionType;
let items = [];
const module_560 = fn(560);
const state = module_560.create(() => ({ suggestions: items, dismiss: NOOP }));
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/FavoritesGuildSuggestionsStore.tsx");

export const NO_SUGGESTIONS = items;
export function useFavoritesGuildSuggestions() {
  return state((suggestions) => suggestions.suggestions);
}
export function useFavoritesGuildSuggestionCount() {
  return state((suggestions) => suggestions.suggestions.length);
}
export function useHasFavoritesGuildSuggestions() {
  return state((suggestions) => suggestions.suggestions.length > 0);
}
export function setFavoritesGuildSuggestions(suggestions) {
  state.setState({ suggestions });
}
export function useFavoritesGuildSuggestionsVisibility() {
  const tmp = DismissibleContentShownStateStore((postConnectionOpen) => postConnectionOpen.postConnectionOpen);
  if (tmp) {
    items = [tmp2(4847).DismissibleContent.FAVORITES_GUILD_SUGGESTIONS];
    let items1 = items;
  } else {
    items1 = [];
  }
  const tmp4 = _slicedToArray(require("useSelectedDismissibleContent").useSelectedDismissibleContent(items1), 2);
  _require = tmp5;
  const items2 = [tmp4[1]];
  const layoutEffect = noop.useLayoutEffect(() => {
    state.setState({
      dismiss() {
        closure_1_0(constants.USER_DISMISS);
        state.setState({ suggestions });
      }
    });
  }, items2);
  const layoutEffect1 = noop.useLayoutEffect(() => () => state.setState({ dismiss }), []);
  const obj = require("useSelectedDismissibleContent");
  return { isEligible: tmp, isSelected: tmp4[0] === require("dismissible_content").DismissibleContent.FAVORITES_GUILD_SUGGESTIONS };
}
export function useFavoritesGuildSuggestionsDismissal() {
  return state((dismiss) => dismiss.dismiss);
}