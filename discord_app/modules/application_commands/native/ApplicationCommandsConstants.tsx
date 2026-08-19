// === Module 10177: AUTOCOMPLETE_ROW_HEIGHT ===

// Module 10177 (AUTOCOMPLETE_ROW_HEIGHT)
import obj132 from "obj132" /* 500 */;

let num = 56;
if (obj132.isAndroid()) {
  num = 64;
}
const result = obj132.fileFinishedImporting("modules/application_commands/native/ApplicationCommandsConstants.tsx");

export const AUTOCOMPLETE_ROW_HEIGHT = 48;
export const AUTOCOMPLETE_EMOJI_ROW_HEIGHT = num;