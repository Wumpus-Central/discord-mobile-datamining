// === Module 1997: EntityDao ===

// Module 1997 (EntityDao)
import Table from "Table" /* 1991 */;
import TableId from "TableId" /* 1993 */;
import size from "module_2" /* 2 */;

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
    table = new closure_0(closure_1[0]).Table(items, require, importDefault, flag);
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
  const tableId = this.table.tableId;
  const database = this.table.database;
  if (typeof EntityDao === "function") {
    const obj = Object.create(EntityDao.prototype);
    obj.originalPrefix = originalPrefix;
    const items = [originalPrefix];
    const table = new Table.Table(items, tableId, database, false);
    obj.table = table;
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
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
  closure_0 = arg0;
  let Replace = arg1;
  if (arg1 === undefined) {
    Replace = TableId.ConflictOptions.Replace;
  }
  return this.transaction((put) => put.put(closure_0, Replace), "" + this.prefix + " put");
};
prototype["putAll"] = function putAll(arg0) {
  closure_0 = arg0;
  let Replace = arg1;
  if (arg1 === undefined) {
    Replace = TableId.ConflictOptions.Replace;
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
    if (typeof EntityDaoTransaction === "function") {
      const obj = Object.create(tmp2.prototype);
      obj.transaction = transaction;
      return tmp(obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }, arg1);
};
prototype["upgradeTransaction"] = function upgradeTransaction(arg0) {
  if (typeof EntityDaoTransaction === "function") {
    const obj = Object.create(EntityDaoTransaction.prototype);
    obj.transaction = tmp2;
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
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
  const obj = { key: null, data, generation };
  const items = [data.id];
  obj.key = items;
  return obj;
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
  const tableTransaction = new Table.TableTransaction(prefix, tableId, transaction);
  if (typeof EntityDaoTransaction === "function") {
    const obj = Object.create(EntityDaoTransaction.prototype);
    obj.transaction = tableTransaction;
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
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
  return transaction.putAll(arr.map((item) => EntityDao.cell(item, null)), Replace);
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
const result = size.fileFinishedImporting("../discord_common/js/packages/kv-storage/js/api/EntityDao.tsx");

export { EntityDao };
export { EntityDaoTransaction };