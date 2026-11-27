// === Module 18051: InterestGamePicker ===

// Module 18051 (InterestGamePicker)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import _modDef1654 from "module_1654" /* 1654 */;
import _modDef2655 from "module_2655" /* 2655 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5052 */;
import timing_timing from "timing/timing" /* 5253 */;
import timingPresets from "timingPresets" /* 5256 */;
import HapticUtils from "HapticUtils" /* 5259 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5725 */;
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 7175 */;
import useKeyboardIsOpenDefault from "useKeyboardIsOpen" /* 7298 */;
import useMeasuredLayoutDefault from "useMeasuredLayout" /* 8487 */;
import useGame2 from "useGame" /* 8720 */;
import useGameRecordsDefault from "useGameRecords" /* 14575 */;
import GameCoverDefault from "GameCover" /* 18036 */;
import InterestPickerPerformance from "InterestPickerPerformance" /* 18040 */;
import InterestTileEdgeDefault from "InterestTileEdge" /* 18054 */;
import useInterestGameSearchDefault from "useInterestGameSearch" /* 18056 */;
import useInterestRowVisibilityDefault from "useInterestRowVisibility" /* 18057 */;
import InterestSearchShadowDefault from "InterestSearchShadow" /* 18059 */;
import InterestGameTrayDefault from "InterestGameTray" /* 18060 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5044 */;
import GameStore from "GameStore" /* 2141 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ Keyboard: hasOwnProperty, PixelRatio: closure_6, Pressable: metroImportDefault, View: closure_8 } = get_ActivityIndicator);
const InterestGamePickerConstants = fn(18037);
({ FIRST_RUN_TRAY_ENTER: closure_11, FIRST_RUN_TRAY_EXIT: closure_12, FOOTER_BORDER_WIDTH: map1, GRID_COLUMNS: closure_14, GRID_GAP: closure_15, MAX_SELECTIONS: closure_16, MIN_SELECTIONS: closure_17, SCREEN_HORIZONTAL_PADDING: closure_18, GRID_SELECTED_BORDER_WIDTH: closure_19, GRID_SELECTED_GAP_WIDTH: closure_20, TILE_ASPECT_RATIO: closure_21, TRAY_ENTER_MS: closure_22, TRAY_EXIT_MS: closure_23 } = InterestGamePickerConstants);
const AnalyticEvents = fn(1071).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_25, jsxs: closure_26, Fragment: closure_27 } = jsxProd);
const createStyles = fn(5043);
let closure_28 = createStyles.createStyles((borderRadius, minWidth) => {
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
  obj.footerContent = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_16 };
  const obj16 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_16 };
  obj.footerActions = { flexShrink: 0, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
  const obj17 = { flexShrink: 0, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
  obj.nextButton = { minWidth: nativeDefault.space.PX_96 + nativeDefault.space.PX_16 };
  return obj;
});
let closure_29 = { code: "(function InterestGamePickerTsx1(){let[selected,depth]=this.__closure;return{opacity:selected?0:1-Math.min(1,Math.max(0,depth.get())/0.2)};})" };
let closure_30 = { code: "(function InterestGamePickerTsx2(){let[unavailable,reduceMotion,withTiming,timingFast]=this.__closure;const opacity=unavailable?0.4:1;return{opacity:reduceMotion?opacity:withTiming(opacity,timingFast)};})" };
let closure_31 = noop.memo(function StaticInterestGameTile(game) {
  game = game.game;
  _require = game;
  ({ width, selected, unavailable, styles, onPress: c1 } = game);
  ({ performanceTracker, gridPosition, reduceMotion, radius } = game);
  const context = noop.useContext(require("InterestGridReveal").InterestGridReadyContext);
  dependencyMap = context;
  items = [game.id, context];
  const callback = noop.useCallback(() => _undefined3(_undefined.id), items);
  const sharedValue = require("module_1654").useSharedValue(0);
  c3 = sharedValue;
  const obj = require("module_1654");
  const items1 = [closure_29, selected, sharedValue];
  _require = undefined;
  importDefault = undefined;
  [tmp6, tmp7, tmp8] = items1;
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
  const items2 = [tmp7, tmp8];
  InterestGamePickerTsx1.__closure = items2;
  InterestGamePickerTsx1.__workletHash = 14342270959027;
  InterestGamePickerTsx1.__initData = tmp6;
  const animatedStyle = require("module_1654").useAnimatedStyle(InterestGamePickerTsx1);
  const obj2 = require("module_1654");
  const items3 = [closure_30, unavailable, reduceMotion, require("timing/timing").withTiming, require("timingPresets").timingFast];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  [tmp10, tmp11, tmp12, tmp13, tmp14] = items3;
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
  const items4 = [tmp11, tmp12, tmp13, tmp14];
  InterestGamePickerTsx2.__closure = items4;
  InterestGamePickerTsx2.__workletHash = 11929229272400;
  InterestGamePickerTsx2.__initData = tmp10;
  const obj3 = { accessibilityLabel: game.name, accessibilityRole: "button", accessibilityState: { disabled: unavailable, selected }, accessibilityHint: null, onPress: null, onPressIn: null, onPressOut: null, style: null, children: null };
  let formatToPlainStringResult;
  const animatedStyle1 = require("module_1654").useAnimatedStyle(InterestGamePickerTsx2);
  if (unavailable) {
    const intl = tmp(1112).intl;
    const obj4 = { count: max, max };
    formatToPlainStringResult = intl.formatToPlainString(_modDef2655.v9v0uY, obj4);
  }
  obj3.accessibilityHint = formatToPlainStringResult;
  obj3.onPress = function onPress() {
    return _undefined2(_undefined.id);
  };
  obj3.onPressIn = function onPressIn() {
    return _undefined4.set(timing_timing.withTiming(1, timingPresets.timingFast));
  };
  obj3.onPressOut = function onPressOut() {
    return _undefined4.set(timing_timing.withTiming(0, timingPresets.timingFast));
  };
  const items5 = [styles.tileWrapper, , ];
  let selectedGlow = selected;
  if (selected) {
    selectedGlow = styles.selectedGlow;
  }
  items5[1] = selectedGlow;
  const size = { width, height: closure_6.roundToNearestPixel(width / closure_21) };
  items5[2] = size;
  obj3.style = items5;
  const obj5 = { style: styles.screen, children: null };
  const obj6 = { style: styles.tile, children: null };
  const obj7 = { style: null, children: closure_25(GameCoverDefault, { game, width, performanceTracker, gridPosition, onReady: callback }) };
  const items6 = [styles.screen, animatedStyle1];
  obj7.style = items6;
  const items7 = [closure_25(_modDef1654.View, obj7), closure_25(InterestTileEdgeDefault, { radius, style: animatedStyle })];
  obj6.children = items7;
  const items8 = [closure_26(closure_8, obj6), ];
  if (selected) {
    const obj8 = { children: null };
    const obj9 = { pointerEvents: "none", style: styles.selected };
    const items9 = [closure_25(closure_8, obj9), ];
    const obj10 = { pointerEvents: "none", style: styles.selectedInner };
    items9[1] = closure_25(closure_8, obj10);
    obj8.children = items9;
    selected = closure_26(closure_27, obj8);
  }
  items8[1] = selected;
  obj5.children = items8;
  obj3.children = closure_26(closure_8, obj5);
  return closure_25(closure_7, obj3);
});
let closure_32 = { code: "(function InterestGamePickerTsx3(){let[reduceMotion,trayProgress,footerHeight,tokens]=this.__closure;return{opacity:reduceMotion?trayProgress.get():1,transform:[{translateY:reduceMotion?0:(1-trayProgress.get())*(footerHeight>0?footerHeight:tokens.space.PX_128)}]};})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGamePicker.tsx");

export default function InterestGamePicker(catalog) {
  catalog = catalog.catalog;
  _require = catalog;
  ({ performanceContext: c1, title, minSelection } = catalog);
  ({ onRowSeen, subtitle } = catalog);
  if (minSelection === undefined) {
    minSelection = closure_17;
  }
  const onContinue = catalog.onContinue;
  dependencyMap = onContinue;
  const onSkip = catalog.onSkip;
  let _slicedToArray = onSkip;
  let initialSelection = catalog.initialSelection;
  if (initialSelection === undefined) {
    initialSelection = [];
  }
  let flag = catalog.allowEmptySelection;
  if (flag === undefined) {
    flag = false;
  }
  const onGameToggle = catalog.onGameToggle;
  const onSearch = catalog.onSearch;
  first1 = undefined;
  closure_13 = undefined;
  first2 = undefined;
  closure_15 = undefined;
  first3 = undefined;
  closure_17 = undefined;
  c18 = undefined;
  let ref3;
  let stateFromStores;
  let roundToNearestPixelResult1;
  c28 = undefined;
  closure_29 = undefined;
  let results;
  let error;
  let onSelect;
  closure_34 = undefined;
  closure_35 = undefined;
  closure_36 = undefined;
  let memo;
  let stateFromStores2;
  let memo2;
  let memo4;
  let arr20;
  let memo5;
  let isLoading;
  closure_45 = undefined;
  closure_46 = undefined;
  let memo6;
  let memo7;
  closure_49 = undefined;
  length = undefined;
  let first4;
  closure_52 = undefined;
  closure_53 = undefined;
  let sharedValue;
  let result1;
  closure_59 = undefined;
  closure_60 = undefined;
  const performanceTracker = _slicedToArray(initialSelection.useState(() => {
    const random = Math.random();
    const interestPickerPerformance = new InterestPickerPerformance.InterestPickerPerformance((arg0) => {
      const obj2 = {};
      const merged = Object.assign(_undefined2);
      const merged1 = Object.assign(arg0);
      obj2.sample_rate = c0(18040).COVER_LOAD_SAMPLE_RATE;
      return c1(1256).track(callback1.WATERWHEELS_INTEREST_COVER_LOADED, obj2);
    }, (arg0) => {
      const merged = Object.assign(_undefined2);
      const merged1 = Object.assign(arg0);
      return c1(1256).track(callback1.WATERWHEELS_INTEREST_PICKER_READY, {});
    }, random < InterestPickerPerformance.COVER_LOAD_SAMPLE_RATE);
    return interestPickerPerformance;
  }), 1)[0];
  items = [performanceTracker];
  const effect = initialSelection.useEffect(() => {
    const timeout = setTimeout(() => performanceTracker.finish("timeout"), _undefined(_undefined3[19]).PICKER_READY_TIMEOUT_MS);
    return () => {
      clearTimeout(closure_0);
      first.finish("abandoned");
    };
  }, items);
  const roundToNearestPixelResult = onGameToggle.roundToNearestPixel(require("useToken").useToken(nativeDefault.modules.mobile.INPUT_FIELD_RADIUS_LG));
  c9 = roundToNearestPixelResult;
  const tmp8 = _slicedToArray(initialSelection.useState(0), 2);
  closure_10 = tmp8[1];
  const tmp9 = c28(roundToNearestPixelResult, Math.max(nativeDefault.space.PX_64, tmp8[0]));
  const gridRow = tmp9;
  const bottom = useSafeAreaInsetsDefault().bottom;
  [first1, closure_13] = initialSelection.useState(0);
  [first2, closure_15] = initialSelection.useState(() => {
    set = new Set(initialSelection);
    return Array.from(new Set(initialSelection)).slice(0, closure_2_16);
  });
  let tmp13 = _slicedToArray(initialSelection.useState(""), 2);
  [first3, closure_17] = initialSelection.useState(false);
  let obj3 = require("useToken");
  let tmp = _slicedToArray;
  [tmp17, c18] = initialSelection.useState(0);
  const ref1 = initialSelection.useRef(null);
  ref = initialSelection.useRef(false);
  const ref2 = initialSelection.useRef(false);
  const tmp19 = useKeyboardIsOpenDefault();
  const tmp16 = _slicedToArray(initialSelection.useState(0), 2);
  const appEntryKey = require("AppEntryKeyContext").useAppEntryKey();
  const callback = initialSelection.useCallback(() => {
    closure_21.current = false;
    const current = ref1.current;
    if (current != null) {
      current.blur();
    }
    closure_17(false);
  }, []);
  let items1 = [callback];
  const callback1 = initialSelection.useCallback(() => {
    if (ref.current) {
      closure_21.current = true;
    } else {
      callback();
    }
  }, items1);
  const items2 = [callback];
  const callback2 = initialSelection.useCallback(() => {
    closure_20.current = false;
    if (ref2.current) {
      callback();
    }
  }, items2);
  const items3 = [appEntryKey, callback1];
  const effect1 = initialSelection.useEffect(() => {
    const keyboardIsOpen = _undefined(_undefined3[23]).getKeyboardIsOpen({ appEntryKey });
    const obj = _undefined(_undefined3[23]);
    const obj2 = { appEntryKey };
    return _undefined(_undefined3[23]).subscribeToKeyboardIsOpen((arg0) => {
      let tmp = closure_0;
      if (closure_0) {
        tmp = !arg0;
      }
      closure_0 = arg0;
      if (tmp) {
        callback1();
      }
    }, { appEntryKey });
  }, items3);
  let size = useMeasuredLayoutDefault();
  const width = size.width;
  let num = 0;
  ({ ref, onLayout } = size);
  if (undefined !== width) {
    num = width;
  }
  const height = size.height;
  let num2 = 0;
  if (undefined !== height) {
    num2 = height;
  }
  ref3 = obj.useRef(null);
  let obj4 = require("AppEntryKeyContext");
  const items4 = [c9];
  stateFromStores = require("initialize").useStateFromStores(items4, () => _undefined5.useReducedMotion);
  let result = (num - 2 * c18 - closure_15 * (first2 - 1)) / first2;
  const rounded = Math.floor(result * obj2.get());
  roundToNearestPixelResult1 = obj2.roundToNearestPixel(rounded / obj2.get());
  const sum = closure_15 + (result - roundToNearestPixelResult1) * first2 / (first2 - 1);
  c28 = sum;
  let num3 = 4;
  if (roundToNearestPixelResult1 > 0) {
    const _Math = Math;
    const _Math2 = Math;
    num3 = Math.max(4, Math.ceil(num2 / (roundToNearestPixelResult1 / ref2 + tmp26)) + 1);
  }
  closure_29 = obj.useRef(false);
  if (Number.isFinite(minSelection)) {
    let num4 = 0;
    if (!flag) {
      num4 = closure_17;
    }
    let bound = Math.min(Math.max(minSelection, num4), first3);
  } else {
    bound = closure_17;
  }
  const tmp35 = useInterestGameSearchDefault(tmp13[0]);
  results = tmp35.results;
  error = tmp35.error;
  onSelect = tmp35.onSelect;
  const items5 = [results];
  memo = obj.useMemo(() => {
    items = results;
    if (results == null) {
      items = [];
    }
    const found = items.filter(GameAutocompleteUtils.isGameAutocompleteResultAllowedInGameWidgets);
    return found.map((id) => id.id);
  }, items5);
  const tmp37 = tmp13[0].trim().length > 0;
  closure_34 = tmp37;
  const items6 = [memo, catalog, first2];
  const memo1 = obj.useMemo(() => {
    items = [...first2];
    return Array.from(new Set(items));
  }, items6);
  const tmp39 = useGameRecordsDefault(memo1);
  closure_35 = tmp39;
  let tmp40 = tmp37;
  if (tmp37) {
    tmp40 = null == error;
  }
  closure_36 = tmp40;
  let tmp41 = catalog;
  if (tmp40) {
    tmp41 = memo;
  }
  memo = tmp41;
  tmp26 = closure_15;
  const tmp27 = first2;
  const tmp4Result = require("initialize");
  const items7 = [closure_10];
  const items8 = [tmp41];
  const stateFromStores1 = require("initialize").useStateFromStores(items7, () => memo.some((item) => null == game.getGame(item) && !game.hasNoData(item) && !game.didFetchingFail(item)), items8);
  const tmp4Result7 = require("initialize");
  const items9 = [closure_10];
  const items10 = [catalog];
  stateFromStores2 = require("initialize").useStateFromStores(items9, () => _undefined.some((item) => closure_1_10.didFetchingFail(item)), items10);
  initialSelection.useRef(stateFromStores2);
  const items11 = [stateFromStores2];
  const effect2 = obj.useEffect(() => {
    let tmp2 = stateFromStores2;
    if (stateFromStores2) {
      tmp2 = !ref4.current;
    }
    if (tmp2) {
      const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.NOTIFICATION_ERROR);
    }
    ref4.current = stateFromStores2;
  }, items11);
  const items12 = [tmp39];
  memo2 = obj.useMemo(() => new Map(closure_35.map((id) => {
    items = [id.id, id];
    return items;
  })), items12);
  const items13 = [catalog, memo2];
  const items14 = [memo, memo2];
  const memo3 = obj.useMemo(() => {
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
  }, items13);
  memo4 = obj.useMemo(() => {
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
  }, items14);
  arr20 = memo3;
  if (tmp40) {
    arr20 = memo4;
  }
  const items15 = [arr20];
  memo5 = obj.useMemo(() => Array.from({ length: Math.ceil(arr20.length / gesture) }, (arg0, arg1) => arr20.slice(arg1 * first2, (arg1 + 1) * first2)), items15);
  isLoading = tmp37;
  if (tmp37) {
    isLoading = tmp35.isLoading;
  }
  if (!isLoading) {
    isLoading = stateFromStores1;
  }
  let tmp79Result3 = tmp37;
  if (tmp37) {
    tmp79Result3 = !isLoading;
  }
  if (tmp79Result3) {
    tmp79Result3 = null == error;
  }
  if (tmp79Result3) {
    tmp79Result3 = 0 === arr20.length;
  }
  closure_45 = tmp48;
  let tmp49 = !tmp37;
  let tmp79Result4 = tmp49;
  if (!tmp37) {
    tmp79Result4 = !isLoading;
  }
  closure_46 = tmp79Result4;
  const items16 = [tmp79Result4, roundToNearestPixelResult1, memo5, performanceTracker, first1, initialSelection.length > 0 || flag];
  const effect3 = obj.useEffect(() => {
    let tmp = closure_46;
    if (closure_46) {
      tmp = roundToNearestPixelResult1 > 0;
    }
    if (tmp) {
      let tmp4 = !closure_45;
      if (closure_45) {
        tmp4 = first1 > 0;
      }
      tmp = tmp4;
    }
    if (tmp) {
      let num3 = 0;
      const mapped = memo5.map((arr) => arr.map((id) => id.id));
      if (closure_45) {
        num3 = first1;
      }
      first.setGames(mapped, num3);
    }
  }, items16);
  if (tmp79Result4) {
    tmp79Result4 = 0 === arr20.length;
  }
  const items17 = [memo2, first2];
  memo6 = obj.useMemo(() => {
    closure_0 = memo2;
    return first2.flatMap((item) => {
      value = closure_0.get(item);
      if (null != value) {
        if (!obj.isAgeRestrictedContentClassification(value.contentClassification)) {
          items = [value];
        }
        return items;
      }
      items = [];
    });
  }, items17);
  const items18 = [memo6];
  memo7 = obj.useMemo(() => memo6.map((id) => id.id), items18);
  let tmp52 = memo7.length >= bound;
  if (tmp52) {
    let tmp53 = !flag;
    if (flag) {
      tmp53 = memo7.length === first2.length;
    }
    tmp52 = tmp53;
  }
  closure_49 = tmp52;
  length = memo7.length;
  const tmpResult = tmp(initialSelection.useState(memo6), 2);
  first4 = tmpResult[0];
  let tmp55 = memo6.length > 0;
  if (tmp55) {
    tmp55 = memo6.length !== first4.length || memo6.some((item, index) => item !== first4[index]);
    const tmp56 = memo6.length !== first4.length || memo6.some((item, index) => item !== first4[index]);
  }
  if (tmp55) {
    tmpResult[1](memo6);
  }
  let tmp58 = first4;
  if (flag) {
    tmp58 = first4;
    if (0 === length) {
      tmp58 = memo6;
    }
  }
  closure_52 = tmp59;
  const tmp4Result8 = require("initialize");
  if (!tmp37) {
    tmp49 = !isLoading;
  }
  let num5 = 0;
  if ((length > 0 || flag) && !tmp19 && !first3) {
    let tmp61 = null;
    if (first1 > 0) {
      tmp61 = first1;
    }
    num5 = tmp61;
  }
  const tmp6ResultResult = useInterestRowVisibilityDefault(onRowSeen, tmp49, num5);
  closure_53 = tmp6ResultResult;
  const tmp6Result = useInterestRowVisibilityDefault;
  const interestScrollHeader = require("InterestScrollHeader").useInterestScrollHeader(tmp6ResultResult.onScroll);
  ({ scrollY, onScroll } = interestScrollHeader);
  const tmp4Result9 = require("InterestScrollHeader");
  sharedValue = require("module_1654").useSharedValue(0);
  const tmp4Result10 = require("module_1654");
  const items19 = [onSelect, stateFromStores, sharedValue, first1, nativeDefault];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  [tmp65, tmp66, tmp67, tmp68, tmp69] = items19;
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
  const items20 = [tmp66, tmp67, tmp68, tmp69];
  InterestGamePickerTsx3.__closure = items20;
  InterestGamePickerTsx3.__workletHash = 5612593946705;
  InterestGamePickerTsx3.__initData = tmp65;
  const items21 = [sharedValue, (length > 0 || flag) && !tmp19 && !first3, stateFromStores, flag];
  const animatedStyle = require("module_1654").useAnimatedStyle(InterestGamePickerTsx3);
  const effect4 = obj.useEffect(() => {
    if (stateFromStores) {
      let obj = { duration: 100 };
    } else if (flag) {
      const obj2 = { duration: closure_52 ? closure_2_22 : closure_2_23 };
    } else {
      obj = closure_52 ? closure_2_11 : application_id;
    }
    let num = 0;
    if (closure_52) {
      num = 1;
    }
    let str = "respect-motion-settings";
    if (stateFromStores) {
      str = "animate-always";
    }
    const result = sharedValue.set(timing_timing.withTiming(num, obj, str));
  }, items21);
  initialSelection.useRef(length);
  const items22 = [length];
  const effect5 = obj.useEffect(() => {
    if (ref5.current !== length) {
      ref5.current = length;
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const intl = util.intl;
      const obj = { count: length, max };
      AccessibilityAnnouncer.announce(intl.formatToPlainString(_modDef2655.v9v0uY, obj));
    }
  }, items22);
  const tmp4Result11 = require("module_1654");
  result1 = require("GameAutocompleteUtils").normalizeGameAutocompleteQuery(str);
  initialSelection.useRef(null);
  const items23 = [result1, isLoading, error, results, memo4.length, onSearch];
  const effect6 = obj.useEffect(() => {
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
  }, items23);
  initialSelection.useRef(first2);
  const items24 = [onGameToggle, arr20];
  closure_59 = obj.useCallback((arg0) => {
    closure_0 = arg0;
    if (!closure_29.current) {
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
        closure_15(found);
        const findIndexResult = arr20.findIndex((id) => id.id === closure_0);
        if (onGameToggle != null) {
          let tmp13 = null;
          if (-1 !== findIndexResult) {
            tmp13 = findIndexResult;
          }
          tmp11(arg0, tmp13, tmp3);
        }
      }
    }
  }, items24);
  closure_60 = tmp6(7328)((arg0) => {
    if (!closure_29.current) {
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
          const formatToPlainStringResult = intl.formatToPlainString(_modDef2655.v9v0uY, obj);
          const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.NOTIFICATION_WARNING);
          const obj4 = { text: formatToPlainStringResult };
          ToastActionCreatorsDefault.open("INTEREST_GAME_PICKER_LIMIT", obj4);
          const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
          AccessibilityAnnouncer.announce(formatToPlainStringResult);
        }
      }
      if (closure_36) {
        onSelect(arg0);
      }
      const hasItem = current.includes(arg0);
      const HapticFeedbackTypes = HapticUtils.HapticFeedbackTypes;
      result1 = HapticUtils.triggerHapticFeedback(hasItem ? HapticFeedbackTypes.SELECTION : HapticFeedbackTypes.RIGID);
      closure_59(arg0);
    }
  });
  const items25 = [tmp52, onContinue, memo7];
  const items26 = [onSkip, memo7];
  const callback3 = obj.useCallback(() => {
    const current = closure_29.current;
    let tmp2 = !current;
    if (!current) {
      tmp2 = closure_49;
    }
    if (tmp2) {
      closure_29.current = true;
      _undefined3(memo7);
    }
  }, items25);
  const items27 = [callback];
  const callback4 = obj.useCallback(() => {
    if (!closure_29.current) {
      tmp.current = true;
      _undefined4(memo7);
    }
  }, items26);
  const items28 = [catalog];
  const callback5 = obj.useCallback(() => {
    callback();
    hasOwnProperty.dismiss();
  }, items27);
  let obj5 = { style: tmp9.screen, children: null };
  const obj6 = { ref, onLayout, style: tmp9.body, children: null };
  const callback6 = obj.useCallback(() => {
    const useGame = useGame2.useGame;
    items = [
      ...c0.map((item) => {
        items = [item, true];
        return items;
      })
    ];
    useGame.refetchMany.apply(items);
  }, items28);
  const obj7 = { style: tmp9.header, children: null };
  const items29 = [ref3(performanceTracker, { style: tmp9.navLeading }), , ];
  const obj8 = { style: tmp9.navLeading };
  const tmp4Result12 = require("GameAutocompleteUtils");
  items29[1] = ref3(performanceTracker, { style: tmp9.navTitle, collapsable: false, children: ref3(require("InterestScrollHeader").InterestCompactTitle, { title, scrollY, collapseOffset: tmp17 }) });
  const obj10 = {
    style: tmp9.navActions,
    onLayout(nativeEvent) {
      return closure_10(nativeEvent.nativeEvent.layout.width);
    },
    children: null
  };
  let intl = tmp4(1112).intl;
  const t = tmp4(1112).t;
  const obj11 = { top: true, children: null };
  const obj9 = { style: tmp9.navTitle, collapsable: false, children: ref3(require("InterestScrollHeader").InterestCompactTitle, { title, scrollY, collapseOffset: tmp17 }) };
  obj10.children = ref3(require("HeaderShared").HeaderTextButton, { label: intl.string(flag ? t["ETE/oC"] : t["5Wxrcd"]), labelStyle: tmp9.skip, onPress: callback4 });
  items29[2] = ref3(performanceTracker, obj10);
  obj7.children = items29;
  obj11.children = stateFromStores(performanceTracker, obj7);
  const items30 = [ref3(require("common/SafeAreaView").SafeAreaPaddingView, obj11), ];
  const obj13 = {
    stickyHeaderIndices: [1],
    onScroll,
    onLayout(nativeEvent) {
      closure_53.onViewportLayout(nativeEvent);
      first.setViewport(nativeEvent.nativeEvent.layout.height);
    },
    scrollEventThrottle: 16,
    contentInsetAdjustmentBehavior: "never",
    style: tmp9.screen,
    contentContainerStyle: null,
    onScrollBeginDrag: null,
    onScrollEndDrag: null,
    onMomentumScrollEnd: null,
    keyboardDismissMode: "on-drag",
    keyboardShouldPersistTaps: "handled",
    automaticallyAdjustKeyboardInsets: false,
    children: null
  };
  const items31 = [tmp9.content, ];
  if (tmp19) {
    let num7 = 0;
    if (!tmp79Result3) {
      num7 = tmp6(575).space.PX_16;
    }
    let sum1 = num7;
  } else if (0 !== length) {
    let num6 = 0;
    if (!tmp79Result3) {
      num6 = tmp6(575).space.PX_32;
    }
    sum1 = first1 + num6;
  } else {
    sum1 = bottom;
  }
  items31[1] = { paddingBottom: sum1 };
  obj13.contentContainerStyle = items31;
  obj13.onScrollBeginDrag = function onScrollBeginDrag() {
    closure_20.current = first3;
  };
  obj13.onScrollEndDrag = callback2;
  obj13.onMomentumScrollEnd = callback2;
  const obj14 = {
    style: tmp9.intro,
    collapsable: false,
    onLayout(nativeEvent) {
      return _undefined6(nativeEvent.nativeEvent.layout.height);
    },
    children: null
  };
  const items32 = [ref3(require("Text/Text").Heading, { variant: "heading-xl/semibold", color: "text-strong", style: tmp9.subtitle, children: title }), ref3(require("Text/Text").Text, { style: tmp9.subtitle, variant: "body-sm/normal", color: "text-default", lineBreakStrategyIOS: "push-out", textBreakStrategy: "balanced", children: subtitle })];
  obj14.children = items32;
  const items33 = [stateFromStores(performanceTracker, obj14), , ];
  const obj17 = { children: null };
  const obj18 = { style: tmp9.search, children: null };
  const items34 = [ref3(InterestSearchShadowDefault, { scrollY, collapseOffset: tmp17 }), ];
  const obj19 = { style: tmp9.searchField, children: null };
  const obj20 = { ref: ref1, grow: false, spellCheck: false, autoComplete: "off", textContentType: "none", importantForAutofill: "no", accessibilityLabel: null, onChange: null, onFocus: null, onBlur: null, onSubmitEditing: null, placeholder: null };
  const intl2 = tmp4(1112).intl;
  obj20.accessibilityLabel = intl2.string(_modDef2655["8Xenq+"]);
  obj20.onChange = tmp13[1];
  obj20.onFocus = function onFocus() {
    closure_17(true);
    closure_20.current = false;
    closure_21.current = false;
  };
  obj20.onBlur = callback1;
  obj20.onSubmitEditing = callback5;
  const intl3 = tmp4(1112).intl;
  obj20.placeholder = intl3.string(_modDef2655["8Xenq+"]);
  obj19.children = ref3(require("Search/SearchBar").SearchBar, obj20);
  items34[1] = ref3(performanceTracker, obj19);
  obj18.children = items34;
  obj17.children = stateFromStores(performanceTracker, obj18);
  items33[1] = ref3(performanceTracker, obj17);
  const obj21 = {
    style: tmp9.content,
    onLayout(nativeEvent) {
      closure_53.onContentLayout(nativeEvent);
      first.setContentTop(nativeEvent.nativeEvent.layout.y);
    },
    children: null
  };
  let tmp79Result = isLoading;
  if (isLoading) {
    const obj22 = { style: tmp9.grid, accessible: true, accessibilityLabel: null, accessibilityState: null, children: null };
    const intl4 = tmp4(1112).intl;
    obj22.accessibilityLabel = intl4.string(tmp4(1112).t.ZTNur7);
    obj22.accessibilityState = { busy: true };
    let arr = roundToNearestPixelResult1 > 0;
    if (arr) {
      const _Array = Array;
      const obj23 = { length: num3 };
      arr = Array.from(obj23, (arg0, arg1) => {
        let obj = {
          style: null,
          children: Array.from({ length: gesture }, (arg0, arg1) => {
            const obj = { style: null, children: null };
            const size = { width, height: onGameToggle.roundToNearestPixel(width / closure_21) };
            obj.style = size;
            const obj2 = { style: null };
            items = [, ];
            ({ screen: arr[0], tileWrapper: arr[1] } = gridRow);
            obj2.style = items;
            const items1 = [closure_25(c1(18053), obj2), closure_25(c1(18054), { radius })];
            obj.children = items1;
            return stateFromStores(first, obj, arg1);
          })
        };
        items = [gridRow.gridRow, { columnGap }];
        obj.style = items;
        return closure_2_25(React5, obj, arg1);
      });
    }
    const items35 = [arr, ];
    const obj24 = { count: num3 * tmp27, tileWidth: roundToNearestPixelResult1, columnGap: sum, radius: roundToNearestPixelResult };
    items35[1] = tmp81(tmp6(18055), obj24);
    obj22.children = items35;
    tmp79Result = tmp79(tmp80, obj22);
  }
  const items36 = [tmp79Result, , , ];
  if (tmp79Result3) {
    const obj25 = { style: tmp9.empty, children: null };
    const obj26 = { variant: "body-sm/semibold", color: "text-muted", style: tmp9.subtitle, children: null };
    const intl5 = tmp4(1112).intl;
    obj26.children = intl5.string(tmp6(2655).w5cRz0);
    const items37 = [tmp81(tmp4(5634).Heading, obj26), ];
    const obj27 = { variant: "body-sm/semibold", color: "text-muted", style: tmp9.subtitle, children: null };
    const intl6 = tmp4(1112).intl;
    obj27.children = intl6.string(tmp6(2655).Khsqzs);
    items37[1] = tmp81(tmp4(5634).Text, obj27);
    obj25.children = items37;
    tmp79Result3 = tmp79(tmp80, obj25);
  }
  items36[1] = tmp79Result3;
  if (tmp79Result4) {
    const obj28 = { style: tmp9.status, children: null };
    const obj29 = { variant: "body-lg/normal", color: "text-muted", style: tmp9.subtitle, children: null };
    const intl7 = tmp4(1112).intl;
    const tmp6Result3 = tmp6(2655);
    obj29.children = intl7.string(stateFromStores2 ? tmp6Result3["+np3yH"] : tmp6Result3.V7UsE0);
    const items38 = [tmp81(tmp4(5634).Text, obj29), ];
    let tmp81Result = catalog.length > 0;
    if (tmp81Result) {
      const obj30 = { onPress: callback6, size: "sm", text: null, variant: "secondary" };
      const intl8 = tmp4(1112).intl;
      obj30.text = intl8.string(tmp4(1112).t["5911Lb"]);
      tmp81Result = tmp81(tmp4(5641).Button, obj30);
    }
    items38[1] = tmp81Result;
    obj28.children = items38;
    tmp79Result4 = tmp79(tmp80, obj28);
  }
  items36[2] = tmp79Result4;
  let tmp81Result2 = !isLoading;
  if (!isLoading) {
    tmp81Result2 = arr20.length > 0;
  }
  if (tmp81Result2) {
    tmp81Result2 = roundToNearestPixelResult1 > 0;
  }
  if (tmp81Result2) {
    const obj31 = { games: arr20, tileWidth: roundToNearestPixelResult1, columnGap: sum, radius: roundToNearestPixelResult, gridStyle: tmp9.grid, onRevealedChange: null, children: null };
    let setGridRevealed;
    if (!tmp37) {
      setGridRevealed = tmp6ResultResult.setGridRevealed;
    }
    obj31.onRevealedChange = setGridRevealed;
    const tmp6Result4 = tmp6(18052);
    obj31.children = roundToNearestPixelResult1 > 0 && memo5.map((arr, index) => {
      closure_0 = index;
      const obj = {
        style: null,
        onLayout(nativeEvent) {
          closure_53.onRowLayout(closure_0 + 1, nativeEvent);
          if (!closure_34) {
            first.setRow(closure_0, nativeEvent.nativeEvent.layout);
          }
        },
        children: arr.map((game, index) => {
          const hasItem = first2.includes(game.id);
          let tmp2 = !hasItem;
          if (!hasItem) {
            tmp2 = memo7.length >= closure_3_16;
          }
          return closure_3_25(closure_31, { game, performanceTracker, gridPosition: closure_0 * gesture + index, width: roundToNearestPixelResult1, selected: hasItem, unavailable: tmp2, reduceMotion: stateFromStores, styles, radius, onPress }, game.id);
        })
      };
      items = [styles.gridRow, { columnGap }];
      obj.style = items;
      return ref3(first, obj, index);
    });
    let str2 = "browse";
    if (tmp37) {
      str2 = "search";
    }
    tmp81Result2 = tmp81(tmp6Result4, obj31, str2);
    const tmp90 = roundToNearestPixelResult1 > 0 && memo5.map((arr, index) => {
      closure_0 = index;
      const obj = {
        style: null,
        onLayout(nativeEvent) {
          closure_53.onRowLayout(closure_0 + 1, nativeEvent);
          if (!closure_34) {
            first.setRow(closure_0, nativeEvent.nativeEvent.layout);
          }
        },
        children: arr.map((game, index) => {
          const hasItem = first2.includes(game.id);
          let tmp2 = !hasItem;
          if (!hasItem) {
            tmp2 = memo7.length >= closure_3_16;
          }
          return closure_3_25(closure_31, { game, performanceTracker, gridPosition: closure_0 * gesture + index, width: roundToNearestPixelResult1, selected: hasItem, unavailable: tmp2, reduceMotion: stateFromStores, styles, radius, onPress }, game.id);
        })
      };
      items = [styles.gridRow, { columnGap }];
      obj.style = items;
      return ref3(first, obj, index);
    });
  }
  items36[3] = tmp81Result2;
  obj21.children = items36;
  items33[2] = stateFromStores(performanceTracker, obj21);
  obj13.children = items33;
  items30[1] = stateFromStores(_modDef1654.ScrollView, obj13);
  obj6.children = items30;
  const items39 = [stateFromStores(performanceTracker, obj6), ];
  const obj32 = { accessibilityElementsHidden: !((length > 0 || flag) && !tmp19 && !first3), importantForAccessibility: null, pointerEvents: null, style: null, children: null };
  let str3 = "no-hide-descendants";
  if ((length > 0 || flag) && !tmp19 && !first3) {
    str3 = "auto";
  }
  obj32.importantForAccessibility = str3;
  let str4 = "none";
  if ((length > 0 || flag) && !tmp19 && !first3) {
    str4 = "auto";
  }
  obj32.pointerEvents = str4;
  const items40 = [tmp9.footerPosition, animatedStyle];
  obj32.style = items40;
  const obj33 = {
    onLayout(nativeEvent) {
      return closure_13(nativeEvent.nativeEvent.layout.height);
    },
    style: null,
    children: null
  };
  const items41 = [tmp9.footer, ];
  const obj12 = { label: intl.string(flag ? t["ETE/oC"] : t["5Wxrcd"]), labelStyle: tmp9.skip, onPress: callback4 };
  const obj15 = { variant: "heading-xl/semibold", color: "text-strong", style: tmp9.subtitle, children: title };
  const obj16 = { style: tmp9.subtitle, variant: "body-sm/normal", color: "text-default", lineBreakStrategyIOS: "push-out", textBreakStrategy: "balanced", children: subtitle };
  items41[1] = { paddingBottom: Math.max(bottom, nativeDefault.space.PX_16) };
  obj33.style = items41;
  const obj35 = { style: tmp9.footerContent, children: null };
  const items42 = [ref3(InterestGameTrayDefault, { games: tmp58, reduceMotion: stateFromStores, firstRun: !flag }), ];
  const obj37 = { style: tmp9.footerActions, children: null };
  const obj38 = { style: tmp9.nextButton, children: null };
  const obj39 = { text: null, disabled: null, onPress: null, size: "lg", variant: "primary" };
  const intl9 = tmp4(1112).intl;
  obj39.text = intl9.string(require("util").t.PDTjLN);
  obj39.disabled = !tmp52;
  obj39.onPress = callback3;
  obj38.children = ref3(require("components/Button/Button").Button, obj39);
  obj37.children = ref3(performanceTracker, obj38);
  items42[1] = ref3(performanceTracker, obj37);
  obj35.children = items42;
  obj33.children = stateFromStores(performanceTracker, obj35);
  obj32.children = ref3(performanceTracker, obj33);
  items39[1] = ref3(_modDef1654.View, obj32);
  obj5.children = items39;
  return stateFromStores(performanceTracker, obj5);
};