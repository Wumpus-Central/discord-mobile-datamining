// discord_common/js/packages/kv-storage/js/implementation/Classic.native.tsx
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const NativeModules = get_ActivityIndicator.NativeModules;
if (null != global.__KvStorage) {
  let __KvStorage = global.__KvStorage;
} else if (null == NativeModules.KvStorage) {
  const _Error4 = Error;
  const error = new Error("couldn't find the native kv_storage module.");
  throw error;
} else {
  const _Function = Function;
  if (NativeModules.KvStorage.activate instanceof Function) {
    const KvStorage = NativeModules.KvStorage;
    if (KvStorage.activate()) {
      if (null == global.__KvStorage) {
        const _Error3 = Error;
        const error1 = new Error("couldn't start the storage subsystem: subsystem missing after activation.");
        throw error1;
      } else {
        __KvStorage = global.__KvStorage;
      }
    } else {
      const _Error2 = Error;
      const error2 = new Error("couldn't start the storage subsystem: activation failed.");
      throw error2;
    }
  } else {
    const _Error = Error;
    const error3 = new Error("couldn't start the storage subsystem: native module exists, but jsi might not be available?");
    throw error3;
  }
}
const result = set.fileFinishedImporting("../discord_common/js/packages/kv-storage/js/implementation/Classic.native.tsx");

export const KV_RAW = __KvStorage;