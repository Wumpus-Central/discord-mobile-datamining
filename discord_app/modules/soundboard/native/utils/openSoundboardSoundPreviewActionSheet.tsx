const result = require("asyncRequireImpl").fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channelId, sound) {
  let obj = importDefault(4253);
  obj = { channelId, sound };
  obj.openLazy(require(1959) /* asyncRequireImpl */(16020, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj);
};