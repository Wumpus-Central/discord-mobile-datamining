// _runtime/metro/00416__.js
import _modDef417 from "00417__.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import metroRequire from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import noop from "00019__.js";

const RefreshControl = fn;
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
let closure_3 = ["tintColor", "titleColor", "title"];
const jsx = fn(21).jsx;
class RefreshControl {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = hasOwnProperty(this, RefreshControl);
    items1 = [...items];
    tmp2 = closure_7;
    obj = closure_7(RefreshControl);
    tmp3 = metroRequire;
    if (closure_9()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result._lastNativeRefreshing = false;
    tmp3Result._onRefresh = () => {
      props._lastNativeRefreshing = true;
      if (props.props.onRefresh) {
        props = obj.props;
        props.onRefresh();
      }
      props.forceUpdate();
    };
    tmp3Result._setNativeRef = (_nativeRef) => {
      closure_0._nativeRef = _nativeRef;
    };
    return tmp3Result;
  }
}
_inherits(RefreshControl, noop.Component);
const entry = {
  key: "componentDidMount",
  value: function componentDidMount() {
    this._lastNativeRefreshing = this.props.refreshing;
  },
};
let items = [
  entry,
  {
    key: "componentDidUpdate",
    value: function componentDidUpdate(refreshing) {
      const self = this;
      if (this.props.refreshing !== refreshing.refreshing) {
        self._lastNativeRefreshing = self.props.refreshing;
      } else {
        if (tmp) {
          const Commands = RefreshControl(417).Commands;
          Commands.setNativeRefreshing(self._nativeRef, self.props.refreshing);
          self._lastNativeRefreshing = self.props.refreshing;
        }
        tmp = self.props.refreshing !== self._lastNativeRefreshing && self._nativeRef;
      }
    },
  },
  {
    key: "render",
    value: function render() {
      const props = this.props;
      ({ tintColor, titleColor, title } = props);
      const obj = {};
      const tmp = _objectWithoutProperties(props, closure_3);
      const merged = Object.assign(tmp);
      ({ _setNativeRef: obj.ref, _onRefresh: obj.onRefresh } = this);
      return jsx(_modDef417, {});
    },
  },
];

export default _createClass(RefreshControl, items);
