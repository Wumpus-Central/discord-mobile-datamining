// discord_app/modules/favorites/FavoritesGuildSuggestionsStore.tsx
import c from "../../../_runtime/00576_c.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import DismissibleContentShownStateStore from "../dismissible_content/DismissibleContentShownStateStore.tsx";

require = fn;
const NOOP = fn(1085).NOOP;
const ContentDismissActionType = fn(2060).ContentDismissActionType;
let items = [];
const module_570 = fn(570);
let closure_8 = module_570.create(() => ({ suggestions: items, dismiss: NOOP }));
fn(558);
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useFavoritesGuildSuggestions() {
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
      return closure_8(first);
    }
  : function useFavoritesGuildSuggestions() {
      return closure_8((suggestions) => suggestions.suggestions);
    };
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useFavoritesGuildSuggestionCount() {
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
      return closure_8(first);
    }
  : function useFavoritesGuildSuggestionCount() {
      return closure_8((suggestions) => suggestions.suggestions.length);
    };
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useHasFavoritesGuildSuggestions() {
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
      return closure_8(first);
    }
  : function useHasFavoritesGuildSuggestions() {
      return closure_8((suggestions) => suggestions.suggestions.length > 0);
    };
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useFavoritesGuildSuggestionsVisibility() {
      const cResult = require("c").c(11);
      const obj = require("c");
      const favoritesAccess = require("FavoritesHooks").useFavoritesAccess();
      let isFreemium = favoritesAccess.hasAccess;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function c(postConnectionOpen) {
          return postConnectionOpen.postConnectionOpen;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      const obj2 = require("FavoritesHooks");
      if (isFreemium) {
        isFreemium = favoritesAccess.isFreemium;
      }
      if (isFreemium) {
        isFreemium = tmp6;
      }
      if (cResult[1] !== isFreemium) {
        if (isFreemium) {
          items = [tmp(2048).DismissibleContent.FAVORITES_GUILD_SUGGESTIONS];
          let items1 = items;
        } else {
          items1 = [];
        }
        cResult[1] = isFreemium;
        cResult[2] = items1;
      } else {
        const tmp9 = _slicedToArray(tmp(7090).useSelectedDismissibleContent(cResult[2]), 2);
        _require = tmp10;
        if (cResult[3] !== tmp9[1]) {
          class I {
            constructor() {
              obj = {
                dismiss() {
                  closure_1_0(constants.USER_DISMISS);
                  closure_2_8.setState({ suggestions });
                },
              };
              setStateResult = closure_8.setState(obj);
              return;
            }
          }
          const items2 = [tmp10];
          cResult[3] = tmp10;
          cResult[4] = I;
          cResult[5] = items2;
          let tmp12 = items2;
        } else {
          class I {
            constructor() {
              obj = {
                dismiss() {
                  closure_1_0(constants.USER_DISMISS);
                  closure_2_8.setState({ suggestions });
                },
              };
              setStateResult = closure_8.setState(obj);
              return;
            }
          }
          tmp12 = cResult[5];
        }
        const layoutEffect = noop.useLayoutEffect(I, tmp12);
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class D {
            constructor() {
              return () => state.setState({ dismiss });
            }
          }
          const items3 = [];
          cResult[6] = D;
          cResult[7] = items3;
          let tmp15 = items3;
        } else {
          class D {
            constructor() {
              return () => state.setState({ dismiss });
            }
          }
          tmp15 = cResult[7];
        }
        const tmp16 = tmp9[0] === tmp(2048).DismissibleContent.FAVORITES_GUILD_SUGGESTIONS;
        const layoutEffect1 = noop.useLayoutEffect(D, tmp15);
        if (cResult[8] === isFreemium) {
          class D {
            constructor() {
              return () => state.setState({ dismiss });
            }
          }
          return tmp18;
        }
        const obj3 = { isEligible: isFreemium, isSelected: tmp16 };
        cResult[8] = isFreemium;
        cResult[9] = tmp16;
        cResult[10] = obj3;
        tmp18 = obj3;
        const tmpResult = tmp(7090);
      }
      tmp6 = DismissibleContentShownStateStore(first);
    }
  : function useFavoritesGuildSuggestionsVisibility() {
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
        items = [tmp(2048).DismissibleContent.FAVORITES_GUILD_SUGGESTIONS];
        let items1 = items;
      } else {
        items1 = [];
      }
      const tmp5 = _slicedToArray(require("useSelectedDismissibleContent").useSelectedDismissibleContent(items1), 2);
      _require = tmp6;
      const items2 = [tmp5[1]];
      const layoutEffect = noop.useLayoutEffect(() => {
        closure_8.setState({
          dismiss() {
            closure_1_0(constants.USER_DISMISS);
            closure_2_8.setState({ suggestions });
          },
        });
      }, items2);
      const layoutEffect1 = noop.useLayoutEffect(() => () => state.setState({ dismiss }), []);
      const tmpResult = require("useSelectedDismissibleContent");
      return {
        isEligible: isFreemium,
        isSelected: tmp5[0] === require("dismissible_content").DismissibleContent.FAVORITES_GUILD_SUGGESTIONS,
      };
    };
function setFavoritesGuildSuggestions(suggestions) {
  closure_8.setState({ suggestions });
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/FavoritesGuildSuggestionsStore.tsx");

export const NO_SUGGESTIONS = items;
export const useFavoritesGuildSuggestions = tmp2;
export const useFavoritesGuildSuggestionCount = tmp3;
export const useHasFavoritesGuildSuggestions = tmp4;
export { setFavoritesGuildSuggestions };
export const useFavoritesGuildSuggestionsVisibility = tmp5;
export const useFavoritesGuildSuggestionsDismissal = ReactCompilerGating.isReactCompilerEnabled()
  ? function useFavoritesGuildSuggestionsDismissal() {
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
      return closure_8(first);
    }
  : function useFavoritesGuildSuggestionsDismissal() {
      return closure_8((dismiss) => dismiss.dismiss);
    };
