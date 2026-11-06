// === Module 18704: InterestGamePicker ===

// Module 18704 (InterestGamePicker)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _modDef1652 from "module_1652" /* 1652 */;
import _modDef2534 from "module_2534" /* 2534 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5179 */;
import timing_timing from "timing/timing" /* 5400 */;
import timingPresets from "timingPresets" /* 5403 */;
import HapticUtils from "HapticUtils" /* 5406 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5867 */;
import useKeyboardIsOpenDefault from "useKeyboardIsOpen" /* 7197 */;
import useGame2 from "useGame" /* 7567 */;
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 8773 */;
import useMeasuredLayoutDefault from "useMeasuredLayout" /* 9087 */;
import useGameRecordsDefault from "useGameRecords" /* 15167 */;
import InterestTileEdgeDefault from "InterestTileEdge" /* 18709 */;
import InterestGhostDefault from "InterestGhost" /* 18711 */;
import InterestGameTrayDefault from "InterestGameTray" /* 18712 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5171 */;
import GameStore from "GameStore" /* 2138 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ Keyboard: hasOwnProperty, PixelRatio: closure_6, Pressable: metroImportDefault, View: closure_8 } = get_ActivityIndicator);
const InterestGamePickerConstants = fn(18705);
({ FOOTER_BORDER_WIDTH: closure_11, GRID_COLUMNS: closure_12, GRID_GAP: map1, MAX_SELECTIONS: closure_14, MIN_SELECTIONS: closure_15, SCREEN_HORIZONTAL_PADDING: closure_16, GRID_SELECTED_BORDER_WIDTH: closure_17, GRID_SELECTED_GAP_WIDTH: closure_18, TILE_ASPECT_RATIO: closure_19, TRAY_ENTER_MS: closure_20, TRAY_EXIT_MS: closure_21 } = InterestGamePickerConstants);
const jsxProd = fn(21);
({ jsx: closure_22, jsxs: closure_23, Fragment: closure_24 } = jsxProd);
const createStyles = fn(5170);
let closure_25 = createStyles.createStyles((borderRadius) => {
  const obj = { screen: { flex: 1 }, body: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, header: null, skip: null, content: null, empty: null, intro: null, subtitle: null, search: null, searchElevation: null, searchEdge: null, navTitle: null, searchTitle: null, navActions: null, grid: null, tileWrapper: null, selectedGlow: null, tile: null, selected: null, selectedInner: null, status: null, footerPosition: null, footer: null, footerContent: null, footerActions: null };
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
  obj.search = { flexShrink: 0, paddingHorizontal, paddingTop: 0, paddingBottom: nativeDefault.space.PX_12, borderBottomWidth: 1, borderBottomColor: "transparent", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
  obj.searchElevation = {};
  const rect = { position: "absolute", bottom: -1, left: 0, right: 0, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_MUTED };
  obj.searchEdge = rect;
  obj.navTitle = { flex: 1, alignSelf: "stretch", justifyContent: "center" };
  obj.searchTitle = { position: "absolute", inset: 0, alignItems: "center", justifyContent: "center" };
  const obj7 = { flexShrink: 0, paddingHorizontal, paddingTop: 0, paddingBottom: nativeDefault.space.PX_12, borderBottomWidth: 1, borderBottomColor: "transparent", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  const obj8 = {};
  obj.navActions = { minWidth: nativeDefault.space.PX_64, alignItems: "flex-end" };
  obj.grid = { flexDirection: "row", flexWrap: "wrap", gap, paddingHorizontal, paddingTop: 0 };
  obj.tileWrapper = { borderRadius };
  const obj10 = { flexDirection: "row", flexWrap: "wrap", gap, paddingHorizontal, paddingTop: 0 };
  const obj9 = { minWidth: nativeDefault.space.PX_64, alignItems: "flex-end" };
  obj.selectedGlow = { shadowColor: nativeDefault.colors.BACKGROUND_BRAND, shadowOffset: { width: 0, height: 2 }, shadowRadius: 33, shadowOpacity: 0.2, elevation: 8 };
  const obj11 = { shadowColor: nativeDefault.colors.BACKGROUND_BRAND, shadowOffset: { width: 0, height: 2 }, shadowRadius: 33, shadowOpacity: 0.2, elevation: 8 };
  obj.tile = { flex: 1, overflow: "hidden", borderRadius, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  const obj12 = { flex: 1, overflow: "hidden", borderRadius, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  obj.selected = { position: "absolute", inset: 0, borderWidth: inset, borderRadius, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
  const obj13 = { position: "absolute", inset: 0, borderWidth: inset, borderRadius, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
  obj.selectedInner = { position: "absolute", inset, borderWidth, borderRadius: Math.max(0, borderRadius - inset), borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  const obj14 = { position: "absolute", inset, borderWidth, borderRadius: Math.max(0, borderRadius - inset), borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  obj.status = { alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal, paddingTop: nativeDefault.space.PX_40 };
  obj.footerPosition = { position: "absolute", bottom: 0, left: 0, right: 0 };
  const obj15 = { alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal, paddingTop: nativeDefault.space.PX_40 };
  const merged1 = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
  obj.footer = { borderTopWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal, paddingTop: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  const obj16 = { borderTopWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal, paddingTop: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  obj.footerContent = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_16 };
  const obj17 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_16 };
  obj.footerActions = { flexShrink: 0, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
  return obj;
});
let closure_26 = { code: "(function InterestGamePickerTsx1(){let[selected,depth]=this.__closure;return{opacity:selected?0:1-Math.min(1,Math.max(0,depth.get())/0.2)};})" };
let closure_27 = noop.memo(function StaticInterestGameTile(radius) {
  const game = radius.game;
  _require = game;
  ({ width, selected, unavailable, styles, onPress: c1 } = radius);
  let sharedValue;
  sharedValue = require("module_1652").useSharedValue(0);
  const obj = require("module_1652");
  const tmp = _require;
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
  const obj3 = { accessibilityLabel: game.name, accessibilityRole: "button", accessibilityState: { disabled: unavailable, selected }, accessibilityHint: null, onPress: null, onPressIn: null, onPressOut: null, style: null, children: null };
  let formatToPlainStringResult;
  const animatedStyle = require("module_1652").useAnimatedStyle(InterestGamePickerTsx1);
  if (unavailable) {
    const intl = tmp(tmp2[11]).intl;
    const obj4 = { count: max, max };
    formatToPlainStringResult = intl.formatToPlainString(require("module_2534").v9v0uY, obj4);
  }
  obj3.accessibilityHint = formatToPlainStringResult;
  obj3.onPress = function onPress() {
    return _undefined2(_undefined.id);
  };
  obj3.onPressIn = function onPressIn() {
    return sharedValue.set(timing_timing.withTiming(1, timingPresets.timingFast));
  };
  obj3.onPressOut = function onPressOut() {
    return sharedValue.set(timing_timing.withTiming(0, timingPresets.timingFast));
  };
  const items2 = [styles.tileWrapper, , ];
  let selectedGlow = selected;
  if (selected) {
    selectedGlow = styles.selectedGlow;
  }
  items2[1] = selectedGlow;
  const size = { width, height: closure_6.roundToNearestPixel(width / closure_19) };
  items2[2] = size;
  obj3.style = items2;
  const obj5 = { style: styles.screen, children: null };
  const obj6 = { style: styles.tile, children: null };
  const items3 = [closure_22(require("InterestGameCover"), { game, width }), closure_22(require("InterestTileEdge"), { radius: radius.radius, style: animatedStyle })];
  obj6.children = items3;
  const items4 = [closure_23(closure_8, obj6), ];
  if (selected) {
    const obj7 = { children: null };
    const obj8 = { pointerEvents: "none", style: styles.selected };
    const items5 = [closure_22(closure_8, obj8), ];
    const obj9 = { pointerEvents: "none", style: styles.selectedInner };
    items5[1] = closure_22(closure_8, obj9);
    obj7.children = items5;
    selected = closure_23(closure_24, obj7);
  }
  items4[1] = selected;
  obj5.children = items4;
  obj3.children = closure_23(closure_8, obj5);
  return closure_22(closure_7, obj3);
});
let closure_28 = { code: "(function InterestGamePickerTsx2(){let[searchProgress]=this.__closure;return{opacity:1-searchProgress.get()};})" };
let closure_29 = { code: "(function InterestGamePickerTsx3(){let[searchProgress]=this.__closure;return{opacity:searchProgress.get()};})" };
let closure_30 = { code: "(function InterestGamePickerTsx4(){let[interestHeaderElevation,scrollY,searchCollapseOffset,styles]=this.__closure;var _styles$searchElevati,_styles$searchElevati2;const progress=interestHeaderElevation(scrollY.get(),searchCollapseOffset);return{shadowOpacity:((_styles$searchElevati=styles.searchElevation.shadowOpacity)!==null&&_styles$searchElevati!==void 0?_styles$searchElevati:0)*progress,elevation:((_styles$searchElevati2=styles.searchElevation.elevation)!==null&&_styles$searchElevati2!==void 0?_styles$searchElevati2:0)*progress};})" };
let closure_31 = { code: "(function InterestGamePickerTsx5(){let[interestHeaderElevation,scrollY,searchCollapseOffset]=this.__closure;return{opacity:interestHeaderElevation(scrollY.get(),searchCollapseOffset)};})" };
let closure_32 = { code: "(function InterestGamePickerTsx6(){let[reduceMotion,trayProgress,footerHeight,tokens]=this.__closure;return{opacity:reduceMotion?trayProgress.get():1,transform:[{translateY:reduceMotion?0:(1-trayProgress.get())*(footerHeight>0?footerHeight:tokens.space.PX_128)}]};})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGamePicker.tsx");

export default function InterestGamePicker(catalog) {
  catalog = catalog.catalog;
  _require = catalog;
  ({ title, minSelection } = catalog);
  if (minSelection === undefined) {
    minSelection = c15;
  }
  const onContinue = catalog.onContinue;
  importDefault = onContinue;
  const onSkip = catalog.onSkip;
  dependencyMap = onSkip;
  let initialSelection = catalog.initialSelection;
  if (initialSelection === undefined) {
    initialSelection = [];
  }
  _slicedToArray = initialSelection;
  const onGameToggle = catalog.onGameToggle;
  const onSearch = catalog.onSearch;
  c6 = undefined;
  c8 = undefined;
  first = undefined;
  closure_10 = undefined;
  first1 = undefined;
  closure_13 = undefined;
  c15 = undefined;
  let scrollY;
  let ref1;
  ref = undefined;
  let stateFromStores;
  let roundToNearestPixelResult1;
  let ref2;
  let bound;
  let results;
  let error;
  let onSelect;
  closure_28 = undefined;
  closure_29 = undefined;
  let memo;
  let memo2;
  let memo4;
  let arr22;
  let isLoading;
  let memo5;
  let memo6;
  let length;
  let first2;
  closure_39 = undefined;
  let sharedValue1;
  let result1;
  closure_45 = undefined;
  let onPress;
  const roundToNearestPixelResult = c6.roundToNearestPixel(require("useToken").useToken(nativeDefault.modules.mobile.INPUT_FIELD_RADIUS_LG));
  c6 = roundToNearestPixelResult;
  const tmp5 = error(roundToNearestPixelResult);
  const styles = tmp5;
  const bottom = useSafeAreaInsetsDefault().bottom;
  let obj2 = require("useToken");
  [tmp8, c8] = onGameToggle.useState(0);
  [first, closure_10] = onGameToggle.useState(() => {
    const set = new Set(c3);
    return Array.from(new Set(c3)).slice(0, gesture);
  });
  const tmp7 = _slicedToArray(onGameToggle.useState(0), 2);
  [str, tmp12] = onGameToggle.useState("");
  c11 = tmp12;
  [first1, closure_13] = onGameToggle.useState(false);
  const tmp11 = _slicedToArray(onGameToggle.useState(""), 2);
  const sharedValue = require("module_1652").useSharedValue(0);
  items = [first1, sharedValue];
  const effect = onGameToggle.useEffect(() => {
    let num = 0;
    if (first1) {
      num = 1;
    }
    const result = sharedValue.set(timing_timing.withTiming(num, timingPresets.timingFast));
  }, items);
  let obj4 = require("module_1652");
  let items1 = [closure_28, sharedValue];
  _require = undefined;
  [tmp17, tmp18] = items1;
  class InterestGamePickerTsx2 {
    constructor() {
      obj = { opacity: 1 - closure_0.get() };
      return obj;
    }
  }
  const items2 = [tmp18];
  InterestGamePickerTsx2.__closure = items2;
  InterestGamePickerTsx2.__workletHash = 19591722165;
  InterestGamePickerTsx2.__initData = tmp17;
  const animatedStyle = require("module_1652").useAnimatedStyle(InterestGamePickerTsx2);
  const obj5 = require("module_1652");
  const items3 = [closure_29, sharedValue];
  _require = undefined;
  [tmp20, tmp21] = items3;
  class InterestGamePickerTsx3 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items4 = [tmp21];
  InterestGamePickerTsx3.__closure = items4;
  InterestGamePickerTsx3.__workletHash = 1075419286504;
  InterestGamePickerTsx3.__initData = tmp20;
  const animatedStyle1 = require("module_1652").useAnimatedStyle(InterestGamePickerTsx3);
  const tmpResult = require("module_1652");
  [tmp24, c15] = onGameToggle.useState(0);
  const tmp6Result = _slicedToArray(onGameToggle.useState(0), 2);
  const interestScrollHeader = require("InterestScrollHeader").useInterestScrollHeader();
  scrollY = interestScrollHeader.scrollY;
  let num = 0;
  if (!first1) {
    num = tmp24;
  }
  const tmpResult11 = require("InterestScrollHeader");
  const items5 = [memo, require("InterestScrollHeader").interestHeaderElevation, scrollY, num, tmp5];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  [tmp26, tmp27, tmp28, tmp29, tmp30] = items5;
  class InterestGamePickerTsx4 {
    constructor() {
      tmp = closure_0(closure_1.get(), closure_2);
      num = closure_3.searchElevation.shadowOpacity;
      tmp2 = closure_3;
      if (num == null) {
        num = 0;
      }
      obj = { shadowOpacity: num * tmp, elevation: null };
      num2 = tmp2.searchElevation.elevation;
      if (num2 == null) {
        num2 = 0;
      }
      obj.elevation = num2 * tmp;
      return obj;
    }
  }
  const items6 = [tmp27, tmp28, tmp29, tmp30];
  InterestGamePickerTsx4.__closure = items6;
  InterestGamePickerTsx4.__workletHash = 16996483244969;
  InterestGamePickerTsx4.__initData = tmp26;
  const animatedStyle2 = require("module_1652").useAnimatedStyle(InterestGamePickerTsx4);
  const tmpResult12 = require("module_1652");
  const items7 = [memo2, require("InterestScrollHeader").interestHeaderElevation, scrollY, num];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp32, tmp33, tmp34, tmp35] = items7;
  class InterestGamePickerTsx5 {
    constructor() {
      obj = { opacity: closure_0(closure_1.get(), closure_2) };
      return obj;
    }
  }
  const items8 = [tmp33, tmp34, tmp35];
  InterestGamePickerTsx5.__closure = items8;
  InterestGamePickerTsx5.__workletHash = 98767186851;
  InterestGamePickerTsx5.__initData = tmp32;
  const animatedStyle3 = require("module_1652").useAnimatedStyle(InterestGamePickerTsx5);
  ref1 = obj3.useRef(null);
  ref2 = obj3.useRef(null);
  const tmp39 = useMeasuredLayoutDefault();
  const width = tmp39.width;
  let num2 = 0;
  ({ ref, onLayout } = tmp39);
  if (undefined !== width) {
    num2 = width;
  }
  ref = obj3.useRef(null);
  const tmpResult13 = require("module_1652");
  const items9 = [first];
  stateFromStores = require("initialize").useStateFromStores(items9, () => first.useReducedMotion);
  const tmp41 = useKeyboardIsOpenDefault();
  let num3 = 1;
  let result = (num2 - 2 * scrollY - closure_13 * (first1 - 1)) / first1;
  const rounded = Math.floor(result * obj.get());
  roundToNearestPixelResult1 = obj.roundToNearestPixel(rounded / obj.get());
  const sum = closure_13 + (result - roundToNearestPixelResult1) * first1 / (first1 - 1);
  ref2 = obj3.useRef(false);
  if (Number.isFinite(minSelection)) {
    const _Math = Math;
    const _Math2 = Math;
    bound = Math.min(Math.max(minSelection, c15), sharedValue);
  } else {
    bound = c15;
  }
  const tmp42 = first1;
  const tmpResult14 = require("initialize");
  const tmpResult15 = require("useGameAutocomplete");
  const debouncedGameAutocomplete = tmpResult15.useDebouncedGameAutocomplete(str, { surface: require("GameSearchSurfaces").GameSearchSurface.INTEREST_PICKER, filterGroup: require("GameSearchFilterGroup").GameSearchFilterGroup.DEFAULT });
  results = debouncedGameAutocomplete.results;
  error = debouncedGameAutocomplete.error;
  onSelect = debouncedGameAutocomplete.onSelect;
  const items10 = [results];
  memo = obj3.useMemo(() => {
    items = results;
    if (results == null) {
      items = [];
    }
    const found = items.filter(GameAutocompleteUtils.isGameAutocompleteResultAllowedInGameWidgets);
    return found.map((id) => id.id);
  }, items10);
  const tmp52 = str.trim().length > 0;
  const items11 = [memo, catalog, first];
  const memo1 = obj3.useMemo(() => {
    items = [...first];
    return Array.from(new Set(items));
  }, items11);
  const tmp54 = useGameRecordsDefault(memo1);
  closure_28 = tmp54;
  let tmp55 = tmp52;
  if (tmp52) {
    tmp55 = null == error;
  }
  closure_29 = tmp55;
  let tmp56 = catalog;
  if (tmp55) {
    tmp56 = memo;
  }
  memo = tmp56;
  const obj6 = { surface: require("GameSearchSurfaces").GameSearchSurface.INTEREST_PICKER, filterGroup: require("GameSearchFilterGroup").GameSearchFilterGroup.DEFAULT };
  const items12 = [closure_10];
  const items13 = [tmp56];
  const stateFromStores1 = require("initialize").useStateFromStores(items12, () => memo.some((item) => null == game.getGame(item) && !game.hasNoData(item) && !game.didFetchingFail(item)), items13);
  const tmpResult16 = require("initialize");
  const items14 = [closure_10];
  const items15 = [catalog];
  let stateFromStores2 = require("initialize").useStateFromStores(items14, () => _undefined.some((item) => closure_1_10.didFetchingFail(item)), items15);
  const items16 = [tmp54];
  memo2 = obj3.useMemo(() => new Map(closure_28.map((id) => {
    items = [id.id, id];
    return items;
  })), items16);
  const items17 = [catalog, memo2];
  const items18 = [memo, memo2];
  const memo3 = obj3.useMemo(() => {
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
  }, items17);
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
  }, items18);
  arr22 = memo3;
  if (tmp55) {
    arr22 = memo4;
  }
  isLoading = tmp52;
  if (tmp52) {
    isLoading = debouncedGameAutocomplete.isLoading;
  }
  if (!isLoading) {
    isLoading = stateFromStores1;
  }
  let tmp85Result3 = tmp52;
  if (tmp52) {
    tmp85Result3 = !isLoading;
  }
  if (tmp85Result3) {
    tmp85Result3 = null == error;
  }
  if (tmp85Result3) {
    tmp85Result3 = 0 === arr22.length;
  }
  let tmp85Result4 = !tmp52;
  if (!tmp52) {
    tmp85Result4 = !isLoading;
  }
  if (tmp85Result4) {
    tmp85Result4 = 0 === arr22.length;
  }
  const items19 = [memo2, first];
  memo5 = obj3.useMemo(() => {
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
  }, items19);
  const items20 = [memo5];
  memo6 = obj3.useMemo(() => memo5.map((id) => id.id), items20);
  length = memo6.length;
  const tmp6Result2 = _slicedToArray(onGameToggle.useState(memo5), 2);
  first2 = tmp6Result2[0];
  let tmp65 = memo5.length > 0;
  if (tmp65) {
    tmp65 = memo5.length !== first2.length || memo5.some((item, index) => item !== first2[index]);
    const tmp66 = memo5.length !== first2.length || memo5.some((item, index) => item !== first2[index]);
  }
  if (tmp65) {
    tmp6Result2[1](memo5);
  }
  closure_39 = tmp68;
  const tmp63 = memo6.length >= bound;
  const tmpResult17 = require("initialize");
  sharedValue1 = require("module_1652").useSharedValue(0);
  const tmpResult18 = require("module_1652");
  const items21 = [memo4, stateFromStores, sharedValue1, tmp8, nativeDefault];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  [tmp70, tmp71, tmp72, tmp73, tmp74] = items21;
  class InterestGamePickerTsx6 {
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
  const items22 = [tmp71, tmp72, tmp73, tmp74];
  InterestGamePickerTsx6.__closure = items22;
  InterestGamePickerTsx6.__workletHash = 9712426308148;
  InterestGamePickerTsx6.__initData = tmp70;
  const items23 = [sharedValue1, length > 0 && !tmp41, stateFromStores];
  const animatedStyle4 = require("module_1652").useAnimatedStyle(InterestGamePickerTsx6);
  const effect1 = obj3.useEffect(() => {
    let num = 0;
    if (closure_39) {
      num = 1;
    }
    if (stateFromStores) {
      const obj2 = { duration: 100 };
      let str = "respect-motion-settings";
      if (tmp3) {
        str = "animate-always";
      }
      const result = sharedValue1.set(obj.withTiming(num, obj2, str));
    }
    obj = timing_timing;
  }, items23);
  onGameToggle.useRef(length);
  const items24 = [length];
  const effect2 = obj3.useEffect(() => {
    if (ref3.current !== length) {
      ref3.current = length;
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const intl = util.intl;
      const obj = { count: length, max };
      AccessibilityAnnouncer.announce(intl.formatToPlainString(_modDef2534.v9v0uY, obj));
    }
  }, items24);
  const tmpResult19 = require("module_1652");
  result1 = require("GameAutocompleteUtils").normalizeGameAutocompleteQuery(str);
  onGameToggle.useRef(null);
  const items25 = [result1, isLoading, error, results, memo4.length, onSearch];
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
        tmp2 = ref4.current === result1;
      }
      if (!tmp2) {
        ref4.current = result1;
        if (onSearch != null) {
          tmp7(result1.length, memo4.length);
        }
      }
    } else {
      ref4.current = null;
    }
  }, items25);
  onGameToggle.useRef(first);
  const items26 = [onGameToggle, arr22];
  closure_45 = obj3.useCallback((arg0) => {
    closure_0 = arg0;
    if (!ref2.current) {
      const current = ref5.current;
      const hasItem = current.includes(arg0);
      if (hasItem) {
        if (hasItem) {
          let found = current.filter((item) => item !== closure_0);
        } else {
          found = [];
          found[HermesBuiltin.arraySpread(current, 0)] = arg0;
        }
        ref5.current = found;
        closure_10(found);
        const findIndexResult = arr22.findIndex((id) => id.id === closure_0);
        if (onGameToggle != null) {
          let tmp13 = null;
          if (-1 !== findIndexResult) {
            tmp13 = findIndexResult;
          }
          tmp11(arg0, tmp13, tmp3);
        }
      }
    }
  }, items26);
  onPress = tmp3(7227)((arg0) => {
    hasOwnProperty.dismiss();
    const current = ref5.current;
    if (current.length >= max) {
      if (!current.includes(arg0)) {
        const _Date = Date;
        const timestamp = Date.now();
        ref.current = timestamp;
        const intl = util.intl;
        const obj = { count: max, max };
        const formatToPlainStringResult = intl.formatToPlainString(_modDef2534.v9v0uY, obj);
        const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
        const obj4 = { text: formatToPlainStringResult };
        ToastActionCreatorsDefault.open("INTEREST_GAME_PICKER_LIMIT", obj4);
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(formatToPlainStringResult);
      }
    }
    if (closure_29) {
      onSelect(arg0);
    }
    closure_45(arg0);
  });
  const items27 = [bound, onContinue, memo6];
  const items28 = [onSkip, memo6];
  const callback = obj3.useCallback(() => {
    let current = ref2.current;
    if (!current) {
      current = memo6.length < bound;
    }
    if (!current) {
      ref2.current = true;
      _undefined2(memo6);
    }
  }, items27);
  const items29 = [ref2, scrollY];
  const callback1 = obj3.useCallback(() => {
    if (!ref2.current) {
      tmp.current = true;
      _undefined3(memo6);
    }
  }, items28);
  const items30 = [ref2, scrollY];
  const callback2 = obj3.useCallback(() => {
    const current = ref1.current;
    if (current != null) {
      current.blur();
    }
    closure_13(false);
    hasOwnProperty.dismiss();
    const current2 = ref2.current;
    if (current2 != null) {
      current2.scrollTo({ y: 0, animated: false });
    }
    const result = scrollY.set(0);
  }, items29);
  const items31 = [catalog];
  const callback3 = obj3.useCallback(() => {
    const current = ref1.current;
    if (current != null) {
      current.setText("");
    }
    const current2 = ref1.current;
    if (current2 != null) {
      current2.blur();
    }
    _undefined6("");
    closure_13(false);
    const current3 = ref2.current;
    if (current3 != null) {
      current3.scrollTo({ y: 0, animated: false });
    }
    const result = scrollY.set(0);
  }, items30);
  const obj7 = { style: tmp5.screen, children: null };
  const obj8 = { ref, onLayout, style: tmp5.body, children: null };
  const callback4 = obj3.useCallback(() => {
    const useGame = useGame2.useGame;
    items = [
      ...c0.map((item) => {
        items = [item];
        return items;
      })
    ];
    useGame.fetchMany.apply(items);
  }, items31);
  const obj9 = { style: tmp5.header, children: null };
  const obj10 = { style: tmp5.navTitle, collapsable: false, children: null };
  const obj11 = { style: null, children: ref2(require("InterestScrollHeader").InterestCompactTitle, { title, scrollY, collapseOffset: tmp24 }) };
  const items32 = [tmp5.screen, animatedStyle];
  obj11.style = items32;
  const items33 = [ref2(_modDef1652.View, obj11), ];
  const obj12 = { pointerEvents: "none", accessibilityElementsHidden: !first1, importantForAccessibility: null, style: null, children: null };
  let str2 = "no-hide-descendants";
  let str3 = "no-hide-descendants";
  if (first1) {
    str3 = "auto";
  }
  obj12.importantForAccessibility = str3;
  const items34 = [tmp5.searchTitle, animatedStyle1];
  obj12.style = items34;
  const obj13 = { variant: "body-md/semibold", lineClamp: 1, children: null };
  let intl = tmp(1113).intl;
  obj13.children = intl.string(_modDef2534["8Xenq+"]);
  obj12.children = ref2(require("Text/Text").Text, obj13);
  items33[1] = ref2(_modDef1652.View, obj12);
  obj10.children = items33;
  const items35 = [bound(c8, obj10), ];
  const obj14 = { style: tmp5.navActions, children: null };
  const obj15 = { label: null, labelStyle: null, onPress: null };
  const intl2 = tmp(1113).intl;
  const string = intl2.string;
  const t = tmp(1113).t;
  if (first1) {
    obj15.label = string(t["ETE/oC"]);
    obj15.labelStyle = tmp5.skip;
    obj15.onPress = callback3;
    let tmp88 = obj15;
  } else {
    obj15.label = string(t["5Wxrcd"]);
    obj15.labelStyle = tmp5.skip;
    obj15.onPress = callback1;
    tmp88 = obj15;
  }
  const obj16 = { top: true, children: null };
  obj14.children = ref2(require("HeaderShared").HeaderTextButton, tmp88);
  items35[1] = ref2(c8, obj14);
  obj9.children = items35;
  obj16.children = bound(c8, obj9);
  const items36 = [ref2(require("common/SafeAreaView").SafeAreaPaddingView, obj16), ];
  const obj17 = { ref: ref2, stickyHeaderIndices: null, onScroll: null, scrollEventThrottle: 16, contentInsetAdjustmentBehavior: "never", style: null, contentContainerStyle: null, keyboardDismissMode: "on-drag", keyboardShouldPersistTaps: "handled", automaticallyAdjustKeyboardInsets: false, children: null };
  if (first1) {
    num3 = 0;
  }
  const items37 = [num3];
  obj17.stickyHeaderIndices = items37;
  obj17.onScroll = interestScrollHeader.onScroll;
  obj17.style = tmp5.screen;
  const items38 = [tmp5.content, ];
  if (tmp41) {
    let num5 = 0;
    if (!tmp85Result3) {
      num5 = tmp3(575).space.PX_16;
    }
    let sum1 = num5;
  } else {
    sum1 = bottom;
    if (0 !== length) {
      let num4 = 0;
      if (!tmp85Result3) {
        num4 = tmp3(575).space.PX_32;
      }
      sum1 = tmp8 + num4;
    }
  }
  items38[1] = { paddingBottom: sum1 };
  obj17.contentContainerStyle = items38;
  let tmp85Result = !first1;
  if (!first1) {
    const obj18 = {
      style: tmp5.intro,
      collapsable: false,
      onLayout(nativeEvent) {
          return _undefined7(nativeEvent.nativeEvent.layout.height);
        },
      children: null
    };
    const obj19 = { variant: "heading-xl/semibold", color: "text-strong", children: title };
    const items39 = [tmp87(tmp(5781).Heading, obj19), ];
    const obj20 = { style: tmp5.subtitle, variant: "body-sm/normal", color: "text-default", children: catalog.subtitle };
    items39[1] = tmp87(tmp(5781).Text, obj20);
    obj18.children = items39;
    tmp85Result = tmp85(tmp86, obj18);
  }
  const items40 = [tmp85Result, , ];
  const obj21 = { children: null };
  const obj22 = { style: null, children: null };
  const items41 = [, , ];
  ({ search: arr48[0], searchElevation: arr48[1] } = tmp5);
  items41[2] = animatedStyle2;
  obj22.style = items41;
  const obj23 = { pointerEvents: "none", style: null };
  const items42 = [tmp5.searchEdge, animatedStyle3];
  obj23.style = items42;
  const items43 = [ref2(_modDef1652.View, obj23), ];
  const obj24 = { ref: ref1, grow: false, accessibilityLabel: null, onChange: null, onFocus: null, onSubmitEditing: null, placeholder: null };
  const intl3 = tmp(1113).intl;
  obj24.accessibilityLabel = intl3.string(_modDef2534["8Xenq+"]);
  obj24.onChange = tmp12;
  obj24.onFocus = function onFocus() {
    closure_13(true);
    const current = ref2.current;
    if (current != null) {
      current.scrollTo({ y: 0, animated: false });
    }
    const result = scrollY.set(0);
  };
  obj24.onSubmitEditing = callback2;
  const intl4 = tmp(1113).intl;
  obj24.placeholder = intl4.string(_modDef2534["8Xenq+"]);
  items43[1] = ref2(require("Search/SearchBar").SearchBar, obj24);
  obj22.children = items43;
  obj21.children = bound(_modDef1652.View, obj22);
  items40[1] = ref2(c8, obj21);
  const obj25 = { style: tmp5.content, children: null };
  let tmp87Result = isLoading;
  if (isLoading) {
    const obj26 = { style: null, accessible: true, accessibilityLabel: null, accessibilityState: null, children: null };
    const items44 = [tmp5.grid, ];
    const obj27 = { columnGap: sum };
    items44[1] = obj27;
    obj26.style = items44;
    const intl5 = tmp(1113).intl;
    obj26.accessibilityLabel = intl5.string(tmp(1113).t.ZTNur7);
    obj26.accessibilityState = { busy: true };
    let arr = roundToNearestPixelResult1 > 0;
    if (arr) {
      const _Array = Array;
      const obj28 = { length: 4 * tmp42 };
      arr = Array.from(obj28, (arg0, arg1) => {
        const obj = { style: null, children: null };
        const size = { width: roundToNearestPixelResult1, height: timestampProducer.roundToNearestPixel(roundToNearestPixelResult1 / expandedHeight) };
        obj.style = size;
        const obj2 = { style: null };
        items = [, ];
        ({ screen: arr[0], tileWrapper: arr[1] } = closure_7);
        obj2.style = items;
        const items1 = [closure_2_22(InterestGhostDefault, obj2), closure_2_22(InterestTileEdgeDefault, { radius })];
        obj.children = items1;
        return dependencyMap2(React5, obj, arg1);
      });
    }
    obj26.children = arr;
    tmp87Result = tmp87(tmp86, obj26);
  }
  const items45 = [tmp87Result, , , ];
  if (tmp85Result3) {
    const obj29 = { style: tmp5.empty, children: null };
    const obj30 = { variant: "body-sm/semibold", color: "text-muted", style: tmp5.subtitle, children: null };
    const intl6 = tmp(1113).intl;
    obj30.children = intl6.string(tmp3(2534).w5cRz0);
    const items46 = [tmp87(tmp(5781).Heading, obj30), ];
    const obj31 = { variant: "body-sm/semibold", color: "text-muted", style: tmp5.subtitle, children: null };
    const intl7 = tmp(1113).intl;
    obj31.children = intl7.string(tmp3(2534).Khsqzs);
    items46[1] = tmp87(tmp(5781).Text, obj31);
    obj29.children = items46;
    tmp85Result3 = tmp85(tmp86, obj29);
  }
  items45[1] = tmp85Result3;
  if (tmp85Result4) {
    const obj32 = { style: tmp5.status, children: null };
    const intl8 = tmp(1113).intl;
    const tmp3Result = tmp3(2534);
    const obj33 = { variant: "body-md/semibold", color: "text-strong", children: intl8.string(stateFromStores2 ? tmp3Result["+np3yH"] : tmp3Result.V7UsE0) };
    const items47 = [tmp87(tmp(5781).Text, obj33), , ];
    const intl9 = tmp(1113).intl;
    const tmp3Result2 = tmp3(2534);
    const obj34 = { variant: "body-sm/normal", color: "text-muted", children: intl9.string(stateFromStores2 ? tmp3Result2.CjS26n : tmp3Result2.qx4Gb6) };
    items47[1] = tmp87(tmp(5781).Text, obj34);
    if (stateFromStores2) {
      const obj35 = { onPress: callback4, size: "sm", text: null, variant: "secondary" };
      const intl10 = tmp(1113).intl;
      obj35.text = intl10.string(tmp3(2534).uGhymA);
      stateFromStores2 = tmp87(tmp(5788).Button, obj35);
    }
    items47[2] = stateFromStores2;
    obj32.children = items47;
    tmp85Result4 = tmp85(tmp86, obj32);
  }
  items45[2] = tmp85Result4;
  let tmp87Result3 = !isLoading;
  if (!isLoading) {
    tmp87Result3 = arr22.length > 0;
  }
  if (tmp87Result3) {
    const obj36 = { style: null, children: null };
    const items48 = [tmp5.grid, ];
    const obj37 = { columnGap: sum };
    items48[1] = obj37;
    obj36.style = items48;
    obj36.children = roundToNearestPixelResult1 > 0 && arr22.map((game) => {
      const hasItem = first.includes(game.id);
      let tmp2 = !hasItem;
      if (!hasItem) {
        tmp2 = memo6.length >= gesture;
      }
      return closure_2_22(closure_27, { game, width: roundToNearestPixelResult1, selected: hasItem, unavailable: tmp2, styles, radius, onPress }, game.id);
    });
    tmp87Result3 = tmp87(tmp86, obj36);
    const tmp96 = roundToNearestPixelResult1 > 0 && arr22.map((game) => {
      const hasItem = first.includes(game.id);
      let tmp2 = !hasItem;
      if (!hasItem) {
        tmp2 = memo6.length >= gesture;
      }
      return closure_2_22(closure_27, { game, width: roundToNearestPixelResult1, selected: hasItem, unavailable: tmp2, styles, radius, onPress }, game.id);
    });
  }
  items45[3] = tmp87Result3;
  obj25.children = items45;
  items40[2] = bound(c8, obj25);
  obj17.children = items40;
  items36[1] = bound(_modDef1652.ScrollView, obj17);
  obj8.children = items36;
  const items49 = [bound(c8, obj8), ];
  const obj38 = { accessibilityElementsHidden: !(length > 0 && !tmp41), importantForAccessibility: null, pointerEvents: null, style: null, children: null };
  if (length > 0 && !tmp41) {
    str2 = "auto";
  }
  obj38.importantForAccessibility = str2;
  let str4 = "none";
  if (length > 0 && !tmp41) {
    str4 = "auto";
  }
  obj38.pointerEvents = str4;
  const items50 = [tmp5.footerPosition, animatedStyle4];
  obj38.style = items50;
  const obj39 = {
    onLayout(nativeEvent) {
      return _undefined5(nativeEvent.nativeEvent.layout.height);
    },
    style: null,
    children: null
  };
  const items51 = [tmp5.footer, ];
  const tmpResult20 = require("GameAutocompleteUtils");
  items51[1] = { paddingBottom: Math.max(bottom, nativeDefault.space.PX_16) };
  obj39.style = items51;
  const obj41 = { style: tmp5.footerContent, children: null };
  const items52 = [
    ref2(InterestGameTrayDefault, {
      games: first2,
      coverWidth: roundToNearestPixelResult1,
      reduceMotion: stateFromStores,
      onRemove(arg0) {
        closure_45(arg0);
      }
    }),

  ];
  const obj43 = { style: tmp5.footerActions, children: null };
  let tmp87Result4 = first2.length >= 7;
  if (tmp87Result4) {
    const obj44 = { variant: "body-sm/medium", color: "text-default", children: null };
    const intl11 = tmp(1113).intl;
    const obj45 = { count: first2.length, max: sharedValue };
    obj44.children = intl11.format(tmp3(2534).v9v0uY, obj45);
    tmp87Result4 = tmp87(tmp(5781).Text, obj44);
  }
  const items53 = [tmp87Result4, ];
  const obj46 = { children: null };
  const obj47 = { accessibilityLabel: null, disabled: null, icon: null, onPress: null, size: "lg", variant: "primary" };
  const intl12 = tmp(1113).intl;
  obj47.accessibilityLabel = intl12.string(require("util").t["3PatSz"]);
  obj47.disabled = !tmp63;
  const obj40 = { paddingBottom: Math.max(bottom, nativeDefault.space.PX_16) };
  const obj42 = {
    games: first2,
    coverWidth: roundToNearestPixelResult1,
    reduceMotion: stateFromStores,
    onRemove(arg0) {
      closure_45(arg0);
    }
  };
  obj47.icon = ref2(require("ArrowLargeRightIcon").ArrowLargeRightIcon, { color: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT });
  obj47.onPress = callback;
  obj46.children = ref2(require("IconButton").IconButton, obj47);
  items53[1] = ref2(c8, obj46);
  obj43.children = items53;
  items52[1] = bound(c8, obj43);
  obj41.children = items52;
  obj39.children = bound(c8, obj41);
  obj38.children = ref2(c8, obj39);
  items49[1] = ref2(_modDef1652.View, obj38);
  obj7.children = items49;
  return bound(c8, obj7);
};