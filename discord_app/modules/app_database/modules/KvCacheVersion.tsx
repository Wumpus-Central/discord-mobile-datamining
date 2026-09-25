// === Module 7062: KvCacheVersion ===

// Module 7062 (KvCacheVersion)
import LoggerDefault from "Logger" /* 3 */;
import DatabaseDaosDefault from "DatabaseDaos" /* 2073 */;
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
    tmp5(tmp2[3]);
    await tmp5(tmp2[3]).cache(tmp5).get(closure_1_7);
    closure_128_0 = value;
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
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = tmp5;
            closure_0 = tmp2;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            const forceResyncVersionResult = DatabaseDaosDefault.forceResyncVersion();
            if (null == forceResyncVersionResult) {
              c3 = 3;
              return { value: false, done: true };
            } else {
              c2 = 1;
              c3 = 1;
              const obj5 = { value: forceResyncVersionResult.get(hasOwnProperty), done: false };
              return obj5;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_128_0 = value;
          version = undefined;
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
          c3 = 3;
          const obj = { value: flag, done: true };
          return obj;
        }
      } catch (tmp19) {
        c3 = tmp;
        throw tmp19;
      }
    }
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
  DatabaseDaosDefault.cacheTransaction(database).put(React3, "\u{1F44B}");
  const cacheTransactionResult = DatabaseDaosDefault.cacheTransaction(database);
  DatabaseDaosDefault.cacheTransaction(database).put(React5, timestampProducer);
  const cacheTransactionResult1 = DatabaseDaosDefault.cacheTransaction(database);
  const result = DatabaseDaosDefault.forceResyncVersionTransaction(database);
  result.put(hasOwnProperty, { version });
};
prototype["resetInMemoryState"] = function resetInMemoryState() {
  this.hasSuccessfullyConnected = false;
};
let obj2 = Object.create(KvCacheVersion.prototype);
let closure_129_0 = obj2;
obj2.hasSuccessfullyConnected = false;
obj2.actions = {
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_database/modules/KvCacheVersion.tsx");

export default obj2;