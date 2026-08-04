// _runtime/01200__isNativeReflectConstruct.js
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import importAllResult from "noop";
import get_ActivityIndicator from "get ActivityIndicator";

let c9;
let closure_6;
let error;
let metroImportAll;
const FeedbackButton = arg1;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
let c5 = importAllResult;
({ Appearance: closure_6, Image: error, Text: metroImportAll, TouchableOpacity: c9 } = get_ActivityIndicator);
class FeedbackButton {
  constructor(arg0) {
    self = this;
    tmp = _isNativeReflectConstruct(this, FeedbackButton);
    items = [];
    items[0] = global;
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(FeedbackButton);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    obj2 = require("lazyLoadFeedbackIntegration");
    result = obj2.lazyLoadFeedbackIntegration();
    return tmp3Result;
  }
}
require("_inherits")(FeedbackButton, importAllResult.Component);
let items = [
  {
    key: "componentDidMount",
    value: function componentDidMount() {
      const self = this;
      this._themeListener = closure_6.addChangeListener(() => {
        self.forceUpdate();
      });
    }
  },
  {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._themeListener) {
        const _themeListener = this._themeListener;
        _themeListener.remove();
      }
    }
  },
  {
    key: "render",
    value: function render() {
      const self = this;
      let obj = FeedbackButton(1199);
      const theme = obj.getTheme();
      const merged = Object.assign(Object.assign({}, FeedbackButton(1201).defaultButtonConfiguration), this.props);
      let obj1 = FeedbackButton(1202);
      const styles = this.props.styles;
      let triggerButton;
      const merged1 = Object.assign({}, obj1.defaultButtonStyles(theme).triggerButton);
      if (null !== styles) {
        if (undefined !== styles) {
          triggerButton = styles.triggerButton;
        }
      }
      const merged2 = Object.assign(merged1, triggerButton);
      let tmpResult = tmp(1202);
      const styles2 = self.props.styles;
      let triggerText;
      const merged3 = Object.assign({}, tmpResult.defaultButtonStyles(theme).triggerText);
      if (null !== styles2) {
        if (undefined !== styles2) {
          triggerText = styles2.triggerText;
        }
      }
      const style = Object.assign(merged3, triggerText);
      tmpResult = tmp(1202);
      const styles3 = self.props.styles;
      let triggerIcon;
      const merged5 = Object.assign({}, tmpResult.defaultButtonStyles(theme).triggerIcon);
      if (null !== styles3) {
        if (undefined !== styles3) {
          triggerIcon = styles3.triggerIcon;
        }
      }
      obj = { style: merged2, onPress: null, accessibilityLabel: null };
      const merged6 = Object.assign(merged5, triggerIcon);
      obj[1] = FeedbackButton(1197).showFeedbackWidget;
      obj[2] = merged.triggerAriaLabel;
      obj = { source: null, style: null };
      obj1 = { uri: tmp(1203).feedbackIcon };
      obj[0] = obj1;
      obj[1] = merged6;
      const element = <closure_7 source={null} style={null} />;
      return <closure_9 source={null} style={null}>{element}<closure_8 style={style} testID="sentry-feedback-button">{merged.triggerLabel}</closure_8></closure_9>;
    }
  }
];

export const FeedbackButton = importDefaultResult(FeedbackButton, items);