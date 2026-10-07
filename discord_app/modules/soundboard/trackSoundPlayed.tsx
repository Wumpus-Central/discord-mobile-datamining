// === Module 6885: trackSoundPlayed ===

// Module 6885 (trackSoundPlayed)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import RunningGameStore from "RunningGameStore" /* 2006 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4919 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;

const DEFAULT_SOUND_GUILD_ID = fn(5689).DEFAULT_SOUND_GUILD_ID;
const AnalyticEvents = fn(1085).AnalyticEvents;
const PremiumConstants = fn(1379);
({ AnalyticsPremiumFeatureNames: closure_8, AnalyticsPremiumFeatureTiers: closure_9 } = PremiumConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/soundboard/trackSoundPlayed.tsx");

export default function trackSoundPlayed(location_stack, in_overlay, guildId, sound_type, arg4) {
  const channel = ChannelStore.getChannel(SelectedChannelStore.getVoiceChannelId());
  guildId = undefined;
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  const mediaSessionId = RTCConnectionStore.getMediaSessionId();
  const rTCConnectionId = RTCConnectionStore.getRTCConnectionId();
  const currentGameForAnalytics = RunningGameStore.getCurrentGameForAnalytics();
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
  const obj = { feature_name: constants.SOUNDBOARD_PLAY, feature_tier: tmp6 ? options.PREMIUM_STANDARD : options.FREE, guild_id: guildId, home_guild_id: guildId.guildId, location_stack, rtc_connection_id: rTCConnectionId, media_session_id: mediaSessionId, in_overlay, application_name: name, emoji_count: null, feature_selection: null, feature_selection_id: null, sound_type: null, sequence_number: null };
  if (null != guildId.emojiId) {
    let num = 1;
  } else {
    num = 0;
  }
  obj.emoji_count = num;
  obj.feature_selection = str;
  obj.feature_selection_id = guildId.soundId;
  obj.sound_type = sound_type;
  let sum = null;
  if (null != arg4) {
    sum = arg4 + 1;
  }
  obj.sequence_number = sum;
  AnalyticsUtilsDefault.track(AnalyticEvents.PREMIUM_FEATURE_USAGE, obj);
};