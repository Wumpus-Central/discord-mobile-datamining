// === Module 11726: conjureSharedProjectHome ===

// Module 11726 (conjureSharedProjectHome)
import ConjureProjectTypes from "ConjureProjectTypes" /* 6903 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/conjureSharedProjectHome.tsx");

export function isSharedProjectHomeServer(install_scope, guildId) {
  let tmp = "guild" === install_scope.install_scope;
  if (tmp) {
    tmp = null != install_scope.guild_id;
  }
  if (tmp) {
    tmp = null != guildId;
  }
  if (tmp) {
    tmp = install_scope.guild_id === guildId;
  }
  return tmp;
}
export function canLaunchSharedProject(install_scope, guildId) {
  let hasItem = "guild" === install_scope.install_scope;
  if (hasItem) {
    hasItem = null != install_scope.guild_id;
  }
  if (hasItem) {
    hasItem = null != guildId;
  }
  if (hasItem) {
    hasItem = install_scope.guild_id === guildId;
  }
  if (hasItem) {
    let supported_surfaces = install_scope.supported_surfaces;
    if (supported_surfaces == null) {
      supported_surfaces = [];
    }
    hasItem = supported_surfaces.includes(ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY);
  }
  return hasItem;
}