// discord_app/modules/channel/shouldShowVoiceChannelChangeConfirmation.tsx
import set from "../game_console/GameConsoleStore.tsx";
import CHANNEL_SIDEBAR_WIDTH from "../user_settings/UnsyncedUserSettingsStore.tsx";
import fetchFingerprint from "../../stores/AuthenticationStore.tsx";
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";
import updateVoiceState from "../../stores/VoiceStateStore.tsx";

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