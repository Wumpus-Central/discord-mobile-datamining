// _runtime/06160_GestureDetectorType.js
import react_native from "06161_react-native.js";
import GestureDetector from "06164_GestureDetector.js";
import InterceptingGestureDetector from "06224_InterceptingGestureDetector.js";
import VirtualDetector from "06226_VirtualDetector.js";

const GestureDetector_export = GestureDetector.GestureDetector;
const InterceptingGestureDetector_export = InterceptingGestureDetector.InterceptingGestureDetector;

export const GestureDetectorType = react_native.GestureDetectorType;
export { GestureDetector_export as GestureDetector };
export { InterceptingGestureDetector_export as InterceptingGestureDetector };
export const VirtualGestureDetector = VirtualDetector.VirtualDetector;
