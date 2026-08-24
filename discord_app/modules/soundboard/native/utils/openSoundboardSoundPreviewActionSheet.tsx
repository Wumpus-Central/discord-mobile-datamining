// discord_app/modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx
import set from "../../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../../_runtime/02008_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";

const result = set.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channelId, sound) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { channelId, sound };
  obj.openLazy(asyncRequireImpl(16389, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj);
};