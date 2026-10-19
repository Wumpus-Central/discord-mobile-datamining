// discord_app/modules/voice_panel/native/pip/PIPSpeakerStore.tsx
import initializeDefault from "../../../../../discord_common/js/packages/flux/index.tsx";
import throttleDefault from "../../../../../_runtime/00550_throttle.js";
import DispatcherDefault from "../../../../Dispatcher.tsx";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import RTCConnectionStore from "../../../../stores/RTCConnectionStore.tsx";
import SpeakingStore from "../../../../stores/SpeakingStore.tsx";

function resetSpeaker() {
  closure_5.cancel();
  c4 = null;
  c0 = undefined;
  return null != c0;
}
function handleSpeakerUpdate() {
  let channelId = RTCConnectionStore.getChannelId();
  if (channelId == null) {
    channelId = null;
  }
  let flag = false;
  if (channelId !== c4) {
    flag = resetSpeaker();
    c4 = channelId;
  }
  if (null == channelId) {
    return flag;
  } else {
    const speakers = SpeakingStore.getSpeakers();
    for (const item10012 of speakers) {
      if (null != ChannelRTCStore.getParticipant(channelId, item10012)) {
        obj.return();
        break;
      }
      let tmp9 = flag;
      if (null != item10012) {
        tmp9 = flag;
        if (item10012 !== c0) {
          if (null == c0) {
            c0 = item10012;
            let flag2 = true;
          } else {
            let tmp13 = closure_5(item10012);
            flag2 = flag;
          }
        }
      }
      return tmp9;
    }
  }
}
let c4 = null;
let closure_5 = throttleDefault(
  function setSpeakerId(arg0) {
    if (c0 !== arg0) {
      c0 = arg0;
      pIPSpeakerStore.emitChange();
    }
  },
  1000,
  { leading: true },
);
const Store = initializeDefault.Store;
class PIPSpeakerStore extends Store {}
const prototype = PIPSpeakerStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(RTCConnectionStore, SpeakingStore, ChannelRTCStore);
};
prototype["getSpeakerId"] = function getSpeakerId(channelId) {
  let tmp;
  if (null != channelId) {
    if (channelId === c4) {
      tmp = c0;
    }
  }
  return tmp;
};
PIPSpeakerStore.displayName = "PIPSpeakerStore";
const pIPSpeakerStore = new PIPSpeakerStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_5.cancel();
    c4 = null;
    c0 = undefined;
    handleSpeakerUpdate();
    return true;
  },
  RTC_CONNECTION_STATE: handleSpeakerUpdate,
  SPEAKING: handleSpeakerUpdate,
  VOICE_STATE_UPDATES: handleSpeakerUpdate,
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/pip/PIPSpeakerStore.tsx");

export default pIPSpeakerStore;
