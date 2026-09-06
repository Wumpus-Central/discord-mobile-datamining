// === Module 1990: Dao ===

// Module 1990 (Dao)
import Table from "Table" /* 1991 */;
import TableId from "TableId" /* 1993 */;
import size from "module_2" /* 2 */;

let Dao;
class Dao {
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
const prototype = Dao.prototype;
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
  if (typeof Dao === "function") {
    const obj = Object.create(Dao.prototype);
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
prototype["put"] = function put(arg0, data) {
  let Replace = arg2;
  if (arg2 === undefined) {
    Replace = TableId.ConflictOptions.Replace;
  }
  const table = this.table;
  const obj = { key: null, data, generation: null };
  const items = [arg0];
  obj.key = items;
  return table.put(obj, Replace);
};
prototype["delete"] = function delete(arg0) {
  const self = this;
  if (0 === arguments.length) {
    const table2 = self.table;
    let deleteResult = table2.delete();
  } else {
    const table = self.table;
    const items = [arg0];
    deleteResult = table.delete(items);
  }
  return deleteResult;
};
prototype["transaction"] = function transaction(arg0, arg1) {
  closure_0 = arg0;
  const table = this.table;
  return table.transaction((transaction) => {
    if (typeof DaoTransaction === "function") {
      const obj = Object.create(tmp2.prototype);
      obj.transaction = transaction;
      return tmp(obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }, arg1);
};
prototype["upgradeTransaction"] = function upgradeTransaction(arg0) {
  if (typeof DaoTransaction === "function") {
    const obj = Object.create(tmp.prototype);
    obj.transaction = tmp2;
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  tmp = DaoTransaction;
};
prototype["getManySyncUnsafe"] = function getManySyncUnsafe(arg0) {
  const table = this.table;
  return table.getManySyncUnsafe([], arg0);
};
prototype["getMapEntriesSyncUnsafe"] = function getMapEntriesSyncUnsafe() {
  const table = this.table;
  return table.getMapEntriesSyncUnsafe();
};
let DaoTransaction;
class DaoTransaction {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj.transaction = global;
    return obj;
  }
}
const prototype2 = DaoTransaction.prototype;
DaoTransaction["fromDatabaseTransaction"] = function fromDatabaseTransaction(prefix, tableId, transaction) {
  const tableTransaction = new Table.TableTransaction(prefix, tableId, transaction);
  if (typeof DaoTransaction === "function") {
    const obj = Object.create(tmp.prototype);
    obj.transaction = tableTransaction;
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  tmp = DaoTransaction;
};
prototype2["put"] = function put(arg0, data) {
  let Replace = arg2;
  if (arg2 === undefined) {
    Replace = TableId.ConflictOptions.Replace;
  }
  const transaction = this.transaction;
  const obj = { key: null, data, generation: null };
  const items = [arg0];
  obj.key = items;
  transaction.put(obj, Replace);
};
prototype2["delete"] = function delete(arg0) {
  const self = this;
  if (0 === arguments.length) {
    const transaction2 = self.transaction;
    let deleteResult = transaction2.delete();
  } else {
    const transaction = self.transaction;
    const items = [arg0];
    deleteResult = transaction.delete(items);
  }
  return deleteResult;
};
const result = size.fileFinishedImporting("../discord_common/js/packages/kv-storage/js/api/Dao.tsx");

export { Dao };
export { DaoTransaction };