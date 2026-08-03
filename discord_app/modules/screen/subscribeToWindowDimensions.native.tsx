// === Module 11286: subscribeToWindowDimensions ===

// Module 11286 (subscribeToWindowDimensions)
import getDimensionsStoreStateForEntry from "getDimensionsStoreStateForEntry";

const result = require("set").fileFinishedImporting("modules/screen/subscribeToWindowDimensions.native.tsx");

export default function subscribeToWindowDimensions(arg0) {
  let getDimensionsStoreStateForEntry = arg0;
  let str = arg1;
  if (arg1 === undefined) {
    str = "main";
  }
  return getDimensionsStoreStateForEntry.subscribe((arg0) => {
    callback(arg0.byAppEntry[str].windowDimensions, arg0.byAppEntry[str].windowDimensionsIgnoringKeyboard);
  });
};