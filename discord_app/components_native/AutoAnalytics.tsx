// discord_app/components_native/AutoAnalytics.tsx
import AnalyticsUtilsDefault from "../utils/AnalyticsUtils.tsx";
import GlobalUtils from "../utils/GlobalUtils.tsx";
import FavoritesUtils from "../modules/favorites/FavoritesUtils.tsx";
import AppAnalyticsUtils from "../modules/app_analytics/AppAnalyticsUtils.tsx";
import trackChannelOpenedClickstreamDefault from "../modules/app_analytics/track/channel_opened/trackChannelOpenedClickstream.tsx";
import GuildThemeAnalyticsUtils from "../modules/guild_themes/GuildThemeAnalyticsUtils.tsx";
import trackGuildViewedClickstreamDefault from "../modules/app_analytics/track/guild_viewed/trackGuildViewedClickstream.tsx";
import trackFavoritesGuildViewedDefault from "../modules/favorites/analytics/trackFavoritesGuildViewed.tsx";
import getChannelOpenedRouteTrackingProps from "../modules/app_analytics/track/channel_opened/getChannelOpenedRouteTrackingProps.tsx";
import noop from "../../_runtime/metro/00019__.js";
import ChannelRTCStore from "../modules/calls/ChannelRTCStore.tsx";
import GatewayConnectionStore from "../modules/gateway/GatewayConnectionStore.tsx";
import GuildScheduledEventStore from "../modules/guild_scheduled_events/GuildScheduledEventStore.tsx";
import StageInstanceStore from "../modules/stage_channels/StageInstanceStore.tsx";
import ChannelStore from "../stores/ChannelStore.tsx";
import GuildMemberStore from "../stores/GuildMemberStore.tsx";
import GuildStore from "../stores/GuildStore.tsx";
import MediaEngineStore from "../stores/MediaEngineStore.tsx";
import NetworkStore from "../stores/NetworkStore.tsx";
import RTCConnectionStore from "../stores/RTCConnectionStore.tsx";
import SelectedChannelStore from "../stores/SelectedChannelStore.tsx";
import SelectedGuildStore from "../stores/SelectedGuildStore.tsx";
import SelfPresenceStore from "../stores/SelfPresenceStore.tsx";
import UserGuildSettingsStore from "../stores/UserGuildSettingsStore.tsx";
import UserStore from "../stores/UserStore.tsx";

