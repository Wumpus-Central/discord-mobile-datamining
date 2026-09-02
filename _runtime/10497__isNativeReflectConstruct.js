// === Module 10497: _isNativeReflectConstruct ===

// Module 10497 (_isNativeReflectConstruct)
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10453 */;
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

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
  } catch (err) {
  }
}
class DECasualTimeParser {
  constructor() {
    self = this;
    tmp = closure_2(this, DECasualTimeParser);
    tmp2 = closure_4;
    obj = closure_4(DECasualTimeParser);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
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
let obj = {
  key: "innerPattern",
  value: function innerPattern(arg0) {
    return /(diesen)?\s*(morgen|vormittag|mittags?|nachmittag|abend|nacht|mitternacht)(?=\W|$)/i;
  }
};
const items = [
  obj,
  {
    key: "innerExtract",
    value: function innerExtract(createParsingComponents) {
      const formatted = arg1[2].toLowerCase();
      const parsingComponents = createParsingComponents.createParsingComponents();
      DECasualTimeParser(10452).implySimilarTime(parsingComponents, createParsingComponents.refDate);
      return DECasualTimeParser.extractTimeComponents(parsingComponents, formatted);
    }
  }
];
obj = {
  key: "extractTimeComponents",
  value: function extractTimeComponents(nowResult, formatted) {
    if ("morgen" === formatted) {
      nowResult.imply("hour", 6);
      nowResult.imply("minute", 0);
      nowResult.imply("second", 0);
      nowResult.imply("meridiem", DECasualTimeParser(10451).Meridiem.AM);
    } else if ("vormittag" === formatted) {
      nowResult.imply("hour", 9);
      nowResult.imply("minute", 0);
      nowResult.imply("second", 0);
      nowResult.imply("meridiem", DECasualTimeParser(10451).Meridiem.AM);
    } else {
      if ("mittag" !== formatted) {
        if ("mittags" !== formatted) {
          if ("nachmittag" === formatted) {
            nowResult.imply("hour", 15);
            nowResult.imply("minute", 0);
            nowResult.imply("second", 0);
            nowResult.imply("meridiem", DECasualTimeParser(10451).Meridiem.PM);
          } else if ("abend" === formatted) {
            nowResult.imply("hour", 18);
            nowResult.imply("minute", 0);
            nowResult.imply("second", 0);
            nowResult.imply("meridiem", DECasualTimeParser(10451).Meridiem.PM);
          } else if ("nacht" === formatted) {
            nowResult.imply("hour", 22);
            nowResult.imply("minute", 0);
            nowResult.imply("second", 0);
            nowResult.imply("meridiem", DECasualTimeParser(10451).Meridiem.PM);
          } else if ("mitternacht" === formatted) {
            if (nowResult.get("hour") > 1) {
              nowResult.addDurationAsImplied({ day: 1 });
            }
            nowResult.imply("hour", 0);
            nowResult.imply("minute", 0);
            nowResult.imply("second", 0);
            nowResult.imply("meridiem", DECasualTimeParser(10451).Meridiem.AM);
          }
        }
      }
      nowResult.imply("hour", 12);
      nowResult.imply("minute", 0);
      nowResult.imply("second", 0);
      nowResult.imply("meridiem", DECasualTimeParser(10451).Meridiem.AM);
    }
    return nowResult;
  }
};
const items1 = [obj];

export default _createClass(DECasualTimeParser, items, items1);