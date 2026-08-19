// === Module 4975: ? ===

// Module 4975
import dispatcherDefault from "dispatcher" /* 709 */;
import transitionTo from "transitionTo" /* 1222 */;
import selectVoiceChannelAdditional from "selectVoiceChannelAdditional" /* 4976 */;
import disconnectRemoteAll from "disconnectRemote" /* 9845 */;
import set from "set" /* 4540 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import _detectH265HardwareDecode from "_detectH265HardwareDecode" /* 4497 */;
import ME from "ME" /* 676 */;

require = fn;
({ ME: error, PopoutWindowKeys, Routes: closure_8 } = ME);
const result = require("obj132").fileFinishedImporting("actions/SelectedChannelActionCreators.tsx");

export default {
  selectChannel(guildId) {
    guildId = guildId.guildId;
    ({ channelId, messageId, jumpType, source, skipMessageFetch } = guildId);
    let tmp = null;
    if (guildId !== closure_7) {
      tmp = guildId;
    }
    dispatcherDefault.dispatch({ type: "CHANNEL_SELECT", guildId: tmp, channelId, messageId, jumpType, source, skipMessageFetch });
  },
  selectPrivateChannel(id) {
    transitionTo.transitionTo(closure_8.CHANNEL(closure_7, id));
  },
  selectVoiceChannel(id, c1, flag2) {
    let flag = c1;
    if (c1 === undefined) {
      flag = false;
    }
    if (flag2 === undefined) {
      flag2 = false;
    }
    let obj = arg3;
    if (arg3 === undefined) {
      obj = {};
    }
    channel = channel.getChannel(id);
    if (channel != null) {
      const guildId = channel.getGuildId();
    }
    if (supported.isSupported()) {
      if (null != id) {
        const mediaEngine = supported.getMediaEngine();
        mediaEngine.interact();
      }
      const obj5 = selectVoiceChannelAdditional;
      const voiceChannelAdditional = obj5.selectVoiceChannelAdditional(id, guildId, flag, flag2, obj);
    }
  },
  disconnect() {
    remoteSessionId = remoteSessionId.getRemoteSessionId();
    if (null != remoteSessionId) {
      disconnectRemoteAll.remoteDisconnect(remoteSessionId);
    }
    const voiceChannel = this.selectVoiceChannel(null);
  }
};