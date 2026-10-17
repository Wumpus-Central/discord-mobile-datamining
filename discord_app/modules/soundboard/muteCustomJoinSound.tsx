// === Module 14836: muteCustomJoinSound ===

// Module 14836 (muteCustomJoinSound)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/muteCustomJoinSound.tsx");

export default function muteCustomJoinSound(channelId) {
  DispatcherDefault.dispatch({ type: "SOUNDBOARD_MUTE_JOIN_SOUND", channelId });
};