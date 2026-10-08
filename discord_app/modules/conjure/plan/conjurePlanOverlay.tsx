// discord_app/modules/conjure/plan/conjurePlanOverlay.tsx
import ConjureTypes from "../ConjureTypes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanOverlay.tsx");

export const planSupportsOverlay = function planSupportsOverlay(supported_surfaces) {
  supported_surfaces = supported_surfaces.supported_surfaces;
  let hasItem;
  if (supported_surfaces != null) {
    hasItem = supported_surfaces.includes(ConjureTypes.ConjureSupportedSurface.OVERLAY);
  }
  return true === hasItem;
};
