// _runtime/metro/10536__.js
import AbstractParserWithWordBoundaryChecking from "../10439_AbstractParserWithWordBoundaryChecking.js";
import _mod10526 from "10526__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

const NLTimeUnitAgoFormatParser = require;
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
const regExp = new RegExp("(" + _mod10526.TIME_UNITS_PATTERN + ")(?:geleden|voor|eerder)(?=(?:\\W|$))", "i");
const regExp1 = new RegExp("(" + _mod10526.TIME_UNITS_PATTERN + ")geleden(?=(?:\\W|$))", "i");
class NLTimeUnitAgoFormatParser {
  constructor(arg0) {
    self = this;
    tmp = c2(this, NLTimeUnitAgoFormatParser);
    tmp2 = closure_4;
    obj = closure_4(NLTimeUnitAgoFormatParser);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.strictMode = global;
    return tmp3Result;
  }
}
_inherits(NLTimeUnitAgoFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    return this.strictMode ? regExp1 : regExp;
  },
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
      const parseDurationResult = NLTimeUnitAgoFormatParser(10526).parseDuration(arg1[1]);
      const ParsingComponents = NLTimeUnitAgoFormatParser(10435).ParsingComponents;
      return ParsingComponents.createRelativeFromReference(
        reference.reference,
        NLTimeUnitAgoFormatParser(10434).reverseDuration(NLTimeUnitAgoFormatParser(10526).parseDuration(arg1[1])),
      );
    },
  },
];

export default _createClass(NLTimeUnitAgoFormatParser, items);
