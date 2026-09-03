// _runtime/10578__isNativeReflectConstruct.js
import AbstractParserWithWordBoundaryChecking from "10457_AbstractParserWithWordBoundaryChecking.js";
import REGEX_PARTS from "10579_REGEX_PARTS.js";
import closure_2 from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

const RUTimeUnitWithinFormatParser = require;
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
let closure_6 =
  "(?:(?:\u043E\u043A\u043E\u043B\u043E|\u043F\u0440\u0438\u043C\u0435\u0440\u043D\u043E)\\s*(?:~\\s*)?)?(" +
  REGEX_PARTS.TIME_UNITS_PATTERN +
  ")" +
  REGEX_PARTS.REGEX_PARTS.rightBoundary;
class RUTimeUnitWithinFormatParser {
  constructor() {
    self = this;
    tmp = closure_2(this, RUTimeUnitWithinFormatParser);
    tmp2 = closure_4;
    obj = closure_4(RUTimeUnitWithinFormatParser);
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
_inherits(RUTimeUnitWithinFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const items = [
  {
    key: "patternLeftBoundary",
    value: function patternLeftBoundary() {
      return RUTimeUnitWithinFormatParser(10579).REGEX_PARTS.leftBoundary;
    },
  },
  {
    key: "innerPattern",
    value: function innerPattern(option) {
      let _RegExp = RegExp;
      if (option.option.forwardDate) {
        _RegExp = new _RegExp(tmp, RUTimeUnitWithinFormatParser(10579).REGEX_PARTS.flags);
      } else {
        const _HermesInternal = HermesInternal;
        const combined =
          "(?:\u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435|\u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438)\\s*" +
          tmp;
        _RegExp = new _RegExp(combined, RUTimeUnitWithinFormatParser(10579).REGEX_PARTS.flags);
      }
      return _RegExp;
    },
  },
  {
    key: "innerExtract",
    value: function innerExtract(reference) {
      const ParsingComponents = RUTimeUnitWithinFormatParser(10453).ParsingComponents;
      return ParsingComponents.createRelativeFromReference(
        reference.reference,
        RUTimeUnitWithinFormatParser(10579).parseDuration(arg1[1]),
      );
    },
  },
];

export default _createClass(RUTimeUnitWithinFormatParser, items);
