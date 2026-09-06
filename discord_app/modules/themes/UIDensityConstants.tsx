// discord_app/modules/themes/UIDensityConstants.tsx
import set from "../../../_runtime/00002_set.js";
import create from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";

const result = set.fileFinishedImporting("modules/themes/UIDensityConstants.tsx");

export const RESPONSIVE_DENSITY_MEDIA_QUERY = "(min-width: 1024px) and (min-height: 820px)";
export const RESPONSIVE_DENSITY_FALLBACK = "cozy";
export const resolveUIDensity = function resolveUIDensity(arg0, arg1) {
  if (create.UIDensity.RESPONSIVE === arg0) {
    return arg1;
  } else if (tmp(1187).UIDensity.COZY === arg0) {
    return "cozy";
  } else if (tmp(1187).UIDensity.DEFAULT === arg0) {
    return "default";
  } else if (tmp(1187).UIDensity.COMPACT === arg0) {
    return "compact";
  } else {
    return "default";
  }
};
