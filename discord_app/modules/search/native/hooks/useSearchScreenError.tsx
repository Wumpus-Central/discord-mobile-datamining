// discord_app/modules/search/native/hooks/useSearchScreenError.tsx
import noop from "../../../../../_runtime/00019_noop.js";
import handleReaction from "../../SearchMessageStore.tsx";
import prototype from "../stores/SearchQueryStore.tsx";
import { SEARCH_MESSAGE_TAB_SENTINEL as closure_6 } from "../../SearchConstants.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/search/native/hooks/useSearchScreenError.tsx");

export const useMessageSearchErrorScreen = function useMessageSearchErrorScreen(arg0) {
  ({ searchContext: require, tab: importDefault, hasListItems } = arg0);
  let stateFromStores;
  closure_4 = undefined;
  let obj = require(stateFromStores[4]);
  const items = [closure_5, closure_4];
  stateFromStores = obj.useStateFromStores(items, () => {
    const searchResultsQuery = closure_1_5.getSearchResultsQuery(closure_0);
    return ref.getError(require(stateFromStores[5]).getSearchTabFetchId(closure_0, closure_1, searchResultsQuery));
  });
  let anyErrorMessage;
  if (stateFromStores != null) {
    anyErrorMessage = stateFromStores.getAnyErrorMessage();
  }
  if (anyErrorMessage == null) {
    const intl = require(tmp2[6]).intl;
    anyErrorMessage = intl.string(require(tmp2[6]).t.uvDZBZ);
  }
  closure_4 = anyErrorMessage.useRef(null);
  const items1 = [stateFromStores, anyErrorMessage];
  obj = { hasError: null != stateFromStores, errorText: anyErrorMessage, isErrorFullscreen: null, isErrorToast: null, showErrorToast: null };
  let tmp5 = null != stateFromStores;
  const callback = anyErrorMessage.useCallback(() => {
    if (stateFromStores !== ref.current) {
      importDefault(stateFromStores[7]);
      const obj = { key: "SEARCH_ERROR_TOAST", icon: null, content: null };
      obj[1] = importDefault(stateFromStores[8]);
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
  return searchContext(589).useStateFromStores(items, () => {
    const searchResultsQuery = closure_1_5.getSearchResultsQuery(searchContext);
    const searchTabFetchId = searchContext(dependencyMap[5]).getSearchTabFetchId(searchContext, closure_1_6, searchResultsQuery);
    if (closure_1_4.getIsInitialFetchComplete(searchTabFetchId)) {
      if (null != closure_1_4.getTotalCount(searchTabFetchId)) {
        return null;
      } else {
        error = closure_1_4.getError(searchTabFetchId);
        let tmp5 = null;
        if (null != error) {
          let anyErrorMessage = error.getAnyErrorMessage();
          if (anyErrorMessage == null) {
            const intl = searchContext(dependencyMap[6]).intl;
            anyErrorMessage = intl.string(searchContext(dependencyMap[6]).t.uvDZBZ);
          }
          tmp5 = anyErrorMessage;
        }
        return tmp5;
      }
    } else {
      return null;
    }
    const obj = searchContext(dependencyMap[5]);
  });
};