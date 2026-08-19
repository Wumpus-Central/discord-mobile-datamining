// === Module 1153: patchAppRegistryRunApplication ===

// Module 1153 (patchAppRegistryRunApplication)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation" /* 817 */;

require = arg1;
const dependencyMap = arg6;
let AppRegistry = "AppRegistry";
function patchAppRegistryRunApplication(arg0) {
  const _require = arg0;
  AppRegistry = _require(997).ReactNativeLibraries.AppRegistry;
  if (AppRegistry) {
    tmp(1154).fillTyped(AppRegistry, "runApplication", (arg0) => {
      closure_0 = arg0;
      return () => {
        const items = [...arguments];
        const item = lib.forEach((item, index) => item());
        return lib(...items);
      };
    });
    const tmpResult = tmp(1154);
  }
  tmp = _require;
}
arg5.INTEGRATION_NAME = "AppRegistry";
arg5.appRegistryIntegration = () => {
  closure_0 = [];
  return {
    name: AppRegistry,
    setupOnce() {
      if (!obj.isWeb()) {
        if (typeof patchAppRegistryRunApplication !== "function") {
          HermesBuiltin.throwTypeError();
        }
        AppRegistry = tmp(dependencyMap[2]).ReactNativeLibraries.AppRegistry;
        if (AppRegistry) {
          tmp(dependencyMap[3]).fillTyped(AppRegistry, "runApplication", (arg0) => {
            closure_0 = arg0;
            return () => {
              const items = [...arguments];
              const item = lib.forEach((item, index) => item());
              return lib(...items);
            };
          });
          const tmpResult = tmp(dependencyMap[3]);
        }
      }
      obj = lib(dependencyMap[0]);
    },
    onRunApplication(onRunApplicationHook) {
      let arr = lib;
      if (lib.includes(onRunApplicationHook)) {
        const debug = lib(dependencyMap[1]).debug;
        debug.log("[AppRegistryIntegration] Callback already registered.");
      } else {
        arr = arr.push(onRunApplicationHook);
      }
    }
  };
};
arg5.patchAppRegistryRunApplication = patchAppRegistryRunApplication;
arg5.getAppRegistryIntegration = () => {
  let client = arg0;
  if (arg0 === undefined) {
    client = registerSpanErrorInstrumentation.getClient();
  }
  if (client) {
    return client.getIntegrationByName(AppRegistry);
  }
};