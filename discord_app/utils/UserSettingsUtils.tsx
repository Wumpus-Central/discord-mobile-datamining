import { getSystemLocale } from "../intl/index.native.tsx";
import { collectGuildAnalyticsMetadata } from "../modules/app_analytics/AppAnalyticsUtils.tsx";
import { getSearchSessionId } from "../modules/settings/tracking/SettingSearchSessionAnalyticsManager.tsx";
import { explicitContentFromProto } from "../modules/user_settings/UserSettings.tsx";
import { ComponentDispatcher } from "ComponentDispatchUtils.tsx";
// discord_app/utils/UserSettingsUtils.tsx
import handleConnectionOpen from "handleConnectionOpen";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import ME from "ME";

let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ AnalyticEvents: c5, FriendSourceFlags: closure_6, AllFriendSourceFlags: error, ComponentActions: metroImportAll } = ME);
let obj = { UNDECIDED: 0, [0]: "UNDECIDED", OPTIN: 1, [1]: "OPTIN", OPTOUT: 2, [2]: "OPTOUT" };
const result = require("ME").fileFinishedImporting("utils/UserSettingsUtils.tsx");

export const getSanitizedRestrictedGuilds = function getSanitizedRestrictedGuilds() {
  const RestrictedGuildIds = explicitContentFromProto /* explicitContentFromProto */.RestrictedGuildIds;
  const setting = RestrictedGuildIds.getSetting();
  let found = setting;
  if (0 === handleConnectionOpen.totalUnavailableGuilds) {
    found = setting.filter((arg0) => null != guild.getGuild(arg0));
  }
  return new Set(found);
};
export const getSanitizedMessageRequestRestrictedGuilds = function getSanitizedMessageRequestRestrictedGuilds() {
  const MessageRequestRestrictedGuildIds = explicitContentFromProto /* explicitContentFromProto */.MessageRequestRestrictedGuildIds;
  const setting = MessageRequestRestrictedGuildIds.getSetting();
  let found = setting;
  if (0 === handleConnectionOpen.totalUnavailableGuilds) {
    found = setting.filter((arg0) => null != guild.getGuild(arg0));
  }
  return new Set(found);
};
export const getSanitizedActivityRestrictedGuilds = function getSanitizedActivityRestrictedGuilds() {
  const ActivityRestrictedGuilds = explicitContentFromProto /* explicitContentFromProto */.ActivityRestrictedGuilds;
  const setting = ActivityRestrictedGuilds.getSetting();
  let found = setting;
  if (0 === handleConnectionOpen.totalUnavailableGuilds) {
    found = setting.filter((arg0) => null != guild.getGuild(arg0));
  }
  return new Set(found);
};
export const getSanitizedActivityJoiningRestrictedGuilds = function getSanitizedActivityJoiningRestrictedGuilds() {
  const ActivityJoiningRestrictedGuilds = explicitContentFromProto /* explicitContentFromProto */.ActivityJoiningRestrictedGuilds;
  const setting = ActivityJoiningRestrictedGuilds.getSetting();
  let found = setting;
  if (0 === handleConnectionOpen.totalUnavailableGuilds) {
    found = setting.filter((arg0) => null != guild.getGuild(arg0));
  }
  return new Set(found);
};
export const computeFlags = function computeFlags(setting) {
  if ((setting & closure_7) === closure_7) {
    let obj = { all: true, mutualFriends: true, mutualGuilds: true };
  } else {
    obj = { all: false, mutualFriends: null, mutualGuilds: null };
    obj[1] = (setting & constants2.MUTUAL_FRIENDS) === constants2.MUTUAL_FRIENDS;
    obj[2] = (setting & constants2.MUTUAL_GUILDS) === constants2.MUTUAL_GUILDS;
  }
  return obj;
};
export const trackUserSettingsPaneViewed = function trackUserSettingsPaneViewed(arg0) {
  let applicationId;
  let destinationPane;
  let locationStack;
  let originPane;
  let source;
  let subsection;
  ({ destinationPane, originPane, source, subsection, locationStack, applicationId } = arg0);
  let obj = collectGuildAnalyticsMetadata;
  obj = { settings_type: "user", origin_pane: originPane, destination_pane: destinationPane, location_stack: locationStack, source, subsection, application_id: applicationId, search_session_id: null };
  obj[7] = getSearchSessionId.getSearchSessionId();
  obj.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, obj);
};
export const NonSpamRetrainingOptInOptions = obj;
export const NonSpamRetrainingOptInOptionsToValue = { [obj.UNDECIDED]: undefined, [obj.OPTIN]: true, [obj.OPTOUT]: false };
export const generateNonSpamRetrainingOptInSettingOptions = function generateNonSpamRetrainingOptInSettingOptions() {
  let obj = { name: null, desc: null, value: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t["/yLMRQ"]);
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj[1] = intl2.string(getSystemLocale /* getSystemLocale */.t["3fzkPq"]);
  obj[2] = obj.OPTIN;
  const items = [obj, , ];
  obj = { name: null, desc: null, value: null };
  const intl3 = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl3.string(getSystemLocale /* getSystemLocale */.t["21fP2b"]);
  const intl4 = getSystemLocale /* getSystemLocale */.intl;
  obj[1] = intl4.string(getSystemLocale /* getSystemLocale */.t.ggJ9jR);
  obj[2] = obj.OPTOUT;
  items[1] = obj;
  obj = { name: null, desc: null, value: null };
  const intl5 = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl5.string(getSystemLocale /* getSystemLocale */.t.OWIo8w);
  const intl6 = getSystemLocale /* getSystemLocale */.intl;
  obj[1] = intl6.string(getSystemLocale /* getSystemLocale */.t.HqYXpw);
  obj[2] = obj.UNDECIDED;
  items[2] = obj;
  return items;
};
export const shakeUserSettings = function shakeUserSettings(arg0) {
  const ComponentDispatch = ComponentDispatcher /* ComponentDispatcher */.ComponentDispatch;
  ComponentDispatch.dispatch(constants3.SHAKE_SETTINGS_MODAL, arg0);
};