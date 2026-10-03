// === Module 1029: patchAppRegistryRunApplication ===

// Module 1029 (patchAppRegistryRunApplication)
import _mod693 from "module_693" /* 693 */;
import TurboModuleRegistry from "TurboModuleRegistry" /* 873 */;
import _mod878 from "module_878" /* 878 */;
import fillTyped from "fillTyped" /* 1030 */;

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
      obj = _mod878;
    },
    onRunApplication(onRunApplicationHook) {
      if (closure_0.includes(onRunApplicationHook)) {
        const debug = _mod693.debug;
        debug.log("[AppRegistryIntegration] Callback already registered.");
      } else {
        closure_0.push(onRunApplicationHook);
      }
    }
  };
}
export { patchAppRegistryRunApplication };
export const getAppRegistryIntegration = () => {
  if (client === undefined) {
    client = _mod693.getClient();
  }
  if (client) {
    return client.getIntegrationByName(AppRegistry);
  }
};