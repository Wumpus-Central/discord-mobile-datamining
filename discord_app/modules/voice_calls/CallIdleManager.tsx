// === Module 17323: CallIdleManager ===

// Module 17323 (CallIdleManager)
import util from "util" /* 1114 */;
import Timers from "Timers" /* 4447 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5411 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7456 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import VoiceStateStore from "VoiceStateStore" /* 4579 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4584 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

require = fn;
function disconnect() {
  const currentClientVoiceChannelId = VoiceStateStore.getCurrentClientVoiceChannelId(null);
  let flag = false;
  if (null != currentClientVoiceChannelId) {
    const channel = ChannelStore.getChannel(currentClientVoiceChannelId);
    const tmp3 = null == channel || !channel.isPrivate();
    let tmp4 = !tmp3;
    if (!tmp3) {
      let tmp5 = channel.recipients.length <= 1;
      if (tmp5) {
        let tmp7 = SortedVoiceStateStore.countVoiceStatesForChannel(currentClientVoiceChannelId) <= 1;
        if (tmp7) {
          tmp7 = null == EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(currentClientVoiceChannelId);
        }
        tmp5 = tmp7;
      }
      tmp4 = tmp5;
    }
    flag = tmp4;
  }
  if (flag) {
    const currentClientVoiceChannelId1 = VoiceStateStore.getCurrentClientVoiceChannelId(null);
    if (null != currentClientVoiceChannelId1) {
      const intl = util.intl;
      MessageActionCreatorsDefault.sendBotMessage(currentClientVoiceChannelId1, intl.formatToPlainString(util.t.XYof5G, { number: 3 }));
      const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(null);
    }
  }
}
let c7 = 180000;
let prototype = function CallIdleManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  const timeout = new Timers.Timeout();
  applyArgumentsResult.idleTimeout = timeout;
  applyArgumentsResult.handleConnectionClosed = function handleConnectionClosed() {
    const idleTimeout = applyArgumentsResult.idleTimeout;
    idleTimeout.stop();
  };
  applyArgumentsResult.handleEmbeddedActivityDisconnect = function handleEmbeddedActivityDisconnect() {
    const currentClientVoiceChannelId = VoiceStateStore.getCurrentClientVoiceChannelId(null);
    let flag = false;
    if (null != currentClientVoiceChannelId) {
      const channel = ChannelStore.getChannel(currentClientVoiceChannelId);
      const tmp3 = null == channel || !channel.isPrivate();
      let tmp4 = !tmp3;
      if (!tmp3) {
        let tmp5 = channel.recipients.length <= 1;
        if (tmp5) {
          let tmp7 = SortedVoiceStateStore.countVoiceStatesForChannel(currentClientVoiceChannelId) <= 1;
          if (tmp7) {
            tmp7 = null == EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(currentClientVoiceChannelId);
          }
          tmp5 = tmp7;
        }
        tmp4 = tmp5;
      }
      flag = tmp4;
    }
    if (flag) {
      const idleTimeout = applyArgumentsResult.idleTimeout;
      idleTimeout.start(c7, disconnect, true);
    }
  };
  applyArgumentsResult.handleVoiceStateUpdates = function handleVoiceStateUpdates() {
    const currentClientVoiceChannelId = VoiceStateStore.getCurrentClientVoiceChannelId(null);
    let flag = false;
    if (null != currentClientVoiceChannelId) {
      const channel = ChannelStore.getChannel(currentClientVoiceChannelId);
      const tmp3 = null == channel || !channel.isPrivate();
      let tmp4 = !tmp3;
      if (!tmp3) {
        let tmp5 = channel.recipients.length <= 1;
        if (tmp5) {
          let tmp7 = SortedVoiceStateStore.countVoiceStatesForChannel(currentClientVoiceChannelId) <= 1;
          if (tmp7) {
            tmp7 = null == EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(currentClientVoiceChannelId);
          }
          tmp5 = tmp7;
        }
        tmp4 = tmp5;
      }
      flag = tmp4;
    }
    const idleTimeout = applyArgumentsResult.idleTimeout;
    if (flag) {
      idleTimeout.start(c7, disconnect, false);
    } else {
      idleTimeout.stop();
    }
  };
  applyArgumentsResult.actions = { VOICE_STATE_UPDATES: applyArgumentsResult.handleVoiceStateUpdates, CONNECTION_CLOSED: applyArgumentsResult.handleConnectionClosed, EMBEDDED_ACTIVITY_CLOSE: applyArgumentsResult.handleEmbeddedActivityDisconnect };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/CallIdleManager.tsx");

export default prototype;