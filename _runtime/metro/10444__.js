// _runtime/metro/10444__.js
import _possibleConstructorReturn from "00093__possibleConstructorReturn.js";
import AbstractParserWithWordBoundaryChecking from "../10439_AbstractParserWithWordBoundaryChecking.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

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
_possibleConstructorReturn;
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
      return parsingComponents.imply("day", 1).assign("month", parsed1).assign("year", parsed);
    },
  },
];

export default _createClass(ENSlashMonthFormatParser, items);
