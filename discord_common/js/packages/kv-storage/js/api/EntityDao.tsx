// discord_common/js/packages/kv-storage/js/api/EntityDao.tsx
import set from "set" /* 2 */;
import fromDatabaseTransaction from "fromDatabaseTransaction" /* 1960 */;
import TableId from "TableId" /* 1962 */;

let EntityDao;
class EntityDao {
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
const prototype = EntityDao.prototype;
Object.defineProperty(prototype, "prefix", {
  get: function prefix() {
    return this.table.prefix;
  },
  set: undefined
});
prototype["withoutLogging"] = function withoutLogging() {
  const originalPrefix = this.originalPrefix;
  if (typeof EntityDao !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(EntityDao.prototype);
  obj.originalPrefix = originalPrefix;
  const items = [originalPrefix];
  const table = new fromDatabaseTransaction.Table(items, this.table.tableId, this.table.database, false);
  obj.table = table;
  return obj;
};
prototype["get"] = function get(arg0) {
  const table = this.table;
  const items = [arg0];
  return table.get(items);
};
prototype["getMany"] = function getMany(arg0) {
  const table = this.table;
  return table.getMany([], arg0);
};
prototype["getRange"] = function getRange(arg0, arg1, arg2) {
  const table = this.table;
  const items = [arg0];
  const items1 = [arg1];
  return table.getRange(items, items1, arg2);
};
prototype["getKvEntries"] = function getKvEntries() {
  const table = this.table;
  return table.getKvEntries();
};
prototype["getMapEntries"] = function getMapEntries() {
  const table = this.table;
  return table.getMapEntries();
};
prototype["getIds"] = function getIds() {
  const table = this.table;
  return table.getChildIds([]);
};
prototype["getParentId"] = function getParentId(arg0) {
  const table = this.table;
  const items = [null, arg0];
  return table.getParentId(items);
};
prototype["put"] = function put(arg0) {
  const _require = arg0;
  let Replace = arg1;
  if (arg1 === undefined) {
    Replace = _require(Replace[1]).ConflictOptions.Replace;
  }
  return this.transaction((put) => put.put(closure_0, Replace), "" + this.prefix + " put");
};
prototype["putAll"] = function putAll(arg0) {
  const _require = arg0;
  let Replace = arg1;
  if (arg1 === undefined) {
    Replace = _require(Replace[1]).ConflictOptions.Replace;
  }
  return this.transaction((putAll) => putAll.putAll(closure_0, Replace), "" + this.prefix + " putAll");
};
prototype["replaceAll"] = function replaceAll(arg0) {
  closure_0 = arg0;
  return this.transaction((str) => str.replaceAll(closure_0), "" + this.prefix + " replaceAll");
};
prototype["delete"] = function delete(arg0) {
  closure_0 = arg0;
  return this.transaction((arg0) => arg0.delete(closure_0), "" + this.prefix + " delete");
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
  if (typeof EntityDaoTransaction !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(EntityDaoTransaction.prototype);
  obj.transaction = table.upgradeTransaction(arg0);
  return obj;
};
prototype["getManySyncUnsafe"] = function getManySyncUnsafe(arg0) {
  const table = this.table;
  return table.getManySyncUnsafe([], arg0);
};
prototype["getMapEntriesSyncUnsafe"] = function getMapEntriesSyncUnsafe() {
  const table = this.table;
  return table.getMapEntriesSyncUnsafe();
};
EntityDao["cell"] = function cell(data, generation) {
  const items = [data.id];
  return { key: items, data, generation };
};
let EntityDaoTransaction;
class EntityDaoTransaction {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj.transaction = global;
    return obj;
  }
}
const prototype2 = EntityDaoTransaction.prototype;
EntityDaoTransaction["fromDatabaseTransaction"] = function fromDatabaseTransaction(prefix, tableId, transaction) {
  const tableTransaction = new fromDatabaseTransaction.TableTransaction(prefix, tableId, transaction);
  if (typeof EntityDaoTransaction !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(EntityDaoTransaction.prototype);
  obj.transaction = tableTransaction;
  return obj;
};
prototype2["put"] = function put(arg0) {
  let Replace = arg1;
  if (arg1 === undefined) {
    Replace = TableId.ConflictOptions.Replace;
  }
  const transaction = this.transaction;
  return transaction.put(EntityDao.cell(arg0, null), Replace);
};
prototype2["putAll"] = function putAll(arr) {
  let Replace = arg1;
  if (arg1 === undefined) {
    Replace = TableId.ConflictOptions.Replace;
  }
  const transaction = this.transaction;
  return transaction.putAll(arr.map((arg0) => closure_2.cell(arg0, null)), Replace);
};
prototype2["replaceAll"] = function replaceAll(arg0) {
  this.delete();
  this.putAll(arg0);
};
prototype2["delete"] = function delete(arg0) {
  const self = this;
  if (0 === arguments.length) {
    const transaction2 = self.transaction;
    let deleteResult = transaction2.delete([]);
  } else {
    const transaction = self.transaction;
    const items = [arg0];
    deleteResult = transaction.delete(items);
  }
  return deleteResult;
};
prototype2["deleteAllExcept"] = function deleteAllExcept(arg0) {
  const transaction = this.transaction;
  transaction.deleteAllExcept([], arg0);
};
const result = set.fileFinishedImporting("../discord_common/js/packages/kv-storage/js/api/EntityDao.tsx");

export { EntityDao };
export { EntityDaoTransaction };