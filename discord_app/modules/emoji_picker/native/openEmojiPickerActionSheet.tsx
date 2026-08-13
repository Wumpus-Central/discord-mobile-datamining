// discord_app/modules/emoji_picker/native/openEmojiPickerActionSheet.tsx
import { EmojiInteractionPoint } from "set";
import { asyncRequireImpl } from "../../../../_runtime/02007_asyncRequireImpl.js";
import { ACTION_SHEET_HEIGHT_HALF } from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import { toggleGuildExpandedState } from "../../emojis/EmojiActionCreators.tsx";

const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const result = toggleGuildExpandedState.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  const obj = toggleGuildExpandedState;
  ACTION_SHEET_HEIGHT_HALF.openLazy(asyncRequireImpl(8688, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
};