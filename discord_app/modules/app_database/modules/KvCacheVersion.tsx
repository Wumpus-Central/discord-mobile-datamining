// === Module 5944: okAsync ===

// Module 5944 (okAsync)
import asyncGeneratorStep from "asyncGeneratorStep";
import HELLO_KEY from "HELLO_KEY";
import set from "timestamp";

let c3;
let c4;
let c5;
let closure_6;
let error;
({ HELLO_KEY: c3, VERSION_TO_FORCE_RESYNCING_ALL_DATA: c4, VERSION_TO_FORCE_RESYNCING_ALL_DATA_KEY: c5, VERSION_TO_SKIP_READING_THE_DATABASE: closure_6, VERSION_TO_SKIP_READING_THE_DATABASE_KEY: error } = HELLO_KEY);
const metroImportAll = new require("items")("KvCacheVersion");
class KvCacheVersion {
  constructor() {
    obj = Object.create(new.target.prototype);
    KvCacheVersion = obj;
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
prototype["okAsync"] = function okAsync(closure_0) {
  return callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp2;
            let closure_0 = tmp5;
            closure_0 = undefined;
            let obj2 = outer1_0(outer1_1[3]);
            c2 = 1;
            c3 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = obj2.cache(outer1_0).get(outer1_7);
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          closure_0 = arg1;
          let tmp8 = null;
          if (null != closure_0) {
            tmp8 = closure_0 === outer1_6;
          }
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = tmp8;
          return obj;
        }
      } catch (tmp17) {
        c3 = tmp;
        throw tmp17;
      }
    }
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
  return callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let version = tmp5;
            version = tmp2;
            version = undefined;
            version = undefined;
            let obj2 = outer1_0(outer1_1[3]);
            const forceResyncVersionResult = obj2.forceResyncVersion();
            if (null == forceResyncVersionResult) {
              c3 = 3;
              return { value: false, done: true };
            } else {
              c2 = 1;
              c3 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = forceResyncVersionResult.get(outer1_5);
              return obj1;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          version = arg1;
          version = undefined;
          if (version != null) {
            version = version.version;
          }
          let flag = version === closure_4;
          if (!flag) {
            const _HermesInternal = HermesInternal;
            logger.info("KVStore version mismatch: " + version + " vs " + tmp10);
            flag = false;
          }
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = flag;
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
  obj = obj(1907);
  obj.cacheTransaction(database).put(closure_3, "\u{1F44B}");
  const cacheTransactionResult = obj.cacheTransaction(database);
  const obj3 = obj(1907);
  obj(1907).cacheTransaction(database).put(closure_7, closure_6);
  const cacheTransactionResult1 = obj(1907).cacheTransaction(database);
  const result = obj(1907).forceResyncVersionTransaction(database);
  obj = { version: closure_4 };
  result.put(closure_5, obj);
};
prototype["resetInMemoryState"] = function resetInMemoryState() {
  this.hasSuccessfullyConnected = false;
};
let set = Object.create(KvCacheVersion.prototype);
set.hasSuccessfullyConnected = false;
set.actions = {
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
let result = set.fileFinishedImporting("modules/app_database/modules/KvCacheVersion.tsx");

export default set;