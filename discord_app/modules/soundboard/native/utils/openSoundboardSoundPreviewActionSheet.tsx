// === Module 16388: openSoundboardSoundPreviewActionSheet ===

// Module 16388 (openSoundboardSoundPreviewActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4346 */;

const result = set.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channelId, sound) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { channelId, sound };
  obj.openLazy(asyncRequireImpl(16389, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj);
};