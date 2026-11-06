// === Module 18991: SearchTabsLayout ===

// Module 18991 (SearchTabsLayout)
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5450 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 14094 */;
import SmartSearchUtils from "SmartSearchUtils" /* 14097 */;
import SearchUtils from "SearchUtils" /* 14101 */;
import TrackingDefault from "Tracking" /* 14115 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 14116 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 14118 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 14119 */;
import SearchActionCreatorsDefault from "SearchActionCreators" /* 14128 */;
import SearchTabsFetchManagerDefault from "SearchTabsFetchManager" /* 14129 */;
import SearchTabsPageDefault from "SearchTabsPage" /* 18999 */;
import noop from "module_19" /* 19 */;
import SearchMessageStore from "SearchMessageStore" /* 6943 */;
import SearchQueryStore from "SearchQueryStore" /* 14108 */;
import SearchTabsLayoutStore from "SearchTabsLayoutStore" /* 14120 */;

require = fn;
function NoSearchResultsScreen(searchContext) {
  searchContext = searchContext.searchContext;
  items = [SearchQueryStore];
  const items1 = [searchContext];
  const stateFromStores = searchContext(504).useStateFromStores(items, () => SearchQueryStore.getSearchResultsQuery(searchContext), items1);
  const items2 = [searchContext, stateFromStores];
  const memo = noop.useMemo(() => SmartSearchUtils.getSmartSearchQuery(searchContext, stateFromStores), items2);
  const obj = searchContext(504);
  const items3 = [searchContext];
  const smartSearchStatus = searchContext(18992).useSmartSearchStatus(memo);
  const effect = noop.useEffect(() => {
    const result = TrackingDefault.trackSearchEmptyResult({ searchContext });
  }, items3);
  if (null != memo) {
    if (tmpResult.isSmartSearchEmptyOrErrored(smartSearchStatus)) {
      const obj3 = { smartSearchQuery: memo };
      let tmp8 = closure_12(stateFromStores(18993), obj3);
    }
    return tmp8;
  }
  const obj4 = { text: null };
  const obj2 = searchContext(18992);
  const intl = tmp(1113).intl;
  obj4.text = intl.string(searchContext(1113).t.V6nAfF);
  tmp8 = closure_12(stateFromStores(18998), obj4);
  const tmp7 = stateFromStores(18998);
}
const View = fn(17).View;
const SearchConstants = fn(9933);
({ MESSAGE_SEARCH_RESULT_TABS_SET: closure_8, SEARCH_MESSAGE_TAB_SENTINEL: closure_9, SearchTabs: closure_10 } = SearchConstants);
const ComponentActions = fn(1072).ComponentActions;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(5170);
let closure_15 = createStyles.createStyles({ controls: { flex: 0, minHeight: 32 }, pages: { flex: 1 } });
const apply = fn(12);
let closure_16 = apply.debounce((searchContext) => TrackingDefault.trackSearchTabSelected({ searchContext }), 500);
let closure_18 = { code: "(function SearchTabsLayoutTsx1({contentOffset:contentOffset}){let[isDragging,disallowMemberListGesture]=this.__closure;var _disallowMemberListGe;isDragging.set(true);(_disallowMemberListGe=disallowMemberListGesture)===null||_disallowMemberListGe===void 0||_disallowMemberListGe.set(contentOffset.x>0);})" };
let closure_19 = { code: "(function SearchTabsLayoutTsx2(){let[isDragging,disallowMemberListGesture]=this.__closure;var _disallowMemberListGe;isDragging.set(false);(_disallowMemberListGe=disallowMemberListGesture)===null||_disallowMemberListGe===void 0||_disallowMemberListGe.set(false);})" };
let closure_20 = { code: "(function SearchTabsLayoutTsx3({contentOffset:contentOffset}){let[isDragging,disallowMemberListGesture]=this.__closure;if(isDragging.get()){var _disallowMemberListGe;(_disallowMemberListGe=disallowMemberListGesture)===null||_disallowMemberListGe===void 0||_disallowMemberListGe.set(contentOffset.x>0);}})" };
let closure_21 = noop.memo(function SearchTabsLayout(searchContext) {
  searchContext = searchContext.searchContext;
  _require = searchContext;
  const visibleTabs = searchContext.visibleTabs;
  importDefault = visibleTabs;
  const visibleTabCounts = searchContext.visibleTabCounts;
  const width = searchContext.width;
  selectedTab = undefined;
  gesture = undefined;
  channelId = undefined;
  let screenIndex;
  let callback5;
  const tmp = closure_15();
  items = [visibleTabCounts, visibleTabs, searchContext, width];
  const items1 = [searchContext];
  const memo = width.useMemo(() => {
    items = [];
    const item = _undefined2.forEach((id) => {
      const obj = { label: SearchUtils.getTabTitle(id), id, page: application_id(SearchTabsPageDefault, { tab: id, searchContext, width }), count: null };
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
    SearchSessionAnalyticsManagerDefault.setSelectedTab(c0, arg0);
    SmartSearchAnalyticsManagerDefault.setIsTabActive(arg0 === constants.MESSAGES, SearchSessionAnalyticsManagerDefault);
    closure_16(c0);
    const queryString = SearchQueryStore.getQueryString(c0);
    const searchTabFetchId = SearchUtils.getSearchTabFetchId(c0, React6, queryString);
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
      const initialMessagesDebounced = SearchPlatformUtilsDefault.fetchInitialMessagesDebounced(c0);
      const tmpResult = SearchPlatformUtilsDefault;
    }
  }, items1);
  const searchSegmentedControlState = require("useSearchSegmentedControlState").useSearchSegmentedControlState({ items: memo, visibleTabs, onSelectedTabChange: callback, width });
  ({ segmentedControlState, selectedTab } = searchSegmentedControlState);
  const setActiveIndex = segmentedControlState.setActiveIndex;
  closure_129_0 = visibleTabs;
  closure_129_1 = setActiveIndex;
  closure_129_2 = width.useRef(() => {
    _undefined2(_undefined.findIndex((item) => item === constants.MEDIA));
  });
  const items2 = [visibleTabs, setActiveIndex];
  const effect = width.useEffect(() => {
    visibleTabCounts.current = () => {
      _undefined2(_undefined.findIndex((item) => item === constants.MEDIA));
    };
  }, items2);
  const callback1 = width.useCallback(() => visibleTabCounts.current(), []);
  const items3 = [callback1, selectedTab];
  const memo1 = width.useMemo(() => ({ selectedTab, selectMediaTab: callback1 }), items3);
  const context = width.useContext(require("SwipeForMemberListContext").SwipeForMemberListContext);
  let obj3 = context;
  if (context == null) {
    obj3 = {};
  }
  gesture = obj3.gesture;
  ({ disallowGesture, channelId } = obj3);
  screenIndex = obj3.screenIndex;
  const items4 = [gesture];
  const memo2 = obj.useMemo(() => {
    if (null != gesture) {
      const Gesture = LegacyBaseButton.Gesture;
      return Gesture.Native().simultaneousWithExternalGesture(tmp);
    }
  }, items4);
  let obj2 = require("useSearchSegmentedControlState");
  const sharedValue = require("module_1652").useSharedValue(false);
  const items5 = [closure_18, sharedValue, disallowGesture];
  _require = undefined;
  importDefault = undefined;
  [tmp13, tmp14, tmp15] = items5;
  class SearchTabsLayoutTsx1 {
    constructor(arg0) {
      result = closure_0.set(true);
      obj = closure_1;
      if (closure_1 != null) {
        num = 0;
        result1 = obj.set(searchContext.contentOffset.x > 0);
      }
      return;
    }
  }
  const items6 = [tmp14, tmp15];
  SearchTabsLayoutTsx1.__closure = items6;
  SearchTabsLayoutTsx1.__workletHash = 10796280126110;
  SearchTabsLayoutTsx1.__initData = tmp13;
  const items7 = [disallowGesture, sharedValue];
  const items8 = [closure_19, sharedValue, disallowGesture];
  _require = undefined;
  importDefault = undefined;
  [tmp17, tmp18, tmp19] = items8;
  class SearchTabsLayoutTsx2 {
    constructor() {
      result = closure_0.set(false);
      obj = closure_1;
      if (closure_1 != null) {
        result1 = obj.set(false);
      }
      return;
    }
  }
  const items9 = [tmp18, tmp19];
  SearchTabsLayoutTsx2.__closure = items9;
  SearchTabsLayoutTsx2.__workletHash = 15287790770091;
  SearchTabsLayoutTsx2.__initData = tmp17;
  const items10 = [disallowGesture, sharedValue];
  const callback2 = obj.useCallback(SearchTabsLayoutTsx1, items7);
  const items11 = [closure_20, sharedValue, disallowGesture];
  _require = undefined;
  importDefault = undefined;
  [tmp21, tmp22, tmp23] = items11;
  class SearchTabsLayoutTsx3 {
    constructor(arg0) {
      if (closure_0.get()) {
        obj = closure_1;
        tmp = null;
        if (closure_1 != null) {
          num = 0;
          result = obj.set(searchContext.contentOffset.x > 0);
        }
      }
      return;
    }
  }
  const items12 = [tmp22, tmp23];
  SearchTabsLayoutTsx3.__closure = items12;
  SearchTabsLayoutTsx3.__workletHash = 8136690643693;
  SearchTabsLayoutTsx3.__initData = tmp21;
  const items13 = [disallowGesture, sharedValue];
  const callback3 = obj.useCallback(SearchTabsLayoutTsx2, items10);
  const items14 = [searchContext];
  const callback4 = obj.useCallback(SearchTabsLayoutTsx3, items13);
  callback5 = obj.useCallback(() => {
    SmartSearchAnalyticsManagerDefault.resetSession(SearchSessionAnalyticsManagerDefault);
    SearchPlatformActionCreatorsDefault.deleteSearchQuery(c0);
    const result = SearchActionCreatorsDefault.clearAllSearchMesssages();
    const result1 = SearchActionCreatorsDefault.clearSearchRecentMessages();
    const searchContextId = SearchUtils.getSearchContextId(c0);
    SearchTabsFetchManagerDefault.cleanUp(searchContextId);
  }, items14);
  const items15 = [context, callback5];
  const effect1 = obj.useEffect(() => null == context ? (() => callback5()) : undefined, items15);
  const items16 = [channelId, screenIndex, setActiveIndex, context, callback5];
  const effect2 = obj.useEffect(() => {
    function handleChannelDetailsHidden(channelId) {
      let tmp2 = channelId.channelId === channelId;
      if (tmp2) {
        tmp2 = tmp === screenIndex;
      }
      if (tmp2) {
        setActiveIndex(0, false, true);
        callback5();
      }
    }
    if (null != context) {
      let ComponentDispatch = _undefined(visibleTabCounts[29]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(callback5.CHANNEL_DETAILS_HIDDEN, handleChannelDetailsHidden);
      return () => {
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.unsubscribe(ComponentActions.CHANNEL_DETAILS_HIDDEN, handleChannelDetailsHidden);
      };
    }
  }, items16);
  if (0 === segmentedControlState.items.length) {
    let obj4 = { searchContext };
    let tmp34Result = closure_12(NoSearchResultsScreen, obj4);
  } else {
    let obj5 = { style: tmp.controls, children: null };
    const obj6 = { state: segmentedControlState };
    const items17 = [closure_12(require("SearchTabsTransitionGroup"), obj6), ];
    const obj7 = { state: segmentedControlState };
    items17[1] = closure_12(require("SearchTabsGradient"), obj7);
    obj5.children = items17;
    const items18 = [closure_13(selectedTab, obj5), ];
    const obj8 = { style: tmp.pages, children: null };
    const obj9 = { value: memo1, children: null };
    const obj10 = { state: segmentedControlState, bounces: null == context, nativeGesture: memo2, onBeginDragWorklet: null, onEndDragWorklet: null, onScrollWorklet: null };
    let tmp28;
    if (null != context) {
      tmp28 = callback2;
    }
    obj10.onBeginDragWorklet = tmp28;
    let tmp29;
    if (null != context) {
      tmp29 = callback3;
    }
    obj10.onEndDragWorklet = tmp29;
    let tmp30;
    if (null != context) {
      tmp30 = callback4;
    }
    const obj11 = { children: null };
    obj10.onScrollWorklet = tmp30;
    obj9.children = closure_12(tmp4(tmp5[32]).SegmentedControlPages, obj10);
    obj8.children = closure_12(tmp4(tmp5[18]).SearchTabsPageContext.Provider, obj9);
    items18[1] = closure_12(selectedTab, obj8);
    obj11.children = items18;
    tmp34Result = closure_13(closure_14, obj11);
  }
  return tmp34Result;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/tabs/SearchTabsLayout.tsx");

export default function ConnectedSearchTabsLayout(width) {
  const searchContext = width.searchContext;
  candidateTabs = undefined;
  items = [SearchTabsLayoutStore];
  const items1 = [searchContext];
  const stateFromStoresObject = searchContext(504).useStateFromStoresObject(items, () => ({ visibleTabs: SearchTabsLayoutStore.getVisibleTabs(searchContext), visibleTabCounts: SearchTabsLayoutStore.getVisibleTabCounts(searchContext), candidateTabs: SearchTabsLayoutStore.getCandidateTabs(searchContext) }), items1);
  ({ visibleTabs, visibleTabCounts, candidateTabs } = stateFromStoresObject);
  const items2 = [candidateTabs];
  const memo = noop.useMemo(() => new Set(candidateTabs), items2);
  const obj = searchContext(504);
  const autoSearchGuildChannelTab = searchContext(19097).useAutoSearchGuildChannelTab(searchContext, !memo.has(constants.GUILD_CHANNELS));
  const obj3 = searchContext(19097);
  const autoSearchMembersTab = searchContext(19098).useAutoSearchMembersTab(searchContext, !memo.has(constants.MEMBERS));
  const obj4 = searchContext(19098);
  const autoSearchPeopleTab = searchContext(19099).useAutoSearchPeopleTab(searchContext, !memo.has(constants.PEOPLE));
  const obj5 = searchContext(19099);
  const autoTrackSearchTabCountsViewedAnalytics = searchContext(19100).useAutoTrackSearchTabCountsViewedAnalytics({ searchContext, visibleTabCounts, visibleTabs });
  return closure_12(closure_21, { searchContext, visibleTabs, visibleTabCounts, width: width.width });
};