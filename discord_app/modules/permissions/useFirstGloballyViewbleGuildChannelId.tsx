// === Module 15325: useFirstGloballyViewbleGuildChannelId ===

// Module 15325 (useFirstGloballyViewbleGuildChannelId)
import applyOverwritesAll from "applyOverwrites" /* 4026 */;
import comparator from "comparator" /* 1980 */;
import { Permissions } from "sum" /* 505 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/permissions/useFirstGloballyViewbleGuildChannelId.tsx");

export const useFirstGloballyViewbleGuildChannelId = function useFirstGloballyViewbleGuildChannelId(guildId) {
  const _require = guildId;
  const items = [closure_3];
  const items1 = [guildId];
  return _require(589).useStateFromStores(items, () => {
    if (null != closure_0) {
      const selectableChannels = closure_1_3.getSelectableChannels(tmp);
      for (const item10010 of selectableChannels) {
        let channel = item10010.channel;
        let obj2 = applyOverwritesAll;
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