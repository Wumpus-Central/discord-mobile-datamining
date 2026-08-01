// === Module 116: ReactFabric ===

// Module 116 (ReactFabric)
import describeBuiltInComponentFrame from "describeBuiltInComponentFrame";

global.RN$stopSurface = describeBuiltInComponentFrame.stopSurface;
if (true !== global.RN$Bridgeless) {
  const BatchedBridge = require("get BatchedBridge").BatchedBridge;
  const result = BatchedBridge.registerCallableModule("ReactFabric", describeBuiltInComponentFrame);
}

export default describeBuiltInComponentFrame;