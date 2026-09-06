// === Module 341: ? ===

// Module 341
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import metroRequire from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;

const KeyboardAvoidingView = importDefault;
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
let closure_2 = ["behavior", "children", "contentContainerStyle", "enabled", "keyboardVerticalOffset", "style", "onLayout"];
const createRef = fn(19).createRef;
const jsx = fn(21).jsx;
let dependencyMap;
class KeyboardAvoidingView {
  constructor(arg0) {
    self = this;
    tmp = hasOwnProperty(this, KeyboardAvoidingView);
    items = [];
    items[0] = global;
    tmp2 = closure_7;
    obj = closure_7(KeyboardAvoidingView);
    tmp3 = metroRequire;
    if (c10()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
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
    closure_0 = undefined;
    closure_0 = closure_4(async (arg0) => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
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
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_2 = tmp5;
              closure_1 = tmp2;
              closure_129_0 = closure_0;
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
                const obj1 = { value: closure_0._updateBottomIfNecessary(), done: false };
                return obj1;
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          }
          if (closure_0.props.onLayout) {
            const props = closure_0.props;
            props.onLayout(closure_129_0);
          }
          c4 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp18) {
          c4 = tmp;
          throw tmp18;
        }
      }
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
        obj = { bottom: _bottom };
        obj.setState(obj);
      }
    };
    tmp3Result._updateBottomIfNecessary = closure_4(async () => {
      if (c4 === 2) {
        c4 = 3;
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
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_2 = tmp2;
              closure_129_0 = undefined;
              closure_129_1 = undefined;
              closure_129_2 = undefined;
              if (null != _true._keyboardEvent) {
                const _keyboardEvent = _true._keyboardEvent;
                ({ duration: closure_129_0, easing: closure_129_1 } = _keyboardEvent);
                c3 = 1;
                c4 = 1;
                const obj1 = { value: _true._relativeKeyboardHeight(_keyboardEvent.endCoordinates), done: false };
                return obj1;
              } else {
                _true._setBottom(0);
                c4 = 3;
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_129_2 = value;
            if (closure_130_0._bottom !== closure_129_2) {
              closure_130_0._setBottom(closure_129_2);
              const enabled = closure_130_0.props.enabled;
              _true = enabled;
              if (enabled == null) {
                _true = true;
              }
              let tmp7 = _true;
              if (_true) {
                tmp7 = closure_129_0;
              }
              if (tmp7) {
                tmp7 = closure_129_1;
              }
              if (tmp7) {
                obj = _true(tmp3[9]);
                let num3 = 10;
                let num4 = 10;
                if (closure_129_0 > 10) {
                  num4 = closure_129_0;
                }
                const obj2 = { duration: num4, update: null };
                if (closure_129_0 > num3) {
                  num3 = closure_129_0;
                }
                const obj3 = { duration: num3, type: null };
                let str = _true(tmp3[9]).Types[closure_129_1];
                if (!str) {
                  str = "keyboard";
                }
                obj3.type = str;
                obj2.update = obj3;
                obj.configureNext(obj2);
              }
            }
          }
          c4 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } catch (tmp29) {
          c4 = tmp;
          throw tmp29;
        }
      }
    });
    tmp3Result.state = { bottom: 0 };
    tmp3Result.viewRef = closure_8();
    return tmp3Result;
  }
}
_inherits(KeyboardAvoidingView, noop.Component);
const entry = { key: "_relativeKeyboardHeight", value: null };
dependencyMap = asyncGeneratorStep(async function(arg0) {
  const self = this;
  const screenY = arg0;
  c3 = 0;
  return (async (arg0) => {
    if (c3 === 2) {
      c3 = 3;
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
        c3 = 2;
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          let sum = self;
          let num6 = self._frame;
          if (num6) {
            if (screenY) {
              const keyboardVerticalOffset = sum.props.keyboardVerticalOffset;
              c2 = keyboardVerticalOffset;
              if (keyboardVerticalOffset == null) {
                c2 = 0;
              }
              let diff = screenY.screenY - c2;
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
entry.value = function _relativeKeyboardHeight(endCoordinates) {
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
  entry,
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
        const obj = { bottom: self._bottom };
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
      let tmpResult = KeyboardAvoidingView(343);
      const items = [tmpResult.addListener("keyboardDidHide", self._onKeyboardHide), ];
      tmpResult = KeyboardAvoidingView(343);
      items[1] = tmpResult.addListener("keyboardDidShow", self._onKeyboardChange);
      self._subscriptions = items;
      obj = KeyboardAvoidingView(343);
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
      const self = this;
      const props = this.props;
      ({ behavior, children, enabled } = props);
      let tmp = undefined === enabled;
      if (!tmp) {
        tmp = enabled;
      }
      ({ keyboardVerticalOffset, style, onLayout } = props);
      const tmp2 = _objectWithoutProperties(props, closure_2);
      let num = 0;
      if (true === tmp) {
        num = self.state.bottom;
      }
      if ("height" === behavior) {
        let tmp27;
        if (tmp26) {
          let obj = { height: self._initialFrameHeight - num, flex: 0 };
          tmp27 = obj;
        }
        obj = { ref: self.viewRef, style: null, onLayout: null };
        tmp26 = null != self._frame && self.state.bottom > 0;
        const tmp31 = KeyboardAvoidingView(108);
        obj.style = KeyboardAvoidingView(254).compose(style, tmp27);
        obj.onLayout = self._onLayout;
        const merged = Object.assign(tmp2);
        obj.children = children;
        return <tmp31 ref={self.viewRef} style={null} onLayout={null} />;
      } else if ("position" === behavior) {
        const obj1 = { ref: self.viewRef, style, onLayout: self._onLayout };
        const merged1 = Object.assign(tmp2);
        let obj2 = { style: null, children: null };
        const tmp20 = KeyboardAvoidingView(108);
        const tmp24 = KeyboardAvoidingView(108);
        const obj3 = { bottom: num };
        obj2.style = KeyboardAvoidingView(254).compose(props.contentContainerStyle, obj3);
        obj2.children = children;
        obj1.children = <tmp24 style={null}>{null}</tmp24>;
        return <tmp20 ref={self.viewRef} style={style} onLayout={self._onLayout} />;
      } else if ("padding" === behavior) {
        const obj4 = { ref: self.viewRef, style: null, onLayout: null };
        obj2 = KeyboardAvoidingView(254);
        const obj5 = { paddingBottom: num };
        obj4.style = obj2.compose(style, obj5);
        obj4.onLayout = self._onLayout;
        const merged2 = Object.assign(tmp2);
        obj4.children = children;
        return jsx(KeyboardAvoidingView(108), { ref: self.viewRef, style: null, onLayout: null });
      } else {
        obj = { ref: null, onLayout: null, style: null };
        ({ viewRef: obj.ref, _onLayout: obj.onLayout } = self);
        obj.style = style;
        const merged3 = Object.assign(tmp2);
        obj.children = children;
        return jsx(KeyboardAvoidingView(108), { ref: null, onLayout: null, style: null });
      }
    }
  }
];

export default _createClass(KeyboardAvoidingView, items);