// === Module 4699: getBaseProperties ===

// Module 4699 (getBaseProperties)
import expandEventPropertiesDefault from "expandEventProperties" /* 695 */;
import GuildRoomBackgrounds from "GuildRoomBackgrounds" /* 4684 */;
import collectGuildAnalyticsMetadataDefault from "collectGuildAnalyticsMetadata" /* 4700 */;
import closure_3 from "fetchFingerprint" /* 1215 */;
import closure_4 from "ensureGuildLoaded" /* 1386 */;
import closure_5 from "createRTCConnection" /* 4554 */;
import closure_6 from "updateVoiceState" /* 4497 */;
import closure_7 from "resolveCreatingNotes" /* 4679 */;
import { AnalyticEvents } from "ME" /* 673 */;

require = arg1;
function getBaseProperties(merged) {
  ({ userId, guildId, channelId } = merged);
  if (userId == null) {
    userId = id.getId();
  }
  let obj = authStore;
  const roomUsers = authStore.getRoomUsers(channelId);
  obj = { user_id: userId, guild_id: null, channel_id: null, guild_room_user_count: null, guild_room_user_connected: null, guild_room_background: null };
  if (null == guildId) {
    channel = channel.getChannel(channelId);
    guildId = undefined;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
  }
  obj[1] = guildId;
  obj[2] = channelId;
  obj[3] = roomUsers.size;
  obj[4] = roomUsers.has(userId);
  const room = obj.getRoom(channelId);
  let background;
  if (room != null) {
    background = room.background;
  }
  if (background == null) {
    background = GuildRoomBackgrounds.GuildRoomBackgrounds.DEFAULT;
  }
  obj[5] = background;
  return obj;
}
const result = require("set").fileFinishedImporting("modules/guild_rooms/GuildRoomAnalytics.tsx");

