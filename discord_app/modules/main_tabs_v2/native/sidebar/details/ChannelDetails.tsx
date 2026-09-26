// === Module 16434: ChannelDetails ===

// Module 16434 (ChannelDetails)
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import timing from "timing" /* 4837 */;
import timingPresets from "timingPresets" /* 4840 */;
import spring from "spring" /* 5280 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 11821 */;
import SearchActionCreatorsDefault from "SearchActionCreators" /* 11830 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 11844 */;
import noop from "module_19" /* 19 */;
import SearchQueryStore from "SearchQueryStore" /* 11822 */;
import ChannelStore from "ChannelStore" /* 2045 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const ChannelDetailsStore = fn(7301);
({ deleteChannelDetailsSearchState: closure_7, useChannelDetailsSearchActiveSource: closure_8, useIsChannelDetailsSearchActive: closure_9 } = ChannelDetailsStore);
const ChannelDetailsConstants = fn(10377);
({ SPRING_CHANNEL_HEADER: c10, CHANNEL_DETAILS_TOP_MARGIN } = ChannelDetailsConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
const createStyles = fn(4836);
let obj = { detailsContainer: null, information: null, linkedLobby: null, search: null, searchLocked: null, autocompleteSuggestions: null, newHeader: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.backgroundColor = nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND;
obj3.flex = 1;
obj.detailsContainer = obj3;
obj.information = { marginHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, paddingTop: PX_8 };
let obj4 = { marginHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, paddingTop: PX_8 };
obj.linkedLobby = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_4 };
obj.search = { flex: 1, flexGrow: 1 };
let obj5 = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_4 };
obj.searchLocked = { marginTop: CHANNEL_DETAILS_TOP_MARGIN, marginBottom: nativeDefault.space.PX_16 };
obj.autocompleteSuggestions = { zIndex: 10 };
let obj6 = { marginTop: CHANNEL_DETAILS_TOP_MARGIN, marginBottom: nativeDefault.space.PX_16 };
obj.newHeader = { paddingBottom: nativeDefault.space.PX_12, zIndex: 10 };
let closure_14 = createStyles.createStyles(obj);
const __initData = { code: "function ChannelDetailsTsx1(){const{headerHeight,isSearchActive,withTiming,timingFast,withSpring,SPRING_CHANNEL_HEADER}=this.__closure;const height=headerHeight.get();return{position:'relative',pointerEvents:isSearchActive?'none':'auto',opacity:withTiming(isSearchActive?0:1,timingFast,'animate-always'),height:height!=null&&height>=0?withSpring(isSearchActive?0:height,{...SPRING_CHANNEL_HEADER,clamp:{min:0,max:height}}):undefined};}" };
let obj7 = { paddingBottom: nativeDefault.space.PX_12, zIndex: 10 };
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
  const items = [closure_6];
  const stateFromStores = channelId(isShowing[9]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
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
  let obj2 = channelId(isShowing[9]);
  channelDetailsSearchContext = obj(tmp2[10]).useChannelDetailsSearchContext(channelId, guild_id);
  const objResult = obj(tmp2[10]);
  const searchSuggestionsGesture = obj(tmp2[11]).useSearchSuggestionsGesture(channelDetailsSearchContext);
  let tmp7 = isSearchLocked;
  ({ gesture, detectorRef, suggestionsContext } = searchSuggestionsGesture);
  const objResult6 = obj(tmp2[11]);
  const tmp9 = nativeStackNavigation(channelId);
  closure_6 = tmp9;
  const tmp10 = ref(channelId);
  closure_7 = tmp10;
  ref = onChannelDeleted.useRef(null);
  const tmp8 = isSearchLocked(tmp2[12]);
  nativeStackNavigation = obj(tmp2[14]).useNativeStackNavigation();
  context = onChannelDeleted.useContext(obj(tmp2[15]).SwipeForMemberListContext);
  const objResult7 = obj(tmp2[14]);
  const isScreenReaderEnabled = obj(tmp2[16]).useIsScreenReaderEnabled();
  let isAndroidResult = isSearchLocked(tmp2[17])();
  top = isSearchLocked(tmp2[18])().top;
  const items2 = [top, context];
  const memo = onChannelDeleted.useMemo(() => {
    if (!obj.isAndroid()) {
      if (!tmpResult.isIpadOS()) {
        let tmp4 = null;
      }
      return tmp4;
    }
    tmp4 = { paddingTop: top };
    obj = PlatformUtils;
    const obj2 = { paddingTop: top };
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
  const objResult8 = obj(tmp2[16]);
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
  const objResult9 = obj(tmp2[24]);
  class Q {
    constructor() {
      value = closure_12.get();
      tmp2 = closure_6;
      str = "auto";
      if (closure_6) {
        str = "none";
      }
      obj = { position: "relative", pointerEvents: str, opacity: null, height: null };
      tmp3 = closure_0;
      tmp4 = closure_2;
      obj2 = closure_0(closure_2[25]);
      num = 1;
      if (tmp2) {
        num = 0;
      }
      obj.opacity = obj2.withTiming(num, tmp3(tmp4[26]).timingFast, "animate-always");
      withSpringResult = undefined;
      if (null != value) {
        num2 = 0;
        if (value >= 0) {
          tmp3Result = tmp3(tmp4[27]);
          num3 = 0;
          if (!tmp2) {
            num3 = value;
          }
          obj1 = {};
          tmp6 = SPRING_CHANNEL_HEADER;
          tmp7 = obj1;
          merged = Object.assign(SPRING_CHANNEL_HEADER);
          range = { min: 0, max: null };
          range.max = value;
          obj1.clamp = range;
          withSpringResult = tmp3Result.withSpring(num3, obj1);
        }
      }
      obj.height = withSpringResult;
      return obj;
    }
  }
  const objResult10 = obj(tmp2[24]);
  Q.__closure = { headerHeight: sharedValue, isSearchActive: tmp9, withTiming: obj(tmp2[25]).withTiming, timingFast: obj(tmp2[26]).timingFast, withSpring: obj(tmp2[27]).withSpring, SPRING_CHANNEL_HEADER: context };
  Q.__workletHash = 8423441529588;
  Q.__initData = __initData;
  const items5 = [channelDetailsSearchContext];
  const animatedStyle = objResult10.useAnimatedStyle(Q);
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
    const obj4 = { value: tmp8(isSearchLocked(tmp2[13]).CHANNEL_DETAILS).analyticsLocations, children: null };
    let obj5 = { value: suggestionsContext, children: null };
    let obj6 = { gesture, children: null };
    const obj7 = { ref: detectorRef, style: null, accessibilityViewIsModal: true, onAccessibilityEscape: null, children: null };
    const items9 = [tmp.detailsContainer, memo];
    obj7.style = items9;
    obj7.onAccessibilityEscape = onBackPress;
    let obj8 = { style: null, children: null };
    if (isSearchLocked) {
      const items10 = [, ];
      ({ searchLocked: arr15[0], autocompleteSuggestions: arr15[1] } = tmp);
      obj8.style = items10;
      tmp = tmp7(tmp2[31]);
      const obj9 = { ref, channelId, guildId: guild_id, onBackPress, showBackButton: null };
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
      obj9.showBackButton = isAndroidResult;
      obj8.children = tmp26(tmp, obj9);
      obj8 = [, ];
      obj8[0] = tmp26(tmp28, obj8);
      tmp7 = tmp7(tmp2[32]);
      const obj10 = { searchContext: channelDetailsSearchContext, width: componentWidth };
      tmp2 = tmp26(tmp7, obj10);
      obj8[1] = tmp2;
      obj7.children = obj8;
      let tmp30 = obj7;
      const tmp26Result = tmp26(tmp28, obj8);
    } else {
      obj8[0] = tmp.newHeader;
      const obj11 = { ref, channel: stateFromStores, onBackPress, componentWidth };
      const items11 = [tmp26(tmp7(tmp2[33]), obj11), ];
      const obj12 = { style: animatedStyle, children: null };
      const obj13 = { style: tmp.information, onLayout: callback, children: null };
      const obj14 = { channel: stateFromStores };
      const items12 = [tmp26(tmp7(tmp2[34]), obj14), , ];
      const obj15 = { channel: stateFromStores, containerStyle: tmp.linkedLobby };
      items12[1] = tmp26(tmp7(tmp2[35]), obj15);
      let tmp26Result3 = null;
      if (!stateFromStores.isPrivate()) {
        const obj16 = { channel: stateFromStores, textAlign: "left", initialExpanded: flag };
        tmp26Result3 = tmp26(tmp7(tmp2[36]), obj16);
      }
      items12[2] = tmp26Result3;
      obj13.children = items12;
      obj12.children = tmp27(tmp7(tmp2[24]).View, obj13);
      items11[1] = tmp26(tmp7(tmp2[24]).View, obj12);
      obj8[1] = items11;
      const items13 = [tmp27(tmp28, obj8), ];
      const obj17 = { freeze: !isShowing, children: null };
      const obj18 = { style: tmp.search, collapsable: false, children: null };
      const obj19 = { searchContext: channelDetailsSearchContext, width: componentWidth };
      obj18.children = tmp26(tmp7(tmp2[32]), obj19);
      obj17.children = tmp26(tmp28, obj18);
      items13[1] = tmp26(obj(tmp2[37]).Freeze, obj17);
      obj7.children = items13;
      tmp30 = obj7;
    }
    obj6.children = sharedValue(stateFromStores, tmp30);
    obj6 = tmp26(obj(tmp2[30]).GestureDetector, obj6);
    obj5.children = obj6;
    obj5 = tmp26(obj(tmp2[11]).SearchSuggestionsProvider, obj5);
    obj4.children = obj5;
    top(obj(tmp2[12]).AnalyticsLocationProvider, obj4);
  }
});