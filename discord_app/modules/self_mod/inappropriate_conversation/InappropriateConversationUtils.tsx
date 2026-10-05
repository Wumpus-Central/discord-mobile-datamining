// discord_app/modules/self_mod/inappropriate_conversation/InappropriateConversationUtils.tsx
import ChannelSafetyWarningsStore2 from "../ChannelSafetyWarningsStore.tsx";
import SafetyWarningUtils from "../shared/SafetyWarningUtils.tsx";
import UserSettingsProtoStore from "../../user_settings/UserSettingsProtoStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const ChannelSafetyWarningsStore = ChannelSafetyWarningsStore2;

const f101813 = (type) => type.type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1;
const f101814 = (dismiss_timestamp) => null == dismiss_timestamp.dismiss_timestamp;
const SafetyWarningTypes = ChannelSafetyWarningsStore2.SafetyWarningTypes;
const result = size.fileFinishedImporting(
  "modules/self_mod/inappropriate_conversation/InappropriateConversationUtils.tsx",
);

export const getSafetyAlertsSettingOrDefault = function getSafetyAlertsSettingOrDefault() {
  let isStaffResult;
  const currentUser = UserStore.getCurrentUser();
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
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
  const obj2 = SafetyWarningUtils;
  const userIsTeen = (obj2.getUserIsTeen() || true === isStaffResult) && flag;
  return userIsTeen;
};
export const getInappropriateConversationTakeoverForChannel = function getInappropriateConversationTakeoverForChannel(
  channelId,
) {
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
};
export const shouldShowInappropriateConversationTakeoverForChannelRecord =
  function shouldShowInappropriateConversationTakeoverForChannelRecord(safetyWarnings) {
    let tmp = null != safetyWarnings.safetyWarnings;
    if (tmp) {
      safetyWarnings = safetyWarnings.safetyWarnings;
      const found = safetyWarnings.filter(f101813);
      tmp = found.length > 0 && found.every(f101814);
      const everyResult = found.length > 0 && found.every(f101814);
    }
    return tmp;
  };
export const shouldShowTakeoverForWarnings = function shouldShowTakeoverForWarnings(
  inappropriateConversationWarningsForChannel,
) {
  const found = inappropriateConversationWarningsForChannel.filter(f101813);
  const everyResult = found.length > 0 && found.every(f101814);
  return everyResult;
};
