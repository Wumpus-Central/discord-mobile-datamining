// _runtime/00406__isNativeReflectConstruct.js
import noopAll from "00019_noop.js";
import closure_3 from "metro/00109__objectWithoutProperties.js";
import closure_4 from "metro/00041__classCallCheck.js";
import closure_5 from "metro/00093__possibleConstructorReturn.js";
import closure_6 from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";
import importDefaultResult1 from "00098__inherits.js";
import { jsx } from "react/00021_jsxProd.js";

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
  } catch (err) {}
}
let closure_2 = ["stickySectionHeadersEnabled"];
class SectionList {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_4(this, closure_0);
    items1 = [...items];
    tmp2 = closure_6;
    obj = closure_6(closure_0);
    tmp3 = closure_5;
    if (_isNativeReflectConstruct()) {
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
importDefaultResult1(SectionList, noopAll.PureComponent);
let items = [
  {
    key: "scrollToLocation",
    value: function scrollToLocation(arg0) {
      if (null != this._wrapperListRef) {
        const _wrapperListRef = tmp._wrapperListRef;
        _wrapperListRef.scrollToLocation(arg0);
      }
    },
  },
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
    },
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
    },
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
    },
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
    },
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
    },
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
      const merged = Object.assign(callback(props, closure_2));
      obj.stickySectionHeadersEnabled = flag;
      obj.ref = this._captureRef;
      obj.getItemCount = function getItemCount(arg0) {
        return arg0.length;
      };
      obj.getItem = function getItem(arg0, arg1) {
        return arg0[arg1];
      };
      return jsx(SectionList(312).VirtualizedSectionList, {});
    },
  },
];

export default importDefaultResult(SectionList, items);
