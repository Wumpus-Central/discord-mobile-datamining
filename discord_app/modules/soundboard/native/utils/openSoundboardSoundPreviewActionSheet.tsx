// === Module 18274: openSoundboardSoundPreviewActionSheet ===

// Module 18274 (openSoundboardSoundPreviewActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(18275, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", { channel, sound, soundGridLocation, analyticsSource });
};