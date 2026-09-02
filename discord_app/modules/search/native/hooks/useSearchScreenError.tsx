// === Module 16499: useMessageSearchErrorScreen ===

// Module 16499 (useMessageSearchErrorScreen)
import closure_3 from "noop" /* 19 */;
import closure_4 from "handleReaction" /* 6136 */;
import closure_5 from "prototype" /* 12129 */;
import { SEARCH_MESSAGE_TAB_SENTINEL as closure_6 } from "MessageEmbedTypes" /* 7632 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/search/native/hooks/useSearchScreenError.tsx");

export const useMessageSearchErrorScreen = function useMessageSearchErrorScreen(arg0) {
  ({ searchContext: require, tab: importDefault, hasListItems } = arg0);
  let stateFromStores;
  let anyErrorMessage;
  closure_4 = undefined;
  let obj = require(stateFromStores[4]);
  const items = [closure_5, closure_4];
  stateFromStores = obj.useStateFromStores(items, () => {
    const searchResultsQuery = closure_1_5.getSearchResultsQuery(closure_0);
    return ref.getError(closure_1_0(stateFromStores[5]).getSearchTabFetchId(closure_0, closure_1, searchResultsQuery));
  });
  anyErrorMessage = undefined;
  if (stateFromStores != null) {
    anyErrorMessage = stateFromStores.getAnyErrorMessage();
  }
  if (anyErrorMessage == null) {
    const intl = tmp(tmp2[6]).intl;
    anyErrorMessage = intl.string(tmp(tmp2[6]).t.uvDZBZ);
  }
  closure_4 = anyErrorMessage.useRef(null);
  const items1 = [stateFromStores, anyErrorMessage];
  obj = { hasError: null != stateFromStores, errorText: anyErrorMessage, isErrorFullscreen: null, isErrorToast: null, showErrorToast: null };
  let tmp5 = null != stateFromStores;
  const callback = anyErrorMessage.useCallback(() => {
    if (stateFromStores !== ref.current) {
      let obj = closure_1_1(stateFromStores[7]);
      obj = { key: "SEARCH_ERROR_TOAST", icon: null, content: null };
      obj[1] = closure_1_1(stateFromStores[8]);
      obj[2] = anyErrorMessage;
      obj.open(obj);
      tmp2.current = tmp;
    }
  }, items1);
  if (tmp5) {
    tmp5 = !hasListItems;
  }
  obj[2] = tmp5;
  obj[3] = null != stateFromStores && hasListItems;
  obj[4] = callback;
  return obj;
};
export const useMessageTabCountsErrorText = function useMessageTabCountsErrorText(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [closure_5, closure_4];
  return searchContext(586).useStateFromStores(items, () => {
    const searchResultsQuery = closure_1_5.getSearchResultsQuery(searchContext);
    const searchTabFetchId = searchContext(closure_1_2[5]).getSearchTabFetchId(searchContext, closure_1_6, searchResultsQuery);
    if (closure_1_4.getIsInitialFetchComplete(searchTabFetchId)) {
      if (null != obj2.getTotalCount(searchTabFetchId)) {
        return null;
      } else {
        error = obj2.getError(searchTabFetchId);
        let tmp5 = null;
        if (null != error) {
          let anyErrorMessage = error.getAnyErrorMessage();
          if (anyErrorMessage == null) {
            const intl = tmp2(tmp3[6]).intl;
            anyErrorMessage = intl.string(tmp2(tmp3[6]).t.uvDZBZ);
          }
          tmp5 = anyErrorMessage;
        }
        return tmp5;
      }
    } else {
      return null;
    }
    const obj = searchContext(closure_1_2[5]);
  });
};