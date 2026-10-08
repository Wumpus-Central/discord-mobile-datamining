// discord_app/modules/system_date_format/SystemDateFormatter.native.tsx
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import NativeDateFormatUtilsModule from "../../../discord_common/js/packages/rtn-codegen/js/NativeDateFormatUtilsModule.tsx";

require = fn;
let activateResult;
if (NativeDateFormatUtilsModule != null) {
  activateResult = NativeDateFormatUtilsModule.activate();
}
let prop;
if (true === activateResult) {
  prop = global.__DiscordCreateDateFormatter;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/system_date_format/SystemDateFormatter.native.tsx");

export const makeFormatter = prop;
export const supportsSystemDateFormatter = function supportsSystemDateFormatter() {
  return PlatformUtils.isIOS();
};
