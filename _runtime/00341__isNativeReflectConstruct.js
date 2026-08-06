// _runtime/00341__isNativeReflectConstruct.js
import _objectWithoutProperties from "_objectWithoutProperties";
import importDefaultResult from "_getPrototypeOf";
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult1 from "_createClass";
import importDefaultResult2 from "_inherits";
import { createRef } from "noop";
import { jsx } from "jsxProd";

const KeyboardAvoidingView = importDefault;
let closure_1 = dependencyMap;
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
let closure_2 = ["behavior", "children", "contentContainerStyle", "enabled", "keyboardVerticalOffset", "style", "onLayout"];
let c4 = importDefaultResult;
closure_1 = undefined;
class KeyboardAvoidingView {
  constructor(arg0) {
    self = this;
    tmp = _isNativeReflectConstruct(this, f114184);
    items = [];
    items[0] = global;
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(f114184);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    f114184 = tmp3Result;
    tmp3Result._frame = null;
    tmp3Result._keyboardEvent = null;
    tmp3Result._subscriptions = [];
    tmp3Result._initialFrameHeight = 0;
    tmp3Result._bottom = 0;
    tmp3Result._onKeyboardChange = (_keyboardEvent) => {
      closure_0._keyboardEvent = _keyboardEvent;
      const result = closure_0._updateBottomIfNecessary();
    };
    tmp3Result._onKeyboardHide = (arg0) => {
      closure_0._keyboardEvent = null;
      const result = closure_0._updateBottomIfNecessary();
    };
    f114184 = undefined;
    f114184 = defineProperty((arg0) => {
      let closure_0 = arg0;
      let c3 = 0;
      let c4 = 0;
      return (function*(arg0) {
        if (c4 === 2) {
          c4 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "T", done: null };
          }
        } else {
          try {
            c4 = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let closure_2 = tmp5;
                let closure_1 = tmp2;
                closure_0.persist();
                const _frame = closure_0._frame;
                closure_0._frame = closure_0.nativeEvent.layout;
                if (!closure_0._initialFrameHeight) {
                  closure_0._initialFrameHeight = closure_0._frame.height;
                }
                let tmp8 = _frame;
                if (_frame) {
                  tmp8 = _frame.height === closure_0._frame.height;
                }
                if (!tmp8) {
                  c3 = 1;
                  c4 = 1;
                  const obj1 = { value: null, done: false };
                  obj1[0] = closure_0._updateBottomIfNecessary();
                  return obj1;
                }
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            if (closure_0.props.onLayout) {
              const props = closure_0.props;
              props.onLayout(closure_0);
            }
            c4 = 3;
            return { value: "T", done: null };
          } catch (tmp18) {
            c4 = tmp;
            throw tmp18;
          }
        }
      })();
    });
    tmp3Result._onLayout = function(arg0) {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    tmp3Result._setBottom = (_bottom) => {
      let obj = closure_0;
      let flag = closure_0.props.enabled;
      if (flag == null) {
        flag = true;
      }
      obj._bottom = _bottom;
      if (flag) {
        obj = { bottom: null };
        obj[0] = _bottom;
        obj.setState(obj);
      }
    };
    tmp3Result._updateBottomIfNecessary = defineProperty(function*() {
      let c0;
      let c1;
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_2 = tmp2;
              c1 = tmp3;
              c0 = undefined;
              c1 = undefined;
              closure_2 = undefined;
              if (null != outer1_0._keyboardEvent) {
                const _keyboardEvent = outer1_0._keyboardEvent;
                ({ duration: c0, easing: c1 } = _keyboardEvent);
                c3 = 1;
                c4 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = outer1_0._relativeKeyboardHeight(_keyboardEvent.endCoordinates);
                return obj1;
              } else {
                outer1_0._setBottom(0);
                c4 = 3;
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            closure_2 = arg1;
            if (c0._bottom !== closure_2) {
              c0._setBottom(closure_2);
              const enabled = c0.props.enabled;
              c0 = enabled;
              if (enabled == null) {
                c0 = true;
              }
              let tmp7 = c0;
              if (c0) {
                tmp7 = c0;
              }
              if (tmp7) {
                tmp7 = c1;
              }
              if (tmp7) {
                obj = outer1_0(outer1_1[9]);
                let num3 = 10;
                let num4 = 10;
                if (c0 > 10) {
                  num4 = c0;
                }
                const obj2 = { duration: null, update: null };
                obj2[0] = num4;
                if (c0 > num3) {
                  num3 = c0;
                }
                const obj3 = { duration: null, type: null };
                obj3[0] = num3;
                let str = outer1_0(outer1_1[9]).Types[c1];
                if (!str) {
                  str = "keyboard";
                }
                obj3[1] = str;
                obj2[1] = obj3;
                obj.configureNext(obj2);
              }
            }
          }
          c4 = 3;
          const obj4 = { value: null, done: true };
          obj4[0] = arg1;
          return obj4;
        } catch (tmp29) {
          c4 = tmp;
          throw tmp29;
        }
      }
    });
    tmp3Result.state = { bottom: 0 };
    tmp3Result.viewRef = createRef();
    return tmp3Result;
  }
}
importDefaultResult2(KeyboardAvoidingView, require("noop").Component);
let obj = { key: "_relativeKeyboardHeight", value: null };
closure_1 = importDefaultResult(function(arg0) {
  const self = this;
  let closure_1 = arg0;
  let c3 = 0;
  return (function*(arg0) {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "T", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          let sum = self;
          let num6 = self._frame;
          if (num6) {
            if (tmp18) {
              const keyboardVerticalOffset = sum.props.keyboardVerticalOffset;
              let c2 = keyboardVerticalOffset;
              if (keyboardVerticalOffset == null) {
                c2 = 0;
              }
              let diff = tmp18.screenY - c2;
              if ("height" === sum.props.behavior) {
                const _Math2 = Math;
                sum = sum.state.bottom + num6.y;
                diff = sum + num6.height - diff;
                num6 = 0;
                const bound = Math.max(diff, 0);
              } else {
                const _Math = Math;
                const bound1 = Math.max(num6.y + num6.height - diff, 0);
              }
              c3 = 3;
            }
          }
          c3 = 3;
          return { value: 0, done: true };
        }
      } catch (tmp12) {
        c3 = tmp;
        throw tmp12;
      }
    }
  })();
});
obj[1] = function _relativeKeyboardHeight(endCoordinates) {
  const self = this;
  const apply = closure_1.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
let items = [
  obj,
  {
    key: "componentDidUpdate",
    value: function componentDidUpdate(arg0, bottom) {
      const self = this;
      let flag = this.props.enabled;
      if (flag == null) {
        flag = true;
      }
      if (flag) {
        flag = self._bottom !== bottom.bottom;
      }
      if (flag) {
        const obj = { bottom: null };
        obj[0] = self._bottom;
        self.setState(obj);
      }
    }
  },
  {
    key: "componentDidMount",
    value: function componentDidMount() {
      const self = this;
      if (!obj.isVisible()) {
        self._keyboardEvent = null;
        self._setBottom(0);
      }
      let tmpResult = tmp(343);
      const items = [tmpResult.addListener("keyboardDidHide", self._onKeyboardHide), ];
      tmpResult = tmp(343);
      items[1] = tmpResult.addListener("keyboardDidShow", self._onKeyboardChange);
      self._subscriptions = items;
    }
  },
  {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const _subscriptions = this._subscriptions;
      const item = _subscriptions.forEach((remove) => {
        remove.remove();
      });
    }
  },
  {
    key: "render",
    value: function render() {
      let behavior;
      let children;
      let enabled;
      let keyboardVerticalOffset;
      let onLayout;
      let style;
      const self = this;
      const props = this.props;
      ({ behavior, children, enabled } = props);
      let tmp = undefined === enabled;
      if (!tmp) {
        tmp = enabled;
      }
      ({ keyboardVerticalOffset, style, onLayout } = props);
      const tmp2 = callback(props, closure_2);
      let num = 0;
      if (true === tmp) {
        num = self.state.bottom;
      }
      if ("height" === behavior) {
        let tmp27;
        if (tmp26) {
          let obj = { height: null, flex: 0 };
          obj[0] = self._initialFrameHeight - num;
          tmp27 = obj;
        }
        obj = { ref: null, style: null, onLayout: null };
        obj[0] = self.viewRef;
        tmp26 = null != self._frame && self.state.bottom > 0;
        const tmp31 = KeyboardAvoidingView(108);
        obj[1] = KeyboardAvoidingView(254).compose(style, tmp27);
        obj[2] = self._onLayout;
        const merged = Object.assign(tmp2);
        obj.children = children;
        return <tmp31 ref={null} style={null} onLayout={null} />;
      } else if ("position" === behavior) {
        const obj1 = { ref: null, style: null, onLayout: null };
        obj1[0] = self.viewRef;
        obj1[1] = style;
        obj1[2] = self._onLayout;
        const merged1 = Object.assign(tmp2);
        let obj2 = { style: null, children: null };
        const tmp20 = KeyboardAvoidingView(108);
        const tmp24 = KeyboardAvoidingView(108);
        const obj3 = { bottom: null };
        obj3[0] = num;
        obj2[0] = KeyboardAvoidingView(254).compose(props.contentContainerStyle, obj3);
        obj2[1] = children;
        obj1.children = <tmp24 style={null}>{null}</tmp24>;
        return <tmp20 ref={null} style={null} onLayout={null} />;
      } else if ("padding" === behavior) {
        const obj4 = { ref: null, style: null, onLayout: null };
        obj4[0] = self.viewRef;
        obj2 = KeyboardAvoidingView(254);
        const obj5 = { paddingBottom: null };
        obj5[0] = num;
        obj4[1] = obj2.compose(style, obj5);
        obj4[2] = self._onLayout;
        const merged2 = Object.assign(tmp2);
        obj4.children = children;
        return jsx(KeyboardAvoidingView(108), { ref: null, style: null, onLayout: null });
      } else {
        obj = { ref: null, onLayout: null, style: null };
        ({ viewRef: obj[0], _onLayout: obj[1] } = self);
        obj[2] = style;
        const merged3 = Object.assign(tmp2);
        obj.children = children;
        return jsx(KeyboardAvoidingView(108), { ref: null, onLayout: null, style: null });
      }
    }
  }
];

export default importDefaultResult1(KeyboardAvoidingView, items);