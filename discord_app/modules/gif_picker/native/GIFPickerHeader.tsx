// discord_app/modules/gif_picker/native/GIFPickerHeader.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../design/animation/reanimated/timing/timingPresets.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import SearchField from "../../../design/components/TextField/native/SearchField.native.tsx";
import GifProvider from "../GifProvider.tsx";
import ChevronLargeLeftIcon from "../../../design/components/Icon/native/redesign/generated/ChevronLargeLeftIcon.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

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
  const tmp = closure_10();
  const sharedValue = columnWidth(ref[9]).useSharedValue(0);
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
  let obj = columnWidth(ref[9]);
  class S {
    constructor() {
      obj = { opacity: 1 - closure_5.get() };
      return obj;
    }
  }
  S.__closure = { progress: sharedValue };
  S.__workletHash = 11452628946352;
  S.__initData = __initData;
  const animatedStyle = columnWidth(ref[9]).useAnimatedStyle(S);
  const obj2 = columnWidth(ref[9]);
  const fn = function v() {
    return { width: sharedValue.get() * columnWidth, opacity: sharedValue.get() };
  };
  fn.__closure = { progress: sharedValue, columnWidth };
  fn.__workletHash = 12592656871997;
  fn.__initData = __initData2;
  const animatedStyle1 = columnWidth(ref[9]).useAnimatedStyle(fn);
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
  const obj4 = {
    style: animatedStyle,
    pointerEvents: null,
    accessibilityElementsHidden: null,
    importantForAccessibility: null,
    children: null,
  };
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
  const obj5 = {
    variant: "icon-only",
    size: "md",
    icon: onQueryChange(ref[13]),
    accessibilityLabel: null,
    onPress: null,
  };
  const intl = tmp5(tmp6[14]).intl;
  obj5.accessibilityLabel = intl.string(columnWidth(ref[14]).t["+Kakw+"]);
  obj5.onPress = callback;
  obj4.children = closure_7(columnWidth(ref[12]).IconButton, obj5);
  const items1 = [closure_7(onQueryChange(ref[9]).View, obj4)];
  const obj6 = {
    style: null,
    pointerEvents: null,
    accessibilityElementsHidden: null,
    importantForAccessibility: null,
    children: null,
  };
  const items2 = [tmp.favoritesSearch, animatedStyle1];
  obj6.style = items2;
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
  obj6.children = closure_7(columnWidth(ref[15]).SearchField, {
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
    onBlur: callback1,
  });
  items1[1] = closure_7(onQueryChange(ref[9]).View, obj6);
  obj7.children = items1;
  return closure_9(closure_8, obj7);
}
const View = fn(17).View;
fn(1074).GIFPickerResultTypes;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4757);
let obj = {
  container: { paddingVertical: nativeDefault.space.PX_8 },
  headerContainer: null,
  header: null,
  favoritesSearch: null,
};
let obj3 = { paddingVertical: nativeDefault.space.PX_8 };
obj.headerContainer = {
  flexDirection: "row",
  justifyContent: "space-between",
  gap: fn(10634).GIF_PICKER_GUTTER_SPACING,
};
let obj4 = { flexDirection: "row", justifyContent: "space-between", gap: fn(10634).GIF_PICKER_GUTTER_SPACING };
obj.header = {
  borderWidth: 1,
  borderColor: "transparent",
  paddingHorizontal: nativeDefault.space.PX_8,
  height: fn(6866).InputHeights.MD,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
};
obj.favoritesSearch = { position: "absolute", top: 0, end: 0, overflow: "hidden" };
let closure_10 = createStyles.createStyles(obj);
const __initData = {
  code: "function GIFPickerHeaderTsx1(){const{progress}=this.__closure;return{opacity:1-progress.get()};}",
};
const __initData2 = {
  code: "function GIFPickerHeaderTsx2(){const{progress,columnWidth}=this.__closure;return{width:progress.get()*columnWidth,opacity:progress.get()};}",
};
let obj5 = {
  borderWidth: 1,
  borderColor: "transparent",
  paddingHorizontal: nativeDefault.space.PX_8,
  height: fn(6866).InputHeights.MD,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerHeader.tsx");

export default noop.memo(function GIFPickerHeader(arg0) {
  ({ categoryType, onQueryClear } = arg0);
  ({ columnWidth, onQueryChange, onFavoritesQueryChange, searchInputRef } = arg0);
  const tmp = closure_10();
  GifProvider;
  const obj = { style: tmp.container, children: null };
  if (categoryType === GIFPickerResultTypes.SEARCH) {
    const obj2 = {
      size: "md",
      onChange: onQueryChange,
      placeholder: tmp5,
      onClear: onQueryClear,
      ref: searchInputRef,
      round: true,
    };
    let tmp13Result = React5(SearchField.SearchField, obj2);
  } else {
    const obj3 = { style: tmp.headerContainer, children: null };
    const obj4 = {
      style: tmp.header,
      accessibilityRole: "button",
      onPress: onQueryClear,
      accessibilityLabel: null,
      children: null,
    };
    const intl4 = util.intl;
    const obj5 = { destination: null };
    const intl5 = util.intl;
    obj5.destination = intl5.string(util.t.ffgJrs);
    obj4.accessibilityLabel = intl4.formatToPlainString(util.t.UTypEu, obj5);
    const obj6 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, size: "sm" };
    const items = [React5(ChevronLargeLeftIcon.ChevronLargeLeftIcon, obj6)];
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
    const obj7 = {
      variant: "text-sm/semibold",
      color: "text-default",
      maxFontSizeMultiplier: 2,
      children: stringResult,
    };
    items[1] = React5(Text_Text.Text, obj7);
    obj4.children = items;
    const items1 = [React7(Pressables.PressableOpacity, obj4)];
    let tmp6Result2 = categoryType === GIFPickerResultTypes.FAVORITES;
    if (tmp6Result2) {
      const obj8 = { columnWidth, onQueryChange: onFavoritesQueryChange };
      tmp6Result2 = React5(FavoritesSearch, obj8);
    }
    items1[1] = tmp6Result2;
    obj3.children = items1;
    tmp13Result = React7(View, obj3);
  }
  obj.children = tmp13Result;
  return React5(View, obj);
});
