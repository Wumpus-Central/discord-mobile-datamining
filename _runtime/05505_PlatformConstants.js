// _runtime/05505_PlatformConstants.js
import get_ActivityIndicator from "get ActivityIndicator";

const NativeModules = get_ActivityIndicator.NativeModules;
let PlatformConstants;
if (NativeModules != null) {
  PlatformConstants = NativeModules.PlatformConstants;
}
if (PlatformConstants == null) {
  PlatformConstants = get_ActivityIndicator.Platform.constants;
}

export default PlatformConstants;