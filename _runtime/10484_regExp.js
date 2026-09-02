// _runtime/10484_regExp.js
import ExtractTimezoneOffsetRefiner from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

const regExp = new RegExp("^\\s*(?:\\(?(?:GMT|UTC)\\s?)?([+-])(\\d{1,2})(?::?(\\d{2}))?\\)?", "i");
class ExtractTimezoneOffsetRefiner {
  constructor() {
    tmp = ExtractTimezoneOffsetRefiner(this, ExtractTimezoneOffsetRefiner);
    return;
  }
}
const items = [
  {
    key: "refine",
    value: function refine(arg0, arr) {
      closure_0 = arg0;
      const item = arr.forEach((start) => {
        const text = start;
        start = start.start;
        if (!start.isCertain("timezoneOffset")) {
          let obj = text;
          const match = closure_1_1.exec(text.text.substring(start.index + start.text.length));
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
          const str = text.text;
        }
      });
      return arr;
    },
  },
];

export default _createClass(ExtractTimezoneOffsetRefiner, items);
