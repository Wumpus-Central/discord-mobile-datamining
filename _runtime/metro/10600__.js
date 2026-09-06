// _runtime/metro/10600__.js
import AbstractParserWithWordBoundaryChecking from "../10439_AbstractParserWithWordBoundaryChecking.js";
import _mod10601 from "10601__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

const ENTimeUnitWithinFormatParser = require;
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
  "(?:within|in|for)\\s*(?:(?:pi\u00F9 o meno|intorno|approssimativamente|verso|verso le)\\s*(?:~\\s*)?)?(" +
    _mod10601.TIME_UNITS_PATTERN +
    ")(?=\\W|$)",
  "i",
);
const regExp1 = new RegExp(
  "(?:(?:pi\u00F9 o meno|intorno|approssimativamente|verso|verso le)\\s*(?:~\\s*)?)?(" +
    _mod10601.TIME_UNITS_PATTERN +
    ")(?=\\W|$)",
  "i",
);
class ENTimeUnitWithinFormatParser {
  constructor() {
    self = this;
    tmp = c2(this, ENTimeUnitWithinFormatParser);
    tmp2 = closure_4;
    obj = closure_4(ENTimeUnitWithinFormatParser);
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
_inherits(ENTimeUnitWithinFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern(option) {
    return option.option.forwardDate ? regExp1 : regExp;
  },
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
      const ParsingComponents = ENTimeUnitWithinFormatParser(10435).ParsingComponents;
      return ParsingComponents.createRelativeFromReference(
        reference.reference,
        ENTimeUnitWithinFormatParser(10601).parseDuration(arg1[1]),
      );
    },
  },
];

export default _createClass(ENTimeUnitWithinFormatParser, items);
