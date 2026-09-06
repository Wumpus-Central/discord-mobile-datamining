// discord_app/modules/search/native/components/tabs/pages/messages/BaseMessagesScreen.tsx
import SearchPlatformUtilsDefault from "../../../../SearchPlatformUtils.tsx";
import SearchUtils from "../../../../../SearchUtils.tsx";
import search_tracking_TrackingDefault from "../../../../tracking/Tracking.tsx";
import SearchHistoricalIndexingHeaderDefault from "SearchHistoricalIndexingHeader.tsx";
import noop from "../../../../../../../../_runtime/metro/00019__.js";
import SearchMessageStore from "../../../../../SearchMessageStore.tsx";
import SearchQueryStore from "../../../../stores/SearchQueryStore.tsx";

require = fn;
const constants = fn(7877).SearchResultContentEntityTypes;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/BaseMessagesScreen.tsx");

export default function BaseMessagesScreen(data) {
  data = data.data;
  const searchContext = data.searchContext;
  const tab = data.tab;
  const isFocused = data.isFocused;
  let isNextPageLoading;
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
    let obj = SearchUtils;
    const searchTabFetchId = obj.getSearchTabFetchId(
      searchContext,
      tab,
      SearchQueryStore.getSearchResultsQuery(searchContext),
    );
    obj = {
      isIndexing: SearchMessageStore.getIsIndexing(searchTabFetchId),
      isHistoricalIndexing: SearchMessageStore.getIsHistoricalIndexing(searchTabFetchId),
      documentsIndexed: SearchMessageStore.getDocumentsIndexed(searchTabFetchId),
    };
    return obj;
  });
  isHistoricalIndexing = stateFromStoresObject.isHistoricalIndexing;
  documentsIndexed = stateFromStoresObject.documentsIndexed;
  let obj1 = data(tab[8]);
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
          const nextMessages = SearchPlatformUtilsDefault.fetchNextMessages(searchContext, tab);
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
    obj = { searchContext };
    let tmp11 = hasError(searchContext(tmp[12]), obj);
  } else {
    if (isErrorFullscreen) {
      if (!isNextPageLoading) {
        obj1 = { text: errorText };
        tmp11 = hasError(searchContext(tmp[13]), obj1);
      }
    }
    const obj2 = {
      contentContainerStyle,
      data,
      onEndReached: callback,
      ListHeaderComponent: tmp8,
      ItemSeparatorComponent,
      numColumns,
    };
    tmp11 = hasError(searchContext(tmp[14]), obj2);
  }
  return tmp11;
}
export const trackMessageItemPress = function trackMessageItemPress(messageId) {
  messageId = messageId.messageId;
  ({ searchContext, channelId, index } = messageId);
  const message = SearchMessageStore.getMessage(messageId);
  const obj = { searchContext, channelId, messageId, userId: null, index: null, entityType: null };
  let id;
  if (message != null) {
    const author = message.author;
    if (author != null) {
      id = author.id;
    }
  }
  obj.userId = id;
  obj.index = index;
  obj.entityType = constants.MESSAGE;
  const result = obj.trackSearchResultClicked(obj);
};
