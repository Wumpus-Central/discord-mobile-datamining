// === Module 676: ME ===

// Module 676 (ME)
import module_16 from "module_16";
import INVITE from "INVITE";
import sum from "sum";
import getAuthenticationPath from "getAuthenticationPath";
import int2hslRaw from "int2hslRaw";
import int2hexResult from "module_10070709";
import powResult from "MAX_FAVORITES";
import powResult1 from "MAX_FAVORITES";
import powResult2 from "MAX_FAVORITES";
import importAllResult from "fromString";
import importAllResult1 from "fromString";
import importAllResult2 from "fromString";
import importAllResult3 from "fromString";
import importAllResult4 from "fromString";
import importAllResult5 from "fromString";
import importAllResult6 from "fromString";
import importAllResult7 from "fromString";
import importAllResult8 from "fromString";
import importAllResult9 from "fromString";
import importAllResult10 from "fromString";
import importAllResult11 from "fromString";
import importAllResult12 from "fromString";
import importAllResult13 from "fromString";
import importAllResult14 from "fromString";
import importAllResult15 from "fromString";
import importAllResult16 from "fromString";
import importAllResult17 from "fromString";
import importAllResult18 from "fromString";
import importAllResult19 from "fromString";
import importAllResult20 from "fromString";
import set from "MAX_FAVORITES";
import sum from "sum";

let EMPTY_NUX_SERVER;
let FAVORITES;
let MOBILE_GUILD_UPSELL_LIST;
let NOTIFICATIONS_INBOX;
let Routes;
const ME = INVITE.ME;
({ Routes, FAVORITES, NOTIFICATIONS_INBOX, EMPTY_NUX_SERVER, MOBILE_GUILD_UPSELL_LIST } = INVITE);
const frozen = Object.freeze({ SUPPRESS_JOIN_NOTIFICATIONS: 1, SUPPRESS_PREMIUM_SUBSCRIPTIONS: 2, SUPPRESS_GUILD_REMINDER_NOTIFICATIONS: 4, SUPPRESS_JOIN_NOTIFICATION_REPLIES: 8, SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS: 16, SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES: 32, SUPPRESS_CHANNEL_PROMPT_DEADCHAT: 128, SUPPRESS_VOICE_SESSION_NOTIFICATIONS: 512 });
const items = [require("set").MessageTypes.REPLY, require("set").MessageTypes.THREAD_STARTER_MESSAGE, require("set").MessageTypes.CONTEXT_MENU_COMMAND];
let set = new Set(items);
let obj = { JOIN: 1, [1]: "JOIN", LISTEN: 3, [3]: "LISTEN", WATCH: 4, [4]: "WATCH", JOIN_REQUEST: 5, [5]: "JOIN_REQUEST", STREAM_REQUEST: 6, [6]: "STREAM_REQUEST" };
obj = {
  USER(arg0) {
    return "/users/" + arg0;
  },
  USER_RELATIONSHIPS(closure_0) {
    let tmp = closure_0;
    if (closure_0 === undefined) {
      tmp = ME;
    }
    return "/users/" + tmp + "/relationships";
  },
  USER_RELATIONSHIP(userId) {
    return "/users/@me/relationships/" + userId;
  },
  USER_BULK_RELATIONSHIPS: "/users/@me/relationships/bulk",
  USER_GAME_RELATIONSHIP(c0, applicationId) {
    return "/users/@me/game-relationships/" + c0 + "/" + applicationId;
  },
  USER_PROFILE(c8) {
    return "/users/" + c8 + "/profile";
  },
  USER_BADGES(arg0) {
    return "/users/" + arg0 + "/badges";
  },
  USER_BADGE(arg0, arg1) {
    return "/users/" + arg0 + "/badges/" + arg1;
  },
  USER_PROFILE_WIDGETS: "/users/@me/widgets",
  USER_PROFILE_SUGGESTED_GAMES: "/users/@me/widgets/suggested-games",
  USER_PROFILE_WIDGET_ASSET_UPLOAD: "/users/@me/widgets/assets/upload",
  USER_PROFILE_WIDGET_CLIP_UPLOAD: "/users/@me/widgets/clips/upload",
  WIDGET_CONFIGS_FEATURED: "/widget-configs/featured",
  WIDGET_CONFIGS_DEVELOPER: "/widget-configs/developer",
  APPLICATION_WIDGET_CONFIGS(closure_0) {
    return "/applications/" + closure_0 + "/widget-configs";
  },
  USER_GUILD_PROFILE(bannerSurface, c8) {
    return "/guilds/" + bannerSurface + "/profile/" + c8;
  },
  USER_CHANNELS: "/users/@me/channels",
  USER_CHANNELS_BULK_LEAVE: "/users/@me/channels/bulk-leave",
  USER_GROUP_DM_SHELL: "/users/@me/channels/group-dm-shell",
  USER_WISHLIST(outer1_0) {
    return "/wishlists/" + outer1_0;
  },
  USER_WISHLIST_PATCH(outer1_0) {
    return "/users/@me/wishlists/" + outer1_0;
  },
  USER_WISHLIST_ITEMS: "/users/@me/wishlist/items",
  USER_WISHLIST_ITEM(outer1_0, outer1_1) {
    return "/users/@me/wishlists/" + outer1_0 + "/items/" + outer1_1;
  },
  USER_APPLICATION_IDENTITIES(arg0) {
    return "/users/" + arg0 + "/application-identities";
  },
  USER_WISHLIST_RECOMMENDATIONS: "/wishlist/gift-recommendations",
  GIFT_INTENT_DISMISSALS: "/users/@me/gift-intent-dismissals",
  SELF_APPLICATION_IDENTITY_CONFIG(c0, c1) {
    return "/users/@me/application-identities/" + c0 + "/" + c1 + "/config";
  },
  DM_CHANNEL(outer1_0) {
    return "/users/@me/dms/" + outer1_0;
  },
  USER_SETTINGS_PROTO(type) {
    return "/users/@me/settings-proto/" + type;
  },
  USER_ACTIVITY_METADATA(arg0, session_id, application_id) {
    let num = application_id;
    if (application_id == null) {
      num = 0;
    }
    return "/users/" + arg0 + "/sessions/" + session_id + "/activities/" + num + "/metadata";
  },
  USER_ACTIVITY_JOIN(userId, sessionId, id) {
    return "/users/" + userId + "/sessions/" + sessionId + "/activities/" + id + "/" + obj.JOIN;
  },
  USER_ACTIVITY_STATISTICS: "/users/@me/activities/statistics/applications",
  USER_ACTIVITY_SUBSCRIBE: "/users/@me/activities/subscribe",
  APPLICATION_ACTIVITY_STATISTICS(arg0) {
    return "/activities/statistics/applications/" + arg0;
  },
  ACTIVITIES: "/activities",
  NETWORKING_TOKEN: "/networking/token",
  USER_GAMES_NOTIFICATIONS: "/users/@me/settings/game-notifications",
  USER_GAMES_NOTIFICATIONS_OVERRIDES: "/users/@me/settings/game-notifications/overrides",
  UNVERIFIED_APPLICATIONS: "/unverified-applications",
  UNVERIFIED_APPLICATIONS_ICONS: "/unverified-applications/icons",
  PLATFORM_APPLICATION: "/platform-application",
  ROBLOX_APPLICATIONS_SUPPLEMENTAL_DATA: "/roblox-applications-supplemental-data",
  GUILD_FEATURE_ACK(arg0, outgoingAck, type) {
    return "/guilds/" + arg0 + "/ack/" + type + "/" + outgoingAck;
  },
  USER_NON_CHANNEL_ACK(outgoingAck, type) {
    return "/users/@me/" + type + "/" + outgoingAck + "/ack";
  },
  BULK_ACK: "/read-states/ack-bulk",
  DM_SETTINGS_UPSELL_ACK(guildId) {
    return "/users/@me/guilds/" + guildId + "/member/ack-dm-upsell-settings";
  },
  GUILD_CHANNELS(outer1_0) {
    return "/guilds/" + outer1_0 + "/channels";
  },
  GUILD_MEMBERS(arg0) {
    return "/guilds/" + arg0 + "/members";
  },
  GUILD_MEMBER(guildId, outer1_1) {
    return "/guilds/" + guildId + "/members/" + outer1_1;
  },
  GUILD_MEMBER_NICK(guildId, closure_4) {
    return "/guilds/" + guildId + "/members/" + closure_4 + "/nick";
  },
  GUILD_MEMBER_AVATAR(guildId, userId, avatar, arg3) {
    return "/guilds/" + guildId + "/users/" + userId + "/avatars/" + avatar + "." + arg3;
  },
  SET_GUILD_MEMBER(closure_0) {
    return "/guilds/" + closure_0 + "/members/@me";
  },
  GAME_NOTIFICATION_SETTINGS: "/users/@me/notification-settings/muted-games",
  GAME_NOTIFICATION_SETTING_UPDATE(arg0) {
    return "/users/@me/notification-settings/muted-games/" + arg0;
  },
  GUILD_JOIN(closure_0) {
    return "/guilds/" + closure_0 + "/members/@me";
  },
  GUILD_LEAVE(outer1_0) {
    return "/users/@me/guilds/" + outer1_0;
  },
  GUILD_INTEGRATIONS(closure_0) {
    return "/guilds/" + closure_0 + "/integrations";
  },
  GUILD_INTEGRATION(guildId, id) {
    return "/guilds/" + guildId + "/integrations/" + id;
  },
  GUILD_INTEGRATION_SYNC(guildId, id) {
    return "/guilds/" + guildId + "/integrations/" + id + "/sync";
  },
  GUILD_MIGRATE_COMMAND_SCOPE(arg0) {
    return "/guilds/" + arg0 + "/migrate-command-scope";
  },
  GUILD_BANS_SEARCH(c0) {
    return "/guilds/" + c0 + "/bans/search";
  },
  GUILD_BANS(c0) {
    return "/guilds/" + c0 + "/bans";
  },
  GUILD_BAN(id, id2) {
    return "/guilds/" + id + "/bans/" + id2;
  },
  GUILD_ROLES(outer1_0) {
    return "/guilds/" + outer1_0 + "/roles";
  },
  GUILD_ROLE_MEMBER_COUNTS(closure_0) {
    return "/guilds/" + closure_0 + "/roles/member-counts";
  },
  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS(c0) {
    return "/guilds/" + c0 + "/roles/connections-configurations";
  },
  GUILD_ROLE_MEMBER_IDS(closure_0, callback) {
    return "/guilds/" + closure_0 + "/roles/" + callback + "/member-ids";
  },
  GUILD_ROLE(c0, c1) {
    return "/guilds/" + c0 + "/roles/" + c1;
  },
  GUILD_ROLE_MEMBERS(id, id2) {
    return "/guilds/" + id + "/roles/" + id2 + "/members";
  },
  GUILD_ROLE_CONNECTIONS_ELIGIBILITY(guildId, id) {
    return "/guilds/" + guildId + "/roles/" + id + "/connections/eligibility";
  },
  GUILD_ROLE_CONNECTIONS_ASSIGN(c0, c1) {
    return "/guilds/" + c0 + "/roles/" + c1 + "/connections/assign";
  },
  GUILD_ROLE_CONNECTIONS_UNASSIGN(c0, c1) {
    return "/guilds/" + c0 + "/roles/" + c1 + "/connections/unassign";
  },
  GUILD_ONBOARDING(guildId) {
    return "/guilds/" + guildId + "/onboarding";
  },
  GUILD_ONBOARDING_ALLOWED_APPLICATIONS(arg0) {
    return "/guilds/" + arg0 + "/onboarding/allowed-applications";
  },
  GUILD_ONBOARDING_PROMPT(arg0, arg1) {
    return "/guilds/" + arg0 + "/onboarding-prompts/" + arg1;
  },
  GUILD_ONBOARDING_RESPONSES(guildId) {
    return "/guilds/" + guildId + "/onboarding-responses";
  },
  ROLE_ICON(id, icon) {
    return "/roles/" + id + "/icons/" + icon + ".png";
  },
  GUILD_INSTANT_INVITES(id) {
    return "/guilds/" + id + "/invites";
  },
  GUILD_WIDGET(arg0) {
    return "/guilds/" + arg0 + "/widget";
  },
  GUILD_VANITY_URL(id) {
    return "/guilds/" + id + "/vanity-url";
  },
  GUILD_MFA(guildId) {
    return "/guilds/" + guildId + "/mfa";
  },
  GUILD_PRUNE(c0) {
    return "/guilds/" + c0 + "/prune";
  },
  GUILD_PRUNE_V2(c0) {
    return "/guilds/" + c0 + "/prune/v2";
  },
  GUILD_ICON(arg0, arg1) {
    let str = arg2;
    if (arg2 === undefined) {
      str = "jpg";
    }
    return "/guilds/" + arg0 + "/icons/" + arg1 + "." + str;
  },
  GUILD_TEMPLATE_ICON(arg0, arg1) {
    let str = arg2;
    if (arg2 === undefined) {
      str = "jpg";
    }
    return "/templates/" + arg0 + "/icons/" + arg1 + "." + str;
  },
  GUILD_DISCOVERY_CHECKLIST(arg0) {
    return "/guilds/" + arg0 + "/discovery-checklist";
  },
  GUILD_DISCOVERY_REQUIREMENTS(arg0) {
    return "/guilds/" + arg0 + "/discovery-requirements";
  },
  GUILD_EMOJIS(guildId) {
    return "/guilds/" + guildId + "/emojis";
  },
  GUILD_OFFICIAL_MESSAGES(arg0) {
    return "/guilds/" + arg0 + "/messages/official";
  },
  GUILD_EMOJI(c0, c1) {
    return "/guilds/" + c0 + "/emojis/" + c1;
  },
  GUILD_AUDIT_LOG(arg0) {
    return "/guilds/" + arg0 + "/audit-logs";
  },
  GUILD_ANALYTICS_OVERVIEW(arg0) {
    return "/guilds/" + arg0 + "/analytics/overview";
  },
  GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW(arg0) {
    return "/guilds/" + arg0 + "/analytics/engagement/overview";
  },
  GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW(arg0) {
    return "/guilds/" + arg0 + "/analytics/growth-activation/overview";
  },
  GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION(arg0) {
    return "/guilds/" + arg0 + "/analytics/growth-activation/retention";
  },
  GUILD_TOP_GAMES(closure_0) {
    return "/guilds/" + closure_0 + "/top-games";
  },
  GUILD_TOP_READ_CHANNELS(arg0) {
    return "/guilds/" + arg0 + "/top-read-channels";
  },
  EMOJI(id, arg1) {
    return "/emojis/" + id + "." + arg1;
  },
  EMOJI_GUILD_DATA(arg0) {
    return "/emojis/" + arg0 + "/guild";
  },
  EMOJI_SOURCE_DATA(arg0) {
    return "/emojis/" + arg0 + "/source";
  },
  TOP_EMOJIS_FOR_GUILD(guildId) {
    return "/guilds/" + guildId + "/top-emojis";
  },
  GUILD_SPLASH(id, splash) {
    return "/guilds/" + id + "/splashes/" + splash + ".jpg";
  },
  GUILD_DISCOVERY_SPLASH(id, splash) {
    return "/guilds/" + id + "/discovery-splashes/" + splash + ".jpg";
  },
  GUILD_BANNER(id, banner, arg2) {
    return "/guilds/" + id + "/banners/" + banner + "." + arg2;
  },
  GUILD_HOME_SETTINGS(closure_0) {
    return "/guilds/" + closure_0 + "/new-member-welcome";
  },
  GUILD_CONFIG_GATES(arg0) {
    return "/guilds/" + arg0 + "/config-gates";
  },
  RESOURCE_CHANNEL(arg0, arg1) {
    return "/guilds/" + arg0 + "/resource-channels/" + arg1;
  },
  NEW_MEMBER_ACTION(arg0, arg1) {
    return "/guilds/" + arg0 + "/new-member-actions/" + arg1;
  },
  GUILD_RESOURCE_CHANNELS_ICON(arg0, arg1) {
    let str = arg2;
    if (arg2 === undefined) {
      str = "jpg";
    }
    return "/guilds/" + arg0 + "/avatars/" + arg1 + "." + str;
  },
  GUILD_NEW_MEMBER_ACTIONS_ICON(arg0, arg1) {
    let str = arg2;
    if (arg2 === undefined) {
      str = "jpg";
    }
    return "/guilds/" + arg0 + "/avatars/" + arg1 + "." + str;
  },
  GUILD_MEMBER_ACTIONS(closure_0) {
    return "/guilds/" + closure_0 + "/new-member-actions";
  },
  GUILD_MEMBER_ACTION_UPDATE(c0, c1) {
    return "/guilds/" + c0 + "/new-member-action/" + c1;
  },
  GUILD_HOME_HEADER(id, homeHeader) {
    return "/guilds/" + id + "/home-headers/" + homeHeader + ".jpg";
  },
  GUILD_WELCOME_SCREEN(closure_0) {
    return "/guilds/" + closure_0 + "/welcome-screen";
  },
  GUILD_MEMBER_VERIFICATION(arg0) {
    return "/guilds/" + arg0 + "/member-verification";
  },
  USER_JOIN_REQUEST_GUILDS: "/users/@me/join-request-guilds",
  GUILD_MEMBER_REQUEST_TO_JOIN(closure_0) {
    return "/guilds/" + closure_0 + "/requests/@me";
  },
  GUILD_JOIN_REQUESTS(c0) {
    return "/guilds/" + c0 + "/requests";
  },
  GUILD_JOIN_REQUEST(arg0, arg1) {
    return "/guilds/" + arg0 + "/requests/" + arg1;
  },
  GUILD_JOIN_REQUEST_ACK(closure_0, closure_1) {
    return "/guilds/" + closure_0 + "/requests/" + closure_1 + "/ack";
  },
  GUILD_JOIN_REQUESTS_FOR_USER(closure_0, closure_1) {
    return "/guilds/" + closure_0 + "/requests/users/" + closure_1;
  },
  JOIN_REQUEST(closure_0) {
    return "/join-requests/" + closure_0;
  },
  JOIN_REQUEST_INTERVIEW(closure_0) {
    return "/join-requests/" + closure_0 + "/interview";
  },
  GUILDS: "/guilds",
  GUILD(id) {
    return "/guilds/" + id;
  },
  GUILD_BASIC(arg0) {
    return "/guilds/" + arg0 + "/basic";
  },
  GUILD_SPACE(arg0) {
    return "/guilds/" + arg0 + "/space";
  },
  GUILD_SPACE_WIDGETS_HYDRATE(arg0) {
    return "/guilds/" + arg0 + "/space/widgets/hydrate";
  },
  GUILD_SPACE_WIDGETS_CATALOG(arg0) {
    return "/guilds/" + arg0 + "/space/widgets/catalog";
  },
  GUILD_PINCODE(id) {
    return "/guilds/" + id + "/pincode";
  },
  GUILD_DELETE(arg0) {
    return "/guilds/" + arg0 + "/delete";
  },
  CHANNELS: "/channels",
  THREADS_BULK: "/threads/bulk",
  CHANNEL(arg0) {
    return "/channels/" + arg0;
  },
  THREAD_MEMBER(id, outer1_1) {
    let tmp = outer1_1;
    if (outer1_1 === undefined) {
      tmp = ME;
    }
    return "/channels/" + id + "/thread-members/" + tmp;
  },
  THREAD_MEMBER_SETTINGS(id) {
    return "/channels/" + id + "/thread-members/@me/settings";
  },
  ALL_ARCHIVED_THREADS(arg0, arg1) {
    return "/channels/" + arg0 + "/threads/archived/" + arg1;
  },
  MY_ARCHIVED_THREADS(arg0) {
    return "/channels/" + arg0 + "/users/@me/threads/archived/private";
  },
  THREAD_SEARCH(channelId) {
    return "/channels/" + channelId + "/threads/search";
  },
  FORUM_POSTS(arg0) {
    return "/channels/" + arg0 + "/post-data";
  },
  PARTNER_REQUIREMENTS(arg0) {
    return "/partners/" + arg0 + "/requirements";
  },
  AVATAR(arg0, arg1) {
    let str = arg2;
    if (arg2 === undefined) {
      str = "jpg";
    }
    return "/users/" + arg0 + "/avatars/" + arg1 + "." + str;
  },
  ARCHIVED_AVATAR(userId, avatarId, storageHash, arg3) {
    let str = arg3;
    if (arg3 === undefined) {
      str = "jpg";
    }
    return "/avatars/" + userId + "/archived/" + avatarId + "/" + storageHash + "." + str;
  },
  USER_BANNER(id, banner, arg2) {
    return "/users/" + id + "/banners/" + banner + "." + arg2;
  },
  AVATAR_DECORATION_PRESETS(asset) {
    let str = arg1;
    if (arg1 === undefined) {
      str = "png";
    }
    return "/avatar-decoration-presets/" + asset + "." + str;
  },
  LAYOUT_SYSTEM(arg0, arg1) {
    return "/layouts/" + arg0 + "/" + arg1;
  },
  LAYOUT_SYSTEM_TEMPLATE(arg0, arg1) {
    return "/templates/" + arg0 + "/" + arg1;
  },
  COLLECTIBLES_CATEGORIES: "/collectibles-categories",
  COLLECTIBLES_CATEGORIES_V2: "/collectibles-categories/v2",
  COLLECTIBLES_SEARCH: "/shop/search",
  COLLECTIBLES_CLAIM: "/users/@me/claim-premium-collectibles-product",
  COLLECTIBLES_CLAIM_CATEGORY_REWARD: "/users/@me/claim-reward-category-product",
  COLLECTIBLES_PURCHASES: "/users/@me/collectibles-purchases",
  COLLECTIBLES_PRODUCTS(arg0) {
    return "/collectibles-products/" + arg0;
  },
  COLLECTIBLES_VALID_GIFT_RECIPIENT: "/users/@me/valid-collectibles-gift-recipient",
  COLLECTIBLES_VALID_GIFT_RECIPIENTS_BATCH: "/users/@me/valid-collectibles-gift-recipients-batch",
  COLLECTIBLES_MARKETING: "/users/@me/collectibles-marketing",
  COLLECTIBLES_SHOP: "/collectibles-shop",
  COLLECTIBLES_SHOP_TAB_LAYOUT(c0) {
    return "/collectibles-shop-tab-layouts/" + c0;
  },
  GUILD_MEMBER_BANNER(guildId, id, banner, arg3) {
    let str = arg3;
    if (arg3 === undefined) {
      str = "png";
    }
    return "/guilds/" + guildId + "/users/" + id + "/banners/" + banner + "." + str;
  },
  CHANNEL_CONVERSATIONS(c0) {
    return "/channels/" + c0 + "/conversations";
  },
  CHANNEL_CONVERSATION_MESSAGES(arg0, arg1) {
    return "/channels/" + arg0 + "/conversations/" + arg1 + "/messages";
  },
  MESSAGES(channelId) {
    return "/channels/" + channelId + "/messages";
  },
  MESSAGES_GREET(id) {
    return "/channels/" + id + "/greet";
  },
  MESSAGES_ANNOUNCEMENT(channelId) {
    return "/channels/" + channelId + "/messages/announcement";
  },
  MESSAGE(arg0, arg1) {
    return "/channels/" + arg0 + "/messages/" + arg1;
  },
  MESSAGE_ACK(arg0, arg1) {
    return "/channels/" + arg0 + "/messages/" + arg1 + "/ack";
  },
  MESSAGE_CREATE_ATTACHMENT_UPLOAD(arg0) {
    return "/channels/" + arg0 + "/attachments";
  },
  UPDATE_VOICE_CHANNEL_STATUS(arg0) {
    return "/channels/" + arg0 + "/voice-status";
  },
  CHANNEL_VOICE_HANGOUT(arg0) {
    return "/channels/" + arg0 + "/voice-hangout";
  },
  VOICE_HANGOUT_BANNER(arg0, arg1) {
    return "/voice-hangouts/" + arg0 + "/" + arg1;
  },
  GUILD_VOICE_HANGOUT_RECENT_IMAGES(arg0) {
    return "/guilds/" + arg0 + "/voice-hangout/recent-images";
  },
  MESSAGE_DELETE_UPLOAD(arg0) {
    return "/attachments/" + arg0;
  },
  MESSAGE_CROSSPOST(outer1_0, outer1_1) {
    return "/channels/" + outer1_0 + "/messages/" + outer1_1 + "/crosspost";
  },
  AI_TITLE: "/ai/title",
  AI_TRANSLATE: "/ai/translate",
  AI_FIX_GRAMMAR: "/ai/fix-grammar",
  AI_TEXT_TRANSFORM: "/ai/text-transform",
  AI_SUMMARIZE_THREAD(id) {
    return "/ai/summarize-thread/" + id;
  },
  MESSAGE_LOG_PRIVATE_CHANNELS: "/messages-log/private-channels/get",
  MESSAGE_LOG_GUILD_CHANNELS: "/messages-log/guild-channels/get",
  BACKGROUND_SYNC: "/users/@me/background-sync",
  MESSAGE_PREVIEWS: "/channels/preload-messages",
  PINS_ACK(channelId) {
    return "/channels/" + channelId + "/pins/ack";
  },
  PINS(channelId) {
    return "/channels/" + channelId + "/messages/pins";
  },
  PIN(c0, c1) {
    return "/channels/" + c0 + "/messages/pins/" + c1;
  },
  INSTANT_INVITES(id) {
    return "/channels/" + id + "/invites";
  },
  TYPING(arg0) {
    return "/channels/" + arg0 + "/typing";
  },
  CHANNEL_PERMISSIONS_OVERWRITE(outer1_0, id) {
    return "/channels/" + outer1_0 + "/permissions/" + id;
  },
  CHANNEL_RECIPIENTS(arg0) {
    return "/channels/" + arg0 + "/recipients";
  },
  CHANNEL_RECIPIENT(arg0, arg1) {
    return "/channels/" + arg0 + "/recipients/" + arg1;
  },
  CHANNEL_RECIPIENT_ME(closure_0) {
    return "/channels/" + closure_0 + "/recipients/@me";
  },
  CHANNEL_RECIPIENT_REJECT_BATCH() {
    return "/channels/recipients/@me/batch-reject";
  },
  CHANNEL_ICON(arg0, arg1) {
    return "/channels/" + arg0 + "/icons/" + arg1 + ".jpg";
  },
  CHANNEL_CONVERT(arg0) {
    return "/channels/" + arg0 + "/convert";
  },
  CHANNEL_ACK(arg0) {
    return "/channels/" + arg0 + "/messages/ack";
  },
  CHANNEL_STORE_LISTING(arg0) {
    return "/channels/" + arg0 + "/store-listing";
  },
  CHANNEL_STORE_LISTING_SKU(arg0, arg1) {
    return "/channels/" + arg0 + "/store-listings/" + arg1;
  },
  CHANNEL_ENTITLEMENT_GRANT(closure_1) {
    return "/channels/" + closure_1 + "/store-listing/entitlement-grant";
  },
  CHANNEL_FOLLOWERS(closure_1) {
    return "/channels/" + closure_1 + "/followers";
  },
  CHANNEL_FOLLOWER_STATS(outer1_0) {
    return "/channels/" + outer1_0 + "/follower-stats";
  },
  CHANNEL_FOLLOWER_MESSAGE_STATS(arg0) {
    return "/channels/" + arg0 + "/follower-message-stats";
  },
  CHANNEL_INTEGRATION(arg0, arg1) {
    return "/channels/" + arg0 + "/integrations/" + arg1;
  },
  CHANNEL_SAFETY_WARNINGS_ACK(channelId) {
    return "/channels/" + channelId + "/safety-warnings/ack";
  },
  CHANNEL_BLOCKED_USER_WARNING_ACK(channelId) {
    return "/channels/" + channelId + "/blocked-user-warning-dismissal";
  },
  CHANNEL_VOICE_HISTORY(arg0) {
    return "/channels/" + arg0 + "/voice-history";
  },
  FORUM_TAGS(channelId) {
    return "/channels/" + channelId + "/tags";
  },
  FORUM_TAG(closure_0, id) {
    return "/channels/" + closure_0 + "/tags/" + id;
  },
  FRIEND_FINDER: "/friend-finder/find-friends",
  FRIEND_SUGGESTIONS: "/friend-suggestions",
  FRIEND_SUGGESTION(id) {
    return "/friend-suggestions/" + id;
  },
  TUTORIAL_INDICATORS: "/tutorial/indicators",
  TUTORIAL_INDICATORS_SUPPRESS: "/tutorial/indicators/suppress",
  TUTORIAL_INDICATOR(arg0) {
    return "/tutorial/indicators/" + arg0;
  },
  USERS: "/users",
  ME: "/users/@me",
  GRAVITY_ATTACHMENTS: "/users/@me/gravity-attachments",
  GRAVITY_ATTACHMENTS_UPLOAD: "/users/@me/gravity-attachments-upload",
  GRAVITY_ITEMS_DEHYDRATED: "/users/@me/gravity-icymi",
  GRAVITY_ITEMS_DEHYDRATED_LEGACY: "/users/@me/gravity-icymi-legacy",
  GRAVITY_RECOMMENDED_GUILDS: "/gravity-recommended-guilds",
  GRAVITY_ITEMS_HYDRATE: "/gravity-content",
  GRAVITY_CUSTOM_GUILD_SCORES: "/gravity-custom-guild-score",
  GRAVITY_CUSTOM_SCORES: "/gravity-custom-channel-scores",
  GRAVITY_JOIN_GUILD: "/guilds/gravity-join",
  GRAVITY_TOPIC_GUILDS: "/gravity-topic-guilds",
  POMELO_SUGGESTIONS: "/users/@me/pomelo-suggestions",
  POMELO_SUGGESTIONS_UNAUTHED: "/unique-username/username-suggestions-unauthed",
  POMELO_ATTEMPT: "/users/@me/pomelo-attempt",
  POMELO_ATTEMPT_UNAUTHED: "/unique-username/username-attempt-unauthed",
  POMELO_CREATE: "/users/@me/pomelo",
  DELETE_ACCOUNT: "/users/@me/delete",
  DISABLE_ACCOUNT: "/users/@me/disable",
  DEVICES: "/users/@me/devices",
  DEVICES_SYNC_TOKEN: "/users/@me/devices/sync-token",
  DEVICES_SYNC: "/users/@me/devices/sync",
  SETTINGS: "/users/@me/settings",
  SETTINGS_CONSENT: "/users/@me/consent",
  PHONE: "/users/@me/phone",
  PHONE_VERIFY_NO_PASSWORD: "/users/@me/phone/verify",
  PHONE_REVERIFY: "/users/@me/phone/reverify",
  FRIEND_INVITES: "/users/@me/invites",
  VERIFY_PHONE: "/phone-verifications/verify",
  VERIFY_PHONE_FOR_TICKET: "/phone-verifications/validate-support-ticket",
  RESEND_PHONE: "/phone-verifications/resend",
  RECENT_AVATARS: "/users/@me/avatars",
  RECENT_AVATARS_DELETE(arg0) {
    return "/users/@me/avatars/" + arg0;
  },
  UNCLAIMED_GAMES: "/users/@me/unclaimed-games",
  USERS_ME_CUSTOM_THEMES: "/users/@me/custom-themes",
  CONNECTIONS: "/users/@me/connections",
  CONNECTIONS_AUTHORIZE(outer1_0) {
    return "/connections/" + outer1_0 + "/authorize";
  },
  CONNECTIONS_SESSION_HANDOFF(arg0) {
    return "/connections/" + arg0 + "/callback/session-handoff";
  },
  CONNECTIONS_CALLBACK(arg0) {
    return "/connections/" + arg0 + "/callback";
  },
  CONNECTION(arg0, arg1) {
    return "/users/@me/connections/" + arg0 + "/" + escape(arg1);
  },
  CONNECTION_REFRESH(arg0, arg1) {
    return "/users/@me/connections/" + arg0 + "/" + escape(arg1) + "/refresh";
  },
  CONNECTION_SYNC_CONTACTS: "/users/@me/connections/contacts/@me/external-friend-list-entries",
  CONNECTION_ACCESS_TOKEN(SPOTIFY, closure_0) {
    return "/users/@me/connections/" + SPOTIFY + "/" + escape(closure_0) + "/access-token";
  },
  CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK(arg0) {
    return "/connections/" + arg0 + "/link-dispatch-auth-callback";
  },
  XBOX_HANDOFF: "/consoles/xbox-handoff",
  NOTES: "/users/@me/notes",
  NOTE(closure_0) {
    return "/users/@me/notes/" + closure_0;
  },
  MENTIONS: "/users/@me/mentions",
  MENTIONS_MESSAGE_ID(id) {
    return "/users/@me/mentions/" + id;
  },
  CAPTCHA: "/users/@me/captcha/verify",
  CAPTCHA_TEST: "/captcha/decider",
  AGE_ASSURANCE_TEST: "/age-verification/test",
  VERIFY_AGE: "/age-verification/verify",
  VERIFY_AGE_V2: "/age-verification/verify/v2",
  REGISTER_INCODE_INTERVIEW: "/age-verification/incode/interview",
  CREATE_INCODE_SESSION: "/age-verification/incode/session",
  AGE_VERIFICATION_METHODS: "/age-verification/methods",
  AGE_VERIFICATION_METHODS_V2: "/age-verification/methods/v2",
  GOOGLE_WALLET_REQUEST: "/age-verification/google-wallet/request",
  GOOGLE_WALLET_VERIFY: "/age-verification/google-wallet/verify",
  AGE_SIGNAL: "/users/@me/age-signal",
  AGE_SIGNAL_CHALLENGE: "/users/@me/age-signal/challenge",
  AGE_VERIFICATION_REACTIVE_CHECK: "/users/@me/age-verification/check",
  AGE_VERIFICATION_RESET: "/users/@me/age-verification/reset",
  EXPERIMENTS: "/experiments",
  LOGIN: "/auth/login",
  LOGIN_GENERATED_USER(arg0) {
    return "/auth/login/generated-user/" + arg0;
  },
  GENERATED_POOLS_FOR_CURRENT_USER: "/generated-pools/@me",
  GENERATED_POOL_BY_ID(closure_0) {
    return "/generated-pools/" + closure_0;
  },
  LOGIN_MFA(mfaType) {
    return "/auth/mfa/" + mfaType;
  },
  LOGIN_SMS_SEND: "/auth/mfa/sms/send",
  ONE_TIME_LOGIN: "/auth/one-time-login",
  REMOTE_AUTH_INITIALIZE: "/users/@me/remote-auth",
  REMOTE_AUTH_CANCEL: "/users/@me/remote-auth/cancel",
  REMOTE_AUTH_LOGIN: "/users/@me/remote-auth/login",
  REMOTE_AUTH_FINISH: "/users/@me/remote-auth/finish",
  LOGOUT: "/auth/logout",
  REGISTER: "/auth/register",
  REGISTER_PHONE: "/auth/register/phone",
  SCORE_PASSWORD: "/auth/password/validate",
  MFA_WEBAUTHN_CREDENTIALS: "/users/@me/mfa/webauthn/credentials",
  WEBAUTHN_CONDITIONAL_UI_CHALLENGE: "/auth/conditional/start",
  WEBAUTHN_CONDITIONAL_UI_LOGIN: "/auth/conditional/finish",
  WEBAUTHN_PASSWORDLESS_CHALLENGE: "/auth/passwordless/start",
  MFA_WEBAUTHN_CREDENTIAL(closure_0) {
    return "/users/@me/mfa/webauthn/credentials/" + closure_0;
  },
  INVITE(arg0) {
    return "/invites/" + arg0;
  },
  INVITE_FRIEND_MEMBERS(outer1_0) {
    return "/invites/" + outer1_0 + "/friend-members";
  },
  UNRESOLVED_GUILD_TEMPLATE(closure_0) {
    return "/guilds/templates/" + closure_0;
  },
  GUILD_TEMPLATES(arg0) {
    return "/guilds/" + arg0 + "/templates";
  },
  GUILD_TEMPLATE(arg0, arg1) {
    return "/guilds/" + arg0 + "/templates/" + arg1;
  },
  TRACK: "/science",
  METRICS: "/metrics",
  METRICS_V2: "/metrics/v2",
  SSO: "/sso",
  SSO_TOKEN: "/sso-token",
  VERIFY: "/auth/verify",
  AUTHORIZE_IP: "/auth/authorize-ip",
  AUTHORIZE_PAYMENT: "/billing/verify-purchase-request",
  VERIFY_RESEND: "/auth/verify/resend",
  FORGOT_PASSWORD: "/auth/forgot",
  RESET_PASSWORD: "/auth/reset",
  REGIONS(id) {
    let str = "/voice/regions";
    if (null != id) {
      const _HermesInternal = HermesInternal;
      str = "/guilds/" + id + "/regions";
    }
    return str;
  },
  DEBUG_LOG(ANDROID_APP, closure_1) {
    return "/debug-logs/" + ANDROID_APP + "/" + closure_1;
  },
  DEBUG_LOGS(arg0) {
    return "/debug-logs/multi/" + arg0;
  },
  REPORT_V2: "/reports",
  STAGE_REPORT(arg0, arg1) {
    return "/reports/channels/" + arg0 + "/messages/" + arg1;
  },
  REPORT_OPTIONS: "/report/options",
  INTEGRATIONS: "/integrations",
  INTEGRATION_JOIN(id) {
    return "/integrations/" + id + "/join";
  },
  INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS: "/users/@me/guilds/integration-application-ids",
  USER_GUILD_SETTINGS_BULK: "/users/@me/guilds/settings",
  USER_GUILD_SETTINGS(outer1_7) {
    return "/users/@me/guilds/" + outer1_7 + "/settings";
  },
  GAMES_DETECTABLE: "/games/detectable",
  GAMES_BLOCKLIST: "/games/detectable/exclusions",
  NON_GAMES_DETECTABLE: "/applications/non-games/detectable",
  GAMES: "/games",
  GAMES_AUTOCOMPLETE: "/games/autocomplete",
  APPLICATION_ICON(arg0, arg1) {
    return "/applications/" + arg0 + "/app-icons/" + arg1 + ".png";
  },
  APPLICATION_RPC(arg0) {
    return "/oauth2/applications/" + arg0 + "/rpc";
  },
  APPLICATION_ASSETS(closure_0) {
    return "/oauth2/applications/" + closure_0 + "/assets";
  },
  APPLICATION_EXTERNAL_ASSETS(arg0) {
    return "/applications/" + arg0 + "/external-assets";
  },
  OWNED_APPLICATION_BRANCHES(arg0) {
    return "/applications/" + arg0 + "/branches";
  },
  OAUTH2_AUTHORIZE: "/oauth2/authorize",
  OAUTH2_AUTHORIZE_SAMSUNG: "/oauth2/samsung/authorize",
  OAUTH2_AUTHORIZE_SAMSUNG_CALLBACK: "/oauth2/samsung/authorize/callback",
  OAUTH2_AUTHORIZE_WEBHOOK_CHANNELS: "/oauth2/authorize/webhook-channels",
  OAUTH2_CURRENT_AUTH: "/oauth2/@me",
  OAUTH2_TOKENS: "/oauth2/tokens",
  OAUTH2_TOKEN(arg0) {
    return "/oauth2/tokens/" + arg0;
  },
  OAUTH2_WHITELIST_ACCEPT: "/oauth2/allowlist/accept",
  OAUTH2_DEVICE_VERIFY: "/oauth2/device/verify",
  OAUTH2_DEVICE_FINISH: "/oauth2/device/finish",
  OAUTH2_ACCOUNT_LINKING_ACHIEVEMENT: "/oauth2/account-linking-achievement",
  MFA_TOTP_ENABLE: "/users/@me/mfa/totp/enable",
  MFA_TOTP_ENABLE_VERIFY: "/users/@me/mfa/totp/enable/verify",
  MFA_TOTP_ENABLE_RESEND: "/users/@me/mfa/totp/enable/resend",
  MFA_TOTP_DISABLE: "/users/@me/mfa/totp/disable",
  MFA_SMS_ENABLE: "/users/@me/mfa/sms/enable",
  MFA_SMS_DISABLE: "/users/@me/mfa/sms/disable",
  MFA_CODES_VERIFICATION: "/users/@me/mfa/codes-verification",
  MFA_SEND_VERIFICATION_KEY: "/auth/verify/view-backup-codes-challenge",
  CALL(id) {
    return "/channels/" + id + "/call";
  },
  CALL_RING(channelId) {
    return "/channels/" + channelId + "/call/ring";
  },
  CALL_STOP_RINGING(channelId) {
    return "/channels/" + channelId + "/call/stop-ringing";
  },
  DISABLE_EMAIL_NOTIFICATIONS: "/users/disable-email-notifications",
  DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS: "/users/disable-server-highlight-notifications",
  CHANNEL_WEBHOOKS(channelId) {
    return "/channels/" + channelId + "/webhooks";
  },
  GUILD_WEBHOOKS(guildId) {
    return "/guilds/" + guildId + "/webhooks";
  },
  WEBHOOK(arg0) {
    return "/webhooks/" + arg0;
  },
  WEBHOOK_INTEGRATION(webhookId, token) {
    return "/webhooks/" + webhookId + "/" + token;
  },
  REACTIONS(channelId, messageId, name) {
    return "/channels/" + channelId + "/messages/" + messageId + "/reactions/" + name;
  },
  REMOVE_REACTIONS(closure_0, closure_1) {
    return "/channels/" + closure_0 + "/messages/" + closure_1 + "/reactions";
  },
  REMOVE_EMOJI_REACTIONS(closure_0, closure_1, name) {
    return "/channels/" + closure_0 + "/messages/" + closure_1 + "/reactions/" + name;
  },
  REACTION(channelId, messageId, name, userId) {
    return "/channels/" + channelId + "/messages/" + messageId + "/reactions/" + name + "/" + userId;
  },
  REACTION_WITH_TYPE(channelId, messageId, name, userId, NORMAL) {
    return "/channels/" + channelId + "/messages/" + messageId + "/reactions/" + name + "/" + NORMAL + "/" + userId;
  },
  SEARCH_GUILD(guildId) {
    return "/guilds/" + guildId + "/messages/search";
  },
  SEARCH_TABS_GUILD(searchId) {
    return "/guilds/" + searchId + "/messages/search/tabs";
  },
  SEARCH_TABS_DMS: "/users/@me/messages/search/tabs",
  CHANGELOG_MESSAGES: "/changelogs/@me/messages",
  GUILD_APPLICATIONS(outer1_0) {
    return "/guilds/" + outer1_0 + "/applications";
  },
  APPLIED_GUILD_BOOSTS_FOR_GUILD(closure_0) {
    return "/guilds/" + closure_0 + "/premium/subscriptions";
  },
  APPLIED_GUILD_BOOST(closure_0, appliedGuildBoostError) {
    return "/guilds/" + closure_0 + "/premium/subscriptions/" + appliedGuildBoostError;
  },
  APPLIED_GUILD_BOOST_COOLDOWN: "/users/@me/guilds/premium/subscriptions/cooldown",
  USER_APPLIED_GUILD_BOOSTS: "/users/@me/guilds/premium/subscriptions",
  USER_GUILD_BOOST_SLOTS: "/users/@me/guilds/premium/subscription-slots",
  USER_GUILD_BOOST_SLOT_CANCEL(closure_0) {
    return "/users/@me/guilds/premium/subscription-slots/" + closure_0 + "/cancel";
  },
  USER_GUILD_BOOST_SLOT_UNCANCEL(closure_0) {
    return "/users/@me/guilds/premium/subscription-slots/" + closure_0 + "/uncancel";
  },
  GUILD_POWERUPS(closure_0) {
    return "/guilds/" + closure_0 + "/powerups";
  },
  GUILD_POWERUP_TOGGLE(arg0, arg1) {
    return "/guilds/" + arg0 + "/skus/" + arg1;
  },
  GUILD_POWERUP_UPDATE(arg0, arg1) {
    return "/guilds/" + arg0 + "/entitlements/" + arg1;
  },
  GAME_SERVERS(arg0) {
    return "/guilds/" + arg0 + "/game-servers";
  },
  GAME_SERVER_REGIONS(arg0) {
    return "/guilds/" + arg0 + "/game-server-regions";
  },
  GAME_SERVER_MY_REGIONS: "/users/@me/game-server-regions",
  GAME_SERVERS_ME: "/users/@me/game-servers",
  GAME_SERVER_ME(id) {
    return "/users/@me/game-servers/" + id;
  },
  GAME_SERVER_WAKE(arg0, arg1) {
    return "/guilds/" + arg0 + "/game-servers/" + arg1 + "/wake";
  },
  SEARCH_CHANNEL(searchId) {
    return "/channels/" + searchId + "/messages/search";
  },
  SEARCH_TABS_CHANNEL(searchId) {
    return "/channels/" + searchId + "/messages/search/tabs";
  },
  BILLING_STRIPE_SETUP_INTENT_SECRET: "/users/@me/billing/stripe/setup-intents",
  BILLING_STRIPE_SETUP_INTENT_SECRET_FOR_PAYMENT_ELEMENTS: "/users/@me/billing/stripe/payment-elements/setup-intents",
  BILLING_ADYEN_PAYMENT_METHODS: "/users/@me/billing/adyen/payment-methods",
  BILLING_PAYMENT_SOURCES: "/users/@me/billing/payment-sources",
  BILLING_PAYMENT_SOURCES_VALIDATE_BILLING_ADDRESS: "/users/@me/billing/payment-sources/validate-billing-address",
  BILLING_PAYMENT_SOURCE(closure_0) {
    return "/users/@me/billing/payment-sources/" + closure_0;
  },
  BILLING_WALLET_INFORMATION(closure_0) {
    return "/users/@me/billing/wallet/" + closure_0 + "/information";
  },
  BILLING_PAYMENTS: "/users/@me/billing/payments",
  BILLING_PAYMENT(closure_0) {
    return "/users/@me/billing/payments/" + closure_0;
  },
  BILLING_PAYMENTS_VOID(closure_0) {
    return "/users/@me/billing/payments/" + closure_0 + "/void";
  },
  BILLING_INVOICE_PDF: "/users/@me/billing/invoice",
  BILLING_INVOICE_BREAKDOWN: "/users/@me/billing/invoice/breakdown",
  BILLING_STRIPE_PAYMENT_INTENTS(closure_0) {
    return "/users/@me/billing/stripe/payment-intents/payments/" + closure_0;
  },
  BILLING_STRIPE_PAYMENT_INTENTS_VIA_ID(arg0) {
    return "/users/@me/billing/stripe/payment-intents/" + arg0;
  },
  BILLING_STANDALONE_CHECKOUT_LOGIN_HANDOFF(arg0, arg1, arg2) {
    return "" + window.GLOBAL_ENV.WEBAPP_ENDPOINT + "/billing/premium/subscribe/login-handoff?handoff_key=" + arg0 + "&handoff_token=" + arg1 + "&destination=" + arg2;
  },
  BILLING_PAYPAL_BILLING_AGREEMENT_TOKENS: "/users/@me/billing/paypal/billing-agreement-tokens",
  BILLING_POPUP_BRIDGE(closure_0) {
    return "/billing/popup-bridge/" + closure_0;
  },
  BILLING_POPUP_BRIDGE_CALLBACK(paymentSourceType) {
    return "/billing/popup-bridge/" + paymentSourceType + "/callback";
  },
  BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(type, c0, success) {
    let str = success;
    if (success == null) {
      str = "";
    }
    return "/billing/popup-bridge/" + type + "/callback/" + c0 + "/" + str;
  },
  BILLING_SUBSCRIPTIONS: "/users/@me/billing/subscriptions",
  BILLING_PERKS_RELEVANCE: "/users/@me/billing/perks-relevance",
  BILLING_NITRO_AFFINITY: "/users/@me/billing/nitro-affinity",
  BILLING_SUBSCRIPTIONS_PREVIEW: "/users/@me/billing/subscriptions/preview",
  BILLING_APPLY_APPLE_RECEIPT: "/billing/apple/apply-receipt",
  BILLING_APPLE_SUBSCRIPTION(subscription_id) {
    return "/billing/apple/subscriptions/" + subscription_id;
  },
  BILLING_GENERATE_APPLE_TRIAL_OFFER_SIGNATURE: "/users/@me/billing/apple/trial-offer-signature",
  BILLING_CREATE_APPLE_IAP_JWT_TOKEN: "/billing/apple/jwt-token",
  BILLING_ACOM_SUBSCRIPTION_MIGRATION: "/billing/apple/acom-subscriptions/migrate",
  BILLING_SUBSCRIPTION(closure_0) {
    return "/users/@me/billing/subscriptions/" + closure_0;
  },
  BILLING_SUBSCRIPTION_PREVIEW(c0) {
    return "/users/@me/billing/subscriptions/" + c0 + "/preview";
  },
  BILLING_SUBSCRIPTION_INVOICE(c0) {
    return "/users/@me/billing/subscriptions/" + c0 + "/invoices";
  },
  BILLING_INVOICE_MANUAL_PAYMENT(id, closure_1) {
    return "/users/@me/billing/subscriptions/" + id + "/invoices/" + closure_1 + "/pay";
  },
  BILLING_SUBSCRIPTION_REWARDS(arg0) {
    return "/users/@me/billing/subscriptions/" + arg0 + "/rewards";
  },
  BILLING_SUBSCRIPTION_PROMOTION_REWARD(arg0) {
    return "/users/@me/billing/subscriptions/" + arg0 + "/promotion-reward";
  },
  Billing_SUBSCRIPTION_REWARD_ELIGIBILITY(arg0) {
    return "/users/@me/billing/subscriptions/" + arg0 + "/reward-eligibility";
  },
  BILLING_SUBSCRIPTION_ELIGIBLE_USERS(body) {
    return "/users/@me/billing/subscriptions/" + body + "/eligible-users";
  },
  BILLING_SUBSCRIPTION_INVITES(closure_0) {
    return "/users/@me/billing/subscriptions/" + closure_0 + "/invites";
  },
  BILLING_SUBSCRIPTION_INVITE(closure_0, closure_1) {
    return "/users/@me/billing/subscriptions/" + closure_0 + "/members/" + closure_1 + "/invite";
  },
  BILLING_SUBSCRIPTION_REMOVE_USER(closure_0, closure_1) {
    return "/users/@me/billing/subscriptions/" + closure_0 + "/members/" + closure_1;
  },
  BILLING_SUBSCRIPTION_MEMBERS(closure_0) {
    return "/users/@me/billing/subscriptions/" + closure_0 + "/members";
  },
  BILLING_COUNTRY_CODE: "/users/@me/billing/country-code",
  BILLING_PAYMENT_SOURCE_CREATION_CONTEXT: "/users/@me/billing/payment-source-creation-context",
  BILLING_LOCATION: "/users/@me/billing/location-info",
  BILLING_LOCALIZED_PROMO: "/users/@me/billing/localized-pricing-promo",
  BILLING_GIFT_CARD_VIEW: "/billing/gift-card/view",
  BILLING_GIFT_CARD_REDEEM: "/billing/gift-card/redeem",
  BILLING_STORE_COUNTRY: "/billing/store-country",
  PREMIUM_GROUP_MEMBERSHIP: "/users/@me/premium-group/membership",
  PREMIUM_GROUP_INVITES: "/users/@me/premium-group/invites",
  PREMIUM_GROUP_INVITE(closure_0) {
    return "/users/@me/premium-group/invites/" + closure_0;
  },
  PROGRAM_REWARDS: "/users/@me/program-rewards",
  VERIFY_PURCHASE: "/google-play/verify-purchase-token",
  DOWNGRADE_SUBSCRIPTION: "/google-play/downgrade-subscription",
  GOOGLE_PLAY_VALIDATE_PURCHASE: "/google-play/validate-purchase",
  USER_AGREEMENTS: "/users/@me/agreements",
  HANDOFF: "/auth/handoff",
  HANDOFF_EXCHANGE: "/auth/handoff/exchange",
  LIBRARY: "/users/@me/library",
  LIBRARY_APPLICATION_BRANCH(arg0, arg1) {
    return "/users/@me/library/" + arg0 + "/" + arg1;
  },
  LIBRARY_APPLICATION_DELETE(arg0) {
    return "/users/@me/library/" + arg0;
  },
  AUTH_LOCATION_METADATA: "/auth/location-metadata",
  USER_HARVEST: "/users/@me/harvest",
  APPLICATION_LIVE_BUILD(arg0, arg1) {
    return "/applications/" + arg0 + "/branches/" + arg1 + "/builds/live";
  },
  APPLICATION_BUILD_SIZE(arg0, arg1, arg2) {
    return "/applications/" + arg0 + "/branches/" + arg1 + "/builds/" + arg2 + "/size";
  },
  APPLICATION_BRANCHES: "/branches",
  APPLICATION_PUBLIC(closure_0) {
    return "/applications/" + closure_0 + "/public";
  },
  APPLICATIONS_PUBLIC: "/applications/public",
  APPLICATIONS_TRENDING: "/applications/trending/global",
  APPLICATION_BRANCH_LIST(arg0) {
    return "/applications/" + arg0 + "/branches";
  },
  LIBRARY_APPLICATION_INSTALLED(arg0, arg1) {
    return "/users/@me/library/" + arg0 + "/" + arg1 + "/installed";
  },
  STOREFRONT_PREMIUM_BUTTON(arg0) {
    return "/applications/storefront/interactions/premium-button/" + arg0;
  },
  STOREFRONT_COLLECTIONS_WITH_PRODUCTS: "/storefront/collections",
  STOREFRONT_COLLECTIONS_FOR_APPLICATION: "/storefront/collections/applications",
  STOREFRONT_COLLECTION_WITH_PRODUCTS(GAME_SERVER_COLLECTION_ID) {
    return "/storefront/collections/" + GAME_SERVER_COLLECTION_ID;
  },
  STOREFRONT_PRODUCTS_WITH_SKUS: "/storefront/products",
  STOREFRONT_PRODUCTS_BY_SKU_IDS: "/storefront/products/skus",
  STOREFRONT_PRODUCT_BY_SKU_ID(arg0) {
    return "/storefront/products/sku/" + arg0;
  },
  STOREFRONT_PROMOTIONS: "/storefront/promotions",
  STOREFRONT_PRICES: "/storefront/pricing",
  STORE_DIRECTORY_LAYOUT(arg0) {
    return "/store/directory-layouts/" + arg0;
  },
  STORE_DIRECTORY(arg0) {
    return "/store/directory/" + arg0;
  },
  STORE_EMAIL_RESEND_PAYMENT_VERIFICATION: "/store/email/resend-payment-verification",
  STORE_PUBLISHED_LISTINGS_APPLICATIONS: "/store/published-listings/applications",
  STORE_PUBLISHED_LISTINGS_APPLICATION(arg0) {
    return "/store/published-listings/applications/" + arg0;
  },
  STORE_PUBLISHED_LISTINGS_SKUS: "/store/published-listings/skus",
  STORE_PUBLISHED_LISTINGS_SKU(skuId) {
    return "/store/published-listings/skus/" + skuId;
  },
  STORE_PUBLISHED_LISTINGS_SKU_JOIN_GUILD(arg0) {
    return "/store/published-listings/skus/" + arg0 + "/guild/join";
  },
  STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(closure_0) {
    return "/store/published-listings/skus/" + closure_0 + "/subscription-plans";
  },
  STORE_SKU(arg0) {
    return "/store/skus/" + arg0;
  },
  STORE_SKU_PURCHASE(c1) {
    return "/store/skus/" + c1 + "/purchase";
  },
  STORE_LISTING(arg0) {
    return "/store/listings/" + arg0;
  },
  STORE_LISTINGS_SKU(skuId) {
    return "/store/skus/" + skuId + "/listings";
  },
  SOCIAL_LAYER_APPLICATION_STOREFRONT(guildId) {
    return "/partner-sdk/guilds/" + guildId + "/application-storefront";
  },
  SOCIAL_LAYER_STOREFRONT_BY_APPLICATION_ID(applicationId) {
    return "/partner-sdk/applications/" + applicationId + "/application-storefront";
  },
  SOCIAL_LAYER_STOREFRONTS_ALL(arg0) {
    return "/partner-sdk/applications/" + arg0 + "/storefronts/preview";
  },
  SOCIAL_LAYER_STOREFRONT_BY_ID(arg0, arg1) {
    return "/partner-sdk/applications/" + arg0 + "/storefront/" + arg1 + "/preview";
  },
  SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU_BY_APPLICATION_ID(applicationId, id) {
    return "/partner-sdk/applications/" + applicationId + "/storefront/skus/" + id;
  },
  SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU(arg0, id) {
    return "/partner-sdk/guilds/" + arg0 + "/application-storefront/skus/" + id;
  },
  SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU_ELIGIBILITY(arg0, closure_0) {
    return "/partner-sdk/applications/" + arg0 + "/storefront/skus/" + closure_0 + "/eligibility";
  },
  SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT(closure_0) {
    return "/partner-sdk/guilds/" + closure_0 + "/application-storefront/announcement";
  },
  SOCIAL_LAYER_STOREFRONT_CONFIG: "/partner-sdk/storefront-config",
  SOCIAL_LAYER_STOREFRONT_LAUNCH_ANNOUNCEMENT: "/partner-sdk/storefront-launch-announcement",
  ORDER_GET(closure_0) {
    return "/billing/orders/" + closure_0;
  },
  ORDER_CREATE: "/billing/orders",
  ORDER_LIST: "/billing/orders",
  ORDER_PATCH_LINE_ITEM(c0, c1) {
    return "/billing/orders/" + c0 + "/line-items/" + c1;
  },
  ORDER_UPDATE(c0) {
    return "/billing/orders/" + c0;
  },
  ORDER_SIGN(c0) {
    return "/billing/orders/" + c0 + "/sign";
  },
  ORDER_CANCEL_SIGNING(outer1_0) {
    return "/billing/orders/" + outer1_0 + "/cancel-signing";
  },
  ORDER_DISCARD(closure_0) {
    return "/billing/orders/" + closure_0 + "/discard";
  },
  ORDER_ENTITLEMENTS(closure_0) {
    return "/billing/orders/" + closure_0 + "/entitlements";
  },
  APPLICATION_SKUS(closure_0) {
    return "/applications/" + closure_0 + "/skus";
  },
  APPLICATION_MANAGED_ACTIVITY_LINK(arg0, decodedLinkId) {
    return "/applications/" + arg0 + "/managed-links/" + decodedLinkId;
  },
  APPLICATION_QUICK_ACTIVITY_LINK(arg0, decodedLinkId) {
    return "/applications/" + arg0 + "/quick-links/" + decodedLinkId;
  },
  STORE_EULA(arg0) {
    return "/store/eulas/" + arg0;
  },
  ENTITLEMENTS_FOR_APPLICATION(closure_18) {
    return "/users/@me/applications/" + closure_18 + "/entitlements";
  },
  ENTITLEMENTS_FOR_USER: "/users/@me/entitlements",
  USER_MEANINGFULLY_ONLINE: "/users/@me/meaningfully-online",
  ENTITLEMENT_TICKET(arg0) {
    return "/users/@me/applications/" + arg0 + "/entitlement-ticket";
  },
  APPLICATION_TICKET(id) {
    return "/users/@me/applications/" + id + "/ticket";
  },
  ENTITLEMENTS_GIFTABLE: "/users/@me/entitlements/gifts",
  STORE_ASSET(closure_7, banner_asset_id, mp4) {
    return "/store/applications/" + closure_7 + "/assets/" + banner_asset_id + "." + mp4;
  },
  APPLICATION_ASSET(arg0, arg1, arg2) {
    return "/applications/" + arg0 + "/app-assets/" + arg1 + "." + arg2;
  },
  APPLICATION_STORAGE(arg0, arg1) {
    return "/applications/" + arg0 + "/branches/" + arg1 + "/storage";
  },
  APPLICATION_DISCLOSURES(closure_0) {
    return "/applications/" + closure_0 + "/disclosures";
  },
  GIFS_SEARCH: "/gifs/search",
  GIFS_TRENDING: "/gifs/trending",
  GIFS_TRENDING_GIFS: "/gifs/trending-gifs",
  GIFS_SELECT: "/gifs/select",
  GIFS_SUGGEST: "/gifs/suggest",
  GIFS_TRENDING_SEARCH: "/gifs/trending-search",
  GIFT_CODE_RESOLVE(closure_0) {
    return "/entitlements/gift-codes/" + closure_0;
  },
  GIFT_CODE_REDEEM(c0) {
    return "/entitlements/gift-codes/" + c0 + "/redeem";
  },
  PARTNER_PROMOTIONS(arg0) {
    return "/entitlements/partner-promotions/" + arg0;
  },
  USER_GIFT_CODE_CREATE: "/users/@me/entitlements/gift-codes",
  USER_GIFT_CODE_REVOKE(outer1_0) {
    return "/users/@me/entitlements/gift-codes/" + outer1_0;
  },
  USER_GIFT_CODES: "/users/@me/entitlements/gift-codes",
  GIFT_INTENTS_DISMISS: "/users/@me/gift-intents/dismiss",
  USER_TRIAL_OFFER: "/users/@me/billing/user-trial-offer",
  USER_TRIAL_OFFER_ACKNOWLEDGED(id) {
    return "/users/@me/billing/user-trial-offer/" + id + "/ack";
  },
  USER_OFFER: "/users/@me/billing/user-offer",
  USER_OFFER_ACKNOWLEDGED: "/users/@me/billing/user-offer/ack",
  CHURN_USER_OFFER: "/users/@me/billing/churn-user-offer",
  USER_OFFER_REDEEM: "/users/@me/billing/user-offer/redeem",
  REACTIVATION_OFFER_REDEEM(id, id2) {
    return "/users/@me/billing/subscriptions/" + id + "/reactivation-offers/" + id2 + "/redeem";
  },
  USER_PERKS_DEMOS: "/users/@me/perks-demos",
  USER_PERKS_DEMOS_ACTIVATE(arg0) {
    return "/users/@me/activate-perk-demo/" + arg0;
  },
  PARTNER_PERK(arg0) {
    return "/users/@me/partner-perks/" + arg0;
  },
  PARTNER_PERK_ACTIVATION_STATUS(arg0) {
    return "/users/@me/partner-perks/" + arg0 + "/activation-status";
  },
  GUILD_DISCOVERY: "/discoverable-guilds",
  MOBILE_GAME_COMMUNITIES: "/discoverable-guilds/mobile-game-communities",
  GUILD_DISCOVERY_SEARCH: "/discoverable-guilds/search",
  GUILD_DISCOVERY_CATEGORIES: "/discovery/categories",
  GUILD_DISCOVERY_SLUG(closure_0) {
    return "/discovery/" + closure_0;
  },
  GUILD_DISCOVERY_METADATA(c0) {
    return "/guilds/" + c0 + "/discovery-metadata";
  },
  GUILD_DISCOVERY_UPDATE_CATEGORY(arg0, arg1) {
    return "/guilds/" + arg0 + "/discovery-categories/" + arg1;
  },
  STREAM_PREVIEW(HTTPResult) {
    return "/streams/" + HTTPResult + "/preview";
  },
  STREAM_NOTIFY(closure_0) {
    return "/streams/" + closure_0 + "/notify";
  },
  STREAM(encodeStreamKeyResult) {
    return "/streams/" + encodeStreamKeyResult + "/stream";
  },
  GUILD_PREVIEW(closure_0) {
    return "/guilds/" + closure_0 + "/preview";
  },
  USER_AFFINITIES: "/users/@me/affinities/users",
  USER_AFFINITIES_V2: "/users/@me/affinities/v2/users",
  GUILD_AFFINITIES: "/users/@me/affinities/guilds",
  CHANNEL_AFFINITIES: "/users/@me/affinities/channels",
  CHANNEL_AFFINITIES_V2: "/users/@me/affinities/v2/channels",
  PARTNERS_CONNECTIONS: "/partners/connections",
  PARTNERS_APPLY: "/partners/apply",
  STICKER_PACK(closure_0) {
    return "/sticker-packs/" + closure_0;
  },
  STORE_DIRECTORY_LAYOUT_STICKER_PACKS(arg0) {
    return "/sticker-packs/directory-v2/" + arg0;
  },
  STICKER_ASSET(id, arg1) {
    return "/stickers/" + id + "." + arg1;
  },
  STICKER(body) {
    return "/stickers/" + body;
  },
  STICKER_PACKS: "/sticker-packs",
  GUILD_STICKER_PACKS(closure_0) {
    return "/guilds/" + closure_0 + "/stickers";
  },
  GUILD_STICKER(closure_0, closure_1) {
    return "/guilds/" + closure_0 + "/stickers/" + closure_1;
  },
  STICKER_GUILD_DATA(arg0) {
    return "/stickers/" + arg0 + "/guild";
  },
  INTERACTIONS: "/interactions",
  MESSAGE_INTERACTION_DATA(closure_0, closure_1) {
    return "/channels/" + closure_0 + "/messages/" + closure_1 + "/interaction-data";
  },
  ACTIVITY_SHELF: "/activities/shelf",
  ACTIVITY_CHANNEL_LAUNCH(c1, c0) {
    return "/activities/" + c1 + "/" + c0;
  },
  ACTIVITY_JOIN_INSTANCE(arg0, arg1) {
    return "/activities/applications/" + arg0 + "/activity-instances/" + arg1 + "/join";
  },
  ACTIVITY_TEST_MODE(closure_0) {
    return "/activities/" + closure_0 + "/test-mode";
  },
  ACTIVITY_LEAVE(c0, id, c2) {
    return "/applications/" + c0 + "/activities/" + id + "/instances/" + c2 + "/leave";
  },
  ACTIVITIES_DISCORD_CONFIG(arg0) {
    return "/activities/discord-config/" + arg0;
  },
  ACTIVITIES_TRUSTED_LINKS(arg0) {
    return "/applications/" + arg0 + "/trusted-links/check";
  },
  APPLICATION_UPLOAD_ATTACHMENT(arg0) {
    return "/applications/" + arg0 + "/attachment";
  },
  APPLICATION_PROXY_TICKET(arg0) {
    return "/applications/" + arg0 + "/proxy-tickets";
  },
  CHANNEL_THREADS(id) {
    return "/channels/" + id + "/threads";
  },
  CHANNEL_MESSAGE_THREADS(id, arg1) {
    return "/channels/" + id + "/messages/" + arg1 + "/threads";
  },
  CHANNEL_LINKED_LOBBY(outer1_0) {
    return "/channels/" + outer1_0 + "/linked-lobby";
  },
  APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(arg0, arg1, arg2) {
    return "/applications/" + arg0 + "/guilds/" + arg1 + "/commands/" + arg2 + "/permissions";
  },
  UPDATE_VOICE_STATE(guildId, id) {
    let str = id;
    if (id === undefined) {
      str = "@me";
    }
    return "/guilds/" + guildId + "/voice-states/" + str;
  },
  GET_REPORT_MENU(arg0) {
    return "/reporting/menu/" + arg0;
  },
  GET_UNAUTHENTICATED_REPORT_MENU(arg0) {
    return "/reporting/unauthenticated/menu/" + arg0;
  },
  SUBMIT_REPORT_MENU(closure_1) {
    return "/reporting/" + closure_1;
  },
  SUBMIT_UNAUTHENTICATED_REPORT_MENU(name) {
    return "/reporting/unauthenticated/" + name;
  },
  SEND_UNAUTHENTICATED_REPORT_PINCODE(name) {
    return "/reporting/unauthenticated/" + name + "/code";
  },
  VERIFY_UNAUTHENTICATED_REPORT(closure_0) {
    return "/reporting/unauthenticated/" + closure_0 + "/verify";
  },
  SUBMIT_MODERATOR_MESSAGE_REPORT(channel_id, id) {
    return "/channels/" + channel_id + "/" + id + "/mod-report";
  },
  MODERATOR_REPORT_CLOSE(arg0) {
    return "/mod-report/" + arg0 + "/close";
  },
  REPORT_TO_MOD_REOPEN(arg0) {
    return "/mod-report/" + arg0 + "/reopen";
  },
  DSA_EXPERIMENT_UNAUTHENTICATED: "/reporting/unauthenticated/experiment",
  DSA_CAPABILITIES: "/reporting/unauthenticated/capabilities",
  SUBMIT_REPORT_SECOND_LOOK: "/reporting/review",
  STAGE_INSTANCES: "/stage-instances",
  STAGE_INSTANCES_EXTRA: "/stage-instances/extra",
  STAGE_INSTANCE(closure_0) {
    return "/stage-instances/" + closure_0;
  },
  USER_SURVEY: "/users/@me/survey",
  EMBEDDED_SURVEY(closure_0) {
    return "/users/@me/embedded-survey/" + closure_0;
  },
  EMBEDDED_SURVEY_RESPONSE(arg0) {
    return "/users/@me/embedded-surveys/" + arg0 + "/responses";
  },
  EMBEDDED_SURVEY_ACTION: "/users/@me/embedded-survey/action",
  USER_SURVEY_SEEN(key) {
    return "/users/@me/survey/" + key + "/seen";
  },
  GUILD_EVENTS: "/guild-events",
  GUILD_EVENT(arg0, arg1) {
    return "/guilds/" + arg0 + "/scheduled-events/" + arg1;
  },
  GUILD_EVENT_IMAGE(id, image, png) {
    return "/guild-events/" + id + "/images/" + image + "." + png;
  },
  GUILD_EVENTS_FOR_GUILD(outer1_0) {
    return "/guilds/" + outer1_0 + "/scheduled-events";
  },
  GUILD_EVENT_USER_COUNTS(outer1_0, outer1_1) {
    return "/guilds/" + outer1_0 + "/scheduled-events/" + outer1_1 + "/users/counts";
  },
  GUILD_EVENT_USERS(c2, outer1_0, outer1_1) {
    let str = "";
    if (null != outer1_1) {
      const _HermesInternal = HermesInternal;
      str = "/" + outer1_1;
    }
    return "/guilds/" + c2 + "/scheduled-events/" + outer1_0 + str + "/users";
  },
  USER_GUILD_EVENT(outer1_2, outer1_0, outer1_1) {
    let str = "";
    if (null != outer1_1) {
      const _HermesInternal = HermesInternal;
      str = "/" + outer1_1;
    }
    return "/guilds/" + outer1_2 + "/scheduled-events/" + outer1_0 + str + "/users/@me";
  },
  USER_GUILD_EVENTS: "/users/@me/scheduled-events",
  GUILD_EVENT_EXCEPTIONS(guild_id, id) {
    return "/guilds/" + guild_id + "/scheduled-events/" + id + "/exceptions";
  },
  GUILD_EVENT_EXCEPTION(guild_id, id, event_exception_id) {
    return "/guilds/" + guild_id + "/scheduled-events/" + id + "/exceptions/" + event_exception_id;
  },
  MEMBER_SAFETY_SUPPLEMENTAL(arg0) {
    return "/guilds/" + arg0 + "/members/supplemental";
  },
  GUILD_MEMBER_SEARCH(arg0) {
    return "/guilds/" + arg0 + "/members-search";
  },
  GUILD_AUTOMOD_RULES(closure_0) {
    return "/guilds/" + closure_0 + "/auto-moderation/rules";
  },
  GUILD_AUTOMOD_RULE(closure_1, closure_0) {
    return "/guilds/" + closure_1 + "/auto-moderation/rules/" + closure_0;
  },
  GUILD_AUTOMOD_VALIDATE_RULE(guildId) {
    return "/guilds/" + guildId + "/auto-moderation/rules/validate";
  },
  GUILD_AUTOMOD_CLEAR_MENTION_RAID(closure_0) {
    return "/guilds/" + closure_0 + "/auto-moderation/clear-mention-raid";
  },
  GUILD_AUTOMOD_ALERT_ACTION(guild_id) {
    return "/guilds/" + guild_id + "/auto-moderation/alert-action";
  },
  GUILD_INCIDENT_ACTIONS(arg0) {
    return "/guilds/" + arg0 + "/incident-actions";
  },
  GUILD_INCIDENT_REPORT_FALSE_ALARM(arg0) {
    return "/guilds/" + arg0 + "/auto-moderation/false-alarm";
  },
  GUILD_INCIDENT_REPORT_RAID(arg0) {
    return "/guilds/" + arg0 + "/auto-moderation/report-raid";
  },
  DIRECTORY_CHANNEL_ENTRIES(closure_0) {
    return "/channels/" + closure_0 + "/directory-entries";
  },
  DIRECTORY_CHANNEL_ENTRY(closure_0, closure_1) {
    return "/channels/" + closure_0 + "/directory-entry/" + closure_1;
  },
  DIRECTORY_ENTRIES_SEARCH(arg0) {
    return "/channels/" + arg0 + "/directory-entries/search";
  },
  DIRECTORY_CHANNEL_CATEGORY_COUNTS(closure_0) {
    return "/channels/" + closure_0 + "/directory-entries/counts";
  },
  DIRECTORY_CHANNEL_LIST_BY_ID(closure_0) {
    return "/channels/" + closure_0 + "/directory-entries/list";
  },
  DIRECTORY_ENTRIES_BROADCAST_INFO(arg0) {
    return "/guilds/" + arg0 + "/directory-entries/broadcast";
  },
  PRICE_TIERS: "/store/price-tiers",
  TEAMS: "/teams",
  APPLICATIONS: "/applications",
  APPLICATIONS_WITH_ASSETS: "/applications-with-assets",
  APPLICATION_OWNER_TRANSFER(outer1_0) {
    return "/applications/" + outer1_0 + "/transfer";
  },
  HUB_WAITLIST_SIGNUP: "/hub-waitlist/signup",
  HUB_EMAIL_VERIFY: "/guilds/automations/email-domain-lookup/verify",
  HUB_EMAIL_VERIFY_CODE: "/guilds/automations/email-domain-lookup/verify-code",
  PROMOTIONS: "/promotions",
  BOGO_PROMOTIONS: "/bogo-promotions",
  CLAIMED_OUTBOUND_PROMOTION_CODES: "/users/@me/outbound-promotions/codes",
  CLAIM_OUTBOUND_PROMOTION_CODE(c0) {
    return "/outbound-promotions/" + c0 + "/claim";
  },
  HUB_EMAIL_VERIFY_SEND: "/guilds/automations/email-domain-lookup",
  GUILD_PRODUCT_CREATE_ATTACHMENT_UPLOAD(arg0) {
    return "/guilds/" + arg0 + "/products/attachments";
  },
  GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(closure_0) {
    return "/guilds/" + closure_0 + "/role-subscriptions/settings";
  },
  GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(closure_0, closure_1) {
    let str = "";
    if (null != closure_1) {
      const _HermesInternal = HermesInternal;
      str = "/" + closure_1;
    }
    return "/guilds/" + closure_0 + "/role-subscriptions/group-listings" + str;
  },
  GUILD_ROLE_SUBSCRIPTION_LISTINGS(closure_0, closure_1, closure_2) {
    let str = "";
    if (null != closure_2) {
      const _HermesInternal = HermesInternal;
      str = "/" + closure_2;
    }
    return "/guilds/" + closure_0 + "/role-subscriptions/group-listings/" + closure_1 + "/subscription-listings" + str;
  },
  GUILD_ROLE_SUBSCRIPTION_GROUP_LISTING_ARCHIVE(closure_0, closure_1, closure_2) {
    return "/guilds/" + closure_0 + "/role-subscriptions/group-listings/" + closure_1 + "/subscription-listings/" + closure_2 + "/archive";
  },
  GUILD_ROLE_SUBSCRIPTION_TRIALS(closure_0) {
    return "/guilds/" + closure_0 + "/role-subscriptions/trials";
  },
  GUILD_ROLE_SUBSCRIPTION_LISTING_TRIAL(closure_0, closure_1) {
    return "/guilds/" + closure_0 + "/role-subscriptions/subscription-listings/" + closure_1 + "/trial";
  },
  GUILD_ROLE_SUBSCRIPTION_LISTING_TEMPLATES(closure_0) {
    return "/guilds/" + closure_0 + "/role-subscriptions/templates";
  },
  CREATOR_MONETIZATION_ENABLE_REQUESTS(closure_0) {
    return "/guilds/" + closure_0 + "/creator-monetization/enable-requests";
  },
  CREATOR_MONETIZATION_ELIGIBILITY(closure_0) {
    return "/guilds/" + closure_0 + "/creator-monetization/requirements";
  },
  CREATOR_MONETIZATION_ACCEPT_TERMS(closure_0, closure_1) {
    return "/guilds/" + closure_0 + "/creator-monetization/enable-requests/" + closure_1 + "/accept-terms";
  },
  CREATOR_MONETIZATION_ACCEPT_TERMS_V2(closure_0) {
    return "/guilds/" + closure_0 + "/creator-monetization/accept-terms";
  },
  CREATOR_MONETIZATION_RESTRICTIONS(closure_0) {
    return "/guilds/" + closure_0 + "/creator-monetization/restrictions";
  },
  GUILD_ROLE_SUBSCRIPTION_TRIAL_ELIGIBILITY(closure_0, closure_1, closure_2) {
    return "/guilds/" + closure_0 + "/role-subscriptions/subscription-listings/" + closure_1 + "/trial/" + closure_2 + "/eligibility";
  },
  CREATOR_MONETIZATION_MARKETING_ONBOARDING(closure_0) {
    return "/guilds/" + closure_0 + "/creator-monetization/marketing/onboarding";
  },
  CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(body) {
    return "/guilds/" + body + "/creator-monetization/ownership-transfer/onboarding";
  },
  CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(arg0) {
    return "/guilds/" + arg0 + "/creator-monetization/accept-new-terms";
  },
  CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(arg0) {
    return "/guilds/" + arg0 + "/creator-monetization/accept-new-terms-demonetized";
  },
  CREATOR_MONETIZATION_REMOVE_MONETIZATION(closure_0) {
    return "/guilds/" + closure_0 + "/creator-monetization/remove-monetization";
  },
  SUBSCRIPTION_PLAN_GROUP_LISTING(closure_0) {
    return "/subscription-plans/" + closure_0 + "/subscription-group-listing";
  },
  SUBSCRIPTION_PLAN_GUILD_ROLE_GROUP_LISTING(closure_0) {
    return "/subscription-plans/" + closure_0 + "/guild-role-subscription-group-listing";
  },
  MEDIA_POST_RESHARE_GET_PREVIEW(closure_0) {
    return "/channels/" + closure_0 + "/media-post-preview";
  },
  UNFURL_EMBED_URLS: "/unfurler/embed-urls",
  BUG_REPORTS: "/private/bug-reports",
  CLIP_FEEDBACK: "/private/clip-feedback",
  CLIPS_MODULE_ASSETS: "/clips/module-assets",
  PAYMENT_PAYOUT_GROUPS(arg0) {
    return "/applications/" + arg0 + "/payment-payout-groups";
  },
  GUILD_PRODUCTS(arg0) {
    return "/guilds/" + arg0 + "/products";
  },
  GUILD_PRODUCT_LISTINGS(arg0, arg1) {
    let str = "";
    if (null != arg1) {
      const _HermesInternal = HermesInternal;
      str = "/" + arg1;
    }
    return "/guilds/" + arg0 + "/products/listings" + str;
  },
  GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(arg0, arg1, arg2) {
    return "/guilds/" + arg0 + "/products/listings/" + arg1 + "/attachments/" + arg2 + "/download";
  },
  GUILD_PROFILE(outer1_0) {
    return "/guilds/" + outer1_0 + "/profile";
  },
  GUILD_PROFILE_VISIBILITY(outer1_0) {
    return "/guilds/" + outer1_0 + "/profile/visibility";
  },
  GUILD_THEME(arg0) {
    return "/guilds/" + arg0 + "/theme";
  },
  USER_SET_GUILD_IDENTITY: "/users/@me/clan",
  TENOR_ASSET_PATH: "/tenor",
  GIPHY_ASSET_PATH: "/giphy",
  KLIPY_ASSET_PATH: "/klipy",
  EMAIL_SETTINGS: "/users/@me/email-settings",
  ACCOUNT_NOTIFICATION_SETTINGS: "/users/@me/notification-settings",
  VIDEO_FILTER_ASSETS: "/users/@me/video-filters/assets",
  VIDEO_FILTER_ASSET(id) {
    return "/users/@me/video-filters/assets/" + id;
  },
  VIDEO_FILTER_ASSET_LAST_USED(id) {
    return "/users/@me/video-filters/assets/" + id + "/last-used";
  },
  VIDEO_FILTER_ASSET_STORAGE(userId, assetId, assetHash, arg3) {
    return "/users/" + userId + "/video-filter-assets/" + assetId + "/" + assetHash + "." + arg3;
  },
  GUILD_SOUNDBOARD_SOUNDS(c0) {
    return "/guilds/" + c0 + "/soundboard-sounds";
  },
  GUILD_SOUNDBOARD_SOUND(c0, c1) {
    return "/guilds/" + c0 + "/soundboard-sounds/" + c1;
  },
  SOUNDBOARD_SOUND(arg0) {
    return "/soundboard-sounds/" + arg0;
  },
  SOUNDBOARD_SOUND_GUILD_DATA(closure_0, closure_1) {
    return "/soundboard-sounds/" + closure_0 + "/guild/" + closure_1;
  },
  SOUNDBOARD_DEFAULT_SOUNDS: "/soundboard-default-sounds",
  SEND_SOUNDBOARD_SOUND(channelId) {
    return "/channels/" + channelId + "/send-soundboard-sound";
  },
  SEND_CLIPS_REMOTE_TRIGGER(arg0) {
    return "/channels/" + arg0 + "/clips-remote-trigger";
  },
  APPLICATION_COMMANDS_SEARCH(arg0) {
    return "/channels/" + arg0 + "/application-commands/search";
  },
  APPLICATION_COMMAND_INDEX_CHANNEL(channelId) {
    return "/channels/" + channelId + "/application-command-index";
  },
  APPLICATION_COMMAND_INDEX_GUILD(guildId) {
    return "/guilds/" + guildId + "/application-command-index";
  },
  APPLICATION_COMMAND_INDEX_USER: "/users/@me/application-command-index",
  APPLICATION_COMMAND_INDEX_APPLICATION(applicationId) {
    return "/applications/" + applicationId + "/application-command-index";
  },
  GUILD_COMMANDS_FOR_APPLICATION(arg0, arg1) {
    return "/guilds/" + arg0 + "/application-commands/" + arg1;
  },
  APPLICATION_DIRECTORY_APPLICATION(closure_0) {
    return "/application-directory-static/applications/" + closure_0;
  },
  APPLICATION_DIRECTORY_EMBED_APPLICATION(arg0) {
    return "/application-directory/applications/" + arg0 + "/embed";
  },
  APPLICATION_DIRECTORY_CATEGORIES: "/application-directory-static/categories",
  APPLICATION_DIRECTORY_SIMILAR(c0) {
    return "/application-directory-static/applications/" + c0 + "/similar";
  },
  APPLICATION_DIRECTORY_SEARCH: "/application-directory-static/search",
  APPLICATION_DIRECTORY_COLLECTIONS: "/application-directory-static/collections",
  APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(itemId, hash, arg2) {
    return "/application-directory/collection-items/" + itemId + "/" + hash + "." + arg2;
  },
  GUILD_FEED(arg0) {
    return "/guilds/" + arg0 + "/guild-feed";
  },
  USER_EMAIL: "/users/@me/email",
  USER_EMAIL_VERIFY_CODE: "/users/@me/email/verify-code",
  PREMIUM_USAGE: "/users/@me/premium-usage",
  ACTIVE_CHANNELS(closure_0) {
    return "/guilds/" + closure_0 + "/active-channels";
  },
  NOTIF_CENTER_ITEMS(id) {
    let str = "";
    if (null != id) {
      const _HermesInternal = HermesInternal;
      str = "/" + id;
    }
    return "/users/@me/notification-center/items" + str;
  },
  NOTIF_CENTER_ITEMS_ACK(closure_0) {
    return "/users/@me/notification-center/items/" + closure_0 + "/ack";
  },
  NOTIF_CENTER_ITEMS_BULK_ACK: "/users/@me/notification-center/items/bulk-ack",
  NOTIFICATION_SNAPSHOTS: "/users/@me/notification-settings/snapshots",
  NOTIFICATION_SNAPSHOT(arg0) {
    return "/users/@me/notification-settings/snapshots/" + arg0;
  },
  RESTORE_NOTIFICATION_SNAPSHOT(arg0) {
    return "/users/@me/notification-settings/snapshots/" + arg0 + "/restore-guilds";
  },
  GUILD_ADMIN_SERVER_ELIGIBILITY(arg0) {
    return "/guilds/" + arg0 + "/admin-server-eligibility";
  },
  JOIN_ADMIN_SERVER(arg0) {
    return "/guilds/" + arg0 + "/join-admin-server";
  },
  AUTH_SESSIONS: "/auth/sessions",
  AUTH_SESSION_NOTIFICATIONS_DEBUG: "/auth/sessions/debug/notifications",
  AUTH_SESSIONS_LOGOUT: "/auth/sessions/logout",
  CUSTOM_CALL_SOUNDS(id) {
    return "/channels/" + id + "/custom-call-sounds";
  },
  VOICE_CHANNEL_EFFECTS(arg0) {
    return "/channels/" + arg0 + "/voice-channel-effects";
  },
  APPLICATION_SUBSCRIPTION_GROUP_LISTING(closure_0, closure_1) {
    return "/applications/" + closure_0 + "/subscription-group-listings/" + closure_1;
  },
  GUILD_ENTITLEMENTS(closure_0) {
    return "/guilds/" + closure_0 + "/entitlements";
  },
  GUILD_ROLE_CONNECTIONS_CONFIGURATION(closure_0, closure_1) {
    return "/guilds/" + closure_0 + "/roles/" + closure_1 + "/connections/configuration";
  },
  MESSAGE_REQUESTS_SUPPLEMENTAL_DATA: "/users/@me/message-requests/supplemental-data",
  CONNECT_REQUEST_CREATE: "/consoles/connect-request",
  CONNECT_REQUEST(arg0) {
    return "/consoles/connect-request/" + arg0;
  },
  CONSOLES_DEVICES(closure_0) {
    return "/consoles/" + closure_0 + "/devices";
  },
  CONSOLES_DEVICES_COMMANDS(closure_0, closure_1) {
    return "/consoles/" + closure_0 + "/devices/" + closure_1 + "/commands";
  },
  CONSOLES_DEVICES_COMMAND(closure_0, closure_1, closure_2) {
    return "/consoles/" + closure_0 + "/devices/" + closure_1 + "/commands/" + closure_2;
  },
  ELIGIBLE_APPLICATION_SUBSCRIPTION_GUILDS: "/users/@me/billing/eligible-application-subscription-guilds",
  APPLICATION_USER_ROLE_CONNECTIONS: "/users/@me/applications/role-connections",
  GET_SAVED_MESSAGES: "/users/@me/saved-messages",
  PUT_SAVED_MESSAGE(channelId, messageId) {
    return "/users/@me/saved-messages/" + channelId + "/" + messageId;
  },
  DELETE_SAVED_MESSAGE(channelId, messageId) {
    return "/users/@me/saved-messages/" + channelId + "/" + messageId;
  },
  GET_REFERRALS_REMAINING: "/users/@me/referrals/eligibility",
  GET_REFERRAL_ELIGIBLE_USERS: "/users/@me/referrals/eligible-users",
  CREATE_REFERRAL(closure_0) {
    return "/users/@me/referrals/" + closure_0;
  },
  FAMILY_CENTER_TEEN_ACTIVITY(outer1_0) {
    return "/family-center/" + outer1_0 + "/activity";
  },
  FAMILY_CENTER_TEEN_ACTIVITY_ME: "/family-center/@me",
  FAMILY_CENTER_TEEN_ACTIVITY_MORE(outer1_0, outer1_1, outer1_2, outer1_3) {
    return "/family-center/more-activity/" + outer1_0 + "/" + outer1_1 + "/" + outer1_2 + "/" + outer1_3;
  },
  FAMILY_CENTER_LINKED_USERS: "/users/@me/linked-users",
  FAMILY_CENTER_LINK_CODE: "/family-center/@me/link-code",
  FAMILY_CENTER_CONNECTION_PREREQUISITES: "/family-center/connection-prerequisites",
  FAMILY_CENTER_FETCH_TEEN_USER(arg0) {
    return "/family-center/teen-user/" + arg0;
  },
  FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS(id) {
    return "/family-center/" + id + "/settings-and-consents";
  },
  FAMILY_CENTER_TEEN_SETTINGS(outer1_0) {
    return "/family-center/" + outer1_0 + "/settings-proto";
  },
  FAMILY_CENTER_TEEN_CONSENTS(selectedTeenId) {
    return "/family-center/" + selectedTeenId + "/consents";
  },
  FAMILY_CENTER_SHARE_IAR_WITH_PARENTS: "/family-center/share-iar-with-parents",
  FAMILY_CENTER_RESTRICTED_SCHEDULE_RULE(closure_0) {
    return "/family-center/" + closure_0 + "/restricted-schedule/rule";
  },
  FAMILY_CENTER_RESTRICTED_SCHEDULE_RULES(closure_0, body) {
    return "/family-center/" + closure_0 + "/restricted-schedule/rules/" + body;
  },
  REFERRAL_OFFER_ID_RESOLVE(closure_0) {
    return "/referrals/" + closure_0;
  },
  BADGE_ICON(arg0) {
    return "/badge-icons/" + arg0 + ".png";
  },
  FINISH_MFA_CHECK: "/mfa/finish",
  CREATE_REVERSE_TRIAL: "/user-offers/reverse-trial",
  CREATE_USER_OFFER(arg0, arg1) {
    return "/user-offers/create/" + arg1 + "/" + arg0;
  },
  UPDATE_USER_OFFER(arg0, arg1) {
    return "/user-offers/" + arg1 + "/" + arg0;
  },
  USER_OFFERS: "/user-offers",
  USER_OFFER_IDS: "/user-offer-ids",
  GUILD_MEMBERS_UNUSUAL_DM_ACTIVITY(arg0) {
    return "/guilds/" + arg0 + "/members/unusual-dm-activity";
  },
  SAFETY_HUB: "/safety-hub/@me",
  SAFETY_HUB_REQUEST_REVIEW(arg0) {
    return "/safety-hub/request-review/" + arg0;
  },
  SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(arg0) {
    return "/safety-hub/suspended/request-review/" + arg0;
  },
  SAFETY_HUB_SUSPENDED: "/safety-hub/suspended/@me",
  SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION: "/safety-hub/suspended/request-verification",
  SAFETY_HUB_CHECK_SUSPENDED_AGE_VERIFICATION: "/safety-hub/suspended/check-verification",
  SAFETY_HUB_GET_SUSPENDED_AGE_VERIFICATION_METHODS: "/age-verification/suspended/methods",
  INITIATE_CHANNEL_PROMPTS: "/initiate-prompts",
  FORCE_SEND_PROMPT(arg0) {
    return "/" + arg0 + "/force-send-prompt";
  },
  EXPLICIT_MEDIA_REPORT_FALSE_POSITIVE: "/attachments/report-false-positive",
  EXPLICIT_MEDIA_SENDER_REPORT_FALSE_POSITIVE: "/attachments/sender-report-false-positive",
  BULK_GUILD_BAN(outer1_0) {
    return "/guilds/" + outer1_0 + "/bulk-ban";
  },
  BULK_GUILD_BAN_V2(outer1_0) {
    return "/guilds/" + outer1_0 + "/bulk-ban/v2";
  },
  EXPLICIT_MEDIA_SCAN_MESSAGES(channel_id) {
    return "/channels/" + channel_id + "/explicit-media";
  },
  EXPLICIT_MEDIA_SCAN_MULTI_CHANNEL_MESSAGES: "/messages/explicit-media",
  POLL_ANSWERS(c0, c1) {
    return "/channels/" + c0 + "/polls/" + c1 + "/answers/@me";
  },
  POLL_EXPIRE(c0, c1) {
    return "/channels/" + c0 + "/polls/" + c1 + "/expire";
  },
  POLL_ANSWER_VOTERS(c0, c1, name) {
    return "/channels/" + c0 + "/polls/" + c1 + "/answers/" + name;
  },
  MARKETING_CAMPAIGN_ELIGIBILITY(arg0) {
    return "/premium-marketing/@me/campaigns/" + arg0 + "/eligibility";
  },
  QUESTS_CURRENT_QUESTS: "/quests/@me",
  QUESTS_CLAIMED_QUESTS: "/quests/@me/claimed",
  QUEST(closure_0) {
    return "/quests/" + closure_0;
  },
  QUEST_PREVIEW(arg0) {
    return "/quests/" + arg0 + "/preview";
  },
  QUESTS_ENROLL(arg0) {
    return "/quests/" + arg0 + "/enroll";
  },
  QUEST_ON_CONSOLE_START(closure_0) {
    return "/quests/" + closure_0 + "/console/start";
  },
  QUEST_ON_CONSOLE_STOP(closure_0) {
    return "/quests/" + closure_0 + "/console/stop";
  },
  QUESTS_HEARTBEAT(c0) {
    return "/quests/" + c0 + "/heartbeat";
  },
  QUESTS_VIDEO_PROGRESS(closure_0) {
    return "/quests/" + closure_0 + "/video-progress";
  },
  QUESTS_REWARD_CODE(arg0) {
    return "/quests/" + arg0 + "/reward-code";
  },
  QUESTS_CLAIM_REWARD(arg0) {
    return "/quests/" + arg0 + "/claim-reward";
  },
  QUESTS_DISMISS_CONTENT(arg0, arg1) {
    return "/quests/" + arg0 + "/dismissible-content/" + arg1 + "/dismiss";
  },
  QUESTS_PREVIEW_STATUS(closure_0) {
    return "/quests/" + closure_0 + "/preview/status";
  },
  QUESTS_PREVIEW_DISMISSIBILITY(closure_0) {
    return "/quests/" + closure_0 + "/preview/dismissibility";
  },
  QUESTS_PREVIEW_COMPLETE(closure_0) {
    return "/quests/" + closure_0 + "/preview/complete";
  },
  QUESTS_RESET_RECENT_QUEST_COMPLETIONS: "/quests/reset-recent-quest-completions",
  QUEST_FETCH_QUEST_TO_DELIVER: "/quests/decision",
  QUEST_EARNED_DECISION(arg0, arg1, uuid) {
    let str = "";
    if (null != uuid) {
      const _HermesInternal = HermesInternal;
      str = "&client_heartbeat_session_id=" + uuid;
    }
    return "/quests/earned-decision?quest_ids=" + arg0 + "&content=" + arg1 + str;
  },
  ATTACHMENTS_REFRESH_URLS: "/attachments/refresh-urls",
  GAME_INVITE(arg0) {
    return "/game-invite/@me/" + arg0;
  },
  GAME_INVITES: "/game-invite/@me",
  ADD_SAFETY_WARNING(id) {
    return "/channels/" + id + "/add-safety-warning";
  },
  DELETE_SAFETY_WARNINGS(arg0) {
    return "/channels/" + arg0 + "/safety-warnings";
  },
  SAFETY_WARNING_FALSE_POSITIVE(arg0) {
    return "/channels/" + arg0 + "/safety-warning/report-false-positive";
  },
  MY_CONTENT_INVENTORY(c0) {
    let str = "";
    if (null != c0) {
      const _HermesInternal = HermesInternal;
      str = "?refresh_token=" + c0;
    }
    return "/content-inventory/users/@me" + str;
  },
  CONTENT_INVENTORY_OUTBOX(closure_0) {
    return "/content-inventory/users/" + closure_0 + "/outbox";
  },
  DELETE_MY_CONTENT_INVENTORY_OUTBOX_ENTRY_HISTORY(id) {
    return "/content-inventory/users/@me/outbox/entries/id/" + id + "/history";
  },
  MY_SPOTIFY_CONTENT_INVENTORY: "/content-inventory/users/@me/spotify",
  MY_CONTENT_INVENTORY_APPLICATION(arg0) {
    return "/content-inventory/users/@me/applications/" + arg0;
  },
  TENURE_REWARD_SYNC: "/users/@me/tenure-reward/sync",
  STORE_LAYOUT(arg0) {
    return "/applications/" + arg0 + "/store-layout";
  },
  CHECKOUT_RECOVERY: "/users/@me/billing/checkout-recovery",
  CAMPAIGN_CONTEXT: "/users/@me/billing/campaign-context",
  SIMILAR_GAMES(closure_0) {
    return "/content-inventory/users/@me/similar-games/" + closure_0;
  },
  VOICE_PUBLIC_KEYS() {
    return "/voice/public-keys";
  },
  VOICE_MATCH_PUBLIC_KEY(closure_0) {
    return "/voice/" + closure_0 + "/match-public-key";
  },
  ACCOUNT_REVERT: "/auth/revert",
  VIRTUAL_CURRENCY_SKU_REDEEM(c0) {
    return "/virtual-currency/skus/" + c0 + "/redeem";
  },
  VIRTUAL_CURRENCY_USER_BALANCE: "/users/@me/virtual-currency/balance",
  IGNORE_USER(id) {
    return "/users/@me/relationships/" + id + "/ignore";
  },
  SCHEDULED_MESSAGES: "/users/@me/scheduled-messages",
  SCHEDULED_MESSAGE(arg0) {
    return "/users/@me/scheduled-messages/" + arg0;
  },
  HOLIDAY_REDEEM_PRIZE: "/holidays/redeem-prize",
  APPLIED_BOOST_MODIFY_END_DATE: "/debug/applied-boosts/ends-at",
  SEND_POWERUPS_SYSTEM_MESSAGE(closure_0) {
    return "/guilds/" + closure_0 + "/powerups-system-message";
  },
  SAFETY_FLOWS_TASK: "/safety-flows/task",
  SAFETY_FLOWS_RESEND_VERIFICATION_CODE: "/safety-flows/resend/email/reverification/pincode",
  APEX_EXPERIMENTS_METADATA: "/apex/experiments/metadata",
  APEX_EXPERIMENTS: "/apex/experiments",
  CONFERENCE_MODE_GUILDS: "/conference-mode/guilds",
  CONFERENCE_MODE_VOICE_CHANNELS(arg0) {
    return "/conference-mode/" + arg0 + "/channels";
  },
  CONFERENCE_MODE_VOICE_CHANNEL(arg0) {
    return "/conference-mode/channels/" + arg0;
  },
  CONFERENCE_MODE_VOICE_CHANNEL_USERS(arg0) {
    return "/conference-mode/channels/" + arg0 + "/users";
  },
  CONFERENCE_MODE_EVENTS: "/conference-mode/events",
  CONFERENCE_MODE_CONFERENCES: "/conference-mode/conference",
  GUILD_MIGRATE_PIN_PERMISSION(c0) {
    return "/guilds/" + c0 + "/migrate-pin-permission";
  },
  GUILD_MIGRATE_SLOWMODE_PERMISSION(c0) {
    return "/guilds/" + c0 + "/migrate-bypass-slowmode-permission";
  },
  QUESTS_GET_DECISIONS: "/quests/get-decisions",
  QUESTS_CREATIVE_PREVIEW: "/quests/preview",
  QUESTS_CREATIVES_CLAIM_REWARD(closure_0) {
    return "/quests/creatives/" + closure_0 + "/claim-reward";
  },
  QUESTS_APP_STORE_METADATA: "/quests/appstore-metadata",
  GAME_ANNOUNCEMENTS(arg0) {
    return "/games/" + arg0 + "/announcements";
  },
  GUILD_ROOM(closure_0, closure_1) {
    return "/guilds/" + closure_0 + "/rooms/" + closure_1;
  },
  GUILD_ROOM_CONNECT(arg0, arg1) {
    return "/guilds/" + arg0 + "/rooms/" + arg1 + "/connect";
  },
  GUILD_ROOM_UPDATE(arg0, arg1) {
    return "/guilds/" + arg0 + "/rooms/" + arg1 + "/update";
  },
  GUILD_ROOM_OBJECT_CREATE(closure_0, closure_1) {
    return "/guilds/" + closure_0 + "/rooms/" + closure_1 + "/objects";
  },
  GUILD_ROOM_OBJECT_UPDATE(closure_0, closure_1, closure_2) {
    return "/guilds/" + closure_0 + "/rooms/" + closure_1 + "/objects/" + closure_2 + "/update";
  },
  GUILD_ROOM_OBJECT_DELETE(closure_0, closure_1, closure_2) {
    return "/guilds/" + closure_0 + "/rooms/" + closure_1 + "/objects/" + closure_2;
  },
  HAVEN_CONNECT(arg0) {
    return "/haven/" + arg0 + "/connect";
  },
  HAVEN_DISCONNECT(arg0) {
    return "/haven/" + arg0 + "/disconnect";
  },
  HAVEN_UPDATE(arg0) {
    return "/haven/" + arg0 + "/update";
  },
  HAVEN_GET_ASSETS: "/haven/assets",
  VIBEGRATIONS_PROJECTS: "/vibegrations/projects",
  VIBEGRATIONS_PROJECT(arg0) {
    return "/vibegrations/projects/" + arg0;
  },
  VIBEGRATIONS_PROJECT_WS_TICKET(arg0) {
    return "/vibegrations/projects/" + arg0 + "/ws-ticket";
  },
  VIBEGRATIONS_PROJECT_PUBLISH(arg0) {
    return "/vibegrations/projects/" + arg0 + "/publish";
  },
  VIBEGRATIONS_PROJECT_PUBLISH_PREVIEW(arg0) {
    return "/vibegrations/projects/" + arg0 + "/publish-preview";
  },
  GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(arg0, arg1, arg2, arg3) {
    return "/guild-space/" + arg0 + "/image-text-widget/" + arg1 + "/" + arg2 + "." + arg3;
  }
};
const frozen1 = Object.freeze({ ACCOUNT_AGE: 5, MEMBER_AGE: 10 });
const frozen2 = Object.freeze(obj);
const result = 6 * require("set").Seconds.HOUR;
const items1 = [0, 5, 10, 15, 30, require("set").Seconds.MINUTE, 2 * require("set").Seconds.MINUTE, 5 * require("set").Seconds.MINUTE, 10 * require("set").Seconds.MINUTE, 15 * require("set").Seconds.MINUTE, 30 * require("set").Seconds.MINUTE, require("set").Seconds.HOUR, 2 * require("set").Seconds.HOUR, result];
obj = {
  API_DOCS: "" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/developers/docs/intro",
  API_DOCS_GAME_AND_SERVER_MANAGEMENT: "" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/developers/docs/game-and-server-management/alpha-and-beta-testing",
  API_DOCS_APPLICATION_SKUS_INDEX(arg0) {
    return "" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/developers/applications/" + arg0 + "/skus";
  },
  API_DOCS_NEWS_CHANNELS: "" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/developers/docs/game-and-server-management/special-channels#news-channels",
  API_DOCS_WEBHOOKS: "" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/developers/docs/resources/webhook",
  DEVELOPER_PORTAL: "" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/developers",
  DEVELOPER_PORTAL_TEAMS: "" + window.GLOBAL_ENV.DEVELOPERS_ENDPOINT + "/developers/teams",
  DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY: "" + window.GLOBAL_ENV.DEVELOPERS_ENDPOINT + "/developers/applications/select/game-identity",
  DEVELOPER_PORTAL_PAYOUT_SETTINGS(arg0) {
    return "" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/developers/teams/" + arg0 + "/payout-settings";
  },
  DEVELOPER_PORTAL_GUILD_ANALYTICS(arg0) {
    return "" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/developers/servers/" + arg0;
  },
  DEVELOPER_PORTAL_LOGIN_HANDOFF(nonce, closure_3, closure_0) {
    return "" + window.GLOBAL_ENV.DEVELOPERS_ENDPOINT + "/developers/handoff#handoff_key=" + nonce + "&handoff_token=" + closure_3 + "&redirect_to=" + encodeURIComponent(closure_0);
  },
  DEVELOPER_PORTAL_GUILD_ANALYTICS_ROLE_SUBSCRIPTION(arg0) {
    return "" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/developers/servers/" + arg0 + "/analytics/premium-membership";
  },
  COMPANY: "" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/company",
  PARTNERS: "" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/partners",
  TERMS: "" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/terms",
  TERMS_SUMMARY: "" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/safety/important-policy-updates",
  PAID_TERMS: "" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/terms/paid-services-terms",
  PAID_TERMS_VIRTUAL_GOODS: "" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/terms/paid-services-terms#6",
  PAID_TERMS_ORBS: "" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/terms/paid-services-terms#14",
  GIFT_CARD_TERMS: "" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/terms/gift-card-terms",
  WALLET_TERMS: "" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/terms/wallet-terms",
  PRIVACY: "" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/privacy",
  GUIDELINES: "" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/guidelines",
  ACKNOWLEDGEMENTS: "" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/acknowledgements",
  DOWNLOAD: "" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/download",
  CONTACT: "http://dis.gd/contact",
  KRISP: "https://api.krisp.ai/v2/resource/link/discord",
  STREAMKIT: "" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/streamkit",
  STAGES: "" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/stages",
  SNOWSGIVING: "" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/snowsgiving",
  TOS_UPDATE_FEB_2022: "http://dis.gd/importantupdates",
  HARMFUL_LINKS: "https://dis.gd/phish",
  SLASH_COMMANDS: "https://discord.com/blog/welcome-to-the-new-era-of-discord-apps",
  GUILD_ONBOARDING_EXAMPLES: "https://support.discord.com/hc/en-us/articles/10394859532823",
  ROLE_SUBSCRIPTION_STORE_PAGE(slug) {
    return "https:" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/servers/" + slug;
  },
  INVITES_HELP: "https://support.discord.com/hc/en-us/articles/208866998-Invites-101",
  SAFETY_CENTER: "" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/safetycenter"
};
const frozen3 = Object.freeze(obj);
const obj2 = { AUTH: "Auth", STORE_LISTING: "Store Listing", STORE_DIRECTORY_HOME: "Store Directory Home", STORE_DIRECTORY_BROWSE: "Store Directory Browse", CHANNEL_STORE_LISTING: "Channel Store Listing", LIBRARY: "Library", LIBRARY_SETTINGS: "Library Settings", USER_SETTINGS: "User Settings", USER_PROFILE: "User Profile", APP_ICONS: "App Icons", GUILD_CHANNEL: "Guild Channel", GUILD_SETTINGS: "Guild Settings", GUILD_POWERUPS_OVERVIEW: "Guild Powerups Overview", GUILD_POWERUPS_MARKETING: "Guild Powerups Marketing", GAME_SERVERS: "Game Servers", PRIVATE_CHANNEL_LIST: "Private Channel List", CHANNEL_SETTINGS: "Channel Settings", CREATE_CHANNEL_MODAL: "Create Channel Modal", DM_CHANNEL: "DM Channel", CONTACTS_LIST: "Contacts List", FRIENDS_LIST: "Friends List", DIRECT: "Direct", IN_APP: "In App", GUILD_DISCOVERY: "Guild Discovery", GLOBAL_DISCOVERY: "Global Discovery", ICYMI: "ICYMI", QUICK_SWITCHER: "Quick Switcher", PREMIUM_GUILD_USER_MODAL: "User-Facing Premium Guild Subscription Fullscreen Modal", PUBLIC_GUILD: "Public Guild", NSFW_CHANNEL: "NSFW Channel", EXPRESSION_PICKER: "Expression Picker", EMOJI_STUDIO: "Emoji Studio", CUSTOM_STATUS_MODAL: "Custom Status Modal", CHANNEL_WELCOME_CREATE_MODAL: "Channel Welcome Create Modal", GUILD_RULES_CREATE_MODAL: "Guild Rules Create Modal", GO_LIVE_MODAL: "Go Live Modal", CHANNEL_CALL: "Channel Call", CHANNEL_AUTOCOMPLETE_EMOJI_UPSELL_MODAL: "Channel Autocomplete Upsell Modal", REFERRAL_MESSAGE_EMBED: "Referral Message Embed", GUILD_LIST: "Guild List", NATIVE_INVITE_MODAL: "Native Invite Modal", INVITE_EMBED: "Invite Embed", PREVIEW_CAMERA_MODAL: "Preview Camera Modal", PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS: "Premium Upsell Modal - Video Backgrounds", PREMIUM_UPSELL_BURST_REACTIONS: "Premium Upsell Modal - Burst Reactions", PREMIUM_UPSELL_SOUNDBOARD_EVERYWHERE: "Premium Upsell Modal - Soundboard Everywhere", PREMIUM_UPSELL_ANIMATED_EMOJI: "Premium Upsell Modal - Animated Emoji", PREMIUM_UPSELL_EMOJI_EVERYWHERE: "Premium Upsell Modal - Emoji Everywhere", PREMIUM_UPSELL_FILE_UPLOAD: "Premium Upsell Modal - Larger File Uploads", PREMIUM_UPSELL_CLIENT_THEMES: "Premium Upsell Modal - Client Themes", PREMIUM_UPSELL_APP_ICONS: "Premium Upsell Modal - App Icons", PREMIUM_UPSELL_FOR_LATER: "Premium Upsell Modal - For Later", PREMIUM_UPSELL_HALLOWEEN_GIFTING_CAMPAIGN: "Premium Upsell Modal - Halloween Gifting Campaign", PREMIUM_UPSELL_SEASONAL_GIFTING_CAMPAIGN: "Premium Upsell Modal - Seasonal Gifting Campaign", PREMIUM_UPSELL_STREAM_HIGH_QUALITY: "Premium Upsell Modal - Stream High Quality", PREMIUM_UPSELL_VALENTINES_GIFTING_CAMPAIGN: "Premium Upsell Modal - Valentines Gifting Campaign", PREMUIM_UPSELL_GIFTING_PROMOTION: "Premium Upsell Modal - Gifting Promotion", PREMIUM_UPSELL_CUSTOM_THEMES: "Premium Upsell Modal - Custom Themes", PREMIUM_UPSELL_DISPLAY_NAME_STYLES: "Premium Upsell Modal - Display Name Styles", PREMIUM_DOWNGRADE_TO_TIER_0_MODAL: "Premium Downgrade To Tier 0 Modal", CHANGE_IDENTITY_MODAL: "Change Identity Modal", GUILD_MEMBER_PROFILE_SETTINGS: "Guild Member Profile Settings Page", APPLICATION_DIRECTORY: "Application Directory", GIFTING_SETTINGS: "Gifting Settings", SNOWSGIVING: "Snowsgiving", SOUNDBOARD_WHEEL: "Soundboard Wheel", SOUNDBOARD_POPOUT: "Soundboard Popout", CREATE_JOIN_GUILD_MODAL: "Create or Join Guild Modal", GUILD_ONBOARDING: "Guild Onboarding", CUSTOMIZE_COMMUNITY: "Customize Community", ACTIVITY_UPSELL_MODAL: "Activity Upsell Modal", ACTIVITY_UPSELL_ACTION_SHEET: "Activity Upsell Action Sheet", PREMIUM_TRIAL_TUTORIAL_COACHMARK: "Premium Tutorial Coachmark", GUILD_BOOSTING_USER_SETTINGS: "Guild Boosting User Settings", COLLECTIBLES_SHOP: "Collectibles Shop", NITRO_HOME: "Nitro Home", TIERED_TENURE_BADGES_MODAL: "Tiered Tenure Badges Modal", TIERED_TENURE_BADGES_ACTION_SHEET: "Tiered Tenure Badges Action Sheet", SHOP_ORBS_TAB: "Shop Orbs Tab", ORBS_ANNOUNCEMENT_MODAL: "Orbs Announcement Modal", QUEST_ORB_MULTIPLIER_PERK_INFO: "Quest Orb Multiplier Action Sheet", GLOBAL_DISCOVERY_QUESTS: "Global Discovery Quests", BOGO_PROMOTION_ACTION_SHEET: "Bogo Promotion Action Sheet", BOGO_PROMOTION_MARKETING_PAGE_BANNER: "Bogo Promotion Marketing Page Banner", PREMIUM_MARKETING_MOMENT_ACTION_SHEET: "Premium Marketing Moment Action Sheet" };
const obj3 = { HERO: "Hero", BODY: "Body", NAVIGATION: "Navigation", TABS: "Tabs", CONTEXT_MENU: "Context Menu", HEADER: "Header", FOOTER: "Footer", DIRECT_ROUTE_ACCESS: "Direct Route Access", NOTIFICATION_BAR: "Notification Bar", PROFILE_MODAL: "Profile Modal", EMOJI_PICKER_POPOUT: "Emoji Picker Popout", VOICE_CHANNEL_EFFECT_EMOJI_PICKER_POPOUT: "Voice Channel Effect Emoji Picker Popout", FILE_UPLOAD_POPOUT: "File Upload Popout", GUILD_POPOUT: "Guild Popout", ROLE_ICON_POPOUT: "Role Icon Popout", GAME_MODAL: "Game Modal", GAME_POPOUT: "Game Popout", EMOJI_UPSELL_POPOUT: "Emoji Upsell Popout", EMOJI_PICKER_FLOATING_UPSELL: "Emoji Picker Floating Upsell", SOUND_PICKER_FLOATING_UPSELL: "Sound Picker Floating Upsell", EMPTY_STICKER_PICKER_UPSELL: "Empty Sticker Picker Upsell", FOR_LATER_POPOUT_UPSELL: "For Later Popout Upsell", CREATE_STICKER_MODAL: "Create Sticker Modal", IOS_TWO_FA_MODAL: "Two Factor Auth Modal", IOS_TWO_FA_LANDING: "Two Factor Auth Landing", IOS_TWO_FA_SCAN: "Two Factor Auth Scan Code", IOS_TWO_FA_ENTER_CODE: "Two Factor Auth Enter Code", IOS_TWO_FA_SUCCESS: "Two Factor Auth Enable Success", IOS_TWO_FA_ADD_SMS: "Two Factor Auth Add SMS", IOS_TWO_FA_VERIFY_SMS: "Two Factor Auth Verify SMS", IOS_CANNOT_MANAGE_SUBSCRIPTION: "iOS Cannot Manage Subscription", PREMIUM_GUILD_INVITE_SPLASH: "Premium Guild Invite Splash", PREMIUM_GUILD_SUBSCRIBE_MODAL: "Premium Guild Subscribe Modal", PREMIUM_GUILD_SUBSCRIBE_CONFIRMATION_MODAL: "Premium Guild Subscribe Confirmation Modal", PREMIUM_GUILD_UNSUBSCRIBE_MODAL: "Premium Guild Unsubscribe Modal", PREMIUM_GUILD_PURCHASE_MODAL: "Premium Guild Purchase Modal", PREMIUM_GUILD_UPSELL_MODAL: "Premium Guild Upsell Modal", PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_MODAL: "Premium Guild Member Profile Upsell Modal", PREMIUM_CUSTOM_NOTIFICATION_SOUND_UPSELL_MODAL: "Premium Custom Notification Sound Upsell", PREMIUM_SOUNDMOJI_GUILD_INFO_POPOUT: "Premium Soundmoji Guild Info Popout", PREMIUM_CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPSELL: "Premium Custom Notification Sound Settings Upsell", PREMIUM_PERKS_DEMO_UPSELL_MODAL: "Premium Perks Demo Upsell Modal", PREMIUM_FOR_LATER_UPSELL_MODAL: "Premium For Later Upsell Modal", GIFT_CATEGORY_SELECT_MODAL: "Select Gift Category Modal", FOR_LATER_CREATE: "For Later Create", SERVER_BANNER_TOOLTIP: "Server Banner Tooltip", CHANNEL_NOTICE: "Channel Notice", CHANNEL_ACTION_SHEET: "Channel Action Sheet", CHANNEL_CONTEXT_MENU: "Channel Context Menu", CUSTOM_STATUS_MODAL: "Custom Status Modal", PAYMENT_AUTHENTICATION_MODAL: "Payment Authentication", NOISE_CANCELLATION_POPOUT: "Noise Cancellation Popout", IOS_AGE_GATE_MODAL: "iOS Public Server Age Gate", DESKTOP_AGE_GATE_MODAL: "Desktop Public Server Age Gate", CLAIM_ACCOUNT_MODAL: "Claim Account", STREAM_UPSELL_MODAL: "Stream Upsell Modal", FILE_UPLOAD_UPSELL_MODAL: "File Upload Upsell Modal", MESSAGE_LENGTH_UPSELL_MODAL: "Message Length Upsell Modal", USER_PROFILE: "User Profile", USER_PROFILE_MUTUAL_FRIENDS: "User Profile Mutual Friends", INBOX: "Inbox", CHANNEL: "Channel", MANAGE_ACCOUNTS_MODAL: "Manage Accounts Modal", VOICE_CHANNEL_EFFECTS_UPSELL_MODAL: "Voice Channel Effects Upsell Modal", PREMIUM_TIER_0_ANNOUNCEMENT_MODAL: "Premium Tier 0 Announcement Modal", BURST_REACTIONS_UPSELL_MODAL: "Burst Reactions Upsell Modal", BURST_REACTIONS_TOOLTIP: "Burst Reactions Tooltip", CONTACT_SYNC_NC_MODAL: "Contact Sync Notification Center Modal", MEDIA_VIEWER: "Media Viewer", MARKETING_FLOATING_CTA: "Marketing Floating CTA", PREMIUM_GIFT_SUCCESS_MODAL: "Premium Gifting Success Modal", CLOSE_ACTIVITY_JOIN_REQUEST_RPC_COMMAND: "Close Activity Join Request RPC Commands", CHANNEL_TEXT_AREA: "Channel Text Area", THREAD_TEXT_AREA: "THREAD_TEXT_AREA", TEXT_IN_VOICE: "TEXT_IN_VOICE", FORUM_CHANNEL_TEXT_AREA: "FORUM_CHANNEL_TEXT_AREA", CHANNEL_LIST: "Channel List", ACTIVITY_PANEL: "Activity Panel", MEMBER_LIST: "Member List", ACCOUNT_PANEL: "Account Panel", CHANNEL_WELCOME_CTA: "Channel Welcome CTA", CHANNEL_HEADER: "Channel Header", DM_INVITE: "DM_INVITE", NEW_MESSAGES_BANNER: "New Messages Banner", NEW_MESSAGES_PILL: "New Messages Pill", NEW_TOPICS_BAR: "New Topics Bar", LIBRARY_INSTALL_MODULE: "Install Module", LIBRARY_APPLICATION_LIST: "Application List", LIBRARY_PREMIUM_APPLICATIONS: "Library Premium Applications", LIBRARY_GAME_MODAL: "Game Modal", LIBRARY_INVENTORY_CODE_REDEMPTION: "Code Redemption", LIBRARY_INVENTORY_GIFTS_LIST: "Gifts List", QUESTS: "Quests", GIFT_BANNER: "Gift Banner", STORE_LISTING_BUY_GAME: "Buy Game", STORE_LISTING_BUY: "Buy", CHANNEL_NAME: "Channel Name", CHANNEL_DEFAULT_REACTION: "Channel Default Reaction", SETTINGS_TEXT_PLAYGROUND: "Text Playground", SETTINGS_DESIGN_SYSTEMS: "Design Systems", SETTINGS_INTL_TESTING: "Intl Testing", SETTINGS_ACCOUNT: "My Account", SETTINGS_GAMES: "Games", SETTINGS_EDIT_ACCOUNT: "Edit Account", SETTINGS_CHANGE_USERNAME: "Change Username", SETTINGS_CHANGE_EMAIL: "Change Email", SETTINGS_CONFIRM_PASSWORD: "Confirm Password", SETTINGS_CHANGE_PASSWORD: "Change Password", SETTINGS_REQUEST_DATA: "Request Your Data", SETTINGS_CUSTOMIZE_PROFILE: "Profile Customization", SETTINGS_CUSTOMIZE_PROFILE_TRY_IT_OUT: "Profile Customization Try It Out", SETTINGS_DISPLAY_NAME_STYLES: "Display Name Styles", SETTINGS_CUSTOMIZE_PROFILE_AVATAR: "Profile Customization Avatar", SETTINGS_BACKUP_CODES: "Backup Codes", SETTINGS_CONFIRM_VIEW_BACKUP_CODES: "Confirm View Backup Codes", SETTINGS_PRIVACY_AND_SAFETY: "Privacy & Safety", SETTINGS_CONTENT_AND_SOCIAL: "Content & Social", SETTINGS_SENSITIVE_MEDIA_FILTERS: "Sensitive Media Filters", SETTINGS_CONNECTED_GAMES: "Connected Games", SETTINGS_DATA_AND_PRIVACY: "Data & Privacy", SETTINGS_ACCOUNT_STANDING: "Account Standing", SETTINGS_AGE_GROUP: "Age Group", SETTINGS_AUTHORIZED_APPS: "Authorized Apps", SETTINGS_AUTHORIZED_APP: "Authorized App - Detail Page", SETTINGS_AUTHORIZED_APP_PERMISSIONS: "Authorized App - Permissions", SETTINGS_CONNECTIONS: "Connections", SETTINGS_FRIEND_REQUESTS: "Friend Requests", SETTINGS_CONNECTIONS_XBOX: "Connections Xbox", SETTINGS_BILLING: "Billing", SETTINGS_SUBSCRIPTIONS: "Subscriptions", SETTINGS_PREMIUM: "Discord Nitro", SETTINGS_PREMIUM_BANNER: "Nitro Upsell Banner", SETTINGS_MOBILE_PREMIUM_BANNER: "Mobile Nitro Upsell Banner", SETTINGS_APP_DMS_MENU: "App DMs Menu", SETTINGS_PREMIUM_MANAGE_PLAN: "Manage Nitro Plan", SETTINGS_PREMIUM_PLAN_SELECT: "Discord Premium Plan Select", SETTINGS_PREMIUM_GIFTING: "Nitro Gifting", GUILD_BOOSTING: "Nitro Server Boost", GUILD_ROLE_SUBSCRIPTION: "Guild Role Subscription", GUILD_ROLE_SUBSCRIPTION_CANCEL: "Guild Role Subscription Cancel", SETTINGS_DATA: "Data", SETTINGS_VOICE_AND_VIDEO: "Voice & Video", SETTINGS_OVERLAY: "Overlay", SETTINGS_NOTIFICATIONS: "Notifications", SETTINGS_APP_ICONS: "App Icons", SETTINGS_EMAILS: "Email Settings", SETTINGS_KEYBINDS: "Keybinds", SETTINGS_ACTIVITY_PRIVACY: "Activity Privacy", SETTINGS_GAME_ACTIVITY: "Game Activity", SETTINGS_TEXT_AND_IMAGES: "Text & Images", SETTINGS_APPEARANCE: "Appearance", SETTINGS_APPEARANCE_THEME_PICKER: "Appearance Theme Picker", SETTINGS_APPEARANCE_LIGHT_MODE_THEME_PICKER: "Appearance Light Mode Theme Picker", SETTINGS_APPEARANCE_DARK_MODE_THEME_PICKER: "Appearance Dark Mode Theme Picker", SETTINGS_APPEARANCE_APP_ICON_PICKER: "Appearance App Icon Picker", SETTINGS_ACCESSIBILITY: "Accessibility", SETTINGS_STREAMER_MODE: "Streamer Mode", SETTINGS_LANGUAGE: "Language", SETTINGS_CHANGELOG: "Change Log", SETTINGS_EXPERIMENTS: "Experiments", SETTINGS_DEVELOPER_OPTIONS: "Developer Options", SETTINGS_WINDOWS: "Windows", SETTINGS_LINUX: "Linux", SETTINGS_BLOCKED_USERS: "Blocked Users", SETTINGS_BLOCKED_USERS_V2: "Blocked Users V2", SETTINGS_IGNORED_USERS: "Ignored Users", SETTINGS_INVENTORY: "Library Inventory", SETTINGS_SWIPE_RIGHT_TO_LEFT: "Swipe Right to Left Setting", TEXT_COMPONENT: "Text Component", DESIGN_SYSTEM: "Design System", DESIGN_SYSTEM_TEXT: "Design System (Text)", DESIGN_SYSTEM_BUTTON: "Design System (Button)", DESIGN_SYSTEM_BUTTON_GROUP: "Design System (Button Group)", DESIGN_SYSTEM_ROW_BUTTON: "Design System (Row Button)", DESIGN_SYSTEM_EXPERIMENTAL_BUTTONS: "Design System (Experimental Buttons)", DESIGN_SYSTEM_TABLE_ROW: "Design System (Table Row)", DESIGN_SYSTEM_ALERT_MODAL: "Design System (Alert Modal)", DESIGN_SYSTEM_BACKGROUND_BLUR_VIEW: "Design System (Background Blur View)", DESIGN_SYSTEM_SHADOWS: "Design System (Shadows)", DESIGN_SYSTEM_SEGMENTED_CONTROL: "Design System (Segmented Control)", DESIGN_SYSTEM_TABS: "Design System (Tabs)", DESIGN_SYSTEM_CONTEXT_MENU: "Design System (Context Menu)", DESIGN_SYSTEM_TOAST: "Design System (Toast)", DESIGN_SYSTEM_TEXT_INPUT: "Design System (Text Input)", DESIGN_SYSTEM_TOOLTIP: "Design System (Tooltip)", DESIGN_SYSTEM_COACHMARK: "Design System (Coachmark)", DESIGN_SYSTEM_STACK: "Design Systems (Stack)", DESIGN_SYSTEM_BACKDROP: "Design Systems (Backdrop)", DESIGN_SYSTEM_MODAL: "Design System (Modal)", DESIGN_SYSTEM_PILE: "Design Systems (Pile)", DESIGN_SYSTEM_SHEETS: "Design Systems (Sheets)", DESIGN_SYSTEM_FORM_PRIMITIVES: "Design Systems (Form Primitives)", DESIGN_SYSTEM_LEGACY_BUTTON: "Design System (Legacy Button)", DESIGN_SYSTEM_HAPTICS: "Design Systems (Haptics)", SETTINGS_ADVANCED: "Advanced", SETTINGS_REVENUE_STORYBOOK: "Revenue Storybook", SETTINGS_SESSIONS: "Sessions", SETTINGS_FAMILY_CENTER: "Family Center", SETTINGS_FAMILY_CENTER_PARENTAL_CONTROLS: "Family Center Parental Controls", SETTINGS_FAMILY_CENTER_PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS: "Family Center Parental Controls Sensitive Content Filters", SETTINGS_FAMILY_CENTER_SCHEDULE_DOWNTIME: "Family Center Schedule Downtime", SETTINGS_CONTEXT_MENU: "Settings Context Menu", SETTINGS_CLIPS: "Settings Clips", SETTINGS_CUSTOM_STATUS: "Custom Status", SETTINGS_EDIT_PROFILE: "Edit Profile", SETTINGS_BROWSER: "Browser", SETTINGS_OVERVIEW: "Overview", SETTINGS_CUSTOM_STATUS_EMOJI_PICKER: "Custom Status Emoji Picker", SETTINGS_DESKTOP_APP: "Desktop Only", SETTINGS_CHECK_NATIVE_UPDATE: "Check For Native Update", SETTINGS_INSTALL_NATIVE_UPDATE: "Install Native Build", SETTINGS_CHANGELOG_OVERRIDE: "Changelog Override", SETTINGS_SOUNDS: "Sounds", SETTINGS_CLIENT_THEMES: "Client Themes", CUSTOM_THEMES_FOOTER: "Custom Themes Footer", CUSTOM_THEMES_COACHMARK_FOOTER: "Custom Themes Coachmark Footer", DISPLAY_NAME_STYLES_MODAL_FOOTER: "Display Name Styles Modal Footer", SETTINGS_WEBAUTHN_VIEW: "View Security Keys", SETTINGS_PUBLIC_WELCOME: "Welcome Screen Settings", SETTINGS_POGGERMODE: "Powermode Settings", GUILD_ROLE_CREATION_MODAL: "Guild Role Creation Modal", GUILD_ROLE_TEMPLATE_POPOUT: "Guild Role Template Popout", GUILD_CREATE_MODAL: "Guild Create Modal", GUILD_SETTINGS_STICKERS: "Guild Stickers Settings", GUILD_SETTINGS_EMOJI: "Guild Emoji Settings", GUILD_SETTINGS_EMOJI_ADD_BUTTON: "Guild Emoji Settings Add Button", GUILD_SETTINGS_EMOJI_DRAG_DROP: "Guild Emoji Settings Drag and Drop", GUILD_SETTINGS_VANITY_URL: "Guild Vanity Url", GUILD_SETTINGS_ONBOARDING: "Guild Onboarding Settings", GUILD_SETTINGS_SOUNDBOARD: "Guild Soundboard Settings", GUILD_ROLE_EDIT_UPSELL_MODAL: "Guild Role Edit Upsell Modal", APPLICATION_EMBED: "Application Embed", GIFT_CODE_EMBED: "Gift Code Embed", GIFT_CODE_ROW: "Gift Code Row", PREMIUM_GIFT_AVAILABLE_ALERT: "Premium Gift Available Alert", GUILD_LIST: "Guild List", GUILD_HEADER: "Guild Header", GUILD_HEADER_POPOUT: "Guild Header Popout", GUILD_INVITE_BACKGROUND: "Guild Invite Background", GUILD_BANNER: "Guild Banner", ANIMATED_GUILD_BANNER_UPSELL: "Animated Guild Banner Upsell", STREAM_VIEWER_POPOUT: "Stream Viewer Popout", STREAM_SETTINGS: "Stream Settings", STREAM_QUALITY_INDICATOR: "Stream Quality Indicator", DISCOVER_SEARCH: "Search", DISCOVER_GAMES_YOU_PLAY: "Games You Play", DISCOVER_POPULAR: "Popular", DISCOVER_COLLECTION_GAMING: "Gaming", DISCOVER_COLLECTION_COMICS_HEROES: "Comics / Heroes", DISCOVER_COLLECTION_ANIME: "Anime", DISCOVER_COLLECTION_MUSIC: "Music", DISCOVER_COLLECTION_ESPORTS: "electronic-Sports", DISCOVERY_SETUP_MODAL: "Discovery Setup Modal", DISCOVERY_SETUP_SUCCESS_MODAL: "Discovery Setup Success Modal", PREMIUM_GUILD_USER_MODAL_CTA_BAR: "CTA Bar", PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR: "Floating CTA Bar", PREMIUM_GUILD_USER_MODAL_PROGRESS_BAR: "Progress Bar", GUILD_BOOSTING_BOOST_ANY_GUILD_CTA: "Boost Any Guild CTA", GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA: "Recommended Server Boost This Server CTA", GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA: "Recommended Server Go To Server CTA", ICYMI_RECOMMENDED_SERVERS: "Recommended Servers", REGISTER: "Register", LOGIN: "Login", OVERLAY: "Overlay", STICKERS_SHOP: "Stickers Shop", STICKER_PICKER_UPSELL: "Sticker Picker Upsell", STICKER_PREMIUM_TIER_2_UPSELL_MODAL: "Stickers Nitro Upsell Modal", STICKER_PREMIUM_TIER_1_UPSELL_MODAL: "Stickers Nitro Classic Upsell Modal", STICKER_POPOUT: "Sticker Popout", EXPRESSION_PICKER: "Expression Picker", STANDALONE_VIDEO_PLAYER: "Standalone Video Player", SUPER_REACTION_PICKER: "Super Reaction Picker", SOUNDBOARD_SOUND_PICKER: "Soundboard Sound Picker", SOUNDBOARD_SOUND_PICKER_UPSELL: "Soundboard Sound Picker Upsell", CONTACT_SYNC_MODAL: "Contact Sync", CONTACT_SYNC_EMPTY_CTA: "Contact Sync Empty CTA", HUB_WELCOME_CTA: "Hub Welcome CTA", GUILD_CAP_UPSELL_MODAL: "Guild Cap Upsell Modal", CHAT_USERNAME: "Chat Username", GUILD_DROPDOWN_MENU: "Guild Dropdown Menu", PREMIUM_GUILD_MEMBER_PROFILE: "Edit Premium Guild Member Profile", CREATE_THREAD_SIDEBAR: "Create Thread Sidebar", THREAD_ARCHIVAL_DURATION_SHEET: "Thread Archival Duration Sheet", THREAD_CREATION_OPTIONS: "Thread Creation Options", THREAD_CONTEXT_MENU: "Thread Context Menu", THREAD_ACTION_SHEET: "Thread Action Sheet", THREAD_MEMBER_LIST: "Thread Member List", UPLOAD_FILE_OR_CHOOSE_GIF_MODAL: "Upload File or Choose GIF Modal", GIF_PICKER_AVATAR_OR_BANNER_MODAL: "GIF Picker Modal", CROP_GIF_MODAL: "Crop GIF Modal", CUSTOM_ROLE_ICONS_TOOLTIP: "Custom Role Icons Tooltip", GUILD_BOTTOM_SHEET: "Guild Bottom Sheet", USER_BOTTOM_SHEET: "User Bottom Sheet", MARKETING_BOTTOM_SHEET: "Marketing Bottom Sheet", PURCHASE_SINGLE_PREMIUM_GUILD_SUBSCRIPTION: "Buy Single Boosts", PREMIUM_GUILD_SUBSCRIPTION_TIER_1: "Premium Guild Subscription Tier 1", PREMIUM_GUILD_SUBSCRIPTION_TIER_2: "Premium Guild Subscription Tier 2", PREMIUM_GUILD_SUBSCRIPTION_TIER_3: "Premium Guild Subscription Tier 3", NITRO_CROSS_PROMO_FROM_BOOSTING: "Nitro Cross Promo From Boosting", FRIENDS_LIST: "Friends List", FRIENDS_ADD_FRIENDS_MODAL: "Add Friends Modal", FRIENDS_ADD_FRIENDS_MODAL_SEARCH: "Add Friends Modal Search", FRIENDS_ADD_BY_USERNAME_MODAL: "Add by Username Modal", FRIENDS_REQUESTS_MODAL: "Friend Requests Modal", FRIENDS_SUGGESTED_FRIENDS_MODAL: "Suggested Friends Modal", FRIENDS_LIST_FRIEND_ROW: "Friend Row", FRIENDS_LIST_FRIEND_ROW_GIFT_POPOUT: "Friend Row Gift Popout", ACTIVE_NOW_COLUMN: "Active Now Column", GUILD_CHANNEL_LIST: "Guild Channel List", INVITE_LINK: "Invite Link", RTC_CONNECTION_PANEL: "RTC Connection Panel", VOICE_CHANNEL_TILE: "Voice Channel Tile", VOICE_CONTROL_TRAY: "Voice Control Tray", EMBEDDED_ACTIVITY_LAUNCH_FAIL: "Embedded Activity Launch Fail", FOCUS_EXPANDED_CONTROLS: "Focus Expanded Controls", CHANNEL_CALL_ACTION_BAR: "Channel Call Action Bar", ACTIVITY_SHELF: "Activity Shelf", ACTIVITY_UPSELL_ACTION_SHEET: "Activity Upsell Action Sheet", AGGREGATE_PREMIUM_UPSELL_MODAL: "Aggregate Premium Upsell Modal", VOICE_CHANNEL_EFFECTS_BAR: "Voice Channel Effect Emoji Hotbar", VOICE_CHANNEL_EFFECTS_EMOJI_PICKER: "Voice Channel Effect Emoji Picker", PREMIUM_MARKETING_SURFACE_SIDEBAR: "Premium Marketing Surface Sidebar", CHANNEL_BROWSER: "Channel Browser", FORUM_CHANNEL_POST: "Forum Channel Post", FORUM_CHANNEL_HEADER: "Forum Channel Header", FORUM_CHANNEL_FOOTER: "Forum Channel Footer", FORUM_CHANNEL_GUIDELINES: "Forum Channel Guidelines", FORUM_POST_HEADER: "Forum Post Header", STAGE_VIDEO_LIMIT: "Stage Video Limit", CHANNEL_PIN: "Channel Pin", CHANNEL_SETTINGS: "Channel Settings", CHANNEL_SEARCH: "Channel Search", NEW_MESSAGE_COMPOSER: "New Message Composer", REMIX_UPSELL_ACTIONSHEET: "Remix Upsell Actionsheet", COMMUNITY_ALERTS: "Community Alerts Settings", HIGHLIGHT_NOTIFICATIONS: "Highlight notification settings", SUMMARY_ACTION_SHEET: "Summary Action Sheet", COLLECTIBLES_SHOP_DETAILS_MODAL: "Collectibles Shop Details Modal", COLLECTIBLES_SHOP_COLLECTED_MODAL: "Collectibles Shop Collected Modal", AVATAR_DECORATION_CUSTOMIZATION: "Edit Avatar Decoration Modal", PROFILE_EFFECT_CUSTOMIZATION: "Profile Effect Customization", PROFILE_FRAME_CUSTOMIZATION: "Profile Frame Customization", NAMEPLATE_CUSTOMIZATION: "Nameplate Customization", COLLECTIBLES_SHOP: "Shop", REFERRAL_MESSAGE_EMBED: "Message Embed", SHOP_PRODUCT_DETAILS: "Shop Product Details", COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS: "Collectibles Shop View All Category Items", COLLECTIBLES_SHOP_FEATURED_PAGE: "Collectibles Shop Featured Page", APPEAL_INGESTION_SPEED_BUMP: "Appeal Ingestion Speed Bump", APPEAL_INGESTION_COLLECT_SIGNAL: "Appeal Ingestion Collect Signal", APPEAL_INGESTION_REQUEST_REVIEW: "Appeal Ingestion Request a Review", APPEAL_INGESTION_WHY_DISAGREE: "Appeal Ingestion Why do you Disagree?", APPEAL_INGESTION_FREE_TEXT: "Appeal Ingestion Free Text", APPEAL_INGESTION_CONFIRM_SUBMISSION: "Appeal Ingestion Confirm Submission", APPEAL_INGESTION_REQUEST_SENT: "Appeal Ingestion Request Sent", APPEAL_INGESTION_THANKS: "Appeal Ingestion Thanks", APPEAL_INGESTION_SPAM: "Appeal Ingestion Spam", SETTINGS_SURVEY_OVERRIDE: "Survey Override", QUEST_PREVIEW_TOOL: "Quest Preview Tool", QUEST_PREVIEW_TOOL_2: "Quest Preview Tool 2", QUEST_TILE_CTA: "Quest Tile CTA", QUEST_MINOR_REWARD_CAPPING_CONFIG: "Quest Minor Reward Capping Config", ATT_PREPROMPT_MODAL: "ATT Pre Prompt Modal", GUILD_POWERUPS_MARKETING_PERKS_SECTION: "Guild Powerups Marketing Perks Section", GUILD_POWERUPS_OVERVIEW_SIDEBAR: "Guild Powerups Overview Sidebar", GUILD_POWERUPS_OVERVIEW_CARD: "Powerups Overview Card", GUILD_POWERUPS_NEW_PERKS_COACHMARK: "Guild Powerups New Perks Coachmark", GAME_SERVERS_EMPTY_STATE: "Game Servers Empty State", SECURE_FRAMES_STREAM_BOTTOM_SHEET: "Secure Frames Stream Bottom Sheet", SECURE_FRAMES_VOICE_BOTTOM_SHEET: "Secure Frames Voice Bottom Sheet", SECURE_FRAMES_VERIFIED_DEVICES: "Secure Frames Verified Devices", SECURE_FRAMES: "Secure Frames", WEB_SETTING_TREE_TOOL: "Web Setting Tree Tool", THIRD_PARTY_ACCESS: "Third Party Access", EDIT_CUSTOM_STATUS_MODAL: "Edit Custom Status Modal", EDIT_CUSTOM_STATUS_MODAL_WITH_PREVIEW: "Edit Custom Status Modal With Preview", PERMADECOS_MARKETING_UPSELL: "Permadecos Marketing Upsell", ORBS_ANNOUNCEMENT_MODAL: "Orbs Announcement Modal", ORBS_BADGE_REDEMPTION_MODAL: "Orbs Badge Redemption Modal", ORBS_DISCOVERY_ONBOARDING_COACHMARK: "Orbs Discovery Onboarding Coachmark", ORBS_DISCOVERY_REHEAT_COACHMARK: "Orbs Discovery Reheat Coachmark", ORBS_SHOP_ONBOARDING_COACHMARK: "Orbs Shop Onboarding Coachmark", ORBS_BALANCE_MENU: "Orbs Balance Menu", ORBS_REWARD_MODAL: "Orbs Reward Modal", ORBS_SHOP_HERO_BLOCK: "Orbs Shop Hero Block", NOTIFICATIONS_INBOX: "Notifications Inbox", IN_APP_NOTIFICATION: "In App Notification" };
const obj4 = { TOOLTIP: "Tooltip", CARD: "Card", CAROUSEL: "Carousel", NAVIGATION_LINK: "Nav Link", SUBSCRIBE_TO_TIER_BUTTON: "Subscribe up to Tier Button", BUTTON_BROWSE: "Button Browse", BUTTON_HOME: "Button Home", BUTTON_BACK: "Button Back", BUTTON_CTA: "Button CTA", BUTTON_ICON: "Button Icon", MENU_LINK: "Menu Link", WEB_URL: "Web URL", LIST_ITEM: "List Item", RADIO_ITEM: "Radio Item", CONTEXT_MENU: "Context Menu", CONTEXT_MENU_ITEM: "Context Menu Item", SEARCH: "Search", ALTERNATIVE_SKU: "Alternative Sku", HOVER_MENU: "Hover Menu", AVATAR: "Avatar", ANIMATED_AVATAR: "Animated Avatar", EDIT_GUILD_PROFILE_AVATAR: "Edit Guild Profile Avatar", CHANNEL: "Channel", CHANNEL_TAG: "Channel Tag", BADGE: "Badge", STICKER_SEARCH_VIEW_ALL: "Sticker Search View All", STICKER_PICKER_VIEW_ALL: "Sticker Picker View All", STICKER_POPOUT_VIEW_ALL: "Sticker Popout View All", STICKER_PICKER_PURCHASE_BUTTON: "Sticker Picker Purchase Button", STICKER_PICKER_UPSELL_BUTTON: "Sticker Picker Upsell Button", STICKER_POPOUT_PURCHASE_BUTTON: "Sticker Popout Purchase Button", NUDGED_STICKER: "Nudged Sticker", EXPRESSION_SUGGESTIONS: "Expression Suggestions", STICKER: "Sticker", EMOJI: "Emoji", SOUNDBOARD_SOUND: "Soundboard Sound", EDIT_PER_SERVER_IDENTITY: "Edit Per Server Identity", EDIT_PROFILE_BANNER: "Edit Profile Banner", EDIT_GUILD_PROFILE_BANNER: "Edit Guild Profile Banner", BOOSTING_BANNER: "Boosting Banner", BOOST_LEVEL_UPSELL_BUTTON: "Boost Level Upsell Button", BOOST_UPSELL_LOST_LEVEL_HEADER: "Boost Upsell Lost Level Header", BOOST_UPSELL_NEXT_LEVEL_HEADER: "Boost Upsell Next Level Header", BOOST_UPSELL_BANNER_LOST_LEVEL: "Boost Upsell Banner for Lost Level", BOOST_UPSELL_BANNER_SLOTS_FULL: "Boost Upsell Banner for Slots Full", BOOST_GEM_ICON: "Boost Gem Icon", BOOST_ANNOUNCEMENT_UPSELL: "Boost Announcement Upsell", PRIVATE_THREAD_CHECKBOX: "Private Thread Checkbox", LEARN_MORE: "Learn More", UPLOAD_IMAGE: "Upload Image", PREMIUM_UPSELL_BUTTON: "Nitro upsell button", PREMIUM_UPSELL_BANNER: "Nitro upsell banner", PREMIUM_SUBSCRIPTION_PAYMENT_FLOW_COMPLETED: "Nitro Payment Flow Completed", PREMIUM_SUBSCRIPTION: "Discord Nitro", PREMIUM_GUILD_SUBSCRIPTION: "Server Boost", PREMIUM_GUILD_SUBSCRIPTION_WITH_PREMIUM_SUBSCRIPTION: "Server Boost (Has Nitro)", GIF_CROPPING_MODAL: "GIF Cropping Modal", IMAGE_CROPPING_MODAL: "Image Cropping Modal", UPSELL_HEADER: "Upsell Header", TRY_IT_CTA: "Try It CTA", GIFTING_PROMOTION_BUTTON: "Gifting promotion icon", SERVER_BANNER_TOOLTIP: "Server Banner Tooltip", THREAD_ARCHIVE_DURATION_DROPDOWN: "Thread Archive Duration Dropdown", BOOST_SERVER_CTA: "Boost This Server CTA", SERVER_STATUS_CTA: "See Server Status CTA", ACTIVITIES_BOOSTING_UPSELL: "ACTIVITIES_BOOSTING_UPSELL", ACTIVITIES_NITRO_UPSELL: "ACTIVITIES_NITRO_UPSELL", ACTIVITY_SHELF: "ACTIVITY_SHELF", ACTIVITY_NITRO_HOST_LEFT_UPSELL: "ACTIVITY_NITRO_HOST_LEFT_UPSELL", ACTIVITIES_COACH_MARK: "ACTIVITIES_COACH_MARK", VOICE_CHANNEL_EFFECTS_COACH_MARK: "VOICE_CHANNEL_EFFECTS_COACHMARK", VOICE_CHANNEL_EFFECTS_TOGGLE: "VOICE_CHANNEL_EFFECTS_TOGGLE", BURST_REACTION_TOGGLE: "BURST_REACTION_TOGGLE", ONBOARDING_EDIT: "ONBOARDING_EDIT", ONBOARDING_REVIEW: "ONBOARDING_REVIEW", FORUM_ACTION_BAR: "FORUM_ACTION_BAR", FORUM_GRID_ITEM_FOOTER: "FORUM_GRID_ITEM_FOOTER", FORUM_LIST_ITEM_FOOTER: "FORUM_LIST_ITEM_FOOTER", MESSAGE_ACTION_SHEET: "MESSAGE_ACTION_SHEET", MESSAGE: "MESSAGE", CHANNEL_PIN: "CHANNEL_PIN", CHANNEL_SEARCH: "CHANNEL_SEARCH", CHANNEL_SETTINGS: "CHANNEL_SETTINGS", EMOJI_PICKER_BUTTON: "EMOJI_PICKER_BUTTON", REACTION_RAIL: "REACTION_RAIL", EMOJI_REACTION_PICKER_POPOUT: "EMOJI_REACTION_PICKER_POPOUT", EMOJI_REACTION_UPSELL: "EMOJI_REACTION_UPSELL", EMOJI_REACTION_TOOLTIP_UPSELL: "EMOJI_REACTION_TOOLTIP_UPSELL", EMOJI_PICKER_FLOATING_UPSELL: "EMOJI_PICKER_FLOATING_UPSELL", INLINE_REACTION_PICKER_UPSELL: "INLINE_REACTION_PICKER_UPSELL", EMOJI_REACTION_PICKER_POPOUT_UPSELL: "EMOJI_REACTION_PICKER_POPOUT_UPSELL", REACTION_RIGHT_CLICK_MENU_UPSELL: "REACTION_RIGHT_CLICK_MENU_UPSELL", NOTIFICATION_SETTING_UNREAD_NOTICE: "NOTIFICATION_SETTING_UNREAD_NOTICE", FORWARD_BREADCRUMB: "FORWARD_BREADCRUMB", GUILD_PROFILE: "GUILD_PROFILE", GIFT_CATEGORY_OPTION: "Gift Category Option", GUILD_POWERUPS_CHANNEL_LIST_ITEM: "GUILD_POWERUPS_CHANNEL_LIST_ITEM", GUILD_POWERUPS_LEARN_MORE: "GUILD_POWERUPS_LEARN_MORE", REMIXING_ACTION_SHEET_UPSELL: "REMIXING_ACTION_SHEET_UPSELL", MESSAGE_REMIX_BUTTON: "MESSAGE_REMIX_BUTTON", CUSTOM_STATUS_MANAGER: "CUSTOM_STATUS_MANAGER", APP_COMMAND: "APP_COMMAND", CTA_TO_ORB_INTRO_QUEST: "CTA to Orb Intro Quest", CTA_TO_QUEST_HOME: "CTA to Quest Home", CTA_TO_ORBS_SHOP: "CTA_TO_ORBS_SHOP", DISCOVERY_BUTTON_TO_ORB_INTRO_QUEST: "Discovery Button to Orb Intro Quest", SHOP_BUTTON_TO_SHOP_ORBS_TAB: "Shop Button to Shop Orbs Tab", OPEN_ORB_BALANCE_MENU_FROM_PILL: "Open Orb Balance Menu from Pill", ORBS_LEARN_MORE_LINK: "Orbs Learn More Link", ORBS_QUESTS_BALANCE_MENU_CTA: "ORBS_QUESTS_BALANCE_MENU_CTA", ORBS_QUESTS_TILE_SHOP_CTA: "ORBS_QUESTS_TILE_SHOP_CTA", ORBS_QUESTS_REWARD_MODAL_SHOP_CTA: "ORBS_QUESTS_REWARD_MODAL_SHOP_CTA", MARK_CHANNEL_AS_READ_BUTTON: "Mark Channel as Read Button", MARK_CHANNEL_AS_READ_KEYBIND: "Mark Channel as Read Keybind", MARK_FORUM_POST_AS_READ_BUTTON: "Mark Forum Post as Read Button", MARK_THREAD_AS_READ_BUTTON: "Mark Thread as Read Button", MARK_MESSAGE_AS_READ_BUTTON: "Mark Message as Read Button", MARK_CHANNEL_AS_READ_FROM_NOTIFICATION: "Mark Channel as Read from Notification", UNDO_MARK_AS_READ: "Undo Mark as Read", ACK_DECLINE_REQUEST_TO_JOIN: "Ack - Decline Request to Join", ACK_DECLINE_REQUEST_TO_STREAM: "Ack - Decline Request to Stream", ACK_GRAVITY_CLEAR_READ_STATES_BUTTON: "Ack - Gravity Clear Read States Button", ACK_GRAVITY_REGENERATE_FEED_AND_CLEAR_READ_STATES_BUTTON: "Ack - Gravity Regenerate Feed and Clear Read States Button", ACK_INLINE_REPLY: "Ack - Inline Reply", ACK_TEXT_CHAT_NOTIFICATION: "Ack - Text Chat Notification", ACK_MESSAGE_VIEWED: "Ack - Message Viewed", ACK_MEDIA_VIEWED: "Ack - Media Viewed", ACK_IN_APP_NOTIFICATION_ACTION: "Ack - In App Notification Action", ACK_FORUM_ACTIVE_THREADS: "Ack - Forum Active Threads", ACK_GUILD_DIRECTORY_CHANNEL_VIEWED: "Ack - Guild Directory Channel Viewed", ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED: "Ack - Recent Channel New Channel Viewed", ACK_INBOX_CHANNEL_NO_MESSAGES: "Ack - Inbox Channel No Messages", ACK_INBOX_FORUM_NO_POSTS: "Ack - Inbox Forum No Posts", ACK_INBOX_NEWEST_UNREAD_MESSAGE: "Ack - Inbox Newest Unread Message", ACK_FORUM_CHANNEL_NO_UNREAD_POSTS: "Ack - Forum Channel No Unread Posts", ACK_INCOMING_MESSAGE: "Ack - Incoming Message", ACK_RESORT_THREADS: "Ack - Resort Threads", ACK_CHANNEL_SELECT_SAME_CHANNEL: "Ack - Channel Select Same Channel", ACK_CHANNEL_SELECT_SAME_CHANNEL_SIDEBAR: "Ack - Channel Select Same Channel Sidebar", ACK_CHANNEL_SELECT_SAME_CHANNEL_DISPATCH: "Ack - Channel Select Same Channel Dispatch", ACK_CHANNEL_RTC_UPDATE_CHAT_OPEN: "Ack - Channel RTC Update Chat Open", ACK_CHANNEL_SCROLL: "Ack - Channel Scroll", ACK_WINDOW_FOCUS: "Ack - Window Focus", ACK_CHANNEL_SECTION_STORE_UPDATE: "Ack - Channel Section Store Update", ACK_VOICE_CHANNEL_SELECT: "Ack - Voice Channel Select", ACK_APP_FOREGROUND: "Ack - App Foreground", ENABLE_AUTOMATIC_ACK: "Enable Automatic Ack" };
({ GUILD_ROLE_SUBSCRIPTION: obj10[tmp4], SETTINGS_BILLING: obj10.BILLING, SETTINGS_EXPERIMENTS: obj10.EXPERIMENTS, SETTINGS_DEVELOPER_OPTIONS: obj10.DEVELOPER_OPTIONS, SETTINGS_WINDOWS: obj10.WINDOWS, SETTINGS_LINUX: obj10.LINUX, SETTINGS_DESKTOP_APP: obj10.DESKTOP_APP, SETTINGS_INVENTORY: obj10.INVENTORY, TEXT_COMPONENT: obj10.TEXT_COMPONENT, DESIGN_SYSTEM: obj10.DESIGN_SYSTEM, DESIGN_SYSTEM_TEXT: obj10.DESIGN_SYSTEM_TEXT, DESIGN_SYSTEM_BUTTON: obj10.DESIGN_SYSTEM_BUTTON, DESIGN_SYSTEM_BUTTON_GROUP: obj10.DESIGN_SYSTEM_BUTTON_GROUP, DESIGN_SYSTEM_ROW_BUTTON: obj10.DESIGN_SYSTEM_ROW_BUTTON, DESIGN_SYSTEM_EXPERIMENTAL_BUTTONS: obj10.DESIGN_SYSTEM_EXPERIMENTAL_BUTTONS, DESIGN_SYSTEM_TABLE_ROW: obj10.DESIGN_SYSTEM_TABLE_ROW, DESIGN_SYSTEM_ALERT_MODAL: obj10.DESIGN_SYSTEM_ALERT_MODAL, DESIGN_SYSTEM_BACKGROUND_BLUR_VIEW: obj10.DESIGN_SYSTEM_BACKGROUND_BLUR_VIEW, DESIGN_SYSTEM_SHADOWS: obj10.DESIGN_SYSTEM_SHADOWS, DESIGN_SYSTEM_SEGMENTED_CONTROL: obj10.DESIGN_SYSTEM_SEGMENTED_CONTROL, DESIGN_SYSTEM_TABS: obj10.DESIGN_SYSTEM_TABS, DESIGN_SYSTEM_CONTEXT_MENU: obj10.DESIGN_SYSTEM_CONTEXT_MENU, DESIGN_SYSTEM_TOAST: obj10.DESIGN_SYSTEM_TOAST, DESIGN_SYSTEM_TEXT_INPUT: obj10.DESIGN_SYSTEM_TEXT_INPUT, DESIGN_SYSTEM_TOOLTIP: obj10.DESIGN_SYSTEM_TOOLTIP, DESIGN_SYSTEM_COACHMARK: obj10.DESIGN_SYSTEM_COACHMARK, DESIGN_SYSTEM_STACK: obj10.DESIGN_SYSTEM_STACK, DESIGN_SYSTEM_BACKDROP: obj10.DESIGN_SYSTEM_BACKDROP, DESIGN_SYSTEM_MODAL: obj10.DESIGN_SYSTEM_MODAL, DESIGN_SYSTEM_PILE: obj10.DESIGN_SYSTEM_PILE, DESIGN_SYSTEM_SHEETS: obj10.DESIGN_SYSTEM_SHEETS, DESIGN_SYSTEM_FORM_PRIMITIVES: obj10.DESIGN_SYSTEM_FORM_PRIMITIVES, DESIGN_SYSTEM_LEGACY_BUTTON: obj10.DESIGN_SYSTEM_LEGACY_BUTTON, DESIGN_SYSTEM_HAPTICS: obj10.DESIGN_SYSTEM_HAPTICS, SETTINGS_ADVANCED: obj10.ADVANCED, SETTINGS_CUSTOMIZE_PROFILE: obj10.PROFILE_CUSTOMIZATION, SETTINGS_CUSTOMIZE_PROFILE_TRY_IT_OUT: obj10.PROFILE_CUSTOMIZATION_TRY_IT_OUT, SETTINGS_DISPLAY_NAME_STYLES: obj10.DISPLAY_NAME_STYLES, SETTINGS_POGGERMODE: obj10.POGGERMODE, SETTINGS_SESSIONS: obj10.SESSIONS, SETTINGS_FAMILY_CENTER: obj10.FAMILY_CENTER, SETTINGS_FAMILY_CENTER_PARENTAL_CONTROLS: obj10.FAMILY_CENTER_PARENTAL_CONTROLS, SETTINGS_FAMILY_CENTER_PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS: obj10.FAMILY_CENTER_PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS, SETTINGS_FAMILY_CENTER_SCHEDULE_DOWNTIME: obj10.FAMILY_CENTER_SCHEDULE_DOWNTIME, SETTINGS_FRIEND_REQUESTS: obj10.FRIEND_REQUESTS, SETTINGS_CLIPS: obj10.CLIPS, COLLECTIBLES_SHOP: obj10.COLLECTIBLES_SHOP, SETTINGS_SWIPE_RIGHT_TO_LEFT: obj10.SWIPE_RIGHT_TO_LEFT, COLLECTIBLES_SHOP_FEATURED_PAGE: obj10.COLLECTIBLES_SHOP_FEATURED_PAGE, COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS: obj10.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, COMMUNITY_ALERTS: obj10.COMMUNITY_ALERTS, HIGHLIGHT_NOTIFICATIONS: obj10.HIGHLIGHT_NOTIFICATIONS, SETTINGS_AGE_GROUP: obj10.AGE_GROUP, QUESTS: obj10.QUESTS, QUEST_PREVIEW_TOOL_2: obj10.QUEST_PREVIEW_TOOL_2, SECURE_FRAMES: obj10.SECURE_FRAMES, SECURE_FRAMES_VERIFIED_DEVICES: obj10.SECURE_FRAMES_VERIFIED_DEVICES } = obj3);
const frozen4 = Object.freeze({
  DEVELOPER_PORTAL: "/developers",
  DEVELOPER_PORTAL_GUILD_ANALYTICS(arg0) {
    return "/developers/servers/" + arg0;
  },
  DEVELOPER_PORTAL_TEAMS: "/developers/teams",
  DEVELOPER_PORTAL_EDIT_PAYOUTS(closure_0) {
    return "/developers/teams/" + closure_0 + "/payout-settings";
  },
  DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY: "/developers/applications/select/game-identity"
});
const obj7 = { TWITCH: "twitch", YOUTUBE: "youtube", SKYPE: "skype", STEAM: "steam", LEAGUE_OF_LEGENDS: "leagueoflegends", BATTLENET: "battlenet", BLUESKY: "bluesky", BUNGIE: "bungie", REDDIT: "reddit", TWITTER: "twitter", TWITTER_LEGACY: "twitter_legacy", SPOTIFY: "spotify", FACEBOOK: "facebook", XBOX: "xbox", SAMSUNG: "samsung", CONTACTS: "contacts", INSTAGRAM: "instagram", MASTODON: "mastodon", SOUNDCLOUD: "soundcloud", GITHUB: "github", PLAYSTATION: "playstation", PLAYSTATION_STAGING: "playstation-stg", EPIC_GAMES: "epicgames", RIOT_GAMES: "riotgames", ROBLOX: "roblox", PAYPAL: "paypal", EBAY: "ebay", TIKTOK: "tiktok", CRUNCHYROLL: "crunchyroll", DOMAIN: "domain", AMAZON_MUSIC: "amazon-music", META_QUEST_OR_HORIZON: "meta_quest_or_horizon" };
const frozen5 = Object.freeze({ TEXT_PLAYGROUND: obj3.SETTINGS_TEXT_PLAYGROUND, DESIGN_SYSTEMS: obj3.DESIGN_SYSTEM, DESIGN_SYSTEMS_COLORS: obj3.DESIGN_SYSTEM, INTL_TESTING: obj3.SETTINGS_INTL_TESTING, ANIMATION_TESTING: obj3.DESIGN_SYSTEM, OVERVIEW: obj3.SETTINGS_OVERVIEW, BROWSER: obj3.SETTINGS_BROWSER, CHANGE_LOG: obj3.SETTINGS_CHANGELOG, PREMIUM_GIFTING: obj3.SETTINGS_PREMIUM_GIFTING, BLOCKED_USERS: obj3.SETTINGS_BLOCKED_USERS, BLOCKED_USERS_V2: obj3.SETTINGS_BLOCKED_USERS_V2, IGNORED_USERS: obj3.SETTINGS_IGNORED_USERS, CUSTOM_STATUS: obj3.SETTINGS_CUSTOM_STATUS, CUSTOM_STATUS_EMOJI_PICKER: obj3.SETTINGS_CUSTOM_STATUS_EMOJI_PICKER, CHECK_NATIVE_UPDATE: obj3.SETTINGS_CHECK_NATIVE_UPDATE, INSTALL_NATIVE_UPDATE: obj3.SETTINGS_INSTALL_NATIVE_UPDATE, ACCOUNT: obj3.SETTINGS_ACCOUNT, GAMES: obj3.SETTINGS_GAMES, ACCOUNT_CHANGE_USERNAME: obj3.SETTINGS_CHANGE_USERNAME, ACCOUNT_CHANGE_PASSWORD: obj3.SETTINGS_CHANGE_PASSWORD, ACCOUNT_CONFIRM_PASSWORD: obj3.SETTINGS_CONFIRM_PASSWORD, ACCOUNT_BACKUP_CODES: obj3.SETTINGS_BACKUP_CODES, ACCOUNT_CONFIRM_VIEW_BACKUP_CODES: obj3.SETTINGS_BACKUP_CODES, CONNECTIONS: obj3.SETTINGS_CONNECTIONS, CONNECTIONS_XBOX: obj3.SETTINGS_CONNECTIONS_XBOX, AUTHORIZED_APPS: obj3.SETTINGS_AUTHORIZED_APPS, AUTHORIZED_APP: obj3.SETTINGS_AUTHORIZED_APP, AUTHORIZED_APP_PERMISSIONS: obj3.SETTINGS_AUTHORIZED_APP_PERMISSIONS, TEXT: obj3.SETTINGS_TEXT_AND_IMAGES, VOICE: obj3.SETTINGS_VOICE_AND_VIDEO, PRIVACY_AND_SAFETY: obj3.SETTINGS_PRIVACY_AND_SAFETY, CONTENT_AND_SOCIAL: obj3.SETTINGS_CONTENT_AND_SOCIAL, SENSITIVE_MEDIA_FILTERS: obj3.SETTINGS_SENSITIVE_MEDIA_FILTERS, CONNECTED_GAMES: obj3.SETTINGS_CONNECTED_GAMES, DATA_AND_PRIVACY: obj3.SETTINGS_DATA_AND_PRIVACY, REQUEST_DATA: obj3.SETTINGS_REQUEST_DATA, ACCOUNT_STANDING: obj3.SETTINGS_ACCOUNT_STANDING, NOTIFICATIONS: obj3.SETTINGS_NOTIFICATIONS, SOUNDS: obj3.SETTINGS_SOUNDS, APP_ICONS: obj3.SETTINGS_APP_ICONS, DATA: obj3.SETTINGS_DATA, EMAILS: obj3.SETTINGS_EMAILS, ACTIVITY_PRIVACY: obj3.SETTINGS_ACTIVITY_PRIVACY, REGISTERED_GAMES: obj3.SETTINGS_GAME_ACTIVITY, KEYBINDS: obj3.SETTINGS_KEYBINDS, APPEARANCE: obj3.SETTINGS_APPEARANCE, APPEARANCE_THEME_PICKER: obj3.SETTINGS_APPEARANCE_THEME_PICKER, APPEARANCE_LIGHT_MODE_THEME_PICKER: obj3.SETTINGS_APPEARANCE_LIGHT_MODE_THEME_PICKER, APPEARANCE_DARK_MODE_THEME_PICKER: obj3.SETTINGS_APPEARANCE_DARK_MODE_THEME_PICKER, ACCESSIBILITY: obj3.SETTINGS_ACCESSIBILITY, OVERLAY: obj3.SETTINGS_OVERLAY, LANGUAGE: obj3.SETTINGS_LANGUAGE, STREAMER_MODE: obj3.SETTINGS_STREAMER_MODE, SUBSCRIPTIONS: obj3.SETTINGS_SUBSCRIPTIONS, PREMIUM: obj3.SETTINGS_PREMIUM, PREMIUM_PLAN_SELECT: obj3.SETTINGS_PREMIUM_PLAN_SELECT, PREMIUM_MANAGE_PLAN: obj3.SETTINGS_PREMIUM_MANAGE_PLAN, GUILD_ROLE_SUBSCRIPTIONS: obj3.GUILD_ROLE_SUBSCRIPTION, GUILD_ROLE_SUBSCRIPTIONS_CANCEL: obj3.GUILD_ROLE_SUBSCRIPTION_CANCEL, GUILD_BOOSTING: obj3.GUILD_BOOSTING, WEBAUTHN_VIEW: obj3.SETTINGS_WEBAUTHN_VIEW });
const items2 = [, ];
({ FACEBOOK: arr3[0], CONTACTS: arr3[1] } = obj7);
const frozen6 = Object.freeze({ GAME_INVITE_FRAGMENT: "/_discord/join?secret=" });
const obj1 = {
  DEVELOPER_PORTAL: "/developers",
  DEVELOPER_PORTAL_GUILD_ANALYTICS(arg0) {
    return "/developers/servers/" + arg0;
  },
  DEVELOPER_PORTAL_TEAMS: "/developers/teams",
  DEVELOPER_PORTAL_EDIT_PAYOUTS(closure_0) {
    return "/developers/teams/" + closure_0 + "/payout-settings";
  },
  DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY: "/developers/applications/select/game-identity"
};
const obj5 = { page: obj2.DIRECT, object: obj4.WEB_URL };
const obj6 = { TEXT_PLAYGROUND: obj3.SETTINGS_TEXT_PLAYGROUND, DESIGN_SYSTEMS: obj3.DESIGN_SYSTEM, DESIGN_SYSTEMS_COLORS: obj3.DESIGN_SYSTEM, INTL_TESTING: obj3.SETTINGS_INTL_TESTING, ANIMATION_TESTING: obj3.DESIGN_SYSTEM, OVERVIEW: obj3.SETTINGS_OVERVIEW, BROWSER: obj3.SETTINGS_BROWSER, CHANGE_LOG: obj3.SETTINGS_CHANGELOG, PREMIUM_GIFTING: obj3.SETTINGS_PREMIUM_GIFTING, BLOCKED_USERS: obj3.SETTINGS_BLOCKED_USERS, BLOCKED_USERS_V2: obj3.SETTINGS_BLOCKED_USERS_V2, IGNORED_USERS: obj3.SETTINGS_IGNORED_USERS, CUSTOM_STATUS: obj3.SETTINGS_CUSTOM_STATUS, CUSTOM_STATUS_EMOJI_PICKER: obj3.SETTINGS_CUSTOM_STATUS_EMOJI_PICKER, CHECK_NATIVE_UPDATE: obj3.SETTINGS_CHECK_NATIVE_UPDATE, INSTALL_NATIVE_UPDATE: obj3.SETTINGS_INSTALL_NATIVE_UPDATE, ACCOUNT: obj3.SETTINGS_ACCOUNT, GAMES: obj3.SETTINGS_GAMES, ACCOUNT_CHANGE_USERNAME: obj3.SETTINGS_CHANGE_USERNAME, ACCOUNT_CHANGE_PASSWORD: obj3.SETTINGS_CHANGE_PASSWORD, ACCOUNT_CONFIRM_PASSWORD: obj3.SETTINGS_CONFIRM_PASSWORD, ACCOUNT_BACKUP_CODES: obj3.SETTINGS_BACKUP_CODES, ACCOUNT_CONFIRM_VIEW_BACKUP_CODES: obj3.SETTINGS_BACKUP_CODES, CONNECTIONS: obj3.SETTINGS_CONNECTIONS, CONNECTIONS_XBOX: obj3.SETTINGS_CONNECTIONS_XBOX, AUTHORIZED_APPS: obj3.SETTINGS_AUTHORIZED_APPS, AUTHORIZED_APP: obj3.SETTINGS_AUTHORIZED_APP, AUTHORIZED_APP_PERMISSIONS: obj3.SETTINGS_AUTHORIZED_APP_PERMISSIONS, TEXT: obj3.SETTINGS_TEXT_AND_IMAGES, VOICE: obj3.SETTINGS_VOICE_AND_VIDEO, PRIVACY_AND_SAFETY: obj3.SETTINGS_PRIVACY_AND_SAFETY, CONTENT_AND_SOCIAL: obj3.SETTINGS_CONTENT_AND_SOCIAL, SENSITIVE_MEDIA_FILTERS: obj3.SETTINGS_SENSITIVE_MEDIA_FILTERS, CONNECTED_GAMES: obj3.SETTINGS_CONNECTED_GAMES, DATA_AND_PRIVACY: obj3.SETTINGS_DATA_AND_PRIVACY, REQUEST_DATA: obj3.SETTINGS_REQUEST_DATA, ACCOUNT_STANDING: obj3.SETTINGS_ACCOUNT_STANDING, NOTIFICATIONS: obj3.SETTINGS_NOTIFICATIONS, SOUNDS: obj3.SETTINGS_SOUNDS, APP_ICONS: obj3.SETTINGS_APP_ICONS, DATA: obj3.SETTINGS_DATA, EMAILS: obj3.SETTINGS_EMAILS, ACTIVITY_PRIVACY: obj3.SETTINGS_ACTIVITY_PRIVACY, REGISTERED_GAMES: obj3.SETTINGS_GAME_ACTIVITY, KEYBINDS: obj3.SETTINGS_KEYBINDS, APPEARANCE: obj3.SETTINGS_APPEARANCE, APPEARANCE_THEME_PICKER: obj3.SETTINGS_APPEARANCE_THEME_PICKER, APPEARANCE_LIGHT_MODE_THEME_PICKER: obj3.SETTINGS_APPEARANCE_LIGHT_MODE_THEME_PICKER, APPEARANCE_DARK_MODE_THEME_PICKER: obj3.SETTINGS_APPEARANCE_DARK_MODE_THEME_PICKER, ACCESSIBILITY: obj3.SETTINGS_ACCESSIBILITY, OVERLAY: obj3.SETTINGS_OVERLAY, LANGUAGE: obj3.SETTINGS_LANGUAGE, STREAMER_MODE: obj3.SETTINGS_STREAMER_MODE, SUBSCRIPTIONS: obj3.SETTINGS_SUBSCRIPTIONS, PREMIUM: obj3.SETTINGS_PREMIUM, PREMIUM_PLAN_SELECT: obj3.SETTINGS_PREMIUM_PLAN_SELECT, PREMIUM_MANAGE_PLAN: obj3.SETTINGS_PREMIUM_MANAGE_PLAN, GUILD_ROLE_SUBSCRIPTIONS: obj3.GUILD_ROLE_SUBSCRIPTION, GUILD_ROLE_SUBSCRIPTIONS_CANCEL: obj3.GUILD_ROLE_SUBSCRIPTION_CANCEL, GUILD_BOOSTING: obj3.GUILD_BOOSTING, WEBAUTHN_VIEW: obj3.SETTINGS_WEBAUTHN_VIEW };
const wrapPathsResult = getAuthenticationPath.wrapPaths(frozen2);
const items3 = [, , , , ];
({ SPOTIFY: arr4[0], XBOX: arr4[1], PLAYSTATION: arr4[2], PLAYSTATION_STAGING: arr4[3], CRUNCHYROLL: arr4[4] } = obj7);
const set1 = new Set(items2);
const set2 = new Set(items3);
const frozen7 = Object.freeze({ DESKTOP: "" + location.protocol + window.GLOBAL_ENV.API_ENDPOINT + "/download", IOS: "https://itunes.apple.com/app/discord/id985746746", ANDROID: "https://play.google.com/store/apps/details?id=com.discord", META_QUEST: "https://www.meta.com/experiences/discord/25956082250713643/" });
const obj9 = { NONE: 0, [0]: "NONE", TIER_1: 1, [1]: "TIER_1", TIER_2: 2, [2]: "TIER_2", TIER_3: 3, [3]: "TIER_3" };
const obj8 = { DESKTOP: "" + location.protocol + window.GLOBAL_ENV.API_ENDPOINT + "/download", IOS: "https://itunes.apple.com/app/discord/id985746746", ANDROID: "https://play.google.com/store/apps/details?id=com.discord", META_QUEST: "https://www.meta.com/experiences/discord/25956082250713643/" };
const items4 = [{ src: "url(https://cdn.discordapp.com/assets/stripe/ggsans-vf.woff2)", family: "gg sans" }];
const frozen8 = Object.freeze({ [obj9.NONE]: 0, [obj9.TIER_1]: 2, [obj9.TIER_2]: 7, [obj9.TIER_3]: 14 });
const obj10 = { UNPAID: 0, [0]: "UNPAID", ACTIVE: 1, [1]: "ACTIVE", PAST_DUE: 2, [2]: "PAST_DUE", CANCELED: 3, [3]: "CANCELED", ENDED: 4, [4]: "ENDED", ACCOUNT_HOLD: 6, [6]: "ACCOUNT_HOLD", BILLING_RETRY: 7, [7]: "BILLING_RETRY", PAUSED: 8, [8]: "PAUSED", PAUSE_PENDING: 9, [9]: "PAUSE_PENDING" };
const obj11 = { ALLOW_PERKS: null, ALL_PAUSE: null, ALL_PAUSEABLE: null, INACTIVE: null };
const items5 = [, , , ];
({ ACTIVE: arr6[0], PAST_DUE: arr6[1], CANCELED: arr6[2], PAUSE_PENDING: arr6[3] } = obj10);
const frozen9 = Object.freeze({ fonts: items4 });
obj11[0] = new Set(items5);
const items6 = [, ];
({ PAUSE_PENDING: arr7[0], PAUSED: arr7[1] } = obj10);
const set3 = new Set(items5);
obj11[1] = new Set(items6);
const items7 = [, ];
({ ACTIVE: arr8[0], PAUSED: arr8[1] } = obj10);
const set4 = new Set(items6);
obj11[2] = new Set(items7);
const items8 = [, , , ];
({ UNPAID: arr9[0], ENDED: arr9[1], ACCOUNT_HOLD: arr9[2], BILLING_RETRY: arr9[3] } = obj10);
const set5 = new Set(items7);
obj11[3] = new Set(items8);
const obj12 = { STAFF: 1, [1]: "STAFF" };
const frozen10 = Object.freeze({ FONT_SIZE_DEFAULT: 16, FONT_SIZE_MIN: 12, FONT_SIZE_MAX: 24, FONT_SIZES: [12, 14, 15, 16, 18, 20, 24], SATURATION_INCREMENTS: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1], ZOOM_DEFAULT: 100, ZOOM_MIN: 50, ZOOM_MAX: 200, ZOOM_SCALES: [50, 67, 75, 80, 90, 100, 110, 125, 150, 175, 200] });
obj12.COLLABORATOR = powResult;
obj12[powResult] = "COLLABORATOR";
obj12.RESTRICTED_COLLABORATOR = powResult1;
obj12[powResult1] = "RESTRICTED_COLLABORATOR";
obj12.PARTNER = 2;
obj12[2] = "PARTNER";
obj12.HYPESQUAD = 4;
obj12[4] = "HYPESQUAD";
obj12.BUG_HUNTER_LEVEL_1 = 8;
obj12[8] = "BUG_HUNTER_LEVEL_1";
obj12.BUG_HUNTER_LEVEL_2 = 16384;
obj12[16384] = "BUG_HUNTER_LEVEL_2";
obj12.HYPESQUAD_ONLINE_HOUSE_1 = 64;
obj12[64] = "HYPESQUAD_ONLINE_HOUSE_1";
obj12.HYPESQUAD_ONLINE_HOUSE_2 = 128;
obj12[128] = "HYPESQUAD_ONLINE_HOUSE_2";
obj12.HYPESQUAD_ONLINE_HOUSE_3 = 256;
obj12[256] = "HYPESQUAD_ONLINE_HOUSE_3";
obj12.PREMIUM_EARLY_SUPPORTER = 512;
obj12[512] = "PREMIUM_EARLY_SUPPORTER";
obj12.VERIFIED_BOT = 65536;
obj12[65536] = "VERIFIED_BOT";
obj12.VERIFIED_DEVELOPER = 131072;
obj12[131072] = "VERIFIED_DEVELOPER";
obj12.CERTIFIED_MODERATOR = 262144;
obj12[262144] = "CERTIFIED_MODERATOR";
obj12.BOT_HTTP_INTERACTIONS = 524288;
obj12[524288] = "BOT_HTTP_INTERACTIONS";
obj12.SPAMMER = 1048576;
obj12[1048576] = "SPAMMER";
obj12.DISABLE_PREMIUM = 2097152;
obj12[2097152] = "DISABLE_PREMIUM";
obj12.PROVISIONAL_ACCOUNT = 8388608;
obj12[8388608] = "PROVISIONAL_ACCOUNT";
obj12.MFA_SMS = 16;
obj12[16] = "MFA_SMS";
obj12.PREMIUM_PROMO_DISMISSED = 32;
obj12[32] = "PREMIUM_PROMO_DISMISSED";
obj12.HAS_UNREAD_URGENT_MESSAGES = 8192;
obj12[8192] = "HAS_UNREAD_URGENT_MESSAGES";
obj12.QUARANTINED = powResult2;
obj12[powResult2] = "QUARANTINED";
const obj13 = { EMBEDDED_RELEASED: null, EMBEDDED_IAP: null, APPLICATION_AUTO_MODERATION_RULE_CREATE_BADGE: null, GAME_PROFILE_DISABLED: null, CONTEXTLESS_ACTIVITY: null, SOCIAL_LAYER_INTEGRATION_LIMITED: null, CLOUD_GAMING_DEMO: null, GATEWAY_PRESENCE: null, GATEWAY_PRESENCE_LIMITED: null, GATEWAY_GUILD_MEMBERS: null, GATEWAY_GUILD_MEMBERS_LIMITED: null, EMBEDDED: null, GATEWAY_MESSAGE_CONTENT: null, GATEWAY_MESSAGE_CONTENT_LIMITED: null, EMBEDDED_FIRST_PARTY: null, APPLICATION_COMMAND_BADGE: null, SOCIAL_LAYER_INTEGRATION: null, PROMOTED: null, PARTNER: null, PARENT: null, DISABLE_RELATIONSHIPS_ACCESS: null };
const set6 = new Set(items8);
obj13[0] = require("INVITE");
obj13[1] = require("sum");
obj13[2] = require("set");
obj13[3] = require("int2hslRaw");
obj13[4] = require("ApplicationDistributors");
obj13[5] = require("set");
obj13[6] = require("keys");
obj13[7] = require("set");
obj13[8] = require("MessageEmbedTypes");
obj13[9] = require("MessageReferenceTypes");
obj13[10] = require("SKUFlags");
obj13[11] = require("module_17");
obj13[12] = require("module_18");
obj13[13] = require("module_19");
obj13[14] = require("module_20");
obj13[15] = require("module_23");
obj13[16] = require("module_27");
obj13[17] = require("module_29");
obj13[18] = require("module_30");
obj13[19] = require("module_33");
obj13[20] = require("module_34");
const frozen11 = Object.freeze(obj13);
const frozen12 = Object.freeze({
  STORAGE_MANIFEST(arg0, arg1) {
    return "" + arg0 + "/storage/" + arg1 + "/MANIFEST";
  },
  INSTALL_DIR(arg0) {
    return "" + arg0 + "/content";
  },
  ROOT_PATTERN: ["**/*"],
  ROOT_STORAGE_PATH(arg0, arg1) {
    return "" + arg0 + "/storage/" + arg1 + "/content";
  },
  ROOT_ID: "sdk",
  ROOT_PLATFORMS: { macos: "macos", windows: "windows", linux: "linux" }
});
const obj15 = { GIF: "GIF", STICKER: "STICKER" };
const frozen13 = Object.freeze({ ALL: null, GUILD_UPDATE: 1, CHANNEL_CREATE: 10, CHANNEL_UPDATE: 11, CHANNEL_DELETE: 12, CHANNEL_OVERWRITE_CREATE: 13, CHANNEL_OVERWRITE_UPDATE: 14, CHANNEL_OVERWRITE_DELETE: 15, MEMBER_KICK: 20, MEMBER_PRUNE: 21, MEMBER_BAN_ADD: 22, MEMBER_BAN_REMOVE: 23, MEMBER_UPDATE: 24, MEMBER_ROLE_UPDATE: 25, MEMBER_MOVE: 26, MEMBER_DISCONNECT: 27, BOT_ADD: 28, ROLE_CREATE: 30, ROLE_UPDATE: 31, ROLE_DELETE: 32, INVITE_CREATE: 40, INVITE_UPDATE: 41, INVITE_DELETE: 42, WEBHOOK_CREATE: 50, WEBHOOK_UPDATE: 51, WEBHOOK_DELETE: 52, EMOJI_CREATE: 60, EMOJI_UPDATE: 61, EMOJI_DELETE: 62, MESSAGE_DELETE: 72, MESSAGE_BULK_DELETE: 73, MESSAGE_PIN: 74, MESSAGE_UNPIN: 75, INTEGRATION_CREATE: 80, INTEGRATION_UPDATE: 81, INTEGRATION_DELETE: 82, STAGE_INSTANCE_CREATE: 83, STAGE_INSTANCE_UPDATE: 84, STAGE_INSTANCE_DELETE: 85, STICKER_CREATE: 90, STICKER_UPDATE: 91, STICKER_DELETE: 92, GUILD_SCHEDULED_EVENT_CREATE: 100, GUILD_SCHEDULED_EVENT_UPDATE: 101, GUILD_SCHEDULED_EVENT_DELETE: 102, THREAD_CREATE: 110, THREAD_UPDATE: 111, THREAD_DELETE: 112, APPLICATION_COMMAND_PERMISSION_UPDATE: 121, SOUNDBOARD_SOUND_CREATE: 130, SOUNDBOARD_SOUND_UPDATE: 131, SOUNDBOARD_SOUND_DELETE: 132, AUTO_MODERATION_RULE_CREATE: 140, AUTO_MODERATION_RULE_UPDATE: 141, AUTO_MODERATION_RULE_DELETE: 142, AUTO_MODERATION_BLOCK_MESSAGE: 143, AUTO_MODERATION_FLAG_TO_CHANNEL: 144, AUTO_MODERATION_USER_COMMUNICATION_DISABLED: 145, AUTO_MODERATION_QUARANTINE_USER: 146, CREATOR_MONETIZATION_REQUEST_CREATED: 150, CREATOR_MONETIZATION_TERMS_ACCEPTED: 151, ONBOARDING_PROMPT_CREATE: 163, ONBOARDING_PROMPT_UPDATE: 164, ONBOARDING_PROMPT_DELETE: 165, ONBOARDING_CREATE: 166, ONBOARDING_UPDATE: 167, GUILD_HOME_FEATURE_ITEM: 171, GUILD_HOME_REMOVE_ITEM: 172, HARMFUL_LINKS_BLOCKED_MESSAGE: 180, HOME_SETTINGS_CREATE: 190, HOME_SETTINGS_UPDATE: 191, VOICE_CHANNEL_STATUS_CREATE: 192, VOICE_CHANNEL_STATUS_DELETE: 193, GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE: 200, GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE: 201, GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE: 202, GUILD_MEMBER_VERIFICATION_UPDATE: 210, GUILD_PROFILE_UPDATE: 211, GUILD_MIGRATE_PIN_PERMISSION: 212, GUILD_MIGRATE_BYPASS_SLOWMODE_PERMISSION: 213 });
const obj17 = {};
const frozen14 = Object.freeze({ GIF: { type: obj15.GIF, command: "gif", title: "Gif", commandId: "-16" } });
obj17[require("ApplicationDistributors").ApplicationDistributors.DISCORD] = "Discord";
obj17[require("ApplicationDistributors").ApplicationDistributors.STEAM] = "Steam";
obj17[require("ApplicationDistributors").ApplicationDistributors.UPLAY] = "Uplay";
obj17[require("ApplicationDistributors").ApplicationDistributors.BATTLENET] = "Battle.net";
obj17[require("ApplicationDistributors").ApplicationDistributors.ORIGIN] = "Origin";
obj17[require("ApplicationDistributors").ApplicationDistributors.EAPLAY] = "EA Play";
obj17[require("ApplicationDistributors").ApplicationDistributors.GOG] = "GOG";
obj17[require("ApplicationDistributors").ApplicationDistributors.GLYPH] = "Glyph";
obj17[require("ApplicationDistributors").ApplicationDistributors.TWITCH] = "Twitch";
obj17[require("ApplicationDistributors").ApplicationDistributors.EPIC] = "Epic";
obj17[require("ApplicationDistributors").ApplicationDistributors.GOOGLE_PLAY] = "Google Play";
obj17[require("ApplicationDistributors").ApplicationDistributors.SAMSUNG_GALAXY] = "Samsung Galaxy";
obj17[require("ApplicationDistributors").ApplicationDistributors.MICROSOFT] = "Microsoft";
obj17[require("ApplicationDistributors").ApplicationDistributors.PLAYSTATION] = "PlayStation";
obj17[require("ApplicationDistributors").ApplicationDistributors.IGDB] = "IGDB";
obj17[require("ApplicationDistributors").ApplicationDistributors.NVIDIA_GDN_APP] = "NVIDIA Cloud Gaming Application";
obj17[require("ApplicationDistributors").ApplicationDistributors.ROBLOX] = "Roblox";
obj17[require("ApplicationDistributors").ApplicationDistributors.XBOX_STORE] = "Xbox Store";
obj17[require("ApplicationDistributors").ApplicationDistributors.XBOX_TITLE] = "Xbox Title";
obj17[require("ApplicationDistributors").ApplicationDistributors.XBOX_GAME_PASS] = "Xbox Game Pass";
obj17[require("ApplicationDistributors").ApplicationDistributors.GOP] = "GOP";
obj17[require("ApplicationDistributors").ApplicationDistributors.GDCO] = "GDCO";
obj17[require("ApplicationDistributors").ApplicationDistributors.OPENCRITIC] = "OpenCritic";
const obj18 = { MUTUAL_FRIENDS: 2, [2]: "MUTUAL_FRIENDS", MUTUAL_GUILDS: 4, [4]: "MUTUAL_GUILDS", NO_RELATION: 8, [8]: "NO_RELATION" };
const obj19 = { OVERLAY: "OVERLAY", APP: "APP", POPOUT: "POPOUT", CALL_TILE_POPOUT: "CALL_TILE_POPOUT" };
const items9 = [, , , , , , , , , ];
({ USD: arr10[0], CAD: arr10[1], EUR: arr10[2], AUD: arr10[3], GBP: arr10[4], PHP: arr10[5], MYR: arr10[6], VND: arr10[7], KRW: arr10[8], IDR: arr10[9] } = sum.CurrencyCodes);
const frozen15 = Object.freeze(obj17);
const obj14 = {
  STORAGE_MANIFEST(arg0, arg1) {
    return "" + arg0 + "/storage/" + arg1 + "/MANIFEST";
  },
  INSTALL_DIR(arg0) {
    return "" + arg0 + "/content";
  },
  ROOT_PATTERN: ["**/*"],
  ROOT_STORAGE_PATH(arg0, arg1) {
    return "" + arg0 + "/storage/" + arg1 + "/content";
  },
  ROOT_ID: "sdk",
  ROOT_PLATFORMS: { macos: "macos", windows: "windows", linux: "linux" }
};
const obj16 = { type: obj15.GIF, command: "gif", title: "Gif", commandId: "-16" };
const tmp35 = obj18.MUTUAL_FRIENDS | obj18.MUTUAL_GUILDS | obj18.NO_RELATION;
const tmp36 = obj18.MUTUAL_FRIENDS | obj18.MUTUAL_GUILDS;
const frozen16 = Object.freeze({
  APPLICATIONS(arg0) {
    let combined = null;
    if (null != arg0) {
      const _HermesInternal = HermesInternal;
      combined = "applications/" + arg0;
    }
    return combined;
  },
  APP_PREMIUM_BUTTON(arg0) {
    let combined = null;
    if (null != arg0) {
      const _HermesInternal = HermesInternal;
      combined = "premium-button/" + arg0;
    }
    return combined;
  },
  CUSTOM_ACTIVITY_LINK(arg0, arg1) {
    let combined = null;
    if (null != arg0) {
      combined = null;
      if (null != arg1) {
        const _HermesInternal = HermesInternal;
        combined = "custom-activity-links/" + arg0 + "/" + arg1;
      }
    }
    return combined;
  },
  SKU(arg0) {
    let combined = null;
    if (null != arg0) {
      const _HermesInternal = HermesInternal;
      combined = "sku/" + arg0;
    }
    return combined;
  },
  STORE_LISTING(arg0) {
    let combined = null;
    if (null != arg0) {
      const _HermesInternal = HermesInternal;
      combined = "store-listing/" + arg0;
    }
    return combined;
  },
  SUBSCRIPTION_PLANS(arg0) {
    let combined = null;
    if (null != arg0) {
      const _HermesInternal = HermesInternal;
      combined = "subscription-plans/" + arg0;
    }
    return combined;
  },
  SUBSCRIPTION_PLAN(arg0) {
    let combined = null;
    if (null != arg0) {
      const _HermesInternal = HermesInternal;
      combined = "subscription-plan/" + arg0;
    }
    return combined;
  },
  USER_COUNTRY_CODE() {
    return "location-metadata";
  },
  USER_APPLICATION_IDENTITIES(arg0) {
    return "user-application-identities/" + arg0;
  },
  ACTIVITIES_DISCORD_CONFIG(arg0) {
    return "activities-discord-config/" + arg0;
  },
  GAME(arg0) {
    let combined = null;
    if (null != arg0) {
      const _HermesInternal = HermesInternal;
      combined = "games/" + arg0;
    }
    return combined;
  },
  GAME_AUTOCOMPLETE(arg0) {
    let combined = null;
    if (null != arg0) {
      const _HermesInternal = HermesInternal;
      combined = "game-autocomplete/" + arg0;
    }
    return combined;
  },
  GUILD_OFFICIAL_MESSAGES(arg0) {
    let combined = null;
    if (null != arg0) {
      const _HermesInternal = HermesInternal;
      combined = "guild-official-messages/" + arg0;
    }
    return combined;
  },
  __DO_NOT_USE__STOREFRONT_MESSAGE_EMBED_PARENT_SKU(arg0) {
    let combined = null;
    if (null != arg0) {
      const _HermesInternal = HermesInternal;
      combined = "useParentSkuData/" + arg0;
    }
    return combined;
  }
});
const result1 = set.fileFinishedImporting("Constants.tsx");
const keys = Object.keys();
if (keys !== undefined) {
  while (keys[1] !== undefined) {
    let tmp45 = tmp41;
    exports[tmp41] = require("keys")[tmp41];
    continue;
  }
}
sum = Object.keys();
if (sum !== undefined) {
  while (sum[1] !== undefined) {
    let tmp46 = tmp44;
    exports[tmp44] = sum[tmp44];
    continue;
  }
}

export { Routes };
export { ME };
export { FAVORITES };
export { NOTIFICATIONS_INBOX };
export { EMPTY_NUX_SERVER };
export { MOBILE_GUILD_UPSELL_LIST };
export const ChannelTypes = require("set").ChannelTypes;
export const MessageTypes = require("set").MessageTypes;
export const ChannelTypesSets = require("set").ChannelTypesSets;
export const MessageTypesSets = require("set").MessageTypesSets;
export const MessageEmbedTypes = require("MessageEmbedTypes").MessageEmbedTypes;
export const MessageReferenceTypes = require("MessageReferenceTypes").MessageReferenceTypes;
export const SubscriptionTypes = sum.SubscriptionTypes;
export const SKUFlags = require("SKUFlags").SKUFlags;
export const LoginStates = { NONE: "NONE", LOGGING_IN: "LOGGING_IN", ACCOUNT_SCHEDULED_FOR_DELETION: "ACCOUNT_SCHEDULED_FOR_DELETION", ACCOUNT_DISABLED: "ACCOUNT_DISABLED", FORGOT_PASSWORD: "FORGOT_PASSWORD", MFA_STEP: "MFA_STEP", LOGGING_IN_MFA: "LOGGING_IN_MFA", MFA_SMS_STEP: "MFA_SMS_STEP", LOGGING_IN_MFA_SMS: "LOGGING_IN_MFA_SMS", LOGIN_AGE_GATE: "LOGIN_AGE_GATE", PASSWORD_RECOVERY_PHONE_VERIFICATION: "PASSWORD_RECOVERY_VERIFY_PHONE", PHONE_IP_AUTHORIZATION: "PHONE_IP_AUTHORIZATION" };
export const FormStates = { OPEN: "OPEN", SUBMITTING: "SUBMITTING", CLOSED: "CLOSED" };
export const KeybindActions = { SERVER_NEXT: "SERVER_NEXT", SERVER_PREV: "SERVER_PREV", CHANNEL_NEXT: "CHANNEL_NEXT", CHANNEL_PREV: "CHANNEL_PREV", NAVIGATE_BACK: "NAVIGATE_BACK", NAVIGATE_FORWARD: "NAVIGATE_FORWARD", UNREAD_NEXT: "UNREAD_NEXT", UNREAD_PREV: "UNREAD_PREV", MENTION_CHANNEL_NEXT: "MENTION_CHANNEL_NEXT", MENTION_CHANNEL_PREV: "MENTION_CHANNEL_PREV", JUMP_TO_CURRENT_CALL: "JUMP_TO_CURRENT_CALL", TOGGLE_SETTINGS: "TOGGLE_SETTINGS", TOGGLE_HELP: "TOGGLE_HELP", TOGGLE_USERS: "TOGGLE_USERS", TOGGLE_INBOX: "TOGGLE_INBOX", MARK_TOP_INBOX_CHANNEL_READ: "MARK_TOP_INBOX_CHANNEL_READ", TOGGLE_CHANNEL_PINS: "TOGGLE_CHANNEL_PINS", TOGGLE_PREVIOUS_GUILD: "TOGGLE_PREVIOUS_GUILD", TOGGLE_MUTE: "TOGGLE_MUTE", TOGGLE_DEAFEN: "TOGGLE_DEAFEN", TOGGLE_CAMERA: "TOGGLE_CAMERA", TOGGLE_HOTKEYS: "TOGGLE_HOTKEYS", TOGGLE_CATEGORY_COLLAPSED: "TOGGLE_CATEGORY_COLLAPSED", SEARCH_SOUNDBOARD: "SEARCH_SOUNDBOARD", UPLOAD_FILE: "UPLOAD_FILE", SEARCH_EMOJIS: "SEARCH_EMOJIS", SEARCH_GIFS: "SEARCH_GIFS", SEARCH_STICKERS: "SEARCH_STICKERS", MARK_CHANNEL_READ: "MARK_CHANNEL_READ", MARK_SERVER_READ: "MARK_SERVER_READ", MENTION_NEXT: "MENTION_NEXT", MENTION_PREV: "MENTION_PREV", CREATE_DM_GROUP: "CREATE_DM_GROUP", CREATE_GUILD: "CREATE_GUILD", RETURN_TO_AUDIO_CHANNEL: "RETURN_TO_AUDIO_CHANNEL", CALL_ACCEPT: "CALL_ACCEPT", CALL_DECLINE: "CALL_DECLINE", CALL_START: "CALL_START", SCROLL_UP: "SCROLL_UP", SCROLL_DOWN: "SCROLL_DOWN", TEXTAREA_FOCUS: "TEXTAREA_FOCUS", CLOSE_MODAL: "CLOSE_MODAL", POP_LAYER: "POP_LAYER", SUBMIT: "SUBMIT", EDIT_LAST_MESSAGE: "EDIT_LAST_MESSAGE", JUMP_TO_GUILD: "JUMP_TO_GUILD", JUMP_TO_FIRST_UNREAD: "JUMP_TO_FIRST_UNREAD", JUMP_TO_PRESENT: "JUMP_TO_PRESENT", FOCUS_SEARCH: "FOCUS_SEARCH", QUICKSWITCHER_SHOW: "QUICKSWITCHER_SHOW", QUICKSWITCHER_HIDE: "QUICKSWITCHER_HIDE", ZOOM_IN: "ZOOM_IN", ZOOM_OUT: "ZOOM_OUT", ZOOM_RESET: "ZOOM_RESET", CAROUSEL_NEXT: "CAROUSEL_NEXT", CAROUSEL_PREV: "CAROUSEL_PREV", MODAL_CAROUSEL_NEXT: "MODAL_CAROUSEL_NEXT", MODAL_CAROUSEL_PREV: "MODAL_CAROUSEL_PREV", OPEN_APP_DIRECTORY: "OPEN_APP_DIRECTORY", BROWSER_DEVTOOLS: "BROWSER_DEVTOOLS", VIBE_WITH_WUMPUS: "VIBE_WITH_WUMPUS", OPEN_CONTEXT_MENU: "OPEN_CONTEXT_MENU", COPY_CHANNEL_LINK: "COPY_CHANNEL_LINK" };
export const GlobalKeybindActions = { UNASSIGNED: "UNASSIGNED", PUSH_TO_TALK: "PUSH_TO_TALK", PUSH_TO_TALK_PRIORITY: "PUSH_TO_TALK_PRIORITY", PUSH_TO_MUTE: "PUSH_TO_MUTE", TOGGLE_MUTE: "TOGGLE_MUTE", TOGGLE_DEAFEN: "TOGGLE_DEAFEN", TOGGLE_CAMERA: "TOGGLE_CAMERA", TOGGLE_OVERLAY: "TOGGLE_OVERLAY", TOGGLE_VOICE_MODE: "TOGGLE_VOICE_MODE", TOGGLE_OVERLAY_INPUT_LOCK: "TOGGLE_OVERLAY_INPUT_LOCK", TOGGLE_STREAMER_MODE: "TOGGLE_STREAMER_MODE", TOGGLE_PRIORITY_SPEAKER: "TOGGLE_PRIORITY_SPEAKER", TOGGLE_GO_LIVE_STREAMING: "TOGGLE_GO_LIVE_STREAMING", NAVIGATE_BACK: "NAVIGATE_BACK", NAVIGATE_FORWARD: "NAVIGATE_FORWARD", OVERLAY_ACTIVATE_REGION_TEXT_WIDGET: "OVERLAY_ACTIVATE_REGION_TEXT_WIDGET", SOUNDBOARD: "SOUNDBOARD", SOUNDBOARD_HOLD: "SOUNDBOARD_HOLD", SAVE_CLIP: "SAVE_CLIP", SAVE_SCREENSHOT: "SAVE_SCREENSHOT", SWITCH_TO_VOICE_CHANNEL: "SWITCH_TO_VOICE_CHANNEL", DISCONNECT_FROM_VOICE_CHANNEL: "DISCONNECT_FROM_VOICE_CHANNEL", VAD_PRIORITY: "VAD_PRIORITY", TOGGLE_VOICE_CHANNEL_CHAT: "TOGGLE_VOICE_CHANNEL_CHAT" };
export const RecentMentionsFilters = { ALL_SERVERS: "ALL_SERVERS", THIS_SERVER: "THIS_SERVER" };
export const RTCDebugSections = { TRANSPORT: "TRANSPORT", OUTBOUND: "OUTBOUND", SCREENSHARE: "SCREENSHARE", INBOUND: "INBOUND", STREAMS_OUTBOUND: "STREAMS_OUTBOUND", STREAMS_INBOUND: "STREAMS_INBOUND", CAMERA: "CAMERA", CLIPS: "CLIPS" };
export const GuildSettingsSections = { LANDING: "LANDING", OVERVIEW: "OVERVIEW", ONBOARDING: "ONBOARDING", MEMBERS: "MEMBERS", MEMBER_EDIT: "MEMBER_EDIT", MEMBER_TIMEOUT: "MEMBER_TIMEOUT", MEMBER_KICK: "MEMBER_KICK", MEMBER_BAN: "MEMBER_BAN", CHANNELS: "CHANNELS", ROLES: "ROLES", ROLE_EDIT: "ROLE_EDIT", ROLE_PERMISSIONS: "ROLE_PERMISSIONS", BANS: "BANS", INSTANT_INVITES: "INSTANT_INVITES", GUILD_TEMPLATES: "GUILD_TEMPLATES", INTEGRATIONS: "INTEGRATIONS", INTEGRATION_SETTINGS: "INTEGRATION_SETTINGS", SECURITY: "SECURITY", VANITY_URL: "VANITY_URL", EMOJI: "EMOJI", AUDIT_LOG: "AUDIT_LOG", AUDIT_LOG_FILTER: "AUDIT_LOG_FILTER", MODERATION: "MODERATION", DELETE: "DELETE", ACCESS: "ACCESS", DISCOVERY_LANDING_PAGE: "DISCOVERY_LANDING_PAGE", ANALYTICS: "ANALYTICS", COMMUNITY: "COMMUNITY", COMMUNITY_WELCOME: "COMMUNITY_WELCOME", MEMBER_VERIFICATION: "MEMBER_VERIFICATION", STICKERS: "STICKERS", ROLE_SUBSCRIPTIONS: "ROLE_SUBSCRIPTIONS", ROLE_SUBSCRIPTIONS_TIER_EDIT: "ROLE_SUBSCRIPTIONS_TIER_EDIT", ROLE_SUBSCRIPTIONS_STORE_PAGE: "ROLE_SUBSCRIPTIONS_STORE_PAGE", GUILD_PRODUCTS: "GUILD_PRODUCTS", SOUNDBOARD: "SOUNDBOARD", APP_DIRECTORY: "APP_DIRECTORY", GUILD_AUTOMOD: "GUILD_AUTOMOD", SAFETY: "SAFETY", OFFICIAL_MESSAGES: "OFFICIAL_MESSAGES", PROFILE: "PROFILE", TAG: "TAG", TAG_CUSTOMIZE: "TAG_CUSTOMIZE", GUILD_THEME: "GUILD_THEME", ENGAGEMENT: "ENGAGEMENT", INVITES: "INVITES", BOOST_PERKS: "BOOST_PERKS", WEBHOOKS: "WEBHOOKS", EDIT_WEBHOOK: "EDIT_WEBHOOK", INTEGRATION_PLATFORM: "INTEGRATION_PLATFORM", LOBBIES_LINKED: "LOBBIES_LINKED", EDIT_LINKED_LOBBY: "EDIT_LINKED_LOBBY", CHANNELS_FOLLOWED: "CHANNELS_FOLLOWED", COMMUNITY_INTRO: "COMMUNITY_INTRO", ROLE_EDIT_REFRESH: "ROLE_EDIT_REFRESH", ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION: "ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION", ROLE_SUBSCRIPTIONS_BASIC: "ROLE_SUBSCRIPTIONS_BASIC", ROLE_SUBSCRIPTIONS_TIERS: "ROLE_SUBSCRIPTIONS_TIERS", ROLE_SUBSCRIPTIONS_PAYMENTS: "ROLE_SUBSCRIPTIONS_PAYMENTS", ROLE_SUBSCRIPTIONS_EMOJIS: "ROLE_SUBSCRIPTIONS_EMOJIS", ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION: "ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION" };
export const GuildSettingsSubsections = { DISPLAY: "DISPLAY", INVITE: "INVITE", DEFAULT_NOTIFICATIONS: "DEFAULT_NOTIFICATIONS", ROLE_SUBSCRIPTION_TIERS: "ROLE_SUBSCRIPTION_TIERS", ROLE_SUBSCRIPTION_EMOJI: "ROLE_SUBSCRIPTION_EMOJI", ROLE_SUBSCRIPTION_TIER_TEMPLATE: "ROLE_SUBSCRIPTION_TIER_TEMPLATE", AUTOMOD_MENTION_SPAM: "AUTOMOD_MENTION_SPAM", SERVER_GUIDE: "SERVER_GUIDE", SAFETY_OVERVIEW: "SAFETY_OVERVIEW", SAFETY_AUTOMOD: "SAFETY_AUTOMOD", SAFETY_DM_AND_SPAM_PROTECTION: "SAFETY_DM_AND_SPAM_PROTECTION", SAFETY_CAPTCHA_AND_RAID_PROTECTION: "SAFETY_CAPTCHA_AND_RAID_PROTECTION", SAFETY_PERMISSIONS: "SAFETY_PERMISSIONS", ACCESS_DISCOVERABLE: "ACCESS_DISCOVERABLE", PROFILE_VISIBILITY: "PROFILE_VISIBILITY", BOOST_PERKS_VANITY_URL: "BOOST_PERKS_VANITY_URL" };
export const ChannelSettingsSections = { OVERVIEW: "OVERVIEW", PERMISSIONS: "PERMISSIONS", INSTANT_INVITES: "INSTANT_INVITES", INTEGRATIONS: "INTEGRATIONS", DELETE: "DELETE", DEFAULT_FORUM_LAYOUT: "DEFAULT_FORUM_LAYOUT", NOTIFICATIONS: "NOTIFICATIONS", PINNED_MESSAGES: "PINNED_MESSAGES", INSTANT_INVITES_MANAGEMENT: "INSTANT_INVITES_MANAGEMENT", PINNED_CHAT: "PINNED_CHAT", NEW_PERMISSION: "NEW_PERMISSION", PERMISSION_OVERRIDES: "PERMISSION_OVERRIDES", CHANGE_CATEGORY: "CHANGE_CATEGORY", WEBHOOKS: "WEBHOOKS", EDIT_LINKED_LOBBY: "EDIT_LINKED_LOBBY", CHANNELS_FOLLOWED: "CHANNELS_FOLLOWED", EDIT_WEBHOOK: "EDIT_WEBHOOK", CHANGE_RTC_REGION: "CHANGE_RTC_REGION", EDIT_FORUM_TAG: "EDIT_FORUM_TAG" };
export const ChannelSettingsSubsections = { TOPIC: "TOPIC" };
export const ChannelSections = { NONE: "NONE", MEMBERS: "MEMBERS", SEARCH: "SEARCH", SIDEBAR_CHAT: "SIDEBAR_CHAT", PROFILE: "PROFILE", SUMMARIES: "SUMMARIES", CONVERSATIONS: "CONVERSATIONS" };
export const FriendsSections = { ADD_FRIEND: "ADD_FRIEND", ALL: "ALL", ONLINE: "ONLINE", PENDING: "PENDING", PENDING_IGNORED: "PENDING_IGNORED", SPAM: "SPAM", SUGGESTIONS: "SUGGESTIONS" };
export const SearchSections = { SEARCH: "SEARCH", CHANNEL: "CHANNEL" };
export const DesktopNotificationTypes = { NEVER: "NEVER", ALL: "ALL" };
export const NotificationPermissionTypes = { NEVER: "NEVER", ENABLED: "ENABLED", BLOCKED: "BLOCKED" };
export const TTSNotificationTypes = { NEVER: "NEVER", ALL_CHANNELS: "ALL_CHANNELS", SELECTED_CHANNEL: "SELECTED_CHANNEL" };
export const InputModes = { PUSH_TO_TALK: "PUSH_TO_TALK", VOICE_ACTIVITY: "VOICE_ACTIVITY" };
export const NoticeTypes = { GENERIC: "GENERIC", LAUNCH_GAME_FAILURE: "LAUNCH_GAME_FAILURE", UNCLAIMED_ACCOUNT: "UNCLAIMED_ACCOUNT", UNVERIFIED_ACCOUNT: "UNVERIFIED_ACCOUNT", PENDING_MEMBER: "PENDING_MEMBER", DOWNLOAD_NAG: "DOWNLOAD_NAG", QUEST_APP_UPSELL: "QUEST_APP_UPSELL", VOICE_DISABLED: "VOICE_DISABLED", SCHEDULED_MAINTENANCE: "SCHEDULED_MAINTENANCE", NO_INPUT_DETECTED: "NO_INPUT_DETECTED", NO_INPUT_DEVICES_DETECTED: "NO_INPUT_DEVICES_DETECTED", VIDEO_BACKGROUND_UNAVAILABLE: "VIDEO_BACKGROUND_UNAVAILABLE", STREAMER_MODE: "STREAMER_MODE", SURVEY: "SURVEY", CORRUPT_INSTALLATION: "CORRUPT_INSTALLATION", VIDEO_UNSUPPORTED_BROWSER: "VIDEO_UNSUPPORTED_BROWSER", CONNECT_SPOTIFY: "CONNECT_SPOTIFY", SPOTIFY_AUTO_PAUSED: "SPOTIFY_AUTO_PAUSED", PREMIUM_PROMO: "PREMIUM_PROMO", PASSKEY_BACKUP: "PASSKEY_BACKUP", HARDWARE_MUTE: "HARDWARE_MUTE", DISPATCH_ERROR: "DISPATCH_ERROR", DISPATCH_INSTALL_SCRIPT_PROGRESS: "DISPATCH_INSTALL_SCRIPT_PROGRESS", APPLICATION_TEST_MODE: "APPLICATION_TEST_MODE", DETECTED_OFF_PLATFORM_PREMIUM_PERK: "DETECTED_OFF_PLATFORM_PREMIUM_PERK", DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: "DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL", PREMIUM_TIER_2_TRIAL_ENDING: "PREMIUM_TIER_2_TRIAL_ENDING", PREMIUM_TIER_0_TRIAL_ENDING: "PREMIUM_TIER_0_TRIAL_ENDING", PREMIUM_TIER_2_DISCOUNT_ENDING: "PREMIUM_TIER_2_DISCOUNT_ENDING", LURKING_GUILD: "LURKING_GUILD", VIEWING_ROLES: "VIEWING_ROLES", INVITED_TO_SPEAK: "INVITED_TO_SPEAK", OUTBOUND_PROMOTION: "OUTBOUND_PROMOTION", PREMIUM_UNCANCEL: "PREMIUM_UNCANCEL", PREMIUM_MISSING_PAYMENT: "PREMIUM_MISSING_PAYMENT", PREMIUM_PAST_DUE_MISSING_PAYMENT: "PREMIUM_PAST_DUE_MISSING_PAYMENT", PREMIUM_PAST_DUE_INVALID_PAYMENT: "PREMIUM_PAST_DUE_INVALID_PAYMENT", PREMIUM_REACTIVATE: "PREMIUM_REACTIVATE", CONNECT_PLAYSTATION: "CONNECT_PLAYSTATION", LOCALIZED_PRICING: "LOCALIZED_PRICING", BACK_TO_PREVIOUS_SCREEN: "BACK_TO_PREVIOUS_SCREEN", QUARANTINED: "QUARANTINED", PARENTAL_CONSENT_WARNING: "PARENTAL_CONSENT_WARNING", PREMIUM_TIER_0: "PREMIUM_TIER_0", PREMIUM_PAST_DUE_ONE_TIME_PAYMENT: "PREMIUM_PAST_DUE_ONE_TIME_PAYMENT", BOUNCED_EMAIL_DETECTED: "BOUNCED_EMAIL_DETECTED", AUTO_MODERATION_MENTION_RAID_DETECTION: "AUTO_MODERATION_MENTION_RAID_DETECTION", AUTOMOD_QUARANTINED_USER_PROFILE: "AUTOMOD_QUARANTINED_USER_PROFILE", GUILD_RAID_NOTIFICATION: "GUILD_RAID_NOTIFICATION", WIN32_DEPRECATED_MESSAGE: "WIN32_DEPRECATED_MESSAGE", VOICE_CONNECTED_LAST_SESSION: "VOICE_CONNECTED_LAST_SESSION", HABITUAL_DND: "HABITUAL_DND", WIN7_8_DEPRECATED_MESSAGE: "WIN7_8_DEPRECATED_MESSAGE", WIN_COMPAT_MODE_MESSAGE: "WIN_COMPAT_MODE_MESSAGE", QUESTS_PROGRESS_INTERRUPTION: "QUESTS_PROGRESS_INTERRUPTION", CHECKOUT_RECOVERY_NAGBAR: "CHECKOUT_RECOVERY_NAGBAR", BLOCK_USER_FEEDBACK_NAGBAR: "BLOCK_USER_FEEDBACK_NAGBAR", IGNORE_USER_FEEDBACK_NAGBAR: "IGNORE_USER_FEEDBACK_NAGBAR", GIFTING_PROMOTION_REMINDER: "GIFTING_PROMOTION_REMINDER", COLLECTIBLES_SHOP_NAGBAR: "COLLECTIBLES_SHOP_NAGBAR", LOGIN: "LOGIN", REGISTER: "REGISTER", MACOS_DEPRECATED_MESSAGE: "MACOS_DEPRECATED_MESSAGE", SYSTEM_SERVICE_WARNING: "SYSTEM_SERVICE_WARNING", SAFETY_SUSPENDED_USER_WARNING: "SAFETY_SUSPENDED_USER_WARNING", VOICE_DARE_OFFER: "VOICE_DARE_OFFER", PTT_NO_KEYBIND_WARNING: "PTT_NO_KEYBIND_WARNING", E2EE_UPDATE_REQUIRED: "E2EE_UPDATE_REQUIRED", WINDOWS_MEDIA_PACK_REQUIRED: "WINDOWS_MEDIA_PACK_REQUIRED", PREMIUM_MARKETING_NAGBAR: "PREMIUM_MARKETING_NAGBAR", PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR: "PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR", RIOT_MIGRATION: "RIOT_MIGRATION", RIOT_CONNECTION_DEPRECATION_ADMIN: "RIOT_CONNECTION_DEPRECATION_ADMIN", RESTRICTED_HOURS_WARNING: "RESTRICTED_HOURS_WARNING", BATTLENET_MIGRATION: "BATTLENET_MIGRATION", BATTLENET_LINKED_ROLE_DEPRECATION: "BATTLENET_LINKED_ROLE_DEPRECATION" };
export const InviteStates = { RESOLVING: "RESOLVING", RESOLVED: "RESOLVED", EXPIRED: "EXPIRED", BANNED: "BANNED", ACCEPTING: "ACCEPTING", ACCEPTED: "ACCEPTED", APP_OPENING: "APP_OPENING", APP_OPENED: "APP_OPENED", APP_NOT_OPENED: "APP_NOT_OPENED", ERROR: "ERROR" };
export const NativeAppStates = { OPENING: "OPENING", OPEN: "OPEN", OPEN_FAIL: "OPEN_FAIL" };
export const GuildFeatures = { INVITE_SPLASH: "INVITE_SPLASH", VIP_REGIONS: "VIP_REGIONS", VANITY_URL: "VANITY_URL", MORE_EMOJI: "MORE_EMOJI", MORE_STICKERS: "MORE_STICKERS", MORE_SOUNDBOARD: "MORE_SOUNDBOARD", VERIFIED: "VERIFIED", COMMERCE: "COMMERCE", DISCOVERABLE: "DISCOVERABLE", COMMUNITY: "COMMUNITY", FEATURABLE: "FEATURABLE", NEWS: "NEWS", HUB: "HUB", PARTNERED: "PARTNERED", ANIMATED_ICON: "ANIMATED_ICON", BANNER: "BANNER", ENABLED_DISCOVERABLE_BEFORE: "ENABLED_DISCOVERABLE_BEFORE", WELCOME_SCREEN_ENABLED: "WELCOME_SCREEN_ENABLED", MEMBER_VERIFICATION_GATE_ENABLED: "MEMBER_VERIFICATION_GATE_ENABLED", PREVIEW_ENABLED: "PREVIEW_ENABLED", ROLE_SUBSCRIPTIONS_ENABLED: "ROLE_SUBSCRIPTIONS_ENABLED", ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE: "ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE", CREATOR_MONETIZABLE: "CREATOR_MONETIZABLE", CREATOR_MONETIZABLE_PROVISIONAL: "CREATOR_MONETIZABLE_PROVISIONAL", CREATOR_MONETIZABLE_WHITEGLOVE: "CREATOR_MONETIZABLE_WHITEGLOVE", CREATOR_MONETIZABLE_DISABLED: "CREATOR_MONETIZABLE_DISABLED", CREATOR_MONETIZABLE_RESTRICTED: "CREATOR_MONETIZABLE_RESTRICTED", CREATOR_STORE_PAGE: "CREATOR_STORE_PAGE", CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING: "CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING", SOCIAL_LAYER_STOREFRONT: "SOCIAL_LAYER_STOREFRONT", PRODUCTS_AVAILABLE_FOR_PURCHASE: "PRODUCTS_AVAILABLE_FOR_PURCHASE", GUILD_WEB_PAGE_VANITY_URL: "GUILD_WEB_PAGE_VANITY_URL", THREADS_ENABLED: "THREADS_ENABLED", THREADS_ENABLED_TESTING: "THREADS_ENABLED_TESTING", NEW_THREAD_PERMISSIONS: "NEW_THREAD_PERMISSIONS", ROLE_ICONS: "ROLE_ICONS", TEXT_IN_STAGE_ENABLED: "TEXT_IN_STAGE_ENABLED", TEXT_IN_VOICE_ENABLED: "TEXT_IN_VOICE_ENABLED", HAS_DIRECTORY_ENTRY: "HAS_DIRECTORY_ENTRY", ANIMATED_BANNER: "ANIMATED_BANNER", LINKED_TO_HUB: "LINKED_TO_HUB", EXPOSED_TO_ACTIVITIES_WTP_EXPERIMENT: "EXPOSED_TO_ACTIVITIES_WTP_EXPERIMENT", GUILD_HOME_DEPRECATION_OVERRIDE: "GUILD_HOME_DEPRECATION_OVERRIDE", GUILD_HOME_TEST: "GUILD_HOME_TEST", GUILD_HOME_OVERRIDE: "GUILD_HOME_OVERRIDE", GUILD_ONBOARDING: "GUILD_ONBOARDING", GUILD_ONBOARDING_EVER_ENABLED: "GUILD_ONBOARDING_EVER_ENABLED", GUILD_ONBOARDING_HAS_PROMPTS: "GUILD_ONBOARDING_HAS_PROMPTS", GUILD_SERVER_GUIDE: "GUILD_SERVER_GUIDE", INTERNAL_EMPLOYEE_ONLY: "INTERNAL_EMPLOYEE_ONLY", AUTO_MODERATION: "AUTO_MODERATION", INVITES_DISABLED: "INVITES_DISABLED", BURST_REACTIONS: "BURST_REACTIONS", SOUNDBOARD: "SOUNDBOARD", ACTIVITY_FEED_ENABLED_BY_USER: "ACTIVITY_FEED_ENABLED_BY_USER", ACTIVITY_FEED_DISABLED_BY_USER: "ACTIVITY_FEED_DISABLED_BY_USER", CONVERSATIONS_EXTRACTION_PROCESSING: "CONVERSATIONS_EXTRACTION_PROCESSING", SUMMARIES_ENABLED_GA: "SUMMARIES_ENABLED_GA", SUMMARIES_ENABLED_BY_USER: "SUMMARIES_ENABLED_BY_USER", SUMMARIES_OPT_OUT_EXPERIENCE: "SUMMARIES_OPT_OUT_EXPERIENCE", CHANNEL_ICON_EMOJIS_GENERATED: "CHANNEL_ICON_EMOJIS_GENERATED", NON_COMMUNITY_RAID_ALERTS: "NON_COMMUNITY_RAID_ALERTS", RAID_ALERTS_DISABLED: "RAID_ALERTS_DISABLED", PRUNE_REQUIRES_ADMIN: "PRUNE_REQUIRES_ADMIN", AUTOMOD_TRIGGER_USER_PROFILE: "AUTOMOD_TRIGGER_USER_PROFILE", ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY: "ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY", GUILD_PRODUCTS: "GUILD_PRODUCTS", GUILD_PRODUCTS_ALLOW_ARCHIVED_FILE: "GUILD_PRODUCTS_ALLOW_ARCHIVED_FILE", CLAN: "CLAN", MEMBER_VERIFICATION_MANUAL_APPROVAL: "MEMBER_VERIFICATION_MANUAL_APPROVAL", FORWARDING_DISABLED: "FORWARDING_DISABLED", MEMBER_VERIFICATION_ROLLOUT_TEST: "MEMBER_VERIFICATION_ROLLOUT_TEST", AUDIO_BITRATE_128_KBPS: "AUDIO_BITRATE_128_KBPS", AUDIO_BITRATE_256_KBPS: "AUDIO_BITRATE_256_KBPS", AUDIO_BITRATE_384_KBPS: "AUDIO_BITRATE_384_KBPS", VIDEO_BITRATE_ENHANCED: "VIDEO_BITRATE_ENHANCED", VIDEO_QUALITY_1080_60FPS: "VIDEO_QUALITY_1080_60FPS", MAX_FILE_SIZE_50_MB: "MAX_FILE_SIZE_50_MB", MAX_FILE_SIZE_100_MB: "MAX_FILE_SIZE_100_MB", MAX_FILE_SIZE_250_MB: "MAX_FILE_SIZE_250_MB", GUILD_TAGS: "GUILD_TAGS", ENHANCED_ROLE_COLORS: "ENHANCED_ROLE_COLORS", GUILD_THEME: "GUILD_THEME", PREMIUM_TIER_3_OVERRIDE: "PREMIUM_TIER_3_OVERRIDE", REPORT_TO_MOD_SURVEY: "REPORT_TO_MOD_SURVEY", REPORT_TO_MOD_PILOT: "REPORT_TO_MOD_PILOT", TIERLESS_BOOSTING_SYSTEM_MESSAGE: "TIERLESS_BOOSTING_SYSTEM_MESSAGE", PIN_PERMISSION_MIGRATION_COMPLETE: "PIN_PERMISSION_MIGRATION_COMPLETE", BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE: "BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE", GUILD_TAGS_BADGE_PACK_PETS: "GUILD_TAGS_BADGE_PACK_PETS", GUILD_TAGS_BADGE_PACK_FLEX: "GUILD_TAGS_BADGE_PACK_FLEX", GUILD_TAGS_BADGE_PACK_PLANT: "GUILD_TAGS_BADGE_PACK_PLANT", GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES: "GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES", GAME_SERVERS: "GAME_SERVERS", AGE_VERIFICATION_LARGE_GUILD: "AGE_VERIFICATION_LARGE_GUILD", RELAY_ENABLED: "RELAY_ENABLED", CONFERENCE: "CONFERENCE" };
export const SystemChannelFlags = frozen;
export const RTCConnectionStates = { DISCONNECTED: "DISCONNECTED", AWAITING_ENDPOINT: "AWAITING_ENDPOINT", AUTHENTICATING: "AUTHENTICATING", CONNECTING: "CONNECTING", RTC_DISCONNECTED: "RTC_DISCONNECTED", RTC_CONNECTING: "RTC_CONNECTING", RTC_CONNECTED: "RTC_CONNECTED", NO_ROUTE: "NO_ROUTE", ICE_CHECKING: "ICE_CHECKING", DTLS_CONNECTING: "DTLS_CONNECTING" };
export const RTCConnectionQuality = { UNKNOWN: "unknown", BAD: "bad", AVERAGE: "average", FINE: "fine" };
export const ConnectionStatus = { CONNECTED: "connected", CONNECTING: "connecting", ERROR: "error" };
export const VideoToggleState = { MANUAL_ENABLED: "MANUAL_ENABLED", AUTO_PROBING: "AUTO_PROBING", AUTO_ENABLED: "AUTO_ENABLED", DISABLED: "DISABLED", NONE: "NONE" };
export const PageAnalyticsLocations = { LOGIN: "Login", REGISTER: "Register", INVITE: "Accept Invite Page", VERIFY: "Verify Email", DISABLE_EMAIL_NOTIFICATIONS: "Disable Email Notifications", DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS: "Disable Server Highlight Notifications", AUTHORIZE_IP: "Authorize Ip", REJECT_IP: "Reject Ip", REJECT_MFA: "Reject MFA", REPORT: "Report Illegal Content", REPORT_SECOND_LOOK: "Report Second Look", AUTHORIZE_PAYMENT: "Authorize Payment", RESET: "Reset", ACCOUNT_REVERT: "Account Revert", HANDOFF: "Handoff", UNKNOWN: "Unknown", LANDING: "Landing" };
export const MessageStates = { SENT: "SENT", SENDING: "SENDING", SEND_FAILED: "SEND_FAILED" };
export const MessageTypesWithLazyLoadedReferences = set;
export const MessageFlags = { CROSSPOSTED: 1, [1]: "CROSSPOSTED", IS_CROSSPOST: 2, [2]: "IS_CROSSPOST", SUPPRESS_EMBEDS: 4, [4]: "SUPPRESS_EMBEDS", SOURCE_MESSAGE_DELETED: 8, [8]: "SOURCE_MESSAGE_DELETED", URGENT: 16, [16]: "URGENT", HAS_THREAD: 32, [32]: "HAS_THREAD", EPHEMERAL: 64, [64]: "EPHEMERAL", LOADING: 128, [128]: "LOADING", FAILED_TO_MENTION_SOME_ROLES_IN_THREAD: 256, [256]: "FAILED_TO_MENTION_SOME_ROLES_IN_THREAD", GUILD_FEED_HIDDEN: 512, [512]: "GUILD_FEED_HIDDEN", SHOULD_SHOW_LINK_NOT_DISCORD_WARNING: 1024, [1024]: "SHOULD_SHOW_LINK_NOT_DISCORD_WARNING", SUPPRESS_NOTIFICATIONS: 4096, [4096]: "SUPPRESS_NOTIFICATIONS", IS_VOICE_MESSAGE: 8192, [8192]: "IS_VOICE_MESSAGE", HAS_SNAPSHOT: 16384, [16384]: "HAS_SNAPSHOT", IS_COMPONENTS_V2: 32768, [32768]: "IS_COMPONENTS_V2", SENT_BY_SOCIAL_LAYER_INTEGRATION: 65536, [65536]: "SENT_BY_SOCIAL_LAYER_INTEGRATION", HIDDEN_SUSPENDED_USER: 131072, [131072]: "HIDDEN_SUSPENDED_USER", IS_FIRST_BOOSTER: 262144, [262144]: "IS_FIRST_BOOSTER", IS_GUILD_OFFICIAL: 524288, [524288]: "IS_GUILD_OFFICIAL" };
export const MessageAttachmentFlags = { IS_CLIP: 1, [1]: "IS_CLIP", IS_THUMBNAIL: 2, [2]: "IS_THUMBNAIL", IS_REMIX: 4, [4]: "IS_REMIX", IS_SPOILER: 8, [8]: "IS_SPOILER", CONTAINS_EXPLICIT_MEDIA: 16, [16]: "CONTAINS_EXPLICIT_MEDIA", IS_ANIMATED: 32, [32]: "IS_ANIMATED", CONTAINS_GORE_CONTENT: 64, [64]: "CONTAINS_GORE_CONTENT", CONTAINS_SELF_HARM_CONTENT: 128, [128]: "CONTAINS_SELF_HARM_CONTENT", HAS_TIMELINE_COMMENTS: 256, [256]: "HAS_TIMELINE_COMMENTS" };
export const MessageEmbedMediaFlags = { IS_ANIMATED: 32, [32]: "IS_ANIMATED" };
export const MessageEmbedFlags = { CONTAINS_EXPLICIT_MEDIA: 16, [16]: "CONTAINS_EXPLICIT_MEDIA", IS_CONTENT_INVENTORY_ENTRY: 32, [32]: "IS_CONTENT_INVENTORY_ENTRY", CONTAINS_GORE_CONTENT: 64, [64]: "CONTAINS_GORE_CONTENT", CONTAINS_SELF_HARM_CONTENT: 128, [128]: "CONTAINS_SELF_HARM_CONTENT" };
export const OverlayDisplayNames = { ALWAYS: "ALWAYS", NEVER: "NEVER", ONLY_WHILE_SPEAKING: "ONLY_WHILE_SPEAKING" };
export const OverlayDisplayUsers = { ALWAYS: "ALWAYS", ONLY_WHILE_SPEAKING: "ONLY_WHILE_SPEAKING" };
export const OverlayWidgets = { GUILDS: "GUILDS", VOICE: "VOICE", VIDEO: "VIDEO", VOICE_V3: "VOICE_V3", TEXT_CHAT_V3: "TEXT_CHAT_V3", TEXT: "TEXT", GUILDS_TEXT: "GUILDS_TEXT", GO_LIVE: "GO_LIVE", QUICK_ACTIONS: "QUICK_ACTIONS", NOTIFICATIONS: "NOTIFICATIONS", ACTIVITY: "ACTIVITY", FRIENDS: "FRIENDS", CLICK_ZONE_DEBUG: "CLICK_ZONE_DEBUG", PERFORMANCE_DEBUG: "PERFORMANCE_DEBUG" };
export const OverlayWidgetTypes = { DEFAULT: "DEFAULT", PINNED: "PINNED", UNPINNED: "UNPINNED", IN_GAME: "IN_GAME", IN_GAME_TEXT: "IN_GAME_TEXT", IN_GAME_ACTIVE: "IN_GAME_ACTIVE", IN_GAME_PREVIEW: "IN_GAME_PREVIEW" };
export const OverlayAvatarSizes = { LARGE: "large", SMALL: "small" };
export const OverlayNotificationStatus = { ACTIVE: 0, [0]: "ACTIVE", TIMED_OUT: 1, [1]: "TIMED_OUT", DISMISSED: 2, [2]: "DISMISSED", FOCUSED: 3, [3]: "FOCUSED" };
export const OverlayNotificationPositions = { TOP_LEFT: "topLeft", TOP_RIGHT: "topRight", BOTTOM_LEFT: "bottomLeft", BOTTOM_RIGHT: "bottomRight", DISABLED: "disabled" };
export const OverlayNotificationTextChatTypes = { ENABLED: "ENABLED", DISABLED: "DISABLED" };
export const OverlayEventTypes = { CONNECT: "CONNECT", DISPATCH: "DISPATCH", LOG_MESSAGES: "LOG_MESSAGES", STORAGE_SYNC: "STORAGE_SYNC" };
export const OverlayActiveRegions = { TEXT_WIDGET: "TEXT_WIDGET" };
export const VerificationLevels = { NONE: 0, [0]: "NONE", LOW: 1, [1]: "LOW", MEDIUM: 2, [2]: "MEDIUM", HIGH: 3, [3]: "HIGH", VERY_HIGH: 4, [4]: "VERY_HIGH" };
export const VerificationCriteria = frozen1;
export const MFALevels = { NONE: 0, [0]: "NONE", ELEVATED: 1, [1]: "ELEVATED" };
export const GuildExplicitContentFilterTypes = { DISABLED: 0, [0]: "DISABLED", MEMBERS_WITHOUT_ROLES: 1, [1]: "MEMBERS_WITHOUT_ROLES", ALL_MEMBERS: 2, [2]: "ALL_MEMBERS" };
export const RelationshipTypes = { NONE: 0, [0]: "NONE", FRIEND: 1, [1]: "FRIEND", BLOCKED: 2, [2]: "BLOCKED", PENDING_INCOMING: 3, [3]: "PENDING_INCOMING", PENDING_OUTGOING: 4, [4]: "PENDING_OUTGOING", IMPLICIT: 5, [5]: "IMPLICIT", SUGGESTION: 6, [6]: "SUGGESTION" };
export const GiftCodeModalStates = { CONFIRM: "CONFIRM", SUCCESS: "SUCCESS", ERROR: "ERROR", OPEN: "OPEN" };
export const ActivityActionTypes = obj;
export const DebugLogCategory = { RTC: 1, [1]: "RTC", IOS_APP: 2, [2]: "IOS_APP", WEB_APP: 3, [3]: "WEB_APP", ANDROID_APP: 4, [4]: "ANDROID_APP" };
export const GuildHubTypes = { DEFAULT: 0, [0]: "DEFAULT", HIGH_SCHOOL: 1, [1]: "HIGH_SCHOOL", COLLEGE: 2, [2]: "COLLEGE" };
export const EMPTY_STRING_SNOWFLAKE_ID = "";
export const NULL_STRING_GUILD_ID = "null";
export const ZERO_STRING_GUILD_ID = "0";
export const NULL_STRING_CHANNEL_ID = "null";
export const COLLECTIBLES_APPLICATION_ID = "1096190356233670716";
export const Endpoints = wrapPathsResult;
export const ActivityFlags = { INSTANCE: 1, [1]: "INSTANCE", JOIN: 2, [2]: "JOIN", SYNC: 16, [16]: "SYNC", PLAY: 32, [32]: "PLAY", PARTY_PRIVACY_FRIENDS: 64, [64]: "PARTY_PRIVACY_FRIENDS", PARTY_PRIVACY_VOICE_CHANNEL: 128, [128]: "PARTY_PRIVACY_VOICE_CHANNEL", EMBEDDED: 256, [256]: "EMBEDDED", CONTEXTLESS: 512, [512]: "CONTEXTLESS", SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN: 1024, [1024]: "SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN", SUPPORTS_JOIN_URL: 2048, [2048]: "SUPPORTS_JOIN_URL" };
export const UserNotificationSettings = { ALL_MESSAGES: 0, [0]: "ALL_MESSAGES", ONLY_MENTIONS: 1, [1]: "ONLY_MENTIONS", NO_MESSAGES: 2, [2]: "NO_MESSAGES", NULL: 3, [3]: "NULL" };
export const MAX_USER_GUILDS = 100;
export const MAX_USER_GUILDS_PREMIUM = 200;
export const MAX_MESSAGES_PER_CHANNEL = 25;
export const MAX_MESSAGES_FOR_JUMP = 30;
export const MAX_MENTIONS_PER_FETCH = 25;
export const MAX_LOADED_MESSAGES = 100;
export const TRUNCATED_MESSAGE_VIEW_SIZE = 50;
export const MAX_MESSAGE_CACHE_SIZE = 125;
export const MAX_MESSAGE_LENGTH = 2000;
export const MAX_MESSAGE_LENGTH_PREMIUM = 4000;
export const MAX_PINS_PER_CHANNEL = 250;
export const MAX_CHANNEL_NAME_LENGTH = 100;
export const MAX_FRIENDS = 1000;
export const ROLE_NAME_MAX_LENGTH = 100;
export const NOTE_MAX_LENGTH = 256;
export const USERNAME_MAX_LENGTH = 32;
export const BIO_MAX_LENGTH = 190;
export const PRONOUNS_MAX_LENGTH = 40;
export const DISPLAY_NAME_MAX_LENGTH = 32;
export const IDLE_DURATION = 600000;
export const SLOWMODE_MAX_VALUE = result;
export const SLOWMODE_VALUES = items1;
export const MAX_VISUAL_ROLE_LENGTH = 30;
export const MAX_ROLE_LENGTH = 100;
export const MAX_UPLOAD_COUNT = 10;
export const MAX_ATTACHMENT_SIZE = 10485760;
export const MAX_STAFF_ATTACHMENT_SIZE = 524288000;
export const MARKDOWN_SPOILER_WRAPPER = (arg0) => "||" + arg0 + "||";
export const MARKDOWN_SPOILER_REGEXP = /^\|\|([\s\S]+?)\|\|/;
export const MARKDOWN_STATIC_ROUTE_NAME_REGEXP = /^<id:(home|browse|customize|guide|linked-roles)(?::(\d+))?>/;
export const ID_REGEX = /^\d{17,19}$/;
export const ChannelStreamTypes = { MESSAGE: "MESSAGE", MESSAGE_GROUP_BLOCKED: "MESSAGE_GROUP_BLOCKED", MESSAGE_GROUP_IGNORED: "MESSAGE_GROUP_IGNORED", MESSAGE_GROUP_SPAMMER: "MESSAGE_GROUP_SPAMMER", MESSAGE_GROUP_SUSPENDED_USER: "MESSAGE_GROUP_SUSPENDED_USER", THREAD_STARTER_MESSAGE: "THREAD_STARTER_MESSAGE", DIVIDER: "DIVIDER", JUMP_TARGET: "JUMP_TARGET", FORUM_POST_ACTION_BAR: "FORUM_POST_ACTION_BAR", MESSAGE_GROUP: "MESSAGE_GROUP", DIVIDER_TIME_STAMP: "DIVIDER_TIME_STAMP", DIVIDER_NEW_MESSAGES: "DIVIDER_NEW_MESSAGES" };
export const ChannelModes = { VIDEO: "video", VOICE: "voice" };
export const ActivityTypes = { PLAYING: 0, [0]: "PLAYING", STREAMING: 1, [1]: "STREAMING", LISTENING: 2, [2]: "LISTENING", WATCHING: 3, [3]: "WATCHING", CUSTOM_STATUS: 4, [4]: "CUSTOM_STATUS", COMPETING: 5, [5]: "COMPETING", HANG_STATUS: 6, [6]: "HANG_STATUS" };
export const ActivityCardTypes = { GAME: "game", USER: "user", GROUP: "group" };
export const ActivityActionStates = { LOADING: "LOADING", COMPLETE: "COMPLETE", FAILED: "FAILED" };
export const GuildDiscoverySections = { FEATURED: "featured", GAMES_YOU_PLAY: "gamesYouPlay", SEARCH: "search", MISC: "misc" };
export const AVATAR_SIZE = 128;
export const AVATAR_MAX_SIZE = 1024;
export const MAX_PTT_RELEASE_DELAY = 2000;
export const BITRATE_MIN = 8000;
export const BITRATE_DEFAULT = 64000;
export const BITRATE_MAX = 96000;
export const BITRATE_STEP = 1000;
export const NON_USER_BOT_DISCRIMINATOR = "0000";
export const LOCAL_BOT_ID = "1";
export const MAX_VOICE_USER_LIMIT = 99;
export const MAX_STAGE_VOICE_USER_LIMIT = 10000;
export const MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED = 10000;
export const MAX_STAGE_VIDEO_USER_LIMIT_TIER01 = 50;
export const MAX_STAGE_VIDEO_USER_LIMIT_TIER2 = 150;
export const MAX_STAGE_VIDEO_USER_LIMIT_TIER3 = 300;
export const MAX_GROUP_DM_PARTICIPANTS = 10;
export const MAX_GROUP_DM_STAFF_PARTICIPANTS = 25;
export const PLACEHOLDER_TAG = "#0000";
export const CHANNEL_SIDEBAR_WIDTH = 240;
export const DEFAULT_CHAT_SIDEBAR_WIDTH = 480;
export const DEFAULT_MESSAGE_REQUEST_SIDEBAR_WIDTH = 650;
export const DEVICE_TOKEN = "DEVICE_TOKEN";
export const DEVICE_VOIP_TOKEN = "DEVICE_VOIP_TOKEN";
export const FIRST_RUN_DATE_KEY = "first_run_date_key";
export const MarketingURLs = frozen3;
export const RelativeMarketingURLs = frozen4;
export const MAX_AUTOCOMPLETE_RESULTS = 10;
export const SEARCH_PAGE_SIZE = 25;
export const IS_SEARCH_FILTER_TOKEN = /^FILTER_/;
export const IS_SEARCH_ANSWER_TOKEN = /^ANSWER_/;
export const MAX_GUILD_FOLDER_NAME_LENGTH = 32;
export const SearchTypes = { GUILD: "GUILD", CHANNEL: "CHANNEL", GUILD_CHANNEL: "GUILD_CHANNEL", CHAT_SIDEBAR: "CHAT_SIDEBAR", GIF: "GIF", GUILD_DISCOVERY: "GUILD_DISCOVERY", GUILD_DISCOVERY_TAG: "GUILD_DISCOVERY_TAG", GUILD_DISCOVERY_TOPIC: "GUILD_DISCOVERY_TOPIC", STICKER: "STICKER", STICKER_SHOP: "STICKER_SHOP", INSTANT_INVITE: "INSTANT_INVITE", EMOJI: "EMOJI", EMOJI_REACTION: "EMOJI_REACTION", EMOJI_AUTO_SUGGESTION: "EMOJI_AUTO_SUGGESTION", DMS: "DMS", THREAD: "THREAD", SOUNDBOARD: "SOUNDBOARD" };
export const SearchModes = { NEWEST: "newest", OLDEST: "oldest", MOST_RELEVANT: "most_relevant" };
export const AbortCodes = { UNKNOWN_ACCOUNT: 10001, [10001]: "UNKNOWN_ACCOUNT", UNKNOWN_APPLICATION: 10002, [10002]: "UNKNOWN_APPLICATION", UNKNOWN_CHANNEL: 10003, [10003]: "UNKNOWN_CHANNEL", UNKNOWN_GUILD: 10004, [10004]: "UNKNOWN_GUILD", UNKNOWN_INTEGRATION: 10005, [10005]: "UNKNOWN_INTEGRATION", UNKNOWN_INVITE: 10006, [10006]: "UNKNOWN_INVITE", UNKNOWN_MEMBER: 10007, [10007]: "UNKNOWN_MEMBER", UNKNOWN_MESSAGE: 10008, [10008]: "UNKNOWN_MESSAGE", UNKNOWN_OVERWRITE: 10009, [10009]: "UNKNOWN_OVERWRITE", UNKNOWN_PLATFORM: 10010, [10010]: "UNKNOWN_PLATFORM", UNKNOWN_ROLE: 10011, [10011]: "UNKNOWN_ROLE", UNKNOWN_TOKEN: 10012, [10012]: "UNKNOWN_TOKEN", UNKNOWN_USER: 10013, [10013]: "UNKNOWN_USER", UNKNOWN_EMOJI: 10014, [10014]: "UNKNOWN_EMOJI", UNKNOWN_WEBHOOK: 10015, [10015]: "UNKNOWN_WEBHOOK", UNKNOWN_GIFT_CODE: 10038, [10038]: "UNKNOWN_GIFT_CODE", UNKNOWN_TIDA_CONTENT: 10134, [10134]: "UNKNOWN_TIDA_CONTENT", BOT_DISALLOWED: 20001, [20001]: "BOT_DISALLOWED", BOT_REQUIRED: 20002, [20002]: "BOT_REQUIRED", RPC_PROXY_DISALLOWED: 20003, [20003]: "RPC_PROXY_DISALLOWED", EXPLICIT_CONTENT: 20009, [20009]: "EXPLICIT_CONTENT", ACCOUNT_SCHEDULED_FOR_DELETION: 20011, [20011]: "ACCOUNT_SCHEDULED_FOR_DELETION", USER_NOT_AUTHORIZED_FOR_APPLICATION: 20012, [20012]: "USER_NOT_AUTHORIZED_FOR_APPLICATION", ACCOUNT_DISABLED: 20013, [20013]: "ACCOUNT_DISABLED", SLOWMODE_RATE_LIMITED: 20016, [20016]: "SLOWMODE_RATE_LIMITED", STAFF_REQUIRED: 20017, [20017]: "STAFF_REQUIRED", CHANNEL_FOLLOWING_EDIT_RATE_LIMITED: 20022, [20022]: "CHANNEL_FOLLOWING_EDIT_RATE_LIMITED", UNDER_MINIMUM_AGE: 20024, [20024]: "UNDER_MINIMUM_AGE", QUARANTINED: 20026, [20026]: "QUARANTINED", VANITY_URL_REQUIRED_FOR_PUBLISHED_GUILDS: 20040, [20040]: "VANITY_URL_REQUIRED_FOR_PUBLISHED_GUILDS", VANITY_URL_EMPLOYEE_ONLY_GUILD_DISABLED: 20044, [20044]: "VANITY_URL_EMPLOYEE_ONLY_GUILD_DISABLED", VANITY_URL_REQUIREMENTS_NOT_MET: 20045, [20045]: "VANITY_URL_REQUIREMENTS_NOT_MET", TOO_MANY_USER_GUILDS: 30001, [30001]: "TOO_MANY_USER_GUILDS", TOO_MANY_BOT_GUILDS: 30001, [30001]: "TOO_MANY_BOT_GUILDS", TOO_MANY_FRIENDS: 30002, [30002]: "TOO_MANY_FRIENDS", TOO_MANY_PINS_IN_CHANNEL: 30003, [30003]: "TOO_MANY_PINS_IN_CHANNEL", TOO_MANY_RECIPIENTS: 30004, [30004]: "TOO_MANY_RECIPIENTS", TOO_MANY_GUILD_ROLES: 30005, [30005]: "TOO_MANY_GUILD_ROLES", TOO_MANY_USING_USERNAME: 30006, [30006]: "TOO_MANY_USING_USERNAME", TOO_MANY_WEBHOOKS: 30007, [30007]: "TOO_MANY_WEBHOOKS", TOO_MANY_EMOJI: 30008, [30008]: "TOO_MANY_EMOJI", TOO_MANY_CONNECTIONS: 30009, [30009]: "TOO_MANY_CONNECTIONS", TOO_MANY_REACTIONS: 30010, [30010]: "TOO_MANY_REACTIONS", TOO_MANY_ATTACHMENTS: 30015, [30015]: "TOO_MANY_ATTACHMENTS", TOO_MANY_INVITES: 30016, [30016]: "TOO_MANY_INVITES", TOO_MANY_ANIMATED_EMOJI: 30018, [30018]: "TOO_MANY_ANIMATED_EMOJI", GUILD_AT_CAPACITY: 30019, [30019]: "GUILD_AT_CAPACITY", NOT_ENOUGH_GUILD_MEMBERS: 30029, [30029]: "NOT_ENOUGH_GUILD_MEMBERS", TOTAL_ATTACHMENT_SIZE_TOO_LARGE: 30053, [30053]: "TOTAL_ATTACHMENT_SIZE_TOO_LARGE", TOO_MANY_BLOCKED_USERS: 30059, [30059]: "TOO_MANY_BLOCKED_USERS", TOO_MANY_PUBLISHED_PRODUCT_LISTINGS: 30065, [30065]: "TOO_MANY_PUBLISHED_PRODUCT_LISTINGS", TOO_MANY_SAVED_MESSAGES: 30074, [30074]: "TOO_MANY_SAVED_MESSAGES", TOO_MANY_PENDING_OUTGOING: 30078, [30078]: "TOO_MANY_PENDING_OUTGOING", UNAUTHORIZED: 40001, [40001]: "UNAUTHORIZED", EMAIL_VERIFICATION_REQUIRED: 40002, [40002]: "EMAIL_VERIFICATION_REQUIRED", RATE_LIMIT_DM_OPEN: 40003, [40003]: "RATE_LIMIT_DM_OPEN", SEND_MESSAGE_TEMPORARILY_DISABLED: 40004, [40004]: "SEND_MESSAGE_TEMPORARILY_DISABLED", ENTITY_TOO_LARGE: 40005, [40005]: "ENTITY_TOO_LARGE", ENTITY_EMPTY: 40006, [40006]: "ENTITY_EMPTY", USER_BANNED: 40007, [40007]: "USER_BANNED", CONNECTION_REVOKED: 40012, [40012]: "CONNECTION_REVOKED", DELETE_ACCOUNT_TRANSFER_TEAM_OWNERSHIP: 40028, [40028]: "DELETE_ACCOUNT_TRANSFER_TEAM_OWNERSHIP", NON_MODERATED_TAG_REQUIRED: 40066, [40066]: "NON_MODERATED_TAG_REQUIRED", TAG_REQUIRED: 40067, [40067]: "TAG_REQUIRED", USER_QUARANTINED: 40068, [40068]: "USER_QUARANTINED", INVITES_DISABLED: 40069, [40069]: "INVITES_DISABLED", RESTRICTED_HOURS_ACTIVE: 40117, [40117]: "RESTRICTED_HOURS_ACTIVE", INVALID_ACCESS: 50001, [50001]: "INVALID_ACCESS", INVALID_ACCOUNT_TYPE: 50002, [50002]: "INVALID_ACCOUNT_TYPE", INVALID_ACTION_DM: 50003, [50003]: "INVALID_ACTION_DM", INVALID_EMBED_DISABLED: 50004, [50004]: "INVALID_EMBED_DISABLED", INVALID_MESSAGE_AUTHOR: 50005, [50005]: "INVALID_MESSAGE_AUTHOR", INVALID_MESSAGE_EMPTY: 50006, [50006]: "INVALID_MESSAGE_EMPTY", INVALID_MESSAGE_SEND_USER: 50007, [50007]: "INVALID_MESSAGE_SEND_USER", INVALID_MESSAGE_SEND_NON_TEXT: 50008, [50008]: "INVALID_MESSAGE_SEND_NON_TEXT", INVALID_MESSAGE_VERIFICATION_LEVEL: 50009, [50009]: "INVALID_MESSAGE_VERIFICATION_LEVEL", INVALID_OAUTH_APP_BOT: 50010, [50010]: "INVALID_OAUTH_APP_BOT", INVALID_OAUTH_APP_LIMIT: 50011, [50011]: "INVALID_OAUTH_APP_LIMIT", INVALID_OAUTH_STATE: 50012, [50012]: "INVALID_OAUTH_STATE", INVALID_PERMISSIONS: 50013, [50013]: "INVALID_PERMISSIONS", INVALID_TOKEN: 50014, [50014]: "INVALID_TOKEN", INVALID_NOTE: 50015, [50015]: "INVALID_NOTE", INVALID_BULK_DELETE_COUNT: 50016, [50016]: "INVALID_BULK_DELETE_COUNT", INVALID_MFA_LEVEL: 50017, [50017]: "INVALID_MFA_LEVEL", INVALID_PASSWORD: 50018, [50018]: "INVALID_PASSWORD", INVALID_PIN_MESSAGE_CHANNEL: 50019, [50019]: "INVALID_PIN_MESSAGE_CHANNEL", INVALID_INVITE_CODE: 50020, [50020]: "INVALID_INVITE_CODE", INVALID_ACTION_SYSTEM_MESSAGE: 50021, [50021]: "INVALID_ACTION_SYSTEM_MESSAGE", INVALID_PHONE_NUMBER: 50022, [50022]: "INVALID_PHONE_NUMBER", INVALID_CLIENT_ID: 50023, [50023]: "INVALID_CLIENT_ID", INVALID_CHANNEL_TYPE: 50024, [50024]: "INVALID_CHANNEL_TYPE", INVALID_OAUTH2_ACCESS_TOKEN: 50025, [50025]: "INVALID_OAUTH2_ACCESS_TOKEN", INVALID_OAUTH2_MISSING_SCOPE: 50026, [50026]: "INVALID_OAUTH2_MISSING_SCOPE", INVALID_WEBHOOK_TOKEN: 50027, [50027]: "INVALID_WEBHOOK_TOKEN", INVALID_FORM_BODY: 50035, [50035]: "INVALID_FORM_BODY", INVALID_FILE_ASSET_SIZE: 50045, [50045]: "INVALID_FILE_ASSET_SIZE", INVALID_FILE_ASSET: 50046, [50046]: "INVALID_FILE_ASSET", INVALID_FILE_ASSET_SIZE_RESIZE_ANIMATED: 50138, [50138]: "INVALID_FILE_ASSET_SIZE_RESIZE_ANIMATED", INVALID_GIFT_REDEMPTION_EXHAUSTED: 50050, [50050]: "INVALID_GIFT_REDEMPTION_EXHAUSTED", INVALID_GIFT_REDEMPTION_OWNED: 50051, [50051]: "INVALID_GIFT_REDEMPTION_OWNED", INVALID_GIFT_SELF_REDEMPTION: 50054, [50054]: "INVALID_GIFT_SELF_REDEMPTION", INVALID_THREAD_ARCHIVE_STATE: 50083, [50083]: "INVALID_THREAD_ARCHIVE_STATE", INVALID_GIFT_REDEMPTION_PREVIOUSLY_OWNED: 50092, [50092]: "INVALID_GIFT_REDEMPTION_PREVIOUSLY_OWNED", INVALID_COUNTRY_CODE: 50095, [50095]: "INVALID_COUNTRY_CODE", INVALID_CANNOT_FRIEND_SELF: 50096, [50096]: "INVALID_CANNOT_FRIEND_SELF", INVALID_GIFT_REDEMPTION_FRAUD_REJECTED: 50097, [50097]: "INVALID_GIFT_REDEMPTION_FRAUD_REJECTED", INVALID_SIGNATURE_MISMATCH: 50098, [50098]: "INVALID_SIGNATURE_MISMATCH", BILLING_NON_REFUNDABLE_PAYMENT_SOURCE: 100060, [100060]: "BILLING_NON_REFUNDABLE_PAYMENT_SOURCE", NEW_OWNER_INELIGIBLE_FOR_SERVER_SUBSCRIPTION: 50164, [50164]: "NEW_OWNER_INELIGIBLE_FOR_SERVER_SUBSCRIPTION", INVALID_ACTIVITY_LAUNCH_NO_ACCESS: 50106, [50106]: "INVALID_ACTIVITY_LAUNCH_NO_ACCESS", INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER: 50107, [50107]: "INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER", CLOUD_UPLOAD_NOT_FOUND: 50146, [50146]: "CLOUD_UPLOAD_NOT_FOUND", INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL: 50148, [50148]: "INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL", INVALID_GIFT_REDEMPTION_INCORRECT_USER: 50194, [50194]: "INVALID_GIFT_REDEMPTION_INCORRECT_USER", INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED: 50283, [50283]: "INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED", INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED: 100021, [100021]: "INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED", INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE: 100023, [100023]: "INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE", INVALID_GIFT_REDEMPTION_INVOICE_OPEN: 100024, [100024]: "INVALID_GIFT_REDEMPTION_INVOICE_OPEN", INVALID_USER_SETTINGS_DATA: 50105, [50105]: "INVALID_USER_SETTINGS_DATA", INVALID_ACTIVITY_LAUNCH_AGE_GATED: 50165, [50165]: "INVALID_ACTIVITY_LAUNCH_AGE_GATED", INVALID_SKU_ATTACHMENT_NO_ARCHIVES: 50186, [50186]: "INVALID_SKU_ATTACHMENT_NO_ARCHIVES", INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE: 50209, [50209]: "INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE", ACTIVITY_CONFIGURATION_DOES_NOT_SUPPORT_PLATFORM: 50231, [50231]: "ACTIVITY_CONFIGURATION_DOES_NOT_SUPPORT_PLATFORM", INVALID_MESSAGE_SEND_GAME_FRIEND_DM: 50251, [50251]: "INVALID_MESSAGE_SEND_GAME_FRIEND_DM", INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE: 50252, [50252]: "INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE", INVALID_MESSAGE_SEND_NO_MUTUAL_GUILDS: 50278, [50278]: "INVALID_MESSAGE_SEND_NO_MUTUAL_GUILDS", INVALID_CONNECTION_WHITESPACE_NAME: 50279, [50279]: "INVALID_CONNECTION_WHITESPACE_NAME", CONNECTION_RATE_LIMITED: 50280, [50280]: "CONNECTION_RATE_LIMITED", MFA_ENABLED: 60001, [60001]: "MFA_ENABLED", MFA_DISABLED: 60002, [60002]: "MFA_DISABLED", MFA_REQUIRED: 60003, [60003]: "MFA_REQUIRED", MFA_UNVERIFIED: 60004, [60004]: "MFA_UNVERIFIED", MFA_INVALID_SECRET: 60005, [60005]: "MFA_INVALID_SECRET", MFA_INVALID_TICKET: 60006, [60006]: "MFA_INVALID_TICKET", MFA_INVALID_CODE: 60008, [60008]: "MFA_INVALID_CODE", MFA_INVALID_SESSION: 60009, [60009]: "MFA_INVALID_SESSION", MFA_REQUIRED_FOR_CREATOR_MONETIZATION: 60015, [60015]: "MFA_REQUIRED_FOR_CREATOR_MONETIZATION", PHONE_NUMBER_UNABLE_TO_SEND: 70003, [70003]: "PHONE_NUMBER_UNABLE_TO_SEND", PHONE_CARRIER_TYPE_NOT_MOBILE: 70005, [70005]: "PHONE_CARRIER_TYPE_NOT_MOBILE", PHONE_VERIFICATION_REQUIRED: 70007, [70007]: "PHONE_VERIFICATION_REQUIRED", PHONE_ALREADY_CLAIMED_GENERIC: 70011, [70011]: "PHONE_ALREADY_CLAIMED_GENERIC", RELATIONSHIP_INCOMING_DISABLED: 80000, [80000]: "RELATIONSHIP_INCOMING_DISABLED", RELATIONSHIP_INCOMING_BLOCKED: 80001, [80001]: "RELATIONSHIP_INCOMING_BLOCKED", RELATIONSHIP_INVALUD_USER_BOT: 80002, [80002]: "RELATIONSHIP_INVALUD_USER_BOT", RELATIONSHIP_INVALID_SELF: 80003, [80003]: "RELATIONSHIP_INVALID_SELF", RELATIONSHIP_INVALID_DISCORD_TAG: 80004, [80004]: "RELATIONSHIP_INVALID_DISCORD_TAG", RELATIONSHIP_ALREADY_FRIENDS: 80007, [80007]: "RELATIONSHIP_ALREADY_FRIENDS", RELATIONSHIP_INVALID_NO_CONFIRMATION: 80013, [80013]: "RELATIONSHIP_INVALID_NO_CONFIRMATION", REACTION_BLOCKED: 90001, [90001]: "REACTION_BLOCKED", LISTING_ALREADY_JOINED: 120000, [120000]: "LISTING_ALREADY_JOINED", LISTING_TOO_MANY_MEMBERS: 120001, [120001]: "LISTING_TOO_MANY_MEMBERS", LISTING_JOIN_BLOCKED: 120002, [120002]: "LISTING_JOIN_BLOCKED", REQUEST_TO_JOIN_USER_INELIGIBLE: 150023, [150023]: "REQUEST_TO_JOIN_USER_INELIGIBLE", STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK: 150027, [150027]: "STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK", TOO_MANY_THREAD_MEMBERS: 30033, [30033]: "TOO_MANY_THREAD_MEMBERS", TOO_MANY_THREADS: 160006, [160006]: "TOO_MANY_THREADS", TOO_MANY_ANNOUNCEMENT_THREADS: 160007, [160007]: "TOO_MANY_ANNOUNCEMENT_THREADS", POGGERMODE_TEMPORARILY_DISABLED: 170008, [170008]: "POGGERMODE_TEMPORARILY_DISABLED", AUTOMOD_MESSAGE_BLOCKED: 200000, [200000]: "AUTOMOD_MESSAGE_BLOCKED", AUTOMOD_TITLE_BLOCKED: 200001, [200001]: "AUTOMOD_TITLE_BLOCKED", AUTOMOD_INVALID_RUST_SERVICE_RESPONSE: 200002, [200002]: "AUTOMOD_INVALID_RUST_SERVICE_RESPONSE", MONETIZATION_TERMS_NOT_ACCEPTED: 210003, [210003]: "MONETIZATION_TERMS_NOT_ACCEPTED", TWO_FA_NOT_ENABLED: 210011, [210011]: "TWO_FA_NOT_ENABLED", GUILD_PRODUCT_LISTING_CANNOT_PUBLISH_WITHOUT_BENEFIT: 210021, [210021]: "GUILD_PRODUCT_LISTING_CANNOT_PUBLISH_WITHOUT_BENEFIT", CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED: 210026, [210026]: "CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED", CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED: 210027, [210027]: "CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED", HARMFUL_LINK_MESSAGE_BLOCKED: 240000, [240000]: "HARMFUL_LINK_MESSAGE_BLOCKED", HARMFUL_URL_BLOCKED: 240001, [240001]: "HARMFUL_URL_BLOCKED", USER_LIMITED_ACCESS_DEFAULT: 340000, [340000]: "USER_LIMITED_ACCESS_DEFAULT", USER_GUILD_UPLOAD_ATTACHMENT_LIMITED_ACCESS: 340004, [340004]: "USER_GUILD_UPLOAD_ATTACHMENT_LIMITED_ACCESS", USER_DM_UPLOAD_ATTACHMENT_LIMITED_ACCESS: 340005, [340005]: "USER_DM_UPLOAD_ATTACHMENT_LIMITED_ACCESS", USER_GDM_UPLOAD_ATTACHMENT_LIMITED_ACCESS: 340006, [340006]: "USER_GDM_UPLOAD_ATTACHMENT_LIMITED_ACCESS", USER_FRIEND_REQUEST_LIMITED_ACCESS: 340007, [340007]: "USER_FRIEND_REQUEST_LIMITED_ACCESS", USER_GUILD_UPLOAD_ATTACHMENT_LIMITED_ACCESS_V2: 340014, [340014]: "USER_GUILD_UPLOAD_ATTACHMENT_LIMITED_ACCESS_V2", USER_LIMITED_ACCESS_MAX: 349999, [349999]: "USER_LIMITED_ACCESS_MAX", GUILD_LIMITED_ACCESS_DEFAULT: 400000, [400000]: "GUILD_LIMITED_ACCESS_DEFAULT", GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS: 400001, [400001]: "GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS", GUILD_JOIN_INVITE_LIMITED_ACCESS: 400002, [400002]: "GUILD_JOIN_INVITE_LIMITED_ACCESS", GUILD_FILE_UPLOAD_RESOURCE_LIMITED_ACCESS: 400003, [400003]: "GUILD_FILE_UPLOAD_RESOURCE_LIMITED_ACCESS", GUILD_GO_LIVE_RATE_LIMITED_ACCESS: 400004, [400004]: "GUILD_GO_LIVE_RATE_LIMITED_ACCESS", GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED: 400005, [400005]: "GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED", GUILD_LIMITED_ACCESS_MAX: 409999, [409999]: "GUILD_LIMITED_ACCESS_MAX", PARTNER_PROMOTIONS_USER_CLAIMED_PROMOTION: 420002, [420002]: "PARTNER_PROMOTIONS_USER_CLAIMED_PROMOTION", PARTNER_PROMOTIONS_MAX_CLAIMS: 420003, [420003]: "PARTNER_PROMOTIONS_MAX_CLAIMS", PARTNER_PROMOTIONS_GIFT_CLAIMED: 420004, [420004]: "PARTNER_PROMOTIONS_GIFT_CLAIMED", PARTNER_PROMOTIONS_PREVIOUS_PURCHASE_ERROR: 420005, [420005]: "PARTNER_PROMOTIONS_PREVIOUS_PURCHASE_ERROR", PARTNER_PROMOTIONS_NEW_SUBSCRIPTION_REQUIRED: 420006, [420006]: "PARTNER_PROMOTIONS_NEW_SUBSCRIPTION_REQUIRED", PARTNER_PROMOTIONS_UNKNOWN_GIFT: 420007, [420007]: "PARTNER_PROMOTIONS_UNKNOWN_GIFT", DSA_RSL_REPORT_NOT_FOUND: 521001, [521001]: "DSA_RSL_REPORT_NOT_FOUND", DSA_RSL_ALREADY_REQUESTED: 521002, [521002]: "DSA_RSL_ALREADY_REQUESTED", DSA_RSL_LIMITED_TIME: 521003, [521003]: "DSA_RSL_LIMITED_TIME", DSA_RSL_REPORT_INELIGIBLE: 521004, [521004]: "DSA_RSL_REPORT_INELIGIBLE", DSA_APPEAL_REQUEST_DEFLECTION: 522001, [522001]: "DSA_APPEAL_REQUEST_DEFLECTION", CONTENT_INVENTORY_ENTRY_INVALID_PERMISSION: 560006, [560006]: "CONTENT_INVENTORY_ENTRY_INVALID_PERMISSION", GIFT_CARD_ALREADY_REDEEMED: 590009, [590009]: "GIFT_CARD_ALREADY_REDEEMED", ACCOUNT_REVERT_INVALID_TOKEN: 620000, [620000]: "ACCOUNT_REVERT_INVALID_TOKEN", ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN: 620001, [620001]: "ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN", ACCOUNT_REVERT_ACCOUNT_NOT_FOUND: 620002, [620002]: "ACCOUNT_REVERT_ACCOUNT_NOT_FOUND", USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED: 700000, [700000]: "USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED" };
export const AnalyticsLocations = { GUILD_CREATE_INVITE_SUGGESTION: "Guild Create Invite Suggestion", ADD_FRIENDS_TO_DM: "Add Friends to DM", CAROUSEL_PROMOTION_UNIT: "Carousel Promotion Unit", MESSAGE_EMBED: "Message Embed", GAME_POPOUT: "Game Popout", GAME_MODAL: "Game Modal", QUICK_LAUNCHER: "Quick Launcher", TRAY_CONTEXT_MENU: "Tray Context Menu", QUICK_SWITCHER: "Quick Switcher", APPLICATION_LIBRARY: "Application Library", APPLICATION_LIBRARY_UPDATES: "Application Library Updates", APPLICATION_STORE: "Application Store", APPLICATION_STORE_HEADER: "Application Store Header", APPLICATION_STORE_TILE: "Application Store Tile", APPLICATION_STORE_HERO: "Application Store Hero", APPLICATION_STORE_PAYMENT_MODAL: "Application Store Purchase Modal", APPLICATION_STORE_LISTING_BACK_BUTTON: "Application Store Listing Back Button", APPLICATION_STORE_LISTING_DETAILS: "Application Store Listing Details", APPLICATION_STORE_RELATED_CONTENT: "Application Store Related Content", APPLICATION_STORE_PREMIUM_CAROUSEL: "Application Store Premium Carousel", APPLICATION_STORE_WARNING: "Application Store Warning", APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL: "Application Context Menu Toggle Install", APPLICATION_CONTEXT_MENU_PLAY: "Application Context Menu Play", APPLICATION_TEST_MODE_NOTICE: "Application Test Mode Notice", HOME_BUTTON: "Home Button", HOME_NAVIGATION: "Home Navigation", IN_APPLICATION_PURCHASE_OVERLAY: "In-Application Purchase - Overlay", IN_APPLICATION_PURCHASE_FALLBACK: "In-Application Purchase - App", URI_SCHEME: "URI Scheme", CREATE_JOIN_GUILD_MODAL: "Create or Join Guild Modal", LOCKED_OVERLAY: "Locked Overlay", UNLOCKED_OVERLAY: "Unlocked Overlay", OVERLAY_NUDGE: "Overlay Nudge", PROMOTION_CARD: "Promotion Card", SHARE_NEWS_MODAL: "Share News Modal", GO_LIVE_MODAL: "Go Live Modal", ACTIVITY_PANEL: "Activity Panel", VOICE_PANEL: "Voice Panel", STREAM: "Stream", INTENT_DISCOVERY: "Intent Discovery", REGISTRATION: "Registration", LARGE_SERVER_INTENT_DISCOVERY: "Large Game Server Intent Discovery", USER_ACTIVITY_ACTIONS: "User Activity Actions", ACTIVITY_RPC: "Activity RPC", EXTERNAL_INVITE_LINK_MODAL: "External Invite Link Modal", STANDALONE_MANAGE_SUBSCRIPTIONS: "Standalone Manage Subscriptions", UNCANCEL_WINBACK_MODAL: "Premium Uncancel Winback Modal", HUB_PROGRESS: "Hub Progress", CHANNEL_CALL: "Channel Call", ROLE_SUBSCRIPTIONS_TAB: "Role Subscriptions Tab", ROLE_SUBSCRIPTION_GATED_CHANNEL: "Role Subscription Gated Channel", MANAGE_ACCOUNTS_MODAL: "Manage Accounts Modal", CONTEXT_MENU: "Context Menu", STREAM_CONTEXT_MENU: "Stream Context Menu", GUILD_CHANNEL_LIST: "Guild Channel List", ACTIVITY_SHELF: "Activity Shelf", USER_SETTINGS: "User Settings", CONNECTIONS_EMPTY_STATE: "Connections User Settings Empty State", DEEP_LINK: "Deep Link", RELINK_UPSELL: "Relink Upsell", NITRO_BASIC_UPSELL: "Nitro Basic Upsell", INBOUND_PARTNER_PROMOTION_REDEMPTION_MODAL: "Inbound Partner Promotion Redemption Modal", NOTIFICATION_CENTER: "Notification Center", GUILD_INTEGRATION_SETTINGS: "Guild Integration Settings", APP_DIRECTORY_PROFILE: "App Directory Profile", INTERACTION_RESPONSE: "Interaction Response", PARTNER_PROMOTIONS_CLAIM_MODAL: "Partner Promotions Claim Modal", APP_STOREFRONT: "app storefront", APP_SUBSCRIPTIONS_MANAGEMENT: "app subscriptions management", CHECKOUT_RECOVERY_NAGBAR: "Checkout Recovery Nagbar", SEASONAL_GIFTING_REMINDER_NAGBAR: "seasonal gifting reminder nagbar", E2EE_USER_VERIFY_MODAL: "E2EE User Verify Modal", FRIEND_ANNIVERSARIES_CHAT: "Friend Anniversaries Chat", FRIEND_ANNIVERSARIES_ACTION_BUTTON: "Friend Anniversaries Action Button", FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK: "Friend Anniversaries Action Button Coachmark", FRIENDS_POPOUT: "Friends Popout", ROBLOX_CONNECTION_ACTION_SHEET: "Roblox Connection Action Sheet", GIFT_SELECTION_MODAL: "Gift Selection Modal" };
export const AnalyticsGameOpenTypes = { JOIN: "join", ASK_TO_JOIN: "ask to join", LAUNCH: "launch", SPECTATE: "spectate", PLAY: "play" };
export const AnalyticsUserStatusTypes = { ONLINE_DESKTOP: "online-desktop", ONLINE_MOBILE: "online-mobile-only" };
export const AnalyticsPages = obj2;
export const HELP_CENTER_CTA_ANALYTICS_NAME = "help_center_cta";
export const AnalyticsSections = obj3;
export const AnalyticsObjects = obj4;
export const AnalyticsObjectTypes = { GIFT: "gift", BUY: "buy", BOX_ART: "box_art", PERK: "perk", NONE: "none", TIER_1: "tier_1", TIER_2: "tier_2", TIER_3: "tier_3", TRIAL: "trial", FPS: "fps", RESOLUTION: "resolution", ACTIVITY: "activity", REACTION: "reaction", CANT_ADD_OR_REMOVE: "cant_add_or_remove", REACTION_OVERFLOW: "reaction_overflow", NITRO_STANDARD: "nitro_standard", NITRO_BASIC: "nitro_basic", NITRO_SKU_SELECTION: "nitro_sku_selection", ACK_AUTOMATIC: "ack_automatic", ACK_SEMI_AUTOMATIC: "ack_semi_automatic", ACK_MANUAL: "ack_manual" };
export const UpsellActionTypes = { PRIMARY: "primary", SECONDARY: "secondary", DISMISS: "dismiss" };
export const DIRECT_ANALYTICS_LOCATION = obj5;
export const UserSettingsSections = frozen5;
export const JoinGuildSources = { APPLICATION_STORE: "Application Store Verified Guild Invite - Lurker", CHAT_INPUT_BLOCKER: "Chat Input Blocker - Lurker Mode", GUILD_PROFILE_LURKER: "Guild Profile - Lurker Mode", CHANNEL_LIST_STICKY_HEADER_LURKER: "Channel List Sticky Header - Lurker Mode", NOTICE_BAR: "Notice - Lurker Mode", MOBILE_GUILD_DISCOVERY: "iOS Guild Discovery - Lurker", DIRECTORY_ENTRY: "Directory Channel Entry", DIRECTORY_EVENTS: "Directory Channel Events", POLL_ALERT: "Poll Alert", ICYMI: "ICYMI", GUILD_EVENT_EMBED: "Guild Event Embed", GAME_COMMUNITY_UPSELL: "Game Community Upsell", ACTIVITY_PANEL_GAME_COMMUNITY_UPSELL: "Activity Panel Game Community Upsell", GAME_PROFILE_ANNOUNCEMENTS: "Game Profile Announcements", DISCOVERABLE_GUILD_INVITE_LURKER: "Discoverable Guild Invite - Lurker Mode", LEAVE_PROMPT_LURKER: "Leave Prompt - Lurker Mode" };
export const LoginSuccessfulSources = { QR_CODE: "QR Code Login", MOBILE_WEB_HANDOFF: "Mobile Web Handoff", DEFAULT: "The default username password Login", MFA: "MFA Login", PASSWORDLESS_CONDITIONAL_UI: "Passwordless Conditional UI" };
export const InstantInviteSources = { INVITE_NOTICE: "Invite Notice", SETTINGS_INVITE: "Settings Invite", CONTEXT_MENU: "Context Menu", WELCOME_MESSAGE: "Welcome Message", GUILD_CHANNELS: "Guild Channels", GUILD_HEADER: "Guild Header", GUILD_HEADER_INVITE_BUTTON: "Guild Header Invite Button", GUILD_EVENTS: "Guild Events", GUILD_CONTEXT_MENU: "Guild Context Menu", GUILD_CREATE: "Guild Create", GUILD_SCHEDULED_EVENT: "Guild Scheduled Event", STREAM_INVITE: "Stream Invite", GUILD_PROGRESS: "Guild Progress", CHANNEL_WELCOME: "Channel Welcome CTA", CHANNEL_CALL: "Channel Call", ACTIVITY_INVITE: "Activity Invite", INVITE_SYSTEM_MESSAGE: "Invite System Message", HUB_DIRECTORY: "Hub Directory Channel", HUB_SIDEBAR: "Hub Sidebar", HUB_PROGRESS: "Hub Progress", HUB_EMPTY_STATE: "Hub Empty State", STAGE_CHANNEL: "Stage Channel", GROUP_DM: "Group DM Invite Create", GUILD_HOME: "Guild Home", ACTIVITY_ENTRY_POINT_TILE: "Activity Entry Point Tile", ADD_FRIENDS_MODAL: "Add Friends Modal", ADD_FRIENDS_WIDGET: "Add Friends Widget", ADD_FRIENDS_MODAL_SEARCH: "Add Friends Modal Search", PROFILE_CTA: "Profile CTA", CHAT_SIDEBAR: "Chat Sidebar", VOICE_CHANNEL: "Voice Channel", STREAM: "Stream", SERVER_PROFILE: "Server Profile", VOICE_INVITE_SUGGESTIONS: "Voice Invite Suggestions", VOICE_CHANNEL_UI_INVITE_BUTTON: "Voice Channel UI Invite Button", VOICE_CHANNEL_CALL_MENU_ITEM: "Voice Channel Call Menu Item" };
export const ChannelNoticeCtaSources = { GUILD_BANNER_NOTICE: "Guild Banner Notice", GUILD_MFA_WARNING: "Guild MFA Warning", GUILD_SUBSCRIPTION_NOTICE: "Guild Subscription Notice", QUICK_SWITCHER_NOTICE: "Quick Switcher Notice", INVITE_NOTICE: "Invite Notice", GRACE_PERIOD_NOTICE: "Grace Period Notice", ENABLE_PUBLIC_GUILD_UPSELL_NOTICE: "Enable Public Guild Upsell Notice", HUB_LINK_NOTICE: "Hub Link Notice", CHANNEL_OPT_IN: "Channel Opt-In Customize", ROLE_SUBSCRIPTION_MWEB_PURCHASE_NOTICE: "Role Subscription MWeb Purchase Notice", GUILD_ONBOARDING_UPSELL_NOTICE: "Guild Onboarding Upsell Notice", CLIPS_EDUCATION: "Clips Education Channel Notice", LINKED_ROLES_ADMIN_NUX: "Linked Roles Admin Nux Channel Notice", SUMMARIES_NOTICE: "Summaries Channel Notice", SUMMARIES_ENABLED_NOTICE: "Summaries Enabled Notice", CLAN_ADMIN_UPSELL: "Clan Admin Upsell" };
export const LoggingInviteTypes = { APPLICATION: "Application", SPOTIFY: "Spotify", STREAM: "Stream", SERVER_INVITE: "Server Invite", GDM_INVITE: "GDM Invite", FRIEND_INVITE: "Friend Invite" };
export const SendTypes = { DIRECT_MESSAGE: "Direct Message", SMS: "SMS", EMAIL: "Email" };
export const InviteOptionsType = { SHARE: "Share", COPY: "Copy", CONTACTS: "Contacts", GMAIL: "Gmail", SMS: "SMS", EMAIL: "Email", LINE: "Line", WHATSAPP: "WhatsApp", TWITTER: "Twitter", MESSENGER: "Messenger", TELEGRAM: "Telegram" };
export const GuildNSFWContentLevel = { DEFAULT: 0, [0]: "DEFAULT", EXPLICIT: 1, [1]: "EXPLICIT", SAFE: 2, [2]: "SAFE", AGE_RESTRICTED: 3, [3]: "AGE_RESTRICTED" };
export const ComponentActions = { IFRAME_MOUNT: "IFRAME_MOUNT", IFRAME_UNMOUNT: "IFRAME_UNMOUNT", REMEASURE_TARGET: "REMEASURE_TARGET", MODAL_SUBMIT: "MODAL_SUBMIT", MODAL_CLOSE: "MODAL_CLOSE", TEXTAREA_FOCUS: "TEXTAREA_FOCUS", TEXTAREA_BLUR: "TEXTAREA_BLUR", SCROLLTO_PRESENT: "SCROLLTO_PRESENT", SCROLLTO_CHANNEL: "SCROLLTO_CHANNEL", TOGGLE_CHANNEL_PINS: "TOGGLE_CHANNEL_PINS", TOGGLE_INBOX: "TOGGLE_INBOX", MARK_TOP_INBOX_CHANNEL_READ: "MARK_TOP_INBOX_CHANNEL_READ", TOGGLE_EMOJI_POPOUT: "TOGGLE_EMOJI_POPOUT", TOGGLE_DM_CREATE: "TOGGLE_DM_CREATE", INSERT_TEXT: "INSERT_TEXT", SCROLL_PAGE_DOWN: "SCROLL_PAGE_DOWN", SCROLL_PAGE_UP: "SCROLL_PAGE_UP", FOCUS_FRIEND_SEARCH: "FOCUS_FRIEND_SEARCH", BLUR_INPUT: "BLUR_INPUT", POPOUT_CLOSE: "POPOUT_CLOSE", POPOUT_CLOSE_AFTER_MODALS: "POPOUT_CLOSE_AFTER_MODALS", POPOUT_SHOW: "POPOUT_SHOW", POPOUT_HIDE: "POPOUT_HIDE", UPLOAD_FILE: "UPLOAD_FILE", CALL_ACCEPT: "CALL_ACCEPT", CALL_DECLINE: "CALL_DECLINE", CALL_START: "CALL_START", DDR_ARROW_DOWN: "DDR_ARROW_DOWN", DDR_ARROW_UP: "DDR_ARROW_UP", SHAKE_APP: "SHAKE_APP", EMPHASIZE_NOTICE: "EMPHASIZE_NOTICE", EMPHASIZE_SLOWMODE_COOLDOWN: "EMPHASIZE_SLOWMODE_COOLDOWN", SET_SEARCH_QUERY: "SET_SEARCH_QUERY", FOCUS_SEARCH: "FOCUS_SEARCH", PERFORM_SEARCH: "PERFORM_SEARCH", QUICKSWITCHER_RESULT_FOCUS: "QUICKSWITCHER_RESULT_FOCUS", LAYER_POP_ESCAPE_KEY: "LAYER_POP_ESCAPE_KEY", LAYER_POP_START: "LAYER_POP_START", LAYER_POP_COMPLETE: "LAYER_POP_COMPLETE", CONTEXT_MENU_CLOSE: "CONTEXT_MENU_CLOSE", WAVE_EMPHASIZE: "WAVE_EMPHASIZE", CAROUSEL_NEXT: "CAROUSEL_NEXT", CAROUSEL_PREV: "CAROUSEL_PREV", MODAL_CAROUSEL_NEXT: "MODAL_CAROUSEL_NEXT", MODAL_CAROUSEL_PREV: "MODAL_CAROUSEL_PREV", TOGGLE_GIF_PICKER: "TOGGLE_GIF_PICKER", CLOSE_GIF_PICKER: "CLOSE_GIF_PICKER", TOGGLE_STICKER_PICKER: "TOGGLE_STICKER_PICKER", TOGGLE_SOUNDBOARD: "TOGGLE_SOUNDBOARD", FAVORITE_GIF: "FAVORITE_GIF", GLOBAL_CLIPBOARD_PASTE: "GLOBAL_CLIPBOARD_PASTE", SEARCH_RESULTS_CLOSE: "SEARCH_RESULTS_CLOSE", OPEN_EMBEDDED_ACTIVITY: "OPEN_EMBEDDED_ACTIVITY", RELEASE_ACTIVITY_WEB_VIEW: "RELEASE_ACTIVITY_WEB_VIEW", FOCUS_MESSAGES: "FOCUS_MESSAGES", FOCUS_CHANNEL_TEXT_AREA: "FOCUS_CHANNEL_TEXT_AREA", FOCUS_ATTACHMENT_AREA: "FOCUS_ATTACHMENT_AREA", FOCUS_COMPOSER_TITLE: "FOCUS_COMPOSER_TITLE", CHANNEL_TEXT_AREA_FOCUSED: "CHANNEL_TEXT_AREA_FOCUSED", PREPEND_TEXT: "PREPEND_TEXT", OPEN_EXPRESSION_PICKER: "OPEN_EXPRESSION_PICKER", OPEN_THREAD_NOTIFICATION_SETTINGS: "OPEN_THREAD_NOTIFICATION_SETTINGS", CLEAR_TEXT: "CLEAR_TEXT", SHOW_OAUTH2_MODAL: "SHOW_OAUTH2_MODAL", LAUNCH_PAD_SHOW: "LAUNCH_PAD_SHOW", LAUNCH_PAD_HIDE: "LAUNCH_PAD_HIDE", FOCUS_CHAT_BUTTON: "FOCUS_CHAT_BUTTON", SHOW_TEXT_IN_VOICE_POPOUT_COMING_SOON_TIP: "SHOW_TEXT_IN_VOICE_POPOUT_COMING_SOON_TIP", LAST_NITRO_HOST_LEFT: "LAST_NITRO_HOST_LEFT", SELECT_ACTIVITY: "SELECT_ACTIVITY", TOGGLE_CALL_CONTROL_DRAWER: "TOGGLE_CALL_CONTROL_DRAWER", TOGGLE_GUILD_FEED_FEATURED_ITEMS: "TOGGLE_GUILD_FEED_FEATURED_ITEMS", PREMIUM_SUBSCRIPTION_CREATED: "PREMIUM_SUBSCRIPTION_CREATED", PREMIUM_PAYMENT_MODAL_CLOSED: "PREMIUM_PAYMENT_MODAL_CLOSED", MEDIA_MODAL_CLOSE: "MEDIA_MODAL_CLOSE", CONVERSATIONS_FOCUS_MODE_CLOSE: "CONVERSATIONS_FOCUS_MODE_CLOSE", VOICE_MESSAGE_PLAYBACK_STARTED: "VOICE_MESSAGE_PLAYBACK_STARTED", VOICE_MESSAGE_BUTTON_PRESSED: "VOICE_MESSAGE_RECORDING_PRESSED", VIDEO_EMBED_PLAYBACK_STARTED: "VIDEO_EMBED_PLAYBACK_STARTED", VOICE_PANEL_OPEN: "VOICE_PANEL_OPEN", VOICE_PANEL_CLOSE: "VOICE_PANEL_CLOSE", VOICE_PANEL_TIV_CLOSE: "VOICE_PANEL_TIV_CLOSE", VOICE_PANEL_OPEN_CHAT_TAB: "VOICE_PANEL_OPEN_CHAT_TAB", VOICE_PANEL_PIP_CONTENT_READY: "VOICE_PANEL_PIP_CONTENT_READY", MANUAL_IFRAME_RESIZING: "MANUAL_IFRAME_RESIZING", NAVIGATOR_READY: "NAVIGATOR_READY", CONNECTIONS_CALLBACK_ERROR: "CONNECTIONS_CALLBACK_ERROR", OPEN_APP_LAUNCHER: "OPEN_APP_LAUNCHER", BOTTOM_CHANNEL_SCREEN_DRAG_START: "BOTTOM_CHANNEL_SCREEN_DRAG_START", OVERLAY_V3_SHOW_WIDGETS: "OVERLAY_V3_SHOW_WIDGETS", INBOX_MARK_ALL_UNREADS_READ: "INBOX_MARK_ALL_UNREADS_READ", SHOW_CHANNEL_DETAILS: "SHOW_CHANNEL_DETAILS", HIDE_CHANNEL_DETAILS: "HIDE_CHANNEL_DETAILS", CHANNEL_DETAILS_HIDDEN: "CHANNEL_DETAILS_HIDDEN", CHANNEL_DETAILS_SHOWN: "CHANNEL_DETAILS_SHOWN", MEDIA_KEYBOARD_GIFT_SELECTED: "MEDIA_KEYBOARD_GIFT_SELECTED", SHOW_ACCOUNT_PROFILE_POPOUT: "SHOW_ACCOUNT_PROFILE_POPOUT", QUEST_GAME_LINK_OPENED: "QUEST_GAME_LINK_OPENED", QUEST_APP_STORE_OVERLAY_FINISHED: "QUEST_APP_STORE_OVERLAY_FINISHED", SHAKE_PROFILE_MODAL: "SHAKE_PROFILE_MODAL", SHAKE_SETTINGS_MODAL: "SHAKE_SETTINGS_MODAL", WOW_MOMENT_CONFIRMATION_MODAL_CLOSED: "WOW_MOMENT_CONFIRMATION_MODAL_CLOSED", PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED: "PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED" };
export const ComponentActionsKeyed = { TOGGLE_REACTION_POPOUT: "TOGGLE_REACTION_POPOUT", ANIMATE_CHAT_AVATAR: "ANIMATE_CHAT_AVATAR", VOICE_MESSAGE_SEND: "VOICE_MESSAGE_SEND", CLIP_SEEK_VIDEO: "CLIP_SEEK_VIDEO" };
export const NAVIGATION_THROTTLE = 50;
export const PlatformTypes = obj7;
export const ActivityGamePlatforms = { DESKTOP: "desktop", XBOX: "xbox", SAMSUNG: "samsung", IOS: "ios", ANDROID: "android", EMBEDDED: "embedded", PS4: "ps4", PS5: "ps5", META_QUEST: "meta_quest" };
export const Platforms = { IOS: "iOS", ANDROID: "Android" };
export const ActivityPartyPrivacy = { PRIVATE: 0, [0]: "PRIVATE", PUBLIC: 1, [1]: "PUBLIC" };
export const DiscordConnectDeeplinks = frozen6;
export const FRIEND_SYNC_PLATFORM_TYPES = set1;
export const ACTIVITY_PLATFORM_TYPES = set2;
export const DownloadLinks = frozen7;
export const DEFAULT_ROLE_COLOR = 10070709;
export const DEFAULT_ROLE_COLOR_HEX = int2hexResult;
export const ROLE_COLORS = [1752220, 3066993, 3447003, 10181046, 15277667, 15844367, 15105570, 15158332, 9807270, 6323595, 1146986, 2067276, 2123412, 7419530, 11342935, 12745742, 11027200, 10038562, 9936031, 5533306];
export const PermissionOverrideType = { ROLE: "ROLE", MEMBER: "MEMBER" };
export const NativeFeatures = { VOICE_LEGACY_SUBSYSTEM: "voice_legacy_subsystem", DEBUG_LOGGING: "debug_logging", POPOUT_WINDOWS: "popout_windows", ELEVATED_HOOK: "elevated_hook", CREATE_HOST_ON_ATTACH: "create_host_on_attach", USER_DATA_CACHE: "user_data_cache", WEBAUTHN: "webauthn" };
export const SearchTokenTypes = { FILTER_FROM: "FILTER_FROM", FILTER_MENTIONS: "FILTER_MENTIONS", ANSWER_USERNAME_FROM: "ANSWER_USERNAME_FROM", ANSWER_USERNAME_MENTIONS: "ANSWER_USERNAME_MENTIONS", FILTER_HAS: "FILTER_HAS", ANSWER_HAS: "ANSWER_HAS", FILTER_LINK_FROM: "FILTER_LINK_FROM", ANSWER_LINK_FROM: "ANSWER_LINK_FROM", FILTER_FILE_TYPE: "FILTER_FILE_TYPE", ANSWER_FILE_TYPE: "ANSWER_FILE_TYPE", FILTER_FILE_NAME: "FILTER_FILE_NAME", ANSWER_FILE_NAME: "ANSWER_FILE_NAME", FILTER_BEFORE: "FILTER_BEFORE", ANSWER_BEFORE: "ANSWER_BEFORE", FILTER_AFTER: "FILTER_AFTER", ANSWER_AFTER: "ANSWER_AFTER", FILTER_ON: "FILTER_ON", ANSWER_ON: "ANSWER_ON", FILTER_IN: "FILTER_IN", ANSWER_IN: "ANSWER_IN", FILTER_PINNED: "FILTER_PINNED", ANSWER_PINNED: "ANSWER_PINNED", FILTER_AUTHOR_TYPE: "FILTER_AUTHOR_TYPE", ANSWER_AUTHOR_TYPE: "ANSWER_AUTHOR_TYPE" };
export const SearchAutocompleteGroups = { HISTORY: "HISTORY", DATES: "DATES" };
export const SearchPopoutModes = { EMPTY: "EMPTY", FILTER: "FILTER", FILTER_ALL: "FILTER_ALL" };
export const SEARCH_DATE_FORMAT = "YYYY-MM-DD";
export const NEW_GROUP_DM_POPOUT_ID = "PrivateChannelRecipientsInvitePopout";
export const BoostedGuildTiers = obj9;
export const AppliedGuildBoostsRequiredForBoostedGuildTier = frozen8;
export const GUILD_BOOST_APPLY_COOLDOWN_DAYS = 7;
export const PREMIUM_TYPE_NONE = 0;
export const PriceTypes = { BASE: 0, [0]: "BASE", PREMIUM_TIER_0: 1, [1]: "PREMIUM_TIER_0", PREMIUM_TIER_1: 2, [2]: "PREMIUM_TIER_1", PREMIUM_TIER_2: 3, [3]: "PREMIUM_TIER_2", MOBILE: 4, [4]: "MOBILE", MOBILE_PREMIUM_TIER_2: 5, [5]: "MOBILE_PREMIUM_TIER_2", GIFT: 6, [6]: "GIFT" };
export const PriceSetAssignmentPurchaseTypes = { DEFAULT: 0, [0]: "DEFAULT", GIFT: 1, [1]: "GIFT", SALE: 2, [2]: "SALE", PREMIUM_TIER_1: 3, [3]: "PREMIUM_TIER_1", PREMIUM_TIER_2: 4, [4]: "PREMIUM_TIER_2", MOBILE: 5, [5]: "MOBILE", PREMIUM_TIER_0: 6, [6]: "PREMIUM_TIER_0", MOBILE_PREMIUM_TIER_2: 7, [7]: "MOBILE_PREMIUM_TIER_2" };
export const StripeElementsOptions = frozen9;
export const SubscriptionStatusTypes = obj10;
export const SubscriptionStatusTypesSets = obj11;
export const InvoiceStatusTypes = { OPEN: 1, [1]: "OPEN", PAID: 2, [2]: "PAID", VOID: 3, [3]: "VOID", UNCOLLECTIBLE: 4, [4]: "UNCOLLECTIBLE" };
export const PaymentModalPriceChangedError = "Price changed";
export const AutoCompleteResultTypes = { USER: "USER", GLOBAL: "GLOBAL", ROLE: "ROLE", CHANNEL: "CHANNEL", EMOJI: "EMOJI", EMOJI_PREMIUM_UPSELL: "EMOJI_PREMIUM_UPSELL", SLASH: "SLASH", CHOICE: "CHOICE", STICKER: "STICKER", CHOICE_LOADING: "CHOICE_LOADING", LABEL: "LABEL", GAME_MENTION: "GAME_MENTION" };
export const Accessibility = frozen10;
export const ChatInputComponentViewedTypes = { GIF: "GIF", GIF_SEARCH: "GIF search", EMOJI: "emoji", EMOJI_SEARCH: "emoji search", CAMERA: "camera", NATIVE_MEDIA_PICKER: "native media picker", NITRO_GIFTING: "nitro gifting", SLASH_COMMAND: "slash command", START_THREAD: "start thread", ATTACH_FILE: "attach file", MEDIA_PICKER: "media picker", STICKER: "sticker", STICKER_SEARCH: "sticker search", ADD_BUTTON: "add button", APPS_BUTTON: "apps button", APPS: "apps", POLLS: "polls" };
export const AnalyticsOverlayLocations = { OVERLAY_UNLOCKED: "overlay_unlocked", OVERLAY_UNLOCKED_PINNED: "overlay_unlocked_pinned", OVERLAY_LOCKED_ACTIVATED: "overlay_locked_activated" };
export const AnalyticEvents = { APP_OPENED: "app_opened", APP_CRASHED: "app_crashed", APP_BACKGROUND: "app_background", APP_NATIVE_CRASH: "app_native_crash", APP_UI_VIEWED: "app_ui_viewed", APP_UI_VIEWED2: "app_ui_viewed2", TOUCH_EVENT: "touch_event", HTTP_REQUEST: "http_request", WEBSOCKET_MESSAGE_RECEIVED: "websocket_message_received", APP_WEB_PERF_STARTUP_METRICS: "app_web_perf_startup_metrics", APP_NETWORK_USAGE: "app_network_usage", BACKGROUND_SYNC_COMPLETED: "background_sync_completed", APP_LAUNCH_COMPLETED: "app_launch_completed", APP_LANDING_VIEWED: "app_landing_viewed", RPC_OPEN_EXTERNAL_LINK_CALLED: "rpc_open_external_link_called", RPC_QUEST_START_TIMER_CALLED: "rpc_quest_start_timer_called", APP_MODULES_UPDATED: "app_modules_updated", APP_FIRST_LAUNCHED: "app_first_launched", APP_FIRST_LOGIN: "app_first_login", APP_USER_DEAUTHENTICATED: "app_user_deauthenticated", REGISTER_VIEWED: "register_viewed", REGISTER_TRANSITION: "register_transition", LOGIN_VIEWED: "login_viewed", READY_PAYLOAD_RECEIVED: "ready_payload_received", CONNECTION_RESUMED: "connection_resumed", GATEWAY_CONNECTED: "gateway_connected", FORCED_UPDATE_PASSWORD_SUCCEEDED: "force_update_password_succeeded", MOBILE_OTA_CHECK_ATTEMPT: "mobile_ota_check_attempt", MOBILE_OTA_ASSET_DOWNLOAD_ATTEMPT: "mobile_ota_asset_download_attempt", APP_DISK_USAGE_UPDATED: "app_disk_usage_updated", DEVICE_EVENT: "device_event", REACT_SOFT_EXCEPTION: "react_soft_exception", NETWORK_CAPABILITIES_CHANGED: "network_capabilities_changed", APP_LIFECYCLE: "app_lifecycle", UI_LIFECYCLE: "ui_lifecycle", FOREGROUND_SERVICE: "foreground_service", IOS_METRIC_KIT_PAYLOAD_RECEIVED: "ios_metric_kit_payload_received", ANDROID_JANK_STATS: "android_jank_stats", IOS_JANK_STATS: "ios_jank_stats", APP_JS_STALLED: "app_js_stalled", LIBDISCORE_LOADED: "libdiscore_loaded", LIBDISCORE_KV_DUAL_READ_ERROR: "libdiscore_kv_dual_read_error", LIBDISCORE_DISPATCH_BRIDGE_TELEMETRY: "libdiscore_dispatch_bridge_telemetry", QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED: "quest_app_store_overlay_open_succeeded", QUEST_APP_STORE_OVERLAY_OPEN_FAILED: "quest_app_store_overlay_open_failed", QUEST_APP_STORE_OVERLAY_CLOSED: "quest_app_store_overlay_closed", QUEST_APP_STORE_OVERLAY_RETURNED: "quest_app_store_overlay_returned", QUEST_APP_STORE_OVERLAY_BACKGROUNDED: "quest_app_store_overlay_backgrounded", LIBDISCORE_SLOW_TIMERS: "libdiscore_slow_timers", REGISTER_INPUT_FOCUS: "register_input_focus", REGISTER_INPUT_BLUR: "register_input_blur", SESSION_START: "session_start", APP_BACK_FORWARD_NAVIGATED: "app_back_forward_navigated", MAIN_VIEW_ACTION_SHEET_SELECTED: "main_view_action_sheet_selected", EXTERNAL_FINGERPRINT_DROPPED: "external_fingerprint_dropped", EXTERNAL_DYNAMIC_LINK_RECEIVED: "external_dynamic_link_received", DEEP_LINK_CLICKED: "deep_link_clicked", EXTERNAL_INSTALLATION_ID_RECEIVED: "external_installation_id_received", VOICE_CHANNEL_INVITE_SENT: "voice_channel_invite_sent", INVITE_OPENED: "invite_opened", INVITE_VIEWED: "invite_viewed", INVITE_RESOLVED: "resolve_invite", INVITE_APP_INVOKED: "invite_app_invoked", INVITE_APP_INVOKE_FAILED: "invite_app_invoke_failed", INVITE_APP_OPENED: "invite_app_opened", INVITE_ACCEPT_BUTTON_RENDERED: "invite_accept_button_rendered", INVITE_LEARN_MORE: "invite_learn_more", INVITE_FRIEND_MEMBERS_VIEWED: "invite_friend_members_viewed", INVITE_LOGIN: "invite_login", INVITE_LOGIN_SUCCESSFUL: "invite_login_successful", INSTANT_INVITE_SHARED: "instant_invite_shared", COPY_INSTANT_INVITE: "copy_instant_invite", PERMANENT_INVITE_COMMUNITY_UPSELL_CLICKED: "guild_permanent_links_community_upsell_clicked", INVITE_SERVER_CLICKED: "invite_server_clicked", INVITE_EMBED_ACTIONED: "invite_embed_actioned", VOICE_INVITE_EMBED_BREADCRUMB_CLICKED: "voice_invite_embed_breadcrumb_clicked", VOICE_INVITE_SUGGESTIONS_ENTRYPOINT_CLOSED: "voice_invite_suggestions_entrypoint_closed", INVITE_CTA_CLICKED: "invite_cta_clicked", NATIVE_SHARE_SHEET_APP_CLICKED: "native_share_sheet_app_clicked", CHANNEL_LINK_PREVIEW_JOINED: "channel_link_preview_joined", CLIENT_HEARTBEAT: "client_heartbeat", CLIENT_HEARTBEAT_SKIPPED: "client_heartbeat_skipped", CLIENT_AD_HEARTBEAT: "client_ad_heartbeat", ATT_ELIGIBILITY_CHECKED: "att_eligibility_checked", ATT_APP_STATE_CHECKED: "att_app_state_checked", ATT_APP_STATE_CHECKED_OVERRIDE: "att_app_state_checked_override", ATT_PROMPT_ERROR: "att_prompt_error", AD_IDENTIFIER_FETCHED: "ad_identifier_fetched", AD_USER_FETCH_DURATION: "ad_user_fetch_duration", HEADLESS_TASK_INVOKED: "headless_task_invoked", HEADLESS_TASK_COMPLETED: "headless_task_completed", VERIFY_ACCOUNT_APP_OPENED: "verify_account_app_opened", QUICKSWITCHER_OPENED: "quickswitcher_opened", QUICKSWITCHER_CLOSED: "quickswitcher_closed", QUICKSWITCHER_RESULT_SELECTED: "quickswitcher_result_selected", ENABLE_NOTIFICATIONS: "enable_notifications", NOTIFICATION_CLICKED: "notification_clicked", NOTIFICATION_RENDERED: "notification_rendered", NOTIFICATION_ACTION: "notification_action", NOTIFICATION_VIEWED: "notification_viewed", NOTIFICATION_SETTINGS_UPDATED: "notification_settings_updated", NOTIFICATION_PERMISSION_STATUS: "notification_permission_status", NOTIFICATION_SETTINGS_CLICKED: "notification_settings_clicked", NOTIFICATION_CENTER_ACTION: "notification_center_action", NOTIFICATION_CENTER_LOADED: "notification_center_loaded", NOTIFICATION_MIGRATION_COMPLETED: "notification_migration_completed", NOTIFICATION_MIGRATION_GUILD_CHANGED: "notification_migration_guild_changed", NOTIFICATION_MIGRATION_OPTOUT: "notification_migration_optout", CALLKIT_CLICKED: "callkit_clicked", PUSH_NOTIFICATION_RECEIVED: "push_notification_received", ANDROID_NOTIFICATION_CHANNELS_SYNCED: "android_notification_channels_synced", GAME_MENTIONS_NOTIFICATION_SETTING_UPDATED: "game_mentions_notification_settings_updated", OVERLAY_DISABLED_SURVEY: "overlay_disabled_survey", OVERLAY_BUG_REPORT: "overlay_bug_report", NOTIFICATION_REPORT_SUBMITTED: "notification_report_submitted", NOTIFICATION_PERMISSION_PREPROMPT_ACKED: "notification_permission_preprompt_acked", MOBILE_APP_DOWNLOAD_MODAL_ACKED: "mobile_app_download_modal_acked", ACK_MESSAGES: "ack_messages", MARK_AS_READ: "mark_as_read", INBOX_CHANNEL_ACKED: "inbox_channel_acked", INBOX_CHANNEL_CLICKED: "inbox_channel_clicked", INBOX_CHANNEL_COLLAPSED: "inbox_channel_collapsed", VOICE_CHANNEL_SELECTED: "voice_channel_selected", JOIN_VOICE_CHANNEL: "join_voice_channel", LEAVE_VOICE_CHANNEL: "leave_voice_channel", VIEW_VOICE_CHANNEL: "view_voice_channel", VOICE_BOTTOM_SHEET_EXPANDED: "voice_bottom_sheet_expanded", VOICE_CONNECTION_CONNECTING: "voice_connection_connecting", VOICE_CONNECTION_FAILURE: "voice_connection_failure", VOICE_CONNECTION_SOCKET_FAILURE: "voice_connection_socket_failure", VOICE_CONNECTION_SUCCESS: "voice_connection_success", VOICE_CONNECTION_TTC_COLLECTED: "voice_connection_ttc_collected", VOICE_CONNECTION_REMOTE_STREAMS_CREATED: "voice_connection_remote_streams_created", VOICE_DISCONNECT: "voice_disconnect", START_SPEAKING: "start_speaking", START_LISTENING: "start_listening", VOICE_WATCHDOG_TIMEOUT: "voice_watchdog_timeout", DEVICE_ENUMERATION_TIMEOUT: "device_enumeration_timeout", VOICE_PROCESSING: "voice_processing", CALL_REPORT_PROBLEM: "call_report_problem", LIVE_ACTIVITY_INTERACTED: "live_activity_interacted", NOISE_CANCELLATION_LINK_CLICKED: "noise_cancellation_link_clicked", MEDIA_SESSION_JOINED: "media_session_joined", VOICE_CHANNEL_TOPIC_SET: "voice_channel_topic_set", VOICE_CHANNEL_TOPIC_VIEWED: "voice_channel_topic_viewed", VOICE_QUALITY_PERIODIC_STATS: "voice_quality_periodic_stats", AUDIO_DEVICE_MODULE_ERROR: "audio_device_module_error", SDP_ERROR: "sdp_error", VOICE_QUEUE_METRICS: "voice_queue_metrics", CHANNEL_SIDEBAR_VIEWED: "channel_sidebar_viewed", CHANNEL_SIDEBAR_RESIZED: "channel_sidebar_resized", MEMBER_LIST_VIEWED: "member_list_viewed", MEMBER_LIST_TOGGLED: "member_list_toggled", MEMBER_LIST_SWIPE_PEEK: "member_list_swipe_peek", MEMBER_LIST_SWIPE_TOGGLED: "member_list_swipe_toggled", DM_LIST_VIEWED: "dm_list_viewed", DM_EMPTY_ACTION: "dm_empty_action", DM_SAFETY: "dm_safety", NITRO_HOME_NAVIGATION: "nitro_home_navigation", SUMMARIES_SIDEBAR_VIEWED: "summaries_sidebar_viewed", SUMMARIES_SIDEBAR_TOGGLED: "summaries_sidebar_toggled", SUMMARIES_TOPIC_CLICKED: "summaries_topic_clicked", SUMMARIES_TOPICS_PILL_TOGGLED: "summaries_topics_pill_toggled", SUMMARIES_TOPICS_PILL_VIEWED: "summaries_topics_pill_viewed", SUMMARIES_REPORT_PROBLEM: "summaries_report_problem", SUMMARIES_UNREAD_BAR_VIEWED: "summaries_unread_bar_viewed", SUMMARIES_NOTICE_MANAGE_SETTINGS_CTA_CLICKED: "summaries_notice_manage_settings_cta_clicked", SUMMARY_DELETED: "summary_deleted", SETTINGS_PANE_VIEWED: "settings_pane_viewed", PREVIEW_MARKDOWN_TOGGLED: "preview_markdown_toggled", LEGACY_CHAT_INPUT_TOGGLED: "legacy_chat_input_toggled", CHANNEL_NOTICE_VIEWED: "channel_notice_viewed", CHANNEL_NOTICE_CLOSED: "channel_notice_closed", CHANNEL_NOTICE_CTA_CLICKED: "channel_notice_cta_clicked", MEMBER_LIST_NOTICE_VIEWED: "member_list_notice_viewed", MEMBER_LIST_NOTICE_CLOSED: "member_list_notice_closed", MEMBER_LIST_NOTICE_CTA_CLICKED: "member_list_notice_cta_clicked", PREMIUM_PROMOTION_OPENED: "premium_promotion_opened", RECURRING_PROMOTION_MODAL_OPENED: "recurring_promotion_modal_opened", THIRD_PARTY_PROMOTION_MODAL_OPENED: "third_party_promotion_modal_opened", RECURRING_PROMOTION_CLAIMED: "recurring_promotion_claimed", OUTBOUND_PROMOTION_CLAIMED: "outbound_promotion_claimed", PREMIUM_GUILD_PROMOTION_OPENED: "premium_guild_promotion_opened", PREMIUM_GUILD_UPSELL_VIEWED: "premium_guild_upsell_viewed", PREMIUM_GUILD_UPSELL_OPENED: "premium_guild_upsell_opened", PREMIUM_GUILD_PENDING_MODAL: "premium_guild_pending_modal", PERK_DEMO_OFFER_VIEWED: "perk_demo_offer_viewed", PERK_DEMO_OFFER_ACCEPTED: "perk_demo_offer_accepted", PERK_DEMO_OFFER_DISMISSED: "perk_demo_offer_dismissed", TRY_IT_OUT_PRESET_CLICKED: "try_it_out_preset_clicked", TRY_IT_OUT_PRESET_SELECTED: "try_it_out_preset_selected", TRY_IT_OUT_PRESET_SHUFFLED: "try_it_out_preset_shuffled", CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED: "custom_notification_sound_settings_updated", CUSTOM_NOTIFICATION_SOUND_OPTION_PLAYED: "custom_notification_sound_option_played", PERMISSIONS_REQUESTED: "permissions_requested", PERMISSIONS_ACKED: "permissions_acked", LOCAL_SETTINGS_UPDATED: "local_settings_updated", APP_NOTICE_VIEWED: "app_notice_viewed", APP_NOTICE_CLOSED: "app_notice_closed", APP_NOTICE_PRIMARY_CTA_OPENED: "app_notice_primary_cta_opened", APP_NOTICE_ANCHOR_CLICKED: "app_notice_anchor_clicked", VIDEO_LAYOUT_TOGGLED: "video_layout_toggled", VIDEO_INPUT_TOGGLED: "video_input_toggled", VIDEO_STREAM_ZOOM_CHANGED: "video_stream_zoom_changed", AUTHORIZED_APP_CONNECTED: "authorized_app_connected", OPEN_MODAL: "open_modal", OPEN_POPOUT: "open_popout", CLOSE_POPOUT: "close_popout", MODAL_DISMISSED: "modal_dismissed", MODAL_SECTION_VIEWED: "modal_section_viewed", DEVICE_DETECTED_PANEL_VIEWED: "device_detected_panel_viewed", DEVICE_DETECTED_PANEL_DISMISSED: "device_detected_panel_dismissed", HOVER_MENU_OPENED: "hover_menu_opened", CREATE_GUILD_VIEWED: "create_guild_viewed", JOIN_GUILD_VIEWED: "join_guild_viewed", GUILD_TEMPLATE_SELECTED: "guild_template_selected", GAME_NEWS_CHANGED: "game_news_changed", GAME_NEWS_OPENED: "game_news_opened", APPLICATION_OPENED: "application_opened", LAUNCH_GAME: "launch_game", LAUNCH_NON_GAME_APPLICATION: "launch_non_game_application", GAME_DETECTED: "game_detected", ROBLOX_SUBGAME_DETECTED: "roblox_subgame_detected", RUNNING_GAME_HEARTBEAT: "running_game_heartbeat", GAME_DETECTION_COMPARISON: "game_detection_comparison", GAME_DETECTION_ERROR: "game_detection_error", GAME_BLOCKLIST_TRIGGERED: "game_blocklist_triggered", GAME_APPLICATION_LOOKUP_FALLTHROUGH: "game_application_lookup_fallthrough", GAME_NAME_MATCH_FALLBACK: "game_name_match_fallback", ACTIVITY_UPDATED: "activity_updated", ACTIVITY_SESSION_JOINED: "activity_session_joined", ACTIVITY_SESSION_JOIN_FAILED: "activity_session_join_failed", ACTIVITY_SESSION_LEFT: "activity_session_left", ACTIVITY_DEEP_LINK_ATTEMPTED: "activity_deep_link_attempted", ACTIVITY_DEEP_LINK_RECEIVED: "activity_deep_link_received", ACTIVITY_INTERACTION_CALLBACK_ERROR: "activity_interaction_callback_error", ACTIVITY_VOICE_CONTROLS_TOGGLE_BUTTON_PRESSED: "activity_voice_controls_toggle_button_pressed", ACTIVITY_VOICE_CONTROLS_TOGGLE_MOVED: "activity_voice_controls_toggle_moved", ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED: "activity_web_view_content_process_terminated", ACTIVITY_VIDEO_PIP_SHOWN: "activity_video_pip_shown", ACTIVITY_VIDEO_PIP_HIDDEN: "activity_video_pip_hidden", ACTIVITY_DEVICE_THERMAL_STATE_CHANGED: "activity_device_thermal_state_changed", ACTIVITY_THERMAL_STATE_NOTICE_SHOWN: "activity_thermal_state_notice_shown", ACTIVITY_HANDSHAKE_TIMED_OUT: "activity_handshake_timed_out", ACTIVITY_BOOKMARK_COPY_URL: "activity_bookmark_copy_url", ACTIVITY_BOOKMARK_SHARED: "activity_bookmark_shared", ACTIVITIES_PAGE_CELEBRATE_TILE_CLICKED: "activities_page_celebrate_tile_clicked", ACTIVITIES_PAGE_FEELING_LUCKY_CLICKED: "activities_page_feeling_lucky_clicked", ACTIVITY_SHARE_MOMENT_SEND: "activity_share_moment_send", ACTIVITY_SHARE_MOMENT_COPY: "activity_share_moment_copy", ACTIVITY_SHELF_CLOSE: "activity_shelf_close", ACTIVITY_IFRAME_MOUNT: "activity_iframe_mount", ACTIVITY_IFRAME_UNMOUNT: "activity_iframe_unmount", ACTIVITY_HANDSHAKE: "activity_handshake", ACTIVITY_INSTANCE_EMBED_CLICKED: "activity_instance_embed_clicked", ACTIVITY_CLOSED_RPC_ERROR: "activity_closed_rpc_error", APP_PROFILE_OPEN_APP_BUTTON_CLICKED: "app_profile_open_app_button_clicked", APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED: "app_detail_page_entry_point_command_button_clicked", APP_LAUNCHER_PEP_BUTTON_NOT_RENDERED: "app_launcher_pep_button_not_rendered", EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED: "embedded_application_invite_embed_viewed", NITRO_TAB_VISITED: "nitro_tab_visited", NITRO_TAB_BADGE_SHOWN: "nitro_tab_badge_shown", BROWSER_HANDOFF_SUCCEEDED: "browser_handoff_succeeded", SHOW_TUTORIAL: "show_tutorial", CLOSE_TUTORIAL: "close_tutorial", DISMISS_ALL_TUTORIALS: "dismiss_all_tutorials", ACTIVITY_CARD_CLICKED: "activity_card_clicked", ACTIVITY_CARDS_VIEWED: "activity_cards_viewed", ACTIVITY_DEFAULT_ICON_SHOWN: "activity_default_icon_shown", INVITE_SENT: "invite_sent", CONTACT_SELECTED: "contact_selected", INSTANT_INVITE_OPTION_CLICKED: "instant_invite_option_clicked", HOOK_RESULT: "hook_result", OVERLAY_TOGGLED: "overlay_toggled", OVERLAY_HOOK_RESULT: "overlay_hook_result", OVERLAY_HOOK_CRASHED: "overlay_hook_crashed", OVERLAY_INITIALIZED: "overlay_initialized", OVERLAY_LOCKED: "overlay_locked", OVERLAY_UNLOCKED: "overlay_unlocked", OVERLAY_PIN_TOGGLED: "overlay_pin_toggled", OVERLAY_LAYOUT_UPDATED: "overlay_layout_updated", OVERLAY_SETTINGS_UPDATED: "overlay_settings_updated", OVERLAY_PERF_INFO: "overlay_perf_info", OVERLAY_USAGE_STATS: "overlay_usage_stats", OVERLAY_USAGE_NOTIFICATION_STATS: "overlay_usage_notification_stats", OVERLAY_GAME_INVITE_SENT: "overlay_game_invite_sent", OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN: "overlay_game_invite_notification_shown", OVERLAY_GAME_INVITE_SETTINGS_UPDATED: "overlay_game_invite_settings_updated", OVERLAY_STATE_CHANGED: "overlay_state_changed", OVERLAY_NOTIFICATION_SETTING_UPDATED: "overlay_notification_setting_updated", WIDGET_CONTENT_SHOWN: "widget_content_shown", WIDGET_SETTING_UPDATED: "widget_setting_updated", WIDGET_INTERACTED: "widget_interacted", SPOTIFY_AUTO_PAUSED: "spotify_auto_paused", SPOTIFY_BUTTON_CLICKED: "spotify_button_clicked", SPOTIFY_LISTEN_ALONG_STARTED: "spotify_listen_along_started", SPOTIFY_LISTEN_ALONG_ENDED: "spotify_listen_along_ended", STREAMER_MODE_TOGGLE: "streamer_mode_toggle", UPDATE_STREAMER_MODE_SETTINGS: "update_streamer_mode_settings", INVITE_SUGGESTION_OPENED: "invite_suggestion_opened", HOME_DRAWER_GUILD_CLICKED: "home_drawer_guild_clicked", GUILD_VIEWED: "guild_viewed", GUILD_VIEWED_CLICKSTREAM: "guild_viewed_clickstream", WAVE_CTA_CLICKED: "wave_cta_clicked", FRIENDS_LIST_CLICKED: "friends_list_clicked", FRIENDS_LIST_ITEM_ACTION: "friends_list_item_action", FRIENDS_LIST_ITEM_CLICKED: "friends_list_item_clicked", FRIENDS_LIST_ITEM_CONTEXT_MENU_INTERACTED: "friends_list_item_context_menu_interacted", FRIENDS_LIST_ITEM_MESSAGE_CLICKED: "friends_list_item_message_clicked", FRIENDS_LIST_ITEM_REMOVE_FRIEND_CLICKED: "friends_list_item_remove_friend_clicked", FRIENDS_LIST_ITEM_VIDEO_CALL_CLICKED: "friends_list_item_video_call_clicked", FRIENDS_LIST_ITEM_VOICE_CALL_CLICKED: "friends_list_item_voice_call_clicked", FRIENDS_LIST_VIEWED: "friends_list_viewed", FRIENDS_LIST_VIEWED_CLICKSTREAM: "friends_list_viewed_clickstream", FRIEND_ADD_VIEWED: "friend_add_viewed", FRIEND_ADD_NEARBY_CONNECTED: "friend_add_nearby_connected", FRIEND_REQUEST_FAILED: "friend_request_failed", CONNECTED_ACCOUNT_INITIATED: "connected_account_initiated", FRIEND_SUGGESTIONS_TAB_VIEWED: "friend_suggestions_tab_viewed", CONTACT_INVITE_IOS_SENT: "contact_invite_ios_sent", CONTACT_INVITE_TAPPED: "contact_invite_tapped", CONTACT_INVITE_OVERLAY_DISMISSED: "contact_invite_overlay_dismissed", FRIEND_SUGGESTION_ADDED: "friend_suggestion_added", FRIEND_FINDER_SECTION_EXPANDED: "friend_finder_section_expanded", FRIEND_FINDER_INITIAL_LOADED: "friend_finder_initial_loaded", USERNAME_SEARCH_TAPPED: "username_search_tapped", NOW_PLAYING_CARD_HOVERED: "now_playing_card_hovered", FRIEND_REQUEST_ACCEPT_MESSAGE_CLICKED: "friend_request_accept_message_clicked", CONNECTIONS_XBOX_RELINK_COACHMARK_VIEWED: "connections_xbox_relink_coachmark_viewed", CONNECTIONS_XBOX_RELINK_COACHMARK_CLICKED: "connections_xbox_relink_coachmark_clicked", CONNECTIONS_NEW_CONSOLE_COACHMARK_VIEWED: "connections_new_console_coachmark_viewed", CONNECTIONS_NEW_CONSOLE_COACHMARK_CLICKED: "connections_new_console_coachmark_clicked", CONNECTIONS_EMPTY_STATE_CARD_CLICKED: "connections_empty_state_card_clicked", CONNECTIONS_XBOX_RELINK_CLICKED: "connections_xbox_relink_clicked", MESSAGE_REQUESTS_INITIALIZED: "message_requests_initialized", GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED: "guild_default_message_request_updated", SPAM_MESSAGE_REQUESTS_VIEWED: "spam_message_requests_viewed", MESSAGE_REQUESTS_VIEWED: "message_requests_viewed", MESSAGE_REQUEST_PREVIEW_VIEWED: "message_request_preview_viewed", EXPLICIT_MEDIA_OBSCURITY_TOGGLE_V2: "explicit_media_obscurity_toggle_v2", EXPLICIT_MEDIA_ACTION: "explicit_media_action", EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT: "explicit_media_scan_client_timed_out", EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED: "explicit_media_redactable_messages_loaded", REDACTABLE_MESSAGE_LOADED: "redactable_message_loaded", EXPLICIT_MEDIA_RETROACTIVE_SCAN_COMPLETE: "explicit_media_retroactive_scan_complete", SAFETY_SETTINGS_NOTICE_ACTION: "safety_settings_notice_action", SAFETY_WARNING_VIEWED: "safety_warning_viewed", SAFETY_WARNING_MODAL_VIEWED: "safety_warning_modal_viewed", SAFETY_WARNING_CTA_CLICKED: "safety_warning_cta_clicked", VIBING_WUMPUS_VIEWED: "vibing_wumpus_viewed", VIBING_WUMPUS_ACTION: "vibing_wumpus_action", VIBING_WUMPUS_CLOSED: "vibing_wumpus_closed", DOWNLOAD_APP: "download_app", APPLE_RETRY_PENDING_PURCHASE_STARTED: "apple_retry_pending_purchase_started", APPLE_RETRY_PENDING_PURCHASE_SUCCEEDED: "apple_retry_pending_purchase_succeeded", APPLE_RETRY_PENDING_PURCHASE_FAILED: "apple_retry_pending_purchase_failed", PAYMENT_ELEMENT_CHANGED: "payment_element_changed", PAYMENT_FLOW_STARTED: "payment_flow_started", PAYMENT_FLOW_COMPLETED: "payment_flow_completed", PAYMENT_FLOW_STEP: "payment_flow_step", PAYMENT_FLOW_ADD_SOURCE_COMPLETED: "payment_flow_add_source_completed", PAYMENT_FLOW_ADD_SOURCE_ERROR: "payment_flow_add_source_error", PAYMENT_FLOW_SUCCEEDED: "payment_flow_succeeded", PAYMENT_FLOW_FAILED: "payment_flow_failed", PAYMENT_FLOW_CANCELED: "payment_flow_canceled", PAYMENT_FLOW_LOADED: "payment_flow_loaded", PAYMENT_FLOW_ERROR: "payment_flow_error", PAYMENT_REQUEST_LOADED: "payment_request_loaded", PAYMENT_REQUEST_COMPLETED: "payment_request_completed", GIFT_CATEGORY_SELECT_MODAL_OPENED: "gift_category_select_modal_opened", GIFT_SELECTION_MODAL_OPENED: "gift_selection_modal_opened", GIFT_SELECTION_TAB_SELECTED: "gift_selection_tab_selected", GIFT_SELECTION_SEE_WISHLIST_CTA_CLICKED: "gift_selection_see_wishlist_cta_clicked", IMPRESSION_GIFT_SELECTION_WISHLIST_SECTION_VIEWED: "impression_gift_selection_wishlist_section_viewed", IMPRESSION_GIFTING_BADGE_PROGRESS_BANNER: "impression_gifting_badge_progress_banner", COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED: "collectibles_gifting_shop_item_clicked", GIFTING_ITEM_CLICKED: "gifting_item_clicked", GIFTING_BADGE_INFO_ACTION_SHEET_OPENED: "gifting_badge_info_action_sheet_opened", GIFT_CARD_REDEMPTION_START: "gift_card_redemption_start", GIFT_CARD_REDEMPTION_EMBED_CLICKED: "gift_card_redemption_embed_clicked", GIFT_CARD_REDEMPTION_COMPLETED: "gift_card_redemption_completed", GIFT_CARD_REDEMPTION_FAILED: "gift_card_redemption_failed", IMPRESSION_GIFT_CARD_REDEMPTION_SUCCEEDED_MODAL: "impression_gift_card_redemption_succeeded_modal", GIFT_CARD_REDEMPTION_SUCCEEDED_MODAL_CTA_CLICKED: "gift_card_redemption_succeeded_modal_cta_clicked", GIFT_CARD_WALLET_CONSUMED: "gift_card_wallet_consumed", ORBS_ENTRYPOINT_CLICKED: "orbs_entrypoint_clicked", PAYMENT_SOURCE_CREATION_FAILED: "payment_source_creation_failed", PREMIUM_UPGRADE_STARTED: "premium_upgrade_started", PREMIUM_RESUBSCRIBE_FLOW_STARTED: "premium_resubscribe_flow_started", PREMIUM_RESUBSCRIBE_COMPLETED: "premium_resubscribe_completed", APPLE_PAYMENT_LINK_DISCOUNT_OFFER_PROMPT_VIEWED: "apple_payment_link_discount_offer_prompt_viewed", CHANNEL_MEMBER_KICKED: "channel_member_kicked", CHANNEL_OPENED: "channel_opened", CHANNEL_OPENED_CLICKSTREAM: "channel_opened_clickstream", NUO_TRANSITION: "nuo_transition", NUO_GUILD_DATA: "nuo_guild_info", SOUNDSHARE_ATTACHED: "soundshare_attached", SOUNDSHARE_FAILED: "soundshare_failed", SOUNDSHARE_TRANSMITTING: "soundshare_transmitting", SOUNDSHARE_ENABLE: "soundshare_enable", VIDEOHOOK_INITIALIZED: "videohook_initialized", SCREENSHARE_FINISHED: "screenshare_finished", SCREENSHARE_FAILED: "screenshare_failed", PERK_DISCOVERABILITY_CARD_CTA_CLICKED: "perk_discoverability_card_cta_clicked", THIRD_PARTY_PARTNER_CTA_CLICKED: "third_party_partner_cta_clicked", PREMIUM_TENURE_REWARDS_ORBS_CTA_CLICKED: "premium_tenure_rewards_orbs_cta_clicked", PREMIUM_TENURE_REWARDS_ORBS_SECTION_IMPRESSION: "premium_tenure_rewards_orbs_section_impression", PREMIUM_MARKETING_BENTO_BOX_IMPRESSION: "premium_marketing_bento_box_impression", PREMIUM_WHATS_NEW_BOX_CTA_CLICKED: "premium_whats_new_box_cta_clicked", PREMIUM_WHATS_NEW_VIEW_TIME: "premium_whats_new_view_time", PREMIUM_BEST_OF_VIEW_TIME: "premium_best_of_view_time", VIDEO_STREAM_ENDED: "video_stream_ended", VIDEO_STREAM_STARTED: "video_stream_started", RECEIVER_FIRST_FRAME_DELIVERED: "receiver_first_frame_delivered", STREAMER_FIRST_FRAME_ENCRYPTED: "streamer_first_frame_encrypted", STREAM_WARNING_TRIGGERED: "stream_warning_triggered", STREAM_REPORT_PROBLEM: "stream_report_problem", STREAM_SETTINGS_UPDATE: "stream_settings_update", VIDEO_INPUT_INITIALIZED: "video_input_initialized", AUDIO_INPUT_INITIALIZED: "audio_input_initialized", AUDIO_EFFECTS_PROBE_COMPLETED: "audio_effects_probe_completed", NOTIFY_STREAM_SETTING_UPDATE: "notify_stream_setting_update", SECURE_FRAMES_TRANSITION: "secure_frames_transition", MLS_FAILURES: "mls_failures", AV_ERROR_REPORTED: "av_error_reported", DEBUG_LOG_UPLOADED: "debug_log_uploaded", VIDEO_CALL_ENDED: "video_call_ended", VIDEO_SPINNER_SHOWN_V2: "video_spinner_shown_v2", VIDEO_TOGGLED: "video_toggled", IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED: "ios_invalid_token_workaround_triggered", VIDEO_EFFECT_UPDATED: "video_effect_updated", VIDEO_BACKGROUND_FEEDBACK: "video_background_feedback", VIDEO_BACKGROUND_ADDED: "video_background_added", VIDEO_BACKGROUND_DELETED: "video_background_deleted", AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED: "audio_local_soundboard_mute_toggled", INPUT_MUTE_TOGGLED: "input_mute_toggled", SELF_DEAFEN_TOGGLED: "self_deafen_toggled", CHANGE_LOG_OPENED: "change_log_opened", CHANGE_LOG_CLOSED: "change_log_closed", CHANGE_LOG_VIDEO_INTERACTED: "change_log_video_interacted", CHANGE_LOG_CTA_CLICKED: "change_log_cta_clicked", CHANGE_LOG_VIDEO_PLAYED: "change_log_video_played", CHANGE_LOG_VIDEO_UNMUTE: "change_log_video_unmute", CHANGE_LOG_DM_REMOVED: "change_log_dm_removed", ACCOUNT_LINK_STEP: "account_link_step", ACCOUNT_LINK_FAILED: "account_link_failed", DEVICE_LINK_STEP: "device_link_step", CONNECTED_ACCOUNT_VIEWED: "connected_account_viewed", SERVER_DRAWER_OPENED: "server_drawer_opened", MESSAGE_COMPOSER_OPENED: "message_composer_opened", LAUNCHPAD_SEARCHED: "launchpad_searched", LAUNCHPAD_OPENED: "launchpad_opened", MEDIA_DEVICE_CHANGED: "media_device_changed", DEVICES_LIST_SHOW_MORE_CLICKED: "devices_list_show_more_clicked", IMAGE_VIDEO_DATA_SETTINGS_UPDATED: "image_video_data_settings_updated", QUEST_HOVER: "quest_hover", QUEST_HOVER_OFF: "quest_hover_off", QUEST_CONTENT_CLICKED: "quest_content_clicked", QUEST_LINK_SHARED: "quest_link_shared_v2", QUEST_CONTENT_LOADED: "quest_content_loaded", QUEST_CONTENT_VIEWED: "quest_content_viewed", QUEST_CONTENT_VIEW_TIME: "quest_content_view_time", QUEST_DECISION_ROUNDTRIP: "quest_decision_roundtrip", QUEST_DECISION_ROUNDTRIP_ERROR: "quest_decision_roundtrip_error", QUEST_DECISION_RECEIVED: "quest_decision_received", EARNED_DECISION_ROUNDTRIP: "earned_decision_roundtrip", QUEST_ASSET_LOADING_FAILURE: "quest_asset_loading_failure", QUEST_CONTENT_RENDERING_FAILURE: "quest_content_rendering_failure", QUEST_BAR_RENDER_PERFORMANCE_MEASURED: "quest_bar_render_performance_measured", QUEST_SHARE_LINK_DEEP_LINKED_INTO_DESKTOP_CLIENT: "quest_share_link_deep_linked_into_desktop_client", QUEST_SHARE_LINK_DEEP_LINKED_INTO_MOBILE_CLIENT: "quest_share_link_deep_linked_into_mobile_client", QUEST_SURVEY_DISMISSED: "quest_survey_dismissed", QUEST_SURVEY_DISPLAYED: "quest_survey_displayed", QUEST_SURVEY_SUBMITTED: "quest_survey_submitted", QUEST_BAR_MODE_CHANGED: "quest_bar_mode_changed", QUEST_EMBED_FALLBACK_VIEWED: "quest_embed_fallback_viewed", QUEST_THIRD_PARTY_LINK_CLICKED: "quest_third_party_link_clicked", DISCOVERY_QUEST_TAB_CLICKED: "discovery_quest_tab_clicked", QUEST_BAR_RENDER_DELAY: "quest_bar_render_delay", QUEST_HOME_ROUNDTRIP: "quest_home_roundtrip", QUEST_HOME_SORT_METHOD_CHANGED: "quest_home_sort_method_changed", QUEST_HOME_FILTERS_CHANGED: "quest_home_filters_changed", QUEST_GAME_SHEET_ERROR: "quest_game_sheet_error", QUEST_HOME_ONBOARDING_POPOVER_RENDERED: "quest_home_onboarding_popover_rendered", QUEST_HOME_MOBILE_DEEP_LINK_MISSING_QUEST: "quest_home_mobile_deep_link_missing_quest", QUEST_HOME_CAROUSEL_SCROLL: "quest_home_carousel_scroll", QUEST_HOME_SEARCH_ENTERED: "quest_home_search_entered", QUEST_HOME_SEARCH_CLOSED: "quest_home_search_closed", QUEST_HOME_SEARCH_QUERY_SUBMITTED: "quest_home_search_query_submitted", QUEST_HOME_HERO_MISSING_QUESTS: "quest_home_hero_missing_quests", QUEST_VIDEO_APP_FOCUSED: "quest_video_app_focused", QUEST_VIDEO_APP_UNFOCUSED: "quest_video_app_unfocused", QUEST_VIDEO_BUFFERING_ENDED: "quest_video_buffering_ended", QUEST_VIDEO_BUFFERING_STARTED: "quest_video_buffering_started", QUEST_VIDEO_ERROR: "quest_video_error", QUEST_VIDEO_FULLSCREEN_ENTERED: "quest_video_fullscreen_entered", QUEST_VIDEO_FULLSCREEN_EXITED: "quest_video_fullscreen_exited", QUEST_VIDEO_LOADING_ENDED: "quest_video_loading_ended", QUEST_VIDEO_LOADING_STARTED: "quest_video_loading_started", QUEST_VIDEO_MODAL_CLOSED: "quest_video_modal_closed", QUEST_VIDEO_PAUSED: "quest_video_paused", QUEST_VIDEO_PROGRESSED: "quest_video_progressed", QUEST_VIDEO_RESUMED: "quest_video_resumed", QUEST_VIDEO_SEEKED: "quest_video_seeked", QUEST_VIDEO_SEGMENT_WATCHED: "quest_video_segment_watched", QUEST_VIDEO_TIME_TO_FIRST_FRAME: "quest_video_time_to_first_frame", QUEST_VIDEO_VOLUME_CHANGED: "quest_video_volume_changed", QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED: "quest_video_enrollment_retry_attempted", ATT_PROMPT_RESULT: "att_prompt_result", AD_VIDEO_MODAL_CLOSED: "ad_video_modal_closed", AD_VIDEO_PROGRESSED: "ad_video_progressed", AD_VIDEO_LOOPED: "ad_video_looped", AD_VIDEO_PAUSED: "ad_video_paused", AD_VIDEO_RESUMED: "ad_video_resumed", AD_VIDEO_ERROR: "ad_video_error", AD_VIDEO_TIME_TO_FIRST_FRAME: "ad_video_time_to_first_frame", AD_VIDEO_BUFFERING_STARTED: "ad_video_buffering_started", AD_VIDEO_BUFFERING_ENDED: "ad_video_buffering_ended", AD_ASSET_LOADING_FAILURE: "ad_asset_loading_failure", BOUNTY_CAROUSEL_SCROLL: "bounty_carousel_scroll", BOUNTY_CAROUSEL_EMPTY_STATE_VIEWED: "bounty_carousel_empty_state_viewed", BOUNTY_VERTICAL_SCROLL: "bounty_vertical_scroll", BOUNTY_AUTO_SCROLL_DISMISSED: "bounty_auto_scroll_dismissed", QUEST_HOME_ORB_SHOP_CAROUSEL_VIEWED: "quest_home_orb_shop_carousel_viewed", QUEST_HOME_ORB_SHOP_CAROUSEL_SCROLL: "quest_home_orb_shop_carousel_scroll", USER_SETTINGS_KEYBIND_UPDATED: "user_settings_keybind_updated", USER_ATTRIBUTION_RECEIVED: "user_attribution_received", USER_AVATAR_UPDATED: "user_avatar_updated", USER_FINGERPRINT_CHANGED: "user_fingerprint_changed", DISPATCH_PATCH_STARTED: "gl_patch_started", DISPATCH_PATCH_PAUSED: "gl_patch_paused", DISPATCH_PATCH_FAILED: "gl_patch_failed", DISPATCH_PATCH_VERIFICATION_FAILED: "gl_verification_failed", DISPATCH_PATCH_COMPLETE: "gl_patch_complete", DISPATCH_PATCH_CANCELLED: "gl_patch_cancelled", DISPATCH_APPLICATION_UNINSTALLED: "gl_application_uninstalled", PREMIUM_MARKETING_PAGE_VIEWED: "premium_marketing_page_viewed", PREMIUM_MARKETING_PAGE_EXITED: "premium_marketing_page_exited", PREMIUM_MARKETING_PERK_CARD_FLIPPED: "premium_marketing_perk_card_flipped", PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED: "premium_marketing_what_is_new_card_hovered", PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED: "premium_marketing_perks_see_all_clicked", PREMIUM_MARKETING_CAMPAIGN_CLAIM_MODAL_OPEN_ATTEMPTED: "premium_marketing_campaign_claim_modal_open_attempted", PREMIUM_MARKETING_CAMPAIGN_ENTITLEMENT_CREATED_INGESTED: "premium_marketing_campaign_entitlement_created_ingested", PREMIUM_MARKETING_CAMPAIGN_REDEMPTION_CARD_CLICKED: "premium_marketing_campaign_redemption_card_clicked", STORE_DIRECTORY_VIEWED: "store_directory_viewed", STORE_DIRECTORY_BROWSE_VIEWED: "store_directory_browse_viewed", STORE_DIRECTORY_FILTER_UPDATED: "store_directory_filter_updated", STORE_DIRECTORY_EXITED: "store_directory_exited", STORE_DIRECTORY_HERO_VIEWED: "store_directory_hero_viewed", STORE_LISTING_VIEWED: "store_listing_viewed", STORE_LISTING_EXITED: "store_listing_exited", STORE_LISTING_MEDIA_SCROLLED: "store_listing_media_scrolled", LIBRARY_VIEWED: "library_viewed", LIBRARY_INSTALL_INITIATED: "library_install_initiated", LIBRARY_REPAIR_INITIATED: "library_repair_initiated", LIBRARY_UNINSTALL_INITIATED: "library_uninstall_initiated", LIBRARY_SCANNING_ENABLED: "library_scanning_enabled", PROMOTION_VIEWED: "promotion_viewed", APPLICATION_SETTINGS_UPDATED: "application_settings_updated", NETWORKING_SYSTEM_METRICS: "networking_system_metrics", NETWORKING_PEER_METRICS: "networking_peer_metrics", MIC_TESTING_STARTED: "mic_testing_started", MIC_TESTING_STOPPED: "mic_testing_stopped", GIFT_CODE_SENT: "gift_code_sent", GIFT_CODE_RESOLVED: "gift_code_resolved", GIFT_CODE_COPIED: "gift_code_copied", GIFT_ACCEPT_STEP: "gift_accept_step", GIFT_INTENT_BADGE_CLICKED: "gift_intent_badge_clicked", GIFT_INTENT_ACTION_BUTTON_CLICKED: "gift_intent_action_button_clicked", GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED: "gift_intent_card_secondary_cta_clicked", GIFT_INTENT_MESSAGE_SENT: "gift_intent_message_sent", GIFT_INTENT_DISMISSED: "gift_intent_dismissed", GIFT_INFO_OPTIONS_MISSING: "gift_info_options_missing", GIFT_PROMOTION_REWARD_SELECTED: "gift_promotion_reward_selected", SLASH_COMMAND_USED: "slash_command_used", KEYBOARD_SHORTCUT_USED: "keyboard_shortcut_used", KEYBOARD_MODE_TOGGLED: "keyboard_mode_toggled", SEARCH_RESULT_VIEWED: "search_result_viewed", SEARCH_RESULT_SELECTED: "search_result_selected", SEARCH_RESULT_EXPANDED: "search_result_expanded", SEARCH_RESULT_SORT_CHANGED: "search_result_sort_changed", SEARCH_RESULT_PAGE_CHANGED: "search_result_page_changed", SEARCH_RESULT_EMPTY: "search_result_empty", SEARCH_OPENED: "search_opened", SEARCH_STARTED: "search_started", SEARCH_CLOSED: "search_closed", SEARCH_INPUT_CLEARED: "search_input_cleared", SEARCH_RESULTS_FEEDBACK_SUBMITTED: "search_results_feedback_submitted", SEARCH_RESULTS_FEEDBACK_MODAL_VIEWED: "search_results_feedback_modal_viewed", SEARCH_RESULTS_FEEDBACK_ENTRYPOINT_VIEWED: "search_results_feedback_entrypoint_viewed", SEARCH_MESSAGES_CHANNEL_PREFILL: "search_messages_channel_prefill", SEARCH_MESSAGES_AUTOCOMPLETE_CLICKED: "search_messages_autocomplete_clicked", SEARCH_MESSAGES_SELECTED_CHANNEL_FILTER_CLICKED: "search_messages_selected_channel_filter_clicked", SEARCH_HISTORY_CLICKED: "search_history_clicked", SEARCH_BAR_VIEWED: "search_bar_viewed", SEARCH_CROSS_DM_SETTING_UPDATE: "search_cross_dm_setting_update", SEARCH_FILTERS_MODAL_OPENED: "search_filters_modal_opened", MESSAGES_SEARCH_STARTED: "messages_search_started", SEARCH_V2_OPENED: "search_v2_opened", SEARCH_V2_CLOSED: "search_v2_closed", SEARCH_V2_FILTER_ADD: "search_v2_filter_add", SEARCH_V2_FILTER_REMOVE: "search_v2_filter_remove", SEARCH_V2_INDEXING_VIEWED: "search_v2_indexing_viewed", SEARCH_V2_RESULT_EMPTY: "search_v2_result_empty", SEARCH_V2_RESULT_MESSAGES_EMPTY: "search_v2_result_messages_empty", SEARCH_V2_RESULT_CLICKED: "search_v2_result_clicked", SEARCH_V2_RESULTS_VIEWED_AGGREGATE: "search_v2_results_viewed_aggregate", SEARCH_V2_HISTORY_CLICKED: "search_v2_history_clicked", SEARCH_V2_SUGGESTED_CLICKED: "search_v2_suggested_clicked", SEARCH_V2_FILTERS_OPENED: "search_v2_filters_opened", SEARCH_V2_FILTERS_APPLIED: "search_v2_filters_applied", SEARCH_V2_TAB_SELECTED: "search_v2_tab_selected", SEARCH_V2_JUMP_TO_MESSAGE: "search_v2_jump_to_message", SEARCH_V2_STARTED: "search_v2_started", SEARCH_V2_RESULT_COUNTS_VIEWED: "search_v2_result_counts_viewed", SEARCH_V2_RESULTS_VIEWED: "search_v2_results_viewed", SEARCH_OPENED_MOBILE: "search_opened_mobile", SEARCH_STARTED_MOBILE: "search_started_mobile", SEARCH_RESULT_CLICKED_MOBILE: "search_result_clicked_mobile", SEARCH_RESULT_RETURNED_MOBILE: "search_result_returned_mobile", SEARCH_EMPTY_RESULT_MOBILE: "search_empty_result_mobile", SEARCH_EMPTY_MESSAGE_RESULT_MOBILE: "search_empty_message_result_mobile", GLOBAL_DISCOVERY_VIEWED: "global_discovery_viewed", GLOBAL_DISCOVERY_ENTRYPOINT_CLICKED: "global_discovery_entrypoint_clicked", GLOBAL_DISCOVERY_SERVERS_CARD_CLICKED: "global_discovery_servers_card_clicked", GLOBAL_DISCOVERY_SERVERS_VIEWED: "global_discovery_servers_viewed", UPSELL_VIEWED: "upsell_viewed", UPSELL_CLICKED: "upsell_clicked", PREMIUM_UPSELL_VIEWED: "premium_upsell_viewed", PREMIUM_EDUCATION_VIEWED: "premium_education_viewed", PREMIUM_UPSELL_MESSAGE_SENT: "premium_upsell_message_sent", PREMIUM_UPSELL_INTERACTED: "premium_upsell_interacted", DISMISSIBLE_CONTENT_SHOWN: "dismissible_content_shown", DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN: "dismissible_content_shown_before_connection_open", DISMISSIBLE_CONTENT_DISMISSED: "dismissible_content_dismissed", DISMISSIBLE_CONTENT_DISMISSED_BEFORE_CONNECTION_OPEN: "dismissible_content_dismissed_before_connection_open", DISMISSIBLE_CONTENT_REJECTED: "dismissible_content_rejected", PREMIUM_CHANGELOG_CTA_CLICKED: "premium_changelog_cta_clicked", JUMP: "jump", GAME_DISPLAY_MODE_ADJUSTMENT_RESPONSE: "game_display_mode_adjustment_response", GIF_FAVORITED: "gif_favorited", GIF_UNFAVORITED: "gif_unfavorited", MESSAGE_SENT_WITH_GIF: "message_sent_with_gif", GUILD_DISCOVERY_VIEWED: "guild_discovery_viewed", GUILD_DISCOVERY_SEARCH_FAILED: "guild_discovery_search_failed", GUILD_DISCOVERY_SEARCH_START: "guild_discovery_search_start", GUILD_DISCOVERY_GET_FEATURED_GUILDS_FAILED: "guild_discovery_get_featured_guilds_failed", GUILD_DISCOVERY_GUILD_SELECTED: "guild_discovery_guild_selected", GUILD_DISCOVERY_GUILD_JOIN_CLICKED: "guild_discovery_guild_join_clicked", GUILD_DISCOVERY_EXITED: "guild_discovery_exited", MOBILE_LURKER_PREVIEW_LURK_STARTED: "mobile_lurker_preview_lurk_started", MOBILE_LURKER_PREVIEW_JOIN_CLICKED: "mobile_lurker_preview_join_clicked", MOBILE_LURKER_PREVIEW_LEAVE_PROMPT_LEAVE_CLICKED: "mobile_lurker_preview_leave_prompt_leave_clicked", MOBILE_LURKER_PREVIEW_GUILD_ICON_CLICKED: "mobile_lurker_preview_guild_icon_clicked", MOBILE_LURKER_PREVIEW_LONG_PRESS_LEAVE_CLICKED: "mobile_lurker_preview_long_press_leave_clicked", NEWS_EDITOR_VIEWED: "news_card_editor_viewed", NEWS_UPDATED: "news_card_updated", NEWS_LINK_COPIED: "news_link_copied", NEWS_LINK_SHARED: "news_link_shared", USER_STATUS_UPDATED: "user_status_updated", CUSTOM_STATUS_UPDATED: "custom_status_updated", CUSTOM_STATUS_RANDOMIZER_CLICKED: "custom_status_randomizer_clicked", ACTIVITY_STATUS_ICON_TOOLTIP_SHOWN: "activity_status_icon_tooltip_shown", TEXT_COPIED: "text_copied", TEXT_SHARED: "text_shared", NAV_DRAWER_OPENED: "nav_drawer_opened", SERVER_DRAWER_INTERACT: "server_drawer_interact", EXPERIMENT_USER_TRIGGERED: "experiment_user_triggered", EXPERIMENT_GUILD_TRIGGERED: "experiment_guild_triggered", EXPERIMENT_USER_TRIGGERED_FALLBACK: "experiment_user_triggered_fallback", EXPERIMENT_GUILD_TRIGGERED_FALLBACK: "experiment_guild_triggered_fallback", EXPERIMENT_USER_TRIGGERED_IGNORED: "experiment_user_triggered_ignored", EXPERIMENT_GUILD_TRIGGERED_IGNORED: "experiment_guild_triggered_ignored", EXPERIMENT_DM_TRIGGERED: "experiment_dm_triggered", EXPERIMENT_CUSTOM_EVENT: "experiment_custom_event", EXPERIMENT_SAVE_EXPOSURE_FAILED: "experiment_save_exposure_failed", EXPERIMENT_FETCH_IGNORED: "experiment_fetch_ignored", EXPERIMENT_USER_EVALUATION_EXPOSED: "experiment_user_evaluation_exposed", EXPERIMENT_USER_EXPOSURE_SUPPRESSED: "experiment_user_exposure_suppressed", EXPERIMENT_INSTALLATION_EVALUATION_EXPOSED: "experiment_installation_evaluation_exposed", EXPERIMENT_INSTALLATION_EXPOSURE_SUPPRESSED: "experiment_installation_exposure_suppressed", EXPERIMENT_GUILD_EVALUATION_EXPOSED: "experiment_guild_evaluation_exposed", EXPERIMENT_GUILD_EXPOSURE_SUPPRESSED: "experiment_guild_exposure_suppressed", EXPERIMENT_APEX_DEBUGGING_EVENT: "experiment_apex_debugging_event", GUILD_INSIGHTS_SETTINGS_CTA_CLICKED: "guild_insights_settings_cta_clicked", GUILD_SETTINGS_DISCOVERY_VIEWED: "guild_settings_discovery_viewed", GUILD_SETTINGS_DISCOVERY_UPDATED: "guild_settings_discovery_updated", MOD_DASH_SEARCH_MEMBERS: "mod_dash_search_members", MOD_DASH_FILTER_ROLES: "mod_dash_filter_roles", MOD_DASH_FILTER_SAFETY_FLAGS: "mod_dash_filter_safety_flags", MODERATION_ACTION: "moderation_action", MOD_DASH_MEMBERS_TABLE_VIEWED: "mod_dash_members_table_viewed", GUILD_MOD_VIEW_OPENED: "guild_mod_view_opened", OAUTH2_AUTHORIZE_VIEWED: "oauth2_authorize_viewed", OAUTH2_AUTHORIZE_SUCCESS_VIEWED: "oauth2_authorize_success_viewed", OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED: "oauth2_authorize_success_go_to_guild_clicked", OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED: "oauth2_authorize_success_open_app_clicked", OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED: "oauth2_authorize_success_close_clicked", OAUTH2_AUTHORIZE_STEP_VIEWED: "oauth2_authorize_step_viewed", GUILD_OUTAGE_VIEWED: "guild_outage_viewed", CONTACT_SYNC_FLOW_KEY: "relationship_sync_flow", LOGIN_ATTEMPTED: "login_attempted", LOGIN_SUCCESSFUL: "login_successful", PASSWORD_RESET_ATTEMPTED: "password_reset_attempted", ONE_TIME_LOGIN_PAGE_VIEWED: "one_time_login_page_viewed", ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED: "one_time_login_app_detection_attempted", ONE_TIME_LOGIN_CONTINUE_IN_BROWSER_CLICKED: "one_time_login_continue_in_browser_clicked", ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED: "one_time_login_back_to_login_clicked", ONE_TIME_LOGIN_ATTEMPTED: "one_time_login_attempted", ONE_TIME_LOGIN_ERROR: "one_time_login_error", ONE_TIME_LOGIN_MODAL_OPENED: "one_time_login_modal_opened", ONE_TIME_LOGIN_MODAL_CANCEL_CLICKED: "one_time_login_modal_cancel_clicked", REPLY_STARTED: "reply_started", GUILD_TEMPLATE_APP_OPENED: "guild_template_app_opened", GUILD_TEMPLATE_OPENED: "guild_template_opened", GUILD_TEMPLATE_RESOLVED: "guild_template_resolved", GUILD_TEMPLATE_LINK_SENT: "guild_template_link_sent", ACTIVITY_FEED_CUSTOMIZATION_OPENED: "af_customization_opened", ACTIVITY_FEED_CUSTOMIZATION_SAVED: "af_customization_saved", ACTIVITY_FEED_VOICE_CHANNEL_VISITED: "af_voice_channel_visited", ACTIVITY_FEED_GUILD_VISITED: "af_guild_visited", ACTIVITY_FEED_DM_VISITED: "af_dm_visited", ACTIVITY_FEED_VIEWED: "af_viewed", AGE_GATE_SUBMITTED: "age_gate_submitted", AGE_GATE_ACTION: "age_gate_action", REGISTER_SUBMIT_ERRORED: "register_submit_errored", GUILD_WELCOME_SCREEN_SETTINGS_UPDATED: "guild_welcome_screen_settings_updated", GUILD_WELCOME_SCREEN_OPTION_SELECTED: "guild_welcome_screen_option_selected", MESSAGE_REPORTED: "message_reported", EXPRESSION_PICKER_TAB_CLICKED: "expression_picker_tab_clicked", EXPRESSION_PICKER_KAOMOJI_SELECTED: "expression_picker_kaomoji_selected", EXPRESSION_PICKER_OPENED: "expression_picker_opened", EXPRESSION_PICKER_CATEGORY_SELECTED: "expression_picker_category_selected", EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED: "expression_picker_category_collapse_toggled", EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED: "expression_picker_soundboard_sound_previewed", EXPRESSION_PICKER_SOUNDBOARD_SOUNDS_LOADED: "expression_picker_soundboard_sounds_loaded", EXPRESSION_PICKER_STICKER_SHOP_VIEWED: "expression_picker_sticker_shop_viewed", EXPRESSION_PICKER_EXPRESSION_FOCUS: "expression_picker_expression_focus", EXPRESSION_PICKER_EXPRESSION_SELECTED: "expression_picker_expression_selected", EXPRESSION_PICKER_LOCKED_EXPRESSION_SELECTED: "expression_picker_locked_expression_selected", EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED: "emoji_picker_three_row_collapse_toggled", EXPRESSION_FAVORITED: "expression_favorited", REACTION_PICKER_OPENED: "reaction_picker_opened", REACTION_PICKER_TAB_CLICKED: "reaction_picker_tab_clicked", SUPER_REACTION_BALANCE_VIEWED: "super_reaction_balance_viewed", SUPER_REACTION_NOTIFICATIONS_ENABLED: "super_reaction_notifications_enabled", DOUBLE_TAP_REACT_EMOJI_UPDATED: "double_tap_react_emoji_updated", STICKER_PACK_VIEW_ALL: "sticker_pack_view_all", STICKER_SEARCH_VIEW_ALL: "sticker_search_view_all", STICKER_SUGGESTIONS_ENABLED_TOGGLED: "sticker_suggestions_enabled_toggled", STICKERS_IN_AUTOCOMPLETE_TOGGLED: "stickers_in_autocomplete_toggled", AUTO_SUGGEST_DISPLAYED: "auto_suggest_displayed", AUTO_SUGGEST_EXPRESSION_SELECTED: "auto_suggest_expression_selected", NUDGE_DISPLAYED: "nudge_displayed", NUDGE_OPENED: "nudge_opened", STICKER_ATTACHED: "sticker_attached", EXPRESSION_TOOLTIP_VIEWED: "expression_tooltip_viewed", CHAT_INPUT_COMPONENT_VIEWED: "chat_input_component_viewed", TEXT_AREA_CTA_CLICKED: "text_area_cta_clicked", CHAT_INPUT_ACTIVITY_BUTTON_CLICKED: "chat_input_activity_button_clicked", CHAT_INPUT_OMNI_BUTTON_ACTION: "chat_input_omni_button_action", IN_APP_CAMERA_USED: "in_app_camera_used", MEDIA_PICKER_ACTION_SHEET_ENGAGED: "media_picker_action_sheet_engaged", GUILD_MEMBERSHIP_GATE_SETTINGS_UPDATED: "guild_membership_gate_settings_updated", REQUEST_TO_SPEAK_INITIATED: "request_to_speak_initiated", PROMOTED_TO_SPEAKER: "promoted_to_speaker", START_STAGE_OPENED: "start_stage_opened", USER_CUSTOM_CALL_SOUND_SETTING_UPDATED: "user_custom_call_sound_setting_updated", USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED: "user_custom_call_sound_setting_guild_removed", MKTG_APPLICATION_STEP: "mktg_application_step", SERVER_SETUP_CTA_CLICKED: "server_setup_cta_clicked", HELP_CLICKED: "help_clicked", EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED: "emoji_upsell_popout_more_emojis_opened", FILE_UPLOAD_ALERT_VIEWED: "file_upload_alert_viewed", FAILED_MESSAGE_RESOLVED: "failed_message_resolved", VIEW_AS_ROLES_SELECTED: "view_as_roles_selected", GUILD_CREATION_INTENT_SELECTED: "guild_creation_intent_selected", MOBILE_REDESIGN_TOGGLED: "mobile_redesign_toggled", MOBILE_REDESIGN_FEEDBACK: "mobile_redesign_feedback", GUILDS_DOCK_TAB_SELECTED: "guilds_dock_tab_selected", GUILDS_DOCK_OPENED: "guilds_dock_opened", GUILDS_DOCK_ITEM_CLICKED: "guilds_dock_item_clicked", GUILDS_DOCK_TAB_SCROLL_STARTED: "guilds_dock_tab_scroll_started", GUILDS_DOCK_RECENTLY_ACTIVE_GUILDS_VIEWED: "guilds_dock_recently_active_guilds_viewed", GUILDS_DOCK_ALL_SERVERS_VIEWED: "guilds_dock_all_servers_viewed", GUILDS_DOCK_SUMMARIES_VIEWED: "guilds_dock_summaries_viewed", GUILD_FOLDER_CLICKED: "guild_folder_clicked", GUILD_FOLDER_CREATED: "guild_folder_created", CHANNEL_AUTOCOMPLETE_OPEN: "channel_autocomplete_open", CHANNEL_AUTOCOMPLETE_SELECTED: "channel_autocomplete_selected", AUTOMATED_MESSAGE_RECEIVED: "automated_message_received", AUTOMATED_MESSAGE_DISMISSED: "automated_message_dismissed", ACTIVITY_REPORT_PROBLEM: "activity_report_problem", ACTIVITY_REPORT_DONT_SHOW: "activity_report_dont_show", VIBEGRATIONS_FEEDBACK: "vibegrations_feedback", ACTIVITY_ENABLE_HARDWARE_ACCELERATION: "activity_enable_hardware_acceleration", ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED: "activities_center_control_tray_button_hovered", ACTIVITIES_MINI_SHELF_HOVERED: "activities_mini_shelf_hovered", ACTIVITIES_WHATS_NEW_OPENED: "activities_whats_new_opened", ACTIVITIES_WHATS_NEW_CLICKED: "activities_whats_new_clicked", ROLE_PAGE_VIEWED: "role_page_viewed", DROPS_ACTIVITY_PANEL_BUTTON_CLICK: "drops_activity_panel_button_click", DROPS_ACTIVITY_PANEL_POPOVER_CTA_CLICK: "drops_activity_panel_popover_cta_click", APPLICATION_COMMAND_BROWSER_OPENED: "application_command_browser_opened", APPLICATION_COMMAND_BROWSER_SCROLLED: "application_command_browser_scrolled", APPLICATION_COMMAND_BROWSER_JUMPED: "application_command_browser_jumped", APPLICATION_COMMAND_BROWSER_SEARCH_RESULT_VIEWED: "application_command_browser_search_result_viewed", APPLICATION_COMMAND_SECTION_SELECTED: "application_command_section_selected", APPLICATION_COMMAND_SELECTED: "application_command_selected", APPLICATION_COMMAND_OPTION_PRESSED: "application_command_option_pressed", APPLICATION_COMMAND_OPTIONAL_OPTION_ADDED: "application_command_optional_option_added", APPLICATION_COMMAND_OPTIONAL_OPTION_REMOVED: "application_command_optional_option_removed", APPLICATION_COMMAND_USED: "application_command_used", APPLICATION_COMMAND_VALIDATION_FAILED: "application_command_validation_failed", APPLICATION_COMMAND_LOAD_TIMING: "application_command_load_timing", APPLICATION_COMMAND_SEARCH_OPEN_TIMING: "application_command_search_open_timing", APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE: "application_command_option_string_autocomplete_performance", APPLICATION_COMMAND_PERFORMANCE: "application_command_performance", APPLICATION_COMMAND_CACHE_FETCH: "application_command_cache_fetch", APPLICATION_COMMAND_TOP_OF_FUNNEL: "application_command_top_of_funnel", APPLICATION_ADD_TO_SERVER_CLICKED: "application_add_to_server_clicked", PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED: "premium_application_subscription_manage_cta_clicked", CLOUD_PLAY_CTA_CLICKED: "cloud_play_cta_clicked", PLAY_CTA_DISPLAYED: "play_cta_displayed", PLAY_CTA_IMPRESSION: "play_cta_impression", PLAY_CTA_CLICKED: "play_cta_clicked", CHANNEL_ATTACH_MENU_USE_APPS_CLICKED: "channel_attach_menu_use_apps_clicked", FORTNITE_GFNJOIN_CLICKED: "fortnite_gfnjoin_clicked", FORTNITE_DOWNLOAD_CLICKED: "fortnite_download_clicked", APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED: "app_launcher_entrypoint_button_clicked", APP_LAUNCHER_SEARCH_QUERY_TYPED: "app_launcher_search_query_typed", APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED: "app_launcher_empty_state_encountered", APP_LAUNCHER_CLOSED: "app_launcher_closed", APP_LAUNCHER_COMMAND_CLOSED: "app_launcher_command_closed", APP_LAUNCHER_FRECENTS_SEEN: "app_launcher_frecents_seen", APP_LAUNCHER_FRECENTS_TOGGLED: "app_launcher_frecents_toggled", APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED: "app_launcher_oauth2_authorize_opened", APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED: "app_launcher_oauth2_authorize_succeeded", APP_LAUNCHER_SECTION_VIEW_MORE: "app_launcher_section_view_more", APP_LAUNCHER_ACTIVITY_ITEM_SELECTED: "app_launcher_activity_item_selected", APP_LAUNCHER_SEARCH_FOCUSED: "app_launcher_search_focused", APP_LAUNCHER_EXPANDED: "app_launcher_expanded", APP_LAUNCHER_APPLICATION_LINK_COPIED: "app_launcher_application_link_copied", APP_OAUTH2_LINK_EMBED_URL_SENT: "app_oauth2_link_embed_url_sent", APP_OAUTH2_LINK_EMBED_CTA_CLICKED: "app_oauth2_link_embed_cta_clicked", APP_OAUTH2_LINK_EMBED_URL_CLICKED: "app_oauth2_link_embed_url_clicked", COMMANDS_MIGRATION_TOOLTIP_DISMISSED: "commands_migration_tooltip_dismissed", COMMANDS_MIGRATION_TOOLTIP_VIEWED: "commands_migration_tooltip_viewed", POPULAR_APPLICATION_COMMAND_CLICKED: "popular_application_command_clicked", APP_MANAGE_CTA_CLICKED: "app_manage_cta_clicked", REPORT_APPLICATION_CLICKED: "report_application_clicked", CAPTCHA_SERVED: "captcha_served", CAPTCHA_EVENT: "captcha_event", RECAPTCHA_MODAL_EVENT: "recaptcha_modal_event", CHANNEL_PERMISSIONS_PAGE_VIEWED: "channel_permissions_page_viewed", DOMAIN_MIGRATED: "domain_migrated", MESSAGE_EDIT_UP_ARROW: "message_edit_up_arrow", APPLICATION_GENERATED_GENERIC_EVENT: "application_generated_generic_event", USER_FLOW_TRANSITION: "user_flow_transition", ROLE_TEMPLATE_SELECTED: "role_template_selected", USER_REPORT_SUBMITTED: "user_report_submitted", CAPTCHA_FAILED: "captcha_failed", MEMBER_LIST_ADD_MEMBERS_CLICKED: "member_list_add_members_clicked", CONTACT_SYNC_TOGGLED: "contact_sync_toggled", NAME_SUBMITTED: "name_submitted", USER_DISCOVERY_UPDATED: "user_discovery_updated", SOUNDPACK_UPDATED: "soundpack_updated", NOTIFICATION_CTA_CLICKED: "notification_cta_clicked", MESSAGE_LENGTH_LIMIT_REACHED: "message_length_limit_reached", YOU_TAB_AVATAR_PRESS: "you_tab_avatar_press", YOU_TAB_SETTINGS_ICON_PRESS: "you_tab_settings_icon_press", YOU_TAB_NITRO_ICON_PRESS: "you_tab_nitro_icon_press", YOU_TAB_CUSTOM_STATUS_PRESS: "you_tab_custom_status_press", YOU_TAB_EDIT_PROFILE_PRESS: "you_tab_edit_profile_press", USER_SETTINGS_SEARCH_PRESS: "user_settings_search_press", USER_SETTINGS_SEARCH_QUERY_ENTERED: "user_settings_search_query_entered", USER_SETTINGS_SEARCH_RESULT_PRESS: "user_settings_search_result_press", USER_SETTINGS_SEARCH_CLOSED: "user_settings_search_closed", USER_SETTINGS_GAME_DETECTION_TOGGLE: "user_settings_game_detection_toggle", USER_SETTINGS_MERCH_LINK_CLICKED: "user_settings_merch_link_clicked", USER_SETTINGS_MERCH_LINK_CONFIRMED: "user_settings_merch_link_confirmed", USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION: "user_settings_report_incorrect_game_detection", USER_SETTINGS_SWIPE_TO_REPLY_TOGGLE: "user_settings_swipe_to_reply_toggle", USER_SETTINGS_URL_PARSED: "user_settings_url_parsed", USER_SETTINGS_URL_PARSING_FAILED: "user_settings_url_parsing_failed", THREAD_BROWSER_TAB_CHANGED: "thread_browser_tab_changed", THREAD_NOTIFICATION_SETTINGS_UPDATED: "thread_notification_settings_updated", THREAD_CREATION_STARTED: "thread_creation_started", THREAD_NUDGE_SHOWN: "thread_nudge_shown", MESSAGE_ALSO_SEND_TO_CHANNEL_SENT: "message_also_send_to_channel_sent", MESSAGE_ALSO_SEND_TO_CHANNEL_TOGGLED: "message_also_send_to_channel_toggled", REPLY_MESSAGE_STARTED: "reply_message_started", REPLIED_MESSAGE_CLICKED: "replied_message_clicked", MESSAGE_SHORTCUT_ACTION_SENT: "message_shortcut_action_sent", FORUM_CHANNEL_POSTS_SORTED: "forum_channel_posts_sorted", FORUM_CHANNEL_LAYOUT_UPDATED: "forum_channel_layout_updated", FORUM_POST_LINK_COPIED: "forum_post_link_copied", FORUM_CHANNEL_ONBOARDING_CLICKED: "forum_channel_onboarding_clicked", FORUM_CHANNEL_ENABLE_AUTOMOD_CLICKED: "forum_channel_enable_automod_clicked", FORUM_CHANNEL_ENABLE_PREVIEW_CLICKED: "forum_channel_enable_preview_clicked", FORUM_UPSELL_MODAL_CLICKED: "forum_upsell_modal_clicked", FORUM_ADD_MEDIA_TO_ORIGINAL_POST_CLICKED: "forum_add_media_to_original_post_clicked", FORUM_CHANNEL_MEDIA_UPLOADER_CLICKED: "forum_channel_media_uploader_clicked", FORUM_CHANNEL_SEARCHED: "forum_channel_searched", FORUM_CHANNEL_SEARCH_CLEARED: "forum_channel_search_cleared", FORUM_CHANNEL_CREATE_NEW_POST_CLICKED: "forum_channel_create_new_post_clicked", FORUM_CHANNEL_CREATE_NEW_POST_KEYBIND_USED: "forum_channel_create_new_post_keybind_used", FORUM_CHANNEL_NEW_POST_DRAFT_CREATED: "forum_channel_new_post_draft_created", FORUM_CHANNEL_NEW_POST_DRAFT_CLEARED: "forum_channel_new_post_draft_cleared", FORUM_CHANNEL_TAG_FILTER_CLICKED: "forum_channel_tag_filter_clicked", FORUM_CHANNEL_POST_CREATED: "forum_channel_post_created", FORUM_CHANNEL_SCROLLED: "forum_channel_scrolled", FORUM_CHANNEL_MORE_POSTS_LOADED: "forum_channel_more_posts_loaded", FORUM_CHANNEL_POST_CLICKED: "forum_channel_post_clicked", FORUM_CHANNEL_SEEN_BATCH: "forum_channel_seen_batch", FORUM_CHANNEL_GRID_UPSELL_VIEWED: "forum_channel_grid_upsell_viewed", MESSAGE_DISPATCH_SESSION_METADATA_FOUND: "message_dispatch_session_metadata_found", MEDIA_POST_PREVIEW_EMBED_CLICKED: "media_post_preview_embed_clicked", MEDIA_POST_SHARE_PROMPT_CLICKED: "media_post_share_prompt_clicked", GUILD_SCHEDULED_EVENT_VIEWED: "guild_scheduled_event_viewed", GUILD_SCHEDULED_EVENT_PURCHASE_INITIATED: "guild_scheduled_event_purchase_initiated", GUILD_SCHEDULED_EVENT_LINK_COPIED: "guild_scheduled_event_link_copied", SIGNUP_VIEWED: "signup_viewed", SIGNUP_COMPLETED: "signup_completed", DISCOVERY_SETUP_POPULAR_TAG_CLICKED: "discovery_setup_popular_tag_clicked", DISCOVERY_SETUP_CTA_CLICKED: "discovery_setup_cta_clicked", TOOLTIP_VIEWED: "tooltip_viewed", WELCOME_CTA_CLICKED: "welcome_cta_clicked", OUTBOUND_PROMOTION_NOTICE_CLICKED: "outbound_promotion_notice_clicked", USER_AGE_SUBMITTED: "user_age_submitted", GUILD_DIRECTORY_CHANNEL_VIEWED: "guild_directory_channel_viewed", GUILD_DIRECTORY_SEARCH: "guild_directory_search", HUB_ONBOARDING_CAROUSEL_SCROLLED: "hub_onboarding_carousel_scrolled", HUB_STUDENT_PROMPT_CLICKED: "hub_student_prompt_clicked", ADD_FRIEND_OTHER_PLACES_HUB_CLICKED: "add_friend_other_places_hub_clicked", ADD_FRIEND_OTHER_PLACES_DISCOVERY_CLICKED: "add_friend_other_places_discovery_clicked", MESSAGE_DELETED_BY_ADMIN: "message_deleted_by_admin", SURVEY_SUBMITTED: "survey_submitted", CANCELLATION_FLOW_STARTED: "cancellation_flow_started", CANCELLATION_FLOW_STEP: "cancellation_flow_step", CANCELLATION_FLOW_COMPLETED: "cancellation_flow_completed", CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED: "cancellation_flow_discount_offer_prompt_viewed", ATTACHMENT_UPLOAD_STARTED: "attachment_upload_started", ATTACHMENT_UPLOAD_FINISHED: "attachment_upload_finished", IMAGE_LOADING_COMPLETED: "image_loading_completed", MEDIA_PLAY_FINISHED: "media_play_finished", MESSAGE_SENT_WITH_ATTACHMENTS: "message_sent_with_attachments", MESSAGE_LINK_COPIED: "message_link_copied", IMAGE_HOVERED: "image_hovered", APP_IMAGE_RECS_MENU_VIEWED: "app_image_recs_menu_viewed", MESSAGE_SWIPE_ACTION_SENT: "message_swipe_action_sent", CHAT_CONTEXT_BAR_ACTION_CANCELED: "chat_context_bar_action_canceled", SHARE_SHEET_ACTION: "share_sheet_action", SHARE_MESSAGE_SENT: "share_message_sent", EXTERNAL_SHARE_OPENED: "external_share_opened", MESSAGE_POPOUT_MENU_OPENED_MOBILE: "message_popout_menu_opened_mobile", MESSAGE_POPOUT_MENU_OPENED_DESKTOP: "message_popout_menu_opened_desktop", VOICE_CODEC_DETECTED: "voice_codec_detected", VOICE_SETTINGS_CHANGED: "voice_settings_changed", SYSTEM_CAMERA_SETTINGS_OPENED: "system_camera_settings_opened", VOICE_AND_VIDEO_SETTINGS_UPDATED: "voice_and_video_settings_updated", CALL_BUTTON_CLICKED: "call_button_clicked", CALL_MENU_ITEM_INTERACTED: "call_menu_item_interacted", CALL_TILE_POPPED_OUT: "call_tile_popped_out", USER_VOLUME_SETTING_UPDATED: "user_volume_setting_updated", VIDEO_OPENH264_DOWNLOADED: "video_openh264_downloaded", CLIP_SAVE_KEYBIND_PRESSED: "clip_save_keybind_pressed", CLIP_SAVED: "clip_saved", CLIP_SAVE_FAILURE: "clip_save_failure", CLIPS_INIT_FAILURE: "clips_init_failure", CLIP_DELETED: "clip_deleted", CLIP_GALLERY_CARD_CLICKED: "clip_gallery_card_clicked", CLIP_GALLERY_CARD_BUTTON_CLICKED: "clip_gallery_card_button_clicked", CLIPS_FILTER_CHANGED: "clips_filter_changed", CLIP_EDITED: "clip_edited", CLIP_SHARED: "clip_shared", CLIPS_HARDWARE_CLASSIFICATION: "clips_hardware_classification", CLIPS_ENABLED_TOGGLED: "clips_enabled_toggled", CLIPS_SETTINGS_UPDATED: "clips_settings_updated", CLIP_TIMELINE_TRIMMED: "clip_timeline_trimmed", CLIP_REMOTE_TRIGGER_SENT: "clip_remote_trigger_sent", CLIPS_SESSION_STARTED: "clips_session_started", CLIPS_SESSION_ENDED: "clips_session_ended", CLIP_PROMOTED: "clip_promoted", CLIP_EXPORTED: "clip_exported", STANDALONE_BILLING_FLOW_STARTED: "standalone_billing_flow_started", DUNNING_EMAIL_LANDING_VIEWED: "dunning_email_landing_viewed", PAST_DUE_CHECKOUT_INVOICE_LOAD_FAILED: "past_due_checkout_invoice_load_failed", PAST_DUE_CHECKOUT_STANDALONE_BOUNCED: "past_due_checkout_standalone_bounced", PAST_DUE_CHECKOUT_STANDALONE_PAGE_VIEWED: "past_due_checkout_standalone_page_viewed", MOBILE_OPEN_STANDALONE_MANAGE_SUBSCRIPTION_PAGE: "mobile_open_standalone_manage_subscription_page", MOBILE_OPEN_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE: "mobile_open_standalone_guild_boost_checkout_page", STANDALONE_MANAGE_SUBSCRIPTION_PAGE_VIEWED: "standalone_manage_subscription_page_viewed", INBOUND_PROMOTION_VIEWED: "inbound_promotion_viewed", INBOUND_PROMOTION_ELIGIBILITY_CHECKED: "inbound_promotion_eligibility_checked", CONTEXT_MENU_IMAGE_COPIED: "context_menu_image_copied", CONTEXT_MENU_IMAGE_SAVED: "context_menu_image_saved", CONTEXT_MENU_LINK_COPIED: "context_menu_link_copied", CONTEXT_MENU_LINK_OPENED: "context_menu_link_opened", CONTEXT_MENU_IMAGE_COPY_FAILED: "context_menu_image_copy_failed", CONTEXT_MENU_IMAGE_SAVE_FAILED: "context_menu_image_save_failed", CONTEXT_MENU_MEDIA_LINK_COPIED: "context_menu_media_link_copied", MEDIA_DOWNLOAD_BUTTON_TAPPED: "media_download_button_tapped", MEDIA_VIEWER_SESSION_COMPLETED: "media_viewer_session_completed", MEDIA_VIEWER_SHARE_BUTTON_TAPPED: "media_viewer_share_button_tapped", MEDIA_VIEWER_DOWNLOAD_BUTTON_TAPPED: "media_viewer_download_button_tapped", MEDIA_VIEWER_AFFORDANCE_CLICKED: "media_viewer_affordance_clicked", MEDIA_VIEWER_IMAGE_COPIED: "media_viewer_image_copied", MEDIA_VIEWER_IMAGE_SAVED: "media_viewer_image_saved", MEDIA_VIEWER_LINK_COPIED: "media_viewer_link_copied", MEDIA_VIEWER_LINK_OPENED: "media_viewer_link_opened", FILE_SIZE_LIMIT_EXCEEDED: "file_size_limit_exceeded", MOBILE_FILE_PICKER_ERROR: "mobile_file_picker_error", PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED: "premium_uncancel_winback_cta_clicked", EASTER_EGG_INTERACTED: "easter_egg_interacted", APRIL_FOOLS_2026_OPENED: "april_fools_2026_opened", APRIL_FOOLS_2026_VIDEO_CLICKED: "april_fools_2026_video_clicked", RPC_COMMAND_SENT: "rpc_command_sent", RPC_SERVER_ERROR_CAUGHT: "rpc_server_error_caught", RPC_SUBSCRIPTION_REQUESTED: "rpc_subscription_requested", GUILD_DEFAULT_DMS_UPDATED: "guild_default_dms_updated", SLASH_COMMAND_SUGGESTIONS_TOGGLED: "slash_command_suggestions_toggled", LINK_SECURITY_CHECK_BLOCKED: "link_security_check_blocked", A11Y_RUNTIME_VIOLATION: "a11y_runtime_violation", ROLE_SUBSCRIPTION_LISTING_UPSELL_PAGE_VIEWED: "role_subscription_listing_upsell_page_viewed_v3", ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED: "role_subscription_purchase_system_message_cta_clicked", ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED: "role_subscription_purchase_system_message_clicked", ROLE_SUBSCRIPTION_LISTING_CREATED: "role_subscription_listing_created_v2", ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED: "role_subscription_listing_template_selector_exited", MULTI_ACCOUNT_ACCOUNT_REMOVE: "multi_account_account_remove", MULTI_ACCOUNT_SWITCH_ATTEMPT: "multi_account_switch_attempt", MULTI_ACCOUNT_SWITCH_SUCCESS: "multi_account_switch_success", MULTI_ACCOUNT_SWITCH_FAILURE: "multi_account_switch_failure", MULTI_ACCOUNT_SWITCH_TIMEOUT: "multi_account_switch_timeout", MULTI_ACCOUNT_SWITCH_TOKEN_COLLISION_WRITE: "multi_account_switch_token_collision_write", MULTI_ACCOUNT_SWITCH_TOKEN_COLLISION: "multi_account_switch_token_collision", MULTI_ACCOUNT_SWITCH_READY_MISMATCH: "multi_account_switch_ready_mismatch", MULTI_ACCOUNT_VALIDATE_TOKEN_USER_MISMATCH: "multi_account_validate_token_user_mismatch", CHANGE_LANGUAGE_MODAL_SHOWN: "change_language_modal_shown", CHANGE_LANGUAGE_MODAL_YES_CLICKED: "change_language_modal_yes_clicked", CHANGE_LANGUAGE_MODAL_NO_CLICKED: "change_language_modal_no_clicked", UPLOAD_DRAG_AND_DROP_COUNT: "upload_drag_and_drop_count", UPLOAD_FILE_LIMIT_ERROR: "upload_file_limit_error", UPDATE_USER_SETTINGS_LOCAL: "update_user_settings_local", UPDATE_SOUNDBOARD_SETTINGS: "update_soundboard_settings", SYNC_ACROSS_CLIENTS_TOGGLED: "sync_across_clients_toggled", CHANNEL_INFORMATION_OPENED: "channel_information_opened", CHANNEL_INFORMATION_TAB_CLICKED: "channel_information_tab_clicked", PREMIUM_GIFT_UPSELL_VIEWED: "premium_gift_upsell_viewed", ONBOARDING_VALUE_PROPS_VIEWED: "onboarding_value_props_viewed", GUILD_JOIN_FEEDBACK: "guild_join_feedback", FEED_LOADED: "feed_loaded", FEED_ITEM_INTERACTED: "feed_item_interacted", FEED_ITEM_SEEN_BATCH: "feed_item_seen_batch", FEED_ITEM_SEEN_LONG: "feed_item_seen_long", FEED_ITEM_CONTENT_GEN_FEEDBACK: "feed_item_content_gen_feedback", FEED_SHOWN: "feed_shown", ACTIVE_CHANNEL_CLICKED: "active_channel_clicked", ACTIVE_CHANNELS_LOADED: "active_channels_loaded", HOME_OPENED: "home_opened", HOME_BACKGROUNDED: "home_backgrounded", HOME_EXITED: "home_exited", HOME_EVENT_CLICKED: "home_event_clicked", HOME_EVENTS_LOADED: "home_events_loaded", HOME_REPORT_PROBLEM: "home_report_problem", HOME_FEEDBACK_PROMPT_VIEWED: "home_feedback_prompt_viewed", HOME_FEEDBACK_SUBMITTED: "home_feedback_submitted", HOME_FIRST_SCROLL_STARTED: "home_first_scroll_started", HOME_PANEL_VIEWED: "home_panel_viewed", ICYMI_ONBOARDING_SCREEN_SKIPPED: "icymi_onboarding_screen_skipped", ICYMI_ONBOARDING_CATEGORY_TOGGLED: "icymi_onboarding_category_toggled", ICYMI_ONBOARDING_GUILD_TOGGLED: "icymi_onboarding_guild_toggled", ICYMI_FEED_EMPTY_LOADING_SEEN: "feed_empty_loading_seen", ICYMI_FEED_EMPTY_LOADING_ABANDONED: "feed_empty_loading_abandoned", ICYMI_FEED_EMPTY_LOADING_COMPLETE: "feed_empty_loading_complete", FEED_SESSION_STARTED: "feed_session_started", FEED_SESSION_COMPLETED: "feed_session_completed", FEED_ITEM_1S_DWELLED: "feed_item_1s_dwelled", FEED_ITEM_DWELLED: "feed_item_dwelled", FEED_ITEM_ACTIONED: "feed_item_actioned", FEED_FILTER_ACTIONED: "feed_filter_actioned", FEED_PAGE_ACTIONED: "feed_page_actioned", TOPICAL_NAV_ENTRYPOINT_IMPRESSION: "topical_nav_entrypoint_impression", TOPICAL_NAV_TOPICS_UNIT_IMPRESSION: "topical_nav_topics_unit_impression", TOPICAL_NAV_PREVIEW_IMPRESSION: "topical_nav_preview_impression", TOPICAL_NAV_TOPICS_UNIT_CLICKED: "topical_nav_topics_unit_clicked", TOPICAL_NAV_FOCUS_MODE_IMPRESSION: "topical_nav_focus_mode_impression", TOPICAL_NAV_FOCUS_MODE_DISMISSED: "topical_nav_focus_mode_dismissed", TOPICAL_NAV_THUMBS_CLICKED: "topical_nav_thumbs_clicked", TOPICAL_NAV_THUMBS_DOWN_REASON_SELECTED: "topical_nav_thumbs_down_reason_selected", MOBILE_WEB_HANDOFF_FAILURE: "mobile_web_handoff_failure", PREMIUM_UNCANCEL_WINBACK_MODAL_VIEWED: "premium_uncancel_winback_modal_viewed", STARTER_CHANNELS_CTA_CLICKED: "starter_channels_cta_clicked", STARTER_CHANNEL_ROW_SELECTED: "starter_channel_row_selected", PREMIUM_FEATURE_USAGE: "premium_feature_usage_v2", PREMIUM_FEATURE_TRY_OUT: "premium_feature_try_out", TEXT_IN_VOICE_OPENED: "text_in_voice_opened", TEXT_IN_VOICE_CLOSED: "text_in_voice_closed", GUILD_AUTOMOD_FEEDBACK: "guild_automod_feedback", GUILD_RAID_REPORTED: "guild_raid_reported", GUILD_RAID_FEEDBACK: "guild_raid_feedback", GUILD_RAID_ALERTS_SETUP: "guild_raid_alerts_setup", GUILD_RAID_ALERT_SENT: "guild_raid_alert_sent", GUILD_SAFETY_MENTION_RAID_SETUP_CTA_CLICKED: "guild_safety_mention_raid_setup_cta_clicked", GUILD_RAID_LOCKDOWN_FEEDBACK: "guild_raid_lockdown_feedback", GUILD_RAID_INTERVENTION_STATE_CHANGE: "guild_raid_intervention_state_change", BULK_MODERATION_ACTION_STARTED: "bulk_moderation_action_started", BULK_MODERATION_ACTION_COMPLETED: "bulk_moderation_action_completed", NEW_MEMBER_MENTION_CTA_CLICKED: "new_member_mention_cta_clicked", MOBILE_OVERLAY_CLOSED: "mobile_overlay_closed", MOBILE_OVERLAY_OPENED: "mobile_overlay_opened", MOBILE_OVERLAY_TOGGLED: "mobile_overlay_toggled", POGGERMODE_SETTINGS_UPDATED: "poggermode_settings_updated", IAR_IGNORE_USER_BUTTON_CLICKED: "iar_ignore_user_button_clicked", IAR_BLOCK_USER_BUTTON_CLICKED: "iar_block_user_button_clicked", IAR_MUTE_USER_BUTTON_CLICKED: "iar_mute_user_button_clicked", IAR_LEAVE_GUILD_BUTTON_CLICKED: "iar_leave_guild_button_clicked", IAR_DELETE_MESSAGE_BUTTON_CLICKED: "iar_delete_message_button_clicked", IAR_CLICK_DONT_LIKE: "iar_click_dont_like", IAR_NAVIGATE: "iar_navigate", IAR_MODAL_OPEN: "iar_modal_open", IAR_MODAL_CLOSE: "iar_modal_close", IAR_FEEDBACK_MODAL_VIEWED: "iar_feedback_modal_viewed", IAR_FEEDBACK_SUBMITTED: "iar_feedback_submitted", IAR_SETTINGS_UPSELLS_ACTION: "iar_settings_upsells_action", IAR_DEAUTHORIZE_APP_BUTTON_CLICKED: "iar_deauthorize_app_button_clicked", IAR_REMOVE_APP_BUTTON_CLICKED: "iar_remove_app_button_clicked", BLOCK_USER_FEEDBACK_SUBMITTED: "block_user_feedback_submitted", IGNORE_USER_FEEDBACK_SUBMITTED: "ignore_user_feedback_submitted", EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED: "emoji_upload_file_size_limit_exceeded", EMOJI_UPLOAD_STARTED: "emoji_upload_started", EMOJI_UPLOAD_COMPLETED: "emoji_upload_completed", EMOJI_FILE_RESIZED: "emoji_file_resized", STICKER_FILE_RESIZED: "sticker_file_resized", STICKER_UPLOAD_STARTED: "sticker_upload_started", STICKER_UPLOAD_COMPLETED: "sticker_upload_completed", STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED: "sticker_upload_file_size_limit_exceeded", APP_DIRECTORY_OPENED: "app_directory_opened", APP_DIRECTORY_PAGE_VIEWED: "app_directory_page_viewed", APP_DIRECTORY_SEARCH_STARTED: "app_directory_search_started", APP_DIRECTORY_SEARCHED: "app_directory_searched", APP_DIRECTORY_CTA_CLICKED: "app_directory_cta_clicked", APP_DIRECTORY_CATEGORY_CLICKED: "app_directory_category_clicked", APP_DIRECTORY_COLLECTION_VIEWED: "app_directory_collection_viewed", APP_DIRECTORY_COLLECTION_ITEM_CLICKED: "app_directory_collection_item_clicked", APP_DIRECTORY_COLLECTION_SCROLLED: "app_directory_collection_scrolled", APP_DIRECTORY_SUPPORT_SERVER_JOINED: "app_directory_support_server_joined", APP_DIRECTORY_APPLICATION_EXTERNAL_LINK_CLICKED: "app_directory_application_external_link_clicked", APP_DIRECTORY_APPLICATION_LINK_COPIED: "app_directory_application_link_copied", APP_DIRECTORY_RECOMMENDATION_CLICKED: "app_directory_recommendation_clicked", APP_DIRECTORY_RECOMMENDATIONS_VIEWED: "app_directory_recommendations_viewed", APP_DIRECTORY_SEARCH_RESULT_CLICKED: "app_directory_search_result_clicked", APP_DIRECTORY_PROFILE_TAB_CLICKED: "app_directory_profile_tab_clicked", APP_DIRECTORY_CAROUSEL_IMAGE_LOADED: "app_directory_carousel_image_loaded", APP_DIRECTORY_PROFILE_EMBED_APP_INFO_CLICKED: "app_directory_profile_embed_app_info_clicked", APP_DIRECTORY_PROFILE_EMBED_VIEWED: "app_directory_profile_embed_viewed", APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED: "app_directory_profile_invalid_embed_viewed", APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED: "app_directory_profile_embed_url_clicked", APP_DIRECTORY_PROFILE_EMBED_SENT: "app_directory_profile_embed_sent", APP_DIRECTORY_PAGE_SCROLLED: "app_directory_page_scrolled", APP_DIRECTORY_INSTALL_CLICKED: "app_directory_install_clicked", APP_DIRECTORY_LAUNCH_CLICKED: "app_directory_launch_clicked", APP_DIRECTORY_MANAGE_APP_CLICKED: "app_directory_manage_app_clicked", POPULAR_CHANNEL_CLICKED: "popular_channel_clicked", URL_CLICKED: "url_clicked", LINK_CLICKED: "link_clicked", ROLE_STYLE_SETTING_UPDATED: "role_style_setting_updated", OFFICIAL_MESSAGE_STYLE_SETTING_UPDATED: "official_message_style_setting_updated", PREMIUM_MARKETING_SURFACE_SIDE_BAR_SELECT: "premium_marketing_surface_side_bar_select", PREMIUM_MARKETING_SURFACE_VIEWED: "premium_marketing_surface_viewed", PREMIUM_MARKETING_SURFACE_EXITED: "premium_marketing_surface_exited", PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM: "premium_marketing_surface_reached_bottom", PREMIUM_MARKETING_COMPONENT_BOTTOM_VIEWED: "premium_marketing_component_bottom_viewed", PREMIUM_MARKETING_GUILD_SIDEBAR_ENTRYPOINT_VIEWED: "premium_marketing_guild_sidebar_entrypoint_viewed", PREMIUM_AGGREGATE_UPSELL_MODAL_INTERACTION: "premium_aggregate_upsell_modal_interaction", PREMIUM_SETTINGS_INTERACTED: "premium_settings_interacted", MOBILE_NITRO_HOME_TAB_SWITCHED: "mobile_nitro_home_tab_switched", MOBILE_NITRO_HOME_PERKS_CAROUSEL_SCROLLED: "mobile_nitro_home_perks_carousel_scrolled", TIERED_TENURE_BADGE_CLICKED: "tiered_tenure_badge_clicked", TIERED_TENURE_BADGE_LEVEL_UP_REPLAY_CLICKED: "tiered_tenure_badge_level_up_replay_clicked", TIERED_TENURE_BADGE_PERK_CARD_CLICKED: "tiered_tenure_badge_perk_card_clicked", VOICE_CALL_TRANSFER: "voice_call_transfer", DM_SAFETY_COACHMARK_ACTION: "dm_safety_coachmark_action", MESSAGE_REQUEST_ACTION: "message_request_action", VOICE_CHANNEL_EFFECT_BAR_VIEWED: "voice_channel_effect_bar_viewed", VOICE_CHANNEL_EFFECT_SENT: "voice_channel_effect_sent", VOICE_CHANNEL_EFFECT_VIEWED: "voice_channel_effect_viewed", VOICE_CHANNEL_EFFECT_FANCY_ANIMATION_TOGGLED: "voice_channel_effect_fancy_animation_toggled", VOICE_CHANNEL_EFFECT_EMOJI_PICKER_EXPANDED: "voice_channel_effect_emoji_picker_expanded", PREMIUM_MARKETING_PLAN_COMPARISON_PAGE_VIEWED: "premium_marketing_plan_comparison_page_viewed", PREMIUM_MARKETING_SCROLLED_TO_LAST: "premium_marketing_scrolled_to_last", VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_SET: "voice_channel_game_activity_indicator_set", VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED: "voice_channel_game_activity_indicator_viewed", VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED: "voice_channel_game_activity_indicator_hovered", LOCAL_VOICE_SETTINGS_LOADED: "local_voice_settings_loaded", HIGHLIGHTS_TEST_LOADED: "highlights_test_loaded", CHANNEL_LIST_UPDATED: "channel_list_updated", CHANNEL_BANNER_VIEWED: "channel_banner_viewed", CHANNEL_BANNER_CTA_CLICKED: "channel_banner_cta_clicked", CHANNEL_LIST_UNREAD_BADGE_VIEWED: "channel_list_unread_badge_viewed", CHANNEL_LIST_UNREAD_BADGE_CLICKED: "channel_list_unread_badge_clicked", USER_CONTINUE_IN_BROWSER_CLICKED: "user_continue_in_browser_clicked", IN_APP_NOTIFICATION_CLICKED: "in_app_notification_clicked", IN_APP_NOTIFICATION_SHOWN: "in_app_notification_shown", IN_APP_NOTIFICATION_DISMISSED: "in_app_notification_dismissed", IN_APP_NOTIFICATION_SUPPRESSED: "in_app_notification_suppressed", IN_APP_NOTIFICATION_CREATED: "in_app_notification_created", IN_APP_NOTIFICATION_LONG_PRESSED: "in_app_notification_long_pressed", IN_APP_NOTIFICATION_ACCESSORY_CLICKED: "in_app_notification_accessory_clicked", IN_APP_NOTIFICATION_EXPANDED: "in_app_notification_expanded", PASSPORT_CHALLENGE_VIEWED: "passport_challenge_viewed", PASSPORT_CHALLENGE_STARTED: "passport_challenge_started", PASSPORT_CHALLENGE_FINISHED: "passport_challenge_finished", PASSPORT_ENTRY_VIEWED: "passport_entry_viewed", PASSPORT_ROLE_POPOUT_VIEWED: "passport_role_popout_viewed", GUILD_ONBOARDING_LOADED: "guild_onboarding_loaded", GUILD_ONBOARDING_STEP_VIEWED: "guild_onboarding_step_viewed", GUILD_ONBOARDING_STEP_COMPLETED: "guild_onboarding_step_completed", GUILD_ONBOARDING_CONNECTION_CLICKED: "guild_onboarding_connection_clicked", GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED: "guild_settings_onboarding_wizard_progress_cta_clicked", GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED: "guild_settings_onboarding_edit_page_clicked", GUILD_SETTINGS_GUIDE_UPDATED: "guild_settings_guide_updated", SERVER_GUIDE_VIEWED: "server_guide_viewed", SERVER_GUIDE_CHANNEL_SELECTED: "server_guide_channel_selected", SERVER_GUIDE_ACTION_COMPLETED: "server_guide_action_completed", ASSISTANT_STEP_COMPLETED: "assistant_step_completed", FOR_LATER_SAVED_MESSAGES_CREATE: "for_later_saved_messages_create", FOR_LATER_SAVED_MESSAGES_DELETE: "for_later_saved_messages_delete", FOR_LATER_SAVED_MESSAGE_JUMP: "for_later_saved_message_jump", FOR_LATER_REMINDER_NOTIFICATION_CLICKED: "for_later_reminder_notification_clicked", MEDIA_PICKER_INFINITE_SCROLL_PAGED: "media_picker_infinite_scroll_paged", MESSAGE_MENU_GOOGLE_SEARCHED: "message_menu_google_searched", MESSAGE_MENU_TIME_TO_CLOSE: "message_menu_time_to_close", MESSAGE_MENU_TIME_TO_SELECT: "message_menu_time_to_select", EVENT_RINGTONE_TOGGLED: "event_ringtone_toggled", USER_PROFILE_ACTION: "user_profile_action", USER_PROFILE_UI_VIEWED: "user_profile_ui_viewed", USER_PROFILE_ACTIVITY_JOINED: "user_profile_activity_joined", USER_PROFILE_ACTIVITY_ACTION: "user_profile_activity_action", USER_PROFILE_BADGE_PRESSED: "user_profile_badge_pressed", USER_PROFILE_RECENT_GAMES_VIEWED: "user_profile_recent_games_viewed", USER_PROFILE_RECENT_GAMES_SETTING_DISABLED: "user_profile_recent_games_setting_disabled", USER_PROFILE_BADGE_HOVERED: "user_profile_badge_hovered", USER_PROFILE_BADGE_ACTION: "user_profile_badge_action", BADGE_DIRECTORY_ACTION: "badge_directory_action", USER_PROFILE_EDIT_ACTION: "user_profile_edit_action", USER_PROFILE_EDIT_SAVED: "user_profile_edit_saved", USER_PROFILE_REPORT_GAME_DETECTION: "user_profile_report_game_detection", GAME_DETECTION_FEEDBACK_MODAL: "game_detection_feedback_modal", DETECTABLE_GAME_SEARCHED_BATCHED: "detectable_game_searched_batched", DM_PROFILE_TOGGLED: "dm_profile_toggled", USER_PROFILE_WISHLIST_ACTION: "user_profile_wishlist_action", WISHLIST_UPDATED: "wishlist_updated", WISHLIST_ITEM_CLICKED: "wishlist_item_clicked", WISHLIST_ITEM_HOVERED: "wishlist_item_hovered", WISHLIST_ITEM_PURCHASED: "wishlist_item_purchased", PREMIUM_WOW_MOMENT_VIEWED: "premium_wow_moment_viewed", PREMIUM_WOW_MOMENT_MEDIA_PREFETCH_TRIGGER: "premium_wow_moment_media_prefetch_trigger", PREMIUM_BRAND_REFRESH_WOW_MOMENT_VIEWED: "premium_brand_refresh_wow_moment_viewed", PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_PREFETCHING: "premium_brand_refresh_wow_moment_assets_prefetching", PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_PREFETCH_SUCCESS: "premium_brand_refresh_wow_moment_assets_prefetch_success", PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_NOT_LOADED_ON_CONFIRMATION: "premium_brand_refresh_wow_moment_assets_not_loaded_on_confirmation", PREMIUM_FEATURE_HELPER_ACTIONS: "premium_feature_helper_actions", PREMIUM_FEATURE_TUTORIAL_STEPS: "premium_feature_tutorial_steps", PREMIUM_FEATURE_TUTORIAL_STEPS_NEXT: "premium_feature_tutorial_steps_next", PREMIUM_FEATURE_TUTORIAL_FLOW_DISABLED: "premium_feature_tutorial_flow_disabled", PREMIUM_APP_CANCELLATION_SURVEY_SUBMITTED: "premium_app_cancellation_survey_submitted", GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_TOGGLED: "guild_role_subscription_store_page_toggled", GUILD_ROLE_SUBSCRIPTION_TEAM_SETUP_CLICKED: "guild_role_subscription_team_setup_clicked", GUILD_ROLE_SUBSCRIPTION_SETUP_MODAL_CLOSED: "guild_role_subscription_setup_modal_closed", GUILD_SHOP_PREVIEW_CLICK: "guild_shop_preview_click", GUILD_SHOP_COPY_LINK: "guild_shop_copy_link", GUILD_SHOP_EMBED_CLICKED: "guild_shop_embed_clicked", MESSAGE_ACTION_SHEET_OPENED: "message_action_sheet_opened", MESSAGE_ACTION_SHEET_OPTION_PRESSED: "message_action_sheet_option_pressed", SNOWSGIVING_PAGE_CTA_CLICKED: "snowsgiving_page_cta_clicked", REACTION_ACTION_SHEET_OPENED: "reaction_action_sheet_opened", MESSAGE_EMBEDS_ACTION_COMPLETED: "message_embeds_action_completed", SEND_MESSAGE_FAILURE: "send_message_failure", SEND_MESSAGE_QUEUED: "send_message_queued", SEND_MESSAGE_ROUNDTRIP: "send_message_roundtrip", VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED: "vc_tile_activities_entry_point_viewed", VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED: "vc_tile_activities_entry_point_closed", KV_FIELD_TRIAL_EXECUTED: "kv_field_trial_executed", REMOTE_COMMAND_SENT: "remote_command_sent", CLIENT_THEME_UPDATED: "client_theme_updated", CLIENT_THEME_PREVIEW_VIEWED: "client_theme_preview_viewed", CLIENT_THEME_PREVIEW_CLOSED: "client_theme_preview_closed", CUSTOM_THEME_RESET_BUTTON_CLICKED: "custom_theme_reset_button_clicked", CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED: "custom_themes_editor_controls_changed", CUSTOM_THEMES_BACK_BUTTON_CLICKED: "custom_themes_back_button_clicked", CUSTOM_THEMES_SURPRISE_BUTTON_CLICKED: "custom_themes_surprise_button_clicked", CUSTOM_THEMES_UPDATED: "custom_themes_updated", CUSTOM_THEMES_COACHMARK_NOT_SHOWN_REASON: "custom_themes_coachmark_not_shown_reason", CUSTOM_THEMES_BANNER_CLICKED: "custom_themes_banner_clicked", CUSTOM_THEME_SHARED: "custom_theme_shared", CUSTOM_THEME_SHARE_APPLIED: "custom_theme_share_applied", CUSTOM_THEME_SHARE_PREVIEWED: "custom_theme_share_previewed", GUILD_DROPDOWN_MENU_VIEWED: "guild_dropdown_menu_viewed", VOICE_MESSAGE_PLAYBACK_ENDED: "voice_message_playback_ended", VOICE_MESSAGE_PLAYBACK_FAILED: "voice_message_playback_failed", VOICE_MESSAGE_PLAYBACK_STARTED: "voice_message_playback_started", VOICE_MESSAGE_RECORDED: "voice_message_recorded", FAMILY_CENTER_VIEWED: "family_center_viewed", FAMILY_CENTER_ACTION: "family_center_action", SAFETY_HUB_VIEWED: "safety_hub_viewed", SAFETY_HUB_ACTION: "safety_hub_action", AGE_VERIFICATION_MODAL_VIEWED: "age_verification_modal_viewed", AGE_VERIFICATION_MODAL_CLICKED: "age_verification_modal_clicked", AGE_VERIFICATION_DM_CLICKED: "age_verification_dm_clicked", AGE_VERIFICATION_TOAST_VIEWED: "age_verification_toast_viewed", NSFW_SPACE_WARNING_MODAL_VIEWED: "nsfw_space_warning_modal_viewed", NSFW_SPACE_WARNING_MODAL_CLICKED: "nsfw_space_warning_modal_clicked", BOOSTING_UPSELL_VIEWED: "boosting_upsell_viewed", BOOSTING_UPSELL_CLICKED: "boosting_upsell_clicked", BOOSTING_MARKETING_VIDEO_PLAYED: "boosting_marketing_video_played", BOOSTING_MARKETING_VIDEO_COMPLETED: "boosting_marketing_video_completed", GUILD_BOOST_PAST_DUE_CANCELLATION_FLOW_COMPLETED: "guild_boost_past_due_cancellation_flow_completed", GUILD_BOOST_PAST_DUE_CANCEL_MODAL_VIEWED: "guild_boost_past_due_cancel_modal_viewed", TNS_SKU_REPORT_SUBMITTED: "tns_sku_report_submitted", TNS_USER_REPORT_SUBMITTED: "tns_user_report_submitted", MJ_CHAT_BAR_CTA_CLICKED: "mj_chat_bar_cta_clicked", MJ_CHAT_BAR_VIEWED: "mj_chat_bar_viewed", PREMIUM_TRIAL_OFFER_ACTION_SHEET_VIEWED: "premium_trial_offer_action_sheet_viewed", PREMIUM_TRIAL_OFFER_ACTION_SHEET_CTA_CLICKED: "premium_trial_offer_action_sheet_cta_clicked", PREMIUM_TRIAL_OFFER_ACTION_SHEET_DISMISSED: "premium_trial_offer_action_sheet_dismissed", PREMIUM_DISCOUNT_OFFER_ACTION_SHEET_VIEWED: "premium_discount_offer_action_sheet_viewed", PREMIUM_DISCOUNT_OFFER_ACTION_SHEET_DISMISSED: "premium_discount_offer_action_sheet_dismissed", PREMIUM_DISCOUNT_OFFER_ACTION_SHEET_CTA_CLICKED: "premium_discount_offer_action_sheet_cta_clicked", PREMIUM_GROUP_INVITE_FRIENDS_MODAL_VIEWED: "premium_group_invite_friends_modal_viewed", PREMIUM_GROUP_INVITE_FRIENDS_CTA_CLICKED: "premium_group_invite_friends_cta_clicked", PREMIUM_GROUP_INVITE_FRIENDS_RESULT: "premium_group_invite_friends_result", PREMIUM_GROUP_INVITE_EMBED_ACCEPT_CLICKED: "premium_group_invite_embed_accept_clicked", PREMIUM_GROUP_INVITE_EMBED_CANCEL_CLICKED: "premium_group_invite_embed_cancel_clicked", PREMIUM_GROUP_ACCEPT_INVITE_MODAL_VIEWED: "premium_group_accept_invite_modal_viewed", PREMIUM_GROUP_ACCEPT_INVITE_CTA_CLICKED: "premium_group_accept_invite_cta_clicked", PREMIUM_GROUP_ACCEPT_INVITE_ERROR: "premium_group_accept_invite_error", PREMIUM_GROUP_MEMBER_CANCELLATION_STARTED: "premium_group_member_cancellation_started", PREMIUM_GROUP_MEMBER_CANCELLATION_STEP: "premium_group_member_cancellation_step", PREMIUM_GROUP_MEMBER_CANCELLATION_COMPLETED: "premium_group_member_cancellation_completed", PREMIUM_GROUP_REMOVE_MEMBER_MODAL_VIEWED: "premium_group_remove_member_modal_viewed", PREMIUM_GROUP_REMOVE_MEMBER_CTA_CLICKED: "premium_group_remove_member_cta_clicked", PREMIUM_GROUP_SUBSCRIPTION_CARD_INVITE_CLICKED: "premium_group_subscription_card_invite_clicked", PREMIUM_GROUP_SUBSCRIPTION_CARD_REMOVE_MEMBER_CLICKED: "premium_group_subscription_card_remove_member_clicked", PREMIUM_GROUP_SUBSCRIPTION_CARD_CANCEL_INVITE_CLICKED: "premium_group_subscription_card_cancel_invite_clicked", PREMIUM_GROUP_CANCEL_INVITE_MODAL_VIEWED: "premium_group_cancel_invite_modal_viewed", PREMIUM_GROUP_CANCEL_INVITE_CTA_CLICKED: "premium_group_cancel_invite_cta_clicked", PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED: "premium_group_purchase_confirmation_viewed", PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED: "premium_group_purchase_friend_selector_opened", PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_SKIPPED: "premium_group_purchase_friend_selector_skipped", FETCH_USER_OFFER_STARTED: "fetch_user_offer_started", SHARE_NITRO_FLOW_STEPS: "share_nitro_flow_steps", REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED: "referral_program_share_modal_cta_clicked", REFERRAL_PROGRAM_SHARE_CTA_CLICKED: "referral_program_share_cta_clicked", CACHE_STORE_CACHE_SKIPPED: "cache_store_cache_skipped", GATEWAY_BRIDGE_TIMEOUT: "gateway_bridge_timeout", GATEWAY_SOCKET_RESET: "gateway_socket_reset", SESSION_START_CLIENT: "session_start_client", APPLE_PARTNER_IAP_REQUEST_SENT: "apple_partner_iap_request_sent", POMELO_ERRORS: "pomelo_errors", POMELO_EDIT_STEP_VIEWED: "pomelo_edit_step_viewed", MESSAGE_COMPOSER_TRANSITIONED: "message_composer_transitioned", MESSAGE_COMPOSER_SEARCH_RESULT_CLICKED: "message_composer_search_result_clicked", MESSAGE_COMPOSER_MAX_USERS_ADDED: "message_composer_max_users_added", REMIX_SENT: "remix_sent", REMIX_DOWNLOADED: "remix_downloaded", REMIX_SURFACE_EXIT_MODAL: "remix_surface_exit_modal", REMIXING_ACTION_REDONE: "remixing_action_redone", REMIXING_ACTION_UNDONE: "remixing_action_undone", REMIXING_SURFACE_EXIT_CANCELED: "remixing_surface_exit_canceled", REMIXING_SURFACE_EXITED: "remixing_surface_exited", REMIXING_SURFACE_OPENED: "remixing_surface_opened", ROUTE_UNMOUNT: "route_unmount", REMIXING_COMPONENT_ADDED: "remixing_component_added", REMIXING_COMPONENT_TOOL_CANCELED: "remixing_component_tool_canceled", REMIXING_COMPONENT_TOOL_OPENED: "remixing_component_tool_opened", REMIXING_BADGE_PRESSED: "remixing_badge_pressed", REMIXING_UPSELL_ACCEPTED: "remixing_upsell_accepted", REMIXING_UPSELL_DISMISSED: "remixing_upsell_dismissed", CONSOLE_LAN_DETECTION_OPT_IN: "console_lan_detection_opt_in", CONSOLE_LAN_DETECTION_CONSOLE_DETECTED: "console_lan_detection_console_detected", GDM_STARTER_APPS_VIEWED: "gdm_starter_apps_viewed", DCF_CAP_EXCEEDED: "dcf_cap_exceeded", ACK_COMMUNITY_MESSAGES: "ack_community_messages", VOICE_PANEL_TAB_OPENED: "voice_panel_tab_opened", VOICE_PANEL_SCREENSHARE_BUTTON_TAPPED: "voice_panel_screenshare_button_tapped", VOICE_PANEL_LAYOUT_DESYNC: "voice_panel_layout_desync", ANNOUNCEMENT_MESSAGE_LINK_CLICKED: "announcement_message_link_clicked", ANNOUNCEMENT_MESSAGE_VIEWED: "announcement_message_viewed", OFFICIAL_MESSAGE_VIEWED: "official_message_viewed", REDESIGN_NAV_BAR_CLICKED: "redesign_nav_bar_clicked", REDESIGN_NAV_BAR_RENDERED: "redesign_nav_bar_rendered", CHANNEL_BACK_NAVIGATED: "channel_back_navigated", MEDIA_VIDEO_CAPABILITIES_DETECTED: "media_video_capabilities_detected", MEDIA_ATTACHMENT_PLAYBACK_STARTED: "media_attachment_playback_started", MEDIA_ATTACHMENT_PLAYBACK_ENDED: "media_attachment_playback_ended", MEDIA_PIP_ENDED: "media_pip_ended", FEEDBACK_FORM_VIEWED: "feedback_form_viewed", FEEDBACK_FORM_SUBMITTED: "feedback_form_submitted", HOTSPOT_HIDDEN: "hotspot_hidden", USER_SETTINGS_IN_APP_FEEDBACK_OPTED_OUT: "user_settings_in_app_feedback_opted_out", APP_ICON_UPDATED: "app_icon_updated", APP_ICON_PREVIEW_VIEWED: "app_icon_preview_viewed", APP_ICON_AUTO_RESET: "app_icon_auto_reset", CHANNEL_LIST_END_REACHED: "channel_list_end_reached", COLLECTIBLES_SHOP_VIEWED: "collectibles_shop_viewed", COLLECTIBLES_SHOP_SCROLLED: "collectibles_shop_scrolled", COLLECTIBLES_EXPIRY_MODAL_CLOSED: "collectibles_expiry_modal_closed", COLLECTIBLES_TILE_IMPRESSION: "collectibles_tile_impression", COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED: "collectibles_share_link_button_clicked", COLLECTIBLES_SHOP_ELEMENT_CLICKED: "collectibles_shop_element_clicked", SHOP_THIS_LOOK_MENU_ACTION: "shop_this_look_menu_action", SHOP_THIS_LOOK_ROW_ACTION: "shop_this_look_row_action", COLLECTIBLES_SHOP_PERF_TRACKED: "collectibles_shop_perf_tracked", COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED: "collectibles_shop_feed_shuffle_clicked", COLLECTIBLES_SHOP_FEED_SORT_CHANGED: "collectibles_shop_feed_sort_changed", SHOP_CARD_HOVERED: "shop_card_hovered", SHOP_PRODUCT_DETAIL_PAGE_CLICKED: "shop_product_detail_page_clicked", SHOP_CARD_CLICKED: "shop_card_clicked", SLIDE_CAROUSEL_ITEM_VIEWED: "slide_carousel_item_viewed", SLIDE_CAROUSEL_PAGINATION_CLICKED: "slide_carousel_pagination_clicked", SHOP_HEADER_CAROUSEL_CTA_CLICKED: "shop_header_carousel_cta_clicked", UPDATER_METRICS_DOWNLOAD: "updater_metrics_download", UPDATER_METRICS_INSTALL: "updater_metrics_install", UPDATER_METRICS_COMBINED: "updater_metrics_combined", UPDATER_METRICS_TRANSITION_STATUS: "updater_metrics_transition_status", HANGOUT_WINDOW_CLICKED: "hangout_window_clicked", HANGOUT_WINDOW_CONTENT_CLEARED: "hangout_window_content_cleared", HANGOUT_WINDOW_CONTENT_SET: "hangout_window_content_set", HANGOUT_WINDOW_GIF_CATEGORY_CLICKED: "hangout_window_gif_category_clicked", MEMBER_VERIFICATION_APPLICATION_VIEWED: "member_verification_application_viewed", GUILD_MEMBER_APPLICATION_REPORTED: "guild_member_application_reported", GUILD_APPLICATION_ABANDONED: "guild_application_abandoned", GUILD_MEMBER_APPLICATION_ACTION: "guild_member_application_action", GUILD_MEMBER_APPLICATION_VIEWED: "guild_member_application_viewed", GUILD_MEMBER_APPLICATION_INTERVIEW_MESSAGE: "guild_member_application_interview_message", GUILD_PROFILE_VIEWED: "guild_profile_viewed", CHANNEL_PROMPT_ACTION_CLICKED: "channel_prompt_action_clicked", GPLAY_PURCHASE_FAILED: "gplay_purchase_failed", LIVE_ACTIVITY_SETTINGS_UPDATED: "live_activity_settings_updated", GUILD_BAN_REMOVED: "guild_ban_removed", POLL_CREATION_CANCELLED: "poll_creation_cancelled", POLL_SHOW_RESULTS_CLICKED: "poll_show_results_clicked", POLL_VOTE_SELECTED: "poll_vote_selected", ACTIVITY_REACTOR_INTERACTED: "activity_reactor_interacted", GUILD_TOOLTIP_SHOWN: "guild_tooltip_shown", GUILD_TOOLTIP_CARD_CLICKED: "guild_tooltip_card_clicked", MEMBERLIST_CONTENT_FEED_TOGGLED: "memberlist_content_feed_expander_toggled", MEMBERLIST_CONTENT_FEED_HIDDEN: "memberlist_content_feed_hidden_toggled", CONTENT_POPOUT_EMOJI_CLICKED: "content_inventory_reaction_popout_emoji_clicked", MEMBERLIST_POPOUT_SHARE_TO_CHANNEL_TOGGLED: "memberlist_popout_share_to_channel_toggled", RANKING_ITEMS_SEEN_MUST_BE_SAMPLED: "ranking_items_seen", RANKING_ITEM_INTERACTED_MUST_BE_SAMPLED: "ranking_item_interacted", LEAGUE_OF_LEGENDS_MATCH_DATA_NOT_FETCHING: "league_of_legends_match_data_not_fetching", GAME_PROFILE_ACTION: "game_profile_action", GAME_PROFILE_EMBED_ACTION: "game_profile_embed_action", GAME_PROFILE_OPEN: "game_profile_open", GAME_PROFILE_CLOSE: "game_profile_close", GAME_PROFILE_ENTRY_POINT_AVAILABLE: "game_profile_entry_point_available", GAME_PROFILE_FOLLOW_SURVEY: "game_profile_follow_survey", GAME_PROFILE_FEEDBACK: "game_profile_feedback", GAME_PROFILE_LINK_EMBED_SENT: "game_profile_link_embed_sent", USER_NITRO_TENURE_REWARD_ACKNOWLEDGED: "user_nitro_tenure_reward_acknowledged", REVIEW_REQUEST_DEFERRED: "review_request_deferred", REVIEW_REQUEST_ELIGIBILITY_CHECKED: "review_request_eligibility_checked", REVIEW_REQUEST_SHOW_ATTEMPTED: "review_request_show_attempted", DM_SETTINGS_UPSELL_ACTION: "dm_settings_upsell_action", STOREFRONT_PURCHASE_CLICKED: "storefront_purchase_clicked", VIEW_PREMIUM_APP_STOREFRONT: "view_premium_app_storefront", VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD: "view_premium_app_expanded_product_card", STOREFRONT_STORE_MESSAGE_EMBED_CLICKED: "storefront_store_message_embed_clicked", STOREFRONT_SKU_MESSAGE_EMBED_CLICKED: "storefront_sku_message_embed_clicked", STOREFRONT_COPY_LINK_CLICKED: "storefront_copy_link_clicked", PAYMENT_HISTORY_CONNECT_ACCOUNT_BUTTON_CLICKED: "payment_history_connect_account_button_clicked", SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED: "slayer_storefront_game_launch_clicked", SLAYER_STOREFRONT_CLAIM_MODAL_CLOSE_BUTTON_CLICKED: "slayer_storefront_claim_modal_close_button_clicked", SLAYER_STOREFRONT_MODAL_CLOSED: "slayer_storefront_modal_closed", SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED: "slayer_storefront_link_account_step_viewed", SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED: "slayer_storefront_account_link_clicked", SLAYER_STOREFRONT_GIFT_CODE_CLAIM_CLICKED: "slayer_storefront_gift_code_claim_clicked", SLAYER_STOREFRONT_PAGE_VIEWED: "slayer_storefront_page_viewed", SLAYER_STOREFRONT_PAGE_SCROLLED: "slayer_storefront_page_scrolled", SLAYER_STOREFRONT_CARD_HOVERED: "slayer_storefront_card_hovered", SLAYER_STOREFRONT_CARD_IMPRESSION: "slayer_storefront_card_impression", SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED: "slayer_storefront_card_element_clicked", SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED: "slayer_storefront_pdp_element_clicked", SLAYER_STOREFRONT_ORBS_PURCHASE_GATE_VIEWED: "slayer_storefront_orbs_purchase_gate_viewed", SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED: "slayer_storefront_page_element_clicked", SLAYER_STOREFRONT_FORWARD_MODAL_ELEMENT_CLICKED: "slayer_storefront_forward_modal_element_clicked", SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_STARTED: "slayer_storefront_purchase_eligibility_started", SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_SKIPPED: "slayer_storefront_purchase_eligibility_skipped", SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_COMPLETED: "slayer_storefront_purchase_eligibility_completed", COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED: "commerce_shop_vc_gift_button_viewed", COMMERCE_SHOP_GIFTING_BREADCRUMB_VIEWED: "commerce_shop_gifting_breadcrumb_viewed", USER_SERVER_PRIVACY_SETTINGS_ACTION: "user_server_privacy_settings_action", RUNNING_GAME_OVERRIDE_ADDED: "running_game_override_added", GUILD_NSFW_GATE_VIEWED: "guild_nsfw_gate_viewed", FORWARD_MESSAGE_STARTED: "forward_message_started", FORWARD_MESSAGE_CANCELLED: "forward_message_cancelled", FORWARD_MESSAGE_SENT: "forward_message_sent", FORWARD_COPY_LINK: "forward_copy_link", FORWARD_ADD_RECIPIENT: "forward_add_recipient", FORWARD_EDIT_SEARCH: "forward_edit_search", FORWARD_EDIT_CONTEXT_MESSAGE: "forward_edit_context_message", FORWARD_ONE_TAP_UNDO: "forward_one_tap_undo", FORWARD_ONE_TAP_VIEW: "forward_one_tap_view", FORWARD_BREADCRUMB_CLICKED: "forward_breadcrumb_clicked", CDM_LOAD_STATUS: "cdm_load_status", CDM_READY_COMPLETE: "cdm_ready_complete", DESKTOP_TTI: "desktop_tti", DESKTOP_TTI_V2: "desktop_tti_v2", DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY: "desktop_perf_attributed_module_memory", DESKTOP_PERF_ATTRIBUTED_MODULE_MEMORY_CALLSTACK: "desktop_perf_attributed_module_memory_callstack", DESKTOP_PERF_CPU_PROFILE: "desktop_perf_cpu_profile", DESKTOP_PERF_HEARTBEAT: "desktop_perf_heartbeat", RTC_PANEL_VIEWED: "rtc_panel_viewed", E2EE_USER_VERIFICATION_VIEWED: "e2ee_user_verification_viewed", E2EE_USER_VERIFIED: "e2ee_user_verified", E2EE_USER_VERIFICATION_FAILED: "e2ee_user_verification_failed", E2EE_PUBLIC_KEY_MISMATCH: "e2ee_public_key_mismatch", E2EE_USER_VERIFICATION_SHARE_CLICKED: "e2ee_user_verification_share_clicked", E2EE_USER_VERIFICATION_CODE_COPIED: "e2ee_user_verification_code_copied", E2EE_CALL_VERIFICATION_CODE_COPIED: "e2ee_call_verification_code_copied", E2EE_CALL_VERIFICATION_SHARE_CLICKED: "e2ee_call_verification_share_clicked", E2EE_STREAM_VERIFICATION_SHARE_CLICKED: "e2ee_stream_verification_share_clicked", E2EE_STREAM_VERIFICATION_CODE_COPIED: "e2ee_stream_verification_code_copied", E2EE_SETTINGS_USER_DELETE: "e2ee_settings_user_delete", E2EE_SETTINGS_DEVICE_DELETE: "e2ee_settings_device_delete", RTC_GAME_SHOP_BUTTON_VIEWED: "rtc_game_shop_button_viewed", RTC_GAME_SHOP_BUTTON_CLICKED: "rtc_game_shop_button_clicked", GAME_DETECTION_DEBUGGING_KEYWORD_MATCH: "game_detection_debugging_keyword_match", GDM_BLOCKED_USER_WARNING_ENGAGEMENT: "gdm_blocked_user_warning_engagement", GDM_BLOCKED_USER_WARNING_VIEWED: "gdm_blocked_user_warning_viewed", VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT: "voice_channel_blocked_user_warning_engagement", CREATE_DM_USER_LIST_CLICKED: "create_dm_user_list_clicked", SEARCH_USER_LIST_STARTED: "search_user_list_started", CREATE_DM_USER_ROW_INTERACTED: "create_dm_user_row_interacted", USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED: "user_account_email_change_attempted", USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE: "user_account_email_change_reason_continue", USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED: "user_account_email_change_reason_selected", USER_ACCOUNT_EMAIL_CHANGE_SAVE_NEW_EMAIL: "user_account_email_change_save_new_email", USER_ACCOUNT_EMAIL_CHANGE_WARNING_CONTINUE: "user_account_email_change_warning_continue", HD_STREAMING_POPOUT_DISMISSED: "hd_streaming_popout_dismissed", EMOJI_PICKER_BUTTON_HOVERED: "emoji_picker_button_hovered", NITRO_BASIC_UPSELL_PERK_HOVERED: "nitro_basic_upsell_perk_hovered", POST_ACTION_UPSELL_SHOWN: "post_action_upsell_shown", POST_ACTION_UPSELL_DISMISSED: "post_action_upsell_dismissed", POST_ACTION_UPSELL_PRIMARY_ACTION_CLICKED: "post_action_upsell_primary_action_clicked", POST_ACTION_UPSELL_SECONDARY_ACTION_CLICKED: "post_action_upsell_secondary_action_clicked", FRIEND_ANNIVERSARIES_CHANNEL_VIEWED: "friend_anniversaries_channel_viewed", MEDIA_INPUT_VOLUME_CHANGED: "media_input_volume_changed", MEDIA_OUTPUT_VOLUME_CHANGED: "media_output_volume_changed", VOICE_ACTIVATION_MODE_CHANGED: "voice_activation_mode_changed", VOICE_ACTIVITY_THRESHOLD_CHANGED: "voice_activity_threshold_changed", GUILD_GAME_DISCOVERY_ENTRYPOINT_VIEWED: "guild_game_discovery_entrypoint_viewed", GUILD_GAME_DISCOVERY_ENTRYPOINT_DEEP_LINK_TO_DESKTOP: "guild_game_discovery_entrypoint_deep_link_to_desktop", GLOBAL_DISCOVERY_WITH_GAME_VIEWED: "global_discovery_with_game_viewed", APP_DMS_QUICK_LAUNCHER_IMPRESSION: "app_dms_quick_launcher_impression", APP_DMS_QUICK_LAUNCHER_CLICKED: "app_dms_quick_launcher_clicked", APP_DMS_QUICK_LAUNCHER_HIDDEN: "app_dms_quick_launcher_hidden", MY_ACCOUNT_PAGE_TAB_NAVIGATE: "my_account_page_tab_navigate", USER_VOICE_ACTIVITY_VIEWED: "user_voice_activity_viewed", PARTY_VOICE_ACTIVITY_VIEWED: "party_voice_activity_viewed", SOUNDMOJI_PLAY: "soundmoji_play", SOUNDMOJI_SELECT: "soundmoji_select", SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED: "soundmoji_in_autocomplete_toggled", SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK: "soundmoji_emoji_picker_view_all_click", SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED: "soundmoji_emoji_picker_section_toggled", BLOCK_USER_CONFIRMED: "block_user_confirmed", IGNORE_USER_CONFIRMED: "ignore_user_confirmed", USER_REMEDIATION_ACTION: "user_remediation_action", INVITE_ACCEPT_JOIN_SETTINGS_SET: "invite_accept_join_settings_set", INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED: "invite_accept_join_settings_expanded", INVITE_ACCEPT_DISMISSED: "invite_accept_dismissed", INVITE_ACCEPT_DETAILS_VIEWED: "invite_accept_details_viewed", INVITE_ACCEPT_SOCIAL_LINK_CLICKED: "invite_accept_social_link_clicked", ACTIVITY_PANEL_GAME_CARD_ACTIVITY_POPOUT_REFOCUS_CLICKED: "activity_panel_game_card_activity_popout_refocus_clicked", ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED: "activity_popout_pop_out_button_clicked", ACTIVITY_POPOUT_POP_IN_BUTTON_CLICKED: "activity_popout_pop_in_button_clicked", APP_EMBED_VIEWED: "app_embed_viewed", APP_EMBED_CLICKED: "app_embed_clicked", APP_EMBED_LINK_COPIED: "app_embed_link_copied", APP_EMBED_LINK_SENT: "app_embed_link_sent", CHAT_WALLPAPER_DM_CONTEXT_MENU_ENTRY_POINT_CLICKED: "chat_wallpaper_dm_context_menu_entry_point_clicked", CHAT_WALLPAPER_TOOLBAR_ENTRY_POINT_CLICKED: "chat_wallpaper_toolbar_entry_point_clicked", CHAT_WALLPAPER_PICKER_BLUR_TOGGLED: "chat_wallpaper_picker_blur_toggled", CHAT_WALLPAPER_PICKER_CANCEL_CLICKED: "chat_wallpaper_picker_cancel_clicked", CHAT_WALLPAPER_PICKER_APPLY_CLICKED: "chat_wallpaper_picker_apply_clicked", CHAT_WALLPAPER_USER_SIDE_CLEAR_TOGGLED: "chat_wallpaper_user_side_clear_toggled", CHAT_WALLPAPER_NITRO_LINK_CLICKED: "chat_wallpaper_nitro_link_clicked", CHAT_WALLPAPER_WALLPAPER_OPTION_SELECTED: "chat_wallpaper_wallpaper_option_selected", CHAT_WALLPAPER_DOWNLOADED: "chat_wallpaper_downloaded", CHAT_WALLPAPER_PICKER_COACHMARK_NOT_SHOW_REASON: "chat_wallpaper_picker_coachmark_not_show_reason", DISPLAY_NAME_STYLES_FROM_SETTINGS: "display_name_styles_from_settings", DISPLAY_NAME_STYLES_APPLIED: "display_name_styles_applied", DISPLAY_NAME_STYLES_CLOSED: "display_name_styles_closed", DISPLAY_NAME_STYLES_REMOVED: "display_name_styles_removed", DISPLAY_NAME_STYLES_COLOR_SELECTED: "display_name_styles_color_selected", DISPLAY_NAME_STYLES_SURPRISE_ME: "display_name_styles_surprise_me", DISPLAY_NAME_STYLES_THEME_TOGGLE: "display_name_styles_theme_toggle", DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE: "display_name_styles_accessibility_toggle", DISPLAY_NAME_STYLES_NITRO_CLICKED: "display_name_styles_nitro_clicked", RING_TO_GUILD_VC_BANNER_SHOWN: "impression_ring_to_guild_vc_banner_shown", RING_TO_GUILD_VC_MENU_ITEM_SHOWN: "impression_ring_to_guild_vc_menu_item_shown", RING_CALL_DECLINED: "ring_call_declined", RING_CALL_ACCEPTED: "ring_call_accepted", CHANNEL_ICON_EDIT_PROGRESSED: "channel_icon_edit_progressed", GDM_EDIT_INTERACTED: "gdm_edit_interacted", PRIVATE_CHANNEL_INVITE_MODAL_OPENED: "private_channel_invite_modal_opened", CAN_OPEN_URL_REQUESTED: "can_open_url_requested", MODERATOR_REPORT_ORIGINAL_MESSAGE_LINK_CLICKED: "moderator_report_original_message_link_clicked", MODERATOR_QUEUE_ACTION: "moderator_queue_action", NOTIFICATIONS_INBOX_OPENED: "notifications_inbox_opened", NOTIFICATIONS_INBOX_READY: "notifications_inbox_ready", NOTIFICATIONS_INBOX_ITEM_INTERACTED: "notifications_inbox_item_interacted", NOTIFICATIONS_INBOX_SECTION_INTERACTED: "notifications_inbox_section_interacted", NOTIFICATIONS_INBOX_UNMOUNTED: "notifications_inbox_unmounted", NOTIFICATIONS_INBOX_LOADED: "notifications_inbox_loaded", NOTIFICATIONS_INBOX_DATA_LOADED: "notifications_inbox_data_loaded", CONTEXTUAL_REMINDER_ACTION: "contextual_reminder_action", MASKED_LINK_MODAL_CLICKED: "masked_link_modal_clicked", GAME_STORE_BUTTON_CLICKED: "game_store_button_clicked", ACTIVITY_SHARING_SETTINGS_INTERACTED: "activity_sharing_settings_interacted", RUNNING_GAME_CARD_STATE_CHANGED: "running_game_card_state_changed", BILLING_IP_LOCATION_FETCH_ERROR: "network_action_billing_ip_location_fetch_error", NITRO_PRIVATE_BROWSING_SURVEY_RESPONDED: "nitro_privatebrowsing_surveyresponded", NITRO_PRIVACY_UPSELL_PERKS_CLICKED: "nitro_privacy_upsell_perks_clicked", NITRO_PRIVACY_UPSELL_SETTINGS_CLICKED: "nitro_privacy_upsell_settings_clicked", PREMIUM_FEATURE_ERROR: "premium_feature_error", EMOJI_STUDIO_ENDED: "emoji_studio_ended", PASSWORD_RESET_ACTION: "password_reset_action", HARDWARE_MUTE_GUESSED: "hardware_mute_guessed", HARDWARE_DETECTED: "hardware_detected", GUILD_CHANNEL_RESYNC_REQUESTED: "guild_channel_resync_requested", GUILD_CHANNEL_RESYNC_EXECUTED: "guild_channel_resync_executed", GUILD_CHANNEL_RESYNC_COMPLETED: "guild_channel_resync_completed", GUILD_CHANNEL_RESYNC_FAILED: "guild_channel_resync_failed", GUILD_CHANNEL_RESYNC_CANCELED: "guild_channel_resync_canceled", GUILD_CHANNEL_INTEGRITY_CHECK_REQUESTED: "guild_channel_integrity_check_requested", GUILD_CHANNEL_INTEGRITY_CHECK_EXECUTED: "guild_channel_integrity_check_executed", GUILD_CHANNEL_INTEGRITY_CHECK_COMPLETED: "guild_channel_integrity_check_completed", GUILD_CHANNEL_INTEGRITY_CHECK_FAILED: "guild_channel_integrity_check_failed", GUILD_CHANNEL_INTEGRITY_CHECK_CANCELED: "guild_channel_integrity_check_canceled", SYSTEM_SERVICE_INITIALIZE_ATTEMPTED: "system_service_initialize_attempted", SYSTEM_SERVICE_INSTALL_ATTEMPTED: "system_service_install_attempted", SYSTEM_SERVICE_UNINSTALL_ATTEMPTED: "system_service_uninstall_attempted", ACTIVITY_PANEL_BUTTON_CLICKED: "activity_panel_button_clicked", ACTIVITY_PANEL_SDK_LINK_VIEWED: "activity_panel_sdk_link_viewed", PROMOTION_REWARD_REDEMPTION_ATTEMPTED: "promotion_reward_redemption_attempted", CHECKPOINT_STARTED: "checkpoint_started", CHECKPOINT_CLOSED: "checkpoint_closed", CHECKPOINT_STEP_VIEWED: "checkpoint_step_viewed", CHECKPOINT_SCREENSHOT_TAKEN: "checkpoint_screenshot_taken", CHECKPOINT_CARD_CLICKED: "checkpoint_card_clicked", CHECKPOINT_SIDEKICK_MESSAGE_SENT: "checkpoint_sidekick_message_sent", GAME_SERVER_HOSTING_THIRD_PARTY_CONSENT_ACCEPTED: "game_server_hosting_third_party_consent_accepted", GAME_SERVER_GAME_SELECT_OPENED: "game_server_game_select_opened", GAME_SERVER_GAME_CLICKED: "game_server_game_clicked", GAME_SERVER_SETTINGS_OPENED: "game_server_settings_opened", GAME_SERVER_SKU_SELECTED: "game_server_sku_selected", GAME_SERVER_JOIN_CLICKED: "game_server_join_clicked", GAME_SERVER_COPY_IP_CLICKED: "game_server_copy_ip_clicked", GAME_SERVER_VIEW_GAME_PANEL_CLICKED: "game_server_view_game_panel_clicked", IMPRESSION_GAME_SERVERS_TAB_VIEWED: "impression_game_servers_tab_viewed", IMPRESSION_GAME_SERVER_ACTIVITY_BUTTON: "impression_game_server_activity_button", GAME_SERVER_ACTIVITY_BUTTON_CLICKED: "game_server_activity_button_clicked", GAME_SERVER_ACTIVITY_BUTTON_GUILD_SELECTED: "game_server_activity_button_guild_selected", MEDIA_PICKER_ASSETS_DEBUG: "media_picker_assets_debug", ORB_BALANCE_ACTION_SHEET_ACTION: "orb_balance_action_sheet_action", SESSION_START_PAGE_VIEWED: "session_start_page_viewed", IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED: "impression_gift_option_wishlist_banner_viewed", IMPRESSION_WISHLIST_ITEM: "impression_wishlist_item", GAME_COMMUNITY_UPSELL_VIEWED: "game_community_upsell_viewed", GAME_COMMUNITY_UPSELL_DISMISSED: "game_community_upsell_dismissed", GAME_COMMUNITY_UPSELL_ACCEPTED: "game_community_upsell_accepted", GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD_JOINED: "game_community_multi_guild_upsell_card_joined", GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD_DISMISSED: "game_community_multi_guild_upsell_card_dismissed", ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED: "on_platform_account_link_flow_started", CONNECTION_INDICATOR_SHOWN: "connection_indicator_shown", CACHE_STATS_RECORDED: "cache_stats_recorded", CHANNEL_LATEST_MESSAGES_LOADED_CLICKSTREAM: "channel_latest_messages_loaded_clickstream", CHANNEL_WITH_UNREAD_MENTIONS_LOADED: "channel_with_unread_mentions_loaded", REPLY_NUDGES_CREATED: "reply_nudges_created", REPLY_NUDGE_OPENED: "reply_nudge_opened", REPLY_NUDGE_DISMISSED: "reply_nudge_dismissed", REPLY_NUDGES_SHOWN: "reply_nudges_shown", GUILD_ROOM_OBJECT_INTERACTED: "guild_room_object_interacted", GUILD_ROOM_INTERACTED: "guild_room_interacted", GUILD_ROOM_LAYOUT_TOGGLED: "guild_room_layout_toggled", GUILD_ROOM_OPENED: "guild_room_opened", GUILD_ROOM_SEAT_SELECTED: "guild_room_seat_selected", GUILD_ROOM_USER_INTERACTED: "guild_room_user_interacted", GUILD_ROOM_USER_CONNECTED: "guild_room_user_connected", GUILD_ROOM_USER_DISCONNECTED: "guild_room_user_disconnected", GUILD_ROOM_USER_UPDATED: "guild_room_user_updated", APP_TRANSACTION_ID_SYNCED: "app_transaction_id_synced", PARENTAL_CONSENT_CHECKED: "parental_consent_checked", PARENTAL_CONSENT_WARNING_BANNER_TAPPED: "parental_consent_warning_banner_tapped", PARENTAL_CONSENT_WARNING_SURFACE_SHOWN: "parental_consent_warning_surface_shown", PARENTAL_CONSENT_WARNING_SURFACE_DISMISSED: "parental_consent_warning_surface_dismissed", SEO_PAGE_CWV_MEASURED: "seo_page_cwv_measured", UI_SETTING_INTERACTED: "ui_setting_interacted", FAVORITES_GUILD_VIEWED: "favorites_guild_viewed", FAVORITES_GUILD_ADD_TO_FAVORITES: "favorites_guild_add_to_favorites", FAVORITES_GUILD_REMOVE_FROM_FAVORITES: "favorites_guild_remove_from_favorites", FAVORITES_GUILD_ORDER_UPDATED: "favorites_guild_order_updated", FAVORITES_GUILD_SETTING_TOGGLED: "favorites_guild_setting_toggled", FAVORITES_GUILD_UPSELL_MODAL_OPENED: "favorites_guild_upsell_modal_opened", FAVORITES_GUILD_ADD_MODAL_OPENED: "favorites_guild_add_modal_opened", FRIEND_REQUEST_NOTE_VIEWED: "friend_request_note_viewed", VIBEGRATION_TURN_RESULTED: "vibegration_turn_resulted", VIBEGRATION_DEPLOYED: "vibegration_deployed", VIBEGRATION_ERRORED: "vibegration_errored" };
export const PublicReleaseChannels = { CANARY: "canary", PTB: "ptb", STABLE: "stable" };
export const UserFlags = obj12;
export const ApplicationFlags = frozen11;
export const ChannelNoticeTypes = { MFA_WARNING: "MFA_WARNING", INVITE: "INVITE", QUICKSWITCHER: "QUICKSWITCHER", GUILD_BOOSTING: "PREMIUM_GUILD_SUBSCRIPTIONS", GUILD_BOOSTING_GRACE_PERIOD: "PREMIUM_GUILD_GRACE_PERIOD", PUBLIC_UPSELL: "PUBLIC_UPSELL", MAX_MEMBER_COUNT_100: "MAX_MEMBER_COUNT_100", MAX_MEMBER_COUNT_250: "MAX_MEMBER_COUNT_250", MAX_MEMBER_COUNT: "MAX_MEMBER_COUNT", STAGE_CHANNEL_EVENT: "STAGE_CHANNEL_EVENT", HUB_LINK: "HUB_LINK", GUILD_BANNER: "GUILD_BANNER", CHANNEL_OPT_IN: "CHANNEL_OPT_IN", ROLE_SUBSCRIPTION_MWEB_PURCHASE: "ROLE_SUBSCRIPTION_MWEB_PURCHASE", COMMANDS_MIGRATION: "COMMANDS_MIGRATION", APPLICATION_SUBSCRIPTION_EXPIRATION: "APPLICATION_SUBSCRIPTION_EXPIRATION", HUB_STUDY_ROOM: "HUB_STUDY_ROOM", GUILD_ONBOARDING_UPSELL: "GUILD_ONBOARDING_UPSELL", CLIPS_EDUCATION: "CLIPS_EDUCATION", LINKED_ROLES_ADMIN: "LINKED_ROLES_ADMIN", SUMMARIES: "SUMMARIES", SUMMARIES_ENABLED: "SUMMARIES_ENABLED", CLAN_ADMIN_UPSELL: "CLAN_ADMIN_UPSELL", GAME_CLAIM: "GAME_CLAIM" };
export const DefaultCloudSyncConfiguration = frozen12;
export const CHANNEL_NOTICE_SHOW_DELAY = 86400000;
export const ChannelLayouts = { NORMAL: "normal", MINIMUM: "minimum", NO_CHAT: "no-chat", FULL_SCREEN: "full-screen", HAVEN: "haven" };
export const StreamLayouts = { THEATRE: "theatre", FULL_SCREEN: "full-screen", PIP: "pip", POPOUT: "popout", PORTRAIT: "portrait", LANDSCAPE: "landscape", MINIMIZED: "minimized" };
export const Layers = { CHANNEL_SETTINGS: "CHANNEL_SETTINGS", GUILD_SETTINGS: "GUILD_SETTINGS", RTC_DEBUG: "RTC_DEBUG", COLLECTIBLES_SHOP: "COLLECTIBLES_SHOP", COMPONENT_PLAYGROUND: "COMPONENT_PLAYGROUND" };
export const AuditLogActions = frozen13;
export const AuditLogActionTypes = { ALL: "ALL", CREATE: "CREATE", UPDATE: "UPDATE", DELETE: "DELETE" };
export const AuditLogSubtargetTypes = { USER: "1", ROLE: "0" };
export const ApplicationCommandPermissionTypes = { ROLE: 1, [1]: "ROLE", USER: 2, [2]: "USER", CHANNEL: 3, [3]: "CHANNEL" };
export const AuditLogTargetTypes = { ALL: "ALL", UNKNOWN: "UNKNOWN", GUILD: "GUILD", CHANNEL: "CHANNEL", CHANNEL_OVERWRITE: "CHANNEL_OVERWRITE", USER: "USER", ROLE: "ROLE", INVITE: "INVITE", WEBHOOK: "WEBHOOK", EMOJI: "EMOJI", INTEGRATION: "INTEGRATION", STAGE_INSTANCE: "STAGE_INSTANCE", GUILD_SCHEDULED_EVENT: "GUILD_SCHEDULED_EVENT", GUILD_SCHEDULED_EVENT_EXCEPTION: "GUILD_SCHEDULED_EVENT_EXCEPTION", THREAD: "THREAD", STICKER: "STICKER", APPLICATION_COMMAND: "APPLICATION_COMMAND", AUTO_MODERATION_RULE: "AUTO_MODERATION_RULE", ONBOARDING_PROMPT: "ONBOARDING_PROMPT", GUILD_ONBOARDING: "GUILD_ONBOARDING", GUILD_HOME: "GUILD_HOME", GUILD_SOUNDBOARD: "GUILD_SOUNDBOARD", HOME_SETTINGS: "HOME_SETTINGS", VOICE_CHANNEL_STATUS: "VOICE_CHANNEL_STATUS", GUILD_MEMBER_VERIFICATION: "GUILD_MEMBER_VERIFICATION", GUILD_PROFILE: "GUILD_PROFILE" };
export const AuditLogChangeKeys = { NAME: "name", DESCRIPTION: "description", ICON_HASH: "icon_hash", SPLASH_HASH: "splash_hash", DISCOVERY_SPLASH_HASH: "discovery_splash_hash", BANNER_HASH: "banner_hash", IMAGE_HASH: "image_hash", OWNER_ID: "owner_id", REGION: "region", PREFERRED_LOCALE: "preferred_locale", AFK_CHANNEL_ID: "afk_channel_id", AFK_TIMEOUT: "afk_timeout", SYSTEM_CHANNEL_ID: "system_channel_id", RULES_CHANNEL_ID: "rules_channel_id", SAFETY_ALERTS_CHANNEL_ID: "safety_alerts_channel_id", PUBLIC_UPDATES_CHANNEL_ID: "public_updates_channel_id", MFA_LEVEL: "mfa_level", WIDGET_ENABLED: "widget_enabled", WIDGET_CHANNEL_ID: "widget_channel_id", VERIFICATION_LEVEL: "verification_level", EXPLICIT_CONTENT_FILTER: "explicit_content_filter", DEFAULT_MESSAGE_NOTIFICATIONS: "default_message_notifications", VANITY_URL_CODE: "vanity_url_code", PREMIUM_PROGRESS_BAR_ENABLED: "premium_progress_bar_enabled", SYSTEM_CHANNEL_FLAGS: "system_channel_flags", SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS: "join_notifications", SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS: "premium_subscriptions", SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS: "reminder_notifications", SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES: "join_notification_replies", POSITION: "position", TOPIC: "topic", TYPE: "type", BITRATE: "bitrate", RTC_REGION_OVERRIDE: "rtc_region", USER_LIMIT: "user_limit", PERMISSION_OVERWRITES: "permission_overwrites", ROLES_ADD: "$add", ROLES_REMOVE: "$remove", NICK: "nick", DEAF: "deaf", MUTE: "mute", PERMISSIONS: "permissions", COLORS: "colors", COLOR: "color", HOIST: "hoist", MENTIONABLE: "mentionable", CODE: "code", CHANNEL_ID: "channel_id", INVITER_ID: "inviter_id", ROLE_IDS: "role_ids", MAX_USES: "max_uses", USES: "uses", MAX_AGE: "max_age", TEMPORARY: "temporary", APPLICATION_ID: "application_id", AVATAR_HASH: "avatar_hash", ID: "id", PERMISSIONS_GRANTED: "allow", PERMISSIONS_DENIED: "deny", PERMISSIONS_RESET: "reset", REASON: "reason", PRUNE_DELETE_DAYS: "prune_delete_days", NSFW: "nsfw", RATE_LIMIT_PER_USER: "rate_limit_per_user", VIDEO_QUALITY_MODE: "video_quality_mode", DEFAULT_AUTO_ARCHIVE_DURATION: "default_auto_archive_duration", DEFAULT_THREAD_RATE_LIMIT_PER_USER: "default_thread_rate_limit_per_user", ARCHIVED: "archived", LOCKED: "locked", INVITABLE: "invitable", AUTO_ARCHIVE_DURATION: "auto_archive_duration", FLAGS: "flags", THEME_COLORS: "theme_colors", PERSONALITY: "personality", AUTHOR_ID: "author_id", ENABLE_EMOTICONS: "enable_emoticons", EXPIRE_BEHAVIOR: "expire_behavior", EXPIRE_GRACE_PERIOD: "expire_grace_period", PRIVACY_LEVEL: "privacy_level", STATUS: "status", ENTITY_TYPE: "entity_type", TAGS: "tags", ASSET: "asset", FORMAT_TYPE: "format_type", AVAILABLE: "available", GUILD_ID: "guild_id", UNICODE_EMOJI: "unicode_emoji", LOCATION: "location", RECURRENCE_RULE: "recurrence_rule", COMMUNICATION_DISABLED_UNTIL: "communication_disabled_until", BYPASSES_VERIFICATION: "bypasses_verification", AUTO_MODERATION_TRIGGERED_RULE_NAME: "triggered_rule_name", AUTO_MODERATION_TRIGGER_TYPE: "trigger_type", AUTO_MODERATION_TRIGGER_METADATA: "trigger_metadata", AUTO_MODERATION_EVENT_TYPE: "event_type", AUTO_MODERATION_ACTIONS: "actions", AUTO_MODERATION_ENABLED: "enabled", AUTO_MODERATION_EXEMPT_ROLES: "exempt_roles", AUTO_MODERATION_EXEMPT_CHANNELS: "exempt_channels", AUTO_MODERATION_ADD_KEYWORDS: "$add_keyword_filter", AUTO_MODERATION_REMOVE_KEYWORDS: "$remove_keyword_filter", AUTO_MODERATION_ADD_REGEX_PATTERNS: "$add_regex_patterns", AUTO_MODERATION_REMOVE_REGEX_PATTERNS: "$remove_regex_patterns", AUTO_MODERATION_ADD_ALLOW_LIST: "$add_allow_list", AUTO_MODERATION_REMOVE_ALLOW_LIST: "$remove_allow_list", TITLE: "title", DISABLED: "disabled", REQUIRED: "required", OPTIONS: "options", PROMPTS: "prompts", ENABLED: "enabled", SINGLE_SELECT: "single_select", DEFAULT_CHANNEL_IDS: "default_channel_ids", ENABLE_DEFAULT_CHANNELS: "enable_default_channels", ENABLE_ONBOARDING_PROMPTS: "enable_onboarding_prompts", APPLIED_TAGS: "applied_tags", AVAILABLE_TAGS: "available_tags", AVAILABLE_TAG_ADD: "available_tag_add", AVAILABLE_TAG_EDIT: "available_tag_edit", AVAILABLE_TAG_DELETE: "available_tag_delete", SOUND_ID: "sound_id", VOLUME: "volume", EMOJI_NAME: "emoji_name", EMOJI_ID: "emoji_id", WELCOME_MESSAGE: "welcome_message", NEW_MEMBER_ACTIONS: "new_member_actions", RESOURCE_CHANNELS: "resource_channels", SCHEDULED_START_TIME: "scheduled_start_time", SCHEDULED_END_TIME: "scheduled_end_time", IS_CANCELED: "is_canceled", LINKED_LOBBY: "linked_lobby", VERIFICATION_ENABLED: "verification_enabled", MANUAL_APPROVAL_ENABLED: "manual_approval_enabled", BRAND_COLOR_PRIMARY: "brand_color_primary", CUSTOM_BANNER_HASH: "custom_banner_hash", GAME_APPLICATION_IDS: "game_application_ids", SERVER_TAG: "server_tag", TRAITS: "traits", VISIBILITY: "visibility" };
export const AUDIT_LOG_PAGE_LIMIT = 50;
export const UserRequiredActions = { AGREEMENTS: "AGREEMENTS", REQUIRE_CAPTCHA: "REQUIRE_CAPTCHA", REQUIRE_VERIFIED_EMAIL: "REQUIRE_VERIFIED_EMAIL", REQUIRE_VERIFIED_PHONE: "REQUIRE_VERIFIED_PHONE", REQUIRE_REVERIFIED_EMAIL: "REQUIRE_REVERIFIED_EMAIL", REQUIRE_REVERIFIED_PHONE: "REQUIRE_REVERIFIED_PHONE", REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE: "REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE", REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE: "REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE", REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE: "REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE", REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE: "REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE", REQUIRE_SAFETY_FLOWS: "REQUIRE_SAFETY_FLOWS" };
export const LoginRequiredActions = { UPDATE_PASSWORD: "update_password" };
export const VerificationTypes = { CAPTCHA: "captcha", EMAIL_OR_PHONE: "email_or_phone", PHONE: "phone", EMAIL: "email", REVERIFY_PHONE: "reverify_phone", REVERIFY_EMAIL: "reverify_email" };
export const MAX_REASON_LENGTH = 512;
export const MouseButtons = { PRIMARY: 0, [0]: "PRIMARY", SECONDARY: 2, [2]: "SECONDARY", WHEEL: 4, [4]: "WHEEL", BACK: 8, [8]: "BACK", FORWARD: 16, [16]: "FORWARD" };
export const KeyboardKeys = { BACKSPACE: 8, [8]: "BACKSPACE", TAB: 9, [9]: "TAB", ENTER: 13, [13]: "ENTER", ESCAPE: 27, [27]: "ESCAPE", SPACE: 32, [32]: "SPACE", END: 35, [35]: "END", HOME: 36, [36]: "HOME", ARROW_LEFT: 37, [37]: "ARROW_LEFT", ARROW_UP: 38, [38]: "ARROW_UP", ARROW_RIGHT: 39, [39]: "ARROW_RIGHT", ARROW_DOWN: 40, [40]: "ARROW_DOWN", DELETE: 46, [46]: "DELETE", DIGIT_0: 48, [48]: "DIGIT_0", DIGIT_1: 49, [49]: "DIGIT_1", DIGIT_2: 50, [50]: "DIGIT_2", DIGIT_3: 51, [51]: "DIGIT_3", DIGIT_4: 52, [52]: "DIGIT_4", DIGIT_5: 53, [53]: "DIGIT_5", DIGIT_6: 54, [54]: "DIGIT_6", DIGIT_7: 55, [55]: "DIGIT_7", DIGIT_8: 56, [56]: "DIGIT_8", DIGIT_9: 57, [57]: "DIGIT_9", A: 65, [65]: "A", B: 66, [66]: "B", D: 68, [68]: "D", E: 69, [69]: "E", H: 72, [72]: "H", I: 73, [73]: "I", K: 75, [75]: "K", N: 78, [78]: "N", P: 80, [80]: "P", S: 83, [83]: "S", T: 84, [84]: "T", U: 85, [85]: "U", COMMA: 188, [188]: "COMMA" };
export const PictureInPicturePositions = { TOP_LEFT: "top-left", TOP_RIGHT: "top-right", BOTTOM_LEFT: "bottom-left", BOTTOM_RIGHT: "bottom-right" };
export const PictureInPictureComponents = { VIDEO: "VIDEO", ACTIVITY: "ACTIVITY", FRAME: "FRAME", HAVEN: "HAVEN" };
export const ChannelTextAreaIntegrationTypes = obj15;
export const ChannelTextAreaIntegrations = frozen14;
export const HelpdeskArticles = { ENABLE_MIC_FIREFOX: "204392448", PUSH_TO_TALK_ADMINISTRATOR_MODE: "205082178", ENABLE_MIC_CHROME: "205093487", PERMISSIONS_TUTORIAL: "206029707", TWITCH_INTEGRATION: "212112068", YOUTUBE_INTEGRATION: "215162978", VOICE_CONNECTION_ERRORS: "115001310031", NO_INPUT_DETECTED: "214925018", OVERLAY_INTRODUCTION: "217659737", PERMISSIONS_LOCKOUT: "218449248", SETTING_UP_TWO_FACTOR: "219576828", WEBHOOKS_INTRODUCTION: "228383668", QUICK_SWITCHER_TUTORIAL: "115000070311", SEARCH_INDEXING: "115000414847", USING_SEARCH: "115000468588", RICH_PRESENCE_INTRODUCTION: "115001557452", CORRUPT_INSTALLATION: "115004307527", SPOTIFY_AUTO_PAUSED: "115002872212", SPOTIFY_CONNECTION: "360000167212", SPELLCHECK: "360000877191", INVALID_INVITES: "360001556852", GDPR_ACCOUNT_DELETE: "212500837", GDPR_ACCOUNT_DISABLE: "360004066391", GDPR_REQUEST_DATA: "360004027692", GDPR_PACKAGE_CONTENTS: "360004957991", DATA_PRIVACY_CONTROLS: "360004109911", ACCESSIBILITY_TRACKING: "360035966492", NEARBY_FRIENDS: "360014894392", APPLICATION_STORE_OVERVIEW: "360012656092", APPLICATION_STORE_EARLY_ACCESS: "360027392172", GIFTING: "360020776291", GUILD_VANITY_URL: "115001542132", GUILD_SUBSCRIPTIONS: "360028038352", GUILD_BANNER_SPLASH: "360028716472", GUILD_INVITE_SPLASH: "4415841146391", GUILD_COMMUNITY_FEATURE: "360047132851", BUILD_OVERRIDE_EMBED: "360030114991", SUPPORTED_BROWSERS: "213491697", ANNOUNCEMENT_CHANNELS: "360032008192", GUILD_ANALYTICS: "360032807371", BILLING: "360017693772", REFUND_POLICY: "360012668071", PAYMENT_AUTHORIZATION_CHARGE: "4402712000663", PUBLIC_GUILD_GUILDLINES: "360035969312", FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES: "14078261239831", SYSTEM_DMS: "360036118732", MISSING_ENTITLEMENT: "360016422832", AGE_GATE: "360040724612", STREAM_FAILED: "360040816151", REDUCED_MOTION: "360040613412", NOISE_SUPPRESSION: "360040843952", NSFW_AGE_GATING: "115000084051#h_5206f3f2-0ee4-4380-b50a-25319e45bc7c", NSFW_GUILD_GUIDELINES: "1500005292701", PREMIUM_TRIAL: "360042410272", VOICE_VIDEO_TROUBLESHOOTING: "360045138471", GUILD_GETTING_STARTED: "360045138571", CHANNEL_FOLLOWING: "360028384531", WEBHOOKS: "228383668", INTEGRATIONS: "360045093012", PARTNER_CODE_OF_CONDUCT: "360024871991", ORBS_FAQ: "30593690165783", ORBS_REWARDS_FAQ: "37097755077015-Monthly-Orbs-for-Nitro-Members-FAQ", MAX_MEMBERS: "360052841734", STICKERS: "360056891113", BLACK_FRIDAY_2020_PROMOTION: "360057438734", KEYBOARD_NAVIGATION: "1500000056121", DM_COULD_NOT_BE_DELIVERED: "360060145013", EPHEMERAL_MESSAGES: "26501839512855", OSX_SOUNDSHARE: "1500006741102", STAGE_CHANNEL_GUIDELINES: "1500010879761", STAGE_DISCOVERY: "1500011599542", STICKERS_UPLOAD: "4403089981975", STREAM_QUALITY_SETTINGS: "360040816151#h_01F02D2RBXRNRC20WS3ZHMMCTE", PREMIUM_DETAILS: "115000435108", PREMIUM_DETAILS_CANCEL_SUB: "115000435108#h_01GFV3PNMEJEF92W0XX69MEE2W", LOCALIZED_PRICING: "4407269525911", SERVER_DISCOVERY: "360023968311", SERVER_DISCOVERY_GUIDELINES: "4409308485271", DISABLE_GUILD_COMMUNICATION: "4413305239191", GUILD_AUTOMOD_BLOCKED_MESSAGE: "4421269296535", GUILD_AUTOMOD_REGEX: "10069840290711", GUILD_RAID: "4421269296535", INVITE_DISABLED: "8458903738647", BLOCKED_PAYMENTS: "4708041338391", ROLE_SUBSCRIPTION_TRIAL: "5278912413335", HIGHLIGHTS: "5304469213079", FORCED_COLORS: "1500010454681", ROLE_STYLES: "1500010454681", CREATOR_TERMS: "5330075836311", CREATOR_FAQ: "5371495812631", CREATOR_POLICY: "10575066024983", POGGERMODE: "5706956956695", GUILD_HOME: "6156116949911", SERVER_WEB_PAGES: "4673515000983", TEXT_IN_VOICE: "4412085582359", QUARANTINE: "6461420677527", FORUMS: "6208479917079", GUILD_PROFILES: "4409388345495", XBOX_CONNECTION: "360003953831", PS_CONNECTION: "4419534960919", QUEST_HOW_TO_XBOX: "360003953831#h_01J1TYJ22SN8Q4YND06JAGPA57", QUEST_HOW_TO_PLAYSTATION: "4419534960919#h_01J1TXNAT4RFSX9R7HQ30MHFCC", VERIFICATION_FAQ: "6181726888215", ACTIVITY_STATUS_SETTINGS: "7931156448919", MESSAGE_REQUESTS: "7924992471191", RNA_CHANGELOG: "8537198296727", CONNECTION_DETAILS: "8063233404823", CONNECTION_DETAILS_ADMIN: "10388356626711", APPS_LEARN_MORE: "26592957841303-How-to-Discover-and-Add-Apps", BOT_DATA_ACCESS: "7933951485975", HIGHLIGHTS_NOTIFICATIONS: "5304469213079", CRUNCHYROLL_CONNECTION: "9929188048023", ACTIVE_NITRO_BOGO_PROMOTION: "10167328543127", APPLICATION_COMMAND_PERMISSION_V3_WHAT_CHANGED: "10952896421783", APPLICATION_COMMAND_PERMISSIONS_LOCKOUT: "10952702911639", SUPER_REACTIONS: "12102061808663", SOUNDBOARD: "12612888127767", GUILD_BOOSTING_FAQ: "360028038352", NITRO: "115000435108", VOICE_MESSAGES: "13091096725527", SAFE_DIRECT_MESSAGING: "115000068672", PAID_TERMS: "4410339366295", CONVERSATION_SUMMARIES: "12926016807575", SHARE_NITRO_FAQ: "13771635451415", POMELO_FAQ: "12620128861463", CONTACT_SYNC: "360061878534", PRIVATE_CHANNEL_INTEGRATIONS: "15104189280151", MEDIA_CHANNEL: "14346342766743", SUMMER_2023_BOGO: "15089153846551", MEMBER_SAFETY_DASHBOARD: "15946797617431", CLIPS: "16861982215703", REMIXING_TEXT_SUPPORT: "15145601963031-Remix-FAQ#h_01H2Y1F86HNTVKWNVJJSB4C6A5", SERVER_SUBSCRIPTION_AND_PRODUCTS: "10423011974551", SERVER_PRODUCTS: "10423011974551#docs-internal-guid-918e991a-7fff-03d5-8326-5d065e5edeb1", WIN32_DEPRECATE: "17997797368471", PROFILE_BADGES: "360035962891", EXPLICIT_MEDIA_REDACTION: "18210995019671", EXPLICIT_MEDIA_REDACTION_UK_ONLY: "32806366426135", SAFETY_ALERTS: "18210977897239", KEYWORD_FILTERS: "24269903094167", COPYRIGHT_AND_IP_POLICY: "4410339349655", NVIDIA_DRIVER_ISSUES: "18621944634391", ROLE_SUBSCRIPTION_CANCEL: "19580873036695#h_01HGXEYG130EZKGQQ03A3ZHFEY", SUBSCRIPTION_CANCEL: "19580873036695", WIN7_8_DEPRECATE: "20470973046295", QUESTS_LEARN_MORE: "22225719947543", DATA_USED_TO_IMPROVE_DISCORD: "21864805694999", DATA_USED_FOR_RECOMMENDED: "21865322754327", USING_APPS_FAQ: "21334461140375#h_01HRQSA6C8H2XBF34NSSQH7ZFH", LAUNCHING_APPS_WITH_SHAPES_BUTTON: "21334461140375", MEMBER_LIST_ACTIVITY_FEED: "22045487931799", POLLS_FAQ: "22163184112407", QUESTS_PRIVACY_CONTROLS: "22225542459415", USER_PROFILE_RECENT_GAMES: "22489665250327", REFERRAL_PROGRAM: "22567595858327", PREMIUM_APRIL_2024_MARKETING_MOMENT: "22484323261463", SUMMER_BOGO_2024: "24485661785495", NITRO_FAQ: "115000435108#h_01GFV3PWAGD4EGTD91ERBZ5R4S", END_TO_END_ENCRYPTION: "25968222946071", SCREEN_SHARING_MACOS: "26459694693783", SOCIAL_LAYER_CONNECTIONS: "27893392334359", SOCIAL_LAYER_SPEND_ORBS_LEARN_MORE: "40102783004311#h_01KQJNEWWGZ6CB48FP9VBE2MD1", FRACTIONAL_PREMIUM_ABOUT: "26362805097623", STEALTH_REMEDIATION_FEATURE_GUIDE: "28084948873623", LINKED_LOBBIES: "29216887858967", MACOS_19_DEPRECATE: "20900540446231", MACOS_20_DEPRECATE: "41117240080151", SLAYER_GAME_FRIENDS: "29216909413143", SLAYER_PROVISIONAL_ACCOUNTS: "29667419799063", MEMBER_APPLICATIONS: "29729107418519", TIGGER_PAWTECT_SYSTEM_DMS: "360036118732-Discord-Official-Messages", TIGGER_PAWTECT_LEARN_MORE: "30326565624343", PERMADECOS: "29790581779735", VIRTUAL_CURRENCY_LEARN_MORE: "30593690165783", VIRTUAL_CURRENCY_ORB_MULTIPLIER_LEARN_MORE: "30593690165783#h_01KKYTZQ8C3VZN6SPPHS7ZPGHQ", AV_ERROR_CODES: "30952914470807", SERVER_TAGS: "31444248479639", NSFW_SERVER_AGE_RESTRICTION: "1500005292701", SUMMER_BOGO_2025: "32702667550743", FLAG_TO_MOD: "360044103651", CUSTOM_THEMES: "207260127#h_01JWYFJDVN6E9G80JTN2N86876", DISPLAY_NAME_STYLES: "33833879643927", SYSTEM_SERVICE: "34853435033367", IN_GAME_FEATURES: "27893392334359", SLOWMODE: "360016150952", CUSTOM_PROFILES_WISHLIST: "4403147417623#h_01K6DY1CJBBQHBFPETCDTJHE9B", NVIDIA_GEFORCE_CLOUD_GAMING_QUEST: "35372187686295", GAME_SERVER_HOSTING: "35370817986839", RECURRING_PROMOTION: "39188406147479-Nitro-Rewards#h_01KQZ3D7Z26A58ERQBDNY7TAWS", LOGITECH_PROMOTION: "39554094193175", PREMIUM_GROUP_ABOUT: "36320645875479", SOCIAL_LAYER_STOREFRONT: "40102783004311", CHECKPOINT: "36415877391511", NITRO_TRIAL_FOR_ALL: "37127619588375-Nitro-2-Week-Trial-Offer", WINDOWS_MEDIA_PACK: "37976093740695", FAVORITES_GUILD: "38810584460439", NITRO_2_POINT_0: "39188406147479", ANDROID_SCREENSHARE_AUDIO_BUG: "40397083647511", XBOX_GAME_PASS_PERKS: "40387273783831", SHOP_FRAMES_EARLY_ACCESS: "40775065582615", LFG_CHANNELS: "41832532728215" };
export const HelpdeskArticlesInternalGUIDs = { INVALID_BILLING_ADDRESS: "#docs-internal-guid-1731ba7c-7fff-87a1-c976-f62cc1cd2618" };
export const DEFAULT_CDN_HOST = "cdn.discordapp.com";
export const YOUTUBE_EMBED_URL = (arg0) => "https://www.youtube.com/embed/" + arg0;
export const YOUTUBE_PREVIEW_URL = (arg0) => "https://img.youtube.com/vi/" + arg0 + "/maxresdefault.jpg";
export const YOUTUBE_EMBED_PAGE_TYPE = "2";
export const MOBILE_WEB_HANDOFF_DEEP_LINK = "https://discordapp.com/mweb-handoff";
export const LibraryApplicationFlags = { HIDDEN: 1, [1]: "HIDDEN", PRIVATE: 2, [2]: "PRIVATE", OVERLAY_DISABLED: 4, [4]: "OVERLAY_DISABLED", ENTITLED: 8, [8]: "ENTITLED", PREMIUM: 16, [16]: "PREMIUM", OVERLAY_V3_DISABLED: 32, [32]: "OVERLAY_V3_DISABLED" };
export const CloudSyncStateTypes = { DONE: "DONE", PLANNING: "PLANNING", PREPARING: "PREPARING", PUSHING: "PUSHING", PULLING: "PULLING", CONFLICT: "CONFLICT", ERROR: "ERROR" };
export const CloudSyncResultTypes = { PULL: "PULL", PUSH: "PUSH", CONFLICT: "CONFLICT", NONE: "NONE" };
export const Distributors = require("ApplicationDistributors").ApplicationDistributors;
export const DistributorNames = frozen15;
export const Consents = { USAGE_STATISTICS: "usage_statistics", PERSONALIZATION: "personalization" };
export const FriendSourceFlags = obj18;
export const AllFriendSourceFlags = tmp35;
export const MutualsSourceFlag = tmp36;
export const FriendDiscoveryFlags = { NONE: 0, [0]: "NONE", FIND_BY_PHONE: 2, [2]: "FIND_BY_PHONE", FIND_BY_EMAIL: 4, [4]: "FIND_BY_EMAIL" };
export const REQUEST_DATA_LIMIT_DAYS = 30;
export const AppContext = obj19;
export const CURRENT_APP_CONTEXT = obj19.APP;
export const DispatchApplicationStates = { COMPLETE: "complete", TRANSITION: "transition" };
export const DispatchApplicationStages = { QUEUED: "queued", PLANNING: "planning", ALLOCATING_DISK: "allocating_disk", PATCHING: "patching", FINALIZING: "finalizing", PAUSING: "pausing", VERIFYING: "verifying", REPAIRING: "repairing", POST_INSTALL_SCRIPTS: "running_install_scripts", UNINSTALLING: "uninstalling" };
export const LocalDispatchApplicationStates = { INSTALL_REQUIRED: "install_required", INSTALLING: "installing", UP_TO_DATE: "up_to_date", UPDATE_REQUIRED: "update_required", UPDATING: "updating", REPAIRING: "repairing", UNINSTALLING: "uninstalling" };
export const LibraryApplicationActions = { PLAY: "play", INSTALL: "install", UPDATE: "update", PAUSE: "pause", MOVE_UP: "move_up", RESUME: "resume" };
export const GameTableListKeys = { NAME: "name", PLATFORM: "platform", ACTIONS: "actions", LAST_PLAYED: "last_played" };
export const TableSortDirections = { ASCENDING: "asc", DESCENDING: "desc" };
export const OperatingSystems = { WINDOWS: "1", MACOS: "2", LINUX: "3" };
export const EntitlementTypes = { PURCHASE: 1, [1]: "PURCHASE", PREMIUM_SUBSCRIPTION: 2, [2]: "PREMIUM_SUBSCRIPTION", DEVELOPER_GIFT: 3, [3]: "DEVELOPER_GIFT", TEST_MODE_PURCHASE: 4, [4]: "TEST_MODE_PURCHASE", FREE_PURCHASE: 5, [5]: "FREE_PURCHASE", USER_GIFT: 6, [6]: "USER_GIFT", PREMIUM_PURCHASE: 7, [7]: "PREMIUM_PURCHASE", APPLICATION_SUBSCRIPTION: 8, [8]: "APPLICATION_SUBSCRIPTION", FREE_STAFF_PURCHASE: 9, [9]: "FREE_STAFF_PURCHASE", QUEST_REWARD: 10, [10]: "QUEST_REWARD", FRACTIONAL_REDEMPTION: 11, [11]: "FRACTIONAL_REDEMPTION", VIRTUAL_CURRENCY_REDEMPTION: 12, [12]: "VIRTUAL_CURRENCY_REDEMPTION" };
export const EntitlementSourceTypes = { QUEST_REWARD: 1, [1]: "QUEST_REWARD", DEVELOPER_GIFT: 2, [2]: "DEVELOPER_GIFT", INVOICE: 3, [3]: "INVOICE", REVERSE_TRIAL: 4, [4]: "REVERSE_TRIAL", FRACTIONAL_PREMIUM_GIVEBACK: 8, [8]: "FRACTIONAL_PREMIUM_GIVEBACK", SUBSCRIPTION: 9, [9]: "SUBSCRIPTION", SUBSCRIPTION_MEMBER: 11, [11]: "SUBSCRIPTION_MEMBER" };
export const ContentRatingAgencies = { ESRB: "1", PEGI: "2" };
export const SKUTypes = { DURABLE_PRIMARY: 1, [1]: "DURABLE_PRIMARY", DURABLE: 2, [2]: "DURABLE", CONSUMABLE: 3, [3]: "CONSUMABLE", BUNDLE: 4, [4]: "BUNDLE", SUBSCRIPTION: 5, [5]: "SUBSCRIPTION", SUBSCRIPTION_GROUP: 6, [6]: "SUBSCRIPTION_GROUP" };
export const SKUAccessTypes = { FULL: 1, [1]: "FULL", EARLY_ACCESS: 2, [2]: "EARLY_ACCESS", VIP_ACCESS: 3, [3]: "VIP_ACCESS" };
export const SKUProductLines = { PREMIUM: 1, [1]: "PREMIUM", BOOST: 2, [2]: "BOOST", GUILD_ROLE: 4, [4]: "GUILD_ROLE", GUILD_PRODUCT: 5, [5]: "GUILD_PRODUCT", APPLICATION: 6, [6]: "APPLICATION", COLLECTIBLES: 7, [7]: "COLLECTIBLES", SOCIAL_LAYER_GAME_ITEM: 14, [14]: "SOCIAL_LAYER_GAME_ITEM" };
export const DirectoryLocations = { HOME: "1", BROWSE: "2" };
export const BuildPlatformTypes = { WIN32: "win32", WIN64: "win64", MACOS: "macos", LINUX: "linux" };
export const HypeSquadHouses = { HOUSE_1: "HOUSE_1", HOUSE_2: "HOUSE_2", HOUSE_3: "HOUSE_3" };
export const MessageRestrictionTypes = { EMPTY_MESSAGE: "EMPTY_MESSAGE", MESSAGE_TOO_LONG: "MESSAGE_TOO_LONG", RATE_LIMITED: "RATE_LIMITED", SHOUTING_CANCELLED: "SHOUTING_CANCELLED", SLOWMODE_COOLDOWN: "SLOWMODE_COOLDOWN" };
export const CarouselMediaTypes = { IMG: 1, [1]: "IMG", YOUTUBE_VIDEO: 2, [2]: "YOUTUBE_VIDEO", VIDEO: 3, [3]: "VIDEO" };
export const StoreRecommendationTypes = { NOW_PLAYING: "1", RECENTLY_PLAYED: "2", EVER_PLAYED: "3", FLAVOR_TEXT: "4", RECENT_RELEASE_DATE: "6", RELEASE_DATE: "7", EARLY_ACCESS: "8", HAS_FREE_PREMIUM_CONTENT: "9" };
export const ViewHistoryKeys = { APPLICATION_LIBRARY_BADGE: "application_library_badge_18_11_02", SERVER_DISCOVERY_BADGE: "server_discovery_badge_19_02_11", E3_SERVER_DISCOVERY_BADGE: "e3_server_discovery_badge_19_06_08" };
export const InAppNotificationTypes = { MESSAGE: "MESSAGE", MESSAGE_FAILED_TO_SEND: "MESSAGE_FAILED_TO_SEND", FORUM_THREAD_CREATED: "FORUM_THREAD_CREATED", BUG_REPORTER: "BUG_REPORTER", ALERT: "ALERT", REACTION: "REACTION", MESSAGE_REMINDER: "MESSAGE_REMINDER", RESTRICTED_HOURS_WARNING: "RESTRICTED_HOURS_WARNING", RESTRICTED_SCHEDULE_UPDATED: "RESTRICTED_SCHEDULE_UPDATED", MESSAGE_REQUEST: "MESSAGE_REQUEST" };
export const GIFPickerResultTypes = { TRENDING_GIFS: "Trending", FAVORITES: "Favorites", TRENDING_CATEGORY: "Category", SEARCH: "Search", SEARCH_SUGGESTION: "Search Suggestion" };
export const GIFTABLE_CURRENCIES = new Set(items9);
export const SpoilerRenderSetting = { ALWAYS: "ALWAYS", ON_CLICK: "ON_CLICK", IF_MODERATOR: "IF_MODERATOR" };
export const NUMBER_OF_GUILDS_TO_RECOMMEND_BOOSTING = 4;
export const OFF_PLATFORM_PREMIUM_PERKS = [];
export const PopoutWindowKeys = { CHANNEL_CALL_POPOUT: "DISCORD_CHANNEL_CALL_POPOUT", CALL_TILE_POPOUT: "DISCORD_CALL_TILE_POPOUT", SOUNDBOARD: "DISCORD_SOUNDBOARD", RTC_DEBUG_POPOUT: "DISCORD_RTC_DEBUG_POPOUT", CHANNEL_POPOUT: "DISCORD_CHANNEL_POPOUT", ACTIVITY_POPOUT: "DISCORD_ACTIVITY_POPOUT", DEVTOOLS_POPOUT: "DISCORD_DEVTOOLS_POPOUT", STATS_POPOUT: "DISCORD_STATS_POPOUT" };
export const PopoutEventTypes = { LOADED: "loaded", UNLOADED: "unloaded" };
export const ApplicationStreamStates = { CONNECTING: "CONNECTING", ACTIVE: "ACTIVE", RECONNECTING: "RECONNECTING", ENDED: "ENDED", PAUSED: "PAUSED", FAILED: "FAILED" };
export const ApplicationStreamDeleteReasons = { USER_REQUESTED: "user_requested", STREAM_FULL: "stream_full", UNAUTHORIZED: "unauthorized", SAFETY_GUILD_RATE_LIMITED: "safety_guild_rate_limited" };
export const MediaEngineHookTypes = { SOUND: "SOUND", VIDEO: "VIDEO" };
export const MediaEngineVideoStates = { PLAYING: "playing", PAUSED: "paused" };
export const NetworkConnectionTypes = { NONE: "none", WIFI: "wifi", CELLULAR: "cellular", UNKNOWN: "unknown", ETHERNET: "ethernet", BLUETOOTH: "bluetooth", WIMAX: "wimax", OTHER: "other" };
export const NetworkConnectionSpeeds = { UNKNOWN: "unknown", SLOW_TWO_G: "slow-2g", TWO_G: "2g", THREE_G: "3g", FOUR_G: "4g", FIVE_G: "5g" };
export const DISCODO_STORAGE_KEY = "discodoEasterEgg";
export const SpringTransitionPhases = { INITIAL: "initial", ENTER: "enter", UPDATE: "update", LEAVE: "leave" };
export const SettingsPaneTypes = { APP_DMS_MENU: "App DMs Menu", CHANNEL_SETTINGS: "Channel Settings", CHANNEL_NOTIFICATION_SETTINGS: "Channel Notification Settings", GUILD_NOTIFICATION_SETTINGS: "Guild Notification Settings" };
export const WebhookTypes = { INCOMING: 1, [1]: "INCOMING", CHANNEL_FOLLOWER: 2, [2]: "CHANNEL_FOLLOWER" };
export const IntegrationSettingsSections = { APPLICATION: 0, [0]: "APPLICATION", OVERVIEW: 1, [1]: "OVERVIEW", CHANNEL_FOLLOWING: 2, [2]: "CHANNEL_FOLLOWING", TWITCH: 3, [3]: "TWITCH", YOUTUBE: 4, [4]: "YOUTUBE", WEBHOOKS: 5, [5]: "WEBHOOKS", LOBBIES_LINKED: 6, [6]: "LOBBIES_LINKED" };
export const MAX_MEMBERS_NOTIFY_ALL_MESSAGES = 2500;
export const UNREACHABLE_REQUEST_ANIMATION_FRAME_ID = 0;
export const WELCOME_OLD_GUILD_AGE_THRESHOLD = 2592000000;
export const AllowedMentionTypes = { USERS: "users", ROLES: "roles", EVERYONE: "everyone" };
export const VideoQualityMode = { AUTO: 1, [1]: "AUTO", FULL: 2, [2]: "FULL" };
export const DEFAULT_NUM_REACTION_USERS = 100;
export const TOKEN_REGEX = /(mfa\.[a-z0-9_-]{20,})|([a-z0-9_-]{23,28}\.[a-z0-9_-]{6,7}\.[a-z0-9_-]{27})/i;
export const MEDIA_MODAL_KEY = "media-modal-key";
export const HighlightSettings = { NULL: 0, [0]: "NULL", DISABLED: 1, [1]: "DISABLED", ENABLED: 2, [2]: "ENABLED" };
export const SERVER_MONETIZATION_OWNERSHIP_TRANSFER_URL = "https://creator-support.discord.com/hc/en-us/articles/12653663868823";
export const VoiceFlags = { CLIPS_ENABLED: 1, [1]: "CLIPS_ENABLED", ALLOW_VOICE_RECORDING: 2, [2]: "ALLOW_VOICE_RECORDING", ALLOW_ANY_VIEWER_CLIPS: 4, [4]: "ALLOW_ANY_VIEWER_CLIPS" };
export const ImageReadyStates = { LOADING: "LOADING", ERROR: "ERROR", READY: "READY" };
export const QueryIds = frozen16;
export const MEDIA_PROXY_MAX_TARGET_RESOLUTION = 4096;
export const COUNTRY_US = "US";
export const SUBDIVISION_CA = "CA";
export const Orientation = { PORTRAIT: "PORTRAIT", LANDSCAPE: "LANDSCAPE" };
export const IOS_BUNDLE_ID = "com.hammerandchisel.discord";
export const MAX_TIMEOUT_MS = 2147483647;