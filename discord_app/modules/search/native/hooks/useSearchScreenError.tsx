// === Module 16870: useSearchScreenError ===

// Module 16870 (useSearchScreenError)
import intl2 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4568 */;
import AssetRegistryDefault from "AssetRegistry" /* 4808 */;
import SearchConstants from "SearchConstants" /* 7513 */;
import SearchUtils from "SearchUtils" /* 11968 */;
import react from "react" /* 19 */;
import SearchMessageStore_mod from "SearchMessageStore" /* 6784 */;
import SearchQueryStore from "SearchQueryStore" /* 11967 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let content, searchContext;

let SearchMessageStore = SearchMessageStore_mod;
let closure_6 = SearchConstants.SEARCH_MESSAGE_TAB_SENTINEL;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  let first;
  let ref;
  let stateFromStores;
  const tmp = searchContext;
  const tmp2 = stateFromStores;
  let obj = searchContext(stateFromStores[5]);
  const cResult = obj.c(15);
  searchContext = searchContext.searchContext;
  const tab = searchContext.tab;
  const hasListItems = searchContext.hasListItems;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SearchQueryStore, SearchMessageStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === searchContext) {
    let tmp7;
    let tmp8;
    if (cResult[2] === tab) {
      tmp7 = cResult[3];
    }
    const tmpResult = tmp(tmp2[7]);
    stateFromStores = tmpResult.useStateFromStores(first, tmp7);
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
      tmp8 = anyErrorMessage;
    } else {
      tmp8 = cResult[5];
    }
    content = tmp8;
    SearchMessageStore = content.useRef(null);
    if (cResult[6] === stateFromStores) {
      let tmp13;
      if (cResult[7] === tmp8) {
        tmp13 = cResult[8];
      }
      if (cResult[9] === tmp8) {
        if (cResult[10] === tmp13) {
          if (cResult[11] === null != stateFromStores) {
            if (cResult[12] === (null != stateFromStores && !hasListItems)) {
              let tmp17;
              if (cResult[13] === (null != stateFromStores && hasListItems)) {
                tmp17 = cResult[14];
              }
              return tmp17;
            }
          }
        }
      }
      const obj2 = { hasError: null != stateFromStores, errorText: tmp8, isErrorFullscreen: null != stateFromStores && !hasListItems, isErrorToast: null != stateFromStores && hasListItems, showErrorToast: null };
      class R {
        constructor() {
          if (stateFromStores !== ref.current) {
            const obj = { key: "SEARCH_ERROR_TOAST", icon: AssetRegistryDefault, content };
            const open = ToastActionCreatorsDefault.open;
            ToastActionCreatorsDefault;
            open(obj);
            tmp2.current = tmp;
          }
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
    class R {
      constructor() {
        if (stateFromStores !== ref.current) {
          const obj = { key: "SEARCH_ERROR_TOAST", icon: AssetRegistryDefault, content };
          const open = ToastActionCreatorsDefault.open;
          ToastActionCreatorsDefault;
          open(obj);
          tmp2.current = tmp;
        }
      }
    }
    cResult[6] = stateFromStores;
    cResult[7] = tmp8;
    cResult[8] = R;
    tmp13 = R;
  }
  const fn = function l() {
    const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(searchContext);
    const obj = SearchUtils;
    return SearchMessageStore.getError(obj.getSearchTabFetchId(searchContext, tab, searchResultsQuery));
  };
  cResult[1] = searchContext;
  cResult[2] = tab;
  cResult[3] = fn;
  tmp7 = fn;
}) : ((arg0) => {
  let callback;
  let hasListItems;
  let tmp5;
  ({ searchContext: require, tab: importDefault, hasListItems } = arg0);
  let stateFromStores;
  let ref;
  const tmp2 = stateFromStores;
  let obj = require("get initialized");
  const items = [SearchQueryStore, ref];
  stateFromStores = obj.useStateFromStores(items, () => {
    const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(require);
    const obj = SearchUtils;
    return SearchMessageStore.getError(obj.getSearchTabFetchId(require, importDefault, searchResultsQuery));
  });
  let anyErrorMessage;
  if (stateFromStores != null) {
    anyErrorMessage = stateFromStores.getAnyErrorMessage();
  }
  if (anyErrorMessage == null) {
    const intl = require("intl").intl;
    anyErrorMessage = intl.string(require("intl").t.uvDZBZ);
  }
  ref = anyErrorMessage.useRef(null);
  const items1 = [stateFromStores, anyErrorMessage];
  const obj2 = { hasError: null != stateFromStores, errorText: anyErrorMessage, isErrorFullscreen: tmp5, isErrorToast: null != stateFromStores && hasListItems, showErrorToast: callback };
  tmp5 = null != stateFromStores;
  callback = anyErrorMessage.useCallback(() => {
    if (stateFromStores !== ref.current) {
      const obj = { key: "SEARCH_ERROR_TOAST", icon: AssetRegistryDefault, content: anyErrorMessage };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      open(obj);
      tmp2.current = tmp;
    }
  }, items1);
  if (tmp5) {
    tmp5 = !hasListItems;
  }
  return obj2;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  let first;
  let tmp7;
  let obj = searchContext(576);
  const cResult = obj.c(3);
  const tmp = searchContext;
  searchContext = searchContext.searchContext;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SearchQueryStore, SearchMessageStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== searchContext) {
    const fn = function l() {
      const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(searchContext);
      const obj = SearchUtils;
      const searchTabFetchId = obj.getSearchTabFetchId(searchContext, closure_6, searchResultsQuery);
      if (SearchMessageStore.getIsInitialFetchComplete(searchTabFetchId)) {
        if (null != SearchMessageStore.getTotalCount(searchTabFetchId)) {
          return null;
        } else {
          const error = SearchMessageStore.getError(searchTabFetchId);
          let tmp5 = null;
          if (null != error) {
            let anyErrorMessage = error.getAnyErrorMessage();
            if (anyErrorMessage == null) {
              const intl = intl2.intl;
              anyErrorMessage = intl.string(intl2.t.uvDZBZ);
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
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp7);
}) : ((searchContext) => {
  searchContext = searchContext.searchContext;
  let obj = searchContext(504);
  const items = [SearchQueryStore, SearchMessageStore];
  return obj.useStateFromStores(items, () => {
    const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(searchContext);
    const obj = SearchUtils;
    const searchTabFetchId = obj.getSearchTabFetchId(searchContext, closure_6, searchResultsQuery);
    if (SearchMessageStore.getIsInitialFetchComplete(searchTabFetchId)) {
      if (null != SearchMessageStore.getTotalCount(searchTabFetchId)) {
        return null;
      } else {
        const error = SearchMessageStore.getError(searchTabFetchId);
        let tmp5 = null;
        if (null != error) {
          let anyErrorMessage = error.getAnyErrorMessage();
          if (anyErrorMessage == null) {
            const intl = intl2.intl;
            anyErrorMessage = intl.string(intl2.t.uvDZBZ);
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
const result = size.fileFinishedImporting("modules/search/native/hooks/useSearchScreenError.tsx");

export const useMessageSearchErrorScreen = tmp2;
export const useMessageTabCountsErrorText = tmp3;