// === Module 244: AppRegistry ===

// Module 244 (AppRegistry)
import module_245 from "module_245" /* 245 */;
import module_236 from "module_236" /* 236 */;

module_245.registerComponent("LogBox", () => (function NoOp() {
  return null;
}));
global.RN$AppRegistry = module_245;
global.RN$SurfaceRegistry = { renderSurface: module_245.runApplication, setSurfaceProps: module_245.setSurfaceProps };
({ renderSurface: module_245.runApplication, setSurfaceProps: module_245.setSurfaceProps });
module_236("AppRegistry", module_245);

export const AppRegistry = module_245;