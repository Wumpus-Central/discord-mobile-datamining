// _runtime/metro/10622__.js
import AbstractParserWithWordBoundaryChecking from "../10439_AbstractParserWithWordBoundaryChecking.js";
import _mod10620 from "10620__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

const SVTimeUnitCasualRelativeFormatParser = require;
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
  "(denna|den h\u00E4r|f\u00F6rra|passerade|n\u00E4sta|kommande|efter|\\+|-)\\s*(" +
    _mod10620.TIME_UNITS_PATTERN +
    ")(?=\\W|$)",
  "i",
);
const regExp1 = new RegExp(
  "(denna|den h\u00E4r|f\u00F6rra|passerade|n\u00E4sta|kommande|efter|\\+|-)\\s*(" +
    _mod10620.TIME_UNITS_NO_ABBR_PATTERN +
    ")(?=\\W|$)",
  "i",
);
class SVTimeUnitCasualRelativeFormatParser {
  constructor() {
    flag = global;
    if (global === undefined) {
      flag = true;
    }
    self = this;
    tmp = c2(this, SVTimeUnitCasualRelativeFormatParser);
    tmp2 = closure_4;
    obj = closure_4(SVTimeUnitCasualRelativeFormatParser);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.allowAbbreviations = flag;
    return tmp3Result;
  }
}
_inherits(
  SVTimeUnitCasualRelativeFormatParser,
  AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking,
);
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    return this.allowAbbreviations ? regExp : regExp1;
  },
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
      const formatted = arg1[1].toLowerCase();
      const parseDurationResult = SVTimeUnitCasualRelativeFormatParser(10620).parseDuration(arg1[2]);
      if (parseDurationResult) {
        if ("f\u00F6rra" !== formatted) {
          if ("passerade" !== formatted) {
            let reverseDurationResult = parseDurationResult;
          }
          const ParsingComponents = tmp2(10435).ParsingComponents;
          return ParsingComponents.createRelativeFromReference(reference.reference, reverseDurationResult);
        }
        reverseDurationResult = tmp2(10434).reverseDuration(parseDurationResult);
      } else {
        return null;
      }
    },
  },
];

export default _createClass(SVTimeUnitCasualRelativeFormatParser, items);
