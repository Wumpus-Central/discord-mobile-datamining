// === Module 2087: Host ===

// Module 2087 (Host)
import _mod2080 from "module_2080" /* 2080 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const result = size.fileFinishedImporting("../discord_common/js/packages/kv-storage/js/raw/Host.tsx");
class Host {
  static open(database, arg1) {
    let closure_1;
    _require = database;
    dependencyMap = arg1;
    const Runtime = require("Runtime").Runtime;
    return Runtime.executeAsync("database_open", async (arg0) => {
      let flag;
      const KV_RAW = _mod2080.KV_RAW;
      const obj = { database, invalidateDisabledHandles: flag };
      flag = undefined;
      const databaseOpen = KV_RAW.databaseOpen;
      if (closure_1 != null) {
        flag = closure_1.invalidateDisabledHandles;
      }
      if (flag == null) {
        flag = false;
      }
      return databaseOpen(arg0, obj);
    });
  }
  static openSyncUnsafe(database, invalidateDisabledHandles) {
    let flag;
    const KV_RAW = _mod2080.KV_RAW;
    const obj = { database, invalidateDisabledHandles: flag };
    flag = undefined;
    const databaseOpen = KV_RAW.databaseOpen;
    if (invalidateDisabledHandles != null) {
      flag = invalidateDisabledHandles.invalidateDisabledHandles;
    }
    if (flag == null) {
      flag = false;
    }
    return databaseOpen(null, obj, { synchronous: true });
  }
  static delete(database) {
    _require = database;
    const Runtime = require("Runtime").Runtime;
    return Runtime.executeAsync("database_delete", async (arg0) => {
      const KV_RAW = _mod2080.KV_RAW;
      const obj = { database };
      return KV_RAW.databaseDelete(arg0, obj);
    });
  }
  static list() {
    return (async () => {
      let c1;
      let c2;
      let closure_0;
      const Runtime = require("Runtime").Runtime;
      await Runtime.executeAsync("database_list", async (arg0) => {
        const KV_RAW = closure_1_0(closure_1_1[2]).KV_RAW;
        return KV_RAW.databaseList(arg0);
      });
      return value.map((data) => data.data);
    })();
  }
  static optimize(aggressive) {
    _require = aggressive;
    const Runtime = require("Runtime").Runtime;
    return Runtime.executeAsync("database_optimize", async (arg0) => {
      const KV_RAW = _mod2080.KV_RAW;
      const obj = { aggressive };
      return KV_RAW.databaseOptimize(arg0, obj);
    });
  }
  static raise(arg0) {
    const KV_RAW = _mod2080.KV_RAW;
    KV_RAW.raise(arg0);
  }
  static malformedValueCount() {
    const KV_RAW = _mod2080.KV_RAW;
    return KV_RAW.malformedValueCount();
  }
  static malformedEntryCount() {
    const KV_RAW = _mod2080.KV_RAW;
    return KV_RAW.malformedEntryCount();
  }
}

export { Host };