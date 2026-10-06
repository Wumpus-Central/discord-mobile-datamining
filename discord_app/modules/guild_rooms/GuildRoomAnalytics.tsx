// discord_app/modules/guild_rooms/GuildRoomAnalytics.tsx
import Constants from "../../Constants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import GuildRoomUtils from "GuildRoomUtils.tsx";
import GuildRoomBackgrounds from "../../../discord_common/js/shared/shared-constants/GuildRoomBackgrounds.tsx";
import AppAnalyticsUtilsDefault from "../app_analytics/AppAnalyticsUtils.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";
import GuildRoomStore from "GuildRoomStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

function getBaseProperties(merged) {
  let background;
  let channelId;
  let guildId;
  let userId;
  ({ userId, guildId, channelId } = merged);
  if (userId == null) {
    userId = AuthenticationStore.getId();
  }
  const roomUsers = GuildRoomStore.getRoomUsers(channelId);
  const obj2 = {
    user_id: userId,
    guild_id: guildId,
    channel_id: channelId,
    guild_room_user_count: roomUsers.size,
    guild_room_user_connected: roomUsers.has(userId),
    guild_room_background: background,
  };
  if (null == guildId) {
    const channel = ChannelStore.getChannel(channelId);
    let guildId1;
    if (channel != null) {
      guildId1 = channel.getGuildId();
    }
    guildId = guildId1;
  }
  const room = GuildRoomStore.getRoom(channelId);
  background = undefined;
  if (room != null) {
    background = room.background;
  }
  if (background == null) {
    background = GuildRoomBackgrounds.GuildRoomBackgrounds.DEFAULT;
  }
  return obj2;
}
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/guild_rooms/GuildRoomAnalytics.tsx");

