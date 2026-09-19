// === Module 11386: openEmojiPickerActionSheet ===

// Module 11386 (openEmojiPickerActionSheet)
import EmojiConstants from "EmojiConstants" /* 1375 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import emojis_EmojiActionCreators from "emojis/EmojiActionCreators" /* 10591 */;
import size from "module_2" /* 2 */;

const EmojiInteractionPoint = EmojiConstants.EmojiInteractionPoint;
const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = size.fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const result = emojis_EmojiActionCreators.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11387, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
};