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
    _require(1154).fillTyped(AppRegistry, "runApplication", (arg0) => {
      closure_0 = arg0;
      return () => {
        const items = [...arguments];
        const item = lib.forEach((arg0) => arg0());
        return lib(...items);
      };
    });
    const tmpResult = _require(1154);
  }
}
arg5.INTEGRATION_NAME = "AppRegistry";
arg5.appRegistryIntegration = () => {
  closure_0 = [];
  return {
    name: AppRegistry,
    setupOnce() {
      if (!obj.isWeb()) {
        if (typeof closure_1_3 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        AppRegistry = tmp(tmp2[2]).ReactNativeLibraries.AppRegistry;
        if (AppRegistry) {
          tmp(tmp2[3]).fillTyped(AppRegistry, "runApplication", (arg0) => {
            closure_0 = arg0;
            return () => {
              const items = [...arguments];
              const item = lib.forEach((arg0) => arg0());
              return lib(...items);
            };
          });
          const tmpResult = tmp(tmp2[3]);
        }
        const tmp4 = lib;
      }
    },
    onRunApplication(onRunApplicationHook) {
      let arr = lib;
      if (lib.includes(onRunApplicationHook)) {
        const debug = lib(closure_1_1[1]).debug;
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
    const obj2 = registerSpanErrorInstrumentation;
  }
  if (client) {
    return client.getIntegrationByName(AppRegistry);
  }
};