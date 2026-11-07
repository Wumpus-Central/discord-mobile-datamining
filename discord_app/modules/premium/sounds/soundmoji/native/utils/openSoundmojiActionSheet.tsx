// === Module 13657: openSoundmojiActionSheet ===

// Module 13657 (openSoundmojiActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 13658 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13659, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
  }
  obj = SoundmojiRenderingExperiment;
};