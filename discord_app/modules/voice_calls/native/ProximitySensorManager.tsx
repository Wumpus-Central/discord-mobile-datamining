// === Module 16688: handleChange ===

// Module 16688 (handleChange)
import obj1322 from "obj132" /* 500 */;
import initializeDefault from "initialize" /* 5038 */;
import RouteTypes from "RouteTypes" /* 9649 */;
import enforcingDefault from "enforcing" /* 16689 */;
import participantFromServer from "participantFromServer" /* 1390 */;
import reset from "reset" /* 4652 */;
import createRTCConnection from "createRTCConnection" /* 4539 */;
import handleAudioRouteChanged from "handleAudioRouteChanged" /* 9648 */;
import obj132 from "obj132" /* 500 */;

require = fn;
function handleChange() {
  currentRouteType = currentRouteType.getCurrentRouteType();
  const tmp3 = null != currentEmbeddedActivity.getCurrentEmbeddedActivity();
  const isConnectedResult = connected.isConnected();
  let tmp8 = currentRouteType === RouteTypes.RouteTypes.RECEIVER && isConnectedResult;
  if (tmp8) {
    let isIOSResult = obj1322.isIOS();
    if (!isIOSResult) {
      let tmp10 = !tmp3;
      if (!tmp3) {
        tmp10 = !tmp4;
      }
      isIOSResult = tmp10;
    }
    tmp8 = isIOSResult;
    const tmp6Result = obj1322;
  }
  const result = ProximitySensorManager.setProximityMonitoringEnabled(tmp8);
  tmp4 = allActiveStreams.getAllActiveStreams().length > 0;
}
if (obj132.isIOS()) {
  let ProximitySensorManager = require("get ActivityIndicator").NativeModules.ProximitySensorManager;
} else {
  ProximitySensorManager = enforcingDefault;
}
initializeDefault;
let prototype = function ProximitySensorManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  const result = new Map().set(closure_5, handleChange);
  applyArgumentsResult.stores = result.set(closure_4, handleChange);
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
let result = obj132.fileFinishedImporting("modules/voice_calls/native/ProximitySensorManager.tsx");

export default prototype;