// discord_app/modules/emoji_picker/native/openEmojiPickerActionSheet.tsx
import EmojiConstants from "../../emojis/EmojiConstants.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import emojis_EmojiActionCreators from "../../emojis/EmojiActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const EmojiInteractionPoint = EmojiConstants.EmojiInteractionPoint;
const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = size.fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const result = emojis_EmojiActionCreators.initiateEmojiInteraction(
    EmojiInteractionPoint.EmojiPickerActionSheetOpened,
  );
  ActionSheetActionCreatorsDefault.openLazy(
    asyncRequireImpl(11122, dependencyMap.paths),
    EmojiPickerActionSheet,
    arg0,
    stack,
  );
};
