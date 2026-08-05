// discord_app/modules/emoji_picker/native/openEmojiPickerActionSheet.tsx
import { EmojiInteractionPoint } from "set";

const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const result = require("../../emojis/EmojiActionCreators.tsx") /* toggleGuildExpandedState */.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  const obj = require("../../emojis/EmojiActionCreators.tsx") /* toggleGuildExpandedState */;
  require("../../action_sheet/native/ActionSheetActionCreators.tsx").openLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(8561, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
};