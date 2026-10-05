// === Module 1029: ? ===

// Module 1029
import _mod693 from "module_693" /* 693 */;
import ReactNativeLibraries from "ReactNativeLibraries" /* 873 */;
import _mod878 from "module_878" /* 878 */;
import fillTyped from "fillTyped" /* 1030 */;

const f82875 = (arg0) => {
  closure_0 = arg0;
  return () => {
    const items = [...arguments];
    const item = closure_0.forEach((fn) => fn());
    return closure_0(...items);
  };
};
let AppRegistry = "AppRegistry";
function patchAppRegistryRunApplication(arg0) {
  let closure_0 = arg0;
  AppRegistry = ReactNativeLibraries.ReactNativeLibraries.AppRegistry;
  if (AppRegistry) {
    const tmpResult = fillTyped;
    tmpResult.fillTyped(AppRegistry, "runApplication", f82875);
  }
}

export const INTEGRATION_NAME = "AppRegistry";
export const appRegistryIntegration = () => {
  let closure_0 = [];
  let obj = {
    name: AppRegistry,
    setupOnce() {
      const obj = _mod878;
      if (!obj.isWeb()) {
        if (typeof patchAppRegistryRunApplication === "function") {
          AppRegistry = ReactNativeLibraries.ReactNativeLibraries.AppRegistry;
          if (AppRegistry) {
            const tmpResult = fillTyped;
            tmpResult.fillTyped(AppRegistry, "runApplication", f82875);
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
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
  return obj;
};
export { patchAppRegistryRunApplication };
export const getAppRegistryIntegration = () => {
  let client;
  if (client === undefined) {
    const obj2 = _mod693;
    client = obj2.getClient();
  }
  if (client) {
    return client.getIntegrationByName(AppRegistry);
  }
};