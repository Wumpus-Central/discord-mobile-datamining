// === Module 12827: shouldShowVoiceChannelChangeConfirmation ===

// Module 12827 (shouldShowVoiceChannelChangeConfirmation)
import set from "set" /* 4540 */;
import CHANNEL_SIDEBAR_WIDTH from "CHANNEL_SIDEBAR_WIDTH" /* 1304 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import updateVoiceState from "updateVoiceState" /* 4542 */;

const result = require("obj132").fileFinishedImporting("modules/channel/shouldShowVoiceChannelChangeConfirmation.tsx");

export const shouldShowVoiceChannelChangeConfirmation = function shouldShowVoiceChannelChangeConfirmation(id) {
  if (voiceStateForSession.disableVoiceChannelChangeAlert) {
    return false;
  } else {
    remoteSessionId = remoteSessionId.getRemoteSessionId();
    if (null != voiceStateForSession.getVoiceStateForSession(id.getId(), remoteSessionId)) {
      return false;
    } else if (voiceStateForSession.isCurrentClientInVoiceChannel()) {
      if (voiceStateForSession.isInChannel(id.id)) {
        return false;
      } else {
        guild = guild.getGuild(id.getGuildId());
        let afkChannelId;
        if (guild != null) {
          afkChannelId = guild.afkChannelId;
        }
        return null == afkChannelId || !voiceStateForSession.isInChannel(guild.afkChannelId);
      }
    } else {
      return false;
    }
  }
};