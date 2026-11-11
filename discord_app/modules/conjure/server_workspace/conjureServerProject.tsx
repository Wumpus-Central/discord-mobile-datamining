// === Module 7173: conjureServerProject ===

// Module 7173 (conjureServerProject)
import ConjureActivity from "ConjureActivity" /* 7174 */;
import conjurePageRoutes from "conjurePageRoutes" /* 7175 */;
import GuildStore from "GuildStore" /* 5114 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6954 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/server_workspace/conjureServerProject.tsx");

export function conjureServerProjectGuildId(project) {
  if (null == project) {
    return null;
  } else if ("guild" === project.install_scope) {
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
export function getConjureServerProjects(id) {
  closure_0 = id;
  items = [...ConjureProjectStore.getOwnedProjects(), ...ConjureProjectStore.getSharedProjects(id)];
  return items.filter((install_scope) => {
    let result = null;
    if (null != install_scope) {
      if ("guild" === install_scope.install_scope) {
        result = ConjureActivity.conjureProjectGuildId(install_scope);
      } else {
        let guild_id = install_scope.guild_id;
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
    return result === closure_0;
  });
}
export function conjureProjectRoute(arg0) {
  const project = ConjureProjectStore.getProject(arg0);
  let result = null;
  if (null != project) {
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
  if (null != result) {
    let result1 = conjurePageRoutes.conjureServerProjectRoute(result, arg0);
  } else {
    result1 = conjurePageRoutes.conjurePageRoute(arg0);
  }
  return result1;
}