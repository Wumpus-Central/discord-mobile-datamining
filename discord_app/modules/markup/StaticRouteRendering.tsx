// === Module 5794: StaticRouteRendering ===

// Module 5794 (StaticRouteRendering)
import intl5 from "intl" /* 1126 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/StaticRouteRendering.tsx");

export const staticRouteToTranslation = function staticRouteToTranslation(id) {
  if ("home" !== id) {
    if ("guide" !== id) {
      if ("browse" === id) {
        const intl3 = intl5.intl;
        return intl3.string(intl5.t.et6wav);
      } else if ("customize" === id) {
        const intl2 = intl5.intl;
        return intl2.string(intl5.t.h9mGOP);
      } else if ("linked-roles" === id) {
        const intl = intl5.intl;
        return intl.string(intl5.t.ghtnss);
      } else {
        return null;
      }
    }
  }
  const intl4 = intl5.intl;
  return intl4.string(intl5.t.VbpLyU);
};
export const staticRouteToItemString = function staticRouteToItemString(GuildRoleStore, id, itemId, id2) {
  if ("linked-roles" === id) {
    if (null == id) {
      return null;
    } else {
      const role = GuildRoleStore.getRole(id, itemId);
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