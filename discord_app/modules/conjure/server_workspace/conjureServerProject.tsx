// discord_app/modules/conjure/server_workspace/conjureServerProject.tsx
import ConjureActivity from "../projects/ConjureActivity.tsx";
import conjurePageRoutes from "../pages/conjurePageRoutes.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

require = fn;
const isProjectOwner = fn(7017).isProjectOwner;
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
export function conjureServerAppGuildId(project) {
  let install_scope;
  if (project != null) {
    install_scope = project.install_scope;
  }
  if ("guild" !== install_scope) {
    return null;
  } else {
    let result = null;
    if (null != project) {
      if ("guild" !== project.install_scope) {
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
    result = ConjureActivity.conjureProjectGuildId(project);
  }
}
export function isConjureServerProjectIn(project, id) {
  let tmp = null != project;
  if (tmp) {
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
    let tmp9 = result === id;
    if (!tmp9) {
      let tmp11 = isProjectOwner(project);
      if (tmp11) {
        const guild_ids = project.guild_ids;
        let hasItem;
        if (guild_ids != null) {
          hasItem = guild_ids.includes(id);
        }
        tmp11 = true === hasItem;
      }
      tmp9 = tmp11;
    }
    tmp = tmp9;
  }
  return tmp;
}
export function getConjureServerProjects(id) {
  closure_0 = id;
  items = [...ConjureProjectStore.getOwnedProjects(), ...ConjureProjectStore.getSharedProjects(id)];
  return items.filter((install_scope) => {
    let tmp2 = null != install_scope;
    if (tmp2) {
      let result = null;
      if (null != install_scope) {
        if ("guild" === install_scope.install_scope) {
          result = ConjureActivity.conjureProjectGuildId(install_scope);
        } else {
          let guild_id = install_scope.guild_id;
          if (guild_id == null) {
            guild_id = null;
          }
          let tmp5 = null;
          if (null != guild_id) {
            tmp5 = null;
            if (null != GuildStore.getGuild(guild_id)) {
              tmp5 = guild_id;
            }
          }
          result = tmp5;
        }
      }
      let tmp9 = result === closure_0;
      if (!tmp9) {
        let tmp11 = isProjectOwner(install_scope);
        if (tmp11) {
          const guild_ids = install_scope.guild_ids;
          let hasItem;
          if (guild_ids != null) {
            hasItem = guild_ids.includes(closure_0);
          }
          tmp11 = true === hasItem;
        }
        tmp9 = tmp11;
      }
      tmp2 = tmp9;
    }
    return tmp2;
  });
}
export function conjureProjectRoute(arg0) {
  const project = ConjureProjectStore.getProject(arg0);
  const guildId = SelectedGuildStore.getGuildId();
  if (null != guildId) {
    let tmp13 = null != project;
    if (tmp13) {
      let result = null;
      if (null != project) {
        if ("guild" === project.install_scope) {
          result = ConjureActivity.conjureProjectGuildId(project);
        } else {
          let guild_id = project.guild_id;
          if (guild_id == null) {
            guild_id = null;
          }
          let tmp5 = null;
          if (null != guild_id) {
            tmp5 = null;
            if (null != GuildStore.getGuild(guild_id)) {
              tmp5 = guild_id;
            }
          }
          result = tmp5;
        }
      }
      let tmp9 = result === guildId;
      if (!tmp9) {
        let tmp11 = isProjectOwner(project);
        if (tmp11) {
          const guild_ids = project.guild_ids;
          let hasItem;
          if (guild_ids != null) {
            hasItem = guild_ids.includes(guildId);
          }
          tmp11 = true === hasItem;
        }
        tmp9 = tmp11;
      }
      tmp13 = tmp9;
    }
    if (tmp13) {
      if (null != guildId) {
        let result1 = conjurePageRoutes.conjureServerProjectRoute(guildId, arg0);
      } else {
        result1 = conjurePageRoutes.conjurePageRoute(arg0);
      }
      return result1;
    }
  }
  let result2 = null;
  if (null != project) {
    if ("guild" !== project.install_scope) {
      let guild_id1 = project.guild_id;
      if (guild_id1 == null) {
        guild_id1 = null;
      }
      let tmp17 = null;
      if (null != guild_id1) {
        tmp17 = null;
        if (null != GuildStore.getGuild(guild_id1)) {
          tmp17 = guild_id1;
        }
      }
      result2 = tmp17;
    }
  }
  result2 = ConjureActivity.conjureProjectGuildId(project);
}
