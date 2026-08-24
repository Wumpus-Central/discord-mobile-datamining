// === Module 1964: open ===

// Module 1964 (open)
import set from "set" /* 1957 */;
import closure_2 from "asyncGeneratorStep" /* 5 */;

require = arg1;
const result = require("set").fileFinishedImporting("../discord_common/js/packages/kv-storage/js/raw/Host.tsx");
const prototype = function Host() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["open"] = function open(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  const Runtime = _require(1965).Runtime;
  return Runtime.executeAsync("database_open", (arg0) => {
    const KV_RAW = callback(obj[2]).KV_RAW;
    obj = { database: callback, invalidateDisabledHandles: null };
    let flag;
    if (obj != null) {
      flag = obj.invalidateDisabledHandles;
    }
    if (flag == null) {
      flag = false;
    }
    obj[1] = flag;
    return KV_RAW.databaseOpen(arg0, obj);
  });
};
prototype["openSyncUnsafe"] = function openSyncUnsafe(database, invalidateDisabledHandles) {
  const KV_RAW = set.KV_RAW;
  const obj = { database, invalidateDisabledHandles: null };
  let flag;
  if (invalidateDisabledHandles != null) {
    flag = invalidateDisabledHandles.invalidateDisabledHandles;
  }
  if (flag == null) {
    flag = false;
  }
  obj[1] = flag;
  return KV_RAW.databaseOpen(null, obj, { synchronous: true });
};
prototype["delete"] = function delete(arg0) {
  const _require = arg0;
  const Runtime = _require(1965).Runtime;
  return Runtime.executeAsync("database_delete", (arg0) => {
    const KV_RAW = callback(closure_1_1[2]).KV_RAW;
    return KV_RAW.databaseDelete(arg0, { database: callback });
  });
};
prototype["list"] = function list() {
  return callback(function*() {
    closure_0 = tmp4;
    const Runtime = closure_1_0(table[1]).Runtime;
    yield Runtime.executeAsync("database_list", (arg0) => {
      const KV_RAW = tmp4(table[2]).KV_RAW;
      return KV_RAW.databaseList(arg0);
    });
    return arg1.map((data) => data.data);
  })();
};
prototype["optimize"] = function optimize(arg0) {
  const _require = arg0;
  const Runtime = _require(1965).Runtime;
  return Runtime.executeAsync("database_optimize", (arg0) => {
    const KV_RAW = callback(closure_1_1[2]).KV_RAW;
    return KV_RAW.databaseOptimize(arg0, { aggressive: callback });
  });
};
prototype["raise"] = function raise(arg0) {
  const KV_RAW = set.KV_RAW;
  KV_RAW.raise(arg0);
};

export const Host = prototype;