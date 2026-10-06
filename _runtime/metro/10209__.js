// _runtime/metro/10209__.js
import _mod10193 from "10193__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import map from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

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
class ENUnlikelyFormatFilter {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ENUnlikelyFormatFilter);
    const obj = _getPrototypeOf(ENUnlikelyFormatFilter);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    return map(self, constructResult);
  }
}
_inherits(ENUnlikelyFormatFilter, _mod10193.Filter);
const entry = {
  key: "isValid",
  value: function isValid(text, text2) {
    let closure_0 = text2;
    const str = text2.text;
    const str2 = str.trim();
    const str3 = text.text;
    if (str2 === str3.trim()) {
      return true;
    } else {
      if ("may" === str2.toLowerCase()) {
        const str4 = text.text;
        const str5 = str4.substring(0, text2.index);
        const str6 = str5.trim();
        if (!str6.match(/\b(in)$/i)) {
          text.debug(() => {
            console.log("Removing unlikely result: " + text2);
          });
          return false;
        }
      }
      const formatted = str2.toLowerCase();
      const endsWithResult = formatted.endsWith("the second");
      let flag2 = !endsWithResult;
      if (endsWithResult) {
        flag2 = false;
        const str8 = text.text;
        const str9 = str8.substring(text2.index + text2.text.length);
        if (str9.trim().length > 0) {
          text.debug(() => {
            console.log("Removing unlikely result: " + text2);
          });
          flag2 = false;
        }
      }
      return flag2;
    }
  },
};
const items = [entry];

export default _createClass(ENUnlikelyFormatFilter, items);
