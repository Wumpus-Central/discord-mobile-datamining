// discord_app/design/components/TagListInput/native/TagListInput.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef1652 from "../../../../../_runtime/metro/01652__.js";
import AccessibilityAnnouncer2 from "../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import LinearGradientDefault from "../../../../../_runtime/05830_LinearGradient.js";
import useInitialValueDefault from "../../../../hooks/useInitialValue.tsx";
import Text_Text from "../../Text/native/Text.tsx";
import _modDef7467 from "../../../../../_runtime/metro/07467__.js";
import useBottomSheetKeyboardHandlingDefault from "../../Sheet/native/useBottomSheetKeyboardHandling.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const TextInput_TextInputDefault = tmp18(8113);
require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: closure_6, StyleSheet: metroImportDefault } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let createStyles = fn(5243);
let closure_10 = createStyles.createStyles(() => {
  const obj = {
    placeholder: { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT },
    iconContainer: null,
    iconLeft: null,
    scrollViewContent: null,
    horizontalScrollViewContent: null,
    inputInner: null,
    horizontalInputInner: null,
    searchInput: null,
    horizontalSearchInput: null,
  };
  const obj2 = { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
  obj.iconContainer = { paddingHorizontal: nativeDefault.space.PX_12 };
  const obj3 = { paddingHorizontal: nativeDefault.space.PX_12 };
  obj.iconLeft = { marginLeft: nativeDefault.space.PX_12 };
  obj.scrollViewContent = { paddingVertical: 5 };
  obj.horizontalScrollViewContent = { flexGrow: 1 };
  const obj4 = { marginLeft: nativeDefault.space.PX_12 };
  obj.inputInner = {
    marginHorizontal: nativeDefault.space.PX_4,
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
  };
  obj.horizontalInputInner = { flexWrap: "nowrap" };
  const obj6 = {
    flex: 1,
    minHeight: nativeDefault.space.PX_24,
    minWidth: nativeDefault.space.PX_48,
    color: nativeDefault.colors.TEXT_DEFAULT,
  };
  const merged = Object.assign(Text_Text.TextStyleSheet["body-sm/medium"]);
  obj6.paddingVertical = 0;
  obj6.marginVertical = 2;
  obj.searchInput = obj6;
  const obj5 = {
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
createStyles = fn(5243);
let closure_14 = createStyles.createStyles(() => {
  const obj = { fill: { flex: 1 }, mask: null, leadingFade: null, leadingCover: null, maskRemainder: null };
  const obj2 = {};
  const merged = Object.assign(metroImportDefault.absoluteFillObject);
  obj2.flexDirection = "row";
  obj.mask = obj2;
  obj.leadingFade = { width: 32 };
  const obj3 = {};
  const merged1 = Object.assign(metroImportDefault.absoluteFillObject);
  obj3.backgroundColor = "black";
  obj.leadingCover = obj3;
  obj.maskRemainder = { flex: 1, backgroundColor: "black" };
  return obj;
});
let closure_15 = {
  code: "(function TagListInputNativeTsx1(){let[withSpring,scrolled,springStandard]=this.__closure;return{opacity:withSpring(scrolled.get()?0:1,springStandard,'animate-always')};})",
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
  _require = tags;
  let flag = accessibilityHint.horizontal;
  if (flag === undefined) {
    flag = false;
  }
  ({ footer, focusOnAdd } = accessibilityHint);
  if (focusOnAdd === undefined) {
    focusOnAdd = true;
  }
  importDefault = focusOnAdd;
  ({ inActionSheet, onRemove: c2, autoClearInputOnTagAdd, onSubmitEditing, autoFocus } = accessibilityHint);
  if (autoClearInputOnTagAdd === undefined) {
    autoClearInputOnTagAdd = true;
  }
  let ref2 = autoClearInputOnTagAdd;
  let flag2 = accessibilityHint.leadingFade;
  if (flag2 === undefined) {
    flag2 = false;
  }
  onChangeText = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  c12 = undefined;
  c13 = undefined;
  c14 = undefined;
  c17 = undefined;
  let tmp = c10();
  const bound = Math.min(2, require("useFontScale").useFontScale());
  _require = onChangeText;
  let ref;
  onChangeText = undefined;
  let result = require("InputTypes").InputHeights.MD * bound;
  ref = ref.useRef(null);
  importDefault = ref;
  let ref1 = ref.useRef("");
  dependencyMap = ref1;
  ref2 = ref.useRef(false);
  const tmp10 = ref2(ref.useState(false), 2);
  const first = tmp10[0];
  ref = first;
  ref1 = tmp10[1];
  items = [onChangeText];
  onChangeText = ref.useCallback((current) => {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    ref2.current = true;
    c2.current = current;
    ref1(current.length > 0);
    if (_undefined != null) {
      _undefined(current);
    }
    if (flag) {
      current = _undefined2.current;
      if (current != null) {
        const obj = { text: current };
        current.setNativeProps(obj);
      }
    }
  }, items);
  const imperativeHandle = ref.useImperativeHandle(accessibilityHint.ref, () => ({
    blur() {
      const current = _undefined2.current;
      let blurResult;
      if (current != null) {
        blurResult = current.blur();
      }
      return blurResult;
    },
    focus() {
      const current = _undefined2.current;
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
      const current = _undefined2.current;
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
      const current = _undefined2.current;
      let measureResult;
      if (current != null) {
        measureResult = current.measure(arg0);
      }
      return measureResult;
    },
    measureInWindow(arg0) {
      const current = _undefined2.current;
      let measureInWindowResult;
      if (current != null) {
        measureInWindowResult = current.measureInWindow(arg0);
      }
      return measureInWindowResult;
    },
    measureLayout(arg0, arg1, arg2) {
      const current = _undefined2.current;
      let measureLayoutResult;
      if (current != null) {
        measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
      }
      return measureLayoutResult;
    },
  }));
  let items1 = [first, onChangeText];
  const memo = ref.useMemo(() => {
    const obj = {
      clearProps: { clearable: true },
      clearState: {
        hasValue: ref,
        clear() {
          return onChangeText("", true);
        },
        setTextValue(text) {
          return onChangeText(text, true);
        },
      },
    };
    return obj;
  }, items1);
  ({ clearProps, clearState } = memo);
  let obj = require("useFontScale");
  const tmp9 = ref2;
  const inputClearButton = require("useInputClearButton").useInputClearButton(clearProps, clearState);
  ref = ref.useRef({ start: 0, end: 0 });
  let obj3 = require("useInputClearButton");
  const keyboardBlurring = require("NativeTextInput").useKeyboardBlurring(ref);
  let obj4 = require("NativeTextInput");
  const focus = require("useFocus").useFocus();
  ({ focusProps: c8, isFocused } = focus);
  let obj5 = require("useFocus");
  ({ onFocus: c9, onBlur: c10 } = useBottomSheetKeyboardHandlingDefault({ onFocus, onBlur }));
  const ref3 = ref.useRef(null);
  const tmp19 = useBottomSheetKeyboardHandlingDefault({ onFocus, onBlur });
  [c12, c13] = ref2(ref.useState(null), 2);
  const tmp21 = ref2(ref.useState(null), 2);
  [tmp23, c14] = ref2(ref.useState(false), 2);
  const tmp24 = useInitialValueDefault(tags);
  length = tmp24;
  const ref4 = ref.useRef(tags);
  let items2 = [focusOnAdd, onChangeText, ref4, tags, ref, ref1, autoClearInputOnTagAdd];
  const layoutEffect = ref.useLayoutEffect(() => {
    if (ref4.current.length < _undefined.length) {
      let tmp6 = c1;
      if (c1) {
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
      if (0 === ref1.current.length) {
        const current3 = ref.current;
        if (current3 != null) {
          current3.setSelection(0, 0);
        }
        closure_7.current = { start: 0, end: 0 };
      }
    }
    ref4.current = _undefined;
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
    let BottomSheetScrollView = tmp2(5507).BottomSheetScrollView;
  } else {
    BottomSheetScrollView = onChangeText;
  }
  if (inActionSheet) {
    let BottomSheetTextInput = tmp2(8112).BottomSheetTextInput;
  } else {
    BottomSheetTextInput = TextInput_TextInputDefault;
  }
  const result1 = 33 * bound;
  const tmp22 = ref2(ref.useState(false), 2);
  [tmp30, c17] = tmp9(ref.useState(0), 2);
  const callback1 = obj2.useCallback((nativeEvent) => {
    _undefined6(nativeEvent.nativeEvent.layout.width);
  }, []);
  if (placeholder == null) {
    let intl = tmp2(1113).intl;
    placeholder = intl.string(tmp2(1113).t["5h0QOP"]);
  }
  if (accessibilityLabel == null) {
    const intl2 = tmp2(1113).intl;
    accessibilityLabel = intl2.string(tmp2(1113).t["5h0QOP"]);
  }
  closure_129_0 = onScroll;
  const tmp33 = c14();
  closure_129_1 = tmp33;
  let tmp34 = flag;
  if (flag) {
    tmp34 = flag2;
  }
  closure_129_2 = tmp34;
  const tmp9Result = tmp9(ref.useState(0), 2);
  const sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(false);
  closure_129_3 = sharedValue;
  const items4 = [tmp34, onScroll, sharedValue];
  const callback2 = obj2.useCallback((nativeEvent) => {
    if (c2) {
      const result = ref2.set(nativeEvent.nativeEvent.contentOffset.x > 1);
    }
    if (c0 != null) {
      tmp3(nativeEvent);
    }
  }, items4);
  const tmp2Result = require("../../../../../_runtime/metro/01652__.js");
  const items5 = [length, require("spring/spring").withSpring, sharedValue, require("springPresets").springStandard];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp37, tmp38, tmp39, tmp40] = items5;
  class TagListInputNativeTsx1 {
    constructor() {
      tmp = closure_0;
      num = 1;
      if (closure_1.get()) {
        num = 0;
      }
      obj = { opacity: tmp(num, closure_2, "animate-always") };
      return obj;
    }
  }
  const items6 = [tmp38, tmp39, tmp40];
  TagListInputNativeTsx1.__closure = items6;
  TagListInputNativeTsx1.__workletHash = 825720958529;
  TagListInputNativeTsx1.__initData = tmp37;
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(TagListInputNativeTsx1);
  closure_129_4 = animatedStyle;
  const items7 = [tmp34, tmp33, animatedStyle];
  let tmp43 = tmp34;
  const callback3 = obj2.useCallback((children) => {
    let tmp = children;
    if (c2) {
      const obj = { style: _undefined2.fill, androidRenderingMode: "software", maskElement: null, children: null };
      const obj2 = { style: _undefined2.mask, children: null };
      const obj3 = { style: _undefined2.leadingFade, children: null };
      const obj4 = { start, end, colors, style: metroImportDefault.absoluteFill };
      items = [React5(LinearGradientDefault, obj4)];
      const obj5 = { style: null };
      const items1 = [_undefined2.leadingCover, ref];
      obj5.style = items1;
      items[1] = React5(_modDef1652.View, obj5);
      obj3.children = items;
      const items2 = [React6(hasOwnProperty, obj3)];
      const obj6 = { style: _undefined2.maskRemainder };
      items2[1] = React5(hasOwnProperty, obj6);
      obj2.children = items2;
      obj.maskElement = React6(hasOwnProperty, obj2);
      obj.children = children;
      tmp = React5(_modDef7467, obj);
    }
    return tmp;
  }, items7);
  if (!tmp34) {
    tmp43 = null != onScroll;
  }
  let tmp44;
  if (tmp43) {
    tmp44 = callback2;
  }
  let obj6 = { onScroll: tmp44, scrollEventThrottle: null, scrollerStyle: null, wrap: null };
  let num;
  if (tmp43) {
    num = 16;
  }
  obj6.scrollEventThrottle = num;
  let fill;
  if (tmp34) {
    fill = tmp33.fill;
  }
  obj6.scrollerStyle = fill;
  obj6.wrap = callback3;
  const obj7 = {
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
  const items8 = [{ maxHeight: 3 * result1 }, obj6.scrollerStyle];
  obj7.style = items8;
  const items9 = [tmp.scrollViewContent];
  let prop;
  if (flag) {
    prop = tmp.horizontalScrollViewContent;
  }
  items9[1] = prop;
  obj7.contentContainerStyle = items9;
  obj7.ref = ref3;
  obj7.onScroll = obj6.onScroll;
  let tmp48;
  if (flag) {
    tmp48 = callback1;
  }
  obj7.onLayout = tmp48;
  obj7.scrollEventThrottle = obj6.scrollEventThrottle;
  obj7.horizontal = flag;
  obj7.snapToInterval = result1;
  const items10 = [tmp.inputInner];
  let horizontalInputInner = flag;
  if (flag) {
    horizontalInputInner = tmp.horizontalInputInner;
  }
  const obj9 = { style: items10, children: null };
  items10[1] = horizontalInputInner;
  const items11 = [
    tags.map((tag, index) => {
      _undefined = tag;
      closure_1 = index;
      return _undefined4(
        _undefined(_undefined3[23]).TagListInputTagComponent,
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
            } else if (c2 != null) {
              const tmpResult = tmp(closure_1);
            }
            return tmpResult;
          },
          start: 0 === index,
          end: index === _undefined.length - 1,
        },
        index,
      );
    }),
  ];
  const obj10 = {
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
  obj10.defaultValue = defaultValue;
  const items12 = [tmp.searchInput, ,];
  let horizontalSearchInput = flag;
  if (flag) {
    horizontalSearchInput = tmp.horizontalSearchInput;
  }
  items12[1] = horizontalSearchInput;
  let tmp51;
  if (flag) {
    if (tmp32) {
      const obj11 = { maxWidth: tmp30 - 16 };
      tmp51 = obj11;
    }
  }
  items12[2] = tmp51;
  obj10.style = items12;
  obj10.onChangeText = onChangeText;
  obj10.onKeyPress = function handleKeyPress(nativeEvent) {
    _undefined5(false);
    let tmp4 = 0 === ref.current.start;
    if (tmp4) {
      tmp4 = 0 === ref.current.end;
    }
    if ("Backspace" === nativeEvent.nativeEvent.key) {
      if (null != c12) {
        const findIndexResult = _undefined.findIndex((id) => id.id === end);
        if (findIndexResult > -1) {
          if (_undefined3 != null) {
            _undefined3(findIndexResult);
          }
        }
        colors(null);
      }
    }
    if ("Backspace" === nativeEvent.nativeEvent.key) {
      if (tmp4) {
        if (0 !== _undefined.length) {
          colors(_undefined[_undefined.length - 1].id);
          _undefined5(true);
          const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
          const intl = util.intl;
          const obj = { text: _undefined[_undefined.length - 1].text };
          AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.QymItZ, obj));
        }
      }
    }
    if (null != c12) {
      colors(null);
    } else {
      let tmp8 = null != ref.current && ref.current.start === ref.current.end;
      if (tmp8) {
        tmp8 = ref.current.start === ref1.current.length;
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
  obj10.onFocus = function onFocus(arg0) {
    _undefined4.onFocus();
    if (c9 != null) {
      tmp2(arg0);
    }
  };
  obj10.onBlur = function onBlur(arg0) {
    _undefined4.onBlur();
    if (c10 != null) {
      tmp2(arg0);
    }
  };
  obj10.onPressIn = function handlePressIn() {
    _undefined5(false);
    colors(null);
  };
  obj10["aria-label"] = accessibilityLabel;
  let tmp52;
  if (0 === tags.length) {
    if (tmp32) {
      tmp52 = placeholder;
    }
  }
  obj10.placeholder = tmp52;
  obj10.placeholderTextColor = tmp.placeholder.color;
  obj10.autoFocus = autoFocus;
  obj10.returnKeyType = returnKeyType;
  obj10.accessibilityLabel = accessibilityLabel;
  obj10.caretHidden = tmp23;
  obj10.onSubmitEditing = onSubmitEditing;
  obj10.onSelectionChange = function onSelectionChange(nativeEvent) {
    const selection = nativeEvent.nativeEvent.selection;
    closure_7.current = selection;
    return selection;
  };
  items11[1] = c8(BottomSheetTextInput, obj10);
  obj9.children = items11;
  obj7.children = c9(ref1, obj9);
  const obj12 = { style: null, children: null };
  const items13 = [{ minHeight: result, overflow: "hidden" }, style];
  obj12.style = items13;
  const obj8 = { maxHeight: 3 * result1 };
  const tmp2Result2 = require("../../../../../_runtime/metro/01652__.js");
  const obj13 = { size: "sm", disabled, isFocused, children: null };
  if (null == icon) {
    const obj14 = { style: tmp.iconLeft, size: "xs", color: "interactive-text-default" };
    icon = tmp46(tmp2(7760).MagnifyingGlassIcon, obj14);
  }
  const items14 = [icon, obj6.wrap(c8(BottomSheetScrollView, obj7))];
  if (null == footer) {
    let tmp46Result2 = null;
    if (null != inputClearButton) {
      const obj15 = { style: tmp.iconContainer, children: inputClearButton };
      tmp46Result2 = tmp46(tmp50, obj15);
    }
    footer = tmp46Result2;
  }
  items14[2] = footer;
  obj13.children = items14;
  obj12.children = c9(require("InputFieldContainer").InputFieldContainer, obj13);
  return c8(ref1, obj12);
});
