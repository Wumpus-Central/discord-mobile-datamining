// discord_app/modules/self_mod/inappropriate_conversation/InappropriateConversationUtils.tsx
import SafetyWarningUtils from "../shared/SafetyWarningUtils.tsx";
import UserSettingsProtoStore from "../../user_settings/UserSettingsProtoStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import ChannelSafetyWarningsStore from "../ChannelSafetyWarningsStore.tsx";

require = fn;
const SafetyWarningTypes = fn(10761).SafetyWarningTypes;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/self_mod/inappropriate_conversation/InappropriateConversationUtils.tsx",
);

export function getSafetyAlertsSettingOrDefault() {
  const currentUser = UserStore.getCurrentUser();
  if (currentUser != null) {
    const isStaffResult = currentUser.isStaff();
  }
  const privacy = UserSettingsProtoStore.settings.privacy;
  let flag;
  if (privacy != null) {
    if (privacy.inappropriateConversationWarnings != null) {
      flag = iter.value;
    }
  }
  if (flag == null) {
    flag = true;
  }
  let userIsTeen = SafetyWarningUtils.getUserIsTeen();
  if (!userIsTeen) {
    userIsTeen = true === isStaffResult;
  }
  if (userIsTeen) {
    userIsTeen = flag;
  }
  return userIsTeen;
}
export function getInappropriateConversationTakeoverForChannel(channelId) {
  const channelSafetyWarnings = ChannelSafetyWarningsStore.getChannelSafetyWarnings(channelId);
  const found = channelSafetyWarnings.filter(
    (type) => type.type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1,
  );
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
}
export function shouldShowInappropriateConversationTakeoverForChannelRecord(safetyWarnings) {
  let tmp = null != safetyWarnings.safetyWarnings;
  if (tmp) {
    safetyWarnings = safetyWarnings.safetyWarnings;
    const found = safetyWarnings.filter((type) => type.type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1);
    let everyResult = found.length > 0;
    if (everyResult) {
      everyResult = found.every((dismiss_timestamp) => null == dismiss_timestamp.dismiss_timestamp);
    }
    tmp = everyResult;
  }
  return tmp;
}
export function shouldShowTakeoverForWarnings(inappropriateConversationWarningsForChannel) {
  const found = inappropriateConversationWarningsForChannel.filter(
    (type) => type.type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1,
  );
  let everyResult = found.length > 0;
  if (everyResult) {
    everyResult = found.every((dismiss_timestamp) => null == dismiss_timestamp.dismiss_timestamp);
  }
  return everyResult;
}
