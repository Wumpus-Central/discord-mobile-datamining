// discord_app/modules/channel/shouldShowVoiceChannelChangeConfirmation.tsx
import closure_0 from "../game_console/GameConsoleStore.tsx";
import closure_1 from "../user_settings/UnsyncedUserSettingsStore.tsx";
import closure_2 from "../../stores/AuthenticationStore.tsx";
import closure_3 from "../../stores/GuildStore.tsx";
import closure_4 from "../../stores/VoiceStateStore.tsx";

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
