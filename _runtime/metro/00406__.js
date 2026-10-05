// === Module 406: ? ===

// Module 406
import Fragment from "Fragment" /* 21 */;
import get_VirtualizedListDefault from "get VirtualizedList" /* 312 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import hasOwnProperty from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react from "react" /* 19 */;

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
let closure_2 = ["stickySectionHeadersEnabled"];
const jsx = Fragment.jsx;
class SectionList {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    _classCallCheck(this, SectionList);
    const items1 = [...items];
    const obj = _getPrototypeOf(SectionList);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = hasOwnProperty(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result._captureRef = (_wrapperListRef) => {
      closure_0._wrapperListRef = _wrapperListRef;
    };
    return tmp3Result;
  }
}
_inherits(SectionList, react.PureComponent);
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
      const tmp = _objectWithoutProperties(props, closure_2);
      if (flag == null) {
        flag = false;
      }
      const VirtualizedSectionList = get_VirtualizedListDefault.VirtualizedSectionList;
      const merged = Object.assign(tmp);
      return <VirtualizedSectionList stickySectionHeadersEnabled={flag} ref={this._captureRef} getItemCount={function getItemCount(arg0) {
        return arg0.length;
      }} getItem={function getItem(arg0, arg1) {
        return arg0[arg1];
      }} />;
    }
  }
];

export default _createClass(SectionList, items);