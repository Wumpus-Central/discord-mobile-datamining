// discord_app/flow/Client.tsx
import set from "set" /* 2 */;
import create from "create" /* 1306 */;

const result = set.fileFinishedImporting("flow/Client.tsx");

export const GuildThemeSourcePreference = create.GuildThemeSourcePreference;
export const JumpType = { ANIMATED: "ANIMATED", INSTANT: "INSTANT" };
export const RunningProcessFullscreenType = { UNKNOWN: 0, [0]: "UNKNOWN", WINDOWED: 1, [1]: "WINDOWED", MAXIMIZED: 2, [2]: "MAXIMIZED", BORDERLESS_FULLSCREEN: 3, [3]: "BORDERLESS_FULLSCREEN", FULLSCREEN: 4, [4]: "FULLSCREEN", MINIMIZED: 5, [5]: "MINIMIZED" };
export const QueryUserNotificationState = { QUNS_UNKNOWN: -1, [-1]: "QUNS_UNKNOWN", QUNS_NOT_PRESENT: 1, [1]: "QUNS_NOT_PRESENT", QUNS_BUSY: 2, [2]: "QUNS_BUSY", QUNS_RUNNING_D3D_FULL_SCREEN: 3, [3]: "QUNS_RUNNING_D3D_FULL_SCREEN", QUNS_PRESENTATION_MODE: 4, [4]: "QUNS_PRESENTATION_MODE", QUNS_ACCEPTS_NOTIFICATIONS: 5, [5]: "QUNS_ACCEPTS_NOTIFICATIONS", QUNS_QUIET_TIME: 6, [6]: "QUNS_QUIET_TIME", QUNS_APP: 7, [7]: "QUNS_APP" };
export const DEFAULT_OVERLAY_OPTIONS = { compatibilityHook: false, warn: false, enabled: false, enabledOOP: false, allowHook: true, supportsOutOfProcessOverlay: false };