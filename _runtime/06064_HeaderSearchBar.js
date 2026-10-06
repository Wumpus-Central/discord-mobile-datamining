// _runtime/06064_HeaderSearchBar.js
import _slicedToArray from "metro/00032__slicedToArray.js";
import react from "00019_react.js";
import react_native from "00017_react-native.js";
import Fragment from "react/00021_Fragment.js";

let RN, closure_12, navigation;

let Image;
let Platform;
let StyleSheet;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({
  Animated: hasOwnProperty,
  Image,
  Platform,
  StyleSheet,
  TextInput: metroRequire,
  View: metroImportDefault,
} = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = { text: "text", number: "numeric", phone: "tel", email: "email" };
let c11 = true;
const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "row", alignItems: "stretch" },
  inputSearchIcon: { position: "absolute", opacity: 0.5, left: 4, top: 17 },
  closeButton: { position: "absolute", opacity: 0.5, right: 8, top: 17 },
  clearButton: { position: "absolute", right: 0, top: -7, bottom: 0, justifyContent: "center", padding: 8 },
  clearIcon: { height: 16, width: 16, opacity: 0.5 },
  cancelButton: { alignSelf: "center", top: -4 },
  cancelText: { fontSize: 17, marginHorizontal: 12 },
  searchbarContainer: { flex: 1 },
  searchbar: {
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 36,
    marginRight: 8,
    marginTop: 8,
    marginBottom: 8,
    borderBottomWidth: 1,
  },
});

