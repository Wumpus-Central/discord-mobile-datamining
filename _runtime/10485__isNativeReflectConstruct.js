// === Module 10485: _isNativeReflectConstruct ===

// Module 10485 (_isNativeReflectConstruct)
import Filter from "Filter" /* 10469 */;
import ENUnlikelyFormatFilter from "_classCallCheck" /* 41 */;
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
class ENUnlikelyFormatFilter {
  constructor() {
    self = this;
    tmp = ENUnlikelyFormatFilter(this, ENUnlikelyFormatFilter);
    tmp2 = closure_2;
    obj = closure_2(ENUnlikelyFormatFilter);
    tmp3 = closure_1;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(ENUnlikelyFormatFilter, Filter.Filter);
const items = [
  {
    key: "isValid",
    value: function isValid(text, text2) {
      closure_0 = text2;
      const str2 = text2.text.trim();
      if (str2 === str3.trim()) {
        return true;
      } else {
        if ("may" === str2.toLowerCase()) {
          const str4 = text.text;
          const str5 = text.text.substring(0, text2.index);
          if (!str6.match(/\b(in)$/i)) {
            text.debug(() => {
              console.log("Removing unlikely result: " + closure_0);
            });
            return false;
          }
          str6 = text.text.substring(0, text2.index).trim();
        }
        const formatted = str2.toLowerCase();
        const endsWithResult = formatted.endsWith("the second");
        let flag2 = !endsWithResult;
        if (endsWithResult) {
          flag2 = false;
          if (str9.trim().length > 0) {
            text.debug(() => {
              console.log("Removing unlikely result: " + closure_0);
            });
            flag2 = false;
          }
          const str8 = text.text;
          str9 = text.text.substring(text2.index + text2.text.length);
        }
        return flag2;
      }
      const str = text2.text;
      str3 = text.text;
    }
  }
];

export default _createClass(ENUnlikelyFormatFilter, items);