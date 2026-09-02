// === Module 10487: _isNativeReflectConstruct ===

// Module 10487 (_isNativeReflectConstruct)
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10453 */;
import ISOFormatParser from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_1 from "_possibleConstructorReturn" /* 93 */;
import closure_2 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

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
const regExp = new RegExp("([0-9]{4})\\-([0-9]{1,2})\\-([0-9]{1,2})(?:T([0-9]{1,2}):([0-9]{1,2})(?::([0-9]{1,2})(?:\\.(\\d{1,4}))?)?(Z|([+-]\\d{2}):?(\\d{2})?)?)?(?=\\W|$)", "i");
class ISOFormatParser {
  constructor() {
    self = this;
    tmp = ISOFormatParser(this, ISOFormatParser);
    tmp2 = closure_2;
    obj = closure_2(ISOFormatParser);
    tmp3 = closure_1;
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
_inherits(ISOFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const items = [
  {
    key: "innerPattern",
    value: function innerPattern() {
      return regExp;
    }
  },
  {
    key: "innerExtract",
    value: function innerExtract(createParsingComponents) {
      let obj = { year: parseInt(arg1[1]), month: parseInt(arg1[2]), day: parseInt(arg1[3]) };
      const parsingComponents = createParsingComponents.createParsingComponents(obj);
      if (null != arg1[4]) {
        const _parseInt5 = parseInt;
        obj = parsingComponents.assign("hour", parseInt(arg1[4]));
        const _parseInt6 = parseInt;
        obj = parsingComponents.assign("minute", parseInt(arg1[5]));
        if (null != arg1[6]) {
          const _parseInt = parseInt;
          parsingComponents.assign("second", parseInt(arg1[6]));
        }
        if (null != arg1[7]) {
          const _parseInt2 = parseInt;
          parsingComponents.assign("millisecond", parseInt(arg1[7]));
        }
        if (null != arg1[8]) {
          let num2 = 0;
          if (!arg1[9]) {
            let num3 = parsingComponents.assign("timezoneOffset", num2);
          } else {
            const _parseInt3 = parseInt;
            num3 = 0;
            const parsed = parseInt(arg1[9]);
            if (null != arg1[10]) {
              const _parseInt4 = parseInt;
              num3 = parseInt(arg1[10]);
            }
            const result = 60 * parsed;
            if (result >= 0) {
              num2 = result + num3;
            }
          }
          num2 = result - num3;
        }
      }
      return parsingComponents.addTag("parser/ISOFormatParser");
    }
  }
];

export default _createClass(ISOFormatParser, items);