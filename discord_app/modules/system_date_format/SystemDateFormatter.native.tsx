// discord_app/modules/system_date_format/SystemDateFormatter.native.tsx
if (null != global.__DiscordCreateDateFormatter) {
  let __DiscordCreateDateFormatter = global.__DiscordCreateDateFormatter;
} else {
  const _module = require("set");
  if (_module.isAndroid()) {
    let DateFormatUtils = require("enforcing");
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
const result = require("enforcing").fileFinishedImporting("modules/system_date_format/SystemDateFormatter.native.tsx");

export const makeFormatter = __DiscordCreateDateFormatter;
export const supportsSystemDateFormatter = function supportsSystemDateFormatter() {
  return require(500) /* set */.isIOS();
};