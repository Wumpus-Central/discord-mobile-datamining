// discord_app/modules/self_mod/inappropriate_conversation/InappropriateConversationUtils.tsx
import trackViewedEvent from "../shared/SafetyWarningUtils.tsx";
import handleConnectionClosedOrResumed from "../../user_settings/UserSettingsProtoStore.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";
import handleConnectionOpen from "../ChannelSafetyWarningsStore.tsx";
import { SafetyWarningTypes } from "../ChannelSafetyWarningsStore.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/self_mod/inappropriate_conversation/InappropriateConversationUtils.tsx");

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
  const found = channelSafetyWarnings.filter((item, index) => item.type === obj.INAPPROPRIATE_CONVERSATION_TIER_1);
  if (found.filter((item, index) => null != item.dismiss_timestamp).length > 0) {
    return null;
  } else {
    const found1 = found.filter((item, index) => null == item.dismiss_timestamp);
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
    const found = safetyWarnings.filter((item, index) => item.type === obj.INAPPROPRIATE_CONVERSATION_TIER_1);
    let everyResult = found.length > 0;
    if (everyResult) {
      everyResult = found.every((item, index) => null == item.dismiss_timestamp);
    }
    tmp = everyResult;
  }
  return tmp;
};
export const shouldShowTakeoverForWarnings = function shouldShowTakeoverForWarnings(inappropriateConversationWarningsForChannel) {
  const found = inappropriateConversationWarningsForChannel.filter((item, index) => item.type === obj.INAPPROPRIATE_CONVERSATION_TIER_1);
  let everyResult = found.length > 0;
  if (everyResult) {
    everyResult = found.every((item, index) => null == item.dismiss_timestamp);
  }
  return everyResult;
};