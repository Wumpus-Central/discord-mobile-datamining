// _runtime/10605__isNativeReflectConstruct.js
import _isNativeReflectConstruct2 from "10606__isNativeReflectConstruct.js";
import closure_2 from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

const UKMonthNameLittleEndianParser = require;
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
class UKMonthNameLittleEndianParser {
  constructor() {
    self = this;
    tmp = closure_2(this, UKMonthNameLittleEndianParser);
    tmp2 = closure_4;
    obj = closure_4(UKMonthNameLittleEndianParser);
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
_inherits(UKMonthNameLittleEndianParser, _isNativeReflectConstruct2.AbstractParserWithLeftRightBoundaryChecking);
const items = [
  {
    key: "innerPatternString",
    value: function innerPatternString(arg0) {
      return (
        "(?:\u0437|\u0456\u0437)?\\s*(" +
        UKMonthNameLittleEndianParser(10604).ORDINAL_NUMBER_PATTERN +
        ")(?:\\s{0,3}(?:\u043F\u043E|-|\u2013|\u0434\u043E)?\\s{0,3}(" +
        UKMonthNameLittleEndianParser(10604).ORDINAL_NUMBER_PATTERN +
        "))?(?:-|\\/|\\s{0,3}(?:of)?\\s{0,3})(" +
        UKMonthNameLittleEndianParser(10450).matchAnyPattern(UKMonthNameLittleEndianParser(10604).MONTH_DICTIONARY) +
        ")(?:(?:-|\\/|,?\\s{0,3})(" +
        UKMonthNameLittleEndianParser(10604).YEAR_PATTERN +
        "(?![^\\s]\\d)))?"
      );
    },
  },
  {
    key: "innerExtract",
    value: function innerExtract(createParsingResult, index) {
      const parsingResult = createParsingResult.createParsingResult(index.index, index[0]);
      const tmp4 = UKMonthNameLittleEndianParser(10604).MONTH_DICTIONARY[index[3].toLowerCase(index[3])];
      const result = UKMonthNameLittleEndianParser(10604).parseOrdinalNumberPattern(index[1]);
      if (result > 31) {
        index.index = index.index + index[1].length;
        return null;
      } else {
        const start4 = parsingResult.start;
        start4.assign("month", tmp4);
        const start5 = parsingResult.start;
        start5.assign("day", result);
        if (index[4]) {
          const start2 = parsingResult.start;
          start2.assign("year", tmp2(10604).parseYearPattern(index[4]));
        } else {
          const start = parsingResult.start;
          start.imply("year", tmp2(10451).findYearClosestToRef(createParsingResult.reference.instant, result, tmp4));
        }
        if (index[2]) {
          const start3 = parsingResult.start;
          const result1 = tmp2(10604).parseOrdinalNumberPattern(index[2]);
          parsingResult.end = start3.clone();
          const end = parsingResult.end;
          end.assign("day", result1);
        }
        return parsingResult;
      }
    },
  },
];

export default _createClass(UKMonthNameLittleEndianParser, items);
