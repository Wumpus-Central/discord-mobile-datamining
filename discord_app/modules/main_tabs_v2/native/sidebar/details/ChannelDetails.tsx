// === Module 17238: ChannelDetails ===

// Module 17238 (ChannelDetails)
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import timing from "timing" /* 5092 */;
import timingPresets from "timingPresets" /* 5095 */;
import spring from "spring" /* 5375 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 11990 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 12015 */;
import SearchActionCreatorsDefault from "SearchActionCreators" /* 12024 */;
import noop from "module_19" /* 19 */;
import SearchQueryStore from "SearchQueryStore" /* 12004 */;
import ChannelStore from "ChannelStore" /* 2064 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const ChannelDetailsStore = fn(9283);
({ deleteChannelDetailsSearchState: closure_7, useChannelDetailsSearchActiveSource: closure_8, useIsChannelDetailsSearchActive: closure_9 } = ChannelDetailsStore);
const ChannelDetailsConstants = fn(9600);
({ SPRING_CHANNEL_HEADER: c10, CHANNEL_DETAILS_TOP_MARGIN } = ChannelDetailsConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
const createStyles = fn(5091);
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
let closure_15 = { code: "function ChannelDetailsTsx1(){const{headerHeight,isSearchActive,withTiming,timingFast,withSpring,SPRING_CHANNEL_HEADER}=this.__closure;const height_0=headerHeight.get();return{position:\"relative\",pointerEvents:isSearchActive?\"none\":\"auto\",opacity:withTiming(isSearchActive?0:1,timingFast,\"animate-always\"),height:height_0!=null&&height_0>=0?withSpring(isSearchActive?0:height_0,{...SPRING_CHANNEL_HEADER,clamp:{min:0,max:height_0}}):undefined};}" };
const __initData = { code: "function ChannelDetailsTsx2(){const{headerHeight,isSearchActive,withTiming,timingFast,withSpring,SPRING_CHANNEL_HEADER}=this.__closure;const height_0=headerHeight.get();return{position:'relative',pointerEvents:isSearchActive?'none':'auto',opacity:withTiming(isSearchActive?0:1,timingFast,'animate-always'),height:height_0!=null&&height_0>=0?withSpring(isSearchActive?0:height_0,{...SPRING_CHANNEL_HEADER,clamp:{min:0,max:height_0}}):undefined};}" };
const ReactCompilerGating = fn(558);
let obj7 = { paddingBottom: nativeDefault.space.PX_12, zIndex: 10 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetails.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelDetails(channelId) {
  const cResult = channelId(onChannelDeleted[10]).c(67);
  channelId = channelId.channelId;
  const isSearchLocked = channelId.isSearchLocked;
  ({ onBackPress, componentWidth, isShowing, onChannelDeleted } = channelId);
  const expandTopic = channelId.expandTopic;
  noop = undefined === isShowing || isShowing;
  closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [closure_6];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function o() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let obj = channelId(onChannelDeleted[10]);
  const stateFromStores = channelId(onChannelDeleted[11]).useStateFromStores(first, tmp7);
  if (stateFromStores != null) {
    const guild_id = stateFromStores.guild_id;
  }
  if (cResult[3] === stateFromStores) {
    if (cResult[4] === onChannelDeleted) {
      let tmp9 = cResult[5];
      let tmp10 = cResult[6];
    }
    const effect = noop.useEffect(tmp9, tmp10);
    const channelDetailsSearchContext = tmp(onChannelDeleted[12]).useChannelDetailsSearchContext(channelId, guild_id);
    let obj3 = noop;
    const tmpResult6 = tmp(onChannelDeleted[12]);
    const searchSuggestionsGesture = tmp(onChannelDeleted[13]).useSearchSuggestionsGesture(channelDetailsSearchContext);
    ({ gesture, detectorRef, suggestionsContext } = searchSuggestionsGesture);
    const tmpResult7 = tmp(onChannelDeleted[13]);
    const analyticsLocations = isSearchLocked(onChannelDeleted[14])(isSearchLocked(onChannelDeleted[15]).CHANNEL_DETAILS).analyticsLocations;
    const tmp17 = nativeStackNavigation(channelId);
    closure_6 = tmp17;
    const tmp19 = ref(channelId);
    closure_7 = tmp19;
    ref = noop.useRef(null);
    const tmp15 = isSearchLocked(onChannelDeleted[14]);
    nativeStackNavigation = tmp(onChannelDeleted[16]).useNativeStackNavigation();
    const context = noop.useContext(tmp(onChannelDeleted[17]).SwipeForMemberListContext);
    const tmpResult8 = tmp(onChannelDeleted[16]);
    const isScreenReaderEnabled = tmp(onChannelDeleted[18]).useIsScreenReaderEnabled();
    isSearchLocked(onChannelDeleted[19])();
    const top = isSearchLocked(onChannelDeleted[20])().top;
    if (cResult[7] === context) {
      const _Symbol = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class Z {
          constructor() {
            obj = channelId(onChannelDeleted[23]);
            return obj.trackAppUIViewed();
          }
        }
        const items1 = [];
        cResult[10] = Z;
        cResult[11] = items1;
        let tmp28 = items1;
      } else {
        class Z {
          constructor() {
            obj = channelId(onChannelDeleted[23]);
            return obj.trackAppUIViewed();
          }
        }
        tmp28 = cResult[11];
      }
      const layoutEffect = obj3.useLayoutEffect(Z, tmp28);
      if (cResult[12] === tmp17) {
        class Z {
          constructor() {
            obj = channelId(onChannelDeleted[23]);
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
                SearchPlatformActionCreatorsDefault.updateSearchQuery(channelDetailsSearchContext, (reset) => reset.reset());
                const initialMessages = SearchPlatformUtilsDefault.fetchInitialMessages(channelDetailsSearchContext);
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
    const tmpResult9 = tmp(onChannelDeleted[18]);
    if (!tmpResult10.isAndroid()) {
      class Z {
        constructor() {
          obj = channelId(onChannelDeleted[23]);
          return obj.trackAppUIViewed();
        }
      }
      if (!obj9.isIpadOS()) {
        class Z {
          constructor() {
            obj = channelId(onChannelDeleted[23]);
            return obj.trackAppUIViewed();
          }
        }
      }
      cResult[7] = context;
      cResult[8] = top;
      cResult[9] = tmp26;
    }
    class D {
      constructor() {
        if (null == closure_4) {
          if (onChannelDeleted != null) {
            tmpResult = tmp();
          }
        }
        return;
      }
    }
    tmp26 = { paddingTop: null };
    let obj2 = { paddingTop: null };
    tmpResult10 = tmp(onChannelDeleted[21]);
  }
  class D {
    constructor() {
      if (null == closure_4) {
        if (onChannelDeleted != null) {
          tmpResult = tmp();
        }
      }
      return;
    }
  }
  const items3 = [stateFromStores, onChannelDeleted];
  cResult[3] = stateFromStores;
  cResult[4] = onChannelDeleted;
  cResult[5] = D;
  cResult[6] = items3;
  tmp10 = items3;
  tmp9 = D;
  const tmpResult = channelId(onChannelDeleted[11]);
}) : (function ChannelDetails(channelId) {
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
  const stateFromStores = channelId(isShowing[11]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
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
  let obj2 = channelId(isShowing[11]);
  channelDetailsSearchContext = obj(tmp2[12]).useChannelDetailsSearchContext(channelId, guild_id);
  const objResult = obj(tmp2[12]);
  const searchSuggestionsGesture = obj(tmp2[13]).useSearchSuggestionsGesture(channelDetailsSearchContext);
  let tmp7 = isSearchLocked;
  ({ gesture, detectorRef, suggestionsContext } = searchSuggestionsGesture);
  const objResult6 = obj(tmp2[13]);
  const tmp9 = nativeStackNavigation(channelId);
  closure_6 = tmp9;
  const tmp10 = ref(channelId);
  closure_7 = tmp10;
  ref = onChannelDeleted.useRef(null);
  const tmp8 = isSearchLocked(tmp2[14]);
  nativeStackNavigation = obj(tmp2[16]).useNativeStackNavigation();
  context = onChannelDeleted.useContext(obj(tmp2[17]).SwipeForMemberListContext);
  const objResult7 = obj(tmp2[16]);
  const isScreenReaderEnabled = obj(tmp2[18]).useIsScreenReaderEnabled();
  let isAndroidResult = isSearchLocked(tmp2[19])();
  top = isSearchLocked(tmp2[20])().top;
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
  const layoutEffect = onChannelDeleted.useLayoutEffect(() => channelId(isShowing[23]).trackAppUIViewed(), []);
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
  const objResult8 = obj(tmp2[18]);
  sharedValue = obj(tmp2[26]).useSharedValue(undefined);
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
  const objResult9 = obj(tmp2[26]);
  class X {
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
      obj2 = closure_0(closure_2[27]);
      num = 1;
      if (tmp2) {
        num = 0;
      }
      obj.opacity = obj2.withTiming(num, tmp3(tmp4[28]).timingFast, "animate-always");
      withSpringResult = undefined;
      if (null != value) {
        num2 = 0;
        if (value >= 0) {
          tmp3Result = tmp3(tmp4[29]);
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
  const objResult10 = obj(tmp2[26]);
  X.__closure = { headerHeight: sharedValue, isSearchActive: tmp9, withTiming: obj(tmp2[27]).withTiming, timingFast: obj(tmp2[28]).timingFast, withSpring: obj(tmp2[29]).withSpring, SPRING_CHANNEL_HEADER: context };
  X.__workletHash = 1831044277368;
  X.__initData = __initData;
  const items5 = [channelDetailsSearchContext];
  const animatedStyle = objResult10.useAnimatedStyle(X);
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
    const result = isSearchLocked(isShowing[30]).clearAllSearchMesssages();
    closure_7(channelId);
    const obj = isSearchLocked(isShowing[30]);
    isSearchLocked(isShowing[24]).deleteSearchQuery(channelDetailsSearchContext);
  }, items7);
  const items8 = [channelId, nativeStackNavigation];
  const effect5 = onChannelDeleted.useEffect(() => {
    if ("channel-details-navigator" === nativeStackNavigation.getId()) {
      return nativeStackNavigation.addListener("transitionEnd", (data) => {
        if (!data.data.closing) {
          const bestActiveInputForChannelId = channelId(isShowing[31]).getBestActiveInputForChannelId(closure_1_0);
          if (bestActiveInputForChannelId != null) {
            bestActiveInputForChannelId.closeCustomKeyboard();
          }
          const obj = channelId(isShowing[31]);
        }
      });
    }
  }, items8);
  if (null == stateFromStores) {
    return null;
  } else {
    const obj4 = { value: tmp8(isSearchLocked(tmp2[15]).CHANNEL_DETAILS).analyticsLocations, children: null };
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
      tmp = tmp7(tmp2[32]);
      const obj9 = { ref, channelId, guildId: guild_id, onBackPress, showBackButton: null };
      if (!isAndroidResult) {
        isAndroidResult = isScreenReaderEnabled;
      }
      if (!isAndroidResult) {
        obj = obj(tmp2[21]);
        isAndroidResult = obj.isAndroid();
      }
      if (isAndroidResult) {
        isAndroidResult = null != onBackPress;
      }
      obj9.showBackButton = isAndroidResult;
      obj8.children = tmp26(tmp, obj9);
      obj8 = [, ];
      obj8[0] = tmp26(tmp28, obj8);
      tmp7 = tmp7(tmp2[33]);
      const obj10 = { searchContext: channelDetailsSearchContext, width: componentWidth };
      tmp2 = tmp26(tmp7, obj10);
      obj8[1] = tmp2;
      obj7.children = obj8;
      let tmp30 = obj7;
      const tmp26Result = tmp26(tmp28, obj8);
    } else {
      obj8[0] = tmp.newHeader;
      const obj11 = { ref, channel: stateFromStores, onBackPress, componentWidth };
      const items11 = [tmp26(tmp7(tmp2[34]), obj11), ];
      const obj12 = { style: animatedStyle, children: null };
      const obj13 = { style: tmp.information, onLayout: callback, children: null };
      const obj14 = { channel: stateFromStores };
      const items12 = [tmp26(tmp7(tmp2[35]), obj14), , ];
      const obj15 = { channel: stateFromStores, containerStyle: tmp.linkedLobby };
      items12[1] = tmp26(tmp7(tmp2[36]), obj15);
      let tmp26Result3 = null;
      if (!stateFromStores.isPrivate()) {
        const obj16 = { channel: stateFromStores, textAlign: "left", initialExpanded: flag };
        tmp26Result3 = tmp26(tmp7(tmp2[37]), obj16);
      }
      items12[2] = tmp26Result3;
      obj13.children = items12;
      obj12.children = tmp27(tmp28, obj13);
      items11[1] = tmp26(tmp7(tmp2[26]).View, obj12);
      obj8[1] = items11;
      const items13 = [tmp27(tmp28, obj8), ];
      const obj17 = { freeze: !isShowing, children: null };
      const obj18 = { style: tmp.search, collapsable: false, children: null };
      const obj19 = { searchContext: channelDetailsSearchContext, width: componentWidth };
      obj18.children = tmp26(tmp7(tmp2[33]), obj19);
      obj17.children = tmp26(tmp28, obj18);
      items13[1] = tmp26(obj(tmp2[38]).Freeze, obj17);
      obj7.children = items13;
      tmp30 = obj7;
    }
    obj6.children = sharedValue(stateFromStores, tmp30);
    obj6 = tmp26(obj(tmp2[39]).GestureDetector, obj6);
    obj5.children = obj6;
    obj5 = tmp26(obj(tmp2[13]).SearchSuggestionsProvider, obj5);
    obj4.children = obj5;
    top(obj(tmp2[14]).AnalyticsLocationProvider, obj4);
  }
}));