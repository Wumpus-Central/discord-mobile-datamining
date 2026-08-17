// discord_app/modules/home_drawer/native/isHomeDrawerChannelMuted.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import closure_2 from "../../threads/JoinedThreadsStore.tsx";
import { isThread } from "../../../records/ChannelRecord.tsx";
import closure_4 from "../../../stores/UserGuildSettingsStore.tsx";

require = arg1;
let result = require("set").fileFinishedImporting("modules/home_drawer/native/isHomeDrawerChannelMuted.tsx");

export const useIsHomeDrawerChannelMuted = function useIsHomeDrawerChannelMuted() {
  const items = [closure_2, closure_4];
  return initialize.useStateFromStores(items, () => (type) => {
    const tmp = callback(type.type);
    if (tmp) {
      if (muted.isMuted(type.id)) {
        return true;
      }
    }
    const tmp3 = tmp ? type.parent_id : type.id;
    let result = null != tmp3;
    if (result) {
      result = guildOrCategoryOrChannelMuted.isGuildOrCategoryOrChannelMuted(type.guild_id, tmp3);
    }
    return result;
  }, [], initialize.statesWillNeverBeEqual);
};