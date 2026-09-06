// discord_app/modules/display_name_styles/hooks/useDisplayNameStylesPendingName.tsx
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import UserProfileSettingsStore from "../../user_profile/UserProfileSettingsStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesPendingName.tsx");

export const useDisplayNameStylesPendingName = function useDisplayNameStylesPendingName(stateFromStores, guildId) {
  _require = stateFromStores;
  importDefault = guildId;
  const name = UserUtilsDefault.useName(stateFromStores);
  const items = [UserProfileSettingsStore, GuildMemberStore];
  const items1 = [guildId, stateFromStores];
  let str = require("initialize").useStateFromStores(
    items,
    () => {
      const pendingChanges = UserProfileSettingsStore.getPendingChanges(closure_1);
      if (null != closure_1) {
        let pendingNickname = pendingChanges.pendingNickname;
        if (pendingNickname == null) {
          let id;
          if (stateFromStores != null) {
            id = stateFromStores.id;
          }
          pendingNickname = GuildMemberStore.getNick(closure_1, id);
        }
        let pendingGlobalName = pendingNickname;
      } else {
        pendingGlobalName = pendingChanges.pendingGlobalName;
      }
      return pendingGlobalName;
    },
    items1,
  );
  if (str == null) {
    str = name;
  }
  if (str == null) {
    str = "";
  }
  return str;
};
