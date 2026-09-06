// === Module 5023: StaticRouteRendering ===

// Module 5023 (StaticRouteRendering)
import util from "util" /* 1114 */;
import GuildRoleStore from "GuildRoleStore" /* 2015 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/StaticRouteRendering.tsx");

export const staticRouteToTranslation = function staticRouteToTranslation(arg0) {
  if ("home" !== arg0) {
    if ("guide" !== arg0) {
      if ("browse" === arg0) {
        const intl3 = util.intl;
        return intl3.string(util.t.et6wav);
      } else if ("customize" === arg0) {
        const intl2 = util.intl;
        return intl2.string(util.t.h9mGOP);
      } else if ("linked-roles" === arg0) {
        const intl = util.intl;
        return intl.string(util.t.ghtnss);
      } else {
        return null;
      }
    }
  }
  const intl4 = util.intl;
  return intl4.string(util.t.VbpLyU);
};
export const staticRouteToItemString = function staticRouteToItemString(arg0, arg1, id) {
  if ("linked-roles" === arg0) {
    if (null == id) {
      return null;
    } else {
      const role = GuildRoleStore.getRole(id, arg1);
      let name = null;
      if (null != role) {
        const tags = role.tags;
        let guild_connections;
        if (tags != null) {
          guild_connections = tags.guild_connections;
        }
        name = null;
        if (null === guild_connections) {
          name = role.name;
        }
      }
      return name;
    }
  } else {
    return null;
  }
};