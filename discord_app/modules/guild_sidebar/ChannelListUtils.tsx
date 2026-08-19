// === Module 4980: hasStream ===

// Module 4980 (hasStream)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/guild_sidebar/ChannelListUtils.tsx");

export const hasStream = function hasStream(voiceStates) {
  if (null == voiceStates) {
    return false;
  } else {
    let num = 0;
    if (0 < voiceStates.length) {
      while (!voiceStates[num].voiceState.selfStream) {
        num = num + 1;
      }
      return true;
    }
    return false;
  }
};