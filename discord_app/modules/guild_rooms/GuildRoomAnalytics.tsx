// === Module 4739: GuildRoomAnalytics ===

// Module 4739 (GuildRoomAnalytics)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import GuildRoomUtils from "GuildRoomUtils" /* 4721 */;
import GuildRoomBackgrounds from "GuildRoomBackgrounds" /* 4723 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4740 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;
import VoiceStateStore from "VoiceStateStore" /* 4579 */;
import GuildRoomStore from "GuildRoomStore" /* 4718 */;

require = fn;
function getBaseProperties(merged) {
  ({ userId, guildId, channelId } = merged);
  if (userId == null) {
    userId = AuthenticationStore.getId();
  }
  const roomUsers = GuildRoomStore.getRoomUsers(channelId);
  const obj = { user_id: userId, guild_id: null, channel_id: null, guild_room_user_count: null, guild_room_user_connected: null, guild_room_background: null };
  if (null == guildId) {
    const channel = ChannelStore.getChannel(channelId);
    guildId = undefined;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
  }
  obj.guild_id = guildId;
  obj.channel_id = channelId;
  obj.guild_room_user_count = roomUsers.size;
  obj.guild_room_user_connected = roomUsers.has(userId);
  const room = obj.getRoom(channelId);
  let background;
  if (room != null) {
    background = room.background;
  }
  if (background == null) {
    background = GuildRoomBackgrounds.GuildRoomBackgrounds.DEFAULT;
  }
  obj.guild_room_background = background;
  return obj;
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
    const obj = {};
    merged = Object.assign(getBaseProperties(merged));
    obj.interaction_type = interactionType;
    const merged1 = Object.assign(arg0);
    obj.trackWithMetadata(AnalyticEvents.GUILD_ROOM_OBJECT_INTERACTED, obj);
  };
  let timeout;
  function onChange() {
    let obj = RTCConnectionStore;
    const mediaSessionId = RTCConnectionStore.getMediaSessionId();
    if (null != mediaSessionId) {
      obj.removeChangeListener(AuthenticationStore);
      const _clearTimeout = clearTimeout;
      clearTimeout(dependencyMap);
      obj = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj.voice_state_count = Object.keys(VoiceStateStore.getVoiceStatesForChannel(update)).length;
      obj.voice_media_session_id = mediaSessionId;
      merged(obj);
    }
  }
  closure_129_3 = onChange;
  let obj = RTCConnectionStore;
  const mediaSessionId = RTCConnectionStore.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      RTCConnectionStore.removeChangeListener(AuthenticationStore);
      clearTimeout(dependencyMap);
      merged({ voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(update)).length });
    }, 2500);
    obj.addChangeListener(onChange);
  } else {
    obj = { voice_state_count: null, voice_media_session_id: null };
    const _Object = Object;
    obj.voice_state_count = Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length;
    obj.voice_media_session_id = mediaSessionId;
    obj = {};
    let merged1 = Object.assign(getBaseProperties(merged));
    obj.interaction_type = interactionType;
    const merged2 = Object.assign(obj);
    merged(4740).trackWithMetadata(AnalyticEvents.GUILD_ROOM_OBJECT_INTERACTED, obj);
    const obj3 = merged(4740);
  }
};
export const trackGuildRoomInteracted = function trackGuildRoomInteracted(interactionType) {
  interactionType = interactionType.interactionType;
  let merged = Object.assign(interactionType, Object.assign({ interactionType: 0 }));
  const channelId = merged.channelId;
  closure_129_0 = channelId;
  closure_129_1 = (arg0) => {
    const obj = {};
    merged = Object.assign(getBaseProperties(merged));
    obj.interaction_type = interactionType;
    const merged1 = Object.assign(arg0);
    obj.trackWithMetadata(AnalyticEvents.GUILD_ROOM_INTERACTED, obj);
  };
  let timeout;
  function onChange() {
    let obj = RTCConnectionStore;
    const mediaSessionId = RTCConnectionStore.getMediaSessionId();
    if (null != mediaSessionId) {
      obj.removeChangeListener(AuthenticationStore);
      const _clearTimeout = clearTimeout;
      clearTimeout(dependencyMap);
      obj = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj.voice_state_count = Object.keys(VoiceStateStore.getVoiceStatesForChannel(update)).length;
      obj.voice_media_session_id = mediaSessionId;
      merged(obj);
    }
  }
  closure_129_3 = onChange;
  let obj = RTCConnectionStore;
  const mediaSessionId = RTCConnectionStore.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      RTCConnectionStore.removeChangeListener(AuthenticationStore);
      clearTimeout(dependencyMap);
      merged({ voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(update)).length });
    }, 2500);
    obj.addChangeListener(onChange);
  } else {
    obj = { voice_state_count: null, voice_media_session_id: null };
    const _Object = Object;
    obj.voice_state_count = Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length;
    obj.voice_media_session_id = mediaSessionId;
    obj = {};
    let merged1 = Object.assign(getBaseProperties(merged));
    obj.interaction_type = interactionType;
    const merged2 = Object.assign(obj);
    merged(4740).trackWithMetadata(AnalyticEvents.GUILD_ROOM_INTERACTED, obj);
    const obj3 = merged(4740);
  }
};
export const trackGuildRoomLayoutToggled = function trackGuildRoomLayoutToggled(location) {
  const _location = location.location;
  const guildRoomOpen = location.guildRoomOpen;
  let merged = Object.assign(location, Object.assign({ location: 0, guildRoomOpen: 0 }));
  const channelId = merged.channelId;
  closure_129_0 = channelId;
  closure_129_1 = (arg0) => {
    const obj = {};
    merged = Object.assign(getBaseProperties(merged));
    obj.location = _location;
    obj.guild_room_open = guildRoomOpen;
    const merged1 = Object.assign(arg0);
    obj.trackWithMetadata(AnalyticEvents.GUILD_ROOM_LAYOUT_TOGGLED, obj);
  };
  let timeout;
  function onChange() {
    let obj = RTCConnectionStore;
    const mediaSessionId = RTCConnectionStore.getMediaSessionId();
    if (null != mediaSessionId) {
      obj.removeChangeListener(AuthenticationStore);
      const _clearTimeout = clearTimeout;
      clearTimeout(dependencyMap);
      obj = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj.voice_state_count = Object.keys(VoiceStateStore.getVoiceStatesForChannel(update)).length;
      obj.voice_media_session_id = mediaSessionId;
      merged(obj);
    }
  }
  closure_129_3 = onChange;
  let obj = RTCConnectionStore;
  const mediaSessionId = RTCConnectionStore.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      RTCConnectionStore.removeChangeListener(AuthenticationStore);
      clearTimeout(dependencyMap);
      merged({ voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(update)).length });
    }, 2500);
    obj.addChangeListener(onChange);
  } else {
    obj = { voice_state_count: null, voice_media_session_id: null };
    const _Object = Object;
    obj.voice_state_count = Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length;
    obj.voice_media_session_id = mediaSessionId;
    obj = {};
    let merged1 = Object.assign(getBaseProperties(merged));
    obj.location = _location;
    obj.guild_room_open = guildRoomOpen;
    const merged2 = Object.assign(obj);
    guildRoomOpen(merged[8]).trackWithMetadata(AnalyticEvents.GUILD_ROOM_LAYOUT_TOGGLED, obj);
    const obj3 = guildRoomOpen(merged[8]);
  }
};
export const trackGuildRoomOpened = function trackGuildRoomOpened(location) {
  const _location = location.location;
  let merged = Object.assign(location, Object.assign({ location: 0 }));
  const channelId = merged.channelId;
  closure_129_0 = channelId;
  closure_129_1 = (arg0) => {
    const obj = {};
    merged = Object.assign(getBaseProperties(merged));
    obj.location = _location;
    const merged1 = Object.assign(arg0);
    obj.trackWithMetadata(AnalyticEvents.GUILD_ROOM_OPENED, obj);
  };
  let timeout;
  function onChange() {
    let obj = RTCConnectionStore;
    const mediaSessionId = RTCConnectionStore.getMediaSessionId();
    if (null != mediaSessionId) {
      obj.removeChangeListener(AuthenticationStore);
      const _clearTimeout = clearTimeout;
      clearTimeout(dependencyMap);
      obj = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj.voice_state_count = Object.keys(VoiceStateStore.getVoiceStatesForChannel(update)).length;
      obj.voice_media_session_id = mediaSessionId;
      merged(obj);
    }
  }
  closure_129_3 = onChange;
  let obj = RTCConnectionStore;
  const mediaSessionId = RTCConnectionStore.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      RTCConnectionStore.removeChangeListener(AuthenticationStore);
      clearTimeout(dependencyMap);
      merged({ voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(update)).length });
    }, 2500);
    obj.addChangeListener(onChange);
  } else {
    obj = { voice_state_count: null, voice_media_session_id: null };
    const _Object = Object;
    obj.voice_state_count = Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length;
    obj.voice_media_session_id = mediaSessionId;
    obj = {};
    let merged1 = Object.assign(getBaseProperties(merged));
    obj.location = _location;
    const merged2 = Object.assign(obj);
    merged(4740).trackWithMetadata(AnalyticEvents.GUILD_ROOM_OPENED, obj);
    const obj3 = merged(4740);
  }
};
export const trackGuildRoomSeatSelected = function trackGuildRoomSeatSelected(arg0) {
  ({ actualSeatPosition: require, targetSeatPosition: importDefault, actualSeatId: dependencyMap, targetSeatId: AuthenticationStore } = arg0);
  let merged = Object.assign(arg0, Object.assign({ actualSeatPosition: 0, targetSeatPosition: 0, actualSeatId: 0, targetSeatId: 0 }));
  let channelId = merged.channelId;
  const fn = (arg0) => {
    let obj = {};
    merged = Object.assign(getBaseProperties(merged));
    const point = closure_1_0;
    let findSeatResult = GuildRoomUtils.findSeat(dependencyMap, closure_1_0, merged.channelId);
    let str;
    if (findSeatResult != null) {
      str = findSeatResult.name;
    }
    if (str == null) {
      str = "";
    }
    obj.seat_name = str;
    const items = [, ];
    ({ x: arr[0], y: arr[1] } = point);
    obj.seat_position_v2 = items;
    obj.seat_id = dependencyMap;
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
      obj.update_reason = str2;
      const channelId = merged.channelId;
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
      obj = { seated_user_ids: items1, seated_user_seat_names: items2, seated_user_x_positions: items3, seated_user_y_positions: items4 };
      const merged1 = Object.assign(obj);
      const merged2 = Object.assign(arg0);
      obj.trackWithMetadata(AnalyticEvents.GUILD_ROOM_SEAT_SELECTED, obj);
    }
    str2 = "default";
  };
  closure_129_0 = channelId;
  closure_129_1 = fn;
  let timeout;
  function onChange() {
    let obj = RTCConnectionStore;
    const mediaSessionId = RTCConnectionStore.getMediaSessionId();
    if (null != mediaSessionId) {
      obj.removeChangeListener(AuthenticationStore);
      const _clearTimeout = clearTimeout;
      clearTimeout(dependencyMap);
      obj = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj.voice_state_count = Object.keys(VoiceStateStore.getVoiceStatesForChannel(update)).length;
      obj.voice_media_session_id = mediaSessionId;
      merged(obj);
    }
  }
  closure_129_3 = onChange;
  let obj = RTCConnectionStore;
  const mediaSessionId = RTCConnectionStore.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      RTCConnectionStore.removeChangeListener(AuthenticationStore);
      clearTimeout(dependencyMap);
      merged({ voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(update)).length });
    }, 2500);
    obj.addChangeListener(onChange);
  } else {
    obj = { voice_state_count: null, voice_media_session_id: null };
    const _Object = Object;
    obj.voice_state_count = Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length;
    obj.voice_media_session_id = mediaSessionId;
    fn(obj);
  }
};
export const trackGuildRoomUserInteracted = function trackGuildRoomUserInteracted(interactionType) {
  interactionType = interactionType.interactionType;
  let merged = Object.assign(interactionType, Object.assign({ interactionType: 0 }));
  const channelId = merged.channelId;
  closure_129_0 = channelId;
  closure_129_1 = (arg0) => {
    const obj = {};
    merged = Object.assign(getBaseProperties(merged));
    obj.interaction_type = interactionType;
    const merged1 = Object.assign(arg0);
    obj.trackWithMetadata(AnalyticEvents.GUILD_ROOM_USER_INTERACTED, obj);
  };
  let timeout;
  function onChange() {
    let obj = RTCConnectionStore;
    const mediaSessionId = RTCConnectionStore.getMediaSessionId();
    if (null != mediaSessionId) {
      obj.removeChangeListener(AuthenticationStore);
      const _clearTimeout = clearTimeout;
      clearTimeout(dependencyMap);
      obj = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj.voice_state_count = Object.keys(VoiceStateStore.getVoiceStatesForChannel(update)).length;
      obj.voice_media_session_id = mediaSessionId;
      merged(obj);
    }
  }
  closure_129_3 = onChange;
  let obj = RTCConnectionStore;
  const mediaSessionId = RTCConnectionStore.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      RTCConnectionStore.removeChangeListener(AuthenticationStore);
      clearTimeout(dependencyMap);
      merged({ voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(update)).length });
    }, 2500);
    obj.addChangeListener(onChange);
  } else {
    obj = { voice_state_count: null, voice_media_session_id: null };
    const _Object = Object;
    obj.voice_state_count = Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length;
    obj.voice_media_session_id = mediaSessionId;
    obj = {};
    let merged1 = Object.assign(getBaseProperties(merged));
    obj.interaction_type = interactionType;
    const merged2 = Object.assign(obj);
    merged(4740).trackWithMetadata(AnalyticEvents.GUILD_ROOM_USER_INTERACTED, obj);
    const obj3 = merged(4740);
  }
};
export const trackGuildRoomUserConnected = function trackGuildRoomUserConnected(channelId) {
  closure_0 = channelId;
  channelId = channelId.channelId;
  closure_129_0 = channelId;
  closure_129_1 = (arg0) => {
    const obj = {};
    const merged = Object.assign(getBaseProperties(closure_0));
    const merged1 = Object.assign(arg0);
    obj.trackWithMetadata(AnalyticEvents.GUILD_ROOM_USER_CONNECTED, obj);
  };
  let timeout;
  function onChange() {
    let obj = RTCConnectionStore;
    const mediaSessionId = RTCConnectionStore.getMediaSessionId();
    if (null != mediaSessionId) {
      obj.removeChangeListener(AuthenticationStore);
      const _clearTimeout = clearTimeout;
      clearTimeout(dependencyMap);
      obj = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj.voice_state_count = Object.keys(VoiceStateStore.getVoiceStatesForChannel(update)).length;
      obj.voice_media_session_id = mediaSessionId;
      merged(obj);
    }
  }
  closure_129_3 = onChange;
  let obj = RTCConnectionStore;
  const mediaSessionId = RTCConnectionStore.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      RTCConnectionStore.removeChangeListener(AuthenticationStore);
      clearTimeout(dependencyMap);
      merged({ voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(update)).length });
    }, 2500);
    obj.addChangeListener(onChange);
  } else {
    obj = { voice_state_count: null, voice_media_session_id: null };
    const _Object = Object;
    obj.voice_state_count = Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length;
    obj.voice_media_session_id = mediaSessionId;
    obj = {};
    let merged = Object.assign(getBaseProperties(channelId));
    let merged1 = Object.assign(obj);
    AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.GUILD_ROOM_USER_CONNECTED, obj);
  }
};
export const trackGuildRoomUserDisconnected = function trackGuildRoomUserDisconnected(channelId) {
  const obj = {};
  const merged = Object.assign(getBaseProperties(channelId));
  obj.voice_state_count = Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId.channelId)).length;
  obj.voice_media_session_id = GuildRoomStore.getMediaSessionId(channelId.channelId);
  obj.trackWithMetadata(AnalyticEvents.GUILD_ROOM_USER_DISCONNECTED, obj);
};
export const trackGuildRoomSettingsUpdate = function trackGuildRoomSettingsUpdate(remember_video_overlay_visibility) {
  AnalyticsUtilsDefault.track(AnalyticEvents.GUILD_ROOM_SETTINGS_UPDATE, { remember_video_overlay_visibility: remember_video_overlay_visibility.rememberVideoOverlayVisibility });
};
export const trackGuildRoomUserUpdated = function trackGuildRoomUserUpdated(update) {
  update = update.update;
  let merged = Object.assign(update, Object.assign({ update: 0 }));
  const channelId = merged.channelId;
  const fn = (arg0) => {
    let obj = {};
    merged = Object.assign(getBaseProperties(merged));
    obj = { update_type: update.updateType, update_reason: update.updateReason };
    const updateType = update.updateType;
    if ("position" === updateType) {
      const obj1 = {};
      const merged1 = Object.assign(obj);
      const items = [tmp2.position.x, tmp2.position.y];
      obj1.position_v2 = items;
      let tmp3 = obj1;
    } else if ("seat" === updateType) {
      const obj2 = {};
      const merged2 = Object.assign(obj);
      obj2.seat_id = tmp2.seat;
      tmp3 = obj2;
    } else if ("status_id" === updateType) {
      const obj3 = {};
      const merged3 = Object.assign(obj);
      obj3.status_id = tmp2.statusId;
      tmp3 = obj3;
    } else if ("status_text" === updateType) {
      const obj4 = {};
      const merged4 = Object.assign(obj);
      obj4.status_text = tmp2.statusText;
      tmp3 = obj4;
    }
    const merged5 = Object.assign(tmp3);
    const merged6 = Object.assign(arg0);
    obj.trackWithMetadata(AnalyticEvents.GUILD_ROOM_USER_UPDATED, obj);
  };
  closure_129_0 = channelId;
  closure_129_1 = fn;
  let timeout;
  function onChange() {
    let obj = RTCConnectionStore;
    const mediaSessionId = RTCConnectionStore.getMediaSessionId();
    if (null != mediaSessionId) {
      obj.removeChangeListener(AuthenticationStore);
      const _clearTimeout = clearTimeout;
      clearTimeout(dependencyMap);
      obj = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj.voice_state_count = Object.keys(VoiceStateStore.getVoiceStatesForChannel(update)).length;
      obj.voice_media_session_id = mediaSessionId;
      merged(obj);
    }
  }
  closure_129_3 = onChange;
  let obj = RTCConnectionStore;
  const mediaSessionId = RTCConnectionStore.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      RTCConnectionStore.removeChangeListener(AuthenticationStore);
      clearTimeout(dependencyMap);
      merged({ voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(update)).length });
    }, 2500);
    obj.addChangeListener(onChange);
  } else {
    obj = { voice_state_count: null, voice_media_session_id: null };
    const _Object = Object;
    obj.voice_state_count = Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length;
    obj.voice_media_session_id = mediaSessionId;
    fn(obj);
  }
};
export const trackGuildRoomUpdated = function trackGuildRoomUpdated(update) {
  update = update.update;
  let merged = Object.assign(update, Object.assign({ update: 0 }));
  const channelId = merged.channelId;
  closure_129_0 = channelId;
  closure_129_1 = (arg0) => {
    let obj = {};
    merged = Object.assign(getBaseProperties(merged));
    obj = { update_type: update.updateType };
    let tmp3;
    if ("background" === update.updateType) {
      const obj1 = {};
      const merged1 = Object.assign(obj);
      obj1.background = tmp2.background;
      tmp3 = obj1;
    }
    const merged2 = Object.assign(tmp3);
    const merged3 = Object.assign(arg0);
    obj.trackWithMetadata(AnalyticEvents.GUILD_ROOM_UPDATED, obj);
  };
  let timeout;
  function onChange() {
    let obj = RTCConnectionStore;
    const mediaSessionId = RTCConnectionStore.getMediaSessionId();
    if (null != mediaSessionId) {
      obj.removeChangeListener(AuthenticationStore);
      const _clearTimeout = clearTimeout;
      clearTimeout(dependencyMap);
      obj = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj.voice_state_count = Object.keys(VoiceStateStore.getVoiceStatesForChannel(update)).length;
      obj.voice_media_session_id = mediaSessionId;
      merged(obj);
    }
  }
  closure_129_3 = onChange;
  let obj = RTCConnectionStore;
  let mediaSessionId = RTCConnectionStore.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      RTCConnectionStore.removeChangeListener(AuthenticationStore);
      clearTimeout(dependencyMap);
      merged({ voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(update)).length });
    }, 2500);
    obj.addChangeListener(onChange);
  } else {
    obj = { voice_state_count: null, voice_media_session_id: null };
    let _Object = Object;
    obj.voice_state_count = Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length;
    obj.voice_media_session_id = mediaSessionId;
    obj = {};
    let merged1 = Object.assign(getBaseProperties(merged));
    let obj1 = { update_type: update.updateType };
    let tmp6;
    if ("background" === update.updateType) {
      const obj2 = {};
      let merged2 = Object.assign(obj1);
      obj2.background = update.background;
      tmp6 = obj2;
    }
    let merged3 = Object.assign(tmp6);
    const merged4 = Object.assign(obj);
    merged(4740).trackWithMetadata(AnalyticEvents.GUILD_ROOM_UPDATED, obj);
    const obj4 = merged(4740);
  }
};