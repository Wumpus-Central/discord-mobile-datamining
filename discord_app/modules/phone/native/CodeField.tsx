// discord_app/modules/phone/native/CodeField.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import KeyboardAwareViewDefault from "../../keyboard/native/KeyboardAwareView.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function SingleCodeInput(loading) {
  let flag = loading.loading;
  if (flag === undefined) {
    flag = false;
  }
  ({ count, error } = loading);
  if (count === undefined) {
    count = 6;
  }
  let NUMERIC = loading.codeType;
  if (NUMERIC === undefined) {
    NUMERIC = obj.NUMERIC;
  }
  ({ onCodeEntered: importDefault, disabled, code } = loading);
  const setCode = loading.setCode;
  const tmp2 = closure_10();
  obj = { style: tmp2.singleInputWrapper, children: null };
  obj = {
    errorMessage: error,
    value: code,
    autoCapitalize: "characters",
    maxLength: count,
    accessibilityLabel: null,
    textContentType: "oneTimeCode",
    keyboardType: null,
    onChange: null,
    isDisabled: null,
    isClearable: true,
    autoFocus: true,
  };
  const intl = NUMERIC(code[8]).intl;
  obj.accessibilityLabel = intl.string(NUMERIC(code[8]).t["ysthA+"]);
  let str = "default";
  if (NUMERIC === obj.NUMERIC) {
    str = "number-pad";
  }
  obj.keyboardType = str;
  obj.onChange = function handleChange(str) {
    setCode(str.replace(NUMERIC === obj.NUMERIC ? /\D/g : /[^A-Z0-9]/g, ""));
  };
  obj.isDisabled = disabled;
  const items = [closure_7(NUMERIC(code[7]).TextInput, obj)];
  obj = { style: tmp2.singleInputButton, children: null };
  const obj1 = { loading: flag, variant: "primary", size: "lg", text: null, onPress: null, disabled: null };
  const intl2 = tmp6(code[8]).intl;
  obj1.text = intl2.string(NUMERIC(code[8]).t["13ofGu"]);
  obj1.onPress = function handlePressSubmit() {
    return importDefault(code);
  };
  obj1.disabled = code.length !== count || disabled;
  obj.children = closure_7(NUMERIC(code[9]).Button, obj1);
  items[1] = closure_7(closure_5, obj);
  obj.children = items;
  return closure_8(closure_5, obj);
}
function CodeFieldInner(loading) {
  let flag = loading.loading;
  ({ title, description, error, onCodeEntered } = loading);
  if (flag === undefined) {
    flag = false;
  }
  let num = loading.count;
  if (num === undefined) {
    num = 6;
  }
  let NUMERIC = loading.codeType;
  if (NUMERIC === undefined) {
    NUMERIC = obj.NUMERIC;
  }
  ({ actions, footer, backgroundStyle, disabled } = loading);
  const tmp2 = closure_10();
  obj = {
    style: null,
    contentContainerStyle: tmp2.backgroundFlex,
    keyboardShouldPersistTaps: "handled",
    alwaysBounceVertical: false,
    children: null,
  };
  const items = [tmp2.background, backgroundStyle];
  obj.style = items;
  obj = { style: tmp2.container, children: null };
  [tmp4, tmp5] = _slicedToArray(noop.useState(""), 2);
  obj = {
    style: tmp2.title,
    accessibilityRole: "header",
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: title,
  };
  const items1 = [
    React5(Text_Text.Text, obj),
    React5(Text_Text.Text, {
      style: tmp2.subtitle,
      variant: "text-sm/medium",
      color: "text-default",
      children: description,
    }),
    ,
  ];
  const obj1 = { style: tmp2.subtitle, variant: "text-sm/medium", color: "text-default", children: description };
  const tmp3 = _slicedToArray(noop.useState(""), 2);
  items1[2] = React5(hasOwnProperty, {
    style: tmp2.inputContainer,
    children: React5(SingleCodeInput, {
      loading: flag,
      error,
      count: num,
      onCodeEntered,
      codeType: NUMERIC,
      disabled,
      code: tmp4,
      setCode: tmp5,
    }),
  });
  items1[3] = actions;
  obj.children = items1;
  const items2 = [React6(hasOwnProperty, obj), React5(KeyboardAwareViewDefault, { children: footer })];
  obj.children = items2;
  return React6(timestampProducer, obj);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let CodeType = { NUMERIC: "numeric", ALPHANUMERIC: "alphanumeric" };
fn(4560);
CodeType = {
  viewWrapper: { flex: 1 },
  background: null,
  backgroundFlex: null,
  container: null,
  title: null,
  subtitle: null,
  inputContainer: null,
  codeContainer: null,
  spacer: null,
  inputWrapper: null,
  inputWrapperError: null,
  input: null,
  singleInputWrapper: null,
  singleInputButton: null,
};
CodeType = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
CodeType.background = CodeType;
CodeType.backgroundFlex = { flex: 1, justifyContent: "space-between" };
CodeType.container = { padding: 16 };
CodeType.title = { textAlign: "center" };
CodeType.subtitle = { marginTop: 8, lineHeight: 18, textAlign: "center" };
CodeType.inputContainer = { marginTop: 20, width: "100%", alignItems: "center" };
CodeType.codeContainer = { maxWidth: 336, width: "100%", flexDirection: "row", justifyContent: "space-around" };
CodeType.spacer = { width: 4 };
const createStyles = {
  borderWidth: 1,
  borderRadius: 5,
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
CodeType.inputWrapper = createStyles;
CodeType.inputWrapperError = { borderColor: nativeDefault.unsafe_rawColors.RED_400 };
CodeType.input = { textAlign: "center" };
CodeType.singleInputWrapper = { width: "100%" };
CodeType.singleInputButton = { marginTop: 8, justifyContent: "flex-end" };
let closure_10 = createStyles.createStyles(CodeType);
let size = fn(2);
const result = size.fileFinishedImporting("modules/phone/native/CodeField.tsx");

export default function CodeField(disableKeyboardAvoidingView) {
  if (disableKeyboardAvoidingView.disableKeyboardAvoidingView) {
    obj = {};
    const merged = Object.assign(disableKeyboardAvoidingView);
    let tmp2Result = React5(CodeFieldInner, obj);
  } else {
    obj = { style: tmp.viewWrapper, children: null };
    obj = {};
    const merged1 = Object.assign(disableKeyboardAvoidingView);
    obj.children = React5(CodeFieldInner, obj);
    tmp2Result = React5(KeyboardAwareViewDefault, obj);
  }
  return tmp2Result;
}
export { CodeType };
export const CodeBlocks = function CodeBlocks(onCodeEntered) {
  onCodeEntered = onCodeEntered.onCodeEntered;
  const num2 = onCodeEntered;
  let num = onCodeEntered.count;
  if (num === undefined) {
    num = 6;
  }
  let NUMERIC = onCodeEntered.codeType;
  if (NUMERIC === undefined) {
    NUMERIC = obj.NUMERIC;
  }
  const tmp3 = closure_10();
  const tmp4 = _slicedToArray(noop.useState(Array(num).fill("")), 2);
  const first = tmp4[0];
  closure_3 = tmp4[1];
  const ArrayResult = Array(num);
  closure_4 = noop.useRef(Array(num).fill(null));
  noop.useRef(onCodeEntered);
  const effect = noop.useEffect(() => {
    closure_5.current = num2;
  });
  let items = [first];
  const effect1 = noop.useEffect(() => {
    if (first.every((item) => "" !== item.trim())) {
      ref.current(first.join(""));
    }
  }, items);
  let items1 = [];
  for (let num2 = 0; num2 < num; num2 = num2 + 1) {
    if (num2 === num / 2) {
      obj = { style: tmp3.spacer };
      let arr = items1.push(React5(hasOwnProperty, obj, "spacer"));
    }
    let items2 = [tmp3.inputWrapper];
    let inputWrapperError = null;
    if (tmp) {
      inputWrapperError = tmp3.inputWrapperError;
    }
    obj = { style: null, children: null };
    items2[1] = inputWrapperError;
    obj.style = items2;
    let obj1 = {
      ref(arg0) {
        noop.current[num2] = arg0;
      },
      style: null,
      keyboardType: null,
      autoFocus: null,
      value: null,
      onKeyPress: null,
      onChangeText: null,
      selection: null,
      autoCapitalize: "characters",
      autoCorrect: false,
    };
    let size = { height: 42, width: 252 / num };
    let items3 = [size, tmp3.input];
    obj1.style = items3;
    let str = "default";
    if (NUMERIC === obj.NUMERIC) {
      str = "phone-pad";
    }
    obj1.keyboardType = str;
    obj1.autoFocus = 0 === num2;
    obj1.value = first[num2];
    obj1.onKeyPress = function onKeyPress(nativeEvent) {
      if ("Backspace" !== nativeEvent.nativeEvent.key) {
        if (noop.current[tmp + 1] != null) {
          obj2.focus();
        }
      } else if ("" === dependencyMap[tmp]) {
        const diff = tmp - 1;
        const items = [];
        HermesBuiltin.arraySpread(dependencyMap, 0);
        items[diff] = "";
        _slicedToArray(items);
        if (noop.current[diff] != null) {
          obj.focus();
        }
      }
    };
    obj1.onChangeText = function onChangeText(arr) {
      let str = arr;
      if (arr[0] === dependencyMap[num2]) {
        str = arr.slice(1);
      }
      const str2 = str.replace("-", "");
      const str4 = str.replace("-", "").trim().toUpperCase();
      let parts = str4.split("");
      if ("" === str4) {
        parts = [""];
      }
      const items = [...tmp2];
      const items1 = [num2, 1, ...parts];
      items.splice.apply(items1);
      _slicedToArray(items.slice(0, importDefault));
      const str3 = str.replace("-", "").trim();
    };
    let obj2 = { start: first[num2].length, end: first[num2].length };
    obj1.selection = obj2;
    obj.children = React5(native.TextInput, obj1);
    arr = items1.push(React5(hasOwnProperty, obj, num2));
  }
  return React5(hasOwnProperty, { style: tmp3.codeContainer, children: items1 });
};
