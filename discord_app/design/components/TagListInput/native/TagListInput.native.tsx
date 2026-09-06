// discord_app/design/components/TagListInput/native/TagListInput.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import AccessibilityAnnouncer2 from "../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import ReanimatedRexportDefault from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import Text_Text from "../../Text/native/Text.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import springPresets from "../../../animation/reanimated/spring/springPresets.tsx";
import LinearGradientDefault from "../../../../../_runtime/04987_LinearGradient.js";
import _modDef5664 from "../../../../../_runtime/metro/05664__.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire, StyleSheet: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let createStyles = fn(4560);
let closure_10 = createStyles.createStyles(() => {
  let obj = {
    placeholder: null,
    iconContainer: null,
    iconLeft: null,
    scrollViewContent: null,
    horizontalScrollViewContent: null,
    inputInner: null,
    horizontalInputInner: null,
    searchInput: null,
    horizontalSearchInput: null,
  };
  obj = { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
  obj.placeholder = obj;
  obj = { paddingHorizontal: nativeDefault.space.PX_12 };
  obj.iconContainer = obj;
  obj.iconLeft = { marginLeft: nativeDefault.space.PX_12 };
  obj.scrollViewContent = { paddingVertical: 5 };
  obj.horizontalScrollViewContent = { flexGrow: 1 };
  const obj1 = { marginLeft: nativeDefault.space.PX_12 };
  obj.inputInner = {
    marginHorizontal: nativeDefault.space.PX_4,
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
  };
  obj.horizontalInputInner = { flexWrap: "nowrap" };
  const obj3 = {
    flex: 1,
    minHeight: nativeDefault.space.PX_24,
    minWidth: nativeDefault.space.PX_48,
    color: nativeDefault.colors.TEXT_DEFAULT,
  };
  const merged = Object.assign(Text_Text.TextStyleSheet["text-sm/medium"]);
  obj3.paddingVertical = 0;
  obj3.marginVertical = 2;
  obj.searchInput = obj3;
  const obj2 = {
    marginHorizontal: nativeDefault.space.PX_4,
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
  };
  obj.horizontalSearchInput = { minWidth: nativeDefault.space.PX_64 };
  return obj;
});
let closure_11 = { x: 0, y: 0.5 };
let closure_12 = { x: 1, y: 0.5 };
let closure_13 = ["transparent", "black"];
createStyles = fn(4560);
let closure_14 = createStyles.createStyles(() => {
  let obj = { fill: { flex: 1 }, mask: null, leadingFade: null, leadingCover: null, maskRemainder: null };
  obj = {};
  const merged = Object.assign(React5.absoluteFillObject);
  obj.flexDirection = "row";
  obj.mask = obj;
  obj.leadingFade = { width: 32 };
  obj = {};
  const merged1 = Object.assign(React5.absoluteFillObject);
  obj.backgroundColor = "black";
  obj.leadingCover = obj;
  obj.maskRemainder = { flex: 1, backgroundColor: "black" };
  return obj;
});
let __initData = {
  code: "function TagListInputNativeTsx1(){const{withSpring,scrolled,springStandard}=this.__closure;return{opacity:withSpring(scrolled.get()?0:1,springStandard,'animate-always')};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("design/components/TagListInput/native/TagListInput.native.tsx");

export default noop.memo(function TagListInput(accessibilityHint) {
  ({ defaultValue, disabled } = accessibilityHint);
  if (disabled === undefined) {
    disabled = false;
  }
  ({ placeholder, accessibilityLabel, icon, onChangeText, onScroll, returnKeyType, onBlur, onFocus, style } =
    accessibilityHint);
  if (returnKeyType === undefined) {
    returnKeyType = "search";
  }
  const tags = accessibilityHint.tags;
  onChangeText = tags;
  let flag = accessibilityHint.horizontal;
  if (flag === undefined) {
    flag = false;
  }
  ({ footer, focusOnAdd } = accessibilityHint);
  if (focusOnAdd === undefined) {
    focusOnAdd = true;
  }
  let ref = focusOnAdd;
  ({ inActionSheet, onRemove: ref1, autoClearInputOnTagAdd, onSubmitEditing, autoFocus } = accessibilityHint);
  if (autoClearInputOnTagAdd === undefined) {
    autoClearInputOnTagAdd = true;
  }
  let ref2 = autoClearInputOnTagAdd;
  let flag2 = accessibilityHint.leadingFade;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ref1 = undefined;
  onChangeText = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  c12 = undefined;
  c13 = undefined;
  c14 = undefined;
  c17 = undefined;
  let tmp = c10();
  let obj = onChangeText(ref1[13]);
  const bound = Math.min(2, obj.useFontScale());
  ref = undefined;
  ref1 = undefined;
  onChangeText = undefined;
  let obj1 = ref;
  let result = onChangeText(ref1[14]).InputHeights.MD * bound;
  ref = ref.useRef(null);
  ref.useRef("");
  ref2 = ref.useRef(false);
  const tmp10 = ref2(ref.useState(false), 2);
  const first = tmp10[0];
  ref = first;
  ref1 = tmp10[1];
  let items = [onChangeText];
  onChangeText = ref.useCallback((current) => {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    ref2.current = true;
    ref1.current = current;
    ref1(current.length > 0);
    if (onChangeText != null) {
      onChangeText(current);
    }
    if (flag) {
      current = ref.current;
      if (current != null) {
        const obj = { text: current };
        current.setNativeProps(obj);
      }
    }
  }, items);
  const imperativeHandle = ref.useImperativeHandle(accessibilityHint.ref, () => ({
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
      return onChangeText(arg0, true);
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
    },
  }));
  let items1 = [first, onChangeText];
  const memo = ref.useMemo(() => {
    let obj = { clearProps: { isClearable: true }, clearState: null };
    obj = {
      hasValue: ref,
      clear() {
        return onChangeText("", true);
      },
      setTextValue(text) {
        return onChangeText(text, true);
      },
    };
    obj.clearState = obj;
    return obj;
  }, items1);
  ({ clearProps, clearState } = memo);
  let obj2 = onChangeText(ref1[12]);
  const inputClearButton = obj2.useInputClearButton(clearProps, clearState);
  ref = ref.useRef({ start: 0, end: 0 });
  let obj3 = onChangeText(ref1[15]);
  const keyboardBlurring = obj3.useKeyboardBlurring(ref);
  let obj4 = onChangeText(ref1[16]);
  const focus = obj4.useFocus();
  ({ focusProps: c8, isFocused } = focus);
  ({ onFocus: c9, onBlur: c10 } = ref(ref1[17])({ onFocus, onBlur }));
  const ref3 = ref.useRef(null);
  const tmp18 = ref;
  const tmp19 = ref(ref1[17])({ onFocus, onBlur });
  let tmp9 = ref2;
  [c12, c13] = ref2(ref.useState(null), 2);
  const tmp21 = ref2(ref.useState(null), 2);
  [tmp23, c14] = ref2(ref.useState(false), 2);
  const tmp24 = ref(ref1[18])(tags);
  __initData = tmp24;
  const ref4 = ref.useRef(tags);
  let items2 = [focusOnAdd, onChangeText, ref4, tags, ref, ref1, autoClearInputOnTagAdd];
  const layoutEffect = ref.useLayoutEffect(() => {
    if (ref4.current.length < onChangeText.length) {
      let tmp6 = ref;
      if (ref) {
        let current = ref.current;
        let isFocusedResult;
        if (current != null) {
          isFocusedResult = current.isFocused();
        }
        tmp6 = false === isFocusedResult;
      }
      if (tmp6) {
        const current2 = ref.current;
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
      let tmp12 = ref2;
      if (ref2) {
        tmp12 = ref1.current.length > 0;
      }
      if (tmp12) {
        callback("", true);
      }
    }
    ref4.current = onChangeText;
  }, items2);
  const items3 = [tmp24];
  const layoutEffect1 = ref.useLayoutEffect(() => {
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
    BottomSheetScrollView = onChangeText;
  }
  if (inActionSheet) {
    let BottomSheetTextInput = tmp2(tmp3[20]).BottomSheetTextInput;
  } else {
    BottomSheetTextInput = tmp18(tmp3[21]);
  }
  const result1 = 33 * bound;
  const tmp22 = ref2(ref.useState(false), 2);
  [tmp30, c17] = tmp9(obj1.useState(0), 2);
  const callback1 = obj1.useCallback((nativeEvent) => {
    _undefined3(nativeEvent.nativeEvent.layout.width);
  }, []);
  if (placeholder == null) {
    let intl = tmp2(tmp3[22]).intl;
    placeholder = intl.string(tmp2(tmp3[22]).t["5h0QOP"]);
  }
  if (accessibilityLabel == null) {
    const intl2 = tmp2(tmp3[22]).intl;
    accessibilityLabel = intl2.string(tmp2(tmp3[22]).t["5h0QOP"]);
  }
  closure_129_0 = onScroll;
  const tmp33 = c14();
  closure_129_1 = tmp33;
  let tmp34 = flag;
  if (flag) {
    tmp34 = flag2;
  }
  closure_129_2 = tmp34;
  let tmp2Result = tmp2(tmp3[7]);
  const sharedValue = tmp2Result.useSharedValue(false);
  closure_129_3 = sharedValue;
  const items4 = [tmp34, onScroll, sharedValue];
  const callback2 = obj1.useCallback((nativeEvent) => {
    if (ref1) {
      const result = ref2.set(nativeEvent.nativeEvent.contentOffset.x > 1);
    }
    if (onChangeText != null) {
      tmp3(nativeEvent);
    }
  }, items4);
  tmp2Result = tmp2(tmp3[7]);
  const fn = function u() {
    let obj = spring;
    let num = 1;
    if (ref2.get()) {
      num = 0;
    }
    obj = { opacity: obj.withSpring(num, springPresets.springStandard, "animate-always") };
    return obj;
  };
  obj = { withSpring: tmp2(tmp3[8]).withSpring, scrolled: sharedValue, springStandard: tmp2(tmp3[9]).springStandard };
  fn.__closure = obj;
  fn.__workletHash = 11561232362008;
  fn.__initData = __initData;
  const animatedStyle = tmp2Result.useAnimatedStyle(fn);
  closure_129_4 = animatedStyle;
  const items5 = [tmp34, tmp33, animatedStyle];
  let tmp39 = tmp34;
  const callback3 = obj1.useCallback((children) => {
    let tmp = children;
    if (ref1) {
      let obj = { style: ref.fill, androidRenderingMode: "software", maskElement: null, children: null };
      obj = { style: ref.mask, children: null };
      obj = { style: ref.leadingFade, children: null };
      const obj1 = { start, end, colors, style: React5.absoluteFill };
      const items = [React6(LinearGradientDefault, obj1)];
      const obj2 = { style: null };
      const items1 = [ref.leadingCover, ref];
      obj2.style = items1;
      items[1] = React6(ReanimatedRexportDefault.View, obj2);
      obj.children = items;
      const items2 = [React7(hasOwnProperty, obj)];
      const obj3 = { style: ref.maskRemainder };
      items2[1] = React6(hasOwnProperty, obj3);
      obj.children = items2;
      obj.maskElement = React7(hasOwnProperty, obj);
      obj.children = children;
      tmp = React6(_modDef5664, obj);
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
  obj.scrollEventThrottle = num;
  let fill;
  if (tmp34) {
    fill = tmp33.fill;
  }
  obj.scrollerStyle = fill;
  obj.wrap = callback3;
  obj1 = {
    style: null,
    contentContainerStyle: null,
    ref: null,
    bounces: false,
    onScroll: null,
    onLayout: null,
    scrollEventThrottle: null,
    horizontal: null,
    snapToInterval: null,
    overScrollMode: "never",
    keyboardShouldPersistTaps: "handled",
    children: null,
  };
  obj2 = { maxHeight: 3 * result1 };
  const items6 = [obj2, obj.scrollerStyle];
  obj1.style = items6;
  const items7 = [tmp.scrollViewContent];
  let prop;
  if (flag) {
    prop = tmp.horizontalScrollViewContent;
  }
  items7[1] = prop;
  obj1.contentContainerStyle = items7;
  obj1.ref = ref3;
  obj1.onScroll = obj.onScroll;
  let tmp44;
  if (flag) {
    tmp44 = callback1;
  }
  obj1.onLayout = tmp44;
  obj1.scrollEventThrottle = obj.scrollEventThrottle;
  obj1.horizontal = flag;
  obj1.snapToInterval = result1;
  const items8 = [tmp.inputInner];
  let horizontalInputInner = flag;
  if (flag) {
    horizontalInputInner = tmp.horizontalInputInner;
  }
  obj3 = { style: items8, children: null };
  items8[1] = horizontalInputInner;
  const items9 = [
    tags.map((tag, index) => {
      onChangeText = tag;
      closure_1 = index;
      return _undefined(
        onChangeText(ref1[23]).TagListInputTagComponent,
        {
          tag,
          selected: tag.id === c12,
          onPress(arg0) {
            if ("select" === arg0) {
              if (c12 !== tag.id) {
                c13(tmp5.id);
              }
              const current = ref.current;
              if (current != null) {
                current.focus();
              }
              c14(true);
              const current2 = ref.current;
              if (current2 != null) {
                current2.setSelection(0, 0);
              }
              closure_7.current = { start: 0, end: 0 };
            } else if (ref1 != null) {
              const tmpResult = tmp(closure_1);
            }
            return tmpResult;
          },
          start: 0 === index,
          end: index === onChangeText.length - 1,
        },
        index,
      );
    }),
  ];
  obj4 = {
    ref,
    accessibilityHint: accessibilityHint.accessibilityHint,
    accessibilityRole: "search",
    defaultValue: null,
    style: null,
    onChangeText: null,
    onKeyPress: null,
    onFocus: null,
    onBlur: null,
    onPressIn: null,
    autoCapitalize: "none",
    autoCorrect: false,
    "aria-label": null,
    placeholder: null,
    placeholderTextColor: null,
    autoFocus: null,
    returnKeyType: null,
    accessibilityLabel: null,
    caretHidden: null,
    onSubmitEditing: null,
    maxFontSizeMultiplier: 2,
    onSelectionChange: null,
  };
  if (ref2.current) {
    defaultValue = ref1.current;
  }
  obj4.defaultValue = defaultValue;
  const items10 = [tmp.searchInput, ,];
  let horizontalSearchInput = flag;
  if (flag) {
    horizontalSearchInput = tmp.horizontalSearchInput;
  }
  items10[1] = horizontalSearchInput;
  let tmp47;
  if (flag) {
    if (tmp32) {
      const obj5 = { maxWidth: tmp30 - 16 };
      tmp47 = obj5;
    }
  }
  items10[2] = tmp47;
  obj4.style = items10;
  obj4.onChangeText = onChangeText;
  obj4.onKeyPress = function onKeyPress(nativeEvent) {
    _undefined2(false);
    let tmp4 = 0 === ref.current.start;
    if (tmp4) {
      tmp4 = 0 === tmp3.current.end;
    }
    if ("Backspace" === nativeEvent.nativeEvent.key) {
      if (null != c12) {
        const findIndexResult = onChangeText.findIndex((id) => id.id === end);
        if (findIndexResult > -1) {
          if (ref1 != null) {
            ref1(findIndexResult);
          }
        }
        colors(null);
      }
    }
    if ("Backspace" === nativeEvent.nativeEvent.key) {
      if (tmp4) {
        if (0 !== onChangeText.length) {
          colors(arr[arr.length - 1].id);
          _undefined2(true);
          const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
          const intl = util.intl;
          const obj = { text: arr[arr.length - 1].text };
          AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.QymItZ, obj));
        }
      }
    }
    if (null != c12) {
      colors(null);
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
  obj4.onFocus = function onFocus(arg0) {
    _undefined.onFocus();
    if (c9 != null) {
      tmp2(arg0);
    }
  };
  obj4.onBlur = function onBlur(arg0) {
    _undefined.onBlur();
    if (c10 != null) {
      tmp2(arg0);
    }
  };
  obj4.onPressIn = function onPressIn() {
    _undefined2(false);
    colors(null);
  };
  obj4["aria-label"] = accessibilityLabel;
  let tmp48;
  if (0 === tags.length) {
    if (tmp32) {
      tmp48 = placeholder;
    }
  }
  obj4.placeholder = tmp48;
  obj4.placeholderTextColor = tmp.placeholder.color;
  obj4.autoFocus = autoFocus;
  obj4.returnKeyType = returnKeyType;
  obj4.accessibilityLabel = accessibilityLabel;
  obj4.caretHidden = tmp23;
  obj4.onSubmitEditing = onSubmitEditing;
  obj4.onSelectionChange = function onSelectionChange(nativeEvent) {
    const selection = nativeEvent.nativeEvent.selection;
    closure_7.current = selection;
    return selection;
  };
  items9[1] = c8(BottomSheetTextInput, obj4);
  obj3.children = items9;
  obj1.children = c9(ref1, obj3);
  const obj6 = { style: null, children: null };
  const items11 = [{ minHeight: result, overflow: "hidden" }, style];
  obj6.style = items11;
  let tmp42Result = tmp42(BottomSheetScrollView, obj1);
  const obj7 = { size: "sm", isDisabled: disabled, isFocused, children: null };
  if (null == icon) {
    const obj8 = { style: tmp.iconLeft, size: "xs", color: "interactive-text-default" };
    icon = tmp42(tmp2(tmp3[26]).MagnifyingGlassIcon, obj8);
  }
  const items12 = [icon, obj.wrap(tmp42Result)];
  if (null == footer) {
    tmp42Result = null;
    if (null != inputClearButton) {
      const obj9 = { style: tmp.iconContainer, children: inputClearButton };
      tmp42Result = tmp42(tmp46, obj9);
    }
    footer = tmp42Result;
  }
  items12[2] = footer;
  obj7.children = items12;
  obj6.children = c9(onChangeText(ref1[25]).InputFieldContainer, obj7);
  return c8(ref1, obj6);
});
