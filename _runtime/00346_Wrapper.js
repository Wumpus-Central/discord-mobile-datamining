// === Module 346: Wrapper ===

// Module 346 (Wrapper)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 253 */;
import get_hairlineWidth from "get hairlineWidth" /* 254 */;
import get_VirtualizedListDefault from "get VirtualizedList" /* 312 */;
import _modDef347 from "module_347" /* 347 */;
import _mod349 from "module_349" /* 349 */;
import I18nManager from "I18nManager" /* 411 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
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
const jsx = Fragment.jsx;
let closure_8 = 0;
class Modal {
  constructor(visible) {
    let constructResult;
    const self = this;
    _classCallCheck(this, Modal);
    const items = [visible];
    const obj = _getPrototypeOf(Modal);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = _possibleConstructorReturn(self, constructResult);
    closure_8 = tmp7 + 1;
    tmp3Result._identifier = +closure_8;
    const obj2 = { isRendered: true === visible.visible };
    tmp3Result.state = obj2;
    return tmp3Result;
  }
}
_inherits(Modal, react.Component);
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
      const tmp = false === visible.visible && true === self.props.visible;
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
        const obj = {};
        if (true === self.props.transparent) {
          obj.backgroundColor = "transparent";
        } else if (null != self.props.backdropColor) {
          obj.backgroundColor = self.props.backdropColor;
        }
        let presentationStyle = self.props.presentationStyle;
        const tmp3 = self.props.animationType || "none";
        if (!presentationStyle) {
          let str2 = "fullScreen";
          if (true === self.props.transparent) {
            str2 = "overFullScreen";
          }
          presentationStyle = str2;
        }
        const children = self.props.children;
        _modDef347;
        const VirtualizedListContextResetter = get_VirtualizedListDefault.VirtualizedListContextResetter;
        const Provider = _mod349.default.Context.Provider;
        const items = [container.container, self.props.style, obj];
        return <tmp7 animationType={tmp3} presentationStyle={presentationStyle} transparent={self.props.transparent} hardwareAccelerated={self.props.hardwareAccelerated} onRequestClose={self.props.onRequestClose} onShow={self.props.onShow} onDismiss={function onDismiss() {

        }} ref={self.props.modalRef} visible={self.props.visible} statusBarTranslucent={self.props.statusBarTranslucent} navigationBarTranslucent={self.props.navigationBarTranslucent} identifier={self._identifier} style={closure_10.modal} onStartShouldSetResponder={self._shouldSetResponder} supportedOrientations={self.props.supportedOrientations} onOrientationChange={self.props.onOrientationChange} allowSwipeDismissal={self.props.allowSwipeDismissal} testID={self.props.testID}>{null}</tmp7>;
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
let c9 = importDefaultResultResult;
importDefaultResultResult.defaultProps = { visible: true, hardwareAccelerated: false };
importDefaultResultResult.contextType = react2.RootTagContext;
let str = "left";
const _default = I18nManager.default;
if (_default.getConstants().isRTL) {
  str = "right";
}
class Wrapper {
  constructor(ref) {
    const merged = Object.assign(Object.assign(ref, Object.assign({ ref: 0 })));
    return <c9 modalRef={ref.ref} />;
  }
}
let obj = { modal: { position: "absolute" }, container: { [str]: 0, top: 0, flex: 1, backgroundColor: "white" } };
const _default2 = get_hairlineWidth.default;
const container = _default2.create(obj);
Wrapper.displayName = "Modal";
Wrapper.Context = get_VirtualizedListDefault.VirtualizedListContextResetter;

export default Wrapper;