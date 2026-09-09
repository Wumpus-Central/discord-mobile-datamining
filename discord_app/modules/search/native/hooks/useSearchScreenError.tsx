// === Module 16723: useSearchScreenError ===

// Module 16723 (useSearchScreenError)
import util from "util" /* 1114 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4272 */;
import _modDef9657 from "module_9657" /* 9657 */;
import SearchUtils from "SearchUtils" /* 12370 */;
import noop from "module_19" /* 19 */;
import SearchMessageStore from "SearchMessageStore" /* 7295 */;
import SearchQueryStore from "SearchQueryStore" /* 12369 */;

require = fn;
let closure_6 = fn(7892).SEARCH_MESSAGE_TAB_SENTINEL;
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
    const intl = require("util").intl;
    anyErrorMessage = intl.string(require("util").t.uvDZBZ);
  }
  ref = anyErrorMessage.useRef(null);
  const items1 = [stateFromStores, anyErrorMessage];
  obj = { hasError: null != stateFromStores, errorText: anyErrorMessage, isErrorFullscreen: null, isErrorToast: null, showErrorToast: null };
  let tmp5 = null != stateFromStores;
  const callback = anyErrorMessage.useCallback(() => {
    if (stateFromStores !== ref.current) {
      const obj = { key: "SEARCH_ERROR_TOAST", icon: _modDef9657, content: anyErrorMessage };
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
};