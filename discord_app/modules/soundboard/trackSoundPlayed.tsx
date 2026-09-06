// === Module 7372: trackSoundPlayed ===

// Module 7372 (trackSoundPlayed)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import RunningGameStore from "RunningGameStore" /* 1915 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;

const DEFAULT_SOUND_GUILD_ID = fn(5014).DEFAULT_SOUND_GUILD_ID;
const AnalyticEvents = fn(1074).AnalyticEvents;
const PremiumConstants = fn(1373);
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
  const obj = { feature_name: constants.SOUNDBOARD_PLAY, feature_tier: tmp6 ? React7.PREMIUM_STANDARD : React7.FREE, guild_id: guildId, home_guild_id: guildId.guildId, location_stack, rtc_connection_id: rTCConnectionId, media_session_id: mediaSessionId, in_overlay, application_name: name, emoji_count: null, feature_selection: null, feature_selection_id: null, sound_type: null, sequence_number: null };
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