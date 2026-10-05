// _runtime/metro/10264__.js
import repeatedTimeunitPattern from "../10161_repeatedTimeunitPattern.js";
import ReferenceWithTimezone from "../10164_ReferenceWithTimezone.js";
import AbstractParserWithWordBoundaryChecking from "../10168_AbstractParserWithWordBoundaryChecking.js";
import _mod10255 from "10255__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
const regExp = new RegExp(
  "(dit|deze|(?:aan)?komend|volgend|afgelopen|vorig)e?\\s*(" +
    repeatedTimeunitPattern.matchAnyPattern(_mod10255.TIME_UNIT_DICTIONARY) +
    ")(?=\\s*)(?=\\W|$)",
  "i",
);
class NLRelativeDateFormatParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, NLRelativeDateFormatParser);
    const obj = _getPrototypeOf(NLRelativeDateFormatParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(NLRelativeDateFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
      const str = arg1[1];
      const formatted = str.toLowerCase();
      const str2 = arg1[2];
      const str3 = str2.toLowerCase();
      const tmp4 = _mod10255.TIME_UNIT_DICTIONARY[str3];
      if ("volgend" != formatted) {
        if ("komend" != formatted) {
          if ("aankomend" != formatted) {
            if ("afgelopen" != formatted) {
              if ("vorig" != formatted) {
                const parsingComponents = createParsingComponents.createParsingComponents();
                const _Date = Date;
                const instant = createParsingComponents.reference.instant;
                const self = this;
                const self2 = this;
                const date = new Date(instant.getTime());
                if (str3.match(/week/i)) {
                  const setDate = date.setDate;
                  const date1 = date.getDate();
                  setDate(date1 - date.getDay());
                  parsingComponents.imply("day", date.getDate());
                  parsingComponents.imply("month", date.getMonth() + 1);
                  parsingComponents.imply("year", date.getFullYear());
                } else if (str3.match(/maand/i)) {
                  date.setDate(1);
                  parsingComponents.imply("day", date.getDate());
                  parsingComponents.assign("year", date.getFullYear());
                  parsingComponents.assign("month", date.getMonth() + 1);
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
            const obj = {};
            obj[tmp4] = -1;
            const ParsingComponents = ReferenceWithTimezone.ParsingComponents;
            return ParsingComponents.createRelativeFromReference(createParsingComponents.reference, obj);
          }
        }
      }
      const ParsingComponents2 = ReferenceWithTimezone.ParsingComponents;
      return ParsingComponents2.createRelativeFromReference(createParsingComponents.reference, { [tmp4]: 1 });
    },
  },
];

export default _createClass(NLRelativeDateFormatParser, items);
