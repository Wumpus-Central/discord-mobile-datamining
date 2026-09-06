// === Module 1018: patchAppRegistryRunApplication ===

// Module 1018 (patchAppRegistryRunApplication)
import _mod682 from "module_682" /* 682 */;
import TurboModuleRegistry from "TurboModuleRegistry" /* 862 */;
import fillTyped from "fillTyped" /* 1019 */;

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
          AppRegistry = tmp(862).ReactNativeLibraries.AppRegistry;
          if (AppRegistry) {
            tmp(1019).fillTyped(AppRegistry, "runApplication", (arg0) => {
              closure_0 = arg0;
              return () => {
                const items = [...arguments];
                const item = closure_0.forEach((fn) => fn());
                return closure_0(...items);
              };
            });
            const tmpResult = tmp(1019);
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    },
    onRunApplication(onRunApplicationHook) {
      let arr = closure_0;
      if (closure_0.includes(onRunApplicationHook)) {
        const debug = _mod682.debug;
        debug.log("[AppRegistryIntegration] Callback already registered.");
      } else {
        arr = arr.push(onRunApplicationHook);
      }
    }
  };
}
export { patchAppRegistryRunApplication };
export const getAppRegistryIntegration = () => {
  let client = arg0;
  if (arg0 === undefined) {
    client = _mod682.getClient();
  }
  if (client) {
    return client.getIntegrationByName(AppRegistry);
  }
};