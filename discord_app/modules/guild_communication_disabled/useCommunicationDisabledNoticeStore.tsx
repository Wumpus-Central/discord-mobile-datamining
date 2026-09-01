// discord_app/modules/guild_communication_disabled/useCommunicationDisabledNoticeStore.tsx
import identity from "../../../_runtime/00700_identity.js";
import isIterable from "../../../_runtime/04106_isIterable.js";
import closure_2 from "../../../_runtime/metro/00032__slicedToArray.js";
import { DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY } from "GuildDisableCommunicationConstants.tsx";
import keys from "../../../_runtime/00645_keys.js";
import { Storage } from "../../../discord_common/js/packages/storage/Storage.tsx";

require = arg1;
let closure_4 = keys.createStore((arg0, arg1) => {
  const _require = arg0;
  dependencyMap = arg1;
  let Storage = require("../../../discord_common/js/packages/storage/Storage.tsx").Storage;
  let items = Storage.get(DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY);
  if (items == null) {
    items = [];
  }
  let obj = {
    notificationDismissedInGuilds: new Set(items),
    dismissNotification(arg0) {
      const notificationDismissedInGuilds = dependencyMap().notificationDismissedInGuilds;
      notificationDismissedInGuilds.add(arg0);
      const Storage = callback(595).Storage;
      const result = Storage.set(closure_1_3, notificationDismissedInGuilds);
      callback(705).batchUpdates(() => notificationDismissedInGuilds({ notificationDismissedInGuilds }));
    },
    resetNotification(arg0) {
      const notificationDismissedInGuilds = dependencyMap().notificationDismissedInGuilds;
      if (notificationDismissedInGuilds.has(arg0)) {
        notificationDismissedInGuilds.delete(arg0);
        const Storage = callback(595).Storage;
        const result = Storage.set(closure_1_3, notificationDismissedInGuilds);
        callback(705).batchUpdates(() => notificationDismissedInGuilds({ notificationDismissedInGuilds }));
        const obj = callback(705);
      }
    },
  };
  return obj;
});
Storage.asyncGet(DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY, (arg0) => {
  const _require = arg0;
  require("../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => {
    const obj = { notificationDismissedInGuilds: new Set(closure_0) };
    return closure_1_4.setState(obj);
  });
});
let result = require("set").fileFinishedImporting(
  "modules/guild_communication_disabled/useCommunicationDisabledNoticeStore.tsx",
);

export const useCommunicationDisabledNoticeStore = function useCommunicationDisabledNoticeStore(arg0) {
  const tmp = callback(
    identity.useStoreWithEqualityFn(
      closure_4,
      (arg0) => {
        const items = [,];
        ({ notificationDismissedInGuilds: arr[0], dismissNotification: arr[1] } = arg0);
        return items;
      },
      isIterable.shallow,
    ),
    2,
  );
  const first = tmp[0];
  let items = [!first.has(arg0), tmp[1]];
  return items;
};
export const clearCommunicationDisabledNotice = function clearCommunicationDisabledNotice(arg0) {
  state = state.getState();
  return state.resetNotification(arg0);
};
