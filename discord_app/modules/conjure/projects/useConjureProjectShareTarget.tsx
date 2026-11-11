// discord_app/modules/conjure/projects/useConjureProjectShareTarget.tsx
import _modDef4079 from "../intl/ConjureUntranslated.messages.js";
import GuildStore from "../../../stores/GuildStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/useConjureProjectShareTarget.tsx");

export default function useConjureProjectShareTarget(guild_id) {
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  let intl = guild_id;
  let stringResult = dependencyMap;
  items = [GuildStore];
  const items1 = [guild_id];
  const stateFromStores = guild_id(504).useStateFromStores(
    items,
    () => {
      let tmp2 = null;
      if (null != guild_id) {
        guild = GuildStore.getGuild(tmp);
        if (guild == null) {
          guild = null;
        }
        tmp2 = guild;
      }
      return tmp2;
    },
    items1,
  );
  if (null == guild_id) {
    let label;
    if (null != null) {
      label = null.label;
    }
    if (label == null) {
      label = null;
    }
    return label;
  } else if ("user" === guild_id.install_scope) {
    const obj2 = { kind: "user", label: null };
    intl = intl(1113).intl;
    stringResult = intl.string(_modDef4079.KxFFKT);
    obj2.label = stringResult;
  } else if (null != stateFromStores) {
    const obj3 = { kind: "guild", label: stateFromStores.name, guild: stateFromStores };
  }
  const obj = guild_id(504);
}
export function useConjureProjectShareTargetDetails(project) {
  let guild_id;
  if (project != null) {
    guild_id = project.guild_id;
  }
  let intl = guild_id;
  let stringResult = dependencyMap;
  items = [GuildStore];
  const items1 = [guild_id];
  const stateFromStores = guild_id(504).useStateFromStores(
    items,
    () => {
      let tmp2 = null;
      if (null != guild_id) {
        guild = GuildStore.getGuild(tmp);
        if (guild == null) {
          guild = null;
        }
        tmp2 = guild;
      }
      return tmp2;
    },
    items1,
  );
  if (null == project) {
    return null;
  } else if ("user" === project.install_scope) {
    const obj2 = { kind: "user", label: null };
    intl = intl(1113).intl;
    stringResult = intl.string(_modDef4079.KxFFKT);
    obj2.label = stringResult;
  } else if (null != stateFromStores) {
    const obj3 = { kind: "guild", label: stateFromStores.name, guild: stateFromStores };
  }
  const obj = guild_id(504);
}
export function isConjureProjectWithoutServer(project) {
  let tmp = "guild" === project.install_scope;
  if (tmp) {
    tmp = null == project.guild_id;
  }
  return tmp;
}
