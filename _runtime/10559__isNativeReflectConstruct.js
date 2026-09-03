// === Module 10559: _isNativeReflectConstruct ===

// Module 10559 (_isNativeReflectConstruct)
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10457 */;
import zhStringToNumber from "zhStringToNumber" /* 10558 */;
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const ZHHansDeadlineFormatParser = require;
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
const keys = Object.keys(zhStringToNumber.NUMBER);
const regExp = new RegExp("(\\d+|[" + keys.join("") + "]+|\u534A|\u51E0)(?:\\s*)(?:\u4E2A)?(\u79D2(?:\u949F)?|\u5206\u949F|\u5C0F\u65F6|\u949F|\u65E5|\u5929|\u661F\u671F|\u793C\u62DC|\u6708|\u5E74)(?:(?:\u4E4B|\u8FC7)?\u540E|(?:\u4E4B)?\u5185)", "i");
class ZHHansDeadlineFormatParser {
  constructor() {
    self = this;
    tmp = closure_2(this, ZHHansDeadlineFormatParser);
    tmp2 = closure_4;
    obj = closure_4(ZHHansDeadlineFormatParser);
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
_inherits(ZHHansDeadlineFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const items = [
  {
    key: "innerPattern",
    value: function innerPattern() {
      return regExp;
    }
  },
  {
    key: "innerExtract",
    value: function innerExtract(createParsingResult, index) {
      const parsingResult = createParsingResult.createParsingResult(index.index, index[0]);
      let num = parseInt(index[1]);
      if (isNaN(num)) {
        num = ZHHansDeadlineFormatParser(10558).zhStringToNumber(index[1]);
      }
      if (isNaN(num)) {
        num = 3;
        if ("\u51E0" !== index[1]) {
          num = 0.5;
          if ("\u534A" !== tmp4) {
            return null;
          }
        }
      }
      let obj = {};
      if (index[2][0].match(/[日天星礼月年]/)) {
        if ("\u65E5" != str3) {
          if ("\u5929" != str3) {
            if ("\u661F" != str3) {
              if ("\u793C" != str3) {
                if ("\u6708" == str3) {
                  obj.month = num;
                } else if ("\u5E74" == str3) {
                  obj.year = num;
                }
              }
            }
            obj.week = num;
          }
          const addDurationResult = ZHHansDeadlineFormatParser(10452).addDuration(createParsingResult.refDate, obj);
          const start7 = parsingResult.start;
          obj = start7.assign("year", addDurationResult.getFullYear());
          const start8 = parsingResult.start;
          obj = start8.assign("month", addDurationResult.getMonth() + 1);
          const start9 = parsingResult.start;
          start9.assign("day", addDurationResult.getDate());
          return parsingResult;
        }
        obj.day = num;
      } else {
        if ("\u79D2" == str3) {
          obj.second = num;
        } else if ("\u5206" == str3) {
          obj.minute = num;
        } else {
          let tmp6 = "\u5C0F" != str3;
          if (tmp6) {
            tmp6 = "\u949F" != str3;
          }
          if (!tmp6) {
            obj.hour = num;
          }
        }
        const addDurationResult1 = ZHHansDeadlineFormatParser(10452).addDuration(createParsingResult.refDate, obj);
        const start = parsingResult.start;
        start.imply("year", addDurationResult1.getFullYear());
        const start2 = parsingResult.start;
        start2.imply("month", addDurationResult1.getMonth() + 1);
        const start3 = parsingResult.start;
        start3.imply("day", addDurationResult1.getDate());
        const start4 = parsingResult.start;
        start4.assign("hour", addDurationResult1.getHours());
        const start5 = parsingResult.start;
        start5.assign("minute", addDurationResult1.getMinutes());
        const start6 = parsingResult.start;
        start6.assign("second", addDurationResult1.getSeconds());
        return parsingResult;
      }
    }
  }
];

export default _createClass(ZHHansDeadlineFormatParser, items);