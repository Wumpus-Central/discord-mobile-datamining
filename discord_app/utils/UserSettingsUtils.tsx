// === Module 7357: getSanitizedRestrictedGuilds ===

// Module 7357 (getSanitizedRestrictedGuilds)
import ComponentDispatcher from "ComponentDispatcher" /* 1231 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;
import collectGuildAnalyticsMetadataDefault from "collectGuildAnalyticsMetadata" /* 5042 */;
import getSearchSessionIdDefault from "getSearchSessionId" /* 7358 */;
import handleConnectionOpen from "handleConnectionOpen" /* 4826 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import ME from "ME" /* 676 */;

require = fn;
({ AnalyticEvents: c5, FriendSourceFlags: closure_6, AllFriendSourceFlags: error, ComponentActions: closure_8 } = ME);
let obj = { UNDECIDED: 0, [0]: "UNDECIDED", OPTIN: 1, [1]: "OPTIN", OPTOUT: 2, [2]: "OPTOUT" };
const result = require("obj132").fileFinishedImporting("utils/UserSettingsUtils.tsx");

export const getSanitizedRestrictedGuilds = function getSanitizedRestrictedGuilds() {
  const RestrictedGuildIds = explicitContentFromProto.RestrictedGuildIds;
  const setting = RestrictedGuildIds.getSetting();
  let found = setting;
  if (0 === closure_3.totalUnavailableGuilds) {
    found = setting.filter((item, index) => null != guild.getGuild(item));
  }
  return new Set(found);
};
export const getSanitizedMessageRequestRestrictedGuilds = function getSanitizedMessageRequestRestrictedGuilds() {
  const MessageRequestRestrictedGuildIds = explicitContentFromProto.MessageRequestRestrictedGuildIds;
  const setting = MessageRequestRestrictedGuildIds.getSetting();
  let found = setting;
  if (0 === closure_3.totalUnavailableGuilds) {
    found = setting.filter((item, index) => null != guild.getGuild(item));
  }
  return new Set(found);
};
export const getSanitizedActivityRestrictedGuilds = function getSanitizedActivityRestrictedGuilds() {
  const ActivityRestrictedGuilds = explicitContentFromProto.ActivityRestrictedGuilds;
  const setting = ActivityRestrictedGuilds.getSetting();
  let found = setting;
  if (0 === closure_3.totalUnavailableGuilds) {
    found = setting.filter((item, index) => null != guild.getGuild(item));
  }
  return new Set(found);
};
export const getSanitizedActivityJoiningRestrictedGuilds = function getSanitizedActivityJoiningRestrictedGuilds() {
  const ActivityJoiningRestrictedGuilds = explicitContentFromProto.ActivityJoiningRestrictedGuilds;
  const setting = ActivityJoiningRestrictedGuilds.getSetting();
  let found = setting;
  if (0 === closure_3.totalUnavailableGuilds) {
    found = setting.filter((item, index) => null != guild.getGuild(item));
  }
  return new Set(found);
};
export const computeFlags = function computeFlags(setting) {
  if ((setting & closure_7) === closure_7) {
    obj = { all: true, mutualFriends: true, mutualGuilds: true };
  } else {
    obj = { all: false, mutualFriends: null, mutualGuilds: null };
    obj[1] = (setting & constants2.MUTUAL_FRIENDS) === constants2.MUTUAL_FRIENDS;
    obj[2] = (setting & constants2.MUTUAL_GUILDS) === constants2.MUTUAL_GUILDS;
  }
  return obj;
};
export const trackUserSettingsPaneViewed = function trackUserSettingsPaneViewed(arg0) {
  ({ destinationPane, originPane, source, subsection, locationStack, applicationId } = arg0);
  obj = { settings_type: "user", origin_pane: originPane, destination_pane: destinationPane, location_stack: locationStack, source, subsection, application_id: applicationId, search_session_id: getSearchSessionIdDefault.getSearchSessionId() };
  obj.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, obj);
};
export const NonSpamRetrainingOptInOptions = obj;
export const NonSpamRetrainingOptInOptionsToValue = { [obj.UNDECIDED]: undefined, [obj.OPTIN]: true, [obj.OPTOUT]: false };
export const generateNonSpamRetrainingOptInSettingOptions = function generateNonSpamRetrainingOptInSettingOptions() {
  obj = { name: null, desc: null, value: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["/yLMRQ"]);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t["3fzkPq"]);
  obj[2] = obj.OPTIN;
  const items = [obj, , ];
  obj = { name: null, desc: null, value: null };
  const intl3 = getSystemLocale.intl;
  obj[0] = intl3.string(getSystemLocale.t["21fP2b"]);
  const intl4 = getSystemLocale.intl;
  obj[1] = intl4.string(getSystemLocale.t.ggJ9jR);
  obj[2] = obj.OPTOUT;
  items[1] = obj;
  obj = { name: null, desc: null, value: null };
  const intl5 = getSystemLocale.intl;
  obj[0] = intl5.string(getSystemLocale.t.OWIo8w);
  const intl6 = getSystemLocale.intl;
  obj[1] = intl6.string(getSystemLocale.t.HqYXpw);
  obj[2] = obj.UNDECIDED;
  items[2] = obj;
  return items;
};
export const shakeUserSettings = function shakeUserSettings(arg0) {
  const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
  ComponentDispatch.dispatch(constants3.SHAKE_SETTINGS_MODAL, arg0);
};