// === Module 18180: RTCReconnectTimeoutManager ===

// Module 18180 (RTCReconnectTimeoutManager)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5889 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5110 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6807 */;

class RTCReconnectTimeoutManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { VOICE_STATE_UPDATES: applyArgumentsResult.handleVoiceStateUpdates };
    return applyArgumentsResult;
  }
}
RTCReconnectTimeoutManager.prototype["handleVoiceStateUpdates"] = function handleVoiceStateUpdates() {
  if (RTCConnectionStore.didReconnectTimeOut()) {
    SelectedChannelActionCreatorsDefault.disconnect();
  }
};
const rTCReconnectTimeoutManager = new RTCReconnectTimeoutManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/RTCReconnectTimeoutManager.tsx");

export default rTCReconnectTimeoutManager;