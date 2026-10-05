// === Module 16127: FavoritesGuildSuggestionsStore ===

// Module 16127 (FavoritesGuildSuggestionsStore)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import DismissibleContentShownStateStore from "DismissibleContentShownStateStore" /* 2042 */;
import module_570 from "module_570" /* 570 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, setStateResult;

const NOOP = Constants.NOOP;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let items = [];
let closure_8 = module_570.create(() => ({ suggestions: items, dismiss: NOOP }));
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s(suggestions) {
      return suggestions.suggestions;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return closure_8(first);
}) : (() => closure_8((suggestions) => suggestions.suggestions));
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s(suggestions) {
      return suggestions.suggestions.length;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return closure_8(first);
}) : (() => closure_8((suggestions) => suggestions.suggestions.length));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s(suggestions) {
      return suggestions.suggestions.length > 0;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return closure_8(first);
}) : (() => closure_8((suggestions) => suggestions.suggestions.length > 0));
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_0;
  let obj3;
  let suggestions;
  let tmp13;
  let tmp16;
  let obj = require("react");
  const cResult = obj.c(11);
  const obj2 = require("FavoritesHooks");
  const favoritesAccess = obj2.useFavoritesAccess();
  const hasAccess = favoritesAccess.hasAccess;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor(arg0) {
        return arg0.postConnectionOpen;
      }
    }
    cResult[0] = S;
  } else {
    class S {
      constructor(arg0) {
        return arg0.postConnectionOpen;
      }
    }
  }
  DismissibleContentShownStateStore(S);
  if (hasAccess) {
    class S {
      constructor(arg0) {
        return arg0.postConnectionOpen;
      }
    }
  }
  if (hasAccess) {
    class S {
      constructor(arg0) {
        return arg0.postConnectionOpen;
      }
    }
  }
  if (cResult[1] !== hasAccess) {
    class S {
      constructor(arg0) {
        return arg0.postConnectionOpen;
      }
    }
    cResult[1] = hasAccess;
    cResult[2] = tmp8;
  } else {
    class S {
      constructor(arg0) {
        return arg0.postConnectionOpen;
      }
    }
  }
  const tmpResult = require("useSelectedDismissibleContent");
  const tmp9 = _slicedToArray(tmpResult.useSelectedDismissibleContent(tmp8), 2);
  _require = tmp11;
  const first = tmp9[0];
  const FAVORITES_GUILD_SUGGESTIONS = tmp(2036).DismissibleContent.FAVORITES_GUILD_SUGGESTIONS;
  if (cResult[3] !== tmp9[1]) {
    class I {
      constructor() {
        obj = { dismiss() { /* body not rendered: F145569 */ } };
        setStateResult = closure_8.setState(obj);
        return;
      }
    }
    items = [tmp9[1]];
    cResult[3] = tmp9[1];
    cResult[4] = I;
    cResult[5] = items;
    tmp13 = items;
  } else {
    class I {
      constructor() {
        obj = { dismiss() { /* body not rendered: F145569 */ } };
        setStateResult = closure_8.setState(obj);
        return;
      }
    }
    tmp13 = cResult[5];
  }
  const layoutEffect = react.useLayoutEffect(I, tmp13);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        return () => { /* body not rendered: F145570 */ };
      }
    }
    const items1 = [];
    cResult[6] = O;
    cResult[7] = items1;
    tmp16 = items1;
  } else {
    class O {
      constructor() {
        return () => { /* body not rendered: F145570 */ };
      }
    }
    tmp16 = cResult[7];
  }
  const layoutEffect1 = react.useLayoutEffect(O, tmp16);
  if (cResult[8] === hasAccess) {
    class O {
      constructor() {
        return () => { /* body not rendered: F145570 */ };
      }
    }
    return obj3;
  }
  obj3 = { isEligible: hasAccess, isSelected: first === FAVORITES_GUILD_SUGGESTIONS };
  cResult[8] = hasAccess;
  cResult[9] = first === FAVORITES_GUILD_SUGGESTIONS;
  cResult[10] = obj3;
}) : (() => {
  let closure_0;
  let items1;
  let suggestions;
  let obj = require("FavoritesHooks");
  const favoritesAccess = obj.useFavoritesAccess();
  let hasAccess = favoritesAccess.hasAccess;
  const isFreemium = favoritesAccess.isFreemium;
  const tmp4 = DismissibleContentShownStateStore((postConnectionOpen) => postConnectionOpen.postConnectionOpen);
  if (hasAccess) {
    hasAccess = isFreemium;
  }
  if (hasAccess) {
    hasAccess = tmp4;
  }
  const useSelectedDismissibleContent = tmp(6891).useSelectedDismissibleContent;
  require("useSelectedDismissibleContent");
  if (hasAccess) {
    items = [tmp(2036).DismissibleContent.FAVORITES_GUILD_SUGGESTIONS];
    items1 = items;
  } else {
    items1 = [];
  }
  const tmp6 = _slicedToArray(useSelectedDismissibleContent(items1), 2);
  _require = tmp8;
  const first = tmp6[0];
  const items2 = [tmp6[1]];
  const FAVORITES_GUILD_SUGGESTIONS = tmp(2036).DismissibleContent.FAVORITES_GUILD_SUGGESTIONS;
  const layoutEffect = react.useLayoutEffect(() => {
    let obj = {
      dismiss() {
        closure_1_0(constants.USER_DISMISS);
        const obj = { suggestions };
        closure_2_8.setState(obj);
      }
    };
    closure_8.setState(obj);
  }, items2);
  const layoutEffect1 = react.useLayoutEffect(() => {
    let dismiss;
    let state;
    return () => {
      const obj = { dismiss };
      return state.setState(obj);
    };
  }, []);
  return { isEligible: hasAccess, isSelected: first === FAVORITES_GUILD_SUGGESTIONS };
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s(dismiss) {
      return dismiss.dismiss;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return closure_8(first);
}) : (() => closure_8((dismiss) => dismiss.dismiss));
function setFavoritesGuildSuggestions(suggestions) {
  const obj = { suggestions };
  closure_8.setState(obj);
}
const result = size.fileFinishedImporting("modules/favorites/FavoritesGuildSuggestionsStore.tsx");

export const NO_SUGGESTIONS = items;
export const useFavoritesGuildSuggestions = tmp2;
export const useFavoritesGuildSuggestionCount = tmp3;
export const useHasFavoritesGuildSuggestions = tmp4;
export { setFavoritesGuildSuggestions };
export const useFavoritesGuildSuggestionsVisibility = tmp5;
export const useFavoritesGuildSuggestionsDismissal = tmp6;