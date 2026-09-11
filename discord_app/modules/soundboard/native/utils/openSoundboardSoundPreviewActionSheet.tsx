// === Module 17157: openSoundboardSoundPreviewActionSheet ===

// Module 17157 (openSoundboardSoundPreviewActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  const obj = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequireImpl(17158, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj);
};