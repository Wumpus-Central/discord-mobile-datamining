// === Module 16637: SearchTabsLayout ===

// Module 16637 (SearchTabsLayout)
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6655 */;
import SearchUtils from "SearchUtils" /* 12340 */;
import SearchActionCreatorsDefault from "SearchActionCreators" /* 12347 */;
import SearchTabsFetchManagerDefault from "SearchTabsFetchManager" /* 12348 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12358 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 12359 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 12361 */;
import pages_ErrorScreenDefault from "pages/ErrorScreen" /* 16638 */;
import SearchTabsPageDefault from "SearchTabsPage" /* 16639 */;
import noop from "module_19" /* 19 */;
import SearchMessageStore from "SearchMessageStore" /* 7281 */;
import SearchQueryStore from "SearchQueryStore" /* 12339 */;
import SearchTabsLayoutStore from "SearchTabsLayoutStore" /* 12362 */;

const SearchPlatformUtilsDefault = tmp(12338);
require = fn;
function NoSearchResultsScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  const effect = noop.useEffect(() => {
    const obj = { searchContext };
    const result = obj.trackSearchEmptyResult(obj);
  }, items);
  let obj = { text: null };
  const intl = searchContext(1114).intl;
  obj.text = intl.string(searchContext(1114).t.V6nAfF);
  return closure_12(pages_ErrorScreenDefault, obj);
}
const View = fn(17).View;
const SearchConstants = fn(7878);
({ MESSAGE_SEARCH_RESULT_TABS_SET: closure_8, SEARCH_MESSAGE_TAB_SENTINEL: closure_9, SearchTabs: c10 } = SearchConstants);
const ComponentActions = fn(1074).ComponentActions;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(4560);
let closure_15 = createStyles.createStyles({ controls: { flex: 0, minHeight: 32 }, pages: { flex: 1 } });
const apply = fn(12);
let closure_16 = apply.debounce((searchContext) => {
  const obj = { searchContext };
  return obj.trackSearchTabSelected(obj);
}, 500);
const __initData = { code: "function SearchTabsLayoutTsx1({contentOffset:contentOffset}){const{isDragging,disallowMemberListGesture}=this.__closure;var _disallowMemberListGe;isDragging.set(true);(_disallowMemberListGe=disallowMemberListGesture)===null||_disallowMemberListGe===void 0||_disallowMemberListGe.set(contentOffset.x>0);}" };
const __initData2 = { code: "function SearchTabsLayoutTsx2(){const{isDragging,disallowMemberListGesture}=this.__closure;var _disallowMemberListGe;isDragging.set(false);(_disallowMemberListGe=disallowMemberListGesture)===null||_disallowMemberListGe===void 0||_disallowMemberListGe.set(false);}" };
const __initData3 = { code: "function SearchTabsLayoutTsx3({contentOffset:contentOffset}){const{isDragging,disallowMemberListGesture}=this.__closure;if(isDragging.get()){var _disallowMemberListGe;(_disallowMemberListGe=disallowMemberListGesture)===null||_disallowMemberListGe===void 0||_disallowMemberListGe.set(contentOffset.x>0);}}" };
let closure_21 = noop.memo((searchContext) => {
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
  let tmp = closure_15();
  let items = [visibleTabCounts, visibleTabs, searchContext, width];
  const items1 = [searchContext];
  const memo = width.useMemo(() => {
    const items = [];
    const item = visibleTabs.forEach((id) => {
      let obj = { label: SearchUtils.getTabTitle(id), id, page: null, count: null };
      obj = { tab: id, searchContext, width };
      obj.page = closure_3_12(SearchTabsPageDefault, obj);
      let tmp2;
      if (visibleTabCounts != null) {
        tmp2 = visibleTabCounts[id];
      }
      obj.count = tmp2;
      items.push(obj);
    });
    return items;
  }, items);
  const callback = width.useCallback((arg0) => {
    SearchSessionAnalyticsManagerDefault.setSelectedTab(searchContext, arg0);
    closure_16(searchContext);
    const queryString = SearchQueryStore.getQueryString(searchContext);
    const tmp3 = searchContext;
    const searchTabFetchId = SearchUtils.getSearchTabFetchId(searchContext, React7, queryString);
    const isFetching = SearchMessageStore.getIsFetching(searchTabFetchId);
    const isInitialFetchComplete = SearchMessageStore.getIsInitialFetchComplete(searchTabFetchId);
    const hasItem = set.has(arg0);
    let tmp11 = !hasItem;
    if (hasItem) {
      tmp11 = isInitialFetchComplete;
    }
    if (!tmp11) {
      tmp11 = isFetching;
    }
    if (!tmp11) {
      const initialMessagesDebounced = SearchPlatformUtilsDefault.fetchInitialMessagesDebounced(tmp3);
      const tmpResult = SearchPlatformUtilsDefault;
    }
  }, items1);
  let obj1 = searchContext(visibleTabCounts[17]);
  const searchSegmentedControlState = obj1.useSearchSegmentedControlState({ items: memo, visibleTabs, onSelectedTabChange: callback, width });
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
  const context = width.useContext(searchContext(visibleTabCounts[18]).SwipeForMemberListContext);
  let obj = context;
  if (context == null) {
    obj = {};
  }
  gesture = obj.gesture;
  disallowGesture = obj.disallowGesture;
  channelId = obj.channelId;
  screenIndex = obj.screenIndex;
  const items4 = [gesture];
  const memo2 = obj.useMemo(() => {
    if (null != gesture) {
      const Gesture = LegacyBaseButton.Gesture;
      return Gesture.Native().simultaneousWithExternalGesture(tmp);
    }
  }, items4);
  sharedValue = searchContext(visibleTabCounts[20]).useSharedValue(false);
  class D {
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
  D.__closure = { isDragging: sharedValue, disallowMemberListGesture: disallowGesture };
  D.__workletHash = 766628353255;
  D.__initData = __initData;
  const items5 = [disallowGesture, sharedValue];
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
  G.__workletHash = 5683301645106;
  G.__initData = __initData2;
  const items6 = [disallowGesture, sharedValue];
  const callback2 = obj.useCallback(D, items5);
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
  const callback3 = obj.useCallback(G, items6);
  const items8 = [searchContext];
  const callback4 = obj.useCallback(A, items7);
  callback5 = obj.useCallback(() => {
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
      let ComponentDispatch = searchContext(visibleTabCounts[24]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(screenIndex.CHANNEL_DETAILS_HIDDEN, handleChannelDetailsHidden);
      return () => {
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.unsubscribe(ComponentActions.CHANNEL_DETAILS_HIDDEN, handleChannelDetailsHidden);
      };
    }
  }, items10);
  if (0 === segmentedControlState.items.length) {
    obj = { searchContext };
    let tmp25Result = sharedValue(NoSearchResultsScreen, obj);
  } else {
    obj1 = { style: tmp.controls, children: null };
    let obj2 = { state: segmentedControlState };
    const items11 = [sharedValue(visibleTabs(tmp5[25]), obj2), ];
    let obj3 = { state: segmentedControlState };
    items11[1] = sharedValue(visibleTabs(tmp5[26]), obj3);
    obj1.children = items11;
    const items12 = [callback5(selectedTab, obj1), ];
    let obj4 = { style: tmp.pages, children: null };
    const obj5 = { value: memo1, children: null };
    const obj6 = { state: segmentedControlState, bounces: null == context, nativeGesture: memo2, onBeginDragWorklet: null, onEndDragWorklet: null, onScrollWorklet: null };
    let tmp19;
    if (null != context) {
      tmp19 = callback2;
    }
    obj6.onBeginDragWorklet = tmp19;
    let tmp20;
    if (null != context) {
      tmp20 = callback3;
    }
    obj6.onEndDragWorklet = tmp20;
    let tmp21;
    if (null != context) {
      tmp21 = callback4;
    }
    const obj7 = { children: null };
    obj6.onScrollWorklet = tmp21;
    obj5.children = sharedValue(tmp4(tmp5[27]).SegmentedControlPages, obj6);
    obj4.children = sharedValue(tmp4(tmp5[14]).SearchTabsPageContext.Provider, obj5);
    items12[1] = sharedValue(selectedTab, obj4);
    obj7.children = items12;
    tmp25Result = callback5(closure_14, obj7);
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
  const autoSearchGuildChannelTab = searchContext(16720).useAutoSearchGuildChannelTab(searchContext, !memo.has(constants.GUILD_CHANNELS));
  const obj3 = searchContext(16720);
  const autoSearchMembersTab = searchContext(16721).useAutoSearchMembersTab(searchContext, !memo.has(constants.MEMBERS));
  const obj4 = searchContext(16721);
  const autoSearchPeopleTab = searchContext(16722).useAutoSearchPeopleTab(searchContext, !memo.has(constants.PEOPLE));
  const obj5 = searchContext(16722);
  const autoTrackSearchTabCountsViewedAnalytics = searchContext(16723).useAutoTrackSearchTabCountsViewedAnalytics({ searchContext, visibleTabCounts, visibleTabs });
  return closure_12(closure_21, { searchContext, visibleTabs, visibleTabCounts, width: width.width });
};