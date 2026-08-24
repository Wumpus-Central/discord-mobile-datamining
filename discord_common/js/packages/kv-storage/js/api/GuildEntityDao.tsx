// === Module 1968: prefix ===

// Module 1968 (prefix)
import set from "set" /* 2 */;
import fromDatabaseTransaction from "fromDatabaseTransaction" /* 1960 */;
import TableId from "TableId" /* 1962 */;

let GuildEntityDao;
class GuildEntityDao {
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
const prototype = GuildEntityDao.prototype;
Object.defineProperty(prototype, "prefix", {
  get: function prefix() {
    return this.table.prefix;
  },
  set: undefined
});
prototype["withoutLogging"] = function withoutLogging() {
  const originalPrefix = this.originalPrefix;
  if (typeof GuildEntityDao !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(GuildEntityDao.prototype);
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
prototype["put"] = function put(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  let Replace = arg2;
  if (arg2 === undefined) {
    Replace = _require(1962).ConflictOptions.Replace;
  }
  return this.transaction((put) => put.put(closure_0, closure_1, Replace), "" + this.prefix + " put");
};
prototype["putAll"] = function putAll(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  let Replace = arg2;
  if (arg2 === undefined) {
    Replace = _require(1962).ConflictOptions.Replace;
  }
  return this.transaction((putAll) => putAll.putAll(closure_0, closure_1, Replace), "" + this.prefix + " putAll");
};
prototype["replaceAll"] = function replaceAll(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return this.transaction((str) => str.replaceAll(closure_0, closure_1), "" + this.prefix + " replaceAll");
};
prototype["delete"] = function delete(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return this.transaction((arg0) => arg0.delete(closure_0, closure_1), "" + this.prefix + " delete");
};
prototype["deleteGeneration"] = function deleteGeneration(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return this.transaction((deleteGeneration) => deleteGeneration.deleteGeneration(closure_0, closure_1), "" + this.prefix + " deleteGeneration");
};
prototype["transaction"] = function transaction(arg0, arg1) {
  closure_0 = arg0;
  const table = this.table;
  return table.transaction((transaction) => {
    if (typeof closure_1_3 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = Object.create(closure_1_3.prototype);
    obj.transaction = transaction;
    return closure_0(obj);
  }, arg1);
};
prototype["upgradeTransaction"] = function upgradeTransaction(arg0) {
  const table = this.table;
  if (typeof GuildEntityDaoTransaction !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(GuildEntityDaoTransaction.prototype);
  obj.transaction = table.upgradeTransaction(arg0);
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
prototype["deleteSyncUnsafe"] = function deleteSyncUnsafe(arg0) {
  const table = this.table;
  const items = [arg0];
  return table.deleteSyncUnsafe(items);
};
GuildEntityDao["cell"] = function cell(arg0, data, generation) {
  const items = [arg0, data.id];
  return { key: items, data, generation };
};
let GuildEntityDaoTransaction;
class GuildEntityDaoTransaction {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj.transaction = global;
    return obj;
  }
}
const prototype2 = GuildEntityDaoTransaction.prototype;
GuildEntityDaoTransaction["fromDatabaseTransaction"] = function fromDatabaseTransaction(prefix, tableId, transaction) {
  const tableTransaction = new fromDatabaseTransaction.TableTransaction(prefix, tableId, transaction);
  if (typeof GuildEntityDaoTransaction !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(GuildEntityDaoTransaction.prototype);
  obj.transaction = tableTransaction;
  return obj;
};
prototype2["put"] = function put(arg0, arg1) {
  let Replace = arg2;
  if (arg2 === undefined) {
    Replace = TableId.ConflictOptions.Replace;
  }
  return this.putWithGeneration(arg0, arg1, null, Replace);
};
prototype2["putWithGeneration"] = function putWithGeneration(arg0, arg1, arg2) {
  let Replace = arg3;
  if (arg3 === undefined) {
    Replace = TableId.ConflictOptions.Replace;
  }
  const transaction = this.transaction;
  return transaction.put(GuildEntityDao.cell(arg0, arg1, arg2), Replace);
};
prototype2["putAll"] = function putAll(arg0, arr) {
  const _require = arg0;
  let Replace = arg2;
  if (arg2 === undefined) {
    Replace = _require(1962).ConflictOptions.Replace;
  }
  const transaction = this.transaction;
  return transaction.putAll(arr.map((arg0) => closure_1_2.cell(closure_0, arg0, null)), Replace);
};
prototype2["replaceAll"] = function replaceAll(arg0, arg1) {
  this.delete(arg0);
  this.putAll(arg0, arg1);
};
prototype2["delete"] = function delete(arg0, arg1) {
  const length = arguments.length;
  const self = this;
  if (0 === length) {
    const transaction3 = self.transaction;
    return transaction3.delete([]);
  } else if (1 === length) {
    const transaction2 = self.transaction;
    const items = [arg0];
    return transaction2.delete(items);
  } else {
    const transaction = self.transaction;
    const items1 = [arg0, arg1];
    return transaction.delete(items1);
  }
};
prototype2["deleteAllExcept"] = function deleteAllExcept(arg0) {
  const transaction = this.transaction;
  transaction.deleteAllExcept([], arg0);
};
prototype2["deleteGeneration"] = function deleteGeneration(arg0, arg1) {
  const transaction = this.transaction;
  return transaction.deleteGeneration([], arg0, arg1);
};
const result = set.fileFinishedImporting("../discord_common/js/packages/kv-storage/js/api/GuildEntityDao.tsx");

export { GuildEntityDao };
export { GuildEntityDaoTransaction };