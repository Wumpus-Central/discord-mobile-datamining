// === Module 1994: Database ===

// Module 1994 (Database)
import AppStartPerformanceDefault from "AppStartPerformance" /* 10 */;
import TableId from "TableId" /* 1993 */;
import Host2 from "Host" /* 1995 */;
import Runtime2 from "Runtime" /* 1996 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let Database;
class Database {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.raw = global;
    obj.name = global.name;
    obj.lastState = closure_0(closure_2[2]).DatabaseState.Open;
    obj.handle = global.handle;
    Runtime = closure_0(closure_2[3]).Runtime;
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
  return (async () => {
    closure_0 = Database;
    const Host = closure_0(c2[1]).Host;
    await Host.open(closure_0, closure_1);
    return new closure_0(value);
  })();
};
Database["openSyncUnsafe"] = function openSyncUnsafe(arg0, arg1) {
  const Host = Host2.Host;
  const openSyncUnsafeResult = Host.openSyncUnsafe(arg0, arg1);
  if (typeof Database === "function") {
    const obj = Object.create(Database.prototype);
    obj.raw = openSyncUnsafeResult;
    obj.name = openSyncUnsafeResult.name;
    obj.lastState = TableId.DatabaseState.Open;
    obj.handle = openSyncUnsafeResult.handle;
    const Runtime = Runtime2.Runtime;
    obj.databaseStateCallback = Runtime.addDatabaseStateCallback((arg0, lastState) => {
      if (obj.handle === arg0) {
        tmp.lastState = lastState;
      }
    });
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
Database["delete"] = function delete(arg0) {
  const Host = Host2.Host;
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
  const Runtime = Runtime2.Runtime;
  const result = Runtime.removeCompletionCallback(self.databaseStateCallback);
};
prototype["disable"] = function disable(reason) {
  const self = this;
  if (null == this.raw) {
    let resolved = Promise.resolve();
  } else {
    self.lastState = TableId.DatabaseState.Disabled;
    const obj = { type: "db.disable", handle: 0, reason };
    resolved = self.execute(obj);
  }
  return resolved;
};
prototype["execute"] = function execute(table, type) {
  const self = this;
  importDefault = table;
  _require = type;
  if (null == this.raw) {
    const _Error = Error;
    const _HermesInternal2 = HermesInternal;
    const error = new Error("database is no longer open (database: " + tmp);
    throw error;
  } else {
    if ("key" in table) {
      let str = table.key[0];
    } else {
      str = table.table;
    }
    if (null === type) {
      let Runtime = require("Runtime").Runtime;
      if (type == null) {
        type = table.type;
      }
      let executeAsyncResult = Runtime.executeAsync(type, async (arg0) => {
        raw = raw.raw;
        const obj = {};
        const merged = Object.assign(table);
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
        const Runtime = Runtime2.Runtime;
        type = closure_0;
        if (closure_0 == null) {
          type = closure_1.type;
        }
        return Runtime.executeAsync(type, async (arg0) => {
          raw = raw.raw;
          const obj = {};
          const merged = Object.assign(table);
          obj.handle = 0;
          raw.execute(arg0, obj);
        });
      }
      executeAsyncResult = require("AppStartPerformance").timeAsync("\u{1F4BE}", "" + type2 + " " + str, callback);
      let obj = require("AppStartPerformance");
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
    const error = new Error("database is no longer open (database: " + tmp);
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
    return AppStartPerformanceDefault.time("\u{1F4BE}", "SYNC: " + table.type + " " + str, () => {
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
  return (async () => {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else if (null == self.raw) {
            const Closed = self(c2[2]).DatabaseState.Closed;
            c2 = 3;
          } else {
            c1 = 1;
            c2 = 1;
            const obj1 = { value: self.execute({ type: "db.state" }), done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 !== 2) {
          self.lastState = value;
        }
        c2 = 3;
        obj = { value, done: true };
        return obj;
      } catch (tmp9) {
        c2 = tmp;
        throw tmp9;
      }
    }
  })();
};
prototype["state"] = function state() {
  return this.lastState;
};
prototype["transaction"] = function transaction(fn, arg1) {
  const self = this;
  closure_1 = arg1;
  if (typeof DatabaseTransaction === "function") {
    let obj = Object.create(tmp2.prototype);
    obj.database = tmp;
    obj.operations = [];
    const resolved = Promise.resolve(fn(obj));
    return resolved.then(() => {
      if (obj.operations.length > 0) {
        obj = { type: "db.transaction", operations: null };
        obj.operations = obj.complete();
        let executeResult = self.execute(obj, closure_1);
      } else {
        executeResult = Promise.resolve();
      }
      return executeResult;
    });
  } else {
    throw new TypeError("Trying to call a non-function");
  }
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
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/kv-storage/js/api/Database.tsx");

export { Database };
export { DatabaseTransaction };