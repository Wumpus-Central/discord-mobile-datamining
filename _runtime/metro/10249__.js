// _runtime/metro/10249__.js
import Meridiem from "../10179_Meridiem.js";
import AbstractParserWithWordBoundaryChecking from "../10181_AbstractParserWithWordBoundaryChecking.js";
import NUMBER from "../10244_NUMBER.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

let obj;
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
function createTimeComponents(createParsingComponents, match, match2, match3, match4) {
  const parsingComponents = createParsingComponents.createParsingComponents();
  let parsed = parseInt(NUMBER.toHankaku(match));
  if (isNaN(parsed)) {
    parsed = NUMBER.jaStringToNumber(match);
  }
  if (parsed > 24) {
    return null;
  } else {
    const tmp18 = match2;
    if (tmp18) {
      let num = 30;
      if ("\u534A" !== match2) {
        const _parseInt = parseInt;
        const parsed1 = parseInt(NUMBER.toHankaku(match2));
        const _isNaN = isNaN;
        num = parsed1;
        if (isNaN(parsed1)) {
          num = NUMBER.jaStringToNumber(match2);
        }
      }
      if (num >= 60) {
        return null;
      } else {
        parsingComponents.assign("minute", num);
      }
    }
    const tmp5 = match3;
    if (tmp5) {
      const _parseInt2 = parseInt;
      let parsed2 = parseInt(NUMBER.toHankaku(match3));
      const _isNaN2 = isNaN;
      if (isNaN(parsed2)) {
        parsed2 = NUMBER.jaStringToNumber(match3);
      }
      if (parsed2 >= 60) {
        return null;
      } else {
        parsingComponents.assign("second", parsed2);
      }
    }
    let num5 = -1;
    let num6 = parsed;
    if (match4) {
      if (parsed > 12) {
        return null;
      } else {
        if ("\u5348\u524D" !== match4) {
          const str2 = match4[0];
          if ("a" !== str2.toLowerCase()) {
            let tmp8 = "\u5348\u5F8C" !== match4;
            if (tmp8) {
              const str5 = match4[0];
              tmp8 = "p" !== str5.toLowerCase();
            }
            num5 = -1;
            num6 = parsed;
            if (!tmp8) {
              let sum = parsed;
              const PM = Meridiem.Meridiem.PM;
              if (12 != parsed) {
                sum = parsed + 12;
              }
              num6 = sum;
              num5 = PM;
            }
          }
        }
        const AM = Meridiem.Meridiem.AM;
        num5 = AM;
        num6 = parsed;
        if (12 === parsed) {
          num6 = 0;
          num5 = AM;
        }
      }
    }
    parsingComponents.assign("hour", num6);
    if (num5 >= 0) {
      parsingComponents.assign("meridiem", num5);
    } else if (num6 < 12) {
      parsingComponents.imply("meridiem", Meridiem.Meridiem.AM);
    } else {
      parsingComponents.imply("meridiem", Meridiem.Meridiem.PM);
    }
    return parsingComponents;
  }
}
const keys = Object.keys(NUMBER.NUMBER);
const text = `(?:(午前|午後|A.M.|P.M.|AM|PM))?(?:[\\s,，、]*)(?:([0-9０-９]+|[${obj.join("")}`;
const keys1 = Object.keys(NUMBER.NUMBER);
const text1 = `${`(?:(午前|午後|A.M.|P.M.|AM|PM))?(?:[\\s,，、]*)(?:([0-9０-９]+|[${obj.join("")}`}]+)(?:\\s*)(?:時(?!間)|:|：)(?:\\s*)([0-9０-９]+|半|[${obj2.join("")}`;
const keys2 = Object.keys(NUMBER.NUMBER);
const regExp = new RegExp(
  text1 +
    "]+)?(?:\\s*)(?:\u5206|:|\uFF1A)?(?:\\s*)([0-9\uFF10-\uFF19]+|[" +
    keys2.join("") +
    "]+)?(?:\\s*)(?:\u79D2)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?",
  "i",
);
const keys3 = Object.keys(NUMBER.NUMBER);
const text2 = `(?:^\\s*(?:から|\\-|\\–|\\－|\\~|\\〜)\\s*)(?:(午前|午後|A.M.|P.M.|AM|PM))?(?:[\\s,，、]*)(?:([0-9０-９]+|[${obj4.join("")}`;
const keys4 = Object.keys(NUMBER.NUMBER);
const text3 = `${`(?:^\\s*(?:から|\\-|\\–|\\－|\\~|\\〜)\\s*)(?:(午前|午後|A.M.|P.M.|AM|PM))?(?:[\\s,，、]*)(?:([0-9０-９]+|[${obj4.join("")}`}]+)(?:\\s*)(?:時|:|：)(?:\\s*)([0-9０-９]+|半|[${obj5.join("")}`;
const keys5 = Object.keys(NUMBER.NUMBER);
const regExp1 = new RegExp(
  text3 +
    "]+)?(?:\\s*)(?:\u5206|:|\uFF1A)?(?:\\s*)([0-9\uFF10-\uFF19]+|[" +
    keys5.join("") +
    "]+)?(?:\\s*)(?:\u79D2)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?",
  "i",
);
class JPTimeExpressionParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, JPTimeExpressionParser);
    const obj = _getPrototypeOf(JPTimeExpressionParser);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(JPTimeExpressionParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
      let end2;
      let end4;
      let end5;
      let end8;
      let end9;
      let start2;
      let tmp7;
      if (index.index > 0) {
        const str = createParsingResult.text[index.index - 1];
        if (str.match(/\w/)) {
          return null;
        }
      }
      const parsingResult = createParsingResult.createParsingResult(index.index, index[0]);
      let tmp6 = index[1];
      const tmp3 = index[2];
      const tmp4 = index[3];
      const tmp5 = index[4];
      if (null === tmp6) {
        tmp6 = index[5];
      }
      parsingResult.start = createTimeComponents(createParsingResult, tmp3, tmp4, tmp5, tmp6);
      if (parsingResult.start) {
        const str2 = createParsingResult.text;
        const match = regExp1.exec(str2.substring(parsingResult.index + parsingResult.text.length));
        let tmp10 = parsingResult;
        if (match) {
          parsingResult.text = parsingResult.text + match[0];
          const tmp14 = match[1] ?? match[5];
          parsingResult.end = createTimeComponents(createParsingResult, match[2], match[3], match[4], tmp14);
          let tmp20 = null;
          if (parsingResult.end) {
            const end = parsingResult.end;
            let isCertainResult1 = !end.isCertain("meridiem");
            end.isCertain("meridiem");
            if (isCertainResult1) {
              const start = parsingResult.start;
              isCertainResult1 = start.isCertain("meridiem");
            }
            if (isCertainResult1) {
              ({ end: end2, start: start2 } = parsingResult);
              end2.imply("meridiem", start2.get("meridiem"));
              const start3 = parsingResult.start;
              const value = start3.get("meridiem");
              if (value === Meridiem.Meridiem.PM) {
                const start5 = parsingResult.start;
                const end10 = parsingResult.end;
                const diff = start5.get("hour") - 12;
                if (diff > end10.get("hour")) {
                  const end6 = parsingResult.end;
                  end6.imply("meridiem", Meridiem.Meridiem.AM);
                } else {
                  const end3 = parsingResult.end;
                  if (end3.get("hour") < 12) {
                    ({ end: end4, end: end5 } = parsingResult);
                    end4.assign("hour", end5.get("hour") + 12);
                  }
                }
              }
            }
            const end7 = parsingResult.end;
            const start4 = parsingResult.start;
            const dateResult = end7.date();
            const time = dateResult.getTime();
            tmp20 = parsingResult;
            const dateResult1 = start4.date();
            if (time < dateResult1.getTime()) {
              ({ end: end8, end: end9 } = parsingResult);
              end8.imply("day", end9.get("day") + 1);
              tmp20 = parsingResult;
            }
          }
          tmp10 = tmp20;
        }
        tmp7 = tmp10;
      } else {
        index.index = index.index + index[0].length;
        tmp7 = null;
      }
      return tmp7;
    },
  },
];

export default _createClass(JPTimeExpressionParser, items);