export const trackGuildRoomObjectInteracted = function trackGuildRoomObjectInteracted(interactionType) {
  interactionType = interactionType.interactionType;
  let merged = Object.assign(interactionType, Object.assign({ interactionType: 0 }));
  const channelId = merged.channelId;
  const f90089 = (arg0) => {
    const obj = { interaction_type: channelId };
    const trackWithMetadata = merged(dependencyMap[8]).trackWithMetadata;
    const GUILD_ROOM_OBJECT_INTERACTED = constants.GUILD_ROOM_OBJECT_INTERACTED;
    merged(dependencyMap[8]);
    merged = Object.assign(getBaseProperties(f90089));
    const merged1 = Object.assign(arg0);
    trackWithMetadata(GUILD_ROOM_OBJECT_INTERACTED, obj);
  };
  let timeout;
  function onChange() {
    const mediaSessionId = RTCConnectionStore.getMediaSessionId();
    if (null != mediaSessionId) {
      RTCConnectionStore.removeChangeListener(onChange);
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_2);
      const _Object = Object;
      const obj2 = {
        voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length,
        voice_media_session_id: mediaSessionId,
      };
      f90097(obj2);
    }
  }
  const mediaSessionId = RTCConnectionStore.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      RTCConnectionStore.removeChangeListener(onChange);
      clearTimeout(closure_2);
      const obj = { voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length };
      f90097(obj);
    }, 2500);
    RTCConnectionStore.addChangeListener(onChange);
  } else {
    const _Object = Object;
    const obj2 = {
      voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length,
      voice_media_session_id: mediaSessionId,
    };
    const obj3 = { interaction_type: interactionType };
    let trackWithMetadata = merged(5076).trackWithMetadata;
    let GUILD_ROOM_OBJECT_INTERACTED = AnalyticEvents.GUILD_ROOM_OBJECT_INTERACTED;
    merged(5076);
    let merged1 = Object.assign(getBaseProperties(merged));
    const merged2 = Object.assign(obj2);
    trackWithMetadata(GUILD_ROOM_OBJECT_INTERACTED, obj3);
  }
};
export const trackGuildRoomInteracted = function trackGuildRoomInteracted(interactionType) {
  interactionType = interactionType.interactionType;
  let merged = Object.assign(interactionType, Object.assign({ interactionType: 0 }));
  const channelId = merged.channelId;
  const f90090 = (arg0) => {
    const obj = { interaction_type: channelId };
    const trackWithMetadata = merged(dependencyMap[8]).trackWithMetadata;
    const GUILD_ROOM_INTERACTED = constants.GUILD_ROOM_INTERACTED;
    merged(dependencyMap[8]);
    merged = Object.assign(getBaseProperties(f90090));
    const merged1 = Object.assign(arg0);
    trackWithMetadata(GUILD_ROOM_INTERACTED, obj);
  };
  let timeout;
  function onChange() {
    const mediaSessionId = RTCConnectionStore.getMediaSessionId();
    if (null != mediaSessionId) {
      RTCConnectionStore.removeChangeListener(onChange);
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_2);
      const _Object = Object;
      const obj2 = {
        voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length,
        voice_media_session_id: mediaSessionId,
      };
      f90097(obj2);
    }
  }
  const mediaSessionId = RTCConnectionStore.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      RTCConnectionStore.removeChangeListener(onChange);
      clearTimeout(closure_2);
      const obj = { voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length };
      f90097(obj);
    }, 2500);
    RTCConnectionStore.addChangeListener(onChange);
  } else {
    const _Object = Object;
    const obj2 = {
      voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length,
      voice_media_session_id: mediaSessionId,
    };
    const obj3 = { interaction_type: interactionType };
    let trackWithMetadata = merged(5076).trackWithMetadata;
    let GUILD_ROOM_INTERACTED = AnalyticEvents.GUILD_ROOM_INTERACTED;
    merged(5076);
    let merged1 = Object.assign(getBaseProperties(merged));
    const merged2 = Object.assign(obj2);
    trackWithMetadata(GUILD_ROOM_INTERACTED, obj3);
  }
};
export const trackGuildRoomLayoutToggled = function trackGuildRoomLayoutToggled(location) {
  const _location = location.location;
  const guildRoomOpen = location.guildRoomOpen;
  let merged = Object.assign(location, Object.assign({ location: 0, guildRoomOpen: 0 }));
  const channelId = merged.channelId;
  const f90091 = (arg0) => {
    const obj = { location: channelId, guild_room_open: f90091 };
    const trackWithMetadata = guildRoomOpen(merged[8]).trackWithMetadata;
    const GUILD_ROOM_LAYOUT_TOGGLED = constants.GUILD_ROOM_LAYOUT_TOGGLED;
    guildRoomOpen(merged[8]);
    merged = Object.assign(getBaseProperties(closure_2));
    const merged1 = Object.assign(arg0);
    trackWithMetadata(GUILD_ROOM_LAYOUT_TOGGLED, obj);
  };
  let timeout;
  function onChange() {
    const mediaSessionId = RTCConnectionStore.getMediaSessionId();
    if (null != mediaSessionId) {
      RTCConnectionStore.removeChangeListener(onChange);
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_2);
      const _Object = Object;
      const obj2 = {
        voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length,
        voice_media_session_id: mediaSessionId,
      };
      f90097(obj2);
    }
  }
  const mediaSessionId = RTCConnectionStore.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      RTCConnectionStore.removeChangeListener(onChange);
      clearTimeout(closure_2);
      const obj = { voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length };
      f90097(obj);
    }, 2500);
    RTCConnectionStore.addChangeListener(onChange);
  } else {
    const _Object = Object;
    const obj2 = {
      voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length,
      voice_media_session_id: mediaSessionId,
    };
    const obj3 = { location: _location, guild_room_open: guildRoomOpen };
    let trackWithMetadata = guildRoomOpen(merged[8]).trackWithMetadata;
    let GUILD_ROOM_LAYOUT_TOGGLED = AnalyticEvents.GUILD_ROOM_LAYOUT_TOGGLED;
    guildRoomOpen(merged[8]);
    let merged1 = Object.assign(getBaseProperties(merged));
    const merged2 = Object.assign(obj2);
    trackWithMetadata(GUILD_ROOM_LAYOUT_TOGGLED, obj3);
  }
};
export const trackGuildRoomOpened = function trackGuildRoomOpened(location) {
  const _location = location.location;
  let merged = Object.assign(location, Object.assign({ location: 0 }));
  const channelId = merged.channelId;
  const f90092 = (arg0) => {
    const obj = { location: channelId };
    const trackWithMetadata = merged(dependencyMap[8]).trackWithMetadata;
    const GUILD_ROOM_OPENED = constants.GUILD_ROOM_OPENED;
    merged(dependencyMap[8]);
    merged = Object.assign(getBaseProperties(f90092));
    const merged1 = Object.assign(arg0);
    trackWithMetadata(GUILD_ROOM_OPENED, obj);
  };
  let timeout;
  function onChange() {
    const mediaSessionId = RTCConnectionStore.getMediaSessionId();
    if (null != mediaSessionId) {
      RTCConnectionStore.removeChangeListener(onChange);
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_2);
      const _Object = Object;
      const obj2 = {
        voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length,
        voice_media_session_id: mediaSessionId,
      };
      f90097(obj2);
    }
  }
  const mediaSessionId = RTCConnectionStore.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      RTCConnectionStore.removeChangeListener(onChange);
      clearTimeout(closure_2);
      const obj = { voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length };
      f90097(obj);
    }, 2500);
    RTCConnectionStore.addChangeListener(onChange);
  } else {
    const _Object = Object;
    const obj2 = {
      voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length,
      voice_media_session_id: mediaSessionId,
    };
    const obj3 = { location: _location };
    let trackWithMetadata = merged(5076).trackWithMetadata;
    let GUILD_ROOM_OPENED = AnalyticEvents.GUILD_ROOM_OPENED;
    merged(5076);
    let merged1 = Object.assign(getBaseProperties(merged));
    const merged2 = Object.assign(obj2);
    trackWithMetadata(GUILD_ROOM_OPENED, obj3);
  }
};
export const trackGuildRoomSeatSelected = function trackGuildRoomSeatSelected(arg0) {
  ({
    actualSeatPosition: require,
    targetSeatPosition: importDefault,
    actualSeatId: dependencyMap,
    targetSeatId: AuthenticationStore,
  } = arg0);
  let merged = Object.assign(
    arg0,
    Object.assign({ actualSeatPosition: 0, targetSeatPosition: 0, actualSeatId: 0, targetSeatId: 0 }),
  );
  let channelId = merged.channelId;
  const fn = (arg0) => {
    let items;
    let str;
    let obj = { seat_name: str, seat_position_v2: items, seat_id: dependencyMap };
    const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
    const GUILD_ROOM_SEAT_SELECTED = AnalyticEvents.GUILD_ROOM_SEAT_SELECTED;
    AppAnalyticsUtilsDefault;
    const tmp2 = merged;
    merged = Object.assign(getBaseProperties(merged));
    const point = require;
    const obj2 = GuildRoomUtils;
    let findSeatResult = obj2.findSeat(dependencyMap, require, merged.channelId);
    str = undefined;
    if (findSeatResult != null) {
      str = findSeatResult.name;
    }
    if (str == null) {
      str = "";
    }
    items = [,];
    ({ x: arr[0], y: arr[1] } = point);
    const point2 = importDefault;
    let x1;
    const x = point.x;
    if (importDefault != null) {
      x1 = point2.x;
    }
    if (x === x1) {
      let str2;
      let y1;
      const y = point.y;
      if (point2 != null) {
        y1 = point2.y;
      }
      if (y === y1) {
        str2 = "user_selected";
      }
      obj.update_reason = str2;
      const channelId = tmp2.channelId;
      const items1 = [];
      const items2 = [];
      const items3 = [];
      const items4 = [];
      const roomUsers = GuildRoomStore.getRoomUsers(channelId);
      const item = roomUsers.forEach((seat, index) => {
        items1.push(index);
        const push = items2.push;
        const obj = closure_2_0(closure_2_2[6]);
        const findSeatResult = obj.findSeat(seat.seat, seat.position, channelId);
        let str;
        if (findSeatResult != null) {
          str = findSeatResult.name;
        }
        if (str == null) {
          str = "";
        }
        push(str);
        items3.push(seat.position.x);
        items4.push(seat.position.y);
      });
      const obj3 = {
        seated_user_ids: items1,
        seated_user_seat_names: items2,
        seated_user_x_positions: items3,
        seated_user_y_positions: items4,
      };
      const merged1 = Object.assign(obj3);
      const merged2 = Object.assign(arg0);
      trackWithMetadata(GUILD_ROOM_SEAT_SELECTED, obj);
    }
    str2 = "default";
  };
  let timeout;
  function onChange() {
    const mediaSessionId = RTCConnectionStore.getMediaSessionId();
    if (null != mediaSessionId) {
      RTCConnectionStore.removeChangeListener(onChange);
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_2);
      const _Object = Object;
      const obj2 = {
        voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length,
        voice_media_session_id: mediaSessionId,
      };
      f90097(obj2);
    }
  }
  const mediaSessionId = RTCConnectionStore.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      RTCConnectionStore.removeChangeListener(onChange);
      clearTimeout(closure_2);
      const obj = { voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length };
      f90097(obj);
    }, 2500);
    RTCConnectionStore.addChangeListener(onChange);
  } else {
    let obj2 = {
      voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length,
      voice_media_session_id: mediaSessionId,
    };
    const _Object = Object;
    fn(obj2);
  }
};
export const trackGuildRoomUserInteracted = function trackGuildRoomUserInteracted(interactionType) {
  interactionType = interactionType.interactionType;
  let merged = Object.assign(interactionType, Object.assign({ interactionType: 0 }));
  const channelId = merged.channelId;
  const f90094 = (arg0) => {
    const obj = { interaction_type: channelId };
    const trackWithMetadata = merged(dependencyMap[8]).trackWithMetadata;
    const GUILD_ROOM_USER_INTERACTED = constants.GUILD_ROOM_USER_INTERACTED;
    merged(dependencyMap[8]);
    merged = Object.assign(getBaseProperties(f90094));
    const merged1 = Object.assign(arg0);
    trackWithMetadata(GUILD_ROOM_USER_INTERACTED, obj);
  };
  let timeout;
  function onChange() {
    const mediaSessionId = RTCConnectionStore.getMediaSessionId();
    if (null != mediaSessionId) {
      RTCConnectionStore.removeChangeListener(onChange);
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_2);
      const _Object = Object;
      const obj2 = {
        voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length,
        voice_media_session_id: mediaSessionId,
      };
      f90097(obj2);
    }
  }
  const mediaSessionId = RTCConnectionStore.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      RTCConnectionStore.removeChangeListener(onChange);
      clearTimeout(closure_2);
      const obj = { voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length };
      f90097(obj);
    }, 2500);
    RTCConnectionStore.addChangeListener(onChange);
  } else {
    const _Object = Object;
    const obj2 = {
      voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length,
      voice_media_session_id: mediaSessionId,
    };
    const obj3 = { interaction_type: interactionType };
    let trackWithMetadata = merged(5076).trackWithMetadata;
    let GUILD_ROOM_USER_INTERACTED = AnalyticEvents.GUILD_ROOM_USER_INTERACTED;
    merged(5076);
    let merged1 = Object.assign(getBaseProperties(merged));
    const merged2 = Object.assign(obj2);
    trackWithMetadata(GUILD_ROOM_USER_INTERACTED, obj3);
  }
};
export const trackGuildRoomUserConnected = function trackGuildRoomUserConnected(channelId) {
  let closure_0 = channelId;
  channelId = channelId.channelId;
  const f90095 = (arg0) => {
    const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
    const GUILD_ROOM_USER_CONNECTED = constants.GUILD_ROOM_USER_CONNECTED;
    const obj = {};
    AppAnalyticsUtilsDefault;
    const merged = Object.assign(getBaseProperties(channelId));
    const merged1 = Object.assign(arg0);
    trackWithMetadata(GUILD_ROOM_USER_CONNECTED, obj);
  };
  let timeout;
  function onChange() {
    const mediaSessionId = RTCConnectionStore.getMediaSessionId();
    if (null != mediaSessionId) {
      RTCConnectionStore.removeChangeListener(onChange);
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_2);
      const _Object = Object;
      const obj2 = {
        voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length,
        voice_media_session_id: mediaSessionId,
      };
      f90097(obj2);
    }
  }
  const mediaSessionId = RTCConnectionStore.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      RTCConnectionStore.removeChangeListener(onChange);
      clearTimeout(closure_2);
      const obj = { voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length };
      f90097(obj);
    }, 2500);
    RTCConnectionStore.addChangeListener(onChange);
  } else {
    const _Object = Object;
    const obj2 = {
      voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length,
      voice_media_session_id: mediaSessionId,
    };
    const obj3 = {};
    let trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
    let GUILD_ROOM_USER_CONNECTED = AnalyticEvents.GUILD_ROOM_USER_CONNECTED;
    AppAnalyticsUtilsDefault;
    let merged = Object.assign(getBaseProperties(channelId));
    let merged1 = Object.assign(obj2);
    trackWithMetadata(GUILD_ROOM_USER_CONNECTED, obj3);
  }
};
export const trackGuildRoomUserDisconnected = function trackGuildRoomUserDisconnected(channelId) {
  const obj = {
    voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId.channelId)).length,
    voice_media_session_id: GuildRoomStore.getMediaSessionId(channelId.channelId),
  };
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const GUILD_ROOM_USER_DISCONNECTED = AnalyticEvents.GUILD_ROOM_USER_DISCONNECTED;
  AppAnalyticsUtilsDefault;
  const merged = Object.assign(getBaseProperties(channelId));
  trackWithMetadata(GUILD_ROOM_USER_DISCONNECTED, obj);
};
export const trackGuildRoomSettingsUpdate = function trackGuildRoomSettingsUpdate(rememberVideoOverlayVisibility) {
  rememberVideoOverlayVisibility = rememberVideoOverlayVisibility.rememberVideoOverlayVisibility;
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.GUILD_ROOM_SETTINGS_UPDATE, {
    remember_video_overlay_visibility: rememberVideoOverlayVisibility,
  });
};
export const trackGuildRoomUserUpdated = function trackGuildRoomUserUpdated(update) {
  update = update.update;
  let merged = Object.assign(update, Object.assign({ update: 0 }));
  const channelId = merged.channelId;
  const fn = (arg0) => {
    let items;
    let tmp4;
    const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
    const GUILD_ROOM_USER_UPDATED = AnalyticEvents.GUILD_ROOM_USER_UPDATED;
    const obj = {};
    AppAnalyticsUtilsDefault;
    merged = Object.assign(getBaseProperties(merged));
    const obj2 = { update_type: update.updateType, update_reason: update.updateReason };
    const updateType = update.updateType;
    if ("position" === updateType) {
      const obj3 = { position_v2: items };
      const merged1 = Object.assign(obj2);
      items = [update.position.x, update.position.y];
      tmp4 = obj3;
    } else if ("seat" === updateType) {
      const obj4 = { seat_id: update.seat };
      const merged2 = Object.assign(obj2);
      tmp4 = obj4;
    } else if ("status_id" === updateType) {
      const obj5 = { status_id: update.statusId };
      const merged3 = Object.assign(obj2);
      tmp4 = obj5;
    } else if ("status_text" === updateType) {
      const obj6 = { status_text: update.statusText };
      const merged4 = Object.assign(obj2);
      tmp4 = obj6;
    }
    const merged5 = Object.assign(tmp4);
    const merged6 = Object.assign(arg0);
    trackWithMetadata(GUILD_ROOM_USER_UPDATED, obj);
  };
  let timeout;
  function onChange() {
    const mediaSessionId = RTCConnectionStore.getMediaSessionId();
    if (null != mediaSessionId) {
      RTCConnectionStore.removeChangeListener(onChange);
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_2);
      const _Object = Object;
      const obj2 = {
        voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length,
        voice_media_session_id: mediaSessionId,
      };
      f90097(obj2);
    }
  }
  const mediaSessionId = RTCConnectionStore.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      RTCConnectionStore.removeChangeListener(onChange);
      clearTimeout(closure_2);
      const obj = { voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length };
      f90097(obj);
    }, 2500);
    RTCConnectionStore.addChangeListener(onChange);
  } else {
    let obj2 = {
      voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length,
      voice_media_session_id: mediaSessionId,
    };
    const _Object = Object;
    fn(obj2);
  }
};
export const trackGuildRoomUpdated = function trackGuildRoomUpdated(update) {
  update = update.update;
  let merged = Object.assign(update, Object.assign({ update: 0 }));
  const channelId = merged.channelId;
  const f90097 = (arg0) => {
    const trackWithMetadata = merged(dependencyMap[8]).trackWithMetadata;
    const GUILD_ROOM_UPDATED = constants.GUILD_ROOM_UPDATED;
    const obj = {};
    merged(dependencyMap[8]);
    merged = Object.assign(getBaseProperties(f90097));
    let tmp4;
    const obj2 = { update_type: channelId.updateType };
    if ("background" === channelId.updateType) {
      const obj3 = { background: tmp3.background };
      const merged1 = Object.assign(obj2);
      tmp4 = obj3;
    }
    const merged2 = Object.assign(tmp4);
    const merged3 = Object.assign(arg0);
    trackWithMetadata(GUILD_ROOM_UPDATED, obj);
  };
  let timeout;
  function onChange() {
    const mediaSessionId = RTCConnectionStore.getMediaSessionId();
    if (null != mediaSessionId) {
      RTCConnectionStore.removeChangeListener(onChange);
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_2);
      const _Object = Object;
      const obj2 = {
        voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length,
        voice_media_session_id: mediaSessionId,
      };
      f90097(obj2);
    }
  }
  let mediaSessionId = RTCConnectionStore.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      RTCConnectionStore.removeChangeListener(onChange);
      clearTimeout(closure_2);
      const obj = { voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length };
      f90097(obj);
    }, 2500);
    RTCConnectionStore.addChangeListener(onChange);
  } else {
    let obj2 = {
      voice_state_count: Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length,
      voice_media_session_id: mediaSessionId,
    };
    let _Object = Object;
    let obj3 = {};
    let trackWithMetadata = merged(5076).trackWithMetadata;
    let GUILD_ROOM_UPDATED = AnalyticEvents.GUILD_ROOM_UPDATED;
    merged(5076);
    let merged1 = Object.assign(getBaseProperties(merged));
    const obj4 = { update_type: update.updateType };
    let tmp6;
    if ("background" === update.updateType) {
      const obj5 = { background: update.background };
      const tmp3 = obj5;
      let tmp4 = obj4;
      let merged2 = Object.assign(obj4);
      tmp6 = obj5;
    }
    let merged3 = Object.assign(tmp6);
    const merged4 = Object.assign(obj2);
    trackWithMetadata(GUILD_ROOM_UPDATED, obj3);
  }
};
