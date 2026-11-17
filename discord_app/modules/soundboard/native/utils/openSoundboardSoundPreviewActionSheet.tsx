// === Module 19269: openSoundboardSoundPreviewActionSheet ===

// Module 19269 (openSoundboardSoundPreviewActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(19270, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", { channel, sound, analyticsSource }, "stack");
};