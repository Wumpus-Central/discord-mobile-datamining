// discord_app/modules/collectibles/nameplates/hooks/useNameplate.tsx
import utils from "../utils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";

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
      let nameplate;
      if (stateFromStores != null) {
        const collectibles = stateFromStores.collectibles;
        if (collectibles != null) {
          nameplate = collectibles.nameplate;
        }
      }
      nameplate = utils.getNameplateData(nameplate);
      if (nameplate == null) {
        nameplate = tmp.nameplate;
      }
      return nameplate;
    }
  }, items1);
};
