// === Module 9235: TagListInput ===

// Module 9235 (TagListInput)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4590 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4612 */;
import Text_Text from "Text/Text" /* 4886 */;
import spring from "spring" /* 5597 */;
import springPresets from "springPresets" /* 5598 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import _modDef6052 from "module_6052" /* 6052 */;
import useInputClearButton from "useInputClearButton" /* 6102 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault, leadingFade;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ View: hasOwnProperty, ScrollView: metroRequire, StyleSheet: metroImportDefault } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let closure_10 = createStyles.createStyles(() => {
  let obj6;
  const obj = { placeholder: { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT }, iconContainer: { paddingHorizontal: nativeDefault.space.PX_12 }, iconLeft: { marginLeft: nativeDefault.space.PX_12 }, scrollViewContent: { paddingVertical: 5 }, horizontalScrollViewContent: { flexGrow: 1 }, inputInner: { marginHorizontal: nativeDefault.space.PX_4, alignItems: "center", flexDirection: "row", flexWrap: "wrap", flex: 1 }, horizontalInputInner: { flexWrap: "nowrap" }, searchInput: obj6, horizontalSearchInput: { minWidth: nativeDefault.space.PX_64 } };
  ({ color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT });
  ({ paddingHorizontal: nativeDefault.space.PX_12 });
  ({ marginLeft: nativeDefault.space.PX_12 });
  ({ marginHorizontal: nativeDefault.space.PX_4, alignItems: "center", flexDirection: "row", flexWrap: "wrap", flex: 1 });
  obj6 = { flex: 1, minHeight: nativeDefault.space.PX_24, minWidth: nativeDefault.space.PX_48, color: nativeDefault.colors.TEXT_DEFAULT, paddingVertical: 0, marginVertical: 2 };
  const merged = Object.assign(Text_Text.TextStyleSheet["text-sm/medium"]);
  ({ minWidth: nativeDefault.space.PX_64 });
  return obj;
});
const start = { x: 0, y: 0.5 };
const end = { x: 1, y: 0.5 };
const colors = ["transparent", "black"];
createStyles = createStyles_mod;
let closure_14 = createStyles.createStyles(() => {
  let obj2;
  let obj3;
  const obj = { fill: { flex: 1 }, mask: obj2, leadingFade: { width: 32 }, leadingCover: obj3, maskRemainder: { flex: 1, backgroundColor: "black" } };
  obj2 = { flexDirection: "row" };
  const merged = Object.assign(metroImportDefault.absoluteFillObject);
  obj3 = { backgroundColor: "black" };
  const merged1 = Object.assign(metroImportDefault.absoluteFillObject);
  return obj;
});
const __initData = { code: "function TagListInputNativeTsx1(){const{withSpring,scrolled,springStandard}=this.__closure;return{opacity:withSpring(scrolled.get()?0:1,springStandard,\"animate-always\")};}" };
const __initData2 = { code: "function TagListInputNativeTsx2(){const{withSpring,scrolled,springStandard}=this.__closure;return{opacity:withSpring(scrolled.get()?0:1,springStandard,'animate-always')};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((leadingFade) => {
  let closure_1;
  let horizontal;
  let onScroll;
  let obj = onScroll(horizontal[8]);
  const cResult = obj.c(13);
  ({ horizontal, onScroll } = leadingFade);
  leadingFade = leadingFade.leadingFade;
  const tmp4 = closure_14();
  importDefault = tmp4;
  if (horizontal) {
    horizontal = leadingFade;
  }
  const tmpResult = onScroll(horizontal[9]);
  const sharedValue = tmpResult.useSharedValue(false);
  if (cResult[0] === horizontal) {
    if (cResult[1] === onScroll) {
      let tmp6;
      if (cResult[2] === sharedValue) {
        tmp6 = cResult[3];
      }
      const tmpResult2 = onScroll(horizontal[9]);
      class I {
        constructor() {
          const withSpring = spring.withSpring;
          let num = 1;
          spring;
          if (sharedValue.get()) {
            num = 0;
          }
          const obj = { opacity: withSpring(num, springPresets.springStandard, "animate-always") };
          return obj;
        }
      }
      let obj2 = { withSpring: onScroll(horizontal[10]).withSpring, scrolled: sharedValue, springStandard: onScroll(horizontal[11]).springStandard };
      const useAnimatedStyle = tmpResult2.useAnimatedStyle;
      I.__closure = obj2;
      let num = 4094668912184;
      I.__workletHash = 4094668912184;
      I.__initData = __initData;
      const animatedStyle = useAnimatedStyle(I);
      if (cResult[4] === animatedStyle) {
        if (cResult[5] === horizontal) {
          let tmp10;
          if (cResult[6] === tmp4) {
            tmp10 = cResult[7];
          }
          class I {
            constructor() {
              const withSpring = spring.withSpring;
              let num = 1;
              spring;
              if (sharedValue.get()) {
                num = 0;
              }
              const obj = { opacity: withSpring(num, springPresets.springStandard, "animate-always") };
              return obj;
            }
          }
          let tmp12;
          if (horizontal) {
            tmp12 = tmp6;
          }
          let num6;
          if (horizontal) {
            num6 = 16;
          }
          let fill;
          if (horizontal) {
            fill = tmp4.fill;
          }
          if (cResult[8] === tmp12) {
            if (cResult[9] === num6) {
              if (cResult[10] === fill) {
                let tmp14;
                if (cResult[11] === tmp10) {
                  tmp14 = cResult[12];
                }
                return tmp14;
              }
            }
          }
          let obj3 = { onScroll: tmp12, scrollEventThrottle: num6, scrollerStyle: fill, wrap: tmp10 };
          class F {
            constructor(children) {
              let items;
              let items1;
              let items2;
              let obj2;
              let tmp = children;
              if (horizontal) {
                const obj = { style: closure_1.fill, androidRenderingMode: "software", maskElement: React4(hasOwnProperty, obj2), children };
                const obj3 = { style: closure_1.leadingFade, children: items };
                items = [, ];
                obj2 = { style: closure_1.mask, children: items2 };
                const obj4 = { start, end, colors, style: metroImportDefault.absoluteFill };
                const tmp5 = _modDef6052;
                items[0] = metroImportAll(LinearGradientDefault, obj4);
                const obj5 = { style: items1 };
                items1 = [closure_1.leadingCover, animatedStyle];
                items[1] = metroImportAll(ReanimatedRexportDefault.View, obj5);
                items2 = [React4(hasOwnProperty, obj3), ];
                const obj6 = { style: closure_1.maskRemainder };
                items2[1] = metroImportAll(hasOwnProperty, obj6);
                tmp = metroImportAll(tmp5, obj);
              }
              return tmp;
            }
          }
          cResult[9] = num6;
          cResult[10] = fill;
          cResult[11] = tmp10;
          cResult[12] = obj3;
          tmp14 = obj3;
        }
      }
      class F {
        constructor(children) {
          let items;
          let items1;
          let items2;
          let obj2;
          let tmp = children;
          if (horizontal) {
            const obj = { style: closure_1.fill, androidRenderingMode: "software", maskElement: React4(hasOwnProperty, obj2), children };
            const obj3 = { style: closure_1.leadingFade, children: items };
            items = [, ];
            obj2 = { style: closure_1.mask, children: items2 };
            const obj4 = { start, end, colors, style: metroImportDefault.absoluteFill };
            const tmp5 = _modDef6052;
            items[0] = metroImportAll(LinearGradientDefault, obj4);
            const obj5 = { style: items1 };
            items1 = [closure_1.leadingCover, animatedStyle];
            items[1] = metroImportAll(ReanimatedRexportDefault.View, obj5);
            items2 = [React4(hasOwnProperty, obj3), ];
            const obj6 = { style: closure_1.maskRemainder };
            items2[1] = metroImportAll(hasOwnProperty, obj6);
            tmp = metroImportAll(tmp5, obj);
          }
          return tmp;
        }
      }
      cResult[4] = animatedStyle;
      cResult[5] = horizontal;
      cResult[6] = tmp4;
      cResult[7] = F;
      tmp10 = F;
    }
  }
  const fn = function t(nativeEvent) {
    if (horizontal) {
      const result = sharedValue.set(nativeEvent.nativeEvent.contentOffset.x > 1);
    }
    if (onScroll != null) {
      tmp4(nativeEvent);
    }
  };
  cResult[0] = horizontal;
  cResult[1] = onScroll;
  cResult[2] = sharedValue;
  cResult[3] = fn;
  tmp6 = fn;
}) : ((leadingFade) => {
  let fill;
  let horizontal;
  let num;
  let onScroll;
  ({ horizontal, onScroll } = leadingFade);
  horizontal = undefined;
  let sharedValue;
  let animatedStyle;
  leadingFade = leadingFade.leadingFade;
  let tmp = closure_14();
  let closure_1 = tmp;
  if (horizontal) {
    horizontal = leadingFade;
  }
  let obj = onScroll(horizontal[9]);
  sharedValue = obj.useSharedValue(false);
  let items = [horizontal, onScroll, sharedValue];
  const callback = animatedStyle.useCallback((nativeEvent) => {
    if (horizontal) {
      const result = sharedValue.set(nativeEvent.nativeEvent.contentOffset.x > 1);
    }
    if (onScroll != null) {
      tmp4(nativeEvent);
    }
  }, items);
  let obj2 = onScroll(horizontal[9]);
  const fn = function u() {
    const withSpring = spring.withSpring;
    let num = 1;
    spring;
    if (sharedValue.get()) {
      num = 0;
    }
    const obj = { opacity: withSpring(num, springPresets.springStandard, "animate-always") };
    return obj;
  };
  let obj3 = { withSpring: onScroll(horizontal[10]).withSpring, scrolled: sharedValue, springStandard: onScroll(horizontal[11]).springStandard };
  fn.__closure = obj3;
  fn.__workletHash = 3038650900571;
  fn.__initData = __initData2;
  animatedStyle = obj2.useAnimatedStyle(fn);
  let items1 = [horizontal, tmp, animatedStyle];
  let tmp6 = horizontal;
  const callback1 = animatedStyle.useCallback((children) => {
    let items;
    let items1;
    let items2;
    let obj2;
    let tmp = children;
    if (horizontal) {
      const obj = { style: closure_1.fill, androidRenderingMode: "software", maskElement: React4(hasOwnProperty, obj2), children };
      const obj3 = { style: closure_1.leadingFade, children: items };
      items = [, ];
      obj2 = { style: closure_1.mask, children: items2 };
      const obj4 = { start, end, colors, style: metroImportDefault.absoluteFill };
      const tmp5 = _modDef6052;
      items[0] = metroImportAll(LinearGradientDefault, obj4);
      const obj5 = { style: items1 };
      items1 = [closure_1.leadingCover, animatedStyle];
      items[1] = metroImportAll(ReanimatedRexportDefault.View, obj5);
      items2 = [React4(hasOwnProperty, obj3), ];
      const obj6 = { style: closure_1.maskRemainder };
      items2[1] = metroImportAll(hasOwnProperty, obj6);
      tmp = metroImportAll(tmp5, obj);
    }
    return tmp;
  }, items1);
  if (!horizontal) {
    tmp6 = null != onScroll;
  }
  let tmp8;
  if (tmp6) {
    tmp8 = callback;
  }
  let obj4 = { onScroll: tmp8, scrollEventThrottle: num, scrollerStyle: fill, wrap: callback1 };
  num = undefined;
  if (tmp6) {
    num = 16;
  }
  fill = undefined;
  if (horizontal) {
    fill = tmp.fill;
  }
  return obj4;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let clearProps;
  let clearState;
  let closure_129_4;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp8;
  let tmp9;
  let closure_0 = arg1;
  let obj = react2;
  const cResult = obj.c(15);
  const ref = react.useRef(null);
  const ref1 = react.useRef("");
  const ref2 = react.useRef(false);
  [tmp8, closure_129_4] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  if (cResult[0] !== arg1) {
    const fn = function o(current, arg1) {
      const tmp = undefined !== arg1 && arg1;
      ref2.current = true;
      ref1.current = current;
      closure_1_4(current.length > 0);
      if (closure_0 != null) {
        closure_0(current);
      }
      if (tmp) {
        current = ref.current;
        if (current != null) {
          const obj = { text: current };
          current.setNativeProps(obj);
        }
      }
    };
    cResult[0] = arg1;
    cResult[1] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[1];
  }
  let closure_5 = tmp9;
  if (cResult[2] !== tmp9) {
    const fn2 = function v() {
      return {
        blur() {
          const current = ref.current;
          let blurResult;
          if (current != null) {
            blurResult = current.blur();
          }
          return blurResult;
        },
        focus() {
          const current = ref.current;
          let focusResult;
          if (current != null) {
            focusResult = current.focus();
          }
          return focusResult;
        },
        setText(arg0) {
          return closure_1_5(arg0, true);
        },
        getText() {
          return ref.current;
        },
        isFocused() {
          const current = ref.current;
          let flag;
          if (current != null) {
            flag = current.isFocused();
          }
          if (flag == null) {
            flag = false;
          }
          return flag;
        },
        measure(arg0) {
          const current = ref.current;
          let measureResult;
          if (current != null) {
            measureResult = current.measure(arg0);
          }
          return measureResult;
        },
        measureInWindow(arg0) {
          const current = ref.current;
          let measureInWindowResult;
          if (current != null) {
            measureInWindowResult = current.measureInWindow(arg0);
          }
          return measureInWindowResult;
        },
        measureLayout(arg0, arg1, arg2) {
          const current = ref.current;
          let measureLayoutResult;
          if (current != null) {
            measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
          }
          return measureLayoutResult;
        }
      };
    };
    cResult[2] = tmp9;
    cResult[3] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[3];
  }
  const imperativeHandle = react.useImperativeHandle(arg0, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { clearable: true };
    cResult[4] = obj3;
    tmp12 = obj3;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] !== tmp9) {
    const fn3 = function b() {
      return closure_5("", true);
    };
    const fn4 = function x(arg0) {
      return closure_5(arg0, true);
    };
    cResult[5] = tmp9;
    cResult[6] = fn3;
    cResult[7] = fn4;
    tmp14 = fn4;
    tmp13 = fn3;
  } else {
    tmp13 = cResult[6];
    tmp14 = cResult[7];
  }
  if (cResult[8] === tmp8) {
    if (cResult[9] === tmp13) {
      let tmp15;
      if (cResult[10] === tmp14) {
        tmp15 = cResult[11];
      }
      ({ clearProps, clearState } = tmp15);
      const tmpResult = useInputClearButton;
      const inputClearButton = tmpResult.useInputClearButton(clearProps, clearState);
      if (cResult[12] === inputClearButton) {
        let tmp17;
        if (cResult[13] === tmp9) {
          tmp17 = cResult[14];
        }
        return tmp17;
      }
      const obj4 = { clearButton: inputClearButton, inputRef: ref, inputValueRef: ref1, inputUpdate: tmp9, inputInitializedRef: ref2 };
      cResult[12] = inputClearButton;
      cResult[13] = tmp9;
      cResult[14] = obj4;
      tmp17 = obj4;
    }
  }
  const obj5 = { clearProps: tmp12, clearState: { hasValue: tmp8, clear: tmp13, setTextValue: tmp14 } };
  cResult[8] = tmp8;
  cResult[9] = tmp13;
  cResult[10] = tmp14;
  cResult[11] = obj5;
  tmp15 = obj5;
}) : ((arg0, arg1) => {
  let clearProps;
  let clearState;
  let closure_5;
  let first;
  let obj2;
  let closure_0 = arg1;
  const ref = react.useRef(null);
  const ref1 = react.useRef("");
  const ref2 = react.useRef(false);
  [first, closure_5] = react.useState(false);
  const items = [arg1];
  const callback = react.useCallback((current) => {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    ref2.current = true;
    ref1.current = current;
    closure_5(current.length > 0);
    if (closure_0 != null) {
      closure_0(current);
    }
    if (flag) {
      current = ref.current;
      if (current != null) {
        const obj = { text: current };
        current.setNativeProps(obj);
      }
    }
  }, items);
  const imperativeHandle = react.useImperativeHandle(arg0, () => ({
    blur() {
      const current = ref.current;
      let blurResult;
      if (current != null) {
        blurResult = current.blur();
      }
      return blurResult;
    },
    focus() {
      const current = ref.current;
      let focusResult;
      if (current != null) {
        focusResult = current.focus();
      }
      return focusResult;
    },
    setText(arg0) {
      return callback(arg0, true);
    },
    getText() {
      return ref.current;
    },
    isFocused() {
      const current = ref.current;
      let flag;
      if (current != null) {
        flag = current.isFocused();
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    },
    measure(arg0) {
      const current = ref.current;
      let measureResult;
      if (current != null) {
        measureResult = current.measure(arg0);
      }
      return measureResult;
    },
    measureInWindow(arg0) {
      const current = ref.current;
      let measureInWindowResult;
      if (current != null) {
        measureInWindowResult = current.measureInWindow(arg0);
      }
      return measureInWindowResult;
    },
    measureLayout(arg0, arg1, arg2) {
      const current = ref.current;
      let measureLayoutResult;
      if (current != null) {
        measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
      }
      return measureLayoutResult;
    }
  }));
  const items1 = [first, callback];
  const memo = react.useMemo(() => {
    const obj = { clearProps: { clearable: true }, clearState: obj2 };
    return obj;
  }, items1);
  let obj = { clearButton: obj2.useInputClearButton(clearProps, clearState), inputRef: ref, inputValueRef: ref1, inputUpdate: callback, inputInitializedRef: ref2 };
  ({ clearProps, clearState } = memo);
  obj2 = useInputClearButton;
  return obj;
});
const memoResult = react.memo(function TagListInput(accessibilityHint) {
  let BottomSheetScrollView;
  let BottomSheetTextInput;
  let InputFieldContainer;
  let _undefined;
  let _undefined2;
  let _undefined3;
  let _undefined4;
  let accessibilityLabel;
  let autoClearInputOnTagAdd;
  let autoFocus;
  let c10;
  let c12;
  let c13;
  let c14;
  let c17;
  let c8;
  let c9;
  let defaultValue;
  let disabled;
  let focusOnAdd;
  let footer;
  let icon;
  let inActionSheet;
  let isFocused;
  let items2;
  let items3;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj12;
  let obj8;
  let onBlur;
  let onChangeText;
  let onFocus;
  let onScroll;
  let onSubmitEditing;
  let placeholder;
  let returnKeyType;
  let style;
  let tmp15;
  let tmp22;
  let tmp27;
  let tmp32;
  ({ defaultValue, disabled } = accessibilityHint);
  accessibilityHint = accessibilityHint.accessibilityHint;
  if (disabled === undefined) {
    disabled = false;
  }
  ({ placeholder, accessibilityLabel, icon, returnKeyType, onChangeText, onBlur, onFocus, onScroll, style } = accessibilityHint);
  if (returnKeyType === undefined) {
    returnKeyType = "search";
  }
  let tags = accessibilityHint.tags;
  let flag = accessibilityHint.horizontal;
  if (flag === undefined) {
    flag = false;
  }
  ({ footer, focusOnAdd } = accessibilityHint);
  if (focusOnAdd === undefined) {
    focusOnAdd = true;
  }
  ({ inActionSheet, onRemove: dependencyMap, autoClearInputOnTagAdd, onSubmitEditing, autoFocus } = accessibilityHint);
  if (autoClearInputOnTagAdd === undefined) {
    autoClearInputOnTagAdd = true;
  }
  let flag2 = accessibilityHint.leadingFade;
  if (flag2 === undefined) {
    flag2 = false;
  }
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  c12 = undefined;
  c13 = undefined;
  c14 = undefined;
  c17 = undefined;
  let ref = accessibilityHint.ref;
  const tmp = c10();
  const tmp2 = tags;
  let obj = tags(5602);
  const bound = Math.min(2, obj.useFontScale());
  const result = tags(6106).InputHeights.MD * bound;
  let tmp6 = closure_18(ref, onChangeText);
  const inputRef = tmp6.inputRef;
  const inputValueRef = tmp6.inputValueRef;
  const inputUpdate = tmp6.inputUpdate;
  const clearButton = tmp6.clearButton;
  const inputInitializedRef = tmp6.inputInitializedRef;
  ref = inputRef.useRef({ start: 0, end: 0 });
  const obj3 = tags(6109);
  const keyboardBlurring = obj3.useKeyboardBlurring(inputRef);
  const obj4 = tags(4586);
  const focus = obj4.useFocus();
  ({ focusProps: c8, isFocused } = focus);
  ({ onFocus: c9, onBlur: c10 } = focusOnAdd(6111)({ onFocus, onBlur }));
  const tmp10 = focusOnAdd(6111)({ onFocus, onBlur });
  const ref1 = inputRef.useRef(null);
  let tmp12 = autoClearInputOnTagAdd;
  [c12, c13] = autoClearInputOnTagAdd(inputRef.useState(null), 2);
  const tmp13 = autoClearInputOnTagAdd(inputRef.useState(null), 2);
  [tmp15, c14] = autoClearInputOnTagAdd(inputRef.useState(false), 2);
  autoClearInputOnTagAdd(inputRef.useState(false), 2);
  const tmp16 = focusOnAdd(5984)(tags);
  const length = tmp16;
  const ref2 = inputRef.useRef(tags);
  const items = [focusOnAdd, inputUpdate, ref2, tags, inputRef, inputValueRef, autoClearInputOnTagAdd];
  const layoutEffect = inputRef.useLayoutEffect(() => {
    if (ref2.current.length < tags.length) {
      let tmp6 = focusOnAdd;
      if (tmp6) {
        let current = inputRef.current;
        let isFocusedResult;
        if (current != null) {
          isFocusedResult = current.isFocused();
        }
        tmp6 = false === isFocusedResult;
      }
      if (tmp6) {
        const current2 = inputRef.current;
        if (current2 != null) {
          current2.focus();
        }
      }
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const current = ref.current;
        let scrollToEndResult;
        if (current != null) {
          scrollToEndResult = current.scrollToEnd({ animated: false });
        }
        return scrollToEndResult;
      }, 10);
      const tmp12 = autoClearInputOnTagAdd && inputValueRef.current.length > 0;
      if (tmp12) {
        inputUpdate("", true);
      }
      if (0 === inputValueRef.current.length) {
        const current3 = inputRef.current;
        if (current3 != null) {
          current3.setSelection(0, 0);
        }
        ref.current = { start: 0, end: 0 };
      }
    }
    ref2.current = tags;
  }, items);
  const items1 = [tmp16];
  const layoutEffect1 = inputRef.useLayoutEffect(() => {
    if (0 !== length.length) {
      const current = ref1.current;
      if (current != null) {
        current.scrollToEnd({ animated: false });
      }
    }
  }, items1);
  const tmp9 = focusOnAdd;
  if (inActionSheet) {
    BottomSheetScrollView = tmp2(6112).BottomSheetScrollView;
  } else {
    BottomSheetScrollView = inputUpdate;
  }
  if (inActionSheet) {
    BottomSheetTextInput = tmp2(9236).BottomSheetTextInput;
  } else {
    BottomSheetTextInput = tmp9(9237);
  }
  const result1 = 33 * bound;
  [tmp22, c17] = tmp12(inputRef.useState(0), 2);
  tmp12(inputRef.useState(0), 2);
  const callback = obj2.useCallback((nativeEvent) => {
    _undefined4(nativeEvent.nativeEvent.layout.width);
  }, []);
  if (placeholder == null) {
    let intl = tmp2(1126).intl;
    placeholder = intl.string(tmp2(1126).t["5h0QOP"]);
  }
  if (accessibilityLabel == null) {
    const intl2 = tmp2(1126).intl;
    accessibilityLabel = intl2.string(tmp2(1126).t["5h0QOP"]);
  }
  const obj5 = c17({ horizontal: flag, leadingFade: flag2, onScroll });
  const obj6 = { style: items2, contentContainerStyle: items3, ref: ref1, bounces: false, onScroll: obj5.onScroll, onLayout: tmp27, scrollEventThrottle: obj5.scrollEventThrottle, horizontal: flag, snapToInterval: result1, overScrollMode: "never", keyboardShouldPersistTaps: "handled", children: c9(inputValueRef, obj8) };
  items2 = [, ];
  const obj7 = { maxHeight: 3 * result1 };
  items2[0] = obj7;
  items2[1] = obj5.scrollerStyle;
  items3 = [tmp.scrollViewContent, ];
  let prop;
  if (flag) {
    prop = tmp.horizontalScrollViewContent;
  }
  items3[1] = prop;
  tmp27 = undefined;
  if (flag) {
    tmp27 = callback;
  }
  const items4 = [tmp.inputInner, ];
  obj8 = { style: items4, children: items5 };
  const tmp30 = flag && tmp.horizontalInputInner;
  items4[1] = tmp30;
  items5 = [
    tags.map((tag, index) => {
      tags = tag;
      let closure_1 = index;
      const obj = {
        tag,
        selected: tag.id === c12,
        onPress(arg0) {
          let tmpResult;
          if ("select" === arg0) {
            if (c12 !== tag.id) {
              c13(tmp5.id);
            }
            const current = inputRef.current;
            if (current != null) {
              current.focus();
            }
            c14(true);
            const current2 = inputRef.current;
            if (current2 != null) {
              current2.setSelection(0, 0);
            }
            ref.current = { start: 0, end: 0 };
          } else if (dependencyMap != null) {
            tmpResult = tmp(index);
          }
          return tmpResult;
        },
        start: 0 === index,
        end: index === tags.length - 1
      };
      return _undefined(tags(dependencyMap[25]).TagListInputTagComponent, obj, index);
    }),

  ];
  const obj9 = {
    ref: inputRef,
    accessibilityHint,
    accessibilityRole: "search",
    defaultValue,
    style: items6,
    onChangeText: inputUpdate,
    onKeyPress(nativeEvent) {
      _undefined3(false);
      let tmp4 = 0 === ref.current.start;
      if (tmp4) {
        tmp4 = 0 === ref.current.end;
      }
      if ("Backspace" === nativeEvent.nativeEvent.key) {
        if (null != c12) {
          const findIndexResult = tags.findIndex((id) => id.id === closure_1_12);
          if (findIndexResult > -1) {
            if (dependencyMap != null) {
              dependencyMap(findIndexResult);
            }
          }
          _undefined2(null);
        }
      }
      if ("Backspace" === nativeEvent.nativeEvent.key) {
        if (tmp4) {
          if (0 !== tags.length) {
            _undefined2(tags[tags.length - 1].id);
            _undefined3(true);
            const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
            const announce = AccessibilityAnnouncer.announce;
            const intl = intl3.intl;
            const obj = { text: tags[tags.length - 1].text };
            announce(intl.formatToPlainString(intl3.t.QymItZ, obj));
          }
        }
      }
      if (null != c12) {
        _undefined2(null);
      } else {
        const tmp8 = null != ref.current && ref.current.start === ref.current.end && ref.current.start === inputValueRef.current.length;
        if (tmp8) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => {
            const current = ref.current;
            let scrollToEndResult;
            if (current != null) {
              scrollToEndResult = current.scrollToEnd({ animated: false });
            }
            return scrollToEndResult;
          }, 10);
        }
      }
    },
    onFocus(arg0) {
      _undefined.onFocus();
      if (c9 != null) {
        tmp2(arg0);
      }
    },
    onBlur(arg0) {
      _undefined.onBlur();
      if (c10 != null) {
        tmp2(arg0);
      }
    },
    onPressIn() {
      _undefined3(false);
      _undefined2(null);
    },
    autoCapitalize: "none",
    autoCorrect: false,
    "aria-label": accessibilityLabel,
    placeholder: tmp32,
    placeholderTextColor: tmp.placeholder.color,
    autoFocus,
    returnKeyType,
    accessibilityLabel,
    caretHidden: tmp15,
    onSubmitEditing,
    maxFontSizeMultiplier: 2,
    onSelectionChange(nativeEvent) {
      const selection = nativeEvent.nativeEvent.selection;
      ref.current = selection;
      return selection;
    }
  };
  if (inputInitializedRef.current) {
    defaultValue = inputValueRef.current;
  }
  items6 = [tmp.searchInput, flag && tmp.horizontalSearchInput, ];
  let tmp31;
  if (flag) {
    if (null == clearButton) {
      tmp31 = { maxWidth: tmp22 - 16 };
      const obj10 = { maxWidth: tmp22 - 16 };
    }
  }
  items6[2] = tmp31;
  tmp32 = undefined;
  if (0 === tags.length) {
    if (null == clearButton) {
      tmp32 = placeholder;
    }
  }
  items5[1] = c8(BottomSheetTextInput, obj9);
  const obj11 = { style: items7, children: c9(InputFieldContainer, obj12) };
  items7 = [{ minHeight: result, overflow: "hidden" }, style];
  obj12 = { size: "sm", disabled, isFocused, children: items8 };
  const tmp25Result = c8(BottomSheetScrollView, obj6);
  InputFieldContainer = tmp2(6105).InputFieldContainer;
  if (null == icon) {
    const obj13 = { style: tmp.iconLeft, size: "xs", color: "interactive-text-default" };
    icon = tmp25(tmp2(6548).MagnifyingGlassIcon, obj13);
  }
  items8 = [icon, obj5.wrap(tmp25Result), ];
  if (null == footer) {
    let tmp25Result2 = null;
    if (null != clearButton) {
      const obj14 = { style: tmp.iconContainer, children: clearButton };
      tmp25Result2 = tmp25(tmp29, obj14);
    }
    footer = tmp25Result2;
  }
  items8[2] = footer;
  return c8(inputValueRef, obj11);
});
let result = size.fileFinishedImporting("design/components/TagListInput/native/TagListInput.native.tsx");

export default memoResult;