// === Module 12882: _handlePresenceUpdate ===

// Module 12882 (_handlePresenceUpdate)
import recomputeAffinities from "recomputeAffinities";
import sortActivity from "sortActivity";
import mergeGuildAvatar from "mergeGuildAvatar";
import { ActivityTypes } from "ME";
import { Store } from "initialize";

function _handlePresenceUpdate(user) {
  user = user.user;
  const activities = user.activities;
  let c1;
  if (null == user) {
    return false;
  } else {
    const found = activities.filter((type) => type.type !== constants.CUSTOM_STATUS);
    if (0 === found.length) {
      let flag2 = false;
      if (null != obj[user.id]) {
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
        obj = {};
        let merged1 = Object.assign(obj);
        delete tmp[tmp2];
        flag2 = true;
      }
      return flag2;
    } else {
      c1 = false;
      const item = found.forEach((timestamps) => {
        const tmp7 = user(table[4])(timestamps);
        if (null == tmp7) {
          let flag2 = false;
          if (null != obj[tmp6.id]) {
            const gameId2 = tmp34.gameId;
            if (null != obj[gameId2]) {
              obj = {};
              const merged = Object.assign(obj);
              delete tmp[tmp2];
              const _Object2 = Object;
              if (0 === Object.values(obj[gameId2]).length) {
                delete tmp[tmp3];
              }
            }
            obj = {};
            const merged1 = Object.assign(obj);
            delete tmp[tmp2];
            flag2 = true;
          }
          let flag = flag2;
        } else {
          if (tmp8) {
            if (null != obj[tmp6.id]) {
              const gameId = tmp10.gameId;
              if (null != obj[gameId]) {
                obj = {};
                const merged2 = Object.assign(obj);
                delete tmp2[tmp4];
                const _Object = Object;
                if (0 === Object.values(obj[gameId]).length) {
                  delete tmp2[tmp5];
                }
              }
              const obj1 = {};
              const merged3 = Object.assign(obj);
              obj = obj1;
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
          const obj2 = { userId: null, activity: null, startedPlaying: null };
          obj2[0] = tmp6.id;
          obj2[1] = timestamps;
          obj2[2] = start;
          const obj3 = {};
          const merged4 = Object.assign(obj);
          const obj4 = {};
          const merged5 = Object.assign(obj[tmp7]);
          obj4[obj2.userId] = obj2;
          obj3[tmp7] = obj4;
          obj = obj3;
          const obj5 = {};
          const merged6 = Object.assign(obj);
          const obj6 = { gameId: null, startedPlaying: null };
          obj6[0] = tmp7;
          obj6[1] = obj2.startedPlaying;
          obj5[obj2.userId] = obj6;
          obj = obj5;
          flag = true;
          tmp8 = null != obj[tmp6.id] && obj[tmp6.id].gameId !== tmp7;
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
    let closure_7 = {};
    let closure_8 = {};
    let c0 = false;
    userIds = userIds.getUserIds();
    const item = userIds.forEach((arg0) => {
      const user = outer1_4.getUser(arg0);
      if (null != user) {
        const obj = { user: null, activities: null };
        obj[0] = user;
        obj[1] = outer1_3.getActivities(arg0);
        c0 = outer1_9(obj) || c0;
        const tmp4 = outer1_9(obj) || c0;
      }
    });
    flag = c0;
  }
  let closure_6 = !recomputeAffinities.shouldFetch();
  return flag;
}
let c6 = false;
let closure_7 = {};
let closure_8 = {};
class NowPlayingStore extends Store {
}
const prototype = NowPlayingStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(sortActivity, recomputeAffinities, mergeGuildAvatar);
  const items = [recomputeAffinities];
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
const nowPlayingStore = new NowPlayingStore(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_7 = {};
    let closure_8 = {};
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function handleConnectionOpenSupplemental(arg0) {
    let guilds;
    let presences;
    ({ guilds, presences } = arg0);
    let c0 = false;
    let item = guilds.forEach((presences) => {
      presences = presences.presences;
      let c0 = false;
      const item = presences.forEach((arg0) => {
        c0 = false !== outer1_9(arg0) || c0;
      });
      if (c0) {
        c0 = true;
      }
    });
    c0 = false;
    const item1 = presences.forEach((arg0) => {
      c0 = false !== outer1_9(arg0) || c0;
    });
    if (c0) {
      c0 = true;
    }
    return c0;
  },
  LOGOUT: function handleLogout() {
    let closure_7 = {};
    let closure_8 = {};
  },
  PRESENCE_UPDATES: function handlePresenceUpdates(updates) {
    updates = updates.updates;
    const mapped = updates.map((arg0) => callback(arg0));
    return mapped.some((arg0) => arg0);
  },
  PRESENCES_REPLACE: function handlePresencesReplace(presences) {
    presences = presences.presences;
    let c0 = false;
    const item = presences.forEach((arg0) => {
      c0 = false !== outer1_9(arg0) || c0;
    });
    return c0;
  }
});
const result = require("mergeGuildAvatar").fileFinishedImporting("stores/NowPlayingStore.tsx");

export default nowPlayingStore;