// _runtime/01076_FeedbackButton.js
import PULL_DOWN_CLOSE_THRESHOLD from "01073_PULL_DOWN_CLOSE_THRESHOLD.js";
import lazyLoadFeedbackIntegration from "01074_lazyLoadFeedbackIntegration.js";
import _mod1075 from "metro/01075__.js";
import defaultConfiguration from "01077_defaultConfiguration.js";
import defaultButtonStyles from "01078_defaultButtonStyles.js";
import feedbackIcon from "01079_feedbackIcon.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import c3 from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";
import react from "00019_react.js";
import react_native from "00017_react-native.js";

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
({ Appearance: metroRequire, Image: metroImportDefault, Text: metroImportAll, TouchableOpacity: c9 } = react_native);
class FeedbackButton {
  constructor(arg0) {
    let constructResult;
    const self = this;
    _classCallCheck(this, FeedbackButton);
    const items = [arg0];
    const obj = _getPrototypeOf(FeedbackButton);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = c3(self, constructResult);
    const obj2 = lazyLoadFeedbackIntegration;
    const result = obj2.lazyLoadFeedbackIntegration();
    return tmp3Result;
  }
}
_inherits(FeedbackButton, react.Component);
const entry = {
  key: "componentDidMount",
  value: function componentDidMount() {
    const self = this;
    this._themeListener = metroRequire.addChangeListener(() => {
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
      const obj = _mod1075;
      const theme = obj.getTheme();
      const merged = Object.assign(Object.assign({}, defaultConfiguration.defaultButtonConfiguration), this.props);
      const _Object = Object;
      const assign2 = Object.assign;
      const styles = this.props.styles;
      let triggerButton;
      const obj2 = defaultButtonStyles;
      const assign2Result = assign2({}, obj2.defaultButtonStyles(theme).triggerButton);
      if (null !== styles) {
        if (undefined !== styles) {
          triggerButton = styles.triggerButton;
        }
      }
      const _Object2 = Object;
      const assign3 = Object.assign;
      const assign4 = Object.assign;
      const styles2 = self.props.styles;
      let triggerText;
      const obj3 = assign(assign2Result, triggerButton);
      const tmpResult = defaultButtonStyles;
      const assign4Result = assign4({}, tmpResult.defaultButtonStyles(theme).triggerText);
      if (null !== styles2) {
        if (undefined !== styles2) {
          triggerText = styles2.triggerText;
        }
      }
      const style = assign3(assign4Result, triggerText);
      const _Object3 = Object;
      const assign5 = Object.assign;
      const assign6 = Object.assign;
      const styles3 = self.props.styles;
      let triggerIcon;
      const tmpResult2 = defaultButtonStyles;
      const assign6Result = assign6({}, tmpResult2.defaultButtonStyles(theme).triggerIcon);
      if (null !== styles3) {
        if (undefined !== styles3) {
          triggerIcon = styles3.triggerIcon;
        }
      }
      const createElement = react.createElement;
      const assign5Result = assign5(assign6Result, triggerIcon);
      ({ uri: feedbackIcon.feedbackIcon });
      const element = <metroImportDefault source={{ uri: feedbackIcon.feedbackIcon }} style={assign5Result} />;
      return (
        <React4
          style={obj3}
          onPress={PULL_DOWN_CLOSE_THRESHOLD.showFeedbackWidget}
          accessibilityLabel={merged.triggerAriaLabel}
        >
          {element}
          <metroImportAll style={style} testID="sentry-feedback-button">
            {merged.triggerLabel}
          </metroImportAll>
        </React4>
      );
    },
  },
];
const FeedbackButton_export = _createClass(FeedbackButton, items);

export { FeedbackButton_export as FeedbackButton };
