// === Module 16683: useSearchScreenError ===

// Module 16683 (useSearchScreenError)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4259 */;
import _modDef9625 from "module_9625" /* 9625 */;
import SearchUtils from "SearchUtils" /* 12340 */;
import noop from "module_19" /* 19 */;
import SearchMessageStore from "SearchMessageStore" /* 7281 */;
import SearchQueryStore from "SearchQueryStore" /* 12339 */;

require = fn;
let closure_6 = fn(7878).SEARCH_MESSAGE_TAB_SENTINEL;
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/hooks/useSearchScreenError.tsx");

export const useMessageSearchErrorScreen = function useMessageSearchErrorScreen(arg0) {
  ({ searchContext: require, tab: importDefault, hasListItems } = arg0);
  let stateFromStores;
  let ref;
  let obj = require("initialize");
  const items = [SearchQueryStore, ref];
  stateFromStores = obj.useStateFromStores(items, () => {
    const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(closure_1_0);
    return SearchMessageStore.getError(SearchUtils.getSearchTabFetchId(closure_1_0, importDefault, searchResultsQuery));
  });
  let anyErrorMessage;
  if (stateFromStores != null) {
    anyErrorMessage = stateFromStores.getAnyErrorMessage();
  }
  if (anyErrorMessage == null) {
    const intl = tmp(tmp2[6]).intl;
    anyErrorMessage = intl.string(tmp(tmp2[6]).t.uvDZBZ);
  }
  ref = anyErrorMessage.useRef(null);
  const items1 = [stateFromStores, anyErrorMessage];
  obj = { hasError: null != stateFromStores, errorText: anyErrorMessage, isErrorFullscreen: null, isErrorToast: null, showErrorToast: null };
  let tmp5 = null != stateFromStores;
  const callback = anyErrorMessage.useCallback(() => {
    if (stateFromStores !== ref.current) {
      const obj = { key: "SEARCH_ERROR_TOAST", icon: _modDef9625, content: anyErrorMessage };
      obj.open(obj);
      tmp2.current = tmp;
    }
  }, items1);
  if (tmp5) {
    tmp5 = !hasListItems;
  }
  obj.isErrorFullscreen = tmp5;
  obj.isErrorToast = null != stateFromStores && hasListItems;
  obj.showErrorToast = callback;
  return obj;
};
export const useMessageTabCountsErrorText = function useMessageTabCountsErrorText(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [SearchQueryStore, SearchMessageStore];
  return searchContext(504).useStateFromStores(items, () => {
    const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(searchContext);
    const searchTabFetchId = SearchUtils.getSearchTabFetchId(searchContext, closure_6, searchResultsQuery);
    if (SearchMessageStore.getIsInitialFetchComplete(searchTabFetchId)) {
      if (null != obj2.getTotalCount(searchTabFetchId)) {
        return null;
      } else {
        const error = obj2.getError(searchTabFetchId);
        let tmp5 = null;
        if (null != error) {
          let anyErrorMessage = error.getAnyErrorMessage();
          if (anyErrorMessage == null) {
            const intl = tmp2(1114).intl;
            anyErrorMessage = intl.string(tmp2(1114).t.uvDZBZ);
          }
          tmp5 = anyErrorMessage;
        }
        return tmp5;
      }
    } else {
      return null;
    }
  });
};