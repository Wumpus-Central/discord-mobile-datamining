// === Module 4555: SystemDateFormatter ===

// Module 4555 (SystemDateFormatter)
import PlatformUtils from "PlatformUtils" /* 1369 */;
import react_nativeDefault from "react-native" /* 4556 */;
import size from "module_2" /* 2 */;

let __DiscordCreateDateFormatter;
if (null != global.__DiscordCreateDateFormatter) {
  __DiscordCreateDateFormatter = global.__DiscordCreateDateFormatter;
} else {
  let DateFormatUtils;
  const _module = PlatformUtils;
  if (_module.isAndroid()) {
    DateFormatUtils = react_nativeDefault;
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
const result = size.fileFinishedImporting("modules/system_date_format/SystemDateFormatter.native.tsx");

export const makeFormatter = __DiscordCreateDateFormatter;
export const supportsSystemDateFormatter = function supportsSystemDateFormatter() {
  const obj = PlatformUtils;
  return obj.isIOS();
};