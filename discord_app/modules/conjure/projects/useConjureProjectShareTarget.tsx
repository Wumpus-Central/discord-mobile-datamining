// discord_app/modules/conjure/projects/useConjureProjectShareTarget.tsx
import _modDef3868 from "../intl/ConjureUntranslated.messages.js";
import GuildStore from "../../../stores/GuildStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/useConjureProjectShareTarget.tsx");

export default function useConjureProjectShareTarget(guild_id) {
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  const items = [GuildStore];
  const items1 = [guild_id];
  let stateFromStores = guild_id(504).useStateFromStores(
    items,
    () => {
      let tmp2 = null;
      if (null != guild_id) {
        const guild = GuildStore.getGuild(tmp);
        let name;
        if (guild != null) {
          name = guild.name;
        }
        if (name == null) {
          name = null;
        }
        tmp2 = name;
      }
      return tmp2;
    },
    items1,
  );
  let tmp5 = null;
  if (null != guild_id) {
    tmp5 = null;
    if (null == guild_id.install_scope_setup) {
      if ("user" === guild_id.install_scope) {
        const intl = guild_id(1113).intl;
        stateFromStores = intl.string(_modDef3868.KxFFKT);
      }
      tmp5 = stateFromStores;
    }
  }
  return tmp5;
}
