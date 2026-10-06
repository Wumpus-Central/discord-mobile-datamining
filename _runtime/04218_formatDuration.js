// === Module 4218: formatDuration ===

// Module 4218 (formatDuration)
import _mod3969 from "module_3969" /* 3969 */;
import code_mod from "module_4210" /* 4210 */;

let tmp3;
let code = code_mod;
if (!code) {
  tmp3 = { default: code };
  const obj = { default: code };
} else {
  tmp3 = code;
}
code = tmp3;
let closure_3 = ["years", "months", "weeks", "days", "hours", "minutes", "seconds"];

export default function formatDuration(arg0, locale) {
  let closure_0 = arg0;
  if (arguments.length < 1) {
    const _TypeError = TypeError;
    const concat = "1 argument required, but only ".concat;
    const self = this;
    const self2 = this;
    const typeError = new TypeError("1 argument required, but only ".concat(arguments.length, " present"));
    throw typeError;
  } else {
    locale = undefined;
    const defaultOptions = _mod3969.getDefaultOptions();
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
    let closure_2 = null !== zero && undefined !== zero && zero;
    let delimiter;
    if (null != locale) {
      delimiter = locale.delimiter;
    }
    const str = " ";
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