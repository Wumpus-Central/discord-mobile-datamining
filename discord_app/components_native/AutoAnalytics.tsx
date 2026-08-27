// discord_app/components_native/AutoAnalytics.tsx
import expandEventPropertiesDefault from "../utils/AnalyticsUtils.tsx";
import isDiscordFrontendDevelopment from "../utils/GlobalUtils.tsx";
import getFavoritesAwareGuildName from "../modules/favorites/FavoritesUtils.tsx";
import collectGuildAnalyticsMetadata from "../modules/app_analytics/AppAnalyticsUtils.tsx";
import isClickstreamEnabled from "../modules/app_analytics/clickstream/Clickstream.tsx";
import trackChannelOpenedClickstreamDefault from "../modules/app_analytics/track/channel_opened/trackChannelOpenedClickstream.tsx";
import collectGuildThemeAnalyticsMetadata from "../modules/guild_themes/GuildThemeAnalyticsUtils.tsx";
import trackFavoritesGuildViewedDefault from "../modules/favorites/analytics/trackFavoritesGuildViewed.tsx";
import getChannelOpenedRouteTrackingProps from "../modules/app_analytics/track/channel_opened/getChannelOpenedRouteTrackingProps.tsx";
import closure_3 from "../modules/calls/ChannelRTCStore.tsx";
import closure_4 from "../modules/gateway/GatewayConnectionStore.tsx";
import closure_5 from "../modules/guild_scheduled_events/GuildScheduledEventStore.tsx";
import closure_6 from "../modules/stage_channels/StageInstanceStore.tsx";
import closure_7 from "../stores/ChannelStore.tsx";
import closure_8 from "../stores/GuildMemberStore.tsx";
import closure_9 from "../stores/GuildStore.tsx";
import closure_10 from "../stores/MediaEngineStore.tsx";
import closure_11 from "../stores/NetworkStore.tsx";
import closure_12 from "../stores/RTCConnectionStore.tsx";
import closure_13 from "../stores/SelectedChannelStore.tsx";
import closure_14 from "../stores/SelectedGuildStore.tsx";
import closure_15 from "../stores/SelfPresenceStore.tsx";
import closure_16 from "../stores/UserGuildSettingsStore.tsx";
import closure_17 from "../stores/UserStore.tsx";
import ME from "../Constants.tsx";
import { isStaticChannelRoute } from "../modules/channel/ChannelConstants.tsx";
import { jsx } from "../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../_runtime/00019_noop.js";

