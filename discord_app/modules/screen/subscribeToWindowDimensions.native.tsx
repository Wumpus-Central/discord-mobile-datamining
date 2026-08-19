// discord_app/modules/screen/subscribeToWindowDimensions.native.tsx
import getDimensionsStoreStateForEntry from "native/DimensionsStore.android.tsx";

const result = require("obj132").fileFinishedImporting("modules/screen/subscribeToWindowDimensions.native.tsx");

export default function subscribeToWindowDimensions(arg0) {
  closure_0 = arg0;
  return closure_0.subscribe((arg0) => {
    callback(arg0.byAppEntry[str].windowDimensions, arg0.byAppEntry[str].windowDimensionsIgnoringKeyboard);
  });
};