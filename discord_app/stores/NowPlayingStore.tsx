// discord_app/stores/NowPlayingStore.tsx
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import Constants from "../Constants.tsx";
import getApplicationIdForActivityDefault from "../modules/now_playing/getApplicationIdForActivity.tsx";
import UserAffinitiesV2Store from "../modules/user_affinities/UserAffinitiesV2Store.tsx";
import PresenceStore from "PresenceStore.tsx";
import UserStore from "UserStore.tsx";
import size from "../../_runtime/metro/00002__.js";

let closure_6, timestamps;

function _handlePresenceUpdate(user) {
  let obj;
  let obj3;
  user = user.user;
  const activities = user.activities;
  let c1;
  if (null == user) {
    return false;
  } else {
    const found = activities.filter((type) => type.type !== constants.CUSTOM_STATUS);
    if (0 === found.length) {
      let id = user.id;
      let tmp3 = obj3;
      let flag2 = false;
      if (null != obj3[id]) {
        let gameId = tmp4.gameId;
        const tmp5 = obj;
        if (null != obj[gameId]) {
          obj = {};
          let merged = Object.assign(obj);
          delete obj[gameId][id];
          let _Object = Object;
          if (0 === Object.values(obj[gameId]).length) {
            delete obj[gameId];
          }
        }
        obj3 = {};
        let merged1 = Object.assign(obj3);
        delete obj2[id];
        flag2 = true;
      }
      return flag2;
    } else {
      let flag = false;
      c1 = false;
      const item = found.forEach((timestamps) => {
        let flag;
        const tmp2 = getApplicationIdForActivityDefault(timestamps);
        if (null == tmp2) {
          const id2 = user.id;
          let flag2 = false;
          if (null != obj18[id2]) {
            const gameId2 = tmp27.gameId;
            if (null != obj7[gameId2]) {
              obj3 = {};
              const merged = Object.assign(obj7);
              obj7 = obj3;
              delete obj8[gameId2][id2];
              const _Object2 = Object;
              if (0 === Object.values(obj7[gameId2]).length) {
                delete obj7[gameId2];
              }
            }
            const obj4 = {};
            const merged1 = Object.assign(obj18);
            obj18 = obj4;
            delete obj9[id2];
            flag2 = true;
          }
          flag = flag2;
        } else {
          const tmp3 = null != obj18[user.id] && obj18[user.id].gameId !== tmp2;
          if (tmp3) {
            const id = user.id;
            if (null != obj18[id]) {
              const gameId = tmp5.gameId;
              if (null != obj7[gameId]) {
                obj = {};
                const merged2 = Object.assign(obj7);
                obj7 = obj;
                delete obj[gameId][id];
                const _Object = Object;
                if (0 === Object.values(obj7[gameId]).length) {
                  delete obj7[gameId];
                }
              }
              const obj5 = {};
              const merged3 = Object.assign(obj18);
              obj18 = obj5;
              delete obj2[id];
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
          const obj6 = { userId: user.id, activity: timestamps, startedPlaying: start };
          obj7 = {};
          const merged4 = Object.assign(obj7);
          const obj17 = {};
          const merged5 = Object.assign(obj7[tmp2]);
          obj17[obj6.userId] = obj6;
          obj7[tmp2] = obj17;
          obj18 = {};
          const merged6 = Object.assign(obj18);
          const obj19 = { gameId: tmp2, startedPlaying: obj6.startedPlaying };
          obj18[obj6.userId] = obj19;
          flag = true;
        }
        if (flag) {
          c1 = true;
        }
      });
      let tmp2 = c1;
      return c1;
    }
  }
}
function handleUserAffinitiesV2StoreUpdate() {
  let flag = false;
  const tmp = UserAffinitiesV2Store.shouldFetch() || closure_6;
  if (!tmp) {
    let closure_7 = {};
    let closure_8 = {};
    let closure_0 = false;
    const userIds = PresenceStore.getUserIds();
    const item = userIds.forEach((item) => {
      const user = UserStore.getUser(item);
      if (null != user) {
        const obj = { user, activities: PresenceStore.getActivities(item) };
        const tmp4 = _handlePresenceUpdate(obj) || closure_0;
        closure_0 = tmp4;
      }
    });
    flag = closure_0;
  }
  closure_6 = !UserAffinitiesV2Store.shouldFetch();
  return flag;
}
const ActivityTypes = Constants.ActivityTypes;
let c6 = false;
let obj7 = {};
let obj18 = {};
const Store = get_initializedDefault.Store;
class NowPlayingStore extends Store {
  initialize() {
    this.waitFor(PresenceStore, UserAffinitiesV2Store, UserStore);
    const items = [UserAffinitiesV2Store];
    this.syncWith(items, handleUserAffinitiesV2StoreUpdate);
  }
  getNowPlaying(arg0) {
    return obj7[arg0];
  }
  getUserGame(arg0) {
    return obj18[arg0];
  }
}
const prototype = NowPlayingStore.prototype;
Object.defineProperty(prototype, "games", {
  get: function games() {
    return obj7;
  },
  set: undefined,
});
Object.defineProperty(prototype, "usersPlaying", {
  get: function usersPlaying() {
    return obj18;
  },
  set: undefined,
});
Object.defineProperty(prototype, "gameIds", {
  get: function gameIds() {
    return Object.keys(obj7);
  },
  set: undefined,
});
NowPlayingStore.displayName = "NowPlayingStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {},
  CONNECTION_OPEN_SUPPLEMENTAL: function handleConnectionOpenSupplemental(arg0) {
    let guilds;
    let presences;
    ({ guilds, presences } = arg0);
    let item = guilds.forEach((presences) => {
      presences = presences.presences;
      let closure_0 = false;
      const item = presences.forEach((item) => {
        const tmp = false !== closure_2_9(item) || closure_0;
        closure_0 = tmp;
      });
      const tmp2 = closure_0;
      if (tmp2) {
        c0 = true;
      }
    });
    let c0 = false;
    const item1 = presences.forEach((item) => {
      const tmp = false !== closure_2_9(item) || closure_0;
      closure_0 = tmp;
    });
    const tmp3 = c0;
    if (tmp3) {
      c0 = true;
    }
    return c0;
  },
  LOGOUT: function handleLogout() {},
  PRESENCE_UPDATES: function handlePresenceUpdates(updates) {
    updates = updates.updates;
    const mapped = updates.map((item) => _handlePresenceUpdate(item));
    return mapped.some((item) => item);
  },
  PRESENCES_REPLACE: function handlePresencesReplace(presences) {
    presences = presences.presences;
    let c0 = false;
    const item = presences.forEach((item) => {
      const tmp = false !== closure_2_9(item) || closure_0;
      closure_0 = tmp;
    });
    return c0;
  },
};
const nowPlayingStore = new NowPlayingStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/NowPlayingStore.tsx");

export default nowPlayingStore;
