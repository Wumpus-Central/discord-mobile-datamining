// === Module 8374: useNameplate ===

// Module 8374 (useNameplate)
import noop from "noop";
import trackCommunicationDisabled from "trackCommunicationDisabled";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/collectibles/nameplates/hooks/useNameplate.tsx");

export const useNameplate = function useNameplate(user) {
  user = user.user;
  const guildId = user.guildId;
  let stateFromStores;
  const items = [trackCommunicationDisabled];
  stateFromStores = user(guildId[2]).useStateFromStores(items, () => {
    let member = null;
    if (null != guildId) {
      member = null;
      if (null != user) {
        member = outer1_3.getMember(tmp, tmp3.id);
      }
    }
    return member;
  });
  const items1 = [stateFromStores, user];
  return stateFromStores.useMemo(() => {
    if (null != user) {
      let nameplate;
      if (stateFromStores != null) {
        const collectibles = stateFromStores.collectibles;
        if (collectibles != null) {
          nameplate = collectibles.nameplate;
        }
      }
      nameplate = user(guildId[3]).getNameplateData(nameplate);
      if (nameplate == null) {
        nameplate = tmp.nameplate;
      }
      return nameplate;
    }
  }, items1);
};