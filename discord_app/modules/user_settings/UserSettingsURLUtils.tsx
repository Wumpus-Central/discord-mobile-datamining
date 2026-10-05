// discord_app/modules/user_settings/UserSettingsURLUtils.tsx
import UserSettingsConstants from "UserSettingsConstants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import UserSettingsKeys from "UserSettingsKeys.tsx";
import _mod5635 from "../../../_runtime/metro/05635__.js";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroRequire;
const UserSettingsPath = UserSettingsConstants.UserSettingsPath;
({ AnalyticEvents: hasOwnProperty, Routes: metroRequire } = Constants);
const re7 = /[_\s]|%20/g;
const result = size.fileFinishedImporting("modules/user_settings/UserSettingsURLUtils.tsx");

export const settingsPathToRoute = function settingsPathToRoute(ACCOUNT) {
  const parts = ACCOUNT.split("/");
  return metroRequire.SETTINGS(parts[0], parts[1]);
};
export const trackParseSettingsUrl = function trackParseSettingsUrl(path, user_settings_url_origin) {
  path = path.path;
  if (null != path.target) {
    const obj2 = { user_settings_url_path: path, user_settings_url_origin };
    const obj3 = AnalyticsUtilsDefault;
    obj3.track(hasOwnProperty.USER_SETTINGS_URL_PARSED, obj2);
  } else {
    const obj4 = { user_settings_url_origin, user_settings_url_path: path };
    const obj = AnalyticsUtilsDefault;
    obj.track(hasOwnProperty.USER_SETTINGS_URL_PARSING_FAILED, obj4);
  }
};
export const parseSettingsUrl = function parseSettingsUrl(arg0) {
  let ACCESSIBILITY;
  let ACCOUNT;
  let ACCOUNT_ACCOUNT_STANDING;
  let ACCOUNT_STANDING;
  let ACTIVITY_PRIVACY;
  let ADVANCED;
  let APPEARANCE;
  let AUTHORIZED_APPS;
  let BILLING;
  let CLIPS;
  let CONNECTED_GAMES;
  let CONNECTIONS;
  let CONTENT_AND_SOCIAL;
  let CONTENT_AND_SOCIAL_CONNECTED_GAMES;
  let DATA_AND_PRIVACY;
  let DEVELOPER_OPTIONS;
  let EMAILS;
  let EXPERIMENTS;
  let FAMILY_CENTER;
  let GUILD_BOOSTING;
  let INVENTORY;
  let KEYBINDS;
  let LANGUAGE;
  let LINUX;
  let NOTIFICATIONS;
  let NOTIFICATIONS_EMAILS;
  let OVERLAY;
  let POGGERMODE;
  let PREMIUM;
  let PRIVACY_AND_SAFETY;
  let PROFILE_CUSTOMIZATION;
  let REGISTERED_GAMES;
  let SESSIONS;
  let STREAMER_MODE;
  let SUBSCRIPTIONS;
  let SUBSCRIPTIONS_ROLE_SUBSCRIPTIONS;
  let SYSTEM;
  let TEXT;
  let VOICE;
  let WINDOWS;
  let parse;
  let path;
  let search;
  ({ path, search } = arg0);
  const str = path.split("?")[0];
  const tmp = _slicedToArray(str.split("/"), 4);
  let str4 = "";
  let str5 = "";
  if (null != tmp[2]) {
    const str6 = tmp[2].toLowerCase();
    str5 = str6.replace(re7, "-");
  }
  const items = [str5];
  if (null != tmp[3]) {
    const str8 = tmp[3].toLowerCase();
    str4 = str8.replace(re7, "-");
  }
  items[1] = str4;
  const found = items.filter(Boolean);
  const joined = found.join("/");
  const obj = {
    [ACCOUNT]: UserSettingsKeys.WebUserSettings.ACCOUNT_PANEL,
    [ACCOUNT_STANDING]: UserSettingsKeys.WebUserSettings.ACCOUNT_STANDING_PANEL,
    [ACCOUNT_ACCOUNT_STANDING]: UserSettingsKeys.WebUserSettings.ACCOUNT_STANDING_PANEL,
    [PROFILE_CUSTOMIZATION]: UserSettingsKeys.WebUserSettings.PROFILE_PANEL,
    [CONTENT_AND_SOCIAL]: UserSettingsKeys.WebUserSettings.MESSAGING_PERMISSIONS_PANEL,
    [CONNECTED_GAMES]: UserSettingsKeys.WebUserSettings.CONNECTED_GAMES_CATEGORY,
    [CONTENT_AND_SOCIAL_CONNECTED_GAMES]: UserSettingsKeys.WebUserSettings.CONNECTED_GAMES_CATEGORY,
    [DATA_AND_PRIVACY]: UserSettingsKeys.WebUserSettings.DATA_AND_PRIVACY_PANEL,
    [PRIVACY_AND_SAFETY]: UserSettingsKeys.WebUserSettings.DATA_AND_PRIVACY_PANEL,
    [FAMILY_CENTER]: UserSettingsKeys.WebUserSettings.FAMILY_CENTER_PANEL,
    [SESSIONS]: UserSettingsKeys.WebUserSettings.SESSIONS_PANEL,
    [AUTHORIZED_APPS]: UserSettingsKeys.WebUserSettings.AUTHORIZED_APPS_CATEGORY,
    [CONNECTIONS]: UserSettingsKeys.WebUserSettings.CONNECTIONS_CATEGORY,
    [CLIPS]: UserSettingsKeys.WebUserSettings.CLIPS_PANEL,
    [PREMIUM]: UserSettingsKeys.WebUserSettings.NITRO_PANEL,
    [GUILD_BOOSTING]: UserSettingsKeys.WebUserSettings.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL,
    [SUBSCRIPTIONS]: UserSettingsKeys.WebUserSettings.SUBSCRIPTIONS_PANEL,
    [SUBSCRIPTIONS_ROLE_SUBSCRIPTIONS]: UserSettingsKeys.WebUserSettings.SUBSCRIPTIONS_PANEL,
    [INVENTORY]: UserSettingsKeys.WebUserSettings.GIFT_PANEL,
    [BILLING]: UserSettingsKeys.WebUserSettings.BILLING_PANEL,
    [APPEARANCE]: UserSettingsKeys.WebUserSettings.APPEARANCE_PANEL,
    [ACCESSIBILITY]: UserSettingsKeys.WebUserSettings.ACCESSIBILITY_PANEL,
    [VOICE]: UserSettingsKeys.WebUserSettings.VOICE_AND_VIDEO_PANEL,
    [POGGERMODE]: UserSettingsKeys.WebUserSettings.POGGERMODE_PANEL,
    [TEXT]: UserSettingsKeys.WebUserSettings.APPEARANCE_MESSAGES_CATEGORY,
    [NOTIFICATIONS]: UserSettingsKeys.WebUserSettings.NOTIFICATIONS_PANEL,
    [EMAILS]: UserSettingsKeys.WebUserSettings.NOTIFICATIONS_EMAIL_CATEGORY,
    [NOTIFICATIONS_EMAILS]: UserSettingsKeys.WebUserSettings.NOTIFICATIONS_EMAIL_CATEGORY,
    [KEYBINDS]: UserSettingsKeys.WebUserSettings.SYSTEM_CUSTOM_KEYBINDS_CATEGORY,
    [SYSTEM]: UserSettingsKeys.WebUserSettings.SYSTEM_PANEL,
    [LANGUAGE]: UserSettingsKeys.WebUserSettings.LANGUAGE_AND_TIME_PANEL,
    [WINDOWS]: UserSettingsKeys.WebUserSettings.SYSTEM_PANEL,
    [LINUX]: UserSettingsKeys.WebUserSettings.SYSTEM_PANEL,
    [STREAMER_MODE]: UserSettingsKeys.WebUserSettings.STREAMER_MODE_CATEGORY,
    [ADVANCED]: UserSettingsKeys.WebUserSettings.DEVELOPER_PANEL,
    [ACTIVITY_PRIVACY]: UserSettingsKeys.WebUserSettings.ACTIVITY_PRIVACY_PANEL,
    [REGISTERED_GAMES]: UserSettingsKeys.WebUserSettings.REGISTERED_GAMES_PANEL,
    [OVERLAY]: UserSettingsKeys.WebUserSettings.OVERLAY_PANEL,
    [EXPERIMENTS]: UserSettingsKeys.WebUserSettings.EXPERIMENTS_PANEL,
    [DEVELOPER_OPTIONS]: UserSettingsKeys.WebUserSettings.DEVELOPER_OPTIONS_PANEL,
  };
  ACCOUNT = UserSettingsPath.ACCOUNT;
  ({
    ACCOUNT_STANDING,
    ACCOUNT_ACCOUNT_STANDING,
    PROFILE_CUSTOMIZATION,
    CONTENT_AND_SOCIAL,
    CONNECTED_GAMES,
    CONTENT_AND_SOCIAL_CONNECTED_GAMES,
    DATA_AND_PRIVACY,
    PRIVACY_AND_SAFETY,
    FAMILY_CENTER,
    SESSIONS,
    AUTHORIZED_APPS,
    CONNECTIONS,
    CLIPS,
    PREMIUM,
    GUILD_BOOSTING,
    SUBSCRIPTIONS,
    SUBSCRIPTIONS_ROLE_SUBSCRIPTIONS,
    INVENTORY,
    BILLING,
    APPEARANCE,
    ACCESSIBILITY,
    VOICE,
    POGGERMODE,
    TEXT,
    NOTIFICATIONS,
    EMAILS,
    NOTIFICATIONS_EMAILS,
    KEYBINDS,
    SYSTEM,
    LANGUAGE,
    WINDOWS,
    LINUX,
    STREAMER_MODE,
    ADVANCED,
    ACTIVITY_PRIVACY,
    REGISTERED_GAMES,
    OVERLAY,
    EXPERIMENTS,
    DEVELOPER_OPTIONS,
  } = UserSettingsPath);
  const values = Object.values(UserSettingsPath);
  let tmp8;
  if (values.includes(joined)) {
    tmp8 = obj[joined];
  }
  if (tmp8 == null) {
    const _Object = Object;
    const values2 = Object.values(UserSettingsPath);
    let tmp9;
    if (values2.includes(str5)) {
      tmp9 = obj[str5];
    }
    tmp8 = tmp9;
  }
  const obj2 = { target: tmp8, path: joined, params: parse(search) };
  parse = _mod5635.parse;
  _mod5635;
  if (search == null) {
    const _location = location;
    search = location.search;
  }
  return obj2;
};
