// discord_app/modules/emoji_picker/native/openEmojiPickerActionSheet.tsx
import { EmojiInteractionPoint } from "set";

const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const result = require(8560) /* toggleGuildExpandedState */.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  const obj = require(8560) /* toggleGuildExpandedState */;
  importDefault(4253).openLazy(require(1959) /* asyncRequireImpl */(8561, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
};