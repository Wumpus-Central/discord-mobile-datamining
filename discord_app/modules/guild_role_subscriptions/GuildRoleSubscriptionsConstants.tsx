// discord_app/modules/guild_role_subscriptions/GuildRoleSubscriptionsConstants.tsx
import set from "set" /* 2 */;
import sum from "sum" /* 505 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;

const SubscriptionIntervalTypes = GuildFeatures.SubscriptionIntervalTypes;
const items = [{ interval: SubscriptionIntervalTypes.DAY, interval_count: 1 }, { interval: SubscriptionIntervalTypes.DAY, interval_count: 7 }];
const combined = "https://" + sum.PRIMARY_DOMAIN + "/creators";
const frozen = Object.freeze({ MUST_READ_ARTICLES: "https://discord.com/creators/5-must-read-articles-for-beginners", CREATOR_TO_ADMIN_101: "https://discord.com/creators/creator-to-server-admin-101", CREATOR_TO_ADMIN_201: "https://discord.com/creators/creator-to-server-admin-201" });
const result = set.fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsConstants.tsx");

export const MAX_SUBSCRIPTION_TIERS = 3;
export const MAX_SUBSCRIPTION_TIER_NAME_LENGTH = 100;
export const MAX_SUBSCRIPTION_TIER_DESCRIPTION_LENGTH = 1500;
export const MAX_SUBSCRIPTION_BENEFIT_NAME_LENGTH = 80;
export const MAX_SUBSCRIPTION_BENEFIT_DESCRIPTION_LENGTH = 160;
export const GUILD_ROLE_SUBSCRIPTION_TIER_CREATION_KEY = "guild-role-subscription-tier-creation-key";
export const GUILD_ROLE_SUBSCRIPTION_GROUP_SETUP_KEY = "guild-role-subscription-group-setup-key";
export const RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY = "(max-width: 485px)";
export const RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY = "(max-height: 450px)";
export const GuildRoleSubscriptionsTierScenes = { GATING: "GATING", GROUP: "GROUP", DETAILS: "DETAILS", BENEFITS: "BENEFITS", CHANNEL_BENEFITS: "CHANNEL_BENEFITS", INTANGIBLE_BENEFITS: "INTANGIBLE_BENEFITS ", DESIGN: "DESIGN", CONFIRMATION: "CONFIRMATION", MEMBERS: "MEMBERS" };
export const GuildRoleSubscriptionBenefitTypes = { CHANNEL: 1, [1]: "CHANNEL", INTANGIBLE: 2, [2]: "INTANGIBLE" };
export const GuildRoleSubscriptionFormat = { SOME_CHANNELS: 0, [0]: "SOME_CHANNELS", ALL_CHANNELS: 1, [1]: "ALL_CHANNELS" };
export const TIER_TRIAL_INTERVALS = items;
export const UserGuildRoleSubscriptionRelationship = { NONE: 0, [0]: "NONE", IN_SUBSCRIPTION_SERVER: 1, [1]: "IN_SUBSCRIPTION_SERVER", SUBSCRIBED: 2, [2]: "SUBSCRIBED" };
export const CREATOR_REVENUE_PORTAL_URL = combined;
export const CREATOR_REVENUE_SHARE_PERCENTAGE = 90;
export const SERVER_SUBSCRIPTIONS_PREMIUM_CHECKLIST_EDUCATIONAL_URLS = frozen;