// discord_app/modules/activities/panel/native/ActivityPanelNativeConstants.tsx
import set from "../../../../../_runtime/00002_set.js";
import ActivityPanelModes from "../ActivityPanelConstants.tsx";

let obj = { top: null };
obj = { disable: false, override: ActivityPanelModes.ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT };
obj[0] = obj;
const result = set.fileFinishedImporting("modules/activities/panel/native/ActivityPanelNativeConstants.tsx");

export const DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG = obj;
export const DEFAULT_PORTRAIT_LETTERBOX_CONFIG = { top: { disable: true }, bottom: { disable: true } };
export const DEFAULT_LANDSCAPE_PILLERBOX_CONFIG = { left: { disable: true }, right: { disable: true } };