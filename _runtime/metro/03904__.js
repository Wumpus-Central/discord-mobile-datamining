// === Module 3904: ? ===

// Module 3904
import _mod3655 from "module_3655" /* 3655 */;
import code from "module_3896" /* 3896 */;

if (!code) {
  const obj = { default: code };
  let tmp3 = obj;
} else {
  tmp3 = code;
}
code = tmp3;
let closure_3 = ["years", "months", "weeks", "days", "hours", "minutes", "seconds"];

export default function formatDuration(arg0, locale) {
  closure_0 = arg0;
  if (arguments.length < 1) {
    const _TypeError = TypeError;
    const concat = "1 argument required, but only ".concat;
    const typeError = new TypeError("1 argument required, but only ".concat(arguments.length, " present"));
    throw typeError;
  } else {
    locale = undefined;
    const defaultOptions = _mod3655.getDefaultOptions();
    if (null != locale) {
      locale = locale.locale;
    }
    if (null === locale) {
      locale = defaultOptions.locale;
    }
    if (null === locale) {
      locale = code.default;
    }
    let format;
    if (null != locale) {
      format = locale.format;
    }
    if (null === format) {
      format = closure_3;
    }
    let zero;
    if (null != locale) {
      zero = locale.zero;
    }
    closure_2 = null !== zero && undefined !== zero && zero;
    let delimiter;
    if (null != locale) {
      delimiter = locale.delimiter;
    }
    let str2 = " ";
    if (null !== delimiter) {
      str2 = " ";
      if (undefined !== delimiter) {
        str2 = delimiter;
      }
    }
    if (locale.formatDistance) {
      const reduced = format.reduce((arr, item) => {
        let combined = arr;
        if (typeof closure_0[item] === "number") {
          if (closure_2) {
            combined = arr.concat(locale.formatDistance(tmp, tmp3));
          } else {
            combined = arr;
          }
        }
        return combined;
      }, []);
      return reduced.join(str2);
    } else {
      return "";
    }
  }
};
export default exports.default;