// === Module 13883: muteCustomJoinSound ===

// Module 13883 (muteCustomJoinSound)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/muteCustomJoinSound.tsx");

export default function muteCustomJoinSound(channelId) {
  DispatcherDefault.dispatch({ type: "SOUNDBOARD_MUTE_JOIN_SOUND", channelId });
};