// _runtime/10601__isNativeReflectConstruct.js
import AbstractParserWithWordBoundaryChecking from "10457_AbstractParserWithWordBoundaryChecking.js";
import closure_2 from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

const ESTimeUnitWithinFormatParser = require;
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
class ESTimeUnitWithinFormatParser {
  constructor() {
    self = this;
    tmp = closure_2(this, ESTimeUnitWithinFormatParser);
    tmp2 = closure_4;
    obj = closure_4(ESTimeUnitWithinFormatParser);
    tmp3 = closure_3;
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
    return tmp3(self, constructResult);
  }
}
_inherits(ESTimeUnitWithinFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const items = [
  {
    key: "innerPattern",
    value: function innerPattern() {
      const regExp = new RegExp(
        "(?:en|por|durante|de|dentro de)\\s*(" + ESTimeUnitWithinFormatParser(10594).TIME_UNITS_PATTERN + ")(?=\\W|$)",
        "i",
      );
      return regExp;
    },
  },
  {
    key: "innerExtract",
    value: function innerExtract(reference) {
      const ParsingComponents = ESTimeUnitWithinFormatParser(10453).ParsingComponents;
      return ParsingComponents.createRelativeFromReference(
        reference.reference,
        ESTimeUnitWithinFormatParser(10594).parseDuration(arg1[1]),
      );
    },
  },
];

export default _createClass(ESTimeUnitWithinFormatParser, items);
