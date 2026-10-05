// discord_common/js/packages/kv-storage/js/implementation/Classic.native.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import size from "../../../../../../_runtime/metro/00002__.js";

let __KvStorage;
const NativeModules = react_native.NativeModules;
if (null != global.__KvStorage) {
  __KvStorage = global.__KvStorage;
} else if (null == NativeModules.KvStorage) {
  const _Error4 = Error;
  const self7 = this;
  const self8 = this;
  const error = new Error("couldn't find the native kv_storage module.");
  throw error;
} else {
  const _Function = Function;
  if (NativeModules.KvStorage.activate instanceof Function) {
    const KvStorage = NativeModules.KvStorage;
    if (KvStorage.activate()) {
      if (null == global.__KvStorage) {
        const _Error3 = Error;
        const self5 = this;
        const self6 = this;
        const error1 = new Error("couldn't start the storage subsystem: subsystem missing after activation.");
        throw error1;
      } else {
        __KvStorage = global.__KvStorage;
      }
    } else {
      const _Error2 = Error;
      const self3 = this;
      const self4 = this;
      const error2 = new Error("couldn't start the storage subsystem: activation failed.");
      throw error2;
    }
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error3 = new Error(
      "couldn't start the storage subsystem: native module exists, but jsi might not be available?",
    );
    throw error3;
  }
}
const result = size.fileFinishedImporting(
  "../discord_common/js/packages/kv-storage/js/implementation/Classic.native.tsx",
);

export const KV_RAW = __KvStorage;
