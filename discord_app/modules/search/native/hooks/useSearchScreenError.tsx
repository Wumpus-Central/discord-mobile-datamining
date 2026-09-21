// === Module 17158: useSearchScreenError ===

// Module 17158 (useSearchScreenError)
import util from "util" /* 1115 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4454 */;
import _modDef9713 from "module_9713" /* 9713 */;
import SearchUtils from "SearchUtils" /* 12594 */;
import noop from "module_19" /* 19 */;
import SearchMessageStore from "SearchMessageStore" /* 7523 */;
import SearchQueryStore from "SearchQueryStore" /* 12593 */;

const require = globalThis.__r;

require = fn;
let closure_6 = fn(8122).SEARCH_MESSAGE_TAB_SENTINEL;
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/hooks/useSearchScreenError.tsx");

export const useMessageSearchErrorScreen = function useMessageSearchErrorScreen(arg0) {
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
      const obj2 = { key: "SEARCH_ERROR_TOAST", icon: _modDef9713, content: anyErrorMessage };
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