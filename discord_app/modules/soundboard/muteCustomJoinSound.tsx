// === Module 15650: muteCustomJoinSound ===

// Module 15650 (muteCustomJoinSound)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/muteCustomJoinSound.tsx");

export default function muteCustomJoinSound(channelId) {
  DispatcherDefault.dispatch({ type: "SOUNDBOARD_MUTE_JOIN_SOUND", channelId });
};