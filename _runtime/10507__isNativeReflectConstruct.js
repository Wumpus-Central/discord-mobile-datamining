// _runtime/10507__isNativeReflectConstruct.js
import AbstractParserWithWordBoundaryChecking from "10439_AbstractParserWithWordBoundaryChecking.js";
import alphaNum from "10502_alphaNum.js";
import closure_2 from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

const JPTimeExpressionParser = require;
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
function createTimeComponents(createParsingComponents) {
  const parsingComponents = createParsingComponents.createParsingComponents();
  let parsed = parseInt(JPTimeExpressionParser(10502).toHankaku(arg1));
  if (isNaN(parsed)) {
    parsed = tmp(10502).jaStringToNumber(arg1);
  }
  if (parsed > 24) {
    return null;
  } else {
    if (arg2) {
      let num = 30;
      if ("\u534A" !== arg2) {
        const _parseInt = parseInt;
        const parsed1 = parseInt(tmp(10502).toHankaku(arg2));
        const _isNaN = isNaN;
        num = parsed1;
        if (isNaN(parsed1)) {
          num = tmp(10502).jaStringToNumber(arg2);
        }
      }
      if (num >= 60) {
        return null;
      } else {
        parsingComponents.assign("minute", num);
      }
    }
    if (arg3) {
      const _parseInt2 = parseInt;
      let parsed2 = parseInt(tmp(10502).toHankaku(arg3));
      const _isNaN2 = isNaN;
      if (isNaN(parsed2)) {
        parsed2 = tmp(10502).jaStringToNumber(arg3);
      }
      if (parsed2 >= 60) {
        return null;
      } else {
        parsingComponents.assign("second", parsed2);
      }
    }
    let num5 = -1;
    let num6 = parsed;
    if (arg4) {
      if (parsed > 12) {
        return null;
      } else {
        if ("\u5348\u524D" !== arg4) {
          if ("a" !== 41.toLowerCase()) {
            let tmp8 = "\u5348\u5F8C" !== arg4;
            if (tmp8) {
              tmp8 = "p" !== str5.toLowerCase();
            }
            num5 = -1;
            num6 = parsed;
            if (!tmp8) {
              let sum = parsed;
              if (12 != parsed) {
                sum = parsed + 12;
              }
              num6 = sum;
              num5 = tmp(10437).Meridiem.PM;
            }
          }
        }
        const AM = tmp(10437).Meridiem.AM;
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
      parsingComponents.imply("meridiem", tmp(10437).Meridiem.AM);
    } else {
      parsingComponents.imply("meridiem", tmp(10437).Meridiem.PM);
    }
    return parsingComponents;
  }
}
const keys = Object.keys(alphaNum.NUMBER);
const text = `(?:(午前|午後|A.M.|P.M.|AM|PM))?(?:[\\s,，、]*)(?:([0-9０-９]+|[${obj.join("")}`;
const keys1 = Object.keys(alphaNum.NUMBER);
const text1 = `${`(?:(午前|午後|A.M.|P.M.|AM|PM))?(?:[\\s,，、]*)(?:([0-9０-９]+|[${obj.join("")}`}]+)(?:\\s*)(?:時(?!間)|:|：)(?:\\s*)([0-9０-９]+|半|[${obj2.join("")}`;
const keys2 = Object.keys(alphaNum.NUMBER);
const regExp = new RegExp(text1 + "]+)?(?:\\s*)(?:\u5206|:|\uFF1A)?(?:\\s*)([0-9\uFF10-\uFF19]+|[" + keys2.join("") + "]+)?(?:\\s*)(?:\u79D2)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?", "i");
const keys3 = Object.keys(alphaNum.NUMBER);
const text2 = `(?:^\\s*(?:から|\\-|\\–|\\－|\\~|\\〜)\\s*)(?:(午前|午後|A.M.|P.M.|AM|PM))?(?:[\\s,，、]*)(?:([0-9０-９]+|[${obj4.join("")}`;
const keys4 = Object.keys(alphaNum.NUMBER);
const text3 = `${`(?:^\\s*(?:から|\\-|\\–|\\－|\\~|\\〜)\\s*)(?:(午前|午後|A.M.|P.M.|AM|PM))?(?:[\\s,，、]*)(?:([0-9０-９]+|[${obj4.join("")}`}]+)(?:\\s*)(?:時|:|：)(?:\\s*)([0-9０-９]+|半|[${obj5.join("")}`;
const keys5 = Object.keys(alphaNum.NUMBER);
const regExp1 = new RegExp(text3 + "]+)?(?:\\s*)(?:\u5206|:|\uFF1A)?(?:\\s*)([0-9\uFF10-\uFF19]+|[" + keys5.join("") + "]+)?(?:\\s*)(?:\u79D2)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?", "i");
class JPTimeExpressionParser {
  constructor() {
    self = this;
    tmp = closure_2(this, JPTimeExpressionParser);
    tmp2 = closure_4;
    obj = closure_4(JPTimeExpressionParser);
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
_inherits(JPTimeExpressionParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
obj = {
  key: "innerPattern",
  value: function innerPattern() {
    return regExp;
  }
};
const items = [
  obj,
  {
    key: "innerExtract",
    value: function innerExtract(createParsingResult, index) {
      if (index.index > 0) {
        if (str.match(/\w/)) {
          return null;
        }
        str = createParsingResult.text[index.index - 1];
      }
      const parsingResult = createParsingResult.createParsingResult(index.index, index[0]);
      let tmp3 = index[1];
      if (null === tmp3) {
        tmp3 = index[5];
      }
      parsingResult.start = createTimeComponents(createParsingResult, index[2], index[3], index[4], tmp3);
      if (parsingResult.start) {
        const match = regExp1.exec(createParsingResult.text.substring(parsingResult.index + parsingResult.text.length));
        let tmp7 = parsingResult;
        if (match) {
          parsingResult.text = parsingResult.text + match[0];
          let tmp11 = match[1];
          if (null === tmp11) {
            tmp11 = match[5];
          }
          parsingResult.end = tmp2(createParsingResult, match[2], match[3], match[4], tmp11);
          let tmp17 = null;
          if (parsingResult.end) {
            const end = parsingResult.end;
            const isCertainResult = end.isCertain("meridiem");
            let isCertainResult1 = !isCertainResult;
            if (!isCertainResult) {
              const start = parsingResult.start;
              isCertainResult1 = start.isCertain("meridiem");
            }
            if (isCertainResult1) {
              ({ end: end2, start: start2 } = parsingResult);
              end2.imply("meridiem", start2.get("meridiem"));
              const start3 = parsingResult.start;
              const value = start3.get("meridiem");
              if (value === JPTimeExpressionParser(10437).Meridiem.PM) {
                const start5 = parsingResult.start;
                const end10 = parsingResult.end;
                const diff = start5.get("hour") - 12;
                if (diff > end10.get("hour")) {
                  const end6 = parsingResult.end;
                  end6.imply("meridiem", tmp22(10437).Meridiem.AM);
                } else {
                  const end3 = parsingResult.end;
                  if (end3.get("hour") < 12) {
                    ({ end: end4, end: end5 } = parsingResult);
                    end4.assign("hour", end5.get("hour") + 12);
                  }
                }
              }
              tmp22 = JPTimeExpressionParser;
            }
            const end7 = parsingResult.end;
            const start4 = parsingResult.start;
            const time = end7.date().getTime();
            const dateResult = end7.date();
            tmp17 = parsingResult;
            if (time < dateResult1.getTime()) {
              ({ end: end8, end: end9 } = parsingResult);
              end8.imply("day", end9.get("day") + 1);
              tmp17 = parsingResult;
            }
            dateResult1 = start4.date();
          }
          tmp7 = tmp17;
        }
        let tmp4 = tmp7;
        const str2 = createParsingResult.text;
      } else {
        index.index = index.index + index[0].length;
        tmp4 = null;
      }
      return tmp4;
    }
  }
];

export default _createClass(JPTimeExpressionParser, items);