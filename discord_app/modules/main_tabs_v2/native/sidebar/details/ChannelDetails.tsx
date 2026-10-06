// === Module 16809: ChannelDetails ===

// Module 16809 (ChannelDetails)
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import DeviceUtils from "DeviceUtils" /* 4872 */;
import timing from "timing" /* 4897 */;
import timingPresets from "timingPresets" /* 4900 */;
import spring from "spring" /* 5604 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 11980 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 12005 */;
import SearchActionCreatorsDefault from "SearchActionCreators" /* 12014 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SearchQueryStore from "SearchQueryStore" /* 11994 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import ChannelDetailsStore from "ChannelDetailsStore" /* 7522 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10666 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channelId;

let CHANNEL_DETAILS_TOP_MARGIN;
let StyleSheet;
let c10;
let c9;
let closure_12;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let unpackModuleId;
let react = react_mod;
({ View: closure_4, StyleSheet } = react_native);
({ deleteChannelDetailsSearchState: metroImportDefault, useChannelDetailsSearchActiveSource: metroImportAll, useIsChannelDetailsSearchActive: c9 } = ChannelDetailsStore);
({ SPRING_CHANNEL_HEADER: c10, CHANNEL_DETAILS_TOP_MARGIN } = ChannelDetailsConstants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
const PX_8 = nativeDefault.space.PX_8;
let createStyles = createStyles_mod;
let obj = { detailsContainer: obj2, information: obj3, linkedLobby: obj4, search: { flex: 1, flexGrow: 1 }, searchLocked: obj5, autocompleteSuggestions: { zIndex: 10 }, newHeader: obj6 };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, flex: 1 };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { marginHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, paddingTop: PX_8 };
obj4 = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_4 };
obj5 = { marginTop: CHANNEL_DETAILS_TOP_MARGIN, marginBottom: nativeDefault.space.PX_16 };
obj6 = { paddingBottom: nativeDefault.space.PX_12, zIndex: 10 };
let closure_14 = createStyles(obj);
let closure_15 = { code: "function ChannelDetailsTsx1(){const{headerHeight,isSearchActive,withTiming,timingFast,withSpring,SPRING_CHANNEL_HEADER}=this.__closure;const height_0=headerHeight.get();return{position:\"relative\",pointerEvents:isSearchActive?\"none\":\"auto\",opacity:withTiming(isSearchActive?0:1,timingFast,\"animate-always\"),height:height_0!=null&&height_0>=0?withSpring(isSearchActive?0:height_0,{...SPRING_CHANNEL_HEADER,clamp:{min:0,max:height_0}}):undefined};}" };
const __initData = { code: "function ChannelDetailsTsx2(){const{headerHeight,isSearchActive,withTiming,timingFast,withSpring,SPRING_CHANNEL_HEADER}=this.__closure;const height_0=headerHeight.get();return{position:'relative',pointerEvents:isSearchActive?'none':'auto',opacity:withTiming(isSearchActive?0:1,timingFast,'animate-always'),height:height_0!=null&&height_0>=0?withSpring(isSearchActive?0:height_0,{...SPRING_CHANNEL_HEADER,clamp:{min:0,max:height_0}}):undefined};}" };
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let closure_3;
  let componentWidth;
  let detectorRef;
  let first;
  let gesture;
  let guild_id;
  let isShowing;
  let nativeStackNavigation;
  let onBackPress;
  let onChannelDeleted;
  let ref;
  let suggestionsContext;
  let tmp7;
  const tmp = channelId;
  let obj = channelId(onChannelDeleted[10]);
  const cResult = obj.c(67);
  channelId = channelId.channelId;
  const isSearchLocked = channelId.isSearchLocked;
  ({ onBackPress, componentWidth, isShowing, onChannelDeleted } = channelId);
  const expandTopic = channelId.expandTopic;
  react = undefined === isShowing || isShowing;
  closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [closure_6];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function o() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    let num3 = 2;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(onChannelDeleted[11]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (cResult[3] === stateFromStores) {
    let tmp9;
    let tmp10;
    if (cResult[4] === onChannelDeleted) {
      tmp9 = cResult[5];
      tmp10 = cResult[6];
    }
    const effect = react.useEffect(tmp9, tmp10);
    const tmpResult6 = tmp(onChannelDeleted[12]);
    const channelDetailsSearchContext = tmpResult6.useChannelDetailsSearchContext(channelId, guild_id);
    const tmpResult7 = tmp(onChannelDeleted[13]);
    const searchSuggestionsGesture = tmpResult7.useSearchSuggestionsGesture(channelDetailsSearchContext);
    ({ gesture, detectorRef, suggestionsContext } = searchSuggestionsGesture);
    const tmp15 = isSearchLocked(onChannelDeleted[14]);
    const analyticsLocations = tmp15(isSearchLocked(onChannelDeleted[15]).CHANNEL_DETAILS).analyticsLocations;
    const tmp17 = nativeStackNavigation(channelId);
    closure_6 = tmp17;
    const tmp19 = ref(channelId);
    let closure_7 = tmp19;
    ref = react.useRef(null);
    const tmpResult8 = tmp(onChannelDeleted[16]);
    nativeStackNavigation = tmpResult8.useNativeStackNavigation();
    const context = react.useContext(tmp(onChannelDeleted[17]).SwipeForMemberListContext);
    const tmpResult9 = tmp(onChannelDeleted[18]);
    const isScreenReaderEnabled = tmpResult9.useIsScreenReaderEnabled();
    isSearchLocked(onChannelDeleted[19])();
    const top = isSearchLocked(onChannelDeleted[20])().top;
    const obj3 = react;
    if (cResult[7] === context) {
      let tmp28;
      const _Symbol = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class Z {
          constructor() {
            const obj = channelId(onChannelDeleted[23]);
            return obj.trackAppUIViewed();
          }
        }
        const items1 = [];
        cResult[10] = Z;
        cResult[11] = items1;
        tmp28 = items1;
      } else {
        class Z {
          constructor() {
            const obj = channelId(onChannelDeleted[23]);
            return obj.trackAppUIViewed();
          }
        }
        tmp28 = cResult[11];
      }
      const layoutEffect = obj3.useLayoutEffect(Z, tmp28);
      if (cResult[12] === tmp17) {
        class Z {
          constructor() {
            const obj = channelId(onChannelDeleted[23]);
            return obj.trackAppUIViewed();
          }
        }
      }
      function ee() {
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
                const obj = SearchPlatformActionCreatorsDefault;
                obj.updateSearchQuery(channelDetailsSearchContext, (reset) => reset.reset());
                const obj2 = SearchPlatformUtilsDefault;
                const initialMessages = obj2.fetchInitialMessages(channelDetailsSearchContext);
              }
            }
          }
        }
      }
      const items2 = [tmp17, isSearchLocked, tmp19, channelDetailsSearchContext];
      cResult[12] = tmp17;
      cResult[13] = isSearchLocked;
      cResult[14] = tmp19;
      cResult[15] = channelDetailsSearchContext;
      cResult[16] = ee;
      cResult[17] = items2;
    }
    const tmpResult10 = tmp(onChannelDeleted[21]);
    if (!tmpResult10.isAndroid()) {
      class Z {
        constructor() {
          const obj = channelId(onChannelDeleted[23]);
          return obj.trackAppUIViewed();
        }
      }
      if (!obj9.isIpadOS()) {
        class Z {
          constructor() {
            const obj = channelId(onChannelDeleted[23]);
            return obj.trackAppUIViewed();
          }
        }
      }
      cResult[7] = context;
      cResult[8] = top;
      cResult[9] = tmp26;
    }
    let obj2 = { paddingTop: null };
    class D {
      constructor() {
        if (null == stateFromStores) {
          if (onChannelDeleted != null) {
            tmp();
          }
        }
      }
    }
  }
  class D {
    constructor() {
      if (null == stateFromStores) {
        if (onChannelDeleted != null) {
          tmp();
        }
      }
    }
  }
  const items3 = [stateFromStores, onChannelDeleted];
  cResult[3] = stateFromStores;
  cResult[4] = onChannelDeleted;
  cResult[5] = D;
  cResult[6] = items3;
  tmp10 = items3;
  tmp9 = D;
}) : ((channelId) => {
  let GestureDetector;
  let SearchSuggestionsProvider;
  let componentWidth;
  let detectorRef;
  let gesture;
  let isShowing;
  let items13;
  let items9;
  let obj12;
  let obj17;
  let obj18;
  let obj4;
  let obj5;
  let onBackPress;
  let suggestionsContext;
  let tmp32;
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
  let closure_6;
  let closure_7;
  let ref;
  let nativeStackNavigation;
  let context;
  let top;
  let sharedValue;
  const tmp = closure_14();
  let tmp3 = isShowing;
  let obj = channelId(isShowing[11]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
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
  const tmp2Result = channelId(tmp3[12]);
  channelDetailsSearchContext = tmp2Result.useChannelDetailsSearchContext(channelId, guild_id);
  const tmp2Result7 = channelId(tmp3[13]);
  const searchSuggestionsGesture = tmp2Result7.useSearchSuggestionsGesture(channelDetailsSearchContext);
  ({ gesture, detectorRef, suggestionsContext } = searchSuggestionsGesture);
  const tmp9 = isSearchLocked(tmp3[14]);
  const analyticsLocations = tmp9(isSearchLocked(tmp3[15]).CHANNEL_DETAILS).analyticsLocations;
  const tmp10 = nativeStackNavigation(channelId);
  closure_6 = tmp10;
  const tmp11 = ref(channelId);
  closure_7 = tmp11;
  ref = onChannelDeleted.useRef(null);
  const tmp2Result8 = channelId(tmp3[16]);
  nativeStackNavigation = tmp2Result8.useNativeStackNavigation();
  context = onChannelDeleted.useContext(tmp2(tmp3[17]).SwipeForMemberListContext);
  const tmp2Result9 = channelId(tmp3[18]);
  const isScreenReaderEnabled = tmp2Result9.useIsScreenReaderEnabled();
  let isAndroidResult = isSearchLocked(tmp3[19])();
  top = isSearchLocked(tmp3[20])().top;
  const items2 = [top, context];
  const memo = onChannelDeleted.useMemo(() => {
    const obj = PlatformUtils;
    if (!obj.isAndroid()) {
      let tmp4;
      const tmpResult = DeviceUtils;
      if (!tmpResult.isIpadOS()) {
        tmp4 = null;
      }
      return tmp4;
    }
    tmp4 = { paddingTop: top };
  }, items2);
  const layoutEffect = onChannelDeleted.useLayoutEffect(() => {
    const obj = channelId(isShowing[23]);
    return obj.trackAppUIViewed();
  }, []);
  const items3 = [tmp10, isSearchLocked, tmp11, channelDetailsSearchContext];
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
            const obj = SearchPlatformActionCreatorsDefault;
            obj.updateSearchQuery(channelDetailsSearchContext, (reset) => reset.reset());
            const obj2 = SearchPlatformUtilsDefault;
            const initialMessages = obj2.fetchInitialMessages(channelDetailsSearchContext);
          }
        }
      }
    }
  }, items3);
  const tmp2Result10 = channelId(tmp3[26]);
  sharedValue = tmp2Result10.useSharedValue(undefined);
  const items4 = [sharedValue];
  const callback = onChannelDeleted.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    if (height > PX_8) {
      const value = sharedValue.get();
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
  const tmp2Result11 = channelId(tmp3[26]);
  class X {
    constructor() {
      let num;
      let range;
      let withSpringResult;
      let withTiming;
      const value = sharedValue.get();
      let str = "auto";
      if (closure_6) {
        str = "none";
      }
      const obj = { position: "relative", pointerEvents: str, opacity: withTiming(num, timingPresets.timingFast, "animate-always"), height: withSpringResult };
      num = 1;
      withTiming = timing.withTiming;
      timing;
      if (closure_6) {
        num = 0;
      }
      withSpringResult = undefined;
      if (null != value) {
        if (value >= 0) {
          let num3 = 0;
          const withSpring = spring.withSpring;
          spring;
          if (!closure_6) {
            num3 = value;
          }
          const obj2 = { clamp: range };
          const merged = Object.assign(authStore);
          range = { min: 0, max: value };
          withSpringResult = withSpring(num3, obj2);
        }
      }
      return obj;
    }
  }
  let obj2 = { headerHeight: sharedValue, isSearchActive: tmp10, withTiming: tmp2(tmp3[27]).withTiming, timingFast: tmp2(tmp3[28]).timingFast, withSpring: tmp2(tmp3[29]).withSpring, SPRING_CHANNEL_HEADER: context };
  X.__closure = obj2;
  X.__workletHash = 1831044277368;
  X.__initData = __initData;
  const items5 = [channelDetailsSearchContext];
  const animatedStyle = tmp2Result11.useAnimatedStyle(X);
  const effect2 = onChannelDeleted.useEffect(() => {
    const obj = SearchActionCreatorsDefault;
    const result = obj.initializeAutocomplete(channelDetailsSearchContext);
    const obj2 = SearchPlatformActionCreatorsDefault;
    const result1 = obj2.initializeSearchQuery(channelDetailsSearchContext);
  }, items5);
  const items6 = [channelDetailsSearchContext, isShowing];
  const effect3 = onChannelDeleted.useEffect(() => {
    if (isShowing) {
      const obj = SearchActionCreatorsDefault;
      const result = obj.clearAllSearchMesssages();
      const obj2 = SearchPlatformActionCreatorsDefault;
      obj2.updateSearchQuery(channelDetailsSearchContext, (reset) => reset.reset());
    }
  }, items6);
  const items7 = [channelId, channelDetailsSearchContext];
  const effect4 = onChannelDeleted.useEffect(() => () => {
    const obj = isSearchLocked(isShowing[30]);
    const result = obj.clearAllSearchMesssages();
    closure_7(channelId);
    const obj2 = isSearchLocked(isShowing[24]);
    obj2.deleteSearchQuery(channelDetailsSearchContext);
  }, items7);
  const items8 = [channelId, nativeStackNavigation];
  const effect5 = onChannelDeleted.useEffect(() => {
    if ("channel-details-navigator" === nativeStackNavigation.getId()) {
      return nativeStackNavigation.addListener("transitionEnd", (data) => {
        if (!data.data.closing) {
          const obj = channelId(isShowing[31]);
          const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(closure_1_0);
          if (bestActiveInputForChannelId != null) {
            bestActiveInputForChannelId.closeCustomKeyboard();
          }
        }
      });
    }
  }, items8);
  let tmp28Result2 = null;
  if (null != stateFromStores) {
    const obj3 = { value: analyticsLocations, children: top(SearchSuggestionsProvider, obj4) };
    const AnalyticsLocationProvider = tmp2(tmp3[14]).AnalyticsLocationProvider;
    obj4 = { value: suggestionsContext, children: top(GestureDetector, obj5) };
    SearchSuggestionsProvider = tmp2(tmp3[13]).SearchSuggestionsProvider;
    const obj6 = { ref: detectorRef, style: items9, accessibilityViewIsModal: true, onAccessibilityEscape: onBackPress, children: null };
    items9 = [tmp.detailsContainer, memo];
    const obj7 = { style: null, children: null };
    obj5 = { gesture, children: sharedValue(stateFromStores, tmp32) };
    GestureDetector = tmp2(tmp3[39]).GestureDetector;
    if (isSearchLocked) {
      const items10 = [, ];
      ({ searchLocked: arr14[0], autocompleteSuggestions: arr14[1] } = tmp);
      obj7.style = items10;
      const obj8 = { ref, channelId, guildId: guild_id, onBackPress, showBackButton: isAndroidResult };
      const tmp8Result = isSearchLocked(tmp3[32]);
      if (!isAndroidResult) {
        isAndroidResult = isScreenReaderEnabled;
      }
      if (!isAndroidResult) {
        const tmp2Result12 = channelId(tmp3[21]);
        isAndroidResult = tmp2Result12.isAndroid();
      }
      if (isAndroidResult) {
        isAndroidResult = null != onBackPress;
      }
      obj7.children = top(tmp8Result, obj8);
      const items11 = [top(stateFromStores, obj7), ];
      const obj9 = { searchContext: channelDetailsSearchContext, width: componentWidth };
      items11[1] = top(isSearchLocked(tmp3[33]), obj9);
      obj6.children = items11;
      tmp32 = obj6;
    } else {
      obj7.style = tmp.newHeader;
      const obj10 = { ref, channel: stateFromStores, onBackPress, componentWidth };
      const items12 = [top(isSearchLocked(tmp3[34]), obj10), ];
      const obj11 = { style: animatedStyle, children: sharedValue(stateFromStores, obj12) };
      obj12 = { style: tmp.information, onLayout: callback, children: items13 };
      const View = tmp8(tmp3[26]).View;
      const obj13 = { channel: stateFromStores };
      items13 = [top(isSearchLocked(tmp3[35]), obj13), , ];
      const obj14 = { channel: stateFromStores, containerStyle: tmp.linkedLobby };
      items13[1] = top(isSearchLocked(tmp3[36]), obj14);
      let tmp28Result = null;
      if (!stateFromStores.isPrivate()) {
        const obj15 = { channel: stateFromStores, textAlign: "left", initialExpanded: flag };
        tmp28Result = tmp28(tmp8(tmp3[37]), obj15);
      }
      items13[2] = tmp28Result;
      items12[1] = top(View, obj11);
      obj7.children = items12;
      const items14 = [sharedValue(stateFromStores, obj7), ];
      const obj16 = { freeze: !isShowing, children: top(stateFromStores, obj17) };
      obj17 = { style: tmp.search, collapsable: false, children: top(isSearchLocked(tmp3[33]), obj18) };
      const Freeze = tmp2(tmp3[38]).Freeze;
      obj18 = { searchContext: channelDetailsSearchContext, width: componentWidth };
      items14[1] = top(Freeze, obj16);
      obj6.children = items14;
      tmp32 = obj6;
    }
    tmp28Result2 = tmp28(AnalyticsLocationProvider, obj3);
  }
  return tmp28Result2;
}));
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetails.tsx");

export default memoResult;