// === Module 15987: useFirstGloballyViewbleGuildChannelId ===

// Module 15987 (useFirstGloballyViewbleGuildChannelId)
import PermissionUtilsAll from "PermissionUtils" /* 4514 */;
import GuildChannelStore from "GuildChannelStore" /* 4507 */;

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1096).Permissions;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/permissions/useFirstGloballyViewbleGuildChannelId.tsx");

export const useFirstGloballyViewbleGuildChannelId = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildChannelStore];
    cResult[0] = items;
    let first = items;
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
            obj.return();
            return channel.id;
          }
        }
        let id;
        if (selectableChannels != null) {
          const first = selectableChannels[0];
          if (first != null) {
            id = first.channel.id;
          }
        }
        return id;
      }
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6, tmp7);
}) : ((arg0) => {
  _require = arg0;
  const items = [GuildChannelStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    if (null != closure_0) {
      const selectableChannels = GuildChannelStore.getSelectableChannels(tmp);
      for (const item10010 of selectableChannels) {
        let channel = item10010.channel;
        let obj2 = PermissionUtilsAll;
        if (obj2.canEveryone(Permissions.VIEW_CHANNEL, channel)) {
          obj.return();
          return channel.id;
        }
      }
      let id;
      if (selectableChannels != null) {
        const first = selectableChannels[0];
        if (first != null) {
          id = first.channel.id;
        }
      }
      return id;
    }
  }, items1);
});