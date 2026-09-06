// === Module 12930: shouldShowVoiceChannelChangeConfirmation ===

// Module 12930 (shouldShowVoiceChannelChangeConfirmation)
import GameConsoleStore from "GameConsoleStore" /* 4577 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1185 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildStore from "GuildStore" /* 1979 */;
import VoiceStateStore from "VoiceStateStore" /* 4579 */;

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
        const guild = GuildStore.getGuild(id.getGuildId());
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