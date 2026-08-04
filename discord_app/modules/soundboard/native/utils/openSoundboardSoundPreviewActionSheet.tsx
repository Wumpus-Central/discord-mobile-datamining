// discord_app/modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx
const result = require("asyncRequireImpl").fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channelId, sound) {
  let obj = importDefault(4161);
  obj = { channelId, sound };
  obj.openLazy(require(1959) /* asyncRequireImpl */(15924, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj);
};