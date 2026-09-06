// _runtime/05669_HeaderSearchBar.js
import _slicedToArray from "metro/00032__.js";
import noop from "metro/00019__.js";

const require = fn;
get_ActivityIndicator = fn(17);
({
  Animated: hasOwnProperty,
  Image,
  Platform,
  StyleSheet,
  TextInput: metroRequire,
  View: closure_7,
} = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
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

export const HeaderSearchBar = noop.forwardRef(function HeaderSearchBarInternal(visible, ref) {
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
  let obj = visible(onClose[4]);
  const navigation = obj.useNavigation();
  let obj1 = visible(onClose[4]);
  const theme = obj1.useTheme();
  ({ dark, colors } = theme);
  const tmp6 = navigation(first.useState(""), 2);
  first = tmp6[0];
  RN = tmp8;
  [tmp10, c6] = navigation(first.useState(visible), 2);
  const first1 = navigation(
    first.useState(() => {
      let num = 0;
      if (visible) {
        num = 1;
      }
      value = new RN.Value(num);
      return value;
    }),
    1,
  )[0];
  const first2 = navigation(
    first.useState(() => {
      value = new closure_5.Value(0);
      return value;
    }),
    1,
  )[0];
  first.useRef(visible);
  const ref2 = first.useRef(false);
  ref = first.useRef(null);
  const items = [visible, first1];
  const effect = first.useEffect(() => {
    if (visible !== ref.current) {
      let num = 0;
      if (tmp) {
        num = 1;
      }
      const obj = { toValue: num, duration: 100, useNativeDriver };
      RN.timing(first1, obj).start((finished) => {
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
      if (tmp) {
        num = 1;
      }
      const obj = { toValue: num, duration: 100, useNativeDriver };
      RN.timing(first2, obj).start((finished) => {
        if (finished.finished) {
          ref2.current = current;
        }
      });
      const timingResult = RN.timing(first2, obj);
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
    ref,
    () => ({
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
    }),
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
  if (visible) {
    str = "auto";
  }
  obj = { pointerEvents: str, "aria-live": "polite", "aria-hidden": !visible, style: null, children: null };
  const items6 = [closure_12.container, { opacity: first1 }, visible.style];
  obj.style = items6;
  obj = { style: closure_12.searchbarContainer, children: null };
  obj1 = { source: onChangeText(tmp3[6]), tintColor: text, style: closure_12.inputSearchIcon };
  const items7 = [first2(visible(onClose[5]).HeaderIcon, obj1), ,];
  const obj2 = {};
  const merged1 = Object.assign(merged);
  obj2.ref = ref;
  obj2.onChange = onChangeText;
  obj2.onChangeText = tmp6[1];
  obj2.autoFocus = autoFocus;
  let tmp29;
  if ("systemDefault" !== autoCapitalize) {
    tmp29 = autoCapitalize;
  }
  obj2.autoCapitalize = tmp29;
  if (inputType == null) {
    inputType = "text";
  }
  obj2.inputMode = ref2[inputType];
  obj2.enterKeyHint = enterKeyHint;
  obj2.placeholder = placeholder;
  const tmp24 = first1;
  const tmp27 = c6;
  const tmp9 = navigation(first.useState(visible), 2);
  const obj7 = onChangeText(onClose[7])(text);
  obj2.placeholderTextColor = onChangeText(onClose[7])(text).alpha(0.5).string();
  ({ primary: obj6.cursorColor, primary: obj6.selectionHandleColor } = colors);
  const alphaResult = onChangeText(onClose[7])(text).alpha(0.5);
  const obj9 = onChangeText(onClose[7])(colors.primary);
  obj2.selectionColor = onChangeText(onClose[7])(colors.primary).alpha(0.3).string();
  const items8 = [theme.fonts.regular, closure_12.searchbar];
  const obj3 = { backgroundColor: "transparent", color: text, borderBottomColor: null };
  const alphaResult1 = onChangeText(onClose[7])(colors.primary).alpha(0.3);
  const obj12 = onChangeText(onClose[7])(text);
  obj3.borderBottomColor = onChangeText(onClose[7])(text).alpha(0.2).string();
  items8[2] = obj3;
  obj2.style = items8;
  items7[1] = first2(tmp27, obj2);
  items7[2] = null;
  obj.children = items7;
  const items9 = [ref(tmp24, obj), ,];
  const obj4 = {
    onPress() {
      if (first) {
        callback1();
      } else {
        onClose();
      }
    },
    style: closure_12.closeButton,
    children: null,
  };
  const alphaResult2 = onChangeText(onClose[7])(text).alpha(0.2);
  obj4.children = first2(visible(onClose[5]).HeaderIcon, { source: onChangeText(onClose[9]), tintColor: text });
  items9[1] = first2(visible(onClose[8]).HeaderButton, obj4);
  items9[2] = null;
  obj.children = items9;
  return ref(RN.View, obj);
});
