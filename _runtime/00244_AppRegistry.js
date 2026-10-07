// _runtime/00244_AppRegistry.js
import componentProviderInstrumentationHook from "00245_componentProviderInstrumentationHook.js";
import MessageQueue from "metro/00236__.js";

componentProviderInstrumentationHook.registerComponent(
  "LogBox",
  () =>
    function NoOp() {
      return null;
    },
);
global.RN$AppRegistry = componentProviderInstrumentationHook;
global.RN$SurfaceRegistry = {
  renderSurface: componentProviderInstrumentationHook.runApplication,
  setSurfaceProps: componentProviderInstrumentationHook.setSurfaceProps,
};
MessageQueue("AppRegistry", componentProviderInstrumentationHook);

export const AppRegistry = componentProviderInstrumentationHook;
