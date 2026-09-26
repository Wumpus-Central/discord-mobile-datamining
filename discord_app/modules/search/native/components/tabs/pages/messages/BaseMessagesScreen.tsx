// discord_app/modules/search/native/components/tabs/pages/messages/BaseMessagesScreen.tsx
import SearchPlatformUtilsDefault from "../../../../SearchPlatformUtils.tsx";
import SearchUtils from "../../../../../SearchUtils.tsx";
import search_tracking_TrackingDefault from "../../../../tracking/Tracking.tsx";
import SearchHistoricalIndexingHeaderDefault from "SearchHistoricalIndexingHeader.tsx";
import noop from "../../../../../../../../_runtime/metro/00019__.js";
import SearchMessageStore from "../../../../../SearchMessageStore.tsx";
import SearchQueryStore from "../../../../stores/SearchQueryStore.tsx";

require = fn;
const constants = fn(7302).SearchResultContentEntityTypes;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/BaseMessagesScreen.tsx");

export default function BaseMessagesScreen(tab) {
  ({ data, searchContext } = tab);
  tab = tab.tab;
  const isFocused = tab.isFocused;
  ({ isFirstPageLoading, keywordResultCount, intelligenceStatus } = tab);
  ({ isNextPageLoading, contentContainerStyle, ItemSeparatorComponent, numColumns } = tab);
  if (intelligenceStatus === undefined) {
    intelligenceStatus = null;
  }
  isFirstPageLoading = undefined;
  keywordResultCount = undefined;
  let isHistoricalIndexing;
  let documentsIndexed;
  let hasError;
  let isErrorToast;
  let showErrorToast;
  let searchFetchPendingManager;
  if (!isFirstPageLoading) {
    isFirstPageLoading = isNextPageLoading;
  }
  if (keywordResultCount == null) {
    keywordResultCount = data.length;
  }
  const items = [isHistoricalIndexing, keywordResultCount];
  const stateFromStoresObject = searchContext(isFocused[6]).useStateFromStoresObject(items, () => {
    const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(searchContext);
    const searchTabFetchId = SearchUtils.getSearchTabFetchId(searchContext, tab, searchResultsQuery);
    return {
      isIndexing: SearchMessageStore.getIsIndexing(searchTabFetchId),
      isHistoricalIndexing: SearchMessageStore.getIsHistoricalIndexing(searchTabFetchId),
      documentsIndexed: SearchMessageStore.getDocumentsIndexed(searchTabFetchId),
    };
  });
  isHistoricalIndexing = stateFromStoresObject.isHistoricalIndexing;
  documentsIndexed = stateFromStoresObject.documentsIndexed;
  let obj = searchContext(isFocused[6]);
  let tmp = searchContext;
  const messageSearchErrorScreen = searchContext(isFocused[8]).useMessageSearchErrorScreen({
    searchContext,
    tab,
    hasListItems: keywordResultCount > 0,
  });
  hasError = messageSearchErrorScreen.hasError;
  isErrorToast = messageSearchErrorScreen.isErrorToast;
  showErrorToast = messageSearchErrorScreen.showErrorToast;
  ({ errorText, isErrorFullscreen } = messageSearchErrorScreen);
  const obj2 = searchContext(isFocused[8]);
  const obj3 = { searchContext, tab, hasListItems: keywordResultCount > 0 };
  searchFetchPendingManager = searchContext(isFocused[9]).useSearchFetchPendingManager(searchContext);
  const items1 = [
    keywordResultCount,
    isFirstPageLoading,
    isFocused,
    hasError,
    searchContext,
    tab,
    searchFetchPendingManager,
  ];
  const items2 = [isFocused, isFirstPageLoading, searchContext, searchFetchPendingManager, tab];
  const callback = isFirstPageLoading.useCallback(() => {
    if (0 !== keywordResultCount) {
      if (isFirstPageLoading) {
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
  const effect = isFirstPageLoading.useEffect(() => {
    let tmp = isFocused;
    if (isFocused) {
      tmp = !isFirstPageLoading;
    }
    if (tmp) {
      searchFetchPendingManager.flush(searchContext, tab);
    }
  }, items2);
  const items3 = [isErrorToast, isFirstPageLoading, isFocused, showErrorToast];
  const effect1 = isFirstPageLoading.useEffect(() => {
    let tmp = isErrorToast;
    if (isErrorToast) {
      tmp = !isFirstPageLoading;
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
    const obj5 = { searchContext };
    return hasError(tab(tmp2[12]), obj5);
  } else {
    if (isErrorFullscreen) {
      if (!isFirstPageLoading) {
        if (!tmpResult.isIntelligenceSearchActive(intelligenceStatus)) {
          const obj6 = { text: errorText };
          let tmp12 = hasError(tab(tmp2[14]), obj6);
        }
        return tmp12;
      }
    }
    const obj7 = {
      contentContainerStyle,
      data,
      onEndReached: callback,
      ListHeaderComponent: tmp9,
      ItemSeparatorComponent,
      numColumns,
    };
    tmp12 = hasError(tab(tmp2[15]), obj7);
    tmpResult = tmp(tmp2[13]);
  }
}
export const trackMessageItemPress = function trackMessageItemPress(messageId) {
  messageId = messageId.messageId;
  ({ searchContext, channelId, index } = messageId);
  const message = SearchMessageStore.getMessage(messageId);
  const obj2 = { searchContext, channelId, messageId, userId: null, index: null, entityType: null };
  let id;
  if (message != null) {
    const author = message.author;
    if (author != null) {
      id = author.id;
    }
  }
  obj2.userId = id;
  obj2.index = index;
  obj2.entityType = constants.MESSAGE;
  const result = search_tracking_TrackingDefault.trackSearchResultClicked(obj2);
};