export const trackGuildRoomObjectInteracted = function trackGuildRoomObjectInteracted(interactionType) {
  interactionType = interactionType.interactionType;
  let channelId = interactionType;
  let merged = Object.assign(interactionType, Object.create(null));
  let f78052 = merged;
  channelId = merged.channelId;
  f78052 = (arg0) => {
    let obj = f78052(table[8]);
    obj = {};
    const merged = Object.assign(closure_1_9(f78052));
    obj.interaction_type = channelId;
    const merged1 = Object.assign(arg0);
    obj.trackWithMetadata(closure_1_8.GUILD_ROOM_OBJECT_INTERACTED, obj);
  };
  dependencyMap = undefined;
  function onChange() {
    let obj = closure_1_5;
    const mediaSessionId = closure_1_5.getMediaSessionId();
    if (null != mediaSessionId) {
      obj.removeChangeListener(onChange);
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_2);
      obj = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj[0] = Object.keys(closure_1_6.getVoiceStatesForChannel(channelId)).length;
      obj[1] = mediaSessionId;
      fn(obj);
    }
  }
  let obj = store;
  const mediaSessionId = store.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    dependencyMap = setTimeout(() => {
      closure_1_5.removeChangeListener(onChange);
      clearTimeout(closure_2);
      fn({ voice_state_count: Object.keys(closure_1_6.getVoiceStatesForChannel(channelId)).length });
    }, 2500);
    obj.addChangeListener(onChange);
  } else {
    obj = { voice_state_count: null, voice_media_session_id: null };
    const _Object = Object;
    obj[0] = Object.keys(store2.getVoiceStatesForChannel(channelId)).length;
    obj[1] = mediaSessionId;
    obj = {};
    let merged1 = Object.assign(getBaseProperties(merged));
    obj.interaction_type = interactionType;
    const merged2 = Object.assign(obj);
    f78052(4700).trackWithMetadata(AnalyticEvents.GUILD_ROOM_OBJECT_INTERACTED, obj);
    const obj3 = f78052(4700);
  }
};
export const trackGuildRoomInteracted = function trackGuildRoomInteracted(interactionType) {
  interactionType = interactionType.interactionType;
  let channelId = interactionType;
  let merged = Object.assign(interactionType, Object.create(null));
  let f78053 = merged;
  channelId = merged.channelId;
  f78053 = (arg0) => {
    let obj = f78053(table[8]);
    obj = {};
    const merged = Object.assign(closure_1_9(f78053));
    obj.interaction_type = channelId;
    const merged1 = Object.assign(arg0);
    obj.trackWithMetadata(closure_1_8.GUILD_ROOM_INTERACTED, obj);
  };
  dependencyMap = undefined;
  function onChange() {
    let obj = closure_1_5;
    const mediaSessionId = closure_1_5.getMediaSessionId();
    if (null != mediaSessionId) {
      obj.removeChangeListener(onChange);
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_2);
      obj = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj[0] = Object.keys(closure_1_6.getVoiceStatesForChannel(channelId)).length;
      obj[1] = mediaSessionId;
      fn(obj);
    }
  }
  let obj = store;
  const mediaSessionId = store.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    dependencyMap = setTimeout(() => {
      closure_1_5.removeChangeListener(onChange);
      clearTimeout(closure_2);
      fn({ voice_state_count: Object.keys(closure_1_6.getVoiceStatesForChannel(channelId)).length });
    }, 2500);
    obj.addChangeListener(onChange);
  } else {
    obj = { voice_state_count: null, voice_media_session_id: null };
    const _Object = Object;
    obj[0] = Object.keys(store2.getVoiceStatesForChannel(channelId)).length;
    obj[1] = mediaSessionId;
    obj = {};
    let merged1 = Object.assign(getBaseProperties(merged));
    obj.interaction_type = interactionType;
    const merged2 = Object.assign(obj);
    f78053(4700).trackWithMetadata(AnalyticEvents.GUILD_ROOM_INTERACTED, obj);
    const obj3 = f78053(4700);
  }
};
export const trackGuildRoomLayoutToggled = function trackGuildRoomLayoutToggled(location) {
  const _location = location.location;
  let channelId = _location;
  const guildRoomOpen = location.guildRoomOpen;
  let f78054 = guildRoomOpen;
  let merged = Object.assign(location, Object.create(null));
  dependencyMap = merged;
  channelId = merged.channelId;
  f78054 = (arg0) => {
    let obj = f78054(table[8]);
    obj = {};
    const merged = Object.assign(closure_1_9(table));
    obj.location = channelId;
    obj.guild_room_open = f78054;
    const merged1 = Object.assign(arg0);
    obj.trackWithMetadata(closure_1_8.GUILD_ROOM_LAYOUT_TOGGLED, obj);
  };
  dependencyMap = undefined;
  function onChange() {
    let obj = closure_1_5;
    const mediaSessionId = closure_1_5.getMediaSessionId();
    if (null != mediaSessionId) {
      obj.removeChangeListener(onChange);
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_2);
      obj = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj[0] = Object.keys(closure_1_6.getVoiceStatesForChannel(channelId)).length;
      obj[1] = mediaSessionId;
      fn(obj);
    }
  }
  let obj = store;
  const mediaSessionId = store.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    dependencyMap = setTimeout(() => {
      closure_1_5.removeChangeListener(onChange);
      clearTimeout(closure_2);
      fn({ voice_state_count: Object.keys(closure_1_6.getVoiceStatesForChannel(channelId)).length });
    }, 2500);
    obj.addChangeListener(onChange);
  } else {
    obj = { voice_state_count: null, voice_media_session_id: null };
    const _Object = Object;
    obj[0] = Object.keys(store2.getVoiceStatesForChannel(channelId)).length;
    obj[1] = mediaSessionId;
    obj = {};
    let merged1 = Object.assign(getBaseProperties(merged));
    obj.location = _location;
    obj.guild_room_open = guildRoomOpen;
    const merged2 = Object.assign(obj);
    f78054(4700).trackWithMetadata(AnalyticEvents.GUILD_ROOM_LAYOUT_TOGGLED, obj);
    const obj3 = f78054(4700);
  }
};
export const trackGuildRoomOpened = function trackGuildRoomOpened(location) {
  const _location = location.location;
  let channelId = _location;
  let merged = Object.assign(location, Object.create(null));
  let f78055 = merged;
  channelId = merged.channelId;
  f78055 = (arg0) => {
    let obj = f78055(table[8]);
    obj = {};
    const merged = Object.assign(closure_1_9(f78055));
    obj.location = channelId;
    const merged1 = Object.assign(arg0);
    obj.trackWithMetadata(closure_1_8.GUILD_ROOM_OPENED, obj);
  };
  dependencyMap = undefined;
  function onChange() {
    let obj = closure_1_5;
    const mediaSessionId = closure_1_5.getMediaSessionId();
    if (null != mediaSessionId) {
      obj.removeChangeListener(onChange);
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_2);
      obj = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj[0] = Object.keys(closure_1_6.getVoiceStatesForChannel(channelId)).length;
      obj[1] = mediaSessionId;
      fn(obj);
    }
  }
  let obj = store;
  const mediaSessionId = store.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    dependencyMap = setTimeout(() => {
      closure_1_5.removeChangeListener(onChange);
      clearTimeout(closure_2);
      fn({ voice_state_count: Object.keys(closure_1_6.getVoiceStatesForChannel(channelId)).length });
    }, 2500);
    obj.addChangeListener(onChange);
  } else {
    obj = { voice_state_count: null, voice_media_session_id: null };
    const _Object = Object;
    obj[0] = Object.keys(store2.getVoiceStatesForChannel(channelId)).length;
    obj[1] = mediaSessionId;
    obj = {};
    let merged1 = Object.assign(getBaseProperties(merged));
    obj.location = _location;
    const merged2 = Object.assign(obj);
    f78055(4700).trackWithMetadata(AnalyticEvents.GUILD_ROOM_OPENED, obj);
    const obj3 = f78055(4700);
  }
};
export const trackGuildRoomSeatSelected = function trackGuildRoomSeatSelected(arg0) {
  ({ actualSeatPosition: channelId, targetSeatPosition: fn, actualSeatId: closure_2, targetSeatId: onChange } = arg0);
  let merged = Object.assign(arg0, Object.create(null));
  channelId = merged.channelId;
  fn = (arg0) => {
    let obj = fn(4700);
    obj = {};
    merged = Object.assign(closure_1_9(items4));
    const point = channelId;
    let findSeatResult = channelId(4682).findSeat(items2, channelId, items4.channelId);
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
    obj.seat_id = items2;
    const point2 = items1;
    let x;
    if (items1 != null) {
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
      channelId = items4.channelId;
      items1 = [];
      items2 = [];
      const items3 = [];
      items4 = [];
      const roomUsers = closure_1_7.getRoomUsers(channelId);
      const item = roomUsers.forEach((seat) => {
        items1.push(arg1);
        const findSeatResult = channelId(items2[6]).findSeat(seat.seat, seat.position, channelId);
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
      obj = { seated_user_ids: null, seated_user_seat_names: null, seated_user_x_positions: null, seated_user_y_positions: null };
      obj[0] = items1;
      obj[1] = items2;
      obj[2] = items3;
      obj[3] = items4;
      const merged1 = Object.assign(obj);
      const merged2 = Object.assign(arg0);
      obj.trackWithMetadata(closure_1_8.GUILD_ROOM_SEAT_SELECTED, obj);
    }
    str2 = "default";
  };
  let timeout;
  onChange = function onChange() {
    let obj = closure_1_5;
    const mediaSessionId = closure_1_5.getMediaSessionId();
    if (null != mediaSessionId) {
      obj.removeChangeListener(onChange);
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_2);
      obj = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj[0] = Object.keys(closure_1_6.getVoiceStatesForChannel(channelId)).length;
      obj[1] = mediaSessionId;
      fn(obj);
    }
  };
  let obj = store;
  const mediaSessionId = store.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      closure_1_5.removeChangeListener(onChange);
      clearTimeout(closure_2);
      fn({ voice_state_count: Object.keys(closure_1_6.getVoiceStatesForChannel(channelId)).length });
    }, 2500);
    obj.addChangeListener(onChange);
  } else {
    obj = { voice_state_count: null, voice_media_session_id: null };
    const _Object = Object;
    obj[0] = Object.keys(store2.getVoiceStatesForChannel(channelId)).length;
    obj[1] = mediaSessionId;
    fn(obj);
  }
};
export const trackGuildRoomUserInteracted = function trackGuildRoomUserInteracted(interactionType) {
  interactionType = interactionType.interactionType;
  let channelId = interactionType;
  let merged = Object.assign(interactionType, Object.create(null));
  let f78057 = merged;
  channelId = merged.channelId;
  f78057 = (arg0) => {
    let obj = f78057(table[8]);
    obj = {};
    const merged = Object.assign(closure_1_9(f78057));
    obj.interaction_type = channelId;
    const merged1 = Object.assign(arg0);
    obj.trackWithMetadata(closure_1_8.GUILD_ROOM_USER_INTERACTED, obj);
  };
  dependencyMap = undefined;
  function onChange() {
    let obj = closure_1_5;
    const mediaSessionId = closure_1_5.getMediaSessionId();
    if (null != mediaSessionId) {
      obj.removeChangeListener(onChange);
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_2);
      obj = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj[0] = Object.keys(closure_1_6.getVoiceStatesForChannel(channelId)).length;
      obj[1] = mediaSessionId;
      fn(obj);
    }
  }
  let obj = store;
  const mediaSessionId = store.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    dependencyMap = setTimeout(() => {
      closure_1_5.removeChangeListener(onChange);
      clearTimeout(closure_2);
      fn({ voice_state_count: Object.keys(closure_1_6.getVoiceStatesForChannel(channelId)).length });
    }, 2500);
    obj.addChangeListener(onChange);
  } else {
    obj = { voice_state_count: null, voice_media_session_id: null };
    const _Object = Object;
    obj[0] = Object.keys(store2.getVoiceStatesForChannel(channelId)).length;
    obj[1] = mediaSessionId;
    obj = {};
    let merged1 = Object.assign(getBaseProperties(merged));
    obj.interaction_type = interactionType;
    const merged2 = Object.assign(obj);
    f78057(4700).trackWithMetadata(AnalyticEvents.GUILD_ROOM_USER_INTERACTED, obj);
    const obj3 = f78057(4700);
  }
};
export const trackGuildRoomUserConnected = function trackGuildRoomUserConnected(channelId) {
  channelId = channelId.channelId;
  const f78058 = (arg0) => {
    let obj = f78058(table[8]);
    obj = {};
    const merged = Object.assign(closure_1_9(channelId));
    const merged1 = Object.assign(arg0);
    obj.trackWithMetadata(closure_1_8.GUILD_ROOM_USER_CONNECTED, obj);
  };
  dependencyMap = undefined;
  function onChange() {
    let obj = closure_1_5;
    const mediaSessionId = closure_1_5.getMediaSessionId();
    if (null != mediaSessionId) {
      obj.removeChangeListener(onChange);
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_2);
      obj = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj[0] = Object.keys(closure_1_6.getVoiceStatesForChannel(channelId)).length;
      obj[1] = mediaSessionId;
      fn(obj);
    }
  }
  let obj = store;
  const mediaSessionId = store.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    dependencyMap = setTimeout(() => {
      closure_1_5.removeChangeListener(onChange);
      clearTimeout(closure_2);
      fn({ voice_state_count: Object.keys(closure_1_6.getVoiceStatesForChannel(channelId)).length });
    }, 2500);
    obj.addChangeListener(onChange);
  } else {
    obj = { voice_state_count: null, voice_media_session_id: null };
    const _Object = Object;
    obj[0] = Object.keys(store2.getVoiceStatesForChannel(channelId)).length;
    obj[1] = mediaSessionId;
    obj = {};
    let merged = Object.assign(getBaseProperties(channelId));
    let merged1 = Object.assign(obj);
    f78058(4700).trackWithMetadata(AnalyticEvents.GUILD_ROOM_USER_CONNECTED, obj);
    const obj3 = f78058(4700);
  }
};
export const trackGuildRoomUserDisconnected = function trackGuildRoomUserDisconnected(channelId) {
  let obj = collectGuildAnalyticsMetadataDefault;
  obj = {};
  const merged = Object.assign(getBaseProperties(channelId));
  obj.voice_state_count = Object.keys(store2.getVoiceStatesForChannel(channelId.channelId)).length;
  obj.voice_media_session_id = authStore.getMediaSessionId(channelId.channelId);
  obj.trackWithMetadata(AnalyticEvents.GUILD_ROOM_USER_DISCONNECTED, obj);
};
export const trackGuildRoomSettingsUpdate = function trackGuildRoomSettingsUpdate(remember_video_overlay_visibility) {
  expandEventPropertiesDefault.track(AnalyticEvents.GUILD_ROOM_SETTINGS_UPDATE, { remember_video_overlay_visibility: remember_video_overlay_visibility.rememberVideoOverlayVisibility });
};
export const trackGuildRoomUserUpdated = function trackGuildRoomUserUpdated(update) {
  let channelId = update.update;
  let merged = Object.assign(update, Object.create(null));
  let fn = merged;
  channelId = merged.channelId;
  fn = (arg0) => {
    let obj = fn(table[8]);
    obj = {};
    const merged = Object.assign(closure_1_9(fn));
    obj = { update_type: channelId.updateType, update_reason: channelId.updateReason };
    const updateType = channelId.updateType;
    if ("position" === updateType) {
      obj1 = {};
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
    obj.trackWithMetadata(closure_1_8.GUILD_ROOM_USER_UPDATED, obj);
  };
  let timeout;
  function onChange() {
    let obj = closure_1_5;
    const mediaSessionId = closure_1_5.getMediaSessionId();
    if (null != mediaSessionId) {
      obj.removeChangeListener(onChange);
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_2);
      obj = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj[0] = Object.keys(closure_1_6.getVoiceStatesForChannel(channelId)).length;
      obj[1] = mediaSessionId;
      fn(obj);
    }
  }
  let obj = store;
  let mediaSessionId = store.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      closure_1_5.removeChangeListener(onChange);
      clearTimeout(closure_2);
      fn({ voice_state_count: Object.keys(closure_1_6.getVoiceStatesForChannel(channelId)).length });
    }, 2500);
    obj.addChangeListener(onChange);
  } else {
    obj = { voice_state_count: null, voice_media_session_id: null };
    let _Object = Object;
    obj[0] = Object.keys(store2.getVoiceStatesForChannel(channelId)).length;
    obj[1] = mediaSessionId;
    fn(obj);
  }
};