// discord_app/modules/waterwheels/interest/native/InterestGamePicker.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import _modDef1652 from "../../../../../_runtime/metro/01652__.js";
import _modDef2553 from "../../WaterwheelsUntranslated.messages.js";
import AccessibilityAnnouncer2 from "../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import timing_timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import useKeyboardIsOpenDefault from "../../../keyboard/native/useKeyboardIsOpen.tsx";
import useMeasuredLayoutDefault from "../../../screen/native/useMeasuredLayout.tsx";
import GameAutocompleteUtils from "../../../games/autocomplete/GameAutocompleteUtils.tsx";
import useGame2 from "../../../games/hooks/useGame.tsx";
import useGameRecordsDefault from "../../../games/hooks/useGameRecords.tsx";
import InterestGameCoverDefault from "InterestGameCover.tsx";
import InterestTileEdgeDefault from "InterestTileEdge.tsx";
import useInterestGameSearchDefault from "useInterestGameSearch.tsx";
import useInterestRowVisibilityDefault from "useInterestRowVisibility.tsx";
import InterestSearchShadowDefault from "InterestSearchShadow.tsx";
import InterestGhostDefault from "InterestGhost.tsx";
import InterestGameTrayDefault from "InterestGameTray.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import GameStore from "../../../games/GameStore.tsx";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({
  Keyboard: hasOwnProperty,
  PixelRatio: closure_6,
  Pressable: metroImportDefault,
  View: closure_8,
} = get_ActivityIndicator);
const InterestGamePickerConstants = fn(18984);
({
  FOOTER_BORDER_WIDTH: closure_11,
  GRID_COLUMNS: closure_12,
  GRID_GAP: map1,
  MAX_SELECTIONS: closure_14,
  MIN_SELECTIONS: closure_15,
  SCREEN_HORIZONTAL_PADDING: closure_16,
  GRID_SELECTED_BORDER_WIDTH: closure_17,
  GRID_SELECTED_GAP_WIDTH: closure_18,
  TILE_ASPECT_RATIO: closure_19,
  TRAY_ENTER_MS: closure_20,
  TRAY_EXIT_MS: closure_21,
} = InterestGamePickerConstants);
const jsxProd = fn(21);
({ jsx: closure_22, jsxs: closure_23, Fragment: closure_24 } = jsxProd);
const createStyles = fn(5243);
let closure_25 = createStyles.createStyles((borderRadius, minWidth) => {
  const obj = {
    screen: { flex: 1 },
    body: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST },
    header: null,
    skip: null,
    content: null,
    empty: null,
    intro: null,
    subtitle: null,
    search: null,
    searchField: null,
    navLeading: null,
    navTitle: null,
    navActions: null,
    grid: null,
    tileWrapper: null,
    selectedGlow: null,
    tile: null,
    selected: null,
    selectedInner: null,
    status: null,
    footerPosition: null,
    footer: null,
    footerContent: null,
    footerActions: null,
    nextButton: null,
  };
  const obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  obj.header = {
    height: nativeDefault.space.PX_64,
    paddingHorizontal,
    paddingVertical: nativeDefault.space.PX_4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };
  const obj3 = {
    height: nativeDefault.space.PX_64,
    paddingHorizontal,
    paddingVertical: nativeDefault.space.PX_4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };
  obj.skip = { color: nativeDefault.colors.TEXT_BRAND };
  obj.content = { flexGrow: 1 };
  const obj4 = { color: nativeDefault.colors.TEXT_BRAND };
  obj.empty = {
    flex: 1,
    alignItems: "center",
    paddingTop: nativeDefault.space.PX_40,
    paddingHorizontal,
    gap: nativeDefault.space.PX_4,
  };
  const obj5 = {
    flex: 1,
    alignItems: "center",
    paddingTop: nativeDefault.space.PX_40,
    paddingHorizontal,
    gap: nativeDefault.space.PX_4,
  };
  obj.intro = {
    flexShrink: 0,
    alignItems: "center",
    gap: nativeDefault.space.PX_4,
    paddingHorizontal,
    paddingTop: nativeDefault.space.PX_12,
    paddingBottom: nativeDefault.space.PX_16,
  };
  obj.subtitle = { textAlign: "center" };
  const obj6 = {
    flexShrink: 0,
    alignItems: "center",
    gap: nativeDefault.space.PX_4,
    paddingHorizontal,
    paddingTop: nativeDefault.space.PX_12,
    paddingBottom: nativeDefault.space.PX_16,
  };
  obj.search = { flexShrink: 0, paddingHorizontal, paddingTop: 0, paddingBottom: nativeDefault.space.PX_16 };
  const obj7 = { flexShrink: 0, paddingHorizontal, paddingTop: 0, paddingBottom: nativeDefault.space.PX_16 };
  obj.searchField = {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
    borderRadius: nativeDefault.radii.md,
  };
  obj.navLeading = { minWidth, flexShrink: 0 };
  obj.navTitle = { flex: 1, alignSelf: "stretch", justifyContent: "center", minWidth: 0 };
  obj.navActions = { minWidth, flexShrink: 0, alignItems: "flex-end" };
  obj.grid = { flexDirection: "row", flexWrap: "wrap", gap, paddingHorizontal, paddingTop: 0 };
  obj.tileWrapper = { borderRadius };
  const obj8 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.md };
  const obj9 = { flexDirection: "row", flexWrap: "wrap", gap, paddingHorizontal, paddingTop: 0 };
  obj.selectedGlow = {
    shadowColor: nativeDefault.colors.BACKGROUND_BRAND,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 33,
    shadowOpacity: 0.2,
    elevation: 8,
  };
  const obj10 = {
    shadowColor: nativeDefault.colors.BACKGROUND_BRAND,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 33,
    shadowOpacity: 0.2,
    elevation: 8,
  };
  obj.tile = {
    flex: 1,
    overflow: "hidden",
    borderRadius,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  };
  const obj11 = {
    flex: 1,
    overflow: "hidden",
    borderRadius,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  };
  obj.selected = {
    position: "absolute",
    inset: 0,
    borderWidth: inset,
    borderRadius,
    borderColor: nativeDefault.colors.BACKGROUND_BRAND,
  };
  const obj12 = {
    position: "absolute",
    inset: 0,
    borderWidth: inset,
    borderRadius,
    borderColor: nativeDefault.colors.BACKGROUND_BRAND,
  };
  obj.selectedInner = {
    position: "absolute",
    inset,
    borderWidth,
    borderRadius: Math.max(0, borderRadius - inset),
    borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  };
  const obj13 = {
    position: "absolute",
    inset,
    borderWidth,
    borderRadius: Math.max(0, borderRadius - inset),
    borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  };
  obj.status = {
    alignItems: "center",
    gap: nativeDefault.space.PX_16,
    paddingHorizontal,
    paddingTop: nativeDefault.space.PX_40,
  };
  obj.footerPosition = { position: "absolute", bottom: 0, left: 0, right: 0 };
  const obj14 = {
    alignItems: "center",
    gap: nativeDefault.space.PX_16,
    paddingHorizontal,
    paddingTop: nativeDefault.space.PX_40,
  };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
  obj.footer = {
    borderTopWidth,
    borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
    paddingHorizontal,
    paddingTop: nativeDefault.space.PX_12,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  };
  const obj15 = {
    borderTopWidth,
    borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
    paddingHorizontal,
    paddingTop: nativeDefault.space.PX_12,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  };
  obj.footerContent = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: nativeDefault.space.PX_16,
  };
  const obj16 = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: nativeDefault.space.PX_16,
  };
  obj.footerActions = { flexShrink: 0, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
  const obj17 = { flexShrink: 0, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
  obj.nextButton = { minWidth: nativeDefault.space.PX_96 + nativeDefault.space.PX_16 };
  return obj;
});
let closure_26 = {
  code: "(function InterestGamePickerTsx1(){let[selected,depth]=this.__closure;return{opacity:selected?0:1-Math.min(1,Math.max(0,depth.get())/0.2)};})",
};
let closure_27 = {
  code: "(function InterestGamePickerTsx2(){let[unavailable,reduceMotion,withTiming,timingFast]=this.__closure;const opacity=unavailable?0.4:1;return{opacity:reduceMotion?opacity:withTiming(opacity,timingFast)};})",
};
let closure_28 = noop.memo(function StaticInterestGameTile(game) {
  game = game.game;
  _require = game;
  ({ width, selected, unavailable, styles, onPress: c1, row: c2, onRowLayout: c3 } = game);
  ({ reduceMotion, radius } = game);
  const sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  const obj = require("../../../../../_runtime/metro/01652__.js");
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
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(InterestGamePickerTsx1);
  const obj2 = require("../../../../../_runtime/metro/01652__.js");
  const items2 = [
    closure_27,
    unavailable,
    reduceMotion,
    require("timing/timing").withTiming,
    require("timingPresets").timingFast,
  ];
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
  const obj3 = {
    onLayout(arg0) {
      return _undefined4(c2, arg0);
    },
    accessibilityLabel: game.name,
    accessibilityRole: "button",
    accessibilityState: { disabled: unavailable, selected },
    accessibilityHint: null,
    onPress: null,
    onPressIn: null,
    onPressOut: null,
    style: null,
    children: null,
  };
  let formatToPlainStringResult;
  const animatedStyle1 = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(InterestGamePickerTsx2);
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
    return sharedValue.set(timing_timing.withTiming(1, timingPresets.timingFast));
  };
  obj3.onPressOut = function onPressOut() {
    return sharedValue.set(timing_timing.withTiming(0, timingPresets.timingFast));
  };
  const items4 = [styles.tileWrapper, ,];
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
  const items6 = [
    closure_22(_modDef1652.View, obj7),
    closure_22(InterestTileEdgeDefault, { radius, style: animatedStyle }),
  ];
  obj6.children = items6;
  const items7 = [closure_23(closure_8, obj6)];
  if (selected) {
    const obj8 = { children: null };
    const obj9 = { pointerEvents: "none", style: styles.selected };
    const items8 = [closure_22(closure_8, obj9)];
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
let closure_29 = {
  code: "(function InterestGamePickerTsx3(){let[reduceMotion,trayProgress,footerHeight,tokens]=this.__closure;return{opacity:reduceMotion?trayProgress.get():1,transform:[{translateY:reduceMotion?0:(1-trayProgress.get())*(footerHeight>0?footerHeight:tokens.space.PX_128)}]};})",
};
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
  let bound;
  let results;
  let error;
  let onSelect;
  closure_30 = undefined;
  closure_31 = undefined;
  let memo;
  let memo2;
  let memo4;
  let arr17;
  let isLoading;
  let memo5;
  let memo6;
  length = undefined;
  let first2;
  closure_41 = undefined;
  let onRowLayout;
  let sharedValue;
  let result1;
  closure_48 = undefined;
  let onPress;
  const roundToNearestPixelResult = c6.roundToNearestPixel(
    require("useToken").useToken(nativeDefault.modules.mobile.INPUT_FIELD_RADIUS_LG),
  );
  c6 = roundToNearestPixelResult;
  const tmp6 = _slicedToArray(onGameToggle.useState(0), 2);
  closure_7 = tmp6[1];
  const tmp7 = bound(roundToNearestPixelResult, Math.max(nativeDefault.space.PX_64, tmp6[0]));
  const styles = tmp7;
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
    return _undefined(_undefined3[19]).subscribeToKeyboardIsOpen(
      (arg0) => {
        let tmp = closure_0;
        if (closure_0) {
          tmp = !arg0;
        }
        closure_0 = arg0;
        if (tmp) {
          callback1();
        }
      },
      { appEntryKey },
    );
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
  const sum = closure_13 + ((result - roundToNearestPixelResult1) * first1) / (first1 - 1);
  onGameToggle.useRef(false);
  if (Number.isFinite(minSelection)) {
    const _Math = Math;
    const _Math2 = Math;
    bound = Math.min(Math.max(minSelection, ref1), max);
  } else {
    bound = ref1;
  }
  const tmp34 = useInterestGameSearchDefault(tmp12[0]);
  results = tmp34.results;
  error = tmp34.error;
  onSelect = tmp34.onSelect;
  const items4 = [results];
  memo = obj3.useMemo(() => {
    items = results;
    if (results == null) {
      items = [];
    }
    const found = items.filter(GameAutocompleteUtils.isGameAutocompleteResultAllowedInGameWidgets);
    return found.map((id) => id.id);
  }, items4);
  const tmp36 = tmp12[0].trim().length > 0;
  const items5 = [memo, catalog, first];
  const memo1 = obj3.useMemo(() => {
    items = [...first];
    return Array.from(new Set(items));
  }, items5);
  const tmp38 = useGameRecordsDefault(memo1);
  closure_30 = tmp38;
  let tmp39 = tmp36;
  if (tmp36) {
    tmp39 = null == error;
  }
  closure_31 = tmp39;
  let tmp40 = catalog;
  if (tmp39) {
    tmp40 = memo;
  }
  memo = tmp40;
  const tmp26 = first1;
  const tmpResult = require("initialize");
  const items6 = [first];
  const items7 = [tmp40];
  const stateFromStores1 = require("initialize").useStateFromStores(
    items6,
    () => memo.some((item) => null == game.getGame(item) && !game.hasNoData(item) && !game.didFetchingFail(item)),
    items7,
  );
  const tmpResult7 = require("initialize");
  const items8 = [first];
  const items9 = [catalog];
  const items10 = [tmp38];
  const stateFromStores2 = require("initialize").useStateFromStores(
    items8,
    () => _undefined.some((item) => first.didFetchingFail(item)),
    items9,
  );
  memo2 = obj3.useMemo(
    () =>
      new Map(
        closure_30.map((id) => {
          items = [id.id, id];
          return items;
        }),
      ),
    items10,
  );
  const items11 = [catalog, memo2];
  const items12 = [memo, memo2];
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
  }, items11);
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
  arr17 = memo3;
  if (tmp39) {
    arr17 = memo4;
  }
  isLoading = tmp36;
  if (tmp36) {
    isLoading = tmp34.isLoading;
  }
  if (!isLoading) {
    isLoading = stateFromStores1;
  }
  let tmp73Result = tmp36;
  if (tmp36) {
    tmp73Result = !isLoading;
  }
  if (tmp73Result) {
    tmp73Result = null == error;
  }
  if (tmp73Result) {
    tmp73Result = 0 === arr17.length;
  }
  let tmp46 = !tmp36;
  let tmp73Result2 = tmp46;
  if (!tmp36) {
    tmp73Result2 = !isLoading;
  }
  if (tmp73Result2) {
    tmp73Result2 = 0 === arr17.length;
  }
  const items13 = [memo2, first];
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
  }, items13);
  const items14 = [memo5];
  memo6 = obj3.useMemo(() => memo5.map((id) => id.id), items14);
  length = memo6.length;
  const tmp5Result = tmp5(onGameToggle.useState(memo5), 2);
  first2 = tmp5Result[0];
  let tmp50 = memo5.length > 0;
  if (tmp50) {
    tmp50 = memo5.length !== first2.length || memo5.some((item, index) => item !== first2[index]);
    const tmp51 = memo5.length !== first2.length || memo5.some((item, index) => item !== first2[index]);
  }
  if (tmp50) {
    tmp5Result[1](memo5);
  }
  closure_41 = tmp53;
  const tmp48 = memo6.length >= bound;
  const tmpResult8 = require("initialize");
  if (!tmp36) {
    tmp46 = !isLoading;
  }
  let num2 = 0;
  if (length > 0 && !tmp18 && !first1) {
    let tmp55 = null;
    if (tmp9 > 0) {
      tmp55 = tmp9;
    }
    num2 = tmp55;
  }
  const tmp3ResultResult = useInterestRowVisibilityDefault(onRowSeen, tmp46, num2);
  onRowLayout = tmp3ResultResult;
  const tmp3Result = useInterestRowVisibilityDefault;
  const interestScrollHeader = require("InterestScrollHeader").useInterestScrollHeader(tmp3ResultResult.onScroll);
  ({ scrollY, onScroll } = interestScrollHeader);
  const tmpResult9 = require("InterestScrollHeader");
  sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  const tmpResult10 = require("../../../../../_runtime/metro/01652__.js");
  const items15 = [memo, stateFromStores, sharedValue, tmp9, nativeDefault];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  [tmp59, tmp60, tmp61, tmp62, tmp63] = items15;
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
  const items16 = [tmp60, tmp61, tmp62, tmp63];
  InterestGamePickerTsx3.__closure = items16;
  InterestGamePickerTsx3.__workletHash = 5612593946705;
  InterestGamePickerTsx3.__initData = tmp59;
  const items17 = [sharedValue, length > 0 && !tmp18 && !first1, stateFromStores];
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(InterestGamePickerTsx3);
  const effect1 = obj3.useEffect(() => {
    let num = 0;
    if (closure_41) {
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
  }, items17);
  onGameToggle.useRef(length);
  const items18 = [length];
  const effect2 = obj3.useEffect(() => {
    if (ref5.current !== length) {
      ref5.current = length;
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const intl = util.intl;
      const obj = { count: length, max };
      AccessibilityAnnouncer.announce(intl.formatToPlainString(_modDef2553.v9v0uY, obj));
    }
  }, items18);
  const tmpResult11 = require("../../../../../_runtime/metro/01652__.js");
  result1 = require("GameAutocompleteUtils").normalizeGameAutocompleteQuery(str);
  onGameToggle.useRef(null);
  const items19 = [result1, isLoading, error, results, memo4.length, onSearch];
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
  }, items19);
  onGameToggle.useRef(first);
  const items20 = [onGameToggle, arr17];
  closure_48 = obj3.useCallback((arg0) => {
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
        const findIndexResult = arr17.findIndex((id) => id.id === closure_0);
        if (onGameToggle != null) {
          let tmp13 = null;
          if (-1 !== findIndexResult) {
            tmp13 = findIndexResult;
          }
          tmp11(arg0, tmp13, tmp3);
        }
      }
    }
  }, items20);
  onPress = tmp3(7724)((arg0) => {
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
    if (closure_31) {
      onSelect(arg0);
    }
    closure_48(arg0);
  });
  const items21 = [bound, onContinue, memo6];
  const items22 = [onSkip, memo6];
  const callback3 = obj3.useCallback(() => {
    let current = ref4.current;
    if (!current) {
      current = memo6.length < bound;
    }
    if (!current) {
      ref4.current = true;
      _undefined2(memo6);
    }
  }, items21);
  const items23 = [callback];
  const callback4 = obj3.useCallback(() => {
    if (!ref4.current) {
      tmp.current = true;
      _undefined3(memo6);
    }
  }, items22);
  const items24 = [catalog];
  const callback5 = obj3.useCallback(() => {
    callback();
    hasOwnProperty.dismiss();
  }, items23);
  const obj5 = { style: tmp7.screen, children: null };
  const obj6 = { ref, onLayout, style: tmp7.body, children: null };
  const callback6 = obj3.useCallback(() => {
    const useGame = useGame2.useGame;
    items = [
      ...c0.map((item) => {
        items = [item, true];
        return items;
      }),
    ];
    useGame.refetchMany.apply(items);
  }, items24);
  const obj7 = { top: true, children: null };
  const obj8 = { style: tmp7.header, children: null };
  const items25 = [stateFromStores(styles, { style: tmp7.navLeading }), ,];
  const obj9 = { style: tmp7.navLeading };
  const tmpResult12 = require("GameAutocompleteUtils");
  items25[1] = stateFromStores(styles, {
    style: tmp7.navTitle,
    collapsable: false,
    children: stateFromStores(require("InterestScrollHeader").InterestCompactTitle, {
      title,
      scrollY,
      collapseOffset: tmp16,
    }),
  });
  const obj11 = {
    style: tmp7.navActions,
    onLayout(nativeEvent) {
      return closure_7(nativeEvent.nativeEvent.layout.width);
    },
    children: null,
  };
  const obj12 = { label: null, labelStyle: null, onPress: null };
  let intl = tmp(1113).intl;
  obj12.label = intl.string(require("util").t["5Wxrcd"]);
  obj12.labelStyle = tmp7.skip;
  obj12.onPress = callback4;
  obj11.children = stateFromStores(require("HeaderShared").HeaderTextButton, obj12);
  items25[2] = stateFromStores(styles, obj11);
  obj8.children = items25;
  obj7.children = roundToNearestPixelResult1(styles, obj8);
  const items26 = [stateFromStores(require("common/SafeAreaView").SafeAreaPaddingView, obj7)];
  const obj13 = {
    stickyHeaderIndices: [1],
    onScroll,
    onLayout: tmp3ResultResult.onViewportLayout,
    scrollEventThrottle: 16,
    contentInsetAdjustmentBehavior: "never",
    style: tmp7.screen,
    contentContainerStyle: null,
    onScrollBeginDrag: null,
    onScrollEndDrag: null,
    onMomentumScrollEnd: null,
    keyboardDismissMode: "on-drag",
    keyboardShouldPersistTaps: "handled",
    automaticallyAdjustKeyboardInsets: false,
    children: null,
  };
  const items27 = [tmp7.content];
  if (tmp18) {
    let num4 = 0;
    if (!tmp73Result) {
      num4 = tmp3(575).space.PX_16;
    }
    let sum1 = num4;
  } else {
    sum1 = bottom;
    if (0 !== length) {
      let num3 = 0;
      if (!tmp73Result) {
        num3 = tmp3(575).space.PX_32;
      }
      sum1 = tmp9 + num3;
    }
  }
  items27[1] = { paddingBottom: sum1 };
  obj13.contentContainerStyle = items27;
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
    children: null,
  };
  const items28 = [
    stateFromStores(require("Text/Text").Heading, {
      variant: "heading-xl/semibold",
      color: "text-strong",
      children: title,
    }),
    stateFromStores(require("Text/Text").Text, {
      style: tmp7.subtitle,
      variant: "body-sm/normal",
      color: "text-default",
      lineBreakStrategyIOS: "push-out",
      textBreakStrategy: "balanced",
      children: subtitle,
    }),
  ];
  obj14.children = items28;
  const items29 = [roundToNearestPixelResult1(styles, obj14), ,];
  const obj16 = { children: null };
  const obj17 = { style: tmp7.search, children: null };
  const items30 = [stateFromStores(InterestSearchShadowDefault, { scrollY, collapseOffset: tmp16 })];
  const obj18 = { style: tmp7.searchField, children: null };
  const obj19 = {
    ref: ref1,
    grow: false,
    spellCheck: false,
    autoComplete: "off",
    textContentType: "none",
    importantForAutofill: "no",
    accessibilityLabel: null,
    onChange: null,
    onFocus: null,
    onBlur: null,
    onSubmitEditing: null,
    placeholder: null,
  };
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
  items30[1] = stateFromStores(styles, obj18);
  obj17.children = items30;
  obj16.children = roundToNearestPixelResult1(styles, obj17);
  items29[1] = stateFromStores(styles, obj16);
  const obj20 = { style: tmp7.content, onLayout: tmp3ResultResult.onContentLayout, children: null };
  let tmp75Result = isLoading;
  if (isLoading) {
    const obj21 = { style: null, accessible: true, accessibilityLabel: null, accessibilityState: null, children: null };
    const items31 = [tmp7.grid];
    const obj22 = { columnGap: sum };
    items31[1] = obj22;
    obj21.style = items31;
    const intl4 = tmp(1113).intl;
    obj21.accessibilityLabel = intl4.string(tmp(1113).t.ZTNur7);
    obj21.accessibilityState = { busy: true };
    let arr = roundToNearestPixelResult1 > 0;
    if (arr) {
      const _Array = Array;
      const obj23 = { length: 4 * tmp26 };
      arr = Array.from(obj23, (arg0, arg1) => {
        const obj = { style: null, children: null };
        const size = {
          width: roundToNearestPixelResult1,
          height: timestampProducer.roundToNearestPixel(roundToNearestPixelResult1 / expandedHeight),
        };
        obj.style = size;
        const obj2 = { style: null };
        items = [,];
        ({ screen: arr[0], tileWrapper: arr[1] } = closure_8);
        obj2.style = items;
        const items1 = [closure_2_22(InterestGhostDefault, obj2), closure_2_22(InterestTileEdgeDefault, { radius })];
        obj.children = items1;
        return dependencyMap2(React5, obj, arg1);
      });
    }
    obj21.children = arr;
    tmp75Result = tmp75(tmp74, obj21);
  }
  const items32 = [tmp75Result, , ,];
  if (tmp73Result) {
    const obj24 = { style: tmp7.empty, children: null };
    const obj25 = { variant: "body-sm/semibold", color: "text-muted", style: tmp7.subtitle, children: null };
    const intl5 = tmp(1113).intl;
    obj25.children = intl5.string(tmp3(2553).w5cRz0);
    const items33 = [tmp75(tmp(5866).Heading, obj25)];
    const obj26 = { variant: "body-sm/semibold", color: "text-muted", style: tmp7.subtitle, children: null };
    const intl6 = tmp(1113).intl;
    obj26.children = intl6.string(tmp3(2553).Khsqzs);
    items33[1] = tmp75(tmp(5866).Text, obj26);
    obj24.children = items33;
    tmp73Result = tmp73(tmp74, obj24);
  }
  items32[1] = tmp73Result;
  if (tmp73Result2) {
    const obj27 = { style: tmp7.status, children: null };
    const obj28 = { variant: "body-lg/normal", color: "text-muted", style: tmp7.subtitle, children: null };
    const intl7 = tmp(1113).intl;
    const tmp3Result2 = tmp3(2553);
    obj28.children = intl7.string(stateFromStores2 ? tmp3Result2["+np3yH"] : tmp3Result2.V7UsE0);
    const items34 = [tmp75(tmp(5866).Text, obj28)];
    let tmp75Result4 = catalog.length > 0;
    if (tmp75Result4) {
      const obj29 = { onPress: callback6, size: "sm", text: null, variant: "secondary" };
      const intl8 = tmp(1113).intl;
      obj29.text = intl8.string(tmp3(2553).uGhymA);
      tmp75Result4 = tmp75(tmp(5873).Button, obj29);
    }
    items34[1] = tmp75Result4;
    obj27.children = items34;
    tmp73Result2 = tmp73(tmp74, obj27);
  }
  items32[2] = tmp73Result2;
  let tmp75Result5 = !isLoading;
  if (!isLoading) {
    tmp75Result5 = arr17.length > 0;
  }
  if (tmp75Result5) {
    const obj30 = { style: null, children: null };
    const items35 = [tmp7.grid];
    const obj31 = { columnGap: sum };
    items35[1] = obj31;
    obj30.style = items35;
    obj30.children =
      roundToNearestPixelResult1 > 0 &&
      arr17.map((game, index) => {
        const hasItem = first.includes(game.id);
        let tmp2 = !hasItem;
        if (!hasItem) {
          tmp2 = memo6.length >= gesture;
        }
        return closure_2_22(
          closure_28,
          {
            row: Math.floor(index / application_id) + 1,
            onRowLayout: onRowLayout.onRowLayout,
            game,
            width: roundToNearestPixelResult1,
            selected: hasItem,
            unavailable: tmp2,
            reduceMotion: stateFromStores,
            styles,
            radius,
            onPress,
          },
          game.id,
        );
      });
    let str2 = "browse";
    if (tmp36) {
      str2 = "search";
    }
    tmp75Result5 = tmp75(tmp74, obj30, str2);
    const tmp82 =
      roundToNearestPixelResult1 > 0 &&
      arr17.map((game, index) => {
        const hasItem = first.includes(game.id);
        let tmp2 = !hasItem;
        if (!hasItem) {
          tmp2 = memo6.length >= gesture;
        }
        return closure_2_22(
          closure_28,
          {
            row: Math.floor(index / application_id) + 1,
            onRowLayout: onRowLayout.onRowLayout,
            game,
            width: roundToNearestPixelResult1,
            selected: hasItem,
            unavailable: tmp2,
            reduceMotion: stateFromStores,
            styles,
            radius,
            onPress,
          },
          game.id,
        );
      });
  }
  items32[3] = tmp75Result5;
  obj20.children = items32;
  items29[2] = roundToNearestPixelResult1(styles, obj20);
  obj13.children = items29;
  items26[1] = roundToNearestPixelResult1(_modDef1652.ScrollView, obj13);
  obj6.children = items26;
  const items36 = [roundToNearestPixelResult1(styles, obj6)];
  const obj32 = {
    accessibilityElementsHidden: !(length > 0 && !tmp18 && !first1),
    importantForAccessibility: null,
    pointerEvents: null,
    style: null,
    children: null,
  };
  let str3 = "no-hide-descendants";
  if (length > 0 && !tmp18 && !first1) {
    str3 = "auto";
  }
  obj32.importantForAccessibility = str3;
  let str4 = "none";
  if (length > 0 && !tmp18 && !first1) {
    str4 = "auto";
  }
  obj32.pointerEvents = str4;
  const items37 = [tmp7.footerPosition, animatedStyle];
  obj32.style = items37;
  const obj33 = {
    onLayout(nativeEvent) {
      return _undefined5(nativeEvent.nativeEvent.layout.height);
    },
    style: null,
    children: null,
  };
  const items38 = [tmp7.footer];
  const obj10 = {
    style: tmp7.navTitle,
    collapsable: false,
    children: stateFromStores(require("InterestScrollHeader").InterestCompactTitle, {
      title,
      scrollY,
      collapseOffset: tmp16,
    }),
  };
  const obj15 = {
    style: tmp7.subtitle,
    variant: "body-sm/normal",
    color: "text-default",
    lineBreakStrategyIOS: "push-out",
    textBreakStrategy: "balanced",
    children: subtitle,
  };
  items38[1] = { paddingBottom: Math.max(bottom, nativeDefault.space.PX_16) };
  obj33.style = items38;
  const obj35 = { style: tmp7.footerContent, children: null };
  const items39 = [
    stateFromStores(InterestGameTrayDefault, {
      games: first2,
      coverWidth: roundToNearestPixelResult1,
      reduceMotion: stateFromStores,
    }),
  ];
  const obj36 = { style: tmp7.footerActions, children: null };
  let tmp75Result6 = first2.length >= 7;
  if (tmp75Result6) {
    const obj37 = { variant: "body-sm/medium", color: "text-default", children: null };
    const intl9 = tmp(1113).intl;
    const obj38 = { count: first2.length, max };
    obj37.children = intl9.format(tmp3(2553).v9v0uY, obj38);
    tmp75Result6 = tmp75(tmp(5866).Text, obj37);
  }
  const items40 = [tmp75Result6];
  const obj39 = { style: tmp7.nextButton, children: null };
  const obj40 = { text: null, disabled: null, onPress: null, size: "lg", variant: "primary" };
  const intl10 = tmp(1113).intl;
  obj40.text = intl10.string(require("util").t.PDTjLN);
  obj40.disabled = !tmp48;
  obj40.onPress = callback3;
  obj39.children = stateFromStores(require("components/Button/Button").Button, obj40);
  items40[1] = stateFromStores(styles, obj39);
  obj36.children = items40;
  items39[1] = roundToNearestPixelResult1(styles, obj36);
  obj35.children = items39;
  obj33.children = roundToNearestPixelResult1(styles, obj35);
  obj32.children = stateFromStores(styles, obj33);
  items36[1] = stateFromStores(_modDef1652.View, obj32);
  obj5.children = items36;
  return roundToNearestPixelResult1(styles, obj5);
}
