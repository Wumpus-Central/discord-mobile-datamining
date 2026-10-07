// _runtime/00116_ReactFabric.js
import get_BatchedBridge from "00272_get_BatchedBridge.js";
import describeBuiltInComponentFrame from "00117_describeBuiltInComponentFrame.js";

global.RN$stopSurface = describeBuiltInComponentFrame.stopSurface;
if (true !== global.RN$Bridgeless) {
  const BatchedBridge = get_BatchedBridge.BatchedBridge;
  const result = BatchedBridge.registerCallableModule("ReactFabric", describeBuiltInComponentFrame);
}

export default describeBuiltInComponentFrame;
