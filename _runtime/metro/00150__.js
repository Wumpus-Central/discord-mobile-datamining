// _runtime/metro/00150__.js
import _modDef131 from "00131__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _possibleConstructorReturn from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

const require = globalThis.__r;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
class ReadOnlyCharacterData {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ReadOnlyCharacterData);
    const obj = _getPrototypeOf(ReadOnlyCharacterData);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return _possibleConstructorReturn(self, constructResult);
  }
}
_inherits(ReadOnlyCharacterData, _modDef131);
let obj = {
  key: "nextElementSibling",
  get() {
    const obj = require("00142__.js");
    return obj.getElementSibling(this, "next");
  },
};
const items = [
  obj,
  {
    key: "previousElementSibling",
    get() {
      const obj = require("00142__.js");
      return obj.getElementSibling(this, "previous");
    },
  },
  {
    key: "data",
    get() {
      const obj = require("00136__.js");
      const nativeTextReference = obj.getNativeTextReference(this);
      let str = "";
      if (null != nativeTextReference) {
        const obj2 = require("NativeDOMCxx");
        str = obj2.getTextContent(nativeTextReference);
      }
      return str;
    },
  },
  {
    key: "length",
    get() {
      return this.data.length;
    },
  },
  {
    key: "textContent",
    get() {
      return this.data;
    },
  },
  {
    key: "nodeValue",
    get() {
      return this.data;
    },
  },
  {
    key: "substringData",
    value: function substringData(arg0, arg1) {
      const data = this.data;
      if (arg0 < 0) {
        const _TypeError2 = TypeError;
        const _HermesInternal2 = HermesInternal;
        const self3 = this;
        const self4 = this;
        const typeError = new TypeError(
          "Failed to execute 'substringData' on 'CharacterData': The offset " + arg0 + " is negative.",
        );
        throw typeError;
      } else if (arg0 > data.length) {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const typeError1 = new TypeError(
          "Failed to execute 'substringData' on 'CharacterData': The offset " +
            arg0 +
            " is greater than the node's length (" +
            data.length +
            ").",
        );
        throw typeError1;
      } else {
        let length = arg1;
        if (arg1 < 0) {
          length = data.length;
        }
        return data.slice(arg0, arg0 + length);
      }
    },
  },
];

export default _createClass(ReadOnlyCharacterData, items);
