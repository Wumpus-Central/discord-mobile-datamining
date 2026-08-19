// discord_app/modules/voice_calls/native/ProximitySensorManager.tsx
import obj1322 from "../../../utils/PlatformUtils.tsx";
import initializeDefault from "../../../lib/AutomaticLifecycleManager.tsx";
import RouteTypes from "../VoiceCallTypes.tsx";
import enforcingDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeProximitySensorManagerModule.tsx";
import participantFromServer from "../../activities/EmbeddedActivitiesStore.tsx";
import reset from "../../../stores/ApplicationStreamingStore.tsx";
import createRTCConnection from "../../../stores/RTCConnectionStore.tsx";
import handleAudioRouteChanged from "../AudioRouteStore.native.tsx";
import obj132 from "../../../utils/PlatformUtils.tsx";

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