// discord_app/modules/user_settings/UserSettingsURLUtils.tsx
import _slicedToArray from "_slicedToArray";
import { UserSettingsPath } from "MAX_FAVORITES";
import ME from "ME";
import { keysSorter } from "../../../_runtime/05125_keysSorter.js";
import { expandEventProperties } from "../../utils/AnalyticsUtils.tsx";
import { WebUserSettings } from "UserSettingsKeys.tsx";
import { apexExperiment } from "UserSettingsRedesignExperiment.tsx";

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
  let ACCOUNT;
  let ACCOUNT_ACCOUNT_STANDING;
  let ACCOUNT_STANDING;
  let CONTENT_AND_SOCIAL;
  let PROFILE_CUSTOMIZATION;
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
  const str = path.split("?")[0];
  const isEligibleForUserSettingsRedesign4DExperiment = apexExperiment.getIsEligibleForUserSettingsRedesign4DExperiment("UserSection");
  let obj = { [ACCOUNT]: WebUserSettings.WebUserSettings.ACCOUNT_PANEL, [ACCOUNT_STANDING]: WebUserSettings.WebUserSettings.ACCOUNT_STANDING_CATEGORY, [ACCOUNT_ACCOUNT_STANDING]: WebUserSettings.WebUserSettings.ACCOUNT_STANDING_CATEGORY, [PROFILE_CUSTOMIZATION]: WebUserSettings.WebUserSettings.PROFILE_PANEL };
  ({ ACCOUNT, ACCOUNT_STANDING, ACCOUNT_ACCOUNT_STANDING, PROFILE_CUSTOMIZATION, CONTENT_AND_SOCIAL } = UserSettingsPath);
  const WebUserSettings = WebUserSettings.WebUserSettings;
  obj[CONTENT_AND_SOCIAL] = isEligibleForUserSettingsRedesign4DExperiment ? WebUserSettings.MESSAGING_PERMISSIONS_PANEL : WebUserSettings.CONTENT_AND_SOCIAL_PANEL;
  obj[UserSettingsPath.CONNECTED_GAMES] = WebUserSettings.WebUserSettings.CONNECTED_GAMES_CATEGORY;
  obj[UserSettingsPath.CONTENT_AND_SOCIAL_CONNECTED_GAMES] = WebUserSettings.WebUserSettings.CONNECTED_GAMES_CATEGORY;
  obj[UserSettingsPath.DATA_AND_PRIVACY] = WebUserSettings.WebUserSettings.DATA_AND_PRIVACY_PANEL;
  obj[UserSettingsPath.PRIVACY_AND_SAFETY] = WebUserSettings.WebUserSettings.DATA_AND_PRIVACY_PANEL;
  obj[UserSettingsPath.FAMILY_CENTER] = WebUserSettings.WebUserSettings.FAMILY_CENTER_PANEL;
  obj[UserSettingsPath.SESSIONS] = WebUserSettings.WebUserSettings.SESSIONS_PANEL;
  const WebUserSettings2 = tmp5(5124).WebUserSettings;
  obj[UserSettingsPath.AUTHORIZED_APPS] = isEligibleForUserSettingsRedesign4DExperiment ? WebUserSettings2.AUTHORIZED_APPS_CATEGORY : WebUserSettings2.AUTHORIZED_APPS_PANEL;
  const WebUserSettings3 = tmp5(5124).WebUserSettings;
  obj[UserSettingsPath.CONNECTIONS] = isEligibleForUserSettingsRedesign4DExperiment ? WebUserSettings3.CONNECTIONS_CATEGORY : WebUserSettings3.CONNECTIONS_PANEL;
  obj[UserSettingsPath.CLIPS] = WebUserSettings.WebUserSettings.CLIPS_PANEL;
  obj[UserSettingsPath.PREMIUM] = WebUserSettings.WebUserSettings.NITRO_PANEL;
  obj[UserSettingsPath.GUILD_BOOSTING] = WebUserSettings.WebUserSettings.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL;
  obj[UserSettingsPath.SUBSCRIPTIONS] = WebUserSettings.WebUserSettings.SUBSCRIPTIONS_PANEL;
  obj[UserSettingsPath.SUBSCRIPTIONS_ROLE_SUBSCRIPTIONS] = WebUserSettings.WebUserSettings.SUBSCRIPTIONS_PANEL;
  obj[UserSettingsPath.INVENTORY] = WebUserSettings.WebUserSettings.GIFT_PANEL;
  obj[UserSettingsPath.BILLING] = WebUserSettings.WebUserSettings.BILLING_PANEL;
  obj[UserSettingsPath.APPEARANCE] = WebUserSettings.WebUserSettings.APPEARANCE_PANEL;
  obj[UserSettingsPath.ACCESSIBILITY] = WebUserSettings.WebUserSettings.ACCESSIBILITY_PANEL;
  obj[UserSettingsPath.VOICE] = WebUserSettings.WebUserSettings.VOICE_AND_VIDEO_PANEL;
  obj[UserSettingsPath.POGGERMODE] = WebUserSettings.WebUserSettings.POGGERMODE_PANEL;
  obj[UserSettingsPath.TEXT] = WebUserSettings.WebUserSettings.APPEARANCE_MESSAGES_CATEGORY;
  obj[UserSettingsPath.NOTIFICATIONS] = WebUserSettings.WebUserSettings.NOTIFICATIONS_PANEL;
  obj[UserSettingsPath.EMAILS] = WebUserSettings.WebUserSettings.NOTIFICATIONS_EMAIL_CATEGORY;
  obj[UserSettingsPath.NOTIFICATIONS_EMAILS] = WebUserSettings.WebUserSettings.NOTIFICATIONS_EMAIL_CATEGORY;
  obj[UserSettingsPath.KEYBINDS] = WebUserSettings.WebUserSettings.SYSTEM_CUSTOM_KEYBINDS_CATEGORY;
  obj[UserSettingsPath.SYSTEM] = WebUserSettings.WebUserSettings.SYSTEM_PANEL;
  obj[UserSettingsPath.LANGUAGE] = WebUserSettings.WebUserSettings.LANGUAGE_AND_TIME_PANEL;
  obj[UserSettingsPath.WINDOWS] = WebUserSettings.WebUserSettings.SYSTEM_PANEL;
  obj[UserSettingsPath.LINUX] = WebUserSettings.WebUserSettings.SYSTEM_PANEL;
  obj[UserSettingsPath.STREAMER_MODE] = WebUserSettings.WebUserSettings.STREAMER_MODE_CATEGORY;
  obj[UserSettingsPath.ADVANCED] = WebUserSettings.WebUserSettings.DEVELOPER_PANEL;
  obj[UserSettingsPath.ACTIVITY_PRIVACY] = WebUserSettings.WebUserSettings.ACTIVITY_PRIVACY_PANEL;
  obj[UserSettingsPath.REGISTERED_GAMES] = WebUserSettings.WebUserSettings.REGISTERED_GAMES_PANEL;
  obj[UserSettingsPath.OVERLAY] = WebUserSettings.WebUserSettings.OVERLAY_PANEL;
  obj[UserSettingsPath.EXPERIMENTS] = WebUserSettings.WebUserSettings.EXPERIMENTS_PANEL;
  obj[UserSettingsPath.DEVELOPER_OPTIONS] = WebUserSettings.WebUserSettings.DEVELOPER_OPTIONS_PANEL;
  let values = Object.values(tmp8);
  let tmp9;
  if (values.includes(joined)) {
    tmp9 = obj[joined];
  }
  if (tmp9 == null) {
    const _Object = Object;
    values = Object.values(tmp8);
    let tmp10;
    if (values.includes(str5)) {
      tmp10 = obj[str5];
    }
    tmp9 = tmp10;
  }
  obj = { target: tmp9, path: joined, params: null };
  const obj2 = apexExperiment;
  if (search == null) {
    const _location = location;
    search = location.search;
  }
  obj[2] = keysSorter.parse(search);
  return obj;
};