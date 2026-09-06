// === Module 244: AppRegistry ===

// Module 244 (AppRegistry)
import componentProviderInstrumentationHook from "componentProviderInstrumentationHook" /* 245 */;
import MessageQueue from "module_236" /* 236 */;

componentProviderInstrumentationHook.registerComponent("LogBox", () => function NoOp() {
  return null;
});
global.RN$AppRegistry = componentProviderInstrumentationHook;
global.RN$SurfaceRegistry = { renderSurface: componentProviderInstrumentationHook.runApplication, setSurfaceProps: componentProviderInstrumentationHook.setSurfaceProps };
MessageQueue("AppRegistry", componentProviderInstrumentationHook);

export const AppRegistry = componentProviderInstrumentationHook;