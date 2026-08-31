// === Module 1968: prefix ===

// Module 1968 (prefix)
import set from "set" /* 2 */;
import fromDatabaseTransaction from "fromDatabaseTransaction" /* 1961 */;
import TableId from "TableId" /* 1963 */;

let GuildDao;
class GuildDao {
  constructor(arg0, arg1, arg2) {
    flag = importAll;
    if (importAll === undefined) {
      flag = true;
    }
    obj = Object.create(new.target.prototype);
    obj.originalPrefix = global;
    items = [];
    items[0] = global;
    table = new require("fromDatabaseTransaction").Table(items, require, importDefault, flag);
    obj.table = table;
    return obj;
  }
}
const prototype = GuildDao.prototype;
Object.defineProperty(prototype, "prefix", {
  get: function prefix() {
    return this.table.prefix;
  },
  set: undefined
});
prototype["withoutLogging"] = function withoutLogging() {
  const originalPrefix = this.originalPrefix;
  if (typeof GuildDao !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(GuildDao.prototype);
  obj.originalPrefix = originalPrefix;
  const items = [originalPrefix];
  const table = new fromDatabaseTransaction.Table(items, this.table.tableId, this.table.database, false);
  obj.table = table;
  return obj;
};
prototype["get"] = function get(arg0, arg1) {
  const table = this.table;
  const items = [arg0, arg1];
  return table.get(items);
};
prototype["getMany"] = function getMany(arg0, arg1) {
  const table = this.table;
  const items = [arg0];
  return table.getMany(items, arg1);
};
prototype["getRange"] = function getRange(arg0, arg1, arg2, arg3) {
  const table = this.table;
  const items = [arg0, arg1];
  const items1 = [arg0, arg2];
  return table.getRange(items, items1, arg3);
};
prototype["getKvEntries"] = function getKvEntries() {
  const table = this.table;
  return table.getKvEntries();
};
prototype["getMapEntries"] = function getMapEntries() {
  const table = this.table;
  return table.getMapEntries();
};
prototype["getIds"] = function getIds(arg0) {
  const table = this.table;
  const items = [arg0];
  return table.getChildIds(items);
};
prototype["getGuildIds"] = function getGuildIds() {
  const table = this.table;
  return table.getChildIds([]);
};
prototype["getGuildId"] = function getGuildId(arg0) {
  const table = this.table;
  const items = [null, arg0];
  return table.getParentId(items);
};
prototype["put"] = function put(arg0, arg1, arg2) {
  let Replace = arg3;
  if (arg3 === undefined) {
    Replace = TableId.ConflictOptions.Replace;
  }
  return this.putWithGeneration(arg0, arg1, arg2, null, Replace);
};
prototype["putWithGeneration"] = function putWithGeneration(arg0, arg1, data, generation) {
  let Replace = arg4;
  if (arg4 === undefined) {
    Replace = TableId.ConflictOptions.Replace;
  }
  const table = this.table;
  const items = [arg0, arg1];
  return table.put({ key: items, data, generation }, Replace);
};
prototype["delete"] = function delete(arg0, arg1) {
  const length = arguments.length;
  const self = this;
  if (0 === length) {
    const table3 = self.table;
    return table3.delete([]);
  } else if (1 === length) {
    const table2 = self.table;
    const items = [arg0];
    return table2.delete(items);
  } else {
    const table = self.table;
    const items1 = [arg0, arg1];
    return table.delete(items1);
  }
};
prototype["deleteGeneration"] = function deleteGeneration(arg0, arg1) {
  const table = this.table;
  return table.deleteGeneration([], arg0, arg1);
};
prototype["transaction"] = function transaction(arg0, arg1) {
  closure_0 = arg0;
  const table = this.table;
  return table.transaction((state) => {
    if (typeof closure_1_2 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = Object.create(closure_1_2.prototype);
    obj.state = state;
    return closure_0(obj);
  }, arg1);
};
prototype["upgradeTransaction"] = function upgradeTransaction(arg0) {
  const table = this.table;
  if (typeof GuildDaoTransaction !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(GuildDaoTransaction.prototype);
  obj.state = table.upgradeTransaction(arg0);
  return obj;
};
prototype["getManySyncUnsafe"] = function getManySyncUnsafe(arg0, arg1) {
  const table = this.table;
  const items = [arg0];
  return table.getManySyncUnsafe(items, arg1);
};
prototype["getMapEntriesSyncUnsafe"] = function getMapEntriesSyncUnsafe() {
  const table = this.table;
  return table.getMapEntriesSyncUnsafe();
};
let GuildDaoTransaction;
class GuildDaoTransaction {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj.state = global;
    return obj;
  }
}
const prototype2 = GuildDaoTransaction.prototype;
GuildDaoTransaction["fromDatabaseTransaction"] = function fromDatabaseTransaction(prefix, tableId, transaction) {
  const tableTransaction = new fromDatabaseTransaction.TableTransaction(prefix, tableId, transaction);
  if (typeof GuildDaoTransaction !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(GuildDaoTransaction.prototype);
  obj.state = tableTransaction;
  return obj;
};
prototype2["put"] = function put(arg0, arg1, arg2) {
  let Replace = arg3;
  if (arg3 === undefined) {
    Replace = TableId.ConflictOptions.Replace;
  }
  this.putWithGeneration(arg0, arg1, arg2, null, Replace);
};
prototype2["putWithGeneration"] = function putWithGeneration(arg0, arg1, data, generation) {
  let Replace = arg4;
  if (arg4 === undefined) {
    Replace = TableId.ConflictOptions.Replace;
  }
  const state = this.state;
  const items = [arg0, arg1];
  return state.put({ key: items, data, generation }, Replace);
};
prototype2["delete"] = function delete(arg0, arg1) {
  const length = arguments.length;
  const self = this;
  if (0 === length) {
    const state3 = self.state;
    state3.delete([]);
  } else if (1 === length) {
    const state2 = self.state;
    const items = [arg0];
    state2.delete(items);
  } else {
    const state = self.state;
    const items1 = [arg0, arg1];
    state.delete(items1);
  }
};
prototype2["deleteGeneration"] = function deleteGeneration(arg0, arg1) {
  const state = this.state;
  return state.deleteGeneration([], arg0, arg1);
};
const result = set.fileFinishedImporting("../discord_common/js/packages/kv-storage/js/api/GuildDao.tsx");

export { GuildDao };
export { GuildDaoTransaction };