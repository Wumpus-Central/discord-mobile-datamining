// === Module 11156: subscribeToWindowDimensions ===

// Module 11156 (subscribeToWindowDimensions)
import getDimensionsStoreStateForEntry from "getDimensionsStoreStateForEntry" /* 1495 */;

const result = require("obj132").fileFinishedImporting("modules/screen/subscribeToWindowDimensions.native.tsx");

export default function subscribeToWindowDimensions(arg0) {
  closure_0 = arg0;
  return closure_0.subscribe((arg0) => {
    callback(arg0.byAppEntry[str].windowDimensions, arg0.byAppEntry[str].windowDimensionsIgnoringKeyboard);
  });
};