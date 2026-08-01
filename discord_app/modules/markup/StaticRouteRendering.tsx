// === Module 4649: staticRouteToTranslation ===

// Module 4649 (staticRouteToTranslation)
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/markup/StaticRouteRendering.tsx");

export const staticRouteToTranslation = function staticRouteToTranslation(arg0) {
  if ("home" !== arg0) {
    if ("guide" !== arg0) {
      if ("browse" === arg0) {
        const intl3 = require(1236) /* getSystemLocale */.intl;
        return intl3.string(require(1236) /* getSystemLocale */.t.et6wav);
      } else if ("customize" === arg0) {
        const intl2 = require(1236) /* getSystemLocale */.intl;
        return intl2.string(require(1236) /* getSystemLocale */.t.h9mGOP);
      } else if ("linked-roles" === arg0) {
        const intl = require(1236) /* getSystemLocale */.intl;
        return intl.string(require(1236) /* getSystemLocale */.t.ghtnss);
      } else {
        return null;
      }
    }
  }
  const intl4 = require(1236) /* getSystemLocale */.intl;
  return intl4.string(require(1236) /* getSystemLocale */.t.VbpLyU);
};
export const staticRouteToItemString = function staticRouteToItemString(arg0, arg1, id) {
  if ("linked-roles" === arg0) {
    if (null == id) {
      return null;
    } else {
      role = role.getRole(id, arg1);
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