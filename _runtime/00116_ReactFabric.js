// === Module 116: ReactFabric ===

// Module 116 (ReactFabric)
import get_BatchedBridge from "get BatchedBridge" /* 272 */;
import describeBuiltInComponentFrame from "describeBuiltInComponentFrame" /* 117 */;

global.RN$stopSurface = describeBuiltInComponentFrame.stopSurface;
if (true !== global.RN$Bridgeless) {
  const BatchedBridge = get_BatchedBridge.BatchedBridge;
  const result = BatchedBridge.registerCallableModule("ReactFabric", describeBuiltInComponentFrame);
}

export default describeBuiltInComponentFrame;