// === Module 16334: DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG ===

// Module 16334 (DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG)
import set from "set" /* 2 */;
import ActivityPanelModes from "ActivityPanelModes" /* 8740 */;

let obj = { top: null };
obj = { disable: false, override: ActivityPanelModes.ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT };
obj[0] = obj;
const result = set.fileFinishedImporting("modules/activities/panel/native/ActivityPanelNativeConstants.tsx");

export const DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG = obj;
export const DEFAULT_PORTRAIT_LETTERBOX_CONFIG = { top: { disable: true }, bottom: { disable: true } };
export const DEFAULT_LANDSCAPE_PILLERBOX_CONFIG = { left: { disable: true }, right: { disable: true } };