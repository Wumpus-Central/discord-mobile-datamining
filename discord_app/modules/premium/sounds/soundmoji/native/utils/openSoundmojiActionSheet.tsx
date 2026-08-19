// === Module 11119: openSoundmojiActionSheet ===

// Module 11119 (openSoundmojiActionSheet)
import obj132 from "obj132" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import getSoundmojiRenderingExperiment from "getSoundmojiRenderingExperiment" /* 6821 */;

const result = obj132.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11120, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
  }
  obj = getSoundmojiRenderingExperiment;
};