// discord_app/modules/system_date_format/SystemDateFormatter.native.tsx
import obj1322 from "../../utils/PlatformUtils.tsx";
import enforcingDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeDateFormatUtilsModule.tsx";
import obj132 from "../../../_runtime/00002_obj132.js";

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