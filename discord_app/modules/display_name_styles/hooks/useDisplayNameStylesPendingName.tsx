// === Module 15160: useDisplayNameStylesPendingName ===

// Module 15160 (useDisplayNameStylesPendingName)
import nameFromUserDefault from "nameFromUser" /* 4322 */;
import closure_3 from "handleFormOpen" /* 8078 */;
import closure_4 from "trackCommunicationDisabled" /* 1991 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesPendingName.tsx");

export const useDisplayNameStylesPendingName = function useDisplayNameStylesPendingName(stateFromStores, guildId) {
  const _require = stateFromStores;
  importDefault = guildId;
  const name = nameFromUserDefault.useName(stateFromStores);
  const obj = nameFromUserDefault;
  const items = [closure_3, closure_4];
  const items1 = [guildId, stateFromStores];
  let str = _require(586).useStateFromStores(items, () => {
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