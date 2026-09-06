// _runtime/01620_initialWindowMetrics.js
import RNCSafeAreaContext from "01621_RNCSafeAreaContext.js";

let initialWindowMetrics;
if (RNCSafeAreaContext != null) {
  const getConstants = RNCSafeAreaContext.getConstants;
  if (getConstants != null) {
    const constants = getConstants();
    if (constants != null) {
      initialWindowMetrics = constants.initialWindowMetrics;
    }
  }
}
if (initialWindowMetrics == null) {
  initialWindowMetrics = null;
}
let insets;
if (initialWindowMetrics != null) {
  insets = initialWindowMetrics.insets;
}

export { initialWindowMetrics };
export const initialWindowSafeAreaInsets = insets;
