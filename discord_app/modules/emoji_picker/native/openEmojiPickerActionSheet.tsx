// === Module 9347: EMOJI_PICKER_ACTION_SHEET_KEY ===

// Module 9347 (EMOJI_PICKER_ACTION_SHEET_KEY)
import { EmojiInteractionPoint } from "set";

const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const result = require(9348) /* toggleGuildExpandedState */.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  const obj = require(9348) /* toggleGuildExpandedState */;
  importDefault(4161).openLazy(require(1959) /* asyncRequireImpl */(9349, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
};