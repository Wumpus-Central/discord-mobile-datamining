// _runtime/metro/10534__.js
import AbstractParserWithWordBoundaryChecking from "../10439_AbstractParserWithWordBoundaryChecking.js";
import _mod10526 from "10526__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

const NLTimeUnitCasualRelativeFormatParser = require;
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
const regExp = new RegExp(
  "(dit|deze|vorig|afgelopen|(?:aan)?komend|over|\\+|-)e?\\s*(" + _mod10526.TIME_UNITS_PATTERN + ")(?=\\W|$)",
  "i",
);
class NLTimeUnitCasualRelativeFormatParser {
  constructor() {
    self = this;
    tmp = c2(this, NLTimeUnitCasualRelativeFormatParser);
    tmp2 = closure_4;
    obj = closure_4(NLTimeUnitCasualRelativeFormatParser);
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
_inherits(
  NLTimeUnitCasualRelativeFormatParser,
  AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking,
);
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    return regExp;
  },
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
      const formatted = arg1[1].toLowerCase();
      const parseDurationResult = NLTimeUnitCasualRelativeFormatParser(10526).parseDuration(arg1[2]);
      if ("vorig" !== formatted) {
        if ("afgelopen" !== formatted) {
          let reverseDurationResult = parseDurationResult;
        }
        const ParsingComponents = NLTimeUnitCasualRelativeFormatParser(10435).ParsingComponents;
        return ParsingComponents.createRelativeFromReference(reference.reference, reverseDurationResult);
      }
      reverseDurationResult = NLTimeUnitCasualRelativeFormatParser(10434).reverseDuration(parseDurationResult);
    },
  },
];

export default _createClass(NLTimeUnitCasualRelativeFormatParser, items);
