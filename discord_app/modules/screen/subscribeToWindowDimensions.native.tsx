// === Module 11829: subscribeToWindowDimensions ===

// Module 11829 (subscribeToWindowDimensions)
import closure_0 from "getDimensionsStoreStateForEntry" /* 1493 */;

const result = require("set").fileFinishedImporting("modules/screen/subscribeToWindowDimensions.native.tsx");

export default function subscribeToWindowDimensions(arg0) {
  closure_0 = arg0;
  let str = arg1;
  if (arg1 === undefined) {
    str = "main";
  }
  return closure_0.subscribe((arg0) => {
    callback(arg0.byAppEntry[str].windowDimensions, arg0.byAppEntry[str].windowDimensionsIgnoringKeyboard);
  });
};