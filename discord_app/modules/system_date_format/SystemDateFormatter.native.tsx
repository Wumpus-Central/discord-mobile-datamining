// discord_app/modules/system_date_format/SystemDateFormatter.native.tsx
import set from "set" /* 2 */;
import set2 from "set" /* 500 */;
import enforcingDefault from "enforcing" /* 4081 */;

if (null != global.__DiscordCreateDateFormatter) {
  let __DiscordCreateDateFormatter = global.__DiscordCreateDateFormatter;
} else {
  const _module = set2;
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
const result = set.fileFinishedImporting("modules/system_date_format/SystemDateFormatter.native.tsx");

export const makeFormatter = __DiscordCreateDateFormatter;
export const supportsSystemDateFormatter = function supportsSystemDateFormatter() {
  return set2.isIOS();
};