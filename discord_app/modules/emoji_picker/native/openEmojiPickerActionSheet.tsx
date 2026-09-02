// === Module 9112: EMOJI_PICKER_ACTION_SHEET_KEY ===

// Module 9112 (EMOJI_PICKER_ACTION_SHEET_KEY)
import set from "set" /* 2 */;
import set2 from "set" /* 1924 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;
import toggleGuildExpandedState from "toggleGuildExpandedState" /* 9113 */;

const EmojiInteractionPoint = set2.EmojiInteractionPoint;
const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = set.fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const result = toggleGuildExpandedState.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  const obj = toggleGuildExpandedState;
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(9114, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
};