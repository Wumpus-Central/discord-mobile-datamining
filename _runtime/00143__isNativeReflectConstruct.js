// _runtime/00143__isNativeReflectConstruct.js
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import { NativeDOMCxx } from "00139_NativeDOMCxx.js";
import { set } from "00144_set.js";

const ReactNativeElement = arg1;
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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
function noop() {

}
class ReactNativeElement {
  constructor(arg0, arg1, arg2, arg3) {
    self = this;
    tmp = _isNativeReflectConstruct(this, ReactNativeElement);
    items = [, ];
    items[0] = importDefault;
    items[1] = importAll;
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(ReactNativeElement);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.__nativeTag = global;
    tmp3Result.__internalInstanceHandle = importDefault;
    tmp3Result.__viewConfig = arg1;
    return tmp3Result;
  }
}
require("_inherits")(ReactNativeElement, require("_isNativeReflectConstruct"));
let obj = {
  key: "offsetHeight",
  get() {
    return Math.round(ReactNativeElement(141).getBoundingClientRect(this, { includeTransform: false }).height);
  }
};
let items = [
  obj,
  {
    key: "offsetLeft",
    get() {
      const nativeElementReference = ReactNativeElement(136).getNativeElementReference(this);
      if (null != nativeElementReference) {
        const _Math = Math;
        return Math.round(NativeDOMCxx.getOffset(nativeElementReference)[2]);
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
        const offset = NativeDOMCxx.getOffset(nativeElementReference);
        if (null != offset[0]) {
          return ReactNativeElement(136).getPublicInstanceFromInstanceHandle(offset[0]);
        }
        const obj2 = NativeDOMCxx;
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
        return Math.round(NativeDOMCxx.getOffset(nativeElementReference)[1]);
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
        set.blurTextInput(self);
        const tmpResult = set;
      } else {
        if (obj2.enableImperativeFocus()) {
          const Commands = ReactNativeElement(112).Commands;
          Commands.blur(self);
        }
        obj2 = importAll(27);
      }
    }
  },
  {
    key: "focus",
    value: function focus() {
      const self = this;
      if (obj.isTextInput(this)) {
        set.focusTextInput(self);
        const tmpResult = set;
      } else {
        if (obj2.enableImperativeFocus()) {
          const Commands = ReactNativeElement(112).Commands;
          Commands.focus(self);
        }
        obj2 = importAll(27);
      }
    }
  },
  {
    key: "measure",
    value: function measure(arg0) {
      const nativeElementReference = ReactNativeElement(136).getNativeElementReference(this);
      if (null != nativeElementReference) {
        NativeDOMCxx.measure(nativeElementReference, arg0);
        const obj2 = NativeDOMCxx;
      }
    }
  },
  {
    key: "measureAsyncOnUI",
    value: function measureAsyncOnUI(_measureCallback, _measureCallback) {
      const nativeElementReference = ReactNativeElement(136).getNativeElementReference(this);
      if (null != nativeElementReference) {
        NativeDOMCxx.measureAsyncOnUI(nativeElementReference, _measureCallback);
        const obj2 = NativeDOMCxx;
      }
    }
  },
  {
    key: "measureInWindow",
    value: function measureInWindow(arg0) {
      const nativeElementReference = ReactNativeElement(136).getNativeElementReference(this);
      if (null != nativeElementReference) {
        NativeDOMCxx.measureInWindow(nativeElementReference, arg0);
        const obj2 = NativeDOMCxx;
      }
    }
  },
  {
    key: "measureLayout",
    value: function measureLayout(nativeElementReference3) {
      if (nativeElementReference3 instanceof ReactNativeElement) {
        const self = this;
        const nativeElementReference = ReactNativeElement(136).getNativeElementReference(this);
        const obj = ReactNativeElement(136);
        const nativeElementReference1 = ReactNativeElement(136).getNativeElementReference(nativeElementReference3);
        if (tmp6) {
          let tmp7 = arg2;
          const obj3 = NativeDOMCxx;
          if (null == arg2) {
            tmp7 = noop;
          }
          let tmp9 = arg1;
          if (null == arg1) {
            tmp9 = noop;
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
        NativeDOMCxx.setNativeProps(nativeElementReference, obj);
        const obj3 = NativeDOMCxx;
      }
    }
  },

];
obj = {
  key: require("SymbolResult2").EVENT_TARGET_GET_DECLARATIVE_LISTENER_KEY,
  value(arg0, arg1) {
    const currentProps = ReactNativeElement(136).getCurrentProps(this);
    if (null == currentProps) {
      return null;
    } else {
      const eventTypePropName = tmp(149).getEventTypePropName(arg0, arg1);
      if (null == eventTypePropName) {
        return null;
      } else {
        let tmp8 = null;
        if (typeof currentProps[eventTypePropName] === "function") {
          tmp8 = tmp7;
        }
        return tmp8;
      }
      const tmpResult = tmp(149);
    }
    const obj = ReactNativeElement(136);
    tmp = ReactNativeElement;
  }
};
items[12] = obj;
class ReactNativeElement {
  constructor(arg0, arg1, arg2, arg3) {
    obj = require("getInstanceHandle");
    setOwnerDocumentResult = obj.setOwnerDocument(this, importAll);
    obj2 = require("getInstanceHandle");
    setInstanceHandleResult = obj2.setInstanceHandle(this, importDefault);
    this.__nativeTag = global;
    this.__internalInstanceHandle = importDefault;
    this.__viewConfig = arg1;
    return;
  }
}
ReactNativeElement.prototype = importDefaultResult(ReactNativeElement, items).prototype;

export default ReactNativeElement;