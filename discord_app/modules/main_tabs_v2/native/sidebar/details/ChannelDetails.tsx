// === Module 19028: ChannelDetails ===

// Module 19028 (ChannelDetails)
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7183 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7387 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7412 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 14119 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 14144 */;
import SearchActionCreatorsDefault from "SearchActionCreators" /* 14153 */;
import noop from "module_19" /* 19 */;
import SearchQueryStore from "SearchQueryStore" /* 14133 */;
import ChannelStore from "ChannelStore" /* 4989 */;

const require = globalThis.__r;

const _modDef1652 = tmp7(1652);
const ChannelDetailsSearchBarDefault = tmp7(19030);
const SearchScreenLayoutDefault = tmp7(19040);
const ChannelDetailsNavigationBarDefault = tmp7(19156);
const ChannelNameHeaderDefault = tmp7(19158);
const ChannelDetailsLinkedLobbyDefault = tmp7(19160);
const ChannelDetailsTopicDefault = tmp7(19161);
require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const ChannelDetailsStore = fn(9915);
({ deleteChannelDetailsSearchState: metroImportDefault, useChannelDetailsSearchActiveSource: closure_8, useIsChannelDetailsSearchActive: closure_9 } = ChannelDetailsStore);
const ChannelDetailsConstants = fn(10258);
({ SPRING_CHANNEL_HEADER: closure_10, CHANNEL_DETAILS_TOP_MARGIN } = ChannelDetailsConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
const createStyles = fn(5140);
let obj = { detailsContainer: null, information: null, linkedLobby: null, search: null, searchLocked: null, autocompleteSuggestions: null, newHeader: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.backgroundColor = nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND;
obj3.flex = 1;
obj.detailsContainer = obj3;
obj.information = { marginHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, paddingTop: PX_8 };
const obj4 = { marginHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, paddingTop: PX_8 };
obj.linkedLobby = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_4 };
obj.search = { flex: 1, flexGrow: 1 };
let obj5 = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_4 };
obj.searchLocked = { marginTop: CHANNEL_DETAILS_TOP_MARGIN, marginBottom: nativeDefault.space.PX_16 };
obj.autocompleteSuggestions = { zIndex: 10 };
let obj6 = { marginTop: CHANNEL_DETAILS_TOP_MARGIN, marginBottom: nativeDefault.space.PX_16 };
obj.newHeader = { paddingBottom: nativeDefault.space.PX_12, zIndex: 10 };
let closure_14 = createStyles.createStyles(obj);
let closure_15 = { code: "(function ChannelDetailsTsx1(){let[headerHeight,isSearchActive,withTiming,timingFast,withSpring,SPRING_CHANNEL_HEADER]=this.__closure;const height=headerHeight.get();return{position:'relative',pointerEvents:isSearchActive?'none':'auto',opacity:withTiming(isSearchActive?0:1,timingFast,'animate-always'),height:height!=null&&height>=0?withSpring(isSearchActive?0:height,{...SPRING_CHANNEL_HEADER,clamp:{min:0,max:height}}):undefined};})" };
let obj7 = { paddingBottom: nativeDefault.space.PX_12, zIndex: 10 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetails.tsx");

export default noop.memo(function ChannelDetails(channelId) {
  channelId = channelId.channelId;
  _require = channelId;
  const isSearchLocked = channelId.isSearchLocked;
  importDefault = isSearchLocked;
  ({ onBackPress, componentWidth, isShowing } = channelId);
  if (isShowing === undefined) {
    isShowing = true;
  }
  dependencyMap = isShowing;
  const onChannelDeleted = channelId.onChannelDeleted;
  noop = onChannelDeleted;
  let flag = channelId.expandTopic;
  if (flag === undefined) {
    flag = false;
  }
  c5 = undefined;
  closure_6 = undefined;
  closure_7 = undefined;
  let ref;
  let nativeStackNavigation;
  let context;
  let top;
  let sharedValue;
  let tmp = closure_14();
  let obj = _require;
  let tmp33Result4 = dependencyMap;
  items = [closure_6];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(c0));
  c4 = stateFromStores;
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  const items1 = [stateFromStores, onChannelDeleted];
  const effect = noop.useEffect(() => {
    if (null == c4) {
      if (c3 != null) {
        tmp();
      }
    }
  }, items1);
  let obj2 = require("initialize");
  const channelDetailsSearchContext = obj(14080).useChannelDetailsSearchContext(channelId, guild_id);
  const objResult = obj(14080);
  const searchSuggestionsGesture = obj(19029).useSearchSuggestionsGesture(channelDetailsSearchContext);
  let tmp7 = importDefault;
  ({ gesture, detectorRef, suggestionsContext } = searchSuggestionsGesture);
  const objResult6 = obj(19029);
  const tmp9 = nativeStackNavigation(channelId);
  closure_6 = tmp9;
  const tmp10 = ref(channelId);
  closure_7 = tmp10;
  ref = noop.useRef(null);
  const tmp8 = useAnalyticsLocationsDefault;
  nativeStackNavigation = obj(1499).useNativeStackNavigation();
  context = noop.useContext(obj(14231).SwipeForMemberListContext);
  const objResult7 = obj(1499);
  const isScreenReaderEnabled = obj(5390).useIsScreenReaderEnabled();
  let isAndroidResult = useIsWindowLargeDefault();
  top = useSafeAreaInsetsDefault().top;
  const items2 = [top, context];
  const memo = noop.useMemo(() => {
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
  const layoutEffect = noop.useLayoutEffect(() => _undefined(_undefined2[21]).trackAppUIViewed(), []);
  const items3 = [tmp9, isSearchLocked, tmp10, channelDetailsSearchContext];
  const effect1 = noop.useEffect(() => {
    if (!c1) {
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
          if (!SearchQueryStore.isInitialSearchQuery(c5)) {
            SearchPlatformActionCreatorsDefault.updateSearchQuery(c5, (reset) => reset.reset());
            const initialMessages = SearchPlatformUtilsDefault.fetchInitialMessages(c5);
          }
        }
      }
    }
  }, items3);
  const objResult8 = obj(5390);
  sharedValue = obj(1652).useSharedValue(undefined);
  const items4 = [sharedValue];
  const callback = noop.useCallback((nativeEvent) => {
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
  const objResult9 = obj(1652);
  const items5 = [closure_15, sharedValue, tmp9, obj(5370).withTiming, obj(5373).timingFast, obj(5761).withSpring, context];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27] = items5;
  class ChannelDetailsTsx1 {
    constructor() {
      value = closure_0.get();
      tmp2 = closure_1;
      str = "auto";
      if (closure_1) {
        str = "none";
      }
      obj = { position: "relative", pointerEvents: str, opacity: null, height: null };
      num = 1;
      tmp3 = closure_2;
      if (tmp2) {
        num = 0;
      }
      obj.opacity = tmp3(num, closure_3, "animate-always");
      tmp5Result = undefined;
      if (null != value) {
        num2 = 0;
        if (value >= 0) {
          num3 = 0;
          tmp5 = closure_4;
          if (!tmp2) {
            num3 = value;
          }
          obj1 = {};
          tmp6 = closure_5;
          tmp7 = obj1;
          merged = Object.assign(closure_5);
          range = { min: 0, max: null };
          range.max = value;
          obj1.clamp = range;
          tmp5Result = tmp5(num3, obj1);
        }
      }
      obj.height = tmp5Result;
      return obj;
    }
  }
  const items6 = [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27];
  ChannelDetailsTsx1.__closure = items6;
  ChannelDetailsTsx1.__workletHash = 13793252970861;
  ChannelDetailsTsx1.__initData = tmp21;
  const items7 = [channelDetailsSearchContext];
  const animatedStyle = obj(1652).useAnimatedStyle(ChannelDetailsTsx1);
  const effect2 = obj4.useEffect(() => {
    const result = SearchActionCreatorsDefault.initializeAutocomplete(c5);
    const result1 = SearchPlatformActionCreatorsDefault.initializeSearchQuery(c5);
  }, items7);
  const items8 = [channelDetailsSearchContext, isShowing];
  const effect3 = obj4.useEffect(() => {
    if (c2) {
      const result = SearchActionCreatorsDefault.clearAllSearchMesssages();
      SearchPlatformActionCreatorsDefault.updateSearchQuery(c5, (reset) => reset.reset());
    }
  }, items8);
  const items9 = [channelId, channelDetailsSearchContext];
  const effect4 = obj4.useEffect(() => () => {
    const result = c1(14153).clearAllSearchMesssages();
    closure_7(_undefined);
    const obj = c1(14153);
    c1(14144).deleteSearchQuery(closure_1_5);
  }, items9);
  const items10 = [channelId, nativeStackNavigation];
  const effect5 = obj4.useEffect(() => {
    if ("channel-details-navigator" === nativeStackNavigation.getId()) {
      return nativeStackNavigation.addListener("transitionEnd", (data) => {
        if (!data.data.closing) {
          const bestActiveInputForChannelId = c0(dependencyMap[29]).getBestActiveInputForChannelId(_undefined);
          if (bestActiveInputForChannelId != null) {
            bestActiveInputForChannelId.closeCustomKeyboard();
          }
          const obj = c0(dependencyMap[29]);
        }
      });
    }
  }, items10);
  if (null == stateFromStores) {
    return null;
  } else {
    const obj3 = { value: tmp8(AnalyticsLocationDefault.CHANNEL_DETAILS).analyticsLocations, children: null };
    let obj5 = { value: suggestionsContext, children: null };
    let obj6 = { gesture, children: null };
    const obj7 = { ref: detectorRef, style: null, accessibilityViewIsModal: true, onAccessibilityEscape: null, children: null };
    const items11 = [tmp.detailsContainer, memo];
    obj7.style = items11;
    obj7.onAccessibilityEscape = onBackPress;
    let obj8 = { style: null, children: null };
    if (isSearchLocked) {
      const items12 = [, ];
      ({ searchLocked: arr17[0], autocompleteSuggestions: arr17[1] } = tmp);
      obj8.style = items12;
      tmp = ChannelDetailsSearchBarDefault;
      const obj9 = { ref, channelId, guildId: guild_id, onBackPress, showBackButton: null };
      if (!isAndroidResult) {
        isAndroidResult = isScreenReaderEnabled;
      }
      if (!isAndroidResult) {
        obj = obj(1377);
        isAndroidResult = obj.isAndroid();
      }
      if (isAndroidResult) {
        isAndroidResult = null != onBackPress;
      }
      obj9.showBackButton = isAndroidResult;
      obj8.children = tmp33(tmp, obj9);
      obj8 = [, ];
      obj8[0] = tmp33(tmp35, obj8);
      tmp7 = SearchScreenLayoutDefault;
      const obj10 = { searchContext: channelDetailsSearchContext, width: componentWidth };
      tmp33Result4 = tmp33(tmp7, obj10);
      obj8[1] = tmp33Result4;
      obj7.children = obj8;
      let tmp37 = obj7;
      const tmp33Result = tmp33(tmp35, obj8);
    } else {
      obj8[0] = tmp.newHeader;
      const obj11 = { ref, channel: stateFromStores, onBackPress, componentWidth };
      const items13 = [tmp33(ChannelDetailsNavigationBarDefault, obj11), ];
      const obj12 = { style: animatedStyle, children: null };
      const obj13 = { style: tmp.information, onLayout: callback, children: null };
      const obj14 = { channel: stateFromStores };
      const items14 = [tmp33(ChannelNameHeaderDefault, obj14), , , ];
      const obj15 = { channel: stateFromStores };
      items14[1] = tmp33(obj(19159).PinotChannelDetailsLabel, obj15);
      const obj16 = { channel: stateFromStores, containerStyle: tmp.linkedLobby };
      items14[2] = tmp33(ChannelDetailsLinkedLobbyDefault, obj16);
      let tmp33Result5 = null;
      if (!stateFromStores.isPrivate()) {
        const obj17 = { channel: stateFromStores, textAlign: "left", initialExpanded: flag };
        tmp33Result5 = tmp33(ChannelDetailsTopicDefault, obj17);
      }
      items14[3] = tmp33Result5;
      obj13.children = items14;
      obj12.children = tmp34(tmp35, obj13);
      items13[1] = tmp33(_modDef1652.View, obj12);
      obj8[1] = items13;
      const items15 = [tmp34(tmp35, obj8), ];
      const obj18 = { freeze: !isShowing, children: null };
      const obj19 = { style: tmp.search, collapsable: false, children: null };
      const obj20 = { searchContext: channelDetailsSearchContext, width: componentWidth };
      obj19.children = tmp33(SearchScreenLayoutDefault, obj20);
      obj18.children = tmp33(tmp35, obj19);
      items15[1] = tmp33(obj(6121).Freeze, obj18);
      obj7.children = items15;
      tmp37 = obj7;
    }
    obj6.children = sharedValue(c4, tmp37);
    obj6 = tmp33(obj(5420).GestureDetector, obj6);
    obj5.children = obj6;
    obj5 = tmp33(obj(19029).SearchSuggestionsProvider, obj5);
    obj3.children = obj5;
    top(obj(7387).AnalyticsLocationProvider, obj3);
  }
});