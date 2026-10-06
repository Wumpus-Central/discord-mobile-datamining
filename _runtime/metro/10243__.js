// === Module 10243: ? ===

// Module 10243
import findMostLikelyADYear from "findMostLikelyADYear" /* 10175 */;
import NUMBER from "NUMBER" /* 10244 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const re3 = /(?:(?:([同今本])|((昭和|平成|令和)?([0-9０-９]{1,4}|元)))年\s*)?([0-9０-９]{1,2})月\s*([0-9０-９]{1,2})日/i;
class JPStandardParser {
  constructor() {
    _classCallCheck(this, JPStandardParser);
  }
}
const entry = {
  key: "pattern",
  value: function pattern() {
    return re3;
  }
};
const items = [
  entry,
  {
    key: "extract",
    value: function extract(createParsingComponents, match) {
      const parsed = parseInt(NUMBER.toHankaku(match[5]));
      const parsed1 = parseInt(NUMBER.toHankaku(match[6]));
      const parsingComponents = createParsingComponents.createParsingComponents({ day: parsed1, month: parsed });
      match = match[1];
      if (match) {
        const str = match[1];
        match = str.match("\u540C|\u4ECA|\u672C");
      }
      if (match) {
        const reference = createParsingComponents.reference;
        const assign = parsingComponents.assign;
        const dateWithAdjustedTimezone = reference.getDateWithAdjustedTimezone();
        assign("year", dateWithAdjustedTimezone.getFullYear());
      }
      if (match[2]) {
        let sum;
        let num = 1;
        if ("\u5143" != match[4]) {
          const _parseInt = parseInt;
          num = parseInt(NUMBER.toHankaku(tmp8));
        }
        if ("\u4EE4\u548C" == match[3]) {
          sum = num + 2018;
        } else if ("\u5E73\u6210" == match[3]) {
          sum = num + 1988;
        } else {
          sum = num;
          if ("\u662D\u548C" == match[3]) {
            sum = num + 1925;
          }
        }
        parsingComponents.assign("year", sum);
      } else {
        parsingComponents.imply("year", findMostLikelyADYear.findYearClosestToRef(createParsingComponents.refDate, parsed1, parsed));
      }
      return parsingComponents;
    }
  }
];

export default _createClass(JPStandardParser, items);