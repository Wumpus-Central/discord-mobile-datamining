// === Module 18623: ProximitySensorManager ===

// Module 18623 (ProximitySensorManager)
import PlatformUtils from "PlatformUtils" /* 1384 */;
import VoiceCallTypes from "VoiceCallTypes" /* 5232 */;
import NativeProximitySensorManagerModuleDefault from "NativeProximitySensorManagerModule" /* 18624 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2067 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6153 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5209 */;
import AudioRouteStore from "AudioRouteStore" /* 5231 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7085 */;

require = fn;
function handleChange() {
  const currentRouteType = AudioRouteStore.getCurrentRouteType();
  const tmp3 = null != EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  const isConnectedResult = RTCConnectionStore.isConnected();
  const tmp4 = ApplicationStreamingStore.getAllActiveStreams().length > 0;
  let tmp7 = currentRouteType === VoiceCallTypes.RouteTypes.RECEIVER && isConnectedResult;
  if (tmp7) {
    let isIOSResult = PlatformUtils.isIOS();
    if (!isIOSResult) {
      let tmp9 = !tmp3;
      if (!tmp3) {
        tmp9 = !tmp4;
      }
      isIOSResult = tmp9;
    }
    tmp7 = isIOSResult;
    const tmp6Result = PlatformUtils;
  }
  const result = NativeProximitySensorManagerModuleDefault.setProximityMonitoringEnabled(tmp7);
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