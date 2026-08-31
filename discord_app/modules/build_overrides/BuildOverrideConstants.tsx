// === Module 4364: BUILD_OVERRIDE_TARGET_NAMES ===

// Module 4364 (BUILD_OVERRIDE_TARGET_NAMES)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/build_overrides/BuildOverrideConstants.tsx");
const items = [{ id: "1hr", value: 3600, label: "1 Hour" }, { id: "1day", value: 86400, label: "1 Day" }, { id: "3days", value: 259200, label: "3 Days" }, { id: "1week", value: 604800, label: "1 Week" }, { id: "2weeks", value: 1209600, label: "2 Weeks" }, { id: "3weeks", value: 1814400, label: "3 Weeks" }, { id: "1month", value: 2628000, label: "1 Month" }];
const items1 = [{ id: "all", value: "all", label: "All" }, { id: "canary", value: "canary", label: "Canary" }, { id: "ptb", value: "ptb", label: "PTB" }, { id: "stable", value: "stable", label: "Stable" }, { id: "staging", value: "staging", label: "Staging" }];

export const BUILD_OVERRIDE_TARGET_NAMES = { discord_marketing: "Discord Marketing", discord_web: "Discord Web", discord_ios: "Discord iOS", discord_android: "Discord Android", discord_developers: "Discord Developers" };
export const BUILD_OVERRIDE_EXPIRATION_OPTIONS = items;
export const BUILD_OVERRIDE_RELEASE_CHANNEL_OPTIONS = items1;
export const BUILD_OVERRIDE_COOKIE_NAME = "buildOverride";