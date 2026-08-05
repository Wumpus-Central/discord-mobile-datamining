// discord_app/modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx
const result = require("SoundmojiActionSheet").fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    require("../../../../../action_sheet/native/ActionSheetActionCreators.tsx").openLazy(require("../../../../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(11253, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
    const obj2 = require("../../../../../action_sheet/native/ActionSheetActionCreators.tsx");
  }
};