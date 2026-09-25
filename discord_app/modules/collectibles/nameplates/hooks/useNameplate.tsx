// === Module 7655: useNameplate ===

// Module 7655 (useNameplate)
import utils from "utils" /* 1970 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2107 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/nameplates/hooks/useNameplate.tsx");

export const useNameplate = function useNameplate(user) {
  user = user.user;
  const guildId = user.guildId;
  const items = [GuildMemberStore];
  const stateFromStores = user(guildId[2]).useStateFromStores(items, () => {
    let member = null;
    if (null != guildId) {
      member = null;
      if (null != user) {
        member = GuildMemberStore.getMember(tmp, tmp3.id);
      }
    }
    return member;
  });
  const items1 = [stateFromStores, user];
  return stateFromStores.useMemo(() => {
    if (null != user) {
      let nameplate1;
      if (stateFromStores != null) {
        const collectibles = stateFromStores.collectibles;
        if (collectibles != null) {
          nameplate1 = collectibles.nameplate;
        }
      }
      let nameplate = utils.getNameplateData(nameplate1);
      if (nameplate == null) {
        nameplate = tmp.nameplate;
      }
      return nameplate;
    }
  }, items1);
};