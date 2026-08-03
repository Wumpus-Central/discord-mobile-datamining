import _objectWithoutProperties from "_objectWithoutProperties";
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import importDefaultResult1 from "_inherits";
import { jsx } from "jsxProd";

const RefreshControl = arg1;
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
let closure_3 = ["tintColor", "titleColor", "title"];
class RefreshControl {
  constructor() {
    self = this;
    items = [...arguments];
    apply = undefined;
    tmp = _isNativeReflectConstruct(this, apply);
    items1 = [...items];
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(apply);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    apply = tmp3Result;
    tmp3Result._lastNativeRefreshing = false;
    tmp3Result._onRefresh = () => {
      _undefined._lastNativeRefreshing = true;
      if (_undefined.props.onRefresh) {
        const props = obj.props;
        props.onRefresh();
      }
      _undefined.forceUpdate();
    };
    tmp3Result._setNativeRef = (_nativeRef) => {
      c0._nativeRef = _nativeRef;
    };
    return tmp3Result;
  }
}
importDefaultResult1(RefreshControl, require("noop").Component);
let items = [
  {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._lastNativeRefreshing = this.props.refreshing;
    }
  },
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
    }
  },
  {
    key: "render",
    value: function render() {
      let tintColor;
      let title;
      let titleColor;
      const props = this.props;
      ({ tintColor, titleColor, title } = props);
      const obj = {};
      const tmp = callback(props, closure_3);
      const merged = Object.assign(tmp);
      ({ _setNativeRef: obj.ref, _onRefresh: obj.onRefresh } = this);
      return jsx(importDefault(417), {});
    }
  }
];

export default importDefaultResult(RefreshControl, items);