// === Module 10374: GIFPickerHeader ===

// Module 10374 (GIFPickerHeader)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import timing from "timing" /* 4561 */;
import timingPresets from "timingPresets" /* 4564 */;
import Pressables from "Pressables" /* 5123 */;
import SearchField from "SearchField" /* 7050 */;
import GifProvider from "GifProvider" /* 10367 */;
import ChevronLargeLeftIcon from "ChevronLargeLeftIcon" /* 10375 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function FavoritesSearch(columnWidth) {
  columnWidth = columnWidth.columnWidth;
  const onQueryChange = columnWidth.onQueryChange;
  let accessibilityElementsHidden;
  noop = undefined;
  const ref = noop.useRef(null);
  const tmp3 = accessibilityElementsHidden(noop.useState(false), 2);
  accessibilityElementsHidden = tmp3[0];
  noop = tmp3[1];
  let obj = columnWidth(ref[9]);
  const sharedValue = obj.useSharedValue(0);
  const items = [accessibilityElementsHidden, sharedValue];
  const effect = noop.useEffect(() => {
    let num = 0;
    if (first) {
      num = 1;
    }
    const result = sharedValue.set(timing.withTiming(num, timingPresets.timingFast));
    if (first) {
      const current = ref.current;
      if (current != null) {
        current.focus();
      }
    }
  }, items);
  let obj1 = columnWidth(ref[9]);
  class S {
    constructor() {
      obj = { opacity: 1 - closure_5.get() };
      return obj;
    }
  }
  S.__closure = { progress: sharedValue };
  S.__workletHash = 11452628946352;
  S.__initData = __initData;
  const animatedStyle = obj1.useAnimatedStyle(S);
  let obj2 = columnWidth(ref[9]);
  const fn = function v() {
    return { width: sharedValue.get() * columnWidth, opacity: sharedValue.get() };
  };
  fn.__closure = { progress: sharedValue, columnWidth };
  fn.__workletHash = 12592656871997;
  fn.__initData = __initData2;
  const animatedStyle1 = obj2.useAnimatedStyle(fn);
  const callback = noop.useCallback(() => closure_4(true), []);
  const callback1 = noop.useCallback(() => {
    const current = ref.current;
    let text;
    if (current != null) {
      text = current.getText();
    }
    if ("" === text) {
      closure_4(false);
    }
  }, []);
  obj = { style: animatedStyle, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
  let str = "auto";
  if (accessibilityElementsHidden) {
    str = "none";
  }
  obj.pointerEvents = str;
  obj.accessibilityElementsHidden = accessibilityElementsHidden;
  let str2 = "auto";
  if (accessibilityElementsHidden) {
    str2 = "no-hide-descendants";
  }
  obj.importantForAccessibility = str2;
  obj = { variant: "icon-only", size: "md", icon: tmp16(tmp6[13]), accessibilityLabel: null, onPress: null };
  const intl = tmp5(tmp6[14]).intl;
  obj.accessibilityLabel = intl.string(columnWidth(ref[14]).t["+Kakw+"]);
  obj.onPress = callback;
  obj.children = closure_7(columnWidth(ref[12]).IconButton, obj);
  const items1 = [closure_7(onQueryChange(ref[9]).View, obj), ];
  obj1 = { style: null, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
  const items2 = [closure_10().favoritesSearch, animatedStyle1];
  obj1.style = items2;
  let str3 = "none";
  if (accessibilityElementsHidden) {
    str3 = "auto";
  }
  obj1.pointerEvents = str3;
  obj1.accessibilityElementsHidden = !accessibilityElementsHidden;
  let str4 = "no-hide-descendants";
  if (accessibilityElementsHidden) {
    str4 = "auto";
  }
  obj2 = { children: null };
  obj1.importantForAccessibility = str4;
  obj1.children = closure_7(columnWidth(ref[15]).SearchField, {
    ref,
    size: "md",
    onChange: onQueryChange,
    onClear() {
      let tmpResult;
      if (onQueryChange != null) {
        tmpResult = tmp("");
      }
      return tmpResult;
    },
    onBlur: callback1
  });
  items1[1] = closure_7(onQueryChange(ref[9]).View, obj1);
  obj2.children = items1;
  return closure_9(closure_8, obj2);
}
const View = fn(17).View;
fn(1074).GIFPickerResultTypes;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let obj = { container: null, headerContainer: null, header: null, favoritesSearch: null };
obj = { paddingVertical: nativeDefault.space.PX_8 };
obj.container = obj;
const createStyles = { flexDirection: "row", justifyContent: "space-between", gap: fn(10369).GIF_PICKER_GUTTER_SPACING };
obj.headerContainer = createStyles;
obj.header = { borderWidth: 1, borderColor: "transparent", paddingHorizontal: nativeDefault.space.PX_8, height: fn(6622).InputHeights.MD, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj.favoritesSearch = { position: "absolute", top: 0, end: 0, overflow: "hidden" };
let closure_10 = createStyles.createStyles(obj);
const __initData = { code: "function GIFPickerHeaderTsx1(){const{progress}=this.__closure;return{opacity:1-progress.get()};}" };
const __initData2 = { code: "function GIFPickerHeaderTsx2(){const{progress,columnWidth}=this.__closure;return{width:progress.get()*columnWidth,opacity:progress.get()};}" };
let obj2 = { borderWidth: 1, borderColor: "transparent", paddingHorizontal: nativeDefault.space.PX_8, height: fn(6622).InputHeights.MD, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerHeader.tsx");

export default noop.memo(function GIFPickerHeader(arg0) {
  ({ categoryType, onQueryClear } = arg0);
  ({ columnWidth, onQueryChange, onFavoritesQueryChange, searchInputRef } = arg0);
  const tmp = closure_10();
  GifProvider;
  let obj = { style: tmp.container, children: null };
  if (categoryType === GIFPickerResultTypes.SEARCH) {
    obj = { size: "md", onChange: onQueryChange, placeholder: tmp5, onClear: onQueryClear, ref: searchInputRef, isRound: true };
    let tmp13Result = React5(SearchField.SearchField, obj);
  } else {
    obj = { style: tmp.headerContainer, children: null };
    const obj1 = { style: tmp.header, accessibilityRole: "button", onPress: onQueryClear, accessibilityLabel: null, children: null };
    const intl4 = util.intl;
    const obj2 = { destination: null };
    const intl5 = util.intl;
    obj2.destination = intl5.string(util.t.ffgJrs);
    obj1.accessibilityLabel = intl4.formatToPlainString(util.t.UTypEu, obj2);
    const obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, size: "sm" };
    const items = [React5(ChevronLargeLeftIcon.ChevronLargeLeftIcon, obj3), ];
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
    const obj4 = { variant: "text-sm/semibold", color: "text-default", maxFontSizeMultiplier: 2, children: stringResult };
    items[1] = React5(Text_Text.Text, obj4);
    obj1.children = items;
    const items1 = [React7(Pressables.PressableOpacity, obj1), ];
    let tmp6Result = categoryType === GIFPickerResultTypes.FAVORITES;
    if (tmp6Result) {
      const obj5 = { columnWidth, onQueryChange: onFavoritesQueryChange };
      tmp6Result = React5(FavoritesSearch, obj5);
    }
    items1[1] = tmp6Result;
    obj.children = items1;
    tmp13Result = React7(View, obj);
  }
  obj.children = tmp13Result;
  return React5(View, obj);
});