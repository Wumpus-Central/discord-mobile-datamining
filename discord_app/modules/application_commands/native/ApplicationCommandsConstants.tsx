// === Module 10277: AUTOCOMPLETE_ROW_HEIGHT ===

// Module 10277 (AUTOCOMPLETE_ROW_HEIGHT)
import set from "set" /* 500 */;

let num = 56;
if (set.isAndroid()) {
  num = 64;
}
const result = set.fileFinishedImporting("modules/application_commands/native/ApplicationCommandsConstants.tsx");

export const AUTOCOMPLETE_ROW_HEIGHT = 48;
export const AUTOCOMPLETE_EMOJI_ROW_HEIGHT = num;