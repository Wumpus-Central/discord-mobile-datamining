// === Module 11424: openSoundmojiActionSheet ===

// Module 11424 (openSoundmojiActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4412 */;

const result = set.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11425, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
    const obj2 = ACTION_SHEET_HEIGHT_HALFDefault;
  }
};