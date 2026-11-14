// === Module 19032: InterestGamePicker ===

// Module 19032 (InterestGamePicker)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import _modDef1655 from "module_1655" /* 1655 */;
import _modDef2569 from "module_2569" /* 2569 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5315 */;
import timing_timing from "timing/timing" /* 5548 */;
import timingPresets from "timingPresets" /* 5551 */;
import HapticUtils from "HapticUtils" /* 5554 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 6015 */;
import useKeyboardIsOpenDefault from "useKeyboardIsOpen" /* 7643 */;
import useMeasuredLayoutDefault from "useMeasuredLayout" /* 7994 */;
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 9379 */;
import useGame2 from "useGame" /* 9533 */;
import useGameRecordsDefault from "useGameRecords" /* 12135 */;
import InterestGameCoverDefault from "InterestGameCover" /* 19033 */;
import InterestPickerPerformance from "InterestPickerPerformance" /* 19036 */;
import InterestTileEdgeDefault from "InterestTileEdge" /* 19037 */;
import useInterestGameSearchDefault from "useInterestGameSearch" /* 19038 */;
import useInterestRowVisibilityDefault from "useInterestRowVisibility" /* 19039 */;
import InterestSearchShadowDefault from "InterestSearchShadow" /* 19041 */;
import InterestGameTrayDefault from "InterestGameTray" /* 19043 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;
import GameStore from "GameStore" /* 2141 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ Keyboard: hasOwnProperty, PixelRatio: closure_6, Pressable: metroImportDefault, View: closure_8 } = get_ActivityIndicator);
const InterestGamePickerConstants = fn(19025);
({ FOOTER_BORDER_WIDTH: closure_11, GRID_COLUMNS: closure_12, GRID_GAP: map1, MAX_SELECTIONS: closure_14, MIN_SELECTIONS: closure_15, SCREEN_HORIZONTAL_PADDING: closure_16, GRID_SELECTED_BORDER_WIDTH: closure_17, GRID_SELECTED_GAP_WIDTH: closure_18, TILE_ASPECT_RATIO: closure_19, TRAY_ENTER_MS: closure_20, TRAY_EXIT_MS: closure_21 } = InterestGamePickerConstants);
const AnalyticEvents = fn(1072).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_23, jsxs: closure_24, Fragment: closure_25 } = jsxProd);
const createStyles = fn(5306);
let closure_26 = createStyles.createStyles((borderRadius, minWidth) => {
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
let closure_27 = { code: "(function InterestGamePickerTsx1(){let[selected,depth]=this.__closure;return{opacity:selected?0:1-Math.min(1,Math.max(0,depth.get())/0.2)};})" };
let closure_28 = { code: "(function InterestGamePickerTsx2(){let[unavailable,reduceMotion,withTiming,timingFast]=this.__closure;const opacity=unavailable?0.4:1;return{opacity:reduceMotion?opacity:withTiming(opacity,timingFast)};})" };
let closure_29 = noop.memo(function StaticInterestGameTile(game) {
  game = game.game;
  _require = game;
  ({ width, selected, unavailable, styles, onPress: c1 } = game);
  ({ performanceTracker, gridPosition, reduceMotion, radius } = game);
  const sharedValue = require("module_1655").useSharedValue(0);
  dependencyMap = sharedValue;
  const obj = require("module_1655");
  items = [closure_27, selected, sharedValue];
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
  const animatedStyle = require("module_1655").useAnimatedStyle(InterestGamePickerTsx1);
  const obj2 = require("module_1655");
  const items2 = [closure_28, unavailable, reduceMotion, require("timing/timing").withTiming, require("timingPresets").timingFast];
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
  const animatedStyle1 = require("module_1655").useAnimatedStyle(InterestGamePickerTsx2);
  if (unavailable) {
    const intl = tmp(1113).intl;
    const obj4 = { count: max, max };
    formatToPlainStringResult = intl.formatToPlainString(_modDef2569.v9v0uY, obj4);
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
  const obj7 = { style: null, children: closure_23(InterestGameCoverDefault, { game, width, performanceTracker, gridPosition }) };
  const items5 = [styles.screen, animatedStyle1];
  obj7.style = items5;
  const items6 = [closure_23(_modDef1655.View, obj7), closure_23(InterestTileEdgeDefault, { radius, style: animatedStyle })];
  obj6.children = items6;
  const items7 = [closure_24(closure_8, obj6), ];
  if (selected) {
    const obj8 = { children: null };
    const obj9 = { pointerEvents: "none", style: styles.selected };
    const items8 = [closure_23(closure_8, obj9), ];
    const obj10 = { pointerEvents: "none", style: styles.selectedInner };
    items8[1] = closure_23(closure_8, obj10);
    obj8.children = items8;
    selected = closure_24(closure_25, obj8);
  }
  items7[1] = selected;
  obj5.children = items7;
  obj3.children = closure_24(closure_8, obj5);
  return closure_23(closure_7, obj3);
});
let closure_30 = { code: "(function InterestGamePickerTsx3(){let[reduceMotion,trayProgress,footerHeight,tokens]=this.__closure;return{opacity:reduceMotion?trayProgress.get():1,transform:[{translateY:reduceMotion?0:(1-trayProgress.get())*(footerHeight>0?footerHeight:tokens.space.PX_128)}]};})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGamePicker.tsx");

export default function InterestGamePicker(catalog) {
  catalog = catalog.catalog;
  _require = catalog;
  ({ performanceContext: c1, title, minSelection } = catalog);
  ({ onRowSeen, subtitle } = catalog);
  if (minSelection === undefined) {
    minSelection = first3;
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
  closure_12 = undefined;
  first2 = undefined;
  max = undefined;
  first3 = undefined;
  closure_16 = undefined;
  c17 = undefined;
  let ref3;
  let stateFromStores;
  let roundToNearestPixelResult1;
  let columnGap;
  let results;
  let error;
  let onSelect;
  closure_33 = undefined;
  closure_34 = undefined;
  closure_35 = undefined;
  let memo;
  let memo2;
  let memo4;
  let memo3;
  let memo5;
  let isLoading;
  closure_42 = undefined;
  closure_43 = undefined;
  let memo6;
  let memo7;
  closure_46 = undefined;
  length = undefined;
  let first4;
  closure_49 = undefined;
  closure_50 = undefined;
  let sharedValue;
  let result1;
  closure_56 = undefined;
  closure_57 = undefined;
  const performanceTracker = _slicedToArray(initialSelection.useState(() => {
    const random = Math.random();
    const interestPickerPerformance = new InterestPickerPerformance.InterestPickerPerformance((arg0) => {
      const obj2 = {};
      const merged = Object.assign(_undefined2);
      const merged1 = Object.assign(arg0);
      obj2.sample_rate = c0(19036).COVER_LOAD_SAMPLE_RATE;
      return c1(1256).track(callback.WATERWHEELS_INTEREST_COVER_LOADED, obj2);
    }, (arg0) => {
      const merged = Object.assign(_undefined2);
      const merged1 = Object.assign(arg0);
      return c1(1256).track(callback.WATERWHEELS_INTEREST_PICKER_READY, {});
    }, random < InterestPickerPerformance.COVER_LOAD_SAMPLE_RATE);
    return interestPickerPerformance;
  }), 1)[0];
  items = [performanceTracker];
  const effect = initialSelection.useEffect(() => {
    const timeout = setTimeout(() => performanceTracker.finish("timeout"), _undefined(_undefined3[18]).PICKER_READY_TIMEOUT_MS);
    return () => {
      clearTimeout(closure_0);
      first.finish("abandoned");
    };
  }, items);
  const roundToNearestPixelResult = onSearch.roundToNearestPixel(require("useToken").useToken(nativeDefault.modules.mobile.INPUT_FIELD_RADIUS_LG));
  c8 = roundToNearestPixelResult;
  const tmp8 = _slicedToArray(initialSelection.useState(0), 2);
  closure_9 = tmp8[1];
  const tmp9 = roundToNearestPixelResult1(roundToNearestPixelResult, Math.max(nativeDefault.space.PX_64, tmp8[0]));
  const gridRow = tmp9;
  const bottom = useSafeAreaInsetsDefault().bottom;
  [first1, closure_12] = initialSelection.useState(0);
  [first2, max] = initialSelection.useState(() => {
    const set = new Set(initialSelection);
    return Array.from(new Set(initialSelection)).slice(0, gesture);
  });
  let tmp13 = _slicedToArray(initialSelection.useState(""), 2);
  [first3, closure_16] = initialSelection.useState(false);
  let obj3 = require("useToken");
  let tmp = _slicedToArray;
  [tmp17, c17] = initialSelection.useState(0);
  const ref1 = initialSelection.useRef(null);
  ref = initialSelection.useRef(false);
  initialSelection.useRef(false);
  const tmp19 = useKeyboardIsOpenDefault();
  const tmp16 = _slicedToArray(initialSelection.useState(0), 2);
  const appEntryKey = require("AppEntryKeyContext").useAppEntryKey();
  const callback = initialSelection.useCallback(() => {
    closure_20.current = false;
    const current = ref1.current;
    if (current != null) {
      current.blur();
    }
    closure_16(false);
  }, []);
  let items1 = [callback];
  const callback1 = initialSelection.useCallback(() => {
    if (ref.current) {
      closure_20.current = true;
    } else {
      callback();
    }
  }, items1);
  const items2 = [callback];
  const callback2 = initialSelection.useCallback(() => {
    closure_19.current = false;
    if (ref2.current) {
      callback();
    }
  }, items2);
  const items3 = [appEntryKey, callback1];
  const effect1 = initialSelection.useEffect(() => {
    const keyboardIsOpen = _undefined(_undefined3[22]).getKeyboardIsOpen({ appEntryKey });
    const obj = _undefined(_undefined3[22]);
    const obj2 = { appEntryKey };
    return _undefined(_undefined3[22]).subscribeToKeyboardIsOpen((arg0) => {
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
  const tmp25 = useMeasuredLayoutDefault();
  const width = tmp25.width;
  let num = 0;
  ({ ref, onLayout } = tmp25);
  if (undefined !== width) {
    num = width;
  }
  ref3 = obj.useRef(null);
  let obj4 = require("AppEntryKeyContext");
  const items4 = [closure_9];
  stateFromStores = require("initialize").useStateFromStores(items4, () => closure_9.useReducedMotion);
  let result = (num - 2 * closure_16 - first2 * (closure_12 - 1)) / closure_12;
  const rounded = Math.floor(result * obj2.get());
  roundToNearestPixelResult1 = obj2.roundToNearestPixel(rounded / obj2.get());
  columnGap = first2 + (result - roundToNearestPixelResult1) * closure_12 / (closure_12 - 1);
  initialSelection.useRef(false);
  if (Number.isFinite(minSelection)) {
    let num2 = 0;
    if (!flag) {
      num2 = first3;
    }
    let bound = Math.min(Math.max(minSelection, num2), max);
  } else {
    bound = first3;
  }
  const tmp32 = useInterestGameSearchDefault(tmp13[0]);
  results = tmp32.results;
  error = tmp32.error;
  onSelect = tmp32.onSelect;
  const items5 = [results];
  memo = obj.useMemo(() => {
    items = results;
    if (results == null) {
      items = [];
    }
    const found = items.filter(GameAutocompleteUtils.isGameAutocompleteResultAllowedInGameWidgets);
    return found.map((id) => id.id);
  }, items5);
  const tmp34 = tmp13[0].trim().length > 0;
  closure_33 = tmp34;
  const items6 = [memo, catalog, first2];
  const memo1 = obj.useMemo(() => {
    items = [...first2];
    return Array.from(new Set(items));
  }, items6);
  const tmp36 = useGameRecordsDefault(memo1);
  closure_34 = tmp36;
  let tmp37 = tmp34;
  if (tmp34) {
    tmp37 = null == error;
  }
  closure_35 = tmp37;
  let tmp38 = catalog;
  if (tmp37) {
    tmp38 = memo;
  }
  memo = tmp38;
  const tmp4Result = require("initialize");
  const items7 = [gridRow];
  const items8 = [tmp38];
  const stateFromStores1 = require("initialize").useStateFromStores(items7, () => memo.some((item) => null == game.getGame(item) && !game.hasNoData(item) && !game.didFetchingFail(item)), items8);
  const tmp4Result7 = require("initialize");
  const items9 = [gridRow];
  const items10 = [catalog];
  const items11 = [tmp36];
  const stateFromStores2 = require("initialize").useStateFromStores(items9, () => _undefined.some((item) => gridRow.didFetchingFail(item)), items10);
  memo2 = obj.useMemo(() => new Map(closure_34.map((id) => {
    items = [id.id, id];
    return items;
  })), items11);
  const items12 = [catalog, memo2];
  memo3 = obj.useMemo(() => {
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
  }, items12);
  const items13 = [memo, memo2];
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
  }, items13);
  if (tmp37) {
    memo3 = memo4;
  }
  const items14 = [memo3];
  memo5 = obj.useMemo(() => Array.from({ length: Math.ceil(memo3.length / application_id) }, (arg0, arg1) => memo3.slice(arg1 * closure_12, (arg1 + 1) * closure_12)), items14);
  isLoading = tmp34;
  if (tmp34) {
    isLoading = tmp32.isLoading;
  }
  if (!isLoading) {
    isLoading = stateFromStores1;
  }
  let tmp73Result = tmp34;
  if (tmp34) {
    tmp73Result = !isLoading;
  }
  if (tmp73Result) {
    tmp73Result = null == error;
  }
  if (tmp73Result) {
    tmp73Result = 0 === memo3.length;
  }
  closure_42 = tmp43;
  let tmp44 = !tmp34;
  let tmp73Result2 = tmp44;
  if (!tmp34) {
    tmp73Result2 = !isLoading;
  }
  closure_43 = tmp73Result2;
  const items15 = [tmp73Result2, roundToNearestPixelResult1, memo5, performanceTracker, first1, initialSelection.length > 0 || flag];
  const effect2 = obj.useEffect(() => {
    let tmp = closure_43;
    if (closure_43) {
      tmp = roundToNearestPixelResult1 > 0;
    }
    if (tmp) {
      let tmp4 = !closure_42;
      if (closure_42) {
        tmp4 = first1 > 0;
      }
      tmp = tmp4;
    }
    if (tmp) {
      let num3 = 0;
      const mapped = memo5.map((arr) => arr.map((id) => id.id));
      if (closure_42) {
        num3 = first1;
      }
      first.setGames(mapped, num3);
    }
  }, items15);
  if (tmp73Result2) {
    tmp73Result2 = 0 === memo3.length;
  }
  const items16 = [memo2, first2];
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
  }, items16);
  const items17 = [memo6];
  memo7 = obj.useMemo(() => memo6.map((id) => id.id), items17);
  let tmp47 = memo7.length >= bound;
  if (tmp47) {
    let tmp48 = !flag;
    if (flag) {
      tmp48 = memo7.length === first2.length;
    }
    tmp47 = tmp48;
  }
  closure_46 = tmp47;
  length = memo7.length;
  const tmpResult = tmp(initialSelection.useState(memo6), 2);
  first4 = tmpResult[0];
  let tmp50 = memo6.length > 0;
  if (tmp50) {
    tmp50 = memo6.length !== first4.length || memo6.some((item, index) => item !== first4[index]);
    const tmp51 = memo6.length !== first4.length || memo6.some((item, index) => item !== first4[index]);
  }
  if (tmp50) {
    tmpResult[1](memo6);
  }
  let arr28 = first4;
  if (flag) {
    arr28 = first4;
    if (0 === length) {
      arr28 = memo6;
    }
  }
  closure_49 = tmp53;
  const tmp4Result8 = require("initialize");
  if (!tmp34) {
    tmp44 = !isLoading;
  }
  let num3 = 0;
  if ((length > 0 || flag) && !tmp19 && !first3) {
    let tmp55 = null;
    if (first1 > 0) {
      tmp55 = first1;
    }
    num3 = tmp55;
  }
  const tmp6ResultResult = useInterestRowVisibilityDefault(onRowSeen, tmp44, num3);
  closure_50 = tmp6ResultResult;
  const tmp6Result = useInterestRowVisibilityDefault;
  const interestScrollHeader = require("InterestScrollHeader").useInterestScrollHeader(tmp6ResultResult.onScroll);
  ({ scrollY, onScroll } = interestScrollHeader);
  const tmp4Result9 = require("InterestScrollHeader");
  sharedValue = require("module_1655").useSharedValue(0);
  const tmp4Result10 = require("module_1655");
  const items18 = [error, stateFromStores, sharedValue, first1, nativeDefault];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  [tmp59, tmp60, tmp61, tmp62, tmp63] = items18;
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
  const items19 = [tmp60, tmp61, tmp62, tmp63];
  InterestGamePickerTsx3.__closure = items19;
  InterestGamePickerTsx3.__workletHash = 5612593946705;
  InterestGamePickerTsx3.__initData = tmp59;
  const items20 = [sharedValue, (length > 0 || flag) && !tmp19 && !first3, stateFromStores];
  const animatedStyle = require("module_1655").useAnimatedStyle(InterestGamePickerTsx3);
  const effect3 = obj.useEffect(() => {
    let num = 0;
    if (closure_49) {
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
  }, items20);
  initialSelection.useRef(length);
  const items21 = [length];
  const effect4 = obj.useEffect(() => {
    if (ref5.current !== length) {
      ref5.current = length;
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const intl = util.intl;
      const obj = { count: length, max };
      AccessibilityAnnouncer.announce(intl.formatToPlainString(_modDef2569.v9v0uY, obj));
    }
  }, items21);
  const tmp4Result11 = require("module_1655");
  result1 = require("GameAutocompleteUtils").normalizeGameAutocompleteQuery(str);
  initialSelection.useRef(null);
  const items22 = [result1, isLoading, error, results, memo4.length, onSearch];
  const effect5 = obj.useEffect(() => {
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
  }, items22);
  initialSelection.useRef(first2);
  const items23 = [onGameToggle, memo3];
  closure_56 = obj.useCallback((arg0) => {
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
        closure_14(found);
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
  }, items23);
  closure_57 = tmp6(7790)((arg0) => {
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
        const formatToPlainStringResult = intl.formatToPlainString(_modDef2569.v9v0uY, obj);
        const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
        const obj4 = { text: formatToPlainStringResult };
        ToastActionCreatorsDefault.open("INTEREST_GAME_PICKER_LIMIT", obj4);
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(formatToPlainStringResult);
      }
    }
    if (closure_35) {
      onSelect(arg0);
    }
    closure_56(arg0);
  });
  const items24 = [tmp47, onContinue, memo7];
  const items25 = [onSkip, memo7];
  const callback3 = obj.useCallback(() => {
    const current = ref4.current;
    let tmp2 = !current;
    if (!current) {
      tmp2 = closure_46;
    }
    if (tmp2) {
      ref4.current = true;
      _undefined3(memo7);
    }
  }, items24);
  const items26 = [callback];
  const callback4 = obj.useCallback(() => {
    if (!ref4.current) {
      tmp.current = true;
      _undefined4(memo7);
    }
  }, items25);
  const items27 = [catalog];
  const callback5 = obj.useCallback(() => {
    callback();
    hasOwnProperty.dismiss();
  }, items26);
  const obj5 = { style: tmp9.screen, children: null };
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
  }, items27);
  const obj7 = { style: tmp9.header, children: null };
  const items28 = [callback1(c8, { style: tmp9.navLeading }), , ];
  const obj8 = { style: tmp9.navLeading };
  const tmp4Result12 = require("GameAutocompleteUtils");
  items28[1] = callback1(c8, { style: tmp9.navTitle, collapsable: false, children: callback1(require("InterestScrollHeader").InterestCompactTitle, { title, scrollY, collapseOffset: tmp17 }) });
  const obj10 = {
    style: tmp9.navActions,
    onLayout(nativeEvent) {
      return closure_9(nativeEvent.nativeEvent.layout.width);
    },
    children: null
  };
  let intl = tmp4(1113).intl;
  const t = tmp4(1113).t;
  const obj11 = { top: true, children: null };
  const obj9 = { style: tmp9.navTitle, collapsable: false, children: callback1(require("InterestScrollHeader").InterestCompactTitle, { title, scrollY, collapseOffset: tmp17 }) };
  obj10.children = callback1(require("HeaderShared").HeaderTextButton, { label: intl.string(flag ? t["ETE/oC"] : t["5Wxrcd"]), labelStyle: tmp9.skip, onPress: callback4 });
  items28[2] = callback1(c8, obj10);
  obj7.children = items28;
  obj11.children = ref3(c8, obj7);
  const items29 = [callback1(require("common/SafeAreaView").SafeAreaPaddingView, obj11), ];
  const obj13 = {
    stickyHeaderIndices: [1],
    onScroll,
    onLayout(nativeEvent) {
      closure_50.onViewportLayout(nativeEvent);
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
  const items30 = [tmp9.content, ];
  if (tmp19) {
    let num5 = 0;
    if (!tmp73Result) {
      num5 = tmp6(575).space.PX_16;
    }
    let sum = num5;
  } else if (0 !== length) {
    let num4 = 0;
    if (!tmp73Result) {
      num4 = tmp6(575).space.PX_32;
    }
    sum = first1 + num4;
  } else {
    sum = bottom;
  }
  items30[1] = { paddingBottom: sum };
  obj13.contentContainerStyle = items30;
  obj13.onScrollBeginDrag = function onScrollBeginDrag() {
    closure_19.current = first3;
  };
  obj13.onScrollEndDrag = callback2;
  obj13.onMomentumScrollEnd = callback2;
  const obj14 = {
    style: tmp9.intro,
    collapsable: false,
    onLayout(nativeEvent) {
      return _undefined5(nativeEvent.nativeEvent.layout.height);
    },
    children: null
  };
  const items31 = [callback1(require("Text/Text").Heading, { variant: "heading-xl/semibold", color: "text-strong", children: title }), callback1(require("Text/Text").Text, { style: tmp9.subtitle, variant: "body-sm/normal", color: "text-default", lineBreakStrategyIOS: "push-out", textBreakStrategy: "balanced", children: subtitle })];
  obj14.children = items31;
  const items32 = [ref3(c8, obj14), , ];
  const obj16 = { children: null };
  const obj17 = { style: tmp9.search, children: null };
  const items33 = [callback1(InterestSearchShadowDefault, { scrollY, collapseOffset: tmp17 }), ];
  const obj18 = { style: tmp9.searchField, children: null };
  const obj19 = { ref: ref1, grow: false, spellCheck: false, autoComplete: "off", textContentType: "none", importantForAutofill: "no", accessibilityLabel: null, onChange: null, onFocus: null, onBlur: null, onSubmitEditing: null, placeholder: null };
  const intl2 = tmp4(1113).intl;
  obj19.accessibilityLabel = intl2.string(_modDef2569["8Xenq+"]);
  obj19.onChange = tmp13[1];
  obj19.onFocus = function onFocus() {
    closure_16(true);
    closure_19.current = false;
    closure_20.current = false;
  };
  obj19.onBlur = callback1;
  obj19.onSubmitEditing = callback5;
  const intl3 = tmp4(1113).intl;
  obj19.placeholder = intl3.string(_modDef2569["8Xenq+"]);
  obj18.children = callback1(require("Search/SearchBar").SearchBar, obj19);
  items33[1] = callback1(c8, obj18);
  obj17.children = items33;
  obj16.children = ref3(c8, obj17);
  items32[1] = callback1(c8, obj16);
  const obj20 = {
    style: tmp9.content,
    onLayout(nativeEvent) {
      closure_50.onContentLayout(nativeEvent);
      first.setContentTop(nativeEvent.nativeEvent.layout.y);
    },
    children: null
  };
  let tmp75Result = isLoading;
  if (isLoading) {
    const obj21 = { style: tmp9.grid, accessible: true, accessibilityLabel: null, accessibilityState: null, children: null };
    const intl4 = tmp4(1113).intl;
    obj21.accessibilityLabel = intl4.string(tmp4(1113).t.ZTNur7);
    obj21.accessibilityState = { busy: true };
    let arr = roundToNearestPixelResult1 > 0;
    if (arr) {
      const _Array = Array;
      arr = Array.from({ length: 4 }, (arg0, arg1) => {
        let obj = {
          style: null,
          children: Array.from({ length: application_id }, (arg0, arg1) => {
            const obj = { style: null, children: null };
            const size = { width, height: onSearch.roundToNearestPixel(width / closure_19) };
            obj.style = size;
            const obj2 = { style: null };
            items = [, ];
            ({ screen: arr[0], tileWrapper: arr[1] } = gridRow);
            obj2.style = items;
            const items1 = [callback1(c1(19042), obj2), callback1(c1(19037), { radius })];
            obj.children = items1;
            return closure_24(c8, obj, arg1);
          })
        };
        items = [gridRow.gridRow, { columnGap }];
        obj.style = items;
        return dependencyMap2(React5, obj, arg1);
      });
    }
    obj21.children = arr;
    tmp75Result = tmp75(tmp74, obj21);
  }
  const items34 = [tmp75Result, , , ];
  if (tmp73Result) {
    const obj22 = { style: tmp9.empty, children: null };
    const obj23 = { variant: "body-sm/semibold", color: "text-muted", style: tmp9.subtitle, children: null };
    const intl5 = tmp4(1113).intl;
    obj23.children = intl5.string(tmp6(2569).w5cRz0);
    const items35 = [tmp75(tmp4(5929).Heading, obj23), ];
    const obj24 = { variant: "body-sm/semibold", color: "text-muted", style: tmp9.subtitle, children: null };
    const intl6 = tmp4(1113).intl;
    obj24.children = intl6.string(tmp6(2569).Khsqzs);
    items35[1] = tmp75(tmp4(5929).Text, obj24);
    obj22.children = items35;
    tmp73Result = tmp73(tmp74, obj22);
  }
  items34[1] = tmp73Result;
  if (tmp73Result2) {
    const obj25 = { style: tmp9.status, children: null };
    const obj26 = { variant: "body-lg/normal", color: "text-muted", style: tmp9.subtitle, children: null };
    const intl7 = tmp4(1113).intl;
    const tmp6Result2 = tmp6(2569);
    obj26.children = intl7.string(stateFromStores2 ? tmp6Result2["+np3yH"] : tmp6Result2.V7UsE0);
    const items36 = [tmp75(tmp4(5929).Text, obj26), ];
    let tmp75Result4 = catalog.length > 0;
    if (tmp75Result4) {
      const obj27 = { onPress: callback6, size: "sm", text: null, variant: "secondary" };
      const intl8 = tmp4(1113).intl;
      obj27.text = intl8.string(tmp6(2569).uGhymA);
      tmp75Result4 = tmp75(tmp4(5936).Button, obj27);
    }
    items36[1] = tmp75Result4;
    obj25.children = items36;
    tmp73Result2 = tmp73(tmp74, obj25);
  }
  items34[2] = tmp73Result2;
  let tmp75Result5 = !isLoading;
  if (!isLoading) {
    tmp75Result5 = memo3.length > 0;
  }
  if (tmp75Result5) {
    const obj28 = {
      style: tmp9.grid,
      children: roundToNearestPixelResult1 > 0 && memo5.map((arr, index) => {
          closure_0 = index;
          const obj = {
            style: null,
            onLayout(nativeEvent) {
              closure_50.onRowLayout(closure_0 + 1, nativeEvent);
              if (!closure_33) {
                first.setRow(closure_0, nativeEvent.nativeEvent.layout);
              }
            },
            children: arr.map((game, index) => {
              const hasItem = first2.includes(game.id);
              let tmp2 = !hasItem;
              if (!hasItem) {
                tmp2 = memo7.length >= gesture;
              }
              return dependencyMap2(closure_29, { game, performanceTracker, gridPosition: closure_0 * application_id + index, width: roundToNearestPixelResult1, selected: hasItem, unavailable: tmp2, reduceMotion: stateFromStores, styles, radius, onPress }, game.id);
            })
          };
          items = [styles.gridRow, { columnGap }];
          obj.style = items;
          return callback1(c8, obj, index);
        })
    };
    let str2 = "browse";
    if (tmp34) {
      str2 = "search";
    }
    tmp75Result5 = tmp75(tmp74, obj28, str2);
    const tmp82 = roundToNearestPixelResult1 > 0 && memo5.map((arr, index) => {
      closure_0 = index;
      const obj = {
        style: null,
        onLayout(nativeEvent) {
          closure_50.onRowLayout(closure_0 + 1, nativeEvent);
          if (!closure_33) {
            first.setRow(closure_0, nativeEvent.nativeEvent.layout);
          }
        },
        children: arr.map((game, index) => {
          const hasItem = first2.includes(game.id);
          let tmp2 = !hasItem;
          if (!hasItem) {
            tmp2 = memo7.length >= gesture;
          }
          return dependencyMap2(closure_29, { game, performanceTracker, gridPosition: closure_0 * application_id + index, width: roundToNearestPixelResult1, selected: hasItem, unavailable: tmp2, reduceMotion: stateFromStores, styles, radius, onPress }, game.id);
        })
      };
      items = [styles.gridRow, { columnGap }];
      obj.style = items;
      return callback1(c8, obj, index);
    });
  }
  items34[3] = tmp75Result5;
  obj20.children = items34;
  items32[2] = ref3(c8, obj20);
  obj13.children = items32;
  items29[1] = ref3(_modDef1655.ScrollView, obj13);
  obj6.children = items29;
  const items37 = [ref3(c8, obj6), ];
  const obj29 = { accessibilityElementsHidden: !((length > 0 || flag) && !tmp19 && !first3), importantForAccessibility: null, pointerEvents: null, style: null, children: null };
  let str3 = "no-hide-descendants";
  if ((length > 0 || flag) && !tmp19 && !first3) {
    str3 = "auto";
  }
  obj29.importantForAccessibility = str3;
  let str4 = "none";
  if ((length > 0 || flag) && !tmp19 && !first3) {
    str4 = "auto";
  }
  obj29.pointerEvents = str4;
  const items38 = [tmp9.footerPosition, animatedStyle];
  obj29.style = items38;
  const obj30 = {
    onLayout(nativeEvent) {
      return closure_12(nativeEvent.nativeEvent.layout.height);
    },
    style: null,
    children: null
  };
  const items39 = [tmp9.footer, ];
  const obj12 = { label: intl.string(flag ? t["ETE/oC"] : t["5Wxrcd"]), labelStyle: tmp9.skip, onPress: callback4 };
  const obj15 = { style: tmp9.subtitle, variant: "body-sm/normal", color: "text-default", lineBreakStrategyIOS: "push-out", textBreakStrategy: "balanced", children: subtitle };
  items39[1] = { paddingBottom: Math.max(bottom, nativeDefault.space.PX_16) };
  obj30.style = items39;
  const obj32 = { style: tmp9.footerContent, children: null };
  const items40 = [callback1(InterestGameTrayDefault, { games: arr28, coverWidth: roundToNearestPixelResult1, reduceMotion: stateFromStores }), ];
  const obj33 = { style: tmp9.footerActions, children: null };
  let tmp75Result6 = arr28.length >= 7;
  if (tmp75Result6) {
    const obj34 = { variant: "body-sm/medium", color: "text-default", children: null };
    const intl9 = tmp4(1113).intl;
    const obj35 = { count: arr28.length, max };
    obj34.children = intl9.format(tmp6(2569).v9v0uY, obj35);
    tmp75Result6 = tmp75(tmp4(5929).Text, obj34);
  }
  const items41 = [tmp75Result6, ];
  const obj36 = { style: tmp9.nextButton, children: null };
  const obj37 = { text: null, disabled: null, onPress: null, size: "lg", variant: "primary" };
  const intl10 = tmp4(1113).intl;
  obj37.text = intl10.string(require("util").t.PDTjLN);
  obj37.disabled = !tmp47;
  obj37.onPress = callback3;
  obj36.children = callback1(require("components/Button/Button").Button, obj37);
  items41[1] = callback1(c8, obj36);
  obj33.children = items41;
  items40[1] = ref3(c8, obj33);
  obj32.children = items40;
  obj30.children = ref3(c8, obj32);
  obj29.children = callback1(c8, obj30);
  items37[1] = callback1(_modDef1655.View, obj29);
  obj5.children = items37;
  return ref3(c8, obj5);
};