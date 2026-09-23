// === Module 17292: AutoAnalytics ===

// Module 17292 (AutoAnalytics)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import FavoritesUtils from "FavoritesUtils" /* 2067 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5007 */;
import trackChannelOpenedClickstreamDefault from "trackChannelOpenedClickstream" /* 8102 */;
import GuildThemeAnalyticsUtils from "GuildThemeAnalyticsUtils" /* 17293 */;
import trackGuildViewedClickstreamDefault from "trackGuildViewedClickstream" /* 17294 */;
import trackFavoritesGuildViewedDefault from "trackFavoritesGuildViewed" /* 17295 */;
import getChannelOpenedRouteTrackingProps from "getChannelOpenedRouteTrackingProps" /* 17296 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4843 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5580 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7854 */;
import StageInstanceStore from "StageInstanceStore" /* 2047 */;
import ChannelStore from "ChannelStore" /* 2042 */;
import GuildMemberStore from "GuildMemberStore" /* 2105 */;
import GuildStore from "GuildStore" /* 2064 */;
import MediaEngineStore from "MediaEngineStore" /* 1992 */;
import NetworkStore from "NetworkStore" /* 4876 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4850 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2096 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4648 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5582 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5008 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const Constants = fn(1074);
({ AnalyticEvents: closure_18, ActivityTypes: closure_19, GuildFeatures: closure_20 } = Constants);
const isStaticChannelRoute = fn(2049).isStaticChannelRoute;
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
const size = fn(2);
const result = size.fileFinishedImporting("components_native/AutoAnalytics.tsx");

export default function ConnectedAutoAnalytics() {
  const items = [SelectedChannelStore];
  stateFromStores = stateFromStores(stateFromStores6[28]).useStateFromStores(items, () => SelectedChannelStore.getVoiceChannelId(), []);
  const obj = stateFromStores(stateFromStores6[28]);
  const items1 = [ChannelStore];
  const items2 = [stateFromStores];
  const stateFromStores1 = stateFromStores(stateFromStores6[28]).useStateFromStores(items1, () => ChannelStore.getChannel(stateFromStores), items2);
  const obj2 = stateFromStores(stateFromStores6[28]);
  const items3 = [SelectedChannelStore];
  const stateFromStores2 = stateFromStores(stateFromStores6[28]).useStateFromStores(items3, () => SelectedChannelStore.getChannelId(undefined, false));
  const obj4 = stateFromStores(stateFromStores6[28]);
  const items4 = [ChannelStore];
  const items5 = [stateFromStores2];
  const stateFromStores3 = stateFromStores(stateFromStores6[28]).useStateFromStores(items4, () => ChannelStore.getChannel(stateFromStores2), items5);
  let nsfw;
  if (stateFromStores3 != null) {
    nsfw = stateFromStores3.nsfw;
  }
  const obj5 = stateFromStores(stateFromStores6[28]);
  const items6 = [stateFromStores8];
  const items7 = [stateFromStores2];
  const stateFromStores4 = stateFromStores(stateFromStores6[28]).useStateFromStores(items6, () => {
    let chatOpen = null != stateFromStores2;
    if (chatOpen) {
      chatOpen = ChannelRTCStore.getChatOpen(tmp);
    }
    return chatOpen;
  }, items7);
  const tmpResult = stateFromStores(stateFromStores6[28]);
  const items8 = [SelfPresenceStore];
  const stateFromStores5 = stateFromStores(stateFromStores6[28]).useStateFromStores(items8, () => SelfPresenceStore.findActivity((type) => type.type === constants.PLAYING), []);
  const tmpResult9 = stateFromStores(stateFromStores6[28]);
  const items9 = [SelectedGuildStore];
  stateFromStores6 = stateFromStores(stateFromStores6[28]).useStateFromStores(items9, () => guildId.getGuildId(), []);
  const tmpResult10 = stateFromStores(stateFromStores6[28]);
  const items10 = [GuildStore];
  const items11 = [stateFromStores6];
  const stateFromStores7 = stateFromStores(stateFromStores6[28]).useStateFromStores(items10, () => GuildStore.getGuild(stateFromStores6), items11);
  const tmpResult11 = stateFromStores(stateFromStores6[28]);
  const items12 = [UserStore];
  stateFromStores8 = stateFromStores(stateFromStores6[28]).useStateFromStores(items12, () => currentUser.getCurrentUser(), []);
  const tmpResult12 = stateFromStores(stateFromStores6[28]);
  const items13 = [GuildMemberStore];
  const items14 = [stateFromStores8, stateFromStores6];
  const stateFromStores9 = stateFromStores(stateFromStores6[28]).useStateFromStores(items13, () => {
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
  const tmpResult13 = stateFromStores(stateFromStores6[28]);
  const items15 = [MediaEngineStore];
  const stateFromStores10 = stateFromStores(stateFromStores6[28]).useStateFromStores(items15, () => MediaEngineStore.isVideoEnabled(), []);
  const tmpResult14 = stateFromStores(stateFromStores6[28]);
  const items16 = [MediaEngineStore];
  const stateFromStores11 = stateFromStores(stateFromStores6[28]).useStateFromStores(items16, () => MediaEngineStore.isScreenSharing(), []);
  const tmpResult15 = stateFromStores(stateFromStores6[28]);
  const items17 = [GatewayConnectionStore];
  const stateFromStores12 = stateFromStores(stateFromStores6[28]).useStateFromStores(items17, () => connected.isConnected(), []);
  let id;
  const tmp16 = stateFromStores2;
  const tmpResult16 = stateFromStores(stateFromStores6[28]);
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
  obj3.gamePlatform = tmp16(stateFromStores6[30])(stateFromStores5);
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
  obj3.postableChannelCount = stateFromStores2(stateFromStores6[29])(stateFromStores6);
  obj3.isTextInVoice = stateFromStores4;
  const merged = Object.assign(obj3);
  return <AutoAnalytics />;
};