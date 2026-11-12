// === Module 18978: InterestGamePicker ===

// Module 18978 (InterestGamePicker)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _modDef1652 from "module_1652" /* 1652 */;
import _modDef2553 from "module_2553" /* 2553 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5252 */;
import timing_timing from "timing/timing" /* 5485 */;
import timingPresets from "timingPresets" /* 5488 */;
import HapticUtils from "HapticUtils" /* 5491 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5952 */;
import useKeyboardIsOpenDefault from "useKeyboardIsOpen" /* 7577 */;
import useMeasuredLayoutDefault from "useMeasuredLayout" /* 7929 */;
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 9312 */;
import useGame2 from "useGame" /* 9466 */;
import useGameRecordsDefault from "useGameRecords" /* 12050 */;
import InterestGameCoverDefault from "InterestGameCover" /* 18980 */;
import InterestTileEdgeDefault from "InterestTileEdge" /* 18983 */;
import useInterestGameSearchDefault from "useInterestGameSearch" /* 18984 */;
import useInterestRowVisibilityDefault from "useInterestRowVisibility" /* 18985 */;
import InterestSearchShadowDefault from "InterestSearchShadow" /* 18987 */;
import InterestGameTrayDefault from "InterestGameTray" /* 18989 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import GameStore from "GameStore" /* 2138 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ Keyboard: hasOwnProperty, PixelRatio: closure_6, Pressable: metroImportDefault, View: closure_8 } = get_ActivityIndicator);
const InterestGamePickerConstants = fn(18979);
({ FOOTER_BORDER_WIDTH: closure_11, GRID_COLUMNS: closure_12, GRID_GAP: map1, MAX_SELECTIONS: closure_14, MIN_SELECTIONS: closure_15, SCREEN_HORIZONTAL_PADDING: closure_16, GRID_SELECTED_BORDER_WIDTH: closure_17, GRID_SELECTED_GAP_WIDTH: closure_18, TILE_ASPECT_RATIO: closure_19, TRAY_ENTER_MS: closure_20, TRAY_EXIT_MS: closure_21 } = InterestGamePickerConstants);
const jsxProd = fn(21);
({ jsx: closure_22, jsxs: closure_23, Fragment: closure_24 } = jsxProd);
const createStyles = fn(5243);
let closure_25 = createStyles.createStyles((borderRadius, minWidth) => {
  const obj = { screen: { flex: 1 }, body: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, header: null, skip: null, content: null, empty: null, intro: null, subtitle: null, search: null, searchField: null, navLeading: null, navTitle: null, navActions: null, grid: null, gridRow: null, tileWrapper: null, selectedGlow: null, tile: null, selected: null, selectedInner: null, status: null, footerPosition: null, footer: null, footerContent: null, footerActions: null, nextButton: null };
  const obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  obj.header = { height: nativeDefault.space.PX_64, paddingHorizontal, paddingVertical: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
  const obj3 = { height: nativeDefault.space.PX_64, paddingHorizontal, paddingVertical: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
  obj.skip = { color: nativeDefault.colors.TEXT_BRAND };
  obj.content = { flexGrow: 1 };
  const obj4 = { color: nativeDefault.colors.TEXT_BRAND };
  obj.empty = { flex: 1, alignItems: "center", paddingTop: nativeDefault.space.PX_40, paddingHorizontal, gap: nativeDefault.space.PX_4 };
  const obj5 = { flex: 1, alignItems: "center", paddingTop: nativeDefault.space.PX_40, paddingHorizontal, gap: nativeDefault.space.PX_4 };
  obj.intro = { flexShrink: 0, alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16 };
  obj.subtitle = { textAlign: "center" };
  const obj6 = { flexShrink: 0, alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16 };
  obj.search = { flexShrink: 0, paddingHorizontal, paddingTop: 0, paddingBottom: nativeDefault.space.PX_16 };
  const obj7 = { flexShrink: 0, paddingHorizontal, paddingTop: 0, paddingBottom: nativeDefault.space.PX_16 };
  obj.searchField = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.md };
  obj.navLeading = { minWidth, flexShrink: 0 };
  obj.navTitle = { flex: 1, alignSelf: "stretch", justifyContent: "center", minWidth: 0 };
  obj.navActions = { minWidth, flexShrink: 0, alignItems: "flex-end" };
  obj.grid = { gap, paddingHorizontal, paddingTop: 0 };
  obj.gridRow = { flexDirection: "row" };
  obj.tileWrapper = { borderRadius };
  const obj8 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.md };
  const obj9 = { gap, paddingHorizontal, paddingTop: 0 };
  obj.selectedGlow = { shadowColor: nativeDefault.colors.BACKGROUND_BRAND, shadowOffset: { width: 0, height: 2 }, shadowRadius: 33, shadowOpacity: 0.2, elevation: 8 };
  const obj10 = { shadowColor: nativeDefault.colors.BACKGROUND_BRAND, shadowOffset: { width: 0, height: 2 }, shadowRadius: 33, shadowOpacity: 0.2, elevation: 8 };
  obj.tile = { flex: 1, overflow: "hidden", borderRadius, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  const obj11 = { flex: 1, overflow: "hidden", borderRadius, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  obj.selected = { position: "absolute", inset: 0, borderWidth: inset, borderRadius, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
  const obj12 = { position: "absolute", inset: 0, borderWidth: inset, borderRadius, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
  obj.selectedInner = { position: "absolute", inset, borderWidth, borderRadius: Math.max(0, borderRadius - inset), borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  const obj13 = { position: "absolute", inset, borderWidth, borderRadius: Math.max(0, borderRadius - inset), borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  obj.status = { alignItems: "center", gap: nativeDefault.space.PX_16, paddingHorizontal, paddingTop: nativeDefault.space.PX_40 };
  obj.footerPosition = { position: "absolute", bottom: 0, left: 0, right: 0 };
  const obj14 = { alignItems: "center", gap: nativeDefault.space.PX_16, paddingHorizontal, paddingTop: nativeDefault.space.PX_40 };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
  obj.footer = { borderTopWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal, paddingTop: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  const obj15 = { borderTopWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal, paddingTop: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  obj.footerContent = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_16 };
  const obj16 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_16 };
  obj.footerActions = { flexShrink: 0, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
  const obj17 = { flexShrink: 0, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
  obj.nextButton = { minWidth: nativeDefault.space.PX_96 + nativeDefault.space.PX_16 };
  return obj;
});
let closure_26 = { code: "(function InterestGamePickerTsx1(){let[selected,depth]=this.__closure;return{opacity:selected?0:1-Math.min(1,Math.max(0,depth.get())/0.2)};})" };
let closure_27 = { code: "(function InterestGamePickerTsx2(){let[unavailable,reduceMotion,withTiming,timingFast]=this.__closure;const opacity=unavailable?0.4:1;return{opacity:reduceMotion?opacity:withTiming(opacity,timingFast)};})" };
let closure_28 = noop.memo(function StaticInterestGameTile(game) {
  game = game.game;
  _require = game;
  ({ width, selected, unavailable, styles, onPress: c1 } = game);
  ({ reduceMotion, radius } = game);
  const sharedValue = require("module_1652").useSharedValue(0);
  dependencyMap = sharedValue;
  const obj = require("module_1652");
  items = [closure_26, selected, sharedValue];
  _require = undefined;
  importDefault = undefined;
  [tmp4, tmp5, tmp6] = items;
  class InterestGamePickerTsx1 {
    constructor() {
      opacity = 0;
      if (!closure_0) {
        tmp = globalThis;
        _Math = Math;
        _Math2 = Math;
        tmp2 = closure_1;
        num2 = 0.2;
        num3 = 1;
        opacity = 1 - Math.min(1, Math.max(0, closure_1.get()) / 0.2);
      }
      return { opacity };
    }
  }
  const items1 = [tmp5, tmp6];
  InterestGamePickerTsx1.__closure = items1;
  InterestGamePickerTsx1.__workletHash = 14342270959027;
  InterestGamePickerTsx1.__initData = tmp4;
  const animatedStyle = require("module_1652").useAnimatedStyle(InterestGamePickerTsx1);
  const obj2 = require("module_1652");
  const items2 = [closure_27, unavailable, reduceMotion, require("timing/timing").withTiming, require("timingPresets").timingFast];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  [tmp8, tmp9, tmp10, tmp11, tmp12] = items2;
  class InterestGamePickerTsx2 {
    constructor() {
      num = 1;
      if (closure_0) {
        num = 0.4;
      }
      opacity = num;
      if (!closure_1) {
        tmp2 = closure_2;
        tmp3 = closure_3;
        opacity = closure_2(num, closure_3);
      }
      return { opacity };
    }
  }
  const items3 = [tmp9, tmp10, tmp11, tmp12];
  InterestGamePickerTsx2.__closure = items3;
  InterestGamePickerTsx2.__workletHash = 11929229272400;
  InterestGamePickerTsx2.__initData = tmp8;
  const obj3 = { accessibilityLabel: game.name, accessibilityRole: "button", accessibilityState: { disabled: unavailable, selected }, accessibilityHint: null, onPress: null, onPressIn: null, onPressOut: null, style: null, children: null };
  let formatToPlainStringResult;
  const animatedStyle1 = require("module_1652").useAnimatedStyle(InterestGamePickerTsx2);
  if (unavailable) {
    const intl = tmp(1113).intl;
    const obj4 = { count: max, max };
    formatToPlainStringResult = intl.formatToPlainString(_modDef2553.v9v0uY, obj4);
  }
  obj3.accessibilityHint = formatToPlainStringResult;
  obj3.onPress = function onPress() {
    return _undefined2(_undefined.id);
  };
  obj3.onPressIn = function onPressIn() {
    return _undefined3.set(timing_timing.withTiming(1, timingPresets.timingFast));
  };
  obj3.onPressOut = function onPressOut() {
    return _undefined3.set(timing_timing.withTiming(0, timingPresets.timingFast));
  };
  const items4 = [styles.tileWrapper, , ];
  let selectedGlow = selected;
  if (selected) {
    selectedGlow = styles.selectedGlow;
  }
  items4[1] = selectedGlow;
  const size = { width, height: closure_6.roundToNearestPixel(width / closure_19) };
  items4[2] = size;
  obj3.style = items4;
  const obj5 = { style: styles.screen, children: null };
  const obj6 = { style: styles.tile, children: null };
  const obj7 = { style: null, children: closure_22(InterestGameCoverDefault, { game, width }) };
  const items5 = [styles.screen, animatedStyle1];
  obj7.style = items5;
  const items6 = [closure_22(_modDef1652.View, obj7), closure_22(InterestTileEdgeDefault, { radius, style: animatedStyle })];
  obj6.children = items6;
  const items7 = [closure_23(closure_8, obj6), ];
  if (selected) {
    const obj8 = { children: null };
    const obj9 = { pointerEvents: "none", style: styles.selected };
    const items8 = [closure_22(closure_8, obj9), ];
    const obj10 = { pointerEvents: "none", style: styles.selectedInner };
    items8[1] = closure_22(closure_8, obj10);
    obj8.children = items8;
    selected = closure_23(closure_24, obj8);
  }
  items7[1] = selected;
  obj5.children = items7;
  obj3.children = closure_23(closure_8, obj5);
  return closure_22(closure_7, obj3);
});
let closure_29 = { code: "(function InterestGamePickerTsx3(){let[reduceMotion,trayProgress,footerHeight,tokens]=this.__closure;return{opacity:reduceMotion?trayProgress.get():1,transform:[{translateY:reduceMotion?0:(1-trayProgress.get())*(footerHeight>0?footerHeight:tokens.space.PX_128)}]};})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGamePicker.tsx");

export default function InterestGamePicker(catalog) {
  catalog = catalog.catalog;
  _require = catalog;
  ({ title, minSelection } = catalog);
  ({ onRowSeen, subtitle } = catalog);
  if (minSelection === undefined) {
    minSelection = ref1;
  }
  const onContinue = catalog.onContinue;
  importDefault = onContinue;
  const onSkip = catalog.onSkip;
  dependencyMap = onSkip;
  let initialSelection = catalog.initialSelection;
  if (initialSelection === undefined) {
    initialSelection = [];
  }
  let _slicedToArray = initialSelection;
  const onGameToggle = catalog.onGameToggle;
  const onSearch = catalog.onSearch;
  c6 = undefined;
  c9 = undefined;
  first = undefined;
  closure_11 = undefined;
  first1 = undefined;
  closure_13 = undefined;
  let max;
  let stateFromStores;
  let roundToNearestPixelResult1;
  let columnGap;
  let ref4;
  let bound;
  let results;
  let error;
  let onSelect;
  closure_31 = undefined;
  closure_32 = undefined;
  let memo;
  let memo2;
  let memo4;
  let memo3;
  let isLoading;
  let memo6;
  let memo7;
  length = undefined;
  let first2;
  closure_42 = undefined;
  closure_43 = undefined;
  let sharedValue;
  let result1;
  closure_49 = undefined;
  closure_50 = undefined;
  const roundToNearestPixelResult = c6.roundToNearestPixel(require("useToken").useToken(nativeDefault.modules.mobile.INPUT_FIELD_RADIUS_LG));
  c6 = roundToNearestPixelResult;
  const tmp6 = _slicedToArray(onGameToggle.useState(0), 2);
  closure_7 = tmp6[1];
  const tmp7 = ref4(roundToNearestPixelResult, Math.max(nativeDefault.space.PX_64, tmp6[0]));
  const gridRow = tmp7;
  const bottom = useSafeAreaInsetsDefault().bottom;
  let obj2 = require("useToken");
  const tmp5 = _slicedToArray;
  [tmp9, c9] = onGameToggle.useState(0);
  [first, closure_11] = onGameToggle.useState(() => {
    const set = new Set(c3);
    return Array.from(new Set(c3)).slice(0, gesture);
  });
  const tmp12 = _slicedToArray(onGameToggle.useState(""), 2);
  [first1, closure_13] = onGameToggle.useState(false);
  const tmp8 = _slicedToArray(onGameToggle.useState(0), 2);
  [tmp16, c14] = onGameToggle.useState(0);
  ref1 = onGameToggle.useRef(null);
  ref = onGameToggle.useRef(false);
  onGameToggle.useRef(false);
  const tmp18 = useKeyboardIsOpenDefault();
  const tmp15 = _slicedToArray(onGameToggle.useState(0), 2);
  const appEntryKey = require("AppEntryKeyContext").useAppEntryKey();
  const callback = onGameToggle.useCallback(() => {
    closure_17.current = false;
    const current = ref1.current;
    if (current != null) {
      current.blur();
    }
    closure_13(false);
  }, []);
  items = [callback];
  const callback1 = onGameToggle.useCallback(() => {
    if (ref.current) {
      closure_17.current = true;
    } else {
      callback();
    }
  }, items);
  let items1 = [callback];
  const callback2 = onGameToggle.useCallback(() => {
    closure_16.current = false;
    if (ref2.current) {
      callback();
    }
  }, items1);
  const items2 = [appEntryKey, callback1];
  const effect = onGameToggle.useEffect(() => {
    const keyboardIsOpen = _undefined(_undefined3[19]).getKeyboardIsOpen({ appEntryKey });
    const obj = _undefined(_undefined3[19]);
    const obj2 = { appEntryKey };
    return _undefined(_undefined3[19]).subscribeToKeyboardIsOpen((arg0) => {
      let tmp = closure_0;
      if (closure_0) {
        tmp = !arg0;
      }
      closure_0 = arg0;
      if (tmp) {
        callback1();
      }
    }, { appEntryKey });
  }, items2);
  const tmp24 = useMeasuredLayoutDefault();
  const width = tmp24.width;
  let num = 0;
  ({ ref, onLayout } = tmp24);
  if (undefined !== width) {
    num = width;
  }
  onGameToggle.useRef(null);
  let obj4 = require("AppEntryKeyContext");
  const items3 = [c9];
  stateFromStores = require("initialize").useStateFromStores(items3, () => _undefined5.useReducedMotion);
  let result = (num - 2 * ref - closure_13 * (first1 - 1)) / first1;
  const rounded = Math.floor(result * obj.get());
  roundToNearestPixelResult1 = obj.roundToNearestPixel(rounded / obj.get());
  columnGap = closure_13 + (result - roundToNearestPixelResult1) * first1 / (first1 - 1);
  ref4 = obj3.useRef(false);
  if (Number.isFinite(minSelection)) {
    const _Math = Math;
    const _Math2 = Math;
    bound = Math.min(Math.max(minSelection, ref1), max);
  } else {
    bound = ref1;
  }
  const tmp32 = useInterestGameSearchDefault(tmp12[0]);
  results = tmp32.results;
  error = tmp32.error;
  onSelect = tmp32.onSelect;
  const items4 = [results];
  memo = obj3.useMemo(() => {
    items = results;
    if (results == null) {
      items = [];
    }
    const found = items.filter(GameAutocompleteUtils.isGameAutocompleteResultAllowedInGameWidgets);
    return found.map((id) => id.id);
  }, items4);
  const tmp34 = tmp12[0].trim().length > 0;
  const items5 = [memo, catalog, first];
  const memo1 = obj3.useMemo(() => {
    items = [...first];
    return Array.from(new Set(items));
  }, items5);
  const tmp36 = useGameRecordsDefault(memo1);
  closure_31 = tmp36;
  let tmp37 = tmp34;
  if (tmp34) {
    tmp37 = null == error;
  }
  closure_32 = tmp37;
  let tmp38 = catalog;
  if (tmp37) {
    tmp38 = memo;
  }
  memo = tmp38;
  const tmpResult = require("initialize");
  const items6 = [first];
  const items7 = [tmp38];
  const stateFromStores1 = require("initialize").useStateFromStores(items6, () => memo.some((item) => null == game.getGame(item) && !game.hasNoData(item) && !game.didFetchingFail(item)), items7);
  const tmpResult7 = require("initialize");
  const items8 = [first];
  const items9 = [catalog];
  const items10 = [tmp36];
  const stateFromStores2 = require("initialize").useStateFromStores(items8, () => _undefined.some((item) => first.didFetchingFail(item)), items9);
  memo2 = obj3.useMemo(() => new Map(closure_31.map((id) => {
    items = [id.id, id];
    return items;
  })), items10);
  const items11 = [catalog, memo2];
  memo3 = obj3.useMemo(() => {
    closure_0 = memo2;
    return _undefined.flatMap((item) => {
      value = closure_0.get(item);
      if (null != value) {
        if (!obj.isAgeRestrictedContentClassification(value.contentClassification)) {
          items = [value];
        }
        return items;
      }
      items = [];
    });
  }, items11);
  const items12 = [memo, memo2];
  memo4 = obj3.useMemo(() => {
    closure_0 = memo2;
    return memo.flatMap((item) => {
      value = closure_0.get(item);
      if (null != value) {
        if (!obj.isAgeRestrictedContentClassification(value.contentClassification)) {
          items = [value];
        }
        return items;
      }
      items = [];
    });
  }, items12);
  if (tmp37) {
    memo3 = memo4;
  }
  const items13 = [memo3];
  const memo5 = obj3.useMemo(() => Array.from({ length: Math.ceil(memo3.length / application_id) }, (arg0, arg1) => memo3.slice(arg1 * first1, (arg1 + 1) * first1)), items13);
  isLoading = tmp34;
  if (tmp34) {
    isLoading = tmp32.isLoading;
  }
  if (!isLoading) {
    isLoading = stateFromStores1;
  }
  let tmp70Result = tmp34;
  if (tmp34) {
    tmp70Result = !isLoading;
  }
  if (tmp70Result) {
    tmp70Result = null == error;
  }
  if (tmp70Result) {
    tmp70Result = 0 === memo3.length;
  }
  let tmp43 = !tmp34;
  let tmp70Result2 = tmp43;
  if (!tmp34) {
    tmp70Result2 = !isLoading;
  }
  if (tmp70Result2) {
    tmp70Result2 = 0 === memo3.length;
  }
  const items14 = [memo2, first];
  memo6 = obj3.useMemo(() => {
    closure_0 = memo2;
    return first.flatMap((item) => {
      value = closure_0.get(item);
      if (null != value) {
        if (!obj.isAgeRestrictedContentClassification(value.contentClassification)) {
          items = [value];
        }
        return items;
      }
      items = [];
    });
  }, items14);
  const items15 = [memo6];
  memo7 = obj3.useMemo(() => memo6.map((id) => id.id), items15);
  length = memo7.length;
  const tmp5Result = tmp5(onGameToggle.useState(memo6), 2);
  first2 = tmp5Result[0];
  let tmp47 = memo6.length > 0;
  if (tmp47) {
    tmp47 = memo6.length !== first2.length || memo6.some((item, index) => item !== first2[index]);
    const tmp48 = memo6.length !== first2.length || memo6.some((item, index) => item !== first2[index]);
  }
  if (tmp47) {
    tmp5Result[1](memo6);
  }
  closure_42 = tmp50;
  const tmp45 = memo7.length >= bound;
  const tmpResult8 = require("initialize");
  if (!tmp34) {
    tmp43 = !isLoading;
  }
  let num2 = 0;
  if (length > 0 && !tmp18 && !first1) {
    let tmp52 = null;
    if (tmp9 > 0) {
      tmp52 = tmp9;
    }
    num2 = tmp52;
  }
  const tmp3ResultResult = useInterestRowVisibilityDefault(onRowSeen, tmp43, num2);
  closure_43 = tmp3ResultResult;
  const tmp3Result = useInterestRowVisibilityDefault;
  const interestScrollHeader = require("InterestScrollHeader").useInterestScrollHeader(tmp3ResultResult.onScroll);
  ({ scrollY, onScroll } = interestScrollHeader);
  const tmpResult9 = require("InterestScrollHeader");
  sharedValue = require("module_1652").useSharedValue(0);
  const tmpResult10 = require("module_1652");
  const items16 = [onSelect, stateFromStores, sharedValue, tmp9, nativeDefault];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  [tmp56, tmp57, tmp58, tmp59, tmp60] = items16;
  class InterestGamePickerTsx3 {
    constructor() {
      num = 1;
      tmp = closure_0;
      if (closure_0) {
        tmp2 = closure_1;
        num = closure_1.get();
      }
      obj = { opacity: num, transform: null };
      num2 = 0;
      if (!tmp) {
        tmp3 = closure_1;
        PX_128 = closure_2;
        diff = 1 - closure_1.get();
        if (closure_2 <= 0) {
          tmp5 = closure_3;
          PX_128 = closure_3.space.PX_128;
        }
        num2 = diff * PX_128;
      }
      items = [];
      items[0] = { translateY: num2 };
      obj.transform = items;
      return obj;
    }
  }
  const items17 = [tmp57, tmp58, tmp59, tmp60];
  InterestGamePickerTsx3.__closure = items17;
  InterestGamePickerTsx3.__workletHash = 5612593946705;
  InterestGamePickerTsx3.__initData = tmp56;
  const items18 = [sharedValue, length > 0 && !tmp18 && !first1, stateFromStores];
  const animatedStyle = require("module_1652").useAnimatedStyle(InterestGamePickerTsx3);
  const effect1 = obj3.useEffect(() => {
    let num = 0;
    if (closure_42) {
      num = 1;
    }
    if (stateFromStores) {
      const obj2 = { duration: 100 };
      let str = "respect-motion-settings";
      if (tmp3) {
        str = "animate-always";
      }
      const result = sharedValue.set(obj.withTiming(num, obj2, str));
    }
    obj = timing_timing;
  }, items18);
  onGameToggle.useRef(length);
  const items19 = [length];
  const effect2 = obj3.useEffect(() => {
    if (ref5.current !== length) {
      ref5.current = length;
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const intl = util.intl;
      const obj = { count: length, max };
      AccessibilityAnnouncer.announce(intl.formatToPlainString(_modDef2553.v9v0uY, obj));
    }
  }, items19);
  const tmpResult11 = require("module_1652");
  result1 = require("GameAutocompleteUtils").normalizeGameAutocompleteQuery(str);
  onGameToggle.useRef(null);
  const items20 = [result1, isLoading, error, results, memo4.length, onSearch];
  const effect3 = obj3.useEffect(() => {
    if (null != result1) {
      let tmp2 = isLoading;
      if (!isLoading) {
        tmp2 = null != error;
      }
      if (!tmp2) {
        tmp2 = null == results;
      }
      if (!tmp2) {
        tmp2 = ref6.current === result1;
      }
      if (!tmp2) {
        ref6.current = result1;
        if (onSearch != null) {
          tmp7(result1.length, memo4.length);
        }
      }
    } else {
      ref6.current = null;
    }
  }, items20);
  onGameToggle.useRef(first);
  const items21 = [onGameToggle, memo3];
  closure_49 = obj3.useCallback((arg0) => {
    closure_0 = arg0;
    if (!ref4.current) {
      const current = ref7.current;
      const hasItem = current.includes(arg0);
      if (hasItem) {
        if (hasItem) {
          let found = current.filter((item) => item !== closure_0);
        } else {
          found = [];
          found[HermesBuiltin.arraySpread(current, 0)] = arg0;
        }
        ref7.current = found;
        closure_11(found);
        const findIndexResult = memo3.findIndex((id) => id.id === closure_0);
        if (onGameToggle != null) {
          let tmp13 = null;
          if (-1 !== findIndexResult) {
            tmp13 = findIndexResult;
          }
          tmp11(arg0, tmp13, tmp3);
        }
      }
    }
  }, items21);
  closure_50 = tmp3(7724)((arg0) => {
    callback();
    hasOwnProperty.dismiss();
    const current = ref7.current;
    if (current.length >= max) {
      if (!current.includes(arg0)) {
        const _Date = Date;
        const timestamp = Date.now();
        ref3.current = timestamp;
        const intl = util.intl;
        const obj = { count: max, max };
        const formatToPlainStringResult = intl.formatToPlainString(_modDef2553.v9v0uY, obj);
        const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
        const obj4 = { text: formatToPlainStringResult };
        ToastActionCreatorsDefault.open("INTEREST_GAME_PICKER_LIMIT", obj4);
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(formatToPlainStringResult);
      }
    }
    if (closure_32) {
      onSelect(arg0);
    }
    closure_49(arg0);
  });
  const items22 = [bound, onContinue, memo7];
  const items23 = [onSkip, memo7];
  const callback3 = obj3.useCallback(() => {
    let current = ref4.current;
    if (!current) {
      current = memo7.length < bound;
    }
    if (!current) {
      ref4.current = true;
      _undefined2(memo7);
    }
  }, items22);
  const items24 = [callback];
  const callback4 = obj3.useCallback(() => {
    if (!ref4.current) {
      tmp.current = true;
      _undefined3(memo7);
    }
  }, items23);
  const items25 = [catalog];
  const callback5 = obj3.useCallback(() => {
    callback();
    hasOwnProperty.dismiss();
  }, items24);
  const obj5 = { style: tmp7.screen, children: null };
  const obj6 = { ref, onLayout, style: tmp7.body, children: null };
  const callback6 = obj3.useCallback(() => {
    const useGame = useGame2.useGame;
    items = [
      ...c0.map((item) => {
        items = [item, true];
        return items;
      })
    ];
    useGame.refetchMany.apply(items);
  }, items25);
  const obj7 = { top: true, children: null };
  const obj8 = { style: tmp7.header, children: null };
  const items26 = [stateFromStores(gridRow, { style: tmp7.navLeading }), , ];
  const obj9 = { style: tmp7.navLeading };
  const tmpResult12 = require("GameAutocompleteUtils");
  items26[1] = stateFromStores(gridRow, { style: tmp7.navTitle, collapsable: false, children: stateFromStores(require("InterestScrollHeader").InterestCompactTitle, { title, scrollY, collapseOffset: tmp16 }) });
  const obj11 = {
    style: tmp7.navActions,
    onLayout(nativeEvent) {
      return closure_7(nativeEvent.nativeEvent.layout.width);
    },
    children: null
  };
  const obj12 = { label: null, labelStyle: null, onPress: null };
  let intl = tmp(1113).intl;
  obj12.label = intl.string(require("util").t["5Wxrcd"]);
  obj12.labelStyle = tmp7.skip;
  obj12.onPress = callback4;
  obj11.children = stateFromStores(require("HeaderShared").HeaderTextButton, obj12);
  items26[2] = stateFromStores(gridRow, obj11);
  obj8.children = items26;
  obj7.children = roundToNearestPixelResult1(gridRow, obj8);
  const items27 = [stateFromStores(require("common/SafeAreaView").SafeAreaPaddingView, obj7), ];
  const obj13 = { stickyHeaderIndices: [1], onScroll, onLayout: tmp3ResultResult.onViewportLayout, scrollEventThrottle: 16, contentInsetAdjustmentBehavior: "never", style: tmp7.screen, contentContainerStyle: null, onScrollBeginDrag: null, onScrollEndDrag: null, onMomentumScrollEnd: null, keyboardDismissMode: "on-drag", keyboardShouldPersistTaps: "handled", automaticallyAdjustKeyboardInsets: false, children: null };
  const items28 = [tmp7.content, ];
  if (tmp18) {
    let num4 = 0;
    if (!tmp70Result) {
      num4 = tmp3(575).space.PX_16;
    }
    let sum = num4;
  } else {
    sum = bottom;
    if (0 !== length) {
      let num3 = 0;
      if (!tmp70Result) {
        num3 = tmp3(575).space.PX_32;
      }
      sum = tmp9 + num3;
    }
  }
  items28[1] = { paddingBottom: sum };
  obj13.contentContainerStyle = items28;
  obj13.onScrollBeginDrag = function onScrollBeginDrag() {
    closure_16.current = first1;
  };
  obj13.onScrollEndDrag = callback2;
  obj13.onMomentumScrollEnd = callback2;
  const obj14 = {
    style: tmp7.intro,
    collapsable: false,
    onLayout(nativeEvent) {
      return _undefined6(nativeEvent.nativeEvent.layout.height);
    },
    children: null
  };
  const items29 = [stateFromStores(require("Text/Text").Heading, { variant: "heading-xl/semibold", color: "text-strong", children: title }), stateFromStores(require("Text/Text").Text, { style: tmp7.subtitle, variant: "body-sm/normal", color: "text-default", lineBreakStrategyIOS: "push-out", textBreakStrategy: "balanced", children: subtitle })];
  obj14.children = items29;
  const items30 = [roundToNearestPixelResult1(gridRow, obj14), , ];
  const obj16 = { children: null };
  const obj17 = { style: tmp7.search, children: null };
  const items31 = [stateFromStores(InterestSearchShadowDefault, { scrollY, collapseOffset: tmp16 }), ];
  const obj18 = { style: tmp7.searchField, children: null };
  const obj19 = { ref: ref1, grow: false, spellCheck: false, autoComplete: "off", textContentType: "none", importantForAutofill: "no", accessibilityLabel: null, onChange: null, onFocus: null, onBlur: null, onSubmitEditing: null, placeholder: null };
  const intl2 = tmp(1113).intl;
  obj19.accessibilityLabel = intl2.string(_modDef2553["8Xenq+"]);
  obj19.onChange = tmp12[1];
  obj19.onFocus = function onFocus() {
    closure_13(true);
    closure_16.current = false;
    closure_17.current = false;
  };
  obj19.onBlur = callback1;
  obj19.onSubmitEditing = callback5;
  const intl3 = tmp(1113).intl;
  obj19.placeholder = intl3.string(_modDef2553["8Xenq+"]);
  obj18.children = stateFromStores(require("Search/SearchBar").SearchBar, obj19);
  items31[1] = stateFromStores(gridRow, obj18);
  obj17.children = items31;
  obj16.children = roundToNearestPixelResult1(gridRow, obj17);
  items30[1] = stateFromStores(gridRow, obj16);
  const obj20 = { style: tmp7.content, onLayout: tmp3ResultResult.onContentLayout, children: null };
  let tmp72Result = isLoading;
  if (isLoading) {
    const obj21 = { style: tmp7.grid, accessible: true, accessibilityLabel: null, accessibilityState: null, children: null };
    const intl4 = tmp(1113).intl;
    obj21.accessibilityLabel = intl4.string(tmp(1113).t.ZTNur7);
    obj21.accessibilityState = { busy: true };
    let arr = roundToNearestPixelResult1 > 0;
    if (arr) {
      const _Array = Array;
      arr = Array.from({ length: 4 }, (arg0, arg1) => {
        let obj = {
          style: null,
          children: Array.from({ length: application_id }, (arg0, arg1) => {
            const obj = { style: null, children: null };
            const size = { width, height: radius.roundToNearestPixel(width / callback) };
            obj.style = size;
            const obj2 = { style: null };
            items = [, ];
            ({ screen: arr[0], tileWrapper: arr[1] } = gridRow);
            obj2.style = items;
            const items1 = [stateFromStores(c1(18988), obj2), stateFromStores(c1(18983), { radius })];
            obj.children = items1;
            return roundToNearestPixelResult1(closure_8, obj, arg1);
          })
        };
        items = [gridRow.gridRow, { columnGap }];
        obj.style = items;
        return closure_2_22(React5, obj, arg1);
      });
    }
    obj21.children = arr;
    tmp72Result = tmp72(tmp71, obj21);
  }
  const items32 = [tmp72Result, , , ];
  if (tmp70Result) {
    const obj22 = { style: tmp7.empty, children: null };
    const obj23 = { variant: "body-sm/semibold", color: "text-muted", style: tmp7.subtitle, children: null };
    const intl5 = tmp(1113).intl;
    obj23.children = intl5.string(tmp3(2553).w5cRz0);
    const items33 = [tmp72(tmp(5866).Heading, obj23), ];
    const obj24 = { variant: "body-sm/semibold", color: "text-muted", style: tmp7.subtitle, children: null };
    const intl6 = tmp(1113).intl;
    obj24.children = intl6.string(tmp3(2553).Khsqzs);
    items33[1] = tmp72(tmp(5866).Text, obj24);
    obj22.children = items33;
    tmp70Result = tmp70(tmp71, obj22);
  }
  items32[1] = tmp70Result;
  if (tmp70Result2) {
    const obj25 = { style: tmp7.status, children: null };
    const obj26 = { variant: "body-lg/normal", color: "text-muted", style: tmp7.subtitle, children: null };
    const intl7 = tmp(1113).intl;
    const tmp3Result2 = tmp3(2553);
    obj26.children = intl7.string(stateFromStores2 ? tmp3Result2["+np3yH"] : tmp3Result2.V7UsE0);
    const items34 = [tmp72(tmp(5866).Text, obj26), ];
    let tmp72Result4 = catalog.length > 0;
    if (tmp72Result4) {
      const obj27 = { onPress: callback6, size: "sm", text: null, variant: "secondary" };
      const intl8 = tmp(1113).intl;
      obj27.text = intl8.string(tmp3(2553).uGhymA);
      tmp72Result4 = tmp72(tmp(5873).Button, obj27);
    }
    items34[1] = tmp72Result4;
    obj25.children = items34;
    tmp70Result2 = tmp70(tmp71, obj25);
  }
  items32[2] = tmp70Result2;
  let tmp72Result5 = !isLoading;
  if (!isLoading) {
    tmp72Result5 = memo3.length > 0;
  }
  if (tmp72Result5) {
    const obj28 = {
      style: tmp7.grid,
      children: roundToNearestPixelResult1 > 0 && memo5.map((arr, index) => {
          closure_0 = index;
          const obj = {
            style: null,
            onLayout(arg0) {
              return closure_43.onRowLayout(closure_0 + 1, arg0);
            },
            children: arr.map((game) => {
              const hasItem = first.includes(game.id);
              let tmp2 = !hasItem;
              if (!hasItem) {
                tmp2 = length.length >= c14;
              }
              return stateFromStores(error, { game, width, selected: hasItem, unavailable: tmp2, reduceMotion, styles, radius, onPress }, game.id);
            })
          };
          items = [styles.gridRow, { columnGap }];
          obj.style = items;
          return stateFromStores(styles, obj, index);
        })
    };
    let str2 = "browse";
    if (tmp34) {
      str2 = "search";
    }
    tmp72Result5 = tmp72(tmp71, obj28, str2);
    const tmp79 = roundToNearestPixelResult1 > 0 && memo5.map((arr, index) => {
      closure_0 = index;
      const obj = {
        style: null,
        onLayout(arg0) {
          return closure_43.onRowLayout(closure_0 + 1, arg0);
        },
        children: arr.map((game) => {
          const hasItem = first.includes(game.id);
          let tmp2 = !hasItem;
          if (!hasItem) {
            tmp2 = length.length >= c14;
          }
          return stateFromStores(error, { game, width, selected: hasItem, unavailable: tmp2, reduceMotion, styles, radius, onPress }, game.id);
        })
      };
      items = [styles.gridRow, { columnGap }];
      obj.style = items;
      return stateFromStores(styles, obj, index);
    });
  }
  items32[3] = tmp72Result5;
  obj20.children = items32;
  items30[2] = roundToNearestPixelResult1(gridRow, obj20);
  obj13.children = items30;
  items27[1] = roundToNearestPixelResult1(_modDef1652.ScrollView, obj13);
  obj6.children = items27;
  const items35 = [roundToNearestPixelResult1(gridRow, obj6), ];
  const obj29 = { accessibilityElementsHidden: !(length > 0 && !tmp18 && !first1), importantForAccessibility: null, pointerEvents: null, style: null, children: null };
  let str3 = "no-hide-descendants";
  if (length > 0 && !tmp18 && !first1) {
    str3 = "auto";
  }
  obj29.importantForAccessibility = str3;
  let str4 = "none";
  if (length > 0 && !tmp18 && !first1) {
    str4 = "auto";
  }
  obj29.pointerEvents = str4;
  const items36 = [tmp7.footerPosition, animatedStyle];
  obj29.style = items36;
  const obj30 = {
    onLayout(nativeEvent) {
      return _undefined5(nativeEvent.nativeEvent.layout.height);
    },
    style: null,
    children: null
  };
  const items37 = [tmp7.footer, ];
  const obj10 = { style: tmp7.navTitle, collapsable: false, children: stateFromStores(require("InterestScrollHeader").InterestCompactTitle, { title, scrollY, collapseOffset: tmp16 }) };
  const obj15 = { style: tmp7.subtitle, variant: "body-sm/normal", color: "text-default", lineBreakStrategyIOS: "push-out", textBreakStrategy: "balanced", children: subtitle };
  items37[1] = { paddingBottom: Math.max(bottom, nativeDefault.space.PX_16) };
  obj30.style = items37;
  const obj32 = { style: tmp7.footerContent, children: null };
  const items38 = [stateFromStores(InterestGameTrayDefault, { games: first2, coverWidth: roundToNearestPixelResult1, reduceMotion: stateFromStores }), ];
  const obj33 = { style: tmp7.footerActions, children: null };
  let tmp72Result6 = first2.length >= 7;
  if (tmp72Result6) {
    const obj34 = { variant: "body-sm/medium", color: "text-default", children: null };
    const intl9 = tmp(1113).intl;
    const obj35 = { count: first2.length, max };
    obj34.children = intl9.format(tmp3(2553).v9v0uY, obj35);
    tmp72Result6 = tmp72(tmp(5866).Text, obj34);
  }
  const items39 = [tmp72Result6, ];
  const obj36 = { style: tmp7.nextButton, children: null };
  const obj37 = { text: null, disabled: null, onPress: null, size: "lg", variant: "primary" };
  const intl10 = tmp(1113).intl;
  obj37.text = intl10.string(require("util").t.PDTjLN);
  obj37.disabled = !tmp45;
  obj37.onPress = callback3;
  obj36.children = stateFromStores(require("components/Button/Button").Button, obj37);
  items39[1] = stateFromStores(gridRow, obj36);
  obj33.children = items39;
  items38[1] = roundToNearestPixelResult1(gridRow, obj33);
  obj32.children = items38;
  obj30.children = roundToNearestPixelResult1(gridRow, obj32);
  obj29.children = stateFromStores(gridRow, obj30);
  items35[1] = stateFromStores(_modDef1652.View, obj29);
  obj5.children = items35;
  return roundToNearestPixelResult1(gridRow, obj5);
};