require = fn;
const Constants = fn(1074);
({ AnalyticEvents: closure_18, ActivityTypes: closure_19, GuildFeatures: closure_20 } = Constants);
const isStaticChannelRoute = fn(1964).isStaticChannelRoute;
const jsx = fn(21).jsx;
const PureComponent = noop.PureComponent;
class AutoAnalytics extends PureComponent {}
const prototype = AutoAnalytics.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  const self = this;
  const props = this.props;
  ({ selectedChannelId, selectedGuildId, isMemberPending } = props);
  ({ hasPreviewEnabled, postableChannelCount } = props);
  if (null != selectedChannelId) {
    let obj = {};
    const merged = Object.assign(AppAnalyticsUtils.getChannelOpenedMetadata(selectedChannelId));
    obj.selected_guild_id = selectedGuildId;
    self._trackWithMetadata(constants.CHANNEL_OPENED, obj);
    obj = { channelId: selectedChannelId };
    trackChannelOpenedClickstreamDefault(obj);
    if (tmp) {
      const obj1 = { channel_is_nsfw: tmp2 };
      AppAnalyticsUtils.trackWithMetadata(constants.TEXT_IN_VOICE_OPENED, obj1);
      const tmp18Result = AppAnalyticsUtils;
    }
  }
  if (null != selectedGuildId) {
    if (isMemberPending) {
      const obj2 = { is_pending: isMemberPending, preview_enabled: hasPreviewEnabled };
      let obj3 = obj2;
    } else {
      obj3 = {};
    }
    const obj4 = {};
    const merged1 = Object.assign(obj3);
    obj4.postable_channels = postableChannelCount;
    obj4.viewing_all_channels = !UserGuildSettingsStore.isOptInEnabled(selectedGuildId);
    let obj5 = GuildThemeAnalyticsUtils;
    const merged2 = Object.assign(obj5.collectGuildThemeAnalyticsMetadata(selectedGuildId));
    self._trackWithMetadata(constants.GUILD_VIEWED, obj4);
    obj5 = { guildId: selectedGuildId };
    trackGuildViewedClickstreamDefault(obj5);
    if (obj8.isFavoritesGuildId(selectedGuildId)) {
      trackFavoritesGuildViewedDefault();
    }
    obj8 = FavoritesUtils;
  }
};
prototype["componentDidUpdate"] = function componentDidUpdate(voiceChannelId) {
  const self = this;
  ({
    voiceChannelId,
    voiceChannelGuildId,
    voiceChannelType,
    videoEnabled,
    selectedChannelId,
    selectedGuildId,
    isNSFWChannel,
    isMemberPending,
    isScreenSharing,
    isTextInVoice,
    voiceChannelBitrate,
    hasPreviewEnabled,
    postableChannelCount,
  } = this.props);
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
      let obj = {
        channel_id: null,
        channel_type: null,
        channel_bitrate: null,
        guild_id: null,
        rtc_connection_id: null,
        duration: null,
        media_session_id: null,
        stage_instance_id: null,
        guild_scheduled_event_id: null,
      };
      ({
        voiceChannelId: obj2.channel_id,
        voiceChannelType: obj2.channel_type,
        voiceChannelBitrate: obj2.channel_bitrate,
        voiceChannelGuildId: obj2.guild_id,
      } = voiceChannelId);
      let rtcConnectionId;
      if (tmp2 != null) {
        rtcConnectionId = tmp2.rtcConnectionId;
      }
      obj.rtc_connection_id = rtcConnectionId;
      let duration;
      if (tmp2 != null) {
        duration = tmp2.duration;
      }
      obj.duration = duration;
      let mediaSessionId;
      if (tmp2 != null) {
        mediaSessionId = tmp2.mediaSessionId;
      }
      obj.media_session_id = mediaSessionId;
      let id;
      if (stageInstanceByChannel != null) {
        id = stageInstanceByChannel.id;
      }
      obj.stage_instance_id = id;
      let id1;
      if (activeEventByChannel != null) {
        id1 = activeEventByChannel.id;
      }
      obj.guild_scheduled_event_id = id1;
      let obj2 = AppAnalyticsUtils;
      const merged = Object.assign(
        obj2.getVoiceStateMetadata(
          voiceChannelId.voiceChannelGuildId,
          voiceChannelId.voiceChannelId,
          voiceChannelId.videoEnabled,
        ),
      );
      const merged1 = Object.assign(self.getGameMetadata());
      let stats;
      if (tmp2 != null) {
        const voiceStateAnalytics = tmp2.voiceStateAnalytics;
        if (voiceStateAnalytics != null) {
          stats = voiceStateAnalytics.getStats();
        }
      }
      const merged2 = Object.assign(stats);
      obj.track(constants.LEAVE_VOICE_CHANNEL, obj);
    }
  }
  if (voiceChannelId.voiceChannelId !== voiceChannelId) {
    if (null != voiceChannelId) {
      const stageInstanceByChannel1 = StageInstanceStore.getStageInstanceByChannel(voiceChannelId);
      const activeEventByChannel1 = GuildScheduledEventStore.getActiveEventByChannel(voiceChannelId);
      obj = {
        channel_id: voiceChannelId,
        channel_type: voiceChannelType,
        channel_bitrate: voiceChannelBitrate,
        guild_id: voiceChannelGuildId,
        connection_type: NetworkStore.getType(),
        effective_connection_speed: NetworkStore.getEffectiveConnectionSpeed(),
        service_provider: NetworkStore.getServiceProvider(),
        stage_instance_id: null,
        guild_scheduled_event_id: null,
        join_voice_id: null,
      };
      let id2;
      if (stageInstanceByChannel1 != null) {
        id2 = stageInstanceByChannel1.id;
      }
      obj.stage_instance_id = id2;
      let id3;
      if (activeEventByChannel1 != null) {
        id3 = activeEventByChannel1.id;
      }
      obj.guild_scheduled_event_id = id3;
      obj.join_voice_id = RTCConnectionStore.getJoinVoiceId();
      let obj3 = AppAnalyticsUtils;
      const merged3 = Object.assign(obj3.getVoiceStateMetadata(voiceChannelGuildId, voiceChannelId, videoEnabled));
      const merged4 = Object.assign(self.getGameMetadata());
      AnalyticsUtilsDefault.track(constants.JOIN_VOICE_CHANNEL, obj);
    }
  }
  if (voiceChannelId.videoEnabled !== videoEnabled) {
    if (null != voiceChannelId) {
      let str = null;
      if (isScreenSharing) {
        str = "screen";
      }
      const items = [str];
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
      let obj4 = AnalyticsUtilsDefault;
      const obj1 = {
        video_input_type: str3,
        enabled_inputs: found,
        channel_id: voiceChannelId,
        channel_type: voiceChannelType,
        guild_id: voiceChannelGuildId,
      };
      const merged5 = Object.assign(self.getGameMetadata());
      const merged6 = Object.assign(AppAnalyticsUtils.collectVoiceAnalyticsMetadata(voiceChannelId));
      obj4.track(constants.VIDEO_INPUT_TOGGLED, obj1);
      const tmp31Result = AppAnalyticsUtils;
    }
  }
  let tmp41 = null == selectedChannelId;
  if (!tmp41) {
    tmp41 =
      voiceChannelId.selectedChannelId === selectedChannelId && voiceChannelId.selectedGuildId === selectedGuildId;
    const tmp42 =
      voiceChannelId.selectedChannelId === selectedChannelId && voiceChannelId.selectedGuildId === selectedGuildId;
  }
  if (!tmp41) {
    obj2 = {};
    let obj8 = getChannelOpenedRouteTrackingProps;
    const merged7 = Object.assign(obj8.getChannelOpenedRouteTrackingProps(selectedChannelId));
    let obj9 = AppAnalyticsUtils;
    const merged8 = Object.assign(obj9.getChannelOpenedMetadata(selectedChannelId));
    obj2.selected_guild_id = selectedGuildId;
    self._trackWithMetadata(constants.CHANNEL_OPENED, obj2);
    obj3 = { channelId: selectedChannelId };
    trackChannelOpenedClickstreamDefault(obj3);
    if (isTextInVoice) {
      obj4 = { channel_is_nsfw: isNSFWChannel };
      AppAnalyticsUtils.trackWithMetadata(constants.TEXT_IN_VOICE_OPENED, obj4);
      const tmp44Result = AppAnalyticsUtils;
    }
  }
  if (isTextInVoice) {
    isTextInVoice = !voiceChannelId.isTextInVoice;
  }
  if (isTextInVoice) {
    const obj5 = { channel_is_nsfw: isNSFWChannel };
    AppAnalyticsUtils.trackWithMetadata(constants.TEXT_IN_VOICE_OPENED, obj5);
  }
  if (null != selectedGuildId) {
    if (voiceChannelId.selectedGuildId !== selectedGuildId) {
      if (isMemberPending) {
        const obj6 = { is_pending: isMemberPending, preview_enabled: hasPreviewEnabled };
        let obj7 = obj6;
      } else {
        obj7 = {};
      }
      obj8 = {};
      const merged9 = Object.assign(obj7);
      obj8.postable_channels = postableChannelCount;
      obj8.viewing_all_channels = !UserGuildSettingsStore.isOptInEnabled(selectedGuildId);
      const merged10 = Object.assign(GuildThemeAnalyticsUtils.collectGuildThemeAnalyticsMetadata(selectedGuildId));
      self._trackWithMetadata(constants.GUILD_VIEWED, obj8);
      obj9 = { guildId: selectedGuildId };
      trackGuildViewedClickstreamDefault(obj9);
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
      obj = {};
      const merged = Object.assign(obj);
      const merged1 = Object.assign(self.collectDefaultAnalyticsMetadata(tmp, tmp2));
      AnalyticsUtilsDefault.track(CHANNEL_OPENED, obj);
      const tmp3Result = AnalyticsUtilsDefault;
    }
    obj2 = AnalyticsUtilsDefault;
  }
};
prototype["collectDefaultAnalyticsMetadata"] = function collectDefaultAnalyticsMetadata(
  guild_id,
  channel_static_route,
) {
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
  let obj = stateFromStores(stateFromStores6[28]);
  const items = [SelectedChannelStore];
  stateFromStores = obj.useStateFromStores(items, () => SelectedChannelStore.getVoiceChannelId(), []);
  const items1 = [ChannelStore];
  const items2 = [stateFromStores];
  const stateFromStores1 = stateFromStores(stateFromStores6[28]).useStateFromStores(
    items1,
    () => ChannelStore.getChannel(stateFromStores),
    items2,
  );
  const obj2 = stateFromStores(stateFromStores6[28]);
  const items3 = [SelectedChannelStore];
  const stateFromStores2 = stateFromStores(stateFromStores6[28]).useStateFromStores(items3, () =>
    SelectedChannelStore.getChannelId(undefined, false),
  );
  const obj4 = stateFromStores(stateFromStores6[28]);
  const items4 = [ChannelStore];
  const items5 = [stateFromStores2];
  const stateFromStores3 = stateFromStores(stateFromStores6[28]).useStateFromStores(
    items4,
    () => ChannelStore.getChannel(stateFromStores2),
    items5,
  );
  let nsfw;
  if (stateFromStores3 != null) {
    nsfw = stateFromStores3.nsfw;
  }
  let tmpResult = tmp(tmp2[28]);
  const items6 = [stateFromStores8];
  const items7 = [stateFromStores2];
  const stateFromStores4 = tmpResult.useStateFromStores(
    items6,
    () => {
      let chatOpen = null != stateFromStores2;
      if (chatOpen) {
        chatOpen = ChannelRTCStore.getChatOpen(tmp);
      }
      return chatOpen;
    },
    items7,
  );
  tmpResult = tmp(tmp2[28]);
  const items8 = [SelfPresenceStore];
  const stateFromStores5 = tmpResult.useStateFromStores(
    items8,
    () => SelfPresenceStore.findActivity((type) => type.type === constants.PLAYING),
    [],
  );
  const obj5 = stateFromStores(stateFromStores6[28]);
  const items9 = [SelectedGuildStore];
  stateFromStores6 = stateFromStores(stateFromStores6[28]).useStateFromStores(items9, () => guildId.getGuildId(), []);
  const tmpResult1 = stateFromStores(stateFromStores6[28]);
  const items10 = [GuildStore];
  const items11 = [stateFromStores6];
  const stateFromStores7 = stateFromStores(stateFromStores6[28]).useStateFromStores(
    items10,
    () => GuildStore.getGuild(stateFromStores6),
    items11,
  );
  const tmpResult2 = stateFromStores(stateFromStores6[28]);
  const items12 = [UserStore];
  stateFromStores8 = stateFromStores(stateFromStores6[28]).useStateFromStores(
    items12,
    () => currentUser.getCurrentUser(),
    [],
  );
  const tmpResult3 = stateFromStores(stateFromStores6[28]);
  const items13 = [GuildMemberStore];
  const items14 = [stateFromStores8, stateFromStores6];
  const stateFromStores9 = stateFromStores(stateFromStores6[28]).useStateFromStores(
    items13,
    () => {
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
    },
    items14,
  );
  const tmpResult4 = stateFromStores(stateFromStores6[28]);
  const items15 = [MediaEngineStore];
  const stateFromStores10 = stateFromStores(stateFromStores6[28]).useStateFromStores(
    items15,
    () => MediaEngineStore.isVideoEnabled(),
    [],
  );
  const tmpResult5 = stateFromStores(stateFromStores6[28]);
  const items16 = [MediaEngineStore];
  const stateFromStores11 = stateFromStores(stateFromStores6[28]).useStateFromStores(
    items16,
    () => MediaEngineStore.isScreenSharing(),
    [],
  );
  const tmpResult6 = stateFromStores(stateFromStores6[28]);
  const items17 = [GatewayConnectionStore];
  const stateFromStores12 = stateFromStores(stateFromStores6[28]).useStateFromStores(
    items17,
    () => connected.isConnected(),
    [],
  );
  let id;
  const tmp16 = stateFromStores2;
  const tmpResult7 = stateFromStores(stateFromStores6[28]);
  if (stateFromStores1 != null) {
    id = stateFromStores1.id;
  }
  obj = {
    voiceChannelId: id,
    voiceChannelGuildId: null,
    voiceChannelType: null,
    voiceChannelBitrate: null,
    videoEnabled: null,
    isScreenSharing: null,
    gamePlatform: null,
    gameName: null,
    gameId: null,
    selectedChannelId: null,
    selectedGuildId: null,
    connected: null,
    isNSFWChannel: null,
    hasPreviewEnabled: null,
    isMemberPending: null,
    postableChannelCount: null,
    isTextInVoice: null,
  };
  let guildId;
  if (stateFromStores1 != null) {
    guildId = stateFromStores1.getGuildId();
  }
  obj.voiceChannelGuildId = guildId;
  let type;
  if (stateFromStores1 != null) {
    type = stateFromStores1.type;
  }
  obj.voiceChannelType = type;
  let bitrate;
  if (stateFromStores1 != null) {
    bitrate = stateFromStores1.bitrate;
  }
  obj.voiceChannelBitrate = bitrate;
  obj.videoEnabled = stateFromStores10;
  obj.isScreenSharing = stateFromStores11;
  obj.gamePlatform = tmp16(stateFromStores6[30])(stateFromStores5);
  let name = null;
  if (null != stateFromStores5) {
    name = stateFromStores5.name;
  }
  obj.gameName = name;
  let application_id = null;
  if (null != stateFromStores5) {
    application_id = stateFromStores5.application_id;
  }
  obj.gameId = application_id;
  obj.selectedChannelId = stateFromStores2;
  obj.selectedGuildId = stateFromStores6;
  obj.connected = stateFromStores12;
  obj.isNSFWChannel = nsfw;
  let hasItem;
  if (stateFromStores7 != null) {
    const features = stateFromStores7.features;
    hasItem = features.has(constants2.PREVIEW_ENABLED);
  }
  obj.hasPreviewEnabled = hasItem;
  obj.isMemberPending = stateFromStores9;
  obj.postableChannelCount = stateFromStores2(stateFromStores6[29])(stateFromStores6);
  obj.isTextInVoice = stateFromStores4;
  obj = {};
  const merged = Object.assign(obj);
  return <AutoAnalytics />;
}
