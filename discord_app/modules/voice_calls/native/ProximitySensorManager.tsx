// discord_app/modules/voice_calls/native/ProximitySensorManager.tsx
import set2 from "set" /* 500 */;
import initializeDefault from "initialize" /* 5038 */;
import RouteTypes from "RouteTypes" /* 9649 */;
import enforcingDefault from "enforcing" /* 16689 */;
import closure_2 from "participantFromServer" /* 1390 */;
import closure_3 from "reset" /* 4652 */;
import closure_4 from "createRTCConnection" /* 4539 */;
import closure_5 from "handleAudioRouteChanged" /* 9648 */;
import set from "set" /* 500 */;

require = arg1;
function handleChange() {
  currentRouteType = currentRouteType.getCurrentRouteType();
  const tmp3 = null != currentEmbeddedActivity.getCurrentEmbeddedActivity();
  const isConnectedResult = connected.isConnected();
  let tmp8 = currentRouteType === RouteTypes.RouteTypes.RECEIVER && isConnectedResult;
  if (tmp8) {
    let isIOSResult = set2.isIOS();
    if (!isIOSResult) {
      let tmp10 = !tmp3;
      if (!tmp3) {
        tmp10 = !tmp4;
      }
      isIOSResult = tmp10;
    }
    tmp8 = isIOSResult;
    const tmp6Result = set2;
  }
  const result = ProximitySensorManager.setProximityMonitoringEnabled(tmp8);
}
if (set.isIOS()) {
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
let result = set.fileFinishedImporting("modules/voice_calls/native/ProximitySensorManager.tsx");

export default prototype;