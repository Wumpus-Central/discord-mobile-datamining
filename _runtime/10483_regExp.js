// _runtime/10483_regExp.js
import closure_2 from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

const ExtractTimezoneAbbrRefiner = require;
const regExp = new RegExp("^\\s*,?\\s*\\(?([A-Z]{2,4})\\)?(?=\\W|$)", "i");
class ExtractTimezoneAbbrRefiner {
  constructor(arg0) {
    tmp = closure_2(this, ExtractTimezoneAbbrRefiner);
    this.timezoneOverrides = global;
    return;
  }
}
const items = [
  {
    key: "refine",
    value: function refine(option, arr) {
      let self = this;
      closure_1 = option;
      let timezones = option.option.timezones;
      if (null === timezones) {
        timezones = {};
      }
      const item = arr.forEach((index) => {
        closure_0 = index;
        let obj = formatted;
        const match = closure_1_3.exec(formatted.text.substring(index.index + index.text.length));
        if (match) {
          formatted = match[1].toUpperCase();
          const start = index.start;
          let refDate = start.date();
          if (null === refDate) {
            refDate = index.refDate;
          }
          if (null === refDate) {
            const _Date = Date;
            refDate = new Date();
          }
          const _Object = Object;
          const _Object2 = Object;
          const merged = Object.assign(Object.assign({}, self.timezoneOverrides), closure_0);
          const toTimezoneOffsetResult = timezones(option[2]).toTimezoneOffset(formatted, refDate, merged);
          self = toTimezoneOffsetResult;
          if (null != toTimezoneOffsetResult) {
            obj.debug(() => {
              console.log("Extracting timezone: '" + formatted + "' into: " + closure_2 + " for: " + index.start);
            });
            const start6 = index.start;
            const value = start6.get("timezoneOffset");
            if (null !== value) {
              if (toTimezoneOffsetResult != value) {
                const start2 = index.start;
              }
            }
            const start3 = index.start;
            if (!tmp14) {
              index.text = index.text + match[0];
              const start4 = index.start;
              if (!start4.isCertain("timezoneOffset")) {
                const start5 = index.start;
                obj = start5.assign("timezoneOffset", toTimezoneOffsetResult);
              }
              let isCertainResult = null == index.end;
              if (!isCertainResult) {
                const end = index.end;
                isCertainResult = end.isCertain("timezoneOffset");
              }
              if (!isCertainResult) {
                const end2 = index.end;
                obj = end2.assign("timezoneOffset", toTimezoneOffsetResult);
              }
            }
            tmp14 = start3.isOnlyDate() && formatted != match[1];
          }
          const str2 = match[1];
        }
      });
      return arr;
    },
  },
];

export default _createClass(ExtractTimezoneAbbrRefiner, items);
