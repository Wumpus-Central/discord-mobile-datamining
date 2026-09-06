// _runtime/metro/10498__.js
import AbstractParserWithWordBoundaryChecking from "../10439_AbstractParserWithWordBoundaryChecking.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

const FRTimeUnitWithinFormatParser = require;
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
class FRTimeUnitWithinFormatParser {
  constructor() {
    self = this;
    tmp = c2(this, FRTimeUnitWithinFormatParser);
    tmp2 = closure_4;
    obj = closure_4(FRTimeUnitWithinFormatParser);
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
_inherits(FRTimeUnitWithinFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    const regExp = new RegExp(
      "(?:dans|en|pour|pendant|de)\\s*(" + FRTimeUnitWithinFormatParser(10494).TIME_UNITS_PATTERN + ")(?=\\W|$)",
      "i",
    );
    return regExp;
  },
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
      const ParsingComponents = FRTimeUnitWithinFormatParser(10435).ParsingComponents;
      return ParsingComponents.createRelativeFromReference(
        reference.reference,
        FRTimeUnitWithinFormatParser(10494).parseDuration(arg1[1]),
      );
    },
  },
];

export default _createClass(FRTimeUnitWithinFormatParser, items);
