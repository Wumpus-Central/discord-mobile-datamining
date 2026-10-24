// === Module 5652: SystemDateFormatter ===

// Module 5652 (SystemDateFormatter)
import PlatformUtils from "PlatformUtils" /* 1384 */;
import NativeDateFormatUtilsModule from "NativeDateFormatUtilsModule" /* 5653 */;

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