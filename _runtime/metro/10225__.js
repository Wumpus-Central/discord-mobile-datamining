// _runtime/metro/10225__.js
import Meridiem from "../10179_Meridiem.js";
import assignSimilarDate from "../10180_assignSimilarDate.js";
import AbstractParserWithWordBoundaryChecking from "../10181_AbstractParserWithWordBoundaryChecking.js";
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
class DECasualTimeParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, DECasualTimeParser);
    const obj = _getPrototypeOf(DECasualTimeParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(DECasualTimeParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern(arg0) {
    return /(diesen)?\s*(morgen|vormittag|mittags?|nachmittag|abend|nacht|mitternacht)(?=\W|$)/i;
  },
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(refDate, arg1) {
      refDate = refDate.refDate;
      const str = arg1[2];
      const formatted = str.toLowerCase();
      const parsingComponents = refDate.createParsingComponents();
      assignSimilarDate.implySimilarTime(parsingComponents, refDate);
      return DECasualTimeParser.extractTimeComponents(parsingComponents, formatted);
    },
  },
];
const entry1 = {
  key: "extractTimeComponents",
  value: function extractTimeComponents(nowResult, formatted) {
    if ("morgen" === formatted) {
      nowResult.imply("hour", 6);
      nowResult.imply("minute", 0);
      nowResult.imply("second", 0);
      nowResult.imply("meridiem", Meridiem.Meridiem.AM);
    } else if ("vormittag" === formatted) {
      nowResult.imply("hour", 9);
      nowResult.imply("minute", 0);
      nowResult.imply("second", 0);
      nowResult.imply("meridiem", Meridiem.Meridiem.AM);
    } else {
      if ("mittag" !== formatted) {
        if ("mittags" !== formatted) {
          if ("nachmittag" === formatted) {
            nowResult.imply("hour", 15);
            nowResult.imply("minute", 0);
            nowResult.imply("second", 0);
            nowResult.imply("meridiem", Meridiem.Meridiem.PM);
          } else if ("abend" === formatted) {
            nowResult.imply("hour", 18);
            nowResult.imply("minute", 0);
            nowResult.imply("second", 0);
            nowResult.imply("meridiem", Meridiem.Meridiem.PM);
          } else if ("nacht" === formatted) {
            nowResult.imply("hour", 22);
            nowResult.imply("minute", 0);
            nowResult.imply("second", 0);
            nowResult.imply("meridiem", Meridiem.Meridiem.PM);
          } else if ("mitternacht" === formatted) {
            if (nowResult.get("hour") > 1) {
              nowResult.addDurationAsImplied({ day: 1 });
            }
            nowResult.imply("hour", 0);
            nowResult.imply("minute", 0);
            nowResult.imply("second", 0);
            nowResult.imply("meridiem", Meridiem.Meridiem.AM);
          }
        }
      }
      nowResult.imply("hour", 12);
      nowResult.imply("minute", 0);
      nowResult.imply("second", 0);
      nowResult.imply("meridiem", Meridiem.Meridiem.AM);
    }
    return nowResult;
  },
};
const items1 = [entry1];

export default _createClass(DECasualTimeParser, items, items1);
