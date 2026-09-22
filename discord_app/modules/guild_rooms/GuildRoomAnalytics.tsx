// === Module 4936: GuildRoomAnalytics ===

// Module 4936 (GuildRoomAnalytics)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import GuildRoomUtils from "GuildRoomUtils" /* 4918 */;
import GuildRoomBackgrounds from "GuildRoomBackgrounds" /* 4920 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4937 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2042 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4780 */;
import VoiceStateStore from "VoiceStateStore" /* 4776 */;
import GuildRoomStore from "GuildRoomStore" /* 4915 */;

require = fn;
function getBaseProperties(merged) {
  ({ userId, guildId, channelId } = merged);
  if (userId == null) {
    userId = AuthenticationStore.getId();
  }
  const roomUsers = GuildRoomStore.getRoomUsers(channelId);
  const obj2 = { user_id: userId, guild_id: null, channel_id: null, guild_room_user_count: null, guild_room_user_connected: null, guild_room_background: null };
  if (null == guildId) {
    const channel = ChannelStore.getChannel(channelId);
    let guildId1;
    if (channel != null) {
      guildId1 = channel.getGuildId();
    }
    guildId = guildId1;
  }
  obj2.guild_id = guildId;
  obj2.channel_id = channelId;
  obj2.guild_room_user_count = roomUsers.size;
  obj2.guild_room_user_connected = roomUsers.has(userId);
  const room = GuildRoomStore.getRoom(channelId);
  let background;
  if (room != null) {
    background = room.background;
  }
  if (background == null) {
    background = GuildRoomBackgrounds.GuildRoomBackgrounds.DEFAULT;
  }
  obj2.guild_room_background = background;
  return obj2;
}
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_rooms/GuildRoomAnalytics.tsx");

