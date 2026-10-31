// === Module 18689: SearchTabsLayout ===

// Module 18689 (SearchTabsLayout)
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5303 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 13871 */;
import SmartSearchUtils from "SmartSearchUtils" /* 13874 */;
import SearchUtils from "SearchUtils" /* 13878 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 13892 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 13893 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 13895 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 13896 */;
import SearchActionCreatorsDefault from "SearchActionCreators" /* 13905 */;
import SearchTabsFetchManagerDefault from "SearchTabsFetchManager" /* 13906 */;
import SearchTabsPageDefault from "SearchTabsPage" /* 18697 */;
import noop from "module_19" /* 19 */;
import SearchMessageStore from "SearchMessageStore" /* 6863 */;
import SearchQueryStore from "SearchQueryStore" /* 13885 */;
import SearchTabsLayoutStore from "SearchTabsLayoutStore" /* 13897 */;

require = fn;
function NoSearchResultsScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [SearchQueryStore];
  const items1 = [searchContext];
  const stateFromStores = searchContext(504).useStateFromStores(items, () => SearchQueryStore.getSearchResultsQuery(searchContext), items1);
  const items2 = [searchContext, stateFromStores];
  const memo = noop.useMemo(() => SmartSearchUtils.getSmartSearchQuery(searchContext, stateFromStores), items2);
  const obj = searchContext(504);
  const items3 = [searchContext];
  const smartSearchStatus = searchContext(18690).useSmartSearchStatus(memo);
  const effect = noop.useEffect(() => {
    const result = search_tracking_TrackingDefault.trackSearchEmptyResult({ searchContext });
  }, items3);
  if (null != memo) {
    if (tmpResult.isSmartSearchEmptyOrErrored(smartSearchStatus)) {
      const obj3 = { smartSearchQuery: memo };
      let tmp8 = closure_12(stateFromStores(18691), obj3);
    }
    return tmp8;
  }
  const obj4 = { text: null };
  const obj2 = searchContext(18690);
  const intl = tmp(1113).intl;
  obj4.text = intl.string(searchContext(1113).t.V6nAfF);
  tmp8 = closure_12(stateFromStores(18696), obj4);
  const tmp7 = stateFromStores(18696);
}
const View = fn(17).View;
const SearchConstants = fn(9827);
({ MESSAGE_SEARCH_RESULT_TABS_SET: closure_8, SEARCH_MESSAGE_TAB_SENTINEL: closure_9, SearchTabs: c10 } = SearchConstants);
const ComponentActions = fn(1072).ComponentActions;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(5014);
let closure_15 = createStyles.createStyles({ controls: { flex: 0, minHeight: 32 }, pages: { flex: 1 } });
const apply = fn(12);
let closure_16 = apply.debounce((searchContext) => search_tracking_TrackingDefault.trackSearchTabSelected({ searchContext }), 500);
const __initData = { code: "function SearchTabsLayoutTsx1({contentOffset:contentOffset}){const{isDragging,disallowMemberListGesture}=this.__closure;var _disallowMemberListGe;isDragging.set(true);(_disallowMemberListGe=disallowMemberListGesture)===null||_disallowMemberListGe===void 0||_disallowMemberListGe.set(contentOffset.x>0);}" };
const __initData2 = { code: "function SearchTabsLayoutTsx2(){const{isDragging,disallowMemberListGesture}=this.__closure;var _disallowMemberListGe;isDragging.set(false);(_disallowMemberListGe=disallowMemberListGesture)===null||_disallowMemberListGe===void 0||_disallowMemberListGe.set(false);}" };
const __initData3 = { code: "function SearchTabsLayoutTsx3({contentOffset:contentOffset}){const{isDragging,disallowMemberListGesture}=this.__closure;if(isDragging.get()){var _disallowMemberListGe;(_disallowMemberListGe=disallowMemberListGesture)===null||_disallowMemberListGe===void 0||_disallowMemberListGe.set(contentOffset.x>0);}}" };
let closure_21 = noop.memo(function SearchTabsLayout(searchContext) {
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
  let callback5;
  const tmp = closure_15();
  let items = [visibleTabCounts, visibleTabs, searchContext, width];
  const items1 = [searchContext];
  const memo = width.useMemo(() => {
    const items = [];
    const item = visibleTabs.forEach((id) => {
      const obj = { label: SearchUtils.getTabTitle(id), id, page: closure_3_12(SearchTabsPageDefault, { tab: id, searchContext, width }), count: null };
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
    const searchTabFetchId = SearchUtils.getSearchTabFetchId(searchContext, React7, queryString);
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
  const searchSegmentedControlState = searchContext(visibleTabCounts[22]).useSearchSegmentedControlState({ items: memo, visibleTabs, onSelectedTabChange: callback, width });
  ({ segmentedControlState, selectedTab } = searchSegmentedControlState);
  const setActiveIndex = segmentedControlState.setActiveIndex;
  closure_129_0 = visibleTabs;
  closure_129_1 = setActiveIndex;
  closure_129_2 = width.useRef(() => {
    visibleTabs(searchContext.findIndex((item) => item === constants.MEDIA));
  });
  const items2 = [visibleTabs, setActiveIndex];
  const effect = width.useEffect(() => {
    visibleTabCounts.current = () => {
      visibleTabs(searchContext.findIndex((item) => item === constants.MEDIA));
    };
  }, items2);
  const callback1 = width.useCallback(() => visibleTabCounts.current(), []);
  const items3 = [callback1, selectedTab];
  const memo1 = width.useMemo(() => ({ selectedTab, selectMediaTab: callback1 }), items3);
  const context = width.useContext(searchContext(visibleTabCounts[23]).SwipeForMemberListContext);
  let obj3 = context;
  if (context == null) {
    obj3 = {};
  }
  gesture = obj3.gesture;
  disallowGesture = obj3.disallowGesture;
  channelId = obj3.channelId;
  screenIndex = obj3.screenIndex;
  const items4 = [gesture];
  const memo2 = obj.useMemo(() => {
    if (null != gesture) {
      const Gesture = LegacyBaseButton.Gesture;
      return Gesture.Native().simultaneousWithExternalGesture(tmp);
    }
  }, items4);
  let obj2 = searchContext(visibleTabCounts[22]);
  sharedValue = searchContext(visibleTabCounts[25]).useSharedValue(false);
  class G {
    constructor(arg0) {
      result = closure_12.set(true);
      obj = disallowGesture;
      if (disallowGesture != null) {
        num = 0;
        result1 = obj.set(searchContext.contentOffset.x > 0);
      }
      return;
    }
  }
  G.__closure = { isDragging: sharedValue, disallowMemberListGesture: disallowGesture };
  G.__workletHash = 766628353255;
  G.__initData = __initData;
  const items5 = [disallowGesture, sharedValue];
  class D {
    constructor() {
      result = closure_12.set(false);
      obj = disallowGesture;
      if (disallowGesture != null) {
        result1 = obj.set(false);
      }
      return;
    }
  }
  D.__closure = { isDragging: sharedValue, disallowMemberListGesture: disallowGesture };
  D.__workletHash = 5683301645106;
  D.__initData = __initData2;
  const items6 = [disallowGesture, sharedValue];
  const callback2 = obj.useCallback(G, items5);
  class A {
    constructor(arg0) {
      if (closure_12.get()) {
        obj = disallowGesture;
        tmp = null;
        if (disallowGesture != null) {
          num = 0;
          result = obj.set(searchContext.contentOffset.x > 0);
        }
      }
      return;
    }
  }
  A.__closure = { isDragging: sharedValue, disallowMemberListGesture: disallowGesture };
  A.__workletHash = 229712012692;
  A.__initData = __initData3;
  const items7 = [disallowGesture, sharedValue];
  const callback3 = obj.useCallback(D, items6);
  const items8 = [searchContext];
  const callback4 = obj.useCallback(A, items7);
  callback5 = obj.useCallback(() => {
    SmartSearchAnalyticsManagerDefault.resetSession(SearchSessionAnalyticsManagerDefault);
    SearchPlatformActionCreatorsDefault.deleteSearchQuery(searchContext);
    const result = SearchActionCreatorsDefault.clearAllSearchMesssages();
    const result1 = SearchActionCreatorsDefault.clearSearchRecentMessages();
    const searchContextId = SearchUtils.getSearchContextId(searchContext);
    SearchTabsFetchManagerDefault.cleanUp(searchContextId);
  }, items8);
  const items9 = [context, callback5];
  const effect1 = obj.useEffect(() => null == context ? (() => callback5()) : undefined, items9);
  const items10 = [channelId, screenIndex, setActiveIndex, context, callback5];
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
      let ComponentDispatch = searchContext(visibleTabCounts[29]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(screenIndex.CHANNEL_DETAILS_HIDDEN, handleChannelDetailsHidden);
      return () => {
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.unsubscribe(ComponentActions.CHANNEL_DETAILS_HIDDEN, handleChannelDetailsHidden);
      };
    }
  }, items10);
  if (0 === segmentedControlState.items.length) {
    let obj4 = { searchContext };
    let tmp25Result = sharedValue(NoSearchResultsScreen, obj4);
  } else {
    let obj5 = { style: tmp.controls, children: null };
    const obj6 = { state: segmentedControlState };
    const items11 = [sharedValue(visibleTabs(tmp5[30]), obj6), ];
    const obj7 = { state: segmentedControlState };
    items11[1] = sharedValue(visibleTabs(tmp5[31]), obj7);
    obj5.children = items11;
    const items12 = [callback5(selectedTab, obj5), ];
    const obj8 = { style: tmp.pages, children: null };
    const obj9 = { value: memo1, children: null };
    const obj10 = { state: segmentedControlState, bounces: null == context, nativeGesture: memo2, onBeginDragWorklet: null, onEndDragWorklet: null, onScrollWorklet: null };
    let tmp19;
    if (null != context) {
      tmp19 = callback2;
    }
    obj10.onBeginDragWorklet = tmp19;
    let tmp20;
    if (null != context) {
      tmp20 = callback3;
    }
    obj10.onEndDragWorklet = tmp20;
    let tmp21;
    if (null != context) {
      tmp21 = callback4;
    }
    const obj11 = { children: null };
    obj10.onScrollWorklet = tmp21;
    obj9.children = sharedValue(tmp4(tmp5[32]).SegmentedControlPages, obj10);
    obj8.children = sharedValue(tmp4(tmp5[18]).SearchTabsPageContext.Provider, obj9);
    items12[1] = sharedValue(selectedTab, obj8);
    obj11.children = items12;
    tmp25Result = callback5(closure_14, obj11);
  }
  return tmp25Result;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/tabs/SearchTabsLayout.tsx");

export default function ConnectedSearchTabsLayout(width) {
  const searchContext = width.searchContext;
  candidateTabs = undefined;
  const items = [SearchTabsLayoutStore];
  const items1 = [searchContext];
  const stateFromStoresObject = searchContext(504).useStateFromStoresObject(items, () => ({ visibleTabs: SearchTabsLayoutStore.getVisibleTabs(searchContext), visibleTabCounts: SearchTabsLayoutStore.getVisibleTabCounts(searchContext), candidateTabs: SearchTabsLayoutStore.getCandidateTabs(searchContext) }), items1);
  ({ visibleTabs, visibleTabCounts, candidateTabs } = stateFromStoresObject);
  const items2 = [candidateTabs];
  const memo = noop.useMemo(() => new Set(candidateTabs), items2);
  const obj = searchContext(504);
  const autoSearchGuildChannelTab = searchContext(18795).useAutoSearchGuildChannelTab(searchContext, !memo.has(constants.GUILD_CHANNELS));
  const obj3 = searchContext(18795);
  const autoSearchMembersTab = searchContext(18796).useAutoSearchMembersTab(searchContext, !memo.has(constants.MEMBERS));
  const obj4 = searchContext(18796);
  const autoSearchPeopleTab = searchContext(18797).useAutoSearchPeopleTab(searchContext, !memo.has(constants.PEOPLE));
  const obj5 = searchContext(18797);
  const autoTrackSearchTabCountsViewedAnalytics = searchContext(18798).useAutoTrackSearchTabCountsViewedAnalytics({ searchContext, visibleTabCounts, visibleTabs });
  return closure_12(closure_21, { searchContext, visibleTabs, visibleTabCounts, width: width.width });
};