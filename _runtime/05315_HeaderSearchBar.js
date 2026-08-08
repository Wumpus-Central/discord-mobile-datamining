// _runtime/05315_HeaderSearchBar.js
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

let Image;
let Platform;
let StyleSheet;
let c5;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
let c4 = importAllResult;
({ Animated: c5, Image, Platform, StyleSheet, TextInput: closure_6, View: error } = get_ActivityIndicator);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
let closure_10 = { text: "text", number: "numeric", phone: "tel", email: "email" };
let c11 = true;
const styles = StyleSheet.create({ container: { flex: 1, flexDirection: "row", alignItems: "stretch" }, inputSearchIcon: { position: "absolute", opacity: 0.5, left: 4, top: 17 }, closeButton: { position: "absolute", opacity: 0.5, right: 8, top: 17 }, clearButton: { position: "absolute", right: 0, top: -7, bottom: 0, justifyContent: "center", padding: 8 }, clearIcon: { height: 16, width: 16, opacity: 0.5 }, cancelButton: { alignSelf: "center", top: -4 }, cancelText: { fontSize: 17, marginHorizontal: 12 }, searchbarContainer: { flex: 1 }, searchbar: { flex: 1, fontSize: 18, paddingHorizontal: 36, marginRight: 8, marginTop: 8, marginBottom: 8, borderBottomWidth: 1 } });

export const HeaderSearchBar = importAllResult.forwardRef(function HeaderSearchBarInternal(visible, ref) {
  let autoCapitalize;
  let autoFocus;
  let c6;
  let cancelButtonText;
  let colors;
  let dark;
  let enterKeyHint;
  let inputType;
  let placeholder;
  let tmp10;
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
  const merged = Object.assign(visible, Object.create(null));
  let navigation;
  let first;
  let RN;
  c6 = undefined;
  let first1;
  let first2;
  let closure_9;
  let closure_10;
  ref = undefined;
  let c12;
  let callback;
  let callback1;
  let callback2;
  let obj = visible(onClose[4]);
  navigation = obj.useNavigation();
  let obj1 = visible(onClose[4]);
  const theme = obj1.useTheme();
  ({ dark, colors } = theme);
  const tmp6 = navigation(first.useState(""), 2);
  first = tmp6[0];
  RN = tmp8;
  [tmp10, c6] = navigation(first.useState(visible), 2);
  first1 = navigation(first.useState(() => {
    let num = 0;
    if (visible) {
      num = 1;
    }
    const value = new _undefined.Value(num);
    return value;
  }), 1)[0];
  first2 = navigation(first.useState(() => {
    const value = new _undefined.Value(0);
    return value;
  }), 1)[0];
  closure_9 = first.useRef(visible);
  closure_10 = first.useRef(false);
  ref = first.useRef(null);
  const items = [visible, first1];
  const effect = first.useEffect(() => {
    if (visible !== ref.current) {
      let num = 0;
      if (tmp) {
        num = 1;
      }
      const obj = { toValue: null, duration: 100, useNativeDriver: null };
      obj[0] = num;
      obj[2] = ref;
      _undefined.timing(first1, obj).start((finished) => {
        if (finished.finished) {
          callback(closure_0);
          closure_9.current = closure_0;
        }
      });
      return () => {
        closure_7.stopAnimation();
      };
    }
  }, items);
  c12 = tmp15;
  const items1 = [first2, "" !== first];
  const effect1 = first.useEffect(() => {
    if (ref2.current !== c12) {
      let num = 0;
      if (tmp) {
        num = 1;
      }
      const obj = { toValue: null, duration: 100, useNativeDriver: null };
      obj[0] = num;
      obj[2] = ref;
      _undefined.timing(first2, obj).start((finished) => {
        if (finished.finished) {
          closure_10.current = closure_12;
        }
      });
      const timingResult = _undefined.timing(first2, obj);
      const tmp3 = first2;
    }
  }, items1);
  callback = first.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current.clear();
    }
    const current2 = ref.current;
    if (current2 != null) {
      current2.focus();
    }
    _undefined("");
  }, []);
  const items2 = [callback, onChangeText];
  callback1 = first.useCallback(() => {
    callback();
    if (onChangeText != null) {
      const obj = { nativeEvent: null };
      obj[0] = { text: "" };
      tmp2(obj);
    }
  }, items2);
  const items3 = [callback1, onClose];
  callback2 = first.useCallback(() => {
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
  const items5 = [callback2, callback];
  const imperativeHandle = first.useImperativeHandle(ref, () => ({
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
    setText(arg0) {
      const current = ref.current;
      if (current != null) {
        const obj = { text: null };
        obj[0] = arg0;
        current.setNativeProps(obj);
      }
      callback(arg0);
    },
    clearText: callback,
    cancelSearch: callback2
  }), items5);
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
  obj = { pointerEvents: str, "aria-live": "polite", "aria-hidden": !visible, style: items6, children: null };
  items6 = [c12.container, { opacity: first1 }, visible.style];
  obj = { style: c12.searchbarContainer, children: null };
  obj1 = { source: null, tintColor: null, style: null };
  obj1[0] = onChangeText(onClose[6]);
  obj1[1] = text;
  obj1[2] = c12.inputSearchIcon;
  const items7 = [first2(visible(onClose[5]).HeaderIcon, obj1), , ];
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
  obj2.inputMode = closure_10[inputType];
  obj2.enterKeyHint = enterKeyHint;
  obj2.placeholder = placeholder;
  const tmp24 = first1;
  const tmp27 = c6;
  const tmp30 = closure_10;
  const tmp9 = navigation(first.useState(visible), 2);
  const obj7 = onChangeText(onClose[7])(text);
  obj2.placeholderTextColor = onChangeText(onClose[7])(text).alpha(0.5).string();
  ({ primary: obj6.cursorColor, primary: obj6.selectionHandleColor } = colors);
  const alphaResult = onChangeText(onClose[7])(text).alpha(0.5);
  const obj9 = onChangeText(onClose[7])(colors.primary);
  obj2.selectionColor = onChangeText(onClose[7])(colors.primary).alpha(0.3).string();
  const items8 = [theme.fonts.regular, c12.searchbar, ];
  const obj3 = { backgroundColor: "transparent", color: text, borderBottomColor: null };
  const alphaResult1 = onChangeText(onClose[7])(colors.primary).alpha(0.3);
  const obj12 = onChangeText(onClose[7])(text);
  obj3[2] = onChangeText(onClose[7])(text).alpha(0.2).string();
  items8[2] = obj3;
  obj2.style = items8;
  items7[1] = first2(tmp27, obj2);
  items7[2] = null;
  obj[1] = items7;
  const items9 = [closure_9(tmp24, obj), , ];
  const obj4 = {
    onPress() {
      if (first) {
        callback1();
      } else {
        onClose();
      }
    },
    style: c12.closeButton,
    children: null
  };
  const obj5 = { source: null, tintColor: null };
  obj5[0] = onChangeText(onClose[9]);
  obj5[1] = text;
  obj4[2] = first2(visible(onClose[5]).HeaderIcon, obj5);
  items9[1] = first2(visible(onClose[8]).HeaderButton, obj4);
  items9[2] = null;
  obj[4] = items9;
  return closure_9(RN.View, obj);
});