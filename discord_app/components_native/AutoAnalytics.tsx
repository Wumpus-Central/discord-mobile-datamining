// === Module 16917: AutoAnalytics ===

// Module 16917 (AutoAnalytics)
import Fragment from "Fragment" /* 21 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import FavoritesUtils from "FavoritesUtils" /* 2077 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5070 */;
import trackChannelOpenedClickstreamDefault from "trackChannelOpenedClickstream" /* 7403 */;
import GuildThemeAnalyticsUtils from "GuildThemeAnalyticsUtils" /* 16918 */;
import trackGuildViewedClickstreamDefault from "trackGuildViewedClickstream" /* 16919 */;
import trackFavoritesGuildViewedDefault from "trackFavoritesGuildViewed" /* 16920 */;
import getChannelOpenedRouteTrackingProps from "getChannelOpenedRouteTrackingProps" /* 16921 */;
import react from "react" /* 19 */;
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
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_18;
let closure_19;
let closure_20;
({ AnalyticEvents: closure_18, ActivityTypes: closure_19, GuildFeatures: closure_20 } = Constants);
const isStaticChannelRoute = ChannelConstants.isStaticChannelRoute;
const jsx = Fragment.jsx;
const PureComponent = react.PureComponent;
class AutoAnalytics extends PureComponent {
  componentDidMount() {
    let hasPreviewEnabled;
    let isMemberPending;
    let postableChannelCount;
    let selectedChannelId;
    let selectedGuildId;
    const self = this;
    const props = this.props;
    ({ selectedChannelId, selectedGuildId, isMemberPending } = props);
    ({ hasPreviewEnabled, postableChannelCount } = props);
    if (null != selectedChannelId) {
      const _trackWithMetadata2 = self._trackWithMetadata;
      const CHANNEL_OPENED = constants.CHANNEL_OPENED;
      const obj = { selected_guild_id: selectedGuildId };
      const obj10 = AppAnalyticsUtils;
      const merged = Object.assign(obj10.getChannelOpenedMetadata(selectedChannelId));
      _trackWithMetadata2(CHANNEL_OPENED, obj);
      const obj2 = { channelId: selectedChannelId };
      trackChannelOpenedClickstreamDefault(obj2);
      if (tmp) {
        const obj3 = { channel_is_nsfw: tmp2 };
        const tmp18Result = AppAnalyticsUtils;
        tmp18Result.trackWithMetadata(constants.TEXT_IN_VOICE_OPENED, obj3);
      }
    }
    if (null != selectedGuildId) {
      let obj5;
      if (isMemberPending) {
        obj5 = { is_pending: isMemberPending, preview_enabled: hasPreviewEnabled };
        const obj4 = { is_pending: isMemberPending, preview_enabled: hasPreviewEnabled };
      } else {
        obj5 = {};
      }
      const _trackWithMetadata = self._trackWithMetadata;
      const GUILD_VIEWED = constants.GUILD_VIEWED;
      const obj7 = { postable_channels: postableChannelCount, viewing_all_channels: !UserGuildSettingsStore.isOptInEnabled(selectedGuildId) };
      const merged1 = Object.assign(obj5);
      const obj6 = GuildThemeAnalyticsUtils;
      const merged2 = Object.assign(obj6.collectGuildThemeAnalyticsMetadata(selectedGuildId));
      _trackWithMetadata(GUILD_VIEWED, obj7);
      const obj9 = { guildId: selectedGuildId };
      trackGuildViewedClickstreamDefault(obj9);
      const obj8 = FavoritesUtils;
      if (obj8.isFavoritesGuildId(selectedGuildId)) {
        trackFavoritesGuildViewedDefault();
      }
    }
  }
  componentDidUpdate(voiceChannelId) {
    let duration;
    let hasPreviewEnabled;
    let id;
    let id1;
    let id2;
    let id3;
    let isMemberPending;
    let isNSFWChannel;
    let isScreenSharing;
    let isTextInVoice;
    let mediaSessionId;
    let postableChannelCount;
    let rtcConnectionId;
    let selectedChannelId;
    let selectedGuildId;
    let videoEnabled;
    let voiceChannelBitrate;
    let voiceChannelGuildId;
    let voiceChannelType;
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
        const obj = { channel_id: null, channel_type: null, channel_bitrate: null, guild_id: null, rtc_connection_id: rtcConnectionId, duration, media_session_id: mediaSessionId, stage_instance_id: id, guild_scheduled_event_id: id1 };
        ({ voiceChannelId: obj.channel_id, voiceChannelType: obj.channel_type, voiceChannelBitrate: obj.channel_bitrate, voiceChannelGuildId: obj.guild_id } = voiceChannelId);
        rtcConnectionId = undefined;
        const track = AnalyticsUtilsDefault.track;
        const LEAVE_VOICE_CHANNEL = constants.LEAVE_VOICE_CHANNEL;
        AnalyticsUtilsDefault;
        if (tmp2 != null) {
          rtcConnectionId = tmp2.rtcConnectionId;
        }
        duration = undefined;
        if (tmp2 != null) {
          duration = tmp2.duration;
        }
        mediaSessionId = undefined;
        if (tmp2 != null) {
          mediaSessionId = tmp2.mediaSessionId;
        }
        id = undefined;
        if (stageInstanceByChannel != null) {
          id = stageInstanceByChannel.id;
        }
        id1 = undefined;
        if (activeEventByChannel != null) {
          id1 = activeEventByChannel.id;
        }
        const obj2 = AppAnalyticsUtils;
        const merged = Object.assign(obj2.getVoiceStateMetadata(voiceChannelId.voiceChannelGuildId, voiceChannelId.voiceChannelId, voiceChannelId.videoEnabled));
        const merged1 = Object.assign(self.getGameMetadata());
        let stats;
        if (tmp2 != null) {
          const voiceStateAnalytics = tmp2.voiceStateAnalytics;
          if (voiceStateAnalytics != null) {
            stats = voiceStateAnalytics.getStats();
          }
        }
        const merged2 = Object.assign(stats);
        track(LEAVE_VOICE_CHANNEL, obj);
      }
    }
    if (voiceChannelId.voiceChannelId !== voiceChannelId) {
      if (null != voiceChannelId) {
        const stageInstanceByChannel1 = StageInstanceStore.getStageInstanceByChannel(voiceChannelId);
        const activeEventByChannel1 = GuildScheduledEventStore.getActiveEventByChannel(voiceChannelId);
        const obj4 = { channel_id: voiceChannelId, channel_type: voiceChannelType, channel_bitrate: voiceChannelBitrate, guild_id: voiceChannelGuildId, connection_type: NetworkStore.getType(), effective_connection_speed: NetworkStore.getEffectiveConnectionSpeed(), service_provider: NetworkStore.getServiceProvider(), stage_instance_id: id2, guild_scheduled_event_id: id3, join_voice_id: RTCConnectionStore.getJoinVoiceId() };
        const track3 = AnalyticsUtilsDefault.track;
        const JOIN_VOICE_CHANNEL = constants.JOIN_VOICE_CHANNEL;
        AnalyticsUtilsDefault;
        id2 = undefined;
        if (stageInstanceByChannel1 != null) {
          id2 = stageInstanceByChannel1.id;
        }
        id3 = undefined;
        if (activeEventByChannel1 != null) {
          id3 = activeEventByChannel1.id;
        }
        const obj3 = AppAnalyticsUtils;
        const merged3 = Object.assign(obj3.getVoiceStateMetadata(voiceChannelGuildId, voiceChannelId, videoEnabled));
        const merged4 = Object.assign(self.getGameMetadata());
        track3(JOIN_VOICE_CHANNEL, obj4);
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
        const obj5 = { video_input_type: str3, enabled_inputs: found, channel_id: voiceChannelId, channel_type: voiceChannelType, guild_id: voiceChannelGuildId };
        const track2 = AnalyticsUtilsDefault.track;
        const VIDEO_INPUT_TOGGLED = constants.VIDEO_INPUT_TOGGLED;
        AnalyticsUtilsDefault;
        const merged5 = Object.assign(self.getGameMetadata());
        const tmp32Result = AppAnalyticsUtils;
        const merged6 = Object.assign(tmp32Result.collectVoiceAnalyticsMetadata(voiceChannelId));
        track2(VIDEO_INPUT_TOGGLED, obj5);
      }
    }
    let tmp43 = null == selectedChannelId;
    if (!tmp43) {
      tmp43 = voiceChannelId.selectedChannelId === selectedChannelId && voiceChannelId.selectedGuildId === selectedGuildId;
    }
    if (!tmp43) {
      const _trackWithMetadata = self._trackWithMetadata;
      const CHANNEL_OPENED = constants.CHANNEL_OPENED;
      const obj6 = { selected_guild_id: selectedGuildId };
      const obj7 = getChannelOpenedRouteTrackingProps;
      const merged7 = Object.assign(obj7.getChannelOpenedRouteTrackingProps(selectedChannelId));
      const obj8 = AppAnalyticsUtils;
      const merged8 = Object.assign(obj8.getChannelOpenedMetadata(selectedChannelId));
      _trackWithMetadata(CHANNEL_OPENED, obj6);
      const obj9 = { channelId: selectedChannelId };
      trackChannelOpenedClickstreamDefault(obj9);
      if (isTextInVoice) {
        const obj10 = { channel_is_nsfw: isNSFWChannel };
        const tmp46Result = AppAnalyticsUtils;
        tmp46Result.trackWithMetadata(constants.TEXT_IN_VOICE_OPENED, obj10);
      }
    }
    if (isTextInVoice) {
      isTextInVoice = !voiceChannelId.isTextInVoice;
    }
    if (isTextInVoice) {
      const obj11 = { channel_is_nsfw: isNSFWChannel };
      const obj12 = AppAnalyticsUtils;
      obj12.trackWithMetadata(constants.TEXT_IN_VOICE_OPENED, obj11);
    }
    if (null != selectedGuildId) {
      if (voiceChannelId.selectedGuildId !== selectedGuildId) {
        let obj14;
        if (isMemberPending) {
          obj14 = { is_pending: isMemberPending, preview_enabled: hasPreviewEnabled };
          const obj13 = { is_pending: isMemberPending, preview_enabled: hasPreviewEnabled };
        } else {
          obj14 = {};
        }
        const _trackWithMetadata2 = self._trackWithMetadata;
        const GUILD_VIEWED = constants.GUILD_VIEWED;
        const obj15 = { postable_channels: postableChannelCount, viewing_all_channels: !UserGuildSettingsStore.isOptInEnabled(selectedGuildId) };
        const merged9 = Object.assign(obj14);
        const obj17 = GuildThemeAnalyticsUtils;
        const merged10 = Object.assign(obj17.collectGuildThemeAnalyticsMetadata(selectedGuildId));
        _trackWithMetadata2(GUILD_VIEWED, obj15);
        const obj16 = { guildId: selectedGuildId };
        trackGuildViewedClickstreamDefault(obj16);
        const obj19 = FavoritesUtils;
        if (obj19.isFavoritesGuildId(selectedGuildId)) {
          trackFavoritesGuildViewedDefault();
        }
      }
    }
  }
  getGameMetadata() {
    const props = this.props;
    return { game_platform: props.gamePlatform, game_name: props.gameName, game_id: props.gameId };
  }
  _trackWithMetadata(CHANNEL_OPENED) {
    let obj = fileSizeLimitEventProperties;
    if (fileSizeLimitEventProperties === undefined) {
      obj = {};
    }
    const self = this;
    if (this.props.connected) {
      const obj5 = AppAnalyticsUtils;
      obj5.trackWithMetadata(CHANNEL_OPENED, obj);
    } else {
      const obj2 = AnalyticsUtilsDefault;
      if (!obj2.isThrottled(CHANNEL_OPENED)) {
        const obj3 = {};
        const merged = Object.assign(obj);
        const merged1 = Object.assign(self.collectDefaultAnalyticsMetadata(tmp, tmp2));
        const tmp3Result = AnalyticsUtilsDefault;
        tmp3Result.track(CHANNEL_OPENED, obj3);
      }
    }
  }
  collectDefaultAnalyticsMetadata(guild_id, channel_static_route) {
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
  }
  render() {
    return null;
  }
}
const prototype = AutoAnalytics.prototype;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let ae;
  let connected;
  let currentUser;
  let guildId;
  let items24;
  let stateFromStores;
  let stateFromStores6;
  let stateFromStores8;
  let tmp12;
  let tmp14;
  let tmp15;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp22;
  let tmp24;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp35;
  let tmp37;
  let tmp4;
  let tmp40;
  let tmp41;
  let tmp42;
  let tmp45;
  let tmp5;
  let tmp6;
  let tmp9;
  const tmp = stateFromStores;
  let tmp2 = stateFromStores6;
  const obj = stateFromStores(stateFromStores6[29]);
  const cResult = obj.c(68);
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
  const tmpResult = tmp(tmp2[30]);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ChannelStore];
    cResult[3] = items2;
    tmp9 = items2;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    class E {
      constructor() {
        return ChannelStore.getChannel(stateFromStores);
      }
    }
    const items3 = [stateFromStores];
    cResult[4] = stateFromStores;
    cResult[5] = E;
    cResult[6] = items3;
    tmp12 = items3;
  } else {
    class E {
      constructor() {
        return ChannelStore.getChannel(stateFromStores);
      }
    }
    tmp12 = cResult[6];
  }
  const tmpResult13 = tmp(tmp2[30]);
  const stateFromStores1 = tmpResult13.useStateFromStores(tmp9, E, tmp12);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        return ChannelStore.getChannel(stateFromStores);
      }
    }
    const items4 = [SelectedChannelStore];
    class A {
      constructor() {
        return SelectedChannelStore.getChannelId(undefined, false);
      }
    }
    cResult[7] = items4;
    cResult[8] = A;
    tmp15 = A;
    tmp14 = items4;
  } else {
    class E {
      constructor() {
        return ChannelStore.getChannel(stateFromStores);
      }
    }
    tmp15 = cResult[8];
  }
  const tmpResult14 = tmp(tmp2[30]);
  const stateFromStores2 = tmpResult14.useStateFromStores(tmp14, tmp15);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        return ChannelStore.getChannel(stateFromStores);
      }
    }
    const items5 = [ChannelStore];
    class A {
      constructor() {
        return SelectedChannelStore.getChannelId(undefined, false);
      }
    }
    cResult[9] = items5;
    tmp17 = items5;
  } else {
    class E {
      constructor() {
        return ChannelStore.getChannel(stateFromStores);
      }
    }
  }
  if (cResult[10] !== stateFromStores2) {
    class O {
      constructor() {
        return ChannelStore.getChannel(stateFromStores2);
      }
    }
    const items6 = [stateFromStores2];
    class A {
      constructor() {
        return SelectedChannelStore.getChannelId(undefined, false);
      }
    }
    cResult[10] = stateFromStores2;
    cResult[11] = items6;
    cResult[12] = O;
    tmp19 = O;
    tmp18 = items6;
  } else {
    class O {
      constructor() {
        return ChannelStore.getChannel(stateFromStores2);
      }
    }
    tmp19 = cResult[12];
  }
  const tmpResult15 = tmp(tmp2[30]);
  const stateFromStores3 = tmpResult15.useStateFromStores(tmp17, tmp19, tmp18);
  if (stateFromStores3 != null) {
    class O {
      constructor() {
        return ChannelStore.getChannel(stateFromStores2);
      }
    }
  }
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        return ChannelStore.getChannel(stateFromStores2);
      }
    }
    const items7 = [stateFromStores8];
    class A {
      constructor() {
        return SelectedChannelStore.getChannelId(undefined, false);
      }
    }
    cResult[13] = items7;
    tmp22 = items7;
  } else {
    class O {
      constructor() {
        return ChannelStore.getChannel(stateFromStores2);
      }
    }
  }
  if (cResult[14] !== stateFromStores2) {
    class O {
      constructor() {
        return ChannelStore.getChannel(stateFromStores2);
      }
    }
    const items8 = [stateFromStores2];
    class A {
      constructor() {
        return SelectedChannelStore.getChannelId(undefined, false);
      }
    }
    cResult[14] = stateFromStores2;
    cResult[15] = tmp25;
    cResult[16] = items8;
    tmp24 = items8;
  } else {
    class O {
      constructor() {
        return ChannelStore.getChannel(stateFromStores2);
      }
    }
    tmp24 = cResult[16];
  }
  const tmpResult16 = tmp(tmp2[30]);
  const stateFromStores4 = tmpResult16.useStateFromStores(tmp22, tmp25, tmp24);
  if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        return ChannelStore.getChannel(stateFromStores2);
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
    tmp29 = items10;
    tmp28 = R;
    tmp27 = items9;
  } else {
    class O {
      constructor() {
        return ChannelStore.getChannel(stateFromStores2);
      }
    }
    tmp28 = cResult[18];
    tmp29 = cResult[19];
  }
  const tmpResult17 = tmp(tmp2[30]);
  const stateFromStores5 = tmpResult17.useStateFromStores(tmp27, tmp28, tmp29);
  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        return ChannelStore.getChannel(stateFromStores2);
      }
    }
    const items11 = [SelectedGuildStore];
    class X {
      constructor() {
        return guildId.getGuildId();
      }
    }
    const items12 = [];
    cResult[20] = items11;
    cResult[21] = X;
    cResult[22] = items12;
    tmp33 = items12;
    tmp32 = X;
    tmp31 = items11;
  } else {
    class O {
      constructor() {
        return ChannelStore.getChannel(stateFromStores2);
      }
    }
    tmp32 = cResult[21];
    tmp33 = cResult[22];
  }
  const tmpResult18 = tmp(tmp2[30]);
  stateFromStores6 = tmpResult18.useStateFromStores(tmp31, tmp32, tmp33);
  if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        return ChannelStore.getChannel(stateFromStores2);
      }
    }
    const items13 = [GuildStore];
    class X {
      constructor() {
        return guildId.getGuildId();
      }
    }
    cResult[23] = items13;
    tmp35 = items13;
  } else {
    class O {
      constructor() {
        return ChannelStore.getChannel(stateFromStores2);
      }
    }
  }
  if (cResult[24] !== stateFromStores6) {
    class O {
      constructor() {
        return ChannelStore.getChannel(stateFromStores2);
      }
    }
    const items14 = [stateFromStores6];
    class X {
      constructor() {
        return guildId.getGuildId();
      }
    }
    cResult[24] = stateFromStores6;
    cResult[25] = tmp38;
    cResult[26] = items14;
    tmp37 = items14;
  } else {
    class O {
      constructor() {
        return ChannelStore.getChannel(stateFromStores2);
      }
    }
    tmp37 = cResult[26];
  }
  const tmpResult19 = tmp(tmp2[30]);
  const stateFromStores7 = tmpResult19.useStateFromStores(tmp35, tmp38, tmp37);
  if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        return ChannelStore.getChannel(stateFromStores2);
      }
    }
    const items15 = [UserStore];
    class X {
      constructor() {
        return guildId.getGuildId();
      }
    }
    const items16 = [];
    cResult[27] = items15;
    cResult[28] = tmp43;
    cResult[29] = items16;
    tmp42 = items16;
    tmp41 = tmp43;
    tmp40 = items15;
  } else {
    class O {
      constructor() {
        return ChannelStore.getChannel(stateFromStores2);
      }
    }
    tmp41 = cResult[28];
    tmp42 = cResult[29];
  }
  const tmpResult20 = tmp(tmp2[30]);
  stateFromStores8 = tmpResult20.useStateFromStores(tmp40, tmp41, tmp42);
  if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        return ChannelStore.getChannel(stateFromStores2);
      }
    }
    const items17 = [GuildMemberStore];
    class X {
      constructor() {
        return guildId.getGuildId();
      }
    }
    cResult[30] = items17;
    tmp45 = items17;
  } else {
    class O {
      constructor() {
        return ChannelStore.getChannel(stateFromStores2);
      }
    }
  }
  if (cResult[31] === stateFromStores8) {
    let tmp49;
    let tmp48;
    let tmp47;
    let tmp54;
    let tmp53;
    let tmp52;
    let tmp59;
    let tmp58;
    let tmp57;
    class O {
      constructor() {
        return ChannelStore.getChannel(stateFromStores2);
      }
    }
    const tmpResult21 = tmp(tmp2[30]);
    const stateFromStores9 = tmpResult21.useStateFromStores(tmp45, ae, items24);
    class X {
      constructor() {
        return guildId.getGuildId();
      }
    }
    if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
      class O {
        constructor() {
          return ChannelStore.getChannel(stateFromStores2);
        }
      }
      const items18 = [MediaEngineStore];
      class X {
        constructor() {
          return guildId.getGuildId();
        }
      }
      const items19 = [];
      cResult[35] = items18;
      cResult[36] = tmp50;
      cResult[37] = items19;
      tmp49 = items19;
      tmp48 = tmp50;
      tmp47 = items18;
    } else {
      class O {
        constructor() {
          return ChannelStore.getChannel(stateFromStores2);
        }
      }
      tmp48 = cResult[36];
      tmp49 = cResult[37];
    }
    const tmpResult22 = tmp(tmp2[30]);
    const stateFromStores10 = tmpResult22.useStateFromStores(tmp47, tmp48, tmp49);
    const _Symbol = Symbol;
    if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
      class O {
        constructor() {
          return ChannelStore.getChannel(stateFromStores2);
        }
      }
      const items20 = [MediaEngineStore];
      class X {
        constructor() {
          return guildId.getGuildId();
        }
      }
      const items21 = [];
      cResult[38] = items20;
      cResult[39] = tmp55;
      cResult[40] = items21;
      tmp54 = items21;
      tmp53 = tmp55;
      tmp52 = items20;
    } else {
      class O {
        constructor() {
          return ChannelStore.getChannel(stateFromStores2);
        }
      }
      tmp53 = cResult[39];
      tmp54 = cResult[40];
    }
    const tmpResult23 = tmp(tmp2[30]);
    const stateFromStores11 = tmpResult23.useStateFromStores(tmp52, tmp53, tmp54);
    const _Symbol2 = Symbol;
    if (cResult[41] === Symbol.for("react.memo_cache_sentinel")) {
      class O {
        constructor() {
          return ChannelStore.getChannel(stateFromStores2);
        }
      }
      const items22 = [GatewayConnectionStore];
      class X {
        constructor() {
          return guildId.getGuildId();
        }
      }
      const items23 = [];
      cResult[41] = items22;
      cResult[42] = tmp60;
      cResult[43] = items23;
      tmp59 = items23;
      tmp58 = tmp60;
      tmp57 = items22;
    } else {
      class O {
        constructor() {
          return ChannelStore.getChannel(stateFromStores2);
        }
      }
      tmp58 = cResult[42];
      tmp59 = cResult[43];
    }
    const tmpResult24 = tmp(tmp2[30]);
    const stateFromStores12 = tmpResult24.useStateFromStores(tmp57, tmp58, tmp59);
    const tmp63 = stateFromStores2(tmp2[31])(stateFromStores6);
    if (stateFromStores1 != null) {
      class O {
        constructor() {
          return ChannelStore.getChannel(stateFromStores2);
        }
      }
    }
    if (cResult[44] !== stateFromStores1) {
      class O {
        constructor() {
          return ChannelStore.getChannel(stateFromStores2);
        }
      }
      if (stateFromStores1 != null) {
        class O {
          constructor() {
            return ChannelStore.getChannel(stateFromStores2);
          }
        }
      }
      class X {
        constructor() {
          return guildId.getGuildId();
        }
      }
      cResult[45] = tmp66;
    } else {
      class O {
        constructor() {
          return ChannelStore.getChannel(stateFromStores2);
        }
      }
    }
    if (stateFromStores1 != null) {
      class O {
        constructor() {
          return ChannelStore.getChannel(stateFromStores2);
        }
      }
    }
    if (stateFromStores1 != null) {
      class O {
        constructor() {
          return ChannelStore.getChannel(stateFromStores2);
        }
      }
    }
    if (cResult[46] !== stateFromStores5) {
      class O {
        constructor() {
          return ChannelStore.getChannel(stateFromStores2);
        }
      }
      cResult[46] = stateFromStores5;
      class X {
        constructor() {
          return guildId.getGuildId();
        }
      }
      cResult[47] = tmp70;
    } else {
      class O {
        constructor() {
          return ChannelStore.getChannel(stateFromStores2);
        }
      }
    }
    if (null != stateFromStores5) {
      class O {
        constructor() {
          return ChannelStore.getChannel(stateFromStores2);
        }
      }
    }
    if (null != stateFromStores5) {
      class O {
        constructor() {
          return ChannelStore.getChannel(stateFromStores2);
        }
      }
    }
    const tmp73 = cResult[48];
    if (stateFromStores7 != null) {
      class O {
        constructor() {
          return ChannelStore.getChannel(stateFromStores2);
        }
      }
    }
    if (tmp73 !== undefined) {
      let hasItem;
      class O {
        constructor() {
          return ChannelStore.getChannel(stateFromStores2);
        }
      }
      if (stateFromStores7 != null) {
        class O {
          constructor() {
            return ChannelStore.getChannel(stateFromStores2);
          }
        }
        hasItem = obj15.has(constants2.PREVIEW_ENABLED);
      }
      class X {
        constructor() {
          return guildId.getGuildId();
        }
      }
      cResult[48] = undefined;
      cResult[49] = hasItem;
    } else {
      class O {
        constructor() {
          return ChannelStore.getChannel(stateFromStores2);
        }
      }
    }
    if (cResult[50] === stateFromStores12) {
      class O {
        constructor() {
          return ChannelStore.getChannel(stateFromStores2);
        }
      }
    }
    const obj3 = { voiceChannelId: undefined, voiceChannelGuildId: tmp66, voiceChannelType: undefined, voiceChannelBitrate: undefined, videoEnabled: stateFromStores10, isScreenSharing: stateFromStores11, gamePlatform: tmp70, gameName: null, gameId: null, selectedChannelId: stateFromStores2, selectedGuildId: stateFromStores6, connected: stateFromStores12, isNSFWChannel: tmp21, hasPreviewEnabled: tmp75, isMemberPending: stateFromStores9, postableChannelCount: tmp63, isTextInVoice: stateFromStores4 };
    const merged = Object.assign(obj3);
    const tmp85 = <AutoAnalytics />;
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
    cResult[65] = tmp75;
    cResult[66] = stateFromStores10;
    cResult[67] = tmp85;
  }
  ae = function ae() {
    let tmp2 = null != stateFromStores8 && null != stateFromStores6;
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
}) : (() => {
  let application_id;
  let bitrate;
  let connected;
  let currentUser;
  let guildId;
  let hasItem;
  let name;
  let stateFromStores;
  let stateFromStores6;
  let stateFromStores8;
  let type;
  const tmp = stateFromStores;
  let tmp2 = stateFromStores6;
  const items = [SelectedChannelStore];
  const obj = stateFromStores(stateFromStores6[30]);
  stateFromStores = obj.useStateFromStores(items, () => SelectedChannelStore.getVoiceChannelId(), []);
  const items1 = [ChannelStore];
  const items2 = [stateFromStores];
  const obj2 = stateFromStores(stateFromStores6[30]);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(stateFromStores), items2);
  const items3 = [SelectedChannelStore];
  const obj4 = stateFromStores(stateFromStores6[30]);
  const stateFromStores2 = obj4.useStateFromStores(items3, () => SelectedChannelStore.getChannelId(undefined, false));
  const items4 = [ChannelStore];
  const items5 = [stateFromStores2];
  const obj5 = stateFromStores(stateFromStores6[30]);
  const stateFromStores3 = obj5.useStateFromStores(items4, () => ChannelStore.getChannel(stateFromStores2), items5);
  let nsfw;
  if (stateFromStores3 != null) {
    nsfw = stateFromStores3.nsfw;
  }
  const items6 = [stateFromStores8];
  const items7 = [stateFromStores2];
  const tmpResult = tmp(tmp2[30]);
  const stateFromStores4 = tmpResult.useStateFromStores(items6, () => {
    const chatOpen = null != stateFromStores2 && ChannelRTCStore.getChatOpen(tmp);
    return chatOpen;
  }, items7);
  const items8 = [SelfPresenceStore];
  const tmpResult9 = tmp(tmp2[30]);
  const stateFromStores5 = tmpResult9.useStateFromStores(items8, () => SelfPresenceStore.findActivity((type) => type.type === constants.PLAYING), []);
  const items9 = [SelectedGuildStore];
  const tmpResult10 = tmp(tmp2[30]);
  stateFromStores6 = tmpResult10.useStateFromStores(items9, () => guildId.getGuildId(), []);
  const items10 = [GuildStore];
  const items11 = [stateFromStores6];
  const tmpResult11 = tmp(tmp2[30]);
  const stateFromStores7 = tmpResult11.useStateFromStores(items10, () => GuildStore.getGuild(stateFromStores6), items11);
  const items12 = [UserStore];
  const tmpResult12 = tmp(tmp2[30]);
  stateFromStores8 = tmpResult12.useStateFromStores(items12, () => currentUser.getCurrentUser(), []);
  const items13 = [GuildMemberStore];
  const items14 = [stateFromStores8, stateFromStores6];
  const tmpResult13 = tmp(tmp2[30]);
  const stateFromStores9 = tmpResult13.useStateFromStores(items13, () => {
    let tmp2 = null != stateFromStores8 && null != stateFromStores6;
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
  const items15 = [MediaEngineStore];
  const tmpResult14 = tmp(tmp2[30]);
  const stateFromStores10 = tmpResult14.useStateFromStores(items15, () => MediaEngineStore.isVideoEnabled(), []);
  const items16 = [MediaEngineStore];
  const tmpResult15 = tmp(tmp2[30]);
  const stateFromStores11 = tmpResult15.useStateFromStores(items16, () => MediaEngineStore.isScreenSharing(), []);
  const items17 = [GatewayConnectionStore];
  const tmpResult16 = tmp(tmp2[30]);
  const stateFromStores12 = tmpResult16.useStateFromStores(items17, () => connected.isConnected(), []);
  let id;
  const tmp16 = stateFromStores2;
  const tmp17 = stateFromStores2(tmp2[31])(stateFromStores6);
  if (stateFromStores1 != null) {
    id = stateFromStores1.id;
  }
  const obj3 = { voiceChannelId: id, voiceChannelGuildId: guildId, voiceChannelType: type, voiceChannelBitrate: bitrate, videoEnabled: stateFromStores10, isScreenSharing: stateFromStores11, gamePlatform: tmp16(tmp2[32])(stateFromStores5), gameName: name, gameId: application_id, selectedChannelId: stateFromStores2, selectedGuildId: stateFromStores6, connected: stateFromStores12, isNSFWChannel: nsfw, hasPreviewEnabled: hasItem, isMemberPending: stateFromStores9, postableChannelCount: tmp17, isTextInVoice: stateFromStores4 };
  guildId = undefined;
  if (stateFromStores1 != null) {
    guildId = stateFromStores1.getGuildId();
  }
  type = undefined;
  if (stateFromStores1 != null) {
    type = stateFromStores1.type;
  }
  bitrate = undefined;
  if (stateFromStores1 != null) {
    bitrate = stateFromStores1.bitrate;
  }
  name = null;
  if (null != stateFromStores5) {
    name = stateFromStores5.name;
  }
  application_id = null;
  if (null != stateFromStores5) {
    application_id = stateFromStores5.application_id;
  }
  hasItem = undefined;
  if (stateFromStores7 != null) {
    const features = stateFromStores7.features;
    hasItem = features.has(constants2.PREVIEW_ENABLED);
  }
  const merged = Object.assign(obj3);
  return <AutoAnalytics />;
});
const result = size.fileFinishedImporting("components_native/AutoAnalytics.tsx");

export default tmp4;