// === Module 10348: ? ===

// Module 10348
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10181 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import map from "_possibleConstructorReturn" /* 93 */;
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
const regExp = new RegExp("([0-9]|0[1-9]|1[012])/([0-9]{4})", "i");
class ENSlashMonthFormatParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ENSlashMonthFormatParser);
    const obj = _getPrototypeOf(ENSlashMonthFormatParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return map(self, constructResult);
  }
}
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
      const obj = implyResult.assign("month", parsed1);
      return obj.assign("year", parsed);
    }
  }
];

export default _createClass(ENSlashMonthFormatParser, items);