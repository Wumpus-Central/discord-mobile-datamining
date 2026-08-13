// discord_app/modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx
import { asyncRequireImpl } from "../../../../../../../_runtime/02007_asyncRequireImpl.js";
import { ACTION_SHEET_HEIGHT_HALF } from "../../../../../action_sheet/native/ActionSheetActionCreators.tsx";
const result = require("SoundmojiActionSheet").fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    ACTION_SHEET_HEIGHT_HALF.openLazy(asyncRequireImpl(11391, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
    const obj2 = ACTION_SHEET_HEIGHT_HALF;
  }
};