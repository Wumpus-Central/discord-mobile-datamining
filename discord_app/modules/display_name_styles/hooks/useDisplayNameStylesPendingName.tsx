// === Module 14682: useDisplayNameStylesPendingName ===

// Module 14682 (useDisplayNameStylesPendingName)
import nameFromUserDefault from "nameFromUser" /* 4219 */;
import handleFormOpen from "handleFormOpen" /* 8370 */;
import trackCommunicationDisabled from "trackCommunicationDisabled" /* 1990 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesPendingName.tsx");

export const useDisplayNameStylesPendingName = function useDisplayNameStylesPendingName(stateFromStores, guildId) {
  const _require = stateFromStores;
  importDefault = guildId;
  const name = nameFromUserDefault.useName(stateFromStores);
  const items = [closure_3, closure_4];
  const items1 = [guildId, stateFromStores];
  let str = _require(589).useStateFromStores(items, () => {
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