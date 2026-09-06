// === Module 17018: ActivityPanelNativeConstants ===

// Module 17018 (ActivityPanelNativeConstants)
import ActivityPanelConstants from "ActivityPanelConstants" /* 9505 */;
import size from "module_2" /* 2 */;

let obj = { top: null };
obj = { disable: false, override: ActivityPanelConstants.ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT };
obj.top = obj;
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelNativeConstants.tsx");

export const DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG = obj;
export const DEFAULT_PORTRAIT_LETTERBOX_CONFIG = { top: { disable: true }, bottom: { disable: true } };
export const DEFAULT_LANDSCAPE_PILLERBOX_CONFIG = { left: { disable: true }, right: { disable: true } };