export const HeaderSearchBar = react.forwardRef(function HeaderSearchBarInternal(visible, arg1) {
  let HeaderIcon2;
  let alphaResult;
  let alphaResult1;
  let alphaResult2;
  let autoCapitalize;
  let autoFocus;
  let c6;
  let cancelButtonText;
  let closure_5;
  let colors;
  let dark;
  let enterKeyHint;
  let inputType;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj13;
  let placeholder;
  let tmp10;
  let tmp29;
  let tmp30;
  let useNativeDriver;
  visible = visible.visible;
  ({ inputType, autoFocus } = visible);
  if (autoFocus === undefined) {
    autoFocus = true;
  }
  ({ autoCapitalize, placeholder } = visible);
  if (placeholder === undefined) {
    placeholder = "Search";
  }
  ({ cancelButtonText, enterKeyHint } = visible);
  if (enterKeyHint === undefined) {
    enterKeyHint = "search";
  }
  const onChangeText = visible.onChangeText;
  const onClose = visible.onClose;
  let text = visible.tintColor;
  const style = visible.style;
  const merged = Object.assign(
    visible,
    Object.assign({
      visible: 0,
      inputType: 0,
      autoFocus: 0,
      autoCapitalize: 0,
      placeholder: 0,
      cancelButtonText: 0,
      enterKeyHint: 0,
      onChangeText: 0,
      onClose: 0,
      tintColor: 0,
      style: 0,
    }),
  );
  let first;
  c6 = undefined;
  const tmp2 = visible;
  let obj = visible(onClose[4]);
  navigation = obj.useNavigation();
  const obj2 = visible(onClose[4]);
  const theme = obj2.useTheme();
  ({ dark, colors } = theme);
  const fonts = theme.fonts;
  const tmp6 = navigation(first.useState(""), 2);
  first = tmp6[0];
  RN = tmp8;
  [tmp10, c6] = navigation(first.useState(visible), 2);
  navigation(first.useState(visible), 2);
  const first1 = navigation(
    first.useState(() => {
      let num = 0;
      const Value = hasOwnProperty.Value;
      if (visible) {
        num = 1;
      }
      const value = new Value(num);
      return value;
    }),
    1,
  )[0];
  const first2 = navigation(
    first.useState(() => {
      const value = new closure_5.Value(0);
      return value;
    }),
    1,
  )[0];
  first.useRef(visible);
  const ref2 = first.useRef(false);
  const ref = first.useRef(null);
  const items = [visible, first1];
  const effect = first.useEffect(() => {
    let current;
    if (visible !== ref.current) {
      let num = 0;
      const timing = hasOwnProperty.timing;
      if (tmp) {
        num = 1;
      }
      const obj = { toValue: num, duration: 100, useNativeDriver };
      const timingResult = timing(first1, obj);
      timingResult.start((finished) => {
        if (finished.finished) {
          closure_1_6(current);
          ref.current = current;
        }
      });
      return () => {
        first1.stopAnimation();
      };
    }
  }, items);
  closure_12 = tmp15;
  const items1 = [first2, "" !== first];
  const effect1 = first.useEffect(() => {
    if (ref2.current !== current) {
      let num = 0;
      const timing = hasOwnProperty.timing;
      if (tmp) {
        num = 1;
      }
      const obj = { toValue: num, duration: 100, useNativeDriver };
      const timingResult = timing(first2, obj);
      timingResult.start((finished) => {
        if (finished.finished) {
          ref2.current = current;
        }
      });
    }
  }, items1);
  const clearText = first.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current.clear();
    }
    const current2 = ref.current;
    if (current2 != null) {
      current2.focus();
    }
    closure_5("");
  }, []);
  const items2 = [clearText, onChangeText];
  const callback1 = first.useCallback(() => {
    callback();
    if (onChangeText != null) {
      const obj = { nativeEvent: { text: "" } };
      tmp2(obj);
    }
  }, items2);
  const items3 = [callback1, onClose];
  const callback2 = first.useCallback(() => {
    callback1();
    onClose();
  }, items3);
  const items4 = [callback2, navigation];
  const effect2 = first.useEffect(() => {
    let addListenerResult;
    if (navigation != null) {
      addListenerResult = navigation.addListener("blur", callback2);
    }
    return addListenerResult;
  }, items4);
  const items5 = [callback2, clearText];
  const imperativeHandle = first.useImperativeHandle(
    arg1,
    () => {
      let obj = {
        focus() {
          const current = ref.current;
          if (current != null) {
            current.focus();
          }
        },
        blur() {
          const current = ref.current;
          if (current != null) {
            current.blur();
          }
        },
        setText(text) {
          const current = ref.current;
          if (current != null) {
            const obj = { text };
            current.setNativeProps(obj);
          }
          closure_1_5(text);
        },
        clearText,
        cancelSearch: callback2,
      };
      return obj;
    },
    items5,
  );
  if (!visible) {
    if (!tmp10) {
      return null;
    }
  }
  if (text == null) {
    text = colors.text;
  }
  let str = "none";
  const View = RN.View;
  if (visible) {
    str = "auto";
  }
  const obj3 = { pointerEvents: str, "aria-live": "polite", "aria-hidden": !visible, style: items6, children: items9 };
  items6 = [closure_12.container, { opacity: first1 }, style];
  const obj4 = { style: closure_12.searchbarContainer, children: items7 };
  const obj5 = { source: onChangeText(onClose[6]), tintColor: text, style: closure_12.inputSearchIcon };
  const HeaderIcon = tmp2(tmp3[5]).HeaderIcon;
  items7 = [first2(HeaderIcon, obj5), ,];
  const obj8 = {
    ref,
    onChange: onChangeText,
    onChangeText: tmp6[1],
    autoFocus,
    autoCapitalize: tmp29,
    inputMode: tmp30[inputType],
    enterKeyHint,
    placeholder,
    placeholderTextColor: alphaResult.string(),
    selectionColor: alphaResult1.string(),
    style: items8,
  };
  const merged1 = Object.assign(merged);
  tmp29 = undefined;
  const tmp24 = first1;
  const tmp27 = c6;
  if ("systemDefault" !== autoCapitalize) {
    tmp29 = autoCapitalize;
  }
  tmp30 = ref2;
  if (inputType == null) {
    inputType = "text";
  }
  const obj7 = onChangeText(onClose[7])(text);
  ({ primary: obj6.cursorColor, primary: obj6.selectionHandleColor } = colors);
  alphaResult = obj7.alpha(0.5);
  const obj9 = onChangeText(onClose[7])(colors.primary);
  items8 = [fonts.regular, closure_12.searchbar];
  alphaResult1 = obj9.alpha(0.3);
  const obj10 = { backgroundColor: "transparent", color: text, borderBottomColor: alphaResult2.string() };
  const obj12 = onChangeText(onClose[7])(text);
  items8[2] = obj10;
  alphaResult2 = obj12.alpha(0.2);
  items7[1] = first2(tmp27, obj8);
  items7[2] = null;
  items9 = [ref(tmp24, obj4), ,];
  const obj11 = {
    onPress() {
      if (first) {
        callback1();
      } else {
        onClose();
      }
    },
    style: closure_12.closeButton,
    children: first2(HeaderIcon2, obj13),
  };
  const HeaderButton = tmp2(tmp3[8]).HeaderButton;
  obj13 = { source: onChangeText(onClose[9]), tintColor: text };
  HeaderIcon2 = tmp2(tmp3[5]).HeaderIcon;
  items9[1] = first2(HeaderButton, obj11);
  items9[2] = null;
  return ref(View, obj3);
});
