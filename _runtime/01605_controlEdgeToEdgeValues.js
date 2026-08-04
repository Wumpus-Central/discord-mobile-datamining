// _runtime/01605_controlEdgeToEdgeValues.js
import get_ActivityIndicator from "get ActivityIndicator";


export (arg0) => {

}
export const isEdgeToEdge = () => {
  const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
  let tmp2 = null != TurboModuleRegistry.get("RNEdgeToEdge");
  if (!tmp2) {
    const TurboModuleRegistry2 = get_ActivityIndicator.TurboModuleRegistry;
    const value = TurboModuleRegistry2.get("DeviceInfo");
    let getConstants;
    if (null != value) {
      getConstants = value.getConstants;
    }
    if (null == getConstants) {
      tmp2 = true === undefined;
    } else {
      const call = getConstants.call;
      const isEdgeToEdge = typeof call === "unknown" ? getConstants() : call(value).isEdgeToEdge;
    }
  }
  return tmp2;
};