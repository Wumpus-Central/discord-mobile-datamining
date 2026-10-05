// === Module 10198: ? ===

// Module 10198
import TIMEZONE_ABBR_MAP from "TIMEZONE_ABBR_MAP" /* 10165 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const regExp = new RegExp("^\\s*,?\\s*\\(?([A-Z]{2,4})\\)?(?=\\W|$)", "i");
class ExtractTimezoneAbbrRefiner {
  constructor(timezoneOverrides) {
    _classCallCheck(this, ExtractTimezoneAbbrRefiner);
    this.timezoneOverrides = timezoneOverrides;
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
    const item = arr.forEach(function(item) {
      let closure_0 = item;
      const str = option.text;
      const match = regExp.exec(str.substring(item.index + item.text.length));
      if (match) {
        const str2 = match[1];
        const formatted = str2.toUpperCase();
        const start = item.start;
        let refDate = start.date() ?? item.refDate;
        if (null === refDate) {
          const _Date = Date;
          self = this;
          const self2 = this;
          refDate = new Date();
        }
        const _Object = Object;
        const _Object2 = Object;
        const merged = Object.assign(Object.assign({}, self.timezoneOverrides), timezones);
        const toTimezoneOffsetResult = TIMEZONE_ABBR_MAP.toTimezoneOffset(formatted, refDate, merged);
        if (null != toTimezoneOffsetResult) {
          option.debug(() => {
            console.log("Extracting timezone: '" + formatted + "' into: " + toTimezoneOffsetResult + " for: " + start.start);
          });
          const start6 = item.start;
          const value = start6.get("timezoneOffset");
          if (null !== value) {
            if (toTimezoneOffsetResult != value) {
              const start2 = item.start;
            }
          }
          const start3 = item.start;
          const tmp12 = start3.isOnlyDate() && formatted != match[1];
          if (!tmp12) {
            item.text = item.text + match[0];
            const start4 = item.start;
            if (!start4.isCertain("timezoneOffset")) {
              const start5 = item.start;
              start5.assign("timezoneOffset", toTimezoneOffsetResult);
            }
            let isCertainResult = null == item.end;
            if (!isCertainResult) {
              const end = item.end;
              isCertainResult = end.isCertain("timezoneOffset");
            }
            if (!isCertainResult) {
              const end2 = item.end;
              end2.assign("timezoneOffset", toTimezoneOffsetResult);
            }
          }
        }
      }
    });
    return arr;
  }
};
const items = [entry];

export default _createClass(ExtractTimezoneAbbrRefiner, items);