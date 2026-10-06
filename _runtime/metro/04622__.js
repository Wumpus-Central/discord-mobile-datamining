// === Module 4622: ? ===

// Module 4622
import react_native from "react-native" /* 17 */;
import _mod4623 from "module_4623" /* 4623 */;
import ModuleNotFoundError from "ModuleNotFoundError" /* 4624 */;

let installedNitro1;
function getInstalledNitro() {
  return global.NitroModulesProxy;
}
const TurboModuleRegistry = react_native.TurboModuleRegistry;
const installedNitro = getInstalledNitro();
if (null != installedNitro) {
  installedNitro1 = installedNitro;
  if (installedNitro.version !== _mod4623.version) {
    const _Error2 = Error;
    const version = installedNitro.version;
    const _HermesInternal2 = HermesInternal;
    const self5 = this;
    const self6 = this;
    const error = new Error("Nitro was installed twice: once with native version " + version + " and once with JS version " + _mod4623.version + ". This usually means react-native-nitro-modules exists multiple times in node_modules (e.g. in monorepos or double-linked setups).");
    throw error;
  }
} else {
  try {
    const enforcing = TurboModuleRegistry.getEnforcing("NitroModules");
    const installResult = enforcing.install();
    if (null != installResult) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error1 = new Error("Failed to install Nitro: " + installResult);
      throw error1;
    } else {
      installedNitro1 = getInstalledNitro();
      if (null == installedNitro1) {
        const _Error3 = Error;
        const self7 = this;
        const self8 = this;
        const error2 = new Error("NitroModules was installed, but `global.NitroModulesProxy` was null!");
        const self9 = this;
        const self10 = this;
        const moduleNotFoundError = new ModuleNotFoundError.ModuleNotFoundError(error2);
        throw moduleNotFoundError;
      }
    }
  } catch (tmp8) {
    const self3 = this;
    const self4 = this;
    const moduleNotFoundError1 = new ModuleNotFoundError.ModuleNotFoundError(tmp8);
    throw moduleNotFoundError1;
  }
}

export const NitroModules = installedNitro1;
export const isRuntimeAlive = function isRuntimeAlive() {
  return null != globalThis.__nitroJsiCache && null != globalThis.__nitroDispatcher;
};