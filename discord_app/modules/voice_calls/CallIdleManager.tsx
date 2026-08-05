// discord_app/modules/voice_calls/CallIdleManager.tsx
import participantFromServer from "participantFromServer";
import ensureGuildLoaded from "ensureGuildLoaded";
import updateVoiceState from "updateVoiceState";
import getVoiceStatesForGuild from "getVoiceStatesForGuild";
import "initialize";
import { start } from "../../../discord_common/js/packages/timers/Timers.tsx";
import { trackInvite } from "../../actions/MessageActionCreators.tsx";
import { SelectedChannelActionCreators } from "../../actions/SelectedChannelActionCreators.tsx";
import { getSystemLocale } from "../../intl/index.native.tsx";

let require = arg1;
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
        let tmp7 = getVoiceStatesForGuild.countVoiceStatesForChannel(currentClientVoiceChannelId) <= 1;
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
      const intl = getSystemLocale /* getSystemLocale */.intl;
      trackInvite.sendBotMessage(currentClientVoiceChannelId1, intl.formatToPlainString(getSystemLocale /* getSystemLocale */.t.XYof5G, { number: 3 }));
      const obj3 = trackInvite;
      const voiceChannel = SelectedChannelActionCreators.selectVoiceChannel(null);
      const obj4 = SelectedChannelActionCreators;
    }
  }
}
let c7 = 180000;
let prototype = function CallIdleManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  const require = applyArgumentsResult;
  const timeout = new start /* start */.Timeout();
  applyArgumentsResult.idleTimeout = timeout;
  applyArgumentsResult.handleConnectionClosed = function handleConnectionClosed() {
    const idleTimeout = applyArgumentsResult.idleTimeout;
    idleTimeout.stop();
  };
  applyArgumentsResult.handleEmbeddedActivityDisconnect = function handleEmbeddedActivityDisconnect() {
    const currentClientVoiceChannelId = outer1_5.getCurrentClientVoiceChannelId(null);
    let flag = false;
    if (null != currentClientVoiceChannelId) {
      const channel = outer1_4.getChannel(currentClientVoiceChannelId);
      const tmp3 = null == channel || !channel.isPrivate();
      let tmp4 = !tmp3;
      if (!tmp3) {
        let tmp5 = channel.recipients.length <= 1;
        if (tmp5) {
          let tmp7 = outer1_6.countVoiceStatesForChannel(currentClientVoiceChannelId) <= 1;
          if (tmp7) {
            tmp7 = null == outer1_3.getSelfEmbeddedActivityForChannel(currentClientVoiceChannelId);
          }
          tmp5 = tmp7;
        }
        tmp4 = tmp5;
      }
      flag = tmp4;
    }
    if (flag) {
      const idleTimeout = applyArgumentsResult.idleTimeout;
      idleTimeout.start(outer1_7, outer1_8, true);
    }
  };
  applyArgumentsResult.handleVoiceStateUpdates = function handleVoiceStateUpdates() {
    const currentClientVoiceChannelId = outer1_5.getCurrentClientVoiceChannelId(null);
    let flag = false;
    if (null != currentClientVoiceChannelId) {
      const channel = outer1_4.getChannel(currentClientVoiceChannelId);
      const tmp3 = null == channel || !channel.isPrivate();
      let tmp4 = !tmp3;
      if (!tmp3) {
        let tmp5 = channel.recipients.length <= 1;
        if (tmp5) {
          let tmp7 = outer1_6.countVoiceStatesForChannel(currentClientVoiceChannelId) <= 1;
          if (tmp7) {
            tmp7 = null == outer1_3.getSelfEmbeddedActivityForChannel(currentClientVoiceChannelId);
          }
          tmp5 = tmp7;
        }
        tmp4 = tmp5;
      }
      flag = tmp4;
    }
    const idleTimeout = applyArgumentsResult.idleTimeout;
    if (flag) {
      idleTimeout.start(outer1_7, outer1_8, false);
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
const result = require("updateVoiceState").fileFinishedImporting("modules/voice_calls/CallIdleManager.tsx");

export default prototype;