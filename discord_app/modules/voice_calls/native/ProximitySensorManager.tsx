// discord_app/modules/voice_calls/native/ProximitySensorManager.tsx
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
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
class prototype extends tmp2 {}
const prototype1 = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_calls/native/ProximitySensorManager.tsx");

export default prototype1;
