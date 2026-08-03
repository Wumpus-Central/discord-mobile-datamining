// === Module 9506: EMOJI_PICKER_ACTION_SHEET_KEY ===

// Module 9506 (EMOJI_PICKER_ACTION_SHEET_KEY)
import { EmojiInteractionPoint } from "set";

const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const result = require(9507) /* toggleGuildExpandedState */.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  const obj = require(9507) /* toggleGuildExpandedState */;
  importDefault(4223).openLazy(require(1959) /* asyncRequireImpl */(9508, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
};