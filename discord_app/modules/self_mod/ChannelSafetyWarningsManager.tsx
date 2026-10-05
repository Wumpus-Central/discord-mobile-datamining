// discord_app/modules/self_mod/ChannelSafetyWarningsManager.tsx
import SelfModInappropriateConversationExperiment from "inappropriate_conversation/SelfModInappropriateConversationExperiment.tsx";
import InappropriateConversationUtils from "inappropriate_conversation/InappropriateConversationUtils.tsx";
import showTakeoverModal2 from "inappropriate_conversation/takeover_modal/showTakeoverModal.native.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../_runtime/metro/00002__.js";

function handleChannelSelect(channelId) {
  channelId = channelId.channelId;
  if (null == channelId) {
    return false;
  } else {
    const obj5 = SelfModInappropriateConversationExperiment;
    if (obj5.isEligibleForInappropriateConversationWarning({ location: "channel_select" })) {
      const tmp5Result = InappropriateConversationUtils;
      if (tmp5Result.getSafetyAlertsSettingOrDefault()) {
        const channel = ChannelStore.getChannel(channelId);
        if (null != channel) {
          if (channel.isDM()) {
            const tmp5Result3 = InappropriateConversationUtils;
            const inappropriateConversationTakeoverForChannel =
              tmp5Result3.getInappropriateConversationTakeoverForChannel(channelId);
            let flag3 = null != inappropriateConversationTakeoverForChannel;
            if (flag3) {
              ({ id: obj4.warningId, type: obj4.warningType } = inappropriateConversationTakeoverForChannel);
              const obj = { warningId: null, warningType: null, senderId: channel.getRecipientId(), channelId };
              const showTakeoverModal = showTakeoverModal2.showTakeoverModal;
              showTakeoverModal2;
              showTakeoverModal(obj);
              flag3 = true;
            }
            return flag3;
          }
        }
        return false;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
function handleChannelUpdates(channels) {
  channels = channels.channels;
  let currentlySelectedChannelId;
  const obj = SelfModInappropriateConversationExperiment;
  if (obj.isEligibleForInappropriateConversationWarning({ location: "channel_updates" })) {
    const tmpResult = InappropriateConversationUtils;
    if (tmpResult.getSafetyAlertsSettingOrDefault()) {
      currentlySelectedChannelId = SelectedChannelStore.getCurrentlySelectedChannelId();
      if (null == currentlySelectedChannelId) {
        return false;
      } else {
        const found = channels.find((id) => id.id === currentlySelectedChannelId);
        if (null == found) {
          return false;
        } else {
          const tmpResult3 = InappropriateConversationUtils;
          const inappropriateConversationTakeoverForChannel = tmpResult3.getInappropriateConversationTakeoverForChannel(
            found.id,
          );
          let flag3 = !(null == inappropriateConversationTakeoverForChannel || !found.isDM());
          null == inappropriateConversationTakeoverForChannel || !found.isDM();
          if (flag3) {
            ({ id: obj3.warningId, type: obj3.warningType } = inappropriateConversationTakeoverForChannel);
            const obj2 = { warningId: null, warningType: null, senderId: found.getRecipientId(), channelId: found.id };
            const showTakeoverModal = showTakeoverModal2.showTakeoverModal;
            showTakeoverModal2;
            showTakeoverModal(obj2);
            flag3 = true;
          }
          return flag3;
        }
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
class ChannelSafetyWarningsManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = { CHANNEL_SELECT: handleChannelSelect, CHANNEL_UPDATES: handleChannelUpdates };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const channelSafetyWarningsManager = new ChannelSafetyWarningsManager();
const result = size.fileFinishedImporting("modules/self_mod/ChannelSafetyWarningsManager.tsx");

export default channelSafetyWarningsManager;
