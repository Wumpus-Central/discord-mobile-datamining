// discord_app/modules/emoji_picker/native/openEmojiPickerActionSheet.tsx
import set from "../../../../_runtime/00002_set.js";
import set2 from "../../emojis/EmojiConstants.tsx";
import asyncRequireImpl from "../../../../_runtime/02010_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import toggleGuildExpandedState from "../../emojis/EmojiActionCreators.tsx";

const EmojiInteractionPoint = set2.EmojiInteractionPoint;
const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = set.fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const result = toggleGuildExpandedState.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  const obj = toggleGuildExpandedState;
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(9039, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
};