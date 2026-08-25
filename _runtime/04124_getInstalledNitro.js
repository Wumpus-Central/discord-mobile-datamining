// _runtime/04124_getInstalledNitro.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import items from "04125_items.js";
import _isNativeReflectConstruct from "04126__isNativeReflectConstruct.js";

function getInstalledNitro() {
  return global.NitroModulesProxy;
}
const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const installedNitro = getInstalledNitro();
if (null != installedNitro) {
  let installedNitro1 = installedNitro;
  if (installedNitro.version !== items.version) {
    const _Error2 = Error;
    const version = installedNitro.version;
    const _HermesInternal2 = HermesInternal;
    const error = new Error("Nitro was installed twice: once with native version " + version + " and once with JS version " + items.version + ". This usually means react-native-nitro-modules exists multiple times in node_modules (e.g. in monorepos or double-linked setups).");
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
        const moduleNotFoundError = new _isNativeReflectConstruct.ModuleNotFoundError(error2);
        throw moduleNotFoundError;
      }
    }
  } catch (tmp13) {
    const moduleNotFoundError1 = new require("_isNativeReflectConstruct").ModuleNotFoundError(tmp13);
    throw moduleNotFoundError1;
  }
}

export const NitroModules = installedNitro1;
export const isRuntimeAlive = function isRuntimeAlive() {
  return null != globalThis.__nitroJsiCache && null != globalThis.__nitroDispatcher;
};