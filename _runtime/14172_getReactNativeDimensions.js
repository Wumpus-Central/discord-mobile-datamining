// === Module 14172: getReactNativeDimensions ===

// Module 14172 (getReactNativeDimensions)
import _mod14173 from "module_14173" /* 14173 */;
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
  return _mod14173.getReactNativeDimensionsWithDimensions(value, value2);
};