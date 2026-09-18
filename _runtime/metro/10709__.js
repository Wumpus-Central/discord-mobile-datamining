// === Module 10709: ? ===

// Module 10709
import _mod10674 from "module_10674" /* 10674 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const ENExtractYearSuffixRefiner = require;
const regExp = new RegExp("^\\s*(" + _mod10674.YEAR_PATTERN + ")", "i");
class ENExtractYearSuffixRefiner {
  constructor() {
    tmp = c2(this, ENExtractYearSuffixRefiner);
    return;
  }
}
const entry = {
  key: "refine",
  value: function refine(arg0, arr) {
    let text = arg0;
    const item = arr.forEach((start) => {
      text = start;
      start = start.start;
      if (start.isDateWithUnknownYear()) {
        const match = regExp.exec(text.text.substring(start.index + start.text.length));
        if (match) {
          if (str2.trim().length > 3) {
            obj.debug(() => {
              console.log("Extracting year: '" + match[0] + "' into : " + closure_0);
            });
            const parseYearResult = ENExtractYearSuffixRefiner(10674).parseYear(match[1]);
            if (null != start.end) {
              const end = start.end;
              end.assign("year", parseYearResult);
            }
            const start2 = start.start;
            start2.assign("year", parseYearResult);
            start.text = start.text + match[0];
          }
          str2 = match[0];
        }
        obj = text;
      }
    });
    return arr;
  }
};
const items = [entry];

export default _createClass(ENExtractYearSuffixRefiner, items);