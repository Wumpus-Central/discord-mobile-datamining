// === Module 11397: getSafetyAlertsSettingOrDefault ===

// Module 11397 (getSafetyAlertsSettingOrDefault)
import trackViewedEvent from "trackViewedEvent" /* 11370 */;
import closure_2 from "handleConnectionClosedOrResumed" /* 1221 */;
import closure_3 from "mergeGuildAvatar" /* 1371 */;
import closure_4 from "handleConnectionOpen" /* 10915 */;
import { SafetyWarningTypes } from "handleConnectionOpen" /* 10915 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/self_mod/inappropriate_conversation/InappropriateConversationUtils.tsx");

export const getSafetyAlertsSettingOrDefault = function getSafetyAlertsSettingOrDefault() {
  currentUser = currentUser.getCurrentUser();
  if (currentUser != null) {
    const isStaffResult = currentUser.isStaff();
  }
  const privacy = settings.settings.privacy;
  let flag;
  if (privacy != null) {
    if (privacy.inappropriateConversationWarnings != null) {
      flag = iter.value;
    }
  }
  if (flag == null) {
    flag = true;
  }
  let userIsTeen = trackViewedEvent.getUserIsTeen();
  if (!userIsTeen) {
    userIsTeen = true === isStaffResult;
  }
  if (userIsTeen) {
    userIsTeen = flag;
  }
  return userIsTeen;
};
export const getInappropriateConversationTakeoverForChannel = function getInappropriateConversationTakeoverForChannel(channelId) {
  channelSafetyWarnings = channelSafetyWarnings.getChannelSafetyWarnings(channelId);
  const found = channelSafetyWarnings.filter((type) => type.type === obj.INAPPROPRIATE_CONVERSATION_TIER_1);
  if (found.filter((dismiss_timestamp) => null != dismiss_timestamp.dismiss_timestamp).length > 0) {
    return null;
  } else {
    const found1 = found.filter((dismiss_timestamp) => null == dismiss_timestamp.dismiss_timestamp);
    let first = null;
    if (1 === found1.length) {
      first = found1[0];
    }
    return first;
  }
};
export const shouldShowInappropriateConversationTakeoverForChannelRecord = function shouldShowInappropriateConversationTakeoverForChannelRecord(safetyWarnings) {
  let tmp = null != safetyWarnings.safetyWarnings;
  if (tmp) {
    safetyWarnings = safetyWarnings.safetyWarnings;
    const found = safetyWarnings.filter((type) => type.type === obj.INAPPROPRIATE_CONVERSATION_TIER_1);
    let everyResult = found.length > 0;
    if (everyResult) {
      everyResult = found.every((dismiss_timestamp) => null == dismiss_timestamp.dismiss_timestamp);
    }
    tmp = everyResult;
  }
  return tmp;
};
export const shouldShowTakeoverForWarnings = function shouldShowTakeoverForWarnings(inappropriateConversationWarningsForChannel) {
  const found = inappropriateConversationWarningsForChannel.filter((type) => type.type === obj.INAPPROPRIATE_CONVERSATION_TIER_1);
  let everyResult = found.length > 0;
  if (everyResult) {
    everyResult = found.every((dismiss_timestamp) => null == dismiss_timestamp.dismiss_timestamp);
  }
  return everyResult;
};