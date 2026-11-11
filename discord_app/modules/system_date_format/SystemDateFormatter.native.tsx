// === Module 5941: SystemDateFormatter ===

// Module 5941 (SystemDateFormatter)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import NativeDateFormatUtilsModule from "NativeDateFormatUtilsModule" /* 5942 */;

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
export function supportsSystemDateFormatter() {
  return PlatformUtils.isIOS();
}