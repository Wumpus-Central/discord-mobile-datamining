// _runtime/metro/10489__.js
import AbstractParserWithWordBoundaryChecking from "../10439_AbstractParserWithWordBoundaryChecking.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

const FRCasualTimeParser = require;
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
class FRCasualTimeParser {
  constructor() {
    self = this;
    tmp = c2(this, FRCasualTimeParser);
    tmp2 = closure_4;
    obj = closure_4(FRCasualTimeParser);
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
_inherits(FRCasualTimeParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern(arg0) {
    return /(cet?)?\s*(matin|soir|après-midi|aprem|a midi|à minuit)(?=\W|$)/i;
  },
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(createParsingComponents, arg1) {
      const formatted = arg1[2].toLowerCase();
      const parsingComponents = createParsingComponents.createParsingComponents();
      if ("apr\u00E8s-midi" !== formatted) {
        if ("aprem" !== formatted) {
          if ("soir" === formatted) {
            parsingComponents.imply("hour", 18);
            parsingComponents.imply("minute", 0);
            parsingComponents.imply("meridiem", FRCasualTimeParser(10437).Meridiem.PM);
          } else if ("matin" === formatted) {
            parsingComponents.imply("hour", 8);
            parsingComponents.imply("minute", 0);
            parsingComponents.imply("meridiem", FRCasualTimeParser(10437).Meridiem.AM);
          } else if ("a midi" === formatted) {
            parsingComponents.imply("hour", 12);
            parsingComponents.imply("minute", 0);
            parsingComponents.imply("meridiem", FRCasualTimeParser(10437).Meridiem.AM);
          } else if ("\u00E0 minuit" === formatted) {
            parsingComponents.imply("hour", 0);
            parsingComponents.imply("meridiem", FRCasualTimeParser(10437).Meridiem.AM);
          }
        }
        return parsingComponents;
      }
      parsingComponents.imply("hour", 14);
      parsingComponents.imply("minute", 0);
      parsingComponents.imply("meridiem", FRCasualTimeParser(10437).Meridiem.PM);
    },
  },
];

export default _createClass(FRCasualTimeParser, items);
