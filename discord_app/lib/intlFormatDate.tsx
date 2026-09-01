// === Module 4183: makeIntlFormatter ===

// Module 4183 (makeIntlFormatter)
import closure_2 from "_getSystemLocale" /* 1996 */;

const require = arg1;
function makeIntlFormatter(locale, arg1) {
  try {
    const _Intl = Intl;
    return Intl.DateTimeFormat(locale, arg1).format;
  } catch (err) {
    const _Intl2 = Intl;
    return Intl.DateTimeFormat(undefined, tmp).format;
  }
}
const result = require("set").fileFinishedImporting("lib/intlFormatDate.tsx");

export const makeFormatter = function makeFormatter(arg0) {
  locale = locale.locale;
  let tmp = (function tryMakeNativeFormatter(locale, arg1) {
    const callback = locale;
    const table = arg1;
    if (null == callback(table[1]).makeFormatter) {
      return null;
    } else {
      try {
        let tmp4 = null != locale;
        if (tmp4) {
          const str2 = tmp2(tmp3[2]).systemLocale;
          let first;
          if (str2 != null) {
            first = str2.split("-")[0];
          }
          tmp4 = locale.split("-")[0] === first;
        }
        if (locale !== tmp2(tmp3[2]).initialLocale) {
          const tmp7 = locale;
        }
        const formatter = tmp2(tmp3[1]).makeFormatter(tmp7, arg1);
        if (null == formatter) {
          return null;
        } else {
          c3 = null;
          return (arg0) => {
            try {
              return formatter(arg0);
            } catch (err) {
              if (null == _null) {
                _null = _null(closure_0, closure_1);
              }
              return _null(tmp);
            }
          };
        }
        const tmp2Result = tmp2(tmp3[1]);
      } catch (err) {
        return tmp;
      }
    }
  })(locale, arg0);
  if (null == tmp) {
    tmp = makeIntlFormatter(locale, arg0);
  }
  return tmp;
};