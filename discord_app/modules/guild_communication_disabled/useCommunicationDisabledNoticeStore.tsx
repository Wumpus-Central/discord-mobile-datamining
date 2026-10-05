// === Module 2113: useCommunicationDisabledNoticeStore ===

// Module 2113 (useCommunicationDisabledNoticeStore)
import Storage2 from "Storage" /* 510 */;
import react from "react" /* 576 */;
import _mod1254 from "module_1254" /* 1254 */;
import GuildDisableCommunicationConstants from "GuildDisableCommunicationConstants" /* 2114 */;
import _slicedToArray2 from "_slicedToArray" /* 4492 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import module_571 from "module_571" /* 571 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, setState;

const DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY = GuildDisableCommunicationConstants.DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY;
let state = module_571.createStore((arg0, arg1) => {
  let closure_0;
  let closure_1;
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
      const notificationDismissedInGuilds = closure_1().notificationDismissedInGuilds;
      notificationDismissedInGuilds.add(arg0);
      const Storage = notificationDismissedInGuilds(closure_1[2]).Storage;
      const result = Storage.set(DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY, notificationDismissedInGuilds);
      let obj = notificationDismissedInGuilds(closure_1[4]);
      obj.batchUpdates(() => {
        const obj = { notificationDismissedInGuilds };
        return notificationDismissedInGuilds(obj);
      });
    },
    resetNotification(arg0) {
      const notificationDismissedInGuilds = closure_1().notificationDismissedInGuilds;
      if (notificationDismissedInGuilds.has(arg0)) {
        notificationDismissedInGuilds.delete(arg0);
        const Storage = notificationDismissedInGuilds(closure_1[2]).Storage;
        const result = Storage.set(DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY, notificationDismissedInGuilds);
        let obj = notificationDismissedInGuilds(closure_1[4]);
        obj.batchUpdates(() => {
          const obj = { notificationDismissedInGuilds };
          return notificationDismissedInGuilds(obj);
        });
      }
    }
  };
  new Set(items);
  return obj;
});
let Storage = Storage2.Storage;
Storage.asyncGet(DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY, async (arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    setState = setState.setState;
    const obj = { notificationDismissedInGuilds: new Set(closure_0) };
    new Set(closure_0);
    return setState(obj);
  });
});
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let obj3;
  let tmp6;
  const obj = react;
  const cResult = obj.c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(arg0) {
      const items = [, ];
      ({ notificationDismissedInGuilds: arr[0], dismissNotification: arr[1] } = arg0);
      return items;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmpResult = _mod1254;
  [obj3, tmp6] = tmpResult.useStoreWithEqualityFn(state, first, _slicedToArray2.shallow);
  _slicedToArray(tmpResult.useStoreWithEqualityFn(state, first, _slicedToArray2.shallow), 2);
  if (cResult[1] === arg0) {
    let tmp7;
    if (cResult[2] === obj3) {
      tmp7 = cResult[3];
    }
    if (cResult[4] === tmp6) {
      let tmp10;
      if (cResult[5] === !tmp7) {
        tmp10 = cResult[6];
      }
      return tmp10;
    }
    let items = [!tmp7, tmp6];
    cResult[4] = tmp6;
    cResult[5] = !tmp7;
    cResult[6] = items;
    tmp10 = items;
  }
  const hasItem = obj3.has(arg0);
  cResult[1] = arg0;
  cResult[2] = obj3;
  cResult[3] = hasItem;
  tmp7 = hasItem;
}) : ((arg0) => {
  let first;
  let tmp2;
  const obj = _mod1254;
  [first, tmp2] = obj.useStoreWithEqualityFn(state, (arg0) => {
    const items = [, ];
    ({ notificationDismissedInGuilds: arr[0], dismissNotification: arr[1] } = arg0);
    return items;
  }, _slicedToArray2.shallow);
  let items = [, ];
  items[0] = !first.has(arg0);
  items[1] = tmp2;
  return items;
});
let result = size.fileFinishedImporting("modules/guild_communication_disabled/useCommunicationDisabledNoticeStore.tsx");

export const useCommunicationDisabledNoticeStore = tmp3;
export const clearCommunicationDisabledNotice = function clearCommunicationDisabledNotice(arg0) {
  state = state.getState();
  return state.resetNotification(arg0);
};