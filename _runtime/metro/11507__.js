// _runtime/metro/11507__.js
import alphaNum from "../11499_alphaNum.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";

const JPWeekdayWithParenthesesParser = require;
const keys = Object.keys(alphaNum.WEEKDAY_OFFSET);
const regExp = new RegExp("(?:\\(|\\\uFF08)(?<weekday>" + keys.join("|") + ")(?:\\)|\\\uFF09)", "i");
class JPWeekdayWithParenthesesParser {
  constructor() {
    tmp = c2(this, JPWeekdayWithParenthesesParser);
    return;
  }
}
const entry = {
  key: "pattern",
  value: function pattern() {
    return regExp;
  },
};
const items = [
  entry,
  {
    key: "extract",
    value: function extract(reference, arg1) {
      const tmp3 = JPWeekdayWithParenthesesParser(11499).WEEKDAY_OFFSET[arg1.groups.weekday];
      let parsingComponentsAtWeekday = null;
      if (undefined !== tmp3) {
        parsingComponentsAtWeekday = JPWeekdayWithParenthesesParser(11456).createParsingComponentsAtWeekday(
          reference.reference,
          tmp3,
        );
      }
      return parsingComponentsAtWeekday;
    },
  },
];

export default _createClass(JPWeekdayWithParenthesesParser, items);
