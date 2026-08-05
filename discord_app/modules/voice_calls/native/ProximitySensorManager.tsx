// discord_app/modules/voice_calls/native/ProximitySensorManager.tsx
import participantFromServer from "participantFromServer";
import reset from "reset";
import createRTCConnection from "createRTCConnection";
import handleAudioRouteChanged from "handleAudioRouteChanged";
import set from "set";
import "initialize";
import set from "reset";

const require = arg1;
function handleChange() {
  currentRouteType = currentRouteType.getCurrentRouteType();
  const tmp3 = null != currentEmbeddedActivity.getCurrentEmbeddedActivity();
  const isConnectedResult = connected.isConnected();
  let tmp8 = currentRouteType === require("../VoiceCallTypes.tsx") /* RouteTypes */.RouteTypes.RECEIVER && isConnectedResult;
  if (tmp8) {
    let isIOSResult = require("../../../utils/PlatformUtils.tsx") /* set */.isIOS();
    if (!isIOSResult) {
      let tmp10 = !tmp3;
      if (!tmp3) {
        tmp10 = !tmp4;
      }
      isIOSResult = tmp10;
    }
    tmp8 = isIOSResult;
    const tmp6Result = require("../../../utils/PlatformUtils.tsx") /* set */;
  }
  const result = ProximitySensorManager.setProximityMonitoringEnabled(tmp8);
}
if (set.isIOS()) {
  let ProximitySensorManager = require("get ActivityIndicator").NativeModules.ProximitySensorManager;
} else {
  ProximitySensorManager = require("enforcing");
}
let prototype = function ProximitySensorManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  const result = new Map().set(handleAudioRouteChanged, handleChange);
  applyArgumentsResult.stores = result.set(createRTCConnection, handleChange);
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
let result = set.fileFinishedImporting("modules/voice_calls/native/ProximitySensorManager.tsx");

export default prototype;