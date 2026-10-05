// discord_app/records/VoiceStateRecord.tsx
import Record from "../lib/Record.tsx";
import size from "../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("records/VoiceStateRecord.tsx");
class VoiceStateRecord extends Record {
  constructor(userId) {
    let discoverable;
    const tmp2 = new VoiceStateRecord(tmp, this);
    const tmp3 = userId.userId || "";
    tmp2.userId = tmp3;
    tmp2.channelId = userId.channelId || null;
    tmp2.sessionId = userId.sessionId || null;
    tmp2.mute = userId.mute || false;
    tmp2.deaf = userId.deaf || false;
    tmp2.selfMute = userId.selfMute || false;
    tmp2.selfDeaf = userId.selfDeaf || false;
    tmp2.selfVideo = userId.selfVideo || false;
    tmp2.selfStream = userId.selfStream || false;
    tmp2.suppress = userId.suppress || false;
    ({ requestToSpeakTimestamp: tmp2.requestToSpeakTimestamp, discoverable } = userId);
    if (discoverable == null) {
      discoverable = true;
    }
    tmp2.discoverable = discoverable;
    tmp2.connectedAt = userId.connectedAt;
    return tmp2;
  }
  isVoiceMuted() {
    const self = this;
    return this.selfMute || self.mute || self.suppress || null != self.requestToSpeakTimestamp;
  }
  isVoiceDeafened() {
    return this.selfDeaf || this.deaf;
  }
}
const prototype = VoiceStateRecord.prototype;

export default VoiceStateRecord;
