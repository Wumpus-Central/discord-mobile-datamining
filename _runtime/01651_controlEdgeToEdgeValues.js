// === Module 1651: controlEdgeToEdgeValues ===

// Module 1651 (controlEdgeToEdgeValues)
import closure_0 from "get ActivityIndicator" /* 17 */;


export (arg0) => {

}
export const isEdgeToEdge = () => {
  TurboModuleRegistry = TurboModuleRegistry.TurboModuleRegistry;
  let tmp2 = null != TurboModuleRegistry.get("RNEdgeToEdge");
  if (!tmp2) {
    const TurboModuleRegistry2 = TurboModuleRegistry.TurboModuleRegistry;
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