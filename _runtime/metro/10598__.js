// _runtime/metro/10598__.js
import _mod10588 from "10588__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

const UKTimeUnitCasualRelativeFormatParser = require;
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
class UKTimeUnitCasualRelativeFormatParser {
  constructor() {
    self = this;
    tmp = c2(this, UKTimeUnitCasualRelativeFormatParser);
    tmp2 = closure_4;
    obj = closure_4(UKTimeUnitCasualRelativeFormatParser);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
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
_inherits(UKTimeUnitCasualRelativeFormatParser, _mod10588.AbstractParserWithLeftRightBoundaryChecking);
const entry = {
  key: "innerPatternString",
  value: function innerPatternString(arg0) {
    return (
      "(\u0446\u0456|\u043E\u0441\u0442\u0430\u043D\u043D\u0456|\u043C\u0438\u043D\u0443\u043B\u0456|\u043C\u0430\u0439\u0431\u0443\u0442\u043D\u0456|\u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0456|\u043F\u0456\u0441\u043B\u044F|\u0447\u0435\u0440\u0435\u0437|\\+|-)\\s*(" +
      UKTimeUnitCasualRelativeFormatParser(10586).TIME_UNITS_PATTERN +
      ")"
    );
  },
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
      const formatted = arg1[1].toLowerCase();
      const parseDurationResult = UKTimeUnitCasualRelativeFormatParser(10586).parseDuration(arg1[3]);
      if ("\u043E\u0441\u0442\u0430\u043D\u043D\u0456" !== formatted) {
        if ("\u043C\u0438\u043D\u0443\u043B\u0456" !== formatted) {
          let reverseDurationResult = parseDurationResult;
        }
        const ParsingComponents = UKTimeUnitCasualRelativeFormatParser(10435).ParsingComponents;
        return ParsingComponents.createRelativeFromReference(reference.reference, reverseDurationResult);
      }
      reverseDurationResult = UKTimeUnitCasualRelativeFormatParser(10434).reverseDuration(parseDurationResult);
    },
  },
];

export default _createClass(UKTimeUnitCasualRelativeFormatParser, items);
