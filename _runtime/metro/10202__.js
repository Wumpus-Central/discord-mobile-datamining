// _runtime/metro/10202__.js
import AbstractParserWithWordBoundaryChecking from "../10168_AbstractParserWithWordBoundaryChecking.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import map from "00093__possibleConstructorReturn.js";
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
  "([0-9]{4})\\-([0-9]{1,2})\\-([0-9]{1,2})(?:T([0-9]{1,2}):([0-9]{1,2})(?::([0-9]{1,2})(?:\\.(\\d{1,4}))?)?(Z|([+-]\\d{2}):?(\\d{2})?)?)?(?=\\W|$)",
  "i",
);
class ISOFormatParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ISOFormatParser);
    const obj = _getPrototypeOf(ISOFormatParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return map(self, constructResult);
  }
}
_inherits(ISOFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
      const date = { year: parseInt(arg1[1]), month: parseInt(arg1[2]), day: parseInt(arg1[3]) };
      const parsingComponents = createParsingComponents.createParsingComponents(date);
      if (null != arg1[4]) {
        const _parseInt5 = parseInt;
        parsingComponents.assign("hour", parseInt(arg1[4]));
        const _parseInt6 = parseInt;
        parsingComponents.assign("minute", parseInt(arg1[5]));
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
          if (arg1[9]) {
            const _parseInt3 = parseInt;
            let num3 = 0;
            const parsed = parseInt(arg1[9]);
            if (null != arg1[10]) {
              const _parseInt4 = parseInt;
              num3 = parseInt(arg1[10]);
            }
            const result = 60 * parsed;
            num2 = result < 0 ? result - num3 : result + num3;
          }
          parsingComponents.assign("timezoneOffset", num2);
        }
      }
      return parsingComponents.addTag("parser/ISOFormatParser");
    },
  },
];

export default _createClass(ISOFormatParser, items);
