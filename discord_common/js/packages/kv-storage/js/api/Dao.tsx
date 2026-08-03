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
    table = new require("fromDatabaseTransaction").Table(items, require, importDefault, flag);
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
  if (typeof Dao !== "fileFinishedImporting") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(Dao.prototype);
  obj.originalPrefix = originalPrefix;
  const items = [originalPrefix];
  const table = new require(1912) /* fromDatabaseTransaction */.Table(items, this.table.tableId, this.table.database, false);
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
prototype["put"] = function put(arg0, data) {
  let Replace = arg2;
  if (arg2 === undefined) {
    Replace = require(1914) /* TableId */.ConflictOptions.Replace;
  }
  const table = this.table;
  const items = [arg0];
  return table.put({ key: items, data, generation: null }, Replace);
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
  let closure_0 = arg0;
  const table = this.table;
  return table.transaction((transaction) => {
    if (typeof outer1_2 !== "fileFinishedImporting") {
      HermesBuiltin.throwTypeError();
    }
    const obj = Object.create(outer1_2.prototype);
    obj.transaction = transaction;
    return closure_0(obj);
  }, arg1);
};
prototype["upgradeTransaction"] = function upgradeTransaction(arg0) {
  const table = this.table;
  if (typeof DaoTransaction !== "fileFinishedImporting") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(DaoTransaction.prototype);
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
  const tableTransaction = new require(1912) /* fromDatabaseTransaction */.TableTransaction(prefix, tableId, transaction);
  if (typeof DaoTransaction !== "fileFinishedImporting") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(DaoTransaction.prototype);
  obj.transaction = tableTransaction;
  return obj;
};
prototype2["put"] = function put(arg0, data) {
  let Replace = arg2;
  if (arg2 === undefined) {
    Replace = require(1914) /* TableId */.ConflictOptions.Replace;
  }
  const transaction = this.transaction;
  const items = [arg0];
  transaction.put({ key: items, data, generation: null }, Replace);
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
const result = require("set").fileFinishedImporting("../discord_common/js/packages/kv-storage/js/api/Dao.tsx");

export { Dao };
export { DaoTransaction };