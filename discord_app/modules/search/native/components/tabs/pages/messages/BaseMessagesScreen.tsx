// === Module 16881: BaseMessagesScreen ===

// Module 16881 (BaseMessagesScreen)
import Fragment from "Fragment" /* 21 */;
import TrackingConstants from "TrackingConstants" /* 7512 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 11966 */;
import SearchUtils from "SearchUtils" /* 11968 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 11982 */;
import SearchHistoricalIndexingHeaderDefault from "SearchHistoricalIndexingHeader" /* 16883 */;
import react from "react" /* 19 */;
import SearchMessageStore from "SearchMessageStore" /* 6784 */;
import SearchQueryStore from "SearchQueryStore" /* 11967 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tab;

const constants = TrackingConstants.SearchResultContentEntityTypes;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((tab) => {
  let ItemSeparatorComponent;
  let contentContainerStyle;
  let data;
  let errorText;
  let first;
  let hasError;
  let isErrorToast;
  let isFirstPageLoading;
  let isFocused;
  let keywordResultCount;
  let numColumns;
  let searchContext;
  let smartSearchStatus;
  let obj = searchContext(isFocused[7]);
  const cResult = obj.c(44);
  ({ data, searchContext } = tab);
  tab = tab.tab;
  isFocused = tab.isFocused;
  ({ isFirstPageLoading, contentContainerStyle, ItemSeparatorComponent, numColumns, keywordResultCount, smartSearchStatus } = tab);
  const isNextPageLoading = tab.isNextPageLoading;
  if (!isFirstPageLoading) {
    isFirstPageLoading = isNextPageLoading;
  }
  if (keywordResultCount == null) {
    keywordResultCount = data.length;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [hasError, keywordResultCount];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === searchContext) {
    let tmp8;
    if (cResult[2] === tab) {
      tmp8 = cResult[3];
    }
    const tmpResult = searchContext(isFocused[9]);
    const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp8);
    const documentsIndexed = stateFromStoresObject.documentsIndexed;
    if (cResult[4] === searchContext) {
      if (cResult[5] === keywordResultCount > 0) {
        let tmp12;
        if (cResult[6] === tab) {
          tmp12 = cResult[7];
        }
        const tmpResult3 = searchContext(isFocused[10]);
        const messageSearchErrorScreen = tmpResult3.useMessageSearchErrorScreen(tmp12);
        hasError = messageSearchErrorScreen.hasError;
        ({ errorText, isErrorToast } = messageSearchErrorScreen);
        const showErrorToast = messageSearchErrorScreen.showErrorToast;
        const isErrorFullscreen = messageSearchErrorScreen.isErrorFullscreen;
        const tmpResult4 = searchContext(isFocused[11]);
        const searchFetchPendingManager = tmpResult4.useSearchFetchPendingManager(searchContext);
        if (cResult[8] === hasError) {
          if (cResult[9] === isFocused) {
            if (cResult[10] === isFirstPageLoading) {
              if (cResult[11] === keywordResultCount) {
                if (cResult[12] === searchContext) {
                  if (cResult[13] === searchFetchPendingManager) {
                    if (cResult[16] === isFocused) {
                      if (cResult[17] === isFirstPageLoading) {
                        if (cResult[18] === searchContext) {
                          if (cResult[19] === searchFetchPendingManager) {
                            let tmp16;
                            let tmp17;
                            if (cResult[20] === tab) {
                              tmp16 = cResult[21];
                              tmp17 = cResult[22];
                            }
                            const effect = isFirstPageLoading.useEffect(tmp16, tmp17);
                            const obj6 = isFirstPageLoading;
                            if (cResult[23] === isErrorToast) {
                              if (cResult[24] === isFocused) {
                                if (cResult[25] === isFirstPageLoading) {
                                  let tmp19;
                                  let tmp20;
                                  if (cResult[26] === showErrorToast) {
                                    tmp19 = cResult[27];
                                    tmp20 = cResult[28];
                                  }
                                  const effect1 = obj6.useEffect(tmp20, tmp19);
                                  if (tmp10) {
                                    if (null != documentsIndexed) {
                                      if (documentsIndexed > 0) {
                                        let obj2 = { searchContext: null, documentsIndexed, tab };
                                        class K {
                                          constructor() {
                                            const tmp = isErrorToast && !isFirstPageLoading && isFocused;
                                            if (tmp) {
                                              showErrorToast();
                                            }
                                          }
                                        }
                                        cResult[29] = documentsIndexed;
                                        cResult[30] = searchContext;
                                        cResult[31] = tab;
                                        const tmp26 = showErrorToast(tab(isFocused[13]), obj2);
                                        class N {
                                          constructor() {
                                            if (0 !== keywordResultCount) {
                                              if (isFirstPageLoading) {
                                                searchFetchPendingManager.add(tab);
                                              } else if (isFocused) {
                                                if (hasError) {
                                                  searchFetchPendingManager.add(tab);
                                                } else {
                                                  const obj = SearchPlatformUtilsDefault;
                                                  const nextMessages = obj.fetchNextMessages(searchContext, tab);
                                                }
                                              } else {
                                                searchFetchPendingManager.add(tab);
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                  class K {
                                    constructor() {
                                      const tmp = isErrorToast && !isFirstPageLoading && isFocused;
                                      if (tmp) {
                                        showErrorToast();
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            class K {
                              constructor() {
                                const tmp = isErrorToast && !isFirstPageLoading && isFocused;
                                if (tmp) {
                                  showErrorToast();
                                }
                              }
                            }
                            const items1 = [isErrorToast, isFirstPageLoading, isFocused, showErrorToast];
                            cResult[23] = isErrorToast;
                            cResult[24] = isFocused;
                            class N {
                              constructor() {
                                if (0 !== keywordResultCount) {
                                  if (isFirstPageLoading) {
                                    searchFetchPendingManager.add(tab);
                                  } else if (isFocused) {
                                    if (hasError) {
                                      searchFetchPendingManager.add(tab);
                                    } else {
                                      const obj = SearchPlatformUtilsDefault;
                                      const nextMessages = obj.fetchNextMessages(searchContext, tab);
                                    }
                                  } else {
                                    searchFetchPendingManager.add(tab);
                                  }
                                }
                              }
                            }
                            cResult[26] = showErrorToast;
                            cResult[27] = items1;
                            cResult[28] = K;
                            tmp20 = K;
                            tmp19 = items1;
                          }
                        }
                      }
                    }
                    const fn2 = function q() {
                      const tmp = isFocused && !isFirstPageLoading;
                      if (tmp) {
                        searchFetchPendingManager.flush(searchContext, tab);
                      }
                    };
                    const items2 = [, isFirstPageLoading, searchContext, searchFetchPendingManager, tab];
                    cResult[16] = isFocused;
                    cResult[17] = isFirstPageLoading;
                    cResult[18] = searchContext;
                    class N {
                      constructor() {
                        if (0 !== keywordResultCount) {
                          if (isFirstPageLoading) {
                            searchFetchPendingManager.add(tab);
                          } else if (isFocused) {
                            if (hasError) {
                              searchFetchPendingManager.add(tab);
                            } else {
                              const obj = SearchPlatformUtilsDefault;
                              const nextMessages = obj.fetchNextMessages(searchContext, tab);
                            }
                          } else {
                            searchFetchPendingManager.add(tab);
                          }
                        }
                      }
                    }
                    cResult[19] = searchFetchPendingManager;
                    cResult[20] = tab;
                    cResult[21] = fn2;
                    cResult[22] = items2;
                    tmp17 = items2;
                    tmp16 = fn2;
                  }
                }
              }
            }
          }
        }
        class N {
          constructor() {
            if (0 !== keywordResultCount) {
              if (isFirstPageLoading) {
                searchFetchPendingManager.add(tab);
              } else if (isFocused) {
                if (hasError) {
                  searchFetchPendingManager.add(tab);
                } else {
                  const obj = SearchPlatformUtilsDefault;
                  const nextMessages = obj.fetchNextMessages(searchContext, tab);
                }
              } else {
                searchFetchPendingManager.add(tab);
              }
            }
          }
        }
        cResult[8] = hasError;
        cResult[9] = isFocused;
        cResult[10] = isFirstPageLoading;
        cResult[11] = keywordResultCount;
        cResult[12] = searchContext;
        cResult[13] = searchFetchPendingManager;
        cResult[14] = tab;
        cResult[15] = N;
      }
    }
    const obj3 = { searchContext, tab, hasListItems: keywordResultCount > 0 };
    cResult[4] = searchContext;
    cResult[5] = keywordResultCount > 0;
    cResult[6] = tab;
    cResult[7] = obj3;
    tmp12 = obj3;
  }
  const fn = function l() {
    const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(searchContext);
    const obj = SearchUtils;
    const searchTabFetchId = obj.getSearchTabFetchId(searchContext, tab, searchResultsQuery);
    const obj2 = { isIndexing: SearchMessageStore.getIsIndexing(searchTabFetchId), isHistoricalIndexing: SearchMessageStore.getIsHistoricalIndexing(searchTabFetchId), documentsIndexed: SearchMessageStore.getDocumentsIndexed(searchTabFetchId) };
    return obj2;
  };
  cResult[1] = searchContext;
  cResult[2] = tab;
  cResult[3] = fn;
  tmp8 = fn;
}) : ((tab) => {
  let ItemSeparatorComponent;
  let contentContainerStyle;
  let data;
  let errorText;
  let isErrorFullscreen;
  let isFirstPageLoading;
  let isNextPageLoading;
  let keywordResultCount;
  let numColumns;
  let searchContext;
  let smartSearchStatus;
  ({ data, searchContext } = tab);
  tab = tab.tab;
  const isFocused = tab.isFocused;
  ({ isFirstPageLoading, keywordResultCount, smartSearchStatus } = tab);
  ({ isNextPageLoading, contentContainerStyle, ItemSeparatorComponent, numColumns } = tab);
  if (smartSearchStatus === undefined) {
    smartSearchStatus = null;
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
  let tmp = searchContext;
  let obj = searchContext(isFocused[9]);
  const items = [isHistoricalIndexing, keywordResultCount];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(searchContext);
    const obj = SearchUtils;
    const searchTabFetchId = obj.getSearchTabFetchId(searchContext, tab, searchResultsQuery);
    const obj2 = { isIndexing: SearchMessageStore.getIsIndexing(searchTabFetchId), isHistoricalIndexing: SearchMessageStore.getIsHistoricalIndexing(searchTabFetchId), documentsIndexed: SearchMessageStore.getDocumentsIndexed(searchTabFetchId) };
    return obj2;
  });
  isHistoricalIndexing = stateFromStoresObject.isHistoricalIndexing;
  documentsIndexed = stateFromStoresObject.documentsIndexed;
  const isIndexing = stateFromStoresObject.isIndexing;
  let obj2 = searchContext(isFocused[10]);
  const obj3 = { searchContext, tab, hasListItems: keywordResultCount > 0 };
  const messageSearchErrorScreen = obj2.useMessageSearchErrorScreen(obj3);
  hasError = messageSearchErrorScreen.hasError;
  isErrorToast = messageSearchErrorScreen.isErrorToast;
  showErrorToast = messageSearchErrorScreen.showErrorToast;
  ({ errorText, isErrorFullscreen } = messageSearchErrorScreen);
  const obj4 = searchContext(isFocused[11]);
  searchFetchPendingManager = obj4.useSearchFetchPendingManager(searchContext);
  const items1 = [keywordResultCount, isFirstPageLoading, isFocused, hasError, searchContext, tab, searchFetchPendingManager];
  const items2 = [isFocused, isFirstPageLoading, searchContext, searchFetchPendingManager, tab];
  const callback = isFirstPageLoading.useCallback(() => {
    if (0 !== keywordResultCount) {
      if (isFirstPageLoading) {
        searchFetchPendingManager.add(tab);
      } else if (isFocused) {
        if (hasError) {
          searchFetchPendingManager.add(tab);
        } else {
          const obj = SearchPlatformUtilsDefault;
          const nextMessages = obj.fetchNextMessages(searchContext, tab);
        }
      } else {
        searchFetchPendingManager.add(tab);
      }
    }
  }, items1);
  const effect = isFirstPageLoading.useEffect(() => {
    const tmp = isFocused && !isFirstPageLoading;
    if (tmp) {
      searchFetchPendingManager.flush(searchContext, tab);
    }
  }, items2);
  const items3 = [isErrorToast, isFirstPageLoading, isFocused, showErrorToast];
  const effect1 = isFirstPageLoading.useEffect(() => {
    const tmp = isErrorToast && !isFirstPageLoading && isFocused;
    if (tmp) {
      showErrorToast();
    }
  }, items3);
  const items4 = [documentsIndexed, isHistoricalIndexing, searchContext, tab];
  if (isIndexing) {
    const obj5 = { searchContext };
    return hasError(tab(isFocused[14]), obj5);
  } else {
    const tmp10 = smartSearchStatus === tmp(isFocused[15]).SmartSearchStatus.LOADING || smartSearchStatus === tmp(isFocused[15]).SmartSearchStatus.LOADED;
    if (isErrorFullscreen) {
      if (!isFirstPageLoading) {
        let tmp13;
        if (!tmp10) {
          const obj6 = { text: errorText };
          tmp13 = hasError(tab(tmp2[16]), obj6);
        }
        return tmp13;
      }
    }
    const obj7 = { contentContainerStyle, data, onEndReached: callback, ListHeaderComponent: tmp9, ItemSeparatorComponent, numColumns };
    tmp13 = hasError(tab(tmp2[17]), obj7);
  }
});
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/BaseMessagesScreen.tsx");

export default tmp2;
export const trackMessageItemPress = function trackMessageItemPress(messageId) {
  let channelId;
  let id;
  let index;
  let searchContext;
  messageId = messageId.messageId;
  ({ searchContext, channelId, index } = messageId);
  const message = SearchMessageStore.getMessage(messageId);
  const obj = { searchContext, channelId, messageId, userId: id, index, entityType: constants.MESSAGE };
  id = undefined;
  const trackSearchResultClicked = search_tracking_TrackingDefault.trackSearchResultClicked;
  if (message != null) {
    const author = message.author;
    if (author != null) {
      id = author.id;
    }
  }
  const result = trackSearchResultClicked(obj);
};