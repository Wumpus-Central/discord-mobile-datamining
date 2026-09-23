// discord_app/design/void/InputView/native/InputView.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import shared from "../../../shared.tsx";
import Text_Text from "../../../components/Text/native/Text.tsx";
import CircleXIcon from "../../../components/Icon/native/redesign/generated/CircleXIcon.tsx";
import components_BottomSheetTextInputDefault from "../../../../modules/action_sheet/native/components/BottomSheetTextInput.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = [
  "numberOfLines",
  "disableConstantNumberOfLines",
  "inputTextColor",
  "placeholder",
  "placeholderTextColor",
  "editable",
  "large",
  "accessibilityHint",
  "maxLength",
  "inActionSheet",
  "trailingButton",
  "clearButtonVisibility",
  "disabled",
  "style",
  "inputTextStyle",
  "onChangeText",
  "onFocus",
  "value",
];
get_ActivityIndicator = fn(17);
({
  View: hasOwnProperty,
  Pressable: metroRequire,
  TouchableWithoutFeedback: closure_7,
  Platform,
} = get_ActivityIndicator);
const Fonts = fn(1074).Fonts;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4827);
let obj2 = {
  disabled: { opacity: 0.5 },
  topContainer: { minHeight: 16, alignItems: "center", flexDirection: "row", marginBottom: 5, flexWrap: "wrap" },
  inputViewTitle: { marginRight: 5 },
  inputViewError: { fontSize: 10, color: nativeDefault.unsafe_rawColors.RED_400 },
  inputBorder: null,
  inputView: null,
  inputViewBorder: null,
  inputViewBorderActive: null,
  inputContainer: null,
  bottomContainer: null,
  charactersLength: null,
  closeIcon: null,
  clearButton: null,
  required: null,
};
let obj3 = { fontSize: 10, color: nativeDefault.unsafe_rawColors.RED_400 };
obj2.inputBorder = { backgroundColor: nativeDefault.colors.TEXT_MUTED };
let obj4 = { backgroundColor: nativeDefault.colors.TEXT_MUTED };
obj2.inputView = {
  fontSize: 16,
  paddingBottom: 0,
  paddingTop: 0,
  textAlignVertical: "top",
  flex: 1,
  color: fn(5744).DARK_PRIMARY_100_LIGHT_PRIMARY_500,
};
obj2.inputViewBorder = { marginTop: 8, height: 2 };
let obj5 = {
  fontSize: 16,
  paddingBottom: 0,
  paddingTop: 0,
  textAlignVertical: "top",
  flex: 1,
  color: fn(5744).DARK_PRIMARY_100_LIGHT_PRIMARY_500,
};
obj2.inputViewBorderActive = { backgroundColor: nativeDefault.unsafe_rawColors.TRANSPARENT };
obj2.inputContainer = { flexDirection: "row", alignItems: "center", position: "relative" };
obj2.bottomContainer = { marginTop: 5 };
let obj6 = { backgroundColor: nativeDefault.unsafe_rawColors.TRANSPARENT };
obj2.charactersLength = {
  alignSelf: "flex-end",
  fontFamily: Fonts.CODE_BOLD,
  color: fn(5744).DARK_PRIMARY_400_LIGHT_PRIMARY_300,
};
let obj7 = { alignSelf: "flex-end", fontFamily: Fonts.CODE_BOLD, color: fn(5744).DARK_PRIMARY_400_LIGHT_PRIMARY_300 };
obj2.closeIcon = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.clearButton = { position: "absolute", right: 6 };
let obj8 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.required = { color: nativeDefault.unsafe_rawColors.RED_400 };
let closure_11 = createStyles.createLegacyClassComponentStyles(obj2);
const obj10 = { NEVER: "never", WITH_CONTENT: "with-content", ALWAYS: "always" };
const PureComponent = noop.PureComponent;
class InputView extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.state = {
      active: false,
      value: applyArgumentsResult.props.value,
      valueProp: applyArgumentsResult.props.value,
    };
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
        const onChangeText = applyArgumentsResult.props.onChangeText;
        if (onChangeText != null) {
          onChangeText(closure_0);
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
    applyArgumentsResult.setText = function setText(text) {
      const _ref = applyArgumentsResult._ref;
      if (_ref != null) {
        const obj = { text };
        _ref.setNativeProps(obj);
      }
    };
    applyArgumentsResult.setRef = function setRef(_ref) {
      applyArgumentsResult._ref = _ref;
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
      const obj = { value, valueProp: value };
    }
    return { valueProp: value };
  }
};
prototype["renderBorder"] = function renderBorder() {
  const tmp = closure_11(this.context);
  const props = this.props;
  let backgroundColor = props.borderColor;
  if (props.showBorder) {
    if (backgroundColor == null) {
      backgroundColor = tmp.inputBorder.backgroundColor;
    }
    const items = [tmp.inputViewBorder, ,];
    const obj = { backgroundColor };
    items[1] = obj;
    let inputViewBorderActive = this.state.active;
    if (inputViewBorderActive) {
      inputViewBorderActive = tmp.inputViewBorderActive;
    }
    const obj2 = { style: null };
    items[2] = inputViewBorderActive;
    obj2.style = items;
    return React7(hasOwnProperty, obj2);
  } else {
    return null;
  }
};
prototype["renderTopContainer"] = function renderTopContainer() {
  const tmp = closure_11(this.context);
  const props = this.props;
  ({ error, title, errorProps, helpText } = props);
  let tmp2 = null != error;
  ({ showTopContainer, errorStyles, required } = props);
  if (tmp2) {
    tmp2 = "" !== error;
  }
  let tmp3;
  if (tmp2) {
    const obj = {};
    const merged = Object.assign(errorProps);
    const items = [tmp.inputViewError, errorStyles];
    obj.style = items;
    const items1 = ["(", error, ")"];
    obj.children = items1;
    tmp3 = closure_1_10(native.LegacyText, obj);
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
    const obj2 = { variant: "heading-md/semibold", color: str5, style: null, children: null };
    const items2 = [tmp.inputViewTitle];
    obj2.style = items2;
    obj2.children = title;
    tmp12Result = React7(Text_Text.Text, obj2);
  }
  let tmp15 = null != helpText;
  if (tmp15) {
    tmp15 = "" !== helpText;
  }
  let tmp16;
  if (tmp15) {
    const obj3 = { variant: "text-xs/medium", children: helpText };
    tmp16 = React7(Text_Text.Text, obj3);
  }
  const obj4 = { style: tmp.topContainer, children: null };
  const items3 = [tmp12Result, tmp16, ,];
  let tmp22 = null == tmp3;
  if (tmp22) {
    tmp22 = required;
  }
  if (tmp22) {
    const obj5 = { style: tmp.required, children: "*" };
    tmp22 = React7(native.LegacyText, obj5);
  }
  items3[2] = tmp22;
  items3[3] = tmp3;
  obj4.children = items3;
  return closure_1_10(hasOwnProperty, obj4);
};
prototype["renderBottomContainer"] = function renderBottomContainer() {
  const self = this;
  const tmp = closure_11(this.context);
  const props = this.props;
  const maxLength = props.maxLength;
  let tmp2 = null;
  if (props.showCharactersRemaining) {
    tmp2 = null;
    if (null != maxLength) {
      const obj = { style: tmp.bottomContainer, children: null };
      const obj2 = { accessible: true, style: tmp.charactersLength, accessibilityLabel: null, children: null };
      const intl = util.intl;
      const obj3 = { remainingCharacters: maxLength - self.getText().length };
      obj2.accessibilityLabel = intl.formatToPlainString(util.t.fR1cof, obj3);
      obj2.children = maxLength - self.getText().length;
      obj.children = React7(native.LegacyText, obj2);
      tmp2 = React7(hasOwnProperty, obj);
    }
  }
  return tmp2;
};
prototype["renderTrailingButton"] = function renderTrailingButton() {
  const self = this;
  ({ trailingButton, clearButtonVisibility, clearButtonAccessibilityLabel } = this.props);
  if (null == trailingButton) {
    if (clearButtonVisibility === obj10.ALWAYS) {
      const obj = {
        hitSlop: 16,
        style: tmp.clearButton,
        onPress: self.handleClear,
        accessible: true,
        accessibilityRole: "button",
        accessibilityLabel: null,
        children: null,
      };
      if (clearButtonAccessibilityLabel == null) {
        const intl = util.intl;
        clearButtonAccessibilityLabel = intl.string(util.t.VkKicb);
      }
      obj.accessibilityLabel = clearButtonAccessibilityLabel;
      obj.children = React7(CircleXIcon.CircleXIcon, { size: "sm" });
      let tmp3Result = React7(timestampProducer, obj);
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
  ({
    numberOfLines,
    inputTextColor,
    placeholder,
    placeholderTextColor,
    large,
    maxLength,
    trailingButton,
    clearButtonVisibility,
    style,
    onChangeText,
    onFocus,
    value,
  } = props);
  ({ disableConstantNumberOfLines, editable, accessibilityHint, inActionSheet, disabled, inputTextStyle } = props);
  const tmp2 = _objectWithoutProperties(props, closure_3);
  const items = [closure_11(this.context).inputView, , , ,];
  if (disableConstantNumberOfLines) {
    let num2 = 21;
    if (large) {
      num2 = 30;
    }
    const obj2 = { maxHeight: num2 * numberOfLines };
    let obj = obj2;
  } else {
    let num = 21;
    if (large) {
      num = 30;
    }
    obj = { minHeight: num * numberOfLines };
  }
  items[1] = obj;
  if (null != inputTextColor) {
    const obj3 = { color: inputTextColor };
    let obj4 = obj3;
  } else {
    obj4 = {};
  }
  items[2] = obj4;
  if (large) {
    const obj5 = { fontSize: 25, fontFamily: Fonts.PRIMARY_SEMIBOLD };
    let obj6 = obj5;
  } else {
    obj6 = {};
  }
  items[3] = obj6;
  items[4] = inputTextStyle;
  if (placeholderTextColor != null) {
    let formatToPlainStringResult;
    if (null != maxLength) {
      const intl = util.intl;
      const obj8 = { maxLength };
      formatToPlainStringResult = intl.formatToPlainString(util.t["+DFxLc"], obj8);
    }
    const items1 = [formatToPlainStringResult, accessibilityHint];
    const _Boolean = Boolean;
    const found = items1.filter(Boolean);
    const joined = found.join(",");
    if (inActionSheet) {
      let TextInput = components_BottomSheetTextInputDefault;
    } else {
      TextInput = native.TextInput;
    }
    const obj9 = {
      accessibilityState: null,
      style: null,
      ref: null,
      onChangeText: null,
      onFocus: null,
      onBlur: null,
      onEndEditing: null,
      onSubmitEditing: null,
      value: null,
      clearButtonMode: "never",
      placeholder: null,
      placeholderTextColor: null,
      editable: null,
      maxLength: null,
      accessibilityHint: null,
    };
    const obj11 = { disabled };
    obj9.accessibilityState = obj11;
    obj9.style = items;
    ({
      setRef: obj10.ref,
      handleChangeText: obj10.onChangeText,
      handleFocus: obj10.onFocus,
      handleBlur: obj10.onBlur,
      handleEndEditing: obj10.onEndEditing,
      handleSubmitEditing: obj10.onSubmitEditing,
    } = self);
    obj9.value = this.state.value;
    obj9.placeholder = placeholder;
    obj9.placeholderTextColor = placeholderTextColor;
    obj9.editable = editable;
    obj9.maxLength = maxLength;
    obj9.accessibilityHint = joined;
    const merged = Object.assign(tmp2);
    return React7(TextInput, obj9);
  } else {
    const unsafe_rawColors = nativeDefault.unsafe_rawColors;
    const isThemeDarkResult = shared.isThemeDark(self.context.theme);
  }
  const tmp = closure_11(this.context);
};
prototype["render"] = function render() {
  const self = this;
  const tmp = closure_11(this.context);
  const props = this.props;
  const disabled = props.disabled;
  const obj = { accessible: false, onPress: this.focus, children: null };
  const items = [props.style];
  let disabled2 = disabled;
  if (disabled) {
    disabled2 = tmp.disabled;
  }
  const obj2 = { style: items, pointerEvents: null, children: null };
  items[1] = disabled2;
  let str = "auto";
  if (disabled) {
    str = "none";
  }
  obj2.pointerEvents = str;
  const items1 = [self.renderTopContainer(), , , ,];
  const obj3 = { style: null, children: null };
  const items2 = [tmp.inputContainer, props.inputContainerStyle];
  obj3.style = items2;
  const items3 = [self.renderTextView(), self.renderTrailingButton()];
  obj3.children = items3;
  items1[1] = closure_1_10(hasOwnProperty, obj3);
  items1[2] = PlatformUtils.isAndroid() && self.renderBorder();
  items1[3] = self.renderBottomContainer();
  const tmp8 = PlatformUtils.isAndroid() && self.renderBorder();
  const isAndroidResult = PlatformUtils.isAndroid();
  let renderBorderResult = !isAndroidResult;
  if (!isAndroidResult) {
    renderBorderResult = self.renderBorder();
  }
  items1[4] = renderBorderResult;
  obj2.children = items1;
  obj.children = closure_1_10(hasOwnProperty, obj2);
  return React7(React5, obj);
};
InputView.contextType = fn(4533).ThemeContext;
InputView.defaultProps = {
  showBorder: true,
  value: "",
  returnKeyType: "next",
  disabled: false,
  autoFocus: false,
  multiline: false,
  numberOfLines: 1,
  showTopContainer: true,
  showCharactersRemaining: false,
  clearButtonVisibility: "never",
  inActionSheet: false,
};
const size = fn(2);
const result = size.fileFinishedImporting("design/void/InputView/native/InputView.tsx");

export default InputView;
export const ClearButtonVisibility = obj10;
