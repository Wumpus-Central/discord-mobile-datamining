// === Module 10277: ? ===

// Module 10277
import EmptyDuration from "EmptyDuration" /* 10163 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10168 */;
import _mod10276 from "module_10276" /* 10276 */;
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
const keys = Object.keys(_mod10276.NUMBER);
const regExp = new RegExp("(\\d+|[" + keys.join("") + "]+|\u534A|\u5E7E)(?:\\s*)(?:\u500B)?(\u79D2(?:\u9418)?|\u5206\u9418|\u5C0F\u6642|\u9418|\u65E5|\u5929|\u661F\u671F|\u79AE\u62DC|\u6708|\u5E74)(?:(?:\u4E4B|\u904E)?\u5F8C|(?:\u4E4B)?\u5167)", "i");
class ZHHantDeadlineFormatParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZHHantDeadlineFormatParser);
    const obj = _getPrototypeOf(ZHHantDeadlineFormatParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(ZHHantDeadlineFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
    value: function innerExtract(createParsingResult, index) {
      const parsingResult = createParsingResult.createParsingResult(index.index, index[0]);
      let num = parseInt(index[1]);
      if (isNaN(num)) {
        num = _mod10276.zhStringToNumber(index[1]);
      }
      if (isNaN(num)) {
        num = 3;
        if ("\u5E7E" !== index[1]) {
          num = 0.5;
          if ("\u534A" !== index[1]) {
            return null;
          }
        }
      }
      const obj = {};
      if (index[2][0].match(/[日天星禮月年]/)) {
        if ("\u65E5" != index[2][0]) {
          if ("\u5929" != index[2][0]) {
            if ("\u661F" != index[2][0]) {
              if ("\u79AE" != index[2][0]) {
                if ("\u6708" == index[2][0]) {
                  obj.month = num;
                } else if ("\u5E74" == index[2][0]) {
                  obj.year = num;
                }
              }
            }
            obj.week = num;
          }
          const addDurationResult = EmptyDuration.addDuration(createParsingResult.refDate, obj);
          const start7 = parsingResult.start;
          start7.assign("year", addDurationResult.getFullYear());
          const start8 = parsingResult.start;
          start8.assign("month", addDurationResult.getMonth() + 1);
          const start9 = parsingResult.start;
          start9.assign("day", addDurationResult.getDate());
          return parsingResult;
        }
        obj.day = num;
      } else {
        if ("\u79D2" == index[2][0]) {
          obj.second = num;
        } else if ("\u5206" == index[2][0]) {
          obj.minute = num;
        } else {
          const tmp6 = "\u5C0F" != str3 && "\u9418" != str3;
          if (!tmp6) {
            obj.hour = num;
          }
        }
        const addDurationResult1 = EmptyDuration.addDuration(createParsingResult.refDate, obj);
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

export default _createClass(ZHHantDeadlineFormatParser, items);