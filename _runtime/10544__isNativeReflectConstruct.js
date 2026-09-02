// === Module 10544: _isNativeReflectConstruct ===

// Module 10544 (_isNativeReflectConstruct)
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10453 */;
import NLSlashMonthFormatParser from "_classCallCheck" /* 41 */;
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
const regExp = new RegExp("([0-9]|0[1-9]|1[012])/([0-9]{4})", "i");
class NLSlashMonthFormatParser {
  constructor() {
    self = this;
    tmp = NLSlashMonthFormatParser(this, NLSlashMonthFormatParser);
    tmp2 = closure_2;
    obj = closure_2(NLSlashMonthFormatParser);
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
_inherits(NLSlashMonthFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
      const parsed = parseInt(arg1[2]);
      const parsed1 = parseInt(arg1[1]);
      const parsingComponents = createParsingComponents.createParsingComponents();
      const implyResult = parsingComponents.imply("day", 1);
      return parsingComponents.imply("day", 1).assign("month", parsed1).assign("year", parsed);
    }
  }
];

export default _createClass(NLSlashMonthFormatParser, items);