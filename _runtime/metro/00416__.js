// _runtime/metro/00416__.js
import Fragment from "../react/00021_Fragment.js";
import _mod417 from "00417__.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import metroRequire from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import react from "../00019_react.js";

const _modDef417 = _mod417;

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
let closure_3 = ["tintColor", "titleColor", "title"];
const jsx = Fragment.jsx;
class RefreshControl {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    _classCallCheck(this, RefreshControl);
    const items1 = [...items];
    const obj = _getPrototypeOf(RefreshControl);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = metroRequire(self, constructResult);
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
      props._nativeRef = _nativeRef;
    };
    return tmp3Result;
  }
}
_inherits(RefreshControl, react.Component);
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
        const tmp = self.props.refreshing !== self._lastNativeRefreshing && self._nativeRef;
        if (tmp) {
          const Commands = _mod417.Commands;
          Commands.setNativeRefreshing(self._nativeRef, self.props.refreshing);
          self._lastNativeRefreshing = self.props.refreshing;
        }
      }
    },
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
      const tmp = _objectWithoutProperties(props, closure_3);
      _modDef417;
      const merged = Object.assign(tmp);
      ({ _setNativeRef: obj.ref, _onRefresh: obj.onRefresh } = this);
      return <tmp2 />;
    },
  },
];

export default _createClass(RefreshControl, items);
