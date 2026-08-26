// === Module 16126: BaseMessagesScreen ===

// Module 16126 (BaseMessagesScreen)
import _modDef12000 from "module_12000" /* 12000 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "handleReaction" /* 6072 */;
import closure_5 from "prototype" /* 11979 */;
import { SearchResultContentEntityTypes as closure_6 } from "SearchEntrypointAnalyticsLocations" /* 8621 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/BaseMessagesScreen.tsx");

export default function BaseMessagesScreen(data) {
  data = data.data;
  const searchContext = data.searchContext;
  const tab = data.tab;
  const isFocused = data.isFocused;
  let isNextPageLoading = data.isFirstPageLoading;
  isNextPageLoading = undefined;
  let isHistoricalIndexing;
  let documentsIndexed;
  let hasError;
  let isErrorToast;
  let showErrorToast;
  let searchFetchPendingManager;
  ({ contentContainerStyle, ItemSeparatorComponent, numColumns } = data);
  if (!isNextPageLoading) {
    isNextPageLoading = data.isNextPageLoading;
  }
  let obj = data(tab[6]);
  const items = [isHistoricalIndexing, isNextPageLoading];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let obj = data(tab[7]);
    const searchTabFetchId = obj.getSearchTabFetchId(searchContext, tab, isHistoricalIndexing.getSearchResultsQuery(searchContext));
    obj = { isIndexing: isNextPageLoading.getIsIndexing(searchTabFetchId), isHistoricalIndexing: isNextPageLoading.getIsHistoricalIndexing(searchTabFetchId), documentsIndexed: isNextPageLoading.getDocumentsIndexed(searchTabFetchId) };
    return obj;
  });
  isHistoricalIndexing = stateFromStoresObject.isHistoricalIndexing;
  documentsIndexed = stateFromStoresObject.documentsIndexed;
  obj1 = data(tab[8]);
  obj = { searchContext, tab, hasListItems: data.length > 0 };
  const messageSearchErrorScreen = obj1.useMessageSearchErrorScreen(obj);
  hasError = messageSearchErrorScreen.hasError;
  isErrorToast = messageSearchErrorScreen.isErrorToast;
  showErrorToast = messageSearchErrorScreen.showErrorToast;
  ({ errorText, isErrorFullscreen } = messageSearchErrorScreen);
  searchFetchPendingManager = data(tab[9]).useSearchFetchPendingManager(searchContext);
  const items1 = [data.length, isNextPageLoading, isFocused, hasError, searchContext, tab, searchFetchPendingManager];
  const items2 = [isFocused, isNextPageLoading, searchContext, searchFetchPendingManager, tab];
  const callback = isFocused.useCallback(() => {
    if (0 !== data.length) {
      if (isNextPageLoading) {
        searchFetchPendingManager.add(tab);
      } else if (isFocused) {
        if (hasError) {
          searchFetchPendingManager.add(tab);
        } else {
          const nextMessages = searchContext(tab[10]).fetchNextMessages(searchContext, tab);
          const obj = searchContext(tab[10]);
        }
      } else {
        searchFetchPendingManager.add(tab);
      }
    }
  }, items1);
  const effect = isFocused.useEffect(() => {
    let tmp = isFocused;
    if (isFocused) {
      tmp = !isNextPageLoading;
    }
    if (tmp) {
      searchFetchPendingManager.flush(searchContext, tab);
    }
  }, items2);
  const items3 = [isErrorToast, isNextPageLoading, isFocused, showErrorToast];
  const effect1 = isFocused.useEffect(() => {
    let tmp = isErrorToast;
    if (isErrorToast) {
      tmp = !isNextPageLoading;
    }
    if (tmp) {
      tmp = isFocused;
    }
    if (tmp) {
      showErrorToast();
    }
  }, items3);
  const items4 = [documentsIndexed, isHistoricalIndexing, searchContext, tab];
  if (stateFromStoresObject.isIndexing) {
    obj = { searchContext: null };
    obj[0] = searchContext;
    let tmp11 = hasError(searchContext(tmp[12]), obj);
  } else {
    if (isErrorFullscreen) {
      if (!isNextPageLoading) {
        obj1 = { text: null };
        obj1[0] = errorText;
        tmp11 = hasError(searchContext(tmp[13]), obj1);
      }
    }
    const obj2 = { contentContainerStyle: null, data: null, onEndReached: null, ListHeaderComponent: null, ItemSeparatorComponent: null, numColumns: null };
    obj2[0] = contentContainerStyle;
    obj2[1] = data;
    obj2[2] = callback;
    obj2[3] = tmp8;
    obj2[4] = ItemSeparatorComponent;
    obj2[5] = numColumns;
    tmp11 = hasError(searchContext(tmp[14]), obj2);
  }
  return tmp11;
};
export const trackMessageItemPress = function trackMessageItemPress(messageId) {
  messageId = messageId.messageId;
  ({ searchContext, channelId, index } = messageId);
  message = message.getMessage(messageId);
  let obj = _modDef12000;
  obj = { searchContext, channelId, messageId, userId: null, index: null, entityType: null };
  let id;
  if (message != null) {
    const author = message.author;
    if (author != null) {
      id = author.id;
    }
  }
  obj[3] = id;
  obj[4] = index;
  obj[5] = constants.MESSAGE;
  const result = obj.trackSearchResultClicked(obj);
};