// _runtime/metro/01828__.js
import get_ActivityIndicator from "00017__.js";

function isEdgeToEdgeFromLibrary() {
  const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
  return null != TurboModuleRegistry.get("RNEdgeToEdge");
}
function isEdgeToEdgeFromProperty() {
  const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
  value = TurboModuleRegistry.get("DeviceInfo");
  let getConstants;
  if (null != value) {
    getConstants = value.getConstants;
  }
  if (null == getConstants) {
    return true === undefined;
  } else {
    const call = getConstants.call;
    const isEdgeToEdge = typeof call === "unknown" ? getConstants() : call(value).isEdgeToEdge;
  }
}

export (arg0) => {

}
export () => {
  if (typeof isEdgeToEdgeFromLibrary === "function") {
    const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
    let tmp3 = null != TurboModuleRegistry.get("RNEdgeToEdge");
    if (!tmp3) {
      if (typeof isEdgeToEdgeFromProperty === "function") {
        const TurboModuleRegistry2 = get_ActivityIndicator.TurboModuleRegistry;
        value = TurboModuleRegistry2.get("DeviceInfo");
        let getConstants;
        if (null != value) {
          getConstants = value.getConstants;
        }
        if (null == getConstants) {
          tmp3 = true === undefined;
        } else {
          const call = getConstants.call;
          const isEdgeToEdge = typeof call === "unknown" ? getConstants() : call(value).isEdgeToEdge;
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    return tmp3;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
export { isEdgeToEdgeFromLibrary };
export { isEdgeToEdgeFromProperty };