// === Module 11619: openSoundmojiActionSheet ===

// Module 11619 (openSoundmojiActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 11620 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11621, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
  }
  obj = SoundmojiRenderingExperiment;
};