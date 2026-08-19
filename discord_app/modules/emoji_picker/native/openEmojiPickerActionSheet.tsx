// === Module 9298: EMOJI_PICKER_ACTION_SHEET_KEY ===

// Module 9298 (EMOJI_PICKER_ACTION_SHEET_KEY)
import obj132 from "obj132" /* 2 */;
import set from "set" /* 1925 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import toggleGuildExpandedState from "toggleGuildExpandedState" /* 9299 */;

const EmojiInteractionPoint = set.EmojiInteractionPoint;
const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = obj132.fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const result = toggleGuildExpandedState.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(9300, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
};