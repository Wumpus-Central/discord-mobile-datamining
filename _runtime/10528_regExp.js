// === Module 10528: regExp ===

// Module 10528 (regExp)
import alphaNum from "alphaNum" /* 10520 */;
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const JPWeekdayWithParenthesesParser = require;
const keys = Object.keys(alphaNum.WEEKDAY_OFFSET);
const regExp = new RegExp("(?:\\(|\\\uFF08)(?<weekday>" + keys.join("|") + ")(?:\\)|\\\uFF09)", "i");
class JPWeekdayWithParenthesesParser {
  constructor() {
    tmp = closure_2(this, JPWeekdayWithParenthesesParser);
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
    value: function extract(reference) {
      const tmp3 = JPWeekdayWithParenthesesParser(10520).WEEKDAY_OFFSET[arg1.groups.weekday];
      let parsingComponentsAtWeekday = null;
      if (undefined !== tmp3) {
        parsingComponentsAtWeekday = JPWeekdayWithParenthesesParser(10477).createParsingComponentsAtWeekday(reference.reference, tmp3);
      }
      return parsingComponentsAtWeekday;
    }
  }
];

export default _createClass(JPWeekdayWithParenthesesParser, items);