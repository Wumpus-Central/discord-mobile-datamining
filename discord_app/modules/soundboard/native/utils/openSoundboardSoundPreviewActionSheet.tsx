// === Module 18535: openSoundboardSoundPreviewActionSheet ===

// Module 18535 (openSoundboardSoundPreviewActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(18536, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", { channel, sound, soundGridLocation, analyticsSource });
};