// _runtime/metro/10467__.js
import Filter from "../10451_Filter.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _possibleConstructorReturn from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

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
class ENUnlikelyFormatFilter {
  constructor() {
    self = this;
    tmp = closure_0(this, ENUnlikelyFormatFilter);
    tmp2 = c2;
    obj = c2(ENUnlikelyFormatFilter);
    tmp3 = closure_1;
    if (closure_3()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    return tmp3(self, constructResult);
  }
}
_classCallCheck = ENUnlikelyFormatFilter;
_inherits(ENUnlikelyFormatFilter, Filter.Filter);
const entry = {
  key: "isValid",
  value: function isValid(text, text2) {
    closure_0 = text2;
    const str2 = text2.text.trim();
    if (str2 === str3.trim()) {
      return true;
    } else {
      if ("may" === str2.toLowerCase()) {
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
        str9 = text.text.substring(text2.index + text2.text.length);
      }
      return flag2;
    }
    str3 = text.text;
  },
};
const items = [entry];

export default _createClass(ENUnlikelyFormatFilter, items);
