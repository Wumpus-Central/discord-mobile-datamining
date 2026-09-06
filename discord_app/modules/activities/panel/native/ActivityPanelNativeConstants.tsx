// discord_app/modules/activities/panel/native/ActivityPanelNativeConstants.tsx
import ActivityPanelConstants from "../ActivityPanelConstants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let obj = { top: null };
obj = { disable: false, override: ActivityPanelConstants.ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT };
obj.top = obj;
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelNativeConstants.tsx");

export const DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG = obj;
export const DEFAULT_PORTRAIT_LETTERBOX_CONFIG = { top: { disable: true }, bottom: { disable: true } };
export const DEFAULT_LANDSCAPE_PILLERBOX_CONFIG = { left: { disable: true }, right: { disable: true } };
