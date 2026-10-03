// === Module 9235: TagListInput ===

// Module 9235 (TagListInput)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4590 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4612 */;
import Text_Text from "Text/Text" /* 4886 */;
import spring from "spring" /* 5597 */;
import springPresets from "springPresets" /* 5598 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import _modDef6052 from "module_6052" /* 6052 */;
import useInputClearButton from "useInputClearButton" /* 6102 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire, StyleSheet: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let createStyles = fn(4890);
let closure_10 = createStyles.createStyles(() => {
  const obj = { placeholder: { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT }, iconContainer: null, iconLeft: null, scrollViewContent: null, horizontalScrollViewContent: null, inputInner: null, horizontalInputInner: null, searchInput: null, horizontalSearchInput: null };
  const obj2 = { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
  obj.iconContainer = { paddingHorizontal: nativeDefault.space.PX_12 };
  const obj3 = { paddingHorizontal: nativeDefault.space.PX_12 };
  obj.iconLeft = { marginLeft: nativeDefault.space.PX_12 };
  obj.scrollViewContent = { paddingVertical: 5 };
  obj.horizontalScrollViewContent = { flexGrow: 1 };
  const obj4 = { marginLeft: nativeDefault.space.PX_12 };
  obj.inputInner = { marginHorizontal: nativeDefault.space.PX_4, alignItems: "center", flexDirection: "row", flexWrap: "wrap", flex: 1 };
  obj.horizontalInputInner = { flexWrap: "nowrap" };
  const obj6 = { flex: 1, minHeight: nativeDefault.space.PX_24, minWidth: nativeDefault.space.PX_48, color: nativeDefault.colors.TEXT_DEFAULT };
  const merged = Object.assign(Text_Text.TextStyleSheet["text-sm/medium"]);
  obj6.paddingVertical = 0;
  obj6.marginVertical = 2;
  obj.searchInput = obj6;
  const obj5 = { marginHorizontal: nativeDefault.space.PX_4, alignItems: "center", flexDirection: "row", flexWrap: "wrap", flex: 1 };
  obj.horizontalSearchInput = { minWidth: nativeDefault.space.PX_64 };
  return obj;
});
const start = { x: 0, y: 0.5 };
const end = { x: 1, y: 0.5 };
const colors = ["transparent", "black"];
createStyles = fn(4890);
let closure_14 = createStyles.createStyles(() => {
  const obj = { fill: { flex: 1 }, mask: null, leadingFade: null, leadingCover: null, maskRemainder: null };
  const obj2 = {};
  const merged = Object.assign(React5.absoluteFillObject);
  obj2.flexDirection = "row";
  obj.mask = obj2;
  obj.leadingFade = { width: 32 };
  const obj3 = {};
  const merged1 = Object.assign(React5.absoluteFillObject);
  obj3.backgroundColor = "black";
  obj.leadingCover = obj3;
  obj.maskRemainder = { flex: 1, backgroundColor: "black" };
  return obj;
});
const __initData = { code: "function TagListInputNativeTsx1(){const{withSpring,scrolled,springStandard}=this.__closure;return{opacity:withSpring(scrolled.get()?0:1,springStandard,\"animate-always\")};}" };
const __initData2 = { code: "function TagListInputNativeTsx2(){const{withSpring,scrolled,springStandard}=this.__closure;return{opacity:withSpring(scrolled.get()?0:1,springStandard,'animate-always')};}" };
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((leadingFade) => {
  const cResult = onScroll(horizontal[8]).c(13);
  ({ horizontal, onScroll } = leadingFade);
  const tmp4 = closure_14();
  importDefault = tmp4;
  if (horizontal) {
    horizontal = leadingFade.leadingFade;
  }
  let obj = onScroll(horizontal[8]);
  const sharedValue = onScroll(horizontal[9]).useSharedValue(false);
  if (cResult[0] === horizontal) {
    if (cResult[1] === onScroll) {
      if (cResult[2] === sharedValue) {
        let tmp6 = cResult[3];
      }
      class I {
        constructor() {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[10]);
          num = 1;
          if (closure_3.get()) {
            num = 0;
          }
          obj1 = { opacity: obj.withSpring(num, tmp(tmp2[11]).springStandard, "animate-always") };
          return obj1;
        }
      }
      let obj2 = { withSpring: onScroll(tmp2[10]).withSpring, scrolled: sharedValue, springStandard: onScroll(tmp2[11]).springStandard };
      I.__closure = obj2;
      I.__workletHash = 4094668912184;
      I.__initData = __initData;
      const animatedStyle = onScroll(tmp2[9]).useAnimatedStyle(I);
      if (cResult[4] === animatedStyle) {
        if (cResult[5] === horizontal) {
          if (cResult[6] === tmp4) {
            let tmp9 = cResult[7];
          }
          class I {
            constructor() {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[10]);
              num = 1;
              if (closure_3.get()) {
                num = 0;
              }
              obj1 = { opacity: obj.withSpring(num, tmp(tmp2[11]).springStandard, "animate-always") };
              return obj1;
            }
          }
          let tmp11;
          if (horizontal) {
            tmp11 = tmp6;
          }
          let num6;
          if (horizontal) {
            num6 = 16;
          }
          let fill;
          if (horizontal) {
            fill = tmp4.fill;
          }
          if (cResult[8] === tmp11) {
            if (cResult[9] === num6) {
              if (cResult[10] === fill) {
                if (cResult[11] === tmp9) {
                  let tmp13 = cResult[12];
                }
                return tmp13;
              }
            }
          }
          let obj3 = { onScroll: tmp11, scrollEventThrottle: num6, scrollerStyle: fill, wrap: tmp9 };
          class F {
            constructor(arg0) {
              tmp = leadingFade;
              if (leadingFade) {
                tmp2 = jsx;
                tmp3 = closure_1;
                tmp4 = closure_2;
                obj = { style: null, androidRenderingMode: "software", maskElement: null, children: null };
                tmp6 = closure_1;
                obj.style = closure_1.fill;
                tmp7 = jsxs;
                tmp8 = View;
                obj1 = { style: null, children: null };
                obj1.style = closure_1.mask;
                obj7 = { style: null, children: null };
                obj7.style = closure_1.leadingFade;
                tmp5 = closure_1(closure_2[12]);
                obj8 = { start: null, end: null, colors: null, style: null };
                tmp9 = closure_11;
                obj8.start = closure_11;
                tmp10 = closure_12;
                obj8.end = closure_12;
                tmp11 = closure_13;
                obj8.colors = closure_13;
                tmp12 = StyleSheet;
                obj8.style = StyleSheet.absoluteFill;
                items = [, ];
                items[0] = jsx(closure_1(closure_2[13]), obj8);
                obj9 = { style: null };
                items1 = [, ];
                items1[0] = closure_1.leadingCover;
                tmp13 = closure_4;
                items1[1] = closure_4;
                obj9.style = items1;
                items[1] = jsx(closure_1(closure_2[9]).View, obj9);
                obj7.children = items;
                items2 = [, ];
                items2[0] = jsxs(View, obj7);
                obj10 = { style: null };
                obj10.style = closure_1.maskRemainder;
                items2[1] = jsx(View, obj10);
                obj1.children = items2;
                obj.maskElement = jsxs(View, obj1);
                obj.children = leadingFade;
                tmp = jsx(tmp5, obj);
              }
              return tmp;
            }
          }
          cResult[9] = num6;
          cResult[10] = fill;
          cResult[11] = tmp9;
          cResult[12] = obj3;
          tmp13 = obj3;
        }
      }
      class F {
        constructor(arg0) {
          tmp = leadingFade;
          if (leadingFade) {
            tmp2 = jsx;
            tmp3 = closure_1;
            tmp4 = closure_2;
            obj = { style: null, androidRenderingMode: "software", maskElement: null, children: null };
            tmp6 = closure_1;
            obj.style = closure_1.fill;
            tmp7 = jsxs;
            tmp8 = View;
            obj1 = { style: null, children: null };
            obj1.style = closure_1.mask;
            obj7 = { style: null, children: null };
            obj7.style = closure_1.leadingFade;
            tmp5 = closure_1(closure_2[12]);
            obj8 = { start: null, end: null, colors: null, style: null };
            tmp9 = closure_11;
            obj8.start = closure_11;
            tmp10 = closure_12;
            obj8.end = closure_12;
            tmp11 = closure_13;
            obj8.colors = closure_13;
            tmp12 = StyleSheet;
            obj8.style = StyleSheet.absoluteFill;
            items = [, ];
            items[0] = jsx(closure_1(closure_2[13]), obj8);
            obj9 = { style: null };
            items1 = [, ];
            items1[0] = closure_1.leadingCover;
            tmp13 = closure_4;
            items1[1] = closure_4;
            obj9.style = items1;
            items[1] = jsx(closure_1(closure_2[9]).View, obj9);
            obj7.children = items;
            items2 = [, ];
            items2[0] = jsxs(View, obj7);
            obj10 = { style: null };
            obj10.style = closure_1.maskRemainder;
            items2[1] = jsx(View, obj10);
            obj1.children = items2;
            obj.maskElement = jsxs(View, obj1);
            obj.children = leadingFade;
            tmp = jsx(tmp5, obj);
          }
          return tmp;
        }
      }
      cResult[4] = animatedStyle;
      cResult[5] = horizontal;
      cResult[6] = tmp4;
      cResult[7] = F;
      tmp9 = F;
      const tmpResult2 = onScroll(tmp2[9]);
    }
  }
  const fn = function t(nativeEvent) {
    if (horizontal) {
      const result = sharedValue.set(nativeEvent.nativeEvent.contentOffset.x > 1);
    }
    if (onScroll != null) {
      tmp3(nativeEvent);
    }
  };
  cResult[0] = horizontal;
  cResult[1] = onScroll;
  cResult[2] = sharedValue;
  cResult[3] = fn;
  tmp6 = fn;
  const tmpResult = onScroll(horizontal[9]);
}) : ((leadingFade) => {
  ({ horizontal, onScroll } = leadingFade);
  horizontal = undefined;
  let sharedValue;
  let animatedStyle;
  let tmp = closure_14();
  closure_1 = tmp;
  if (horizontal) {
    horizontal = leadingFade.leadingFade;
  }
  sharedValue = onScroll(horizontal[9]).useSharedValue(false);
  let items = [horizontal, onScroll, sharedValue];
  const callback = animatedStyle.useCallback((nativeEvent) => {
    if (horizontal) {
      const result = sharedValue.set(nativeEvent.nativeEvent.contentOffset.x > 1);
    }
    if (onScroll != null) {
      tmp3(nativeEvent);
    }
  }, items);
  let obj = onScroll(horizontal[9]);
  const fn = function u() {
    let num = 1;
    if (sharedValue.get()) {
      num = 0;
    }
    return { opacity: spring.withSpring(num, springPresets.springStandard, "animate-always") };
  };
  let obj2 = onScroll(horizontal[9]);
  fn.__closure = { withSpring: onScroll(horizontal[10]).withSpring, scrolled: sharedValue, springStandard: onScroll(horizontal[11]).springStandard };
  fn.__workletHash = 3038650900571;
  fn.__initData = __initData2;
  animatedStyle = obj2.useAnimatedStyle(fn);
  let items1 = [horizontal, tmp, animatedStyle];
  let tmp6 = horizontal;
  const callback1 = animatedStyle.useCallback((children) => {
    let tmp = children;
    if (horizontal) {
      const obj = { style: closure_1.fill, androidRenderingMode: "software", maskElement: null, children: null };
      const obj2 = { style: closure_1.mask, children: null };
      const obj3 = { style: closure_1.leadingFade, children: null };
      const obj4 = { start, end, colors, style: React5.absoluteFill };
      const items = [closure_2_8(LinearGradientDefault, obj4), ];
      const obj5 = { style: null };
      const items1 = [closure_1.leadingCover, animatedStyle];
      obj5.style = items1;
      items[1] = closure_2_8(ReanimatedRexportDefault.View, obj5);
      obj3.children = items;
      const items2 = [options(hasOwnProperty, obj3), ];
      const obj6 = { style: closure_1.maskRemainder };
      items2[1] = closure_2_8(hasOwnProperty, obj6);
      obj2.children = items2;
      obj.maskElement = options(hasOwnProperty, obj2);
      obj.children = children;
      tmp = closure_2_8(_modDef6052, obj);
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
  let obj4 = { onScroll: tmp8, scrollEventThrottle: null, scrollerStyle: null, wrap: null };
  let num;
  if (tmp6) {
    num = 16;
  }
  obj4.scrollEventThrottle = num;
  let fill;
  if (horizontal) {
    fill = tmp.fill;
  }
  obj4.scrollerStyle = fill;
  obj4.wrap = callback1;
  return obj4;
});
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  closure_0 = arg1;
  const cResult = c.c(15);
  const ref = noop.useRef(null);
  const ref1 = noop.useRef("");
  const ref2 = noop.useRef(false);
  [tmp8, noop] = noop.useState(false);
  if (cResult[0] !== arg1) {
    const fn = function o(current, arg1) {
      ref2.current = true;
      ref1.current = current;
      noop(current.length > 0);
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
      tmp = undefined !== arg1 && arg1;
    };
    cResult[0] = arg1;
    cResult[1] = fn;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[1];
  }
  closure_5 = tmp9;
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
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[3];
  }
  const imperativeHandle = noop.useImperativeHandle(arg0, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { clearable: true };
    cResult[4] = obj3;
    let tmp12 = obj3;
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
    let tmp14 = fn4;
    let tmp13 = fn3;
  } else {
    tmp13 = cResult[6];
    tmp14 = cResult[7];
  }
  if (cResult[8] === tmp8) {
    if (cResult[9] === tmp13) {
      if (cResult[10] === tmp14) {
        let tmp15 = cResult[11];
      }
      ({ clearProps, clearState } = tmp15);
      const inputClearButton = useInputClearButton.useInputClearButton(clearProps, clearState);
      if (cResult[12] === inputClearButton) {
        if (cResult[13] === tmp9) {
          let tmp17 = cResult[14];
        }
        return tmp17;
      }
      const obj4 = { clearButton: inputClearButton, inputRef: ref, inputValueRef: ref1, inputUpdate: tmp9, inputInitializedRef: ref2 };
      cResult[12] = inputClearButton;
      cResult[13] = tmp9;
      cResult[14] = obj4;
      tmp17 = obj4;
      const tmpResult = useInputClearButton;
    }
  }
  const obj5 = { clearProps: tmp12, clearState: { hasValue: tmp8, clear: tmp13, setTextValue: tmp14 } };
  cResult[8] = tmp8;
  cResult[9] = tmp13;
  cResult[10] = tmp14;
  cResult[11] = obj5;
  tmp15 = obj5;
  const tmp7 = _slicedToArray(noop.useState(false), 2);
}) : ((arg0, arg1) => {
  closure_0 = arg1;
  const ref = noop.useRef(null);
  const ref1 = noop.useRef("");
  const ref2 = noop.useRef(false);
  [hasValue, closure_5] = noop.useState(false);
  const items = [arg1];
  const inputUpdate = noop.useCallback((current) => {
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
  const imperativeHandle = noop.useImperativeHandle(arg0, () => ({
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
      return inputUpdate(arg0, true);
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
  const items1 = [hasValue, inputUpdate];
  const memo = noop.useMemo(() => {
    const obj = {
      clearProps: { clearable: true },
      clearState: {
        hasValue,
        clear() {
          return inputUpdate("", true);
        },
        setTextValue(text) {
          return inputUpdate(text, true);
        }
      }
    };
    return obj;
  }, items1);
  let obj = { clearButton: useInputClearButton.useInputClearButton(clearProps, clearState), inputRef: ref, inputValueRef: ref1, inputUpdate, inputInitializedRef: ref2 };
  ({ clearProps, clearState } = memo);
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("design/components/TagListInput/native/TagListInput.native.tsx");

export default noop.memo(function TagListInput(accessibilityHint) {
  ({ defaultValue, disabled } = accessibilityHint);
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
  const tmp = c10();
  const bound = Math.min(2, tags(5602).useFontScale());
  const result = tags(6106).InputHeights.MD * bound;
  let tmp6 = closure_18(accessibilityHint.ref, onChangeText);
  const inputRef = tmp6.inputRef;
  const inputValueRef = tmp6.inputValueRef;
  const inputUpdate = tmp6.inputUpdate;
  const clearButton = tmp6.clearButton;
  inputRef.useRef({ start: 0, end: 0 });
  let obj = tags(5602);
  const keyboardBlurring = tags(6109).useKeyboardBlurring(inputRef);
  const obj3 = tags(6109);
  const focus = tags(4586).useFocus();
  ({ focusProps: c8, isFocused } = focus);
  const obj4 = tags(4586);
  const tmp9 = focusOnAdd;
  ({ onFocus: c9, onBlur: c10 } = focusOnAdd(6111)({ onFocus, onBlur }));
  const ref = inputRef.useRef(null);
  const tmp10 = focusOnAdd(6111)({ onFocus, onBlur });
  let tmp12 = autoClearInputOnTagAdd;
  [c12, c13] = autoClearInputOnTagAdd(inputRef.useState(null), 2);
  const tmp13 = autoClearInputOnTagAdd(inputRef.useState(null), 2);
  [tmp15, c14] = autoClearInputOnTagAdd(inputRef.useState(false), 2);
  const tmp16 = focusOnAdd(5984)(tags);
  const ref1 = inputRef.useRef(tags);
  const items = [focusOnAdd, inputUpdate, ref1, tags, inputRef, inputValueRef, autoClearInputOnTagAdd];
  const layoutEffect = inputRef.useLayoutEffect(() => {
    if (ref1.current.length < tags.length) {
      let tmp6 = focusOnAdd;
      if (focusOnAdd) {
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
      let tmp12 = autoClearInputOnTagAdd;
      if (autoClearInputOnTagAdd) {
        tmp12 = inputValueRef.current.length > 0;
      }
      if (tmp12) {
        inputUpdate("", true);
      }
      if (0 === inputValueRef.current.length) {
        const current3 = inputRef.current;
        if (current3 != null) {
          current3.setSelection(0, 0);
        }
        closure_7.current = { start: 0, end: 0 };
      }
    }
    ref1.current = tags;
  }, items);
  const items1 = [tmp16];
  const layoutEffect1 = inputRef.useLayoutEffect(() => {
    if (0 !== length.length) {
      const current = ref.current;
      if (current != null) {
        current.scrollToEnd({ animated: false });
      }
    }
  }, items1);
  if (inActionSheet) {
    let BottomSheetScrollView = tmp2(6112).BottomSheetScrollView;
  } else {
    BottomSheetScrollView = inputUpdate;
  }
  if (inActionSheet) {
    let BottomSheetTextInput = tmp2(9236).BottomSheetTextInput;
  } else {
    BottomSheetTextInput = tmp9(9237);
  }
  const result1 = 33 * bound;
  const tmp14 = autoClearInputOnTagAdd(inputRef.useState(false), 2);
  [tmp22, c17] = tmp12(inputRef.useState(0), 2);
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
  const obj6 = { style: null, contentContainerStyle: null, ref: null, bounces: false, onScroll: null, onLayout: null, scrollEventThrottle: null, horizontal: null, snapToInterval: null, overScrollMode: "never", keyboardShouldPersistTaps: "handled", children: null };
  const items2 = [{ maxHeight: 3 * result1 }, obj5.scrollerStyle];
  obj6.style = items2;
  const items3 = [tmp.scrollViewContent, ];
  let prop;
  if (flag) {
    prop = tmp.horizontalScrollViewContent;
  }
  items3[1] = prop;
  obj6.contentContainerStyle = items3;
  obj6.ref = ref;
  obj6.onScroll = obj5.onScroll;
  let tmp27;
  if (flag) {
    tmp27 = callback;
  }
  obj6.onLayout = tmp27;
  obj6.scrollEventThrottle = obj5.scrollEventThrottle;
  obj6.horizontal = flag;
  obj6.snapToInterval = result1;
  const items4 = [tmp.inputInner, ];
  let horizontalInputInner = flag;
  if (flag) {
    horizontalInputInner = tmp.horizontalInputInner;
  }
  const obj8 = { style: items4, children: null };
  items4[1] = horizontalInputInner;
  const items5 = [
    tags.map((tag, index) => {
      tags = tag;
      closure_1 = index;
      return _undefined(tags(9238).TagListInputTagComponent, {
        tag,
        selected: tag.id === c12,
        onPress(arg0) {
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
            closure_7.current = { start: 0, end: 0 };
          } else if (dependencyMap != null) {
            const tmpResult = tmp(closure_1);
          }
          return tmpResult;
        },
        start: 0 === index,
        end: index === tags.length - 1
      }, index);
    }),

  ];
  const obj9 = { ref: inputRef, accessibilityHint: accessibilityHint.accessibilityHint, accessibilityRole: "search", defaultValue: null, style: null, onChangeText: null, onKeyPress: null, onFocus: null, onBlur: null, onPressIn: null, autoCapitalize: "none", autoCorrect: false, "aria-label": null, placeholder: null, placeholderTextColor: null, autoFocus: null, returnKeyType: null, accessibilityLabel: null, caretHidden: null, onSubmitEditing: null, maxFontSizeMultiplier: 2, onSelectionChange: null };
  if (tmp6.inputInitializedRef.current) {
    defaultValue = inputValueRef.current;
  }
  obj9.defaultValue = defaultValue;
  const items6 = [tmp.searchInput, , ];
  let horizontalSearchInput = flag;
  if (flag) {
    horizontalSearchInput = tmp.horizontalSearchInput;
  }
  items6[1] = horizontalSearchInput;
  let tmp30;
  if (flag) {
    if (tmp24) {
      const obj10 = { maxWidth: tmp22 - 16 };
      tmp30 = obj10;
    }
  }
  items6[2] = tmp30;
  obj9.style = items6;
  obj9.onChangeText = inputUpdate;
  obj9.onKeyPress = function onKeyPress(nativeEvent) {
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
          const intl = util.intl;
          const obj = { text: tags[tags.length - 1].text };
          AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.QymItZ, obj));
        }
      }
    }
    if (null != c12) {
      _undefined2(null);
    } else {
      let tmp8 = null != ref.current && ref.current.start === ref.current.end;
      if (tmp8) {
        tmp8 = ref.current.start === inputValueRef.current.length;
      }
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
  };
  obj9.onFocus = function onFocus(arg0) {
    _undefined.onFocus();
    if (c9 != null) {
      tmp2(arg0);
    }
  };
  obj9.onBlur = function onBlur(arg0) {
    _undefined.onBlur();
    if (c10 != null) {
      tmp2(arg0);
    }
  };
  obj9.onPressIn = function onPressIn() {
    _undefined3(false);
    _undefined2(null);
  };
  obj9["aria-label"] = accessibilityLabel;
  let tmp31;
  if (0 === tags.length) {
    if (tmp24) {
      tmp31 = placeholder;
    }
  }
  obj9.placeholder = tmp31;
  obj9.placeholderTextColor = tmp.placeholder.color;
  obj9.autoFocus = autoFocus;
  obj9.returnKeyType = returnKeyType;
  obj9.accessibilityLabel = accessibilityLabel;
  obj9.caretHidden = tmp15;
  obj9.onSubmitEditing = onSubmitEditing;
  obj9.onSelectionChange = function onSelectionChange(nativeEvent) {
    const selection = nativeEvent.nativeEvent.selection;
    closure_7.current = selection;
    return selection;
  };
  items5[1] = c8(BottomSheetTextInput, obj9);
  obj8.children = items5;
  obj6.children = c9(inputValueRef, obj8);
  const obj11 = { style: null, children: null };
  const items7 = [{ minHeight: result, overflow: "hidden" }, style];
  obj11.style = items7;
  const obj7 = { maxHeight: 3 * result1 };
  const tmp12Result = tmp12(inputRef.useState(0), 2);
  const obj12 = { size: "sm", disabled, isFocused, children: null };
  if (null == icon) {
    const obj13 = { style: tmp.iconLeft, size: "xs", color: "interactive-text-default" };
    icon = tmp25(tmp2(6548).MagnifyingGlassIcon, obj13);
  }
  const items8 = [icon, obj5.wrap(c8(BottomSheetScrollView, obj6)), ];
  if (null == footer) {
    let tmp25Result2 = null;
    if (null != clearButton) {
      const obj14 = { style: tmp.iconContainer, children: clearButton };
      tmp25Result2 = tmp25(tmp29, obj14);
    }
    footer = tmp25Result2;
  }
  items8[2] = footer;
  obj12.children = items8;
  obj11.children = c9(tags(6105).InputFieldContainer, obj12);
  return c8(inputValueRef, obj11);
});