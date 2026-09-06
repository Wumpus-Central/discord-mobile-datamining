// === Module 10535: ? ===

// Module 10535
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 10432 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10439 */;
import _mod10526 from "module_10526" /* 10526 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const NLRelativeDateFormatParser = require;
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
const regExp = new RegExp("(dit|deze|(?:aan)?komend|volgend|afgelopen|vorig)e?\\s*(" + repeatedTimeunitPattern.matchAnyPattern(_mod10526.TIME_UNIT_DICTIONARY) + ")(?=\\s*)(?=\\W|$)", "i");
class NLRelativeDateFormatParser {
  constructor() {
    self = this;
    tmp = c2(this, NLRelativeDateFormatParser);
    tmp2 = closure_4;
    obj = closure_4(NLRelativeDateFormatParser);
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
_inherits(NLRelativeDateFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    return regExp;
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(createParsingComponents, arg1) {
      const formatted = arg1[1].toLowerCase();
      const str3 = arg1[2].toLowerCase();
      const tmp4 = NLRelativeDateFormatParser(10526).TIME_UNIT_DICTIONARY[str3];
      if ("volgend" != formatted) {
        if ("komend" != formatted) {
          if ("aankomend" != formatted) {
            if ("afgelopen" != formatted) {
              if ("vorig" != formatted) {
                const parsingComponents = createParsingComponents.createParsingComponents();
                const _Date = Date;
                const instant = createParsingComponents.reference.instant;
                const date = new Date(instant.getTime());
                if (str3.match(/week/i)) {
                  date.setDate(date.getDate() - date.getDay());
                  parsingComponents.imply("day", date.getDate());
                  parsingComponents.imply("month", date.getMonth() + 1);
                  parsingComponents.imply("year", date.getFullYear());
                  const date1 = date.getDate();
                } else if (str3.match(/maand/i)) {
                  date.setDate(1);
                  parsingComponents.imply("day", date.getDate());
                  parsingComponents.assign("year", date.getFullYear());
                  let obj = parsingComponents.assign("month", date.getMonth() + 1);
                } else if (str3.match(/jaar/i)) {
                  date.setDate(1);
                  date.setMonth(0);
                  parsingComponents.imply("day", date.getDate());
                  parsingComponents.imply("month", date.getMonth() + 1);
                  parsingComponents.assign("year", date.getFullYear());
                }
                return parsingComponents;
              }
            }
            obj = {};
            obj[tmp4] = -1;
            const ParsingComponents = NLRelativeDateFormatParser(10435).ParsingComponents;
            return ParsingComponents.createRelativeFromReference(createParsingComponents.reference, obj);
          }
        }
      }
      const ParsingComponents2 = NLRelativeDateFormatParser(10435).ParsingComponents;
      return ParsingComponents2.createRelativeFromReference(createParsingComponents.reference, { [tmp4]: 1 });
    }
  }
];

export default _createClass(NLRelativeDateFormatParser, items);