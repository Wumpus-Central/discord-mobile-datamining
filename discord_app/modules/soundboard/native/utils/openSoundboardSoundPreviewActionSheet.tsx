// === Module 16420: openSoundboardSoundPreviewActionSheet ===

// Module 16420 (openSoundboardSoundPreviewActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4347 */;

const result = set.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channelId, sound) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { channelId, sound };
  obj.openLazy(asyncRequireImpl(16421, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj);
};