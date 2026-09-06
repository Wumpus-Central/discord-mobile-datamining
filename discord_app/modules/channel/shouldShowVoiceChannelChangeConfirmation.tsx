// discord_app/modules/channel/shouldShowVoiceChannelChangeConfirmation.tsx
import GameConsoleStore from "../game_console/GameConsoleStore.tsx";
import UnsyncedUserSettingsStore from "../user_settings/UnsyncedUserSettingsStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";

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
