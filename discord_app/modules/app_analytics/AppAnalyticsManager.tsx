// === Module 16154: _initialize ===

// Module 16154 (_initialize)
import initialize from "initialize";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import createRTCConnection from "createRTCConnection";
import filterPlayingActivities from "filterPlayingActivities";
import anyoneHasFlagInContext from "anyoneHasFlagInContext";
import getVoiceStatesForGuild from "getVoiceStatesForGuild";
import ME from "ME";
import "initialize";

let c10;
let c9;
let require = arg1;
({ AnalyticEvents: c9, ActivityTypes: c10 } = ME);
const MINUTE = require("set").Millis.MINUTE;
class AppAnalyticsManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult._currentUserSpeaking = false;
    applyArgumentsResult._anyoneElseSpeaking = false;
    applyArgumentsResult._handleRTCConnectionStoreChanged = function _handleRTCConnectionStoreChanged() {
      const channelId = outer1_5.getChannelId();
      if (applyArgumentsResult._voiceChannelId !== channelId) {
        obj._voiceChannelId = channelId;
        if (null != channelId) {
          if (null == obj._reportInterval) {
            const interval = new applyArgumentsResult(outer1_2[9]).Interval();
            obj._reportInterval = interval;
            const _reportInterval = obj._reportInterval;
            _reportInterval.start(outer1_11, () => {
              closure_0._trackStartSpeaking();
              closure_0._trackStartListening();
            });
          }
        } else {
          obj._reset();
        }
      }
    };
    applyArgumentsResult._handleSpeakingStoreChanged = function _handleSpeakingStoreChanged() {
      const result = outer1_7.isCurrentUserSpeaking();
      if (applyArgumentsResult._currentUserSpeaking !== result) {
        obj2._currentUserSpeaking = result;
        obj2._trackStartSpeaking();
      }
      const isAnyoneElseSpeakingResult = outer1_7.isAnyoneElseSpeaking();
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
  const result = new Map().set(anyoneHasFlagInContext, () => self._handleSpeakingStoreChanged());
  this.stores = result.set(createRTCConnection, () => self._handleRTCConnectionStoreChanged());
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
    const channelId = store.getChannelId();
    const guildId = store.getGuildId();
    let obj = require(4388) /* collectGuildAnalyticsMetadata */;
    obj = { mode: null, priority: null, channel: null, server: null, channel_id: null, guild_id: null, rtc_connection_id: null, media_session_id: null, voice_state_count: null };
    obj[0] = _detectH265HardwareDecode.getMode();
    obj[1] = anyoneHasFlagInContext.isCurrentUserPrioritySpeaking();
    obj[2] = channelId;
    obj[3] = guildId;
    obj[4] = channelId;
    obj[5] = guildId;
    obj[6] = store.getRTCConnectionId();
    obj[7] = store.getMediaSessionId();
    obj[8] = getVoiceStatesForGuild.countVoiceStatesForChannel(self._voiceChannelId);
    const merged = Object.assign(self.getGameMetadata());
    const merged1 = Object.assign(store.getPacketStats());
    obj.trackWithMetadata(constants.START_SPEAKING, obj);
  }
};
prototype["_trackStartListening"] = function _trackStartListening() {
  let obj = _detectH265HardwareDecode;
  if (!_detectH265HardwareDecode.isDeaf()) {
    const self = this;
    if (this._anyoneElseSpeaking) {
      const channelId = store.getChannelId();
      const guildId = store.getGuildId();
      obj = { mute: null, anyone_priority: null, channel: null, server: null, channel_id: null, guild_id: null, rtc_connection_id: null, media_session_id: null, voice_state_count: null };
      obj[0] = obj.isMute();
      obj[1] = anyoneHasFlagInContext.isAnyonePrioritySpeaking();
      obj[2] = channelId;
      obj[3] = guildId;
      obj[4] = channelId;
      obj[5] = guildId;
      obj[6] = store.getRTCConnectionId();
      obj[7] = store.getMediaSessionId();
      obj[8] = getVoiceStatesForGuild.countVoiceStatesForChannel(self._voiceChannelId);
      const merged = Object.assign(self.getGameMetadata());
      require(4388) /* collectGuildAnalyticsMetadata */.trackWithMetadata(constants.START_LISTENING, obj);
      const obj2 = require(4388) /* collectGuildAnalyticsMetadata */;
    }
  }
};
prototype["_terminate"] = function _terminate() {
  this._reset();
  anyoneHasFlagInContext.removeChangeListener(this._handleSpeakingStoreChanged);
  store.removeChangeListener(this._handleRTCConnectionStoreChanged);
};
prototype["getGameMetadata"] = function getGameMetadata() {
  const findActivityResult = filterPlayingActivities.findActivity((type) => type.type === constants.PLAYING);
  currentGameForAnalytics = currentGameForAnalytics.getCurrentGameForAnalytics();
  const obj = { game_platform: importDefault(15594)(findActivityResult), game_name: null, game_exe_name: null, game_id: null, game_distributor: null, game_distributor_game_id: null, game_metadata: null };
  let name = null;
  if (null != findActivityResult) {
    name = findActivityResult.name;
  }
  obj[1] = name;
  let exeName = null;
  if (null != currentGameForAnalytics) {
    exeName = currentGameForAnalytics.exeName;
  }
  obj[2] = exeName;
  let application_id = null;
  if (null != findActivityResult) {
    application_id = findActivityResult.application_id;
  }
  obj[3] = application_id;
  let distributor = null;
  if (null != currentGameForAnalytics) {
    distributor = currentGameForAnalytics.distributor;
  }
  obj[4] = distributor;
  let sku = null;
  if (null != currentGameForAnalytics) {
    sku = currentGameForAnalytics.sku;
  }
  obj[5] = sku;
  let subgameMetadata = null;
  if (null != currentGameForAnalytics) {
    subgameMetadata = require(4364) /* _openRobloxURLWithRootPlaceId */.getSubgameMetadata(currentGameForAnalytics);
    const obj2 = require(4364) /* _openRobloxURLWithRootPlaceId */;
  }
  obj[6] = subgameMetadata;
  return obj;
};
const appAnalyticsManager = new AppAnalyticsManager();
let result = require("createRTCConnection").fileFinishedImporting("modules/app_analytics/AppAnalyticsManager.tsx");

export default appAnalyticsManager;