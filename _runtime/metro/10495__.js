// === Module 10495: ? ===

// Module 10495
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const FRSpecificTimeExpressionParser = require;
const regExp = new RegExp("(^|\\s|T)(?:(?:[\u00E0a])\\s*)?(\\d{1,2})(?:h|:)?(?:(\\d{1,2})(?:m|:)?)?(?:(\\d{1,2})(?:s|:)?)?(?:\\s*(A\\.M\\.|P\\.M\\.|AM?|PM?))?(?=\\W|$)", "i");
const regExp1 = new RegExp("^\\s*(\\-|\\\u2013|\\~|\\\u301C|[\u00E0a]|\\?)\\s*(\\d{1,2})(?:h|:)?(?:(\\d{1,2})(?:m|:)?)?(?:(\\d{1,2})(?:s|:)?)?(?:\\s*(A\\.M\\.|P\\.M\\.|AM?|PM?))?(?=\\W|$)", "i");
class FRSpecificTimeExpressionParser {
  constructor() {
    tmp = c2(this, FRSpecificTimeExpressionParser);
    return;
  }
}
const entry = {
  key: "pattern",
  value: function pattern(arg0) {
    return regExp;
  }
};
const items = [
  entry,
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
        parsingResult.start = FRSpecificTimeExpressionParser.extractTimeComponent(start.clone(), index);
        if (parsingResult.start) {
          const match = regex.exec(createParsingResult.text.substring(index.index + index[0].length));
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
        obj = FRSpecificTimeExpressionParser;
      }
      str2 = parsingResult.text;
    }
  }
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
        let PM = null;
        if (parsed >= 12) {
          PM = FRSpecificTimeExpressionParser(10437).Meridiem.PM;
        }
        let tmp5 = parsed;
        if (null != arg1[5]) {
          if (parsed > 12) {
            return null;
          } else {
            const formatted = arg1[5][0].toLowerCase();
            let tmp8 = parsed;
            if ("a" == formatted) {
              let num2 = parsed;
              if (12 == parsed) {
                num2 = 0;
              }
              tmp8 = num2;
              PM = FRSpecificTimeExpressionParser(10437).Meridiem.AM;
            }
            tmp5 = tmp8;
            if ("p" == formatted) {
              let sum = tmp8;
              if (12 != tmp8) {
                sum = tmp8 + 12;
              }
              tmp5 = sum;
              PM = FRSpecificTimeExpressionParser(10437).Meridiem.PM;
            }
          }
        }
        assign.assign("hour", tmp5);
        assign.assign("minute", num);
        if (null !== PM) {
          assign.assign("meridiem", PM);
        } else if (tmp5 < 12) {
          assign.imply("meridiem", FRSpecificTimeExpressionParser(10437).Meridiem.AM);
        } else {
          assign.imply("meridiem", FRSpecificTimeExpressionParser(10437).Meridiem.PM);
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
  }
};
const items1 = [entry1];

export default _createClass(FRSpecificTimeExpressionParser, items, items1);