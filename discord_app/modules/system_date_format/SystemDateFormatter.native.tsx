// === Module 4080: __DiscordCreateDateFormatter ===

// Module 4080 (__DiscordCreateDateFormatter)
import obj1322 from "obj132" /* 500 */;
import enforcingDefault from "enforcing" /* 4081 */;
import obj132 from "obj132" /* 2 */;

if (null != global.__DiscordCreateDateFormatter) {
  let __DiscordCreateDateFormatter = global.__DiscordCreateDateFormatter;
} else {
  const _module = obj1322;
  if (_module.isAndroid()) {
    let DateFormatUtils = enforcingDefault;
  } else {
    DateFormatUtils = tmp2.DateFormatUtils;
  }
  let activateResult;
  if (DateFormatUtils != null) {
    const activate = DateFormatUtils.activate;
    if (activate != null) {
      activateResult = activate();
    }
  }
  if (true === activateResult) {
    if (null != global.__DiscordCreateDateFormatter) {
      __DiscordCreateDateFormatter = global.__DiscordCreateDateFormatter;
    }
  }
}
const result = obj132.fileFinishedImporting("modules/system_date_format/SystemDateFormatter.native.tsx");

export const makeFormatter = __DiscordCreateDateFormatter;
export const supportsSystemDateFormatter = function supportsSystemDateFormatter() {
  return obj1322.isIOS();
};