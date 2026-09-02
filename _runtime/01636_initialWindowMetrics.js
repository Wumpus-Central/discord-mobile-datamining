// _runtime/01636_initialWindowMetrics.js
import importDefaultResult from "01637_RNCSafeAreaContext.js";

let initialWindowMetrics;
if (importDefaultResult != null) {
  const getConstants = importDefaultResult.getConstants;
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
