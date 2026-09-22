// discord_app/modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx
import asyncRequireImpl from "../../../../../_runtime/01980_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  ActionSheetActionCreatorsDefault.openLazy(
    asyncRequireImpl(17551, dependencyMap.paths),
    "SoundboardSoundPreviewActionSheet",
    { channel, sound, soundGridLocation, analyticsSource },
  );
}
