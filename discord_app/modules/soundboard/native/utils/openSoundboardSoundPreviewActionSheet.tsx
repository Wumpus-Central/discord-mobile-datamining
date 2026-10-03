// === Module 17218: openSoundboardSoundPreviewActionSheet ===

// Module 17218 (openSoundboardSoundPreviewActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17219, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", { channel, sound, soundGridLocation, analyticsSource });
};