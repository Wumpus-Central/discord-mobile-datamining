// === Module 150: _isNativeReflectConstruct ===

// Module 150 (_isNativeReflectConstruct)
import _inheritsDefault from "_inherits" /* 98 */;
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 131 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;

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
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class ReadOnlyCharacterData {
  constructor() {
    self = this;
    tmp = closure_3(this, ReadOnlyCharacterData);
    tmp2 = closure_5;
    obj = closure_5(ReadOnlyCharacterData);
    tmp3 = closure_4;
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
_inheritsDefault(ReadOnlyCharacterData, _isNativeReflectConstructDefault);
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
        str = importDefault(139).getTextContent(nativeTextReference);
        const obj2 = importDefault(139);
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