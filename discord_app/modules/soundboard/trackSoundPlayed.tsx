// discord_app/modules/soundboard/trackSoundPlayed.tsx
import initialize from "initialize";
import ensureGuildLoaded from "ensureGuildLoaded";
import createRTCConnection from "createRTCConnection";
import handleConnectionOpen from "handleConnectionOpen";
import { DEFAULT_SOUND_GUILD_ID } from "MAX_LENGTH_SOUND_NAME";
import { AnalyticEvents } from "ME";
import GuildFeatures from "GuildFeatures";

let c9;
let metroImportAll;
({ AnalyticsPremiumFeatureNames: metroImportAll, AnalyticsPremiumFeatureTiers: c9 } = GuildFeatures);
const result = require("createRTCConnection").fileFinishedImporting("modules/soundboard/trackSoundPlayed.tsx");

export default function trackSoundPlayed(location_stack, in_overlay, guildId) {
  channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
  guildId = undefined;
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  const mediaSessionId = store.getMediaSessionId();
  const rTCConnectionId = store.getRTCConnectionId();
  currentGameForAnalytics = currentGameForAnalytics.getCurrentGameForAnalytics();
  let name;
  if (currentGameForAnalytics != null) {
    name = currentGameForAnalytics.name;
  }
  let tmp6 = guildId !== guildId.guildId;
  if (tmp6) {
    tmp6 = guildId.guildId !== DEFAULT_SOUND_GUILD_ID;
  }
  let str = "default";
  if (guildId.guildId !== DEFAULT_SOUND_GUILD_ID) {
    let str2 = "custom";
    if (tmp6) {
      str2 = "custom-external";
    }
    str = str2;
  }
  const obj = { feature_name: constants.SOUNDBOARD_PLAY, feature_tier: tmp6 ? tmp8.PREMIUM_STANDARD : tmp8.FREE, guild_id: guildId, home_guild_id: guildId.guildId, location_stack, rtc_connection_id: rTCConnectionId, media_session_id: mediaSessionId, in_overlay, application_name: name, emoji_count: null, feature_selection: null, feature_selection_id: null, sound_type: null, sequence_number: null };
  if (null != guildId.emojiId) {
    let num = 1;
  } else {
    num = 0;
  }
  obj[9] = num;
  obj[10] = str;
  obj[11] = guildId.soundId;
  obj[12] = arg3;
  let sum = null;
  if (null != arg4) {
    sum = arg4 + 1;
  }
  obj[13] = sum;
  importDefault(698).track(AnalyticEvents.PREMIUM_FEATURE_USAGE, obj);
};