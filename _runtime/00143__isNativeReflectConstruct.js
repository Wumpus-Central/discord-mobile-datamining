// _runtime/00143__isNativeReflectConstruct.js
import javaScriptFlagGetterAll from "00027_javaScriptFlagGetter.js";
import _inheritsDefault from "00098__inherits.js";
import _isNativeReflectConstructDefault from "00141__isNativeReflectConstruct.js";
import setDefault from "00144_set.js";
import closure_4 from "metro/00041__classCallCheck.js";
import closure_5 from "metro/00093__possibleConstructorReturn.js";
import closure_6 from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";
import { NativeDOMCxx } from "00139_NativeDOMCxx.js";

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
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
function noop() {}
class ReactNativeElement {
  constructor(arg0, arg1, arg2, arg3) {
    self = this;
    tmp = closure_4(this, ReactNativeElement);
    items = [,];
    items[0] = importDefault;
    items[1] = importAll;
    tmp2 = closure_6;
    obj = closure_6(ReactNativeElement);
    tmp3 = closure_5;
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
_inheritsDefault(ReactNativeElement, _isNativeReflectConstructDefault);
let obj = {
  key: "offsetHeight",
  get() {
    return Math.round(ReactNativeElement(141).getBoundingClientRect(this, { includeTransform: false }).height);
  },
};
let items = [
  obj,
  {
    key: "offsetLeft",
    get() {
      const nativeElementReference = ReactNativeElement(136).getNativeElementReference(this);
      if (null != nativeElementReference) {
        const _Math = Math;
        return Math.round(require("00139_NativeDOMCxx.js").getOffset(nativeElementReference)[2]);
      } else {
        return 0;
      }
      const obj = ReactNativeElement(136);
    },
  },
  {
    key: "offsetParent",
    get() {
      const nativeElementReference = ReactNativeElement(136).getNativeElementReference(this);
      if (null != nativeElementReference) {
        const offset = require("00139_NativeDOMCxx.js").getOffset(nativeElementReference);
        if (null != offset[0]) {
          return ReactNativeElement(136).getPublicInstanceFromInstanceHandle(offset[0]);
        }
        const obj2 = NativeDOMCxx;
      }
      return null;
    },
  },
  {
    key: "offsetTop",
    get() {
      const nativeElementReference = ReactNativeElement(136).getNativeElementReference(this);
      if (null != nativeElementReference) {
        const _Math = Math;
        return Math.round(require("00139_NativeDOMCxx.js").getOffset(nativeElementReference)[1]);
      } else {
        return 0;
      }
      const obj = ReactNativeElement(136);
    },
  },
  {
    key: "offsetWidth",
    get() {
      return Math.round(ReactNativeElement(141).getBoundingClientRect(this, { includeTransform: false }).width);
    },
  },
  {
    key: "blur",
    value: function blur() {
      const self = this;
      if (obj.isTextInput(this)) {
        setDefault.blurTextInput(self);
        const tmpResult = setDefault;
      } else {
        if (obj2.enableImperativeFocus()) {
          const Commands = ReactNativeElement(112).Commands;
          Commands.blur(self);
        }
        obj2 = javaScriptFlagGetterAll;
      }
    },
  },
  {
    key: "focus",
    value: function focus() {
      const self = this;
      if (obj.isTextInput(this)) {
        setDefault.focusTextInput(self);
        const tmpResult = setDefault;
      } else {
        if (obj2.enableImperativeFocus()) {
          const Commands = ReactNativeElement(112).Commands;
          Commands.focus(self);
        }
        obj2 = javaScriptFlagGetterAll;
      }
    },
  },
  {
    key: "measure",
    value: function measure(arg0) {
      const nativeElementReference = ReactNativeElement(136).getNativeElementReference(this);
      if (null != nativeElementReference) {
        require("00139_NativeDOMCxx.js").measure(nativeElementReference, arg0);
        const obj2 = NativeDOMCxx;
      }
    },
  },
  {
    key: "measureAsyncOnUI",
    value: function measureAsyncOnUI(_measureCallback, _measureCallback) {
      const nativeElementReference = ReactNativeElement(136).getNativeElementReference(this);
      if (null != nativeElementReference) {
        require("00139_NativeDOMCxx.js").measureAsyncOnUI(nativeElementReference, _measureCallback);
        const obj2 = NativeDOMCxx;
      }
    },
  },
  {
    key: "measureInWindow",
    value: function measureInWindow(arg0) {
      const nativeElementReference = ReactNativeElement(136).getNativeElementReference(this);
      if (null != nativeElementReference) {
        require("00139_NativeDOMCxx.js").measureInWindow(nativeElementReference, arg0);
        const obj2 = NativeDOMCxx;
      }
    },
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
    },
  },
  {
    key: "setNativeProps",
    value: function setNativeProps(arg0) {
      let obj = ReactNativeElement(146);
      obj = obj.create(arg0, this.__viewConfig.validAttributes);
      const nativeElementReference = ReactNativeElement(136).getNativeElementReference(this);
      if (tmp4) {
        require("00139_NativeDOMCxx.js").setNativeProps(nativeElementReference, obj);
        const obj3 = NativeDOMCxx;
      }
    },
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
  },
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
