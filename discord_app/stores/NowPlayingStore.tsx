// discord_app/stores/NowPlayingStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import recomputeAffinities from "../modules/user_affinities/UserAffinitiesV2Store.tsx";
import sortActivity from "PresenceStore.tsx";
import mergeGuildAvatar from "UserStore.tsx";
import { ActivityTypes } from "../Constants.tsx";

function _handlePresenceUpdate(user) {
  user = user.user;
  const activities = user.activities;
  c1 = undefined;
  if (null == user) {
    return false;
  } else {
    const found = activities.filter((item, index) => item.type !== constants.CUSTOM_STATUS);
    if (0 === found.length) {
      let flag2 = false;
      if (null != obj5[user.id]) {
        let gameId = tmp7.gameId;
        if (null != obj3[gameId]) {
          let obj = {};
          let merged = Object.assign(obj3);
          delete tmp[tmp2];
          let _Object = Object;
          if (0 === Object.values(obj[gameId]).length) {
            delete tmp[tmp3];
          }
        }
        obj = {};
        let merged1 = Object.assign(obj5);
        delete tmp[tmp2];
        flag2 = true;
      }
      return flag2;
    } else {
      c1 = false;
      const item = found.forEach((item, index) => {
        const tmp7 = user(table[4])(item);
        if (null == tmp7) {
          let flag2 = false;
          if (null != obj5[user.id]) {
            const gameId2 = tmp34.gameId;
            if (null != obj3[gameId2]) {
              let obj = {};
              const merged = Object.assign(obj3);
              obj3 = obj;
              delete tmp[tmp2];
              const _Object2 = Object;
              if (0 === Object.values(obj3[gameId2]).length) {
                delete tmp[tmp3];
              }
            }
            obj = {};
            const merged1 = Object.assign(obj5);
            obj5 = obj;
            delete tmp[tmp2];
            flag2 = true;
          }
          let flag = flag2;
        } else {
          if (tmp8) {
            if (null != obj5[user.id]) {
              const gameId = tmp10.gameId;
              if (null != obj3[gameId]) {
                obj = {};
                const merged2 = Object.assign(obj3);
                obj3 = obj;
                delete tmp2[tmp4];
                const _Object = Object;
                if (0 === Object.values(obj3[gameId]).length) {
                  delete tmp2[tmp5];
                }
              }
              obj1 = {};
              const merged3 = Object.assign(obj5);
              obj5 = obj1;
              delete tmp2[tmp4];
            }
          }
          const timestamps = item.timestamps;
          let start;
          if (timestamps != null) {
            start = timestamps.start;
          }
          if (start == null) {
            const _Date = Date;
            start = Date.now();
          }
          const obj2 = { userId: null, activity: null, startedPlaying: null };
          obj2[0] = user.id;
          obj2[1] = item;
          obj2[2] = start;
          obj3 = {};
          const merged4 = Object.assign(obj3);
          const obj4 = {};
          const merged5 = Object.assign(obj3[tmp7]);
          obj4[obj2.userId] = obj2;
          obj3[tmp7] = obj4;
          obj5 = {};
          const merged6 = Object.assign(obj5);
          const obj6 = { gameId: null, startedPlaying: null };
          obj6[0] = tmp7;
          obj6[1] = obj2.startedPlaying;
          obj5[obj2.userId] = obj6;
          flag = true;
          tmp8 = null != obj5[user.id] && obj5[user.id].gameId !== tmp7;
        }
        if (flag) {
          table = true;
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
    c0 = false;
    userIds = userIds.getUserIds();
    const item = userIds.forEach((item, index) => {
      const user = closure_1_4.getUser(item);
      if (null != user) {
        const obj = { user: null, activities: null };
        obj[0] = user;
        obj[1] = closure_1_3.getActivities(item);
        closure_0 = _handlePresenceUpdate(obj) || closure_0;
        const tmp4 = _handlePresenceUpdate(obj) || closure_0;
      }
    });
    flag = c0;
  }
  closure_6 = !closure_2.shouldFetch();
  return flag;
}
let c6 = false;
let closure_7 = {};
let closure_8 = {};
const Store = initializeDefault.Store;
class NowPlayingStore extends Store {
}
const prototype = NowPlayingStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_3, closure_2, closure_4);
  const items = [closure_2];
  this.syncWith(items, handleUserAffinitiesV2StoreUpdate);
};
Object.defineProperty(prototype, "games", {
  get: function games() {
    return closure_7;
  },
  set: undefined
});
Object.defineProperty(prototype, "usersPlaying", {
  get: function usersPlaying() {
    return closure_8;
  },
  set: undefined
});
Object.defineProperty(prototype, "gameIds", {
  get: function gameIds() {
    return Object.keys(closure_7);
  },
  set: undefined
});
prototype["getNowPlaying"] = function getNowPlaying(arg0) {
  return table[arg0];
};
prototype["getUserGame"] = function getUserGame(arg0) {
  return table2[arg0];
};
NowPlayingStore.displayName = "NowPlayingStore";
const nowPlayingStore = new NowPlayingStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_7 = {};
    closure_8 = {};
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function handleConnectionOpenSupplemental(arg0) {
    ({ guilds, presences } = arg0);
    let item = guilds.forEach((item, index) => {
      const presences = item.presences;
      c0 = false;
      item = presences.forEach((item, index) => {
        closure_0 = false !== closure_1_9(item) || closure_0;
      });
      if (c0) {
        c0 = true;
      }
    });
    c0 = false;
    const item1 = presences.forEach((item, index) => {
      closure_0 = false !== closure_1_9(item) || closure_0;
    });
    if (c0) {
      c0 = true;
    }
    return c0;
  },
  LOGOUT: function handleLogout() {
    closure_7 = {};
    closure_8 = {};
  },
  PRESENCE_UPDATES: function handlePresenceUpdates(updates) {
    updates = updates.updates;
    const mapped = updates.map((item, index) => callback(item));
    return mapped.some((item, index) => item);
  },
  PRESENCES_REPLACE: function handlePresencesReplace(presences) {
    presences = presences.presences;
    c0 = false;
    const item = presences.forEach((item, index) => {
      closure_0 = false !== closure_1_9(item) || closure_0;
    });
    return c0;
  }
});
const result = require("obj132").fileFinishedImporting("stores/NowPlayingStore.tsx");

export default nowPlayingStore;