// === Module 18714: InterestGamePicker ===

// Module 18714 (InterestGamePicker)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _mod1652 from "module_1652" /* 1652 */;
import _modDef2537 from "module_2537" /* 2537 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5152 */;
import timing_timing from "timing/timing" /* 5380 */;
import timingPresets from "timingPresets" /* 5383 */;
import HapticUtils from "HapticUtils" /* 5386 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5849 */;
import useKeyboardIsOpenDefault from "useKeyboardIsOpen" /* 7250 */;
import useGame2 from "useGame" /* 7622 */;
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 8827 */;
import useMeasuredLayoutDefault from "useMeasuredLayout" /* 9141 */;
import useGameRecordsDefault from "useGameRecords" /* 15188 */;
import InterestTileEdgeDefault from "InterestTileEdge" /* 18719 */;
import InterestGhostDefault from "InterestGhost" /* 18721 */;
import InterestGameTrayDefault from "InterestGameTray" /* 18722 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5144 */;
import GameStore from "GameStore" /* 2143 */;

const require = globalThis.__r;
const _modDef1652 = _mod1652;

require = fn;
function StaticInterestGameTile(radius) {
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
    formatToPlainStringResult = intl.formatToPlainString(require("module_2537").v9v0uY, obj4);
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
  const size = { width, height: width / closure_19 };
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
  return closure_22(closure_6, obj3);
}
get_ActivityIndicator = fn(17);
({ Keyboard: hasOwnProperty, Pressable: closure_6, ScrollView: metroImportDefault, View: closure_8 } = get_ActivityIndicator);
const InterestGamePickerConstants = fn(18715);
({ FOOTER_BORDER_WIDTH: closure_11, GRID_COLUMNS: closure_12, GRID_GAP: map1, MAX_SELECTIONS: closure_14, MIN_SELECTIONS: closure_15, SCREEN_HORIZONTAL_PADDING: closure_16, SELECTED_BORDER_WIDTH: closure_17, SELECTED_GAP_WIDTH: closure_18, TILE_ASPECT_RATIO: closure_19, TRAY_ENTER_MS: closure_20, TRAY_EXIT_MS: closure_21 } = InterestGamePickerConstants);
const jsxProd = fn(21);
({ jsx: closure_22, jsxs: closure_23, Fragment: closure_24 } = jsxProd);
const createStyles = fn(5143);
let closure_25 = createStyles.createStyles((borderRadius) => {
  const obj = { screen: { flex: 1 }, body: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, header: null, skip: null, content: null, empty: null, intro: null, subtitle: null, search: null, navTitle: null, searchTitle: null, navActions: null, grid: null, tileWrapper: null, selectedGlow: null, tile: null, selected: null, selectedInner: null, status: null, footerPosition: null, footer: null, footerContent: null, footerActions: null };
  const obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  obj.header = { height: nativeDefault.space.PX_64, paddingHorizontal, paddingVertical: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
  const obj3 = { height: nativeDefault.space.PX_64, paddingHorizontal, paddingVertical: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
  obj.skip = { color: nativeDefault.colors.TEXT_BRAND };
  obj.content = { flexGrow: 1 };
  const obj4 = { color: nativeDefault.colors.TEXT_BRAND };
  obj.empty = { flex: 1, alignItems: "center", paddingTop: nativeDefault.space.PX_40, paddingHorizontal, gap: nativeDefault.space.PX_4 };
  const obj5 = { flex: 1, alignItems: "center", paddingTop: nativeDefault.space.PX_40, paddingHorizontal, gap: nativeDefault.space.PX_4 };
  obj.intro = { flexShrink: 0, alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_8 };
  obj.subtitle = { textAlign: "center" };
  const obj6 = { flexShrink: 0, alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_8 };
  obj.search = { flexShrink: 0, paddingHorizontal, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  obj.navTitle = { flex: 1, alignSelf: "stretch", justifyContent: "center" };
  obj.searchTitle = { position: "absolute", inset: 0, alignItems: "center", justifyContent: "center" };
  const obj7 = { flexShrink: 0, paddingHorizontal, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  obj.navActions = { minWidth: nativeDefault.space.PX_64, alignItems: "flex-end" };
  const obj8 = { minWidth: nativeDefault.space.PX_64, alignItems: "flex-end" };
  obj.grid = { flexDirection: "row", flexWrap: "wrap", gap, paddingHorizontal, paddingTop: nativeDefault.space.PX_8 };
  obj.tileWrapper = { borderRadius };
  const obj9 = { flexDirection: "row", flexWrap: "wrap", gap, paddingHorizontal, paddingTop: nativeDefault.space.PX_8 };
  obj.selectedGlow = { shadowColor: nativeDefault.colors.BACKGROUND_BRAND, shadowOffset: { width: 0, height: 2 }, shadowRadius: 33, shadowOpacity: 0.2, elevation: 8 };
  const obj10 = { shadowColor: nativeDefault.colors.BACKGROUND_BRAND, shadowOffset: { width: 0, height: 2 }, shadowRadius: 33, shadowOpacity: 0.2, elevation: 8 };
  obj.tile = { flex: 1, aspectRatio, overflow: "hidden", borderRadius, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  const obj11 = { flex: 1, aspectRatio, overflow: "hidden", borderRadius, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  obj.selected = { position: "absolute", inset: -borderWidth - borderWidth2, borderWidth, borderRadius: borderRadius + borderWidth + borderWidth2, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
  const obj12 = { position: "absolute", inset: -borderWidth - borderWidth2, borderWidth, borderRadius: borderRadius + borderWidth + borderWidth2, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
  obj.selectedInner = { position: "absolute", inset: -borderWidth2, borderWidth: borderWidth2, borderRadius: borderRadius + borderWidth2, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  const obj13 = { position: "absolute", inset: -borderWidth2, borderWidth: borderWidth2, borderRadius: borderRadius + borderWidth2, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  obj.status = { alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal, paddingTop: nativeDefault.space.PX_40 };
  obj.footerPosition = { position: "absolute", bottom: 0, left: 0, right: 0 };
  const obj14 = { alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal, paddingTop: nativeDefault.space.PX_40 };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
  obj.footer = { borderTopWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal, paddingTop: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  const obj15 = { borderTopWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal, paddingTop: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  obj.footerContent = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_16 };
  const obj16 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_16 };
  obj.footerActions = { flexShrink: 0, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
  return obj;
});
let closure_26 = { code: "(function InterestGamePickerTsx1(){let[selected,depth]=this.__closure;return{opacity:selected?0:1-Math.min(1,Math.max(0,depth.get())/0.2)};})" };
let closure_28 = { code: "(function InterestGamePickerTsx2(){let[searchProgress]=this.__closure;return{opacity:1-searchProgress.get()};})" };
let closure_29 = { code: "(function InterestGamePickerTsx3(){let[searchProgress]=this.__closure;return{opacity:searchProgress.get()};})" };
let closure_30 = { code: "(function InterestGamePickerTsx4(){let[nextScale]=this.__closure;return{transform:[{scale:nextScale.get()}]};})" };
let closure_31 = { code: "(function InterestGamePickerTsx5(){let[reduceMotion,trayProgress,footerHeight,tokens]=this.__closure;return{opacity:reduceMotion?trayProgress.get():1,transform:[{translateY:reduceMotion?0:(1-trayProgress.get())*(footerHeight>0?footerHeight:tokens.space.PX_128)}]};})" };
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
  let _slicedToArray = initialSelection;
  const onGameToggle = catalog.onGameToggle;
  const onSearch = catalog.onSearch;
  c8 = undefined;
  first = undefined;
  closure_10 = undefined;
  first1 = undefined;
  closure_13 = undefined;
  c15 = undefined;
  let scrollY;
  let ref1;
  ref = undefined;
  let sharedValue1;
  let stateFromStores;
  let ref2;
  let rounded;
  let bound;
  let results;
  let error;
  let onSelect;
  closure_30 = undefined;
  closure_31 = undefined;
  let memo;
  let memo2;
  let memo4;
  let memo3;
  let isLoading;
  let memo5;
  let memo6;
  let length;
  closure_40 = undefined;
  let first2;
  closure_42 = undefined;
  let sharedValue2;
  c45 = undefined;
  let callback;
  let onPress;
  const token = require("useToken").useToken(nativeDefault.modules.mobile.INPUT_FIELD_RADIUS_LG);
  const tmp5 = bound(token);
  const styles = tmp5;
  const bottom = useSafeAreaInsetsDefault().bottom;
  let obj = require("useToken");
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
  let obj3 = require("module_1652");
  let items1 = [onSelect, sharedValue];
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
  let obj4 = require("module_1652");
  const items3 = [memo, sharedValue];
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
  ref1 = obj2.useRef(null);
  ref2 = obj2.useRef(null);
  const tmp28 = useMeasuredLayoutDefault();
  const width = tmp28.width;
  let num = 0;
  ({ ref, onLayout } = tmp28);
  if (undefined !== width) {
    num = width;
  }
  ref = obj2.useRef(null);
  const tmpResult11 = require("InterestScrollHeader");
  let num2 = 1;
  sharedValue1 = require("module_1652").useSharedValue(1);
  const tmpResult12 = require("module_1652");
  const items5 = [closure_30, sharedValue1];
  _require = undefined;
  [tmp30, tmp31] = items5;
  class InterestGamePickerTsx4 {
    constructor() {
      obj = { transform: null };
      obj1 = { scale: closure_0.get() };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items6 = [tmp31];
  InterestGamePickerTsx4.__closure = items6;
  InterestGamePickerTsx4.__workletHash = 10706204519288;
  InterestGamePickerTsx4.__initData = tmp30;
  const animatedStyle2 = require("module_1652").useAnimatedStyle(InterestGamePickerTsx4);
  const tmpResult13 = require("module_1652");
  const items7 = [first];
  stateFromStores = require("initialize").useStateFromStores(items7, () => first.useReducedMotion);
  const tmp34 = useKeyboardIsOpenDefault();
  ref2 = obj2.useRef(false);
  rounded = Math.floor((num - 2 * scrollY - closure_13 * (first1 - num2)) / first1);
  onGameToggle.useRef(false);
  if (Number.isFinite(minSelection)) {
    const _Math = Math;
    const _Math2 = Math;
    bound = Math.min(Math.max(minSelection, c15), sharedValue);
  } else {
    bound = c15;
  }
  const tmp35 = first1;
  const tmpResult14 = require("initialize");
  const tmpResult15 = require("useGameAutocomplete");
  const debouncedGameAutocomplete = tmpResult15.useDebouncedGameAutocomplete(str, { surface: require("GameSearchSurfaces").GameSearchSurface.INTEREST_PICKER, filterGroup: require("GameSearchFilterGroup").GameSearchFilterGroup.DEFAULT });
  results = debouncedGameAutocomplete.results;
  error = debouncedGameAutocomplete.error;
  onSelect = debouncedGameAutocomplete.onSelect;
  const items8 = [results];
  memo = obj2.useMemo(() => {
    items = results;
    if (results == null) {
      items = [];
    }
    const found = items.filter(GameAutocompleteUtils.isGameAutocompleteResultAllowedInGameWidgets);
    return found.map((id) => id.id);
  }, items8);
  const tmp42 = str.trim().length > 0;
  const items9 = [memo, catalog, first];
  const memo1 = obj2.useMemo(() => {
    items = [...first];
    return Array.from(new Set(items));
  }, items9);
  const tmp44 = useGameRecordsDefault(memo1);
  closure_30 = tmp44;
  let tmp45 = tmp42;
  if (tmp42) {
    tmp45 = null == error;
  }
  closure_31 = tmp45;
  let tmp46 = catalog;
  if (tmp45) {
    tmp46 = memo;
  }
  memo = tmp46;
  const obj5 = { surface: require("GameSearchSurfaces").GameSearchSurface.INTEREST_PICKER, filterGroup: require("GameSearchFilterGroup").GameSearchFilterGroup.DEFAULT };
  const items10 = [closure_10];
  const items11 = [tmp46];
  const stateFromStores1 = require("initialize").useStateFromStores(items10, () => memo.some((item) => null == game.getGame(item) && !game.hasNoData(item) && !game.didFetchingFail(item)), items11);
  const tmpResult16 = require("initialize");
  const items12 = [closure_10];
  const items13 = [catalog];
  let stateFromStores2 = require("initialize").useStateFromStores(items12, () => _undefined.some((item) => closure_1_10.didFetchingFail(item)), items13);
  const items14 = [tmp44];
  memo2 = obj2.useMemo(() => new Map(closure_30.map((id) => {
    items = [id.id, id];
    return items;
  })), items14);
  const items15 = [catalog, memo2];
  memo3 = obj2.useMemo(() => {
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
  }, items15);
  const items16 = [memo, memo2];
  memo4 = obj2.useMemo(() => {
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
  }, items16);
  if (tmp45) {
    memo3 = memo4;
  }
  isLoading = tmp42;
  if (tmp42) {
    isLoading = debouncedGameAutocomplete.isLoading;
  }
  if (!isLoading) {
    isLoading = stateFromStores1;
  }
  let tmp78Result3 = tmp42;
  if (tmp42) {
    tmp78Result3 = !isLoading;
  }
  if (tmp78Result3) {
    tmp78Result3 = null == error;
  }
  if (tmp78Result3) {
    tmp78Result3 = 0 === memo3.length;
  }
  let tmp78Result4 = !tmp42;
  if (!tmp42) {
    tmp78Result4 = !isLoading;
  }
  if (tmp78Result4) {
    tmp78Result4 = 0 === memo3.length;
  }
  const items17 = [memo2, first];
  memo5 = obj2.useMemo(() => {
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
  }, items17);
  const items18 = [memo5];
  memo6 = obj2.useMemo(() => memo5.map((id) => id.id), items18);
  length = memo6.length;
  closure_40 = tmp54;
  const tmp6Result2 = _slicedToArray(onGameToggle.useState(memo5), 2);
  first2 = tmp6Result2[0];
  let tmp56 = memo5.length > 0;
  if (tmp56) {
    tmp56 = memo5.length !== first2.length || memo5.some((item, index) => item !== first2[index]);
    const tmp57 = memo5.length !== first2.length || memo5.some((item, index) => item !== first2[index]);
  }
  if (tmp56) {
    tmp6Result2[1](memo5);
  }
  closure_42 = tmp59;
  const tmp52 = memo6.length >= bound;
  const tmp53 = sharedValue;
  const tmpResult17 = require("initialize");
  sharedValue2 = require("module_1652").useSharedValue(0);
  const tmpResult18 = require("module_1652");
  const items19 = [closure_31, stateFromStores, sharedValue2, tmp8, nativeDefault];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  [tmp61, tmp62, tmp63, tmp64, tmp65] = items19;
  class InterestGamePickerTsx5 {
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
  const items20 = [tmp62, tmp63, tmp64, tmp65];
  InterestGamePickerTsx5.__closure = items20;
  InterestGamePickerTsx5.__workletHash = 7730800331799;
  InterestGamePickerTsx5.__initData = tmp61;
  const items21 = [sharedValue2, length > 0 && !tmp34, stateFromStores];
  const animatedStyle3 = require("module_1652").useAnimatedStyle(InterestGamePickerTsx5);
  const effect1 = obj2.useEffect(() => {
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
      const result = sharedValue2.set(obj.withTiming(num, obj2, str));
    }
    obj = timing_timing;
  }, items21);
  const items22 = [length >= sharedValue, sharedValue1, stateFromStores];
  const effect2 = obj2.useEffect(() => {
    let tmp = closure_40;
    if (closure_40) {
      tmp = !ref2.current;
    }
    if (tmp) {
      ref2.current = true;
      if (!stateFromStores) {
        const obj = _mod1652;
        const withTimingResult = timing_timing.withTiming(1.06, { duration: 180 });
        const result = sharedValue1.set(obj.withSequence(withTimingResult, timing_timing.withTiming(1, { duration: 180 })));
      }
    }
  }, items22);
  onGameToggle.useRef(length);
  const items23 = [length];
  const effect3 = obj2.useEffect(() => {
    if (ref4.current !== length) {
      ref4.current = length;
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const intl = util.intl;
      const obj = { count: length, max };
      AccessibilityAnnouncer.announce(intl.formatToPlainString(_modDef2537.v9v0uY, obj));
    }
  }, items23);
  const tmpResult19 = require("module_1652");
  let result = require("GameAutocompleteUtils").normalizeGameAutocompleteQuery(str);
  c45 = result;
  onGameToggle.useRef(null);
  const items24 = [result, isLoading, error, results, memo4.length, onSearch];
  const effect4 = obj2.useEffect(() => {
    if (null != current) {
      let tmp2 = isLoading;
      if (!isLoading) {
        tmp2 = null != error;
      }
      if (!tmp2) {
        tmp2 = null == results;
      }
      if (!tmp2) {
        tmp2 = ref5.current === current;
      }
      if (!tmp2) {
        ref5.current = current;
        if (onSearch != null) {
          tmp7(current.length, memo4.length);
        }
      }
    } else {
      ref5.current = null;
    }
  }, items24);
  onGameToggle.useRef(first);
  const items25 = [onGameToggle, memo3];
  callback = obj2.useCallback((arg0) => {
    closure_0 = arg0;
    if (!ref3.current) {
      current = ref6.current;
      const hasItem = current.includes(arg0);
      if (hasItem) {
        if (hasItem) {
          let found = current.filter((item) => item !== closure_0);
        } else {
          found = [];
          found[HermesBuiltin.arraySpread(current, 0)] = arg0;
        }
        ref6.current = found;
        closure_10(found);
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
  }, items25);
  const items26 = [length >= sharedValue, first, tmp45, callback, onSelect];
  onPress = obj2.useCallback((arg0) => {
    hasOwnProperty.dismiss();
    if (closure_40) {
      if (!first.includes(arg0)) {
        const _Date = Date;
        const timestamp = Date.now();
        ref.current = timestamp;
        const intl = util.intl;
        const obj = { count: max, max };
        const formatToPlainStringResult = intl.formatToPlainString(_modDef2537.v9v0uY, obj);
        const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
        const obj4 = { text: formatToPlainStringResult };
        ToastActionCreatorsDefault.open("INTEREST_GAME_PICKER_LIMIT", obj4);
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(formatToPlainStringResult);
      }
    }
    if (closure_31) {
      onSelect(arg0);
    }
    callback(arg0);
  }, items26);
  const items27 = [bound, onContinue, memo6];
  const items28 = [onSkip, memo6];
  const callback1 = obj2.useCallback(() => {
    current = ref3.current;
    if (!current) {
      current = memo6.length < bound;
    }
    if (!current) {
      ref3.current = true;
      _undefined2(memo6);
    }
  }, items27);
  const items29 = [ref2, scrollY];
  const callback2 = obj2.useCallback(() => {
    if (!ref3.current) {
      tmp.current = true;
      _undefined3(memo6);
    }
  }, items28);
  const items30 = [ref2, scrollY];
  const callback3 = obj2.useCallback(() => {
    current = ref1.current;
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
  const callback4 = obj2.useCallback(() => {
    current = ref1.current;
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
  const obj6 = { style: tmp5.screen, children: null };
  const obj7 = { ref, onLayout, style: tmp5.body, children: null };
  const callback5 = obj2.useCallback(() => {
    const useGame = useGame2.useGame;
    items = [
      ...c0.map((item) => {
        items = [item];
        return items;
      })
    ];
    useGame.fetchMany.apply(items);
  }, items31);
  const obj8 = { style: tmp5.header, children: null };
  const obj9 = { style: tmp5.navTitle, collapsable: false, children: null };
  const obj10 = { style: null, children: ref2(require("InterestScrollHeader").InterestCompactTitle, { title, scrollY, collapseOffset: tmp24 }) };
  const items32 = [tmp5.screen, animatedStyle];
  obj10.style = items32;
  const items33 = [ref2(_modDef1652.View, obj10), ];
  const obj11 = { pointerEvents: "none", accessibilityElementsHidden: !first1, importantForAccessibility: null, style: null, children: null };
  let str2 = "no-hide-descendants";
  let str3 = "no-hide-descendants";
  if (first1) {
    str3 = "auto";
  }
  obj11.importantForAccessibility = str3;
  const items34 = [tmp5.searchTitle, animatedStyle1];
  obj11.style = items34;
  const obj12 = { variant: "body-md/semibold", lineClamp: 1, children: null };
  let intl = tmp(1113).intl;
  obj12.children = intl.string(_modDef2537["8Xenq+"]);
  obj11.children = ref2(require("Text/Text").Text, obj12);
  items33[1] = ref2(_modDef1652.View, obj11);
  obj9.children = items33;
  const items35 = [rounded(c8, obj9), ];
  const obj13 = { style: tmp5.navActions, children: null };
  const obj14 = { label: null, labelStyle: null, onPress: null };
  const intl2 = tmp(1113).intl;
  const string = intl2.string;
  const t = tmp(1113).t;
  if (first1) {
    obj14.label = string(t["ETE/oC"]);
    obj14.labelStyle = tmp5.skip;
    obj14.onPress = callback4;
    let tmp81 = obj14;
  } else {
    obj14.label = string(t["5Wxrcd"]);
    obj14.labelStyle = tmp5.skip;
    obj14.onPress = callback2;
    tmp81 = obj14;
  }
  const obj15 = { top: true, children: null };
  obj13.children = ref2(require("HeaderShared").HeaderTextButton, tmp81);
  items35[1] = ref2(c8, obj13);
  obj8.children = items35;
  obj15.children = rounded(c8, obj8);
  const items36 = [ref2(require("common/SafeAreaView").SafeAreaPaddingView, obj15), ];
  const obj16 = { ref: ref2, stickyHeaderIndices: null, onScroll: null, scrollEventThrottle: 16, contentInsetAdjustmentBehavior: "never", style: null, contentContainerStyle: null, keyboardDismissMode: "on-drag", keyboardShouldPersistTaps: "handled", automaticallyAdjustKeyboardInsets: false, children: null };
  if (first1) {
    num2 = 0;
  }
  const items37 = [num2];
  obj16.stickyHeaderIndices = items37;
  obj16.onScroll = interestScrollHeader.onScroll;
  obj16.style = tmp5.screen;
  const items38 = [tmp5.content, ];
  if (tmp34) {
    let num4 = 0;
    if (!tmp78Result3) {
      num4 = tmp3(575).space.PX_16;
    }
    let sum = num4;
  } else {
    sum = bottom;
    if (0 !== length) {
      let num3 = 0;
      if (!tmp78Result3) {
        num3 = tmp3(575).space.PX_32;
      }
      sum = tmp8 + num3;
    }
  }
  items38[1] = { paddingBottom: sum };
  obj16.contentContainerStyle = items38;
  let tmp78Result = !first1;
  if (!first1) {
    const obj17 = {
      style: tmp5.intro,
      collapsable: false,
      onLayout(nativeEvent) {
          return _undefined7(nativeEvent.nativeEvent.layout.height);
        },
      children: null
    };
    const obj18 = { variant: "heading-xl/semibold", color: "text-strong", children: title };
    const items39 = [tmp80(tmp(5763).Heading, obj18), ];
    const obj19 = { style: tmp5.subtitle, variant: "body-sm/normal", color: "text-default", children: catalog.subtitle };
    items39[1] = tmp80(tmp(5763).Text, obj19);
    obj17.children = items39;
    tmp78Result = tmp78(tmp79, obj17);
  }
  const items40 = [tmp78Result, , ];
  const obj20 = { style: tmp5.search, children: null };
  const obj21 = { ref: ref1, grow: false, accessibilityLabel: null, onChange: null, onFocus: null, onSubmitEditing: null, placeholder: null };
  const intl3 = tmp(1113).intl;
  obj21.accessibilityLabel = intl3.string(_modDef2537["8Xenq+"]);
  obj21.onChange = tmp12;
  obj21.onFocus = function onFocus() {
    closure_13(true);
    current = ref2.current;
    if (current != null) {
      current.scrollTo({ y: 0, animated: false });
    }
  };
  obj21.onSubmitEditing = callback3;
  const intl4 = tmp(1113).intl;
  obj21.placeholder = intl4.string(_modDef2537["8Xenq+"]);
  obj20.children = ref2(require("Search/SearchBar").SearchBar, obj21);
  items40[1] = ref2(c8, obj20);
  const obj22 = { style: tmp5.content, children: null };
  let tmp80Result = isLoading;
  if (isLoading) {
    const obj23 = { style: tmp5.grid, accessible: true, accessibilityLabel: null, accessibilityState: null, children: null };
    const intl5 = tmp(1113).intl;
    obj23.accessibilityLabel = intl5.string(tmp(1113).t.ZTNur7);
    obj23.accessibilityState = { busy: true };
    let arr = rounded > 0;
    if (arr) {
      const _Array = Array;
      const obj24 = { length: 4 * tmp35 };
      arr = Array.from(obj24, (arg0, arg1) => {
        const obj = { style: null, children: null };
        const size = { width: rounded, height: rounded / aspectRatio };
        obj.style = size;
        const obj2 = { style: null };
        items = [, ];
        ({ screen: arr[0], tileWrapper: arr[1] } = closure_7);
        obj2.style = items;
        const items1 = [closure_2_22(InterestGhostDefault, obj2), closure_2_22(InterestTileEdgeDefault, { radius: token })];
        obj.children = items1;
        return dependencyMap2(React5, obj, arg1);
      });
    }
    obj23.children = arr;
    tmp80Result = tmp80(tmp79, obj23);
  }
  const items41 = [tmp80Result, , , ];
  if (tmp78Result3) {
    const obj25 = { style: tmp5.empty, children: null };
    const obj26 = { variant: "body-sm/semibold", color: "text-muted", style: tmp5.subtitle, children: null };
    const intl6 = tmp(1113).intl;
    obj26.children = intl6.string(tmp3(2537).w5cRz0);
    const items42 = [tmp80(tmp(5763).Heading, obj26), ];
    const obj27 = { variant: "body-sm/semibold", color: "text-muted", style: tmp5.subtitle, children: null };
    const intl7 = tmp(1113).intl;
    obj27.children = intl7.string(tmp3(2537).Khsqzs);
    items42[1] = tmp80(tmp(5763).Text, obj27);
    obj25.children = items42;
    tmp78Result3 = tmp78(tmp79, obj25);
  }
  items41[1] = tmp78Result3;
  if (tmp78Result4) {
    const obj28 = { style: tmp5.status, children: null };
    const intl8 = tmp(1113).intl;
    const tmp3Result = tmp3(2537);
    const obj29 = { variant: "body-md/semibold", color: "text-strong", children: intl8.string(stateFromStores2 ? tmp3Result["+np3yH"] : tmp3Result.V7UsE0) };
    const items43 = [tmp80(tmp(5763).Text, obj29), , ];
    const intl9 = tmp(1113).intl;
    const tmp3Result2 = tmp3(2537);
    const obj30 = { variant: "body-sm/normal", color: "text-muted", children: intl9.string(stateFromStores2 ? tmp3Result2.CjS26n : tmp3Result2.qx4Gb6) };
    items43[1] = tmp80(tmp(5763).Text, obj30);
    if (stateFromStores2) {
      const obj31 = { onPress: callback5, size: "sm", text: null, variant: "secondary" };
      const intl10 = tmp(1113).intl;
      obj31.text = intl10.string(tmp3(2537).uGhymA);
      stateFromStores2 = tmp80(tmp(5770).Button, obj31);
    }
    items43[2] = stateFromStores2;
    obj28.children = items43;
    tmp78Result4 = tmp78(tmp79, obj28);
  }
  items41[2] = tmp78Result4;
  let tmp80Result3 = !isLoading;
  if (!isLoading) {
    tmp80Result3 = memo3.length > 0;
  }
  if (tmp80Result3) {
    const obj32 = {
      style: tmp5.grid,
      children: rounded > 0 && memo3.map((game) => {
          const hasItem = first.includes(game.id);
          let tmp2 = !hasItem;
          if (!hasItem) {
            tmp2 = memo6.length >= gesture;
          }
          return closure_2_22(StaticInterestGameTile, { game, width: rounded, selected: hasItem, unavailable: tmp2, styles, radius: token, onPress }, game.id);
        })
    };
    tmp80Result3 = tmp80(tmp79, obj32);
    const tmp90 = rounded > 0 && memo3.map((game) => {
      const hasItem = first.includes(game.id);
      let tmp2 = !hasItem;
      if (!hasItem) {
        tmp2 = memo6.length >= gesture;
      }
      return closure_2_22(StaticInterestGameTile, { game, width: rounded, selected: hasItem, unavailable: tmp2, styles, radius: token, onPress }, game.id);
    });
  }
  items41[3] = tmp80Result3;
  obj22.children = items41;
  items40[2] = rounded(c8, obj22);
  obj16.children = items40;
  items36[1] = rounded(styles, obj16);
  obj7.children = items36;
  const items44 = [rounded(c8, obj7), ];
  const obj33 = { accessibilityElementsHidden: !(length > 0 && !tmp34), importantForAccessibility: null, pointerEvents: null, style: null, children: null };
  if (length > 0 && !tmp34) {
    str2 = "auto";
  }
  obj33.importantForAccessibility = str2;
  let str4 = "none";
  if (length > 0 && !tmp34) {
    str4 = "auto";
  }
  obj33.pointerEvents = str4;
  const items45 = [tmp5.footerPosition, animatedStyle3];
  obj33.style = items45;
  const obj34 = {
    onLayout(nativeEvent) {
      return _undefined5(nativeEvent.nativeEvent.layout.height);
    },
    style: null,
    children: null
  };
  const items46 = [tmp5.footer, ];
  const tmpResult20 = require("GameAutocompleteUtils");
  items46[1] = { paddingBottom: Math.max(bottom, nativeDefault.space.PX_16) };
  obj34.style = items46;
  const obj36 = { style: tmp5.footerContent, children: null };
  const items47 = [
    ref2(InterestGameTrayDefault, {
      games: first2,
      coverWidth: rounded,
      reduceMotion: stateFromStores,
      onRemove(arg0) {
        callback(arg0);
      }
    }),

  ];
  const obj38 = { style: tmp5.footerActions, children: null };
  let tmp80Result4 = first2.length > 0;
  if (tmp80Result4) {
    const obj39 = { variant: "body-sm/medium", color: "text-default", children: null };
    const intl11 = tmp(1113).intl;
    const obj40 = { count: first2.length, max: tmp53 };
    obj39.children = intl11.format(tmp3(2537).v9v0uY, obj40);
    tmp80Result4 = tmp80(tmp(5763).Text, obj39);
  }
  const items48 = [tmp80Result4, ];
  const obj41 = { style: animatedStyle2, children: null };
  const obj42 = { accessibilityLabel: null, disabled: null, icon: null, onPress: null, size: "lg", variant: "primary" };
  const intl12 = tmp(1113).intl;
  obj42.accessibilityLabel = intl12.string(require("util").t["3PatSz"]);
  obj42.disabled = !tmp52;
  const obj35 = { paddingBottom: Math.max(bottom, nativeDefault.space.PX_16) };
  const obj37 = {
    games: first2,
    coverWidth: rounded,
    reduceMotion: stateFromStores,
    onRemove(arg0) {
      callback(arg0);
    }
  };
  obj42.icon = ref2(require("ArrowLargeRightIcon").ArrowLargeRightIcon, { color: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT });
  obj42.onPress = callback1;
  obj41.children = ref2(require("IconButton").IconButton, obj42);
  items48[1] = ref2(_modDef1652.View, obj41);
  obj38.children = items48;
  items47[1] = rounded(c8, obj38);
  obj36.children = items47;
  obj34.children = rounded(c8, obj36);
  obj33.children = ref2(c8, obj34);
  items44[1] = ref2(_modDef1652.View, obj33);
  obj6.children = items44;
  return rounded(c8, obj6);
};