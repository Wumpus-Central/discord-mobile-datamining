// === Module 13235: useConjureProjectShareTarget ===

// Module 13235 (useConjureProjectShareTarget)
import _modDef3995 from "module_3995" /* 3995 */;
import GuildStore from "GuildStore" /* 5014 */;

const require = fn;
function useConjureProjectShareTargetDetails(project) {
  let guild_id;
  if (project != null) {
    guild_id = project.guild_id;
  }
  let intl = guild_id;
  let stringResult = dependencyMap;
  items = [GuildStore];
  const items1 = [guild_id];
  const stateFromStores = guild_id(504).useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != guild_id) {
      guild = GuildStore.getGuild(tmp);
      if (guild == null) {
        guild = null;
      }
      tmp2 = guild;
    }
    return tmp2;
  }, items1);
  let tmp4 = null;
  if (null != project) {
    tmp4 = null;
    if (null == project.install_scope_setup) {
      if ("user" === project.install_scope) {
        const obj2 = { kind: "user", label: null };
        intl = intl(1113).intl;
        stringResult = intl.string(_modDef3995.KxFFKT);
        obj2.label = stringResult;
      } else if ("guild" === project.install_scope) {
        if (null != stateFromStores) {
          const obj3 = { kind: "guild", label: stateFromStores.name, guild: stateFromStores };
        }
      }
    }
  }
  return tmp4;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/useConjureProjectShareTarget.tsx");

export default function useConjureProjectShareTarget(project) {
  const tmp = useConjureProjectShareTargetDetails(project);
  let label;
  if (tmp != null) {
    label = tmp.label;
  }
  if (label == null) {
    label = null;
  }
  return label;
};
export { useConjureProjectShareTargetDetails };
export function isConjureProjectWithoutServer(project) {
  let tmp = "guild" === project.install_scope;
  if (tmp) {
    tmp = null == project.guild_id;
  }
  if (tmp) {
    tmp = null == project.install_scope_setup;
  }
  return tmp;
}