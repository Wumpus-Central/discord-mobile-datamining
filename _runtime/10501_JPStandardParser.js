// _runtime/10501_JPStandardParser.js
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

const JPStandardParser = require;
const re3 =
  /(?:(?:([同今本])|((昭和|平成|令和)?([0-9０-９]{1,4}|元)))年\s*)?([0-9０-９]{1,2})月\s*([0-9０-９]{1,2})日/i;
class JPStandardParser {
  constructor() {
    tmp = c2(this, JPStandardParser);
    return;
  }
}
const entry = {
  key: "pattern",
  value: function pattern() {
    return re3;
  },
};
const items = [
  entry,
  {
    key: "extract",
    value: function extract(createParsingComponents, match) {
      const parsed = parseInt(JPStandardParser(10502).toHankaku(match[5]));
      const parsed1 = parseInt(JPStandardParser(10502).toHankaku(match[6]));
      const parsingComponents = createParsingComponents.createParsingComponents({ day: parsed1, month: parsed });
      match = match[1];
      if (match) {
        match = match[1].match("\u540C|\u4ECA|\u672C");
      }
      if (match) {
        const reference = createParsingComponents.reference;
        const dateWithAdjustedTimezone = reference.getDateWithAdjustedTimezone();
        parsingComponents.assign("year", dateWithAdjustedTimezone.getFullYear());
      }
      if (match[2]) {
        let num = 1;
        if ("\u5143" != match[4]) {
          const _parseInt = parseInt;
          num = parseInt(JPStandardParser(10502).toHankaku(tmp8));
        }
        if ("\u4EE4\u548C" == match[3]) {
          let sum = num + 2018;
          num = parsingComponents.assign("year", sum);
        } else if ("\u5E73\u6210" != match[3]) {
          sum = num;
          if ("\u662D\u548C" == match[3]) {
            sum = num + 1925;
          }
        }
        sum = num + 1988;
      } else {
        parsingComponents.imply(
          "year",
          JPStandardParser(10433).findYearClosestToRef(createParsingComponents.refDate, parsed1, parsed),
        );
        return parsingComponents;
      }
    },
  },
];

export default _createClass(JPStandardParser, items);
