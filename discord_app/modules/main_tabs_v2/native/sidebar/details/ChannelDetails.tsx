// === Module 16731: ChannelDetails ===

// Module 16731 (ChannelDetails)
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1150 */;
import timing from "timing" /* 4637 */;
import timingPresets from "timingPresets" /* 4640 */;
import spring from "spring" /* 5055 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 12467 */;
import SearchActionCreatorsDefault from "SearchActionCreators" /* 12476 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 12490 */;
import noop from "module_19" /* 19 */;
import SearchQueryStore from "SearchQueryStore" /* 12468 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const ChannelDetailsStore = fn(7980);
({ deleteChannelDetailsSearchState: closure_7, useChannelDetailsSearchActiveSource: closure_8, useIsChannelDetailsSearchActive: closure_9 } = ChannelDetailsStore);
const ChannelDetailsConstants = fn(11047);
({ SPRING_CHANNEL_HEADER: c10, CHANNEL_DETAILS_TOP_MARGIN } = ChannelDetailsConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
fn(4636);
let obj = { detailsContainer: null, information: null, linkedLobby: null, search: null, searchLocked: null, autocompleteSuggestions: null, newHeader: null };
obj = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.backgroundColor = nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND;
obj.flex = 1;
obj.detailsContainer = obj;
const createStyles = { marginHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, paddingTop: PX_8 };
obj.information = createStyles;
obj.linkedLobby = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_4 };
obj.search = { flex: 1, flexGrow: 1 };
let obj2 = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_4 };
obj.searchLocked = { marginTop: CHANNEL_DETAILS_TOP_MARGIN, marginBottom: nativeDefault.space.PX_16 };
obj.autocompleteSuggestions = { zIndex: 10 };
let obj3 = { marginTop: CHANNEL_DETAILS_TOP_MARGIN, marginBottom: nativeDefault.space.PX_16 };
obj.newHeader = { paddingBottom: nativeDefault.space.PX_12, zIndex: 10 };
let closure_14 = createStyles.createStyles(obj);
const __initData = { code: "function ChannelDetailsTsx1(){const{headerHeight,isSearchActive,withTiming,timingFast,withSpring,SPRING_CHANNEL_HEADER}=this.__closure;const height=headerHeight.get();return{position:'relative',pointerEvents:isSearchActive?'none':'auto',opacity:withTiming(isSearchActive?0:1,timingFast,'animate-always'),height:height!=null&&height>=0?withSpring(isSearchActive?0:height,{...SPRING_CHANNEL_HEADER,clamp:{min:0,max:height}}):undefined};}" };
let obj4 = { paddingBottom: nativeDefault.space.PX_12, zIndex: 10 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetails.tsx");

export default noop.memo(function ChannelDetails(channelId) {
  channelId = channelId.channelId;
  const isSearchLocked = channelId.isSearchLocked;
  ({ onBackPress, componentWidth, isShowing } = channelId);
  if (isShowing === undefined) {
    isShowing = true;
  }
  const onChannelDeleted = channelId.onChannelDeleted;
  let flag = channelId.expandTopic;
  if (flag === undefined) {
    flag = false;
  }
  let channelDetailsSearchContext;
  closure_6 = undefined;
  closure_7 = undefined;
  let ref;
  let nativeStackNavigation;
  let context;
  let top;
  let sharedValue;
  let tmp = closure_14();
  let obj = channelId;
  let tmp2 = isShowing;
  let obj1 = channelId(isShowing[9]);
  const items = [closure_6];
  const stateFromStores = obj1.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  const items1 = [stateFromStores, onChannelDeleted];
  const effect = onChannelDeleted.useEffect(() => {
    if (null == stateFromStores) {
      if (onChannelDeleted != null) {
        tmp();
      }
    }
  }, items1);
  let objResult = obj(tmp2[10]);
  channelDetailsSearchContext = objResult.useChannelDetailsSearchContext(channelId, guild_id);
  objResult = obj(tmp2[11]);
  const searchSuggestionsGesture = objResult.useSearchSuggestionsGesture(channelDetailsSearchContext);
  ({ dismissed, setDismissed, onLayoutMeasure } = searchSuggestionsGesture);
  let tmp7 = isSearchLocked;
  const tmp9 = nativeStackNavigation(channelId);
  closure_6 = tmp9;
  const tmp10 = ref(channelId);
  closure_7 = tmp10;
  ref = onChannelDeleted.useRef(null);
  const tmp8 = isSearchLocked(tmp2[12]);
  nativeStackNavigation = obj(tmp2[14]).useNativeStackNavigation();
  context = onChannelDeleted.useContext(obj(tmp2[15]).SwipeForMemberListContext);
  const objResult1 = obj(tmp2[14]);
  const isScreenReaderEnabled = obj(tmp2[16]).useIsScreenReaderEnabled();
  let isAndroidResult = isSearchLocked(tmp2[17])();
  top = isSearchLocked(tmp2[18])().top;
  const items2 = [top, context];
  const memo = onChannelDeleted.useMemo(() => {
    let obj = PlatformUtils;
    if (!obj.isAndroid()) {
      if (!tmpResult.isIpadOS()) {
        let tmp4 = null;
      }
      return tmp4;
    }
    obj = { paddingTop: top };
    tmp4 = obj;
  }, items2);
  const layoutEffect = onChannelDeleted.useLayoutEffect(() => channelId(isShowing[21]).trackAppUIViewed(), []);
  const items3 = [tmp9, isSearchLocked, tmp10, channelDetailsSearchContext];
  const effect1 = onChannelDeleted.useEffect(() => {
    if (!isSearchLocked) {
      if ("initial" !== closure_7) {
        const current = ref.current;
        if (closure_6) {
          if (current != null) {
            current.focus();
          }
        } else {
          if (current != null) {
            current.blur();
          }
          if (!SearchQueryStore.isInitialSearchQuery(channelDetailsSearchContext)) {
            SearchPlatformActionCreatorsDefault.updateSearchQuery(channelDetailsSearchContext, (reset) => reset.reset());
            const initialMessages = SearchPlatformUtilsDefault.fetchInitialMessages(channelDetailsSearchContext);
          }
        }
      }
    }
  }, items3);
  const objResult2 = obj(tmp2[16]);
  sharedValue = obj(tmp2[24]).useSharedValue(undefined);
  const items4 = [sharedValue];
  const callback = onChannelDeleted.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    if (height > PX_8) {
      value = sharedValue.get();
      let tmp3 = null != value;
      if (tmp3) {
        const _Math = Math;
        tmp3 = Math.abs(height - value) < 0.001;
      }
      if (!tmp3) {
        const result = sharedValue.set(height);
      }
    }
  }, items4);
  const objResult3 = obj(tmp2[24]);
  const fn = function j() {
    value = sharedValue.get();
    let str = "auto";
    if (closure_6) {
      str = "none";
    }
    let obj = { position: "relative", pointerEvents: str, opacity: null, height: null };
    let num = 1;
    if (closure_6) {
      num = 0;
    }
    obj.opacity = timing.withTiming(num, timingPresets.timingFast, "animate-always");
    let withSpringResult;
    if (null != value) {
      if (value >= 0) {
        let num3 = 0;
        if (!closure_6) {
          num3 = value;
        }
        obj = {};
        const merged = Object.assign(closure_2_10);
        const range = { min: 0, max: value };
        obj.clamp = range;
        withSpringResult = spring.withSpring(num3, obj);
        const tmp3Result = spring;
      }
    }
    obj.height = withSpringResult;
    return obj;
  };
  obj = { headerHeight: sharedValue, isSearchActive: tmp9, withTiming: obj(tmp2[25]).withTiming, timingFast: obj(tmp2[26]).timingFast, withSpring: obj(tmp2[27]).withSpring, SPRING_CHANNEL_HEADER: context };
  fn.__closure = obj;
  fn.__workletHash = 8423441529588;
  fn.__initData = __initData;
  const items5 = [channelDetailsSearchContext];
  const animatedStyle = obj(tmp2[24]).useAnimatedStyle(fn);
  const effect2 = onChannelDeleted.useEffect(() => {
    const result = SearchActionCreatorsDefault.initializeAutocomplete(channelDetailsSearchContext);
    const result1 = SearchPlatformActionCreatorsDefault.initializeSearchQuery(channelDetailsSearchContext);
  }, items5);
  const items6 = [channelDetailsSearchContext, isShowing];
  const effect3 = onChannelDeleted.useEffect(() => {
    if (isShowing) {
      const result = SearchActionCreatorsDefault.clearAllSearchMesssages();
      SearchPlatformActionCreatorsDefault.updateSearchQuery(channelDetailsSearchContext, (reset) => reset.reset());
    }
  }, items6);
  const items7 = [channelId, channelDetailsSearchContext];
  const effect4 = onChannelDeleted.useEffect(() => () => {
    const result = isSearchLocked(isShowing[28]).clearAllSearchMesssages();
    closure_7(channelId);
    const obj = isSearchLocked(isShowing[28]);
    isSearchLocked(isShowing[22]).deleteSearchQuery(channelDetailsSearchContext);
  }, items7);
  const items8 = [channelId, nativeStackNavigation];
  const effect5 = onChannelDeleted.useEffect(() => {
    if ("channel-details-navigator" === nativeStackNavigation.getId()) {
      return nativeStackNavigation.addListener("transitionEnd", (data) => {
        if (!data.data.closing) {
          const bestActiveInputForChannelId = channelId(isShowing[29]).getBestActiveInputForChannelId(closure_1_0);
          if (bestActiveInputForChannelId != null) {
            bestActiveInputForChannelId.closeCustomKeyboard();
          }
          const obj = channelId(isShowing[29]);
        }
      });
    }
  }, items8);
  if (null == stateFromStores) {
    return null;
  } else {
    obj = { value: tmp8(isSearchLocked(tmp2[13]).CHANNEL_DETAILS).analyticsLocations, children: null };
    obj1 = { gesture: searchSuggestionsGesture.gesture, children: null };
    let obj2 = { style: null, accessibilityViewIsModal: true, onAccessibilityEscape: null, children: null };
    const items9 = [tmp.detailsContainer, memo];
    obj2.style = items9;
    obj2.onAccessibilityEscape = onBackPress;
    let obj3 = { style: null, children: null };
    if (isSearchLocked) {
      const items10 = [, ];
      ({ searchLocked: arr15[0], autocompleteSuggestions: arr15[1] } = tmp);
      obj3.style = items10;
      tmp = tmp7(tmp2[31]);
      const obj4 = { ref, channelId, guildId: guild_id, onSuggestionsLayoutMesure: onLayoutMeasure, onBackPress, suggestionsDismissed: dismissed, setSuggestionsDismissed: setDismissed, showBackButton: null };
      if (!isAndroidResult) {
        isAndroidResult = isScreenReaderEnabled;
      }
      if (!isAndroidResult) {
        obj = obj(tmp2[19]);
        isAndroidResult = obj.isAndroid();
      }
      if (isAndroidResult) {
        isAndroidResult = null != onBackPress;
      }
      obj4.showBackButton = isAndroidResult;
      obj3.children = tmp26(tmp, obj4);
      let tmp26Result = tmp26(tmp28, obj3);
      obj3 = [tmp26Result, ];
      tmp7 = tmp7(tmp2[32]);
      const obj5 = { searchContext: channelDetailsSearchContext, width: componentWidth };
      tmp2 = tmp26(tmp7, obj5);
      obj3[1] = tmp2;
      obj2.children = obj3;
      let tmp30 = obj2;
    } else {
      obj3[0] = tmp.newHeader;
      const obj6 = { ref, channel: stateFromStores, onBackPress, onSuggestionsLayoutMeasure: onLayoutMeasure, suggestionsDismissed: dismissed, setSuggestionsDismissed: setDismissed, componentWidth };
      const items11 = [tmp26(tmp7(tmp2[33]), obj6), ];
      const obj7 = { style: animatedStyle, children: null };
      const obj8 = { style: tmp.information, onLayout: callback, children: null };
      const obj9 = { channel: stateFromStores };
      const items12 = [tmp26(tmp7(tmp2[34]), obj9), , ];
      const obj10 = { channel: stateFromStores, containerStyle: tmp.linkedLobby };
      items12[1] = tmp26(tmp7(tmp2[35]), obj10);
      tmp26Result = null;
      if (!stateFromStores.isPrivate()) {
        const obj11 = { channel: stateFromStores, textAlign: "left", initialExpanded: flag };
        tmp26Result = tmp26(tmp7(tmp2[36]), obj11);
      }
      items12[2] = tmp26Result;
      obj8.children = items12;
      obj7.children = tmp27(tmp7(tmp2[24]).View, obj8);
      items11[1] = tmp26(tmp7(tmp2[24]).View, obj7);
      obj3[1] = items11;
      const items13 = [tmp27(tmp28, obj3), ];
      const obj12 = { freeze: !isShowing, children: null };
      const obj13 = { style: tmp.search, collapsable: false, children: null };
      const obj14 = { searchContext: channelDetailsSearchContext, width: componentWidth };
      obj13.children = tmp26(tmp7(tmp2[32]), obj14);
      obj12.children = tmp26(tmp28, obj13);
      items13[1] = tmp26(obj(tmp2[37]).Freeze, obj12);
      obj2.children = items13;
      tmp30 = obj2;
    }
    obj1.children = sharedValue(stateFromStores, tmp30);
    obj1 = tmp26(obj(tmp2[30]).GestureDetector, obj1);
    obj.children = obj1;
    top(obj(tmp2[12]).AnalyticsLocationProvider, obj);
  }
});