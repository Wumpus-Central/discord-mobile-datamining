// === Module 6995: UserSettingsUtils ===

// Module 6995 (UserSettingsUtils)
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4740 */;
import SettingSearchSessionAnalyticsManagerDefault from "SettingSearchSessionAnalyticsManager" /* 6996 */;
import GuildAvailabilityStore from "GuildAvailabilityStore" /* 4902 */;
import GuildStore from "GuildStore" /* 1979 */;

require = fn;
const Constants = fn(1074);
({ AnalyticEvents: hasOwnProperty, FriendSourceFlags: metroRequire, AllFriendSourceFlags: closure_7, ComponentActions: closure_8 } = Constants);
const NonSpamRetrainingOptInOptions = { UNDECIDED: 0, [0]: "UNDECIDED", OPTIN: 1, [1]: "OPTIN", OPTOUT: 2, [2]: "OPTOUT" };
const size = fn(2);
const result = size.fileFinishedImporting("utils/UserSettingsUtils.tsx");

export const getSanitizedRestrictedGuilds = function getSanitizedRestrictedGuilds() {
  const RestrictedGuildIds = UserSettings.RestrictedGuildIds;
  const setting = RestrictedGuildIds.getSetting();
  let found = setting;
  if (0 === GuildAvailabilityStore.totalUnavailableGuilds) {
    found = setting.filter((item) => null != guild.getGuild(item));
  }
  return new Set(found);
};
export const getSanitizedMessageRequestRestrictedGuilds = function getSanitizedMessageRequestRestrictedGuilds() {
  const MessageRequestRestrictedGuildIds = UserSettings.MessageRequestRestrictedGuildIds;
  const setting = MessageRequestRestrictedGuildIds.getSetting();
  let found = setting;
  if (0 === GuildAvailabilityStore.totalUnavailableGuilds) {
    found = setting.filter((item) => null != guild.getGuild(item));
  }
  return new Set(found);
};
export const getSanitizedActivityRestrictedGuilds = function getSanitizedActivityRestrictedGuilds() {
  const ActivityRestrictedGuilds = UserSettings.ActivityRestrictedGuilds;
  const setting = ActivityRestrictedGuilds.getSetting();
  let found = setting;
  if (0 === GuildAvailabilityStore.totalUnavailableGuilds) {
    found = setting.filter((item) => null != guild.getGuild(item));
  }
  return new Set(found);
};
export const getSanitizedActivityJoiningRestrictedGuilds = function getSanitizedActivityJoiningRestrictedGuilds() {
  const ActivityJoiningRestrictedGuilds = UserSettings.ActivityJoiningRestrictedGuilds;
  const setting = ActivityJoiningRestrictedGuilds.getSetting();
  let found = setting;
  if (0 === GuildAvailabilityStore.totalUnavailableGuilds) {
    found = setting.filter((item) => null != guild.getGuild(item));
  }
  return new Set(found);
};
export const computeFlags = function computeFlags(setting) {
  if ((setting & React5) === React5) {
    let obj = { all: true, mutualFriends: true, mutualGuilds: true };
  } else {
    obj = { all: false, mutualFriends: (setting & constants2.MUTUAL_FRIENDS) === constants2.MUTUAL_FRIENDS, mutualGuilds: (setting & constants2.MUTUAL_GUILDS) === constants2.MUTUAL_GUILDS };
  }
  return obj;
};
export const trackUserSettingsPaneViewed = function trackUserSettingsPaneViewed(arg0) {
  ({ destinationPane, originPane, source, subsection, locationStack, applicationId } = arg0);
  const obj = { settings_type: "user", origin_pane: originPane, destination_pane: destinationPane, location_stack: locationStack, source, subsection, application_id: applicationId, search_session_id: SettingSearchSessionAnalyticsManagerDefault.getSearchSessionId() };
  obj.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, obj);
};
export { NonSpamRetrainingOptInOptions };
export const NonSpamRetrainingOptInOptionsToValue = { [NonSpamRetrainingOptInOptions.UNDECIDED]: undefined, [NonSpamRetrainingOptInOptions.OPTIN]: true, [NonSpamRetrainingOptInOptions.OPTOUT]: false };
export const generateNonSpamRetrainingOptInSettingOptions = function generateNonSpamRetrainingOptInSettingOptions() {
  let obj = { name: null, desc: null, value: null };
  const intl = util.intl;
  obj.name = intl.string(util.t["/yLMRQ"]);
  const intl2 = util.intl;
  obj.desc = intl2.string(util.t["3fzkPq"]);
  obj.value = obj.OPTIN;
  const items = [obj, , ];
  obj = { name: null, desc: null, value: null };
  const intl3 = util.intl;
  obj.name = intl3.string(util.t["21fP2b"]);
  const intl4 = util.intl;
  obj.desc = intl4.string(util.t.ggJ9jR);
  obj.value = obj.OPTOUT;
  items[1] = obj;
  obj = { name: null, desc: null, value: null };
  const intl5 = util.intl;
  obj.name = intl5.string(util.t.OWIo8w);
  const intl6 = util.intl;
  obj.desc = intl6.string(util.t.HqYXpw);
  obj.value = obj.UNDECIDED;
  items[2] = obj;
  return items;
};
export const shakeUserSettings = function shakeUserSettings(arg0) {
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(constants3.SHAKE_SETTINGS_MODAL, arg0);
};