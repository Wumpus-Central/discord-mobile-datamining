// === Module 10622: _isNativeReflectConstruct ===

// Module 10622 (_isNativeReflectConstruct)
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10439 */;
import WEEKDAY_DICTIONARY from "WEEKDAY_DICTIONARY" /* 10620 */;
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

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
  } catch (err) {
  }
}
const regExp = new RegExp("(denna|den h\u00E4r|f\u00F6rra|passerade|n\u00E4sta|kommande|efter|\\+|-)\\s*(" + WEEKDAY_DICTIONARY.TIME_UNITS_PATTERN + ")(?=\\W|$)", "i");
const regExp1 = new RegExp("(denna|den h\u00E4r|f\u00F6rra|passerade|n\u00E4sta|kommande|efter|\\+|-)\\s*(" + WEEKDAY_DICTIONARY.TIME_UNITS_NO_ABBR_PATTERN + ")(?=\\W|$)", "i");
class SVTimeUnitCasualRelativeFormatParser {
  constructor() {
    flag = global;
    if (global === undefined) {
      flag = true;
    }
    self = this;
    tmp = closure_2(this, SVTimeUnitCasualRelativeFormatParser);
    tmp2 = closure_4;
    obj = closure_4(SVTimeUnitCasualRelativeFormatParser);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
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
_inherits(SVTimeUnitCasualRelativeFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const items = [
  {
    key: "innerPattern",
    value: function innerPattern() {
      return this.allowAbbreviations ? regExp : regExp1;
    }
  },
  {
    key: "innerExtract",
    value: function innerExtract(reference) {
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
    }
  }
];

export default _createClass(SVTimeUnitCasualRelativeFormatParser, items);