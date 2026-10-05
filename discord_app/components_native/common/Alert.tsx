// discord_app/components_native/common/Alert.tsx
import react2 from "../../../_runtime/00576_react.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../intl/index.native.tsx";
import native from "../../design/void/native.tsx";
import useWindowDimensionsDefault from "../../modules/screen/useWindowDimensions.native.tsx";
import Timers from "../../../discord_common/js/packages/timers/Timers.tsx";
import native2 from "../../../discord_common/js/packages/design/native.tsx";
import Text_Text from "../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../design/components/Button/native/Button.native.tsx";
import CustomMarkupAll from "../../modules/markup/CustomMarkup.native.tsx";
import Pressables from "../../design/void/Pressables/native/Pressables.tsx";
import ThemedGradientDefault from "../../modules/client_themes/native/ThemedGradient.tsx";
import useIsScreenLandscape from "../../modules/screen/useIsScreenLandscape.native.tsx";
import react from "../../../_runtime/00019_react.js";
import react_native from "../../../_runtime/00017_react-native.js";
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../modules/react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../_runtime/metro/00002__.js";

let StyleSheet;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
({ View: hasOwnProperty, ScrollView: metroRequire, StyleSheet } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let obj = {
  alert: obj2,
  titleText: obj3,
  divider: obj4,
  body: obj5,
  buttons: { marginTop: 24 },
  cancelButton: { marginTop: 8 },
  secondaryConfirm: { marginTop: 16, alignSelf: "center" },
  gradient: obj6,
};
obj2 = { borderRadius: nativeDefault.radii.sm, padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
obj3 = { marginBottom: 16, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj4 = { height: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj5 = { marginTop: 16, color: nativeDefault.colors.TEXT_STRONG };
obj6 = { borderRadius: nativeDefault.radii.sm };
const authStore = createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class Alert extends PureComponent {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.titleRef = react.createRef();
    applyArgumentsResult.state = { confirming: false };
    const obj = CustomMarkupAll;
    applyArgumentsResult.renderContent = obj.getParser();
    let timeout = new Timers.Timeout();
    applyArgumentsResult.timeout = timeout;
    const timeout1 = new Timers.Timeout();
    applyArgumentsResult.focusTimeout = timeout1;
    applyArgumentsResult.handleConfirm = function handleConfirm() {
      let autoCloseOnConfirm;
      let onClose;
      let onConfirm;
      let state;
      if (!applyArgumentsResult.state.confirming) {
        ({ onClose, onConfirm, autoCloseOnConfirm } = applyArgumentsResult.props);
        applyArgumentsResult.setState({ confirming: true });
        const timeout = applyArgumentsResult.timeout;
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
      let onCancel;
      let onClose;
      ({ onClose, onCancel } = applyArgumentsResult.props);
      if (onCancel != null) {
        onCancel();
      }
      if (onClose != null) {
        onClose();
      }
    };
    applyArgumentsResult.handleSecondaryConfirm = function handleSecondaryConfirm() {
      let onClose;
      let onConfirmSecondary;
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
  componentDidMount() {
    const self = this;
    if (null != this.titleRef.current) {
      const _setImmediate = setImmediate;
      setImmediate(() => {
        let titleRef;
        const focusTimeout = self.focusTimeout;
        focusTimeout.start(300, () => {
          const obj = self(dependencyMap[9]);
          const obj2 = { ref: titleRef.titleRef };
          const result = obj.setAccessibilityFocus(obj2);
        });
      });
    }
  }
  componentWillUnmount() {
    const timeout = this.timeout;
    timeout.stop();
    const focusTimeout = this.focusTimeout;
    focusTimeout.stop();
  }
  componentDidUpdate() {
    const self = this;
    const confirming = this.props.confirming;
    if (null != confirming) {
      const timeout = self.timeout;
      timeout.stop();
      const obj = { confirming };
      self.setState(obj);
    }
  }
  renderHeader() {
    let items;
    let renderContentResult;
    const self = this;
    const tmp = closure_10(this.context);
    const title = this.props.title;
    let tmp3Result = null;
    if (null != title) {
      tmp3Result = null;
      if ("" !== title) {
        const obj2 = {
          ref: self.titleRef,
          accessible: true,
          accessibilityRole: "header",
          variant: "heading-md/extrabold",
          color: "text-default",
          style: tmp.titleText,
          children: renderContentResult,
        };
        renderContentResult = title;
        const Text = Text_Text.Text;
        if (typeof title === "string") {
          renderContentResult = self.renderContent(title);
        }
        const obj = { children: items };
        items = [metroImportDefault(Text, obj2)];
        const obj3 = { style: tmp.divider };
        items[1] = metroImportDefault(hasOwnProperty, obj3);
        tmp3Result = metroImportAll(hasOwnProperty, obj);
      }
    }
    return tmp3Result;
  }
  renderBody() {
    let Text;
    let items;
    let obj2;
    let obj3;
    let renderContentResult;
    const self = this;
    const props = this.props;
    const body = props.body;
    let tmp5Result = null;
    const children = props.children;
    if (null != body) {
      const obj = { style: obj2, children: metroImportDefault(Text, obj3) };
      obj3 = { variant: "text-md/normal", style: tmp.body, children: renderContentResult };
      renderContentResult = body;
      obj2 = { maxHeight: self.props.contentHeight };
      Text = Text_Text.Text;
      if (typeof body === "string") {
        renderContentResult = self.renderContent(body);
      }
      tmp5Result = metroImportDefault(metroRequire, obj);
    }
    const obj4 = { children: items };
    items = [tmp5Result, children];
    return metroImportAll(React4, obj4);
  }
  renderButtons() {
    let cancelText;
    let confirmColor;
    let confirmText;
    let isConfirmButtonDisabled;
    let items;
    let obj2;
    let obj4;
    let renderConfirmButton;
    let renderConfirmIcon;
    let renderConfirmIconResult;
    let renderConfirmRightIcon;
    let secondaryConfirmText;
    let str2;
    const self = this;
    const tmp = closure_10(this.context);
    const props = this.props;
    ({ cancelText, confirmText } = props);
    if (undefined === confirmText) {
      const intl = intl2.intl;
      confirmText = intl.string(intl2.t.BddRzS);
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
        const obj = { style: tmp.cancelButton, children: metroImportDefault(components_Button_Button.Button, obj2) };
        obj2 = { variant: "secondary", onPress: self.handleCancel, text: cancelText };
        tmp6 = metroImportDefault(hasOwnProperty, obj);
      }
      let tmp11;
      if (null != secondaryConfirmText) {
        const obj3 = {
          accessibilityRole: "button",
          style: tmp.secondaryConfirm,
          onPress: self.handleSecondaryConfirm,
          children: metroImportDefault(Text_Text.Text, obj4),
        };
        const PressableOpacity = Pressables.PressableOpacity;
        obj4 = { variant: "text-sm/semibold", color: "text-link", children: secondaryConfirmText };
        tmp11 = metroImportDefault(PressableOpacity, obj3);
      }
      let renderConfirmButtonResult;
      const obj5 = { style: tmp.buttons, children: items };
      if (renderConfirmButton != null) {
        renderConfirmButtonResult = renderConfirmButton();
      }
      if (renderConfirmButtonResult == null) {
        const Button = components_Button_Button.Button;
        let str = "active";
        if (native.ButtonColors.GREEN !== confirmColor) {
          str = "destructive";
          if (native.ButtonColors.RED !== confirmColor) {
            str = "secondary";
            if (native.ButtonColors.GREY !== confirmColor) {
              str = "secondary";
              if (native.ButtonColors.LIGHTGREY !== confirmColor) {
                str = "secondary";
                if (native.ButtonColors.TRANSPARENT !== confirmColor) {
                  str = "primary";
                  if (native.ButtonColors.WHITE === confirmColor) {
                    str = "primary-overlay";
                  }
                }
              }
            }
          }
        }
        const obj6 = {
          variant: str,
          onPress: self.handleConfirm,
          text: confirmText,
          loading: tmp4,
          disabled: isConfirmButtonDisabled,
          icon: renderConfirmIconResult,
          iconPosition: str2,
        };
        if (isConfirmButtonDisabled == null) {
          isConfirmButtonDisabled = false;
        }
        renderConfirmIconResult = undefined;
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
        str2 = "start";
        if (null == renderConfirmIcon) {
          let str3;
          if (null != renderConfirmRightIcon) {
            str3 = "end";
          }
          str2 = str3;
        }
        renderConfirmButtonResult = metroImportDefault(Button, obj6);
      }
      items = [renderConfirmButtonResult, tmp6, tmp11];
      tmp15Result = metroImportAll(hasOwnProperty, obj5);
    }
    return tmp15Result;
  }
  renderFooter() {
    const footer = this.props.footer;
    let tmp = null;
    if (null != footer) {
      const obj = { children: footer };
      tmp = metroImportDefault(hasOwnProperty, obj);
    }
    return tmp;
  }
  render() {
    let isLandscape;
    let items;
    let items1;
    let items2;
    let obj5;
    let onClose;
    let style;
    const tmp = closure_10(this.context);
    const props = this.props;
    const width = props.width;
    const obj = { children: items };
    ({ style, isLandscape, onClose } = props);
    items = [,];
    const obj2 = { absolute: true, componentStyles: tmp.gradient };
    items[0] = metroImportDefault(ThemedGradientDefault, obj2);
    const obj3 = { onAccessibilityEscape: onClose, style: items1, children: items2 };
    items1 = [tmp.alert, style, { width }];
    items2 = [this.renderHeader(), this.renderBody(), this.renderButtons(), this.renderFooter()];
    items[1] = metroImportAll(hasOwnProperty, obj3);
    const tmp3 = metroImportAll(React4, obj);
    let tmp2Result = tmp3;
    if (isLandscape) {
      const obj4 = { style: obj5, children: tmp3 };
      obj5 = { maxHeight: width };
      tmp2Result = metroImportDefault(metroRequire, obj4);
    }
    return tmp2Result;
  }
}
const prototype = Alert.prototype;
Alert.contextType = native2.ThemeContext;
Alert.defaultProps = { confirmColor: native.ButtonColors.BRAND, autoCloseOnConfirm: true };
const memo = react.memo;
({ confirmColor: native.ButtonColors.BRAND, autoCloseOnConfirm: true });
function getAlertButtonVariant(confirmColor) {
  if (native.ButtonColors.GREEN === confirmColor) {
    return "active";
  } else if (native.ButtonColors.RED === confirmColor) {
    return "destructive";
  } else {
    if (native.ButtonColors.GREY !== confirmColor) {
      if (native.ButtonColors.LIGHTGREY !== confirmColor) {
        if (native.ButtonColors.TRANSPARENT !== confirmColor) {
          if (native.ButtonColors.WHITE === confirmColor) {
            return "primary-overlay";
          } else {
            return "primary";
          }
        }
      }
    }
    return "secondary";
  }
}
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const obj = react2;
        const cResult = obj.c(5);
        size = useWindowDimensionsDefault();
        const obj2 = useIsScreenLandscape;
        const isScreenLandscape = obj2.useIsScreenLandscape();
        const bound = Math.min(0.9 * Math.min(size.width, size.height), 400);
        const result = 0.7 * size.height;
        if (cResult[0] === result) {
          if (cResult[1] === isScreenLandscape) {
            if (cResult[2] === arg0) {
              let tmp5;
              if (cResult[3] === bound) {
                tmp5 = cResult[4];
              }
              return tmp5;
            }
          }
        }
        const obj3 = { width: bound, contentHeight: result, isLandscape: isScreenLandscape };
        const merged = Object.assign(arg0);
        const tmp7 = metroImportDefault(Alert, obj3);
        cResult[0] = result;
        cResult[1] = isScreenLandscape;
        cResult[2] = arg0;
        cResult[3] = bound;
        cResult[4] = tmp7;
        tmp5 = tmp7;
      }
    : (arg0) => {
        size = useWindowDimensionsDefault();
        const obj = useIsScreenLandscape;
        const isScreenLandscape = obj.useIsScreenLandscape();
        const obj2 = {
          width: Math.min(0.9 * Math.min(size.width, size.height), 400),
          contentHeight: 0.7 * size.height,
          isLandscape: isScreenLandscape,
        };
        const merged = Object.assign(arg0);
        return metroImportDefault(Alert, obj2);
      },
);
memoResult.Colors = native.ButtonColors;
let size = size_mod;
let result = size.fileFinishedImporting("components_native/common/Alert.tsx");

export default memoResult;
export { getAlertButtonVariant };
