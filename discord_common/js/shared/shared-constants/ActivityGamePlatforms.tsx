// === Module 9718: ActivityGamePlatforms ===

// Module 9718 (ActivityGamePlatforms)
import size from "module_2" /* 2 */;

const obj = { CONNECT: new Set(["android", "desktop", "embedded", "ios", "meta_quest", "ps4", "ps5", "xbox"]), PLAYSTATION: null };
const set = new Set(["android", "desktop", "embedded", "ios", "meta_quest", "ps4", "ps5", "xbox"]);
obj.PLAYSTATION = new Set(["ps4", "ps5"]);
const result = size.fileFinishedImporting("../discord_common/js/shared/shared-constants/ActivityGamePlatforms.tsx");

export const ActivityGamePlatforms = { XBOX: "xbox", DESKTOP: "desktop", SAMSUNG: "samsung", IOS: "ios", ANDROID: "android", PLAYSTATION_4: "ps4", PLAYSTATION_5: "ps5", EMBEDDED: "embedded", META_QUEST: "meta_quest" };
export const ActivityGamePlatformsSets = obj;