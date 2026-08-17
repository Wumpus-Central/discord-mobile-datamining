// _runtime/00346__isNativeReflectConstruct.js
import get_VirtualizedListDefault from "get VirtualizedList" /* 312 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 347 */;
import closure_3 from "_classCallCheck" /* 41 */;
import closure_4 from "_possibleConstructorReturn" /* 93 */;
import closure_5 from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;
import importDefaultResult1 from "_inherits" /* 98 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;
import { default as _default } from "getConstants" /* 411 */;

const Modal = arg1;
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
let closure_8 = 0;
class Modal {
  constructor(arg0) {
    self = this;
    tmp = closure_3(this, Modal);
    items = [];
    items[0] = global;
    tmp2 = closure_5;
    obj = closure_5(Modal);
    tmp3 = closure_4;
    if (_isNativeReflectConstruct()) {
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
importDefaultResult1(Modal, importAllResult.Component);
let items = [
  {
    key: "componentDidMount",
    value: function componentDidMount() {

    }
  },
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
        obj = { animationType: null, presentationStyle: null, transparent: null, hardwareAccelerated: null, onRequestClose: null, onShow: null, onDismiss: null, ref: null, visible: null, statusBarTranslucent: null, navigationBarTranslucent: null, identifier: null, style: null, onStartShouldSetResponder: null, supportedOrientations: null, onOrientationChange: null, allowSwipeDismissal: null, testID: null, children: null };
        obj[0] = self.props.animationType || "none";
        obj[1] = presentationStyle;
        obj[2] = self.props.transparent;
        obj[3] = self.props.hardwareAccelerated;
        obj[4] = self.props.onRequestClose;
        obj[5] = self.props.onShow;
        obj[6] = function onDismiss() {

        };
        obj[7] = self.props.modalRef;
        obj[8] = self.props.visible;
        obj[9] = self.props.statusBarTranslucent;
        obj[10] = self.props.navigationBarTranslucent;
        obj[11] = self._identifier;
        obj[12] = closure_10.modal;
        obj[13] = self._shouldSetResponder;
        obj[14] = self.props.supportedOrientations;
        obj[15] = self.props.onOrientationChange;
        obj[16] = self.props.allowSwipeDismissal;
        obj[17] = self.props.testID;
        obj = { children: null };
        obj1 = { value: null, children: null };
        const obj2 = { style: null, collapsable: false, children: null };
        const items = [closure_10.container, self.props.style, obj];
        obj2[0] = items;
        obj2[2] = self.props.children;
        obj1[1] = jsx(Modal(108).default, { style: null, collapsable: false, children: null });
        obj[0] = jsx(Modal(349).default.Context.Provider, { value: null, children: null });
        obj[18] = jsx(get_VirtualizedListDefault.VirtualizedListContextResetter, { children: null });
        return jsx(__INTERNAL_VIEW_CONFIGDefault, { children: null });
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
const importDefaultResultResult = importDefaultResult(Modal, items);
let c9 = importDefaultResultResult;
importDefaultResultResult.defaultProps = { visible: true, hardwareAccelerated: false };
importDefaultResultResult.contextType = require("RootTagContext").RootTagContext;
let obj = {
  key: "componentDidMount",
  value: function componentDidMount() {

  }
};
let str = "left";
if (_default.getConstants().isRTL) {
  str = "right";
}
class Wrapper {
  constructor(arg0) {
    obj = {};
    merged = Object.assign(Object.assign(global, Object.create(null)));
    obj.modalRef = global.ref;
    return jsx(closure_9, obj);
  }
}
let closure_10 = require("get hairlineWidth").default.create({ modal: { position: "absolute" }, container: { [str]: 0, top: 0, flex: 1, backgroundColor: "white" } });
Wrapper.displayName = "Modal";
Wrapper.Context = get_VirtualizedListDefault.VirtualizedListContextResetter;

export default Wrapper;