// === Module 14016: NowPlayingStore ===

// Module 14016 (NowPlayingStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import getApplicationIdForActivityDefault from "getApplicationIdForActivity" /* 14017 */;
import UserAffinitiesV2Store from "UserAffinitiesV2Store" /* 7895 */;
import PresenceStore from "PresenceStore" /* 4796 */;
import UserStore from "UserStore" /* 1372 */;

function _handlePresenceUpdate(user) {
  user = user.user;
  const activities = user.activities;
  c1 = undefined;
  if (null == user) {
    return false;
  } else {
    const found = activities.filter((type) => type.type !== constants.CUSTOM_STATUS);
    if (0 === found.length) {
      let flag2 = false;
      if (null != obj2[user.id]) {
        let gameId = tmp7.gameId;
        if (null != obj[gameId]) {
          obj = {};
          let merged = Object.assign(obj);
          delete tmp[tmp2];
          let _Object = Object;
          if (0 === Object.values(obj[gameId]).length) {
            delete tmp[tmp3];
          }
        }
        obj2 = {};
        let merged1 = Object.assign(obj2);
        delete tmp[tmp2];
        flag2 = true;
      }
      return flag2;
    } else {
      c1 = false;
      const item = found.forEach((timestamps) => {
        const tmp7 = getApplicationIdForActivityDefault(timestamps);
        if (null == tmp7) {
          let flag2 = false;
          if (null != obj8[user.id]) {
            const gameId2 = tmp34.gameId;
            if (null != obj6[gameId2]) {
              obj2 = {};
              const merged = Object.assign(obj6);
              obj6 = obj2;
              delete tmp[tmp2];
              const _Object2 = Object;
              if (0 === Object.values(obj6[gameId2]).length) {
                delete tmp[tmp3];
              }
            }
            const obj3 = {};
            const merged1 = Object.assign(obj8);
            obj8 = obj3;
            delete tmp[tmp2];
            flag2 = true;
          }
          let flag = flag2;
        } else {
          if (tmp8) {
            if (null != obj8[user.id]) {
              const gameId = tmp10.gameId;
              if (null != obj6[gameId]) {
                obj = {};
                const merged2 = Object.assign(obj6);
                obj6 = obj;
                delete tmp2[tmp4];
                const _Object = Object;
                if (0 === Object.values(obj6[gameId]).length) {
                  delete tmp2[tmp5];
                }
              }
              const obj4 = {};
              const merged3 = Object.assign(obj8);
              obj8 = obj4;
              delete tmp2[tmp4];
            }
          }
          timestamps = timestamps.timestamps;
          let start;
          if (timestamps != null) {
            start = timestamps.start;
          }
          if (start == null) {
            const _Date = Date;
            start = Date.now();
          }
          const obj5 = { userId: user.id, activity: timestamps, startedPlaying: start };
          obj6 = {};
          const merged4 = Object.assign(obj6);
          const obj7 = {};
          const merged5 = Object.assign(obj6[tmp7]);
          obj7[obj5.userId] = obj5;
          obj6[tmp7] = obj7;
          obj8 = {};
          const merged6 = Object.assign(obj8);
          const obj9 = { gameId: tmp7, startedPlaying: obj5.startedPlaying };
          obj8[obj5.userId] = obj9;
          flag = true;
          tmp8 = null != obj8[user.id] && obj8[user.id].gameId !== tmp7;
        }
        if (flag) {
          c1 = true;
        }
      });
      return c1;
    }
  }
}
function handleUserAffinitiesV2StoreUpdate() {
  let flag = false;
  if (!tmp) {
    closure_7 = {};
    closure_8 = {};
    closure_0 = false;
    const userIds = PresenceStore.getUserIds();
    const item = userIds.forEach((item) => {
      const user = UserStore.getUser(item);
      if (null != user) {
        const obj = { user, activities: PresenceStore.getActivities(item) };
        closure_0 = _handlePresenceUpdate(obj) || closure_0;
        const tmp4 = _handlePresenceUpdate(obj) || closure_0;
      }
    });
    flag = closure_0;
  }
  closure_6 = !UserAffinitiesV2Store.shouldFetch();
  return flag;
}
const ActivityTypes = fn(1074).ActivityTypes;
let c6 = false;
const Store = initializeDefault.Store;
class NowPlayingStore extends Store {
}
const prototype = NowPlayingStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(PresenceStore, UserAffinitiesV2Store, UserStore);
  const items = [UserAffinitiesV2Store];
  this.syncWith(items, handleUserAffinitiesV2StoreUpdate);
};
Object.defineProperty(prototype, "games", {
  get: function games() {
    return obj6;
  },
  set: undefined
});
Object.defineProperty(prototype, "usersPlaying", {
  get: function usersPlaying() {
    return obj8;
  },
  set: undefined
});
Object.defineProperty(prototype, "gameIds", {
  get: function gameIds() {
    return Object.keys(obj6);
  },
  set: undefined
});
prototype["getNowPlaying"] = function getNowPlaying(arg0) {
  return obj6[arg0];
};
prototype["getUserGame"] = function getUserGame(arg0) {
  return obj8[arg0];
};
NowPlayingStore.displayName = "NowPlayingStore";
const nowPlayingStore = new NowPlayingStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {

  },
  CONNECTION_OPEN_SUPPLEMENTAL: function handleConnectionOpenSupplemental(arg0) {
    ({ guilds, presences } = arg0);
    c0 = false;
    let item = guilds.forEach((presences) => {
      presences = presences.presences;
      closure_0 = false;
      const item = presences.forEach((item) => {
        closure_0 = false !== _handlePresenceUpdate(item) || closure_0;
      });
      if (closure_0) {
        c0 = true;
      }
    });
    closure_129_0 = false;
    const item1 = presences.forEach((item) => {
      closure_0 = false !== _handlePresenceUpdate(item) || closure_0;
    });
    if (closure_129_0) {
      c0 = true;
    }
    return c0;
  },
  LOGOUT: function handleLogout() {

  },
  PRESENCE_UPDATES: function handlePresenceUpdates(updates) {
    updates = updates.updates;
    const mapped = updates.map((item) => _handlePresenceUpdate(item));
    return mapped.some((item) => item);
  },
  PRESENCES_REPLACE: function handlePresencesReplace(presences) {
    presences = presences.presences;
    c0 = false;
    const item = presences.forEach((item) => {
      closure_0 = false !== _handlePresenceUpdate(item) || closure_0;
    });
    return c0;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/NowPlayingStore.tsx");

export default nowPlayingStore;