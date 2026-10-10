// === Module 7494: shouldShowVoiceChannelChangeConfirmation ===

// Module 7494 (shouldShowVoiceChannelChangeConfirmation)
import GameConsoleStore from "GameConsoleStore" /* 5111 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1207 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildStore from "GuildStore" /* 2087 */;
import VoiceStateStore from "VoiceStateStore" /* 5113 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/shouldShowVoiceChannelChangeConfirmation.tsx");

export const shouldShowVoiceChannelChangeConfirmation = function shouldShowVoiceChannelChangeConfirmation(id) {
  if (UnsyncedUserSettingsStore.disableVoiceChannelChangeAlert) {
    return false;
  } else {
    const remoteSessionId = GameConsoleStore.getRemoteSessionId();
    if (null != VoiceStateStore.getVoiceStateForSession(AuthenticationStore.getId(), remoteSessionId)) {
      return false;
    } else if (VoiceStateStore.isCurrentClientInVoiceChannel()) {
      if (VoiceStateStore.isInChannel(id.id)) {
        return false;
      } else {
        guild = GuildStore.getGuild(id.getGuildId());
        let afkChannelId;
        if (guild != null) {
          afkChannelId = guild.afkChannelId;
        }
        return null == afkChannelId || !VoiceStateStore.isInChannel(guild.afkChannelId);
      }
    } else {
      return false;
    }
  }
};