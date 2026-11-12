// === Module 11280: GIFPickerHeader ===

// Module 11280 (GIFPickerHeader)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import timing_timing from "timing/timing" /* 5485 */;
import timingPresets from "timingPresets" /* 5488 */;
import Text_Text from "Text/Text" /* 5866 */;
import Pressables from "Pressables" /* 7364 */;
import Search_SearchBar from "Search/SearchBar" /* 7759 */;
import ChevronLargeLeftIcon from "ChevronLargeLeftIcon" /* 10703 */;
import GifProvider from "GifProvider" /* 11273 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function FavoritesSearch(onQueryChange) {
  onQueryChange = onQueryChange.onQueryChange;
  _require = onQueryChange;
  accessibilityElementsHidden = undefined;
  _slicedToArray = undefined;
  let sharedValue;
  const ref = sharedValue.useRef(null);
  importDefault = ref;
  [accessibilityElementsHidden, _slicedToArray] = sharedValue.useState(false);
  const tmp = closure_10();
  sharedValue = require("module_1652").useSharedValue(0);
  items = [accessibilityElementsHidden, sharedValue];
  const effect = sharedValue.useEffect(() => {
    let num = 0;
    if (first) {
      num = 1;
    }
    const result = sharedValue.set(timing_timing.withTiming(num, timingPresets.timingFast));
    if (first) {
      const current = _undefined2.current;
      if (current != null) {
        current.focus();
      }
    }
  }, items);
  const obj2 = require("module_1652");
  const items1 = [closure_11, sharedValue];
  _require = undefined;
  [tmp9, tmp10] = items1;
  class GIFPickerHeaderTsx1 {
    constructor() {
      obj = { opacity: 1 - closure_0.get() };
      return obj;
    }
  }
  const items2 = [tmp10];
  GIFPickerHeaderTsx1.__closure = items2;
  GIFPickerHeaderTsx1.__workletHash = 5713132018825;
  GIFPickerHeaderTsx1.__initData = tmp9;
  const animatedStyle = require("module_1652").useAnimatedStyle(GIFPickerHeaderTsx1);
  const obj3 = require("module_1652");
  const items3 = [closure_12, sharedValue, onQueryChange.columnWidth];
  _require = undefined;
  importDefault = undefined;
  [tmp12, tmp13, tmp14] = items3;
  class GIFPickerHeaderTsx2 {
    constructor() {
      obj = { width: closure_0.get() * closure_1, opacity: closure_0.get() };
      return obj;
    }
  }
  const items4 = [tmp13, tmp14];
  GIFPickerHeaderTsx2.__closure = items4;
  GIFPickerHeaderTsx2.__workletHash = 10695856898244;
  GIFPickerHeaderTsx2.__initData = tmp12;
  const animatedStyle1 = require("module_1652").useAnimatedStyle(GIFPickerHeaderTsx2);
  const callback = obj.useCallback(() => closure_3(true), []);
  const callback1 = obj.useCallback(() => {
    const current = _undefined2.current;
    let text;
    if (current != null) {
      text = current.getText();
    }
    if ("" === text) {
      closure_3(false);
    }
  }, []);
  const obj4 = { style: animatedStyle, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
  let str = "auto";
  if (accessibilityElementsHidden) {
    str = "none";
  }
  obj4.pointerEvents = str;
  obj4.accessibilityElementsHidden = accessibilityElementsHidden;
  let str2 = "auto";
  if (accessibilityElementsHidden) {
    str2 = "no-hide-descendants";
  }
  obj4.importantForAccessibility = str2;
  const obj5 = { variant: "icon-only", size: "md", icon: require("module_7761"), accessibilityLabel: null, onPress: null };
  const intl = tmp5(tmp6[14]).intl;
  obj5.accessibilityLabel = intl.string(require("util").t["+Kakw+"]);
  obj5.onPress = callback;
  obj4.children = closure_7(require("IconButton").IconButton, obj5);
  const items5 = [closure_7(require("module_1652").View, obj4), ];
  const obj6 = { style: null, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
  const items6 = [tmp.favoritesSearch, animatedStyle1];
  obj6.style = items6;
  let str3 = "none";
  if (accessibilityElementsHidden) {
    str3 = "auto";
  }
  obj6.pointerEvents = str3;
  obj6.accessibilityElementsHidden = !accessibilityElementsHidden;
  let str4 = "no-hide-descendants";
  if (accessibilityElementsHidden) {
    str4 = "auto";
  }
  const obj7 = { children: null };
  obj6.importantForAccessibility = str4;
  obj6.children = closure_7(require("Search/SearchBar").SearchBar, {
    ref,
    size: "md",
    onChange: onQueryChange,
    onClear() {
      let tmpResult;
      if (c0 != null) {
        tmpResult = tmp("");
      }
      return tmpResult;
    },
    onBlur: callback1
  });
  items5[1] = closure_7(require("module_1652").View, obj6);
  obj7.children = items5;
  return closure_9(closure_8, obj7);
}
const View = fn(17).View;
fn(1072).GIFPickerResultTypes;
const jsxProd = fn(21);
({ jsx: metroImportDefault, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5243);
let obj = { container: { paddingVertical: nativeDefault.space.PX_8 }, headerContainer: null, header: null, favoritesSearch: null };
let obj3 = { paddingVertical: nativeDefault.space.PX_8 };
obj.headerContainer = { flexDirection: "row", justifyContent: "space-between", gap: fn(11275).GIF_PICKER_GUTTER_SPACING };
let obj4 = { flexDirection: "row", justifyContent: "space-between", gap: fn(11275).GIF_PICKER_GUTTER_SPACING };
obj.header = { borderWidth: 1, borderColor: "transparent", paddingHorizontal: nativeDefault.space.PX_8, height: fn(7574).InputHeights.MD, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj.favoritesSearch = { position: "absolute", top: 0, end: 0, overflow: "hidden" };
let closure_10 = createStyles.createStyles(obj);
let closure_11 = { code: "(function GIFPickerHeaderTsx1(){let[progress]=this.__closure;return{opacity:1-progress.get()};})" };
let closure_12 = { code: "(function GIFPickerHeaderTsx2(){let[progress,columnWidth]=this.__closure;return{width:progress.get()*columnWidth,opacity:progress.get()};})" };
let obj5 = { borderWidth: 1, borderColor: "transparent", paddingHorizontal: nativeDefault.space.PX_8, height: fn(7574).InputHeights.MD, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerHeader.tsx");

export default noop.memo(function GIFPickerHeader(arg0) {
  ({ categoryType, onQueryClear } = arg0);
  ({ columnWidth, onQueryChange, onFavoritesQueryChange, searchInputRef } = arg0);
  const tmp = closure_10();
  GifProvider;
  const obj = { style: tmp.container, children: null };
  if (categoryType === GIFPickerResultTypes.SEARCH) {
    const obj2 = { size: "md", onChange: onQueryChange, placeholder: tmp5, onClear: onQueryClear, ref: searchInputRef, round: true };
    let tmp13Result = metroImportDefault(Search_SearchBar.SearchBar, obj2);
  } else {
    const obj3 = { style: tmp.headerContainer, children: null };
    const obj4 = { style: tmp.header, accessibilityRole: "button", onPress: onQueryClear, accessibilityLabel: null, children: null };
    const intl4 = util.intl;
    const obj5 = { destination: null };
    const intl5 = util.intl;
    obj5.destination = intl5.string(util.t.ffgJrs);
    obj4.accessibilityLabel = intl4.formatToPlainString(util.t.UTypEu, obj5);
    const obj6 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, size: "sm" };
    items = [metroImportDefault(ChevronLargeLeftIcon.ChevronLargeLeftIcon, obj6), ];
    if (categoryType === GIFPickerResultTypes.TRENDING_GIFS) {
      const intl3 = util.intl;
      let stringResult = intl3.string(util.t.TsWCdW);
    } else if (categoryType === GIFPickerResultTypes.FAVORITES) {
      const intl2 = util.intl;
      stringResult = intl2.string(util.t.k8fFjp);
    } else {
      const intl = util.intl;
      stringResult = intl.string(util.t["5h0QOP"]);
    }
    const obj7 = { variant: "body-sm/semibold", color: "text-default", maxFontSizeMultiplier: 2, children: stringResult };
    items[1] = metroImportDefault(Text_Text.Text, obj7);
    obj4.children = items;
    const items1 = [React6(Pressables.PressableOpacity, obj4), ];
    let tmp6Result2 = categoryType === GIFPickerResultTypes.FAVORITES;
    if (tmp6Result2) {
      const obj8 = { columnWidth, onQueryChange: onFavoritesQueryChange };
      tmp6Result2 = metroImportDefault(FavoritesSearch, obj8);
    }
    items1[1] = tmp6Result2;
    obj3.children = items1;
    tmp13Result = React6(View, obj3);
  }
  obj.children = tmp13Result;
  return metroImportDefault(View, obj);
});