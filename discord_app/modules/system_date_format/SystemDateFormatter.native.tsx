// discord_app/modules/system_date_format/SystemDateFormatter.native.tsx
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import react_nativeDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeDateFormatUtilsModule.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
