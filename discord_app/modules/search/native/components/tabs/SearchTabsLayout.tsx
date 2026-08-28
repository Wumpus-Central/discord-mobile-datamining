// discord_app/modules/search/native/components/tabs/SearchTabsLayout.tsx
import _modDef11863 from "../../tracking/Tracking.tsx";
import _modDef16153 from "pages/ErrorScreen.tsx";
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../SearchMessageStore.tsx";
import closure_6 from "../../stores/SearchQueryStore.tsx";
import closure_7 from "../../stores/SearchTabsLayoutStore.tsx";
import MessageEmbedTypes from "../../../SearchConstants.tsx";
import { ComponentActions } from "../../../../../Constants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";
import apply from "../../../../../../_runtime/00012_apply.js";

const require = arg1;
function NoSearchResultsScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  const effect = importAllResult.useEffect(() => {
    let obj = closure_1_1(closure_1_2[10]);
    obj = { searchContext };
    const result = obj.trackSearchEmptyResult(obj);
  }, items);
  let obj = { text: null };
  const intl = searchContext(1236).intl;
  obj[0] = intl.string(searchContext(1236).t.V6nAfF);
  return callback(_modDef16153, obj);
}
let c3 = importAllResult;
({ MESSAGE_SEARCH_RESULT_TABS_SET: closure_8, SEARCH_MESSAGE_TAB_SENTINEL: c9, SearchTabs: c10 } = MessageEmbedTypes);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
let closure_15 = createCacheKey.createStyles({ controls: { flex: 0, minHeight: 32 }, pages: { flex: 1 } });
let closure_16 = apply.debounce((searchContext) => {
  let obj = _modDef11863;
  obj = { searchContext };
  return obj.trackSearchTabSelected(obj);
}, 500);
let closure_18 = { code: "function SearchTabsLayoutTsx1({contentOffset:contentOffset}){const{isDragging,disallowMemberListGesture}=this.__closure;var _disallowMemberListGe;isDragging.set(true);(_disallowMemberListGe=disallowMemberListGesture)===null||_disallowMemberListGe===void 0||_disallowMemberListGe.set(contentOffset.x>0);}" };
let closure_19 = { code: "function SearchTabsLayoutTsx2(){const{isDragging,disallowMemberListGesture}=this.__closure;var _disallowMemberListGe;isDragging.set(false);(_disallowMemberListGe=disallowMemberListGesture)===null||_disallowMemberListGe===void 0||_disallowMemberListGe.set(false);}" };
let closure_20 = { code: "function SearchTabsLayoutTsx3({contentOffset:contentOffset}){const{isDragging,disallowMemberListGesture}=this.__closure;if(isDragging.get()){var _disallowMemberListGe;(_disallowMemberListGe=disallowMemberListGesture)===null||_disallowMemberListGe===void 0||_disallowMemberListGe.set(contentOffset.x>0);}}" };
let closure_21 = importAllResult.memo((searchContext) => {
  searchContext = searchContext.searchContext;
  let visibleTabs = searchContext;
  visibleTabs = searchContext.visibleTabs;
  let setActiveIndex = visibleTabs;
  const visibleTabCounts = searchContext.visibleTabCounts;
  dependencyMap = visibleTabCounts;
  const width = searchContext.width;
  selectedTab = undefined;
  setActiveIndex = undefined;
  let callback1;
  let context;
  let gesture;
  let disallowGesture;
  let channelId;
  let screenIndex;
  let sharedValue;
  let callback5;
  let tmp = callback2();
  let obj = width;
  let items = [visibleTabCounts, visibleTabs, searchContext, width];
  const items1 = [searchContext];
  const memo = width.useMemo(() => {
    const items = [];
    const item = setActiveIndex.forEach((tab) => {
      let obj = { label: visibleTabs(11843).getTabTitle(tab), id: tab, page: null, count: null };
      obj = { tab, searchContext: items, width: closure_1_3 };
      obj[2] = sharedValue(setActiveIndex(16154), obj);
      let tmp2;
      if (closure_1_2 != null) {
        tmp2 = closure_1_2[tab];
      }
      obj[3] = tmp2;
      items.push(obj);
    });
    return items;
  }, items);
  const callback = width.useCallback((arg0) => {
    setActiveIndex(ref[15]).setSelectedTab(visibleTabs, arg0);
    closure_1_16(visibleTabs);
    const queryString = callback1.getQueryString(visibleTabs);
    const obj = setActiveIndex(ref[15]);
    const tmp = setActiveIndex;
    const tmp2 = ref;
    const tmp3 = visibleTabs;
    const searchTabFetchId = visibleTabs(ref[13]).getSearchTabFetchId(visibleTabs, disallowGesture, queryString);
    const isFetching = setActiveIndex.getIsFetching(searchTabFetchId);
    const isInitialFetchComplete = setActiveIndex.getIsInitialFetchComplete(searchTabFetchId);
    const hasItem = gesture.has(arg0);
    let tmp11 = !hasItem;
    if (hasItem) {
      tmp11 = isInitialFetchComplete;
    }
    if (!tmp11) {
      tmp11 = isFetching;
    }
    if (!tmp11) {
      const initialMessagesDebounced = tmp(tmp2[16]).fetchInitialMessagesDebounced(tmp3);
      const tmpResult = tmp(tmp2[16]);
    }
  }, items1);
  obj1 = visibleTabs(16229);
  const searchSegmentedControlState = obj1.useSearchSegmentedControlState({ items: memo, visibleTabs, onSelectedTabChange: callback, width });
  ({ segmentedControlState, selectedTab } = searchSegmentedControlState);
  setActiveIndex = segmentedControlState.setActiveIndex;
  dependencyMap = width.useRef(() => {
    setActiveIndex(visibleTabs.findIndex((arg0) => arg0 === constants.MEDIA));
  });
  const items2 = [visibleTabs, setActiveIndex];
  const effect = width.useEffect(() => {
    closure_2.current = () => {
      callback(closure_0.findIndex((arg0) => arg0 === constants.MEDIA));
    };
  }, items2);
  callback1 = width.useCallback(() => ref.current(), []);
  const items3 = [callback1, selectedTab];
  const memo1 = width.useMemo(() => ({ selectedTab, selectMediaTab: callback1 }), items3);
  context = width.useContext(visibleTabs(16138).SwipeForMemberListContext);
  obj = context;
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
      const Gesture = visibleTabs(ref[19]).Gesture;
      return Gesture.Native().simultaneousWithExternalGesture(tmp);
    }
  }, items4);
  sharedValue = visibleTabs(4186).useSharedValue(false);
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
  D.__initData = closure_18;
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
  G.__initData = closure_19;
  const items6 = [disallowGesture, sharedValue];
  callback2 = obj.useCallback(D, items5);
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
  A.__initData = closure_20;
  const items7 = [disallowGesture, sharedValue];
  const callback3 = obj.useCallback(G, items6);
  const items8 = [searchContext];
  const callback4 = obj.useCallback(A, items7);
  callback5 = obj.useCallback(() => {
    setActiveIndex(ref[21]).deleteSearchQuery(visibleTabs);
    const obj = setActiveIndex(ref[21]);
    const result = setActiveIndex(ref[22]).clearAllSearchMesssages();
    const obj2 = setActiveIndex(ref[22]);
    const result1 = setActiveIndex(ref[22]).clearSearchRecentMessages();
    const obj3 = setActiveIndex(ref[22]);
    const searchContextId = visibleTabs(ref[13]).getSearchContextId(visibleTabs);
    const obj4 = visibleTabs(ref[13]);
    setActiveIndex(ref[23]).cleanUp(searchContextId);
  }, items8);
  const items9 = [context, callback5];
  const effect1 = obj.useEffect(() => null == context ? (() => callback()) : undefined, items9);
  const items10 = [channelId, screenIndex, setActiveIndex, context, callback5];
  const effect2 = obj.useEffect(() => {
    function handleChannelDetailsHidden(channelId) {
      let tmp2 = channelId.channelId === closure_10;
      if (tmp2) {
        tmp2 = tmp === closure_11;
      }
      if (tmp2) {
        callback(0, false, true);
        callback2();
      }
    }
    if (null != context) {
      let ComponentDispatch = visibleTabs(ref[24]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(screenIndex.CHANNEL_DETAILS_HIDDEN, handleChannelDetailsHidden);
      return () => {
        const ComponentDispatch = visibleTabs(table[24]).ComponentDispatch;
        ComponentDispatch.unsubscribe(screenIndex.CHANNEL_DETAILS_HIDDEN, handleChannelDetailsHidden);
      };
    }
  }, items10);
  if (0 === segmentedControlState.items.length) {
    obj = { searchContext: null };
    obj[0] = searchContext;
    let tmp25Result = sharedValue(NoSearchResultsScreen, obj);
  } else {
    obj1 = { style: null, children: null };
    obj1[0] = tmp.controls;
    let obj2 = { state: null };
    obj2[0] = segmentedControlState;
    const items11 = [sharedValue(setActiveIndex(16230), obj2), ];
    let obj3 = { state: null };
    obj3[0] = segmentedControlState;
    items11[1] = sharedValue(setActiveIndex(16231), obj3);
    obj1[1] = items11;
    const items12 = [callback5(selectedTab, obj1), ];
    let obj4 = { style: null, children: null };
    obj4[0] = tmp.pages;
    const obj5 = { value: null, children: null };
    obj5[0] = memo1;
    const obj6 = { state: null, bounces: null, nativeGesture: null, onBeginDragWorklet: null, onEndDragWorklet: null, onScrollWorklet: null };
    obj6[0] = segmentedControlState;
    obj6[1] = null == context;
    obj6[2] = memo2;
    let tmp19;
    if (null != context) {
      tmp19 = callback2;
    }
    obj6[3] = tmp19;
    let tmp20;
    if (null != context) {
      tmp20 = callback3;
    }
    obj6[4] = tmp20;
    let tmp21;
    if (null != context) {
      tmp21 = callback4;
    }
    const obj7 = { children: null };
    obj6[5] = tmp21;
    obj5[1] = sharedValue(tmp4(9207).SegmentedControlPages, obj6);
    obj4[1] = sharedValue(tmp4(16154).SearchTabsPageContext.Provider, obj5);
    items12[1] = sharedValue(selectedTab, obj4);
    obj7[0] = items12;
    tmp25Result = callback5(closure_14, obj7);
    const tmp25 = callback5;
    const tmp26 = closure_14;
    const tmp27 = selectedTab;
  }
  return tmp25Result;
});
let result = require("set").fileFinishedImporting("modules/search/native/components/tabs/SearchTabsLayout.tsx");

