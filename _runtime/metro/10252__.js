// _runtime/metro/10252__.js
import _mod10201 from "10201__.js";
import NUMBER from "../10244_NUMBER.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";

const keys = Object.keys(NUMBER.WEEKDAY_OFFSET);
const regExp = new RegExp("(?:\\(|\\\uFF08)(?<weekday>" + keys.join("|") + ")(?:\\)|\\\uFF09)", "i");
class JPWeekdayWithParenthesesParser {
  constructor() {
    _classCallCheck(this, JPWeekdayWithParenthesesParser);
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
      const tmp3 = NUMBER.WEEKDAY_OFFSET[arg1.groups.weekday];
      let parsingComponentsAtWeekday = null;
      if (undefined !== tmp3) {
        parsingComponentsAtWeekday = _mod10201.createParsingComponentsAtWeekday(reference.reference, tmp3);
      }
      return parsingComponentsAtWeekday;
    },
  },
];

export default _createClass(JPWeekdayWithParenthesesParser, items);