require = arg1;
({ AnalyticEvents: closure_18, ActivityTypes: closure_19, GuildFeatures: closure_20 } = ME);
const PureComponent = importAllResult.PureComponent;
class AutoAnalytics extends PureComponent {
}
const prototype = AutoAnalytics.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  const self = this;
  const props = this.props;
  ({ selectedChannelId, selectedGuildId, isMemberPending } = props);
  ({ hasPreviewEnabled, postableChannelCount } = props);
  if (null != selectedChannelId) {
    let obj = {};
    const merged = Object.assign(collectGuildAnalyticsMetadata.getChannelOpenedMetadata(selectedChannelId));
    obj.selected_guild_id = selectedGuildId;
    self._trackWithMetadata(constants.CHANNEL_OPENED, obj);
    obj = { channelId: null };
    obj[0] = selectedChannelId;
    trackChannelOpenedClickstreamDefault(obj);
    if (tmp) {
      obj1 = { channel_is_nsfw: null };
      obj1[0] = tmp2;
      tmp18(4653).trackWithMetadata(tmp17.TEXT_IN_VOICE_OPENED, obj1);
      const tmp18Result = tmp18(4653);
    }
    const obj11 = collectGuildAnalyticsMetadata;
    tmp17 = constants;
    tmp18 = require;
  }
  if (null != selectedGuildId) {
    if (isMemberPending) {
      const obj2 = { is_pending: null, preview_enabled: null };
      obj2[0] = isMemberPending;
      obj2[1] = hasPreviewEnabled;
      let obj3 = obj2;
    } else {
      obj3 = {};
    }
    const obj4 = {};
    const merged1 = Object.assign(obj3);
    obj4.postable_channels = postableChannelCount;
    obj4.viewing_all_channels = !closure_16.isOptInEnabled(selectedGuildId);
    let obj5 = collectGuildThemeAnalyticsMetadata;
    const merged2 = Object.assign(obj5.collectGuildThemeAnalyticsMetadata(selectedGuildId));
    self._trackWithMetadata(constants.GUILD_VIEWED, obj4);
    obj5 = { guild_id: null };
    obj5[0] = selectedGuildId;
    isClickstreamEnabled.trackClickstream(constants.GUILD_VIEWED_CLICKSTREAM, obj5);
    const obj7 = isClickstreamEnabled;
    if (obj9.isFavoritesGuildId(selectedGuildId)) {
      trackFavoritesGuildViewedDefault();
    }
    obj9 = getFavoritesAwareGuildName;
  }
};
prototype["componentDidUpdate"] = function componentDidUpdate(voiceChannelId) {
  const self = this;
  ({ voiceChannelId, voiceChannelGuildId, voiceChannelType, videoEnabled, selectedChannelId, selectedGuildId, isNSFWChannel, isMemberPending, isScreenSharing, isTextInVoice, voiceChannelBitrate, hasPreviewEnabled, postableChannelCount } = this.props);
  if (voiceChannelId.voiceChannelId !== voiceChannelId) {
    if (null != voiceChannelId.voiceChannelId) {
      const stageInstanceByChannel = store2.getStageInstanceByChannel(voiceChannelId.voiceChannelId);
      const activeEventByChannel = store.getActiveEventByChannel(voiceChannelId.voiceChannelId);
      const lastRTCConnectionState = store4.getLastRTCConnectionState();
      let channelId;
      if (lastRTCConnectionState != null) {
        channelId = lastRTCConnectionState.channelId;
      }
      let tmp2 = lastRTCConnectionState;
      if (channelId !== voiceChannelId.voiceChannelId) {
        tmp2 = null;
      }
      let obj = expandEventPropertiesDefault;
      obj = { channel_id: null, channel_type: null, channel_bitrate: null, guild_id: null, rtc_connection_id: null, duration: null, media_session_id: null, stage_instance_id: null, guild_scheduled_event_id: null };
      ({ voiceChannelId: obj2[0], voiceChannelType: obj2[1], voiceChannelBitrate: obj2[2], voiceChannelGuildId: obj2[3] } = voiceChannelId);
      let rtcConnectionId;
      if (tmp2 != null) {
        rtcConnectionId = tmp2.rtcConnectionId;
      }
      obj[4] = rtcConnectionId;
      let duration;
      if (tmp2 != null) {
        duration = tmp2.duration;
      }
      obj[5] = duration;
      let mediaSessionId;
      if (tmp2 != null) {
        mediaSessionId = tmp2.mediaSessionId;
      }
      obj[6] = mediaSessionId;
      let id;
      if (stageInstanceByChannel != null) {
        id = stageInstanceByChannel.id;
      }
      obj[7] = id;
      let id1;
      if (activeEventByChannel != null) {
        id1 = activeEventByChannel.id;
      }
      obj[8] = id1;
      let obj2 = collectGuildAnalyticsMetadata;
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
      obj.track(constants.LEAVE_VOICE_CHANNEL, obj);
    }
  }
  if (voiceChannelId.voiceChannelId !== voiceChannelId) {
    if (null != voiceChannelId) {
      const stageInstanceByChannel1 = store2.getStageInstanceByChannel(voiceChannelId);
      const activeEventByChannel1 = store.getActiveEventByChannel(voiceChannelId);
      obj = { channel_id: null, channel_type: null, channel_bitrate: null, guild_id: null, connection_type: null, effective_connection_speed: null, service_provider: null, stage_instance_id: null, guild_scheduled_event_id: null, join_voice_id: null };
      obj[0] = voiceChannelId;
      obj[1] = voiceChannelType;
      obj[2] = voiceChannelBitrate;
      obj[3] = voiceChannelGuildId;
      obj[4] = store3.getType();
      obj[5] = store3.getEffectiveConnectionSpeed();
      obj[6] = store3.getServiceProvider();
      let id2;
      if (stageInstanceByChannel1 != null) {
        id2 = stageInstanceByChannel1.id;
      }
      obj[7] = id2;
      let id3;
      if (activeEventByChannel1 != null) {
        id3 = activeEventByChannel1.id;
      }
      obj[8] = id3;
      obj[9] = store4.getJoinVoiceId();
      let obj3 = collectGuildAnalyticsMetadata;
      const merged3 = Object.assign(obj3.getVoiceStateMetadata(voiceChannelGuildId, voiceChannelId, videoEnabled));
      const merged4 = Object.assign(self.getGameMetadata());
      expandEventPropertiesDefault.track(constants.JOIN_VOICE_CHANNEL, obj);
      const obj23 = expandEventPropertiesDefault;
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
      const found = items.filter(isDiscordFrontendDevelopment.isNotNullish);
      if (!isScreenSharing) {
        str3 = "none";
        if (videoEnabled) {
          str3 = "camera";
        }
      }
      let obj4 = expandEventPropertiesDefault;
      obj1 = { video_input_type: null, enabled_inputs: null, channel_id: null, channel_type: null, guild_id: null };
      obj1[0] = str3;
      obj1[1] = found;
      obj1[2] = voiceChannelId;
      obj1[3] = voiceChannelType;
      obj1[4] = voiceChannelGuildId;
      const merged5 = Object.assign(self.getGameMetadata());
      const merged6 = Object.assign(collectGuildAnalyticsMetadata.collectVoiceAnalyticsMetadata(voiceChannelId));
      obj4.track(constants.VIDEO_INPUT_TOGGLED, obj1);
      const tmp31 = require;
      const tmp31Result = collectGuildAnalyticsMetadata;
    }
  }
  let tmp41 = null == selectedChannelId;
  if (!tmp41) {
    tmp41 = voiceChannelId.selectedChannelId === selectedChannelId && voiceChannelId.selectedGuildId === selectedGuildId;
    const tmp42 = voiceChannelId.selectedChannelId === selectedChannelId && voiceChannelId.selectedGuildId === selectedGuildId;
  }
  if (!tmp41) {
    obj2 = {};
    let obj8 = getChannelOpenedRouteTrackingProps;
    const merged7 = Object.assign(obj8.getChannelOpenedRouteTrackingProps(selectedChannelId));
    let obj9 = collectGuildAnalyticsMetadata;
    const merged8 = Object.assign(obj9.getChannelOpenedMetadata(selectedChannelId));
    obj2.selected_guild_id = selectedGuildId;
    self._trackWithMetadata(constants.CHANNEL_OPENED, obj2);
    obj3 = { channelId: null };
    obj3[0] = selectedChannelId;
    trackChannelOpenedClickstreamDefault(obj3);
    if (isTextInVoice) {
      obj4 = { channel_is_nsfw: null };
      obj4[0] = isNSFWChannel;
      tmp44(4653).trackWithMetadata(tmp43.TEXT_IN_VOICE_OPENED, obj4);
      const tmp44Result = tmp44(4653);
    }
    tmp43 = constants;
    tmp44 = require;
  }
  if (isTextInVoice) {
    isTextInVoice = !voiceChannelId.isTextInVoice;
  }
  if (isTextInVoice) {
    const obj5 = { channel_is_nsfw: null };
    obj5[0] = isNSFWChannel;
    collectGuildAnalyticsMetadata.trackWithMetadata(constants.TEXT_IN_VOICE_OPENED, obj5);
    const obj14 = collectGuildAnalyticsMetadata;
  }
  if (null != selectedGuildId) {
    if (voiceChannelId.selectedGuildId !== selectedGuildId) {
      if (isMemberPending) {
        const obj6 = { is_pending: null, preview_enabled: null };
        obj6[0] = isMemberPending;
        obj6[1] = hasPreviewEnabled;
        let obj7 = obj6;
      } else {
        obj7 = {};
      }
      obj8 = {};
      const merged9 = Object.assign(obj7);
      obj8.postable_channels = postableChannelCount;
      obj8.viewing_all_channels = !closure_16.isOptInEnabled(selectedGuildId);
      const merged10 = Object.assign(collectGuildThemeAnalyticsMetadata.collectGuildThemeAnalyticsMetadata(selectedGuildId));
      self._trackWithMetadata(constants.GUILD_VIEWED, obj8);
      const obj19 = collectGuildThemeAnalyticsMetadata;
      obj9 = { guild_id: null };
      obj9[0] = selectedGuildId;
      isClickstreamEnabled.trackClickstream(constants.GUILD_VIEWED_CLICKSTREAM, obj9);
      const obj20 = isClickstreamEnabled;
      if (obj22.isFavoritesGuildId(selectedGuildId)) {
        trackFavoritesGuildViewedDefault();
      }
      obj22 = getFavoritesAwareGuildName;
    }
  }
};
prototype["getGameMetadata"] = function getGameMetadata() {
  const props = this.props;
  return { game_platform: props.gamePlatform, game_name: props.gameName, game_id: props.gameId };
};
prototype["_trackWithMetadata"] = function _trackWithMetadata(CHANNEL_OPENED, fileSizeLimitEventProperties) {
  let obj = fileSizeLimitEventProperties;
  if (fileSizeLimitEventProperties === undefined) {
    obj = {};
  }
  const self = this;
  if (this.props.connected) {
    collectGuildAnalyticsMetadata.trackWithMetadata(CHANNEL_OPENED, obj);
    const obj5 = collectGuildAnalyticsMetadata;
  } else {
    if (!obj2.isThrottled(CHANNEL_OPENED)) {
      obj = {};
      const merged = Object.assign(obj);
      const merged1 = Object.assign(self.collectDefaultAnalyticsMetadata(tmp, tmp2));
      tmp3(698).track(CHANNEL_OPENED, obj);
      const tmp3Result = tmp3(698);
    }
    obj2 = expandEventPropertiesDefault;
    tmp3 = importDefault;
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
    channel = channel.getChannel(channel_static_route);
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
const result = require("set").fileFinishedImporting("components_native/AutoAnalytics.tsx");

export default function ConnectedAutoAnalytics() {
  let obj = stateFromStores(stateFromStores6[28]);
  const items = [closure_13];
  stateFromStores = obj.useStateFromStores(items, () => store.getVoiceChannelId(), []);
  const items1 = [closure_7];
  const items2 = [stateFromStores];
  const stateFromStores1 = stateFromStores(stateFromStores6[28]).useStateFromStores(items1, () => closure_1_7.getChannel(stateFromStores), items2);
  const obj2 = stateFromStores(stateFromStores6[28]);
  const items3 = [closure_13];
  const stateFromStores2 = stateFromStores(stateFromStores6[28]).useStateFromStores(items3, () => store.getChannelId(undefined, false));
  const obj4 = stateFromStores(stateFromStores6[28]);
  const items4 = [closure_7];
  const items5 = [stateFromStores2];
  const stateFromStores3 = stateFromStores(stateFromStores6[28]).useStateFromStores(items4, () => closure_1_7.getChannel(stateFromStores2), items5);
  let nsfw;
  if (stateFromStores3 != null) {
    nsfw = stateFromStores3.nsfw;
  }
  let tmpResult = tmp(tmp2[28]);
  const items6 = [stateFromStores8];
  const items7 = [stateFromStores2];
  const stateFromStores4 = tmpResult.useStateFromStores(items6, () => {
    let chatOpen = null != stateFromStores2;
    if (chatOpen) {
      chatOpen = stateFromStores8.getChatOpen(tmp);
    }
    return chatOpen;
  }, items7);
  tmpResult = tmp(tmp2[28]);
  const items8 = [closure_15];
  const stateFromStores5 = tmpResult.useStateFromStores(items8, () => closure_15.findActivity((type) => type.type === constants.PLAYING), []);
  const obj5 = stateFromStores(stateFromStores6[28]);
  const items9 = [closure_14];
  stateFromStores6 = stateFromStores(stateFromStores6[28]).useStateFromStores(items9, () => guildId.getGuildId(), []);
  const tmpResult1 = stateFromStores(stateFromStores6[28]);
  const items10 = [closure_9];
  const items11 = [stateFromStores6];
  const stateFromStores7 = stateFromStores(stateFromStores6[28]).useStateFromStores(items10, () => closure_1_9.getGuild(stateFromStores6), items11);
  const tmpResult2 = stateFromStores(stateFromStores6[28]);
  const items12 = [closure_17];
  stateFromStores8 = stateFromStores(stateFromStores6[28]).useStateFromStores(items12, () => currentUser.getCurrentUser(), []);
  const tmpResult3 = stateFromStores(stateFromStores6[28]);
  const items13 = [closure_8];
  const items14 = [stateFromStores8, stateFromStores6];
  const stateFromStores9 = stateFromStores(stateFromStores6[28]).useStateFromStores(items13, () => {
    let tmp2 = null != stateFromStores8;
    if (tmp2) {
      tmp2 = null != stateFromStores6;
    }
    if (tmp2) {
      const member = closure_1_8.getMember(stateFromStores6, stateFromStores8.id);
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
  const tmpResult4 = stateFromStores(stateFromStores6[28]);
  const items15 = [closure_10];
  const stateFromStores10 = stateFromStores(stateFromStores6[28]).useStateFromStores(items15, () => closure_10.isVideoEnabled(), []);
  const tmpResult5 = stateFromStores(stateFromStores6[28]);
  const items16 = [closure_10];
  const stateFromStores11 = stateFromStores(stateFromStores6[28]).useStateFromStores(items16, () => closure_10.isScreenSharing(), []);
  const tmpResult6 = stateFromStores(stateFromStores6[28]);
  const items17 = [closure_4];
  const stateFromStores12 = stateFromStores(stateFromStores6[28]).useStateFromStores(items17, () => connected.isConnected(), []);
  let id;
  const tmp16 = stateFromStores2;
  const tmpResult7 = stateFromStores(stateFromStores6[28]);
  if (stateFromStores1 != null) {
    id = stateFromStores1.id;
  }
  obj = { voiceChannelId: id, voiceChannelGuildId: null, voiceChannelType: null, voiceChannelBitrate: null, videoEnabled: null, isScreenSharing: null, gamePlatform: null, gameName: null, gameId: null, selectedChannelId: null, selectedGuildId: null, connected: null, isNSFWChannel: null, hasPreviewEnabled: null, isMemberPending: null, postableChannelCount: null, isTextInVoice: null };
  let guildId;
  if (stateFromStores1 != null) {
    guildId = stateFromStores1.getGuildId();
  }
  obj[1] = guildId;
  let type;
  if (stateFromStores1 != null) {
    type = stateFromStores1.type;
  }
  obj[2] = type;
  let bitrate;
  if (stateFromStores1 != null) {
    bitrate = stateFromStores1.bitrate;
  }
  obj[3] = bitrate;
  obj[4] = stateFromStores10;
  obj[5] = stateFromStores11;
  obj[6] = tmp16(stateFromStores6[30])(stateFromStores5);
  let name = null;
  if (null != stateFromStores5) {
    name = stateFromStores5.name;
  }
  obj[7] = name;
  let application_id = null;
  if (null != stateFromStores5) {
    application_id = stateFromStores5.application_id;
  }
  obj[8] = application_id;
  obj[9] = stateFromStores2;
  obj[10] = stateFromStores6;
  obj[11] = stateFromStores12;
  obj[12] = nsfw;
  let hasItem;
  if (stateFromStores7 != null) {
    const features = stateFromStores7.features;
    hasItem = features.has(constants2.PREVIEW_ENABLED);
  }
  obj[13] = hasItem;
  obj[14] = stateFromStores9;
  obj[15] = stateFromStores2(stateFromStores6[29])(stateFromStores6);
  obj[16] = stateFromStores4;
  obj = {};
  const merged = Object.assign(obj);
  return <AutoAnalytics />;
};