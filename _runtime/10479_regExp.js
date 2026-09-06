// _runtime/10479_regExp.js
import closure_2 from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

const DESpecificTimeExpressionParser = require;
const regExp = new RegExp(
  "(^|\\s|T)(?:(?:um|von)\\s*)?(\\d{1,2})(?:h|:)?(?:(\\d{1,2})(?:m|:)?)?(?:(\\d{1,2})(?:s)?)?(?:\\s*Uhr)?(?:\\s*(morgens|vormittags|nachmittags|abends|nachts|am\\s+(?:Morgen|Vormittag|Nachmittag|Abend)|in\\s+der\\s+Nacht))?(?=\\W|$)",
  "i",
);
const regExp1 = new RegExp(
  "^\\s*(\\-|\\\u2013|\\~|\\\u301C|bis(?:\\s+um)?|\\?)\\s*(\\d{1,2})(?:h|:)?(?:(\\d{1,2})(?:m|:)?)?(?:(\\d{1,2})(?:s)?)?(?:\\s*Uhr)?(?:\\s*(morgens|vormittags|nachmittags|abends|nachts|am\\s+(?:Morgen|Vormittag|Nachmittag|Abend)|in\\s+der\\s+Nacht))?(?=\\W|$)",
  "i",
);
class DESpecificTimeExpressionParser {
  constructor() {
    tmp = closure_2(this, DESpecificTimeExpressionParser);
    return;
  }
}
let obj = {
  key: "pattern",
  value: function pattern(arg0) {
    return regExp;
  },
};
const items = [
  obj,
  {
    key: "extract",
    value: function extract(createParsingResult, index) {
      const sum = index.index + index[1].length;
      const parsingResult = createParsingResult.createParsingResult(sum, index[0].substring(index[1].length));
      if (str2.match(/^\d{4}$/)) {
        index.index = index.index + index[0].length;
        return null;
      } else {
        const start = parsingResult.start;
        parsingResult.start = DESpecificTimeExpressionParser.extractTimeComponent(start.clone(), index);
        if (parsingResult.start) {
          const match = regExp1.exec(createParsingResult.text.substring(index.index + index[0].length));
          if (match) {
            const start2 = parsingResult.start;
            parsingResult.end = obj.extractTimeComponent(start2.clone(), match);
            if (parsingResult.end) {
              parsingResult.text = parsingResult.text + match[0];
            }
          }
          return parsingResult;
        } else {
          index.index = index.index + index[0].length;
          return null;
        }
        obj = DESpecificTimeExpressionParser;
      }
      const str = index[0];
      str2 = parsingResult.text;
    },
  },
];
obj = {
  key: "extractTimeComponent",
  value: function extractTimeComponent(assign) {
    const parsed = parseInt(arg1[2]);
    let num = 0;
    if (null != arg1[3]) {
      const _parseInt = parseInt;
      num = parseInt(arg1[3]);
    }
    if (num < 60) {
      if (parsed <= 24) {
        let PM = null;
        if (parsed >= 12) {
          PM = DESpecificTimeExpressionParser(10437).Meridiem.PM;
        }
        let tmp5 = PM;
        let tmp6 = parsed;
        if (null != arg1[5]) {
          if (parsed > 12) {
            return null;
          } else {
            const str8 = arg1[5].toLowerCase();
            let tmp9 = parsed;
            if (str8.match(/morgen|vormittag/)) {
              let num2 = parsed;
              if (12 == parsed) {
                num2 = 0;
              }
              tmp9 = num2;
              PM = DESpecificTimeExpressionParser(10437).Meridiem.AM;
            }
            let tmp10 = tmp9;
            if (str8.match(/nachmittag|abend/)) {
              let sum = tmp9;
              if (12 != tmp9) {
                sum = tmp9 + 12;
              }
              tmp10 = sum;
              PM = DESpecificTimeExpressionParser(10437).Meridiem.PM;
            }
            tmp5 = PM;
            tmp6 = tmp10;
            if (str8.match(/nacht/)) {
              if (12 == tmp10) {
                PM = DESpecificTimeExpressionParser(10437).Meridiem.AM;
                let num4 = 0;
              } else if (tmp10 < 6) {
                PM = DESpecificTimeExpressionParser(10437).Meridiem.AM;
                num4 = tmp10;
              } else {
                PM = DESpecificTimeExpressionParser(10437).Meridiem.PM;
                num4 = tmp10 + 12;
              }
            }
            const str7 = arg1[5];
          }
        }
        assign.assign("hour", tmp6);
        assign.assign("minute", num);
        if (null !== tmp5) {
          assign.assign("meridiem", tmp5);
        } else if (tmp6 < 12) {
          assign.imply("meridiem", DESpecificTimeExpressionParser(10437).Meridiem.AM);
        } else {
          assign.imply("meridiem", DESpecificTimeExpressionParser(10437).Meridiem.PM);
        }
        if (null != arg1[4]) {
          const _parseInt2 = parseInt;
          const parsed1 = parseInt(arg1[4]);
          if (parsed1 >= 60) {
            return null;
          } else {
            assign.assign("second", parsed1);
          }
        }
        return assign;
      }
    }
    return null;
  },
};
const items1 = [obj];

export default _createClass(DESpecificTimeExpressionParser, items, items1);
