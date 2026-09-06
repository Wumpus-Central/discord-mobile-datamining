// === Module 17313: AppAnalyticsManager ===

// Module 17313 (AppAnalyticsManager)
import DurationsDefault from "Durations" /* 1090 */;
import Timers from "Timers" /* 4447 */;
import RobloxSubgameUtils from "RobloxSubgameUtils" /* 4690 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4740 */;
import getGamePlatformDefault from "getGamePlatform" /* 16742 */;
import RunningGameStore from "RunningGameStore" /* 1915 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5279 */;
import SpeakingStore from "SpeakingStore" /* 5419 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4584 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

require = fn;
const Constants = fn(1074);
({ AnalyticEvents: closure_9, ActivityTypes: c10 } = Constants);
const MINUTE = DurationsDefault.Millis.MINUTE;
class AppAnalyticsManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult._currentUserSpeaking = false;
    applyArgumentsResult._anyoneElseSpeaking = false;
    applyArgumentsResult._handleRTCConnectionStoreChanged = function _handleRTCConnectionStoreChanged() {
      const channelId = RTCConnectionStore.getChannelId();
      if (applyArgumentsResult._voiceChannelId !== channelId) {
        obj._voiceChannelId = channelId;
        if (null != channelId) {
          if (null == obj._reportInterval) {
            const interval = new Timers.Interval();
            obj._reportInterval = interval;
            const _reportInterval = obj._reportInterval;
            _reportInterval.start(MINUTE, () => {
              closure_1_0._trackStartSpeaking();
              closure_1_0._trackStartListening();
            });
          }
        } else {
          obj._reset();
        }
      }
    };
    applyArgumentsResult._handleSpeakingStoreChanged = function _handleSpeakingStoreChanged() {
      const result = SpeakingStore.isCurrentUserSpeaking();
      if (applyArgumentsResult._currentUserSpeaking !== result) {
        obj2._currentUserSpeaking = result;
        obj2._trackStartSpeaking();
      }
      const isAnyoneElseSpeakingResult = SpeakingStore.isAnyoneElseSpeaking();
      if (applyArgumentsResult._anyoneElseSpeaking !== isAnyoneElseSpeakingResult) {
        obj2._anyoneElseSpeaking = isAnyoneElseSpeakingResult;
        obj2._trackStartListening();
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = AppAnalyticsManager.prototype;
prototype["_initialize"] = function _initialize() {
  const self = this;
  const result = new Map().set(SpeakingStore, () => self._handleSpeakingStoreChanged());
  this.stores = result.set(RTCConnectionStore, () => self._handleRTCConnectionStoreChanged());
  this._reset();
};
prototype["_reset"] = function _reset() {
  const self = this;
  this._currentUserSpeaking = false;
  this._anyoneElseSpeaking = false;
  if (null != this._reportInterval) {
    const _reportInterval = self._reportInterval;
    _reportInterval.stop();
    self._reportInterval = null;
  }
};
prototype["_trackStartSpeaking"] = function _trackStartSpeaking() {
  const self = this;
  if (this._currentUserSpeaking) {
    const channelId = RTCConnectionStore.getChannelId();
    const guildId = RTCConnectionStore.getGuildId();
    const obj = { mode: MediaEngineStore.getMode(), priority: SpeakingStore.isCurrentUserPrioritySpeaking(), channel: channelId, server: guildId, channel_id: channelId, guild_id: guildId, rtc_connection_id: RTCConnectionStore.getRTCConnectionId(), media_session_id: RTCConnectionStore.getMediaSessionId(), voice_state_count: SortedVoiceStateStore.countVoiceStatesForChannel(self._voiceChannelId) };
    const merged = Object.assign(self.getGameMetadata());
    const merged1 = Object.assign(RTCConnectionStore.getPacketStats());
    obj.trackWithMetadata(constants.START_SPEAKING, obj);
  }
};
prototype["_trackStartListening"] = function _trackStartListening() {
  let obj = MediaEngineStore;
  if (!MediaEngineStore.isDeaf()) {
    const self = this;
    if (this._anyoneElseSpeaking) {
      const channelId = RTCConnectionStore.getChannelId();
      const guildId = RTCConnectionStore.getGuildId();
      obj = { mute: null, anyone_priority: null, channel: null, server: null, channel_id: null, guild_id: null, rtc_connection_id: null, media_session_id: null, voice_state_count: null };
      obj.mute = obj.isMute();
      obj.anyone_priority = SpeakingStore.isAnyonePrioritySpeaking();
      obj.channel = channelId;
      obj.server = guildId;
      obj.channel_id = channelId;
      obj.guild_id = guildId;
      obj.rtc_connection_id = RTCConnectionStore.getRTCConnectionId();
      obj.media_session_id = RTCConnectionStore.getMediaSessionId();
      obj.voice_state_count = SortedVoiceStateStore.countVoiceStatesForChannel(self._voiceChannelId);
      const merged = Object.assign(self.getGameMetadata());
      AppAnalyticsUtils.trackWithMetadata(constants.START_LISTENING, obj);
    }
  }
};
prototype["_terminate"] = function _terminate() {
  this._reset();
  SpeakingStore.removeChangeListener(this._handleSpeakingStoreChanged);
  RTCConnectionStore.removeChangeListener(this._handleRTCConnectionStoreChanged);
};
prototype["getGameMetadata"] = function getGameMetadata() {
  const findActivityResult = SelfPresenceStore.findActivity((type) => type.type === constants.PLAYING);
  const currentGameForAnalytics = RunningGameStore.getCurrentGameForAnalytics();
  const obj = { game_platform: getGamePlatformDefault(findActivityResult), game_name: null, game_exe_name: null, game_id: null, game_distributor: null, game_distributor_game_id: null, game_metadata: null };
  let name = null;
  if (null != findActivityResult) {
    name = findActivityResult.name;
  }
  obj.game_name = name;
  let exeName = null;
  if (null != currentGameForAnalytics) {
    exeName = currentGameForAnalytics.exeName;
  }
  obj.game_exe_name = exeName;
  let application_id = null;
  if (null != findActivityResult) {
    application_id = findActivityResult.application_id;
  }
  obj.game_id = application_id;
  let distributor = null;
  if (null != currentGameForAnalytics) {
    distributor = currentGameForAnalytics.distributor;
  }
  obj.game_distributor = distributor;
  let sku = null;
  if (null != currentGameForAnalytics) {
    sku = currentGameForAnalytics.sku;
  }
  obj.game_distributor_game_id = sku;
  let subgameMetadata = null;
  if (null != currentGameForAnalytics) {
    subgameMetadata = RobloxSubgameUtils.getSubgameMetadata(currentGameForAnalytics);
  }
  obj.game_metadata = subgameMetadata;
  return obj;
};
const appAnalyticsManager = new AppAnalyticsManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_analytics/AppAnalyticsManager.tsx");

export default appAnalyticsManager;