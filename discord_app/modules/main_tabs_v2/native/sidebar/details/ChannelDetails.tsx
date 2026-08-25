// === Module 15975: PX_8 ===

// Module 15975 (PX_8)
import ThemesDefault from "Themes" /* 712 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_5 from "prototype" /* 11906 */;
import closure_6 from "ensureGuildLoaded" /* 1391 */;
import useChannelDetailsStore from "useChannelDetailsStore" /* 8552 */;
import ChannelDetailsNavigatorScreens from "ChannelDetailsNavigatorScreens" /* 9819 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

const require = arg1;
let c3 = importAllResult;
({ View: c4, StyleSheet } = get_ActivityIndicator);
({ deleteChannelDetailsSearchState: error, useChannelDetailsSearchActiveSource: closure_8, useIsChannelDetailsSearchActive: c9 } = useChannelDetailsStore);
({ SPRING_CHANNEL_HEADER: c10, CHANNEL_DETAILS_TOP_MARGIN } = ChannelDetailsNavigatorScreens);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
const PX_8 = ThemesDefault.space.PX_8;
let obj = { detailsContainer: null, information: null, linkedLobby: null, search: null, searchLocked: null, autocompleteSuggestions: null, newHeader: null };
obj = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.backgroundColor = ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND;
obj.flex = 1;
obj[0] = obj;
createCacheKey = { marginHorizontal: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_12, paddingTop: PX_8 };
obj[1] = createCacheKey;
obj[2] = { marginTop: ThemesDefault.space.PX_12, marginBottom: ThemesDefault.space.PX_4 };
obj[3] = { flex: 1, flexGrow: 1 };
let obj2 = { marginTop: ThemesDefault.space.PX_12, marginBottom: ThemesDefault.space.PX_4 };
obj[4] = { marginTop: CHANNEL_DETAILS_TOP_MARGIN, marginBottom: ThemesDefault.space.PX_16 };
obj[5] = { zIndex: 10 };
let obj3 = { marginTop: CHANNEL_DETAILS_TOP_MARGIN, marginBottom: ThemesDefault.space.PX_16 };
obj[6] = { paddingBottom: ThemesDefault.space.PX_12, zIndex: 10 };
let closure_14 = createCacheKey.createStyles(obj);
let closure_15 = { code: "function ChannelDetailsTsx1(){const{headerHeight,isSearchActive,withTiming,timingFast,withSpring,SPRING_CHANNEL_HEADER}=this.__closure;const height=headerHeight.get();return{position:'relative',pointerEvents:isSearchActive?'none':'auto',opacity:withTiming(isSearchActive?0:1,timingFast,'animate-always'),height:height!=null&&height>=0?withSpring(isSearchActive?0:height,{...SPRING_CHANNEL_HEADER,clamp:{min:0,max:height}}):undefined};}" };
let obj4 = { paddingBottom: ThemesDefault.space.PX_12, zIndex: 10 };
const memoResult = importAllResult.memo(function ChannelDetails(channelId) {
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
  let stateFromStores;
  let channelDetailsSearchContext;
  closure_6 = undefined;
  closure_7 = undefined;
  let ref;
  let context;
  let top;
  let sharedValue;
  let tmp = callback();
  let obj = channelId;
  let tmp2 = isShowing;
  obj1 = channelId(isShowing[9]);
  const items = [closure_6];
  stateFromStores = obj1.useStateFromStores(items, () => channel.getChannel(channelId));
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
  const tmp9 = context(channelId);
  closure_6 = tmp9;
  const tmp10 = ref(channelId);
  closure_7 = tmp10;
  ref = onChannelDeleted.useRef(null);
  context = onChannelDeleted.useContext(obj(tmp2[14]).SwipeForMemberListContext);
  const tmp8 = isSearchLocked(tmp2[12]);
  const isScreenReaderEnabled = obj(tmp2[15]).useIsScreenReaderEnabled();
  let isAndroidResult = isSearchLocked(tmp2[16])();
  top = isSearchLocked(tmp2[17])().top;
  const items2 = [top, context];
  const memo = onChannelDeleted.useMemo(() => {
    let obj = channelId(isShowing[18]);
    if (!obj.isAndroid()) {
      if (!tmpResult.isIpadOS()) {
        let tmp4 = null;
      }
      return tmp4;
    }
    obj = { paddingTop: top };
    tmp4 = obj;
  }, items2);
  const layoutEffect = onChannelDeleted.useLayoutEffect(() => channelId(isShowing[20]).trackAppUIViewed(), []);
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
          if (!channelDetailsSearchContext.isInitialSearchQuery(channelDetailsSearchContext)) {
            isSearchLocked(isShowing[21]).updateSearchQuery(tmp4, (reset) => reset.reset());
            const obj = isSearchLocked(isShowing[21]);
            const initialMessages = isSearchLocked(isShowing[22]).fetchInitialMessages(tmp4);
            const obj2 = isSearchLocked(isShowing[22]);
          }
        }
      }
    }
  }, items3);
  const objResult1 = obj(tmp2[15]);
  sharedValue = obj(tmp2[23]).useSharedValue(undefined);
  const items4 = [sharedValue];
  callback = onChannelDeleted.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    if (height > closure_1_13) {
      const value = sharedValue.get();
      let tmp3 = null != value;
      if (tmp3) {
        const _Math = Math;
        tmp3 = Math.abs(height - value) < 0.001;
      }
      if (!tmp3) {
        const result = obj.set(height);
      }
      obj = sharedValue;
    }
  }, items4);
  const objResult2 = obj(tmp2[23]);
  class Q {
    constructor() {
      value = closure_11.get();
      tmp2 = closure_6;
      str = "auto";
      if (closure_6) {
        str = "none";
      }
      obj = { position: "relative", pointerEvents: str, opacity: null, height: null };
      tmp3 = channelId;
      tmp4 = c2;
      obj2 = channelId(c2[24]);
      num = 1;
      if (tmp2) {
        num = 0;
      }
      obj[2] = obj2.withTiming(num, tmp3(tmp4[25]).timingFast, "animate-always");
      withSpringResult = undefined;
      if (null != value) {
        num2 = 0;
        if (value >= 0) {
          tmp3Result = tmp3(tmp4[26]);
          num3 = 0;
          if (!tmp2) {
            num3 = value;
          }
          obj = {};
          tmp6 = top;
          tmp7 = obj;
          merged = Object.assign(top);
          obj1 = { min: 0, max: null };
          obj1[1] = value;
          obj.clamp = obj1;
          withSpringResult = tmp3Result.withSpring(num3, obj);
        }
      }
      obj[3] = withSpringResult;
      return obj;
    }
  }
  obj = { headerHeight: sharedValue, isSearchActive: tmp9, withTiming: obj(tmp2[24]).withTiming, timingFast: obj(tmp2[25]).timingFast, withSpring: obj(tmp2[26]).withSpring, SPRING_CHANNEL_HEADER: top };
  Q.__closure = obj;
  Q.__workletHash = 8423441529588;
  Q.__initData = closure_15;
  const items5 = [channelDetailsSearchContext];
  const animatedStyle = obj(tmp2[23]).useAnimatedStyle(Q);
  const effect2 = onChannelDeleted.useEffect(() => {
    const result = isSearchLocked(isShowing[27]).initializeAutocomplete(channelDetailsSearchContext);
    const obj = isSearchLocked(isShowing[27]);
    const result1 = isSearchLocked(isShowing[21]).initializeSearchQuery(channelDetailsSearchContext);
  }, items5);
  const items6 = [channelDetailsSearchContext, isShowing];
  const effect3 = onChannelDeleted.useEffect(() => {
    if (isShowing) {
      const result = isSearchLocked(isShowing[27]).clearAllSearchMesssages();
      const obj = isSearchLocked(isShowing[27]);
      isSearchLocked(isShowing[21]).updateSearchQuery(channelDetailsSearchContext, (reset) => reset.reset());
      const obj2 = isSearchLocked(isShowing[21]);
    }
  }, items6);
  const items7 = [channelId, channelDetailsSearchContext];
  const effect4 = onChannelDeleted.useEffect(() => () => {
    const result = closure_1_1(closure_1_2[27]).clearAllSearchMesssages();
    closure_1_7(closure_0);
    const obj = closure_1_1(closure_1_2[27]);
    closure_1_1(closure_1_2[21]).deleteSearchQuery(closure_5);
  }, items7);
  const items8 = [channelId];
  const effect5 = onChannelDeleted.useEffect(() => {
    const bestActiveInputForChannelId = channelId(isShowing[28]).getBestActiveInputForChannelId(channelId);
    if (bestActiveInputForChannelId != null) {
      bestActiveInputForChannelId.closeCustomKeyboard();
    }
  }, items8);
  if (null == stateFromStores) {
    return null;
  } else {
    obj = { value: null, children: null };
    obj[0] = tmp8(isSearchLocked(tmp2[13]).CHANNEL_DETAILS).analyticsLocations;
    obj1 = { gesture: null, children: null };
    obj1[0] = searchSuggestionsGesture.gesture;
    let obj2 = { style: null, accessibilityViewIsModal: true, onAccessibilityEscape: null, children: null };
    const items9 = [tmp.detailsContainer, memo];
    obj2[0] = items9;
    obj2[2] = onBackPress;
    let obj3 = { style: null, children: null };
    if (isSearchLocked) {
      const items10 = [, ];
      ({ searchLocked: arr15[0], autocompleteSuggestions: arr15[1] } = tmp);
      obj3[0] = items10;
      tmp = tmp7(tmp2[30]);
      const obj4 = { ref: null, channelId: null, guildId: null, onSuggestionsLayoutMesure: null, onBackPress: null, suggestionsDismissed: null, setSuggestionsDismissed: null, showBackButton: null };
      obj4[0] = ref;
      obj4[1] = channelId;
      obj4[2] = guild_id;
      obj4[3] = onLayoutMeasure;
      obj4[4] = onBackPress;
      obj4[5] = dismissed;
      obj4[6] = setDismissed;
      if (!isAndroidResult) {
        isAndroidResult = isScreenReaderEnabled;
      }
      if (!isAndroidResult) {
        obj = obj(tmp2[18]);
        isAndroidResult = obj.isAndroid();
      }
      if (isAndroidResult) {
        isAndroidResult = null != onBackPress;
      }
      obj4[7] = isAndroidResult;
      obj3[1] = tmp25(tmp, obj4);
      let tmp25Result = tmp25(tmp27, obj3);
      obj3 = [tmp25Result, ];
      tmp7 = tmp7(tmp2[31]);
      const obj5 = { searchContext: null, width: null };
      obj5[0] = channelDetailsSearchContext;
      obj5[1] = componentWidth;
      tmp2 = tmp25(tmp7, obj5);
      obj3[1] = tmp2;
      obj2[3] = obj3;
      let tmp29 = obj2;
    } else {
      obj3[0] = tmp.newHeader;
      const obj6 = { ref: null, channel: null, onBackPress: null, onSuggestionsLayoutMeasure: null, suggestionsDismissed: null, setSuggestionsDismissed: null, componentWidth: null };
      obj6[0] = ref;
      obj6[1] = stateFromStores;
      obj6[2] = onBackPress;
      obj6[3] = onLayoutMeasure;
      obj6[4] = dismissed;
      obj6[5] = setDismissed;
      obj6[6] = componentWidth;
      const items11 = [tmp25(tmp7(tmp2[32]), obj6), ];
      const obj7 = { style: null, children: null };
      obj7[0] = animatedStyle;
      const obj8 = { style: null, onLayout: null, children: null };
      obj8[0] = tmp.information;
      obj8[1] = callback;
      const obj9 = { channel: null };
      obj9[0] = stateFromStores;
      const items12 = [tmp25(tmp7(tmp2[33]), obj9), , ];
      const obj10 = { channel: null, containerStyle: null };
      obj10[0] = stateFromStores;
      obj10[1] = tmp.linkedLobby;
      items12[1] = tmp25(tmp7(tmp2[34]), obj10);
      tmp25Result = null;
      if (!stateFromStores.isPrivate()) {
        const obj11 = { channel: null, textAlign: "left", initialExpanded: null };
        obj11[0] = stateFromStores;
        obj11[2] = flag;
        tmp25Result = tmp25(tmp7(tmp2[35]), obj11);
      }
      items12[2] = tmp25Result;
      obj8[2] = items12;
      obj7[1] = tmp26(tmp7(tmp2[23]).View, obj8);
      items11[1] = tmp25(tmp7(tmp2[23]).View, obj7);
      obj3[1] = items11;
      const items13 = [tmp26(tmp27, obj3), ];
      const obj12 = { freeze: null, children: null };
      obj12[0] = !isShowing;
      const obj13 = { style: null, collapsable: false, children: null };
      obj13[0] = tmp.search;
      const obj14 = { searchContext: null, width: null };
      obj14[0] = channelDetailsSearchContext;
      obj14[1] = componentWidth;
      obj13[2] = tmp25(tmp7(tmp2[31]), obj14);
      obj12[1] = tmp25(tmp27, obj13);
      items13[1] = tmp25(obj(tmp2[36]).Freeze, obj12);
      obj2[3] = items13;
      tmp29 = obj2;
    }
    obj1[1] = closure_12(stateFromStores, tmp29);
    obj1 = tmp25(obj(tmp2[29]).GestureDetector, obj1);
    obj[1] = obj1;
    sharedValue(obj(tmp2[12]).AnalyticsLocationProvider, obj);
  }
});
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetails.tsx");

export default memoResult;