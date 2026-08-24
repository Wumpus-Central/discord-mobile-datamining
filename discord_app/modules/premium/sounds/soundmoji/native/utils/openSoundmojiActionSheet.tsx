// === Module 11119: openSoundmojiActionSheet ===

// Module 11119 (openSoundmojiActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;

const result = set.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11120, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
    const obj2 = ACTION_SHEET_HEIGHT_HALFDefault;
  }
};