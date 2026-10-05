// === Module 2086: Database ===

// Module 2086 (Database)
import AppStartPerformanceDefault from "AppStartPerformance" /* 10 */;
import TableId from "TableId" /* 2085 */;
import Host2 from "Host" /* 2087 */;
import Runtime2 from "Runtime" /* 2088 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c2, importDefault;

class Database {
  constructor(raw) {
    const obj = Object.create(new.target.prototype);
    obj.raw = raw;
    obj.name = raw.name;
    obj.lastState = TableId.DatabaseState.Open;
    obj.handle = raw.handle;
    const Runtime = Runtime2.Runtime;
    obj.databaseStateCallback = Runtime.addDatabaseStateCallback((arg0, lastState) => {
      if (obj.handle === arg0) {
        tmp.lastState = lastState;
      }
    });
    return obj;
  }
  static open(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    return (async function() {
      let c1;
      closure_0 = Database;
      const Host = closure_0(c2[1]).Host;
      await Host.open(closure_0, closure_1);
      const self = this;
      return new closure_0(value);
    })();
  }
  static openSyncUnsafe(arg0, arg1) {
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
  }
  static delete(arg0) {
    const Host = Host2.Host;
    return Host.delete(arg0);
  }
  close() {
    const self = this;
    this.lastState = TableId.DatabaseState.Closed;
    const raw = this.raw;
    if (raw != null) {
      raw.close();
    }
    self.raw = null;
    const Runtime = Runtime2.Runtime;
    const result = Runtime.removeCompletionCallback(self.databaseStateCallback);
  }
  disable(reason) {
    let resolved;
    const self = this;
    if (null == this.raw) {
      resolved = Promise.resolve();
    } else {
      self.lastState = TableId.DatabaseState.Disabled;
      const obj = { type: "db.disable", handle: 0, reason };
      resolved = self.execute(obj);
    }
    return resolved;
  }
  execute(table, type) {
    const f135623 = async (arg0) => {
      raw = raw.raw;
      const execute = raw.execute;
      const obj = { handle: 0 };
      const merged = Object.assign(table);
      execute(arg0, obj);
    };
    let self = this;
    importDefault = table;
    _require = type;
    if (null == this.raw) {
      const _Error = Error;
      const _HermesInternal2 = HermesInternal;
      self = this;
      const self2 = this;
      const error = new Error("database is no longer open (database: " + tmp);
      throw error;
    } else {
      let str;
      let executeAsyncResult;
      if ("key" in table) {
        str = table.key[0];
      } else {
        str = table.table;
      }
      if (null === type) {
        let Runtime = require("Runtime").Runtime;
        let executeAsync = Runtime.executeAsync;
        if (type == null) {
          type = table.type;
        }
        executeAsyncResult = executeAsync(type, f135623);
      } else {
        let type2 = type;
        const timeAsync = require("AppStartPerformance").timeAsync;
        require("AppStartPerformance");
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
          const executeAsync = Runtime.executeAsync;
          if (closure_0 == null) {
            type = table.type;
          }
          return executeAsync(type, f135623);
        }
        executeAsyncResult = timeAsync("\u{1F4BE}", "" + type2 + " " + str, callback);
      }
      return executeAsyncResult;
    }
  }
  executeSync(table) {
    let self = this;
    let closure_0 = table;
    if (null == this.raw) {
      const _Error = Error;
      const _HermesInternal2 = HermesInternal;
      self = this;
      const self2 = this;
      const error = new Error("database is no longer open (database: " + tmp);
      throw error;
    } else {
      let str;
      if ("key" in table) {
        str = table.key[0];
      } else {
        str = table.table;
      }
      const time = AppStartPerformanceDefault.time;
      const type = table.type;
      AppStartPerformanceDefault;
      if (str == null) {
        str = "";
      }
      const _HermesInternal = HermesInternal;
      return time("\u{1F4BE}", "SYNC: " + type + " " + str, () => {
        const raw = self.raw;
        const execute = raw.execute;
        const obj = { handle: 0 };
        const merged = Object.assign(closure_0);
        return execute(null, obj, { synchronous: true });
      });
    }
  }
  fullVacuum() {
    return this.execute({ type: "db.vacuum", handle: 0, complete: true });
  }
  fsInfo() {
    return this.execute({ type: "db.fs_info", handle: 0 });
  }
  incrementalVacuum() {
    return this.execute({ type: "db.vacuum", handle: 0, complete: false });
  }
  instantaneousState() {
    let Closed;
    const self = this;
    if (null == this.raw) {
      Closed = TableId.DatabaseState.Closed;
    } else {
      Closed = self.executeSync({ type: "db.state" });
      self.lastState = Closed;
    }
    return Closed;
  }
  instantaneousStateAsync() {
    const self = this;
    return (async () => {
      let obj6;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
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
          let Closed;
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else if (null == self.raw) {
              Closed = self(c2[2]).DatabaseState.Closed;
            } else {
              c1 = 1;
              c2 = 1;
              const obj4 = { value: self.execute({ type: "db.state" }), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            self.lastState = value;
            Closed = value;
          }
          c2 = 3;
          const obj5 = { value: Closed, done: true };
          return obj5;
        } catch (tmp7) {
          c2 = 3;
          throw tmp7;
        }
      }
    })();
  }
  state() {
    return this.lastState;
  }
  transaction(fn, arg1) {
    const self = this;
    let closure_1 = arg1;
    if (typeof DatabaseTransaction === "function") {
      const obj = Object.create(tmp2.prototype);
      obj.database = tmp;
      obj.operations = [];
      const resolved = Promise.resolve(fn(obj));
      return resolved.then(() => {
        let executeResult;
        if (obj.operations.length > 0) {
          const execute = self.execute;
          const obj2 = { type: "db.transaction", operations: obj.complete() };
          executeResult = execute(obj2, closure_1);
        } else {
          executeResult = Promise.resolve();
        }
        return executeResult;
      });
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const prototype = Database.prototype;
class DatabaseTransaction {
  constructor(database) {
    const obj = Object.create(new.target.prototype);
    obj.database = database;
    obj.operations = [];
    return obj;
  }
  add(arg0) {
    const operations = this.operations;
    operations.push(arg0);
  }
  complete() {
    const iter = this.operations[Symbol.iterator]();
    while (iter !== undefined) {
      iter.next().handle = 0;
      continue;
    }
    return this.operations;
  }
  toString() {
    return "[DatabaseTransaction " + this.database.handle + ": " + this.operations.length + " ops]";
  }
}
const prototype2 = DatabaseTransaction.prototype;
let result = size.fileFinishedImporting("../discord_common/js/packages/kv-storage/js/api/Database.tsx");

export { Database };
export { DatabaseTransaction };