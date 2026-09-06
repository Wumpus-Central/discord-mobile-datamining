// === Module 1995: Host ===

// Module 1995 (Host)
import _mod1988 from "module_1988" /* 1988 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/kv-storage/js/raw/Host.tsx");
const prototype = function Host() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["open"] = function open(database, arg1) {
  _require = database;
  dependencyMap = arg1;
  const Runtime = require("Runtime").Runtime;
  return Runtime.executeAsync("database_open", async (arg0) => {
    const KV_RAW = _mod1988.KV_RAW;
    const obj = { database, invalidateDisabledHandles: null };
    let flag;
    if (closure_1 != null) {
      flag = closure_1.invalidateDisabledHandles;
    }
    if (flag == null) {
      flag = false;
    }
    obj.invalidateDisabledHandles = flag;
    return KV_RAW.databaseOpen(arg0, obj);
  });
};
prototype["openSyncUnsafe"] = function openSyncUnsafe(database, invalidateDisabledHandles) {
  const KV_RAW = _mod1988.KV_RAW;
  const obj = { database, invalidateDisabledHandles: null };
  let flag;
  if (invalidateDisabledHandles != null) {
    flag = invalidateDisabledHandles.invalidateDisabledHandles;
  }
  if (flag == null) {
    flag = false;
  }
  obj.invalidateDisabledHandles = flag;
  return KV_RAW.databaseOpen(null, obj, { synchronous: true });
};
prototype["delete"] = function delete(database) {
  _require = database;
  const Runtime = require("Runtime").Runtime;
  return Runtime.executeAsync("database_delete", async (arg0) => {
    const KV_RAW = _mod1988.KV_RAW;
    return KV_RAW.databaseDelete(arg0, { database });
  });
};
prototype["list"] = function list() {
  return (async () => {
    closure_0 = tmp4;
    const Runtime = require("Runtime").Runtime;
    await Runtime.executeAsync("database_list", async (arg0) => {
      const KV_RAW = closure_1_0(closure_1_1[2]).KV_RAW;
      return KV_RAW.databaseList(arg0);
    });
    return value.map((data) => data.data);
  })();
};
prototype["optimize"] = function optimize(aggressive) {
  _require = aggressive;
  const Runtime = require("Runtime").Runtime;
  return Runtime.executeAsync("database_optimize", async (arg0) => {
    const KV_RAW = _mod1988.KV_RAW;
    return KV_RAW.databaseOptimize(arg0, { aggressive });
  });
};
prototype["raise"] = function raise(arg0) {
  const KV_RAW = _mod1988.KV_RAW;
  KV_RAW.raise(arg0);
};
prototype["malformedValueCount"] = function malformedValueCount() {
  const KV_RAW = _mod1988.KV_RAW;
  return KV_RAW.malformedValueCount();
};
prototype["malformedEntryCount"] = function malformedEntryCount() {
  const KV_RAW = _mod1988.KV_RAW;
  return KV_RAW.malformedEntryCount();
};

export const Host = prototype;