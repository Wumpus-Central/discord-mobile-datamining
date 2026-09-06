// === Module 10608: ? ===

// Module 10608
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10439 */;
import _mod10601 from "module_10601" /* 10601 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const ENTimeUnitAgoFormatParser = require;
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
const regExp = new RegExp("(" + _mod10601.TIME_UNITS_PATTERN + ")\\s{0,5}(?:fa|prima|precedente)(?=(?:\\W|$))", "i");
const regExp1 = new RegExp("(" + _mod10601.TIME_UNITS_PATTERN + ")\\s{0,5}fa(?=(?:\\W|$))", "i");
class ENTimeUnitAgoFormatParser {
  constructor(arg0) {
    self = this;
    tmp = c2(this, ENTimeUnitAgoFormatParser);
    tmp2 = closure_4;
    obj = closure_4(ENTimeUnitAgoFormatParser);
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
_inherits(ENTimeUnitAgoFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    return this.strictMode ? regExp1 : regExp;
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
      const parseDurationResult = ENTimeUnitAgoFormatParser(10601).parseDuration(arg1[1]);
      const ParsingComponents = ENTimeUnitAgoFormatParser(10435).ParsingComponents;
      return ParsingComponents.createRelativeFromReference(reference.reference, ENTimeUnitAgoFormatParser(10434).reverseDuration(ENTimeUnitAgoFormatParser(10601).parseDuration(arg1[1])));
    }
  }
];

export default _createClass(ENTimeUnitAgoFormatParser, items);