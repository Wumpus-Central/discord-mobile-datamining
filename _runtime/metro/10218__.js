// === Module 10218: ? ===

// Module 10218
import Meridiem from "Meridiem" /* 10166 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10168 */;
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
class FRCasualTimeParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, FRCasualTimeParser);
    const obj = _getPrototypeOf(FRCasualTimeParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(FRCasualTimeParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern(arg0) {
    return /(cet?)?\s*(matin|soir|après-midi|aprem|a midi|à minuit)(?=\W|$)/i;
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(createParsingComponents, arg1) {
      const str = arg1[2];
      const formatted = str.toLowerCase();
      const parsingComponents = createParsingComponents.createParsingComponents();
      if ("apr\u00E8s-midi" !== formatted) {
        if ("aprem" !== formatted) {
          if ("soir" === formatted) {
            parsingComponents.imply("hour", 18);
            parsingComponents.imply("minute", 0);
            parsingComponents.imply("meridiem", Meridiem.Meridiem.PM);
          } else if ("matin" === formatted) {
            parsingComponents.imply("hour", 8);
            parsingComponents.imply("minute", 0);
            parsingComponents.imply("meridiem", Meridiem.Meridiem.AM);
          } else if ("a midi" === formatted) {
            parsingComponents.imply("hour", 12);
            parsingComponents.imply("minute", 0);
            parsingComponents.imply("meridiem", Meridiem.Meridiem.AM);
          } else if ("\u00E0 minuit" === formatted) {
            parsingComponents.imply("hour", 0);
            parsingComponents.imply("meridiem", Meridiem.Meridiem.AM);
          }
        }
        return parsingComponents;
      }
      parsingComponents.imply("hour", 14);
      parsingComponents.imply("minute", 0);
      parsingComponents.imply("meridiem", Meridiem.Meridiem.PM);
    }
  }
];

export default _createClass(FRCasualTimeParser, items);