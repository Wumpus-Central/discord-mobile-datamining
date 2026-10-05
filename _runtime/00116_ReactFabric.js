// _runtime/00116_ReactFabric.js
import get_BatchedBridge from "00272_get_BatchedBridge.js";
import 00117__ from "metro/00117__.js";

global.RN$stopSurface = module_117.stopSurface;
if (true !== global.RN$Bridgeless) {
  const BatchedBridge = get_BatchedBridge.BatchedBridge;
  const result = BatchedBridge.registerCallableModule("ReactFabric", module_117);
}

export default module_117;