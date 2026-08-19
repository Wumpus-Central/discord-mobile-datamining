// discord_app/modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import asyncRequireImpl from "../../../../../_runtime/02007_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";

const result = obj132.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channelId, sound) {
  const obj = { channelId, sound };
  obj.openLazy(asyncRequireImpl(16295, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj);
};