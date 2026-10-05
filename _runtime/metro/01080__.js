// _runtime/metro/01080__.js
import PULL_DOWN_CLOSE_THRESHOLD from "../01073_PULL_DOWN_CLOSE_THRESHOLD.js";
import lazyLoadFeedbackIntegration from "../01074_lazyLoadFeedbackIntegration.js";
import _mod1075 from "01075__.js";
import defaultConfiguration from "../01077_defaultConfiguration.js";
import defaultButtonStyles from "../01078_defaultButtonStyles.js";
import feedbackIcon from "../01079_feedbackIcon.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3_mod from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import react from "../00019_react.js";
import react_native from "../00017_react-native.js";

let c0, c11, c2;

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
let c3 = c3_mod;
({ Appearance: metroRequire, Image: metroImportDefault, Text: metroImportAll, TouchableOpacity: c9 } = react_native);
let closure_12 =
  (this && this.__awaiter) ||
  ((arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let _Promise = arg2;
    const Promise = arg2;
    let closure_3 = arg3;
    if (!arg2) {
      let tmp = globalThis;
      _Promise = Promise;
    }
    const _Promise1 = new _Promise(function (fn, arg1) {
      closure_0 = fn;
      closure_1 = arg1;
      function fulfilled(result) {
        try {
          step(iter.next(result));
        } catch (tmp5) {
          closure_1(tmp5);
        }
      }
      function rejected(arg0) {
        try {
          step(iter.throw(arg0));
        } catch (tmp5) {
          closure_1(tmp5);
        }
      }
      let iter = rejected;
      function step(done) {
        if (done.done) {
          fn(done.value);
        } else {
          let tmp1 = done.value;
          const value = tmp1;
          if (!(tmp1 instanceof Promise)) {
            const self = this;
            const self2 = this;
            tmp1 = new tmp((fn) => {
              fn(value);
            });
          }
          tmp1.then(fulfilled, iter);
        }
      }
      let items = closure_1;
      const tmp = iter;
      const apply = iter.apply;
      const tmp2 = closure_0;
      if (!closure_1) {
        items = [];
      }
      iter = apply(tmp2, items);
      const iter2 = iter.next();
      let value = iter2.value;
      if (iter2.done) {
        const tmp5 = fn(value);
      } else {
        let tmp32 = value;
        if (!(value instanceof fulfilled)) {
          let self = this;
          let self2 = this;
          tmp32 = new tmp3((fn) => {
            fn(value);
          });
        }
        tmp32.then(fulfilled, rejected);
      }
    });
    return _Promise1;
  });
function takeScreenshot() {
  return closure_12(undefined, undefined, undefined, function* () {
    if (c0 === 2) {
      c0 = 3;
      const str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c0 = 2;
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          let obj3 = { value, done: true };
          return obj3;
        } else {
          let obj = PULL_DOWN_CLOSE_THRESHOLD;
          obj.hideScreenshotButton();
          const tmp6 = globalThis;
          const _setTimeout = setTimeout;
          const timerId = setTimeout(
            () =>
              closure_1_12(undefined, undefined, undefined, function* () {
                if (c3 === 2) {
                  c3 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp4 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    const obj2 = { value, done: true };
                    return obj2;
                  } else {
                    return { value: "IconComponent", done: null };
                  }
                } else {
                  try {
                    c3 = 2;
                    if (0 === c2) {
                      if (arg0 === 1) {
                        c3 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c3 = 3;
                        const obj3 = { value, done: true };
                        return obj3;
                      } else {
                        let closure_1 = tmp;
                        let length;
                        const NATIVE = closure_2_0(closure_2_1[8]).NATIVE;
                        c2 = 1;
                        c3 = 1;
                        const obj4 = { value: NATIVE.captureScreenshot(), done: false };
                        return obj4;
                      }
                    } else if (arg0 === 1) {
                      c3 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c3 = 3;
                      const obj5 = { value, done: true };
                      return obj5;
                    } else {
                      length = value;
                      const obj = closure_129_0(closure_129_1[7]);
                      obj.showFeedbackWidget();
                      c3 = 3;
                      return { value: "IconComponent", done: null };
                    }
                  } catch (tmp17) {
                    c3 = 3;
                    throw tmp17;
                  }
                }
              }),
            100,
          );
          c0 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp8) {
        c0 = 3;
        throw tmp8;
      }
    }
  });
}
class ScreenshotButton {
  constructor(arg0) {
    let constructResult;
    const self = this;
    _classCallCheck(this, ScreenshotButton);
    const items = [arg0];
    const obj = _getPrototypeOf(ScreenshotButton);
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
_inherits(ScreenshotButton, react.Component);
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
      let assign5Result;
      let createElement;
      let createElement2;
      let obj6;
      const self = this;
      const obj = _mod1075;
      const theme = obj.getTheme();
      const merged = Object.assign(
        Object.assign({}, defaultConfiguration.defaultScreenshotButtonConfiguration),
        this.props,
      );
      const _Object = Object;
      const assign2 = Object.assign;
      const styles = this.props.styles;
      let triggerButton;
      const obj2 = defaultButtonStyles;
      const assign2Result = assign2({}, obj2.defaultScreenshotButtonStyles(theme).triggerButton);
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
      const assign4Result = assign4({}, tmpResult.defaultScreenshotButtonStyles(theme).triggerText);
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
      const assign6Result = assign6({}, tmpResult2.defaultScreenshotButtonStyles(theme).triggerIcon);
      if (null !== styles3) {
        if (undefined !== styles3) {
          triggerIcon = styles3.triggerIcon;
        }
      }
      const obj5 = { source: obj6, style: assign5Result };
      ({ createElement, createElement: createElement2 } = react);
      obj6 = { uri: feedbackIcon.screenshotIcon };
      assign5Result = assign5(assign6Result, triggerIcon);
      const element2 = createElement2(metroImportDefault, obj5);
      return (
        <React4 style={obj3} onPress={takeScreenshot} accessibilityLabel={merged.triggerAriaLabel}>
          {element2}
          <metroImportAll style={style} testID="sentry-feedback-screenshot-button">
            {merged.triggerLabel}
          </metroImportAll>
        </React4>
      );
    },
  },
];
const ScreenshotButton_export = _createClass(ScreenshotButton, items);

export const getCapturedScreenshot = () => {
  c11 = undefined;
  return c11;
};
export { ScreenshotButton_export as ScreenshotButton };
