// _runtime/10603__isNativeReflectConstruct.js
import AbstractParserWithWordBoundaryChecking from "10457_AbstractParserWithWordBoundaryChecking.js";
import REGEX_PARTS from "10604_REGEX_PARTS.js";
import closure_2 from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

const UKTimeUnitWithinFormatParser = require;
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
  "(?:(?:\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E|\u043E\u0440\u0456\u0454\u043D\u0442\u043E\u0432\u043D\u043E)\\s*(?:~\\s*)?)?(" +
  REGEX_PARTS.TIME_UNITS_PATTERN +
  ")" +
  REGEX_PARTS.REGEX_PARTS.rightBoundary;
class UKTimeUnitWithinFormatParser {
  constructor() {
    self = this;
    tmp = closure_2(this, UKTimeUnitWithinFormatParser);
    tmp2 = closure_4;
    obj = closure_4(UKTimeUnitWithinFormatParser);
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
_inherits(UKTimeUnitWithinFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const items = [
  {
    key: "patternLeftBoundary",
    value: function patternLeftBoundary() {
      return UKTimeUnitWithinFormatParser(10604).REGEX_PARTS.leftBoundary;
    },
  },
  {
    key: "innerPattern",
    value: function innerPattern(option) {
      let _RegExp = RegExp;
      if (option.option.forwardDate) {
        _RegExp = new _RegExp(tmp, "i");
      } else {
        const _HermesInternal = HermesInternal;
        const combined =
          "(?:\u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C|\u043D\u0430 \u043F\u0440\u043E\u0442\u044F\u0437\u0456|\u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C|\u0443\u043F\u0440\u043E\u0434\u043E\u0432\u0436|\u0432\u043F\u0440\u043E\u0434\u043E\u0432\u0436)\\s*" +
          tmp;
        _RegExp = new _RegExp(combined, UKTimeUnitWithinFormatParser(10604).REGEX_PARTS.flags);
      }
      return _RegExp;
    },
  },
  {
    key: "innerExtract",
    value: function innerExtract(reference) {
      const ParsingComponents = UKTimeUnitWithinFormatParser(10453).ParsingComponents;
      return ParsingComponents.createRelativeFromReference(
        reference.reference,
        UKTimeUnitWithinFormatParser(10604).parseDuration(arg1[1]),
      );
    },
  },
];

export default _createClass(UKTimeUnitWithinFormatParser, items);
