// _runtime/14190_getReactNativeDimensions.js
import _mod14191 from "metro/14191__.js";
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
  return _mod14191.getReactNativeDimensionsWithDimensions(value, value2);
}
