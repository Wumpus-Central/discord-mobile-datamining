// === Module 16236: handleChannelSelect ===

// Module 16236 (handleChannelSelect)
import ensureGuildLoaded from "ensureGuildLoaded";
import handleConnectionOpen from "handleConnectionOpen";
import "initialize";

const require = arg1;
function handleChannelSelect(channelId) {
  channelId = channelId.channelId;
  if (null == channelId) {
    return false;
  } else {
    if (obj6.isEligibleForInappropriateConversationWarning({ location: "channel_select" })) {
      let tmp4Result = tmp4(10307);
      if (tmp4Result.getSafetyAlertsSettingOrDefault()) {
        channel = channel.getChannel(channelId);
        if (null != channel) {
          if (channel.isDM()) {
            tmp4Result = tmp4(10307);
            const inappropriateConversationTakeoverForChannel = tmp4Result.getInappropriateConversationTakeoverForChannel(channelId);
            let flag3 = null != inappropriateConversationTakeoverForChannel;
            if (flag3) {
              const obj = { warningId: null, warningType: null, senderId: null, channelId: null };
              ({ id: obj5[0], type: obj5[1] } = inappropriateConversationTakeoverForChannel);
              obj[2] = channel.getRecipientId();
              obj[3] = channelId;
              tmp4(16237).showTakeoverModal(obj);
              flag3 = true;
              const tmp4Result1 = tmp4(16237);
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
    obj6 = require(10282) /* InappropriateConversationExperiment */;
  }
}
function handleChannelUpdates(channels) {
  channels = channels.channels;
  let currentlySelectedChannelId;
  let obj = currentlySelectedChannelId(10282);
  if (obj.isEligibleForInappropriateConversationWarning({ location: "channel_updates" })) {
    let tmpResult = tmp(10307);
    if (tmpResult.getSafetyAlertsSettingOrDefault()) {
      currentlySelectedChannelId = currentlySelectedChannelId.getCurrentlySelectedChannelId();
      if (null == currentlySelectedChannelId) {
        return false;
      } else {
        const found = channels.find((id) => id.id === currentlySelectedChannelId);
        if (null == found) {
          return false;
        } else {
          tmpResult = tmp(10307);
          const inappropriateConversationTakeoverForChannel = tmpResult.getInappropriateConversationTakeoverForChannel(found.id);
          const tmp6 = null == inappropriateConversationTakeoverForChannel || !found.isDM();
          let flag3 = !tmp6;
          if (!tmp6) {
            obj = { warningId: null, warningType: null, senderId: null, channelId: null };
            ({ id: obj4[0], type: obj4[1] } = inappropriateConversationTakeoverForChannel);
            obj[2] = found.getRecipientId();
            obj[3] = found.id;
            tmp(16237).showTakeoverModal(obj);
            flag3 = true;
            const tmpResult1 = tmp(16237);
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
class prototype extends tmp2 {
}
prototype = new prototype();
const result = require("InappropriateConversationExperiment").fileFinishedImporting("modules/self_mod/ChannelSafetyWarningsManager.tsx");

export default prototype;