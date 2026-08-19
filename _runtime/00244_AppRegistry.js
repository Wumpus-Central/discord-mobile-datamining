// _runtime/00244_AppRegistry.js
import MessageQueueDefault from "00236_MessageQueue.js";
import importAllResult from "00245_map.js";

importAllResult.registerComponent("LogBox", () => function NoOp() {
  return null;
});
global.RN$AppRegistry = importAllResult;
global.RN$SurfaceRegistry = { renderSurface: importAllResult.runApplication, setSurfaceProps: importAllResult.setSurfaceProps };
MessageQueueDefault("AppRegistry", importAllResult);

export const AppRegistry = importAllResult;