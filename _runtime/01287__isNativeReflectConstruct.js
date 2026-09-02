// === Module 1287: _isNativeReflectConstruct ===

// Module 1287 (_isNativeReflectConstruct)
import _isNativeReflectConstruct2 from "_isNativeReflectConstruct" /* 1277 */;
import StringBuilder from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_1 from "_possibleConstructorReturn" /* 93 */;
import closure_2 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

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
function formatToPlainString(k2UNz_, maxSettingsForPreset) {
  let first = k2UNz_;
  if (typeof k2UNz_ !== "string") {
    const self = this;
    first = this.bindFormatValues(closure_4, k2UNz_, maxSettingsForPreset)[0];
  }
  return first;
}
class StringBuilder {
  constructor() {
    self = this;
    tmp = StringBuilder(this, StringBuilder);
    tmp2 = closure_2;
    obj = closure_2(StringBuilder);
    tmp3 = closure_1;
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
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.result = "";
    return tmp3Result;
  }
}
_inherits(StringBuilder, _isNativeReflectConstruct2.FormatBuilder);
let items = [
  {
    key: "pushRichTextTag",
    value: function pushRichTextTag(arg0, arg1, arg2) {
      const self = this;
      while (tmp !== undefined) {
        self.result = self.result + tmp2;
        continue;
      }
    }
  },
  {
    key: "pushLiteralText",
    value: function pushLiteralText(arg0) {
      this.result = this.result + arg0;
    }
  },
  {
    key: "pushObject",
    value: function pushObject(arg0) {
      let tmp = null != arg0;
      if (tmp) {
        tmp = "toString" in arg0;
      }
      if (tmp) {
        const self = this;
        this.result = this.result + arg0.toString();
      }
    }
  },
  {
    key: "finish",
    value: function finish() {
      const items = [this.result];
      return items;
    }
  }
];
const _moduleResult = _createClass(StringBuilder, items);
let c4 = _moduleResult;

export { formatToPlainString };
export const StringBuilder = _moduleResult;
export const stringFormatter = { format: formatToPlainString, builder: _moduleResult };