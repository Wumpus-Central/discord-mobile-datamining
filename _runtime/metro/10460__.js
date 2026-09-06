// _runtime/metro/10460__.js
import _mod10431 from "10431__.js";
import repeatedTimeunitPattern from "../10432_repeatedTimeunitPattern.js";
import AbstractParserWithWordBoundaryChecking from "../10439_AbstractParserWithWordBoundaryChecking.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

const ENRelativeDateFormatParser = require;
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
  "(this|last|past|next|after\\s*this)\\s*(" +
    repeatedTimeunitPattern.matchAnyPattern(_mod10431.TIME_UNIT_DICTIONARY) +
    ")(?=\\s*)(?=\\W|$)",
  "i",
);
class ENRelativeDateFormatParser {
  constructor() {
    self = this;
    tmp = c2(this, ENRelativeDateFormatParser);
    tmp2 = closure_4;
    obj = closure_4(ENRelativeDateFormatParser);
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
_inherits(ENRelativeDateFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    return regExp;
  },
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(createParsingComponents, arg1) {
      const formatted = arg1[1].toLowerCase();
      const str3 = arg1[2].toLowerCase();
      const tmp3 = ENRelativeDateFormatParser(10431).TIME_UNIT_DICTIONARY[str3];
      if ("next" != formatted) {
        if (!formatted.startsWith("after")) {
          if ("last" != formatted) {
            if ("past" != formatted) {
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
              } else if (str3.match(/month/i)) {
                date.setDate(1);
                parsingComponents.imply("day", date.getDate());
                parsingComponents.assign("year", date.getFullYear());
                parsingComponents.assign("month", date.getMonth() + 1);
              } else if (str3.match(/year/i)) {
                date.setDate(1);
                date.setMonth(0);
                parsingComponents.imply("day", date.getDate());
                parsingComponents.imply("month", date.getMonth() + 1);
                parsingComponents.assign("year", date.getFullYear());
              }
              return parsingComponents;
            }
          }
          const obj2 = {};
          obj2[tmp3] = -1;
          const ParsingComponents = ENRelativeDateFormatParser(10435).ParsingComponents;
          return ParsingComponents.createRelativeFromReference(createParsingComponents.reference, obj2);
        }
      }
      const ParsingComponents2 = ENRelativeDateFormatParser(10435).ParsingComponents;
      return ParsingComponents2.createRelativeFromReference(createParsingComponents.reference, { [tmp3]: 1 });
    },
  },
];

export default _createClass(ENRelativeDateFormatParser, items);
