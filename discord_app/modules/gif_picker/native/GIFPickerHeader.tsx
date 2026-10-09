// discord_app/modules/gif_picker/native/GIFPickerHeader.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../design/animation/reanimated/timing/timingPresets.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const util = SearchField(1126);
const Text_Text = SearchField(5087);
const Pressables = SearchField(6191);
const SearchField2 = SearchField(6737);
const GifProvider = SearchField(9707);
const ChevronLargeLeftIcon = SearchField(9716);
require = fn;
const View = fn(17).View;
fn(1085).GIFPickerResultTypes;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5091);
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
  gap: fn(9709).GIF_PICKER_GUTTER_SPACING,
};
let obj4 = { flexDirection: "row", justifyContent: "space-between", gap: fn(9709).GIF_PICKER_GUTTER_SPACING };
obj.header = {
  borderWidth: 1,
  borderColor: "transparent",
  paddingHorizontal: nativeDefault.space.PX_8,
  height: fn(6300).InputHeights.MD,
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
const __initData3 = {
  code: "function GIFPickerHeaderTsx3(){const{progress}=this.__closure;return{opacity:1-progress.get()};}",
};
const __initData4 = {
  code: "function GIFPickerHeaderTsx4(){const{progress,columnWidth}=this.__closure;return{width:progress.get()*columnWidth,opacity:progress.get()};}",
};
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function FavoritesSearch(columnWidth) {
      const cResult = columnWidth(ref[10]).c(29);
      columnWidth = columnWidth.columnWidth;
      const onQueryChange = columnWidth.onQueryChange;
      closure_10();
      ref = noop.useRef(null);
      const tmp6 = accessibilityElementsHidden(noop.useState(false), 2);
      accessibilityElementsHidden = tmp6[0];
      noop = tmp6[1];
      let obj = columnWidth(ref[10]);
      const obj2 = noop;
      const sharedValue = columnWidth(ref[11]).useSharedValue(0);
      if (cResult[0] === accessibilityElementsHidden) {
        if (cResult[1] === sharedValue) {
          let tmp9 = cResult[2];
          let tmp10 = cResult[3];
        }
        const effect = obj2.useEffect(tmp9, tmp10);
        const fn2 = function w() {
          return { opacity: 1 - sharedValue.get() };
        };
        const obj4 = { progress: sharedValue };
        fn2.__closure = obj4;
        fn2.__workletHash = 11452628946352;
        fn2.__initData = __initData;
        const animatedStyle = tmp(tmp2[11]).useAnimatedStyle(fn2);
        let tmpResult = tmp(tmp2[11]);
        const fn3 = function x() {
          return { width: sharedValue.get() * columnWidth, opacity: sharedValue.get() };
        };
        const obj5 = { progress: sharedValue, columnWidth };
        fn3.__closure = obj5;
        fn3.__workletHash = 12592656871997;
        fn3.__initData = __initData2;
        const animatedStyle1 = tmp(tmp2[11]).useAnimatedStyle(fn3);
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          class R {
            constructor() {
              return closure_4(true);
            }
          }
          cResult[4] = R;
        } else {
          class R {
            constructor() {
              return closure_4(true);
            }
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          class H {
            constructor() {
              current = closure_2.current;
              text = undefined;
              if (current != null) {
                text = current.getText();
              }
              if ("" === text) {
                tmp2 = closure_4;
                flag = false;
                tmp3 = closure_4(false);
              }
              return;
            }
          }
          cResult[5] = H;
        } else {
          class H {
            constructor() {
              current = closure_2.current;
              text = undefined;
              if (current != null) {
                text = current.getText();
              }
              if ("" === text) {
                tmp2 = closure_4;
                flag = false;
                tmp3 = closure_4(false);
              }
              return;
            }
          }
        }
        if (accessibilityElementsHidden) {
          class H {
            constructor() {
              current = closure_2.current;
              text = undefined;
              if (current != null) {
                text = current.getText();
              }
              if ("" === text) {
                tmp2 = closure_4;
                flag = false;
                tmp3 = closure_4(false);
              }
              return;
            }
          }
        }
        if (accessibilityElementsHidden) {
          class H {
            constructor() {
              current = closure_2.current;
              text = undefined;
              if (current != null) {
                text = current.getText();
              }
              if ("" === text) {
                tmp2 = closure_4;
                flag = false;
                tmp3 = closure_4(false);
              }
              return;
            }
          }
        }
        const _Symbol3 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class H {
            constructor() {
              current = closure_2.current;
              text = undefined;
              if (current != null) {
                text = current.getText();
              }
              if ("" === text) {
                tmp2 = closure_4;
                flag = false;
                tmp3 = closure_4(false);
              }
              return;
            }
          }
          const obj6 = {
            variant: "icon-only",
            size: "md",
            icon: onQueryChange(tmp2[15]),
            accessibilityLabel: null,
            onPress: null,
          };
          const intl = tmp(tmp2[16]).intl;
          obj6.accessibilityLabel = intl.string(tmp(tmp2[16]).t["+Kakw+"]);
          obj6.onPress = R;
          const tmp21 = closure_7(tmp(tmp2[14]).IconButton, obj6);
          cResult[6] = tmp21;
          const tmp19 = tmp21;
        } else {
          class H {
            constructor() {
              current = closure_2.current;
              text = undefined;
              if (current != null) {
                text = current.getText();
              }
              if ("" === text) {
                tmp2 = closure_4;
                flag = false;
                tmp3 = closure_4(false);
              }
              return;
            }
          }
        }
        if (cResult[7] === animatedStyle) {
          class H {
            constructor() {
              current = closure_2.current;
              text = undefined;
              if (current != null) {
                text = current.getText();
              }
              if ("" === text) {
                tmp2 = closure_4;
                flag = false;
                tmp3 = closure_4(false);
              }
              return;
            }
          }
        }
        const obj7 = {
          style: animatedStyle,
          pointerEvents: "auto",
          accessibilityElementsHidden,
          importantForAccessibility: "auto",
          children: tmp19,
        };
        const tmp25 = closure_7(onQueryChange(tmp2[11]).View, obj7);
        cResult[7] = animatedStyle;
        cResult[8] = accessibilityElementsHidden;
        cResult[9] = "auto";
        cResult[10] = "auto";
        cResult[11] = tmp25;
        const tmpResult2 = tmp(tmp2[11]);
      }
      const fn = function s() {
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
      };
      const items = [accessibilityElementsHidden, sharedValue];
      cResult[0] = accessibilityElementsHidden;
      cResult[1] = sharedValue;
      cResult[2] = fn;
      cResult[3] = items;
      tmp10 = items;
      tmp9 = fn;
      const obj3 = columnWidth(ref[11]);
    }
  : function FavoritesSearch(columnWidth) {
      columnWidth = columnWidth.columnWidth;
      const onQueryChange = columnWidth.onQueryChange;
      let accessibilityElementsHidden;
      noop = undefined;
      const ref = noop.useRef(null);
      const tmp3 = accessibilityElementsHidden(noop.useState(false), 2);
      accessibilityElementsHidden = tmp3[0];
      noop = tmp3[1];
      const tmp = closure_10();
      const sharedValue = columnWidth(ref[11]).useSharedValue(0);
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
      let obj = columnWidth(ref[11]);
      class I {
        constructor() {
          obj = { opacity: 1 - closure_5.get() };
          return obj;
        }
      }
      I.__closure = { progress: sharedValue };
      I.__workletHash = 1563139253234;
      I.__initData = __initData3;
      const animatedStyle = columnWidth(ref[11]).useAnimatedStyle(I);
      const obj2 = columnWidth(ref[11]);
      const fn = function v() {
        return { width: sharedValue.get() * columnWidth, opacity: sharedValue.get() };
      };
      fn.__closure = { progress: sharedValue, columnWidth };
      fn.__workletHash = 7861705308411;
      fn.__initData = __initData4;
      const animatedStyle1 = columnWidth(ref[11]).useAnimatedStyle(fn);
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
        icon: onQueryChange(ref[15]),
        accessibilityLabel: null,
        onPress: null,
      };
      const intl = tmp5(tmp6[16]).intl;
      obj5.accessibilityLabel = intl.string(columnWidth(ref[16]).t["+Kakw+"]);
      obj5.onPress = callback;
      obj4.children = closure_7(columnWidth(ref[14]).IconButton, obj5);
      const items1 = [closure_7(onQueryChange(ref[11]).View, obj4)];
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
      obj6.children = closure_7(columnWidth(ref[17]).SearchField, {
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
      items1[1] = closure_7(onQueryChange(ref[11]).View, obj6);
      obj7.children = items1;
      return closure_9(closure_8, obj7);
    };
ReactCompilerGating = fn(558);
let obj5 = {
  borderWidth: 1,
  borderColor: "transparent",
  paddingHorizontal: nativeDefault.space.PX_8,
  height: fn(6300).InputHeights.MD,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerHeader.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function GIFPickerHeader(arg0) {
        let SearchField = require;
        let obj = dependencyMap;
        const cResult = c.c(13);
        ({
          categoryType,
          columnWidth,
          onQueryClear,
          onQueryChange,
          onFavoritesQueryChange,
          searchInputRef: headerContainer,
        } = arg0);
        const tmp2 = closure_10();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const searchPlaceholder = GifProvider.getSearchPlaceholder();
          cResult[0] = searchPlaceholder;
          let first = searchPlaceholder;
          const SearchFieldResult = GifProvider;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === categoryType) {
          if (cResult[2] === columnWidth) {
            if (cResult[3] === onFavoritesQueryChange) {
              if (cResult[4] === onQueryChange) {
                if (cResult[5] === onQueryClear) {
                  if (cResult[6] === headerContainer) {
                    if (cResult[7] === tmp2.header) {
                      if (cResult[8] === tmp2.headerContainer) {
                        if (cResult[10] === tmp2.container) {
                          if (cResult[11] === tmp5) {
                            let tmp12 = cResult[12];
                          }
                          return tmp12;
                        }
                        const obj3 = { style: tmp2.container, children: cResult[9] };
                        const tmp15 = React5(View, obj3);
                        cResult[10] = tmp2.container;
                        cResult[11] = cResult[9];
                        cResult[12] = tmp15;
                        tmp12 = tmp15;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        if (categoryType === GIFPickerResultTypes.SEARCH) {
          SearchField = SearchField2.SearchField;
          obj = {
            size: "md",
            onChange: onQueryChange,
            placeholder: first,
            onClear: onQueryClear,
            ref: headerContainer,
            round: true,
          };
          let tmp16Result = React5(SearchField, obj);
        } else {
          const obj4 = { style: tmp2.headerContainer, children: null };
          const obj5 = {
            style: tmp2.header,
            accessibilityRole: "button",
            onPress: onQueryClear,
            accessibilityLabel: null,
            children: null,
          };
          const intl4 = util.intl;
          const obj6 = { destination: null };
          const intl5 = util.intl;
          obj6.destination = intl5.string(util.t.ffgJrs);
          obj5.accessibilityLabel = intl4.formatToPlainString(util.t.UTypEu, obj6);
          const obj7 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, size: "sm" };
          const items = [React5(ChevronLargeLeftIcon.ChevronLargeLeftIcon, obj7)];
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
          const obj8 = {
            variant: "text-sm/semibold",
            color: "text-default",
            maxFontSizeMultiplier: 2,
            children: stringResult,
          };
          items[1] = React5(Text_Text.Text, obj8);
          obj5.children = items;
          const items1 = [options(Pressables.PressableOpacity, obj5)];
          let tmp18Result = categoryType === GIFPickerResultTypes.FAVORITES;
          if (tmp18Result) {
            const obj9 = { columnWidth, onQueryChange: onFavoritesQueryChange };
            tmp18Result = React5(closure_15, obj9);
          }
          items1[1] = tmp18Result;
          obj4.children = items1;
          tmp16Result = options(View, obj4);
        }
        cResult[1] = categoryType;
        cResult[2] = columnWidth;
        cResult[3] = onFavoritesQueryChange;
        cResult[4] = onQueryChange;
        cResult[5] = onQueryClear;
        cResult[6] = headerContainer;
        ({ header: tmp[7], headerContainer } = tmp2);
        cResult[8] = headerContainer;
        cResult[9] = tmp16Result;
      }
    : function GIFPickerHeader(arg0) {
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
          let tmp13Result = React5(SearchField2.SearchField, obj2);
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
          const items1 = [options(Pressables.PressableOpacity, obj4)];
          let tmp6Result2 = categoryType === GIFPickerResultTypes.FAVORITES;
          if (tmp6Result2) {
            const obj8 = { columnWidth, onQueryChange: onFavoritesQueryChange };
            tmp6Result2 = React5(closure_15, obj8);
          }
          items1[1] = tmp6Result2;
          obj3.children = items1;
          tmp13Result = options(View, obj3);
        }
        obj.children = tmp13Result;
        return React5(View, obj);
      },
);
