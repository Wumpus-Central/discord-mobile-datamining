// === Module 346: ? ===

// Module 346
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import get_VirtualizedListDefault from "get VirtualizedList" /* 312 */;
import _modDef347 from "module_347" /* 347 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;

const Modal = fn;
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
_possibleConstructorReturnDefault;
const jsx = fn(21).jsx;
let c8 = 0;
class Modal {
  constructor(arg0) {
    self = this;
    tmp = closure_3(this, Modal);
    items = [];
    items[0] = global;
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(Modal);
    tmp3 = closure_4;
    if (closure_7()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp7 = +closure_8;
    closure_8 = tmp7 + 1;
    tmp3Result._identifier = tmp7;
    obj = { isRendered: true === global.visible };
    tmp3Result.state = obj;
    return tmp3Result;
  }
}
_inherits(Modal, noop.Component);
const entry = {
  key: "componentDidMount",
  value: function componentDidMount() {

  }
};
let items = [
  entry,
  {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._eventSubscription) {
        const _eventSubscription = this._eventSubscription;
        _eventSubscription.remove();
      }
    }
  },
  {
    key: "componentDidUpdate",
    value: function componentDidUpdate(visible) {
      const self = this;
      let tmp = false === visible.visible;
      if (tmp) {
        tmp = true === self.props.visible;
      }
      if (tmp) {
        self.setState({ isRendered: true });
      }
    }
  },
  {
    key: "_shouldShowModal",
    value: function _shouldShowModal() {
      return true === this.props.visible;
    }
  },
  {
    key: "render",
    value: function render() {
      const self = this;
      if (this._shouldShowModal()) {
        let obj = {};
        if (true === self.props.transparent) {
          obj.backgroundColor = "transparent";
        } else if (null != self.props.backdropColor) {
          obj.backgroundColor = self.props.backdropColor;
        }
        let presentationStyle = self.props.presentationStyle;
        if (!presentationStyle) {
          let str2 = "fullScreen";
          if (true === self.props.transparent) {
            str2 = "overFullScreen";
          }
          presentationStyle = str2;
        }
        obj = {
          animationType: self.props.animationType || "none",
          presentationStyle,
          transparent: self.props.transparent,
          hardwareAccelerated: self.props.hardwareAccelerated,
          onRequestClose: self.props.onRequestClose,
          onShow: self.props.onShow,
          onDismiss() {

            },
          ref: self.props.modalRef,
          visible: self.props.visible,
          statusBarTranslucent: self.props.statusBarTranslucent,
          navigationBarTranslucent: self.props.navigationBarTranslucent,
          identifier: self._identifier,
          style: closure_10.modal,
          onStartShouldSetResponder: self._shouldSetResponder,
          supportedOrientations: self.props.supportedOrientations,
          onOrientationChange: self.props.onOrientationChange,
          allowSwipeDismissal: self.props.allowSwipeDismissal,
          testID: self.props.testID,
          children: null
        };
        obj = { children: null };
        const obj1 = { value: null, children: null };
        const obj2 = { style: null, collapsable: false, children: null };
        const items = [closure_10.container, self.props.style, obj];
        obj2.style = items;
        obj2.children = self.props.children;
        obj1.children = jsx(Modal(108).default, { style: null, collapsable: false, children: null });
        obj.children = jsx(Modal(349).default.Context.Provider, { value: null, children: null });
        obj.children = jsx(get_VirtualizedListDefault.VirtualizedListContextResetter, { children: null });
        return jsx(_modDef347, { children: null });
      } else {
        return null;
      }
    }
  },
  {
    key: "_shouldSetResponder",
    value: function _shouldSetResponder() {
      return true;
    }
  }
];
const importDefaultResultResult = _createClass(Modal, items);
importDefaultResultResult.defaultProps = { visible: true, hardwareAccelerated: false };
importDefaultResultResult.contextType = fn(253).RootTagContext;
let str = "left";
if (_default.getConstants().isRTL) {
  str = "right";
}
class Wrapper {
  constructor(arg0) {
    obj = {};
    merged = Object.assign(Object.assign(global, Object.assign({ ref: 0 })));
    obj.modalRef = global.ref;
    return jsx(closure_9, obj);
  }
}
_default = fn(411).default;
let closure_10 = fn(254).default.create({ modal: { position: "absolute" }, container: { [str]: 0, top: 0, flex: 1, backgroundColor: "white" } });
Wrapper.displayName = "Modal";
Wrapper.Context = get_VirtualizedListDefault.VirtualizedListContextResetter;

export default Wrapper;