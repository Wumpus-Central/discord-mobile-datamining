// === Module 17319: MobileNotifSettingsRouteBuilders ===

// Module 17319 (MobileNotifSettingsRouteBuilders)
import util from "util" /* 1128 */;
import _modDef2864 from "module_2864" /* 2864 */;
import MobileNotifSettings from "MobileNotifSettings" /* 16840 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/notifications/settings/native/MobileNotifSettingsRouteBuilders.tsx");

export const buildOverviewCategoriesSection = function buildOverviewCategoriesSection() {
  const obj = { label: null, settings: null };
  const intl = util.intl;
  obj.label = intl.string(_modDef2864["/UdAvP"]);
  const items = [MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_CALLS_MESSAGES, MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_DISCOVERY_HIGHLIGHTS, MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY, MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SERVERS];
  obj.settings = items;
  return obj;
};
export const buildCategoryCallsMessagesSettingsSection = function buildCategoryCallsMessagesSettingsSection() {
  const obj = { settings: null };
  const items = [MobileNotifSettings.MobileNotifSettings.NOTIF_FRIEND_REQUESTS, MobileNotifSettings.MobileNotifSettings.NOTIF_CALLS, MobileNotifSettings.MobileNotifSettings.NOTIF_MISSED_MESSAGES_LOW, MobileNotifSettings.MobileNotifSettings.NOTIF_MISSED_MESSAGES_DEFAULT];
  obj.settings = items;
  return obj;
};
export const buildCategoryDiscoveryHighlightsSettingsSection = function buildCategoryDiscoveryHighlightsSettingsSection() {
  const obj = { settings: null };
  const items = [MobileNotifSettings.MobileNotifSettings.NOTIF_INVITES_RECONNECTING, MobileNotifSettings.MobileNotifSettings.NOTIF_TRENDING_SUGGESTIONS, MobileNotifSettings.MobileNotifSettings.NOTIF_UPDATES_OFFERS];
  obj.settings = items;
  return obj;
};
export const buildCategoryFriendsActivitySettingsSection = function buildCategoryFriendsActivitySettingsSection() {
  const obj = { settings: null };
  const items = [MobileNotifSettings.MobileNotifSettings.NOTIF_FRIEND_ACTIVITY_TITLE, MobileNotifSettings.MobileNotifSettings.NOTIF_FRIENDS_GAMING, MobileNotifSettings.MobileNotifSettings.NOTIF_FRIENDS_GAMING_LOW, MobileNotifSettings.MobileNotifSettings.NOTIF_FRIENDS_GAMING_DEFAULT, MobileNotifSettings.MobileNotifSettings.NOTIF_GAMING_OTHER, MobileNotifSettings.MobileNotifSettings.NOTIF_GO_LIVE, MobileNotifSettings.MobileNotifSettings.NOTIF_VOICE_ACTIVITY_LOW, MobileNotifSettings.MobileNotifSettings.NOTIF_VOICE_ACTIVITY_DEFAULT, MobileNotifSettings.MobileNotifSettings.NOTIF_VOICE_CHANNEL_ACTIVITY, MobileNotifSettings.MobileNotifSettings.NOTIF_POLLS, MobileNotifSettings.MobileNotifSettings.NOTIF_REACTIONS];
  obj.settings = items;
  return obj;
};
export const buildFriendActivityTitleSettingsSection = function buildFriendActivityTitleSettingsSection() {
  const obj = { settings: null };
  const items = [MobileNotifSettings.MobileNotifSettings.NOTIF_CUSTOM_STATUS_UPDATE, MobileNotifSettings.MobileNotifSettings.NOTIF_FRIEND_ONLINE, MobileNotifSettings.MobileNotifSettings.NOTIF_FRIEND_REQUEST_REMINDER, MobileNotifSettings.MobileNotifSettings.NOTIF_FRIEND_SUGGESTIONS, MobileNotifSettings.MobileNotifSettings.NOTIF_NUDGE_NEW_FRIEND_DM, MobileNotifSettings.MobileNotifSettings.NOTIF_PROFILE_UPDATES];
  obj.settings = items;
  return obj;
};
export const buildCategoryServersSettingsSection = function buildCategoryServersSettingsSection() {
  const obj = { settings: null };
  const items = [MobileNotifSettings.MobileNotifSettings.NOTIF_GUILD_EVENT_NOTIFICATIONS, MobileNotifSettings.MobileNotifSettings.NOTIF_FORUM_NOTIFICATIONS, MobileNotifSettings.MobileNotifSettings.NOTIF_OTHER_GUILD, MobileNotifSettings.MobileNotifSettings.NOTIF_SAFETY_ALERTS, MobileNotifSettings.MobileNotifSettings.NOTIF_STAGE_NOTIFICATIONS];
  obj.settings = items;
  return obj;
};