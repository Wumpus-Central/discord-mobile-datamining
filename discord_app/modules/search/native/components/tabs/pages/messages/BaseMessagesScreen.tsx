// discord_app/modules/search/native/components/tabs/pages/messages/BaseMessagesScreen.tsx
import SearchPlatformUtilsDefault from "../../../../SearchPlatformUtils.tsx";
import SearchUtils from "../../../../../SearchUtils.tsx";
import tracking_TrackingDefault from "../../../../tracking/Tracking.tsx";
import SearchHistoricalIndexingHeaderDefault from "SearchHistoricalIndexingHeader.tsx";
import noop from "../../../../../../../../_runtime/metro/00019__.js";
import SearchMessageStore from "../../../../../SearchMessageStore.tsx";
import SearchQueryStore from "../../../../stores/SearchQueryStore.tsx";

require = fn;
const constants = fn(9246).SearchResultContentEntityTypes;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/BaseMessagesScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function BaseMessagesScreen(tab) {
      const cResult = searchContext(isFocused[7]).c(44);
      ({ data, searchContext } = tab);
      tab = tab.tab;
      isFocused = tab.isFocused;
      ({
        isFirstPageLoading,
        contentContainerStyle,
        ItemSeparatorComponent,
        numColumns,
        keywordResultCount,
        smartSearchStatus,
      } = tab);
      if (!isFirstPageLoading) {
        isFirstPageLoading = tab.isNextPageLoading;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [hasError, keywordResultCount];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === searchContext) {
        if (cResult[2] === tab) {
          let tmp8 = cResult[3];
        }
        const stateFromStoresObject = searchContext(tmp2[9]).useStateFromStoresObject(first, tmp8);
        const documentsIndexed = stateFromStoresObject.documentsIndexed;
        if (cResult[4] === searchContext) {
          if (cResult[5] === tmp11) {
            if (cResult[6] === tab) {
              let tmp12 = cResult[7];
            }
            const messageSearchErrorScreen = searchContext(tmp2[10]).useMessageSearchErrorScreen(tmp12);
            hasError = messageSearchErrorScreen.hasError;
            ({ errorText, isErrorToast } = messageSearchErrorScreen);
            const showErrorToast = messageSearchErrorScreen.showErrorToast;
            const isErrorFullscreen = messageSearchErrorScreen.isErrorFullscreen;
            const tmpResult3 = searchContext(tmp2[10]);
            const searchFetchPendingManager = searchContext(tmp2[11]).useSearchFetchPendingManager(searchContext);
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
                                if (cResult[20] === tab) {
                                  let tmp16 = cResult[21];
                                  let tmp17 = cResult[22];
                                }
                                const effect = isFirstPageLoading.useEffect(tmp16, tmp17);
                                if (cResult[23] === isErrorToast) {
                                  if (cResult[24] === isFocused) {
                                    if (cResult[25] === isFirstPageLoading) {
                                      if (cResult[26] === showErrorToast) {
                                        let tmp19 = cResult[27];
                                        let tmp20 = cResult[28];
                                      }
                                      const effect1 = obj6.useEffect(tmp20, tmp19);
                                      if (tmp10) {
                                        if (null != documentsIndexed) {
                                          if (documentsIndexed > 0) {
                                            if (cResult[29] === documentsIndexed) {
                                              if (cResult[30] === searchContext) {
                                              }
                                            }
                                            const obj2 = { searchContext: null, documentsIndexed: null, tab: null };
                                            class K {
                                              constructor() {
                                                tmp = isErrorToast;
                                                if (isErrorToast) {
                                                  tmp2 = isNextPageLoading;
                                                  tmp = !isNextPageLoading;
                                                }
                                                if (tmp) {
                                                  tmp = isFocused;
                                                }
                                                if (tmp) {
                                                  tmp3 = showErrorToast;
                                                  tmp4 = showErrorToast();
                                                }
                                                return;
                                              }
                                            }
                                            obj2.documentsIndexed = documentsIndexed;
                                            obj2.tab = tab;
                                            cResult[29] = documentsIndexed;
                                            cResult[30] = searchContext;
                                            cResult[31] = tab;
                                            class N {
                                              constructor() {
                                                if (0 !== length) {
                                                  tmp17 = isNextPageLoading;
                                                  if (isNextPageLoading) {
                                                    tmp14 = closure_8;
                                                    tmp15 = tab;
                                                    addResult = closure_8.add(tab);
                                                  } else {
                                                    tmp = isFocused;
                                                    if (isFocused) {
                                                      tmp5 = hasError;
                                                      if (hasError) {
                                                        tmp11 = closure_8;
                                                        tmp12 = tab;
                                                        addResult1 = closure_8.add(tab);
                                                      } else {
                                                        tmp6 = closure_1;
                                                        tmp7 = closure_2;
                                                        obj = closure_1(closure_2[12]);
                                                        tmp8 = searchContext;
                                                        tmp9 = tab;
                                                        nextMessages = obj.fetchNextMessages(searchContext, tab);
                                                      }
                                                    } else {
                                                      tmp2 = closure_8;
                                                      tmp3 = tab;
                                                      addResult2 = closure_8.add(tab);
                                                    }
                                                  }
                                                }
                                                return;
                                              }
                                            }
                                            const tmp23 = showErrorToast(tab(tmp2[13]), obj2);
                                            const tmp26 = showErrorToast(tab(tmp2[13]), obj2);
                                          }
                                        }
                                      }
                                      class K {
                                        constructor() {
                                          tmp = isErrorToast;
                                          if (isErrorToast) {
                                            tmp2 = isNextPageLoading;
                                            tmp = !isNextPageLoading;
                                          }
                                          if (tmp) {
                                            tmp = isFocused;
                                          }
                                          if (tmp) {
                                            tmp3 = showErrorToast;
                                            tmp4 = showErrorToast();
                                          }
                                          return;
                                        }
                                      }
                                    }
                                  }
                                }
                                class K {
                                  constructor() {
                                    tmp = isErrorToast;
                                    if (isErrorToast) {
                                      tmp2 = isNextPageLoading;
                                      tmp = !isNextPageLoading;
                                    }
                                    if (tmp) {
                                      tmp = isFocused;
                                    }
                                    if (tmp) {
                                      tmp3 = showErrorToast;
                                      tmp4 = showErrorToast();
                                    }
                                    return;
                                  }
                                }
                                const items1 = [isErrorToast, isFirstPageLoading, isFocused, showErrorToast];
                                cResult[23] = isErrorToast;
                                cResult[24] = isFocused;
                                class N {
                                  constructor() {
                                    if (0 !== length) {
                                      tmp17 = isNextPageLoading;
                                      if (isNextPageLoading) {
                                        tmp14 = closure_8;
                                        tmp15 = tab;
                                        addResult = closure_8.add(tab);
                                      } else {
                                        tmp = isFocused;
                                        if (isFocused) {
                                          tmp5 = hasError;
                                          if (hasError) {
                                            tmp11 = closure_8;
                                            tmp12 = tab;
                                            addResult1 = closure_8.add(tab);
                                          } else {
                                            tmp6 = closure_1;
                                            tmp7 = closure_2;
                                            obj = closure_1(closure_2[12]);
                                            tmp8 = searchContext;
                                            tmp9 = tab;
                                            nextMessages = obj.fetchNextMessages(searchContext, tab);
                                          }
                                        } else {
                                          tmp2 = closure_8;
                                          tmp3 = tab;
                                          addResult2 = closure_8.add(tab);
                                        }
                                      }
                                    }
                                    return;
                                  }
                                }
                                cResult[26] = showErrorToast;
                                cResult[27] = items1;
                                cResult[28] = K;
                                tmp20 = K;
                                tmp19 = items1;
                                obj6 = isFirstPageLoading;
                              }
                            }
                          }
                        }
                        const fn2 = function q() {
                          let tmp = isFocused;
                          if (isFocused) {
                            tmp = !isFirstPageLoading;
                          }
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
                            if (0 !== length) {
                              tmp17 = isNextPageLoading;
                              if (isNextPageLoading) {
                                tmp14 = closure_8;
                                tmp15 = tab;
                                addResult = closure_8.add(tab);
                              } else {
                                tmp = isFocused;
                                if (isFocused) {
                                  tmp5 = hasError;
                                  if (hasError) {
                                    tmp11 = closure_8;
                                    tmp12 = tab;
                                    addResult1 = closure_8.add(tab);
                                  } else {
                                    tmp6 = closure_1;
                                    tmp7 = closure_2;
                                    obj = closure_1(closure_2[12]);
                                    tmp8 = searchContext;
                                    tmp9 = tab;
                                    nextMessages = obj.fetchNextMessages(searchContext, tab);
                                  }
                                } else {
                                  tmp2 = closure_8;
                                  tmp3 = tab;
                                  addResult2 = closure_8.add(tab);
                                }
                              }
                            }
                            return;
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
                if (0 !== length) {
                  tmp17 = isNextPageLoading;
                  if (isNextPageLoading) {
                    tmp14 = closure_8;
                    tmp15 = tab;
                    addResult = closure_8.add(tab);
                  } else {
                    tmp = isFocused;
                    if (isFocused) {
                      tmp5 = hasError;
                      if (hasError) {
                        tmp11 = closure_8;
                        tmp12 = tab;
                        addResult1 = closure_8.add(tab);
                      } else {
                        tmp6 = closure_1;
                        tmp7 = closure_2;
                        obj = closure_1(closure_2[12]);
                        tmp8 = searchContext;
                        tmp9 = tab;
                        nextMessages = obj.fetchNextMessages(searchContext, tab);
                      }
                    } else {
                      tmp2 = closure_8;
                      tmp3 = tab;
                      addResult2 = closure_8.add(tab);
                    }
                  }
                }
                return;
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
            const tmpResult4 = searchContext(tmp2[11]);
          }
        }
        const obj3 = { searchContext, tab, hasListItems: keywordResultCount > 0 };
        cResult[4] = searchContext;
        cResult[5] = keywordResultCount > 0;
        cResult[6] = tab;
        cResult[7] = obj3;
        tmp12 = obj3;
        const tmpResult = searchContext(tmp2[9]);
      }
      const fn = function l() {
        const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(searchContext);
        const searchTabFetchId = SearchUtils.getSearchTabFetchId(searchContext, tab, searchResultsQuery);
        return {
          isIndexing: SearchMessageStore.getIsIndexing(searchTabFetchId),
          isHistoricalIndexing: SearchMessageStore.getIsHistoricalIndexing(searchTabFetchId),
          documentsIndexed: SearchMessageStore.getDocumentsIndexed(searchTabFetchId),
        };
      };
      cResult[1] = searchContext;
      cResult[2] = tab;
      cResult[3] = fn;
      tmp8 = fn;
      let obj = searchContext(isFocused[7]);
    }
  : function BaseMessagesScreen(tab) {
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
      const items = [isHistoricalIndexing, keywordResultCount];
      const stateFromStoresObject = searchContext(isFocused[9]).useStateFromStoresObject(items, () => {
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
      let obj = searchContext(isFocused[9]);
      const messageSearchErrorScreen = searchContext(isFocused[10]).useMessageSearchErrorScreen({
        searchContext,
        tab,
        hasListItems: keywordResultCount > 0,
      });
      hasError = messageSearchErrorScreen.hasError;
      isErrorToast = messageSearchErrorScreen.isErrorToast;
      showErrorToast = messageSearchErrorScreen.showErrorToast;
      ({ errorText, isErrorFullscreen } = messageSearchErrorScreen);
      const obj2 = searchContext(isFocused[10]);
      const obj3 = { searchContext, tab, hasListItems: keywordResultCount > 0 };
      searchFetchPendingManager = searchContext(isFocused[11]).useSearchFetchPendingManager(searchContext);
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
        return hasError(tab(tmp2[14]), obj5);
      } else {
        if (isErrorFullscreen) {
          if (!isFirstPageLoading) {
            if (!tmp10) {
              const obj6 = { text: errorText };
              let tmp13 = hasError(tab(tmp2[16]), obj6);
            }
            return tmp13;
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
        tmp13 = hasError(tab(tmp2[17]), obj7);
        tmp10 =
          smartSearchStatus === tmp(tmp2[15]).SmartSearchStatus.LOADING ||
          smartSearchStatus === tmp(tmp2[15]).SmartSearchStatus.LOADED;
      }
    };
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
  const result = tracking_TrackingDefault.trackSearchResultClicked(obj2);
};
