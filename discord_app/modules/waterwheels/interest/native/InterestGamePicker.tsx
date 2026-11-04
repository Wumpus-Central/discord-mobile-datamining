// discord_app/modules/waterwheels/interest/native/InterestGamePicker.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import _modDef2537 from "../../WaterwheelsUntranslated.messages.js";
import AccessibilityAnnouncer2 from "../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import timing_timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import useKeyboardIsOpenDefault from "../../../keyboard/native/useKeyboardIsOpen.tsx";
import useGame2 from "../../../games/hooks/useGame.tsx";
import GameAutocompleteUtils from "../../../games/autocomplete/GameAutocompleteUtils.tsx";
import useMeasuredLayoutDefault from "../../../screen/native/useMeasuredLayout.tsx";
import useGameRecordsDefault from "../../../games/hooks/useGameRecords.tsx";
import InterestTileEdgeDefault from "InterestTileEdge.tsx";
import InterestGhostDefault from "InterestGhost.tsx";
import InterestGameTrayDefault from "InterestGameTray.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import GameStore from "../../../games/GameStore.tsx";

const require = globalThis.__r;
const _modDef1652 = _mod1652;

require = fn;
function StaticInterestGameTile(radius) {
  const game = radius.game;
  _require = game;
  ({ width, selected, unavailable, styles, onPress: c1 } = radius);
  let sharedValue;
  sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  const obj = require("../../../../../_runtime/metro/01652__.js");
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
  const obj3 = {
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
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(InterestGamePickerTsx1);
  if (unavailable) {
    const intl = tmp(tmp2[11]).intl;
    const obj4 = { count: max, max };
    formatToPlainStringResult = intl.formatToPlainString(
      require("../../WaterwheelsUntranslated.messages.js").v9v0uY,
      obj4,
    );
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
  const items2 = [styles.tileWrapper, ,];
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
  const items3 = [
    closure_22(require("InterestGameCover"), { game, width }),
    closure_22(require("InterestTileEdge"), { radius: radius.radius, style: animatedStyle }),
  ];
  obj6.children = items3;
  const items4 = [closure_23(closure_8, obj6)];
  if (selected) {
    const obj7 = { children: null };
    const obj8 = { pointerEvents: "none", style: styles.selected };
    const items5 = [closure_22(closure_8, obj8)];
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
({
  Keyboard: hasOwnProperty,
  Pressable: closure_6,
  ScrollView: metroImportDefault,
  View: closure_8,
} = get_ActivityIndicator);
const InterestGamePickerConstants = fn(18671);
({
  FOOTER_BORDER_WIDTH: closure_11,
  GRID_COLUMNS: closure_12,
  GRID_GAP: map1,
  MAX_SELECTIONS: closure_14,
  MIN_SELECTIONS: closure_15,
  SCREEN_HORIZONTAL_PADDING: closure_16,
  SELECTED_BORDER_WIDTH: closure_17,
  SELECTED_GAP_WIDTH: closure_18,
  TILE_ASPECT_RATIO: closure_19,
  TRAY_ENTER_MS: closure_20,
  TRAY_EXIT_MS: closure_21,
} = InterestGamePickerConstants);
const jsxProd = fn(21);
({ jsx: closure_22, jsxs: closure_23, Fragment: closure_24 } = jsxProd);
const createStyles = fn(5141);
let closure_25 = createStyles.createStyles((borderRadius) => {
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
    navTitle: null,
    searchTitle: null,
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
    paddingBottom: nativeDefault.space.PX_8,
  };
  obj.subtitle = { textAlign: "center" };
  const obj6 = {
    flexShrink: 0,
    alignItems: "center",
    gap: nativeDefault.space.PX_4,
    paddingHorizontal,
    paddingTop: nativeDefault.space.PX_12,
    paddingBottom: nativeDefault.space.PX_8,
  };
  obj.search = {
    flexShrink: 0,
    paddingHorizontal,
    paddingTop: nativeDefault.space.PX_8,
    paddingBottom: nativeDefault.space.PX_16,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  };
  obj.navTitle = { flex: 1, alignSelf: "stretch", justifyContent: "center" };
  obj.searchTitle = { position: "absolute", inset: 0, alignItems: "center", justifyContent: "center" };
  const obj7 = {
    flexShrink: 0,
    paddingHorizontal,
    paddingTop: nativeDefault.space.PX_8,
    paddingBottom: nativeDefault.space.PX_16,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  };
  obj.navActions = { minWidth: nativeDefault.space.PX_64, alignItems: "flex-end" };
  const obj8 = { minWidth: nativeDefault.space.PX_64, alignItems: "flex-end" };
  obj.grid = { flexDirection: "row", flexWrap: "wrap", gap, paddingHorizontal, paddingTop: nativeDefault.space.PX_8 };
  obj.tileWrapper = { borderRadius };
  const obj9 = { flexDirection: "row", flexWrap: "wrap", gap, paddingHorizontal, paddingTop: nativeDefault.space.PX_8 };
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
    aspectRatio,
    overflow: "hidden",
    borderRadius,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  };
  const obj11 = {
    flex: 1,
    aspectRatio,
    overflow: "hidden",
    borderRadius,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  };
  obj.selected = {
    position: "absolute",
    inset: -borderWidth - borderWidth2,
    borderWidth,
    borderRadius: borderRadius + borderWidth + borderWidth2,
    borderColor: nativeDefault.colors.BACKGROUND_BRAND,
  };
  const obj12 = {
    position: "absolute",
    inset: -borderWidth - borderWidth2,
    borderWidth,
    borderRadius: borderRadius + borderWidth + borderWidth2,
    borderColor: nativeDefault.colors.BACKGROUND_BRAND,
  };
  obj.selectedInner = {
    position: "absolute",
    inset: -borderWidth2,
    borderWidth: borderWidth2,
    borderRadius: borderRadius + borderWidth2,
    borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  };
  const obj13 = {
    position: "absolute",
    inset: -borderWidth2,
    borderWidth: borderWidth2,
    borderRadius: borderRadius + borderWidth2,
    borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  };
  obj.status = {
    alignItems: "center",
    gap: nativeDefault.space.PX_8,
    paddingHorizontal,
    paddingTop: nativeDefault.space.PX_40,
  };
  obj.footerPosition = { position: "absolute", bottom: 0, left: 0, right: 0 };
  const obj14 = {
    alignItems: "center",
    gap: nativeDefault.space.PX_8,
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
  return obj;
});
let closure_26 = {
  code: "(function InterestGamePickerTsx1(){let[selected,depth]=this.__closure;return{opacity:selected?0:1-Math.min(1,Math.max(0,depth.get())/0.2)};})",
};
let closure_28 = {
  code: "(function InterestGamePickerTsx2(){let[searchProgress]=this.__closure;return{opacity:1-searchProgress.get()};})",
};
let closure_29 = {
  code: "(function InterestGamePickerTsx3(){let[searchProgress]=this.__closure;return{opacity:searchProgress.get()};})",
};
let closure_30 = {
  code: "(function InterestGamePickerTsx4(){let[nextScale]=this.__closure;return{transform:[{scale:nextScale.get()}]};})",
};
let closure_31 = {
  code: "(function InterestGamePickerTsx5(){let[reduceMotion,trayProgress,footerHeight,tokens]=this.__closure;return{opacity:reduceMotion?trayProgress.get():1,transform:[{translateY:reduceMotion?0:(1-trayProgress.get())*(footerHeight>0?footerHeight:tokens.space.PX_128)}]};})",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGamePicker.tsx");

export default function InterestGamePicker(catalog) {
  catalog = catalog.catalog;
  _require = catalog;
  ({ title, minSelection } = catalog);
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
  c6 = undefined;
  first = undefined;
  closure_8 = undefined;
  first1 = undefined;
  closure_11 = undefined;
  c13 = undefined;
  let scrollY;
  ref1 = undefined;
  ref = undefined;
  let sharedValue1;
  let stateFromStores;
  let ref2;
  let rounded;
  let ref3;
  let bound;
  let results;
  onSelect = undefined;
  closure_27 = undefined;
  closure_28 = undefined;
  let memo;
  let memo2;
  let memo5;
  let memo6;
  let length;
  closure_34 = undefined;
  let first2;
  closure_36 = undefined;
  let sharedValue2;
  let callback;
  let onPress;
  const token = require("useToken").useToken(nativeDefault.modules.mobile.INPUT_FIELD_RADIUS_LG);
  const tmp5 = onSelect(token);
  const styles = tmp5;
  const bottom = useSafeAreaInsetsDefault().bottom;
  let obj = require("useToken");
  [tmp8, c6] = token.useState(0);
  [first, closure_8] = token.useState(() => {
    const set = new Set(c3);
    return Array.from(new Set(c3)).slice(0, gesture);
  });
  const tmp7 = _slicedToArray(token.useState(0), 2);
  [str, tmp12] = token.useState("");
  c9 = tmp12;
  [first1, closure_11] = token.useState(false);
  const tmp11 = _slicedToArray(token.useState(""), 2);
  const sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  items = [first1, sharedValue];
  const effect = token.useEffect(() => {
    let num = 0;
    if (first1) {
      num = 1;
    }
    const result = sharedValue.set(timing_timing.withTiming(num, timingPresets.timingFast));
  }, items);
  let obj3 = require("../../../../../_runtime/metro/01652__.js");
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
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(InterestGamePickerTsx2);
  let obj4 = require("../../../../../_runtime/metro/01652__.js");
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
  const animatedStyle1 = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(InterestGamePickerTsx3);
  const tmpResult = require("../../../../../_runtime/metro/01652__.js");
  [tmp24, c13] = token.useState(0);
  const tmp6Result = _slicedToArray(token.useState(0), 2);
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
  const tmpResult10 = require("InterestScrollHeader");
  let num2 = 1;
  sharedValue1 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(1);
  const tmpResult11 = require("../../../../../_runtime/metro/01652__.js");
  const items5 = [memo2, sharedValue1];
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
  const animatedStyle2 = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(InterestGamePickerTsx4);
  const tmpResult12 = require("../../../../../_runtime/metro/01652__.js");
  const items7 = [c9];
  stateFromStores = require("initialize").useStateFromStores(items7, () => _undefined6.useReducedMotion);
  const tmp34 = useKeyboardIsOpenDefault();
  ref2 = obj2.useRef(false);
  rounded = Math.floor((num - 2 * ref2 - c13 * (sharedValue - num2)) / sharedValue);
  ref3 = obj2.useRef(false);
  if (Number.isFinite(minSelection)) {
    const _Math = Math;
    const _Math2 = Math;
    bound = Math.min(Math.max(minSelection, ref1), scrollY);
  } else {
    bound = ref1;
  }
  const tmp35 = sharedValue;
  const tmpResult13 = require("initialize");
  const tmpResult14 = require("useGameAutocomplete");
  const debouncedGameAutocomplete = tmpResult14.useDebouncedGameAutocomplete(str, {
    surface: require("GameSearchSurfaces").GameSearchSurface.INTEREST_PICKER,
    filterGroup: require("GameSearchFilterGroup").GameSearchFilterGroup.DEFAULT,
  });
  results = debouncedGameAutocomplete.results;
  ({ error, onSelect } = debouncedGameAutocomplete);
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
  closure_27 = tmp44;
  let tmp45 = tmp42;
  if (tmp42) {
    tmp45 = null == error;
  }
  closure_28 = tmp45;
  let tmp46 = catalog;
  if (tmp45) {
    tmp46 = memo;
  }
  memo = tmp46;
  const obj5 = {
    surface: require("GameSearchSurfaces").GameSearchSurface.INTEREST_PICKER,
    filterGroup: require("GameSearchFilterGroup").GameSearchFilterGroup.DEFAULT,
  };
  const items10 = [first1];
  const items11 = [tmp46];
  const stateFromStores1 = require("initialize").useStateFromStores(
    items10,
    () => memo.some((item) => null == game.getGame(item) && !game.hasNoData(item) && !game.didFetchingFail(item)),
    items11,
  );
  const tmpResult15 = require("initialize");
  const items12 = [first1];
  const items13 = [catalog];
  let stateFromStores2 = require("initialize").useStateFromStores(
    items12,
    () => _undefined.some((item) => first1.didFetchingFail(item)),
    items13,
  );
  const items14 = [tmp44];
  memo2 = obj2.useMemo(
    () =>
      new Map(
        closure_27.map((id) => {
          items = [id.id, id];
          return items;
        }),
      ),
    items14,
  );
  const items15 = [catalog, memo2];
  const items16 = [memo, memo2];
  const memo3 = obj2.useMemo(() => {
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
  let memo4 = memo3;
  if (tmp45) {
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
  }
  let isLoading = tmp42;
  if (tmp42) {
    isLoading = debouncedGameAutocomplete.isLoading;
  }
  if (!isLoading) {
    isLoading = stateFromStores1;
  }
  let tmp77Result3 = tmp42;
  if (tmp42) {
    tmp77Result3 = !isLoading;
  }
  if (tmp77Result3) {
    tmp77Result3 = null == error;
  }
  if (tmp77Result3) {
    tmp77Result3 = 0 === memo4.length;
  }
  let tmp77Result4 = !tmp42;
  if (!tmp42) {
    tmp77Result4 = !isLoading;
  }
  if (tmp77Result4) {
    tmp77Result4 = 0 === memo4.length;
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
  closure_34 = tmp55;
  const tmp6Result2 = _slicedToArray(token.useState(memo5), 2);
  first2 = tmp6Result2[0];
  let tmp57 = memo5.length > 0;
  if (tmp57) {
    tmp57 = memo5.length !== first2.length || memo5.some((item, index) => item !== first2[index]);
    const tmp58 = memo5.length !== first2.length || memo5.some((item, index) => item !== first2[index]);
  }
  if (tmp57) {
    tmp6Result2[1](memo5);
  }
  closure_36 = tmp60;
  const tmp53 = memo6.length >= bound;
  const tmp54 = scrollY;
  const tmpResult16 = require("initialize");
  sharedValue2 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  const tmpResult17 = require("../../../../../_runtime/metro/01652__.js");
  const items19 = [memo5, stateFromStores, sharedValue2, tmp8, nativeDefault];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  [tmp62, tmp63, tmp64, tmp65, tmp66] = items19;
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
  const items20 = [tmp63, tmp64, tmp65, tmp66];
  InterestGamePickerTsx5.__closure = items20;
  InterestGamePickerTsx5.__workletHash = 7730800331799;
  InterestGamePickerTsx5.__initData = tmp62;
  const items21 = [sharedValue2, length > 0 && !tmp34, stateFromStores];
  const animatedStyle3 = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(InterestGamePickerTsx5);
  const effect1 = obj2.useEffect(() => {
    let num = 0;
    if (closure_36) {
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
  const items22 = [length >= scrollY, sharedValue1, stateFromStores];
  const effect2 = obj2.useEffect(() => {
    let tmp = closure_34;
    if (closure_34) {
      tmp = !ref2.current;
    }
    if (tmp) {
      ref2.current = true;
      if (!stateFromStores) {
        const obj = _mod1652;
        const withTimingResult = timing_timing.withTiming(1.06, { duration: 180 });
        const result = sharedValue1.set(
          obj.withSequence(withTimingResult, timing_timing.withTiming(1, { duration: 180 })),
        );
      }
    }
  }, items22);
  token.useRef(length);
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
  callback = obj2.useCallback((arg0) => {
    closure_0 = arg0;
    closure_8((arr) => {
      if (arr.includes(closure_0)) {
        let found = arr.filter((item) => item !== closure_1_0);
      } else {
        found = arr;
        if (arr.length < scrollY) {
          items = [];
          items[HermesBuiltin.arraySpread(arr, 0)] = closure_0;
          found = items;
        }
      }
      return found;
    });
  }, []);
  const items24 = [length >= scrollY, first, tmp45, callback, onSelect];
  onPress = obj2.useCallback((arg0) => {
    hasOwnProperty.dismiss();
    if (closure_34) {
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
    if (closure_28) {
      onSelect(arg0);
    }
    callback(arg0);
  }, items24);
  const items25 = [bound, onContinue, memo6];
  const items26 = [onSkip, memo6];
  const callback1 = obj2.useCallback(() => {
    let current = ref3.current;
    if (!current) {
      current = memo6.length < bound;
    }
    if (!current) {
      ref3.current = true;
      _undefined2(memo6);
    }
  }, items25);
  const items27 = [ref2, scrollY];
  const callback2 = obj2.useCallback(() => {
    if (!ref3.current) {
      tmp.current = true;
      _undefined3(memo6);
    }
  }, items26);
  const items28 = [ref2, scrollY];
  const callback3 = obj2.useCallback(() => {
    const current = ref1.current;
    if (current != null) {
      current.blur();
    }
    closure_11(false);
    hasOwnProperty.dismiss();
    const current2 = ref2.current;
    if (current2 != null) {
      current2.scrollTo({ y: 0, animated: false });
    }
    const result = scrollY.set(0);
  }, items27);
  const items29 = [catalog];
  const callback4 = obj2.useCallback(() => {
    const current = ref1.current;
    if (current != null) {
      current.setText("");
    }
    const current2 = ref1.current;
    if (current2 != null) {
      current2.blur();
    }
    _undefined6("");
    closure_11(false);
    const current3 = ref2.current;
    if (current3 != null) {
      current3.scrollTo({ y: 0, animated: false });
    }
    const result = scrollY.set(0);
  }, items28);
  const obj6 = { style: tmp5.screen, children: null };
  const obj7 = { ref, onLayout, style: tmp5.body, children: null };
  const callback5 = obj2.useCallback(() => {
    const useGame = useGame2.useGame;
    items = [
      ...c0.map((item) => {
        items = [item];
        return items;
      }),
    ];
    useGame.fetchMany.apply(items);
  }, items29);
  const obj8 = { style: tmp5.header, children: null };
  const obj9 = { style: tmp5.navTitle, collapsable: false, children: null };
  const obj10 = {
    style: null,
    children: ref3(require("InterestScrollHeader").InterestCompactTitle, { title, scrollY, collapseOffset: tmp24 }),
  };
  const items30 = [tmp5.screen, animatedStyle];
  obj10.style = items30;
  const items31 = [ref3(_modDef1652.View, obj10)];
  const obj11 = {
    pointerEvents: "none",
    accessibilityElementsHidden: !first1,
    importantForAccessibility: null,
    style: null,
    children: null,
  };
  let str2 = "no-hide-descendants";
  let str3 = "no-hide-descendants";
  if (first1) {
    str3 = "auto";
  }
  obj11.importantForAccessibility = str3;
  const items32 = [tmp5.searchTitle, animatedStyle1];
  obj11.style = items32;
  const obj12 = { variant: "body-md/semibold", lineClamp: 1, children: null };
  let intl = tmp(1113).intl;
  obj12.children = intl.string(_modDef2537["8Xenq+"]);
  obj11.children = ref3(require("Text/Text").Text, obj12);
  items31[1] = ref3(_modDef1652.View, obj11);
  obj9.children = items31;
  const items33 = [bound(closure_8, obj9)];
  const obj13 = { style: tmp5.navActions, children: null };
  const obj14 = { label: null, labelStyle: null, onPress: null };
  const intl2 = tmp(1113).intl;
  const string = intl2.string;
  const t = tmp(1113).t;
  if (first1) {
    obj14.label = string(t["ETE/oC"]);
    obj14.labelStyle = tmp5.skip;
    obj14.onPress = callback4;
    let tmp80 = obj14;
  } else {
    obj14.label = string(t["5Wxrcd"]);
    obj14.labelStyle = tmp5.skip;
    obj14.onPress = callback2;
    tmp80 = obj14;
  }
  const obj15 = { top: true, children: null };
  obj13.children = ref3(require("HeaderShared").HeaderTextButton, tmp80);
  items33[1] = ref3(closure_8, obj13);
  obj8.children = items33;
  obj15.children = bound(closure_8, obj8);
  const items34 = [ref3(require("common/SafeAreaView").SafeAreaPaddingView, obj15)];
  const obj16 = {
    ref: ref2,
    stickyHeaderIndices: null,
    onScroll: null,
    scrollEventThrottle: 16,
    contentInsetAdjustmentBehavior: "never",
    style: null,
    contentContainerStyle: null,
    keyboardDismissMode: "on-drag",
    keyboardShouldPersistTaps: "handled",
    automaticallyAdjustKeyboardInsets: false,
    children: null,
  };
  if (first1) {
    num2 = 0;
  }
  const items35 = [num2];
  obj16.stickyHeaderIndices = items35;
  obj16.onScroll = interestScrollHeader.onScroll;
  obj16.style = tmp5.screen;
  const items36 = [tmp5.content];
  if (tmp34) {
    let num4 = 0;
    if (!tmp77Result3) {
      num4 = tmp3(575).space.PX_16;
    }
    let sum = num4;
  } else {
    sum = bottom;
    if (0 !== length) {
      let num3 = 0;
      if (!tmp77Result3) {
        num3 = tmp3(575).space.PX_32;
      }
      sum = tmp8 + num3;
    }
  }
  items36[1] = { paddingBottom: sum };
  obj16.contentContainerStyle = items36;
  let tmp77Result = !first1;
  if (!first1) {
    const obj17 = {
      style: tmp5.intro,
      collapsable: false,
      onLayout(nativeEvent) {
        return _undefined7(nativeEvent.nativeEvent.layout.height);
      },
      children: null,
    };
    const obj18 = { variant: "heading-xl/semibold", color: "text-strong", children: title };
    const items37 = [tmp79(tmp(5761).Heading, obj18)];
    const obj19 = {
      style: tmp5.subtitle,
      variant: "body-sm/normal",
      color: "text-default",
      children: catalog.subtitle,
    };
    items37[1] = tmp79(tmp(5761).Text, obj19);
    obj17.children = items37;
    tmp77Result = tmp77(tmp78, obj17);
  }
  const items38 = [tmp77Result, ,];
  const obj20 = { style: tmp5.search, children: null };
  const obj21 = {
    ref: ref1,
    grow: false,
    accessibilityLabel: null,
    onChange: null,
    onFocus: null,
    onSubmitEditing: null,
    placeholder: null,
  };
  const intl3 = tmp(1113).intl;
  obj21.accessibilityLabel = intl3.string(_modDef2537["8Xenq+"]);
  obj21.onChange = tmp12;
  obj21.onFocus = function onFocus() {
    closure_11(true);
    const current = ref2.current;
    if (current != null) {
      current.scrollTo({ y: 0, animated: false });
    }
  };
  obj21.onSubmitEditing = callback3;
  const intl4 = tmp(1113).intl;
  obj21.placeholder = intl4.string(_modDef2537["8Xenq+"]);
  obj20.children = ref3(require("Search/SearchBar").SearchBar, obj21);
  items38[1] = ref3(closure_8, obj20);
  const obj22 = { style: tmp5.content, children: null };
  let tmp79Result = isLoading;
  if (isLoading) {
    const obj23 = {
      style: tmp5.grid,
      accessible: true,
      accessibilityLabel: null,
      accessibilityState: null,
      children: null,
    };
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
        items = [,];
        ({ screen: arr[0], tileWrapper: arr[1] } = closure_5);
        obj2.style = items;
        const items1 = [
          closure_2_22(InterestGhostDefault, obj2),
          closure_2_22(InterestTileEdgeDefault, { radius: token }),
        ];
        obj.children = items1;
        return dependencyMap2(React5, obj, arg1);
      });
    }
    obj23.children = arr;
    tmp79Result = tmp79(tmp78, obj23);
  }
  const items39 = [tmp79Result, , ,];
  if (tmp77Result3) {
    const obj25 = { style: tmp5.empty, children: null };
    const obj26 = { variant: "body-sm/semibold", color: "text-muted", style: tmp5.subtitle, children: null };
    const intl6 = tmp(1113).intl;
    obj26.children = intl6.string(tmp3(2537).w5cRz0);
    const items40 = [tmp79(tmp(5761).Heading, obj26)];
    const obj27 = { variant: "body-sm/semibold", color: "text-muted", style: tmp5.subtitle, children: null };
    const intl7 = tmp(1113).intl;
    obj27.children = intl7.string(tmp3(2537).Khsqzs);
    items40[1] = tmp79(tmp(5761).Text, obj27);
    obj25.children = items40;
    tmp77Result3 = tmp77(tmp78, obj25);
  }
  items39[1] = tmp77Result3;
  if (tmp77Result4) {
    const obj28 = { style: tmp5.status, children: null };
    const intl8 = tmp(1113).intl;
    const tmp3Result = tmp3(2537);
    const obj29 = {
      variant: "body-md/semibold",
      color: "text-strong",
      children: intl8.string(stateFromStores2 ? tmp3Result["+np3yH"] : tmp3Result.V7UsE0),
    };
    const items41 = [tmp79(tmp(5761).Text, obj29), ,];
    const intl9 = tmp(1113).intl;
    const tmp3Result2 = tmp3(2537);
    const obj30 = {
      variant: "body-sm/normal",
      color: "text-muted",
      children: intl9.string(stateFromStores2 ? tmp3Result2.CjS26n : tmp3Result2.qx4Gb6),
    };
    items41[1] = tmp79(tmp(5761).Text, obj30);
    if (stateFromStores2) {
      const obj31 = { onPress: callback5, size: "sm", text: null, variant: "secondary" };
      const intl10 = tmp(1113).intl;
      obj31.text = intl10.string(tmp3(2537).uGhymA);
      stateFromStores2 = tmp79(tmp(5768).Button, obj31);
    }
    items41[2] = stateFromStores2;
    obj28.children = items41;
    tmp77Result4 = tmp77(tmp78, obj28);
  }
  items39[2] = tmp77Result4;
  let tmp79Result3 = !isLoading;
  if (!isLoading) {
    tmp79Result3 = memo4.length > 0;
  }
  if (tmp79Result3) {
    const obj32 = {
      style: tmp5.grid,
      children:
        rounded > 0 &&
        memo4.map((game) => {
          const hasItem = first.includes(game.id);
          let tmp2 = !hasItem;
          if (!hasItem) {
            tmp2 = memo6.length >= gesture;
          }
          return closure_2_22(
            StaticInterestGameTile,
            { game, width: rounded, selected: hasItem, unavailable: tmp2, styles, radius: token, onPress },
            game.id,
          );
        }),
    };
    tmp79Result3 = tmp79(tmp78, obj32);
    const tmp89 =
      rounded > 0 &&
      memo4.map((game) => {
        const hasItem = first.includes(game.id);
        let tmp2 = !hasItem;
        if (!hasItem) {
          tmp2 = memo6.length >= gesture;
        }
        return closure_2_22(
          StaticInterestGameTile,
          { game, width: rounded, selected: hasItem, unavailable: tmp2, styles, radius: token, onPress },
          game.id,
        );
      });
  }
  items39[3] = tmp79Result3;
  obj22.children = items39;
  items38[2] = bound(closure_8, obj22);
  obj16.children = items38;
  items34[1] = bound(first, obj16);
  obj7.children = items34;
  const items42 = [bound(closure_8, obj7)];
  const obj33 = {
    accessibilityElementsHidden: !(length > 0 && !tmp34),
    importantForAccessibility: null,
    pointerEvents: null,
    style: null,
    children: null,
  };
  if (length > 0 && !tmp34) {
    str2 = "auto";
  }
  obj33.importantForAccessibility = str2;
  let str4 = "none";
  if (length > 0 && !tmp34) {
    str4 = "auto";
  }
  obj33.pointerEvents = str4;
  const items43 = [tmp5.footerPosition, animatedStyle3];
  obj33.style = items43;
  const obj34 = {
    onLayout(nativeEvent) {
      return _undefined5(nativeEvent.nativeEvent.layout.height);
    },
    style: null,
    children: null,
  };
  const items44 = [tmp5.footer];
  const tmpResult18 = require("../../../../../_runtime/metro/01652__.js");
  items44[1] = { paddingBottom: Math.max(bottom, nativeDefault.space.PX_16) };
  obj34.style = items44;
  const obj36 = { style: tmp5.footerContent, children: null };
  const items45 = [
    ref3(InterestGameTrayDefault, {
      games: first2,
      coverWidth: rounded,
      reduceMotion: stateFromStores,
      onRemove(arg0) {
        callback(arg0);
      },
    }),
  ];
  const obj38 = { style: tmp5.footerActions, children: null };
  let tmp79Result4 = first2.length > 0;
  if (tmp79Result4) {
    const obj39 = { variant: "body-sm/medium", color: "text-default", children: null };
    const intl11 = tmp(1113).intl;
    const obj40 = { count: first2.length, max: tmp54 };
    obj39.children = intl11.format(tmp3(2537).v9v0uY, obj40);
    tmp79Result4 = tmp79(tmp(5761).Text, obj39);
  }
  const items46 = [tmp79Result4];
  const obj41 = { style: animatedStyle2, children: null };
  const obj42 = { accessibilityLabel: null, disabled: null, icon: null, onPress: null, size: "lg", variant: "primary" };
  const intl12 = tmp(1113).intl;
  obj42.accessibilityLabel = intl12.string(require("util").t["3PatSz"]);
  obj42.disabled = !tmp53;
  const obj35 = { paddingBottom: Math.max(bottom, nativeDefault.space.PX_16) };
  const obj37 = {
    games: first2,
    coverWidth: rounded,
    reduceMotion: stateFromStores,
    onRemove(arg0) {
      callback(arg0);
    },
  };
  obj42.icon = ref3(require("ArrowLargeRightIcon").ArrowLargeRightIcon, {
    color: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT,
  });
  obj42.onPress = callback1;
  obj41.children = ref3(require("IconButton").IconButton, obj42);
  items46[1] = ref3(_modDef1652.View, obj41);
  obj38.children = items46;
  items45[1] = bound(closure_8, obj38);
  obj36.children = items45;
  obj34.children = bound(closure_8, obj36);
  obj33.children = ref3(closure_8, obj34);
  items42[1] = ref3(_modDef1652.View, obj33);
  obj6.children = items42;
  return bound(closure_8, obj6);
}
