// === Module 10268: ? ===

// Module 10268
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10168 */;
import _mod10269 from "module_10269" /* 10269 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
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
class ZHHansDateParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZHHansDateParser);
    const obj = _getPrototypeOf(ZHHansDateParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(ZHHansDateParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    const keys = Object.keys(_mod10269.NUMBER);
    const text = `(\\d{2,4}|[${obj.join("")}`;
    const keys1 = Object.keys(_mod10269.NUMBER);
    const text1 = `${`(\\d{2,4}|[${obj.join("")}`}]{4}|[${obj2.join("")}`;
    const keys2 = Object.keys(_mod10269.NUMBER);
    const text2 = `${tmp2}]{2})?(?:\\s*)(?:年)?(?:[\\s|,|，]*)(\\d{1,2}|[${obj3.join("")}`;
    const keys3 = Object.keys(_mod10269.NUMBER);
    const regExp = new RegExp(text2 + "]{1,3})(?:\\s*)(?:\u6708)(?:\\s*)(\\d{1,2}|[" + keys3.join("") + "]{1,3})?(?:\\s*)(?:\u65E5|\u53F7)?");
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
        zhStringToNumberResult = _mod10269.zhStringToNumber(index[2]);
      }
      const start = parsingResult.start;
      start.assign("month", zhStringToNumberResult);
      if (index[3]) {
        const _parseInt = parseInt;
        const parsed1 = parseInt(index[3]);
        const _isNaN = isNaN;
        let zhStringToNumberResult1 = parsed1;
        if (isNaN(parsed1)) {
          zhStringToNumberResult1 = _mod10269.zhStringToNumber(index[3]);
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
          parsed2 = _mod10269.zhStringToYear(index[1]);
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