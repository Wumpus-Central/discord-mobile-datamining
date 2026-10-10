// === Module 9426: openEmojiPickerActionSheet ===

// Module 9426 (openEmojiPickerActionSheet)
import EmojiConstants from "EmojiConstants" /* 1393 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import emojis_EmojiActionCreators from "emojis/EmojiActionCreators" /* 9427 */;
import size from "module_2" /* 2 */;

const EmojiInteractionPoint = EmojiConstants.EmojiInteractionPoint;
const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = size.fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const result = emojis_EmojiActionCreators.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(9428, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
};