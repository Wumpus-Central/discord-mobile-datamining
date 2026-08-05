// discord_app/modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx
const result = require("asyncRequireImpl").fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channelId, sound) {
  let obj = require("../../../action_sheet/native/ActionSheetActionCreators.tsx");
  obj = { channelId, sound };
  obj.openLazy(require("../../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(16020, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj);
};