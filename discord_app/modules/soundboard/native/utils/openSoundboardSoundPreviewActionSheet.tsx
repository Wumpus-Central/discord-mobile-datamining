// === Module 18248: openSoundboardSoundPreviewActionSheet ===

// Module 18248 (openSoundboardSoundPreviewActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(18249, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", { channel, sound, analyticsSource }, "stack");
};