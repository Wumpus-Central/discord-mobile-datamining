// _runtime/metro/10186__.js
import AbstractParserWithWordBoundaryChecking from "../10181_AbstractParserWithWordBoundaryChecking.js";
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
  },
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
    },
  },
];

export default _createClass(ENSlashMonthFormatParser, items);
