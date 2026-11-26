// === Module 18241: openSoundboardSoundPreviewActionSheet ===

// Module 18241 (openSoundboardSoundPreviewActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(18242, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", { channel, sound, analyticsSource }, "stack");
};