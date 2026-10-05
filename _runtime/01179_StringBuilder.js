// _runtime/01179_StringBuilder.js
import FormatBuilder from "01169_FormatBuilder.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import map from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

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
function formatToPlainString(prop, time) {
  let first = prop;
  if (typeof prop !== "string") {
    const self = this;
    first = this.bindFormatValues(_moduleResult, prop, time)[0];
  }
  return first;
}
class StringBuilder {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, StringBuilder);
    const obj = _getPrototypeOf(StringBuilder);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    const tmp3Result = map(self, constructResult);
    tmp3Result.result = "";
    return tmp3Result;
  }
}
_inherits(StringBuilder, FormatBuilder.FormatBuilder);
const entry = {
  key: "pushRichTextTag",
  value: function pushRichTextTag(arg0, arg1, arg2) {
    const self = this;
    const tmp = arg1[Symbol.iterator]();
    while (tmp !== undefined) {
      self.result = self.result + tmp2;
      continue;
    }
  },
};
let items = [
  entry,
  {
    key: "pushLiteralText",
    value: function pushLiteralText(arg0) {
      this.result = this.result + arg0;
    },
  },
  {
    key: "pushObject",
    value: function pushObject(arg0) {
      const tmp = null != arg0 && "toString" in arg0;
      if (tmp) {
        const self = this;
        this.result = this.result + arg0.toString();
      }
    },
  },
  {
    key: "finish",
    value: function finish() {
      const items = [this.result];
      return items;
    },
  },
];
const _moduleResult = _createClass(StringBuilder, items);
const StringBuilder_export = _moduleResult;

export { formatToPlainString };
export { StringBuilder_export as StringBuilder };
export const stringFormatter = { format: formatToPlainString, builder: _moduleResult };
