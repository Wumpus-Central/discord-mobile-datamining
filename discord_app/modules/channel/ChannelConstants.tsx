// discord_app/modules/channel/ChannelConstants.tsx
import set from "set" /* 2 */;

let obj = { VIBEGRATIONS: "conjuring", ROLE_SUBSCRIPTIONS: "role-subscriptions", SERVER_MONETIZATION_ONBOARDING: "server-monetization-onboarding", GAME_SHOP: "game-shop", GUILD_SHOP: "shop", MEMBER_APPLICATIONS: "member-applications", GUILD_HOME: "@home", CHANNEL_BROWSER: "channel-browser", GUILD_ONBOARDING: "onboarding", CUSTOMIZE_COMMUNITY: "customize-community", MEMBER_SAFETY: "member-safety", GUILD_BOOSTS: "boosts", GAME_SERVERS: "game-servers", REPORT_TO_MOD: "report-to-mod", GUILD_OFFICIAL_MESSAGES: "official-messages", GUILD_SPACE: "guild-space" };
let set = new Set(Object.values(obj));
obj = { GUILD_HOME: "home", SERVER_GUIDE: "guide", CHANNEL_BROWSER: "browse", CUSTOMIZE_COMMUNITY: "customize", LINKED_ROLES: "linked-roles" };
const frozen = Object.freeze({ GUILD_FEED_REMOVED: 1, PINNED: 2, ACTIVE_CHANNELS_REMOVED: 4, REQUIRE_TAG: 16, IS_SPAM: 32, IS_GUILD_RESOURCE_CHANNEL: 128, CLYDE_AI: 256, IS_SCHEDULED_FOR_DELETION: 512, IS_MEDIA_CHANNEL: 1024, SUMMARIES_DISABLED: 2048, IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL: 8192, IS_BROADCASTING: 16384, HIDE_MEDIA_DOWNLOAD_OPTIONS: 32768, IS_JOIN_REQUEST_INTERVIEW_CHANNEL: 65536, OBFUSCATED: 131072, IS_MODERATOR_REPORT_CHANNEL: 524288, IS_SPOILER_CHANNEL: 2097152, IS_GAME_INVITES_CHANNEL: 4194304, HAS_ONLY_SYSTEM_MESSAGES: 8388608 });
const result = set.fileFinishedImporting("modules/channel/ChannelConstants.tsx");

export const StaticChannelRoute = obj;
export const StaticChannelRoutes = set;
export const isStaticChannelRoute = function isStaticChannelRoute(channelId) {
  return set.has(channelId);
};
export const buildGuildStaticChannelId = function buildGuildStaticChannelId(arg0, arg1) {
  return "" + arg0 + "-" + arg1;
};
export const isGuildHomeChannel = function isGuildHomeChannel(channelId) {
  let hasItem;
  if (channelId != null) {
    hasItem = channelId.includes(obj.GUILD_HOME);
  }
  return hasItem;
};
export const ChannelFlags = frozen;
export const MAX_CHANNEL_TOPIC_LENGTH = 1024;
export const MAX_FORUM_CHANNEL_TOPIC_LENGTH = 4096;
export const StaticChannelId = obj;
export const StaticChannelIds = new Set(Object.values(obj));