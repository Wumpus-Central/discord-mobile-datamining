// === Module 17521: voiceChannelAppListState ===

// Module 17521 (voiceChannelAppListState)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/voice_channel_apps/voiceChannelAppListState.tsx");

export const voiceChannelAppListState = function voiceChannelAppListState(hasRows) {
  let str = "rows";
  if (!hasRows.hasRows) {
    let str2 = "failed";
    if (!tmp) {
      let str3 = "empty";
      if ("settled" !== tmp2) {
        str3 = "loading";
      }
      str2 = str3;
    }
    str = str2;
  }
  return str;
};