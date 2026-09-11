// === Module 12026: openSoundmojiActionSheet ===

// Module 12026 (openSoundmojiActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 5068 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12027, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
  }
  obj = SoundmojiRenderingExperiment;
};