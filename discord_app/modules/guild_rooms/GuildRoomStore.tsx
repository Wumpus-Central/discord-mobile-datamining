// === Module 4718: GuildRoomStore ===

// Module 4718 (GuildRoomStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import GuildRoomTypes from "GuildRoomTypes" /* 4719 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;

require = fn;
function resolveCreatingNotes(roomId, objects) {
  if (null != dependencyMap5[roomId]) {
    if (0 !== arr.length) {
      value = objects.get(GuildRoomTypes.GuildRoomObjectTypes.NOTE);
      if (null != value) {
        if (0 !== value.length) {
          const id = AuthenticationStore.getId();
          const _Set = Set;
          const found = value.filter((createdBy) => createdBy.createdBy === closure_0);
          const set = new Set(found.map((position) => {
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
  const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
  if (null != voiceChannelId) {
    map2.delete(voiceChannelId);
    let flag = dependencyMap3[voiceChannelId];
    if (flag == null) {
      flag = true;
    }
    dependencyMap3[voiceChannelId] = flag;
  }
}
let closure_2 = ["users", "objects"];
let closure_3 = ["users", "objects"];
let closure_4 = ["users"];
let map = new Map();
let DEFAULT_ROOM = {};
let closure_11 = [];
const map1 = new Map();
const dependencyMap = {};
const dependencyMap2 = {};
let closure_15 = {};
let c16 = null;
let c17 = null;
const dependencyMap3 = {};
const map2 = new Map();
let c20 = false;
const rememberVideoOverlayVisibility = false;
let c22 = false;
const dependencyMap4 = {};
const dependencyMap5 = {};
let closure_25 = [];
const PersistedStore = initializeDefault.PersistedStore;
class GuildRoomStore extends PersistedStore {
}
const prototype = GuildRoomStore.prototype;
prototype["initialize"] = function initialize(rememberVideoOverlayVisibility) {
  this.waitFor(AuthenticationStore, RTCConnectionStore, SelectedChannelStore);
  const items = [SelectedChannelStore];
  this.syncWith(items, handleSelectedChannelStoreChange);
  let flag;
  if (rememberVideoOverlayVisibility != null) {
    flag = rememberVideoOverlayVisibility.rememberVideoOverlayVisibility;
  }
  if (flag == null) {
    flag = false;
  }
  closure_21 = flag;
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
  c20 = flag;
};
prototype["getState"] = function getState() {
  return { videoOverlayVisibility, rememberVideoOverlayVisibility };
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
prototype["getRoomObjects"] = function getRoomObjects(arg0) {
  let tmp = closure_15[arg0];
  if (tmp == null) {
    tmp = map1;
  }
  return tmp;
};
prototype["getPendingPosition"] = function getPendingPosition() {
  return c16;
};
prototype["getPendingSeat"] = function getPendingSeat() {
  return c17;
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
    tmp = closure_25;
  }
  return tmp;
};
prototype["getNotes"] = function getNotes(arg0) {
  const roomObjects = this.getRoomObjects(arg0);
  value = roomObjects.get(GuildRoomTypes.GuildRoomObjectTypes.NOTE);
  if (value == null) {
    value = closure_11;
  }
  return value;
};
prototype["getVideoOverlayVisibility"] = function getVideoOverlayVisibility() {
  return c20;
};
prototype["getRememberVideoOverlayVisibility"] = function getRememberVideoOverlayVisibility() {
  return closure_21;
};
GuildRoomStore.displayName = "GuildRoomStore";
GuildRoomStore.persistKey = "GuildRoomStore";
DEFAULT_ROOM = {
  GUILD_ROOM_CONNECT: function handleConnect(room) {
    room = room.room;
    const objects = room.objects;
    closure_13[room.roomId] = _objectWithoutProperties(room, closure_2);
    closure_14[room.roomId] = room.users;
    closure_15[room.roomId] = objects;
    resolveCreatingNotes(room.roomId, objects);
    if (null != room.guildId) {
      if (null != c16) {
        c16 = null;
      }
      if (null != c17) {
        c17 = null;
      }
    }
  },
  GUILD_ROOM_CONNECT_FAILURE: function handleConnectFailure(roomId) {
    roomId = roomId.roomId;
    if (null == dependencyMap[roomId]) {
      return false;
    } else {
      const _Map = Map;
      const id = AuthenticationStore.getId();
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
      let tmp4 = c22;
      if (c22) {
        tmp4 = userId === AuthenticationStore.getId();
      }
      if (tmp4) {
        closure_18[roomId] = true;
        c22 = false;
      }
      if (userId === AuthenticationStore.getId()) {
        delete tmp[tmp2];
        delete tmp[tmp2];
        if (!closure_21) {
          c20 = false;
        }
      }
    }
  },
  GUILD_ROOM_UPDATE: function handleUpdate(room) {
    room = room.room;
    const objects = room.objects;
    closure_13[room.roomId] = _objectWithoutProperties(room, closure_3);
    closure_15[room.roomId] = objects;
    resolveCreatingNotes(room.roomId, objects);
    const id = AuthenticationStore.getId();
    value = undefined;
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
      let obj = {};
      const merged = Object.assign(tmp2);
      obj.background = originalRoom.background;
      tmp[originalRoom.roomId] = obj;
      const id = AuthenticationStore.getId();
      value = originalRoomUsers.get(id);
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
    closure_13[room.roomId] = _objectWithoutProperties(room, closure_4);
    closure_14[room.roomId] = room.users;
  },
  GUILD_ROOM_LOCAL_POSITION_REQUESTED: function handleLocalPositionRequested(arg0) {
    ({ position: c16, seat: c17 } = arg0);
  },
  GUILD_ROOM_LOCAL_POSITION_CLEARED: function handleLocalPositionCleared() {
    c16 = null;
    c17 = null;
  },
  GUILD_ROOM_TOGGLE_LAYOUT: function handleToggleLayout(roomId) {
    roomId = roomId.roomId;
    dependencyMap3[roomId] = !dependencyMap3[roomId];
    if (roomId.clearLayout) {
      c22 = true;
    }
  },
  GUILD_ROOM_LOCAL_UPDATE: function handleLocalUpdate(arg0) {
    ({ roomId, background, position, seat, statusId, statusText } = arg0);
    if (null == dependencyMap[roomId]) {
      return false;
    } else {
      const id = AuthenticationStore.getId();
      if (null != background) {
        let obj = {};
        const merged = Object.assign(tmp[roomId]);
        obj.background = background;
        tmp[roomId] = obj;
      }
      value = dependencyMap2[roomId].get(id);
      if (null != value) {
        const _Map = Map;
        map = new Map(tmp4[roomId]);
        obj = {};
        const merged1 = Object.assign(value);
        if (position == null) {
          position = value.position;
        }
        obj.position = position;
        if (seat == null) {
          seat = value.seat;
        }
        obj.seat = seat;
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
    }
  },
  MEDIA_SESSION_JOINED: function handleMediaSessionJoined() {
    const channelId = RTCConnectionStore.getChannelId();
    const mediaSessionId = RTCConnectionStore.getMediaSessionId();
    if (tmp3) {
      const result = map2.set(channelId, mediaSessionId);
    }
  },
  GUILD_ROOM_PENDING_NOTE_START: function handlePendingNoteStart(roomId) {
    closure_23[roomId.roomId] = { position: null };
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
      const found = arr.filter((localId) => localId.localId !== require);
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
    closure_21 = rememberVideoOverlayVisibility.rememberVideoOverlayVisibility;
  }
};
const guildRoomStore = new GuildRoomStore(DispatcherDefault, DEFAULT_ROOM);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_rooms/GuildRoomStore.tsx");

export default guildRoomStore;
export { DEFAULT_ROOM };