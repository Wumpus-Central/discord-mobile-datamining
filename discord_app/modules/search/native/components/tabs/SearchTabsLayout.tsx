// === Module 17101: SearchTabsLayout ===

// Module 17101 (SearchTabsLayout)
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6326 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 12053 */;
import SmartSearchUtils from "SmartSearchUtils" /* 12056 */;
import SearchUtils from "SearchUtils" /* 12060 */;
import tracking_TrackingDefault from "tracking/Tracking" /* 12074 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 12075 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 12077 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 12078 */;
import SearchActionCreatorsDefault from "SearchActionCreators" /* 12087 */;
import SearchTabsFetchManagerDefault from "SearchTabsFetchManager" /* 12088 */;
import SmartSearchEmptyScreenDefault from "SmartSearchEmptyScreen" /* 17103 */;
import pages_ErrorScreenDefault from "pages/ErrorScreen" /* 17108 */;
import SearchTabsPageDefault from "SearchTabsPage" /* 17109 */;
import noop from "module_19" /* 19 */;
import SearchMessageStore from "SearchMessageStore" /* 6067 */;
import SearchQueryStore from "SearchQueryStore" /* 12067 */;
import SearchTabsLayoutStore from "SearchTabsLayoutStore" /* 12079 */;

require = fn;
const View = fn(17).View;
const SearchConstants = fn(9247);
({ MESSAGE_SEARCH_RESULT_TABS_SET: closure_8, SEARCH_MESSAGE_TAB_SENTINEL: closure_9, SearchTabs: c10 } = SearchConstants);
const ComponentActions = fn(1085).ComponentActions;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(5090);
let closure_15 = createStyles.createStyles({ controls: { flex: 0, minHeight: 32 }, pages: { flex: 1 } });
const apply = fn(12);
let closure_16 = apply.debounce((searchContext) => tracking_TrackingDefault.trackSearchTabSelected({ searchContext }), 500);
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSelectMediaTab(searchTabs) {
  const cResult = searchTabs(576).c(8);
  searchTabs = searchTabs.searchTabs;
  const setActiveIndex = searchTabs.setActiveIndex;
  if (cResult[0] === searchTabs) {
    if (cResult[1] === setActiveIndex) {
      let tmp2 = cResult[2];
    }
    dependencyMap = noop.useRef(tmp2);
    if (cResult[3] === searchTabs) {
      if (cResult[4] === setActiveIndex) {
        let tmp3 = cResult[5];
        let tmp4 = cResult[6];
      }
      const effect = noop.useEffect(tmp3, tmp4);
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            return closure_2.current();
          }
        }
        cResult[7] = S;
      } else {
        class S {
          constructor() {
            return closure_2.current();
          }
        }
      }
      return S;
    }
    const fn2 = function u() {
      closure_2.current = () => {
        setActiveIndex(searchTabs.findIndex((item) => item === constants.MEDIA));
      };
    };
    const items = [searchTabs, setActiveIndex];
    cResult[3] = searchTabs;
    cResult[4] = setActiveIndex;
    cResult[5] = fn2;
    cResult[6] = items;
    tmp4 = items;
    tmp3 = fn2;
  }
  const fn = function n() {
    setActiveIndex(searchTabs.findIndex((item) => item === constants.MEDIA));
  };
  cResult[0] = searchTabs;
  cResult[1] = setActiveIndex;
  cResult[2] = fn;
  tmp2 = fn;
  const obj = searchTabs(576);
}) : (function useSelectMediaTab(searchTabs) {
  searchTabs = searchTabs.searchTabs;
  const setActiveIndex = searchTabs.setActiveIndex;
  noop.useRef(() => {
    setActiveIndex(searchTabs.findIndex((item) => item === constants.MEDIA));
  });
  const items = [searchTabs, setActiveIndex];
  const effect = noop.useEffect(() => {
    closure_2.current = () => {
      setActiveIndex(searchTabs.findIndex((item) => item === constants.MEDIA));
    };
  }, items);
  return noop.useCallback(() => ref.current(), []);
});
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function NoSearchResultsScreen(searchContext) {
  let tmp2 = dependencyMap;
  const cResult = searchContext(576).c(13);
  searchContext = searchContext.searchContext;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SearchQueryStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== searchContext) {
    const fn = function o() {
      return SearchQueryStore.getSearchResultsQuery(searchContext);
    };
    const items1 = [searchContext];
    cResult[1] = searchContext;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = searchContext(576);
  const stateFromStores = searchContext(504).useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === searchContext) {
    if (cResult[5] === stateFromStores) {
      let tmp9 = cResult[6];
    }
    const smartSearchStatus = tmp(17102).useSmartSearchStatus(tmp9);
    if (cResult[7] !== searchContext) {
      const fn2 = function f() {
        const result = tracking_TrackingDefault.trackSearchEmptyResult({ searchContext });
      };
      const items2 = [searchContext];
      cResult[7] = searchContext;
      cResult[8] = fn2;
      cResult[9] = items2;
      let tmp13 = items2;
      let tmp12 = fn2;
    } else {
      tmp12 = cResult[8];
      tmp13 = cResult[9];
    }
    const effect = noop.useEffect(tmp12, tmp13);
    if (null != tmp9) {
      if (tmpResult5.isSmartSearchEmptyOrErrored(smartSearchStatus)) {
        if (cResult[10] !== tmp9) {
          const obj2 = { smartSearchQuery: tmp9 };
          tmp2 = closure_12(SmartSearchEmptyScreenDefault, obj2);
          cResult[10] = tmp9;
          cResult[11] = tmp2;
        }
      }
      tmpResult5 = tmp(12056);
    }
    const _Symbol = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { text: null };
      const intl = tmp(1126).intl;
      obj3.text = intl.string(tmp(1126).t.V6nAfF);
      const tmp21 = closure_12(pages_ErrorScreenDefault, obj3);
      cResult[12] = tmp21;
      let tmp17 = tmp21;
    } else {
      tmp17 = cResult[12];
    }
    return tmp17;
  }
  const tmpResult = searchContext(504);
  const smartSearchQuery = searchContext(12056).getSmartSearchQuery(searchContext, stateFromStores);
  cResult[4] = searchContext;
  cResult[5] = stateFromStores;
  cResult[6] = smartSearchQuery;
  tmp9 = smartSearchQuery;
  const tmpResult6 = searchContext(12056);
}) : (function NoSearchResultsScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [SearchQueryStore];
  const items1 = [searchContext];
  const stateFromStores = searchContext(504).useStateFromStores(items, () => SearchQueryStore.getSearchResultsQuery(searchContext), items1);
  const items2 = [searchContext, stateFromStores];
  const memo = noop.useMemo(() => SmartSearchUtils.getSmartSearchQuery(searchContext, stateFromStores), items2);
  const obj = searchContext(504);
  const items3 = [searchContext];
  const smartSearchStatus = searchContext(17102).useSmartSearchStatus(memo);
  const effect = noop.useEffect(() => {
    const result = tracking_TrackingDefault.trackSearchEmptyResult({ searchContext });
  }, items3);
  if (null != memo) {
    if (tmpResult.isSmartSearchEmptyOrErrored(smartSearchStatus)) {
      const obj3 = { smartSearchQuery: memo };
      let tmp8 = closure_12(stateFromStores(17103), obj3);
    }
    return tmp8;
  }
  const obj4 = { text: null };
  const obj2 = searchContext(17102);
  const intl = tmp(1126).intl;
  obj4.text = intl.string(searchContext(1126).t.V6nAfF);
  tmp8 = closure_12(stateFromStores(17108), obj4);
  const tmp7 = stateFromStores(17108);
});
const __initData = { code: "function SearchTabsLayoutTsx1(t8){const{isDragging,disallowMemberListGesture}=this.__closure;var _disallowMemberListGe;const{contentOffset:contentOffset}=t8;isDragging.set(true);(_disallowMemberListGe=disallowMemberListGesture)===null||_disallowMemberListGe===void 0||_disallowMemberListGe.set(contentOffset.x>0);}" };
const __initData2 = { code: "function SearchTabsLayoutTsx2(){const{isDragging,disallowMemberListGesture}=this.__closure;var _disallowMemberListGe;isDragging.set(false);(_disallowMemberListGe=disallowMemberListGesture)===null||_disallowMemberListGe===void 0||_disallowMemberListGe.set(false);}" };
const __initData3 = { code: "function SearchTabsLayoutTsx3(t10){const{isDragging,disallowMemberListGesture}=this.__closure;const{contentOffset:contentOffset_0}=t10;if(isDragging.get()){var _disallowMemberListGe;(_disallowMemberListGe=disallowMemberListGesture)===null||_disallowMemberListGe===void 0||_disallowMemberListGe.set(contentOffset_0.x>0);}}" };
const __initData4 = { code: "function SearchTabsLayoutTsx4({contentOffset:contentOffset}){const{isDragging,disallowMemberListGesture}=this.__closure;var _disallowMemberListGe;isDragging.set(true);(_disallowMemberListGe=disallowMemberListGesture)===null||_disallowMemberListGe===void 0||_disallowMemberListGe.set(contentOffset.x>0);}" };
const __initData5 = { code: "function SearchTabsLayoutTsx5(){const{isDragging,disallowMemberListGesture}=this.__closure;var _disallowMemberListGe;isDragging.set(false);(_disallowMemberListGe=disallowMemberListGesture)===null||_disallowMemberListGe===void 0||_disallowMemberListGe.set(false);}" };
const __initData6 = { code: "function SearchTabsLayoutTsx6({contentOffset:contentOffset_0}){const{isDragging,disallowMemberListGesture}=this.__closure;if(isDragging.get()){var _disallowMemberListGe;(_disallowMemberListGe=disallowMemberListGesture)===null||_disallowMemberListGe===void 0||_disallowMemberListGe.set(contentOffset_0.x>0);}}" };
ReactCompilerGating = fn(558);
let closure_25 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function SearchTabsLayout(searchContext) {
  const cResult = items4(visibleTabCounts[12]).c(69);
  searchContext = searchContext.searchContext;
  ({ visibleTabs, visibleTabCounts } = searchContext);
  const width = searchContext.width;
  const tmp4 = closure_15();
  if (cResult[0] === searchContext) {
    if (cResult[1] === visibleTabCounts) {
      if (cResult[2] === visibleTabs) {
        if (cResult[3] === width) {
          items4 = cResult[4];
        }
        if (cResult[5] !== searchContext) {
          const fn = function k(arg0) {
            SearchSessionAnalyticsManagerDefault.setSelectedTab(searchContext, arg0);
            SmartSearchAnalyticsManagerDefault.setIsTabActive(arg0 === constants.MESSAGES, SearchSessionAnalyticsManagerDefault);
            closure_16(searchContext);
            const queryString = SearchQueryStore.getQueryString(searchContext);
            const searchTabFetchId = SearchUtils.getSearchTabFetchId(searchContext, options, queryString);
            const isFetching = SearchMessageStore.getIsFetching(searchTabFetchId);
            const isInitialFetchComplete = SearchMessageStore.getIsInitialFetchComplete(searchTabFetchId);
            const hasItem = set.has(arg0);
            let tmp12 = !hasItem;
            if (hasItem) {
              tmp12 = isInitialFetchComplete;
            }
            if (!tmp12) {
              tmp12 = isFetching;
            }
            if (!tmp12) {
              const initialMessagesDebounced = SearchPlatformUtilsDefault.fetchInitialMessagesDebounced(searchContext);
              const tmpResult = SearchPlatformUtilsDefault;
            }
          };
          cResult[5] = searchContext;
          cResult[6] = fn;
          let tmp7 = fn;
        } else {
          tmp7 = cResult[6];
        }
        if (cResult[7] === tmp5) {
          if (cResult[8] === tmp7) {
            if (cResult[9] === visibleTabs) {
              if (cResult[10] === width) {
                let tmp8 = cResult[11];
              }
              const searchSegmentedControlState = tmp(visibleTabCounts[24]).useSearchSegmentedControlState(tmp8);
              ({ segmentedControlState, selectedTab } = searchSegmentedControlState);
              const setActiveIndex = segmentedControlState.setActiveIndex;
              if (cResult[12] === setActiveIndex) {
                if (cResult[13] === visibleTabs) {
                  let tmp10 = cResult[14];
                }
                let tmp12 = closure_17(tmp10);
                if (cResult[15] === tmp12) {
                  if (cResult[16] === selectedTab) {
                    let tmp13 = cResult[17];
                  }
                  const context = width.useContext(tmp(visibleTabCounts[25]).SwipeForMemberListContext);
                  if (cResult[18] !== context) {
                    let obj2 = context;
                    if (context == null) {
                      obj2 = {};
                    }
                    cResult[18] = context;
                    cResult[19] = obj2;
                    let tmp15 = obj2;
                  } else {
                    tmp15 = cResult[19];
                  }
                  ({ gesture, disallowGesture } = tmp15);
                  const channelId = tmp15.channelId;
                  const screenIndex = tmp15.screenIndex;
                  if (null == gesture) {
                    const sharedValue = tmp(visibleTabCounts[27]).useSharedValue(false);
                    if (cResult[22] === disallowGesture) {
                      if (cResult[23] === sharedValue) {
                        let tmp22 = cResult[24];
                      }
                      if (cResult[25] === disallowGesture) {
                        if (cResult[26] === sharedValue) {
                          let tmp24 = cResult[27];
                        }
                        if (cResult[28] === disallowGesture) {
                          if (cResult[29] === sharedValue) {
                            let tmp26 = cResult[30];
                          }
                          if (cResult[31] !== searchContext) {
                            function ue() {
                              SmartSearchAnalyticsManagerDefault.resetSession(SearchSessionAnalyticsManagerDefault);
                              SearchPlatformActionCreatorsDefault.deleteSearchQuery(searchContext);
                              const result = SearchActionCreatorsDefault.clearAllSearchMesssages();
                              const result1 = SearchActionCreatorsDefault.clearSearchRecentMessages();
                              const searchContextId = SearchUtils.getSearchContextId(searchContext);
                              SearchTabsFetchManagerDefault.cleanUp(searchContextId);
                            }
                            cResult[31] = searchContext;
                            cResult[32] = ue;
                            let tmp28 = ue;
                          } else {
                            tmp28 = cResult[32];
                          }
                          closure_10 = tmp28;
                          if (cResult[33] === tmp28) {
                            if (cResult[34] === context) {
                              let tmp29 = cResult[35];
                              let tmp30 = cResult[36];
                            }
                            const effect = obj6.useEffect(tmp29, tmp30);
                            if (cResult[37] === tmp28) {
                              if (cResult[38] === channelId) {
                                if (cResult[39] === screenIndex) {
                                  if (cResult[40] === setActiveIndex) {
                                    if (cResult[41] === context) {
                                      let tmp32 = cResult[42];
                                      let tmp33 = cResult[43];
                                    }
                                    const effect1 = obj6.useEffect(tmp32, tmp33);
                                    if (0 === segmentedControlState.items.length) {
                                      if (cResult[44] !== searchContext) {
                                        let obj3 = { searchContext };
                                        const tmp66 = closure_12(closure_18, obj3);
                                        cResult[44] = searchContext;
                                        cResult[45] = tmp66;
                                        let tmp63 = tmp66;
                                      } else {
                                        tmp63 = cResult[45];
                                      }
                                      return tmp63;
                                    } else {
                                      if (cResult[46] !== segmentedControlState) {
                                        let obj4 = { state: segmentedControlState };
                                        const tmp39 = closure_12(searchContext(visibleTabCounts[32]), obj4);
                                        let obj5 = { state: segmentedControlState };
                                        const tmp40 = closure_12(searchContext(visibleTabCounts[33]), obj5);
                                        cResult[46] = segmentedControlState;
                                        cResult[47] = tmp39;
                                        cResult[48] = tmp40;
                                        let tmp36 = tmp40;
                                        let tmp35 = tmp39;
                                      } else {
                                        tmp35 = cResult[47];
                                        tmp36 = cResult[48];
                                      }
                                      if (cResult[49] === tmp4.controls) {
                                        if (cResult[50] === tmp35) {
                                          if (cResult[51] === tmp36) {
                                            let tmp41 = cResult[52];
                                          }
                                          let tmp46;
                                          if (null != context) {
                                            tmp46 = tmp22;
                                          }
                                          let tmp47;
                                          if (null != context) {
                                            tmp47 = tmp24;
                                          }
                                          let tmp48;
                                          if (null != context) {
                                            tmp48 = tmp26;
                                          }
                                          if (cResult[53] === undefined) {
                                            if (cResult[54] === segmentedControlState) {
                                              if (cResult[55] === tmp45) {
                                                if (cResult[56] === tmp46) {
                                                  if (cResult[57] === tmp47) {
                                                    if (cResult[58] === tmp48) {
                                                      let tmp49 = cResult[59];
                                                    }
                                                    if (cResult[60] === tmp13) {
                                                      if (cResult[61] === tmp49) {
                                                        let tmp52 = cResult[62];
                                                      }
                                                      if (cResult[63] === tmp4.pages) {
                                                        if (cResult[64] === tmp52) {
                                                          let tmp55 = cResult[65];
                                                        }
                                                        if (cResult[66] === tmp41) {
                                                          if (cResult[67] === tmp55) {
                                                            let tmp59 = cResult[68];
                                                          }
                                                          return tmp59;
                                                        }
                                                        const obj7 = { children: null };
                                                        const items = [tmp41, tmp55];
                                                        obj7.children = items;
                                                        const tmp62 = closure_13(closure_14, obj7);
                                                        cResult[66] = tmp41;
                                                        cResult[67] = tmp55;
                                                        cResult[68] = tmp62;
                                                        tmp59 = tmp62;
                                                      }
                                                      const obj8 = { style: tmp4.pages, children: tmp52 };
                                                      const tmp58 = closure_12(setActiveIndex, obj8);
                                                      cResult[63] = tmp4.pages;
                                                      cResult[64] = tmp52;
                                                      cResult[65] = tmp58;
                                                      tmp55 = tmp58;
                                                    }
                                                    const obj9 = { value: tmp13, children: tmp49 };
                                                    const tmp54 = closure_12(tmp(visibleTabCounts[20]).SearchTabsPageContext.Provider, obj9);
                                                    cResult[60] = tmp13;
                                                    cResult[61] = tmp49;
                                                    cResult[62] = tmp54;
                                                    tmp52 = tmp54;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          const obj10 = { state: segmentedControlState, bounces: null == context, nativeGesture: undefined, onBeginDragWorklet: tmp46, onEndDragWorklet: tmp47, onScrollWorklet: tmp48 };
                                          const tmp51 = closure_12(tmp(visibleTabCounts[34]).SegmentedControlPages, obj10);
                                          cResult[53] = undefined;
                                          cResult[54] = segmentedControlState;
                                          cResult[55] = null == context;
                                          cResult[56] = tmp46;
                                          cResult[57] = tmp47;
                                          cResult[58] = tmp48;
                                          cResult[59] = tmp51;
                                          tmp49 = tmp51;
                                        }
                                      }
                                      const obj11 = { style: tmp4.controls, children: null };
                                      const items1 = [tmp35, tmp36];
                                      obj11.children = items1;
                                      const tmp44 = closure_13(setActiveIndex, obj11);
                                      cResult[49] = tmp4.controls;
                                      cResult[50] = tmp35;
                                      cResult[51] = tmp36;
                                      cResult[52] = tmp44;
                                      tmp41 = tmp44;
                                    }
                                  }
                                }
                              }
                            }
                            function ge() {
                              if (null != context) {
                                function handleChannelDetailsHidden(channelId) {
                                  let tmp2 = channelId.channelId === channelId;
                                  if (tmp2) {
                                    tmp2 = tmp === screenIndex;
                                  }
                                  if (tmp2) {
                                    setActiveIndex(0, false, true);
                                    closure_1_10();
                                  }
                                }
                                let ComponentDispatch = items4(visibleTabCounts[31]).ComponentDispatch;
                                const subscription = ComponentDispatch.subscribe(constants.CHANNEL_DETAILS_HIDDEN, handleChannelDetailsHidden);
                                return () => {
                                  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
                                  ComponentDispatch.unsubscribe(ComponentActions.CHANNEL_DETAILS_HIDDEN, handleChannelDetailsHidden);
                                };
                              }
                            }
                            const items2 = [channelId, screenIndex, setActiveIndex, context, tmp28];
                            cResult[37] = tmp28;
                            cResult[38] = channelId;
                            cResult[39] = screenIndex;
                            cResult[40] = setActiveIndex;
                            cResult[41] = context;
                            cResult[42] = ge;
                            cResult[43] = items2;
                            tmp33 = items2;
                            tmp32 = ge;
                          }
                          function de() {
                            return null == context ? (() => closure_1_10()) : undefined;
                          }
                          const items3 = [context, tmp28];
                          cResult[33] = tmp28;
                          cResult[34] = context;
                          cResult[35] = de;
                          cResult[36] = items3;
                          tmp30 = items3;
                          tmp29 = de;
                        }
                        function oe(contentOffset) {
                          if (sharedValue.get()) {
                            if (disallowGesture != null) {
                              const result = disallowGesture.set(contentOffset.contentOffset.x > 0);
                            }
                          }
                        }
                        const obj12 = { isDragging: sharedValue, disallowMemberListGesture: disallowGesture };
                        oe.__closure = obj12;
                        oe.__workletHash = 7499321205175;
                        oe.__initData = __initData3;
                        cResult[28] = disallowGesture;
                        cResult[29] = sharedValue;
                        cResult[30] = oe;
                        tmp26 = oe;
                      }
                      function ie() {
                        const result = sharedValue.set(false);
                        if (disallowGesture != null) {
                          const result1 = disallowGesture.set(false);
                        }
                      }
                      const obj13 = { isDragging: sharedValue, disallowMemberListGesture: disallowGesture };
                      ie.__closure = obj13;
                      ie.__workletHash = 5683301645106;
                      ie.__initData = __initData2;
                      cResult[25] = disallowGesture;
                      cResult[26] = sharedValue;
                      cResult[27] = ie;
                      tmp24 = ie;
                    }
                    function te(contentOffset) {
                      const result = sharedValue.set(true);
                      if (disallowGesture != null) {
                        const result1 = disallowGesture.set(contentOffset.contentOffset.x > 0);
                      }
                    }
                    const obj14 = { isDragging: sharedValue, disallowMemberListGesture: disallowGesture };
                    te.__closure = obj14;
                    te.__workletHash = 1378962708324;
                    te.__initData = __initData;
                    cResult[22] = disallowGesture;
                    cResult[23] = sharedValue;
                    cResult[24] = te;
                    tmp22 = te;
                    const tmpResult2 = tmp(visibleTabCounts[27]);
                  } else if (cResult[20] !== gesture) {
                    const Gesture = tmp(visibleTabCounts[26]).Gesture;
                    let result = Gesture.Native().simultaneousWithExternalGesture(gesture);
                    cResult[20] = gesture;
                    cResult[21] = result;
                    const NativeResult = Gesture.Native();
                  }
                }
                const obj15 = { selectedTab, selectMediaTab: tmp12 };
                cResult[15] = tmp12;
                cResult[16] = selectedTab;
                cResult[17] = obj15;
                tmp13 = obj15;
              }
              const obj16 = { searchTabs: visibleTabs, setActiveIndex };
              cResult[12] = setActiveIndex;
              cResult[13] = visibleTabs;
              cResult[14] = obj16;
              tmp10 = obj16;
              let tmpResult = tmp(visibleTabCounts[24]);
            }
          }
        }
        const obj17 = { items: tmp5, visibleTabs, onSelectedTabChange: tmp7, width };
        cResult[7] = tmp5;
        cResult[8] = tmp7;
        cResult[9] = visibleTabs;
        cResult[10] = width;
        cResult[11] = obj17;
        tmp8 = obj17;
      }
    }
  }
  items4 = [];
  const item = visibleTabs.forEach((id) => {
    const obj = { label: SearchUtils.getTabTitle(id), id, page: __initData(SearchTabsPageDefault, { tab: id, searchContext, width }), count: null };
    let tmp2;
    if (visibleTabCounts != null) {
      tmp2 = visibleTabCounts[id];
    }
    obj.count = tmp2;
    items4.push(obj);
    const obj3 = { tab: id, searchContext, width };
  });
  cResult[0] = searchContext;
  cResult[1] = visibleTabCounts;
  cResult[2] = visibleTabs;
  cResult[3] = width;
  cResult[4] = items4;
  let obj = items4(visibleTabCounts[12]);
}) : (function SearchTabsLayout(searchContext) {
  searchContext = searchContext.searchContext;
  const visibleTabs = searchContext.visibleTabs;
  const visibleTabCounts = searchContext.visibleTabCounts;
  const width = searchContext.width;
  selectedTab = undefined;
  let gesture;
  let disallowGesture;
  let channelId;
  let screenIndex;
  let sharedValue;
  let callback4;
  const tmp = closure_15();
  let items = [visibleTabCounts, visibleTabs, searchContext, width];
  const items1 = [searchContext];
  const memo = width.useMemo(() => {
    const items = [];
    const item = visibleTabs.forEach((id) => {
      const obj = { label: SearchUtils.getTabTitle(id), id, page: __initData(SearchTabsPageDefault, { tab: id, searchContext, width }), count: null };
      let tmp2;
      if (visibleTabCounts != null) {
        tmp2 = visibleTabCounts[id];
      }
      obj.count = tmp2;
      items.push(obj);
      const obj3 = { tab: id, searchContext, width };
    });
    return items;
  }, items);
  const callback = width.useCallback((arg0) => {
    SearchSessionAnalyticsManagerDefault.setSelectedTab(searchContext, arg0);
    SmartSearchAnalyticsManagerDefault.setIsTabActive(arg0 === constants.MESSAGES, SearchSessionAnalyticsManagerDefault);
    closure_16(searchContext);
    const queryString = SearchQueryStore.getQueryString(searchContext);
    const searchTabFetchId = SearchUtils.getSearchTabFetchId(searchContext, options, queryString);
    const isFetching = SearchMessageStore.getIsFetching(searchTabFetchId);
    const isInitialFetchComplete = SearchMessageStore.getIsInitialFetchComplete(searchTabFetchId);
    const hasItem = set.has(arg0);
    let tmp12 = !hasItem;
    if (hasItem) {
      tmp12 = isInitialFetchComplete;
    }
    if (!tmp12) {
      tmp12 = isFetching;
    }
    if (!tmp12) {
      const initialMessagesDebounced = SearchPlatformUtilsDefault.fetchInitialMessagesDebounced(searchContext);
      const tmpResult = SearchPlatformUtilsDefault;
    }
  }, items1);
  const searchSegmentedControlState = searchContext(visibleTabCounts[24]).useSearchSegmentedControlState({ items: memo, visibleTabs, onSelectedTabChange: callback, width });
  ({ segmentedControlState, selectedTab } = searchSegmentedControlState);
  const setActiveIndex = segmentedControlState.setActiveIndex;
  const tmp7 = closure_17({ searchTabs: visibleTabs, setActiveIndex });
  const selectMediaTab = tmp7;
  const items2 = [tmp7, selectedTab];
  const memo1 = width.useMemo(() => ({ selectedTab, selectMediaTab }), items2);
  const context = width.useContext(searchContext(visibleTabCounts[25]).SwipeForMemberListContext);
  let obj3 = context;
  if (context == null) {
    obj3 = {};
  }
  gesture = obj3.gesture;
  disallowGesture = obj3.disallowGesture;
  channelId = obj3.channelId;
  screenIndex = obj3.screenIndex;
  const items3 = [gesture];
  const memo2 = obj.useMemo(() => {
    if (null != gesture) {
      const Gesture = LegacyBaseButton.Gesture;
      return Gesture.Native().simultaneousWithExternalGesture(tmp);
    }
  }, items3);
  let obj2 = searchContext(visibleTabCounts[24]);
  sharedValue = searchContext(visibleTabCounts[27]).useSharedValue(false);
  const fn = function x(contentOffset) {
    const result = sharedValue.set(true);
    if (disallowGesture != null) {
      const result1 = disallowGesture.set(contentOffset.contentOffset.x > 0);
    }
  };
  fn.__closure = { isDragging: sharedValue, disallowMemberListGesture: disallowGesture };
  fn.__workletHash = 870973563362;
  fn.__initData = __initData4;
  const items4 = [disallowGesture, sharedValue];
  class G {
    constructor() {
      result = closure_12.set(false);
      obj = disallowGesture;
      if (disallowGesture != null) {
        result1 = obj.set(false);
      }
      return;
    }
  }
  G.__closure = { isDragging: sharedValue, disallowMemberListGesture: disallowGesture };
  G.__workletHash = 16677979123893;
  G.__initData = __initData5;
  const items5 = [disallowGesture, sharedValue];
  const callback1 = obj.useCallback(fn, items4);
  const fn2 = function p(contentOffset) {
    if (sharedValue.get()) {
      if (disallowGesture != null) {
        const result = disallowGesture.set(contentOffset.contentOffset.x > 0);
      }
    }
  };
  fn2.__closure = { isDragging: sharedValue, disallowMemberListGesture: disallowGesture };
  fn2.__workletHash = 8733641616593;
  fn2.__initData = __initData6;
  const items6 = [disallowGesture, sharedValue];
  const callback2 = obj.useCallback(G, items5);
  const items7 = [searchContext];
  const callback3 = obj.useCallback(fn2, items6);
  callback4 = obj.useCallback(() => {
    SmartSearchAnalyticsManagerDefault.resetSession(SearchSessionAnalyticsManagerDefault);
    SearchPlatformActionCreatorsDefault.deleteSearchQuery(searchContext);
    const result = SearchActionCreatorsDefault.clearAllSearchMesssages();
    const result1 = SearchActionCreatorsDefault.clearSearchRecentMessages();
    const searchContextId = SearchUtils.getSearchContextId(searchContext);
    SearchTabsFetchManagerDefault.cleanUp(searchContextId);
  }, items7);
  const items8 = [context, callback4];
  const effect = obj.useEffect(() => null == context ? (() => callback4()) : undefined, items8);
  const items9 = [channelId, screenIndex, setActiveIndex, context, callback4];
  const effect1 = obj.useEffect(() => {
    function handleChannelDetailsHidden(channelId) {
      let tmp2 = channelId.channelId === channelId;
      if (tmp2) {
        tmp2 = tmp === screenIndex;
      }
      if (tmp2) {
        setActiveIndex(0, false, true);
        callback4();
      }
    }
    if (null != context) {
      let ComponentDispatch = searchContext(visibleTabCounts[31]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(screenIndex.CHANNEL_DETAILS_HIDDEN, handleChannelDetailsHidden);
      return () => {
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.unsubscribe(ComponentActions.CHANNEL_DETAILS_HIDDEN, handleChannelDetailsHidden);
      };
    }
  }, items9);
  if (0 === segmentedControlState.items.length) {
    let obj4 = { searchContext };
    let tmp24Result = sharedValue(closure_18, obj4);
  } else {
    let obj5 = { style: tmp.controls, children: null };
    const obj6 = { state: segmentedControlState };
    const items10 = [sharedValue(visibleTabs(tmp5[32]), obj6), ];
    const obj7 = { state: segmentedControlState };
    items10[1] = sharedValue(visibleTabs(tmp5[33]), obj7);
    obj5.children = items10;
    const items11 = [callback4(selectedTab, obj5), ];
    const obj8 = { style: tmp.pages, children: null };
    const obj9 = { value: memo1, children: null };
    const obj10 = { state: segmentedControlState, bounces: null == context, nativeGesture: memo2, onBeginDragWorklet: null, onEndDragWorklet: null, onScrollWorklet: null };
    let tmp18;
    if (null != context) {
      tmp18 = callback1;
    }
    obj10.onBeginDragWorklet = tmp18;
    let tmp19;
    if (null != context) {
      tmp19 = callback2;
    }
    obj10.onEndDragWorklet = tmp19;
    let tmp20;
    if (null != context) {
      tmp20 = callback3;
    }
    const obj11 = { children: null };
    obj10.onScrollWorklet = tmp20;
    obj9.children = sharedValue(tmp4(tmp5[34]).SegmentedControlPages, obj10);
    obj8.children = sharedValue(tmp4(tmp5[20]).SearchTabsPageContext.Provider, obj9);
    items11[1] = sharedValue(selectedTab, obj8);
    obj11.children = items11;
    tmp24Result = callback4(closure_14, obj11);
  }
  return tmp24Result;
}));
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/tabs/SearchTabsLayout.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConnectedSearchTabsLayout(searchContext) {
  const cResult = searchContext(576).c(15);
  searchContext = searchContext.searchContext;
  const width = searchContext.width;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SearchTabsLayoutStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== searchContext) {
    const fn = function n() {
      return { visibleTabs: SearchTabsLayoutStore.getVisibleTabs(searchContext), visibleTabCounts: SearchTabsLayoutStore.getVisibleTabCounts(searchContext), candidateTabs: SearchTabsLayoutStore.getCandidateTabs(searchContext) };
    };
    const items1 = [searchContext];
    cResult[1] = searchContext;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = searchContext(576);
  const stateFromStoresObject = searchContext(504).useStateFromStoresObject(first, tmp6, tmp7);
  ({ visibleTabs, visibleTabCounts, candidateTabs } = stateFromStoresObject);
  if (cResult[4] !== candidateTabs) {
    const _Set = Set;
    set = new Set(candidateTabs);
    cResult[4] = candidateTabs;
    cResult[5] = set;
    let obj3 = set;
  } else {
    obj3 = cResult[5];
  }
  const tmpResult = searchContext(504);
  const autoSearchGuildChannelTab = searchContext(17207).useAutoSearchGuildChannelTab(searchContext, !obj3.has(constants.GUILD_CHANNELS));
  const tmpResult5 = searchContext(17207);
  const autoSearchMembersTab = searchContext(17208).useAutoSearchMembersTab(searchContext, !obj3.has(constants.MEMBERS));
  const tmpResult6 = searchContext(17208);
  const autoSearchPeopleTab = searchContext(17209).useAutoSearchPeopleTab(searchContext, !obj3.has(constants.PEOPLE));
  if (cResult[6] === searchContext) {
    if (cResult[7] === visibleTabCounts) {
      if (cResult[8] === visibleTabs) {
        let tmp17 = cResult[9];
      }
      const autoTrackSearchTabCountsViewedAnalytics = tmp(17210).useAutoTrackSearchTabCountsViewedAnalytics(tmp17);
      if (cResult[10] === searchContext) {
        if (cResult[11] === visibleTabCounts) {
          if (cResult[12] === visibleTabs) {
            if (cResult[13] === width) {
              let tmp19 = cResult[14];
            }
            return tmp19;
          }
        }
      }
      const obj2 = { searchContext, visibleTabs, visibleTabCounts, width };
      const tmp22 = closure_12(closure_25, obj2);
      cResult[10] = searchContext;
      cResult[11] = visibleTabCounts;
      cResult[12] = visibleTabs;
      cResult[13] = width;
      cResult[14] = tmp22;
      tmp19 = tmp22;
      const tmpResult8 = tmp(17210);
    }
  }
  const obj4 = { searchContext, visibleTabCounts, visibleTabs };
  cResult[6] = searchContext;
  cResult[7] = visibleTabCounts;
  cResult[8] = visibleTabs;
  cResult[9] = obj4;
  tmp17 = obj4;
  const tmpResult7 = searchContext(17209);
}) : (function ConnectedSearchTabsLayout(width) {
  const searchContext = width.searchContext;
  candidateTabs = undefined;
  const items = [SearchTabsLayoutStore];
  const items1 = [searchContext];
  const stateFromStoresObject = searchContext(504).useStateFromStoresObject(items, () => ({ visibleTabs: SearchTabsLayoutStore.getVisibleTabs(searchContext), visibleTabCounts: SearchTabsLayoutStore.getVisibleTabCounts(searchContext), candidateTabs: SearchTabsLayoutStore.getCandidateTabs(searchContext) }), items1);
  ({ visibleTabs, visibleTabCounts, candidateTabs } = stateFromStoresObject);
  const items2 = [candidateTabs];
  const memo = noop.useMemo(() => new Set(candidateTabs), items2);
  const obj = searchContext(504);
  const autoSearchGuildChannelTab = searchContext(17207).useAutoSearchGuildChannelTab(searchContext, !memo.has(constants.GUILD_CHANNELS));
  const obj3 = searchContext(17207);
  const autoSearchMembersTab = searchContext(17208).useAutoSearchMembersTab(searchContext, !memo.has(constants.MEMBERS));
  const obj4 = searchContext(17208);
  const autoSearchPeopleTab = searchContext(17209).useAutoSearchPeopleTab(searchContext, !memo.has(constants.PEOPLE));
  const obj5 = searchContext(17209);
  const autoTrackSearchTabCountsViewedAnalytics = searchContext(17210).useAutoTrackSearchTabCountsViewedAnalytics({ searchContext, visibleTabCounts, visibleTabs });
  return closure_12(closure_25, { searchContext, visibleTabs, visibleTabCounts, width: width.width });
});