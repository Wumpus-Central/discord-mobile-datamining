// === Module 17207: ProximitySensorManager ===

// Module 17207 (ProximitySensorManager)
import PlatformUtils2 from "PlatformUtils" /* 1364 */;
import VoiceCallTypes from "VoiceCallTypes" /* 9088 */;
import NativeProximitySensorManagerModuleDefault from "NativeProximitySensorManagerModule" /* 17208 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2043 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4851 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4852 */;
import AudioRouteStore from "AudioRouteStore" /* 9087 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6534 */;

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
  tmp4 = ApplicationStreamingStore.getAllActiveStreams().length > 0;
}
const PlatformUtils = fn(1364);
if (PlatformUtils.isIOS()) {
  let ProximitySensorManager = fn(17).NativeModules.ProximitySensorManager;
} else {
  ProximitySensorManager = NativeProximitySensorManagerModuleDefault;
}
const prototype = function ProximitySensorManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  const result = new Map().set(AudioRouteStore, handleChange);
  applyArgumentsResult.stores = result.set(RTCConnectionStore, handleChange);
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_calls/native/ProximitySensorManager.tsx");

export default prototype1;