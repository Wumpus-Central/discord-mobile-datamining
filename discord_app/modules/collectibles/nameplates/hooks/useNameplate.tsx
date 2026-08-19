// discord_app/modules/collectibles/nameplates/hooks/useNameplate.tsx
import noop from "../../../../../_runtime/00019_noop.js";
import trackCommunicationDisabled from "../../../../stores/GuildMemberStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/collectibles/nameplates/hooks/useNameplate.tsx");

export const useNameplate = function useNameplate(user) {
  user = user.user;
  const guildId = user.guildId;
  const items = [closure_3];
  const stateFromStores = user(guildId[2]).useStateFromStores(items, () => {
    let member = null;
    if (null != guildId) {
      member = null;
      if (null != user) {
        member = closure_1_3.getMember(tmp, tmp3.id);
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