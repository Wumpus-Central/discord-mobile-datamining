// discord_app/modules/guild_rooms/GuildRoomStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import GuildRoomTypes from "GuildRoomTypes.tsx";
import _objectWithoutProperties from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let set;

function resolveCreatingNotes(roomId, objects) {
  if (null != closure_24[roomId]) {
    if (0 !== closure_24[roomId].length) {
      const value = objects.get(GuildRoomTypes.GuildRoomObjectTypes.NOTE);
      if (null != value) {
        if (0 !== value.length) {
          const id = AuthenticationStore.getId();
          const _Set = Set;
          const found = value.filter((createdBy) => createdBy.createdBy === closure_0);
          const self = this;
          const self2 = this;
          set = new Set(
            found.map((position) => {
              position = position.position;
              return "" + position.x + "," + position.y;
            }),
          );
          const found1 = arr.filter((position) => {
            position = position.position;
            return !set.has("" + position.x + "," + position.y);
          });
          if (found1.length !== closure_24[roomId].length) {
            if (0 === found1.length) {
              delete closure_24[tmp];
            } else {
              closure_24[roomId] = found1;
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
    flag = closure_18[voiceChannelId];
    if (flag == null) {
      flag = true;
    }
    closure_18[voiceChannelId] = flag;
  }
}
let closure_2 = ["users", "objects"];
let closure_3 = ["users", "objects"];
let closure_4 = ["users"];
let map = new Map();
const DEFAULT_ROOM = {};
let closure_11 = [];
new Map();
const map1 = {};
const authStore2 = {};
let closure_15 = {};
let c16 = null;
let c17 = null;
const authStore4 = {};
const map2 = new Map();
let flag = false;
let c22 = false;
let closure_23 = {};
let closure_24 = {};
let closure_25 = [];
const PersistedStore = get_initializedDefault.PersistedStore;
class GuildRoomStore extends PersistedStore {
  initialize(rememberVideoOverlayVisibility) {
    this.waitFor(AuthenticationStore, RTCConnectionStore, SelectedChannelStore);
    const items = [SelectedChannelStore];
    this.syncWith(items, handleSelectedChannelStoreChange);
    flag = undefined;
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
  }
  getState() {
    return { videoOverlayVisibility: flag, rememberVideoOverlayVisibility: flag };
  }
  getRoom(channelId) {
    let tmp = closure_13[channelId];
    if (tmp == null) {
      tmp = obj;
    }
    return tmp;
  }
  getRoomUsers(channelId) {
    let tmp = closure_14[channelId];
    if (tmp == null) {
      tmp = map;
    }
    return tmp;
  }
  getRoomObjects(channelId) {
    let tmp = closure_15[channelId];
    if (tmp == null) {
      tmp = map1;
    }
    return tmp;
  }
  getPendingPosition() {
    return c16;
  }
  getPendingSeat() {
    return c17;
  }
  getMediaSessionId(arg0) {
    return map2.get(arg0);
  }
  isVisible(arg0) {
    flag = closure_18[arg0];
    if (flag == null) {
      flag = true;
    }
    return flag;
  }
  getPendingNote(arg0) {
    let tmp = closure_23[arg0];
    if (tmp == null) {
      tmp = null;
    }
    return tmp;
  }
  getCreatingNotes(arg0) {
    let tmp = closure_24[arg0];
    if (tmp == null) {
      tmp = closure_25;
    }
    return tmp;
  }
  getNotes(channelId) {
    const roomObjects = this.getRoomObjects(channelId);
    let value = roomObjects.get(GuildRoomTypes.GuildRoomObjectTypes.NOTE);
    if (value == null) {
      value = closure_11;
    }
    return value;
  }
  getVideoOverlayVisibility() {
    return flag;
  }
  getRememberVideoOverlayVisibility() {
    return flag;
  }
}
const prototype = GuildRoomStore.prototype;
GuildRoomStore.displayName = "GuildRoomStore";
GuildRoomStore.persistKey = "GuildRoomStore";
let obj2 = {
  GUILD_ROOM_CONNECT: function handleConnect(room) {
    room = room.room;
    const objects = room.objects;
    const guildId = room.guildId;
    const users = room.users;
    closure_13[room.roomId] = _objectWithoutProperties(room, closure_2);
    closure_14[room.roomId] = users;
    closure_15[room.roomId] = objects;
    resolveCreatingNotes(room.roomId, objects);
    if (null != guildId) {
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
    if (null == closure_13[roomId]) {
      return false;
    } else {
      const _Map = Map;
      const self = this;
      const self2 = this;
      const id = AuthenticationStore.getId();
      map = new Map(closure_14[roomId]);
      map.delete(id);
      closure_14[roomId] = map;
    }
  },
  GUILD_ROOM_DISCONNECT: function handleDisconnect(arg0) {
    let roomId;
    let userId;
    ({ userId, roomId } = arg0);
    if (null == closure_13[roomId]) {
      return false;
    } else {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map(closure_14[roomId]);
      map.delete(userId);
      closure_14[roomId] = map;
      const tmp2 = c22 && userId === AuthenticationStore.getId();
      if (tmp2) {
        flag = true;
        closure_18[roomId] = true;
        c22 = false;
      }
      if (userId === AuthenticationStore.getId()) {
        delete closure_23[roomId];
        delete closure_24[roomId];
        const tmp5 = flag;
        if (!tmp5) {
          flag = false;
        }
      }
    }
  },
  GUILD_ROOM_UPDATE: function handleUpdate(room) {
    room = room.room;
    const objects = room.objects;
    const users = room.users;
    closure_13[room.roomId] = _objectWithoutProperties(room, closure_3);
    closure_15[room.roomId] = objects;
    resolveCreatingNotes(room.roomId, objects);
    const id = AuthenticationStore.getId();
    let value;
    if (closure_14[room.roomId] != null) {
      value = obj.get(id);
    }
    closure_14[room.roomId] = users;
    if (null != value) {
      if (closure_14[room.roomId] != null) {
        const result = obj2.set(id, value);
      }
    }
  },
  GUILD_ROOM_UPDATE_FAILURE: function handleUpdateFailure(arg0) {
    let originalRoom;
    let originalRoomUsers;
    ({ originalRoom, originalRoomUsers } = arg0);
    if (null == closure_13[originalRoom.roomId]) {
      return false;
    } else {
      const roomId = originalRoom.roomId;
      const obj2 = { background: originalRoom.background };
      const merged = Object.assign(tmp2);
      tmp[roomId] = obj2;
      const id = AuthenticationStore.getId();
      const value = originalRoomUsers.get(id);
      if (null == value) {
        const _Map = Map;
        const self = this;
        const self2 = this;
        map = new Map(closure_14[originalRoom.roomId]);
        map.delete(id);
        closure_14[originalRoom.roomId] = map;
      } else if (closure_14[originalRoom.roomId] != null) {
        const result = obj.set(id, value);
      }
    }
  },
  GUILD_ROOM_FETCH_SUCCESS: function handleFetchSuccess(room) {
    room = room.room;
    const users = room.users;
    closure_13[room.roomId] = _objectWithoutProperties(room, closure_4);
    closure_14[room.roomId] = users;
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
    closure_18[roomId] = !closure_18[roomId];
    if (roomId.clearLayout) {
      c22 = true;
    }
  },
  GUILD_ROOM_LOCAL_UPDATE: function handleLocalUpdate(arg0) {
    let background;
    let position;
    let roomId;
    let seat;
    let statusId;
    let statusText;
    ({ roomId, background, position, seat, statusId, statusText } = arg0);
    if (null == closure_13[roomId]) {
      return false;
    } else {
      const id = AuthenticationStore.getId();
      if (null != background) {
        const obj = { background };
        const merged = Object.assign(closure_13[roomId]);
        closure_13[roomId] = obj;
      }
      const obj2 = closure_14[roomId];
      const value = obj2.get(id);
      if (null != value) {
        const _Map = Map;
        const self = this;
        const self2 = this;
        map = new Map(closure_14[roomId]);
        const obj3 = { position, seat, statusId, statusText };
        set = map.set;
        const merged1 = Object.assign(value);
        if (position == null) {
          position = value.position;
        }
        if (seat == null) {
          seat = value.seat;
        }
        if (statusId == null) {
          statusId = value.statusId;
        }
        if (statusText == null) {
          statusText = value.statusText;
        }
        const result = set(id, obj3);
        closure_14[roomId] = map;
      }
    }
  },
  MEDIA_SESSION_JOINED: function handleMediaSessionJoined() {
    const channelId = RTCConnectionStore.getChannelId();
    const mediaSessionId = RTCConnectionStore.getMediaSessionId();
    const tmp3 = null != channelId && null != mediaSessionId;
    if (tmp3) {
      const result = map2.set(channelId, mediaSessionId);
    }
  },
  GUILD_ROOM_PENDING_NOTE_START: function handlePendingNoteStart(roomId) {
    closure_23[roomId.roomId] = { position: null };
  },
  GUILD_ROOM_PENDING_NOTE_PLACE: function handlePendingNotePlace(roomId) {
    roomId = roomId.roomId;
    if (null == closure_23[roomId]) {
      return false;
    } else {
      const obj = { position: tmp };
      const merged = Object.assign(tmp3);
      tmp2[roomId] = obj;
    }
  },
  GUILD_ROOM_PENDING_NOTE_DELETE: function handlePendingNoteDelete(arg0) {
    delete closure_23[arg0.roomId];
  },
  GUILD_ROOM_NOTE_CREATE_START: function handleNoteCreateStart(roomId) {
    let localId;
    let position;
    roomId = roomId.roomId;
    let items = closure_24[roomId];
    ({ localId, position } = roomId);
    if (items == null) {
      items = [];
    }
    const items1 = [];
    items1[HermesBuiltin.arraySpread(items1, items, 0)] = { localId, position };
    closure_24[roomId] = items1;
  },
  GUILD_ROOM_NOTE_CREATE_FAILURE: function handleNoteCreateFailure(arg0) {
    let closure_129_0;
    let roomId;
    ({ roomId, localId: closure_129_0 } = arg0);
    if (null == closure_24[roomId]) {
      return false;
    } else {
      const found = arr.filter((localId) => localId.localId !== closure_1_0);
      if (found.length === closure_24[roomId].length) {
        return false;
      } else if (0 === found.length) {
        delete closure_24[roomId];
      } else {
        closure_24[roomId] = found;
      }
    }
  },
  GUILD_ROOM_SET_VIDEO_OVERLAY_VISIBILITY: function handleSetVideoOverlayVisibility(value) {},
  GUILD_ROOM_SET_REMEMBER_VIDEO_OVERLAY_VISIBILITY: function handleSetRememberVideoOverlayVisibility(
    rememberVideoOverlayVisibility,
  ) {},
};
const guildRoomStore = new GuildRoomStore(DispatcherDefault, obj2);
let result = size.fileFinishedImporting("modules/guild_rooms/GuildRoomStore.tsx");

export default guildRoomStore;
export { DEFAULT_ROOM };
