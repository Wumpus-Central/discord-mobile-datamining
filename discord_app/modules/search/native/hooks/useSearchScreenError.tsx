// === Module 17176: useSearchScreenError ===

// Module 17176 (useSearchScreenError)
import util from "util" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4766 */;
import _modDef5008 from "module_5008" /* 5008 */;
import SearchUtils from "SearchUtils" /* 12060 */;
import noop from "module_19" /* 19 */;
import SearchMessageStore from "SearchMessageStore" /* 6067 */;
import SearchQueryStore from "SearchQueryStore" /* 12067 */;

require = fn;
let closure_6 = fn(9247).SEARCH_MESSAGE_TAB_SENTINEL;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMessageSearchErrorScreen(searchContext) {
  const cResult = searchContext(stateFromStores[5]).c(15);
  searchContext = searchContext.searchContext;
  const tab = searchContext.tab;
  const hasListItems = searchContext.hasListItems;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SearchQueryStore, SearchMessageStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === searchContext) {
    if (cResult[2] === tab) {
      let tmp7 = cResult[3];
    }
    stateFromStores = tmp(tmp2[7]).useStateFromStores(first, tmp7);
    if (cResult[4] !== stateFromStores) {
      let anyErrorMessage;
      if (stateFromStores != null) {
        anyErrorMessage = stateFromStores.getAnyErrorMessage();
      }
      if (anyErrorMessage == null) {
        const intl = tmp(tmp2[8]).intl;
        anyErrorMessage = intl.string(tmp(tmp2[8]).t.uvDZBZ);
      }
      cResult[4] = stateFromStores;
      cResult[5] = anyErrorMessage;
      let tmp8 = anyErrorMessage;
    } else {
      tmp8 = cResult[5];
    }
    content = tmp8;
    SearchMessageStore = content.useRef(null);
    if (cResult[6] === stateFromStores) {
      if (cResult[7] === tmp8) {
        let tmp13 = cResult[8];
      }
      if (cResult[9] === tmp8) {
        if (cResult[10] === tmp13) {
          if (cResult[11] === tmp14) {
            if (cResult[12] === tmp15) {
              if (cResult[13] === tmp16) {
                let tmp17 = cResult[14];
              }
              return tmp17;
            }
          }
        }
      }
      let obj2 = { hasError: null != stateFromStores, errorText: tmp8, isErrorFullscreen: null != stateFromStores && !hasListItems, isErrorToast: null != stateFromStores && hasListItems, showErrorToast: null };
      class C {
        constructor() {
          if (closure_2 !== closure_4.current) {
            tmp3 = closure_1;
            tmp4 = closure_2;
            obj = closure_1(closure_2[9]);
            obj1 = { key: "SEARCH_ERROR_TOAST", icon: null, content: null };
            obj1.icon = closure_1(closure_2[10]);
            tmp5 = closure_3;
            obj1.content = closure_3;
            openResult = obj.open(obj1);
            tmp2.current = tmp;
          }
          return;
        }
      }
      cResult[9] = tmp8;
      cResult[10] = tmp13;
      cResult[11] = null != stateFromStores;
      cResult[12] = null != stateFromStores && !hasListItems;
      cResult[13] = null != stateFromStores && hasListItems;
      cResult[14] = obj2;
      tmp17 = obj2;
    }
    class C {
      constructor() {
        if (closure_2 !== closure_4.current) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          obj = closure_1(closure_2[9]);
          obj1 = { key: "SEARCH_ERROR_TOAST", icon: null, content: null };
          obj1.icon = closure_1(closure_2[10]);
          tmp5 = closure_3;
          obj1.content = closure_3;
          openResult = obj.open(obj1);
          tmp2.current = tmp;
        }
        return;
      }
    }
    cResult[6] = stateFromStores;
    cResult[7] = tmp8;
    cResult[8] = C;
    tmp13 = C;
    const tmpResult = tmp(tmp2[7]);
  }
  const fn = function l() {
    const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(searchContext);
    return SearchMessageStore.getError(SearchUtils.getSearchTabFetchId(searchContext, tab, searchResultsQuery));
  };
  cResult[1] = searchContext;
  cResult[2] = tab;
  cResult[3] = fn;
  tmp7 = fn;
  let obj = searchContext(stateFromStores[5]);
}) : (function useMessageSearchErrorScreen(arg0) {
  ({ searchContext: require, tab: importDefault, hasListItems } = arg0);
  let stateFromStores;
  let ref;
  const items = [SearchQueryStore, ref];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(closure_1_0);
    return SearchMessageStore.getError(SearchUtils.getSearchTabFetchId(closure_1_0, importDefault, searchResultsQuery));
  });
  let anyErrorMessage;
  if (stateFromStores != null) {
    anyErrorMessage = stateFromStores.getAnyErrorMessage();
  }
  if (anyErrorMessage == null) {
    const intl = require("util").intl;
    anyErrorMessage = intl.string(require("util").t.uvDZBZ);
  }
  ref = anyErrorMessage.useRef(null);
  const items1 = [stateFromStores, anyErrorMessage];
  let obj2 = { hasError: null != stateFromStores, errorText: anyErrorMessage, isErrorFullscreen: null, isErrorToast: null, showErrorToast: null };
  let tmp5 = null != stateFromStores;
  const callback = anyErrorMessage.useCallback(() => {
    if (stateFromStores !== ref.current) {
      const obj2 = { key: "SEARCH_ERROR_TOAST", icon: _modDef5008, content: anyErrorMessage };
      ToastActionCreatorsDefault.open(obj2);
      tmp2.current = tmp;
    }
  }, items1);
  if (tmp5) {
    tmp5 = !hasListItems;
  }
  obj2.isErrorFullscreen = tmp5;
  obj2.isErrorToast = null != stateFromStores && hasListItems;
  obj2.showErrorToast = callback;
  return obj2;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/hooks/useSearchScreenError.tsx");

