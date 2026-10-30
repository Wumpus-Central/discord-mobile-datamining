// _runtime/01015_patchAppRegistryRunApplication.js
import _mod681 from "metro/00681__.js";
import TurboModuleRegistry from "00862_TurboModuleRegistry.js";
import _mod867 from "metro/00867__.js";
import fillTyped from "01016_fillTyped.js";

require = arg1;
const dependencyMap = arg6;
let AppRegistry = "AppRegistry";
function patchAppRegistryRunApplication(arg0) {
  closure_0 = arg0;
  AppRegistry = TurboModuleRegistry.ReactNativeLibraries.AppRegistry;
  if (AppRegistry) {
    fillTyped.fillTyped(AppRegistry, "runApplication", (arg0) => {
      closure_0 = arg0;
      return () => {
        const items = [...arguments];
        const item = closure_0.forEach((fn) => fn());
        return closure_0(...items);
      };
    });
    const tmpResult = fillTyped;
  }
}

export const INTEGRATION_NAME = "AppRegistry";
export () => {
  closure_0 = [];
  return {
    name: AppRegistry,
    setupOnce() {
      if (!obj.isWeb()) {
        if (typeof patchAppRegistryRunApplication === "function") {
          AppRegistry = TurboModuleRegistry.ReactNativeLibraries.AppRegistry;
          if (AppRegistry) {
            fillTyped.fillTyped(AppRegistry, "runApplication", (arg0) => {
              closure_0 = arg0;
              return () => {
                const items = [...arguments];
                const item = closure_0.forEach((fn) => fn());
                return closure_0(...items);
              };
            });
            const tmpResult = fillTyped;
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      obj = _mod867;
    },
    onRunApplication(onRunApplicationHook) {
      if (closure_0.includes(onRunApplicationHook)) {
        const debug = _mod681.debug;
        debug.log("[AppRegistryIntegration] Callback already registered.");
      } else {
        closure_0.push(onRunApplicationHook);
      }
    }
  };
}
export { patchAppRegistryRunApplication };
export () => {
  if (client === undefined) {
    client = _mod681.getClient();
  }
  if (client) {
    return client.getIntegrationByName(AppRegistry);
  }
}