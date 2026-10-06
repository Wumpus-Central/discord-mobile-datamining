// === Module 16822: SearchTabsLayout ===

// Module 16822 (SearchTabsLayout)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6147 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 11980 */;
import SmartSearchUtils from "SmartSearchUtils" /* 11983 */;
import SearchUtils from "SearchUtils" /* 11987 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12001 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 12002 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 12004 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 12005 */;
import SearchActionCreatorsDefault from "SearchActionCreators" /* 12014 */;
import SearchTabsFetchManagerDefault from "SearchTabsFetchManager" /* 12015 */;
import SmartSearchEmptyScreenDefault from "SmartSearchEmptyScreen" /* 16824 */;
import ErrorScreenDefault from "ErrorScreen" /* 16829 */;
import SearchTabsPageDefault from "SearchTabsPage" /* 16830 */;
import react from "react" /* 19 */;
import SearchMessageStore from "SearchMessageStore" /* 6794 */;
import SearchQueryStore from "SearchQueryStore" /* 11994 */;
import SearchTabsLayoutStore from "SearchTabsLayoutStore" /* 12006 */;
import SearchConstants from "SearchConstants" /* 7524 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import module_12 from "module_12" /* 12 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let constants, dependencyMap, searchTabs, set;

let c10;
let c9;
let closure_12;
let closure_14;
let map1;
let metroImportAll;
const View = react_native.View;
({ MESSAGE_SEARCH_RESULT_TABS_SET: metroImportAll, SEARCH_MESSAGE_TAB_SENTINEL: c9, SearchTabs: c10 } = SearchConstants);
const ComponentActions = Constants.ComponentActions;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let closure_15 = createStyles.createStyles({ controls: { flex: 0, minHeight: 32 }, pages: { flex: 1 } });
let closure_16 = module_12.debounce((searchContext) => {
  const obj = search_tracking_TrackingDefault;
  const obj2 = { searchContext };
  return obj.trackSearchTabSelected(obj2);
}, 500);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((searchTabs) => {
  let ref;
  const obj = searchTabs(576);
  const cResult = obj.c(8);
  searchTabs = searchTabs.searchTabs;
  const setActiveIndex = searchTabs.setActiveIndex;
  if (cResult[0] === searchTabs) {
    let tmp2;
    if (cResult[1] === setActiveIndex) {
      tmp2 = cResult[2];
    }
    dependencyMap = react.useRef(tmp2);
    if (cResult[3] === searchTabs) {
      let tmp3;
      let tmp4;
      if (cResult[4] === setActiveIndex) {
        tmp3 = cResult[5];
        tmp4 = cResult[6];
      }
      const effect = react.useEffect(tmp3, tmp4);
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            return ref.current();
          }
        }
        cResult[7] = S;
      } else {
        class S {
          constructor() {
            return ref.current();
          }
        }
      }
      return S;
    }
    const fn2 = function u() {
      ref.current = () => {
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
}) : ((searchTabs) => {
  searchTabs = searchTabs.searchTabs;
  const setActiveIndex = searchTabs.setActiveIndex;
  const ref = react.useRef(() => {
    setActiveIndex(searchTabs.findIndex((item) => item === constants.MEDIA));
  });
  const items = [searchTabs, setActiveIndex];
  const effect = react.useEffect(() => {
    ref.current = () => {
      setActiveIndex(searchTabs.findIndex((item) => item === constants.MEDIA));
    };
  }, items);
  return react.useCallback(() => ref.current(), []);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  let first;
  let intl;
  let tmp6;
  let tmp7;
  let obj = searchContext(576);
  const cResult = obj.c(13);
  searchContext = searchContext.searchContext;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SearchQueryStore];
    cResult[0] = items;
    first = items;
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
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = searchContext(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === searchContext) {
    let tmp9;
    let tmp13;
    let tmp12;
    let tmp17;
    if (cResult[5] === stateFromStores) {
      tmp9 = cResult[6];
    }
    const tmpResult4 = searchContext(16823);
    const smartSearchStatus = tmpResult4.useSmartSearchStatus(tmp9);
    if (cResult[7] !== searchContext) {
      const fn2 = function f() {
        const obj = search_tracking_TrackingDefault;
        const obj2 = { searchContext };
        const result = obj.trackSearchEmptyResult(obj2);
      };
      const items2 = [searchContext];
      cResult[7] = searchContext;
      cResult[8] = fn2;
      cResult[9] = items2;
      tmp13 = items2;
      tmp12 = fn2;
    } else {
      tmp12 = cResult[8];
      tmp13 = cResult[9];
    }
    const effect = react.useEffect(tmp12, tmp13);
    if (null != tmp9) {
      const tmpResult5 = searchContext(11983);
      if (tmpResult5.isSmartSearchEmptyOrErrored(smartSearchStatus)) {
        let tmp22;
        if (cResult[10] !== tmp9) {
          let obj2 = { smartSearchQuery: tmp9 };
          const tmp25 = closure_12(SmartSearchEmptyScreenDefault, obj2);
          cResult[10] = tmp9;
          cResult[11] = tmp25;
          tmp22 = tmp25;
        } else {
          tmp22 = cResult[11];
        }
        tmp17 = tmp22;
      }
      return tmp17;
    }
    const _Symbol = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { text: intl.string(searchContext(1126).t.V6nAfF) };
      const tmp20 = ErrorScreenDefault;
      intl = tmp(1126).intl;
      const tmp21 = closure_12(tmp20, obj3);
      cResult[12] = tmp21;
      tmp17 = tmp21;
    } else {
      tmp17 = cResult[12];
    }
  }
  const tmpResult6 = searchContext(11983);
  const smartSearchQuery = tmpResult6.getSmartSearchQuery(searchContext, stateFromStores);
  cResult[4] = searchContext;
  cResult[5] = stateFromStores;
  cResult[6] = smartSearchQuery;
  tmp9 = smartSearchQuery;
}) : ((searchContext) => {
  let intl;
  searchContext = searchContext.searchContext;
  let obj = searchContext(504);
  const items = [SearchQueryStore];
  const items1 = [searchContext];
  const stateFromStores = obj.useStateFromStores(items, () => SearchQueryStore.getSearchResultsQuery(searchContext), items1);
  const items2 = [searchContext, stateFromStores];
  const memo = react.useMemo(() => {
    const obj = SmartSearchUtils;
    return obj.getSmartSearchQuery(searchContext, stateFromStores);
  }, items2);
  let obj2 = searchContext(16823);
  const items3 = [searchContext];
  const smartSearchStatus = obj2.useSmartSearchStatus(memo);
  const effect = react.useEffect(() => {
    const obj = search_tracking_TrackingDefault;
    const obj2 = { searchContext };
    const result = obj.trackSearchEmptyResult(obj2);
  }, items3);
  if (null != memo) {
    let tmp8;
    const tmpResult = searchContext(11983);
    if (tmpResult.isSmartSearchEmptyOrErrored(smartSearchStatus)) {
      const obj3 = { smartSearchQuery: memo };
      tmp8 = closure_12(stateFromStores(16824), obj3);
    }
    return tmp8;
  }
  const obj4 = { text: intl.string(searchContext(1126).t.V6nAfF) };
  const tmp7 = stateFromStores(16829);
  intl = tmp(1126).intl;
  tmp8 = closure_12(tmp7, obj4);
});
const __initData = { code: "function SearchTabsLayoutTsx1(t8){const{isDragging,disallowMemberListGesture}=this.__closure;var _disallowMemberListGe;const{contentOffset:contentOffset}=t8;isDragging.set(true);(_disallowMemberListGe=disallowMemberListGesture)===null||_disallowMemberListGe===void 0||_disallowMemberListGe.set(contentOffset.x>0);}" };
const __initData2 = { code: "function SearchTabsLayoutTsx2(){const{isDragging,disallowMemberListGesture}=this.__closure;var _disallowMemberListGe;isDragging.set(false);(_disallowMemberListGe=disallowMemberListGesture)===null||_disallowMemberListGe===void 0||_disallowMemberListGe.set(false);}" };
const __initData3 = { code: "function SearchTabsLayoutTsx3(t10){const{isDragging,disallowMemberListGesture}=this.__closure;const{contentOffset:contentOffset_0}=t10;if(isDragging.get()){var _disallowMemberListGe;(_disallowMemberListGe=disallowMemberListGesture)===null||_disallowMemberListGe===void 0||_disallowMemberListGe.set(contentOffset_0.x>0);}}" };
const __initData4 = { code: "function SearchTabsLayoutTsx4({contentOffset:contentOffset}){const{isDragging,disallowMemberListGesture}=this.__closure;var _disallowMemberListGe;isDragging.set(true);(_disallowMemberListGe=disallowMemberListGesture)===null||_disallowMemberListGe===void 0||_disallowMemberListGe.set(contentOffset.x>0);}" };
const __initData5 = { code: "function SearchTabsLayoutTsx5(){const{isDragging,disallowMemberListGesture}=this.__closure;var _disallowMemberListGe;isDragging.set(false);(_disallowMemberListGe=disallowMemberListGesture)===null||_disallowMemberListGe===void 0||_disallowMemberListGe.set(false);}" };
const __initData6 = { code: "function SearchTabsLayoutTsx6({contentOffset:contentOffset_0}){const{isDragging,disallowMemberListGesture}=this.__closure;if(isDragging.get()){var _disallowMemberListGe;(_disallowMemberListGe=disallowMemberListGesture)===null||_disallowMemberListGe===void 0||_disallowMemberListGe.set(contentOffset_0.x>0);}}" };
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  let disallowGesture;
  let gesture;
  let items;
  let items1;
  let items4;
  let segmentedControlState;
  let selectedTab;
  let visibleTabCounts;
  let visibleTabs;
  const tmp = items4;
  let obj = items4(visibleTabCounts[12]);
  const cResult = obj.c(69);
  searchContext = searchContext.searchContext;
  ({ visibleTabs, visibleTabCounts } = searchContext);
  const width = searchContext.width;
  const tmp4 = closure_15();
  if (cResult[0] === searchContext) {
    if (cResult[1] === visibleTabCounts) {
      if (cResult[2] === visibleTabs) {
        let tmp7;
        if (cResult[3] === width) {
          items4 = cResult[4];
        }
        if (cResult[5] !== searchContext) {
          const fn = function k(arg0) {
            const obj = SearchSessionAnalyticsManagerDefault;
            obj.setSelectedTab(searchContext, arg0);
            const obj2 = SmartSearchAnalyticsManagerDefault;
            obj2.setIsTabActive(arg0 === constants.MESSAGES, SearchSessionAnalyticsManagerDefault);
            closure_16(searchContext);
            const queryString = SearchQueryStore.getQueryString(searchContext);
            const obj3 = SearchUtils;
            const searchTabFetchId = obj3.getSearchTabFetchId(searchContext, React4, queryString);
            const isFetching = SearchMessageStore.getIsFetching(searchTabFetchId);
            const isInitialFetchComplete = SearchMessageStore.getIsInitialFetchComplete(searchTabFetchId);
            const hasItem = metroImportAll.has(arg0);
            let tmp12 = !hasItem;
            if (hasItem) {
              tmp12 = isInitialFetchComplete;
            }
            if (!tmp12) {
              tmp12 = isFetching;
            }
            if (!tmp12) {
              const tmpResult = SearchPlatformUtilsDefault;
              const initialMessagesDebounced = tmpResult.fetchInitialMessagesDebounced(searchContext);
            }
          };
          cResult[5] = searchContext;
          cResult[6] = fn;
          tmp7 = fn;
        } else {
          tmp7 = cResult[6];
        }
        if (cResult[7] === tmp5) {
          if (cResult[8] === tmp7) {
            if (cResult[9] === visibleTabs) {
              let tmp8;
              if (cResult[10] === width) {
                tmp8 = cResult[11];
              }
              let tmpResult = tmp(visibleTabCounts[24]);
              const searchSegmentedControlState = tmpResult.useSearchSegmentedControlState(tmp8);
              ({ segmentedControlState, selectedTab } = searchSegmentedControlState);
              const setActiveIndex = segmentedControlState.setActiveIndex;
              if (cResult[12] === setActiveIndex) {
                let tmp10;
                if (cResult[13] === visibleTabs) {
                  tmp10 = cResult[14];
                }
                let tmp12 = closure_17(tmp10);
                if (cResult[15] === tmp12) {
                  let tmp13;
                  let tmp15;
                  if (cResult[16] === selectedTab) {
                    tmp13 = cResult[17];
                  }
                  let obj6 = width;
                  const context = width.useContext(tmp(visibleTabCounts[25]).SwipeForMemberListContext);
                  if (cResult[18] !== context) {
                    let obj2 = context;
                    if (context == null) {
                      obj2 = {};
                    }
                    cResult[18] = context;
                    cResult[19] = obj2;
                    tmp15 = obj2;
                  } else {
                    tmp15 = cResult[19];
                  }
                  ({ gesture, disallowGesture } = tmp15);
                  const channelId = tmp15.channelId;
                  const screenIndex = tmp15.screenIndex;
                  if (null != gesture) {
                    if (cResult[20] !== gesture) {
                      const Gesture = tmp(visibleTabCounts[26]).Gesture;
                      const NativeResult = Gesture.Native();
                      let result = NativeResult.simultaneousWithExternalGesture(gesture);
                      cResult[20] = gesture;
                      cResult[21] = result;
                    }
                  }
                  const tmpResult2 = tmp(visibleTabCounts[27]);
                  const sharedValue = tmpResult2.useSharedValue(false);
                  if (cResult[22] === disallowGesture) {
                    let tmp22;
                    if (cResult[23] === sharedValue) {
                      tmp22 = cResult[24];
                    }
                    if (cResult[25] === disallowGesture) {
                      let tmp24;
                      if (cResult[26] === sharedValue) {
                        tmp24 = cResult[27];
                      }
                      if (cResult[28] === disallowGesture) {
                        let tmp26;
                        let tmp28;
                        if (cResult[29] === sharedValue) {
                          tmp26 = cResult[30];
                        }
                        if (cResult[31] !== searchContext) {
                          function ue() {
                            const obj = SmartSearchAnalyticsManagerDefault;
                            obj.resetSession(SearchSessionAnalyticsManagerDefault);
                            const obj2 = SearchPlatformActionCreatorsDefault;
                            obj2.deleteSearchQuery(searchContext);
                            const obj3 = SearchActionCreatorsDefault;
                            const result = obj3.clearAllSearchMesssages();
                            const obj4 = SearchActionCreatorsDefault;
                            const result1 = obj4.clearSearchRecentMessages();
                            const obj5 = SearchUtils;
                            const searchContextId = obj5.getSearchContextId(searchContext);
                            const obj6 = SearchTabsFetchManagerDefault;
                            obj6.cleanUp(searchContextId);
                          }
                          cResult[31] = searchContext;
                          cResult[32] = ue;
                          tmp28 = ue;
                        } else {
                          tmp28 = cResult[32];
                        }
                        constants = tmp28;
                        if (cResult[33] === tmp28) {
                          let tmp29;
                          let tmp30;
                          if (cResult[34] === context) {
                            tmp29 = cResult[35];
                            tmp30 = cResult[36];
                          }
                          const effect = obj6.useEffect(tmp29, tmp30);
                          if (cResult[37] === tmp28) {
                            if (cResult[38] === channelId) {
                              if (cResult[39] === screenIndex) {
                                if (cResult[40] === setActiveIndex) {
                                  let tmp32;
                                  let tmp33;
                                  if (cResult[41] === context) {
                                    tmp32 = cResult[42];
                                    tmp33 = cResult[43];
                                  }
                                  const effect1 = obj6.useEffect(tmp32, tmp33);
                                  if (0 === segmentedControlState.items.length) {
                                    let tmp63;
                                    if (cResult[44] !== searchContext) {
                                      let obj3 = { searchContext };
                                      const tmp66 = closure_12(closure_18, obj3);
                                      cResult[44] = searchContext;
                                      cResult[45] = tmp66;
                                      tmp63 = tmp66;
                                    } else {
                                      tmp63 = cResult[45];
                                    }
                                    return tmp63;
                                  } else {
                                    let tmp36;
                                    let tmp35;
                                    if (cResult[46] !== segmentedControlState) {
                                      let obj4 = { state: segmentedControlState };
                                      const tmp39 = closure_12(searchContext(visibleTabCounts[32]), obj4);
                                      let obj5 = { state: segmentedControlState };
                                      const tmp40 = closure_12(searchContext(visibleTabCounts[33]), obj5);
                                      cResult[46] = segmentedControlState;
                                      cResult[47] = tmp39;
                                      cResult[48] = tmp40;
                                      tmp36 = tmp40;
                                      tmp35 = tmp39;
                                    } else {
                                      tmp35 = cResult[47];
                                      tmp36 = cResult[48];
                                    }
                                    if (cResult[49] === tmp4.controls) {
                                      if (cResult[50] === tmp35) {
                                        let tmp41;
                                        if (cResult[51] === tmp36) {
                                          tmp41 = cResult[52];
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
                                        if (cResult[53] === tmp18) {
                                          if (cResult[54] === segmentedControlState) {
                                            if (cResult[55] === null == context) {
                                              if (cResult[56] === tmp46) {
                                                if (cResult[57] === tmp47) {
                                                  let tmp49;
                                                  if (cResult[58] === tmp48) {
                                                    tmp49 = cResult[59];
                                                  }
                                                  if (cResult[60] === tmp13) {
                                                    let tmp52;
                                                    if (cResult[61] === tmp49) {
                                                      tmp52 = cResult[62];
                                                    }
                                                    if (cResult[63] === tmp4.pages) {
                                                      let tmp55;
                                                      if (cResult[64] === tmp52) {
                                                        tmp55 = cResult[65];
                                                      }
                                                      if (cResult[66] === tmp41) {
                                                        let tmp59;
                                                        if (cResult[67] === tmp55) {
                                                          tmp59 = cResult[68];
                                                        }
                                                        return tmp59;
                                                      }
                                                      const obj7 = { children: items };
                                                      items = [tmp41, tmp55];
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
                                        const obj10 = { state: segmentedControlState, bounces: null == context, nativeGesture: tmp18, onBeginDragWorklet: tmp46, onEndDragWorklet: tmp47, onScrollWorklet: tmp48 };
                                        const tmp51 = closure_12(tmp(visibleTabCounts[34]).SegmentedControlPages, obj10);
                                        cResult[53] = tmp18;
                                        cResult[54] = segmentedControlState;
                                        cResult[55] = null == context;
                                        cResult[56] = tmp46;
                                        cResult[57] = tmp47;
                                        cResult[58] = tmp48;
                                        cResult[59] = tmp51;
                                        tmp49 = tmp51;
                                      }
                                    }
                                    const obj11 = { style: tmp4.controls, children: items1 };
                                    items1 = [tmp35, tmp36];
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
                                const tmp2 = channelId.channelId === channelId && tmp === screenIndex;
                                if (tmp2) {
                                  setActiveIndex(0, false, true);
                                  constants();
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
                          return null == context ? (() => constants()) : undefined;
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
                        contentOffset = contentOffset.contentOffset;
                        if (sharedValue.get()) {
                          if (disallowGesture != null) {
                            const result = disallowGesture.set(contentOffset.x > 0);
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
                    contentOffset = contentOffset.contentOffset;
                    const result = sharedValue.set(true);
                    if (disallowGesture != null) {
                      const result1 = disallowGesture.set(contentOffset.x > 0);
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
    let obj2;
    let obj3;
    let tmp2;
    const push = items4.push;
    const obj = { label: obj2.getTabTitle(id), id, page: closure_12(SearchTabsPageDefault, obj3), count: tmp2 };
    tmp2 = undefined;
    obj2 = SearchUtils;
    obj3 = { tab: id, searchContext, width };
    if (visibleTabCounts != null) {
      tmp2 = visibleTabCounts[id];
    }
    push(obj);
  });
  cResult[0] = searchContext;
  cResult[1] = visibleTabCounts;
  cResult[2] = visibleTabs;
  cResult[3] = width;
  cResult[4] = items4;
}) : ((searchContext) => {
  let Provider;
  let SegmentedControlPages;
  let items10;
  let obj10;
  let obj9;
  let segmentedControlState;
  let selectedTab;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp24Result;
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
  let obj = width;
  let items = [visibleTabCounts, visibleTabs, searchContext, width];
  const items1 = [searchContext];
  const memo = width.useMemo(() => {
    const items = [];
    const item = visibleTabs.forEach((id) => {
      let obj2;
      let obj3;
      let tmp2;
      const push = items.push;
      const obj = { label: obj2.getTabTitle(id), id, page: closure_12(SearchTabsPageDefault, obj3), count: tmp2 };
      tmp2 = undefined;
      obj2 = SearchUtils;
      obj3 = { tab: id, searchContext, width };
      if (visibleTabCounts != null) {
        tmp2 = visibleTabCounts[id];
      }
      push(obj);
    });
    return items;
  }, items);
  const callback = width.useCallback((arg0) => {
    const obj = SearchSessionAnalyticsManagerDefault;
    obj.setSelectedTab(searchContext, arg0);
    const obj2 = SmartSearchAnalyticsManagerDefault;
    obj2.setIsTabActive(arg0 === channelId.MESSAGES, SearchSessionAnalyticsManagerDefault);
    closure_16(searchContext);
    const queryString = SearchQueryStore.getQueryString(searchContext);
    const obj3 = SearchUtils;
    const searchTabFetchId = obj3.getSearchTabFetchId(searchContext, React4, queryString);
    const isFetching = SearchMessageStore.getIsFetching(searchTabFetchId);
    const isInitialFetchComplete = SearchMessageStore.getIsInitialFetchComplete(searchTabFetchId);
    const hasItem = metroImportAll.has(arg0);
    let tmp12 = !hasItem;
    if (hasItem) {
      tmp12 = isInitialFetchComplete;
    }
    if (!tmp12) {
      tmp12 = isFetching;
    }
    if (!tmp12) {
      const tmpResult = SearchPlatformUtilsDefault;
      const initialMessagesDebounced = tmpResult.fetchInitialMessagesDebounced(searchContext);
    }
  }, items1);
  let obj2 = searchContext(visibleTabCounts[24]);
  const searchSegmentedControlState = obj2.useSearchSegmentedControlState({ items: memo, visibleTabs, onSelectedTabChange: callback, width });
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
      const NativeResult = Gesture.Native();
      return NativeResult.simultaneousWithExternalGesture(tmp);
    }
  }, items3);
  const tmp4Result = searchContext(visibleTabCounts[27]);
  sharedValue = tmp4Result.useSharedValue(false);
  const fn = function x(contentOffset) {
    contentOffset = contentOffset.contentOffset;
    const result = sharedValue.set(true);
    if (disallowGesture != null) {
      const result1 = disallowGesture.set(contentOffset.x > 0);
    }
  };
  fn.__closure = { isDragging: sharedValue, disallowMemberListGesture: disallowGesture };
  fn.__workletHash = 870973563362;
  fn.__initData = __initData4;
  const items4 = [disallowGesture, sharedValue];
  class G {
    constructor() {
      const result = sharedValue.set(false);
      if (disallowGesture != null) {
        const result1 = disallowGesture.set(false);
      }
    }
  }
  G.__closure = { isDragging: sharedValue, disallowMemberListGesture: disallowGesture };
  G.__workletHash = 16677979123893;
  G.__initData = __initData5;
  const items5 = [disallowGesture, sharedValue];
  const callback1 = obj.useCallback(fn, items4);
  const fn2 = function p(contentOffset) {
    contentOffset = contentOffset.contentOffset;
    if (sharedValue.get()) {
      if (disallowGesture != null) {
        const result = disallowGesture.set(contentOffset.x > 0);
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
    const obj = SmartSearchAnalyticsManagerDefault;
    obj.resetSession(SearchSessionAnalyticsManagerDefault);
    const obj2 = SearchPlatformActionCreatorsDefault;
    obj2.deleteSearchQuery(searchContext);
    const obj3 = SearchActionCreatorsDefault;
    const result = obj3.clearAllSearchMesssages();
    const obj4 = SearchActionCreatorsDefault;
    const result1 = obj4.clearSearchRecentMessages();
    const obj5 = SearchUtils;
    const searchContextId = obj5.getSearchContextId(searchContext);
    const obj6 = SearchTabsFetchManagerDefault;
    obj6.cleanUp(searchContextId);
  }, items7);
  const items8 = [context, callback4];
  const effect = obj.useEffect(() => null == context ? (() => callback4()) : undefined, items8);
  const items9 = [channelId, screenIndex, setActiveIndex, context, callback4];
  const effect1 = obj.useEffect(() => {
    function handleChannelDetailsHidden(channelId) {
      const tmp2 = channelId.channelId === channelId && tmp === screenIndex;
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
    tmp24Result = sharedValue(closure_18, obj4);
  } else {
    let obj5 = { style: tmp.controls, children: items10 };
    let obj6 = { state: segmentedControlState };
    items10 = [sharedValue(visibleTabs(tmp5[32]), obj6), ];
    const obj7 = { state: segmentedControlState };
    items10[1] = sharedValue(visibleTabs(visibleTabCounts[33]), obj7);
    const items11 = [callback4(selectedTab, obj5), ];
    const obj8 = { style: tmp.pages, children: sharedValue(Provider, obj9) };
    obj9 = { value: memo1, children: sharedValue(SegmentedControlPages, obj10) };
    Provider = tmp4(tmp5[20]).SearchTabsPageContext.Provider;
    obj10 = { state: segmentedControlState, bounces: null == context, nativeGesture: memo2, onBeginDragWorklet: tmp18, onEndDragWorklet: tmp19, onScrollWorklet: tmp20 };
    tmp18 = undefined;
    SegmentedControlPages = tmp4(tmp5[34]).SegmentedControlPages;
    const tmp24 = callback4;
    const tmp26 = selectedTab;
    if (null != context) {
      tmp18 = callback1;
    }
    tmp19 = undefined;
    if (null != context) {
      tmp19 = callback2;
    }
    tmp20 = undefined;
    if (null != context) {
      tmp20 = callback3;
    }
    const obj11 = { children: items11 };
    items11[1] = sharedValue(tmp26, obj8);
    tmp24Result = tmp24(closure_14, obj11);
  }
  return tmp24Result;
}));
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function(searchContext) {
  let candidateTabs;
  let first;
  let obj3;
  let tmp6;
  let tmp7;
  let visibleTabCounts;
  let visibleTabs;
  let obj = searchContext(576);
  const cResult = obj.c(15);
  searchContext = searchContext.searchContext;
  const width = searchContext.width;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SearchTabsLayoutStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== searchContext) {
    const fn = function n() {
      const obj = { visibleTabs: SearchTabsLayoutStore.getVisibleTabs(searchContext), visibleTabCounts: SearchTabsLayoutStore.getVisibleTabCounts(searchContext), candidateTabs: SearchTabsLayoutStore.getCandidateTabs(searchContext) };
      return obj;
    };
    const items1 = [searchContext];
    cResult[1] = searchContext;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = searchContext(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp6, tmp7);
  ({ visibleTabs, visibleTabCounts, candidateTabs } = stateFromStoresObject);
  if (cResult[4] !== candidateTabs) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set(candidateTabs);
    cResult[4] = candidateTabs;
    cResult[5] = set;
    obj3 = set;
  } else {
    obj3 = cResult[5];
  }
  const tmpResult5 = searchContext(16926);
  const autoSearchGuildChannelTab = tmpResult5.useAutoSearchGuildChannelTab(searchContext, !obj3.has(constants.GUILD_CHANNELS));
  const tmpResult6 = searchContext(16927);
  const autoSearchMembersTab = tmpResult6.useAutoSearchMembersTab(searchContext, !obj3.has(constants.MEMBERS));
  const tmpResult7 = searchContext(16928);
  const autoSearchPeopleTab = tmpResult7.useAutoSearchPeopleTab(searchContext, !obj3.has(constants.PEOPLE));
  if (cResult[6] === searchContext) {
    if (cResult[7] === visibleTabCounts) {
      let tmp15;
      if (cResult[8] === visibleTabs) {
        tmp15 = cResult[9];
      }
      const tmpResult8 = searchContext(16929);
      const autoTrackSearchTabCountsViewedAnalytics = tmpResult8.useAutoTrackSearchTabCountsViewedAnalytics(tmp15);
      if (cResult[10] === searchContext) {
        if (cResult[11] === visibleTabCounts) {
          if (cResult[12] === visibleTabs) {
            let tmp17;
            if (cResult[13] === width) {
              tmp17 = cResult[14];
            }
            return tmp17;
          }
        }
      }
      const obj2 = { searchContext, visibleTabs, visibleTabCounts, width };
      const tmp20 = closure_12(closure_25, obj2);
      cResult[10] = searchContext;
      cResult[11] = visibleTabCounts;
      cResult[12] = visibleTabs;
      cResult[13] = width;
      cResult[14] = tmp20;
      tmp17 = tmp20;
    }
  }
  const obj4 = { searchContext, visibleTabCounts, visibleTabs };
  cResult[6] = searchContext;
  cResult[7] = visibleTabCounts;
  cResult[8] = visibleTabs;
  cResult[9] = obj4;
  tmp15 = obj4;
}) : ((searchContext) => {
  let candidateTabs;
  let visibleTabCounts;
  let visibleTabs;
  searchContext = searchContext.searchContext;
  candidateTabs = undefined;
  const width = searchContext.width;
  let obj = searchContext(504);
  const items = [SearchTabsLayoutStore];
  const items1 = [searchContext];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { visibleTabs: SearchTabsLayoutStore.getVisibleTabs(searchContext), visibleTabCounts: SearchTabsLayoutStore.getVisibleTabCounts(searchContext), candidateTabs: SearchTabsLayoutStore.getCandidateTabs(searchContext) };
    return obj;
  }, items1);
  ({ visibleTabs, visibleTabCounts, candidateTabs } = stateFromStoresObject);
  const items2 = [candidateTabs];
  const memo = react.useMemo(() => {
    set = new Set(candidateTabs);
    return set;
  }, items2);
  const obj3 = searchContext(16926);
  const autoSearchGuildChannelTab = obj3.useAutoSearchGuildChannelTab(searchContext, !memo.has(constants.GUILD_CHANNELS));
  const obj4 = searchContext(16927);
  const autoSearchMembersTab = obj4.useAutoSearchMembersTab(searchContext, !memo.has(constants.MEMBERS));
  const obj5 = searchContext(16928);
  const autoSearchPeopleTab = obj5.useAutoSearchPeopleTab(searchContext, !memo.has(constants.PEOPLE));
  const obj6 = searchContext(16929);
  const autoTrackSearchTabCountsViewedAnalytics = obj6.useAutoTrackSearchTabCountsViewedAnalytics({ searchContext, visibleTabCounts, visibleTabs });
  return closure_12(closure_25, { searchContext, visibleTabs, visibleTabCounts, width });
});
let result = size.fileFinishedImporting("modules/search/native/components/tabs/SearchTabsLayout.tsx");

export default tmp5;