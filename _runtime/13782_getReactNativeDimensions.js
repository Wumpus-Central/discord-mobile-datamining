// _runtime/13782_getReactNativeDimensions.js
import getReactNativeDimensionsWithDimensions from "13783_getReactNativeDimensionsWithDimensions.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";


export default function getReactNativeDimensions() {
  try {
    const Dimensions = get_ActivityIndicator.Dimensions;
    try {
      const Dimensions2 = get_ActivityIndicator.Dimensions;
      const value = Dimensions2.get("window");
      return getReactNativeDimensionsWithDimensions.getReactNativeDimensionsWithDimensions(tmp2, value);
    } catch (err) {
    }
  } catch (err) {
  }
};