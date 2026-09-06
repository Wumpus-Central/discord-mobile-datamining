// === Module 12930: shouldShowVoiceChannelChangeConfirmation ===

// Module 12930 (shouldShowVoiceChannelChangeConfirmation)
import closure_0 from "set" /* 4577 */;
import closure_1 from "CHANNEL_SIDEBAR_WIDTH" /* 1185 */;
import closure_2 from "fetchFingerprint" /* 502 */;
import closure_3 from "createGuildRecordFromRust" /* 1979 */;
import closure_4 from "updateVoiceState" /* 4579 */;

const result = require("set").fileFinishedImporting("modules/channel/shouldShowVoiceChannelChangeConfirmation.tsx");

export const shouldShowVoiceChannelChangeConfirmation = function shouldShowVoiceChannelChangeConfirmation(id) {
  if (obj.disableVoiceChannelChangeAlert) {
    return false;
  } else {
    remoteSessionId = remoteSessionId.getRemoteSessionId();
    if (null != voiceStateForSession.getVoiceStateForSession(id.getId(), remoteSessionId)) {
      return false;
    } else if (obj.isCurrentClientInVoiceChannel()) {
      if (obj.isInChannel(id.id)) {
        return false;
      } else {
        guild = guild.getGuild(id.getGuildId());
        let afkChannelId;
        if (guild != null) {
          afkChannelId = guild.afkChannelId;
        }
        return null == afkChannelId || !obj.isInChannel(guild.afkChannelId);
      }
    } else {
      return false;
    }
  }
};