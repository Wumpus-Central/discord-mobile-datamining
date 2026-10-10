// === Module 17776: openSoundboardSoundPreviewActionSheet ===

// Module 17776 (openSoundboardSoundPreviewActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17777, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", { channel, sound, soundGridLocation, analyticsSource });
};