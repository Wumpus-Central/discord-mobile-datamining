// === Module 12513: updateStageMusicMuted ===

// Module 12513 (updateStageMusicMuted)
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = obj132.fileFinishedImporting("modules/stage_channels/StageMusicActionCreators.tsx");

export const updateStageMusicMuted = function updateStageMusicMuted(muted) {
  const obj = { type: "STAGE_MUSIC_MUTE", muted };
  obj.dispatch(obj);
};
export const updateStageMusicShouldPlay = function updateStageMusicShouldPlay(play) {
  const obj = { type: "STAGE_MUSIC_PLAY", play };
  obj.dispatch(obj);
};