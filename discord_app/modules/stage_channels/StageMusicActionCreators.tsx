// === Module 11629: StageMusicActionCreators ===

// Module 11629 (StageMusicActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/stage_channels/StageMusicActionCreators.tsx");

export function updateStageMusicMuted(muted) {
  DispatcherDefault.dispatch({ type: "STAGE_MUSIC_MUTE", muted });
}
export function updateStageMusicShouldPlay(play) {
  DispatcherDefault.dispatch({ type: "STAGE_MUSIC_PLAY", play });
}