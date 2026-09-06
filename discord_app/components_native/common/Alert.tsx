// discord_app/components_native/common/Alert.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../intl/index.native.tsx";
import native from "../../design/void/native.tsx";
import useWindowDimensionsDefault from "../../modules/screen/useWindowDimensions.native.tsx";
import Timers from "../../../discord_common/js/packages/timers/Timers.tsx";
import Text_Text from "../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../design/components/Button/native/Button.native.tsx";
import CustomMarkupAll from "../../modules/markup/CustomMarkup.native.tsx";
import Pressables from "../../design/void/Pressables/native/Pressables.tsx";
import ThemedGradientDefault from "../../modules/client_themes/native/ThemedGradient.tsx";
import useIsScreenLandscape from "../../modules/screen/useIsScreenLandscape.native.tsx";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
fn(4560);
let obj = {
  alert: null,
  titleText: null,
  divider: null,
  body: null,
  buttons: null,
  cancelButton: null,
  secondaryConfirm: null,
  gradient: null,
};
obj = { borderRadius: nativeDefault.radii.sm, padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.alert = obj;
const createStyles = { marginBottom: 16, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.titleText = createStyles;
obj.divider = { height: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let obj2 = { height: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj.body = { marginTop: 16, color: nativeDefault.colors.TEXT_STRONG };
obj.buttons = { marginTop: 24 };
obj.cancelButton = { marginTop: 8 };
obj.secondaryConfirm = { marginTop: 16, alignSelf: "center" };
let obj3 = { marginTop: 16, color: nativeDefault.colors.TEXT_STRONG };
obj.gradient = { borderRadius: nativeDefault.radii.sm };
let closure_10 = createStyles.createLegacyClassComponentStyles(obj);
const PureComponent = noop.PureComponent;
class Alert extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.titleRef = closure_4.createRef();
    applyArgumentsResult.state = { confirming: false };
    obj = closure_2(closure_3[7]);
    applyArgumentsResult.renderContent = obj.getParser();
    timeout = new closure_0(closure_3[8]).Timeout();
    applyArgumentsResult.timeout = timeout;
    timeout1 = new closure_0(closure_3[8]).Timeout();
    applyArgumentsResult.focusTimeout = timeout1;
    applyArgumentsResult.handleConfirm = function handleConfirm() {
      if (!applyArgumentsResult.state.confirming) {
        ({ onClose, onConfirm, autoCloseOnConfirm } = obj.props);
        obj.setState({ confirming: true });
        const timeout = obj.timeout;
        timeout.start(500, () => {
          state.setState({ confirming: false });
        });
        if (autoCloseOnConfirm) {
          if (onClose != null) {
            onClose();
          }
        }
        if (onConfirm != null) {
          onConfirm();
        }
      }
    };
    applyArgumentsResult.handleCancel = function handleCancel() {
      ({ onClose, onCancel } = applyArgumentsResult.props);
      if (onCancel != null) {
        onCancel();
      }
      if (onClose != null) {
        onClose();
      }
    };
    applyArgumentsResult.handleSecondaryConfirm = function handleSecondaryConfirm() {
      ({ onClose, onConfirmSecondary } = applyArgumentsResult.props);
      if (onClose != null) {
        onClose();
      }
      if (onConfirmSecondary != null) {
        onConfirmSecondary();
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = Alert.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  const self = this;
  if (null != this.titleRef.current) {
    const _setImmediate = setImmediate;
    setImmediate(() => {
      const focusTimeout = self.focusTimeout;
      focusTimeout.start(300, () => {
        self(dependencyMap[9]);
        const obj = { ref: titleRef.titleRef };
        const result = obj.setAccessibilityFocus(obj);
      });
    });
  }
};
prototype["componentWillUnmount"] = function componentWillUnmount() {
  const timeout = this.timeout;
  timeout.stop();
  const focusTimeout = this.focusTimeout;
  focusTimeout.stop();
};
prototype["componentDidUpdate"] = function componentDidUpdate() {
  const self = this;
  const confirming = this.props.confirming;
  if (null != confirming) {
    const timeout = self.timeout;
    timeout.stop();
    const obj = { confirming };
    self.setState(obj);
  }
};
prototype["renderHeader"] = function renderHeader() {
  const self = this;
  const tmp = closure_10(this.context);
  const title = this.props.title;
  let tmp3Result = null;
  if (null != title) {
    tmp3Result = null;
    if ("" !== title) {
      let obj = {
        ref: self.titleRef,
        accessible: true,
        accessibilityRole: "header",
        variant: "heading-md/extrabold",
        color: "text-default",
        style: tmp.titleText,
        children: null,
      };
      let renderContentResult = title;
      if (typeof title === "string") {
        renderContentResult = self.renderContent(title);
      }
      obj = { children: renderContentResult };
      const items = [React5(Text_Text.Text, obj)];
      obj = { style: tmp.divider };
      items[1] = React5(hasOwnProperty, obj);
      obj.children = items;
      tmp3Result = React6(tmp4, obj);
    }
  }
  return tmp3Result;
};
prototype["renderBody"] = function renderBody() {
  const self = this;
  const props = this.props;
  const body = props.body;
  let tmp5Result = null;
  if (null != body) {
    let obj = { style: null, children: null };
    obj = { maxHeight: self.props.contentHeight };
    obj.style = obj;
    obj = { variant: "text-md/normal", style: tmp.body, children: null };
    let renderContentResult = body;
    if (typeof body === "string") {
      renderContentResult = self.renderContent(body);
    }
    obj.children = renderContentResult;
    obj.children = React5(Text_Text.Text, obj);
    tmp5Result = tmp5(timestampProducer, obj);
  }
  const obj1 = { children: null };
  const items = [tmp5Result, props.children];
  obj1.children = items;
  return React6(React7, obj1);
};
prototype["renderButtons"] = function renderButtons() {
  const self = this;
  const tmp = closure_10(this.context);
  const props = this.props;
  ({ cancelText, confirmText } = props);
  if (undefined === confirmText) {
    const intl = util.intl;
    confirmText = intl.string(util.t.BddRzS);
  }
  ({
    confirmColor,
    secondaryConfirmText,
    renderConfirmIcon,
    renderConfirmRightIcon,
    renderConfirmButton,
    isConfirmButtonDisabled,
  } = props);
  let tmp15Result = null;
  if (!props.noDefaultButtons) {
    let tmp6;
    if (null != cancelText) {
      let obj = { style: tmp.cancelButton, children: null };
      obj = { variant: "secondary", onPress: self.handleCancel, text: cancelText };
      obj.children = React5(components_Button_Button.Button, obj);
      tmp6 = React5(hasOwnProperty, obj);
    }
    let tmp11;
    if (null != secondaryConfirmText) {
      obj = {
        accessibilityRole: "button",
        style: tmp.secondaryConfirm,
        onPress: self.handleSecondaryConfirm,
        children: null,
      };
      const obj1 = { variant: "text-sm/semibold", color: "text-link", children: secondaryConfirmText };
      obj.children = React5(Text_Text.Text, obj1);
      tmp11 = React5(Pressables.PressableOpacity, obj);
    }
    const obj2 = { style: tmp.buttons, children: null };
    let renderConfirmButtonResult;
    if (renderConfirmButton != null) {
      renderConfirmButtonResult = renderConfirmButton();
    }
    if (renderConfirmButtonResult == null) {
      let str = "active";
      if (native.ButtonColors.GREEN !== confirmColor) {
        str = "destructive";
        if (tmp21(1178).ButtonColors.RED !== confirmColor) {
          str = "secondary";
          if (tmp21(1178).ButtonColors.GREY !== confirmColor) {
            str = "secondary";
            if (tmp21(1178).ButtonColors.LIGHTGREY !== confirmColor) {
              str = "secondary";
              if (tmp21(1178).ButtonColors.TRANSPARENT !== confirmColor) {
                str = "primary";
                if (tmp21(1178).ButtonColors.WHITE === confirmColor) {
                  str = "primary-overlay";
                }
              }
            }
          }
        }
      }
      const obj3 = {
        variant: str,
        onPress: self.handleConfirm,
        text: confirmText,
        loading: tmp4,
        disabled: null,
        icon: null,
        iconPosition: null,
      };
      if (isConfirmButtonDisabled == null) {
        isConfirmButtonDisabled = false;
      }
      obj3.disabled = isConfirmButtonDisabled;
      let renderConfirmIconResult;
      if (renderConfirmIcon != null) {
        renderConfirmIconResult = renderConfirmIcon();
      }
      if (renderConfirmIconResult == null) {
        let result;
        if (renderConfirmRightIcon != null) {
          result = renderConfirmRightIcon();
        }
        renderConfirmIconResult = result;
      }
      obj3.icon = renderConfirmIconResult;
      let str2 = "start";
      if (null == renderConfirmIcon) {
        let str3;
        if (null != renderConfirmRightIcon) {
          str3 = "end";
        }
        str2 = str3;
      }
      obj3.iconPosition = str2;
      renderConfirmButtonResult = React5(components_Button_Button.Button, obj3);
    }
    const items = [renderConfirmButtonResult, tmp6, tmp11];
    obj2.children = items;
    tmp15Result = React6(hasOwnProperty, obj2);
  }
  return tmp15Result;
};
prototype["renderFooter"] = function renderFooter() {
  const footer = this.props.footer;
  let tmp = null;
  if (null != footer) {
    const obj = { children: footer };
    tmp = React5(hasOwnProperty, obj);
  }
  return tmp;
};
prototype["render"] = function render() {
  const tmp = closure_10(this.context);
  const props = this.props;
  const width = props.width;
  let obj = { children: null };
  ({ style, isLandscape, onClose } = props);
  obj = { absolute: true, componentStyles: tmp.gradient };
  const items = [React5(ThemedGradientDefault, obj)];
  obj = { onAccessibilityEscape: onClose, style: null, children: null };
  const items1 = [tmp.alert, style, { width }];
  obj.style = items1;
  const items2 = [this.renderHeader(), this.renderBody(), this.renderButtons(), this.renderFooter()];
  obj.children = items2;
  items[1] = React6(hasOwnProperty, obj);
  obj.children = items;
  const tmp3 = React6(React7, obj);
  let tmp2Result = tmp3;
  if (isLandscape) {
    const obj1 = { style: null, children: null };
    const obj2 = { maxHeight: width };
    obj1.style = obj2;
    obj1.children = tmp3;
    tmp2Result = React5(timestampProducer, obj1);
  }
  return tmp2Result;
};
Alert.contextType = fn(4271).ThemeContext;
const obj4 = { borderRadius: nativeDefault.radii.sm };
Alert.defaultProps = { confirmColor: fn(1178).ButtonColors.BRAND, autoCloseOnConfirm: true };
const memoResult = noop.memo((arg0) => {
  const size = useWindowDimensionsDefault();
  let obj = useIsScreenLandscape;
  const isScreenLandscape = obj.useIsScreenLandscape();
  obj = {
    width: Math.min(0.9 * Math.min(size.width, size.height), 400),
    contentHeight: 0.7 * size.height,
    isLandscape: isScreenLandscape,
  };
  const merged = Object.assign(arg0);
  return React5(Alert, obj);
});
memoResult.Colors = fn(1178).ButtonColors;
let size = fn(2);
let result = size.fileFinishedImporting("components_native/common/Alert.tsx");

export default memoResult;
export const getAlertButtonVariant = function getAlertButtonVariant(confirmColor) {
  if (native.ButtonColors.GREEN === confirmColor) {
    return "active";
  } else if (tmp(1178).ButtonColors.RED === confirmColor) {
    return "destructive";
  } else {
    if (tmp(1178).ButtonColors.GREY !== confirmColor) {
      if (tmp(1178).ButtonColors.LIGHTGREY !== confirmColor) {
        if (tmp(1178).ButtonColors.TRANSPARENT !== confirmColor) {
          if (tmp(1178).ButtonColors.WHITE === confirmColor) {
            return "primary-overlay";
          } else {
            return "primary";
          }
        }
      }
    }
    return "secondary";
  }
};
