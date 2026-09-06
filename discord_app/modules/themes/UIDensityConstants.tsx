// === Module 9638: RESPONSIVE_DENSITY_MEDIA_QUERY ===

// Module 9638 (RESPONSIVE_DENSITY_MEDIA_QUERY)
import set from "set" /* 2 */;
import create from "create" /* 1187 */;

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