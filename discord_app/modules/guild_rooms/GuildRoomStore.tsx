// === Module 9903: resolveCreatingNotes ===

// Module 9903 (resolveCreatingNotes)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import GuildRoomObjectTypes from "GuildRoomObjectTypes" /* 9904 */;
import closure_5 from "_objectWithoutProperties" /* 109 */;
import closure_6 from "fetchFingerprint" /* 1218 */;
import closure_7 from "createRTCConnection" /* 4544 */;
import closure_8 from "handleConnectionOpen" /* 1980 */;

require = arg1;
function resolveCreatingNotes(roomId, objects) {
  if (null != dependencyMap5[roomId]) {
    if (0 !== arr.length) {
      const value = objects.get(_require(set[4]).GuildRoomObjectTypes.NOTE);
      if (null != value) {
        if (0 !== value.length) {
          _require = store.getId();
          const _Set = Set;
          const found = value.filter((createdBy) => createdBy.createdBy === closure_0);
          set = new Set(found.map((position) => {
            position = position.position;
            return "" + position.x + "," + position.y;
          }));
          const found1 = arr.filter((position) => {
            position = position.position;
            return !set.has("" + position.x + "," + position.y);
          });
          if (found1.length !== arr.length) {
            if (0 === found1.length) {
              delete tmp[tmp2];
            } else {
              tmp3[roomId] = found1;
            }
          }
        }
      }
    }
  }
}
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
let closure_23 = {};
let closure_24 = [];
const PersistedStore = initializeDefault.PersistedStore;
class GuildRoomStore extends PersistedStore {
}
const prototype = GuildRoomStore.prototype;
prototype["initialize"] = function initialize(rememberVideoOverlayVisibility) {
  this.waitFor(closure_6, closure_7, closure_8);
  const items = [closure_8];
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
prototype["getCreatingNotes"] = function getCreatingNotes(arg0) {
  let tmp = dependencyMap5[arg0];
  if (tmp == null) {
    tmp = closure_24;
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
    room = room.room;
    const objects = room.objects;
    closure_13[room.roomId] = callback(room, closure_2);
    closure_14[room.roomId] = room.users;
    closure_15[room.roomId] = objects;
    resolveCreatingNotes(room.roomId, objects);
    let tmp2 = null != room.guildId;
    if (tmp2) {
      tmp2 = null != c16;
    }
    if (tmp2) {
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
      map = new Map(dependencyMap2[roomId]);
      map.delete(id);
      dependencyMap2[roomId] = map;
    }
  },
  GUILD_ROOM_DISCONNECT: function handleDisconnect(arg0) {
    ({ userId, roomId } = arg0);
    if (null == dependencyMap[roomId]) {
      return false;
    } else {
      const _Map = Map;
      map = new Map(dependencyMap2[roomId]);
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
        delete tmp[tmp2];
        if (!c20) {
          c19 = false;
        }
      }
    }
  },
  GUILD_ROOM_UPDATE: function handleUpdate(room) {
    room = room.room;
    const objects = room.objects;
    closure_13[room.roomId] = callback(room, closure_3);
    closure_15[room.roomId] = objects;
    resolveCreatingNotes(room.roomId, objects);
    const id = store.getId();
    let value;
    if (dependencyMap2[room.roomId] != null) {
      value = obj.get(id);
    }
    dependencyMap2[room.roomId] = room.users;
    if (null != value) {
      if (tmp3[room.roomId] != null) {
        const result = obj2.set(id, value);
      }
    }
  },
  GUILD_ROOM_UPDATE_FAILURE: function handleUpdateFailure(arg0) {
    ({ originalRoom, originalRoomUsers } = arg0);
    if (null == dependencyMap[originalRoom.roomId]) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(tmp2);
      obj.background = originalRoom.background;
      tmp[originalRoom.roomId] = obj;
      const id = store.getId();
      const value = originalRoomUsers.get(id);
      if (null == value) {
        const _Map = Map;
        map = new Map(dependencyMap2[originalRoom.roomId]);
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
    c16 = null;
  },
  GUILD_ROOM_TOGGLE_LAYOUT: function handleToggleLayout(roomId) {
    roomId = roomId.roomId;
    dependencyMap3[roomId] = !dependencyMap3[roomId];
    if (roomId.clearLayout) {
      c21 = true;
    }
  },
  GUILD_ROOM_LOCAL_UPDATE: function handleLocalUpdate(arg0) {
    ({ roomId, background, position, statusId, statusText } = arg0);
    if (null == dependencyMap[roomId]) {
      return false;
    } else {
      const id = store.getId();
      if (null != background) {
        obj = {};
        const merged = Object.assign(tmp[roomId]);
        obj.background = background;
        tmp[roomId] = obj;
      }
      if (null != position) {
        const value = dependencyMap2[roomId].get(id);
        if (null != value) {
          const _Map = Map;
          map = new Map(tmp4[roomId]);
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
      obj = {};
      const merged = Object.assign(tmp3);
      obj.position = tmp;
      tmp2[roomId] = obj;
    }
  },
  GUILD_ROOM_PENDING_NOTE_DELETE: function handlePendingNoteDelete(arg0) {
    delete tmp[tmp2];
  },
  GUILD_ROOM_NOTE_CREATE_START: function handleNoteCreateStart(roomId) {
    roomId = roomId.roomId;
    let items = dependencyMap5[roomId];
    ({ localId, position } = roomId);
    if (items == null) {
      items = [];
    }
    const items1 = [];
    items1[HermesBuiltin.arraySpread(items, 0)] = { localId, position };
    dependencyMap5[roomId] = items1;
  },
  GUILD_ROOM_NOTE_CREATE_FAILURE: function handleNoteCreateFailure(arg0) {
    ({ roomId, localId: require } = arg0);
    if (null == dependencyMap5[roomId]) {
      return false;
    } else {
      const found = arr.filter((localId) => localId.localId !== closure_0);
      if (found.length === arr.length) {
        return false;
      } else if (0 === found.length) {
        delete tmp[tmp2];
      } else {
        tmp3[roomId] = found;
      }
    }
  },
  GUILD_ROOM_SET_VIDEO_OVERLAY_VISIBILITY: function handleSetVideoOverlayVisibility(value) {
    value = value.value;
  },
  GUILD_ROOM_SET_REMEMBER_VIDEO_OVERLAY_VISIBILITY: function handleSetRememberVideoOverlayVisibility(rememberVideoOverlayVisibility) {
    closure_20 = rememberVideoOverlayVisibility.rememberVideoOverlayVisibility;
  }
};
const guildRoomStore = new GuildRoomStore(dispatcherDefault, obj);
let result = require("set").fileFinishedImporting("modules/guild_rooms/GuildRoomStore.tsx");

export default guildRoomStore;
export const DEFAULT_ROOM = obj;