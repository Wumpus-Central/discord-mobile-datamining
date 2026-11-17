// === Module 19224: openSoundboardSoundPreviewActionSheet ===

// Module 19224 (openSoundboardSoundPreviewActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5542 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(19225, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", { channel, sound, analyticsSource }, "stack");
};