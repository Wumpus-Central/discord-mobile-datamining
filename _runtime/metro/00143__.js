// === Module 143: ? ===

// Module 143
import _modAll27 from "module_27" /* 27 */;
import _modDef141 from "module_141" /* 141 */;
import _modDef144 from "module_144" /* 144 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import hasOwnProperty from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const ReactNativeElement = fn;
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
function noop() {

}
class ReactNativeElement {
  constructor(arg0, arg1, arg2, arg3) {
    self = this;
    tmp = closure_4(this, ReactNativeElement);
    items = [, ];
    items[0] = importDefault;
    items[1] = importAll;
    tmp2 = metroRequire;
    obj = metroRequire(ReactNativeElement);
    tmp3 = hasOwnProperty;
    if (closure_7()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.__nativeTag = global;
    tmp3Result.__internalInstanceHandle = importDefault;
    tmp3Result.__viewConfig = fn;
    return tmp3Result;
  }
}
_inherits(ReactNativeElement, _modDef141);
let items = [
  {
    key: "offsetHeight",
    get() {
      return Math.round(ReactNativeElement(141).getBoundingClientRect(this, { includeTransform: false }).height);
    }
  },
  {
    key: "offsetLeft",
    get() {
      const nativeElementReference = ReactNativeElement(136).getNativeElementReference(this);
      if (null != nativeElementReference) {
        const _Math = Math;
        return Math.round(require("NativeDOMCxx").getOffset(nativeElementReference)[2]);
      } else {
        return 0;
      }
      const obj = ReactNativeElement(136);
    }
  },
  {
    key: "offsetParent",
    get() {
      const nativeElementReference = ReactNativeElement(136).getNativeElementReference(this);
      if (null != nativeElementReference) {
        const offset = require("NativeDOMCxx").getOffset(nativeElementReference);
        if (null != offset[0]) {
          return ReactNativeElement(136).getPublicInstanceFromInstanceHandle(offset[0]);
        }
        const obj2 = require("NativeDOMCxx");
      }
      return null;
    }
  },
  {
    key: "offsetTop",
    get() {
      const nativeElementReference = ReactNativeElement(136).getNativeElementReference(this);
      if (null != nativeElementReference) {
        const _Math = Math;
        return Math.round(require("NativeDOMCxx").getOffset(nativeElementReference)[1]);
      } else {
        return 0;
      }
      const obj = ReactNativeElement(136);
    }
  },
  {
    key: "offsetWidth",
    get() {
      return Math.round(ReactNativeElement(141).getBoundingClientRect(this, { includeTransform: false }).width);
    }
  },
  {
    key: "blur",
    value: function blur() {
      const self = this;
      if (obj.isTextInput(this)) {
        _modDef144.blurTextInput(self);
        const tmpResult = _modDef144;
      } else {
        if (obj2.enableImperativeFocus()) {
          const Commands = ReactNativeElement(112).Commands;
          Commands.blur(self);
        }
        obj2 = _modAll27;
      }
      obj = _modDef144;
    }
  },
  {
    key: "focus",
    value: function focus() {
      const self = this;
      if (obj.isTextInput(this)) {
        _modDef144.focusTextInput(self);
        const tmpResult = _modDef144;
      } else {
        if (obj2.enableImperativeFocus()) {
          const Commands = ReactNativeElement(112).Commands;
          Commands.focus(self);
        }
        obj2 = _modAll27;
      }
      obj = _modDef144;
    }
  },
  {
    key: "measure",
    value: function measure(arg0) {
      const nativeElementReference = ReactNativeElement(136).getNativeElementReference(this);
      if (null != nativeElementReference) {
        require("NativeDOMCxx").measure(nativeElementReference, arg0);
        const obj2 = require("NativeDOMCxx");
      }
      const obj = ReactNativeElement(136);
    }
  },
  {
    key: "measureAsyncOnUI",
    value: function measureAsyncOnUI(_measureCallback) {
      const nativeElementReference = ReactNativeElement(136).getNativeElementReference(this);
      if (null != nativeElementReference) {
        require("NativeDOMCxx").measureAsyncOnUI(nativeElementReference, _measureCallback);
        const obj2 = require("NativeDOMCxx");
      }
      const obj = ReactNativeElement(136);
    }
  },
  {
    key: "measureInWindow",
    value: function measureInWindow(arg0) {
      const nativeElementReference = ReactNativeElement(136).getNativeElementReference(this);
      if (null != nativeElementReference) {
        require("NativeDOMCxx").measureInWindow(nativeElementReference, arg0);
        const obj2 = require("NativeDOMCxx");
      }
      const obj = ReactNativeElement(136);
    }
  },
  {
    key: "measureLayout",
    value: function measureLayout(c5, arg1, arg2) {
      if (c5 instanceof ReactNativeElement) {
        const self = this;
        const nativeElementReference = ReactNativeElement(136).getNativeElementReference(this);
        const obj = ReactNativeElement(136);
        const nativeElementReference1 = ReactNativeElement(136).getNativeElementReference(c5);
        if (tmp6) {
          let tmp7 = arg2;
          const obj3 = require("NativeDOMCxx");
          if (null == arg2) {
            tmp7 = closure_8;
          }
          let tmp9 = arg1;
          if (null == arg1) {
            tmp9 = closure_8;
          }
          obj3.measureLayout(nativeElementReference, nativeElementReference1, tmp7, tmp9);
        }
        const obj2 = ReactNativeElement(136);
        tmp6 = null != nativeElementReference && null != nativeElementReference1;
      }
    }
  },
  {
    key: "setNativeProps",
    value: function setNativeProps(arg0) {
      let obj = ReactNativeElement(146);
      obj = obj.create(arg0, this.__viewConfig.validAttributes);
      const nativeElementReference = ReactNativeElement(136).getNativeElementReference(this);
      if (tmp4) {
        require("NativeDOMCxx").setNativeProps(nativeElementReference, obj);
        const obj3 = require("NativeDOMCxx");
      }
      const obj2 = ReactNativeElement(136);
      tmp4 = null != nativeElementReference && null != obj;
    }
  },

];
const entry = {
  key: fn(135).EVENT_TARGET_GET_DECLARATIVE_LISTENER_KEY,
  value(arg0, arg1) {
    const currentProps = ReactNativeElement(136).getCurrentProps(this);
    if (null == currentProps) {
      return null;
    } else {
      const eventTypePropName = ReactNativeElement(149).getEventTypePropName(arg0, arg1);
      if (null == eventTypePropName) {
        return null;
      } else {
        let tmp8 = null;
        if (typeof currentProps[eventTypePropName] === "function") {
          tmp8 = tmp7;
        }
        return tmp8;
      }
      const tmpResult = ReactNativeElement(149);
    }
    const obj = ReactNativeElement(136);
  }
};
items[12] = entry;
class ReactNativeElement {
  constructor(arg0, arg1, arg2, arg3) {
    obj = ReactNativeElement(closure_3[6]);
    setOwnerDocumentResult = obj.setOwnerDocument(this, importAll);
    obj2 = ReactNativeElement(closure_3[6]);
    setInstanceHandleResult = obj2.setInstanceHandle(this, importDefault);
    this.__nativeTag = global;
    this.__internalInstanceHandle = importDefault;
    this.__viewConfig = fn;
    return;
  }
}
ReactNativeElement.prototype = _createClass(ReactNativeElement, items).prototype;

export default ReactNativeElement;