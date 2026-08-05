// discord_app/modules/gif_picker/native/GIFPickerHeader.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "Text";
import { View } from "PressableBase";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { GIF_PROVIDER } from "../GifProvider.tsx";

let c9;
let error;
let metroImportAll;
const require = arg1;
function FavoritesSearch(columnWidth) {
  columnWidth = columnWidth.columnWidth;
  const onQueryChange = columnWidth.onQueryChange;
  let ref;
  let first;
  let importAllResult;
  let sharedValue;
  ref = importAllResult.useRef(null);
  const tmp3 = first(importAllResult.useState(false), 2);
  first = tmp3[0];
  importAllResult = tmp3[1];
  let obj = columnWidth(ref[9]);
  sharedValue = obj.useSharedValue(0);
  const items = [first, sharedValue];
  const effect = importAllResult.useEffect(() => {
    let num = 0;
    if (first) {
      num = 1;
    }
    const result = sharedValue.set(columnWidth(ref[10]).withTiming(num, columnWidth(ref[11]).timingFast));
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
      obj = { opacity: 1 - c5.get() };
      return obj;
    }
  }
  S.__closure = { progress: sharedValue };
  S.__workletHash = 11452628946352;
  S.__initData = closure_11;
  const animatedStyle = obj1.useAnimatedStyle(S);
  let obj2 = columnWidth(ref[9]);
  const fn = function v() {
    return { width: sharedValue.get() * columnWidth, opacity: sharedValue.get() };
  };
  fn.__closure = { progress: sharedValue, columnWidth };
  fn.__workletHash = 12592656871997;
  fn.__initData = closure_12;
  const animatedStyle1 = obj2.useAnimatedStyle(fn);
  const callback = importAllResult.useCallback(() => callback(true), []);
  const callback1 = importAllResult.useCallback(() => {
    const current = ref.current;
    let text;
    if (current != null) {
      text = current.getText();
    }
    if ("" === text) {
      callback(false);
    }
  }, []);
  obj = { style: animatedStyle, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
  let str = "auto";
  if (first) {
    str = "none";
  }
  obj[1] = str;
  obj[2] = first;
  let str2 = "auto";
  if (first) {
    str2 = "no-hide-descendants";
  }
  obj[3] = str2;
  obj = { variant: "icon-only", size: "md", icon: null, accessibilityLabel: null, onPress: null };
  obj[2] = onQueryChange(ref[13]);
  const intl = tmp5(tmp6[14]).intl;
  obj[3] = intl.string(columnWidth(ref[14]).t["+Kakw+"]);
  obj[4] = callback;
  obj[4] = closure_7(columnWidth(ref[12]).IconButton, obj);
  const items1 = [closure_7(onQueryChange(ref[9]).View, obj), ];
  obj1 = { style: items2, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
  items2 = [callback().favoritesSearch, animatedStyle1];
  let str3 = "none";
  if (first) {
    str3 = "auto";
  }
  obj1[1] = str3;
  obj1[2] = !first;
  let str4 = "no-hide-descendants";
  if (first) {
    str4 = "auto";
  }
  obj2 = { children: null };
  obj1[3] = str4;
  obj1[4] = closure_7(columnWidth(ref[15]).SearchField, {
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
  obj2[0] = items1;
  return closure_9(closure_8, obj2);
}
let c4 = importAllResult;
require("ME").GIFPickerResultTypes;
({ jsx: error, Fragment: metroImportAll, jsxs: c9 } = jsxProd);
let obj = { container: null, headerContainer: null, header: null, favoritesSearch: null };
obj = { paddingVertical: require("Themes").space.PX_8 };
obj[0] = obj;
createCacheKey = { flexDirection: "row", justifyContent: "space-between", gap: require("transformFavoriteGifUrl").GIF_PICKER_GUTTER_SPACING };
obj[1] = createCacheKey;
obj[2] = { borderWidth: 1, borderColor: "transparent", paddingHorizontal: require("Themes").space.PX_8, height: require("InputHeights").InputHeights.MD, flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8 };
obj[3] = { position: "absolute", top: 0, end: 0, overflow: "hidden" };
let closure_10 = createCacheKey.createStyles(obj);
let closure_11 = { code: "function GIFPickerHeaderTsx1(){const{progress}=this.__closure;return{opacity:1-progress.get()};}" };
let closure_12 = { code: "function GIFPickerHeaderTsx2(){const{progress,columnWidth}=this.__closure;return{width:progress.get()*columnWidth,opacity:progress.get()};}" };
let obj2 = { borderWidth: 1, borderColor: "transparent", paddingHorizontal: require("Themes").space.PX_8, height: require("InputHeights").InputHeights.MD, flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8 };
const memoResult = importAllResult.memo(function GIFPickerHeader(arg0) {
  let categoryType;
  let columnWidth;
  let onFavoritesQueryChange;
  let onQueryChange;
  let onQueryClear;
  let searchInputRef;
  ({ categoryType, onQueryClear } = arg0);
  ({ columnWidth, onQueryChange, onFavoritesQueryChange, searchInputRef } = arg0);
  const tmp = callback();
  GIF_PROVIDER;
  let obj = { style: tmp.container, children: null };
  if (categoryType === GIFPickerResultTypes.SEARCH) {
    obj = { size: "md", onChange: null, placeholder: null, onClear: null, ref: null, isRound: true };
    obj[1] = onQueryChange;
    obj[2] = tmp5;
    obj[3] = onQueryClear;
    obj[4] = searchInputRef;
    let tmp13Result = tmp6(tmp2(5901).SearchField, obj);
  } else {
    obj = { style: null, children: null };
    obj[0] = tmp.headerContainer;
    const obj1 = { style: null, accessibilityRole: "button", onPress: null, accessibilityLabel: null, children: null };
    obj1[0] = tmp.header;
    obj1[2] = onQueryClear;
    const intl4 = tmp2(1236).intl;
    const obj2 = { destination: null };
    const intl5 = tmp2(1236).intl;
    obj2[0] = intl5.string(tmp2(1236).t.ffgJrs);
    obj1[3] = intl4.formatToPlainString(tmp2(1236).t.UTypEu, obj2);
    const obj3 = { color: null, size: "sm" };
    obj3[0] = Themes.colors.INTERACTIVE_TEXT_ACTIVE;
    const items = [tmp6(tmp2(9860).ChevronLargeLeftIcon, obj3), ];
    if (categoryType === tmp8.TRENDING_GIFS) {
      const intl3 = tmp2(1236).intl;
      let stringResult = intl3.string(tmp2(1236).t.TsWCdW);
    } else if (categoryType === tmp8.FAVORITES) {
      const intl2 = tmp2(1236).intl;
      stringResult = intl2.string(tmp2(1236).t.k8fFjp);
    } else {
      const intl = tmp2(1236).intl;
      stringResult = intl.string(tmp2(1236).t["5h0QOP"]);
    }
    const obj4 = { variant: "text-sm/semibold", color: "text-default", maxFontSizeMultiplier: 2, children: null };
    obj4[3] = stringResult;
    items[1] = tmp6(tmp2(4281).Text, obj4);
    obj1[4] = items;
    const items1 = [closure_9(tmp2(4812).PressableOpacity, obj1), ];
    let tmp6Result = categoryType === tmp8.FAVORITES;
    if (tmp6Result) {
      const obj5 = { columnWidth: null, onQueryChange: null };
      obj5[0] = columnWidth;
      obj5[1] = onFavoritesQueryChange;
      tmp6Result = tmp6(FavoritesSearch, obj5);
    }
    items1[1] = tmp6Result;
    obj[1] = items1;
    tmp13Result = tmp13(tmp7, obj);
  }
  obj[1] = tmp13Result;
  return closure_7(View, obj);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/gif_picker/native/GIFPickerHeader.tsx");

export default memoResult;