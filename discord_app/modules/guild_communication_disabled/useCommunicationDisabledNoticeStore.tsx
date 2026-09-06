// === Module 2022: DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY ===

// Module 2022 (DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY)
import identity from "identity" /* 1244 */;
import isIterable from "isIterable" /* 4184 */;
import closure_2 from "_slicedToArray" /* 32 */;
import { DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY } from "getFriendlyDurationString" /* 2023 */;
import keys from "keys" /* 561 */;
import { Storage } from "Storage" /* 510 */;

require = arg1;
let closure_4 = keys.createStore((arg0, arg1) => {
  const _require = arg0;
  dependencyMap = arg1;
  let Storage = _require(510).Storage;
  let items = Storage.get(DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY);
  if (items == null) {
    items = [];
  }
  let obj = {
    notificationDismissedInGuilds: new Set(items),
    dismissNotification(arg0) {
      const notificationDismissedInGuilds = dependencyMap().notificationDismissedInGuilds;
      notificationDismissedInGuilds.add(arg0);
      const Storage = callback(510).Storage;
      const result = Storage.set(closure_1_3, notificationDismissedInGuilds);
      callback(1249).batchUpdates(() => notificationDismissedInGuilds({ notificationDismissedInGuilds }));
    },
    resetNotification(arg0) {
      const notificationDismissedInGuilds = dependencyMap().notificationDismissedInGuilds;
      if (notificationDismissedInGuilds.has(arg0)) {
        notificationDismissedInGuilds.delete(arg0);
        const Storage = callback(510).Storage;
        const result = Storage.set(closure_1_3, notificationDismissedInGuilds);
        callback(1249).batchUpdates(() => notificationDismissedInGuilds({ notificationDismissedInGuilds }));
        const obj = callback(1249);
      }
    }
  };
  return obj;
});
Storage.asyncGet(DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY, (arg0) => {
  const _require = arg0;
  _require(1249).batchUpdates(() => {
    const obj = { notificationDismissedInGuilds: new Set(closure_0) };
    return closure_1_4.setState(obj);
  });
});
let result = require("set").fileFinishedImporting("modules/guild_communication_disabled/useCommunicationDisabledNoticeStore.tsx");

export const useCommunicationDisabledNoticeStore = function useCommunicationDisabledNoticeStore(arg0) {
  const tmp = callback(identity.useStoreWithEqualityFn(closure_4, (arg0) => {
    const items = [, ];
    ({ notificationDismissedInGuilds: arr[0], dismissNotification: arr[1] } = arg0);
    return items;
  }, isIterable.shallow), 2);
  const first = tmp[0];
  let items = [!first.has(arg0), tmp[1]];
  return items;
};
export const clearCommunicationDisabledNotice = function clearCommunicationDisabledNotice(arg0) {
  state = state.getState();
  return state.resetNotification(arg0);
};