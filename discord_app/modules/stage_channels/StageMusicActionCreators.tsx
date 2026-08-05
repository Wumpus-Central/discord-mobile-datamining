// discord_app/modules/stage_channels/StageMusicActionCreators.tsx
const result = require("set").fileFinishedImporting("modules/stage_channels/StageMusicActionCreators.tsx");

export const updateStageMusicMuted = function updateStageMusicMuted(muted) {
  let obj = require("../../Dispatcher.tsx");
  obj = { type: "STAGE_MUSIC_MUTE", muted };
  obj.dispatch(obj);
};
export const updateStageMusicShouldPlay = function updateStageMusicShouldPlay(play) {
  let obj = require("../../Dispatcher.tsx");
  obj = { type: "STAGE_MUSIC_PLAY", play };
  obj.dispatch(obj);
};