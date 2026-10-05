// === Module 10224: ? ===

// Module 10224
import Meridiem from "Meridiem" /* 10166 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const regExp = new RegExp("(^|\\s|T)(?:(?:[\u00E0a])\\s*)?(\\d{1,2})(?:h|:)?(?:(\\d{1,2})(?:m|:)?)?(?:(\\d{1,2})(?:s|:)?)?(?:\\s*(A\\.M\\.|P\\.M\\.|AM?|PM?))?(?=\\W|$)", "i");
const regExp1 = new RegExp("^\\s*(\\-|\\\u2013|\\~|\\\u301C|[\u00E0a]|\\?)\\s*(\\d{1,2})(?:h|:)?(?:(\\d{1,2})(?:m|:)?)?(?:(\\d{1,2})(?:s|:)?)?(?:\\s*(A\\.M\\.|P\\.M\\.|AM?|PM?))?(?=\\W|$)", "i");
class FRSpecificTimeExpressionParser {
  constructor() {
    _classCallCheck(this, FRSpecificTimeExpressionParser);
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
      const str = index[0];
      const parsingResult = createParsingResult.createParsingResult(sum, str.substring(index[1].length));
      const str2 = parsingResult.text;
      if (str2.match(/^\d{4}$/)) {
        index.index = index.index + index[0].length;
        return null;
      } else {
        const start = parsingResult.start;
        parsingResult.start = FRSpecificTimeExpressionParser.extractTimeComponent(start.clone(), index);
        if (parsingResult.start) {
          const str3 = createParsingResult.text;
          const match = regExp1.exec(str3.substring(index.index + index[0].length));
          if (match) {
            const start2 = parsingResult.start;
            parsingResult.end = FRSpecificTimeExpressionParser.extractTimeComponent(start2.clone(), match);
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
            const str8 = arg1[5][0];
            const formatted = str8.toLowerCase();
            let tmp9 = parsed;
            if ("a" == formatted) {
              let num2 = parsed;
              const AM = Meridiem.Meridiem.AM;
              if (12 == parsed) {
                num2 = 0;
              }
              tmp9 = num2;
              PM1 = AM;
            }
            tmp5 = PM1;
            tmp6 = tmp9;
            if ("p" == formatted) {
              let sum = tmp9;
              const PM = Meridiem.Meridiem.PM;
              if (12 != tmp9) {
                sum = tmp9 + 12;
              }
              tmp6 = sum;
              tmp5 = PM;
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
  }
};
const items1 = [entry1];

export default _createClass(FRSpecificTimeExpressionParser, items, items1);