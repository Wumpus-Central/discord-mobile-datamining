// discord_app/design/void/InputView/native/InputView.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import native from "../../native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import native2 from "../../../../../discord_common/js/packages/design/native.tsx";
import shared from "../../../shared.tsx";
import CircleXIcon from "../../../components/Icon/native/redesign/generated/CircleXIcon.tsx";
import Text_Text from "../../../components/Text/native/Text.tsx";
import LegacyTokens from "../../../migrations/native/LegacyTokens.tsx";
import components_BottomSheetTextInputDefault from "../../../../modules/action_sheet/native/components/BottomSheetTextInput.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let Platform;
let c10;
let c9;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
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
({
  View: hasOwnProperty,
  Pressable: metroRequire,
  TouchableWithoutFeedback: metroImportDefault,
  Platform,
} = react_native);
const Fonts = Constants.Fonts;
({ jsx: c9, jsxs: c10 } = Fragment);
let obj = {
  disabled: { opacity: 0.5 },
  topContainer: { minHeight: 16, alignItems: "center", flexDirection: "row", marginBottom: 5, flexWrap: "wrap" },
  inputViewTitle: { marginRight: 5 },
  inputViewError: obj2,
  inputBorder: obj3,
  inputView: obj4,
  inputViewBorder: { marginTop: 8, height: 2 },
  inputViewBorderActive: obj5,
  inputContainer: { flexDirection: "row", alignItems: "center", position: "relative" },
  bottomContainer: { marginTop: 5 },
  charactersLength: obj6,
  closeIcon: obj7,
  clearButton: { position: "absolute", right: 6 },
  required: obj8,
};
obj2 = { fontSize: 10, color: nativeDefault.unsafe_rawColors.RED_400 };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
obj3 = { backgroundColor: nativeDefault.colors.TEXT_MUTED };
obj4 = {
  fontSize: 16,
  paddingBottom: 0,
  paddingTop: 0,
  textAlignVertical: "top",
  flex: 1,
  color: LegacyTokens.DARK_PRIMARY_100_LIGHT_PRIMARY_500,
};
obj5 = { backgroundColor: nativeDefault.unsafe_rawColors.TRANSPARENT };
obj6 = { alignSelf: "flex-end", fontFamily: Fonts.CODE_BOLD, color: LegacyTokens.DARK_PRIMARY_400_LIGHT_PRIMARY_300 };
obj7 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj8 = { color: nativeDefault.unsafe_rawColors.RED_400 };
const unpackModuleId = createLegacyClassComponentStyles(obj);
let obj9 = { NEVER: "never", WITH_CONTENT: "with-content", ALWAYS: "always" };
const PureComponent = react.PureComponent;
class InputView extends PureComponent {
  constructor() {
    let applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
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
      applyArgumentsResult = value;
      const obj = { value };
      applyArgumentsResult.setState(obj, () => {
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
  static getDerivedStateFromProps(value, valueProp) {
    value = value.value;
    if (value !== valueProp.valueProp) {
      return { valueProp: value };
    }
  }
  renderBorder() {
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
      const inputViewBorderActive = this.state.active && tmp.inputViewBorderActive;
      const obj2 = { style: items };
      items[2] = inputViewBorderActive;
      return React4(hasOwnProperty, obj2);
    } else {
      return null;
    }
  }
  renderTopContainer() {
    let error;
    let errorProps;
    let errorStyles;
    let helpText;
    let items;
    let items1;
    let items2;
    let items3;
    let required;
    let showTopContainer;
    let title;
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
      const obj = { style: items, children: items1 };
      const LegacyText = native.LegacyText;
      const merged = Object.assign(errorProps);
      items = [tmp.inputViewError, errorStyles];
      items1 = ["(", error, ")"];
      tmp3 = authStore(LegacyText, obj);
    }
    let tmp12Result;
    const tmp10 = null != title && "" !== title;
    if (tmp10) {
      let str5 = "text-default";
      const Text = Text_Text.Text;
      if (null !== error) {
        str5 = "text-default";
        if ("" !== error) {
          str5 = "text-feedback-critical";
        }
      }
      const obj2 = { variant: "heading-md/semibold", color: str5, style: items2, children: title };
      items2 = [tmp.inputViewTitle];
      tmp12Result = React4(Text, obj2);
    }
    let tmp16;
    const tmp15 = null != helpText && "" !== helpText;
    if (tmp15) {
      const obj3 = { variant: "text-xs/medium", children: helpText };
      tmp16 = React4(Text_Text.Text, obj3);
    }
    const obj4 = { style: tmp.topContainer, children: items3 };
    items3 = [tmp12Result, tmp16, ,];
    let tmp22 = null == tmp3 && required;
    if (tmp22) {
      const obj5 = { style: tmp.required, children: "*" };
      tmp22 = React4(native.LegacyText, obj5);
    }
    items3[2] = tmp22;
    items3[3] = tmp3;
    return authStore(hasOwnProperty, obj4);
  }
  renderBottomContainer() {
    let LegacyText;
    let fR1cof;
    let formatToPlainString;
    let obj2;
    let obj3;
    const self = this;
    const tmp = closure_11(this.context);
    const props = this.props;
    const maxLength = props.maxLength;
    let tmp2 = null;
    if (props.showCharactersRemaining) {
      tmp2 = null;
      if (null != maxLength) {
        const obj = { style: tmp.bottomContainer, children: React4(LegacyText, obj2) };
        obj2 = {
          accessible: true,
          style: tmp.charactersLength,
          accessibilityLabel: formatToPlainString(fR1cof, obj3),
          children: maxLength - self.getText().length,
        };
        LegacyText = native.LegacyText;
        const intl = intl2.intl;
        formatToPlainString = intl.formatToPlainString;
        obj3 = { remainingCharacters: maxLength - self.getText().length };
        fR1cof = intl2.t.fR1cof;
        tmp2 = React4(hasOwnProperty, obj);
      }
    }
    return tmp2;
  }
  renderTrailingButton() {
    let clearButtonAccessibilityLabel;
    let clearButtonVisibility;
    let trailingButton;
    const self = this;
    ({ trailingButton, clearButtonVisibility, clearButtonAccessibilityLabel } = this.props);
    if (null == trailingButton) {
      let tmp3Result;
      if (clearButtonVisibility === obj9.ALWAYS) {
        const obj = {
          hitSlop: 16,
          style: tmp.clearButton,
          onPress: self.handleClear,
          accessible: true,
          accessibilityRole: "button",
          accessibilityLabel: clearButtonAccessibilityLabel,
          children: React4(CircleXIcon.CircleXIcon, { size: "sm" }),
        };
        if (clearButtonAccessibilityLabel == null) {
          const intl = intl2.intl;
          clearButtonAccessibilityLabel = intl.string(intl2.t.VkKicb);
        }
        tmp3Result = React4(metroRequire, obj);
      } else {
        tmp3Result = null;
        if (clearButtonVisibility === tmp9.WITH_CONTENT) {
          tmp3Result = null;
        }
      }
      trailingButton = tmp3Result;
    }
    return trailingButton;
  }
  renderTextView() {
    let TextInput;
    let accessibilityHint;
    let clearButtonVisibility;
    let disableConstantNumberOfLines;
    let disabled;
    let editable;
    let inActionSheet;
    let inputTextColor;
    let inputTextStyle;
    let large;
    let maxLength;
    let numberOfLines;
    let obj;
    let obj4;
    let obj6;
    let onChangeText;
    let onFocus;
    let placeholder;
    let placeholderTextColor;
    let style;
    let trailingButton;
    let value2;
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
      value: value2,
    } = props);
    const value = this.state.value;
    ({ disableConstantNumberOfLines, editable, accessibilityHint, inActionSheet, disabled, inputTextStyle } = props);
    const items = [closure_11(this.context).inputView, , , ,];
    const tmp = closure_11(this.context);
    const tmp2 = _objectWithoutProperties(props, closure_3);
    if (disableConstantNumberOfLines) {
      let num2 = 21;
      if (large) {
        num2 = 30;
      }
      obj = { maxHeight: num2 * numberOfLines };
      const obj2 = { maxHeight: num2 * numberOfLines };
    } else {
      let num = 21;
      if (large) {
        num = 30;
      }
      obj = { minHeight: num * numberOfLines };
    }
    items[1] = obj;
    if (null != inputTextColor) {
      obj4 = { color: inputTextColor };
      const obj3 = { color: inputTextColor };
    } else {
      obj4 = {};
    }
    items[2] = obj4;
    if (large) {
      obj6 = { fontSize: 25, fontFamily: Fonts.PRIMARY_SEMIBOLD };
      const obj5 = { fontSize: 25, fontFamily: Fonts.PRIMARY_SEMIBOLD };
    } else {
      obj6 = {};
    }
    items[3] = obj6;
    items[4] = inputTextStyle;
    if (placeholderTextColor == null) {
      const obj7 = shared;
      const isThemeDarkResult = obj7.isThemeDark(self.context.theme);
      const unsafe_rawColors = nativeDefault.unsafe_rawColors;
      placeholderTextColor = isThemeDarkResult ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_200;
    }
    let formatToPlainStringResult;
    if (null != maxLength) {
      const intl = intl2.intl;
      const obj8 = { maxLength };
      formatToPlainStringResult = intl.formatToPlainString(intl2.t["+DFxLc"], obj8);
    }
    const items1 = [formatToPlainStringResult, accessibilityHint];
    const found = items1.filter(Boolean);
    const joined = found.join(",");
    if (inActionSheet) {
      TextInput = components_BottomSheetTextInputDefault;
    } else {
      TextInput = native.TextInput;
    }
    obj9 = {
      accessibilityState: { disabled },
      style: items,
      ref: self.setRef,
      onChangeText: self.handleChangeText,
      onFocus: self.handleFocus,
      onBlur: self.handleBlur,
      onEndEditing: self.handleEndEditing,
      onSubmitEditing: self.handleSubmitEditing,
      value,
      clearButtonMode: "never",
      placeholder,
      placeholderTextColor,
      editable,
      maxLength,
      accessibilityHint: joined,
    };
    const merged = Object.assign(tmp2);
    return React4(TextInput, obj9);
  }
  render() {
    let items1;
    let items2;
    let items3;
    let obj2;
    let str;
    const self = this;
    const tmp = closure_11(this.context);
    const props = this.props;
    const disabled = props.disabled;
    const items = [props.style];
    let disabled2 = disabled;
    const inputContainerStyle = props.inputContainerStyle;
    const obj = { accessible: false, onPress: this.focus, children: authStore(hasOwnProperty, obj2) };
    if (disabled) {
      disabled2 = tmp.disabled;
    }
    obj2 = { style: items, pointerEvents: str, children: items1 };
    items[1] = disabled2;
    str = "auto";
    if (disabled) {
      str = "none";
    }
    items1 = [self.renderTopContainer(), , , ,];
    const obj3 = { style: items2, children: items3 };
    items2 = [tmp.inputContainer, inputContainerStyle];
    items3 = [self.renderTextView(), self.renderTrailingButton()];
    items1[1] = authStore(hasOwnProperty, obj3);
    const obj4 = PlatformUtils;
    items1[2] = obj4.isAndroid() && self.renderBorder();
    obj4.isAndroid() && self.renderBorder();
    items1[3] = self.renderBottomContainer();
    const tmp6Result = PlatformUtils;
    const isAndroidResult = tmp6Result.isAndroid();
    items1[4] = !isAndroidResult && self.renderBorder();
    !isAndroidResult && self.renderBorder();
    return React4(metroImportDefault, obj);
  }
}
const prototype = InputView.prototype;
InputView.contextType = native2.ThemeContext;
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
const result = size.fileFinishedImporting("design/void/InputView/native/InputView.tsx");

export default InputView;
export const ClearButtonVisibility = obj9;
