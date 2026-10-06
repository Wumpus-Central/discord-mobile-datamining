// === Module 16026: useFirstGloballyViewbleGuildChannelId ===

// Module 16026 (useFirstGloballyViewbleGuildChannelId)
import Constants from "Constants" /* 1096 */;
import PermissionUtilsAll from "PermissionUtils" /* 4520 */;
import GuildChannelStore from "GuildChannelStore" /* 4513 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Permissions = Constants.Permissions;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      if (null != closure_0) {
        const selectableChannels = GuildChannelStore.getSelectableChannels(tmp);
        for (const item10010 of selectableChannels) {
          let channel = item10010.channel;
          let obj2 = PermissionUtilsAll;
          if (obj2.canEveryone(Permissions.VIEW_CHANNEL, channel)) {
            let id = channel.id;
            obj.return();
            return id;
          }
        }
        let id1;
        if (selectableChannels != null) {
          const first = selectableChannels[0];
          if (first != null) {
            id1 = first.channel.id;
          }
        }
        return id1;
      }
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6, tmp7);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const obj = require("get initialized");
  const items = [GuildChannelStore];
  const items1 = [arg0];
  return obj.useStateFromStores(items, () => {
    if (null != closure_0) {
      const selectableChannels = GuildChannelStore.getSelectableChannels(tmp);
      for (const item10010 of selectableChannels) {
        let channel = item10010.channel;
        let obj2 = PermissionUtilsAll;
        if (obj2.canEveryone(Permissions.VIEW_CHANNEL, channel)) {
          let id = channel.id;
          obj.return();
          return id;
        }
      }
      let id1;
      if (selectableChannels != null) {
        const first = selectableChannels[0];
        if (first != null) {
          id1 = first.channel.id;
        }
      }
      return id1;
    }
  }, items1);
});
const result = size.fileFinishedImporting("modules/permissions/useFirstGloballyViewbleGuildChannelId.tsx");

export const useFirstGloballyViewbleGuildChannelId = tmp2;