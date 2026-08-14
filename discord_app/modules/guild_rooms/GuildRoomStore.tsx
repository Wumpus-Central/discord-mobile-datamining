// discord_app/modules/guild_rooms/GuildRoomStore.tsx
import _objectWithoutProperties from "_objectWithoutProperties";
import fetchFingerprint from "fetchFingerprint";
import createRTCConnection from "createRTCConnection";
import handleConnectionOpen from "handleConnectionOpen";
import { PersistedStore } from "initialize";
import { GuildRoomObjectTypes } from "GuildRoomTypes.tsx";

const require = arg1;
function handleSelectedChannelStoreChange() {
  voiceChannelId = voiceChannelId.getVoiceChannelId();
  if (null != voiceChannelId) {
    map2.delete(voiceChannelId);
    let flag = dependencyMap3[voiceChannelId];
    if (flag == null) {
      flag = true;
    }
    dependencyMap3[voiceChannelId] = flag;
    const tmp4 = dependencyMap3;
  }
}
function handleNoteCreateComplete(arg0) {
  delete tmp[tmp2];
}
let closure_2 = ["users", "objects"];
let closure_3 = ["users", "objects"];
let closure_4 = ["users"];
let map = new Map();
let obj = {};
let closure_11 = [];
const map1 = new Map();
let closure_13 = {};
let closure_14 = {};
let closure_15 = {};
let c16 = null;
let closure_17 = {};
const map2 = new Map();
let c19 = false;
let c20 = false;
let c21 = false;
let closure_22 = {};
class GuildRoomStore extends PersistedStore {
}
const prototype = GuildRoomStore.prototype;
prototype["initialize"] = function initialize(rememberVideoOverlayVisibility) {
  this.waitFor(fetchFingerprint, createRTCConnection, handleConnectionOpen);
  const items = [handleConnectionOpen];
  this.syncWith(items, handleSelectedChannelStoreChange);
  let flag;
  if (rememberVideoOverlayVisibility != null) {
    flag = rememberVideoOverlayVisibility.rememberVideoOverlayVisibility;
  }
  if (flag == null) {
    flag = false;
  }
  if (flag) {
    let flag2;
    if (rememberVideoOverlayVisibility != null) {
      flag2 = rememberVideoOverlayVisibility.videoOverlayVisibility;
    }
    if (flag2 == null) {
      flag2 = false;
    }
    flag = flag2;
  }
};
prototype["getState"] = function getState() {
  return { videoOverlayVisibility: c19, rememberVideoOverlayVisibility: c20 };
};
prototype["getRoom"] = function getRoom(channelId) {
  let tmp = dependencyMap[channelId];
  if (tmp == null) {
    tmp = obj;
  }
  return tmp;
};
prototype["getRoomUsers"] = function getRoomUsers(channelId) {
  let tmp = dependencyMap2[channelId];
  if (tmp == null) {
    tmp = map;
  }
  return tmp;
};
prototype["getRoomObjects"] = function getRoomObjects(closure_1) {
  let tmp = table[closure_1];
  if (tmp == null) {
    tmp = map1;
  }
  return tmp;
};
prototype["getPendingPosition"] = function getPendingPosition() {
  return c16;
};
prototype["getMediaSessionId"] = function getMediaSessionId(arg0) {
  return map2.get(arg0);
};
prototype["isVisible"] = function isVisible(arg0) {
  let flag = dependencyMap3[arg0];
  if (flag == null) {
    flag = true;
  }
  return flag;
};
prototype["getPendingNote"] = function getPendingNote(arg0) {
  let tmp = dependencyMap4[arg0];
  if (tmp == null) {
    tmp = null;
  }
  return tmp;
};
prototype["getNotes"] = function getNotes(closure_1) {
  const roomObjects = this.getRoomObjects(closure_1);
  let value = roomObjects.get(GuildRoomObjectTypes.GuildRoomObjectTypes.NOTE);
  if (value == null) {
    value = closure_11;
  }
  return value;
};
prototype["getVideoOverlayVisibility"] = function getVideoOverlayVisibility() {
  return c19;
};
prototype["getRememberVideoOverlayVisibility"] = function getRememberVideoOverlayVisibility() {
  return c20;
};
GuildRoomStore.displayName = "GuildRoomStore";
GuildRoomStore.persistKey = "GuildRoomStore";
obj = {
  GUILD_ROOM_CONNECT: function handleConnect(room) {
    let objects;
    let users;
    room = room.room;
    ({ users, objects } = room);
    closure_13[room.roomId] = callback(room, closure_2);
    closure_14[room.roomId] = users;
    closure_15[room.roomId] = objects;
    let tmp = null != room.guildId;
    if (tmp) {
      tmp = null != c16;
    }
    if (tmp) {
      c16 = null;
    }
  },
  GUILD_ROOM_CONNECT_FAILURE: function handleConnectFailure(roomId) {
    roomId = roomId.roomId;
    if (null == dependencyMap[roomId]) {
      return false;
    } else {
      const _Map = Map;
      const id = store.getId();
      const map = new Map(dependencyMap2[roomId]);
      map.delete(id);
      dependencyMap2[roomId] = map;
    }
  },
  GUILD_ROOM_DISCONNECT: function handleDisconnect(arg0) {
    let roomId;
    let userId;
    ({ userId, roomId } = arg0);
    if (null == dependencyMap[roomId]) {
      return false;
    } else {
      const _Map = Map;
      const map = new Map(dependencyMap2[roomId]);
      map.delete(userId);
      dependencyMap2[roomId] = map;
      let tmp4 = c21;
      if (c21) {
        tmp4 = userId === store.getId();
      }
      if (tmp4) {
        closure_17[roomId] = true;
        c21 = false;
      }
      if (userId === store.getId()) {
        delete tmp[tmp2];
        if (!c20) {
          let c19 = false;
        }
      }
    }
  },
  GUILD_ROOM_UPDATE: function handleUpdate(room) {
    let objects;
    let users;
    room = room.room;
    ({ users, objects } = room);
    closure_13[room.roomId] = callback(room, closure_3);
    closure_15[room.roomId] = objects;
    const id = store.getId();
    let value;
    if (dependencyMap2[room.roomId] != null) {
      value = obj.get(id);
    }
    dependencyMap2[room.roomId] = users;
    if (null != value) {
      if (tmp2[room.roomId] != null) {
        const result = obj2.set(id, value);
      }
    }
  },
  GUILD_ROOM_UPDATE_FAILURE: function handleUpdateFailure(arg0) {
    let originalRoom;
    let originalRoomUsers;
    ({ originalRoom, originalRoomUsers } = arg0);
    if (null == dependencyMap[originalRoom.roomId]) {
      return false;
    } else {
      let obj = {};
      const merged = Object.assign(tmp2);
      obj.background = originalRoom.background;
      tmp[originalRoom.roomId] = obj;
      const id = store.getId();
      const value = originalRoomUsers.get(id);
      if (null == value) {
        const _Map = Map;
        const map = new Map(dependencyMap2[originalRoom.roomId]);
        map.delete(id);
        dependencyMap2[originalRoom.roomId] = map;
      } else {
        obj = dependencyMap2[originalRoom.roomId];
        if (obj != null) {
          const result = obj.set(id, value);
        }
      }
    }
  },
  GUILD_ROOM_FETCH_SUCCESS: function handleFetchSuccess(room) {
    room = room.room;
    closure_13[room.roomId] = callback(room, closure_4);
    closure_14[room.roomId] = room.users;
  },
  GUILD_ROOM_LOCAL_POSITION_REQUESTED: function handleLocalPositionRequested(position) {
    position = position.position;
  },
  GUILD_ROOM_LOCAL_POSITION_CLEARED: function handleLocalPositionCleared() {
    let c16 = null;
  },
  GUILD_ROOM_TOGGLE_LAYOUT: function handleToggleLayout(roomId) {
    roomId = roomId.roomId;
    dependencyMap3[roomId] = !dependencyMap3[roomId];
    if (roomId.clearLayout) {
      let c21 = true;
    }
  },
  GUILD_ROOM_LOCAL_UPDATE: function handleLocalUpdate(arg0) {
    let background;
    let position;
    let roomId;
    let statusId;
    let statusText;
    ({ roomId, background, position, statusId, statusText } = arg0);
    if (null == dependencyMap[roomId]) {
      return false;
    } else {
      const id = store.getId();
      if (null != background) {
        let obj = {};
        const merged = Object.assign(tmp[roomId]);
        obj.background = background;
        tmp[roomId] = obj;
      }
      if (null != position) {
        const value = dependencyMap2[roomId].get(id);
        if (null != value) {
          const _Map = Map;
          const map = new Map(tmp4[roomId]);
          obj = {};
          const merged1 = Object.assign(value);
          if (position == null) {
            position = value.position;
          }
          obj.position = position;
          if (statusId == null) {
            statusId = value.statusId;
          }
          obj.statusId = statusId;
          if (statusText == null) {
            statusText = value.statusText;
          }
          obj.statusText = statusText;
          const result = map.set(id, obj);
          tmp4[roomId] = map;
        }
        const obj2 = dependencyMap2[roomId];
      }
    }
  },
  MEDIA_SESSION_JOINED: function handleMediaSessionJoined() {
    const channelId = store2.getChannelId();
    const mediaSessionId = store2.getMediaSessionId();
    if (tmp3) {
      const result = map2.set(channelId, mediaSessionId);
    }
  },
  GUILD_ROOM_PENDING_NOTE_START: function handlePendingNoteStart(roomId) {
    closure_22[roomId.roomId] = { position: null };
  },
  GUILD_ROOM_PENDING_NOTE_PLACE: function handlePendingNotePlace(roomId) {
    roomId = roomId.roomId;
    if (null == dependencyMap4[roomId]) {
      return false;
    } else {
      const obj = {};
      const merged = Object.assign(tmp3);
      obj.position = tmp;
      tmp2[roomId] = obj;
    }
  },
  GUILD_ROOM_PENDING_NOTE_DELETE: handleNoteCreateComplete,
  GUILD_ROOM_NOTE_CREATE_COMPLETE: handleNoteCreateComplete,
  GUILD_ROOM_SET_VIDEO_OVERLAY_VISIBILITY: function handleSetVideoOverlayVisibility(value) {
    value = value.value;
  },
  GUILD_ROOM_SET_REMEMBER_VIDEO_OVERLAY_VISIBILITY: function handleSetRememberVideoOverlayVisibility(rememberVideoOverlayVisibility) {
    let closure_20 = rememberVideoOverlayVisibility.rememberVideoOverlayVisibility;
  }
};
const guildRoomStore = new GuildRoomStore(require("dispatcher"), obj);
let result = require("createRTCConnection").fileFinishedImporting("modules/guild_rooms/GuildRoomStore.tsx");

export default guildRoomStore;
export const DEFAULT_ROOM = obj;