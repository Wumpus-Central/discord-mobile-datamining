// === Module 17393: ActivityPanelNativeConstants ===

// Module 17393 (ActivityPanelNativeConstants)
import ActivityPanelConstants from "ActivityPanelConstants" /* 9743 */;
import size from "module_2" /* 2 */;

const obj = { top: { disable: false, override: ActivityPanelConstants.ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT } };
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelNativeConstants.tsx");

export const DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG = obj;
export const DEFAULT_PORTRAIT_LETTERBOX_CONFIG = { top: { disable: true }, bottom: { disable: true } };
export const DEFAULT_LANDSCAPE_PILLERBOX_CONFIG = { left: { disable: true }, right: { disable: true } };