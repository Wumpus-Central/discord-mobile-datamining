// discord_app/modules/markup/StaticRouteRendering.tsx
import util from "../../intl/index.native.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/markup/StaticRouteRendering.tsx");

export const staticRouteToTranslation = function staticRouteToTranslation(id) {
  if ("home" !== id) {
    if ("guide" !== id) {
      if ("browse" === id) {
        const intl3 = util.intl;
        return intl3.string(util.t.et6wav);
      } else if ("customize" === id) {
        const intl2 = util.intl;
        return intl2.string(util.t.h9mGOP);
      } else if ("linked-roles" === id) {
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
export const staticRouteToItemString = function staticRouteToItemString(GuildRoleStore, id, itemId, id) {
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
