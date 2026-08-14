// discord_app/modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx
import { asyncRequireImpl } from "../../../../../_runtime/02007_asyncRequireImpl.js";
import { ACTION_SHEET_HEIGHT_HALF } from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channelId, sound) {
  let obj = ACTION_SHEET_HEIGHT_HALF;
  obj = { channelId, sound };
  obj.openLazy(asyncRequireImpl(16245, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj);
};