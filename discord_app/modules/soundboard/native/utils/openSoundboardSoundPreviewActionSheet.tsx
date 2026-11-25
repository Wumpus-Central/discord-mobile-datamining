// === Module 18182: openSoundboardSoundPreviewActionSheet ===

// Module 18182 (openSoundboardSoundPreviewActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(18183, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", { channel, sound, analyticsSource }, "stack");
};