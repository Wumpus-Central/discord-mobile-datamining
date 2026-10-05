// _runtime/metro/00341__.js
import react2 from "../00019_react.js";
import Fragment from "../react/00021_Fragment.js";
import ViewDefault from "../00108_View.js";
import get_hairlineWidthDefault from "../00254_get_hairlineWidth.js";
import _modDef343 from "00343__.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import _asyncToGenerator from "00005__asyncToGenerator.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import metroRequire from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

const react = react2;
let c2, c4;

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
let closure_2 = [
  "behavior",
  "children",
  "contentContainerStyle",
  "enabled",
  "keyboardVerticalOffset",
  "style",
  "onLayout",
];
const createRef = react2.createRef;
const jsx = Fragment.jsx;
let closure_1;
class KeyboardAvoidingView {
  constructor(arg0) {
    let constructResult;
    const self = this;
    const tmp = _classCallCheck(this, KeyboardAvoidingView);
    const items = [arg0];
    let obj = _getPrototypeOf(KeyboardAvoidingView);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = metroRequire(self, constructResult);
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
    let closure_0 = _asyncToGenerator(async (arg0) => {
      closure_0 = arg0;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_2 = tmp4;
              closure_1 = tmp;
              closure_0.persist();
              const _frame = closure_0._frame;
              closure_0._frame = closure_0.nativeEvent.layout;
              if (!closure_0._initialFrameHeight) {
                closure_0._initialFrameHeight = closure_0._frame.height;
              }
              const tmp7 = _frame && _frame.height === closure_0._frame.height;
              if (!tmp7) {
                c3 = 1;
                c4 = 1;
                const obj4 = { value: closure_0._updateBottomIfNecessary(), done: false };
                return obj4;
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          }
          if (closure_0.props.onLayout) {
            const props = closure_0.props;
            props.onLayout(closure_0);
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp17) {
          c4 = 3;
          throw tmp17;
        }
      }
    });
    tmp3Result._onLayout = function (arg0) {
      return closure_0(...arguments);
    };
    tmp3Result._setBottom = (_bottom) => {
      let flag = closure_0.props.enabled;
      if (flag == null) {
        flag = true;
      }
      closure_0._bottom = _bottom;
      if (flag) {
        const obj2 = { bottom: _bottom };
        closure_0.setState(obj2);
      }
    };
    tmp3Result._updateBottomIfNecessary = _asyncToGenerator(async () => {
      let c0;
      let c1;
      let obj6;
      let str;
      if (c4 === 2) {
        c4 = 3;
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
          let _true;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp2;
              _true = undefined;
              c1 = undefined;
              closure_2 = undefined;
              if (null != _true._keyboardEvent) {
                const _keyboardEvent = _true._keyboardEvent;
                ({ duration: c0, easing: c1 } = _keyboardEvent);
                c3 = 1;
                c4 = 1;
                const obj4 = { value: _true._relativeKeyboardHeight(_keyboardEvent.endCoordinates), done: false };
                return obj4;
              } else {
                _true._setBottom(0);
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_2 = value;
            if (closure_130_0._bottom !== closure_2) {
              closure_130_0._setBottom(closure_2);
              const enabled = closure_130_0.props.enabled;
              _true = enabled;
              if (enabled == null) {
                _true = true;
              }
              const tmp6 = _true && _true && c1;
              if (tmp6) {
                let num3 = 10;
                let num4 = 10;
                const configureNext = _true(closure_1[9]).configureNext;
                const tmp13 = _true(closure_1[9]);
                if (_true > 10) {
                  num4 = _true;
                }
                const obj = { duration: num4, update: obj6 };
                if (_true > num3) {
                  num3 = _true;
                }
                obj6 = { duration: num3, type: str };
                str = _true(closure_1[9]).Types[c1] || "keyboard";
                configureNext(obj);
              }
            }
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp29) {
          c4 = 3;
          throw tmp29;
        }
      }
    });
    tmp3Result.state = { bottom: 0 };
    tmp3Result.viewRef = createRef();
    return tmp3Result;
  }
}
_inherits(KeyboardAvoidingView, react.Component);
const entry = {
  key: "_relativeKeyboardHeight",
  value: function _relativeKeyboardHeight(endCoordinates) {
    return closure_1(...arguments);
  },
};
closure_1 = _asyncToGenerator(async function (arg0) {
  const self = this;
  let screenY = arg0;
  let c3 = 0;
  return (async (arg0) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        return { value, done: true };
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          return { value, done: true };
        } else {
          const _frame = self._frame;
          if (_frame) {
            if (screenY) {
              let bound;
              const keyboardVerticalOffset = self.props.keyboardVerticalOffset;
              c2 = keyboardVerticalOffset;
              screenY = screenY.screenY;
              if (keyboardVerticalOffset == null) {
                c2 = 0;
              }
              const diff = screenY - c2;
              if ("height" === self.props.behavior) {
                const _Math2 = Math;
                bound = Math.max(self.state.bottom + _frame.y + _frame.height - diff, 0);
              } else {
                const _Math = Math;
                bound = Math.max(_frame.y + _frame.height - diff, 0);
              }
              c3 = 3;
              return { value: bound, done: true };
            }
          }
          c3 = 3;
          return { value: 0, done: true };
        }
      } catch (tmp9) {
        c3 = 3;
        throw tmp9;
      }
    }
  })();
});
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
    },
  },
  {
    key: "componentDidMount",
    value: function componentDidMount() {
      const self = this;
      const obj = _modDef343;
      if (!obj.isVisible()) {
        self._keyboardEvent = null;
        self._setBottom(0);
      }
      const items = [,];
      const tmpResult = _modDef343;
      items[0] = tmpResult.addListener("keyboardDidHide", self._onKeyboardHide);
      const tmpResult2 = _modDef343;
      items[1] = tmpResult2.addListener("keyboardDidShow", self._onKeyboardChange);
      self._subscriptions = items;
    },
  },
  {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const _subscriptions = this._subscriptions;
      const item = _subscriptions.forEach((remove) => {
        remove.remove();
      });
    },
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
      const contentContainerStyle = props.contentContainerStyle;
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
        const tmp26 = null != self._frame && self.state.bottom > 0;
        if (tmp26) {
          tmp27 = { height: self._initialFrameHeight - num, flex: 0 };
          const obj2 = { height: self._initialFrameHeight - num, flex: 0 };
        }
        ViewDefault;
        const obj11 = get_hairlineWidthDefault;
        const merged = Object.assign(tmp2);
        return (
          <tmp31 ref={self.viewRef} style={obj11.compose(style, tmp27)} onLayout={self._onLayout}>
            {children}
          </tmp31>
        );
      } else if ("position" === behavior) {
        ViewDefault;
        const merged1 = Object.assign(tmp2);
        ViewDefault;
        const obj8 = { bottom: num };
        const obj7 = get_hairlineWidthDefault;
        return (
          <tmp20 ref={self.viewRef} style={style} onLayout={self._onLayout}>
            <tmp24 style={obj7.compose(contentContainerStyle, obj8)}>{children}</tmp24>
          </tmp20>
        );
      } else if ("padding" === behavior) {
        ViewDefault;
        const obj10 = { paddingBottom: num };
        const obj3 = get_hairlineWidthDefault;
        const merged2 = Object.assign(tmp2);
        return (
          <tmp13 ref={self.viewRef} style={obj3.compose(style, obj10)} onLayout={self._onLayout}>
            {children}
          </tmp13>
        );
      } else {
        const obj = { ref: null, onLayout: null, style, children };
        ({ viewRef: obj.ref, _onLayout: obj.onLayout } = self);
        ViewDefault;
        const merged3 = Object.assign(tmp2);
        return (
          <tmp6 ref={null} onLayout={null} style={style}>
            {children}
          </tmp6>
        );
      }
    },
  },
];

export default _createClass(KeyboardAvoidingView, items);
