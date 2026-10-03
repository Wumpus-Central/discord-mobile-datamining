// === Module 16898: AutoAnalytics ===

// Module 16898 (AutoAnalytics)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import FavoritesUtils from "FavoritesUtils" /* 2077 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5070 */;
import trackChannelOpenedClickstreamDefault from "trackChannelOpenedClickstream" /* 7403 */;
import GuildThemeAnalyticsUtils from "GuildThemeAnalyticsUtils" /* 16899 */;
import trackGuildViewedClickstreamDefault from "trackGuildViewedClickstream" /* 16900 */;
import trackFavoritesGuildViewedDefault from "trackFavoritesGuildViewed" /* 16901 */;
import getChannelOpenedRouteTrackingProps from "getChannelOpenedRouteTrackingProps" /* 16902 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4906 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5436 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7037 */;
import StageInstanceStore from "StageInstanceStore" /* 2056 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import NetworkStore from "NetworkStore" /* 4939 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4913 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4699 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5438 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5071 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
const Constants = fn(1085);
({ AnalyticEvents: closure_18, ActivityTypes: closure_19, GuildFeatures: closure_20 } = Constants);
const isStaticChannelRoute = fn(2058).isStaticChannelRoute;
const jsx = fn(21).jsx;
const PureComponent = noop.PureComponent;
class AutoAnalytics extends PureComponent {
}
const prototype = AutoAnalytics.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  const self = this;
  const props = this.props;
  ({ selectedChannelId, selectedGuildId, isMemberPending } = props);
  ({ hasPreviewEnabled, postableChannelCount } = props);
  if (null != selectedChannelId) {
    const obj = {};
    const merged = Object.assign(AppAnalyticsUtils.getChannelOpenedMetadata(selectedChannelId));
    obj.selected_guild_id = selectedGuildId;
    self._trackWithMetadata(constants.CHANNEL_OPENED, obj);
    const obj2 = { channelId: selectedChannelId };
    trackChannelOpenedClickstreamDefault(obj2);
    if (tmp) {
      const obj3 = { channel_is_nsfw: tmp2 };
      AppAnalyticsUtils.trackWithMetadata(constants.TEXT_IN_VOICE_OPENED, obj3);
      const tmp18Result = AppAnalyticsUtils;
    }
  }
  if (null != selectedGuildId) {
    if (isMemberPending) {
      const obj4 = { is_pending: isMemberPending, preview_enabled: hasPreviewEnabled };
      let obj5 = obj4;
    } else {
      obj5 = {};
    }
    const obj7 = {};
    const merged1 = Object.assign(obj5);
    obj7.postable_channels = postableChannelCount;
    obj7.viewing_all_channels = !UserGuildSettingsStore.isOptInEnabled(selectedGuildId);
    const merged2 = Object.assign(GuildThemeAnalyticsUtils.collectGuildThemeAnalyticsMetadata(selectedGuildId));
    self._trackWithMetadata(constants.GUILD_VIEWED, obj7);
    const obj9 = { guildId: selectedGuildId };
    trackGuildViewedClickstreamDefault(obj9);
    if (obj8.isFavoritesGuildId(selectedGuildId)) {
      trackFavoritesGuildViewedDefault();
    }
    obj8 = FavoritesUtils;
  }
};
prototype["componentDidUpdate"] = function componentDidUpdate(voiceChannelId) {
  const self = this;
  ({ voiceChannelId, voiceChannelGuildId, voiceChannelType, videoEnabled, selectedChannelId, selectedGuildId, isNSFWChannel, isMemberPending, isScreenSharing, isTextInVoice, voiceChannelBitrate, hasPreviewEnabled, postableChannelCount } = this.props);
  if (voiceChannelId.voiceChannelId !== voiceChannelId) {
    if (null != voiceChannelId.voiceChannelId) {
      const stageInstanceByChannel = StageInstanceStore.getStageInstanceByChannel(voiceChannelId.voiceChannelId);
      const activeEventByChannel = GuildScheduledEventStore.getActiveEventByChannel(voiceChannelId.voiceChannelId);
      const lastRTCConnectionState = RTCConnectionStore.getLastRTCConnectionState();
      let channelId;
      if (lastRTCConnectionState != null) {
        channelId = lastRTCConnectionState.channelId;
      }
      let tmp2 = lastRTCConnectionState;
      if (channelId !== voiceChannelId.voiceChannelId) {
        tmp2 = null;
      }
      const obj6 = { channel_id: null, channel_type: null, channel_bitrate: null, guild_id: null, rtc_connection_id: null, duration: null, media_session_id: null, stage_instance_id: null, guild_scheduled_event_id: null };
      ({ voiceChannelId: obj2.channel_id, voiceChannelType: obj2.channel_type, voiceChannelBitrate: obj2.channel_bitrate, voiceChannelGuildId: obj2.guild_id } = voiceChannelId);
      let rtcConnectionId;
      if (tmp2 != null) {
        rtcConnectionId = tmp2.rtcConnectionId;
      }
      obj6.rtc_connection_id = rtcConnectionId;
      let duration;
      if (tmp2 != null) {
        duration = tmp2.duration;
      }
      obj6.duration = duration;
      let mediaSessionId;
      if (tmp2 != null) {
        mediaSessionId = tmp2.mediaSessionId;
      }
      obj6.media_session_id = mediaSessionId;
      let id;
      if (stageInstanceByChannel != null) {
        id = stageInstanceByChannel.id;
      }
      obj6.stage_instance_id = id;
      let id1;
      if (activeEventByChannel != null) {
        id1 = activeEventByChannel.id;
      }
      obj6.guild_scheduled_event_id = id1;
      const obj = AnalyticsUtilsDefault;
      const merged = Object.assign(AppAnalyticsUtils.getVoiceStateMetadata(voiceChannelId.voiceChannelGuildId, voiceChannelId.voiceChannelId, voiceChannelId.videoEnabled));
      const merged1 = Object.assign(self.getGameMetadata());
      let stats;
      if (tmp2 != null) {
        const voiceStateAnalytics = tmp2.voiceStateAnalytics;
        if (voiceStateAnalytics != null) {
          stats = voiceStateAnalytics.getStats();
        }
      }
      const merged2 = Object.assign(stats);
      obj.track(constants.LEAVE_VOICE_CHANNEL, obj6);
    }
  }
  if (voiceChannelId.voiceChannelId !== voiceChannelId) {
    if (null != voiceChannelId) {
      const stageInstanceByChannel1 = StageInstanceStore.getStageInstanceByChannel(voiceChannelId);
      const activeEventByChannel1 = GuildScheduledEventStore.getActiveEventByChannel(voiceChannelId);
      const obj7 = { channel_id: voiceChannelId, channel_type: voiceChannelType, channel_bitrate: voiceChannelBitrate, guild_id: voiceChannelGuildId, connection_type: NetworkStore.getType(), effective_connection_speed: NetworkStore.getEffectiveConnectionSpeed(), service_provider: NetworkStore.getServiceProvider(), stage_instance_id: null, guild_scheduled_event_id: null, join_voice_id: null };
      let id2;
      if (stageInstanceByChannel1 != null) {
        id2 = stageInstanceByChannel1.id;
      }
      obj7.stage_instance_id = id2;
      let id3;
      if (activeEventByChannel1 != null) {
        id3 = activeEventByChannel1.id;
      }
      obj7.guild_scheduled_event_id = id3;
      obj7.join_voice_id = RTCConnectionStore.getJoinVoiceId();
      const obj22 = AnalyticsUtilsDefault;
      const merged3 = Object.assign(AppAnalyticsUtils.getVoiceStateMetadata(voiceChannelGuildId, voiceChannelId, videoEnabled));
      const merged4 = Object.assign(self.getGameMetadata());
      obj22.track(constants.JOIN_VOICE_CHANNEL, obj7);
    }
  }
  if (voiceChannelId.videoEnabled !== videoEnabled) {
    if (null != voiceChannelId) {
      let str = null;
      if (isScreenSharing) {
        str = "screen";
      }
      const items = [str, ];
      let str2 = null;
      if (videoEnabled) {
        str2 = "camera";
      }
      items[1] = str2;
      let str3 = "screen";
      const found = items.filter(GlobalUtils.isNotNullish);
      if (!isScreenSharing) {
        str3 = "none";
        if (videoEnabled) {
          str3 = "camera";
        }
      }
      const obj8 = { video_input_type: str3, enabled_inputs: found, channel_id: voiceChannelId, channel_type: voiceChannelType, guild_id: voiceChannelGuildId };
      const merged5 = Object.assign(self.getGameMetadata());
      const obj5 = AnalyticsUtilsDefault;
      const merged6 = Object.assign(AppAnalyticsUtils.collectVoiceAnalyticsMetadata(voiceChannelId));
      obj5.track(constants.VIDEO_INPUT_TOGGLED, obj8);
      const tmp31Result = AppAnalyticsUtils;
    }
  }
  let tmp41 = null == selectedChannelId;
  if (!tmp41) {
    tmp41 = voiceChannelId.selectedChannelId === selectedChannelId && voiceChannelId.selectedGuildId === selectedGuildId;
    const tmp42 = voiceChannelId.selectedChannelId === selectedChannelId && voiceChannelId.selectedGuildId === selectedGuildId;
  }
  if (!tmp41) {
    const obj11 = {};
    const merged7 = Object.assign(getChannelOpenedRouteTrackingProps.getChannelOpenedRouteTrackingProps(selectedChannelId));
    const merged8 = Object.assign(AppAnalyticsUtils.getChannelOpenedMetadata(selectedChannelId));
    obj11.selected_guild_id = selectedGuildId;
    self._trackWithMetadata(constants.CHANNEL_OPENED, obj11);
    const obj12 = { channelId: selectedChannelId };
    trackChannelOpenedClickstreamDefault(obj12);
    if (isTextInVoice) {
      const obj13 = { channel_is_nsfw: isNSFWChannel };
      AppAnalyticsUtils.trackWithMetadata(constants.TEXT_IN_VOICE_OPENED, obj13);
      const tmp44Result = AppAnalyticsUtils;
    }
  }
  if (isTextInVoice) {
    isTextInVoice = !voiceChannelId.isTextInVoice;
  }
  if (isTextInVoice) {
    const obj15 = { channel_is_nsfw: isNSFWChannel };
    AppAnalyticsUtils.trackWithMetadata(constants.TEXT_IN_VOICE_OPENED, obj15);
  }
  if (null != selectedGuildId) {
    if (voiceChannelId.selectedGuildId !== selectedGuildId) {
      if (isMemberPending) {
        const obj16 = { is_pending: isMemberPending, preview_enabled: hasPreviewEnabled };
        let obj17 = obj16;
      } else {
        obj17 = {};
      }
      const obj18 = {};
      const merged9 = Object.assign(obj17);
      obj18.postable_channels = postableChannelCount;
      obj18.viewing_all_channels = !UserGuildSettingsStore.isOptInEnabled(selectedGuildId);
      const merged10 = Object.assign(GuildThemeAnalyticsUtils.collectGuildThemeAnalyticsMetadata(selectedGuildId));
      self._trackWithMetadata(constants.GUILD_VIEWED, obj18);
      const obj20 = { guildId: selectedGuildId };
      trackGuildViewedClickstreamDefault(obj20);
      if (obj21.isFavoritesGuildId(selectedGuildId)) {
        trackFavoritesGuildViewedDefault();
      }
      obj21 = FavoritesUtils;
    }
  }
};
prototype["getGameMetadata"] = function getGameMetadata() {
  const props = this.props;
  return { game_platform: props.gamePlatform, game_name: props.gameName, game_id: props.gameId };
};
prototype["_trackWithMetadata"] = function _trackWithMetadata(CHANNEL_OPENED) {
  let obj = fileSizeLimitEventProperties;
  if (fileSizeLimitEventProperties === undefined) {
    obj = {};
  }
  const self = this;
  if (this.props.connected) {
    AppAnalyticsUtils.trackWithMetadata(CHANNEL_OPENED, obj);
  } else {
    if (!obj2.isThrottled(CHANNEL_OPENED)) {
      const obj3 = {};
      const merged = Object.assign(obj);
      const merged1 = Object.assign(self.collectDefaultAnalyticsMetadata(tmp, tmp2));
      AnalyticsUtilsDefault.track(CHANNEL_OPENED, obj3);
      const tmp3Result = AnalyticsUtilsDefault;
    }
    obj2 = AnalyticsUtilsDefault;
  }
};
prototype["collectDefaultAnalyticsMetadata"] = function collectDefaultAnalyticsMetadata(guild_id, channel_static_route) {
  const obj = { guild_id };
  if (null == channel_static_route) {
    return obj;
  } else if (isStaticChannelRoute(channel_static_route)) {
    obj.channel_static_route = channel_static_route;
    return obj;
  } else {
    const channel = ChannelStore.getChannel(channel_static_route);
    obj.channel_id = channel_static_route;
    let type;
    if (channel != null) {
      type = channel.type;
    }
    if (type == null) {
      type = null;
    }
    obj.channel_type = type;
    return obj;
  }
};
prototype["render"] = function render() {
  return null;
};
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/AutoAnalytics.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = stateFromStores(stateFromStores6[29]).c(68);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedChannelStore];
    const fn = function o() {
      return SelectedChannelStore.getVoiceChannelId();
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp4 = items;
    tmp5 = fn;
    tmp6 = items1;
  } else {
    [tmp4, tmp5, tmp6] = cResult;
  }
  const obj = stateFromStores(stateFromStores6[29]);
  stateFromStores = stateFromStores(stateFromStores6[30]).useStateFromStores(tmp4, tmp5, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ChannelStore];
    cResult[3] = items2;
    let tmp9 = items2;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    class E {
      constructor() {
        return closure_7.getChannel(closure_0);
      }
    }
    const items3 = [stateFromStores];
    cResult[4] = stateFromStores;
    cResult[5] = E;
    cResult[6] = items3;
    let tmp12 = items3;
  } else {
    class E {
      constructor() {
        return closure_7.getChannel(closure_0);
      }
    }
    tmp12 = cResult[6];
  }
  const tmpResult = stateFromStores(stateFromStores6[30]);
  const stateFromStores1 = stateFromStores(stateFromStores6[30]).useStateFromStores(tmp9, E, tmp12);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        return closure_7.getChannel(closure_0);
      }
    }
    const items4 = [SelectedChannelStore];
    class A {
      constructor() {
        return closure_1_13.getChannelId(undefined, false);
      }
    }
    cResult[7] = items4;
    cResult[8] = A;
    let tmp15 = A;
    const tmp14 = items4;
  } else {
    class E {
      constructor() {
        return closure_7.getChannel(closure_0);
      }
    }
    tmp15 = cResult[8];
  }
  const tmpResult13 = stateFromStores(stateFromStores6[30]);
  const stateFromStores2 = stateFromStores(stateFromStores6[30]).useStateFromStores(tmp14, tmp15);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        return closure_7.getChannel(closure_0);
      }
    }
    const items5 = [ChannelStore];
    class A {
      constructor() {
        return closure_1_13.getChannelId(undefined, false);
      }
    }
    cResult[9] = items5;
    const tmp17 = items5;
  } else {
    class E {
      constructor() {
        return closure_7.getChannel(closure_0);
      }
    }
  }
  if (cResult[10] !== stateFromStores2) {
    class O {
      constructor() {
        return closure_7.getChannel(closure_1);
      }
    }
    const items6 = [stateFromStores2];
    class A {
      constructor() {
        return closure_1_13.getChannelId(undefined, false);
      }
    }
    cResult[10] = stateFromStores2;
    cResult[11] = items6;
    cResult[12] = O;
    let tmp19 = O;
    const tmp18 = items6;
  } else {
    class O {
      constructor() {
        return closure_7.getChannel(closure_1);
      }
    }
    tmp19 = cResult[12];
  }
  const tmpResult14 = stateFromStores(stateFromStores6[30]);
  const stateFromStores3 = stateFromStores(stateFromStores6[30]).useStateFromStores(tmp17, tmp19, tmp18);
  if (stateFromStores3 != null) {
    class O {
      constructor() {
        return closure_7.getChannel(closure_1);
      }
    }
  }
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        return closure_7.getChannel(closure_1);
      }
    }
    const items7 = [stateFromStores8];
    class A {
      constructor() {
        return closure_1_13.getChannelId(undefined, false);
      }
    }
    cResult[13] = items7;
    const tmp22 = items7;
  } else {
    class O {
      constructor() {
        return closure_7.getChannel(closure_1);
      }
    }
  }
  if (cResult[14] !== stateFromStores2) {
    class O {
      constructor() {
        return closure_7.getChannel(closure_1);
      }
    }
    const items8 = [stateFromStores2];
    class A {
      constructor() {
        return closure_1_13.getChannelId(undefined, false);
      }
    }
    cResult[14] = stateFromStores2;
    cResult[15] = tmp25;
    cResult[16] = items8;
    let tmp24 = items8;
  } else {
    class O {
      constructor() {
        return closure_7.getChannel(closure_1);
      }
    }
    tmp24 = cResult[16];
  }
  const tmpResult15 = stateFromStores(stateFromStores6[30]);
  const stateFromStores4 = stateFromStores(stateFromStores6[30]).useStateFromStores(tmp22, tmp25, tmp24);
  if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        return closure_7.getChannel(closure_1);
      }
    }
    const items9 = [SelfPresenceStore];
    class R {
      constructor() {
        return closure_1_15.findActivity((type) => type.type === constants.PLAYING);
      }
    }
    const items10 = [];
    cResult[17] = items9;
    cResult[18] = R;
    cResult[19] = items10;
    let tmp29 = items10;
    let tmp28 = R;
    const tmp27 = items9;
  } else {
    class O {
      constructor() {
        return closure_7.getChannel(closure_1);
      }
    }
    tmp28 = cResult[18];
    tmp29 = cResult[19];
  }
  const tmpResult16 = stateFromStores(stateFromStores6[30]);
  const stateFromStores5 = stateFromStores(stateFromStores6[30]).useStateFromStores(tmp27, tmp28, tmp29);
  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        return closure_7.getChannel(closure_1);
      }
    }
    const items11 = [SelectedGuildStore];
    class X {
      constructor() {
        return closure_1_14.getGuildId();
      }
    }
    const items12 = [];
    cResult[20] = items11;
    cResult[21] = X;
    cResult[22] = items12;
    let tmp33 = items12;
    let tmp32 = X;
    const tmp31 = items11;
  } else {
    class O {
      constructor() {
        return closure_7.getChannel(closure_1);
      }
    }
    tmp32 = cResult[21];
    tmp33 = cResult[22];
  }
  const tmpResult17 = stateFromStores(stateFromStores6[30]);
  stateFromStores6 = stateFromStores(stateFromStores6[30]).useStateFromStores(tmp31, tmp32, tmp33);
  if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        return closure_7.getChannel(closure_1);
      }
    }
    const items13 = [GuildStore];
    class X {
      constructor() {
        return closure_1_14.getGuildId();
      }
    }
    cResult[23] = items13;
    const tmp35 = items13;
  } else {
    class O {
      constructor() {
        return closure_7.getChannel(closure_1);
      }
    }
  }
  if (cResult[24] !== stateFromStores6) {
    class O {
      constructor() {
        return closure_7.getChannel(closure_1);
      }
    }
    const items14 = [stateFromStores6];
    class X {
      constructor() {
        return closure_1_14.getGuildId();
      }
    }
    cResult[24] = stateFromStores6;
    cResult[25] = tmp38;
    cResult[26] = items14;
    let tmp37 = items14;
  } else {
    class O {
      constructor() {
        return closure_7.getChannel(closure_1);
      }
    }
    tmp37 = cResult[26];
  }
  const tmpResult18 = stateFromStores(stateFromStores6[30]);
  const stateFromStores7 = stateFromStores(stateFromStores6[30]).useStateFromStores(tmp35, tmp38, tmp37);
  if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        return closure_7.getChannel(closure_1);
      }
    }
    const items15 = [UserStore];
    class X {
      constructor() {
        return closure_1_14.getGuildId();
      }
    }
    const items16 = [];
    cResult[27] = items15;
    cResult[28] = tmp43;
    cResult[29] = items16;
    let tmp42 = items16;
    let tmp41 = tmp43;
    const tmp40 = items15;
  } else {
    class O {
      constructor() {
        return closure_7.getChannel(closure_1);
      }
    }
    tmp41 = cResult[28];
    tmp42 = cResult[29];
  }
  const tmpResult19 = stateFromStores(stateFromStores6[30]);
  stateFromStores8 = stateFromStores(stateFromStores6[30]).useStateFromStores(tmp40, tmp41, tmp42);
  if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        return closure_7.getChannel(closure_1);
      }
    }
    const items17 = [GuildMemberStore];
    class X {
      constructor() {
        return closure_1_14.getGuildId();
      }
    }
    cResult[30] = items17;
    const tmp45 = items17;
  } else {
    class O {
      constructor() {
        return closure_7.getChannel(closure_1);
      }
    }
  }
  if (cResult[31] === stateFromStores8) {
    class O {
      constructor() {
        return closure_7.getChannel(closure_1);
      }
    }
    const stateFromStores9 = tmp(tmp2[30]).useStateFromStores(tmp45, ae, items24);
    class X {
      constructor() {
        return closure_1_14.getGuildId();
      }
    }
    if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
      class O {
        constructor() {
          return closure_7.getChannel(closure_1);
        }
      }
      const items18 = [MediaEngineStore];
      class X {
        constructor() {
          return closure_1_14.getGuildId();
        }
      }
      const items19 = [];
      cResult[35] = items18;
      cResult[36] = tmp50;
      cResult[37] = items19;
      let tmp49 = items19;
      let tmp48 = tmp50;
      const tmp47 = items18;
    } else {
      class O {
        constructor() {
          return closure_7.getChannel(closure_1);
        }
      }
      tmp48 = cResult[36];
      tmp49 = cResult[37];
    }
    const tmpResult21 = tmp(tmp2[30]);
    const stateFromStores10 = tmp(tmp2[30]).useStateFromStores(tmp47, tmp48, tmp49);
    const _Symbol = Symbol;
    if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
      class O {
        constructor() {
          return closure_7.getChannel(closure_1);
        }
      }
      const items20 = [MediaEngineStore];
      class X {
        constructor() {
          return closure_1_14.getGuildId();
        }
      }
      const items21 = [];
      cResult[38] = items20;
      cResult[39] = tmp55;
      cResult[40] = items21;
      let tmp54 = items21;
      let tmp53 = tmp55;
      const tmp52 = items20;
    } else {
      class O {
        constructor() {
          return closure_7.getChannel(closure_1);
        }
      }
      tmp53 = cResult[39];
      tmp54 = cResult[40];
    }
    const tmpResult22 = tmp(tmp2[30]);
    const stateFromStores11 = tmp(tmp2[30]).useStateFromStores(tmp52, tmp53, tmp54);
    const _Symbol2 = Symbol;
    if (cResult[41] === Symbol.for("react.memo_cache_sentinel")) {
      class O {
        constructor() {
          return closure_7.getChannel(closure_1);
        }
      }
      const items22 = [GatewayConnectionStore];
      class X {
        constructor() {
          return closure_1_14.getGuildId();
        }
      }
      const items23 = [];
      cResult[41] = items22;
      cResult[42] = tmp60;
      cResult[43] = items23;
      let tmp59 = items23;
      let tmp58 = tmp60;
      const tmp57 = items22;
    } else {
      class O {
        constructor() {
          return closure_7.getChannel(closure_1);
        }
      }
      tmp58 = cResult[42];
      tmp59 = cResult[43];
    }
    const tmpResult23 = tmp(tmp2[30]);
    const stateFromStores12 = tmp(tmp2[30]).useStateFromStores(tmp57, tmp58, tmp59);
    const tmp63 = stateFromStores2(tmp2[31])(stateFromStores6);
    if (stateFromStores1 != null) {
      class O {
        constructor() {
          return closure_7.getChannel(closure_1);
        }
      }
    }
    if (cResult[44] !== stateFromStores1) {
      class O {
        constructor() {
          return closure_7.getChannel(closure_1);
        }
      }
      if (stateFromStores1 != null) {
        class O {
          constructor() {
            return closure_7.getChannel(closure_1);
          }
        }
      }
      class X {
        constructor() {
          return closure_1_14.getGuildId();
        }
      }
      cResult[45] = tmp66;
    } else {
      class O {
        constructor() {
          return closure_7.getChannel(closure_1);
        }
      }
    }
    if (stateFromStores1 != null) {
      class O {
        constructor() {
          return closure_7.getChannel(closure_1);
        }
      }
    }
    if (stateFromStores1 != null) {
      class O {
        constructor() {
          return closure_7.getChannel(closure_1);
        }
      }
    }
    if (cResult[46] !== stateFromStores5) {
      class O {
        constructor() {
          return closure_7.getChannel(closure_1);
        }
      }
      cResult[46] = stateFromStores5;
      class X {
        constructor() {
          return closure_1_14.getGuildId();
        }
      }
      cResult[47] = tmp70;
    } else {
      class O {
        constructor() {
          return closure_7.getChannel(closure_1);
        }
      }
    }
    if (null != stateFromStores5) {
      class O {
        constructor() {
          return closure_7.getChannel(closure_1);
        }
      }
    }
    if (null != stateFromStores5) {
      class O {
        constructor() {
          return closure_7.getChannel(closure_1);
        }
      }
    }
    if (stateFromStores7 != null) {
      class O {
        constructor() {
          return closure_7.getChannel(closure_1);
        }
      }
    }
    if (cResult[48] !== undefined) {
      class O {
        constructor() {
          return closure_7.getChannel(closure_1);
        }
      }
      if (stateFromStores7 != null) {
        class O {
          constructor() {
            return closure_7.getChannel(closure_1);
          }
        }
        const hasItem = obj15.has(constants2.PREVIEW_ENABLED);
      }
      class X {
        constructor() {
          return closure_1_14.getGuildId();
        }
      }
      cResult[48] = undefined;
      cResult[49] = hasItem;
    } else {
      class O {
        constructor() {
          return closure_7.getChannel(closure_1);
        }
      }
    }
    if (cResult[50] === stateFromStores12) {
      class O {
        constructor() {
          return closure_7.getChannel(closure_1);
        }
      }
    }
    const obj2 = {};
    const obj3 = { voiceChannelId: undefined, voiceChannelGuildId: tmp66, voiceChannelType: undefined, voiceChannelBitrate: undefined, videoEnabled: stateFromStores10, isScreenSharing: stateFromStores11, gamePlatform: tmp70, gameName: null, gameId: null, selectedChannelId: stateFromStores2, selectedGuildId: stateFromStores6, connected: stateFromStores12, isNSFWChannel: tmp21, hasPreviewEnabled: tmp74, isMemberPending: stateFromStores9, postableChannelCount: tmp63, isTextInVoice: stateFromStores4 };
    const merged = Object.assign(obj3);
    const tmp84 = <AutoAnalytics />;
    cResult[50] = stateFromStores12;
    cResult[51] = stateFromStores9;
    cResult[52] = tmp21;
    cResult[53] = stateFromStores11;
    cResult[54] = stateFromStores4;
    cResult[55] = tmp63;
    cResult[56] = stateFromStores2;
    cResult[57] = stateFromStores6;
    cResult[58] = undefined;
    cResult[59] = tmp66;
    cResult[60] = undefined;
    cResult[61] = undefined;
    cResult[62] = tmp70;
    cResult[63] = null;
    cResult[64] = null;
    cResult[65] = tmp74;
    cResult[66] = stateFromStores10;
    cResult[67] = tmp84;
    const tmpResult24 = tmp(tmp2[30]);
  }
  ae = function ae() {
    let tmp2 = null != stateFromStores8;
    if (tmp2) {
      tmp2 = null != stateFromStores6;
    }
    if (tmp2) {
      const member = GuildMemberStore.getMember(stateFromStores6, stateFromStores8.id);
      let flag;
      if (member != null) {
        flag = member.isPending;
      }
      if (flag == null) {
        flag = false;
      }
      tmp2 = flag;
    }
    return tmp2;
  };
  items24 = [stateFromStores8, stateFromStores6];
  cResult[31] = stateFromStores8;
  cResult[32] = stateFromStores6;
  cResult[33] = ae;
  cResult[34] = items24;
  const tmpResult20 = stateFromStores(stateFromStores6[30]);
}) : (() => {
  const items = [SelectedChannelStore];
  stateFromStores = stateFromStores(stateFromStores6[30]).useStateFromStores(items, () => SelectedChannelStore.getVoiceChannelId(), []);
  const obj = stateFromStores(stateFromStores6[30]);
  const items1 = [ChannelStore];
  const items2 = [stateFromStores];
  const stateFromStores1 = stateFromStores(stateFromStores6[30]).useStateFromStores(items1, () => ChannelStore.getChannel(stateFromStores), items2);
  const obj2 = stateFromStores(stateFromStores6[30]);
  const items3 = [SelectedChannelStore];
  const stateFromStores2 = stateFromStores(stateFromStores6[30]).useStateFromStores(items3, () => SelectedChannelStore.getChannelId(undefined, false));
  const obj4 = stateFromStores(stateFromStores6[30]);
  const items4 = [ChannelStore];
  const items5 = [stateFromStores2];
  const stateFromStores3 = stateFromStores(stateFromStores6[30]).useStateFromStores(items4, () => ChannelStore.getChannel(stateFromStores2), items5);
  let nsfw;
  if (stateFromStores3 != null) {
    nsfw = stateFromStores3.nsfw;
  }
  const obj5 = stateFromStores(stateFromStores6[30]);
  const items6 = [stateFromStores8];
  const items7 = [stateFromStores2];
  const stateFromStores4 = stateFromStores(stateFromStores6[30]).useStateFromStores(items6, () => {
    let chatOpen = null != stateFromStores2;
    if (chatOpen) {
      chatOpen = ChannelRTCStore.getChatOpen(tmp);
    }
    return chatOpen;
  }, items7);
  const tmpResult = stateFromStores(stateFromStores6[30]);
  const items8 = [SelfPresenceStore];
  const stateFromStores5 = stateFromStores(stateFromStores6[30]).useStateFromStores(items8, () => SelfPresenceStore.findActivity((type) => type.type === constants.PLAYING), []);
  const tmpResult9 = stateFromStores(stateFromStores6[30]);
  const items9 = [SelectedGuildStore];
  stateFromStores6 = stateFromStores(stateFromStores6[30]).useStateFromStores(items9, () => guildId.getGuildId(), []);
  const tmpResult10 = stateFromStores(stateFromStores6[30]);
  const items10 = [GuildStore];
  const items11 = [stateFromStores6];
  const stateFromStores7 = stateFromStores(stateFromStores6[30]).useStateFromStores(items10, () => GuildStore.getGuild(stateFromStores6), items11);
  const tmpResult11 = stateFromStores(stateFromStores6[30]);
  const items12 = [UserStore];
  stateFromStores8 = stateFromStores(stateFromStores6[30]).useStateFromStores(items12, () => currentUser.getCurrentUser(), []);
  const tmpResult12 = stateFromStores(stateFromStores6[30]);
  const items13 = [GuildMemberStore];
  const items14 = [stateFromStores8, stateFromStores6];
  const stateFromStores9 = stateFromStores(stateFromStores6[30]).useStateFromStores(items13, () => {
    let tmp2 = null != stateFromStores8;
    if (tmp2) {
      tmp2 = null != stateFromStores6;
    }
    if (tmp2) {
      const member = GuildMemberStore.getMember(stateFromStores6, stateFromStores8.id);
      let flag;
      if (member != null) {
        flag = member.isPending;
      }
      if (flag == null) {
        flag = false;
      }
      tmp2 = flag;
    }
    return tmp2;
  }, items14);
  const tmpResult13 = stateFromStores(stateFromStores6[30]);
  const items15 = [MediaEngineStore];
  const stateFromStores10 = stateFromStores(stateFromStores6[30]).useStateFromStores(items15, () => MediaEngineStore.isVideoEnabled(), []);
  const tmpResult14 = stateFromStores(stateFromStores6[30]);
  const items16 = [MediaEngineStore];
  const stateFromStores11 = stateFromStores(stateFromStores6[30]).useStateFromStores(items16, () => MediaEngineStore.isScreenSharing(), []);
  const tmpResult15 = stateFromStores(stateFromStores6[30]);
  const items17 = [GatewayConnectionStore];
  const stateFromStores12 = stateFromStores(stateFromStores6[30]).useStateFromStores(items17, () => connected.isConnected(), []);
  let id;
  const tmp16 = stateFromStores2;
  const tmpResult16 = stateFromStores(stateFromStores6[30]);
  if (stateFromStores1 != null) {
    id = stateFromStores1.id;
  }
  const obj3 = { voiceChannelId: id, voiceChannelGuildId: null, voiceChannelType: null, voiceChannelBitrate: null, videoEnabled: null, isScreenSharing: null, gamePlatform: null, gameName: null, gameId: null, selectedChannelId: null, selectedGuildId: null, connected: null, isNSFWChannel: null, hasPreviewEnabled: null, isMemberPending: null, postableChannelCount: null, isTextInVoice: null };
  let guildId;
  if (stateFromStores1 != null) {
    guildId = stateFromStores1.getGuildId();
  }
  obj3.voiceChannelGuildId = guildId;
  let type;
  if (stateFromStores1 != null) {
    type = stateFromStores1.type;
  }
  obj3.voiceChannelType = type;
  let bitrate;
  if (stateFromStores1 != null) {
    bitrate = stateFromStores1.bitrate;
  }
  obj3.voiceChannelBitrate = bitrate;
  obj3.videoEnabled = stateFromStores10;
  obj3.isScreenSharing = stateFromStores11;
  obj3.gamePlatform = tmp16(stateFromStores6[32])(stateFromStores5);
  let name = null;
  if (null != stateFromStores5) {
    name = stateFromStores5.name;
  }
  obj3.gameName = name;
  let application_id = null;
  if (null != stateFromStores5) {
    application_id = stateFromStores5.application_id;
  }
  obj3.gameId = application_id;
  obj3.selectedChannelId = stateFromStores2;
  obj3.selectedGuildId = stateFromStores6;
  obj3.connected = stateFromStores12;
  obj3.isNSFWChannel = nsfw;
  let hasItem;
  if (stateFromStores7 != null) {
    const features = stateFromStores7.features;
    hasItem = features.has(constants2.PREVIEW_ENABLED);
  }
  obj3.hasPreviewEnabled = hasItem;
  obj3.isMemberPending = stateFromStores9;
  obj3.postableChannelCount = stateFromStores2(stateFromStores6[31])(stateFromStores6);
  obj3.isTextInVoice = stateFromStores4;
  const merged = Object.assign(obj3);
  return <AutoAnalytics />;
});