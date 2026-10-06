// _runtime/metro/10221__.js
import Meridiem from "../10179_Meridiem.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";

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
    _classCallCheck(this, DESpecificTimeExpressionParser);
  }
}
const entry = {
  key: "pattern",
  value: function pattern(arg0) {
    return regExp;
  },
};
const items = [
  entry,
  {
    key: "extract",
    value: function extract(createParsingResult, index) {
      const sum = index.index + index[1].length;
      const str = index[0];
      const parsingResult = createParsingResult.createParsingResult(sum, str.substring(index[1].length));
      const str2 = parsingResult.text;
      if (str2.match(/^\d{4}$/)) {
        index.index = index.index + index[0].length;
        return null;
      } else {
        const start = parsingResult.start;
        parsingResult.start = DESpecificTimeExpressionParser.extractTimeComponent(start.clone(), index);
        if (parsingResult.start) {
          const str3 = createParsingResult.text;
          const match = regExp1.exec(str3.substring(index.index + index[0].length));
          if (match) {
            const start2 = parsingResult.start;
            parsingResult.end = DESpecificTimeExpressionParser.extractTimeComponent(start2.clone(), match);
            if (parsingResult.end) {
              parsingResult.text = parsingResult.text + match[0];
            }
          }
          return parsingResult;
        } else {
          index.index = index.index + index[0].length;
          return null;
        }
      }
    },
  },
];
const entry1 = {
  key: "extractTimeComponent",
  value: function extractTimeComponent(assign, arg1) {
    const parsed = parseInt(arg1[2]);
    let num = 0;
    if (null != arg1[3]) {
      const _parseInt = parseInt;
      num = parseInt(arg1[3]);
    }
    if (num < 60) {
      if (parsed <= 24) {
        let PM1 = null;
        if (parsed >= 12) {
          PM1 = Meridiem.Meridiem.PM;
        }
        let tmp5 = PM1;
        let tmp6 = parsed;
        if (null != arg1[5]) {
          if (parsed > 12) {
            return null;
          } else {
            const str7 = arg1[5];
            const str8 = str7.toLowerCase();
            let tmp9 = parsed;
            if (str8.match(/morgen|vormittag/)) {
              let num2 = parsed;
              const AM = Meridiem.Meridiem.AM;
              if (12 == parsed) {
                num2 = 0;
              }
              tmp9 = num2;
              PM1 = AM;
            }
            let tmp10 = tmp9;
            if (str8.match(/nachmittag|abend/)) {
              let sum = tmp9;
              const PM = Meridiem.Meridiem.PM;
              if (12 != tmp9) {
                sum = tmp9 + 12;
              }
              tmp10 = sum;
              PM1 = PM;
            }
            tmp5 = PM1;
            tmp6 = tmp10;
            if (str8.match(/nacht/)) {
              let PM2;
              let num4;
              if (12 == tmp10) {
                PM2 = Meridiem.Meridiem.AM;
                num4 = 0;
              } else if (tmp10 < 6) {
                PM2 = Meridiem.Meridiem.AM;
                num4 = tmp10;
              } else {
                PM2 = Meridiem.Meridiem.PM;
                num4 = tmp10 + 12;
              }
              tmp5 = PM2;
              tmp6 = num4;
            }
          }
        }
        assign.assign("hour", tmp6);
        assign.assign("minute", num);
        if (null !== tmp5) {
          assign.assign("meridiem", tmp5);
        } else if (tmp6 < 12) {
          assign.imply("meridiem", Meridiem.Meridiem.AM);
        } else {
          assign.imply("meridiem", Meridiem.Meridiem.PM);
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
const items1 = [entry1];

export default _createClass(DESpecificTimeExpressionParser, items, items1);
