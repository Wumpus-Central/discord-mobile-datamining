// === Module 16062: useFirstGloballyViewbleGuildChannelId ===

// Module 16062 (useFirstGloballyViewbleGuildChannelId)
import PermissionUtilsAll from "PermissionUtils" /* 4204 */;
import GuildChannelStore from "GuildChannelStore" /* 2012 */;

const require = fn;
const Permissions = fn(1085).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/permissions/useFirstGloballyViewbleGuildChannelId.tsx");

export const useFirstGloballyViewbleGuildChannelId = function useFirstGloballyViewbleGuildChannelId(guildId) {
  _require = guildId;
  const items = [GuildChannelStore];
  const items1 = [guildId];
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
};