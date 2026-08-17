// discord_app/modules/permissions/useFirstGloballyViewbleGuildChannelId.tsx
import closure_3 from "comparator" /* 1980 */;
import { Permissions } from "sum" /* 505 */;
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/permissions/useFirstGloballyViewbleGuildChannelId.tsx");

export const useFirstGloballyViewbleGuildChannelId = function useFirstGloballyViewbleGuildChannelId(guildId) {
  const _require = guildId;
  const items = [closure_3];
  const items1 = [guildId];
  return _initialize.useStateFromStores(items, () => {
    if (null != closure_0) {
      const selectableChannels = closure_1_3.getSelectableChannels(tmp);
      for (const item10010 of selectableChannels) {
        let channel = item10010.channel;
        let tmp6 = channel;
        let tmp7 = closure_1_1;
        let tmp8 = closure_1_2;
        let obj2 = closure_1_1(closure_1_2[3]);
        let tmp9 = closure_1_4;
        if (obj2.canEveryone(closure_1_4.VIEW_CHANNEL, channel)) {
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