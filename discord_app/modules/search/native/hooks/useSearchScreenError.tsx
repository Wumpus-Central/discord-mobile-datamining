import noop from "noop";
import handleReaction from "handleReaction";
import prototype from "prototype";
import { SEARCH_MESSAGE_TAB_SENTINEL as closure_6 } from "MessageEmbedTypes";

const require = arg1;
const result = require("prototype").fileFinishedImporting("modules/search/native/hooks/useSearchScreenError.tsx");

export const useMessageSearchErrorScreen = function useMessageSearchErrorScreen(arg0) {
  let hasListItems;
  let importDefault;
  let require;
  ({ searchContext: require, tab: importDefault, hasListItems } = arg0);
  let stateFromStores;
  let anyErrorMessage;
  let handleReaction;
  let obj = require(stateFromStores[4]);
  const items = [prototype, handleReaction];
  stateFromStores = obj.useStateFromStores(items, () => {
    const searchResultsQuery = outer1_5.getSearchResultsQuery(closure_0);
    return ref.getError(outer1_0(stateFromStores[5]).getSearchTabFetchId(closure_0, closure_1, searchResultsQuery));
  });
  anyErrorMessage = undefined;
  if (stateFromStores != null) {
    anyErrorMessage = stateFromStores.getAnyErrorMessage();
  }
  if (anyErrorMessage == null) {
    const intl = tmp(tmp2[6]).intl;
    anyErrorMessage = intl.string(tmp(tmp2[6]).t.uvDZBZ);
  }
  handleReaction = anyErrorMessage.useRef(null);
  const items1 = [stateFromStores, anyErrorMessage];
  obj = { hasError: null != stateFromStores, errorText: anyErrorMessage, isErrorFullscreen: null, isErrorToast: null, showErrorToast: null };
  let tmp5 = null != stateFromStores;
  const callback = anyErrorMessage.useCallback(() => {
    if (stateFromStores !== ref.current) {
      let obj = outer1_1(stateFromStores[7]);
      obj = { key: "SEARCH_ERROR_TOAST", icon: null, content: null };
      obj[1] = outer1_1(stateFromStores[8]);
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
  const items = [prototype, handleReaction];
  return searchContext(589).useStateFromStores(items, () => {
    const searchResultsQuery = outer1_5.getSearchResultsQuery(searchContext);
    const searchTabFetchId = searchContext(outer1_2[5]).getSearchTabFetchId(searchContext, outer1_6, searchResultsQuery);
    if (outer1_4.getIsInitialFetchComplete(searchTabFetchId)) {
      if (null != obj2.getTotalCount(searchTabFetchId)) {
        return null;
      } else {
        const error = obj2.getError(searchTabFetchId);
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
    const obj = searchContext(outer1_2[5]);
  });
};