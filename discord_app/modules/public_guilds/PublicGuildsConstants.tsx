// === Module 7912: PUBLIC_SUCCESS_MODAL_SEEN_KEY ===

// Module 7912 (PUBLIC_SUCCESS_MODAL_SEEN_KEY)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import importAllResult from "fromString" /* 506 */;

const items = [, , , , , , , , , , , , , ];
({ ADMINISTRATOR: arr[0], KICK_MEMBERS: arr[1], BAN_MEMBERS: arr[2], MANAGE_GUILD: arr[3], MANAGE_CHANNELS: arr[4], MANAGE_ROLES: arr[5], MANAGE_MESSAGES: arr[6], MANAGE_GUILD_EXPRESSIONS: arr[7], CREATE_GUILD_EXPRESSIONS: arr[8], MANAGE_EVENTS: arr[9], CREATE_EVENTS: arr[10], MODERATE_MEMBERS: arr[11], MENTION_EVERYONE: arr[12], MANAGE_OFFICIAL_MESSAGES: arr[13] } = ME.Permissions);
const items1 = [...items];
const applyResult = importAllResult.combine.apply(items1);
const result = set.fileFinishedImporting("modules/public_guilds/PublicGuildsConstants.tsx");

export const PUBLIC_SUCCESS_MODAL_SEEN_KEY = "publicSuccessModalSeen";
export const PUBLIC_GUILD_ANNOUNCEMENTS_GUILD_ID = "667560445975986187";
export const PUBLIC_GUILD_UPDATES_WEBHOOK_USER_ID = "669627189624307712";
export const CREATE_NEW_CHANNEL_VALUE = "1";
export const MODERATOR_PERMISSIONS = items;
export const MODERATOR_PERMISSIONS_FLAG = applyResult;
export const COMMUNITY_UPSELL_MINIMUM_GUILD_SIZE = 1000;
export const ENABLE_COMMUNITY_FLOW_MODAL_KEY = "Enable Community Modal";
export const EnableCommunityModalSteps = { INTRO: "intro", SAFETY_CHECK: "safety_check", BASICS: "basics", FINISH: "finish", RULES: "rules" };