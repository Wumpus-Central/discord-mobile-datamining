// === Module 10480: _isNativeReflectConstruct ===

// Module 10480 (_isNativeReflectConstruct)
import WEEKDAY_DICTIONARY from "WEEKDAY_DICTIONARY" /* 10449 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10457 */;
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const ENTimeUnitCasualRelativeFormatParser = require;
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
const regExp = new RegExp("(this|last|past|next|after|\\+|-)\\s*(" + WEEKDAY_DICTIONARY.TIME_UNITS_PATTERN + ")(?=\\W|$)", "i");
const regExp1 = new RegExp("(this|last|past|next|after|\\+|-)\\s*(" + WEEKDAY_DICTIONARY.TIME_UNITS_NO_ABBR_PATTERN + ")(?=\\W|$)", "i");
class ENTimeUnitCasualRelativeFormatParser {
  constructor() {
    flag = global;
    if (global === undefined) {
      flag = true;
    }
    self = this;
    tmp = closure_2(this, ENTimeUnitCasualRelativeFormatParser);
    tmp2 = closure_4;
    obj = closure_4(ENTimeUnitCasualRelativeFormatParser);
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
_inherits(ENTimeUnitCasualRelativeFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
      const parseDurationResult = ENTimeUnitCasualRelativeFormatParser(10449).parseDuration(arg1[2]);
      if (parseDurationResult) {
        if ("last" !== formatted) {
          if ("past" !== formatted) {
            let reverseDurationResult = parseDurationResult;
          }
          const ParsingComponents = tmp2(10453).ParsingComponents;
          return ParsingComponents.createRelativeFromReference(reference.reference, reverseDurationResult);
        }
        reverseDurationResult = tmp2(10452).reverseDuration(parseDurationResult);
      } else {
        return null;
      }
    }
  }
];

export default _createClass(ENTimeUnitCasualRelativeFormatParser, items);