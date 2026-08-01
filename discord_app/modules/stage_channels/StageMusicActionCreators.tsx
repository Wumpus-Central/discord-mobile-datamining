// === Module 10723: updateStageMusicMuted ===

// Module 10723 (updateStageMusicMuted)
const result = require("set").fileFinishedImporting("modules/stage_channels/StageMusicActionCreators.tsx");

export const updateStageMusicMuted = function updateStageMusicMuted(muted) {
  let obj = importDefault(709);
  obj = { type: "STAGE_MUSIC_MUTE", muted };
  obj.dispatch(obj);
};
export const updateStageMusicShouldPlay = function updateStageMusicShouldPlay(play) {
  let obj = importDefault(709);
  obj = { type: "STAGE_MUSIC_PLAY", play };
  obj.dispatch(obj);
};