// === Module 5364: ? ===

// Module 5364
import dispatcherDefault from "dispatcher" /* 706 */;
import transitionTo from "transitionTo" /* 1219 */;
import getChannelSelectionOrigin from "getChannelSelectionOrigin" /* 5365 */;
import disconnectRemoteAll from "disconnectRemote" /* 9904 */;
import closure_4 from "set" /* 4495 */;
import closure_5 from "ensureGuildLoaded" /* 1386 */;
import closure_6 from "_detectH265HardwareDecode" /* 4529 */;
import ME from "ME" /* 673 */;

require = arg1;
({ ME: error, PopoutWindowKeys, Routes: closure_8 } = ME);
const result = require("set").fileFinishedImporting("actions/SelectedChannelActionCreators.tsx");

export default {
  selectChannel(guildId) {
    guildId = guildId.guildId;
    ({ channelId, messageId, jumpType, source, skipMessageFetch, opensChannel } = guildId);
    const channelSelectionOrigin = getChannelSelectionOrigin.getChannelSelectionOrigin();
    ({ fromGuildId, fromChannelId } = channelSelectionOrigin);
    const obj = getChannelSelectionOrigin;
    let tmp2 = null;
    if (guildId !== closure_7) {
      tmp2 = guildId;
    }
    dispatcherDefault.dispatch({ type: "CHANNEL_SELECT", guildId: tmp2, channelId, fromGuildId, fromChannelId, messageId, jumpType, source, skipMessageFetch, opensChannel });
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
      const obj5 = getChannelSelectionOrigin;
      const voiceChannelAdditional = obj5.selectVoiceChannelAdditional(id, guildId, flag, flag2, obj);
    }
  },
  disconnect() {
    remoteSessionId = remoteSessionId.getRemoteSessionId();
    if (null != remoteSessionId) {
      disconnectRemoteAll.remoteDisconnect(remoteSessionId);
      const obj = disconnectRemoteAll;
    }
    const voiceChannel = this.selectVoiceChannel(null);
  }
};