// discord_app/modules/soundboard/trackSoundPlayed.tsx
import Constants from "../../Constants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import SoundboardConstants from "SoundboardConstants.tsx";
import RunningGameStore from "../game_detection/RunningGameStore.native.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import PremiumConstants from "../premium/PremiumConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c9;
let metroImportAll;
const DEFAULT_SOUND_GUILD_ID = SoundboardConstants.DEFAULT_SOUND_GUILD_ID;
const AnalyticEvents = Constants.AnalyticEvents;
({ AnalyticsPremiumFeatureNames: metroImportAll, AnalyticsPremiumFeatureTiers: c9 } = PremiumConstants);
const result = size.fileFinishedImporting("modules/soundboard/trackSoundPlayed.tsx");

export default function trackSoundPlayed(location_stack, in_overlay, guildId, sound_type, arg4) {
  let num;
  let sum;
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
  let str = "default";
  if (guildId.guildId !== DEFAULT_SOUND_GUILD_ID) {
    let str2 = "custom";
    if (guildId !== guildId.guildId && guildId.guildId !== DEFAULT_SOUND_GUILD_ID) {
      str2 = "custom-external";
    }
    str = str2;
  }
  const obj = {
    feature_name: metroImportAll.SOUNDBOARD_PLAY,
    feature_tier:
      guildId !== guildId.guildId && guildId.guildId !== DEFAULT_SOUND_GUILD_ID ? React4.PREMIUM_STANDARD : React4.FREE,
    guild_id: guildId,
    home_guild_id: guildId.guildId,
    location_stack,
    rtc_connection_id: rTCConnectionId,
    media_session_id: mediaSessionId,
    in_overlay,
    application_name: name,
    emoji_count: num,
    feature_selection: str,
    feature_selection_id: guildId.soundId,
    sound_type,
    sequence_number: sum,
  };
  const track = AnalyticsUtilsDefault.track;
  const PREMIUM_FEATURE_USAGE = AnalyticEvents.PREMIUM_FEATURE_USAGE;
  AnalyticsUtilsDefault;
  if (null != guildId.emojiId) {
    num = 1;
  } else {
    num = 0;
  }
  sum = null;
  if (null != arg4) {
    sum = arg4 + 1;
  }
  track(PREMIUM_FEATURE_USAGE, obj);
}
