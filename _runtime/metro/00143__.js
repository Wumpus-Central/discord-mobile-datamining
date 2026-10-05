// === Module 143: ? ===

// Module 143
import javaScriptFlagGetterAll from "javaScriptFlagGetter" /* 27 */;
import Commands2 from "Commands" /* 112 */;
import EVENT_TARGET_GET_THE_PARENT_KEY from "EVENT_TARGET_GET_THE_PARENT_KEY" /* 135 */;
import _modDef144 from "module_144" /* 144 */;
import create from "create" /* 146 */;
import topLevelTypeToEventType from "topLevelTypeToEventType" /* 149 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import hasOwnProperty from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const require = globalThis.__r;

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
function noop() {

}
class ReactNativeElement {
  constructor(__nativeTag, __viewConfig, __internalInstanceHandle, arg3) {
    let constructResult;
    const self = this;
    _classCallCheck(this, ReactNativeElement);
    const items = [__internalInstanceHandle, arg3];
    const obj = _getPrototypeOf(ReactNativeElement);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = hasOwnProperty(self, constructResult);
    tmp3Result.__nativeTag = __nativeTag;
    tmp3Result.__internalInstanceHandle = __internalInstanceHandle;
    tmp3Result.__viewConfig = __viewConfig;
    return tmp3Result;
  }
}
_inherits(ReactNativeElement, require("_getBoundingClientRect"));
let obj = {
  key: "offsetHeight",
  get() {
    const obj = require("_getBoundingClientRect");
    return round(obj.getBoundingClientRect(this, { includeTransform: false }).height);
  }
};
let items = [
  obj,
  {
    key: "offsetLeft",
    get() {
      const obj = require("module_136");
      const nativeElementReference = obj.getNativeElementReference(this);
      if (null != nativeElementReference) {
        const _Math = Math;
        const obj2 = require("NativeDOMCxx");
        return Math.round(obj2.getOffset(nativeElementReference)[2]);
      } else {
        return 0;
      }
    }
  },
  {
    key: "offsetParent",
    get() {
      const obj = require("module_136");
      const nativeElementReference = obj.getNativeElementReference(this);
      if (null != nativeElementReference) {
        const obj2 = require("NativeDOMCxx");
        const offset = obj2.getOffset(nativeElementReference);
        if (null != offset[0]) {
          const first = offset[0];
          const tmpResult = require("module_136");
          return tmpResult.getPublicInstanceFromInstanceHandle(first);
        }
      }
      return null;
    }
  },
  {
    key: "offsetTop",
    get() {
      const obj = require("module_136");
      const nativeElementReference = obj.getNativeElementReference(this);
      if (null != nativeElementReference) {
        const _Math = Math;
        const obj2 = require("NativeDOMCxx");
        return Math.round(obj2.getOffset(nativeElementReference)[1]);
      } else {
        return 0;
      }
    }
  },
  {
    key: "offsetWidth",
    get() {
      const obj = require("_getBoundingClientRect");
      return round(obj.getBoundingClientRect(this, { includeTransform: false }).width);
    }
  },
  {
    key: "blur",
    value: function blur() {
      const self = this;
      const obj = _modDef144;
      if (obj.isTextInput(this)) {
        const tmpResult = _modDef144;
        tmpResult.blurTextInput(self);
      } else {
        const obj2 = javaScriptFlagGetterAll;
        if (obj2.enableImperativeFocus()) {
          const Commands = Commands2.Commands;
          Commands.blur(self);
        }
      }
    }
  },
  {
    key: "focus",
    value: function focus() {
      const self = this;
      const obj = _modDef144;
      if (obj.isTextInput(this)) {
        const tmpResult = _modDef144;
        tmpResult.focusTextInput(self);
      } else {
        const obj2 = javaScriptFlagGetterAll;
        if (obj2.enableImperativeFocus()) {
          const Commands = Commands2.Commands;
          Commands.focus(self);
        }
      }
    }
  },
  {
    key: "measure",
    value: function measure(arg0) {
      const obj = require("module_136");
      const nativeElementReference = obj.getNativeElementReference(this);
      if (null != nativeElementReference) {
        const obj2 = require("NativeDOMCxx");
        obj2.measure(nativeElementReference, arg0);
      }
    }
  },
  {
    key: "measureAsyncOnUI",
    value: function measureAsyncOnUI(_measureCallback) {
      const obj = require("module_136");
      const nativeElementReference = obj.getNativeElementReference(this);
      if (null != nativeElementReference) {
        const obj2 = require("NativeDOMCxx");
        obj2.measureAsyncOnUI(nativeElementReference, _measureCallback);
      }
    }
  },
  {
    key: "measureInWindow",
    value: function measureInWindow(arg0) {
      const obj = require("module_136");
      const nativeElementReference = obj.getNativeElementReference(this);
      if (null != nativeElementReference) {
        const obj2 = require("NativeDOMCxx");
        obj2.measureInWindow(nativeElementReference, arg0);
      }
    }
  },
  {
    key: "measureLayout",
    value: function measureLayout(c5, arg1, arg2) {
      if (c5 instanceof ReactNativeElement) {
        const self = this;
        const obj = require("module_136");
        const nativeElementReference = obj.getNativeElementReference(this);
        const obj2 = require("module_136");
        const nativeElementReference1 = obj2.getNativeElementReference(c5);
        const tmp6 = null != nativeElementReference && null != nativeElementReference1;
        if (tmp6) {
          let tmp7 = arg2;
          const measureLayout = require("NativeDOMCxx").measureLayout;
          const tmp9 = require("NativeDOMCxx");
          if (null == arg2) {
            tmp7 = noop;
          }
          let tmp10 = arg1;
          if (null == arg1) {
            tmp10 = noop;
          }
          measureLayout(nativeElementReference, nativeElementReference1, tmp7, tmp10);
        }
      }
    }
  },
  {
    key: "setNativeProps",
    value: function setNativeProps(arg0) {
      const obj = create;
      const obj4 = obj.create(arg0, this.__viewConfig.validAttributes);
      const obj2 = require("module_136");
      const nativeElementReference = obj2.getNativeElementReference(this);
      const tmp4 = null != nativeElementReference && null != obj4;
      if (tmp4) {
        const obj3 = require("NativeDOMCxx");
        obj3.setNativeProps(nativeElementReference, obj4);
      }
    }
  },

];
const entry = {
  key: EVENT_TARGET_GET_THE_PARENT_KEY.EVENT_TARGET_GET_DECLARATIVE_LISTENER_KEY,
  value(arg0, arg1) {
    const obj = require("module_136");
    const currentProps = obj.getCurrentProps(this);
    if (null == currentProps) {
      return null;
    } else {
      const tmpResult = topLevelTypeToEventType;
      const eventTypePropName = tmpResult.getEventTypePropName(arg0, arg1);
      if (null == eventTypePropName) {
        return null;
      } else {
        let tmp8 = null;
        if (typeof currentProps[eventTypePropName] === "function") {
          tmp8 = tmp7;
        }
        return tmp8;
      }
    }
  }
};
items[12] = entry;
tmp5.prototype = _createClass(ReactNativeElement, items).prototype;

export default tmp5;