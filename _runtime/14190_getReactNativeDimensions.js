// === Module 14190: getReactNativeDimensions ===

// Module 14190 (getReactNativeDimensions)
import _mod14191 from "module_14191" /* 14191 */;
import react_native from "react-native" /* 17 */;


export default function getReactNativeDimensions() {
  let value = null;
  let value2 = null;
  try {
    const Dimensions = react_native.Dimensions;
    value = Dimensions.get("screen");
  } catch (err) {
  }
  try {
    const Dimensions2 = react_native.Dimensions;
    value2 = Dimensions2.get("window");
  } catch (err) {
  }
  return _mod14191.getReactNativeDimensionsWithDimensions(value, value2);
};