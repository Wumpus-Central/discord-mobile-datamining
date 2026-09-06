// === Module 8601: FormInput ===

// Module 8601 (FormInput)
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import native2 from "native" /* 4271 */;
import noop from "module_19" /* 19 */;

const native = TextArea(1178);
const shared = TextArea(4411);
const RedesignCompat = TextArea(5686);
const TextInput = TextArea(6606);
const TextArea2 = TextArea(7085);
require = fn;
const KeyboardThemes = fn(1074).KeyboardThemes;
const jsx = fn(21).jsx;
fn(4560);
let obj = { inputViewContainer: { paddingVertical: 13, paddingHorizontal: 15 }, placeholderText: null, inputText: null };
obj = { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
obj.placeholderText = obj;
const createStyles = { color: nativeDefault.colors.TEXT_DEFAULT };
obj.inputText = createStyles;
let closure_5 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormInput.tsx");

export default noop.forwardRef((helpText, arg1) => {
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
    let obj = PlatformUtils;
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
  let onEndEditing = Object.assign(helpText, Object.assign({ onChange: 0, keyboardAppearance: 0, keyboardType: 0, style: 0, inputTextStyle: 0, value: 0, title: 0, helpText: 0, error: 0, placeholder: 0, secureTextEntry: 0, disabled: 0, multiline: 0, autoFocus: 0, numberOfLines: 0, clearButtonVisibility: 0, autoCapitalize: 0, autoCorrect: 0, showBorder: 0, showCharactersRemaining: 0, enableAndroidSanitizedInputWorkaround: 0, allowRedesignTextInput: 0 }));
  closure_0 = undefined;
  let ref;
  let ref1;
  let color = closure_5();
  let TextArea = require;
  obj = dependencyMap;
  native2;
  if (null != keyboardAppearance) {
    const tmp7 = noop.useContext(RedesignCompat.RedesignCompatContext) && flag7;
    closure_0 = tmp7;
    let tmp8 = !flag6;
    if (flag6) {
      tmp8 = !PlatformUtils.isAndroid();
      const TextAreaResult = PlatformUtils;
    }
    let tmp9 = !tmp8;
    if (tmp8) {
      tmp9 = flag;
    }
    if (!flag6) {
      let str2 = keyboardType;
    } else {
      PlatformUtils;
      str2 = "visible-password";
    }
    ref = noop.useRef(null);
    ref1 = noop.useRef(null);
    const imperativeHandle = noop.useImperativeHandle(arg1, () => ({
      isFocused() {
        const current = closure_1_0 ? ref : ref1.current;
        let isFocusedResult;
        if (current != null) {
          isFocusedResult = current.isFocused();
        }
        return true === isFocusedResult;
      },
      focus() {
        const current = closure_1_0 ? ref : ref1.current;
        if (current != null) {
          current.focus();
        }
      },
      blur() {
        const current = closure_1_0 ? ref : ref1.current;
        if (current != null) {
          current.blur();
        }
      },
      setText(arg0) {
        const current = closure_1_0 ? ref : ref1.current;
        if (current != null) {
          current.setText(arg0);
        }
      },
      getText() {
        const current = closure_1_0 ? ref : ref1.current;
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
        const current = closure_1_0 ? ref : ref1.current;
        if (current != null) {
          current.measure(arg0);
        }
      },
      measureInWindow(arg0) {
        const current = closure_1_0 ? ref : ref1.current;
        if (current != null) {
          current.measureInWindow(arg0);
        }
      },
      measureLayout(arg0, arg1, arg2) {
        const current = closure_1_0 ? ref : ref1.current;
        if (current != null) {
          current.measureLayout(arg0, arg1, arg2);
        }
      }
    }));
    if (tmp7) {
      if (flag3) {
        TextArea = TextArea2.TextArea;
        obj = { ref, returnKeyType: "default", onChange, keyboardAppearance, keyboardType: str2, placeholderTextColor: null, placeholder: null, secureTextEntry: null, isDisabled: null, autoFocus: null, autoCapitalize: null, autoCorrect: null, maxLength: null, onEndEditing: null, value: null, errorMessage: null };
        color = color.placeholderText.color;
        obj.placeholderTextColor = color;
        obj.placeholder = placeholder;
        obj.secureTextEntry = tmp9;
        obj.isDisabled = flag2;
        obj.autoFocus = flag4;
        obj.autoCapitalize = autoCapitalize;
        obj.autoCorrect = autoCorrect;
        autoCorrect = onEndEditing.maxLength;
        obj.maxLength = autoCorrect;
        onEndEditing = onEndEditing.onEndEditing;
        obj.onEndEditing = onEndEditing;
        obj.value = value;
        obj.errorMessage = error;
        let tmp14Result = <TextArea ref={ref} returnKeyType="default" onChange={onChange} keyboardAppearance={keyboardAppearance} keyboardType={str2} placeholderTextColor={null} placeholder={null} secureTextEntry={null} isDisabled={null} autoFocus={null} autoCapitalize={null} autoCorrect={null} maxLength={null} onEndEditing={null} value={null} errorMessage={null} />;
      } else {
        obj = { ref, returnKeyType: "done", onChange, keyboardAppearance, keyboardType: str2, placeholderTextColor: color.placeholderText.color, placeholder, secureTextEntry: tmp9, isDisabled: flag2, autoFocus: flag4, autoCapitalize, autoCorrect, onEndEditing: onEndEditing.onEndEditing, value, errorMessage: error };
        tmp14Result = jsx(TextInput.TextInput, { ref, returnKeyType: "done", onChange, keyboardAppearance, keyboardType: str2, placeholderTextColor: color.placeholderText.color, placeholder, secureTextEntry: tmp9, isDisabled: flag2, autoFocus: flag4, autoCapitalize, autoCorrect, onEndEditing: onEndEditing.onEndEditing, value, errorMessage: error });
      }
    } else {
      const obj1 = { ref: ref1, inputTextColor: color.inputText.color, multiline: flag3, returnKeyType: null, onChangeText: null, keyboardAppearance: null, keyboardType: null, placeholderTextColor: null, title: null, helpText: null, error: null, placeholder: null, secureTextEntry: null, disabled: null, autoFocus: null, numberOfLines: null, autoCapitalize: null, autoCorrect: null, showBorder: null, showCharactersRemaining: null, style: null, inputTextStyle: null, value: null, clearButtonVisibility: null };
      if (null != onEndEditing.returnKeyType) {
        let str3 = onEndEditing.returnKeyType;
      } else {
        str3 = "done";
        if (flag3) {
          str3 = "default";
        }
      }
      obj1.returnKeyType = str3;
      obj1.onChangeText = onChange;
      obj1.keyboardAppearance = keyboardAppearance;
      obj1.keyboardType = str2;
      obj1.placeholderTextColor = color.placeholderText.color;
      obj1.title = title;
      obj1.helpText = str;
      let str4 = error;
      if (error == null) {
        str4 = "";
      }
      obj1.error = str4;
      obj1.placeholder = placeholder;
      obj1.secureTextEntry = tmp9;
      obj1.disabled = flag2;
      obj1.autoFocus = flag4;
      obj1.numberOfLines = num;
      obj1.autoCapitalize = autoCapitalize;
      obj1.autoCorrect = autoCorrect;
      obj1.showBorder = showBorder;
      obj1.showCharactersRemaining = flag5;
      const items = [color.inputViewContainer, style];
      obj1.style = items;
      obj1.inputTextStyle = inputTextStyle;
      let str5 = value;
      if (value == null) {
        str5 = "";
      }
      obj1.value = str5;
      if (flag3) {
        clearButtonVisibility = native.ClearButtonVisibility.NEVER;
      }
      obj1.clearButtonVisibility = clearButtonVisibility;
      const merged = Object.assign(onEndEditing);
      return jsx(native.InputView, { ref: ref1, inputTextColor: color.inputText.color, multiline: flag3, returnKeyType: null, onChangeText: null, keyboardAppearance: null, keyboardType: null, placeholderTextColor: null, title: null, helpText: null, error: null, placeholder: null, secureTextEntry: null, disabled: null, autoFocus: null, numberOfLines: null, autoCapitalize: null, autoCorrect: null, showBorder: null, showCharactersRemaining: null, style: null, inputTextStyle: null, value: null, clearButtonVisibility: null });
    }
  } else {
    shared.isThemeDark(tmp4) ? KeyboardThemes.DARK : KeyboardThemes.LIGHT;
    const TextAreaResult2 = shared;
  }
});