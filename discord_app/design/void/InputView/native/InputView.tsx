// === Module 13603: Fonts ===

// Module 13603 (Fonts)
import set from "set" /* 500 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import Text from "Text" /* 4739 */;
import CircleXIcon from "CircleXIcon" /* 7379 */;
import BottomSheetTextInputDefault from "BottomSheetTextInput" /* 11402 */;
import closure_4 from "_objectWithoutProperties" /* 109 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { Fonts } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
let closure_3 = ["numberOfLines", "disableConstantNumberOfLines", "inputTextColor", "placeholder", "placeholderTextColor", "editable", "large", "accessibilityHint", "maxLength", "inActionSheet", "trailingButton", "clearButtonVisibility", "disabled", "style", "inputTextStyle", "onChangeText", "onFocus", "value"];
({ View: c5, Pressable: closure_6, TouchableWithoutFeedback: error, Platform } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { disabled: { opacity: 0.5 }, topContainer: { minHeight: 16, alignItems: "center", flexDirection: "row", marginBottom: 5, flexWrap: "wrap" }, inputViewTitle: { marginRight: 5 }, inputViewError: null, inputBorder: null, inputView: null, inputViewBorder: null, inputViewBorderActive: null, inputContainer: null, bottomContainer: null, charactersLength: null, closeIcon: null, clearButton: null, required: null };
createCacheKey = { fontSize: 10, color: ThemesDefault.unsafe_rawColors.RED_400 };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { backgroundColor: ThemesDefault.colors.TEXT_MUTED };
let obj1 = { backgroundColor: ThemesDefault.colors.TEXT_MUTED };
createCacheKey[5] = { fontSize: 16, paddingBottom: 0, paddingTop: 0, textAlignVertical: "top", flex: 1, color: require("result").DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
createCacheKey[6] = { marginTop: 8, height: 2 };
let obj2 = { fontSize: 16, paddingBottom: 0, paddingTop: 0, textAlignVertical: "top", flex: 1, color: require("result").DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
createCacheKey[7] = { backgroundColor: ThemesDefault.unsafe_rawColors.TRANSPARENT };
createCacheKey[8] = { flexDirection: "row", alignItems: "center", position: "relative" };
createCacheKey[9] = { marginTop: 5 };
let obj3 = { backgroundColor: ThemesDefault.unsafe_rawColors.TRANSPARENT };
createCacheKey[10] = { alignSelf: "flex-end", fontFamily: Fonts.CODE_BOLD, color: require("result").DARK_PRIMARY_400_LIGHT_PRIMARY_300 };
let obj4 = { alignSelf: "flex-end", fontFamily: Fonts.CODE_BOLD, color: require("result").DARK_PRIMARY_400_LIGHT_PRIMARY_300 };
createCacheKey[11] = { tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[12] = { position: "absolute", right: 6 };
let obj5 = { tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[13] = { color: ThemesDefault.unsafe_rawColors.RED_400 };
let closure_11 = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
const obj7 = { NEVER: "never", WITH_CONTENT: "with-content", ALWAYS: "always" };
const PureComponent = importAllResult.PureComponent;
class InputView extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.state = { active: false, value: applyArgumentsResult.props.value, valueProp: applyArgumentsResult.props.value };
    applyArgumentsResult._ref = undefined;
    applyArgumentsResult.handleFocus = function handleFocus() {
      const onFocus = applyArgumentsResult.props.onFocus;
      if (onFocus != null) {
        onFocus();
      }
      applyArgumentsResult.setState({ active: true });
    };
    applyArgumentsResult.handleBlur = function handleBlur() {
      applyArgumentsResult.setState({ active: false });
    };
    applyArgumentsResult.handleChangeText = function handleChangeText(value) {
      value.setState({ value }, () => {
        const onChangeText = value.props.onChangeText;
        if (onChangeText != null) {
          onChangeText(value);
        }
      });
    };
    applyArgumentsResult.handleClear = function handleClear() {
      applyArgumentsResult.handleChangeText("");
    };
    applyArgumentsResult.handleEndEditing = function handleEndEditing() {
      const onEnd = applyArgumentsResult.props.onEnd;
      if (onEnd != null) {
        onEnd(applyArgumentsResult.state.value);
      }
    };
    applyArgumentsResult.handleSubmitEditing = function handleSubmitEditing() {
      const onNext = applyArgumentsResult.props.onNext;
      if (onNext != null) {
        onNext();
      }
    };
    applyArgumentsResult.getText = function getText() {
      return applyArgumentsResult.state.value;
    };
    applyArgumentsResult.isFocused = function isFocused() {
      const _ref = applyArgumentsResult._ref;
      let flag;
      if (_ref != null) {
        flag = _ref.isFocused();
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    };
    applyArgumentsResult.focus = function focus() {
      const _ref = applyArgumentsResult._ref;
      if (_ref != null) {
        _ref.focus();
      }
    };
    applyArgumentsResult.blur = function blur() {
      const _ref = applyArgumentsResult._ref;
      if (_ref != null) {
        _ref.blur();
      }
    };
    applyArgumentsResult.setText = function setText(arg0) {
      const _ref = applyArgumentsResult._ref;
      if (_ref != null) {
        const obj = { text: null };
        obj[0] = arg0;
        _ref.setNativeProps(obj);
      }
    };
    applyArgumentsResult.setRef = function setRef(_ref) {
      closure_0._ref = _ref;
    };
    applyArgumentsResult.measure = function measure(arg0) {
      const _ref = applyArgumentsResult._ref;
      if (_ref != null) {
        _ref.measure(arg0);
      }
    };
    applyArgumentsResult.measureInWindow = function measureInWindow(arg0) {
      const _ref = applyArgumentsResult._ref;
      if (_ref != null) {
        _ref.measureInWindow(arg0);
      }
    };
    applyArgumentsResult.measureLayout = function measureLayout(arg0, arg1, arg2) {
      const _ref = applyArgumentsResult._ref;
      if (_ref != null) {
        _ref.measureLayout(arg0, arg1, arg2);
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = InputView.prototype;
InputView["getDerivedStateFromProps"] = function getDerivedStateFromProps(value, valueProp) {
  value = value.value;
  if (value !== valueProp.valueProp) {
    if (value !== valueProp.value) {
      const obj = { value: null, valueProp: null };
      obj[0] = value;
      obj[1] = value;
    }
    return { valueProp: value };
  }
};
prototype["renderBorder"] = function renderBorder() {
  const tmp = callback4(this.context);
  const props = this.props;
  let backgroundColor = props.borderColor;
  if (props.showBorder) {
    if (backgroundColor == null) {
      backgroundColor = tmp.inputBorder.backgroundColor;
    }
    const items = [tmp.inputViewBorder, , ];
    let obj = { backgroundColor: null };
    obj[0] = backgroundColor;
    items[1] = obj;
    let inputViewBorderActive = this.state.active;
    if (inputViewBorderActive) {
      inputViewBorderActive = tmp.inputViewBorderActive;
    }
    obj = { style: null };
    items[2] = inputViewBorderActive;
    obj[0] = items;
    return closure_9(closure_5, obj);
  } else {
    return null;
  }
};
prototype["renderTopContainer"] = function renderTopContainer() {
  const tmp = callback4(this.context);
  const props = this.props;
  ({ error, title, errorProps, helpText } = props);
  let tmp2 = null != error;
  ({ showTopContainer, errorStyles, required } = props);
  if (tmp2) {
    tmp2 = "" !== error;
  }
  let tmp3;
  if (tmp2) {
    let obj = {};
    const merged = Object.assign(errorProps);
    const items = [tmp.inputViewError, errorStyles];
    obj.style = items;
    const items1 = ["(", error, ")"];
    obj.children = items1;
    tmp3 = callback3(Button.LegacyText, obj);
  }
  let tmp10 = null != title;
  if (tmp10) {
    tmp10 = "" !== title;
  }
  let tmp12Result;
  if (tmp10) {
    let str5 = "text-default";
    if (null !== error) {
      str5 = "text-default";
      if ("" !== error) {
        str5 = "text-feedback-critical";
      }
    }
    obj = { variant: "heading-md/semibold", color: null, style: null, children: null };
    obj[1] = str5;
    const items2 = [tmp.inputViewTitle];
    obj[2] = items2;
    obj[3] = title;
    tmp12Result = callback2(Text.Text, obj);
    const tmp12 = callback2;
  }
  let tmp15 = null != helpText;
  if (tmp15) {
    tmp15 = "" !== helpText;
  }
  let tmp16;
  if (tmp15) {
    obj = { variant: "text-xs/medium", children: null };
    obj[1] = helpText;
    tmp16 = callback2(Text.Text, obj);
  }
  obj1 = { style: tmp.topContainer, children: null };
  const items3 = [tmp12Result, tmp16, , ];
  let tmp22 = null == tmp3;
  if (tmp22) {
    tmp22 = required;
  }
  if (tmp22) {
    const obj2 = { style: null, children: "*" };
    obj2[0] = tmp.required;
    tmp22 = callback2(Button.LegacyText, obj2);
  }
  items3[2] = tmp22;
  items3[3] = tmp3;
  obj1[1] = items3;
  return callback3(closure_5, obj1);
};
prototype["renderBottomContainer"] = function renderBottomContainer() {
  const self = this;
  const tmp = callback4(this.context);
  const props = this.props;
  const maxLength = props.maxLength;
  let tmp2 = null;
  if (props.showCharactersRemaining) {
    tmp2 = null;
    if (null != maxLength) {
      let obj = { style: null, children: null };
      obj[0] = tmp.bottomContainer;
      obj = { accessible: true, style: null, accessibilityLabel: null, children: null };
      obj[1] = tmp.charactersLength;
      const intl = getSystemLocale.intl;
      obj = { remainingCharacters: null };
      obj[0] = maxLength - self.getText().length;
      obj[2] = intl.formatToPlainString(getSystemLocale.t.fR1cof, obj);
      obj[3] = maxLength - self.getText().length;
      obj[1] = callback2(Button.LegacyText, obj);
      tmp2 = callback2(closure_5, obj);
    }
  }
  return tmp2;
};
prototype["renderTrailingButton"] = function renderTrailingButton() {
  const self = this;
  ({ trailingButton, clearButtonVisibility, clearButtonAccessibilityLabel } = this.props);
  if (null == trailingButton) {
    if (clearButtonVisibility === obj7.ALWAYS) {
      const obj = { hitSlop: 16, style: null, onPress: null, accessible: true, accessibilityRole: "button", accessibilityLabel: null, children: null };
      obj[1] = tmp.clearButton;
      obj[2] = self.handleClear;
      if (clearButtonAccessibilityLabel == null) {
        const intl = getSystemLocale.intl;
        clearButtonAccessibilityLabel = intl.string(getSystemLocale.t.VkKicb);
      }
      obj[5] = clearButtonAccessibilityLabel;
      obj[6] = closure_9(CircleXIcon.CircleXIcon, { size: "sm" });
      let tmp3Result = tmp3(closure_6, obj);
      const tmp4 = closure_6;
    } else {
      tmp3Result = null;
      if (clearButtonVisibility === tmp9.WITH_CONTENT) {
        tmp3Result = null;
      }
    }
    trailingButton = tmp3Result;
  }
  return trailingButton;
};
prototype["renderTextView"] = function renderTextView() {
  const self = this;
  const props = this.props;
  ({ numberOfLines, inputTextColor, placeholder, placeholderTextColor, large, maxLength, trailingButton, clearButtonVisibility, style, onChangeText, onFocus, value } = props);
  ({ disableConstantNumberOfLines, editable, accessibilityHint, inActionSheet, disabled, inputTextStyle } = props);
  const tmp2 = callback(props, closure_3);
  const items = [callback4(this.context).inputView, , , , ];
  if (disableConstantNumberOfLines) {
    let num2 = 21;
    if (large) {
      num2 = 30;
    }
    let obj = { maxHeight: null };
    obj[0] = num2 * numberOfLines;
  } else {
    let num = 21;
    if (large) {
      num = 30;
    }
    obj = { minHeight: null };
    obj[0] = num * numberOfLines;
  }
  items[1] = obj;
  if (null != inputTextColor) {
    obj = { color: null };
    obj[0] = inputTextColor;
    obj1 = obj;
  } else {
    obj1 = {};
  }
  items[2] = obj1;
  if (large) {
    const obj2 = { fontSize: 25, fontFamily: null };
    obj2[1] = Fonts.PRIMARY_SEMIBOLD;
    let obj3 = obj2;
  } else {
    obj3 = {};
  }
  items[3] = obj3;
  items[4] = inputTextStyle;
  if (placeholderTextColor != null) {
    let formatToPlainStringResult;
    if (null != maxLength) {
      const intl = getSystemLocale.intl;
      const obj4 = { maxLength: null };
      obj4[0] = maxLength;
      formatToPlainStringResult = intl.formatToPlainString(getSystemLocale.t["+DFxLc"], obj4);
    }
    const items1 = [formatToPlainStringResult, accessibilityHint];
    const _Boolean = Boolean;
    const found = items1.filter(Boolean);
    const joined = found.join(",");
    if (inActionSheet) {
      let TextInput = BottomSheetTextInputDefault;
    } else {
      TextInput = Button.TextInput;
    }
    const obj5 = { accessibilityState: null, style: null, ref: null, onChangeText: null, onFocus: null, onBlur: null, onEndEditing: null, onSubmitEditing: null, value: null, clearButtonMode: "never", placeholder: null, placeholderTextColor: null, editable: null, maxLength: null, accessibilityHint: null };
    let obj6 = { disabled: null };
    obj6[0] = disabled;
    obj5[0] = obj6;
    obj5[1] = items;
    ({ setRef: obj10[2], handleChangeText: obj10[3], handleFocus: obj10[4], handleBlur: obj10[5], handleEndEditing: obj10[6], handleSubmitEditing: obj10[7] } = self);
    obj5[8] = this.state.value;
    obj5[10] = placeholder;
    obj5[11] = placeholderTextColor;
    obj5[12] = editable;
    obj5[13] = maxLength;
    obj5[14] = joined;
    const merged = Object.assign(tmp2);
    return closure_9(TextInput, obj5);
  } else {
    obj6 = AccessibilityAnnouncer;
    const unsafe_rawColors = ThemesDefault.unsafe_rawColors;
    const isThemeDarkResult = obj6.isThemeDark(self.context.theme);
  }
};
prototype["render"] = function render() {
  const self = this;
  const tmp = callback4(this.context);
  const props = this.props;
  const disabled = props.disabled;
  let obj = { accessible: false, onPress: this.focus, children: null };
  const items = [props.style, ];
  let disabled2 = disabled;
  if (disabled) {
    disabled2 = tmp.disabled;
  }
  obj = { style: items, pointerEvents: null, children: null };
  items[1] = disabled2;
  let str = "auto";
  if (disabled) {
    str = "none";
  }
  obj[1] = str;
  const items1 = [self.renderTopContainer(), , , , ];
  obj = { style: items2, children: null };
  items2 = [tmp.inputContainer, props.inputContainerStyle];
  const items3 = [self.renderTextView(), self.renderTrailingButton()];
  obj[1] = items3;
  items1[1] = closure_10(closure_5, obj);
  const obj4 = set;
  const tmp2 = closure_9;
  const tmp3 = closure_7;
  const tmp6 = require;
  items1[2] = set.isAndroid() && self.renderBorder();
  items1[3] = self.renderBottomContainer();
  const tmp8 = set.isAndroid() && self.renderBorder();
  const isAndroidResult = set.isAndroid();
  let renderBorderResult = !isAndroidResult;
  if (!isAndroidResult) {
    renderBorderResult = self.renderBorder();
  }
  items1[4] = renderBorderResult;
  obj[2] = items1;
  obj[2] = closure_10(closure_5, obj);
  return tmp2(tmp3, obj);
};
InputView.contextType = require("ManaContext").ThemeContext;
InputView.defaultProps = { showBorder: true, value: "", returnKeyType: "next", disabled: false, autoFocus: false, multiline: false, numberOfLines: 1, showTopContainer: true, showCharactersRemaining: false, clearButtonVisibility: "never", inActionSheet: false };
let obj6 = { color: ThemesDefault.unsafe_rawColors.RED_400 };
const result = require("set").fileFinishedImporting("design/void/InputView/native/InputView.tsx");

export default InputView;
export const ClearButtonVisibility = obj7;