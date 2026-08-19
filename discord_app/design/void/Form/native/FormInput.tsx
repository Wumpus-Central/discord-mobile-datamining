// discord_app/design/void/Form/native/FormInput.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { KeyboardThemes } from "../../../../Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
let obj = { color: ThemesDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
obj[1] = obj;
const createCacheKey = { color: ThemesDefault.colors.TEXT_DEFAULT };
obj[2] = createCacheKey;
let closure_5 = createCacheKey.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef((helpText, ref) => {
  ({ onChange, keyboardAppearance, value, title } = helpText);
  ({ keyboardType, style, inputTextStyle } = helpText);
  if (title === undefined) {
    title = "";
  }
  let str = helpText.helpText;
  if (str === undefined) {
    str = "";
  }
  ({ error, placeholder } = helpText);
  if (placeholder === undefined) {
    placeholder = "";
  }
  let flag = helpText.secureTextEntry;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = helpText.disabled;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = helpText.multiline;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = helpText.autoFocus;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let num = helpText.numberOfLines;
  if (num === undefined) {
    num = 1;
  }
  ({ clearButtonVisibility, autoCapitalize, autoCorrect, showBorder } = helpText);
  if (showBorder === undefined) {
    let obj = _require(ref[5]);
    showBorder = obj.isAndroid();
  }
  let flag5 = helpText.showCharactersRemaining;
  if (flag5 === undefined) {
    flag5 = false;
  }
  let flag6 = helpText.enableAndroidSanitizedInputWorkaround;
  if (flag6 === undefined) {
    flag6 = false;
  }
  let flag7 = helpText.allowRedesignTextInput;
  if (flag7 === undefined) {
    flag7 = true;
  }
  let onEndEditing = Object.assign(helpText, Object.create(null));
  _require = undefined;
  ref = undefined;
  let ref1;
  let color = callback();
  let TextArea = _require;
  obj = ref;
  _require(ref[6]);
  if (null != keyboardAppearance) {
    const tmp7 = ref1.useContext(TextArea(obj[8]).RedesignCompatContext) && flag7;
    _require = tmp7;
    let tmp8 = !flag6;
    if (flag6) {
      tmp8 = !TextArea(obj[5]).isAndroid();
      const TextAreaResult = TextArea(obj[5]);
    }
    let tmp9 = !tmp8;
    if (tmp8) {
      tmp9 = flag;
    }
    if (!flag6) {
      let str2 = keyboardType;
    } else {
      TextArea(obj[5]);
      str2 = "visible-password";
    }
    ref = obj4.useRef(null);
    ref1 = obj4.useRef(null);
    const imperativeHandle = obj4.useImperativeHandle(ref, () => ({
      isFocused() {
        const current = closure_0 ? closure_1 : closure_2.current;
        let isFocusedResult;
        if (current != null) {
          isFocusedResult = current.isFocused();
        }
        return true === isFocusedResult;
      },
      focus() {
        const current = closure_0 ? closure_1 : closure_2.current;
        if (current != null) {
          current.focus();
        }
      },
      blur() {
        const current = closure_0 ? closure_1 : closure_2.current;
        if (current != null) {
          current.blur();
        }
      },
      setText(arg0) {
        const current = closure_0 ? closure_1 : closure_2.current;
        if (current != null) {
          current.setText(arg0);
        }
      },
      getText() {
        const current = closure_0 ? closure_1 : closure_2.current;
        let str;
        if (current != null) {
          str = current.getText();
        }
        if (str == null) {
          str = "";
        }
        return str;
      },
      measure(arg0) {
        const current = closure_0 ? closure_1 : closure_2.current;
        if (current != null) {
          current.measure(arg0);
        }
      },
      measureInWindow(arg0) {
        const current = closure_0 ? closure_1 : closure_2.current;
        if (current != null) {
          current.measureInWindow(arg0);
        }
      },
      measureLayout(arg0, arg1, arg2) {
        const current = closure_0 ? closure_1 : closure_2.current;
        if (current != null) {
          current.measureLayout(arg0, arg1, arg2);
        }
      }
    }));
    if (tmp7) {
      if (flag3) {
        TextArea = TextArea(obj[9]).TextArea;
        obj = { ref: null, returnKeyType: "default", onChange: null, keyboardAppearance: null, keyboardType: null, placeholderTextColor: null, placeholder: null, secureTextEntry: null, isDisabled: null, autoFocus: null, autoCapitalize: null, autoCorrect: null, maxLength: null, onEndEditing: null, value: null, errorMessage: null };
        obj[0] = ref;
        obj[2] = onChange;
        obj[3] = keyboardAppearance;
        obj[4] = str2;
        color = color.placeholderText.color;
        obj[5] = color;
        obj[6] = placeholder;
        obj[7] = tmp9;
        obj[8] = flag2;
        obj[9] = flag4;
        obj[10] = autoCapitalize;
        obj[11] = autoCorrect;
        autoCorrect = onEndEditing.maxLength;
        obj[12] = autoCorrect;
        onEndEditing = onEndEditing.onEndEditing;
        obj[13] = onEndEditing;
        obj[14] = value;
        obj[15] = error;
        let tmp14Result = <TextArea ref={null} returnKeyType="default" onChange={null} keyboardAppearance={null} keyboardType={null} placeholderTextColor={null} placeholder={null} secureTextEntry={null} isDisabled={null} autoFocus={null} autoCapitalize={null} autoCorrect={null} maxLength={null} onEndEditing={null} value={null} errorMessage={null} />;
      } else {
        obj = { ref: null, returnKeyType: "done", onChange: null, keyboardAppearance: null, keyboardType: null, placeholderTextColor: null, placeholder: null, secureTextEntry: null, isDisabled: null, autoFocus: null, autoCapitalize: null, autoCorrect: null, onEndEditing: null, value: null, errorMessage: null };
        obj[0] = ref;
        obj[2] = onChange;
        obj[3] = keyboardAppearance;
        obj[4] = str2;
        obj[5] = color.placeholderText.color;
        obj[6] = placeholder;
        obj[7] = tmp9;
        obj[8] = flag2;
        obj[9] = flag4;
        obj[10] = autoCapitalize;
        obj[11] = autoCorrect;
        obj[12] = onEndEditing.onEndEditing;
        obj[13] = value;
        obj[14] = error;
        tmp14Result = jsx(TextArea(obj[10]).TextInput, { ref: null, returnKeyType: "done", onChange: null, keyboardAppearance: null, keyboardType: null, placeholderTextColor: null, placeholder: null, secureTextEntry: null, isDisabled: null, autoFocus: null, autoCapitalize: null, autoCorrect: null, onEndEditing: null, value: null, errorMessage: null });
      }
    } else {
      obj1 = { ref: null, inputTextColor: null, multiline: null, returnKeyType: null, onChangeText: null, keyboardAppearance: null, keyboardType: null, placeholderTextColor: null, title: null, helpText: null, error: null, placeholder: null, secureTextEntry: null, disabled: null, autoFocus: null, numberOfLines: null, autoCapitalize: null, autoCorrect: null, showBorder: null, showCharactersRemaining: null, style: null, inputTextStyle: null, value: null, clearButtonVisibility: null };
      obj1[0] = ref1;
      obj1[1] = color.inputText.color;
      obj1[2] = flag3;
      if (null != onEndEditing.returnKeyType) {
        let str3 = onEndEditing.returnKeyType;
      } else {
        str3 = "done";
        if (flag3) {
          str3 = "default";
        }
      }
      obj1[3] = str3;
      obj1[4] = onChange;
      obj1[5] = keyboardAppearance;
      obj1[6] = str2;
      obj1[7] = color.placeholderText.color;
      obj1[8] = title;
      obj1[9] = str;
      let str4 = error;
      if (error == null) {
        str4 = "";
      }
      obj1[10] = str4;
      obj1[11] = placeholder;
      obj1[12] = tmp9;
      obj1[13] = flag2;
      obj1[14] = flag4;
      obj1[15] = num;
      obj1[16] = autoCapitalize;
      obj1[17] = autoCorrect;
      obj1[18] = showBorder;
      obj1[19] = flag5;
      const items = [color.inputViewContainer, style];
      obj1[20] = items;
      obj1[21] = inputTextStyle;
      let str5 = value;
      if (value == null) {
        str5 = "";
      }
      obj1[22] = str5;
      if (flag3) {
        clearButtonVisibility = TextArea(obj[11]).ClearButtonVisibility.NEVER;
      }
      obj1[23] = clearButtonVisibility;
      const merged = Object.assign(onEndEditing);
      return jsx(TextArea(obj[11]).InputView, { ref: null, inputTextColor: null, multiline: null, returnKeyType: null, onChangeText: null, keyboardAppearance: null, keyboardType: null, placeholderTextColor: null, title: null, helpText: null, error: null, placeholder: null, secureTextEntry: null, disabled: null, autoFocus: null, numberOfLines: null, autoCapitalize: null, autoCorrect: null, showBorder: null, showCharactersRemaining: null, style: null, inputTextStyle: null, value: null, clearButtonVisibility: null });
    }
  } else {
    TextArea(obj[7]).isThemeDark(tmp4) ? KeyboardThemes.DARK : KeyboardThemes.LIGHT;
    const TextAreaResult2 = TextArea(obj[7]);
  }
});
const result = require("obj132").fileFinishedImporting("design/void/Form/native/FormInput.tsx");

export default forwardRefResult;