// === Module 416: ? ===

// Module 416
import Fragment from "Fragment" /* 21 */;
import _mod417 from "module_417" /* 417 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import metroRequire from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react from "react" /* 19 */;

const _modDef417 = _mod417;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
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
  }
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
      const tmp = _objectWithoutProperties(props, closure_3);
      _modDef417;
      const merged = Object.assign(tmp);
      ({ _setNativeRef: obj.ref, _onRefresh: obj.onRefresh } = this);
      return <tmp2 />;
    }
  }
];

export default _createClass(RefreshControl, items);