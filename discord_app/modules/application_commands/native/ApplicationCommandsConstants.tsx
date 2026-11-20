// === Module 11141: ApplicationCommandsConstants ===

// Module 11141 (ApplicationCommandsConstants)
import PlatformUtils from "PlatformUtils" /* 1378 */;
import size from "module_2" /* 2 */;

let num = 56;
if (PlatformUtils.isAndroid()) {
  num = 64;
}
const result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandsConstants.tsx");

export const AUTOCOMPLETE_ROW_HEIGHT = 48;
export const AUTOCOMPLETE_EMOJI_ROW_HEIGHT = num;