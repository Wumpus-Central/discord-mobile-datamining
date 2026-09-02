// _runtime/10480_regExp.js
import WEEKDAY_DICTIONARY from "10445_WEEKDAY_DICTIONARY.js";
import closure_2 from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

const ENExtractYearSuffixRefiner = require;
const regExp = new RegExp("^\\s*(" + WEEKDAY_DICTIONARY.YEAR_PATTERN + ")", "i");
class ENExtractYearSuffixRefiner {
  constructor() {
    tmp = closure_2(this, ENExtractYearSuffixRefiner);
    return;
  }
}
const items = [
  {
    key: "refine",
    value: function refine(arg0, arr) {
      closure_0 = arg0;
      const item = arr.forEach((start) => {
        const lib = start;
        start = start.start;
        if (start.isDateWithUnknownYear()) {
          let obj = lib;
          const match = closure_1_3.exec(lib.text.substring(start.index + start.text.length));
          if (match) {
            if (str2.trim().length > 3) {
              obj.debug(() => {
                console.log("Extracting year: '" + match[0] + "' into : " + closure_0);
              });
              const parseYearResult = lib(closure_1_1[2]).parseYear(match[1]);
              if (null != start.end) {
                const end = start.end;
                obj = end.assign("year", parseYearResult);
              }
              const start2 = start.start;
              obj = start2.assign("year", parseYearResult);
              start.text = start.text + match[0];
            }
            str2 = match[0];
          }
          const str = lib.text;
        }
      });
      return arr;
    },
  },
];

export default _createClass(ENExtractYearSuffixRefiner, items);
