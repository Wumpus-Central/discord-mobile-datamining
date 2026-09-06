// _runtime/metro/01065__.js
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import noop from "00019__.js";

const FeedbackButton = fn;
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
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
get_ActivityIndicator = fn(17);
({ Appearance: metroRequire, Image: closure_7, Text: closure_8, TouchableOpacity: closure_9 } = get_ActivityIndicator);
class FeedbackButton {
  constructor(arg0) {
    self = this;
    tmp = c2(this, FeedbackButton);
    items = [];
    items[0] = global;
    tmp2 = closure_4;
    obj = closure_4(FeedbackButton);
    tmp3 = closure_3;
    if (c10()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    obj2 = closure_0(closure_1[7]);
    result = obj2.lazyLoadFeedbackIntegration();
    return tmp3Result;
  }
}
_inherits(FeedbackButton, noop.Component);
const entry = {
  key: "componentDidMount",
  value: function componentDidMount() {
    const self = this;
    this._themeListener = timestampProducer.addChangeListener(() => {
      self.forceUpdate();
    });
  },
};
let items = [
  entry,
  {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._themeListener) {
        const _themeListener = this._themeListener;
        _themeListener.remove();
      }
    },
  },
  {
    key: "render",
    value: function render() {
      const self = this;
      let obj = FeedbackButton(1064);
      const theme = obj.getTheme();
      const merged = Object.assign(Object.assign({}, FeedbackButton(1066).defaultButtonConfiguration), this.props);
      let obj1 = FeedbackButton(1067);
      const styles = this.props.styles;
      let triggerButton;
      const merged1 = Object.assign({}, obj1.defaultButtonStyles(theme).triggerButton);
      if (null !== styles) {
        if (undefined !== styles) {
          triggerButton = styles.triggerButton;
        }
      }
      const merged2 = Object.assign(merged1, triggerButton);
      let tmpResult = FeedbackButton(1067);
      const styles2 = self.props.styles;
      let triggerText;
      const merged3 = Object.assign({}, tmpResult.defaultButtonStyles(theme).triggerText);
      if (null !== styles2) {
        if (undefined !== styles2) {
          triggerText = styles2.triggerText;
        }
      }
      const style = Object.assign(merged3, triggerText);
      tmpResult = FeedbackButton(1067);
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
      obj.onPress = FeedbackButton(1062).showFeedbackWidget;
      obj.accessibilityLabel = merged.triggerAriaLabel;
      obj = { source: null, style: null };
      obj1 = { uri: FeedbackButton(1068).feedbackIcon };
      obj.source = obj1;
      obj.style = merged6;
      const element = <React5 source={null} style={null} />;
      return (
        <React7 source={null} style={null}>
          {element}
          <React6 style={style} testID="sentry-feedback-button">
            {merged.triggerLabel}
          </React6>
        </React7>
      );
    },
  },
];

export const FeedbackButton = _createClass(FeedbackButton, items);
