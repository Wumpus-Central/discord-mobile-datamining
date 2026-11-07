// === Module 19544: openSoundboardSoundPreviewActionSheet ===

// Module 19544 (openSoundboardSoundPreviewActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(19545, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", { channel, sound, soundGridLocation, analyticsSource });
};