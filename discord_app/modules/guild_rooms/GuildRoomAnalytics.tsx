// discord_app/modules/guild_rooms/GuildRoomAnalytics.tsx
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import createRTCConnection from "createRTCConnection";
import updateVoiceState from "updateVoiceState";
import handleSelectedChannelStoreChange from "handleSelectedChannelStoreChange";
import { getSeatName } from "getName";
import { AnalyticEvents } from "ME";
import { collectGuildAnalyticsMetadata } from "../app_analytics/AppAnalyticsUtils.tsx";

const result = require("createRTCConnection").fileFinishedImporting("modules/guild_rooms/GuildRoomAnalytics.tsx");

export const trackGuildRoomObjectInteracted = function trackGuildRoomObjectInteracted(interactionType) {
  let channelId = interactionType.interactionType;
  let merged = Object.assign(interactionType, Object.create(null));
  let fn = merged;
  channelId = merged.channelId;
  fn = (arg0) => {
    let channelId;
    let guildId;
    let userId;
    let obj = channelId(fn[7]);
    ({ userId, guildId, channelId } = fn);
    if (userId == null) {
      userId = id.getId();
    }
    const roomUsers = outer1_6.getRoomUsers(channelId);
    obj = { user_id: userId, guild_id: null, channel_id: null, guild_room_user_count: null, guild_room_user_connected: null };
    if (null == guildId) {
      const channel = onChange.getChannel(channelId);
      guildId = undefined;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
    }
    obj = {};
    obj[1] = guildId;
    obj[2] = channelId;
    obj[3] = roomUsers.size;
    obj[4] = roomUsers.has(userId);
    const merged = Object.assign(obj);
    obj.interaction_type = channelId;
    const merged1 = Object.assign(arg0);
    obj.trackWithMetadata(outer1_8.GUILD_ROOM_OBJECT_INTERACTED, obj);
  };
  let timeout;
  function onChange() {
    let obj = outer1_4;
    const mediaSessionId = outer1_4.getMediaSessionId();
    if (null != mediaSessionId) {
      obj.removeChangeListener(onChange);
      const _clearTimeout = clearTimeout;
      clearTimeout(fetchFingerprint);
      obj = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj[0] = Object.keys(outer1_5.getVoiceStatesForChannel(channelId)).length;
      obj[1] = mediaSessionId;
      fn(obj);
    }
  }
  let obj = store;
  const mediaSessionId = store.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      outer1_4.removeChangeListener(onChange);
      clearTimeout(fetchFingerprint);
      fn({ voice_state_count: Object.keys(outer1_5.getVoiceStatesForChannel(channelId)).length });
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
export const trackGuildRoomInteracted = function trackGuildRoomInteracted(interactionType) {
  let channelId = interactionType.interactionType;
  let merged = Object.assign(interactionType, Object.create(null));
  let fn = merged;
  channelId = merged.channelId;
  fn = (arg0) => {
    let channelId;
    let guildId;
    let userId;
    let obj = channelId(fn[7]);
    ({ userId, guildId, channelId } = fn);
    if (userId == null) {
      userId = id.getId();
    }
    const roomUsers = outer1_6.getRoomUsers(channelId);
    obj = { user_id: userId, guild_id: null, channel_id: null, guild_room_user_count: null, guild_room_user_connected: null };
    if (null == guildId) {
      const channel = onChange.getChannel(channelId);
      guildId = undefined;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
    }
    obj = {};
    obj[1] = guildId;
    obj[2] = channelId;
    obj[3] = roomUsers.size;
    obj[4] = roomUsers.has(userId);
    const merged = Object.assign(obj);
    obj.interaction_type = channelId;
    const merged1 = Object.assign(arg0);
    obj.trackWithMetadata(outer1_8.GUILD_ROOM_INTERACTED, obj);
  };
  let timeout;
  function onChange() {
    let obj = outer1_4;
    const mediaSessionId = outer1_4.getMediaSessionId();
    if (null != mediaSessionId) {
      obj.removeChangeListener(onChange);
      const _clearTimeout = clearTimeout;
      clearTimeout(fetchFingerprint);
      obj = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj[0] = Object.keys(outer1_5.getVoiceStatesForChannel(channelId)).length;
      obj[1] = mediaSessionId;
      fn(obj);
    }
  }
  let obj = store;
  const mediaSessionId = store.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      outer1_4.removeChangeListener(onChange);
      clearTimeout(fetchFingerprint);
      fn({ voice_state_count: Object.keys(outer1_5.getVoiceStatesForChannel(channelId)).length });
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
export const trackGuildRoomLayoutToggled = function trackGuildRoomLayoutToggled(arg0) {
  let channelId;
  let fn;
  ({ location: channelId, guildRoomOpen: fn } = arg0);
  let merged = Object.assign(arg0, Object.create(null));
  let timeout = merged;
  channelId = merged.channelId;
  fn = (arg0) => {
    let channelId;
    let guildId;
    let userId;
    let obj = channelId(fn[7]);
    ({ userId, guildId, channelId } = id);
    if (userId == null) {
      userId = id.getId();
    }
    const roomUsers = outer1_6.getRoomUsers(channelId);
    obj = { user_id: userId, guild_id: null, channel_id: null, guild_room_user_count: null, guild_room_user_connected: null };
    if (null == guildId) {
      const channel = onChange.getChannel(channelId);
      guildId = undefined;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
    }
    obj = {};
    obj[1] = guildId;
    obj[2] = channelId;
    obj[3] = roomUsers.size;
    obj[4] = roomUsers.has(userId);
    const merged = Object.assign(obj);
    obj.location = channelId;
    obj.guild_room_open = fn;
    const merged1 = Object.assign(arg0);
    obj.trackWithMetadata(outer1_8.GUILD_ROOM_LAYOUT_TOGGLED, obj);
  };
  timeout = undefined;
  function onChange() {
    let obj = outer1_4;
    const mediaSessionId = outer1_4.getMediaSessionId();
    if (null != mediaSessionId) {
      obj.removeChangeListener(onChange);
      const _clearTimeout = clearTimeout;
      clearTimeout(fetchFingerprint);
      obj = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj[0] = Object.keys(outer1_5.getVoiceStatesForChannel(channelId)).length;
      obj[1] = mediaSessionId;
      fn(obj);
    }
  }
  let obj = store;
  const mediaSessionId = store.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      outer1_4.removeChangeListener(onChange);
      clearTimeout(fetchFingerprint);
      fn({ voice_state_count: Object.keys(outer1_5.getVoiceStatesForChannel(channelId)).length });
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
export const trackGuildRoomOpened = function trackGuildRoomOpened(location) {
  let channelId = location.location;
  let merged = Object.assign(location, Object.create(null));
  let fn = merged;
  channelId = merged.channelId;
  fn = (arg0) => {
    let channelId;
    let guildId;
    let userId;
    let obj = channelId(fn[7]);
    ({ userId, guildId, channelId } = fn);
    if (userId == null) {
      userId = id.getId();
    }
    const roomUsers = outer1_6.getRoomUsers(channelId);
    obj = { user_id: userId, guild_id: null, channel_id: null, guild_room_user_count: null, guild_room_user_connected: null };
    if (null == guildId) {
      const channel = onChange.getChannel(channelId);
      guildId = undefined;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
    }
    obj = {};
    obj[1] = guildId;
    obj[2] = channelId;
    obj[3] = roomUsers.size;
    obj[4] = roomUsers.has(userId);
    const merged = Object.assign(obj);
    obj.location = channelId;
    const merged1 = Object.assign(arg0);
    obj.trackWithMetadata(outer1_8.GUILD_ROOM_OPENED, obj);
  };
  let timeout;
  function onChange() {
    let obj = outer1_4;
    const mediaSessionId = outer1_4.getMediaSessionId();
    if (null != mediaSessionId) {
      obj.removeChangeListener(onChange);
      const _clearTimeout = clearTimeout;
      clearTimeout(fetchFingerprint);
      obj = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj[0] = Object.keys(outer1_5.getVoiceStatesForChannel(channelId)).length;
      obj[1] = mediaSessionId;
      fn(obj);
    }
  }
  let obj = store;
  const mediaSessionId = store.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      outer1_4.removeChangeListener(onChange);
      clearTimeout(fetchFingerprint);
      fn({ voice_state_count: Object.keys(outer1_5.getVoiceStatesForChannel(channelId)).length });
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
export const trackGuildRoomSeatSelected = function trackGuildRoomSeatSelected(arg0) {
  let channelId;
  let fn;
  ({ actualSeatPosition: channelId, targetSeatPosition: fn } = arg0);
  let merged = Object.assign(arg0, Object.create(null));
  let timeout = merged;
  channelId = merged.channelId;
  fn = (arg0) => {
    let channelId;
    let guildId;
    let userId;
    let obj = channelId(fn[7]);
    ({ userId, guildId, channelId } = items3);
    if (userId == null) {
      userId = id.getId();
    }
    let obj1 = outer1_6;
    const roomUsers = outer1_6.getRoomUsers(channelId);
    obj = { user_id: userId, guild_id: null, channel_id: null, guild_room_user_count: null, guild_room_user_connected: null };
    if (null == guildId) {
      const channel = onChange.getChannel(channelId);
      guildId = undefined;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
    }
    obj = {};
    obj[1] = guildId;
    obj[2] = channelId;
    obj[3] = roomUsers.size;
    obj[4] = roomUsers.has(userId);
    const merged = Object.assign(obj);
    obj.seat_name = outer1_7(items1.x, items1.y);
    const items = [, ];
    ({ x: arr[0], y: arr[1] } = items1);
    obj.seat_position_v2 = items;
    const point = items2;
    let x;
    if (items2 != null) {
      x = point.x;
    }
    if (items1.x !== x) {
      let str = "default";
    } else {
      let y;
      if (point != null) {
        y = point.y;
      }
      str = "user_selected";
    }
    obj.update_reason = str;
    items1 = [];
    items2 = [];
    items3 = [];
    const items4 = [];
    const roomUsers1 = obj1.getRoomUsers(items3.channelId);
    const item = roomUsers1.forEach((position) => {
      items1.push(arg1);
      items2.push(outer1_7(position.position.x, position.position.y));
      items3.push(position.position.x);
      items4.push(position.position.y);
    });
    obj1 = { seated_user_ids: items1, seated_user_seat_names: items2, seated_user_x_positions: items3, seated_user_y_positions: items4 };
    const merged1 = Object.assign(obj1);
    const merged2 = Object.assign(arg0);
    obj.trackWithMetadata(outer1_8.GUILD_ROOM_SEAT_SELECTED, obj);
  };
  timeout = undefined;
  function onChange() {
    let obj = outer1_4;
    const mediaSessionId = outer1_4.getMediaSessionId();
    if (null != mediaSessionId) {
      obj.removeChangeListener(onChange);
      const _clearTimeout = clearTimeout;
      clearTimeout(fetchFingerprint);
      obj = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj[0] = Object.keys(outer1_5.getVoiceStatesForChannel(channelId)).length;
      obj[1] = mediaSessionId;
      fn(obj);
    }
  }
  let obj = store;
  const mediaSessionId = store.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      outer1_4.removeChangeListener(onChange);
      clearTimeout(fetchFingerprint);
      fn({ voice_state_count: Object.keys(outer1_5.getVoiceStatesForChannel(channelId)).length });
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
  let channelId = interactionType.interactionType;
  let merged = Object.assign(interactionType, Object.create(null));
  let fn = merged;
  channelId = merged.channelId;
  fn = (arg0) => {
    let channelId;
    let guildId;
    let userId;
    let obj = channelId(fn[7]);
    ({ userId, guildId, channelId } = fn);
    if (userId == null) {
      userId = id.getId();
    }
    const roomUsers = outer1_6.getRoomUsers(channelId);
    obj = { user_id: userId, guild_id: null, channel_id: null, guild_room_user_count: null, guild_room_user_connected: null };
    if (null == guildId) {
      const channel = onChange.getChannel(channelId);
      guildId = undefined;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
    }
    obj = {};
    obj[1] = guildId;
    obj[2] = channelId;
    obj[3] = roomUsers.size;
    obj[4] = roomUsers.has(userId);
    const merged = Object.assign(obj);
    obj.interaction_type = channelId;
    const merged1 = Object.assign(arg0);
    obj.trackWithMetadata(outer1_8.GUILD_ROOM_USER_INTERACTED, obj);
  };
  let timeout;
  function onChange() {
    let obj = outer1_4;
    const mediaSessionId = outer1_4.getMediaSessionId();
    if (null != mediaSessionId) {
      obj.removeChangeListener(onChange);
      const _clearTimeout = clearTimeout;
      clearTimeout(fetchFingerprint);
      obj = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj[0] = Object.keys(outer1_5.getVoiceStatesForChannel(channelId)).length;
      obj[1] = mediaSessionId;
      fn(obj);
    }
  }
  let obj = store;
  const mediaSessionId = store.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      outer1_4.removeChangeListener(onChange);
      clearTimeout(fetchFingerprint);
      fn({ voice_state_count: Object.keys(outer1_5.getVoiceStatesForChannel(channelId)).length });
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
export const trackGuildRoomUserConnected = function trackGuildRoomUserConnected(channelId) {
  channelId = channelId.channelId;
  const fn = (arg0) => {
    let channelId;
    let guildId;
    let userId;
    let obj = channelId(fn[7]);
    ({ userId, guildId, channelId } = channelId);
    if (userId == null) {
      userId = id.getId();
    }
    const roomUsers = outer1_6.getRoomUsers(channelId);
    obj = { user_id: userId, guild_id: null, channel_id: null, guild_room_user_count: null, guild_room_user_connected: null };
    if (null == guildId) {
      const channel = onChange.getChannel(channelId);
      guildId = undefined;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
    }
    obj = {};
    obj[1] = guildId;
    obj[2] = channelId;
    obj[3] = roomUsers.size;
    obj[4] = roomUsers.has(userId);
    const merged = Object.assign(obj);
    const merged1 = Object.assign(arg0);
    obj.trackWithMetadata(outer1_8.GUILD_ROOM_USER_CONNECTED, obj);
  };
  let timeout;
  function onChange() {
    let obj = outer1_4;
    const mediaSessionId = outer1_4.getMediaSessionId();
    if (null != mediaSessionId) {
      obj.removeChangeListener(onChange);
      const _clearTimeout = clearTimeout;
      clearTimeout(fetchFingerprint);
      obj = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj[0] = Object.keys(outer1_5.getVoiceStatesForChannel(channelId)).length;
      obj[1] = mediaSessionId;
      fn(obj);
    }
  }
  let obj = store;
  const mediaSessionId = store.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      outer1_4.removeChangeListener(onChange);
      clearTimeout(fetchFingerprint);
      fn({ voice_state_count: Object.keys(outer1_5.getVoiceStatesForChannel(channelId)).length });
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
export const trackGuildRoomUserDisconnected = function trackGuildRoomUserDisconnected(channelId) {
  let guildId;
  let userId;
  let obj = collectGuildAnalyticsMetadata;
  ({ userId, guildId, channelId } = channelId);
  if (userId == null) {
    userId = id.getId();
  }
  roomUsers = roomUsers.getRoomUsers(channelId);
  obj = { user_id: userId, guild_id: null, channel_id: null, guild_room_user_count: null, guild_room_user_connected: null };
  if (null == guildId) {
    channel = channel.getChannel(channelId);
    guildId = undefined;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
  }
  obj = {};
  obj[1] = guildId;
  obj[2] = channelId;
  obj[3] = roomUsers.size;
  obj[4] = roomUsers.has(userId);
  const merged = Object.assign(obj);
  obj.voice_state_count = Object.keys(store2.getVoiceStatesForChannel(channelId.channelId)).length;
  obj.voice_media_session_id = roomUsers.getMediaSessionId(channelId.channelId);
  obj.trackWithMetadata(AnalyticEvents.GUILD_ROOM_USER_DISCONNECTED, obj);
};
export const trackGuildRoomUserUpdated = function trackGuildRoomUserUpdated(update) {
  let channelId = update.update;
  let merged = Object.assign(update, Object.create(null));
  let fn = merged;
  channelId = merged.channelId;
  fn = (arg0) => {
    let channelId;
    let guildId;
    let userId;
    let obj = channelId(fn[7]);
    ({ userId, guildId, channelId } = fn);
    if (userId == null) {
      userId = id.getId();
    }
    const roomUsers = outer1_6.getRoomUsers(channelId);
    obj = { user_id: userId, guild_id: null, channel_id: null, guild_room_user_count: null, guild_room_user_connected: null };
    if (null == guildId) {
      const channel = onChange.getChannel(channelId);
      guildId = undefined;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
    }
    obj = {};
    obj[1] = guildId;
    obj[2] = channelId;
    obj[3] = roomUsers.size;
    obj[4] = roomUsers.has(userId);
    const merged = Object.assign(obj);
    const obj1 = { update_type: channelId.updateType, update_reason: channelId.updateReason };
    const updateType = channelId.updateType;
    if ("position" === updateType) {
      const obj2 = {};
      const merged1 = Object.assign(obj1);
      const items = [tmp5.position.x, tmp5.position.y];
      obj2.position_v2 = items;
      let tmp6 = obj2;
    } else if ("status_id" === updateType) {
      const obj3 = {};
      const merged2 = Object.assign(obj1);
      obj3.status_id = tmp5.statusId;
      tmp6 = obj3;
    } else if ("status_text" === updateType) {
      const obj4 = {};
      const merged3 = Object.assign(obj1);
      obj4.status_text = tmp5.statusText;
      tmp6 = obj4;
    }
    const merged4 = Object.assign(tmp6);
    const merged5 = Object.assign(arg0);
    obj.trackWithMetadata(outer1_8.GUILD_ROOM_USER_UPDATED, obj);
  };
  let timeout;
  function onChange() {
    let obj = outer1_4;
    const mediaSessionId = outer1_4.getMediaSessionId();
    if (null != mediaSessionId) {
      obj.removeChangeListener(onChange);
      const _clearTimeout = clearTimeout;
      clearTimeout(fetchFingerprint);
      obj = { voice_state_count: null, voice_media_session_id: null };
      const _Object = Object;
      obj[0] = Object.keys(outer1_5.getVoiceStatesForChannel(channelId)).length;
      obj[1] = mediaSessionId;
      fn(obj);
    }
  }
  let obj = store;
  let mediaSessionId = store.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      outer1_4.removeChangeListener(onChange);
      clearTimeout(fetchFingerprint);
      fn({ voice_state_count: Object.keys(outer1_5.getVoiceStatesForChannel(channelId)).length });
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