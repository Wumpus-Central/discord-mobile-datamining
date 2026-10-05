// _runtime/14172_getReactNativeDimensions.js
import _mod14173 from "metro/14173__.js";
import react_native from "00017_react-native.js";

export default function getReactNativeDimensions() {
  let value = null;
  let value2 = null;
  try {
    const Dimensions = react_native.Dimensions;
    value = Dimensions.get("screen");
  } catch (err) {}
  try {
    const Dimensions2 = react_native.Dimensions;
    value2 = Dimensions2.get("window");
  } catch (err) {}
  return _mod14173.getReactNativeDimensionsWithDimensions(value, value2);
}
