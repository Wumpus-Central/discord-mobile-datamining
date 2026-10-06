// _runtime/metro/10283__.js
import EmptyDuration from "../10176_EmptyDuration.js";
import AbstractParserWithWordBoundaryChecking from "../10181_AbstractParserWithWordBoundaryChecking.js";
import _mod10282 from "10282__.js";
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
const keys = Object.keys(_mod10282.NUMBER);
const regExp = new RegExp(
  "(\\d+|[" +
    keys.join("") +
    "]+|\u534A|\u51E0)(?:\\s*)(?:\u4E2A)?(\u79D2(?:\u949F)?|\u5206\u949F|\u5C0F\u65F6|\u949F|\u65E5|\u5929|\u661F\u671F|\u793C\u62DC|\u6708|\u5E74)(?:(?:\u4E4B|\u8FC7)?\u540E|(?:\u4E4B)?\u5185)",
  "i",
);
class ZHHansDeadlineFormatParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZHHansDeadlineFormatParser);
    const obj = _getPrototypeOf(ZHHansDeadlineFormatParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
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
        num = _mod10282.zhStringToNumber(index[1]);
      }
      if (isNaN(num)) {
        num = 3;
        if ("\u51E0" !== index[1]) {
          num = 0.5;
          if ("\u534A" !== index[1]) {
            return null;
          }
        }
      }
      const obj = {};
      if (index[2][0].match(/[日天星礼月年]/)) {
        if ("\u65E5" != index[2][0]) {
          if ("\u5929" != index[2][0]) {
            if ("\u661F" != index[2][0]) {
              if ("\u793C" != index[2][0]) {
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
          const tmp6 = "\u5C0F" != str3 && "\u949F" != str3;
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
    },
  },
];

export default _createClass(ZHHansDeadlineFormatParser, items);
