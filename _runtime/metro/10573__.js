// _runtime/metro/10573__.js
import _mod10563 from "10563__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

const RUTimeUnitCasualRelativeFormatParser = require;
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
class RUTimeUnitCasualRelativeFormatParser {
  constructor() {
    self = this;
    tmp = c2(this, RUTimeUnitCasualRelativeFormatParser);
    tmp2 = closure_4;
    obj = closure_4(RUTimeUnitCasualRelativeFormatParser);
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
_inherits(RUTimeUnitCasualRelativeFormatParser, _mod10563.AbstractParserWithLeftRightBoundaryChecking);
const entry = {
  key: "innerPatternString",
  value: function innerPatternString(arg0) {
    return (
      "(\u044D\u0442\u0438|\u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435|\u043F\u0440\u043E\u0448\u043B\u044B\u0435|\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435|\u043F\u043E\u0441\u043B\u0435|\u0441\u043F\u0443\u0441\u0442\u044F|\u0447\u0435\u0440\u0435\u0437|\\+|-)\\s*(" +
      RUTimeUnitCasualRelativeFormatParser(10561).TIME_UNITS_PATTERN +
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
      const parseDurationResult = RUTimeUnitCasualRelativeFormatParser(10561).parseDuration(arg1[2]);
      if ("\u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435" !== formatted) {
        if ("\u043F\u0440\u043E\u0448\u043B\u044B\u0435" !== formatted) {
          let reverseDurationResult = parseDurationResult;
        }
        const ParsingComponents = tmp2(10435).ParsingComponents;
        return ParsingComponents.createRelativeFromReference(reference.reference, reverseDurationResult);
      }
      reverseDurationResult = tmp2(10434).reverseDuration(parseDurationResult);
    },
  },
];

export default _createClass(RUTimeUnitCasualRelativeFormatParser, items);
