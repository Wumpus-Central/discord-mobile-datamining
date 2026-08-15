// discord_app/modules/user_settings/UserSettingsURLUtils.tsx
import _slicedToArray from "_slicedToArray";
import { UserSettingsPath } from "MAX_FAVORITES";
import ME from "ME";
import { keysSorter } from "../../../_runtime/04376_keysSorter.js";
import { expandEventProperties } from "../../utils/AnalyticsUtils.tsx";
import { WebUserSettings } from "UserSettingsKeys.tsx";

let c5;
let closure_6;
const require = arg1;
({ AnalyticEvents: c5, Routes: closure_6 } = ME);
const re7 = /[_\s]|%20/g;
const result = require("ME").fileFinishedImporting("modules/user_settings/UserSettingsURLUtils.tsx");

export const settingsPathToRoute = function settingsPathToRoute(ACCOUNT) {
  const parts = ACCOUNT.split("/");
  return closure_6.SETTINGS(parts[0], parts[1]);
};
export const trackParseSettingsUrl = function trackParseSettingsUrl(path) {
  path = path.path;
  if (null != path.target) {
    let obj = { user_settings_url_path: null, user_settings_url_origin: null };
    obj[0] = path;
    obj[1] = arg1;
    expandEventProperties.track(constants.USER_SETTINGS_URL_PARSED, obj);
    const obj3 = expandEventProperties;
  } else {
    obj = expandEventProperties;
    obj = { user_settings_url_origin: null, user_settings_url_path: null };
    obj[0] = arg1;
    obj[1] = path;
    obj.track(constants.USER_SETTINGS_URL_PARSING_FAILED, obj);
  }
};
export const parseSettingsUrl = function parseSettingsUrl(arg0) {
  let ACCESSIBILITY;
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
  let path;
  let search;
  ({ path, search } = arg0);
  const tmp = callback(path.split("?")[0].split("/"), 4);
  let str4 = "";
  let str5 = "";
  if (null != tmp[2]) {
    str5 = str2.toLowerCase().replace(closure_7, "-");
    const str6 = str2.toLowerCase();
  }
  const items = [str5, ];
  if (null != tmp[3]) {
    str4 = str3.toLowerCase().replace(closure_7, "-");
    const str8 = str3.toLowerCase();
  }
  items[1] = str4;
  const found = items.filter(Boolean);
  const joined = found.join("/");
  let obj = { [closure_4.ACCOUNT]: WebUserSettings.WebUserSettings.ACCOUNT_PANEL, [ACCOUNT_STANDING]: WebUserSettings.WebUserSettings.ACCOUNT_STANDING_CATEGORY, [ACCOUNT_ACCOUNT_STANDING]: WebUserSettings.WebUserSettings.ACCOUNT_STANDING_CATEGORY, [PROFILE_CUSTOMIZATION]: WebUserSettings.WebUserSettings.PROFILE_PANEL, [CONTENT_AND_SOCIAL]: WebUserSettings.WebUserSettings.MESSAGING_PERMISSIONS_PANEL, [CONNECTED_GAMES]: WebUserSettings.WebUserSettings.CONNECTED_GAMES_CATEGORY, [CONTENT_AND_SOCIAL_CONNECTED_GAMES]: WebUserSettings.WebUserSettings.CONNECTED_GAMES_CATEGORY, [DATA_AND_PRIVACY]: WebUserSettings.WebUserSettings.DATA_AND_PRIVACY_PANEL, [PRIVACY_AND_SAFETY]: WebUserSettings.WebUserSettings.DATA_AND_PRIVACY_PANEL, [FAMILY_CENTER]: WebUserSettings.WebUserSettings.FAMILY_CENTER_PANEL, [SESSIONS]: WebUserSettings.WebUserSettings.SESSIONS_PANEL, [AUTHORIZED_APPS]: WebUserSettings.WebUserSettings.AUTHORIZED_APPS_CATEGORY, [CONNECTIONS]: WebUserSettings.WebUserSettings.CONNECTIONS_CATEGORY, [CLIPS]: WebUserSettings.WebUserSettings.CLIPS_PANEL, [PREMIUM]: WebUserSettings.WebUserSettings.NITRO_PANEL, [GUILD_BOOSTING]: WebUserSettings.WebUserSettings.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, [SUBSCRIPTIONS]: WebUserSettings.WebUserSettings.SUBSCRIPTIONS_PANEL, [SUBSCRIPTIONS_ROLE_SUBSCRIPTIONS]: WebUserSettings.WebUserSettings.SUBSCRIPTIONS_PANEL, [INVENTORY]: WebUserSettings.WebUserSettings.GIFT_PANEL, [BILLING]: WebUserSettings.WebUserSettings.BILLING_PANEL, [APPEARANCE]: WebUserSettings.WebUserSettings.APPEARANCE_PANEL, [ACCESSIBILITY]: WebUserSettings.WebUserSettings.ACCESSIBILITY_PANEL, [VOICE]: WebUserSettings.WebUserSettings.VOICE_AND_VIDEO_PANEL, [POGGERMODE]: WebUserSettings.WebUserSettings.POGGERMODE_PANEL, [TEXT]: WebUserSettings.WebUserSettings.APPEARANCE_MESSAGES_CATEGORY, [NOTIFICATIONS]: WebUserSettings.WebUserSettings.NOTIFICATIONS_PANEL, [EMAILS]: WebUserSettings.WebUserSettings.NOTIFICATIONS_EMAIL_CATEGORY, [NOTIFICATIONS_EMAILS]: WebUserSettings.WebUserSettings.NOTIFICATIONS_EMAIL_CATEGORY, [KEYBINDS]: WebUserSettings.WebUserSettings.SYSTEM_CUSTOM_KEYBINDS_CATEGORY, [SYSTEM]: WebUserSettings.WebUserSettings.SYSTEM_PANEL, [LANGUAGE]: WebUserSettings.WebUserSettings.LANGUAGE_AND_TIME_PANEL, [WINDOWS]: WebUserSettings.WebUserSettings.SYSTEM_PANEL, [LINUX]: WebUserSettings.WebUserSettings.SYSTEM_PANEL, [STREAMER_MODE]: WebUserSettings.WebUserSettings.STREAMER_MODE_CATEGORY, [ADVANCED]: WebUserSettings.WebUserSettings.DEVELOPER_PANEL, [ACTIVITY_PRIVACY]: WebUserSettings.WebUserSettings.ACTIVITY_PRIVACY_PANEL, [REGISTERED_GAMES]: WebUserSettings.WebUserSettings.REGISTERED_GAMES_PANEL, [OVERLAY]: WebUserSettings.WebUserSettings.OVERLAY_PANEL, [EXPERIMENTS]: WebUserSettings.WebUserSettings.EXPERIMENTS_PANEL, [DEVELOPER_OPTIONS]: WebUserSettings.WebUserSettings.DEVELOPER_OPTIONS_PANEL };
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
  const tmp6 = require;
  if (search == null) {
    const _location = location;
    search = location.search;
  }
  obj[2] = keysSorter.parse(search);
  return obj;
};