export const useMessageSearchErrorScreen = tmp2;
export const useMessageTabCountsErrorText = ReactCompilerGating.isReactCompilerEnabled() ? (function useMessageTabCountsErrorText(searchContext) {
  const cResult = searchContext(576).c(3);
  searchContext = searchContext.searchContext;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SearchQueryStore, SearchMessageStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== searchContext) {
    const fn = function l() {
      const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(searchContext);
      const searchTabFetchId = SearchUtils.getSearchTabFetchId(searchContext, closure_6, searchResultsQuery);
      if (SearchMessageStore.getIsInitialFetchComplete(searchTabFetchId)) {
        if (null != SearchMessageStore.getTotalCount(searchTabFetchId)) {
          return null;
        } else {
          const error = SearchMessageStore.getError(searchTabFetchId);
          let tmp5 = null;
          if (null != error) {
            let anyErrorMessage = error.getAnyErrorMessage();
            if (anyErrorMessage == null) {
              const intl = util.intl;
              anyErrorMessage = intl.string(util.t.uvDZBZ);
            }
            tmp5 = anyErrorMessage;
          }
          return tmp5;
        }
      } else {
        return null;
      }
    };
    cResult[1] = searchContext;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let obj = searchContext(576);
  return searchContext(504).useStateFromStores(first, tmp7);
}) : (function useMessageTabCountsErrorText(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [SearchQueryStore, SearchMessageStore];
  return searchContext(504).useStateFromStores(items, () => {
    const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(searchContext);
    const searchTabFetchId = SearchUtils.getSearchTabFetchId(searchContext, closure_6, searchResultsQuery);
    if (SearchMessageStore.getIsInitialFetchComplete(searchTabFetchId)) {
      if (null != SearchMessageStore.getTotalCount(searchTabFetchId)) {
        return null;
      } else {
        const error = SearchMessageStore.getError(searchTabFetchId);
        let tmp5 = null;
        if (null != error) {
          let anyErrorMessage = error.getAnyErrorMessage();
          if (anyErrorMessage == null) {
            const intl = util.intl;
            anyErrorMessage = intl.string(util.t.uvDZBZ);
          }
          tmp5 = anyErrorMessage;
        }
        return tmp5;
      }
    } else {
      return null;
    }
  });
});