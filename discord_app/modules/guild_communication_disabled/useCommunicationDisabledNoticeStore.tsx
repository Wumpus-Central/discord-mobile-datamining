// discord_app/modules/guild_communication_disabled/useCommunicationDisabledNoticeStore.tsx
import c from "../../../_runtime/00576_c.js";
import _mod1254 from "../../../_runtime/metro/01254__.js";
import _mod4492 from "../../../_runtime/metro/04492__.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";

require = fn;
const DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY =
  fn(2114).DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY;
const module_571 = fn(571);
let state = module_571.createStore((arg0, arg1) => {
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
      const result = Storage.set(
        DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY,
        notificationDismissedInGuilds,
      );
      notificationDismissedInGuilds(1259).batchUpdates(() =>
        notificationDismissedInGuilds({ notificationDismissedInGuilds }),
      );
    },
    resetNotification(arg0) {
      const notificationDismissedInGuilds = dependencyMap().notificationDismissedInGuilds;
      if (notificationDismissedInGuilds.has(arg0)) {
        notificationDismissedInGuilds.delete(arg0);
        const Storage = notificationDismissedInGuilds(510).Storage;
        const result = Storage.set(
          DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY,
          notificationDismissedInGuilds,
        );
        notificationDismissedInGuilds(1259).batchUpdates(() =>
          notificationDismissedInGuilds({ notificationDismissedInGuilds }),
        );
        const obj = notificationDismissedInGuilds(1259);
      }
    },
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
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_communication_disabled/useCommunicationDisabledNoticeStore.tsx");

export const useCommunicationDisabledNoticeStore = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(7);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n(arg0) {
          const items = [,];
          ({ notificationDismissedInGuilds: arr[0], dismissNotification: arr[1] } = arg0);
          return items;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      const tmpResult = _mod1254;
      [obj3, tmp6] = _mod1254.useStoreWithEqualityFn(closure_4, first, _mod4492.shallow);
      if (cResult[1] === arg0) {
        if (cResult[2] === obj3) {
          let tmp7 = cResult[3];
        }
        if (cResult[4] === tmp6) {
          if (cResult[5] === tmp9) {
            let tmp10 = cResult[6];
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
      const tmp5 = _slicedToArray(_mod1254.useStoreWithEqualityFn(closure_4, first, _mod4492.shallow), 2);
    }
  : (arg0) => {
      const tmp = _slicedToArray(
        _mod1254.useStoreWithEqualityFn(
          closure_4,
          (arg0) => {
            const items = [,];
            ({ notificationDismissedInGuilds: arr[0], dismissNotification: arr[1] } = arg0);
            return items;
          },
          _mod4492.shallow,
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
