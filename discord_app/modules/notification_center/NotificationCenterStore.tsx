// discord_app/modules/notification_center/NotificationCenterStore.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import NotificationCenterItemsTypes from "NotificationCenterItemsTypes.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import RecentMentionsStore from "../inbox/RecentMentionsStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

function handleLoadFinished() {
  obj.hasNewMentions = false;
  obj.isDataStale = false;
  obj.isRefreshing = false;
}
let closure_5 = 90 * DurationsDefault.Millis.DAY;
let obj = { tab: null, localItemAcks: {}, hasNewMentions: false, isDataStale: false, isRefreshing: false };
const PersistedStore = get_initializedDefault.PersistedStore;
class NotificationCenterStore extends PersistedStore {
  initialize(localItemAcks) {
    function purge(localItemAcks) {
      let tmp6;
      let tmp7;
      obj = {};
      const entries = Object.entries(localItemAcks);
      const tmp2 = entries[Symbol.iterator]();
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
    }
    this.waitFor(RecentMentionsStore);
    if (null != localItemAcks) {
      obj = localItemAcks;
      localItemAcks = localItemAcks.localItemAcks;
      if (localItemAcks == null) {
        localItemAcks = {};
      }
      localItemAcks.localItemAcks = purge(localItemAcks);
      let tmp2 = obj;
      obj.isDataStale = true;
    }
  }
  getState() {
    return obj;
  }
  getTab() {
    let ForYou = obj.tab;
    if (ForYou == null) {
      ForYou = NotificationCenterItemsTypes.NotificationCenterTabs.ForYou;
    }
    return ForYou;
  }
  isLocalItemAcked(local_id) {
    let tmp = null != local_id.local_id;
    if (tmp) {
      let tmp3 = null != obj.localItemAcks[local_id.local_id];
      if (!tmp3) {
        obj = SnowflakeUtilsDefault;
        tmp3 = obj.age(local_id.id) > closure_5;
      }
      tmp = tmp3;
    }
    return tmp;
  }
  hasNewMentions() {
    return obj.hasNewMentions;
  }
  isDataStale() {
    return obj.isDataStale;
  }
  isRefreshing() {
    return obj.isRefreshing;
  }
  shouldReload() {
    const isRefreshing = obj.hasNewMentions || obj.isDataStale || obj.isRefreshing;
    return isRefreshing;
  }
}
const prototype = NotificationCenterStore.prototype;
NotificationCenterStore.displayName = "NotificationCenterStore";
NotificationCenterStore.persistKey = "NotificationCenterStore";
obj = {
  MESSAGE_CREATE: function handleMessageCreate(message) {
    if (RecentMentionsStore.hasMention(message.message.id)) {
      obj.hasNewMentions = true;
    }
  },
  NOTIFICATION_CENTER_SET_TAB: function handleSetTab(tab) {
    obj = { tab: tab.tab };
    const merged = Object.assign(obj);
  },
  NOTIFICATION_CENTER_ITEMS_LOCAL_ACK: function handleAck(localIds) {
    localIds = localIds.localIds;
    const item = localIds.forEach((item) => {
      let obj2;
      obj = { localItemAcks: obj2 };
      const merged = Object.assign(obj);
      obj2 = {};
      const merged1 = Object.assign(obj.localItemAcks);
      obj2[item] = Date.now();
    });
  },
  NOTIFICATION_CENTER_REFRESH: function handleRefreshData() {
    obj.isRefreshing = true;
  },
  LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: handleLoadFinished,
  LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: handleLoadFinished,
};
const notificationCenterStore = new NotificationCenterStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/notification_center/NotificationCenterStore.tsx");

export default notificationCenterStore;
