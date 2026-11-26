// === Module 12997: subscribeToWindowDimensions ===

// Module 12997 (subscribeToWindowDimensions)
import DimensionsStore from "DimensionsStore" /* 1496 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/screen/subscribeToWindowDimensions.native.tsx");

export default function subscribeToWindowDimensions(arg0) {
  closure_0 = arg0;
  if (arg1 === undefined) {
    const str = "main";
  }
  return DimensionsStore.subscribe((arg0) => {
    closure_0(arg0.byAppEntry[str].windowDimensions, arg0.byAppEntry[str].windowDimensionsIgnoringKeyboard);
  });
};