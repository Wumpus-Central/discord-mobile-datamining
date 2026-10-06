// === Module 10204: ? ===

// Module 10204
import _mod10173 from "module_10173" /* 10173 */;
import EmptyDuration from "EmptyDuration" /* 10176 */;
import ReferenceWithTimezone from "ReferenceWithTimezone" /* 10177 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10181 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
const regExp = new RegExp("(this|last|past|next|after|\\+|-)\\s*(" + _mod10173.TIME_UNITS_PATTERN + ")(?=\\W|$)", "i");
const regExp1 = new RegExp("(this|last|past|next|after|\\+|-)\\s*(" + _mod10173.TIME_UNITS_NO_ABBR_PATTERN + ")(?=\\W|$)", "i");
class ENTimeUnitCasualRelativeFormatParser {
  constructor() {
    let constructResult;
    let flag = arg0;
    if (arg0 === undefined) {
      flag = true;
    }
    const self = this;
    _classCallCheck(this, ENTimeUnitCasualRelativeFormatParser);
    const obj = _getPrototypeOf(ENTimeUnitCasualRelativeFormatParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    const tmp3Result = c3(self, constructResult);
    tmp3Result.allowAbbreviations = flag;
    return tmp3Result;
  }
}
_inherits(ENTimeUnitCasualRelativeFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    return this.allowAbbreviations ? regExp : regExp1;
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
      const str = arg1[1];
      const formatted = str.toLowerCase();
      const parseDurationResult = _mod10173.parseDuration(arg1[2]);
      if (parseDurationResult) {
        if ("last" !== formatted) {
          let reverseDurationResult;
          if ("past" !== formatted) {
            reverseDurationResult = parseDurationResult;
          }
          const ParsingComponents = ReferenceWithTimezone.ParsingComponents;
          return ParsingComponents.createRelativeFromReference(reference.reference, reverseDurationResult);
        }
        reverseDurationResult = EmptyDuration.reverseDuration(parseDurationResult);
      } else {
        return null;
      }
    }
  }
];

export default _createClass(ENTimeUnitCasualRelativeFormatParser, items);