// === Module 16663: disconnect ===

// Module 16663 (disconnect)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import start from "start" /* 4264 */;
import _modDef5236 from "module_5236" /* 5236 */;
import initializeDefault from "initialize" /* 5367 */;
import trackInviteDefault from "trackInvite" /* 7063 */;
import closure_3 from "participantFromServer" /* 1390 */;
import closure_4 from "ensureGuildLoaded" /* 1391 */;
import closure_5 from "updateVoiceState" /* 4399 */;
import closure_6 from "getVoiceStatesForGuild" /* 4455 */;

require = arg1;
function disconnect() {
  currentClientVoiceChannelId = currentClientVoiceChannelId.getCurrentClientVoiceChannelId(null);
  let flag = false;
  if (null != currentClientVoiceChannelId) {
    channel = channel.getChannel(currentClientVoiceChannelId);
    const tmp3 = null == channel || !channel.isPrivate();
    let tmp4 = !tmp3;
    if (!tmp3) {
      let tmp5 = channel.recipients.length <= 1;
      if (tmp5) {
        let tmp7 = closure_6.countVoiceStatesForChannel(currentClientVoiceChannelId) <= 1;
        if (tmp7) {
          tmp7 = null == selfEmbeddedActivityForChannel.getSelfEmbeddedActivityForChannel(currentClientVoiceChannelId);
        }
        tmp5 = tmp7;
      }
      tmp4 = tmp5;
    }
    flag = tmp4;
  }
  if (flag) {
    const currentClientVoiceChannelId1 = currentClientVoiceChannelId.getCurrentClientVoiceChannelId(null);
    if (null != currentClientVoiceChannelId1) {
      const intl = getSystemLocale.intl;
      trackInviteDefault.sendBotMessage(currentClientVoiceChannelId1, intl.formatToPlainString(getSystemLocale.t.XYof5G, { number: 3 }));
      const obj3 = trackInviteDefault;
      const voiceChannel = _modDef5236.selectVoiceChannel(null);
      const obj4 = _modDef5236;
    }
  }
}
let c7 = 180000;
initializeDefault;
let prototype = function CallIdleManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  const timeout = new start.Timeout();
  applyArgumentsResult.idleTimeout = timeout;
  applyArgumentsResult.handleConnectionClosed = function handleConnectionClosed() {
    const idleTimeout = applyArgumentsResult.idleTimeout;
    idleTimeout.stop();
  };
  applyArgumentsResult.handleEmbeddedActivityDisconnect = function handleEmbeddedActivityDisconnect() {
    const currentClientVoiceChannelId = closure_1_5.getCurrentClientVoiceChannelId(null);
    let flag = false;
    if (null != currentClientVoiceChannelId) {
      const channel = closure_1_4.getChannel(currentClientVoiceChannelId);
      const tmp3 = null == channel || !channel.isPrivate();
      let tmp4 = !tmp3;
      if (!tmp3) {
        let tmp5 = channel.recipients.length <= 1;
        if (tmp5) {
          let tmp7 = closure_1_6.countVoiceStatesForChannel(currentClientVoiceChannelId) <= 1;
          if (tmp7) {
            tmp7 = null == closure_1_3.getSelfEmbeddedActivityForChannel(currentClientVoiceChannelId);
          }
          tmp5 = tmp7;
        }
        tmp4 = tmp5;
      }
      flag = tmp4;
    }
    if (flag) {
      const idleTimeout = applyArgumentsResult.idleTimeout;
      idleTimeout.start(closure_1_7, closure_1_8, true);
    }
  };
  applyArgumentsResult.handleVoiceStateUpdates = function handleVoiceStateUpdates() {
    const currentClientVoiceChannelId = closure_1_5.getCurrentClientVoiceChannelId(null);
    let flag = false;
    if (null != currentClientVoiceChannelId) {
      const channel = closure_1_4.getChannel(currentClientVoiceChannelId);
      const tmp3 = null == channel || !channel.isPrivate();
      let tmp4 = !tmp3;
      if (!tmp3) {
        let tmp5 = channel.recipients.length <= 1;
        if (tmp5) {
          let tmp7 = closure_1_6.countVoiceStatesForChannel(currentClientVoiceChannelId) <= 1;
          if (tmp7) {
            tmp7 = null == closure_1_3.getSelfEmbeddedActivityForChannel(currentClientVoiceChannelId);
          }
          tmp5 = tmp7;
        }
        tmp4 = tmp5;
      }
      flag = tmp4;
    }
    const idleTimeout = applyArgumentsResult.idleTimeout;
    if (flag) {
      idleTimeout.start(closure_1_7, closure_1_8, false);
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
const result = require("set").fileFinishedImporting("modules/voice_calls/CallIdleManager.tsx");

export default prototype;