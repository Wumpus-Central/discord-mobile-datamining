// _runtime/00416__isNativeReflectConstruct.js
import noopAll from "00019_noop.js";
import __INTERNAL_VIEW_CONFIGDefault from "metro/00417___INTERNAL_VIEW_CONFIG.js";
import closure_4 from "metro/00109__objectWithoutProperties.js";
import closure_5 from "metro/00041__classCallCheck.js";
import closure_6 from "metro/00093__possibleConstructorReturn.js";
import closure_7 from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";
import importDefaultResult1 from "00098__inherits.js";
import { jsx } from "react/00021_jsxProd.js";

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
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
let closure_3 = ["tintColor", "titleColor", "title"];
class RefreshControl {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_5(this, closure_0);
    items1 = [...items];
    tmp2 = closure_7;
    obj = closure_7(closure_0);
    tmp3 = closure_6;
    if (_isNativeReflectConstruct()) {
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
importDefaultResult1(RefreshControl, noopAll.Component);
let items = [
  {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._lastNativeRefreshing = this.props.refreshing;
    },
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
    },
  },
  {
    key: "render",
    value: function render() {
      const props = this.props;
      ({ tintColor, titleColor, title } = props);
      const obj = {};
      const tmp = callback(props, closure_3);
      const merged = Object.assign(tmp);
      ({ _setNativeRef: obj.ref, _onRefresh: obj.onRefresh } = this);
      return jsx(__INTERNAL_VIEW_CONFIGDefault, {});
    },
  },
];

export default importDefaultResult(RefreshControl, items);
