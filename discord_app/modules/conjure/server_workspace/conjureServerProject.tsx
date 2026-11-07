// === Module 7456: conjureServerProject ===

// Module 7456 (conjureServerProject)
import ConjureActivity from "ConjureActivity" /* 7457 */;
import conjurePageRoutes from "conjurePageRoutes" /* 7458 */;
import GuildStore from "GuildStore" /* 5011 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6899 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/server_workspace/conjureServerProject.tsx");

export function conjureServerProjectGuildId(project) {
  if (null != project) {
    if (null == project.install_scope_setup) {
      if ("guild" === project.install_scope) {
        return ConjureActivity.conjureProjectGuildId(project);
      } else {
        let guild_id = project.guild_id;
        if (guild_id == null) {
          guild_id = null;
        }
        let tmp2 = null;
        if (null != guild_id) {
          tmp2 = null;
          if (null != GuildStore.getGuild(guild_id)) {
            tmp2 = guild_id;
          }
        }
        return tmp2;
      }
    }
  }
  return null;
}
export function conjureServerAppGuildId(nextResult) {
  let install_scope;
  if (nextResult != null) {
    install_scope = nextResult.install_scope;
  }
  if ("guild" !== install_scope) {
    return null;
  } else {
    let result = null;
    if (null != nextResult) {
      result = null;
      if (null == nextResult.install_scope_setup) {
        if ("guild" !== nextResult.install_scope) {
          let guild_id = nextResult.guild_id;
          if (guild_id == null) {
            guild_id = null;
          }
          let tmp4 = null;
          if (null != guild_id) {
            tmp4 = null;
            if (null != GuildStore.getGuild(guild_id)) {
              tmp4 = guild_id;
            }
          }
          result = tmp4;
        }
      }
      result = ConjureActivity.conjureProjectGuildId(nextResult);
    }
  }
}
export function getConjureServerProjects(id) {
  closure_0 = id;
  items = [...ConjureProjectStore.getOwnedProjects(), ...ConjureProjectStore.getSharedProjects(id)];
  return items.filter((install_scope_setup) => {
    let result = null;
    if (null != install_scope_setup) {
      result = null;
      if (null == install_scope_setup.install_scope_setup) {
        if ("guild" === install_scope_setup.install_scope) {
          result = ConjureActivity.conjureProjectGuildId(install_scope_setup);
        } else {
          let guild_id = install_scope_setup.guild_id;
          if (guild_id == null) {
            guild_id = null;
          }
          let tmp3 = null;
          if (null != guild_id) {
            tmp3 = null;
            if (null != GuildStore.getGuild(guild_id)) {
              tmp3 = guild_id;
            }
          }
          result = tmp3;
        }
      }
    }
    return result === closure_0;
  });
}
export function conjureProjectRoute(arg0) {
  const project = ConjureProjectStore.getProject(arg0);
  let result = null;
  if (null != project) {
    result = null;
    if (null == project.install_scope_setup) {
      if ("guild" === project.install_scope) {
        result = ConjureActivity.conjureProjectGuildId(project);
      } else {
        let guild_id = project.guild_id;
        if (guild_id == null) {
          guild_id = null;
        }
        let tmp4 = null;
        if (null != guild_id) {
          tmp4 = null;
          if (null != GuildStore.getGuild(guild_id)) {
            tmp4 = guild_id;
          }
        }
        result = tmp4;
      }
    }
  }
  if (null != result) {
    let result1 = conjurePageRoutes.conjureServerProjectRoute(result, arg0);
  } else {
    result1 = conjurePageRoutes.conjurePageRoute(arg0);
  }
  return result1;
}