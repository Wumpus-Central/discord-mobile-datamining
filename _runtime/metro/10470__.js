// === Module 10470: ? ===

// Module 10470
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const regExp = new RegExp("^\\s*(?:\\(?(?:GMT|UTC)\\s?)?([+-])(\\d{1,2})(?::?(\\d{2}))?\\)?", "i");
class ExtractTimezoneOffsetRefiner {
  constructor() {
    tmp = closure_0(this, ExtractTimezoneOffsetRefiner);
    return;
  }
}
_classCallCheck = ExtractTimezoneOffsetRefiner;
const entry = {
  key: "refine",
  value: function refine(arg0, arr) {
    let text = arg0;
    const item = arr.forEach((start) => {
      text = start;
      start = start.start;
      if (!start.isCertain("timezoneOffset")) {
        let obj = text;
        const match = regExp.exec(text.text.substring(start.index + start.text.length));
        if (match) {
          obj.debug(() => {
            console.log("Extracting timezone: '" + match[0] + "' into : " + closure_0);
          });
          const _parseInt = parseInt;
          let str2 = match[3];
          const result = 60 * parseInt(match[2]);
          if (!str2) {
            str2 = "0";
          }
          const sum = result + parseInt(str2);
          if (sum <= 840) {
            let tmp7 = sum;
            if ("-" === match[1]) {
              tmp7 = -sum;
            }
            if (null != start.end) {
              const end = start.end;
              obj = end.assign("timezoneOffset", tmp7);
            }
            const start2 = start.start;
            obj = start2.assign("timezoneOffset", tmp7);
            start.text = start.text + match[0];
          }
        }
      }
    });
    return arr;
  }
};
const items = [entry];

export default _createClass(ExtractTimezoneOffsetRefiner, items);