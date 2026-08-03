// === Module 15077: useFirstGloballyViewbleGuildChannelId ===

// Module 15077 (useFirstGloballyViewbleGuildChannelId)
import comparator from "comparator";
import { Permissions } from "sum";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/permissions/useFirstGloballyViewbleGuildChannelId.tsx");

export const useFirstGloballyViewbleGuildChannelId = function useFirstGloballyViewbleGuildChannelId(guildId) {
  const _require = guildId;
  const items = [comparator];
  const items1 = [guildId];
  return _require(589).useStateFromStores(items, () => {
    if (null != closure_0) {
      const selectableChannels = outer1_3.getSelectableChannels(tmp);
      for (const item10010 of selectableChannels) {
        let channel = item10010.channel;
        let tmp6 = channel;
        let tmp7 = outer1_1;
        let tmp8 = outer1_2;
        let obj2 = outer1_1(outer1_2[3]);
        let tmp9 = outer1_4;
        if (obj2.canEveryone(outer1_4.VIEW_CHANNEL, channel)) {
          let tmp10 = obj;
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