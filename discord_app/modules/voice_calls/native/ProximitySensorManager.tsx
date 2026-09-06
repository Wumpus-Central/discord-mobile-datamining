// discord_app/modules/voice_calls/native/ProximitySensorManager.tsx
import PlatformUtils2 from "../../../utils/PlatformUtils.tsx";
import VoiceCallTypes from "../VoiceCallTypes.tsx";
import NativeProximitySensorManagerModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeProximitySensorManagerModule.tsx";
import EmbeddedActivitiesStore from "../../activities/EmbeddedActivitiesStore.tsx";
import ApplicationStreamingStore from "../../../stores/ApplicationStreamingStore.tsx";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";
import AudioRouteStore from "../AudioRouteStore.native.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";

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
class prototype extends tmp2 {}
prototype = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_calls/native/ProximitySensorManager.tsx");

export default prototype;
