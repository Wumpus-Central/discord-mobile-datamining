// discord_app/modules/notification_center/NotificationCenterStore.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import NotificationCenterItemsTypes from "NotificationCenterItemsTypes.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import RecentMentionsStore from "../inbox/RecentMentionsStore.tsx";

require = fn;
function handleLoadFinished() {
  obj.hasNewMentions = false;
  obj.isDataStale = false;
  obj.isRefreshing = false;
}
let closure_5 = 90 * DurationsDefault.Millis.DAY;
let obj = { tab: null, localItemAcks: {}, hasNewMentions: false, isDataStale: false, isRefreshing: false };
const PersistedStore = initializeDefault.PersistedStore;
class NotificationCenterStore extends PersistedStore {}
const prototype = NotificationCenterStore.prototype;
prototype["initialize"] = function initialize(localItemAcks) {
  this.waitFor(RecentMentionsStore);
  if (null != localItemAcks) {
    localItemAcks = localItemAcks.localItemAcks;
    if (localItemAcks == null) {
      localItemAcks = {};
    }
    localItemAcks.localItemAcks = (function purge(localItemAcks) {
      obj = {};
      const entries = Object.entries(localItemAcks);
      while (tmp2 !== undefined) {
        let tmp5 = _slicedToArray(tmp3, 2);
        [tmp6, tmp7] = tmp5;
        let _Date = Date;
        if (Date.now() - tmp7 < closure_1_5) {
          obj[tmp6] = tmp7;
        }
        continue;
      }
      return obj;
    })(localItemAcks);
    localItemAcks.isDataStale = true;
  }
};
prototype["getState"] = function getState() {
  return obj;
};
prototype["getTab"] = function getTab() {
  let ForYou = obj.tab;
  if (ForYou == null) {
    ForYou = NotificationCenterItemsTypes.NotificationCenterTabs.ForYou;
  }
  return ForYou;
};
prototype["isLocalItemAcked"] = function isLocalItemAcked(addResult) {
  let tmp = null != addResult.local_id;
  if (tmp) {
    let tmp3 = null != obj.localItemAcks[addResult.local_id];
    if (!tmp3) {
      obj = SnowflakeUtilsDefault;
      tmp3 = obj.age(addResult.id) > closure_5;
    }
    tmp = tmp3;
  }
  return tmp;
};
prototype["hasNewMentions"] = function hasNewMentions() {
  return obj.hasNewMentions;
};
prototype["isDataStale"] = function isDataStale() {
  return obj.isDataStale;
};
prototype["isRefreshing"] = function isRefreshing() {
  return obj.isRefreshing;
};
prototype["shouldReload"] = function shouldReload() {
  let isRefreshing = obj.hasNewMentions;
  if (!isRefreshing) {
    isRefreshing = obj.isDataStale;
  }
  if (!isRefreshing) {
    isRefreshing = obj.isRefreshing;
  }
  return isRefreshing;
};
NotificationCenterStore.displayName = "NotificationCenterStore";
NotificationCenterStore.persistKey = "NotificationCenterStore";
obj = {
  MESSAGE_CREATE: function handleMessageCreate(message) {
    if (RecentMentionsStore.hasMention(message.message.id)) {
      obj.hasNewMentions = true;
    }
  },
  NOTIFICATION_CENTER_SET_TAB: function handleSetTab(tab) {
    obj = {};
    const merged = Object.assign(obj);
    obj.tab = tab.tab;
  },
  NOTIFICATION_CENTER_ITEMS_LOCAL_ACK: function handleAck(localIds) {
    localIds = localIds.localIds;
    const item = localIds.forEach((item) => {
      localItemAcks = {};
      const merged = Object.assign(localItemAcks);
      localItemAcks = {};
      const merged1 = Object.assign(localItemAcks.localItemAcks);
      localItemAcks[item] = Date.now();
      localItemAcks.localItemAcks = localItemAcks;
    });
  },
  NOTIFICATION_CENTER_REFRESH: function handleRefreshData() {
    obj.isRefreshing = true;
  },
  LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: handleLoadFinished,
  LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: handleLoadFinished,
};
const notificationCenterStore = new NotificationCenterStore(DispatcherDefault, obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/NotificationCenterStore.tsx");

export default notificationCenterStore;
