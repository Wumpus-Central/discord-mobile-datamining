// discord_app/modules/notification_center/NotificationCenterStore.tsx
import _slicedToArray from "_slicedToArray";
import findOrCreateMessageRecord from "findOrCreateMessageRecord";
import { PersistedStore } from "initialize";

const require = arg1;
function handleLoadFinished() {
  closure_6.hasNewMentions = false;
  closure_6.isDataStale = false;
  closure_6.isRefreshing = false;
}
let closure_5 = 90 * require("set").Millis.DAY;
let closure_6 = { tab: null, localItemAcks: {}, hasNewMentions: false, isDataStale: false, isRefreshing: false };
class NotificationCenterStore extends PersistedStore {
}
const prototype = NotificationCenterStore.prototype;
prototype["initialize"] = function initialize(localItemAcks) {
  this.waitFor(findOrCreateMessageRecord);
  if (null != localItemAcks) {
    let closure_6 = localItemAcks;
    localItemAcks = localItemAcks.localItemAcks;
    if (localItemAcks == null) {
      localItemAcks = {};
    }
    localItemAcks.localItemAcks = (function purge(localItemAcks) {
      let tmp6;
      let tmp7;
      const obj = {};
      const entries = Object.entries(localItemAcks);
      while (tmp2 !== undefined) {
        let tmp4 = callback;
        let tmp5 = callback(tmp3, 2);
        [tmp6, tmp7] = tmp5;
        let _Date = Date;
        let tmp8 = tmp7;
        let tmp9 = closure_5;
        if (Date.now() - tmp7 < closure_5) {
          let tmp10 = tmp6;
          let tmp11 = tmp7;
          obj[tmp6] = tmp8;
        }
        continue;
      }
      return obj;
    })(localItemAcks);
    closure_6.isDataStale = true;
  }
};
prototype["getState"] = function getState() {
  return closure_6;
};
prototype["getTab"] = function getTab() {
  let ForYou = closure_6.tab;
  if (ForYou == null) {
    ForYou = require(7021) /* NotificationCenterScenes */.NotificationCenterTabs.ForYou;
  }
  return ForYou;
};
prototype["isLocalItemAcked"] = function isLocalItemAcked(addResult) {
  let tmp = null != addResult.local_id;
  if (tmp) {
    let tmp3 = null != closure_6.localItemAcks[addResult.local_id];
    if (!tmp3) {
      tmp3 = importDefault(11).age(addResult.id) > closure_5;
      const obj = importDefault(11);
    }
    tmp = tmp3;
  }
  return tmp;
};
prototype["hasNewMentions"] = function hasNewMentions() {
  return closure_6.hasNewMentions;
};
prototype["isDataStale"] = function isDataStale() {
  return closure_6.isDataStale;
};
prototype["isRefreshing"] = function isRefreshing() {
  return closure_6.isRefreshing;
};
prototype["shouldReload"] = function shouldReload() {
  let isRefreshing = closure_6.hasNewMentions;
  if (!isRefreshing) {
    isRefreshing = closure_6.isDataStale;
  }
  if (!isRefreshing) {
    isRefreshing = closure_6.isRefreshing;
  }
  return isRefreshing;
};
NotificationCenterStore.displayName = "NotificationCenterStore";
NotificationCenterStore.persistKey = "NotificationCenterStore";
const notificationCenterStore = new NotificationCenterStore(require("dispatcher"), {
  MESSAGE_CREATE: function handleMessageCreate(message) {
    if (findOrCreateMessageRecord.hasMention(message.message.id)) {
      closure_6.hasNewMentions = true;
    }
  },
  NOTIFICATION_CENTER_SET_TAB: function handleSetTab(tab) {
    const obj = {};
    const merged = Object.assign(obj);
    obj.tab = tab.tab;
  },
  NOTIFICATION_CENTER_ITEMS_LOCAL_ACK: function handleAck(localIds) {
    localIds = localIds.localIds;
    const item = localIds.forEach((arg0) => {
      let obj = {};
      const merged = Object.assign(obj);
      obj = {};
      const merged1 = Object.assign(obj.localItemAcks);
      obj[arg0] = Date.now();
      obj.localItemAcks = obj;
    });
  },
  NOTIFICATION_CENTER_REFRESH: function handleRefreshData() {
    closure_6.isRefreshing = true;
  },
  LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: handleLoadFinished,
  LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: handleLoadFinished
});
const result = require("set").fileFinishedImporting("modules/notification_center/NotificationCenterStore.tsx");

export default notificationCenterStore;