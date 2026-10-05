// === Module 1642: react-native ===

// Module 1642 (react-native)
import react_native from "react-native" /* 17 */;


export const controlEdgeToEdgeValues = (arg0) => {

};
export const isEdgeToEdge = () => {
  const TurboModuleRegistry = react_native.TurboModuleRegistry;
  let tmp2 = null != TurboModuleRegistry.get("RNEdgeToEdge");
  if (!tmp2) {
    const TurboModuleRegistry2 = react_native.TurboModuleRegistry;
    const value = TurboModuleRegistry2.get("DeviceInfo");
    let getConstants;
    if (null != value) {
      getConstants = value.getConstants;
    }
    let isEdgeToEdge;
    if (null != getConstants) {
      isEdgeToEdge = getConstants.call(value).isEdgeToEdge;
    }
    tmp2 = true === isEdgeToEdge;
  }
  return tmp2;
};