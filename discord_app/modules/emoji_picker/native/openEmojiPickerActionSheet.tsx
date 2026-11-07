// === Module 10061: openEmojiPickerActionSheet ===

// Module 10061 (openEmojiPickerActionSheet)
import EmojiConstants from "EmojiConstants" /* 1388 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import emojis_EmojiActionCreators from "emojis/EmojiActionCreators" /* 10062 */;
import size from "module_2" /* 2 */;

const EmojiInteractionPoint = EmojiConstants.EmojiInteractionPoint;
const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = size.fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export function openEmojiPickerActionSheet(arg0, stack) {
  const result = emojis_EmojiActionCreators.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10063, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
}