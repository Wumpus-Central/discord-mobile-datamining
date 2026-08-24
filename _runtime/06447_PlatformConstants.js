// === Module 6447: PlatformConstants ===

// Module 6447 (PlatformConstants)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const NativeModules = get_ActivityIndicator.NativeModules;
let PlatformConstants;
if (NativeModules != null) {
  PlatformConstants = NativeModules.PlatformConstants;
}
if (PlatformConstants == null) {
  PlatformConstants = get_ActivityIndicator.Platform.constants;
}

export default PlatformConstants;