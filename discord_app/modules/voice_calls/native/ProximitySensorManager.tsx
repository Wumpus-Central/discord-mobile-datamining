// === Module 17470: ProximitySensorManager ===

// Module 17470 (ProximitySensorManager)
import PlatformUtils2 from "PlatformUtils" /* 1115 */;
import VoiceCallTypes from "VoiceCallTypes" /* 9084 */;
import NativeProximitySensorManagerModuleDefault from "NativeProximitySensorManagerModule" /* 17471 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4582 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;
import AudioRouteStore from "AudioRouteStore" /* 9083 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

require = fn;
function handleChange() {
  const currentRouteType = AudioRouteStore.getCurrentRouteType();
  const tmp3 = null != EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  const isConnectedResult = RTCConnectionStore.isConnected();
  let tmp8 = currentRouteType === VoiceCallTypes.RouteTypes.RECEIVER && isConnectedResult;
  if (tmp8) {
    let isIOSResult = PlatformUtils2.isIOS();
    if (!isIOSResult) {
      let tmp10 = !tmp3;
      if (!tmp3) {
        tmp10 = !tmp4;
      }
      isIOSResult = tmp10;
    }
    tmp8 = isIOSResult;
    const tmp6Result = PlatformUtils2;
  }
  const result = ProximitySensorManager.setProximityMonitoringEnabled(tmp8);
}
const PlatformUtils = fn(1115);
if (PlatformUtils.isIOS()) {
  let ProximitySensorManager = fn(17).NativeModules.ProximitySensorManager;
} else {
  ProximitySensorManager = NativeProximitySensorManagerModuleDefault;
}
let prototype = function ProximitySensorManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  const result = new Map().set(AudioRouteStore, handleChange);
  applyArgumentsResult.stores = result.set(RTCConnectionStore, handleChange);
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_calls/native/ProximitySensorManager.tsx");

export default prototype;