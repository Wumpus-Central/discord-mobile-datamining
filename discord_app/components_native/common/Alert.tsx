// discord_app/components_native/common/Alert.tsx
import ThemesDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../intl/index.native.tsx";
import Button from "../../design/void/native.tsx";
import useWindowDimensionsDefault from "../../modules/screen/useWindowDimensions.native.tsx";
import start from "../../../discord_common/js/packages/timers/Timers.tsx";
import Text from "../../design/components/Text/native/Text.tsx";
import Button2 from "../../design/components/Button/native/Button.native.tsx";
import createRulesAll from "../../modules/markup/CustomMarkup.native.tsx";
import PressableBase from "../../design/void/Pressables/native/Pressables.tsx";
import getMixedGradientColorDefault from "../../modules/client_themes/native/ThemedGradient.tsx";
import getIsScreenLandscape from "../../modules/screen/useIsScreenLandscape.native.tsx";
import importAllResult from "../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../design/components/Styles/native/createStyles.tsx";

require = arg1;
let c4 = importAllResult;
({ View: c5, ScrollView: closure_6, StyleSheet } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8, Fragment: c9 } = jsxProd);
let obj = { alert: null, titleText: null, divider: null, body: null, buttons: null, cancelButton: null, secondaryConfirm: null, gradient: null };
obj = { borderRadius: ThemesDefault.radii.sm, padding: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
obj[0] = obj;
createCacheKey = { marginBottom: 16, color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj[1] = createCacheKey;
obj[2] = { height: StyleSheet.hairlineWidth, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
let obj2 = { height: StyleSheet.hairlineWidth, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
obj[3] = { marginTop: 16, color: ThemesDefault.colors.TEXT_STRONG };
obj[4] = { marginTop: 24 };
obj[5] = { marginTop: 8 };
obj[6] = { marginTop: 16, alignSelf: "center" };
let obj3 = { marginTop: 16, color: ThemesDefault.colors.TEXT_STRONG };
obj[7] = { borderRadius: ThemesDefault.radii.sm };
let closure_10 = createCacheKey.createLegacyClassComponentStyles(obj);
const PureComponent = importAllResult.PureComponent;
class Alert extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.titleRef = closure_4.createRef();
    applyArgumentsResult.state = { confirming: false };
    obj = require("createRules");
    applyArgumentsResult.renderContent = obj.getParser();
    timeout = new require("start").Timeout();
    applyArgumentsResult.timeout = timeout;
    timeout1 = new require("start").Timeout();
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
        let obj = closure_1_0(closure_1_3[9]);
        obj = { ref: titleRef.titleRef };
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
    const obj = { confirming: null };
    obj[0] = confirming;
    self.setState(obj);
  }
};
prototype["renderHeader"] = function renderHeader() {
  const self = this;
  const tmp = callback3(this.context);
  const title = this.props.title;
  let tmp3Result = null;
  if (null != title) {
    tmp3Result = null;
    if ("" !== title) {
      let obj = { ref: null, accessible: true, accessibilityRole: "header", variant: "heading-md/extrabold", color: "text-default", style: null, children: null };
      obj[0] = self.titleRef;
      obj[5] = tmp.titleText;
      let renderContentResult = title;
      if (typeof title === "string") {
        renderContentResult = self.renderContent(title);
      }
      obj = { children: null };
      obj[6] = renderContentResult;
      const items = [closure_7(Text.Text, obj), ];
      obj = { style: null };
      obj[0] = tmp.divider;
      items[1] = closure_7(closure_5, obj);
      obj[0] = items;
      tmp3Result = closure_8(tmp4, obj);
      const tmp3 = closure_8;
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
    obj = { maxHeight: null };
    obj[0] = self.props.contentHeight;
    obj[0] = obj;
    obj = { variant: "text-md/normal", style: null, children: null };
    obj[1] = tmp.body;
    let renderContentResult = body;
    if (typeof body === "string") {
      renderContentResult = self.renderContent(body);
    }
    obj[2] = renderContentResult;
    obj[1] = closure_7(Text.Text, obj);
    tmp5Result = tmp5(closure_6, obj);
    const tmp6 = closure_6;
  }
  const children = [tmp5Result, props.children];
  return closure_8(closure_9, { children });
};
prototype["renderButtons"] = function renderButtons() {
  const self = this;
  const tmp = callback3(this.context);
  const props = this.props;
  ({ cancelText, confirmText } = props);
  if (undefined === confirmText) {
    const intl = getSystemLocale.intl;
    confirmText = intl.string(getSystemLocale.t.BddRzS);
  }
  ({ confirmColor, secondaryConfirmText, renderConfirmIcon, renderConfirmRightIcon, renderConfirmButton, isConfirmButtonDisabled } = props);
  let tmp15Result = null;
  if (!props.noDefaultButtons) {
    let tmp6;
    if (null != cancelText) {
      let obj = { style: null, children: null };
      obj[0] = tmp.cancelButton;
      obj = { variant: "secondary", onPress: null, text: null };
      obj[1] = self.handleCancel;
      obj[2] = cancelText;
      obj[1] = callback(Button2.Button, obj);
      tmp6 = callback(closure_5, obj);
    }
    let tmp11;
    if (null != secondaryConfirmText) {
      obj = { accessibilityRole: "button", style: null, onPress: null, children: null };
      obj[1] = tmp.secondaryConfirm;
      obj[2] = self.handleSecondaryConfirm;
      obj1 = { variant: "text-sm/semibold", color: "text-link", children: null };
      obj1[2] = secondaryConfirmText;
      obj[3] = callback(Text.Text, obj1);
      tmp11 = callback(PressableBase.PressableOpacity, obj);
    }
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.buttons;
    let renderConfirmButtonResult;
    if (renderConfirmButton != null) {
      renderConfirmButtonResult = renderConfirmButton();
    }
    if (renderConfirmButtonResult == null) {
      let str = "active";
      if (Button.ButtonColors.GREEN !== confirmColor) {
        str = "destructive";
        if (tmp21(1297).ButtonColors.RED !== confirmColor) {
          str = "secondary";
          if (tmp21(1297).ButtonColors.GREY !== confirmColor) {
            str = "secondary";
            if (tmp21(1297).ButtonColors.LIGHTGREY !== confirmColor) {
              str = "secondary";
              if (tmp21(1297).ButtonColors.TRANSPARENT !== confirmColor) {
                str = "primary";
                if (tmp21(1297).ButtonColors.WHITE === confirmColor) {
                  str = "primary-overlay";
                }
              }
            }
          }
        }
      }
      const obj3 = { variant: null, onPress: null, text: null, loading: null, disabled: null, icon: null, iconPosition: null };
      obj3[0] = str;
      obj3[1] = self.handleConfirm;
      obj3[2] = confirmText;
      obj3[3] = tmp4;
      if (isConfirmButtonDisabled == null) {
        isConfirmButtonDisabled = false;
      }
      obj3[4] = isConfirmButtonDisabled;
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
      obj3[5] = renderConfirmIconResult;
      let str2 = "start";
      if (null == renderConfirmIcon) {
        let str3;
        if (null != renderConfirmRightIcon) {
          str3 = "end";
        }
        str2 = str3;
      }
      obj3[6] = str2;
      renderConfirmButtonResult = callback(Button2.Button, obj3);
      const tmp20 = callback;
    }
    const items = [renderConfirmButtonResult, tmp6, tmp11];
    obj2[1] = items;
    tmp15Result = closure_8(closure_5, obj2);
    const tmp15 = closure_8;
    const tmp16 = closure_5;
  }
  return tmp15Result;
};
prototype["renderFooter"] = function renderFooter() {
  const footer = this.props.footer;
  let tmp = null;
  if (null != footer) {
    const obj = { children: null };
    obj[0] = footer;
    tmp = callback(closure_5, obj);
  }
  return tmp;
};
prototype["render"] = function render() {
  const tmp = callback3(this.context);
  const props = this.props;
  const width = props.width;
  let obj = { children: null };
  ({ style, isLandscape, onClose } = props);
  obj = { absolute: true, componentStyles: tmp.gradient };
  const items = [callback(getMixedGradientColorDefault, obj), ];
  obj = { onAccessibilityEscape: onClose, style: items1, children: null };
  items1 = [tmp.alert, style, { width }];
  const items2 = [this.renderHeader(), this.renderBody(), this.renderButtons(), this.renderFooter()];
  obj[2] = items2;
  items[1] = callback2(closure_5, obj);
  obj[0] = items;
  const tmp3 = callback2(closure_9, obj);
  let tmp2Result = tmp3;
  if (isLandscape) {
    obj1 = { style: null, children: null };
    const obj2 = { maxHeight: null };
    obj2[0] = width;
    obj1[0] = obj2;
    obj1[1] = tmp3;
    tmp2Result = callback(closure_6, obj1);
  }
  return tmp2Result;
};
Alert.contextType = require("ManaContext").ThemeContext;
const obj4 = { borderRadius: ThemesDefault.radii.sm };
Alert.defaultProps = { confirmColor: require("Button").ButtonColors.BRAND, autoCloseOnConfirm: true };
const memoResult = importAllResult.memo((arg0) => {
  const size = useWindowDimensionsDefault();
  let obj = getIsScreenLandscape;
  const isScreenLandscape = obj.useIsScreenLandscape();
  obj = { width: Math.min(0.9 * Math.min(size.width, size.height), 400), contentHeight: 0.7 * size.height, isLandscape: isScreenLandscape };
  const merged = Object.assign(arg0);
  return callback(Alert, obj);
});
memoResult.Colors = require("Button").ButtonColors;
const obj5 = { confirmColor: require("Button").ButtonColors.BRAND, autoCloseOnConfirm: true };
let result = require("set").fileFinishedImporting("components_native/common/Alert.tsx");

export default memoResult;
export const getAlertButtonVariant = function getAlertButtonVariant(confirmColor) {
  if (Button.ButtonColors.GREEN === confirmColor) {
    return "active";
  } else if (tmp(1297).ButtonColors.RED === confirmColor) {
    return "destructive";
  } else {
    if (tmp(1297).ButtonColors.GREY !== confirmColor) {
      if (tmp(1297).ButtonColors.LIGHTGREY !== confirmColor) {
        if (tmp(1297).ButtonColors.TRANSPARENT !== confirmColor) {
          if (tmp(1297).ButtonColors.WHITE === confirmColor) {
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