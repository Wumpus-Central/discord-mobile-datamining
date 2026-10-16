// === Module 12644: openSoundmojiActionSheet ===

// Module 12644 (openSoundmojiActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 12645 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12646, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
  }
  obj = SoundmojiRenderingExperiment;
};