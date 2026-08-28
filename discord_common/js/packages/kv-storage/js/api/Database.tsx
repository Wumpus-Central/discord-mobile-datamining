// discord_common/js/packages/kv-storage/js/api/Database.tsx
import TableId from "../types/index.tsx";
import open from "../raw/Host.tsx";
import logger from "../raw/Runtime.tsx";
import closure_3 from "../../../../../../_runtime/00005_asyncGeneratorStep.js";

require = arg1;
let Database;
class Database {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.raw = global;
    obj.name = global.name;
    obj.lastState = require("TableId").DatabaseState.Open;
    obj.handle = global.handle;
    Runtime = require("logger").Runtime;
    obj.databaseStateCallback = Runtime.addDatabaseStateCallback((arg0, lastState) => {
      if (obj.handle === arg0) {
        tmp.lastState = lastState;
      }
    });
    return obj;
  }
}
const prototype = Database.prototype;
Database["open"] = function open(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return callback(function*() {
    closure_0 = closure_1_5;
    const Host = closure_1_0(table[1]).Host;
    yield Host.open(closure_1_0, c1);
    return new closure_0(arg1);
  })();
};
Database["openSyncUnsafe"] = function openSyncUnsafe(arg0, arg1) {
  const Host = obj(1966).Host;
  const openSyncUnsafeResult = Host.openSyncUnsafe(arg0, arg1);
  if (typeof Database !== "function") {
    HermesBuiltin.throwTypeError();
  }
  obj = Object.create(Database.prototype);
  obj.raw = openSyncUnsafeResult;
  obj.name = openSyncUnsafeResult.name;
  obj.lastState = obj(1964).DatabaseState.Open;
  obj.handle = openSyncUnsafeResult.handle;
  const Runtime = tmp2(1967).Runtime;
  obj.databaseStateCallback = Runtime.addDatabaseStateCallback((arg0, lastState) => {
    if (obj.handle === arg0) {
      tmp.lastState = lastState;
    }
  });
  return obj;
};
Database["delete"] = function delete(arg0) {
  const Host = open.Host;
  return Host.delete(arg0);
};
prototype["close"] = function close() {
  const self = this;
  this.lastState = TableId.DatabaseState.Closed;
  const raw = this.raw;
  if (raw != null) {
    raw.close();
  }
  self.raw = null;
  const Runtime = logger.Runtime;
  const result = Runtime.removeCompletionCallback(self.databaseStateCallback);
};
prototype["disable"] = function disable(arg0) {
  const self = this;
  if (null == this.raw) {
    let resolved = Promise.resolve();
  } else {
    self.lastState = TableId.DatabaseState.Disabled;
    const obj = { type: "db.disable", handle: 0, reason: null };
    obj[2] = arg0;
    resolved = self.execute(obj);
  }
  return resolved;
};
prototype["execute"] = function execute(table) {
  const self = this;
  importDefault = table;
  let type = arg1;
  const _require = arg1;
  if (null == this.raw) {
    const _Error = Error;
    const _HermesInternal2 = HermesInternal;
    error = new Error("database is no longer open (database: " + tmp);
    throw error;
  } else {
    if ("key" in table) {
      let str = table.key[0];
    } else {
      str = table.table;
    }
    if (null === type) {
      let Runtime = _require(self[3]).Runtime;
      if (type == null) {
        type = table.type;
      }
      let executeAsyncResult = Runtime.executeAsync(type, (arg0) => {
        raw = raw.raw;
        const obj = {};
        const merged = Object.assign(closure_1);
        obj.handle = 0;
        raw.execute(arg0, obj);
      });
    } else {
      let type2 = type;
      if (type == null) {
        type2 = table.type;
      }
      if (str == null) {
        str = "";
      }
      const _HermesInternal = HermesInternal;
      function callback() {
        const Runtime = callback(self[3]).Runtime;
        let type = callback;
        if (callback == null) {
          type = table.type;
        }
        return Runtime.executeAsync(type, (arg0) => {
          raw = raw.raw;
          const obj = {};
          const merged = Object.assign(closure_1);
          obj.handle = 0;
          raw.execute(arg0, obj);
        });
      }
      executeAsyncResult = importDefault(self[4]).timeAsync("\u{1F4BE}", "" + type2 + " " + str, callback);
      let obj = importDefault(self[4]);
    }
    return executeAsyncResult;
  }
};
prototype["executeSync"] = function executeSync(table) {
  const self = this;
  closure_0 = table;
  if (null == this.raw) {
    const _Error = Error;
    const _HermesInternal2 = HermesInternal;
    error = new Error("database is no longer open (database: " + tmp);
    throw error;
  } else {
    if ("key" in table) {
      let str = table.key[0];
    } else {
      str = table.table;
    }
    if (str == null) {
      str = "";
    }
    const _HermesInternal = HermesInternal;
    return self(10).time("\u{1F4BE}", "SYNC: " + table.type + " " + str, () => {
      const raw = self.raw;
      const obj = {};
      const merged = Object.assign(closure_0);
      obj.handle = 0;
      return raw.execute(null, obj, { synchronous: true });
    });
  }
};
prototype["fullVacuum"] = function fullVacuum() {
  return this.execute({ type: "db.vacuum", handle: 0, complete: true });
};
prototype["fsInfo"] = function fsInfo() {
  return this.execute({ type: "db.fs_info", handle: 0 });
};
prototype["incrementalVacuum"] = function incrementalVacuum() {
  return this.execute({ type: "db.vacuum", handle: 0, complete: false });
};
prototype["instantaneousState"] = function instantaneousState() {
  const self = this;
  if (null == this.raw) {
    let Closed = TableId.DatabaseState.Closed;
  } else {
    Closed = self.executeSync({ type: "db.state" });
    self.lastState = Closed;
  }
  return Closed;
};
prototype["instantaneousStateAsync"] = function instantaneousStateAsync() {
  const self = this;
  return callback(function*() {
    if (table === 2) {
      table = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
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
        table = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            table = 3;
            throw arg1;
          } else if (arg0 === 2) {
            table = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const obj5 = closure_1_0;
            if (null == closure_1_0.raw) {
              const Closed = closure_1_0(table[2]).DatabaseState.Closed;
              table = 3;
            } else {
              c1 = 1;
              table = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj5.execute({ type: "db.state" });
              return obj1;
            }
          }
        } else if (arg0 === 1) {
          table = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          obj5.lastState = arg1;
        }
        table = 3;
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } catch (tmp9) {
        table = tmp;
        throw tmp9;
      }
    }
  })();
};
prototype["state"] = function state() {
  return this.lastState;
};
prototype["transaction"] = function transaction(arg0, arg1) {
  const self = this;
  closure_1 = arg1;
  if (typeof DatabaseTransaction !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let obj = Object.create(DatabaseTransaction.prototype);
  obj.database = this;
  obj.operations = [];
  const resolved = Promise.resolve(arg0(obj));
  return resolved.then(() => {
    if (obj.operations.length > 0) {
      obj = { type: "db.transaction", operations: null };
      obj[1] = obj.complete();
      let executeResult = self.execute(obj, closure_1);
    } else {
      executeResult = Promise.resolve();
    }
    return executeResult;
  });
};
class DatabaseTransaction {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj.database = global;
    obj.operations = [];
    return obj;
  }
}
const prototype2 = DatabaseTransaction.prototype;
prototype2["add"] = function add(arg0) {
  const operations = this.operations;
  operations.push(arg0);
};
prototype2["complete"] = function complete() {
  const iter = this.operations[Symbol.iterator]();
  while (iter !== undefined) {
    iter.next().handle = 0;
    continue;
  }
  return this.operations;
};
prototype2["toString"] = function toString() {
  return "[DatabaseTransaction " + this.database.handle + ": " + this.operations.length + " ops]";
};
let result = require("set").fileFinishedImporting("../discord_common/js/packages/kv-storage/js/api/Database.tsx");

export { Database };
export { DatabaseTransaction };