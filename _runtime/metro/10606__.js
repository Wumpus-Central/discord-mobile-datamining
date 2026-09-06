// === Module 10606: ? ===

// Module 10606
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10439 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
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
class ENSlashMonthFormatParser {
  constructor() {
    self = this;
    tmp = closure_0(this, ENSlashMonthFormatParser);
    tmp2 = c2;
    obj = c2(ENSlashMonthFormatParser);
    tmp3 = closure_1;
    if (closure_3()) {
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
_classCallCheck = ENSlashMonthFormatParser;
_inherits(ENSlashMonthFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    return regExp;
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(createParsingComponents, arg1) {
      const parsed = parseInt(arg1[2]);
      const parsed1 = parseInt(arg1[1]);
      const parsingComponents = createParsingComponents.createParsingComponents();
      const implyResult = parsingComponents.imply("day", 1);
      return parsingComponents.imply("day", 1).assign("month", parsed1).assign("year", parsed);
    }
  }
];

export default _createClass(ENSlashMonthFormatParser, items);