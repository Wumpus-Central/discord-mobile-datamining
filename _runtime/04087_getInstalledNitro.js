// _runtime/04087_getInstalledNitro.js
import { TurboModuleRegistry } from "get ActivityIndicator";

function getInstalledNitro() {
  return global.NitroModulesProxy;
}
const installedNitro = getInstalledNitro();
if (null != installedNitro) {
  let installedNitro1 = installedNitro;
  if (installedNitro.version !== require("items").version) {
    const _Error2 = Error;
    const version = installedNitro.version;
    const _HermesInternal2 = HermesInternal;
    const error = new Error("Nitro was installed twice: once with native version " + version + " and once with JS version " + require("items").version + ". This usually means react-native-nitro-modules exists multiple times in node_modules (e.g. in monorepos or double-linked setups).");
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
        const moduleNotFoundError = new require("_isNativeReflectConstruct").ModuleNotFoundError(error2);
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