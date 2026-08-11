// _runtime/01698_controlEdgeToEdgeValues.js
import get_ActivityIndicator from "get ActivityIndicator";


export (arg0) => {

}
export const isEdgeToEdge = () => {
  const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
  return null != TurboModuleRegistry.get("RNEdgeToEdge");
};