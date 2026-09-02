// === Module 1201: _isNativeReflectConstruct ===

// Module 1201 (_isNativeReflectConstruct)
import _inheritsDefault from "_inherits" /* 98 */;
import closure_2 from "_classCallCheck" /* 41 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const ScreenshotButton = arg1;
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
let c5 = importAllResult;
({ Appearance: closure_6, Image: error, Text: closure_8, TouchableOpacity: c9 } = get_ActivityIndicator);
let fn = this;
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
    _Promise = new _Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      function fulfilled(arg0) {
        try {
          step(iter.next(arg0));
        } catch (tmp5) {
          callback2(tmp5);
        }
      }
      function rejected(arg0) {
        try {
          step(iter.throw(arg0));
        } catch (tmp5) {
          callback2(tmp5);
        }
      }
      let iter = rejected;
      function step(done) {
        if (done.done) {
          callback(done.value);
        } else {
          let tmp = done.value;
          callback = tmp;
          if (!(tmp instanceof fulfilled)) {
            tmp = new tmp((arg0) => {
              arg0(closure_0);
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
      const value = iter2.value;
      if (iter2.done) {
        arg0(value);
      } else {
        closure_0 = value;
        let tmp3 = value;
        if (!(value instanceof fulfilled)) {
          tmp3 = new tmp3((arg0) => {
            arg0(closure_0);
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
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v0 = 2;
        if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          obj = v0(closure_1_1[7]);
          obj.hideScreenshotButton();
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => callback(undefined, undefined, undefined, function*() {
            if (c3 === 2) {
              c3 = 3;
              HermesBuiltin.throwTypeError();
            } else if (tmp5 === 3) {
              if (arg0 === 1) {
                throw arg1;
              } else if (arg0 === 2) {
                let obj = { value: null, done: true };
                obj[0] = arg1;
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
                    throw arg1;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    const table = tmp2;
                    let lib = tmp3;
                    lib = undefined;
                    const NATIVE = closure_1_0(closure_1_1[8]).NATIVE;
                    c2 = 1;
                    c3 = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = NATIVE.captureScreenshot();
                    return obj1;
                  }
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj2 = { value: null, done: true };
                  obj2[0] = arg1;
                  return obj2;
                } else {
                  lib = arg1;
                  let str2 = "ErrorCapturingScreenshot";
                  if (lib) {
                    str2 = "ErrorCapturingScreenshot";
                    if (lib.length > 0) {
                      str2 = lib[0];
                    }
                  }
                  obj = lib(table[7]);
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
          v0 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp9) {
        v0 = tmp;
        throw tmp9;
      }
    }
  });
}
class ScreenshotButton {
  constructor(arg0) {
    self = this;
    tmp = closure_2(this, ScreenshotButton);
    items = [];
    items[0] = global;
    tmp2 = closure_4;
    obj = closure_4(ScreenshotButton);
    tmp3 = closure_3;
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
_inheritsDefault(ScreenshotButton, importAllResult.Component);
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
      let obj = ScreenshotButton(1196);
      const theme = obj.getTheme();
      const merged = Object.assign(Object.assign({}, ScreenshotButton(1198).defaultScreenshotButtonConfiguration), this.props);
      obj1 = ScreenshotButton(1199);
      const styles = this.props.styles;
      let triggerButton;
      const merged1 = Object.assign({}, obj1.defaultScreenshotButtonStyles(theme).triggerButton);
      if (null !== styles) {
        if (undefined !== styles) {
          triggerButton = styles.triggerButton;
        }
      }
      const merged2 = Object.assign(merged1, triggerButton);
      let tmpResult = tmp(1199);
      const styles2 = self.props.styles;
      let triggerText;
      const merged3 = Object.assign({}, tmpResult.defaultScreenshotButtonStyles(theme).triggerText);
      if (null !== styles2) {
        if (undefined !== styles2) {
          triggerText = styles2.triggerText;
        }
      }
      const style = Object.assign(merged3, triggerText);
      tmpResult = tmp(1199);
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
      ({ createElement, createElement: createElement2 } = importAllResult);
      obj1[0] = ScreenshotButton(1200).screenshotIcon;
      obj[0] = obj1;
      obj[1] = merged6;
      const element2 = createElement2(closure_7, obj);
      return <closure_9 source={null} style={null}>{element2}<closure_8 style={style} testID="sentry-feedback-screenshot-button">{merged.triggerLabel}</closure_8></closure_9>;
    }
  }
];

export () => {
  c11 = undefined;
  return c11;
}
export const ScreenshotButton = importDefaultResult(ScreenshotButton, items);