export const trackGuildRoomObjectInteracted = function trackGuildRoomObjectInteracted(interactionType) {
  interactionType = interactionType.interactionType;
  let merged = Object.assign(interactionType, Object.assign({ interactionType: 0 }));
  const channelId = merged.channelId;
  closure_129_0 = channelId;
  closure_129_1 = (arg0) => {
    const obj2 = {};
    merged = Object.assign(getBaseProperties(merged));
    obj2.interaction_type = interactionType;
    const merged1 = Object.assign(arg0);
    AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.GUILD_ROOM_OBJECT_INTERACTED, obj2);
  };
  let timeout;
  function onChange() {
    const mediaSessionId = RTCConnectionStore.getMediaSessionId();
    if (null != mediaSessionId) {
      RTCConnectionStore.removeChangeListener(AuthenticationStore);
      const _clearTimeout = clearTimeout;
      clearTimeout(dependencyMap);
      const obj2 = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj2.voice_state_count = Object.keys(VoiceStateStore.getVoiceStatesForChannel(update)).length;
      obj2.voice_media_session_id = mediaSessionId;
      merged(obj2);
    }
  }
  closure_129_3 = onChange;
  const mediaSessionId = RTCConnectionStore.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      RTCConnectionStore.removeChangeListener(AuthenticationStore);
      clearTimeout(dependencyMap);
      merged({ voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(update)).length });
    }, 2500);
    RTCConnectionStore.addChangeListener(onChange);
  } else {
    let obj2 = { voice_state_count: null, voice_media_session_id: null };
    const _Object = Object;
    obj2.voice_state_count = Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length;
    obj2.voice_media_session_id = mediaSessionId;
    const obj4 = {};
    let merged1 = Object.assign(getBaseProperties(merged));
    obj4.interaction_type = interactionType;
    const merged2 = Object.assign(obj2);
    merged(4937).trackWithMetadata(AnalyticEvents.GUILD_ROOM_OBJECT_INTERACTED, obj4);
    const obj3 = merged(4937);
  }
};
export const trackGuildRoomInteracted = function trackGuildRoomInteracted(interactionType) {
  interactionType = interactionType.interactionType;
  let merged = Object.assign(interactionType, Object.assign({ interactionType: 0 }));
  const channelId = merged.channelId;
  closure_129_0 = channelId;
  closure_129_1 = (arg0) => {
    const obj2 = {};
    merged = Object.assign(getBaseProperties(merged));
    obj2.interaction_type = interactionType;
    const merged1 = Object.assign(arg0);
    AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.GUILD_ROOM_INTERACTED, obj2);
  };
  let timeout;
  function onChange() {
    const mediaSessionId = RTCConnectionStore.getMediaSessionId();
    if (null != mediaSessionId) {
      RTCConnectionStore.removeChangeListener(AuthenticationStore);
      const _clearTimeout = clearTimeout;
      clearTimeout(dependencyMap);
      const obj2 = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj2.voice_state_count = Object.keys(VoiceStateStore.getVoiceStatesForChannel(update)).length;
      obj2.voice_media_session_id = mediaSessionId;
      merged(obj2);
    }
  }
  closure_129_3 = onChange;
  const mediaSessionId = RTCConnectionStore.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      RTCConnectionStore.removeChangeListener(AuthenticationStore);
      clearTimeout(dependencyMap);
      merged({ voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(update)).length });
    }, 2500);
    RTCConnectionStore.addChangeListener(onChange);
  } else {
    let obj2 = { voice_state_count: null, voice_media_session_id: null };
    const _Object = Object;
    obj2.voice_state_count = Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length;
    obj2.voice_media_session_id = mediaSessionId;
    const obj4 = {};
    let merged1 = Object.assign(getBaseProperties(merged));
    obj4.interaction_type = interactionType;
    const merged2 = Object.assign(obj2);
    merged(4937).trackWithMetadata(AnalyticEvents.GUILD_ROOM_INTERACTED, obj4);
    const obj3 = merged(4937);
  }
};
export const trackGuildRoomLayoutToggled = function trackGuildRoomLayoutToggled(location) {
  const _location = location.location;
  const guildRoomOpen = location.guildRoomOpen;
  let merged = Object.assign(location, Object.assign({ location: 0, guildRoomOpen: 0 }));
  const channelId = merged.channelId;
  closure_129_0 = channelId;
  closure_129_1 = (arg0) => {
    const obj2 = {};
    merged = Object.assign(getBaseProperties(merged));
    obj2.location = _location;
    obj2.guild_room_open = guildRoomOpen;
    const merged1 = Object.assign(arg0);
    AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.GUILD_ROOM_LAYOUT_TOGGLED, obj2);
  };
  let timeout;
  function onChange() {
    const mediaSessionId = RTCConnectionStore.getMediaSessionId();
    if (null != mediaSessionId) {
      RTCConnectionStore.removeChangeListener(AuthenticationStore);
      const _clearTimeout = clearTimeout;
      clearTimeout(dependencyMap);
      const obj2 = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj2.voice_state_count = Object.keys(VoiceStateStore.getVoiceStatesForChannel(update)).length;
      obj2.voice_media_session_id = mediaSessionId;
      merged(obj2);
    }
  }
  closure_129_3 = onChange;
  const mediaSessionId = RTCConnectionStore.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      RTCConnectionStore.removeChangeListener(AuthenticationStore);
      clearTimeout(dependencyMap);
      merged({ voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(update)).length });
    }, 2500);
    RTCConnectionStore.addChangeListener(onChange);
  } else {
    let obj2 = { voice_state_count: null, voice_media_session_id: null };
    const _Object = Object;
    obj2.voice_state_count = Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length;
    obj2.voice_media_session_id = mediaSessionId;
    const obj4 = {};
    let merged1 = Object.assign(getBaseProperties(merged));
    obj4.location = _location;
    obj4.guild_room_open = guildRoomOpen;
    const merged2 = Object.assign(obj2);
    guildRoomOpen(merged[8]).trackWithMetadata(AnalyticEvents.GUILD_ROOM_LAYOUT_TOGGLED, obj4);
    const obj3 = guildRoomOpen(merged[8]);
  }
};
export const trackGuildRoomOpened = function trackGuildRoomOpened(location) {
  const _location = location.location;
  let merged = Object.assign(location, Object.assign({ location: 0 }));
  const channelId = merged.channelId;
  closure_129_0 = channelId;
  closure_129_1 = (arg0) => {
    const obj2 = {};
    merged = Object.assign(getBaseProperties(merged));
    obj2.location = _location;
    const merged1 = Object.assign(arg0);
    AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.GUILD_ROOM_OPENED, obj2);
  };
  let timeout;
  function onChange() {
    const mediaSessionId = RTCConnectionStore.getMediaSessionId();
    if (null != mediaSessionId) {
      RTCConnectionStore.removeChangeListener(AuthenticationStore);
      const _clearTimeout = clearTimeout;
      clearTimeout(dependencyMap);
      const obj2 = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj2.voice_state_count = Object.keys(VoiceStateStore.getVoiceStatesForChannel(update)).length;
      obj2.voice_media_session_id = mediaSessionId;
      merged(obj2);
    }
  }
  closure_129_3 = onChange;
  const mediaSessionId = RTCConnectionStore.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      RTCConnectionStore.removeChangeListener(AuthenticationStore);
      clearTimeout(dependencyMap);
      merged({ voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(update)).length });
    }, 2500);
    RTCConnectionStore.addChangeListener(onChange);
  } else {
    let obj2 = { voice_state_count: null, voice_media_session_id: null };
    const _Object = Object;
    obj2.voice_state_count = Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length;
    obj2.voice_media_session_id = mediaSessionId;
    const obj4 = {};
    let merged1 = Object.assign(getBaseProperties(merged));
    obj4.location = _location;
    const merged2 = Object.assign(obj2);
    merged(4937).trackWithMetadata(AnalyticEvents.GUILD_ROOM_OPENED, obj4);
    const obj3 = merged(4937);
  }
};
export const trackGuildRoomSeatSelected = function trackGuildRoomSeatSelected(arg0) {
  ({ actualSeatPosition: require, targetSeatPosition: importDefault, actualSeatId: dependencyMap, targetSeatId: AuthenticationStore } = arg0);
  let merged = Object.assign(arg0, Object.assign({ actualSeatPosition: 0, targetSeatPosition: 0, actualSeatId: 0, targetSeatId: 0 }));
  let channelId = merged.channelId;
  const fn = (arg0) => {
    const obj2 = {};
    merged = Object.assign(getBaseProperties(merged));
    let obj = AppAnalyticsUtilsDefault;
    const tmp = merged;
    const point = closure_1_0;
    let findSeatResult = GuildRoomUtils.findSeat(dependencyMap, closure_1_0, merged.channelId);
    let str;
    if (findSeatResult != null) {
      str = findSeatResult.name;
    }
    if (str == null) {
      str = "";
    }
    obj2.seat_name = str;
    const items = [, ];
    ({ x: arr[0], y: arr[1] } = point);
    obj2.seat_position_v2 = items;
    obj2.seat_id = dependencyMap;
    const point2 = closure_1_1;
    let x;
    if (closure_1_1 != null) {
      x = point2.x;
    }
    if (point.x === x) {
      let y;
      if (point2 != null) {
        y = point2.y;
      }
      if (point.y === y) {
        let str2 = "user_selected";
      }
      obj2.update_reason = str2;
      const channelId = tmp.channelId;
      const items1 = [];
      const items2 = [];
      const items3 = [];
      const items4 = [];
      const roomUsers = GuildRoomStore.getRoomUsers(channelId);
      const item = roomUsers.forEach((seat, index) => {
        items1.push(index);
        const findSeatResult = GuildRoomUtils.findSeat(seat.seat, seat.position, channelId);
        let str;
        if (findSeatResult != null) {
          str = findSeatResult.name;
        }
        if (str == null) {
          str = "";
        }
        items2.push(str);
        items3.push(seat.position.x);
        items4.push(seat.position.y);
      });
      const obj4 = { seated_user_ids: items1, seated_user_seat_names: items2, seated_user_x_positions: items3, seated_user_y_positions: items4 };
      const merged1 = Object.assign(obj4);
      const merged2 = Object.assign(arg0);
      obj.trackWithMetadata(AnalyticEvents.GUILD_ROOM_SEAT_SELECTED, obj2);
    }
    str2 = "default";
  };
  closure_129_0 = channelId;
  closure_129_1 = fn;
  let timeout;
  function onChange() {
    const mediaSessionId = RTCConnectionStore.getMediaSessionId();
    if (null != mediaSessionId) {
      RTCConnectionStore.removeChangeListener(AuthenticationStore);
      const _clearTimeout = clearTimeout;
      clearTimeout(dependencyMap);
      const obj2 = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj2.voice_state_count = Object.keys(VoiceStateStore.getVoiceStatesForChannel(update)).length;
      obj2.voice_media_session_id = mediaSessionId;
      merged(obj2);
    }
  }
  closure_129_3 = onChange;
  const mediaSessionId = RTCConnectionStore.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      RTCConnectionStore.removeChangeListener(AuthenticationStore);
      clearTimeout(dependencyMap);
      merged({ voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(update)).length });
    }, 2500);
    RTCConnectionStore.addChangeListener(onChange);
  } else {
    let obj2 = { voice_state_count: null, voice_media_session_id: null };
    const _Object = Object;
    obj2.voice_state_count = Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length;
    obj2.voice_media_session_id = mediaSessionId;
    fn(obj2);
  }
};
export const trackGuildRoomUserInteracted = function trackGuildRoomUserInteracted(interactionType) {
  interactionType = interactionType.interactionType;
  let merged = Object.assign(interactionType, Object.assign({ interactionType: 0 }));
  const channelId = merged.channelId;
  closure_129_0 = channelId;
  closure_129_1 = (arg0) => {
    const obj2 = {};
    merged = Object.assign(getBaseProperties(merged));
    obj2.interaction_type = interactionType;
    const merged1 = Object.assign(arg0);
    AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.GUILD_ROOM_USER_INTERACTED, obj2);
  };
  let timeout;
  function onChange() {
    const mediaSessionId = RTCConnectionStore.getMediaSessionId();
    if (null != mediaSessionId) {
      RTCConnectionStore.removeChangeListener(AuthenticationStore);
      const _clearTimeout = clearTimeout;
      clearTimeout(dependencyMap);
      const obj2 = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj2.voice_state_count = Object.keys(VoiceStateStore.getVoiceStatesForChannel(update)).length;
      obj2.voice_media_session_id = mediaSessionId;
      merged(obj2);
    }
  }
  closure_129_3 = onChange;
  const mediaSessionId = RTCConnectionStore.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      RTCConnectionStore.removeChangeListener(AuthenticationStore);
      clearTimeout(dependencyMap);
      merged({ voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(update)).length });
    }, 2500);
    RTCConnectionStore.addChangeListener(onChange);
  } else {
    let obj2 = { voice_state_count: null, voice_media_session_id: null };
    const _Object = Object;
    obj2.voice_state_count = Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length;
    obj2.voice_media_session_id = mediaSessionId;
    const obj4 = {};
    let merged1 = Object.assign(getBaseProperties(merged));
    obj4.interaction_type = interactionType;
    const merged2 = Object.assign(obj2);
    merged(4937).trackWithMetadata(AnalyticEvents.GUILD_ROOM_USER_INTERACTED, obj4);
    const obj3 = merged(4937);
  }
};
export const trackGuildRoomUserConnected = function trackGuildRoomUserConnected(channelId) {
  closure_0 = channelId;
  channelId = channelId.channelId;
  closure_129_0 = channelId;
  closure_129_1 = (arg0) => {
    const merged = Object.assign(getBaseProperties(closure_0));
    const merged1 = Object.assign(arg0);
    AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.GUILD_ROOM_USER_CONNECTED, {});
  };
  let timeout;
  function onChange() {
    const mediaSessionId = RTCConnectionStore.getMediaSessionId();
    if (null != mediaSessionId) {
      RTCConnectionStore.removeChangeListener(AuthenticationStore);
      const _clearTimeout = clearTimeout;
      clearTimeout(dependencyMap);
      const obj2 = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj2.voice_state_count = Object.keys(VoiceStateStore.getVoiceStatesForChannel(update)).length;
      obj2.voice_media_session_id = mediaSessionId;
      merged(obj2);
    }
  }
  closure_129_3 = onChange;
  const mediaSessionId = RTCConnectionStore.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      RTCConnectionStore.removeChangeListener(AuthenticationStore);
      clearTimeout(dependencyMap);
      merged({ voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(update)).length });
    }, 2500);
    RTCConnectionStore.addChangeListener(onChange);
  } else {
    const obj2 = { voice_state_count: null, voice_media_session_id: null };
    const _Object = Object;
    obj2.voice_state_count = Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length;
    obj2.voice_media_session_id = mediaSessionId;
    const obj4 = {};
    let merged = Object.assign(getBaseProperties(channelId));
    let merged1 = Object.assign(obj2);
    AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.GUILD_ROOM_USER_CONNECTED, obj4);
  }
};
export const trackGuildRoomUserDisconnected = function trackGuildRoomUserDisconnected(channelId) {
  const obj2 = {};
  const merged = Object.assign(getBaseProperties(channelId));
  obj2.voice_state_count = Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId.channelId)).length;
  obj2.voice_media_session_id = GuildRoomStore.getMediaSessionId(channelId.channelId);
  AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.GUILD_ROOM_USER_DISCONNECTED, obj2);
};
export const trackGuildRoomSettingsUpdate = function trackGuildRoomSettingsUpdate(remember_video_overlay_visibility) {
  AnalyticsUtilsDefault.track(AnalyticEvents.GUILD_ROOM_SETTINGS_UPDATE, { remember_video_overlay_visibility: remember_video_overlay_visibility.rememberVideoOverlayVisibility });
};
export const trackGuildRoomUserUpdated = function trackGuildRoomUserUpdated(update) {
  update = update.update;
  let merged = Object.assign(update, Object.assign({ update: 0 }));
  const channelId = merged.channelId;
  const fn = (arg0) => {
    merged = Object.assign(getBaseProperties(merged));
    const obj3 = { update_type: update.updateType, update_reason: update.updateReason };
    const updateType = update.updateType;
    if ("position" === updateType) {
      const obj4 = {};
      const merged1 = Object.assign(obj3);
      const items = [update.position.x, update.position.y];
      obj4.position_v2 = items;
      let tmp3 = obj4;
    } else if ("seat" === updateType) {
      const obj5 = {};
      const merged2 = Object.assign(obj3);
      obj5.seat_id = update.seat;
      tmp3 = obj5;
    } else if ("status_id" === updateType) {
      const obj6 = {};
      const merged3 = Object.assign(obj3);
      obj6.status_id = update.statusId;
      tmp3 = obj6;
    } else if ("status_text" === updateType) {
      const obj7 = {};
      const merged4 = Object.assign(obj3);
      obj7.status_text = update.statusText;
      tmp3 = obj7;
    }
    const merged5 = Object.assign(tmp3);
    const merged6 = Object.assign(arg0);
    AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.GUILD_ROOM_USER_UPDATED, {});
    const obj2 = {};
  };
  closure_129_0 = channelId;
  closure_129_1 = fn;
  let timeout;
  function onChange() {
    const mediaSessionId = RTCConnectionStore.getMediaSessionId();
    if (null != mediaSessionId) {
      RTCConnectionStore.removeChangeListener(AuthenticationStore);
      const _clearTimeout = clearTimeout;
      clearTimeout(dependencyMap);
      const obj2 = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj2.voice_state_count = Object.keys(VoiceStateStore.getVoiceStatesForChannel(update)).length;
      obj2.voice_media_session_id = mediaSessionId;
      merged(obj2);
    }
  }
  closure_129_3 = onChange;
  const mediaSessionId = RTCConnectionStore.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      RTCConnectionStore.removeChangeListener(AuthenticationStore);
      clearTimeout(dependencyMap);
      merged({ voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(update)).length });
    }, 2500);
    RTCConnectionStore.addChangeListener(onChange);
  } else {
    let obj2 = { voice_state_count: null, voice_media_session_id: null };
    const _Object = Object;
    obj2.voice_state_count = Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length;
    obj2.voice_media_session_id = mediaSessionId;
    fn(obj2);
  }
};
export const trackGuildRoomUpdated = function trackGuildRoomUpdated(update) {
  update = update.update;
  let merged = Object.assign(update, Object.assign({ update: 0 }));
  const channelId = merged.channelId;
  closure_129_0 = channelId;
  closure_129_1 = (arg0) => {
    merged = Object.assign(getBaseProperties(merged));
    const obj3 = { update_type: update.updateType };
    let tmp3;
    if ("background" === update.updateType) {
      const obj4 = {};
      const merged1 = Object.assign(obj3);
      obj4.background = tmp2.background;
      tmp3 = obj4;
    }
    const merged2 = Object.assign(tmp3);
    const merged3 = Object.assign(arg0);
    AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.GUILD_ROOM_UPDATED, {});
  };
  let timeout;
  function onChange() {
    const mediaSessionId = RTCConnectionStore.getMediaSessionId();
    if (null != mediaSessionId) {
      RTCConnectionStore.removeChangeListener(AuthenticationStore);
      const _clearTimeout = clearTimeout;
      clearTimeout(dependencyMap);
      const obj2 = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj2.voice_state_count = Object.keys(VoiceStateStore.getVoiceStatesForChannel(update)).length;
      obj2.voice_media_session_id = mediaSessionId;
      merged(obj2);
    }
  }
  closure_129_3 = onChange;
  let mediaSessionId = RTCConnectionStore.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      RTCConnectionStore.removeChangeListener(AuthenticationStore);
      clearTimeout(dependencyMap);
      merged({ voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(update)).length });
    }, 2500);
    RTCConnectionStore.addChangeListener(onChange);
  } else {
    let obj2 = { voice_state_count: null, voice_media_session_id: null };
    let _Object = Object;
    obj2.voice_state_count = Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length;
    obj2.voice_media_session_id = mediaSessionId;
    let obj3 = {};
    let merged1 = Object.assign(getBaseProperties(merged));
    const obj5 = { update_type: update.updateType };
    let tmp6;
    if ("background" === update.updateType) {
      const obj6 = {};
      let merged2 = Object.assign(obj5);
      obj6.background = update.background;
      tmp6 = obj6;
    }
    let merged3 = Object.assign(tmp6);
    const merged4 = Object.assign(obj2);
    merged(4937).trackWithMetadata(AnalyticEvents.GUILD_ROOM_UPDATED, obj3);
    let obj4 = merged(4937);
  }
};