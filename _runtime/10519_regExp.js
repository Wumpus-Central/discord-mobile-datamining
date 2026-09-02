// === Module 10519: regExp ===

// Module 10519 (regExp)
import alphaNum from "alphaNum" /* 10516 */;
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const JPWeekdayParser = require;
const keys = Object.keys(alphaNum.WEEKDAY_OFFSET);
const regExp = new RegExp("((?<prefix>\u524D\u306E|\u6B21\u306E|\u4ECA\u9031))?(?<weekday>" + keys.join("|") + ")(?:\u66DC\u65E5|\u66DC)", "i");
class JPWeekdayParser {
  constructor() {
    tmp = closure_2(this, JPWeekdayParser);
    return;
  }
}
const items = [
  {
    key: "pattern",
    value: function pattern() {
      return regExp;
    }
  },
  {
    key: "extract",
    value: function extract(reference, groups) {
      const tmp3 = JPWeekdayParser(10516).WEEKDAY_OFFSET[groups.groups.weekday];
      if (undefined === tmp3) {
        return null;
      } else {
        let str2 = "last";
        if (!groups.groups.prefix || "".match(/前の/)) {
          str2 = "next";
          if (!str.match(/次の/)) {
            str2 = null;
            if (str.match(/今週/)) {
              str2 = "this";
            }
          }
        }
        return tmp(10473).createParsingComponentsAtWeekday(reference.reference, tmp3, str2);
      }
      tmp = JPWeekdayParser;
    }
  }
];

export default _createClass(JPWeekdayParser, items);