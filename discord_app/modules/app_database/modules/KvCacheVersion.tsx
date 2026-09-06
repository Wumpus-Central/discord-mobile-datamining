// === Module 7654: KvCacheVersion ===

// Module 7654 (KvCacheVersion)
import LoggerDefault from "Logger" /* 3 */;
import DatabaseDaosDefault from "DatabaseDaos" /* 1986 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const KvCacheVersionConstants = fn(499);
({ HELLO_KEY: c3, VERSION_TO_FORCE_RESYNCING_ALL_DATA: closure_4, VERSION_TO_FORCE_RESYNCING_ALL_DATA_KEY: hasOwnProperty, VERSION_TO_SKIP_READING_THE_DATABASE: metroRequire, VERSION_TO_SKIP_READING_THE_DATABASE_KEY: closure_7 } = KvCacheVersionConstants);
let closure_8 = new LoggerDefault("KvCacheVersion");
class KvCacheVersion {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.hasSuccessfullyConnected = false;
    obj.actions = {
      BACKGROUND_SYNC(arg0, database) {
            return obj.handleWrite(database);
          },
      CONNECTION_OPEN() {
            return obj.handleConnectionOpen();
          },
      WRITE_CACHES(arg0, database) {
            return obj.handleWrite(database);
          }
    };
    return obj;
  }
}
const prototype = KvCacheVersion.prototype;
prototype["okAsync"] = function okAsync(databaseResult) {
  closure_0 = databaseResult;
  return (async () => {
    closure_128_0 = await tmp5(tmp2[3]).cache(tmp5).get(closure_1_7);
    let tmp8 = null;
    if (null != closure_128_0) {
      tmp8 = closure_128_0 === closure_1_6;
    }
    return tmp8;
  })();
};
prototype["canUseGuildVersions"] = function canUseGuildVersions() {
  const self = this;
  if (this.hasSuccessfullyConnected) {
    let resolved = Promise.resolve(true);
  } else {
    resolved = self.doesDatabaseVersionMatchJsConstants();
  }
  return resolved;
};
prototype["doesDatabaseVersionMatchJsConstants"] = function doesDatabaseVersionMatchJsConstants() {
  return (async () => {
    closure_1 = tmp5;
    closure_0 = tmp2;
    const forceResyncVersionResult = DatabaseDaosDefault.forceResyncVersion();
    if (null == forceResyncVersionResult) {
      return false;
    }
    closure_128_0 = await forceResyncVersionResult.get(closure_2_5);
    if (closure_128_0 != null) {
      version = closure_128_0.version;
    }
    closure_128_1 = version;
    let flag = closure_128_1 === closure_129_4;
    if (!flag) {
      const _HermesInternal = HermesInternal;
      closure_129_8.info("KVStore version mismatch: " + closure_128_1 + " vs " + tmp10);
      flag = false;
    }
    return flag;
  })();
};
prototype["handleClear"] = function handleClear() {
  this.hasSuccessfullyConnected = false;
};
prototype["handleConnectionOpen"] = function handleConnectionOpen() {
  this.hasSuccessfullyConnected = true;
};
prototype["handleWrite"] = function handleWrite(database) {
  this.hasSuccessfullyConnected = true;
  let obj = DatabaseDaosDefault;
  obj.cacheTransaction(database).put(React3, "\u{1F44B}");
  const cacheTransactionResult = obj.cacheTransaction(database);
  DatabaseDaosDefault.cacheTransaction(database).put(React5, timestampProducer);
  const cacheTransactionResult1 = DatabaseDaosDefault.cacheTransaction(database);
  const result = DatabaseDaosDefault.forceResyncVersionTransaction(database);
  obj = { version };
  result.put(hasOwnProperty, obj);
};
prototype["resetInMemoryState"] = function resetInMemoryState() {
  this.hasSuccessfullyConnected = false;
};
let size = Object.create(KvCacheVersion.prototype);
let closure_129_0 = size;
size.hasSuccessfullyConnected = false;
size.actions = {
  BACKGROUND_SYNC(arg0, database) {
    return obj.handleWrite(database);
  },
  CONNECTION_OPEN() {
    return obj.handleConnectionOpen();
  },
  WRITE_CACHES(arg0, database) {
    return obj.handleWrite(database);
  }
};
size = fn(2);
let result = size.fileFinishedImporting("modules/app_database/modules/KvCacheVersion.tsx");

export default size;