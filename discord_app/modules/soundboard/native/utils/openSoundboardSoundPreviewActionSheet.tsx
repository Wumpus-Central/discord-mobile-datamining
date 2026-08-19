// === Module 16294: openSoundboardSoundPreviewActionSheet ===

// Module 16294 (openSoundboardSoundPreviewActionSheet)
import obj132 from "obj132" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;

const result = obj132.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channelId, sound) {
  const obj = { channelId, sound };
  obj.openLazy(asyncRequireImpl(16295, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj);
};