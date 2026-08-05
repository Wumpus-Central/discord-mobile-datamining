// _runtime/00150__isNativeReflectConstruct.js
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import { NativeDOMCxx } from "00139_NativeDOMCxx.js";

const ReadOnlyCharacterData = arg1;
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
class ReadOnlyCharacterData {
  constructor() {
    self = this;
    tmp = _isNativeReflectConstruct(this, ReadOnlyCharacterData);
    tmp2 = __esModule;
    obj = __esModule(ReadOnlyCharacterData);
    tmp3 = __esModule;
    if (_isNativeReflectConstruct()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
require("_inherits")(ReadOnlyCharacterData, require("_isNativeReflectConstruct"));
const items = [
  {
    key: "nextElementSibling",
    get() {
      return ReadOnlyCharacterData(142).getElementSibling(this, "next");
    }
  },
  {
    key: "previousElementSibling",
    get() {
      return ReadOnlyCharacterData(142).getElementSibling(this, "previous");
    }
  },
  {
    key: "data",
    get() {
      const nativeTextReference = ReadOnlyCharacterData(136).getNativeTextReference(this);
      let str = "";
      if (null != nativeTextReference) {
        str = NativeDOMCxx.getTextContent(nativeTextReference);
        const obj2 = NativeDOMCxx;
      }
      return str;
    }
  },
  {
    key: "length",
    get() {
      return this.data.length;
    }
  },
  {
    key: "textContent",
    get() {
      return this.data;
    }
  },
  {
    key: "nodeValue",
    get() {
      return this.data;
    }
  },
  {
    key: "substringData",
    value: function substringData(arg0, arg1) {
      const data = this.data;
      if (arg0 < 0) {
        const _TypeError2 = TypeError;
        const _HermesInternal2 = HermesInternal;
        const typeError = new TypeError("Failed to execute 'substringData' on 'CharacterData': The offset " + arg0 + " is negative.");
        throw typeError;
      } else if (arg0 > data.length) {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const typeError1 = new TypeError("Failed to execute 'substringData' on 'CharacterData': The offset " + arg0 + " is greater than the node's length (" + data.length + ").");
        throw typeError1;
      } else {
        let length = arg1;
        if (arg1 < 0) {
          length = data.length;
        }
        return data.slice(arg0, arg0 + length);
      }
    }
  }
];

export default importDefaultResult(ReadOnlyCharacterData, items);