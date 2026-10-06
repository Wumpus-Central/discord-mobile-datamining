// _runtime/metro/10288__.js
import AbstractParserWithWordBoundaryChecking from "../10181_AbstractParserWithWordBoundaryChecking.js";
import _mod10289 from "10289__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
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
class ZHHantDateParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZHHantDateParser);
    const obj = _getPrototypeOf(ZHHantDateParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(ZHHantDateParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    const keys = Object.keys(_mod10289.NUMBER);
    const text = `(\\d{2,4}|[${obj.join("")}`;
    const keys1 = Object.keys(_mod10289.NUMBER);
    const text1 = `${`(\\d{2,4}|[${obj.join("")}`}]{4}|[${obj2.join("")}`;
    const keys2 = Object.keys(_mod10289.NUMBER);
    const text2 = `${tmp2}]{2})?(?:\\s*)(?:年)?(?:[\\s|,|，]*)(\\d{1,2}|[${obj3.join("")}`;
    const keys3 = Object.keys(_mod10289.NUMBER);
    const regExp = new RegExp(
      text2 + "]{1,2})(?:\\s*)(?:\u6708)(?:\\s*)(\\d{1,2}|[" + keys3.join("") + "]{1,2})?(?:\\s*)(?:\u65E5|\u865F)?",
    );
    return regExp;
  },
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(createParsingResult, index) {
      const parsingResult = createParsingResult.createParsingResult(index.index, index[0]);
      const parsed = parseInt(index[2]);
      let zhStringToNumberResult = parsed;
      if (isNaN(parsed)) {
        zhStringToNumberResult = _mod10289.zhStringToNumber(index[2]);
      }
      const start = parsingResult.start;
      start.assign("month", zhStringToNumberResult);
      if (index[3]) {
        const _parseInt = parseInt;
        const parsed1 = parseInt(index[3]);
        const _isNaN = isNaN;
        let zhStringToNumberResult1 = parsed1;
        if (isNaN(parsed1)) {
          zhStringToNumberResult1 = _mod10289.zhStringToNumber(index[3]);
        }
        const start3 = parsingResult.start;
        start3.assign("day", zhStringToNumberResult1);
      } else {
        const start2 = parsingResult.start;
        const refDate = createParsingResult.refDate;
        start2.imply("day", refDate.getDate());
      }
      if (index[1]) {
        const _parseInt2 = parseInt;
        let parsed2 = parseInt(index[1]);
        const _isNaN2 = isNaN;
        if (isNaN(parsed2)) {
          parsed2 = _mod10289.zhStringToYear(index[1]);
        }
        const start5 = parsingResult.start;
        start5.assign("year", parsed2);
      } else {
        const start4 = parsingResult.start;
        const refDate2 = createParsingResult.refDate;
        start4.imply("year", refDate2.getFullYear());
      }
      return parsingResult;
    },
  },
];

export default _createClass(ZHHantDateParser, items);
