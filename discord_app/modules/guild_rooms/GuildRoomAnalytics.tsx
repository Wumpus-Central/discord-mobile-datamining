// discord_app/modules/guild_rooms/GuildRoomAnalytics.tsx
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import createRTCConnection from "createRTCConnection";
import updateVoiceState from "updateVoiceState";
import handleSelectedChannelStoreChange from "handleSelectedChannelStoreChange";
import { AnalyticEvents } from "ME";
import { GuildRoomBackgrounds } from "../../../discord_common/js/shared/shared-constants/GuildRoomBackgrounds.tsx";
import { expandEventProperties } from "../../utils/AnalyticsUtils.tsx";
import { collectGuildAnalyticsMetadata } from "../app_analytics/AppAnalyticsUtils.tsx";

const require = arg1;
function getBaseProperties(merged) {
  let channelId;
  let guildId;
  let userId;
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
const result = require("createRTCConnection").fileFinishedImporting("modules/guild_rooms/GuildRoomAnalytics.tsx");

export const trackGuildRoomObjectInteracted = function trackGuildRoomObjectInteracted(interactionType) {
  interactionType = interactionType.interactionType;
  let channelId = interactionType;
  let merged = Object.assign(interactionType, Object.create(null));
  let f75550 = merged;
  channelId = merged.channelId;
  f75550 = (arg0) => {
    let obj = f75550(table[8]);
    obj = {};
    const merged = Object.assign(outer1_9(f75550));
    obj.interaction_type = channelId;
    const merged1 = Object.assign(arg0);
    obj.trackWithMetadata(outer1_8.GUILD_ROOM_OBJECT_INTERACTED, obj);
  };
  let dependencyMap;
  function onChange() {
    let obj = outer1_5;
    const mediaSessionId = outer1_5.getMediaSessionId();
    if (null != mediaSessionId) {
      obj.removeChangeListener(onChange);
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_2);
      obj = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj[0] = Object.keys(outer1_6.getVoiceStatesForChannel(channelId)).length;
      obj[1] = mediaSessionId;
      fn(obj);
    }
  }
  let obj = store;
  const mediaSessionId = store.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    dependencyMap = setTimeout(() => {
      outer1_5.removeChangeListener(onChange);
      clearTimeout(closure_2);
      fn({ voice_state_count: Object.keys(outer1_6.getVoiceStatesForChannel(channelId)).length });
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
    f75550(4549).trackWithMetadata(AnalyticEvents.GUILD_ROOM_OBJECT_INTERACTED, obj);
    const obj3 = f75550(4549);
  }
};
export const trackGuildRoomInteracted = function trackGuildRoomInteracted(interactionType) {
  interactionType = interactionType.interactionType;
  let channelId = interactionType;
  let merged = Object.assign(interactionType, Object.create(null));
  let f75551 = merged;
  channelId = merged.channelId;
  f75551 = (arg0) => {
    let obj = f75551(table[8]);
    obj = {};
    const merged = Object.assign(outer1_9(f75551));
    obj.interaction_type = channelId;
    const merged1 = Object.assign(arg0);
    obj.trackWithMetadata(outer1_8.GUILD_ROOM_INTERACTED, obj);
  };
  let dependencyMap;
  function onChange() {
    let obj = outer1_5;
    const mediaSessionId = outer1_5.getMediaSessionId();
    if (null != mediaSessionId) {
      obj.removeChangeListener(onChange);
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_2);
      obj = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj[0] = Object.keys(outer1_6.getVoiceStatesForChannel(channelId)).length;
      obj[1] = mediaSessionId;
      fn(obj);
    }
  }
  let obj = store;
  const mediaSessionId = store.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    dependencyMap = setTimeout(() => {
      outer1_5.removeChangeListener(onChange);
      clearTimeout(closure_2);
      fn({ voice_state_count: Object.keys(outer1_6.getVoiceStatesForChannel(channelId)).length });
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
    f75551(4549).trackWithMetadata(AnalyticEvents.GUILD_ROOM_INTERACTED, obj);
    const obj3 = f75551(4549);
  }
};
export const trackGuildRoomLayoutToggled = function trackGuildRoomLayoutToggled(location) {
  const _location = location.location;
  let channelId = _location;
  const guildRoomOpen = location.guildRoomOpen;
  let f75552 = guildRoomOpen;
  let merged = Object.assign(location, Object.create(null));
  let dependencyMap = merged;
  channelId = merged.channelId;
  f75552 = (arg0) => {
    let obj = f75552(table[8]);
    obj = {};
    const merged = Object.assign(outer1_9(table));
    obj.location = channelId;
    obj.guild_room_open = f75552;
    const merged1 = Object.assign(arg0);
    obj.trackWithMetadata(outer1_8.GUILD_ROOM_LAYOUT_TOGGLED, obj);
  };
  dependencyMap = undefined;
  function onChange() {
    let obj = outer1_5;
    const mediaSessionId = outer1_5.getMediaSessionId();
    if (null != mediaSessionId) {
      obj.removeChangeListener(onChange);
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_2);
      obj = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj[0] = Object.keys(outer1_6.getVoiceStatesForChannel(channelId)).length;
      obj[1] = mediaSessionId;
      fn(obj);
    }
  }
  let obj = store;
  const mediaSessionId = store.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    dependencyMap = setTimeout(() => {
      outer1_5.removeChangeListener(onChange);
      clearTimeout(closure_2);
      fn({ voice_state_count: Object.keys(outer1_6.getVoiceStatesForChannel(channelId)).length });
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
    f75552(4549).trackWithMetadata(AnalyticEvents.GUILD_ROOM_LAYOUT_TOGGLED, obj);
    const obj3 = f75552(4549);
  }
};
export const trackGuildRoomOpened = function trackGuildRoomOpened(location) {
  const _location = location.location;
  let channelId = _location;
  let merged = Object.assign(location, Object.create(null));
  let f75553 = merged;
  channelId = merged.channelId;
  f75553 = (arg0) => {
    let obj = f75553(table[8]);
    obj = {};
    const merged = Object.assign(outer1_9(f75553));
    obj.location = channelId;
    const merged1 = Object.assign(arg0);
    obj.trackWithMetadata(outer1_8.GUILD_ROOM_OPENED, obj);
  };
  let dependencyMap;
  function onChange() {
    let obj = outer1_5;
    const mediaSessionId = outer1_5.getMediaSessionId();
    if (null != mediaSessionId) {
      obj.removeChangeListener(onChange);
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_2);
      obj = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj[0] = Object.keys(outer1_6.getVoiceStatesForChannel(channelId)).length;
      obj[1] = mediaSessionId;
      fn(obj);
    }
  }
  let obj = store;
  const mediaSessionId = store.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    dependencyMap = setTimeout(() => {
      outer1_5.removeChangeListener(onChange);
      clearTimeout(closure_2);
      fn({ voice_state_count: Object.keys(outer1_6.getVoiceStatesForChannel(channelId)).length });
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
    f75553(4549).trackWithMetadata(AnalyticEvents.GUILD_ROOM_OPENED, obj);
    const obj3 = f75553(4549);
  }
};
export const trackGuildRoomSeatSelected = function trackGuildRoomSeatSelected(arg0) {
  let channelId;
  let fn;
  ({ actualSeatPosition: channelId, targetSeatPosition: fn } = arg0);
  let merged = Object.assign(arg0, Object.create(null));
  let timeout = merged;
  channelId = merged.channelId;
  fn = (arg0) => {
    let obj = fn(4549);
    obj = {};
    const merged = Object.assign(outer1_9(items3));
    const point = items1;
    let findSeatResult = channelId(4542).findSeat(items1);
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
    const point2 = items2;
    let x;
    if (items2 != null) {
      x = point2.x;
    }
    if (point.x !== x) {
      let str2 = "default";
    } else {
      let y;
      if (point2 != null) {
        y = point2.y;
      }
      str2 = "user_selected";
    }
    obj.update_reason = str2;
    items1 = [];
    items2 = [];
    items3 = [];
    const items4 = [];
    const roomUsers = outer1_7.getRoomUsers(items3.channelId);
    const item = roomUsers.forEach((position) => {
      items1.push(arg1);
      const findSeatResult = items1(items3[6]).findSeat(position.position);
      let str;
      if (findSeatResult != null) {
        str = findSeatResult.name;
      }
      if (str == null) {
        str = "";
      }
      items2.push(str);
      items3.push(position.position.x);
      items4.push(position.position.y);
    });
    obj = { seated_user_ids: items1, seated_user_seat_names: items2, seated_user_x_positions: items3, seated_user_y_positions: items4 };
    const merged1 = Object.assign(obj);
    const merged2 = Object.assign(arg0);
    obj.trackWithMetadata(outer1_8.GUILD_ROOM_SEAT_SELECTED, obj);
  };
  timeout = undefined;
  function onChange() {
    let obj = outer1_5;
    const mediaSessionId = outer1_5.getMediaSessionId();
    if (null != mediaSessionId) {
      obj.removeChangeListener(onChange);
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_2);
      obj = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj[0] = Object.keys(outer1_6.getVoiceStatesForChannel(channelId)).length;
      obj[1] = mediaSessionId;
      fn(obj);
    }
  }
  let obj = store;
  const mediaSessionId = store.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      outer1_5.removeChangeListener(onChange);
      clearTimeout(closure_2);
      fn({ voice_state_count: Object.keys(outer1_6.getVoiceStatesForChannel(channelId)).length });
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
  let f75555 = merged;
  channelId = merged.channelId;
  f75555 = (arg0) => {
    let obj = f75555(table[8]);
    obj = {};
    const merged = Object.assign(outer1_9(f75555));
    obj.interaction_type = channelId;
    const merged1 = Object.assign(arg0);
    obj.trackWithMetadata(outer1_8.GUILD_ROOM_USER_INTERACTED, obj);
  };
  let dependencyMap;
  function onChange() {
    let obj = outer1_5;
    const mediaSessionId = outer1_5.getMediaSessionId();
    if (null != mediaSessionId) {
      obj.removeChangeListener(onChange);
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_2);
      obj = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj[0] = Object.keys(outer1_6.getVoiceStatesForChannel(channelId)).length;
      obj[1] = mediaSessionId;
      fn(obj);
    }
  }
  let obj = store;
  const mediaSessionId = store.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    dependencyMap = setTimeout(() => {
      outer1_5.removeChangeListener(onChange);
      clearTimeout(closure_2);
      fn({ voice_state_count: Object.keys(outer1_6.getVoiceStatesForChannel(channelId)).length });
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
    f75555(4549).trackWithMetadata(AnalyticEvents.GUILD_ROOM_USER_INTERACTED, obj);
    const obj3 = f75555(4549);
  }
};
export const trackGuildRoomUserConnected = function trackGuildRoomUserConnected(channelId) {
  channelId = channelId.channelId;
  const f75556 = (arg0) => {
    let obj = f75556(table[8]);
    obj = {};
    const merged = Object.assign(outer1_9(channelId));
    const merged1 = Object.assign(arg0);
    obj.trackWithMetadata(outer1_8.GUILD_ROOM_USER_CONNECTED, obj);
  };
  let dependencyMap;
  function onChange() {
    let obj = outer1_5;
    const mediaSessionId = outer1_5.getMediaSessionId();
    if (null != mediaSessionId) {
      obj.removeChangeListener(onChange);
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_2);
      obj = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj[0] = Object.keys(outer1_6.getVoiceStatesForChannel(channelId)).length;
      obj[1] = mediaSessionId;
      fn(obj);
    }
  }
  let obj = store;
  const mediaSessionId = store.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    dependencyMap = setTimeout(() => {
      outer1_5.removeChangeListener(onChange);
      clearTimeout(closure_2);
      fn({ voice_state_count: Object.keys(outer1_6.getVoiceStatesForChannel(channelId)).length });
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
    f75556(4549).trackWithMetadata(AnalyticEvents.GUILD_ROOM_USER_CONNECTED, obj);
    const obj3 = f75556(4549);
  }
};
export const trackGuildRoomUserDisconnected = function trackGuildRoomUserDisconnected(channelId) {
  let obj = collectGuildAnalyticsMetadata;
  obj = {};
  const merged = Object.assign(getBaseProperties(channelId));
  obj.voice_state_count = Object.keys(store2.getVoiceStatesForChannel(channelId.channelId)).length;
  obj.voice_media_session_id = authStore.getMediaSessionId(channelId.channelId);
  obj.trackWithMetadata(AnalyticEvents.GUILD_ROOM_USER_DISCONNECTED, obj);
};
export const trackGuildRoomSettingsUpdate = function trackGuildRoomSettingsUpdate(remember_video_overlay_visibility) {
  expandEventProperties.track(AnalyticEvents.GUILD_ROOM_SETTINGS_UPDATE, { remember_video_overlay_visibility: remember_video_overlay_visibility.rememberVideoOverlayVisibility });
};
export const trackGuildRoomUserUpdated = function trackGuildRoomUserUpdated(update) {
  let channelId = update.update;
  let merged = Object.assign(update, Object.create(null));
  let fn = merged;
  channelId = merged.channelId;
  fn = (arg0) => {
    let obj = fn(table[8]);
    obj = {};
    const merged = Object.assign(outer1_9(fn));
    obj = { update_type: channelId.updateType, update_reason: channelId.updateReason };
    const updateType = channelId.updateType;
    if ("position" === updateType) {
      const obj1 = {};
      const merged1 = Object.assign(obj);
      const items = [tmp2.position.x, tmp2.position.y];
      obj1.position_v2 = items;
      let tmp3 = obj1;
    } else if ("status_id" === updateType) {
      const obj2 = {};
      const merged2 = Object.assign(obj);
      obj2.status_id = tmp2.statusId;
      tmp3 = obj2;
    } else if ("status_text" === updateType) {
      const obj3 = {};
      const merged3 = Object.assign(obj);
      obj3.status_text = tmp2.statusText;
      tmp3 = obj3;
    }
    const merged4 = Object.assign(tmp3);
    const merged5 = Object.assign(arg0);
    obj.trackWithMetadata(outer1_8.GUILD_ROOM_USER_UPDATED, obj);
  };
  let timeout;
  function onChange() {
    let obj = outer1_5;
    const mediaSessionId = outer1_5.getMediaSessionId();
    if (null != mediaSessionId) {
      obj.removeChangeListener(onChange);
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_2);
      obj = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj[0] = Object.keys(outer1_6.getVoiceStatesForChannel(channelId)).length;
      obj[1] = mediaSessionId;
      fn(obj);
    }
  }
  let obj = store;
  let mediaSessionId = store.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      outer1_5.removeChangeListener(onChange);
      clearTimeout(closure_2);
      fn({ voice_state_count: Object.keys(outer1_6.getVoiceStatesForChannel(channelId)).length });
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