// _runtime/metro/10591__.js
import _mod10588 from "10588__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

const UKTimeUnitAgoFormatParser = require;
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
class UKTimeUnitAgoFormatParser {
  constructor() {
    self = this;
    tmp = c2(this, UKTimeUnitAgoFormatParser);
    tmp2 = closure_4;
    obj = closure_4(UKTimeUnitAgoFormatParser);
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
_inherits(UKTimeUnitAgoFormatParser, _mod10588.AbstractParserWithLeftBoundaryChecking);
const entry = {
  key: "innerPatternString",
  value: function innerPatternString(arg0) {
    return "(" + UKTimeUnitAgoFormatParser(10586).TIME_UNITS_PATTERN + ")\\s{0,5}\u0442\u043E\u043C\u0443(?=(?:\\W|$))";
  },
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
      const parseDurationResult = UKTimeUnitAgoFormatParser(10586).parseDuration(arg1[1]);
      const ParsingComponents = UKTimeUnitAgoFormatParser(10435).ParsingComponents;
      return ParsingComponents.createRelativeFromReference(
        reference.reference,
        UKTimeUnitAgoFormatParser(10434).reverseDuration(UKTimeUnitAgoFormatParser(10586).parseDuration(arg1[1])),
      );
    },
  },
];

export default _createClass(UKTimeUnitAgoFormatParser, items);
