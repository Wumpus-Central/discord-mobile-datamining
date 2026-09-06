// === Module 1069: ? ===

// Module 1069
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;

const ScreenshotButton = fn;
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
  } catch (err) {
  }
}
get_ActivityIndicator = fn(17);
({ Appearance: metroRequire, Image: closure_7, Text: closure_8, TouchableOpacity: closure_9 } = get_ActivityIndicator);
fn = this;
if (this) {
  fn = this.__awaiter;
}
if (!fn) {
  fn = (arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    let _Promise = arg2;
    closure_3 = arg3;
    if (!arg2) {
      _Promise = Promise;
    }
    _Promise = new _Promise((fn, arg1) => {
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
          closure_0(done.value);
        } else {
          let tmp = done.value;
          closure_0 = tmp;
          if (!(tmp instanceof Promise)) {
            tmp = new tmp((fn) => {
              fn(value);
            });
          }
          tmp.then(fulfilled, iter);
        }
      }
      let items = closure_1;
      if (!closure_1) {
        items = [];
      }
      iter = iter.apply(closure_0, items);
      const iter2 = iter.next();
      value = iter2.value;
      if (iter2.done) {
        fn(value);
      } else {
        closure_0 = value;
        let tmp3 = value;
        if (!(value instanceof fulfilled)) {
          tmp3 = new tmp3((fn) => {
            fn(value);
          });
        }
        tmp3.then(fulfilled, rejected);
      }
    });
    return _Promise;
  };
}
function takeScreenshot() {
  return fn(undefined, undefined, undefined, function*() {
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c0 = 2;
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          obj = ScreenshotButton(dependencyMap[7]);
          obj.hideScreenshotButton();
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => closure_1_12(undefined, undefined, undefined, function*() {
            if (c3 === 2) {
              c3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp5 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                let obj = { value, done: true };
                return obj;
              } else {
                return { value: "HermesInternal", done: null };
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
                    obj = { value, done: true };
                    return obj;
                  } else {
                    closure_1 = tmp2;
                    closure_0 = tmp3;
                    closure_128_0 = undefined;
                    const NATIVE = closure_2_0(closure_2_1[8]).NATIVE;
                    c2 = 1;
                    c3 = 1;
                    const obj1 = { value: NATIVE.captureScreenshot(), done: false };
                    return obj1;
                  }
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj2 = { value, done: true };
                  return obj2;
                } else {
                  closure_128_0 = value;
                  let str2 = "ErrorCapturingScreenshot";
                  if (closure_128_0) {
                    str2 = "ErrorCapturingScreenshot";
                    if (closure_128_0.length > 0) {
                      str2 = closure_128_0[0];
                    }
                  }
                  closure_129_11 = str2;
                  obj = closure_129_0(closure_129_1[7]);
                  obj.showFeedbackWidget();
                  c3 = 3;
                  return { value: "HermesInternal", done: null };
                }
              } catch (tmp18) {
                c3 = tmp;
                throw tmp18;
              }
            }
          }), 100);
          c0 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp9) {
        c0 = tmp;
        throw tmp9;
      }
    }
  });
}
class ScreenshotButton {
  constructor(arg0) {
    self = this;
    tmp = c2(this, ScreenshotButton);
    items = [];
    items[0] = global;
    tmp2 = closure_4;
    obj = closure_4(ScreenshotButton);
    tmp3 = closure_3;
    if (c10()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    obj2 = closure_0(closure_1[9]);
    result = obj2.lazyLoadFeedbackIntegration();
    return tmp3Result;
  }
}
_inherits(ScreenshotButton, noop.Component);
const entry = {
  key: "componentDidMount",
  value: function componentDidMount() {
    const self = this;
    this._themeListener = timestampProducer.addChangeListener(() => {
      self.forceUpdate();
    });
  }
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
    }
  },
  {
    key: "render",
    value: function render() {
      const self = this;
      let obj = ScreenshotButton(1064);
      const theme = obj.getTheme();
      const merged = Object.assign(Object.assign({}, ScreenshotButton(1066).defaultScreenshotButtonConfiguration), this.props);
      let obj1 = ScreenshotButton(1067);
      const styles = this.props.styles;
      let triggerButton;
      const merged1 = Object.assign({}, obj1.defaultScreenshotButtonStyles(theme).triggerButton);
      if (null !== styles) {
        if (undefined !== styles) {
          triggerButton = styles.triggerButton;
        }
      }
      const merged2 = Object.assign(merged1, triggerButton);
      let tmpResult = ScreenshotButton(1067);
      const styles2 = self.props.styles;
      let triggerText;
      const merged3 = Object.assign({}, tmpResult.defaultScreenshotButtonStyles(theme).triggerText);
      if (null !== styles2) {
        if (undefined !== styles2) {
          triggerText = styles2.triggerText;
        }
      }
      const style = Object.assign(merged3, triggerText);
      tmpResult = ScreenshotButton(1067);
      const styles3 = self.props.styles;
      let triggerIcon;
      const merged5 = Object.assign({}, tmpResult.defaultScreenshotButtonStyles(theme).triggerIcon);
      if (null !== styles3) {
        if (undefined !== styles3) {
          triggerIcon = styles3.triggerIcon;
        }
      }
      obj = { style: merged2, onPress: takeScreenshot, accessibilityLabel: merged.triggerAriaLabel };
      obj = { source: null, style: null };
      obj1 = { uri: null };
      const merged6 = Object.assign(merged5, triggerIcon);
      ({ createElement, createElement: createElement2 } = noop);
      obj1.uri = ScreenshotButton(1068).screenshotIcon;
      obj.source = obj1;
      obj.style = merged6;
      const element2 = createElement2(React5, obj);
      return <React7 source={null} style={null}>{element2}<React6 style={style} testID="sentry-feedback-screenshot-button">{merged.triggerLabel}</React6></React7>;
    }
  }
];

export () => {
  c11 = undefined;
  return c11;
}
export const ScreenshotButton = _createClass(ScreenshotButton, items);