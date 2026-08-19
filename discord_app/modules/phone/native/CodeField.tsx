// === Module 8657: SingleCodeInput ===

// Module 8657 (SingleCodeInput)
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4734 */;
import _modDef6551 from "module_6551" /* 6551 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

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
  const tmp2 = callback4();
  obj = { errorMessage: error, value: code, autoCapitalize: "characters", maxLength: count, accessibilityLabel: null, textContentType: "oneTimeCode", keyboardType: null, onChange: null, isDisabled: null, isClearable: true, autoFocus: true };
  const intl = NUMERIC(code[8]).intl;
  obj[4] = intl.string(NUMERIC(code[8]).t["ysthA+"]);
  let str = "default";
  if (NUMERIC === obj.NUMERIC) {
    str = "number-pad";
  }
  obj[6] = str;
  obj[7] = function handleChange(str) {
    setCode(str.replace(NUMERIC === obj.NUMERIC ? /\D/g : /[^A-Z0-9]/g, ""));
  };
  obj[8] = disabled;
  const items = [callback(NUMERIC(code[7]).TextInput, obj), ];
  obj = { style: tmp2.singleInputButton, children: null };
  obj1 = { loading: flag, variant: "primary", size: "lg", text: null, onPress: null, disabled: null };
  const intl2 = tmp6(code[8]).intl;
  obj1[3] = intl2.string(NUMERIC(code[8]).t["13ofGu"]);
  obj1[4] = function handlePressSubmit() {
    return callback(code);
  };
  obj1[5] = code.length !== count || disabled;
  obj[1] = callback(NUMERIC(code[9]).Button, obj1);
  items[1] = callback(closure_5, obj);
  obj[1] = items;
  return callback2(closure_5, obj);
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
  const tmp2 = callback4();
  const items = [tmp2.background, backgroundStyle];
  [tmp4, tmp5] = callback(React.useState(""), 2);
  obj = { style: tmp2.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title };
  const items1 = [callback2(Text.Text, obj), callback2(Text.Text, { style: tmp2.subtitle, variant: "text-sm/medium", color: "text-default", children: description }), , ];
  const tmp3 = callback(React.useState(""), 2);
  items1[2] = callback2(closure_5, { style: tmp2.inputContainer, children: callback2(SingleCodeInput, { loading: flag, error, count: num, onCodeEntered, codeType: NUMERIC, disabled, code: tmp4, setCode: tmp5 }) });
  items1[3] = actions;
  obj[1] = items1;
  const items2 = [callback3(closure_5, obj), callback2(_modDef6551, { children: footer })];
  obj[4] = items2;
  return callback3(closure_6, obj);
}
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
let obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj[1] = obj;
obj[2] = { flex: 1, justifyContent: "space-between" };
obj[3] = { padding: 16 };
obj[4] = { textAlign: "center" };
obj[5] = { marginTop: 8, lineHeight: 18, textAlign: "center" };
obj[6] = { marginTop: 20, width: "100%", alignItems: "center" };
obj[7] = { maxWidth: 336, width: "100%", flexDirection: "row", justifyContent: "space-around" };
obj[8] = { width: 4 };
const createCacheKey = { borderWidth: 1, borderRadius: 5, alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
obj[9] = createCacheKey;
obj[10] = { borderColor: ThemesDefault.unsafe_rawColors.RED_400 };
obj[11] = { textAlign: "center" };
obj[12] = { width: "100%" };
obj[13] = { marginTop: 8, justifyContent: "flex-end" };
let closure_10 = createCacheKey.createStyles(obj);
const result = require("obj132").fileFinishedImporting("modules/phone/native/CodeField.tsx");

export default function CodeField(disableKeyboardAvoidingView) {
  if (disableKeyboardAvoidingView.disableKeyboardAvoidingView) {
    obj = {};
    const merged = Object.assign(disableKeyboardAvoidingView);
    let tmp2Result = callback(CodeFieldInner, obj);
  } else {
    obj = { style: null, children: null };
    obj[0] = tmp.viewWrapper;
    obj = {};
    const merged1 = Object.assign(disableKeyboardAvoidingView);
    obj[1] = callback(CodeFieldInner, obj);
    tmp2Result = callback(_modDef6551, obj);
  }
  return tmp2Result;
};
export const CodeType = obj;
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
  let callback;
  let React;
  const tmp3 = callback4();
  const tmp4 = callback(React.useState(Array(num).fill("")), 2);
  const first = tmp4[0];
  callback = tmp4[1];
  const ArrayResult = Array(num);
  React = React.useRef(Array(num).fill(null));
  closure_5 = React.useRef(onCodeEntered);
  const effect = React.useEffect(() => {
    closure_5.current = num2;
  });
  let items = [first];
  const effect1 = React.useEffect(() => {
    if (first.every((item, index) => "" !== item.trim())) {
      ref2.current(first.join(""));
    }
  }, items);
  let items1 = [];
  for (let num2 = 0; num2 < num; num2 = num2 + 1) {
    if (num2 === num / 2) {
      obj = { style: null };
      obj[0] = tmp3.spacer;
      let arr = items1.push(callback2(closure_5, obj, "spacer"));
    }
    let items2 = [tmp3.inputWrapper, ];
    let inputWrapperError = null;
    let tmp13 = closure_5;
    if (tmp) {
      inputWrapperError = tmp3.inputWrapperError;
    }
    obj = { style: null, children: null };
    items2[1] = inputWrapperError;
    obj[0] = items2;
    obj1 = { ref: null, style: null, keyboardType: null, autoFocus: null, value: null, onKeyPress: null, onChangeText: null, selection: null, autoCapitalize: "characters", autoCorrect: false };
    obj1[0] = function ref(arg0) {
      ref.current[num2] = arg0;
    };
    let obj2 = { height: 42, width: null };
    obj2[1] = 252 / num;
    let items3 = [obj2, tmp3.input];
    obj1[1] = items3;
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
        HermesBuiltin.arraySpread(first, 0);
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
      const str4 = str.replace("-", "").trim().toUpperCase();
      let parts = str4.split("");
      if ("" === str4) {
        parts = [""];
      }
      const items = [...tmp2];
      const items1 = [num2, 1, ...parts];
      items.splice.apply(items1);
      callback(items.slice(0, num));
      const str3 = str.replace("-", "").trim();
    };
    let obj3 = { start: null, end: null };
    obj3[0] = first[num2].length;
    obj3[1] = first[num2].length;
    obj1[7] = obj3;
    obj[1] = callback2(num2(first[6]).TextInput, obj1);
    arr = items1.push(callback2(tmp13, obj, num2));
  }
  return callback2(closure_5, { style: tmp3.codeContainer, children: items1 });
};