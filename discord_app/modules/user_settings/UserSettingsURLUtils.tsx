// === Module 5454: UserSettingsURLUtils ===

// Module 5454 (UserSettingsURLUtils)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import UserSettingsKeys from "UserSettingsKeys" /* 5455 */;
import keysSorter from "keysSorter" /* 5456 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const UserSettingsPath = fn(1084).UserSettingsPath;
const Constants = fn(1074);
({ AnalyticEvents: hasOwnProperty, Routes: metroRequire } = Constants);
const re7 = /[_\s]|%20/g;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/UserSettingsURLUtils.tsx");

export const settingsPathToRoute = function settingsPathToRoute(ACCOUNT) {
  const parts = ACCOUNT.split("/");
  return timestampProducer.SETTINGS(parts[0], parts[1]);
};
export const trackParseSettingsUrl = function trackParseSettingsUrl(path, user_settings_url_origin) {
  path = path.path;
  if (null != path.target) {
    let obj = { user_settings_url_path: path, user_settings_url_origin };
    AnalyticsUtilsDefault.track(constants.USER_SETTINGS_URL_PARSED, obj);
  } else {
    obj = { user_settings_url_origin, user_settings_url_path: path };
    obj.track(constants.USER_SETTINGS_URL_PARSING_FAILED, obj);
  }
};
export const parseSettingsUrl = function parseSettingsUrl(arg0) {
  ({ path, search } = arg0);
  const tmp = _slicedToArray(path.split("?")[0].split("/"), 4);
  let str4 = "";
  let str5 = "";
  if (null != tmp[2]) {
    str5 = str2.toLowerCase().replace(re7, "-");
    const str6 = str2.toLowerCase();
  }
  const items = [str5, ];
  if (null != tmp[3]) {
    str4 = str3.toLowerCase().replace(re7, "-");
    const str8 = str3.toLowerCase();
  }
  items[1] = str4;
  const found = items.filter(Boolean);
  const joined = found.join("/");
  let obj = { [closure_1_4.ACCOUNT]: UserSettingsKeys.WebUserSettings.ACCOUNT_PANEL, [ACCOUNT_STANDING]: UserSettingsKeys.WebUserSettings.ACCOUNT_STANDING_CATEGORY, [ACCOUNT_ACCOUNT_STANDING]: UserSettingsKeys.WebUserSettings.ACCOUNT_STANDING_CATEGORY, [PROFILE_CUSTOMIZATION]: UserSettingsKeys.WebUserSettings.PROFILE_PANEL, [CONTENT_AND_SOCIAL]: UserSettingsKeys.WebUserSettings.MESSAGING_PERMISSIONS_PANEL, [CONNECTED_GAMES]: UserSettingsKeys.WebUserSettings.CONNECTED_GAMES_CATEGORY, [CONTENT_AND_SOCIAL_CONNECTED_GAMES]: UserSettingsKeys.WebUserSettings.CONNECTED_GAMES_CATEGORY, [DATA_AND_PRIVACY]: UserSettingsKeys.WebUserSettings.DATA_AND_PRIVACY_PANEL, [PRIVACY_AND_SAFETY]: UserSettingsKeys.WebUserSettings.DATA_AND_PRIVACY_PANEL, [FAMILY_CENTER]: UserSettingsKeys.WebUserSettings.FAMILY_CENTER_PANEL, [SESSIONS]: UserSettingsKeys.WebUserSettings.SESSIONS_PANEL, [AUTHORIZED_APPS]: UserSettingsKeys.WebUserSettings.AUTHORIZED_APPS_CATEGORY, [CONNECTIONS]: UserSettingsKeys.WebUserSettings.CONNECTIONS_CATEGORY, [CLIPS]: UserSettingsKeys.WebUserSettings.CLIPS_PANEL, [PREMIUM]: UserSettingsKeys.WebUserSettings.NITRO_PANEL, [GUILD_BOOSTING]: UserSettingsKeys.WebUserSettings.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, [SUBSCRIPTIONS]: UserSettingsKeys.WebUserSettings.SUBSCRIPTIONS_PANEL, [SUBSCRIPTIONS_ROLE_SUBSCRIPTIONS]: UserSettingsKeys.WebUserSettings.SUBSCRIPTIONS_PANEL, [INVENTORY]: UserSettingsKeys.WebUserSettings.GIFT_PANEL, [BILLING]: UserSettingsKeys.WebUserSettings.BILLING_PANEL, [APPEARANCE]: UserSettingsKeys.WebUserSettings.APPEARANCE_PANEL, [ACCESSIBILITY]: UserSettingsKeys.WebUserSettings.ACCESSIBILITY_PANEL, [VOICE]: UserSettingsKeys.WebUserSettings.VOICE_AND_VIDEO_PANEL, [POGGERMODE]: UserSettingsKeys.WebUserSettings.POGGERMODE_PANEL, [TEXT]: UserSettingsKeys.WebUserSettings.APPEARANCE_MESSAGES_CATEGORY, [NOTIFICATIONS]: UserSettingsKeys.WebUserSettings.NOTIFICATIONS_PANEL, [EMAILS]: UserSettingsKeys.WebUserSettings.NOTIFICATIONS_EMAIL_CATEGORY, [NOTIFICATIONS_EMAILS]: UserSettingsKeys.WebUserSettings.NOTIFICATIONS_EMAIL_CATEGORY, [KEYBINDS]: UserSettingsKeys.WebUserSettings.SYSTEM_CUSTOM_KEYBINDS_CATEGORY, [SYSTEM]: UserSettingsKeys.WebUserSettings.SYSTEM_PANEL, [LANGUAGE]: UserSettingsKeys.WebUserSettings.LANGUAGE_AND_TIME_PANEL, [WINDOWS]: UserSettingsKeys.WebUserSettings.SYSTEM_PANEL, [LINUX]: UserSettingsKeys.WebUserSettings.SYSTEM_PANEL, [STREAMER_MODE]: UserSettingsKeys.WebUserSettings.STREAMER_MODE_CATEGORY, [ADVANCED]: UserSettingsKeys.WebUserSettings.DEVELOPER_PANEL, [ACTIVITY_PRIVACY]: UserSettingsKeys.WebUserSettings.ACTIVITY_PRIVACY_PANEL, [REGISTERED_GAMES]: UserSettingsKeys.WebUserSettings.REGISTERED_GAMES_PANEL, [OVERLAY]: UserSettingsKeys.WebUserSettings.OVERLAY_PANEL, [EXPERIMENTS]: UserSettingsKeys.WebUserSettings.EXPERIMENTS_PANEL, [DEVELOPER_OPTIONS]: UserSettingsKeys.WebUserSettings.DEVELOPER_OPTIONS_PANEL };
  ({ ACCOUNT_STANDING, ACCOUNT_ACCOUNT_STANDING, PROFILE_CUSTOMIZATION, CONTENT_AND_SOCIAL, CONNECTED_GAMES, CONTENT_AND_SOCIAL_CONNECTED_GAMES, DATA_AND_PRIVACY, PRIVACY_AND_SAFETY, FAMILY_CENTER, SESSIONS, AUTHORIZED_APPS, CONNECTIONS, CLIPS, PREMIUM, GUILD_BOOSTING, SUBSCRIPTIONS, SUBSCRIPTIONS_ROLE_SUBSCRIPTIONS, INVENTORY, BILLING, APPEARANCE, ACCESSIBILITY, VOICE, POGGERMODE, TEXT, NOTIFICATIONS, EMAILS, NOTIFICATIONS_EMAILS, KEYBINDS, SYSTEM, LANGUAGE, WINDOWS, LINUX, STREAMER_MODE, ADVANCED, ACTIVITY_PRIVACY, REGISTERED_GAMES, OVERLAY, EXPERIMENTS, DEVELOPER_OPTIONS } = UserSettingsPath);
  let values = Object.values(UserSettingsPath);
  let tmp8;
  if (values.includes(joined)) {
    tmp8 = obj[joined];
  }
  if (tmp8 == null) {
    const _Object = Object;
    values = Object.values(tmp5);
    let tmp9;
    if (values.includes(str5)) {
      tmp9 = obj[str5];
    }
    tmp8 = tmp9;
  }
  obj = { target: tmp8, path: joined, params: null };
  const str = path.split("?")[0];
  tmp5 = UserSettingsPath;
  if (search == null) {
    const _location = location;
    search = location.search;
  }
  obj.params = keysSorter.parse(search);
  return obj;
};