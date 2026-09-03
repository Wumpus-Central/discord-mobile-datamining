// === Module 10557: _isNativeReflectConstruct ===

// Module 10557 (_isNativeReflectConstruct)
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10457 */;
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const ZHHansDateParser = require;
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
class ZHHansDateParser {
  constructor() {
    self = this;
    tmp = closure_2(this, ZHHansDateParser);
    tmp2 = closure_4;
    obj = closure_4(ZHHansDateParser);
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
_inherits(ZHHansDateParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const items = [
  {
    key: "innerPattern",
    value: function innerPattern() {
      const keys = Object.keys(ZHHansDateParser(10558).NUMBER);
      const text = `(\\d{2,4}|[${obj.join("")}`;
      const keys1 = Object.keys(ZHHansDateParser(10558).NUMBER);
      const text1 = `${`(\\d{2,4}|[${obj.join("")}`}]{4}|[${obj2.join("")}`;
      const keys2 = Object.keys(ZHHansDateParser(10558).NUMBER);
      const text2 = `${tmp2}]{2})?(?:\\s*)(?:年)?(?:[\\s|,|，]*)(\\d{1,2}|[${obj3.join("")}`;
      const keys3 = Object.keys(ZHHansDateParser(10558).NUMBER);
      const regExp = new RegExp(text2 + "]{1,3})(?:\\s*)(?:\u6708)(?:\\s*)(\\d{1,2}|[" + keys3.join("") + "]{1,3})?(?:\\s*)(?:\u65E5|\u53F7)?");
      return regExp;
    }
  },
  {
    key: "innerExtract",
    value: function innerExtract(createParsingResult, index) {
      const parsingResult = createParsingResult.createParsingResult(index.index, index[0]);
      const parsed = parseInt(index[2]);
      let zhStringToNumberResult = parsed;
      if (isNaN(parsed)) {
        zhStringToNumberResult = ZHHansDateParser(10558).zhStringToNumber(index[2]);
      }
      const start = parsingResult.start;
      start.assign("month", zhStringToNumberResult);
      if (index[3]) {
        const _parseInt = parseInt;
        const parsed1 = parseInt(index[3]);
        const _isNaN = isNaN;
        let zhStringToNumberResult1 = parsed1;
        if (isNaN(parsed1)) {
          zhStringToNumberResult1 = ZHHansDateParser(10558).zhStringToNumber(index[3]);
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
          parsed2 = ZHHansDateParser(10558).zhStringToYear(index[1]);
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

export default _createClass(ZHHansDateParser, items);