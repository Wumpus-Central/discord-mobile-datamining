// _runtime/metro/10483__.js
import AbstractParserWithWordBoundaryChecking from "../10439_AbstractParserWithWordBoundaryChecking.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

const DECasualTimeParser = require;
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
class DECasualTimeParser {
  constructor() {
    self = this;
    tmp = c2(this, DECasualTimeParser);
    tmp2 = closure_4;
    obj = closure_4(DECasualTimeParser);
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
    value: function innerExtract(createParsingComponents, arg1) {
      const formatted = arg1[2].toLowerCase();
      const parsingComponents = createParsingComponents.createParsingComponents();
      DECasualTimeParser(10438).implySimilarTime(parsingComponents, createParsingComponents.refDate);
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
      nowResult.imply("meridiem", DECasualTimeParser(10437).Meridiem.AM);
    } else if ("vormittag" === formatted) {
      nowResult.imply("hour", 9);
      nowResult.imply("minute", 0);
      nowResult.imply("second", 0);
      nowResult.imply("meridiem", DECasualTimeParser(10437).Meridiem.AM);
    } else {
      if ("mittag" !== formatted) {
        if ("mittags" !== formatted) {
          if ("nachmittag" === formatted) {
            nowResult.imply("hour", 15);
            nowResult.imply("minute", 0);
            nowResult.imply("second", 0);
            nowResult.imply("meridiem", DECasualTimeParser(10437).Meridiem.PM);
          } else if ("abend" === formatted) {
            nowResult.imply("hour", 18);
            nowResult.imply("minute", 0);
            nowResult.imply("second", 0);
            nowResult.imply("meridiem", DECasualTimeParser(10437).Meridiem.PM);
          } else if ("nacht" === formatted) {
            nowResult.imply("hour", 22);
            nowResult.imply("minute", 0);
            nowResult.imply("second", 0);
            nowResult.imply("meridiem", DECasualTimeParser(10437).Meridiem.PM);
          } else if ("mitternacht" === formatted) {
            if (nowResult.get("hour") > 1) {
              nowResult.addDurationAsImplied({ day: 1 });
            }
            nowResult.imply("hour", 0);
            nowResult.imply("minute", 0);
            nowResult.imply("second", 0);
            nowResult.imply("meridiem", DECasualTimeParser(10437).Meridiem.AM);
          }
        }
      }
      nowResult.imply("hour", 12);
      nowResult.imply("minute", 0);
      nowResult.imply("second", 0);
      nowResult.imply("meridiem", DECasualTimeParser(10437).Meridiem.AM);
    }
    return nowResult;
  },
};
const items1 = [entry1];

export default _createClass(DECasualTimeParser, items, items1);
