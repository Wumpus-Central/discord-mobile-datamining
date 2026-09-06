// discord_app/modules/self_mod/ChannelSafetyWarningsManager.tsx
import SelfModInappropriateConversationExperiment from "inappropriate_conversation/SelfModInappropriateConversationExperiment.tsx";
import InappropriateConversationUtils from "inappropriate_conversation/InappropriateConversationUtils.tsx";
import showTakeoverModal from "inappropriate_conversation/takeover_modal/showTakeoverModal.native.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";

require = fn;
function handleChannelSelect(channelId) {
  channelId = channelId.channelId;
  if (null == channelId) {
    return false;
  } else {
    if (obj6.isEligibleForInappropriateConversationWarning({ location: "channel_select" })) {
      let tmp4Result = InappropriateConversationUtils;
      if (tmp4Result.getSafetyAlertsSettingOrDefault()) {
        const channel = ChannelStore.getChannel(channelId);
        if (null != channel) {
          if (channel.isDM()) {
            tmp4Result = InappropriateConversationUtils;
            const inappropriateConversationTakeoverForChannel =
              tmp4Result.getInappropriateConversationTakeoverForChannel(channelId);
            let flag3 = null != inappropriateConversationTakeoverForChannel;
            if (flag3) {
              const obj = { warningId: null, warningType: null, senderId: null, channelId: null };
              ({ id: obj5.warningId, type: obj5.warningType } = inappropriateConversationTakeoverForChannel);
              obj.senderId = channel.getRecipientId();
              obj.channelId = channelId;
              showTakeoverModal.showTakeoverModal(obj);
              flag3 = true;
              const tmp4Result1 = showTakeoverModal;
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
    obj6 = SelfModInappropriateConversationExperiment;
  }
}
function handleChannelUpdates(channels) {
  channels = channels.channels;
  let currentlySelectedChannelId;
  let obj = SelfModInappropriateConversationExperiment;
  if (obj.isEligibleForInappropriateConversationWarning({ location: "channel_updates" })) {
    let tmpResult = InappropriateConversationUtils;
    if (tmpResult.getSafetyAlertsSettingOrDefault()) {
      currentlySelectedChannelId = SelectedChannelStore.getCurrentlySelectedChannelId();
      if (null == currentlySelectedChannelId) {
        return false;
      } else {
        const found = channels.find((id) => id.id === currentlySelectedChannelId);
        if (null == found) {
          return false;
        } else {
          tmpResult = InappropriateConversationUtils;
          const inappropriateConversationTakeoverForChannel = tmpResult.getInappropriateConversationTakeoverForChannel(
            found.id,
          );
          const tmp6 = null == inappropriateConversationTakeoverForChannel || !found.isDM();
          let flag3 = !tmp6;
          if (!tmp6) {
            obj = { warningId: null, warningType: null, senderId: null, channelId: null };
            ({ id: obj4.warningId, type: obj4.warningType } = inappropriateConversationTakeoverForChannel);
            obj.senderId = found.getRecipientId();
            obj.channelId = found.id;
            showTakeoverModal.showTakeoverModal(obj);
            flag3 = true;
            const tmpResult1 = showTakeoverModal;
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
let prototype = function ChannelSafetyWarningsManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { CHANNEL_SELECT: handleChannelSelect, CHANNEL_UPDATES: handleChannelUpdates };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {}
prototype = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/ChannelSafetyWarningsManager.tsx");

export default prototype;
