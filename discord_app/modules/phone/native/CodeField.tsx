// === Module 9270: SingleCodeInput ===

// Module 9270 (SingleCodeInput)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function SingleCodeInput(loading) {
  let code;
  let count;
  let disabled;
  let error;
  let importDefault;
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
  const tmp2 = callback4();
  obj = { style: tmp2.singleInputWrapper, children: null };
  obj = { errorMessage: error, value: code, autoCapitalize: "characters", maxLength: count, accessibilityLabel: null, textContentType: "oneTimeCode", keyboardType: null, onChange: null, isDisabled: null, isClearable: true, autoFocus: true };
  const intl = NUMERIC(code[8]).intl;
  obj[4] = intl.string(NUMERIC(code[8]).t["ysthA+"]);
  let str = "default";
  if (NUMERIC === obj.NUMERIC) {
    str = "number-pad";
  }
  obj[6] = str;
  obj[7] = function handleChange(str) {
    setCode(str.replace(NUMERIC === outer1_9.NUMERIC ? /\D/g : /[^A-Z0-9]/g, ""));
  };
  obj[8] = disabled;
  const items = [closure_7(NUMERIC(code[7]).TextInput, obj), ];
  obj = { style: tmp2.singleInputButton, children: null };
  const obj1 = { loading: flag, variant: "primary", size: "lg", text: null, onPress: null, disabled: null };
  const intl2 = tmp6(tmp7[8]).intl;
  obj1[3] = intl2.string(NUMERIC(code[8]).t["13ofGu"]);
  obj1[4] = function handlePressSubmit() {
    return callback(code);
  };
  obj1[5] = code.length !== count || disabled;
  obj[1] = closure_7(NUMERIC(code[9]).Button, obj1);
  items[1] = closure_7(closure_5, obj);
  obj[1] = items;
  return closure_8(closure_5, obj);
}
function CodeFieldInner(loading) {
  let actions;
  let backgroundStyle;
  let description;
  let disabled;
  let error;
  let footer;
  let onCodeEntered;
  let title;
  let tmp4;
  let tmp5;
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
  const tmp2 = callback4();
  obj = { style: items, contentContainerStyle: tmp2.backgroundFlex, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, children: null };
  items = [tmp2.background, backgroundStyle];
  obj = { style: tmp2.container, children: null };
  [tmp4, tmp5] = callback(React.useState(""), 2);
  obj = { style: tmp2.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title };
  const items1 = [callback2(require(4189) /* Text */.Text, obj), callback2(require(4189) /* Text */.Text, { style: tmp2.subtitle, variant: "text-sm/medium", color: "text-default", children: description }), , ];
  const obj1 = { style: tmp2.subtitle, variant: "text-sm/medium", color: "text-default", children: description };
  const tmp3 = callback(React.useState(""), 2);
  items1[2] = callback2(closure_5, { style: tmp2.inputContainer, children: callback2(SingleCodeInput, { loading: flag, error, count: num, onCodeEntered, codeType: NUMERIC, disabled, code: tmp4, setCode: tmp5 }) });
  items1[3] = actions;
  obj[1] = items1;
  const items2 = [callback3(closure_5, obj), callback2(importDefault(5642), { children: footer })];
  obj[4] = items2;
  return callback3(closure_6, obj);
}
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let obj = { NUMERIC: "numeric", ALPHANUMERIC: "alphanumeric" };
obj = { viewWrapper: { flex: 1 }, background: null, backgroundFlex: null, container: null, title: null, subtitle: null, inputContainer: null, codeContainer: null, spacer: null, inputWrapper: null, inputWrapperError: null, input: null, singleInputWrapper: null, singleInputButton: null };
obj = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, flex: 1 };
obj[1] = obj;
obj[2] = { flex: 1, justifyContent: "space-between" };
obj[3] = { padding: 16 };
obj[4] = { textAlign: "center" };
obj[5] = { marginTop: 8, lineHeight: 18, textAlign: "center" };
obj[6] = { marginTop: 20, width: "100%", alignItems: "center" };
obj[7] = { maxWidth: 336, width: "100%", flexDirection: "row", justifyContent: "space-around" };
obj[8] = { width: 4 };
createCacheKey = { borderWidth: 1, borderRadius: 5, alignItems: "center", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
obj[9] = createCacheKey;
obj[10] = { borderColor: require("Themes").unsafe_rawColors.RED_400 };
obj[11] = { textAlign: "center" };
obj[12] = { width: "100%" };
obj[13] = { marginTop: 8, justifyContent: "flex-end" };
let closure_10 = createCacheKey.createStyles(obj);
let obj2 = { borderColor: require("Themes").unsafe_rawColors.RED_400 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/phone/native/CodeField.tsx");

export default function CodeField(disableKeyboardAvoidingView) {
  if (disableKeyboardAvoidingView.disableKeyboardAvoidingView) {
    let obj = {};
    const merged = Object.assign(disableKeyboardAvoidingView);
    let tmp2Result = tmp2(CodeFieldInner, obj);
  } else {
    obj = { style: null, children: null };
    obj[0] = tmp.viewWrapper;
    obj = {};
    const merged1 = Object.assign(disableKeyboardAvoidingView);
    obj[1] = tmp2(CodeFieldInner, obj);
    tmp2Result = tmp2(importDefault(5642), obj);
    const tmp5 = importDefault(5642);
  }
  return tmp2Result;
};
export const CodeType = obj;
export const CodeBlocks = function CodeBlocks(onCodeEntered) {
  let obj;
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
  let first;
  let callback;
  let React;
  let closure_5;
  const tmp3 = callback4();
  const tmp4 = callback(React.useState(Array(num).fill("")), 2);
  first = tmp4[0];
  callback = tmp4[1];
  const ArrayResult = Array(num);
  React = React.useRef(Array(num).fill(null));
  closure_5 = React.useRef(onCodeEntered);
  const effect = React.useEffect(() => {
    closure_5.current = num2;
  });
  let items = [first];
  const effect1 = React.useEffect(() => {
    if (first.every((str) => "" !== str.trim())) {
      ref2.current(first.join(""));
    }
  }, items);
  let items1 = [];
  for (let num2 = 0; num2 < num; num2 = num2 + 1) {
    let tmp8 = num2;
    if (num2 === num / 2) {
      let tmp9 = callback2;
      let tmp10 = closure_5;
      obj = { style: null };
      obj[0] = tmp3.spacer;
      let arr = items1.push(callback2(closure_5, obj, "spacer"));
    }
    let tmp12 = callback2;
    let items2 = [tmp3.inputWrapper, ];
    let inputWrapperError = null;
    let tmp13 = closure_5;
    if (tmp) {
      inputWrapperError = tmp3.inputWrapperError;
    }
    obj = { style: null, children: null };
    items2[1] = inputWrapperError;
    obj[0] = items2;
    let tmp15 = num2;
    let tmp16 = first;
    let obj1 = { ref: null, style: null, keyboardType: null, autoFocus: null, value: null, onKeyPress: null, onChangeText: null, selection: null, autoCapitalize: "characters", autoCorrect: false };
    obj1[0] = function ref(arg0) {
      ref.current[num2] = arg0;
    };
    let obj2 = { height: 42, width: null };
    obj2[1] = 252 / num;
    let items3 = [obj2, tmp3.input];
    obj1[1] = items3;
    let tmp17 = obj;
    let str = "default";
    if (NUMERIC === obj.NUMERIC) {
      str = "phone-pad";
    }
    obj1[2] = str;
    obj1[3] = 0 === num2;
    obj1[4] = first[num2];
    obj1[5] = function onKeyPress(nativeEvent) {
      if ("Backspace" !== nativeEvent.nativeEvent.key) {
        if (ref.current[tmp + 1] != null) {
          obj2.focus();
        }
      } else if ("" === first[tmp]) {
        const diff = tmp - 1;
        const items = [];
        HermesBuiltin.arraySpread(tmp2, 0);
        items[diff] = "";
        callback(items);
        if (ref.current[diff] != null) {
          obj.focus();
        }
      }
    };
    obj1[6] = function onChangeText(arr) {
      let str = arr;
      if (arr[0] === first[num2]) {
        str = arr.slice(1);
      }
      const str2 = str.replace("-", "");
      const tmp = num2;
      const tmp2 = first;
      const str4 = str.replace("-", "").trim().toUpperCase();
      let parts = str4.split("");
      if ("" === str4) {
        parts = [""];
      }
      const items = [...tmp2];
      const items1 = [tmp, 1, ...parts];
      items.splice.apply(items1);
      callback(items.slice(0, num));
    };
    let obj3 = { start: null, end: null };
    obj3[0] = first[num2].length;
    obj3[1] = first[num2].length;
    obj1[7] = obj3;
    obj[1] = tmp12(num2(first[6]).TextInput, obj1);
    arr = items1.push(tmp12(tmp13, obj, num2));
  }
  return callback2(closure_5, { style: tmp3.codeContainer, children: items1 });
};