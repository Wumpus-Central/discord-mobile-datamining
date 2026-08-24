// === Module 8899: ? ===

// Module 8899
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4739 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

require = arg1;
let c4 = importAllResult;
({ View: c5, ScrollView: closure_6, StyleSheet: error } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles(() => {
  let obj = { placeholder: null, iconContainer: null, iconLeft: null, scrollViewContent: null, horizontalScrollViewContent: null, inputInner: null, horizontalInputInner: null, searchInput: null, horizontalSearchInput: null };
  obj = { color: ThemesDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
  obj[0] = obj;
  obj = { paddingHorizontal: ThemesDefault.space.PX_12 };
  obj[1] = obj;
  obj[2] = { marginLeft: ThemesDefault.space.PX_12 };
  obj[3] = { paddingVertical: 5 };
  obj[4] = { flexGrow: 1 };
  obj1 = { marginLeft: ThemesDefault.space.PX_12 };
  obj[5] = { marginHorizontal: ThemesDefault.space.PX_4, alignItems: "center", flexDirection: "row", flexWrap: "wrap", flex: 1 };
  obj[6] = { flexWrap: "nowrap" };
  const obj3 = { flex: 1, minHeight: ThemesDefault.space.PX_24, minWidth: ThemesDefault.space.PX_48, color: ThemesDefault.colors.TEXT_DEFAULT };
  const merged = Object.assign(Text.TextStyleSheet["text-sm/medium"]);
  obj3.paddingVertical = 0;
  obj3.marginVertical = 2;
  obj[7] = obj3;
  const obj2 = { marginHorizontal: ThemesDefault.space.PX_4, alignItems: "center", flexDirection: "row", flexWrap: "wrap", flex: 1 };
  obj[8] = { minWidth: ThemesDefault.space.PX_64 };
  return obj;
});
let closure_11 = { x: 0, y: 0.5 };
let closure_12 = { x: 1, y: 0.5 };
let closure_13 = ["transparent", "black"];
let closure_14 = createCacheKey.createStyles(() => {
  let obj = { fill: { flex: 1 }, mask: null, leadingFade: null, leadingCover: null, maskRemainder: null };
  obj = {};
  const merged = Object.assign(closure_7.absoluteFillObject);
  obj.flexDirection = "row";
  obj[1] = obj;
  obj[2] = { width: 32 };
  obj = {};
  const merged1 = Object.assign(closure_7.absoluteFillObject);
  obj.backgroundColor = "black";
  obj[3] = obj;
  obj[4] = { flex: 1, backgroundColor: "black" };
  return obj;
});
let closure_15 = { code: "function TagListInputNativeTsx1(){const{withSpring,scrolled,springStandard}=this.__closure;return{opacity:withSpring(scrolled.get()?0:1,springStandard,'animate-always')};}" };
const memoResult = importAllResult.memo(function TagListInput(accessibilityHint) {
  ({ defaultValue, disabled } = accessibilityHint);
  if (disabled === undefined) {
    disabled = false;
  }
  ({ placeholder, accessibilityLabel, icon, onChangeText, onScroll, returnKeyType, onBlur, onFocus, style } = accessibilityHint);
  if (returnKeyType === undefined) {
    returnKeyType = "search";
  }
  const tags = accessibilityHint.tags;
  onScroll = tags;
  let flag = accessibilityHint.horizontal;
  if (flag === undefined) {
    flag = false;
  }
  ({ footer, focusOnAdd } = accessibilityHint);
  if (focusOnAdd === undefined) {
    focusOnAdd = true;
  }
  importDefault = focusOnAdd;
  ({ inActionSheet, onRemove: flag2, autoClearInputOnTagAdd, onSubmitEditing, autoFocus } = accessibilityHint);
  if (autoClearInputOnTagAdd === undefined) {
    autoClearInputOnTagAdd = true;
  }
  let sharedValue = autoClearInputOnTagAdd;
  flag2 = accessibilityHint.leadingFade;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let animatedStyle;
  let ref1;
  let callback;
  closure_7 = undefined;
  c8 = undefined;
  c9 = undefined;
  callback = undefined;
  let ref3;
  c12 = undefined;
  c13 = undefined;
  let callback2;
  closure_15 = undefined;
  let ref4;
  c17 = undefined;
  let tmp = callback();
  let obj = onScroll(flag2[13]);
  const bound = Math.min(2, obj.useFontScale());
  onScroll = onChangeText;
  importDefault = undefined;
  flag2 = undefined;
  sharedValue = undefined;
  animatedStyle = undefined;
  ref1 = undefined;
  callback = undefined;
  obj1 = animatedStyle;
  let result = onScroll(flag2[14]).InputHeights.MD * bound;
  const ref = animatedStyle.useRef(null);
  importDefault = ref;
  ref1 = animatedStyle.useRef("");
  flag2 = ref1;
  const ref2 = animatedStyle.useRef(false);
  sharedValue = ref2;
  const tmp10 = sharedValue(animatedStyle.useState(false), 2);
  const first = tmp10[0];
  animatedStyle = first;
  ref1 = tmp10[1];
  let items = [onChangeText];
  callback = animatedStyle.useCallback((current) => {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    sharedValue.current = true;
    flag2.current = current;
    ref1(current.length > 0);
    if (onScroll != null) {
      onScroll(current);
    }
    if (flag) {
      current = lib.current;
      if (current != null) {
        const obj = { text: null };
        obj[0] = current;
        current.setNativeProps(obj);
      }
    }
  }, items);
  const imperativeHandle = animatedStyle.useImperativeHandle(accessibilityHint.ref, () => ({
    blur() {
      const current = closure_1.current;
      let blurResult;
      if (current != null) {
        blurResult = current.blur();
      }
      return blurResult;
    },
    focus() {
      const current = closure_1.current;
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
      const current = closure_1.current;
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
      const current = closure_1.current;
      let measureResult;
      if (current != null) {
        measureResult = current.measure(arg0);
      }
      return measureResult;
    },
    measureInWindow(arg0) {
      const current = closure_1.current;
      let measureInWindowResult;
      if (current != null) {
        measureInWindowResult = current.measureInWindow(arg0);
      }
      return measureInWindowResult;
    },
    measureLayout(arg0, arg1, arg2) {
      const current = closure_1.current;
      let measureLayoutResult;
      if (current != null) {
        measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
      }
      return measureLayoutResult;
    }
  }));
  let items1 = [first, callback];
  const memo = animatedStyle.useMemo(() => {
    const clearState = {
      hasValue: animatedStyle,
      clear() {
        return callback("", true);
      },
      setTextValue(arg0) {
        return callback(arg0, true);
      }
    };
    return { clearProps: { isClearable: true }, clearState };
  }, items1);
  ({ clearProps, clearState } = memo);
  let obj2 = onScroll(flag2[12]);
  const inputClearButton = obj2.useInputClearButton(clearProps, clearState);
  animatedStyle = ref;
  closure_7 = animatedStyle.useRef({ start: 0, end: 0 });
  let obj3 = onScroll(flag2[15]);
  const keyboardBlurring = obj3.useKeyboardBlurring(ref);
  let obj4 = onScroll(flag2[16]);
  const focus = obj4.useFocus();
  ({ focusProps: c8, isFocused } = focus);
  ({ onFocus: c9, onBlur: c10 } = importDefault(flag2[17])({ onFocus, onBlur }));
  ref3 = animatedStyle.useRef(null);
  const tmp18 = importDefault;
  const tmp19 = importDefault(flag2[17])({ onFocus, onBlur });
  let tmp9 = sharedValue;
  [c12, c13] = sharedValue(animatedStyle.useState(null), 2);
  const tmp21 = sharedValue(animatedStyle.useState(null), 2);
  [tmp23, c14] = sharedValue(animatedStyle.useState(false), 2);
  const tmp24 = importDefault(flag2[18])(tags);
  closure_15 = tmp24;
  ref4 = animatedStyle.useRef(tags);
  let items2 = [focusOnAdd, callback, ref4, tags, ref, ref1, autoClearInputOnTagAdd];
  const layoutEffect = animatedStyle.useLayoutEffect(() => {
    if (ref4.current.length < onScroll.length) {
      let tmp6 = closure_1;
      if (closure_1) {
        let current = animatedStyle.current;
        let isFocusedResult;
        if (current != null) {
          isFocusedResult = current.isFocused();
        }
        tmp6 = false === isFocusedResult;
      }
      if (tmp6) {
        const current2 = animatedStyle.current;
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
      let tmp12 = sharedValue;
      if (sharedValue) {
        tmp12 = ref1.current.length > 0;
      }
      if (tmp12) {
        callback("", true);
      }
    }
    ref4.current = onScroll;
  }, items2);
  const items3 = [tmp24];
  const layoutEffect1 = animatedStyle.useLayoutEffect(() => {
    if (0 !== length.length) {
      const current = ref3.current;
      if (current != null) {
        current.scrollToEnd({ animated: false });
      }
    }
  }, items3);
  if (inActionSheet) {
    let BottomSheetScrollView = tmp2(tmp3[19]).BottomSheetScrollView;
  } else {
    BottomSheetScrollView = callback;
  }
  if (inActionSheet) {
    let BottomSheetTextInput = tmp2(tmp3[20]).BottomSheetTextInput;
  } else {
    BottomSheetTextInput = tmp18(tmp3[21]);
  }
  const result1 = 33 * bound;
  const tmp22 = sharedValue(animatedStyle.useState(false), 2);
  [tmp30, c17] = tmp9(obj1.useState(0), 2);
  const callback1 = obj1.useCallback((nativeEvent) => {
    _undefined5(nativeEvent.nativeEvent.layout.width);
  }, []);
  if (placeholder == null) {
    let intl = tmp2(tmp3[22]).intl;
    placeholder = intl.string(tmp2(tmp3[22]).t["5h0QOP"]);
  }
  if (accessibilityLabel == null) {
    const intl2 = tmp2(tmp3[22]).intl;
    accessibilityLabel = intl2.string(tmp2(tmp3[22]).t["5h0QOP"]);
  }
  const tmp33 = callback2();
  importDefault = tmp33;
  let tmp34 = flag;
  if (flag) {
    tmp34 = flag2;
  }
  flag2 = tmp34;
  let tmp2Result = tmp2(tmp3[7]);
  sharedValue = tmp2Result.useSharedValue(false);
  const items4 = [tmp34, onScroll, sharedValue];
  callback2 = obj1.useCallback((nativeEvent) => {
    if (flag2) {
      const result = sharedValue.set(nativeEvent.nativeEvent.contentOffset.x > 1);
    }
    if (onScroll != null) {
      tmp3(nativeEvent);
    }
  }, items4);
  tmp2Result = tmp2(tmp3[7]);
  const fn = function u() {
    let obj = onScroll(flag2[8]);
    let num = 1;
    if (sharedValue.get()) {
      num = 0;
    }
    obj = { opacity: obj.withSpring(num, onScroll(flag2[9]).springStandard, "animate-always") };
    return obj;
  };
  obj = { withSpring: tmp2(tmp3[8]).withSpring, scrolled: sharedValue, springStandard: tmp2(tmp3[9]).springStandard };
  fn.__closure = obj;
  fn.__workletHash = 11561232362008;
  fn.__initData = closure_15;
  animatedStyle = tmp2Result.useAnimatedStyle(fn);
  const items5 = [tmp34, tmp33, animatedStyle];
  let tmp39 = tmp34;
  const callback3 = obj1.useCallback((arg0) => {
    let tmp = arg0;
    if (flag2) {
      let obj = { style: null, androidRenderingMode: "software", maskElement: null, children: null };
      obj[0] = lib.fill;
      obj = { style: null, children: null };
      obj[0] = lib.mask;
      obj = { style: null, children: null };
      obj[0] = lib.leadingFade;
      obj1 = { start: null, end: null, colors: null, style: null };
      obj1[0] = ref3;
      obj1[1] = c12;
      obj1[2] = c13;
      obj1[3] = ref.absoluteFill;
      const items = [_undefined(lib(flag2[11]), obj1), ];
      const obj2 = { style: null };
      const items1 = [lib.leadingCover, animatedStyle];
      obj2[0] = items1;
      items[1] = _undefined(lib(flag2[7]).View, obj2);
      obj[1] = items;
      const items2 = [_undefined2(ref1, obj), ];
      const obj3 = { style: null };
      obj3[0] = lib.maskRemainder;
      items2[1] = _undefined(ref1, obj3);
      obj[1] = items2;
      obj[2] = _undefined2(ref1, obj);
      obj[3] = arg0;
      tmp = _undefined(lib(flag2[10]), obj);
      const tmp5 = lib(flag2[10]);
    }
    return tmp;
  }, items5);
  if (!tmp34) {
    tmp39 = null != onScroll;
  }
  let tmp40;
  if (tmp39) {
    tmp40 = callback2;
  }
  obj = { onScroll: tmp40, scrollEventThrottle: null, scrollerStyle: null, wrap: null };
  let num;
  if (tmp39) {
    num = 16;
  }
  obj[1] = num;
  let fill;
  if (tmp34) {
    fill = tmp33.fill;
  }
  obj[2] = fill;
  obj[3] = callback3;
  obj1 = { style: items6, contentContainerStyle: null, ref: null, bounces: false, onScroll: null, onLayout: null, scrollEventThrottle: null, horizontal: null, snapToInterval: null, overScrollMode: "never", keyboardShouldPersistTaps: "handled", children: null };
  obj2 = { maxHeight: 3 * result1 };
  items6 = [obj2, obj.scrollerStyle];
  const items7 = [tmp.scrollViewContent, ];
  let prop;
  if (flag) {
    prop = tmp.horizontalScrollViewContent;
  }
  items7[1] = prop;
  obj1[1] = items7;
  obj1[2] = ref3;
  obj1[4] = obj.onScroll;
  let tmp44;
  if (flag) {
    tmp44 = callback1;
  }
  obj1[5] = tmp44;
  obj1[6] = obj.scrollEventThrottle;
  obj1[7] = flag;
  obj1[8] = result1;
  const items8 = [tmp.inputInner, ];
  let horizontalInputInner = flag;
  if (flag) {
    horizontalInputInner = tmp.horizontalInputInner;
  }
  obj3 = { style: items8, children: null };
  items8[1] = horizontalInputInner;
  const items9 = [
    tags.map((id) => {
      onScroll = id;
      closure_1 = arg1;
      return _undefined(onScroll(flag2[23]).TagListInputTagComponent, {
        tag: id,
        selected: id.id === c12,
        onPress(arg0) {
          if ("select" === arg0) {
            if (closure_1_12 !== id.id) {
              closure_1_13(tmp5.id);
            }
            const current = closure_1_4.current;
            if (current != null) {
              current.focus();
            }
            closure_1_14(true);
            const current2 = closure_1_4.current;
            if (current2 != null) {
              current2.setSelection(0, 0);
            }
            closure_1_7.current = { start: 0, end: 0 };
            const tmp9 = closure_1_4;
          } else if (closure_1_2 != null) {
            const tmpResult = tmp(closure_1);
          }
          return tmpResult;
        },
        start: 0 === arg1,
        end: arg1 === onScroll.length - 1
      }, arg1);
    }),

  ];
  obj4 = { ref, accessibilityHint: accessibilityHint.accessibilityHint, accessibilityRole: "search", defaultValue: null, style: null, onChangeText: null, onKeyPress: null, onFocus: null, onBlur: null, onPressIn: null, autoCapitalize: "none", autoCorrect: false, "aria-label": null, placeholder: null, placeholderTextColor: null, autoFocus: null, returnKeyType: null, accessibilityLabel: null, caretHidden: null, onSubmitEditing: null, maxFontSizeMultiplier: 2, onSelectionChange: null };
  if (ref2.current) {
    defaultValue = ref1.current;
  }
  obj4[3] = defaultValue;
  const items10 = [tmp.searchInput, , ];
  let horizontalSearchInput = flag;
  if (flag) {
    horizontalSearchInput = tmp.horizontalSearchInput;
  }
  items10[1] = horizontalSearchInput;
  let tmp47;
  if (flag) {
    if (tmp32) {
      const obj5 = { maxWidth: null };
      obj5[0] = tmp30 - 16;
      tmp47 = obj5;
    }
  }
  items10[2] = tmp47;
  obj4[4] = items10;
  obj4[5] = callback;
  obj4[6] = function onKeyPress(nativeEvent) {
    _undefined4(false);
    let tmp4 = 0 === ref.current.start;
    if (tmp4) {
      tmp4 = 0 === tmp3.current.end;
    }
    if ("Backspace" === nativeEvent.nativeEvent.key) {
      if (null != c12) {
        const findIndexResult = onScroll.findIndex((id) => id.id === closure_12);
        if (findIndexResult > -1) {
          if (flag2 != null) {
            flag2(findIndexResult);
          }
        }
        _undefined3(null);
      }
    }
    if ("Backspace" === nativeEvent.nativeEvent.key) {
      if (tmp4) {
        if (0 !== onScroll.length) {
          _undefined3(arr[arr.length - 1].id);
          _undefined4(true);
          const AccessibilityAnnouncer = onScroll(flag2[24]).AccessibilityAnnouncer;
          const intl = onScroll(flag2[22]).intl;
          const obj = { text: null };
          obj[0] = arr[arr.length - 1].text;
          AccessibilityAnnouncer.announce(intl.formatToPlainString(onScroll(flag2[22]).t.QymItZ, obj));
        }
      }
    }
    if (null != c12) {
      _undefined3(null);
    } else {
      let tmp8 = null != tmp3.current && tmp3.current.start === tmp3.current.end;
      if (tmp8) {
        tmp8 = tmp3.current.start === ref1.current.length;
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
  obj4[7] = function onFocus(arg0) {
    _undefined.onFocus();
    if (c9 != null) {
      tmp2(arg0);
    }
  };
  obj4[8] = function onBlur(arg0) {
    _undefined.onBlur();
    if (c10 != null) {
      tmp2(arg0);
    }
  };
  obj4[9] = function onPressIn() {
    _undefined4(false);
    _undefined3(null);
  };
  obj4[12] = accessibilityLabel;
  let tmp48;
  if (0 === tags.length) {
    if (tmp32) {
      tmp48 = placeholder;
    }
  }
  obj4[13] = tmp48;
  obj4[14] = tmp.placeholder.color;
  obj4[15] = autoFocus;
  obj4[16] = returnKeyType;
  obj4[17] = accessibilityLabel;
  obj4[18] = tmp23;
  obj4[19] = onSubmitEditing;
  obj4[21] = function onSelectionChange(nativeEvent) {
    const selection = nativeEvent.nativeEvent.selection;
    closure_7.current = selection;
    return selection;
  };
  items9[1] = c8(BottomSheetTextInput, obj4);
  obj3[1] = items9;
  obj1[11] = c9(ref1, obj3);
  const obj6 = { style: items11, children: null };
  items11 = [{ minHeight: result, overflow: "hidden" }, style];
  let tmp42Result = tmp42(BottomSheetScrollView, obj1);
  const obj7 = { size: "sm", isDisabled: disabled, isFocused, children: null };
  if (null == icon) {
    const obj8 = { style: null, size: "xs", color: "interactive-text-default" };
    obj8[0] = tmp.iconLeft;
    icon = tmp42(tmp2(tmp3[26]).MagnifyingGlassIcon, obj8);
  }
  const items12 = [icon, obj.wrap(tmp42Result), ];
  if (null == footer) {
    tmp42Result = null;
    if (null != inputClearButton) {
      const obj9 = { style: null, children: null };
      obj9[0] = tmp.iconContainer;
      obj9[1] = inputClearButton;
      tmp42Result = tmp42(tmp46, obj9);
    }
    footer = tmp42Result;
  }
  items12[2] = footer;
  obj7[3] = items12;
  obj6[1] = c9(onScroll(flag2[25]).InputFieldContainer, obj7);
  return c8(ref1, obj6);
});
let result = require("set").fileFinishedImporting("design/components/TagListInput/native/TagListInput.native.tsx");

export default memoResult;