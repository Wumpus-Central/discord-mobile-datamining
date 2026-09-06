// === Module 406: ? ===

// Module 406
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import hasOwnProperty from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;

const SectionList = importDefault;
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
let closure_2 = ["stickySectionHeadersEnabled"];
const jsx = fn(21).jsx;
class SectionList {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_4(this, SectionList);
    items1 = [...items];
    tmp2 = metroRequire;
    obj = metroRequire(SectionList);
    tmp3 = hasOwnProperty;
    if (closure_8()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result._captureRef = (_wrapperListRef) => {
      closure_0._wrapperListRef = _wrapperListRef;
    };
    return tmp3Result;
  }
}
_inherits(SectionList, noop.PureComponent);
const entry = {
  key: "scrollToLocation",
  value: function scrollToLocation(arg0) {
    if (null != this._wrapperListRef) {
      const _wrapperListRef = tmp._wrapperListRef;
      _wrapperListRef.scrollToLocation(arg0);
    }
  }
};
let items = [
  entry,
  {
    key: "recordInteraction",
    value: function recordInteraction() {
      let _wrapperListRef = this._wrapperListRef;
      if (_wrapperListRef) {
        const _wrapperListRef2 = this._wrapperListRef;
        _wrapperListRef = _wrapperListRef2.getListRef();
      }
      if (_wrapperListRef) {
        _wrapperListRef.recordInteraction();
      }
    }
  },
  {
    key: "flashScrollIndicators",
    value: function flashScrollIndicators() {
      let _wrapperListRef = this._wrapperListRef;
      if (_wrapperListRef) {
        const _wrapperListRef2 = this._wrapperListRef;
        _wrapperListRef = _wrapperListRef2.getListRef();
      }
      if (_wrapperListRef) {
        const result = _wrapperListRef.flashScrollIndicators();
      }
    }
  },
  {
    key: "getScrollResponder",
    value: function getScrollResponder() {
      let _wrapperListRef = this._wrapperListRef;
      if (_wrapperListRef) {
        const _wrapperListRef2 = this._wrapperListRef;
        _wrapperListRef = _wrapperListRef2.getListRef();
      }
      return _wrapperListRef ? _wrapperListRef.getScrollResponder() : undefined;
    }
  },
  {
    key: "getScrollableNode",
    value: function getScrollableNode() {
      let _wrapperListRef = this._wrapperListRef;
      if (_wrapperListRef) {
        const _wrapperListRef2 = this._wrapperListRef;
        _wrapperListRef = _wrapperListRef2.getListRef();
      }
      return _wrapperListRef ? _wrapperListRef.getScrollableNode() : undefined;
    }
  },
  {
    key: "setNativeProps",
    value: function setNativeProps(arg0) {
      let _wrapperListRef = this._wrapperListRef;
      if (_wrapperListRef) {
        const _wrapperListRef2 = this._wrapperListRef;
        _wrapperListRef = _wrapperListRef2.getListRef();
      }
      if (_wrapperListRef) {
        _wrapperListRef.setNativeProps(arg0);
      }
    }
  },
  {
    key: "render",
    value: function render() {
      const props = this.props;
      let flag = props.stickySectionHeadersEnabled;
      if (flag == null) {
        flag = false;
      }
      const obj = {};
      const merged = Object.assign(_objectWithoutProperties(props, closure_2));
      obj.stickySectionHeadersEnabled = flag;
      obj.ref = this._captureRef;
      obj.getItemCount = function getItemCount(arg0) {
        return arg0.length;
      };
      obj.getItem = function getItem(arg0, arg1) {
        return arg0[arg1];
      };
      return jsx(SectionList(312).VirtualizedSectionList, {});
    }
  }
];

export default _createClass(SectionList, items);