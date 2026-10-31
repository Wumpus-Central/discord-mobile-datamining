// === Module 6845: ConjureProjectTypes ===

// Module 6845 (ConjureProjectTypes)
import size from "module_2" /* 2 */;

const frozen = Object.freeze({ APP_CHANNEL: 1, VOICE_CHANNEL: 2, PROFILE_WIDGET: 3, AUTOMOD: 4, BOT: 5, APPLICATION_COMMANDS: 6, OVERLAY: 7, ACTIVITY: 8 });
const frozen1 = Object.freeze({ GUILD_COLLABORATION: 1, PUBLIC: 2 });
const result = size.fileFinishedImporting("modules/conjure/projects/ConjureProjectTypes.tsx");

export const ConjureSupportedSurface = frozen;
export const MIN_PROJECT_NAME_LENGTH = 2;
export const MAX_PROJECT_NAME_LENGTH = 128;
export const MAX_APP_DESCRIPTION_LENGTH = 400;
export const MAX_PROJECT_COLLABORATOR_ROLES = 25;
export const ConjureProjectFlags = frozen1;
export function isProjectGuildCollaborationEnabled(flags) {
  let num = flags.flags;
  if (num == null) {
    num = 0;
  }
  return num & frozen1.GUILD_COLLABORATION;
}
export function isPreviewlessProject(project) {
  return null != project.preview_application_id && project.preview_application_id === project.application_id;
}
export function isProjectPublic(flags) {
  let num = flags.flags;
  if (num == null) {
    num = 0;
  }
  return num & frozen1.PUBLIC;
}
export function projectUsesAppChannels(project) {
  let supported_surfaces = project.supported_surfaces;
  if (supported_surfaces == null) {
    supported_surfaces = [];
  }
  let hasItem = supported_surfaces.includes(frozen.APP_CHANNEL);
  if (!hasItem) {
    let tmp2 = "guild" === project.install_scope;
    if (tmp2) {
      tmp2 = 0 === supported_surfaces.length;
    }
    hasItem = tmp2;
  }
  return hasItem;
}
export function projectSupportsVisibility(stateFromStores) {
  return null != stateFromStores.flags;
}
export function projectSupportsCollaboratorRoles(stateFromStores) {
  return null != stateFromStores.collaborator_role_ids;
}