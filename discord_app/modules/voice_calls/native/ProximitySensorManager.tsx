// discord_app/modules/voice_calls/native/ProximitySensorManager.tsx
import set2 from "../../../utils/PlatformUtils.tsx";
import initializeDefault from "../../../lib/AutomaticLifecycleManager.tsx";
import RouteTypes from "../VoiceCallTypes.tsx";
import enforcingDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeProximitySensorManagerModule.tsx";
import closure_2 from "../../activities/EmbeddedActivitiesStore.tsx";
import closure_3 from "../../../stores/ApplicationStreamingStore.tsx";
import closure_4 from "../../../stores/RTCConnectionStore.tsx";
import closure_5 from "../AudioRouteStore.native.tsx";
import set from "../../../utils/PlatformUtils.tsx";

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
class prototype extends tmp2 {}
prototype = new prototype();
let result = set.fileFinishedImporting("modules/voice_calls/native/ProximitySensorManager.tsx");

export default prototype;
