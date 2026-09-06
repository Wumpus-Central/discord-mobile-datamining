// === Module 10546: ? ===

// Module 10546
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10439 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const ZHHantDateParser = require;
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
class ZHHantDateParser {
  constructor() {
    self = this;
    tmp = c2(this, ZHHantDateParser);
    tmp2 = closure_4;
    obj = closure_4(ZHHantDateParser);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
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
_inherits(ZHHantDateParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    const keys = Object.keys(ZHHantDateParser(10547).NUMBER);
    const text = `(\\d{2,4}|[${obj.join("")}`;
    const keys1 = Object.keys(ZHHantDateParser(10547).NUMBER);
    const text1 = `${`(\\d{2,4}|[${obj.join("")}`}]{4}|[${obj2.join("")}`;
    const keys2 = Object.keys(ZHHantDateParser(10547).NUMBER);
    const text2 = `${tmp2}]{2})?(?:\\s*)(?:年)?(?:[\\s|,|，]*)(\\d{1,2}|[${obj3.join("")}`;
    const keys3 = Object.keys(ZHHantDateParser(10547).NUMBER);
    const regExp = new RegExp(text2 + "]{1,2})(?:\\s*)(?:\u6708)(?:\\s*)(\\d{1,2}|[" + keys3.join("") + "]{1,2})?(?:\\s*)(?:\u65E5|\u865F)?");
    return regExp;
  }
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
        zhStringToNumberResult = ZHHantDateParser(10547).zhStringToNumber(index[2]);
      }
      const start = parsingResult.start;
      start.assign("month", zhStringToNumberResult);
      if (index[3]) {
        const _parseInt = parseInt;
        const parsed1 = parseInt(index[3]);
        const _isNaN = isNaN;
        let zhStringToNumberResult1 = parsed1;
        if (isNaN(parsed1)) {
          zhStringToNumberResult1 = ZHHantDateParser(10547).zhStringToNumber(index[3]);
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
          parsed2 = ZHHantDateParser(10547).zhStringToYear(index[1]);
        }
        const start5 = parsingResult.start;
        start5.assign("year", parsed2);
      } else {
        const start4 = parsingResult.start;
        const refDate2 = createParsingResult.refDate;
        start4.imply("year", refDate2.getFullYear());
      }
      return parsingResult;
    }
  }
];

export default _createClass(ZHHantDateParser, items);