// === Module 10501: JPStandardParser ===

// Module 10501 (JPStandardParser)
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const JPStandardParser = require;
const re3 = /(?:(?:([同今本])|((昭和|平成|令和)?([0-9０-９]{1,4}|元)))年\s*)?([0-9０-９]{1,2})月\s*([0-9０-９]{1,2})日/i;
class JPStandardParser {
  constructor() {
    tmp = closure_2(this, JPStandardParser);
    return;
  }
}
const items = [
  {
    key: "pattern",
    value: function pattern() {
      return closure_3;
    }
  },
  {
    key: "extract",
    value: function extract(createParsingComponents) {
      const parsed = parseInt(JPStandardParser(10502).toHankaku(arg1[5]));
      const parsed1 = parseInt(JPStandardParser(10502).toHankaku(arg1[6]));
      const parsingComponents = createParsingComponents.createParsingComponents({ day: parsed1, month: parsed });
      let match = arg1[1];
      if (match) {
        match = arg1[1].match("\u540C|\u4ECA|\u672C");
        const str = arg1[1];
      }
      if (match) {
        const reference = createParsingComponents.reference;
        const dateWithAdjustedTimezone = reference.getDateWithAdjustedTimezone();
        parsingComponents.assign("year", dateWithAdjustedTimezone.getFullYear());
      }
      if (arg1[2]) {
        let num = 1;
        if ("\u5143" != arg1[4]) {
          const _parseInt = parseInt;
          num = parseInt(tmp(10502).toHankaku(tmp8));
        }
        if ("\u4EE4\u548C" == arg1[3]) {
          let sum = num + 2018;
          num = parsingComponents.assign("year", sum);
        } else if ("\u5E73\u6210" != arg1[3]) {
          sum = num;
          if ("\u662D\u548C" == arg1[3]) {
            sum = num + 1925;
          }
        }
        sum = num + 1988;
      } else {
        parsingComponents.imply("year", tmp(10433).findYearClosestToRef(createParsingComponents.refDate, parsed1, parsed));
        return parsingComponents;
      }
    }
  }
];

export default _createClass(JPStandardParser, items);