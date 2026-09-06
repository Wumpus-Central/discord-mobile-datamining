// === Module 4300: ? ===

// Module 4300
import _mod17 from "module_17" /* 17 */;
import _mod4301 from "module_4301" /* 4301 */;
import _mod4302 from "module_4302" /* 4302 */;

function getInstalledNitro() {
  return global.NitroModulesProxy;
}
const TurboModuleRegistry = _mod17.TurboModuleRegistry;
const installedNitro = getInstalledNitro();
if (null != installedNitro) {
  let installedNitro1 = installedNitro;
  if (installedNitro.version !== _mod4301.version) {
    const _Error2 = Error;
    const version = installedNitro.version;
    const _HermesInternal2 = HermesInternal;
    const error = new Error("Nitro was installed twice: once with native version " + version + " and once with JS version " + _mod4301.version + ". This usually means react-native-nitro-modules exists multiple times in node_modules (e.g. in monorepos or double-linked setups).");
    throw error;
  }
} else {
  try {
    const enforcing = TurboModuleRegistry.getEnforcing("NitroModules");
    const installResult = enforcing.install();
    if (null != installResult) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error1 = new Error("Failed to install Nitro: " + installResult);
      throw error1;
    } else {
      installedNitro1 = getInstalledNitro();
      if (null == installedNitro1) {
        const _Error3 = Error;
        const error2 = new Error("NitroModules was installed, but `global.NitroModulesProxy` was null!");
        const moduleNotFoundError = new _mod4302.ModuleNotFoundError(error2);
        throw moduleNotFoundError;
      }
    }
  } catch (tmp13) {
    const moduleNotFoundError1 = new tmp3(tmp[2]).ModuleNotFoundError(tmp13);
    throw moduleNotFoundError1;
  }
}

export const NitroModules = installedNitro1;
export const isRuntimeAlive = function isRuntimeAlive() {
  return null != globalThis.__nitroJsiCache && null != globalThis.__nitroDispatcher;
};