export default function ConnectedSearchTabsLayout(width) {
  const searchContext = width.searchContext;
  candidateTabs = undefined;
  const items = [closure_7];
  const items1 = [searchContext];
  const stateFromStoresObject = searchContext(589).useStateFromStoresObject(items, () => ({ visibleTabs: closure_1_7.getVisibleTabs(searchContext), visibleTabCounts: closure_1_7.getVisibleTabCounts(searchContext), candidateTabs: closure_1_7.getCandidateTabs(searchContext) }), items1);
  ({ visibleTabs, visibleTabCounts, candidateTabs } = stateFromStoresObject);
  const items2 = [candidateTabs];
  const memo = importAllResult.useMemo(() => new Set(candidateTabs), items2);
  const obj = searchContext(589);
  const autoSearchGuildChannelTab = searchContext(16232).useAutoSearchGuildChannelTab(searchContext, !memo.has(constants.GUILD_CHANNELS));
  const obj3 = searchContext(16232);
  const autoSearchMembersTab = searchContext(16233).useAutoSearchMembersTab(searchContext, !memo.has(constants.MEMBERS));
  const obj4 = searchContext(16233);
  const autoSearchPeopleTab = searchContext(16234).useAutoSearchPeopleTab(searchContext, !memo.has(constants.PEOPLE));
  const obj5 = searchContext(16234);
  const autoTrackSearchTabCountsViewedAnalytics = searchContext(16235).useAutoTrackSearchTabCountsViewedAnalytics({ searchContext, visibleTabCounts, visibleTabs });
  return callback(closure_21, { searchContext, visibleTabs, visibleTabCounts, width: width.width });
};