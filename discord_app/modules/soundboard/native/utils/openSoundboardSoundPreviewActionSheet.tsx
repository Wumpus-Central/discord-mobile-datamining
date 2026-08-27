// === Module 16569: openSoundboardSoundPreviewActionSheet ===

// Module 16569 (openSoundboardSoundPreviewActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4412 */;

const result = set.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, soundGridLocation) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { channel, sound, soundGridLocation };
  obj.openLazy(asyncRequireImpl(16570, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj);
};