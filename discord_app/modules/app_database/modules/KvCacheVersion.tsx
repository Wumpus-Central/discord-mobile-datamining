// discord_app/modules/app_database/modules/KvCacheVersion.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import DatabaseDaosDefault from "../DatabaseDaos.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import KvCacheVersionConstants from "KvCacheVersionConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let version;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({
  HELLO_KEY: c3,
  VERSION_TO_FORCE_RESYNCING_ALL_DATA: closure_4,
  VERSION_TO_FORCE_RESYNCING_ALL_DATA_KEY: hasOwnProperty,
  VERSION_TO_SKIP_READING_THE_DATABASE: metroRequire,
  VERSION_TO_SKIP_READING_THE_DATABASE_KEY: metroImportDefault,
} = KvCacheVersionConstants);
const tmp3 = new LoggerDefault("KvCacheVersion");
let closure_8 = tmp3;
class KvCacheVersion {
  constructor() {
    const obj = Object.create(new.target.prototype);
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
      },
    };
    return obj;
  }
  okAsync(databaseResult) {
    let closure_0 = databaseResult;
    return (async () => {
      let cacheResult;
      let closure_0;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp4;
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
              let closure_1 = tmp;
              tmp4 = undefined;
              const obj3 = tmp4(closure_1[3]);
              c2 = 1;
              c3 = 1;
              const obj5 = { value: cacheResult.get(closure_1_7), done: false };
              cacheResult = obj3.cache(tmp4);
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            tmp4 = value;
            let tmp7 = null;
            if (null != tmp4) {
              tmp7 = tmp4 === closure_1_6;
            }
            c3 = 3;
            const obj = { value: tmp7, done: true };
            return obj;
          }
        } catch (tmp16) {
          c3 = 3;
          throw tmp16;
        }
      }
    })();
  }
  canUseGuildVersions() {
    let resolved;
    const self = this;
    if (this.hasSuccessfullyConnected) {
      resolved = Promise.resolve(true);
    } else {
      resolved = self.doesDatabaseVersionMatchJsConstants();
    }
    return resolved;
  }
  doesDatabaseVersionMatchJsConstants() {
    return (async () => {
      let c2;
      let c3;
      let closure_1;
      version = tmp;
      const obj3 = DatabaseDaosDefault;
      const forceResyncVersionResult = obj3.forceResyncVersion();
      if (null == forceResyncVersionResult) {
        return false;
      }
      await forceResyncVersionResult.get(closure_2_5);
      version = value;
      if (version != null) {
        version = version.version;
      }
      let flag = version === closure_129_4;
      if (!flag) {
        const _HermesInternal = HermesInternal;
        closure_129_8.info("KVStore version mismatch: " + version + " vs " + tmp9);
        flag = false;
      }
      return flag;
    })();
  }
  handleClear() {
    this.hasSuccessfullyConnected = false;
  }
  handleConnectionOpen() {
    this.hasSuccessfullyConnected = true;
  }
  handleWrite(database) {
    this.hasSuccessfullyConnected = true;
    const obj = DatabaseDaosDefault;
    const cacheTransactionResult = obj.cacheTransaction(database);
    cacheTransactionResult.put(_false, "\u{1F44B}");
    const obj3 = DatabaseDaosDefault;
    const cacheTransactionResult1 = obj3.cacheTransaction(database);
    cacheTransactionResult1.put(metroImportDefault, metroRequire);
    const obj5 = DatabaseDaosDefault;
    const result = obj5.forceResyncVersionTransaction(database);
    const obj2 = { version };
    result.put(hasOwnProperty, obj2);
  }
  resetInMemoryState() {
    this.hasSuccessfullyConnected = false;
  }
}
const prototype = KvCacheVersion.prototype;
let obj = Object.create(KvCacheVersion.prototype);
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
  },
};
let result = size.fileFinishedImporting("modules/app_database/modules/KvCacheVersion.tsx");

export default obj;
