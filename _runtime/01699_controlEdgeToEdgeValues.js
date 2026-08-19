// _runtime/01699_controlEdgeToEdgeValues.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";


export (arg0) => {

}
export const isEdgeToEdge = () => {
  const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
  return null != TurboModuleRegistry.get("RNEdgeToEdge");
};