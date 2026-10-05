// === Module 4558: intlFormatDate ===

// Module 4558 (intlFormatDate)
import LocaleStore from "LocaleStore" /* 2116 */;
import size from "module_2" /* 2 */;

function makeIntlFormatter(locale, arg1) {
  try {
    const _Intl = Intl;
    return Intl.DateTimeFormat(locale, arg1).format;
  } catch (err) {
    const _Intl2 = Intl;
    return Intl.DateTimeFormat(undefined, arg1).format;
  }
}
const result = size.fileFinishedImporting("lib/intlFormatDate.tsx");

export const makeFormatter = function makeFormatter(arg0) {
  function tryMakeNativeFormatter(locale, arg1) {
    let closure_0 = locale;
    let closure_1 = arg1;
    if (null == closure_0(closure_1[1]).makeFormatter) {
      return null;
    } else {
      try {
        let tmp8;
        let tmp3 = null != locale;
        if (tmp3) {
          const first = locale.split("-")[0];
          const str2 = closure_0(closure_1[2]).systemLocale;
          let first1;
          if (str2 != null) {
            first1 = str2.split("-")[0];
          }
          tmp3 = first === first1;
        }
        const makeFormatter = closure_0(tmp2[1]).makeFormatter;
        closure_0(closure_1[1]);
        if (locale !== closure_0(closure_1[2]).initialLocale) {
          tmp8 = locale;
        }
        const formatter = makeFormatter(tmp8, arg1);
        if (null == formatter) {
          return null;
        } else {
          let closure_3 = null;
          return (arg0) => {
            try {
              return formatter(arg0);
            } catch (err) {
              if (null == closure_3) {
                closure_3 = makeIntlFormatter(locale, closure_1);
              }
              return closure_3(arg0);
            }
          };
        }
      } catch (err) {
        return null;
      }
    }
  }
  const locale = LocaleStore.locale;
  let tmp = tryMakeNativeFormatter(locale, arg0);
  if (null == tmp) {
    tmp = makeIntlFormatter(locale, arg0);
  }
  return tmp;
};