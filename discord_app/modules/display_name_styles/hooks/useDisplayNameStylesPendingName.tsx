// discord_app/modules/display_name_styles/hooks/useDisplayNameStylesPendingName.tsx
import nameFromUserDefault from "../../../utils/UserUtils.tsx";
import closure_3 from "../../user_profile/UserProfileSettingsStore.tsx";
import closure_4 from "../../../stores/GuildMemberStore.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesPendingName.tsx");

export const useDisplayNameStylesPendingName = function useDisplayNameStylesPendingName(stateFromStores, guildId) {
  const _require = stateFromStores;
  importDefault = guildId;
  const name = nameFromUserDefault.useName(stateFromStores);
  const obj = nameFromUserDefault;
  const items = [closure_3, closure_4];
  const items1 = [guildId, stateFromStores];
  let str = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const pendingChanges = closure_1_3.getPendingChanges(closure_1);
    if (null != closure_1) {
      let pendingNickname = pendingChanges.pendingNickname;
      if (pendingNickname == null) {
        let id;
        if (stateFromStores != null) {
          id = stateFromStores.id;
        }
        pendingNickname = closure_1_4.getNick(closure_1, id);
      }
      let pendingGlobalName = pendingNickname;
    } else {
      pendingGlobalName = pendingChanges.pendingGlobalName;
    }
    return pendingGlobalName;
  }, items1);
  if (str == null) {
    str = name;
  }
  if (str == null) {
    str = "";
  }
  return str;
};