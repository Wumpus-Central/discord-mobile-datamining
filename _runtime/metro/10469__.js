// _runtime/metro/10469__.js
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";

const ExtractTimezoneAbbrRefiner = require;
const regExp = new RegExp("^\\s*,?\\s*\\(?([A-Z]{2,4})\\)?(?=\\W|$)", "i");
class ExtractTimezoneAbbrRefiner {
  constructor(arg0) {
    tmp = c2(this, ExtractTimezoneAbbrRefiner);
    this.timezoneOverrides = global;
    return;
  }
}
const entry = {
  key: "refine",
  value: function refine(option, arr) {
    let self = this;
    let timezones = option.option.timezones;
    if (null === timezones) {
      timezones = {};
    }
    const item = arr.forEach((item) => {
      let obj = option;
      const match = regExp.exec(option.text.substring(item.index + item.text.length));
      if (match) {
        const formatted = match[1].toUpperCase();
        const start = item.start;
        let refDate = start.date();
        if (null === refDate) {
          refDate = item.refDate;
        }
        if (null === refDate) {
          const _Date = Date;
          refDate = new Date();
        }
        const _Object = Object;
        const _Object2 = Object;
        const merged = Object.assign(Object.assign({}, self.timezoneOverrides), timezones);
        const toTimezoneOffsetResult = ExtractTimezoneAbbrRefiner(10436).toTimezoneOffset(formatted, refDate, merged);
        self = toTimezoneOffsetResult;
        if (null != toTimezoneOffsetResult) {
          obj.debug(() => {
            console.log(
              "Extracting timezone: '" + formatted + "' into: " + toTimezoneOffsetResult + " for: " + item.start,
            );
          });
          const start6 = item.start;
          value = start6.get("timezoneOffset");
          if (null !== value) {
            if (toTimezoneOffsetResult != value) {
              const start2 = item.start;
            }
          }
          const start3 = item.start;
          if (!tmp14) {
            item.text = item.text + match[0];
            const start4 = item.start;
            if (!start4.isCertain("timezoneOffset")) {
              const start5 = item.start;
              obj = start5.assign("timezoneOffset", toTimezoneOffsetResult);
            }
            let isCertainResult = null == item.end;
            if (!isCertainResult) {
              const end = item.end;
              isCertainResult = end.isCertain("timezoneOffset");
            }
            if (!isCertainResult) {
              const end2 = item.end;
              obj = end2.assign("timezoneOffset", toTimezoneOffsetResult);
            }
          }
          tmp14 = start3.isOnlyDate() && formatted != match[1];
        }
      }
    });
    return arr;
  },
};
const items = [entry];

export default _createClass(ExtractTimezoneAbbrRefiner, items);
