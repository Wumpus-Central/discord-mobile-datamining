// === Module 4532: StreamIssueReportReasons ===

// Module 4532 (StreamIssueReportReasons)
import obj132 from "obj132" /* 2 */;
import Notifications from "Notifications" /* 4533 */;

const set = new Set(["chrome.exe", "opera.exe", "firefox.exe", "brave.exe", "msedge.exe"]);
const result = obj132.fileFinishedImporting("modules/go_live/Constants.tsx");

export const StreamIssueReportReasons = { BLACK_SCREEN: "BLACK_SCREEN", BLURRY: "BLURRY", LAGGING: "LAGGING", OUT_OF_SYNC: "OUT_OF_SYNC", AUDIO_MISSING: "AUDIO_MISSING", AUDIO_POOR: "AUDIO_POOR", GAME_ISSUE: "GAME_ISSUE", STREAM_STOPPED: "STREAM_STOPPED", NO_ISSUE: "NO_ISSUE", OTHER: "OTHER", VIBES_OFF: "VIBES_OFF" };
export const DARWIN_SOUNDSHARE_VERSION = ">=19.0.0";
export const DARWIN_SCKIT_VERSION = ">=22.0.0";
export const DARWIN_SCKIT_AUDIO_VERSION = ">=22.0.0";
export const DARWIN_SCKIT_SINGLE_TYPE_VERSION = ">=24.0.0";
export const WINDOWS_SOUNDSHARE_NONHOOK_VERSION = ">=10.0.17763";
export const WINDOWS_SOUNDSHARE_HOOK_VERSION = "<10.0.22000";
export const WINDOWS_GRAPHICS_CAPTURE_NEW_APIS_SEMVER = ">=10.0.26100";
export const WINDOWS_SETTINGS_SOUND_DEVICE_DEEPLINK_SEMVER = ">=10.0.26100";
export const WINDOWS_GRAPHICS_CAPTURE_NEW_APIS_BUILD = 26100;
export const WINDOWS_GRAPHICS_CAPTURE_SEMVER = ">=10.0.22000";
export const WINDOWS_GRAPHICS_CAPTURE_BUILD = 22000;
export const StreamTypes = { GUILD: "guild", CALL: "call" };
export const STREAM_NOTIFY_GUILD_MAX_SIZE = Notifications.Notifications.StreamNotificationsGuildMaxSize;
export const GO_LIVE_NOTIFY_FRIENDS_MIN_MEMBER_COUNT = 30;
export const BROWSER_EXECUTABLES = set;