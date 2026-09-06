// _runtime/metro/10541__.js
import AbstractParserWithWordBoundaryChecking from "../10439_AbstractParserWithWordBoundaryChecking.js";
import NUMBER from "../10540_NUMBER.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

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
  } catch (err) {}
}
const keys = Object.keys(NUMBER.NUMBER);
const regExp = new RegExp(
  "(\\d+|[" +
    keys.join("") +
    "]+|\u534A|\u51E0)(?:\\s*)(?:\u4E2A)?(\u79D2(?:\u949F)?|\u5206\u949F|\u5C0F\u65F6|\u949F|\u65E5|\u5929|\u661F\u671F|\u793C\u62DC|\u6708|\u5E74)(?:(?:\u4E4B|\u8FC7)?\u540E|(?:\u4E4B)?\u5185)",
  "i",
);
class ZHHansDeadlineFormatParser {
  constructor() {
    self = this;
    tmp = c2(this, ZHHansDeadlineFormatParser);
    tmp2 = closure_4;
    obj = closure_4(ZHHansDeadlineFormatParser);
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
_inherits(ZHHansDeadlineFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
    value: function innerExtract(createParsingResult, index) {
      const parsingResult = createParsingResult.createParsingResult(index.index, index[0]);
      let num = parseInt(index[1]);
      if (isNaN(num)) {
        num = ZHHansDeadlineFormatParser(10540).zhStringToNumber(index[1]);
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
          const addDurationResult = ZHHansDeadlineFormatParser(10434).addDuration(createParsingResult.refDate, obj);
          const start7 = parsingResult.start;
          start7.assign("year", addDurationResult.getFullYear());
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
        const addDurationResult1 = ZHHansDeadlineFormatParser(10434).addDuration(createParsingResult.refDate, obj);
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
    },
  },
];

export default _createClass(ZHHansDeadlineFormatParser, items);
