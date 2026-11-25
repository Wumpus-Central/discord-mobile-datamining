// === Module 12562: openSoundmojiActionSheet ===

// Module 12562 (openSoundmojiActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 7055 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12563, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
  }
  obj = SoundmojiRenderingExperiment;
};