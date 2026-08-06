// discord_app/actions/SelectedChannelActionCreators.tsx
import set from "set";
import ensureGuildLoaded from "ensureGuildLoaded";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import ME from "ME";
import { dispatcher } from "../Dispatcher.tsx";
import { transitionTo } from "../modules/routing/router_utils.tsx";
import { selectVoiceChannelAdditional } from "SelectedChannelActionCreatorsAdditional.native.tsx";

let PopoutWindowKeys;
let error;
let metroImportAll;
const require = arg1;
({ ME: error, PopoutWindowKeys, Routes: metroImportAll } = ME);
const result = require("_detectH265HardwareDecode").fileFinishedImporting("actions/SelectedChannelActionCreators.tsx");

export default {
  selectChannel(guildId) {
    let channelId;
    let jumpType;
    let messageId;
    let skipMessageFetch;
    let source;
    guildId = guildId.guildId;
    ({ channelId, messageId, jumpType, source, skipMessageFetch } = guildId);
    let tmp = null;
    if (guildId !== closure_7) {
      tmp = guildId;
    }
    dispatcher.dispatch({ type: "CHANNEL_SELECT", guildId: tmp, channelId, messageId, jumpType, source, skipMessageFetch });
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
      importAll(10800).remoteDisconnect(remoteSessionId);
      const obj = importAll(10800);
    }
    const voiceChannel = this.selectVoiceChannel(null);
  }
};