// discord_app/records/VoiceStateRecord.tsx
import toJSDefault from "../lib/Record.tsx";

toJSDefault;
const result = require("set").fileFinishedImporting("records/VoiceStateRecord.tsx");
class VoiceStateRecord extends tmp2 {
  constructor(arg0) {
    tmp2 = new VoiceStateRecord(tmp, new.target);
    // ThrowIfThisInitialized (0x7c)
    tmp3 = global.userId || "";
    tmp2.userId = tmp3;
    tmp2.channelId = global.channelId || null;
    tmp2.sessionId = global.sessionId || null;
    tmp2.mute = global.mute || false;
    tmp2.deaf = global.deaf || false;
    tmp2.selfMute = global.selfMute || false;
    tmp2.selfDeaf = global.selfDeaf || false;
    tmp2.selfVideo = global.selfVideo || false;
    tmp2.selfStream = global.selfStream || false;
    tmp2.suppress = global.suppress || false;
    ({ requestToSpeakTimestamp: tmp2.requestToSpeakTimestamp, discoverable } = global);
    if (discoverable == null) {
      discoverable = true;
    }
    tmp2.discoverable = discoverable;
    tmp2.connectedAt = global.connectedAt;
    return tmp2;
  }
}
const prototype = VoiceStateRecord.prototype;
prototype["isVoiceMuted"] = function isVoiceMuted() {
  const self = this;
  let tmp = this.selfMute || self.mute || self.suppress;
  if (!tmp) {
    tmp = null != self.requestToSpeakTimestamp;
  }
  return tmp;
};
prototype["isVoiceDeafened"] = function isVoiceDeafened() {
  return this.selfDeaf || this.deaf;
};

export default VoiceStateRecord;