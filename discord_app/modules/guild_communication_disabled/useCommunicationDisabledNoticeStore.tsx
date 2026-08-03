// === Module 1943: DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY ===

// Module 1943 (DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY)
import _slicedToArray from "_slicedToArray";
import { DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY } from "getFriendlyDurationString";
import keys from "keys";
import { Storage } from "Storage";

const require = arg1;
let closure_4 = keys.createStore((arg0, arg1) => {
  const _require = arg0;
  const dependencyMap = arg1;
  let Storage = _require(595).Storage;
  let items = Storage.get(DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY);
  if (items == null) {
    items = [];
  }
  let obj = { notificationDismissedInGuilds: null, dismissNotification: null, resetNotification: null };
  obj[0] = new Set(items);
  obj[1] = function dismissNotification(arg0) {
    const notificationDismissedInGuilds = dependencyMap().notificationDismissedInGuilds;
    notificationDismissedInGuilds.add(arg0);
    const Storage = callback(595).Storage;
    const result = Storage.set(outer1_3, notificationDismissedInGuilds);
    callback(705).batchUpdates(() => notificationDismissedInGuilds({ notificationDismissedInGuilds }));
  };
  obj[2] = function resetNotification(arg0) {
    const notificationDismissedInGuilds = dependencyMap().notificationDismissedInGuilds;
    if (notificationDismissedInGuilds.has(arg0)) {
      notificationDismissedInGuilds.delete(arg0);
      const Storage = callback(595).Storage;
      const result = Storage.set(outer1_3, notificationDismissedInGuilds);
      callback(705).batchUpdates(() => notificationDismissedInGuilds({ notificationDismissedInGuilds }));
      const obj = callback(705);
    }
  };
  return obj;
});
Storage.asyncGet(DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY, (arg0) => {
  const _require = arg0;
  _require(705).batchUpdates(() => {
    const obj = { notificationDismissedInGuilds: null };
    obj[0] = new Set(closure_0);
    return outer1_4.setState(obj);
  });
});
let result = require("Storage").fileFinishedImporting("modules/guild_communication_disabled/useCommunicationDisabledNoticeStore.tsx");

export const useCommunicationDisabledNoticeStore = function useCommunicationDisabledNoticeStore(arg0) {
  const tmp = callback(require(700) /* identity */.useStoreWithEqualityFn(closure_4, (arg0) => {
    const items = [, ];
    ({ notificationDismissedInGuilds: arr[0], dismissNotification: arr[1] } = arg0);
    return items;
  }, require(3868) /* isIterable */.shallow), 2);
  const first = tmp[0];
  let items = [!first.has(arg0), tmp[1]];
  return items;
};
export const clearCommunicationDisabledNotice = function clearCommunicationDisabledNotice(arg0) {
  state = state.getState();
  return state.resetNotification(arg0);
};