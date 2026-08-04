// discord_app/modules/display_name_styles/hooks/useDisplayNameStylesPendingName.tsx
import handleFormOpen from "handleFormOpen";
import trackCommunicationDisabled from "trackCommunicationDisabled";

const require = arg1;
const result = require("nameFromUser").fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesPendingName.tsx");

export const useDisplayNameStylesPendingName = function useDisplayNameStylesPendingName(stateFromStores, guildId) {
  const _require = stateFromStores;
  const importDefault = guildId;
  const name = importDefault(4032).useName(stateFromStores);
  const obj = importDefault(4032);
  const items = [handleFormOpen, trackCommunicationDisabled];
  const items1 = [guildId, stateFromStores];
  let str = _require(589).useStateFromStores(items, () => {
    const pendingChanges = outer1_3.getPendingChanges(closure_1);
    if (null != closure_1) {
      let pendingNickname = pendingChanges.pendingNickname;
      if (pendingNickname == null) {
        let id;
        if (stateFromStores != null) {
          id = stateFromStores.id;
        }
        pendingNickname = outer1_4.getNick(closure_1, id);
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