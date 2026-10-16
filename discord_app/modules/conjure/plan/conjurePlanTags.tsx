// discord_app/modules/conjure/plan/conjurePlanTags.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanTags.tsx");

export const planDeclaresSurface = function planDeclaresSurface(supported_surfaces, APPLICATION_COMMANDS) {
  supported_surfaces = supported_surfaces.supported_surfaces;
  let hasItem;
  if (supported_surfaces != null) {
    hasItem = supported_surfaces.includes(APPLICATION_COMMANDS);
  }
  return true === hasItem;
};
