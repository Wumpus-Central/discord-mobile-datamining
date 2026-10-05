// === Module 2089: EntityDao ===

// Module 2089 (EntityDao)
import Table from "Table" /* 2083 */;
import TableId from "TableId" /* 2085 */;
import size from "module_2" /* 2 */;

class EntityDao {
  constructor(guild_versions, KvCache, database) {
    const obj = Object.create(new.target.prototype);
    obj.originalPrefix = guild_versions;
    const items = [guild_versions];
    const table = new Table.Table(items, KvCache, database, flag);
    obj.table = table;
    return obj;
  }
  withoutLogging() {
    const originalPrefix = this.originalPrefix;
    const tableId = this.table.tableId;
    const database = this.table.database;
    if (typeof EntityDao === "function") {
      const obj = Object.create(EntityDao.prototype);
      obj.originalPrefix = originalPrefix;
      const items = [originalPrefix];
      const self = this;
      const self2 = this;
      const table = new Table.Table(items, tableId, database, false);
      obj.table = table;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  get(arg0) {
    const table = this.table;
    const items = [arg0];
    return table.get(items);
  }
  getMany(arg0) {
    const table = this.table;
    return table.getMany([], arg0);
  }
  getRange(arg0, arg1, arg2) {
    const table = this.table;
    const items = [arg0];
    const items1 = [arg1];
    return table.getRange(items, items1, arg2);
  }
  getKvEntries() {
    const table = this.table;
    return table.getKvEntries();
  }
  getMapEntries() {
    const table = this.table;
    return table.getMapEntries();
  }
  getIds() {
    const table = this.table;
    return table.getChildIds([]);
  }
  getParentId(arg0) {
    const table = this.table;
    const items = [null, arg0];
    return table.getParentId(items);
  }
  put(arg0) {
    let closure_0 = arg0;
    let Replace = arg1;
    if (arg1 === undefined) {
      Replace = TableId.ConflictOptions.Replace;
    }
    return this.transaction((put) => put.put(closure_0, Replace), "" + this.prefix + " put");
  }
  putAll(arg0) {
    let closure_0 = arg0;
    let Replace = arg1;
    if (arg1 === undefined) {
      Replace = TableId.ConflictOptions.Replace;
    }
    return this.transaction((putAll) => putAll.putAll(closure_0, Replace), "" + this.prefix + " putAll");
  }
  replaceAll(arg0) {
    let closure_0 = arg0;
    return this.transaction((str) => str.replaceAll(closure_0), "" + this.prefix + " replaceAll");
  }
  delete(arg0) {
    let closure_0 = arg0;
    return this.transaction((arg0) => arg0.delete(closure_0), "" + this.prefix + " delete");
  }
  transaction(arg0, arg1) {
    let closure_0 = arg0;
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
  }
  upgradeTransaction(arg0) {
    if (typeof EntityDaoTransaction === "function") {
      const obj = Object.create(EntityDaoTransaction.prototype);
      obj.transaction = tmp2;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  getManySyncUnsafe(arg0) {
    const table = this.table;
    return table.getManySyncUnsafe([], arg0);
  }
  getMapEntriesSyncUnsafe() {
    const table = this.table;
    return table.getMapEntriesSyncUnsafe();
  }
  static cell(data, generation) {
    let items;
    const obj = { key: items, data, generation };
    items = [data.id];
    return obj;
  }
}
Object.defineProperty(EntityDao.prototype, "prefix", {
  get: function prefix() {
    return this.table.prefix;
  },
  set: undefined
});
class EntityDaoTransaction {
  constructor(transaction) {
    const obj = Object.create(new.target.prototype);
    obj.transaction = transaction;
    return obj;
  }
  static fromDatabaseTransaction(prefix, tableId, transaction) {
    const tableTransaction = new Table.TableTransaction(prefix, tableId, transaction);
    if (typeof EntityDaoTransaction === "function") {
      const obj = Object.create(EntityDaoTransaction.prototype);
      obj.transaction = tableTransaction;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  put(arg0) {
    let Replace = arg1;
    if (arg1 === undefined) {
      Replace = TableId.ConflictOptions.Replace;
    }
    const transaction = this.transaction;
    return transaction.put(EntityDao.cell(arg0, null), Replace);
  }
  putAll(arr) {
    let Replace = arg1;
    if (arg1 === undefined) {
      Replace = TableId.ConflictOptions.Replace;
    }
    const transaction = this.transaction;
    return transaction.putAll(arr.map((item) => EntityDao.cell(item, null)), Replace);
  }
  replaceAll(arg0) {
    this.delete();
    this.putAll(arg0);
  }
  delete(arg0) {
    let deleteResult;
    const self = this;
    if (0 === arguments.length) {
      const transaction2 = self.transaction;
      deleteResult = transaction2.delete([]);
    } else {
      const transaction = self.transaction;
      const items = [arg0];
      deleteResult = transaction.delete(items);
    }
    return deleteResult;
  }
  deleteAllExcept(arg0) {
    const transaction = this.transaction;
    transaction.deleteAllExcept([], arg0);
  }
}
const prototype = EntityDaoTransaction.prototype;
const result = size.fileFinishedImporting("../discord_common/js/packages/kv-storage/js/api/EntityDao.tsx");

export { EntityDao };
export { EntityDaoTransaction };