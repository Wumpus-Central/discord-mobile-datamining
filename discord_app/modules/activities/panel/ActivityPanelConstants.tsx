// discord_app/modules/activities/panel/ActivityPanelConstants.tsx
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/activities/panel/ActivityPanelConstants.tsx");

export const ActivityPanelModes = { DISCONNECTED: "disconnected", LAUNCHING_WITH_ORIENTATION_CHANGE: "launching_with_orientation_change", PANEL: "panel", PIP: "pip", ACTIVITY_POPOUT_WINDOW: "activity_popout_window" };
export const SCREEN_HEADER_HEIGHT = 64;
export const ACTIVITY_PANEL_LAYOUT_PHYSICS = { stiffness: 320, mass: 0.25, damping: 15, overshootClamping: true };
export const FocusedActivityLayouts = { NO_CHAT: 0, [0]: "NO_CHAT", RESIZABLE: 1, [1]: "RESIZABLE" };
export const LANDSCAPE_ACTIVITY_ASPECT_RATIO = 1.7777777777777777;
export const ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT = 48;
export const LANDSCAPE_IFRAME_HORIZONTAL_MARGIN = 64;
export const ACTIVITY_PIP_SIZE = { width: 120, height: 120 };
export const ACTIVITY_LAYOUT_PHYSICS_GESTURE = { stiffness: 150, mass: 0.25, damping: 40, overshootClamping: true };
export const ACTIVITY_LAYOUT_PHYSICS_DEFAULT = { stiffness: 150, mass: 0.35, damping: 40, overshootClamping: true };