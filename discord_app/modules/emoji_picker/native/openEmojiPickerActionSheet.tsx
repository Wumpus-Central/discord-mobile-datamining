// discord_app/modules/emoji_picker/native/openEmojiPickerActionSheet.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import set from "../../emojis/EmojiConstants.tsx";
import asyncRequireImpl from "../../../../_runtime/02007_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import toggleGuildExpandedState from "../../emojis/EmojiActionCreators.tsx";

const EmojiInteractionPoint = set.EmojiInteractionPoint;
const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = obj132.fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const result = toggleGuildExpandedState.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(9300, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
};