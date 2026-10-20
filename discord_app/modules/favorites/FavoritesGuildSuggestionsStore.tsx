// === Module 17378: FavoritesGuildSuggestionsStore ===

// Module 17378 (FavoritesGuildSuggestionsStore)
import c from "c" /* 576 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import DismissibleContentShownStateStore from "DismissibleContentShownStateStore" /* 4792 */;

require = fn;
const NOOP = fn(1087).NOOP;
const ContentDismissActionType = fn(4797).ContentDismissActionType;
let items = [];
const module_570 = fn(570);
const state = module_570.create(() => ({ suggestions: items, dismiss: NOOP }));
fn(558);
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFavoritesGuildSuggestions() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s(suggestions) {
      return suggestions.suggestions;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return state(first);
}) : (function useFavoritesGuildSuggestions() {
  return state((suggestions) => suggestions.suggestions);
});
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFavoritesGuildSuggestionCount() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s(suggestions) {
      return suggestions.suggestions.length;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return state(first);
}) : (function useFavoritesGuildSuggestionCount() {
  return state((suggestions) => suggestions.suggestions.length);
});
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasFavoritesGuildSuggestions() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s(suggestions) {
      return suggestions.suggestions.length > 0;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return state(first);
}) : (function useHasFavoritesGuildSuggestions() {
  return state((suggestions) => suggestions.suggestions.length > 0);
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFavoritesGuildSuggestionsVisibility() {
  const cResult = require("c").c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c(postConnectionOpen) {
      return postConnectionOpen.postConnectionOpen;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp5 = DismissibleContentShownStateStore(first);
  if (cResult[1] !== tmp5) {
    if (tmp5) {
      items = [tmp(4784).DismissibleContent.FAVORITES_GUILD_SUGGESTIONS];
      let items1 = items;
    } else {
      items1 = [];
    }
    cResult[1] = tmp5;
    cResult[2] = items1;
  } else {
    const tmp8 = _slicedToArray(tmp(7445).useSelectedDismissibleContent(cResult[2]), 2);
    _require = tmp9;
    if (cResult[3] !== tmp8[1]) {
      const fn2 = function _() {
        state.setState({
          dismiss() {
            closure_1_0(constants.USER_DISMISS);
            state.setState({ suggestions });
          }
        });
      };
      const items2 = [tmp9];
      cResult[3] = tmp9;
      cResult[4] = fn2;
      cResult[5] = items2;
      let tmp11 = items2;
      let tmp10 = fn2;
    } else {
      tmp10 = cResult[4];
      tmp11 = cResult[5];
    }
    const layoutEffect = noop.useLayoutEffect(tmp10, tmp11);
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const fn3 = function b() {
        return () => state.setState({ dismiss });
      };
      const items3 = [];
      cResult[6] = fn3;
      cResult[7] = items3;
      let tmp14 = items3;
      let tmp13 = fn3;
    } else {
      tmp13 = cResult[6];
      tmp14 = cResult[7];
    }
    const tmp15 = tmp8[0] === tmp(4784).DismissibleContent.FAVORITES_GUILD_SUGGESTIONS;
    const layoutEffect1 = noop.useLayoutEffect(tmp13, tmp14);
    if (cResult[8] === tmp5) {
      if (cResult[9] === tmp15) {
        let tmp17 = cResult[10];
      }
      return tmp17;
    }
    const obj2 = { isEligible: tmp5, isSelected: tmp15 };
    cResult[8] = tmp5;
    cResult[9] = tmp15;
    cResult[10] = obj2;
    tmp17 = obj2;
    const tmpResult = tmp(7445);
  }
  const obj = require("c");
}) : (function useFavoritesGuildSuggestionsVisibility() {
  const tmp = DismissibleContentShownStateStore((postConnectionOpen) => postConnectionOpen.postConnectionOpen);
  if (tmp) {
    items = [tmp2(4784).DismissibleContent.FAVORITES_GUILD_SUGGESTIONS];
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
});
function setFavoritesGuildSuggestions(suggestions) {
  state.setState({ suggestions });
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/FavoritesGuildSuggestionsStore.tsx");

export const NO_SUGGESTIONS = items;
export const useFavoritesGuildSuggestions = tmp2;
export const useFavoritesGuildSuggestionCount = tmp3;
export const useHasFavoritesGuildSuggestions = tmp4;
export { setFavoritesGuildSuggestions };
export const useFavoritesGuildSuggestionsVisibility = tmp5;
export const useFavoritesGuildSuggestionsDismissal = ReactCompilerGating.isReactCompilerEnabled() ? (function useFavoritesGuildSuggestionsDismissal() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s(dismiss) {
      return dismiss.dismiss;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return state(first);
}) : (function useFavoritesGuildSuggestionsDismissal() {
  return state((dismiss) => dismiss.dismiss);
});