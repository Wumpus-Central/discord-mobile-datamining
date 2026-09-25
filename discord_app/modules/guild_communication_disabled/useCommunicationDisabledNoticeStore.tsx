// === Module 2108: useCommunicationDisabledNoticeStore ===

// Module 2108 (useCommunicationDisabledNoticeStore)
import _mod1243 from "module_1243" /* 1243 */;
import _mod4449 from "module_4449" /* 4449 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY = fn(2109).DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY;
const module_561 = fn(561);
let state = module_561.createStore((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  let Storage = require("Storage").Storage;
  let items = Storage.get(DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY);
  if (items == null) {
    items = [];
  }
  let obj = {
    notificationDismissedInGuilds: new Set(items),
    dismissNotification(arg0) {
      const notificationDismissedInGuilds = dependencyMap().notificationDismissedInGuilds;
      notificationDismissedInGuilds.add(arg0);
      const Storage = notificationDismissedInGuilds(510).Storage;
      const result = Storage.set(DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY, notificationDismissedInGuilds);
      notificationDismissedInGuilds(1248).batchUpdates(() => notificationDismissedInGuilds({ notificationDismissedInGuilds }));
    },
    resetNotification(arg0) {
      const notificationDismissedInGuilds = dependencyMap().notificationDismissedInGuilds;
      if (notificationDismissedInGuilds.has(arg0)) {
        notificationDismissedInGuilds.delete(arg0);
        const Storage = notificationDismissedInGuilds(510).Storage;
        const result = Storage.set(DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY, notificationDismissedInGuilds);
        notificationDismissedInGuilds(1248).batchUpdates(() => notificationDismissedInGuilds({ notificationDismissedInGuilds }));
        const obj = notificationDismissedInGuilds(1248);
      }
    }
  };
  return obj;
});
let Storage = fn(510).Storage;
Storage.asyncGet(DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY, async (arg0) => {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = { notificationDismissedInGuilds: new Set(closure_0) };
    return state.setState(obj);
  });
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_communication_disabled/useCommunicationDisabledNoticeStore.tsx");

export const useCommunicationDisabledNoticeStore = function useCommunicationDisabledNoticeStore(arg0) {
  const tmp = _slicedToArray(_mod1243.useStoreWithEqualityFn(closure_4, (arg0) => {
    const items = [, ];
    ({ notificationDismissedInGuilds: arr[0], dismissNotification: arr[1] } = arg0);
    return items;
  }, _mod4449.shallow), 2);
  const first = tmp[0];
  let items = [!first.has(arg0), tmp[1]];
  return items;
};
export const clearCommunicationDisabledNotice = function clearCommunicationDisabledNotice(arg0) {
  state = state.getState();
  return state.resetNotification(arg0);
};