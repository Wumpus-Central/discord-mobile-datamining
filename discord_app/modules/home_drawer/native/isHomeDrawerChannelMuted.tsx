// discord_app/modules/home_drawer/native/isHomeDrawerChannelMuted.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import JoinedThreadsStore from "../../threads/JoinedThreadsStore.tsx";
import UserGuildSettingsStore from "../../../stores/UserGuildSettingsStore.tsx";

require = fn;
const isThread = fn(1961).isThread;
const size = fn(2);
let result = size.fileFinishedImporting("modules/home_drawer/native/isHomeDrawerChannelMuted.tsx");

export const useIsHomeDrawerChannelMuted = function useIsHomeDrawerChannelMuted() {
  const items = [JoinedThreadsStore, UserGuildSettingsStore];
  return initialize.useStateFromStores(
    items,
    () => (type) => {
      const tmp = closure_1_3(type.type);
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
    },
    [],
    initialize.statesWillNeverBeEqual,
  );
};
