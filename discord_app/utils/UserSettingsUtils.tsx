// === Module 6491: UserSettingsUtils ===

// Module 6491 (UserSettingsUtils)
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import intl7 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2028 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5070 */;
import SettingSearchSessionAnalyticsManagerDefault from "SettingSearchSessionAnalyticsManager" /* 6492 */;
import GuildAvailabilityStore from "GuildAvailabilityStore" /* 5618 */;
import GuildStore from "GuildStore" /* 2074 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let set;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ AnalyticEvents: hasOwnProperty, FriendSourceFlags: metroRequire, AllFriendSourceFlags: metroImportDefault, ComponentActions: metroImportAll } = Constants);
const NonSpamRetrainingOptInOptions = { UNDECIDED: 0, [0]: "UNDECIDED", OPTIN: 1, [1]: "OPTIN", OPTOUT: 2, [2]: "OPTOUT" };
const result = size.fileFinishedImporting("utils/UserSettingsUtils.tsx");

export const getSanitizedRestrictedGuilds = function getSanitizedRestrictedGuilds() {
  let guild;
  const RestrictedGuildIds = UserSettings.RestrictedGuildIds;
  const setting = RestrictedGuildIds.getSetting();
  let found = setting;
  if (0 === GuildAvailabilityStore.totalUnavailableGuilds) {
    found = setting.filter((item) => null != guild.getGuild(item));
  }
  set = new Set(found);
  return set;
};
export const getSanitizedMessageRequestRestrictedGuilds = function getSanitizedMessageRequestRestrictedGuilds() {
  let guild;
  const MessageRequestRestrictedGuildIds = UserSettings.MessageRequestRestrictedGuildIds;
  const setting = MessageRequestRestrictedGuildIds.getSetting();
  let found = setting;
  if (0 === GuildAvailabilityStore.totalUnavailableGuilds) {
    found = setting.filter((item) => null != guild.getGuild(item));
  }
  set = new Set(found);
  return set;
};
export const getSanitizedActivityRestrictedGuilds = function getSanitizedActivityRestrictedGuilds() {
  let guild;
  const ActivityRestrictedGuilds = UserSettings.ActivityRestrictedGuilds;
  const setting = ActivityRestrictedGuilds.getSetting();
  let found = setting;
  if (0 === GuildAvailabilityStore.totalUnavailableGuilds) {
    found = setting.filter((item) => null != guild.getGuild(item));
  }
  set = new Set(found);
  return set;
};
export const getSanitizedActivityJoiningRestrictedGuilds = function getSanitizedActivityJoiningRestrictedGuilds() {
  let guild;
  const ActivityJoiningRestrictedGuilds = UserSettings.ActivityJoiningRestrictedGuilds;
  const setting = ActivityJoiningRestrictedGuilds.getSetting();
  let found = setting;
  if (0 === GuildAvailabilityStore.totalUnavailableGuilds) {
    found = setting.filter((item) => null != guild.getGuild(item));
  }
  set = new Set(found);
  return set;
};
export const computeFlags = function computeFlags(setting) {
  let obj;
  if ((setting & metroImportDefault) === metroImportDefault) {
    obj = { all: true, mutualFriends: true, mutualGuilds: true };
  } else {
    obj = { all: false, mutualFriends: (setting & metroRequire.MUTUAL_FRIENDS) === metroRequire.MUTUAL_FRIENDS, mutualGuilds: (setting & metroRequire.MUTUAL_GUILDS) === metroRequire.MUTUAL_GUILDS };
  }
  return obj;
};
export const trackUserSettingsPaneViewed = function trackUserSettingsPaneViewed(arg0) {
  let applicationId;
  let destinationPane;
  let locationStack;
  let obj2;
  let originPane;
  let source;
  let subsection;
  ({ destinationPane, originPane, source, subsection, locationStack, applicationId } = arg0);
  const obj = { settings_type: "user", origin_pane: originPane, destination_pane: destinationPane, location_stack: locationStack, source, subsection, application_id: applicationId, search_session_id: obj2.getSearchSessionId() };
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const SETTINGS_PANE_VIEWED = hasOwnProperty.SETTINGS_PANE_VIEWED;
  AppAnalyticsUtilsDefault;
  obj2 = SettingSearchSessionAnalyticsManagerDefault;
  trackWithMetadata(SETTINGS_PANE_VIEWED, obj);
};
export { NonSpamRetrainingOptInOptions };
export const NonSpamRetrainingOptInOptionsToValue = { [NonSpamRetrainingOptInOptions.UNDECIDED]: undefined, [NonSpamRetrainingOptInOptions.OPTIN]: true, [NonSpamRetrainingOptInOptions.OPTOUT]: false };
export const generateNonSpamRetrainingOptInSettingOptions = function generateNonSpamRetrainingOptInSettingOptions() {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let obj;
  obj = { name: intl.string(intl7.t["/yLMRQ"]), desc: intl2.string(intl7.t["3fzkPq"]), value: obj.OPTIN };
  intl = intl7.intl;
  intl2 = intl7.intl;
  const items = [obj, , ];
  const obj2 = { name: intl3.string(intl7.t["21fP2b"]), desc: intl4.string(intl7.t.ggJ9jR), value: obj.OPTOUT };
  intl3 = intl7.intl;
  intl4 = intl7.intl;
  items[1] = obj2;
  const obj3 = { name: intl5.string(intl7.t.OWIo8w), desc: intl6.string(intl7.t.HqYXpw), value: obj.UNDECIDED };
  intl5 = intl7.intl;
  intl6 = intl7.intl;
  items[2] = obj3;
  return items;
};
export const shakeUserSettings = function shakeUserSettings(arg0) {
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(metroImportAll.SHAKE_SETTINGS_MODAL, arg0);
};